---
title: "Dollar Dominance and the Transmission of Monetary Policy: McLeay & Tenreyro (2026)"
description: >-
  Distilled: The MCP model shows monetary easing can still strongly boost exports
  even under dollar pricing, with export quantities rising 0.95% vs. only 0.14%
  in sticky-price DCP models, because the binding constraint is supply capacity
  not demand. Panel evidence from 37 emerging economies and case studies of
  Canada, Chile, and three large Latin American devaluations confirm significant
  export responses to monetary-policy-induced exchange rate changes. The Quarterly
  Journal of Economics 2026, CC BY 4.0. Eighteen core results with source locators,
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
  resultsCount: 18
  citedByCount: 3

  methods:
    role: both
    contributes: mcp-model
    family: structural
    buildsFrom: [local-projections, panel-regression]
    identification: instrument
  contributionType: [new-theory, new-fact]
  mechanisms: [dollar-pricing-wedge, export-supply-channel]
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
    - { ref: R8, outcome: share of homogeneous goods in exports, metric: probability, value: "Developing economies: above 70% average; emerging economies: around 60%; advanced economies: around 35% (1985-2023)", direction: positive, vsBenchmark: "Homogeneous-goods shares are higher in developing and emerging economies than advanced economies (Figure IV, p. 617)" }
    - { ref: R9, outcome: export quantities (mixed producer-currency and dollar-pricing model), metric: pp-effect, value: "Impact increase approximately 0.9% with 80% PCP exporters and 1.4% with 20% PCP exporters; both cases decay toward zero over about 10 quarters", direction: positive, vsBenchmark: "Aggregate exports expand with either 20% or 80% differentiated PCP-sector share (Figure VII, p. 641)" }
    - { ref: R10, outcome: export quantities (model under alternative supply capacity), metric: pp-effect, value: "Impact increase approximately 4.8% at returns to scale 1, 1.3% at 0.85, and below 1% at 0.72", direction: positive, vsBenchmark: "The export expansion is smaller as decreasing returns make marginal cost rise more steeply (Figure VIII, p. 643)" }
    - { ref: R11, outcome: export quantities (homogeneous goods in simulated-data VAR), metric: pp-effect, value: "Estimated dynamic responses are imprecise; zero is within the 68% confidence bands for homogeneous exports", direction: none, vsBenchmark: "A one-lag VAR on 1,000 simulated periods recovers impact effects less reliably at later horizons (Figure IX, p. 648; text p. 648)" }
    - { ref: R12, outcome: export quantities relative to U.S. exports, metric: level, value: "Six-month exchange-rate increases after devaluation: Argentina 130%, Brazil 40%, Mexico 50%; normalized exports visibly shift to faster growth after the events, with no coefficient reported", direction: positive, vsBenchmark: "Normalized exports were falling or growing slowly beforehand; Figure XIII controls for global trade trends using U.S. exports (Figure XIII, p. 659; text p. 660)" }
    - { ref: R13, outcome: differentiated auto exports, metric: pp-effect, value: "Auto exports show a statistically significant increase after an appreciation; no point magnitude is reported in the main text", direction: positive, vsBenchmark: "This exception is not explained by either sticky-price DCP fit or steep supply curves (text p. 658 n. 30; Online Appendix Figure A.14)" }
    - { ref: R14, outcome: export quantities (flexible dollar-pricing goods), metric: pp-effect, value: "Price durations up to two quarters have little qualitative effect; durations of three quarters or longer significantly curtail the export response", direction: positive, vsBenchmark: "Longer rigidity weakens the response relative to fully flexible prices (text pp. 641-642; Online Appendix Figure A.2)" }
    - { ref: R15, outcome: aggregate activity (37 emerging and developing economies), metric: pp-effect, value: "A 1 percentage point monetary tightening lowers CPI and industrial production in the panel impulse responses; the paper reports the responses graphically, without text point estimates", direction: negative, vsBenchmark: "Responses use a 1 pp policy-rate normalization (Figure X, p. 652; text p. 651)" }
    - { ref: R16, outcome: Canadian CPI and GDP, metric: pp-effect, value: "Both CPI and GDP fall significantly after a 1 percentage point monetary tightening; no point magnitudes are reported in the main text", direction: negative, vsBenchmark: "Country-specific six-lag VAR estimates, January 1981-October 2015 (Figure XI, p. 656; text p. 656)" }
    - { ref: R17, outcome: Chilean non-mining activity, metric: pp-effect, value: "Non-mining activity falls gradually after a 1 percentage point monetary shock; no point magnitude is reported in the main text", direction: negative, vsBenchmark: "Country-specific four-lag VAR estimates, April 2003-July 2017 (Figure XII, p. 657; text p. 658)" }
    - { ref: R18, outcome: Chilean CPI, metric: pp-effect, value: "CPI falls, but the response is not statistically significant; no point magnitude is reported in the main text", direction: none, vsBenchmark: "Four-lag VAR estimate (Figure XII, p. 657; text p. 658)" }
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
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Added eleven core result rows (R8-R18), corresponding findings, the export-supply mechanism, and the missing numbered main-text equations and estimating specification inventory from the PDF. Additions are not human-verified or reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 18 core results, equations, specifications, classifications, findings, prose, and frontmatter re-checked against the source PDF; no corrections needed. Table locators and relatesTo locatability checks pass. Review pass (2026-10-04): corrected Eqs. (11) and (37) to match the source PDF." }
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
| R8 | Homogeneous goods make up a larger export share in developing and emerging economies | Figure IV, p. 617; text p. 617 | 1985-2023 averages: developing economies above 70%, emerging economies around 60%, advanced economies around 35% |
| R9 | Mixed dollar and producer-currency pricing still yields an export expansion at both tested exporter shares | Figure VII, p. 641 | Impact export quantity response is approximately 0.9% with an 80% PCP export sector and 1.4% with a 20% PCP sector; both responses unwind over about 10 quarters |
| R10 | Export supply capacity controls how much exports expand after a depreciation | Figure VIII, p. 643; text pp. 643-644 | Impact export quantity response is approximately 4.8% at returns to scale 1, 1.3% at 0.85, and below 1% at 0.72 |
| R11 | A hybrid VAR can recover impact effects on simulated data, but dynamic estimates for homogeneous exports are imprecise | Figure IX, p. 648; text p. 648 | VAR estimated on 1,000 simulated periods; zero lies within the 68% confidence bands for homogeneous-good exports |
| R12 | Exports visibly accelerate relative to U.S. exports after large Latin American devaluations | Figure XIII, p. 659; text pp. 659-660 | Six-month exchange-rate increase: Argentina 130%, Brazil 40%, Mexico 50%; normalized exports turn to faster growth after the devaluations, with no coefficient reported |
| R13 | Auto exports are a counterexample: they rise significantly after an appreciation | Text p. 658 n. 30; Online Appendix Figure A.14 | Statistically significant positive response; the main text reports no point magnitude |
| R14 | Longer dollar-price rigidity curtails the export response | Text pp. 641-642; Online Appendix Figure A.2 | Durations up to two quarters have little qualitative effect; durations of three quarters or longer significantly reduce the response |
| R15 | Panel estimates also show CPI and industrial production fall after monetary tightening | Figure X, p. 652; text p. 651 | Both responses are plotted for a normalized 1 percentage point policy-rate increase; no text point estimates are reported |
| R16 | Canadian CPI and GDP fall significantly after monetary tightening | Figure XI, p. 656; text p. 656 | Both outcomes decline; no point magnitudes are reported in the main text |
| R17 | Chilean non-mining activity falls gradually after monetary tightening | Figure XII, p. 657; text p. 658 | Gradual decline; no point magnitude is reported in the main text |
| R18 | The Chilean CPI response is not statistically significant | Figure XII, p. 657; text p. 658 | CPI falls, but the response is statistically insignificant |

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

