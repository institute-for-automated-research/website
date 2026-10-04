---
title: "Financial Consequences of Pretrial Detention: Slutzky & Xu (2025)"
description: >-
  Distilled: Using quasi-random assignment of court commissioners in Maryland as
  an instrument, this paper finds that pretrial detention causally raises
  household insolvency rates, driven by chapter 7 bankruptcy, judgment liens,
  and foreclosures in areas of declining house prices, with effects spilling
  over to family members rather than defendants themselves. Review of Financial
  Studies 2025, paywalled. Twenty core results with source locators, datasets
  used, the identification strategy, and the estimating equations.
sidebar:
  label: Slutzky-Xu 2025
  order: 1
tags: [paper-summary, household-finance, criminal-justice, bankruptcy, foreclosure,
       panel-regression, instrumental-variables, peer-reviewed, unreplicated,
       data:maryland-judiciary, data:pacer-bankruptcy, data:ztrax]
paper:
  authors: Pablo Slutzky, Sheng-Jun Xu
  authorList:
    - { family: Slutzky, given: Pablo, orcid: "0009-0008-3065-9769", affiliation: University of Maryland }
    - { family: Xu, given: Sheng-Jun, orcid: "0000-0002-3852-3953", affiliation: University of Alberta }
  year: 2025
  venue: The Review of Financial Studies 38(11), November 2025, 3329–3373
  venueShort: Rev. Financ. Stud. 2025
  doi: 10.1093/rfs/hhaf009
  jel:
    codes: [D14, G51, K35, K42]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-06
  topics: [Criminal Justice and Corrections Analysis]
  dataAccess: licensed-commercial
  outcome:
    - household chapter 7 bankruptcy rate
    - judgment lien rate
    - household foreclosure rate
    - overall household insolvency rate
    - pretrial case outcomes
    - probability of pretrial release
    - case and prior-insolvency covariates
    - use of bail bonds
  outcomeClass: [household-finance, credit-risk]
  license: "OUP standard publication reuse rights (not CC); confirmed via Crossref DOI metadata: content-version vor, URL https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days 0, start 2025-01-30"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford Academic site, 2026-06-06)"
  redistribution: extract-only
  resultsCount: 20
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression]
    identification: instrument
  contributionType: [new-fact, new-data]
  introducesData: true
  mechanisms: [financial-constraint, liquidity]
  scope:
    region: US
    assetClass: household balance sheets
    period: 2000-01..2016-12
    frequency: mixed
    dataType: [administrative]
    granularity: [individual]
    n: "over 500,000 criminal cases in Maryland District Courts, 2000-2016"
  findings:
    - ref: R1
      outcome: household chapter 7 bankruptcy rate
      metric: pp-effect
      value: "+0.79 pp at 3-year horizon (Table 5, col 5); 30% of baseline mean of 2.65%"
      direction: positive
      vsBenchmark: "null result for chapter 13 bankruptcy across all horizons"
    - ref: R2
      outcome: judgment lien rate
      metric: pp-effect
      value: "+0.56 pp at 3-year horizon (Table 6, col 5); 35% increase relative to sample mean of 1.6%"
      direction: positive
    - ref: R3
      outcome: household foreclosure rate
      metric: pp-effect
      value: "Null in full sample (Table 7A); +2.9 pp at 3-year horizon in negative-HPI subsample (Table 7B, col 5); 23% of mean"
      direction: mixed
      vsBenchmark: "null in positive-HPI subsample, consistent with home equity acting as liquidity buffer"
    - ref: R4
      outcome: overall household insolvency rate
      metric: pp-effect
      value: "+2.4 pp at 3-year horizon (Table 8, col 5); 16% increase relative to mean of 14.8%"
      direction: positive
    - ref: R5
      outcome: overall household insolvency rate
      metric: coefficient
      value: "InsolventDef: 0.0027 (insignificant); InsolventFamily: 0.0075** (Table 9, cols 1-2); family mean 3.4% vs defendant mean 1.6%"
      direction: positive
      vsBenchmark: "effect concentrated in family members, not defendants themselves"
    - ref: R6
      outcome: overall household insolvency rate
      metric: pp-effect
      value: "+4.22 pp at 3-year horizon in commercial-bond/ROR sample (Table 10, col 1); remains significant at +1.96 pp after dropping commercial bond cases (col 5)"
      direction: positive
      vsBenchmark: "commercial bail bonds contribute but do not solely explain the effect"
    - ref: R7
      outcome: overall household insolvency rate
      metric: pp-effect
      value: "+2.8 pp* for young defendants (Table 11A, col 1); +3.9 pp** for mortgage-financed properties (Table 11B, col 3); +5.48 pp** for long-maturity mortgages (Table 11B, col 5); short-maturity estimate +2.36 pp is insignificant (col 6)"
      direction: positive
      vsBenchmark: "stronger for young defendants consistent with spillover to older cohabitating relatives"
    - ref: R8
      outcome: overall household insolvency rate (name-matched)
      metric: coefficient
      value: "FailToAppear x Detained: +0.0308*** for InsolventDef (Table 13, col 2); +0.0088*** for InsolventFamily (col 3); insignificant for InsolventUnrelated (col 5, -0.0066)"
      direction: positive
      vsBenchmark: "failure to appear amplifies detention's insolvency effect for defendants and family members but not unrelated individuals"
    - { ref: R9, outcome: overall household insolvency rate, metric: pp-effect, value: "Last-name matched insolvency: +0.0119 (Table 9, col 3), significant at 5%", direction: positive }
    - { ref: R10, outcome: overall household insolvency rate, metric: coefficient, value: "Unrelated-name insolvency: +0.0123 (Table 9, col 4), insignificant; 12% of the 0.0987 mean. The table is positive, but the text describes this estimate as negative.", direction: none }
    - { ref: R11, outcome: case and prior-insolvency covariates, metric: coefficient, value: "Joint F-test p = 0.4993 for residualized leave-out leniency predicting 10 covariates (Table 2, col 3)", direction: none }
    - { ref: R12, outcome: commissioner first-stage instrument coefficient, metric: coefficient, value: "Table 3 reports -0.9457*** (SE 0.0081; F = 13,526.11), with subgroup estimates from -0.8980 to -1.0819. Its negative sign conflicts with the text's stated positive ReleasedRIV-release relationship; the paper later defines DetainedRIV as 1 - ReleasedRIV.", direction: negative }
    - { ref: R13, outcome: pretrial case outcomes, metric: coefficient, value: "2SLS: timely release -0.5441*** and log detention duration +1.3162*** (Table 4B)", direction: mixed }
    - { ref: R14, outcome: pretrial case outcomes, metric: coefficient, value: "2SLS effect on guilty disposition = +0.0356*** (Table 4B)", direction: positive }
    - { ref: R15, outcome: pretrial case outcomes, metric: coefficient, value: "2SLS effect on failure to appear = -0.1301*** (Table 4B)", direction: negative }
    - { ref: R16, outcome: pretrial case outcomes, metric: coefficient, value: "2SLS effect on recidivism = +0.0191*** (Table 4B)", direction: positive }
    - { ref: R17, outcome: household insolvency rate, metric: coefficient, value: "Backward-looking chapter 7 and 13 bankruptcy, judgment lien, and insolvency coefficients are small and statistically indistinguishable from zero (Figures 4, 5, and 8)", direction: none }
    - { ref: R18, outcome: overall household insolvency rate, metric: pp-effect, value: "Young defendants +2.78 pp* vs older +2.11 pp*; Black +2.15 pp** vs non-Black +3.96 pp**; young-at-purchase +2.86 pp** vs older-at-purchase +1.93 pp (Table 11A)", direction: mixed }
    - { ref: R19, outcome: overall household insolvency rate, metric: pp-effect, value: "High-price homes +5.32 pp*** vs low-price +0.22 pp; mortgage homes +3.86 pp** vs no mortgage +1.58 pp; long-maturity mortgages +5.48 pp** vs short-maturity +2.36 pp; negative-HPI +3.70 pp** vs positive-HPI +1.62 pp (Table 11B)", direction: mixed }
    - { ref: R20, outcome: use of bail bonds, metric: probability, value: "Property-bond use rises +5.25 pp*** in positive-HPI areas and +4.09 pp*** with short maturities; commercial surety use rises +14.03 to +24.34 pp*** across HPI and maturity splits (Table 12)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Dobbie, Goldin & Yang (2018)", doi: '10.1257/aer.20161503', relation: extends, note: "extends their instrument design for commissioner leniency to household financial outcomes rather than conviction and employment" }
    - { cite: "Gupta, Hansman & Frenchman (2016)", doi: '10.1086/688907', relation: builds-on, note: "builds on their evidence that pretrial detention raises conviction rates and reduces formal employment" }
    - { cite: "Dahl, Kostol & Mogstad (2014)", doi: '10.1093/qje/qju019', relation: builds-on, note: "adapts their residualized leave-out mean instrument construction to the commissioner setting" }
    - { cite: "Dobkin et al. (2018)", doi: '10.1257/aer.20161038', relation: tests, note: "finds comparable magnitude (0.79 pp at 3-year bankruptcy horizon) to their hospital-admission bankruptcy estimate (0.4-1.4 pp)" }
    - { cite: "Foote, Gerardi & Willen (2008)", relation: tests, note: "tests their double-trigger hypothesis: foreclosure effect only in negative-HPI areas, consistent with liquidity shock plus negative equity" }
    - { cite: "Gross, Notowidigdo & Wang (2014)", doi: '10.1162/rest_a_00391', relation: cites, note: "source of PACER bankruptcy filing data used in the analysis" }
  openQuestions:
    - "Welfare analysis is precluded by the complexity of the criminal justice system: the authors note they cannot conduct a definitive welfare analysis, as the costs of pretrial detention must be weighed against public safety benefits (p. 3370)."
    - "The income channel cannot be fully separated from the bail-cost channel: defendants who are detained for extended periods also lose labor income and face higher conviction rates, and these mechanisms are only partially disentangled (pp. 3332-3333)."
    - "Effects post-2017 bail reform in Maryland are not studied: the analysis is restricted to 2000-2016 to avoid the confounding shift in commissioner decisions after Court Rule 4-216.1 (p. 3338)."
  replicationCode:
    url: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/MN0GU6"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-06, role: extracted, note: "Full PDF read (pp. 3329-3373); eight results extracted from tables and figures with page locators. Not human-verified. Not reproduced. Replication code referenced at Harvard Dataverse but not run here." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-06
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF (all tables and equations). Fixed: (1) R7 findings[] magnitudes corrected from wrong +5.5 pp/+6.5 pp to PDF values +2.8 pp*/+3.9 pp**; (2) R8 Core results and findings[] corrected: +0.0308*** belongs to InsolventDef (col 2), not InsolventFamily (col 3 = +0.0088***); (3) R7 Core table mortgage significance *** corrected to **; (4) Table 9 incorrectly labeled OLS, corrected to 2SLS (F=6,305.53); (5) Table 8 overall insolvency mean corrected from 0.3550 (which is the SD) to 0.1479; (6) dataAccess upgraded from public to licensed-commercial (ZTRAX is Zillow proprietary); (7) JEL K42 added (present in abstract, omitted from frontmatter). Equations 1-3 verified term-by-term; all signs, subscripts, and summation indices match PDF."
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added twelve Core results rows, matching findings, missing mechanism coverage, and complete equation and estimating-specification sections. Additions are not human-verified and not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 20 Core results, equations, specifications, classifications, findings, frontmatter, and prose against the PDF; corrected R7's mortgage-maturity direction and table locators R11-R16. Table 3 has an unresolved coefficient-sign/label inconsistency between its table and narrative; Table 9 also has a sign inconsistency between the unrelated-name coefficient and its discussion." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/rfs/hhaf009", checked: 2026-06-06, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days=0, start=2025-01-30. This is OUP standard reuse rights, NOT a Creative Commons licence." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, identification design, and estimating equations: enough to understand what was found and how, without reading all 45 pages. To replicate or extend, read the original at [https://doi.org/10.1093/rfs/hhaf009](https://doi.org/10.1093/rfs/hhaf009).

