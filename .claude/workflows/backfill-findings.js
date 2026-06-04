export const meta = {
  name: 'backfill-findings',
  description: 'Backfill the "what works" effectiveness axis (findings[] per Core-results row + paper-level resultType) onto already-distilled IAR paper pages, then verify each against the PDF',
  whenToUse: 'Given a work-list of already-distilled {slug, journal, year, pdf} papers, add the effectiveness axis (findings[] built from each page\'s Core-results table, one per quantitative row, plus the paper-level resultType verdict), confirm values against the PDF, preserving all existing content, then verify each. Build/review/commit stay with the caller.',
  phases: [
    { title: 'Findings', detail: 'one agent per page builds findings[] from the Core-results table + assigns resultType, preserves the rest', model: 'sonnet' },
    { title: 'Verify', detail: 'one agent per page re-checks findings values/direction and resultType against the PDF', model: 'sonnet' },
  ],
};

// args = { today: 'YYYY-MM-DD', items: [{ slug, journal, year, pdf, hint }, ...] }
let A = args;
if (typeof A === 'string') {
  try { A = JSON.parse(A); } catch { A = {}; }
}
const TODAY = A?.today ?? '';
const items = Array.isArray(A?.items) ? A.items : [];
log(`backfill-findings: args type=${typeof args}, parsed items=${items.length}`);
if (!items.length) {
  log('backfill-findings: no items; nothing to do');
  return { ok: false, reason: 'no items', argsType: typeof args };
}

const FINDINGS_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    status: { type: 'string', enum: ['ok', 'failed'] },
    slug: { type: 'string' },
    findings: { type: 'array' },              // the rows written
    resultType: { type: 'string' },           // or "omitted (theory)"
    findingsCount: { type: 'number' },
    rowsCount: { type: 'number' },             // Core-results rows on the page
    notes: { type: 'string' },
    reason: { type: 'string' },
  },
  required: ['status', 'slug'],
};

const VERIFY_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    status: { type: 'string', enum: ['checked'] },
    slug: { type: 'string' },
    fixed: { type: 'array' },
    unresolved: { type: 'array' },
    verdict: { type: 'string', enum: ['pass', 'flagged'] },
  },
  required: ['status', 'slug', 'verdict'],
};

const dest = (it) => `src/content/docs/papers/${it.journal}/${it.year}/${it.slug}.md`;

const findingsPrompt = (it) => `You are adding the "what works" effectiveness axis to an ALREADY-DISTILLED IAR
wiki page. This is a focused augment, not a rewrite. FIRST read, in order:
  - .claude/skills/wiki-page/paper-template.md  (the Optional-field rules for
    findings[] and resultType: the EXACT field set, the kebab metric slugs, the
    direction enum, and the omit rules)
  - src/content.config.ts  (the paper: schema you must satisfy: the findings[]
    object and the resultType enum)
Then do the task.

page: ${dest(it)}   (READ it; it already exists, with a Core results table)
pdf:  ${it.pdf}     (READ it; you confirm the magnitudes against the actual paper)
slug: ${it.slug}
today: ${TODAY}
hint: ${it.hint ?? ''}

Task: add ONLY these two frontmatter axes to the paper: block:
  - findings[]   one entry per QUANTITATIVE Core-results row, in row order, built
    FROM the page's own Core results table. Each entry:
      ref:        the row id as printed in the table's # column (e.g. R1). If the
                  table uses bare 1,2,3 with no R prefix, use that exact token.
      outcome:    the dependent variable, reusing the paper-level outcome[] phrasing.
      metric:     a kebab-case slug for the statistic that row reports
                  (sharpe-ratio, alpha, t-stat, r-squared, oos-r-squared,
                  coefficient, elasticity, hazard-ratio, return-spread, auc,
                  rmse, correlation, ...); reuse a slug you already used on an
                  earlier row before coining a near-synonym.
      value:      the magnitude as reported (free string). CONFIRM it against the
                  PDF at that row's locator; if the page's number is wrong, do NOT
                  silently copy it, fix the finding to the PDF value and note it.
      direction:  positive | negative | none | mixed. none = no significant effect
                  (a null row). NEVER write null (YAML reads bare null as the null
                  scalar and the build fails).
      vsBenchmark: the comparison to a baseline the row makes (free string), or
                  omit the key when the row has no benchmark contrast.
    Skip purely qualitative rows (no quantitative magnitude). OMIT findings
    entirely for a pure-theory paper with no empirical result.
  - resultType   the paper-level verdict, one of: confirms | overturns |
    null-result | mixed | new-finding. Read the abstract + conclusion: confirms a
    prior, overturns a prior, reports a null, mixed across specs, or establishes a
    new fact/method with no prior to confirm/overturn (new-finding, the usual case
    for method and first-measurement papers). Omit for a pure-theory paper.

Determine these HONESTLY from the page's table and the PDF. When a row is
genuinely ambiguous for metric or direction, prefer the most defensible single
value; when the whole axis does not apply (pure theory), omit it.

PRESERVE EVERYTHING ELSE BYTE-FOR-BYTE: do not touch the title, description,
tags, the Core results TABLE itself (you read it, you do not rewrite it),
resultsCount, the body sections, the licence/access/rights frontmatter, or any
existing methods / scope / contributionType / mechanisms / relatesTo /
openQuestions / extraction[] / licenceVerification[] entry. You only ADD the two
new keys. (If, while confirming a value against the PDF, you find a Core-results
number is wrong, fix it in BOTH the table row and the finding, and say so in your
return notes; otherwise leave the table untouched.)

Then APPEND one extraction[] entry (do not overwrite existing ones), same
indentation as the others. Write the note as a YAML BLOCK scalar (note: >-), NEVER
a plain one-line scalar (a colon-space inside a plain note breaks the build):
    - by: paper-distiller (claude-sonnet-4-6)
      date: ${TODAY}
      role: extracted
      note: >-
        Added the effectiveness axis (findings[] per Core-results row,
        resultType) built from the results table and confirmed against the PDF;
        existing results and sections unchanged.

Hard rules: NO em-dashes, NO colorful adjectives. No literal null (omit the key
or use none / null-result). Edit ONLY ${dest(it)}. Never touch another file, the
schema, or the registry. Return the JSON result described (status, slug, findings,
resultType, findingsCount, rowsCount, notes). On failure return
{"status":"failed","slug":"${it.slug}","reason":"..."}.`;

