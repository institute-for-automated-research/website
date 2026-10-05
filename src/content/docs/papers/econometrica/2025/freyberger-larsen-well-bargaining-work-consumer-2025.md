---
title: "How Well Does Bargaining Work: Freyberger & Larsen (2025)"
description: >-
  Distilled: Freyberger and Larsen (2025) derive sharp nonparametric bounds on
  buyer and seller private value distributions and on the first-best trade
  probability from eBay Best Offer bargaining data, using a hierarchy of
  behavioral assumptions without specifying a complete equilibrium model. Under
  preferred assumptions (surplus weak monotonicity and buyer monotonicity), the
  median product has a 37.3% lower bound on impasse conditional on gains from trade.
  Econometrica 2025, paywalled. Fifteen core results with source locators, the
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
    - sale probability in consumer markets
    - buyer and seller private value distributions
    - width of buyer and seller private value distribution bounds
  outcomeClass: [market-microstructure]
  license: "paywalled (no license block in Crossref metadata; copyright The Econometric Society 2025)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (doi.org redirect to Wiley/Econometric Society site; 2026-06-26)"
  redistribution: extract-only
  resultsCount: 15
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
    - { ref: R3, outcome: "stochastic monotonicity and positive correlation combined bounds validity", metric: probability, value: "0% crossing rate for A4+A5 combined bounds across all 36 products; IVE = 0", direction: positive, vsBenchmark: "preferred combined assumptions fully consistent with data (Table III, p. 182)" }
    - { ref: R4, outcome: "first-best trade probability P(B >= S)", metric: probability, value: "P(B >= S) lower bound = 0.508 [95% CI: 0.450, 0.540] for cell phone product; P(sale) = 0.276", direction: positive, vsBenchmark: "implied inefficient impasse = 45.6% (= 1 - 0.276/0.508) (Table V, p. 186)" }
    - { ref: R5, outcome: "inefficient impasse lower bound across all 36 products", metric: probability, value: "median lower bound = 37.3%; range 18.0% to 54.2%", direction: positive, vsBenchmark: "all 36 products have lower bounds above P(sale) under preferred assumptions (Fig. 6B, pp. 187-188)" }
    - { ref: R6, outcome: "inefficient impasse lower bound", metric: pp-effect, value: "-0.058 (S.E. 0.0250) for auto accept/decline users vs. non-users", direction: negative, vsBenchmark: "5.8 pp lower impasse for sellers using auto accept/decline (Table VI Panel A, p. 189)" }
    - { ref: R7, outcome: "inefficient impasse lower bound", metric: pp-effect, value: "-0.119 (S.E. 0.0610) for new vs. used products; t = 1.95", direction: negative, vsBenchmark: "11.9 pp lower impasse for new products, nearly significant at 5% (Table VI Panel C, p. 189)" }
    - { ref: R8, outcome: "sale probability in consumer markets", metric: probability, value: "All-products sale probability = 0.30 in 12,012 sequences; mean final price conditional on trade = 0.84 of list price (Table I, p. 166)", direction: none, vsBenchmark: "Descriptive sample benchmark across 36 products" }
    - { ref: R9, outcome: "width of buyer and seller private value distribution bounds", metric: probability, value: "Min/mean/max widths: seller A1 = 0.340/0.416/0.524, A3 = 0.173/0.281/0.433, A4 = 0.334/0.413/0.516, A5 = 0.277/0.369/0.511, A4+A3 = 0.171/0.269/0.380, A4+A5 = 0.271/0.369/0.499; buyer A1 = 0.408/0.428/0.459, A2 = 0.292/0.367/0.429, A3 = 0.097/0.230/0.341, A4 = 0.399/0.418/0.451, A5 = 0.367/0.413/0.437, A2+A3 = 0.089/0.217/0.324, A2+A5 = 0.240/0.343/0.398, A4+A3 = 0.109/0.238/0.346, A4+A5 = 0.364/0.407/0.432 (Table IV, p. 183)", direction: negative, vsBenchmark: "Mean integrated widths show tighter bounds under selected restrictions; seller bounds invoking A2 are omitted because they cross" }
    - { ref: R12, outcome: "inefficient impasse lower bound", metric: pp-effect, value: "High seller reviews vs. low = +0.041 (S.E. 0.0154); high buyer experience vs. low = +0.040 (S.E. 0.0152); high seller/high buyer experience vs. low/low = -0.004 (S.E. 0.0320); high seller/low buyer experience vs. low/low = +0.008 (S.E. 0.0321); low seller/high buyer experience vs. low/low = +0.027 (S.E. 0.0325) (Table VI, p. 189)", direction: mixed, vsBenchmark: "Higher reviews and buyer experience are associated with higher lower bounds; experience-combination differences are imprecise" }
    - { ref: R13, outcome: "buyer and seller private value distribution bounds validity", metric: probability, value: "For combined assumptions, seller A2+A3 and A2+A5 each cross for 100% of products (IVE = 0.23 for both); seller A4+A3 crosses for 19%, rejects for 3%, IVE = 0.00. Buyer A2+A3 crosses for 78%, rejects for 47%, IVE = 0.07; A2+A5 crosses for 3%, no significant rejections, IVE = 0.00; A4+A3 crosses for 42%, rejects for 8%, IVE = 0.006 (Table III, p. 182)", direction: mixed, vsBenchmark: "Crossings vary with the combined behavioral restrictions" }
    - { ref: R14, outcome: "inefficient impasse lower bound", metric: pp-effect, value: "Differences: communication -0.045 (S.E. 0.0415); eBay store -0.042 (0.0255); U.S. buyer -0.043 (0.0319); high photos -0.010 (0.0163); high seller rating -0.002 (0.0156); high seller experience +0.003 (0.0155); high reference price -0.003 (0.0120); high seller/high buyer experience vs. low/low -0.004 (S.E. 0.0320) (Table VI, p. 189)", direction: mixed, vsBenchmark: "These differences are not statistically significant; measures are exploratory lower-bound comparisons" }
    - { ref: R15, outcome: "first-best trade probability P(B >= S)", metric: probability, value: "Preferred surplus weak-monotonicity plus buyer-monotonicity lower bounds: electronics 0.701 [95% CI: 0.606, 0.756] vs. P(sale) = 0.441; video games 0.591 [0.483, 0.650] vs. 0.427; computers/tablets 0.604 [0.494, 0.661] vs. 0.368 (Table V, p. 186)", direction: positive, vsBenchmark: "Each confidence interval lies above its realized sale probability" }
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF. Added missing main-text findings and complete numbered equations and estimation specifications. These additions are not yet re-verified, not human-verified, and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 15 core result rows, equations and specifications, classifications, and prose against the PDF; corrected the impasse conditioning language and Table VI locator and subgroup specification issues." }
  licenceVerification:
    - { source: "Crossref api.crossref.org/works/10.3982/ECTA20125", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata. Title, authors (Freyberger; Larsen), container-title (Econometrica), published (2025), pages (161-194) confirmed. Copyright The Econometric Society 2025. Paper is paywalled." }
---

**What this is.** This is a distilled skeleton of Freyberger and Larsen (2025), *Econometrica*. It records the paper's core bounds results, framework equations, and dataset with locators to specific tables, figures, and equations. Read the original at https://doi.org/10.3982/ECTA20125 to replicate or extend.

## TL;DR

Freyberger and Larsen (2025) use eBay Best Offer platform data to measure how efficiently buyers and sellers in consumer markets reach agreement. Rather than estimating a structural bargaining model, they propose an incomplete-model (partial identification) approach: they derive sharp nonparametric bounds on buyer and seller private value distributions ($$F_B$$, $$F_S$$) and on the counterfactual first-best trade probability $$P(B \geq S)$$ under a hierarchy of behavioral assumptions. The weakest assumption (Assumption A1, revealed preferences only) gives wide bounds. Seller monotonicity A2 bounds cross for all products, while buyer independence A3 bounds cross for 42% of products; combining the strongest assumptions also produces widespread crossings. These results show that the assumptions can be too strong for inexperienced consumer negotiators and can fail in the presence of unobserved game-level heterogeneity. The preferred assumptions, surplus weak monotonicity (A7) and buyer monotonicity (A2.ii), yield informative non-crossing bounds. For the median product, the lower bound on impasse conditional on gains from trade is 37.3%. Seller auto accept/decline use and new product status are associated with lower impasse lower bounds, while more seller reviews and buyer experience are associated with higher lower bounds. The authors suggest that information-rent extraction could explain the latter patterns, but the heterogeneity results are exploratory and not causal. Their focus on inefficient trade is motivated by the impossibility result of Myerson and Satterthwaite (1983). The approach builds on the partial identification tradition of Manski (1989) and the incomplete-model auction bounds of Haile and Tamer (2003), extending both to a two-sided sequential bargaining setting. Keniston (2017) and Larsen (2021) are the closest related structural empirical studies; this paper extends beyond them by weakening the behavioral assumptions required.

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
| R8 | Full-sample descriptive benchmark: sale probability and prices in the 36-product sample | Table I, p. 166 | 12,012 sequences; P(sale) = 0.30; mean final price over list price when trade occurs = 0.84; failed-trade buyer and seller prices = 0.64 and 0.98 |
| R9 | Assumption sets tighten average distribution bounds by different amounts | Table IV, p. 183 | Min/mean/max widths: seller A1 = 0.340/0.416/0.524, A3 = 0.173/0.281/0.433, A4 = 0.334/0.413/0.516, A5 = 0.277/0.369/0.511, A4+A3 = 0.171/0.269/0.380, A4+A5 = 0.271/0.369/0.499; buyer A1 = 0.408/0.428/0.459, A2 = 0.292/0.367/0.429, A3 = 0.097/0.230/0.341, A4 = 0.399/0.418/0.451, A5 = 0.367/0.413/0.437, A2+A3 = 0.089/0.217/0.324, A2+A5 = 0.240/0.343/0.398, A4+A3 = 0.109/0.238/0.346, A4+A5 = 0.364/0.407/0.432 |
| R10 | Secret auto-accept and auto-decline thresholds validate the preferred seller bounds | Figure 3, pp. 179-180 | In the 363-sequence cell-phone subsample, preferred independence plus stochastic-monotonicity bounds contain the empirical threshold CDFs; crossings occur only for seller-monotonicity bounds |
| R11 | List-price recall makes buyer independence bounds cross, while combined monotonicity and positive-correlation bounds remain non-crossing | Figure 5, p. 181 | The independence lower bound lies nearly entirely above its upper bound; combined positive-correlation and monotonicity bounds do not cross |
| R12 | Higher seller reviews and buyer experience are associated with a higher inefficient-impasse lower bound | Table VI, p. 189 | High reviews: +0.041 (S.E. 0.0154); high buyer experience: +0.040 (S.E. 0.0152); high seller/low buyer experience vs. low/low: +0.008 (S.E. 0.0321); low seller/high buyer experience vs. low/low: +0.027 (S.E. 0.0325) |
| R13 | Combined assumptions produce additional rejected and non-rejected bound sets | Table III, p. 182 | Seller A2+A3 and A2+A5 each cross for 100% of products (IVE = 0.23 for both); seller A4+A3 crosses for 19%, rejects for 3%, IVE = 0.00; buyer A2+A3 crosses for 78%, rejects for 47%, IVE = 0.07; A2+A5 crosses for 3%, no significant rejections, IVE = 0.00; A4+A3 crosses for 42%, rejects for 8%, IVE = 0.006 |
| R14 | Other heterogeneity comparisons show no statistically significant differences | Table VI, p. 189 | Difference estimates (S.E.): communication -0.045 (0.0415); eBay store -0.042 (0.0255); U.S. buyer -0.043 (0.0319); high photos -0.010 (0.0163); high seller rating -0.002 (0.0156); high seller experience +0.003 (0.0155); high reference price -0.003 (0.0120); high seller/high buyer experience vs. low/low -0.004 (0.0320) |
| R15 | Preferred first-best trade lower bounds exceed realized sale probabilities for the other three category-leading products | Table V, p. 186 | Electronics: 0.701 [95% CI: 0.606, 0.756] vs. P(sale) = 0.441; video games: 0.591 [0.483, 0.650] vs. 0.427; computers/tablets: 0.604 [0.494, 0.661] vs. 0.368 |

**Overall (paper's conclusion).** Seller monotonicity, while satisfied in theoretical equilibria such as Cramton (1992) and Perry (1986), is rejected for all 36 products, most likely because unobserved game-level heterogeneity (e.g., aspects of the item's condition known to both parties but not the econometrician) induces nonmonotonicities between the seller's value and first offer. Stochastic monotonicity and positive correlation are consistent with the data and yield informative non-crossing bounds. Under the preferred surplus weak-monotonicity and buyer-monotonicity bounds, the median product's lower bound on inefficient impasse conditional on gains from trade is 37.3%. Auto accept/decline use and new product status are associated with lower impasse lower bounds, while more seller reviews and buyer experience are associated with higher lower bounds. The authors suggest that information-rent extraction could explain the latter patterns; these comparisons are exploratory and do not establish causation.

## Theory / model

The paper has no complete equilibrium model. It studies alternating-offer eBay bargaining with fixed private values: a seller with value $$S$$ and a buyer with value $$B$$ bargain over a sequence of seller and buyer offers. Agreement at price $$P$$ yields buyer payoff $$B-P$$ and seller payoff $$P$$; breakdown yields seller value $$S$$ and zero to the buyer. Values are known to the respective agents and may be correlated across bargaining sequences through unobserved game-level heterogeneity (Section 3.1, pp. 167-168; Section 3.2, pp. 168-169).

The observed sequence is summarized by four offer thresholds: $$X^S_{AC}$$, the smallest seller price accepted or countered; $$X^S_Q$$, the seller's quit price; $$X^B_{AC}$$, the largest buyer price accepted or offered; and $$X^B_Q$$, the buyer's quit price. Under revealed preferences A1, $$X^S_Q \leq S \leq X^S_{AC}$$ and $$X^B_{AC} \leq B \leq X^B_Q$$. The distribution representations are:

$$
F_S(x)=P(S\leq x)=\int P(S\leq x\mid P^S_1=y)\,dF_{P^S_1}(y), \tag{1}
$$

$$
F_B(x)=P(B\leq x)=\int P(B\leq x\mid P^S_1=y,P^B_2=z)\,dF_{P^S_1,P^B_2}(y,z). \tag{2}
$$

Equation (1) appears in Section 3.1, p. 167; equation (2) appears in Section 3.1, p. 168. They are the law-of-iterated-expectations representations underlying the sharp bounds. Assumption A1 implies unconditional bounds:

$$
P(X^S_{AC}\leq x)\leq F_S(x)\leq P(X^S_Q\leq x), \tag{3}
$$

$$
P(X^B_Q\leq x)\leq F_B(x)\leq P(X^B_{AC}\leq x). \tag{4}
$$

(Section 3.4, p. 170.)

Assumption A2 is support monotonicity in own first offers: seller value support rises with the seller's first offer, and buyer value support rises with the buyer's offer conditional on the seller's first offer. Let $$X^{S*}_{AC}(y)$$ and $$X^{S*}_Q(y)$$ denote the corresponding conditional support thresholds; $$X^{B*}_{AC}(y,z)$$ and $$X^{B*}_Q(y,z)$$ are their buyer counterparts. The sharp bounds are:

$$
\int \mathbf{1}\!\left(X^{S*}_{AC}(y)\leq x\right)dF_{P^S_1}(y)\leq F_S(x)\leq\int \mathbf{1}\!\left(X^{S*}_Q(y)\leq x\right)dF_{P^S_1}(y), \tag{5}
$$

$$
\int \mathbf{1}\!\left(X^{B*}_Q(y,z)\leq x\right)dF_{P^S_1,P^B_2}(y,z)\leq F_B(x)\leq\int \mathbf{1}\!\left(X^{B*}_{AC}(y,z)\leq x\right)dF_{P^S_1,P^B_2}(y,z). \tag{6}
$$

(Assumption A2 and Theorem 2, p. 172.)

Assumption A3 imposes seller independence from the buyer's first offer conditional on the seller's first offer, and buyer independence from the seller's first offer. With $$m^S_{AC}(x,y,z)=P(X^S_{AC}\leq x\mid P^S_1=y,P^B_2=z)$$ and $$m^S_Q$$ defined analogously, the bounds are:

$$
\int \max_z m^S_{AC}(x,y,z)\,dF_{P^S_1}(y)\leq F_S(x)\leq\int \min_z m^S_Q(x,y,z)\,dF_{P^S_1}(y), \tag{7}
$$

$$
\max_{y'}P(X^B_Q\leq x\mid P^S_1=y')\leq F_B(x)\leq\min_{y'}P(X^B_{AC}\leq x\mid P^S_1=y'). \tag{8}
$$

(Assumption A3 and Theorem 3, p. 173.)

A4 weakens support monotonicity to stochastic monotonicity: conditional seller and buyer CDFs decrease in their own offers. Let $$m^B_Q(x,y,z)=P(X^B_Q\leq x\mid P^S_1=y,P^B_2=z)$$ and define $$m^B_{AC}$$ analogously. Then:

$$
\int \max_{y'\geq y}P(X^S_{AC}\leq x\mid P^S_1=y')\,dF_{P^S_1}(y)\leq F_S(x)\leq\int \min_{y'\leq y}P(X^S_Q\leq x\mid P^S_1=y')\,dF_{P^S_1}(y), \tag{9}
$$

$$
\int \max_{z'\geq z}m^B_Q(x,y,z')\,dF_{P^S_1,P^B_2}(y,z)\leq F_B(x)\leq\int \min_{z'\leq z}m^B_{AC}(x,y,z')\,dF_{P^S_1,P^B_2}(y,z). \tag{10}
$$

A5 captures positive association in the sense that each agent's value is stochastically increasing in the opponent's first offer. Its bounds are:

$$
\int \max_{z'\geq z}m^S_{AC}(x,y,z')\,dF_{P^S_1,P^B_2}(y,z)\leq F_S(x)\leq\int \min_{z'\leq z}m^S_Q(x,y,z')\,dF_{P^S_1,P^B_2}(y,z), \tag{11}
$$

$$
\int \max_{y'\geq y}P(X^B_Q\leq x\mid P^S_1=y')\,dF_{P^S_1}(y)\leq F_B(x)\leq\int \min_{y'\leq y}P(X^B_{AC}\leq x\mid P^S_1=y')\,dF_{P^S_1}(y). \tag{12}
$$

(Assumptions A4-A5 and Theorems 4-5, pp. 174-175.)

For first-best trade, the target is the surplus distribution $$P(B-S\geq x)$$. Under A6, surplus stochastic monotonicity, and buyer monotonicity A2.ii:

$$
P(B-S\geq x)\geq\int \max_{z'\leq z}P\!\left(X^{B*}_{AC}(y,z)-X^S_{AC}\geq x\mid P^S_1=y,P^B_2=z'\right)dF_{P^S_1,P^B_2}(y,z), \tag{13}
$$

$$
P(B-S\geq x)\leq\int \min_{z'\geq z}P\!\left(X^{B*}_Q(y,z)-X^S_Q\geq x\mid P^S_1=y,P^B_2=z'\right)dF_{P^S_1,P^B_2}(y,z). \tag{14}
$$

Under the stronger support restriction A7, surplus weak monotonicity, the sharp bounds become:

$$
P(B-S\geq x)\geq\int \mathbf{1}\!\left(X^{B*-S}_{AC}(y,z)\geq x\right)dF_{P^S_1,P^B_2}(y,z), \tag{15}
$$

$$
P(B-S\geq x)\leq\int \mathbf{1}\!\left(X^{B*-S}_Q(y,z)\geq x\right)dF_{P^S_1,P^B_2}(y,z). \tag{16}
$$

Here $$X^{B*-S}_{AC}(y,z)=\overline{\operatorname{supp}}(X^{B*}_{AC}(y,z)-X^S_{AC}:P^B_2\geq z,P^S_1=y)$$ and $$X^{B*-S}_Q(y,z)=\underline{\operatorname{supp}}(X^{B*}_Q(y,z)-X^S_Q:P^B_2\leq z,P^S_1=y)$$ (Assumptions A6-A7 and Theorems 6-7, pp. 184-185). Evaluating at $$x=0$$ bounds $$P(B\geq S)$$; a lower bound on inefficient impasse is $$1-P(\text{sale})/P(B\geq S)^{LB}$$.

## Method

This is a partial-identification method, not an equilibrium estimator. The authors derive sharp nonparametric lower and upper bounds under A1-A5 for the marginal value CDFs and A6-A7 for the surplus CDF. Assumptions are nested or combined to show how much tighter bounds become and whether the data reject them. They allow correlated values and unobserved game-level heterogeneity and do not specify beliefs, equilibrium refinements, or equilibrium selection (Sections 3.3-3.7, pp. 170-175).

The observed sequence thresholds are formed from accepted/countered and quit offers. The sample support estimators under A2 use the most conservative observed thresholds in each conditional offer set (Section 4.1, p. 176):

$$
\widehat X^{S*}_{AC}(y)=\min_{i:P^S_{1i}\geq y}X^S_{AC,i},\qquad
\widehat X^{S*}_Q(y)=\max_{i:P^S_{1i}\leq y}X^S_{Q,i}.
$$

For conditional probabilities, the Nadaraya-Watson estimator with an Epanechnikov kernel is (Section 4.1, p. 176):

$$
\widehat m(x,w)=\frac{\sum_{i=1}^n K_h(W_i-w)\mathbf{1}(X_i\leq x)}{\sum_{i=1}^n K_h(W_i-w)}.
$$

The bandwidth is $$n^{-1/4}$$ for one conditioning variable and $$n^{-1/5}$$ for two.  Support and bound plug-in estimates use sample analogues, with outward-bias adjustments where available and half-median-unbiased corrections for potentially inward-biased estimators following Chernozhukov, Lee, and Rosen (2013); the two-dimensional support estimators also use a Lipschitz correction and tail truncation (pp. 176-177).

For each product, the estimated bound at a given x averages the appropriate estimated conditional probability or indicator over the observed conditioning offers. As one example, the estimated A4 seller lower bound is:

$$
\widehat F^L_{S,A4}(x)=\frac{1}{n}\sum_{i=1}^n\max_{y'\geq P^S_{1i}}\widehat P(X^S_{AC}\leq x\mid P^S_1=y').
$$

The integrated violation error used to summarize crossings (Section 5.2, pp. 181-182) is:

$$
\text{IVE}=\int\max\{F^L(x)-F^U(x),0\}\,dG(x),
$$

where $$G$$ is the unconditional lower-bound distribution for sellers and the unconditional upper-bound distribution for buyers. The crossing grid runs from 0 to 2.5 in increments of 0.1 reference-price units; crossing rejection uses 95% one-sided subsampling confidence bands (p. 181; Supplemental Appendix E).

## Empirical specifications

The sample is 12,012 eBay Best Offer sequences across 36 products, with at least 200 sequences per product after restrictions. Prices are normalized by product reference prices; estimates are run separately for each product. The data contain offer sequences, accept/counter/quit decisions, transaction status, and, for subsets, auto-accept/decline thresholds and listing/buyer/seller characteristics (Table I, p. 166; Section 4, p. 176). This is not a regression design: there are no regression fixed effects. Bound uncertainty is estimated by subsampling; the heterogeneity table reports standard errors for product-level differences computed by the delta method.

For the Table III specification, each bound is evaluated over the stated grid and the paper records whether the lower bound exceeds the upper bound, whether any crossing is significant, and the product-level IVE; values are then summarized across products (Table III, p. 182). Table IV computes the integrated upper-minus-lower width for each product and reports the minimum, mean, and maximum across products, omitting seller-monotonicity widths where bounds cross (Table IV, p. 183).

The independent validation uses the 363 cell-phone negotiations where sellers report nonzero auto-accept and auto-decline prices. These thresholds are withheld from bound construction; their empirical CDFs are compared with seller-value bounds, providing an out-of-sample consistency check (Figure 3, pp. 179-180). A separate buyer-bound check imposes list-price recall, $$B\leq P^S_1$$, and tests whether this restriction causes buyer-independence bounds to cross (Figure 5, p. 181).

For Table V and Figure 6, the authors estimate bounds on $$P(B\geq S)$$ under surplus stochastic monotonicity, surplus weak monotonicity, buyer monotonicity, and seller monotonicity; compare these with observed sale probabilities; and calculate the implied inefficient-impasse lower bound. Table V reports subsampling 95% confidence intervals for four category-leading products (pp. 185-188). Under the preferred surplus weak-monotonicity plus buyer-monotonicity specification, Figure 6B reports the lower bounds for all 36 products (pp. 187-188).

For Table VI, they recompute the inefficient-impasse lower bound within groups defined by communication, seller store status, buyer location, auto-accept/decline use, listing photos, seller rating/reviews/experience, buyer experience, product condition, and reference price. For each product $$j$$ and condition $$g$$ in Panels A and B, the group-specific lower bound and within-product contrast are:

$$
L_{jg}=1-\frac{P_j(\text{sale}\mid g)}{P_j(B\geq S\mid g)^{LB}},\qquad \Delta_{jg}=L_{jg}-L_{j,\neg g}.
$$ For the comparison group, $$L_{j,\neg g}=1-P_j(\text{sale}\mid\neg g)/P_j(B\geq S\mid\neg g)^{LB}$$. Panel A compares condition met with not met within product; Panel B compares experience combinations with the low-seller/low-buyer experience group. These panels retain products with at least 100 observations in each relevant group. Panel C instead compares estimates across products: two product identifiers observed in both new and used condition, and products above versus below median reference price. Differences are averaged across products; standard errors are computed by the delta method (Table VI, p. 189). The comparisons are exploratory, and the authors caution that selection into characteristics prevents causal interpretation (p. 188).

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
