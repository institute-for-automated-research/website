---
title: "Policy News and Stock Market Volatility: Baker, Bloom, Davis & Kost (2026)"
description: >-
  Distilled: Baker, Bloom, Davis and Kost build newspaper-based Equity Market
  Volatility (EMV) trackers that track the VIX with R-squared above 0.60
  in-sample and 0.55 out-of-sample through 2023; 35% of EMV articles refer to
  fiscal policy, mostly tax policy, while 30% mention monetary policy and 25%
  refer to regulation; category EMV trackers combined with 10-K exposures
  explain cross-sectional realized volatility. Journal of Financial Economics
  2026, paywalled. Fourteen core results with source locators, datasets used, the
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ['Market Dynamics and Volatility', 'Stock Market Forecasting Methods', 'Monetary Policy and Economic Impact']
  dataAccess: licensed-commercial
  outcome:
    - equity market volatility (VIX and realized S&P 500 return volatility)
    - firm-level realized return volatility
    - average pairwise stock return correlations
    - future S&P 500 returns
    - oil price volatility
    - EMV article category shares
  outcomeClass: [macro-aggregates, security-returns]
  license: 'paywalled; © 2025 Elsevier B.V. All rights are reserved, including those for text and data mining, AI training, and similar technologies (Crossref TDM license at elsevier.com/tdm/userlicense/1.0/, content-version tdm, start 2026-01-01; no CC license found)'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Elsevier ScienceDirect, 2026-06-24); SSRN preprint at papers.ssrn.com/abstract=3363862'
  redistribution: extract-only
  resultsCount: 14
  citedByCount: 8
  methods:
    role: both
    contributes: emv-tracker
    family: descriptive
    buildsFrom: [text-classification, panel-regression, lasso]
    identification: descriptive
  contributionType: [new-data, new-fact, measurement]
  mechanisms: [political-uncertainty, behavioral-bias]
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
    - { ref: R1, outcome: equity market volatility (VIX), metric: coefficient, value: "0.745*** (SE 0.0533); R² = 0.603 (monthly, 1985-2023, 468 obs)", direction: positive }
    - { ref: R2, outcome: equity market volatility (VIX), metric: r-squared, value: "R² = 0.558; slope = 0.714*** (SE 0.0835) for 2019-2023 out-of-sample monthly VIX", direction: positive, vsBenchmark: "R² = 0.606 in-sample 1985-2018" }
    - { ref: R3, outcome: implied volatility (VIX) at multi-year horizon, metric: r-squared, value: "R² = 0.691 (1-year VIX), 0.607 (3-year), 0.534 (5-year), 0.334 (10-year)", direction: positive }
    - { ref: R4, outcome: future S&P 500 returns, metric: coefficient, value: "slope = 0.0857* at 3-month, 0.0590** at 6-month, 0.0470** at 1-year, 0.0298** at 2-year", direction: positive }
    - { ref: R5, outcome: firm-level realized return volatility, metric: r-squared, value: "coefficient = 2.16*** (SE 0.22) on composite exposure index; R² = 0.546", direction: positive }
    - { ref: R6, outcome: average pairwise stock return correlations, metric: coefficient, value: "4.24*** (SE 0.020) on ln(EMV); R² = 0.226; doubling ln(EMV) raises average pairwise correlation by ~4.24 pp", direction: positive }
    - { ref: R7, outcome: equity market volatility (VIX and realized S&P 500 return volatility), metric: coefficient, value: "Out-of-sample (2019-2023): daily VIX slope = 0.180*** (SE 0.00877), R² = 0.245 (1,300 obs); monthly realized volatility slope = 1.14*** (SE 0.343), R² = 0.543 (60 obs)", direction: positive }
    - { ref: R8, outcome: implied volatility (VIX) at multi-year horizon, metric: coefficient, value: "Table 3b category tracker slopes: Financial Regulation 1.560*** (1-month), 1.188*** (1-year); Competition Policy 1.671*** (1-year); Macro News: Trade -6.144*** (10-year); R² = 0.610, 0.472, 0.414", direction: mixed }
    - { ref: R9, outcome: future S&P 500 returns, metric: coefficient, value: "Macroeconomic News & Outlook slopes = 0.215***, 0.157***, 0.114**, 0.109*** at 3-month, 6-month, 1-year, 2-year horizons; National Security Policy = 0.334**, 0.191*, 0.0945, -0.0279 at the same horizons", direction: mixed }
    - { ref: R10, outcome: oil price volatility, metric: correlation, value: "Petroleum Markets EMV correlation = 0.60 with CBOE Crude Oil Volatility Index (2007-2023) and 0.50 with CBOE Crude Oil Realized Volatility (1986-2023)", direction: positive }
    - { ref: R11, outcome: EMV article category shares, metric: probability, value: "Macroeconomic News & Outlook appears in 72% of EMV articles; Commodity Markets 44%; Interest Rates 31%; Fiscal Policy 35% (mostly Tax Policy); Tax Policy 30%; Monetary Policy 30%; Regulation 25%; National Security 13%", direction: positive }
    - { ref: R12, outcome: firm-level realized return volatility, metric: coefficient, value: "Table 5: non-policy composite 2.50*** (SE 0.25), policy composite 1.35*** (SE 0.48), joint estimates 2.46*** (0.25) and 0.83* (0.49); LASSO-selected Interest Rates -9.33*** (1.01), Real Estate 7.90*** (0.81), Commodity Markets 2.50*** (0.29)", direction: mixed }
    - { ref: R13, outcome: average pairwise stock return correlations, metric: coefficient, value: "Table 6 ln(EMV) slopes: 4.24*** (0.020) baseline; 1.70*** (0.018) controlling for VIX; 1.11*** (0.012) with time fixed effects; non-policy 0.946*** (0.016); policy 0.718*** (0.026)", direction: positive }
    - { ref: R14, outcome: equity market volatility (VIX), metric: correlation, value: "1985-2016 monthly correlation with VIX: EMV 0.78 vs NVIX 0.70; mean absolute monthly difference: EMV 2.5 vs NVIX 3.5 VIX points; single-newspaper R² falls 17-38 pp; doubling newspaper weight changes R² by +0.002 to +0.004 for two papers, zero for one, and at most -0.011 for others; dropping a newspaper changes R² by at most 0.013", direction: positive }
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
    - by: paper-distiller (gpt-6-luna)
      date: 2026-10-04
      role: extracted
      note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF; added eight Core results rows, matched findings, and completed the formal sections with equations and estimating specifications. Not human-verified. Not reproduced."
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 14 results, specifications, classifications, and frontmatter against the PDF; corrected locators, R1/R2 standard errors, topic shares, and body citations. Headline inflation and broad-quantity shares, and the introduction’s realized-volatility correlation, remain omitted." }
  licenceVerification:
    - source: Crossref REST API works/10.1016/j.jfineco.2025.104187
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[0] content-version=tdm URL=https://www.elsevier.com/tdm/userlicense/1.0/ delay-in-days=0 start=2026-01-01; no CC license; copyright: © 2025 Elsevier B.V. All rights are reserved, including those for text and data mining, AI training, and similar technologies"
  rightsSignalConflict: false
