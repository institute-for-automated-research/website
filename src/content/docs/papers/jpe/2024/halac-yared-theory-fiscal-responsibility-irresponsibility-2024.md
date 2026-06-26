---
title: "Theory of Fiscal Responsibility and Irresponsibility: Halac & Yared (2024)"
description: >-
  Distilled: A political economy model in which successive deficit-biased governments
  facing private i.i.d. fiscal shocks endogenously cycle between a fiscally responsible
  regime (maximally enforced deficit limit) and a fiscally irresponsible regime (maximally
  enforced surplus limit), with transitions triggered by extreme shocks and only when
  governments' bias is large enough. Journal of Political Economy 133(5), May 2025,
  paywalled. Six core results with source locators, the full model, equilibrium programs,
  and the factorization algorithm.
sidebar:
  label: Halac-Yared 2024
  order: 1
tags: [paper-summary, macro, fiscal-policy, political-economy, public-finance,
       mechanism-design, peer-reviewed, unreplicated, data:fred]
paper:
  authors: Marina Halac, Pierre Yared
  authorList:
    - { family: Halac, given: Marina, affiliation: "Yale University and Center for Economic and Policy Research" }
    - { family: Yared, given: Pierre, affiliation: "Columbia University and National Bureau of Economic Research" }
  year: 2024
  venue: "Journal of Political Economy 133(5), May 2025, pp. 1574-1620"
  venueShort: J. Pol. Econ. 2024
  doi: 10.1086/734131
  jel:
    codes: [H63, D82, E62]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Fiscal Policies and Political Economy", "Fiscal Policy and Economic Growth", "Local Government Finance and Decentralization"]
  dataAccess: public
  outcome:
    - government fiscal regime (fiscally responsible vs. fiscally irresponsible)
    - government spending and borrowing level
    - social welfare from government spending
  outcomeClass: [macro-aggregates, optimal-contract-design]
  license: "Paywalled; copyright 2025 The University of Chicago, all rights reserved. Published by The University of Chicago Press."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (UChicago Press; not machine-fetchable without institutional subscription; checked 2026-06-26)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 3
  methods:
    role: theory
    family: theory
    buildsFrom: [repeated-game, mechanism-design, principal-agent, promised-utility-recursion]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, agency]
  scope:
    region: theoretical
    assetClass: sovereign bonds (government debt, theoretical model)
  relatesTo:
    - { cite: "Halac and Yared (2022)", doi: '10.3982/ecta16962', relation: extends, note: "fiscally responsible regime uses tools from their static fiscal-rules model with private information and full enforcement; current paper extends to dynamic self-enforcing setting with endogenous punishments" }
    - { cite: "Abreu, Pearce, and Stacchetti (1990)", doi: '10.2307/2938299', relation: builds-on, note: "factorization algorithm is analogous to their APS algorithm but adapted from below to an adverse-selection problem; convergence from the smallest rather than largest set" }
    - { cite: "Amador, Werning, and Angeletos (2006)", doi: '10.1111/j.1468-0262.2006.00666.x', relation: builds-on, note: "technique of substituting the envelope condition of the private-information constraint into the planner objective to derive the virtual welfare weight Q(theta)" }
    - { cite: "Battaglini and Coate (2008)", doi: '10.1257/aer.98.1.201', relation: cites, note: "related dynamic political economy model of government debt with Markov perfect equilibria; unlike current paper, no private government information" }
    - { cite: "Yared (2010)", doi: '10.1111/j.1467-937x.2009.00584.x', relation: cites, note: "related efficient sustainable equilibrium model; features more persistence than Markov but shocks are publicly observable, so private information is absent" }
  openQuestions:
    - "Quantitative analysis of how much introducing a deficit bias improves the fit of fiscal data relative to models without bias; requires richer fiscal instruments, persistent shocks, and discount-rate shocks (p. 1604)."
    - "Extending the model to governments whose deficit bias applies to multiple future periods, making the problem closer to repeated delegation rather than the current one-period bias (p. 1605)."
    - "Incorporating political parties with different policy preferences; the current model abstracts from party identity by assuming all governments share the same deficit bias alpha (p. 1605)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/RILKFJ", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1574-1620 of the PDF); six core results extracted with locators; model equations transcribed from sections II-V. Not human-verified. Not reproduced. Batch year parameter is 2024 (OpenAlex year); Crossref confirms formal issue as JPE vol. 133 no. 5 May 2025." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two errors fixed: (1) Eq. 11 first factor corrected from alpha*theta to alpha*underline-theta (the lower-bound type theta̲); (2) R3 threshold notation corrected from tilde-theta to bar-theta (the upper bound of the type space, as stated on PDF p. 1593). All six proposition locators, numerical calibration values in R6, equations 1-13 and 21-23, and the T(P) operator confirmed against the PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/734131", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license URL found in the Crossref works record; PDF title page states Copyright 2025 The University of Chicago all rights reserved Published by The University of Chicago Press; paper is paywalled." }
  rightsSignalConflict: false
