---
title: "Crowded Spaces and Anomalies: Chincarini, Lazo-Paz & Moneta (2026)"
description: >-
  Distilled: This paper shows that crowded equity positions in well-known stock market
  anomalies earn significantly higher risk-adjusted returns (FF3 monthly alpha of 1.44%
  for the most vs. least crowded stocks) and that crowding increases institutional
  exposure to crash risk. The anomaly alpha is concentrated among the most crowded stocks
  and persists after publication dates. Journal of Banking and Finance 182 (2026) 107579,
  CC BY-NC-ND 4.0. Six core results with source locators, datasets used, the crowding
  measures, and the empirical specifications.
sidebar:
  label: Chincarini-Lazo-Paz-Moneta 2026
  order: 1
tags: [paper-summary, asset-pricing, anomalies, factors, cross-section, crowding,
       institutional-investors, limits-to-arbitrage, portfolio-sort, fama-macbeth,
       open-access, peer-reviewed, unreplicated, data:wrds, data:ken-french]
paper:
  authors: Ludwig B. Chincarini, Renato Lazo-Paz, Fabio Moneta
  authorList:
    - { family: Chincarini, given: Ludwig B., affiliation: University of San Francisco }
    - { family: Lazo-Paz, given: Renato, orcid: "0000-0002-4113-9653", affiliation: University of Ottawa }
    - { family: Moneta, given: Fabio, orcid: "0000-0001-6497-7900", affiliation: University of Ottawa }
  year: 2026
  venue: Journal of Banking and Finance 182 (2026) 107579
  venueShort: J. Banking Finance 2026
  tier: field
  doi: 10.1016/j.jbankfin.2025.107579
  jel:
    codes: [G11, G12, G23]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Financial Markets and Investment Strategies", "Corporate Finance and Governance", "Auditing, Earnings Management, Governance"]
  dataAccess: licensed-commercial
  outcome:
    - cross-sectional stock returns for anomaly portfolios
    - crash risk of crowded equity positions (NCSKEW, DUVOL)
  outcomeClass: [security-returns]
  license: "CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days 0, start 2025-10-31; corroborated by artifact p. 1 CC BY-NC-ND notice)"
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: "open-access (Elsevier/ScienceDirect via DOI; CC BY-NC-ND 4.0 VOR licence confirmed in Crossref; 2026-06-25)"
  redistribution: extract-only (CC BY-NC-ND 4.0 permits verbatim sharing but not derivative works; PDF not hosted in this batch)
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [portfolio-sort, fama-macbeth, event-study, panel-regression]
    identification: descriptive
  contributionType: [new-fact, measurement]
  mechanisms: [limits-to-arbitrage, liquidity]
  scope:
    region: US
    assetClass: US equities
    period: 1980-01..2021-12
    frequency: monthly
    dataType: [market, accounting]
    granularity: [security, firm]
    n: "US common stocks on NYSE, AMEX, Nasdaq with price > $5, excl. utilities and financials; 13F panel 1980:Q1-2021:Q4"
  findings:
    - { ref: R1, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "VW Q5-Q1 Days-ADV spread: FF3 alpha = 1.44%/month (t=9.67); Q5 = 0.54% (t=8.87); Q1 = -0.90% (t=-7.86); EW spread = 1.57%/month (t=12.23)", direction: positive, vsBenchmark: "most-crowded earns 1.44pp/month more than least-crowded after FF3 adjustment" }
    - { ref: R2, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "EW aggregate double-sort across 11 anomalies: FF3 alpha = 1.69%/month (t=11.09) full sample; 1.96%/month in-sample; 1.61%/month post-publication (t=7.67)", direction: positive, vsBenchmark: "double-sort alpha roughly 1.3pp/month above single-sort alpha of 0.39%/month (t=4.42)" }
    - { ref: R3, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "Non-crowded anomaly portfolio: EW FF3 alpha = 0.009%/month (t=0.18); VW = 0.008%/month (t=0.09); near-zero across all factor models and periods", direction: none, vsBenchmark: "anomaly alpha is absent among non-crowded stocks; crowded stocks account for all the anomaly premium" }
    - { ref: R4, outcome: cross-sectional stock returns for anomaly portfolios, metric: coefficient, value: "FM regression LADV coef = 0.546 (t=4.31) full sample (col 1); Long x LADV = 0.287 (t=3.12), Short x LADV = 0.485 (t=4.86) full sample with interactions (col 4); post-pub spec (col 5): Long x LADV = 0.206 (t=3.01), Short x LADV = 0.308 (t=3.83)", direction: positive }
    - { ref: R5, outcome: crash risk of crowded equity positions (NCSKEW, DUVOL), metric: coefficient, value: "NCSKEW: LADV coef = 0.011 (t=3.29) full sample; DUVOL: LADV coef = 0.018 (t=5.13) full sample; both robust to subperiods and anomaly interactions", direction: positive }
    - { ref: R6, outcome: crash risk of crowded equity positions (NCSKEW, DUVOL), metric: car, value: "Crowded anomaly portfolios declined significantly more than uncrowded during 2007-2009 financial crisis (t=1.97) and COVID-19 crisis (t=2.03)", direction: negative, vsBenchmark: "crowded minus uncrowded long-anomaly CAR over crisis window" }
  resultType: new-finding
  relatesTo:
    - { cite: "Brown, Howard & Lundblad (2021)", relation: extends, note: "extends their positive crowding-return result for hedge funds to all 13F institutional investors across 11 anomalies" }
    - { cite: "Stambaugh, Yu & Yuan (2012)", relation: builds-on, note: "uses their 11 stock market anomalies as the empirical test set and follows their portfolio construction method" }
    - { cite: "Mclean & Pontiff (2016)", relation: builds-on, note: "applies their in-sample / post-publication split to test whether crowded-stock alpha persists after anomaly discovery" }
    - { cite: "Zhong, Ding & Tay (2017)", relation: contradicts, note: "their negative crowding-return finding for mutual funds does not generalize to all 13F institutions; this paper finds a consistently positive relationship" }
    - { cite: "Fama & French (1993)", relation: cites, note: "FF3 model used as primary risk-adjustment benchmark throughout" }
    - { cite: "Hong et al. (2016)", relation: tests, note: "examines whether their Days-to-Cover (DTC) measure explains the short-leg alpha; finds partial but not complete explanation" }
  openQuestions:
    - "Whether the positive price impact of crowded institutional positions is permanent due to demand-system momentum (Koijen and Yogo 2019); left to future research (Section 3.4.3, p. 15)."
    - "How crowding-return and crowding-crash relationships vary at shorter (quarterly) measurement intervals for institutions that trade more frequently (Section 3.4.1, p. 14)."
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-17); six results extracted from PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; three fixes applied: (1) R1 locator corrected (EW numbers from Panel B; Table 4 on p. 9 not p. 8); (2) R4 Long x LADV and Short x LADV corrected (distiller mislabeled the post-1992 LADV coef 0.485/t=4.75 as Long x LADV; correct col-4 values are Long x LADV=0.287/t=3.12 and Short x LADV=0.485/t=4.86); (3) crash-risk regression controls completed (cumulative returns and market-to-book ratio were missing). All equations verified term-by-term. R2, R3, R5, R6 magnitudes confirmed correct." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107579", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days=0, start=2025-10-31" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the crowding measures it constructs, and the
empirical specifications behind the main findings: enough to know what it found and how,
without reading all 17 pages. To replicate or extend it, read the full source at the
[original](https://doi.org/10.1016/j.jbankfin.2025.107579).

## TL;DR

This paper investigates whether crowded equity positions, those in which many institutional
investors hold the same stocks and thereby exhaust the liquidity for normal exits, are
associated with higher future returns and greater crash risk. Using Thomson/Refinitiv 13F
institutional holdings from 1980 to 2021, the authors construct a Days-ADV crowding
measure (the days of average daily trading volume needed for all institutions to exit a
position). They find that more crowded anomaly stocks deliver significantly higher
risk-adjusted returns across all 11 anomalies studied by Stambaugh, Yu, and Yuan (2012),
that the anomaly alpha is entirely absent among non-crowded stocks, that the result persists
after the anomaly publication dates identified by Mclean and Pontiff (2016), and that
crowding increases institutional exposure to stock price crash risk. The paper extends the
hedge-fund crowding-return result of Brown, Howard, and Lundblad (2021) to all 13F
institutions and contradicts the mutual-fund finding of Zhong, Ding, and Tay (2017), and
frames crowding as an additional channel within limits-to-arbitrage theory.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into
the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Most-crowded (Q5) stocks earn higher FF3 alphas than least-crowded (Q1); the VW spread is 1.44%/month | Table 3 Panels A-B, p. 8; Table 4, p. 9 | VW Q5: FF3 alpha = 0.54%/month (t=8.87); Q1: -0.90%/month (t=-7.86); Q5-Q1 spread: 1.44%/month (t=9.67); EW spread: 1.57%/month (t=12.23) |
| R2 | Bivariate double-sort aggregate anomaly portfolio (long crowded long-leg, short least-crowded short-leg) earns large EW alpha | Table 6 Panel B, p. 10-11 | EW FF3 alpha = 1.69%/month (t=11.09) full sample; 1.96%/month in-sample; 1.61%/month post-publication (t=7.67) |
| R3 | Non-crowded anomaly stocks earn near-zero or insignificant alphas across all factor models and periods | Table 7, p. 11 | EW non-crowded portfolio FF3 alpha = 0.009%/month (t=0.18); VW = 0.008%/month (t=0.09); near zero across FF3, FF5P, FF5A, FF5AM |
| R4 | Fama-MacBeth cross-sectional regressions confirm positive LADV-return association; stronger among anomaly stocks and post-publication | Table 9, p. 12 | LADV coef = 0.546 (t=4.31) full sample (col 1); Long x LADV = 0.287 (t=3.12) full sample with interactions (col 4); Short x LADV = 0.485 (t=4.86) (col 4); post-pub spec (col 5): Long x LADV = 0.206 (t=3.01), Short x LADV = 0.308 (t=3.83) |
| R5 | Crowding positively predicts future stock price crash risk, measured by NCSKEW and DUVOL | Table 10, p. 14 | NCSKEW: LADV coef = 0.011 (t=3.29) full sample; DUVOL: LADV coef = 0.018 (t=5.13) full sample; robust to both subperiods |
| R6 | Crowded anomaly portfolios declined significantly more than uncrowded portfolios during the 2007-2009 and COVID-19 crises | Figure 3, p. 13 | CAR differences statistically significant for financial crisis (t=1.97) and COVID-19 crisis (t=2.03) |

**Overall (paper's conclusion).** Crowding is positively associated with future abnormal
returns across all 11 stock market anomalies studied, and the anomaly alpha is generated
almost entirely by the most crowded stocks. This result is robust to different factor model
specifications (FF3, FF5, FF5 augmented with liquidity and momentum), persists after
publication dates, and is stronger for transient and short-horizon institutions. Crowding
also increases institutional exposure to crash risk, consistent with the idea that crowded
positions impose additional risk for which investors require compensation and that crowding
adds a new consideration to limits-to-arbitrage arguments.

## Theory / model

The paper has no formal economic model. It tests two empirical hypotheses derived from
limits-to-arbitrage theory.

**Hypothesis 1 (returns).** Crowded equity positions impose additional risks on investors,
because correlated exit decisions can cause large price declines (coordination risk) and
because the presence of many similarly positioned investors makes liquidity scarce when all
try to exit simultaneously. Following the limits-to-arbitrage literature (Shleifer and
Vishny (1997); De Long et al. (1990); Lam et al. (2011)), arbitrageurs must be compensated
for this extra risk, so the long (short) leg of anomalies should earn positive (negative)
abnormal returns specifically among the most crowded stocks.

**Hypothesis 2 (crash risk).** When too many institutional investors hold the same stock
they create exposure to a correlated crash: if information or margin calls trigger
simultaneous exit decisions, prices decline sharply. This is captured by the negative
conditional skewness (NCSKEW) and down-to-up volatility (DUVOL) of firm-specific weekly
returns, following Hutton et al. (2009) and Callen and Fang (2015).

**Identification.** The paper makes no causal claim. The empirical work is descriptive and
correlational: it documents a positive association between lagged Days-ADV (institutional
crowding) and subsequent returns or crash risk. Fama-MacBeth regressions control for known
determinants of institutional demand (size, book-to-market, turnover, cumulative return), but
there is no instrument, discontinuity, or difference-in-differences design.

## Method

**Days-ADV crowding measure (equation 3, p. 5).** The main crowding proxy is the total
dollar value of institutional holdings in a stock relative to its average daily dollar
trading volume over the same quarter:

$$
\text{Days-ADV}_{i,t} = \frac{\sum_{j=1}^{N} \text{InstHold}_{i,j,t-1}}{\text{ADV}_{i,t-1}} \tag{3}
$$

where $$\text{InstHold}_{i,j,t-1}$$ is the total dollar value invested in security $$i$$ by
institutional investor $$j$$ in quarter $$t-1$$, and $$\text{ADV}_{i,t-1}$$ is the average
daily dollar trading volume of security $$i$$ over quarter $$t-1$$. Higher Days-ADV means
institutions would need more trading days to fully unwind the position at normal volume.
The paper uses the log of Days-ADV (LADV) in regressions to reduce the influence of
outliers. A complementary portfolio-level similarity measure based on cosine similarity
between institutional portfolio weight vectors is also constructed (equations 1-2, p. 5),
but Days-ADV is the primary measure throughout because it directly links ownership
magnitude to the liquidity of the individual security.

**Activity Ratio crowding measure (equation 4, p. 5).** As an alternative, the Activity
Ratio (ActRatio) of Zhong et al. (2017) is used as a cross-check:

$$
\text{ActRatio}_{i,t} = \frac{\sum_{j=1}^{N} \text{Shares}_{i,t-2}}{\text{AvgTurn}_{i,t-1}} \tag{4}
$$

where the numerator is the percentage of shares held by active investors at $$t-2$$ and the
denominator is the average share turnover of stock $$i$$ at $$t-1$$. The correlation between
Days-ADV and ActRatio is 0.99, confirming they proxy the same construct.

**Crash risk metrics (equations 5-7, p. 7-8).** Firm-specific residual returns $$R_{i,t}$$
are first obtained by stripping market and industry effects from weekly returns via a
market-model regression that includes lead and lag terms (equation 5, p. 7). Negative
conditional skewness (NCSKEW) is then:

$$
\text{NCSKEW}_{i,t} = -\frac{n(n-1)^{3/2} \sum R_{i,t}^3}{(n-1)(n-2)\left(\sum R_{i,t}^2\right)^{3/2}} \tag{6}
$$

Down-to-up volatility (DUVOL) is:

$$
\text{DUVOL}_{i,t} = \log\left(\frac{(n_u - 1)\sum_{\text{DOWN}} R_{i,t}^2}{(n_d - 1)\sum_{\text{UP}} R_{i,t}^2}\right) \tag{7}
$$

where $$n_u$$ ($$n_d$$) is the count of up (down) weeks in the year and DOWN (UP) is the
subsample of weeks with returns below (above) the mean. Higher values of both measures
indicate greater crash risk.

**Days-to-Cover (DTC, equation 8, p. 15).** To test the short-leg alpha against a
competing explanation (Hong et al. (2016)), DTC is computed as:

$$
DTC = \frac{SR}{\text{Average Daily Turnover}} \tag{8}
$$

where $$SR$$ is the short ratio (short interest divided by shares outstanding). DTC
approximates the number of days required for all short sellers to cover at normal trading
volume, capturing marginal-cost crowding for short positions.

## Empirical specifications

**Portfolio sorts (Section 3.1, p. 8).** Each calendar quarter, stocks are ranked into
quintiles by each crowding measure (Days-ADV, ActRatio, NI, PSO). Value- and equal-weighted
quintile portfolio returns are computed for the following quarter and the time-series alpha
is estimated via:

$$
R^e_{p,t} = \alpha_p + \beta_1 \text{MktRf}_t + \beta_2 \text{SMB}_t + \beta_3 \text{HML}_t + \varepsilon_{p,t}
$$

with variants that also include the Fama and French (1993) five-factor model (FF5), the
Pastor and Stambaugh (2003) traded liquidity factor (FF5P), the Amihud (2019)
illiquid-minus-liquid factor (FF5A), and further the Carhart (1997) momentum factor (FF5AM).
Newey-West standard errors are used throughout.

For the bivariate anomaly analysis (Section 3.2, p. 10), stocks are sorted first on the
anomaly variable into quintiles and then within the long (short) leg the top (bottom) 30%
by Days-ADV are selected. The aggregate portfolio across anomalies takes an equally weighted
average of the resulting anomaly-specific portfolio returns each month. Non-crowded sorted
portfolios use the middle 40% of Days-ADV within each anomaly leg (Table 7).

**Fama-MacBeth regressions (Section 3.3, p. 12).** Each quarter, cumulative monthly
returns over the following quarter are regressed cross-sectionally on LADV and a vector of
controls $$X_{i,t}$$ (log size, age, return standard deviation, book-to-market, dividend
yield, average monthly turnover, and cumulative returns over the past three and nine months).
To test whether the anomaly channel amplifies the crowding-return link, indicator dummies
for long-leg and short-leg anomaly membership and their interactions with LADV are added:

$$
r_{i,t+1} = \alpha + \beta_1 \text{LADV}_{i,t} + \beta_2 \text{Long}_{i,t} + \beta_3 (\text{Long} \times \text{LADV})_{i,t} + \beta_4 \text{Short}_{i,t} + \beta_5 (\text{Short} \times \text{LADV})_{i,t} + \gamma' X_{i,t} + \varepsilon_{i,t}
$$

The time-series average of quarterly cross-sectional coefficients gives the estimates.
Standard errors are Newey-West with four lags.

**Crash risk panel regression (Section 3.4.1, Table 10, p. 14).** One-year-ahead crash risk
is regressed on log Days-ADV and controls, with firm and year fixed effects. Standard
errors are clustered by firm:

$$
\text{CrashRisk}_{i,t+1} = \alpha + \beta \, \text{LADV}_{i,t} + \gamma' \text{Controls}_{i,t} + \text{FirmFE} + \text{YearFE} + \varepsilon_{i,t}
$$

Controls include cumulative firm-specific daily returns, kurtosis and standard deviation of firm-specific daily returns, market-to-book ratio, book value of liabilities to total assets, ROA, log market cap, average monthly share turnover, number of analysts, and the lag of the crash risk variable. Anomaly-leg dummies and post-publication
indicators are interacted with LADV in extended specifications.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Thomson/Refinitiv (TR) 13F institutional holdings | Primary crowding measure (Days-ADV, cosine similarity); institution-type classification into transient, dedicated, quasi-indexer, hedge fund, mutual fund | [WRDS](/wiki/commercial/wrds/) (licensed) |
| CRSP monthly stock data | Stock returns, prices, trading volume, shares outstanding; anomaly variable construction | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Compustat annual fundamentals | Accounting-based anomaly variables (accruals, NOA, asset growth, profitability, etc.) and short interest data (2003-2021) | [WRDS](/wiki/commercial/wrds/) (licensed) |
| I/B/E/S analyst data | Number of analysts following each stock (control variable in FM regressions) | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Kenneth French Data Library | FF3, FF5, and momentum factor returns for risk adjustment | [Ken French library](/wiki/datasets/ken-french/) |
| Brian Bushee institution classification | Transient, dedicated, quasi-indexer institution type labels | no page yet |

Sample: US common stocks on NYSE, AMEX, and Nasdaq with price above $5, excluding utilities
and financial firms. Main sample: 1980:Q1 to 2021:Q4 (quarterly rebalancing). Exception:
momentum anomaly portfolios are rebalanced quarterly (not annually). DTC analysis restricted
to 2003-2021, when Nasdaq short interest data becomes available.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jbankfin.2025.107579) if you are:
investigating the relationship between institutional crowding and anomaly returns (Table 6
provides anomaly-by-anomaly bivariate-sort alphas for all 11 anomalies across five factor
models); studying crash risk as a channel linking institutional crowding to limits-to-
arbitrage; extending the results to the 97 anomalies of Mclean and Pontiff (2016) (Table 8
and the Internet Appendix); or assessing whether the DTC measure of Hong et al. (2016)
accounts for the short-leg alpha in crowded spaces.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 182 (2026) 107579. This distillation
was extracted by an LLM on 2026-06-25 and is **not human-verified or independently
reproduced**. The CC BY-NC-ND 4.0 licence permits verbatim sharing but not derivative works;
the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY-NC-ND 4.0).** Chincarini, Ludwig B., Renato Lazo-Paz, and Fabio Moneta.
> "Crowded spaces and anomalies." *Journal of Banking and Finance* 182 (2026) 107579.
> DOI: 10.1016/j.jbankfin.2025.107579. © 2025 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
> This page is a distillation by the Institute for Automated Research:
> core results extracted and re-expressed as structured text. The licence does not permit
> derivative works; this page constitutes extract-only fair use documentation.
