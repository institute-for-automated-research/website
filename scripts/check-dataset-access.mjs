#!/usr/bin/env node
// Validate the dataset registry against the paper corpus:
//  1. every `data:<slug>` tag in use has a registry entry (and vice-versa is
//     reported, not failed);
//  2. each paper's hand-set `paper.dataAccess` matches the tier DERIVED as the
//     most-restrictive access over the paper's `data:<slug>` tags.
// A paper may legitimately be MORE restrictive than its datasets imply (it used
// a hand-collected or non-dataset confidential source); that is reported as
// "paper stricter" and is not an error. A paper LESS restrictive than its
// datasets imply is a real flag: it under-claims the access burden.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
function walk(d) {
  const out = [];
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}
const RANK = { public: 0, 'licensed-commercial': 1, 'hand-collected': 2, 'proprietary-confidential': 3 };

// --- parse the registry: slug -> access (block-structured, 2-space indent) ---
const regText = readFileSync(join(root, '.claude/skills/wiki-page/dataset-registry.yml'), 'utf8');
const reg = {};
let cur = null;
for (const line of regText.split('\n')) {
  const m = line.match(/^  ([a-z0-9-]+):\s*$/);
  if (m) { cur = m[1]; continue; }
  const a = line.match(/^    access:\s*(\S+)/);
  if (a && cur) reg[cur] = a[1];
}

// --- scan papers ---
const files = walk(join(root, 'src/content/docs/papers'));
const usedSlugs = new Set();
let mismatches = 0, stricter = 0, ok = 0;
const missing = new Set();

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  // data:<slug> tags live in the frontmatter `tags` field. Scan the whole
  // frontmatter block so this works for both inline (`tags: [...]`) and
  // block-sequence tag styles.
  const fm = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  const slugs = [...new Set([...fm.matchAll(/data:([a-z0-9-]+)/g)].map((m) => m[1]))];
  slugs.forEach((s) => usedSlugs.add(s));
  const declared = (text.match(/^\s*dataAccess:\s*(\S+)/m) || [])[1];
  if (!slugs.length) continue;

  let derivedRank = -1, derived = null;
  for (const s of slugs) {
    if (!(s in reg)) { missing.add(s); continue; }
    if (RANK[reg[s]] > derivedRank) { derivedRank = RANK[reg[s]]; derived = reg[s]; }
  }
  if (derived == null) continue;
  const name = f.split('/').slice(-1)[0];
  if (!declared) {
    console.log(`MISSING dataAccess: ${name} (derived ${derived})`);
    mismatches++;
  } else if (declared === derived) {
    ok++;
  } else if (RANK[declared] > derivedRank) {
    console.log(`paper stricter (ok): ${name} declared=${declared} derived=${derived} [${slugs.join(',')}]`);
    stricter++;
  } else {
    console.log(`UNDER-CLAIM: ${name} declared=${declared} derived=${derived} [${slugs.join(',')}]`);
    mismatches++;
  }
}

// A used slug with no registry entry is a non-fatal warning (matches the
// "datasets cited but undocumented" philosophy): a new dataset is staged via
// proposedVocab and added here by the curator, it should not break the build.
for (const s of [...usedSlugs].sort())
  if (!(s in reg)) console.log(`[check-dataset-access] WARN slug not in registry: ${s}`);

console.log(`[check-dataset-access] ${ok} match, ${stricter} paper-stricter, ${mismatches} flagged, ${missing.size} missing-slug`);
if (mismatches > 0) {
  console.error('[check-dataset-access] FAIL: a paper under-claims its data access (or is missing dataAccess). See lines above.');
  process.exit(1);
}
console.log('[check-dataset-access] OK');
