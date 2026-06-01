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
- This site has **no KaTeX**. Write every equation as **plain-text / Unicode**
  inside a fenced code block (display) or inline back-ticks. Use `Sigma`, `mu`,
  `lambda`, `<=`, `>=`, subscripts as `_{...}`, superscripts as `^...`. Do not
  emit `$...$` LaTeX; it renders literally.
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
    - { family: <...>, given: <...>, orcid: <... if any>, affiliation: <at publication> }
  year: <ISSUE year>                # not online-first year
  venue: <full citation string>
  venueShort: <e.g. J. Finance 2025>
  doi: <doi>
  jel: [<G12>, <G14>]                          # JEL codes printed on the paper (omit if none, e.g. J. Finance)
  topics: [<OpenAlex topics via the openalex skill>]   # subject classification, the JEL substitute
  dataAccess: <public | licensed-commercial | hand-collected | proprietary-confidential>
  outcome: [<dependent variable(s), short phrases>]
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
  # --- sample scope: the axis where gaps hide ---
  scope:
    region: <e.g. US | Norway | global | theoretical>
    assetClass: <e.g. US equities | corporate loans | sovereign bonds>
    period: <data window, e.g. 1964-01..2016-12>
    frequency: <daily | weekly | monthly | quarterly | annual | mixed>  # omit for theory papers
  # --- finding-lineage edges to prior work (how lit evolves / what is contested) ---
  relatesTo:
    - { cite: <author-year>, doi: <doi if known>, relation: <extends|replicates|contradicts|tests|builds-on|cites>, note: <one line> }
  # --- the paper's OWN stated open questions / limitations (gaps live here) ---
  openQuestions:
    - <pulled from the conclusion, never invented>
  # --- vocab the page wants to MINT, staged for the curator (never the shared registry) ---
  proposedVocab:
    - { axis: <family|builds-from|topic|method>, term: <slug>, def: <one line>, aliases: [<...>] }

  extraction:
    - { by: paper-distiller (<model id>), date: <today>, role: extracted, note: "<read PDF; not human-verified; not reproduced>" }
  licenceVerification:
    - { source: <Crossref works/<doi>>, checked: <today>, by: paper-distiller (<model>), found: "<raw finding>" }
  rightsSignalConflict: <true only if artifact and metadata licence disagree>
---
```

### The vocab discipline (controlled-but-growing, reuse before mint)

`family` and `buildsFrom` (and topic/method tags) draw from a **registry**
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
- `methods.role` is the one always-fill field once `methods` is present:
  `proposes-method | applies-method | both | theory`.
- `methods.contributes`: one headline method name as a kebab-case identifier
  slug (e.g. `ap-trees`), not a prose phrase. Do not pack several with "+";
  name secondary methods in the Method prose.
- `methods.family` (enum): `ml | structural | reduced-form-causal | theory |
  descriptive`.
- `relatesTo.relation` values: **extends** (methodological generalization of
  the cited result), **builds-on** (conceptual/foundational dependence),
  **replicates**, **contradicts** (opposes its finding), **tests**
  (empirically pits the paper against it), **cites** (neutral background
  reference, no stronger relation). Name every `relatesTo` cite
  somewhere in the body so the edge is locatable; add `doi` when known.
- `openQuestions` are the paper's OWN stated gaps/limitations/future work
  (with page locators), not your editorializing and not a scope restatement.
- `scope.frequency` (enum): `daily | weekly | monthly | quarterly | annual |
  mixed`. Use canonical `region` / `assetClass` forms (US, global, Norway;
  US equities, corporate loans, sovereign bonds).

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
**Overall (paper's conclusion).** <one paragraph>

## Theory / model            # the economic content: model + hypotheses + identification
<Write the model's actual equations (utility, FOC/Euler, budget, equilibrium,
law of motion, pricing equation) in plain-text fenced blocks, each with its
PDF locator. Then the identification logic. If the paper has NO formal model,
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
