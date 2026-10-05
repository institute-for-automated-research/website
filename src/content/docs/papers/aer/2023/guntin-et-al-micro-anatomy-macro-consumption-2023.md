---
title: "The Micro Anatomy of Macro Consumption Adjustments: Guntin, Ottonello & Perez (2023)"
description: >-
  Distilled: Documents that top-income households have consumption-income
  elasticities similar to or larger than the average during the Euro crisis and
  emerging-market sudden stops. Elasticities are broadly flat across income in
  Europe and rise with income in emerging markets; a calibrated heterogeneous-agent
  model shows the permanent-income view can explain these patterns while the
  credit-tightening view predicts a pattern inconsistent with the data. American
  Economic Review 2023, AEA copyright
  (free-to-read after 12-month embargo). Fourteen core results with source locators,
  datasets used, the model, and the empirical specifications.
sidebar:
  label: Guntin-Ottonello-Perez 2023
  order: 1
tags: [paper-summary, macro, household-finance, sudden-stops, business-cycles, panel-regression,
       open-access, peer-reviewed, unreplicated, data:fred, data:shiw-italy, data:epf-spain,
       data:eff-spain, data:enigh-mexico, data:enaho-peru, data:cex-us]
paper:
  authors: Rafael Guntin, Pablo Ottonello, Diego J. Perez
  authorList:
    - { family: Guntin, given: Rafael, orcid: "0009-0000-9400-2469", affiliation: University of Rochester }
    - { family: Ottonello, given: Pablo, affiliation: "University of Michigan, NBER" }
    - { family: Perez, given: "Diego J.", orcid: "0000-0002-2628-9899", affiliation: "New York University, NBER" }
  year: 2023
  venue: American Economic Review 113(8), August 2023, 2201-2231
  venueShort: AER 2023
  doi: 10.1257/aer.20201931
  jel:
    codes: [D31, E21, E32, F33, G51, O11, O12]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Economic theories and models", "Housing Market and Economics", "Financial Literacy, Pension, Retirement Analysis"]
  dataAccess: public
  outcome:
    - household consumption-income elasticity across the income distribution during crises
    - cross-sectional patterns of aggregate consumption adjustment
    - effectiveness of fiscal transfer stimulus under competing crisis views
  outcomeClass: [household-finance, macro-aggregates]
  license: "Copyright 2023 American Economic Association; freely readable at doi.org/10.1257/aer.20201931 after AEA 12-month embargo; no Creative Commons licence (Crossref: no license block; AEA site: all rights reserved)"
  licenseShort: AEA copyright
  access: open
  machineAccess: "blocked-403 (pubs.aeaweb.org, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 14
  citedByCount: 14
  methods:
    role: both
    family: structural
    buildsFrom: [heterogeneous-agent-bewley-model, panel-regression, value-function-iteration]
    identification: structural
  contributionType: [new-fact, new-theory, measurement]
  mechanisms: [financial-constraint, risk-sharing]
  scope:
    region: "Italy, Spain, Mexico, Peru"
    assetClass: household nondurable consumption and nonfinancial income
    period: 1994..2014
    frequency: mixed
    dataType: [survey]
    granularity: [individual, aggregate]
    n: "90,199 household-observations across five crisis episodes"
  findings:
    - { ref: R1, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "average across episodes: 0.92; by episode: Italy 1.13, Spain 0.97, Mexico 1994 0.78, Mexico 2008 0.73, Peru 0.99", direction: positive }
    - { ref: R2, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "top-decile mean: 0.93; by episode: Italy 0.95, Spain 0.90, Mexico 1994 0.79, Mexico 2008 0.88, Peru 1.15", direction: positive, vsBenchmark: "top-income elasticity similar to economy average (0.92); not below it" }
    - { ref: R3, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "liquid-asset holders: average 0.86, top-income 1.01", direction: positive, vsBenchmark: "similar to full-sample; no decline for asset-rich households (Table 1, Panel B, p. 2209)" }
    - { ref: R4, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "all demographic subgroups show elasticities broadly near or above 1 (Table 2, range 0.53-2.70 across subgroups)", direction: positive }
    - { ref: R5, outcome: cross-sectional patterns of aggregate consumption adjustment, metric: elasticity, value: "PI model predicts elasticities close to 1 for all income deciles; robust to heterogeneous loadings, wealth revaluations, uncertainty (Figure 5, p. 2220)", direction: positive, vsBenchmark: "PI view reproduces flat observed pattern; calibrated model matches Italian data" }
    - { ref: R6, outcome: cross-sectional patterns of aggregate consumption adjustment, metric: elasticity, value: "CT model predicts elasticities decreasing with income: rich households smooth, poor adjust more; unlike the flat Italian crisis pattern in the data (Figure 7, Panel B, p. 2226)", direction: negative, vsBenchmark: "CT cross-sectional prediction is inconsistent with the observed Italian pattern" }
    - { ref: R7, outcome: effectiveness of fiscal transfer stimulus under competing crisis views, metric: level, value: "MPC from one-time transfer lowest under PI crisis, highest under CT crisis; decreasing in income across all scenarios (Figure 8, p. 2228)", direction: positive, vsBenchmark: "stimulus much less effective under PI view than CT view" }
    - { ref: R8, outcome: cross-sectional patterns of aggregate consumption adjustment, metric: level, value: "Average across five episodes: change in log income = -0.19; change in log consumption = -0.16 (Table 1, Panel A, p. 2209)", direction: negative }
    - { ref: R9, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "Homeowners average 0.97; non-homeowners average 0.83 across episodes (Table 2, Panel A, p. 2212)", direction: positive, vsBenchmark: "Large adjustments remain among households without home equity, which the authors use to assess the illiquid-wealth revaluation explanation" }
    - { ref: R10, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "Business owners average 1.31; nonowners average 0.89 across episodes (Table 2, Panel A, p. 2212)", direction: positive, vsBenchmark: "Large adjustments remain among households without businesses, which the authors use to assess the illiquid-wealth revaluation explanation" }
    - { ref: R11, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "Table 2 subgroup averages: age 0.88-1.01; education 0.89-1.25; location 0.95; sector 0.88-0.99; full-time employment 0.89-0.95 (Table 2, Panel B, p. 2212)", direction: positive }
    - { ref: R12, outcome: cross-sectional patterns of aggregate consumption adjustment, metric: elasticity, value: "Italy: elasticities close to 1 across income quintiles; US: 0.2-0.6 across quintiles (Figure 4, p. 2214; text p. 2214)", direction: positive, vsBenchmark: "Italy's business-cycle elasticities exceed US estimates" }
    - { ref: R13, outcome: cross-sectional patterns of aggregate consumption adjustment, metric: elasticity, value: "The model with Stone-Geary nonhomotheticity reproduces the increasing elasticity pattern in Mexico; 1% of Italian households versus 16% of Mexican households are below the indigence-based subsistence threshold (Figure 6, p. 2223; text p. 2223)", direction: positive, vsBenchmark: "The nonhomothetic extension matters more for Mexico than Italy" }
    - { ref: R14, outcome: household consumption-income elasticity across the income distribution during crises, metric: elasticity, value: "Individual consumption elasticities: 0.32 in Appendix Table A1 to 0.36 for countries in the sample (text p. 2208); households in the sample have less consumption insurance than US households", direction: positive, vsBenchmark: "Individual elasticity and partial-insurance coefficients are larger in the sample countries than in the US" }
  resultType: mixed
  relatesTo:
    - { cite: "Aguiar and Gopinath (2007)", doi: '10.1086/511283', relation: builds-on, note: "permanent-income view of emerging-market crises that the model formalizes and tests" }
    - { cite: "Mendoza (2005)", relation: tests, note: "credit-tightening via collateral constraints; micro predictions challenged by the observed elasticity patterns" }
    - { cite: "Eggertsson and Krugman (2012)", doi: '10.1093/qje/qjs023', relation: tests, note: "debt-deleveraging and liquidity trap view; predicts rich households smooth consumption, opposite of data" }
    - { cite: "Blundell, Pistaferri, and Preston (2008)", doi: '10.1257/aer.98.5.1887', relation: builds-on, note: "methodology for measuring consumption inequality and partial insurance; used for residualized elasticity measurement" }
    - { cite: "Kaplan, Violante, and Weidner (2014)", relation: cites, note: "wealthy hand-to-mouth definition; Table 1 Panel B rules out this channel as driver of main results" }
  openQuestions:
    - "How the path of aggregate income during crises is determined; the analysis abstracts from how financial frictions affect income persistence itself (pp. 2204, 2227)."
    - "Two-asset model extensions to better capture the hand-to-mouth behavior concentrated at the bottom of the income distribution and its implications for transfer policy (footnote 20, p. 2227)."
    - "Design of policies addressing missing insurance for permanent income shocks, as distinct from direct consumption transfer policies (p. 2228)."
  replicationCode:
    url: https://doi.org/10.3886/E181583V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 2201-2231). Not human-verified. Not reproduced. Model equations from pp. 2215-2217 (eqs. 1-4, AR1 income) and pp. 2222, 2224 (eqs. 5-6). Empirical specs from p. 2208 and p. 2214." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: JEL codes expanded from 3 to 7 (authors' own codes from abstract: added F33, G51, O11, O12) and assignedBy corrected to authors; R4 findings[] range corrected from 0.60-2.70 to 0.53-2.70 (Table 2 minimum is 0.53, Full-time No / Mexico '08); Method section targeted-moment locator corrected from Table 3 p. 2218 to Table 4 p. 2219 (Table 3 contains parameter values, Table 4 contains targeted moments). All seven Core result magnitudes verified against Tables 1-2 and Figures 5/7/8; model equations (1)-(6) and AR(1) income process verified term-by-term against pp. 2215-2217 and pp. 2219/2224; calibration values verified against Tables 3-4." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added main-text results, completed equation and specification coverage, and staged no new vocabulary; additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, magnitudes, equations, and specifications checked against the PDF; corrected summary emphasis, findings directions/metrics, scope classifications, and removed a mismatched DOI. Fourteen rows supported; one headline inequality result is omitted." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20201931", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; title, authors, container-title American Economic Review, published 2023-08, pages 2201-2231 confirmed" }
    - { source: "www.aeaweb.org/articles?id=10.1257/aer.20201931", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "Copyright 2026 American Economic Association. All rights reserved. No Creative Commons licence displayed." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model (heterogeneous-agent small open economy with borrowing constraints), and the empirical specifications, with exact source locators. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20201931).

