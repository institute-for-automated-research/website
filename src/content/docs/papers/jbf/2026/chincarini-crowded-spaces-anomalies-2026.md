---
title: "Crowded Spaces and Anomalies: Chincarini, Lazo-Paz & Moneta (2026)"
description: >-
  Distilled: This paper shows that crowded equity positions in well-known stock market
  anomalies earn significantly higher risk-adjusted returns (FF3 monthly alpha of 1.44%
  for the most vs. least crowded stocks) and that crowding is associated with greater
  institutional exposure to crash risk. The anomaly alpha is concentrated among the most crowded stocks
  and persists after publication dates. Journal of Banking and Finance 182 (2026) 107579,
  CC BY-NC-ND 4.0. Thirteen core results with source locators, datasets used, the crowding
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Financial Markets and Investment Strategies", "Corporate Finance and Governance", "Auditing, Earnings Management, Governance"]
  dataAccess: licensed-commercial
  outcome:
    - cross-sectional stock returns for anomaly portfolios
    - crash risk of crowded equity positions (NCSKEW, DUVOL)
    - institutional crowding (Days-ADV)
  outcomeClass: [security-returns]
  license: "CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days 0, start 2025-10-31; corroborated by artifact p. 1 CC BY-NC-ND notice)"
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: "open-access (Elsevier/ScienceDirect via DOI; CC BY-NC-ND 4.0 VOR licence confirmed in Crossref; 2026-06-25)"
  redistribution: extract-only (CC BY-NC-ND 4.0 permits verbatim sharing but not derivative works; PDF not hosted in this batch)
  resultsCount: 13
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [portfolio-sort, fama-macbeth, event-study, panel-regression]
    identification: descriptive
  contributionType: [new-fact]
  mechanisms: [limits-to-arbitrage, liquidity, coordination-risk]
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
    - { ref: R3, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "Non-crowded anomaly portfolio: EW FF3 alpha = 0.009%/month (t=0.18); VW = 0.008%/month (t=0.09); negative alphas under FF5P, FF5A, and FF5AM, with several statistically significant", direction: mixed, vsBenchmark: "non-crowded anomaly portfolio has no positive FF3 alpha, while liquidity-augmented model alphas are negative" }
    - { ref: R4, outcome: cross-sectional stock returns for anomaly portfolios, metric: coefficient, value: "FM regression LADV = 0.546 (t=4.31), col. 1; Long x LADV = 0.287 (t=3.12) and Short x LADV = 0.485 (t=4.86), col. 4; col. 5 baseline interactions = 0.206 (t=3.01) and 0.308 (t=3.83); incremental post-publication interactions = 0.810 (t=1.62) and 0.178 (t=2.92)", direction: positive }
    - { ref: R5, outcome: crash risk of crowded equity positions (NCSKEW, DUVOL), metric: coefficient, value: "Full-sample NCSKEW: LADV = 0.011 (t=3.29); DUVOL: LADV = 0.018 (t=5.13); early subsample coefficients are not significant", direction: positive }
    - { ref: R6, outcome: crash risk of crowded equity positions (NCSKEW, DUVOL), metric: car, value: "Crowded anomaly portfolios declined significantly more than uncrowded during 2007-2009 financial crisis (t=1.97) and COVID-19 crisis (t=2.03)", direction: negative, vsBenchmark: "crowded minus uncrowded long-anomaly CAR over crisis window" }
    - { ref: R7, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "Table 3 FF3 Q5-Q1: ActRatio = 1.26%/month (t=8.44) VW and 1.38%/month (t=11.92) EW; corresponding NI spreads = -0.01 (t=-0.10) VW and 0.09 (t=0.80) EW; PSO spreads = 0.00 (t=0.05) VW and 0.23 (t=2.08) EW", direction: mixed, vsBenchmark: "Days-ADV and ActRatio capture liquidity-linked crowding; NI and PSO do not produce consistent significant spreads" }
    - { ref: R8, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "Table 5 FF3 monthly spread alpha: short-horizon = 0.946% (t=5.48), long-horizon = 0.236% (t=1.79), transient = 1.284% (t=5.13), quasi-indexer = 0.431% (t=2.86), investment advisors = 0.759% (t=4.20)", direction: positive, vsBenchmark: "Stronger for transient and short-horizon institution holdings" }
    - { ref: R9, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "Table 8 double-sort FF3 monthly alpha, full sample: event anomalies = 1.250% (t=10.57), market = 1.550% (t=10.66), valuation = 1.306% (t=10.18), fundamental = 1.408% (t=10.79); post-publication alphas are 1.083%, 1.530%, 1.190%, and 0.982%, respectively", direction: positive, vsBenchmark: "All four McLean-Pontiff anomaly groups remain positive and significant after publication" }
    - { ref: R10, outcome: crash risk of crowded equity positions (NCSKEW, DUVOL), metric: coefficient, value: "Table 10 col. 4 Short x LADV: NCSKEW = 0.008 (t=2.16), DUVOL = 0.005 (t=1.89); col. 5 post-publication x Short x LADV: NCSKEW = 0.004 (t=1.74), DUVOL = 0.006 (t=2.30)", direction: positive, vsBenchmark: "Crowding-crash-risk slope is concentrated in the short anomaly leg, with positive post-publication short-leg interactions" }
    - { ref: R11, outcome: cross-sectional stock returns for anomaly portfolios, metric: correlation, value: "Mean quarterly rank correlation of Days-ADV and Days-to-Cover among short-leg stocks = -0.53; replacing low-Days-ADV short positions with high-DTC positions gives 1.1%/month EW FF3 alpha versus 1.7% when shorting low-Days-ADV stocks", direction: negative, vsBenchmark: "High DTC captures part, but not all, of the low-crowding short-leg alpha" }
    - { ref: R12, outcome: cross-sectional stock returns for anomaly portfolios, metric: alpha, value: "Crowding-portfolio performance does not reverse over the six quarters after portfolio sorting", direction: positive, vsBenchmark: "No short-run reversal, as predicted by a temporary price-impact explanation" }
    - { ref: R13, outcome: institutional crowding (Days-ADV), metric: level, value: "Days-ADV declines in the first half of the sample, then rises from the late 2000s; median Days-ADV for the most crowded stocks increases from approximately 260 days in 2012 to over 300 days by 2020; text identifies 1992:Q4 break, Fig. 2 caption says 1995", direction: mixed, vsBenchmark: "Aggregate crowding trend differs from the increase in Days-ADV among the most crowded stocks" }
  resultType: overturns
  relatesTo:
    - { cite: "Brown, Howard & Lundblad (2021)", doi: '10.1093/rfs/hhab107', relation: extends, note: "extends their positive crowding-return result for hedge funds to all 13F institutional investors across 11 anomalies" }
    - { cite: "Stambaugh, Yu & Yuan (2012)", relation: builds-on, note: "uses their 11 stock market anomalies as the empirical test set and follows their portfolio construction method" }
    - { cite: "Mclean & Pontiff (2016)", doi: '10.1111/jofi.12365', relation: builds-on, note: "applies their in-sample / post-publication split to test whether crowded-stock alpha persists after anomaly discovery" }
    - { cite: "Zhong, Ding & Tay (2017)", doi: '10.3905/jpm.2017.43.4.087', relation: contradicts, note: "their negative crowding-return finding for mutual funds does not generalize to all 13F institutions; this paper finds a consistently positive relationship" }
    - { cite: "Fama & French (1993)", doi: '10.1016/0304-405x(93)90023-5', relation: cites, note: "FF3 model used as primary risk-adjustment benchmark throughout" }
    - { cite: "Hong et al. (2016)", relation: tests, note: "examines whether their Days-to-Cover (DTC) measure explains the short-leg alpha; finds partial but not complete explanation" }
  openQuestions:
    - "Whether the positive price impact of crowded institutional positions is permanent due to demand-system momentum (Koijen and Yogo 2019); left to future research (Section 3.4.3, p. 15)."
    - "How crowding-return and crowding-crash relationships vary at shorter (quarterly) measurement intervals for institutions that trade more frequently (Section 3.4.1, p. 14)."
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-17); six results extracted from PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; three fixes applied: (1) R1 locator corrected (EW numbers from Panel B; Table 4 on p. 9 not p. 8); (2) R4 Long x LADV and Short x LADV corrected (distiller mislabeled the post-1992 LADV coef 0.485/t=4.75 as Long x LADV; correct col-4 values are Long x LADV=0.287/t=3.12 and Short x LADV=0.485/t=4.86); (3) crash-risk regression controls completed (cumulative returns and market-to-book ratio were missing). All equations verified term-by-term. R2, R3, R5, R6 magnitudes confirmed correct." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added missing core findings, structured finding records, mechanisms, and complete formal sections with numbered equations and estimating specifications. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 13 Core rows, equations, specifications, classifications, findings, prose, and frontmatter against the source PDF; corrected crash-risk subsample claims, non-crowded portfolio significance, post-publication interaction interpretation, and causal phrasing; removed an unresolved DOI. Figure 2 caption and text conflict on breakpoint year. Table-locator pass (2026-10-04): R9, Table 8, p. 11 -> Table 8, p. 12." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107579", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days=0, start=2025-10-31" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the crowding measures it constructs, and the
empirical specifications behind the main findings: enough to know what it found and how,
without reading all 17 pages. To replicate or extend it, read the full source at the
[original](https://doi.org/10.1016/j.jbankfin.2025.107579).

## TL;DR

This paper investigates whether crowded equity positions, where many institutional
investors hold the same stocks and may strain the liquidity available for exits, are
associated with higher future returns and greater crash risk. Using Thomson/Refinitiv 13F
institutional holdings from 1980 to 2021, the authors construct a Days-ADV crowding
measure (the days of average daily trading volume needed for all institutions to exit a
position). They find that more crowded anomaly stocks deliver significantly higher
risk-adjusted returns across all 11 anomalies studied by Stambaugh, Yu, and Yuan (2012),
that non-crowded anomaly portfolios have no positive FF3 alpha (and have negative alphas in
some liquidity-augmented models), that the result persists
after the anomaly publication dates identified by Mclean and Pontiff (2016), and that
crowding is associated with greater institutional exposure to stock price crash risk. The paper extends the
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
| R3 | Non-crowded anomaly portfolios have near-zero FF3 alphas and negative alphas in liquidity-augmented models | Table 7, p. 11 | EW non-crowded portfolio FF3 alpha = 0.009%/month (t=0.18); VW = 0.008%/month (t=0.09); FF5P/FF5A/FF5AM alphas are negative, several significantly so |
| R4 | Fama-MacBeth regressions show a positive LADV-return association, stronger in anomaly legs; post-publication interaction evidence is mixed | Table 9, p. 12 | LADV = 0.546 (t=4.31), col. 1; Long x LADV = 0.287 (t=3.12), Short x LADV = 0.485 (t=4.86), col. 4; col. 5 baseline interactions = 0.206 (t=3.01) and 0.308 (t=3.83); incremental post-publication interactions = 0.810 (t=1.62) and 0.178 (t=2.92), respectively |
| R5 | Crowding is positively associated with future stock price crash risk, measured by NCSKEW and DUVOL | Table 10, p. 14 | Full-sample NCSKEW LADV = 0.011 (t=3.29) and DUVOL = 0.018 (t=5.13); post-1992 coefficients are significant, but pre-1993 estimates are not |
| R6 | Crowded anomaly portfolios declined significantly more than uncrowded portfolios during the 2007-2009 and COVID-19 crises | Figure 3, p. 13 | CAR differences statistically significant for financial crisis (t=1.97) and COVID-19 crisis (t=2.03) |
| R7 | Liquidity-linked crowding measures predict spreads, while investor count and ownership share do not do so consistently | Table 3 Panels A-B, p. 8; §2.3.2, p. 5 | ActRatio Q5-Q1 FF3 alpha: 1.26%/month (t=8.44) VW and 1.38%/month (t=11.92) EW; NI spreads: -0.01 (t=-0.10) VW and 0.09 (t=0.80) EW; PSO spreads: 0.00 (t=0.05) VW and 0.23 (t=2.08) EW |
| R8 | Crowding-return spreads are stronger among transient, short-horizon, and investment-advisor holdings | Table 5, p. 9 | FF3 spread alpha: short-horizon 0.946%/month (t=5.48), long-horizon 0.236% (t=1.79), transient 1.284% (t=5.13), quasi-indexer 0.431% (t=2.86), investment advisors 0.759% (t=4.20) |
| R9 | The crowding premium extends across the 97-anomaly sample in four anomaly groups and persists post-publication | Table 8, p. 12 | Full-sample double-sort FF3 alpha: event 1.250%/month (t=10.57), market 1.550% (t=10.66), valuation 1.306% (t=10.18), fundamental 1.408% (t=10.79); post-publication: 1.083%, 1.530%, 1.190%, 0.982%, respectively |
| R10 | The crowding-crash-risk association appears stronger on short anomaly legs, with weaker evidence for some estimates | Table 10, p. 14 | Short x LADV: NCSKEW 0.008 (t=2.16), DUVOL 0.005 (t=1.89); incremental post-publication x Short x LADV: NCSKEW 0.004 (t=1.74), DUVOL 0.006 (t=2.30) |
| R11 | Low Days-ADV on anomaly short legs overlaps with high Days-to-Cover, which explains part of the short-leg return spread | §3.4.2, p. 15; Table A18 Panel A, cited p. 15 | Mean quarterly rank correlation = -0.53; EW FF3 strategy alpha = 1.1%/month using high-DTC shorts versus 1.7%/month using low-Days-ADV shorts |
| R12 | Crowded-portfolio returns do not show the reversal predicted by a temporary price-impact explanation | §3.4.3, p. 15 (authors cite Internet Appendix Table A8) | The performance persists over the next six quarters after portfolio sorting, with no short-run reversal |
| R13 | Days-ADV has a declining aggregate trend early in the sample but rises among the most crowded stocks after the late 2000s | Fig. 2 and accompanying text, p. 7 | Median Days-ADV among most crowded stocks increases from approximately 260 days in 2012 to over 300 days by 2020; accompanying text identifies a common break at 1992:Q4, while the Fig. 2 caption says 1995 |

**Overall (paper's conclusion).** Crowding is positively associated with future abnormal
returns across all 11 stock market anomalies studied, and the anomaly alpha is generated
almost entirely by the most crowded stocks. This result is robust to different factor model
specifications (FF3, FF5, FF5 augmented with liquidity and momentum), persists after
publication dates, and is stronger for transient and short-horizon institutions. Crowding
is also associated with greater institutional exposure to crash risk, consistent with the idea that crowded
positions impose additional risk for which investors require compensation and that crowding
adds a new consideration to limits-to-arbitrage arguments.

## Theory / model

The paper does not specify a formal economic model. It tests whether institutional
crowding predicts future returns and crash exposure. The proposed channel is that common
positions can make investors' exit decisions correlated: limited trading volume can turn a
shared shock into price pressure, and limits to short selling can make correction of
anomaly mispricing costly. The authors predict higher returns on crowded anomaly positions
as compensation for this risk, and higher subsequent crash-risk measures. This descriptive
design does not identify a causal effect.

**Portfolio similarity (equations 1-2, p. 5).** For two institutional portfolios, the
cosine-similarity measure is

$$
s_{ij}=\frac{\mathbf{w}_i'\mathbf{w}_j}{|\mathbf{w}_i||\mathbf{w}_j|} \tag{1}
$$

For a group of M portfolios, the average pairwise similarity excludes each portfolio's
self-similarity:

$$
C=\frac{\sum_{i=1}^{M}\sum_{j=1}^{M}s_{i,j}-M}{M^2-M} \tag{2}
$$

**Stock-level crowding (equations 3-4, p. 5).** Days-ADV scales the total institutional
dollar holdings in a security by its average daily dollar trading volume in the prior
quarter:

$$
\text{Days-ADV}_{i,t}=\frac{\sum_{j=1}^{N}\text{InstHold}_{i,j,t-1}}{\text{ADV}_{i,t-1}} \tag{3}
$$

The alternative Activity Ratio uses shares held by active investors and average share
turnover:

$$
\text{ActRatio}_{i,t}=\frac{\sum_{j=1}^{N}\text{Shares}_{i,t-2}}{\text{AvgTurn}_{i,t-1}} \tag{4}
$$

The paper reports that the two measures correlate at 0.99 (Internet Appendix Table A1,
reported in §2.3.2, p. 6). Number of institutional investors and percentage of shares
outstanding are other proxies, but they do not account for security liquidity.

**Firm-specific returns and crash measures (equations 5-7, pp. 7-8).** Weekly stock returns
are regressed on lead, contemporaneous, and lagged market and industry returns to address
nonsynchronous trading. The resulting residual is transformed as
$$R_{i,t}=\log(1+\epsilon_{i,t})$$. The regression is:

$$
r_{i,t}=\alpha_i+\beta_{1,i}r_{m,t-1}+\beta_{2,i}r_{k,t-1}+\beta_{3,i}r_{m,t}+\beta_{4,i}r_{k,t}+\beta_{5,i}r_{m,t+1}+\beta_{6,i}r_{k,t+1}+\epsilon_{i,t} \tag{5}
$$

Negative conditional skewness is

$$
\text{NCSKEW}_{i,t}=-\frac{n(n-1)^{3/2}\sum R_{i,t}^{3}}{(n-1)(n-2)(\sum R_{i,t}^{2})^{3/2}} \tag{6}
$$

and down-to-up volatility is

$$
\text{DUVOL}_{i,t}=\log\left(\frac{(n_u-1)\sum_{\text{DOWN}}R_{i,t}^{2}}{(n_d-1)\sum_{\text{UP}}R_{i,t}^{2}}\right) \tag{7}
$$

Here n is the number of firm-specific weekly returns, and n_u and n_d count returns above
and below the period mean. Higher values of either measure indicate more crash risk.

**Days-to-Cover (equation 8, p. 15).** To assess short-selling costs, the paper follows
Hong et al. (2016) and defines DTC as the short ratio divided by average daily turnover:

$$
\text{DTC}=\frac{\text{SR}}{\text{Average Daily Turnover}} \tag{8}
$$

The short ratio is monthly short interest divided by shares outstanding. This analysis uses
2003-2021 because Nasdaq short-interest data are available from 2003.

## Method

The empirical method combines quarterly portfolio sorts, factor-adjusted return tests,
Fama-MacBeth cross-sectional regressions, and firm-year crash-risk regressions. Days-ADV
is lagged one quarter because 13F holdings are disclosed with up to a 45-day delay. Stock
and anomaly portfolios are formed from US common shares on NYSE, AMEX, and Nasdaq with
prices above $5, excluding utilities and financial firms. The core window is 1980:Q1 to
2021:Q4; momentum portfolios are rebalanced quarterly. The paper uses a 1992:Q4 break to
compare subsamples. No causal identification design is claimed.

For the main return tests, stocks are sorted into crowding quintiles quarterly. Equal- or
value-weighted portfolio excess returns are regressed on factor returns, and the intercept
is the alpha. The main specification is the Fama-French three-factor regression; the paper
also uses FF5, FF5 plus Pastor-Stambaugh liquidity, FF5 plus Amihud IML, and FF5 plus IML
and momentum. Newey-West standard errors are used for portfolio return alphas. Double
sorts first rank stocks on anomaly characteristics and then select the top 30% of Days-ADV
within long legs and the bottom 30% within short legs. For non-crowded portfolios, the
middle 40% is selected. The 97-anomaly extension groups the signals into event, market,
valuation, and fundamental portfolios.

The FF3 risk-adjustment benchmark follows Fama and French (1993). The Fama-MacBeth design regresses next-quarter cumulative monthly returns on LADV and
controls in each quarter, then averages the cross-sectional estimates over time. Standard
errors use Newey-West with four lags. The crash-risk panel uses one-year-ahead NCSKEW or
DUVOL with firm and year fixed effects and firm-clustered standard errors. Controls include
firm-specific returns and their kurtosis and standard deviation, market-to-book, liabilities
to assets, ROA, size, turnover, analyst coverage, and the lagged dependent variable.

## Empirical specifications

**Factor-adjusted portfolio returns (Section 3.1, Table 3, p. 8).** For portfolio p and
month t, the primary alpha specification is

$$
R^e_{p,t}=\alpha_p+\beta_{1,p}\text{MktRf}_t+\beta_{2,p}\text{SMB}_t+\beta_{3,p}\text{HML}_t+\varepsilon_{p,t}
$$

The dependent variable is the monthly excess return of the quarterly rebalanced portfolio.
The specification has no fixed effects; Newey-West standard errors are reported. The sample
is 1980:Q1-2021:Q4. The expanded factor specifications add the FF5 factors and, in turn,
liquidity and momentum factors. Table 5 and Table 6 use the same factor-alpha approach for
investor-type and anomaly portfolios, respectively.

**Fama-MacBeth return regression (Table 9, p. 12).** Each quarter, the baseline
cross-sectional regression is next-quarter cumulative monthly return on LADV and controls:

$$
r_{i,t+1}=\alpha_t+\beta_{1,t}\text{LADV}_{i,t}+\gamma_t'X_{i,t}+\varepsilon_{i,t+1}
$$

The interaction specification adds long- and short-anomaly membership and their LADV
interactions:

$$
r_{i,t+1}=\alpha_t+\beta_{1,t}\text{LADV}_{i,t}+\beta_{2,t}\text{Long}_{i,t}+\beta_{3,t}(\text{Long}\times\text{LADV})_{i,t}+\beta_{4,t}\text{Short}_{i,t}+\beta_{5,t}(\text{Short}\times\text{LADV})_{i,t}+\gamma_t'X_{i,t}+\varepsilon_{i,t+1}
$$

Here X includes log institutional ownership, log size, age, prior return volatility, book-to-market, dividend yield,
turnover, and cumulative returns over the prior three and nine months. Column 5 adds
post-publication status and its long- and short-leg interactions with LADV. The sample sizes
reported in Table 9 are 294,301 observations for the full sample and 79,352 and 213,299 for
the two 1992-break subsamples. Regressions are quarterly cross-sections, with Newey-West
standard errors using four lags on the time-series averages of coefficients; no fixed effects
are specified.

**Crash-risk panel regression (Table 10, p. 14).** The principal panel specification is

$$
\text{CrashRisk}_{i,t+1}=\alpha+\beta_1\text{LADV}_{i,t}+\gamma'\text{Controls}_{i,t}+\mu_i+\lambda_t+\varepsilon_{i,t+1}
$$

where the outcome is next-year NCSKEW or DUVOL. Extended specifications include Long and
Short dummies, their LADV interactions, post-publication status, and the corresponding
triple interactions. The full sample has 102,940 observations; firm and year fixed effects
are included, standard errors are clustered by firm, and controls are measured over the
prior fiscal year. The paper also reports quarterly-frequency versions in Internet Appendix
Tables A6-A7.

**Crisis event study (Figure 3, p. 13).** For daily portfolio returns risk-adjusted by FF3,
portfolio cumulative abnormal returns are constructed over windows beginning 12 months
before and ending 12 months after each crisis onset:

$$
\text{CAR}_{p,[a,b]}=\sum_{t=a}^{b}(R_{p,t}-\widehat{R}^{\text{FF3}}_{p,t})
$$

The analysis covers November 2006-February 2010 and March 2019-February 2021, with
value-weighted portfolios under both buy-and-hold and quarterly rebalancing. The figure
reports t-statistics for crowded versus uncrowded anomaly portfolios; it is an event-window
comparison rather than a causal event-study design.

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