const verifyPrompt = (it) => `You adversarially re-check ONLY the newly-added "what works" axis (findings[] +
resultType) on an IAR paper page against its source PDF. FIRST read
.claude/agents/paper-verifier.md (your operating discipline; focus on its step
3d) and the findings[]/resultType Optional-field rules in
.claude/skills/wiki-page/paper-template.md. Then do the task.

page: ${dest(it)}
pdf:  ${it.pdf}
slug: ${it.slug}
today: ${TODAY}

Check against the PDF and fix clear mismatches IN PLACE on this one file only:
  - each findings[] entry mirrors a quantitative Core-results row: ref points at
    the right row, value matches that row's reported magnitude IN THE PDF (a real
    magnitude check), metric names the statistic actually reported, direction
    (positive|negative|none|mixed; none = no significant effect) matches the
    sign/significance, vsBenchmark describes a comparison the paper makes.
  - a purely qualitative row may have no finding (fine); a quantitative row that
    is missing one is a gap worth flagging.
  - resultType matches the paper's headline (confirms | overturns | null-result |
    mixed | new-finding).
Confirm the findings pass did NOT alter the Core results table values (unless it
corrected a genuine error and said so), resultsCount, body sections, or other
frontmatter (if it did, that is a flag). No em-dashes. No literal null (none /
null-result, never bare null). When the PDF is ambiguous, prefer the defensible
value over a guess.

Append one extraction[] entry (do not overwrite), same indentation. Write the
note as a YAML BLOCK scalar (note: >-), NEVER a plain one-line scalar:
    - by: paper-verifier (claude-sonnet-4-6)
      date: ${TODAY}
      role: verified
      note: >-
        Effectiveness axis (findings[] values/direction, resultType) re-checked
        against the source PDF; <one line: verdict and any fix; avoid colon-space>.

Return the JSON verdict (status: checked, slug, fixed, unresolved, verdict).`;

const results = await pipeline(
  items,
  (it) =>
    agent(findingsPrompt(it), {
      agentType: 'general-purpose',
      model: 'sonnet',
      label: `findings:${it.slug}`,
      phase: 'Findings',
      schema: FINDINGS_SCHEMA,
    }),
  (built, it) => {
    if (!built || built.status !== 'ok') {
      log(`findings failed for ${it.slug}: ${built?.reason ?? 'no result'}`);
      return { slug: it.slug, built, verified: null };
    }
    return agent(verifyPrompt(it), {
      agentType: 'general-purpose',
      model: 'sonnet',
      label: `verify:${it.slug}`,
      phase: 'Verify',
      schema: VERIFY_SCHEMA,
    })
      .then((verified) => ({ slug: it.slug, built, verified }))
      .catch(() => ({ slug: it.slug, built, verified: null }));
  }
);

const clean = results.filter(Boolean);
const ok = clean.filter((r) => r.built?.status === 'ok' && r.verified?.verdict === 'pass');
const flagged = clean.filter((r) => r.built?.status === 'ok' && r.verified?.verdict === 'flagged');
const verifyFailed = clean.filter((r) => r.built?.status === 'ok' && r.verified == null);
const failed = clean.filter((r) => r.built?.status !== 'ok');
log(`backfill-findings done: ${ok.length}/${items.length} built+verified, ${flagged.length} flagged, ${verifyFailed.length} verify-failed, ${failed.length} build-failed`);

return {
  ok: ok.length,
  flagged: flagged.map((r) => ({ slug: r.slug, unresolved: r.verified?.unresolved })),
  verifyFailed: verifyFailed.map((r) => r.slug),
  failed: failed.map((r) => ({ slug: r.slug, reason: r.built?.reason })),
  pages: ok.map((r) => ({
    slug: r.slug,
    resultType: r.built.resultType,
    findingsCount: r.built.findingsCount,
    rowsCount: r.built.rowsCount,
    verdict: r.verified?.verdict,
  })),
};
