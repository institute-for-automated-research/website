#!/usr/bin/env node
// Ground relatesTo edges in the real OpenAlex citation graph.
//
// Each distilled paper carries relatesTo edges of the form
//   - { cite: 'Berry, Levinsohn & Pakes (1995)', relation: builds-on, note: '...' }
// where `cite` is a human author-year string and most edges have no `doi`. This
// script resolves each cite to a REAL DOI by matching author surnames + year
// against the paper's actual OpenAlex reference list (openalex.py refs <doi>),
// then (with --write) inserts `doi: '<doi>'` into the edge: inline after the
// cite field for flow-style edges (`- { cite: ... }`), or as a sibling `doi:`
// line for block-style edges (`- cite: ...` on its own line) so the result
// stays valid YAML either way.
//
// Discipline: a wrong DOI silently corrupts the citation graph, so a DOI is
// assigned ONLY on an unambiguous match (year aligns AND the first-author
// surname appears among the reference's authors, with extra surnames used to
// break ties). Anything ambiguous or absent from the reference list is left
// without a doi and reported. Edges that already carry a doi are never touched.
//
// Usage:
//   node scripts/ground-relatesto.mjs            # report only
//   node scripts/ground-relatesto.mjs --write     # edit pages in place
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const WRITE = process.argv.includes('--write');
// normalize a surname for comparison: lowercase, strip diacritics, drop dots.
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[.'']/g, '').trim();
// DOIs OpenAlex lists in reference lists but that do NOT resolve on Crossref
// (the audit in check-relatesto-dois.mjs flags them as 404). Never assign one,
// or it gets re-added on every run and has to be stripped again. Lowercase.
const KNOWN_BAD_DOIS = new Set([
  '10.7916/d8v12ft1', // OpenAlex's bad DOI for Stiglitz & Weiss (1981); 404s on Crossref
  '10.7916/d8765r99', // OpenAlex's bad DOI for Grossman & Stiglitz (1980); 404s on Crossref
]);
const CACHE = join(root, 'scripts/openalex/.refs-cache');
if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });

