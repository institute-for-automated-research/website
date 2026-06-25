---
title: "Constrained-Efficient Capital Reallocation: Lanteri & Rampini (2023)"
description: >-
  Distilled: In a heterogeneous-firm general equilibrium model with collateral
  constraints, the competitive equilibrium price of used capital is inefficiently
  high because distributive pecuniary externalities dominate collateral externalities
  by a factor of roughly 2.3 quantitatively, providing a new rationale for
  new-investment subsidies. American Economic Review 2023, paywalled. Six core
  results with source locators, the full theoretical model with equations, and
  calibrated quantitative welfare analysis.
sidebar:
  label: Lanteri-Rampini 2023
  order: 1
tags: [paper-summary, capital-reallocation, financial-frictions, pecuniary-externalities,
       investment, collateral-constraints, structural, peer-reviewed, unreplicated]
paper:
  authors: Andrea Lanteri and Adriano A. Rampini
  authorList:
    - { family: Lanteri, given: Andrea, orcid: "0000-0002-1292-3617", affiliation: Duke University }
    - { family: Rampini, given: "Adriano A.", affiliation: Duke University }
  year: 2023
  venue: American Economic Review 113(2), February 2023, 354–395
  venueShort: AER 2023
  doi: 10.1257/aer.20210902
  jel:
    codes: [D21, D24, D25, D62, E22, G31, G32]
    assignedBy: paper
    date: 2026-06-25
  topics: ['Economic theories and models', 'Monetary Policy and Economic Impact', 'Financial Markets and Investment Strategies']
  dataAccess: public
  outcome:
    - price of old/used capital in competitive equilibrium
    - aggregate output and consumption relative to first best
    - welfare gain from constrained-efficient capital reallocation
  outcomeClass: [firm-real-outcomes, asset-prices]
  license: paywalled (no CC licence found in Crossref metadata; AER standard subscription access)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (AEA site, 2026-06-25)
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 32
  methods:
    role: applies-method
    family: structural
    buildsFrom: [dynamic-general-equilibrium, overlapping-generations]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [collateral, financial-constraint]
  scope:
    region: US
    assetClass: capital goods (new and used/old investment)
    frequency: annual
    dataType: [accounting]
    granularity: [firm]
  findings:
    - { ref: R1, outcome: constrained efficiency of capital allocation, metric: coefficient, value: "distributive externality > collateral externality (Proposition 2, analytically in stationary competitive equilibrium)", direction: positive, vsBenchmark: collateral externality (focus of prior representative-firm literature) }
    - { ref: R2, outcome: ratio of distributive to collateral externality, metric: coefficient, value: "approximately 2.3x: distributive externality is about 2.3 times the collateral externality in the calibrated stationary equilibrium", direction: positive }
    - { ref: R3, outcome: output and consumption relative to first best in competitive equilibrium, metric: pp-effect, value: "CE output = 89.9% of first best (-10.1 pp); CE consumption = 93.3% of first best (-6.7 pp)", direction: negative, vsBenchmark: first-best frictionless allocation }
    - { ref: R4, outcome: output and consumption recovered by constrained-efficient allocation, metric: pp-effect, value: "constrained-efficient output = 97.3% of first best; output +8% over CE; consumption = 98.3% of first best; consumption +5% over CE", direction: positive, vsBenchmark: competitive equilibrium }
    - { ref: R5, outcome: price of old capital, metric: level, value: "CE price q = 0.553; first-best price = 0.547; constrained-efficient price driven to scrap value = 0.100", direction: positive, vsBenchmark: "CE price is 1.010x first-best price; constrained-efficient plan drives it to scrap value floor" }
    - { ref: R6, outcome: optimal investment subsidy and old-capital tax implementing constrained-efficient allocation, metric: pp-effect, value: "average tau_N = -8.6% (subsidy on new investment); average tau_O = 103.7% (tax on old capital purchases), each rebated lump-sum", direction: mixed }
  resultType: new-finding
  relatesTo:
    - { cite: "Dávila and Korinek (2018)", doi: '10.1093/restud/rdx010', relation: extends, note: "extends their distributive-vs-collateral-externality framework to an infinite-horizon heterogeneous-firm investment model; shows distributive dominates in stationary equilibrium" }
    - { cite: "Rampini (2019)", doi: '10.1257/aer.20170995', relation: builds-on, note: "baseline two-period capital reallocation model with collateral constraints is built on his durable-asset financing framework" }
    - { cite: "Kiyotaki and Moore (1997)", doi: '10.1086/262072', relation: builds-on, note: "collateral constraint (debt limited to fraction of resale value of capital) follows their credit-cycles framework" }
    - { cite: "Rampini and Viswanathan (2010)", relation: builds-on, note: "collateral constraints derived from limited enforcement without exclusion, following their approach" }
    - { cite: "Eisfeldt and Rampini (2006)", doi: '10.1016/j.jmoneco.2005.04.006', relation: cites, note: "empirical motivation: financially constrained firms tend to buy assets in the secondary market" }
    - { cite: "Eisfeldt and Rampini (2007)", doi: '10.1016/j.jmoneco.2007.06.030', relation: cites, note: "empirical evidence that more financially constrained firms tend to acquire older investment goods" }
    - { cite: "Ma, Murfin, and Pratt (2022)", doi: '10.1016/j.jfineco.2021.09.017', relation: cites, note: "empirical evidence on negative correlation between firm age and capital age; used to validate the model calibration" }
  openQuestions:
    - "Efficiency analysis of capital reallocation and pecuniary externalities in response to aggregate macroeconomic shocks, where the sign of distributive externalities may vary over expansions and downturns: explicitly noted as future work (p. 392)."
  replicationCode:
    url: "https://doi.org/10.3886/E180421V1"
    status: available
  rightsSignalConflict: false
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 354-395, AER 113(2)); six results extracted from paywalled source. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: eq. (3) LHS corrected from k^O_{t-1} to k^N_{t-1} (PDF p. 360); JEL codes expanded from [E22,G31,G32] to full author-listed set [D21,D24,D25,D62,E22,G31,G32] (PDF p. 354). All six Core results rows, all equations in Theory/Model and Method sections, and calibration table confirmed against PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210902", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block present; only a VOR PDF link with content-type unspecified; AEA standard paywalled access confirmed" }
---

