---
title: "Insurance and Inequality With Persistent Private Information: Bloedel, Krishna & Leukhina (2025)"
description: >-
  Distilled: Under any ergodic finite-state Markov type process, the optimal
  insurance contract always generates immiseration (Theorem 1), with backloaded
  high-powered incentives under positive serial correlation (Theorem 2).
  Econometrica 2025, paywalled. Five core results with source locators, the
  recursive contract model, the marginal cost martingale method, and numerical
  illustrations of speed of immiseration and short-run distortions.
sidebar:
  label: Bloedel-Krishna-Leukhina 2025
  order: 1
tags: [paper-summary, mechanism-design, optimal-contracting, dynamic-contracting,
       insurance, inequality, immiseration, peer-reviewed, unreplicated]
paper:
  authors: Alexander W. Bloedel, R. Vijay Krishna, Oksana Leukhina
  authorList:
    - { family: Bloedel, given: Alexander W., orcid: 0000-0002-5235-3137, affiliation: "UCLA, Department of Economics" }
    - { family: Krishna, given: R. Vijay, orcid: 0000-0003-1516-4852, affiliation: "Florida State University, Department of Economics" }
    - { family: Leukhina, given: Oksana, orcid: 0000-0003-0490-3111, affiliation: "Federal Reserve Bank of St. Louis, Research Division" }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 3 (May 2025), 821-857"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA20404
  jel:
    codes: [D82, D86, D31]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Financial Literacy, Pension, Retirement Analysis', 'Fiscal Policy and Economic Growth', 'Healthcare Policy and Management']
  dataAccess: public
  outcome:
    - "agent consumption and continuation utility under optimal insurance contract"
    - "long-run income inequality under persistent private information"
  outcomeClass: [optimal-contract-design, social-welfare]
  license: "Paywalled. No CC licence block found in Crossref DOI metadata (checked 2026-06-26). Artifact (p. 821) states: © 2025 The Econometric Society. Published by Wiley."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Wiley/Econometrica site, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 5
  citedByCount: 2
  methods:
    role: theory
    contributes: marginal-cost-martingale
    family: theory
    buildsFrom: [mechanism-design, value-function-iteration]
  contributionType: [new-theory, new-method]
  mechanisms: [information-asymmetry, risk-sharing]
  scope:
    region: theoretical
  findings:
    - { ref: R1, outcome: "agent consumption and continuation utility under optimal insurance contract", metric: level, value: "v_i(t) -> -infinity and c(t) + omega(t) -> c_bar in probability as t -> infinity for all types i (Theorem 1, p. 834)", direction: negative }
    - { ref: R2, outcome: "cross-type continuation utility spread under FOSD type process", metric: level, value: "v_i(t) - v_{i-1}(t) -> +infinity in probability; conditional variance V -> +infinity as t -> infinity (Theorem 2, p. 836)", direction: positive }
    - { ref: R4, outcome: "mean consumption under CARA utility with persistent types (simulation)", metric: level, value: "mean consumption declines faster in medium-run as persistence q increases from 0.5 to 0.95 in 420,000-path simulations (Figure 3, p. 842)", direction: negative }
    - { ref: R5, outcome: "insurance and intertemporal wedges under persistence", metric: level, value: "insurance wedge turns negative (over-insurance) after consecutive low shocks; intertemporal wedge orders of magnitude larger than i.i.d. case (Figure 5, p. 845)", direction: mixed }
  resultType: overturns
  relatesTo:
    - { cite: "Thomas and Worrall (1990)", doi: '10.1016/0022-0531(90)90023-d', relation: extends, note: "generalizes their i.i.d. immiseration result to ergodic finite-state Markov type processes via the marginal cost martingale approach" }
    - { cite: "Green (1987)", doi: '10.2307/2297639', relation: builds-on, note: "foundational open-economy insurance framework; the principal-agent problem here is dual to their planning problem" }
    - { cite: "Williams (2011)", relation: contradicts, note: "Williams shows long-run bliss under a Gaussian random walk (permanent shocks); this paper shows immiseration is restored whenever types are ergodic" }
    - { cite: "Zhang (2009)", relation: extends, note: "their d=2 symmetric-transitions immiseration result is a special case of Theorem 1" }
    - { cite: "Atkeson and Lucas (1992)", doi: '10.2307/2297858', relation: builds-on, note: "closed-economy inequality analysis; the open-economy problem here is dual to their planning problem" }
    - { cite: "Fernandes and Phelan (2000)", doi: '10.1006/jeth.1999.2619', relation: builds-on, note: "recursive formulation for contracting with persistence; this paper adapts and generalizes their approach using interim promised utilities as state variable" }
  openQuestions:
    - "Whether Theorems 1 and 2 hold almost surely for general ergodic Markov processes beyond the i.i.d. and binary-type cases (pp. 834, 836)"
    - "Whether immiseration holds for unbounded, continuous-state, or non-Markovian type processes; extending to such settings is identified as an important and challenging task (p. 848)"
    - "Whether immiseration arises if and only if the type process has asymptotically vanishing impulse response functions, which the paper conjectures (p. 848)"
    - "Full analysis of the closed-economy (Atkeson-Lucas) planning problem under persistent types; the martingale proof does not directly extend due to market-clearing complications (pp. 849-850)"
  replicationCode:
    url: "https://doi.org/10.5281/zenodo.14720557"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 821-857 + Appendices A-B); five results extracted from source PDF. Not human-verified. Not reproduced. Replication code at https://doi.org/10.5281/zenodo.14720557 not run here." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) IC*_ij equation corrected from i-subscripts to j-subscripts throughout (u_i→u_j, w_i→w_j, consistent with derivation and p. 830 specific case; text updated from PK_i to PK_j); (2) resultType changed from new-finding to overturns (contradicts edge with Williams 2011 present). All five Core-results rows (R1-R5) confirmed correct against PDF at cited locators. Theorems 1-3 verified term-by-term. Simulation parameters, conditional variance eq. (4.1), Bellman eq. (FE), and marginal cost martingale Prop. 4.4 all confirmed." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ECTA20404", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block found in Crossref response. Artifact (p. 821) states copyright 2025 The Econometric Society; treated as paywalled." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the recursive model, and the marginal cost martingale method with the defining equations: enough to know what was proved and how, without reading all 37 pages. To replicate or extend, read the original at [https://doi.org/10.3982/ECTA20404](https://doi.org/10.3982/ECTA20404).