function walk(d) {
  const out = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// OpenAlex reference list for a paper DOI, cached on disk.
function fetchRefs(doi) {
  const cf = join(CACHE, doi.replace(/[^a-z0-9]/gi, '_') + '.jsonl');
  let raw;
  if (existsSync(cf)) {
    raw = readFileSync(cf, 'utf8');
  } else {
    raw = execFileSync('python3',
      [join(root, 'scripts/openalex/openalex.py'), 'refs', `doi:${doi}`, '--top', '300', '--json'],
      { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    writeFileSync(cf, raw);
  }
  const refs = [];
  for (const line of raw.split('\n')) {
    if (!line.trim()) continue;
    let o; try { o = JSON.parse(line); } catch { continue; }
    if (!o.doi) continue;
    const cleanDoi = String(o.doi).replace(/^https?:\/\/doi\.org\//, '').toLowerCase();
    if (KNOWN_BAD_DOIS.has(cleanDoi)) continue;
    refs.push({
      doi: cleanDoi,
      year: o.year,
      title: o.title || '',
      surnames: (o.authors || []).map((a) => norm(a.trim().split(/\s+/).pop())),
    });
  }
  return refs;
}

// "Berry, Levinsohn & Pakes (1995)" -> { surnames:['berry','levinsohn','pakes'], year:1995 }
function parseCite(cite) {
  const ym = cite.match(/\((\d{4})[a-z]?\)/);
  const year = ym ? Number(ym[1]) : null;
  let names = cite.replace(/\(.*$/, '').trim();
  names = names.replace(/\bet al\.?/gi, '').replace(/&/g, ',').replace(/\band\b/gi, ',');
  const surnames = names.split(',').map((s) => s.trim())
    .filter(Boolean)
    // take the last token of each fragment (handles "Lopez de Prado" -> "prado")
    .map((s) => norm(s.split(/\s+/).pop()));
  return { surnames, year };
}

function matchEdge(cite, refs) {
  const { surnames, year } = parseCite(cite);
  if (!surnames.length || year == null) return { status: 'unparsed' };
  const first = surnames[0];
  const yearOk = (r, tol) => r.year != null && Math.abs(r.year - year) <= tol;
  // exact (diacritic-normalized) surname equality only: substring matching
  // false-positives short names (Ang in Huang, Li in Lin, He in Chen).
  const hasFirst = (r) => r.surnames.includes(first);
  const score = (r) => surnames.filter((c) => r.surnames.includes(c)).length;

  for (const tol of [0, 1]) {
    const cands = refs.filter((r) => yearOk(r, tol) && hasFirst(r));
    if (!cands.length) continue;
    const best = Math.max(...cands.map(score));
    const top = cands.filter((r) => score(r) === best);
    if (top.length === 1) return { status: tol === 0 ? 'matched' : 'matched~1yr', doi: top[0].doi, title: top[0].title, refYear: top[0].year };
    return { status: 'ambiguous', n: top.length, sample: top.slice(0, 3).map((r) => `${r.doi}(${r.year})`) };
  }
  return { status: 'no-ref' };
}

// Pull paper DOI + per-edge {cite, hasDoi, raw line} from a page.
function parsePage(text) {
  const fm = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  const paperDoi = (fm.match(/^  doi:\s*(\S+)/m) || [])[1];
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
    // match a doi whether quoted ('..' / "..") or bare (doi: 10.x, up to a
    // comma/brace/space). Missing the bare form makes ground insert a SECOND
    // doi key into an edge that already has one -> duplicate mapping key.
    const dm = l.match(/\bdoi:\s*'([^']+)'|\bdoi:\s*"([^"]+)"|\bdoi:\s*([^\s,}]+)/);
    edges.push({ lineNo: i, cite: cm[1] || cm[2], hasDoi: !!dm, doi: dm ? (dm[1] || dm[2] || dm[3]) : null });
  }
  return { paperDoi, lines, edges };
}

const files = walk(join(root, 'src/content/docs/papers')).sort();
let total = 0, matched = 0, fuzzy = 0, ambiguous = 0, noref = 0, hadDoi = 0, unparsed = 0, dupskip = 0;

for (const f of files) {
  let text = readFileSync(f, 'utf8');
  const { paperDoi, lines, edges } = parsePage(text);
  if (!paperDoi || !edges.length) continue;
  let refs;
  try { refs = fetchRefs(paperDoi); }
  catch (e) { console.log(`! refs failed ${paperDoi}: ${e.message.split('\n')[0]}`); continue; }
  const name = f.split('/').pop();
  // DOIs already present on this page; never assign one twice (two cites ->
  // one DOI is a fuzzy-match collision, e.g. Tsoy 2018/2019 -> the same ref).
  const used = new Set(edges.filter((e) => e.doi).map((e) => e.doi.toLowerCase()));
  const inserts = {}; // lineNo -> doi; the write is deferred to one rebuild pass below
  for (const e of edges) {
    total++;
    if (e.hasDoi) { hadDoi++; continue; }
    const m = matchEdge(e.cite, refs);
    if (m.status === 'matched' || m.status === 'matched~1yr') {
      if (used.has(m.doi.toLowerCase())) {
        dupskip++;
        console.log(`  == ${name}  "${e.cite}" -> ${m.doi} already used on this page; left DOI-less`);
        continue;
      }
      if (m.status === 'matched') matched++; else fuzzy++;
      used.add(m.doi.toLowerCase());
      console.log(`  ${m.status === 'matched' ? 'OK ' : '~1y'} ${name}  "${e.cite}" -> ${m.doi}  [${m.title.slice(0, 50)}]`);
      if (WRITE) inserts[e.lineNo] = m.doi;
    } else if (m.status === 'ambiguous') {
      ambiguous++;
      console.log(`  ?? ${name}  "${e.cite}" ambiguous (${m.n}): ${m.sample.join(', ')}`);
    } else if (m.status === 'unparsed') {
      unparsed++;
      console.log(`  -- ${name}  "${e.cite}" unparsed (no year?)`);
    } else {
      noref++;
      console.log(`  .. ${name}  "${e.cite}" not in reference list`);
    }
  }
  if (WRITE && Object.keys(inserts).length) {
    // One rebuild pass, so a block-style edge (whose doi goes on a NEW line)
    // never shifts the lineNos recorded for the other edges. Flow-style edges
    // (`- { cite: ... }`, a `{` before `cite:` on the line) take the doi inline
    // after the cite field; block-style edges (`- cite: ...` on its own line,
    // no leading brace) get a sibling `doi:` line aligned with relation/note.
    // The latter avoids producing `- cite: "X", doi: '...'`, which is invalid
    // YAML and was breaking the build on block-style relatesTo blocks.
    const out = [];
    for (let i = 0; i < lines.length; i++) {
      const doi = inserts[i];
      if (doi == null) { out.push(lines[i]); continue; }
      const l = lines[i];
      const brace = l.indexOf('{'), cite = l.indexOf('cite:');
      if (brace !== -1 && brace < cite) {
        out.push(l.replace(/(cite:\s*(?:'[^']+'|"[^"]+"))/, `$1, doi: '${doi}'`));
      } else {
        out.push(l);
        const dash = (l.match(/^(\s*)-\s/) || [, ''])[1].length;
        out.push(`${' '.repeat(dash + 2)}doi: '${doi}'`);
      }
    }
    writeFileSync(f, out.join('\n'));
  }
}

console.log(`\n${total} edges: ${hadDoi} already-doi, ${matched} matched, ${fuzzy} matched~1yr, ${dupskip} dup-skip, ${ambiguous} ambiguous, ${noref} not-in-refs, ${unparsed} unparsed`);
console.log(WRITE ? 'WROTE dois into pages.' : 'report only (pass --write to edit).');
