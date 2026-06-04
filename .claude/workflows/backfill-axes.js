export const meta = {
  name: 'backfill-axes',
  description: 'Backfill the newer queryable classification axes onto already-distilled IAR paper pages, then verify them against the PDF',
  whenToUse: 'Given a work-list of already-distilled {slug, journal, year, pdf} papers, add the classification axes added after they were written (methods.identification, contributionType, mechanisms, introducesData, scope.dataType/granularity/n) from a fresh PDF read, preserving all existing content, then verify each. Build/curate/review/commit stay with the caller.',
  phases: [
    { title: 'Classify', detail: 'one agent per page adds only the new axes, preserves the rest', model: 'sonnet' },
    { title: 'Verify', detail: 'one agent per page re-checks the new axes against the PDF', model: 'sonnet' },
  ],
};

// args = { today: 'YYYY-MM-DD', items: [{ slug, journal, year, pdf, hint }, ...] }
let A = args;
if (typeof A === 'string') {
  try { A = JSON.parse(A); } catch { A = {}; }
}
const TODAY = A?.today ?? '';
const items = Array.isArray(A?.items) ? A.items : [];
log(`backfill-axes: args type=${typeof args}, parsed items=${items.length}`);
if (!items.length) {
  log('backfill-axes: no items; nothing to do');
  return { ok: false, reason: 'no items', argsType: typeof args };
}

const CLASSIFY_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    status: { type: 'string', enum: ['ok', 'failed'] },
    slug: { type: 'string' },
    added: { type: 'array', items: { type: 'string' } },     // axes added
    identification: { type: 'string' },                        // or "omitted (theory)"
    contributionType: { type: 'array', items: { type: 'string' } },
    mechanisms: { type: 'array', items: { type: 'string' } },
    introducesData: { type: 'boolean' },
    proposedVocab: { type: 'array' },                          // axis: mechanism stages here
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

const classifyPrompt = (it) => `You are adding the newer queryable classification axes to an ALREADY-DISTILLED
IAR wiki page. This is a focused augment, not a rewrite. FIRST read, in order:
  - .claude/skills/wiki-page/paper-template.md  (the Optional-field rules: the
    EXACT semantics of methods.identification, contributionType, mechanisms,
    introducesData, scope.dataType/granularity/n, including the omit rules)
  - .claude/skills/wiki-page/vocab-registry.yml  (the mechanisms: section;
    reuse an existing term or alias before minting)
  - src/content.config.ts  (the paper: schema you must satisfy; the new enums)
Then do the task.

page: ${dest(it)}   (READ it; it already exists)
pdf:  ${it.pdf}     (READ it; you must ground the classification in the actual paper)
slug: ${it.slug}
today: ${TODAY}
hint: ${it.hint ?? ''}

Task: add ONLY these frontmatter axes to the paper: block, where they apply:
  - methods.identification  (primary design enum; OMIT for a theory paper; use
    'descriptive' for an acausal empirical paper, never the other way round)
  - contributionType        (array enum; near-always present)
  - mechanisms              (array; channels the paper invokes; omit if none;
                             reuse registry terms, stage genuinely new ones in
                             proposedVocab with axis: mechanism)
  - introducesData          (true only if it introduces a NEW source; else OMIT,
                             never write false)
  - scope.dataType, scope.granularity, scope.n  (omit all data scope for theory)

Read enough of the PDF to assign these HONESTLY (the abstract, the data section,
the empirical design, the conclusion). When the PDF is genuinely ambiguous for an
axis, OMIT that axis rather than guess. Determine identification from the actual
research design, not the estimator name.

PRESERVE EVERYTHING ELSE BYTE-FOR-BYTE: do not touch the title, description,
tags, Core results table, resultsCount, the body sections, the licence/access/
rights frontmatter, existing methods.role/family/contributes/buildsFrom, scope.
region/assetClass/period/frequency, relatesTo, openQuestions, or any existing
extraction[] / licenceVerification[] entry. Do NOT renumber or reword anything.
You only ADD the new keys (and, if you mint a mechanism, a proposedVocab entry).

Then APPEND one extraction[] entry (do not overwrite existing ones), same
indentation as the others. Write the note as a YAML BLOCK scalar (note: >-) like
the existing entries, NEVER a plain one-line scalar: a plain note that happens to
contain a colon-space (e.g. "channel: x") breaks the YAML build. Use this exact
shape:
    - by: paper-distiller (claude-sonnet-4-6)
      date: ${TODAY}
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.

Hard rules: NO em-dashes, NO colorful adjectives. No literal null (omit the key).
Edit ONLY ${dest(it)}. Never touch another file, the schema, or the registry.
Return the JSON result described to you (status, slug, added, the values you set,
proposedVocab, notes). On failure return {"status":"failed","slug":"${it.slug}","reason":"..."}.`;

