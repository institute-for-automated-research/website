---
title: "Effects of Credit Expansions on Stock Market Booms and Busts: Hansman, Hong, Jiang, Liu & Meng (2025)"
description: >-
  Distilled: Using China's staggered margin-lending deregulation (2010-2015) as
  a natural experiment, the paper finds causal evidence that credit expansions
  substantially raise stock prices, with the effect largely anticipated and
  front-run by unconstrained institutional investors. Review of Financial Studies
  2025, paywalled. Fourteen core results with source locators, datasets used, the
  dynamic information-revelation model, and the empirical specifications (event
  study, RDD, panel regression).
sidebar:
  label: Hansman-Hong-Jiang-Liu-Meng 2025
  order: 1
tags: [paper-summary, asset-pricing, credit, equities, leverage, china, event-study,
       regression-discontinuity-design, panel-regression, institutional-investors,
       peer-reviewed, unreplicated, data:csmar, data:china-shadow-margin]
paper:
  authors: Christopher Hansman, Harrison Hong, Wenxi Jiang, Yu-Jane Liu, Juan-Juan Meng
  authorList:
    - { family: Hansman, given: Christopher, affiliation: Emory University }
    - { family: Hong, given: Harrison, orcid: "0000-0002-2263-7761", affiliation: Columbia University }
    - { family: Jiang, given: Wenxi, orcid: "0009-0003-6137-4110", affiliation: Chinese University of Hong Kong }
    - { family: Liu, given: Yu-Jane, affiliation: Peking University }
    - { family: Meng, given: Juan-Juan, orcid: "0000-0001-7546-0237", affiliation: Peking University }
  year: 2025
  venue: The Review of Financial Studies 38(5), May 2025, 1502-1544
  venueShort: Rev. Fin. Stud. 2025
  doi: 10.1093/rfs/hhaf008
  jel:
    codes: [G01, G11, G12, G18]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-06
  topics: ["Banking stability, regulation, efficiency", "Global Financial Crisis and Policies", "Monetary Policy and Economic Impact"]
  dataAccess: proprietary-confidential
  outcome:
    - stock prices (cumulative abnormal returns) around margin-lending deregulation
    - mutual fund portfolio weights in soon-to-be-marginable stocks
    - crash returns during the 2015 bust
    - marginability and margin-debt take-up at the eligibility threshold
    - ownership shares held by the largest 10 investors
    - implied stock returns attributable to margin debt during the 2014-2015 boom
    - realized stock returns during the 2014-2015 boom
  outcomeClass: [security-returns, fund-behavior]
  license: >-
    OUP standard publication reuse rights (paywalled; confirmed via Crossref
    DOI metadata: content-version vor, URL
    https://academic.oup.com/pages/standard-publication-reuse-rights,
    delay-in-days 0, start 2025-01-30)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford University Press site; confirmed 2026-06-06)"
  redistribution: extract-only
  resultsCount: 14
  citedByCount: 3

  methods:
    role: both
    contributes: anticipatory-credit-pricing-model
    family: reduced-form-causal
    buildsFrom: [event-study, regression-discontinuity-design, panel-regression, instrumental-variables]
    identification: rdd
  contributionType: [new-fact, new-theory]
  mechanisms: [demand-elasticity, behavioral-bias, limits-to-arbitrage]
  scope:
    region: China
    assetClass: Chinese equities (Shanghai and Shenzhen exchanges)
    period: 2009-03..2015-10
    frequency: daily
    dataType: [market, accounting, administrative]
    granularity: [security, firm]
    n: "approximately 900 marginable stocks across three vintages; 1,121 mutual funds; daily stock-level data 2009-2015"

  findings:
    - ref: R1
      outcome: stock prices (cumulative abnormal returns) around margin-lending deregulation
      metric: car
      value: "DGTW-adjusted returns for marginable vs. non-marginable stocks: -1 to 0 months = 2.1%*** (Table 2, col 4); -3 to 0 months = 7.3%*** (col 5); -12 to 0 months = 26.9%*** (col 6)"
      direction: positive
      vsBenchmark: zero differential return post-deregulation (following marginability = near zero); pre-event run-up is significant and large
    - ref: R2
      outcome: stock prices (cumulative abnormal returns) around margin-lending deregulation
      metric: car
      value: "RD reduced-form: cumulative returns for above-threshold stocks (Table 3 Panel B): 4.6%*** (5 days, optimal bandwidth), 8.3%** (20 days), 24.6%*** (60 days); fixed bandwidth: 4.6%***, 8.2%**, 24.2%***"
      direction: positive
      vsBenchmark: stocks just below the marginability threshold
    - ref: R3
      outcome: stock prices (cumulative abnormal returns) around margin-lending deregulation
      metric: car
      value: "Fuzzy RD (2SLS) causal effect of becoming marginable: 4.7%*** (5 days), 8.5%** (20 days), 26.0%*** (60 days) at optimal bandwidth (Table 3 Panel C); 25.2%*** at 60 days fixed bandwidth"
      direction: positive
      vsBenchmark: never-marginable stocks just below the threshold; fuzzy first-stage predicts marginability with jump of roughly 96%
    - ref: R4
      outcome: mutual fund portfolio weights in soon-to-be-marginable stocks
      metric: coefficient
      value: "Interaction Top Quintile x Months Since Last Vintage: 0.0034*** (t=3.2, Table 4 col 1); Top 150 x Months Since Last Vintage: 0.0027** (t=2.5, col 2)"
      direction: positive
      vsBenchmark: non-marginable control stocks; implies about 8.1% total overweighting across two exchanges for top 150 stocks in month 10 after prior vintage
    - ref: R5
      outcome: mutual fund portfolio weights in soon-to-be-marginable stocks
      metric: return-spread
      value: "TBM (top quintile) vs NTBM 6-month forward return: raw TBM = 1.646%/month (t=2.79), NTBM = 1.089%/month; long-TBM-short-NTBM = 0.556%/month** (t=2.10) (Table 5)"
      direction: positive
      vsBenchmark: non-TBM fund holdings; CAPM alpha of long-short = 0.560%/month** (t=2.01)
    - ref: R6
      outcome: stock prices (cumulative abnormal returns) around margin-lending deregulation
      metric: coefficient
      value: "Nonlinear panel model: theta = 1.051-1.099 across specs (text: 1.05-1.10), delta_1 = 0.010-0.025*** (Table 6 nonlinear cols); linear 2SLS: theta = 1.069 (base), 1.059 (full), delta_1 = 0.025*** (base), 0.011*** (full); implies >60% priced in within six months prior"
      direction: positive
      vsBenchmark: never-marginable control group; two-way fixed effects panel using eq. 9-10
    - ref: R7
      outcome: crash returns during the 2015 bust
      metric: coefficient
      value: "OLS coefficient on Peak Total Margin: -0.266** (Table 7 Panel B col 1); top quintile of margin debt experienced drops 6pp larger than average during the crash"
      direction: negative
      vsBenchmark: stocks with lower margin debt at the June 12, 2015 peak; crash window June 12 to November 27, 2015
    - ref: R8
      outcome: marginability and margin-debt take-up at the eligibility threshold
      metric: coefficient
      value: "RD first stage (Table 3 Panel A): above-threshold indicator predicts marginability by 0.959*** (SE 0.030), margin debt by 0.359*** billion yuan (SE 0.039), and margin debt/floating market cap by 0.049*** (SE 0.006), optimal bandwidths"
      direction: positive
      vsBenchmark: stocks just below the vintage-specific eligibility threshold
    - ref: R9
      outcome: stock prices (cumulative abnormal returns) around margin-lending deregulation
      metric: car
      value: "Placebo event-study means (95% empirical CIs), Table 2 Panel B: -3 to 0 months = 0.014 [-0.014, 0.042]; -12 to 0 months = 0.049 [-0.024, 0.120]; 1,000 draws"
      direction: none
      vsBenchmark: both confidence intervals include zero; corresponding actual estimates are 0.073*** and 0.269***
    - ref: R10
      outcome: stock prices (cumulative abnormal returns) around margin-lending deregulation
      metric: coefficient
      value: "RD effects are larger for higher past returns, sales growth, profits, and below-median P/E; point estimates remain positive in both halves of each split (text p. 1523; subgroup coefficients are in the cited Internet Appendix Table A.V, not printed in this PDF)"
      direction: positive
      vsBenchmark: lower past returns, sales growth, and profits, or above-median P/E
    - ref: R11
      outcome: ownership shares held by the largest 10 investors
      metric: coefficient
      value: "Figure 5 Panel A event-study coefficients rise through the quarter before marginability and decline afterward; within a year they are not statistically distinguishable from the share 12 quarters before (numeric coefficients are plotted but not tabulated)"
      direction: mixed
      vsBenchmark: ownership share 12 quarters before the introduction of marginability
    - ref: R12
      outcome: mutual fund portfolio weights in soon-to-be-marginable stocks
      metric: coefficient
      value: "Post-eligibility selling: Marginable x Months Since Marginable = -0.0075*** (SE 0.0027), Table 4 col 4"
      direction: negative
      vsBenchmark: fund weights decline as time since marginability increases
    - ref: R13
      outcome: implied stock returns attributable to margin debt during the 2014-2015 boom
      metric: level
      value: "Using the estimated demand elasticity, implied boom return mean (median) = 23.4% (15.7%), versus actual return mean (median) = 112.7% (110.3%); text p. 1539"
      direction: positive
      vsBenchmark: mean implied return is roughly one-fifth of the mean realized boom return
    - ref: R14
      outcome: realized stock returns during the 2014-2015 boom
      metric: coefficient
      value: "Cross-sectional regression of realized boom return on implied margin-debt boom return: coefficient = 0.141, R-squared = 18.2%; text p. 1539"
      direction: positive
      vsBenchmark: cross-sectional association between realized and model-implied boom returns

  resultType: confirms

  relatesTo:
    - { cite: "DeLong, Shleifer, Summers & Waldmann (1990)", relation: builds-on, note: "the model of noise-trader risk and price-inelastic demand shocks underlies the paper's theoretical framework" }
    - { cite: "Summers (1986)", doi: '10.1111/j.1540-6261.1986.tb04519.x', relation: builds-on, note: "rational-valuation benchmark the model extends to anticipatory credit-supply dynamics" }
    - { cite: "Mian & Sufi (2009)", doi: '10.1162/qjec.2009.124.4.1449', relation: extends, note: "provides causal credit-to-price evidence for equities analogous to their mortgage credit evidence for housing" }
    - { cite: "Di Maggio & Kermani (2017)", doi: '10.1093/rfs/hhx056', relation: extends, note: "credit-induced boom and bust in the equity context parallels their mortgage credit channel" }
    - { cite: "Bian, Da, He, Lou, K. Shue & Zhou (2023)", relation: cites, note: "detailed characterization of China shadow margin borrowing and rates used in the bust analysis" }

  openQuestions:
    - "The paper's empirical strategies do not provide sharp quasi-experimental variation in the quantity of margin lending during the 2015 boom peak and crash, so the bust analysis is descriptive and correlation-based, not causal (pp. 1539-1540)."
    - "The extrapolation from individual-stock causal effects to aggregate market-level effects relies on a back-of-the-envelope elasticity estimate (epsilon = -0.19) and may not fully capture general equilibrium feedback (pp. 1539-1540)."
    - "The setting is specific to China's institutional structure (state-sponsored margin finance, retail-dominated markets, absence of a meaningful short-selling market) and the paper notes generalizing to more developed markets requires caution (pp. 1503, 1541)."

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-06
      role: extracted
      note: "Full PDF read (pp. 1502-1544); seven results extracted from tables and text. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-06
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; seven fixes applied: JEL codes corrected (G12/G18/G14 -> G01/G11/G12/G18); R1 -1-to-0 significance upgraded to *** and -12-to-0 magnitude corrected to 26.9%; R2 20-day value corrected to 8.3%** (not 8.2%***); R3 20-day significance corrected to **; R4 Top-150 significance corrected to ***; R6 theta range and 2SLS delta_1 corrected from PDF Table 6. Equations 2-5 and 7-10 verified term-by-term: all match."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and augmented Core results with seven main-text findings; added findings for rows R8-R14; added missing equations (1), (6), and (11) and corresponding specifications. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 14 Core-results rows, equations (1)-(11), specifications, classifications, findings, prose, locators, and frontmatter checked against the PDF; corrected R4 significance, R6 2SLS estimates, model parameterization/equations and interpretation, equation (11) units, summary range, RDD classification, and outcome class. Table-locator check flagged no rows; citation-locatability check found no misses for this page." }

  licenceVerification:
    - source: Crossref REST API works/10.1093/rfs/hhaf008
      checked: 2026-06-06
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[].content-version=vor, URL=https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days=0, start=2025-01-30; not a CC licence; paywalled"

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the information-revelation model it contributes, and the three empirical strategies (event study, regression discontinuity, panel model) with their equations: enough to know what it found and how, without reading the full 43 pages. To replicate or extend the paper, read the original at [doi.org/10.1093/rfs/hhaf008](https://doi.org/10.1093/rfs/hhaf008).

## TL;DR

Using China's staggered deregulation of margin lending (three vintages introduced between 2013 and 2014 under a formula-based inclusion rule), the paper establishes causal evidence that an expansion of margin credit substantially raises stock prices, with 60-day cumulative returns roughly 25% higher for newly marginable stocks than for just-below-threshold controls. Crucially, this effect was largely anticipated: stock prices began rising months before formal margin eligibility, consistent with deep-pocketed institutional investors front-running the liberalization. Chinese mutual funds systematically overweighted soon-to-be-marginable stocks as each vintage approached, then sold after eligibility, and earned significant risk-adjusted profits from this strategy. A dynamic information-revelation model rationalizes the gradual exponential run-up with two parameters: the total price impact and the monthly rate of anticipation (roughly 5-10%). A back-of-the-envelope calculation attributes an implied mean return equal to about one-fifth of the realized 2014-2015 boom to margin-debt growth; stocks with more margin debt at the 2015 market peak also experienced larger crashes. The results extend to equities the causal credit-to-asset-price evidence of Mian and Sufi (2009) and Di Maggio and Kermani (2017) for mortgage markets. Shadow margin data from Bian, Da, He, Lou, K. Shue, and Zhou (2023) is used to measure informal lending in the boom-bust analysis.

## Core results

Magnitudes and significance as reported; `\*` = 10%, `\*\*` = 5%, `\*\*\*` = 1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Pre-marginability run-up**: DGTW-adjusted returns for soon-to-be-marginable vs. never-marginable stocks are large and significant in months leading to deregulation, but near zero after | Table 2 Panel A, p. 1514 | -1 to 0 months: 2.1%\*\*\*; -3 to 0 months: 7.3%\*\*\*; -12 to 0 months: 26.9%\*\*\*; following marginability: statistically zero |
| R2 | **RD reduced-form**: stocks just above the marginability threshold saw roughly 25% higher 60-day cumulative returns than just-below-threshold stocks | Table 3 Panel B, p. 1522 | 4.6%\*\*\* (5 days), 8.3%\*\* (20 days), 24.6%\*\*\* (60 days), all at optimal bandwidth; fixed bandwidth: 4.6%\*\*\*, 8.2%\*\*, 24.2%\*\*\* |
| R3 | **Fuzzy RD causal effect**: 2SLS estimate of becoming marginable on cumulative returns, instrumenting with above-threshold status; first stage is near-perfect (96% jump in marginability) | Table 3 Panel C, p. 1522 | 4.7%\*\*\* (5 days), 8.5%\*\* (20 days), 26.0%\*\*\* (60 days) at optimal bandwidth; 25.2%\*\*\* at 60 days fixed bandwidth |
| R4 | **Mutual fund anticipatory buying**: funds systematically increased weights in soon-to-be-marginable stocks as the deregulation approached, interacted with time since last vintage | Table 4, p. 1528 | Interaction Top Quintile x Months Since Last Vintage: 0.0034\*\*\* (t=3.2, col 1); Top 150 x Months Since Last Vintage: 0.0027\*\* (t=2.5, col 2); implies roughly 8.1% total overweighting of top 150 stocks across two exchanges |
| R5 | **Mutual fund alpha**: TBM (to-be-marginable) holdings earned 0.56%/month more than NTBM holdings on a long-short basis; CAPM alpha of long-short = 0.56%/month | Table 5, p. 1530 | TBM raw return 1.65%/month (t=2.79); NTBM 1.09%/month; long-short 0.56%\*\* (t=2.10); CAPM alpha 0.56%\*\* (t=2.01) |
| R6 | **Dynamic panel model**: monthly rate of anticipation theta is 1.05-1.10 (text), implying 5-10% monthly exponential discounting of future credit shock; more than 60% priced in within six months before eligibility | Table 6, p. 1538 | Nonlinear NLS: theta = 1.051-1.099, delta_1 = 0.010-0.025\*\*\*; linear 2SLS: theta = 1.069 (base), 1.059 (full), delta_1 = 0.025\*\*\* (base), 0.011\*\*\* (full sample) |
| R7 | **Margin debt and the crash**: stocks with higher margin debt at the June 2015 market peak experienced significantly larger crash returns in the subsequent 24-week bust | Table 7 Panel B, p. 1541 | OLS coefficient on Peak Total Margin: -0.266\*\* (SE=0.116); top quintile of margin stocks dropped 6 percentage points more than others; crash window Jun 12 to Nov 27, 2015 |
| R8 | **RD first stage**: crossing the formula-based threshold predicts marginability and margin-debt take-up | Table 3 Panel A, p. 1522 | Optimal bandwidth: marginability 0.959\*\*\* (SE=0.030); margin debt 0.359\*\*\* billion yuan (SE=0.039); margin debt/floating market cap 0.049\*\*\* (SE=0.006) |
| R9 | **Placebo event study**: randomly assigned eligibility dates do not reproduce the anticipatory return pattern | Table 2 Panel B, p. 1514; text p. 1516 | 1,000 placebo draws: -3 to 0 months mean 0.014 (95% CI [-0.014, 0.042]); -12 to 0 months mean 0.049 (95% CI [-0.024, 0.120]); both intervals include zero |
| R10 | **Heterogeneity in RD price effects**: effects are larger for stocks with stronger recent returns, higher sales growth, higher profits, and below-median P/E; estimates remain positive in both halves of every split | Text p. 1523 (Internet Appendix Table A.V summarized) | The article text reports larger effects for the listed groups and positive point estimates on both sides of each split; subgroup coefficients are not printed in this PDF |
| R11 | **Large-investor ownership front-running**: the largest 10 investors build positions in soon-to-be-marginable stocks, then unwind them after eligibility | Figure 5 Panel A, p. 1525; text p. 1524 | Ownership share rises significantly in the quarters before eligibility, peaks in the quarter before, and declines; within a year it is not statistically distinguishable from the share 12 quarters before. Figure coefficients are not tabulated in this PDF |
| R12 | **Mutual fund post-eligibility selling**: funds reduce portfolio weights in marginable stocks as time since eligibility grows | Table 4 col. 4, p. 1528 | Marginable x Months Since Marginable = -0.0075\*\*\* (SE=0.0027) |
| R13 | **Implied boom contribution**: the paper's elasticity-based calculation attributes a meaningful share of the 2014-2015 stock-price run-up to margin-debt growth | Text p. 1539 | Mean (median) implied stock return = 23.4% (15.7%), compared with actual mean (median) = 112.7% (110.3%); implied mean is roughly one-fifth of actual mean |
| R14 | **Cross-sectional boom-return association**: stocks with higher margin-debt-implied returns also had higher realized boom returns | Text p. 1539 | Regression coefficient = 0.141; R-squared = 18.2% |

**Overall (paper's conclusion).** Major expansions of credit for stock purchases increase equity prices, and this effect is anticipated and priced in gradually by deep-pocketed investors who behave as front-runners. The model and estimates suggest that margin debt contributes meaningfully to stock market fluctuations, including both the boom and the bust.

## Theory / model

The paper develops a dynamic competitive stock-pricing model with information revelation about a credit supply shock (Section 3, pp. 1531-1538). The model builds on Summers (1986) and DeLong, Shleifer, Summers, and Waldmann (1990), with deep-pocketed unconstrained investors receiving signals about a coming credit supply shock and trading ahead of its price impact. The setup is:

Consider a market for stock with shares outstanding $$Q$$. The stock pays dividend $$\pi \sim N(0, \sigma_\pi^2)$$ at terminal date $$T$$, with the risk-free rate set to zero. A unit mass of unconstrained risk-averse investors have CARA utility $$-e^{-\gamma W}$$ and are price takers.

At $$t = 0$$ there is a permanent price-inelastic demand shock of $$\Delta$$ shares from previously constrained investors receiving margin credit. If the shock were entirely unanticipated, the price would jump at $$t=0$$ by $$m = \Delta \gamma \sigma_\pi^2$$. To capture anticipation, unconstrained investors receive signals $$m_t$$ about the demand shock $$m = \sum_{j=-\infty}^0 m_j$$ in each period $$t \leq 0$$. The signals $$m_t$$ are independent normal with mean zero and variance $$\sigma_t^2$$. The equilibrium price for any $$t$$ between $$-n$$ and $$0$$ is (p. 1532, equation 7):

$$
p_t = p^* + \sum_{j=-n}^{t} m_j - \gamma \left(\sum_{k=t+1}^{0} \sigma_k^2\right) Q \tag{7}
$$

The first term captures revealed information about future prices; the second is a risk discount that falls as uncertainty resolves.

**Exponential decay information structure.** To bring the model to data, the authors impose that for some $$\theta > 0$$ the variance of each signal is $$\sigma_t^2 = \beta\theta^t$$ (p. 1533). Under this parameterization uncertainty reduces exponentially as $$t \to 0$$. In a cross-section of treated stocks, the expected price at time $$t$$ is (p. 1533, equation 8):

$$
E[p_t | m > 0] = \tilde{p} + \beta(\lambda + \gamma) \sum_{j=-\infty}^{t} \mathbf{1}\{j \leq 0\} \theta^j \tag{8}
$$

where $$\lambda = \frac{\phi(0)}{\Phi(0)} \frac{1}{\sigma_m}$$ and $$\tilde{p} = p^* - \frac{\gamma \beta}{1 - \frac{1}{\theta}}$$. The period-to-period expected price increase is:

$$
E[p_t - p_{t-1} | m > 0] = \begin{cases} \beta(\lambda + \gamma)\theta^t & \text{if } t \leq 0 \\ 0 & \text{if } t > 0 \end{cases}
$$

The parameter $$\theta$$ captures the exponential rate at which prices rise. Higher $$\theta$$ means anticipation begins later and is more concentrated near the event. The net impact of deregulation is recovered from the two parameters as: $$\Delta p_{-\infty} = E[p_0 | m > 0] - \tilde{p} = \frac{\delta_1}{1 - \frac{1}{\theta}}$$ where $$\delta_1 = \beta(\lambda + \gamma)$$.

**Identification assumption.** The timing of deregulation across vintages is orthogonal to vintage-specific demand shocks for stocks. The deregulation formula used publicly observable real-time data on market cap and volume, providing the basis for the regression discontinuity design.

## Method

The paper combines three complementary empirical strategies, each designed to address a different concern about identification.

**Eligibility ranking rule (Section 1.1, p. 1508, equation 1).** Each exchange ranked eligible stocks using the weighted sum of a stock's share of exchange-wide tradable market value and its share of exchange-wide trading volume:

$$
\text{Inclusion Index}_{i}^{k} = \theta \times \frac{\text{Average tradable market value of stock } i}{\text{Average tradable market value of all stocks in SH/SZ}} + \gamma \times \frac{\text{Average trading volume in yuan of stock } i}{\text{Average trading volume in yuan of all stocks in SH/SZ} } \tag{1}
$$

The weights were exchange- and vintage-specific: Shenzhen used $$\theta=2$$ and $$\gamma=1$$; Shanghai used $$\theta=\gamma=1$$ in the first two vintages and $$\theta=2$$, $$\gamma=1$$ in the third.

**Event study (Section 2.1).** Reduced-form estimation of cumulative DGTW-adjusted returns comparing marginable and never-marginable stocks around announcement/implementation dates (pp. 1513-1517, equations 2-3):

$$
Ret_i^k = \beta_0 \text{Marginable}_i^k + \theta_k + \varepsilon_i^k \tag{2}
$$

The stacked version plots the full dynamic path (equation 3):

$$
Ret_{ikt} = \sum_{\ell} \beta_\ell \times \mathbf{1}\{t - \tau(k) = \ell\} \times Treated_{ik} + \gamma_{ik} + \lambda_{tk} + \varepsilon_{ikt} \tag{3}
$$

**Regression discontinuity (Section 2.2).** Exploiting the formula-based threshold in the inclusion index. Stocks with index above the cutoff $$C_E^k$$ qualify; the density test shows no bunching (t-stat = 0.96, Figure 3). The RD estimating equation is (p. 1519, equation 4):

$$
Y_i^k = \alpha_{0l} + \alpha_{1l}(Index_i^k - C_E^k) + \tau_i^k[\alpha_{0r} + \alpha_{1r}(Index_i^k - C_E^k)] + \theta_k + \lambda_{ind(i)} + \varepsilon_i^k \tag{4}
$$

where $$\tau_i^k$$ is the indicator for being above the threshold. A triangular kernel local linear approach is used. The fuzzy RD instruments marginability with $$\tau_i^k$$ (2SLS, Panel C of Table 3, p. 1522). Standard errors are clustered at the stock level; CCT robust p-values are reported.

**Dynamic panel model (Section 3.3-3.4).** Two estimating equations derived from the theoretical model.

Nonlinear approach (equation 9):

$$
p_{it}^{treated} - p_{it-1}^{treated} = \underbrace{\delta_1}_{\beta(\lambda+\gamma)} \theta^{t+1} + \Delta \varepsilon_{it} \tag{9}
$$

Estimated by nonlinear least squares from pre-event price changes for treated stocks.

Linear approach (equation 10):

$$
p_{it} = \delta_1 D_{it} + \frac{1}{\theta} p_{it+1} + \alpha_i + \eta_t + e_{it} \tag{10}
$$

where $$D_{it}$$ equals one for treated stocks when $$t \geq 0$$. Estimated by 2SLS using forward leads $$D_{it+2}$$ and $$D_{it+3}$$ as instruments to address the dynamic panel bias (Arellano and Bond (1991), Arellano and Bover (1995), Malani and Reif (2015)).

**Mutual fund analysis (Section 2.3).** Portfolio-weight panel regression at the semiannual fund-stock level (equation 5):

$$
w_{ijt} = \alpha + \beta \, \text{Top ranking}_{it} \times \text{Months since last vintage}_t + \text{Controls}_{it} + \sigma_i + \theta_j + \gamma_t + \epsilon_{ijt} \tag{5}
$$

where $$w_{ijt}$$ is fund $$j$$'s dollar-value weight in stock $$i$$ at time $$t$$, scaled by total net assets. Standard errors are clustered by fund.

The post-eligibility unwind specification (p. 1528, equation 6) replaces the ex ante ranking signal with realized marginability and elapsed time since eligibility:

$$
w_{ijt} = \alpha + \beta \, \text{Marginable}_{it} \times \text{Months Since Marginable}_{it} + \text{Controls}_{it} + \sigma_i + \theta_j + \gamma_t + \epsilon_{ijt} \tag{6}
$$

The coefficient $$\beta$$ measures the change in fund weight over time after a stock becomes marginable.

## Empirical specifications

**Event study (R1, pp. 1513-1517).** Sample: all stocks that either become marginable in vintages 1, 2, 3 or are never marginable. Three announcement/implementation events are pooled. Returns are DGTW-adjusted benchmarks from independent quintile sorts on size, book-to-market, and past-12-month returns (125 bins). Cumulative returns measured from 12 months before to 12 months after the announcement/implementation month. Vintage fixed effects $$\theta_k$$ included. Standard errors clustered at the stock level. Placebo tests use 1,000 iterations randomly drawing three placebo deregulation months from January 1993 to December 2008.

**Regression discontinuity (R2, R3, pp. 1518-1523).** Running variable is $$Index_i^k$$, centered at the vintage-exchange threshold $$C_E^k$$. Window of size one around the threshold. CCT covariate-adjusted MSE-optimal bandwidth (Calonico et al. (2019)) and fixed bandwidth 0.1 both reported. Local linear with triangular kernel. Industry (CSRC 2001) and vintage fixed effects included. Outcome $$Y_{ik}$$ is raw cumulative return over 5, 20, or 60 trading days after implementation. Fuzzy RD instruments marginability with above-threshold indicator; first stage shows 96% probability jump at threshold (Table 3 Panel A, p. 1522). CCT robust p-values reported. N ranges from 146 to 229 depending on bandwidth and horizon.

**Mutual fund panel (R4, R12, pp. 1526-1528).** Sample: semiannual fund-stock level observations, December 2011 to June 2014 (equation 5 and Table 4 columns 1-3) or December 2011 to June 2015 (equation 6 and Table 4 column 4). N = 324,860 or 455,846. Controls: percentile ranks of market cap, book-to-market, turnover, past month and past year return, and interactions of those controls with the corresponding elapsed-time variable. Fund, stock, and time fixed effects; standard errors clustered by fund. Performance test (R5, Table 5, p. 1530): calendar-time portfolios January 2012 to September 2014, rebalanced semiannually, value-weighted within fund, Newey-West standard errors with 11-month lag.

**Dynamic panel model (R6, pp. 1535-1538).** Monthly data, March 2009 to October 2015. Stock prices normalized to March 2009 price. Base sample includes three main vintages plus never-marginable stocks; full sample adds pilot vintages. Nonlinear NLS estimated from pre-event price changes. Linear 2SLS uses leads $$D_{it+2}$$ and $$D_{it+3}$$ as instruments; instruments validated by the Kleibergen-Paap F-statistic (37-41 across specifications). Stock fixed effects and month-by-year fixed effects are included.

**Boom attribution and bust analysis (R7, R13-R14, pp. 1539-1541).** The paper's elasticity calculation (p. 1539, equation 11) relates the return effect to the increase in margin demand relative to market capitalization:

$$
\text{Return} = -\frac{1}{\epsilon} \%\Delta \text{Demand} \tag{11}
$$

The authors combine the estimated demand elasticity $$\epsilon=-0.19$$ with stock-level growth in formal plus estimated shadow margin debt from June 13, 2014, to June 12, 2015. A stock-level cross-sectional regression relates realized boom returns to implied returns; the article text reports the coefficient and R-squared but does not report its standard errors, fixed effects, or sample count. For the bust regression, Crash Return is cumulative log return from June 12 to November 27, 2015, and Peak Total Margin is formal plus shadow margin debt divided by floating market capitalization on June 12. Controls are log floating market capitalization, book-to-market, turnover, and past-month and past-year returns as of end-May 2015. The sample is 1,645 stocks; robust standard errors are reported. The crash association is not interpreted causally because peak margin debt is endogenous.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CSMAR (China Stock Market and Accounting Research) | Stock prices, trading data, book-to-market, fund semiannual holdings (complete portfolios), top 10 shareholder ownership data at quarterly frequency | No page yet |
| Shanghai and Shenzhen exchange margin debt data | Daily stock-level formal margin debt outstanding, collected directly from exchanges | No page yet |
| Proprietary shadow margin data (single large provider) | Daily stock-level shadow margin balance, approximately 5% of market; used for bust analysis | No page yet |
| China Securities Finance Co. (CSF) / regulatory formula | Vintage inclusion index inputs (market cap and trading volume); three-step screening rule per exchange | No page yet |

Sample: primary analysis March 2009 to May 2015 (daily), with the boom-bust extension through October 2015. Mutual fund analysis: December 2011 to June 2014/2015 (semiannual holdings).

## When to read the full paper

Read the [original](https://doi.org/10.1093/rfs/hhaf008) if you are: (a) studying credit-to-equity-price transmission with a quasi-experimental design (the RD, event study, and dynamic panel strategies are all described in full, with Internet Appendix robustness); (b) modeling anticipatory price dynamics in event-study settings more generally (the exponential information-revelation model and its panel estimator have broad applicability); (c) studying institutional front-running around predictable regulatory changes; or (d) analyzing the role of leverage in boom-bust cycles, particularly in markets where short-selling is limited. The locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Review of Financial Studies* 38(5), 2025. Published by Oxford University Press. Paywalled; no CC licence. This distillation was extracted by an LLM on 2026-06-06 and is **not human-verified or independently reproduced**. Extract-only under fair-use/fair-dealing norms.

> Hansman, Christopher, Harrison Hong, Wenxi Jiang, Yu-Jane Liu, and Juan-Juan Meng.
> "Effects of Credit Expansions on Stock Market Booms and Busts."
> *The Review of Financial Studies* 38, no. 5 (May 2025): 1502-1544.
> DOI: 10.1093/rfs/hhaf008.
> (c) 2025 The Author(s). Published by Oxford University Press on behalf of The Society for Financial Studies. All rights reserved.