### Remaining numbered model equations

The numbered system also defines the household demand, asset-market, firm-pricing,
aggregation, and calibrated small-open-economy relationships below. Equations
(1)-(3), (15), (21), (24), and (25) appear above.

Consumption demand and price indices, equations (4)-(7), pp. 623-624:

$$
\text{C}_{j,t}(g)=\left(\frac{\text{P}_{j,t}(g)}{\text{P}_{j,t}}\right)^{-\sigma}\text{C}_{j,t} \tag{4}
$$

$$
\text{C}^{g}_{ij,t}(\omega)=\frac{\gamma^{g}_{ij}}{|\Omega^{g}_{i}|}\left(\frac{\text{P}^{g}_{ij,t}(\omega)}{\text{P}_{j,t}(g)}\right)^{-\eta_g}\text{C}_{j,t}(g) \tag{5}
$$

$$
\text{P}_{j,t}(g)=\left(\sum_i\frac{\gamma^{g}_{ij}}{|\Omega^{g}_{i}|}\int_{\omega\in\Omega^{g}_{i}}\text{P}^{g}_{ij,t}(\omega)^{1-\eta_g}d\omega\right)^{\frac{1}{1-\eta_g}} \tag{6}
$$

$$
\text{P}_{j,t}=\left(\int_0^1\text{P}_{j,t}(g)^{1-\sigma}dg\right)^{\frac{1}{1-\sigma}} \tag{7}
$$

