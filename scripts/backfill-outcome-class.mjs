// One-shot backfill for Item 2 (issue #11): inserts the governed `outcomeClass`
// bucket(s) after each page's free-text `outcome:` block, and folds the three
// non-canonical `findings.metric` slugs into their governed registry term.
// Idempotent: re-running skips a page that already carries outcomeClass.
//
//   node scripts/backfill-outcome-class.mjs           # apply
//   node scripts/backfill-outcome-class.mjs --check    # report only, no writes
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const papersDir = join(root, 'src', 'content', 'docs', 'papers');
const check = process.argv.includes('--check');

// slug -> governed outcomeClass bucket(s) (from vocab-registry.yml outcome-classes),
// hand-assigned from each page's free-text outcome[] list.
const CLASS = {
  'barkai-value-employment-2025': ['firm-real-outcomes', 'macro-aggregates'],
  'betermier-investor-factors-2025': ['security-returns', 'household-finance'],
  'borgschulte-ceo-stress-aging-death-2025': ['labor-careers-health'],
  'bryzgalova-forest-cross-sections-2025': ['security-returns'],
  'buffa-privacy-team-incentives-2025': ['labor-careers-health'],
  'cakici-pockets-predictability-replication-2025': ['security-returns'],
  'derrien-esg-news-future-cash-2025': ['expectations', 'firm-real-outcomes'],
  'faccio-impediments-schumpeterian-process-replacement-2025': ['firm-dynamics'],
  'falato-stock-market-bank-risk-2025': ['credit-risk', 'bank-funding', 'firm-real-outcomes'],
  'greenwald-credit-line-channel-2025': ['credit-supply', 'firm-real-outcomes'],
  'hirshleifer-war-discourse-cross-section-2025': ['security-returns'],
  'jong-going-broke-bank-reputation-2025': ['asset-prices', 'credit-risk'],
  'kotidis-propagation-cyberattacks-financial-system-2025': ['bank-funding'],
  'kremens-long-horizon-exchange-rate-2025': ['security-returns', 'expectations'],
  'muravyev-anomalies-short-sale-costs-2025': ['security-returns'],
  'parise-green-window-dressing-2025': ['fund-behavior', 'security-returns'],
  'piazzesi-presidential-address-housing-betas-2025': ['asset-prices', 'security-returns'],
  'siriwardane-segmented-arbitrage-2025': ['asset-prices'],
  'stein-imperfect-intermediation-money-like-2025': ['bank-funding', 'asset-prices'],
  'allcott-corporate-social-impact-2026': ['social-welfare'],
  'becht-private-meetings-portfolio-firms-2026': ['fund-behavior', 'security-returns'],
  'beyhaghi-adverse-selection-corporate-loans-2026': ['firm-financing', 'credit-risk'],
  'bhutta-mortgage-overpayment-borrower-sophistication-2026': ['household-finance'],
  'bias-going-public-internal-organization-2026': ['firm-real-outcomes'],
  'caramp-monetary-policy-wealth-effects-2026': ['macro-aggregates', 'asset-prices'],
  'choukhmane-portfolio-choices-risk-preferences-2026': ['household-finance'],
  'coimbra-pension-plans-asset-pricing-2026': ['macro-aggregates'],
  'cookson-social-media-merger-withdrawals-2026': ['firm-dynamics', 'security-returns'],
  'dai-dynamic-trading-realization-utility-2026': ['household-finance'],
  'dittmar-default-risk-sovereign-bonds-2026': ['asset-prices'],
  'ghosh-fintech-lending-cashless-payments-2026': ['credit-supply', 'credit-risk'],
  'griffin-loan-covenant-violations-decline-2026': ['credit-risk'],
  'grigoris-investment-upstream-downstream-uncertainty-2026': ['firm-real-outcomes', 'macro-aggregates'],
  'heitz-bank-monitoring-onsite-inspections-2026': ['credit-risk', 'credit-supply'],
  'jimenez-monetary-policy-inflation-crises-2026': ['credit-risk', 'credit-supply'],
  'kwan-liu-matthies-2026': ['fund-behavior', 'security-returns'],
  'laudenbach-communism-attitudes-2026': ['household-finance'],
  'li-investor-composition-corporate-bond-liquidity-2026': ['asset-prices'],
  'maggio-student-debt-second-chance-2026': ['household-finance'],
  'martin-deposit-flows-failing-banks-2026': ['bank-funding'],
  'pedersen-carbon-pricing-green-finance-2026': ['firm-financing', 'social-welfare'],
  'pikulina-subtle-discrimination-2026': ['labor-careers-health'],
  'starks-esg-profiles-investor-horizons-2026': ['fund-behavior'],
  'stavrakeva-dollar-great-recession-2026': ['security-returns', 'asset-prices'],
};

// non-canonical findings.metric -> governed registry term.
const METRIC_FIX = {
  'survival-milestone': 'probability',
  'proportion': 'probability',
  'inflow-volume': 'level',
};

function walk(d) {
  return readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = join(d, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

const files = walk(papersDir);
const seen = new Set();
let classInserts = 0;
let metricFixes = 0;
const problems = [];

for (const f of files) {
  const slug = f.replace(/.*\//, '').replace(/\.md$/, '');
  let t = readFileSync(f, 'utf8');
  let changed = false;

  // 1) metric folds (only within findings list-item lines).
  t = t.replace(/^(\s+- \{ ref:.*?metric:\s*)([^,}]+)/gm, (m, head, slugVal) => {
    const v = slugVal.trim();
    if (METRIC_FIX[v]) {
      metricFixes++;
      changed = true;
      return head + METRIC_FIX[v];
    }
    return m;
  });

  // 2) outcomeClass insertion after the outcome: block.
  const classes = CLASS[slug];
  if (classes && !/^\s+outcomeClass:/m.test(t)) {
    seen.add(slug);
    const om = t.match(/^(  outcome:\n(?:    - .*\n)+)/m);
    if (!om) {
      problems.push(`${slug}: no outcome: block found, cannot place outcomeClass`);
    } else {
      const ins = `  outcomeClass: [${classes.join(', ')}]\n`;
      t = t.slice(0, om.index + om[0].length) + ins + t.slice(om.index + om[0].length);
      classInserts++;
      changed = true;
    }
  } else if (classes) {
    seen.add(slug);
  }

  if (changed && !check) writeFileSync(f, t);
}

// coverage report
const haveClass = files.map((f) => f.replace(/.*\//, '').replace(/\.md$/, ''));
const missing = haveClass.filter((s) => !CLASS[s] && /-20\d\d$/.test(s));
const unused = Object.keys(CLASS).filter((s) => !seen.has(s));

console.log(`${check ? '[check] ' : ''}outcomeClass inserted: ${classInserts}; metric folds: ${metricFixes}`);
if (missing.length) console.log('pages with NO assignment in CLASS map:', missing);
if (unused.length) console.log('CLASS entries that matched no page (typo?):', unused);
for (const p of problems) console.log('PROBLEM:', p);
