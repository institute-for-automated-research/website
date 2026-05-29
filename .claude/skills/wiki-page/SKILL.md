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
| Distilled paper summaries | `src/content/docs/papers/<slug>.md` |
| Tag browse page + axes | `src/content/docs/tags.mdx` + `src/components/TagIndex.astro` |
| Verified badge renderer | `src/components/PageTitle.astro` |
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

Frontmatter carries a `paper:` block (bibliographic identity + provenance):
`authors`, `year`, `venue`, `doi`, `license`, `access` (open/paywalled/preprint),
`machineAccess`, `redistribution`, optional `pdf` (only if redistribution is
allowed and the verbatim mirror is hosted under `/library`), `licenceVerification[]`
(where the licence was confirmed against an authoritative source), and
`extraction[]` (a stacking list of attestations with `by` / `date` /
`role`: `extracted` | `verified` | `reproduced`). Papers have their own
provenance ladder via `extraction[].role`; they are excluded from the
dataset Verification axis. Keep the page findings-first; rights/attribution go
at the bottom. CC BY attribution blocks must stay verbatim.

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

Dataset pages here and the pipeline's empirical skills
(`../../NewPapers/zeropaper` -> `extensions/empirical/skills/<dataset>/SKILL.md`:
fred, edgar, ken-french, flex-mining, open-source-asset-pricing, wrds, ...) are
two mirrors of the same dataset knowledge. A substantive change to access method
or gotchas on either side should be propagated to the other, or they drift.
Do not hand-edit a paper PDF or its landing page here; that belongs in the
pipeline, then regenerate.
