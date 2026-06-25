---
title: "Nonlinear Pricing with Underutilization: Corrao, Flynn & Sastry (2023)"
description: >-
  Distilled: establishes that multi-part tariffs (price schedules with tiers of zero
  marginal price) are the optimal contract when buyers can freely underutilize purchases
  and usage generates revenue for the seller via advertising, data, or network effects.
  American Economic Review 113(3), 2023, paywalled. Six core theoretical results with
  proposition locators, the seller's problem, and the virtual surplus characterization.
  LLM-distilled.
sidebar:
  label: Corrao-Flynn-Sastry 2023
  order: 1
tags: [paper-summary, nonlinear-pricing, multi-part-tariffs, digital-markets, mechanism-design, screening, peer-reviewed]
paper:
  authors: Roberto Corrao, Joel P. Flynn, Karthik A. Sastry
  authorList:
    - { family: Corrao, given: Roberto, orcid: "0009-0002-9741-9846", affiliation: MIT Department of Economics }
    - { family: Flynn, given: Joel P., affiliation: MIT Department of Economics }
    - { family: Sastry, given: Karthik A., affiliation: Harvard Department of Economics }
  year: 2023
  venue: American Economic Review 113(3), March 2023, 836-860
  venueShort: AER 2023
  doi: 10.1257/aer.20220199
  jel:
    codes: [D11, D21, D42, L86, M37]
    assignedBy: authors (paper abstract)
    date: 2026-06-25
  topics: ['Consumer Market Behavior and Pricing', 'Auction Theory and Applications', 'Digital Platforms and Economics']
  dataAccess: public
  outcome:
    - optimal nonlinear pricing schedule for digital goods
    - structure of multi-part tariffs (free pricing, free trials, unlimited subscriptions)
    - consumer and producer welfare under noncontractible usage
  outcomeClass: [optimal-contract-design, social-welfare]
  license: 'paywalled (no license[] block in Crossref works/10.1257/aer.20220199; published under AEA copyright; confirmed by Crossref check 2026-06-25)'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (AEA/AER website, 2026-06-25)'
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 4
  methods:
    role: theory
    family: theory
    buildsFrom: [mechanism-design]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, moral-hazard]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Mussa and Rosen (1978)', doi: '10.1016/0022-0531(78)90085-6', relation: extends, note: 'extends classical smooth nonlinear pricing by adding free disposal and usage-derived revenue; standard screening cannot generate strictly optimal multi-part tariffs (Remark 1, p. 849)' }
    - { cite: 'Grubb (2009)', doi: '10.1257/aer.99.5.1770', relation: extends, note: 'generalizes his three-part tariff for overconfident consumers to a broader class of external revenue functions and a wider set of pricing schemes (p. 838)' }
    - { cite: 'Wilson (1993)', doi: '10.1093/oso/9780195068856.001.0001', relation: builds-on, note: 'standard nonlinear pricing framework underpinning the analysis (p. 837)' }
    - { cite: 'Nöldeke and Samuelson (2007)', doi: '10.1016/j.jet.2006.01.001', relation: builds-on, note: 'adapts their assignment approach to characterize optimal pricing with bunching in online Appendix B.1 (p. 859)' }
  openQuestions:
    - "Effects of partial contractibility of usage on optimal nonlinear pricing: ongoing work at time of publication (p. 859)."
    - "Extension to more general oligopoly settings beyond the perfectly competitive fringe analyzed in online Appendix B.2 (p. 859)."
  replicationCode:
    status: none
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-25, role: extracted, note: "Full text read (pp. 836-860); six theoretical results extracted. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; two fixes applied: (1) eq. 3 virtual surplus corrected from u_{xθ} to u_θ (PDF p. 843 confirmed u_θ; cross-partial belongs only in eq. 14); (2) JEL codes completed from 3 to 5 entries (L86, M37 added from paper abstract)." }
  licenceVerification:
    - { source: 'Crossref REST API works/10.1257/aer.20220199', checked: 2026-06-25, by: 'paper-distiller (claude-sonnet-4-6)', found: 'no license[] block present in Crossref works record; paper appears paywalled under AEA copyright' }
  rightsSignalConflict: false
---

**What this is.** The paper's core theoretical results and the formal model with its defining equations: enough to know what was proved and how, without reading all 25 pages. To replicate or extend the proofs, read the full source at the [original](https://doi.org/10.1257/aer.20220199).

