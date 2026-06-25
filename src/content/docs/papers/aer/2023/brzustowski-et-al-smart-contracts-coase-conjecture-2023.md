---
title: "Smart Contracts and the Coase Conjecture: Brzustowski, Georgiadis-Harris & Szentes (2023)"
description: >-
  Distilled: A durable-good monopolist with access to general dynamic contracts
  (smart contracts) earns an equilibrium payoff strictly above the low buyer
  valuation for any discount factor, refuting the Coase conjecture. American
  Economic Review 2023, paywalled. Four core theoretical results with source
  locators, the formal model (incentive-compatible abiding contracts), and the
  two-lemma proof strategy.
sidebar:
  label: Brzustowski-Georgiadis-Harris-Szentes 2023
  order: 1
tags: [paper-summary, game-theory, mechanism-design, dynamic-contracting,
       durable-goods, coase-conjecture, smart-contracts,
       peer-reviewed, unreplicated]
paper:
  authors: Thomas Brzustowski, Alkis Georgiadis-Harris, Balázs Szentes
  authorList:
    - { family: Brzustowski, given: Thomas, affiliation: London School of Economics and Political Science }
    - { family: Georgiadis-Harris, given: Alkis, affiliation: University of Bonn }
    - { family: Szentes, given: Balázs, orcid: "0009-0009-1552-4505", affiliation: London School of Economics and Political Science }
  year: 2023
  venue: "American Economic Review 113(5), May 2023, 1334-1359"
  venueShort: AER 2023
  doi: 10.1257/aer.20220357
  jel:
    codes: [D42, D82, D86, L12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Auction Theory and Applications', 'Digital Platforms and Economics', 'Consumer Market Behavior and Pricing']
  dataAccess: public
  outcome:
    - seller equilibrium payoff in a durable-good monopoly with dynamic contracts
  outcomeClass: [firm-real-outcomes]
  license: "paywalled (AEA; no CC licence found in Crossref metadata; LSE eprint freely available at http://eprints.lse.ac.uk/117950/1/)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site; LSE eprint at http://eprints.lse.ac.uk/117950/1/ confirmed open; checked 2026-06-25)"
  redistribution: extract-only
  resultsCount: 4
  citedByCount: 23
  methods:
    role: theory
    contributes: abiding-contracts
    family: theory
    buildsFrom: [mechanism-design, principal-agent]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, market-power]
  scope:
    region: theoretical
    assetClass: durable goods
  relatesTo:
    - { cite: "Coase (1972)", doi: '10.1086/466731', relation: builds-on, note: "the original durability-and-monopoly conjecture that frictionless repricing erodes the seller's payoff to competitive level" }
    - { cite: "Gul, Sonnenschein & Wilson (1986)", doi: '10.1016/0022-0531(86)90024-4', relation: builds-on, note: "formal proof of the Coase conjecture with posted prices in continuous time" }
    - { cite: "Stokey (1981)", doi: '10.2307/3003511', relation: builds-on, note: "rational-expectations formalization of the Coase conjecture with posted prices" }
    - { cite: "Laffont & Tirole (1988)", doi: '10.2307/1911362', relation: builds-on, note: "dynamics of incentive contracts without intertemporal commitment; one-period contract approach combined here with full dynamic contracts" }
    - { cite: "Doval & Skreta (2022)", doi: '10.3982/ecta16846', relation: contradicts, note: "Coase conjecture holds with one-period contracts; this paper shows richer dynamic contracts break it" }
  openQuestions:
    - "Whether the main result extends when the seller's contract space is larger than the set of simple and direct contracts D: the paper could not establish whether the seller benefits or is hurt by enlarging D (p. 1353)."
    - "What the seller's optimal contract is, and what the maximum equilibrium payoff pi(C, delta) equals: Theorem 1 gives a lower bound but not the optimum (p. 1353)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1334-1359); four theoretical results extracted from the PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-24, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all four Core results rows confirmed correct; all equations in Theory/model and Method sections verified term-by-term (Theorem 1 p. 1343, Lemma 1 p. 1345, Lemma 2 p. 1347, Definitions 1-2 p. 1344-1345, eqs. 1-3 pp. 1348-1349, eq. 7 p. 1350, payoff formulas p. 1339); one fix applied: JEL codes corrected to add L12 (PDF abstract lists D42, D82, D86, L12)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20220357", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block present in Crossref metadata; AEA paywalled journal; LSE eprint at http://eprints.lse.ac.uk/117950/1/ available as an open deposit" }
  rightsSignalConflict: false
