#!/usr/bin/env node
// Advisory check: does each Core-results row's "Table N ..., p. X" locator cite a
// page where Table N actually is?
//
// Verifier passes kept missing this error, so it is checked deterministically
// here. For each row, the cited page range must include at least one page on
// which the PDF prints a "Table N" caption. A flagged row is reported with:
//   - caption: pages where Table N's caption appears
//   - numbers: pages where the row's own decimal values appear (evidence of the
//     right page; a row whose numbers sit on the caption page has a plain
//     wrong-page locator)
// Convention (paper-template.md): a locator cites the page the table is on; if a
// figure in the row is taken from the text instead, add it separately, e.g.
// "Table 4, p. 8; text p. 6".
//
// Tables only (figures and sections are not checked); in "Tables 6-7, pp. 10-11"
// only the first table is checked. Needs the source PDFs,
// which build-reverify-items.mjs symlinks into /tmp/iar-reverify as
// <journal>-<year>-<slug>.pdf; pages without a PDF are skipped, so this is a
// silent no-op on Vercel. Always exits 0 unless --strict.
//
// Usage:
//   node scripts/check-table-locators.mjs                      # every paper page
//   node scripts/check-table-locators.mjs <page.md> [--pdf <file.pdf>]
//   node scripts/check-table-locators.mjs --journal jbf [--year 2026]
//   add --summary for counts only, --strict to exit 1 on any flag
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LINKDIR = '/tmp/iar-reverify';
const argv = process.argv.slice(2);
const opt = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : undefined; };
const SUMMARY = argv.includes('--summary');
const STRICT = argv.includes('--strict');
const pageArg = argv.find((a, i) => a.endsWith('.md') && !['--pdf', '--journal', '--year'].includes(argv[i - 1]));

function walk(d) {
  const out = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const papersDir = join(root, 'src/content/docs/papers');
let pages = pageArg
  ? [join(root, relative(root, pageArg))]
  : walk(papersDir).filter((p) => /\/papers\/[^/]+\/\d{4}\/[^/]+\.md$/.test(p));
if (opt('--journal')) pages = pages.filter((p) => p.includes(`/papers/${opt('--journal')}/`));
if (opt('--year')) pages = pages.filter((p) => p.includes(`/${opt('--year')}/`));

// "Table 4", "Table IV", "Table A13", "Table IA.2"
const TID = '((?:IA|A|B|C|D)?\\.?\\d+|[IVXL]+)';
const captionRe = new RegExp(`^\\s*Table\\s+${TID}\\s*(?:[—–-]\\s*Continued|\\(\\s*continued\\s*\\))?\\s*(?:$|[.:]|\\s{3,})`, 'gim');
// Two-column layouts put a right-column caption after left-column text on the
// same line: "...text           Table 4" at line end.
const captionRightRe = new RegExp(`\\S\\s{3,}Table\\s+${TID}\\s*$`, 'gm');
const locRe = new RegExp(`Tables?\\s+${TID}[^;|]*?\\bpp?\\.\\s*(\\d+)(?:\\s*[-–]\\s*(\\d+))?`, 'g');
const normNum = (s) => s.replace(/[−–]/g, '-');

let flagged = 0, checked = 0, skipped = 0, undetected = 0;
for (const page of pages) {
  const m = page.match(/papers\/([^/]+)\/(\d{4})\/([^/]+)\.md$/);
  if (!m) continue;
  const pdf = (pageArg && opt('--pdf')) || join(LINKDIR, `${m[1]}-${m[2]}-${m[3]}.pdf`);
  if (!existsSync(pdf)) { skipped++; continue; }
  let text;
  try { text = execFileSync('pdftotext', ['-layout', pdf, '-'], { maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] }).toString(); }
  catch { skipped++; continue; }
  checked++;
  const pdfPages = text.split('\f');
  const flat = pdfPages.map((t) => normNum(t).replace(/\s+/g, ' '));
  const cap = {};
  pdfPages.forEach((t, i) => {
    for (const re of [captionRe, captionRightRe]) for (const c of t.matchAll(re)) (cap[c[1]] ||= new Set()).add(i + 1);
  });
  // Journals paginate differently (JF cites "p. 569" for PDF page 9). Infer the
  // printed-page offset from page numbers in each page's header/footer lines and
  // accept a locator in either numbering.
  const votes = {};
  pdfPages.forEach((t, i) => {
    const ls = t.split('\n').map((s) => s.trim()).filter(Boolean);
    for (const s of [...ls.slice(0, 3), ...ls.slice(-3)]) {
      const n = s.match(/^(\d{1,5})(?=\s{2,}|$)|(?:\s{2,})(\d{1,5})$/);
      const v = n && +(n[1] || n[2]);
      if (v && v > i + 1) votes[v - (i + 1)] = (votes[v - (i + 1)] || 0) + 1;
    }
  });
  const [bestOff, bestVotes] = Object.entries(votes).sort((x, y) => y[1] - x[1])[0] || [0, 0];
  const offset = bestVotes >= 3 ? +bestOff : 0;
  const onPage = (q, a, b) => (q >= a && q <= b) || (offset && q + offset >= a && q + offset <= b);

  const out = [];
  for (const line of readFileSync(page, 'utf8').split('\n')) {
    const row = line.match(/^\|\s*(R\d+)\s*\|/);
    if (!row) continue;
    const cols = line.split('|');
    const loc = cols[3] || '', val = cols[4] || '';
    for (const l of loc.matchAll(locRe)) {
      const capPages = cap[l[1]];
      if (!capPages) { undetected++; continue; } // caption not detected; cannot judge
      const a = +l[2], b = l[3] ? +l[3] : a;
      if ([...capPages].some((q) => onPage(q, a, b))) continue;
      const nums = [...new Set(normNum(val).match(/-?\d+\.\d{2,}/g) || [])].map((n) => n.replace(/^-/, '')).slice(0, 4);
      const numPages = nums.map((n) => `${n}@${flat.map((t, i) => (t.includes(n) ? i + 1 : 0)).filter(Boolean).join('/') || '-'}`);
      out.push(`  ${row[1]}: "${l[0].trim()}" -> Table ${l[1]} caption on PDF p. ${[...capPages].join('/')}${offset ? ` (printed p. ${[...capPages].map((q) => q + offset).join('/')})` : ''}; row numbers on ${numPages.join(' ') || '(none)'}`);
    }
  }
  if (out.length) {
    flagged += out.length;
    if (!SUMMARY) console.log(`${relative(root, page)}\n${out.join('\n')}`);
  }
}
console.log(`table locators: ${flagged} row locator(s) cite a page without that table's caption (${checked} pages checked, ${skipped} without PDF; ${undetected} locator(s) unchecked because the table caption was not detected)`);
process.exit(STRICT && flagged ? 1 : 0);
