---
title: "Dealer Competition in OTC Markets: Singer (2026)"
description: >-
  Distilled: A model of OTC dealer competition as a first-price sealed-bid
  common-value auction shows that information heterogeneity arises endogenously
  and generates core-periphery market structures in which better-informed core
  dealers quote tighter bid-ask spreads, earn higher margins, and trade more
  frequently. Journal of Financial Markets 2026, CC BY 4.0. Fourteen core results
  with source locators and the numbered main-text equations.
sidebar:
  label: Singer 2026
  order: 1
tags: [paper-summary, otc-markets, market-microstructure, dealer-competition,
       auction-theory, information-acquisition, open-access, cc-by,
       peer-reviewed, unreplicated]
paper:
  authors: Alexander Singer
  authorList:
    - { family: Singer, given: Alexander, orcid: 0000-0001-5436-8394, affiliation: Leipzig University }
  year: 2026
  venue: Journal of Financial Markets 77 (2026) 101004
  venueShort: J. Fin. Markets 2026
  tier: lower
  doi: 10.1016/j.finmar.2025.101004
  jel:
    codes: [D44, D83, D85, G12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Auction Theory and Applications', 'Consumer Market Behavior and Pricing', 'Merger and Competition Analysis']
  dataAccess: public
  outcome:
    - dealer bid-ask spreads
    - dealer trading margins and trading frequencies
    - dealer expected trading revenues
    - core-periphery OTC dealer market structure
    - investor transaction costs in OTC markets
    - dealer information acquisition
    - social welfare
  outcomeClass: [market-microstructure]
  license: "CC BY 4.0 (confirmed via Crossref works/10.1016/j.finmar.2025.101004: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-07-28; corroborated by CC BY notice on artifact p. 1)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF (Elsevier via DOI, 2026-06-25)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 14
  citedByCount: 0
  methods:
    role: theory
    family: theory
    buildsFrom: [first-price-common-value-auction]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, market-power]
  findings:
    - { ref: R1, outcome: dealer bid-ask spreads, metric: level, value: "spread = -2b_i; spread increases with uncertainty ε_i", direction: positive }
    - { ref: R2, outcome: dealer trading margins, metric: level, value: "Δ_i = R_i/P_i decreases with ε_i; core margin up to 2x peripheral (Fig. 4)", direction: negative }
    - { ref: R3, outcome: dealer trading frequency, metric: probability, value: "P_i decreases with ε_i; core trading probability exceeds peripheral (Fig. 4)", direction: negative }
    - { ref: R4, outcome: dealer trading losses, metric: probability, value: "P_i^L increases with ε_i; with ε_σ=ε_I/10, core loss probability is zero over a wide range of a (Fig. 5)", direction: positive }
    - { ref: R5, outcome: core-periphery OTC dealer market structure, metric: level, value: "n=3: unique core-periphery equilibrium for 0.031 < aε_I < 0.974; it coexists with the unique symmetric equilibrium for 0.733 ≤ aε_I < 0.974; unique symmetric equilibrium for aε_I ≥ 0.974; no equilibrium for aε_I ≤ 0.031", direction: mixed }
    - { ref: R6, outcome: investor transaction costs, metric: level, value: "C_I(2)/C_I(10) ≈ 4.05 at aε_I=0.2; C_I(n) decreases for n=2..10", direction: negative }
    - { ref: R8, outcome: dealer trading margins, metric: level, value: "Two dealers with a price-insensitive investor: R_1 > R_2 and Δ_1/Δ_2 → 2 as a → 0", direction: positive }
    - { ref: R9, outcome: dealer information acquisition, metric: level, value: "n=3 peripheral ε_j rises with a for aε_I∈(0.031,0.55), then falls for aε_I∈[0.55,0.974)", direction: mixed }
    - { ref: R10, outcome: social welfare, metric: level, value: "n=3 planner chooses symmetric ε for aε_I ≥ 0.23 and ε_1=ε_2<ε_3 below 0.23; equilibrium dealers overinvest in information", direction: negative }
    - { ref: R11, outcome: social welfare, metric: level, value: "Tax c=ε_I/100 lowers welfare by 0.34%-0.53% for aε_I∈(a_l,5); small transaction subsidies raise welfare", direction: mixed }
    - { ref: R13, outcome: investor transaction costs, metric: level, value: "Inventory valuation cases reduce transaction costs by 6%, 11%, and 15%", direction: negative }
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Duffie, Garleanu & Pedersen (2005)', relation: builds-on, note: 'the foundational OTC search-and-bargaining model; this paper provides a complementary auction-based price-competition mechanism' }
    - { cite: 'Farboodi, Jarosch & Shimer (2022)', relation: builds-on, note: 'endogenous core-periphery structures via search frictions; the auction mechanism here is an alternative microfoundation' }
    - { cite: 'Persico (2000)', doi: '10.1111/1468-0262.00096', relation: builds-on, note: 'continuous-choice information-acquisition in auctions, used here to model dealers endogenously choosing signal accuracy' }
    - { cite: 'Milgrom and Weber (1982b)', relation: builds-on, note: 'value-of-information in first-price common-value auctions; provides the bidding foundation for the equilibrium pricing model' }
    - { cite: 'Li and Schürhoff (2019)', relation: tests, note: 'US municipal bond markets: model predicts centrality premia (higher margins for core dealers) and tighter spreads, consistent with their empirical findings' }
  openQuestions:
    - 'Whether combining the simultaneous price-competition mechanism developed here with the search-and-bargaining model of Duffie, Garleanu, and Pedersen (2005) yields sharper predictions on the origin of core-periphery structures in OTC markets (conclusion, p. 15).'
    - 'How results change when investors strategically choose which dealers to contact and how many, rather than contacting all dealers simultaneously (§6.1, p. 13); the paper shows that qualitative results are robust for the three-dealer case with uncertain competitor sets.'
    - 'Whether small transaction subsidies can raise welfare while avoiding socially inefficient trades and riskless arbitrage opportunities for colluding dealers and investors (§4, p. 12).'
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-23); six results extracted from the CC-BY PDF. Not human-verified. Not reproduced." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the complete PDF and augmented the Core results table, findings, and formal sections with main-text equations (1)-(21). Not human-verified and not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed: JEL codes (added D85, corrected G14→G12), R2 locator ('two-dealer' corrected to n=3 three-dealer equilibrium, per Fig. 4 caption p.10), R5 locator (Result 1 p.8 corrected to Result 2 p.9), f_i definition sign error (b_k−b_i corrected to b_i−b_k in g_k argument, per PDF p.5 explanation), a_s description (contradictory 'increases toward lower values' corrected to 'decreases as n grows')." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 14 result rows, equations (1)-(21), formal claims, classification axes, findings, frontmatter, and prose against the full PDF; corrected equilibrium thresholds/coexistence, loss-probability condition, findings metrics, subsidy question, and a DOI that resolved to a different work. One headline result on expected-profit ranking remains omitted for redistillation." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101004", checked: 2026-06-25, by: paper-distiller (claude-sonnet-4-6), found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-07-28" }
---

