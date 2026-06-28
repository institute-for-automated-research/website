---
title: "Marginal Returns to Public Universities: Mountjoy (2026)"
description: >-
  Distilled: Using a fuzzy regression discontinuity design across hundreds of SAT/ACT
  admission cutoffs at all 35 Texas public universities, this paper establishes that
  marginal admission raises four-year credits by one year, BA completion by 12 percentage
  points, and earnings by 8.6%; internal rates of return are 26% for students and 16% for
  society. QJE 2026, CC BY 4.0. Nine core results with source locators, datasets used,
  the RD design with equations, and the intensive/extensive margin bounding method.
sidebar:
  label: Mountjoy 2026
  order: 1
tags: [paper-summary, education-economics, returns-to-education, higher-education,
       regression-discontinuity, natural-experiment, open-access, cc-by, peer-reviewed,
       unreplicated, data:utd-erc, data:ipeds, data:national-student-clearinghouse]
paper:
  authors: Jack Mountjoy
  authorList:
    - { family: Mountjoy, given: Jack, affiliation: "University of Chicago Booth School of Business and National Bureau of Economic Research" }
  year: 2026
  venue: "The Quarterly Journal of Economics 141(1), 2026, 429-497"
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf055
  jel:
    codes: [H75, I23, I26, J24]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Higher Education Research Studies", "Innovations in Educational Methods", "Occupational and Professional Licensing Regulation"]
  dataAccess: proprietary-confidential
  outcome:
    - bachelor's degree completion rate
    - log earnings (8-12 years after application)
    - annual earnings
    - earnings rank
    - four-year college credits accumulated
  outcomeClass: [educational-achievement, labor-careers-health]
  license: >-
    CC BY 4.0. Published by Oxford University Press on behalf of President and Fellows of
    Harvard College. Open Access article distributed under the Creative Commons Attribution
    License (https://creativecommons.org/licenses/by/4.0/), which permits unrestricted
    reuse, distribution, and reproduction in any medium, provided the original work is
    properly cited.
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "CC BY 4.0 open access; available at https://doi.org/10.1093/qje/qjaf055 (2026-06-28)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 9
  citedByCount: 4
  methods:
    role: both
    contributes: extensive-intensive-margin-bounds
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, partial-identification-bounds]
    identification: rdd
  contributionType: [new-fact, measurement, new-method]
  scope:
    region: US (Texas)
    period: 2004..2025
    frequency: annual
    dataType: [administrative]
    granularity: [individual]
    n: "RD sample: 234,271 applicants for education outcomes; 200,456 for earnings outcomes; 2.7M TX public high school graduates 2004-2014"
  findings:
    - { ref: R1, outcome: four-year college credits accumulated, metric: coefficient, value: "28.4 credits (se=3.0); untreated complier mean=64.7", direction: positive }
    - { ref: R2, outcome: bachelor's degree completion rate, metric: pp-effect, value: "12 pp (LATE=0.119, se=0.026); untreated mean=0.406", direction: positive, vsBenchmark: "vs. 40.6% baseline BA completion (untreated complier mean)" }
    - { ref: R3, outcome: "log earnings (8-12 years after application)", metric: coefficient, value: "0.086 (se=0.032), pooled years 8-12", direction: positive }
    - { ref: R4, outcome: annual earnings, metric: level, value: "$3,339 per year (se=1,288); untreated mean=$40,829", direction: positive, vsBenchmark: "8.2% of untreated complier mean earnings" }
    - { ref: R5, outcome: earnings rank, metric: coefficient, value: "4.1 percentile points (se=1.4); untreated mean=52.4", direction: positive }
    - { ref: R6, outcome: internal rate of return, metric: irr, value: "26% for students, 16% for society, 7% for government; NPV at 3% discount rate: $70,000 student, $80,000 social", direction: positive }
    - { ref: R7, outcome: "log earnings (8-12 years after application)", metric: coefficient, value: "slope vs. SAT selectivity: -0.000 (se=0.019); no systematic earnings difference across institutional selectivity", direction: none }
    - { ref: R8, outcome: annual earnings, metric: level, value: "LATE near zero for FRPL-eligible (low-income) compliers 8-12 years out; point estimate indistinguishable from zero", direction: none }
    - { ref: R9, outcome: bachelor's degree completion rate, metric: pp-effect, value: "Extensive-margin LATE bounds: [20, 25] pp; Intensive-margin LATE bounds: [4, 7] pp", direction: positive, vsBenchmark: "pooled LATE = 12 pp; extensive margin drives the majority of the pooled effect" }
  resultType: new-finding
  relatesTo:
    - { cite: "Hoekstra (2009)", doi: '10.1162/rest.91.4.717', relation: builds-on, note: "first U.S. flagship university earnings RDD; finds 20% gain but for students with 3 additional years vs. 1 year here" }
    - { cite: "Zimmerman (2014)", doi: '10.1086/676661', relation: builds-on, note: "Florida International University RDD; finds 22% gain but compliers gain ~3 years of additional four-year enrollment" }
    - { cite: "Kozakowski (2023)", relation: extends, note: "Massachusetts statewide SAT/GPA thresholds at least-selective state universities; extends to a broader and more diverse TX public university sector" }
    - { cite: "Goodman, Hurwitz, and Smith (2017)", doi: "10.1086/690818", relation: extends, note: "Georgia statewide cutoffs for enrollment effects only; this paper adds earnings, cost-benefit, and heterogeneity analysis" }
    - { cite: "Smith, Goodman, and Hurwitz (2025)", doi: "10.3368/jhr.0324-13461R2", relation: extends, note: "same Georgia data with credit scores as predicted earnings proxy; this paper uses actual long-run earnings" }
    - { cite: "Bleemer (2024)", doi: '10.3386/w33269', relation: extends, note: "California UC top-four-percent policy targets primarily intensive margin; this paper develops bounding to separate intensive and extensive contributions" }
    - { cite: "Carneiro, Heckman, and Vytlacil (2011)", doi: '10.1257/aer.101.6.2754', relation: builds-on, note: "marginal treatment effects and heterogeneity in returns to education; motivates LATE interpretation and importance of the extensive margin" }
    - { cite: "Barrow and Malamud (2015)", doi: '10.1146/annurev-economics-080614-115510', relation: builds-on, note: "documents the scarcity of credible causal evidence on college returns; this paper provides large-scale quasi-experimental estimates" }
  openQuestions:
    - "Whether positive net returns persist for infra-marginal admissions expansions: students with weaker academic preparation may gain less, or per-student costs may rise due to capacity constraints or more costly remedial education (p. 491)."
    - "Whether the roughly flat earnings-selectivity gradient masks heterogeneity at longer horizons, given suggestive evidence that more-resourced institutions generate larger earnings gains in dollar units (Online Appendix Figure A.19)."
  replicationCode:
    url: "https://doi.org/10.7910/DVN/RMSRWB"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Full PDF read (pp. 429-497); nine core results extracted from Tables I-II and Figures VIII-XV. CC BY 4.0 licence confirmed via Crossref (content-version=vor, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-10) and PDF pp. 1 and 497. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all nine Core results rows confirmed against Table II (p. 463) and Figures VI, VIII, X, XII, XIII, XIV, XV; equations (1) and (2) match term-for-term; first-stage F=2,024 confirmed p. 446; two fixes applied: H75 added to JEL codes (paper lists H75, I23, I26, J24 on p. 429); introducesData removed (paper links existing administrative datasets, no new source introduced)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf055", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-10; CC BY notice confirmed on PDF pp. 1 and 497" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification design with its key equations, and the intensive/extensive margin bounding method: enough to know what it found and how without reading all 69 pages. To replicate or extend it, read the full source at [https://doi.org/10.1093/qje/qjaf055](https://doi.org/10.1093/qje/qjaf055).

## TL;DR

Barrow and Malamud (2015) documented the scarcity of credible causal evidence on the returns to college, and Carneiro, Heckman, and Vytlacil (2011) showed that marginal returns to education may be heterogeneous across individuals. This paper addresses both gaps. It assembles a large collection of decentralized SAT/ACT admission score cutoffs at all 35 Texas public universities and links them to administrative records on high school preparation, college trajectories, and long-run quarterly earnings. A fuzzy regression discontinuity (RD) design compares barely admitted versus barely rejected applicants at each cutoff. Marginally admitted students gain roughly one additional year of four-year college credits, become 12 percentage points more likely to ever earn a bachelor's degree, and earn 8.6% more than their marginally rejected counterparts eight to twelve years out. Grant aid nearly fully offsets the additional tuition cost, so marginally admitted students pay essentially no additional net tuition. A formal cost-benefit analysis finds internal rates of return of 26% for students, 16% for society, and 7% for the government. Earnings gains are uniform across institutions of widely varying selectivity, while students from low-income families reap smaller earnings gains, driven by lower degree completion, more time enrolled, and majoring in less lucrative fields. Finally, a novel bounding method reveals that the pooled gains are driven primarily by students who would not have enrolled in any four-year college if rejected (the extensive margin), with a smaller contribution from students who would have attended a less selective four-year institution (the intensive margin).

## Core results

Magnitudes are as reported; all estimates use the main fuzzy RD specification of Section II.D. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Marginal admission increases cumulative four-year credits by 28.4 (roughly 1 full year of four-year education) | Table II, p. 463; Figure VI, p. 456 | LATE = 28.4 credits (se = 3.0); untreated complier mean = 64.7 credits; net gain in two-year credits = -15.5 (se = 1.9) |
| R2 | Marginal admission raises the probability of ever earning a BA by 12 pp | Table II, p. 463; Figure VI, p. 456 | LATE = 0.119 (se = 0.026); untreated complier mean = 0.406; effect is entirely in non-STEM fields (Figure VII, p. 458) |
| R3 | Log earnings gain of 8.6% (pooled 8-12 years after application) | Table II, p. 463; Figure VIII, p. 460 | LATE = 0.086 (se = 0.032); crossover from negative to positive earnings effects at year 6 |
| R4 | Annual dollar earnings premium of $3,339 (8-12 years out) | Table II, p. 463; Figure VIII, p. 460 | LATE = $3,339 (se = 1,288); untreated mean = $40,829; 8.2% of baseline mean |
| R5 | Earnings rank gain of 4.1 percentile points in statewide distribution | Table II, p. 463; Figure VIII, p. 460 | LATE = 4.1 pp (se = 1.4); untreated mean = 52.4; from about the 50th to the 54th percentile |
| R6 | Zero additional net tuition; private IRR of 26%, social IRR of 16%, taxpayer IRR of 7% | Online Appendix Figure A.13; Figure X, p. 469 | Net tuition LATE ≈ $0 (grant aid offsets $4,600 gross tuition increase); NPV at 3%: $70,000 student, $80,000 social; society payoff horizon: 11 years, taxpayer: 19 years |
| R7 | No systematic earnings difference across institution selectivity | Figure XII, p. 477 | Log-earnings slope per 100 SAT points of selectivity = -0.000 (se = 0.019); dollar-earnings slope weakly positive but not significant; selectivity predicts peer earnings gain (\~$3,000 per 100 SAT) but not complier own-earnings gain (\~$900 per 100 SAT, insignificant) |
| R8 | Low-income (FRPL-eligible) compliers experience near-zero earnings gains 8-12 years out | Figure XIII, p. 480 | Point estimate for FRPL group indistinguishable from zero; non-FRPL gains are positive and significant; difference driven by fewer degrees, more time enrolled, and less lucrative majors |
| R9 | Extensive-margin BA completion effect is 20-25 pp; intensive-margin effect is only 4-7 pp | Figure XIV, p. 486; Figure XV, p. 489 | A₀=0 group (93% extensive-margin) LATE bounds: [20, 25] pp; A₀=1 group (71% intensive-margin) LATE bounds: [4, 7] pp; extensive margin drives the majority of the pooled 12 pp effect |

**Overall (paper's conclusion).** Marginal admission to U.S. public universities generates large and positive returns for students, society, and taxpayers, even after accounting for the costs of additional education and the long delay before earnings gains materialize. The returns are broadly similar across institutions of varying selectivity, but smaller for students from low-income families. The predominance of extensive-margin gains suggests that the returns are primarily from expanding access to any four-year institution rather than from upgrading to a more selective one.

## Theory / model

The paper has no structural economic model. The key parameter of interest is the local average treatment effect (LATE) of enrolling at a target public university for marginal applicants who enroll if and only if they barely cross the admission cutoff.

**Potential outcomes setup (Section II.D, p. 449).** Let D indicate whether applicant i enrolls at the target university. Define $$Y_1$$ as the potential outcome if enrolled and $$Y_0$$ if not. The applicant's concorded test score serves as the running variable R, with c the admission cutoff for a given application cell. The marginal applicants are those with $$R = c$$; among them, $$D_1(c) = 1$$ (would enroll if admitted) and $$D_0(c) = 0$$ (would not enroll if rejected) defines the complier population. The parameter of interest is:

$$
\text{LATE} = \mathbb{E}[Y_1 - Y_0 \mid R = c,\; D_1(c) = 1,\; D_0(c) = 0]
$$

This is identified by the fuzzy RD estimand (equation 1, p. 449):

$$
\text{LATE} = \frac{\lim_{r \downarrow c} \mathbb{E}[Y \mid R=r] - \lim_{r \uparrow c} \mathbb{E}[Y \mid R=r]}{\lim_{r \downarrow c} \mathbb{E}[D \mid R=r] - \lim_{r \uparrow c} \mathbb{E}[D \mid R=r]} \tag{1}
$$

Four standard assumptions justify this (Hahn, Todd, and Van der Klaauw (2001); Dong (2018)): (i) first-stage relevance (Figure III bottom panel, p. 446: first-stage LATE = 0.150, F = 2,024); (ii) continuity of conditional expectations of unobservables through the cutoff; (iii) monotonicity (cutoff-crossing weakly increases enrollment); and (iv) the exclusion restriction (cutoff-crossing affects outcomes only through initial enrollment at the target university). The smooth density of applicants and their pre-college characteristics through the cutoffs supports assumption (ii) (Figure IV, p. 447).

The pooled estimand identified by pooling all application cells is a weighted average of cell-specific LATEs, with more weight on cells where applicants at the cutoff are more numerous and more likely to be compliers (Cattaneo et al. (2016), p. 450).

**Identified hypotheses.** The paper tests three conceptually distinct questions: (1) Does marginal admission increase four-year educational attainment? (2) Does it generate long-run earnings gains that exceed the costs of additional education? (3) Are the effects driven by the extensive margin (first access to four-year college) or the intensive margin (upgrading selectivity)? These are tested sequentially across Sections III, IV, and VII respectively.

## Method

**Cutoff inference (Section II.B-C, pp. 441-443).** Because publicly posted admissions criteria may differ from operative criteria and invite strategic manipulation, cutoffs are inferred from the data. For each of roughly 700 application cells (university × year × high-school GPA quartile × test type), local linear regressions are estimated at each distinct test-score value and the cutoff is defined as the value producing the largest discontinuity in admission and enrollment. Porter and Yu (2015) show this yields a superconsistent estimator of the true cutoff, leaving the asymptotic distribution of the second-stage RD estimator unaffected. The procedure identifies cutoffs distributed across the full SAT/ACT score range (Figure I, p. 444).

**Intensive/extensive margin bounding method (Section VII, p. 484-489).** This builds on `partial-identification-bounds` from Manski and Pepper (2000) and the complier-describing logic of Abadie (2002). Let $$A \in \{0, 1\}$$ indicate whether a given applicant has any other Texas public university admission offer. The pooled LATE decomposes as (equation 2, p. 485):

$$
\mathbb{E}[Y_1 - Y_0 \mid D_0=0, D_1=1] = \omega\, \mathbb{E}[Y_1-Y_0 \mid D_0=0, D_1=1, A_0=1] + (1-\omega)\,\mathbb{E}[Y_1-Y_0 \mid D_0=0, D_1=1, A_0=0] \tag{2}
$$

where $$\omega$$ is the share of cutoff compliers with $$A_0 = 1$$ (another four-year option available) and $$(1-\omega)$$ is the share with $$A_0 = 0$$ (no other four-year option). Since $$A_0$$ is a latent type (endogenous to cutoff-crossing), the paper imposes a rank assumption: A-always-takers have weakly better treated potential outcomes than A-compliers, who have weakly better outcomes than A-never-takers. This assumption is supported by observed covariate patterns (Figure XIV top right panel, p. 486) and yields sharp bounds on the separate intensive- and extensive-margin LATEs (Figure XV, p. 489).

## Empirical specifications

All specifications follow Section II.D (pp. 449-450) and use the `regression-discontinuity-design` approach. The running variable for each applicant is her concorded test score minus the admission cutoff of her target application cell, with SAT scores divided by 40 to convert to ACT units for pooled estimation.

**Main RD specification (all results, R1-R8).** For outcome Y measured at a given year:

$$
Y_{iac} = \alpha_{ac} + \gamma_{ac}^{-} R_{iac} \cdot \mathbf{1}[R_{iac} < 0] + \beta_{\text{RF}} \cdot \mathbf{1}[R_{iac} \geq 0] + \gamma_{ac}^{+} R_{iac} \cdot \mathbf{1}[R_{iac} \geq 0] + \varepsilon_{iac}
$$

where $$\alpha_{ac}$$ are application-cell fixed effects, $$\gamma_{ac}^{-}$$ and $$\gamma_{ac}^{+}$$ are cell-specific running-variable slopes on each side of the cutoff, and $$\beta_{\text{RF}}$$ is the reduced-form discontinuity. The bandwidth is 3 concorded ACT points (approximately 120 SAT points) with a triangular kernel. Standard errors are clustered at the applicant level (Kolesár and Rothe (2018)). The first-stage regression substitutes D (enrollment at the target university) for Y:

$$
D_{iac} = \alpha_{ac}^D + \gamma_{ac}^{D-} R_{iac} \cdot \mathbf{1}[R_{iac} < 0] + \pi \cdot \mathbf{1}[R_{iac} \geq 0] + \gamma_{ac}^{D+} R_{iac} \cdot \mathbf{1}[R_{iac} \geq 0] + u_{iac}
$$

with $$\hat\pi = 0.150$$ (se = 0.003; F = 2,024, Figure III, p. 446). The LATE is $$\widehat{\text{LATE}} = \hat\beta_{\text{RF}} / \hat\pi$$. No additional control variables are required; the estimates are very similar when adding the full suite of pre-college covariates.

**Pooling across application cells.** The running variable is normalized to zero at each cutoff, and application-cell fixed effects $$\alpha_{ac}$$ absorb all between-cell variation. The pooled estimand is a precision-weighted average of cell-specific LATEs (Cattaneo et al. (2016)); cells with a more numerous and more complier-dense pool at the cutoff receive more weight.

**Earnings stacked panel (R3-R5, R7-R8).** For earnings outcomes over years 8-12, a long panel is constructed with one observation per individual per year. Year indicators are interacted with cell fixed effects and slopes; the coefficient on $$\mathbf{1}[R_{iac} \geq 0]$$ in this pooled specification delivers a precision-weighted average of the year-specific LATEs (Section III.C, p. 461, footnote 17).

**Intensive/extensive margin specification (R9).** Two separate fuzzy RD regressions replace Y and D with interactions involving the stratifier $$A$$ (whether the applicant has any other Texas public university offer). A series of RD regressions on $$Y$$, $$D$$, and $$A$$ interactions identifies the observable mean potential outcomes; the rank assumption then bounds the unobservable components (Online Appendix C; Figure XIV, p. 486).

**Covariate balance and density tests.** Figure IV (p. 447) verifies: (i) no discontinuity in log application density (McCrary (2008) test: RD estimate = 0.005, se = 0.011); (ii) smooth covariate-predicted BA completion through the cutoff (estimate = -0.0013, se = 0.0012); (iii) smooth covariate-predicted earnings through the cutoff (estimate = 19, se = 63). Specification checks across 12 alternative bandwidth and polynomial choices confirm robustness (Online Appendix Figure A.11).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Texas administrative education records via UT-Dallas Education Research Center (UT-Dallas ERC): Texas Education Agency (TEA) high school records and Texas Higher Education Coordinating Board (THECB) college application, admission, and enrollment records | Running variable (SAT/ACT scores), admission decisions, enrollment trajectories, credit accumulation, degree completion, financial aid - 35 TX public universities, cohorts 2004-2014 | No page yet |
| Texas Workforce Commission (TWC) quarterly earnings records | Labor market earnings outcomes, 8-12+ years post-application; quarterly "sandwich" earnings measure | No page yet |
| IPEDS (Integrated Postsecondary Education Data System, NCES) | Institution-level per-student expenditures, tuition sticker prices, for cost-benefit analysis | No page yet |
| National Student Clearinghouse (NSC) | College enrollment records outside Texas for 2008-2014 cohorts (two-thirds of sample), to verify no college enrollment elsewhere | No page yet |

Sample: Texas public high school graduates 2004-2014; RD bandwidth yields 234,271 applicants for education outcomes and 200,456 applicants for earnings outcomes. Earnings outcomes are available for a 12-year post-application window; cost outcomes lag by one year and are observed for 9-year balanced panels.

## When to read the full paper

Read [the original](https://doi.org/10.1093/qje/qjaf055) if you need: the full battery of specification checks across bandwidths, polynomial forms, and cutoff definitions (Online Appendix Figures A.10-A.12); the institution-by-institution and demographic-subgroup heterogeneity results with confidence intervals (Figures XI-XIII); the detailed cost-benefit accounting under alternative assumptions about room and board, earnings growth, and life-cycle extrapolation (Online Appendix Figures A.15-A.18); the formal exposition of the intensive/extensive margin bounding method and its proofs (Online Appendix C); or the comparison with prior estimates from Hoekstra (2009), Zimmerman (2014), Kozakowski (2023), Goodman, Hurwitz, and Smith (2017), Bleemer (2024), and Smith, Goodman, and Hurwitz (2025) reconciling this paper's smaller effect sizes with their larger estimates via differences in treatment size and institution type (Section III.D, pp. 463-465). The locators in the Core results table above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Mountjoy, Jack. "Marginal Returns to Public Universities."
> *The Quarterly Journal of Economics* 141, no. 1 (2026): 429-497.
> DOI: 10.1093/qje/qjaf055. Copyright The Author(s) 2025. Published by Oxford University
> Press on behalf of President and Fellows of Harvard College.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
