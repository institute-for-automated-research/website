---
title: "Time-Varying Pollution Premium: Yin, Yu & Chen (2026)"
description: >-
  Distilled: A long-short portfolio of high- versus low-emission US firms earns
  significant abnormal returns in constant factor models, but a semiparametric
  time-varying estimate shows the premium is significant only before 2005 and
  statistically indistinguishable from zero thereafter; risk aversion,
  macroeconomic uncertainty, natural disasters, and consumer sentiment are the
  most robust determinants of the time-varying pattern. Journal of Banking and
  Finance 187 (2026), paywalled. Seven core results with source locators,
  datasets used, the model, and the estimation equations.
sidebar:
  label: Yin-Yu-Chen 2026
  order: 1
tags: [paper-summary, asset-pricing, factors, anomalies, esg, climate-finance,
       industrial-pollution, time-series, panel-regression, peer-reviewed,
       unreplicated, data:wrds, data:ken-french, data:epa-tri, data:global-q]
paper:
  authors: Ximing Yin, Deshui Yu, Li Chen
  authorList:
    - { family: Yin, given: Ximing, affiliation: Hunan University }
    - { family: Yu, given: Deshui, orcid: "0000-0002-5171-6581", affiliation: Hunan University }
    - { family: Chen, given: Li, affiliation: Xiamen University }
  year: 2026
  venue: Journal of Banking and Finance 187 (2026) 107693
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2026.107693
  tier: field
  jel:
    codes: [G12, C22, C14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Climate Change Policy and Economics", "Economic and Environmental Valuation"]
  dataAccess: licensed-commercial
  outcome:
    - time-varying abnormal returns of a high-minus-low emission long-short portfolio
    - cross-sectional stock returns of emission-sorted quintile portfolios
  outcomeClass: [security-returns]
  license: "© 2026 Elsevier B.V. All rights reserved, including for text and data mining, AI training, and similar technologies"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 1
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [kernel-regression, panel-regression, semiparametric-profile-estimation]
    identification: descriptive
  contributionType: [new-fact, measurement]
  mechanisms: [externality, behavioral-bias]
  scope:
    region: US
    assetClass: US equities
    period: 1992-10..2018-09
    frequency: monthly
    dataType: [market, accounting, administrative]
    granularity: [firm, security]
    n: "NYSE/AMEX/NASDAQ common stocks (SHRCD 10/11) with non-missing CRSP, Compustat, and EPA TRI data; Oct 1992-Sep 2018 (312 months)"
  findings:
    - { ref: R1, outcome: "long-short pollution portfolio return", metric: return-spread, value: "4.57% annually (t=2.39, Sharpe=0.47, total-assets scaling)", direction: positive }
    - { ref: R2, outcome: "long-short portfolio alpha in constant factor models", metric: alpha, value: "FF3F 5.28% annually (t=3.56); CAPM 4.44% (t=3.10); HXZ 4.80% (t=3.44)", direction: positive }
    - { ref: R3, outcome: "time-varying pollution premium (semiparametric alpha)", metric: alpha, value: "FF3F semiparametric alpha approx. 0.40 monthly (4.8% annualized) in 1992, peaking near 2000; 90% CI above zero through approx. 2004-2005; CI includes zero post-2005", direction: mixed }
    - { ref: R4, outcome: "HML factor loading of pollution portfolio (partially time-varying model)", metric: coefficient, value: "FF5F OLS: -0.288 (SE 0.079, t approx -3.65); FF3F OLS: -0.191 (SE 0.097)", direction: negative }
    - { ref: R5, outcome: "time-varying alpha explained by consumer sentiment index", metric: coefficient, value: "beta(ICS) = 0.009*** (t=14.25, FF3F partially time-varying); Adj. R-sq = 0.394", direction: positive }
    - { ref: R6, outcome: "time-varying alpha explained by natural disaster severity", metric: coefficient, value: "beta(Disasters) = 60.358*** (t=11.31, FF3F partially time-varying); Adj. R-sq = 0.554", direction: positive }
    - { ref: R7, outcome: "time-varying alpha explained by multivariate predictors (horse-race)", metric: r-squared, value: "Adj. R-sq = 0.770 (CAPM) to 0.819 (FF5F), partially time-varying model", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Hsu et al. (2023)", doi: '10.1111/jofi.13217', relation: extends, note: "extends their static pollution premium finding by documenting the full time-series evolution of the premium and identifying demand/supply drivers of the time variation" }
    - { cite: "Ang and Kristensen (2012)", doi: '10.1016/j.jfineco.2012.04.008', relation: builds-on, note: "the partially time-varying conditional factor model framework follows their methodology" }
    - { cite: "Chen and Hong (2012)", doi: '10.3982/ecta7990', relation: builds-on, note: "semiparametric profile estimation and wild bootstrap confidence bands follow their approach" }
    - { cite: "Bansal et al. (2016)", relation: cites, note: "climate risk pricing baseline establishing a positive premium for global-warming exposure" }
    - { cite: "Bekaert et al. (2022)", relation: cites, note: "source of the time-varying risk aversion and macroeconomic uncertainty indices used as demand-side predictors" }
  replicationCode: { status: upon-request }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (15 pages including appendices A-E); seven results extracted from the paywalled PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: JEL codes corrected (G14 removed, C22 added per PDF); R1 magnitude 'monotonically' changed to 'almost monotonically' per PDF text and actual table values; Empirical specifications text corrected 0.864 from FF3F to FF4F (Table 9 Panel B). All six remaining result locators, magnitudes, t-stats, and equations verified correct against PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107693", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] entries all tdm or stm-asf (content-version tdm, URL https://www.elsevier.com/tdm/userlicense/1.0/, start 2026-06-01; plus stm-asf policy-004/012/017/029/037); no VOR CC licence found; artifact p.1 copyright line states 2026 Elsevier B.V. All rights reserved" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the semiparametric factor model framework, and the estimation procedure with key equations: enough to understand what was found and how, without reading all 15 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2026.107693).

## TL;DR

Using EPA Toxic Release Inventory (TRI) data matched to CRSP and Compustat for US common stocks (October 1992 to September 2018), the paper sorts firms into quintiles by annual toxic emission intensity scaled four ways (total assets, PP&E, sales, market cap) and constructs a long-short portfolio. In constant factor models (CAPM through HXZ), the high-minus-low portfolio earns a statistically significant pollution premium of roughly 4 to 5 percent annually. A partially time-varying semiparametric model reveals, however, that the premium is concentrated before 2005: the nonparametric alpha estimate is statistically significant (90% confidence interval above zero) through approximately 2004-2005, then falls to a stable but indistinguishable-from-zero level. The paper identifies two channels driving this time variation: time-varying risk exposures on the supply side (especially the HML value factor) and time-varying investor preferences on the demand side (consumer sentiment, natural disaster severity, sustainable fund flows, and environmental litigation risk). Risk aversion and macroeconomic uncertainty exhibit negative associations with the premium. In a multivariate horse-race following Hsu et al. (2023), risk aversion, macroeconomic uncertainty, natural disasters, and consumer sentiment emerge as the most robust predictors.

## Core results

Magnitudes are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Long-short portfolio earns positive raw returns across all four emission scalings | Table 1, Panel A, p. 4 | H-L 4.57% annually (t=2.39, Sharpe=0.47, total-assets scaling); quintile raw returns increase almost monotonically from 6.82% (low) to 11.39% (high) (Q3=8.28% dips below Q2=10.60%) |
| R2 | Long-short portfolio earns significant alpha in all constant factor models | Table 2, p. 5 | FF3F alpha = 5.28%\*\*\* (t=3.56); CAPM 4.44%\*\*\* (t=3.10); FF4F 4.56%\*\*\* (t=3.29); FF5F 3.96%\*\*\* (t=2.70); HXZ 4.80%\*\*\* (t=3.44) |
| R3 | Time-varying semiparametric alpha is significant only before 2005; statistically indistinguishable from zero thereafter | Figure 2, p. 6; §4.2 | FF3F estimate approx. 0.40 monthly (4.8% annualized) in 1992, peaking near 1.0 around 2000; 90% CI above zero through approx. 2004-2005; falls to approx. 0.25 monthly and becomes insignificant post-2005 |
| R4 | HML (value factor) is the only risk factor consistently related to the pollution portfolio | Table 3, p. 7; §4.3 | FF5F OLS: HML = -0.288 (SE=0.079, t approx -3.65); FF3F OLS: HML = -0.191 (SE=0.097); MKT and SMB insignificant across all specifications |
| R5 | Consumer sentiment index is the strongest single economic-condition predictor of the time-varying alpha | Table 4, Panel C, p. 11 | beta(ICS) = 0.009\*\*\* (t=14.25, FF3F partially time-varying); Adj. R-sq = 0.394 |
| R6 | Natural disaster severity is a positive and robust predictor of the time-varying pollution premium | Table 6, Panel A, p. 11 | beta(Disasters) = 60.358\*\*\* (t=11.31, FF3F partially time-varying); Adj. R-sq = 0.554 |
| R7 | Multivariate horse-race: risk aversion, macroeconomic uncertainty, natural disasters, and consumer sentiment jointly explain most time variation | Table 9, Panel A, p. 12 | Adj. R-sq = 0.770 (CAPM) to 0.819 (FF5F), partially time-varying model (Panel B, fully time-varying: up to 0.864) |

**Overall (paper's conclusion).** The pollution premium is not a stable, time-invariant phenomenon: it reflected a priced systematic risk tied to environmental policy and investor preferences before 2005, but the abnormal returns became statistically indistinguishable from zero after that. The time variation is driven by both the HML value factor channel on the supply side and by macroeconomic conditions and investor environmental awareness on the demand side.

## Theory / model

The paper proposes no formal economic model. The economic object is the abnormal return (pollution premium) of a long-short portfolio sorted on toxic emission intensity, studied through two related semiparametric factor models adapted from Ang and Kristensen (2012) and Chen and Hong (2012).

**Hypotheses tested.** The null is that pollution exposure is not priced at all (alpha=0 in constant models), and the secondary null is that any pricing is time-invariant (alpha is constant over time). The paper rejects both nulls pre-2005 but fails to reject the second null post-2005.

**Identification.** The design is descriptive: no exogenous variation is exploited and no causal claim is made. The semiparametric model relaxes the constant-coefficient assumption, letting the data reveal the temporal shape of alpha without imposing a functional form (linear, structural-break, or otherwise). Driver regressions (Sections 5-6) establish associations between the estimated time-varying alpha and proxy variables; they do not identify causal effects.

## Method

### Partially time-varying factor model

The paper's baseline model has a time-varying intercept and constant factor loadings (Eq. 1, p. 2):

$$
r_t = \alpha_t + \sum_{j=1}^{J} \beta_j x_{jt} + \varepsilon_t, \qquad \varepsilon_t = \sigma_t e_t,
\quad t = 1, \ldots, T; \quad j = 1, \ldots, J \tag{1}
$$

where $$r_t$$ is the long-short portfolio excess return, $$x_{jt}$$ are observable common risk factors, $$\alpha_t$$ is the time-varying pollution premium, and $$\beta_j$$ is the constant factor loading. In matrix notation (Eq. 2):

$$
r_t = \alpha_t + Z_t^\top \beta + \varepsilon_t, \quad t = 1, \ldots, T \tag{2}
$$

### Semiparametric profile estimation

Following the `semiparametric-profile-estimation` approach of Fan and Huang (2005) and Chen and Hong (2012), $$\alpha_t$$ is estimated as a smooth function of rescaled time $$\tau_t = t/T \in [0,1]$$ by local linear kernel regression. Step 1 treats $$\beta$$ as known, computes the adjusted return $$\tilde{r}_t = r_t - Z_t^\top \beta$$, and minimizes the loss function (Eq. 5, p. 3):

$$
\sum_{t=1}^T \left[ \tilde{r}_t - \alpha(\tau) - \alpha^{(1)}(\tau)(\tau_t - \tau) \right]^2 K_h(\tau_t - \tau) \tag{5}
$$

where $$K_h(u) = K(u/h)/h$$ is the Epanechnikov kernel with bandwidth $$h$$ selected by leave-one-out cross-validation, and $$\alpha^{(1)}(\tau)$$ is the local linear slope. The infeasible local linear estimator of $$\alpha(\tau)$$ is (Eq. 6):

$$
\tilde{\alpha}(\tau) = [1,0] \left( D(\tau)^\top K_h(\tau) D(\tau) \right)^{-1} D(\tau)^\top K_h(\tau)(r - Z\beta) \tag{6}
$$

Step 2 substitutes $$\tilde{\alpha}$$ back into the original model, rearranges to isolate $$\beta$$, and estimates $$\hat{\beta}_{\text{ols}}$$ by OLS. The feasible semiparametric estimator is then (Eq. 10):

$$
\hat{\alpha}_{\text{semi}}(\tau) = S(\tau) \left( r - Z \hat{\beta}_{\text{ols}} \right) \tag{10}
$$

where $$S(\tau)$$ stacks the local-linear kernel smoothing matrices. Confidence bands are obtained by a wild bootstrap (5,000 replications; Appendix B), using the reflection method of Chen and Hong (2012) at boundary points to correct for boundary bias.

To correct for heteroscedasticity in the errors, the paper also constructs a weighted least-squares (WLS) estimator of $$\beta$$ (Appendix D), with weights $$\hat{\sigma}^2(\tau)$$ estimated from the kernel-local residuals.

### Fully time-varying factor model

An alternative model allows both $$\alpha_t$$ and factor loadings $$\beta_{jt}$$ to be time-varying (Eq. 11, p. 7):

$$
r_t = \alpha_t + \sum_{j=1}^{J} \beta_{jt} x_{jt} + \varepsilon_t, \quad t = 1, \ldots, T; \quad j = 1, \ldots, J \tag{11}
$$

Both functions are approximated locally by linear polynomials and estimated by minimizing the weighted sum of squared residuals (Eq. 13, Appendix A). This model allows the study of time variation in both the pollution premium level and the portfolio's exposure to common risk factors (Figures 3 and 4).

## Empirical specifications

### Portfolio construction

Following Hsu et al. (2023), the paper sorts firms into quintiles by annual toxic emission intensity, grouping firms relative to their Fama-French 49 industry peers each October (when updated TRI data become available). Emissions are scaled four ways: total assets (Panel A), property, plant and equipment (Panel B), sales (Panel C), and market capitalization (Panel D). Portfolios are value-weighted. The H-L long-short portfolio takes a long position in Quintile 5 (highest emission) and short in Quintile 1 (lowest emission).

Sample restrictions: common stocks (SHRCD = 10/11) on NYSE, AMEX, or NASDAQ; non-missing data in all three databases (CRSP, Compustat, EPA TRI); at least two years of Compustat history; financial firms (SIC 6000-6999) excluded.

### Constant factor model tests (Table 2)

Alphas for each quintile portfolio and the long-short portfolio are estimated under five factor models: CAPM (MKT only); FF3F (MKT, SMB, HML); FF4F (MKT, SMB, HML, UMD); FF5F (MKT, SMB, HML, RMW, CMA); HXZ q-factor model (MKT, SMB, I/A, ROE). Alphas are annualized (multiplied by 12); standard errors use Newey-West (1987) adjustments with 12 lags. The H-L alpha from the FF3F model is 5.28% annually (t=3.56, Table 2, Panel B), consistent across all factor models tested.

### Time-varying estimation (Figure 2; §4.2)

The partially time-varying model (Eq. 1) is estimated for each factor model. The semiparametric estimate $$\hat{\alpha}(\cdot)_{\text{semi}}$$ is plotted with 90% wild-bootstrap confidence bands (Figure 2). The FF3F-based estimate peaks near monthly alpha of 1.0 around 2000, then declines; the 90% CI lower bound is above zero from 1992 through approximately 2004-2005, after which the band crosses zero and the premium is statistically insignificant. The pattern holds across CAPM, FF4F, FF5F, and HXZ models.

Time-varying betas from the fully time-varying model (Figure 3 for CAPM; Figure 4 for FF3F) confirm that MKT beta is effectively zero throughout the sample, size beta is short-lived (significant only through the late 1990s), and HML beta is the key driver: significantly negative from 1992 to 1998 and from 2003 to 2013. Bansal et al. (2016) provide the baseline climate-risk-pricing motivation; Bekaert et al. (2022) provide the risk aversion and uncertainty indices used in the driver analysis.

### Driver regressions (Tables 4-9; §§5-6)

For each proxy variable $$Z_t$$, the paper regresses the estimated time-varying alpha:

$$
\hat{a}_t = \text{const} + \beta \times Z_t + \varepsilon_t
$$

Five categories of proxy variables are tested: (1) economic conditions (Shiller P/E ratio, luxury goods consumption, consumer sentiment index ICS; Table 4); (2) sustainable fund flows from Morningstar (percentage and dollar-amount; Table 5); (3) natural disaster severity from SHELDUS, defined as total fatalities and injuries relative to US population, scaled by 1,000 (Table 6); (4) environmental policy uncertainty via firm-level litigation risk, aggregated as total EPA civil cases filed against firms from year $$t+1$$ to $$t+5$$ (Table 7); (5) risk aversion and macroeconomic uncertainty indices from Bekaert et al. (2022), measured in monthly variance units and annual volatility percentage (Table 8).

The multivariate horse-race (Table 9) includes all proxies simultaneously. For the partially time-varying model (Panel A), risk aversion, macroeconomic uncertainty, natural disasters, and consumer sentiment are all significant at the 5% or 1% level across most factor models. Macroeconomic uncertainty exhibits the strongest negative effect (e.g., -6.094 for FF5F, t=-2.48) and natural disasters the strongest positive effect. The adjusted R-sq reaches 0.819 (FF5F) in Panel A and 0.864 (FF4F) in Panel B (fully time-varying model).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| EPA Toxic Release Inventory (TRI) | Annual firm-level toxic emission intensity (pounds released per year, 1991-2018); scaled four ways for emission-sorted quintile construction | [EPA TRI](/wiki/datasets/epa-tri/) |
| CRSP monthly returns and market data | Stock returns, market capitalization, exchange codes; monthly Oct 1992-Sep 2018 | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| Compustat annual fundamentals | Total assets, PP&E, sales for scaling; book values and firm characteristics for sample filters | [WRDS / Compustat](/wiki/commercial/wrds/) (licensed) |
| Fama-French factors (Kenneth French library) | FF3F, FF4F, FF5F factor returns; FF 49-industry classification for within-industry quintile sorts | [Ken French library](/wiki/datasets/ken-french/) |
| HXZ q-factors (Global-Q) | MKT, SMB, I/A, ROE factors for the HXZ model tests | No page yet (`data:global-q`) |
| Morningstar sustainable fund database | Quarterly total net assets, holdings, and returns for sustainable and ESG funds; 2007:Q4-2018:Q3 | No page yet |
| SHELDUS natural disaster database | County-level hazard event data (fatalities + injuries relative to US population), quarterly 12-quarter moving average; Arizona State University | No page yet |
| Bekaert et al. (2022) risk aversion and uncertainty indices | Monthly time-varying risk aversion and macroeconomic uncertainty indices (available at nancyxu.net) | No page yet |
| EPA ICIS enforcement and FRS data | Annual aggregate count of civil cases against firms from EPA Enforcement and Compliance History Online; matched to TRI via Facility Registry Service | No page yet |

Sample: October 1992 to September 2018 (312 months, monthly). TRI data are annual (from 1991), matched to stock data in October of each year.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jbankfin.2026.107693) if you are: studying whether and how the pollution or ESG premium varies over time in the US; applying semiparametric partially or fully time-varying factor models to other long-short portfolios; investigating the supply-side (risk exposure) versus demand-side (investor preference) decomposition of time-varying premia; or seeking formal asymptotic derivations for the local-linear kernel estimator (Appendices A-D). The locators above point to exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* vol. 187 (2026). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The article is paywalled; this page contains extracted text only and is not a redistribution of the work.

> Yin, Ximing, Deshui Yu, and Li Chen. "The time-varying pollution premium." *Journal of Banking and Finance* 187 (2026): 107693. DOI: [10.1016/j.jbankfin.2026.107693](https://doi.org/10.1016/j.jbankfin.2026.107693). © 2026 Elsevier B.V. All rights reserved.
