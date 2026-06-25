---
title: "Optimal Insurance: Gershkov, Moldovanu, Strack & Zhang (2023)"
description: >-
  Distilled: Characterizes profit-maximizing insurance menus under adverse selection
  with dual-utility (Yaari 1987) agents and random losses: optimal contracts are layer
  contracts where the retention slope is 0 or 1 almost everywhere, deductibles arise
  when private information concerns loss probability, and coverage limits when it
  concerns loss magnitude. American Economic Review 2023, paywalled. Seven core
  theoretical results with source locators, the model, and the solution method.
sidebar:
  label: Gershkov et al. 2023
  order: 1
tags: [paper-summary, insurance, adverse-selection, mechanism-design, contract-theory, peer-reviewed, unreplicated]
paper:
  authors: Alex Gershkov, Benny Moldovanu, Philipp Strack, Mengxi Zhang
  authorList:
    - { family: Gershkov, given: Alex, orcid: "0000-0002-6062-8428", affiliation: "Hebrew University of Jerusalem; University of Surrey" }
    - { family: Moldovanu, given: Benny, affiliation: University of Bonn }
    - { family: Strack, given: Philipp, orcid: "0000-0002-7960-9243", affiliation: Yale University }
    - { family: Zhang, given: Mengxi, orcid: "0000-0002-1070-8614", affiliation: University of Bonn }
  year: 2023
  venue: American Economic Review 113(10), October 2023, 2581-2614
  venueShort: AER 2023
  doi: 10.1257/aer.20221247
  jel:
    codes: [D82, D86, G22]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Healthcare Policy and Management", "Insurance and Financial Risk Management"]
  dataAccess: public
  outcome:
    - optimal insurance contract structure (deductible vs coverage limit menu)
    - insurer expected profit under adverse selection with dual-utility agents
    - consumer welfare under optimal insurance mechanism
  outcomeClass: [social-welfare]
  license: "AEA copyright; no CC license found in Crossref record; individual use on aeaweb.org"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website; no CC licence in Crossref record 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 13
  methods:
    role: theory
    family: theory
    buildsFrom: [mechanism-design, principal-agent, yaari-dual-utility]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, moral-hazard]
  scope:
    region: theoretical
    assetClass: insurance contracts
  relatesTo:
    - { cite: 'Rothschild and Stiglitz (1976)', doi: '10.2307/1885326', relation: extends, note: 'generalizes their competitive adverse-selection insurance model to a monopoly with dual-utility agents and random losses' }
    - { cite: 'Stiglitz (1977)', doi: '10.2307/2296899', relation: extends, note: 'extends his monopoly adverse-selection insurance model from expected utility and fixed losses to dual utility and random losses' }
    - { cite: 'Yaari (1987)', doi: '10.2307/1911158', relation: builds-on, note: 'adopts the dual utility (probability distortion) framework as the agent preference representation' }
    - { cite: 'Chade and Schlee (2012)', doi: '10.3982/te671', relation: contradicts, note: 'they show full insurance is never optimal under expected utility; here full insurance can be optimal under dual utility with random losses (Example 2, p. 2601)' }
    - { cite: 'Liang, Zou, and Jiang (2022)', doi: '10.1016/j.insmatheco.2022.03.002', relation: extends, note: 'they study two-type insurance with distortion risk measures; this paper handles a continuum of types and general loss distributions' }
    - { cite: 'Gershkov et al. (2022)', doi: '10.1093/restud/rdab096', relation: builds-on, note: 'their work on optimal auctions with nonexpected utility and constant risk aversion informs the mechanism design approach here' }
    - { cite: 'Koszegi and Rabin (2006)', doi: '10.1162/qjec.121.4.1133', relation: builds-on, note: 'their loss-averse preferences with linear utility over outcomes are a special case of Yaari dual utility (Section IA, p. 2590)' }
  openQuestions:
    - "Whether restriction to static, nonrandomized mechanisms is without loss of generality; the paper conjectures it is under weak conditions but does not formally prove it (p. 2591)."
    - "Extension to competitive insurance markets with dual-utility agents; the analysis covers only a monopolistic insurer (Conclusion, p. 2605)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 2581-2614); seven theoretical results extracted from the paywalled PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; one equation error fixed: equation (7) had indicator 1{J>=0} corrected to 1{J<=0} (the pointwise optimum retains the marginal loss when J<=0, not J>=0; confirmed by Theorem 3 deductible/coverage-limit characterisation and by the submodularity argument on the same page)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20221247", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block present; container-title: American Economic Review; published 2023-10-01; AEA copyright, paywalled." }
  rightsSignalConflict: false
---

