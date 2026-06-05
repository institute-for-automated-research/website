# Distilled-paper page template (the canonical shape)

This is the **proper template** a `paper-distiller` follows, and a
`paper-verifier` checks against. It replaces "imitate some existing page".
Copy the structure below; fill every part from the PDF you actually read.
The goal of the whole series is to make the literature **queryable for gaps
and evolution**, so the structured frontmatter axes matter as much as the
prose: they are what lets someone ask "which methods reached fixed income",
"what is contested", "where is all the evidence US-only".

Rendering notes (do not break these):
- No em-dashes, no colorful adjectives, anywhere (titles, descriptions, body).
  Use `:` `,` `(` and ASCII `-` (hyphen-minus), never the `-` em-dash.
- This site renders math with **KaTeX**. Write every equation as **real LaTeX**
  inside `$$ ... $$`. A `$$ ... $$` on its own line(s) renders as a display block;
  `$$ ... $$` mid-sentence renders inline. **Single `$` is disabled** (so prose
  dollar amounts like "$5 million" stay literal) - never use single-`$` math.
  Use real control sequences (`\Sigma`, `\mu`, `\lambda`, `\sum`, `\frac{}{}`,
  `\leq`, `\geq`, `\times`, `\setminus`, `\tilde`, `\hat`), subscripts `_{...}`,
  superscripts `^{...}`. Wrap multi-letter / word variables in `\text{...}`
  (e.g. `\text{Trade}_{ijt}`). Equation numbers use `\tag{N}` (display blocks
  only; never in inline math). Never put a page/section locator or the `§` sign
  inside math; locators belong in the surrounding prose.
- Keep findings first; rights/attribution last.

---

## Frontmatter

