---
title: "Institutions' Return Expectations: Dahlquist & Ibert (2026)"
description: >-
  Distilled: Institutional investors' subjective risk premia across equity,
  cash, and credit track objective (model-based) risk premia one-to-one and are
  countercyclical, but cross-sectional disagreement across institutions exceeds
  time-series variation and is driven mainly by heterogeneous views about
  long-term price-earnings ratio mean reversion. J. Fin. Econ. 2026, CC BY 4.0.
  Six core results with source locators, datasets used, the regression
  specifications, and the building-block decomposition of return expectations.
sidebar:
  label: Dahlquist-Ibert 2026
  order: 1
tags: [paper-summary, asset-pricing, expectations, beliefs, macro, pensions,
       survey-data, panel-regression, open-access, cc-by, panel-data,
       peer-reviewed, unreplicated,
       data:fred, data:spf, data:livingston, data:shiller-data,
       data:research-affiliates]
paper:
  authors: Magnus Dahlquist, Markus Ibert
  authorList:
    - { family: Dahlquist, given: Magnus, orcid: "0000-0002-1846-3113", affiliation: Stockholm School of Economics }
    - { family: Ibert, given: Markus, orcid: "0000-0002-4106-0144", affiliation: Copenhagen Business School }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104188
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104188
  jel:
    codes: [G11, G12, H23]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Financial Markets and Investment Strategies
    - Auditing, Earnings Management, Governance
    - Corporate Finance and Governance
  dataAccess: public
  outcome:
    - subjective risk premia of institutional investors across asset classes
    - cross-sectional disagreement in return expectations
    - building-block components of equity return expectations
  outcomeClass: [expectations, asset-prices]
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor,
    URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2025-10-31; corroborated by artifact first-page CC BY notice).
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF available (CC BY VOR, Elsevier ScienceDirect; not machine-fetched from publisher site; 2026-06-24)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 6
  citedByCount: 0
  introducesData: true

  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression]
    identification: descriptive

  contributionType: [new-fact, new-data, measurement]

  scope:
    region: US (primarily), global
    assetClass: "US equities, developed markets ex-US equities, emerging markets equities, US cash, US high-yield corporate bonds"
    period: 1990-06..2024-12
    frequency: mixed
    dataType: [survey, market]
    granularity: [individual, aggregate]
    n: "88-1,425 panel obs. per forecaster-type/asset-class cell (Table 2); 207 pension funds 2014-2023; ~64 asset managers/consultants/advisors 1997-2024"

  findings:
    - ref: R1
      outcome: subjective risk premia of institutional investors across asset classes
      metric: coefficient
      value: "b ranges 0.538-1.615 across 23 asset-class x institution-type cells; AUM-weighted b = 1.055 (US equity), 1.034 (DM equity), 0.856 (EM equity), 0.656 (US cash), 1.608 (US credit) (Tables 3-4)"
      direction: positive
      vsBenchmark: "cannot reject b = 1 in 22/23 cells at 5%; can reject b = 0 in 19/23 cells (Table 3)"
    - ref: R2
      outcome: cross-sectional disagreement in return expectations
      metric: level
      value: "Asset managers US equity: CS SD = 2.93%, TS SD = 1.04%; wealth advisors US equity: CS SD = 1.32%, TS SD = 0.90%; pension funds US equity: CS SD = 1.26%, TS SD = 1.17% (Table 5)"
      direction: positive
      vsBenchmark: cross-sectional SD exceeds time-series SD for most institution types and equity asset classes (Table 5)
    - ref: R3
      outcome: cross-sectional disagreement in return expectations
      metric: r-squared
      value: "Asset managers US equity: institution FE = 80.6%, time FE = 12.6% (p=0.000); wealth advisors US equity: institution FE = 68.6%, time FE = 19.4% (p=0.002) (Table 5)"
      direction: positive
      vsBenchmark: institution fixed effects explain significantly more variation than time fixed effects in 3/6 equity cases for asset managers and wealth advisors (Table 5)
    - ref: R4
      outcome: building-block components of equity return expectations
      metric: r-squared
      value: "Repricing (P/E ratio change) = 69.5%, income+growth = 25.26%, inflation = 5.2% of cross-sectional variance in US equity return expectations (Table 8, Spec. II)"
      direction: positive
      vsBenchmark: repricing share (70%) significantly exceeds income+growth share (25%), p = 0.018 (Table 8)
    - ref: R5
      outcome: subjective risk premia of institutional investors across asset classes
      metric: correlation
      value: "All 10 pairwise cross-asset correlations of institution fixed effects are positive; US equity vs. DM equity = 0.806 (p=0.000); range 0.221-0.806 across 10 pairs (Table 10)"
      direction: positive
    - ref: R6
      outcome: cross-sectional disagreement in return expectations
      metric: coefficient
      value: "SPF IQR regression: Log(CAPE) = -2.056 (SE=0.486), D(CAPE>Mean) = -20.300 (SE=4.031), interaction Log(CAPE) x D(CAPE>Mean) = 6.100 (SE=1.153) (Table 9)"
      direction: mixed
      vsBenchmark: disagreement is U-shaped in CAPE level for both SPF and Livingston forecasters (Table 9)

  resultType: new-finding

  relatesTo:
    - { cite: "Greenwood and Shleifer (2014)", relation: extends, note: they study retail investor survey expectations for US equities; this paper extends to institutional investors across five asset classes }
    - { cite: "Dahlquist and Ibert (2024)", doi: '10.1093/rfs/hhae008', relation: extends, note: companion paper covering asset managers' US equity and term premia 1997-2021; this paper extends across asset classes and institution types through 2024 }
    - { cite: "Nagel and Xu (2023)", doi: '10.1016/j.jfineco.2023.103713', relation: cites, note: studies subjective risk premia of individual investors and professional forecasters; overlapping Livingston survey coverage for US equity }
    - { cite: "Couts, Gonçalves and Loudis (2024b)", doi: '10.2139/ssrn.4933020', relation: cites, note: studies the risk-return trade-off across 19 asset classes for asset managers and investment consultants; complementary to the time-series and cross-sectional analyses here }
    - { cite: "Andonov and Rauh (2022)", relation: cites, note: studies public pension funds' equity return expectations and their impact on portfolio allocation and liability discounting }

  openQuestions:
    - "Whose expectations are reflected in asset prices exactly: the answer depends on each investor's wealth, preferences, expectations, and to what extent they actually act on their expectations (p. 20)."
    - Whether and how structural shifts in macroeconomic quantities (interest rates, inflation, GDP growth) affect the long-term mean of the price-earnings ratio, which is the primary source of disagreement across institutions (p. 21).

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp. 1-22 of the published JFE article); six results extracted from the CC-BY PDF. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; R4 income+growth corrected from 24.2% to 25.26% (Table 8 Spec. II residual = 100-69.52-5.22; paper text confirms 25%); JEL third code corrected from G23 to H23 to match the PDF title page (G11, G12, H23); all other equations, locators, and magnitudes confirmed."

  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104188"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[]: (1) content-version=tdm, URL=https://www.elsevier.com/tdm/userlicense/1.0/, start=2026-01-01; (2) content-version=tdm, URL=https://www.elsevier.com/legal/tdmrep-license, start=2026-01-01; (3) content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-10-31"

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the empirical framework (panel regression of subjective on objective risk premia), and the building-block decomposition of institutional equity return expectations: enough to understand what was found and how, without reading all 22 pages. To replicate or extend, read the original at [doi.org/10.1016/j.jfineco.2025.104188](https://doi.org/10.1016/j.jfineco.2025.104188).

## TL;DR

This paper documents the subjective risk premia of institutional investors (asset managers, investment consultants, wealth advisors, public pension funds) and professional forecasters (Survey of Professional Forecasters, Livingston survey) across five asset classes: US equities, developed markets ex-US equities, emerging markets equities, US cash, and US high-yield corporate bonds. Extending Dahlquist and Ibert (2024), who cover asset managers' US equity and term premia from 1997 to 2021, this paper spans multiple institution types through 2024.

The main finding is that these subjective risk premia vary one-to-one with objective, model-based risk premia that are available in real time and are countercyclical. Despite this high time-series co-movement, several subjective equity risk premia vary more in the cross-section of institutions than in the time series. This cross-sectional disagreement persists across asset classes and is primarily driven by heterogeneous expectations about long-term price-earnings (P/E) ratio mean reversion. Institutions that expect the P/E ratio to mean-revert report low equity premiums; those that treat it as a near-random walk report higher premiums.

## Core results

Magnitudes as reported; locators point into the published article.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Subjective risk premia track objective risk premia one-to-one across institution types and asset classes | Table 3, p. 9; Table 4, p. 10; Fig. 1, p. 7 | b ranges 0.538-1.615 across 23 cells; AUM-weighted b = 1.055 (US equity), 1.034 (DM equity), 0.856 (EM equity), 0.656 (US cash), 1.608 (US credit); cannot reject b = 1 in 22/23 cells at 5% |
| R2 | Cross-sectional disagreement across institutions exceeds time-series variation for US and DM equities | Table 5, p. 15 | Asset managers US equity: CS SD = 2.93%, TS SD = 1.04%; wealth advisors: CS SD = 1.32%, TS SD = 0.90%; pension funds: CS SD = 1.26%, TS SD = 1.17% |
| R3 | Institution fixed effects explain more variance than time fixed effects for most equity cases | Table 5, p. 15 | Asset managers US equity: institution FE = 80.6%, time FE = 12.6% (p = 0.000); wealth advisors US equity: institution FE = 68.6%, time FE = 19.4% (p = 0.002) |
| R4 | Repricing expectations (views on long-term P/E ratio) drive 70% of cross-sectional disagreement in US equity return expectations | Table 8, p. 16 | Repricing = 69.5%, income+growth = 25.3%, inflation = 5.2% (cross-sectionally demeaned decomposition, Spec. II); repricing share significantly exceeds income+growth share (p = 0.018) |
| R5 | Optimism about one asset class spills over to all others: all pairwise cross-asset correlations of institution fixed effects are positive | Table 10, p. 21 | US equity vs. DM equity = 0.806 (p = 0.000); range across 10 pairs: 0.221-0.806; all significant at 5% |
| R6 | Disagreement among professional forecasters is U-shaped in the CAPE: largest when valuations are very high or very low | Table 9, p. 18 | SPF IQR regression: Log(CAPE) = -2.056 (SE = 0.486), D(CAPE > Mean) = -20.300 (SE = 4.031), interaction = 6.100 (SE = 1.153) |

**Overall (paper's conclusion).** Institutional investors' and professional forecasters' subjective risk premia are countercyclical and track objective risk premia one-to-one, consistent with rational expectations asset pricing models. At any given point in time, however, institutions disagree substantially about future returns. This disagreement is primarily driven by heterogeneous beliefs about long-term P/E ratio mean reversion and persists across all five asset classes, suggesting that institutions form coherent sets of return expectations anchored to common macroeconomic primitives (p. 20-21).

## Theory / model

The paper has no formal asset-pricing model. It tests two related empirical hypotheses about institutional return expectations.

**Hypothesis 1 (time-series, countercyclical expectations).** Standard rational expectations asset pricing models imply that expected returns are countercyclical: high in recessions, low in expansions. The paper tests this for institutional investors by regressing subjective risk premia on objective model-based benchmarks. If $$b = 1$$, institutions' expectations move one-to-one with the objective benchmark; $$b < 1$$ indicates underreaction; $$b > 1$$ overreaction relative to the benchmark. In contrast, the behavioral finance literature of Greenwood and Shleifer (2014) documents procyclical expectations for retail investors ($$b < 0$$). The paper's central regression is (p. 2):

$$
\text{F}_{i,t}\!\bigl[r^e_{t \to t+h}\bigr] = a_i + b\,\text{E}_t\!\bigl[r^e_{t \to t+h}\bigr] + \varepsilon_{i,t} \tag{1}
$$

where $$\text{F}_{i,t}[r^e_{t \to t+h}]$$ is the subjective risk-premium forecast of institution $$i$$ on day $$t$$ over horizon $$[t, t+h]$$, $$a_i$$ is a forecaster fixed effect, $$\text{E}_t[r^e_{t \to t+h}]$$ is the corresponding objective (model-based) risk premium, and $$\varepsilon_{i,t}$$ is an error term.

**Hypothesis 2 (cross-sectional heterogeneity).** Institutions may persistently disagree about future returns. To decompose variation in subjective risk premia into persistent institution-level optimism/pessimism versus aggregate time-series co-movement, the paper uses the panel specification (p. 9-10):

$$
\text{F}_{i,t}\!\bigl[r^e_{t \to t+h}\bigr] = a_i + c_m + \eta_{i,t} \tag{3}
$$

where $$c_m$$ denotes time (year-month) fixed effects. The implied variance decomposition identity is (p. 10):

$$
1 = \frac{\text{Cov}(\text{F}_{i,t},\, a_i)}{\text{Var}(\text{F}_{i,t})} + \frac{\text{Cov}(\text{F}_{i,t},\, c_m)}{\text{Var}(\text{F}_{i,t})} + \frac{\text{Cov}(\text{F}_{i,t},\, \eta_{i,t})}{\text{Var}(\text{F}_{i,t})} \tag{4}
$$

where $$\text{F}_{i,t}$$ abbreviates the full forecast notation. The first term is the institution-fixed-effect share and the second is the time-fixed-effect share of total variance.

**Identification.** The regression in Eq. (1) identifies $$b$$ from time-series variation in the countercyclical objective benchmarks. Cross-sectional identification of disagreement comes from differences in institution fixed effects $$a_i$$ in Eq. (3). No causal claim is made; the design is descriptive.

## Method

**Objective risk premia.** For each equity market, the paper constructs the objective risk premium using a present-value model based on the regional CAPE (p. 4-5):

$$
\text{E}_t\!\bigl[r_{t \to t+10}\bigr] = \ln\!\Bigl(1 + 1/\text{CAPE}_t\Bigr) - r^f_{t \to t+10} \tag{2}
$$

where $$\text{CAPE}_t$$ is the cyclically adjusted price-earnings ratio for the relevant equity market and $$r^f_{t \to t+10}$$ is the 10-year real yield (Federal Reserve, FRED code REAINTRATREART10Y). For US cash, the objective risk premium is the negative of the Kim and Wright (2005) term premium. For US credit, it is the Gilchrist and Zakrajsek (2012) excess bond premium, available since 2011 (p. 5).

**Building-block decomposition.** The paper uses a standard log-return decomposition to connect institution-level forecasts to their components. Log nominal equity returns decompose as (p. 13):

$$
r_{t+1} = \underbrace{dp_{t+1}}_{\text{income}} + \underbrace{\Delta e_{t+1}}_{\text{real earnings growth}} + \underbrace{\pi_{t+1}}_{\text{inflation}} + \underbrace{\Delta pe_{t+1}}_{\text{repricing}} \tag{5}
$$

where $$dp_{t+1} = \log(D_{t+1}/P_{t+1})$$ is the log dividend-price ratio, $$\Delta e_{t+1} = \log(E_{t+1}/E_t)$$ is log real earnings growth, $$\pi_{t+1}$$ is the inflation rate, and $$\Delta pe_{t+1} = \log(P_{t+1}/E_{t+1}) - \log(P_t/E_t)$$ is the log change in the P/E ratio (the "repricing" component). Taking conditional expectations at time $$t$$, the decomposition holds ex ante as well (p. 13):

$$
\text{E}_t(r_{t+1}) = \text{E}_t(dp_{t+1}) + \text{E}_t(\Delta e_{t+1}) + \text{E}_t(\pi_{t+1}) + \text{E}_t(\Delta pe_{t+1}) \tag{7}
$$

43 out of 64 institutions in the sample explicitly reference this building-block approach in their white papers and capital market assumption documents (Table 6, p. 16).

**Estimation.** Eq. (1) is estimated as a panel with forecaster fixed effects identified from time-series variation. Twenty-three separate regressions are run: five asset classes times up to six institution types. Standard errors use a wild cluster bootstrap (Roodman et al., 2019), bootstrapping by forecaster and double-clustering the variance-covariance matrix by year-month and forecaster (p. 7-8). For robustness, observations are also weighted by discretionary AUM from Form ADV (Table 4, p. 10).

## Empirical specifications

**Time-series regression (R1).** For each of 23 institution-type x asset-class cells, Eq. (1) is estimated as a panel regression with forecaster fixed effects. The LHS is the annualized subjective risk premium (computed as subjective nominal expected return minus the horizon-matched Treasury yield); the RHS is the objective risk premium for the corresponding asset class and horizon. Both the null $$b = 0$$ (acyclicality) and $$b = 1$$ (one-to-one tracking) are tested. Sample sizes range from 88 (wealth advisors, US credit) to 1,425 (Livingston survey, US equity) panel observations (Table 3, p. 9).

**Variance decomposition (R2, R3).** Eq. (3) is estimated with year-month fixed effects for each cell, and the forecaster and time shares in Eq. (4) are computed via their covariance contributions to total variance (p. 10). For pension funds, year-level rather than year-month-level time fixed effects are used. Wild cluster bootstraps provide p-values for whether the institution share significantly differs from the time share (Table 5, p. 15).

**Building-block variance decomposition (R4).** For the subsample of asset managers, investment consultants, and wealth advisors who provide individual building-block forecasts (26-64 institutions depending on the component), the paper decomposes variance in US equity return expectations into the income+growth, inflation, and repricing components of Eq. (5). Table 8 (p. 16) reports three specifications: pooled (Spec. I), cross-sectionally demeaned (Spec. II), and time-series demeaned (Spec. III). In Spec. II, which directly addresses cross-sectional disagreement, repricing explains 69.5% of the variation.

**Cross-asset correlations (R5).** Institution fixed effects from Eq. (3) are estimated separately for each of the five asset classes. All 10 pairwise correlations between the institution fixed effects across asset classes are positive and statistically significant at the 5% level, ranging from 0.221 (EM equity vs. US cash) to 0.806 (US equity vs. DM equity) (Table 10, p. 21). Andonov and Rauh (2022) study a related mechanism through which pension funds' expectations affect their portfolio allocation. The correlations hold within institution type (controlling for institution-type fixed effects in a second specification).

**CAPE-level disagreement (R6).** For SPF forecasters (annual, 33 time-series obs.) and Livingston forecasters (semi-annual, 67 obs.), the paper regresses cross-sectional disagreement measures (interquartile range and standard deviation of expectations at each point in time) on the log CAPE, a dummy $$D(\text{CAPE} > \text{Mean})$$, and their interaction. The significant positive interaction coefficient confirms a U-shaped pattern: disagreement is largest when valuations are either very low or very high, consistent with heterogeneous priors about the long-term mean of the P/E ratio. Nagel and Xu (2023) document related evidence for a broader set of forecasters; Couts, Gonçalves and Loudis (2024b) study cross-forecaster disagreement in the risk-return trade-off across 19 asset classes.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Hand-collected institutional return expectations (asset managers, investment consultants, wealth advisors; 1997-2024) | Primary outcome: subjective risk premia across five asset classes; 64+ institutions | Introduced by this paper; data hosted on Mendeley Data |
| Public pension fund CAFR / GASB statements (207 funds, 2014-2023) | Subjective risk premia for public pension funds (US equity, DM equity, EM equity, US cash, US credit) | No page yet |
| Survey of Professional Forecasters (SPF, Philadelphia Fed, 1991-2024) | Professional forecasters' US equity and T-bill return expectations | No page yet (`data:spf`) |
| Livingston survey (Philadelphia Fed, 1990-2023) | Professional forecasters' one-year S&P 500 price targets, converted to return expectations | No page yet (`data:livingston`) |
| Robert Shiller CAPE data (US equities, 1881 to present) | Objective US equity risk premium via Eq. (2) | [shiller-data](/wiki/datasets/shiller-data/) |
| Research Affiliates CAPE (DM and EM equities) | Objective equity risk premium for developed and emerging markets via Eq. (2) | No page yet (`data:research-affiliates`) |
| Kim and Wright (2005) term structure model (FRED: REAINTRATREART10Y) | Objective cash risk premium (negative of the 10-year term premium) | [FRED](/wiki/datasets/fred/) |
| Gilchrist and Zakrajsek (2012) excess bond premium | Objective credit risk premium for US high-yield corporate bonds | No page yet |
| Gurkaynak, Sack and Wright (2007) Treasury yield curve | Horizon-matched Treasury yields used to compute risk premia from nominal return forecasts | No page yet |
| Public Plans Data / Form ADV | AUM of pension funds and investment advisors for AUM-weighted regressions (Table 4) | No page yet |

Sample: five asset classes; institution expectations collected from earliest available dates (1990 for Livingston, 1991 for SPF, 1997 for most asset managers) through 2024. Long-run expectations (approximately ten-year horizon) for most institutions; Livingston survey is one-year.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104188) if you are:
studying how institutional investors form and report return expectations across asset classes; assessing whether institutional or professional forecasters have rational or extrapolative return expectations; building a model of heterogeneous beliefs about long-run valuation levels; using institutional capital market assumptions as data for asset allocation research; or extending the analysis to additional asset classes or newer institution types. Tables 3 and 4 contain the core time-series evidence; Table 5 the variance decompositions; Table 8 the building-block breakdown; Table 10 the cross-asset correlations.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026) 104188. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Dahlquist, Magnus, and Markus Ibert.
> "Institutions' return expectations across assets and time."
> *Journal of Financial Economics* 175 (2026) 104188.
> DOI: 10.1016/j.jfineco.2025.104188. Copyright 2025 The Author(s).
> Published by Elsevier B.V. Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
