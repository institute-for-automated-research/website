---
title: "Prospect Theory in the Field: Han, Sui & Yang (2026)"
description: >-
  Distilled: Funds whose past returns generate higher prospect theory value attract larger future flows,
  a pattern supported by panel regressions and 1991-1996 account-level trading data.
  A revealed preference analysis recovers loss aversion of 1.824 and curvature of 0.745, aligned
  with lab-based studies. Journal of Financial Economics 2026, CC BY 4.0. Twenty-three core results with
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
    - future four-factor fund alpha
    - fund-level prospect theory value (TK)
  outcomeClass: [fund-behavior, household-finance, security-returns]
  license: "CC BY 4.0 (confirmed via Crossref: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-18; corroborated by artifact p. 1 notice 'open access article under the CC BY license')"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "blocked-paywall (Elsevier ScienceDirect wrapper; CC BY VOR confirmed via Crossref 2026-06-24)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 23
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
    granularity: [individual, firm, security, transaction]
    n: "~860,000 fund-month observations (Table 3); account-level subsample: ~1.3M investor-fund-month observations (Table 7)"
  findings:
    - { ref: R1, outcome: mutual fund flows, metric: pp-effect, value: "H-L TK decile flow: 1.3% per month (EW, t=8.50); 1.4% per month (TNA-weighted, t=10.47)", direction: positive, vsBenchmark: monotone increase across deciles in EW and TNA-weighted portfolios }
    - { ref: R2, outcome: mutual fund flows, metric: coefficient, value: "0.383 (t=11.27) with fund and date FE plus full controls; 0.604 (t=26.89) univariate", direction: positive, vsBenchmark: robust across fixed-effects and Fama-MacBeth specifications }
    - { ref: R3, outcome: mutual fund flows, metric: coefficient, value: "LA: 0.839 (t=14.17); CC: 0.974 (t=15.12); PW: 0.623 (t=9.59); joint LA=0.415 (t=5.77), CC=0.598 (t=7.78), PW=0.233 (t=3.55), TK=0.383 (t=11.27)", direction: positive }
    - { ref: R4, outcome: prospect theory preference parameters revealed from fund flow choices, metric: coefficient, value: "lambda=1.824 (SE=0.110, 99% CI [1.529, 2.119]); alpha=0.745 (SE=0.061); gamma=0.110 (SE=0.028); delta=0.228 (SE=0.041)", direction: positive, vsBenchmark: lambda lies between Tversky and Kahneman (1992) value 2.25 and Walasek et al. (2018) value 1.31 }
    - { ref: R5, outcome: individual investor mutual fund holdings and net buying, metric: coefficient, value: "Holdings/balance%: 45.357 (t=4.73); NetBuy/balance%: 6.260 (t=3.95)", direction: positive }
    - { ref: R6, outcome: mutual fund flows, metric: coefficient, value: "New subscriptions: 0.214 (t=2.31); redemptions: -0.047 (t=-0.43, insignificant)", direction: mixed }
    - { ref: R7, outcome: future four-factor fund alpha, metric: coefficient, value: "TK-driven flow: -0.001 (t=-2.07) at 1-month horizon; non-TK-driven flow: +0.006 (t=5.62) at 1-month horizon", direction: mixed, vsBenchmark: non-TK-driven flows predict positive future alpha while TK-driven flows predict negative future alpha }
    - { ref: R8, outcome: mutual fund flows, metric: coefficient, value: "Date FE: 0.301 (t=9.30); fund FE: 0.110 (t=3.64); Fama-MacBeth: 0.210 (t=5.61); first difference: 0.643 (t=3.79); recursive demean: 0.450 (t=5.56); Amihud-Hurvich: 0.632 (t=5.97)", direction: positive }
    - { ref: R9, outcome: prospect theory preference parameters revealed from fund flow choices, metric: coefficient, value: "Lagged market return: -1.084 (t=-2.03); lagged S&P 500 return: -1.175 (t=-2.12)", direction: negative }
    - { ref: R10, outcome: mutual fund flows, metric: coefficient, value: "Loss/Gain ratio: -0.010 (t=-2.89); separate model Total loss: -0.018 (t=-6.19), Total gain: 0.007 (t=2.31)", direction: mixed }
    - { ref: R11, outcome: fund-level prospect theory value (TK), metric: coefficient, value: "Loss/Gain ratio: -0.012 (t=-7.17); Total loss: -0.020 (t=-11.19), Total gain: 0.006 (t=3.87); cumulative returns: 0.008 / 0.005; volatility: -0.497 / -0.244; skewness: 0.005 / 0.006", direction: mixed }
    - { ref: R12, outcome: fund-level prospect theory value (TK), metric: coefficient, value: "Average stock TK: 0.164 (t=4.74); held-portfolio TK: 0.405 (t=17.69)", direction: positive }
    - { ref: R13, outcome: fund-level prospect theory value (TK), metric: coefficient, value: "Holding HHI: -0.009 (t=-2.87)", direction: negative }
    - { ref: R14, outcome: fund-level prospect theory value (TK), metric: coefficient, value: "Risk-shifting measure: 0.121 (t=5.36)", direction: positive }
    - { ref: R15, outcome: mutual fund flows, metric: coefficient, value: "With rating controls TK=0.140 to 0.145 (fund level), 0.119 to 0.120 (share-class); with MRAR TK=0.349 / 0.387 and MRAR=0.043 / 0.001", direction: positive }
    - { ref: R16, outcome: mutual fund flows, metric: coefficient, value: "TK=0.247 (t=6.70), 0.354 (t=10.59), 0.327 (t=9.80), 0.295 (t=6.58); EX=1.177 (t=15.90), ST=0.106 (t=12.25), MAX=9.566 (t=13.25), skewness=0.002 (t=3.78)", direction: positive }
    - { ref: R17, outcome: mutual fund flows, metric: coefficient, value: "Institutional x TK: -0.033 (t=-2.22); retail x TK: 0.024 (t=1.95)", direction: mixed }
    - { ref: R18, outcome: mutual fund flows, metric: coefficient, value: "Broker-sold x TK: 0.038 (t=3.22); direct-sold x TK: -0.036 (t=-2.76)", direction: mixed }
    - { ref: R19, outcome: mutual fund flows, metric: coefficient, value: "TK x high sentiment: 0.074 (t=1.71)", direction: positive }
    - { ref: R20, outcome: mutual fund flows, metric: coefficient, value: "TK x recession: -0.099 (t=-2.15)", direction: negative }
    - { ref: R21, outcome: future four-factor fund alpha, metric: coefficient, value: "TK: -0.014 (t=-0.39) at 1 month; -0.053 (t=-0.52) at 3 months; -0.380 (t=-1.13) at 12 months, all insignificant", direction: none }
    - { ref: R22, outcome: future four-factor fund alpha, metric: coefficient, value: "TK-driven flow: -0.001 (t=-2.07), -0.003 (t=-1.87), -0.008 (t=-1.56); non-TK-driven flow: 0.006 (t=5.62), 0.009 (t=4.27), 0.010 (t=2.31), at 1, 3, 12 months", direction: mixed }
    - { ref: R23, outcome: fund-level prospect theory value (TK), metric: level, value: "ADF modified inverse chi-squared statistic: 18.98 (p close to zero); Im-Pesaran-Shin Z-bar: -10.17 (p close to zero)", direction: positive }
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
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 20-page PDF; added 16 result rows and matching findings, completed equations (1)-(14) and empirical specifications, and added the moral-hazard mechanism plus a staged unit-root-statistic metric. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 23 Core results, equations, specifications, classifications, findings, prose, locators, and frontmatter against the PDF; corrected Table 2 and Table 4 PDF pages, average fund-size wording, 12-month significance framing, feature claims, account-data dates, and one findings direction. Locator and relatesTo checks pass. Findings pass (2026-10-04): added the R23 finding." }
  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104221"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-18; two additional TDM-only entries (Elsevier TDM licenses, not user-facing CC grant)"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the prospect theory valuation framework it applies, and the empirical specifications behind the results: enough to know what it found and how, without reading all 20 pages. To replicate or extend it, read the original at the [DOI](https://doi.org/10.1016/j.jfineco.2025.104221).

## TL;DR

The paper tests whether prospect theory governs mutual fund investors' choices by constructing a prospect theory value measure (termed TK after Tversky and Kahneman 1992) for each fund from its past 60-month return distribution, then linking it to future flows. Analyzing roughly 2,698 active US equity mutual funds per month from January 1981 to June 2022, the paper finds that funds with higher TK values attract significantly larger subsequent flows, with a high-minus-low TK decile spread of about 1.4 percentage points per month. Each of the three components tested separately (loss aversion, concavity/convexity, and probability weighting) predicts flows independently, and all remain significant together; reference dependence enters through the choice of reference point and its robustness checks. A revealed preference analysis using a discrete choice model on quarterly fund subscription data estimates a field loss-aversion coefficient of 1.824, between the values reported by Tversky and Kahneman (1992) and Walasek et al. (2018). Account-level evidence from 1991-1996 confirms that individual investors hold more and net-buy more of high-TK funds. TK-driven flows are followed by negative subsequent fund performance, pointing to a "dumb money" pattern consistent with non-fully rational demand. The paper extends the scope of Barberis et al. (2021), who document prospect theory in stock market anomalies, to the mutual fund investor demand setting, and provides a broader analysis than concurrent work by Gu and Yoo (2021).

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | High-minus-Low TK decile fund flow spread is positive, monotone, and significant | Table 2, p. 7 | EW: H-L = 1.3% per month (t=8.50); TNA-weighted: H-L = 1.4% per month (t=10.47); monotone from Low (-0.4%) to High (+0.9%) EW |
| R2 | TK positively and significantly predicts future fund flows in panel regressions | Table 3 col (4), p. 8 | Full-controls (fund+date FE): coeff=0.383\*\*\* (t=11.27); univariate: 0.604\*\*\* (t=26.89); one-SD increase in TK raises monthly flow by ~$11.16 million for a fund with average TNA |
| R3 | Each of the three tested prospect-theory components independently predicts flows; all remain significant when combined | Table 5, p. 9 | LA alone: 0.839\*\*\* (t=14.17); CC alone: 0.974\*\*\* (t=15.12); PW alone: 0.623\*\*\* (t=9.59); joint regression: LA=0.415\*\*\* (t=5.77), CC=0.598\*\*\* (t=7.78), PW=0.233\*\*\* (t=3.55), TK=0.383\*\*\* (t=11.27) |
| R4 | Revealed preference analysis from field data recovers prospect theory parameters aligned with lab estimates | Table 8 Panel A, p. 13 | lambda (loss aversion)=1.824 (99% CI [1.529, 2.119]); alpha (curvature)=0.745; gamma (PW gain)=0.110; delta (PW loss)=0.228 |
| R5 | Account-level evidence confirms individual investors hold more and net-buy more of high-TK funds | Table 7, p. 11 | Holdings/balance%: coeff=45.357\*\*\* (t=4.73); NetBuy/balance%: 6.260\*\*\* (t=3.95) |
| R6 | TK predicts new fund subscriptions (purchase decisions) but not redemptions (sell decisions) | Table 6, p. 10 | New subscriptions: 0.214\*\*\* (t=2.31); Redemptions: -0.047 (t=-0.43, insignificant) |
| R7 | TK-driven flows predict negative future fund performance; non-TK-driven flows predict positive future performance | Table 17 Panels B and C, p. 18 | TK-driven flow: -0.001\*\* on 1-month four-factor alpha (t=-2.07); non-TK-driven flow: +0.006\*\*\* (t=5.62) |
| R8 | Alternative fixed-effects, Fama-MacBeth, first-difference, recursive-demeaning, and bias-corrected estimates retain a positive TK-flow relation | Table 4 Panels A-B, p. 9 | Date FE: 0.301\*\*\* (t=9.30); fund FE: 0.110\*\*\* (t=3.64); Fama-MacBeth: 0.210\*\*\* (t=5.61); first difference: 0.643\*\*\* (t=3.79); recursive demean: 0.450\*\*\* (t=5.56); Amihud-Hurvich: 0.632\*\*\* (t=5.97) |
| R9 | Prior market gains predict lower revealed loss aversion in the next quarter | Table 8 Panel B, p. 13 | Market return: -1.084\* (t=-2.03); S&P 500 return: -1.175\*\* (t=-2.12); N=30 quarters |
| R10 | Loss-gain indicators predict flows with the direction and asymmetry expected under loss aversion | Table 9, p. 13 | Loss/Gain ratio: -0.010\*\*\* (t=-2.89); separate specification Total loss: -0.018\*\*\* (t=-6.19), Total gain: 0.007\*\* (t=2.31) |
| R11 | TK covaries with past return moments and loss-gain characteristics | Table 10, p. 14 | Loss/Gain ratio: -0.012\*\*\* (t=-7.17); Total loss: -0.020\*\*\* (t=-11.19), Total gain: 0.006\*\*\* (t=3.87); cumulative return: 0.008\*\*\* / 0.005\*\*\*; volatility: -0.497\*\*\* / -0.244\*\*\*; skewness: 0.005\*\*\* / 0.006\*\*\* (two specifications) |
| R12 | Funds' holdings-based prospect values positively relate to fund-level TK | Table 11 cols. (1)-(2), p. 14 | Average stock TK: 0.164\*\*\* (t=4.74); TK of held portfolio: 0.405\*\*\* (t=17.69) |
| R13 | More concentrated holdings are associated with lower fund TK | Table 11 col. (3), p. 14 | Holding HHI: -0.009\*\*\* (t=-2.87) |
| R14 | Funds with greater risk shifting have higher TK values | Table 11 col. (4), p. 14 | Risk shifting: 0.121\*\*\* (t=5.36) |
| R15 | TK remains predictive after controlling for Morningstar ratings and MRAR | Table 12 Panels A-B, p. 15 | Ratings controls: TK=0.140\*\*\* to 0.145\*\*\* (fund level), 0.119\*\*\* to 0.120\*\*\* (share-class); with MRAR: TK=0.349\*\*\* / 0.387\*\*\* and MRAR=0.043\*\*\* / 0.001\*\*\* |
| R16 | TK adds predictive power beyond return extrapolation, salience, maximum returns, and skewness | Table 13, p. 16 | TK=0.247\*\*\* (t=6.70), 0.354\*\*\* (t=10.59), 0.327\*\*\* (t=9.80), 0.295\*\*\* (t=6.58); EX=1.177\*\*\* (15.90), ST=0.106\*\*\* (12.25), MAX=9.566\*\*\* (13.25), skewness=0.002\*\*\* (3.78) |
| R17 | The TK-flow relation is stronger among retail funds and weaker among institutional funds | Table 14, p. 16 | Institutional x TK: -0.033\*\* (t=-2.22); Retail x TK: 0.024\* (t=1.95) |
| R18 | TK predicts flows more strongly for broker-sold than directly sold funds | Table 15, p. 16 | Broker Sold x TK: 0.038\*\*\* (t=3.22); Direct Sold x TK: -0.036\*\*\* (t=-2.76) |
| R19 | The TK-flow relation strengthens during high investor sentiment | Table 16 col. (1), p. 16 | TK x High sentiment: 0.074\* (t=1.71); high sentiment is above the sample 75th percentile |
| R20 | The TK-flow relation weakens during NBER recessions | Table 16 col. (2), p. 16 | TK x Recession: -0.099\*\* (t=-2.15) |
| R21 | TK itself does not significantly predict future four-factor alpha at the reported horizons | Table 17 Panel A, p. 18 | TK coefficients: -0.014 (t=-0.39) at 1 month, -0.053 (t=-0.52) at 3 months, -0.380 (t=-1.13) at 12 months |
| R22 | TK-driven flow coefficients are negative at all horizons, significant at 1 and 3 months; non-TK-driven flows predict higher alpha at all horizons | Table 17 Panels B-C, p. 18 | TK-driven flow: -0.001\*\* (t=-2.07), -0.003\* (t=-1.87), -0.008 (t=-1.56); non-TK-driven flow: 0.006\*\*\* (t=5.62), 0.009\*\*\* (t=4.27), 0.010\*\* (t=2.31) at 1, 3, 12 months respectively; 1-SD TK-flow effect at 3 months: -31 annualized basis points |
| R23 | Panel unit-root tests reject a unit root in TK | text p. 8 | Augmented Dickey-Fuller modified inverse chi-squared statistic: 18.98 (p close to zero); Im-Pesaran-Shin Z-bar: -10.17 (p close to zero) |

**Overall (paper's conclusion).** Prospect theory offers a new framework for understanding mutual fund investor demand. Fund-level and account-level evidence show that investors' allocation choices align with prospect theory, and each of the three separately tested components predicts flows. The field-based parameter estimates align with lab-based findings, supporting the external validity of prospect theory as a description of investor preferences. Investors acting on prospect theory allocate more capital to funds with high prospect theory values, but those funds do not subsequently outperform, pointing to a "dumb money" pattern. The predictive power of TK is strongest for retail and broker-sold funds (less sophisticated investors) and weakens during recessions.

## Theory / model

The paper has no equilibrium model. It applies cumulative prospect theory, using the return-distribution representation of Barberis et al. (2016) and the value and weighting functions of Tversky and Kahneman (1992), building on the foundational reference dependence and loss aversion in Kahneman and Tversky (1979). Its central prediction is that funds with higher prospect theory value attract more capital. The paper tests loss aversion, concavity/convexity, and probability weighting as separate demand components, uses alternative reference points in robustness checks, and documents managers' risk shifting alongside investor demand.

**Representation.** For each fund with at least 60 months of history, the preceding monthly excess returns relative to the risk-free rate are sorted into losses and gains and assigned equal probabilities (p. 4, Eq. 1):

$$\left(r_{-m},\tfrac{1}{60};\ldots;r_{-1},\tfrac{1}{60};r_1,\tfrac{1}{60};\ldots;r_n,\tfrac{1}{60}\right),\qquad m+n=60.\tag{1}$$

For a general gamble with payoffs and probabilities (p. 4, Eq. 2):

$$\left(x_{-m},p_{-m};\ldots;x_{-1},p_{-1};x_0,p_0;x_1,p_1;\ldots;x_n,p_n\right).\tag{2}$$

The prospect value assigned to this gamble is the sum of decision-weighted payoffs (p. 4, Eq. 3):

$$\sum_{i=-m}^{n}\pi_i v(x_i).\tag{3}$$

Cumulative decision weights differ for gains and losses (p. 4, Eq. 4):

$$\pi_i=\begin{cases}w^+(p_i+\cdots+p_n)-w^+(p_{i+1}+\cdots+p_n),&0\leq i\leq n,\\w^-(p_{-m}+\cdots+p_i)-w^-(p_{-m}+\cdots+p_{i-1}),&-m\leq i<0.\end{cases}\tag{4}$$

The value function and probability weighting functions are (p. 4, Eqs. 5-6):

$$v(x)=\begin{cases}x^\alpha,&x\geq0,\\-\lambda(-x)^\alpha,&x<0.\end{cases}\tag{5}$$

$$w^+(P)=\frac{P^\gamma}{\left(P^\gamma+(1-P)^\gamma\right)^{1/\gamma}},\qquad w^-(P)=\frac{P^\delta}{\left(P^\delta+(1-P)^\delta\right)^{1/\delta}}.\tag{6}$$

Applying the value and weighting functions to the ordered 60-month return distribution gives the fund's TK value (p. 4, Eq. 7):

$$\text{TK}=\sum_{i=-m}^{-1}v(r_i)\left[w^-\!\left(\frac{i+m+1}{60}\right)-w^-\!\left(\frac{i+m}{60}\right)\right]+\sum_{i=1}^{n}v(r_i)\left[w^+\!\left(\frac{n-i+1}{60}\right)-w^+\!\left(\frac{n-i}{60}\right)\right].\tag{7}$$

The default parameters are from Tversky and Kahneman (1992) (p. 4, Eq. 8):

$$\alpha=0.88,\quad\lambda=2.25,\quad\gamma=0.61,\quad\delta=0.69.\tag{8}$$

**Revealed-preference choice model.** Investors choose among J active domestic equity funds and a Vanguard index-fund baseline. Utility includes parameterized TK, fund characteristics, and an iid type-I extreme-value error. The baseline utility is zero, yielding multinomial-logit choice probabilities (p. 11, Eq. 13):

$$\delta_i=b\,\text{TK}_i(\theta,R_i)+\sum_k c_k x_k^i+e_i,\qquad \theta=[\alpha,\lambda,\gamma,\delta],\qquad \text{Prob}_i=\frac{e^{\delta_i}}{\sum_{j=0}^{J}e^{\delta_j}},\quad\delta_0=0.\tag{13}$$

Quarterly subscription shares enter the likelihood used to estimate the parameter vector (p. 12, Eq. 14):

$$s_j=\frac{f_j}{\sum_{j=0}^{J}f_j},\qquad \ln L=\ln\prod_{j=0}^{J}\text{Prob}_j^{s_j}.\tag{14}$$

Quarter-by-quarter maximum likelihood uses 2013-2022 subscription data, limited to quarters with more than 1,000 nonmissing observations (pp. 11-12). This is a revealed-preference model, not a general equilibrium model.

## Method

The main source is CRSP Survivor-Bias-Free US Mutual Fund Database. The equity fund sample spans January 1981-June 2022, excludes ETFs/ETNs, variable annuities, and index funds, and averages 2,698 funds per month (p. 5). Full-control Table 3 has 859,562 fund-month observations (p. 8). TK uses each fund's prior 60 monthly excess returns. Flows are percentage growth of new assets, winsorized at the 5th and 95th percentiles. Other sources include Thomson Reuters Mutual Fund Holdings linked by MFLINKS, Morningstar ratings and MRAR, Kenneth French factors, quarterly new subscriptions, and the Barber-Odean brokerage sample (1991-1996).

For portfolio sorts, funds are sorted monthly on prior-month TK and next-month flows are averaged equal-weighted and TNA-weighted. The section text gives January 1986-June 2022, while the Table 2 note states January 1981-June 2022; both report Newey-West standard errors with 12 lags (Table 2, p. 6). Panel regressions use fund and date fixed effects and cluster errors by fund and date. Persistence checks include panel unit-root tests, first differences, recursive demeaning with an instrument, and Amihud-Hurvich correction. The ADF modified inverse chi-squared statistic is 18.98 (p close to zero) and the Im-Pesaran-Shin Z-bar is -10.17 (p close to zero; text p. 8). Account-level estimates use account and date fixed effects and account/date clustered errors (Table 7, p. 11). Fama-MacBeth specifications use table-specific Newey-West corrections.

The flow outcome is defined as follows (p. 5, Eq. 9):

$$\text{Flow}_{i,t}=\frac{\text{TNA}_{i,t}-\text{TNA}_{i,t-1}(1+r_{i,t})}{\text{TNA}_{i,t-1}}.\tag{9}$$

## Empirical specifications

**Baseline fund-flow panel, results R2-R3 and R6.** The main estimating equation is (p. 6, Eq. 10):

$$\text{Flow}_{i,t}=b\,\text{TK}_{i,t-1}+cX_{i,t-1}+\phi_i+\eta_t+\epsilon_{i,t}.\tag{10}$$

Table 3's full-control model uses fund/date fixed effects, two-way clustered standard errors, and monthly data from January 1981-June 2022 (p. 8). Controls include trailing 60-month cumulative returns and CAPM alpha, four-factor loadings and R-squared, volatility, age, TNA, expense ratio, and turnover. Table 5 substitutes LA, CC, and PW for TK separately and jointly, with these same controls and fixed effects (p. 9). Table 6 uses new subscriptions or redemptions as the outcome, fund and year fixed effects as tabulated, controls and fund/date clustered errors; sample July 2003-June 2022 (p. 10).

**Portfolio sorts, R1.** Monthly deciles on prior-month TK predict next-month flows, with both equal and TNA weights. Newey-West standard errors use 12 lags (Table 2, p. 6).

**Persistence checks, R8.** Table 4 Panel A runs date-FE-only, fund-FE-only, and Fama-MacBeth variants. Panel B estimates first differences; recursive demeaning uses forward-demeaned flow and TK with backward-demeaned lagged TK as an instrument; the final column adds an Amihud-Hurvich correction in fund time-series regressions. Controls match Table 3 column (4), and the sample is January 1981-June 2022. Table 4 reports standard errors clustered at fund and date levels; Panel A has date FE only, fund FE only, or period-by-period Fama-MacBeth cross-sections, while Panel B uses first differences, recursive demeaning, or fund-level time-series regressions (Table 4, p. 8). The recursive-demeaning first and second stages are:

$$\text{TK}^{F}_{i,t-1}=b\,\text{TK}^{B}_{i,t-1}+cX_{i,t-1}+e_{i,t-1}.$$

$$\text{Flow}^{F}_{i,t}=\beta\widehat{\text{TK}}^{F}_{i,t-1}+\gamma X_{i,t-1}+\epsilon_{i,t}.$$

**Account-level holdings and buying, R5.** The equations for amount held and net buying are (p. 10, Eqs. 11-12):

$$\text{AmtHeld}_{i,j,t}=\beta\text{TK}_{j,t-1}+\gamma X_{j,t}+\lambda_i+\eta_t+\epsilon_{i,j,t}.\tag{11}$$

$$\text{NetBuy}_{i,j,t}=\beta\text{TK}_{j,t-1}+\gamma X_{j,t}+a_i+\eta_t+\epsilon_{i,j,t}.\tag{12}$$

Outcomes scale positions or net transactions by account balance or fund size. The 1991-1996 brokerage panel has 1.3-1.5 million observations across measures; it uses account/date fixed effects, share-class controls, and account/date clustered errors (Table 7, p. 11).

**Prior performance and loss aversion, R9.** Table 8 Panel B regresses quarterly estimated loss aversion on prior-quarter market or S&P 500 return, with 30 quarters and Newey-West standard errors using four lags (p. 13):

$$\hat{\lambda}_t=a+bR_{t-1}+u_t.$$

**Intuitive proxies and TK determinants, R10-R14.** Table 9 uses the Table 3 flow regression with a 60-month loss/gain ratio, then total losses and gains, as regressors (fund/date FE, controls, clustered errors, 1981-2022; p. 13):

$$\text{Flow}_{i,t}=\beta_1\text{LossGain}_{i,t-1}+\gamma X_{i,t-1}+\phi_i+\eta_t+\epsilon_{i,t},\quad\text{or}\quad\text{Flow}_{i,t}=\beta_1\text{TotalLoss}_{i,t-1}+\beta_2\text{TotalGain}_{i,t-1}+\gamma X_{i,t-1}+\phi_i+\eta_t+\epsilon_{i,t}.$$

Table 10 regresses fund TK on loss/gain characteristics and on cumulative returns, volatility, and skewness, with Table 3 controls and fund/date fixed effects and clustered errors (1981-2022; p. 14):

$$\text{TK}_{i,t}=\beta_1 Z_{i,t-1}+\gamma X_{i,t-1}+\phi_i+\eta_t+\epsilon_{i,t},\quad Z\in\{\text{LossGain},\text{TotalLoss},\text{TotalGain},\text{CumulativeReturn},\text{Volatility},\text{Skewness}\}.$$

Table 11 uses Fama-MacBeth regressions of fund TK on average stock TK, held-portfolio TK, holding HHI, or risk shifting, with Table 3 controls and fund/date clustered errors (1981-2022; p. 14):

$$\text{TK}_{i,t}=a_t+b_tH_{i,t}+\gamma_tX_{i,t}+u_{i,t},\quad H\in\{\text{AverageStockTK},\text{HeldPortfolioTK},\text{HoldingHHI},\text{RiskShifting}\}.$$

**Controls and interactions, R15-R20.** Table 12 adds Morningstar five-year ratings or MRAR, including rating-by-date fixed effects, at fund and share-class levels; it uses fund FE, Table 3 controls, fund/date clustered standard errors, and the January 1981-June 2022 sample (p. 15). Table 13 separately adds return extrapolation, salience, maximum returns, or skewness, with fund/date FE, Table 3 controls, fund/date clustered errors, and the January 1981-June 2022 sample (p. 16). Tables 14-16 estimate the baseline with interactions between TK and institutional/retail fund, broker/direct sale, high sentiment, or NBER recession indicators (pp. 16-17). Tables 14-15 use fund/date FE, Table 3 controls, fund/date clustered errors, and 859,562 observations over January 1981-June 2022. Table 16 has fund FE but no date FE, Table 3 controls, fund/date clustered errors, and 766,617 observations over the same stated period. The interacted specifications are:

$$\text{Flow}_{i,t}=b\text{TK}_{i,t-1}+d(D_{i,t}\times\text{TK}_{i,t-1})+qD_{i,t}+cX_{i,t-1}+\phi_i+\eta_t+\epsilon_{i,t}.$$

**Revealed-preference estimation, R4.** Equations (13)-(14) specify choice utility and the likelihood. Parameters are estimated separately by quarter from 2013-2022 subscriptions, where quarters require more than 1,000 nonmissing observations; Table 8 reports means and standard errors across quarterly estimates (pp. 11-13).

**Subsequent performance, R7 and R21-R22.** Table 17 Panel A uses Fama-MacBeth regressions of future four-factor alpha on TK at 1-, 3-, and 12-month horizons. Expanding-window factor betas construct alpha; controls match Table 3 and Newey-West errors use 12 lags (p. 18). Panels B-C first project flows on lagged TK over an expanding window to isolate the fitted TK-driven part and residual other flows, then regress future alpha on each separately:

$$\text{Flow}_{i,t}=a_i+b_i\text{TK}_{i,t-1}+u_{i,t},\quad\text{TKFlow}_{i,t}=\widehat{b_i\text{TK}_{i,t-1}},\quad\text{OtherFlow}_{i,t}=\hat{u}_{i,t}.$$

$$\alpha^{(h)}_{i,t+h}=a_t+b_tZ_{i,t}+c_tX_{i,t}+u_{i,t},\quad Z\in\{\text{TK}_{i,t},\text{TKFlow}_{i,t},\text{OtherFlow}_{i,t}\},\quad h\in\{1,3,12\}.$$

The flow-component regressions have 843,151, 828,864, and 767,360 observations for 1-, 3-, and 12-month horizons, respectively (Table 17, p. 18).

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

Source: peer-reviewed, *Journal of Financial Economics*, volume 176 (2026), article 104221. This distillation was extracted by gpt-6-luna on 2026-10-04 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Han, Bing, Pengfei Sui, and Wenhao Yang.
> "Prospect theory in the field: Revealed preferences from mutual fund flows."
> *Journal of Financial Economics* 176 (2026): 104221.
> DOI: 10.1016/j.jfineco.2025.104221. © 2025 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
