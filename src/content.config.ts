import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Provenance: when the access recipe on this page was last actually
      // run, and against what. Rendered under the title and surfaced in
      // llms-full.txt — this is what makes the wiki a *verified* knowledge
      // base rather than rehosted documentation.
      extend: z.object({
        // Controlled-vocab tags for the /wiki/tags browse page + per-page
        // chips. Kebab-case axes: topic (asset-pricing, factors, anomalies,
        // macro, equities, fundamentals, filings, pensions), access (free,
        // no-api-key, licensed), shape (panel-data, time-series,
        // cross-section, event-data), source (federal-reserve, sec, dol,
        // academic, wrds). Plus one open axis: dataset, `data:<slug>` where
        // <slug> is a dataset page slug (data:fred, data:wrds). A dataset
        // page self-tags; a paper tags every dataset it uses. A data:<slug>
        // with no page of that slug is a documented-dataset backlog item,
        // flagged on the tags page. Inline-flow YAML in frontmatter so the
        // naive postbuild parser captures it too.
        tags: z.array(z.string()).optional(),
        // Distilled third-party paper. Bibliographic identity + the four
        // provenance facts grounded on the Kwan-Liu-Matthies specimen:
        // license/access/machineAccess are independent and each
        // empirically recorded (the Verified discipline, applied to
        // rights). `pdf` is set only when redistribution is permitted and
        // the verbatim mirror is hosted under /library.
        paper: z
          .object({
            authors: z.string(),
            // Structured authors for disambiguation + coauthor/affiliation
            // analysis (how the field evolves: which groups drive which
            // methods). Populated from the Crossref author[] block already
            // fetched (family/given/ORCID) plus affiliation-at-publication
            // from the PDF first page. ORCID is the only reliable cross-paper
            // key; name matching is best-effort without it. `authors` stays as
            // the display string.
            authorList: z
              .array(
                z.object({
                  family: z.string(),
                  given: z.string().optional(),
                  orcid: z.string().optional(),
                  affiliation: z.string().optional(),
                })
              )
              .optional(),
            year: z.number(),
            venue: z.string(),
            // Short display forms for the auto-generated papers index table
            // (src/components/PapersIndex.astro), so adding a paper page never
            // requires hand-editing a shared index file. venueShort e.g.
            // "J. Finance 2026"; licenseShort e.g. "CC BY 4.0" or "paywalled";
            // resultsCount is the number of rows in the page's results table.
            venueShort: z.string().optional(),
            licenseShort: z.string().optional(),
            resultsCount: z.number().optional(),
            // JEL classification codes printed on the paper (page 1). A fixed
            // external taxonomy, so inherently controlled: the standard axis
            // for topic-trend / gap bibliometrics over time.
            jel: z.array(z.string()).optional(),
            // OpenAlex topics: the subject classification actually used here,
            // since JF prints no JEL. Accurate subfield labels from OpenAlex's
            // controlled taxonomy (its legacy "concepts" are noisy; topics are
            // not). Pulled by the distiller via the openalex skill.
            topics: z.array(z.string()).optional(),
            // The reproducibility frontier: the MOST RESTRICTIVE access tier
            // among the datasets the headline results require ("can anyone
            // reproduce this?"). public < licensed-commercial < hand-collected
            // / proprietary-confidential (the last two are effectively closed).
            dataAccess: z
              .enum([
                'public',
                'licensed-commercial',
                'hand-collected',
                'proprietary-confidential',
              ])
              .optional(),
            // The dependent variable(s) the paper explains: the central gap
            // axis ("what has been predicted/explained, and with what"). Free
            // for now; a candidate for registry governance once values settle.
            outcome: z.array(z.string()).optional(),
            doi: z.string().optional(),
            // e.g. "CC BY 4.0 (asserted — artifact p.791, version
            // unspecified; recorded as publisher/AFA OA standard)"
            license: z.string(),
            access: z.enum(['open', 'paywalled', 'preprint']),
            // What an automated fetch of the canonical source returns,
            // with date — e.g. "blocked-402 (Wiley, 2026-05-17)".
            machineAccess: z.string(),
            // Descriptive (like license/machineAccess), not an enum:
            // starts with the disposition (hosted / extract-only) and may
            // carry the licence rationale. Kept structured in frontmatter
            // so the rationale stays out of page prose.
            redistribution: z.string(),
            // Hosted verbatim mirror, site-root path (omit if extract-only).
            pdf: z.string().optional(),
            // Distillation provenance as a *list* of attestations, not a
            // sentence: each is (who/what, when, role). Attestations stack
            // — a later model or named human re-checking the distillation
            // appends an entry; nothing is overwritten. role: `extracted`
            // (the original distillation), `verified` (re-checked against
            // the source), `reproduced` (replication code actually run).
            extraction: z
              .array(
                z.object({
                  by: z.string(), // model id or human name
                  date: z
                    .union([z.string(), z.date()])
                    .transform((d) =>
                      (d instanceof Date ? d.toISOString() : d).slice(0, 10)
                    ),
                  role: z.enum(['extracted', 'verified', 'reproduced']),
                  note: z.string().optional(),
                })
              )
              .min(1),
            // Licence-verification trail: where the licence was confirmed
            // against an authoritative source (not the artifact alone),
            // when, by what, and the raw finding. Structured so the "how
            // we proved it" lives in metadata, not page prose.
            licenceVerification: z
              .array(
                z.object({
                  source: z.string(), // e.g. "Crossref REST works/<doi>"
                  checked: z
                    .union([z.string(), z.date()])
                    .transform((d) =>
                      (d instanceof Date ? d.toISOString() : d).slice(0, 10)
                    ),
                  by: z.string(),
                  found: z.string(),
                })
              )
              .optional(),
            rightsSignalConflict: z.boolean().default(false),
            // The paper's METHODOLOGICAL identity, made queryable for
            // cross-corpus gap + evolution analysis (the whole point of the
            // series). `role` says whether contributing a method is even the
            // point of the paper; `contributes` names the method it proposes;
            // `family` and `buildsFrom` are registry-governed-but-growing
            // (reuse an existing term before minting a new one — new terms go
            // in `proposedVocab` below, never straight into the shared
            // registry). buildsFrom is the technique genealogy edge
            // (decision-trees, lasso, blp-demand, ...); it answers "where did
            // this method come from and where has it spread".
            methods: z
              .object({
                role: z.enum([
                  'proposes-method',
                  'applies-method',
                  'both',
                  'theory',
                ]),
                // One primary method. If a paper contributes several, name
                // the headline one here and describe the rest in prose; do
                // not pack multiple names with "+".
                contributes: z.string().optional(),
                // Method class, an enum so it groups cleanly for gap queries.
                family: z
                  .enum([
                    'ml',
                    'structural',
                    'reduced-form-causal',
                    'theory',
                    'descriptive',
                  ])
                  .optional(),
                buildsFrom: z.array(z.string()).optional(),
              })
              .optional(),
            // Sample scope: the axis where gaps hide ("all the evidence is US
            // large-cap, post-2000"). Free strings, but fill them: region,
            // asset/market, and the data window. Queryable cross-corpus.
            scope: z
              .object({
                // Canonical forms to keep aggregation from fragmenting:
                // region e.g. US | Norway | global | euro-area; assetClass
                // e.g. US equities | corporate loans | sovereign bonds.
                region: z.string().optional(),
                assetClass: z.string().optional(),
                period: z.string().optional(), // e.g. "1964-01..2016-12"
                // Data frequency, enum so "is there daily evidence in X?"
                // is answerable cross-corpus.
                frequency: z
                  .enum([
                    'daily',
                    'weekly',
                    'monthly',
                    'quarterly',
                    'annual',
                    'mixed',
                  ])
                  .optional(),
              })
              .optional(),
            // Finding-lineage edges to prior work: the "how the literature
            // evolves / what is contested" graph, distinct from
            // methods.buildsFrom (technique genealogy). `relation` says how
            // THIS paper stands to the cited result.
            relatesTo: z
              .array(
                z.object({
                  cite: z.string(), // human-readable author-year
                  doi: z.string().optional(), // for the curator to canonicalize
                  // extends: methodological generalization of the cited
                  // result; builds-on: conceptual/foundational dependence;
                  // replicates: re-runs it; contradicts: opposes its finding;
                  // tests: empirically pits the paper against it.
                  relation: z.enum([
                    'extends',
                    'replicates',
                    'contradicts',
                    'tests',
                    'builds-on',
                  ]),
                  note: z.string().optional(),
                })
              )
              .optional(),
            // The paper's OWN stated open questions / limitations / future
            // work. Gaps live here; pull from the conclusion, never invent.
            openQuestions: z.array(z.string()).optional(),
            // Replication-code availability, for reproducibility-gap queries
            // ("which findings even have runnable code?").
            replicationCode: z
              .object({
                url: z.string().optional(),
                status: z.enum(['available', 'upon-request', 'none']).optional(),
              })
              .optional(),
            // Controlled-but-growing vocab: terms this page wants to mint on
            // the family / buildsFrom / topic / method axes, staged here
            // pending the batch vocab-curator pass that reconciles them into
            // the shared registry. Parallel distillers each write only their
            // own page, so proposals stage on the page, never in the shared
            // registry file (which would collide).
            proposedVocab: z
              .array(
                z.object({
                  // builds-from maps to methods.buildsFrom, family to
                  // methods.family, topic/method to the tag axes.
                  axis: z.enum(['family', 'builds-from', 'topic', 'method']),
                  term: z.string(),
                  def: z.string(),
                  aliases: z.array(z.string()).optional(),
                })
              )
              .optional(),
          })
          .optional(),
        verified: z
          .object({
            // Accept quoted strings and YAML-native dates alike; normalize
            // to YYYY-MM-DD so authors/agents can't trip on quoting.
            date: z
              .union([z.string(), z.date()])
              .transform((d) =>
                (d instanceof Date ? d.toISOString() : d).slice(0, 10)
              ),
            with: z.string().optional(), // e.g. "test_fred.py"
            url: z.string().url().optional(), // link to the test/script
            // 'free' (default) → "Verified" (green): runnable at no cost.
            // 'licensed' → "Access confirmed (licensed)" (amber): the path
            // was exercised, but the source is paywalled — not free.
            access: z.enum(['free', 'licensed']).default('free'),
            // How far the recipe was actually run. 'fetched' = real data
            // pulled live here, shown as the green "Verified" badge.
            // 'reachable' (default) = source confirmed live but the
            // end-to-end pull was not proven here, shown as teal "Source
            // reachable". Conservative default so the green claim is an
            // explicit opt-in. Drives the Verification tag axis too:
            // verified-fetched / verified-reachable / access-confirmed-
            // licensed / unverified (no block).
            level: z.enum(['fetched', 'reachable']).default('reachable'),
          })
          .optional(),
      }),
    }),
  }),
};