---

**What this is.** The paper's core propositions, the equilibrium model, and the factorization method with the defining equations: enough to know what it found and how, without reading all 47 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1086/734131).

## TL;DR

The paper presents a political economy model of fiscal policy in which successive deficit-biased governments, each privately observing an i.i.d. shock to the social value of deficit-financed spending, interact dynamically. The best equilibrium for society is characterized by exactly two regimes: a fiscally responsible regime (a maximally enforced deficit limit that restrains overborrowing) and a fiscally irresponsible regime (a maximally enforced surplus limit that pushes governments to overborrow even more as punishment). Transitions between regimes are triggered by high enough fiscal shocks, and fiscal policy is therefore history-dependent even though shocks are i.i.d. Fiscal regimes arise only if governments' deficit bias is sufficiently large, providing a theoretical foundation for the empirical pattern that fiscal consolidations cluster at crisis periods. Related dynamic models by Battaglini and Coate (2008) and Yared (2010) feature observable shocks and Markov outcomes; private information and limited commitment together are what generate regime history-dependence here.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | **Two-Regime Bang-Bang**: in the best equilibrium with deficit bias and private information, continuation values jump to either the highest or lowest feasible value, inducing exactly two fiscal regimes | Proposition 1, p. 1588 | $$V_{t+1}(h^{t-1}, b_t) \in \{\underline{V}(b_t),\bar{V}(b_t)\}$$ at every on-path history; no interior continuation values in the best equilibrium |
| R2 | **Fiscally Responsible Regime = Deficit Limit**: the welfare-maximizing regime is a maximally enforced deficit limit; low-shock governments borrow at their flexible level, mid-shock governments are constrained at the limit, high-shock governments break the limit and trigger a transition to irresponsibility | Proposition 2, p. 1590; Figure 2 (left panel), p. 1591 | Three-threshold structure parameterized by $$\theta^*$$ and $$\theta^{**}$$: borrowing is at the limit $$b'(\omega,\theta^*)$$ for $$\theta \in [\theta^*,\theta^{**}]$$ and breaks the limit for $$\theta > \theta^{**}$$ |
| R3 | **Fiscally Irresponsible Regime = Surplus Limit**: the welfare-minimizing punishment regime is a maximally enforced surplus limit that induces all types to overborrow relative to their own preferred level; high-shock governments borrow flexibly, mid-shock governments are constrained, low-shock governments break the limit and return to responsibility; regime is always temporary | Proposition 3, p. 1592; Figure 2 (right panel), p. 1591 | Surplus limit threshold satisfies $$\theta_n^{**} < \bar{\theta}$$, ensuring that government types $$\theta \in [\theta_n^{**}, \bar{\theta}]$$ respect the surplus limit with positive probability, so the fiscally irresponsible regime is never absorbing |
| R4 | **Regime Transitions at Crises**: transitions from fiscal responsibility to irresponsibility occur when a shock exceeds $$\theta^{**}$$; transitions from irresponsibility to responsibility occur when a shock is at least $$\theta_n^{**}$$; fiscal policy depends on history, not just current conditions | Section IV.E, pp. 1594-1595 | Starting in the responsible regime: $$\theta_t \leq \theta^{**}$$ keeps the economy responsible at $$t+1$$; $$\theta_t > \theta^{**}$$ triggers irresponsibility. Starting in the irresponsible regime: $$\theta_t \geq \theta_n^{**}$$ triggers return to responsibility |
| R5 | **Deficit Bias Threshold for Fiscal Regimes** (analytical example, log utility): fiscal regimes arise if and only if governments' deficit bias $$\alpha$$ exceeds a threshold $$\bar{\alpha}$$ and the discount factor $$\delta$$ exceeds a threshold $$\tilde{\delta}$$; the Markov equilibrium is unique when bias is small | Proposition 4, p. 1597; Corollary 1, p. 1598 | Threshold $$\bar{\alpha} \in (1,\infty)$$ is decreasing in $$\delta$$; fiscal regimes exist iff $$T'(0) > 1$$, which holds iff $$\alpha > \bar{\alpha}$$; transitions occur on path iff $$\alpha \in (\bar{\alpha}, \tilde{\alpha})$$ for some $$\tilde{\alpha} > \bar{\alpha}$$ |
| R6 | **Numerical Simulation** (calibrated to US data, 1970-2020): simulated fiscal path shows two extended shaded periods of fiscal irresponsibility; best-equilibrium spending is constrained below the flexible Markov level during responsible periods and exceeds the first-best during irresponsible periods | Figure 4, p. 1602 | Parameters: $$\alpha = 1.151$$, $$\delta = 0.943$$, lognormal shocks (mean 0, $$\sigma = 0.175$$), $$R = 1.05$$. Deficit limit threshold = 0.0736 (flexible spending rate of $$\theta^*$$); surplus limit threshold = 0.0867 (flexible spending rate of $$\theta_n^*$$) |