**What this is.** The paper's core theoretical results, the dual-utility insurance model, and the mechanism design method: enough to understand what was found and how, without reading all 34 pages. To replicate or extend the results, read the full source at the [original](https://doi.org/10.1257/aer.20221247).

## TL;DR

Gershkov, Moldovanu, Strack, and Zhang study a monopoly insurance market under adverse selection where agents have dual utility (Yaari 1987), meaning they weight probabilities via a distortion function rather than taking expectations, and face random losses whose distribution is correlated with their privately known risk type. This generalizes Rothschild and Stiglitz (1976) and Stiglitz (1977) in two directions: from expected utility to dual utility, and from a single fixed loss to a random distribution of losses correlated with the agent's type.

The central result (Theorem 1) characterizes the optimal retention function as a "layer contract": for each loss level, the agent either retains the entire marginal loss or the insurer covers it entirely, so the derivative of the retention function is in {0, 1} almost everywhere. Whether the optimal menu uses deductibles or coverage limits depends on the direction of private information. When the agent's type governs loss probability, the virtual value single-crosses from below, and deductibles are optimal. When the type governs loss magnitude, coverage limits are optimal, even though they are the worst possible contract for any given expected cost (Theorem 2). The welfare gain from reduced information rents dominates the efficiency loss from offering the worst contract form.

In contrast to Chade and Schlee (2012) under expected utility, where full insurance is never optimal, full insurance to some types can be optimal here because dual utility agents exhibit first-order risk aversion.

## Core results

All results are theoretical; locators point to theorems, propositions, and examples in the source PDF.

