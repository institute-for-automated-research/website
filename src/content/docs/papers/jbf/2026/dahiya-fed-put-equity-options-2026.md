---
title: "Fed Put in the Equity Options Markets: Dahiya, Kamrad, Poti & Siddique (2026)"
description: >-
  Distilled: Documents the Fed Put (Greenspan Put) in S&P 500 and S&P 100 equity index
  option markets. Put implied volatility is 3 to 5 percentage points lower during
  accommodative monetary policy, strongest when investor risk aversion is high, and
  concentrated in the pre-2008 period; the effect largely vanishes after the Global
  Financial Crisis. Journal of Banking and Finance 188 (2026), paywalled. Seven core
  results with source locators, the Taylor Rule identification design, and IV-GMM estimation.
sidebar:
  label: Dahiya-Kamrad-Poti-Siddique 2026
  order: 1
tags: [paper-summary, monetary-policy, options-markets, implied-volatility, asset-pricing,
       panel-regression, instrumental-variables, peer-reviewed, unreplicated,
       data:optionmetrics, data:fred, data:wrds]
paper:
  authors: Sandeep Dahiya, Bardia Kamrad, Valerio Poti, Akhtar Siddique
  authorList:
    - { family: Dahiya, given: Sandeep, orcid: "0000-0002-3995-8385", affiliation: Georgetown University }
    - { family: Kamrad, given: Bardia, orcid: "0000-0003-3451-3501", affiliation: Georgetown University }
    - { family: Poti, given: Valerio, orcid: "0000-0003-1156-5616", affiliation: University College Dublin }
    - { family: Siddique, given: Akhtar, orcid: "0000-0002-1704-0397", affiliation: "Georgetown University; University College Dublin" }
  year: 2026
  venue: Journal of Banking and Finance 188 (2026) 107697
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2026.107697
  tier: field
  jel:
    codes: [G13, G12, E52]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Financial Markets and Investment Strategies", "Banking stability, regulation, efficiency", "Market Dynamics and Volatility"]
  dataAccess: licensed-commercial
  outcome:
    - implied volatility of S&P 500 and S&P 100 equity index put options
  outcomeClass: [asset-prices]
  license: "paywalled; (c) 2026 Elsevier B.V. All rights reserved, including those for text and data mining, AI training, and similar technologies (printed on PDF p. 1)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 2
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables, gmm]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [learning, moral-hazard, policy-backstop-substitution]
  scope:
    region: US
    assetClass: US equity index options (S&P 500 SPX, S&P 100 OEX)
    period: 1996-01..2021-12
    frequency: weekly
    dataType: [market]
    granularity: [security]
    n: "1,342 weeks, Jan 4 1996 to Dec 31 2021; 132,858 option observations"
  findings:
    - { ref: R1, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "beta_1 = -3.32 (t=-20.48) at moneyness=50; -5.33 (t=-37.48) at moneyness=100; all 11 moneyness categories 1% significant (univariate)", direction: negative }
    - { ref: R2, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "highest-RA quintile: beta_1 = -6.27 (t=-14.44); lowest-RA quintile: beta_1 = 0.09 (t=0.50) insignificant; at moneyness=50", direction: negative, vsBenchmark: "effect approximately 70x larger in Quintile 5 vs Quintile 1 (Table 2, Panel A)" }
    - { ref: R3, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "pre-crisis OLS beta_1 = -0.659 (t=-6.746); full-sample OLS beta_1 = -0.223 (t=-2.668)", direction: negative, vsBenchmark: "pre-crisis effect approximately 3x the full-sample OLS estimate (Table 5)" }
    - { ref: R4, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "post-crisis OLS beta_1 = -0.102 (t=-0.759) insignificant; post-crisis IV-GMM beta_1 = 11.633 insignificant", direction: none }
    - { ref: R5, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "pre-crisis IV-GMM beta_1 = -1.205 (t=-8.152), 1% significant", direction: negative, vsBenchmark: "approximately 2x the pre-crisis OLS estimate of -0.659 (Table 5)" }
    - { ref: R6, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "binary FedSupport full-sample OLS beta_1 = -1.827 (t=-6.172); pre-crisis OLS beta_1 = -2.674 (t=-9.122); pre-crisis IV-GMM beta_1 = -3.969 (t=-8.571)", direction: negative }
    - { ref: R7, outcome: implied volatility of S&P 500 put options, metric: coefficient, value: "MP1 proxy OLS beta_1 = -9.427 (t=-51.566); MP1 IV-GMM beta_1 = -80.292 (t=-1.813, 10% significant)", direction: negative }
  resultType: new-finding
  relatesTo:
    - { cite: "Miller, Weller & Zhang (2002)", doi: '10.1111/1468-0297.00029', relation: builds-on, note: "theoretical framework for the Fed Put via meta moral hazard; basis for testable implications about put option pricing" }
    - { cite: "Wu and Xia (2016)", relation: builds-on, note: "shadow Fed Funds rate methodology used to measure monetary policy stance during ZLB periods" }
    - { cite: "Taylor (1993)", doi: '10.1016/0167-2231(93)90009-l', relation: builds-on, note: "Taylor Rule benchmark used to classify periods of Fed market support vs non-support" }
    - { cite: "Bekaert, Engstrom & Xu (2021)", doi: '10.1287/mnsc.2021.4068', relation: builds-on, note: "relative risk aversion index used as time-varying risk aversion control and as endogenous regressor" }
    - { cite: "Adrian et al. (2020)", doi: '10.2139/ssrn.3758069', relation: cites, note: "shows accommodative interest rate policy shifts macroprudential risk rather than eliminating it" }
    - { cite: "Drechsler, Savov & Schnabl (2018)", relation: cites, note: "related theoretical work on distortive effects of central bank intervention on risk premia" }
  openQuestions:
    - "Whether the post-2008 disappearance of the Fed Put reflects the mechanical effect of the zero lower bound environment on option prices or a permanent shift in market expectations of Fed intervention (p. 12, Conclusions)."
    - "How the Fed Put channel operates as the Fed navigates the post-quantitative easing era at higher rate levels, where traditional and unconventional tools interact differently (p. 12, Conclusions)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read full PDF (14 pages including appendix and references); seven results extracted with locators from Tables 1-7. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all 7 rows pass. Eq. 9 notation: wiki has W⁻¹ (consistent with W defined as covariance matrix) while PDF Eq. 9 writes W directly (the PDF is internally inconsistent on this point: footnote 16 defines W as the weighting matrix, Appendix A text calls it the covariance matrix); no change made as wiki formula is mathematically coherent with its stated definition. All other equations match term-by-term." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107697", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains only TDM and stm-asf entries (Elsevier TDM 1.0 and policy DOIs); no CC or OA license; PDF p. 1 states all rights reserved including for text and data mining and AI training" }