```yaml
---
title: "<Short Name>: <Authors short> (<IssueYear>)"   # index splits on first ": "
description: >-
  Distilled: <what it found, 2-3 sentences> <venue>, <licence>. <N> core
  results with source locators, datasets used, the model, and the method.
sidebar:
  label: <Authors-short Year>
  order: 1
tags: [paper-summary, <topic...>, <method...>, <access?>, <status>, unreplicated,
       data:<slug>, ...]            # inline-flow; see SKILL.md tag axes
paper:
  authors: <full names as printed>            # display string
  authorList:                                  # structured, from Crossref + page-1 affiliations
    - { family: <...>, given: <...>, orcid: <only if present; OMIT the key otherwise, never null>, affiliation: <at publication> }
  year: <ISSUE year>                # not online-first year
  venue: <full citation string>
  venueShort: <e.g. J. Finance 2025>
  doi: <doi>
  jel:                                         # IAR-assigned from the abstract (JF/most venues print none). NOT the journal's classification.
    codes: [<G12>, <G14>]                       # normalized 3-char codes, ~3 primary max; assign even when the venue prints none
    assignedBy: <model id, e.g. claude-opus-4-8>
    date: <YYYY-MM-DD>
  topics: [<OpenAlex topics via the openalex skill>]   # raw OpenAlex subject classification, kept as the provenance trail
  dataAccess: <public | licensed-commercial | hand-collected | proprietary-confidential>  # DERIVED + gate-enforced: most-restrictive tier over the data:<slug> tags (see Optional-field rules)
  outcome: [<dependent variable(s), short phrases>]       # free-text provenance trail
  outcomeClass: [<governed coarse bucket(s) from vocab-registry.yml outcome-classes:, 1-3>]  # e.g. security-returns | credit-risk | household-finance
  license: <descriptive string>
  licenseShort: <e.g. CC BY 4.0 | paywalled>
  access: <open | paywalled | preprint>
  machineAccess: <what an automated fetch returns today, with date>
  redistribution: <extract-only | hosted ...>      # default extract-only
  resultsCount: <rows in Core results table>
  citedByCount: <OpenAlex cited_by_count, from the openalex skill (step 3b)>

  # --- methodological identity (queryable; the point of the series) ---
  methods:
    role: <proposes-method | applies-method | both | theory>
    contributes: <named method it proposes, omit if none>
    family: <registry term: ml | structural | reduced-form-causal | theory | descriptive>
    buildsFrom: [<registry technique slugs the method is built on>]
    identification: <randomized | natural-experiment | instrument | rdd | selection-on-observables | structural | descriptive>  # primary design; OMIT for theory papers
  contributionType: [<new-theory | new-method | new-data | new-fact | replication | measurement | survey>]  # array (multi); near-always present
  mechanisms: [<registry slug: information-asymmetry | liquidity | agency | ...>]  # economic channel(s); omit if none; reuse-before-mint via proposedVocab (axis: mechanism)
  introducesData: <true>     # only when the paper introduces a NEW dataset/source; OMIT (never false) otherwise
  # --- sample scope: the axis where gaps hide ---
  scope:
    region: <e.g. US | Norway | global | theoretical>
    assetClass: <e.g. US equities | corporate loans | sovereign bonds>
    period: <data window, e.g. 1964-01..2016-12>
    frequency: <daily | weekly | monthly | quarterly | annual | mixed>  # omit for theory papers
    dataType: [<market | accounting | administrative | survey | experimental | text | other>]  # nature of the data; omit for theory
    granularity: [<aggregate | industry | firm | individual | security | transaction>]  # unit of observation; omit for theory
    n: <sample size as the paper states it, e.g. "12,345 firm-months">  # omit for theory
  # --- the "what works" effectiveness axis: did the model/effect work, with what magnitude ---
  findings:                  # one entry per Core-results row; omit entirely for a pure-theory paper
    - { ref: <R1>, outcome: <dep var, reuse paper-level outcome phrasing>, metric: <kebab slug: sharpe-ratio | alpha | t-stat | r-squared | coefficient | ...>, value: <magnitude as reported>, direction: <positive | negative | none | mixed>, vsBenchmark: <comparison to baseline, omit if none> }
  resultType: <confirms | overturns | null-result | mixed | new-finding>  # paper-level verdict; omit for pure theory
  # --- finding-lineage edges to prior work (how lit evolves / what is contested) ---
  relatesTo:
    - { cite: <author-year>, relation: <extends|replicates|contradicts|tests|builds-on|cites>, note: <one line> }  # add doi only if read from an authoritative source, never guessed
  # --- the paper's OWN stated open questions / limitations (gaps live here) ---
  openQuestions:
    - <pulled from the conclusion, never invented>
  # --- vocab the page wants to MINT, staged for the curator (never the shared registry) ---
  proposedVocab:
    - { axis: <family|builds-from|topic|method|mechanism|metric|outcome-class>, term: <slug>, def: <one line>, aliases: [<...>] }

  extraction:
    - { by: paper-distiller (<model id>), date: <today>, role: extracted, note: "<read PDF; not human-verified; not reproduced>" }
  licenceVerification:
    - { source: <Crossref works/<doi>>, checked: <today>, by: paper-distiller (<model>), found: "<raw finding>" }
  rightsSignalConflict: <true only if artifact and metadata licence disagree>
---
```

### The vocab discipline (controlled-but-growing, reuse before mint)

`family`, `buildsFrom`, `mechanisms`, `findings[].metric`, and `outcomeClass`
(and topic/method tags) draw from a **registry**
(`.claude/skills/wiki-page/vocab-registry.yml`). Procedure, every run:

1. Read the registry.
2. If an existing term or one of its `aliases` fits, **reuse it**. Do not coin
   a synonym (`regression-trees` when `decision-trees` exists).
3. Only if nothing fits, mint a new term, but stage it in this page's
   `paper.proposedVocab` with a one-line `def`. Never write to the shared
   registry from a distiller: parallel distillers collide. The batch
   `vocab-curator` reconciles proposals into the registry and rewrites pages to
   the canonical term.

### Optional-field rules

- **Omit** `openQuestions`, `relatesTo`, `proposedVocab`, `replicationCode`,
  `scope`, `methods` entirely (not an empty array/object) when the paper gives
  nothing for them. An empty array is noise.
- **Never write a literal `null`** (or `~`) for an absent value: omit the key
  instead. A null scalar fails the content schema and breaks the build (a
  missing `authorList[].orcid` must be omitted, not set to `null`).
