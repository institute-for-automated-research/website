#!/usr/bin/env node
// Audit relatesTo DOIs against Crossref.
//
// paper-distiller sometimes GUESSES a `doi:` for a relatesTo edge instead of
// leaving it absent. A guessed DOI is worse than none: it silently points the
// citation graph at the wrong (or a non-existent) paper. In the JF 80(6) batch,
// 28 of ~63 guessed DOIs were wrong — a crypto-returns paper, a journal "Cover
// and Front matter" record, an entirely different author's article, etc. The
// locatability guard (check-relatesto-locatable.mjs) does not catch this: a cite
// can be perfectly locatable in the body and still carry a hallucinated DOI.
//
// This script resolves every relatesTo DOI against api.crossref.org/works/<doi>
// and flags three failure modes:
//   1. 404            — the DOI does not resolve to any work.
//   2. author-mismatch — the cite's first-author surname is absent from the
//                        resolved work's authors (handles "et al.", particles,
//                        diacritics, apostrophes). This catches a DOI that
//                        resolves but points at the wrong paper.
//   3. duplicate       — two cites on the same page share one DOI (a fuzzy-match
//                        collision: distinct works cannot share a DOI).
//
// Flagged DOIs are not trustworthy. With --write the script STRIPS the `doi:`
// field from each flagged edge (leaving the cite intact); ground-relatesto.mjs
// can then refill it from the paper's real OpenAlex reference list. The paper's
// own `doi:` (top-level frontmatter) is never audited or touched — only
// relatesTo edge DOIs.
//
// Crossref responses are cached on disk (scripts/openalex/.crossref-cache) so
// re-runs are free. Crossref's polite pool wants a mailto; we send one.
//
// Usage:
//   node scripts/check-relatesto-dois.mjs           # report only, exit 1 if any flagged
//   node scripts/check-relatesto-dois.mjs --write   # strip flagged DOIs in place
//   node scripts/check-relatesto-dois.mjs --warn    # report only, always exit 0
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const WRITE = process.argv.includes('--write');
const WARN = process.argv.includes('--warn');
const MAILTO = 'hello@instituteforautomatedresearch.org'; // Crossref polite-pool contact
const CACHE = join(root, 'scripts/openalex/.crossref-cache');
if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });

// normalize for surname comparison: strip diacritics, lowercase, drop dots/apostrophes/hyphens.
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[.'‘’-]/g, '').trim();

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
  // last token handles "van Binsbergen" -> "binsbergen", "Lopez de Prado" -> "prado"
  const firstSurname = first ? norm(first.split(/\s+/).pop()) : null;
  return { firstSurname, year };
}

