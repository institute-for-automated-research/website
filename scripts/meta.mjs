// Meta-analysis of the distilled-paper corpus, derived live from the wiki pages
// (the source of truth), so it can never go stale. This is the aggregation
// layer that makes the queryable frontmatter axes actually answer the three
// questions the series exists for: where is the literature moving, what kind of
// work is being done, and where are the gaps.
//
//   node scripts/meta.mjs                 # full report (text)
//   node scripts/meta.mjs --json          # the same aggregates as JSON
//   node scripts/meta.mjs --missing       # pages missing each queryable axis
//                                          (doubles as backfill progress)
//
// It reads every src/content/docs/papers/<journal>/<year>/<slug>.md, parses the
// `paper:` frontmatter block, and cross-tabs the axes. New axes that older pages
// predate (identification, contributionType, mechanisms, scope.dataType, ...)
// simply show as absent until backfilled; the coverage line reports that.

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import yaml from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const papersDir = join(root, 'src', 'content', 'docs', 'papers');

// --- load every paper page's parsed frontmatter --------------------------
function loadPapers() {
  const out = [];
  for (const j of readdirSync(papersDir, { withFileTypes: true })) {
    if (!j.isDirectory()) continue; // skip index.mdx
    for (const y of readdirSync(join(papersDir, j.name), { withFileTypes: true })) {
      if (!y.isDirectory()) continue;
      for (const f of readdirSync(join(papersDir, j.name, y.name))) {
        if (!f.endsWith('.md')) continue;
        const slug = f.replace(/\.md$/, '');
        const src = readFileSync(join(papersDir, j.name, y.name, f), 'utf8');
        const raw = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
        let fm = {};
        try {
          fm = yaml.load(raw) ?? {};
        } catch (e) {
          console.warn(`[meta] YAML parse failed for ${j.name}/${y.name}/${slug}: ${e.message}`);
        }
        const p = fm.paper ?? {};
        out.push({ journal: j.name, dirYear: y.name, slug, p });
      }
    }
  }
  return out;
}

// --- small aggregation helpers -------------------------------------------
const asArray = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

