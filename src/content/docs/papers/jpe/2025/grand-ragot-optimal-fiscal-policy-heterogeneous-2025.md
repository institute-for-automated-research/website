---
title: "Optimal Fiscal Policy with Heterogeneous Agents: Le Grand & Ragot (2025)"
description: >-
  Distilled: Le Grand and Ragot (2025) show that positive capital taxes and public debt
  can both be optimal under suitable utility and fiscal conditions in a heterogeneous-agent
  model with occasionally binding credit constraints, qualifying the Chamley-Judd zero-capital-tax
  result. Optimal public debt rises after a low-persistence public spending shock but falls
  after a high-persistence shock. Journal of Political Economy 133(7), 2025, paywalled.
  Sixteen core results with source locators, the structural model equations, and the solution method.
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Fiscal Policy and Economic Growth", "Fiscal Policies and Political Economy"]
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
  resultsCount: 16
  citedByCount: 7
  methods:
    role: both
    family: structural
    buildsFrom: [heterogeneous-agent-bewley-model]
    identification: structural
  contributionType: [new-theory]
  mechanisms: [risk-sharing, financial-constraint, taxes, savings-price-externality]
  scope:
    region: "US (quantitative calibration); theoretical (analytical model)"
    assetClass: macro / theoretical
    period: "calibrated to US pre-2008 fiscal data"
    frequency: quarterly
    dataType: [survey]
    granularity: [aggregate, individual]
    n: "3 ex-ante agent types, 5 idiosyncratic productivity states each, 455 truncated histories in quantitative model"
  findings:
    - { ref: R1, outcome: "optimal steady-state capital tax rate", metric: level, value: "positive (tau^K = 6%, tau^L = 3% in simple GHH tractable example: alpha=0.3, beta=0.7, phi=0.3, delta=1, G=0.01, p. 24)", direction: positive }
    - { ref: R2, outcome: "optimal steady-state capital tax rate", metric: level, value: "tau^K = 0 for CRRA separable utility regardless of whether credit constraints bind (Corollary 1, p. 18)", direction: none }
    - { ref: R3, outcome: "optimal steady-state public debt", metric: level, value: "B >= 0 iff savings motive dominates (g1-bar <= 0) and G <= g-pos-bar * Y_FB (Result 1, p. 23); tractable example: B > 0 with alpha=0.3, beta=0.7", direction: positive }
    - { ref: R4, outcome: "optimal public debt dynamics after a public spending shock", metric: level, value: "dB_hat_0/d(rho_G) < 0 holding NPV fixed when impact debt response is positive (Proposition 5, p. 26); quantitatively B rises for rho_G=0.1 shock (1% of GDP), B falls for rho_G=0.99 shock (0.02% of GDP) (Figure 1 panel 5, p. 53; text pp. 40-41)", direction: mixed }
    - { ref: R5, outcome: "optimal capital tax response after a public spending shock", metric: level, value: "tau^K rises at impact for both rho_G=0.1 and rho_G=0.99; capital tax change is an order of magnitude larger than labor tax level change (Figure 1 panel 4, p. 53; text pp. 40-41)", direction: positive }
    - { ref: R6, outcome: "optimal labor tax progressivity after a public spending shock", metric: level, value: "Tax progressivity tau rises and labor tax level parameter kappa rises (which means a lower labor tax) at impact; both changes are much smaller than the capital tax response (Figure 1 panels 2-3, p. 53; text pp. 40-41)", direction: mixed }
    - { ref: R9, outcome: "optimal steady-state capital tax rate", metric: level, value: '(1-beta)tau^K/omega^A = omega^B/omega^A - (1+beta)Lambda + phi(1+beta)(1+Lambda)tau^L/(1-tau^L); higher social weight on type B raises capital tax relative to labor tax (Proposition 6, equations 46-47, pp. 27-28)', direction: positive }
    - { ref: R10, outcome: "aggregate output, capital, labor, consumption, and welfare after public spending shock", metric: level, value: "Relative to first best, incomplete-market aggregate variables are more volatile and persistent; equivalent-consumption welfare falls more, with a larger welfare gap under high persistence (Figure 2, p. 54; text pp. 42-43)", direction: mixed }
    - { ref: R11, outcome: "optimal public debt dynamics after a public spending shock", metric: level, value: "For equal NPV shocks, rho_G=0.1 gives debt that first rises then declines; rho_G=0.8 yields an inverted-U path; rho_G=0.95 yields a J-shaped path, with impact debt response decreasing in persistence (Figure 3, p. 55; text pp. 43-44)", direction: mixed }
    - { ref: R12, outcome: "optimal public debt dynamics after a public spending shock", metric: level, value: "With an affine labor-tax system plus transfers, debt rises for low persistence and falls for high persistence; capital tax and progressivity rise at impact (Section 5.4.1, text p. 44)", direction: mixed }
    - { ref: R14, outcome: "optimal public debt dynamics after a TFP shock", metric: level, value: "Debt rises on impact for a low-persistence TFP shock and falls for a highly persistent shock (Section 5.4.3, text p. 45; Appendix A.11)", direction: mixed }
    - { ref: R15, outcome: "optimal public debt dynamics after a discount-factor shock", metric: level, value: "Greater patience raises and prolongs capital; debt falls, but can rise slightly on impact when discount-factor persistence is very high (Section 5.4.3, text pp. 45-46; Appendix A.11)", direction: mixed }
    - { ref: R16, outcome: "optimal steady-state capital tax rate", metric: level, value: 'tau^K is proportional to the aggregate credit-constraint multipliers; tau^K > 0 if a positive mass of agents face binding credit constraints (equation 64, text p. 35)', direction: positive }
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
    - "How the mechanism extends when nominal rigidities or frictional labor markets interact with other frictions; footnote 1, p. 3, says price or wage stickiness alone under optimal monetary policy yields the same allocation."
    - "How fiscal responses differ under a period-0 perspective that includes the planner's reoptimization shock; this paper removes that shock by adopting the timeless perspective (Section 4.4, p. 36), while LeGrand and Ragot (2023) study it."
    - "Non-stationary equilibria when the Straub-Werning stationarity threshold fails; Appendix A.3.6 discusses possible declining-output equilibria but does not fully characterize them."
  replicationCode: { url: "https://doi.org/10.7910/DVN/ZMIFAZ", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (HAL preprint pp. 1-50, identical to JPE VOR pp. 2320-2369); six core results extracted with proposition/figure/page locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: D31 added to JEL codes (missing from original); R1 tractable-example locator corrected p. 23 → p. 24 (example is on PDF p. 24); R3 findings condition corrected B > 0 → B >= 0 to match Result 1 text. All six core result locators, all equations (1–14, 29, 32, 34, 40–41, 44, 59–60), and all reported magnitudes confirmed against the HAL preprint PDF." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 56-page PDF; appended ten result rows covering existence, stability, social-weight heterogeneity, the first-best comparison, persistence paths, and robustness to taxes, welfare weights, and shocks; added missing equations and the savings-price externality mechanism. These additions were subsequently checked against the PDF but have not been independently reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 16 Core rows, equations and specifications, classification axes, findings, prose, related-work edges and frontmatter against the source PDF. Fixed figure locators, the fixed-NPV condition, the labor-tax parameter interpretation, the existence-condition scope, equation (63), unsupported significance wording and scope-inaccurate prose. Locator and related-work checks passed. One headline comparison remains omitted: tax adjustments are smaller for higher shock persistence (Figure 1, p. 53; discussion p. 41)." }
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