## TL;DR

This paper documents the cross-sectional patterns of consumption adjustment during five episodes of large aggregate consumption decline: the Euro crisis in Italy and Spain, and three emerging-market sudden stops (Mexico 1994, Mexico 2008, Peru 2008). Top-income households have consumption-income elasticities similar to or larger than the average in every episode. Elasticities are broadly flat across income in the Euro crisis and increase with income in emerging-market episodes. A calibrated heterogeneous-agent open-economy model shows the permanent-income view of crises, in the tradition of Aguiar and Gopinath (2007), can account for these micro-level patterns. Credit-tightening theories, as in Mendoza (2005) and Eggertsson and Krugman (2012), predict a decreasing elasticity pattern across income that conflicts with the observed patterns. The divergence between the two views has direct implications for fiscal transfer policy effectiveness.

## Core results

Magnitudes from source tables; locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Average consumption-income elasticity is near 1.0 across all five episodes; large consumption adjustments observed throughout the income distribution | Table 1, Panel A, p. 2209 | Average across episodes: 0.92; by episode: Italy 1.13, Spain 0.97, Mexico 1994 0.78, Mexico 2008 0.73, Peru 0.99 |
| R2 | Top-income household elasticities are similar to or larger than the economy average; income-rich households do not smooth consumption during these crises | Table 1, Panel A, p. 2209 | Top-decile mean: 0.93; by episode: Italy 0.95, Spain 0.90, Mexico 1994 0.79, Mexico 2008 0.88, Peru 1.15 |
| R3 | Households holding liquid assets show consumption-income elasticities near the average, ruling out a hand-to-mouth interpretation for the top-income result | Table 1, Panel B, p. 2209 | Liquid-asset holders: average elasticity 0.86, top-income elasticity 1.01; defined as holding liquid assets exceeding two weeks of income per Kaplan, Violante, and Weidner (2014) |
| R4 | High consumption-income elasticities appear across all observable household characteristics: age group, education level, geography, employment status, and economic sector | Table 2, p. 2212 | All subgroups show elasticities broadly near or above 1; no systematic pattern concentrating the result in a specific demographic group |
| R5 | The permanent-income (PI) model calibrated for Italy reproduces a flat elasticity pattern close to 1 for all income deciles, matching the data; the result is robust to multiple extensions | Figure 5, p. 2220; Table 3 (calibration), p. 2218 | PI model predicts elasticities close to 1 across all deciles; pattern robust to heterogeneous income loadings, negative asset revaluations, and uncertainty shocks (Panels A-D) |
| R6 | The credit-tightening (CT) model predicts a decreasing elasticity pattern across the income distribution (rich smooth, poor adjust more), at odds with the observed flat Italian crisis pattern | Figure 7, Panel B, p. 2226 | The CT model predicts lower elasticities for richer households than for poorer households, unlike the broadly flat observed Italian pattern |
| R7 | Fiscal transfer stimulus is less effective under the PI crisis experiment than under the CT crisis; the MPC from a one-time transfer is positive but decreasing in income in all scenarios | Figure 8, p. 2228 | MPC from transfer is highest under the CT crisis (borrowing-constrained households have high MPC), lowest under the PI crisis; PI-crisis MPC close to steady-state transitory-shock MPC |
| R8 | Income and consumption both contract on average across the five crisis episodes | Table 1, Panel A, p. 2209 | Average change in log income: -0.19; average change in log consumption: -0.16 |
| R9 | Large consumption-income elasticities also appear among households without home ownership, weakening the illiquid-wealth revaluation explanation | Table 2, Panel A, p. 2212 | Average elasticity: homeowners 0.97; non-homeowners 0.83 |
| R10 | Large consumption-income elasticities also appear among households without business ownership, weakening the illiquid-wealth revaluation explanation | Table 2, Panel A, p. 2212 | Average elasticity: business owners 1.31; nonowners 0.89 |
| R11 | Elevated elasticities are broad across age, education, location, sector, and full-time employment groups | Table 2, Panel B, p. 2212 | Average elasticity: age groups 0.88-1.01; education groups 0.89-1.25; location groups 0.95; sectors 0.88-0.99; full-time employment groups 0.89-0.95 |
| R12 | The near-unit elasticity pattern also appears in regular Italian business cycles, while US elasticities are lower | Figure 4, p. 2214; text p. 2214 | Italy estimates are close to 1 across income quintiles; US estimates range from 0.2 to 0.6 |
| R13 | Stone-Geary nonhomothetic preferences allow the permanent-income model to reproduce rising elasticities across Mexican income deciles | Figure 6, p. 2223; text p. 2223 | Model with nonhomotheticity reproduces the increasing Mexican pattern; below-indigence share: Italy 1%, Mexico 16% |
| R14 | Household-level consumption smoothing remains present, but the sample countries have less consumption insurance than the US | text p. 2208 | Individual consumption elasticities range from 0.32 in Appendix Table A1 to 0.36 for sample countries; sample-country elasticities and partial-insurance coefficients exceed US counterparts |

