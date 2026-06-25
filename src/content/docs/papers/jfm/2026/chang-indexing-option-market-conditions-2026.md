---
title: "Stock Market Indexing and Option Market Conditions: Chang, Ge, Lin & Ma (2026)"
description: >-
  Distilled: Stocks at the top of the Russell 2000 Index have smaller put-call parity
  deviations, higher options trading volume, and narrower bid-ask spreads than similar-sized
  stocks at the bottom of the Russell 1000 Index, documented via the annual Russell 1000/2000
  reconstitution as a regression discontinuity design (local linear regressions, 1998-2006).
  Journal of Financial Markets 2026, CC BY-NC-ND 4.0. Six core results with source locators,
  datasets used, the measure construction, and the identification approach.
sidebar:
  label: Chang-Ge-Lin-Ma 2026
  order: 1
tags: [paper-summary, options, asset-pricing, market-microstructure, stock-indexing,
       panel-regression, open-access, peer-reviewed, unreplicated,
       data:optionmetrics, data:wrds, data:russell-index]
paper:
  authors: Eric C. Chang, Li Ge, Tse-Chun Lin, Xiaorong Ma
  authorList:
    - { family: Chang, given: "Eric C.", affiliation: "Shanghai Advanced Institute of Finance, Shanghai Jiao Tong University" }
    - { family: Ge, given: Li, orcid: "0000-0001-9988-005X", affiliation: "Monash Business School, Monash University" }
    - { family: Lin, given: Tse-Chun, orcid: "0000-0002-3266-9898", affiliation: "Faculty of Business and Economics, The University of Hong Kong" }
    - { family: Ma, given: Xiaorong, orcid: "0009-0008-4721-0984", affiliation: "Faculty of Business Administration, University of Macau" }
  year: 2026
  venue: Journal of Financial Markets 78 (2026) 101026
  venueShort: J. Fin. Markets 2026
  tier: lower
  doi: 10.1016/j.finmar.2025.101026
  license: "CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by-nc-nd/4.0/, start 2025-10-15, delay-in-days 0; corroborated by artifact p.1 open-access notice)"
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: "open-access HTML+PDF (Elsevier ScienceDirect; CC BY-NC-ND 4.0 confirmed via Crossref DOI metadata, 2026-06-25)"
  redistribution: "extract-only (CC BY-NC-ND 4.0 permits redistribution of verbatim copies; no derivative works permitted; PDF not hosted in this batch)"
  resultsCount: 6
  citedByCount: 0
  jel:
    codes: [G12, G13, G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Financial Markets and Investment Strategies", "Stock Market Forecasting Methods", "Market Dynamics and Volatility"]
  dataAccess: licensed-commercial
  outcome:
    - put-call parity deviation (option market conditions)
    - options trading volume
    - options bid-ask spread
  outcomeClass: [market-microstructure, asset-prices]
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, panel-regression]
    identification: rdd
  contributionType: [new-fact]
  mechanisms: [liquidity]
  scope:
    region: US
    assetClass: "US equities and exchange-traded options (Russell 1000/2000 threshold stocks)"
    period: 1998-01..2006-12
    frequency: daily
    dataType: [market, accounting]
    granularity: [security]
    n: "199-559 stock-year observations per regression; bandwidth ±50 stocks around Russell 1000/2000 threshold, 1998-2006"
  findings:
    - { ref: R1, outcome: "put-call parity deviation (option market conditions)", metric: coefficient, value: "Dum2000 = -0.004 (t = -2.42)", direction: negative, vsBenchmark: "similar-sized stocks at bottom of Russell 1000 Index; bandwidth 50" }
    - { ref: R2, outcome: options trading volume, metric: coefficient, value: "Dum2000 = 0.561 (t = 5.28)", direction: positive, vsBenchmark: "similar-sized stocks at bottom of Russell 1000 Index; bandwidth 50" }
    - { ref: R3, outcome: options bid-ask spread, metric: coefficient, value: "Dum2000 = -2.781 (t = -4.59)", direction: negative, vsBenchmark: "similar-sized stocks at bottom of Russell 1000 Index; bandwidth 50" }
    - { ref: R4, outcome: "options bid-ask spread (call vs put)", metric: coefficient, value: "call Dum2000 = -3.565 (t = -6.25); put Dum2000 = -1.731 (t = -2.80)", direction: negative, vsBenchmark: "call spreads more affected than put spreads; inconsistent with lending-fee channel" }
    - { ref: R5, outcome: "number of zero trading volume days (OptNZVD)", metric: coefficient, value: "Dum2000 = -32.774 (t = -5.68)", direction: negative, vsBenchmark: "similar-sized stocks at bottom of Russell 1000 Index; bandwidth 50" }
    - { ref: R6, outcome: "options ILLIQ (Optilliq)", metric: coefficient, value: "Dum2000 = -0.050 (t = -5.32)", direction: negative, vsBenchmark: "similar-sized stocks at bottom of Russell 1000 Index; bandwidth 50" }
  resultType: new-finding
  relatesTo:
    - { cite: "Chang et al. (2015)", relation: builds-on, note: "the Russell 1000/2000 regression discontinuity identification strategy and local linear regression approach adopted here" }
    - { cite: "Rösch et al. (2017)", relation: builds-on, note: "the Absoptivspread measure of put-call parity deviation used as the main option market conditions proxy" }
    - { cite: "Lin et al. (2019)", relation: builds-on, note: "local linear nonparametric regression methodology around discontinuity thresholds to avoid boundary bias" }
    - { cite: "Boone and White (2015)", relation: cites, note: "firms at top of Russell 2000 have higher stock liquidity and lower information asymmetry; provides the stock-side premise for the mechanism" }
    - { cite: "Kamara and Miller (1995)", relation: cites, note: "higher options liquidity reduces put-call parity violations; this paper's findings are consistent with that prior result" }
  openQuestions:
    - "The sample ends in 2006 due to the Russell banding policy implemented in 2007, under which stocks switch indexes only if market capitalizations move beyond a 5% range of the threshold, reducing local continuity of firm assignment around the cutoff; whether similar liquidity spillover effects hold under the post-2007 banding rule or other index reconstitution frameworks is untested (pp. 4-5)."
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (16 pp., 9 tables); six results extracted from the open-access PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; R1-R3, R5-R6 magnitudes and locators confirmed exact; R4 page locator corrected from pp. 9-10 to pp. 10-11 (Table 5 is journal p. 10, Table 6 is journal p. 11); equations (1)-(5) verified term-by-term; no em-dashes or colorful adjectives found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101026", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by-nc-nd/4.0/, start=2025-10-15, delay-in-days=0" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the measure it constructs (put-call parity deviation as a proxy for option market conditions), and the regression discontinuity design it applies (local linear regressions around the Russell 1000/2000 threshold): enough to know what it found and how, without reading the full paper. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101026).