First, in a simple analytical model, the steady-state optimal capital tax can be positive when
credit constraints bind and non-CRRA utility generates a savings externality on post-tax factor
prices, as with GHH or Decreasing RRA (DRRA) preferences. With CRRA utility,
the Chamley (1986) and Judd (1985) zero-capital-tax result generalizes exactly (Corollary 1).

Second, a Stationary Ramsey Equilibrium (SRE) with positive capital and labor taxes requires
three independent conditions: a non-first-best condition, the Straub and Werning (2020)
stationarity condition, and a Laffer condition. Positive public debt additionally requires
the savings-motive and public-spending threshold conditions in Result 1.

Third, in the quantitative model, for a given net present value (NPV) of a public spending
shock, optimal public debt rises when shock persistence is low (the government borrows to
smooth taxes) and falls when persistence is high (borrowing would require costly future taxes).
The quantitative model, calibrated to the US via an inverse optimal approach, confirms these results.

## Core results

Magnitudes are as reported; all results are from the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Positive optimal capital tax when credit constraints bind for unemployed agents (GHH/DRRA utility) | Proposition 1 (eq. 29, p. 15); GHH case eqs. (33)-(34), p. 19; tractable example p. 24 | Simple GHH example: $$\tau^K = 6\%$$, $$\tau^L = 3\%$$, $$B > 0$$ (parameters: $$\alpha=0.3, \beta=0.7, \varphi=0.3, \delta=1, G=0.01$$) |
| R2 | Zero capital tax with CRRA separable utility, even with binding credit constraints | Corollary 1, p. 18 | $$\tau^K = 0$$ for $$U(c,l) = u(c) - v(l)$$ with CRRA $$u$$; generalizes Chamley-Judd to incomplete markets with occasionally binding constraints |
| R3 | Positive public debt is optimal when savings motive dominates public spending needs | Result 1 (eq. 39), p. 23 | $$B \geq 0$$ iff $$\bar{g}_1 \leq 0$$ and $$G \leq \bar{g}_{\text{pos}} Y_{FB}$$; tractable example: $$B > 0$$ with $$\alpha=0.3, \beta=0.7$$ |
| R4 | Optimal public debt response to spending shock decreases in shock persistence at fixed NPV when impact debt is positive | Proposition 5 (p. 26); Figure 1 (panel 5, p. 53; discussion pp. 40-41) | $$\partial \hat{B}_0/\partial \rho_G < 0$$ at fixed shock size; at fixed NPV this result assumes $$\hat{B}_0>0$$; quantitatively debt rises for $$\rho_G=0.1$$ (1% of GDP shock) and falls for $$\rho_G=0.99$$ (0.02% of GDP shock) |
| R5 | Capital tax rises at impact after a public spending shock (both persistence levels) | Figure 1 (panel 4, p. 53; discussion pp. 40-41) | Change in $$\tau^K$$ at impact is an order of magnitude larger than the change in the labor tax level; capital tax increases for both high- and low-persistence shocks |
| R6 | Labor tax progressivity rises and labor tax level falls at impact after a spending shock | Figure 1 (panels 2-3, p. 53; discussion pp. 40-41) | Progressivity $$\tau$$ increases and labor tax level parameter $$\kappa$$ increases, which means the labor tax falls; both changes are much smaller than the capital tax response; public debt path differs markedly by persistence level (panel 5) |
| R7 | A stationary Ramsey equilibrium with positive capital and labor taxes requires three independent conditions | Propositions 2-3, equations (35)-(38), text pp. 20-22 | Non-first-best condition, Straub-Werning stationarity condition, and Laffer condition must all hold; positive public debt additionally requires the conditions in Result 1 |
| R8 | The linearized optimal capital path is stable only below a parameter threshold | Proposition 4, equation (42), text p. 25 | $$|\rho_K|<1$$ iff $$\alpha \leq \frac{1}{1+(1-\beta)(1+\varphi)}$$; the bound is automatically satisfied when steady-state public debt is positive ($$\bar{g}_1<0$$) |
| R9 | Ex-ante social weights change the optimal capital-tax/labor-tax mix | Proposition 6, equations (46)-(47), text pp. 27-28 | $$(1-\beta)\frac{\tau^K}{\omega^A}=\frac{\omega^B}{\omega^A}-(1+\beta)\Lambda+\varphi(1+\beta)(1+\Lambda)\frac{\tau^L}{1-\tau^L}$$; a higher weight on type B raises the capital tax relative to the labor tax |
| R10 | Incomplete-market allocations have more persistent aggregate responses and larger welfare losses than first best | Figure 2, p. 54; text pp. 42-43 | Following the same spending shock, output, capital, labor, and consumption are more volatile and persistent under incomplete markets; the equivalent-consumption welfare decline is larger, especially for the high-persistence shock |
| R11 | Debt-response shape changes across four public-spending persistence levels | Figure 3, p. 55; text pp. 43-44 | At equal spending-shock NPV, impact debt response decreases with persistence; $$\rho_G=0.1$$ gives an initial rise then monotone decline, $$\rho_G=0.8$$ an inverted U, and $$\rho_G=0.95$$ a J-shaped path |
| R12 | Debt and tax responses persist under an alternative affine tax system | Section 5.4.1, text p. 44; Appendix A.9 | Debt rises for a low-persistence shock and falls for a high-persistence shock; capital tax and progressivity rise at impact |
| R13 | The fiscal-dynamics result persists under productivity-dependent welfare weights | Section 5.4.2, text pp. 44-45; Appendix A.10 | Results are reported as qualitatively similar to the benchmark; the alternative weights apply to current productivity and instantaneous utility |
| R14 | TFP shocks produce the same direction of debt response as spending shocks | Section 5.4.3, text p. 45; Appendix A.11 | Debt rises on impact for a low-persistence TFP shock and falls when TFP-shock persistence is high, holding the cumulative TFP decline fixed |
| R15 | Discount-factor shocks produce a distinct debt response | Section 5.4.3, text pp. 45-46; Appendix A.11 | Greater patience raises capital and reduces debt; with very high shock persistence, debt can rise slightly on impact |
| R16 | The general model links positive capital taxation to binding credit constraints | Equation (64), text p. 35 | $$\tau^K=\frac{\sum_f m^f\int_i\nu_i^f\ell^f(di)}{(1-\beta)\sum_f m^f\int_i u'(x_i^f)\ell^f(di)}$$; $$\tau^K>0$$ when a positive mass of agents face binding constraints at the steady state |

**Overall (paper's conclusion).** The key friction for positive optimal capital taxation is
an occasionally binding credit constraint: it introduces a price externality of savings that
the planner corrects with a positive capital tax. The positive-capital-tax result does not hold with separable CRRA utility, where
the externality cancels exactly. For public debt dynamics, shock persistence is the key driver
of the optimal financing structure: transitory shocks call for borrowing to smooth taxes,
while persistent shocks call for front-loading the adjustment through lower debt because
borrowing would require costly future taxes.

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

The remaining equilibrium conditions in the general environment are the original government
budget (text p. 9, equation 3), household feasibility and borrowing/nonnegativity constraints
(text p. 10, equation 9), market clearing (text pp. 11-12, equations 12-13), and the
first-best benchmark (text p. 12, equations 15-16):

$$
G_t+(1+\tilde r_t)B_{t-1}\leq \sum_{f=1}^F m^f\int_i T_t(\tilde w_t y_{i,t}^f l_{i,t}^f)\ell^f(di)+\tau_t^K\tilde r_t(B_{t-1}+K_{t-1})+B_t. \tag{3}
$$

$$
a_{i,t}^f\geq-\underline a,\qquad c_{i,t}^f\geq0,\qquad l_{i,t}^f\geq0. \tag{9}
$$

$$
A_t=K_t+B_t=\sum_{f=1}^F m^f\int_i a_{i,t}^f\ell^f(di),\qquad
\sum_{f=1}^F m^f\int_i y_{i,t}^f l_{i,t}^f\ell^f(di)=L_t. \tag{12}
$$

$$
\sum_{f=1}^F m^f\int_i c_{i,t}^f\ell^f(di)+G_t+K_t=K_{t-1}+F(K_{t-1},L_t). \tag{13}
$$

$$
\max_{(c_{i,t}^f,l_{i,t}^f,L_t,K_t)_{t\geq0}} W_0\quad\text{subject to}\quad
\sum_{f=1}^F m^f\int_i c_{i,t}^f\ell^f(di)+G_t+K_t=K_{t-1}+F(K_{t-1},L_t),\quad
\sum_{f=1}^F m^f\int_i y_{i,t}^f l_{i,t}^f\ell^f(di)=L_t,\quad K_{-1}\text{ given}. \tag{15,16}
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

The savings and labor-supply first-order conditions that decompose these wedges are
equations 30-31 (text pp. 16-17):

$$
1-\beta R=\Xi\left(\sigma_u-\sigma_e+\varsigma^l_{c,e}\right). \tag{30}
$$

$$
\frac{F_L-w}{w}=\Xi\left(\sigma_e+\frac{1}{\varphi_e}-\varsigma^l_{c,e}+\varsigma^c_{l,e}\right). \tag{31}
$$

For separable CRRA utility, $$\sigma_u = \sigma_e$$, the numerator vanishes, and hence $$\tau^K = 0$$
(Corollary 1). The capital tax is positive when the IES differs between employed and
unemployed agents (DRRA utility, so $$\sigma_u > \sigma_e$$) or when the utility is non-separable
in a suitable way (GHH, KPR).

The elasticity definitions used in Proposition 1 are equations 27-28 (text p. 14):

$$
\sigma_e=-c_e\frac{U_{cc}(c_e,l_e)}{U_c(c_e,l_e)},\qquad
\sigma_u=-c_u\frac{U_{cc}(c_u,0)}{U_c(c_u,0)}. \tag{27}
$$

$$
\varphi_e=l_e\left(\frac{U_{ll}(c_e,l_e)}{U_l(c_e,l_e)}\right)^{-1},\qquad
\varsigma^l_{c,e}=l_e\frac{U_{cl}(c_e,l_e)}{U_c(c_e,l_e)},\qquad
\varsigma^c_{l,e}=c_e\frac{U_{cl}(c_e,l_e)}{U_l(c_e,l_e)}. \tag{28}
$$

For the GHH existence analysis, Propositions 2-3 define the non-first-best and stationarity
thresholds (text pp. 20-21, equations 35-38):

$$
\bar g_1:=\frac{1-\beta}{\beta}\frac{\alpha}{1/\beta+\delta-1}-\frac{1-\beta}{1+\beta}\frac{1-\alpha}{\varphi+1}. \tag{35}
$$

$$
\bar g_{La}:=\frac{1-\alpha}{\varphi}\left(1+\frac{1-\beta}{1+\beta}\frac{1}{1+\varphi}+\frac{\varphi}{1+\varphi}\right)(1-\bar\tau^L_{La})^{1+\varphi},\quad
\bar\tau^L_{La}:=\frac{1}{1+\varphi}-\frac{1}{1-\alpha}\frac{\varphi}{1+\varphi}
\frac{\bar g_1}{1+\frac{1-\beta}{1+\beta}\frac{1}{1+\varphi}+\frac{\varphi}{1+\varphi}}. \tag{36,37}
$$

$$
\bar g_{SW}:=\bar g_1+(1-\alpha)\left(1+\frac{1-\beta}{1+\beta}\frac{1}{1+\varphi}+\frac{\varphi}{1+\varphi}\right)
\left(1-\frac{1}{1+\varphi(1+\beta)}\right)^\varphi. \tag{38}
$$

The positive-debt threshold (text p. 23, equation 39) is

$$
\bar g_{pos}=\frac{1+\beta}{1-\beta}(1+2\varphi)(-\bar g_1),\qquad
B\geq0\ \text{iff}\ \bar g_1\leq0\ \text{and}\ G\leq\bar g_{pos}Y_{FB}. \tag{39}
$$

For the simple two-state employed/unemployed economy, the planner's problem and its
implementability conditions are stated in text pp. 13-14, equations 17-26. These equations
are the simple-model specification used for the propositions, not an estimated regression:

$$
\max_{\{c_{e,t},l_{e,t},c_{u,t},a_{e,t},a_{u,t}\}_{t\geq0}}
\sum_{t=0}^{\infty}\beta^t\left[U(c_{e,t},l_{e,t})+U(c_{u,t},0)\right]. \tag{17}
$$

$$
c_{e,t}+a_{e,t}=R_ta_{u,t-1}+w_tl_{e,t},\quad
c_{u,t}+a_{u,t}=R_ta_{e,t-1}. \tag{18,19}
$$

$$
U_c(c_{e,t},l_{e,t})=\beta R_{t+1}U_c(c_{u,t+1},0),\quad
U_c(c_{u,t},0)\geq\beta R_{t+1}U_c(c_{e,t+1},l_{e,t+1}),\quad
\text{equality in the second condition if }a_{u,t}>0. \tag{20,21}
$$

$$
-U_l(c_{e,t},l_{e,t})=w_tU_c(c_{e,t},l_{e,t}),\quad
F(A_{t-1}-B_{t-1},l_{e,t})+B_t\geq G_t+B_{t-1}+(R_t-1)A_{t-1}+w_tl_{e,t}. \tag{22,23}
$$

$$
A_t=a_{e,t}+a_{u,t},\quad a_{e,t},a_{u,t}\geq0,\quad
c_{e,t},c_{u,t}>0,\quad l_{e,t},l_{u,t}\geq0. \tag{24,25,26}
$$

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

For a GHH utility with constant inverse IES $$\sigma$$, the unsimplified wedge condition is
equation 33 (text p. 19):

$$
1-\beta R=\frac{F_L-w}{w}\varphi\sigma\left(1+\beta(\beta R)^{1/\sigma-1}\right). \tag{33}
$$

The capital tax is thus positive whenever the labor tax is positive, and increases with the
discount factor $$\beta$$ and the Frisch elasticity $$\varphi$$.

In the extension with two ex-ante types, the social objective and its capital-tax condition
are equations 45-47 (text pp. 27-28). Define $$\Lambda=\frac{\Omega^B(y^B)^{\varphi+1}}{\Omega^A(y^A)^{\varphi+1}}$$, the
relative labor income of the always-employed type. Proposition 6 gives:

$$
\omega^A\sum_{t=0}^{\infty}\beta^t\left[\log\left(c_{e,t}^A-\chi^{-1}\frac{(l_{e,t}^A)^{1+1/\varphi}}{1+1/\varphi}\right)+\log(c_{u,t}^A)\right]
+\omega^B\sum_{t=0}^{\infty}\beta^t\log\left(c_{e,t}^B-\chi^{-1}\frac{(l_{e,t}^B)^{1+1/\varphi}}{1+1/\varphi}\right). \tag{45}
$$

$$
\frac{1-\beta R}{\omega^A}=\frac{\omega^B}{\omega^A}-(1+\beta)\Lambda+\frac{F_L-w}{w}\varphi(1+\beta)(1+\Lambda), \tag{46}
$$

$$
(1-\beta)\frac{\tau^K}{\omega^A}=\frac{\omega^B}{\omega^A}-(1+\beta)\Lambda+\varphi(1+\beta)(1+\Lambda)\frac{\tau^L}{1-\tau^L}. \tag{47}
$$

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

Integrating household Euler equations in the general model gives the steady-state capital-tax
identity (text p. 35, equation 64):

$$
\tau^K=\frac{\sum_{f=1}^F m^f\int_i\nu_i^f\ell^f(di)}{(1-\beta)\sum_{f=1}^F m^f\int_i u'(x_i^f)\ell^f(di)}. \tag{64}
$$

The quantitative Ramsey program also transforms labor supply and progressivity and imposes
the implementability and market-clearing conditions (text pp. 29-31, equations 48-55):

$$
l_t=\left(\chi(1-\tau_t)w_t\right)^{1/(1/\varphi+\tau_t)},\qquad
\tilde\tau_t=\frac{(1/\varphi+1)(1-\tau_t)}{1/\varphi+\tau_t}. \tag{48,49}
$$

Here $$x_{i,t}^f=c_{i,t}^f-\chi^{-1}(l_{i,t}^f)^{1+1/\varphi}/(1+1/\varphi)$$. The planner maximizes
weighted discounted utility (50), subject to the transformed government budget (51),
individual budget and Euler equations (52-53), borrowing, complementary-slackness and
nonnegativity conditions (54), and asset/labor clearing (55). The planner's marginal social
value of liquidity and public funds (text pp. 31-32, equations 56-58) is:

$$
\max \sum_{f=1}^F m^f\omega^f\sum_{t=0}^{\infty}\beta^t\int_i u(x_{i,t}^f)\ell^f(di). \tag{50}
$$

$$
G_t+T_t+r_tA_{t-1}+\left(\frac{1}{\tilde\tau_t}+\frac{1}{1/\varphi+1}\right)
\frac{l_t^{1/\varphi+1}}{\chi}\sum_{f=1}^F m^f\int_i(y_{i,t}^f)^{\tilde\tau_t}\ell^f(di)
=F(A_{t-1}-B_{t-1},L_t)+B_t-B_{t-1}. \tag{51}
$$

$$
x_{i,t}^f=(1+r_t)a_{i,t-1}^f-a_{i,t}^f+
\frac{1}{\chi\tilde\tau_t}l_t^{1/\varphi+1}(y_{i,t}^f)^{\tilde\tau_t}. \tag{52}
$$

$$
u'(x_{i,t}^f)=\beta\mathbb{E}_t[(1+r_{t+1})u'(x_{i,t+1}^f)]+\nu_{i,t}^f. \tag{53}
$$

$$
a_{i,t}^f\geq-\bar a,\quad \nu_{i,t}^f(a_{i,t}^f+\bar a)=0,\quad
\nu_{i,t}^f\geq0,\quad x_{i,t}^f\geq0,\quad l_{i,t}^f\geq0. \tag{54}
$$

$$
A_t=\sum_{f=1}^F m^f\int_i a_{i,t}^f\ell^f(di),\quad
L_t=l_t\sum_{f=1}^F m^f\int_i(y_{i,t}^f)^{(1/\varphi+1+\tilde\tau_t)/(1/\varphi+1)}\ell^f(di). \tag{55}
$$

$$
\psi_{i,t}^f=\omega^f u'(x_{i,t}^f)-\left(\lambda_{i,t}^f-(1+r_t)\lambda_{i,t-1}^f\right)u''(x_{i,t}^f),\quad
\hat\psi_{i,t}^f=\mu_t-\psi_{i,t}^f,\quad
\hat\psi_{i,t}^f=\beta\mathbb{E}_t\left[(1+r_{t+1})\hat\psi_{i,t+1}^f\right]. \tag{56,57,58}
$$

The remaining main-text Ramsey first-order conditions set the unit labor-supply level and
progressivity (text pp. 32-33, equations 61-63). In the displays, integrals are over type-f
histories as in the source:

$$
\frac{1+1/\varphi}{\chi\tilde\tau_t}l_t^{1/\varphi+1}
\sum_{f=1}^F m^f\int_i\hat\psi_{i,t}^f(y_{i,t}^f)^{\tilde\tau_t}\ell(di)\ell^f(di)
=\mu_t\sum_{f=1}^F m^f\int_i\left[\frac{l_t^{1/\varphi+1}}{\chi}(y_{i,t}^f)^{\tilde\tau_t}
-(y_{i,t}^f)^{(1/\varphi+1+\tilde\tau_t)/(1/\varphi+1)}F_{L,t}l_t\right]\ell^f(di). \tag{61,62}
$$

$$
0=\frac{l_t^{1+1/\varphi}}{\chi\tilde\tau_t}\sum_{f=1}^F m^f\int_i\hat\psi_{i,t}^f(y_{i,t}^f)^{\tilde\tau_t}
\left(-\frac{1}{\tilde\tau_t}+\log y_{j,t}^f\right)\ell(di)
-\mu_t\frac{l_t}{1/\varphi+1}\sum_{f=1}^F m^f\int_i\log y_{j,t}^f
\left[\frac{l_t^{1/\varphi}}{\chi}(y_{i,t}^f)^{\tilde\tau_t}
-(y_{i,t}^f)^{(1/\varphi+1+\tilde\tau_t)/(1/\varphi+1)}F_{L,t}\right]\ell(di). \tag{63}
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
The paper does not estimate a regression: fixed effects and regression standard errors do
not apply. Its quantitative evidence comes from the calibrated equilibrium, inverse-optimal
recovery of three social-welfare weights, and deterministic MIT-shock simulations.

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
of GDP), calibrated to the same NPV of public spending (Panel 1, Figure 1, p. 53; discussion pp. 40-41).

For the analytical model, the stability bound and closed-form capital impulse response
(text pp. 25-26, equations 42-43) are:

$$
|\rho_K|<1\quad\Longleftrightarrow\quad\alpha\leq\frac{1}{1+(1-\beta)(1+\varphi)}. \tag{42}
$$

$$
\hat K_t=\sigma_K\hat G_0\frac{\rho_K^{t+1}-\rho_G^{t+1}}{\rho_K-\rho_G}. \tag{43}
$$

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

This page was extracted by an LLM (claude-sonnet-4-6) on 2026-06-26 and checked against the
source PDF by paper-verifier (gpt-6-luna) on 2026-10-04; it has not been independently
reproduced. Redistribution of the VOR is not permitted (paywalled); this page contains
extracted summaries only.

> Le Grand, François, and Xavier Ragot. "Optimal Fiscal Policy with Heterogeneous Agents
> and Capital: Should We Increase or Decrease Public Debt and Capital Taxes?"
> *Journal of Political Economy* 133, no. 7 (2025): 2320-2369.
> DOI: [10.1086/734877](https://doi.org/10.1086/734877).
