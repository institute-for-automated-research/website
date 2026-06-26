---
title: "Adaptive Maximization of Social Welfare: Cesa-Bianchi, Colomboni & Kasy (2025)"
description: >-
  Distilled: A policymaker repeatedly setting a tax rate to maximize social welfare
  (weighted sum of public revenue and private consumer surplus) cannot observe welfare
  directly, only demand outcomes; cumulative regret must grow at rate T^{2/3} (vs
  T^{1/2} for standard bandits), and Tempered Exp3 achieves this bound while Dyadic
  Search recovers T^{1/2} under concavity. Econometrica 2025, CC BY 4.0. Six core
  results with source locators, the setup model, and both algorithms with equations.
sidebar:
  label: Cesa-Bianchi-Colomboni-Kasy 2025
  order: 1
tags: [paper-summary, optimal-taxation, online-learning, public-economics, social-welfare,
       theory, open-access, cc-by, peer-reviewed, unreplicated]
paper:
  authors: Nicolò Cesa-Bianchi, Roberto Colomboni, Maximilian Kasy
  authorList:
    - { family: Cesa-Bianchi, given: Nicolò, orcid: "0000-0001-8477-4748", affiliation: "Università degli Studi di Milano and Politecnico di Milano" }
    - { family: Colomboni, given: Roberto, orcid: "0000-0001-9890-9543", affiliation: "Università degli Studi di Milano and Politecnico di Milano" }
    - { family: Kasy, given: Maximilian, orcid: "0000-0002-8679-5179", affiliation: "University of Oxford" }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 3 (May 2025), 1073-1104"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA22351
  jel:
    codes: [C61, H21, C73]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Advanced Bandit Algorithms Research", "Economic theories and models"]
  dataAccess: public
  outcome:
    - cumulative regret in adaptive policy choice for social welfare maximization
    - optimal regret rate under adversarial and stochastic preference sequences
  outcomeClass: [social-welfare]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version unspecified, URL https://creativecommons.org/licenses/by/4.0/, start 2025-01-01; corroborated by artifact p. 1073 Creative Commons Attribution License notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC-BY 4.0 (Wiley/Econometrica; licence confirmed in Crossref metadata, 2026-06-26)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 6
  citedByCount: 2
  methods:
    role: both
    contributes: tempered-exp3-social-welfare
    family: theory
    buildsFrom: [exp3-bandit-algorithm, dyadic-search]
    identification: descriptive
  contributionType: [new-theory, new-method]
  mechanisms: [learning, information-asymmetry]
  scope:
    region: theoretical
  findings:
    - { ref: R1, outcome: "cumulative regret in social welfare maximization", metric: regret-rate, value: "lower bound C*T^{2/3} for any randomized algorithm (stochastic and adversarial)", direction: positive, vsBenchmark: "T^{2/3} vs T^{1/2} for monopoly pricing (finite policy sets); welfare harder than standard bandits" }
    - { ref: R2, outcome: "adversarial (and stochastic) regret of Tempered Exp3", metric: regret-rate, value: "c4*log(T)^{1/3}*T^{2/3} with optimal tuning (Theorem 2, Eq. 11)", direction: positive, vsBenchmark: "matches lower bound up to log(T)^{1/3} factor; rate-optimal" }
    - { ref: R3, outcome: "stochastic regret lower bound for concave social welfare", metric: regret-rate, value: "lower bound C*T^{1/2} (Theorem 3)", direction: positive, vsBenchmark: "matches multiarmed bandit rate; concavity enables improvement over T^{2/3}" }
    - { ref: R4, outcome: "stochastic regret of Dyadic Search for concave welfare", metric: regret-rate, value: "order T^{1/2} up to log terms (Theorem 4)", direction: positive, vsBenchmark: "rate-optimal for stochastic concave case; matches Theorem 3 lower bound" }
    - { ref: R5, outcome: "adversarial regret for nonlinear income taxation with H wage brackets", metric: regret-rate, value: "c4*H^{1/3}*log(T)^{1/3}*T^{2/3} (Theorem 5, Eq. 24)", direction: positive, vsBenchmark: "scales as H^{1/3} in number of tax brackets H" }
    - { ref: R6, outcome: "relative difficulty of welfare maximization vs. monopoly pricing", metric: regret-rate, value: "T^{2/3} vs T^{1/2} for finite policy sets (Table I, p. 1080); bilateral trade finite rate is T^{2/3}, continuous rate is T", direction: positive, vsBenchmark: "welfare maximization strictly harder than monopoly pricing due to integral counterfactual demand structure" }
  resultType: new-finding
  relatesTo:
    - { cite: "Auer, Cesa-Bianchi, Freund & Schapire (2002)", relation: builds-on, note: "Tempered Exp3 modifies their Exp3 algorithm for the nonstochastic bandit to handle indirect welfare estimation via inverse-probability-weighted demand" }
    - { cite: "Kleinberg and Leighton (2003)", relation: builds-on, note: "establishes T^{1/2} rate for monopoly pricing with bandit feedback; paper shows welfare maximization requires T^{2/3}" }
    - { cite: "Mirrlees (1971)", relation: cites, note: "optimal income tax theory; Section 5 generalizes to nonlinear income taxation with heterogeneous wages and welfare weights" }
    - { cite: "Saez (2001)", relation: cites, note: "elasticity-based optimal income tax rates; paper replaces static structural estimation with adaptive policy learning" }
    - { cite: "Ramsey (1927)", relation: cites, note: "commodity taxation model; Section 6 sketches an extension to multi-good commodity taxation" }
    - { cite: "Chetty (2009)", relation: cites, note: "sufficient statistics for welfare analysis; the envelope-theorem welfare representation underpins the algorithmic welfare estimator" }
    - { cite: "Lattimore and Szepesvari (2020)", relation: builds-on, note: "bandit algorithms textbook providing the T^{1/2} multiarmed bandit baseline that the paper shows welfare maximization exceeds" }
  openQuestions:
    - "Whether the log(T)^{1/3} gap between the T^{2/3} lower bound and the algorithm's log(T)^{1/3}*T^{2/3} upper bound can be closed; authors conjecture a Tsallis-INF variant may achieve this at the cost of computational complexity (p. 1085)."
    - "Formal regret analysis and lower bounds for the commodity taxation extension (Algorithm 4, Section 6); characterization left for future research (p. 1093)."
    - "Extension to settings with income effects or externalities, which would require modifying the welfare representation and the algorithms (p. 1094)."
    - "Formal analysis of Thompson sampling variants for this welfare-maximization setting; conjectured to underexplore relative to Tempered Exp3 without forced uniform mixing (p. 1095)."
  replicationCode:
    url: https://doi.org/10.5281/zenodo.15042114
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1073-1104 including Appendix A); six results extracted from the CC-BY PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) Eq. 1 corrected from mixed-subscript U_i(x) form to the PDF's U_i(x_i) with consistent x_i throughout; (2) R6 magnitude corrected: bilateral trade finite-policy-set rate is T^{2/3} per Table I, not T (T is the continuous rate)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ECTA22351", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=unspecified, URL=https://creativecommons.org/licenses/by/4.0/, start=2025-01-01" }
---