## TL;DR

The paper studies a seller who cannot monitor or enforce how much a buyer actually consumes of what they purchase (free disposal / noncontractibility of usage), while actual usage generates revenue for the seller via advertising clicks, data collection, or network effects. The classical nonlinear pricing literature of Mussa and Rosen (1978) and Wilson (1993) predicts smooth, continuously increasing price schedules. This paper's main result is that once buyers can freely underutilize, the optimal price schedule is a multi-part tariff: it features at least one tier where the marginal price is zero. The mechanism is that sellers would benefit from paying buyers to use the product more (a negative marginal price), but noncontractibility makes this unenforceable, so zero marginal pricing is the constrained optimum. The model rationalizes free products (search engines, social media), free trials, unlimited subscriptions, and introductory offers, matching the observed pricing of major digital platforms. The welfare analysis shows that perfect contractibility would benefit both consumers and producers, but the same technological barrier that prevents extracting full usage value also prevents compensating users for it.

## Core results

Locators point into the source PDF.

| # | Result | Locator | Statement |
|---|---|---|---|
| R1 | Optimal consumption is the min of producer-optimal and consumer-optimal (bliss point) levels; the optimal price schedule is uniquely given by an integral over marginal willingness to pay | Prop. 1, pp. 844-845 | Characterization of optimal contract under free disposal |
| R2 | H(x) > 0 is sufficient for the price schedule to be flat at x (a multi-part tariff tier); H(x) < 0 is sufficient for a strictly positive marginal price | Prop. 2, p. 848 | Multi-part tariffs arise when marginal usage revenue dominates marginal information rents |
| R3 | Four pricing schemes rationalized by the sign of H: regular (H < 0 everywhere), fixed/free (H >= 0 everywhere), premium-tier (H changes sign from negative), introductory-offer (H changes sign from positive) | Cor. 1, p. 850 | Corollary applies when H crosses zero at most once |
| R4 | Sufficient conditions for unlimited subscriptions (marginal usage revenue positive at the highest-type bliss point) and for free trials (total marginal usage revenue at the lowest-type bliss point exceeds information rent) | Cor. 2, pp. 852-853 | Free trials and unlimited subscriptions co-occur when usage revenue is high at both ends of the type distribution |
| R5 | Under any fixed price schedule, free disposal weakly improves consumer welfare; but under the seller-reoptimized schedule, perfect contractibility strictly improves both consumer and producer welfare for all types | Prop. 3, p. 856 | Noncontractibility reduces both consumer and producer welfare relative to the contractibility benchmark |
| R6 | When usage becomes more profitable, both consumer and producer welfare increase, but by less than under perfect contractibility; free disposal dampens welfare gains from improved advertising or data-collection technology | Prop. 4, p. 857 | Free disposal reduces the sensitivity of welfare to changes in usage-based revenue |

