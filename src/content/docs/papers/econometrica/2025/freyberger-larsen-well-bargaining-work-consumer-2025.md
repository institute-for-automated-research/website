---
title: "How Well Does Bargaining Work: Freyberger & Larsen (2025)"
description: >-
  Distilled: Freyberger and Larsen (2025) derive sharp nonparametric bounds on
  buyer and seller private value distributions and on the first-best trade
  probability from eBay Best Offer bargaining data, using a hierarchy of
  behavioral assumptions without specifying a complete equilibrium model. Under
  preferred assumptions (stochastic monotonicity and positive correlation), at
  least 37% of failed trades are cases where gains from trade existed.
  Econometrica 2025, paywalled. Seven core results with source locators, the
  bounds framework with equations, and the estimation approach.
sidebar:
  label: Freyberger-Larsen 2025
  order: 1
tags: [paper-summary, bargaining, partial-identification, market-microstructure,
       information-asymmetry, peer-reviewed, unreplicated, data:ebay-best-offer]
paper:
  authors: Joachim Freyberger, Bradley J. Larsen
  authorList:
    - { family: Freyberger, given: Joachim, affiliation: University of Bonn }
    - { family: Larsen, given: "Bradley J.", orcid: "0000-0002-8357-0046", affiliation: "Olin Business School, Washington University in St. Louis" }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 1 (January, 2025), 161-194"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA20125
  jel:
    codes: [C78, D82, C14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Auction Theory and Applications', 'Game Theory and Voting Systems', 'Law, Economics, and Judicial Systems']
  dataAccess: proprietary-confidential
  outcome:
    - first-best trade probability P(B >= S) in consumer markets
    - inefficient impasse rate in sequential-offer bargaining
    - buyer and seller private value distributions
  outcomeClass: [market-microstructure]
  license: "paywalled (no license block in Crossref metadata; copyright The Econometric Society 2025)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (doi.org redirect to Wiley/Econometric Society site; 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 4
  methods:
    role: both
    contributes: bargaining-bounds
    family: descriptive
    buildsFrom: [kernel-regression, partial-identification-bounds]
    identification: descriptive
  contributionType: [new-method, new-fact, measurement]
  mechanisms: [information-asymmetry]
  scope:
    region: US
    assetClass: consumer goods (electronics, video games, cell phones, tablets)
    period: 2012-06..2013-05
    frequency: mixed
    dataType: [administrative]
    granularity: [transaction]
    n: "12,012 bargaining sequences, 36 products"
  findings:
    - { ref: R1, outcome: "seller value distribution bounds validity", metric: probability, value: "100% of 36 products have crossing seller monotonicity (A2) bounds; IVE = 0.23", direction: negative, vsBenchmark: "A2 rejected for all products; unobserved heterogeneity invalidates monotonicity (Table III, p. 182)" }
    - { ref: R2, outcome: "buyer value distribution bounds validity", metric: probability, value: "42% crossing rate under independence (A3); 11% statistically significant; IVE = 0.006", direction: mixed, vsBenchmark: "partial rejection of buyer independence; stochastic monotonicity A4 bounds do not cross (Table III, p. 182)" }
    - { ref: R3, outcome: "stochastic monotonicity and positive correlation combined bounds validity", metric: probability, value: "0% crossing rate for A4+A5 combined bounds across all 36 products; IVE = 0", direction: positive, vsBenchmark: "preferred Goldilocks assumptions fully consistent with data (Table III, p. 182)" }
    - { ref: R4, outcome: "first-best trade probability P(B >= S)", metric: probability, value: "P(B >= S) lower bound = 0.508 [95% CI: 0.450, 0.540] for cell phone product; P(sale) = 0.276", direction: positive, vsBenchmark: "implied inefficient impasse = 45.6% (= 1 - 0.276/0.508) (Table V, p. 186)" }
    - { ref: R5, outcome: "inefficient impasse lower bound across all 36 products", metric: probability, value: "median lower bound = 37.3%; range 18.0% to 54.2%", direction: positive, vsBenchmark: "all 36 products have lower bounds above P(sale) under preferred assumptions (Fig. 6B, pp. 187-188)" }
    - { ref: R6, outcome: "inefficient impasse lower bound", metric: pp-effect, value: "-0.058 (S.E. 0.0250) for auto accept/decline users vs. non-users", direction: negative, vsBenchmark: "5.8 pp lower impasse for sellers using auto accept/decline (Table VI Panel A, p. 189)" }
    - { ref: R7, outcome: "inefficient impasse lower bound", metric: pp-effect, value: "-0.119 (S.E. 0.0610) for new vs. used products; t = 1.95", direction: negative, vsBenchmark: "11.9 pp lower impasse for new products, nearly significant at 5% (Table VI Panel C, p. 189)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Myerson and Satterthwaite (1983)", doi: '10.1016/0022-0531(83)90048-0', relation: builds-on, note: "MS impossibility theorem motivates measuring how far real-world bargaining falls from the first-best trade probability" }
    - { cite: "Haile and Tamer (2003)", relation: extends, note: "extends their incomplete-model bounds approach from English auctions to two-sided incomplete-information sequential bargaining" }
    - { cite: "Manski (1989)", doi: '10.2307/145818', relation: builds-on, note: "builds on Manski partial identification and monotone instrumental variables framework for bounding distributions from weak assumptions" }
    - { cite: "Perry (1986)", doi: '10.2307/1913153', relation: tests, note: "Perry equilibrium satisfies stochastic monotonicity and positive correlation but not seller monotonicity when unobserved game-level heterogeneity is present" }
    - { cite: "Cramton (1992)", relation: tests, note: "Cramton equilibrium satisfies all assumptions in the pure model but seller monotonicity is violated when unobserved heterogeneity is added" }
    - { cite: "Keniston (2017)", relation: extends, note: "extends beyond Keniston structural approach by using an incomplete model that does not require optimal behavior or full knowledge of the game structure" }
    - { cite: "Larsen (2021)", doi: '10.2139/ssrn.3990290', relation: cites, note: "Larsen used-car study is the most closely related structural empirical bargaining paper; distinct in requiring stronger behavioral assumptions" }
  openQuestions:
    - "Whether the preferred assumptions (stochastic monotonicity and positive correlation) remain valid beyond consumer eBay bargaining, in settings with more experienced professional negotiators (p. 191-192)."
    - "Future theoretical models of incomplete-information bargaining that capture inefficient impasse and unobserved game-level heterogeneity, as motivated by these empirical findings (p. 191)."
    - "Joint measurement of search-and-matching efficiency and bilateral bargaining efficiency as two components of total market efficiency, which the paper studies only conditionally on matched pairs (pp. 183-184)."
  replicationCode: { url: "https://doi.org/10.5281/zenodo.13937118", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read full PDF pp. 161-194 plus references. Extracted bounds equations, estimation approach, and empirical results. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed 4 errors: (1) eq. 9 used starred X^{S*}_{AC}/X^{S*}_Q (PDF uses unstarred conditional probability X^S_{AC}/X^S_Q at p. 174); (2) A2 description said 'weakly decreasing in y' (wrong direction, upper support is increasing in y per A2.i at p. 172); (3) R6/R7 Table VI locators cited pp. 190/191 (table is on p. 189); (4) R7 Diff S.E. was 0.0605 (Diff S.E. is 0.0610; 0.0605 is the No-column S.E. at Table VI p. 189). All other magnitudes, equations, and frontmatter confirmed." }
  licenceVerification:
    - { source: "Crossref api.crossref.org/works/10.3982/ECTA20125", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata. Title, authors (Freyberger; Larsen), container-title (Econometrica), published (2025), pages (161-194) confirmed. Copyright The Econometric Society 2025. Paper is paywalled." }
---

**What this is.** This is a distilled skeleton of Freyberger and Larsen (2025), *Econometrica*. It records the paper's core bounds results, framework equations, and dataset with locators to specific tables, figures, and equations. Read the original at https://doi.org/10.3982/ECTA20125 to replicate or extend.

## TL;DR

Freyberger and Larsen (2025) use eBay Best Offer platform data to measure how efficiently buyers and sellers in consumer markets reach agreement. Rather than estimating a structural bargaining model, they propose an incomplete-model (partial identification) approach: they derive sharp nonparametric bounds on buyer and seller private value distributions ($$F_B$$, $$F_S$$) and on the counterfactual first-best trade probability $$P(B \geq S)$$ under a hierarchy of behavioral assumptions. The weakest assumption (Assumption A1, revealed preferences only) gives wide bounds. The strongest assumptions (seller monotonicity A2, buyer independence A3, as in Perry (1986) and Cramton (1992)) cross for most products, indicating they are too strong for inexperienced consumer negotiators and fail in the presence of unobserved game-level heterogeneity. The preferred assumptions, stochastic monotonicity (A4) and positive correlation (A5), are consistent with the data for all 36 products and yield informative non-crossing bounds. Under these, the paper finds that for the median product at least 37% of failed trades are inefficient: the buyer genuinely valued the good more than the seller but the parties failed to agree. The auto accept/decline feature and new product status are each associated with lower inefficient impasse, while buyer experience appears to worsen it, consistent with information-rent extraction motives noted by Myerson and Satterthwaite (1983). The approach builds on the partial identification tradition of Manski (1989) and the incomplete-model auction bounds of Haile and Tamer (2003), extending both to a two-sided sequential bargaining setting. Keniston (2017) and Larsen (2021) are the closest related structural empirical studies; this paper extends beyond them by weakening the behavioral assumptions required.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Seller monotonicity bounds (A2) cross for all products, indicating the assumption is violated | Table III, p. 182 | Frac. Cross = 1.00 across 36 products; IVE = 0.23 |
| R2 | Buyer independence bounds (A3) cross for 42% of products; 11% statistically significant | Table III, p. 182 | Frac. Cross = 0.42; Frac. Reject = 0.11; IVE = 0.006 |
| R3 | Stochastic monotonicity + positive correlation (A4+A5) do not cross for any product | Table III, p. 182 | Frac. Cross = 0; IVE = 0 (seller and buyer bounds) |
| R4 | Cell phone product: first-best trade probability lower bound = 0.508 vs. P(sale) = 0.276 | Table V, p. 186 | Implied inefficient impasse = 45.6% (= 1 - 0.276/0.508); 95% CI [0.450, 0.540] |
| R5 | Median product: inefficient impasse lower bound = 37.3%; range 18.0% to 54.2% | Fig. 6B, pp. 187-188 | All 36 products have lower bounds above P(sale) under preferred assumptions |
| R6 | Auto accept/decline: inefficient impasse lower bound 5.8 pp lower for users vs. non-users | Table VI Panel A, p. 189 | Diff = -0.058, S.E. = 0.0250 (statistically significant) |
| R7 | New products: inefficient impasse lower bound 11.9 pp lower than used products | Table VI Panel C, p. 189 | Diff = -0.119, S.E. = 0.0610; t = 1.95 (nearly significant at 5%) |

**Overall (paper's conclusion).** Seller monotonicity, while satisfied in theoretical equilibria such as Cramton (1992) and Perry (1986), is rejected for all 36 products, most likely because unobserved game-level heterogeneity (e.g., aspects of the item's condition known to both parties but not the econometrician) induces nonmonotonicities between the seller's value and first offer. Stochastic monotonicity and positive correlation are consistent with the data and yield the tightest non-crossing bounds. Under these preferred assumptions, real-world eBay consumer bargaining exhibits substantial inefficient impasse: at least 37.3% of failed trades (median product) are cases where the buyer values the good above the seller. Automation tools (auto accept/decline) and new product status are associated with lower impasse; increased buyer experience appears linked to higher impasse, consistent with experienced agents extracting information rents at the cost of reducing total surplus.

## Theory / model

The paper has no formal theoretical model. It proposes an incomplete-model (partial identification) framework whose theoretical content lies in the bargaining game setup, the revealed-preference restrictions, and the sharpness proofs.

**Bargaining game setup (Section 3.1, p. 167).** A seller with private value $$S \sim F_S$$ and a buyer with private value $$B \sim F_B$$ negotiate over the eBay Best Offer protocol. The seller posts a list price as the first offer ($$P_1^S$$); the buyer responds with a first offer ($$P_2^B$$); each party then alternates accepting, countering, or quitting, up to three offers per side. Values represent net willingness to accept (seller) and willingness to pay (buyer) inclusive of outside options. The paper allows $$B$$ and $$S$$ to be correlated across instances through unobserved game-level heterogeneity $$W$$ known to both agents but not the econometrician.

Key sequence-level statistics (p. 167):
- $$X^S_{AC}$$: smallest offer the seller makes or accepts/counters (prices at which she is willing to trade)
- $$X^S_Q$$: largest price at which the seller quits
- $$X^B_{AC}$$: largest price the buyer accepts or offers
- $$X^B_Q$$: smallest price at which the buyer quits

Assumption A1 (revealed preferences, p. 170) implies $$X^S_Q \leq S \leq X^S_{AC}$$ and $$X^B_{AC} \leq B \leq X^B_Q$$ in every realization.

**Representation lemma (p. 167).** Applying the law of iterated expectations:

$$P(S \leq x) = \int P\!\left(S \leq x \mid P_1^S = y\right) dF_{P_1^S}(y), \tag{1}$$

$$P(B \leq x) = \int P\!\left(B \leq x \mid P_1^S = y,\, P_2^B = z\right) dF_{P_1^S, P_2^B}(y, z). \tag{2}$$

These representations are the foundation for all bounds: each assumption restricts the unobserved conditional $$P(S \leq x | P_1^S = y)$$ (or its buyer analogue), which is then bracketed by observed empirical quantities from the sequence of offers, acceptances, and quits.

**Identification logic.** The central objects $$F_S$$, $$F_B$$, and $$P(B \geq S)$$ are not directly observable. The paper asks what can be inferred from observable bargaining actions under progressively stronger behavioral restrictions, without selecting a specific equilibrium. The answer is sharp bounds: for every assumption set, the paper proves that any CDF between the lower and upper bound is consistent with the data and the assumptions (Theorems 1-7, pp. 170-185). Sharpness means there exists a data-generating process satisfying the assumptions under which the true distribution exactly equals the bound.

## Method

The paper derives a hierarchy of sharp bounds on $$F_S$$, $$F_B$$, and $$P(B - S \geq x)$$ under five assumption sets (A1 through A5 for marginal distributions, A6-A7 for the surplus object).

**Unconditional bounds from A1 alone (Theorem 1, p. 170).** Revealed preferences directly imply:

$$P(X^S_{AC} \leq x) \leq F_S(x) \leq P(X^S_Q \leq x), \tag{3}$$

$$P(X^B_Q \leq x) \leq F_B(x) \leq P(X^B_{AC} \leq x). \tag{4}$$

These are the weakest bounds. The seller upper bound is often near 1 because seller quit prices are unobserved when sequences end in agreement or buyer quit.

**Monotonicity bounds from A1+A2 (Theorem 2, p. 172).** Assumption A2 states that $$\overline{\text{supp}}(S | P_1^S = y)$$ is weakly increasing in $$y$$ (sellers with higher first offers have stochastically higher values), and analogously for buyers. Defining $$X^{S*}_{AC}(y) \equiv \overline{\text{supp}}(X^S_{AC} | P_1^S \geq y)$$:

$$\int \mathbf{1}\!\left(X^{S*}_{AC}(y) \leq x\right) dF_{P_1^S}(y) \leq F_S(x) \leq \int \mathbf{1}\!\left(X^{S*}_Q(y) \leq x\right) dF_{P_1^S}(y), \tag{5}$$

with analogous buyer bounds (eq. 6, p. 172). Seller monotonicity bounds cross for all 36 products (R1), and the auto-accept/decline validation confirms the rejection (Section 5.1.1, p. 178-179).

**Independence bounds from A1+A3 (Theorem 3, p. 173).** Assumption A3 states (i) $$S$$ is independent of $$P_2^B$$ conditional on $$P_1^S$$, and (ii) $$B$$ is independent of $$P_1^S$$. With $$m^S_{AC}(x, y, z) = P(X^S_{AC} \leq x | P_1^S = y, P_2^B = z)$$:

$$\int \max_z m^S_{AC}(x, y, z)\, dF_{P_1^S}(y) \leq F_S(x) \leq \int \min_z m^S_Q(x, y, z)\, dF_{P_1^S}(y), \tag{7}$$

$$\max_{y'} P(X^B_Q \leq x \mid P_1^S = y') \leq F_B(x) \leq \min_{y'} P(X^B_{AC} \leq x \mid P_1^S = y'). \tag{8}$$

Buyer independence bounds cross for 42% of products (R2). The paper demonstrates that additive or multiplicative unobserved heterogeneity violates A3 even within Perry (1986) and Cramton (1992) equilibria (Supplemental Appendix G, p. 173-174).

**Stochastic monotonicity bounds from A1+A4 (Theorem 4, pp. 174-175).** Assumption A4 weakens A2 to require only that $$P(S \leq x | P_1^S = y)$$ is weakly decreasing in $$y$$ for all $$x$$. The bounds are:

$$\int \max_{y' \geq y} P(X^S_{AC} \leq x \mid P_1^S = y')\, dF_{P_1^S}(y) \leq F_S(x) \leq \int \min_{y' \leq y} P(X^S_Q \leq x \mid P_1^S = y')\, dF_{P_1^S}(y), \tag{9}$$

with analogous buyer bounds (eq. 10). These are implied by A2 but do not cross.

**Positive correlation bounds from A1+A5 (Theorem 5, p. 175).** Assumption A5 states that $$P(S \leq x | P_1^S = y, P_2^B = z)$$ is weakly decreasing in $$z$$ (one agent's value is stochastically increasing in the other's first offer). Combined with A4:

$$\int \max_{z' \geq z} m^S_{AC}(x, y, z')\, dF_{P_1^S, P_2^B}(y, z) \leq F_S(x) \leq \int \min_{z' \leq z} m^S_Q(x, y, z')\, dF_{P_1^S, P_2^B}(y, z). \tag{11}$$

Combined A4+A5 bounds do not cross for any of the 36 products (R3, Table III), making these the preferred "Goldilocks" assumptions.

**Surplus bounds for $$P(B \geq S)$$ (Theorems 6-7, p. 185).** To bound the first-best trade probability directly, the paper adds Assumption A6 (surplus stochastic monotonicity: $$P(B - S \geq x | P_1^S = y, P_2^B = z)$$ increasing in $$z$$) and A7 (surplus weak monotonicity: $$\overline{\text{supp}}(B - S | P_1^S = y, P_2^B = z)$$ increasing in $$z$$). Under A1, buyer monotonicity A2.ii, and A7:

$$P(B - S \geq x) \geq \int \mathbf{1}\!\left(X^{B*-S}_{AC}(y, z) \geq x\right) dF_{P_1^S, P_2^B}(y, z), \tag{15}$$

where $$X^{B*-S}_{AC}(y, z) \equiv \overline{\text{supp}}(X^B_{AC}(y, z) - X^S_{AC} : P_2^B \geq z, P_1^S = y)$$. Evaluating at $$x = 0$$ gives a lower bound on $$P(B \geq S)$$. The inefficient impasse lower bound is then $$1 - P(\text{sale})/\widehat{P}(B \geq S)^{LB}$$.

**Estimation (Section 4, pp. 176-177).** Conditional probabilities such as $$P(X^S_{AC} \leq x | P_1^S = y)$$ are estimated using the Nadaraya-Watson kernel estimator with an Epanechnikov kernel and bandwidth $$n^{-1/4}$$ for one-dimensional conditioning. For two-dimensional conditioning on $$(P_1^S, P_2^B)$$ the bandwidth is $$n^{-1/5}$$. Because some plug-in estimators are inward biased (artificially tight), the paper modifies them to be half-median-unbiased following Chernozhukov, Lee, and Rosen (2013) (p. 176). All estimation is done separately by product; prices are normalized by the product's reference price.

## Empirical specifications

The estimation sample requires at least 200 bargaining sequences per product after restrictions (nonoverlapping buyer/seller time windows, first-seller-per-buyer limit, exclusion of extreme offers). This yields 12,012 sequences for 36 products (Table A1, Supplemental Appendix, p. 166).

**Bounds validation via auto-accept/decline prices (Section 5.1.1, pp. 178-180).** For the 363 negotiations where sellers reported secret auto-accept and auto-decline thresholds, the paper uses these as known bounds on $$S$$ (auto-accept price is a weak upper bound; auto-decline price is a weak lower bound) to cross-check the estimated $$F_S$$ bounds without using these prices in estimation. Under combined independence + stochastic monotonicity, the estimated bounds are consistent: the auto-accept CDF lies above the $$F_S$$ lower bound and the auto-decline CDF lies below the $$F_S$$ upper bound (Figure 3, right panel, p. 179). Seller monotonicity bounds are rejected by this exercise.

**Bound crossing tests (Section 5.2, Table III, pp. 181-182).** For each assumption set and each product, the paper tests whether the estimated lower bound significantly exceeds the estimated upper bound at any price point on a grid from 0 to 2.5 (increments of 0.1 units of reference price), using 95% one-sided subsampling confidence bands. The integrated violation error (IVE) measures the average excess where lower exceeds upper:

$$\text{IVE} = \int \max\!\left(F^L(x) - F^U(x),\, 0\right) dG(x),$$

where $$G$$ is the unconditional lower bound (sellers) or upper bound (buyers). Table III reports crossing fraction, rejection fraction, and IVE across all 36 products and all assumption sets.

**Inefficient impasse heterogeneity (Section 6.4, Table VI, pp. 188-191).** For each subsample condition (message exchanged, eBay store seller, U.S. buyer, auto accept/decline prices reported, number of photos relative to median, seller rating, seller/buyer experience level, new vs. used product, reference price relative to median), the paper computes the inefficient impasse lower bound $$1 - P(\text{sale})/\widehat{P}(B \geq S)^{LB}$$ separately for observations satisfying and not satisfying the condition, requiring at least 100 qualifying observations per group per product. Within-product differences are averaged across products with standard errors via the delta method. All bounds use surplus weak monotonicity (A7) combined with buyer monotonicity (A2.ii).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| eBay Best Offer bargaining sequences (Backus et al. 2020) | 12,012 bargaining sequences for 36 consumer products; list prices, buyer and seller counteroffers, acceptance and quit decisions, auto-accept/decline thresholds for a subset; U.S. eBay site, June 2012 to May 2013 | no page yet |

Sample: 36 products (bar-code + condition pairs), 12,012 sequences, June 2012 to May 2013 (Table I, p. 166). Reference prices are averages over non-Best-Offer posted-price sales of the same product during the sample period; all offers are expressed as fractions of the reference price.

## When to read the full paper

Read Freyberger and Larsen (2025) if you:
- Are designing or evaluating a bargaining or negotiation mechanism and want empirical benchmarks on inefficiency without imposing Nash bargaining or a specific equilibrium.
- Want to apply partial identification bounds to game-theoretic settings with incomplete information, especially where standard structural assumptions may be violated by unobserved heterogeneity.
- Are studying the eBay Best Offer marketplace or similar consumer negotiation platforms and need a validated nonparametric approach for bounding private value distributions.
- Need to understand which game-theoretic assumptions (monotonicity, independence, stochastic monotonicity, positive correlation) are empirically falsifiable from sequential-offer data and where they fail (Table III cross-check; Figure 3 auto-accept/decline validation, p. 179).

The Supplemental Appendix (Freyberger and Larsen (2024), https://doi.org/10.3982/ECTA20125) contains sharpness proofs (Appendix C), Monte Carlo simulations comparing bias-corrected and uncorrected estimators (Appendix F), and the theoretical analysis of Perry (1986) and Cramton (1992) equilibria under unobserved heterogeneity (Appendix G).

## Attribution and rights

Freyberger, Joachim, and Bradley J. Larsen. "How Well Does Bargaining Work in Consumer Markets? A Robust Bounds Approach." *Econometrica* 93, no. 1 (January 2025): 161-194. https://doi.org/10.3982/ECTA20125

Copyright 2025 The Econometric Society. All rights reserved. No open-access license found in Crossref metadata. Extract-only: this page reproduces no figures or tables verbatim; all results are cited with their original locators.

LLM-distilled by paper-distiller (claude-sonnet-4-6); not human-verified; not reproduced.
