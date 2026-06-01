#!/usr/bin/env node
// Build a distill-papers work-list for one JF issue folder. Reads real
// filenames off disk (so the unicode hyphens / accents in the paths are exact),
// skips ISSUE INFORMATION and any author already distilled, and maps each
// remaining PDF to a slug via an author-token lookup. Prints args JSON.
import { readdirSync } from 'node:fs';

const DIR = process.argv[2];
const YEAR = process.argv[3] || '2026';
// author token (uppercase, as in filename) -> slug (year appended below)
const SLUGS = {
  GHOSH: 'ghosh-fintech-lending-cashless-payments',
  LAUDENBACH: 'laudenbach-communism-attitudes',
  BECHT: 'becht-private-meetings-portfolio-firms',
  CARAMP: 'caramp-monetary-policy-wealth-effects',
  HEITZ: 'heitz-bank-monitoring-onsite-inspections',
  'JIMÉNEZ': 'jimenez-monetary-policy-inflation-crises',
  LI: 'li-investor-composition-corporate-bond-liquidity',
  MARTIN: 'martin-deposit-flows-failing-banks',
  STARKS: 'starks-esg-profiles-investor-horizons',
  STAVRAKEVA: 'stavrakeva-dollar-great-recession',
};
const SKIP_AUTHORS = new Set(['DITTMAR', 'KWAN', 'PEDERSEN']); // already distilled

const items = [];
for (const f of readdirSync(DIR).sort()) {
  if (!f.endsWith('.pdf')) continue;
  if (/ISSUE INFORMATION/i.test(f)) continue;
  // "The Journal of Finance - <yr> - <AUTHOR> - <title>.pdf"
  const m = f.match(/ - \d{4} - (.+?) - (.+)\.pdf$/);
  if (!m) { console.error('UNPARSED:', f); continue; }
  const author = m[1].trim();
  const authorKey = author.toUpperCase();
  if (SKIP_AUTHORS.has(authorKey)) continue;
  const base = SLUGS[author] || SLUGS[authorKey];
  if (!base) { console.error('NO SLUG for author:', author, '->', f); continue; }
  items.push({
    slug: `${base}-${YEAR}`,
    journal: 'jf',
    year: Number(YEAR),
    pdf: `${DIR}/${f}`,
    hint: m[2].replace(/\s+/g, ' ').trim(),
  });
}
console.log(JSON.stringify({ today: '2026-06-01', items }, null, 2));
console.error(`\n${items.length} items built`);
