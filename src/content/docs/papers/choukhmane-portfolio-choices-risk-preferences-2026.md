---
title: "What Drives Investors' Portfolio Choices: Choukhmane & de Silva (2026)"
description: >-
  Distilled: using 401(k) default-fund quasi-experiments, Choukhmane and de
  Silva show that 94% of retirement investors prefer stock market participation
  absent frictions and estimate relative risk aversion of 2.54, EIS of 0.25,
  and a $156 portfolio adjustment cost. J. Finance 2026, CC BY 4.0. Eight core
  results with source locators, datasets used, and the theory tested.
sidebar:
  label: Choukhmane-deSilva 2026
  order: 1
tags: [paper-summary, household-finance, portfolio-choice, stock-market-participation, life-cycle, frictions, default-effects, risk-preferences, panel-regression, peer-reviewed, unreplicated, open-access, cc-by, data:401k-admin, data:wrds, data:sipp, data:scf]
paper:
  authors: Taha Choukhmane, Tim de Silva
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 5–48
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  doi: 10.1111/jofi.70013
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-17; corroborated by artifact p.5 Creative Commons Attribution License)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; tested 2026-05-31; CC BY VOR licence confirmed in Crossref metadata overrides the paywalled wrapper)'
  redistribution: 'extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)'
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70013
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-17; second entry content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 5–48); all eight results extracted from the PDF. Not human-verified. Not reproduced. Replication code availability not confirmed here.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 44 pages. To replicate or extend
it, use the [original](https://doi.org/10.1111/jofi.70013).

## TL;DR

Using quasi-experimental variation in 401(k) default asset allocations
(money-market fund vs. target-date fund) across 4 million employees at
hundreds of thousands of plans (Dec 2006-Dec 2017), the paper separates
investors' underlying risk preferences from participation frictions. Absent
frictions, 94% of retirement investors prefer stock market participation
and the average preferred equity share is 76%, declining with age: patterns
broadly consistent with standard life-cycle portfolio choice models. These
preferences differ markedly from observed allocations, where participation
and equity shares are lower and hump-shaped. A life-cycle model estimated
via SMM recovers moderate risk aversion (gamma = 2.54), EIS = 0.25, and a
$156 portfolio adjustment cost. Low stock market participation in retirement
accounts is driven by one-time frictions, not nonstandard preferences.

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Lower bound on fraction preferring stock market participation** is 42%; upper bound is 95% | §II.C.1, Fig. 4 (p. 22), Table IAII | At tenure 2 years: bounds 78%–95% (money-market-to-TDF sample); lower bound rises as more investors reveal preferences over tenure |
| R2 | **Point estimate: 94% of investors prefer stock market participation** in their retirement accounts (under Assumption 6) | §II.C.3, Fig. IA9 | At tenure = 3: average preferred participation = 94%; average preferred stock share = 76%; stable over life cycle |
| R3 | **Preferred equity share is high (>60% at all ages) and declining with age** (opposite of the observed hump-shaped profile) | §II.C.4, Fig. 6 (p. 26), right panel | Preferred share ~80% at age 25, declining to ~60% at age 60; observed share hump-shaped and strictly below preferences at all ages |
| R4 | **Observed participation and equity shares diverge from preferences**; TDF-auto-enrolled investors' choices most closely approximate friction-free preferences | Fig. 7 (p. 27) | SCF 2007-16 stock share: 27%; not-auto-enrolled 401(k): 40%; auto-enrolled TDF: 80%; friction-free preference estimate: 76% |
| R5 | **Baseline structural estimate: relative risk aversion gamma = 2.54** (EZW model, SMM on 38 moments) | Table III col. (1), p. 41 | gamma = 2.54 (SE 0.09); discount factor beta = 0.94 (SE 0.001); EIS sigma^{-1} = 0.253 (SE 0.018) |
| R6 | **Portfolio adjustment cost = $156; contribution adjustment cost = $488** | Table III col. (1), p. 41 | k_theta = $156 (SE $6.01); k_s = $488 (SE $16.60); contribution cost larger, consistent with frictions in DC plan enrollment as additional driver of nonparticipation |
| R7 | **Without frictions, risk-aversion estimates are implausibly heterogeneous**: gamma = 18.94 using money-market-default data alone vs. gamma = 2.25 using TDF-default data alone | Table III cols. (3) and (4), p. 41 | Same population (employees hired within 12 months of the same policy change), frictionless model produces gamma 18.94 vs. 2.25 depending on which half of the data is used; baseline model reconciles both with gamma = 2.54 |
| R8 | **Treatment group (TDF default) maintains ~95% stock market participation and ~80% equity share** throughout tenure; control group (money market default) starts near 0% and converges over years | Fig. 2 (p. 16), Table IAII | Treatment-control gap: 19-25 pp in participation rate, 20-23 pp in stock share of retirement wealth; convergence is gradual, inconsistent with pure time-dependent (Calvo) frictions |

**Overall (paper's conclusion).** Participation frictions, not nonstandard
risk preferences such as loss aversion or ambiguity aversion, are the
primary driver of limited stock market participation in retirement accounts.
Investors' true preferences align with standard life-cycle models once
one-time adjustment costs are accounted for.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| 401(k) administrative records (large U.S. record-keeper, anonymized), Dec 2006–Dec 2017, ~4 million employees, >600k plans | Main data: portfolio allocations, participation, contribution rates, plan defaults | No page yet (proprietary; no public access) |
| CRSP Value-Weighted Index (1925–2006) | Equity premium and return volatility calibration (6.4% premium, 20% vol) | [WRDS / CRSP](/wiki/licensed/wrds/) (licensed) |
| Survey of Income and Program Participation (SIPP) | Labor income process estimation, employment transition probabilities | No page yet |
| Survey of Consumer Finances (SCF), 2007 and 2016 waves | External validation of financial wealth, stock market participation benchmarks | No page yet |

Sample: ~4 million employees, more than 600,000 401(k) plans, ages 25-64,
2006-2017. Quasi-experiment #1 (money-market-to-TDF): 1,086 control + 1,321
treatment investors at 6 firms. Quasi-experiment #2 (opt-in-to-TDF): 40,337
control + 52,400 treatment investors at 191 firms.

## Theory tested

**Structural model estimated.** The paper estimates a life-cycle portfolio
choice model (Section III) built on Choukhmane (2025) and extended with
multiple assets, portfolio choice decisions, and employment uncertainty. Key
features: (i) Epstein-Zin-Weil recursive preferences (separating risk
aversion gamma from EIS sigma^{-1}); (ii) three financial assets (risk-free
bond, risky stock, liquid taxable account); (iii) fixed adjustment costs
k_theta (portfolio) and k_s (contribution rate), chosen each period, not
one-time; (iv) realistic labor market with job-to-job transitions,
unemployment, and employer-specific 401(k) plan defaults. Estimated by SMM
targeting 38 moments from both quasi-experiments jointly.

**Nonparametric identification.** The paper also applies the revealed-
preference framework of Goldin and Reck (2020), originally for binary
savings decisions, adapted to continuous portfolio shares. Four key
assumptions: frame separability (defaults change allocations not preferences),
frame exogeneity (defaults quasi-randomly assigned), frame monotonicity
(no contrarian investors), and consistency principle (active choices reveal
preferences). Under these assumptions, the quasi-experimental variation
bounds and then point-identifies average preferred participation and equity
share without specifying a full structural model.

**Identification of risk aversion vs. frictions.** The key insight is that
the behavior of treatment (TDF default) and control (money-market default)
investors jointly identifies both the adjustment cost and the risk aversion
parameter: without frictions, the same population implies gamma = 18.94
from the control group and gamma = 2.25 from the treatment group. The
baseline model with frictions reconciles both groups with gamma = 2.54.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70013) if you are:
replicating the nonparametric bounds or the SMM estimation; extending the
life-cycle model to brokerage accounts or international settings; reviewing
the Internet Appendix robustness (peer effects, passive rebalancing,
survivorship, cohort/year effects, income conditioning); or auditing a
specific coefficient from Table III. The locators above point to the exact
table or figure.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1). This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The paper is CC BY 4.0 and mirroring is
permitted; no PDF mirror has been set up in this batch.

> **Attribution (CC BY 4.0).** Choukhmane, Taha, and Tim de Silva.
> "What Drives Investors' Portfolio Choices? Separating Risk Preferences
> from Frictions." *The Journal of Finance* 81, no. 1 (February 2026):
> 5–48. DOI: 10.1111/jofi.70013. © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