**What this is.** The paper's core propositions, the full equilibrium model with collateral constraints, and the quantitative calibration: enough to understand what was proved and why, without reading all 42 pages. To replicate or extend the results, read the original at [https://doi.org/10.1257/aer.20210902](https://doi.org/10.1257/aer.20210902) and the replication archive at [https://doi.org/10.3886/E180421V1](https://doi.org/10.3886/E180421V1).

## TL;DR

The paper characterizes constrained efficiency in an equilibrium model of investment and capital reallocation in which heterogeneous firms face collateral constraints. In competitive equilibrium, the resale price of used (old) capital is inefficiently high. Two pecuniary externalities pull in opposite directions: a collateral externality (a higher resale price relaxes borrowing capacity) and a distributive externality (buyers of old capital are more financially constrained than sellers, so a lower price redistributes resources toward higher-marginal-value firms). The main analytical result is that the distributive externality strictly dominates the collateral externality in stationary equilibrium, so that a lower price of old capital raises welfare. In a quantitative model calibrated to US firm dynamics, financial frictions cause an aggregate output loss of about 10 percent and a consumption loss of about 7 percent relative to first best. The constrained-efficient allocation, implemented via an average subsidy of 8.6 percent on new investment combined with an average tax of 103.7 percent on old capital purchases (both rebated lump-sum), recovers roughly 70 percent of these losses. The paper builds on the heterogeneous-firm capital reallocation model of Rampini (2019) and the externality-decomposition framework of Dávila and Korinek (2018).

## Core results

Magnitudes and locators are as reported in the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Distributive externality exceeds collateral externality** in stationary competitive equilibrium: marginal decrease in old-capital price raises welfare | Proposition 2, p. 368 | Sign proved analytically; inequality (24) $$\int k^O \phi_d\, d\pi > \theta \int k^N \lambda\, d\pi$$ holds for $$q > q^{FB}$$ and at $$q = q^{FB}$$ |
| R2 | **Distributive externality is about 2.3 times the collateral externality** quantitatively | p. 387, Figure 4 discussion | Distributive externality $$\approx 2.3\times$$ collateral externality in stationary equilibrium of the calibrated model |
| R3 | **Financial frictions cause ~10% output loss and ~7% consumption loss** relative to first best | Table 2, p. 389 | CE output = 89.9% of first best; CE consumption = 93.3% of first best |
| R4 | **Constrained-efficient allocation recovers ~70% of welfare losses**: +8% output and +5% consumption over CE | Table 2, p. 389 | Constrained-efficient output = 97.3% of first best; consumption = 98.3% of first best |
| R5 | **Old-capital price is inefficiently high in CE**; planner drives it to the scrap value floor | Table 2, p. 389; p. 386 | CE price $$q = 0.553 > q^{FB} = 0.547$$; constrained-efficient price = 0.100 (scrap value floor from calibration) |
| R6 | **Optimal policy: subsidy on new investment + tax on old capital** (both rebated lump-sum) | Table 2, p. 389; Section IIE, p. 371 | Average $$\tau^N = -8.6\%$$ (subsidy); average $$\tau^O = 103.7\%$$ (tax on old capital purchases) |

