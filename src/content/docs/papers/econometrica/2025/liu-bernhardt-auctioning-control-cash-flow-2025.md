---
title: "Auctioning Control and Cash-Flow Rights Separately: Liu & Bernhardt (2025)"
description: >-
  A seller increases expected revenue by sometimes allocating control and cash-flow rights to
  different bidders: separation reduces a controller's information rent because project payoffs
  are most sensitive to his signal when he runs the project. Two ex post incentive-compatible
  separation mechanisms always strictly dominate no-separation English auctions in expected
  revenue for any minimum stake requirement. Econometrica 2025, CC BY 4.0. Six core results
  with source locators, the model equations, and the mechanism designs.
sidebar:
  label: Liu-Bernhardt 2025
  order: 1
tags: [paper-summary, mechanism-design, auction-theory, information-economics, open-access, cc-by, peer-reviewed, unreplicated]
paper:
  authors: Tingjun Liu, Dan Bernhardt
  authorList:
    - { family: Liu, given: Tingjun, orcid: "0000-0002-9553-8510", affiliation: "University of Hong Kong" }
    - { family: Bernhardt, given: Dan, affiliation: "University of Illinois at Urbana-Champaign and University of Warwick" }
  year: 2025
  venue: "Econometrica 93(3), May 2025, 859–889"
  venueShort: Econometrica 2025
  doi: 10.3982/ecta21343
  jel:
    codes: [D44, D82, G34]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Auction Theory and Applications", "Corporate Finance and Governance", "Law, Economics, and Judicial Systems"]
  dataAccess: public
  outcome:
    - seller expected revenue from auction mechanism
    - bidder information rents under interdependent valuations
  outcomeClass: [optimal-contract-design]
  license: "CC BY 4.0 (confirmed via Crossref works/10.3982/ecta21343: content-version unspecified, URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-01-01; corroborated by artifact p. 859 Creative Commons Attribution License notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access (Wiley/Econometrica; CC BY 4.0 confirmed via Crossref 2026-06-26; direct PDF fetch not attempted)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 6
  citedByCount: 3
  methods:
    role: theory
    contributes: separation-auction-mechanism
    family: theory
    buildsFrom: [mechanism-design]
  contributionType: [new-theory, new-method]
  mechanisms: [information-asymmetry]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Myerson (1981)', relation: builds-on, note: 'optimal auction design framework the paper generalizes to allow separation of control and cash-flow rights' }
    - { cite: 'Bergemann and Morris (2008)', relation: extends, note: 'ex post incentive compatibility adopted and proved for both the two-stage auction and the general separation mechanisms' }
    - { cite: 'Ekmekci, Kos, and Vohra (2016)', relation: cites, note: 'single-bidder cash flow split with the seller; this paper instead splits cash flows among multiple bidders' }
    - { cite: 'Mezzetti (2003)', relation: cites, note: 'two-stage mechanisms with interdependent valuations focused on efficiency; this paper focuses on revenue dominance' }
    - { cite: 'Cremer and McLean (1988)', relation: cites, note: 'full surplus extraction with correlated signals requires large side bets; separation yields revenue gains without exploiting correlation' }
  openQuestions:
    - 'A companion working paper characterizes when Mechanism A or Mechanism B is optimal among all incentive-compatible separation mechanisms, focusing on linear valuations with i.i.d. signals satisfying the monotone hazard condition (Section 3.5, p. 880).'
    - 'Extension to multidimensional signals where cash flows have a bidder-specific and a common component is outlined and shown to preserve the qualitative revenue-dominance findings (Section 3.5, p. 880).'
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 859-889); six results extracted from the CC-BY PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all six core-result locators, every displayed equation (eqs. 1-24), and all IC condition inequalities confirmed correct; removed colorful adjective 'novel' from body text." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ecta21343", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: 'license[].content-version=unspecified, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-01-01' }
  rightsSignalConflict: false
---

