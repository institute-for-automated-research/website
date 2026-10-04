---
title: "Deposit Insurance and LLP Discretion: Pugachev, Robin, Wang & Yang (2026)"
description: >-
  Distilled: The 2008 EESA expansion of US deposit insurance from $100,000 to
  $250,000 led affected banks to provision more conservatively, increasing
  discretionary loan loss provision by approximately 3.4 basis points of lagged
  loans (38% of the mean LLP level). Effects are stronger for banks with the
  largest risk increases than for regulatory-scrutiny proxies in joint tests.
  Journal of Corporate
  Finance vol. 99, 2026, paywalled. Sixteen core results with source locators, the
  LLP prediction model, and the DiD specifications. LLM-distilled; not
  human-verified.
sidebar:
  label: Pugachev-Robin-Wang-Yang 2026
  order: 1
tags: [paper-summary, banking, deposit-insurance, accounting-conservatism,
       loan-loss-provision, panel-regression, difference-in-differences,
       peer-reviewed, unreplicated, data:fdic-sdi, data:census, data:fhfa-hpi]
paper:
  authors: Leo Pugachev, Ashok Robin, Dilin Wang, Rong Yang
  authorList:
    - { family: Pugachev, given: Leo, affiliation: "University of Missouri-St. Louis" }
    - { family: Robin, given: Ashok, affiliation: "Rochester Institute of Technology" }
    - { family: Wang, given: Dilin, orcid: "0000-0003-0395-0768", affiliation: "Grand Valley State University" }
    - { family: Yang, given: Rong, orcid: "0000-0002-1394-3644", affiliation: "Rochester Institute of Technology" }
  year: 2026
  venue: Journal of Corporate Finance 99, 2026, article 102995
  venueShort: J. Corp. Finance 2026
  tier: field
  doi: 10.1016/j.jcorpfin.2026.102995
  jel:
    codes: [G18, G21, G38, M43]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Banking stability, regulation, efficiency", "Credit Risk and Financial Regulations", "Economic theories and models"]
  dataAccess: public
  outcome:
    - discretionary loan loss provision (LLP conservatism)
    - conservative vs. opportunistic LLP provisioning behavior
    - absolute discretionary LLP (overall LLP discretion)
    - probability of positive discretionary LLP
  outcomeClass: [bank-accounting-conservatism]
  license: "© 2026 Elsevier B.V. All rights reserved, including text and data mining, AI training, and similar technologies (confirmed via Crossref: content-version tdm, URL https://www.elsevier.com/tdm/userlicense/1.0/, start 2026-06-01; no CC license present)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; paywalled licence confirmed via Crossref DOI metadata 2026-06-26)"
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, matching]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [moral-hazard, information-asymmetry, regulatory-discipline]
  scope:
    region: US
    assetClass: US commercial bank loans
    period: 2005-Q4..2011-Q4
    frequency: quarterly
    dataType: [accounting, administrative]
    granularity: [firm]
    n: "9,568 bank-quarters (314 treated, 74 control banks, PSM sample); broad panel 123,310 bank-quarters"
  findings:
    - { ref: R1, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "INSDEP = 1.880*** (t = 7.857); 123,310 obs., 75-quarter broad panel 1999-2018 (Table 4, Col. 1, p. 10)", direction: positive }
    - { ref: R2, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "TREATPOST = 0.336*** (t = 2.769); ~3.4 bps of lagged loans; 38% of mean LLP of 8.88 bps (Table 5, Col. 1, p. 11)", direction: positive }
    - { ref: R3, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q5NIDEPPOST = 0.577** (t = 2.323); highest newly-insured-deposit-share quintile (Table 7, Col. 1, p. 13)", direction: positive, vsBenchmark: "higher conservatism for the most exposed quintile; Fig. 4 is non-monotonic, with the middle quintile most opportunistic (p. 13)" }
    - { ref: R4, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q5NPLPOST = 2.442*** (t = 6.878); highest NPL-increase quintile (Table 7, Col. 3, p. 13)", direction: positive, vsBenchmark: "risk channel via NPL; ~7x the full-sample TREATPOST coefficient" }
    - { ref: R5, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q1ZSCOREPOST = 1.232*** (t = 4.400); largest z-score decline quintile (Table 7, Col. 2, p. 13)", direction: positive, vsBenchmark: "risk channel via z-score; ~4x the full-sample TREATPOST coefficient" }
    - { ref: R6, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q1T1CAPITALPOST = 0.635** (t = 2.028); least-capitalized quintile (Table 7, Col. 4, p. 13)", direction: positive, vsBenchmark: "regulatory scrutiny channel via Tier 1 capital" }
    - { ref: R7, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "TREATPOSTDLLP<0 = 0.440*** (t = 2.728) for opportunistic pre-EESA banks; POSTHPRE_DLLP = -0.545** (t = -2.413) for the highest pre-EESA DLLP quintile relative to the middle quintiles (Table 6, Cols. 1 and 4, p. 12)", direction: mixed, vsBenchmark: "opportunistic pre-EESA banks shift relative to controls; the most-conservative quintile shifts less than middle quintiles" }
    - { ref: R8, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "INSDEP = 0.898*** (t = 5.176), excluding crisis years, 95,584 observations; INSDEP = 1.821*** (t = 4.698), post-EESA sample, 57,375 observations (Table 4, Cols. 2-3, p. 10)", direction: positive, vsBenchmark: "positive association persists outside crisis years and in the post-EESA period" }
    - { ref: R9, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "For DLLP > 0, TREATPOST = 0.212 (t = 0.517); for DLLP < 0, 0.146*** (t = 3.413); for indicator posDLLP, 0.012 (t = 0.411) (Table 5, Cols. 2-4, p. 11)", direction: positive, vsBenchmark: "the effect is a reduction in opportunistic provisioning, not larger positive discretion or a higher probability of positive DLLP" }
    - { ref: R10, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Pre-EESA conservative and opportunistic subsamples: TREATPOST = 0.197 (t = 0.814) and 0.417*** (t = 3.032); treated-only lowest pre-EESA DLLP quintile: POSTLPRE_DLLP = 0.215 (t = 1.387) and 0.133 (t = 0.832) in joint specification (Table 6, Cols. 2-3 and 5-6, p. 12)", direction: positive, vsBenchmark: "the shift is present for pre-EESA opportunistic provisioners; lowest-quintile effects are statistically insignificant" }
    - { ref: R11, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Treated-only largest-bank quintile: Q5SIZEPOST = 0.315** (t = 1.980); joint specification: Q1ZSCOREPOST = 0.770*** (t = 4.847), Q5NPLPOST = 1.169*** (t = 4.799), Q1T1CAPITALPOST = -0.213 (t = -0.989), Q5SIZEPOST = -0.017 (t = -0.181) (Table 7, Cols. 5-6, p. 13)", direction: mixed, vsBenchmark: "both risk measures remain positive in the joint test; regulatory-scrutiny proxies do not" }
    - { ref: R12, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "TREATPOST = 0.162*** (t = 3.705) with KKL10 DLLP; 0.333*** (t = 2.775) with BW12; 0.185*** (t = 3.574) with BVW20; 0.455*** (t = 3.504) under structural matching; 0.374** (t = 2.066) under expanded PSM (Table 8, Cols. 1-5, p. 16)", direction: positive, vsBenchmark: "baseline result persists across three alternative DLLP measures and two alternate matched samples" }
    - { ref: R13, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Placebo TREATPOST coefficients: 0.073 (t = 0.529) for randomized assignment, -0.043 (t = -0.725) for an event 12 quarters earlier, and -0.284 (t = -0.866) for an event 12 quarters later (Table 8, Cols. 6-8, p. 16)", direction: none, vsBenchmark: "all three placebo estimates are statistically insignificant" }
    - { ref: R14, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Broad-sample coefficients: Q5NIDEPPOST = 0.572*** (t = 6.527); Q1ZSCOREPOST = 1.613*** (t = 20.202); Q5NPLPOST = 1.695*** (t = 22.222); Q1T1CAPITALPOST = 0.937*** (t = 10.377); Q5SIZEPOST = 0.872*** (t = 9.902); joint model = 1.573***, 2.351***, 0.216***, 0.277***, respectively (Table 9, Cols. 1-6, p. 17)", direction: positive, vsBenchmark: "the broader treated-bank sample supports exposure and both mechanism patterns" }
    - { ref: R15, outcome: "absolute discretionary LLP (overall LLP discretion)", metric: coefficient, value: "INSDEP = 1.131*** (t = 6.419) in the full broad panel and 0.610*** (t = 4.753) excluding crisis years; matched-sample TREATPOST = -0.068 (t = -0.836), with TREATPOST = -0.404*** (t = -3.437) and TREATPOSTDLLP<0 = 0.488*** (t = 4.232) (Table 10, Panel A, p. 18)", direction: mixed, vsBenchmark: "the matched-sample average treatment estimate is null, masking opposite pre-EESA discretion groups" }
    - { ref: R16, outcome: "absolute discretionary LLP (overall LLP discretion)", metric: coefficient, value: "Matched sample: Q5NIDEPPOST = 0.204 (t = 1.290), Q1ZSCOREPOST = 0.880*** (t = 4.666), Q5NPLPOST = 1.256*** (t = 4.420), Q1T1CAPITALPOST = 0.078 (t = 0.311), Q5SIZEPOST = 0.019 (t = 0.185); broad sample: 0.348*** (t = 5.758), 1.613*** (t = 20.202), 1.695*** (t = 22.222), 0.394*** (t = 6.292), 0.200*** (t = 3.329), respectively (Table 10, Panel B, p. 18-19)", direction: positive, vsBenchmark: "risk measures predict greater absolute discretion in both samples; exposure and scrutiny are significant only in the broad sample" }
  resultType: new-finding
  relatesTo:
    - { cite: "Diamond and Dybvig (1983)", doi: '10.1086/261155', relation: builds-on, note: "foundational DI theory: deposit insurance prevents bank runs by converting deposits to a risk-free asset, shifting monitoring from depositors to the insurer" }
    - { cite: "Calomiris and Jaremski (2019)", doi: '10.1111/jofi.12753', relation: extends, note: "DI incentivizes bank risk-taking and removes market discipline; this paper adds accounting conservatism as a behavioral response not previously documented" }
    - { cite: "Nicoletti (2018)", doi: '10.1016/j.jacceco.2018.05.003', relation: builds-on, note: "LLP prediction model adapted with bank fixed effects to construct the DLLP discretion measure (Eq. 1, p. 4)" }
    - { cite: "Beatty and Liao (2014)", doi: '10.1016/j.jacceco.2014.08.009', relation: builds-on, note: "LLP discretion framework and regression specification underlying the DLLP construction" }
    - { cite: "Lambert et al. (2017)", relation: builds-on, note: "method for estimating newly insured deposits from the EESA ceiling increase; used to construct the NIDEP intensive-margin exposure variable" }
    - { cite: "Huang (2021)", doi: '10.1016/j.jaccpubpol.2021.106876', relation: tests, note: "deregulation led public banks to accept less conservative accounting from borrowers; this paper finds the converse (re-regulation via DI increases conservatism)" }
    - { cite: "Huizinga and Laeven (2012)", doi: '10.1016/j.jfineco.2012.06.008', relation: tests, note: "LLP discretion rises during the financial crisis; the paper uses matched control banks to disentangle DI effects from the crisis" }
  openQuestions:
    - "What motivates banks' conservative accounting response to greater risk is unresolved; the data do not reveal their exact rationales (p. 14)"
    - "Whether crisis-related factors differentially affect treated and control banks cannot be completely ruled out (p. 3)"
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-24 incl. appendices and references); seven core results extracted from Tables 4-7; equations transcribed from pp. 4 and 8. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 7 Core results rows confirmed correct (Tables 4-7); Eqs. 1-3 verified term-by-term; fixed: JEL code G38 added (was missing from [G18, G21, M43]; PDF title page shows G18, G21, G38, M43)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added nine Core results rows plus the paper's estimating specifications and equations; additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, magnitudes, equations, specifications, classifications, and surrounding claims checked against the PDF; corrected the non-monotonic exposure pattern and prose attribution errors." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102995", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=tdm, URL=https://www.elsevier.com/tdm/userlicense/1.0/, delay-in-days=0, start=2026-06-01; no open-access or CC license block; paywalled" }
---

**What this is.** The paper's core results, the hypotheses it tests, the LLP prediction model used to measure accounting discretion, and the difference-in-differences specifications: enough to know what it found and how, without reading all 24 pages. To replicate or extend it, read the full source at [doi.org/10.1016/j.jcorpfin.2026.102995](https://doi.org/10.1016/j.jcorpfin.2026.102995).

## TL;DR

The paper studies whether the Emergency Economic Stabilization Act (EESA) of 2008, which increased the FDIC deposit insurance ceiling from $100,000 to $250,000, changed bank accounting behavior. It uses a difference-in-differences design, exploiting the fact that 126 Massachusetts state-chartered savings banks and cooperatives were already fully insured by private state deposit insurance (DIF/SIF) and thus experienced no change in coverage. Relative to these controls, banks exposed to the EESA shock shift toward more conservative (income- and capital-reducing) discretionary loan loss provisioning. The effect is approximately 3.4 basis points of lagged loans (38% of the mean LLP level). Effects are stronger for banks that increased risk most. Regulatory-scrutiny measures also predict more conservative provisioning in separate tests, but are weaker in joint tests; the authors caution that the channel proxies overlap and may differ in measurement quality.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. All regressions include bank and quarter fixed effects with standard errors clustered by bank. DLLP is the discretionary component of LLP scaled to units where each unit = 10 basis points of lagged loan portfolio (LLP multiplied by 1,000).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | DI coverage fraction (INSDEP) positively predicts conservative LLP in broad 75-quarter panel | Table 4, Col. 1, p. 10 | INSDEP = 1.880\*\*\* (t = 7.857); n = 123,310 bank-quarters; result holds excluding crisis years and in post-EESA subsample |
| R2 | Treated banks shift to more conservative DLLP relative to controls after EESA (main DiD result) | Table 5, Col. 1, p. 11 | TREATPOST = 0.336\*\*\* (t = 2.769); equivalent to ~3.4 bps of lagged loans; 38% of the mean LLP level of 8.88 bps |
| R3 | Banks with highest fraction of newly insured deposits shift most toward conservatism (intensive margin) | Table 7, Col. 1, p. 13; Fig. 4, p. 13 | Q5NIDEPPOST = 0.577\*\* (t = 2.323); Fig. 4 is non-monotonic, with the middle quintile most opportunistic |
| R4 | Banks that increase nonperforming loans most post-EESA shift most toward conservatism (risk channel) | Table 7, Col. 3, p. 13 | Q5NPLPOST = 2.442\*\*\* (t = 6.878); approximately seven times the full-sample baseline coefficient |
| R5 | Banks whose z-score falls most post-EESA shift most toward conservatism (risk channel) | Table 7, Col. 2, p. 13 | Q1ZSCOREPOST = 1.232\*\*\* (t = 4.400); approximately four times the full-sample baseline coefficient |
| R6 | Least-capitalized banks shift most toward conservatism (regulatory scrutiny channel) | Table 7, Col. 4, p. 13 | Q1T1CAPITALPOST = 0.635\*\* (t = 2.028); consistent with regulators focusing on banks closest to the default boundary |
| R7 | Opportunistic pre-EESA banks shift toward conservatism relative to controls; the most-conservative quintile shifts less than middle quintiles | Table 6, Cols. 1 and 4, p. 12 | TREATPOSTDLLP<0 = 0.440\*\*\* (t = 2.728); POSTHPRE\_DLLP = -0.545\*\* (t = -2.413); consistent with strategic constraints on banks already at or past their conservatism target |
| R8 | The broad-panel INSDEP association persists outside crisis years and in the post-EESA period | Table 4, Cols. 2-3, p. 10 | INSDEP = 0.898\*\*\* (t = 5.176), excluding crisis years; 1.821\*\*\* (t = 4.698), post-EESA; n = 95,584 and 57,375 |
| R9 | The baseline effect works through less opportunistic provisioning, not higher conservative residuals or a greater probability of positive DLLP | Table 5, Cols. 2-4, p. 11 | For DLLP > 0: TREATPOST = 0.212 (t = 0.517); DLLP < 0: 0.146\*\*\* (t = 3.413); posDLLP: 0.012 (t = 0.411) |
| R10 | Banks with positive average pre-EESA DLLP show little shift; those with negative average pre-EESA DLLP shift toward conservatism | Table 6, Cols. 2-3 and 5-6, p. 12 | TREATPOST = 0.197 (t = 0.814) for pre-EESA conservative banks and 0.417\*\*\* (t = 3.032) for opportunistic banks; POSTLPRE_DLLP = 0.215 (t = 1.387) and 0.133 (t = 0.832) in treated-only tests |
| R11 | In the joint mechanism model the two risk measures remain positive, while regulatory-scrutiny proxies are null; size is positive only in its separate specification | Table 7, Cols. 5-6, p. 13 | Q5SIZEPOST = 0.315\*\* (t = 1.980); joint: Q1ZSCOREPOST = 0.770\*\*\* (t = 4.847), Q5NPLPOST = 1.169\*\*\* (t = 4.799), Q1T1CAPITALPOST = -0.213 (t = -0.989), Q5SIZEPOST = -0.017 (t = -0.181) |
| R12 | The main DiD estimate is robust to alternate DLLP models and matched samples | Table 8, Cols. 1-5, p. 16 | TREATPOST = 0.162\*\*\* (t = 3.705; KKL10), 0.333\*\*\* (t = 2.775; BW12), 0.185\*\*\* (t = 3.574; BVW20), 0.455\*\*\* (t = 3.504; structural match), 0.374\*\* (t = 2.066; expanded PSM) |
| R13 | Random assignment and shifted event-date placebos yield null estimates | Table 8, Cols. 6-8, p. 16 | TREATPOST = 0.073 (t = 0.529), -0.043 (t = -0.725), and -0.284 (t = -0.866); all insignificant |
| R14 | The broader treated-bank sample reproduces the exposure and mechanism patterns | Table 9, Cols. 1-6, p. 17 | Separate models: Q5NIDEPPOST = 0.572\*\*\* (t = 6.527), Q1ZSCOREPOST = 1.613\*\*\* (t = 20.202), Q5NPLPOST = 1.695\*\*\* (t = 22.222), Q1T1CAPITALPOST = 0.937\*\*\* (t = 10.377), Q5SIZEPOST = 0.872\*\*\* (t = 9.902); joint model respectively 1.573\*\*\*, 2.351\*\*\*, 0.216\*\*, 0.277\*\*\* |
| R15 | Absolute DLLP is positively associated with insured deposits, but the matched-sample average treatment effect is null and differs by pre-EESA provisioner type | Table 10, Panel A, p. 18 | INSDEP = 1.131\*\*\* (t = 6.419), 0.610\*\*\* (t = 4.753); TREATPOST = -0.068 (t = -0.836); TREATPOST = -0.404\*\*\* (t = -3.437), TREATPOSTDLLP<0 = 0.488\*\*\* (t = 4.232) |
| R16 | For absolute DLLP, risk measures predict increased discretion in matched and broad samples; exposure and scrutiny estimates are significant only in the broad sample | Table 10, Panel B, pp. 18-19 | Matched sample: Q5NIDEPPOST = 0.204 (t = 1.290), Q1ZSCOREPOST = 0.880\*\*\* (t = 4.666), Q5NPLPOST = 1.256\*\*\* (t = 4.420), Q1T1CAPITALPOST = 0.078 (t = 0.311), Q5SIZEPOST = 0.019 (t = 0.185); broad sample respectively 0.348\*\*\* (t = 5.758), 1.613\*\*\* (t = 20.202), 1.695\*\*\* (t = 22.222), 0.394\*\*\* (t = 6.292), 0.200\*\*\* (t = 3.329) |

**Overall (paper's conclusion).** DI expansion increases conservative LLP discretion through risk-taking and regulatory-scrutiny channels. The risk-channel measures have stronger economic and statistical associations in joint tests; the scrutiny channel is supported in separate tests, though the authors caution that these proxies overlap and differ in potential noise. The finding contrasts with Huang (2021), who shows that deregulation reduced accounting conservatism among public bank borrowers; here the regulatory tightening from expanded DI moves bank provisioning in the opposite direction. From a policy perspective, the authors suggest US bank regulators provide sufficient monitoring to limit opportunistic reporting associated with DI-induced moral hazard.

## Theory / model

The paper has no formal structural model. It develops two hypotheses and an identification strategy.

**H1** (p. 4): Banks that experience greater DI coverage adopt more conservative LLP discretion relative to other banks. The prediction follows from two mechanisms that DI activates simultaneously:

1. *Risk channel*: DI reduces depositor monitoring incentives, allowing banks to take more risk, as Calomiris and Jaremski (2019) document across US banking history. Riskier banks face greater demand from creditors and equity-holders for conservative accounting (loss recognition that lowers reported income and erodes capital), as established by Beatty and Liao (2014), Kim et al. (2013), and Balakhrishnan et al. (2016). The channel tests are stronger for changes in risk than for regulatory-scrutiny proxies in joint specifications (Table 7, Col. 6, p. 13).

2. *Regulatory scrutiny channel*: DI shifts the monitoring role from depositors to bank regulators (the FDIC). Regulators are known to prefer conservative accounting (Qiang (2007), Lobo and Zhou (2006)), and DI expansion increases their incentive to enforce conservative practices as their exposure grows.

**Identification strategy.** The paper exploits the EESA of 2008, which increased the FDIC deposit insurance ceiling from $100,000 to $250,000 per account. Diamond and Dybvig (1983) established that DI stabilizes banking systems by converting deposits to a risk-free asset; the EESA shock re-prices the coverage for roughly all US banks. The key identification assumption is that Massachusetts state-chartered savings banks and cooperatives are unaffected by EESA: their deposits were already fully insured by private state schemes (DIF/SIF) initiated in the 1930s. Assignment to treated vs. control status is thus pre-determined by a decision to incorporate in Massachusetts as a state-chartered savings or cooperative institution, typically 200 years before EESA (p. 2), satisfying the exogeneity requirement for DiD.

To improve comparability, the paper applies propensity score matching (PSM) on 22 pre-shock bank characteristics, selecting treated banks that resemble controls on observable traits. Pre-shock parallel trends in DLLP are documented in Figure 1 (p. 8), supporting DiD validity. A battery of placebo tests and three alternative control samples (non-Massachusetts state-chartered savings banks; Massachusetts federally chartered savings banks; Massachusetts state-chartered commercial banks) confirm robustness.

## Method

The method has two steps: constructing the discretionary LLP measure, then running the DiD.

**Step 1: LLP discretion (Eq. 1, p. 4).** Following Nicoletti (2018) with bank fixed effects added, the paper estimates a predicted LLP for each bank-quarter from its loan portfolio fundamentals:

$$
\text{LLP}_{b,t} = \alpha_1 \text{DNPL}_{b,t+1} + \alpha_2 \text{DNPL}_{b,t} + \alpha_3 \text{DNPL}_{b,t-1} + \alpha_4 \text{DNPL}_{b,t-2} + \alpha_5 \text{EBLLP}_{b,t}
$$

$$
+ \alpha_6 \text{TIER1}_{b,t-1} + \alpha_7 \text{LSIZE}_{b,t-1} + \alpha_8 \text{DLOAN}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t} \tag{1}
$$

where LLP is scaled to 1,000 bps of lagged loans; subscripts $$b$$ and $$t$$ index bank and quarter; $$\text{DNPL}$$ captures changes in nonperforming loans; $$\text{EBLLP}$$ is earnings before LLP and taxes; $$\text{TIER1}$$ is the Tier 1 capital ratio; $$\text{LSIZE}$$ is log assets; $$\text{DLOAN}$$ is loan growth; $$\mu_b$$ are bank fixed effects; $$\tau_t$$ are quarter fixed effects. The model is estimated by OLS with bank and quarter fixed effects and standard errors clustered by bank; Appendix B (p. 22) reports coefficients from 93,897 observations. The residuals from Eq. (1), denoted $$\text{DLLP}_{b,t}$$, measure discretionary LLP: positive (negative) values indicate more conservative (opportunistic) provisioning than fundamentals predict.

**Step 2: Broad-sample panel regression (Eq. 2, p. 8).** To establish the motivating association before the DiD, the paper estimates:

$$
\text{DLLP}_{b,t} = \beta_1 \text{INSDEP}_{b,t} + \gamma' \text{Controls} + \mu_b + \tau_t + \varepsilon_{b,t} \tag{2}
$$

where $$\text{INSDEP}_{b,t}$$ is the fraction of bank $$b$$'s deposits below the FDIC insurance limit. $$\beta_1$$ measures the contemporaneous relationship between DI coverage and LLP conservatism over the full 75-quarter broad panel (n = 123,310 bank-quarters). Because $$\text{DLLP}$$ is a residual used as a dependent variable, the paper follows Chen et al. (2018) and includes all first-stage controls in the second-stage regression to mitigate bias from using residuals as dependent variables.

## Empirical specifications

The paper numbers two equations. Equation (2) is the broad-panel association; the matched-sample DiD and the robustness and mechanism tests are modifications of it. All specifications below use OLS, bank and quarter fixed effects, bank-clustered standard errors, and the stated sample. Controls are the past, present, and future changes in NPL, earnings before LLP, Tier 1 capital, log assets, and loan growth, with first-stage LLP predictors retained as controls where applicable; continuous variables are winsorized at 1% tails.

**Broad-panel association (Eq. 2, p. 8; Table 4, p. 10).**

$$
\text{DLLP}_{b,t} = \beta_1 \text{INSDEP}_{b,t} + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t} \tag{2}
$$

This specification uses 123,310 bank-quarter observations over 75 quarters (1999-2018). Table 4, Column 2 excludes 2007-2010 (95,584 observations), and Column 3 uses the post-EESA period only (57,375 observations). The dependent variable is the Eq. (1) residual DLLP. Standard errors are clustered by bank.

**Matched-sample DiD and outcome decompositions (Table 5, p. 11).** The paper substitutes the treatment-by-post indicator for INSDEP in Eq. (2):

$$
\text{DLLP}_{b,t} = \beta_1 \text{TREATPOST}_{b,t} + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

Here, TREATPOST equals one for treated banks after 3Q2008. The estimation sample is the PSM sample, 9,568 bank-quarters from 314 treated and 74 control banks, over 4Q2005-4Q2011. Table 5 Columns 2-3 estimate the same form in subsamples where DLLP is respectively positive and negative. Column 4 uses a linear probability outcome:

$$
\text{posDLLP}_{b,t} = \beta_1 \text{TREATPOST}_{b,t} + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

Column 2 has 2,350 observations; Column 3 has 7,189; Column 4 uses all 9,568. The paper notes that the treatment indicator's components are absorbed by bank and quarter fixed effects. Errors are clustered by bank.

**Pre-EESA provisioning heterogeneity (Table 6, p. 12).** For the PSM sample, the coefficient on TREATPOST is allowed to differ for banks with negative mean pre-EESA DLLP:

$$
\text{DLLP}_{b,t} = \beta_1 \text{TREATPOST}_{b,t} + \beta_2(\text{TREATPOST}_{b,t} \times \mathbb{1}[\overline{\text{DLLP}}_{b,pre}<0]) + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

For treated banks only, the specification replaces that interaction with post-EESA indicators for the highest and lowest pre-EESA DLLP quintiles, separately and jointly:

$$
\text{DLLP}_{b,t} = \beta_H(\text{POST}_{t} \times \text{HPRE\_DLLP}_{b}) + \beta_L(\text{POST}_{t} \times \text{LPRE\_DLLP}_{b}) + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

The first form uses 9,568 bank-quarters (and 2,824 / 6,744 in the positive / negative pre-EESA subsamples); treated-only columns use 7,738 observations. All include bank and quarter fixed effects and bank-clustered errors.

**Intensive margin and channel tests (Tables 7 and 9, pp. 13, 17).** The same treated-only specification replaces TREATPOST with the relevant exposure or channel quintile interacted with post-EESA:

$$
\text{DLLP}_{b,t} = \beta_1(\text{POST}_{t} \times \text{Q}_{b}) + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

In turn, Q is the highest newly-insured-deposit quintile, lowest z-score-change quintile, highest NPL-change quintile, lowest pre-EESA Tier 1 capital quintile, or highest pre-EESA size quintile. The matched treated sample has 7,738 observations; the broad treated-bank sample in Table 9 has 91,552. Table 7 Column 6 and Table 9 Column 6 include all four mechanism interactions together:

$$
\text{DLLP}_{b,t} = \sum_{q \in \{Z,NPL,T1,Size\}} \beta_q(\text{POST}_{t} \times \text{Q}_{q,b}) + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

These regressions use the same fixed effects and bank-clustered standard errors. Table 9 is an external-validity analysis on the larger treated sample without PSM.

**Robustness and placebo specifications (Table 8, p. 16).** Columns 1-3 replace DLLP with residuals from the KKL10, BW12, and BVW20 LLP prediction models. Columns 4-5 retain the DiD equation but use structural matching or expanded PSM. Each uses the stated matched sample (9,568 for Columns 1-3; 7,743 and 5,133 for Columns 4-5), bank and quarter fixed effects, and bank-clustered standard errors. Lambert et al. (2017) provide the method the authors adapt to estimate newly insured deposits for their intensive-margin exposure measure (p. 12). Huizinga and Laeven (2012) document increased LLP discretion during the financial crisis, which the paper addresses through matched controls and crisis-period checks (pp. 8-10). The placebo form is:

$$
\text{DLLP}_{b,t} = \beta_1(\text{TREAT}^{placebo}_{b} \times \text{POST}^{placebo}_{t}) + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

Column 6 randomly assigns treated and control labels; Columns 7-8 move the event quarter 12 quarters earlier or later. The corresponding samples are 9,568, 7,575, and 8,179 bank-quarters. All use bank and quarter fixed effects and bank-clustered standard errors.

**Absolute discretion outcome (Table 10, pp. 18-19).** The authors repeat the broad association, DiD, heterogeneity, and quintile specifications with absolute DLLP as the dependent variable:

$$
\text{absDLLP}_{b,t} = \beta_1 X_{b,t} + \beta_2(\text{TREATPOST}_{b,t} \times \mathbb{1}[\overline{\text{DLLP}}_{b,pre}<0]) + \boldsymbol{\gamma}'\text{Controls}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t}
$$

Here X is INSDEP, TREATPOST, or one of the exposure and channel quintile interactions described above. Panel A uses 123,310 observations for the full broad panel, 95,584 excluding crisis years, and 9,568 for matched-sample tests. Panel B uses the 7,738 matched treated observations in Columns 1-5 and 91,552 broad-sample treated observations in Columns 6-10. Every specification includes bank and quarter fixed effects, the controls described above, and bank-clustered standard errors.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| FDIC Statistics on Depository Institutions (SDI) | Main bank financial data: LLP, nonperforming loans, earnings, Tier 1 capital, total assets, loan balances, deposit composition (core, large, demand deposits), securities, write-offs; also TAG participation | no page yet |
| Census Bureau | County-level unemployment rate (UNEMP) for bank's main office county; matching covariate | no page yet |
| Federal Housing Finance Agency (FHFA) | County-level housing price index (LHPI) for bank's main office county; matching covariate | [FHFA House Price Index](/wiki/datasets/fhfa-hpi/) |
| U.S. Treasury | TARP Capital Purchase Program participation indicator; matching covariate | no page yet |

Sample: 4Q2005-4Q2011 (PSM baseline). Broad panel for motivating regressions: 1999-2018 (75 quarters, 123,310 observations). Data availability statement: "Data are available from the public sources cited in the text" (p. 22).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jcorpfin.2026.102995) if you are: studying how banking regulation affects accounting discretion; designing DiD studies using EESA as a natural experiment for DI-related hypotheses; comparing the Nicoletti (2018) and Beatty and Liao (2014) LLP discretion constructions; or investigating whether regulatory intervention can attenuate moral hazard from deposit insurance. The exact PSM procedure (22 matching variables, Table 2, p. 7) and the placebo designs (Table 8, p. 15-16) are important for replication.

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* 99, 2026, article 102995. This distillation was updated on 2026-10-04 and is **not human-verified or independently reproduced**. The paper is paywalled (© 2026 Elsevier B.V. All rights reserved); only textual extract is provided here.

> Pugachev, Leo, Ashok Robin, Dilin Wang, and Rong Yang. "Deposit insurance and
> discretion in loan loss provisioning." *Journal of Corporate Finance* 99 (2026): 102995.
> DOI: [10.1016/j.jcorpfin.2026.102995](https://doi.org/10.1016/j.jcorpfin.2026.102995).
> © 2026 Elsevier B.V. All rights reserved. Extract-only; not reproduced.