## TL;DR

The paper studies long-run welfare and inequality in optimal insurance contracts when the agent's privately observed type follows an ergodic finite-state Markov chain, filling the gap between the i.i.d. benchmark of Thomas and Worrall (1990) and the permanent-shock benchmark of Williams (2011). A risk-neutral principal offers an infinite-horizon insurance contract to a risk-averse agent whose privately observed endowment evolves with arbitrary serial correlation bounded between these extremes.

**Theorem 1** (the central result) shows that immiseration is universal under ergodic persistence: the agent's promised utilities, flow utilities, and consumption all converge to their lower bounds in probability. **Theorem 2** strengthens this under positive serial correlation (FOSD): the spread in continuation utility across types and the conditional variance of promised utility both diverge to infinity, reflecting "backloaded high-powered incentives." The key insight is that ergodicity (mean-reversion) is the critical determinant: Williams (2011) shows bliss only at the knife-edge of zero mean-reversion (permanent shocks); any positive amount of mean-reversion restores immiseration.

The proofs construct a **marginal cost martingale**: a specific directional derivative of the principal's value function that is a strictly positive martingale under the optimal contract. The Martingale Convergence Theorem combined with a "renewal property" of the Markov process shows this martingale converges to zero, implying immiseration. Numerical simulations with CARA utility and two endowment types show that greater persistence accelerates immiseration in the medium run, generates over-insurance (negative insurance wedge) after consecutive low shocks, and introduces order-dependence absent in the i.i.d. CARA case.

