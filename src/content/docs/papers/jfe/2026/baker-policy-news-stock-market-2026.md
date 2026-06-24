---
title: "Policy News and Stock Market Volatility: Baker, Bloom, Davis & Kost (2026)"
description: >-
  Distilled: Baker, Bloom, Davis and Kost build newspaper-based Equity Market
  Volatility (EMV) trackers that track the VIX with R-squared above 0.60
  in-sample and 0.55 out-of-sample through 2023; policy news accounts for
  35-55% of EMV articles; category EMV trackers combined with 10-K exposures
  explain cross-sectional realized volatility. Journal of Financial Economics
  2026, paywalled. Six core results with source locators, datasets used, the
  tracker construction, and empirical specifications.
sidebar:
  label: Baker-Bloom-Davis-Kost 2026
  order: 1
tags: [paper-summary, macro, equities, volatility, text-as-data, return-predictability,
       panel-regression, peer-reviewed, unreplicated, data:edgar, data:fred,
       data:cboe-vix, data:newsbank-newspaper-archive]
paper:
  authors: Scott R. Baker, Nicholas Bloom, Steven J. Davis, Kyle Kost
  authorList:
    - { family: Baker, given: "Scott R.", orcid: 0000-0002-6276-3244, affiliation: "Wisconsin School of Business, University of Wisconsin-Madison" }
    - { family: Bloom, given: Nicholas, orcid: 0000-0002-1600-7819, affiliation: Stanford University }
    - { family: Davis, given: "Steven J.", orcid: 0000-0002-5901-7021, affiliation: "Hoover Institution at Stanford and SIEPR" }
    - { family: Kost, given: Kyle, affiliation: Secretariat }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104187
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104187
  jel:
    codes: [D80, E22, E66, G18, L50]
    assignedBy: paper (PDF p. 1)
    date: 2026-06-24
  topics: ['Market Dynamics and Volatility', 'Stock Market Forecasting Methods', 'Monetary Policy and Economic Impact']
  dataAccess: licensed-commercial
  outcome:
    - equity market volatility (VIX and realized S&P 500 return volatility)
    - firm-level realized return volatility
    - average pairwise stock return correlations
    - future S&P 500 returns
  outcomeClass: [macro-aggregates, security-returns]
  license: 'paywalled; © 2025 Elsevier B.V. All rights are reserved, including those for text and data mining, AI training, and similar technologies (Crossref TDM license at elsevier.com/tdm/userlicense/1.0/, content-version tdm, start 2026-01-01; no CC license found)'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Elsevier ScienceDirect, 2026-06-24); SSRN preprint at papers.ssrn.com/abstract=3363862'
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 8
  methods:
    role: both
    contributes: emv-tracker
    family: descriptive
    buildsFrom: [text-classification, panel-regression, lasso]
    identification: descriptive
  contributionType: [new-data, new-fact, measurement]
  introducesData: true
  scope:
    region: US
    assetClass: US equities
    period: 1985-01..2023-12
    frequency: mixed
    dataType: [market, text, accounting]
    granularity: [aggregate, firm, security]
    n: "11 major U.S. newspapers Jan 1985-Dec 2023 (EMV tracker); 508,447 firm-months 2006-2019 (firm-level analysis)"
  findings:
    - ref: R1
      outcome: equity market volatility (VIX)
      metric: coefficient
      value: "0.745*** (SE 0.053); R² = 0.603 (monthly, 1985-2023, 468 obs)"
      direction: positive
    - ref: R2
      outcome: equity market volatility (VIX)
      metric: r-squared
      value: "R² = 0.558; slope = 0.714*** (SE 0.085) for 2019-2023 out-of-sample monthly VIX"
      direction: positive
      vsBenchmark: "R² = 0.606 in-sample 1985-2018"
    - ref: R3
      outcome: implied volatility (VIX) at multi-year horizon
      metric: r-squared
      value: "R² = 0.691 (1-year VIX), 0.607 (3-year), 0.534 (5-year), 0.334 (10-year)"
      direction: positive
    - ref: R4
      outcome: future S&P 500 returns
      metric: coefficient
      value: "slope = 0.0857* at 3-month, 0.0590** at 6-month, 0.0470** at 1-year, 0.0298** at 2-year"
      direction: positive
    - ref: R5
      outcome: firm-level realized return volatility
      metric: r-squared
      value: "coefficient = 2.16*** (SE 0.22) on composite exposure index; R² = 0.546"
      direction: positive
    - ref: R6
      outcome: average pairwise stock return correlations
      metric: coefficient
      value: "4.24*** (SE 0.020) on ln(EMV); R² = 0.226; doubling ln(EMV) raises average pairwise correlation by ~4.24 pp"
      direction: positive
  resultType: new-finding
  relatesTo:
    - { cite: 'Baker et al. (2016)', doi: '10.1093/qje/qjw024', relation: extends, note: 'extends their EPU newspaper-count method from policy uncertainty to equity market volatility using the same scaled-frequency approach' }
    - { cite: 'Manela and Moreira (2017)', doi: '10.1016/j.jfineco.2016.01.032', relation: tests, note: 'directly compared; EMV achieves higher R-squared than their NVIX in tracking realized volatility 1928-1984 and in contemporaneous VIX regressions' }
    - { cite: 'Shiller (1981)', doi: '10.3386/w0456', relation: tests, note: 'tests the excess-volatility claim; EMV catalogs the specific news items co-moving with the VIX, consistent with both rational and animal-spirits views' }
    - { cite: 'Niederhoffer (1971)', doi: '10.1086/295352', relation: extends, note: 'early newspaper-headline approach to U.S. stock market movements; EMV extends this to 1985-2023 with algorithmic term selection and a multi-paper scalable construction' }
  openQuestions:
    - 'Extension to other countries and periods with digital newspaper archives and equity return data, to explore specific global and national forces driving stock market volatility (p. 13).'
    - 'Construction of newspaper-based trackers for concepts beyond equity volatility, such as consumer confidence or business sentiment, using the same basic methodology (p. 13).'
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp. 1-14 of the PDF, all tables and figures); six results extracted. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: JEL codes corrected from [G12,G14,D80] to [D80,E22,E66,G18,L50] (PDF p.1); R6 interpretation corrected from 'doubling EMV' to 'doubling ln(EMV)' (PDF p.13); firm-level weighting corrected to 'log market capitalization' (Table 5 notes)."
  licenceVerification:
    - source: Crossref REST API works/10.1016/j.jfineco.2025.104187
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[0] content-version=tdm URL=https://www.elsevier.com/tdm/userlicense/1.0/ delay-in-days=0 start=2026-01-01; no CC license; copyright: © 2025 Elsevier B.V. All rights are reserved, including those for text and data mining, AI training, and similar technologies"
  rightsSignalConflict: false
