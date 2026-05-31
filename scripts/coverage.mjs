// Distilled-literature coverage, derived live from the wiki pages (the source
// of truth) so it can never go stale. There is NO committed coverage manifest:
// the pages under src/content/docs/papers/<journal>/<year>/<slug>.md are the
// truth (and /llms.txt mirrors them on the deployed site). This script just
// reports them, and (with --gap) diffs a journal against the local PDF library
// to list what is not distilled yet.
//
//   node scripts/coverage.mjs                 # what IS on the wiki (table)
//   node scripts/coverage.mjs --json          # same, as JSON (for agents)
//   node scripts/coverage.mjs --gap jf        # undistilled JF candidates (table)
//   node scripts/coverage.mjs --gap jf --json # same, as JSON
//   node scripts/coverage.mjs --gap jf /path/to/Papers/JF   # explicit library dir
//
// The library is NOT in this repo and varies by machine, so the gap is computed
// on demand, never committed.

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const papersDir = join(root, 'src', 'content', 'docs', 'papers');

// --- the wiki pages: the source of truth ---------------------------------
function distilled() {
  const out = [];
  for (const j of readdirSync(papersDir, { withFileTypes: true })) {
    if (!j.isDirectory()) continue; // skip index.mdx
    for (const y of readdirSync(join(papersDir, j.name), { withFileTypes: true })) {
      if (!y.isDirectory()) continue;
      for (const f of readdirSync(join(papersDir, j.name, y.name))) {
        if (!f.endsWith('.md')) continue;
        const slug = f.replace(/\.md$/, '');
        const src = readFileSync(join(papersDir, j.name, y.name, f), 'utf8');
        const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
        const title = fm.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? slug;
        const doi = fm.match(/^\s+doi:\s*(.+)\s*$/m)?.[1]?.trim() ?? '';
        out.push({
          journal: j.name,
          year: y.name,
          slug,
          // First slug token is the lead author surname (cakici-...-2025).
          surname: slug.split('-')[0],
          title,
          doi,
          verified: /role:\s*verified/.test(fm),
        });
      }
    }
  }
  return out.sort(
    (a, b) =>
      a.journal.localeCompare(b.journal) ||
      b.year.localeCompare(a.year) ||
      a.slug.localeCompare(b.slug)
  );
}

// --- the local PDF library (for --gap): journal-specific parsers ----------
// Default library root is the sibling Papers tree; override with the 3rd arg.
const defaultLib = resolve(root, '..', '..', 'Papers');

// Each entry: how to find a journal's PDFs and pull (year, surname, title) from
// the filename/folder. Extend as more journals get coverage.
const LIB = {
  jf: {
    dir: (libRoot) => join(libRoot, 'JF'),
    // JF: "Volume 80_ Issue 5 (October 2025)/The Journal of Finance - 2025 - SURNAME - Title.pdf"
    scan(dir) {
      const papers = [];
      if (!existsSync(dir)) return null;
      for (const vol of readdirSync(dir, { withFileTypes: true })) {
        if (!vol.isDirectory()) continue;
        const volYear = vol.name.match(/\((?:\w+\s+)?(\d{4})\)/)?.[1] ?? '';
        if (!volYear) {
          console.warn(`[coverage] skipping folder with no parseable year: ${vol.name}`);
          continue;
        }
        for (const f of readdirSync(join(dir, vol.name))) {
          if (!f.endsWith('.pdf')) continue;
          const m = f.match(/-\s*(\d{4})\s*-\s*([^-]+?)\s*-\s*(.+)\.pdf$/);
          if (!m) continue;
          const surname = m[2].trim().split(/\s+/)[0].toLowerCase();
          // ScienceDirect/Wiley strip punctuation to double-spaces; collapse to
          // one (we lose the odd colon but never invent one).
          const title = m[3].trim().replace(/\s{2,}/g, ' ');
          if (/^(issue information|miscellan|erratum|front matter)/i.test(title)) continue;
          papers.push({ volume: vol.name, year: volYear, surname, title });
        }
      }
      // The library has duplicate issue folders (e.g. "... (1)"); dedupe so
      // counts and the TODO list are not doubled.
      const seen = new Set();
      return papers.filter((p) => {
        const k = `${p.year}|${p.surname}|${p.title}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    },
  },
};

function gap(journal, journalDir) {
  const cfg = LIB[journal];
  if (!cfg) return { error: `no library mapping for journal '${journal}' (have: ${Object.keys(LIB).join(', ')})` };
  const lib = cfg.scan(journalDir);
  if (lib === null) return { error: `library dir not found: ${journalDir} (pass the journal's PDF dir as the 3rd arg)` };
  // Distilled keys for this journal: year|surname. This is a heuristic match:
  // two distinct same-surname papers in one journal-year would collapse (one
  // distilled marks the other done). Rare; the table footnote flags it so a
  // human eyeballs before relying on the TODO list.
  const done = new Set(
    distilled().filter((d) => d.journal === journal).map((d) => `${d.year}|${d.surname}`)
  );
  const todo = lib
    .filter((p) => !done.has(`${p.year}|${p.surname}`))
    .sort((a, b) => b.year.localeCompare(a.year) || a.volume.localeCompare(b.volume) || a.surname.localeCompare(b.surname));
  return { journal, libTotal: lib.length, distilled: lib.length - todo.length, todo };
}

// --- output ---------------------------------------------------------------
const args = process.argv.slice(2);
const asJson = args.includes('--json');
const gapIdx = args.indexOf('--gap');

if (gapIdx !== -1) {
  const journal = args[gapIdx + 1];
  const libArg = args[gapIdx + 2] && !args[gapIdx + 2].startsWith('--') ? args[gapIdx + 2] : null;
  if (!journal) {
    console.error('usage: --gap <journal> [journalPdfDir]');
    process.exit(1);
  }
  // journalDir = explicit 3rd arg (the journal's PDF folder), else derived from
  // the default sibling Papers library via the journal's mapping.
  const journalDir = libArg ? resolve(libArg) : LIB[journal]?.dir(defaultLib);
  const r = gap(journal, journalDir);
  if (r.error) {
    console.error(r.error);
    process.exit(1);
  }
  if (asJson) {
    console.log(JSON.stringify(r, null, 2));
  } else {
    console.log(`${journal.toUpperCase()} coverage: ${r.distilled}/${r.libTotal} distilled, ${r.todo.length} TODO`);
    console.log('(matched by lead-author surname + issue year; eyeball before relying.)\n');
    let curYear = '';
    for (const p of r.todo) {
      if (p.year !== curYear) {
        curYear = p.year;
        console.log(`  ${curYear}`);
      }
      console.log(`   - [${p.surname}] ${p.title}  (${p.volume})`);
    }
  }
} else {
  const all = distilled();
  if (asJson) {
    console.log(JSON.stringify(all, null, 2));
  } else {
    console.log(`Distilled literature: ${all.length} pages\n`);
    const byJournal = {};
    for (const d of all) ((byJournal[d.journal] ??= {})[d.year] ??= []).push(d);
    for (const journal of Object.keys(byJournal).sort()) {
      const years = byJournal[journal];
      const counts = Object.keys(years)
        .sort()
        .reverse()
        .map((y) => `${y}: ${years[y].length}`)
        .join('   ');
      console.log(`${journal}   ${counts}`);
      for (const y of Object.keys(years).sort().reverse()) {
        for (const d of years[y]) {
          console.log(`   ${d.year}  ${d.verified ? 'v' : ' '}  ${d.slug}`);
        }
      }
    }
    console.log('\n(v = has a verified attestation. Source of truth: the pages themselves + /llms.txt.)');
  }
}
