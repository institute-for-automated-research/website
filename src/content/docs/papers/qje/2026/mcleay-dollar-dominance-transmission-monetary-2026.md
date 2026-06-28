---
title: "Dollar Dominance and the Transmission of Monetary Policy: McLeay & Tenreyro (2026)"
description: >-
  Distilled: The MCP model shows monetary easing can still strongly boost exports
  even under dollar pricing, with export quantities rising 0.95% vs. only 0.14%
  in sticky-price DCP models, because the binding constraint is supply capacity
  not demand. Panel evidence from 37 emerging economies and case studies of
  Canada, Chile, and three large Latin American devaluations confirm significant
  export responses to monetary-policy-induced exchange rate changes. The Quarterly
  Journal of Economics 2026, CC BY 4.0. Seven core results with source locators,
  datasets used, the model, and the method.
sidebar:
  label: McLeay-Tenreyro 2026
  order: 1
tags: [paper-summary, monetary-policy, open-economy-macro, exchange-rates, international-trade, local-projections, panel-regression, structural, open-access, cc-by, peer-reviewed, unreplicated, data:un-comtrade]
paper:
  authors: Michael McLeay, Silvana Tenreyro
  authorList:
    - { family: McLeay, given: Michael, affiliation: Bank of England }
    - { family: Tenreyro, given: Silvana, orcid: "0000-0002-9816-7452", affiliation: London School of Economics and Political Science }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 605–666
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf043
  jel:
    codes: [E31, E52, E58, F41, Q02, Q30]
    assignedBy: paper (PDF p. 605)
    date: 2026-06-28
  topics: ["Economic Theory and Policy", "Global Financial Crisis and Policies"]
  dataAccess: public
  outcome:
    - export quantities (developing and emerging economies)
    - aggregate output (small open economy)
    - dollar export price pass-through
    - share of exports invoiced in dollars
  outcomeClass: [macro-aggregates, trade-flows]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-09-22; license notice on PDF pp. 605, 666)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF via Oxford Academic (doi.org redirect confirmed 2026-06-28)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 7
  citedByCount: 3

  methods:
    role: both
    contributes: mcp-model
    family: structural
    buildsFrom: [local-projections, panel-regression]
    identification: instrument
  contributionType: [new-theory, new-fact]
  mechanisms: [dollar-pricing-wedge]
  scope:
    region: global
    period: 1981-01..2023-12
    frequency: mixed
    dataType: [market, administrative]
    granularity: [aggregate]
    n: "37 emerging and developing economies (panel LP); Canada 1981-2015, Chile 2003-2017 (country VARs); 1,173 country-year obs (invoicing regression, Table I)"
  findings:
    - { ref: R1, outcome: export quantities, metric: pp-effect, value: "MCP 0.95%, DCP 0.14%, PCP 0.69% (year-1 avg, 100 bps easing)", direction: positive, vsBenchmark: "7x sticky-price DCP (Table III, p. 639)" }
    - { ref: R2, outcome: aggregate output, metric: pp-effect, value: "MCP 0.81%, DCP 0.32% (year-1 avg, 100 bps easing)", direction: positive, vsBenchmark: "2.5x sticky-price DCP (Table III, p. 639)" }
    - { ref: R3, outcome: share of exports invoiced in dollars, metric: coefficient, value: "0.712-0.799*** (1,173 obs; 10 pp more homogeneous goods -> 7-8 pp more dollar invoicing)", direction: positive }
    - { ref: R4, outcome: export quantities (dollar exports, 37 EMEs), metric: pp-effect, value: "peak fall ~1.5% at 11 months; year-1 avg ~0.99% (1 pp monetary tightening)", direction: negative, vsBenchmark: "consistent with MCP prediction of ~0.95% fall (Figure X, p. 652)" }
    - { ref: R5, outcome: export quantities (Canada energy and chemicals), metric: pp-effect, value: "energy peak -1.5% after 3 months; chemicals -1% after 7 months (1 pp policy rate increase)", direction: negative, vsBenchmark: "MCP model broadly replicates scale and timing (Figure XI, p. 656)" }
    - { ref: R6, outcome: export quantities (Chile mining and manufacturing), metric: pp-effect, value: "mining -10% on impact; manufacturing avg -1.25% over first 6 months (1 pp tightening)", direction: negative, vsBenchmark: "MCP model calibrated to Chile broadly matches (Figure XII, p. 657)" }
    - { ref: R7, outcome: dollar export price pass-through, metric: pp-effect, value: "MCP: -0.06%; PCP: -0.34%; DCP: -0.07% (year-1 avg, 100 bps easing)", direction: negative, vsBenchmark: "MCP low pass-through matches DCP but arises from equilibrium not stickiness (Table III, p. 639)" }
  resultType: overturns
  relatesTo:
    - { cite: 'Gopinath et al. (2020)', doi: '10.1257/aer.20171201', relation: contradicts, note: 'their DCP model predicts muted export response (0.14%); MCP restores strong response (0.95%)' }
    - { cite: 'Obstfeld and Rogoff (1995)', relation: builds-on, note: 'MCP model restores the allocative properties of their PCP framework for exchange rate policy' }
    - { cite: 'Egorov and Mukhin (2023)', doi: '10.1257/aer.20200636', relation: tests, note: 'challenges their optimal DCP policy conclusions by showing price flexibility relaxes the binding dollar-pricing constraint' }
    - { cite: 'Jordà (2005)', doi: '10.1257/0002828053828518', relation: builds-on, note: 'local projection method used for panel impulse responses in Section V' }
    - { cite: 'Brandao-Marques et al. (2021)', relation: builds-on, note: 'panel database of monetary policy shocks for 37 emerging and developing economies' }
  openQuestions:
    - "Whether identified monetary policy shocks provide sufficient variation to recover export dynamics in recent decades when monetary shocks have become smaller and less persistent, limiting the power of the LP approach (p. 648)."
    - "How sensitive results are to the calibration of returns to scale in the export sector, the paper's most uncertain parameter, which governs the tightness of the supply constraint (p. 636)."
    - "Whether MCP dynamics extend to advanced economies with larger shares of differentiated exports, addressed only illustratively in the paper (pp. 640-642)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/SASVME
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full PDF read (pp. 605-666); seven results extracted. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: JEL codes corrected (E52/F41/F31 -> E31/E52/E58/F41/Q02/Q30 per PDF p. 605), Canada VAR lag count corrected (one lag -> six lags per Figure XI caption p. 656), colorful adjective 'very large' removed from R6 row title." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf043", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-09-22" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model, and the empirical specifications: enough to know what it found and how, without reading all 62 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1093/qje/qjaf043).