**Overall (paper's conclusion).** The same deficit bias that leads governments to overaccumulate debt is also the key factor behind the emergence of fiscal regimes: when bias is large enough and the discount factor is high enough, the threat of fiscal irresponsibility in the future makes fiscal responsibility in the present sustainable. Regime transitions are punctuated by crises, and fiscal policy depends on the history of past decisions, consistent with econometric evidence of two-regime fiscal dynamics documented for the United States and the European Union.

## Theory / model

The model is an infinite-horizon small open economy with periods $$t = \{0, 1, \ldots\}$$ in which a new government takes power each period (§II.A, p. 1581). At the beginning of period t, an i.i.d. shock to the social value of spending is drawn from:

$$\theta_t \in \Theta \equiv [\underline{\theta}, \bar{\theta}], \quad f(\theta) > 0, \quad F(\cdot) \text{ its CDF}$$

The shock is privately observed by the government in power at date t (its "type"). The **government budget constraint** (eq. 1, p. 1581) is:

$$g_t = \tau - Rb_{t-1} + b_t \tag{1}$$

where $$\tau > 0$$ is exogenous tax revenue, $$R > 1$$ is the exogenous gross interest rate on government bonds, $$b_t \geq 0$$ is new borrowing, and $$g_t \geq 0$$ is government spending. Letting $$\omega(h^{t-1}) \equiv \tau - Rb_{t-1}(h^{t-1})$$ denote available resources given inherited debt, spending satisfies $$g_t = \omega + b_t$$.

**Social welfare** at date t (p. 1581):

$$V_t = \mathbb{E}_t\!\left[\sum_{k=0}^{\infty} \delta^k \theta_{t+k} U(g_{t+k})\right] = \mathbb{E}_t\!\left[\theta_t U(g_t) + \delta V_{t+1}\right]$$

where $$\delta \in (0,1)$$ is the social discount factor and $$U(\cdot)$$ is strictly increasing and strictly concave. A large shock $$\theta_t$$ represents a high social value of deficit-financed spending, as in an economic crisis.

**Government welfare** at date t (eq. 2, p. 1582):

$$W_t = \alpha \theta_t U(g_t) + \delta V_{t+1} \tag{2}$$

where $$\alpha > 1$$ is the **deficit bias**: the government overvalues current utility of spending relative to society by a factor $$\alpha$$, capturing private benefits from directing resources to preferred spending categories or constituencies (Aguiar and Amador 2011). Crucially, the government at date t shares society's preferences from date $$t+1$$ onward.

There are three frictions: (i) deficit bias ($$\alpha > 1$$), (ii) private information ($$\theta_t$$ observed only by the period-t government), and (iii) limited commitment (no external enforcement; only future equilibrium behavior can reward or punish). Lemma 1 (p. 1586) shows that either deficit bias or private information alone is insufficient to generate history dependence: both frictions together are necessary.

**Equilibrium** (§II.B, p. 1582-1583). A strategy for the period-t government is $$\sigma_t(h^{t-1}, \theta_t)$$: a feasible debt level for each public history $$h^{t-1} = \{b_{-1}, b_0, \ldots, b_{t-1}\}$$ and type $$\theta_t$$. Two incentive constraints must hold for all histories:

*Private information constraint* (eq. 3, p. 1583): for all $$\theta, \theta' \in \Theta$$,

$$\alpha\theta U(\omega + b(\theta)) + \delta V(b(\theta)) \geq \alpha\theta U(\omega + b(\theta')) + \delta V(b(\theta')) \tag{3}$$

*Limited commitment constraint* (eq. 4, p. 1583): for all $$\theta \in \Theta$$ and all $$b'_t$$ not prescribed for any type,

$$\alpha\theta U(\omega + b(\theta)) + \delta V(b(\theta)) \geq \alpha\theta U(\omega + b'_t) + \delta V(b'_t) \tag{4}$$

Given debt is bounded and shocks i.i.d., there exist highest and lowest continuation values $$\bar{V}(b)$$ and $$\underline{V}(b)$$ achievable in equilibrium from debt level b. The government's **flexible borrowing** conditional on the worst punishment is (eq. 5, p. 1584):

$$b^p(\omega,\theta) \in \arg\max_{b \in [\underline{b},\bar{b}]} \{\alpha\theta U(\omega + b) + \delta \underline{V}(b)\}$$

A necessary condition for the limited commitment constraint (4) to hold is (eq. 6, p. 1584):

$$\alpha\theta U(\omega + b(\theta)) + \delta V(b(\theta)) \geq \alpha\theta U(\omega + b^p(\omega,\theta)) + \delta \underline{V}(b^p(\omega,\theta)) \tag{6}$$

Constraints (3) and (6) are necessary and sufficient for a debt sequence to be supported by equilibrium strategies.

**Best equilibrium recursive program** ($$\mathcal{P}_{\max}$$, §II.C, p. 1584-1585):

$$\bar{V}(b_{-1}) = \max_{b(\theta),\, V(b(\theta))} \mathbb{E}[\theta U(\omega + b(\theta)) + \delta V(b(\theta))] \tag{$\mathcal{P}_{\max}$}$$

subject to private information (7), limited commitment (8), and feasibility (9): $$b(\theta) \in [\underline{b}(b_{-1}), \bar{b}(b_{-1})]$$ and $$V(b(\theta)) \in [\underline{V}(b(\theta)), \bar{V}(b(\theta))]$$ for all $$\theta \in \Theta$$. The **worst-case program** $$\mathcal{P}_{\min}$$ minimizes welfare subject to the same constraints, yielding $$\underline{V}(b_{-1})$$. Assumption 1 (p. 1585) ensures these value functions are continuously differentiable and concave with $$\bar{V}(b) > \underline{V}(b)$$; this holds for CARA and CRRA preferences.

**Virtual welfare rewrite** (§IV.A, p. 1587). Following Amador, Werning, and Angeletos (2006), substituting the envelope condition of the private-information constraint into the objective of $$\mathcal{P}_{\max}$$ yields the virtual welfare representation (eq. 11, p. 1587):

$$\alpha\underline{\theta} U(\omega + b(\underline{\theta})) + \delta V(b(\underline{\theta})) + \alpha \int_{\underline{\theta}}^{\bar{\theta}} U(\omega + b(\theta)) Q(\theta)\, d\theta \tag{11}$$

where the **virtual welfare weight** is:

$$Q(\theta) \equiv 1 - F(\theta) - \theta f(\theta)\!\left(1 - \tfrac{1}{\alpha}\right)$$

The first term $$1 - F(\theta)$$ is the standard virtual surplus from mechanism design (Myerson 1981); the second term $$-\theta f(\theta)(1 - 1/\alpha)$$ captures society's cost of prescribing higher borrowing when governments are biased. Assumption 2 (p. 1589) requires $$Q'(\theta) < 0$$ for $$\theta < \hat{\theta}$$ and $$Q'(\theta) > 0$$ for $$\theta > \hat{\theta}$$, which holds for uniform, exponential, lognormal, gamma, and beta distributions over a range of parameters.

## Method

**Recursive representation** (§II.C, p. 1584). Because shocks are i.i.d. and debt is bounded, the best equilibrium can be characterized via a static per-period optimization ($$\mathcal{P}_{\max}$$ above) by assigning each type $$\theta$$ a debt level $$b(\theta)$$ and a continuation value $$V(b(\theta))$$ drawn from the feasible set $$[\underline{V}(b),\bar{V}(b)]$$. The per-period problem embeds the infinite-horizon structure entirely through the continuation value set. This recursive representation uses the `promised-utility-recursion` technique generalized to the Markovian adverse-selection setting.

**Bang-bang structure** (Proposition 1, p. 1588). Perturbation arguments on $$\mathcal{P}_{\max}$$ show that interior continuation values are suboptimal: for any solution with interior $$V(b(\theta))$$, there is a perturbation that either compresses borrowing (when $$Q'(\theta) < 0$$) or steepens it (when $$Q'(\theta) > 0$$), strictly increasing social welfare. Hence the optimal continuation values take only the two extreme values $$\{\underline{V}(b),\bar{V}(b)\}$$. The proof uses the `mechanism-design` and `principal-agent` perturbation technique from Halac and Yared (2022), extended to the dynamic limited-commitment setting.

**Maximally enforced limits** (Propositions 2-3, pp. 1590, 1592). Given the bang-bang property, the best equilibrium prescribes a threshold structure. For the fiscally responsible regime ($$\mathcal{P}_{\max}$$), the solution satisfies (eq. 12, p. 1590):

$$\bigl(b(\theta), V(b(\theta))\bigr) = \begin{cases} \bigl(b'(\omega,\theta),\, \bar{V}(b'(\omega,\theta))\bigr) & \text{if } \theta < \theta^*, \\ \bigl(b'(\omega,\theta^*),\, \bar{V}(b'(\omega,\theta^*))\bigr) & \text{if } \theta \in [\theta^*,\theta^{**}], \\ \bigl(b^p(\omega,\theta),\, \underline{V}(b^p(\omega,\theta))\bigr) & \text{if } \theta > \theta^{**}, \end{cases} \tag{12}$$

