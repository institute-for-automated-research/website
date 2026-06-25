---
title: "Optimal Procurement with Quality Concerns: Lopomo, Persico & Villa (2023)"
description: >-
  Distilled: This paper derives the optimal procurement mechanism when low-cost suppliers
  are also low-quality (adverse selection), finding that a lowball lottery auction (LoLA)
  with a floor price and a reserve price maximizes any weighted average of buyer surplus
  and social surplus subject to incentive compatibility. Applied to Italian government
  procurement data, the buyer-optimal LoLA yields up to 15 percent higher buyer surplus
  than a first-price auction. American Economic Review 2023, paywalled. Seven core results
  with source locators, the mechanism design model, and LoLA with its defining equations.
  LLM-distilled.
sidebar:
  label: Lopomo-Persico-Villa 2023
  order: 1
tags: [paper-summary, auction-theory, mechanism-design, procurement, adverse-selection,
       information-asymmetry, peer-reviewed, unreplicated, data:italian-procurement]
paper:
  authors: Giuseppe Lopomo, Nicola Persico, Alessandro T. Villa
  authorList:
    - { family: Lopomo, given: Giuseppe, affiliation: "Fuqua School of Business, Duke University" }
    - { family: Persico, given: Nicola, orcid: "0000-0002-2023-1637", affiliation: "Kellogg School of Management, Northwestern University" }
    - { family: Villa, given: "Alessandro T.", affiliation: "Federal Reserve Bank of Chicago" }
  year: 2023
  venue: American Economic Review 113(6), June 2023, 1505–1529
  venueShort: AER 2023
  doi: 10.1257/aer.20211437
  jel:
    codes: [D44, D82, H57, L14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Auction Theory and Applications", "Consumer Market Behavior and Pricing", "Law, Economics, and Judicial Systems"]
  dataAccess: public
  outcome:
    - buyer surplus in procurement with noncontractible quality
    - social surplus in procurement
    - optimal floor price in LoLA
  outcomeClass: [optimal-contract-design, social-welfare]
  license: "Paywalled (no open-license block in Crossref DOI metadata; AER standard subscription access)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 10
  methods:
    role: both
    contributes: lola-procurement
    family: theory
    buildsFrom: [mechanism-design]
    identification: structural
  contributionType: [new-theory, new-method, new-fact]
  mechanisms: [information-asymmetry]
  scope:
    region: Italy (calibration); theoretical
    assetClass: public procurement contracts
    dataType: [administrative]
    granularity: [firm]
    n: "Structural cost-distribution estimates from Decarolis (2018) Italian government auctions"
  findings:
    - { ref: R5, outcome: buyer surplus in procurement, metric: pp-effect, value: "up to 15 percent improvement over FPA at xi=1 (Figure 7, p.1527)", direction: positive, vsBenchmark: first-price auction }
    - { ref: R6, outcome: social surplus in procurement, metric: pp-effect, value: "up to ~20 percent improvement over FPA at xi=1 (Figure 7, p.1527-1528)", direction: positive, vsBenchmark: first-price auction }
    - { ref: R7, outcome: buyer surplus in procurement, metric: pp-effect, value: ">10 percent improvement vs second-price and random assignment (Figure 2, p.1511)", direction: positive, vsBenchmark: "second-price auction and random assignment" }
  resultType: new-finding
  relatesTo:
    - { cite: "Myerson (1981)", doi: '10.1287/moor.6.1.58', relation: extends, note: "optimal auction framework extended to procurement with adverse selection; their second-price optimality obtains as the limiting case pL=cL of the LoLA" }
    - { cite: "Manelli and Vincent (1995)", doi: '10.2307/2171909', relation: extends, note: "their result that random assignment is optimal under severe lemons problems is recovered as the limiting case pL=cH of the LoLA" }
    - { cite: "Decarolis (2018)", doi: '10.1111/iere.12274', relation: builds-on, note: "structural cost-distribution estimates and Italian procurement data used in the Section V calibration exercise" }
  openQuestions:
    - "Optimal mechanism characterization when bidders are asymmetric in cost distribution and quality-concern parameter; numerical results are available but no closed-form analytical solution (Section IVE, p.1521-1522)."
    - "Optimal procurement mechanism in the presence of collusion and repeated interaction; the paper notes a floor price may help under collusion but does not characterize the optimum (Section VI, p.1528)."
  replicationCode: { url: "https://doi.org/10.3886/E182801V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read PDF in full; all locators verified against source pages; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed JEL codes (added L14, confirmed in abstract); added R7 core result row from Figure 2/p.1511 (orphaned findings ref); all equations (4),(6),(11),(12),(18),(19),(20) verified term-by-term; R1-R6 locators and magnitudes confirmed; no em-dashes." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20211437", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No CC or open-license block found; PDF link tagged vor but no license URL or delay-in-days declared; treated as paywalled." }
---

**What this is.** A distilled skeleton of the paper for rapid orientation. Read the [original (doi:10.1257/aer.20211437)](https://doi.org/10.1257/aer.20211437) to replicate or extend the results.

## TL;DR

When quality is noncontractible and low-cost suppliers tend to be low-quality (a "lemons" problem in procurement), standard first-price or second-price auctions perform poorly. Lopomo, Persico, and Villa characterize the optimal mechanism: a lowball lottery auction (LoLA) with a floor price $$p_L$$ and a reserve price $$p_H$$. Bidders with costs below $$p_L$$ pool at that price and one is selected randomly; bidders with costs in $$[p_L, p_H]$$ compete as in a standard second-price auction; bids above $$p_H$$ are excluded. Under a mild regularity condition, the LoLA maximizes any weighted average of buyer surplus and social surplus subject to incentive compatibility and individual rationality. The optimal floor price is independent of the number of suppliers and rises with the severity of the lemons problem. A counterfactual calibration using Italian government procurement data from Decarolis (2018) finds buyer surplus gains of up to 15 percent over first-price auctions at high levels of quality concern.

## Core results

| \# | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | LoLA with optimal $$p_L^*$$ and $$p_H^*$$ solves the weighted welfare maximization problem; sincere bidding is an equilibrium in weakly dominant strategies | Theorem 1, §III, p.1514 | Analytical: LoLA implements the constrained-optimal mechanism for any $$\beta \in [0,1]$$ under Assumption 1 |
| R2 | Optimal floor and reserve prices are independent of the number of suppliers $$N$$; floor price is nondecreasing in the severity of the lemons problem $$\xi$$ for any $$\beta$$; social planner prefers a higher floor price than the buyer | Proposition 1, §III, p.1515-1516 | Comparative static; independent of $$N$$ by conditions (11)-(12) |
| R3 | Increasing $$N$$ raises the weighted welfare generated by the optimal LoLA (unlike standard auctions under adverse selection, where welfare can decrease in $$N$$) | Proposition 2, §III, p.1516-1517 | Analytical; contrast: standard FPA expected surplus $$E[w(c^{(1)})]$$ falls as $$N$$ grows under adverse selection |
| R4 | Sincere-bidding equilibrium is unique almost surely when $$p_H < c_H$$ and there are at least three bidders | Proposition 3, §III, p.1517 | Almost-sure uniqueness; follows from Blume and Heidhues (2004) Vickrey-auction uniqueness result |
| R5 | Italian calibration: buyer surplus up to 15 percent higher in buyer-optimal LoLA than in first-price auction when $$\xi = 1$$; gain is approximately 2.5 percent even at $$\xi \approx 0.5$$ | Figure 7, §VD, p.1527-1528 | 15% buyer surplus gain at $$\xi=1$$; 2.5% gain at $$\xi \approx 0.5$$ |
| R6 | Italian calibration: social surplus improvement up to approximately 20 percent over first-price auction at $$\xi = 1$$; supplier profit improvement exceeds 100 percent | Figure 7, §VD, p.1527-1528 | ~20% social surplus gain; ~100% supplier profit gain at $$\xi=1$$ |
| R7 | Illustrative example (§I): buyer-optimal LoLA ($$p_L^* = 3/4$$) achieves buyer surplus more than 10 percent above the second-price auction ($$p_L = 0$$) and the random assignment mechanism ($$p_L = 1$$) | Figure 2, §I, p.1511 | $$V(3/4) \approx 0.37$$; $$V(0) = V(1) \approx 0.33$$; gain >10% |

**Overall.** The LoLA is a practical mechanism (a reverse second-price auction with a price floor) that is simultaneously optimal for the buyer and for the social planner, differing only in the level of the optimal floor price. The theoretical characterization generalizes both Myerson (1981) (standard auctions optimal when no lemons problem) and Manelli and Vincent (1995) (random assignment optimal under extreme lemons problem) as limiting cases.

## Theory / model

The model (§II, p.1512) has one buyer with known type $$\xi$$ and $$N > 1$$ symmetric suppliers. Supplier $$i$$ has privately known cost $$c_i$$ drawn i.i.d. from density $$f$$ on $$[c_L, c_H]$$. Costs are private and quality is noncontractible. The buyer's value from procuring from a supplier with cost $$c$$ is $$v(c, \xi)$$, which is assumed to be increasing in $$c$$ (the lemons problem: higher-cost suppliers provide higher expected quality). The parameter $$\xi$$ encodes the severity of quality concerns, with $$v_{c\xi}(c, \xi) \geq 0$$. The supplier's profit when selected at payment $$m$$ is $$m - c$$; the buyer's surplus is $$v(c, \xi) - m$$.

The **virtual valuation function** (equation (4), p.1512) is:

$$w(c; \xi, \beta) \equiv v(c; \xi) - c - \beta \frac{F(c)}{f(c)} \tag{4}$$

The ratio $$F(c)/f(c)$$ is the information rent earned by a type-$$c$$ supplier. The parameter $$\beta \in [0,1]$$ encodes the designer's weight on buyer surplus relative to social surplus: $$\beta = 1$$ gives buyer-surplus maximization (Myerson (1981) in reverse) and $$\beta = 0$$ gives social surplus maximization.

**Assumption 1 (Regularity):** $$w(c; \xi, \beta)$$ is quasiconcave in $$c$$. This allows $$w$$ to first decrease then increase in $$c$$ (i.e., a lemons problem can be present) while remaining single-peaked. It is satisfied when $$v$$ is concave and $$F/f$$ is convex (which holds for power, Pareto, and exponential distributions of costs).

A **direct mechanism** specifies, for each supplier $$i$$ and any reported type profile $$c$$, the probability $$q_i(c_i, c_{-i})$$ that supplier $$i$$ is selected and the expected payment $$m_i(c_i, c_{-i})$$ it receives (equation (5), p.1513). By the revelation principle, the optimal mechanism is a truth-telling equilibrium of a direct mechanism.

## Method

The **weighted welfare maximization problem** (equations (6)-(10), §III, p.1513-1514) is:

$$\max_{q,m} \int_{[c_L,c_H]^N} \left\{ \sum_{i=1}^N \left[(v(c_i, \xi) - (1-\beta) \cdot c_i) \cdot q_i(c_i, c_{-i}) - \beta \cdot m_i(c_i, c_{-i})\right] \right\} \prod_{j=1}^N f(c_j)\, dc_j \tag{6}$$

subject to feasibility $$\sum_i q_i \leq 1$$, non-negativity $$q_i \geq 0$$, interim IC (equation (9)), and interim IR (equation (10)).

The paper shows that this problem is solved by a **Lowball Lottery Auction (LoLA)**: a reverse second-price sealed-bid auction with floor price $$p_L$$ and reserve price $$p_H \geq p_L$$, in which bids below $$p_L$$ and above $$p_H$$ are not allowed, and ties at $$p_L$$ are broken uniformly at random (Definition, p.1514).

**Theorem 1** (Optimality of LoLA, p.1514): Under Assumption 1, the LoLA implements the solution to the optimization problem (6)-(10) when the reserve price and floor price are set to:

$$p_H^* = \sup\{c \in [c_L, c_H] \text{ such that } w(c; \xi, \beta) > 0\} \tag{11}$$

$$p_L^* = \max\{p \in [c_L, c_H] \text{ such that } w(p; \xi, \beta) \geq E[w(c; \xi, \beta) \mid c \leq p]\} \tag{12}$$

The reserve price $$p_H^*$$ is the type at which the virtual valuation turns negative (identical to Myerson's reserve price). The floor price condition (12) equates the virtual valuation at $$p_L^*$$ to the average virtual valuation conditional on costs being at or below $$p_L^*$$: this reflects the optimal way to offer the same interim allocation to all types in $$[c_L, p_L^*]$$ simultaneously.

Equilibrium bidding is sincere: suppliers with cost $$c \in [p_L^*, p_H^*]$$ bid their cost $$c$$; suppliers with $$c < p_L^*$$ bid $$p_L^*$$; suppliers with $$c > p_H^*$$ do not bid. The proof builds on `mechanism-design` duality methods and explicitly solves for the shadow prices of the monotonicity constraints (via Lemma 4 in the online appendix), because standard approaches that sidestep monotonicity constraints do not apply under the lemons problem.

**Proposition 4** (FPLoLA equivalence, §IVD, p.1520): The sincere equilibrium of any LoLA can also be implemented by a first-price LoLA (FPLoLA) with the same reserve price and a suitably chosen minimum bid $$b_L \geq p_L$$, where $$b_L$$ is up to 24 percent higher than $$p_L$$ in the Italian calibration.

## Empirical specifications

The Italian calibration (§V, p.1523-1528) illustrates the gains from using the LoLA relative to the first-price auction (the format Italian government procurement actually uses). The buyer payoff function is calibrated using structural estimates from Decarolis (2018) and Decarolis (2019).

**Buyer payoff function (equation (18), p.1523):**

$$v(c, \xi) = \text{const} - K E[D(c, \xi) + O(c, \xi)] \tag{18}$$

where $$D(c, \xi)$$ is the delivery delay ratio, $$O(c, \xi)$$ is the cost overrun ratio, and both are unobserved random variables that depend on the winning supplier's cost $$c$$ and the quality-concern parameter $$\xi$$. After calibration using the empirical marginal distributions $$g_D$$ and $$g_O$$ (Figure 5, p.1524), the calibrated payoff simplifies to:

$$\hat{v}(c, \xi) = \text{const}(\xi) - \xi K[\delta(c) + \omega(c)] \tag{19}$$

where $$\delta(c) = G_D^{-1}([1 - \hat{F}(c)]^N)$$ and $$\omega(c) = G_O^{-1}([1 - \hat{F}(c)]^N)$$.

**Counterfactual computation.** The calibrated virtual valuation $$\hat{w}(c; \xi, \beta) \equiv \hat{v}(c; \xi) - c - \beta \hat{F}(c)/\hat{f}(c)$$ (equation (20), p.1525) is positive for all $$c$$ and $$\beta$$ at the estimated parameters, implying it is optimal to set no reserve price in the LoLA. Optimal floor prices $$p_L^*$$ are then computed from condition (12) for each $$(\xi, \beta)$$ pair (Figure 6, p.1526). For each value of $$\xi \in [0,1]$$, the paper computes expected buyer surplus, supplier profit, and social surplus under the buyer-optimal LoLA and under the first-price auction (Figure 7, p.1527).

The virtual valuation satisfies Assumption 1 (quasiconcavity) for all four displayed values of $$\xi \in \{0, 0.33, 0.67, 1\}$$, confirming that LoLA is optimal in the calibrated setting (Figure 6, p.1526).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Italian government procurement auctions (Decarolis 2019, "Dati Aste") | Estimated cost density $$\hat{f}$$, delay distribution $$g_D$$, and overrun distribution $$g_O$$ used to calibrate the buyer payoff function | no page yet |

Sample: Italian public procurement auctions. Cost units are $$10^5$$ euros. Distributions estimated structurally by Decarolis (2018) and provided to the authors by email (May 10, 2019). Replication data including calibrated distributions are publicly available at [ICPSR E182801V1](https://doi.org/10.3886/E182801V1).

## When to read the full paper

Read Lopomo, Persico, and Villa (2023) to:

- **Understand the full proof** of Theorem 1, particularly the dual solution approach and the shadow prices of monotonicity constraints (online Appendix A).
- **Extend the mechanism** to asymmetric bidders, descending-clock formats, or first-price implementations (Section IV, pp.1517-1522).
- **Use the software** applications (available on GitHub, footnote 7, p.1507) that compute buyer-optimal procurement mechanisms given any cost distribution and value function $$v(c, \xi)$$, including non-LoLA cases.
- **Calibrate the framework** to other procurement settings using the semiparametric calibration method of Section VB, which constructs $$v(c, \xi)$$ from empirical quality distributions conditional on cost.

The calibration results (Figure 7, p.1527) are the entry point for policy analysis; the asymmetric-bidder numerical results (Section IVE, p.1521-1522) are the entry point for applied mechanism designers.

## Attribution and rights

This page is an LLM-distilled extract; it is not human-verified and the results have not been reproduced. Cite the original:

> Lopomo, Giuseppe, Nicola Persico, and Alessandro T. Villa. 2023. "Optimal Procurement with Quality Concerns." *American Economic Review* 113(6): 1505–1529. https://doi.org/10.1257/aer.20211437

Replication data: Lopomo, Persico, and Villa (2023), [ICPSR E182801V1](https://doi.org/10.3886/E182801V1), American Economic Association / ICPSR.

Access: paywalled (AEA subscription). Extract-only; no PDF hosted here.