// Count occurrences. `multi` flattens array-valued fields (a paper may carry
// several contributionTypes / mechanisms / dataTypes); each value is counted
// once per paper that has it.
function tally(papers, pick, { multi = false } = {}) {
  const m = new Map();
  for (const { p } of papers) {
    const v = pick(p);
    const vals = multi ? asArray(v) : v == null ? [] : [v];
    for (const x of vals) m.set(x, (m.get(x) ?? 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
}

// year -> (value -> count) cross-tab.
function crossYear(papers, pick, { multi = false } = {}) {
  const years = new Map();
  for (const { p } of papers) {
    const yr = p.year ?? 'n/a';
    const v = pick(p);
    const vals = multi ? asArray(v) : v == null ? ['(absent)'] : [v];
    const row = years.get(yr) ?? new Map();
    for (const x of vals) row.set(x, (row.get(x) ?? 0) + 1);
    years.set(yr, row);
  }
  return years;
}

// Last calendar year appearing in a scope.period string ("1985-01..2019-12",
// "2018..2021", "2007"); the data window's end, for the staleness view.
function periodEndYear(period) {
  if (!period || typeof period !== 'string') return null;
  const yrs = [...period.matchAll(/\b(19|20)\d{2}\b/g)].map((m) => Number(m[0]));
  return yrs.length ? Math.max(...yrs) : null;
}

function median(xs) {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

// --- compute the aggregates ----------------------------------------------
function analyze(papers) {
  const n = papers.length;
  // Empirical = any paper that is not purely theoretical (methods.role !==
  // 'theory'). This is keyed on role, not family: a model presented as theory
  // (role: theory) has no empirical design, but a role: both paper that
  // empirically tests its model (e.g. with an IV) does and is counted. So the
  // "% causally identified among empirical" denominator and the identification
  // omit rule agree: identification is present iff role !== 'theory'.
  const empirical = papers.filter((x) => x.p.methods?.family && x.p.methods.role !== 'theory');

  // Data recency: publication year minus the data window's end year.
  const recency = [];
  for (const { p } of papers) {
    const end = periodEndYear(p.scope?.period);
    if (end != null && typeof p.year === 'number' && end <= p.year + 1) {
      recency.push(p.year - end);
    }
  }

  // Causal-identification share among EMPIRICAL papers (theory omits the axis,
  // so the denominator is empirical papers only; this is why the omit-vs-
  // descriptive distinction matters).
  const idTallied = empirical.filter((x) => x.p.methods?.identification);
  const causal = idTallied.filter(
    (x) => !['descriptive'].includes(x.p.methods.identification)
  );

  // New-axis coverage (backfill progress): how many pages populate each.
  const has = (pick) => papers.filter((x) => {
    const v = pick(x.p);
    return Array.isArray(v) ? v.length > 0 : v != null;
  }).length;
  const coverage = {
    'methods.identification': has((p) => p.methods?.identification),
    contributionType: has((p) => p.contributionType),
    mechanisms: has((p) => p.mechanisms),
    introducesData: papers.filter((x) => x.p.introducesData === true).length,
    'scope.dataType': has((p) => p.scope?.dataType),
    'scope.granularity': has((p) => p.scope?.granularity),
    'scope.n': has((p) => p.scope?.n),
    findings: has((p) => p.findings),
    resultType: has((p) => p.resultType),
  };

  // The "what works" effectiveness axis. findings[] is per-result, so flatten
  // to one record per finding (a paper carries many); these tallies are
  // per-finding, not per-paper. resultType is the paper-level verdict.
  const findings = papers.flatMap((x) => asArray(x.p.findings).map((f) => ({ ...f, _slug: x.slug })));
  const tallyF = (pick) => {
    const m = new Map();
    for (const f of findings) {
      const v = pick(f);
      if (v == null) continue;
      m.set(v, (m.get(v) ?? 0) + 1);
    }
    return [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
  };
  const benchmarked = findings.filter((f) => f.vsBenchmark);
  const benchmarkedDir = {};
  for (const f of benchmarked) benchmarkedDir[f.direction] = (benchmarkedDir[f.direction] ?? 0) + 1;

  // Contested / tested edges: the contestation subgraph.
  const contested = [];
  for (const { slug, p } of papers) {
    for (const e of asArray(p.relatesTo)) {
      if (e && (e.relation === 'contradicts' || e.relation === 'tests')) {
        contested.push({ slug, cite: e.cite, relation: e.relation, note: e.note });
      }
    }
  }

  return {
    n,
    empiricalN: empirical.length,
    byJournal: tallyKey(papers, 'journal'),
    byYear: tallyKey(papers, (x) => x.p.year ?? 'n/a'),
    family: tally(papers, (p) => p.methods?.family),
    familyByYear: crossYear(papers, (p) => p.methods?.family),
    role: tally(papers, (p) => p.methods?.role),
    identification: tally(papers, (p) => p.methods?.identification),
    identificationByYear: crossYear(empirical, (p) => p.methods?.identification),
    causalShareEmpirical: idTallied.length
      ? { identified: causal.length, of: idTallied.length, unclassified: empirical.length - idTallied.length }
      : { identified: 0, of: 0, unclassified: empirical.length },
    contributionType: tally(papers, (p) => p.contributionType, { multi: true }),
    contributionTypeByYear: crossYear(papers, (p) => p.contributionType, { multi: true }),
    resultType: tally(papers, (p) => p.resultType),
    resultTypeByYear: crossYear(papers, (p) => p.resultType),
    findingsN: findings.length,
    findingsPages: coverage.findings,
    findingMetric: tallyF((f) => f.metric),
    findingDirection: tallyF((f) => f.direction),
    benchmarkedN: benchmarked.length,
    benchmarkedDir,
    mechanisms: tally(papers, (p) => p.mechanisms, { multi: true }),
    buildsFrom: tally(papers, (p) => p.methods?.buildsFrom, { multi: true }),
    topics: tally(papers, (p) => p.topics, { multi: true }),
    region: tally(papers, (p) => p.scope?.region),
    assetClass: tally(papers, (p) => p.scope?.assetClass),
    frequency: tally(papers, (p) => p.scope?.frequency),
    dataType: tally(papers, (p) => p.scope?.dataType, { multi: true }),
    granularity: tally(papers, (p) => p.scope?.granularity, { multi: true }),
    dataAccess: tally(papers, (p) => p.dataAccess),
    replicationStatus: tally(papers, (p) => p.replicationCode?.status),
    introducesDataCount: coverage.introducesData,
    relation: tally(papers, (p) => asArray(p.relatesTo).map((e) => e?.relation), { multi: true }),
    recency: {
      n: recency.length,
      median: median(recency),
      mean: recency.length ? Number((recency.reduce((a, b) => a + b, 0) / recency.length).toFixed(1)) : null,
    },
    contested,
    coverage,
  };
}

// tally over the page wrapper (journal etc.), not the paper block.
function tallyKey(papers, pick) {
  const m = new Map();
  for (const x of papers) {
    const v = typeof pick === 'function' ? pick(x) : x[pick];
    m.set(v, (m.get(v) ?? 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
}

// --- text rendering -------------------------------------------------------
const bar = (count, max, width = 24) => '#'.repeat(Math.max(1, Math.round((count / max) * width)));

function printDist(title, rows, { width = 24 } = {}) {
  console.log(`\n${title}`);
  if (!rows.length) {
    console.log('  (none)');
    return;
  }
  const max = rows[0][1];
  const pad = Math.max(...rows.map(([k]) => String(k).length));
  for (const [k, c] of rows) {
    console.log(`  ${String(k).padEnd(pad)}  ${String(c).padStart(3)}  ${bar(c, max, width)}`);
  }
}

function printCrossYear(title, years) {
  console.log(`\n${title}`);
  const yrKeys = [...years.keys()].sort();
  const cols = new Set();
  for (const row of years.values()) for (const k of row.keys()) cols.add(k);
  const colKeys = [...cols].sort();
  const head = ['value'.padEnd(28), ...yrKeys.map((y) => String(y).padStart(6))].join('');
  console.log('  ' + head);
  for (const c of colKeys) {
    const cells = yrKeys.map((y) => String(years.get(y)?.get(c) ?? 0).padStart(6));
    console.log('  ' + c.padEnd(28) + cells.join(''));
  }
}

function report(a) {
  console.log('='.repeat(70));
  console.log(`DISTILLED-CORPUS META  (${a.n} papers, ${a.empiricalN} empirical)`);
  console.log('='.repeat(70));
  printDist('By journal', a.byJournal);
  printDist('By issue year', a.byYear);

  console.log('\n' + '-'.repeat(70));
  console.log('WHAT KIND OF WORK (method + contribution)');
  console.log('-'.repeat(70));
  printDist('methods.family', a.family);
  printDist('methods.role', a.role);
  printDist('contributionType (multi)', a.contributionType);
  printCrossYear('methods.family x issue year', a.familyByYear);

  console.log('\n' + '-'.repeat(70));
  console.log('HOW IT IS IDENTIFIED (the credibility-revolution axis)');
  console.log('-'.repeat(70));
  printDist('methods.identification', a.identification);
  const cs = a.causalShareEmpirical;
  console.log(
    `\nCausally identified among empirical papers: ${cs.identified}/${cs.of} classified` +
      (cs.unclassified ? `  (${cs.unclassified} empirical pages not yet classified)` : '')
  );
  printCrossYear('identification x issue year (empirical only)', a.identificationByYear);

  console.log('\n' + '-'.repeat(70));
  console.log('WHAT IT EXPLAINS (channels, techniques, topics)');
  console.log('-'.repeat(70));
  printDist('mechanisms (multi)', a.mechanisms);
  printDist('methods.buildsFrom (top 20)', a.buildsFrom.slice(0, 20));
  printDist('topics (top 15)', a.topics.slice(0, 15));
  if (a.topics.length > 15) {
    const singletons = a.topics.filter(([, c]) => c === 1).length;
    console.log(`  ... ${a.topics.length} distinct topics total, ${singletons} appear once (long-tail fragmentation).`);
  }

  console.log('\n' + '-'.repeat(70));
  console.log('WHAT WORKS (the effectiveness axis)');
  console.log('-'.repeat(70));
  printDist('resultType (paper verdict)', a.resultType);
  printCrossYear('resultType x issue year', a.resultTypeByYear);
  printDist('findings.metric (per finding)', a.findingMetric);
  printDist('findings.direction (per finding)', a.findingDirection);
  console.log(`\nStructured findings: ${a.findingsN} across ${a.findingsPages} pages; ${a.benchmarkedN} carry a benchmark comparison.`);
  if (a.benchmarkedN) {
    const w = a.benchmarkedDir;
    console.log(
      `Among benchmarked findings: ${w.positive ?? 0} positive, ${w.negative ?? 0} negative, ${w.none ?? 0} none, ${w.mixed ?? 0} mixed.`
    );
  }

  console.log('\n' + '-'.repeat(70));
  console.log('WHERE THE EVIDENCE IS (scope / gaps)');
  console.log('-'.repeat(70));
  printDist('scope.region', a.region);
  printDist('scope.assetClass (top 15)', a.assetClass.slice(0, 15));
  printDist('scope.frequency', a.frequency);
  printDist('scope.dataType (multi)', a.dataType);
  printDist('scope.granularity (multi)', a.granularity);
  if (a.recency.n) {
    console.log(`\nData recency (publication year - data-window end), n=${a.recency.n}: median ${a.recency.median}y, mean ${a.recency.mean}y`);
  }

  console.log('\n' + '-'.repeat(70));
  console.log('REPRODUCIBILITY + LINEAGE');
  console.log('-'.repeat(70));
  printDist('dataAccess', a.dataAccess);
  printDist('replicationCode.status', a.replicationStatus);
  console.log(`\nintroducesData (new source): ${a.introducesDataCount} papers`);
  printDist('relatesTo.relation (multi)', a.relation);
  console.log(`\nContested / tested edges (relation = contradicts | tests): ${a.contested.length}`);
  for (const e of a.contested) {
    console.log(`  [${e.relation}] ${e.slug}  ->  ${e.cite}`);
  }

  console.log('\n' + '-'.repeat(70));
  console.log('NEW-AXIS COVERAGE (backfill progress)');
  console.log('-'.repeat(70));
  for (const [k, c] of Object.entries(a.coverage)) {
    console.log(`  ${k.padEnd(24)}  ${String(c).padStart(3)} / ${a.n}  ${bar(c, a.n, 24)}`);
  }
  console.log('');
}

// --- pages missing each axis (backfill tracker) --------------------------
function reportMissing(papers) {
  const isTheory = (p) => p.methods?.role === 'theory';
  const axes = {
    'methods.identification': (p) => p.methods?.identification != null || isTheory(p),
    contributionType: (p) => Array.isArray(p.contributionType) && p.contributionType.length > 0,
    mechanisms: (p) => Array.isArray(p.mechanisms) && p.mechanisms.length > 0,
    'scope.dataType': (p) => (Array.isArray(p.scope?.dataType) && p.scope.dataType.length > 0) || isTheory(p),
    'scope.granularity': (p) => (Array.isArray(p.scope?.granularity) && p.scope.granularity.length > 0) || isTheory(p),
    'scope.n': (p) => p.scope?.n != null || isTheory(p),
    findings: (p) => (Array.isArray(p.findings) && p.findings.length > 0) || isTheory(p),
    resultType: (p) => p.resultType != null || isTheory(p),
  };
  for (const [axis, ok] of Object.entries(axes)) {
    const missing = papers.filter((x) => !ok(x.p));
    console.log(`\n${axis}: ${papers.length - missing.length}/${papers.length} present (theory papers count as N/A where the axis does not apply)`);
    for (const x of missing) console.log(`  - ${x.journal}/${x.dirYear}/${x.slug}`);
  }
  console.log('');
}

// --- main -----------------------------------------------------------------
const args = process.argv.slice(2);
const papers = loadPapers();

if (args.includes('--missing')) {
  reportMissing(papers);
} else {
  const a = analyze(papers);
  if (args.includes('--json')) {
    // Maps are not JSON-serializable; convert cross-tabs to plain objects.
    const mapToObj = (m) => Object.fromEntries([...m.entries()].map(([y, row]) => [y, Object.fromEntries(row)]));
    console.log(
      JSON.stringify(
        {
          ...a,
          familyByYear: mapToObj(a.familyByYear),
          identificationByYear: mapToObj(a.identificationByYear),
          contributionTypeByYear: mapToObj(a.contributionTypeByYear),
          resultTypeByYear: mapToObj(a.resultTypeByYear),
        },
        null,
        2
      )
    );
  } else {
    report(a);
  }
}
