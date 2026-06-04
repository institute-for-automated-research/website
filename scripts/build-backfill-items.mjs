// Build an augment-backfill work-list: resolve every distilled JF page to its
// source PDF in the local library, symlink each to an ASCII path (the real
// filenames carry unicode hyphens / double spaces that are fragile through
// workflow args), and print the items JSON for
// Workflow({scriptPath: '.claude/workflows/backfill-axes.js', args: {today, items}}).
//
//   node scripts/build-backfill-items.mjs --today 2026-06-03 \
//        --skip slugA,slugB > /tmp/items.json
//
// Matching: a page's PDF is the file in a JF volume folder whose ISSUE year
// (parsed from the folder name) equals the page's year and whose filename
// contains the page's lead-author surname (the first slug token, uppercased).
// Anything it cannot resolve uniquely is printed to stderr for hand-resolution
// (accented surnames, "Di Maggio"-style particles, surname collisions in a year).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const papersDir = path.join(root, 'src', 'content', 'docs', 'papers', 'jf');
const JF = '/mnt/data_drive/Dropbox/Dropbox/Papers/JF';
const LINKDIR = '/tmp/iar-axes-full';

const args = process.argv.slice(2);
const today = args[args.indexOf('--today') + 1] ?? '';
const skip = new Set((args[args.indexOf('--skip') + 1] ?? '').split(',').filter(Boolean));

// --- distilled JF pages: {slug, year, surname} ---------------------------
const pages = [];
for (const y of fs.readdirSync(papersDir, { withFileTypes: true })) {
  if (!y.isDirectory()) continue;
  for (const f of fs.readdirSync(path.join(papersDir, y.name))) {
    if (!f.endsWith('.md')) continue;
    const slug = f.replace(/\.md$/, '');
    if (skip.has(slug)) continue;
    pages.push({ slug, year: Number(y.name), surname: slug.split('-')[0] });
  }
}

// --- JF library index: {folderYear, file, dir} ---------------------------
const lib = [];
for (const vol of fs.readdirSync(JF, { withFileTypes: true })) {
  if (!vol.isDirectory()) continue;
  // Prefer the canonical folder over a "(1)" duplicate.
  if (/\(\d+\)\s*$/.test(vol.name)) continue;
  const folderYear = Number(vol.name.match(/\((?:\w+\s+)?(\d{4})\)/)?.[1] ?? 0);
  if (!folderYear) continue;
  for (const file of fs.readdirSync(path.join(JF, vol.name))) {
    if (file.toLowerCase().endsWith('.pdf')) lib.push({ folderYear, file, dir: path.join(JF, vol.name) });
  }
}

fs.mkdirSync(LINKDIR, { recursive: true });
const items = [];
const failed = [];
for (const p of pages) {
  const SUR = p.surname.toUpperCase();
  const matches = lib.filter((e) => e.folderYear === p.year && e.file.toUpperCase().includes(SUR));
  if (matches.length !== 1) {
    failed.push({ slug: p.slug, year: p.year, surname: p.surname, nMatches: matches.length });
    continue;
  }
  const link = path.join(LINKDIR, `${p.slug}.pdf`);
  try { fs.rmSync(link, { force: true }); } catch {}
  fs.symlinkSync(path.join(matches[0].dir, matches[0].file), link);
  if (!fs.existsSync(link)) { failed.push({ slug: p.slug, why: 'symlink unresolved' }); continue; }
  items.push({ slug: p.slug, journal: 'jf', year: p.year, pdf: link });
}

console.log(JSON.stringify({ today, items }, null, 2));
console.error(`resolved ${items.length}/${pages.length} (skipped ${skip.size}); failed ${failed.length}: ${JSON.stringify(failed, null, 2)}`);
