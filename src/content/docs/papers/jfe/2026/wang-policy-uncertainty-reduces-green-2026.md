---
title: "Policy Uncertainty Reduces Green Innovation: Wang, Wurgler & Zhang (2026)"
description: >-
  Distilled: Exogenous weather-driven variability in Chinese environmental subsidy
  allocations reduces firms' green R&D investment and green R&D employment, with
  stronger effects on green-tech and subsidy-reliant firms. Journal of Financial
  Economics 2026, paywalled. Six core results with source locators, datasets used,
  a mean-variance model of investment under subsidy uncertainty, and a two-stage IV
  specification using weather volatility as an instrument for policy uncertainty.
sidebar:
  label: Wang-Wurgler-Zhang 2026
  order: 1
tags: [paper-summary, climate-finance, green-innovation, policy-uncertainty,
       environmental-economics, china, panel-regression, fama-macbeth,
       peer-reviewed, unreplicated, data:csmar, data:cnrds, data:wind,
       data:cma-weather]
paper:
  authors: Mengyu Wang, Jeffrey Wurgler, Hong Zhang
  authorList:
    - { family: Wang, given: Mengyu, orcid: "0000-0001-9564-8624", affiliation: Lee Kong Chian School of Business, Singapore Management University }
    - { family: Wurgler, given: Jeffrey, orcid: "0000-0001-6552-281X", affiliation: "Stern School of Business, New York University, and NBER" }
    - { family: Zhang, given: Hong, affiliation: Lee Kong Chian School of Business, Singapore Management University }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104189
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104189
  jel:
    codes: [G18, G31, Q55]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics: ["Energy, Environment, Economic Growth", "Market Dynamics and Volatility", "Climate Change Policy and Economics"]
  dataAccess: licensed-commercial
  outcome:
    - city-level green R&D investment
    - green R&D employment
    - firm-level green R&D investment
  outcomeClass: [firm-real-outcomes, labor-careers-health]
  license: >-
    All rights reserved (Elsevier B.V. 2025). Artifact footer: "0304-405X/©
    2025 Published by Elsevier B.V." Crossref license block contains only TDM
    and STM-ASF entries; no CC licence.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (ScienceDirect/Elsevier, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 12
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression, fama-macbeth]
    identification: instrument
  contributionType: [new-fact, new-theory]
  mechanisms: [financial-constraint, behavioral-bias, option-to-wait-deterrence]
  scope:
    region: China
    assetClass: Chinese listed firms (green R&D investment)
    period: 2009-01..2019-12
    frequency: annual
    dataType: [accounting, administrative, other]
    granularity: [firm, aggregate]
    n: "3,168 listed firms, 352 cities, 2009-2019 (1,340 city-year obs in main regressions)"
  findings:
    - ref: R1
      outcome: city-level green R&D investment
      metric: coefficient
      value: "-2.23 (t=-2.64), Table 4 Model 5; one-SD weather variability reduces green R&D by 0.132 SD"
      direction: negative
      vsBenchmark: "OLS coefficient -0.29 (t=-2.02, Table 4 Model 1); 2SLS estimate roughly 8x larger, consistent with attenuation bias from measurement error in OLS"
    - ref: R2
      outcome: city-level green R&D investment
      metric: coefficient
      value: "Avg Green Subsidy = 0.34 (t=2.76), Table 4 Model 5; one-SD subsidy increase raises green R&D by 0.158 SD"
      direction: positive
    - ref: R3
      outcome: green R&D employment
      metric: coefficient
      value: "-1.07 (t=-3.41), Table 8 Model 1; one-SD weather variability reduces employment by 0.153 SD"
      direction: negative
    - ref: R4
      outcome: firm-level green R&D investment (green-tech firms)
      metric: coefficient
      value: "PU x Green Tech = -0.58 (t=-7.47), Table 6 Model 2"
      direction: negative
      vsBenchmark: "average-firm PU effect = -0.40 (t=-2.72, Table 6 Model 1); green-tech interaction adds -0.58"
    - ref: R5
      outcome: firm-level green R&D investment (subsidy-reliant firms)
      metric: coefficient
      value: "PU x Subsidy Reliant = -0.62 (t=-7.77), Table 6 Model 5"
      direction: negative
    - ref: R6
      outcome: non-green R&D and capital expenditure (placebo tests)
      metric: coefficient
      value: "non-green R&D: PU = 0.83 (t=1.48); capex: PU = -0.00 (t=-0.44); real estate capex: PU = 0.03 (t=0.32), Table 5 Models 6-8"
      direction: none
      vsBenchmark: "none of the three placebo outcomes show a significant effect; supports exclusion restriction"
  resultType: new-finding
  relatesTo:
    - { cite: "Gulen and Ion (2016)", relation: extends, note: "extends their finding that policy uncertainty reduces corporate investment to the green R&D context using a weather-based instrument" }
    - { cite: "Baker, Bloom and Davis (2016)", doi: '10.1093/qje/qjw024', relation: builds-on, note: "policy uncertainty measurement framework; this paper proposes a behavioral channel distinct from political/fiscal shocks" }
    - { cite: "Dixit and Pindyck (1994)", relation: builds-on, note: "irreversibility and the option value of waiting; the paper formalizes this as managerial risk aversion penalizing uncertain subsidy payoffs" }
    - { cite: "Bernanke (1983)", relation: builds-on, note: "uncertainty and cyclical investment; bad-news principle applied here to subsidy-supported green projects" }
    - { cite: "Julio and Yook (2012)", doi: '10.1111/j.1540-6261.2011.01707.x', relation: cites, note: "political uncertainty and corporate investment cycles; this paper studies a distinct behavioral channel for policy uncertainty" }
  openQuestions:
    - "Whether the weather-based policy uncertainty mechanism generalizes beyond China's AQI-linked subsidy system to other settings where observable conditions drive policy allocation (p. 12, conclusion)."
    - "The paper encourages additional research on the real side of green investment, noting that policy uncertainty may arise not only from political shocks but from recency biases in policymaking (p. 12, conclusion)."
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (14 pp. including appendix and reference list); six results extracted with table/page locators. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; all six Core results rows confirmed against Tables 4, 5, 6, and 8; all equations (1)-(9) verified term-by-term; frontmatter facts, sample sizes, and first-stage F-statistic confirmed; no errors found."
  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104189"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[]: only TDM entries (content-version tdm, URL https://www.elsevier.com/tdm/userlicense/1.0/, start 2026-01-01) and STM-ASF entries; no CC licence; paywalled"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the simple mean-variance model of investment under uncertain subsidies, and the two-stage IV design that instruments policy uncertainty with weather volatility: enough to understand what was found and how, without reading all 14 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.jfineco.2025.104189).