**Overall (paper's conclusion).** In the class of infinite-horizon heterogeneous-firm models with collateral constraints, the distributive pecuniary externality from the price of used capital dominates the collateral externality. This holds analytically in the stylized model (Propositions 2, 3, 4, 5) and quantitatively in the full model. New investment is welfare-improving beyond the individual incentive because it expands the future supply of old capital, benefiting the most financially constrained firms that are net buyers of old capital.

## Theory / model

### Environment (Section II.A, pp. 359-361)

Time is discrete and infinite ($$t = 0,1,2,\dots$$). A representative household with linear utility maximizes

$$\sum_{t=0}^{\infty} \beta^t C_t \tag{1}$$

where $$\beta \in (0,1)$$ is the discount factor and $$C_t$$ is aggregate consumption. Overlapping generations of firms are born each period with a continuum of measure one. Each firm lives two dates: it invests when young and produces when old. New capital $$k^N$$ has two productive periods (depreciates to become old capital); old capital $$k^O$$ has one residual productive period. Total capital $$k = k^N + k^O$$; the production function satisfies $$f(0) = 0$$, $$f_k > 0$$, $$f_{kk} < 0$$.

The aggregate resource constraint equates total output to consumption plus new-capital investment (eq. 2, p. 360):

$$\int f\!\left(k^N_{t-1}(w) + k^O_{t-1}(w)\right) d\pi(w) = C_t + \int k^N_t(w)\, d\pi(w) \tag{2}$$

and the market-clearing condition for old capital (eq. 3, p. 360):

$$\int k^N_{t-1}(w)\, d\pi(w) = \int k^O_t(w)\, d\pi(w) \tag{3}$$

### First-best allocation (Section II.B, p. 360)

In the frictionless benchmark, the representative household allocates capital optimally. Optimal conditions for new and old capital (eqs. 4-5, p. 360):

$$1 = \beta\!\left[f_k(k_t^{FB}) + q_{t+1}^{FB}\right] \tag{4}$$

$$q_t^{FB} = \beta f_k(k_t^{FB}) \tag{5}$$

where $$q_t^{FB}$$ is the shadow value of old capital (its first-best price). In stationary equilibrium, $$q^{FB} = 1/(1+\beta)$$ and all firms produce at the same efficient scale $$k^{FB}$$.

### Competitive equilibrium with collateral constraints (Section II.C, pp. 361-364)

Firms can borrow at the household's discount rate $$R = \beta^{-1}$$, but debt repayments cannot exceed a fraction $$\theta \in [0,1)$$ of the future resale value of new capital. Old capital has no future resale value, so it cannot be pledged. Firms can also issue equity at convex cost $$\phi(-d)$$ ($$\phi_d \geq 0$$, $$\phi_{dd} \geq 0$$).

Each firm maximizes the present value of dividends net of equity issuance costs (eq. 6, p. 361):

$$\max_{\{d_{0t},\, d_{1,t+1},\, b_t,\, k_t^N,\, k_t^O\}} d_{0t} - \phi(-d_{0t}) + \beta d_{1,t+1} \tag{6}$$

subject to the budget constraint at birth (eq. 7, p. 361):

$$w_{0t} + b_t = d_{0t} + k_t^N + q_t k_t^O \tag{7}$$

the budget constraint when old (eq. 8, p. 361):

$$f(k_t^N + k_t^O) + q_{t+1} k_t^N = d_{1,t+1} + \beta^{-1} b_t \tag{8}$$

and the collateral constraint (eq. 9, p. 361):

$$\theta q_{t+1} k_t^N \geq \beta^{-1} b_t \tag{9}$$

where $$\theta q_{t+1} k_t^N$$ is the maximum amount the firm can borrow against the future resale value of its new capital investment. This collateral structure, in which debt cannot exceed a fraction of the asset's future resale value, follows the framework of Kiyotaki and Moore (1997); its microfoundation from limited enforcement without exclusion is derived in Rampini and Viswanathan (2010). Old capital has no future resale value, so it carries a higher down payment; this induces the most financially constrained firms to prefer old capital.

After combining the first-order conditions (eqs. 10-12), the investment Euler equations can be expressed as user cost conditions (eqs. 15-16, p. 362):

$$u_N(w) \equiv 1 - \beta q + \phi_d(1 - \beta\theta q) = 1 - \beta q + \phi_d \varphi_N \geq \beta f_k(k) \tag{15}$$

$$u_O(w) \equiv q(1 + \phi_d) = q + \phi_d \varphi_O \geq \beta f_k(k) \tag{16}$$

where $$\varphi_N \equiv 1 - \beta\theta q$$ is the down payment per unit of new capital (price minus maximum borrowing against it) and $$\varphi_O \equiv q$$ is the full price of old capital (which cannot be pledged). More financially constrained firms (higher $$\phi_d$$) face a smaller user-cost difference between old and new capital, making old capital relatively cheaper for them.

**Proposition 1** (Stationary Competitive Equilibrium, p. 363): The equilibrium has (i) new capital with a higher down payment than old ($$\varphi_N > \varphi_O$$) but weakly lower user cost for an unconstrained firm; (ii) the price of old capital weakly exceeds first best ($$q \geq q^{FB}$$); and (iii) if $$q > q^{FB}$$, a threshold structure in which the most constrained firms invest only in old capital, intermediate firms invest in both, and unconstrained firms invest only in new capital.

### Constrained efficiency: sign of inefficiency (Section II.D, pp. 365-369)

The planner chooses investment allocations and old-capital prices to maximize aggregate dividends net of equity issuance costs (eq. 18, p. 365), subject to each firm's budget and collateral constraints and the old-capital market-clearing condition (3). The planner internalizes both pecuniary externalities through the market-clearing condition for old capital, which enters with multiplier $$\beta^t \eta_t$$.

The planner's first-order conditions for new and old capital (eqs. 19-20, p. 366) differ from the competitive equilibrium conditions (10-11) by the terms $$\beta^t \eta_{t+1}$$ and $$\eta_t$$:

$$1 + \phi_{d,t} = \beta\!\left[f_k(k_t) + q_{t+1}\right] + \beta\theta\lambda_t q_{t+1} + \underline{\nu}^N_t + \beta\eta_{t+1} \tag{19}$$

$$q_t(1 + \phi_{d,t}) + \eta_t = \beta f_k(k_t) + \underline{\nu}^O_t \tag{20}$$

The multiplier $$\eta_t$$ on the market-clearing condition (3) measures the shadow value of increasing the supply of old capital. The first-order condition for the old-capital price $$q_t$$ (eq. 21, p. 366), simplified using market clearing, becomes (eq. 23, p. 366):

$$\underbrace{\int k^O_t(w)\, \phi_{d,t}(w)\, d\pi(w)}_{\text{aggregate distributive externality}} = \underbrace{\theta \int k^N_{t-1}(w)\, \lambda_{t-1}(w)\, d\pi(w)}_{\text{aggregate collateral externality}} \tag{23}$$

The left side is the aggregate distributive externality: buyers of old capital (who have high $$\phi_d$$, i.e., high marginal value of net worth) value the expenditure saving from a lower price. The right side is the aggregate collateral externality: firms that purchased new capital last period and face binding collateral constraints value the higher borrowing capacity from a higher price.

**Proposition 2** (Sign of Constrained Inefficiency, p. 368): In stationary competitive equilibrium, the aggregate distributive externality exceeds the aggregate collateral externality:

$$\int k^O(w)\, \phi_d(w)\, d\pi(w) > \theta \int k^N(w)\, \lambda(w)\, d\pi(w) \tag{24}$$

A marginal decrease in the price of old capital induces a positive welfare gain. The proof uses three properties of stationary equilibrium: (a) buyers of old capital are more financially constrained than sellers ($$\phi_d$$ is decreasing in net worth $$w$$); (b) market clearing (eq. 3) implies aggregate purchases of old capital exceed aggregate new-capital purchases with binding constraints; and (c) $$\theta < 1$$, so the collateral externality is scaled down by $$\theta$$.

The same sign result holds under risk-averse entrepreneurs (Proposition 3, p. 374), heterogeneous productivity (Proposition 4, p. 375), and long-lived firms and capital with geometric depreciation (Proposition 5, p. 376).

### Ramsey implementation (Section II.E, pp. 369-371)

In the stylized model, the constrained-efficient old-capital price $$q^*$$ satisfies the optimality condition $$\int k^O \phi_d\, d\pi = \theta \int k^N \lambda\, d\pi$$. Setting $$\phi_d = 0$$ for all firms (all firms unconstrained) and solving, the constrained-efficient price is $$q^* = w_{\min}/k^{FB}$$. The tax rates that implement this as a competitive equilibrium with taxes rebated lump-sum (p. 371):

$$\tau^N = -\beta\eta = -\beta(q^{FB} - q^*), \qquad \tau^O = \frac{\eta}{q^*} = \frac{q^{FB}}{q^*} - 1$$

As $$\eta = \beta f'(k^{FB}) - q^* > 0$$ (old capital is scarce from the planner's perspective), $$\tau^N < 0$$ (a subsidy on new investment) and $$\tau^O > 0$$ (a tax on old capital purchases). Both rates are proportional and rebated lump-sum; the subsidy on new capital increases the future supply of old capital, reducing the old-capital price and benefiting the most constrained firms.

