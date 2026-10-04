// Build a verify-only work-list for already-distilled paper pages (issue #49):
// resolve each page under src/content/docs/papers/<journal>/<year>/ to its
// source PDF in the local library, CONFIRMED by finding the page's
// `paper.doi` in the PDF's first pages (no filename guessing survives
// unconfirmed). Each PDF is symlinked to an ASCII path, since real filenames
// carry unicode hyphens / double spaces that are fragile through workflow args.
//
//   node scripts/build-reverify-items.mjs --today 2026-10-04 \
//        [--journal jf] [--year 2026] [--limit 12] [--skip-luna] > items.json
//   node scripts/codex/workflow.mjs .claude/workflows/reverify-papers.js items.json
//
// --skip-luna drops pages that already carry a gpt-6-luna verifier
// attestation, so the rolling pass can resume. A page in a run's `failed` list
// may still have been fixed and attested (its JSON report was lost), so rerun
// those with --slugs, which ignores --skip-luna. Unresolved pages go to stderr.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const papersDir = path.join(root, 'src', 'content', 'docs', 'papers');
const P = '/mnt/data_drive/Dropbox/Dropbox/Papers';
const LINKDIR = '/tmp/iar-reverify';

const argv = process.argv.slice(2);
const opt = (k) => {
  const v = argv.includes(k) ? argv[argv.indexOf(k) + 1] : undefined;
  return v?.startsWith('--') ? undefined : v;
};
const today = opt('--today') ?? '';
const onlyJournal = opt('--journal');
const onlyYear = opt('--year');
const limit = Number(opt('--limit') ?? Infinity);
if (!(limit >= 0)) {
  console.error('--limit must be a nonnegative number');
  process.exit(2);
}
const skipLuna = argv.includes('--skip-luna');
// --slugs a,b: exactly these pages, ignoring --skip-luna. Each entry is a bare
// slug or a full journal/year/slug key (the form a run's `failed` list uses).
const onlySlugs = new Set((opt('--slugs') ?? '').split(',').filter(Boolean));
// The date lands in every page's attestation; a blank one breaks the build.
if (!/^\d{4}-\d{2}-\d{2}$/.test(today)) {
  console.error('usage: --today YYYY-MM-DD is required');
  process.exit(2);
}

const ls = (d) => (fs.existsSync(d) ? fs.readdirSync(d) : []);
const pdfsIn = (d) => ls(d).filter((f) => f.toLowerCase().endsWith('.pdf')).map((f) => path.join(d, f));