**Overall (paper's conclusion).** Top-income households have large consumption-income elasticities similar to or larger than the average, even though the shape across income differs: it is broadly flat in European episodes and rises with income in emerging-market episodes. The permanent-income view of crises can account for these patterns analytically and quantitatively. Credit-tightening theories face a challenge explaining why income-rich households adjust consumption as much as the average. The difference has policy bite: fiscal transfers are less effective in stimulating consumption when the crisis reflects a permanent income decline than when it stems from a borrowing-constraint tightening.

## Theory / model

The model is a heterogeneous-agent small open economy with a continuum of households (pp. 2215-2216). Each household has preferences over an infinite consumption stream (equation 1, p. 2215):

$$
E_0 \sum_{t=0}^{\infty} \beta^t u(c_{it}), \tag{1}
$$

where $$u(\cdot)$$ is increasing and concave, $$c_{it}$$ is household $$i$$'s consumption in period $$t$$, and $$\beta \in (0,1)$$ is the discount factor. Each period the household receives an endowment $$y_{it} = h(\mu_{it}, Y_t)$$, where $$\mu_{it}$$ is idiosyncratic and $$Y_t$$ is aggregate income with $$\int h(\mu_{it}, Y_t)\, di = Y_t$$; the baseline sets $$y_{it} = \mu_{it} Y_t$$. Asset markets are incomplete; households save and borrow only in a riskless bond. The budget constraint and borrowing constraint are (equations 2-3, p. 2215):

$$
c_{it} = y_{it} - a_{i,t+1} + (1+r)\, a_{it}, \tag{2}
$$

$$
a_{i,t+1} \geq -\kappa, \quad \kappa > 0, \tag{3}
$$

where $$a_{it}$$ are bond holdings and $$r$$ is the international interest rate.

**Analytical characterization (Proposition 1, pp. 2216-2217).** Under quadratic utility $$u(c) = ac - bc^2$$ and proportional endowment structure, iterating the Euler equation yields optimal consumption (equation 4, p. 2216):

$$
c_{it} = r a_{it} + \frac{r}{1+r} E_t\!\left[\sum_{s=0}^{\infty} \frac{y_{it+s}}{(1+r)^s}\right] - \frac{r}{1+r} E_t\!\left[\sum_{s=0}^{\infty} \frac{\lambda_{it+s}}{(1+r)^s}\right], \tag{4}
$$

where $$\lambda_{it}$$ is the Lagrange multiplier on the borrowing constraint. For a permanent aggregate income shock ($$Y_{t+h} = Y_t < Y_{ss}$$ for all $$h \geq 0$$) and small interest rates ($$r \to 0$$), Proposition 1 states that the consumption-income elasticity is $$\varepsilon_{cy} = 1$$ for both constrained and permanently unconstrained households: the proportional aggregate shock reduces permanent income of all households proportionally, generating a flat cross-sectional elasticity near 1.

**Credit-tightening extension (Proposition 2, pp. 2224-2225).** The CT crisis uses a borrowing constraint that depends on aggregate income (equation 6, p. 2224):

$$
a_{i,t+1} \geq -\kappa\, f(Y_t), \tag{6}
$$

where $$f(Y_t) \geq 0$$ is non-decreasing; calibrated as $$f(Y_t) = Y_t^{\nu}$$ with $$\nu = 2.7$$. Under a mean-reverting transitory income shock plus constraint tightening, Proposition 2 shows that permanently unconstrained households have $$\varepsilon_{cy} < 1$$ (close to 0 for a highly transitory shock) while constrained households have $$\varepsilon_{cy} = g(\varepsilon_{fY}) > 1$$. Since income-rich households are more likely to be permanently unconstrained, the CT view generates a decreasing elasticity pattern across the income distribution: rich households smooth, poor households adjust.

**Emerging-market extension with nonhomotheticities (p. 2222).** To account for the increasing elasticity pattern in emerging markets, where many households are close to subsistence consumption, the model adopts Stone-Geary preferences:

$$
u(c_{it}) = \frac{(c_{it} - \underline{c})^{1-\gamma}}{1 - \gamma},
$$

where $$\underline{c}$$ is the subsistence consumption level. Low-income households near $$\underline{c}$$ have a strong desire to smooth and therefore a lower consumption-income elasticity, generating the increasing pattern with income observed in Mexico and Peru.

## Method

The quantitative model uses CRRA utility $$u(c) = c^{1-\gamma}/(1-\gamma)$$ with $$\gamma = 2$$ and an AR(1) idiosyncratic income process in logs (p. 2217):

$$
\ln\mu_{it} = \rho_\mu \ln\mu_{i,t-1} + \sigma_\mu\, \varepsilon_{it}, \quad \varepsilon_{it} \sim N\!\left(-\frac{\sigma_\mu}{2(1+\rho_\mu)},\, 1\right).
$$

The model is solved via `value-function-iteration` on a discrete state space. Steady-state calibration targets two moments from Italian SHIW data: the liquid wealth-to-income ratio (0.87) and the hand-to-mouth share (0.23) (Table 4, p. 2219), yielding $$\beta = 0.90$$, $$r = 0.02$$, $$\rho_\mu = 0.88$$, $$\sigma_\mu = 0.26$$, and $$\kappa = 0.23$$ (Table 3, p. 2218). The model is assessed against untargeted moments including income and wealth distribution statistics (Table 4, p. 2219).

The heterogeneous-loading extension (equation 5, p. 2219) replaces $$y_{it} = \mu_{it} Y_t$$ with:

$$
y_{it} = \mu_{it} Y_t^{\Gamma(\mu_{it})}, \tag{5}
$$

where $$\Gamma(\mu_{it})$$ is estimated nonparametrically from the income dynamics of each decile in Italian crisis data.

The empirical measurement methodology follows Blundell, Pistaferri, and Preston (2008): income and consumption are residualized by projecting on household observables (family size, number of children, head's sex, age, education, and geographic dummies) and time trends before computing group-level averages.

## Empirical specifications

**Consumption-income elasticity (baseline measurement, p. 2208).** For income group $$j$$, the consumption-income elasticity is:

$$
\hat{\varepsilon}^j_{cy} = \frac{\Delta_h \log\bar{c}_{j,\tau+h}}{\Delta_h \log\bar{y}_{j,\tau+h}},
$$

where $$\bar{c}_{j,t} \equiv \frac{1}{n_{j,t}} \sum_{i \in \mathcal{I}_{j,t}} c_{i,t}$$ and $$\bar{y}_{j,t} \equiv \frac{1}{n_{j,t}} \sum_{i \in \mathcal{I}_{j,t}} y_{i,t}$$ are group-level averages, $$\tau$$ is the output peak, and $$h$$ is the peak-to-trough interval. Income $$Y$$ is monetary after-tax nonfinancial income; consumption $$C$$ is expenditure on nondurable goods and services; both are deflated by CPI and residualized from household observable characteristics. Confidence intervals use 2,000 bootstrap replications. Synthetic income-group cohorts allow application to countries with only cross-sectional data; results hold for fixed households where panel data exist (Italy, Peru). Episode windows: Italy 2006-2014; Spain 2008-2013; Mexico 1994-1996; Mexico 2006-2010; Peru 2007-2010 (footnote 5, p. 2208).

**Business-cycle comparison (p. 2214; Figure 4).** For Italy across biennial periods, and analogously for the US using CEX data (1980-2010), the specification is:

$$
\Delta \ln c_{q,t} = \alpha_q + \beta_q\, \Delta \ln y_{q,t} + \varepsilon_{q,t},
$$

where $$c_{q,t}$$ and $$y_{q,t}$$ are average residualized consumption and income in quintile $$q$$ at time $$t$$. The quintile-specific intercept $$\alpha_q$$ is the only stated fixed component; each quintile equation is estimated separately. Figure 4 reports 90% confidence intervals, but the main text does not specify the standard-error estimator. Estimates of $$\beta_q$$ are close to 1 for all quintiles in Italy, and range from 0.2 to 0.6 for the United States. The Italian SHIW series spans more than four decades; the CEX comparison uses 1980-2010 (text p. 2214).

**Crisis experiments.** In each simulated crisis, the paper computes the same decile-level elasticity as in the data. The PI experiment specifies the expected aggregate-income path as (p. 2218):

$$
\log Y_t = \log Y_{t-1} + \rho_g^t \varepsilon_Y, \quad \varepsilon_Y = -0.15, \quad \rho_g = 0.24.
$$

For the CT experiment, aggregate income follows a mean-reverting path (p. 2226):

$$
\log Y_t = \rho_Y^t \varepsilon_Y, \quad \rho_Y = 0.9.
$$

The borrowing constraint is $$a_{i,t+1} \geq -\kappa f(Y_t)$$, with $$f(Y_t) = Y_t^{\nu}$$ and $$\nu = 2.7$$ (equation 6, p. 2224; calibration and Figure 7, p. 2226). The sensitivity of the constraint to aggregate income is calibrated to match the aggregate consumption-income elasticity. These are deterministic model simulations, so no regression fixed effects or sampling standard errors apply.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Survey on Household Income and Wealth (SHIW), Banca d'Italia | Italy: household income, consumption, wealth, demographics; main calibration and crisis episode 2006-2014 | no page yet |
| Encuesta de Presupuestos Familiares (EPF), INE Spain | Spain: household income and nondurable consumption cross-section; crisis episode 2008-2013 | no page yet |
| Encuesta Financiera de las Familias (EFF), Banco de Espana | Spain: supplement for household asset holdings and debt data | no page yet |
| Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH), INEGI Mexico | Mexico: household income and consumption; two episodes (Mexico 1994-1996 and 2006-2010) | no page yet |
| Encuesta Nacional de Hogares (ENAHO), INEI Peru | Peru: household income and consumption; episode 2007-2010 | no page yet |
| FRED and OECD | Aggregate output and consumption series for macro context and episode identification (Figure 2 sources) | [FRED](/wiki/datasets/fred/) |
| Consumer Expenditure Survey (CEX), BLS USA | US comparison of consumption-income elasticities, 1980-2010 | no page yet |

Total sample: 90,199 household-observations across five episodes (Italy 7,067; Spain 21,802; Mexico 1994 13,122; Mexico 2008 27,038; Peru 21,170; Table 1, p. 2209). Data are annual or biennial depending on the survey.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20201931) if you are: building or calibrating heterogeneous-agent open-economy models (online Appendix D has full calibration details including aggregate risk, closed-economy variants, and the interest-rate shock extensions); comparing micro distributional evidence across crisis types; assessing credit-tightening models against consumption survey data from Europe and Latin America; or designing fiscal transfer policies for macro crises and want the formal policy-experiment details (Section IIIb and Appendix D4).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(8), August 2023. Copyright 2023 American Economic Association; article freely readable at [doi.org/10.1257/aer.20201931](https://doi.org/10.1257/aer.20201931) after the AEA 12-month embargo; no Creative Commons licence assigned.

This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**.

> Guntin, Rafael, Pablo Ottonello, and Diego J. Perez. "The Micro Anatomy of Macro Consumption Adjustments." *American Economic Review* 113, no. 8 (August 2023): 2201-2231. DOI: 10.1257/aer.20201931.
