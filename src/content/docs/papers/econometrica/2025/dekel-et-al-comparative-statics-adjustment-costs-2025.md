---
title: "Comparative Statics With Adjustment Costs: Dekel, Quah & Sinander (2025)"
description: >-
  Distilled: Develops a general theory of monotone comparative statics for models
  with adjustment costs, showing that ordinal complementarity on the objective and
  minimal monotonicity of the cost function suffice for comparative-statics
  conclusions and a Le Chatelier principle. Applied to saving, factor demand,
  pricing, labor supply, and capital investment. Econometrica 2025, CC BY 4.0.
  Six core theorems with proof locators and formal equations.
sidebar:
  label: Dekel-Quah-Sinander 2025
  order: 1
tags: [paper-summary, comparative-statics, adjustment-costs, le-chatelier,
       optimization-theory, open-access, cc-by, peer-reviewed, unreplicated]
paper:
  authors: Eddie Dekel, John K.-H. Quah, Ludvig Sinander
  authorList:
    - { family: Dekel, given: Eddie, affiliation: Northwestern University and Tel Aviv University }
    - { family: Quah, given: "John K.-H.", affiliation: National University of Singapore }
    - { family: Sinander, given: Ludvig, orcid: '0000-0002-3708-1233', affiliation: University of Oxford }
  year: 2025
  venue: "Econometrica 93(2), March 2025, 661–694"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA22841
  jel:
    codes: [C61, D21, E22]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Monetary Policy and Economic Impact', 'Merger and Competition Analysis', 'Economic theories and models']
  dataAccess: public
  outcome:
    - optimal action response to parameter shocks under adjustment costs
    - short-run vs. long-run adjustment magnitude (Le Chatelier principle)
  outcomeClass: [firm-real-outcomes, household-finance]
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version unspecified, URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-01-01; corroborated by p. 661 Creative Commons Attribution License notice in artifact)'
  licenseShort: CC BY 4.0
  access: open
  machineAccess: 'open-access PDF (Wiley/Econometric Society; confirmed via DOI 2026-06-26)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 6
  citedByCount: 0
  methods:
    role: theory
    family: theory
    buildsFrom: [lattice-comparative-statics]
  contributionType: [new-theory]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Milgrom and Shannon (1994)', relation: extends, note: 'Theorem 1 generalizes their Theorem 4 monotone comparative statics to the costly-adjustment case; their result is the special case C = 0' }
    - { cite: 'Milgrom and Roberts (1996)', relation: extends, note: 'Theorem 2 strictly generalizes their Le Chatelier principle; their setting (some dimensions have infinite short-run cost, others zero) is a special case of a monotone C' }
    - { cite: 'Samuelson (1947)', relation: builds-on, note: 'the Le Chatelier principle originated with Samuelson; this paper establishes it holds under minimal ordinal conditions on the objective and cost' }
    - { cite: 'Caplin and Leahy (2019)', relation: extends, note: 'Proposition 2 recovers their wishful-thinking saving result without requiring their Kullback-Leibler functional-form assumption on C' }
  openQuestions:
    - 'The converse of Theorem 4 (whether monotonicity is necessary as well as sufficient for the strong dynamic Le Chatelier principle) is left open; the authors conjecture it holds under weaker assumptions but note a different proof strategy is needed (p. 682).'
    - 'Remark 5 (p. 675) identifies the more general model in which the prevailing norm evolves sluggishly as a potentially interesting avenue for future work not pursued in the paper.'
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-26, role: extracted, note: "Full text read (pp. 661-694); six theorems extracted with proof locators and formal equations. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: (1) Appendix I cost inequality mislabelled as eq. (4), corrected to eq. (5), and second C_i argument 'z∧x' corrected to 'y∧z'; (2) factor-demand profit function F(k,ℓ,(p,η,−w))=pf(k,ℓ)−rk−wℓ incorrect, corrected to F(k,ℓ,−w)=f(k,ℓ)−rk−wℓ per §4.2 p. 673; (3) mechanisms: [participation-frictions] removed as a clear mismatch (paper invokes adjustment costs, not participation frictions)." }
  licenceVerification:
    - { source: 'Crossref REST API works/10.3982/ECTA22841', checked: 2026-06-26, by: 'paper-distiller (claude-sonnet-4-6)', found: 'license[].content-version=unspecified, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-01-01' }
  rightsSignalConflict: false
