---
title: "Hidden Cost of ETF Investing: Liu, T. Zhang & Y. Zhang (2026)"
description: >-
  Distilled: ETFs earn significantly positive overnight returns and negative
  intraday returns; the gap is driven by retail demand near the market open and
  arbitrage constraints that prevent immediate price correction. Journal of Banking
  and Finance 2026, CC BY 4.0. Seven core results with source locators, datasets
  used, the three tested hypotheses, and the estimating equations.
sidebar:
  label: Liu-Zhang-Zhang 2026
  order: 1
tags: [paper-summary, asset-pricing, equities, portfolio-sort, fama-macbeth, panel-regression, open-access, cc-by, peer-reviewed, unreplicated, data:crsp-mutual-funds, data:wrds, data:taq, data:morningstar, data:thomson-13f]
paper:
  authors: Xin Liu, Tianyao (Terry) Zhang, Yaodong Zhang
  authorList:
    - { family: Liu, given: Xin, orcid: 0000-0003-4878-1486, affiliation: Australian National University }
    - { family: Zhang, given: Tianyao, orcid: 0000-0003-0012-2190, affiliation: Australian National University }
    - { family: Zhang, given: Yaodong, orcid: 0009-0005-4183-9464, affiliation: Australian National University }
  year: 2026
  venue: Journal of Banking and Finance 185, 107621 (2026)
  venueShort: J. Banking Finance 2026
  tier: field
  doi: 10.1016/j.jbankfin.2025.107621
  jel:
    codes: [G12, G14, G23, N22]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Market Dynamics and Volatility', 'Financial Literacy, Pension, Retirement Analysis']
  dataAccess: licensed-commercial
  outcome:
    - overnight-intraday return differential for ETFs
    - cross-sectional variation in ETF overnight vs intraday returns
  outcomeClass: [security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-03-23; corroborated by artifact p.1 CC BY license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "blocked-paywall (ScienceDirect/Elsevier site; CC-BY VOR licence confirmed in Crossref DOI metadata 2026-06-25)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 7
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [portfolio-sort, fama-macbeth, panel-regression, difference-in-differences]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [limits-to-arbitrage, demand-elasticity]
  scope:
    region: US
    assetClass: US ETFs (equity, fixed income, other)
    period: 2004-01..2021-12
    frequency: mixed
    dataType: [market, accounting]
    granularity: [security]
    n: "2,916 unique US ETFs, 202,825 monthly observations, January 2004 to December 2021"
  findings:
    - { ref: R1, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "0.933%*** per month (SE 0.207%); overnight = 0.784%*** (SE 0.165%), intraday = -0.150% (SE 0.186%, insignificant)", direction: positive, vsBenchmark: significantly positive overnight vs insignificant intraday }
    - { ref: R2, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "high-minus-low composite retail demand = 1.162%*** per month (SE 0.137%)", direction: positive, vsBenchmark: high-retail-demand ETFs vs low-retail-demand ETFs }
    - { ref: R3, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "high-minus-low composite arbitrage constraint = 0.875%*** per month (SE 0.126%)", direction: positive, vsBenchmark: high-arbitrage-constraint ETFs vs low-arbitrage-constraint ETFs }
    - { ref: R4, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "high retail demand / high arbitrage constraints = 1.988%*** (SE 0.281%); low/low = 0.312%** (SE 0.152%)", direction: positive, vsBenchmark: "high/high is approximately 6x the low/low portfolio differential" }
    - { ref: R5, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "retail ownership coefficient = 0.898*** (SE 0.102) in Fama-MacBeth; 0.833*** (SE 0.092) with full controls", direction: positive }
    - { ref: R6, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "EIP months: +2.372%*** (SE 0.076); Retail_demand x EIP interaction = 1.370%*** (SE 0.086)", direction: positive, vsBenchmark: COVID-19 EIP periods vs non-EIP months in the same pandemic window }
    - { ref: R7, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "market open retail order imbalance coefficient = 0.082*** (SE 0.006) on NDiff; market close imbalance coefficient is insignificant", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: 'Lou, Polk and Skouras (2019)', doi: '10.1016/j.jfineco.2019.03.011', relation: builds-on, note: 'overnight/intraday return definitions and tug-of-war concept adapted to the ETF setting' }
    - { cite: 'Lachance (2021)', doi: '10.1016/j.finmar.2020.100563', relation: extends, note: 'complements her study of ETFs high overnight returns by identifying retail demand and arbitrage constraints as the mechanism' }
    - { cite: 'Bogousslavsky (2021)', doi: '10.1016/j.jfineco.2020.07.020', relation: builds-on, note: 'the cross-section of intraday and overnight stock returns; this paper shows similar patterns hold in the ETF market' }
    - { cite: 'Berkman et al. (2012)', doi: '10.1017/s0022109012000270', relation: builds-on, note: 'retail attention and bid-ask bounce inflate open prices; this paper extends to ETFs using mid-quote returns to strip out bid-ask effects' }
    - { cite: 'Boehmer et al. (2021)', doi: '10.1111/jofi.13033', relation: builds-on, note: 'algorithm to identify retail investor orders from TAQ sub-penny price improvements, applied to infer retail order imbalances near the open and close' }
  openQuestions:
    - "Whether the intraday pricing inefficiency is fully eliminated by the AP creation/redemption mechanism at the close, and whether market-maker competition or regulatory changes could reduce the retail demand markup earlier in the trading day (p. 13, conclusion)."
  replicationCode:
    status: none
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107621", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[content-version=vor]: URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-03-23; two TDM licenses also present; artifact footer confirms CC BY" }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-15, all tables and figures); seven results extracted from the source PDF. Not human-verified. Not reproduced. Authors state they do not have permission to share data." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all seven result rows confirmed correct; equations (1)-(5),(9),(10) and FM/PR/EIP specs verified term-by-term; one fix applied: added missing JEL code N22 (present on PDF p. 1)." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results (the overnight vs intraday return differential in the US ETF market, its magnitude, and its mechanism), the three tested hypotheses, and the key estimating equations: enough to know what it found and how, without reading all 15 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107621).