## TL;DR

The paper documents that policy uncertainty about environmental subsidies suppresses the green R&D that those subsidies are designed to stimulate. The setting is China, where provincial and local governments allocate environmental subsidies partly on the basis of Air Quality Index (AQI) readings, and weather (wind and rain) drives AQI in predictable but noisy ways. Weather variability over a rolling six-year window therefore generates exogenous variation in how predictable a city's subsidy allocation will be, forming an instrument for policy uncertainty. A one-standard-deviation increase in weather variability reduces city-level green R&D by 0.132 standard deviations (IV estimate, Table 4 Model 5, p. 9). Effects are stronger for green-tech firms, subsidy-reliant firms, and firms under financial pressure. Placebo tests on non-green R&D and capital expenditure show no significant effect, consistent with the channel being specific to subsidized green activities. The paper extends Gulen and Ion (2016) by identifying a behavioral source of policy uncertainty: policymakers respond to salient recent pollution readings, which are themselves influenced by transient weather, creating a recency-bias channel that Bernanke (1983) and Dixit and Pindyck (1994) frameworks predict will deter investment.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Policy uncertainty (IV) reduces city-level green R&D | Table 4 Model 5, p. 8 | PU coefficient = -2.23\*\*\* (t = -2.64); one-SD weather variability reduces green R&D by 0.132 SD; OLS comparison: -0.29\*\* (Table 4 Model 1) |
| R2 | Higher average subsidies stimulate green R&D | Table 4 Model 5, p. 8 | Avg Green Subsidy = 0.34\*\*\* (t = 2.76); one-SD subsidy increase raises green R&D by 0.158 SD |
| R3 | Policy uncertainty reduces green R&D employment | Table 8 Model 1, p. 12 | PU coefficient = -1.07\*\*\* (t = -3.41); one-SD weather variability reduces employment by 0.153 SD |
| R4 | Green-tech firms are more sensitive to policy uncertainty | Table 6 Model 2, pp. 10-11 | PU × Green Tech = -0.58\*\*\* (t = -7.47), adding to average-firm effect of -0.40\*\*\* (Table 6 Model 1, t = -2.72) |
| R5 | Subsidy-reliant firms are more sensitive to policy uncertainty | Table 6 Model 5, p. 11 | PU × Subsidy Reliant = -0.62\*\*\* (t = -7.77) |
| R6 | Policy uncertainty does not affect non-green R&D or capital expenditure (placebo) | Table 5 Models 6-8, p. 10 | Non-green R&D: PU = 0.83 (t = 1.48, n.s.); capex: PU = -0.00 (t = -0.44, n.s.); real estate capex: PU = 0.03 (t = 0.32, n.s.) |