- `dataAccess` is **derived, and the prebuild gate enforces it**: set it to the
  most-restrictive tier over the paper's `data:<slug>` tags, ordered
  `public < licensed-commercial < proprietary-confidential` (`hand-collected` is
  a paper-level tier, used only when the authors gathered the data themselves).
  `check-dataset-access` FAILS the build if the page under-claims. Confidential
  supervisory data, a central-bank credit register, individual-level
  administrative microdata, or a single private counterparty is
  `proprietary-confidential` even when the paper's other sources are public.
- `methods.role` is the one always-fill field once `methods` is present:
  `proposes-method | applies-method | both | theory`.
- `methods.contributes`: one headline method name as a kebab-case identifier
  slug (e.g. `ap-trees`), not a prose phrase. Do not pack several with "+";
  name secondary methods in the Method prose.
- `methods.family` (enum): `ml | structural | reduced-form-causal | theory |
  descriptive`.
- `methods.identification` (enum): the PRIMARY source of variation, design-named
  not estimator-named: `randomized` (RCT/field experiment), `natural-experiment`
  (a quasi-random shock, e.g. a policy or regulatory change, exploited via
  DiD/event-study), `instrument` (IV/2SLS), `rdd` (regression discontinuity),
  `selection-on-observables` (matching or panel FE + controls; the weakest
  empirical design), `structural` (identification from model restrictions),
  `descriptive` (documents facts, no causal claim). **OMIT only for a paper with
  no empirical design of its own** (a pure-theory paper, `role: theory`); a
  `role: both` paper that empirically tests its model records that test's design
  (e.g. `instrument`), so omission keys on `role: theory`, not on `family`. Use
  `descriptive` for an acausal empirical paper,
  including asset-pricing / return-prediction / factor papers that build or test
  a pricing object without identifying a causal effect (they are empirical and
  not causally identified, which is exactly what `descriptive` records). The
  omit-vs-`descriptive` distinction is load-bearing: it keeps theory papers out
  of the "share of empirical work that is causally identified" denominator. Name
  the primary design only; secondary designs go in Empirical-specifications prose.
- `contributionType` (array enum, near-always present): `new-theory | new-method
  | new-data | new-fact | replication | measurement | survey`. Multi, because a
  paper can do several (propose a method AND introduce data). List the headline
  kinds, not every minor aspect.
- `mechanisms` (array, controlled-but-growing): the economic channel(s) /
  friction(s), e.g. `information-asymmetry`, `liquidity`, `agency`,
  `limits-to-arbitrage`. Reuse a `mechanisms:` registry term (or alias) before
  minting; stage a genuinely new one in `proposedVocab` with `axis: mechanism`.
  Omit when the paper invokes no clear channel (pure measurement/description).
- `introducesData`: `true` only when the paper introduces a NEW dataset or source
  (hand-collected, a newly linked administrative file, a novel text corpus).
  **Omit it (never write `false`)** when the paper only reuses existing sources.
- `relatesTo.relation` values: **extends** (methodological generalization of
  the cited result), **builds-on** (conceptual/foundational dependence),
  **replicates**, **contradicts** (opposes its finding), **tests**
  (empirically pits the paper against it), **cites** (neutral background
  reference, no stronger relation). Name every `relatesTo` cite as an
  author-year in the body (first-author surname next to the year, e.g.
  `Fama and French (1993)`) so the edge is locatable. A bare surname with no
  year, a year that belongs to a different cited work, or a self-cited author
  whose surname appears only in the attribution does NOT count. `prebuild` runs
  `scripts/check-relatesto-locatable.mjs` and the build fails on any
  un-locatable cite. Do NOT guess a `doi`: add one only when read from the edge's
  own authoritative record this run, else omit it and let `ground-relatesto.mjs`
  fill it from the real reference list.
- `openQuestions` are the paper's OWN stated gaps/limitations/future work
  (with page locators), not your editorializing and not a scope restatement.
- `scope.frequency` (enum): `daily | weekly | monthly | quarterly | annual |
  mixed`. Use canonical `region` / `assetClass` forms (US, global, Norway;
  US equities, corporate loans, sovereign bonds).
