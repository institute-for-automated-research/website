#!/usr/bin/env node
// Build a distill-papers work-list for one JFE (Journal of Financial Economics)
// filename-year cohort. The JFE dump is a pile of ScienceDirect export zips
// (Papers/JFE/*.zip); each zipped PDF is named
//   <dash-encoded-truncated-title>_<year>_Journal-of-Financial-Economic[s].pdf
// with NO author surname and a title cut to a fixed length. So, like the RFS
// builder, this resolves each entry via Crossref -- but by bibliographic title
// query (filtered to JFE's ISSN 0304-405X and a +/-1yr window) rather than an
// exact DOI lookup -- to recover the full title, first-author surname, real
// publication year, and DOI. It then derives the same slug shape as JF/RFS
// (surname + up to four title content-words + year), drops any paper already
// distilled (papers/jfe/<year>/<slug>.md), extracts the single matching PDF out
// of its zip into WORK_DIR, and prints the args JSON.
//
//   node scripts/build-jfe-items.mjs <filename-year> [limit] > /tmp/jfe-items.json
//   e.g. node scripts/build-jfe-items.mjs 2026 12
//
// Cohorts are simply the "_YYYY_" stamped in the SD filename (the issue/volume
// year), newest-first: 2026, 2025, 2024, ... back to 1974. The slug/dir year is
// Crossref's published year (print, else online), which can differ from the
// filename year for online-first articles -- mirrors the RFS builder.
import { readdirSync, existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const FN_YEAR = process.argv[2];
const LIMIT = process.argv[3] ? Number(process.argv[3]) : Infinity;
if (!FN_YEAR || !/^(19|20)\d{2}$/.test(FN_YEAR)) {
  console.error('usage: build-jfe-items.mjs <filename-year> [limit]'); process.exit(1);
}

const JFE_DIR = '/mnt/data_drive/Dropbox/Dropbox/Papers/JFE';
// Extracted PDFs land in a NON-Dropbox local cache so the ~7GB corpus is not
// duplicated into Dropbox. It is a derived cache: re-extractable from the zips
// at any time. Per-batch extraction is a few MB.
const WORK_DIR = '/mnt/data_drive/jfe-extracted';
const ISSN = '0304-405X';
const MAILTO = 'lopezlirjosealej@ufl.edu';

// Exact-(decoded title) -> slug overrides, for the rare case the derived slug is
// wrong (bad Crossref hit, colliding slug, deliberately curated slug).
const OVERRIDES = {
  // 'Some decoded title': 'author-curated-slug-2026',
};

// Front matter and non-article material -- never distilled.
const JUNK = /^(Editorial-Board|Index|Contents|Table-of-Contents|Copyright|Cover|Publisher'?s?-Note|Author-Index|Subject-Index|Acknowledg|Forthcoming|List-of)/i;

const STOP = new Set(
  ('a an the and or nor but of for to in on at by with without within from into ' +
   'under over about across through during after before between among as is are ' +
   'be been being do does did this that these those their its his her our your my ' +
   'they we you it he she than then when where which who whom whose why how not no')
    .split(' ')
);
const TITLE_WORDS = 4;

const norm = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const authorSlug = (author) => norm(author).replace(/ /g, '-');
const titleSlug = (title) =>
  norm(title).split(' ').filter((w) => w && !STOP.has(w))
    .slice(0, TITLE_WORDS).join('-');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Decode a SD filename stem -> { stem, queryTitle, fnYear }. Returns null for
// names that do not match the JFE export pattern.
function decode(entry) {
  const base = entry.replace(/^.*\//, '');
  const m = base.match(/^(.*)_((?:19|20)\d{2})_Journal-of-Financial/i);
  if (!m) return null;
  const stem = m[1];
  const queryTitle = stem.replace(/-+/g, ' ').replace(/\s+/g, ' ').trim();
  return { base, stem, queryTitle, fnYear: Number(m[2]) };
}

// Crossref bibliographic lookup, JFE ISSN + year window. Returns the top hit.
async function resolve(queryTitle, fnYear) {
  const url = `https://api.crossref.org/works?query.bibliographic=${encodeURIComponent(queryTitle)}`
    + `&filter=issn:${ISSN},from-pub-date:${fnYear - 1}-01-01,until-pub-date:${fnYear + 1}-12-31`
    + `&rows=3&select=DOI,title,author,published-print,published-online,published`
    + `&mailto=${MAILTO}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': `IAR-distill (${MAILTO})` } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const top = ((await res.json()).message.items || [])[0];
      if (!top) throw new Error('no Crossref hit');
      const yp = (top['published-print'] || top['published-online'] || top['published'] || {})
        ['date-parts']?.[0]?.[0];
      const author = (top.author || []).find((a) => a.sequence === 'first') || (top.author || [])[0];
      const surname = author?.family || author?.name;
      const title = (top.title || [])[0];
      if (!yp || !surname || !title) throw new Error('missing metadata');
      return { year: Number(yp), surname, title, doi: (top.DOI || '').toLowerCase() };
    } catch (e) {
      if (attempt === 2) { console.error(`UNRESOLVED "${queryTitle}": ${e.message}`); return null; }
      await sleep(1500 * (attempt + 1));
    }
  }
}

// Index every PDF entry across all zips, deduped by normalized title (first zip
// wins). Front matter dropped. Only the requested filename-year is kept.
function indexCohort(fnYear) {
  const zips = readdirSync(JFE_DIR).filter((f) => f.endsWith('.zip')).sort();
  const seen = new Set();
  const out = [];
  for (const zip of zips) {
    let entries;
    try {
      entries = execFileSync('unzip', ['-Z1', `${JFE_DIR}/${zip}`], { encoding: 'utf8', maxBuffer: 1 << 24 })
        .split('\n').filter(Boolean);
    } catch { continue; }
    for (const entry of entries) {
      if (!/\.pdf$/i.test(entry)) continue;
      const base = entry.replace(/^.*\//, '');
      if (JUNK.test(base)) continue;
      const d = decode(entry);
      if (!d || d.fnYear !== fnYear) continue;
      const key = norm(d.queryTitle);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push({ zip, entry, ...d });
    }
  }
  return out;
}

// Extract one entry to WORK_DIR/<slug>.pdf via `unzip -p` (args, no shell, so
// dashes/accents are literal). Returns the output path.
function extract(zip, entry, slug) {
  mkdirSync(WORK_DIR, { recursive: true });
  const out = `${WORK_DIR}/${slug}.pdf`;
  const buf = execFileSync('unzip', ['-p', `${JFE_DIR}/${zip}`, entry], { maxBuffer: 1 << 28 });
  if (!buf || buf.length < 1000) throw new Error(`empty extract for ${entry}`);
  writeFileSync(out, buf);
  return out;
}

const cohort = indexCohort(Number(FN_YEAR));
console.error(`indexed ${cohort.length} unique article entries for filename-year ${FN_YEAR}`);

const items = [];
const skipped = [];
const dois = new Set();
for (const c of cohort) {
  if (items.length >= LIMIT) break;
  const meta = await resolve(c.queryTitle, c.fnYear);
  await sleep(350); // ~3 req/s, polite to Crossref
  if (!meta) continue;
  if (dois.has(meta.doi)) continue; // de-dup if two entries resolve to the same paper
  dois.add(meta.doi);
  // Year = the SD filename (journal ISSUE) year, per the distill-papers workflow
  // contract: it groups pages by issue year and so dodges the online-first vs
  // issue-year mismatch (a 2026-issue article whose Crossref published-online is
  // 2025). Crossref is used only for surname/title/DOI.
  const year = c.fnYear;
  const papersDir = fileURLToPath(new URL(`../src/content/docs/papers/jfe/${year}/`, import.meta.url));
  const base = OVERRIDES[c.queryTitle] || `${authorSlug(meta.surname)}-${titleSlug(meta.title)}`;
  const slug = `${base}-${year}`;
  if (existsSync(`${papersDir}${slug}.md`)) { skipped.push(slug); continue; }
  let pdf;
  try { pdf = extract(c.zip, c.entry, slug); }
  catch (e) { console.error(`EXTRACT-FAIL ${slug}: ${e.message}`); continue; }
  // crossrefYear is emitted only as an audit hint: for older cohorts where the
  // online-first date diverges from the SD issue year by more than a year, it
  // lets a reviewer spot a slug/dir year (= issue year) that disagrees with the
  // Crossref published year. The distiller ignores it.
  items.push({ slug, journal: 'jfe', year, pdf, doi: meta.doi, hint: meta.title, crossrefYear: meta.year });
}

console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`skipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`\n${items.length} items built (filename-year ${FN_YEAR}, limit ${LIMIT})`);