---

**What this is.** The paper's core results, the monetary policy identification design (Taylor Rule deviation combined with the Wu-Xia shadow rate), and the regression specifications with enough detail to know what it found and how, without reading all 14 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2026.107697).

## TL;DR

The paper tests whether the "Fed Put" (Greenspan Put) is detectable in equity options prices. The premise: if investors believe the Federal Reserve will support markets during downturns, exchange-traded put options are partially substituted by the Fed's implicit backstop, so out-of-the-money put implied volatility should be lower during accommodative monetary policy periods. Using 1,342 weekly observations of S&P 500 (SPX) and S&P 100 (OEX) index option implied volatilities from OptionMetrics (January 1996 to December 2021), with monetary policy stance measured as deviations from the Taylor (1993) Rule extended to the zero lower bound via the Wu and Xia (2016) shadow fed funds rate, the paper finds robust evidence of a Fed Put in the pre-2008 period: put implied volatility is 3 to 5 percentage points lower during accommodative periods (controlling for option characteristics), with the effect amplified in high-risk-aversion regimes per Bekaert, Engstrom, and Xu (2021) and robust to IV-GMM estimation. Post-2008, the effect largely disappears, consistent with a structural break induced by the Global Financial Crisis and the subsequent shift to unconventional monetary policy.

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Accommodative Fed stance (FedSupport) lowers S&P 500 put implied volatility across all 11 moneyness levels (univariate)** | Table 1, Panel A, p. 8 | β₁ = -3.32 (t=-20.48) at moneyness=50; -5.33 (t=-37.48) at moneyness=100; all 11 categories 1\% significant |
| R2 | **Effect is concentrated in high-risk-aversion regimes; negligible when risk aversion is low** | Table 2, Panel A, p. 9 | Quintile 5 (highest RA): β₁ = -6.27 (t=-14.44); Quintile 1 (lowest RA): β₁ = 0.09 (t=0.50, not significant); at moneyness=50 |
| R3 | **Pre-crisis (1996-2007) multivariate OLS effect is nearly 3x the full-sample estimate** | Table 5, p. 11 | Pre-crisis OLS: β₁ = -0.659 (t=-6.746); full-sample OLS: β₁ = -0.223 (t=-2.668) |
| R4 | **Post-crisis (2009-2021) Fed Put effect disappears in the multivariate regression** | Table 5, p. 11 | Post-crisis OLS: β₁ = -0.102 (t=-0.759, not significant); post-crisis IV-GMM: not significant |
| R5 | **Pre-crisis IV-GMM causal estimate is approximately 2x the OLS estimate** | Table 5, p. 11 | Pre-crisis IV-GMM: β₁ = -1.205 (t=-8.152), 1\% significant |
| R6 | **Binary FedSupport measure corroborates OLS; pre-crisis IV-GMM also strongly negative** | Table 6, p. 13 | Full-sample OLS: β₁ = -1.827 (t=-6.172); pre-crisis OLS: β₁ = -2.674 (t=-9.122); pre-crisis IV-GMM: β₁ = -3.969 (t=-8.571) |
| R7 | **Alternative monetary policy proxies (money-market-futures changes) confirm the negative relation** | Table 7, p. 13 | ΔMP1 OLS: β₁ = -9.427 (t=-51.566); ΔMP1 IV-GMM: β₁ = -80.292 (t=-1.813, 10\% significant) |