## TL;DR

Using the annual Russell 1000/2000 Index reconstitution as a regression discontinuity design (following Chang et al. (2015)), the paper finds that stocks at the top of the Russell 2000 Index exhibit better option market conditions than similar-sized stocks at the bottom of the Russell 1000 Index, over 1998-2006. Specifically, indexed stocks have smaller put-call parity deviations, higher options trading volume, and narrower options bid-ask spreads. Boone and White (2015) document that these same threshold stocks have higher stock liquidity and lower information asymmetry. The paper argues the channel is a supply-side liquidity spillover: improved stock liquidity reduces the hedging costs of options market makers, who hedge by trading the underlying stock, making them more willing to provide liquidity in options. The lending-fee channel is ruled out because call options bid-ask spreads are more affected than put options bid-ask spreads, opposite to the prediction under a short-selling-cost mechanism. The results are consistent with Kamara and Miller (1995), who show that higher options liquidity reduces put-call parity violations.

## Core results

Magnitudes as reported; `\*\*` = 5%, `\*\*\*` = 1%. All from local linear regressions around the Russell 1000/2000 threshold, bandwidth ±50 stocks, year and industry fixed effects, 1998-2006. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Stocks at top of Russell 2000 have **smaller put-call parity deviations** (Absoptivspread) than similar-sized stocks at bottom of Russell 1000 | Table 2, col. 3, p. 7 | Dum2000 = -0.004\*\* (t = -2.42); N = 199 |
| R2 | Indexed stocks have **higher options trading volume** (log total contracts) | Table 3, col. 3, p. 8 | Dum2000 = 0.561\*\*\* (t = 5.28); N = 368 |
| R3 | Indexed stocks have **narrower options bid-ask spreads** (open-interest-weighted, %) | Table 4, col. 3, p. 9 | Dum2000 = -2.781\*\*\* (t = -4.59); N = 368 |
| R4 | **Call bid-ask spreads are more affected than put bid-ask spreads**, inconsistent with the lending-fee channel prediction | Tables 5 and 6, pp. 10-11 | Volume: put Dum2000 = 0.566\*\*\* (t = 4.53), call Dum2000 = 0.524\*\*\* (t = 3.53); Spreads: put Dum2000 = -1.731\*\*\* (t = -2.80), call Dum2000 = -3.565\*\*\* (t = -6.25) |
| R5 | Alternative liquidity measure: indexed stocks have **fewer zero trading volume days** (OptNZVD) | Table 8, col. 3, p. 13 | Dum2000 = -32.774\*\*\* (t = -5.68); N = 321 |
| R6 | Alternative liquidity measure: indexed stocks have **lower options ILLIQ** (Optilliq) | Table 9, col. 3, p. 14 | Dum2000 = -0.050\*\*\* (t = -5.32); N = 303 |

