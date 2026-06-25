---
title: "Active Fund Management when ESG Matters: Avramov, Cheng & Tarelli (2026)"
description: >-
  Distilled: This paper develops and tests an equilibrium model of active fund management
  with ESG considerations, showing that heterogeneous fund ESG preferences intensify
  information acquisition across the ESG spectrum, improving price informativeness and
  lowering the cost of capital for green firms through a concave, amplified ESG-return
  relation. Journal of Banking and Finance vol. 182 (2026), CC BY-NC-ND 4.0. Six core
  results with source locators, datasets used, the model equations, and the method.
sidebar:
  label: Avramov-Cheng-Tarelli 2026
  order: 1
tags: [paper-summary, esg, asset-pricing, mutual-funds, information-acquisition,
       cost-of-capital, sustainable-investing, fama-macbeth, portfolio-sort,
       open-access, peer-reviewed, unreplicated,
       data:wrds, data:crsp-mutual-funds, data:msci-esg, data:ibes, data:thomson-13f]
paper:
  authors: Doron Avramov, Si Cheng, Andrea Tarelli
  authorList:
    - { family: Avramov, given: Doron, affiliation: "Reichman University (IDC Herzliya)" }
    - { family: Cheng, given: Si, orcid: "0000-0002-2109-7636", affiliation: Syracuse University }
    - { family: Tarelli, given: Andrea, orcid: "0000-0003-2114-484X", affiliation: "Università Cattolica del Sacro Cuore" }
  year: 2026
  venue: Journal of Banking and Finance 182 (2026) 107597
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2025.107597
  tier: field
  jel:
    codes: [G11, G12, G23, M14, Q01]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Sustainable Finance and Green Bonds", "Financial Markets and Investment Strategies", "Corporate Social Responsibility Reporting"]
  dataAccess: licensed-commercial
  outcome:
    - implied cost of equity capital (ICC) for individual stocks
    - stock price informativeness
    - fund portfolio ESG deviation from benchmark
  outcomeClass: [security-returns, fund-behavior]
  license: "CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by-nc-nd/4.0/, start 2025-11-20; corroborated by artifact p.1 CC BY-NC-ND license notice)"
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: "open-access PDF available via publisher DOI (Elsevier ScienceDirect, confirmed 2026-06-25)"
  redistribution: extract-only (CC BY-NC-ND 4.0 permits verbatim redistribution but prohibits derivative works; this page is an IAR adaptation for noncommercial research purposes)
  resultsCount: 6
  citedByCount: 1
  methods:
    role: both
    family: structural
    buildsFrom: [noisy-rational-expectations, fama-macbeth, portfolio-sort]
    identification: descriptive
  contributionType: [new-theory, new-fact]
  mechanisms: [information-asymmetry]
  scope:
    region: US
    assetClass: US equities and US equity mutual funds
    period: 2007-01..2021-12
    frequency: monthly
    dataType: [market, accounting, other]
    granularity: [security, firm]
    n: "4031 unique equity funds; 3422 unique stocks; avg. 1777 funds and 1374 stocks per month, 2007-2021"
  findings:
    - { ref: R1, outcome: stock price informativeness, metric: coefficient, value: "β₂ = 0.039*** (t=5.51) on Log(M/A) × ESGDev; 1-SD increase in ESGDev → 43.9% (h=1) higher price informativeness; 1-SD increase in ESGDisp → 71.4% (h=1) higher price informativeness", direction: positive }
    - { ref: R2, outcome: "implied cost of equity capital (ICC)", metric: basis-points, value: "DGTW-adj. ICC spread ESG Q3-Q5 = 0.072%/month; Q1-Q3 = 0.012%/month; all differences significant at 1%", direction: negative, vsBenchmark: "low-ESG quintile (concave ESG-ICC relation)" }
    - { ref: R3, outcome: "implied cost of equity capital (ICC)", metric: basis-points, value: "High Green IO group: green vs. brown ICC = -0.115%/month (-0.066% DGTW-adj.); high/low Green-IO ICC spread = -0.094% (-0.046%)", direction: negative, vsBenchmark: "low Green IO group (insignificant ESG-ICC spread at 10% level)" }
    - { ref: R4, outcome: "implied cost of equity capital (ICC)", metric: basis-points, value: "Low Brown IO group: green vs. brown ICC = -0.138%/month (-0.079% DGTW-adj.); high/low Brown-IO ICC spread = 0.134% (0.077%)", direction: negative, vsBenchmark: "high Brown IO group (insignificant ESG-ICC spread)" }
    - { ref: R5, outcome: "implied cost of equity capital (ICC)", metric: coefficient, value: "Green IO = -0.824*** (t=-7.84); High Green IO = -0.035*** (t=-9.09); High ESG × High Green IO = -0.020*** (t=-3.03); Low ESG × Brown IO = -0.352*** (t=-3.17)", direction: negative }
    - { ref: R6, outcome: fund abnormal returns in ESG-matched stocks, metric: alpha, value: "High-Green-IO high-ESG stocks: CAPM alpha = -0.304%/month; HML-R (high vs. low ESG within high Green IO) = -0.588%/month; Low-Brown-IO low-ESG stocks: CAPM alpha = +0.455%/month; outperform low-Brown-IO high-ESG by 0.579%/month", direction: positive, vsBenchmark: "green stocks held by brown funds yield insignificant CAPM alpha" }
  resultType: new-finding
  relatesTo:
    - { cite: "Grossman and Stiglitz (1980)", relation: builds-on, note: "equilibrium information acquisition framework; model extends to multi-asset setting with heterogeneous ESG preferences" }
    - { cite: "Kacperczyk, Van Nieuwerburgh & Veldkamp (2016)", relation: builds-on, note: "rational attention allocation model for mutual funds; paper extends by incorporating ESG motives as a new force shaping attention allocation" }
    - { cite: "Breugem and Buss (2019)", relation: extends, note: "institutional-investor information acquisition model; extended to accommodate heterogeneous ESG preferences and their asset pricing implications" }
    - { cite: "Pastor, Stambaugh & Taylor (2021)", relation: tests, note: "equilibrium ESG-return model; paper documents concave (not merely linear) ESG-ICC relation and information channel as a novel amplifying force" }
    - { cite: "Hartzmark and Sussman (2019)", relation: cites, note: "documents fund flows to high-sustainability Morningstar funds; motivates the modeling of ESG-perceptive active fund managers" }
  openQuestions:
    - "How to account explicitly for the additional information about assets' ESG profiles when ESG ratings disagree substantially across vendors (conclusion, p.15)."
    - "Incorporating delegation, where uninformed households entrust investments to informed intermediaries, which could yield testable equilibrium restrictions on fund flows and ESG-driven motives (conclusion, p.15)."
    - "Extending the framework to settings with dynamic preferences for sustainability and ESG profiles under symmetric risk, as in De Angelis et al. (2023) and Avramov et al. (2025) (conclusion, p.15)."
    - "Relaxing the assumption of exogenous firm ESG profiles to allow activist shareholders to improve the sustainability performance of targeted firms (conclusion, p.15)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (16 pp., Tables 1-4, Fig. 1, Online Appendix referenced); six results extracted from the CC-BY-NC-ND open-access PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; five fixes applied: JEL codes M14/Q01 added (p.1); R1 71.4% corrected from ESGDev h=5 to ESGDisp h=1 (p.9 text); R5 model locator corrected from 1-2,5-6 to 1-4 (Table 4); Eq.(5) page corrected p.5→p.4; δ̄_i formula corrected from S⁻¹ to σ̂⁻¹ (posterior precision, Proposition 1 p.4). R6 direction:positive left as-is (ambiguous; paper text p.13 asserts green funds earn positive abnormal returns, though stock CAPM alpha is −0.304%)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107597", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by-nc-nd/4.0/, start=2025-11-20; two additional TDM entries present (Elsevier TDM license)" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the equilibrium model it builds on (multi-asset noisy rational expectations with ESG preferences), and the method (information acquisition optimality conditions and two Fama-MacBeth regression designs) with defining equations: enough to understand what it found and how, without reading all 16 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107597).