## Core results

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Theorem 1 (Immiseration):** under any TVC-Regular environment with ergodic Markov types, the optimal contract generates immiseration | Theorem 1, p. 834 | $$v_i^{(t)} \to -\infty$$ in probability for all $$i \in S$$; $$u^{(t)} \to -\infty$$ in probability; $$c^{(t)} + \omega^{(t)} \to \underline{c}$$ in probability; no stationary distribution exists |
| R2 | **Theorem 2 (Backloaded Incentives):** under FOSD, the optimal contract exhibits growing cross-type utility spreads | Theorem 2, p. 836 | $$v_i^{(t)} - v_{i-1}^{(t)} \to +\infty$$ in probability for all $$i \geq 2$$; conditional variance $$\mathbf{V}(v_{s^{(t+1)}}^{(t)} \mid \mathbf{v}^{(t)}, s^{(t)}) \to +\infty$$ in probability |
| R3 | **Theorem 3 (Recursive Domain):** under MLRP or PPR type process, the implementable domain is characterized explicitly | Theorem 3, Appendix B, p. 853 | $$D = V_d = \{\mathbf{v} \in \mathcal{U}^d : v_d > v_{d-1} > \cdots > v_1\}$$ under MLRP or PPR; under CARA + MLRP/PPR, $$D = D^* = V_d$$; an open, convex cone independent of $$\alpha$$ and $$U$$ (within DARA class) |
| R4 | **Numerical (§5.1):** greater persistence yields faster immiseration in medium-run | Figure 3, p. 842 | 420,000 simulated paths of CARA/$$d=2$$ model: for $$q = 0.8$$ vs i.i.d. ($$q = 0.5$$), mean consumption $$\mu_{C,t}$$ declines faster and variance $$\sigma^2_{C,t}$$ grows faster in medium-run; patterns reverse in the first few periods |
| R5 | **Numerical (§5.2):** persistence induces over-insurance and large intertemporal wedges after consecutive low shocks | Figure 5, p. 845 | Insurance wedge turns negative (over-insurance) after strings of low shocks; intertemporal wedge grows to orders of magnitude larger than i.i.d. case; consumption depends on shock order (early bad luck penalized more than late bad luck) |

