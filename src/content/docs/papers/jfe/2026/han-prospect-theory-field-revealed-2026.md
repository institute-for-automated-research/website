---
title: "Prospect Theory in the Field: Han, Sui & Yang (2026)"
description: >-
  Distilled: Funds whose past returns generate higher prospect theory value attract larger future flows,
  confirmed by panel regressions and account-level trading data from January 1981 to June 2022.
  A revealed preference analysis recovers loss aversion of 1.824 and curvature of 0.745, aligned
  with lab-based studies. Journal of Financial Economics 2026, CC BY 4.0. Seven core results with
  source locators, datasets used, the prospect theory valuation framework, and the empirical specifications.
sidebar:
  label: Han-Sui-Yang 2026
  order: 1
tags: [paper-summary, behavioral-finance, prospect-theory, mutual-funds, fund-flows, revealed-preference,
       investor-demand, panel-data, open-access, cc-by, peer-reviewed, unreplicated, panel-regression,
       portfolio-sort, data:crsp-mutual-funds, data:morningstar, data:ken-french, data:barber-odean-brokerage]
paper:
  authors: Bing Han, Pengfei Sui, Wenhao Yang
  authorList:
    - { family: Han, given: Bing, affiliation: "University of Toronto; Tsinghua University PBCSF" }
    - { family: Sui, given: Pengfei, affiliation: "The Chinese University of Hong Kong, Shenzhen" }
    - { family: Yang, given: Wenhao, affiliation: "University of North Carolina at Charlotte" }
  year: 2026
  venue: Journal of Financial Economics 176, 2026, article 104221
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104221
  jel:
    codes: [G11, G40]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Financial Markets and Investment Strategies
    - Capital Investment and Risk Analysis
    - Experimental Behavioral Economics Studies
  dataAccess: proprietary-confidential
  outcome:
    - mutual fund flows
    - individual investor mutual fund holdings and net buying
    - prospect theory preference parameters revealed from fund flow choices
  outcomeClass: [fund-behavior, household-finance]
  license: "CC BY 4.0 (confirmed via Crossref: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-18; corroborated by artifact p. 1 notice 'open access article under the CC BY license')"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "blocked-paywall (Elsevier ScienceDirect wrapper; CC BY VOR confirmed via Crossref 2026-06-24)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 7
  citedByCount: 2
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, portfolio-sort, fama-macbeth, revealed-preference]
    identification: descriptive
  contributionType: [new-fact, measurement]
  mechanisms: [behavioral-bias]
  scope:
    region: US
    assetClass: actively managed US equity mutual funds
    period: 1981-01..2022-06
    frequency: monthly
    dataType: [market, accounting]
    granularity: [individual, security]
    n: "~860,000 fund-month observations (Table 3); account-level subsample: ~1.3M investor-fund-month observations (Table 7)"
  findings:
    - ref: R1
      outcome: mutual fund flows
      metric: pp-effect
      value: "H-L TK decile flow: 1.3% per month (equally weighted, t=8.50); 1.4% per month (TNA-weighted, t=10.47) (Table 2)"
      direction: positive
      vsBenchmark: monotone increase across all TK deciles; holds for both equal-weighted and TNA-weighted portfolios
    - ref: R2
      outcome: mutual fund flows
      metric: coefficient
      value: "0.383 (t=11.27) with fund and date FE plus full controls (Table 3 col 4); 0.604 (t=26.89) univariate"
      direction: positive
      vsBenchmark: "robust across date FE only (0.301, t=9.30), fund FE only (0.110, t=3.64), Fama-MacBeth (0.210, t=5.61) (Table 4 Panel A)"
    - ref: R3
      outcome: mutual fund flows
      metric: coefficient
      value: "LA: 0.839 (t=14.17); CC: 0.974 (t=15.12); PW: 0.623 (t=9.59) individually; joint regression with TK: LA=0.415 (t=5.77), CC=0.598 (t=7.78), PW=0.233 (t=3.55), TK=0.383 (t=11.27) (Table 5)"
      direction: positive
    - ref: R4
      outcome: prospect theory preference parameters revealed from fund flow choices
      metric: coefficient
      value: "lambda=1.824 (SE=0.110, 99% CI [1.529, 2.119]); alpha=0.745 (SE=0.061); gamma=0.110 (SE=0.028); delta=0.228 (SE=0.041) (Table 8 Panel A)"
      direction: positive
      vsBenchmark: "lambda falls between lab-based values of 2.25 (Tversky and Kahneman 1992) and 1.31 (Walasek et al. 2018)"
    - ref: R5
      outcome: individual investor mutual fund holdings and net buying
      metric: coefficient
      value: "Holdings/balance%: 45.357 (t=4.73); NetBuy/balance%: 6.260 (t=3.95) (Table 7)"
      direction: positive
    - ref: R6
      outcome: mutual fund new subscriptions
      metric: coefficient
      value: "New subscriptions: 0.214 (t=2.31); Redemptions: -0.047 (t=-0.43, insignificant) (Table 6)"
      direction: mixed
    - ref: R7
      outcome: future four-factor fund alpha
      metric: coefficient
      value: "TK-driven flow: -0.001 (t=-2.07) at 1-month horizon; non-TK-driven flow: +0.006 (t=5.62) at 1-month horizon (Table 17 Panels B, C)"
      direction: negative
      vsBenchmark: non-TK-driven (smart-money) flows predict positive future alpha vs TK-driven (dumb-money) flows predict negative future alpha
  resultType: confirms
  relatesTo:
    - { cite: "Barberis et al. (2016)", doi: '10.1093/rfs/hhw049', relation: builds-on, note: "adopts their framework for representing a fund's past-return distribution and computing the prospect theory value (TK)" }
    - { cite: "Tversky and Kahneman (1992)", doi: '10.1007/bf00122574', relation: builds-on, note: "foundational cumulative prospect theory; value function, probability weighting functions, and standard parameter values used as defaults" }
    - { cite: "Kahneman and Tversky (1979)", doi: '10.2307/1914185', relation: builds-on, note: "original prospect theory establishing reference dependence and loss aversion" }
    - { cite: "Gu and Yoo (2021)", doi: '10.1016/j.econlet.2021.109776', relation: extends, note: "concurrent work documenting TK predicts fund flows; this paper adds probability weighting evidence, account-level data, and revealed preference estimation" }
    - { cite: "Barberis et al. (2021)", doi: '10.1111/jofi.13061', relation: tests, note: "extends the prospect theory mechanism from stock market anomalies to the mutual fund investor demand setting" }
  openQuestions:
    - "Extension of the revealed preference analysis to other financial markets and asset classes beyond US equity mutual funds, to understand demand structure more broadly (conclusion, p. 18)."
    - "Supply-side behavior: how fund managers strategically adjust risk and portfolio characteristics to attract prospect-theory-driven investor flows, given the risk-shifting evidence in Section 5.2."
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full PDF read (20 pages, Tables 1-17); seven core results extracted with locators from Tables 2-8 and 17. Prospect theory equations transcribed from pp. 4-5. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; all seven rows confirmed. One fix: Eq. (1) corrected r_0 to r_1 (PDF skips the reference-point outcome; wiki had a spurious r_0 between r_{-1} and the gain outcomes)."
  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104221"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-18; two additional TDM-only entries (Elsevier TDM licenses, not user-facing CC grant)"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the prospect theory valuation framework it applies, and the empirical specifications behind the results: enough to know what it found and how, without reading all 20 pages. To replicate or extend it, read the original at the [DOI](https://doi.org/10.1016/j.jfineco.2025.104221).

## TL;DR

The paper tests whether prospect theory governs mutual fund investors' choices by constructing a prospect theory value measure (termed TK after Tversky and Kahneman 1992) for each fund from its past 60-month return distribution, then linking it to future flows. Analyzing roughly 2,698 active US equity mutual funds per month from January 1981 to June 2022, the paper finds that funds with higher TK values attract significantly larger subsequent flows, with a high-minus-low TK decile spread of about 1.4 percentage points per month. All four components of prospect theory (loss aversion, concavity/convexity, probability weighting, and reference dependence) independently and jointly predict flows. A revealed preference analysis using a discrete choice model on quarterly fund subscription data estimates a field loss-aversion coefficient of 1.824, between the lab-based values from Tversky and Kahneman (1992) and more recent meta-analytic estimates. Account-level evidence confirms that individual investors hold more and net-buy more of high-TK funds. TK-driven flows are followed by negative subsequent fund performance, pointing to a "dumb money" pattern consistent with non-fully rational demand. The paper extends the scope of Barberis et al. (2021), who document prospect theory in stock market anomalies, to the mutual fund investor demand setting, and provides a broader analysis than concurrent work by Gu and Yoo (2021).

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | High-minus-Low TK decile fund flow spread is positive, monotone, and significant | Table 2, p. 6 | EW: H-L = 1.3% per month (t=8.50); TNA-weighted: H-L = 1.4% per month (t=10.47); monotone from Low (-0.4%) to High (+0.9%) EW |
| R2 | TK positively and significantly predicts future fund flows in panel regressions | Table 3 col (4), p. 8 | Full-controls (fund+date FE): coeff=0.383\*\*\* (t=11.27); univariate: 0.604\*\*\* (t=26.89); one-SD increase in TK raises monthly flow by ~$11.16 million for median-TNA fund |
| R3 | Each feature of prospect theory independently predicts flows; all remain significant when combined | Table 5, p. 9 | LA alone: 0.839\*\*\* (t=14.17); CC alone: 0.974\*\*\* (t=15.12); PW alone: 0.623\*\*\* (t=9.59); joint regression: LA=0.415\*\*\* (t=5.77), CC=0.598\*\*\* (t=7.78), PW=0.233\*\*\* (t=3.55), TK=0.383\*\*\* (t=11.27) |
| R4 | Revealed preference analysis from field data recovers prospect theory parameters aligned with lab estimates | Table 8 Panel A, p. 13 | lambda (loss aversion)=1.824 (99% CI [1.529, 2.119]); alpha (curvature)=0.745; gamma (PW gain)=0.110; delta (PW loss)=0.228 |
| R5 | Account-level evidence confirms individual investors hold more and net-buy more of high-TK funds | Table 7, p. 11 | Holdings/balance%: coeff=45.357\*\*\* (t=4.73); NetBuy/balance%: 6.260\*\*\* (t=3.95) |
| R6 | TK predicts new fund subscriptions (purchase decisions) but not redemptions (sell decisions) | Table 6, p. 10 | New subscriptions: 0.214\*\*\* (t=2.31); Redemptions: -0.047 (t=-0.43, insignificant) |
| R7 | TK-driven flows predict negative future fund performance; non-TK-driven flows predict positive future performance | Table 17 Panels B and C, p. 18 | TK-driven flow: -0.001\*\* on 1-month four-factor alpha (t=-2.07); non-TK-driven flow: +0.006\*\*\* (t=5.62) |

**Overall (paper's conclusion).** Prospect theory offers a new framework for understanding mutual fund investor demand. Fund-level and account-level evidence confirm that investors' allocation choices are significantly shaped by each feature of prospect theory. The field-based parameter estimates align with lab-based findings, supporting the external validity of prospect theory as a description of investor preferences. Investors acting on prospect theory allocate more capital to funds with high prospect theory values, but those funds do not subsequently outperform, pointing to a "dumb money" pattern. The predictive power of TK is strongest for retail and broker-sold funds (less sophisticated investors) and weakens during recessions.

## Theory / model

The paper has no equilibrium model. It applies the cumulative prospect theory framework of Tversky and Kahneman (1992), as operationalized for the mutual fund context by Barberis et al. (2016). Kahneman and Tversky (1979) established the foundational properties this framework builds on: reference dependence, loss aversion, and probability weighting. The paper tests the hypothesis that investors evaluate mutual funds using this framework when making capital allocation choices.

**Representation.** For each mutual fund with at least 60 months of past returns, the 60 monthly excess returns (returns minus the risk-free rate) are sorted in ascending order and assigned equal probability 1/60. The resulting mental representation of the fund's future prospects is (p. 4, Eq. 1):

$$\left(r_{-m},\,\tfrac{1}{60};\;\ldots;\;r_{-1},\,\tfrac{1}{60};\;r_1,\,\tfrac{1}{60};\;\ldots;\;r_{n-1},\,\tfrac{1}{60};\;r_n,\,\tfrac{1}{60}\right) \tag{1}$$

where $$r_{-m}$$ to $$r_{-1}$$ are loss outcomes (negative excess returns) and $$r_1$$ to $$r_n$$ are gain outcomes. The reference point is the risk-free rate.

**Valuation: value function.** Each outcome is evaluated by the prospect theory value function (p. 4, Eq. 5):

$$v(x) = \begin{cases} x^{\alpha} & x \geq 0 \\ -\lambda(-x)^{\alpha} & x < 0 \end{cases} \tag{5}$$

where $$\alpha \in (0,1)$$ governs the curvature (concave over gains, convex over losses, giving an S-shaped function) and $$\lambda > 1$$ is the loss aversion coefficient (losses loom larger than gains of equal magnitude).

**Valuation: probability weighting.** Objective probabilities are replaced by transformed decision weights using the weighting functions (p. 4, Eq. 6):

$$w^+(P) = \frac{P^{\gamma}}{(P^{\gamma} + (1-P)^{\gamma})^{1/\gamma}}, \qquad w^-(P) = \frac{P^{\delta}}{(P^{\delta} + (1-P)^{\delta})^{1/\delta}} \tag{6}$$

where $$\gamma, \delta \in (0,1)$$, with smaller values indicating stronger overweighting of tail events. The $$w^+$$ function applies to gains and $$w^-$$ to losses.

**TK measure.** Combining value function and probability weights gives the prospect theory value of a fund (p. 4, Eq. 7):

$$\text{TK} = \sum_{i=-m}^{-1} v(r_i)\!\left[w^-\!\!\left(\tfrac{i+m+1}{60}\right) - w^-\!\!\left(\tfrac{i+m}{60}\right)\right] + \sum_{i=1}^{n} v(r_i)\!\left[w^+\!\!\left(\tfrac{n-i+1}{60}\right) - w^+\!\!\left(\tfrac{n-i}{60}\right)\right] \tag{7}$$

The standard parameter values from Tversky and Kahneman (1992) are used as defaults (p. 4, Eq. 8):

$$\alpha = 0.88, \quad \lambda = 2.25, \quad \gamma = 0.61, \quad \delta = 0.69 \tag{8}$$

**Testable hypothesis.** If prospect theory describes how investors evaluate mutual funds, then funds with higher TK will attract more capital flows, holding other known determinants constant.

## Method

**TK construction.** For each fund-month, the preceding 60 monthly excess returns are sorted ascending, the risk-free rate is used as the reference point, and TK is computed by applying Eq. (7). The paper is robust to alternative reference points (market returns, style benchmarks, zero, and expectation-based benchmarks per Koszegi and Rabin 2006 and 2009) and alternative windows (55, 57, 59, 61, 63, 65 months, and quarterly or semi-annual compounding), as documented in Internet Appendix Tables B1-B9.

**Mutual fund flows.** Fund flow is the percentage growth of net new assets following the standard definition (p. 5, Eq. 9):

$$\text{Flow}_{i,t} = \frac{TNA_{i,t} - TNA_{i,t-1}(1 + r_{i,t})}{TNA_{i,t-1}} \tag{9}$$

where $$TNA_{i,t}$$ is total net assets of fund $$i$$ at the end of month $$t$$ and $$r_{i,t}$$ is the net return. Flows are winsorized at the 5th and 95th percentiles. Factor loadings and alphas use a rolling 60-month window.

**Revealed preference analysis (Section 4.3).** To estimate the prospect theory parameters $$\theta = [\alpha, \lambda, \gamma, \delta]$$ from field data rather than laboratory experiments, the paper specifies a discrete choice model in which each investor in a given quarter chooses among $$J$$ actively managed equity funds plus a Vanguard index fund baseline (fund 0, utility normalized to zero). The utility of fund $$i$$ is (p. 11, Eq. 13):

$$\delta_i = \beta TK_i(\theta, R_i) + c_x \sum_k x_k^i + e_i \tag{13}$$

where $$TK_i(\theta, R_i)$$ is the TK value computed from the fund's historical returns $$R_i$$ under parameter vector $$\theta$$, $$x_k^i$$ are fund characteristics (size, turnover ratio, expense ratio), and $$e_i$$ is an iid type-I extreme-value error. The multinomial logit probability is $$\text{Prob}_j = e^{\delta_j} / \sum_{j=0}^J e^{\delta_j}$$. Quarterly market shares $$s_j = f_j / \sum_{j=0}^J f_j$$ (new subscription shares, constructed from CRSP subscription data) are used to estimate $$\theta$$ by maximum likelihood (p. 11, Eq. 14):

$$\ln L = \ln \prod_{j=0}^{J} \text{Prob}_j^{f_j} \tag{14}$$

MLE is run separately for each quarter from 2013 to 2022, yielding a time series of estimated parameter vectors $$\hat{\theta}_t = [\hat{\alpha}_t, \hat{\lambda}_t, \hat{\gamma}_t, \hat{\delta}_t]$$. Averages and standard errors across quarters are reported in Table 8 Panel A. The approach draws on the `revealed-preference` framework applied to consumer discrete choices.

## Empirical specifications

**Main panel regression (R2, baseline for all robustness).** The central specification regresses monthly fund flow on lagged TK with fund and date fixed effects (p. 6, Eq. 10):

$$\text{Flow}_{i,t} = \beta TK_{i,t-1} + \gamma X_{i,t-1} + \phi_i + \eta_t + \varepsilon_{i,t} \tag{10}$$

where $$\phi_i$$ are fund fixed effects, $$\eta_t$$ are date (year-month) fixed effects, and $$X_{i,t-1}$$ is a vector of controls: cumulative 60-month returns, CAPM alpha, FF4 alpha, factor loadings on market, SMB, HML, and MOM, FF4 R-squared, return volatility, log age, log TNA, expense ratio, and turnover ratio. Standard errors are two-way clustered at the fund and date levels (Table 3). Sample: January 1981 to June 2022, averaging ~860,000 fund-month observations.

**Portfolio sorts (R1).** Each month, funds with at least 60 months of history are sorted into deciles by $$TK_{t-1}$$ and average flows in the subsequent month are computed per decile with both equal weights and TNA weights (Table 2). Time-series means are compared; t-statistics use Newey-West standard errors with 12 lags. The sample spans January 1986 to June 2022.

**Prospect theory feature decomposition (R3).** Three alternative prospect theory values are constructed by fixing the parameters that turn off each feature: LA (loss aversion only: $$\alpha=1, \gamma=1, \delta=1$$); CC (concavity/convexity only: $$\lambda=1, \gamma=1, \delta=1$$); PW (probability weighting only: $$\alpha=1, \lambda=1$$). Each component is substituted for TK in Eq. (10). Table 5 reports results for each component separately and jointly (Table 5 col 5 repeats the baseline with full TK as a reference).

**Alternative specifications for persistent regressors (Table 4).** Three approaches address Stambaugh (1999) bias from the persistent nature of TK: (1) first-difference estimator; (2) recursive demeaning from Hjalmarsson (2010) and Pastor, Stambaugh, and Taylor (2015), using the backward-demeaned TK as an instrument; (3) Amihud and Hurvich (2004) bias correction. TK coefficients range from 0.450 to 0.643 (all significant), confirming the baseline.

**Account-level regressions (R5).** Using retail brokerage data from Barber and Odean (2000) at the investor-fund-month level with account and date fixed effects (p. 10, Eqs. 11-12):

$$\text{AmtHeld}_{i,j,t} = \beta TK_{j,t-1} + \gamma X_{j,t} + \lambda_i + \eta_t + \varepsilon_{i,j,t} \tag{11}$$

$$\text{NetBuy}_{i,j,t} = \beta TK_{j,t-1} + \gamma X_{j,t} + a_i + \eta_t + \varepsilon_{i,j,t} \tag{12}$$

where $$\text{AmtHeld}_{i,j,t}$$ is dollars held in fund $$j$$ by investor $$i$$ at date $$t$$ scaled by account balance (%) or fund size (bps), and $$\text{NetBuy}_{i,j,t}$$ is the net transaction amount similarly scaled. Controls are the same as in Eq. (10) but at the share-class level. Standard errors cluster at account and date levels. Sample: 1991-1996, ~1.3 million investor-fund-month observations.

**Subsequent fund performance (R7).** Fund flows are decomposed into a TK-driven component and a non-TK-driven component by regressing fund-level flows on lagged TK. TK-driven flows are the fitted values $$\hat{\delta}TK_{i,t-1}$$; non-TK-driven flows are the residuals $$\hat{u}_{it}$$. Fama-MacBeth regressions with future Fama-French four-factor alpha as the dependent variable test predictability at horizons of 1, 3, and 12 months (Table 17). Non-TK-driven flows consistently predict positive future alpha; TK-driven flows predict negative future alpha at short horizons.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP Survivor-Bias-Free US Mutual Fund Database | Primary sample: monthly fund returns, TNA, expenses, share classes, new subscriptions, and redemptions | [CRSP Mutual Funds](/wiki/commercial/crsp-mutual-funds/) |
| Thomson Reuters Mutual Fund Holdings (via MFLINKS) | Holdings-based TK measure in Section 5.2; linked to CRSP via MFLINKS | [CRSP Mutual Funds](/wiki/commercial/crsp-mutual-funds/) |
| Morningstar fund ratings (5-year star rating) | Control variable; Morningstar Risk Adjusted Return (MRAR) used in Table 12 | [Morningstar](/wiki/commercial/morningstar/) |
| Kenneth French Data Library | Four-factor returns (market, SMB, HML, MOM) for computing alphas and factor loadings; value-weighted market return | [Ken French library](/wiki/datasets/ken-french/) |
| Barber and Odean (2000) retail brokerage account data | Account-level holdings and transaction data for Section 4.2 account-level evidence | No page yet |

Sample: January 1981 to June 2022 (41 years, monthly). Equity mutual funds only (excluding ETFs, ETNs, variable annuities, index funds). Funds require at least 60 months of history for TK construction. Account-level subsample: 1991 to 1996 from the retail brokerage.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104221) if you are: testing prospect theory in other financial markets or with other investor populations; replicating the revealed preference parameter estimation (Internet Appendix B and Tables B1-B10 document construction details and robustness); studying investor heterogeneity across fund distribution channels or sophistication levels (Sections 6.1-6.2 and Tables 14-16); or investigating the supply-side response of fund managers to prospect-theory-driven investor demand (Section 5.2 and Table 11). The locators above point to the exact tables.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics*, volume 176 (2026), article 104221. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Han, Bing, Pengfei Sui, and Wenhao Yang.
> "Prospect theory in the field: Revealed preferences from mutual fund flows."
> *Journal of Financial Economics* 176 (2026): 104221.
> DOI: 10.1016/j.jfineco.2025.104221. © 2025 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