---

**What this is.** This distillation captures the core findings, tracker construction, and empirical specifications of Baker, Bloom, Davis and Kost (2026). To replicate or extend the work, read the full source at the [original](https://doi.org/10.1016/j.jfineco.2025.104187). The EMV tracker and its extensions are updated at [www.policyuncertainty.com](https://www.policyuncertainty.com).

## TL;DR

Baker, Bloom, Davis and Kost construct an Equity Market Volatility (EMV) tracker by counting U.S. newspaper articles that discuss economic conditions, stock market movements, and volatility. Running from January 1985 to December 2023 across eleven major U.S. newspapers, the monthly EMV tracker correlates approximately 0.80 with the VIX and achieves R-squared of 0.60 in contemporaneous regressions. The methodology was finalized in 2018 and first published in a 2019 NBER working paper; data from 2019 onward are fully out-of-sample, and the tracker continues to achieve R-squared above 0.55 through year-end 2023 despite COVID-19, the Russia-Ukraine war, and multiple other episodes. The tracker is decomposed into roughly 40 category-specific EMV trackers covering macroeconomic news, monetary policy, fiscal policy, regulation, and other topics; policy attention varies over time, with peaks during 2001-03 (9/11 and Iraq), 2011-12 (debt-ceiling crisis), and the first Trump presidency. Combined with firm-level risk disclosures from 10-K Part 1A filings, the category EMV trackers explain cross-sectional realized volatility and co-movement in daily stock returns, even after conditioning on firm and time fixed effects.

## Core results

Magnitudes and significance as reported; `*`/`**`/`***` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **EMV tracker tracks monthly VIX in-sample** (1985-2023): contemporaneous OLS | Table 1, col 1, p. 6 | Slope = 0.745\*\*\* (SE 0.0533), R² = 0.603, 468 monthly obs |
| R2 | **EMV tracker tracks monthly VIX out-of-sample** (2019-2023): term sets finalized 2018, data from 2019 onward used for testing only | Table 2, col 5, p. 6 | Slope = 0.714\*\*\* (SE 0.0835), R² = 0.558 (vs R² = 0.606 in-sample 1985-2018) |
| R3 | **EMV lagged averages retain predictive power at multi-year VIX horizons**: even the 12-month lagged average remains significant at 10-year horizon | Table 3a, cols 4-7, p. 8 | R² = 0.691 (1-year VIX), 0.607 (3-year), 0.534 (5-year), 0.334 (10-year); Newey-West SE |
| R4 | **EMV tracker predicts future S&P 500 returns**: higher EMV foreshadows higher annualized returns at 3-month to 2-year horizons | Table 4, p. 8 | Slope = 0.0857\* at 3-month, 0.0590\*\* at 6-month, 0.0470\*\* at 1-year, 0.0298\*\* at 2-year |
| R5 | **Composite firm-level 10-K exposure explains cross-sectional realized volatility**, conditional on firm and time fixed effects | Table 5, col 1, p. 12 | Composite exposure coefficient = 2.16\*\*\* (SE 0.22); R² = 0.546; 508,447 firm-months |
| R6 | **EMV tracker explains average pairwise return correlations**: firms sharing a leading EMV category comove more strongly when that category's EMV is higher | Table 6, col 1, p. 13 | Coefficient on ln(EMV) = 4.24\*\*\* (SE 0.020); R² = 0.226; doubling ln(EMV) raises avg pairwise correlation ~4.24 pp |
| R7 | **EMV tracks out-of-sample daily VIX and realized S&P 500 volatility** | Table 2, cols 4 and 6, p. 6 | Daily VIX: 0.180\*\*\* (SE 0.00877), R² = 0.245, 1,300 obs; monthly realized volatility: 1.14\*\*\* (SE 0.343), R² = 0.543, 60 obs |
| R8 | **Category-specific EMV trackers track VIX at short and long horizons** | Table 3b, p. 8 | Financial Regulation slope = 1.560\*\*\* (1-month) and 1.188\*\*\* (1-year); Competition Policy = 1.671\*\*\* (1-year); Macro News: Trade = -6.144\*\*\* (10-year); R² = 0.610, 0.472, 0.414 |
| R9 | **Category EMV trackers have heterogeneous future-return associations** | Table 4, p. 8 | Macroeconomic News & Outlook slopes = 0.215\*\*\*, 0.157\*\*\*, 0.114\*\*, 0.109\*\*\* at 3-month, 6-month, 1-year, 2-year horizons; National Security Policy = 0.334\*\*, 0.191\*, 0.0945, -0.0279 at the same horizons |
| R10 | **Petroleum Markets EMV co-moves with oil implied and realized volatility** | Text §3.8, p. 8 | Correlation = 0.60 with CBOE Crude Oil Volatility Index (2007-2023) and 0.50 with CBOE Crude Oil Realized Volatility (1986-2023) |
| R11 | **Macroeconomic and policy topics account for substantial shares of EMV articles** | Text §2.3, p. 5 | Macro News & Outlook 72%; Commodity Markets 44%; Interest Rates 31%; Fiscal Policy 35% (mostly Tax Policy); Tax Policy 30%; Monetary Policy 30%; Regulation 25%; National Security 13% |
| R12 | **Firm-level volatility associations are concentrated in non-policy exposures and selected categories** | Table 5, cols 2-5, p. 12 | Non-policy composite = 2.50\*\*\* (SE 0.25); policy composite = 1.35\*\*\* (0.48); joint = 2.46\*\*\* (0.25) and 0.83\* (0.49); LASSO-selected Interest Rates = -9.33\*\*\* (1.01), Real Estate = 7.90\*\*\* (0.81), Commodity Markets = 2.50\*\*\* (0.29) |
| R13 | **Pairwise-correlation results persist with controls and across policy splits** | Table 6, cols 2-7, p. 13 | ln(EMV) slopes = 1.70\*\*\* (0.018) controlling for VIX; 1.11\*\*\* (0.012) with time fixed effects; 0.946\*\*\* (0.016) for non-policy and 0.718\*\*\* (0.026) for policy categories |
| R14 | **EMV tracks VIX better than NVIX and is robust to newspaper composition** | Text §§3.6-3.7, p. 7 | 1985-2016 monthly correlation with VIX: EMV 0.78 vs NVIX 0.70; mean absolute monthly difference: EMV 2.5 vs NVIX 3.5 VIX points; single-newspaper R² falls 17-38 pp; doubling newspaper weight changes R² by +0.002 to +0.004 for two papers, zero for one, and at most -0.011 for others; dropping a newspaper changes R² by at most 0.013 |

**Overall (paper's conclusion).** The EMV tracker is a simple, transparent, and scalable measure of equity market volatility that correlates closely with the VIX in and out of sample. Policy news is a major and time-varying source of stock market volatility; monetary policy and tax policy are the most important policy-related sources, followed by regulation. Category-specific EMV trackers, combined with firm-level 10-K risk exposures, explain the cross-sectional structure of realized volatility and its evolution over time.

## Theory / model

The paper develops no formal structural model. It frames the empirical exercise around two interpretations of aggregate equity volatility (Introduction, pp. 1-2). Under an efficient-markets view, news changes rational forecasts of future earnings and discount rates. Under the behavioral interpretation discussed by Shiller (1981, 2014), shifts in beliefs or “animal spirits” can move prices beyond changes in fundamentals; limits to arbitrage and fads can allow those movements to persist. The paper measures the newspaper-recorded news and topics that accompany volatility, and does not distinguish causally between these accounts. Its newspaper-headline approach extends an early study of world events and stock prices by Niederhoffer (1971).

The authors test whether the newspaper-based Equity Market Volatility (EMV) tracker covaries with implied and realized equity volatility in and out of sample; whether category trackers track implied volatility and predict returns; and whether category-specific EMV exposures in firms’ 10-K risk disclosures explain cross-sectional volatility and return co-movement. These are descriptive tracking and association tests, not a causal identification design. The paper also applies the tracker method to petroleum markets as a cross-market validation.

## Method

**Overall EMV tracker.** Section 2.1 (pp. 3-4) starts with newspaper article counts for terms in the Economic, Equity Market, and Volatility sets. For newspaper \(j\) and month \(t\), the scaled frequency count is:

$$
 c_{j,t} = \frac{N_{j,t}(E \cap M \cap V)}{N_{j,t}(\text{all articles})}
$$

The authors standardize each newspaper’s scaled count to unit standard deviation, average across the eleven newspapers, and rescale the series to match mean VIX over 1985-2015. The scaled-frequency newspaper method follows Baker et al. (2016), extending their policy-uncertainty measure to equity market volatility. Candidate term combinations are selected by the in-sample fit to 30-day VIX:

$$
(\widehat{M},\widehat{V}) = \arg\max_{M' \subseteq \mathcal{P}(M),\;V' \subseteq \mathcal{P}(V)} R^2\!\left(\text{VIX}_{t},\text{EMV}_{t}(M',V')\right)
$$

The candidate selection uses monthly observations from 1990-2015 and 2,048 combinations of the five retained market terms and six volatility terms (Section 2.1, p. 3). The final overall tracker omits episode-specific terms and VIX itself.

**Category trackers.** Section 2.3 (p. 4) classifies an EMV article into each category whose term set it matches. The category tracker is the category’s share of overall EMV articles multiplied by aggregate EMV:

$$
\text{EMV}_{t}^{b} = \frac{N_t(E \cap M \cap V \cap b)}{N_t(E \cap M \cap V)}\,\text{EMV}_{t}
$$

The authors apply this rule to about forty general economic and policy categories. Categories may overlap, so shares across categories can sum to more than 100 percent.

**Firm-level exposure.** The firm-year exposure to category \(b\) is the share of sentences in Part 1A of its 10-K assigned to that category (Section 5.1, p. 11):

$$
F_{i,y}^{b} = \frac{N_{i,y}(\text{sentences pertaining to category } b)}{N_{i,y}(\text{all Part 1A sentences})}
$$

Filings with fewer than nine counted sentences are dropped. Where multiple filings occur, the paper applies its stated duplicate and calendar-year retiming rules (footnote 18, p. 11). In Table 5’s LASSO exercise, the authors select from 38 category exposure measures and then estimate an OLS regression using the selected measures (p. 12).

## Empirical specifications

**Overall tracker fit and out-of-sample tests (Tables 1-2, pp. 5-6).** The baseline monthly regressions use contemporaneous EMV; Table 1 also adds EMV lags and lagged VIX, tests daily data, uses log levels, and substitutes realized volatility. The monthly and daily VIX regressions are:

$$
\text{VIX}_{t} = \alpha + \beta_0\text{EMV}_{t} + \varepsilon_t
$$

$$
\text{VIX}_{t} = \alpha + \beta_0\text{EMV}_{t} + \beta_1\text{EMV}_{t-1} + \beta_2\text{EMV}_{t-2} + \rho\text{VIX}_{t-1} + \varepsilon_t
$$

The final lagged-VIX specification is estimated separately for daily and monthly observations; the daily variant has daily EMV lags. Other Table 1 outcomes replace VIX with \(\log(\text{VIX}_t)\) or monthly realized volatility \(\text{RVol}_t\), with a lagged RVol term in column 8. Table 1 reports heteroskedasticity-robust standard errors. Its sample is January 1985-December 2023 (468 monthly observations in the VIX and RVol regressions; 9,617 daily observations in the daily specifications). Table 2 estimates the contemporaneous univariate equation separately for daily VIX, monthly VIX, and monthly realized volatility in 1985-2018 and 2019-2023; it reports heteroskedasticity-robust standard errors. The out-of-sample monthly sample has 60 observations and the daily sample has 1,300.

For the transformed and realized-volatility outcomes, the specifications are:

$$
\log(\text{VIX}_{t}) = \alpha + \beta\log(\text{EMV}_{t}) + \varepsilon_t, \qquad \text{RVol}_{t} = \alpha + \beta_0\text{EMV}_{t} + \varepsilon_t, \qquad \text{RVol}_{t} = \alpha + \beta_0\text{EMV}_{t} + \rho\text{RVol}_{t-1} + \varepsilon_t
$$

**Long-horizon implied volatility (Table 3a, p. 7).** For each VIX horizon \(h\), the specification includes current EMV and three- and twelve-month lagged averages:

$$
\text{VIX}_{t}^{h} = \alpha^{h} + \beta_{0}^{h}\text{EMV}_{t} + \beta_{3}^{h}\overline{\text{EMV}}_{t,3} + \beta_{12}^{h}\overline{\text{EMV}}_{t,12} + \varepsilon_{t}^{h}
$$

Here \(\overline{\text{EMV}}_{t,k}\) is the mean of EMV from \(t-1\) through \(t-k\). The seven horizons range from one month to ten years. Newey-West standard errors use maximum lag 2. The sample is January 1996-February 2023 for horizons up to one year (314 observations) and November 2002-July 2016 for three-, five-, and ten-year horizons (165 observations).

**Category trackers and VIX horizons (Table 3b, p. 8).** Each displayed category tracker is entered separately in a regression for the one-month, one-year, or ten-year VIX horizon:

$$
\text{VIX}_{t}^{h} = \alpha_{b,h} + \beta_{b,h}\text{EMV}_{t}^{b} + \varepsilon_{b,h,t}
$$

The table reports Newey-West standard errors with maximum lag 2. Monthly data run from January 1996-February 2023 for one-month and one-year VIX (326 observations), and from November 2002-July 2016 for ten-year VIX (165 observations).

**Future S&P 500 returns (Table 4, p. 7).** Annualized total returns over horizon \(\tau\) are regressed on lagged overall or category EMV:

$$
r(t \to t+\tau) = \mu_{\tau} + \delta_{\tau}\text{EMV}_{t-1}^{b} + \varepsilon_{t,\tau}
$$

For the overall tracker, \(b\) denotes the aggregate index; the table also separately estimates Macroeconomic News & Outlook and National Security Policy trackers. The four horizons are 3 months, 6 months, 1 year, and 2 years. Each regression uses monthly data from January 1985-December 2023 (431 observations); Newey-West standard errors use a maximum lag equal to the return horizon.

**Firm-month volatility panel (Table 5, p. 12).** The paper’s numbered main-text estimating equation uses firm and month fixed effects and category exposure weights:

$$
\sigma_{i,t} = \alpha_i + \gamma_t + \beta\sum_b F_{i,y}^{b}\text{EMV}_{t}^{b} + \epsilon_{i,t}
\tag{1}
$$

The dependent variable is the standard deviation of daily firm returns in month \(t\). Table 5 estimates this with the full category composite, non-policy and policy composites separately and jointly, and LASSO-selected category composites. All specifications include firm and time fixed effects, weight observations by lagged log market capitalization times the square root of Part 1A sentence count, winsorize volatility at the 1st and 99th percentiles, and cluster standard errors by firm. The sample covers 508,447 firm-months based on filings issued in 2006-2019.

The non-policy, policy, joint, and selected-category columns replace the full-category sum in equation (1) as follows:

$$
\begin{aligned}
\sigma_{i,t} &= \alpha_i + \gamma_t + \beta_N\sum_{b\in B_N}F_{i,y}^{b}\text{EMV}_{t}^{b} + \epsilon_{i,t},\\
\sigma_{i,t} &= \alpha_i + \gamma_t + \beta_P\sum_{b\in B_P}F_{i,y}^{b}\text{EMV}_{t}^{b} + \epsilon_{i,t},\\
\sigma_{i,t} &= \alpha_i + \gamma_t + \beta_N\sum_{b\in B_N}F_{i,y}^{b}\text{EMV}_{t}^{b} + \beta_P\sum_{b\in B_P}F_{i,y}^{b}\text{EMV}_{t}^{b} + \epsilon_{i,t},\\
\sigma_{i,t} &= \alpha_i + \gamma_t + \sum_{b\in S_{\text{LASSO}}}\beta_bF_{i,y}^{b}\text{EMV}_{t}^{b} + \epsilon_{i,t}.
\end{aligned}
$$

**Pairwise return correlations (Table 6, p. 13).** For firm-month observations assigned to leading Part 1A category \(l\), the average pairwise daily return correlation is regressed on the log category tracker. A fully controlled variant is:

$$
\bar{\rho}_{i,t} = \mu + \delta\ln(\text{EMV}_{t}^{b=l}) + \lambda\text{VIX}_{t} + \sum_{k=1}^{2}\phi_k\ln(\text{EMV}_{t-k}^{b=l}) + \alpha_i + \gamma_t + \varepsilon_{i,t}
$$

The table estimates variants that add contemporaneous VIX, two tracker lags, and time fixed effects, and it reports separate non-policy and policy subsamples. All columns include firm fixed effects; time fixed effects appear in columns 4-7. The full sample has 407,479 firm-month observations in the baseline and VIX-control specifications, declining to 390,917 when lagged EMV is included. The non-policy and policy samples have 295,874 and 111,576 observations. Table 6 notes multiply coefficients by 100 but do not specify a standard-error estimator.

The specifications add controls in stages, then estimate the time-fixed-effect specification on the two separate subsamples:

$$
\begin{aligned}
\bar{\rho}_{i,t} &= \mu + \delta\ln(\text{EMV}_{t}^{b=l}) + \alpha_i + \varepsilon_{i,t},\\
\bar{\rho}_{i,t} &= \mu + \delta\ln(\text{EMV}_{t}^{b=l}) + \lambda\text{VIX}_{t} + \alpha_i + \varepsilon_{i,t},\\
\bar{\rho}_{i,t} &= \mu + \delta\ln(\text{EMV}_{t}^{b=l}) + \sum_{k=1}^{2}\phi_k\ln(\text{EMV}_{t-k}^{b=l}) + \alpha_i + \varepsilon_{i,t},\\
\bar{\rho}_{i,t} &= \mu + \delta\ln(\text{EMV}_{t}^{b=l}) + \alpha_i + \gamma_t + \varepsilon_{i,t},\\
\bar{\rho}_{i,t} &= \mu + \delta\ln(\text{EMV}_{t}^{b=l}) + \sum_{k=1}^{2}\phi_k\ln(\text{EMV}_{t-k}^{b=l}) + \alpha_i + \gamma_t + \varepsilon_{i,t},\\
\bar{\rho}_{i,t}^{(g)} &= \mu_g + \delta_g\ln(\text{EMV}_{t}^{b=l}) + \alpha_i + \gamma_t + \varepsilon_{i,t}, \quad g\in\{\text{non-policy},\text{policy}\}.
\end{aligned}
$$

**Petroleum-market check (Section 3.8, p. 8).** The authors construct a Petroleum Markets tracker by applying the category-share formula above to the terms oil, petroleum, crude, and gas. They compare it descriptively with the CBOE crude-oil implied-volatility index over 2007-2023 and crude-oil realized volatility over 1986-2023; the paper reports correlations and does not estimate a separate regression.

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

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026), article 104187. Paywalled: © 2025 Elsevier B.V. All rights are reserved. This distillation was extracted and checked against the source PDF on 2026-10-04; it has not been independently reproduced.

> Baker, Scott R., Nicholas Bloom, Steven J. Davis, and Kyle Kost.
> "Policy news and stock market volatility."
> *Journal of Financial Economics* 175 (2026) 104187.
> DOI: [10.1016/j.jfineco.2025.104187](https://doi.org/10.1016/j.jfineco.2025.104187).
> Paywalled. Extract-only; no redistribution of the verbatim PDF.
