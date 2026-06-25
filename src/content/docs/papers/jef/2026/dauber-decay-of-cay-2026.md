---
title: "The Decay of cay: Dauber & Lawrenz (2026)"
description: >-
  Distilled: Documents a substantial decline over the last two decades in the predictive power
  of the consumption-wealth ratio (cay) for US stock market excess returns, attributing it to a
  structural shift in the cointegration relationship as asset wealth decouples from aggregate
  consumption and labor income. Proposes a top-10% household version of cay as the most stable
  remaining predictor. Journal of Empirical Finance 2026, CC BY 4.0. Six core results with source
  locators, datasets used, the model, and the method.
sidebar:
  label: Dauber-Lawrenz 2026
  order: 1
tags: [paper-summary, asset-pricing, macro, return-predictability, predictive-regression,
       time-series, open-access, cc-by, peer-reviewed, unreplicated,
       data:fred, data:wrds, data:wid]
paper:
  authors: Moritz Dauber, Jochen Lawrenz
  authorList:
    - { family: Dauber, given: Moritz, orcid: "0009-0003-0705-7974", affiliation: University of Innsbruck }
    - { family: Lawrenz, given: Jochen, orcid: "0000-0001-7372-0509", affiliation: University of Innsbruck }
  year: 2026
  venue: Journal of Empirical Finance 85 (2026) 101668
  venueShort: J. Empir. Finance 2026
  doi: 10.1016/j.jempfin.2025.101668
  tier: lower
  jel:
    codes: [G12, E21, C22]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: []
  dataAccess: licensed-commercial
  outcome:
    - stock market excess returns (quarterly predictability)
  outcomeClass: [security-returns]
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-11-23; corroborated by PDF p.1 CC BY notice)'
  licenseShort: CC BY 4.0
  access: open
  machineAccess: 'open-access PDF available via DOI (Elsevier, 2026-06-25)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [time-series-forecasting, dynamic-least-squares]
    identification: descriptive
  contributionType: [new-fact, measurement]
  scope:
    region: US
    assetClass: US equities
    period: 1952-01..2019-12
    frequency: quarterly
    dataType: [market, accounting, administrative]
    granularity: [aggregate]
    n: "272 quarters, 1952:1-2019:4"
  findings:
    - { ref: R1, outcome: "stock market excess returns (quarterly predictability)", metric: coefficient, value: "aggregate cay NDS full sample 1Q: beta=0.241, t=1.118, adj-R2=0.001 (insignificant)", direction: none, vsBenchmark: "vs. beta=2.165, t>3, adj-R2=9% in Lettau and Ludvigson (2001) sample 1952:4-1998:3" }
    - { ref: R2, outcome: "stock market excess returns (quarterly predictability)", metric: coefficient, value: "cay PCE10 full sample 1Q: beta=0.629, t=2.417, adj-R2=0.020 (significant at 5%)", direction: positive, vsBenchmark: "best among four cay specs; aggregate NDS insignificant (t=1.118)" }
    - { ref: R3, outcome: "stock market excess returns (quarterly predictability)", metric: probability, value: "Phillips-Ouliaris cointegration test p-values: NDS 0.868, PCE 0.577 (full sample 1952:1-2019:4); cannot reject null of no cointegration", direction: none }
    - { ref: R4, outcome: "stock market excess returns (quarterly predictability)", metric: coefficient, value: "asset wealth cointegrating parameter beta_a (NDS): declines from ~0.3 in early 1990s toward 0.0 by 2019 and becomes insignificant (Fig. 5, Table 4)", direction: negative }
    - { ref: R5, outcome: "stock market excess returns (quarterly predictability)", metric: alpha, value: "risk-adjusted abnormal return theta starts ~200bp for all specs in mid-1990s; by 2019 all aggregate specs exhibit double-digit negative theta; cay PCE10 ends near 10bp", direction: mixed, vsBenchmark: "vs. rolling historical mean strategy; theta computed via Goetzmann et al. (2007) / Della Corte et al. (2010) methodology" }
    - { ref: R6, outcome: "stock market excess returns (quarterly predictability)", metric: t-stat, value: "full sample 1Q t-statistics: cay PCE10 t=2.417, cday t=1.693, cay-g t=1.732, cay-unfi t=1.299", direction: positive, vsBenchmark: "cay PCE10 most stable and significant among alternative constructions (Table 6)" }
  resultType: overturns
  relatesTo:
    - { cite: 'Lettau and Ludvigson (2001)', relation: contradicts, note: 'original cay paper showed strong IS and OOS predictability; this paper documents both have collapsed over the last two decades' }
    - { cite: 'Welch and Goyal (2008)', relation: tests, note: 'confirms their documented OOS failure of cay and adds in-sample evidence and a structural cointegration explanation' }
    - { cite: 'Lettau et al. (2019)', relation: extends, note: 'adopts their argument that the top-10% richest households better approximate the marginal investor; constructs cay PCE10 from that subsample' }
    - { cite: 'Brennan and Xia (2005)', relation: cites, note: 'raised the look-ahead bias concern in cay estimation; the paper discusses this critique and shows the decay is robust to it' }
  openQuestions:
    - "Whether the structural shift in the cointegrating relationship reflects a long-lasting deviation from a previously reached equilibrium or convergence toward a new equilibrium remains open for future research (p. 18)."
    - "Developing a full-fledged theoretical derivation of the top-10% cay as a predictor is beyond the scope of the current paper (p. 5)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-20 plus Appendix A); six results extracted from PDF. OpenAlex topics were misclassified for this paper (returned biology and humanities terms for a macrofinance paper, indicating a wrong-work match); cleared to [] rather than store false labels. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all six Core-results rows confirmed; equations (1)-(13) verified term-by-term; one locator fixed: Empirical specifications section cited Fig. 7 at p. 15 corrected to p. 16." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jempfin.2025.101668", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-11-23" }