**Overall (paper's conclusion).** Policy uncertainty about environmental subsidies has real effects on green innovation: it reduces both the R&D investment and the technical employment that subsidies are intended to promote. Effects concentrate on the firms theory predicts should be most sensitive (green-tech, subsidy-reliant, financially pressured), and placebos confirm the result is not a general investment or uncertainty shock but is specific to the green component tied to the subsidized activities.

## Theory / model

The paper develops a stylized mean-variance model to derive qualitative predictions about how subsidy uncertainty affects green investment relative to traditional investment (Section 2.2, p. 4). A firm raises capital to invest in two technologies at the start of a period. The first, $$G$$, is an environmental technology receiving an uncertain government subsidy $$S \sim N(\bar{S}, \sigma_S^2)$$. The total per-dollar payoff from $$G$$ is $$\bar{R}_G + \bar{S}$$ with variance $$\sigma_G^2 + \sigma_S^2$$. The second, $$X$$, is a traditional technology with per-dollar payoff $$\bar{R}_X \sim N(\bar{R}_X, \sigma_X^2)$$. Both investments are subject to a gross financing cost $$C$$. The firm maximizes mean-variance utility (equation 1, p. 4):

$$
\max_{G,X} \; G(\bar{R}_G + \bar{S} - C) - \frac{\gamma}{2}G^2(\sigma_G^2 + \sigma_S^2) + X(\bar{R}_X - C) - \frac{\gamma}{2}X^2\sigma_X^2 \tag{1}
$$

where $$\gamma$$ is risk aversion, which stands in for irreversibility, adjustment costs, or managerial risk aversion in the spirit of Bernanke (1983), Dixit and Pindyck (1994), and Julio and Yook (2012). The first-order conditions yield optimal investments (equation 2, p. 4):

$$
G^* = \frac{\bar{R}_G + \bar{S} - C}{\gamma(\sigma_G^2 + \sigma_S^2)}, \qquad X^* = \frac{\bar{R}_X - C}{\gamma\sigma_X^2} \tag{2}
$$

The ratio of green to traditional investment is (equation 3, p. 4):

$$
\frac{G^*}{X^*} = \frac{\bar{R}_G + \bar{S} - C}{\bar{R}_X - C} \times \frac{\sigma_X^2}{\sigma_G^2 + \sigma_S^2} \tag{3}
$$

The model yields three comparative statics that the paper tests empirically:
1. Higher subsidy policy uncertainty $$\sigma_S^2$$ reduces both the level $$G^*$$ and the share $$G^*/X^*$$.
2. Higher average subsidies $$\bar{S}$$ increase the level and share of green R&D.
3. Higher financing cost $$C$$ (a proxy for financial pressure or over-indebtedness) increases the sensitivity of $$G^*/X^*$$ to $$\sigma_S^2$$, predicting that financially constrained firms are more affected by policy uncertainty.

This is not a structural model; it is a stylized device for generating falsifiable comparative statics. The paper also discusses irreversibility and adjustment-cost channels and a recency-bias channel, in which policymakers over-weight recent salient pollution conditions and under-account for transient weather, creating avoidable policy noise.

**Identification logic.** The empirical chain is: weather volatility drives AQI volatility, which drives subsidy volatility, which creates policy uncertainty that depresses green R&D. The exclusion restriction is that weather volatility affects green R&D only through this subsidy-uncertainty channel, not through other routes such as direct productivity effects of air quality on R&D effort. Placebos against non-green R&D and capex (R6) support this restriction.

## Method

**Step 1: Subsidies depend on AQI.** To show that green subsidy allocations respond to observed pollution, the paper estimates a Fama and MacBeth (1973) cross-sectional regression of city-level green subsidy on lagged AQI (equation 4, p. 6):

$$
\text{Green Subsidy}_{jt} = a_0 + a_1 \times AQI_{j,t-1} + A \times X_{j,t-1} + \varepsilon_{jt} \tag{4}
$$

where $$\text{Green Subsidy}_{jt}$$ is the log RMB of total environmental subsidies in city $$j$$ in year $$t$$, $$AQI_{j,t-1}$$ is the lagged average AQI, and $$X_{j,t-1}$$ contains city and firm-level controls. Coefficients are averaged across cross-sections with standard errors robust to cross-sectional correlation. A one-SD higher AQI is associated with a 0.17 SD higher subsidy the following year (Table 2 Model 2, coefficient = 0.05\*\*\*, t = 4.88, p. 6).

**Step 2: AQI depends on weather.** The paper documents the physical link between weather and AQI using a city-season-level specification (equation 5, p. 7):

$$
AQI_{jt,s} = b_0 + b_1 \times \text{Wind Speed}_{jt,s} + b_2 \times \text{Rain Volume}_{jt,s} + B \times X_{jt} + \delta_j + \delta_t + \varepsilon_{jts} \tag{5}
$$

where $$AQI_{jt,s}$$ is the average daily AQI in city $$j$$ in season $$s$$ of year $$t$$; city and year fixed effects are included; standard errors are clustered by city and year. Wind speed and rain volume are both negative and significant (Table 3, p. 7), confirming that weather disperses particulates and lowers AQI.

**Step 3: Instrument construction.** Policy uncertainty $$PU_{j,t-5:t}$$ is defined as the standard deviation of the characteristics-adjusted residuals from equation (4) over a six-year rolling window ending at $$t$$. The first stage regresses $$PU$$ on six-year rolling standard deviations of windy days and rainy days (equation 6, p. 8):

$$
PU_{j,t-5:t} = c_0 + c_1 \times \text{SD Windy Days}_{j,t-6:t-1} + c_2 \times \text{SD Rainy Days}_{j,t-6:t-1} + C \times X_{jt} + \delta_j + \delta_t + \varepsilon_{jt} \tag{6}
$$

The fitted weather component alone forms the instrument (equation 7, p. 9):

$$
\hat{PU}_{j,t-5:t} = \hat{c}_1 \times \text{SD Windy Days}_{j,t-6:t-1} + \hat{c}_2 \times \text{SD Rainy Days}_{j,t-6:t-1} \tag{7}
$$

First-stage estimates: $$\hat{c}_1 = 0.01^{***}$$ (t = 3.27), $$\hat{c}_2 = 0.16^{***}$$ (t = 3.71); first-stage F = 14.5 (Table 4 Model 2, p. 8). One-SD weather variability raises measured policy uncertainty by 0.228 SD. The estimation builds on `instrumental-variables` and `panel-regression` primitives.

## Empirical specifications

**City-level green R&D (R1, R2).** The second stage regresses next-year city-level green R&D on instrumented policy uncertainty and average subsidy (equation 8, p. 9):

$$
\text{Green R\&D}_{j,t+1} = d_0 + d_1 \times \hat{PU}_{j,t-5:t} + d_2 \times \text{Avg Subsidy}_{j,t-5:t} + D \times X_{jt} + \delta_j + \delta_t + \eta_{j,t+1} \tag{8}
$$

where $$\text{Green R\&D}_{j,t+1}$$ is log aggregate green R&D of city $$j$$'s listed firms, $$\hat{PU}$$ is the weather-instrumented policy uncertainty (equation 7), $$\text{Avg Subsidy}_{j,t-5:t}$$ is the six-year moving average of the characteristics-adjusted subsidy, and $$X_{jt}$$ includes AQI and city and firm-level controls. City and year fixed effects; standard errors clustered by city and year. Headline estimates: $$d_1 = -2.23^{***}$$ (t = -2.64) and $$d_2 = 0.34^{***}$$ (t = 2.76), Table 4 Model 5.

The one-standard-deviation translation: $$(0.01 \times 25.3 + 0.16 \times 1.95) \times (-2.23) / 9.54 = -0.132$$ SD in green R&D per SD in weather variability (footnote 18, p. 9).

**Firm-level heterogeneity (R4, R5).** The city-level instrument enters a firm-level regression interacted with firm-type indicators (equation 9, p. 10):

$$
\text{Green R\&D}_{ic,j,t+1} = e_0 + e_1 \times \hat{PU}_{j,t-5:t} + e_2 \times \text{Firm Type}_{ic,jt} \times \hat{PU}_{j,t-1} + e_3 \times \text{Avg Subsidy}_{j,t-5:t} + E \times X_{ic,jt} + \delta_i + \delta_t + \eta_{ic,j,t+1} \tag{9}
$$

with firm and year fixed effects; standard errors clustered by city and year. Firm type indicators include green tech (CSRC industry N77), metropolitan area, large size, state ownership, subsidy reliance (above-median ratio of environmental subsidy to total assets), cross-city registration, and industry affiliation (manufacturing, chemical, metal, public facility). The green-tech and subsidy-reliant interactions are the most significant (Table 6, pp. 10-11).

**Green R&D employment (R3).** Equation (8) replaces the dependent variable with $$\log(1 + \text{total R\&D and technical employees in city } j)$$. Result: PU = -1.07\*\*\* (t = -3.41), Table 8 Model 1.

**Placebos (R6).** Equation (8) with three alternative dependent variables: total R&D minus green R&D, city capital expenditure, and city capital expenditure of real estate firms (Table 5 Models 6-8). None shows a significant effect of $$\hat{PU}$$, supporting the exclusion restriction.

**Robustness.** Table 5 reports eight robustness checks including: excluding city-years with zero green R&D, two-year average AQI, weather-adjusted AQI, subsidy starting from 2007, and a subsample from 2013 onward. The main result is stable across all variations (PU coefficients ranging from -2.22 to -5.14, all significant at 5% or better except in Model 6 which is a placebo). Baker, Bloom and Davis (2016) style policy uncertainty indices serve as a conceptual foil; the paper distinguishes its weather-based channel from those political and fiscal sources.

The estimation sample is 2009-2019, pre-Covid. City-year panel: 1,340 observations (up to 352 cities). Firm-year panel: 26,189 observations (3,168 firms).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CSMAR (China Stock Market & Accounting Research Database) | Firm-level green R&D (from financial statement footnotes), environmental subsidy receipts, stock return | No page yet |
| CNRDS (China Research Data Services) | City-level GDP, GDP growth, consumption, population growth; firm characteristics digitized from China Statistical Yearbook | No page yet |
| WIND Financial Terminal | Firm-level turnover, ROA, leverage, size, cash holdings, capex, profit margin | No page yet |
| Ministry of Ecology and Environment (MEPC) | Annual average AQI for major cities from the national monitoring network | No page yet |
| China Meteorological Administration (CMA) | Daily city-level wind speed (m/s) and rain volume (mm) used to construct Windy Days, Rainy Days, and their rolling standard deviations | No page yet |
| EPSnet | City-level industrial Waste Gas Treatment expenditure; used to confirm the AQI-subsidy relationship independently (Table 2 Models 5-6) | No page yet |

Sample: weather and subsidy data back to 2003 (needed for six-year rolling windows); main regressions: 2009-2019 (pre-Covid). 352 Chinese cities; 3,168 listed firms; 1,340 city-year observations in primary city-level regressions; 26,189 firm-year observations in firm-level regressions.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jfineco.2025.104189) if you are:
- studying how uncertainty about government policies, not just their level, can undermine their intended effects on investment;
- building a weather-based IV design for policy uncertainty in settings where subsidies are tied to observable environmental indicators;
- interested in the institutional mechanics of Chinese environmental policy and AQI-linked subsidy allocation;
- examining heterogeneous investment responses to policy uncertainty across firm types (green-tech, subsidy reliance, financial constraints);
- researching the real-side effects of climate policy uncertainty for the growing green finance literature.

The online appendix (available at the DOI) contains additional institutional background, variable definitions, and further robustness checks.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026) 104189. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The paper is paywalled; only extract-only redistribution is permitted.

> Wang, Mengyu, Jeffrey Wurgler, and Hong Zhang. "Policy uncertainty reduces green innovation." *Journal of Financial Economics* 175 (2026) 104189. DOI: [10.1016/j.jfineco.2025.104189](https://doi.org/10.1016/j.jfineco.2025.104189). © 2025 Published by Elsevier B.V.
