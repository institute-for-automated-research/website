#!/usr/bin/env node
// Build a distill-papers work-list for one QJE (Quarterly Journal of Economics,
// Oxford UP) issue. The QJE dump has two filename eras:
//   1. MODERN (this builder): OUP article-id files `qj<series><nnn>.pdf`
//      (e.g. qjaf041.pdf), grouped in `Volume <N>, Issue <M>/` subdirs. The DOI
//      is simply `10.1093/qje/<stem>` -- an EXACT Crossref lookup, no
//      bibliographic guessing. This is the newest-first head of the corpus.
//   2. LEGACY (not yet implemented): opaque `<vol>-<issue>-<startpage>.pdf`
//      names that need a bibliographic / first-page-title resolver. Add that
//      path when the rolling effort reaches the older cohorts.
//
//   node scripts/build-qje-items.mjs "<issue-subdir>" [limit] > /tmp/qje-items.json
//   e.g. node scripts/build-qje-items.mjs "Volume 141, Issue 1"
//
// The subdir name carries volume + issue. Year is Crossref's published-print
// year (else published-online), which for QJE matches the volume (vol N = year
// 1885 + N). Front matter (Editorial Board / Front Matter / Index) is dropped.
// Slug shape mirrors JF/RFS/JFE: surname + up to four title content-words + year.
// Skips any paper already under papers/qje/<year>/.
import { readdirSync, existsSync, mkdirSync, copyFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SUBDIR = process.argv[2];
const LIMIT = process.argv[3] ? Number(process.argv[3]) : Infinity;
if (!SUBDIR) {
  console.error('usage: build-qje-items.mjs "<issue-subdir>" [limit]'); process.exit(1);
}

const QJE_DIR = '/mnt/data_drive/Dropbox/Dropbox/Papers/QJE';
// Per-batch PDFs are copied to a NON-Dropbox local cache so the corpus is not
// duplicated into Dropbox. Derived: re-copyable from the dump at any time.
const WORK_DIR = '/mnt/data_drive/qje-extracted';
const ISSNS = new Set(['0033-5533', '1531-4650']); // QJE print + electronic
const MAILTO = 'lopezlirjosealej@ufl.edu';

// Modern OUP article-id stem, e.g. qjaf041, qjz044, qje_141_1_1 -> excluded
// (underscore form is a stray; the canonical export is qj<series><nnn>).
const MODERN = /^qj[a-z]{1,2}\d{2,4}$/i;

// Front matter and non-article material -- never distilled.
const JUNK = /\b(editorial board|front matter|back matter|index|table of contents|prefatory)\b/i;

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
  norm(title).split(' ').filter((w) => w.length > 1 && !STOP.has(w))
    .slice(0, TITLE_WORDS).join('-');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Exact DOI lookup for one article-id stem. Returns { year, surname, title, doi }
// or null. Year = published-print year, else published-online.
async function resolve(stem) {
  const doi = `10.1093/qje/${stem.toLowerCase()}`;
  const url = `https://api.crossref.org/works/${doi}?mailto=${MAILTO}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': `IAR-distill (${MAILTO})` } });
      if (res.status === 404) { console.error(`NO-DOI ${stem}: 404 ${doi}`); return null; }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const m = (await res.json()).message;
      if (!(m.ISSN || []).some((x) => ISSNS.has(x.toUpperCase()))) {
        console.error(`WRONG-ISSN ${stem}: ${(m.ISSN || []).join(',')}`); return null;
      }
      const yp = (m['published-print'] || m['published-online'] || m['published'] || {})
        ['date-parts']?.[0]?.[0];
      const author = (m.author || []).find((a) => a.sequence === 'first') || (m.author || [])[0];
      const surname = author?.family || author?.name;
      const title = (m.title || [])[0];
      if (!yp || !surname || !title) throw new Error('missing metadata');
      return { year: Number(yp), surname, title, doi: (m.DOI || doi).toLowerCase() };
    } catch (e) {
      if (attempt === 2) { console.error(`UNRESOLVED ${stem}: ${e.message}`); return null; }
      await sleep(1500 * (attempt + 1));
    }
  }
}

const dir = `${QJE_DIR}/${SUBDIR}`;
if (!existsSync(dir) || !statSync(dir).isDirectory()) {
  console.error(`not a directory: ${dir}`); process.exit(1);
}
const stems = readdirSync(dir)
  .filter((f) => /\.pdf$/i.test(f))
  .map((f) => f.replace(/\.pdf$/i, ''))
  .filter((s) => MODERN.test(s))
  .sort();
console.error(`found ${stems.length} modern article-id PDFs in "${SUBDIR}"`);

const items = [];
const skipped = [];
const dois = new Set();
for (const stem of stems) {
  if (items.length >= LIMIT) break;
  const meta = await resolve(stem);
  await sleep(350); // polite to Crossref
  if (!meta) continue;
  if (JUNK.test(meta.title)) { console.error(`JUNK ${stem}: ${meta.title}`); continue; }
  if (dois.has(meta.doi)) continue;
  dois.add(meta.doi);
  const year = meta.year;
  const papersDir = fileURLToPath(new URL(`../src/content/docs/papers/qje/${year}/`, import.meta.url));
  const slug = `${authorSlug(meta.surname)}-${titleSlug(meta.title)}-${year}`;
  if (existsSync(`${papersDir}${slug}.md`)) { skipped.push(slug); continue; }
  mkdirSync(WORK_DIR, { recursive: true });
  const pdf = `${WORK_DIR}/${slug}.pdf`;
  copyFileSync(`${dir}/${stem}.pdf`, pdf);
  items.push({ slug, journal: 'qje', year, pdf, doi: meta.doi, hint: meta.title });
}

console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`skipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`\n${items.length} items built (subdir "${SUBDIR}", limit ${LIMIT})`);
