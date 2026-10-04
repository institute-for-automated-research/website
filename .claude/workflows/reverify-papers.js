export const meta = {
  name: 'reverify-papers',
  description: 'Re-check already-distilled IAR paper pages against their source PDFs and attest them, optionally completing thin pages first',
  whenToUse: 'Given a work-list of already-distilled {slug, journal, year, pdf} pages (scripts/build-reverify-items.mjs), run one paper-verifier per page. With args.complete=true, a paper-distiller first applies its Completeness rules to the existing page (adds missing result rows, mechanisms, equations), then the verifier checks the whole page. Used to re-verify the Sonnet-distilled corpus with gpt-6-luna (issue #49). Build/curate/review/commit stay with the caller. Run with node scripts/codex/workflow.mjs (Codex gpt-6-luna), not the Workflow tool.',
  phases: [
    { title: 'Complete', detail: 'only with args.complete: one paper-distiller per page adds what the Completeness rules require', model: 'gpt-6-luna' },
    { title: 'Verify', detail: 'one paper-verifier per page, re-checks against the PDF, fixes in place, appends a role: verified attestation', model: 'gpt-6-luna' },
  ],
};

// Codex-only. The Codex runner (scripts/codex/workflow.mjs) passes this
// sentinel; the Workflow tool does not, so a Claude/Sonnet launch stops here
// before any agent starts.
if (typeof IAR_CODEX_RUNNER === 'undefined' || IAR_CODEX_RUNNER !== true) {
  throw new Error('Codex-only workflow: run node scripts/codex/workflow.mjs <this script> <args.json>, not the Workflow tool.');
}

// args = { today: 'YYYY-MM-DD', complete?: true, items: [{ slug, journal, year, pdf }, ...] }
let A = args;
if (typeof A === 'string') {
  try { A = JSON.parse(A); } catch { A = {}; }
}
const TODAY = A?.today ?? '';
const items = Array.isArray(A?.items) ? A.items : [];
const COMPLETE = A?.complete === true;
log(`reverify-papers: args type=${typeof args}, parsed items=${items.length}, complete=${COMPLETE}`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(TODAY)) {
  log(`reverify-papers: today is not YYYY-MM-DD (${JSON.stringify(TODAY)}); refusing to write attestations`);
  return { ok: false, reason: 'bad today', today: TODAY };
}
if (!items.length) {
  log('reverify-papers: no items; nothing to do');
  return { ok: false, reason: 'no items', argsType: typeof args };
}

const COMPLETE_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    status: { type: 'string', enum: ['ok', 'failed'] },
    slug: { type: 'string' },
    rowsBefore: { type: 'number' },
    rowsAfter: { type: 'number' },
    added: { type: 'array' },
    proposedVocab: { type: 'array' },
    notes: { type: 'string' },
    reason: { type: 'string' },
  },
  required: ['status', 'slug', 'rowsBefore', 'rowsAfter', 'added'],
};

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

const completePrompt = (it) => `You are operating as the "paper-distiller" agent. FIRST read these two files
and follow them as your operating instructions:
  - .claude/agents/paper-distiller.md  (your procedure; its "Completeness (required)" section governs this task)
  - .claude/skills/wiki-page/SKILL.md   (the wiki page rules)
Then perform this task.

pdf: ${it.pdf}
path: ${dest(it)}
slug: ${it.slug}
today: ${TODAY}

The page at ${dest(it)} already exists, written by an older model, and is
likely thin. You are in Augment mode on THIS page. This task changes your
procedure as follows; where it conflicts with your agent definition, this
prompt wins:
  - Skip procedure step 3 (Crossref, licenceVerification[], and the duplicate
    guard: the DOI is in the corpus because this page carries it, so never
    return "skipped") and step 3b (OpenAlex). Do steps 1, 2, and 4.
  - Augment mode's PRESERVE of the Core results table and resultsCount is
    lifted for additions: APPEND a Core results row for every distinct
    main-text finding the page lacks (main effects, separate identification
    checks, stressed heterogeneity splits, mechanism tests, null/placebo
    evidence), each with an exact locator and magnitude from the PDF. New rows
    go at the END of the table and continue the numbering after the current
    last R<n>. Existing rows stay byte-identical (a verifier checks them next).
  - Then set resultsCount to the new row count, make sure findings[] has one
    entry for every quantitative row, existing and new (ref = its R<n>), and fix
    any row count stated in the description.
  - Stage any newly minted vocab terms in the page's paper.proposedVocab
    frontmatter as your definition says (append; keep existing entries), and
    list them in your return too.
  - Also add missing mechanisms and every missing numbered main-text equation
    and main estimating specification, per "Completeness (required)".
  - Keep everything else Augment mode preserves: extraction[] and
    licenceVerification[] entries, licence / access / redistribution / pdf
    frontmatter, the Attribution block, title and slug.
Append one extraction[] entry (role: extracted, today, your model id) naming
what you added. Edit only this one file.
Your final message is THIS JSON (it replaces the return format in your agent
definition), nothing after it: {"status": "ok" | "failed", "slug", "rowsBefore",
"rowsAfter", "added": [one short line per added row or section],
"proposedVocab": [...], "notes"}. On failure still return every field (status
"failed", the row counts as you found them, added: [] or what you did add)
plus "reason".`;

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