**What this is.** The paper's core results, the game-theoretic model of OTC dealer competition, and the main propositions with their formal equations: enough to know what it finds and how, without reading all 23 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101004).

## TL;DR

The paper models dealer competition in over-the-counter (OTC) markets as a first-price sealed-bid common-value auction under endogenous uncertainty. An investor simultaneously asks $$n$$ dealers to quote bid and ask prices for one unit of a risky asset. Neither the asset's true value nor rivals' private signals are observed by any dealer, creating a winner's curse problem: the dealer whose quote is accepted is most likely to have overestimated (underestimated) the value. Dealers mitigate this by investing in costly information acquisition, raising signal accuracy. However, when dealer 1 (the most-informed) tightens its bid-ask spread, this intensifies price competition for others, deterring them from matching dealer 1's accuracy. Equilibrium information heterogeneity emerges endogenously: for intermediate information-acquisition costs, a core-periphery equilibrium exists in which one well-informed core dealer coexists with less-informed peripheral dealers. The core dealer quotes the tightest bid-ask spread to individual investors yet earns the highest trading margins. With resale-price fluctuations set to $$\\varepsilon_\\sigma=\\varepsilon_I/10$$, its loss probability is zero for a wide range of cost parameters. This is consistent with centrality premia documented in U.S. municipal bond markets (Li and Schürhoff (2019)) and U.S. corporate bond markets.