// --- pages ---------------------------------------------------------------
const pages = [];
for (const j of ls(papersDir)) {
  if (!fs.statSync(path.join(papersDir, j)).isDirectory()) continue;
  if (onlyJournal && j !== onlyJournal) continue;
  for (const y of ls(path.join(papersDir, j))) {
    if (onlyYear && y !== onlyYear) continue;
    const dir = path.join(papersDir, j, y);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of ls(dir)) {
      if (!f.endsWith('.md')) continue;
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
      // paper.doi sits at two-space indent under `paper:`; relatesTo DOIs are deeper.
      const doi = fm.match(/^ {2}doi:\s*['"]?([^'"\s]+)/m)?.[1]?.toLowerCase() ?? '';
      const slug = f.replace(/\.md$/, '');
      const wanted = onlySlugs.has(slug) || onlySlugs.has(`${j}/${y}/${slug}`);
      if (onlySlugs.size ? !wanted : skipLuna && /paper-verifier \(gpt-6-luna\)/.test(fm)) continue;
      pages.push({ journal: j, year: Number(y), slug, doi });
    }
  }
}

const seen = new Set(pages.flatMap((p) => [p.slug, `${p.journal}/${p.year}/${p.slug}`]));
const unmatched = [...onlySlugs].filter((s) => !seen.has(s));
if (unmatched.length) console.error(`--slugs entries matching no page: ${unmatched.join(', ')}`);

// --- candidate PDFs per page ---------------------------------------------
// Direct: the DOI determines the filename. Pool: scan a year-scoped folder.
const doiFile = (doi) => doi.replace(/[./]/g, '_') + '.pdf';
const stem = (doi) => doi.split('/').pop();
const jfFolders = (year) =>
  ls(path.join(P, 'JF'))
    .filter((v) => !/\(\d+\)\s*$/.test(v))
    .filter((v) => {
      const fy = Number(v.match(/\((?:\w+\s+)?(\d{4})\)/)?.[1] ?? 0);
      return Math.abs(fy - year) <= 1;
    })
    .map((v) => path.join(P, 'JF', v));
const qjeVolumes = () => ls(path.join(P, 'QJE')).filter((v) => v.startsWith('Volume')).map((v) => path.join(P, 'QJE', v));

function candidates({ journal, year, doi }) {
  switch (journal) {
    case 'econometrica': return [path.join(P, 'econometrica', 'papers', 'pdfs', doiFile(doi))];
    case 'jpe': return [path.join(P, 'JPE', 'papers', 'pdfs', doiFile(doi))];
    case 'rfs': return [path.join(P, 'rfs', `${stem(doi)}.pdf`)];
    case 'qje': return [...qjeVolumes().map((v) => path.join(v, `${stem(doi)}.pdf`)), ...pdfsIn('/mnt/data_drive/qje-extracted')];
    case 'jf': return jfFolders(year).flatMap(pdfsIn);
    case 'aer': return pdfsIn(path.join(P, 'AER')).filter((f) => [year - 1, year, year + 1].some((y) => path.basename(f).includes(`-${y}-`)));
    case 'jfe': return pdfsIn('/mnt/data_drive/jfe-extracted');
    case 'jbf': case 'jcf': case 'jef': case 'jfm': case 'jfi':
      return [year, year - 1, year + 1].flatMap((y) => pdfsIn(path.join(P, journal.toUpperCase(), String(y))));
    default: return [];
  }
}

// The page's DOI must appear near the top of the PDF (the article's own DOI
// line, not a reference-list citation), and must END there: a following
// letter, digit, or DOI punctuation means a different, longer DOI. Whitespace
// is allowed inside the match because DOIs wrap across lines.
const HEAD_CHARS = 8000;
const esc = (c) => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function carriesDoi(f, doi) {
  const body = [...doi].map(esc).join('\\s*');
  // A sentence-ending period followed by a non-DOI character still closes it.
  const re = new RegExp(`${body}(?![0-9a-z_/-]|\\.[0-9a-z])`);
  return re.test(firstPagesText(f).slice(0, HEAD_CHARS));
}

// First-pages text, lowercased, cached.
const textCache = new Map();
function firstPagesText(f) {
  if (!textCache.has(f)) {
    let t = '';
    try { t = execFileSync('pdftotext', ['-l', '3', f, '-'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch {}
    textCache.set(f, t.toLowerCase());
  }
  return textCache.get(f);
}

fs.mkdirSync(LINKDIR, { recursive: true });
const items = [];
const failed = [];
for (const p of pages) {
  if (!p.doi) { failed.push({ slug: p.slug, journal: p.journal, why: 'no paper.doi on page' }); continue; }
  // A DOI-named file (Econometrica/JPE `<doi>.pdf`, RFS/QJE `<doi suffix>.pdf`)
  // is confirmed by its name; some of these PDFs never print their DOI.
  const named = new Set([doiFile(p.doi), `${stem(p.doi)}.pdf`]);
  const direct = ['econometrica', 'jpe', 'rfs', 'qje'].includes(p.journal);
  const hits = [...new Set(candidates(p).filter((f) => fs.existsSync(f)))]
    .filter((f) => (direct && named.has(path.basename(f))) || carriesDoi(f, p.doi));
  // Duplicate downloads ("x.pdf" and "x (1).pdf") carry the same DOI; prefer the plain one.
  const uniq = hits.filter((f) => !/\(\d+\)\.pdf$/i.test(f));
  const pick = uniq.length ? uniq : hits;
  if (pick.length < 1) { failed.push({ slug: p.slug, journal: p.journal, doi: p.doi, why: 'no PDF with this DOI' }); continue; }
  if (pick.length > 1 && new Set(pick.map((f) => fs.statSync(f).size)).size > 1) {
    failed.push({ slug: p.slug, journal: p.journal, doi: p.doi, why: 'several distinct PDFs carry this DOI', pick });
    continue;
  }
  const link = path.join(LINKDIR, `${p.journal}-${p.year}-${p.slug}.pdf`);
  fs.rmSync(link, { force: true });
  fs.symlinkSync(pick[0], link);
  items.push({ slug: p.slug, journal: p.journal, year: p.year, pdf: link });
}

// Newest first, then journal, then slug; cap after sorting.
items.sort((a, b) => b.year - a.year || a.journal.localeCompare(b.journal) || a.slug.localeCompare(b.slug));
const out = items.slice(0, limit);
console.log(JSON.stringify({ today, items: out }, null, 2));
console.error(`resolved ${items.length}/${pages.length} (emitted ${out.length}); unresolved ${failed.length}${failed.length ? ': ' + JSON.stringify(failed, null, 2) : ''}`);
