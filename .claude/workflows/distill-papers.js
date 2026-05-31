export const meta = {
  name: 'distill-papers',
  description: 'Distil research-paper PDFs into IAR wiki pages, then adversarially verify each against its source PDF',
  whenToUse: 'Given a work-list of {slug, pdf, hint} papers, fan out paper-distiller agents (one file each) then paper-verifier agents to re-check locators/magnitudes against the PDF. Build/review/commit stay with the caller.',
  phases: [
    { title: 'Distill', detail: 'one paper-distiller per paper, writes papers/<journal>/<year>/<slug>.md', model: 'sonnet' },
    { title: 'Verify', detail: 'one paper-verifier per page, re-checks against the PDF', model: 'sonnet' },
  ],
};

// args = { today: 'YYYY-MM-DD',
//          items: [{ slug, journal, year, pdf, hint }, ...] }
// journal is the lowercase code (jf, jfe, ...); year is the journal ISSUE year.
// Pages are written to papers/<journal>/<year>/<slug>.md.
// Be robust: args may arrive as a parsed object or as a JSON string.
let A = args;
if (typeof A === 'string') {
  try { A = JSON.parse(A); } catch { A = {}; }
}
const TODAY = A?.today ?? '';
const items = Array.isArray(A?.items) ? A.items : [];
log(`distill-papers: args type=${typeof args}, parsed items=${items.length}`);
if (!items.length) {
  log('distill-papers: no items in args; nothing to do');
  return { ok: false, reason: 'no items', argsType: typeof args };
}

const DISTILL_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    status: { type: 'string', enum: ['ok', 'failed'] },
    slug: { type: 'string' },
    path: { type: 'string' },
    title: { type: 'string' },
    resultsCount: { type: 'number' },
    dataTags: { type: 'array', items: { type: 'string' } },
    newDatasetBacklog: { type: 'array', items: { type: 'string' } },
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
    rowsChecked: { type: 'number' },
    fixed: { type: 'array' },
    unresolved: { type: 'array' },
    verdict: { type: 'string', enum: ['pass', 'flagged'] },
  },
  required: ['status', 'slug', 'verdict'],
};

// Destination page path: papers are organised papers/<journal>/<year>/<slug>.md.
// The orchestrator sets journal + year (year = the journal ISSUE year, which is
// what prevents the online-first vs issue-year mismatch).
const dest = (it) =>
  `src/content/docs/papers/${it.journal}/${it.year}/${it.slug}.md`;

const distillPrompt = (it) => `You are operating as the "paper-distiller" agent. FIRST read these two files
and follow them exactly as your operating instructions:
  - .claude/agents/paper-distiller.md  (your full procedure + return format)
  - .claude/skills/wiki-page/SKILL.md   (the wiki page rules)
Then perform this task.

pdf: ${it.pdf}
path: ${dest(it)}
slug: ${it.slug}
year: ${it.year}   (the journal ISSUE year; use as paper.year and in the title, not the online-first year)
hint: ${it.hint ?? ''}
today: ${TODAY}

Read the conventions and the template first, then read the PDF in full, confirm
the DOI (printed on the PDF first page) and licence (Crossref), and write the
page at ${dest(it)} following the template exactly (create parent dirs if
needed). This batch is extract-only: do NOT set a pdf: mirror even if the
article is CC-licensed; record the licence accurately and note that CC permits
mirroring but it is not hosted in this batch. Return the JSON result.`;

const verifyPrompt = (it) => `You are operating as the "paper-verifier" agent. FIRST read
.claude/agents/paper-verifier.md and follow it exactly as your operating
instructions. Then perform this task.

pdf: ${it.pdf}
slug: ${it.slug}
path: ${dest(it)}
today: ${TODAY}

Read the page, then read the cited PDF pages and check every Core results row's
locator and magnitude, the frontmatter facts, resultsCount, and the no-em-dash /
no-colorful-adjective rules. Fix clear errors in place on this one file only.
Then append the role: verified attestation dated ${TODAY} as instructed.
Return the JSON verdict.`;

const results = await pipeline(
  items,
  (it) =>
    agent(distillPrompt(it), {
      agentType: 'general-purpose',
      model: 'sonnet',
      label: `distill:${it.slug}`,
      phase: 'Distill',
      schema: DISTILL_SCHEMA,
    }),
  (distilled, it) => {
    if (!distilled || distilled.status !== 'ok') {
      log(`distill failed for ${it.slug}: ${distilled?.reason ?? 'no result'}`);
      return { slug: it.slug, distilled, verified: null };
    }
    return agent(verifyPrompt(it), {
      agentType: 'general-purpose',
      model: 'sonnet',
      label: `verify:${it.slug}`,
      phase: 'Verify',
      schema: VERIFY_SCHEMA,
    })
      .then((verified) => ({ slug: it.slug, distilled, verified }))
      .catch(() => ({ slug: it.slug, distilled, verified: null }));
  }
);

const clean = results.filter(Boolean);
const ok = clean.filter((r) => r.distilled?.status === 'ok' && r.verified != null);
const verifyFailed = clean.filter((r) => r.distilled?.status === 'ok' && r.verified == null);
const flagged = clean.filter((r) => r.verified?.verdict === 'flagged');
const failed = clean.filter((r) => r.distilled?.status !== 'ok');
log(`distill-papers done: ${ok.length}/${items.length} pages written+verified, ${flagged.length} flagged, ${verifyFailed.length} verify-failed, ${failed.length} distill-failed`);

return {
  ok: ok.length,
  flagged: flagged.map((r) => ({ slug: r.slug, unresolved: r.verified?.unresolved })),
  verifyFailed: verifyFailed.map((r) => r.slug),
  failed: failed.map((r) => ({ slug: r.slug, reason: r.distilled?.reason })),
  pages: ok.map((r) => ({
    slug: r.slug,
    path: r.distilled.path,
    resultsCount: r.distilled.resultsCount,
    dataTags: r.distilled.dataTags,
    newDatasetBacklog: r.distilled.newDatasetBacklog,
    verdict: r.verified?.verdict,
  })),
};