**Overall (paper's conclusion).** The stock market indexing effect, identified via the Russell 1000/2000 reconstitution, improves option market conditions through liquidity spillovers from equity markets to options markets. The supply-side channel, where options market makers face lower hedging costs when underlying stock liquidity improves, dominates demand-side and lending-fee alternatives. Results are robust to alternative bandwidths (±25 and ±75 stocks, Table 7) and alternative liquidity measures (OptNZVD, Optilliq, Tables 8-9).

## Theory / model

The paper has no formal economic model. It tests two empirical hypotheses derived from the stock indexing mechanism.

**H1 (option market conditions).** If stock market indexing improves stock liquidity and reduces information asymmetry for stocks just above the Russell 1000/2000 threshold (documented by Boone and White (2015)), then put-call parity deviations for options on those stocks should be smaller. The put-call parity deviation reflects demand pressure for call options relative to put options (Cremers and Weinbaum, 2010), and better-informed or more active market making reduces such imbalances (Rösch et al. (2017)).

**H2 (supply-side liquidity spillover).** Options market makers hedge their positions by trading the underlying stock. When stock liquidity improves, their hedging costs fall, making them more willing to provide options liquidity (wider coverage, narrower spreads). This supply-side shift predicts higher options volume and narrower bid-ask spreads simultaneously.

**Mechanism distinction.** A demand-side story, where informed arbitrageurs are more attracted to better-liquid stocks and increase options activity, would predict higher volume but wider bid-ask spreads (adverse selection). A lending-fee channel, where lower short-selling costs reduce the replication cost of put options, would predict stronger effects on put options relative to call options. The paper tests these alternatives using separate call and put regressions (Tables 5 and 6): call bid-ask spreads are more affected than put spreads, ruling out the lending-fee channel and pointing toward the supply-side market-making mechanism.

**Identification.** Each year, Russell constructs the Russell 1000 and Russell 2000 indexes based on market capitalization at end of May; portfolio weights are released in June. Stocks just above the cutoff enter the Russell 2000 with high portfolio weights (the 2000 index has a smaller aggregate market cap denominator), while stocks just below enter the Russell 1000 with low portfolio weights. Market capitalizations around the threshold are continuous, but portfolio weights jump discontinuously, providing near-random assignment in a narrow bandwidth. Chang et al. (2015) establish that this generates significant stock price effects. The paper follows the same setting, focusing on stocks within ±50 ranks of the threshold (1998-2006, ending before Russell's 2007 banding policy change).

## Method

The paper follows Lin et al. (2019) and adopts local linear nonparametric regression as the estimator. This avoids the boundary bias that kernel regression (Nadaraya-Watson) produces near the support boundary of the running variable (p. 5). The option market conditions measure follows Rösch et al. (2017): the absolute deviation from put-call parity for stock $$i$$ on day $$t$$ is the open-interest-weighted average absolute difference in implied volatilities across matched call-put pairs (equation (1), p. 4):

$$
\text{Absoptivspread}_{i,t} = \left| IV_{i,t}^{\text{calls}} - IV_{i,t}^{\text{puts}} \right| = \left| \sum_{j=1}^{N_{i,t}} w_{j,t}^{i} \left( IV_{j,t}^{i,\text{call}} - IV_{j,t}^{i,\text{put}} \right) \right| \tag{1}
$$

where $$N_{i,t}$$ is the total number of valid call-put pairs (same strike, same maturity) for stock $$i$$ on day $$t$$; $$w_{j,t}^{i}$$ is the open-interest weight; and $$IV_{j,t}^{i,\text{call}}$$, $$IV_{j,t}^{i,\text{put}}$$ are the implied volatilities. Only short-term options with time to maturity of 10 to 60 days are used. Daily $$\text{Absoptivspread}_{i,t}$$ is then averaged from July to the next May (11 months post-reconstitution) to form the annual dependent variable. A smaller value indicates better option market conditions (put-call parity more closely obeyed).

The alternative liquidity measure OptNZVD follows Liu (2006) and is the standardized turnover-adjusted number of zero trading volume days over $$x$$ months (equation (5), p. 12):

$$
\text{OptNZVD}_{x} = \left( N_{0,x} + \frac{1/(x\text{-month turnover})}{\text{Deflator}} \right) \times \frac{21x}{\text{NoTD}} \tag{5}
$$

where $$N_{0,x}$$ is the number of zero-volume trading days, $$x\text{-month turnover}$$ is the sum of daily options turnover (volume in shares divided by shares outstanding), NoTD is the number of trading days, and the Deflator ensures the fractional term lies in $$(0,1)$$. The paper uses $$x = 11$$ months (July through next May).

## Empirical specifications

**Main regression (option market conditions), equation (2), p. 5:**

$$
\text{Absoptivspread}_{i,t} = \tau \cdot \text{Dum2000}_{i,t} + \delta X_{i,t-1} + \text{FixedEffects} + \xi_{it} \tag{2}
$$

where $$\text{Dum2000}_{i,t}$$ equals one when stock $$i$$ is at the top of the Russell 2000 in year $$t$$ (zero when at the bottom of the Russell 1000). $$X_{i,t-1}$$ is a vector of controls following Roll et al. (2010) and Lin and Lu (2015): log market capitalization in May (LNMAYSIZE), book-to-market ratio (B/M), cumulative daily stock return (LAGSTOCKRET), skewness of daily stock returns (LAGSTOCK\_SKEW), log number of analysts (ANALYSTS), standard deviation of analyst earnings forecasts (DISPERSION), average stock bid-ask spread (STKSPREAD), average stock trading volume (STKVOL), mean open-interest-weighted implied volatility (IMPLIEDVOL), cumulative daily S&P 500 return (SP500), and average daily VIX (VIXYEAR). All controls are constructed over the same 11-month window. Fixed effects include year and industry. The coefficient $$\tau$$ captures the indexing effect on option market conditions.

**Liquidity spillover regressions, equations (3) and (4), pp. 7-8:**

$$
\text{Optvol}_{i,t} = \tau \cdot \text{Dum2000}_{i,t} + \delta X_{i,t-1} + \text{FixedEffects} + \xi_{it} \tag{3}
$$

$$
\text{Optspread}_{i,t} = \tau \cdot \text{Dum2000}_{i,t} + \delta X_{i,t-1} + \text{FixedEffects} + \xi_{it} \tag{4}
$$

where $$\text{Optvol}_{i,t}$$ is the log of total options contracts and $$\text{Optspread}_{i,t}$$ is the open-interest-weighted daily average bid-ask spread in percent. Equations (3) and (4) are also estimated separately for call and put options (Tables 5 and 6, pp. 9-10) to test the lending-fee channel.

**Alternative measures.** The same specifications replace the dependent variable with OptNZVD (equation (5), Table 8) and Optilliq, the average daily change in options prices divided by dollar trading volume, adjusted for mechanical price changes due to the underlying (Table 9). Both follow from Amihud (2002) and Liu (2006) adapted for options.

**Robustness.** Table 7 (p. 12) repeats the main regressions with bandwidths of ±25 and ±75 stocks. In both cases the Dum2000 coefficient is negative and statistically significant for put-call parity deviation, positive and significant for options volume, and negative and significant for bid-ask spreads, consistent with the main results at ±50.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| OptionMetrics | Daily options data: strike price, trading volume, price, open interest, maturity, implied volatility, bid-ask spread, delta (for all exchange-traded options on sample stocks) | [OptionMetrics](/wiki/commercial/optionmetrics/) (licensed) |
| CRSP | Daily stock price and trading volume for underlying stocks; used for control variables (STKVOL, LAGSTOCKRET, LAGSTOCK\_SKEW) | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| Compustat | Annual accounting data for control variables (book-to-market ratio B/M) | [WRDS / Compustat](/wiki/commercial/wrds/) (licensed) |
| Russell 1000/2000 Index membership lists | Annual index membership and ranking data (from Russell); used to identify Dum2000 and the threshold cutoff | No page yet |

Sample: 1998-2006 (9 annual reconstitutions), 11-month estimation window per reconstitution (July through next May). Bandwidth: ±50 stocks around the Russell 1000/2000 cutoff. Final samples range from 199 (put-call parity regressions, Table 2) to 559 (options volume, Table 3) stock-year observations depending on options data coverage.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.finmar.2025.101026) if you are: studying how equity market structure changes spill over into derivatives markets; extending the analysis to post-2007 reconstitutions or other index settings; distinguishing supply-side (market-making cost), demand-side (informed trading), and lending-fee channels in options markets; or building on the put-call parity deviation measure of Rösch et al. (2017) in an RDD setting. Tables 2-4 (pp. 7-9) contain the primary results; Tables 5-6 (pp. 9-10) contain the mechanism tests; Tables 7-9 (pp. 12-14) contain robustness.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Markets* 78 (2026) 101026. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. CC BY-NC-ND 4.0 license permits redistribution of verbatim copies; derivative works are not permitted. This page is an extract-only distillation; the PDF is not hosted.

> **Attribution (CC BY-NC-ND 4.0).** Chang, Eric C., Li Ge, Tse-Chun Lin, and Xiaorong Ma.
> "The effect of stock market indexing on option market conditions."
> *Journal of Financial Markets* 78 (2026): 101026.
> DOI: 10.1016/j.finmar.2025.101026. © 2025 The Authors.
> Published by Elsevier B.V. Licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
> This page is an extract-only distillation by the Institute for Automated Research.