Labor aggregation and labor demand, equations (8)-(9), p. 625:

$$
\text{L}_{j,t}=\left(\int_0^1\text{N}_{j,t}(h)^{\frac{\vartheta-1}{\vartheta}}dh\right)^{\frac{\vartheta}{\vartheta-1}} \tag{8}
$$

$$
\text{N}_{j,t}(h)=\left(\frac{\text{W}_{j,t}(h)}{\text{W}_{j,t}}\right)^{-\vartheta}\text{L}_{j,t} \tag{9}
$$

The household budget constraint and risk-premium rule are equations (10)-(11),
p. 625:

$$
\text{P}_{j,t}\text{C}_{j,t}+\mathcal{E}_{\$,j,t}(1+i^{\$}_{j,t})\text{B}^{\$}_{j,t}+\text{B}_{j,t}=\text{W}_{j,t}(h)\text{N}_{j,t}(h)+\Pi_{j,t}+\mathcal{E}_{\$,j,t}\text{B}^{\$}_{j,t+1}+\sum_{s\in S}\text{Q}_{j,t+1}(s)\text{B}_{j,t+1}(s) \tag{10}
$$

$$
i^{\$}_{j,t}=\bar{i}^{\$}_{j}+\psi\left(\exp\left(\frac{\text{B}^{\$}_{j,t}}{\text{P}^{\$}_{\$,t}}-\bar{\text{B}}^{\$}_{j}\right)-1\right) \tag{11}
$$

The domestic Euler equation, UIP condition, and reset-wage condition are
(12)-(14), p. 626:

$$
\text{C}_{j,t}^{-\sigma_c}=\beta(1+i_{j,t+1})\mathbb{E}_t\left[\text{C}_{j,t+1}^{-\sigma_c}\frac{\text{P}_{j,t}}{\text{P}_{j,t+1}}\right] \tag{12}
$$

$$
(1+i_{j,t+1})\mathbb{E}_t\left[\text{C}_{j,t+1}^{-\sigma_c}\frac{1}{\text{P}_{j,t+1}}\right]=(1+i^{\$}_{j,t+1})\mathbb{E}_t\left[\text{C}_{j,t+1}^{-\sigma_c}\frac{\mathcal{E}_{\$,j,t+1}}{\text{P}_{j,t+1}\mathcal{E}_{\$,j,t}}\right] \tag{13}
$$

$$
\mathbb{E}_t\sum_{s=0}^{\infty}(\beta\delta_w)^s\text{N}_{j,t+s}(h)\text{C}_{j,t+s}^{-\sigma_c}\left[\frac{\bar{\text{W}}_{j,t}(h)}{\text{P}_{j,t+s}}-\frac{\vartheta}{\vartheta-1}\text{N}_{j,t+s}(h)^\varphi\text{C}_{j,t+s}^{\sigma_c}\right]=0 \tag{14}
$$

Intermediate-input aggregation and export demand are equations (16)-(17), p. 627:

$$
\text{X}_{j,t}=\left(\int_0^1\text{X}_{j,t}(g)^{\frac{\sigma-1}{\sigma}}dg\right)^{\frac{\sigma}{\sigma-1}} \tag{16}
$$

$$
\text{Y}^{g}_{ji,t}(\omega)=\frac{\gamma^{g}_{ji}}{|\Omega^{g}_{j}|}\left(\frac{\text{P}^{g}_{ji,t}(\omega)}{\text{P}_{i,t}(g)}\right)^{-\eta_g}\left(\frac{\text{P}_{i,t}(g)}{\text{P}_{i,t}}\right)^{-\sigma}(\text{C}_{i,t}+\text{X}_{i,t}) \tag{17}
$$

Firm profits and producer-currency reset pricing are equations (18)-(20),
pp. 627-628:

$$
\Pi_{j,t}(\omega)=\sum_i\left(\text{P}^{g,j}_{ji,t}(\omega)\text{Y}^{g}_{ji,t}(\omega)-\text{MC}^{g}_{j,t}(\omega)\text{Y}^{g}_{ji,t}(\omega)\right) \tag{18}
$$