## TL;DR

Decomposing ETF close-to-close mid-quote returns into overnight and intraday components (January 2004 to December 2021, 2,916 US ETFs), the paper documents that overnight returns are significantly positive on average (0.78% per month), while intraday returns are not significantly different from zero (-0.15%), producing a persistent overnight-intraday gap of 0.93% per month. This gap is ubiquitous across asset types (equity, fixed income, and other ETFs) and exchanges (NYSE and NASDAQ). Three candidate explanations are tested and the first two are rejected: the differential is not explained by overnight risk being higher than intraday risk (H1 rejected), nor by information asymmetry driving informed traders to exit at the close (H2 rejected). Instead, the evidence supports H3: the gap is driven by excess retail demand near the market open and by arbitrage constraints that slow correction. ETFs with the highest retail demand and highest arbitrage constraints show a monthly differential nearly six times larger than ETFs in the lowest demand and constraint group (1.99% vs 0.31% per month). Using COVID-19 Economic Impact Payments (EIPs) as an exogenous shock to retail demand, the paper shows that EIP months raise the overnight-intraday return difference by 2.37% per month, providing causal evidence for the retail demand channel.

Prior work by Lou, Polk and Skouras (2019) documents a tug-of-war between overnight and intraday returns for individual stocks; this paper establishes the same pattern in ETFs and identifies the underlying mechanism. Lachance (2021) focuses on ETFs' high overnight returns from a microstructure perspective; this paper complements her work by focusing on the full overnight-intraday differential and by decomposing the sources. Bogousslavsky (2021) documents the cross-section of intraday and overnight stock returns; this paper extends those findings to ETFs and links them to retail demand and arbitrage supply. Berkman et al. (2012) link retail investor attention and bid-ask bounce to inflated open prices; this paper strips out the bid-ask effect via mid-quote returns and shows the return pattern survives. Boehmer et al. (2021) propose an algorithm to identify retail orders in TAQ; the paper uses their method to measure retail order imbalances near the open.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. All returns are in percentages. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | The all-ETF market portfolio has a **significantly positive overnight return and an insignificant intraday return**, producing a 0.93%/month overnight-intraday differential | Table 3, Panel A, p. 7 | Overnight = 0.784%\*\*\* (SE 0.165%), Intraday = -0.150% (SE 0.186%), Overnight-Intraday = 0.933%\*\*\* (SE 0.207%) |
| R2 | **ETFs with the highest retail demand have a significantly larger overnight-intraday differential** than low-retail-demand ETFs; the composite retail demand spread is 1.162%/month | Table 4, Panel B (bottom row), p. 8 | High-minus-low composite retail demand = 1.162%\*\*\* (SE 0.137%); individual proxies: max return 0.926%\*\*\* (SE 0.188%), retail ownership 0.625%\*\*\* (SE 0.078%), retail flow 0.360%\*\*\* (SE 0.084%) |
| R3 | **ETFs with the tightest arbitrage constraints have a larger overnight-intraday differential**; the composite arbitrage constraint spread is 0.875%/month | Table 4, Panel C (bottom row), p. 8 | High-minus-low composite arbitrage constraint = 0.875%\*\*\* (SE 0.126%); proxies: AP Concentration 0.424%\*\*\* (SE 0.095%), IVol 1.012%\*\*\* (SE 0.191%), Bid-Ask Spread 0.634%\*\*\* (SE 0.121%), Amihud Illiquidity 0.373%\*\*\* (SE 0.115%) |
| R4 | **Jointly, high retail demand and high arbitrage constraints produce a differential nearly six times larger** than the low/low group (1.99% vs 0.31% per month) | Table 6, Panel A, p. 10 | High retail demand / high arbitrage constraint = 1.988%\*\*\* (SE 0.281%); low / low = 0.312%\*\* (SE 0.152%); difference = 1.143%\*\*\* (SE 0.157%) |
| R5 | **Fama-MacBeth regressions confirm that retail investor ownership positively predicts the overnight-intraday differential** after controlling for risk measures | Table 5, col. 3 and col. 6, p. 9 | Retail Ownership coefficient = 0.898%\*\*\* (SE 0.102) in col. 3 (univariate with controls); 0.833%\*\*\* (SE 0.092) in col. 6 (full specification); N = 200,118 |
| R6 | **COVID-19 Economic Impact Payments (EIPs) increase the overnight-intraday differential by 2.37%/month**, confirming causal role of retail demand | Table 8, col. 2-3, p. 11 | EIP months: +2.372%\*\*\* (SE 0.076); Retail_demand x EIP interaction = 1.370%\*\*\* (SE 0.086); sample: January 2020 to December 2021, N = 45,492 |
| R7 | **Retail order imbalances near the market open (not the close) drive the overnight-intraday differential**, measured directly from TAQ | Table 9, col. 1-2, p. 11 | Market open retail imbalance coefficient = 0.082%\*\*\* (SE 0.006) on NDiff; market close retail imbalance coefficient = 0.001 (SE 0.002, insignificant); sample: January 2010 to December 2021, N = 3,975,301 |