## Method

The analytical results use the Lagrangian formulation of the planner's problem (Appendix, p. 392). The Lagrangian assigns multipliers $$\beta^t \mu_{0t}$$ and $$\beta^{t+1} \mu_{1,t+1}$$ to the young and old budget constraints, $$\beta^{t+1}\lambda_t$$ to the collateral constraint, $$\beta^t \underline{\nu}^N_t$$ and $$\beta^t \underline{\nu}^O_t$$ to nonnegativity constraints on capital, and $$\beta^t \eta_t$$ to the market-clearing condition for old capital. The planner's FOCs are then compared with those of the competitive equilibrium to isolate the externality terms.

The key proof technique for Proposition 2 (pp. 367-368) is to bound the two integrals in (24) using properties of the stationary equilibrium from Proposition 1. In particular, using that $$\phi_d$$ is weakly decreasing in $$w$$ and that the optimality condition for debt implies $$\lambda(w) = \phi_d(w)$$, the collateral externality on the right of (24) can be rewritten as $$\theta \int k^N \phi_d\, d\pi$$. The distributive externality on the left is $$\int k^O \phi_d\, d\pi$$. The market-clearing condition (3) plus the equilibrium sorting (more constrained firms hold more old capital than new, unconditionally) then delivers the strict inequality.

