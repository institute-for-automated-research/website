---
title: "Demand Disagreement: Heyerdahl-Larsen & Illeditsch (2026)"
description: >-
  Distilled: An OLG model where investors disagree about future demand for savings
  (driven by heterogeneous time preferences and a false consensus bias) generates
  stochastic yield volatility, time-varying bond risk premia, and an upward-sloping
  yield curve, resolving both the correlation puzzle and the disagreement correlation
  puzzle without relying on disagreement about macroeconomic fundamentals.
  Journal of Financial Economics 2026, CC BY 4.0. Twelve core results with source
  locators, datasets used, the model (equilibrium SDF and consumption share
  dynamics), and the method (SPF-based demand disagreement proxy + UKF estimation).
sidebar:
  label: Heyerdahl-Larsen-Illeditsch 2026
  order: 1
tags: [paper-summary, asset-pricing, bond-risk-premia, yield-curve, heterogeneous-beliefs,
       disagreement, term-structure, open-access, cc-by, peer-reviewed, unreplicated,
       data:spf, data:fred, data:shiller-data]
paper:
  authors: Christian Heyerdahl-Larsen, Philipp Illeditsch
  authorList:
    - { family: Heyerdahl-Larsen, given: Christian, orcid: "0000-0001-6931-4364", affiliation: BI Norwegian Business School }
    - { family: Illeditsch, given: Philipp K., orcid: "0000-0003-4258-1387", affiliation: Mays Business School, Texas A&M University }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104191
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104191
  jel:
    codes: [G12, G11, D84]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics: ["Consumer Market Behavior and Pricing", "Economics of Agriculture and Food Markets", "Economic and Environmental Valuation"]
  dataAccess: public
  outcome:
    - bond risk premia
    - nominal yield volatility
    - real bond yields
    - yield curve slope
    - patient investors' consumption share
    - disagreement about future interest rates
    - asset return and yield correlations with fundamentals
    - yield disagreement
    - stock market risk premium
  outcomeClass: [security-returns, asset-prices]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-10-31; corroborated by artifact p. 1 CC BY notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access (Elsevier ScienceDirect, CC BY VOR confirmed Crossref 2026-06-24)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 12
  citedByCount: 0

  methods:
    role: both
    contributes: demand-disagreement-olg
    family: structural
    buildsFrom: [overlapping-generations, unscented-kalman-filter, panel-regression]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [behavioral-bias, demand-elasticity, demand-disagreement]
  scope:
    region: US
    assetClass: US Treasury bonds, US equities, consol bond
    period: 1981-07..2024-06
    frequency: quarterly
    dataType: [survey, market]
    granularity: [aggregate]
    n: "SPF quarterly forecasts Q3 1981-Q2 2024 (172 quarters); Shiller annual data 1891-2009 (Table 1)"
  findings:
    - { ref: R1, outcome: yield disagreement, metric: r-squared, value: "Changes R2 = 0.22-0.32 for 1-4Q ahead regressions of T-bill disagreement on macro-fundamental disagreement; Level R2 = 0.72-0.77", direction: positive }
    - { ref: R2, outcome: nominal yield volatility, metric: coefficient, value: "Standardized regression coefficients in data: 0.66-0.73 (t-stats 11.5-14.1) across maturities 1-5Y", direction: positive, vsBenchmark: "model standardized coefficients 0.99 (Table 3, p. 12)" }
    - { ref: R3, outcome: bond risk premia, metric: coefficient, value: "Standardized regression coefficients in data: 0.38-0.44 (t-stats 4.9-5.8) across maturities 2-5Y; model instantaneous-premium coefficients: 0.15", direction: positive, vsBenchmark: "Model instantaneous-premium coefficients (0.15) are smaller than the empirical holding-period-return coefficients (0.38-0.44)" }
    - { ref: R4, outcome: real bond yields, metric: r-squared, value: "Regression of observed on model-implied real yields: coeff 0.52-0.62, R2 = 0.63-0.69 across maturities 2-10Y", direction: positive, vsBenchmark: "slope coefficient of one not rejected for any maturity (Table 5, p. 13)" }
    - { ref: R5, outcome: bond risk premia, metric: r-squared, value: "Regression of observed on model-implied nominal bond risk premia: coeff 1.28-1.54, R2 = 0.08-0.18 across maturities 2-5Y", direction: positive, vsBenchmark: "slope coefficient of one not rejected (Table 5, p. 13)" }
    - { ref: R6, outcome: stock market risk premium, metric: return-spread, value: "Baseline calibration (sigma_Delta=0.8): stock market risk premium 3.6%, stock market volatility 22.8%", direction: positive, vsBenchmark: "no-disagreement (sigma_Delta=0) produces equity premium of 0.11% (Fig. 3, p. 9)" }
    - { ref: R7, outcome: disagreement about future interest rates, metric: r-squared, value: "Log-disagreement regression R2 = 0.497, 0.553, 0.604, and 0.627 for 1Q, 2Q, 3Q, and 4Q ahead, respectively", direction: positive }
    - { ref: R8, outcome: asset return and yield correlations with fundamentals, metric: correlation, value: "Table 1 correlations (1/5/10-year horizons): stock returns with dividends = 0.08/0.46/0.65 and consumption = 0.00/0.28/0.11; trading-volume changes with dividends = 0.21/0.35/0.31 and consumption = 0.29/0.38/0.40; one-year yield changes with dividends = 0.26/0.20/0.24 and consumption = -0.16/0.04/0.06", direction: mixed }
    - { ref: R9, outcome: yield disagreement, metric: probability, value: "Demand disagreement is 65% of yield disagreement at the one-quarter horizon and 76% at the four-quarter horizon", direction: positive, vsBenchmark: "As a share of total yield disagreement" }
    - { ref: R10, outcome: patient investors' consumption share, metric: probability, value: "Unconditional mean share falls from 33.4% at sigma_delta=0 to 31.7% at 0.4 and 29.0% at 0.8; its volatility rises from 10% to 24.5% and 29.4%", direction: mixed, vsBenchmark: "Compared with the no-disagreement (sigma_delta=0) baseline" }
    - { ref: R11, outcome: real bond yields, metric: coefficient, value: "Observed-on-model-implied real yield curve slope: coefficient = 1.147, reported Std. Dev. = 0.275, R2 = 0.236; coefficient of one is not rejected", direction: positive, vsBenchmark: "Coefficient of 1 is not rejected" }
    - { ref: R12, outcome: real bond yields, metric: r-squared, value: "Observed-on-model-implied real yield volatility R2 = 0.035, 0.086, 0.155, 0.136, and 0.088 for 2-, 3-, 5-, 7-, and 10-year maturities", direction: positive, vsBenchmark: "Lowest fit is at 2-year maturity" }
  resultType: confirms
  relatesTo:
    - { cite: "Blanchard (1985)", relation: builds-on, note: "OLG framework in continuous time with exponential agent lifetimes" }
    - { cite: "Garleanu and Panageas (2015)", doi: '10.1086/680996', relation: builds-on, note: "OLG asset pricing with heterogeneous time preferences; paper extends this by adding belief disagreement" }
    - { cite: "Giacoletti, Laursen and Singleton (2021)", doi: '10.1111/jofi.12971', relation: tests, note: "paper confirms their finding that macro disagreement cannot fully explain yield disagreement, then offers a demand-disagreement resolution" }
    - { cite: "Ehling, Gallmeyer, Heyerdahl-Larsen and Illeditsch (2018a)", doi: '10.1016/j.jfineco.2018.01.001', relation: builds-on, note: "prior work by co-authors on inflation disagreement and the yield curve; this paper shifts focus to time-preference (demand) disagreement" }
    - { cite: "Albuquerque, Eichenbaum, Luo and Rebelo (2016)", doi: '10.1111/jofi.12437', relation: cites, note: "their representative-agent setup uses time-discount-factor shocks to address the correlation puzzle; this paper instead prices demand shocks through heterogeneous time preferences and beliefs" }
  openQuestions:
    - "Model cannot capture equity premium magnitudes comparable to data because demand shocks affect only the consol bond return, not the stock's cash-flow exposure; extending to recursive preferences or heterogeneous risk aversion would be needed (Section 6.1, p. 13)."
    - "Time-varying disagreement from learning (Section 6.2, p. 14) and production economies (Section 6.3, p. 14) are sketched as extensions but not fully estimated; detailed derivations are in the Internet Appendix."
  replicationCode:
    url: "https://doi.org/10.1016/j.jfineco.2025.104191"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full text read (16 pp. + appendices). Not human-verified. Not reproduced. Replication data deposited at Mendeley Data and code at Zenodo; neither run here." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-24, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed: R1 core-table horizon labels (1Q Changes R²=0.318, not 0.22; 3Q is the minimum at 0.217); fixed α_t vs l_t confusion in OLG model text; corrected sign-reversed excess-return formula in Method and Empirical-Specifications sections (PDF: Ty_t-(T-4)y_{t+4}-y^{(1)}, not the negative); removed colorful adjective ('surprisingly'); corrected UKF description (sigma-point propagation replaces, not underlies, EKF linearization). All six result rows and Table 2-5 locators confirmed correct." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the assigned PDF and augmented the Core results with six missing findings, added their findings entries, and transcribed missing numbered equations and Table 5 specification details. Additions are not human-verified or reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 12 Core results, formal equations and specifications, classification axes, findings, prose and frontmatter against the PDF; corrected bond excess-return remaining-maturity notation in both specifications, clarified model instantaneous-premium versus data holding-period results, corrected demand-shock notation to alpha and sigma-Delta, preserved Table 5's reported Std. Dev. label, corrected Fig. 3 locator to p. 9, removed unsupported Fama-MacBeth method tag, corrected findings directions for R1, R7 and R12 and non-comparison vsBenchmark labels, corrected the Albuquerque relation note, and set resultType to confirms. Abstract headline on demand disagreement's positive relation with yield levels remains omitted from Core results." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jfineco.2025.104191", checked: 2026-06-24, by: "paper-distiller (claude-sonnet-4-6)", found: "license[0] content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-10-31; two tdm-only entries also present" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the OLG model it proposes (equilibrium SDF, consumption share dynamics, and bond pricing), and the empirical method (SPF-based demand disagreement proxy and UKF estimation): enough to know what it found and how, without reading all 16 pages. To replicate or extend, read the original at [doi.org/10.1016/j.jfineco.2025.104191](https://doi.org/10.1016/j.jfineco.2025.104191).

## TL;DR

Standard heterogeneous-beliefs models predict that disagreement about asset prices should be tightly linked to disagreement about macroeconomic fundamentals. The data contradict this: a large fraction of yield disagreement remains after conditioning on every macro variable the Survey of Professional Forecasters (SPF) tracks, as documented by Giacoletti, Laursen and Singleton (2021). Albuquerque, Eichenbaum, Luo and Rebelo (2016) highlight a related puzzle for equity returns. Heyerdahl-Larsen and Illeditsch call this the "disagreement correlation puzzle" and resolve it with a model where investors disagree not about fundamentals but about future demand for savings, driven by differing time preferences and a false consensus bias. In equilibrium, this demand disagreement introduces a priced demand shock, generating stochastic yield volatility, time-varying bond risk premia, and an unconditionally upward-sloping yield curve. Using the component of SPF yield disagreement orthogonal to macro disagreement as their proxy, the paper confirms that demand disagreement is positively related to yield volatility and predicts future excess bond returns, consistent with the model.

## Core results

Magnitudes are as reported; locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Macro-fundamental disagreement explains only a modest portion of yield disagreement, especially in the changes specification | Table 2, p. 4 | Changes R² ranges from 0.22 (3Q ahead, lowest) to 0.32 (1Q ahead, highest); Level R² = 0.72-0.77; substantial residual unexplained by fundamentals |
| R2 | Demand disagreement is strongly positively associated with nominal yield volatility across all maturities (1-5Y), both in model and data | Table 3, p. 12 | Standardized coefficients in data: 0.66-0.73 (t-stats 11.5-14.1); model values: 0.99 (near one-for-one) |
| R3 | Demand disagreement is positively associated with model bond risk premia and predicts excess bond returns in data across maturities (2-5Y) | Table 4, p. 12 | Standardized data coefficients: 0.38-0.44 (t-stats 4.9-5.8); model instantaneous-premium coefficients: 0.15 |
| R4 | Model-implied real yields closely track observed real yields; slope coefficient of one not rejected | Table 5, p. 13 | Regression coeff 0.52-0.62, R² = 0.63-0.69 across maturities 2-10Y |
| R5 | Model-implied nominal bond risk premia are positively associated with observed realized premia | Table 5, p. 13 | Observed-on-model coefficients 1.28-1.54, R² = 0.08-0.18 across maturities 2-5Y |
| R6 | Baseline calibration generates a positive equity premium and excess bond return that would be essentially zero without demand disagreement | Fig. 3, p. 9 | Equity risk premium = 3.6%, stock market volatility = 22.8% at sigma\_Delta = 0.8; without disagreement (sigma\_Delta = 0) equity premium = 0.11% |
| R7 | Fundamental disagreements also explain only a limited share of logged T-bill disagreement | Table 2, p. 4 | Log-disagreement regression R² = 0.497, 0.553, 0.604, and 0.627 for 1Q, 2Q, 3Q, and 4Q ahead, respectively |
| R8 | Long-run correlations between asset outcomes and fundamentals are low, motivating the correlation puzzle | Table 1, p. 3 | At 1/5/10-year horizons, stock return correlations with dividends = 0.08/0.46/0.65 and consumption = 0.00/0.28/0.11; trading-volume changes with dividends = 0.21/0.35/0.31 and consumption = 0.29/0.38/0.40; real-yield changes with dividends = 0.26/0.20/0.24 and consumption = -0.16/0.04/0.06 |
| R9 | The residual disagreement proxy represents most of the cross-sectional spread in yield forecasts | Fig. 1, p. 4 | Demand disagreement is 65% of yield disagreement at one quarter and 76% at four quarters |
| R10 | Demand disagreement lowers patient investors' long-run consumption share and raises its volatility | Fig. 4, p. 10 | Mean share falls from 33.4% at sigma\_delta = 0 to 31.7% at 0.4 and 29.0% at 0.8; volatility rises from 10% to 24.5% and 29.4% |
| R11 | The model's implied real yield curve slope tracks the observed slope with a coefficient statistically indistinguishable from one | Table 5, p. 13 | Coefficient = 1.147 (reported Std. Dev. = 0.275), R² = 0.236; coefficient of one is not rejected |
| R12 | The model fits real yield volatility less closely than real yields and bond premia | Table 5, p. 13 | Observed-on-model-implied R² = 0.035, 0.086, 0.155, 0.136, and 0.088 for 2-, 3-, 5-, 7-, and 10-year maturities |

**Overall (paper's conclusion).** Demand disagreement, driven by investors' incomplete knowledge of the evolving mix of patient and impatient agents in the economy, accounts for a large share of observed yield disagreement and explains stylized facts in bond and equity markets that macro-fundamentals-based models leave unresolved: positive and time-varying risk premia, yield volatility, and an upward-sloping term structure. The single-shock OLG structure is parsimonious but delivers good fits to yields, yield volatilities, and bond risk premia when estimated on SPF and TIPS data.

## Theory / model

The economy is a continuous-time OLG model in the tradition of Blanchard (1985) and Garleanu and Panageas (2015). The paper builds on Ehling, Gallmeyer, Heyerdahl-Larsen and Illeditsch (2018a), who study inflation disagreement and the yield curve, shifting the focus to time-preference (demand) disagreement. A continuum of agents is born at rate $$\nu > 0$$ and dies at the same rate. There are two investor types: patient (type $$a$$, low discount rate $$\rho^a$$) and impatient (type $$b$$, high discount rate $$\rho^b > \rho^a$$). The fraction of patient newborns is $$\alpha_t$$, where $$\alpha_t = 1/(1+\exp(-l_t))$$ and $$l_t$$ follows a mean-reverting Ornstein-Uhlenbeck process (Section 3.1, p. 5):

$$
dl_t = \kappa(\bar{l} - l_t)\,dt + \sigma_l\,dZ_{\alpha,t} \tag{4}
$$

This demand shock $$Z_{\alpha,t}$$ is independent of the output supply shock $$Z_{Y,t}$$. Aggregate output $$Y_t$$ follows geometric Brownian motion with drift $$\mu_Y$$ and volatility $$\sigma_Y$$. Each agent has log utility over consumption, common endowment, and trades in four securities: the stock, a risk-free bond, and a consol bond (zero-net-supply) driven by $$Z_{Y,t}$$ and $$Z_{\alpha,t}$$ respectively.

**False consensus bias and belief dynamics.** Both types observe $$\alpha_t$$ and $$l_t$$, but disagree about the long-run mean $$\bar{l}$$: patient investors are optimistic ($$\bar{l}^a \geq \bar{l}$$), impatient investors pessimistic ($$\bar{l}^b \leq \bar{l}$$) (Section 3.2, p. 5). The likelihood ratio capturing belief disagreement is (Eq. 8, p. 6):

Each agent's lifetime objective and wealth dynamics are, respectively, Eq. 5 and Eq. 6 (Section 3.1, p. 5):

$$
\mathbb{E}_s^i\!\left[\int_s^{\tau^i} e^{-\rho^i(t-s)}\log(c^i_{s,t})\,dt\right] \tag{5}
$$

$$
dW^i_{s,t} = (r_tW^i_{s,t}-c^i_{s,t})dt + \Phi^i_{s,t}(dR^S_t-r_tdt) + \Psi^i_{s,t}(dR^C_t-r_tdt) + d\mathcal{L}^i_{s,t} \tag{6}
$$

Agents of type $$i\in\{a,b\}$$ perceive the demand process and shock as in Eq. 7 (Section 3.2, p. 5):

$$
dl_t = \kappa(\bar{l}^i-l_t)dt + \sigma_l dZ^i_{\alpha,t}, \qquad Z^i_{\alpha,t}=Z_{\alpha,t}-\sigma^i_\Delta t, \qquad \sigma^i_\Delta=(\bar{l}^i-\bar{l})\frac{\kappa}{\sigma_l} \tag{7}
$$

$$
\eta_t \equiv \frac{\eta_t^b}{\eta_t^a} = \exp\!\left(-\tfrac{1}{2}\sigma_\Delta^2\,t - \sigma_\Delta\,Z_{\alpha,t}\right), \quad \sigma_\Delta = \frac{2\kappa}{\sigma_l}(\bar{l} - \bar{l}^b) \tag{8}
$$

The parameter $$\sigma_\Delta \geq 0$$ measures the degree of demand disagreement between types.

**Equilibrium SDF.** Proposition 1 (p. 6) establishes the equilibrium SDF:

$$
\xi_t = \frac{X_t}{Y_t}, \qquad X_t = \int_{-\infty}^t \nu e^{-\nu(t-s)}\!\left(\alpha_s\beta_s^a e^{-\rho^a(t-s)}\frac{\eta_t^a}{\eta_s^a} + (1-\alpha_s)\beta_s^b e^{-\rho^b(t-s)}\frac{\eta_t^b}{\eta_s^b}\right)X_s\,ds
$$

The SDF is inversely proportional to aggregate output $$Y_t$$ and depends on the process $$X_t$$, which captures heterogeneity in time discount rates and beliefs. The key state variable that fully describes all asset prices is the consumption share of patient investors, $$f_t$$.

The equilibrium follows from each type's static consumption choice subject to its state-price budget constraint, Eq. 9, and the resulting optimal consumption and newborn consumption share, Eqs. 10-11 (Section 4, pp. 5-6):

$$
\max_{\{c^i_{s,t}:s\leq t\}} \mathbb{E}_s^i\!\left[\int_s^\infty e^{-(\rho^i+\nu)(t-s)}\log(c^i_{s,t})dt\right], \qquad \text{s.t. }\mathbb{E}_s^i\!\left[\int_s^\infty e^{-\nu(t-s)}\frac{\xi^i_t}{\xi^i_s}(c^i_{s,t}-Y_t)dt\right]=0 \tag{9}
$$

$$
c^i_{s,t}=c^i_{s,s}e^{-\rho^i(t-s)}\frac{\xi^i_s}{\xi^i_t}, \qquad c^i_{s,s}=\frac{1}{\kappa^i_s}, \qquad i\in\{a,b\} \tag{10}
$$

$$
\beta^i_t \equiv \frac{c^i_{t,t}}{Y_t}=(\rho^i+\nu)\phi_t, \qquad i\in\{a,b\}, \qquad \phi_t=\frac{W_t}{Y_t} \tag{11}
$$

**Risk-free rate and market price of demand risk.** Proposition 3 (p. 6) gives the equilibrium short rate and market prices of risk (Eqs. 12-13):

$$
r_t = \mathcal{E}_f[\rho] + \mu_Y - \sigma_Y^2 + \nu\bigl(1 - \alpha_t\beta_t^a - (1-\alpha_t)\beta_t^b\bigr) \tag{12}
$$

$$
\theta_{\alpha,t} = \sigma_\Delta\!\left(\tfrac{1}{2} - f_t\right) \tag{13}
$$

where $$\mathcal{E}_f[\rho] = f_t\rho^a + (1-f_t)\rho^b$$ is the consumption-share-weighted discount rate and $$\beta_s^i = (\rho^i + \nu)\phi_t$$ is the initial consumption-wealth ratio. The market price of demand shock risk $$\theta_{\alpha,t}$$ is strictly decreasing in $$f_t$$: when patient investors dominate (high $$f_t$$), the consol appears overpriced and $$\theta_\alpha < 0$$; when impatient investors dominate (low $$f_t$$), the market price of demand risk is positive.

**Consumption share dynamics.** Proposition 5 (p. 9) gives the stochastic differential equation for $$f_t$$ (Eq. 15):

$$
df_t = \mu_{f,t}\,dt + \sigma_{f,t}\,dZ_{\alpha,t} \tag{15}
$$

$$
\mu_{f,t} = \nu\bigl(\alpha_t\beta_t^a(1-f_t) - (1-\alpha_t)\beta_t^b f_t\bigr) + (\rho^b - \rho^a)f_t(1-f_t) + \sigma_\Delta^2\!\left(\tfrac{1}{2} - f_t\right)f_t(1-f_t)
$$

$$
\sigma_{f,t} = f_t(1-f_t)\sigma_\Delta
$$

The diffusion $$\sigma_{f,t}$$ is maximized at $$f_t = 0.5$$ and vanishes at the extinction boundaries, so demand shocks have the largest impact when the economy is balanced between types.

**Consol price and stock return.** Corollary 2 (p. 7) establishes that the consol price equals the wealth-consumption ratio $$\phi_t$$, and its return is exposed only to the demand shock $$Z_{\alpha,t}$$. The stock price $$P_{s,t} = Y_t\phi_t$$ and its return dynamics are (Eq. 14):

$$
d\log P_{s,t} = d\log Y_{s,t} + d\log B_t^C \tag{14}
$$

separating cash-flow exposure from exposure to the consol. Both the stock and the consol inherit stochastic risk premia through their exposure to the demand shock price $$\theta_{\alpha,t}$$.

For the heterogeneous-risk-aversion extension, Eq. 16 defines the effective relative risk aversion and weighted demand-disagreement volatility (Section 6.1, p. 14):

$$
\mathcal{R}_t=\frac{1}{f_t\gamma^a_1+(1-f_t)\gamma^b_1}, \qquad \bar{\sigma}_{\Delta,t}=\frac{f_t\gamma^a_1\sigma^a_\Delta+(1-f_t)\gamma^b_1\sigma^b_\Delta}{f_t\gamma^a_1+(1-f_t)\gamma^b_1} \tag{16}
$$

## Method

The empirical motivation starts from the common pricing functional and the forecast equation for investors who disagree about fundamentals (Eq. 1, Section 2.2, p. 3):

$$
p_t=\mathbb{E}^i_t[m^i_{t+1}x_{t+1}]=p(X^F_t), \qquad \hat{p}^{i}_{t,t+\Delta t}=\mathbb{E}^i_t[p_{t+\Delta t}]=\mathbb{E}^i_t[p(X^F_{t+\Delta t})], \quad 0<\Delta t\leq 1 \tag{1}
$$

**Demand disagreement proxy (Eq. 2-3).** Because demand disagreement is not directly observable, the paper constructs a proxy from SPF data (Section 2.3, p. 4). Every forecaster $$i$$ in the SPF reports a forecast for the three-month T-bill rate $$\hat{y}^i_{t,t+\Delta t}$$ and for macro fundamentals $$\hat{X}^{i,LF}_{t,t+\Delta t}$$ for horizons $$\Delta t \in \{1Q,2Q,3Q,4Q\}$$. The paper first regresses the yield forecast on macro forecasts in a pooled cross-section:

$$
\hat{y}^i_{t,t+\Delta t} = \beta_0 + \beta'_X \hat{X}^{i,F}_{t,t+\Delta t} + \beta_y \hat{y}^i_{t,t} + \varepsilon^i_{t,t+\Delta t}, \qquad \Delta t\in\{1Q,2Q,3Q,4Q\} \tag{2}
$$

The residual $$\varepsilon^i_{t,t+\Delta t}$$ captures yield disagreement unrelated to macro fundamentals. The demand disagreement proxy for period $$t$$ is the cross-sectional standard deviation of this residual:

$$
DD_{t,t+\Delta t} = \text{SD}_t(\varepsilon^i_{t,t+\Delta t}) \tag{3}
$$

This proxy accounts for 65% of total yield disagreement at the one-quarter horizon and 76% at the four-quarter horizon (Fig. 1, p. 4).

**UKF state estimation.** To estimate the two latent state variables $$(f_t, \alpha_t)$$, the paper uses the Unscented Kalman Filter (UKF) (Section 5.7, p. 12; Fig. 6, p. 13). The two observables used for filtering are the demand disagreement proxy $$DD_t$$ and the two-year TIPS yield, covering Q1 1999 to Q2 2024. The observation equations are:

$$
y_t = h(l_t, f_t) + e_{y,t}, \qquad DD_t = g(l_t, f_t) + e_{DD,t}
$$

with $$\alpha_t = 1/(1+\exp(-l_t))$$ and diagonal noise covariances. The UKF is preferred over the EKF because it avoids linearization: instead of approximating the nonlinear observation equations, the UKF propagates the state distribution through them directly using a set of deterministic sigma points.

**Empirical tests.** Yield volatility regressions (Table 3) use an AR(1)-GARCH(1,1) model to estimate nominal yield volatility, then regress standardized volatility on the demand disagreement proxy with Newey-West standard errors (4 lags). Bond risk premium regressions (Table 4) define the excess return of a $$T$$-maturity bond (T in quarters) as $$rx^{(T)}_{t,t+4} = Ty^{(T)}_t - (T-4)y^{(T-4)}_{t+4} - y^{(1)}_t$$ and regress on $$DD_t$$. Both use the SPF sample Q3 1981-Q2 2024 and the paper reports no fixed effects for these time-series regressions. Table 5 uses filtered states over Q1 1999-Q2 2024 and compares observed series with model-implied series.

## Empirical specifications

**Yield volatility regression (R2, Table 3).** For each maturity $$T \in \{1,2,3,4,5\}$$ years, the paper estimates:

$$
\sigma^{(T)}_{y,t} = \gamma_0 + \gamma_1\,DD_t + \epsilon_t
$$

where $$\sigma^{(T)}_{y,t}$$ is the conditional standard deviation of the $$T$$-year yield from an AR(1)-GARCH(1,1) fitted to actual quarterly yields. Coefficients are standardized (both variables normalized) and standard errors are Newey-West with 4 lags. Standardized coefficients range from 0.66 to 0.73 in the data (t-stats 11.5-14.1), and the model produces standardized coefficients of 0.99, consistent with the empirical magnitudes.

**Bond risk premium regression (R3, Table 4).** For each maturity $$T \in \{2,3,4,5\}$$ years (equivalently $$T \in \{8,12,16,20\}$$ quarters), the one-year holding period excess bond return is:

$$
rx^{(T)}_{t,t+4} = \gamma_0 + \gamma_1\,DD_t + \epsilon_t
$$

where $$rx^{(T)}_{t,t+4} = Ty^{(T)}_t - (T-4)y^{(T-4)}_{t+4} - y^{(1)}_t$$ (T in quarters; positive when bonds appreciate). Standardized coefficients range from 0.38 to 0.44 in the data (t-stats 4.9-5.8). The model's Table 4 coefficient is from a regression of its instantaneous bond risk premium on demand disagreement and is smaller but same-sign (0.15). The data predictive relationship is robust to controlling for yield levels and macroeconomic disagreement (Tables 12-15, Internet Appendix).

**Goodness-of-fit (R4-R5, R11-R12, Table 5).** Using filtered state variables $$(f_t, \alpha_t)$$, the paper generates model-implied time series for real yields (maturities 2, 3, 5, 7, 10Y and slope), real yield volatilities, and nominal bond risk premia. It estimates the following observed-on-model regression separately for each series:

$$
y^{\text{Data}}_t = a + b y^{\text{Model}}_t + u_t
$$

The sample is Q1 1999-Q2 2024. Table 5 reports a "Std. Dev." column alongside coefficients; it does not report fixed effects or a Newey-West correction for these regressions. Real yields have $$b=0.52-0.62$$ and $$R^2=0.63-0.69$$; the real yield slope has $$b=1.147$$ (reported Std. Dev. $$=0.275$$, $$R^2=0.236$$), and the coefficient of one is not rejected. Nominal bond risk premia have $$b=1.28-1.54$$ and $$R^2=0.08-0.18$$, with one not rejected. Real yield volatility has weaker fit, with $$R^2=0.035-0.155$$.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Survey of Professional Forecasters (SPF), Philadelphia Fed | Yield and macro forecasts; source of the demand disagreement proxy DD (Q3 1981-Q2 2024, quarterly) | no page yet |
| TIPS yields (2-year, Federal Reserve/FRED) | Observable for UKF state estimation (Q1 1999-Q2 2024) | [FRED](/wiki/datasets/fred/) |
| Shiller long-run U.S. stock market and macro data | Correlation puzzle motivation (Table 1): annual stock returns, dividends, consumption, one-year yield (1891-2009) | [Shiller data](/wiki/datasets/shiller-data/) |

Sample: SPF quarterly data from Q3 1981 to Q2 2024 (172 quarters) for the main empirical results; Shiller annual data from 1891 to 2009 for the motivating correlation puzzle in Table 1. Replication data and code are deposited at Mendeley Data and Zenodo (links on the article landing page).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104191) if you are: building or calibrating a heterogeneous-beliefs OLG model for bond markets; constructing a survey-based measure of disagreement orthogonal to macro fundamentals; extending the framework to recursive preferences, production, or learning from experience (Section 6 outlines these; the Internet Appendix contains the full derivations); or evaluating the UKF filtering approach for latent state estimation in a nonlinear OLG model. Table 3 (yield volatility) and Table 4 (bond return predictability) are the main empirical entry points; Fig. 3 (unconditional moments vs. sigma\_Delta) is the key calibration diagnostic.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026) 104191. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Heyerdahl-Larsen, Christian, and Philipp Illeditsch.
> "Demand disagreement."
> *Journal of Financial Economics* 175 (2026) 104191.
> DOI: 10.1016/j.jfineco.2025.104191. © 2025 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