---

**What this is.** The paper's main theorem, the model, the key definitions, and the two-lemma proof strategy: enough to know what it found and how, without reading all 26 pages. To replicate or extend, read the full source at [doi.org/10.1257/aer.20220357](https://doi.org/10.1257/aer.20220357).

## TL;DR

The Coase conjecture states that a durable-good monopolist who cannot commit to future prices will clear the market arbitrarily quickly as the discount factor approaches one, earning only the low buyer valuation. This paper shows the conjecture fails when the seller has access to general dynamic contracts, analogous to smart contracts used in digital markets. The main result (Theorem 1, p. 1343) is that the seller's largest equilibrium payoff is bounded away from the low valuation by a constant that does not depend on the discount factor. The driving mechanism is information storage: smart contracts can hold buyer information the seller does not possess, and abandoning a contract destroys that information. This creates a credible commitment device that breaks the Coasian logic even though the seller retains discretion to switch contracts each period.

## Core results

All results are theoretical; magnitudes are those reported in the paper's propositions and figures.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Coase conjecture fails with dynamic contracts: seller's equilibrium payoff bounded away from $$v_l$$ for all $$\delta$$ | Theorem 1, p. 1343 | There exists $$\underline{\pi} > v_l$$ such that $$\pi(\mathcal{C},\delta) \geq \underline{\pi}$$ for all $$\delta \in (0,1)$$ |
| R2 | Any $$\delta$$-abiding contract provides a lower bound on the seller's equilibrium payoff | Lemma 1, p. 1345 | For any $$\delta$$-abiding $$d \in \mathcal{D}$$, $$\pi(\mathcal{C},\delta) \geq v(d,\delta)$$ |
| R3 | $$\delta$$-abiding contracts exist for all $$\delta \in (0,1)$$ with payoff strictly above $$v_l$$ | Lemma 2, p. 1347 | For all $$\delta \in (0,1)$$, there exists $$d_\delta \in \mathcal{D}$$ with $$v(d_\delta,\delta) \geq \underline{\pi} > v_l$$ |
| R4 | Posted-price seller payoff (Doval and Skreta (2022)) converges to $$v_l$$ as $$\delta \to 1$$; dynamic-contract payoff stays bounded away | Figure 1, §III, p. 1353 | For $$v_l=1, v_h=3, \mu=0.95$$: simple-and-direct equilibrium payoff exceeds posted-price equilibrium payoff for all $$\delta$$; lower bound $$\underline{\pi} > v_l = 1$$ holds uniformly |