**Overall (paper's conclusion).** The mechanism generating multi-part tariffs is the collision between two constraints: sellers would like to charge negative marginal prices to encourage valuable usage, but noncontractibility prevents this, making zero marginal pricing the constrained optimum. As a normative corollary, users of digital platforms would be better off if usage were perfectly contractible, but the same technological barrier that prevents full extraction also prevents compensation for usage.

## Theory / model

There is a single good consumed in amounts $$x \in X = [0, \bar{x}]$$. A unit measure of buyers have privately known type $$\theta \in \Theta = [0,1]$$ drawn from distribution $$F \in \Delta(\Theta)$$ with density $$f$$ bounded away from zero (p. 840). Buyer utility is quasilinear: $$u(x,\theta) - t$$, where $$u$$ satisfies strict single crossing ($$u_{x\theta} > 0$$) and strict quasiconcavity in $$x$$ for all $$\theta$$. The outside option is normalized to zero: $$u(0,\theta) = 0$$ for all $$\theta$$.

**Underutilization (p. 840):** A buyer who purchases $$y$$ can consume any $$x \in [0,y]$$. This models noncontractibility in digital markets: a newspaper can check if an article was loaded but not whether it was read; Google can verify a search was submitted but not that a human performed it. The AllAdvantage.com case study (p. 840) illustrates this directly: the platform paid users to view banner ads but was defrauded by automated click bots.

**Usage-derived revenue (pp. 841-842):** The seller receives both transfer payments and usage-derived revenue captured by a continuously differentiable function $$\pi: X \times \Theta \to \mathbb{R}$$ with $$\pi(0,\theta) = 0$$. The function $$\pi$$ encompasses advertising revenue, data collection value, network effects, and future addiction revenue. The seller values total revenue $$\pi(\phi(\theta),\theta) + T(\xi(\theta))$$ from both usage and transfers.

**Seller's problem (p. 842):** The seller designs a total-revenue-maximizing price schedule $$T: X \to \bar{\mathbb{R}}$$ anticipating that each type $$\theta$$ will choose purchase quantity $$\xi(\theta)$$ and consumption $$\phi(\theta) \in [0, \xi(\theta)]$$ optimally:

$$\sup_{\phi,\xi,T} \int_{\Theta} \left[\pi(\phi(\theta),\theta) + T(\xi(\theta))\right] dF(\theta) \tag{1}$$

subject to three constraints:
- **(O) Obedience:** each buyer chooses optimal consumption given their purchase: $$\phi(\theta) \in \arg\max_{x \in [0,\xi(\theta)]} u(x,\theta)$$
- **(IC) Incentive compatibility:** each buyer chooses optimal purchase given the price schedule and their ability to underutilize: $$\xi(\theta) \in \arg\max_{y \in X} \left\{\max_{x \in [0,y]} u(x,\theta) - T(y)\right\}$$
- **(IR) Individual rationality:** $$u(\phi(\theta),\theta) - T(\xi(\theta)) \geq 0$$ for all $$\theta \in \Theta$$

**Key objects (p. 843):** The consumer-optimal (bliss point) consumption is:

$$\phi^A(\theta) = \arg\max_{x \in X} u(x,\theta), \tag{2}$$

which is unique and increasing by strict quasiconcavity and strict single crossing. The virtual surplus net of information rents is:

$$J(x,\theta) = \pi(x,\theta) + u(x,\theta) - \frac{1-F(\theta)}{f(\theta)}\,u_{\theta}(x,\theta). \tag{3}$$

Under the assumption that $$J$$ satisfies strict single crossing in $$(x,\theta)$$ and strict quasiconcavity in $$x$$, the producer-optimal consumption maximizing virtual surplus is:

$$\phi^P(\theta) = \arg\max_{x \in X} J(x,\theta). \tag{4}$$

**Proposition 1 (Optimal Pricing, pp. 844-845):** In any optimal contract, consumption is the bliss-point-capped virtual surplus maximizer:

$$\phi^* = \min\{\phi^P, \phi^A\}. \tag{5}$$

The optimal price schedule on $$X^* = [\phi^*(0), \phi^*(1)]$$ is uniquely determined by the standard envelope formula:

$$T^*(x) = u(\phi^*(0),0) + \int_{\phi^*(0)}^{x} u_x\!\left(z,\,\phi^{*-1}(z)\right) dz. \tag{6}$$

Intuition: forcing consumption beyond the bliss point violates (O) because buyers would dispose, so $$\phi \leq \phi^A$$ is necessary. Combined with monotonicity required by (IC), capping at $$\phi^A$$ is both necessary and sufficient for obedience and incentive compatibility. The price formula (6) follows from local (IC) binding.

**Proposition 2 (Multi-part Tariffs, p. 848):** The constrained marginal revenue function $$H: X^* \to \mathbb{R}$$ maps each outcome level to the net marginal gain from additional usage for the type whose bliss point is $$x$$:

$$H(x) = J_x\!\left(x,\,(\phi^A)^{-1}(x)\right). \tag{13}$$

The sufficient condition for $$H(x) > 0$$ is that marginal revenue from usage strictly dominates marginal information rents at the relevant type $$\theta = (\phi^A)^{-1}(x)$$:

$$\underbrace{f(\theta)\,\pi_x(x,\theta)}_{\text{marginal revenue from usage}} > \underbrace{(1-F(\theta))\,u_{x\theta}(x,\theta)}_{\text{marginal information rent}}, \tag{14}$$

where the left side is the per-type marginal profit from usage and the right side is the information rent that must be paid to all higher types to induce truthful purchase revelation. If $$H(x) > 0$$, then $$T^*$$ is flat at $$x$$ (zero marginal price, a multi-part tariff tier). Conversely, if $$T^*$$ is flat at $$x$$, then $$H(x) \geq 0$$. The logic: when $$H(x) > 0$$ the seller would prefer a negative marginal price to incentivize usage, but free disposal makes this unenforceable (buyers would underutilize to capture a negative price without delivering usage value), so zero is the binding constrained optimum.

The closest predecessor, Grubb (2009), demonstrates optimality of three-part tariffs in a model with overconfident consumers. This paper shows that overconfidence maps to a specific external revenue function $$\pi$$, and the framework with free disposal generalizes his result to a broader class of revenue functions and pricing structures.

**Welfare (pp. 855-857):** Consumer welfare under free disposal for type $$\theta$$ is:

$$V(\theta;T) = \sup_{y \in X,\, x \in [0,y]} \left\{u(x,\theta) - T(y)\right\}, \tag{19}$$

and producer welfare is total revenue from type $$\theta$$:

$$\Pi(\theta;T) = \pi(\phi(\theta;T),\theta) + T(\xi(\theta;T)). \tag{20}$$

Let $$V_N$$ and $$\Pi_N$$ denote the corresponding quantities under perfect contractibility of usage (no free disposal). Proposition 3 (p. 856) establishes: for any fixed $$T$$, $$V(\theta;T) \geq V_N(\theta;T)$$ for all $$\theta$$, but under the reoptimized price schedules $$V^*(\theta) \leq V^*_N(\theta)$$ and $$\Pi^*(\theta) \leq \Pi^*_N(\theta)$$ for all $$\theta$$. Proposition 4 (p. 857) shows that when usage becomes more profitable ($$\tilde{\pi}_x \geq \pi_x$$ pointwise) and demand weakens ($$\bar{F}$$ hazard-rate dominates $$F$$), welfare increases for both parties but the gain is bounded above by the gain under perfect contractibility.

## Method

The analysis uses the virtual surplus characterization standard in mechanism design and nonlinear pricing, building on the Mussa and Rosen (1978) framework. The key analytical steps are:

1. **Relaxed problem:** Impose only local (IC) and (O) constraints and derive a pointwise maximization in $$J$$ at each $$\theta$$, giving $$\phi^P$$ as the solution were free disposal absent. The key departure from standard screening is that the obedience constraint (O) is now active: it forces $$\phi \leq \phi^A$$.

2. **Binding obedience:** For types where $$\phi^P(\theta) > \phi^A(\theta)$$, the obedience constraint binds. Monotonicity of $$\phi^*$$ (required by IC) and quasiconcavity of $$J$$ together ensure that capping at $$\phi^A$$ is globally optimal: $$\phi^* = \min\{\phi^P, \phi^A\}$$. The price formula (6) follows from integrating the binding local (IC).

3. **Flatness characterization:** Differentiating (6) gives $$T^{*\prime}(x) = u_x(x,\phi^{*-1}(x))$$ on regions where $$\phi^* < \phi^A$$ (standard positive marginal pricing). On regions where $$\phi^* = \phi^A$$ (obedience binds), the seller is constrained to offer zero marginal prices. The constrained marginal revenue $$H$$ in (13) captures the seller's net gain from this constraint, yielding Proposition 2.

4. **Four pricing schemes (Corollary 1, p. 850):** When $$H$$ crosses zero at most once on $$X^*$$, four cases arise: $$H < 0$$ everywhere (regular pricing); $$H \geq 0$$ everywhere (fixed/free pricing); $$H$$ crosses from negative to positive at $$\hat{x}$$ (premium-tier: positive marginal prices for $$x < \hat{x}$$, zero thereafter); $$H$$ crosses from positive to negative at $$\hat{x}$$ (introductory-offer: zero marginal prices for $$x \leq \hat{x}$$, positive thereafter).

5. **Unlimited subscriptions and trials (Corollary 2, p. 852):** An unlimited subscription ($$T^*$$ flat at $$\phi^*(1)$$, the top of the consumption range) requires $$\pi_x(\phi^A(1),1) > 0$$: marginal usage revenue at the highest-type bliss point is positive, so information rents vanish at the top and usage incentives dominate. A free trial ($$T^*$$ flat at $$\phi^*(0)$$) requires total marginal usage revenue at the lowest-type bliss point to exceed marginal information rents paid to higher types. These conditions are mutually compatible, generating two-tier pricing with both features (Example 2, p. 853).

6. **Bunching extension (online Appendix B.1):** When $$J$$ fails strict single crossing in $$(x,\theta)$$, Nöldeke and Samuelson (2007)'s assignment approach applies. The conclusion of Proposition 2 extends: $$T^*$$ is flat whenever the obedience constraint binds.

7. **Perfect competition (online Appendix B.2):** Under a zero-profit constraint for the monopolist, the equilibrium price schedule maximizes total surplus instead of virtual surplus. Total surplus is maximized at a higher consumption level than virtual surplus (no information rent deduction), making $$\phi^* = \phi^A$$ bind more often. Multi-part tariffs are therefore more prevalent under perfect competition than under monopoly.

## Empirical specifications

This is a pure theory paper with no empirical estimation. The paper includes three closed-form illustrative examples calibrated to digital goods settings:

**Example 1 (Digital platform with advertisements, p. 845):** Quadratic utility $$u(x,\theta) = \theta x - x^2/2$$, uniform types on $$[0,1]$$, and linear-quadratic advertising revenue $$\pi(x,\theta) = \alpha x - (\beta/2)x^2$$ where $$\alpha = pk - c$$ (revenue per unit time net of production cost) and $$\beta = 2ph$$ (user fatigue parameter). The consumer-optimal and producer-optimal consumption functions are:

$$\phi^A(\theta) = \theta, \qquad \phi^P(\theta) = \max\!\left\{0,\,\min\!\left\{1,\,\frac{\alpha + 2\theta - 1}{\beta + 1}\right\}\right\}. \tag{10}$$

Restricting to $$\alpha \leq 1$$ and $$\beta < 1$$, the constrained marginal revenue $$H(x) = (\alpha - \beta x) - (1-x)$$ crosses zero once, generating a premium-tier tariff with a threshold at $$x = (1-\alpha)/(1-\beta)$$ and price schedule:

$$T^*(x) = \begin{cases} \frac{1-\alpha}{2}x - \frac{1-\beta}{4}x^2, & x < \frac{1-\alpha}{1-\beta} \\ \frac{(1-\alpha)^2}{4(1-\beta)}, & x \geq \frac{1-\alpha}{1-\beta}. \end{cases} \tag{12}$$

Figure 3 (p. 853) illustrates all four cases of Corollary 1 as $$(\alpha, \beta)$$ vary.

**Example 2 (Online newspaper subscriptions, p. 853):** Same demand, but exponential advertising revenue $$\pi(x,\theta) = \alpha(1 - e^{-\lambda x})$$ (ads noticed according to a Poisson process with hazard rate $$\lambda$$, one click per consumer). The constrained marginal revenue $$H(x) = \lambda\alpha e^{-\lambda x} - (1-x)$$ can cross zero twice, generating two-tier pricing with both a free trial and an unlimited subscription for $$\lambda = 2.5$$, $$\alpha = 0.5$$ (Figure 4, p. 855). This matches the Wall Street Journal's pricing structure.

**Example 3 (Arbitrary-part tariffs, p. 854):** Revenue $$\pi(x,\theta) = x(1-\theta) - (k/2\pi\omega)[\cos(2\pi\omega x) - 1]$$ is constructed so that $$H(x) = k\sin(2\pi\omega x)$$ crosses zero $$\omega$$ times, generating $$\omega + 2$$ part tariffs. Figure 5 (p. 856) plots three-, four-, and five-part tariffs for $$\omega \in \{1,2,3\}$$.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Pure theory paper; results established analytically | n/a |

The illustrative examples (Examples 1-3) use closed-form parametric functions, not empirical data sources. All results are theoretical propositions.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20220199) if you are: deriving the optimal contract for a specific digital product (online Appendix A has complete proofs); analyzing welfare effects of data-privacy regulation that reduces advertising revenue (Propositions 3-4 give the formal comparison); extending the model to partial contractibility or more general competition (the conclusion maps open directions); checking the bunching case where virtual surplus fails single crossing (online Appendix B.1); or studying competitive equilibrium pricing (online Appendix B.2 shows multi-part tariffs are more prevalent under perfect competition than monopoly).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(3), March 2023. Published under AEA copyright; paywalled. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Extract-only redistribution.

> Corrao, Roberto, Joel P. Flynn, and Karthik A. Sastry. "Nonlinear Pricing with Underutilization: A Theory of Multi-Part Tariffs." *American Economic Review* 113, no. 3 (March 2023): 836-860. DOI: [10.1257/aer.20220199](https://doi.org/10.1257/aer.20220199).
