---
title: "Salience Theory and Corporate Bond Returns: Chen, Wang, Wei, Wu & Zhang (2026)"
description: >-
  Distilled: U.S. corporate bonds with high salience theory (ST) values underperform those
  with low ST values by 0.61% per month in decile sorts (annualized Sharpe ratio 2.52,
  more than double the comparable equity figure). The premium is primarily driven by the
  outperformance of bonds with salient downside rather than the underperformance of those
  with salient upside, reflecting the asymmetric payoff structure of corporate bonds.
  Journal of Empirical Finance 2026, paywalled. Seven core results with source locators,
  datasets used, the BGS salience model, and the estimation and testing methods.
sidebar:
  label: Chen-Wang-Wei-Wu-Zhang 2026
  order: 1
tags: [paper-summary, asset-pricing, cross-section, behavioral-finance, corporate-bonds,
       fixed-income, portfolio-sort, fama-macbeth, peer-reviewed, unreplicated,
       data:trace, data:wrds, data:ken-french, data:mergent-fisd, data:emaxx]
paper:
  authors: Xi Chen, Junbo Wang, K.C.John Wei, Chunchi Wu, Linti Zhang
  authorList:
    - { family: Chen, given: Xi, affiliation: "Bay Area International Business School, Beijing Normal University" }
    - { family: Wang, given: Junbo, orcid: "0000-0002-8630-7550", affiliation: City University of Hong Kong }
    - { family: Wei, given: K.C.John, affiliation: Hong Kong Polytechnic University }
    - { family: Wu, given: Chunchi, affiliation: "State University of New York at Buffalo" }
    - { family: Zhang, given: Linti, affiliation: Hong Kong Polytechnic University }
  year: 2026
  venue: Journal of Empirical Finance 87 (2026) 101692
  venueShort: J. Empir. Finance 2026
  doi: 10.1016/j.jempfin.2026.101692
  tier: lower
  jel:
    codes: [G12, G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Corporate Finance and Governance', 'Auditing, Earnings Management, Governance']
  dataAccess: licensed-commercial
  outcome:
    - cross-sectional corporate bond returns
    - monthly excess returns on ST-sorted bond portfolios
  outcomeClass: [security-returns]
  license: "paywalled (Elsevier subscription; Crossref DOI metadata shows TDM-only licenses, no open-access or CC license)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; Crossref license metadata shows TDM-only, no VOR open-access license, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 1
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [portfolio-sort, fama-macbeth]
    identification: descriptive
  contributionType: [new-fact, measurement]
  mechanisms: [behavioral-bias, limits-to-arbitrage]
  scope:
    region: US
    assetClass: US corporate bonds
    period: 2002-07..2021-06
    frequency: monthly
    dataType: [market, accounting]
    granularity: [security]
    n: "438,724 bond-month observations for 15,383 bonds, July 2002 to June 2021"
  findings:
    - { ref: R1, outcome: cross-sectional corporate bond returns, metric: return-spread, value: "-0.48%/month (5-1 quintile ST spread, t=-10.30); FF5 alpha -0.44% (t=-7.01); FFL6 alpha -0.44% (t=-7.22)", direction: negative, vsBenchmark: "FFL6 alpha nearly as large as raw spread; characteristic-adjusted spread -0.45% (t=-10.28)" }
    - { ref: R2, outcome: cross-sectional corporate bond returns, metric: return-spread, value: "-0.61%/month (10-1 decile ST spread, t=-10.96); annualized Sharpe ratio 2.52 vs 0.89 for stocks over same July 2002-June 2021 period (stock 10-1 = -0.78%, t=-3.74)", direction: negative, vsBenchmark: "2.82x the Sharpe ratio of the comparable equity strategy" }
    - { ref: R3, outcome: cross-sectional corporate bond returns, metric: return-spread, value: "bond salient-downside outperformance 0.50%/month (portfolio 1 minus 5); bond salient-upside underperformance only 0.08%/month (portfolio 6 minus 10); asymmetry t=2.90", direction: negative }
    - { ref: R4, outcome: cross-sectional corporate bond returns, metric: coefficient, value: "-0.14 (t=-10.46) univariate FM; -0.07 (t=-7.36) with ILLIQ, STR, MAX, MIN, MOM, LTR, COSKEW, SKEW, IVOL, ISKEW, and bond characteristics", direction: negative }
    - { ref: R5, outcome: cross-sectional corporate bond returns, metric: return-spread, value: "-0.19%/week (5-1 quintile spread at weekly frequency, t=-10.61); FFL6 alpha -0.19%/week (t=-9.35)", direction: negative }
    - { ref: R6, outcome: cross-sectional corporate bond returns, metric: return-spread, value: "junk 5-1 spread -0.48%/month (t=-6.89) vs AAA/AA -0.23%/month (t=-4.53); long-maturity spread -0.47%/month (t=-10.79) vs short-maturity -0.22%/month (t=-5.81)", direction: negative, vsBenchmark: "junk premium ~2x AAA/AA; long-maturity ~2x short-maturity" }
    - { ref: R7, outcome: cross-sectional corporate bond returns, metric: return-spread, value: "all five LTA Diff portfolios significant at 1%; IVOL Diff = -0.48% (t=-9.10); TVOL Diff = -0.43% (t=-9.10); ILLIQ Diff = -0.37% (t=-4.62)", direction: negative, vsBenchmark: "salience premium monotonically larger with all five limits-to-arbitrage proxies" }
  resultType: new-finding
  relatesTo:
    - { cite: "Bordalo, Gennaioli & Shleifer (2012)", relation: builds-on, note: "foundational BGS salience function and distorted-probability framework" }
    - { cite: "Bordalo, Gennaioli & Shleifer (2013)", relation: builds-on, note: "BGS asset pricing implication: E(R) = -cov(omega, R) = -ST" }
    - { cite: "Cosemans & Frehen (2021)", relation: extends, note: "extends their stock-market ST estimation method to corporate bonds; finds an asymmetric pattern absent in equity markets" }
    - { cite: "Fama & French (1993)", relation: cites, note: "FF5 factor model used as a risk benchmark for alpha tests" }
    - { cite: "Lin et al. (2011)", relation: builds-on, note: "corporate bond liquidity factor (LIQ) that forms the sixth factor in the FFL6 benchmark" }
    - { cite: "Bali, Cakici & Whitelaw (2011)", relation: cites, note: "MAX (maximum daily return) used as a lottery-preference control; the MAX effect on bonds differs from stocks" }
  openQuestions:
    - "Whether other psychological biases beyond salience can help explain the remaining anomalies in the corporate bond market (yield puzzle, high-yield momentum) that rational models cannot reconcile (conclusion, p.23; footnote 40)."
    - "How the salience premium interacts with different institutional investor mandates across bond market segments, and whether improving market transparency reduces the bias among institutional investors (conclusion, p.23)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-24 plus all tables); seven results extracted from the source PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; five fixes applied: (1) R2 stock same-period comparison corrected from -1.22%/SR=1.34 (1931-2015 row) to -0.78%/SR=0.89 (July 2002-June 2021 row per PDF p.9); (2) R4 full-controls t-stat corrected from -7.63 (partial-controls row 3 of Table 5) to -7.36 (last row, Adj-R2=0.313); (3) R5 FFL6 alpha t-stat corrected from -12.45 (AdjRet Alpha FFL6) to -9.35 (Return Alpha FFL6, consistent with R1 treatment); (4) JEL G41 removed (PDF shows only G12, G14); (5) Eq. 3 notation corrected from tilde to overbar for distorted-probability symbol as in PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jempfin.2026.101692", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains only TDM and stm-asf entries (Elsevier subscription); no CC or open-access VOR license present; content-version tdm URLs point to elsevier.com/tdm/userlicense/1.0 and elsevier.com/legal/tdmrep-license, start 2026-06-01" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the salience model it adapts from Bordalo, Gennaioli, and Shleifer (2012, 2013), and the estimation and testing methods with the defining equations: enough to know what it found and how, without reading all 24 pages. To replicate or extend it, read the original at [doi.org/10.1016/j.jempfin.2026.101692](https://doi.org/10.1016/j.jempfin.2026.101692).

## TL;DR

This paper applies salience theory to the U.S. corporate bond market. Following Bordalo, Gennaioli, and Shleifer (2012) and Cosemans and Frehen (2021), the authors compute a bond-level salience theory value (ST) as the covariance between salience-distorted probability weights and daily bond returns over the prior two months, using daily transaction data from Enhanced TRACE. Bonds with the highest ST values earn lower returns in the subsequent month than bonds with the lowest ST values. The monthly quintile spread is -0.48% (t=-10.30) and the decile Sharpe ratio is 2.52 annualized, more than double the 0.89 observed for stocks over the same sample period.

The key asymmetric finding distinguishes bonds from stocks. In the equity market (Cosemans and Frehen 2021), the salience effect is mainly driven by salient upside: stocks with lottery-like positive payoffs are overpriced. In the corporate bond market, the premium is driven primarily by the outperformance of bonds with salient downside (portfolio 1), not by the underperformance of bonds with salient upside (portfolio 10). This reflects the limited-upside, substantial-downside payoff structure of corporate bonds: bond investors constrained by default risk pay more attention to extreme negative payoffs, making bonds with salient bad news overly attractive and thereby overpriced. The effect survives full Fama-MacBeth controls for FFL6 factor exposures, illiquidity, short-term reversal, lottery features (MAX, MIN), and bond characteristics. It is larger for junk bonds, long-maturity bonds, bonds with greater limits to arbitrage, and bonds with more retail investor demand, and strengthens during high economic uncertainty and bullish credit market sentiment.

## Core results

Magnitudes and significance are as reported in the source; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Quintile sort: high-ST bonds earn lower returns than low-ST bonds**, and the spread survives risk adjustment | Table 3, Panel A, p.10 | 5-1 return spread = -0.48%\*\*\* (t=-10.30); FF5 alpha = -0.44%\*\*\* (t=-7.01); FFL6 alpha = -0.44%\*\*\* (t=-7.22); characteristic-adjusted spread = -0.45%\*\*\* (t=-10.28) |
| R2 | **Decile sort: bond 10-1 spread of -0.61%/month delivers Sharpe ratio 2.52**, more than double the stock equivalent | Table 3, Panel B, p.10 | Bond 10-1 return spread = -0.61%\*\*\* (t=-10.96); annualized SR = 2.52; stock 10-1 spread = -0.78%\*\*\* (t=-3.74) with SR = 0.89 over the same July 2002-June 2021 period (the -1.22%/SR=1.34 figures in row 1 are for the longer 1931-2015 stock replication) |
| R3 | **Asymmetric pattern: bond salience premium mainly from salient-downside outperformance**, not salient-upside underperformance | Table 3, Panel B, pp.9-10 | Decile portfolio 1 (salient downside) excess return = 0.82%; portfolio 5 = 0.32%; portfolio 6 = 0.29%; portfolio 10 (salient upside) = 0.21%; downside minus upside asymmetry gap = 0.42%\*\*\* (t=2.90) |
| R4 | **FM regression: ST coefficient remains large with full controls** including ILLIQ, STR, MAX, MIN, MOM, LTR, COSKEW, SKEW, IVOL, ISKEW, and bond characteristics | Table 5, p.14 | Univariate: ST = -0.14\*\*\* (t=-10.46); with FFL6 betas only: -0.12\*\*\* (t=-13.30); with full controls: -0.07\*\*\* (t=-7.36); Adj-R2 rises from 0.015 to 0.313 |
| R5 | **Weekly frequency: negative ST-return relation persists at weekly horizon**, ruling out daily microstructure noise | Table 7, Panel A, p.17 | 5-1 weekly return spread = -0.19%\*\*\* (t=-10.61); FFL6 return alpha = -0.19%\*\*\* (t=-9.35) per week |
| R6 | **Rating and maturity heterogeneity: salience premium is larger for junk bonds and long-maturity bonds** | Table 8, Panels A1 and B1, pp.17-18 | Junk 5-1 spread = -0.48%\*\*\* (t=-6.89) vs AAA/AA = -0.23%\*\*\* (t=-4.53); long-maturity spread = -0.47%\*\*\* (t=-10.79) vs short-maturity = -0.22%\*\*\* (t=-5.81) |
| R7 | **Limits to arbitrage amplify the premium**: all five arbitrage-friction proxies produce Diff portfolios significant at 1% | Table 9, Panel A, pp.19-20 | IVOL Diff = -0.48%\*\*\* (t=-9.10); TVOL Diff = -0.43%\*\*\* (t=-9.10); ILLIQ Diff = -0.37%\*\*\* (t=-4.62); Size Diff = -0.20%\*\*\* (t=-3.47); Attention Diff = -0.22%\*\*\* (t=-3.41) |

**Overall (paper's conclusion).** The salience premium in corporate bonds cannot be attributed to conventional risk factors, past return patterns, or bond characteristics. The premium is pervasive across all bond rating and maturity segments, is larger where limits to arbitrage are more severe, is stronger for bonds with higher retail investor demand, and intensifies during periods of high economic uncertainty and bullish credit market sentiment. Bond investors, including institutional ones, are not immune to salience bias.

## Theory / model

The paper applies the Bordalo, Gennaioli, and Shleifer (2012) (BGS hereafter) salience model to the corporate bond market. The model relaxes the rational-expectations framework by having agents assign disproportionate weight to payoff states that stand out relative to the payoffs of comparable assets. Asset $i$ has payoffs in $S$ states ordered from most negative to most positive, with objective probabilities $\pi_s$ (equation 1, p.3):

$$
\left(R^i_{-m},\, \pi_{-m};\; \ldots;\; R^i_{-1},\, \pi_{-1};\; R^i_0,\, \pi_0;\; R^i_1,\, \pi_1;\; \ldots;\; R^i_{n-1},\, \pi_n \right)
$$

For each state $s$, the salience of asset $i$'s payoff relative to the average return $\bar{R}_s$ on similar assets in the same state is measured by the salience function (equation 2, p.4):

$$
\sigma(R^i_s,\, \bar{R}_s) = \frac{|R^i_s - \bar{R}_s|}{|R^i_s| + |\bar{R}_s| + \theta} \tag{2}
$$

where $\theta > 0$ is a smoothing parameter. The function has three properties: (i) ordering (salience depends on distance from the peer average), (ii) diminishing sensitivity (salience decreases as the magnitude of payoffs grows larger), and (iii) reflection (salience of a payoff depends on its distance from the mean, not its sign).

Payoffs are ranked by degree of salience and assigned salience rankings $k^i_s$ (rank 1 = most salient, rank $S$ = least salient). Agents with salience thinking replace objective probabilities with salience-distorted probabilities (equation 3, p.4):

$$
\bar{\pi}^{ST}_s = \pi_s \omega^{ST}_s, \qquad \omega^{ST}_s = \frac{\delta^{k^i_s}}{\sum_s \delta^{k^i_s} \pi_s} \tag{3}
$$

where $\delta \in (0, 1)$ governs the degree of distortion. When $\delta < 1$, states with more salient payoffs (lower rank $k^i_s$) receive greater overweighting relative to objective probabilities. When $\delta = 1$, objective probabilities are undistorted.

BGS (2013) show that for a salient thinker, the expected return on an asset negatively depends on the covariance between its salience weights and its returns (equation 4, p.4):

$$
E(R^i_s) = -\text{cov}(\omega^{ST}_s,\, R^i_s) \equiv -ST^i \tag{4}
$$

An asset has a positive $ST$ value when its positive returns are more salient than its negative returns. Such assets attract excess demand from salient thinkers, driving up prices and reducing future returns. This is the key asset-pricing implication: assets with higher $ST$ earn lower subsequent returns.

**Bond-specific asymmetry.** Corporate bonds have limited upside potential (bounded by par value) but substantial downside (default risk). This payoff asymmetry implies that salient downside states are more likely to attract attention from bond investors than salient upside states. The model therefore predicts that the bond salience premium is driven primarily by the outperformance of bonds with salient downside, which contrasts with the upside-dominated pattern found by Cosemans and Frehen (2021) in the stock market.

## Method

**ST value estimation.** For each trading day $d$ in evaluation period $\tau$, the salience degree of bond $i$'s daily return $R^M_{d,\tau}$ is measured relative to the equal-weighted average daily return across all bonds $\bar{R}^M_{d,\tau}$, using the salience function in equation (2) above with parameters $\theta = 0.1$ and $\delta = 0.7$ (BGS 2012 calibration, p.5). A maximum 7-day gap between consecutive trading days is imposed. The baseline evaluation window is the prior two months (requiring at least 10 daily observations), chosen to balance recency of information and estimation reliability.

Daily salience degrees are ranked in descending order to assign salience rankings $k^i_{d,\tau}$. Assuming equal objective probability $\pi_d = 1/N_t$ for each trading day, the salience weight is:

$$
\omega^{ST}_{d,\tau} = \frac{\delta^{k^i_{d,\tau}}}{\sum_d \delta^{k^i_{d,\tau}} \cdot (1/N_t)}
$$

where $N_t$ is the number of trading days in $\tau$. The salience theory value of bond $i$ at month $t$ is:

$$
ST^i_t = \text{cov}\!\left(\omega^{ST}_{d,\tau},\, R^i_{d,\tau}\right)
$$

A positive $ST^i_t$ means the bond's historical daily returns are positively correlated with the salience weights: days with more extreme (salient) returns tend to have positive returns, making the bond appear attractive to salient thinkers.

**Bond return construction.** The raw monthly return on bond $i$ in month $t$ is (equation 5, p.5):

$$
r^i_t = \frac{(P^i_t + AI^i_t) + C^i_t}{P^i_{t-1} + AI^i_{t-1}} - 1 \tag{5}
$$

where $P^i_t$ is the trade-size-weighted average intraday price, $AI^i_t$ is accrued interest, and $C^i_t$ is the coupon payment. If the last transaction in a month does not fall on the last trading day, an interpolated month-end price is used.

**Amihud illiquidity.** The Amihud (2002) illiquidity measure adapted to bonds (equation 6, p.5):

$$
ILLIQ^i_t = \frac{1}{days_{it}} \sum_{j=1}^{days_{it}} \frac{|r_{ij,t}|}{vol_{ij,t}} \tag{6}
$$

where $days_{it}$ is the number of trading days with daily returns, and $vol_{ij,t}$ is the dollar volume (in USD million) on day $j$.

**Factor exposure estimation.** Beta loadings for the six FFL6 factors (MKT, SMB, HML from Fama and French (1993), DEF, TERM, and the Lin et al. (2011) liquidity factor LIQ) are estimated each month $t$ by regressing monthly bond excess returns on factor excess returns over a rolling 60-month window.

## Empirical specifications

**Univariate portfolio sorts (R1, R2, R3).** At end of each month $t$, bonds are sorted into quintiles or deciles by $ST^i_t$ and held for one month. Equal-weighted excess returns are computed in month $t+1$. Factor-adjusted alphas are obtained by regressing portfolio monthly excess returns on FFL6 factors over the past five years. The high-minus-low (5-1 or 10-1) spread and its Newey-West (1987) adjusted $t$-statistic (12 lags) are the headline tests.

**Bivariate portfolio sorts (R1, control for characteristics).** At end of each month, bonds are sorted into 5x5 portfolios by one of 18 control variables and by $ST$ within each control quintile. The high-minus-low $ST$ return spread within each control quintile and averaged across quintiles confirms the salience effect is not driven by any individual characteristic. The absolute STR-controlled return spread is reduced by about one-half (from 0.48% to 0.22%) but remains highly significant.

**Fama-MacBeth cross-sectional regressions (R4).** The headline FM regression runs each month (equation 7, p.11):

$$
r^{i,e}_{t+1} = \gamma_0 + \gamma_1 \beta^i_{MKT,t} + \gamma_2 \beta^i_{SMB,t} + \gamma_3 \beta^i_{HML,t} + \gamma_4 \beta^i_{DEF,t} + \gamma_5 \beta^i_{TERM,t} + \gamma_6 \beta^i_{LIQ,t} + \gamma_7 ST^i_t + \delta' Z^i_t + \varepsilon^i_t \tag{7}
$$

where $r^{i,e}_{t+1}$ is bond $i$'s excess return over the one-month T-bill rate and $Z^i_t$ includes ILLIQ, STR, MAX (maximum daily return, a lottery-preference control following Bali, Cakici, and Whitelaw (2011)), MIN, MOM, LTR, COSKEW, SKEW, IVOL, ISKEW, Maturity, Age, Coupon, Size, and Rating. Each regressor is standardized by its cross-sectional standard deviation each month. Standard errors are Newey-West adjusted with 12 lags.

**Weekly frequency (R5).** The $ST$ value is recalculated using Wednesday-to-Wednesday weekly returns over the prior 24 weeks (at least 10 observations), and the FM regression is re-run at the weekly frequency to address daily microstructure noise concerns:

$$
r^{i,e}_{t+1,w} = \gamma_0 + \gamma_1 \beta^i_{MKT} + \gamma_2 \beta^i_{SMB} + \gamma_3 \beta^i_{HML} + \gamma_4 \beta^i_{DEF} + \gamma_5 \beta^i_{TERM} + \gamma_6 \beta^i_{LIQ} + \gamma_7 ST^i_{t,w} + \delta' Z^i_{t,w} + \varepsilon^i_{t,w}
$$

**By rating and maturity (R6).** Bonds are grouped into four rating portfolios (AAA/AA, A, BBB, Junk) and three maturity portfolios (Short: under 5 years; Medium: 5-10 years; Long: over 10 years). Within each group, bonds are further sorted by $ST$ and a high-minus-low (5-1) portfolio is formed. Separate FM regressions within each rating or maturity group confirm the pattern.

**Limits-to-arbitrage interaction (R7).** The FM regression adds an interaction $ST^i_t \times D^i_t$, where $D^i_t$ equals 1 when a limits-to-arbitrage proxy (issue size, TVOL, IVOL, ILLIQ, or Attention) exceeds its cross-sectional median. A significantly negative interaction coefficient indicates a larger salience premium for high-friction bonds (Table 9, Panel B).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Enhanced TRACE (FINRA) | Intraday corporate bond transaction data: prices, volumes, daily returns for ST computation and monthly return construction | [TRACE](/wiki/commercial/trace/) (licensed) |
| Mergent FISD | Bond characteristics: CUSIP, issuer info, maturity, coupon frequency, coupon rate, offering amount, and credit ratings | no page yet |
| CRSP / Compustat (via WRDS) | Equity characteristics for the matched-sample analysis; factor betas via stock returns | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Kenneth French Data Library | FF5 factor returns (MKT, SMB, HML) and default spread (DEF) used as the risk benchmark | [Ken French library](/wiki/datasets/ken-french/) |
| eMAXX (Lipper) | Quarterly institutional holdings of corporate bonds (PCT_Ins) for the investor-type analysis in Section 5.3 | [eMAXX](/wiki/commercial/emaxx/) (licensed) |

Sample: July 2002 to June 2021 (19 years, monthly). Final sample: 438,724 bond-month observations for 15,383 bonds issued by 1,800 firms. Transaction data filtered following Bessembinder et al. (2008) to remove corrections, cancellations, reversals, and agency transactions.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jempfin.2026.101692) when you need the full Internet Appendix (Tables IA1-IA26): alternative factor models (BBW4-D and FF-BBW7-D), alternative salience evaluation horizons (1 month to 5 years, Table IA12), alternative credit-rating and maturity groupings (Table IA17), callable-bond robustness (Table IA15), firm-level regressions (Table IA19), the yield-based ST measure STY (Tables IA16, Appendix B5), or the prospect theory (PT) value comparison (Table IA26). The detailed matched-sample analysis pairing bonds and equities issued by the same firm is in Table IA24. The subperiod analysis covering the 2007-2009 crisis period and three economic uncertainty indices is in Table 11 (p.22).

## Attribution and rights

Source: peer-reviewed, *Journal of Empirical Finance* 87 (2026) 101692. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The article is paywalled (Elsevier subscription); no open-access license is present in the Crossref metadata. Extract-only; no PDF is hosted here.

> Chen, Xi, Junbo Wang, K.C.John Wei, Chunchi Wu, and Linti Zhang. "Salience theory and cross-sectional corporate bond returns." *Journal of Empirical Finance* 87 (2026): 101692. DOI: 10.1016/j.jempfin.2026.101692.
