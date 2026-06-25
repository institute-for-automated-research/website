#!/usr/bin/env node
// Build a distill-papers work-list for one American Economic Review (AER)
// filename-year cohort. The AER dump (Papers/AER/*.pdf) is a FLAT directory of
// descriptive author-year-title filenames:
//   <surname[-surname...|-et-al]>-<year>-<dash-encoded-title>.pdf
//   e.g. abadi-et-al-2023-the-reversal-interest-rate.pdf
// Unlike the JFE/RFS builders, every field the slug needs (author, year, title)
// is already IN the filename, so no network is needed to slug. Crossref is used
// only as a BONUS, to pre-fill the real DOI (10.1257/aer.*) for ground-relatesto
// -- the slug/dir year always comes from the filename, never Crossref, so an
// online-first vs issue-year mismatch can never move a paper between cohorts.
//
//   node scripts/build-aer-items.mjs <year> [limit] > /tmp/aer-items.json
//   e.g. node scripts/build-aer-items.mjs 2023 12
//
// Cohorts are the 4-digit year embedded in the filename, newest-first
// (2023, 2022, ...). Front matter, administrative reports, and award lectures
// are dropped, not distilled (see JUNK). The slug shape matches JF/JFE/RFS
// (author + up to four title content-words + year). Skips any paper already
// under src/content/docs/papers/aer/<year>/.
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const YEAR = process.argv[2];
const LIMIT = process.argv[3] ? Number(process.argv[3]) : Infinity;
if (!YEAR || !/^(19|20)\d{2}$/.test(YEAR)) {
  console.error('usage: build-aer-items.mjs <year> [limit]'); process.exit(1);
}

const AER_DIR = '/mnt/data_drive/Dropbox/Dropbox/Papers/AER';
const ISSN = '0002-8282'; // American Economic Review (print)
const MAILTO = 'lopezlirjosealej@ufl.edu';

// Exact-(filename title-part) -> slug overrides, for the rare case the derived
// slug is wrong (odd punctuation, colliding slug, deliberately curated slug).
const OVERRIDES = {
  // 'some-title-part': 'author-curated-slug-2023',
};

// Front matter and administrative material -- never distilled. Matched against
// the title-part (everything after "<author>-<year>-"). Award lectures (Nobel /
// presidential address / Ely / Walras-Bowley) are deliberately NOT dropped: they
// are substantive, heavily-cited AER articles and are distilled like any paper.
const JUNK = /^(foreword|preface|editor-?s?-introduction|editors-introduction|front-matter|back-matter|index|errat|corrigend|correction-|in-memoriam|in-memory-of|memorial|obituary|minutes-of|report-of|report-on|proceedings-of|table-of-contents|contents|acknowledg|honors-and-awards|list-of)/i;

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

// Split a filename stem into { author, title }. The author-part runs up to the
// FIRST 4-digit year (non-greedy), so multi-surname / "-et-al" author parts stay
// intact. Returns null for names with no embedded year (front-matter that leads
// with the year is handled by the author-first requirement: those have no
// leading surname so they fail this match too).
function split(stem) {
  const m = stem.match(/^([a-z][a-z-]*?)-((?:19|20)\d{2})-(.+)$/);
  if (!m) return null;
  return { author: m[1], fnYear: Number(m[2]), title: m[3] };
}

// Crossref bibliographic lookup, AER ISSN + year window, to recover the DOI.
// Returns the DOI (lowercased) or null. The slug/year never depend on this.
async function resolveDoi(title, author, fnYear) {
  const url = `https://api.crossref.org/works?query.bibliographic=${encodeURIComponent(title)}`
    + `&query.author=${encodeURIComponent(author)}`
    + `&filter=issn:${ISSN},from-pub-date:${fnYear - 1}-01-01,until-pub-date:${fnYear + 1}-12-31`
    + `&rows=1&select=DOI,title,author,published-print&mailto=${MAILTO}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': `IAR-distill (${MAILTO})` } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const top = ((await res.json()).message.items || [])[0];
      if (!top || !top.DOI) throw new Error('no Crossref hit');
      return (top.DOI || '').toLowerCase();
    } catch (e) {
      if (attempt === 2) { console.error(`NO-DOI "${title}": ${e.message}`); return null; }
      await sleep(1500 * (attempt + 1));
    }
  }
}

const wantYear = Number(YEAR);
const papersDir = fileURLToPath(new URL(`../src/content/docs/papers/aer/${YEAR}/`, import.meta.url));

// Index the cohort off disk: author-first filenames whose embedded year matches,
// front matter / lectures dropped, ` (n)` duplicate copies deduped by slug.
const items = [];
const skipped = [];
let dropped = 0;
const seenSlug = new Set();

for (const f of readdirSync(AER_DIR).sort()) {
  if (!f.endsWith('.pdf')) continue;
  // Skip Dropbox conflict copies ("paper (1).pdf"): the clean original always
  // exists alongside them, so this points the distiller at the un-suffixed PDF
  // rather than a "(1)" copy. The seenSlug guard below remains as a backstop.
  if (/ \(\d+\)\.pdf$/.test(f)) continue;
  const stem = f.replace(/\.pdf$/, '');
  const parts = split(stem);
  if (!parts || parts.fnYear !== wantYear) continue;
  if (JUNK.test(parts.title)) { dropped++; continue; }
  const base = OVERRIDES[parts.title] || `${authorSlug(parts.author)}-${titleSlug(parts.title)}`;
  const slug = `${base}-${YEAR}`;
  if (seenSlug.has(slug)) continue; // ` (1)`/`(2)` duplicate copies of the same paper
  seenSlug.add(slug);
  if (existsSync(`${papersDir}${slug}.md`)) { skipped.push(slug); continue; }
  if (items.length >= LIMIT) continue;
  items.push({
    slug, journal: 'aer', year: wantYear,
    pdf: `${AER_DIR}/${f}`,
    hint: parts.title.replace(/-/g, ' '),
    _author: parts.author, // internal: used for the Crossref author query, stripped before emit
  });
}

// Pre-fill DOIs (bonus). Polite to Crossref (~3 req/s).
for (const it of items) {
  it.doi = await resolveDoi(it.hint, it._author.replace(/-et-al$/, '').replace(/-/g, ' '), it.year);
  delete it._author;
  await sleep(350);
}

console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`\nskipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`dropped ${dropped} front/admin matter`);
console.error(`${items.length} items built (year ${YEAR}, limit ${LIMIT === Infinity ? 'none' : LIMIT}, ` +
  `${items.filter((i) => i.doi).length} with DOI)`);