## TL;DR

This paper asks whether pretrial detention, which holds individuals in jail before trial because they cannot afford bail, causes subsequent household financial distress. Using Maryland criminal court data (2000-2016) matched to bankruptcy filings from Gross, Notowidigdo, and Wang (2014), foreclosure, and judgment lien records, it exploits the quasi-random assignment of court commissioners to cases as an instrument for detention decisions. A more lenient commissioner reduces the probability of detention, and this variation is unrelated to defendant characteristics. The main finding is that pretrial detention causally increases household insolvency, raising chapter 7 bankruptcy rates by 0.79 percentage points (30% of the mean) and judgment lien rates by 0.56 percentage points (35% of the mean) within three years. Foreclosures increase significantly (2.9 pp, 23% of the mean) only in ZIP codes with declining house prices, consistent with home equity acting as a liquidity buffer. The financial burden falls primarily on family members, not defendants themselves, consistent with cohabiting relatives bearing bail-related costs. Commercial bail bonds appear to contribute alongside other channels, but the authors caution that the evidence does not establish that bonds cause defaults. Insolvency effects also persist when commercial-bond cases are excluded and in samples that largely eliminate income-loss and criminal-record channels.

## Core results

Magnitudes and significance are as reported; `\*\*` = 5%, `\*\*\*` = 1%. All regressions instrument detention with the residualized leave-out mean commissioner leniency measure (first-stage F-stat exceeds 6,000 unless noted).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Pretrial detention **raises chapter 7 bankruptcy** at the 1-3 year horizon; null for chapter 13 | Table 5, p. 3353 | +0.44 pp at 1 year\*\*, +0.76 pp at 2 years\*\*, +0.79 pp at 3 years\*\* (30% of 2.65% mean); chapter 13 insignificant at all horizons |
| R2 | Pretrial detention **raises judgment lien rates** at the 3-year horizon | Table 6, p. 3355 | +0.56 pp at 3 years\*\* (35% increase relative to 1.6% mean); insignificant at shorter horizons |
| R3 | **Foreclosure effects are null overall** but large in areas with declining house prices | Table 7, p. 3356 | Full sample: +0.92 pp at 3 years (insignificant); negative-HPI subsample: +2.9 pp\*\* at 3 years (23% of mean); null in positive-HPI subsample |
| R4 | Overall household insolvency (bankruptcy + lien + foreclosure) rises by **2.4 pp at 3 years** | Table 8, p. 3359 | +1.7 pp\*\* at 2 years, +2.4 pp\*\*\* at 3 years (16% of 14.8% mean); clean zero in backward-looking placebo tests (Figure 8) |
| R5 | **Insolvency burden falls on family members**, not defendants | Table 9, p. 3362 | InsolventDef: +0.0027 (insignificant, mean 1.6%); InsolventFamily: +0.0075\*\* (22% of 3.4% mean); InsolventUnrelated: +0.0123 (insignificant) |
| R6 | **Commercial bail bonds contribute but do not fully explain** the insolvency effect | Table 10, p. 3365 | ROR/commercial-bond sample: +4.22 pp\*\*\*; excluding commercial bonds: +1.96 pp\*; +6.39 pp\* in the sample also restricted to timely release and dismissed cases |
| R7 | Insolvency effects are **stronger for younger defendants** and **longer-maturity mortgages** | Table 11, p. 3367 | Young defendants (age < 30): +2.78 pp\*; mortgage-financed properties: +3.86 pp\*\*; long-maturity mortgages: +5.48 pp\*\*; short-maturity estimate +2.36 pp is insignificant; consistent with older relative bearing bail costs |
| R8 | **Failure to appear magnifies** the insolvency effect for defendants and family members via bond forfeiture | Table 13, p. 3369 | FailToAppear x Detained interaction: +0.0308\*\*\* (InsolventDef, col 2); +0.0088\*\*\* (InsolventFamily, col 3); insignificant for InsolventUnrelated (col 5); OLS result, causal interpretation limited |
| R9 | Last-name-matched insolvency also rises | Table 9, p. 3362 | InsolventName: +0.0119\*\* (col 3), mean 0.0491; 2SLS |
| R10 | No statistically significant spillover to unrelated people at the defendant's address | Table 9, p. 3362 | InsolventUnrelated: +0.0123 (SE 0.0082), insignificant, 12% of mean 0.0987; table is positive but the paper's discussion calls the estimate negative; 2SLS |
| R11 | Residualized commissioner leniency is balanced on observed case and prior-financial characteristics | Table 2, p. 3347 | Joint F-test p = 0.4993 for 10 covariates in column 3; court-year and ZIP-code-year FE; commissioner-clustered SE |
| R12 | First-stage estimates are large in magnitude across subsamples; the table's negative sign conflicts with the text's release interpretation | Table 3, p. 3349 | Table coefficient -0.9457\*\*\* (SE 0.0081), F = 13,526.11; subgroup estimates -0.8980 to -1.0819. Table labels the instrument ReleasedRIV, but prose describes a positive ReleasedRIV-release relationship; paper defines DetainedRIV = 1 - ReleasedRIV for detention specifications |
| R13 | Detention reduces timely release and increases detention duration | Table 4B, p. 3351 | 2SLS: timely release -0.5441\*\*\* (SE 0.0163); log detention duration +1.3162\*\*\* (SE 0.0514) |
| R14 | Detention raises the likelihood of a guilty disposition | Table 4B, p. 3351 | 2SLS coefficient +0.0356\*\*\* (SE 0.0086) |
| R15 | Detention reduces failures to appear in court | Table 4B, p. 3351 | 2SLS coefficient -0.1301\*\*\* (SE 0.0094) |
| R16 | Detention raises recidivism | Table 4B, p. 3351 | 2SLS coefficient +0.0191\*\*\* (SE 0.0032) |
| R17 | Pre-hearing placebo outcomes show no systematic insolvency differences | Figures 4, 5, and 8, pp. 3354, 3355, 3360 | Backward-looking chapter 7/13 bankruptcy, judgment lien, and overall-insolvency coefficients are small and statistically indistinguishable from zero |
| R18 | Demographic heterogeneity is limited, while insolvency is higher for young defendants at property purchase | Table 11A, p. 3367 | Young +0.0278\* vs old +0.0211\*; Black +0.0215\*\* vs non-Black +0.0396\*\*; young at purchase +0.0286\*\* vs old at purchase +0.0193 (insignificant) |
| R19 | Housing-linked insolvency is concentrated in higher-exposure subsamples | Table 11B, p. 3367 | High-price +0.0532\*\*\* vs low-price +0.0022; mortgage +0.0386\*\* vs no mortgage +0.0158; long maturity +0.0548\*\* vs short +0.0236; negative HPI +0.0370\*\* vs positive +0.0162 |
| R20 | Bond use responds to home-equity conditions, with commercial surety use rising across all splits | Table 12, p. 3368 | Property bond: +0.0525\*\*\* in positive-HPI areas and +0.0409\*\*\* for short maturity; commercial surety: +0.1403 to +0.2434\*\*\* across HPI and maturity splits |

