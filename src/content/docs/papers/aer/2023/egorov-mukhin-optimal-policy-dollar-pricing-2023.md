---
title: "Optimal Policy under Dollar Pricing: Egorov & Mukhin (2023)"
description: >-
  Distilled: In a generalized sticky-price open economy model with dollar currency pricing,
  targeting domestic inflation is robustly optimal for non-US central banks, capital controls
  cannot improve welfare unilaterally, and US monetary policy deviates from domestic price
  stabilization to manipulate global demand. American Economic Review 113(7) 2023, paywalled.
  Eight core results with source locators, model equations (open-economy DGE with DCP), and
  the planner Lagrangian method.
sidebar:
  label: Egorov-Mukhin 2023
  order: 1
tags: [paper-summary, macro, monetary-policy, exchange-rates, international-finance,
       peer-reviewed, unreplicated]
paper:
  authors: Konstantin Egorov, Dmitry Mukhin
  authorList:
    - { family: Egorov, given: Konstantin, affiliation: "Leibniz Institute for Financial Research SAFE" }
    - { family: Mukhin, given: Dmitry, orcid: "0000-0002-5669-0771", affiliation: "London School of Economics and Political Science" }
  year: 2023
  venue: "American Economic Review 113(7), July 2023, 1783-1824"
  venueShort: AER 2023
  doi: 10.1257/aer.20200636
  jel:
    codes: [E31, E52, F14, F31, F38, F41]
    assignedBy: authors
    date: 2023-07-01
  topics: ["Monetary Policy and Economic Impact", "Economic theories and models", "Global Financial Crisis and Policies"]
  dataAccess: public
  outcome:
    - optimal monetary policy for non-US open economies under dollar pricing
    - welfare loss from business cycle shocks under DCP vs PCP
    - optimal US monetary policy rule under dollar dominance
    - role of capital controls under dollar pricing
  outcomeClass: [macro-aggregates, social-welfare]
  license: "paywalled (AEA; no open license found in Crossref 2026-06-25)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 44
  methods:
    role: theory
    family: structural
    buildsFrom: [dynamic-general-equilibrium]
  contributionType: [new-theory]
  scope:
    region: global
  relatesTo:
    - { cite: "Gali and Monacelli (2005)", relation: builds-on, note: "the baseline sticky-price small open economy model augmented here with DCP in the export sector" }
    - { cite: "Farhi and Werning (2016)", doi: '10.3982/ecta11883', relation: contradicts, note: "Proposition 2 shows capital controls are exactly zero under DCP because the external wedge in exports is constrained efficient; their Proposition 3 implies generically nonzero controls when monetary policy cannot achieve first-best" }
    - { cite: "Corsetti, Dedola, and Leduc (2020)", relation: extends, note: "they derive inflation targeting optimality under DCP in knife-edge cases (fully sticky prices or log-linear preferences); this paper extends the result to general preferences and technologies" }
    - { cite: "Gopinath (2016)", relation: builds-on, note: "empirical evidence that most international prices are sticky in dollars motivates the DCP assumption" }
  openQuestions:
    - "Results abstract from financial stability motives, markup shocks, and the zero lower bound, which are empirically relevant in practice (Section II.B, p. 1800)."
    - "Extending to asymmetric firms with idiosyncratic shocks and network linkages is left for future research (Section II.B, p. 1801)."
    - "Whether the welfare ranking of the United States versus other economies under DCP is positive or negative depends on parameter values and cannot be signed analytically (Corollary 1, p. 1811)."
    - "Capital controls under DCP are also restricted by Assumption 2, which excludes local currency debt; relaxing this channel would alter the capital-controls result (pp. 1794-1795)."
  findings:
    - { ref: R7, outcome: "welfare loss from local financial shocks", metric: pp-effect, value: "non-US optimal = 2.92%, output gap targeting = 3.40% consumption equivalents", direction: negative, vsBenchmark: "optimal policy saves 0.48 ppts vs naive output gap targeting (Table 1, p. 1819)" }
    - { ref: R8, outcome: "welfare under DCP vs PCP benchmark", metric: pp-effect, value: "US gains 0.34 ppts (2.59% vs 2.93%); non-US loses 0.12 ppts (3.05% vs 2.93%) consumption equivalents", direction: mixed, vsBenchmark: "PCP benchmark (Table 1, col 5, p. 1820)" }
  resultType: new-finding
  replicationCode:
    url: https://doi.org/10.3886/E184741V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 1783-1824, all sections including proofs and calibration). Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 rows confirmed. Fixed: JEL codes corrected to authors' own [E31, E52, F14, F31, F38, F41] (wiki had only 3); removed mechanisms: [market-power] (market power is a counterexample in II.B, not the invoked channel; no clean registry match for the DCP-external-wedge mechanism)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20200636", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license array empty; no open license recorded; AEA journal publication, paywalled" }
  rightsSignalConflict: false