where $$b'(\omega,\theta) \equiv \arg\max_{b} \{\alpha\theta U(\omega+b) + \delta\bar{V}(b)\}$$ is the flexible borrowing conditional on the highest continuation value. The limited commitment constraint binds with equality at the threshold type $$\theta^{**}$$ (eq. 13, p. 1590):

$$\alpha\theta^{**} U(\omega + b'(\omega,\theta^*)) + \delta\bar{V}(b'(\omega,\theta^*)) = \alpha\theta^{**} U(\omega + b^p(\omega,\theta^{**})) + \delta\underline{V}(b^p(\omega,\theta^{**})) \tag{13}$$

The fiscally irresponsible regime ($$\mathcal{P}_{\min}$$, Proposition 3) takes the mirror form: a maximally enforced surplus limit at $$b'(\omega,\theta_n^*)$$, with high types $$\theta > \theta_n^*$$ borrowing at their flexible level, mid-types constrained at the surplus limit, and low types $$\theta < \theta_n^{**}$$ breaking the limit and returning to the responsible regime.

**Factorization algorithm** (§V.C, p. 1599-1600). In the analytical example with $$U(\cdot) = \log(\cdot)$$, the gap between highest and lowest value functions is constant in debt: $$\bar{V}(b) - \underline{V}(b) = P^*$$ for some $$P^* \geq 0$$ (eq. 17, p. 1596). The equilibrium with fiscal regimes corresponds to the largest fixed point of the operator $$T(P)$$, which computes the largest self-enforceable punishment today given a punishment of size P available tomorrow (eq. 21, p. 1599):