**Overall (paper's conclusion).** There is robust evidence of a Fed Put in the pre-2008 period: accommodative monetary policy is associated with substantially lower implied volatility of equity index put options, consistent with investors treating the Fed's implicit backstop as a partial substitute for put protection. The effect is amplified in high-risk-aversion regimes, aligning with the meta moral hazard mechanism of Miller, Weller, and Zhang (2002). Post-2008, the relationship largely vanishes, suggesting the Global Financial Crisis permanently altered market expectations of Fed intervention. IV-GMM confirms the pre-crisis effect is not driven by reverse causality or endogenous risk aversion.

## Theory / model

The paper has no formal model of its own. It tests the theoretical framework of Miller, Weller, and Zhang (2002), who distinguish two cases for the Fed Put's effect on option prices. In the first (complete-credibility) case, investors fully believe the Fed will prevent large market declines; return distributions exhibit a truncated downside and a fatter upside, and variation in policy would have no impact on beliefs or option prices. In the second (partial-credibility) case, monetary policy stance shifts investor beliefs about the probability and magnitude of Fed intervention, generating a negative cross-price effect between accommodative policy and put implied volatility. The paper tests the partial-credibility case empirically. While Miller, Weller, and Zhang (2002) and Drechsler, Savov, and Schnabl (2018) discuss theoretical mechanisms through which central bank intervention distorts asset prices, prior empirical evidence had been scarce.

**Identification via the Taylor Rule** (§2.1, p. 3): Monetary policy stance is identified through deviations of the effective fed funds rate from the Taylor (1993) benchmark rate. The original Taylor Rule specification is (Eq. 1, p. 3):

$$
i = r^* + \pi + w_1(\pi - \pi^*) + w_2(y - y^*) \tag{1}
$$

where $$i$$ is the nominal federal funds rate, $$r^* = 2\%$$ is the target real FFR, $$\pi$$ is the inflation rate, $$\pi^* = 2\%$$ is the target inflation rate, $$y$$ is log real output, $$y^*$$ is log potential output, and $$w_1 = w_2 = 0.5$$ in the original specification. The paper also tests variants labeled Final Taylor Rule 1_1, 2_1, 2_2, and 2_3 that modify the inflation measure and output-gap weight.

For ZLB periods when the observed FFR cannot capture the full accommodation of unconventional policy, the paper substitutes the Wu and Xia (2016) shadow fed funds rate. This rate is derived from a factor-augmented VAR (FAVAR) model with three latent factors; the Atlanta Fed maintains updated estimates. The shadow rate equals the observed FFR when the observed rate exceeds 0.25%, and extends below zero at the ZLB.

**FedSupport measure** (§2.1, pp. 3-4): Two variants are constructed:
- Continuous: (Wu-Xia shadow rate) minus (Taylor Rule implied rate); more negative = more accommodative
- Binary: indicator equal to 1 when the shadow rate falls below the Taylor Rule benchmark (Fed supports markets), and 0 otherwise

The key prediction is β₁ < 0: when the Fed provides implicit downside protection, investors demand less explicit insurance from put options. The results of Adrian et al. (2020), who show accommodative interest rate policy shifts rather than eliminates macroprudential risk over time, motivate the expectation of a structural break around the Global Financial Crisis.

## Method

The paper applies OLS panel regression and IV-GMM to weekly options data. The baseline specification (Eq. 2, p. 4) is:

$$
\sigma(\text{Put})_{i,t} = \beta_0 + \beta_1 \times \text{FedSupport}_t + \phi' \text{Controls}_{i,t} + u_t \tag{2}
$$

where $$\sigma(\text{Put})_{i,t}$$ is the implied volatility of put option $$i$$ in week $$t$$, expressed as a percentage, and $$\text{FedSupport}_t$$ captures the monetary policy stance. It builds on `panel-regression` as the baseline estimator.

Endogeneity is addressed via `instrumental-variables` estimation combined with `gmm`. Both FedSupport and RiskAversion are potentially endogenous: unobserved macroeconomic or financial variables could influence both the Fed's policy stance and investors' risk preferences simultaneously. The IV-GMM estimator (Appendix A, Eq. 9, p. 13) is:

$$
\hat{\beta}_{\text{GMM}} = (\mathbf{X}'\mathbf{Z}\mathbf{W}^{-1}\mathbf{Z}'\mathbf{X})^{-1} \mathbf{X}'\mathbf{Z}\mathbf{W}^{-1}\mathbf{Z}'\mathbf{y} \tag{9}
$$

where $$\mathbf{X}$$ is the matrix of endogenous regressors (FedSupport and RiskAversion), $$\mathbf{Z}$$ is the instrument matrix, and $$\mathbf{W}$$ is a HAC-consistent covariance matrix of moment conditions, following Baum, Schaffer, and Stillman (2003) and building on Griliches and Hausman (1986). The two-step feasible GMM handles heteroskedasticity and autocorrelation common in derivatives panel data.

## Empirical specifications

**Data construction** (§3, p. 5): Daily option implied volatility data come from the OptionMetrics Ivy DB, compiled from 3:59 PM EST closing prices for S&P 500 (CBOE ticker: SPX) and S&P 100 (CBOE ticker: OEX) index options. Black-Scholes implied volatility is computed for each option using the underlying index price, dividend yield, risk-free rate, time to maturity, and strike price. The volatility surface is reconstructed via cubic spline interpolation. Weekly observations are taken every Wednesday. Moneyness is defined as (strike price / current index price) × 100, so an out-of-the-money put has moneyness < 100.

**Univariate** (Eq. 3, p. 7; produces R1, R2):

$$
\sigma(\text{Put})_{i,t} = \beta_0 + \beta_1 \times \text{FedSupport}_t + u_t \tag{3}
$$

Estimated separately for each of 11 moneyness levels (50, 55, ..., 100) and 9 maturity buckets (10 to 90 days). The binary FedSupport indicator is used. Panel A of Table 1 (p. 8) aggregates across maturities for each moneyness level; Panel B aggregates across moneyness for each maturity. Table 2 (p. 9) stratifies by quintile of the Bekaert, Engstrom, and Xu (2021) relative risk aversion index to test the heterogeneity prediction (R2).

**Multivariate OLS** (Eq. 4, p. 10; produces R3, R4):

$$
\sigma(\text{Put})_{i,t} = \beta_0 + \beta_1 \times \text{FedSupport}_t + \beta_2 \times \text{Moneyness}_{i,t} + \beta_3 \times \text{Expiration}_{i,t} + \beta_4 \times \text{RiskAversion}_t + \varepsilon_{i,t} \tag{4}
$$

The continuous measure of FedSupport (shadow rate minus Taylor Rule rate) is used in Table 5 (p. 11); the binary measure in Table 6 (p. 13). $$\text{RiskAversion}_t$$ is the Bekaert, Engstrom, and Xu (2021) relative risk aversion index, sampled at weekly frequency. Standard errors are robust using the HAC procedure of Chang and McAleer (2015). The sample splits at December 31, 2007 (pre-crisis: 1996-2007) and January 1, 2009 (post-crisis: 2009-2021).

**IV-GMM structural** (Eq. 5, p. 11; produces R5):

$$
\sigma(\text{Put})_{i,t} = \beta_0 + \beta_1 \times \widehat{\text{FedSupport}}_t + \beta_2 \times \text{Moneyness}_{i,t} + \beta_3 \times \text{Expiration}_{i,t} + \beta_4 \times \widehat{\text{RiskAversion}}_t + \varepsilon_{i,t} \tag{5}
$$

Both FedSupport and RiskAversion are instrumented. The first-stage equations (Eqs. 6-7, p. 12) use four lagged macro indicators as instruments:

$$
\text{FedSupport}_t = \kappa_0 + \kappa_1 \text{LaborMkt}_{t-1} + \kappa_2 \text{SP500}_{t-1} + \kappa_3 \text{FinStab}_{t-1} + \kappa_4 \text{PE}_{t-1} + u_t \tag{6}
$$

$$
\text{RiskAversion}_t = \gamma_0 + \gamma_1 \text{LaborMkt}_{t-1} + \gamma_2 \text{SP500}_{t-1} + \gamma_3 \text{FinStab}_{t-1} + \gamma_4 \text{PE}_{t-1} + \eta_t \tag{7}
$$

where LaborMkt is the Kansas City Fed Labor Market Conditions Index, SP500 is the lagged S&P 500 return, FinStab is the FRB St. Louis Financial Stress Index, and PE is the lagged S&P 500 Price-Earnings Ratio. The system is exactly identified (4 instruments, 2 endogenous variables). Instrument relevance is confirmed: Kleibergen-Paap LM test chi² = 76.557 (rejects under-identification, p < 0.01); weak instruments null rejected at chi² = 24.462 (p < 0.01) (footnote 15, p. 11).

**Alternative MP proxies** (Eq. 8, p. 12; produces R7):

$$
\Delta\sigma(\text{Put})_{i,t} = \beta_0 + \beta_1 \times \Delta MP_t + \beta_2 \times \text{Moneyness}_{i,t} + \beta_3 \times \text{Maturity}_{i,t} + \beta_4 \times \text{RiskAversion}_t + \varepsilon_{i,t} \tag{8}
$$

where $$\Delta MP_t$$ is the weekly change in a money-market futures price index: MP1 is the 8-quarter-ahead 3-month Eurodollar futures level (100 minus yield); MP2 is the 3-month 30-day Fed Funds futures level. An increase in MP1 or MP2 corresponds to expected monetary easing; a negative β₁ confirms the Fed Put. Table 7 (p. 13) reports OLS and IV-GMM estimates for both proxies.

**Robustness**: Markov Switching Dynamic Regression (MSDR) and Hidden Markov Models (HMM) are used as alternative identification strategies for Fed support regimes (Online Appendix). Results are replicated on S&P 100 (OEX) index options (Table 4, p. 10).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| OptionMetrics Ivy DB (S&P 500 SPX, S&P 100 OEX) | Primary data: daily index option implied volatility surface, 1996-2021 | no page yet |
| Wu and Xia (2016) shadow Fed Funds rate (Atlanta Fed) | Monetary policy stance during ZLB; extends observed FFR below zero | [FRED](/wiki/datasets/fred/) (related public source) |
| Taylor Rule implied rate (Bernanke 2015 blog spreadsheet) | Benchmark rate for identifying FedSupport vs non-support periods | no page yet |
| CRSP S&P 500 and S&P 100 index levels | Underlying prices for moneyness construction | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Federal Reserve H15 series (effective Fed Funds rate) | Observed FFR for non-ZLB periods | [FRED](/wiki/datasets/fred/) |
| Bekaert, Engstrom and Xu (2021) relative risk aversion index (nancyxu.net) | Time-varying risk aversion control and endogenous regressor | no page yet |
| Kansas City Fed Labor Market Conditions Index | Instrument for FedSupport and RiskAversion | [FRED](/wiki/datasets/fred/) |
| FRB St. Louis Financial Stress Index | Instrument for FedSupport and RiskAversion | [FRED](/wiki/datasets/fred/) |
| S&P 500 Price-Earnings Ratio | Instrument for FedSupport and RiskAversion | no page yet |

Sample: 1,342 weekly observations, January 4, 1996 to December 31, 2021. Primary results on S&P 500 (SPX). Replicated on S&P 100 (OEX). 132,858 option-week observations in the multivariate regressions (Table 5, p. 11). Authors state they do not have permission to share data (Appendix B, p. 13).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jbankfin.2026.107697) if you are: testing whether the Fed Put effect extends to other derivatives markets or international indices; examining how unconventional monetary policy (QE, forward guidance) affects investor beliefs about central bank intervention; replicating the IV-GMM instrument set for options-market panel regressions with endogenous risk aversion; or extending the analysis to post-2021 data when the Fed raised rates rapidly. Tables 1-2 (pp. 8-9) document the univariate pattern and risk aversion heterogeneity; Tables 5-6 (pp. 11, 13) contain the multivariate OLS and IV-GMM estimates for pre- and post-crisis subperiods.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 188 (2026). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The article is paywalled (Elsevier, all rights reserved); only core results are extracted here.

> Dahiya, Sandeep, Bardia Kamrad, Valerio Poti, and Akhtar Siddique.
> "Fed put in the equity options markets."
> *Journal of Banking and Finance* 188 (2026) 107697.
> DOI: [10.1016/j.jbankfin.2026.107697](https://doi.org/10.1016/j.jbankfin.2026.107697).
> (c) 2026 Elsevier B.V. All rights reserved.
> Extract only; redistribution not permitted.
