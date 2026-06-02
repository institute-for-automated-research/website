#!/usr/bin/env node
// Guard: every relatesTo edge must be locatable in the page body.
//
// The distill template rule is "Name every relatesTo cite somewhere in the body
// so the edge is locatable" — a contradicts/builds-on/extends edge a reader
// cannot find in the prose is invisible. This script enforces that rule across
// every distilled paper page and FAILS THE BUILD (exit 1) if any cite's
// author-year is missing from the body. It runs in `prebuild` alongside
// check-dataset-access.mjs.
//
// Locatability is checked by proximity, not bare token presence: the first
// author's surname must appear within PROX characters of the year. This rejects
// coincidental matches (e.g. the paper's own author surname in the attribution
// plus some other work's year elsewhere on the page), which a presence-only
// check would wave through.
//
// Usage:
//   node scripts/check-relatesto-locatable.mjs        # report + exit 1 on miss
//   node scripts/check-relatesto-locatable.mjs --warn  # report only, exit 0
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const WARN = process.argv.includes('--warn');
const PROX = 80; // max chars between surname and year to count as one author-year cite
// normalize for comparison: strip diacritics, lowercase, drop dots/apostrophes.
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[.'']/g, '').trim();

function walk(d) {
  const out = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// "Berry, Levinsohn & Pakes (1995)" -> { firstSurname:'berry', year:'1995' }
function parseCite(cite) {
  const ym = cite.match(/\((\d{4})[a-z]?\)/);
  const year = ym ? ym[1] : null;
  let names = cite.replace(/\(.*$/, '').trim();
  names = names.replace(/\bet al\.?/gi, '').replace(/&/g, ',').replace(/\band\b/gi, ',');
  const first = names.split(',')[0].trim();
  // last token handles "Lopez de Prado" -> "prado"; first author only
  const firstSurname = first ? norm(first.split(/\s+/).pop()) : null;
  return { firstSurname, year };
}

// split front matter from body; return edges (cite list) + normalized body text.
function parsePage(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return null;
  const fm = m[1];
  const body = m[2];
  const lines = fm.split('\n');
  let inRel = false;
  const cites = [];
  for (const l of lines) {
    if (/^  relatesTo:\s*$/.test(l)) { inRel = true; continue; }
    if (inRel && /^  [a-zA-Z]+:/.test(l)) inRel = false;
    if (!inRel) continue;
    const cm = l.match(/cite:\s*'([^']+)'|cite:\s*"([^"]+)"/);
    if (cm) cites.push(cm[1] || cm[2]);
  }
  return { cites, body };
}

// is `cite` locatable in `body`? surname within PROX chars of the year.
function locatable(cite, normBody) {
  const { firstSurname, year } = parseCite(cite);
  if (!firstSurname || !year) return true; // unparseable cite — not this guard's job
  let i = 0;
  while ((i = normBody.indexOf(year, i)) !== -1) {
    const window = normBody.slice(Math.max(0, i - PROX), i);
    if (window.includes(firstSurname)) return true;
    i += 4;
  }
  return false;
}

const files = walk(join(root, 'src/content/docs/papers')).sort();
let pages = 0, edges = 0, misses = 0;
const report = [];

for (const f of files) {
  const parsed = parsePage(readFileSync(f, 'utf8'));
  if (!parsed || !parsed.cites.length) continue;
  pages++;
  const normBody = norm(parsed.body);
  const bad = [];
  for (const cite of parsed.cites) {
    edges++;
    if (!locatable(cite, normBody)) { misses++; bad.push(cite); }
  }
  if (bad.length) {
    report.push(`\n  ${f.replace(root + '/', '')}`);
    for (const c of bad) report.push(`    MISS  ${c}`);
  }
}

if (misses) {
  console.log(`relatesTo locatability: ${misses} un-locatable cite(s) across ${pages} pages` + report.join('\n'));
  console.log(`\nEach relatesTo cite must be named in the body (first-author surname near the year).`);
  if (!WARN) process.exit(1);
} else {
  console.log(`relatesTo locatability: OK — all ${edges} edges across ${pages} pages locatable in body.`);
}