$$T(P) = \max_{\theta^*, \theta^{**}, \theta_n^*, \theta_n^{**}} \left\{ \delta P + \alpha \!\left[ \int_{\theta^*}^{\theta^{**}} \!\bigl(U(g^f(\theta^*)) - U(g^f(\theta))\bigr) Q(\theta)\, d\theta - \int_{\theta_n^{**}}^{\theta_n^*} \!\bigl(U(g^f(\theta_n^*)) - U(g^f(\theta))\bigr) Q(\theta)\, d\theta \right] \right\} \tag{21}$$

subject to limited commitment binding at the deficit and surplus thresholds (eqs. 22-23, p. 1599):

$$\delta P \geq \alpha \int_{\theta^*}^{\theta^{**}} \bigl[U(g^f(\theta)) - U(g^f(\theta^*))\bigr]\, d\theta \tag{22}$$

$$\delta P \geq \alpha \int_{\theta_n^{**}}^{\theta_n^*} \bigl[U(g^f(\theta_n^*)) - U(g^f(\theta))\bigr]\, d\theta \tag{23}$$

where $$g^f(\theta) \equiv b'(\omega,\theta) + \omega$$ is the flexible spending level. The operator $$T$$ is increasing and concave with $$T(0) = 0$$ and $$\lim_{P\to\infty} T'(P) < 1$$. A positive fixed point $$P^* > 0$$ with $$T(P^*) = P^*$$ exists if and only if $$T'(0) > 1$$, which is the condition for fiscal regimes. This algorithm is analogous to Abreu, Pearce, and Stacchetti (1990) but applies from below (starting at the Markov outcome $$P = 0$$) rather than from above; this difference is key for finding a condition for the fixed point to exceed the Markov outcome (p. 1600-1601).

