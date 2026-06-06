#!/usr/bin/env node
// Build a distill-papers work-list for one RFS prefix cohort. Unlike JF (whose
// filenames carry author/title/year), the RFS dump uses opaque OUP DOI-suffix
// filenames (hhaf001.pdf -> doi:10.1093/rfs/hhaf001). So this resolves each file
// via Crossref to get author surname + title + year, derives the same slug shape
// as the JF builder (surname + up to four title content-words + year), and drops
// any paper already distilled (a matching file under
// src/content/docs/papers/rfs/<year>/). Prints args JSON.
//
//   node scripts/build-rfs-items.mjs <prefix> [limit] > /tmp/rfs-items.json
//   e.g. node scripts/build-rfs-items.mjs hhaf 12
//
// Prefix -> volume/year cohorts (see issue): hhg=2003 .. hhaf=2025.
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PREFIX = process.argv[2];
const LIMIT = process.argv[3] ? Number(process.argv[3]) : Infinity;
if (!PREFIX) { console.error('usage: build-rfs-items.mjs <prefix> [limit]'); process.exit(1); }

const RFS_DIR = '/mnt/data_drive/Dropbox/Dropbox/Papers/rfs';
const MAILTO = 'lopezlirjosealej@ufl.edu';

// Exact-DOI-code -> slug overrides, for the rare case the derived slug is wrong.
const OVERRIDES = {
  // 'hhaf001': 'author-curated-slug-2025',
};

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

async function resolve(code) {
  const url = `https://api.crossref.org/works/10.1093/rfs/${code}?mailto=${MAILTO}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': `IAR-distill (${MAILTO})` } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const m = (await res.json()).message;
      const year = (m['published-print'] || m['published-online'] || m['published'] || {})
        ['date-parts']?.[0]?.[0];
      const author = (m.author || []).find((a) => a.sequence === 'first') || (m.author || [])[0];
      const surname = author?.family || author?.name;
      const title = (m.title || [])[0];
      if (!year || !surname || !title) throw new Error('missing metadata');
      return { year: Number(year), surname, title };
    } catch (e) {
      if (attempt === 2) { console.error(`UNRESOLVED ${code}: ${e.message}`); return null; }
      await sleep(1500 * (attempt + 1));
    }
  }
}

// Files for this prefix only, exact "PREFIXdigits.pdf" (drops "hhz033 (1).pdf" dups).
const re = new RegExp(`^${PREFIX}\\d+\\.pdf$`);
const files = readdirSync(RFS_DIR).filter((f) => re.test(f)).sort();

const items = [];
const skipped = [];
for (const f of files) {
  if (items.length >= LIMIT) break;
  const code = f.replace(/\.pdf$/, '');
  const meta = await resolve(code);
  await sleep(350); // be polite to Crossref (~3 req/s)
  if (!meta) continue;
  const papersDir = fileURLToPath(new URL(`../src/content/docs/papers/rfs/${meta.year}/`, import.meta.url));
  const base = OVERRIDES[code] || `${authorSlug(meta.surname)}-${titleSlug(meta.title)}`;
  const slug = `${base}-${meta.year}`;
  if (existsSync(`${papersDir}${slug}.md`)) { skipped.push(slug); continue; }
  items.push({
    slug, journal: 'rfs', year: meta.year, pdf: `${RFS_DIR}/${f}`,
    doi: `10.1093/rfs/${code}`, hint: meta.title,
  });
}

console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`skipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`\n${items.length} items built (prefix ${PREFIX}, limit ${LIMIT})`);