- `scope.dataType` (array enum): the NATURE of the data, distinct from
  `dataAccess` (the access tier) and `granularity` (the unit): `market |
  accounting | administrative | survey | experimental | text | other`. Omit for
  a theory paper with no data.
- `scope.granularity` (array enum): the UNIT of observation: `aggregate |
  industry | firm | individual | security | transaction`. Omit for theory.
- `scope.n`: sample size as the paper states it (free string, e.g.
  `"12,345 firm-months"`, `"640 funds, 1984-2019"`). Omit for theory.
- `outcome` (array): the dependent variable(s) the paper explains, as short
  free-text phrases. Kept granular for provenance; not governed.
- `outcomeClass` (array, registry-governed): the coarse bucket(s) for the
  dependent variable, from the `outcome-classes:` section of `vocab-registry.yml`
  (`security-returns`, `asset-prices`, `firm-real-outcomes`, `firm-financing`,
  `credit-supply`, `credit-risk`, `bank-funding`, `household-finance`,
  `fund-behavior`, `expectations`, `macro-aggregates`, `firm-dynamics`,
  `labor-careers-health`, `social-welfare`). This is to `outcome[]` what `jel` is
  to `topics`: the controlled axis that makes "what is being explained" queryable
  without free-text fragmentation. Assign 1-3 from the abstract / Core-results
  table; theory papers get it too (they still state a dependent variable). Reuse
  a registry bucket before proposing a new one (stage a genuinely new bucket in
  `proposedVocab` with `axis: outcome-class`); `node scripts/meta.mjs` flags any
  off-registry value.
- `findings` (array, the "what works" axis): one entry per **Core-results row**
  that reports a quantitative result, in row order. Build it FROM the page's own
  Core-results table (then confirm against the PDF); skip purely qualitative rows
  rather than invent a metric. Each entry: `ref` (the row id, e.g. `R1`, so it
  stays traceable; omit only if the page has no row ids), `outcome` (the
  dependent variable, reuse the paper-level `outcome` phrasing), `metric` (a
  kebab-case slug for the statistic reported, **governed by the `metrics:`
  section of `vocab-registry.yml`**: reuse a registry slug or alias before
  coining, and `node scripts/meta.mjs` flags any off-registry value. Canonical
  slugs span the subfields: asset pricing / factors `sharpe-ratio`, `alpha`,
  `beta`, `return-spread`, `oos-r-squared`, `r-squared`; regressions
  `coefficient`, `elasticity`, `pp-effect` (a percentage-point effect),
  `sd-effect` (effect per 1-SD change), `basis-points`, `t-stat`, `correlation`;
  corporate / event studies `car` (cumulative abnormal return); durations /
  discrete outcomes `hazard-ratio`, `probability` (a rate/share/proportion),
  `level` (a volume in natural units)), `value` (the magnitude as
  reported, free string), `direction` is the sign of the effect: `positive` (the
  estimated effect is positive, or the subject beats its benchmark), `negative`
  (the effect is negative, or the subject falls below its benchmark), `none` (no
  statistically significant effect, a null), `mixed` (sign or significance flips
  across specs / subsamples). Do NOT code a row `positive` merely because the
  paper frames a failure or rejection as its point: a "model is rejected / does
  not predict / fit is low" row is `none` if the effect is insignificant, or
  `negative` if the subject underperforms a benchmark. **Never write `null`**
  (YAML reads bare null as the null scalar and fails the build). Last, `vsBenchmark`
  (free string naming the baseline and the comparison outcome, e.g. `"~3x
  triple-sort SR"`, `"beats FF5"`, `"below prevailing-mean"`; omit when the row
  has no benchmark contrast). **Omit the whole `findings` block for a pure-theory
  paper** that reports no empirical result.