**Overall (paper's conclusion).** The Coase conjecture (first articulated by Coase (1972) and formalized by Stokey (1981) and Gul, Sonnenschein, and Wilson (1986)) reflects not only the seller's limited commitment power but also a restricted contract space (price posting). When the contract space expands to general dynamic contracts, the information stored in the contract can deter the seller from abandoning it, effectively providing commitment not because she is bound but because abandonment is unprofitable.

## Theory / model

**Setup.** There is one seller of a durable, indivisible good and one buyer. The buyer's willingness to pay is binary: high ($$v_h$$) or low ($$v_l$$), with $$v_h > v_l > 0$$. The probability of $$v_h$$ is $$\mu \in (v_l/v_h, 1)$$, so the static monopoly price is $$v_h$$. Time is discrete, indexed by $$0, 1, \ldots$$, and both parties discount at the common factor $$\delta \in (0,1)$$. If trade occurs at time $$T$$ at transfer $$p_t$$ (paid each period), payoffs are (p. 1339):

$$
\delta^T v - \sum_{t=0}^{\infty} \delta^t p_t \quad (\text{buyer}), \qquad \sum_{t=0}^{\infty} \delta^t p_t \quad (\text{seller}).
$$

In the initial period, the seller offers a contract from a set $$\mathcal{C}$$ (the contract space). The contract specifies allocations and transfers for every period when it is active. Each subsequent period, the seller decides whether to deploy the current contract or replace it. Contracts resemble smart contracts: they execute automatically once accepted, can be voided by the seller, and may hold information the seller herself cannot observe.

**Simple and direct contracts.** The paper works primarily with a subset $$\mathcal{D} \subset \mathcal{C}$$ of "simple and direct" contracts. A simple and direct contract asks the buyer to report his valuation once in the initial deployment period and makes no further requests; thereafter, the buyer can only accept or reject. Such a contract $$d$$ deployed for $$\tau$$ consecutive periods induces unconditional trade probability and expected transfer in period $$\tau$$ (p. 1344):

$$
X_\tau(v) = \mathbf{x}_\tau(v) \prod_{t=0}^{\tau-1}\bigl[1 - \mathbf{x}_t(v)\bigr], \qquad P_\tau(v) = \mathbf{p}_\tau(v)\,\mathbf{x}_\tau(v)\prod_{t=0}^{\tau-1}\bigl[1 - \mathbf{x}_t(v)\bigr].
$$

**Incentive compatibility.** Let $$U(v,\hat{v},d,\delta)$$ denote the buyer's expected payoff when his type is $$v$$, he reports $$\hat{v}$$, and the contract $$d$$ is deployed forever (p. 1344):

$$
U(v,\hat{v},d,\delta) = \sup_{T \geq 0} \sum_{t=0}^{T} \delta^t \bigl[X_t(\hat{v})\,v - P_t(\hat{v})\bigr].
$$

**Definition 1** (p. 1344): Contract $$d \in \mathcal{D}$$ is $$\delta$$-incentive compatible if for each $$v \in \{v_l, v_h\}$$,

$$
v \in \arg\max_{\hat{v} \in \{v_l,v_h\}} U(v,\hat{v},d,\delta).
$$

**Seller's payoff.** If the incentive-compatible simple-and-direct contract $$d$$ is actively deployed forever, the seller's payoff is (p. 1345):

$$
v(d,\delta) = \mu \sum_{t=0}^{\infty} \delta^t P_t(v_h) + (1-\mu)\sum_{t=0}^{\infty} \delta^t P_t(v_l).
$$

**Abiding contracts (Definition 2, p. 1345).** The key concept. Contract $$d = (X_\tau, P_\tau)_{\tau=0}^{\infty} \in \mathcal{D}$$ is $$\delta$$-abiding if it is $$\delta$$-incentive compatible and:

- (i) $$\sum_{t=T}^{\infty} \delta^{t-T}\bigl[X_t(v)v - P_t(v)\bigr] \geq 0$$ for all $$v \in \{v_l,v_h\}$$, $$T \geq 0$$, so the buyer's continuation payoff is always nonnegative;
- (ii) $$\mu_t(d) \leq v_l/v_h$$ for all $$t \geq 1$$, so conditional on no trade, the seller becomes pessimistic enough that the static monopoly price drops to $$v_l$$;
- (iii) $$\mu_T(d)\sum_{t=T}^{\infty}\delta^{t-T}P_t(v_h) + [1-\mu_T(d)]\sum_{t=T}^{\infty}\delta^{t-T}P_t(v_l) \geq v_l$$ for all $$T \geq 1$$, so the seller's continuation payoff exceeds $$v_l$$ in every future period.

Here $$\mu_t(d)$$ is the seller's posterior probability that the buyer's valuation is $$v_h$$ in period $$t$$, given that the contract has been actively deployed.

**Theorem 1** (p. 1343): *There exists $$\underline{\pi} > v_l$$ such that for all $$\delta \in (0,1)$$,*

$$
\pi(\mathcal{C},\delta) \geq \underline{\pi}.
$$

## Method

The proof proceeds in two lemmas, proved separately and then combined.

**Lemma 1** (p. 1345): *If $$d \in \mathcal{D}$$ is $$\delta$$-abiding, then $$\pi(\mathcal{C},\delta) \geq v(d,\delta)$$.*

The argument: suppose an equilibrium yields the seller less than $$v(d,\delta)$$. Modify the equilibrium so the seller always deploys $$d$$ and the buyer always accepts. On the equilibrium path, the seller's payoff is exactly $$v(d,\delta)$$. Off the path, the seller cannot profitably deviate in the initial period because any alternative contract gives her at most $$v(d,\delta)$$ (by construction of the modification). In subsequent periods, by condition (iii) of Definition 2, the seller's continuation payoff from $$d$$ exceeds $$v_l$$, which is also an upper bound on what she could get by abandoning $$d$$ (abandonment destroys its information content, leaving only the option to clear the market at $$v_l$$). Conditions (i)-(ii) ensure the buyer has no incentive to reject the contract after the initial period.

**Lemma 2** (p. 1347): *For all $$\delta \in (0,1)$$, there exists $$d_\delta \in \mathcal{D}$$ such that $$v(d_\delta,\delta) \geq \underline{\pi} > v_l$$.*

The construction uses a three-parameter family of simple and direct contracts indexed by $$(\alpha, \beta, p) \in [0,1]^2 \times [v_l, v_h]$$. In period $$\tau = 0$$, if the buyer reports $$v_h$$, trade occurs with probability $$\alpha$$ at price $$p$$; if he reports $$v_l$$, there is no trade. For each subsequent period $$\tau > 0$$, trade occurs with probability $$\beta$$ at a price equal to the buyer's initial report, regardless of type.

The high-type buyer's incentive constraint (binding at optimum, eq. (1), p. 1348) is:

$$
\alpha(v_h - p) \geq \frac{\beta\delta}{1-\delta+\beta\delta}(v_h - v_l). \tag{1}
$$

Conditional on no initial trade, the seller's posterior updates via Bayes' rule (eq. (2), p. 1348):

$$
\tilde{\mu}(\alpha) = \frac{(1-\alpha)\mu}{1-\mu+(1-\alpha)\mu}. \tag{2}
$$

Condition (ii) of Definition 2 requires the static monopoly price after the initial period to be $$v_l$$, i.e., (eq. (3), p. 1349):

$$
v_l \geq \tilde{\mu}(\alpha)\,v_h. \tag{3}
$$

The abiding constraint (4) (p. 1349) requires that the seller's continuation payoff from keeping $$d$$ deployed exceeds her payoff from clearing the market at $$v_l$$ immediately. Setting $$\bar{\beta}(\alpha)$$ to be the $$\beta$$ that binds constraint (4) and $$\bar{p}(\alpha)$$ to be the $$p$$ that binds constraint (1), the seller's payoff from the resulting contract is (eq. (7), p. 1350):

$$
v(\alpha) = \mu\alpha\,\bar{p}(\alpha) + (1-\mu\alpha)\,v_l. \tag{7}
$$

The optimal $$\alpha^*$$ maximizes $$v(\alpha)$$ subject to constraint (3). The paper shows (via the envelope theorem) that $$v(\alpha^*)$$ is strictly larger than $$v_l$$ for all $$\mu \in (v_l/v_h, 1)$$ and does not depend on $$\delta$$ for large enough $$\delta$$. Setting $$\underline{\pi} = \min\{\pi_{\bar{\delta}}, \hat{\pi}\}$$ for a small-$$\delta$$ bound $$\hat{\pi}$$ completes the proof.

**Proof of Theorem 1.** Lemma 2 guarantees a $$\delta$$-abiding contract $$d_\delta$$ with $$v(d_\delta,\delta) \geq \underline{\pi} > v_l$$ for every $$\delta$$. Lemma 1 then implies $$\pi(\mathcal{C},\delta) \geq v(d_\delta,\delta) \geq \underline{\pi}$$.

**Discussion.** The paper builds on the approach of Laffont and Tirole (1988) to combine one-period and multi-period contracts in a dynamic principal-agent setting. It compares its result to the model of Doval and Skreta (2022), where the seller is restricted to one-period contracts and the Coase conjecture holds (the seller's payoff converges to $$v_l$$ as $$\delta \to 1$$). The key difference is that one-period contracts have no information content to lose upon abandonment, so the seller always faces the temptation to clear the market quickly. With general dynamic contracts, information stored in the contract deters abandonment; this is the role played by smart-contract-style information storage.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| No empirical data | Pure theory paper; all results are derived from the formal model | n/a |

## When to read the full paper

Read the source at [doi.org/10.1257/aer.20220357](https://doi.org/10.1257/aer.20220357) if you are: studying the robustness discussions (continuous types, side contracts, interim participation, buyer rejection as endogenous abandonment trigger, Section III, pp. 1353-1356); interested in the mechanism-design methodology for modeling limited commitment via an expanded contract space; or comparing the paper's lower bound with the full-commitment payoff and the posted-price equilibrium (Figure 1, p. 1353). The online Appendix contains existence proofs and the result for $$\mathcal{C} = \mathcal{D}$$.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(5). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The journal version is paywalled; an LSE eprint is available at [eprints.lse.ac.uk/117950/](http://eprints.lse.ac.uk/117950/1/).

> Brzustowski, Thomas, Alkis Georgiadis-Harris, and Balázs Szentes. "Smart Contracts and the Coase Conjecture." *American Economic Review* 113, no. 5 (May 2023): 1334-1359. DOI: 10.1257/aer.20220357.