| # | Result | Locator | Key statement |
|---|---|---|---|
| R1 | **Layer contract structure**: the optimal retention function satisfies $$\partial R / \partial l \in \{0,1\}$$ almost everywhere; each marginal dollar of loss is either fully retained by the agent or fully covered by the insurer | Theorem 1, pp. 2595-2596 | The profit-maximization objective is linear in $$\partial R / \partial l$$; extreme points of the feasible set of Lipschitz-1 retention functions satisfy $$\partial R / \partial l \in \{0,1\}$$ a.e. (Bauer's maximum principle) |
| R2 | **SOSD ranking of contract forms**: for any strongly risk-averse agent (averse to mean-preserving spreads), the deductible contract second-order stochastically dominates any doubly monotone contract with the same expected cost, which dominates the coverage limit contract | Theorem 2, p. 2600 | $$R_C(\cdot,\theta) \leq_{\text{SOSD}} R_I(\cdot,\theta) \leq_{\text{SOSD}} R_D(\cdot,\theta)$$ for any contract $$I$$ with the same expected cost; deductibles are welfare-maximizing at fixed cost |
| R3 | **Deductible menu is optimal** when the virtual value $$J(l,\theta)$$ crosses zero from below in $$l$$: the insurer offers a menu of deductible-premium pairs $$(D(\theta), t(\theta))$$ | Theorem 3(i), p. 2600; Example 2, pp. 2600-2601 | Holds when private information concerns loss probability (equation (1)); the optimal deductible $$D^*(\theta)$$ is nonincreasing in the agent's degree of loss aversion |
| R4 | **Coverage limit menu is optimal** when $$J(l,\theta)$$ crosses zero from above in $$l$$: the insurer offers a menu of cap-premium pairs $$(C(\theta), t(\theta))$$ | Theorem 3(ii), p. 2600; Example 3, p. 2602 | Holds when private information concerns loss magnitude; in Example 3, $$C^*(\theta) = \theta^2 f(\theta) / [2(1 - F(\theta))]$$ is increasing in $$\theta$$ |
| R5 | **Higher risk aversion raises insurer profit**: if $$g_2(p) < g_1(p)$$ for all $$p \in (0,1)$$ (agent 2 is more risk averse than agent 1), the insurer's profit under $$g_2$$ is strictly higher | Proposition 2, p. 2599 | More risk-averse agents value coverage more; for any fixed retention function the premium extractable from a more risk-averse agent is higher, and adjusting to the optimal retention amplifies the gain |
| R6 | **Finite losses**: with $$n$$ possible loss levels $$l_1 < \dots < l_n$$, the optimal deductible menu uses at most $$n+1$$ contracts; each offered deductible equals one of the $$n$$ loss values or 0 | Proposition 3, p. 2603 | The optimal mechanism is a basic deductible-premium contract plus a finite ladder of add-on fees that progressively reduce the deductible; full insurance is one possible top rung |
| R7 | **Single fixed loss (Stiglitz 1977 case)**: the optimal menu offers either full insurance (deductible = 0) or no insurance (deductible = $$\bar l$$); partial insurance is never optimal | Corollary 1, p. 2604 | Follows from Proposition 3 with $$n = 1$$; extends the DeFeo and Hindriks (2014) result to dual utility; contrasts with Chade and Schlee (2012) under EU where full insurance is never optimal |

**Overall (paper's conclusion).** Layer contracts (deductibles and coverage limits) emerge endogenously from first principles under dual utility with adverse selection. The form of the optimal menu depends on which component of the agent's private information drives the loss distribution, explaining the structural difference observed in practice between property/casualty insurance (deductibles) and medical malpractice insurance (coverage limits).

## Theory / model

**Setup.** An agent faces a random loss $$L$$ distributed on $$[0, \bar L]$$. The agent's private type $$\theta \in \Theta = [\underline\theta, \bar\theta]$$ parameterizes the conditional loss distribution $$H_\theta : \mathbb{R}_+ \to [0,1]$$ via $$H_\theta(l) = \Pr(L \leq l \mid \theta)$$. Higher types face stochastically larger losses in first-order stochastic dominance; $$H_\theta$$ is decreasing in $$\theta$$. Types are distributed according to $$F$$ with density $$f$$ (p. 2587).

Two canonical cases illustrate the model. When the type is the accident probability (Rothschild and Stiglitz 1976; Stiglitz 1977 classical setting):

$$
H_\theta(l) = (1 - \theta) + \theta Q(l), \tag{1}
$$

where $$Q$$ is a fixed conditional loss distribution given an accident (p. 2588, equation 1). When the type scales the loss magnitude:

$$
H_\theta(l) = Q(l / \theta),
$$

so all types face the same accident probability but higher types incur proportionally larger losses (p. 2588).

**Dual (Yaari) utility.** Agents have Yaari (1987) dual utility determined by a probability distortion function $$g : [0,1] \to [0,1]$$, increasing, absolutely continuous, with $$g(p) \leq p$$ (weak risk aversion). For a random total loss $$x$$ distributed according to $$H$$, the certainty equivalent is (p. 2589):

$$
CE(x) = -\int_0^\infty \left[1 - g(H(s))\right] ds. \tag{2}
$$

Dual utility modifies the expectation operator by reweighting each loss level $$s$$ by $$g'(H(s))$$; the condition $$g(p) \leq p$$ implies the agent overweights the probability of large losses, generating first-order risk aversion (the risk premium is proportional to the standard deviation of the loss, not its variance). A key property for tractability is additivity in nonrandom transfers: $$CE(x + t) = CE(x) + t$$, which makes the mechanism design problem separable in premia (p. 2589).

Koszegi and Rabin (2006) loss-averse preferences with linear utility over outcomes correspond to the distortion $$g(p) = (2-\lambda)p + (\lambda-1)p^2$$ for $$\lambda \in (1,2]$$, a special case of dual utility (p. 2590).

**Insurance contracts.** A direct mechanism offers a menu of retention functions $$R(\cdot, \theta)$$ and premia $$t(\theta)$$, where $$R(l, \theta) \in [0, l]$$ is the share of loss $$l$$ retained by type $$\theta$$. Two ex post moral hazard conditions (Assumption 1, p. 2591) restrict the retention slope: $$(i)$$ $$\partial R(l,\theta)/\partial l \geq 0$$ (the agent cannot inflate a reported loss to reduce retention), and $$(ii)$$ $$\partial(l - R(l,\theta))/\partial l = 1 - \partial R/\partial l \geq 0$$ (the agent cannot hide part of a loss to claim higher indemnity). Together these require $$\partial R(l,\theta)/\partial l \in [0,1]$$ almost everywhere.

Under the additivity of dual utility, the certainty equivalent of contract $$(R(\cdot,\theta), t(\theta))$$ to type $$\theta$$ is (p. 2591):

$$
U(\theta) = -t(\theta) - \int_0^{\bar L} \left[1 - g(H_\theta(l))\right] \frac{\partial R(l,\theta)}{\partial l}\, dl. \tag{3}
$$

## Method

**Incentive compatibility envelope.** Dual utility's linearity in $$\partial R / \partial l$$ permits a simple envelope characterization (Proposition 1, p. 2593). Any incentive-compatible mechanism satisfies:

$$
U(\theta) = U(\underline\theta) + \int_{\underline\theta}^{\theta} \left[\int_0^{\bar L} \frac{\partial R(l,s)}{\partial l}\, g'(H_s(l))\, \frac{\partial H_s(l)}{\partial s}\, dl \right] ds. \tag{4}
$$

Integration by parts yields the insurer's expected profit as a functional of $$R$$ alone:

$$
\pi(R) = \int_{\underline\theta}^{\bar\theta} \left[-E[L(\theta)] - \int_0^{\bar L} \frac{\partial R(l,\theta)}{\partial l}\, J(l,\theta)\, dl \right] f(\theta)\, d\theta - U(\underline\theta), \tag{5}
$$

where the **virtual value** (analogous to the Myerson virtual value in mechanism design) is (p. 2593):

$$
J(l,\theta) = H_\theta(l) - g(H_\theta(l)) + \frac{1-F(\theta)}{f(\theta)}\, g'(H_\theta(l))\, \frac{\partial H_\theta(l)}{\partial \theta}. \tag{6}
$$

The first two terms $$H_\theta(l) - g(H_\theta(l)) \geq 0$$ measure the efficiency gain from covering the marginal loss at level $$l$$ for type $$\theta$$ (the agent's valuation exceeds the insurer's cost because of risk aversion). The third term is the information rent cost: since $$\partial H_\theta / \partial\theta < 0$$, the product $$g'(H_\theta(l))(\partial H_\theta/\partial\theta)$$ is nonpositive, so higher types require larger information rents that reduce the effective profit from insuring them.

**Pointwise linear optimization.** For each $$\theta$$, the integrand in (5) is linear in $$\partial R(l,\theta)/\partial l$$. The feasible set of retention functions satisfying Assumption 1 is convex. By Bauer's maximum principle, the maximum is attained at an extreme point of this set, and extreme points of the unit ball of Lipschitz-1 functions on $$[0, \bar L]$$ have derivative in $$\{0,1\}$$ almost everywhere (p. 2608). The pointwise optimum therefore sets:

$$
\frac{\partial R^*(l,\theta)}{\partial l} = \mathbf{1}\{J(l,\theta) \leq 0\}. \tag{7}
$$

When $$J(l,\theta)$$ is nondecreasing in $$\theta$$ for all $$l$$ (the regularity condition of Theorem 1), the resulting $$R^*$$ is submodular: $$\partial R(l,\theta') / \partial l \leq \partial R(l,\theta) / \partial l$$ for $$\theta' > \theta$$, meaning higher-risk types receive more coverage at each loss level. Proposition 1(ii) shows submodularity of $$R$$ is sufficient for incentive compatibility; thus the pointwise solution is also the global optimum of the original screening problem.

**Deductible and coverage limit forms.** A deductible $$D(\theta)$$ and a coverage limit $$C(\theta)$$ correspond to (p. 2599):

$$
R_D(l,\theta) = \begin{cases} l, & l < D(\theta) \\ D(\theta), & l \geq D(\theta) \end{cases}, \qquad R_C(l,\theta) = \begin{cases} 0, & l \leq C(\theta) \\ l - C(\theta), & l > C(\theta) \end{cases}. \tag{8}
$$

Whether $$J(l,\theta)$$ crosses zero from below (deductibles) or from above (coverage limits) as a function of $$l$$ is governed by the direction of private information. In the loss-probability case (equation (1)), $$J$$ typically crosses from below, yielding deductibles optimal. In the loss-magnitude case, $$J$$ crosses from above, yielding coverage limits optimal. Gershkov et al. (2022) develop related tools for nonexpected utility in auction settings.

Liang, Zou, and Jiang (2022) study a two-type variant with distortion risk measures; the full continuum is handled here by the pointwise separability of the profit functional.

## Empirical specifications

This paper presents no empirical analysis; all results are theorems, propositions, and corollaries derived from the model. Examples 1 through 4 illustrate the general results with specific parametric choices for the distortion function $$g$$ and the type-conditional loss distribution $$H_\theta$$, but use no data. The paper cites empirical patterns from prior literature (household deductible choices in Sydnor 2010; Barseghyan et al. 2013; medical malpractice coverage limits in Silver et al. 2015) for motivation only.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Pure theoretical analysis; no datasets collected or analyzed | n/a |

This is a theory paper. Empirical patterns cited in the introduction and related literature (household insurance data, malpractice claims) come from prior published work, not new data collection.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20221247) if you are: extending the mechanism design approach to other nonexpected utility frameworks beyond dual utility; studying competitive (multi-insurer) adverse selection with probability-distorting agents; analyzing the welfare implications of mandating deductibles vs coverage limits in regulated insurance markets; examining when coinsurance (linear contracts, which are never optimal under this framework) is appropriate; or working through the formal proofs and examples in the appendix and online appendices.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(10), October 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The paper is under AEA copyright; no CC license was found. Extract-only: do not reproduce the full text.

> Gershkov, Alex, Benny Moldovanu, Philipp Strack, and Mengxi Zhang.
> "Optimal Insurance: Dual Utility, Random Losses, and Adverse Selection."
> *American Economic Review* 113, no. 10 (October 2023): 2581–2614.
> DOI: 10.1257/aer.20221247. © 2023 American Economic Association.