**What this is.** Core results, the model, and the mechanism designs from Liu and Bernhardt (2025), distilled from the source PDF. To replicate or extend, read the original at [https://doi.org/10.3982/ecta21343](https://doi.org/10.3982/ecta21343).

## TL;DR

The paper studies a classical auction setting where a seller sells a single asset or project to risk-neutral bidders who privately observe signals about the project's future cash flows. The key departure from the standard literature is allowing the seller to allocate control rights and cash-flow rights to different bidders. Because project payoffs are more sensitive to a bidder's signal when he controls the project than when a rival does (single-crossing condition), awarding cash flows to a bidder who does not control the project reduces that bidder's informational advantage, lowering the seller's cost of rent extraction. The paper proposes two families of separation mechanisms (Mechanism A with inefficient control allocation and Mechanism B with efficient control allocation) and proves that each can always be designed to yield strictly higher expected seller revenues than any ex post incentive-compatible no-separation English auction. The gains from separation are largest when the two highest signals are close: the cost of potentially misallocating control is then small, but the benefit of reduced information rents remains positive.

## Core results

Locators refer to the source PDF (Econometrica 93(3), pp. 859–889).

| # | Result | Locator | Statement |
|---|---|---|---|
| R1 | Proposition 1: In the symmetric equilibrium of the two-stage separation auction, bidding strategies are identical to those of a no-separation English auction; the first-stage winner acquires control if and only if $$\Delta(t_1, t_2;\, t_3,\ldots,t_n) \geq p_{\text{extra}}$$; and the equilibrium is ex post incentive compatible | Proposition 1, p. 867 | Equilibrium characterization; ex post IC for any symmetric $$p_{\text{extra}}(\cdot)$$ |
| R2 | Result 1: There exists $$p^* > 0$$ such that for all $$p_{\text{extra}} \in (0, p^*)$$, the two-stage separation auction generates strictly higher expected revenues than the no-separation English auction | Result 1, p. 868 | Strict revenue dominance for sufficiently small constant price offer |
| R3 | Result 2: The revenue-maximizing price offer is the monopoly price conditional on the highest signal being at least $$t_2$$; in the two-bidder i.i.d. uniform-[1,2] linear example: $$p_{\text{extra}}^{\text{optimal}} = (2-t_s)/6$$, accepted with probability 0.5, yielding an expected revenue gain of $$1/18$$ above the no-separation English auction | Result 2, p. 868-869; eq. (17) | Optimal price offer formula; $$1/18$$ revenue gain in the tractable example |
| R4 | Proposition 2: Mechanism A (second-highest bidder receives control plus share $$q$$ of cash flows; highest bidder receives share $$1-q$$) is globally ex post incentive compatible for any separation function $$S$$ whenever $$\rho_{\min} \geq q/(1-q)$$, where $$\rho_{\min}$$ measures the minimum sensitivity of cash flows to the non-controller's signal | Proposition 2, p. 872 | IC condition for Mechanism A (inefficient control allocation) |
| R5 | Proposition 3: Mechanism B (highest bidder receives control plus share $$q$$ of cash flows; second-highest bidder receives share $$1-q$$) is globally ex post incentive compatible for any separation function $$S$$ whenever $$\rho_{\max} \leq q/(1-q)$$; a stake $$q \geq 0.5$$ always satisfies this condition | Proposition 3, p. 876 | IC condition for Mechanism B (efficient control allocation) |
| R6 | Proposition 4: Given the respective IC conditions for Mechanism A or B, separation functions $$S$$ exist for which each mechanism generates strictly higher expected seller revenues than any ex post IC no-separation English auction, for any minimum stake requirement $$q \in [0,1)$$ and any number $$n \geq 2$$ of bidders with weakly affiliated signals | Proposition 4, p. 877 | Revenue dominance in the general setting |

**Overall (paper's conclusion).** The mechanism design literature has focused on settings where the bidder who controls the project receives all cash flows. This paper shows a seller can always do better by designing mechanisms that sometimes allocate control to one bidder and cash flows to another. Separation lowers a controller's information rent because a project's payoff is most sensitive to his signal when he runs it; when signals are close, the cost of assigning control inefficiently is small but the gain from reduced sensitivity is strictly positive, so separation strictly raises revenue over any ex post IC no-separation mechanism.

## Theory / model

There are $$n > 1$$ ex ante identical, risk-neutral bidders for a single asset or project. Each bidder $$i$$ receives a private signal $$t_i \in [\underline{t}, \bar{t}]$$. The bidders and the seller are risk-neutral. Signals are weakly affiliated with a joint density $$f(\mathbf{t})$$ that is symmetric and uniformly continuous and strictly positive on $$[\underline{t}, \bar{t}]^n$$.

**Valuations.** Expected future cash flows from the project under bidder $$i$$'s control are (eq. 1, p. 863):

$$
v_i(t_1,\ldots,t_n) = u(t_i;\,\mathbf{t}_{-i}), \qquad \text{for all } i,
\tag{1}
$$

where $$u$$ is the same for each bidder and symmetric in its last $$n-1$$ arguments. Valuations are interdependent: they depend on all bidders' signals, not just the controller's.

**Single-crossing condition.** A bidder's signal has greater influence on cash flows when he controls the project than when another bidder does (eq. 2, p. 863):

$$
\frac{\partial v_i}{\partial t_i}(\mathbf{t}) \geq \frac{\partial v_j}{\partial t_i}(\mathbf{t}), \qquad \text{for all } i \text{ and all } j \neq i.
\tag{2}
$$

By symmetry, this reduces to $$u_1(t_1;\, t_2,\ldots,t_n) \geq u_2(t_2;\, t_1,\ldots,t_n)$$ (eq. 3, p. 863), where $$u_i$$ denotes the derivative of $$u$$ with respect to its $$i$$th argument. The paper also imposes the strict inequality when $$t_1 = t_2$$ (eq. 4, p. 863), which is the key assumption enabling separation gains. A leading specialization used throughout the examples is the linear valuation function (eq. 5, p. 863):

$$
u(t_i,\,\mathbf{t}_{-i}) = A_n\!\left(t_i + \rho \sum_{j \neq i} t_j\right), \qquad A_n \equiv \frac{1}{1+(n-1)\rho},
\tag{5}
$$

where $$\rho \in (0,1)$$ measures the degree of common values. Higher $$\rho$$ means control assignment matters more for realized cash flows, so the single-crossing difference $$u_1 - u_2$$ is larger.

**Mechanism design variables.** The paper allows direct-revelation mechanisms that allocate control and cash-flow rights separately. Let $$R_j(\mathbf{t}) \in [0,1]$$ be the probability bidder $$j$$ is assigned control and $$Q_{ji}(\mathbf{t}) \in [0,1]$$ be the share of cash flows that bidder $$i$$ receives when bidder $$j$$ controls. Feasibility requires (pp. 863-864):

$$
\sum_j R_j(\mathbf{t}) \leq 1, \qquad \sum_i Q_{ji}(\mathbf{t}) = 1 \;\text{ for all } j, \qquad Q_{jj}(\mathbf{t}) \geq q,
\tag{6--8}
$$

where $$q \in [0,1)$$ is the minimum cash-flow stake the controller must retain. Standard no-separation mechanisms correspond to $$Q_{jj}(\mathbf{t}) = 1$$ and $$Q_{ji}(\mathbf{t}) = 0$$ for all $$i \neq j$$.

**Bidder payoffs and seller revenue.** Bidder $$i$$'s expected profit when his true type is $$t_i$$ but he reports $$t_i'$$ is (eq. 9, p. 864):

$$
U_i(t_i,\, t_i';\,\mathbf{t}_{-i}) \equiv \sum_j R_j(t_i';\mathbf{t}_{-i})\, Q_{ji}(t_i';\mathbf{t}_{-i})\, v_j(\mathbf{t}) - M_i(t_i';\mathbf{t}_{-i}).
\tag{9}
$$

The first term is the expected value of cash flows awarded to bidder $$i$$ (which may be generated under another bidder $$j$$'s control). The seller's expected revenue is (eq. 13, p. 865):

$$
\pi_s = \sum_{i=1}^n \int M_i(\mathbf{t})\, f(\mathbf{t})\, d\mathbf{t}.
\tag{13}
$$

**Intuition from the envelope theorem.** Applying the envelope theorem to the equilibrium profit yields (eq. 14, p. 865):

$$
\frac{d\tilde{U}_i(t_i,t_i)}{dt_i} = \int_{\Omega_{n-1}} \sum_j R_j(\mathbf{t})\, Q_{ji}(\mathbf{t})\, \frac{\partial v_j(\mathbf{t})}{\partial t_i}\, f_{-i}(\mathbf{t}_{-i}|t_i)\, d\mathbf{t}_{-i} + \text{(correlation term)}.
\tag{14}
$$

In no-separation mechanisms, bidder $$i$$ receives cash flows only when he controls, so the relevant sensitivity is $$\partial v_i/\partial t_i$$ (own influence, higher by single-crossing). With separation, bidder $$i$$ may receive cash flows $$Q_{ji}$$ when a rival $$j$$ controls, so the sensitivity is $$\partial v_j/\partial t_i$$ (rival's influence, lower by single-crossing). This reduced sensitivity lowers information rents and raises seller revenue. The gain is zero when signals differ a lot (separation is costly), but strictly positive when signals are close.

**Efficiency gain.** Define the efficiency gain from assigning control to the higher bidder rather than the lower (p. 867):

$$
\Delta(t_1, t_2;\, t_3,\ldots,t_n) \equiv u(t_1;\, t_2,t_3,\ldots,t_n) - u(t_2;\, t_1,t_3,\ldots,t_n).
$$

This gain is nonnegative when $$t_1 \geq t_2$$ and weakly increases in $$t_1$$.

**Relationship to prior work.** The analysis builds on the optimal auction design of Myerson (1981), which considers no-separation mechanisms where the highest bidder always receives both control and cash flows. Mezzetti (2003) studies two-stage mechanisms with interdependent valuations but focuses on implementing efficiency; this paper focuses on revenue. Ekmekci, Kos, and Vohra (2016) consider a related setting where a single buyer splits cash flows with the seller; the paper instead distributes cash flows among multiple bidders, which is the channel for rent reduction that the separation framework adds. Full surplus extraction is achievable with correlated signals per Cremer and McLean (1988), but requires large side bets that create large regrets. Separation yields revenue gains without exploiting correlation and applies to both i.i.d. and affiliated signals.

## Method

The paper proposes and analyzes two families of ex post incentive-compatible separation mechanisms. Both build on `mechanism-design` principles and extend the English auction.

**Two-stage separation auction (Definition 1, p. 867; $$q = 0$$ case).** The first stage is a standard English ascending auction. Losers exit at prices revealing their signals; when the next-to-last bidder exits, the seller offers the first-stage winner a second-stage choice: (a) accept cash flows with control going to the second-highest bidder, paying only the exit price, or (b) pay an additional fee $$p_{\text{extra}}(\cdot) \geq 0$$ to acquire both control and cash flows. The first-stage bidding strategy has the same form as in the no-separation English auction (eq. 15, p. 866):

$$
\beta^k(t_i,\, t_{k+1},\ldots,t_N) = u(t_i;\, t_i,\ldots,t_i,\, t_{k+1},\ldots,t_N),
\tag{15}
$$

the expected cash flows when all $$k$$ active bidders have signal $$t_i$$ and the revealed losing types are $$t_{k+1},\ldots,t_N$$. Proposition 1 shows the winner acquires control if and only if $$\Delta(t_1, t_2;\, t_3,\ldots,t_n) \geq p_{\text{extra}}$$ and this equilibrium satisfies ex post incentive compatibility (the Bergemann and Morris (2008) criterion: no bidder regrets his strategy after observing all signals). Revenue-maximizing price offer (Result 2, p. 869):

$$
p_{\text{extra}}^{\text{optimal}}(t_2,\ldots,t_n) = \Delta\!\left(t^{\text{opt}},\, t_2;\, t_3,\ldots,t_n\right),
$$

where $$t^{\text{opt}} \equiv \arg\max_t \Delta(t, t_2;\, t_3,\ldots,t_n) \int_t^{\bar{t}} f_1(x|\mathbf{t}_{-1})\, dx$$. In the two-bidder i.i.d. uniform-$$[1,2]$$ linear example with $$v_i = \frac{2}{3}t_i + \frac{1}{3}t_{-i}$$, the optimal price offer is (eq. 17, p. 869):

$$
p_{\text{extra}}^{\text{optimal}} = \frac{2 - t_s}{6},
\tag{17}
$$

accepted with probability 0.5, yielding revenue gain $$1/18$$ above the no-separation English auction, despite an expected social welfare loss of $$1/36$$ from occasionally assigning control inefficiently.

**Separation functions (Definitions 2-3, pp. 870-871).** For the general $$q > 0$$ case, both Mechanism A and B are parameterized by a "separation function" $$S(s_1,\ldots,s_{n-1})$$: a symmetric function of the $$n-1$$ reported signals weakly increasing in the highest report $$s_h$$. Bidder $$i$$ with the highest report receives all rights when $$t_i' \geq S(\mathbf{t}_{-i}')$$; otherwise separation occurs. The "quasi-inverse" $$S^{QI}(\mathbf{t}_{-i}')$$ gives the threshold below which bidder $$i$$'s report is low enough to receive neither control nor cash flows.

**Mechanism A: inefficient splitting (Definition 4, p. 871).** When the highest report $$t_1' \geq S(\mathbf{t}_{-1}')$$, bidder 1 receives control and all cash flows and pays (eq. 18, p. 871):

$$
M_1 = u(S(\mathbf{t}_{-1}');\, t_2',\ldots,t_n') - (1-q)\,u(t_2';\, S(\mathbf{t}_{-1}'),\ldots,t_n') + (1-2q)\,u(t_2';\, t_2',\ldots,t_n') + q\,u(S^{QI}(\mathbf{t}_{-1}');\, t_2',\ldots,t_n').
\tag{18}
$$

When $$t_1' < S(\mathbf{t}_{-1}')$$, bidder 2 receives control and share $$q$$ of cash flows; bidder 1 receives share $$1-q$$ and pays (eqs. 19-20):

$$
M_1 = (1-2q)\,u(t_2';\, t_2',\ldots,t_n') + q\,u(S^{QI}(\mathbf{t}_{-1}');\, t_2',\ldots,t_n'),
\tag{19}
$$

$$
M_2 = q\,u(S^{QI}(\mathbf{t}_{-2}');\, t_1', t_3',\ldots,t_n').
\tag{20}
$$

Mechanism A is globally ex post IC if the single-crossing condition holds in the weighted form (Proposition 2, p. 872):

$$
\rho_{\min} \equiv \min_{\mathbf{t}} \frac{\partial v_2(\mathbf{t})/\partial t_1}{\partial v_1(\mathbf{t})/\partial t_1} \geq \frac{q}{1-q}.
$$

For linear valuations $$\rho_{\min} = \rho$$, so the condition is $$\rho \geq q/(1-q)$$: when common values are high (large $$\rho$$) and the minimum stake $$q$$ is small, Mechanism A applies.

**Mechanism B: efficient splitting (Definition 6, p. 875).** When $$t_1' \geq S(\mathbf{t}_{-1}')$$, bidder 1 receives control and all cash flows and pays (eq. 22, p. 875):

$$
M_1 = (1-q)\,u(S(\mathbf{t}_{-1}');\, t_2',\ldots,t_n') + (2q-1)\,u(t_2';\, t_2',\ldots,t_n') + (1-q)\,u(t_2';\, S^{QI}(\mathbf{t}_{-1}'),\ldots,t_n').
\tag{22}
$$

When $$t_1' < S(\mathbf{t}_{-1}')$$, bidder 1 receives control and share $$q$$; bidder 2 receives share $$1-q$$ (eqs. 23-24):

$$
M_1 = (2q-1)\,u(t_2';\, t_2',\ldots,t_n') + (1-q)\,u(t_2';\, S^{QI}(\mathbf{t}_{-1}'),\ldots,t_n'),
\tag{23}
$$

$$
M_2 = (1-q)\,u(t_1';\, S^{QI}(\mathbf{t}_{-2}'),\, t_3',\ldots,t_n').
\tag{24}
$$

Mechanism B is globally ex post IC whenever (Proposition 3, p. 876):

$$
\rho_{\max} \equiv \max_{\mathbf{t}} \frac{\partial v_2(\mathbf{t})/\partial t_1}{\partial v_1(\mathbf{t})/\partial t_1} \leq \frac{q}{1-q}.
$$

A stake $$q \geq 0.5$$ always satisfies $$\rho_{\max} \leq q/(1-q)$$, so Mechanism B can be designed to satisfy any minimum stake requirement and strictly dominate no-separation auctions (Proposition 4).

## Empirical specifications

The paper is a pure theory contribution; all results follow from formal proofs. The primary technique for revenue dominance is a "delta-separation" construction (Appendix, pp. 881-888): for any target signal $$s^*$$, define a separation function $$S_\delta$$ that induces separation only when the highest $$n-1$$ signals are within a small $$\delta$$-interval around $$s^*$$. Expected revenue difference $$E[D]$$ between the separation and no-separation mechanisms decomposes by the law of iterated expectations into two cases:

- **Case 1** (both highest signals in the $$\delta$$-interval): probability shrinks at rate $$\delta^2$$, and the revenue deficit per realization is bounded above by a term linear in $$\delta$$, so $$E[D|\text{Case 1}] \cdot \text{prob}$$ goes to zero at rate $$\delta^3$$.
- **Case 2** (highest signal exceeds the interval, lower signal inside): probability shrinks at rate $$\delta$$, and the revenue surplus per realization is bounded below by a term proportional to $$\omega(1-q) > 0$$ (from the strict single-crossing inequality), so $$E[D|\text{Case 2}] \cdot \text{prob}$$ goes to zero at rate $$\delta^2$$.

For $$\delta$$ small, Case 2 dominates Case 1 and the total expected revenue difference is strictly positive. The argument applies to all $$n \geq 2$$ bidders, any weakly affiliated signal distributions, and any continuous valuation functions satisfying the single-crossing condition, with or without signal correlation.

## Datasets used

This paper is a pure theory contribution with no empirical data.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Theoretical model only | N/A |

## When to read the full paper

Read the source at [https://doi.org/10.3982/ecta21343](https://doi.org/10.3982/ecta21343) if you are: designing auction mechanisms for assets where control and cash-flow rights can be split (venture capital exits, bankruptcy resolution, corporate takeovers); studying mechanism design with interdependent valuations and the role of the single-crossing condition in determining how rent-reducing separation is; extending Bergemann and Morris (2008) ex post IC requirements to settings with multi-dimensional allocation; or working on comparative statics of Mechanisms A vs. B with respect to the minimum stake $$q$$. Propositions 2 and 3 give the exact IC thresholds on $$\rho_{\min}$$ and $$\rho_{\max}$$; Proposition 4 and the Appendix contain the revenue-dominance proof and the delta-separation construction for arbitrary bidder counts and signal distributions.

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93, no. 3 (May 2025): 859-889. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Liu, Tingjun, and Dan Bernhardt.
> "Auctioning Control and Cash-Flow Rights Separately."
> *Econometrica* 93, no. 3 (May 2025): 859-889.
> DOI: 10.3982/ecta21343. (c) 2025 The Authors. Econometrica published by John Wiley and Sons Ltd on behalf of The Econometric Society.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
