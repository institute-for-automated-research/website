export const meta = {
  name: 'reverify-papers',
  description: 'Verify-only pass: adversarially re-check already-distilled IAR paper pages against their source PDFs and attest them',
  whenToUse: 'Given a work-list of already-distilled {slug, journal, year, pdf} pages (scripts/build-reverify-items.mjs), run one paper-verifier per page, no distillation. Used to re-verify the Sonnet-distilled corpus with gpt-6-luna (issue #49). Build/curate/review/commit stay with the caller. Run with node scripts/codex/workflow.mjs (Codex gpt-6-luna), not the Workflow tool.',
  phases: [
    { title: 'Verify', detail: 'one paper-verifier per page, re-checks against the PDF, fixes in place, appends a role: verified attestation', model: 'gpt-6-luna' },
  ],
};

// Codex-only. The Codex runner (scripts/codex/workflow.mjs) passes this
// sentinel; the Workflow tool does not, so a Claude/Sonnet launch stops here
// before any agent starts.
if (typeof IAR_CODEX_RUNNER === 'undefined' || IAR_CODEX_RUNNER !== true) {
  throw new Error('Codex-only workflow: run node scripts/codex/workflow.mjs <this script> <args.json>, not the Workflow tool.');
}

// args = { today: 'YYYY-MM-DD', items: [{ slug, journal, year, pdf }, ...] }
let A = args;
if (typeof A === 'string') {
  try { A = JSON.parse(A); } catch { A = {}; }
}
const TODAY = A?.today ?? '';
const items = Array.isArray(A?.items) ? A.items : [];
log(`reverify-papers: args type=${typeof args}, parsed items=${items.length}`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(TODAY)) {
  log(`reverify-papers: today is not YYYY-MM-DD (${JSON.stringify(TODAY)}); refusing to write attestations`);
  return { ok: false, reason: 'bad today', today: TODAY };
}
if (!items.length) {
  log('reverify-papers: no items; nothing to do');
  return { ok: false, reason: 'no items', argsType: typeof args };
}

const VERIFY_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    status: { type: 'string', enum: ['checked'] },
    slug: { type: 'string' },
    rowsChecked: { type: 'number' },
    fixed: { type: 'array' },
    unresolved: { type: 'array' },
    verdict: { type: 'string', enum: ['pass', 'flagged'] },
    thin: { type: 'boolean' },
    missingHeadlines: { type: 'array' },
  },
  // Every field the aggregate reads is required, so an incomplete answer cannot
  // pass as "checked, not thin".
  required: ['status', 'slug', 'verdict', 'rowsChecked', 'fixed', 'unresolved', 'thin', 'missingHeadlines'],
};

const dest = (it) => `src/content/docs/papers/${it.journal}/${it.year}/${it.slug}.md`;

const verifyPrompt = (it) => `You are operating as the "paper-verifier" agent. FIRST read
.claude/agents/paper-verifier.md and follow it exactly as your operating
instructions. Then perform this task.

pdf: ${it.pdf}
slug: ${it.slug}
path: ${dest(it)}
today: ${TODAY}

This page was distilled AND previously verified by an older model (see its
extraction: list). Treat both earlier passes as unreliable: a blind audit of
the older pages found about 15% of Core results rows wrong. Do not let the existing
role: verified entry lower your guard.

Run your full procedure (steps 1-6, every Core results row, every equation and
specification, the classification axes, findings[], the frontmatter). Pay
particular attention to the error types the audit found:
  - a contrast or comparison stated backwards (A vs B swapped, pre vs post);
  - the wrong horizon, window, sample, or subsample for a reported number;
  - significance stars or standard errors that do not match the table;
  - a significance or causal claim stronger than the PDF supports.
ALSO check the prose outside the table, which your procedure does not cover:
the description, the TL;DR / summary, the dominant channel or mechanism the page
names, every openQuestions item, and every relatesTo note. Each must be
faithful to the PDF in direction and emphasis (e.g. which channel dominates,
which way a pattern runs across maturities or groups). Fix clear errors in
place on this one file only.

Then append the role: verified attestation dated ${TODAY} as instructed. Keep the
older entries; the list stacks.

In the returned JSON also report:
  - "thin": true if the page misses results the paper itself presents as
    headline (abstract / introduction / conclusion), or has fewer than 6 Core
    results rows while the paper reports more; else false.
  - "missingHeadlines": one short line per headline result the page omits
    (with its PDF locator). Do NOT add the rows yourself; that is a later
    re-distillation step.
Return the JSON verdict.`;

const results = await parallel(items.map((it) => () =>
  agent(verifyPrompt(it), {
    agentType: 'general-purpose',
    label: `verify:${it.slug}`,
    phase: 'Verify',
    schema: VERIFY_SCHEMA,
  }).then((verified) => ({ slug: it.slug, journal: it.journal, year: it.year, verified }))
));

const clean = results.filter(Boolean);
const checked = clean.filter((r) => r.verified?.status === 'checked');
// Identify pages by journal/year/slug: a slug alone can repeat across journals.
const key = (x) => `${x.journal}/${x.year}/${x.slug}`;
const checkedKeys = new Set(checked.map(key));
const failedSlugs = items.filter((it) => !checkedKeys.has(key(it))).map(key);
// A pass with downgraded rows still needs a human look.
const flagged = checked.filter((r) => r.verified.verdict === 'flagged' || (r.verified.unresolved?.length ?? 0) > 0);
const thin = checked.filter((r) => r.verified.thin);
log(`reverify-papers done: ${checked.length}/${items.length} checked, ${flagged.length} flagged, ${thin.length} thin, ${failedSlugs.length} failed`);

return {
  checked: checked.length,
  rowsFixed: checked.reduce((n, r) => n + (r.verified.fixed?.length ?? 0), 0),
  flagged: flagged.map((r) => ({ slug: r.slug, unresolved: r.verified.unresolved })),
  thin: thin.map((r) => ({ slug: r.slug, missingHeadlines: r.verified.missingHeadlines })),
  failed: failedSlugs,
  pages: checked.map((r) => ({
    slug: r.slug,
    path: dest(r),
    verdict: r.verified.verdict,
    rowsChecked: r.verified.rowsChecked,
    fixed: r.verified.fixed,
  })),
};
