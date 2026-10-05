---
title: "Partisanship and Fiscal Policy in Economic Unions: Carlino, Drautzburg, Inman & Zarra (2023)"
description: >-
  Distilled: Using a regression discontinuity design on close gubernatorial elections,
  the paper shows Republican governors spend 0.29 percentage points less (elasticity)
  per 1 percent increase in federal intergovernmental transfers than Democratic governors,
  instead reducing debt and cutting taxes with a two-year lag; a calibrated New Keynesian
  two-state monetary union model implies the IG transfer impact multiplier falls by 0.58
  under equal partisan representation relative to an all-Democratic benchmark.
  American Economic Review 113(3), 2023, paywalled. Thirty-five core results with source
  locators, the NK model equations, and the RDD specification; LLM-distilled, not
  human-verified.
sidebar:
  label: Carlino-Drautzburg-Inman-Zarra 2023
  order: 1
tags: [paper-summary, fiscal-policy, political-economy, fiscal-federalism, macroeconomics,
       regression-discontinuity, panel-regression,
       peer-reviewed, unreplicated,
       data:census-of-governments, data:faads, data:fred, data:klarner-partisan-data]
paper:
  authors: Gerald Carlino, Thorsten Drautzburg, Robert Inman, and Nicholas Zarra
  authorList:
    - { family: Carlino, given: Gerald A., affiliation: Federal Reserve Bank of Philadelphia }
    - { family: Drautzburg, given: Thorsten, affiliation: Federal Reserve Bank of Philadelphia }
    - { family: Inman, given: Robert D., orcid: "0000-0002-4750-1422", affiliation: University of Pennsylvania (Wharton) and NBER }
    - { family: Zarra, given: Nicholas, affiliation: New York University Stern }
  year: 2023
  venue: American Economic Review 113(3), March 2023, 701-737
  venueShort: AER 2023
  doi: 10.1257/aer.20210147
  jel:
    codes: [E62, H77, D72]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics:
    - Fiscal Policies and Political Economy
    - Fiscal Policy and Economic Growth
    - Local Government Finance and Decentralization
  dataAccess: public
  outcome:
    - state government expenditure growth in response to federal intergovernmental transfers
    - state government debt outstanding
    - state top marginal income tax rate
    - state GDP growth
    - aggregate fiscal multiplier of federal IG transfers
  outcomeClass: [macro-aggregates]
  license: >-
    AEA copyright; no CC licence found in Crossref REST API license[] block (license[] empty);
    AEA 12-month embargo expired March 2024; no open-access PDF indexed in OpenAlex
    (checked 2026-06-25); replication data openly available at
    ICPSR doi:10.3886/E177001V1.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "no open-access PDF in OpenAlex (checked 2026-06-25); AEA 12-month embargo expired March 2024; article available via aeaweb.org subscription"
  redistribution: extract-only
  resultsCount: 35
  citedByCount: 20
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, panel-regression, dynamic-general-equilibrium]
    identification: rdd
  contributionType: [new-fact, new-theory]
  mechanisms: [taxes]
  scope:
    region: US
    period: 1983-01..2014-12
    frequency: annual
    dataType: [administrative, accounting]
    granularity: [aggregate]
    n: "1,508 state-years (48 states, 32 years, 1983-2014); close-election RDD subsample: 299 Democratic, 333 Republican state-years (632 total close-election state-years)"
  findings:
    - { ref: R1, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "-0.290 (SE = 0.098); t-stat approximately -3.0", direction: negative, vsBenchmark: "Republican vs Democratic governors; robust RDD, party x year FE (Table 2, col. 5)" }
    - { ref: R2, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "0.524 (SE = 0.239); additional spending cut by Republicans per 1% IG cut", direction: negative, vsBenchmark: "Republican governors cut spending 0.524% more per 1% IG cut than Democrats (Table 2, col. 5)" }
    - { ref: R3, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: coefficient, value: "Democratic MPS = $1.346 per $1 IG increase (SE = $0.600); Republican partisan difference = -$1.576 (SE = $0.892); Republican total approximately -$0.230 (not significant)", direction: negative, vsBenchmark: "Republican governors spend $1.576 less per $1 IG increase than Democrats (Table 4, col. 2)" }
    - { ref: R4, outcome: state government debt outstanding, metric: elasticity, value: "Republican states lower debt by approximately 0.25% more per 1% IG increase, persisting at least 3 years", direction: negative, vsBenchmark: "Republican vs Democratic governors; RDD with quadratic MOV (Figure 7, Panel A)" }
    - { ref: R5, outcome: state top marginal income tax rate, metric: elasticity, value: "approximately 0.05 pp (1% in log terms) lower in Republican states per 1% IG increase, with 2-year lag", direction: negative, vsBenchmark: "Republican vs Democratic governors 2 years after IG receipt; no partisan difference on impact (Figure 7, Panel B)" }
    - { ref: R6, outcome: state GDP growth, metric: elasticity, value: "-0.334% (Republican minus Democratic cumulative GDP growth elasticity per 1% IG increase)", direction: negative, vsBenchmark: "Democratic-led states show 0.334% higher GDP per 1% IG increase; marginally significant (Figure 8)" }
    - { ref: R7, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Impact multiplier: 1.22 (all Democrats) vs 0.64 (equal partisanship); difference = -0.58 (SE = 0.33)", direction: negative, vsBenchmark: "equal partisan split reduces IG impact multiplier by 0.58 vs all-Democratic counterfactual (Table 7, col. 1-3, row 1)" }
    - { ref: R8, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Long-run PDV multiplier: 0.64 (all Democrats) vs 0.80 (equal partisanship); difference = +0.16 (SE = 0.09)", direction: positive, vsBenchmark: "equal partisan split raises long-run multiplier by 0.16 via delayed Republican tax cuts (Table 7, col. 1-3, row 2)" }
    - { ref: R9, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: t-stat, value: "No reported robust balance t-statistic is significant at 10%; reported range -1.3 to 1.4 across close-election covariates; 632 state-years", direction: none, vsBenchmark: "Democratic vs Republican governors in close elections (Table 1, col. 6)" }
    - { ref: R10, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x positive IG growth: -0.260 (SE = 0.104) without fixed effects and -0.272 (SE = 0.075) with fixed effects", direction: negative, vsBenchmark: "Linear MSE RDD estimates compared with robust RDD estimates (Table 2, cols. 1 and 4)" }
    - { ref: R11, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x positive IG growth: -0.093 (SE = 0.018) without fixed effects and -0.068 (SE = 0.021) with fixed effects", direction: negative, vsBenchmark: "Full-sample OLS estimates are smaller in magnitude than close-election RDD estimates (Table 2, cols. 3 and 6)" }
    - { ref: R12, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x positive IG growth: -0.251 (SE = 0.077)", direction: negative, vsBenchmark: "Robust RDD using Census IG aid excluding welfare and highway aid (Table 3, col. 2)" }
    - { ref: R13, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x negative IG growth: 0.438 (SE = 0.175)", direction: negative, vsBenchmark: "Robust RDD using Census IG aid excluding welfare and highway aid (Table 3, col. 2)" }
    - { ref: R14, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x positive IG growth: -0.404 (SE = 0.134)", direction: negative, vsBenchmark: "Robust RDD using FAADS-defined aid, 1983-2010 (Table 3, col. 4)" }
    - { ref: R15, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x negative IG growth: 0.186 (SE = 0.140), not statistically significant", direction: none, vsBenchmark: "Robust RDD using FAADS-defined aid, 1983-2010 (Table 3, col. 4)" }
    - { ref: R16, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: coefficient, value: "Weighted mean spending response: $1.051 per $1 change in aid; increase-only weighted effect $0.53 and cut-only effect $1.80", direction: positive, vsBenchmark: "Robust RDD party-specific estimates weighted by party and aid-change shares; simple OLS estimate is $0.81 (text p. 717)" }
    - { ref: R17, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "IG growth above the 75th percentile averages 18.9% ($114 per resident); other observations average 4.6% ($25 per resident); only Democratic governors show a higher spending response at MOV = 0", direction: positive, vsBenchmark: "Democratic vs Republican governors at high and lower IG-aid increases (Figure 3 and text p. 713)" }
    - { ref: R18, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Estimated partisan MPS differences remain negative in 5-percentage-point MOV windows through |MOV| = 30 pp; no partisan difference is observed beyond 30 pp", direction: negative, vsBenchmark: "Rolling-window estimates away from the RDD cutoff (Figure 4, panels A-B; text pp. 717-718)" }
    - { ref: R19, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: p-value, value: "No relationship between MOV and candidate ideological difference: p = 0.18 in the full sample and p = 0.99 excluding elections with MOV above 40 pp", direction: none, vsBenchmark: "Candidate ideology difference vs election closeness (Figure 5 and text p. 719)" }
    - { ref: R20, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x positive IG x unemployment-stress interaction: -0.009 (SE = 0.15), not significant; baseline partisan interaction: -0.272 (SE = 0.16)", direction: none, vsBenchmark: "Partisan spending response when unemployment is above the state median (Table 5, col. 2)" }
    - { ref: R21, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Republican x positive IG x downgrade interaction: 0.329 (SE = 0.27), not significant; baseline partisan interaction: -0.313 (SE = 0.11)", direction: none, vsBenchmark: "Partisan spending response after a state bond-rating downgrade (Table 5, col. 4)" }
    - { ref: R22, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Polarization interaction with Republican x positive IG growth: -0.13 (SE = 0.06)", direction: negative, vsBenchmark: "A one-standard-deviation increase in lagged polarization makes the Republican spending response to aid increases more negative (eq. 3, text pp. 720-721)" }
    - { ref: R23, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: elasticity, value: "Polarization interaction with Republican x negative IG growth: 0.04 (SE = 0.06), not statistically significant", direction: none, vsBenchmark: "Polarization-related change in the partisan spending response to aid cuts (eq. 3, text p. 721)" }
    - { ref: R24, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: coefficient, value: "No significant partisan differences across division-mean, inverse-sample-weighted, population-weighted, and pooled estimates", direction: none, vsBenchmark: "Nine Census divisions compared with the pooled robust RDD (Figure 6, p. 722)" }
    - { ref: R25, outcome: state GDP growth, metric: elasticity, value: "For IG cuts, the GDP-growth partisan difference has the opposite sign and similar magnitude to the increase estimate, but is marginally insignificant", direction: none, vsBenchmark: "Republican vs Democratic states after decreases in IG aid (text p. 724)" }
    - { ref: R26, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: pp-effect, value: "Equal partisanship reduces the average state-spending increase by 0.65 percentage points of GDP; 90% CI (-0.04, -1.26)", direction: negative, vsBenchmark: "Half Republican and half Democratic state preferences vs all Democratic preferences (Figure 9, panel A; text p. 730)" }
    - { ref: R27, outcome: state top marginal income tax rate, metric: coefficient, value: "Peak average tax-rate difference is -5.7%; 90% CI (-0.4%, -11.0%)", direction: negative, vsBenchmark: "Equal partisanship vs all Democratic preferences after the IG transfer shock (Figure 9, panel B; text p. 730)" }
    - { ref: R28, outcome: state GDP growth, metric: pp-effect, value: "Equal partisanship lowers the initial average state-output increase by 0.5 percentage points of GDP; 90% CI (-0.0%, -0.9%); output is 0.05% higher from year 3", direction: mixed, vsBenchmark: "Equal partisanship vs all Democratic preferences after the IG transfer shock (Figure 9, panel C; text pp. 730-731)" }
    - { ref: R29, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Impact multiplier difference: -0.26 (SE = 0.07)", direction: negative, vsBenchmark: "Equal partisanship vs all-Democratic counterfactual using full-sample OLS partisan estimates (Table 7, separable preferences, OLS rows)" }
    - { ref: R30, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Long-run PDV multiplier difference: +0.07 (SE = 0.02)", direction: positive, vsBenchmark: "Equal partisanship vs all-Democratic counterfactual using full-sample OLS partisan estimates (Table 7, separable preferences, OLS rows)" }
    - { ref: R31, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Impact multiplier difference: -0.41 (SE = 0.23)", direction: negative, vsBenchmark: "Equal partisanship vs all-Democratic counterfactual under GHH preferences (Table 7, GHH RDD row)" }
    - { ref: R32, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Long-run PDV multiplier difference: +1.33 (SE = 0.78)", direction: positive, vsBenchmark: "Equal partisanship vs all-Democratic counterfactual under GHH preferences (Table 7, GHH RDD row)" }
    - { ref: R33, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Republican-governor share rises from 30% in 1984 to 67%; impact multiplier falls by at most 0.42 versus 1984 (90% CI -0.03 to -0.80)", direction: negative, vsBenchmark: "Simulated 1983-2019 partisan composition, relative to 1984 low Republican share (Figure 10, panels A-B; text p. 733)" }
    - { ref: R34, outcome: aggregate fiscal multiplier of federal IG transfers, metric: fiscal-multiplier, value: "Long-run PDV multiplier rises by no more than 0.13 from the 1984 benchmark; reported interval 0.01 to 0.18", direction: positive, vsBenchmark: "Simulated 1983-2019 partisan composition, relative to 1984 (Figure 10, panel C; text p. 733)" }
    - { ref: R35, outcome: state government expenditure growth in response to federal intergovernmental transfers, metric: p-value, value: "McCrary density test fails to reject continuity of the MOV running variable at the cutoff; the main-text note does not report a test statistic or p-value", direction: none, vsBenchmark: "RDD sorting/manipulation check (text p. 710, citing online Appendix Figure D1.1)" }
  resultType: confirms
  relatesTo:
    - { cite: "Besley and Case (2003)", doi: '10.1257/002205103321544693', relation: extends, note: "extends their OLS finding of partisan spending differences to a causal RDD design and quantifies aggregate multiplier effects" }
    - { cite: "Lee, Moretti, and Butler (2004)", doi: '10.1162/0033553041502153', relation: builds-on, note: "RDD design using gubernatorial close-election margins of victory, adapted from their US House application" }
    - { cite: "Nakamura and Steinsson (2014)", doi: '10.1257/aer.104.3.753', relation: builds-on, note: "NK monetary union model with fiscal spillovers; adapts their two-region open-economy framework to incorporate partisan state fiscal rules" }
    - { cite: "Chodorow-Reich (2019)", doi: '10.1257/pol.20160465', relation: cites, note: "reviews ARRA IG aid multiplier literature; their headline estimate of 1.7 exceeds this paper's because it does not apply to the ZLB-constrained ARRA episode" }
  openQuestions:
    - "Whether partisan differences in MPS are constant across all margins of victory; RDD estimates are local (close elections), and OLS suggests possible attenuation for landslide governors (p. 717, 731)."
    - "How partisan differences interact with different IG aid types (matched vs. block grants) and whether results extend to local government spending beyond state-level decisions (p. 705, 731)."
    - "The model does not incorporate the zero lower bound on interest rates at the time of large IG shocks such as ARRA; accounting for the ZLB would likely raise multiplier estimates (p. 731)."
  replicationCode:
    url: https://doi.org/10.3886/E177001V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 701-737); eight core results extracted with table and figure locators. Model equations transcribed from pp. 707-708 (empirical specs) and pp. 724-726 (NK model). Not human-verified. Not reproduced. Replication data available at ICPSR doi:10.3886/E177001V1." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; four fixes applied: (1) eq. 5 bond superscripts B_t→B_t^u and B_{t-1}→B_{t-1}^u; (2) eq. 8 first denominator corrected from \\bar{\\Pi}_t to \\Pi_t (current inflation); (3) R5 findings metric corrected from pp-effect to elasticity (Figure 7 title: 'DEBT AND TAX ELASTICITIES'); (4) scope.n close-election subsample corrected from '632 Democratic, 333 Republican' to '299 Democratic, 333 Republican (632 total)' per Table 1 / p.710. Colorful adjective 'substantially' removed from conclusion paragraph. All 8 Core results rows verified: R1-R3 against Table 2 col.5 (p.713) and Table 4 col.2 (p.716); R4-R5 against Figure 7 (p.723); R6 against Figure 8 (p.724); R7-R8 against Table 7 / p.731 text. Equations 1-3 (pp.707-708, p.720) and 4, 6-9 (pp.724-726) checked term-by-term and match the PDF."
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF; added 27 Core results rows, equation (3), and the missing stress-interaction, debt, tax, and GDP estimating specifications. These additions are not human-verified and have not been reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 35 Core rows, equations/specifications, classifications, findings, prose, and frontmatter re-checked against the PDF; corrected Table 7 page, eq. 4 household shares and parameter index, Figure 3 locator, mechanism, and resultType. Documented the conflicting unemployment interaction definitions in Table 5 and text. Table locator checker could not detect captions; relevant pages checked directly." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210147", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] block is empty; published 2023-03-01; volume 113 issue 3 pp 701-737; AEA copyright; no CC licence declared; AEA 12-month embargo policy implies free readability since March 2024 but no redistribution rights confirmed" }
  rightsSignalConflict: false
---

**What this is.** The core results, the New Keynesian two-state monetary union model, and the regression discontinuity design that identifies partisan differences in state governors' propensity to spend federal intergovernmental (IG) transfers: enough to understand what the paper found and how, without reading all 37 pages. To replicate or extend it, read the full source at [doi:10.1257/aer.20210147](https://doi.org/10.1257/aer.20210147).

## TL;DR

The paper documents that the party of the state governor is a source of heterogeneity in how federal IG transfers affect the macroeconomy. Using a regression discontinuity design on close gubernatorial elections, it finds Republican governors spend 0.29 percent less (elasticity) per 1 percent increase in IG aid than Democratic governors, and instead reduce debt immediately and cut top income tax rates with a two-year lag. A calibrated New Keynesian model of a two-state monetary union with these estimated partisan fiscal rules implies an intertemporal trade-off: the IG transfer impact multiplier is 1.22 when all governors behave like Democrats but falls to 0.64 under equal partisan representation, a difference of 0.58; the long-run discounted multiplier, however, is 0.16 higher under equal partisanship (0.80 vs. 0.64) because delayed Republican tax cuts stimulate future output. The paper extends Besley and Case (2003), who documented partisan spending differences using OLS, to a causal RDD design, and adds the aggregate macroeconomic implications via a calibrated NK model. The partisan differences are only statistically significant in the post-Reagan era and grew with national polarization.

## Core results

Magnitudes are as reported; preferred estimates use the robust RDD estimator (quadratic MOV polynomial, state x party and year x party fixed effects, bandwidth 10 percentage points). Locators point to the published version.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Republican governors spend less per 1% increase in IG aid than Democratic governors (MPS elasticity partisan difference) | Table 2, col. 5, p. 713 | $$\gamma_{r,\text{inc}} = -0.290$$ (SE 0.098); t approximately -3.0 with party FE |
| R2 | Republican governors cut spending more per 1% decrease in IG aid than Democrats (asymmetric response to cuts) | Table 2, col. 5, p. 713 | $$\gamma_{r,\text{cut}} = 0.524$$ (SE 0.239); statistically significant at 5% |
| R3 | Dollar-for-dollar: Democratic MPS near $1.35 per $1 IG increase; Republican partisan difference -$1.58, leaving Republican total near zero | Table 4, col. 2, p. 716 | Democrat: $1.346 (SE 0.600); Rep diff: -$1.576 (SE 0.892); Republican total not different from zero |
| R4 | Republican states immediately lower debt outstanding relative to Democratic states; effect persists for at least 3 years | Figure 7, Panel A, p. 723 | Debt elasticity partisan difference approximately -0.25 per 1% IG increase; statistically significant |
| R5 | Republican top marginal income tax rates are lower, but only with a 2-year lag; no partisan tax difference on impact | Figure 7, Panel B, p. 723 | Log tax-rate elasticity partisan difference approximately -1% after 2 years; zero on impact and year 1 |
| R6 | Democratic-led states show higher GDP growth per dollar of IG aid, with the gap persisting up to 3 years | Figure 8, p. 724 | Partisan GDP growth elasticity (Rep - Dem): approximately -0.334% per 1% IG increase; marginally significant |
| R7 | IG transfer impact multiplier falls by 0.58 under equal partisanship vs. all-Democratic baseline | Table 7, rows 1-2, col. 1-3, p. 732 | Impact multiplier: 1.22 (all Democrats) vs 0.64 (equal partisanship); difference -0.58 (SE 0.33) |
| R8 | Long-run PDV multiplier is 0.16 higher under equal partisanship than all-Democratic, because of delayed Republican tax cuts | Table 7, rows 1-2, col. 1-3, p. 732 | Long-run multiplier: 0.64 (all Democrats) vs 0.80 (equal partisanship); difference +0.16 (SE 0.09) |
| R9 | Predetermined covariates show no significant Democratic-Republican differences in close elections | Table 1, col. 6, p. 710 | None of the robust equality t-statistics is significant at the 10% level; reported t-statistics range from -1.3 to 1.4; close-election sample has 299 Democratic and 333 Republican state-years |
| R10 | Linear MSE RDD estimates also show lower spending responses for Republican governors on IG increases | Table 2, cols. 1 and 4, p. 713 | Republican interaction: -0.260 (SE 0.104) without fixed effects and -0.272 (SE 0.075) with party-specific fixed effects |
| R11 | Full-sample OLS estimates attenuate the partisan difference in spending responses | Table 2, cols. 3 and 6, p. 713 | Republican interaction for positive IG growth: -0.093 (SE 0.018) without fixed effects and -0.068 (SE 0.021) with fixed effects |
| R12 | The positive-aid partisan spending difference persists after excluding welfare and highway aid | Table 3, col. 2, p. 715 | Republican x positive IG growth: -0.251 (SE 0.077), robust RDD |
| R13 | Republicans cut spending more after aid decreases when the Census measure excludes welfare and highway aid | Table 3, col. 2, p. 715 | Republican x negative IG growth: 0.438 (SE 0.175), robust RDD |
| R14 | The positive-aid partisan spending difference persists with FAADS-defined nonmatching aid | Table 3, col. 4, p. 715 | Republican x positive IG growth: -0.404 (SE 0.134), robust RDD, 1983-2010 |
| R15 | The FAADS estimate for partisan spending responses to aid cuts is not statistically significant | Table 3, col. 4, p. 715 | Republican x negative IG growth: 0.186 (SE 0.140), robust RDD, 1983-2010 |
| R16 | Party- and direction-weighted estimates imply an aggregate flypaper effect close to one dollar per dollar of aid | Text p. 717 | Weighted spending response: $1.051 per $1 change in aid; $0.53 for increases and $1.80 for cuts, compared with the simple OLS estimate of $0.81 |
| R17 | Spending responses differ by the size of the IG increase at the election cutoff | Figure 3, p. 712; text p. 713 | Above the 75th percentile, IG growth averages 18.9% ($114 per resident); below it, 4.6% ($25); Democrats' expenditure response is higher at the cutoff, while Republican confidence intervals overlap |
| R18 | Partisan differences in spending increases extend beyond close elections, up to MOV 30 percentage points | Figure 4, panels A-B, pp. 717-718 | Rolling-window partisan estimates remain negative through |MOV| = 30 percentage points; no partisan differences are found for margins above 30 points |
| R19 | Candidate ideological differences do not vary significantly with election closeness | Figure 5 and text p. 719 | p = 0.18 in the full sample; p = 0.99 after excluding elections with MOV above 40 percentage points |
| R20 | High unemployment does not materially change the positive-aid partisan spending difference | Table 5, col. 2, p. 719 | Republican x positive IG x unemployment-stress interaction: -0.009 (SE 0.15), not significant; baseline partisan interaction: -0.272 (SE 0.16) |
| R21 | A recent state bond downgrade does not materially change the positive-aid partisan spending difference | Table 5, col. 4, p. 719 | Republican x positive IG x downgrade interaction: 0.329 (SE 0.27), not significant; baseline partisan interaction: -0.313 (SE 0.11) |
| R22 | Greater national polarization strengthens the Republican-Democratic spending difference for aid increases | Eq. 3, text pp. 720-721 | Republican x positive IG growth x lagged polarization: -0.13 (SE 0.06); before 1980 implied difference approximately 0.01 (SE 0.08), after 1990 approximately -0.25 (SE 0.09) |
| R23 | Polarization does not significantly change the partisan spending response to aid cuts | Eq. 3, text pp. 720-721 | Republican x negative IG growth x lagged polarization: 0.04 (SE 0.06), not significant |
| R24 | Partisan estimates do not differ significantly across US census divisions | Figure 6, p. 722 | Division mean, inverse-sample-weighted, population-weighted, and pooled estimates show no significant differences |
| R25 | The GDP response to IG cuts has the opposite sign from the increase response but is marginally insignificant | Text p. 724 | Republican-Democratic cumulative GDP-growth difference is opposite in sign and similar in magnitude to the -0.334% increase estimate, but marginally insignificant |
| R26 | Equal partisanship lowers the model's average state-spending response to an IG shock | Figure 9, panel A, text p. 730 | Spending difference relative to all-Democratic preferences: -0.65 percentage points of GDP; 90% CI (-0.04, -1.26) |
| R27 | Equal partisanship lowers the model's average state tax rate after an IG shock | Figure 9, panel B, text p. 730 | Peak difference relative to all-Democratic preferences: -5.7%; 90% CI (-0.4%, -11.0%) |
| R28 | Equal partisanship lowers impact state output, followed by higher output from year 3 | Figure 9, panel C, text pp. 730-731 | Impact output difference: -0.5 percentage points of GDP; 90% CI (-0.0%, -0.9%); output is 0.05% higher from year 3 |
| R29 | The impact multiplier remains lower with equal partisanship under OLS-based MPS estimates | Table 7, p. 732 | Difference from all-Democratic benchmark: -0.26 (SE 0.07) |
| R30 | The long-run multiplier remains higher with equal partisanship under OLS-based MPS estimates | Table 7, p. 732 | Difference from all-Democratic benchmark: +0.07 (SE 0.02) |
| R31 | Under GHH preferences, equal partisanship still lowers the impact multiplier | Table 7, p. 732 | Difference from all-Democratic benchmark: -0.41 (SE 0.23) |
| R32 | Under GHH preferences, equal partisanship raises the long-run multiplier | Table 7, p. 732 | Difference from all-Democratic benchmark: +1.33 (SE 0.78) |
| R33 | The changing Republican governor share is associated with lower simulated IG impact multipliers | Figure 10, panels A-B, text p. 733 | Republican share rises from 30% in 1984 to 67%; maximum impact-multiplier difference is -0.42 in 2018 relative to 1984, with 90% CI (-0.03, -0.80) |
| R34 | Long-run multipliers rise less over time than impact multipliers as the Republican share grows | Figure 10, panel C, text p. 733 | Long-run multiplier increases by at most 0.13 from its 1984 benchmark; reported interval 0.01 to 0.18 |
| R35 | A density test finds no evidence that governors or voters sort around the close-election cutoff | Text p. 710, fn. 13, citing online Appendix Figure D1.1 | McCrary test fails to reject continuity of the MOV running variable; the cited main-text note gives no statistic or p-value |

**Overall (paper's conclusion).** Partisanship of state governors alters how federal IG transfers translate into macroeconomic activity. More Democratic governors raise the short-run IG impact multiplier; more Republican governors raise the long-run discounted multiplier by channeling aid into delayed tax cuts. The resulting intertemporal trade-off means the optimal partisan composition of governors depends on whether the federal government prioritizes short-run or long-run stimulus. As national polarization increased after 1980, partisan differences in MPS widened and became statistically detectable, implying the aggregate consequences of partisanship for IG policy have grown over time.

## Theory / model

The model is a two-state New Keynesian monetary union with home state size $$n$$ and foreign state size $$1-n$$. The states are symmetric except for their governors' partisan MPS. Each state has constrained households (fraction $$1-\mu$$, hand-to-mouth) and unconstrained households (fraction $$\mu$$, with complete markets and bond holdings). Households in each state have utility (eq. 4, p. 724):

$$
u(C_t, N_t, G_{st,t}) = \frac{1}{1-1/\varepsilon_C} C_t^{1-1/\varepsilon_C} - \kappa_i^N \frac{N_t^{1+1/\varepsilon_N}}{1+1/\varepsilon_N} + v(G_{st,t}) \tag{4}
$$

where $$C_t$$ is aggregate consumption, $$N_t$$ labor supply, $$G_{st,t}$$ state government services, $$\varepsilon_C$$ the elasticity of intertemporal substitution, $$\varepsilon_N$$ the Frisch elasticity, and $$\kappa_i^N$$ a leisure weight that differs by household type $$i \in \{c, u\}$$. The budget constraint for unconstrained agents is (eq. 5, p. 725):

$$
P_t C_t^u + B_t^u \leq (1 - \tau_t^f - \tau_t^{st}) W_t N_t^u + B_{t-1}^u R_{t-1}^n + Pr_t + Tr_t^u \tag{5}
$$

Intermediate goods firms produce using labor only under decreasing returns to scale (eq. 6, p. 725):

$$
y_{h,t}(z) = A_t \times N_t(z)^{1-\alpha} \tag{6}
$$

where $$\alpha \in (0,1)$$ is the fixed-factor share. Firms face Calvo price stickiness: with probability $$\xi$$ a firm cannot reoptimize; calibrated $$\xi = 0.735$$ at annual frequency to match a peak defense spending multiplier of 0.8.

**State government fiscal rules.** Government consumption responds to IG transfers through the partisan MPS $$\psi_{IG}$$ (eq. 7, p. 725):

$$
G_{st,t} = \psi_{IG}\!\left(\frac{IG_t}{P_t} - \bar{IG}\right) + G_{st,t}^x \tag{7}
$$

The Republican home state uses $$\psi_{IG} = 0$$ (calibrated: Republican spending effect not significantly different from zero) while the Democratic foreign state uses $$\psi_{IG}^* = 1.576$$ (robust RDD estimate from Table 4, col. 2). State tax rates adjust smoothly to service debt and to cover expenditure net of IG revenue (eq. 8, p. 726):

$$
\tau_{st,t} = \rho_\tau \tau_{st,t-1} + (1-\rho_\tau)\!\left\{\bar{\tau}_{st} + \psi_{st,b}\!\left[(R_{t-1}^n - 1)\frac{b_{st,t-1}}{\Pi_t} - (\bar{R}^n - 1)\frac{\bar{b}_{st}}{\bar{\Pi}}\right] + \psi_{st,E}\!\left[G_{st,t-1} - \bar{G}_{st} - \frac{IG_{t-1} - \bar{IG}}{P_t}\right]\right\} \tag{8}
$$

Calibrated: persistence $$\rho_\tau = 0.35$$, debt loading $$\psi_{st,b} = 0.99$$, expenditure-net-of-IG loading $$\psi_{st,E} = 0.85$$ (Table 6, p. 729). This yields no tax change in year 1, a fall after year 2, and reversal toward zero by year 3, consistent with the micro estimates in Figure 7.

**Monetary policy.** The common central bank follows a Taylor rule reacting to union-wide inflation and the output gap (eq. 9, p. 726):

$$
R_t^n = \left(\frac{\bar{\Pi}}{\beta}\right)^{\rho_r}\!\!\left[\!\left(\frac{\Pi_t^{agg}}{\bar{\Pi}}\right)^{\psi_{r,\pi}}\!\!\left(\frac{Y_t^{agg}}{Y_t^{flex}}\right)^{\psi_{r,y}}\right]^{1-\rho_r} \tag{9}
$$

where $$\Pi_t^{agg} = n\Pi_t + (1-n)\Pi_t^*$$ and $$Y_t^{agg} = nY_t + (1-n)Y_t^*$$ are population-weighted. Calibrated: $$\rho_r = 0.75$$, $$\psi_{r,\pi} = 1.5$$, $$\psi_{r,y} = 0.5$$. The model builds on Nakamura and Steinsson (2014) by adding heterogeneous state fiscal rules that encode partisan differences. It is linearized around a deterministic steady state and solved numerically with Dynare (Adjemian et al. 2011).

## Method

The identification design exploits the regression discontinuity in gubernatorial elections. Near a 50-50 vote outcome (margin of victory MOV = 0), the party of the winning governor is as good as randomly assigned. This yields a consistent estimate of partisan differences in MPS conditional on IG aid changes, without relying on the assumption that IG aid is itself randomly allocated. The design follows Lee, Moretti, and Butler (2004) and Ferreira and Gyourko (2009), who used close-election RDDs for US House representatives and mayors.

MOV is signed positive (negative) for a Democratic (Republican) winner. Standard errors are two-way clustered by state and year throughout. The bandwidth $$\bar{m}$$ on absolute MOV is chosen by cross-validated MSE minimization using linear MOV controls ($$q = 1$$). The preferred "robust" estimator uses quadratic MOV controls ($$q = 2$$) with the same bandwidth; the preferred bandwidth is 10 percentage points with fixed effects and 11 without. Internal validity is assessed via Table 1 (p. 710), which shows no significant differences in pre-determined covariates across Democratic and Republican winners in close elections. External validity is assessed in Section III: rolling-window OLS shows the same partisan pattern for margins up to 30 percentage points, and candidate ideological differences are uncorrelated with closeness.

## Empirical specifications

**Baseline panel regression (eq. 1, p. 707).** Changes in log state expenditure $$\Delta \ln E_{s,t}$$ in state $$s$$, fiscal year $$t$$, are regressed on log changes in IG aid interacted with the governor's party lagged one year ($$\text{Rep}_{s,t-1} = 1$$ for Republican):

$$
\Delta \ln E_{s,t} = (\gamma_{0,\text{inc}} + \gamma_{r,\text{inc}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{inc}} + (\gamma_{0,\text{cut}} + \gamma_{r,\text{cut}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{cut}} + \mu_0 + \mu_r \times \text{Rep}_{s,t-1} + \text{fixed effects} + e_{s,t} \tag{1}
$$

where $$\Delta \ln IG_{s,t}^{\text{inc}} = \max\{0, \Delta \ln IG_{s,t}\}$$ captures IG increases and $$\Delta \ln IG_{s,t}^{\text{cut}} = \min\{0, \Delta \ln IG_{s,t}\}$$ captures decreases. The Democratic MPS elasticity is $$\gamma_{0,\text{inc}}$$ for increases and $$\gamma_{0,\text{cut}}$$ for decreases; the Republican partisan difference is $$\gamma_{r,\text{inc}}$$ (expected negative: Republicans spend less on increases) and $$\gamma_{r,\text{cut}}$$ (expected positive: Republicans cut more when aid falls). Fixed effects are state x party and year x party in the preferred specification.

**RDD specification (eq. 2, p. 708).** Equation (1) is augmented with a polynomial of order $$q$$ in the MOV and its interactions with IG changes, estimated on observations within bandwidth $$|MOV_{s,t-1}| \leq \bar{m}$$:

$$
\Delta \ln E_{s,t} = (\gamma_{0,\text{inc}} + \gamma_{r,\text{inc}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{inc}} + (\gamma_{0,\text{cut}} + \gamma_{r,\text{cut}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{cut}} $$

$$+ \sum_{\hat{s} \in \{\text{cut},\text{inc}\}}\sum_{p=1}^{q} (\gamma_{0,\hat{s},m,p} + \gamma_{r,\hat{s},m,p} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\hat{s}} \times MOV_{s,t-1}^p $$

$$+ \sum_{p=1}^{q} (\beta_{0,m,p} + \beta_{r,m,p} \times \text{Rep}_{s,t-1})MOV_{s,t-1}^p + \mu_0 + \mu_r \times \text{Rep}_{s,t-1} + \text{fixed effects} + e_{s,t} \tag{2}
$$

The RDD identifies partisan differences $$(\gamma_{r,\text{inc}}, \gamma_{r,\text{cut}})$$ but not the Democratic baseline MPS $$(\gamma_{0,\text{inc}}, \gamma_{0,\text{cut}})$$. The paper benchmarks Republican MPS to zero (consistent with the near-zero robust estimate) and sets Democratic MPS to 1.576 (from dollar-level Table 4, col. 2). Headline results are R1 and R2 above (Table 2, cols. 5 and 2 respectively).

**Debt and tax rate specifications.** Equations (1) and (2) are re-estimated replacing $$\Delta \ln E_{s,t}$$ with the log level of total debt outstanding and the log of the state top marginal income tax rate, estimated at horizons 0-3 years (Figure 7, p. 723). These specifications produce R4 and R5: Republicans lower debt immediately; tax cuts arrive with a two-year lag. Results R4-R5 do not appear in a formal regression table; Figure 7 plots the RDD coefficient path with 68% and 90% pointwise confidence bands.

**State GDP specification.** Equation (2) with cumulative GDP growth as the dependent variable produces R6 (Figure 8, p. 724): a 0.334 percent Democratic advantage in GDP growth per 1 percent increase in IG aid, which persists for up to three years.

**Debt and tax horizon specifications (written out from §IV-A, p. 722).** The authors re-estimate the RDD equation at horizons $$h = 0,1,2,3$$, replacing expenditure growth with the change in log total state debt or the log top marginal tax rate. The displayed form below makes that replacement explicit; it is not numbered in the paper:

$$
\Delta_h \ln Y_{s,t} = (\gamma_{0,inc} + \gamma_{r,inc} \text{Rep}_{s,t-1})\Delta \ln \text{IG}_{s,t}^{inc} + (\gamma_{0,cut} + \gamma_{r,cut} \text{Rep}_{s,t-1})\Delta \ln \text{IG}_{s,t}^{cut} + \text{MOV polynomial and interactions} + \text{party fixed effects} + e_{s,t,h}
$$

Here $$Y_{s,t}$$ is total state debt outstanding or the top marginal income tax rate, and $$\Delta_h$$ denotes the outcome response at horizon $$h$$ to current IG growth. The preferred debt and tax paths use quadratic MOV controls; standard errors are clustered by state and year. The sample covers 1983-2014, with the close-election bandwidth selected for each specification. These are Figure 7's plotted coefficients, not a separately printed regression table.

**Fiscal-stress interaction specification (written out from Table 5, p. 719).** The paper interacts the aid-growth terms and party differences in equation (2) with two stress measures, separately. Table 5 defines the unemployment interaction variable as $$IA_{s,t}=\min\{0, U_{s,t}-U_{s,median}\}$$, while the accompanying text describes it as a dummy for unemployment above the state median; these definitions conflict in the PDF. The other specification uses a bond-downgrade dummy. The additional terms are:

$$
\begin{aligned}
\Delta \ln E_{s,t} ={}& (\gamma_{0,inc} + \gamma_{r,inc} \text{Rep}_{s,t-1})\Delta \ln \text{IG}_{s,t}^{inc} \\
&+ (\gamma_{0,cut} + \gamma_{r,cut} \text{Rep}_{s,t-1})\Delta \ln \text{IG}_{s,t}^{cut} \\
&+ (\delta_{0,inc} + \delta_{r,inc} \text{Rep}_{s,t-1})\Delta \ln \text{IG}_{s,t}^{inc} \text{IA}_{s,t} \\
&+ (\delta_{0,cut} + \delta_{r,cut} \text{Rep}_{s,t-1})\Delta \ln \text{IG}_{s,t}^{cut} \text{IA}_{s,t} \\
&+ (\lambda_0 + \lambda_r \text{Rep}_{s,t-1})\text{IA}_{s,t} \\
&+ \text{MOV polynomials and their interactions} + \text{party fixed effects} + e_{s,t}.
\end{aligned}
$$

These are two separate specifications, with state-by-party and year-by-party fixed effects and standard errors clustered by state and year. The unemployment sample has 630 observations, a 10 percentage-point MOV bandwidth, and 1983-2014 coverage; the downgrade sample has 676 observations, an 11-point bandwidth, and the same period (Table 5). The paper does not print a numbered equation for these interactions.

**State GDP response to aid cuts (written out from §IV-B, p. 724).** For the Figure 8 horizon estimates, equation (2) uses cumulative state GDP growth as the dependent variable and the positive or negative IG-growth terms as the regressors. This is the same RDD structure, with cumulative GDP growth replacing expenditure growth; the sample is 1983-2014, MOV controls are quadratic, and standard errors are clustered by state and year. The analogous aid-cut response is opposite in sign to the aid-increase response and marginally insignificant (text p. 724).

**Polarization extension (eq. 3, p. 720).** Interacting partisan MPS differences with a political polarization index $$PPC_{t-1}$$ (normalized; from Azzimonti 2018) shows that partisan MPS differences grew with polarization: the interaction is $$-0.13 \times PPC_{t-1}$$ (SE 0.06) for IG increases. Before 1980, $$PPC_{t-1}$$ averaged 1.1 standard deviations below the mean, implying near-zero partisan differences (consistent with the pre-Reagan evidence). After 1990, $$PPC_{t-1}$$ averaged 0.8 standard deviations above the mean, implying partisan differences of approximately $$-0.25$$ (standard error 0.09).

The printed polarization regression gives the estimated coefficients and their standard errors in brackets (eq. 3, p. 720). It covers 1964-2014, includes fixed effects and the interactions between the MOV polynomial, aid, polarization, and party, and clusters standard errors by state and year:

$$
\begin{aligned}
\Delta \ln E_{s,t} ={}& (0.20_{[0.05]} + 0.02_{[0.05]} \text{PPC}_{t-1})\Delta \ln \text{IG}_{s,t}^{inc} \\
&+ (-0.15_{[0.07]} - 0.13_{[0.06]} \text{PPC}_{t-1})\text{Rep}_{s,t-1}\Delta \ln \text{IG}_{s,t}^{inc} \\
&+ (0.04_{[0.01]} - 0.01_{[0.04]} \text{PPC}_{t-1})\Delta \ln \text{IG}_{s,t}^{cut} \\
&+ (0.17_{[0.07]} + 0.04_{[0.06]} \text{PPC}_{t-1})\text{Rep}_{s,t-1}\Delta \ln \text{IG}_{s,t}^{cut} \\
&+ (\text{MOV}, \text{MOV}^2) \times \text{IG} \times \text{PPC}_{t-1} \times \text{party interactions} \\
&+ \text{fixed effects} + e_{s,t}
\end{aligned}
\tag{3}
$$

Equation (1) uses the full 1,508 state-year panel for 1983-2014; equation (2)'s preferred robust RDD with party-specific state and year fixed effects uses 630 close-election state-years within a 10 percentage-point bandwidth. Standard errors are clustered by state and year for both specifications (Table 2, p. 713).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| US Census Bureau, State and Local Government Finance (State Government Finances series) | Primary source for state expenditure, revenue, debt, and tax data; 1983-2014 | no page yet |
| Federal Assistance Award Data System (FAADS) via National Archives / SAM | Identifies federal aid programs with matching provisions (excluded from main IG measure); 1983-2010 | no page yet |
| Council of State Governments, The Book of the States | Gubernatorial election outcomes, party affiliation, and term data | no page yet |
| US Bureau of Economic Analysis, Regional Economic Accounts | State-level GDP (personal income), used for R6 state GDP growth specifications | no page yet |
| US Bureau of Labor Statistics / Federal Reserve Bank of St. Louis (FRED) | State unemployment rate (used in robustness checks, Table 5); macro data | [FRED](/wiki/datasets/fred/) |
| S&P Global Ratings, History of US State Ratings | State bond downgrade dummies for fiscal-stress robustness checks (Table 5) | no page yet |
| Klarner (2013) State Partisan Balance Data (Harvard Dataverse) | State partisan composition of legislature; used in robustness checks and polarization analysis | no page yet |
| Bonica (2014) DIME Database on Ideology | Ideological scores for gubernatorial candidates; external validity check in Figure 5 | no page yet |

Sample: 48 US states, fiscal years 1983-2014. Alaska, Wyoming, and North Dakota excluded from main sample (large sovereign wealth funds). Close-election RDD subsample: elections with absolute MOV at most 10-11 percentage points.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20210147) if you are: calibrating the partisan heterogeneity in state fiscal responses for a fiscal federalism model (Tables 2 and 4 give the full set of MPS estimates by party, sign, and specification); studying the macroeconomic implications of state partisanship for federal stimulus design (Section V and Table 7 provide the NK model results and counterfactuals); assessing external validity of RDD designs for close gubernatorial elections (Section III, Figures 4-6, Appendix C); comparing IG multiplier estimates across methodologies (Chodorow-Reich (2019) surveys ARRA-era estimates and finds a headline multiplier of 1.7, higher than the estimates here partly because it implicitly assumes the ZLB constraint); or extending the model to incorporate the zero lower bound or other heterogeneous states. The replication data at [doi:10.3886/E177001V1](https://doi.org/10.3886/E177001V1) includes all cleaned datasets and Dynare code.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(3), March 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The AEA retains copyright; no CC licence was found in Crossref metadata. Reproduction of figures or tables requires AEA permission.

> Carlino, Gerald, Thorsten Drautzburg, Robert Inman, and Nicholas Zarra.
> "Partisanship and Fiscal Policy in Economic Unions: Evidence from US States."
> *American Economic Review* 113, no. 3 (March 2023): 701-737.
> DOI: 10.1257/aer.20210147.
> Replication data: [doi:10.3886/E177001V1](https://doi.org/10.3886/E177001V1).