---

**What this is.** This distillation captures the core findings, tracker construction, and empirical specifications of Baker, Bloom, Davis and Kost (2026). To replicate or extend the work, read the full source at the [original](https://doi.org/10.1016/j.jfineco.2025.104187). The EMV tracker and its extensions are updated at [www.policyuncertainty.com](https://www.policyuncertainty.com).

## TL;DR

Baker, Bloom, Davis and Kost construct an Equity Market Volatility (EMV) tracker by counting U.S. newspaper articles that discuss economic conditions, stock market movements, and volatility. Running from January 1985 to December 2023 across eleven major U.S. newspapers, the monthly EMV tracker correlates approximately 0.80 with the VIX and achieves R-squared of 0.60 in contemporaneous regressions. The methodology was finalized in 2018 and first published in a 2019 NBER working paper; data from 2019 onward are fully out-of-sample, and the tracker continues to achieve R-squared above 0.55 through year-end 2023 despite COVID-19, the Russia-Ukraine war, and multiple other episodes. The tracker is decomposed into roughly 40 category-specific EMV trackers covering macroeconomic news, monetary policy, fiscal policy, regulation, and other topics; policy-related categories collectively account for 35-55% of EMV articles, with peaks during 2001-03 (9/11 and Iraq), 2011-12 (debt-ceiling crisis), and the first Trump presidency. Combined with firm-level risk disclosures from 10-K Part 1A filings, the category EMV trackers explain cross-sectional realized volatility and co-movement in daily stock returns, even after conditioning on firm and time fixed effects.

## Core results

Magnitudes and significance as reported; `*`/`**`/`***` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **EMV tracker tracks monthly VIX in-sample** (1985-2023): contemporaneous OLS | Table 1, col 1, p. 6 | Slope = 0.745\*\*\* (SE 0.053), R² = 0.603, 468 monthly obs |
| R2 | **EMV tracker tracks monthly VIX out-of-sample** (2019-2023): term sets finalized 2018, data from 2019 onward used for testing only | Table 2, col 5, p. 6 | Slope = 0.714\*\*\* (SE 0.085), R² = 0.558 (vs R² = 0.606 in-sample 1985-2018) |
| R3 | **EMV lagged averages retain predictive power at multi-year VIX horizons**: even the 12-month lagged average remains significant at 10-year horizon | Table 3a, cols 4-7, p. 8 | R² = 0.691 (1-year VIX), 0.607 (3-year), 0.534 (5-year), 0.334 (10-year); Newey-West SE |
| R4 | **EMV tracker predicts future S&P 500 returns**: higher EMV foreshadows higher annualized returns at 3-month to 2-year horizons | Table 4, p. 8 | Slope = 0.0857\* at 3-month, 0.0590\*\* at 6-month, 0.0470\*\* at 1-year, 0.0298\*\* at 2-year |
| R5 | **Composite firm-level 10-K exposure explains cross-sectional realized volatility**, conditional on firm and time fixed effects | Table 5, col 1, p. 12 | Composite exposure coefficient = 2.16\*\*\* (SE 0.22); R² = 0.546; 508,447 firm-months |
| R6 | **EMV tracker explains average pairwise return correlations**: firms sharing a leading EMV category comove more strongly when that category's EMV is higher | Table 6, col 1, p. 13 | Coefficient on ln(EMV) = 4.24\*\*\* (SE 0.020); R² = 0.226; doubling ln(EMV) raises avg pairwise correlation ~4.24 pp |

**Overall (paper's conclusion).** The EMV tracker is a simple, transparent, and scalable measure of equity market volatility that correlates closely with the VIX in and out of sample. Policy news is a major and time-varying source of stock market volatility; monetary policy and tax policy are the most important policy-related sources, followed by regulation. Category-specific EMV trackers, combined with firm-level 10-K risk exposures, explain the cross-sectional structure of realized volatility and its evolution over time.

## Theory / model

The paper does not develop a formal structural model. Instead it documents empirical patterns under two competing interpretations of stock market volatility, following the framing of Shiller (1981):

1. **Efficient markets view**: equity price movements reflect genuine news about future cash flows and discount rates. Under this view, the EMV tracker provides a catalog of specific news items and economic developments that shift rational investor beliefs.

2. **Animal spirits view** (referencing Shiller 2014 and Keynes): market fluctuations are partly driven by shifts in investor mindsets unrelated to fundamentals. Under this view, the newspaper articles captured by EMV reflect and amplify these mindset shifts over time.

The paper treats both views as consistent with the data and does not attempt to resolve the debate. The core empirical claim is that EMV articles identify the proximate drivers of VIX fluctuations regardless of which interpretation is correct.

Niederhoffer (1971) was an early study linking newspaper headlines to U.S. stock market movements (from 1950 to 1966); the EMV tracker extends this approach with algorithmic term selection and a scalable multi-paper construction running to the present.

**Tested hypotheses:**
- $$H_1$$: The EMV frequency-count tracker correlates with implied and realized stock market volatility in-sample and out-of-sample across multiple horizons.
- $$H_2$$: Policy-related EMV categories (fiscal, monetary, regulation, national security) account for a major and time-varying share of overall EMV articles.
- $$H_3$$: Firm-level EMV category exposures from 10-K Part 1A text combined with category EMV trackers explain firm-level realized volatility and pairwise return correlations after conditioning on firm and time fixed effects.

## Method

**EMV tracker construction.** Following Baker et al. (2016), the tracker is built from scaled article counts in leading U.S. newspapers containing terms from three overlapping sets (pp. 3-4):

- **E** (Economic): {economic, economy, financial}
- **M** (Market): {stock market, equity, equities, S&P, "Standard and Poors" and variants}
- **V** (Volatility): {volatility, volatile, uncertain, uncertainty, risk, risky}

The best-fit permutation is selected from $$2^5 \times 2^6 = 2048$$ candidate combinations (all elements of $$\mathbf{M}' \times \mathbf{V}'$$) by maximizing the R-squared in an OLS regression of the 30-day VIX on the candidate tracker using monthly data from 1990 to 2015. For each newspaper and month, the raw count of articles containing at least one term from each of E, M, and V is divided by the total count of all articles in the same newspaper-month, standardized to unit standard deviation per newspaper, and averaged across the eleven newspapers. The series is then multiplicatively rescaled to match the mean VIX value from 1985 to 2015.

**Category-specific EMV trackers.** To decompose aggregate EMV by topic, each EMV article is classified into roughly 40 categories (approximately 20 general economic, approximately 20 policy-related) by checking whether the article contains terms from a category-specific term set $$b$$. The share of articles in category $$b$$ in month $$t$$ times the overall EMV tracker gives the category-specific tracker (p. 4):

$$\left(\frac{\#\{E \cap M \cap V \cap b\}_t}{\#\{E \cap M \cap V\}_t}\right) EMV_t$$

where $$\#\{\cdot\}_t$$ counts articles satisfying all conditions in month $$t$$. The **Monetary Policy** term set includes: monetary policy, money supply, open market operations, fed funds rate, discount window, quantitative easing, forward guidance, interest on reserves, taper tantrum, Fed chair names, central bank names, and many others (pp. 3-4, Appendix B).

**Firm-level exposure measure.** Following the approach of Davis et al. (2021), who use Part 1A of 10-K filings to explain firm-level stock price volatility in the wake of COVID-19, the paper measures each firm's exposure to EMV categories (p. 11). For firm $$i$$, fiscal year $$y$$, and EMV category $$b$$:

$$F_{iy}^b = \frac{\#\{\text{sentences pertaining to EMV category } b\}_{iy}}{\#\{\text{total sentences in Part 1A of 10K}\}_{iy}} \tag{1}$$

Firms with the largest Part 1A sentence share in a given category are treated as most exposed to that category's volatility driver. LASSO is used in one robustness specification (Table 5, col 5) to select the most informative categories from among 38 candidate exposure measures.

## Empirical specifications

**VIX tracking regression (R1, R2).** The baseline specification regresses contemporaneous implied or realized stock market volatility on the EMV tracker (Tables 1-2):

$$VIX_t = \alpha + \beta \cdot EMV_t + \varepsilon_t \tag{2}$$

with heteroskedasticity-robust standard errors. Monthly frequency, January 1985 to December 2023 (in-sample). The out-of-sample test (R2) uses data from January 2019 to December 2023 (60 monthly observations), since the methodology and term sets were finalized in 2018. Log-log specifications and daily data yield similar results (Table 1, cols 4-8).

**Long-horizon VIX regression (R3).** Time-$$t$$ implied VIX at horizons $$h$$ from 1 month to 10 years is regressed on contemporaneous EMV and lagged EMV averages (Table 3a, p. 8):

$$VIX_t^h = \alpha^h + \beta_0 EMV_t + \beta_1 \overline{EMV}_{t,3} + \beta_2 \overline{EMV}_{t,12} + \varepsilon_t^h$$

where $$\overline{EMV}_{t,k}$$ is the simple mean of $$EMV_{t-1}, \ldots, EMV_{t-k}$$. Newey-West standard errors with maximum autocorrelation lag of 2. Data: January 1996 to February 2023 (columns 1-4) and November 2002 to July 2016 (columns 5-7, restricted by availability of multi-year VIX data).

**Return predictability regression (R4).** Annualized S&P 500 returns from month $$t$$ to $$t+\tau$$ are regressed on lagged EMV (Table 4):

$$r(t \to t+\tau) = \mu + \delta \cdot EMV_{t-1} + \varepsilon_t$$

with Newey-West standard errors at lag equal to the horizon $$\tau$$ (3 months, 6 months, 1 year, 2 years). Monthly data, January 1985 to December 2023.

**Firm-level volatility panel regression (R5).** The composite firm-level exposure measure is constructed by weighting the category EMV trackers by each firm's Part 1A exposure shares (p. 11-12, specification 1):

$$\sigma_{it} = \alpha_i + \gamma_t + \beta \sum_b F_{iy}^b \cdot EMV_t^b + \varepsilon_{it} \tag{3}$$

where $$\sigma_{it}$$ is the realized volatility (standard deviation of daily equity returns) for firm $$i$$ in month $$t$$, $$\alpha_i$$ is a firm fixed effect, $$\gamma_t$$ is a time fixed effect, and $$F_{iy}^b$$ is the Part 1A exposure share for firm $$i$$ in fiscal year $$y$$ under EMV category $$b$$. Each firm-month observation is weighted by the firm's lagged log market capitalization times the square root of the number of Part 1A sentences, placing more weight on firms with more informative filings. Standard errors are clustered at the firm level. Sample: 10-K filings issued 2006 to 2019 (fiscal years 2005-2018), 508,447 firm-months. Realized volatility is winsorized at the 1% and 99% levels.

**Pairwise correlation regression (R6).** For each firm-month, the firm's "leading EMV category" $$l$$ is the category most discussed in its most recent Part 1A filing. Average pairwise daily return correlations among firms sharing leading category $$l$$ in month $$t$$ are regressed on the log of the corresponding EMV tracker (Table 6, p. 13):

$$\bar{\rho}_{lt} = \mu + \delta \ln(EMV_t^{b-l}) + \varepsilon_{lt}$$

where $$\bar{\rho}_{lt}$$ is the average pairwise correlation of daily returns in month $$t$$ among firms assigned to leading category $$l$$. All columns include firm fixed effects; some specifications also add the contemporaneous VIX and time fixed effects. The sample mean of the dependent variable is 0.21.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| 11 major U.S. newspapers (ProQuest and Newsbank databases; Boston Globe, Chicago Tribune, Dallas Morning News, Houston Chronicle, LA Times, Miami Herald, NYT, SF Chronicle, USA Today, WSJ, Washington Post) | Article-count source for EMV tracker construction; tracker publicly available at www.policyuncertainty.com | No page yet (licensed commercial newspaper archives) |
| CBOE VIX / VXO (daily 1990-2023; extended to 1985 using Berger et al. 2019) | Dependent variable in VIX tracking regressions (Tables 1, 2, 3a) | No page yet |
| S&P 500 daily and monthly returns | Realized volatility (RVol) dependent variable; future return prediction target (Tables 1, 4) | No page yet |
| SEC EDGAR 10-K filings, Part 1A (2006-2019) | Firm-level risk exposure measures $$F_{iy}^b$$ for cross-sectional volatility and correlation regressions (Tables 5, 6) | [EDGAR](/wiki/datasets/edgar/) |
| FRED (crude oil realized volatility and WTI series) | Petroleum markets EMV tracker validation (Fig. 3, Section 3.8) | [FRED](/wiki/datasets/fred/) |

Sample (EMV tracker): January 1985 to December 2023, 11 U.S. newspapers, daily and monthly frequency.
Sample (firm-level analysis): 508,447 firm-months, fiscal years 2005-2018 (10-K filings issued 2006-2019).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104187) if you are: (a) building or extending text-based volatility trackers for equity, commodity, or country markets and need the full term-set specifications and 40-category taxonomy (Appendix B); (b) studying the sources of stock market volatility and the role of policy news vs. economic fundamentals vs. animal spirits; (c) constructing firm-level risk exposure measures from SEC filings to explain cross-sectional return variation (Tables 5-6 and Appendix D detail the firm-level data construction); or (d) comparing EMV against alternative news-based volatility measures such as the NVIX of Manela and Moreira (2017) (Section 3.6 and Appendix Figures A.4-A.6). The Internet Appendix also contains the historical EMV tracker back to 1928 using ProQuest Historical Archive, and daily EMV using the Newsbank World News database.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026), article 104187. Paywalled: © 2025 Elsevier B.V. All rights are reserved. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**.

> Baker, Scott R., Nicholas Bloom, Steven J. Davis, and Kyle Kost.
> "Policy news and stock market volatility."
> *Journal of Financial Economics* 175 (2026) 104187.
> DOI: [10.1016/j.jfineco.2025.104187](https://doi.org/10.1016/j.jfineco.2025.104187).
> Paywalled. Extract-only; no redistribution of the verbatim PDF.
