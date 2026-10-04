---
title: "Institutions' Return Expectations: Dahlquist & Ibert (2026)"
description: >-
  Distilled: Institutional investors' subjective risk premia across equity,
  cash, and credit track objective (model-based) risk premia one-to-one and are
  countercyclical, while for several equity premia cross-sectional disagreement across institutions exceeds
  time-series variation and is driven mainly by heterogeneous views about
  long-term price-earnings ratio mean reversion. J. Fin. Econ. 2026, CC BY 4.0.
  Twenty core results with source locators, datasets used, the regression
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
  outcomeClass: [expectations, asset-prices, security-returns]
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor,
    URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2025-10-31; corroborated by artifact first-page CC BY notice).
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF available (CC BY VOR, Elsevier ScienceDirect; not machine-fetched from publisher site; 2026-06-24)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 20
  citedByCount: 0
  introducesData: true

  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression]
    identification: descriptive

  contributionType: [new-fact, new-data, measurement]

  mechanisms: [valuation-belief-heterogeneity]


  scope:
    region: US (primarily), global
    assetClass: "US equities, developed markets ex-US equities, emerging markets equities, US cash, US high-yield corporate bonds"
    period: 1990-06..2024-12
    frequency: mixed
    dataType: [survey, market]
    granularity: [individual, aggregate]
    n: "93-1,305 panel obs. per regression cell (Table 3); 207 pension funds 2014-2023; ~64 asset managers/consultants/advisors 1997-2024"

  findings:
    - { ref: R1, outcome: subjective risk premia of institutional investors across asset classes, metric: coefficient, value: "b ranges 0.538-1.615 across 23 asset-class x institution-type cells; AUM-weighted b = 1.055 (US equity), 1.034 (DM equity), 0.856 (EM equity), 0.656 (US cash), 1.608 (US credit) (Tables 3-4)", direction: positive, vsBenchmark: "cannot reject b = 1 in 22/23 cells at 5%; can reject b = 0 in 19/23 cells (Table 3)" }
    - { ref: R2, outcome: cross-sectional disagreement in return expectations, metric: level, value: "Asset managers US equity: CS SD = 2.93%, TS SD = 1.04%; wealth advisors US equity: CS SD = 1.32%, TS SD = 0.90%; pension funds US equity: CS SD = 1.26%, TS SD = 1.17% (Table 5)", direction: positive, vsBenchmark: "cross-sectional SD exceeds time-series SD for most institution types and equity asset classes (Table 5)" }
    - { ref: R3, outcome: cross-sectional disagreement in return expectations, metric: r-squared, value: "Asset managers US equity: institution FE = 80.63%, time FE = 12.60% (p=0.000); wealth advisors US equity: institution FE = 68.57%, time FE = 19.38% (p=0.002) (Table 5)", direction: positive, vsBenchmark: "forecaster fixed effects explain significantly more variation than time fixed effects in 3/6 US equity cases at 10%, while time fixed effects explain more in one case (Table 5)" }
    - { ref: R4, outcome: building-block components of equity return expectations, metric: r-squared, value: "Repricing (P/E ratio change) = 69.52%, income+growth = 25.47%, inflation = 5.22% of cross-sectional variance in US equity return expectations (Table 8, Spec. II)", direction: positive, vsBenchmark: "repricing share (70%) significantly exceeds income+growth share (25%), p = 0.018 (Table 8)" }
    - { ref: R5, outcome: subjective risk premia of institutional investors across asset classes, metric: correlation, value: "All 10 pairwise cross-asset correlations of institution fixed effects are positive; US equity vs. DM equity = 0.806 (p=0.000); range 0.221-0.806 across 10 pairs (Table 10)", direction: positive }
    - { ref: R6, outcome: cross-sectional disagreement in return expectations, metric: coefficient, value: "SPF IQR regression: Log(CAPE) = -2.056 (SE=0.486), D(CAPE>Mean) = -20.300 (SE=4.031), interaction Log(CAPE) x D(CAPE>Mean) = 6.100 (SE=1.153) (Table 9)", direction: mixed, vsBenchmark: "disagreement is U-shaped in CAPE level for both SPF and Livingston forecasters (Table 9)" }
    - { ref: R7, outcome: subjective risk premia of institutional investors across asset classes, metric: level, value: "Asset managers' mean premia: EM equity 5.06%, DM equity 3.43%, US equity 2.20% (Table 2)", direction: positive, vsBenchmark: "EM > DM > US equity premium expectations (Table 2)" }
    - { ref: R8, outcome: subjective risk premia of institutional investors across asset classes, metric: level, value: "Public pension funds' mean premia: US equity 5.51%, DM equity 6.05%, EM equity 6.46%, US credit 4.24% (Table 2)", direction: positive, vsBenchmark: "pension funds report the largest mean risk premia across forecaster types for these classes (Table 2)" }
    - { ref: R9, outcome: subjective risk premia of institutional investors across asset classes, metric: level, value: "Mean US cash premia: asset managers -0.27%, investment consultants -0.48%, wealth advisors -0.48%, pension funds 0.69%, SPF -0.77% (Table 2)", direction: negative, vsBenchmark: "US cash has the smallest subjective risk premia, near zero or negative for all but pension funds (Table 2)" }
    - { ref: R10, outcome: objective risk premia across asset classes, metric: level, value: "Equity and credit objective risk premia tend to spike in recessions; cash risk premia trend upward until COVID-19 (text p. 7)", direction: mixed }
    - { ref: R11, outcome: objective risk premia across asset classes, metric: r-squared, value: "First principal component explains 57% of objective risk premium variation; the second explains another 26% (text p. 7)", direction: positive }
    - { ref: R12, outcome: cross-sectional disagreement in return expectations, metric: r-squared, value: "Time fixed effects explain significantly more than forecaster fixed effects at 10% in 3/5 cash cases and 2/4 credit cases; remaining comparisons are not statistically significant (Table 5)", direction: negative, vsBenchmark: "fixed-income expectation variation is more time-series than cross-sectional" }
    - { ref: R13, outcome: building-block components of equity return expectations, metric: probability, value: "43 of 64 institutions explicitly reference the building-block approach or a slight variation (Table 6)", direction: positive }
    - { ref: R14, outcome: building-block components of equity return expectations, metric: r-squared, value: "Time-series demeaned decomposition: repricing explains 68.33%, income and growth 17.07%, inflation 13.98% of variation in US equity return expectations (Table 8, Spec. III)", direction: positive }
    - { ref: R15, outcome: building-block components of equity return expectations, metric: level, value: "In December 2021, with current CAPE at 38.3, the most pessimistic institution expected it to mean revert to around 25; historical mean since 1881 is 17.432 (Fig. 9, p. 18; text p. 17)", direction: negative }
    - { ref: R16, outcome: subjective risk premia of institutional investors across asset classes, metric: correlation, value: "After controlling for institution-type fixed effects, 9/10 cross-asset correlations remain positive and significant at 5%; EM equity vs. US cash = 0.215 (p=0.083), while the range is 0.213-0.777 (Table 10, Correlation II)", direction: mixed }
    - { ref: R17, outcome: cross-sectional disagreement in return expectations, metric: coefficient, value: "Positive Log(CAPE) x D(CAPE > Mean) coefficients: SPF standard deviation = 3.541 (SE=1.134), Livingston IQR = 13.397 (SE=6.222), Livingston standard deviation = 16.115 (SE=5.288) (Table 9)", direction: positive }
    - { ref: R18, outcome: subjective risk premia of institutional investors across asset classes, metric: coefficient, value: "AUM-weighted b = 1.055 (US equity), 1.034 (DM equity), 0.856 (EM equity), 0.656 (US cash), 1.608 (US credit); all differ from 0, none differs from 1 (Table 4)", direction: positive, vsBenchmark: "observations weighted by discretionary AUM (Table 4)" }
    - { ref: R19, outcome: cross-sectional disagreement in return expectations, metric: r-squared, value: "For DM and EM equity, forecaster fixed effects explain significantly more than time fixed effects at 10% in 2/8 comparisons; DM asset managers = 71.06% vs. 18.84% (p=0.001), EM asset managers = 46.74% vs. 28.56% (p=0.014); remaining six comparisons are not significant (Table 5)", direction: positive }
    - { ref: R20, outcome: building-block components of equity return expectations, metric: level, value: "Mean income and growth = 4.51%, inflation = 2.23%, repricing = -0.98%, total US equity return = 5.76% per year, N=160; repricing differs from zero with p-value 0 (Table 7)", direction: negative }

  resultType: confirms

  relatesTo:
    - { cite: "Greenwood and Shleifer (2014)", relation: extends, note: they study retail investor survey expectations for US equities; this paper extends to institutional investors across five asset classes }
    - { cite: "Dahlquist and Ibert (2024)", doi: '10.1093/rfs/hhae008', relation: extends, note: companion paper covering asset managers' US equity and term premia 1997-2021; this paper extends across asset classes and institution types through 2024 }
    - { cite: "Nagel and Xu (2023)", doi: '10.1016/j.jfineco.2023.103713', relation: cites, note: studies subjective risk premia of individual investors and professional forecasters; overlapping Livingston survey coverage for US equity }
    - { cite: "Couts, Gonçalves and Loudis (2024b)", relation: cites, note: studies the risk-return trade-off across 19 asset classes for asset managers and investment consultants; complementary to the time-series and cross-sectional analyses here }
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
    - by: paper-distiller (gpt-6-luna)
      date: 2026-10-04
      role: extracted
      note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 22-page PDF. Added fourteen distinct main-text results and matching findings entries, the valuation-belief-heterogeneity mechanism proposal, equation 6, and the Table 9 estimating specification. Additions are not human-verified and not reproduced."
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 20 result rows, equations, specifications, classification, findings, and prose against the PDF; corrected table locators, Table 5 comparisons, sample metadata, and a specification detail; removed a DOI resolving to a different Couts paper." }

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
| R4 | Repricing expectations (views on long-term P/E ratio) drive 70% of cross-sectional disagreement in US equity return expectations | Table 8, p. 17 | Repricing = 69.52%, income+growth = 25.47%, inflation = 5.22% (cross-sectionally demeaned decomposition, Spec. II); repricing share significantly exceeds income+growth share (p = 0.018) |
| R5 | Optimism about one asset class is positively associated with optimism about the others: all pairwise cross-asset correlations of institution fixed effects are positive | Table 10, p. 21 | US equity vs. DM equity = 0.806 (p = 0.000); range across 10 pairs: 0.221-0.806; all significant at 5% |
| R6 | Disagreement among professional forecasters is U-shaped in the CAPE: largest when valuations are very high or very low | Table 9, p. 19 | SPF IQR regression: Log(CAPE) = -2.056 (SE = 0.486), D(CAPE > Mean) = -20.300 (SE = 4.031), interaction = 6.100 (SE = 1.153) |
| R7 | Expected equity premia increase from US to developed ex-US to emerging markets | Table 2, p. 6 | Asset managers' mean premia: EM equity = 5.06%, DM equity = 3.43%, US equity = 2.20% |
| R8 | Public pension funds report the highest average premia across institution types | Table 2, p. 6 | Pension fund means: US equity = 5.51%, DM equity = 6.05%, EM equity = 6.46%, US credit = 4.24% |
| R9 | Subjective US cash premia are smallest and generally near zero or negative | Table 2, p. 6 | Means: asset managers = -0.27%, investment consultants = -0.48%, wealth advisors = -0.48%, pension funds = 0.69%, SPF = -0.77% |
| R10 | Objective equity and credit premia are countercyclical, while cash premia follow a different time pattern | text p. 7 | Equity and credit premia tend to spike in recessions; cash premia trend upward until COVID-19 |
| R11 | Objective premia have a two-component factor structure dominated by equity premia | text p. 7 | First principal component explains 57% of variation; second explains a further 26% |
| R12 | Fixed-income expectation variation is less cross-sectionally dispersed than equity expectations | Table 5, p. 15 | Time fixed effects explain significantly more than forecaster fixed effects in 3/5 cash cases and 2/4 credit cases; other comparisons are not significant |
| R13 | A majority of institutions document use of the building-block method for expected equity returns | Table 6, p. 16 | 43 of 64 institutions explicitly reference the approach or a slight variation |
| R14 | Repricing remains the largest driver of time-series variation in expected equity returns | Table 8, p. 17, Spec. III | Repricing = 68.33%, income and growth = 17.07%, inflation = 13.98% |
| R15 | Institutions' inferred long-run CAPE targets differ substantially when current valuations are elevated | Fig. 9, p. 18; text p. 17 | With current CAPE at 38.3 in December 2021, the most pessimistic institution expected mean reversion to around 25; historical mean since 1881 = 17.432 |
| R16 | Positive cross-asset expectation correlations persist within institution types | Table 10, p. 21, Correlation II | 9/10 correlations are positive and significant at 5%; EM equity vs. US cash = 0.215 (p = 0.083); range = 0.213-0.777 |
| R17 | The U-shaped valuation-disagreement relationship also appears in standard-deviation and Livingston measures | Table 9, p. 19 | Positive interaction coefficients: SPF standard deviation = 3.541 (SE = 1.134), Livingston IQR = 13.397 (SE = 6.222), Livingston standard deviation = 16.115 (SE = 5.288) |
| R18 | The one-to-one time-series result is robust to weighting institutions by assets under management | Table 4, p. 10 | AUM-weighted b = 1.055 (US equity), 1.034 (DM equity), 0.856 (EM equity), 0.656 (US cash), 1.608 (US credit); all differ from zero, none differs from one |
| R19 | Persistent institution differences also appear for developed and emerging-market equity premia | Table 5, p. 15 | Forecaster fixed effects explain significantly more than time effects in 2/8 DM and EM comparisons; DM asset managers = 71.06% vs. 18.84% (p = 0.001), EM asset managers = 46.74% vs. 28.56% (p = 0.014); the other six comparisons are not significant |
| R20 | Average repricing expectations are negative despite positive mean expected equity returns | Table 7, p. 16 | Mean income and growth = 4.51%, inflation = 2.23%, repricing = -0.98%, total US equity return = 5.76% per year (N = 160); mean repricing differs from zero (p-value = 0) |

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

where $$\text{CAPE}_t$$ is the cyclically adjusted price-earnings ratio for the relevant equity market and $$r^f_{t \to t+10}$$ is the 10-year real yield (Federal Reserve, FRED code REAINTRATREARAT10Y). For US cash, the objective risk premium is the negative of the Kim and Wright (2005) term premium. For US credit, it is the Gilchrist and Zakrajsek (2012) excess bond premium, available since 2011 (p. 5).

**Building-block decomposition.** The paper uses a standard log-return decomposition to connect institution-level forecasts to their components. Log nominal equity returns decompose as (p. 13):

$$
r_{t+1} = \underbrace{dp_{t+1}}_{\text{income}} + \underbrace{\Delta e_{t+1}}_{\text{real earnings growth}} + \underbrace{\pi_{t+1}}_{\text{inflation}} + \underbrace{\Delta pe_{t+1}}_{\text{repricing}} \tag{5}
$$

where $$dp_{t+1} = \log(D_{t+1}/P_{t+1})$$ is the log dividend-price ratio, $$\Delta e_{t+1} = \log(E_{t+1}/E_t)$$ is log real earnings growth, $$\pi_{t+1}$$ is the inflation rate, and $$\Delta pe_{t+1} = \log(P_{t+1}/E_{t+1}) - \log(P_t/E_t)$$ is the log change in the P/E ratio (the "repricing" component). The paper also writes the components as words to emphasize their interpretation (equation 6, p. 13):

$$
r_{t+1} = \text{income} + \text{(real) earnings growth} + \text{inflation} + \text{repricing} \tag{6}
$$

Taking conditional expectations at time $$t$$, the decomposition holds ex ante as well (equation 7, p. 13):

$$
\text{E}_t(r_{t+1}) = \text{E}_t(dp_{t+1}) + \text{E}_t(\Delta e_{t+1}) + \text{E}_t(\pi_{t+1}) + \text{E}_t(\Delta pe_{t+1}) \tag{7}
$$

43 out of 64 institutions in the sample explicitly reference this building-block approach in their white papers and capital market assumption documents (Table 6, p. 16).

**Estimation.** Eq. (1) is estimated as a panel with forecaster fixed effects identified from time-series variation. Twenty-three separate regressions are run: five asset classes times up to six institution types. Standard errors use a wild cluster bootstrap (Roodman et al., 2019), bootstrapping by forecaster and double-clustering the variance-covariance matrix by year-month and forecaster (p. 7-8). For robustness, observations are also weighted by discretionary AUM from Form ADV (Table 4, p. 10).

## Empirical specifications

**Time-series regression (R1).** For each of 23 institution-type x asset-class cells, Eq. (1) is estimated as a panel regression with forecaster fixed effects. The LHS is the annualized subjective risk premium (computed as subjective nominal expected return minus the horizon-matched Treasury yield); the RHS is the objective risk premium for the corresponding asset class and horizon. Both the null $$b = 0$$ (acyclicality) and $$b = 1$$ (one-to-one tracking) are tested. Sample sizes range from 93 (wealth advisors, EM equity) to 1,305 (pension funds, US equity) panel observations (Table 3, p. 9).

**Variance decomposition (R2, R3).** Eq. (3) is estimated with year-month fixed effects for the Table 5 variance decomposition, including for pension funds; the forecaster and time shares in Eq. (4) are computed via their covariance contributions to total variance (pp. 10-11). The figures use year-level rather than year-month-level time fixed effects for pension funds. Wild cluster bootstraps provide p-values for whether the institution share significantly differs from the time share (Table 5, p. 15).

**Building-block variance decomposition (R4, R14).** For the subsample of asset managers, investment consultants, and wealth advisors who provide individual building-block forecasts (26-64 institutions depending on the component), the paper decomposes variance in US equity return expectations into the income+growth, inflation, and repricing components of Eq. (5). Table 8 (p. 17) reports three specifications: pooled (Spec. I), cross-sectionally demeaned (Spec. II), and time-series demeaned (Spec. III). In Spec. II, which directly addresses cross-sectional disagreement, repricing explains 69.52% of the variation; in Spec. III, it explains 68.33% of time-series variation.

**Cross-asset correlations (R5).** Institution fixed effects from Eq. (3) are estimated separately for each of the five asset classes. All 10 pairwise correlations between the institution fixed effects across asset classes are positive and statistically significant at the 5% level, ranging from 0.221 (EM equity vs. US cash) to 0.806 (US equity vs. DM equity) (Table 10, p. 21). Andonov and Rauh (2022) study a related mechanism through which pension funds' expectations affect their portfolio allocation. The correlations remain positive within institution type (controlling for institution-type fixed effects in a second specification), though one comparison is not significant at 5%.

For Table 10, the authors regress estimated institution fixed effects from one asset class on those from another (Table 10, p. 21):

$$
\widehat{a}_{i,A} = \alpha + \rho\widehat{a}_{i,B} + u_i
$$

The controlled specification is $$\widehat{a}_{i,A} = \alpha_{g(i)} + \rho\widehat{a}_{i,B} + u_i$$, where $$g(i)$$ is institution type. The table reports heteroskedasticity-robust tests of a zero coefficient; pair samples range from 79 to 142 institutions (Table 10). These are cross-sectional regressions without time effects.

**CAPE-level disagreement (R6).** For SPF forecasters (annual, 33 time-series obs.) and Livingston forecasters (semi-annual, 67 obs.), the paper regresses cross-sectional disagreement measures (interquartile range and standard deviation of expectations at each point in time) on the log CAPE, a dummy $$D(\text{CAPE} > \text{Mean})$$, and their interaction. The significant positive interaction coefficient confirms a U-shaped pattern: disagreement is largest when valuations are either very low or very high, consistent with heterogeneous priors about the long-term mean of the P/E ratio. Nagel and Xu (2023) document related evidence for a broader set of forecasters; Couts, Gonçalves and Loudis (2024b) study cross-forecaster disagreement in the risk-return trade-off across 19 asset classes.

The piecewise-linear regression for each disagreement measure is (Table 9, p. 19):

$$
D_t = \alpha + \beta_1 \log(\text{CAPE}_t) + \beta_2 D(\text{CAPE}_t > \overline{\text{CAPE}}) + \beta_3 \log(\text{CAPE}_t) D(\text{CAPE}_t > \overline{\text{CAPE}}) + \varepsilon_t
$$

Here $$D_t$$ is the SPF or Livingston cross-sectional IQR or standard deviation. The four dependent-variable series use 33 annual SPF observations or 67 semiannual Livingston observations; Newey-West standard errors allow four lags. No fixed effects are used. Table 9 reports each disagreement measure separately. For the Table 8 building-block decomposition, the authors report pooled, cross-sectionally demeaned, and time-series demeaned variance shares rather than a separate regression specification; the relevant units are 26-64 institutions depending on component, after excluding observations whose building blocks miss the reported total return by more than 20 basis points (pp. 15-17).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Hand-collected institutional return expectations (asset managers, investment consultants, wealth advisors; 1997-2024) | Primary outcome: subjective risk premia across five asset classes; 64+ institutions | Introduced by this paper; data hosted on Mendeley Data |
| Public pension fund CAFR / GASB statements (207 funds, 2014-2023) | Subjective risk premia for public pension funds (US equity, DM equity, EM equity, US cash, US credit) | No page yet |
| Survey of Professional Forecasters (SPF, Philadelphia Fed, 1991-2024) | Professional forecasters' US equity and T-bill return expectations | No page yet (`data:spf`) |
| Livingston survey (Philadelphia Fed, 1990-2023) | Professional forecasters' one-year S&P 500 price targets, converted to return expectations | No page yet (`data:livingston`) |
| Robert Shiller CAPE data (US equities, 1881 to present) | Objective US equity risk premium via Eq. (2) | [shiller-data](/wiki/datasets/shiller-data/) |
| Research Affiliates CAPE (DM and EM equities) | Objective equity risk premium for developed and emerging markets via Eq. (2) | No page yet (`data:research-affiliates`) |
| Kim and Wright (2005) term structure model (FRED: REAINTRATREARAT10Y) | Objective cash risk premium (negative of the 10-year term premium) | [FRED](/wiki/datasets/fred/) |
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
