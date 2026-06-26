---
title: "Optimal Fiscal Policy with Heterogeneous Agents: Le Grand & Ragot (2025)"
description: >-
  Distilled: Le Grand and Ragot (2025) show that positive capital taxes and public debt
  can both be optimal in a heterogeneous-agent model when credit constraints occasionally
  bind and utility is non-CRRA (GHH or DRRA), overturning the Chamley-Judd zero-capital-tax
  result. Optimal public debt rises after a low-persistence public spending shock but falls
  after a high-persistence shock. Journal of Political Economy 133(7), 2025, paywalled.
  Six core results with source locators, the structural model equations, and the solution method.
sidebar:
  label: Le Grand-Ragot 2025
  order: 1
tags: [paper-summary, optimal-taxation, heterogeneous-agents, macro, fiscal-policy, structural,
       peer-reviewed, unreplicated, data:cps]
paper:
  authors: "François Le Grand, Xavier Ragot"
  authorList:
    - { family: Le Grand, given: François, orcid: 0000-0002-1505-5851, affiliation: Rennes School of Business }
    - { family: Ragot, given: Xavier, affiliation: "SciencesPo, CNRS, OFCE, CEPR" }
  year: 2025
  venue: "Journal of Political Economy 133(7), 2025, 2320-2369"
  venueShort: J. Polit. Economy 2025
  doi: 10.1086/734877
  jel:
    codes: [H21, E21, E44, D31]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Fiscal Policy and Economic Growth", "Fiscal Policies and Political Economy", "Financial Literacy, Pension, Retirement Analysis"]
  dataAccess: public
  outcome:
    - optimal steady-state capital tax rate
    - optimal steady-state public debt
    - optimal public debt dynamics after a public spending shock
    - optimal capital tax response after a public spending shock
    - optimal labor tax progressivity after a public spending shock
  outcomeClass: [macro-aggregates, fiscal-policy-design]
  license: "paywalled (Journal of Political Economy VOR, University of Chicago Press; HAL preprint hal-05547657 available under CC BY-NC-ND 4.0)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press; HAL preprint at hal.science/hal-05547657 under CC BY-NC-ND 4.0; 2026-06-26)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 7
  methods:
    role: both
    family: structural
    buildsFrom: [heterogeneous-agent-bewley-model]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [risk-sharing, financial-constraint, taxes]
  scope:
    region: "US (quantitative calibration); theoretical (analytical model)"
    assetClass: macro / theoretical
    period: "calibrated to US pre-2008 fiscal data"
    frequency: quarterly
    dataType: [survey]
    granularity: [aggregate, individual]
    n: "3 ex-ante agent types, 5 idiosyncratic productivity states each, 455 truncated histories in quantitative model"
  findings:
    - { ref: R1, outcome: "optimal steady-state capital tax rate", metric: coefficient, value: "positive (tau^K = 6%, tau^L = 3% in simple GHH tractable example: alpha=0.3, beta=0.7, phi=0.3, delta=1, G=0.01, p. 24)", direction: positive }
    - { ref: R2, outcome: "optimal steady-state capital tax rate", metric: coefficient, value: "tau^K = 0 for CRRA separable utility regardless of whether credit constraints bind (Corollary 1, p. 18)", direction: none }
    - { ref: R3, outcome: "optimal steady-state public debt", metric: coefficient, value: "B >= 0 iff savings motive dominates (g1-bar <= 0) and G <= g-pos-bar * Y_FB (Result 1, p. 23); tractable example: B > 0 with alpha=0.3, beta=0.7", direction: positive }
    - { ref: R4, outcome: "optimal public debt dynamics after a public spending shock", metric: coefficient, value: "dB_hat_0/d(rho_G) < 0 holding NPV fixed (Proposition 5, p. 26); quantitatively B rises for rho_G=0.1 shock (1% of GDP), B falls for rho_G=0.99 shock (0.02% of GDP) (Figure 1 panel 5, p. 40)", direction: mixed }
    - { ref: R5, outcome: "optimal capital tax response after a public spending shock", metric: coefficient, value: "tau^K rises at impact for both rho_G=0.1 and rho_G=0.99; capital tax change is an order of magnitude larger than labor tax level change (Figure 1 panel 4, p. 41)", direction: positive }
    - { ref: R6, outcome: "optimal labor tax progressivity after a public spending shock", metric: coefficient, value: "Tax progressivity tau rises and labor tax level kappa falls at impact; both changes are much smaller than the capital tax response (Figure 1 panels 2-3, p. 41)", direction: positive }
  resultType: overturns
  relatesTo:
    - { cite: "Chamley (1986)", doi: '10.2307/1911310', relation: contradicts, note: "Chamley zero-capital-tax result overturned for GHH and DRRA utility with binding credit constraints; confirmed only for CRRA (Corollary 1)" }
    - { cite: "Judd (1985)", doi: '10.1016/0047-2727(85)90020-9', relation: contradicts, note: "Judd zero-capital-tax result similarly fails for non-CRRA utility with occasionally binding credit constraints" }
    - { cite: "Aiyagari (1995)", doi: '10.1086/601445', relation: builds-on, note: "modified golden rule 1+F_K=1/beta at the SRE and analysis of positive optimal capital taxation in incomplete-markets models" }
    - { cite: "Straub and Werning (2020)", doi: '10.1257/aer.20150210', relation: builds-on, note: "Straub-Werning condition ensures stationarity of the Ramsey equilibrium; one of three existence conditions in Proposition 3" }
    - { cite: "Heathcote, Storesletten, and Violante (2017)", doi: '10.1093/qje/qjx018', relation: builds-on, note: "HSV nonlinear labor tax schedule adopted as the functional form; progressivity parameter tau=0.18 taken from their estimate" }
    - { cite: "Marcet and Marimon (2019)", doi: '10.3982/ecta9902', relation: builds-on, note: "factorization method for Ramsey problems with forward-looking constraints; underpins derivation of planner FOCs in Section 4" }
    - { cite: "LeGrand and Ragot (2022a)", relation: builds-on, note: "truncation method aggregating heterogeneous-agent histories to a finite state space; main computational engine for the quantitative model" }
    - { cite: "Dyrda and Pedroni (2022)", doi: '10.1093/restud/rdac031', relation: tests, note: "their positive capital tax result under KPR utility is consistent with this paper; both reconciled by the general condition that non-CRRA utility is the key driver" }
  openQuestions:
    - "Extension to environments with nominal rigidities or frictional labor markets (p. 3, footnote 1); the paper abstracts from these but they may be present in more general settings."
    - "Time inconsistency of the Ramsey planner in period 0 vs. the timeless perspective: the full interaction between reoptimization shocks and MIT shocks remains a direction for future work (Section 4.4, p. 36)."
    - "Non-stationary equilibria when the Straub-Werning or Laffer conditions fail; these may exist but are not characterized here (Appendix A.3.6)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/ZMIFAZ", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (HAL preprint pp. 1-50, identical to JPE VOR pp. 2320-2369); six core results extracted with proposition/figure/page locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: D31 added to JEL codes (missing from original); R1 tractable-example locator corrected p. 23 → p. 24 (example is on PDF p. 24); R3 findings condition corrected B > 0 → B >= 0 to match Result 1 text. All six core result locators, all equations (1–14, 29, 32, 34, 40–41, 44, 59–60), and all reported magnitudes confirmed against the HAL preprint PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/734877", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref record; container-title Journal of Political Economy, vol 133, issue 7, pp 2320-2369, published 2025-07-01. HAL preprint hal-05547657 states CC BY-NC-ND 4.0 per cover page." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model it builds on, and the solution