$$
\Pi^{\$}_{j,t}(\omega)=\sum_i\left(\text{P}^{g,\$}_{ji,t}(\omega)\text{Y}^{g}_{ji,t}(\omega)-\frac{\text{MC}^{g}_{j,t}(\omega)\text{Y}^{g}_{ji,t}(\omega)}{\mathcal{E}_{\$,j,t}}\right) \tag{19}
$$

$$
\mathbb{E}_t\sum_{s=0}^{\infty}(\beta\delta_p^g)^s\frac{\text{C}_{j,t}^{\sigma_c}\text{P}_{j,t}}{\text{C}_{j,t+s}^{\sigma_c}\text{P}_{j,t+s}}\text{Y}^{g}_{ji,t+s}(\omega)\left[\bar{\text{P}}^{g,j}_{ji,t}(\omega)-\frac{\eta_g}{\eta_g-1}\text{MC}^{g}_{j,t+s}(\omega)\right]=0 \tag{20}
$$

The marginal-cost conditions for labor and intermediate inputs are (22)-(23),
p. 629:

$$
\text{MC}^{g}_{j,t}(\omega)=\frac{\text{W}_{j,t}\text{L}_{j,t}(\omega)}{(1-\alpha)\text{Y}^{g}_{j,t}(\omega)} \tag{22}
$$

$$
\text{MC}^{g}_{j,t}(\omega)=\frac{\text{P}_{j,t}\text{X}_{j,t}(\omega)}{\alpha\text{Y}^{g}_{j,t}(\omega)} \tag{23}
$$

Market clearing and aggregate trade/output definitions are equations (26)-(31),
pp. 629-630:

$$
\text{Y}^{g}_{j,t}(\omega)=\sum_i\text{Y}^{g}_{ji,t}(\omega) \tag{26}
$$

$$
\text{L}_{j,t}=\int_0^1\text{L}^{g}_{j,t}dg \tag{27}
$$

$$
\text{X}_{j,t}=\int_0^1\text{X}^{g}_{j,t}dg \tag{28}
$$

$$
\text{NTB}_{ji,t}=\int_0^1\left[\int_{\omega\in\Omega_j^g}\text{P}^{g}_{ji,t}(\omega)\text{Y}^{g}_{ji,t}(\omega)d\omega-\int_{\omega\in\Omega_i^g}\text{P}^{g}_{ij,t}(\omega)\text{Y}^{g}_{ij,t}(\omega)d\omega\right]dg \tag{29}
$$

$$
\text{NTB}_{j,t}\equiv\sum_{i\ne j}\text{NTB}_{ji,t} \tag{30}
$$

$$
\text{Y}_{j,t}=\frac{\text{P}_{j,t}\text{C}_{j,t}+\text{NTB}_{j,t}}{\text{P}_{j,t}} \tag{31}
$$

The export and import price indices are defined in equations (32)-(33), p. 630;
the paper then deflates nominal flows by these indices to obtain real trade
quantities:

$$
\text{P}_{ji,t}\equiv\int_0^1\left(\frac{\gamma^g_{ji}}{|\Omega_j^g|\int_0^1\gamma^g_{ji}dg}\int_{\omega\in\Omega_j^g}\text{P}^{g}_{ji,t}(\omega)d\omega\right)dg \tag{32}
$$

$$
\text{P}_{ij,t}\equiv\int_0^1\left(\frac{\gamma^g_{ij}}{|\Omega_i^g|\int_0^1\gamma^g_{ij}dg}\int_{\omega\in\Omega_i^g}\text{P}^{g}_{ij,t}(\omega)d\omega\right)dg \tag{33}
$$

The calibrated small-open-economy demand relationships are equations (34)-(36),
pp. 632-633:

$$
\text{C}_{H,t}=\left[\kappa_M\text{C}_{H,t}(g_M)^{\frac{\sigma-1}{\sigma}}+(1-\kappa_M)\text{C}_{N,t}(g_N)^{\frac{\sigma-1}{\sigma}}\right]^{\frac{\sigma}{\sigma-1}} \tag{34}
$$

$$
\text{Y}^{g_N}_{H,t}(\omega)=\text{Y}^{g_N}_{HH,t}(\omega)=\frac{1}{|\Omega^{g_N}_{H}|}\left(\frac{\text{P}^{g_N}_{HH,t}(\omega)}{\text{P}_{H,t}}\right)^{-\sigma}(\text{C}_{H,t}+\text{X}_{H,t}) \tag{35}
$$

