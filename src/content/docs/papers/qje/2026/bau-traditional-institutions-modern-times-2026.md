---
title: "Traditional Institutions in Modern Times: Bau, Khanna, Low & Voena (2026)"
description: >-
  Distilled: Using two new surveys on dowry property rights and a natural
  experiment from India's highway expansion, this paper finds that grooms'
  parents are more likely to be net takers when sons migrate, and that stronger
  historical dowry traditions predict higher male out-migration rates and larger
  responses to falling migration costs. The Quarterly Journal of Economics
  141(1), 2026, paywalled. Seventeen core results with source locators, datasets,
  the theoretical model, and empirical specifications.
sidebar:
  label: Bau-Khanna-Low-Voena 2026
  order: 1
tags: [paper-summary, development-economics, migration, marriage-markets,
       household-finance, cultural-economics, intergenerational-transfers,
       panel-regression, difference-in-differences, event-study,
       peer-reviewed, unreplicated,
       data:nss-india, data:giuliano-nunn-ancestral, data:reds-india,
       data:ihds-india, data:capex-cmie]
paper:
  authors: Natalie Bau, Gaurav Khanna, Corinne Low, Alessandra Voena
  authorList:
    - { family: Bau, given: Natalie, orcid: "0000-0001-6950-8839", affiliation: "University of California, Los Angeles" }
    - { family: Khanna, given: Gaurav, orcid: "0000-0002-6846-3437", affiliation: "University of California, San Diego" }
    - { family: Low, given: Corinne, orcid: "0000-0002-8157-6196", affiliation: "University of Pennsylvania" }
    - { family: Voena, given: Alessandra, affiliation: Stanford University }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 205-262
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf041
  jel:
    codes: [J12, J61, O12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Intergenerational Family Dynamics and Caregiving", "Demographic Trends and Gender Preferences"]
  dataAccess: licensed-commercial
  outcome:
    - probability of net dowry taking by grooms' parents
    - allocation of dowry property rights across family members
    - contemporary dowry payment size and liquidity
    - male out-migration rate
    - migration response to highway construction by strength of dowry tradition
  outcomeClass: [household-finance, labor-careers-health]
  license: >-
    All rights reserved. Published by Oxford University Press on behalf of
    President and Fellows of Harvard College. Crossref license record:
    CHORUS Standard Publication Model
    (https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model),
    content-version vor, start 2025-08-13, delay-in-days 0.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford Academic site, 2026-06-28)"
  redistribution: extract-only
  resultsCount: 17
  citedByCount: 4
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences, event-study]
    identification: natural-experiment
  contributionType: [new-theory, new-data, new-fact]
  mechanisms: [intergenerational-transfer-friction, risk-sharing, financial-constraint]
  introducesData: true
  scope:
    region: India
    period: 1996..2020
    frequency: mixed
    dataType: [survey, administrative]
    granularity: [individual, aggregate]
    n: "557 men (Destination Survey 2018); 3,069 sons from 2,541 households (Origin Survey 2020); 188,192 men in the NSS Round 64 Table III sample (table note says born after 1945; section text says ages 15-45)"
  findings:
    - { ref: R1, outcome: probability of net dowry taking by grooms' parents, metric: probability, value: "45% net takers Destination Survey; 27% Origin Survey (Online Appendix Tables A.1, A.2)", direction: mixed }
    - { ref: R2, outcome: probability of net dowry taking by grooms' parents, metric: pp-effect, value: "0.076** (se 0.038) Origin Survey col(1); 0.218** (se 0.086) Destination Survey col(3)", direction: positive, vsBenchmark: "non-migrant sons, coresidence and mar-year FE (Table I)" }
    - { ref: R3, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Migrant x ln(son occ. score) = 0.199** (se 0.090); nonmigrant x score = 0.014 (se 0.051), not significant (Origin Survey col(2))", direction: positive }
    - { ref: R4, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Migrant x parents have veto power = 0.229*** (se 0.076); nonmigrant x veto power = 0.221** (se 0.086) (Destination Survey col(4))", direction: positive }
    - { ref: R5, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Son transfers x migrant son = 0.176** (se 0.075) Origin Survey col(2)", direction: positive }
    - { ref: R6, outcome: male out-migration rate, metric: coefficient, value: "Continuous dowry = 0.0257** (se 0.0101) to 0.0451** (se 0.0199) across specifications (Table III cols 1-2)", direction: positive }
    - { ref: R7, outcome: migration response to highway construction by strength of dowry tradition, metric: pp-effect, value: "Large significant increase in out-migration for men aged 15-30 in dowry districts (above 0.1% cutoff); near-zero for non-dowry districts; no increase for men aged 31-45 (Figure VI)", direction: positive, vsBenchmark: "non-dowry districts (below 0.1% cutoff)" }
    - { ref: R8, outcome: allocation of dowry property rights across family members, metric: level, value: "Of gifts from bride's parents, groom's parents own 42.5%, groom 40.9%, bride 13.5% (Figure II, Panel A, p. 226)", direction: mixed }
    - { ref: R9, outcome: probability of net dowry taking by grooms' parents, metric: probability, value: "Migrants' parents took a larger share in almost every gift category and substantially more cash and jewelry; plotted means are not tabulated (Figure IV)", direction: positive, vsBenchmark: "nonmigrant sons who are not coresident" }
    - { ref: R10, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Parents of male migrants are more likely to be net takers regardless of whether the wife lives with the parents (Online Appendix Table A.7, discussed text p. 236; no coefficients reported in main text)", direction: positive }
    - { ref: R11, outcome: contemporary dowry payment size and liquidity, metric: coefficient, value: "A move in historical dowry measure from 0 to 1 is associated with 81% higher gross dowry and 109% higher net dowry; positive association remains with six-region fixed effects. Historical measure also predicts greater likelihood of dowry paid in gold (Online Appendix Tables A.8-A.9, discussed text p. 243)", direction: positive }
    - { ref: R12, outcome: male out-migration rate, metric: coefficient, value: "Dowry >0.1%: 0.0184** (se 0.0086), 0.0127 (0.0115), 0.0068 (0.0112); dowry >10%: 0.0213** (se 0.0088), 0.0296* (0.0174), 0.0246 (0.0175), with progressively fuller controls (Table III cols 4-9)", direction: positive }
    - { ref: R13, outcome: migration response to highway construction by strength of dowry tradition, metric: coefficient, value: "No pretrends in migration rates before highway construction in any Figure VI panel (text p. 251)", direction: none }
    - { ref: R14, outcome: migration response to highway construction by strength of dowry tradition, metric: pp-effect, value: "For men aged 15-30, the dowry-region increase is also present for employment-related migration; the text reports a large and significant increase, with plotted event-time estimates (Figure VI, Panel C, p. 252)", direction: positive, vsBenchmark: "non-dowry districts below the 0.1% cutoff" }
    - { ref: R15, outcome: migration response to highway construction by strength of dowry tradition, metric: pp-effect, value: "No strong intradistrict migration effect for either group; dowry-region migration effects are concentrated in interdistrict migration (Figure VII, discussed text pp. 252-253)", direction: mixed, vsBenchmark: "intradistrict migration and non-dowry districts" }
    - { ref: R16, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Son transfers x migrant son = 0.189** (se 0.085) with income controls (Table II col 4, p. 238)", direction: positive }
    - { ref: R17, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Using inverse hyperbolic sine of amount taken, migrant parents take 86% more in the Origin Survey and 250% more in the Destination Survey (Online Appendix Table A.4, discussed text p. 234)", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Munshi and Rosenzweig (2016)", doi: '10.1257/aer.20131365', relation: tests, note: "their finding that social networks restrict rural-urban migration; dowry relaxes the old-age support constraint that network lock-in exploits" }
    - { cite: "Anderson and Bidner (2015)", doi: '10.1093/qje/qjv014', relation: extends, note: "their model of property-rights reallocation over dowry; this paper adds migration decisions and provides first quantitative test" }
    - { cite: "Botticini and Siow (2003)", doi: '10.1257/000282803769206368', relation: builds-on, note: "their model of dowry as early bequest under patrilocality; this paper documents modern reallocation to grooms' parents as sons migrate" }
    - { cite: "Giuliano and Nunn (2018)", doi: '10.1080/20780389.2018.1435267', relation: builds-on, note: "their Ancestral Characteristics methodology; used here to construct district-level historical dowry tradition measures for India" }
    - { cite: "Borusyak, Jaravel, and Spiess (2024)", doi: '10.1093/restud/rdae007', relation: builds-on, note: "their imputation-based staggered event-study estimator used for the GQ highway natural experiment" }
  openQuestions:
    - "Whether expanding formal pension programs would make efforts to discourage dowry more successful; the conclusion suggests formal old-age support as a complement to these efforts (p. 256)."
    - "Whether the dowry-as-old-age-support channel applies in other low-income settings; the conclusion notes family social insurance and formal old-age support as constraints on migration in low-income countries (p. 256)."
  replicationCode:
    url: "https://doi.org/10.7910/DVN/XCNXQL"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full PDF read (pp. 205-262, 58 pages); seven core results extracted from Tables I-III and Figure VI. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all seven rows confirmed. Fixed: (1) 'counterintuitive' colorful adjective removed from R5; (2) T1 label corrected from 'Predictions 1-4' to 'Predictions 2 and 3' per Table I title; (3) T1 FE description corrected from 'coresidence × mar-year × age cells' (interaction) to two additive groups as shown in Table I." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added ten missing main-text results, findings entries, and complete main estimating specifications/equation locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 17 Core rows, equations, specifications, classification axes, findings, prose, frontmatter, and DOI edges against the PDF. Corrected quasi-exogeneity wording, an OLS overclaim, column-specific specification notation, R1 and R7 wording/locator, data-access tier, resultType, the TL;DR priority claim, open-question framing, and stale attribution; table locator checks showed no incorrect caption pages and supplementary-table locators were checked against cited main-text passages. The Table III PDF has an unresolved sample-description inconsistency: its note says born after 1945 while section text says ages 15-45. No headline result omissions found. Findings pass (2026-10-04): added the R8 finding." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf041", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license content-version=vor URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model delay-in-days=0 start=2025-08-13; artifact footer All rights reserved Oxford University Press on behalf of President and Fellows of Harvard College" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the household model, and the empirical specifications with the actual equations: enough to know what it found and how, without reading all 58 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf041).

## TL;DR

The paper introduces and tests the hypothesis that dowry in modern India functions as a pension for grooms' parents. When sons migrate for work, they can no longer provide traditional in-person old-age support; the liquidity from the bride's dowry lets families make upfront transfers to parents at the time of marriage, easing this intergenerational friction. Using two new surveys (Destination Survey 2018, Origin Survey 2020) with, to the authors' knowledge, the first quantitative evidence on property rights over dowry within families, the paper documents that 27-45% of grooms' parents are net takers from the dowry, especially when sons are migrants and earn more. In nationally representative NSS data, male migration rates are higher in districts with stronger historical dowry traditions (Giuliano and Nunn (2018) methodology). Exploiting the staggered construction of the Golden Quadrilateral (GQ) and North-South/East-West highway corridors as a natural experiment (Borusyak, Jaravel, and Spiess (2024) event-study estimator), young men (15-30) from dowry districts show significantly larger migration increases than those from non-dowry districts when migration costs fall.

## Core results

Magnitudes and significance as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Net dowry taking by grooms' parents is **common but heterogeneous**: some parents take, many give, distribution roughly centered at zero | Online Appendix Tables A.1, A.2; text and Figure III, p. 231 | 45% net takers (Destination Survey); 27% (Origin Survey); distribution of Net Transfers to Grooms' Parents spans both positive and negative, unlike gross/net dowry measures in the literature |
| R2 | **Migrant sons' parents are significantly more likely to take from the dowry** than non-migrant sons' parents | Table I cols (1) and (3), p. 232 | Origin Survey: migrant coefficient = 0.076\*\* (se=0.038); Destination Survey: 0.218\*\* (se=0.086); controlling for coresidence, marriage year, age, son/father education FE, and net dowry |
| R3 | **Higher-earning migrant sons' parents are more likely to take**: interaction of migration and son's occupational score is positive and significant | Table I col (2), p. 232 | Origin Survey: Migrant x ln(son occ. score) = 0.199\*\* (se=0.090); non-migrant x score = 0.014 (ns) |
| R4 | **Greater parental bargaining power (Pareto weight) is associated with more net taking** for both migrant and non-migrant sons | Table I col (4), p. 232 | Migrant x veto power = 0.229\*\*\* (se=0.076); Non-migrant x veto power = 0.221\*\* (se=0.086); consistent with dowry redistributing resources according to Pareto weights regardless of migration |
| R5 | **Sons who remit are more likely to have parents who took from the dowry** (Prediction 4: remittances signal high-Pareto-weight households that exhaust all transfer channels) | Table II col (2), p. 238 | Son transfers x migrant son = 0.176\*\* (se=0.075); robust to income controls |
| R6 | **Historical dowry traditions positively predict male out-migration rates** in NSS data | Table III cols (1)-(2), p. 246 | Continuous dowry = 0.0257\*\* (se=0.0101) to 0.0451\*\* (se=0.0199); remains positive controlling for state and birth-year FE, caste, ethnographic and geographic controls |
| R7 | **GQ highway construction raises out-migration significantly more for young men (15-30) in dowry districts** than in non-dowry districts; no increase for older men (31-45) | Figure VI, p. 252 | Large, significant post-construction increase in all and employment-based migration for men aged 15-30 in dowry districts (0.1% cutoff); coefficient near zero for non-dowry districts; Panel B shows no increase for ages 31-45 |
| R8 | **Dowry ownership is divided across generations**: parents of the groom and the groom each control a large share, while the bride retains a smaller share of her family's gifts | Figure II, Panel A, p. 226 | Of gifts from bride's parents, groom's parents own 42.5%, groom 40.9%, bride 13.5% |
| R9 | **Migrant sons' parents take more liquid dowry goods**, consistent with dowry serving as an intergenerational transfer channel | Figure IV, p. 235; Online Appendix Table A.5, discussed text p. 234 | Parents take a larger share in almost every item category and substantially more cash and jewelry; appendix analysis confirms increased shares of gold and cash, with no main-text coefficient reported |
| R10 | **The migration-net-taking association holds across where the wife lives**, addressing the alternative that the wife's location accounts for parents' control of dowry | Online Appendix Table A.7, discussed text p. 236 | Parents of migrant men are more likely to be net takers regardless of whether the wife lives with the groom's parents; no coefficient is reported in the main text |
| R11 | **Historical dowry traditions predict contemporary dowry payments and liquidity** | Online Appendix Tables A.8-A.9, discussed text p. 243 | Moving the historical measure from 0 to 1 is associated with 81% higher gross and 109% higher net dowry; the relationship remains positive with six-region FE, and historical dowry also predicts dowry being paid in gold |
| R12 | **The positive dowry-migration association is directionally robust across discrete tradition cutoffs**, but attenuates with fuller controls | Table III cols (4)-(9), p. 246 | >0.1% cutoff: 0.0184\*\* (se 0.0086), 0.0127 (0.0115), 0.0068 (0.0112); >10% cutoff: 0.0213\*\* (se 0.0088), 0.0296\* (0.0174), 0.0246 (0.0175) |
| R13 | **The highway event study shows no differential pretrends** before construction | Figure VI, discussed text p. 251 | The paper reports no pretrends in migration rates before GQ construction in any of the four panels |
| R14 | **The young men's highway response is driven by employment migration** | Figure VI, Panel C, p. 252 | For men aged 15-30, employment-based out-migration increases significantly in dowry districts after construction; the figure plots the estimates but the main text gives no point estimate |
| R15 | **The highway response in dowry districts is concentrated in interdistrict moves** | Figure VII, p. 253 | No strong intradistrict effect for either group; interdistrict migration effects are concentrated in dowry districts |
| R16 | **The remittance-net-taking relationship remains positive with flexible income controls** | Table II col. (4), p. 238 | Son transfers × migrant son = 0.189\*\* (se 0.085), including income controls and their interactions with remittance status |
| R17 | **Migration is also associated with the amount of dowry parents take**, not only whether they take a positive net amount | Online Appendix Table A.4, discussed text p. 234 | Using inverse hyperbolic sine of amount taken, parents take 86% more from migrant sons in Origin Survey and 250% more in Destination Survey |

**Overall (paper's conclusion).** All six model predictions are confirmed. Dowry appears to have adapted in modern India: rather than functioning purely as a bequest to daughters as in its traditional form described by Botticini and Siow (2003), it increasingly operates as a mechanism for sons' parents to secure resources at the time of marriage when sons migrate and can no longer co-reside and provide in-kind old-age support. Dowry traditions may therefore help explain why rural-urban migration in India remains below its aggregate-productivity-maximizing level as identified by Munshi and Rosenzweig (2016): areas with weaker dowry traditions face higher effective barriers to migration.

## Theory / model

The paper (Section III, pp. 215-223) develops a two-stage collective household model (Chiappori 1988) in which a family with parents and one son decides jointly over marriage gifts, old-age savings, and migration.

**Setup.** Parents have Pareto weight $$\theta(\mathbf{z}) \in (0,1)$$, where $$\mathbf{z}$$ are distribution factors (e.g., whether parents have veto power over the son's marriage). The son has Pareto weight $$1 - \theta(\mathbf{z})$$. Parents earn $$y_{1P}$$ in stage 1 (working age) and zero in stage 2 (retirement). The son earns zero in stage 1 and $$y_{2K}$$ in stage 2, plus a net return to migration $$R$$ if $$m = 1$$. The bride's endowment is $$E$$, of which a liquid fraction $$d \in [0,1]$$ is available as dowry at marriage (stage 1); the illiquid fraction $$(1-d) \cdot E$$ represents future inheritance or human capital. Migration introduces a friction $$\gamma > 0$$: transferring one unit $$\alpha$$ from the son to the parents costs $$(1 + \gamma \cdot m) \cdot \alpha$$ when $$m = 1$$.

**Household optimization.** The family solves (equation (1), p. 217):

$$
\max_{\substack{G \geq 0,\; S_1 \geq 0,\; \alpha \geq 0 \\ m \in \{0,1\},\; c_{2P} \geq 0,\; c_{2K} \geq 0}}
\theta(\mathbf{z}) \ln(c_{2P}) + (1 - \theta(\mathbf{z})) \ln(c_{2K}) \tag{1}
$$

subject to:

$$
S_1 + G \leq y_{1P} + d \cdot E
$$

$$
c_{2P} \leq S_1 + \alpha
$$

$$
c_{2K} \leq y_{2K} + (1-d) \cdot E + R \cdot m + G - (1 + \gamma \cdot m) \cdot \alpha
$$

Here $$G \geq 0$$ is the net marriage gift to the son (the son is a net taker when $$G < d \cdot E$$, i.e., parents retain $$d \cdot E - G > 0$$), $$S_1$$ is parents' savings, and $$\alpha \geq 0$$ is the son's stage-2 transfer to parents. Grooms' parents are **net takers** ($$d \cdot E > G$$) when the net transfer to them is positive.

**Solutions (pp. 218-219).** Three regimes arise when $$m = 1$$:

(i) *Marriage-gifts solution*: $$\alpha^* = 0$$, $$G^* > 0$$. Stage-1 resources are sufficient for parents to achieve their first-best consumption without costly stage-2 remittances. Migration does not distort allocation.

(ii) *Autarky solution*: $$\alpha^* = 0$$, $$G^* = 0$$. Stage-1 resources are in an intermediate range; parents exhaust them and the son sends nothing in stage 2.

(iii) *Remittances solution*: $$\alpha^* > 0$$, $$G^* = 0$$. Stage-2 resources are high enough relative to stage-1 to warrant costly remittances despite $$\gamma > 0$$.

In regimes (ii) and (iii), migration only occurs when $$R$$ exceeds a strictly positive threshold (the consumption distortion cost of migration). A larger $$d$$ (stronger dowry practice) lowers this threshold by pre-funding the stage-2 consumption shortfall at the cheaper stage-1 price, reducing the migration friction. This is the core mechanism: dowry practices enable migration by front-loading intergenerational transfers to the pre-migration stage, where the transfer cost is zero.

**Six testable predictions** (Section III.C, pp. 220-223):
1. Net transfers to grooms' parents can be positive or negative (heterogeneous across families).
2. Parents are more likely to be net takers when sons migrate.
3. Net taking is increasing in the migrant son's income and in the parental Pareto weight.
4. Parents who receive remittances from migrant sons are more likely to be net dowry takers.
5. Families in areas with stronger dowry practices (higher $$d$$) are more likely to have a migrant son.
6. A decline in migration cost increases migration more in areas with higher $$d$$ (when migration rates are low).

## Method

**Survey design (Section IV, pp. 223-230).** The paper introduces two original data sets on dowry property rights:

- *Destination Survey (2018)*: in-person interviews with 557 men aged 21-41 in Gurugram, stratified 20% Delhi natives and 80% migrants. Detailed gift-by-gift ownership questions for every item transferred at marriage, including who gave it and who holds property rights today, allowing construction of gross and net transfers to each family member.
- *Origin Survey (2020)*: phone interviews with 2,541 households in 34 districts of six Indian states (Rajasthan, Uttar Pradesh, Bihar, Jharkhand, Madhya Pradesh, Maharashtra). Random sample of one married son per household, oversampling migrants (70%/30%); yielded data on 3,069 sons.

Net transfers to grooms' parents are defined as: gross transfers received by grooms' parents minus gross transfers made by grooms' parents to other parties (p. 225). Grooms' parents are net takers when this quantity is positive.

**Historical dowry traditions (Section V.A, pp. 239-243).** Following Giuliano and Nunn (2018), the paper constructs a district-level measure of the share of the current population belonging to linguistic groups with historical dowry practices, drawing on ethnographic data from the Murdock (1967) *Ethnographic Atlas* combined with current language group maps from the *Ethnologue* and LandScan population weights. Districts are coded as high-dowry when the measure exceeds 0.1% (368 of 582 districts).

**Highway natural experiment (Section V.D.2, pp. 248-251).** The paper exploits the staggered construction of the Golden Quadrilateral and NS-EW highway corridors (1999-2016, ~5,846 km) as a quasi-exogenous reduction in migration costs across districts and years. Highway project timing and district location are matched from the NHDP project list to the CMIE CapEx database. The staggered event-study estimator of Borusyak, Jaravel, and Spiess (2024) is used (doubly-robust estimator; Callaway and Sant'Anna (2021) as robustness). Standard errors are wild-bootstrapped and clustered at the district level.

## Empirical specifications

**Predictions 2 and 3: OLS on the net-taker indicator (Table I, p. 232).** The paper estimates the following column-specific regressions for sons $$h$$ in survey $$s$$:

$$
\text{NetTaker}_{hs} = \alpha + \beta_1 \text{Migrant}_{hs} + \beta_2[\text{Migrant}_{hs} \times \ln(\text{SonOccScore}_{hs})] + \beta_3[\text{Nonmigrant}_{hs} \times \ln(\text{SonOccScore}_{hs})] + \beta_4[\text{Migrant}_{hs} \times \text{VetoPower}_{hs}] + \beta_5[\text{Nonmigrant}_{hs} \times \text{VetoPower}_{hs}] + \mathbf{X}_{hs}\boldsymbol{\gamma} + \varepsilon_{hs} \tag{T1}
$$

Columns (1)-(4) include the terms relevant to each test, not all interactions together. The fixed effects are coresidence, marriage year, and age; controls include father education dummies and net-dowry quadratic in every column, son education dummies except column (2), and the veto control in column (3). Column (4) uses the parental-veto interactions instead of a separate veto control. The Origin Survey sample is 1,802 observations in column (1) and 1,251 in column (2); the Destination Survey sample is 552 in columns (3)-(4). The Table I note reports household-clustered standard errors for the Origin Survey; it does not state a separate clustering rule for the Destination Survey.

**Prediction 4: remittances and net-taking (Table II, p. 238).** For the Origin Survey:

$$
\text{NetTaker}_{hs} = \alpha + \beta_1 \text{SonTransfers}_{hs} + \beta_2 \text{Migrant}_{hs} + \beta_3[\text{SonTransfers}_{hs} \times \text{Migrant}_{hs}] + \mathbf{X}_{hs}\boldsymbol{\gamma} + \varepsilon_{hs} \tag{T2}
$$

The regression shown summarizes columns (2) and (4), which include the migrant indicator and its interaction with transfers; columns (1) and (3) include the transfers indicator without those migration terms. Columns (3)-(4) add income controls, and column (4) also interacts them with the remittance indicator. All columns include coresidence, marriage-year and age fixed effects, son and father education dummies. The samples are 1,098 observations in columns (1)-(2) and 946 in columns (3)-(4); standard errors are clustered at the household level, as stated in the Table II note.

**Prediction 5: dowry traditions and migration (Table III, p. 246).** For men in the NSS Round 64 cross-section:

$$
\text{Migrated}_{ids} = \beta \text{DowryMeasure}_{d} + I_{FE}(\delta_s + \delta_{b(i)}) + I_{full}\mathbf{X}_{ids}\boldsymbol{\gamma} + \varepsilon_{ids} \tag{T3}
$$

Here $$d$$ is district, $$s$$ is state, and $$b(i)$$ is birth year; $$I_{FE}$$ marks columns with state and birth-year fixed effects, and $$I_{full}$$ marks the fully controlled columns. The paper substitutes the continuous historical population-share measure and the binary cutoffs above 0.1% or 10%. Columns (1), (4), and (7) include neither fixed effects nor controls; columns (2), (5), and (8) add state and birth-year fixed effects; columns (3), (6), and (9) additionally control for caste fixed effects, ethnographic traits, household-head education, and district geography. The sample is men born after 1945 per the Table III note (the section text describes men aged 15-45), with 188,192 observations in columns (1)-(2), (4)-(5), and (7)-(8), and 184,322 in the fully controlled columns. Standard errors are clustered by district (Table III note).

**Prediction 6: GQ highway event study (Equation (2), p. 249).** The conventional event-study specification for individual $$i$$, age $$a$$, state $$j$$, district $$d$$, year $$t$$ is:

$$
y_{iajdt} = \alpha_i + \theta_{jt} + \delta_a + \sum_s \beta_s GQ_{dts} + X_{iajdt}\gamma + \varepsilon_{iajdt}. \tag{2}
$$

The authors use the Borusyak, Jaravel, and Spiess (2024) imputation estimator for reported event-study results, separately by dowry status, age group, and outcome (all migration or employment migration; Figures VI-VII, pp. 252-253). The controls include individual, age, and state-by-year fixed effects; specifications may add geographic and cultural trends, caste-by-year effects, and household-consumption trends. The event-study sample is individual-year observations from 1996-2007; in GQ districts, men must be aged 13-45 when the project arrives. The plotted groups are ages 15-30 and 31-45 in 2007. Standard errors are clustered at the district level; the omitted event time is the earliest pretreatment period. The paper also reports a doubly robust Callaway-Sant'Anna estimator with wild-bootstrap district-clustered standard errors as a robustness check (text pp. 250, 254).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Author Destination Survey 2018 (Gurugram) | Primary survey: property rights over dowry items for 557 male migrants and non-migrants; net transfers to grooms' parents (Predictions 1-4) | No page yet (hand-collected) |
| Author Origin Survey 2020 (6 Indian states) | Primary survey: phone interviews with 2,541 households, 3,069 married sons; dowry allocation and migration by same-origin comparison (Predictions 1-4) | No page yet (hand-collected) |
| NSS Round 64 (2007-08 migration module) | Nationally representative individual-level migration data; the Table III note reports 188,192 men born after 1945 while the section text describes ages 15-45; tests Predictions 5 and 6 | No page yet ([data:nss-india](/wiki/tags/)) |
| Giuliano-Nunn Ancestral Characteristics | District-level share of population with historical dowry tradition; constructed from Murdock (1967) Ethnographic Atlas + Ethnologue language maps | No page yet ([data:giuliano-nunn-ancestral](/wiki/tags/)) |
| REDS 1999 (NCAER) | Validation of historical dowry measure against contemporary dowry payment size | No page yet ([data:reds-india](/wiki/tags/)) |
| IHDS 2005 and 2011-12 | Validation of historical dowry measure (gold payment likelihood); robustness tests for migration predictions | No page yet ([data:ihds-india](/wiki/tags/)) |
| CapEx (CMIE, 2023) | Infrastructure project timing and district location for GQ and NS-EW highway segments; matched to NHDP project list | No page yet ([data:capex-cmie](/wiki/tags/)) |

Sample periods: Destination Survey 2018, Origin Survey 2020, NSS migration 1996-2007, CapEx highway projects 1999-2016.

## When to read the full paper

Use the [original](https://doi.org/10.1093/qje/qjaf041) if you are: (i) studying how traditional institutions adapt to economic development (the mechanism literature building on Botticini and Siow (2003) and Anderson and Bidner (2015)); (ii) working on migration frictions in low-income countries, particularly the role of old-age support constraints identified by Munshi and Rosenzweig (2016); (iii) applying staggered event-study methods to infrastructure programs in developing countries; (iv) using the Giuliano and Nunn (2018) Ancestral Characteristics methodology for India; or (v) replicating the dowry property-rights surveys (replication data at Harvard Dataverse, DOI above). Tables I-III and Figure VI contain the headline numbers; Online Appendix B.5 details survey construction.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. This machine-generated distillation was updated on 2026-10-04 and is **not human-verified or independently reproduced**. The paper is paywalled; all rights reserved by Oxford University Press on behalf of President and Fellows of Harvard College. No PDF is hosted here.

> Bau, Natalie, Gaurav Khanna, Corinne Low, and Alessandra Voena. "Traditional Institutions in Modern Times: Dowries as Pensions When Sons Migrate." *The Quarterly Journal of Economics* 141, no. 1 (2026): 205-262. DOI: 10.1093/qje/qjaf041.