**Overall (paper's conclusion).** The convenience of buying ETFs during intraday trading hours comes at a cost: retail investors bid up the opening price and arbitrageurs cannot fully correct this by the end of the day. This hidden cost is economically large (4.2 basis points per day on average, or 0.93% per month), ubiquitous across ETF types and exchanges, and causal: exogenous increases in retail demand during EIP months raise the differential. Investors can reduce the cost by purchasing near the market close, when ETF prices are more efficient due to the AP creation and redemption mechanism restoring pricing accuracy.

## Theory / model

The paper tests three competing hypotheses about why overnight returns exceed intraday returns for ETFs; there is no formal structural model.

**Hypothesis 1 (H1) -- Risk-return trade-off.** If holding assets overnight entails greater risk than intraday trading, overnight returns should compensate for that risk. Prediction: the overnight-intraday return difference is positively correlated with overnight risk and negatively correlated with intraday risk.

**Hypothesis 2 (H2) -- Information asymmetry.** Following Slezak (1994) and Hong and Wang (2000), if informed investors trade near the close to realize overnight information advantages, closing prices are discounted, raising overnight returns. Prediction: the differential is positively correlated with the proportion of informed (institutional) investors, so ETFs with more retail investors (less informed) should have a smaller differential.

**Hypothesis 3 (H3) -- Retail demand and arbitrage constraints.** Retail investors, who prefer to trade near the market open (Lou, Polk and Skouras (2019)), create excess demand that temporarily inflates opening prices. Arbitrageurs facing inventory limits, execution costs, and concentration constraints cannot immediately correct this mispricing; it unwinds gradually through the trading day, reducing intraday returns. Prediction: the differential is positively correlated with both retail demand and arbitrage constraints.

The identification strategy for H3 exploits the three rounds of COVID-19 Economic Impact Payments (EIPs) distributed in April/May 2020, December 2020/January 2021, and March/April 2021. EIPs are exogenous government transfer payments that increase household cash and retail participation in ETF markets (Divakaruni and Zimmerman (2024)), creating plausibly exogenous variation in retail demand.

## Method

The core methodological contribution is the decomposition of ETF close-to-close returns into overnight and intraday components using average NBBO mid-quotes from the first and last 5-minute intervals of the trading day to minimize microstructure noise (bid-ask bounce, as in Berkman et al. (2012)).

**Return construction (pp. 4-5).** For ETF $i$ on day $t$, letting $$P^{i}_{\text{close},t}$$ be the average NBBO mid-quote during the last five minutes and $$P^{i}_{\text{open},t}$$ the average mid-quote during the first five minutes, the daily intraday return (equation 1) is:

$$
r^{i}_{\text{intraday},t} = \frac{P^{i}_{\text{close},t}}{P^{i}_{\text{open},t}} - 1 \tag{1}
$$

The daily close-to-close return adjusting for dividends $$\text{Div}^i_t$$ and cumulative factors $$\text{CFACPR}^i_t$$ (equation 2) is:

$$
r^{i}_{\text{close-to-close},t} = \frac{P^{i}_{\text{close},t}/\text{CFACPR}^{i}_t + \text{Div}^{i}_t/\text{CFACPR}^{i}_t}{P^{i}_{\text{close},t-1}/\text{CFACPR}^{i}_{t-1}} - 1 \tag{2}
$$

The daily overnight return (equation 3) is:

$$
r^{i}_{\text{overnight},t} = \frac{1 + r^{i}_{\text{close-to-close},t}}{1 + r^{i}_{\text{intraday},t}} - 1 \tag{3}
$$

Monthly returns are standardized to 21 trading days to make observations comparable across months with different trading-day counts (equations 4 and 5):

$$
r^{i}_{\text{intraday},m} = \left[\prod_{t \in m}(1 + r^{i}_{\text{intraday},t})\right]^{21/n} - 1 \tag{4}
$$

$$
r^{i}_{\text{overnight},m} = \left[\prod_{t \in m}(1 + r^{i}_{\text{overnight},t})\right]^{21/n} - 1 \tag{5}
$$

where $$n$$ is the number of trading days in month $$m$$. Equal-weighted portfolio overnight-intraday return difference (equation 9, denoted $$\text{NDdiff}$$) is:

$$
r^{p}_{\text{NDdiff},m} = r^{p}_{\text{overnight},m} - r^{p}_{\text{intraday},m} = \sum_{i \in p} w^{i}_{m-1} \left(r^{i}_{\text{overnight},m} - r^{i}_{\text{intraday},m}\right) \tag{9}
$$

**Retail demand proxy.** Three proxies are constructed: (i) the maximum daily close-to-close return over the past month (MAX), capturing lottery-seeking behavior; (ii) retail investor ownership (the proportion of ETF shares held by retail investors, estimated as total shares minus institutional 13F holdings, then standardized); and (iii) net fund flow from retail investors (quarterly change in retail holdings divided by total shares). A composite retail demand index averages ranks across available proxies.

**Arbitrage constraint proxy.** Four proxies are combined: idiosyncratic volatility (standard deviation of CAPM residuals over 12 months), bid-ask spread (average closing bid-ask spread), Amihud illiquidity ratio, and AP concentration (inverse of number of authorized participants). A composite arbitrage constraint index averages ranks across available proxies.

**Retail order imbalance (equation 10, p. 11).** Using the Boehmer et al. (2021) sub-penny price improvement algorithm to identify retail orders in TAQ:

$$
\text{retail order imbalance}_{it} = \frac{\text{buy volume}_{it} - \text{sell volume}_{it}}{\text{buy volume}_{it} + \text{sell volume}_{it}} \tag{10}
$$

This is computed separately for the first 5 minutes after the open and the last 5 minutes before the close.

## Empirical specifications

**Portfolio sorts (R2-R4).** At the beginning of each month $$t$$, ETFs are sorted into three groups (bottom 30%, middle 40%, top 30%) based on each lagged proxy. Equal-weighted portfolios are held throughout month $$t$$. The reported monthly overnight-intraday return differentials are averaged over the 2004-2021 sample. Standard errors follow Newey and West (1987) with three lags.

**Fama-MacBeth cross-sectional regressions (R5, Table 5).** Each month, the cross-sectional regression:

$$
\text{NDdiff}_{i,t} = \alpha_t + \boldsymbol{\beta}' \mathbf{X}_{i,t-1} + \varepsilon_{i,t} \tag{FM}
$$

is run with $$\mathbf{X}_{i,t-1}$$ including Day Risk, Night Risk (or Day Beta, Night Beta), Retail Ownership, Beta, Log Cap, Turnover, and Momentum. Time-series averages of $$\hat{\beta}_t$$ are reported with Newey-West standard errors (3 lags). Sample: 200,118 monthly observations, January 2004 to December 2021.

**Panel regression with benchmark-time fixed effects (R5 robustness, Table 7).** To control for underlying asset fundamentals and test H3 jointly:

$$
\text{NDdiff}_{i,t} = \alpha + \beta_1 \text{Retail\_demand}_{i,t-1} + \beta_2 \text{Arbi\_constraint}_{i,t-1} + \boldsymbol{\gamma}' \mathbf{Z}_{i,t-1} + \mu_{j \times t} + \varepsilon_{i,t} \tag{PR}
$$

where $$\mu_{j \times t}$$ is a benchmark $$j$$ by time $$t$$ fixed effect (one cell per benchmark-month pair), $$\mathbf{Z}_{i,t-1}$$ includes Beta, Log Cap, Turnover, and Momentum. Standard errors are clustered at the benchmark level. Sample: 42,700 monthly observations, ETFs with at least two peers sharing the same benchmark.

**EIP causal identification regression (R6, Table 8).** Restricting to January 2020 to December 2021 and comparing EIP months to non-EIP months in the same pandemic window:

$$
\text{NDdiff}_{i,t} = \alpha + \beta_1 \text{Retail\_demand}_{i,t-1} + \beta_2 \text{EIP}_t + \beta_3 (\text{Retail\_demand}_{i,t-1} \times \text{EIP}_t) + \beta_4 \text{Arbi\_constraint}_{i,t-1} + \boldsymbol{\gamma}' \mathbf{Z}_{i,t-1} + \varepsilon_{i,t} \tag{EIP}
$$

where $$\text{EIP}_t = 1$$ for months in which US households receive EIP payments (April and May 2020, December 2020 and January 2021, March and April 2021). Standard errors are clustered at the fund level. N = 45,492.

**Retail order imbalance regression (R7, Table 9).** Daily regressions of the overnight-intraday return difference on retail order imbalances near the open and close, with fund and benchmark-time fixed effects, sample January 2010 to December 2021 (excluding 2016-2018). The positive and significant coefficient on open-market imbalance and the insignificant coefficient on close-market imbalance confirm that the retail demand channel operates through open-price inflation, not close-price deflation.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP Mutual Fund (CRSPMF) database | ETF identifier, fund metadata, NAV, total net assets, quarterly holdings, inception date, investment style codes | [CRSP Mutual Funds](/wiki/commercial/crsp-mutual-funds/) |
| CRSP Daily Stock (CRSPSTOCK) | Daily open, high, low, close prices; trading volume; shares outstanding; return adjustment factors | [WRDS](/wiki/commercial/wrds/) |
| TAQ database | NBBO mid-quotes (5-minute intervals at open and close); retail investor order imbalances via Boehmer et al. (2021) algorithm | [TAQ](/wiki/commercial/taq/) |
| Morningstar | ETF benchmark identifiers, authorized participant (AP) lists, benchmark-level performance | [Morningstar](/wiki/commercial/morningstar/) |
| Thomson Reuters s34 filings | Quarterly institutional holding shares; used to construct retail investor ownership as total minus institutional | [Thomson Reuters 13F](/wiki/commercial/thomson-13f/) |

Sample: 2,916 unique US ETFs, January 2004 to December 2021 (217 months). Final sample covers approximately 98% of net assets invested in the US ETF market at end-2021. TAQ analysis restricted to January 2010 to December 2021 (excluding 2016-2018); benchmark panel restricted to ETFs followed by at least two ETFs sharing the same benchmark.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2025.107621) if you are: (i) building on the return decomposition methodology (equations 1-9, pp. 4-5) for ETF or fund research; (ii) studying the role of retail investors in ETF pricing or market microstructure; (iii) using the TAQ-based retail order imbalance measure following Boehmer et al. (2021) in an ETF context; (iv) working on the cost of ETF investing (the paper's Online Appendix contains daily-return robustness, value-weighted results, and equity-only subsamples at Tables OA1-OA4); or (v) designing a study that exploits COVID-19 EIPs as an instrument for retail demand shocks.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* vol. 185, article 107621 (2026). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Liu, Xin, Tianyao (Terry) Zhang, and Yaodong Zhang.
> "A hidden cost of ETF investing: Retail demand shocks and limits to arbitrage."
> *Journal of Banking and Finance* 185 (2026): 107621.
> DOI: 10.1016/j.jbankfin.2025.107621. (c) 2026 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