// Resolve a DOI against Crossref; cached. Returns { ok, status, authorTokens, title }.
// ok=false with status='404' means the DOI does not resolve.
async function resolveDoi(doi) {
  const cf = join(CACHE, doi.replace(/[^a-z0-9]/gi, '_') + '.json');
  if (existsSync(cf)) return JSON.parse(readFileSync(cf, 'utf8'));
  const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}?mailto=${encodeURIComponent(MAILTO)}`;
  let rec;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': `IAR-relatesto-audit (mailto:${MAILTO})` } });
    if (res.status === 404) {
      rec = { ok: false, status: '404' };
    } else if (!res.ok) {
      rec = { ok: false, status: `http-${res.status}`, soft: true }; // transient; do not cache as fatal
    } else {
      const j = await res.json();
      const msg = j.message || {};
      // collect every surname token across all authors (family name, split on spaces)
      const tokens = new Set();
      for (const a of msg.author || []) {
        const fam = a.family || a.name || '';
        for (const t of norm(fam).split(/\s+/)) if (t) tokens.add(t);
      }
      rec = { ok: true, status: 'resolved', authorTokens: [...tokens], title: (msg.title || [])[0] || '' };
    }
  } catch (e) {
    rec = { ok: false, status: 'fetch-error', soft: true, msg: e.message };
  }
  if (!rec.soft) writeFileSync(cf, JSON.stringify(rec)); // never cache transient failures
  return rec;
}

// Pull relatesTo edges (cite, doi, line index) from a page. Edges are inline-flow
// (`- { cite: ..., doi: ..., note: ... }`) with cite and doi on the same opening
// line; a doi quoted ('...'/"...") or bare (10.x/y). A multi-line edge with doi on
// a CONTINUATION line would be missed — none exist in the corpus, but keep cite+doi
// together on the opening line.
function parsePage(text) {
  const lines = text.split('\n');
  let inRel = false;
  const edges = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^  relatesTo:\s*$/.test(l)) { inRel = true; continue; }
    if (inRel && /^  [a-zA-Z]+:/.test(l)) inRel = false;
    if (!inRel) continue;
    const cm = l.match(/cite:\s*'([^']+)'|cite:\s*"([^"]+)"/);
    if (!cm) continue;
    const dm = l.match(/\bdoi:\s*'([^']+)'|\bdoi:\s*"([^"]+)"|\bdoi:\s*([^\s,'"}]+)/);
    edges.push({ lineNo: i, cite: cm[1] || cm[2], doi: dm ? (dm[1] || dm[2] || dm[3]) : null });
  }
  return { lines, edges };
}

const files = walk(join(root, 'src/content/docs/papers')).sort();
let pages = 0, withDoi = 0, flagged = 0, soft = 0;
const report = [];

for (const f of files) {
  let text = readFileSync(f, 'utf8');
  const { lines, edges } = parsePage(text);
  const dosied = edges.filter((e) => e.doi);
  if (!dosied.length) continue;
  pages++;
  const name = f.replace(root + '/', '');

  // duplicate-DOI-within-page: distinct cites cannot legitimately share a DOI.
  const byDoi = new Map();
  for (const e of dosied) {
    const k = e.doi.toLowerCase();
    if (!byDoi.has(k)) byDoi.set(k, []);
    byDoi.get(k).push(e);
  }
  const dupDois = new Set([...byDoi.entries()].filter(([, es]) => es.length > 1).map(([k]) => k));

  const bad = []; // line numbers to strip
  const pageReport = [];
  for (const e of dosied) {
    withDoi++;
    const reasons = [];
    if (dupDois.has(e.doi.toLowerCase())) reasons.push('duplicate-on-page');
    const r = await resolveDoi(e.doi);
    if (r.soft) {
      soft++;
      pageReport.push(`    SOFT  "${e.cite}" -> ${e.doi}  (${r.status}; not flagged)`);
      continue;
    }
    if (r.status === '404') {
      reasons.push('404');
    } else if (r.ok) {
      const { firstSurname } = parseCite(e.cite);
      if (firstSurname && r.authorTokens.length && !r.authorTokens.includes(firstSurname)) {
        reasons.push(`author-mismatch (cite=${firstSurname}; resolved="${r.title.slice(0, 55)}")`);
      }
    }
    if (reasons.length) {
      flagged++;
      bad.push(e.lineNo);
      pageReport.push(`    FLAG  "${e.cite}" -> ${e.doi}  [${reasons.join('; ')}]`);
    }
  }

  if (pageReport.length) {
    report.push(`\n  ${name}`);
    report.push(...pageReport);
  }

  if (WRITE && bad.length) {
    const DOIVAL = `(?:'[^']*'|"[^"]*"|[^\\s,'"}]+)`; // quoted or bare
    for (const ln of bad) {
      // strip ", doi: <val>" or "doi: <val>, " from the edge line, keep the cite
      lines[ln] = lines[ln]
        .replace(new RegExp(`,\\s*doi:\\s*${DOIVAL}`), '')
        .replace(new RegExp(`doi:\\s*${DOIVAL}\\s*,\\s*`), '');
    }
    writeFileSync(f, lines.join('\n'));
  }
}

console.log(report.join('\n'));
console.log(`\nrelatesTo DOIs: ${withDoi} checked across ${pages} pages: ${flagged} flagged, ${soft} soft (transient, re-run).`);
if (WRITE) console.log(flagged ? `STRIPPED ${flagged} flagged DOI(s) from pages. Re-run ground-relatesto.mjs --write to refill from real reference lists.` : 'nothing to strip.');
else console.log('report only (pass --write to strip flagged DOIs).');

if (flagged && !WRITE && !WARN) process.exit(1);
