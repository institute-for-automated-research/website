#!/usr/bin/env node
// Build a distill-papers work-list for one Econometrica publication-year cohort.
// Unlike the AER dump (descriptive author-year-title filenames), the Econometrica
// dump is DOI-named PDFs plus a rich OpenAlex-derived metadata spreadsheet:
//   Papers/econometrica/metadata_econometrica.xlsx  (doi, year, title, authors, downloaded, ...)
//   Papers/econometrica/papers/pdfs/<doi-with-./-as-_>.pdf
//     e.g. DOI 10.3982/ecta20973  ->  10_3982_ecta20973.pdf
// So nothing here needs the network: the DOI, year, title and authors all come
// straight from the spreadsheet (the DOI feeds ground-relatesto directly). The
// xlsx is read via a tiny python3/openpyxl shim (Node has no xlsx reader); all
// slug / junk / dedup logic stays in Node and mirrors build-aer-items.mjs.
//
//   node scripts/build-econometrica-items.mjs <year> [limit] > /tmp/ecta-items.json
//   e.g. node scripts/build-econometrica-items.mjs 2025 12
//
// Cohorts are the spreadsheet `year` (publication year), newest-first. Front
// matter, back matter, society reports/announcements, and errata/corrigenda are
// dropped, not distilled (see JUNK + the authorless-row rule). Presidential
// addresses are substantive authored articles and are kept, like AER lectures.
// Skips any paper already under src/content/docs/papers/econometrica/<year>/.
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const YEAR = process.argv[2];
const LIMIT = process.argv[3] ? Number(process.argv[3]) : Infinity;
if (!YEAR || !/^(19|20)\d{2}$/.test(YEAR)) {
  console.error('usage: build-econometrica-items.mjs <year> [limit]'); process.exit(1);
}

const ECTA_DIR = '/mnt/data_drive/Dropbox/Dropbox/Papers/econometrica';
const XLSX = `${ECTA_DIR}/metadata_econometrica.xlsx`;
const PDF_DIR = `${ECTA_DIR}/papers/pdfs`;

// DOI -> on-disk filename: '.' and '/' both become '_', hyphens are kept.
//   10.1111/1468-0262.00001  ->  10_1111_1468-0262_00001.pdf
const doiToFile = (doi) => doi.toLowerCase().replace(/[./]/g, '_') + '.pdf';

// Administrative material -- never distilled. Matched against the title. The
// primary junk filter is "row has no authors" (every front/back-matter, society
// report and announcement is authorless); this regex is a backstop and also
// drops authored errata/corrigenda. Presidential / Nobel / Walras-Bowley
// addresses are deliberately NOT dropped: they are substantive authored articles.
const JUNK = /(^|\b)(front\s?matter|back\s?matter|submission of manuscripts|annual report|report of the|election of fellows|fellows of the econometric|forthcoming papers|in memoriam|in memory of|obituar|erratum|errata|corrigend|^correction to|^comment on .*: reply)\b/i;

const STOP = new Set(
  ('a an the and or nor but of for to in on at by with without within from into ' +
   'under over about across through during after before between among as is are ' +
   'be been being do does did this that these those their its his her our your my ' +
   'they we you it he she than then when where which who whom whose why how not no')
    .split(' ')
);
const TITLE_WORDS = 4;

const norm = (s) =>
  (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const titleSlug = (title) =>
  norm(title).split(' ').filter((w) => w && !STOP.has(w))
    .slice(0, TITLE_WORDS).join('-');

// Surname of one "Firstname [Middle ...] Lastname" author = its last token.
const surname = (author) => {
  const toks = norm(author).split(' ').filter(Boolean);
  return toks.length ? toks[toks.length - 1] : '';
};
// Author-part of the slug, matching the JF/JFE/AER shape:
//   1 author -> surname; 2 -> surname-surname; 3+ -> surname-et-al
const authorSlug = (authors) => {
  const names = authors.split(',').map((a) => a.trim()).filter(Boolean);
  const s = names.map(surname).filter(Boolean);
  if (s.length === 0) return '';
  if (s.length === 1) return s[0];
  if (s.length === 2) return `${s[0]}-${s[1]}`;
  return `${s[0]}-et-al`;
};

// Pull the columns we need out of the xlsx via openpyxl (read-only). Emits one
// JSON object per row. Kept deliberately dumb -- all judgement stays in Node.
const PY = `
import json, sys, openpyxl
wb = openpyxl.load_workbook(sys.argv[1], read_only=True)
ws = wb.active
rows = ws.iter_rows(values_only=True)
hdr = next(rows)
idx = {h: i for i, h in enumerate(hdr)}
out = []
for r in rows:
    out.append({
        "doi": r[idx["doi"]],
        "year": r[idx["year"]],
        "title": r[idx["title"]],
        "authors": r[idx["authors"]],
        "downloaded": bool(r[idx["downloaded"]]),
    })
json.dump(out, sys.stdout)
`;

const wantYear = Number(YEAR);
const papersDir = fileURLToPath(
  new URL(`../src/content/docs/papers/econometrica/${YEAR}/`, import.meta.url));

let rows;
try {
  rows = JSON.parse(execFileSync('python3', ['-c', PY, XLSX], {
    encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
  }));
} catch (e) {
  console.error(`failed to read ${XLSX} via python3/openpyxl: ${e.message}`);
  process.exit(1);
}

const items = [];
const skipped = [];
let dropped = 0;
const seenSlug = new Set();

// Newest-first within the cohort by descending DOI is meaningless; the order
// inside one publication year does not matter for a "first N" batch, so keep the
// spreadsheet order (already roughly chronological) and just cap at LIMIT.
for (const r of rows) {
  if (Number(r.year) !== wantYear) continue;
  if (!r.downloaded || !r.doi || !r.title) continue;
  if (!r.authors || !r.authors.trim()) { dropped++; continue; } // authorless = admin matter
  if (JUNK.test(r.title)) { dropped++; continue; }
  const author = authorSlug(r.authors);
  const tslug = titleSlug(r.title);
  if (!author || !tslug) { dropped++; continue; }
  const slug = `${author}-${tslug}-${YEAR}`;
  if (seenSlug.has(slug)) continue;
  seenSlug.add(slug);
  const pdf = `${PDF_DIR}/${doiToFile(r.doi)}`;
  if (!existsSync(pdf)) { console.error(`MISSING PDF for ${r.doi}: ${pdf}`); continue; }
  if (existsSync(`${papersDir}${slug}.md`)) { skipped.push(slug); continue; }
  if (items.length >= LIMIT) continue;
  items.push({
    slug, journal: 'econometrica', year: wantYear,
    pdf,
    hint: r.title,
    doi: r.doi.toLowerCase(),
  });
}

console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`\nskipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`dropped ${dropped} front/admin/errata matter`);
console.error(`${items.length} items built (year ${YEAR}, limit ${LIMIT === Infinity ? 'none' : LIMIT}, ` +
  `${items.filter((i) => i.doi).length} with DOI)`);
