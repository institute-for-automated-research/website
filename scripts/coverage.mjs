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

// --- name normalization (shared by both sides of the --gap match) --------
// PDF filenames carry accents (JIMÉNEZ), Unicode hyphens (BEN\u2010REPHAEL),
// apostrophes (D'AVERNAS) and letters NFD cannot split (JØRRING); slugs are
// plain ASCII kebab-case. Fold both to the slug alphabet so they compare.
const FOLD = { ø: 'o', æ: 'ae', œ: 'oe', ß: 'ss', đ: 'd', ð: 'd', ł: 'l', þ: 'th', ı: 'i' };
function norm(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '') // strip combining accents
    .replace(/[øæœßđðłþı]/g, (c) => FOLD[c])
    .replace(/['\u2018\u2019\u02bc`]/g, '') // apostrophes: d'avernas -> davernas
    .replace(/[\p{Pd}\s_]+/gu, '-') // any dash or space -> '-'
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Slug-prefix keys a library surname may appear under: the full hyphen-joined
// form (ben-rephael, demiguel), the apostrophe-split last part (avernas), and
// the last word of a spaced particle name (DI MAGGIO -> maggio).
function surnameKeys(raw) {
  const keys = new Set([norm(raw)]);
  const parts = norm(raw.replace(/['\u2018\u2019\u02bc`\s]+/g, ' ')).split('-');
  if (parts.length > 1 && !/[\p{Pd}]/u.test(raw)) keys.add(parts.at(-1));
  return [...keys].filter(Boolean);
}

// Content words of a title, for the same-surname tiebreak against a slug.
const STOP = new Set(['the', 'and', 'for', 'from', 'with', 'into', 'evidence', 'what', 'does', 'how', 'are']);
const titleWords = (t) => norm(t).split('-').filter((w) => w.length > 2 && !STOP.has(w));

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
          // First slug token is the lead author surname (cakici-...-2025);
          // compound surnames span several tokens (ben-rephael-...), so --gap
          // matches on the slug prefix, not this field.
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
      let untitled = 0;
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
          if (!m) {
            untitled++; // older issues: "... - 2008 - SURNAME.pdf", no title
            continue;
          }
          // Keep the whole surname field (BEN\u2010REPHAEL, DI MAGGIO); norm() and
          // surnameKeys() fold it for matching. `surname` stays readable.
          const surname = m[2].trim().toLowerCase();
          const fileYear = m[1];
          // ScienceDirect/Wiley strip punctuation to double-spaces; collapse to
          // one (we lose the odd colon but never invent one).
          const title = m[3].trim().replace(/\s{2,}/g, ' ');
          if (/^(issue information|miscellan|erratum|front matter)/i.test(title)) continue;
          // Pages are filed by issue year; the filename year (online date) can
          // be one earlier (JOHNSTON-ROSS is "2024" in a 2025 issue), so keep it
          // as a fallback.
          papers.push({ volume: vol.name, year: volYear, fileYear, surname, title });
        }
      }
      if (untitled) {
        console.warn(`[coverage] skipped ${untitled} PDFs with no title in the filename (not counted below)`);
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
  // Match: same issue year (or filename year), and the page slug starts with
  // one of the library surname's normalized keys. When several library papers
  // share a year+surname (HOFFMANN x2 in 2025), each page goes to at most one
  // of them: the one whose title shares the most content words with the slug.
  // A tie for the top score assigns the page to neither (fails safe as TODO).
  const pages = distilled().filter((d) => d.journal === journal);
  const keyed = lib.map((p) => ({ p, keys: surnameKeys(p.surname) }));
  const prefixHit = (slug, keys) => keys.some((k) => slug === k || slug.startsWith(`${k}-`));
  const overlap = (p, d) => {
    const slugWords = new Set(d.slug.split('-'));
    return new Set(titleWords(p.title).filter((w) => slugWords.has(w))).size;
  };
  const titleHit = (p, d) => overlap(p, d) > 0;
  // A filename-year match is weaker than an issue-year match, so it also needs
  // a shared title word (guards against the same author's other-year paper).
  const claims = ({ p, keys }, d) =>
    prefixHit(d.slug, keys) && (d.year === p.year || (d.year === p.fileYear && titleHit(p, d)));
  const done = new Set();
  for (const d of pages) {
    const rivals = keyed.filter((o) => claims(o, d));
    if (rivals.length === 1) {
      done.add(rivals[0]);
      continue;
    }
    const scored = rivals.map((o) => ({ o, n: overlap(o.p, d) })).sort((a, b) => b.n - a.n);
    if (scored.length > 1 && scored[0].n > 0 && scored[0].n > scored[1].n) done.add(scored[0].o);
  }
  const todo = keyed
    .filter((x) => !done.has(x))
    .map((x) => x.p)
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
    console.log('(matched by normalized lead-author surname as slug prefix + issue year, title words break ties; eyeball before relying.)\n');
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