---

**What this is.** The paper's core theorems, the model structure, and the proof approach: a distilled skeleton sufficient to understand what was established and how, without reading all 34 pages. To replicate or extend the results, read the original at [https://doi.org/10.3982/ECTA22841](https://doi.org/10.3982/ECTA22841).

## TL;DR

The paper develops a general theory of monotone comparative statics for models with costly adjustment. The key insight is that the standard comparative-statics conclusion (an increase in a parameter leads to a higher optimal action) holds under the ordinal complementarity conditions of quasi-supermodularity and single-crossing differences on the objective, with only a minimal monotonicity condition on the cost function: it must be weakly less costly to adjust less. This is used to prove a general Le Chatelier principle, originating with Samuelson (1947): under adjustment costs the short-run response to a shock is bounded by the long-run response. Both results are extended to a fully dynamic model with long-lived forward-looking agents (and, separately, short-lived agents). Applications include saving by wishful thinkers, factor demand following Milgrom and Roberts (1996), pricing, labor supply, and capital investment. A key feature is that convex and nonconvex adjustment costs are handled in a unified framework.

## Core results

Theorems are qualitative; the "magnitude" column gives the precise conclusion. All results require quasi-supermodularity of F in x and single-crossing differences in (x, θ).

| # | Result | Locator | Conclusion |
|---|---|---|---|
| R1 | Theorem 1: comparative statics with adjustment costs | Theorem 1, p. 666 | If C is minimally monotone and θ̄ ≥ θ̲, then x̂ ≥ x̲ for some x̂ ∈ arg max G(x, θ̄) (provided the argmax is nonempty) |
| R2 | Theorem 2: Le Chatelier principle | Theorem 2, §4, p. 671 | If C is monotone and x̄ ∈ arg max F(x, θ̄) satisfies x̄ ≥ x̲, then x̄ ≥ x̂ ≥ x̲ for some short-run x̂; if x̄ is the largest long-run optimum then x̄ ≥ x̂ for every short-run x̂ |
| R3 | Theorem 3: dynamic Le Chatelier (long-lived agents) | Theorem 3, §5.2, p. 675 | Under monotone C_t and θ̲ ≤ θ_t ≤ θ̄ for every t, there is a solution (x_t) with x̲ ≤ x_t ≤ x̄ for every period t |
| R4 | Theorem 4: strong dynamic Le Chatelier | Theorem 4, §5.2, p. 675 | Under supermodularity, BCS, and additive separability of a time-invariant C, there is a solution with x̲ ≤ x_t ≤ x_{t+1} ≤ x̄ for every t (monotone upward adjustment over time) |
| R5 | Theorem 5: short-lived dynamic Le Chatelier | Theorem 5, §6, p. 679 | Short-lived agents' equilibrium satisfies x̲ ≤ x_t ≤ x̄ in the same direction as in Theorem 3 |
| R6 | Theorem 6: short- vs. long-lived agents | Theorem 6, §6, pp. 679-680 | Under additional convexity and equi-BCS conditions, short-lived agents adjust more sluggishly: x̲ ≤ x̃_t ≤ x_t ≤ x̄ for some equilibrium pair |

