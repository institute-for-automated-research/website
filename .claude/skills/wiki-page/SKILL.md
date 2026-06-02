---
name: wiki-page
description: >-
  Author, edit, or verify a page in the IAR wiki (src/content/docs/** in this
  repo): dataset and licensed-source recipe pages, distilled third-party paper
  summaries, and the tag system. Use when adding a new dataset or paper page,
  updating an access recipe, setting or correcting the Verified badge/grade,
  adjusting tags, or running the build and live-check before publishing.
  Encodes the Verified discipline, the tag axes (including data:<slug> and the
  verification rungs), the no-em-dash / no-colorful-adjectives rule, and the
  mirror-to-ZeroPaper-pipeline rule.
---

# Editing the IAR wiki

The wiki is Astro Starlight under `src/content/docs/**`, built into `dist/wiki/`
by a single `npm run build`. Pages are Markdown with typed frontmatter
(`src/content.config.ts`). The institute's whole value is that data pages assert
provenance that was **actually exercised**, not transcribed. Do not weaken that.

## Where things live

| What | Path |
|---|---|
| Dataset / recipe pages | `src/content/docs/datasets/<slug>.md` |
| Licensed-source pages | `src/content/docs/licensed/<slug>.md` |
| Distilled paper summaries | `src/content/docs/papers/<journal>/<year>/<slug>.md` |
| Tag browse page + axes | `src/content/docs/tags.mdx` + `src/components/TagIndex.astro` |
| Verified badge, distilled byline, tags, raw-`.md` link | `src/components/PageTitle.astro` |
| Dataset registry + access drift gate | `.claude/skills/wiki-page/dataset-registry.yml` + `scripts/check-dataset-access.mjs` (prebuild; fails on `dataAccess` under-claim or a `data:` slug missing from the registry) |
| Method vocab registry | `.claude/skills/wiki-page/vocab-registry.yml` (reconciled by `vocab-curator`) |
| Frontmatter schema | `src/content.config.ts` |
| Section indexes | `<section>/index.md` (keep their tables in sync) |

## Golden rules (non-negotiable)

1. **No em-dashes and no colorful adjectives in any website-facing text**
   (titles, descriptions, body, rendered strings). Use `:` `,` `(` instead.
2. **The Verified discipline**: only stamp a `verified:` block after you have
   actually run the page's keystone access claim against the live source in this
   session. An unrun stamp is a lie. Be precise in `with:` about what ran.
3. **After any big change, launch a Sonnet review agent** over the diff. Fix
   findings, then run another review round. Iterate until clean.
4. **Build and live-check before considering it done**: `npm run build`, then
   confirm routes are 200 with zero redirect hops and badges/twins render.
5. **Mirror dataset knowledge** to the ZeroPaper pipeline skill (see bottom).

## Adding or editing a dataset / recipe page

1. Create `src/content/docs/<section>/<slug>.md`. Frontmatter: `title`,
   `description`, optional `sidebar` (`label`, `order`), `tags` (inline flow
   array, see below), and a `verified:` block.
2. Body order (see `datasets/fred.md` as the template):
   intro + facts list -> **Access** -> **Gotchas (the ones that bite
   pipelines)** immediately after Access -> reference tables -> standard
   operations -> citation. "Gotchas" is the differentiator; keep it elevated.
3. Add the page to its section `index.md` table.
4. `npm run build`, then live-check the route is 200 / 0-hop and the badge
   renders the grade you intended.

### The Verified block, graded

```yaml
verified:
  date: 2026-05-16
  level: fetched          # fetched | reachable  (default: reachable)
  with: live no-key CSV fetch (GDP, USREC, SP500)
  access: free            # free | licensed      (default: free)
  url: https://...        # optional: link to the test/script
```

Two fields grade the claim. They drive both the on-page badge
(`PageTitle.astro`) and the Verification tag axis:

| Badge (color) | Tag rung | Set when |
|---|---|---|
| **Verified** (green) | `verified-fetched` | `access: free` and `level: fetched`: you pulled real data live here. |
| **Source reachable** (teal) | `verified-reachable` | `access: free`, `level` absent/`reachable`: endpoint confirmed live but the end-to-end pull was not proven here. This is the conservative default. |
| **Access confirmed (licensed)** (amber) | `access-confirmed-licensed` | `access: licensed`: path exercised but needs paid credentials (e.g. WRDS through a licensed session). |
| (no badge) | `unverified` | No `verified:` block. Use when the source cannot be exercised here at all; say so on the page. |

`level: fetched` is an explicit opt-in. Never stamp `fetched` on a mere
reachability check. The Verification axis is derived at build time from these
blocks (datasets/licensed pages only), so it can never claim more than the
block.

## Tags

`tags` is an inline-flow YAML array, e.g.
`tags: [macro, time-series, free, no-api-key, federal-reserve, data:fred]`.
`TagIndex.astro` groups them into axes; unknown tags trigger a build-time
`[TagIndex] tags not in any axis` warning, so reuse the controlled vocabulary.

| Axis | Examples |
|---|---|
| Kind | `paper-summary` |
| Topic | `asset-pricing`, `factors`, `anomalies`, `macro`, `equities`, `fundamentals`, `filings`, `pensions`, ... |
| Method | `panel-regression`, `fama-macbeth`, `portfolio-sort` |
| Access | `free`, `no-api-key`, `licensed`, `open-access`, `cc-by` |
| Verification | derived (do not hand-write): `verified-fetched`, `verified-reachable`, `access-confirmed-licensed`, `unverified` |
| Data shape | `panel-data`, `time-series`, `cross-section`, `event-data` |
| Source | `federal-reserve`, `sec`, `dol`, `academic`, `wrds` |
| Dataset | `data:<slug>` where `<slug>` is a dataset page filename |
| Status | `peer-reviewed`, `unreplicated` |

### The `data:<slug>` convention (and the backlog it generates)

- A dataset page **self-tags** with its own slug: `datasets/fred.md` carries
  `data:fred`. The `<slug>` must equal the page filename.
- A paper page tags **every dataset it uses**, including ones with no wiki page
  yet. A `data:<slug>` with no matching page is surfaced as a build warning
  (`datasets cited but undocumented: ...`) and rendered on the tags page with a
  "needs page" marker. That list is the to-write backlog: when a paper cites a
  dataset we have not documented, close the loop by adding `<slug>.md`.
- Adding a `data:` axis or verification rung needs no `TagIndex.astro` edit; the
  Dataset and Verification axes are derived from usage at build time.

## Distilled paper pages

The canonical page shape lives in **`paper-template.md`** (frontmatter blocks,
the three formal sections, the per-paper-type guide, the optional-field rules).
Follow it; do not re-list the fields here, so they cannot drift in two places.

In brief, the `paper:` block carries bibliographic identity + provenance
(`authors`, `authorList`, `year`, `venue`, `doi`, `license`, `access`
(open/paywalled/preprint), `machineAccess`, `redistribution`, optional `pdf`
hosted under `/library`, `licenceVerification[]`, and the stacking
`extraction[]` ladder with `role`: `extracted` | `verified` | `reproduced`),
plus the queryable axes that make the corpus answerable for gaps and evolution:
`methods{role,contributes,family,buildsFrom}`, `scope`, `topics`, `dataAccess`,
`outcome`, `relatesTo`, `openQuestions`, `replicationCode`, `jel`,
`proposedVocab`. The body is findings-first: TL;DR, Core results, then the three
formal sections (Theory / model, Method, Empirical specifications) with real
LaTeX equations in `$$ ... $$` (KaTeX; single `$` is disabled), Datasets used,
When to read, Attribution.

The distiller pulls author ORCIDs + `topics` (the subject classification we use
since J. Finance prints no JEL) from the **`openalex`** skill, and reuses
`methods.family` / `methods.buildsFrom` terms from `vocab-registry.yml` before
minting (new terms stage in `proposedVocab`, reconciled by `vocab-curator`).
Papers have their own provenance ladder via `extraction[].role`; they are
excluded from the dataset Verification axis. Rights/attribution go at the
bottom; CC BY attribution blocks stay verbatim.

## Ship checklist

- `npm run build` exits 0. The only acceptable TagIndex warning is the
  intended `datasets cited but undocumented: ...` backlog line. No
  `tags not in any axis` orphan warning.
- Routes 200 with zero redirect hops (`vercel.json` must not set
  `trailingSlash`). The only intentional redirect is `/zeropaper.pdf` 301.
- Badge renders the intended grade; check the page in `dist/wiki/...`.
- Scrapability intact: every wiki page keeps its raw `.md` twin, and appears in
  `/llms.txt` + `/llms-full.txt` (written by `scripts/postbuild.mjs`).
- No auth/key on any content. No em-dashes, no colorful adjectives.

## Mirror to the ZeroPaper pipeline

Dataset pages here and the pipeline's empirical skill bodies
(`../../NewPapers/zeropaper` -> `templates/skill_bodies/empirical/<dataset>.md`:
fred, edgar, ken-french, flex-mining, chen-zimmerman, wrds, sec-funds,
mutual-funds, ...) are two mirrors of the same dataset knowledge. A substantive
change to access method or gotchas on either side should be propagated to the
other, or they drift. Do not hand-edit a paper PDF or its landing page here;
that belongs in the pipeline, then regenerate.

File the matching pipeline change as an issue in the ZeroPaper repo
(`gh issue create --repo alejandroll10/zeropaper`), not here; that is where the
work lands.

## Batch-distilling papers (orchestrator recipe)

For ONE page, follow the per-page rules above. For a BATCH (many PDFs at once),
the parallel-safe pipeline is encoded as durable artifacts; you orchestrate
around it. This is intentionally a recipe here, not a separate skill, so the
per-page conventions and the batch recipe stay in one place.

Artifacts (single source of truth, reuse every batch):
- `.claude/skills/wiki-page/paper-template.md` : THE canonical page shape
  (frontmatter blocks + TL;DR + Core results + the three formal sections
  Theory / model, Method, Empirical specifications + Datasets + Attribution).
  Both agents read it every run.
- `.claude/skills/wiki-page/vocab-registry.yml` : controlled-but-growing vocab
  for `methods.family` / `methods.buildsFrom`. Distillers reuse-before-mint and
  stage genuinely new terms in `paper.proposedVocab` (never edit the registry).
- `.claude/agents/paper-distiller.md` : reads one PDF, writes (or in Augment
  mode, extends) one `papers/<journal>/<year>/<slug>.md` (Crossref licence
  check, data:<slug> tags, the formal sections with equations, extracted-only).
- `.claude/agents/paper-verifier.md` : adversarially re-checks one page's
  locators/magnitudes AND every equation/specification against its PDF.
- `.claude/agents/vocab-curator.md` : one serial pass per batch that reconciles
  every page's `proposedVocab` into the registry and rewrites pages to
  canonical `methods.buildsFrom`/`family` slugs.
- `.claude/workflows/distill-papers.js` : fans out distill->verify as a
  `pipeline`, one file per paper. Invoke with
  `Workflow({scriptPath: ".../distill-papers.js", args: {today, items:[{slug,journal,year,pdf,hint}]}})`.
  Pages are organised `papers/<journal>/<year>/<slug>.md` (journal = lowercase
  code in src/journals.js; year = the journal ISSUE year). The orchestrator sets
  journal+year from the issue you scouted, which is what prevents the
  online-first vs issue-year mismatch (the distiller uses the year you pass).
  (The workflow runtime only resolves built-in agent types, so the script uses
  `general-purpose` + `model: sonnet` and has each agent read its def file from
  disk as step one. `args` may arrive as a JSON string; the script reparses it.)

Steps:
1. **Scout** candidates and resolve each PDF's absolute path on disk. First see
   what is already on the wiki and what is missing: `node scripts/coverage.mjs`
   lists what is distilled (derived live from the pages, never a stale manifest;
   `/llms.txt` mirrors the same on the deployed site), and
   `node scripts/coverage.mjs --gap <journal> [journalPdfDir]` diffs the live
   pages against the local PDF library and prints the undistilled candidates
   (add `--json` for a machine-readable list). There is deliberately NO committed
   coverage file: the pages are the source of truth. Prefer recent,
   title-identifiable, locally-readable PDFs (the J. Finance issue folders carry
   titled filenames; some corpora only have coded names). Build the `items`
   work-list programmatically so unicode hyphens / double-spaces in filenames are
   exact, not hand-typed.
2. **Run the workflow** (Sonnet fan-out). It writes + self-verifies each page.
3. **Reconcile across the batch (this is the orchestrator's job; no single
   agent sees all pages):**
   - **Slug consistency**: collapse `data:<slug>` variants that denote the same
     dataset onto the canonical existing-page slug (CRSP/Compustat/I-B-E-S
     accessed via WRDS -> `data:wrds`; Chen-Zimmermann ->
     `data:open-source-asset-pricing`; pick one slug for Bloomberg, for GSW
     Fed yield curves, etc.). A clean build prints `datasets cited but
     undocumented: ...`; that list should be only genuinely new datasets, not
     spelling variants of documented ones.
   - **Year vs venue**: a paper's `year` must be its issue year, not the
     online-first year (e.g. J. Finance vol 81(1) is 2026 even if the file is
     labelled 2025). Fix `year`, `title`, `sidebar.label`, and the slug.
   - **Vocabulary reconciliation**: after distill+verify, run the
     `vocab-curator` agent ONCE over the batch pages. It folds each page's
     `paper.proposedVocab` into `vocab-registry.yml`, merges synonyms, and
     rewrites `methods.buildsFrom`/`family` to canonical slugs. It is serial
     (one writer, no parallel collision) and must run before the build.
   - **Em-dash / colorful-adjective sweep**: verifiers miss these; grep the new
     pages for the em-dash char (U+2014) and obvious promotional adjectives.
     Watch one YAML trap when fixing an em-dash inside an unquoted plain `note:`
     scalar: replacing ` — ` with `: ` (colon-space) makes YAML read a mapping
     separator and the build dies with `bad indentation of a mapping entry`.
     Use `;` `,` or `(` there, or only use `:` inside a `>-` block scalar.
4. **Build clean**: `rm -rf .astro node_modules/.astro && npm run build`. The
   content-layer data store lives at `node_modules/.astro/data-store.json`, not
   the project-root `.astro`; wiping only the latter leaves a stale store that
   re-emits a `Duplicate id` warning for every page touched since the last clean
   build. Wipe both. Acceptable output is then only the `datasets cited but
   undocumented` backlog line. No `Duplicate id`, no `tags not in any axis` orphan.
5. **Mandated review loop**: launch a Sonnet review agent over the diff; fix
   findings; re-review until `clean` (CLAUDE.md rule).
6. **Live-check + commit**: confirm `dist/wiki/papers/<journal>/<year>/<slug>/index.html` + the
   `.md` twin exist and the page is in `/llms.txt`; commit (infra, harness,
   pages as separate commits). The distilled-literature backlog is a standing
   issue in this repo; leave it open and reference it from the pages commit.