$$
\text{Y}^{g_H}_{HU,t}(\omega)\approx\frac{1}{|\Omega^{g_H}_{H}|}\left(\frac{\text{P}^{\$,g_H}_{HU,t}(\omega)}{\text{P}^{\$}_{U,t}(g_H)}\right)^{-\eta_{g_H}}\gamma^{g_H}_{HU}(\text{C}_{U,t}+\text{X}_{U,t}) \tag{36}
$$

## Method

**Model calibration and simulation.** The model is linearized around a deterministic steady state and simulated using impulse response functions (Figure VI, p. 637). The baseline calibration for households and policy follows Gopinath et al. (2020): cross-product elasticity $$\sigma = 2$$, labor demand elasticity $$\vartheta = 4$$, Calvo price rigidity $$\delta_p = 0.75$$ (four-quarter mean duration), Calvo wage rigidity $$\delta_w = 0.75$$ (Table II, pp. 634-635). The key departures for the homogeneous export sector: fully flexible prices ($$\delta^{g_H}_p = 0$$), cross-variety elasticity $$\eta^{g_H} = 17$$ (from Broda and Weinstein (2006) for crude oil 1972-1988), and decreasing returns $$v_{g_H} = 0.85$$ (calibrated from the share of structures in Canadian mining value-added). Country-specific calibrations for Canada and Chile are in Table IV (p. 654).

The method builds on `local-projections` (Jordà 2005) for the empirical tests and `panel-regression` for the motivating cross-country facts, with the proposed `nk-soe-dsge` framework as the structural basis.

**Monetary policy shock identification.** Because the exchange rate is endogenous, the empirical strategy uses monetary policy shocks identified by purging the interest rate of its response to current macroeconomic conditions. Shocks are obtained as residuals $$\hat{\epsilon}_{i,t}$$ from a forward-looking interest rate rule (equation 38, p. 650):

Before the empirical shock construction, the paper checks identification in a
simulated-data exercise using the one-lag hybrid VAR (equation 37, p. 647):

$$
\text{X}_t=\text{c}+\text{B}\text{X}_{t-1}+\epsilon_t,\qquad \text{X}_t=[\zeta^M_t,\mathcal{E}_{\$,H,t},\text{Y}^{g_{H2}}_t,\text{Y}^{g_{H1}}_t,\text{Y}_t]' \tag{37}
$$

The VAR uses one lag, orders the simulated monetary shock first for recursive
identification, and is estimated on 1,000 simulated periods. Homogeneous-export
responses are imprecise, with zero inside the 68% intervals (Figure IX, p. 648).

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

Country fixed effects are included at each horizon. Figure X reports 68% confidence
intervals; the main-text equation and caption do not specify a clustering or
other standard-error formula. The monthly horizon and 11-month export peak are
reported in the text (p. 652).

**Section V.C: Country VARs for Canada and Chile (equation 40, p. 655).** For each economy, a hybrid VAR with six lags (Canada) or four lags (Chile) is estimated:

$$
\mathbf{X}_t = \mathbf{c} + \delta t + B(\mathbf{L}) \mathbf{X}_{t-1} + C(\mathbf{L}) \mathbf{W}_{t-1} + \boldsymbol{\epsilon}_t, \tag{40}
$$

where $$\mathbf{X}_t$$ contains the monetary policy shock series (ordered first for recursive identification), exchange rate, CPI, GDP, and sectoral exports; $$\mathbf{W}_t$$ includes the U.S. dollar price of Canadian commodities (Canada only). Identification is recursive (Cholesky), with the cumulative monetary shock ordered first. For Canada: Champagne and Sekkel (2018) narrative shocks, monthly, 1981-2015. For Chile: Brandao-Marques et al. (2021) shocks, monthly, 2003-2017. Model impulse responses (solid red lines in Figures XI-XII) are scaled to match the average estimated exchange rate response over the first six months.

The figure captions report 68% confidence intervals. The main-text specification
does not state a separate standard-error or bootstrap procedure.

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

Sample: panel LP covers monthly data for 37 countries (1990-2019; response horizons reported in months); country VARs use monthly data (Canada: January 1981-October 2015; Chile: April 2003-July 2017); invoicing regression covers 1,173 country-year observations across 101 countries.

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