**Overall (paper's conclusion).** Comparative statics and the Le Chatelier principle are robust to adjustment costs under ordinal (not cardinal) complementarity conditions on the objective and minimal monotonicity on the cost. The prior literature, including Milgrom and Roberts (1996), required that short-run adjustment be completely infeasible in some dimensions. Section 7 establishes converses showing that minimal monotonicity (Theorem 1) and weak monotonicity (Theorem 2) are necessary as well as sufficient.

## Theory / model

### Setting

An agent chooses an action x from a sublattice $$L \subseteq \mathbb{R}^n$$. Her objective $$F(x, \theta)$$ depends on a parameter $$\theta \in \Theta$$. At the initial parameter $$\theta = \underline{\theta}$$, the optimal choice is (p. 664):

$$
\underline{x} \in \arg\max_{x \in L} F(x, \underline{\theta}).
$$

When the parameter rises to $$\bar{\theta} \geq \underline{\theta}$$, adjusting from $$\underline{x}$$ to $$x$$ costs $$C(x - \underline{x}) \geq 0$$, where $$C : \Delta L \to [0, \infty]$$ and $$\Delta L = \{x - y : x, y \in L\}$$. The agent's new choice maximizes (p. 664):

$$
G(x, \bar{\theta}) = F(x, \bar{\theta}) - C(x - \underline{x}).
$$

Infinite cost captures infeasibility. Since $$\underline{x}$$ is held fixed, the cost depends on the adjustment vector $$\varepsilon = x - \underline{x}$$ only.

### Monotonicity conditions on C

Two conditions on C appear in the results (pp. 664-665):

**Monotone:** Shifting any one dimension's adjustment closer to zero reduces cost:

$$
C(\varepsilon_1, \ldots, \varepsilon_{i-1}, \varepsilon'_i, \varepsilon_{i+1}, \ldots, \varepsilon_n) \leq C(\varepsilon)
\quad \text{whenever } 0 \leq \varepsilon'_i \leq \varepsilon_i \text{ or } 0 \geq \varepsilon'_i \geq \varepsilon_i. \tag{M}
$$

An additively separable $$C(\varepsilon) = \sum_{i=1}^n C_i(\varepsilon_i)$$ is monotone if and only if each $$C_i$$ is single-dipped at zero. Monotonicity is an ordinal property, preserved by strictly increasing transformations.

**Minimally monotone:** Simultaneously canceling all upward (or all downward) adjustments reduces cost:

$$
C(\varepsilon \wedge 0) \leq C(\varepsilon) \geq C(\varepsilon \vee 0)
\quad \text{for any adjustment vector } \varepsilon \in \Delta L, \tag{MM}
$$

where $$\varepsilon \wedge 0$$ replaces all positive entries of $$\varepsilon$$ with zero and $$\varepsilon \vee 0$$ replaces all negative entries with zero. Monotonicity implies minimal monotonicity; the converse fails. In the additively separable case, minimal monotonicity requires that each $$C_i$$ is minimized at zero.

### Ordinal complementarity conditions on F

Throughout, F satisfies (pp. 666-667, following Milgrom and Shannon (1994)):

- **Single-crossing differences in (x, θ):** $$F(y, \theta') - F(x, \theta') \geq 0$$ implies $$F(y, \theta'') - F(x, \theta'') \geq 0$$ whenever $$x \leq y$$ and $$\theta' \leq \theta''$$.
- **Quasi-supermodularity in x:** $$F(x, \theta) - F(x \wedge y, \theta) \geq(>) 0$$ implies $$F(x \vee y, \theta) - F(y, \theta) \geq(>) 0$$ for all $$x, y \in L$$.

These are ordinal properties, strictly weaker than the cardinal conditions of increasing differences and supermodularity.

### Dynamic model

In Section 5, the agent is long-lived and forward-looking. In each period $$t \in \mathbb{N} = \{1, 2, 3, \ldots\}$$, she takes action $$x_t \in L$$ and earns $$F(x_t, \theta_t)$$. Adjusting from $$x_{t-1}$$ to $$x_t$$ costs $$C_t(x_t - x_{t-1})$$. Given initial choice $$x_0 = \underline{x}$$, the agent maximizes (p. 674):

$$
\mathcal{G}\!\left((x_t)_{t=1}^\infty, x_0\right) = \mathcal{F}\!\left((x_t)_{t=1}^\infty\right) - \mathcal{C}\!\left(x_0, (x_t)_{t=1}^\infty\right),
$$

where

$$
\mathcal{F}\!\left((x_t)_{t=1}^\infty\right) = \sum_{t=1}^\infty \delta^{t-1} F(x_t, \theta_t)
\qquad \text{and} \qquad
\mathcal{C}\!\left(x_0, (x_t)_{t=1}^\infty\right) = \sum_{t=1}^\infty \delta^{t-1} C_t(x_t - x_{t-1}).
$$

Section 6 considers the alternative in which each period's action is chosen by a short-lived (or myopic) agent who takes $$x_{t-1}$$ as given and maximizes the period-t payoff $$G_t(x, x_{t-1}) = F(x, \theta_t) - C_t(x - x_{t-1})$$.

## Method

The paper uses lattice-theoretic methods, building on the `lattice-comparative-statics` framework of Topkis, and Milgrom and Shannon (1994). The key tools are:

**Sublattice operations.** For $$x, y \in L$$, the meet $$x \wedge y = (\min\{x_1, y_1\}, \ldots, \min\{x_n, y_n\})$$ and join $$x \vee y = (\max\{x_1, y_1\}, \ldots, \max\{x_n, y_n\})$$ both belong to L. The proof of Theorem 1 (p. 667) constructs $$\hat{x} = \underline{x} \vee x'$$ for any $$x' \in \arg\max G(x, \bar{\theta})$$. The key step uses minimal monotonicity: $$C(\underline{x} \vee x' - \underline{x}) = C((x' - \underline{x}) \vee 0) \leq C(x' - \underline{x})$$, so $$G(\hat{x}, \bar{\theta}) \geq G(x', \bar{\theta})$$, confirming that $$\hat{x}$$ also maximizes G and satisfies $$\hat{x} \geq \underline{x}$$.

**Monotonization argument (Theorem 4, Appendix I, pp. 686-688).** The strong dynamic result is proved by showing that any solution $$(x_t)_{t=1}^\infty$$ to the forward-looking problem can be replaced by the running-maximum sequence $$X_t = x_1 \vee x_2 \vee \cdots \vee x_t$$ without reducing optimality. The key inequality (eq. (5) in Appendix I) is, for each dimension $$i$$:

$$
C_i(y \vee z - x \vee y) + C_i(y \wedge z - x \wedge y) \leq C_i(y - x) + C_i(z - y)
\quad \text{for all } x, y, z, \tag{5}
$$

which holds because each $$C_i$$ is single-dipped at zero. Combined with supermodularity of $$F(\cdot, \bar{\theta})$$, this ensures monotonization preserves optimality.

**Necessity results (Section 7, Theorems 1†, 2†, 3†, pp. 680-682).** The paper proves converses by explicit counterexample construction. For example, Theorem 1† (p. 680) shows that minimal monotonicity is equivalent to: for all quasi-supermodular F with single-crossing differences, $$\theta \geq \underline{\theta}$$ implies $$\hat{x} \geq \underline{x}$$ for some $$\hat{x} \in \arg\max G(x, \bar{\theta})$$, and $$\theta \leq \underline{\theta}$$ implies $$\hat{x} \leq \underline{x}$$. The counterexample when C fails minimal monotonicity is constructed on a sublattice $$X = \{\underline{x} \wedge \hat{x}, \underline{x}, \hat{x}, \underline{x} \vee \hat{x}\}$$ with explicitly specified F values (pp. 680-681).

## Empirical specifications

This paper contains no empirical analysis. The formal results are applied to five standard economic models; these applications demonstrate that the theory delivers sharp conclusions without the auxiliary functional-form assumptions that each literature has typically imposed.

**Saving by wishful thinkers (§3.3, pp. 669-671, Proposition 2).** Following Caplin and Leahy (2019), an agent consumes $$c \in [0, w]$$ and chooses a belief $$G$$ (a CDF over future income) from a set $$\mathcal{G}$$ ordered by first-order stochastic dominance. The lifetime payoff is (p. 669):

$$
U(c, G) = u_1(c) + \int_{\mathcal{Y}} u_2\!\left((1+r)(w - c) + y\right) G(\mathrm{d}y),
$$

where $$u_1, u_2$$ are continuous, concave, and strictly increasing. A wishful thinker chooses:

$$
(\hat{c}, \hat{G}) \in \arg\max_{(c, G) \in [0, w] \times \mathcal{G}} \left[U(c, G) - C(G - G_0)\right],
$$

where $$C$$ is minimally monotone and $$G_0$$ is the realist's belief. Proposition 2 (p. 670) establishes $$\hat{c} \geq c_0$$ (wishful thinkers over-consume) and $$\hat{G} \geq_1 G_0$$ (wishful thinkers adopt more optimistic beliefs). The proof applies Theorem 1*, the constraint-shift variant of Theorem 1, since $$[0, w] \times \mathcal{G}$$ is a sublattice. Notably, Caplin and Leahy (2019) assumed the Kullback-Leibler functional form for C; this assumption is not needed here.

**Factor demand (§4.2, p. 673).** A firm uses capital k and labor $$\ell$$ to produce output $$f(k, \ell)$$. Profit at factor prices $$(r, w)$$ is $$F(k, \ell, -w) = f(k, \ell) - rk - w\ell$$. By Theorem 2, a drop in the wage w precipitates a short-run increase in both k and $$\ell$$ when $$f$$ is supermodular (complements), with a further increase in the long run. When $$f$$ is submodular (substitutes), rewriting the choice variable as $$(x_1, x_2) = (-k, \ell)$$ restores supermodularity; $$\ell$$ still increases in both runs while k now decreases.

**Pricing (§4.3 and §5.3, pp. 673-674, 677).** A monopolist with constant marginal cost $$c$$ faces demand $$D(p, \eta)$$ where $$\eta$$ is an elasticity shifter. Profit $$F(p, (c, -\eta)) = (p - c)D(p, \eta)$$ has single-crossing differences in $$(p, (c, -\eta))$$ (using the "log increasing differences" condition, p. 673) and is quasi-supermodular since $$p \in \mathbb{R}$$. By Theorems 1 and 2, the monopolist raises her price in both the short and long run whenever marginal cost rises or demand becomes less elastic ($$\eta$$ falls), without any assumptions on the adjustment cost C beyond minimization at zero. Theorem 4 further implies that prices adjust monotonically upward over time in the dynamic version.

**Labor supply (§5.4, pp. 677-678).** A worker chooses labor supply $$x \in L \subseteq \mathbb{R}_+$$ with per-period utility $$F(x, T) = wx - T(wx) - \kappa(x)$$, where T is the tax schedule and $$\kappa$$ is effort disutility. A tax reform from T to $$\tilde{T}$$ with lower marginal rates ($$\tilde{T} \geq_{\text{flat}} T$$) yields F with single-crossing differences in $$(x, T)$$. Theorems 1-4 imply that labor supply rises at every horizon and adjusts monotonically upward over time under a one-off permanent rate cut.

**Capital investment (§5.5, pp. 678-679).** A firm adjusts capital $$k_t \in \mathbb{R}_+$$ with per-period profit $$F(k, (p, \eta, -r)) = pf(k, \eta) - rk$$ where $$f$$ has increasing differences (so F has increasing differences in $$(k, \theta)$$ for $$\theta = (p, \eta, -r)$$). Investing $$i_t = k_t - k_{t-1}$$ costs $$C(i_t) \geq 0$$, assumed only to be single-dipped at zero. Theorem 4 delivers monotone upward adjustment of capital over time whenever the marginal product of capital rises (fall in r, rise in p, or rise in $$\eta$$). The analysis covers both convex and nonconvex (lumpy) investment; when adjustment costs are not even single-dipped (e.g., a minimum investment threshold creates a region $$C(\varepsilon) = \infty$$), Theorem 1 still applies since C remains minimally monotone.

## Datasets used

This is a pure-theory paper. No datasets are used.

## When to read the full paper

Read the original at [https://doi.org/10.3982/ECTA22841](https://doi.org/10.3982/ECTA22841) if you:
- are applying these results to a new economic model and need the precise conditions and all proof details (Appendices A-N, pp. 682-693);
- are working on dynamic-adjustment models with nonconvex or general cost functions and need the full statements of Theorems 3-6;
- need the extension to uncertain adjustment costs (Appendix B, pp. 683-684, Theorems 1'-3');
- need the constraint-shift variant (Theorem 1*, §3.1, pp. 668-669) or the necessity results of Section 7 to understand when the conditions can be relaxed.

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(2), March 2025. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**.

> **Attribution (CC BY 4.0).** Dekel, Eddie, John K.-H. Quah, and Ludvig Sinander.
> "Comparative Statics With Adjustment Costs and the Le Chatelier Principle."
> *Econometrica* 93, no. 2 (March 2025): 661-694.
> DOI: 10.3982/ECTA22841. © 2025 The Authors.
> Licensed under the [Creative Commons Attribution License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
