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
                  // optional: OpenAlex/PDF give a flat display name for some
                  // authors (single-name, CJK, hyphenated) that does not split
                  // cleanly into family/given.
                  family: z.string().optional(),
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
            // OpenAlex forward-citation count at distillation time: influence
            // ranking and "which results have the most attention/evidence".
            // Cheap (already fetched in step 3b), high value for gap +
            // evolution queries; a static snapshot, not kept live.
            citedByCount: z.number().optional(),
            // JEL classification codes. JF prints none, and neither Crossref
            // nor OpenAlex carries them, so these are ASSIGNED BY IAR from the
            // abstract (not the journal's classification): an honest, uniform
            // provenance over the whole corpus, cross-checked at backfill
            // against author-supplied codes on preprints where those exist.
            // JEL is a fixed external taxonomy, so still the standard axis for
            // topic-trend / gap bibliometrics once the corpus spans journals.
            // `codes` are normalized 3-character codes (G11, G12), ~3 primary
            // max; `assignedBy` is the model id; `date` the assignment date.
            jel: z
              .object({
                codes: z.array(z.string()),
                assignedBy: z.string(),
                // YAML auto-parses an unquoted YYYY-MM-DD to a Date; accept
                // both and normalize to a plain date string (as extraction does).
                date: z
                  .union([z.string(), z.date()])
                  .transform((d) =>
                    (d instanceof Date ? d.toISOString() : d).slice(0, 10)
                  ),
              })
              .optional(),
            // OpenAlex topics: the raw subject classification, kept as a
            // provenance trail alongside the governed `jel` axis above (which
            // is IAR-assigned). Accurate subfield labels from OpenAlex's
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
            // axis ("what has been predicted/explained, and with what"). Kept
            // free-text for its precise phrasing; the governed coarse axis is
            // outcomeClass below (outcome[] is to outcomeClass what topics[] is
            // to jel - the granular provenance trail under a controlled bucket).
            outcome: z.array(z.string()).optional(),
            // The governed coarse bucket(s) for the dependent variable, drawn
            // from the `outcome-classes:` section of vocab-registry.yml. This is
            // what makes "what is being explained" queryable across the corpus
            // without the 100+-way fragmentation of free-text outcome[]. 1-3 per
            // paper; meta.mjs flags any value not in the registry.
            outcomeClass: z.array(z.string()).optional(),
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
                // The IDENTIFICATION design: the source of variation a result
                // leans on, kept separate from buildsFrom (which is estimator
                // genealogy) so "is the field getting more causal, and via
                // which designs" is answerable. This is the credibility-
                // revolution axis. Enum, design-focused (not estimator-named):
                // randomized (RCT/field experiment); natural-experiment (a
                // quasi-random shock, e.g. a policy or regulatory change,
                // exploited via DiD/event-study); instrument (IV/2SLS); rdd
                // (regression discontinuity); selection-on-observables
                // (matching or panel FE + controls; identification rests on
                // conditional ignorability, the weakest empirical design);
                // structural (identification from a model's restrictions);
                // descriptive (documents facts, makes no causal claim). OMIT
                // for a theory paper (no empirical design); use `descriptive`
                // for an acausal empirical paper, so theory does not pollute
                // the "% of empirical papers that are causally identified"
                // denominator. Name the PRIMARY design; secondary designs go
                // in the Empirical-specifications prose.
                identification: z
                  .enum([
                    'randomized',
                    'natural-experiment',
                    'instrument',
                    'rdd',
                    'selection-on-observables',
                    'structural',
                    'descriptive',
                  ])
                  .optional(),
              })
              .optional(),
            // What KIND of contribution the paper makes, orthogonal to
            // methods.role: it answers "is the field tilting from theory toward
            // empirics / new data, and how much is replication vs new fact".
            // An array (multi) because a paper can do several at once (propose a
            // method AND introduce data). new-theory (a new model/proposition),
            // new-method (a new estimator/technique), new-data (introduces a new
            // dataset/source), new-fact (a new empirical regularity), replication
            // (re-runs prior work), measurement (constructs a measure/index),
            // survey (a review). Near-always present; pick the headline kinds,
            // do not list every minor aspect.
            contributionType: z
              .array(
                z.enum([
                  'new-theory',
                  'new-method',
                  'new-data',
                  'new-fact',
                  'replication',
                  'measurement',
                  'survey',
                ])
              )
              .optional(),
            // The economic CHANNEL(S) / friction(s) the paper invokes: the axis
            // that turns the fragmented topic list into a tractable "which
            // frictions does the field study, and which are crowded vs
            // neglected". Controlled-but-growing like methods.buildsFrom: draws
            // from the `mechanisms:` section of vocab-registry.yml; a new term
            // stages in proposedVocab (axis: mechanism) and the curator
            // reconciles it. Omit when the paper invokes no clear channel (pure
            // measurement/description).
            mechanisms: z.array(z.string()).optional(),
            // Data-novelty flag: true when the paper INTRODUCES a new dataset or
            // source (hand-collected, a newly linked administrative file, a novel
            // text corpus). Answers "where is new data entering the field". Omit
            // (do not write false) when the paper only reuses existing sources.
            introducesData: z.boolean().optional(),
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
                // The NATURE of the data, kept separate from dataAccess (the
                // access tier) and granularity (the unit). Array, since a paper
                // often combines sources. market (prices/returns/quotes/trades);
                // accounting (financial statements, fundamentals); administrative
                // (government/regulator records, credit registers, tax);
                // survey (survey or expectations data); experimental (lab/field
                // experiment); text (filings, news, transcripts); other. Omit
                // for a theory paper with no data.
                dataType: z
                  .array(
                    z.enum([
                      'market',
                      'accounting',
                      'administrative',
                      'survey',
                      'experimental',
                      'text',
                      'other',
                    ])
                  )
                  .optional(),
                // The UNIT of observation. Array (a paper may use more than
                // one). aggregate (country/market level); industry; firm;
                // individual (household/person); security (asset/bond/stock
                // level); transaction (trade/loan level). Omit for theory.
                granularity: z
                  .array(
                    z.enum([
                      'aggregate',
                      'industry',
                      'firm',
                      'individual',
                      'security',
                      'transaction',
                    ])
                  )
                  .optional(),
                // Sample size, as the paper states it. A free string because
                // N is reported many ways ("12,345 firm-months", "1.2M loans",
                // "640 funds, 1984-2019"). Makes "how big are the samples in
                // fixed income" answerable. Omit for theory.
                n: z.string().optional(),
              })
              .optional(),
            // The "what works" effectiveness axis. The other axes say which
            // method/design/channel a paper used and what outcome it studied,
            // but not whether the model WORKED. findings[] records each headline
            // result as a structured row so the corpus answers "what kind of
            // models/effects actually work, with what magnitude, against which
            // benchmark" without reading prose. One entry per Core-results row;
            // `ref` ties it to that row so it stays traceable and verifiable.
            // Omit findings (and resultType) for a pure-theory paper that
            // reports no empirical result.
            findings: z
              .array(
                z.object({
                  // The Core-results row this finding restates (e.g. "R1"), so
                  // it is traceable to the page's table and a verifier can
                  // cross-check it. Omit only if the page has no row ids.
                  ref: z.string().optional(),
                  // The dependent variable / object this result speaks to.
                  // Reuse the paper-level `outcome` phrasing so the two align.
                  outcome: z.string(),
                  // The metric reported, as a kebab-case slug (sharpe-ratio,
                  // alpha, t-stat, r-squared, oos-r-squared, coefficient,
                  // elasticity, hazard-ratio, return-spread, correlation, ...).
                  // Governed by the `metrics:` section of vocab-registry.yml:
                  // reuse a slug (or alias) before coining; meta.mjs flags any
                  // value not in the registry as non-canonical.
                  metric: z.string(),
                  // The magnitude as the paper reports it, a free string since
                  // values come in many forms ("0.65 monthly", "1.2pp", "t=10.11").
                  value: z.string(),
                  // Sign / significance of the effect. `none` = no significant
                  // effect (a null finding). The value is `none`, not `null`,
                  // because a bare `null` in YAML parses as the null scalar and
                  // would fail the schema (and break the build).
                  direction: z.enum(['positive', 'negative', 'none', 'mixed']),
                  // How the result compares to its benchmark / baseline, when
                  // the paper makes such a comparison (free string, e.g.
                  // "~3x triple-sort SR", "beats FF5"). Omit when there is none.
                  vsBenchmark: z.string().optional(),
                })
              )
              .optional(),
            // Paper-level verdict on its central claim, the "what works"
            // headline, answerable as "how much of the corpus confirms priors
            // vs overturns vs finds nulls vs establishes new facts". confirms
            // (evidence supports a prior hypothesis/finding); overturns
            // (contradicts a prior established result); null-result (the central
            // test finds no effect); mixed (holds in some specs/subsamples, not
            // others); new-finding (establishes a new fact/method with no prior
            // to confirm or overturn). Spelled `null-result`, not `null`, to
            // avoid the YAML null collision. Omit for a pure-theory paper.
            resultType: z
              .enum(['confirms', 'overturns', 'null-result', 'mixed', 'new-finding'])
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
                  // tests: empirically pits the paper against it; cites:
                  // neutral background reference with no stronger relation.
                  relation: z.enum([
                    'extends',
                    'replicates',
                    'contradicts',
                    'tests',
                    'builds-on',
                    'cites',
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
                  // methods.family, topic/method to the tag axes, metric to
                  // findings[].metric, outcome-class to paper.outcomeClass.
                  axis: z.enum([
                    'family',
                    'builds-from',
                    'topic',
                    'method',
                    'mechanism',
                    'metric',
                    'outcome-class',
                  ]),
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