## TL;DR

McLeay and Tenreyro challenge the dominant-currency pricing (DCP) view that dollar invoicing undermines exchange-rate-based monetary policy transmission. They build a mixed currency pricing (MCP) framework in which competitive, homogeneous-good exporters price in dollars with flexible prices, while differentiated-good exporters retain sticky monopoly-power pricing. In the MCP model, a monetary loosening that depreciates the currency lowers domestic production costs expressed in dollars, allowing competitive exporters to expand supply substantially. The binding constraint is export supply capacity (upward-sloping marginal cost from decreasing returns to scale), not demand. The model replicates the empirical fact of limited exchange rate pass-through to dollar export prices (as in DCP), yet delivers a strong export quantity response (as in the classic PCP framework of Obstfeld and Rogoff (1995)), and challenges the optimal-DCP-policy conclusions of Egorov and Mukhin (2023) by showing price flexibility relaxes the binding dollar-pricing constraint. Three empirical exercises confirm the mechanism: monetary policy-induced depreciations raise exports significantly in a panel of 37 emerging and developing economies, in Canada and Chile (where dollar-priced commodity exports dominate), and large devaluations in Argentina, Brazil, and Mexico were followed by visible export expansions relative to trend.

## Core results

Magnitudes as reported; `\*\*\*` = 1%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | MCP model: export quantity response to monetary easing is 7x the sticky-price DCP response | Table III, p. 639 | Year-1 avg: MCP 0.95%, DCP 0.14%, PCP 0.69%; impact (Figure VI, p. 637): MCP ~1.34%, DCP ~0.05% |
| R2 | MCP model: aggregate output response is 2.5x the DCP response | Table III, p. 639 | Year-1 avg: MCP 0.81%, DCP 0.32%; common exchange rate depreciation: 0.52% |
| R3 | Dollar invoicing is strongly positively associated with homogeneous-goods export share | Table I, p. 620 | OLS coefficient 0.712-0.799\*\*\* (1,173 obs, R² 0.29-0.37); 10 pp more homogeneous goods → 7-8 pp more dollar invoicing |
| R4 | Panel LP: monetary tightening causes significant fall in exports in 37 emerging and developing economies | Figure X, p. 652 | Dollar exports peak fall ~1.5% at 11 months; year-1 avg ~0.99%; 68% CI excludes zero at peak |
| R5 | Canada: monetary tightening causes large export falls consistent with MCP predictions | Figure XI, p. 656 | Energy exports peak -1.5% after 3 months; chemicals -1% after 7 months per 1 pp policy rate increase |
| R6 | Chile: monetary tightening causes large mining export falls consistent with MCP | Figure XII, p. 657 | Mining exports fall ~10% on impact; manufacturing exports avg -1.25% first 6 months per 1 pp tightening |
| R7 | MCP dollar export price pass-through is small (-0.06%), matching DCP, but arises from equilibrium not stickiness | Table III, p. 639 | Year-1 avg: MCP -0.06%, PCP -0.34%, DCP -0.07% (100 bps easing) |