## Empirical specifications

The paper's main results are theoretical (no empirical estimation). Section V.D (p. 1601-1603) presents a **numerical simulation** to illustrate regime dynamics.

**Parameter calibration.** Parameters are chosen so that the mean and variance of the flexible spending rate match the mean and variance of US government spending over 1970-2020, using data on federal debt, receipts, and outlays from the Federal Reserve Bank of St. Louis (FRED, cited p. 1601):
- Lognormal shock distribution: mean 0, variance $$\sigma = 0.175$$, truncated to support $$[\underline{\theta}, \bar{\theta}] = [0.01, 100.01]$$
- Social discount factor: $$\delta = 0.943$$
- Gross interest rate: $$R = 1.05$$
- Deficit bias: $$\alpha = 1.151$$, calibrated so that $$1/\alpha \approx 0.87$$ corresponds to a reelection probability implying average government duration of 7.6 years, matching the average time the same party held the US presidency from 1944 to 2020 (footnote 26, p. 1601)

**Simulation results.** The factorization algorithm, applied to these parameters, yields a unique best equilibrium with fiscal regimes. The implied thresholds are:
- Deficit limit threshold: flexible spending rate of type $$\theta^* = 0.0736$$
- Surplus limit threshold: flexible spending rate of type $$\theta_n^* = 0.0867$$

Figure 4 (p. 1602) plots the simulated best-equilibrium spending rate alongside the first-best and flexible (Markov) rates. Two extended shaded periods (fiscal irresponsibility) are visible. During fiscally responsible periods, the best-equilibrium rate coincides with the flexible rate when the latter is below the deficit limit, and is constrained at the threshold when the flexible rate slightly exceeds it; for high enough shocks the government breaks the limit and the shaded irresponsible period begins. During irresponsible periods, the best-equilibrium rate coincides with the flexible rate when above the surplus limit, and is constrained at the threshold otherwise; sufficiently low shocks break the surplus limit, ending the irresponsible episode.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| FRED (Federal Reserve Bank of St. Louis): US federal debt, receipts, outlays | Calibration targets for flexible spending rate mean and variance (1970-2020, annual) | [FRED](/wiki/datasets/fred/) |

Sample: United States, 1970-2020, annual frequency, for calibration only. The paper's main propositions are theoretical and hold for any economy satisfying Assumptions 1 and 2.

## When to read the full paper

Use the [original](https://doi.org/10.1086/734131) if you are:
working on dynamic mechanism design with adverse selection and limited commitment (Appendices A-C contain the formal perturbation proofs for Propositions 1-3);
applying or extending the factorization algorithm to other games with one-dimensional state and adverse-selection incentive constraints (§V.C);
studying the theoretical foundations for observed fiscal consolidation patterns and the role of political biases in driving debt accumulation;
or connecting the model to quantitative fiscal analysis (the paper's conclusion §VI identifies key extensions: persistent shocks, richer fiscal instruments, and multiple-period government bias).

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(5), May 2025, pp. 1574-1620. Copyright 2025 The University of Chicago. All rights reserved. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The paper is paywalled; the PDF is not hosted here. Extract only.

> Halac, Marina, and Pierre Yared. "A Theory of Fiscal Responsibility and Irresponsibility."
> *Journal of Political Economy* 133, no. 5 (May 2025): 1574-1620.
> DOI: 10.1086/734131.