---

**What this is.** The paper's core results, the model that motivates cay (the Campbell-Mankiw
intertemporal budget constraint approximation developed by Lettau and Ludvigson (2001)), and the
estimation and forecasting procedure with the defining equations: enough to understand what was found
and why, without reading all 20 pages. To replicate or extend, read the full source at
the [original](https://doi.org/10.1016/j.jempfin.2025.101668).

## TL;DR

The paper revisits the ability of the consumption-wealth ratio (cay) to forecast US stock market
excess returns and documents that its predictive power has declined substantially over the last two
decades. Using comprehensive in-sample, out-of-sample, and economic significance tests on quarterly
US data from 1952:1 to 2019:4, the authors show that aggregate cay has lost even its in-sample
predictive ability from the perspective of the most recent data. They trace this decay to a
structural shift in the underlying cointegration relationship between consumption, aggregate wealth,
and labor income, as asset wealth has become increasingly detached from aggregate consumption since
around 2000 due to rising wealth inequality. As a partial remedy, they propose a version of cay
constructed from the top 10% richest households (cay^PCE10), which remains the most stable and
significantly predictive alternative among those examined, though even this measure's predictive
advantage over a naive historical mean strategy has largely disappeared.

## Core results

Magnitudes and significance are as reported; `\*` = 10%, `\*\*` = 5%, `\*\*\*` = 1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Aggregate cay (NDS) has lost in-sample predictive power** for 1Q-ahead excess returns in the full sample | Table 3, p. 8 | beta = 0.241, t = 1.118, adj-R2 = 0.001; compare to Lettau and Ludvigson (2001) sample: beta = 2.165, t > 3, adj-R2 = 9% |
| R2 | **cay^PCE10 (top-10% PCE version) retains marginal in-sample significance** at the 1Q horizon | Table 3, p. 8 | beta = 0.629, t = 2.417\*\*, adj-R2 = 0.020; aggregate NDS coefficient is insignificant (t = 1.118) |
| R3 | **Cointegration between consumption, wealth, and income cannot be confirmed** for the full sample | Table 4 Panel B, p. 13 | Phillips and Ouliaris (1990) test p-values: NDS = 0.868, PCE = 0.577 (full sample 1952:1-2019:4); p-values below critical values for the Lettau and Ludvigson (2001) sample only |
| R4 | **Asset wealth coefficient in the cointegrating vector has declined steadily** since the late 1990s | Fig. 5, p. 13 | beta_a (NDS) falls from approximately 0.3 in the early 1990s toward 0.0 by 2019; becomes insignificant from the perspective of the full sample (Table 4 Panel A) |
| R5 | **Out-of-sample economic performance decays across all specifications** except cay^PCE10 | Fig. 4, pp. 11-12 | Risk-adjusted abnormal return theta starts at approximately 200bp for all specs in mid-1990s; all aggregate cay specs exhibit double-digit negative theta by 2019; cay^PCE10 ends near 10bp |
| R6 | **cay^PCE10 is the most stable and significant alternative** among four proposed improvements in the full sample | Table 6, p. 17 | Full sample 1Q t-statistics: cay^PCE10 = 2.417\*\*, cday = 1.693, cay^g = 1.732, cay^unfi = 1.299 |

**Overall (paper's conclusion).** The predictive ability of cay has fundamentally weakened over the
last roughly two decades. The decay is traceable to a structural shift in the cointegrating
relationship between consumption, aggregate wealth, and labor income: as asset wealth has become
increasingly detached from aggregate consumption (particularly since the global financial crisis),
the cointegrating parameters have drifted, undermining both the theoretical rationale and the
empirical performance of cay. Focusing on the richest 10% of households via cay^PCE10 mitigates but
does not eliminate the decay.

## Theory / model

The model builds on the representative agent's intertemporal budget constraint (p. 4, Eq. 1):

$$
W_{t+1} = (1 + R_{w,t+1})(W_t - C_t), \tag{1}
$$

where $$W_t$$ is aggregate wealth, $$C_t$$ is aggregate consumption, and $$R_{w,t+1}$$ is the return
on total wealth between periods $$t$$ and $$t+1$$. Following Campbell and Mankiw (1989) and
Lettau and Ludvigson (2001), log-linearizing around the steady state yields the log
consumption-wealth approximation (p. 4, Eq. 2):

$$
c_t - w_t \approx \mathbb{E}_t \sum_{i=1}^{\infty} \rho^i (r_{w,t+i} - \Delta c_{t+i}), \tag{2}
$$

so cay proxies for expected future returns and expected consumption growth. Because total wealth
$$W_t$$ includes unobservable human capital $$H_t$$, Lettau and Ludvigson (2001) approximate it
using log labor income $$y_t$$ (p. 4, Eq. 3-4):

$$
w_t \approx \alpha a_t + (1-\alpha) h_t, \quad r_{w,t} \approx \alpha r_{a,t} + (1-\alpha) r_{h,t}, \tag{3-4}
$$

where $$a_t$$ is log asset wealth, $$\alpha$$ is the average share of assets in total wealth, and
$$r_{a,t}$$ ($$r_{h,t}$$) is the return on assets (human capital). Together with a stationarity
argument, this gives the defining identity (p. 4, Eq. 6):

$$
\text{cay}_t = c_t - \alpha a_t - (1-\alpha) y_t. \tag{6}
$$

If $$c_t$$, $$a_t$$, and $$y_t$$ are cointegrated with the vector $$(1, -\alpha, -(1-\alpha))$$, then
$$\text{cay}_t$$ is stationary and forecasts future asset returns. The paper's central finding is that
this cointegrating relationship has become unstable: the coefficient $$\alpha$$ on asset wealth has
drifted steadily toward zero since the late 1990s, which it attributes to rising wealth inequality
making asset wealth increasingly detached from aggregate consumption.

**Top-10% version.** To better capture the representative investor, the paper constructs a
version of cay using consumption, wealth, and income of the top 10% richest households. Wealth share
$$AS^{\text{top10}}_t$$ and income share $$YS^{\text{top10}}_t$$ of this group are regressed on the
capital share $$KS_t$$ (p. 5, Eqs. 7-8):

$$
AS^{\text{top10}}_t = \alpha_A + \beta_A \, KS_t + \varepsilon_t, \quad YS^{\text{top10}}_t = \alpha_Y + \beta_Y \, KS_t + \varepsilon_t. \tag{7-8}
$$

The fitted values $$\widehat{AS}^{\text{top10}}_t$$ and $$\widehat{YS}^{\text{top10}}_t$$ are then
used to construct top-10% series for aggregate consumption, income, and wealth. The top-10% version
of cay is then (p. 5, Eq. 9):

$$
\text{cay}^{\text{top10}}_t = c^{\text{top10}}_t - \alpha^{\text{top10}} a^{\text{top10}}_t - (1-\alpha^{\text{top10}}) y^{\text{top10}}_t. \tag{9}
$$

The rationale, following Lettau et al. (2019), is that rich households own a disproportionate share
of stock market wealth and better approximate the marginal investor whose expectations drive
equity premia.

## Method

**Cointegration estimation (DLS).** The paper follows Lettau and Ludvigson (2001) in using the
dynamic-least-squares (DLS) technique of Stock and Watson (1993), which builds on `time-series-forecasting`
and the proposed `dynamic-least-squares` technique. To estimate the cointegrating parameters
$$\beta_a$$ and $$\beta_y$$, the following regression is run (p. 6, Eq. 10):

$$
c_t = \alpha + \beta_a a_t + \beta_y y_t + \sum_{i=-8}^{8} b_{a,i} \Delta a_{t-i} + \sum_{i=-8}^{8} b_{y,i} \Delta y_{t-i} + \varepsilon_t, \tag{10}
$$

where $$\Delta$$ denotes the first-difference operator. The 8-lead and 8-lag augmentation removes
regressor endogeneity that would otherwise cause OLS to be inconsistent. The estimated cay is then
the residual from the cointegrating equation (p. 6, Eq. 11):

$$
\widehat{\text{cay}}_t = c_t - \hat{\beta}_a a_t - \hat{\beta}_y y_t. \tag{11}
$$

**Stability analysis.** The paper also re-estimates the cointegration relationship in an expanding
window beginning in 1990, tracking the time-varying behavior of $$\hat{\beta}_a$$ and
$$\hat{\beta}_y$$. A Vector Error Correction Model (VECM) is estimated to assess the short-term
dynamics of the cointegration relationship for the two sample periods.

**OOS economic significance.** To measure economic performance, the paper follows the approach
of Della Corte et al. (2010), adapted for a short-selling constrained mean-variance investor who
allocates between the risk-free asset and the market portfolio. The optimal weight on the market
portfolio at time $$t$$ is (p. 11, Eq. 13):

$$
w_t = \frac{1}{\lambda} \frac{\mathbb{E}_t[r_{t+1} - r_{f,t+1}]}{\text{Var}_t[r_{t+1} - r_{f,t+1}]}, \tag{13}
$$

with $$\lambda = 3$$ as the coefficient of relative risk aversion. The ex-post performance of the
cay-timing strategy relative to a rolling historical mean strategy is evaluated by the risk-adjusted
abnormal return $$\theta$$ (Goetzmann et al. (2007)), measured in basis points.

## Empirical specifications

All results use quarterly data, 1952:1-2019:4. The main baseline sample excludes the Covid-19
episode (post-2019:4); a robustness check through 2022:4 is in Appendix H and does not affect
conclusions.

**In-sample predictive regression (R1, R2, R6).** The standard regression forecasting
excess returns at horizon $$H$$ is (p. 8, Eq. 12):

$$
\bar{r}_{t,H} = \alpha^k + \beta^k_{\text{cay}} \widehat{\text{cay}}^k_t + \varepsilon^k_{t,H}, \quad k \in \{\text{NDS, PCE, NDS10, PCE10}\}, \tag{12}
$$

where $$\bar{r}_{t,H} = r_{t+1} - r_{f,t+1} + \cdots + r_{t+H} - r_{f,t+H}$$ is the H-period
cumulative log excess return. Newey and West (1987) corrected t-statistics are reported. Table 3
(p. 8) covers horizons $$H \in \{1, 2, 4, 8, 12, 16, 20\}$$ quarters. A time-varying version
re-estimates the regression recursively in an expanding window from 1990 to track how the
coefficient $$\hat{\beta}_{\text{cay}}$$ has evolved (Fig. 3, pp. 9-10).

**Cointegration stability tests (R3, R4).** The paper re-estimates the cointegrating regression
in an expanding window from 1990, reporting the resulting $$\hat{\beta}_a$$ and $$\hat{\beta}_y$$
paths (Fig. 5, p. 13). Cointegration tests use the Phillips and Ouliaris (1990) test; results for
Engle and Granger (1987) and Johansen (1988, 1991) tests appear in Appendix C.2. Table 4
(p. 13) compares cointegrating parameters and test statistics across sample periods.

**Structural shift with time trend (R4 extended).** Section 4.2 augments Eq. (10) with a
deterministic time trend $$\hat{\pi} t$$ to assess whether the shift in $$\hat{\beta}_a$$ is driven
by an omitted trend. The cointegrating parameters are re-estimated with $$c_t - \hat{\pi} t$$ as
the dependent variable; the resulting time paths of $$\hat{\beta}_a$$, $$\hat{\beta}_y$$ and
$$\hat{\pi}$$ are tracked in an expanding window (Fig. 7, p. 16).

**OOS economic performance (R5).** The cay-timing strategy is initialized with a 43-year training
period (through 1994:4) and evaluated from 1995:1 onward. The risk-adjusted abnormal return
$$\theta_t$$ is plotted over time for all four cay specifications (Fig. 4, pp. 11-12).

**Comparison with alternatives (R6).** Table 6 (p. 17) runs Eq. (12) at the 1Q horizon for four
competing cay specifications (cay^PCE10, cday from Sousa (2010), cay^g from Guo (2006), and
cay^{unfi} from Kroencke (2017)) using PCE consumption, reporting coefficient estimates,
Newey-West t-statistics, and adjusted R2 statistics for both the Lettau and Ludvigson (2001)
sample period (through 1998:3) and the full sample (through 2019:4).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| BEA NIPA tables: nondurables and services (NDS) and PCE consumption; labor income | Consumption and income series for cay estimation | [FRED](/wiki/datasets/fred/) |
| Federal Reserve Financial Accounts (Flow of Funds) | Aggregate asset wealth series for cay estimation | [FRED](/wiki/datasets/fred/) |
| World Inequality Database (WID) / US Distributional National Accounts | Wealth and income shares of top 10% households (AS^top10, YS^top10) | no page yet |
| CRSP NYSE/NYSE MKT/NASDAQ/Arca Value-Weighted Market Index | Stock market excess return (dependent variable) | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| BLS nonfarm business labor share | Labor share for KS construction; interest rate proxy | [FRED](/wiki/datasets/fred/) |
| Federal Reserve H.15: 3-Month Treasury Bill rate | Risk-free rate proxy | [FRED](/wiki/datasets/fred/) |

Sample: quarterly, 1952:1-2019:4 (272 quarters). All nominal series deflated using the PCE deflator
from the BEA. Inequality shares from the World Inequality Database (Saez and Zucman (2016) series,
continued in the World Inequality Database (WID)).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jempfin.2025.101668) if you are:
examining the structural stability of cay over time (Sections 4-4.2 and Fig. 5-7 give the fullest
treatment); comparing Welch and Goyal (2008) out-of-sample failure results against IS evidence in a
single paper; assessing whether adjusting cay for wealth inequality (Lettau et al. (2019) argument)
restores predictability; or using the Brennan and Xia (2005) look-ahead bias critique and want the
authors' detailed response. The Appendices (C-H) cover additional cointegration tests, the direct
multivariate regression, consumption predictability, OOS tests, alternative specifications, and
Covid-19 robustness.

## Attribution and rights

Source: peer-reviewed, *Journal of Empirical Finance* 85 (2026) 101668. This distillation was extracted
by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**.
The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Dauber, Moritz, and Jochen Lawrenz.
> "The Decay of cay."
> *Journal of Empirical Finance* 85 (2026): 101668.
> DOI: 10.1016/j.jempfin.2025.101668. © 2025 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