method: enough to know what it found and how, without reading all 50 pages. To replicate or
extend, read the full source at [doi.org/10.1086/734877](https://doi.org/10.1086/734877) or
the open preprint at [hal.science/hal-05547657](https://hal.science/hal-05547657).

## TL;DR

Le Grand and Ragot (2025) analyze optimal fiscal policy in a Bewley-Huggett-Aiyagari
heterogeneous-agent model with capital accumulation, progressive labor taxation, a linear
capital tax, and public debt. The government finances exogenous public spending via taxes
and new debt. Three contributions:

First, in a simple analytical model, the steady-state optimal capital tax is positive when
credit constraints occasionally bind AND the utility function deviates from Constant Relative
Risk Aversion (CRRA): for GHH or Decreasing RRA (DRRA) preferences, an externality of savings
on post-tax factor prices creates a rationale for a positive capital tax. With CRRA utility,
the Chamley (1986) and Judd (1985) zero-capital-tax result generalizes exactly (Corollary 1).

Second, the existence of a Stationary Ramsey Equilibrium (SRE) with positive capital tax and
positive public debt requires three independent conditions: a non-first-best condition, the
Straub and Werning (2020) stationarity condition, and a Laffer condition.

Third, for a given net present value (NPV) of a public spending shock, optimal public debt
rises when shock persistence is low (the government borrows to smooth taxes) and falls when
persistence is high (the cost of future tax increases to retire debt is too large). A
quantitative model calibrated to the US via an inverse optimal approach confirms these results.

## Core results

Magnitudes are as reported; all results are from the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Positive optimal capital tax when credit constraints bind for unemployed agents (GHH/DRRA utility) | Proposition 1 (eq. 29, p. 15); GHH case eqs. (33)-(34), p. 19; tractable example p. 24 | Simple GHH example: $$\tau^K = 6\%$$, $$\tau^L = 3\%$$, $$B > 0$$ (parameters: $$\alpha=0.3, \beta=0.7, \varphi=0.3, \delta=1, G=0.01$$) |
| R2 | Zero capital tax with CRRA separable utility, even with binding credit constraints | Corollary 1, p. 18 | $$\tau^K = 0$$ for $$U(c,l) = u(c) - v(l)$$ with CRRA $$u$$; generalizes Chamley-Judd to incomplete markets with occasionally binding constraints |
| R3 | Positive public debt is optimal when savings motive dominates public spending needs | Result 1 (eq. 39), p. 23 | $$B \geq 0$$ iff $$\bar{g}_1 \leq 0$$ and $$G \leq \bar{g}_{\text{pos}} Y_{FB}$$; tractable example: $$B > 0$$ with $$\alpha=0.3, \beta=0.7$$ |
| R4 | Optimal public debt response to spending shock decreasing in shock persistence at fixed NPV | Proposition 5 (p. 26); Figure 3 (p. 43) | $$\partial \hat{B}_0/\partial \rho_G < 0$$; quantitatively: debt rises for $$\rho_G=0.1$$ (1% of GDP shock), falls for $$\rho_G=0.99$$ (0.02% of GDP shock) |
| R5 | Capital tax rises significantly at impact after a public spending shock (both persistence levels) | Figure 1 (panel 4, p. 40-41) | Change in $$\tau^K$$ at impact is an order of magnitude larger than the change in the labor tax level; capital tax increases for both high- and low-persistence shocks |
| R6 | Labor tax progressivity rises and level falls at impact after a spending shock | Figure 1 (panels 2-3, p. 41) | Progressivity $$\tau$$ increases and labor tax level $$\kappa$$ decreases; both changes are much smaller than the capital tax response; public debt path differs markedly by persistence level (panel 5) |

**Overall (paper's conclusion).** The key friction for positive optimal capital taxation is
an occasionally binding credit constraint: it introduces a price externality of savings that
the planner corrects with a positive capital tax. The result fails for CRRA utility because
the externality cancels exactly. For public debt dynamics, shock persistence is the key driver
of the optimal financing structure: transitory shocks call for borrowing (lower future taxes
via smoothing) while persistent shocks call for front-loading adjustment (raising taxes now to
avoid a highly distortionary persistent increase later).

## Theory / model

The economy runs in discrete time. A continuum of $$F$$ ex-ante types of heterogeneous agents
face idiosyncratic productivity risk. A representative firm produces using Cobb-Douglas
technology. The government has access to a linear capital tax, a nonlinear (HSV) labor tax,
and public debt. Aggregate uncertainty enters only through an exogenous public spending path
(an MIT shock), so the economy is otherwise deterministic at the aggregate level.

**Production.** The net-of-depreciation production function is (p. 7, eq. 1):

$$
Y_t = F(K_{t-1}, L_t) = K_{t-1}^\alpha L_t^{1-\alpha} - \delta K_{t-1}. \tag{1}
$$

Factor prices satisfy $$\tilde{w}_t = F_{L,t}$$ and $$\tilde{r}_t = F_{K,t}$$.

**Tax instruments.** The labor tax follows Heathcote, Storesletten, and Violante (2017) (HSV).
An agent earning pre-tax labor income $$\tilde{w} y l$$ pays (p. 8, eq. 2):

$$
T_t(\tilde{w}yl) := \tilde{w}yl - \kappa_t(\tilde{w}yl)^{1-\tau_t}, \tag{2}
$$

where $$\kappa_t$$ governs the level of labor taxation and $$\tau_t \in [0,1]$$ governs progressivity
($$\tau_t = 0$$ is a linear tax; $$\tau_t = 1$$ is full income redistribution). The capital tax
$$\tau_t^K$$ is linear and applied to all interest-bearing assets. Defining post-tax factor
prices (p. 9, eqs. 4-5):

$$
w_t := \kappa_t(\tilde{w}_t)^{1-\tau_t}, \qquad R_t := 1 + r_t = 1 + (1-\tau_t^K)\tilde{r}_t, \tag{4,5}
$$

the government budget constraint in post-tax prices simplifies to (p. 9, eq. 6):

$$
G_t + R_t B_{t-1} + w_t \sum_{f=1}^F m^f \int_i (y_{i,t}^f l_{i,t}^f)^{1-\tau_t} \ell^f(di)
\leq F(K_{t-1}, L_t) - (R_t - 1)K_{t-1} + B_t. \tag{6}
$$

**Agents.** Each agent $$i$$ of type $$f$$ maximizes expected discounted utility (p. 10, eq. 7):

$$
\max_{\{c,l,a\}} \; \mathbb{E}_0 \sum_{t=0}^\infty \beta^t U(c_{i,t}^f, l_{i,t}^f), \tag{7}
$$

subject to the budget constraint (eq. 8) and a borrowing limit $$a_{i,t}^f \geq -\underline{a}$$:

$$
c_{i,t}^f + a_{i,t}^f = R_t a_{i,t-1}^f + w_t(y_{i,t}^f l_{i,t}^f)^{1-\tau_t}. \tag{8}
$$

Denoting by $$\beta^t \nu_{i,t}^f \geq 0$$ the multiplier on the credit constraint, the consumption
Euler equation is (eq. 10):

$$
U_c(c_{i,t}^f, l_{i,t}^f) = \beta \mathbb{E}_t\!\left[ R_{t+1} U_c(c_{i,t+1}^f, l_{i,t+1}^f) \right] + \nu_{i,t}^f. \tag{10}
$$

The labor supply first-order condition is (eq. 11):

$$
-U_l(c_{i,t}^f, l_{i,t}^f) = (1-\tau_t) w_t y_{i,t}^f (y_{i,t}^f l_{i,t}^f)^{-\tau_t} U_c(c_{i,t}^f, l_{i,t}^f). \tag{11}
$$

**Social welfare and Ramsey problem.** The government is a utilitarian planner with type-specific
Pareto weights $$\omega^f$$. Aggregate social welfare is (eq. 14):

$$
W_0 = \sum_{f=1}^F m^f \omega^f \left( \mathbb{E}_0 \sum_{t=0}^\infty \beta^t \int_{i \in I^f} U(c_{i,t}^f, l_{i,t}^f) \ell^f(di) \right). \tag{14}
$$

A Ramsey Equilibrium (RE) is the competitive equilibrium with the highest $$W_0$$ over all
fiscal policies satisfying the government budget constraint. A Stationary Ramsey Equilibrium
(SRE) is an RE in which aggregate quantities, prices, fiscal policy, and public spending are
all constant. At the SRE the planner's FOC for public debt implies the modified golden rule
$$1 + F_K = 1/\beta$$, a condition first derived in the context of optimal capital taxation
under incomplete markets by Aiyagari (1995); this pins down the long-run capital stock
independently of the SWF weights $$\omega^f$$.

**Simple model and the capital tax condition.** Section 3 studies a simplified environment
with deterministic productivity fluctuations (Woodford 1990): two agent types (employed and
unemployed) alternating each period, a linear labor tax $$\tau^L$$, and a zero borrowing limit.
Binding credit constraints affect only the unemployed at the SRE.

The planner's first-order condition (FOC) linking post-tax interest and wage rates at the SRE is
Proposition 1 (p. 15, eq. 29):

$$
\underbrace{1 - \beta R}_{\text{smoothing wedge}}
= \underbrace{\frac{F_L - w}{w}}_{\text{labor wedge}}
\cdot \underbrace{\frac{\sigma_u - \sigma_e + \varsigma^l_{c,e}}{\sigma_e + \frac{1}{\varphi_e} - \varsigma^l_{c,e} + \varsigma^c_{l,e}}}_{\text{net distributional gain}}, \tag{29}
$$

where $$\sigma_e, \sigma_u$$ are the inverses of the intertemporal elasticity of substitution (IES)
for employed and unemployed agents, $$\varphi_e$$ is the Frisch elasticity of labor supply, and
$$\varsigma^l_{c,e}$$, $$\varsigma^c_{l,e}$$ are cross-derivative terms that vanish for separable utility.
The smoothing wedge equals $$\beta(1+F_K-R) = (1-\beta)\tau^K$$, so a positive smoothing wedge
is equivalent to a positive capital tax.

For separable CRRA utility, $$\sigma_u = \sigma_e$$, the numerator vanishes, and hence $$\tau^K = 0$$
(Corollary 1). The capital tax is positive when the IES differs between employed and
unemployed agents (DRRA utility, so $$\sigma_u > \sigma_e$$) or when the utility is non-separable
in a suitable way (GHH, KPR).

**GHH utility.** For the Greenwood-Hercowitz-Huffman utility function (p. 19, eq. 32):

$$
U(c,l) := u\!\left(c - \chi^{-1} \frac{l^{1+1/\varphi}}{1+1/\varphi}\right), \tag{32}
$$

where $$u$$ has constant IES $$1/\sigma$$ and $$\varphi > 0$$ is the Frisch elasticity. In the
log-GHH case (IES = 1), Proposition 1 reduces to a simple relation between the capital and
labor taxes (eq. 34):

$$
(1-\beta)\tau^K = \frac{\tau^L}{1-\tau^L} \varphi(1+\beta). \tag{34}
$$

The capital tax is thus positive whenever the labor tax is positive, and increases with the
discount factor $$\beta$$ and the Frisch elasticity $$\varphi$$.

## Method

The paper applies two computational methods and an identification strategy.

**Factorization approach.** In the general model of Section 4, the Ramsey program is solved
using the factorization method of Marcet and Marimon (2019). This writes the Lagrangian of
the sequential Ramsey problem so that the discounted sum collapses to a single-period term
embedding forward-looking constraints (the agents' Euler equations). The resulting
first-order conditions (FOCs) are derived in Appendix A.6. The capital tax FOC (eq. 60,
p. 32) equates the net distributive gain of a capital tax to the cost imposed on savings
incentives:

$$
\sum_{f=1}^F m^f \int_i \hat{\psi}_{i,t}^f a_{i,t-1}^f \ell^f(di)
= \sum_{f=1}^F m^f \int_i \lambda_{i,t-1}^f u'(x_{i,t}^f) \ell^f(di), \tag{60}
$$

where $$\hat{\psi}_{i,t}^f := \mu_t - \psi_{i,t}^f$$ is the net value to the planner of reallocating
one unit from agent $$(i,f)$$ to public funds, $$\mu_t$$ is the shadow value of government
resources, and $$\lambda_{i,t}^f$$ is the Lagrange multiplier on agent $$(i,f)$$'s Euler equation.
The public-debt FOC implies the modified golden rule at the steady state:

$$
\mu_t = \beta(1+\tilde{r}_{t+1})\mu_{t+1}, \qquad \Rightarrow \quad 1 + F_K = \frac{1}{\beta}. \tag{59}
$$

**Truncation method.** For the quantitative model, the paper uses the truncation approach of
LeGrand and Ragot (2022a) with the refinement of LeGrand and Ragot (2022b), both building on
heterogeneous-agent-bewley-model traditions. The method aggregates agents by their recent
idiosyncratic productivity histories of length $$N$$, replacing the full infinite-dimensional
distribution with a finite number of "representative histories." Histories that are more
frequently visited are given longer truncation lengths (refined truncation), reducing the
state space from exponential to linear in the maximum truncation length.

**Inverse optimal approach.** The Social Welfare Function (SWF) weights $$(\omega^f)_{f=1,\ldots,F}$$
are identified from the observed US fiscal system via an inverse optimal approach following
Bourguignon and Amadeo (2015) and Heathcote and Tsujiyama (2021). Given the calibrated
steady-state fiscal parameters $$(\tau^K, \kappa, \tau, B)$$, the model's FOCs at the SRE are
solved for the unique $$(\omega^f)_{f=1,\ldots,F}$$ consistent with optimality. With $$F=3$$ agent
types, the identification reduces to inverting a 3x3 matrix of FOC constraints.

**Public debt dynamics.** In the simple log-GHH model, capital is the unique state variable
in the linearized dynamics. The optimal capital path after a public spending shock of initial
size $$\hat{G}_0$$ and persistence $$\rho_G$$ is (Result 2, eq. 41):

$$
\hat{K}_t = \rho_K \hat{K}_{t-1} + \sigma_K \hat{G}_t, \qquad \rho_K > 0, \; \sigma_K < 0, \tag{41}
$$

from which the closed-form public debt impulse response function follows (eq. 44):

$$
\hat{B}_t = \hat{G}_0 \!\left(\Theta^K \rho_K^t - \Theta^G \rho_G^t\right). \tag{44}
$$

The impact response $$\hat{B}_0 = \hat{G}_0(\Theta^K - \Theta^G)$$ can be positive or negative
depending on $$\rho_G$$. Proposition 5 (p. 26) proves that $$\partial \hat{B}_0/\partial \rho_G < 0$$
at fixed $$\hat{G}_0$$ and, more importantly, also at fixed NPV of public spending. The
intuition: when persistence is low, the planner borrows to smooth the large transitory shock
and retires debt with a small future tax increase; when persistence is high, the capital stock
falls persistently, making future tax increases very costly, so the planner front-loads fiscal
adjustment without issuing new debt.

## Empirical specifications

The quantitative model (Section 5) is calibrated to the US and solved numerically.

**Parameters and calibration targets.** The period is a quarter. Technology is Cobb-Douglas:
$$F(K,L) = K^\alpha L^{1-\alpha} - \delta K$$ with $$\alpha = 0.36$$ (capital share) and $$\delta = 0.025$$
(depreciation, corresponding to 10% annually), following Krueger, Mittman, and Perri (2018).
The discount factor $$\beta$$ is set to match an annual capital-to-output ratio of 2.7. The GHH
utility has Frisch elasticity $$\varphi = 0.5$$ (recommended by Chetty et al. (2011) for the
intensive margin in heterogeneous-agent models) and scaling $$\chi = 0.05$$ to generate a
steady-state labor supply of roughly $$1/3$$.

**Ex-ante heterogeneity.** Three agent types ($$F=3$$) are distinguished by their ex-ante
productivity processes, corresponding to educational attainment: high-school or less, some
college, and at least a bachelor's degree, with average productivity levels of 0.8, 1, and 2
and population shares of $$1/3$$ each (2022 CPS data, footnote 28, p. 38). Each type follows
an AR(1) log-productivity process:

$$
\log y_t^f = \rho_y^f \log y_{t-1}^f + \varepsilon_t^f, \qquad \varepsilon_t^f \overset{\text{iid}}{\sim} \mathcal{N}(0,(\sigma_y^f)^2),
$$

discretized with five idiosyncratic states per type using Rouwenhorst (1995), yielding 15
productivity levels and 455 truncated histories total after refinement.

**Fiscal calibration.** The capital tax rate $$\tau^K = 36\%$$ is taken from Trabandt and Uhlig
(2011), using the Mendoza, Razin, and Tesar (1994) methodology on US data prior to 2008.
The labor tax progressivity $$\tau = 0.18$$ is from Heathcote, Storesletten, and Violante
(2017). The level $$\kappa$$ is chosen to match a public-spending-to-GDP ratio of $$G/Y = 17\%$$.

**Inverse optimal identification.** At the calibrated steady state, the planner's FOCs
identify the SWF weights as $$\omega^1 = 13.1\%$$, $$\omega^2 = 81.6\%$$, $$\omega^3 = 5.3\%$$ for
the three types (p. 40). These weights are positive, consistent with a sensible SWF, and
sum to 100% by normalization.

**MIT shock specification.** The public spending shock enters as (eq. 40):

$$
\hat{G}_t = \begin{cases} \hat{G}_0 & t = 0 \\ \rho_G \hat{G}_{t-1} & t > 0, \end{cases} \tag{40}
$$

with $$\rho_G \in (-1,1)$$. Two persistence values are studied: $$\rho_G = 0.1$$ (low persistence,
initial shock = 1% of GDP) and $$\rho_G = 0.99$$ (high persistence, initial shock = 0.02%
of GDP), calibrated to the same NPV of public spending (Panel 1, Figure 1, p. 40).

**Robustness.** Results hold under an affine tax system (Appendix A.9, linear labor tax plus
lump-sum transfer as in Dyrda and Pedroni (2022)) and under a productivity-dependent SWF
that assigns weights to instantaneous rather than intertemporal utility (Appendix A.10).
Results for TFP shocks and discount factor shocks are reported in Appendix A.11 and are
qualitatively similar to the public spending shock results.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| US Current Population Survey (CPS) 2022 | Calibration of average earnings for three education groups (high-school, some college, bachelor+); sets relative productivity levels 0.8, 1, 2 | [no page yet] |
| Trabandt and Uhlig (2011) capital tax estimates | Sets steady-state capital tax target $$\tau^K = 36\%$$ (Mendoza-Razin-Tesar 1994 methodology, US pre-2008) | no page yet |
| Heathcote, Storesletten, and Violante (2017) estimates | Sets labor tax progressivity target $$\tau = 0.18$$ | no page yet |

Sample: calibrated to US steady-state fiscal data circa 2007; productivity AR(1) processes estimated to target US income risk moments. Dynamics are first-order perturbations around the calibrated SRE; not estimated from time-series data.

## When to read the full paper

Read the [source](https://doi.org/10.1086/734877) (or [HAL preprint](https://hal.science/hal-05547657)) if you are:
studying the analytical conditions for existence of a stationary Ramsey equilibrium in
heterogeneous-agent models (Propositions 2-3 and Appendices A.3-A.5); building or comparing
quantitative Ramsey optimal policy models for the US (the calibration and truncation method
details are in Sections 5 and Appendix A.7-A.8); or working on the question of whether
capital taxes should rise or fall in response to public spending shocks (the key quantitative
IRFs are in Figures 1-3). The replication code at [doi.org/10.7910/DVN/ZMIFAZ](https://doi.org/10.7910/DVN/ZMIFAZ)
reproduces all tables and figures.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(7), July 2025, pp. 2320-2369.
Published by the University of Chicago Press; paywalled. An open preprint is available at
[hal.science/hal-05547657](https://hal.science/hal-05547657) under CC BY-NC-ND 4.0.

This page was extracted by an LLM (claude-sonnet-4-6) on 2026-06-26 and is **not human-verified
or independently reproduced**. Redistribution of the VOR is not permitted (paywalled); this
page contains extracted summaries only.

> Le Grand, François, and Xavier Ragot. "Optimal Fiscal Policy with Heterogeneous Agents
> and Capital: Should We Increase or Decrease Public Debt and Capital Taxes?"
> *Journal of Political Economy* 133, no. 7 (2025): 2320-2369.
> DOI: [10.1086/734877](https://doi.org/10.1086/734877).