## Core results

Locators point into the source PDF (23 pages). All results are theoretical propositions and theorems; no empirical data was used.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Better-informed dealers quote tighter bid-ask spreads (Proposition 2, part i) | Prop. 2, §2.2, p. 7; Prop. 1, p. 6 | Bid-ask spread equals $$-2b_i$$; normalized bid $$b_i$$ is strictly decreasing in uncertainty level $$\varepsilon_i$$ (Proposition 1): better-informed dealers set lower $$b_i$$, narrowing their spread |
| R2 | Better-informed dealers earn higher expected trading margins (Proposition 2, part ii) | Prop. 2, §2.2, p. 7; Fig. 4, p. 10 | Expected trading margin $$\Delta_i = R_i / P_i$$ is strictly decreasing in $$\varepsilon_i$$; in the $$n=3$$ core-periphery equilibrium, core dealer margin exceeds peripheral margin by up to a factor of 2 (Fig. 4, left panel) |
| R3 | Better-informed dealers trade more frequently (Proposition 2, part iii) | Prop. 2, §2.2, p. 7; Fig. 4, p. 10 | Trading probability $$P_i(\varepsilon_i, \varepsilon_{-i})$$ strictly decreasing in $$\varepsilon_i$$; core dealer trading probability exceeds peripheral dealer's (Fig. 4, right panel) |
| R4 | Better-informed dealers incur fewer trading losses (Proposition 2, part iv) | Prop. 2, §2.2, p. 7; Fig. 5, p. 11 | Loss probability $$P^L_i(\varepsilon_i, \varepsilon_{-i})$$ strictly increasing in $$\varepsilon_i$$; in the $$n=3$$ core-periphery equilibrium, with $$\varepsilon_\sigma=\varepsilon_I/10$$, core dealer loss probability is zero for a wide range of the cost parameter $$a$$ (Fig. 5) |
| R5 | Core-periphery dealer structures emerge endogenously for intermediate information-acquisition costs (Result 2) | Result 2, §3.2, p. 9; Table 1, p. 9; Fig. 2, p. 9 | For $$n=3$$: a unique core-periphery equilibrium exists for $$a\varepsilon_I \in (a_l, a_h)$$, with $$a_l = 0.031$$ and $$a_h = 0.974$$; it coexists with the unique symmetric equilibrium for $$a\varepsilon_I \in [a_s,a_h)$$, where $$a_s=0.733$$; the symmetric equilibrium is unique for $$a\varepsilon_I \geq a_h$$; no equilibrium exists for $$a\varepsilon_I \leq a_l$$ |
| R6 | Investor transaction costs decrease monotonically in the number of competing dealers (Section 5, Fig. 7) | §5, Fig. 7, p. 12-13; Table A.1, p. 22 | At $$a\varepsilon_I = 0.2$$: $$C_I(2) / C_I(10) \approx 4.05$$; ratio is above 1 for all $$n \in \{2, \ldots, 10\}$$ (Fig. 7) |
| R7 | The best-informed dealer tightens its spread when rivals become better informed, while peripheral spreads do not respond to other dealers' information (Proposition 3) | Proposition 3, §3.1, p. 7 | $$\partial b_1 / \partial \varepsilon_k \leq 0$$ for $$k \ne 1$$; $$\partial b_i / \partial \varepsilon_k = 0$$ for $$i \ne 1, k \ne i$$ (Eq. 12) |
| R8 | In the two-dealer price-insensitive-investor case, information advantage produces higher core revenue and margins | Theorem 4, §3.1, p. 8 | $$R_1 > R_2$$ and $$\Delta_1 > \Delta_2$$; as $$a \to 0$$, the core margin exceeds the peripheral margin by a factor of 2 |
| R9 | Peripheral information acquisition is non-monotonic in cost within the three-dealer core-periphery equilibrium | Result 2 discussion, Fig. 2, p. 9 | $$\varepsilon_2=\varepsilon_3$$ increases with $$a$$ for $$a\varepsilon_I \in (0.031,0.55)$$ and decreases for $$a\varepsilon_I \in [0.55,0.974)$$ |
| R10 | Equilibrium dealers overinvest in information relative to the planner; the welfare-optimal structure changes with acquisition cost | §4, Fig. 6, pp. 11-12 | For $$n=3$$, symmetric uncertainty is welfare-optimal for $$a\varepsilon_I \geq 0.23$$; $$\varepsilon_1=\varepsilon_2<\varepsilon_3$$ is optimal below 0.23; equilibrium information investment exceeds the planner's |
| R11 | Transaction taxes lower welfare, while small transaction subsidies increase it but introduce inefficient trade and arbitrage opportunities | §4, p. 12; Eq. 19 | At $$c=\varepsilon_I/100$$, welfare falls by 0.34%-0.53% over $$a\varepsilon_I \in (a_l,5)$$; small transaction subsidies increase welfare |
| R12 | With uncertainty about which competitors are contacted, equilibrium heterogeneity and the core dealer's ranking persist at sufficiently high acquisition costs | §6.1, Eq. 21, pp. 13-14; Figs. 8-9, p. 13 | For $$q=0$$, equilibria exist when acquisition costs are sufficiently high; no equilibrium is found at low costs; for $$\varepsilon_\sigma=\varepsilon_I/10$$ the best-informed dealer retains the tightest spread, highest margin and trading probability, and lowest loss probability |
| R13 | Heterogeneous inventory valuations increase price competition and lower investor transaction costs in the three-dealer example | §6.2, p. 14 | At $$a\varepsilon_I=0.2$$, the three valuation cases reduce transaction costs by 6%, 11%, and 15%, respectively |
| R14 | Non-uniform signal distributions may increase information heterogeneity; uniform signals can limit it | §6.3, pp. 14-15 | Under non-uniform signals, peripheral pricing may respond to rivals' information, potentially preventing equal uncertainty levels; the paper reports no numerical estimate |