---

**What this is.** The paper's key propositions, model equations, and welfare results, extracted from the source. To replicate or extend, read the original at [doi.org/10.1257/aer.20200636](https://doi.org/10.1257/aer.20200636).

## TL;DR

Egorov and Mukhin (2023) characterize optimal monetary, macroprudential, and trade policies in a general open-economy model where all export and import prices are invoiced in US dollars (dollar currency pricing, DCP). Their central finding is that targeting domestic producer price stability is robustly optimal for non-US central banks, even though this policy cannot implement the first-best allocation. The mechanism is that DCP makes it impossible for monetary policy to close both the local wedge (domestic inefficiency) and the external wedge (export sector inefficiency) simultaneously, but the external wedge is constrained efficient because individual exporters cannot affect aggregate world demand. Capital controls cannot improve welfare unilaterally because they cannot influence this external wedge either. US monetary policy, by contrast, deviates from domestic inflation targeting: the dominance of the dollar gives the Fed leverage over global demand for dollar-invoiced goods and over international asset prices, creating incentives to overstimulate exports and lower borrowing costs. International cooperation improves global welfare but requires the United States to sacrifice domestic objectives, making it not in the self-interest of the United States.

## Core results

Propositions R1-R5 are analytical; R6-R8 are from the numerical simulation (Section IV). Magnitudes from Table 1 are consumption-equivalent welfare losses in percent.

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | **Proposition 1 (Non-US Monetary Policy):** Targeting domestic producer prices is robustly optimal for any non-US economy under DCP and is time consistent | §II.A, Prop. 1, p. 1795; eq. (11) | pi\_iit = 1 for all parameter values, asset-market structures, preference forms, and shock distributions |
| R2 | **Proposition 2 (Capital Controls):** Given the optimal monetary policy, private risk sharing is constrained efficient and no capital controls are used by the planner | §II.D, Prop. 2, p. 1806 | tau\^h\_it = 0 for all internationally traded assets; holds under general DCP even though monetary policy cannot implement the first-best |
| R3 | **Proposition 3 (Trade Policy):** A revenue-neutral mix of monetary policy, export tax, and exporter subsidy implements the first-best allocation | §II.E, Prop. 3, p. 1807 | Monetary policy targets domestic prices; export tax tau\^E\_it stabilizes destination prices in domestic currency (tau\^E\_it times E\_it = 1); subsidy tau\^R\_it stabilizes exporters' dollar prices |
| R4 | **Proposition 4 (US Policy Rule):** The optimal US monetary policy deviates from inflation targeting and involves three motives: external wedge, export price adjustment costs, and asset-price manipulation | §III.A, Prop. 4, pp. 1809-1810; eq. (12) | US rule (eq. 12) has three terms: the zero-markup external wedge, a cost-of-price-adjustment term, and a current-account weighted asset-price elasticity term; the policy is not time consistent |
| R5 | **Proposition 5 (Cooperative Policy):** Under cooperation, US monetary policy stabilizes the global external wedge; non-US monetary policy continues to target domestic prices; capital controls are generically nonzero | §III.B, Prop. 5, pp. 1812-1813; eq. (13) | US targets the global demand-weighted external wedge equal to zero; cooperative capital controls fight the aggregate demand externality that is absent in the noncooperative case |
| R6 | **Approximation quality of inflation targeting:** Under the optimal non-US policy, inflation volatility is 1-3 orders of magnitude smaller than output gap volatility, confirming inflation targeting is a near-exact approximation even when export prices are inefficient | Figure 2, p. 1816 | Ratio std(pi\_iit)/std(y\_iit) ranges from 0.001 to 0.04 across openness (gamma) and demand-elasticity (epsilon) values; the ratio converges to zero as gamma approaches 0 |
| R7 | **Welfare cost comparison (non-US):** The optimal non-US policy reduces total welfare loss to 3.05% vs. 5.18% for output gap targeting; local financial shocks account for most of the difference (2.92% vs. 3.40%) | Table 1, p. 1819 | Non-US optimal (col 1): 3.05% total; output gap targeting (col 2): 5.18% total; financial-shock component: 2.92% vs. 3.40% consumption equivalents |
| R8 | **DCP welfare asymmetry (US gains, non-US loses relative to PCP):** Under optimal policies, the United States gains 0.34 ppts and other economies lose 0.12 ppts in consumption equivalents relative to the PCP benchmark | Table 1 discussion, p. 1820 | US: 2.59% loss (DCP optimal) vs. 2.93% (PCP), net gain = 0.34 ppts; non-US: 3.05% (DCP optimal) vs. 2.93% (PCP), net loss = 0.12 ppts |