**What this is.** The paper's core results, the social welfare setup, and the two algorithms (Tempered Exp3 for Social Welfare and Dyadic Search) with their defining equations: enough to understand what was proved and how, without reading all 32 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.3982/ECTA22351).

## TL;DR

A policymaker repeatedly sets a tax rate $$x_i \in [0,1]$$ to maximize social welfare (a weighted sum of public revenue and private consumer surplus). Welfare is not observed: after setting $$x_i$$, only the binary demand decision $$y_i = \mathbf{1}(x_i \leq v_i)$$ is revealed, where $$v_i$$ is the individual's unobserved willingness to pay. The paper shows this is harder than monopoly pricing or standard multiarmed bandits: any algorithm must suffer cumulative regret of order $$T^{2/3}$$, because welfare depends on integrated demand over counterfactual (suboptimal) tax rates that must be actively explored. The paper proposes Tempered Exp3 for Social Welfare, achieving $$c \cdot \log(T)^{1/3} T^{2/3}$$ adversarial regret (matching the lower bound up to a log factor), and Dyadic Search, achieving $$T^{1/2}$$ in the stochastic setting when welfare is concave. Extensions to nonlinear income taxation (Section 5) and commodity taxation (Section 6) are developed.

## Core results

Rates hold up to logarithmic factors unless stated. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Lower bound on regret**: any randomized algorithm must suffer cumulative regret of order $$T^{2/3}$$ for both stochastic and adversarial preference sequences | Theorem 1, p. 1081 | $$\mathcal{R}_T \geq C \cdot T^{2/3}$$ for a constant $$C > 0$$; holds for finite and continuous policy sets, unlike standard bandits ($$T^{1/2}$$) |
| R2 | **Upper bound for Tempered Exp3**: with optimal tuning, adversarial (and stochastic) regret is bounded by $$c_4 \log(T)^{1/3} T^{2/3}$$ | Theorem 2, Corollary 1, Eq. 11, p. 1084 | $$\mathcal{R}_T \leq c_4 \cdot \log(T)^{1/3} T^{2/3}$$; matches lower bound up to $$\log(T)^{1/3}$$ |
| R3 | **Concave case lower bound**: stochastic regret cannot grow slower than $$T^{1/2}$$ when social welfare is concave | Theorem 3, p. 1086 | $$\mathcal{R}_T(\mathbf{G}) \geq C \cdot T^{1/2}$$; matches the multiarmed bandit rate |
| R4 | **Dyadic Search achieves $$T^{1/2}$$** for stochastic concave welfare via active interval narrowing | Theorem 4, p. 1086 | Order $$T^{1/2}$$ (up to log terms); rate-optimal for stochastic concave case |
| R5 | **Income taxation extension**: Tempered Exp3 adapted to $$H$$ wage brackets achieves adversarial regret of order $$H^{1/3} \log(T)^{1/3} T^{2/3}$$ | Theorem 5, Eq. 24, p. 1092 | $$\mathcal{R}_T \leq c_4 \cdot H^{1/3} \log(T)^{1/3} T^{2/3}$$ for $$H$$ tax brackets |
| R6 | **Welfare is harder than monopoly pricing**: for finite policy sets, monopoly pricing achieves $$T^{1/2}$$ while optimal taxation requires $$T^{2/3}$$ | Table I, p. 1080 | $$T^{1/2}$$ (monopoly pricing, finite) vs $$T^{2/3}$$ (optimal taxation, finite) vs $$T^{2/3}$$ (bilateral trade, finite; continuous rate is $$T$$) |

