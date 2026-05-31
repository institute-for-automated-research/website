// Canonical journal codes -> display names. The journal of a distilled paper
// is its subdirectory under src/content/docs/papers/<code>/, so the code is
// canonical (no per-page free tag that could drift). This single map drives
// the sidebar group label (astro.config.mjs), the index grouping
// (PapersIndex.astro), and the Journal tag axis (TagIndex.astro). Add a new
// journal here when its first paper lands; the subdirectory itself is what
// creates the sidebar group, so a missing entry only falls back to the raw
// code, never breaks the build.
export const JOURNALS = {
  jf: 'Journal of Finance',
  jfe: 'Journal of Financial Economics',
  rfs: 'Review of Financial Studies',
  jpe: 'Journal of Political Economy',
  qje: 'Quarterly Journal of Economics',
  aer: 'American Economic Review',
  ecta: 'Econometrica',
  restud: 'Review of Economic Studies',
  jfqa: 'Journal of Financial and Quantitative Analysis',
  ms: 'Management Science',
  jbf: 'Journal of Banking and Finance',
  jcf: 'Journal of Corporate Finance',
  jef: 'Journal of Empirical Finance',
  jfi: 'Journal of Financial Intermediation',
  jfm: 'Journal of Financial Markets',
  raps: 'Review of Asset Pricing Studies',
  rcfs: 'Review of Corporate Finance Studies',
  frl: 'Finance Research Letters',
  fm: 'Financial Management',
};

// Display name for a journal code, falling back to the upper-cased code.
export const journalName = (code) => JOURNALS[code] ?? (code ? code.toUpperCase() : '');