**Overall (paper's conclusion).** The friction of opaque market prices in OTC markets, modeled as simultaneous first-price sealed-bid common-value auctions, endogenously generates both (i) the core-periphery dealer structures observed in real markets and (ii) cross-dealer differences in bid-ask spreads, trading margins, trading frequencies, and loss rates. Core dealers earn centrality premia despite quoting tighter spreads, because their superior information leads to fewer mispriced trades offset by higher-margin trades.

## Theory / model

The framing of dealers as first-price sealed-bid common-value auctioneers builds on the analysis of Milgrom and Weber (1982b) and on the information-acquisition model of Persico (2000), and is complementary to the search-and-bargaining OTC model of Duffie, Garleanu, and Pedersen (2005) and to the endogenous-structure model of Farboodi, Jarosch, and Shimer (2022).

This is a theoretical model with no empirical sample or regression design. In the main model, an investor privately values a unit of an asset at a draw around the common dealer value, and each of n dealers receives an independent noisy signal. Dealer i's expected bid profit and ask profit are given by Eqs. (1)-(2), p. 4:

$$
\pi_i^B(B_i(\theta_i),B_{-i}|\theta_i)=\frac{1}{2\varepsilon_i}\int_{\theta_i-\varepsilon_i}^{\theta_i+\varepsilon_i}(\theta-B_i(\theta_i))\left[\int_{\theta-\varepsilon_I}^{\theta+\varepsilon_I}\mathbf{1}(B_i(\theta_i)\geq\theta_I)\frac{d\theta_I}{2\varepsilon_I}\prod_{k\ne i}\int_{\theta-\varepsilon_k}^{\theta+\varepsilon_k}\mathbf{1}(B_i(\theta_i)\geq B_k(\theta_k))\frac{d\theta_k}{2\varepsilon_k}\right]\frac{d\theta}{2\varepsilon_i}.
\tag{1}
$$

$$
\pi_i^A(A_i(\theta_i),A_{-i}|\theta_i)=\frac{1}{2\varepsilon_i}\int_{\theta_i-\varepsilon_i}^{\theta_i+\varepsilon_i}(A_i(\theta_i)-\theta)\left[\int_{\theta-\varepsilon_I}^{\theta+\varepsilon_I}\mathbf{1}(A_i(\theta_i)\leq\theta_I)\frac{d\theta_I}{2\varepsilon_I}\prod_{k\ne i}\int_{\theta-\varepsilon_k}^{\theta+\varepsilon_k}\mathbf{1}(A_i(\theta_i)\leq A_k(\theta_k))\frac{d\theta_k}{2\varepsilon_k}\right]\frac{d\theta}{2\varepsilon_i}.
\tag{2}
$$

With linear strategies, Lemma 1 implies unit slope and normalized bid $$b_i=B_i(\theta_i)-\theta_i$$. Equation (3), p. 5, is the conditional expected profit integral after normalizing the values and signals:

$$
\pi_i^B(b_i,b_{-i})=\frac{1}{2\varepsilon_i}\int_{-\varepsilon_i}^{\varepsilon_i}(\tilde{\theta}_i-b_i)\left[\int_{\tilde{\theta}_i-\varepsilon_I}^{\tilde{\theta}_i+\varepsilon_I}\mathbf{1}(b_i\geq\tilde{\theta}_{Ii})\frac{d\tilde{\theta}_{Ii}}{2\varepsilon_I}\prod_{k\ne i}\int_{\tilde{\theta}_i-\varepsilon_k}^{\tilde{\theta}_i+\varepsilon_k}\mathbf{1}(b_i\geq b_k+\tilde{\theta}_{ki})\frac{d\tilde{\theta}_{ki}}{2\varepsilon_k}\right]\frac{d\tilde{\theta}_i}{2\varepsilon_i}.
\tag{3}
$$

Equations (4)-(6), pp. 5-6, define the profit kernel, uniform-signal probability function, and pricing first-order condition:

$$
\pi_i^B(b_i,b_{-i})=\frac{1}{2\varepsilon_i}\int_{-\varepsilon_i}^{\varepsilon_i}(\tilde{\theta}_i-b_i)f_i(b_i,b_{-i}|\tilde{\theta}_i)d\tilde{\theta}_i, \quad f_i=g_I(b_i-\tilde{\theta}_i)\prod_{k\ne i}g_k(b_i-b_k-\tilde{\theta}_i).
\tag{4}
$$

$$
g_j(x)=\begin{cases}1,&x>\varepsilon_j,\\(\varepsilon_j+x)/(2\varepsilon_j),&-\varepsilon_j<x\leq\varepsilon_j,\\0,&x\leq-\varepsilon_j.\end{cases}
\tag{5}
$$

$$
\frac{d\pi_i^B}{db_i}=\frac{1}{2\varepsilon_i}\left[(-\varepsilon_i-b_i)f_i(b_i,b_{-i}|-\varepsilon_i)-(\varepsilon_i-b_i)f_i(b_i,b_{-i}|\varepsilon_i)\right]=0.
\tag{6}
$$

Theorem 1 gives a unique equilibrium in normalized bids: peripheral dealers quote $$b_i=-\varepsilon_i$$; dealer 1 also does so if $$\varepsilon_1\geq\varepsilon_I/2$$, otherwise its bid lies in $$[-\min(\varepsilon_2,\varepsilon_I/2),-\varepsilon_1]$$ and solves Eq. (6). Theorem 2 gives asks $$A_i(\theta_i)=-b_i+\theta_i$$ (both p. 6). The spread comparative static and dealer-statistic definitions are Eqs. (7)-(10), pp. 6-7:

$$
\frac{db_1}{d\varepsilon_1}<0,\qquad\frac{db_i}{d\varepsilon_i}=-1\quad(i\ne1).
\tag{7}
$$

$$
\Delta_i(\varepsilon_i,\varepsilon_{-i})=\frac{R_i(\varepsilon_i,\varepsilon_{-i})}{P_i(\varepsilon_i,\varepsilon_{-i})},\qquad R_i=2\pi_i^B(b_i,b_{-i}).
\tag{8}
$$

$$
P_i(\varepsilon_i,\varepsilon_{-i})=2\int_{-\varepsilon_i}^{\varepsilon_i}f_i(b_i,b_{-i}|\tilde{\theta}_i)\frac{d\tilde{\theta}_i}{2\varepsilon_i}.
\tag{9}
$$

$$
P_i^L(\varepsilon_i,\varepsilon_{-i})=\frac{2}{P_i}\int_{-\varepsilon_i}^{\varepsilon_i}\int_{-\varepsilon_\sigma}^{\varepsilon_\sigma}\mathbf{1}(\tilde{\theta}_i+\sigma-b_i<0)f_i(b_i,b_{-i}|\tilde{\theta}_i)\frac{d\sigma}{2\varepsilon_\sigma}\frac{d\tilde{\theta}_i}{2\varepsilon_i}.
\tag{10}
$$

## Method

The paper solves a two-stage game by backward induction. Dealers first choose uncertainty levels and then simultaneously quote prices; the equilibrium revenue net of information-acquisition cost and rival-response comparative static are Eqs. (11)-(12), pp. 7-8:

$$
C(\varepsilon_i)=\frac{a}{2}\left(\frac{\varepsilon_I}{2}-\varepsilon_i\right)^2,\qquad\Pi_i(\varepsilon_i,\varepsilon_{-i})=R_i(\varepsilon_i,\varepsilon_{-i})-C(\varepsilon_i).
\tag{11}
$$

$$
\frac{db_1}{d\varepsilon_k}\leq0\quad(k\ne1),\qquad\frac{db_i}{d\varepsilon_k}=0\quad(i\ne1, k\ne i).
\tag{12}
$$

For the special two-dealer case with a price-insensitive investor, the revenue and marginal revenue expressions are Eqs. (13)-(14), p. 8:

$$
R_i(\varepsilon_i,\varepsilon_{-i})=\begin{cases}(3\varepsilon_{-i}^2-\varepsilon_i^2)/(6\varepsilon_{-i}),&\varepsilon_i\leq\varepsilon_{-i},\\(3\varepsilon_i^2+\varepsilon_{-i}^2)/(12\varepsilon_i),&\varepsilon_i>\varepsilon_{-i}.
\end{cases}
\tag{13}
$$

$$
\frac{dR_i}{d\varepsilon_i}=\begin{cases}-\varepsilon_i/(3\varepsilon_{-i}),&\varepsilon_i\leq\varepsilon_{-i},\\(3\varepsilon_i^2-\varepsilon_{-i}^2)/(12\varepsilon_i^2),&\varepsilon_i>\varepsilon_{-i}.
\end{cases}
\tag{14}
$$

Theorem 4 finds the unique equilibrium with dealer 2 at the investor's maximum uncertainty and equal normalized bids. The main model's symmetric equilibrium condition is Eq. (15), p. 8; the three-dealer thresholds and core-periphery equilibrium are Result 2, pp. 9-10:

$$
\frac{\varepsilon_i}{\varepsilon_I}=\frac{(n(n+1)a\varepsilon_I-4)(n+2)}{2(n(n+1)(n+2)a\varepsilon_I-8)},\qquad a\varepsilon_I\geq a_s.
\tag{15}
$$

For n=3, $$a_s=11/15=0.733$$, $$a_l=0.031$$, and $$a_h=0.974$$; the paper reports unique symmetric equilibrium above the symmetric threshold, core-periphery equilibrium for $$a\varepsilon_I\in(a_l,a_h)$$, and no other equilibria in the analyzed n=3 case. The equilibrium classification for n=2,...,15 is numerical (Table 1, p. 9; Appendix A.8, pp. 19-20). There is no estimation, fixed-effects structure, standard-error procedure, or empirical sample.

## Empirical specifications

The paper is theoretical and estimates no empirical specifications. For the welfare analysis, Eqs. (16)-(18), pp. 10-11, define welfare, the density of the best bid, and the reduced welfare expression:

$$
W=-2\int_{-\varepsilon_I}^{\varepsilon_I}\theta_I\sum_{i\in\mathcal{N}}\int_{-\varepsilon_i}^{\varepsilon_i}\mathbf{1}(b_i+\theta_i\geq\theta_I)\prod_{k\ne i}\mathbf{1}(b_i+\theta_i\geq b_k+\theta_k)\frac{d\theta_k}{2\varepsilon_k}\frac{d\theta_i}{2\varepsilon_i}\frac{d\theta_I}{2\varepsilon_I}-\sum_i C(\varepsilon_i).
\tag{16}
$$

$$
f_I(\bar B)=\begin{cases}\sum_i\frac{1}{2\varepsilon_i}\prod_{k\ne i}\frac{\bar B+\varepsilon_k-b_k}{2\varepsilon_k},&\bar B\in[b_1-\varepsilon_1,b_1+\varepsilon_1],\\\sum_{i\ne1}\frac{1}{2\varepsilon_i}\prod_{k\ne i,1}\frac{\bar B+\varepsilon_k-b_k}{2\varepsilon_k},&\bar B\in(b_1+\varepsilon_1,0],\\0,&\text{otherwise}.
\end{cases}
\tag{17}
$$

$$
W=2\int_{\max(b_1-\varepsilon_1,-\varepsilon_I)}^0\frac{(\varepsilon_I-\bar B)^2}{4\varepsilon_I}f_I(\bar B)d\bar B-\sum_{i\in\mathcal{N}}C(\varepsilon_i).
\tag{18}
$$

For a transaction tax or subsidy c, the profit kernel is changed as in Eq. (19), p. 12. The expected investor transaction cost and the unknown-competitor conditional trading probability are Eqs. (20)-(21), pp. 12-14:

$$
\tilde{\pi}_i^B(b_i,b_{-i})=\frac{1}{2\varepsilon_i}\int_{-\varepsilon_i}^{\varepsilon_i}(\tilde{\theta}_i-b_i-c)f_i(b_i,b_{-i}|\tilde{\theta}_i)d\tilde{\theta}_i.
\tag{19}
$$

$$
C_I=\frac{\int_{\max(b_1-\varepsilon_1,-\varepsilon_I)}^0(-\bar B)\frac{\bar B+\varepsilon_I}{2\varepsilon_I}f_I(\bar B)d\bar B}{\int_{\max(b_1-\varepsilon_1,-\varepsilon_I)}^0\frac{\bar B+\varepsilon_I}{2\varepsilon_I}f_I(\bar B)d\bar B}.
\tag{20}
$$

$$
f_i(b_i,b_{-i}|\tilde{\theta}_i)=g_I(b_i-\tilde{\theta}_i)\left[\frac{3q}{2+q}g_j(b_i-b_j-\tilde{\theta}_i)g_k(b_i-b_k-\tilde{\theta}_i)+\frac{1-q}{2+q}g_j(b_i-b_j-\tilde{\theta}_i)+\frac{1-q}{2+q}g_k(b_i-b_k-\tilde{\theta}_i)\right].
\tag{21}
$$

The model's numerical equilibrium analysis reports transaction costs falling as dealer count rises (at $$a\varepsilon_I=0.2$$, $$C_I(2)/C_I(10)=4.05$$), welfare overinvestment relative to the planner, and a 0.34%-0.53% welfare loss from a transaction tax of $$c=\varepsilon_I/100$$ (Figs. 6-7, pp. 11-12). Robustness checks vary competitor contact uncertainty, dealer private valuations, and signal distributions (Sections 6.1-6.3, pp. 13-15). These are model exercises, not data-based estimates.

## Datasets used

The paper is entirely theoretical. No empirical datasets are analyzed.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Pure theory model; stylized facts from Li and Schürhoff (2019), Di Maggio et al. (2017), Hasbrouck and Levich (2021) are cited as motivation in the introduction but no data is analyzed here | n/a |

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.finmar.2025.101004) if you are: (1) modeling OTC dealer competition with simultaneous price competition rather than sequential search; (2) building on the first-price common-value auction framework for market microstructure; (3) studying endogenous information acquisition in dealer markets; or (4) extending the welfare and transaction-cost analysis of Sections 4-5 to policy settings (transaction taxes, subsidies). Formal proofs of all lemmas, propositions, and theorems are in the Appendix (pp. 15-22).

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Markets* 77 (2026) 101004. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Singer, Alexander. "Dealer Competition in Over-the-Counter Markets." *Journal of Financial Markets* 77 (2026) 101004. DOI: 10.1016/j.finmar.2025.101004. Copyright 2025 The Author. Published by Elsevier B.V. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This page is an **adaptation** by the Institute for Automated Research: core results extracted and re-expressed; **changes were made**.