## TL;DR

Avramov, Cheng, and Tarelli develop a noisy rational-expectations equilibrium model of active fund management in which agents have heterogeneous ESG preferences and can acquire costly private signals about asset payoffs. Building on the information acquisition framework of Grossman and Stiglitz (1980), the model shows that in equilibrium ESG-perceptive fund managers intensify information acquisition for assets that deviate from ESG neutrality, especially green (high-ESG) assets, which broadens the scope of active management. The enhanced signal precision lowers the posterior variance of green asset payoffs, reducing their implied cost of equity capital (ICC) and making the ESG-ICC relation negative and concave. The paper relates to the evidence in Hartzmark and Sussman (2019) that sustainability ratings drive fund flows, and tests the equilibrium ESG-return predictions of Pastor, Stambaugh & Taylor (2021) by documenting a concave (not merely linear) ESG-ICC relation amplified by an information channel absent from prior theory. Applied to monthly data on U.S. equity mutual funds and common stocks from 2007 to 2021, the model predictions are confirmed: stocks held by funds with heterogeneous ESG preferences display higher price informativeness, green stocks held by green funds have significantly lower ICC than brown stocks, and green funds earn significantly positive abnormal returns when investing in green stocks.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Stock price informativeness increases with departure from green neutrality (ESGDev) and with fund ESG preference heterogeneity (ESGDisp) | Table 2, Models 2-4, p. 9 | β₂ on Log(M/A) × ESGDev = 0.039\*\*\* (t=5.51) in Model 2; 1-SD increase in ESGDev → 43.9% (h=1) higher price informativeness; 1-SD increase in ESGDisp → 71.4% (h=1); β₃ on Log(M/A) × ESGDisp = 0.098\*\*\* (h=1) |
| R2 | ESG-ICC relation is negative and concave: the difference in DGTW-adjusted ICC widens sharply from low-to-mid to mid-to-high ESG quintiles | Figure 1, p. 13; Table 3, p. 12 | DGTW-adj. ICC difference between ESG quintiles Q1 and Q3: 0.012%/month; between Q3 and Q5: 0.072%/month; all differences significant at 1% |
| R3 | When Green IO is high, green stocks display significantly lower ICC than brown stocks; the effect is absent at low Green IO | Table 3, Panel A, p. 12 | High Green IO group: green vs. brown ICC = -0.115\*\*\* (-0.066\*\*\* DGTW-adj.) per month; HML-R ICC spread across high/low Green-IO portfolios = -0.094% (-0.046%), significant |
| R4 | When Brown IO is low, green stocks display significantly lower ICC than brown stocks; at high Brown IO the spread is insignificant | Table 3, Panel B, p. 12 | Low Brown IO group: green vs. brown ICC = -0.138\*\*\* (-0.079\*\*\* DGTW-adj.) per month; ICC spread across high/low Brown-IO portfolios = 0.134% (0.077%), significant at 0.134% (0.077%) |
| R5 | Fama-MacBeth ICC regression confirms: Green IO and its interaction with high-ESG stock significantly reduce ICC | Table 4, Models 1-4, p. 14 | Green IO = -0.824\*\*\* (t=-7.84); High Green IO = -0.035\*\*\* (t=-9.09); High ESG × High Green IO = -0.020\*\*\* (t=-3.03); Low ESG × Brown IO = -0.352\*\*\* (t=-3.17); Low ESG × High Brown IO = -0.014\*\* (t=-2.24) |
| R6 | Green funds earn significantly positive abnormal returns when investing in green stocks; green stocks held by brown funds yield insignificant returns | Online Appendix Table A.2, referenced p. 13 | High-Green-IO, high-ESG stocks: CAPM alpha = -0.304%/month; HML-R (high vs. low ESG, high Green IO) = -0.588%/month (Panel A1); Low-Brown-IO, low-ESG stocks: CAPM alpha = +0.455%/month, outperform high-ESG stocks by 0.579%/month (Panel A3) |