const verifyPrompt = (it) => `You adversarially re-check ONLY the newly-added classification axes on an IAR
paper page against its source PDF. FIRST read .claude/agents/paper-verifier.md
(your operating discipline; focus on its step 3c) and the Optional-field rules in
.claude/skills/wiki-page/paper-template.md. Then do the task.

page: ${dest(it)}
pdf:  ${it.pdf}
slug: ${it.slug}
today: ${TODAY}

Check against the PDF and fix clear mismatches IN PLACE on this one file only:
  - methods.identification: the PRIMARY design, design-named not estimator-named;
    OMITTED for a theory paper but 'descriptive' for an acausal empirical paper.
  - contributionType: does the paper actually do each kind listed.
  - mechanisms: the channels it genuinely invokes (registry slugs).
  - introducesData: present and true ONLY if it introduces a new source.
  - scope.dataType / scope.granularity / scope.n: faithful to the data used.
Confirm the classify pass did NOT alter Core results, resultsCount, body
sections, or other frontmatter (if it did, that is a flag). No em-dashes. No
literal null. When the PDF is ambiguous, prefer omitting over guessing.

Append one extraction[] entry (do not overwrite), same indentation. Write the
note as a YAML BLOCK scalar (note: >-), NEVER a plain one-line scalar (a colon-
space inside a plain note breaks the build). Use this exact shape:
    - by: paper-verifier (claude-sonnet-4-6)
      date: ${TODAY}
      role: verified
      note: >-
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF;
        <one line: verdict and any fix; avoid colon-space inside this note>.

Return the JSON verdict (status: checked, slug, fixed, unresolved, verdict).`;

const results = await pipeline(
  items,
  (it) =>
    agent(classifyPrompt(it), {
      agentType: 'general-purpose',
      model: 'sonnet',
      label: `classify:${it.slug}`,
      phase: 'Classify',
      schema: CLASSIFY_SCHEMA,
    }),
  (classified, it) => {
    if (!classified || classified.status !== 'ok') {
      log(`classify failed for ${it.slug}: ${classified?.reason ?? 'no result'}`);
      return { slug: it.slug, classified, verified: null };
    }
    return agent(verifyPrompt(it), {
      agentType: 'general-purpose',
      model: 'sonnet',
      label: `verify:${it.slug}`,
      phase: 'Verify',
      schema: VERIFY_SCHEMA,
    })
      .then((verified) => ({ slug: it.slug, classified, verified }))
      .catch(() => ({ slug: it.slug, classified, verified: null }));
  }
);

const clean = results.filter(Boolean);
const ok = clean.filter((r) => r.classified?.status === 'ok' && r.verified != null);
const flagged = clean.filter((r) => r.verified?.verdict === 'flagged');
const verifyFailed = clean.filter((r) => r.classified?.status === 'ok' && r.verified == null);
const failed = clean.filter((r) => r.classified?.status !== 'ok');
log(`backfill-axes done: ${ok.length}/${items.length} classified+verified, ${flagged.length} flagged, ${verifyFailed.length} verify-failed, ${failed.length} classify-failed`);

return {
  ok: ok.length,
  flagged: flagged.map((r) => ({ slug: r.slug, unresolved: r.verified?.unresolved })),
  verifyFailed: verifyFailed.map((r) => r.slug),
  failed: failed.map((r) => ({ slug: r.slug, reason: r.classified?.reason })),
  pendingCuration: ok.some((r) => (r.classified.proposedVocab || []).length > 0),
  pages: ok.map((r) => ({
    slug: r.slug,
    identification: r.classified.identification,
    contributionType: r.classified.contributionType,
    mechanisms: r.classified.mechanisms,
    introducesData: r.classified.introducesData,
    proposedVocab: r.classified.proposedVocab,
    verdict: r.verified?.verdict,
  })),
};