**Overall (paper's conclusion).** Domestic inflation targeting is robustly optimal for non-US central banks under DCP, independently of asset-market structure, preference parameters, and shock distribution, and the policy is time consistent. Macroprudential policies cannot help unilaterally but become useful under international cooperation. The United States benefits from dollar dominance in trade, but its optimal policy deviates from domestic stabilization to extract global rents, and international cooperation to improve global welfare is not in its self-interest.

## Theory / model

The baseline model augments the canonical sticky-price small open economy of Gali and Monacelli (2005) with a dominant-currency international price system: all export and import prices are sticky in dollars, while domestic prices are set in local currency (§I, p. 1788). Gopinath (2016) provides the empirical motivation for this assumption, showing it is a good first-order approximation to the actual international price system.

**World structure.** Time is discrete, infinite horizon. The world consists of a continuum of symmetric small open economies $$ i \in [0,1] $$, with the United States indexed by $$ i = 0 $$. Each country is populated by identical households that consume domestic goods $$ C_{iit} $$, foreign goods $$ C^*_{it} $$, and supply labor $$ L_{it} $$. Households maximize expected lifetime utility (p. 1788):

$$
E\sum_{t=0}^{\infty} \beta^t U(C_{iit}, C^*_{it}, L_{it}, \xi_{it}),
$$

where $$ \xi_{it} $$ captures intratemporal (labor supply) and intertemporal (discount) shocks. The import bundle aggregates products from all country-pairs and varieties (p. 1788):

$$
C^*_{it} = \left(\int C_{jit}^{\frac{\varepsilon-1}{\varepsilon}}\,dj\right)^{\frac{\varepsilon}{\varepsilon-1}}, \qquad C_{jit} = \left[\int C_{jit}(\omega)^{\frac{\varepsilon-1}{\varepsilon}}\,d\omega\right]^{\frac{\varepsilon}{\varepsilon-1}},
$$

where $$ \varepsilon > 1 $$ is the micro elasticity of substitution between varieties and differs from the macro elasticity between home and foreign goods.

**Household optimality conditions.** The static FOCs for labor supply and relative demand (eqs. 1-2, p. 1789) are:

$$
-\frac{U_{L_{it}}}{U_{C_{iit}}} = \frac{W_{it}}{P_{iit}}, \tag{1}
$$

$$
\frac{U_{C^*_{it}}}{U_{C_{iit}}} = \frac{\mathcal{E}_{it} P^*_t}{P_{iit}}, \tag{2}
$$

where $$ P_{iit} $$ is the domestic price index, $$ W_{it} $$ the nominal wage, $$ \mathcal{E}_{it} $$ the nominal exchange rate (local currency per dollar), and $$ P^*_t $$ the import price index in dollars (common across all countries under DCP). The Euler equation for nominal bonds (eq. 3, p. 1789) is:

$$
E_t \Theta_{it,t+1} R_{it} = 1, \quad \text{where} \quad \Theta_{it,t+\tau} \equiv \beta^\tau \frac{U_{C_{iit+\tau}}}{U_{C_{iit}}} \frac{P_{iit}}{P_{iit+\tau}}, \tag{3}
$$

and no-arbitrage conditions for internationally traded assets (eq. 4, p. 1789) generalize the standard Euler equation to all traded securities.

**Firms.** Monopolistic competitors in country $$ i $$ produce variety $$ \omega $$ with production function $$ Y_{it} = A_{it} N_{it} $$. Firms face price-adjustment costs $$ \Omega(\cdot) $$ satisfying $$ \Omega(\cdot) \geq 0 $$, $$ \Omega(1) = 0 $$. Domestic firms set prices in local currency to maximize profits net of adjustment costs (eq. 5, p. 1790). Exporters set a single dollar price for all foreign markets (eq. 6, p. 1790-1791), minimizing the costs of adjusting their terms of trade $$ S_{it} \equiv P^*_{it}/P^*_t $$ relative to the dollar import price index.

**Market clearing and budget constraint.** The resource constraint (eq. 7, p. 1790) requires that labor be allocated across domestic production, exports, and price adjustment:

$$
A_{it} L_{it} = C_{iit} + h(S_{it}) C^*_t + A_{it}\!\left[\Omega(\pi_{iit}) + \Omega^*\!\!\left(\frac{S_{it}}{S_{it-1}} \pi^*_t\right)\right], \tag{7}
$$

where $$ h(\cdot) $$ is the demand function for country $$ i $$ exports, $$ \pi_{iit} = P_{iit}/P_{iit-1} $$ is the domestic inflation index, and $$ \pi^*_t = P^*_t/P^*_{t-1} $$ is the global export-price inflation index. The budget constraint (eq. 8, p. 1790) relates net exports to changes in the net foreign asset position, including "valuation effects" from exchange rate movements.

**The two key wedges.** In a static setup, the first-best requires closing two distortions (p. 1796):

$$
\bar{\tau}_{iit} \equiv 1 + \frac{1}{A_{it}} \frac{U_{L_{it}}}{U_{C_{iit}}} = 0 \quad (\text{local wedge}),
$$

$$
\bar{\tau}^*_{it} \equiv 1 + \frac{\varepsilon}{\varepsilon-1} \frac{1}{A_{it} S_{it}} \frac{U_{L_{it}}}{U_{C^*_{it}}} = 0 \quad (\text{external wedge}).
$$

The local wedge measures inefficiency in the trade-off between domestic consumption and leisure; the external wedge measures the inefficiency in the trade-off between leisure and foreign consumption via exports. Under flexible prices and PCP (producer currency pricing), both wedges can be closed with a single monetary instrument. Under DCP they cannot, because domestic prices and export dollar prices respond to different price indices.

The central insight (pp. 1797-1800) is that DCP makes export prices **constrained efficient**: because each small open economy's exports constitute a zero measure of global demand $$ C^*_t $$, individual adjustments in $$ S_{it} $$ do not affect the aggregate import price index. Hence, the social and private benefits of changing export prices coincide, the external wedge is beyond monetary control, and the planner focuses exclusively on closing the local wedge by targeting domestic price stability. This argument holds generically, even when export prices respond endogenously to monetary policy (via the Calvo or Rotemberg mechanism), because the adjusting exporters' prices are still constrained efficient at the private margin. Corsetti, Dedola, and Leduc (2020) established inflation targeting optimality in knife-edge cases (fully sticky export prices, or log-linear preferences); this paper proves it holds generically for arbitrary preferences, technologies, asset markets, and shock distributions. A further implication (Proposition 2) is that capital controls cannot improve welfare unilaterally; this contrasts with the general lesson from Farhi and Werning (2016) that macroprudential interventions are useful whenever monetary policy falls short of first-best, and the paper clarifies why the DCP external-wedge channel nullifies that general argument.

**Equilibrium and game structure.** The paper defines equilibrium as a subgame-perfect Nash equilibrium in which the United States moves first as a Stackelberg leader (internalizing effects on other economies) and non-US economies best-respond taking all foreign variables as given (Definition, p. 1792). Lemma 2 (p. 1792) establishes that the equilibrium outcome is the same under simultaneous play and under non-US discretionary policy, making the results independent of timing assumptions.

## Method

The optimal policy is derived using the **primal approach**: the planner chooses allocations subject to implementability conditions (Lemma 1, p. 1792) rather than choosing prices or interest rates directly. This approach solves the planner's problem without relying on second-order approximations, allowing a full nonlinear stochastic characterization.

**Proof of Proposition 1 (pp. 1799-1800).** The proof considers a relaxed version of the non-US planner's problem that drops the price-setting constraints and retains only market clearing (eq. 7) and the budget constraint (eq. 8). The Lagrangian is:

$$
\mathcal{L} = E\!\sum_{t=0}^{\infty} \beta^t \left\{ U(C_{iit}, C^*_{it}, L_{it}, \xi_{it}) + \lambda_{it}\!\left[A_{it}L_{it} - C_{iit} - A_{it}\Omega(\pi_{iit})\right] + \mu_{it}(\psi_{it} - C^*_{it}) + [\ldots] \right\},
$$

where $$ \lambda_{it} $$ is the multiplier on market clearing for domestic goods and $$ \mu_{it} $$ on the balance-of-payments constraint. Taking FOCs with respect to $$ C_{iit} $$, $$ C^*_{it} $$, and $$ L_{it} $$ yields multiplier values $$ \lambda_{it} = U_{C_{iit}} $$, $$ \mu_{it} = U_{C^*_{it}} $$, and the efficient labor condition $$ -U_{L_{it}}/U_{C_{iit}} = A_{it} $$. The FOC with respect to $$ \pi_{iit} $$ (the domestic inflation rate) implies zero domestic price-adjustment cost, hence $$ \pi_{iit} = 1 $$ (zero inflation). The FOC with respect to $$ S_{it} $$ (the terms of trade) coincides with the private export price-setting condition (eq. 6), confirming the price-setting constraint is not binding. Thus all constraints of the original planner's problem are satisfied, and $$ \pi_{iit} = 1 $$ is globally optimal. The resulting allocation is generically inefficient because $$ \Omega^*(\cdot) > 0 $$ (non-zero export adjustment costs remain), but monetary policy can do no better.

**Proposition 4 (US Policy Rule, eq. 12, pp. 1809-1810).** The US planner maximizes welfare over all prices and quantities in the world economy, taking non-US best-response as given. Assuming flexible domestic prices in the US (to isolate the new DCP motives), the optimal US policy rule is:

$$
S_{it} h(S_{it}) C^*_t \,\tilde{\tau}^*_{it} - E_t \sum_{k=0}^{\infty} \Theta^*_{it,t+k}\!\left(\frac{W_{it+k}}{P^*_{t+k}} \Omega^{*\prime}_{it+k}\right)\!\left(\pi^*_{it+k} \frac{\partial \log \pi^*_{t+k}}{\partial \log C^*_t}\right)
$$

$$
- E_t \sum_{k=0}^{\infty} \Theta^*_{it,t+k}\!\left(\sum_h \omega^h_{it}\frac{\partial \log \mathcal{Q}^h_{t+k}}{\partial \log C^*_t}\right)\! CA_{it+k} = 0, \tag{12}
$$

where $$ \tilde{\tau}^*_{it} \equiv 1 + (1/A_{it} S_{it})(U_{L_{it}}/U_{C^*_{it}}) $$ is the zero-markup external wedge, $$ CA_{it} \equiv \sum_h \mathcal{Q}^h_t (B^h_{it+1} - B^h_{it}) $$ is the US current account, $$ \Theta^*_{it,t+k} \equiv \beta^k (U_{C^*_{it+k}}/U_{C^*_{it}}) $$ is the real stochastic discount factor, and $$ \omega^h_{it} $$ are asset-portfolio weights summing to one (p. 1809). The three terms capture: (i) the net benefit of stimulating exports by closing the external wedge; (ii) the cost of export price adjustment; and (iii) the effect of US monetary policy on international asset prices, which the US exploits to raise foreign asset returns when running a current-account deficit.

**Proposition 5 (Cooperative Policy, eq. 13, pp. 1812-1813).** The global planner's problem adds country-specific demand shifters $$ \varpi_{jit} $$ within import baskets. US monetary policy is used to target a weighted average of external wedges across all countries:

$$
\int v_{it} \frac{U_{C^*_{it}}}{\mathcal{P}^*_{it}} \tilde{\tau}^*_{it}\,di = 0, \tag{13}
$$

where $$ v_{it} $$ is an invariant measure reflecting what fraction of an additional dollar printed by the United States is spent on exports of country $$ i $$. This rule differs from the noncooperative US case: under cooperation, the United States targets the global external wedge rather than extracting rents from the rest of the world.

**Numerical solution (Section IV, p. 1814).** The calibrated model uses the CRRA-CES utility function:

$$
U(C_{iit}, C^*_{it}, L_{it}) = \frac{C_{it}^{1-\sigma}-1}{1-\sigma} - \frac{L_{it}^{1+\phi}}{1+\phi},
\quad C_{it} = \left[(1-\gamma)^{\frac{1}{\theta}} C_{iit}^{\frac{\theta-1}{\theta}} + \gamma^{\frac{1}{\theta}} C^{*\frac{\theta-1}{\theta}}_{it}\right]^{\frac{\theta}{\theta-1}},
$$

with Cobb-Douglas production $$ Y_{it} = A_{it} N^{1-\alpha}_{it} X^\alpha_{it} $$ where $$ X_{it} $$ is intermediate inputs. The model is log-linearized around the symmetric deterministic steady state and solved using standard perturbation methods; welfare losses are computed via second-order approximations of the value function.

## Empirical specifications

Section IV (pp. 1814-1819) calibrates and simulates the model. One period is one quarter.

**Parameter values (p. 1815):**
- Preferences: $$ \beta = 0.99 $$, $$ \sigma = 2 $$ (inverse EIS), $$ \phi = 2 $$ (inverse Frisch elasticity)
- Technology: $$ \alpha = 0.5 $$ (intermediate-goods share in production)
- Trade elasticities: $$ \theta = 1.5 $$ (macro), $$ \eta = 4 $$ (bilateral import), $$ \varepsilon = 11 $$ (variety, implying a 10% markup)
- Openness: $$ \gamma = 0.15 $$ (import-to-GDP ratio 0.3), $$ n = 0.2 $$ (US share in the world economy)
- Shock processes: AR(1) with persistence $$ \rho = 0.97 $$ for both productivity $$ a_{it} $$ and wealth shocks $$ \psi_{it} $$
- Price adjustment: quadratic Rotemberg costs calibrated to match the slope of the New Keynesian Phillips curve for a Calvo model with average price duration of three quarters
- Calibration targets: annualized std($$ \Delta e_{it} $$) = 10% (bilateral exchange rate), std($$ \Delta c_{it} $$) = 2% (US consumption), corr($$ \Delta c_{it}, \Delta c_{jt} $$) = 0.3

**Impulse responses.** Figure 1 (p. 1816) shows that responses under the optimal policy and under inflation targeting are nearly indistinguishable for non-US economies following a local financial shock $$ \psi_{it} $$. Figure 3 (p. 1817) shows the non-US policy response to a US financial shock under four invoicing structures (PCP; DCP in imports only; DCP in exports only; full DCP): whether non-US interest rates rise or fall depends on the relative strength of the import and export channels. Countries with a stronger import channel (e.g., emerging economies importing sticky-price manufactures) tighten monetary policy when the dollar appreciates; countries with a stronger export channel ease policy. Figure 4 (p. 1818) shows US impulse responses, confirming that the optimal US policy deviates from inflation targeting by raising interest rates sharply to generate a global recession and attract savings from the rest of the world following a US wealth shock.

**Welfare decomposition (Table 1, p. 1819).** Columns: (1) non-US optimal; (2) non-US output gap targeting; (3) US optimal; (4) US targeting domestic inflation; (5) PCP benchmark. Rows: local and foreign productivity shocks $$ a_{it} $$, local and foreign financial shocks $$ \psi_{it} $$, and global shocks. Welfare costs of productivity shocks are small across all policies and similar to the PCP benchmark. Financial shocks dominate and vary substantially: the optimal non-US response to local financial shocks costs 2.92% vs. 3.40% under output gap targeting; and the gains from the optimal policy over naive targeting equal 2.13 percentage points in total welfare (3.05% vs. 5.18%).

## Datasets used

This is a theoretical paper with a calibrated numerical illustration. No specific empirical dataset is used; the model is calibrated to standard macroeconomic moments drawn from the prior literature.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Standard macro calibration moments (exchange rate and consumption volatility from existing empirical literature) | Calibrate shock volatilities and cross-country correlation targets (std = 10%, 2%; corr = 0.3) | No page yet |

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20200636) if you are: (i) characterizing optimal monetary policy in an open economy with DCP and need the complete proofs (the online appendix contains formal derivations and extensions for sticky wages, market power, endogenous currency choice, and intermediate goods); (ii) evaluating the role of capital controls and trade policy under dollar pricing (Propositions 2-3 and Sections II.D-E); (iii) studying international spillovers and the gains from cooperation (Section III.B and Proposition 5 with the cooperative capital-controls formula eq. 14); or (iv) running the calibrated model (replication data and code at [doi.org/10.3886/E184741V1](https://doi.org/10.3886/E184741V1)).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. Published by the American Economic Association. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The AER is paywalled; this page contains extracted text and equations only (extract-only redistribution).

> Egorov, Konstantin, and Dmitry Mukhin. "Optimal Policy under Dollar Pricing." *American Economic Review* 113, no. 7 (July 2023): 1783-1824. DOI: 10.1257/aer.20200636.
