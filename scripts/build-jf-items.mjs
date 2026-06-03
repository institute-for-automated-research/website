#!/usr/bin/env node
// Build a distill-papers work-list for one JF issue folder. Reads real
// filenames off disk (so the unicode hyphens / accents in the paths are exact),
// skips ISSUE INFORMATION, derives a slug from each PDF filename (author surname
// + up to four title content-words + year), and drops any paper already
// distilled (a matching file under src/content/docs/papers/jf/<year>/). Prints
// args JSON. No per-issue setup needed; use OVERRIDES only when the derived
// slug is wrong.
//
//   node scripts/build-jf-items.mjs "<issue folder>" <year> > /tmp/jf-items.json
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const DIR = process.argv[2];
const YEAR = process.argv[3] || '2026';

// Exact-filename -> slug overrides, for the rare case the derived slug is wrong
// (odd title punctuation, two papers colliding, a deliberately curated slug).
// Key on the title text as it appears in the filename (post " - <year> - AUTHOR - ").
const OVERRIDES = {
  // 'Some Awkward: Title': 'author-curated-slug',
};

// Dropped from the slug's title words. Prepositions, articles, conjunctions,
// auxiliaries, and pronouns -- the words a human curator omits.
const STOP = new Set(
  ('a an the and or nor but of for to in on at by with without within from into ' +
   'under over about across through during after before between among as is are ' +
   'be been being do does did this that these those their its his her our your my ' +
   'they we you it he she than then when where which who whom whose why how not no')
    .split(' ')
);
const TITLE_WORDS = 4; // up to this many content-words after stop-word removal

// Lowercase, strip accents, turn every non-alphanumeric run (incl. the various
// unicode hyphens in JF titles) into a single space, trim.
const norm = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const authorSlug = (author) => norm(author).replace(/ /g, '-');

const titleSlug = (title) =>
  norm(title).split(' ').filter((w) => w && !STOP.has(w))
    .slice(0, TITLE_WORDS).join('-');

// papers/jf/<year>/ holds the already-distilled pages; resolve it off this file.
const papersDir = fileURLToPath(new URL(`../src/content/docs/papers/jf/${YEAR}/`, import.meta.url));

const items = [];
const skipped = [];
for (const f of readdirSync(DIR).sort()) {
  if (!f.endsWith('.pdf')) continue;
  if (/ISSUE INFORMATION/i.test(f)) continue;
  // "The Journal of Finance - <yr> - <AUTHOR> - <title>.pdf"
  const m = f.match(/ - \d{4} - (.+?) - (.+)\.pdf$/);
  if (!m) { console.error('UNPARSED:', f); continue; }
  const author = m[1].trim();
  const hint = m[2].replace(/\s+/g, ' ').trim();
  const base = OVERRIDES[hint] || `${authorSlug(author)}-${titleSlug(m[2])}`;
  const slug = `${base}-${YEAR}`;
  if (existsSync(`${papersDir}${slug}.md`)) { skipped.push(slug); continue; }
  items.push({ slug, journal: 'jf', year: Number(YEAR), pdf: `${DIR}/${f}`, hint });
}
console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`skipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`\n${items.length} items built`);