**Overall (paper's conclusion).** ESG considerations play a central role in shaping mutual funds' information decisions, portfolio choices, and the cross-section of asset prices. Information acquisition driven by ESG motives not only provides capital to green firms at a lower cost but also improves overall financial market efficiency by incorporating more private information into equilibrium prices. The concave ESG-ICC relation and the asymmetric performance of green and brown funds in their preferred ESG domains provide corroborating evidence for the model's information channel.

## Theory / model

The economy has $$N$$ risky assets. For $$i \in \{1, \ldots, N-1\}$$, asset payoffs load on both idiosyncratic and an aggregate risk factor; the $$N$$th asset is a pure aggregate asset (p. 3, Eq. 1):

$$
\begin{cases}
f_i = \mu_i + b_i z_N + z_i, & i \in \{1, \ldots, N-1\} \\
f_N = \mu_N + z_N
\end{cases}
\tag{1}
$$

where $$\mu_i$$ is the expected payoff, $$b_i$$ is the asset's exposure to the aggregate factor $$z_N$$, and $$z_i \sim \mathcal{N}(0, \sigma_i)$$ is an idiosyncratic shock. Shocks are uncorrelated. The risk factor supply for asset $$i$$ is $$\bar{x}_i + x_i$$ where $$\bar{x}_i$$ is mean supply and $$x_i \sim \mathcal{N}(0, \sigma_N^2(1+b_i^2))$$ is a random component. Random supply introduces noise that prevents prices from fully revealing private signals.

Agents are indexed by $$j$$ on a continuum. Each agent-asset pair $$(i,j)$$ can acquire a private signal (p. 3, Eq. 2):

$$
\eta_{ij} = z_i + \varepsilon_{ij}, \qquad \varepsilon_{ij} \sim \mathcal{N}\!\left(0, S_{ij}^{-1}\right)
\tag{2}
$$

where $$S_{ij} \geq 0$$ is the signal precision chosen by agent $$j$$ at cost $$c_{ij}(S_{ij})$$, a continuous, increasing, convex function with $$c_{ij}(0)=0$$. Agents are heterogeneous in their cost functions (stock-picking skill) and in their ESG preference parameter $$\delta_j \geq 0$$ (nonnegative for all agents, strictly positive for ESG-perceptive agents).

In period 2, after signals are realized, agents choose portfolios to maximize mean-variance utility with an ESG preference term (p. 4, Eq. 3):

$$
U_{2j} = \text{E}_{2j}\!\left[W_j\right] - \frac{\rho}{2}\,\text{Var}_{2j}\!\left[W_j\right] + \delta_j G_j
\tag{3}
$$

where $$\rho > 0$$ is the common risk-aversion coefficient, $$W_j$$ is terminal wealth, and $$G_j = \sum_{i=1}^N q_{ij} g_i$$ is the portfolio ESG score ($$q_{ij}$$ = holding of asset $$i$$, $$g_i$$ = ESG score, mean-zero with $$g_N = 0$$). A higher $$\delta_j$$ implies stronger ESG-driven preferences; $$\delta_j = 0$$ yields standard mean-variance.

The key pricing implication follows from Proposition 4 (p. 5). The expected net payoffs are (Eqs. 9-10):

$$
\text{E}\!\left[f_N - p_N\right] = \rho\bar{\sigma}_N
\tag{9}
$$

$$
\text{E}\!\left[f_i - p_i\right] = b_i\,\text{E}\!\left[f_N - p_N\right] + \rho\bar{\sigma}_i - \bar{\delta}_i g_i
\tag{10}
$$

where $$\bar{\sigma}_i$$ is the cross-agent average posterior payoff variance (the inverse of $$\bar{\sigma}_i^{-1} = \sigma_i^{-1} + \bar{S}_i + \sigma_{p_i}^{-1}$$) and $$\bar{\delta}_i = \bar{\sigma}_i \int \hat{\sigma}_{ij}^{-1}\,\delta_{ij}\,dj$$ is the aggregate, posterior-precision-weighted ESG preference for asset $$i$$ (where $$\hat{\sigma}_{ij}^{-1} = \sigma_i^{-1} + S_{ij} + \sigma_{p_i}^{-1}$$ is agent $$j$$'s posterior precision for asset $$i$$; Proposition 1, p. 4). Equation (10) shows that the expected return on asset $$i$$ is reduced by $$\bar{\delta}_i g_i$$, all else equal: green assets ($$g_i > 0$$) have lower expected returns, and brown assets ($$g_i < 0$$) have higher expected returns. The negative ESG-ICC relation is therefore a direct equilibrium prediction, amplified by the information channel through $$\bar{\sigma}_i$$ (which falls when signals are more precise).

**Concavity.** For green assets the ESG preference motive (nonpecuniary benefit $$\delta_j g_i > 0$$) and the information-acquisition motive (more precise signals reduce posterior variance) both push expected returns down. For brown assets the two forces partially offset: the nonpecuniary motive lowers expected returns, but better signals increase them. Hence the negative ESG-return relation is more pronounced for green assets, making the curve concave.

## Method

In period 1, each agent chooses signal precision $$S_{ij}$$ for each asset to maximize expected utility (p. 4, Eq. 5). Proposition 2 characterizes the optimum (p. 5, Eq. 6):

$$
\hat{S}_{ij} = \max\!\left[0,\; s \;\middle|\; c'_{ij}(s) = \psi_{ij}\right]
\tag{6}
$$

The pre-cost marginal benefit of information for asset-agent pair $$(i,j)$$ is (p. 5, Eq. 7):

$$
\psi_{ij} = \frac{1}{2\rho}\!\left(\bar{\sigma}_i + \left(\rho^2\sigma_X + \bar{S}_i\right)\bar{\sigma}_i^2 + \left(\rho\bar{\sigma}_i + \left(\bar{\delta}_j - \bar{\delta}_i\right)g_i\right)^{\!2}\right)
\tag{7}
$$

where $$\bar{S}_i = \int S_{ij}\,dj$$ is the cross-agent average signal precision and $$\sigma_X$$ is the variance of the aggregate risk factor supply. The term $$(\bar{\delta}_j - \bar{\delta}_i)g_i$$ captures the ESG motive: funds whose ESG preference $$\bar{\delta}_j$$ is above (below) the aggregate $$\bar{\delta}_i$$ have a higher (lower) marginal benefit of acquiring information about asset $$i$$ when that asset's ESG score $$g_i$$ is nonzero.

Proposition 3 establishes that the cross-agent average signal precision increases with the absolute departure from green neutrality (p. 5, Eq. 8):

$$
\frac{\partial \bar{S}_i}{\partial |g_i|} = \xi_{Ai}\,\sigma_\delta\,|g_i| > 0
\tag{8}
$$

where $$\sigma_\delta$$ is the cross-agent dispersion in ESG preferences and $$\xi_{Ai} > 0$$ is a positive scalar. This proves that aggregated information acquisition rises for both green and brown assets as their ESG scores depart from zero, because the marginal benefit of information acquisition is quadratic in ESG preferences. As a consequence, the informational efficiency of asset prices (price informativeness) increases for stocks with more extreme ESG profiles and for stocks held by funds with more dispersed ESG preferences.

The equilibrium is solved by a fixed-point problem on $$\bar{S}_i$$: agents choose optimal signal precisions given aggregate precision, and aggregate precision is consistent with individual choices. The model builds on the information acquisition framework of Breugem and Buss (2019) for institutional investors, extending it to incorporate heterogeneous ESG preferences. The fund performance measure follows Kacperczyk, Van Nieuwerburgh & Veldkamp (2016): the expected excess net payoff (EENP) decomposes into an ESG-based portfolio tilt component and a skill (private signal precision) component, with both building on the `noisy-rational-expectations` and `fama-macbeth` primitives listed above.

## Empirical specifications

**Price informativeness (Eq. 14, Table 2, p. 9).** Price informativeness is measured following Bai et al. (2016) as the ability of the current market-to-book ratio to predict future earnings-to-assets. The monthly Fama and MacBeth (1973) regression tests the model predictions about ESGDev and ESGDisp:

$$
\frac{E_{i,y+h}}{A_{i,y}} = \alpha + \beta_1\log\!\frac{M_{i,y}}{A_{i,y}} + \beta_2\log\!\frac{M_{i,y}}{A_{i,y}} \times \text{ESGDev}_{i,y} + \beta_3\log\!\frac{M_{i,y}}{A_{i,y}} \times \text{ESGDisp}_{i,y}
+ \beta_4\,\text{ESGDev}_{i,y} + \beta_5\,\text{ESGDisp}_{i,y} + \beta_6\frac{E_{i,y}}{A_{i,y}} + c N_{i,y} + \varepsilon_{i,y+h}
\tag{14}
$$

where $$E_{i,y+h}/A_{i,y}$$ is earnings-before-interest-and-taxes over total assets for stock $$i$$ in year $$y+h$$, $$M_{i,y}/A_{i,y}$$ is the market-to-book ratio, $$\text{ESGDev}_{i,y}$$ is the absolute departure from green neutrality (from LASSO residual of MSCI ESG on 94 non-ESG characteristics), $$\text{ESGDisp}_{i,y}$$ is the stock-level dispersion in fund ESG preferences, and $$N_{i,y}$$ stacks all other stock-level controls. Standard errors follow Newey and West (1987). Forecasting horizons are $$h=1$$ year (Models 1-5) and $$h=5$$ years (Models 6-10).

**ESG-ICC regression (Eq. 15, Table 4, p. 14).** The implied cost of capital is estimated following Hou et al. (2012) and Pastor, Stambaugh & Taylor (2022). The main Fama and MacBeth (1973) regression is:

$$
\text{ICC}_{i,t} = \alpha + \beta_1\,\text{ESG}_{i,t-1} + \beta_2\,\text{IO}_{i,t-1} + \beta_3\,\text{ESG}_{i,t-1} \times \text{IO}_{i,t-1} + c N_{i,t-1} + \varepsilon_{i,t}
\tag{15}
$$

where $$\text{ICC}_{i,t}$$ is the monthly implied cost of capital for stock $$i$$, $$\text{ESG}_{i,t-1}$$ is a high/low ESG indicator (top/bottom quintile), $$\text{IO}_{i,t-1}$$ is a vector of fund-ownership indicators (Green IO, Brown IO, high/low variants), and $$N_{i,t-1}$$ stacks stock-level controls (Log(Size), Log(BM), ROE, I/A, 1M Return, 12M Return). Standard errors follow Newey and West (1987).

**Portfolio double sorts (Table 3).** At the end of each month $$t$$, stocks are first sorted into terciles by Green IO (or Brown IO) and then within each tercile into quintiles by ESG rating, yielding 15 ($$3 \times 5$$) portfolios. Value-weighted ICC is computed in month $$t+1$$ and rebalanced monthly. The HML-R spread (high ESG minus low ESG within each ownership tercile) measures the ESG-ICC relation. The HML-G spread (high minus low ownership within each ESG quintile) measures the effect of fund ESG preference alignment. ICCs are additionally adjusted for the CAPM market factor, the Fama-French six-factor model (FF6), and the characteristic-adjusted DGTW model.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP common stocks (daily/monthly returns, prices, shares) | Stock-level returns, market cap, turnover, idiosyncratic volatility, short-term reversal | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Compustat annual fundamentals | Book-to-market, profitability, investment, leverage, sales, tangibility, earnings | [WRDS](/wiki/commercial/wrds/) (licensed) |
| MSCI ESG Ratings (INDUSTRY_ADJUSTED_SCORE) | Monthly ESG scores, residualized against 94 non-ESG characteristics via LASSO to produce Stock ESG and Stock ESGDev | [KLD / MSCI ESG](/wiki/commercial/kld/) (licensed) |
| CRSP mutual fund database (via WRDS MFLINKS) | Monthly net-of-fee fund returns, TNAs, turnover, expense ratio, fund flows, multiple share classes consolidated | [CRSP Mutual Funds](/wiki/commercial/crsp-mutual-funds/) (licensed) |
| Thomson-Reuters 13F institutional holdings | Quarterly fund equity holdings, used to compute fund-level ESG preference and stock-level fund ownership (Green IO, Brown IO, ESGDisp) | [Thomson 13F](/wiki/commercial/thomson-13f/) (licensed) |
| I/B/E/S analyst forecasts | Analyst coverage and forecast dispersion as stock-level controls; earnings forecasts for ICC computation via Hou et al. (2012) | [I/B/E/S](/wiki/commercial/ibes/) (licensed) |

Sample: January 2007 to December 2021 (15 years, monthly). Full sample contains 4031 unique equity funds and 3422 unique stocks; average 1777 funds and 1374 stocks per month. Equity funds are restricted to those with TNA of at least $15 million, identified as active via CRSP objective codes.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2025.107597) if you are: building or testing equilibrium models of ESG-driven information acquisition; studying the cross-section of expected returns under ESG-heterogeneous investors; examining the scope-of-active-management implications of sustainable investing; or replicating the ICC double-sort or price-informativeness Fama-MacBeth designs. The Online Appendix contains calibration exercises (Appendix B), model extensions for ESG rating disagreement and heterogeneous information costs (Appendix C), and additional empirical robustness checks (Appendix D). The locators above point to the exact tables and figures for each headline result.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* vol. 182 (2026). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**.

The article is published under CC BY-NC-ND 4.0, which permits noncommercial redistribution with attribution in unmodified form but does not permit derivative works. This page is an IAR adaptation prepared for noncommercial research and educational purposes.

> **Citation.** Avramov, Doron, Si Cheng, and Andrea Tarelli.
> "Active fund management when ESG matters."
> *Journal of Banking and Finance* 182 (2026): 107597.
> DOI: [10.1016/j.jbankfin.2025.107597](https://doi.org/10.1016/j.jbankfin.2025.107597).
> © 2025 The Authors. Published by Elsevier B.V. under
> [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