**Overall (paper's conclusion).** Welfare maximization is a strictly harder adaptive learning problem than reward maximization in standard bandits, because welfare depends on the integral of demand over counterfactual policies. The $$T^{2/3}$$ rate is sharp (lower and upper bounds coincide up to $$\log(T)^{1/3}$$). Concavity of welfare restores the $$T^{1/2}$$ bandit rate. The algorithms are adversarially robust and apply to public policy settings where behavioral responses (demand, labor supply) are observable but utility is not.

## Theory / model

**Setup.** Each period $$i = 1, 2, \dots, T$$, one individual arrives with unknown willingness to pay $$v_i \in [0, 1]$$. The policymaker sets a tax rate $$x_i \in [0, 1]$$ and observes the binary demand decision $$y_i = \mathbf{1}(x_i \leq v_i)$$. Define $$G_i(x) = \mathbf{1}(v_i \geq x)$$. Social welfare in period $$i$$ at the chosen tax rate $$x_i$$ is (Eq. 1, p. 1078):

$$
U_i(x_i) = \underbrace{x_i \cdot \mathbf{1}(x_i \leq v_i)}_{\text{Public revenue}} + \lambda \cdot \underbrace{\max(v_i - x_i,\, 0)}_{\text{Private welfare}} \tag{1}
$$

with $$\lambda \in (0, 1)$$ the welfare weight on private utility. Private welfare equals consumer surplus (integrated demand), so social welfare rewrites as (Eq. 2, p. 1078):

$$
U_i(x) = \underbrace{x \cdot G_i(x)}_{\text{Public revenue}} + \lambda \cdot \underbrace{\int_x^1 G_i(x')\,\mathrm{d}x'}_{\text{Private welfare}} \tag{2}
$$

Evaluating welfare at a counterfactual policy $$x \neq x_i$$ requires knowing integrated demand over $$[x, 1]$$, which must be learned by sampling suboptimal tax rates. This integral term makes the problem harder than monopoly pricing, where the objective $$U_i^{\text{MP}}(x) = x \cdot G_i(x)$$ requires only pointwise demand (Kleinberg and Leighton (2003)).

**Regret.** In the adversarial case, cumulative expected regret is (Eq. 3, p. 1078):

$$
\mathcal{R}_T\!\left(\{v_i\}_{i=1}^T\right) = \sup_{x}\, E\!\left[\mathbb{U}_T(x) - \mathbb{U}_T \,\big|\, \{v_i\}_{i=1}^T\right] \tag{3}
$$

where $$\mathbb{U}_T(x) = \sum_{i \leq T} U_i(x)$$ is cumulative welfare for fixed policy $$x$$, and $$\mathbb{U}_T = \sum_{i \leq T} U_i(x_i)$$ is welfare achieved by the algorithm. In the stochastic case, $$v_i \overset{\text{i.i.d.}}{\sim} \mu$$, the demand function is $$\mathbf{G}(x) = P(v_i \geq x) = E[y_i | x_i = x]$$, and cumulative regret is (Eq. 4, p. 1079):

$$
\mathcal{R}_T(\mathbf{G}) = T \cdot \sup_x \mathbf{U}(x) - E\!\left[\sum_{i \leq T} U(x_i)\right] \tag{4}
$$

**Lower bound (Theorem 1, p. 1081).** The proof constructs a family of distributions $$\{\mu^\epsilon\}_{\epsilon \in [-1,1]}$$ for $$v_i$$ with four-point support $$\{1/4, 1/2, 3/4, 1\}$$. Depending on the sign of $$\epsilon$$, the optimal policy is $$x^* = 1$$ or $$x^* = 1/4$$. Distinguishing the two requires sampling from the intermediate interval $$[1/2, 3/4]$$, which incurs regret of order $$|\epsilon|^{-2}$$. Minimizing over $$\epsilon \propto T^{-1/3}$$ gives the $$T^{2/3}$$ lower bound. The adversarial lower bound follows since worst-case regret dominates average-case regret.

**Comparison of learning problems (Table I, p. 1080).** The rate hierarchy is: monopoly pricing (Kleinberg and Leighton (2003)) achieves $$T^{1/2}$$ because its objective is one-sided Lipschitz and requires only pointwise demand; optimal taxation requires $$T^{2/3}$$ because welfare also depends on integrated demand for counterfactual policies; bilateral trade (Cesa-Bianchi, Cesari, Colomboni, Fusco, and Leonardi (2024a)) has rate $$T$$ because its objective is not one-sided Lipschitz. Mirrlees (1971) and Saez (2001) treat income tax design as a static structural problem; this paper adapts it to adaptive online learning. Ramsey (1927) commodity taxation is the basis for the Section 6 extension. Chetty (2009) establishes the sufficiency of the envelope-theorem welfare representation for arbitrary preference structures beyond the binary baseline. Lattimore and Szepesvari (2020) provide the $$T^{1/2}$$ multiarmed bandit baseline.

## Method

The paper proposes two algorithms. Algorithm 1 handles the general (possibly adversarial, nonconcave) case; Algorithm 2 exploits concavity in the stochastic case.

**Algorithm 1: Tempered Exp3 for Social Welfare.** The continuous policy space $$[0,1]$$ is discretized to $$K+1$$ evenly spaced grid points $$\tilde{x}_k = (k-1)/K$$. Three modifications are made relative to standard Exp3 (Auer, Cesa-Bianchi, Freund and Schapire (2002)) for the nonstochastic bandit:

1. Discretize $$[0,1]$$ to $$K+1$$ arms.
2. Estimate welfare indirectly via inverse-probability-weighted demand, since $$U_i(x)$$ is not directly observed.
3. Use a larger uniform exploration weight $$\gamma$$ than standard Exp3 to ensure sufficient sampling of suboptimal policies needed to estimate the integral term in $$U_i(x)$$.

Assignment probability for arm $$k$$ at period $$i$$ (Eq. 7, p. 1083):

$$
p_{ik} = (1 - \gamma) \cdot \frac{\exp(\eta \cdot \hat{\mathbb{U}}_{ik})}{\displaystyle\sum_{k'} \exp(\eta \cdot \hat{\mathbb{U}}_{ik'})} + \frac{\gamma}{K+1} \tag{7}
$$

where $$\eta$$ is the learning rate and $$\hat{\mathbb{U}}_{ik}$$ is the running cumulative welfare estimate at arm $$k$$. Demand at grid point $$k$$ is updated via inverse probability weighting after observing $$y_i$$ (Eq. 8, p. 1083):

$$
\hat{\mathbb{G}}_{i+1,k} = \hat{\mathbb{G}}_{i,k} + y_i \cdot \frac{\mathbf{1}(k_i = k)}{p_{ik}} \tag{8}
$$

Welfare at arm $$k$$ is estimated using a step-function approximation to the integral term (Eq. 9, p. 1083):

$$
\hat{\mathbb{U}}_{i+1,k} = \tilde{x}_k \cdot \hat{\mathbb{G}}_{i+1,k} + \frac{\lambda}{K} \cdot \sum_{k' > k} \hat{\mathbb{G}}_{i+1,k'} \tag{9}
$$

**Theorem 2 + Corollary 1 (Adversarial and stochastic upper bound, p. 1083-1084).** With optimal tuning $$\gamma = c_1 (\log(T)/T)^{1/3}$$, $$\eta = c_2 \gamma^2$$, $$K = \lfloor c_3/\gamma \rfloor$$, expected regret is bounded above by (Eq. 11, p. 1084):

$$
\mathcal{R}_T \leq c_4 \cdot \log(T)^{1/3} T^{2/3} \tag{11}
$$

The same bound applies to stochastic regret (Corollary 1). Combined with Theorem 1, the bound is rate-optimal up to $$\log(T)^{1/3}$$.

**Algorithm 2: Dyadic Search for Social Welfare.** For the stochastic concave case (Section 4, p. 1086), the algorithm maintains an active interval $$I_\tau \subseteq [0,1]$$ that contains the optimal policy with probability at least $$1 - \delta$$. In each epoch $$\tau$$, it selects three points $$l, c, r$$ (left, center, right) from a dyadic grid (points of the form $$k/2^m$$) inside $$I_\tau$$, and forms estimates of welfare differences. The welfare difference between policies $$x < x'$$ is:

$$
\Delta(x, x') = \mathbf{U}(x') - \mathbf{U}(x) = x' \cdot \mathbf{G}(x') - x \cdot \mathbf{G}(x) - \lambda \int_x^{x'} \mathbf{G}(x'')\,\mathrm{d}x'' \tag{12}
$$

The sample estimator is (Eq. 13, p. 1088):

$$
\hat{\Delta}_t(x, x') = x' \cdot \hat{G}_t(x') - x \cdot \hat{G}_t(x) - \lambda \cdot (x' - x) \cdot \hat{G}_t(x, x') \tag{13}
$$

where $$\hat{G}_t(x, x')$$ is the average of $$y_i$$ for observations $$x_i \in (x, x')$$. The confidence interval is (Eq. 15, p. 1088):

$$
J_t(x, x') = \hat{\Delta}_t(x, x') \pm \bigl(\Gamma_t(x') + \Gamma_t(x) + \Gamma_t(x, x')\bigr) \tag{15}
$$

with half-lengths $$\Gamma_t(x) = x \cdot \sqrt{\frac{1}{2 n_t(x)} \log(2/\delta)}$$ for the revenue component and $$\Gamma_t(x, x') = \lambda (x'-x)\bigl(\sqrt{\frac{\log(2/\delta)}{2(n_t(x,x')+1)}} + \frac{2}{n_t(x,x')+1}\bigr)$$ for the integral component. If the confidence interval $$J_t(l, c)$$ or $$J_t(l, r)$$ lies entirely above zero, the optimal policy cannot be to the left of $$l$$, so $$I_\tau$$ is trimmed accordingly. Concavity ensures the trimming is valid and yields $$T^{1/2}$$ regret (Theorem 4).

## Empirical specifications

The paper is entirely theoretical. The one numerical illustration (Figure 2, p. 1085) uses simulated data: $$v_i \overset{\text{i.i.d.}}{\sim} U[0,1]$$, $$\lambda = 0.7$$, $$K = 20$$, $$\eta = 0.025$$, $$\gamma = 0.1$$, $$T = 1000$$ periods, averaged across 4000 Monte Carlo replications. Tempered Exp3 reduces average cumulative regret to below half the uniform-random baseline by period 1000 (Figure 2, left panel). All theoretical claims rest on formal proofs in Appendix A and the Online Supplement (Cesa-Bianchi, Colomboni, and Kasy (2025)); no real-world data are used.

## Datasets used

No datasets are used. This is a theory paper with a single numerical simulation using artificially generated preference draws.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Simulated uniform draws ($$v_i \sim U[0,1]$$) | Numerical illustration only (Figure 2, p. 1085) | Not applicable (simulated) |

## When to read the full paper

Read the [original](https://doi.org/10.3982/ECTA22351) if you are:
designing a policy-learning algorithm where welfare (utility) is not observed but demand or participation is;
proving regret bounds for bandit problems with integral-valued objectives;
extending to commodity taxation (Section 6, analysis left to future work), general preference heterogeneity, or Thompson sampling variants (Section 7);
or seeking the proofs of Theorems 1 and 2 in Appendix A, or the proofs of Theorems 3 and 4 in the Online Supplement.

The locators above point to the exact theorems, algorithms, and figures in the source PDF.

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(3). This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Cesa-Bianchi, Nicolò, Roberto Colomboni, and Maximilian Kasy.
> "Adaptive Maximization of Social Welfare."
> *Econometrica* 93, no. 3 (May 2025): 1073-1104.
> DOI: 10.3982/ECTA22351. © 2025 The Authors.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