The quantitative model (Section IV, pp. 379-383) introduces persistent idiosyncratic productivity shocks $$s_{it}$$ following an AR(1) in logs (discretized with two states), stochastic firm death probability $$\rho$$, and geometric depreciation for both new and old capital. The production function is a CES bundle of new and old capital with elasticity of substitution $$\epsilon = 5$$ and new-capital share $$\sigma^N = 0.5$$ (Section IV.A, p. 380):

$$k_{t-1}(s^a) = g\!\left(k^N_{t-1}(s^a),\, k^O_{t-1}(s^a)\right) = \left[\left(\sigma^N\right)^{1/\epsilon}\!\left(k^N\right)^{(\epsilon-1)/\epsilon} + \left(1-\sigma^N\right)^{1/\epsilon}\!\left(k^O\right)^{(\epsilon-1)/\epsilon}\right]^{\epsilon/(\epsilon-1)}$$

The collateral constraint in the quantitative model (eq. 44, p. 382) allows both new and old capital to serve as collateral:

$$\theta\!\left\{\!\left[1 - \delta^N(1-q_{t+1})\right] k_t^N(s^a) + q_{t+1}(1-\delta^O) k_t^O(s^a)\right\} \geq \beta^{-1} b_t(s^a) \tag{44}$$

The stationary constrained-efficient allocation is solved numerically (online Appendix C.1). The planner's optimal price satisfies the condition in eq. 51 (p. 384), which generalizes eq. 23 to the quantitative environment with productivity heterogeneity and long-lived capital, and the equilibrium price is bounded below by the scrap value $$\underline{q}$$.

## Empirical specifications

**Calibration (Section V.A, pp. 384-385, Table 1).** The quantitative model is calibrated at annual frequency ($$\beta = 0.96$$). Key parameter choices:

| Parameter | Value | Source / target |
|---|---|---|
| Capital curvature $$\alpha$$ | 0.6 | Capital share in firm-dynamics literature |
| CES elasticity $$\epsilon$$ | 5 | Lanteri (2018) |
| Depreciation $$\delta^N = \delta^O$$ | 0.2 | Average capital age new = 4 yr, old = 9 yr |
| Scrap value $$\underline{q}$$ | 0.1 | Interior solution for planner |
| Productivity persistence $$\chi_s$$ | 0.7 | Khan and Thomas (2013), Lanteri (2018) |
| Productivity std. dev. $$\sigma_s$$ | 0.12 | Firm-level investment rate std. dev. = 0.32 |
| Collateralizability $$\theta$$ | 0.5 | Li, Whited, and Wu (2016) |
| Equity cost $$\phi_0 = 0.1$$, $$\phi_1 = 5$$ | 0.1 / 5 | Hennessy and Whited (2007); premium on internal funds $$\approx 5\%$$ |
| Death probability $$\rho$$ | 0.1 | Decker et al. (2014) firm entry/exit rate |
| Initial net worth $$w_0$$ | 5 | $$\approx 9\%$$ of unconstrained-optimal capital for high-productivity firms |

Under the calibration, the standard deviation of firm-level investment rates in competitive equilibrium equals 0.32, close to Cooper and Haltiwanger (2006). The model matches the empirical relationship between firm age and capital age reported by Ma, Murfin, and Pratt (2022): age-0 firms buy capital that is on average 7.5 years old; age-10 firms buy capital averaging 6.4 years old.

**Quantitative results (Section V.B, pp. 386-388, Table 2).** The stationary competitive equilibrium price of old capital equals 0.553 versus the first-best price of 0.547. The planner drives the price to the scrap value floor 0.100, well below first best, because imperfect substitutability between new and old capital prevents the first-best scale from being achieved at a low price. Output, investment, and consumption under the three allocations (as fractions of first-best values):

| Variable | First best (level) | Competitive equilibrium | Constrained efficient |
|---|---|---|---|
| Output | (9.910) | 0.899 | 0.973 |
| Investment | (4.497) | 0.857 | 0.962 |
| Consumption | (5.413) | 0.933 | 0.983 |
| Price $$q$$ | (0.547) | 1.010 | 0.183 |
| Avg. tax $$\tau^N$$ | 0 | 0 | -8.6% |
| Avg. tax $$\tau^O$$ | 0 | 0 | 103.7% |

The distributive externality is approximately 2.3 times the collateral externality in stationary competitive equilibrium (Figure 4, p. 388), consistent with Proposition 2. Sensitivity analysis (Section VI.B) shows the sign result is robust across $$\theta \in \{0, 0.5, 0.75\}$$, $$\epsilon \in \{1, 5, 10\}$$, and different scrap values.

The paper also studies restricted policy instruments: a subsidy on new capital alone (without taxes on old capital) reduces the old-capital price by about 4 percent per 1 percent subsidy, and a balanced-budget policy with $$\tau^N = -0.03$$ and $$\tau^O = 0.073$$ (without lump-sum transfers) drives the price to $$q = 0.412$$ and raises aggregate welfare. Eisfeldt and Rampini (2006) and Eisfeldt and Rampini (2007) provide the underlying empirical facts about capital reallocation that motivate the model setup.

## Datasets used

This paper develops a calibrated theoretical model; it does not directly use external datasets. The calibration is based on empirical moments and parameter estimates from the published literature.

| Source | Role in paper | Wiki page |
|---|---|---|
| Published empirical moments (investment rates, firm entry/exit, capital age, equity cost estimates) | Calibration targets for Table 1 parameters | No page yet (multiple published sources) |

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210902) if you are: (i) studying the proofs of Propositions 3-5 (extensions to risk-averse entrepreneurs, heterogeneous productivity, and long-lived capital) or the conditions under which the opposite sign of inefficiency can arise (Section III.F); (ii) analyzing the transition dynamics of investment subsidies; (iii) examining sensitivity with respect to collateralizability, substitutability, or the scrap value floor (Table C1 in the online appendix); or (iv) extending the framework to settings with aggregate fluctuations, which the paper flags as an open direction. The replication archive at [https://doi.org/10.3886/E180421V1](https://doi.org/10.3886/E180421V1) contains the code for the quantitative model.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(2), February 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The paper is paywalled; no open-access licence was found in Crossref metadata. This page reproduces only excerpts (equations, numbers, and structural summaries) for educational and research reference purposes under extract-only terms.

> Lanteri, Andrea, and Adriano A. Rampini. "Constrained-Efficient Capital Reallocation."
> *American Economic Review* 113, no. 2 (February 2023): 354-395.
> DOI: 10.1257/aer.20210902.