**Overall (paper's conclusion).** Immiseration is not an artifact of the i.i.d. assumption but is universal under ergodic persistence. The key determinant of long-run outcomes is mean-reversion in the type process. Any positive amount of mean-reversion is sufficient to generate immiseration, while the bliss result of Williams (2011) arises only at the knife-edge of zero mean-reversion. Persistence does affect the speed of immiseration and generates qualitatively new short-run distortions: over-insurance, large intertemporal wedges, and order-dependent consumption that are absent in the i.i.d. case.

## Theory / model

The environment is a discrete-time infinite-horizon insurance model (§2, p. 827). A risk-neutral principal with discount factor $$\alpha \in (0,1)$$ offers an insurance contract to a risk-averse agent (same discount factor). The agent's Bernoulli utility is $$U: (\underline{c}, \infty) \to \mathbb{R}$$ satisfying **Assumption DARA** (p. 827): strictly increasing, strictly concave, satisfying Inada conditions $$\lim_{c \to \underline{c}} U'(c) = +\infty$$ and $$\lim_{c \to \infty} U'(c) = 0$$, bounded above and unbounded below ($$\mathcal{U} = (-\infty, 0)$$), and with decreasing absolute risk aversion. Standard CARA and HARA utilities satisfy DARA.

The agent's type $$\omega^{(t)} \in S := \{\omega_1, \dots, \omega_d\}$$ ($$\omega_d > \cdots > \omega_1$$) evolves as a **fully connected, time-homogeneous, first-order Markov chain** (Assumption Markov, p. 828) with transition matrix $$\mathbf{F} = (f_{ij})$$, where $$f_{ij} = \mathbf{P}(\omega^{(t+1)} = \omega_j \mid \omega^{(t)} = \omega_i) > 0$$ for all $$i, j$$. This ensures the process is ergodic and bounded, allowing arbitrary serial correlation. **Assumption NHB** (p. 828) restricts the agent to under-reporting: he cannot report a type higher than his true type, capturing the idea that endowments are partially verifiable.

The principal's goal is to minimize lifetime cost of delivering a vector of promised utilities $$\mathbf{v}^{(0)} = (v_1, \dots, v_d) \in \mathcal{U}^d$$ subject to promise keeping and incentive compatibility.

**Recursive formulation (§3, p. 829).** Following Green (1987) and Fernandes and Phelan (2000), the state variable for the recursive problem is $$(\mathbf{v}, s) \in D \times S$$, where $$\mathbf{v} = (v_1, \dots, v_d) \in \mathcal{U}^d$$ is the vector of **interim promised utilities** (the agent's continuation utility $$v_i$$ conditional on his true current type being $$i$$, assuming truthful reporting in all future periods) and $$s \in S$$ is the agent's report in the previous period.

At state $$(\mathbf{v}, s)$$, the contract offers a menu $$(u_i, \mathbf{w}_i)_{i \in S}$$ of flow utility $$u_i$$ and continuation utility vector $$\mathbf{w}_i$$. The recursive constraints (p. 830) are:

$$
v_i = u_i + \alpha \mathbf{E}^{\mathbf{f}_i}[\mathbf{w}_i], \qquad \forall i \in S \tag{PK$_i$}
$$

$$
v_i \geq \psi(u_j, i, j) + \alpha \mathbf{E}^{\mathbf{f}_i}[\mathbf{w}_j], \qquad \forall i > j \in S \tag{IC$_{ij}$}
$$

where $$\mathbf{E}^{\mathbf{f}_i}[\mathbf{w}_j] := \sum_{k=1}^d f_{ik} w_{jk}$$ is the expected continuation utility that a type-$$i$$ agent obtains by reporting $$j$$, and $$\psi(u_j, i, j) := U(\omega_i + C(u_j, j))$$ is the flow utility a true type-$$i$$ agent receives when the contract delivers consumption $$C(u_j, j) := U^{-1}(u_j) - \omega_j$$.

Substituting (PK$$_j$$) into (IC$$_{ij}$$) yields the combined incentive constraint (p. 836; specific d=2 case at p. 830):

$$
v_i - v_j \geq \underbrace{\psi(u_j, i, j) - u_j}_{\text{i.i.d. info rent}} + \alpha\underbrace{\bigl[\mathbf{E}^{\mathbf{f}_i}[\mathbf{w}_j] - \mathbf{E}^{\mathbf{f}_j}[\mathbf{w}_j]\bigr]}_{\text{Markov info rent}} \tag{IC$_{ij}^*$}
$$

The Markov information rent term is new relative to the i.i.d. case: it arises because the agent's current type also determines his beliefs about future types, giving him intertemporal preferences over continuation contracts.

The principal's **recursive problem** (p. 831) is to minimize expected discounted cost:

$$
P(\mathbf{v}, s) := \inf_{\xi \in \Xi} \mathbf{E}\!\left[\sum_{t=0}^\infty \alpha^t C\!\left(u_\xi^{(t)}, s^{(t+1)}\right)\bigg|\,(\mathbf{v}^{(0)}, s^{(0)}) = (\mathbf{v}, s)\right] \tag{RP}
$$

where $$C(u, j) := U^{-1}(u) - \omega_j$$ is the consumption cost to the principal and $$\Xi$$ is the set of feasible recursive contracts. The **Bellman equation** characterizing $$P$$ is (Proposition 3.2, p. 834):

$$
P(\mathbf{v}, s) = \min_{(u_i, \mathbf{w}_i)_{i \in S} \in \Gamma(\mathbf{v})} \sum_{i \in S} f_{si}\bigl[C(u_i, i) + \alpha P(\mathbf{w}_i, i)\bigr] \tag{FE}
$$

where $$\Gamma(\mathbf{v})$$ is the constraint correspondence of all menus satisfying (PK$$_i$$)-(IC$$_{ij}$$) with $$\mathbf{w}_i \in D$$ for all $$i$$. Under (TVC)-Regularity, $$P(\cdot, s)$$ is convex, and there exists a unique optimal contract $$\xi^*$$ that is continuous on $$D \times S$$ (Proposition 3.2(b)).

The **conditional variance of continuation utility**, used in Theorem 2, is defined at (4.1, p. 835):

$$
\mathbf{V}\!\left(v_{s^{(t+1)}}^{(t)} \;\Big|\; \mathbf{v}^{(t)}, s^{(t)}\right) := \sum_{i=1}^d f_{s^{(t)},i} \left(v_i^{(t)} - \sum_{k=1}^d f_{s^{(t)},k}\, v_k^{(t)}\right)^2
$$

## Method

The core methodology is the **marginal cost martingale** (§4.3, pp. 837-840). It builds on the `mechanism-design` framework and `value-function-iteration` (Bellman equation) ideas, extending the martingale approach of Thomas and Worrall (1990) for i.i.d. types to the general Markovian setting via the Fernandes and Phelan (2000) recursive formulation. The paper's stated primary methodological contributions are (i) the recursive formulation using interim promised utilities (extending Fernandes and Phelan (2000)) and (ii) the marginal cost martingale for analyzing long-run outcomes.

Let $$DP(\mathbf{v}, s) = (P_1(\mathbf{v}, s), \dots, P_d(\mathbf{v}, s))$$ denote the gradient of $$P$$ with respect to $$\mathbf{v}$$. The **directional derivative in direction $$\mathbf{1} = (1, \dots, 1) \in \mathbb{R}^d$$** is:

$$
D_{\mathbf{1}} P(\mathbf{v}, s) := \sum_{i \in S} P_i(\mathbf{v}, s)
$$

This direction is unique in that increasing $$\mathbf{v}$$ along $$\mathbf{1}$$ raises every type's continuation utility by the same amount $$\varepsilon$$, leaving all downward incentive constraints (IC$$_{ij}^*$$) unchanged (because the left-hand side $$v_i - v_j$$ is unaffected). Consequently, $$D_{\mathbf{1}} P$$ captures the marginal cost of increasing the agent's ex ante promised utility without distorting his information rents.

**Proposition 4.4** (p. 837): Under (TVC)-Regularity, the process $$(D_{\mathbf{1}} P(\mathbf{v}^{(t)}, s^{(t)}))_{t=0}^\infty$$ induced by the optimal contract is a **strictly positive martingale**.

The martingale property follows from an envelope argument on (FE): at the optimum,

$$
D_{\mathbf{1}} P(\mathbf{v}, s) = \sum_{i=1}^d f_{si}\, D_{\mathbf{1}} P(\mathbf{w}_i, i)
$$

which is precisely the martingale condition $$\mathbf{E}[D_{\mathbf{1}} P(\mathbf{v}^{(t+1)}, s^{(t+1)}) \mid \mathbf{v}^{(t)}, s^{(t)}] = D_{\mathbf{1}} P(\mathbf{v}^{(t)}, s^{(t)})$$. Strict positivity holds because the cost function $$C(\cdot, j)$$ is convex and the cost-smoothing motive always pushes $$D_{\mathbf{1}} P > 0$.

**Proof sketch for Theorem 1 (§4.3):**

**Step 1 (Marginal cost martingale, p. 837).** By Proposition 4.4, $$D_{\mathbf{1}} P(\mathbf{v}^{(t)}, s^{(t)})$$ is a strictly positive martingale. By the Martingale Convergence Theorem, it converges a.s. to some non-negative limit $$Z \geq 0$$.

**Step 2 (Convergence to zero, p. 839).** The key step is showing $$Z = 0$$ in probability. Assumption Markov implies the agent's highest-type realization $$\omega_d$$ occurs infinitely often along any sample path. At such "renewal" histories the optimal contract is **efficient** (renegotiation-proof): the principal does not need to screen through continuation contracts, so the marginal cost martingale splits like in the i.i.d. case. At these histories, if the martingale were to converge to a strictly positive number, then $$\mathbf{v}^{(t)}$$ would converge to some interior point of $$D$$, implying the optimal contract perfectly stabilizes consumption, which contradicts incentive compatibility (Lemma C.18). Thus the martingale must converge to zero at renewal histories, and the Markov ergodicity extends this to all histories.

**Step 3 (Convergence of allocations, p. 840).** $$D_{\mathbf{1}} P(\mathbf{v}^{(t)}, s^{(t)}) \to 0$$ implies that the Lagrange multipliers on the incentive constraints converge to zero. This in turn implies that the agent's consumption converges to the level that the first-best contract would deliver if cost were zero, which is $$\underline{c}$$.

For **Theorem 2** (backloaded incentives), the argument uses Theorem 1(b) (flow utility $$u^{(t)} \to -\infty$$) combined with the incentive constraint (IC$$_{ij}^*$$): for FOSD type processes, the Markov information rent (the second bracketed term) is non-negative (Theorem 3 in Appendix B guarantees $$\mathbf{E}^{\mathbf{f}_i}[\mathbf{w}_i] \geq \mathbf{E}^{\mathbf{f}_j}[\mathbf{w}_i]$$ whenever $$i > j$$). Since the i.i.d. information rent grows without bound (from Theorem 1(b)) and the Markov rent is non-negative, the spread $$v_i^{(t)} - v_{i-1}^{(t)}$$ must also grow without bound.

## Empirical specifications

Section 5 presents numerical simulations for the **CARA / binary-type ($$d = 2$$) / symmetric-transitions** special case, using (p. 841):

$$
U(c + \omega) = -e^{-(c + \omega)}, \quad \omega_1 = -\log 5, \quad \omega_2 = \log 10, \quad \alpha = 0.5
$$

with symmetric transition matrix $$f_{11} = f_{22} = q$$. Three persistence levels plus a very high case are studied: $$q \in \{0.5 \text{ (i.i.d.)}, 0.65 \text{ (low)}, 0.8 \text{ (high)}, 0.95 \text{ (very high)}\}$$. Under CARA utility and FOSD ($$q \geq 0.5$$), Theorem 3 gives $$D = V_2 = \{(v_1, v_2) : v_2 > v_1\}$$, so optimal contracts are homogeneous of degree 1 in $$\mathbf{v}$$ (property HD1, p. 843).

**Speed of immiseration (§5.1, Figure 3, p. 842).** For each $$q$$, 420,000 sample paths of the optimal contract are simulated for 40 time periods, with 21 initial $$\mathbf{v}^{(0)}$$ points drawn from a grid on $$D = V_2$$. Mean consumption $$\mu_{C,t} := \mathbf{E}[c^{(t)} + \omega^{(t)}]$$ and variance $$\sigma^2_{C,t} := \mathbf{V}[c^{(t)} + \omega^{(t)}]$$ serve as proxies for open-economy aggregate consumption and cross-sectional inequality. Key patterns:

1. $$\mu_{C,t} \to -\infty$$ and $$\sigma^2_{C,t} \to +\infty$$ at all persistence levels (Theorem 1).
2. Medium-run: greater $$q$$ yields faster decline in $$\mu_{C,t}$$ and faster growth in $$\sigma^2_{C,t}$$.
3. Short-run (first few periods): greater $$q$$ initially slows the decline of $$\mu_{C,t}$$ and the growth of $$\sigma^2_{C,t}$$.

**Short-run distortions (§5.2, Figure 5, p. 845).** The HD1 property implies the contract's dynamics trace a countable set of rays in $$V_2$$: ray $$E_2$$ (continuation state after a high shock) and rays $$\{B_k\}_{k \geq 1}$$ (after $$k$$ consecutive low shocks, $$B_k$$ strictly below $$B_{k-1}$$). Along sequences of consecutive high and low shocks starting from $$E_2$$ (Figure 5):

- **Insurance wedge** $$\equiv U'(c^{(t)} + \omega_1)/U'(c^{(t)} + \omega_2) - 1$$: always positive in the i.i.d. case (under-insurance, consistent with Thomas and Worrall (1990)). Under persistence, it remains positive after high shocks but turns **negative** (over-insurance, $$u_1 > u_2$$) after consecutive low shocks.
- **Intertemporal wedge** $$\equiv \mathbf{E}[U'(c^{(t+1)} + \omega^{(t+1)}) \mid \omega^{(t)}]/U'(c^{(t)} + \omega^{(t)}) - 1$$: always positive in i.i.d. case (consumption drift downward). Under persistence, becomes orders of magnitude larger after consecutive low shocks.
- **Order-dependence**: unlike the i.i.d. CARA case (where Atkeson and Lucas (1992) show order-independence), consumption under persistence depends on the sequence of shocks, not just their frequency; early bad luck is penalized more than late bad luck.

## Datasets used

No empirical datasets are used. All results are analytical (Theorems 1-3) or based on numerical simulations of the theoretical model. The replication code is publicly available.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Synthetic model simulation (CARA utility, d=2 types, symmetric Markov, q in {0.5, 0.65, 0.8, 0.95}) | Numerical illustrations of speed of immiseration and short-run distortions (Figures 3-5, §5) | No page (theoretical model; no external data source) |

Sample: 420,000 paths per persistence level, 40 time periods, 21 initial state points (§5.1). Replication code: [https://doi.org/10.5281/zenodo.14720557](https://doi.org/10.5281/zenodo.14720557).

## When to read the full paper

Read the original at [https://doi.org/10.3982/ECTA20404](https://doi.org/10.3982/ECTA20404) if you:
- need the formal proofs of Theorems 1, 2, or 3 (in Supplemental Appendices C, E, and I-J of the companion working paper Bloedel, Krishna, and Leukhina (2025b));
- are extending the recursive formulation to other environments (Appendix A covers equivalence between sequential and recursive contracts);
- want the closed-economy (Atkeson and Lucas (1992)) extension or the Zhang (2009) / Williams (2011) comparison (Section 6);
- are studying the general DARA + Markov setting beyond the CARA/d=2 numerical illustrations.

Core locators: Theorem 1 (immiseration, p. 834), Theorem 2 (backloaded incentives, p. 836), Theorem 3 / Appendix B (recursive domain, p. 853), Figure 3 (speed of immiseration, p. 842), Figure 5 (short-run wedges, p. 845).

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(3), May 2025. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The article is paywalled; no CC licence was found in Crossref metadata.

> Bloedel, Alexander W., R. Vijay Krishna, and Oksana Leukhina.
> "Insurance and Inequality With Persistent Private Information."
> *Econometrica* 93, no. 3 (May 2025): 821-857.
> DOI: 10.3982/ECTA20404.
> © 2025 The Econometric Society. All rights reserved.
> This page extracts core results only and does not reproduce the full text.