- `resultType` (enum, paper-level verdict): the headline "what works" call.
  `confirms` (evidence supports a prior hypothesis/finding), `overturns`
  (contradicts a prior established result), `null-result` (the central test finds
  no effect), `mixed` (holds in some specs/subsamples, not others), `new-finding`
  (establishes a new fact/method with no prior to confirm or overturn). Spelled
  `null-result`, not `null`, to dodge the YAML null collision. **Choose the value
  from the page's `relatesTo` edges, do not default to `new-finding`:** a headline
  `contradicts` edge points to `overturns`; a `replicates` edge that holds is
  `confirms`, one that fails is `overturns`; a `tests` / `extends` edge whose
  prior holds is `confirms`, that holds only partially is `mixed`. Reserve
  `new-finding` for a genuinely first-of-its-kind fact or method with no prior
  result it confirms or overturns. A paper can both establish a new finding AND
  overturn a prior; pick the one that best describes its headline contribution and
  let the per-row `findings` + `relatesTo` carry the rest. Omit for a pure-theory
  paper.

---

## Body sections (in order)

Include the sections that apply. Every paper has **TL;DR**, **Core results**,
**Datasets used**, **When to read**, **Attribution**. The three formal sections
(**Theory / model**, **Method**, **Empirical specifications**) are the new
substance: include each that the paper has, with the actual equations, not a
prose gloss. A method paper leans on Method; a structural paper on Theory /
model; a reduced-form empirical paper on Empirical specifications. Most papers
have at least two of the three.

```
**What this is.** <one paragraph: this is the distilled skeleton; read the
original (link) to replicate or extend>

## TL;DR
<one paragraph: what it did and found>

## Core results
<table: # | Result | Locator (Table/Figure/§ + page) | Magnitude as reported>
<keep the paper's own coefficients, t-stats, signs, significance; escape \* >
<use row ids R1, R2, ... in the # column: the frontmatter `findings[].ref`
points back to them, so the structured "what works" axis stays traceable to the
table. Each quantitative row should have a matching `findings` entry.>
**Overall (paper's conclusion).** <one paragraph>

## Theory / model            # the economic content: model + hypotheses + identification
<Write the model's actual equations (utility, FOC/Euler, budget, equilibrium,
law of motion, pricing equation) as `$$ ... $$` LaTeX display blocks, each with
its PDF locator in the surrounding prose. Then the identification logic. If the
paper has NO formal model,
say so plainly and give the tested hypotheses + identification strategy here.>

## Method                    # the estimator / proposed technique / solution method
<For a method paper: the DEFINING objective/estimator equation(s) with locators,
the algorithm, and what it builds on. For an applied paper: the estimator
(GMM/SMM/MLE/...), and how the model is solved/estimated. Cross-reference the
`methods.buildsFrom` slugs here in prose so the genealogy is legible.>

## Empirical specifications  # the actual regressions / estimating procedure behind the results
<For each headline empirical result, the estimating SPECIFICATION, not just the
number: the estimating equation (LHS, RHS regressors), fixed effects, standard-
error treatment (clustering / bootstrap / Newey-West), sample and frequency.
For asset-pricing papers "specification" means the SDF/spanning/alpha test
construction (e.g. alpha = intercept of test-asset returns on candidate factors,
GRS), not OLS-with-FE; describe what was actually run. Tie each spec to the
Core-results rows it produces.>

## Datasets used
<table: Dataset | Role in paper | Wiki page (link or "no page yet"); must agree
with the data:<slug> tags>
<Sample line: scope + N + frequency.>

## When to read the full paper
<who should read the source and for what; locators point to exact tables.>

## Attribution and rights
<CC papers: reproduce the CC attribution block verbatim. Paywalled: normal
citation + extract-only. State LLM-distilled, not human-verified, not reproduced.>
```

## Section-by-paper-type quick guide

| Paper type (`methods.role`) | Theory / model | Method | Empirical specifications |
|---|---|---|---|
| `proposes-method` (e.g. AP-Trees) | the problem it formalizes (often a proposition) | **the star**: the objective/estimator equations | the spanning/alpha/SR tests that benchmark it |
| `theory` (structural) | **the star**: model equations | solution method (HJB, value-function iteration, SMM) | calibration / moment-matching targets, if any |
| `applies-method` (reduced-form) | hypotheses + identification | the estimator in one line | **the star**: regression equations + FE + SE + sample |
| `both` / `mixed` | model equations | estimator | the regressions that test it |
