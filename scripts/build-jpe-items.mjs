#!/usr/bin/env node
// Build a distill-papers work-list for the Journal of Political Economy corpus,
// newest-first across the whole dump (issue #31). Like the Econometrica dump,
// the JPE dump is DOI-named PDFs plus an OpenAlex-derived metadata spreadsheet:
//   Papers/JPE/metadata_jpe.xlsx  (doi, year, publication_date, title, authors, downloaded, ...)
//   Papers/JPE/papers/pdfs/<doi-with-./-as-_>.pdf
//     e.g. DOI 10.1086/736769  ->  10_1086_736769.pdf
// So nothing here needs the network: the DOI, year, title and authors all come
// straight from the spreadsheet (the DOI feeds ground-relatesto directly). The
// xlsx is read via a tiny python3/openpyxl shim (Node has no xlsx reader); all
// slug / junk / dedup logic stays in Node and mirrors build-econometrica-items.mjs.
//
//   node scripts/build-jpe-items.mjs [limit] [year] > /tmp/jpe-items.json
//   e.g. node scripts/build-jpe-items.mjs 12        # newest 12 across all years
//        node scripts/build-jpe-items.mjs 12 2024   # newest 12 within 2024
//
// Unlike the AER/Econometrica builders (one publication-year cohort per run), the
// JPE top-of-corpus years are thin (2026: a handful, 2025: ~9), so this builder
// rolls newest-first ACROSS years by publication_date, capped at LIMIT, skipping
// anything already under src/content/docs/papers/jpe/<year>/. An optional <year>
// arg narrows to a single cohort. Front matter, back matter and errata/corrigenda
// are dropped, not distilled (see JUNK + the authorless-row rule).
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const LIMIT = process.argv[2] ? Number(process.argv[2]) : 12;
const YEAR = process.argv[3];
if (YEAR && !/^(19|20)\d{2}$/.test(YEAR)) {
  console.error('usage: build-jpe-items.mjs [limit] [year]'); process.exit(1);
}

const JPE_DIR = '/mnt/data_drive/Dropbox/Dropbox/Papers/JPE';
const XLSX = `${JPE_DIR}/metadata_jpe.xlsx`;
const PDF_DIR = `${JPE_DIR}/papers/pdfs`;

// DOI -> on-disk filename: '.' and '/' both become '_', hyphens are kept.
//   10.1086/736769  ->  10_1086_736769.pdf
const doiToFile = (doi) => doi.toLowerCase().replace(/[./]/g, '_') + '.pdf';

// Known-bad PDFs in the dump: the filename encodes the right JPE DOI but the file
// content is a DIFFERENT paper (mis-saved upstream). These can never be distilled
// from this dump, so without a skip they would re-occupy the top of every
// newest-first batch. Re-include once the dump file is corrected. (issue #31)
//   10.1086/736207  Low & Pistaferri, "Disability Insurance: Error Rates and
//     Gender Differences" (JPE 2025) -- file is actually Giannikos-Kakolyris-Suen,
//     J. Economics & Finance 2025, DOI 10.1007/s12197-024-09689-4.
const BAD_PDF = new Set(['10.1086/736207']);

// Administrative material -- never distilled. Matched against the title. The
// primary junk filter is "row has no authors" (every front/back-matter,
// announcement and index is authorless); this regex is a backstop and also
// drops authored errata/corrigenda.
const JUNK = /(^|\b)(front\s?matter|back\s?matter|volume information|index to volume|forthcoming|in memoriam|in memory of|obituar|erratum|errata|corrigend|^correction to)\b/i;

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
// Caveat: letters with no NFD decomposition (o-slash, ae, eth, ...) are not split
// into base+mark, so `norm` drops them as separators -- e.g. "Sorensen" written
// with o-slash yields the token "rensen". The slug stays deterministic on rebuild;
// only the URL surname is affected, and the page title carries the full name.
const surname = (author) => {
  const toks = norm(author).split(' ').filter(Boolean);
  return toks.length ? toks[toks.length - 1] : '';
};
// Author-part of the slug, matching the JF/JFE/AER/Econometrica shape:
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
def g(r, k):
    return r[idx[k]] if k in idx else None
out = []
for r in rows:
    pd = g(r, "publication_date")
    out.append({
        "doi": g(r, "doi"),
        "year": g(r, "year"),
        "pubdate": pd.isoformat() if hasattr(pd, "isoformat") else (str(pd) if pd else None),
        "title": g(r, "title"),
        "authors": g(r, "authors"),
        "downloaded": bool(g(r, "downloaded")),
    })
json.dump(out, sys.stdout)
`;

const wantYear = YEAR ? Number(YEAR) : null;
const papersDir = (year) => fileURLToPath(
  new URL(`../src/content/docs/papers/jpe/${year}/`, import.meta.url));

let rows;
try {
  rows = JSON.parse(execFileSync('python3', ['-c', PY, XLSX], {
    encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
  }));
} catch (e) {
  console.error(`failed to read ${XLSX} via python3/openpyxl: ${e.message}`);
  process.exit(1);
}

// Build every eligible candidate, then sort newest-first by publication_date
// (falling back to year), then skip already-distilled and cap at LIMIT.
const candidates = [];
let dropped = 0;
const seenSlug = new Set();

for (const r of rows) {
  const year = Number(r.year);
  if (wantYear && year !== wantYear) continue;
  if (!r.downloaded || !r.doi || !r.title) continue;
  if (BAD_PDF.has(r.doi.toLowerCase())) { dropped++; continue; } // file content is a different paper
  if (!r.authors || !r.authors.trim()) { dropped++; continue; } // authorless = admin matter
  if (JUNK.test(r.title)) { dropped++; continue; }
  const author = authorSlug(r.authors);
  const tslug = titleSlug(r.title);
  if (!author || !tslug) { dropped++; continue; }
  const slug = `${author}-${tslug}-${year}`;
  if (seenSlug.has(slug)) continue;
  seenSlug.add(slug);
  const pdf = `${PDF_DIR}/${doiToFile(r.doi)}`;
  if (!existsSync(pdf)) continue; // not in the local dump yet
  candidates.push({ slug, year, pdf, title: r.title, doi: r.doi.toLowerCase(), pubdate: r.pubdate || `${year}-00` });
}

// Newest-first: descending publication_date string (ISO sorts lexically).
candidates.sort((a, b) => (a.pubdate < b.pubdate ? 1 : a.pubdate > b.pubdate ? -1 : 0));

const items = [];
const skipped = [];
for (const c of candidates) {
  if (existsSync(`${papersDir(c.year)}${c.slug}.md`)) { skipped.push(c.slug); continue; }
  if (items.length >= LIMIT) break;
  items.push({ slug: c.slug, journal: 'jpe', year: c.year, pdf: c.pdf, hint: c.title, doi: c.doi });
}

console.log(JSON.stringify({ today: new Date().toISOString().slice(0, 10), items }, null, 2));
if (skipped.length) console.error(`\nskipped ${skipped.length} already-distilled: ${skipped.join(', ')}`);
console.error(`dropped ${dropped} front/admin/errata matter`);
console.error(`${items.length} items built (limit ${LIMIT}${wantYear ? `, year ${wantYear}` : ', all years newest-first'}, ` +
  `${items.filter((i) => i.doi).length} with DOI)`);