**Overall (paper's conclusion).** The pass-through of monetary policy via the export channel is strong even when goods are priced in dollars, as long as dollar-pricing exporters face competitive markets with flexible prices. The standard interpretation of low exchange rate pass-through to dollar export prices as evidence of nominal rigidities is misleading: in the MCP model, low pass-through is an equilibrium result of high demand elasticity and rising marginal costs, not a friction. Monetary policy and the exchange rate remain effective stabilization tools in a world of dollar dominance. The policy implications of dollar pricing may need to be reassessed.

## Theory / model

The model economy consists of households who consume domestic and imported goods and provide labor for firms that produce for home consumption and exports. A monetary authority sets domestic interest rates via a Taylor rule. The key structural innovation is a nested CES demand system that reverses the standard open-economy nesting, placing intra-sector variety competition at the inner level and cross-industry substitution at the outer level.

**Household preferences.** Each household in country $$j$$ maximizes lifetime expected utility (equation 1, p. 622):

$$
\mathbb{E}_0 \sum_{t=0}^\infty \beta^t \left( \frac{C_{j,t}^{1-\sigma_c}}{1-\sigma_c} - \frac{N_{j,t}(h)^{1+\varphi}}{1+\varphi} \right), \tag{1}
$$

where $$C_{j,t}$$ is total consumption, $$N_{j,t}(h)$$ is labor supply, $$\sigma_c$$ is the coefficient of relative risk aversion (equal to the inverse of the intertemporal elasticity of substitution), and $$\varphi$$ is the reciprocal of the labor supply elasticity.

**Demand structure.** Total consumption aggregates across goods $$g$$ (equation 2, p. 622):

$$
C_{j,t} \equiv \left( \int_0^1 C_{j,t}(g)^{\frac{\sigma-1}{\sigma}} dg \right)^{\frac{\sigma}{\sigma-1}}, \tag{2}
$$

where $$\sigma$$ is the cross-industry elasticity of substitution. Within each good $$g$$, consumption aggregates varieties from all countries (equation 3, p. 623):

$$
C_{j,t}(g) \equiv \left( \sum_i \left( \frac{\gamma^g_{ij}}{|\Omega^g_i|} \right)^{\frac{1}{\eta^g}} \int_{\omega \in \Omega^g_i} C^g_{ij,t}(\omega)^{\frac{\eta^g-1}{\eta^g}} d\omega \right)^{\frac{\eta^g}{\eta^g-1}}, \tag{3}
$$

where $$\eta^g$$ is the within-good cross-variety elasticity (which may vary across goods) and $$\gamma^g_{ij}$$ captures preference for varieties from country $$i$$, arising from home bias and trade costs. Setting $$\eta^g \gg \sigma$$ for homogeneous goods means the relevant price for export demand is the variety price relative to competing foreign varieties, not the aggregate price index. This makes demand highly elastic at the variety level, enabling large quantity adjustments in response to small price changes.

**Firms and production.** A firm in country $$j$$ producing variety $$\omega$$ of good $$g$$ uses labor and intermediate inputs (equation 15, p. 626):

$$
Y^g_{j,t}(\omega) = A^g_{j,t} (L^g_{j,t}(\omega))^{1-\alpha} (X^g_{j,t}(\omega))^\alpha \left[ (L^g_{j,t})^{1-\alpha} (X^g_{j,t})^\alpha \right]^{v_g - 1}, \tag{15}
$$

where $$\alpha$$ is the intermediate input share, $$1-\alpha$$ is the labor share, and $$v_g \leq 1$$ governs returns to scale at the industry level. The term $$[(L^g_{j,t})^{1-\alpha}(X^g_{j,t})^\alpha]^{v_g-1}$$ generates decreasing returns when $$v_g < 1$$, capturing fixed good-specific factors such as structures. The resulting industry-level marginal cost (equation 24, p. 629) is:

$$
MC^g_{j,t} = \frac{1}{(1-\alpha)^{1-\alpha} \alpha^\alpha} \frac{W^{1-\alpha}_{j,t} P^\alpha_{j,t} \left[ L^{1-\alpha}_{j,t} X^\alpha_{j,t} \right]^{1-v_g}}{A^g_{j,t}}, \tag{24}
$$

which rises with industry output when $$v_g < 1$$, generating an upward-sloping marginal cost curve. This supply-side constraint, not demand, limits the export expansion after a depreciation.

**Pricing.** Each firm resets its price with good-specific Calvo probability $$1 - \delta^g_p$$ each period. Dollar-pricing firms solve (equation 21, p. 628):

$$
\mathbb{E}_t \left[ \sum_{s=0}^\infty (\beta \delta^g_p)^s \frac{C^{-\sigma_c}_{j,t} P_{j,t}}{C^{-\sigma_c}_{j,t+s} P_{j,t+s}} Y^g_{ji,t+s}(\omega) \left( \bar{P}^{g,\$}_{ji,t}(\omega) - \frac{\eta^g}{\eta^g - 1} \frac{MC_{j,t+s}(\omega)}{\mathcal{E}_{\$j,t+s}} \right) \right] = 0, \tag{21}
$$

setting the dollar reset price as a markup $$\eta^g / (\eta^g - 1)$$ over the weighted average of future dollar marginal costs. When prices are flexible ($$\delta^g_p \to 0$$), the optimal dollar price depends only on current dollar marginal costs and the invoicing currency is irrelevant: a depreciation that lowers home costs in dollar terms leads to a small equilibrium price cut (smaller when demand is more elastic) and a large quantity increase.

**Monetary policy.** The central bank sets domestic nominal interest rates via a Taylor rule (equation 25, p. 629):

$$
\frac{1 + i_{j,t}}{1 + \bar{i}_j} = \left( \frac{1 + i_{j,t-1}}{1 + \bar{i}_j} \right)^\rho (1 + \pi_{j,t})^{(1-\rho)\phi_\pi} \zeta^M_{j,t}, \tag{25}
$$

where $$\rho$$ is policy smoothing, $$\phi_\pi > 1$$ is the inflation response coefficient, $$\bar{i}_j$$ is the steady-state nominal rate, and $$\zeta^M_{j,t}$$ is an AR(1) monetary policy shock. A negative shock (easing) reduces the policy rate, leading to a nominal exchange rate depreciation.

**The central finding.** The depreciation lowers domestic dollar costs (wages expressed in dollars fall). For a monopolistic sticky-price DCP exporter, the price cannot adjust so markups rise but quantities stay flat. For a competitive flexible-price exporter with high $$\eta^g$$, the optimal reset price falls only slightly (elastic demand means profits respond more to volume than to margin). The quantity adjustment is large, continuing until rising marginal cost from expanding production offsets the improved profitability. The supply constraint parameter $$v_g$$ determines the size of the export response: under constant returns ($$v_g = 1$$), the quantity response is very large; under decreasing returns ($$v_g = 0.85$$), it is still substantially larger than in the DCP model. The MCP model nests sticky-price DCP (set $$\eta^g = \sigma$$, $$\delta^g_p = 0.75$$) and PCP (set $$\delta^g_p = 0$$, $$\eta^g = \sigma$$) as special cases.

## Method

**Model calibration and simulation.** The model is linearized around a deterministic steady state and simulated using impulse response functions (Figure VI, p. 637). The baseline calibration for households and policy follows Gopinath et al. (2020): cross-product elasticity $$\sigma = 2$$, labor demand elasticity $$\vartheta = 4$$, Calvo price rigidity $$\delta_p = 0.75$$ (four-quarter mean duration), Calvo wage rigidity $$\delta_w = 0.75$$ (Table II, pp. 634-635). The key departures for the homogeneous export sector: fully flexible prices ($$\delta^{g_H}_p = 0$$), cross-variety elasticity $$\eta^{g_H} = 17$$ (from Broda and Weinstein (2006) for crude oil 1972-1988), and decreasing returns $$v_{g_H} = 0.85$$ (calibrated from the share of structures in Canadian mining value-added). Country-specific calibrations for Canada and Chile are in Table IV (p. 654).

The method builds on `local-projections` (Jordà 2005) for the empirical tests and `panel-regression` for the motivating cross-country facts, with the proposed `nk-soe-dsge` framework as the structural basis.

**Monetary policy shock identification.** Because the exchange rate is endogenous, the empirical strategy uses monetary policy shocks identified by purging the interest rate of its response to current macroeconomic conditions. Shocks are obtained as residuals $$\hat{\epsilon}_{i,t}$$ from a forward-looking interest rate rule (equation 38, p. 650):

$$
\Delta i_{i,t} = \alpha + \phi_\pi E_t \pi^f_{i,t+12} + \phi_y E_t \Delta y^f_{i,t+12} + \sum_{j=1}^2 \phi_\pi \pi_{i,t-j} + \sum_{j=1}^2 \phi_y \Delta y_{i,t-j} + \sum_{j=1}^2 \phi_e \Delta NEER_{i,t-j} + \sum_{j=1}^2 \phi_i i_{i,t-j} + \epsilon_{i,t}, \tag{38}
$$

where $$E_t \pi^f_{i,t+12}$$ and $$E_t \Delta y^f_{i,t+12}$$ are 12-month-ahead forecasts of inflation and output growth. The residual $$\hat{\epsilon}_{i,t}$$ is by construction uncorrelated with past macro conditions and current forecasts, providing an exogenous driver of exchange rate changes.

## Empirical specifications

**Section III: Fact 3 invoicing regression (Table I, p. 620).** Cross-country OLS establishes that dollar invoicing is concentrated in homogeneous-good sectors. The regression uses four-digit SITC data from UN Comtrade (Rauch (1999) homogeneous-goods classification) and invoicing data from Boz et al. (2022):

$$
\text{Dollar share}_{i,t} = \beta_0 + \beta_1 \text{Homogeneous share}_{i,t} + \mu_t + \epsilon_{i,t},
$$

with specifications adding year fixed effects and GDP weighting. Estimated on 1,173 observations across 101 countries (1990-2019) with robust standard errors. Coefficient $$\hat{\beta}_1 = 0.712$$ to $$0.799$$ (all significant at 1%).

**Section V.B: Panel local projections in 37 EMEs (equation 39, p. 651).** Macroeconomic effects of identified monetary shocks on exports and activity are estimated using Jordà (2005)'s LP method with country fixed effects:

$$
z_{i,t+h} = \mu^h_i + \sum_{j=0}^2 \gamma^h_j \hat{\epsilon}_{i,t-j} + \delta^h_0 \Delta NEER_{i,t} \times \hat{\epsilon}_{i,t} + \sum_{j=0}^2 \beta^h_j \times \text{controls}_{i,t-j} + \omega^h_{i,t}, \tag{39}
$$

where $$h$$ is the horizon in months, the interaction term $$\Delta NEER_{i,t} \times \hat{\epsilon}_{i,t}$$ captures the differential effect through the exchange rate, and $$\omega^h_{i,t}$$ is the residual. Impulse responses are normalized to a 1 percentage point interest rate increase on impact (so all results correspond to a monetary tightening). The panel database is from Brandao-Marques et al. (2021), covering 37 countries.

**Section V.C: Country VARs for Canada and Chile (equation 40, p. 655).** For each economy, a hybrid VAR with six lags (Canada) or four lags (Chile) is estimated:

$$
\mathbf{X}_t = \mathbf{c} + \delta t + B(\mathbf{L}) \mathbf{X}_{t-1} + C(\mathbf{L}) \mathbf{W}_{t-1} + \boldsymbol{\epsilon}_t, \tag{40}
$$

where $$\mathbf{X}_t$$ contains the monetary policy shock series (ordered first for recursive identification), exchange rate, CPI, GDP, and sectoral exports; $$\mathbf{W}_t$$ includes the U.S. dollar price of Canadian commodities (Canada only). Identification is recursive (Cholesky), with the cumulative monetary shock ordered first. For Canada: Champagne and Sekkel (2018) narrative shocks, monthly, 1981-2015. For Chile: Brandao-Marques et al. (2021) shocks, monthly, 2003-2017. Model impulse responses (solid red lines in Figures XI-XII) are scaled to match the average estimated exchange rate response over the first six months.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| UN Comtrade (four-digit SITC) | Share of homogeneous goods in total goods exports, 1985-2023 (Figure IV); base data for invoicing regression (Table I) | no page yet |
| Boz et al. (2022) invoicing database | Share of exports invoiced in dollars, 1990-2019, used in Table I regression | no page yet |
| Brandao-Marques et al. (2021) panel | Monetary policy shocks and macro data for 37 emerging and developing economies; used in Section V.B LP estimation (equation 39, Figure X) | no page yet |
| Champagne and Sekkel (2018) shock series | Narrative monetary policy shocks for Canada, 1974-2015; used in Canada VAR (equation 40, Figure XI) | no page yet |
| Canadian national statistics (Bank of Canada / Statistics Canada) | Monthly interest rate, CPI, GDP, energy and chemicals exports, exchange rate, 1981-2015 | no page yet |
| Chilean national statistics (Banco Central de Chile) | Monthly IMACEC (output), policy rate, CPI, mining and manufacturing exports, exchange rate, 2003-2017 | no page yet |
| Harvard Dataverse replication files | Assembled replication dataset (McLeay and Tenreyro 2025, doi:10.7910/DVN/SASVME) | no page yet |

Sample: panel LP covers quarterly data for 37 countries (1990-2019); country VARs use monthly data (Canada: T ≈ 418 months; Chile: T ≈ 172 months); invoicing regression covers 1,173 country-year observations across 101 countries.

## When to read the full paper

Read the [original](https://doi.org/10.1093/qje/qjaf043) if you are: building or evaluating open-economy monetary models where the invoicing currency choice matters; empirically studying exchange rate pass-through and its interpretation for monetary policy; assessing whether monetary policy transmission through exports remains effective in highly dollar-invoiced developing and emerging economies; or using local projections to identify monetary policy effects on trade flows in a panel with heterogeneous export structures.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** McLeay, Michael, and Silvana Tenreyro.
> "Dollar Dominance and the Transmission of Monetary Policy."
> *The Quarterly Journal of Economics* 141, no. 1 (2026): 605-666.
> DOI: 10.1093/qje/qjaf043. © 2025 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