**Overall (paper's conclusion).** Pretrial detention imposes significant household financial costs that extend beyond the defendant to cohabiting family members, consistent with relatives bearing bail-related costs. The 3-year bankruptcy effect (0.79 pp) is comparable in magnitude to Dobkin et al. (2018), who find that hospital admissions raise bankruptcy rates by 0.4-1.4 pp. Home equity cushions households from insolvency: the foreclosure effect is concentrated in areas with declining house prices, where households cannot tap equity to meet liquidity shocks. Commercial bail bonds appear to contribute alongside other channels, though the evidence does not establish that bonds cause defaults. The findings add to the literature on the collateral damage of the criminal justice system and are relevant to ongoing debates about bail reform.

## Theory / model

The paper has no formal economic model. It tests whether pretrial detention creates household financial distress through immediate bail costs, lost income during detention, or longer-run income losses following conviction and reduced employment (pp. 3330-3332). Gupta, Hansman, and Frenchman (2016) document that pretrial detention raises conviction rates and reduces formal employment, motivating these potential income channels. The authors argue that liquidity pressure should affect chapter 7 bankruptcy and liens, while foreclosure should be most likely when negative home equity prevents households from using property as a buffer. Foote, Gerardi, and Willen (2008) describe this double-trigger foreclosure channel. The family-name results test whether distress falls on relatives who post bail or cosign bonds.

**Identification.** Maryland court commissioners vary in release leniency. The design assumes conditional case assignment is unrelated to potential financial outcomes, and that commissioner leniency affects those outcomes only through detention. The balance test does not reject joint orthogonality of the residualized leave-out measure to observed covariates (Table 2, p. 3347); first-stage estimates remain sizeable across the race, sex, age, and court subsamples (Table 3, p. 3349). Monotonicity is not directly testable, so the authors use the consistent first-stage direction across subsamples as supporting evidence (p. 3348).

## Method

The authors adapt the commissioner leniency instrument used by Dahl, Kostøl, and Mogstad (2014) and Dobbie, Goldin, and Yang (2018). They first residualize release decisions on defendant and case characteristics, then calculate each commissioner's leave-out average residual release decision for the year. The focal defendant's own cases are removed from that average (pp. 3344-3345).

The paper's first numbered equation gives the baseline estimating relationship (Equation 1, p. 3344):

$$
Y_{ict} = \beta_0 + \delta \, \text{Released}_{ic} + X_{ict}\beta + \epsilon_{ict} \tag{1}
$$

The residual release decision and the leave-out commissioner average are defined in Equations 2 and 3 (p. 3345):

$$
\text{Released}^{*}_{ict} = \text{Released}_{ic} - \gamma X_{ict} = \text{ReleasedRIV}_{ctj} + \epsilon_{ict} \tag{2}
$$

$$
\text{ReleasedRIV}_{ctj} = \frac{1}{n_{tj} - n_{itj}}\left(\sum_{k=0}^{n_{tj}} \text{Released}^{*}_{ikt} - \sum_{c=0}^{n_{itj}} \text{Released}^{*}_{ict}\right) \tag{3}
$$

Here, $$X_{ict}$$ contains defendant and case characteristics, including age and fixed effects described in Section 2.5; $$j$$ indexes the commissioner, and $$t$$ the year. The paper complements the release leniency instrument with its detention counterpart, $$\text{DetainedRIV}=1-\text{ReleasedRIV}$$. The first-stage F-statistic is 13,526.11 in the main sample (Table 3, p. 3349); the table's negative coefficient sign is inconsistent with the narrative's positive release relationship. Standard errors are clustered by commissioner.

## Empirical specifications

For the main 2SLS analyses, the paper instruments the binary detention decision with the leave-out commissioner measure and estimates Equation 1 with the paper's listed fixed effects. The outcomes include indicators for case results and cumulative household insolvency within horizons of three months, six months, one year, two years, and three years. The baseline fixed effects are court-by-year, ZIP-code-by-year, month, day-of-week, sex, race, and charge; standard errors are clustered by commissioner (pp. 3344, 3347). Table 3 reports a coefficient of -0.9457 (SE 0.0081), with F = 13,526.11, although its negative sign is inconsistent with the text's stated positive ReleasedRIV-release relationship (p. 3349). The bankruptcy sample has N = 306,722 and the principal ZTRAX-matched insolvency sample has N = 275,325 (Tables 5 and 8, pp. 3353 and 3359).

For binary or cumulative outcome $$Y^{\tau}_{ict}$$, the estimation uses the 2SLS version of Equation 1, replacing the endogenous treatment with detention and instrumenting it with DetainedRIV. The reported coefficient is the effect of detention; each observation is a criminal case matched to an individual or household financial outcome. The specifications below report the major samples and outcomes; all use the fixed effects and clustered standard errors stated above unless noted.

**Pretrial case outcomes (Table 4B, p. 3351).** The 2SLS specifications estimate timely release, log days detained, guilty disposition, failure to appear, and recidivism. The five coefficients are -0.5441 (SE 0.0163), +1.3162 (0.0514), +0.0356 (0.0086), -0.1301 (0.0094), and +0.0191 (0.0032), respectively; N ranges from 438,736 to 502,546.

**Household financial outcomes (Tables 5-8, pp. 3353-3359).** Bankruptcy specifications use N = 306,722; lien specifications use N = 502,546; foreclosure and combined insolvency specifications use N = 275,325. The estimates are horizon-specific cumulative indicators. The 3-year chapter 7 coefficient is +0.0079 (SE 0.0037), while chapter 13 estimates are insignificant at all horizons. The 3-year lien coefficient is +0.0056 (0.0023). For foreclosure, the 3-year coefficient is +0.0092 (0.0074) in the full sample, +0.0291 (0.0123) in negative-HPI ZIP codes, and -0.0033 (0.0089) in positive-HPI ZIP codes. Combined insolvency at three years is +0.0242 (0.0090).

**Household members and mechanism specifications (Tables 9-13, pp. 3362-3369).** Table 9 uses 2SLS with address and name matches for defendant, family, last-name, and unrelated insolvency outcomes, N = 275,325. Table 10 estimates three-year insolvency for bail-bond subsamples, with samples from N = 69,437 to 229,728; its first-stage F-statistics range from 144.60 to 3,220.57. Table 11 estimates three-year insolvency across defendant and housing subsamples; Table 12 estimates property-bond and commercial surety-bond use for ZTRAX-matched cases. These specifications retain the baseline fixed effects and commissioner-clustered standard errors. Table 13 is explicitly OLS because failure to appear is endogenous and is not instrumented. Its specification is:

$$
Y_{ict} = \beta_0 + \beta_1\text{Detained}_{ic} + \beta_2\text{FailToAppear}_{ic} + \beta_3(\text{FailToAppear}_{ic} \times \text{Detained}_{ic}) + X_{ict}\beta + \epsilon_{ict}
$$

The Table 13 sample has N = 275,820 and includes insolvency indicators for the defendant's address matched to the defendant, family names, broader last names, or unrelated names. It uses the baseline fixed effects and commissioner-clustered standard errors. The positive interaction for defendant and family outcomes is suggestive only because failure to appear is endogenous (Table 13, pp. 3369-3370).

**Placebos and robustness.** Figures 4, 5, and 8 report no systematic pre-hearing insolvency effects (pp. 3354, 3355, 3360). The paper also reports robustness checks with a lagged instrument, a non-residualized instrument, apartment-inclusive samples, and absorbing-event exclusions in Internet Appendix Tables A.III-A.VI (pp. 3360, 3363-3364). The text describes these estimates as qualitatively unchanged; exact appendix magnitudes are not transcribed here.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Maryland Judiciary public access database | Criminal case records: 1.08 million cases 2000-2016; commissioner ID, release decisions, bail types, charge categories | [Maryland Judiciary](/wiki/datasets/maryland-judiciary/) |
| PACER (Public Access to Court Electronic Records) | Consumer bankruptcy filings 2000-2011: 318,000 filings in Maryland; chapter 7 and chapter 13 type, filing date, address | [PACER](/wiki/datasets/pacer-bankruptcy/) |
| ZTRAX (Zillow Transaction and Assessment Database) | Real estate transactions 1993-2020: 9 million Maryland transactions; foreclosure events post-2007, property-level matching | [ZTRAX](/wiki/commercial/ztrax/) (licensed) |
| Maryland Judiciary civil court records | Judgment lien filings 2000-2020: 386,938 lien filings; plaintiff/defendant address, filing date | [Maryland Judiciary](/wiki/datasets/maryland-judiciary/) |
| Federal Housing Finance Agency HPI | ZIP-code-level annual house price index; used to split sample into negative/positive HPI growth subsamples | No page yet |

Sample: over 500,000 criminal cases in Baltimore City, Montgomery County, and Prince George's County District Courts. 78% from Baltimore City. 81% Black defendants, 83% male, median age 30.

## When to read the full paper

Read the original if you are: studying the economics of the bail system or pretrial detention reform; working on household insolvency and liquidity shocks more broadly; replicating or extending the leave-out commissioner leniency instrument to other outcomes or jurisdictions; or testing the double-trigger hypothesis for foreclosures with a new source of liquidity shocks. Tables 5-9 contain the headline regressions; the Internet Appendix (available on the RFS website) contains robustness tests including a lagged IV, non-residualized IV, apartment-inclusive sample, and absorbing-state tests.

## Attribution and rights

Source: peer-reviewed, *The Review of Financial Studies* 38(11), November 2025. This distillation was extracted by an LLM on 2026-06-06 and is **not human-verified or independently reproduced**. The paper is paywalled (OUP standard publication reuse rights); no verbatim reproduction. Access the original at [https://doi.org/10.1093/rfs/hhaf009](https://doi.org/10.1093/rfs/hhaf009).

Citation: Slutzky, Pablo, and Sheng-Jun Xu. "The Financial Consequences of Pretrial Detention." *The Review of Financial Studies* 38, no. 11 (2025): 3329-3373. DOI: 10.1093/rfs/hhaf009.