Before attesting, run \`node scripts/check-table-locators.mjs ${dest(it)} --pdf ${it.pdf}\`
and resolve every row it flags (step 3, Locator): it catches table pages off by
one or two, which earlier passes of this workflow often missed.

Then run \`node scripts/check-relatesto-locatable.mjs\` and fix any
MISS it reports for THIS page (restore a one-line body mention derived from the
edge's note; invent nothing). Rewriting prose can drop the sentence that named a
cited work, and an un-locatable cite fails the site build.

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

const verify = (it) =>
  agent(verifyPrompt(it), {
    agentType: 'general-purpose',
    label: `verify:${it.slug}`,
    phase: 'Verify',
    schema: VERIFY_SCHEMA,
  });

// With complete: the verifier always runs, even if completion failed, since a
// failed completion may still have edited the page.
const results = await parallel(items.map((it) => async () => {
  const completed = COMPLETE
    ? await agent(completePrompt(it), {
        agentType: 'general-purpose',
        label: `complete:${it.slug}`,
        phase: 'Complete',
        schema: COMPLETE_SCHEMA,
      }).catch(() => null)
    : undefined;
  const verified = await verify(it);
  return { slug: it.slug, journal: it.journal, year: it.year, completed, verified };
}));

const clean = results.filter(Boolean);
const checked = clean.filter((r) => r.verified?.status === 'checked');
// Identify pages by journal/year/slug: a slug alone can repeat across journals.
const key = (x) => `${x.journal}/${x.year}/${x.slug}`;
const checkedKeys = new Set(checked.map(key));
const failedSlugs = items.filter((it) => !checkedKeys.has(key(it))).map(key);
// A pass with downgraded rows still needs a human look.
const flagged = checked.filter((r) => r.verified.verdict === 'flagged' || (r.verified.unresolved?.length ?? 0) > 0);
const thin = checked.filter((r) => r.verified.thin);
const completeFailed = COMPLETE ? clean.filter((r) => r.completed?.status !== 'ok').map(key) : [];
log(`reverify-papers done: ${checked.length}/${items.length} checked, ${flagged.length} flagged, ${thin.length} thin, ${failedSlugs.length} failed` +
  (COMPLETE ? `, ${completeFailed.length} completion failed` : ''));

return {
  checked: checked.length,
  rowsFixed: checked.reduce((n, r) => n + (r.verified.fixed?.length ?? 0), 0),
  flagged: flagged.map((r) => ({ slug: r.slug, unresolved: r.verified.unresolved })),
  thin: thin.map((r) => ({ slug: r.slug, missingHeadlines: r.verified.missingHeadlines })),
  failed: failedSlugs,
  ...(COMPLETE && {
    rowsAdded: clean.reduce((n, r) => n + Math.max(0, (r.completed?.rowsAfter ?? 0) - (r.completed?.rowsBefore ?? 0)), 0),
    completeFailed,
    // Caller runs vocab-curator once over the batch before building when true.
    pendingCuration: clean.some((r) => (r.completed?.proposedVocab || []).length > 0),
  }),
  pages: checked.map((r) => ({
    slug: r.slug,
    path: dest(r),
    verdict: r.verified.verdict,
    rowsChecked: r.verified.rowsChecked,
    fixed: r.verified.fixed,
    ...(COMPLETE && { rowsBefore: r.completed?.rowsBefore, rowsAfter: r.completed?.rowsAfter, added: r.completed?.added }),
  })),
};
