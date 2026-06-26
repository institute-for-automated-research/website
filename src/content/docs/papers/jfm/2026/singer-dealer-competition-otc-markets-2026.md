---
title: "Dealer Competition in OTC Markets: Singer (2026)"
description: >-
  Distilled: A model of OTC dealer competition as a first-price sealed-bid
  common-value auction shows that information heterogeneity arises endogenously
  and generates core-periphery market structures in which better-informed core
  dealers quote tighter bid-ask spreads, earn higher margins, and trade more
  frequently. Journal of Financial Markets 2026, CC BY 4.0. Six core results
  with source locators and the formal model equations.
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
    - core-periphery OTC dealer market structure
    - investor transaction costs in OTC markets
  outcomeClass: [market-microstructure]
  license: "CC BY 4.0 (confirmed via Crossref works/10.1016/j.finmar.2025.101004: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-07-28; corroborated by CC BY notice on artifact p. 1)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF (Elsevier via DOI, 2026-06-25)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 6
  citedByCount: 0
  methods:
    role: theory
    family: theory
    buildsFrom: [first-price-common-value-auction]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, market-power]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Duffie, Garleanu & Pedersen (2005)', relation: builds-on, note: 'the seminal OTC search-and-bargaining model; this paper provides a complementary auction-based price-competition mechanism' }
    - { cite: 'Farboodi, Jarosch & Shimer (2022)', relation: builds-on, note: 'endogenous core-periphery structures via search frictions; the auction mechanism here is an alternative microfoundation' }
    - { cite: 'Persico (2000)', doi: '10.1111/1468-0262.00096', relation: builds-on, note: 'continuous-choice information-acquisition in auctions, used here to model dealers endogenously choosing signal accuracy' }
    - { cite: 'Milgrom and Weber (1982b)', relation: builds-on, note: 'value-of-information in first-price common-value auctions; provides the bidding foundation for the equilibrium pricing model' }
    - { cite: 'Li and Schürhoff (2019)', doi: '10.1111/jofi.12864', relation: tests, note: 'US municipal bond markets: model predicts centrality premia (higher margins for core dealers) and tighter spreads, consistent with their empirical findings' }
  openQuestions:
    - 'Whether combining the simultaneous price-competition mechanism developed here with the search-and-bargaining model of Duffie, Garleanu, and Pedersen (2005) yields sharper predictions on the origin of core-periphery structures in OTC markets (conclusion, p. 15).'
    - 'How results change when investors strategically choose which dealers to contact and how many, rather than contacting all dealers simultaneously (§6.1, p. 13); the paper shows that qualitative results are robust for the three-dealer case with uncertain competitor sets.'
    - 'Whether welfare-improving transaction subsidies (which expand socially inefficient trades at the expense of riskless arbitrage opportunities) can be designed to avoid the arbitrage rents that arise in equilibrium (§4, pp. 11-12).'
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-23); six results extracted from the CC-BY PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed: JEL codes (added D85, corrected G14→G12), R2 locator ('two-dealer' corrected to n=3 three-dealer equilibrium, per Fig. 4 caption p.10), R5 locator (Result 1 p.8 corrected to Result 2 p.9), f_i definition sign error (b_k−b_i corrected to b_i−b_k in g_k argument, per PDF p.5 explanation), a_s description (contradictory 'increases toward lower values' corrected to 'decreases as n grows')." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101004", checked: 2026-06-25, by: paper-distiller (claude-sonnet-4-6), found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-07-28" }
---

**What this is.** The paper's core results, the game-theoretic model of OTC dealer competition, and the main propositions with their formal equations: enough to know what it finds and how, without reading all 23 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101004).

## TL;DR

The paper models dealer competition in over-the-counter (OTC) markets as a first-price sealed-bid common-value auction under endogenous uncertainty. An investor simultaneously asks $n$ dealers to quote bid and ask prices for one unit of a risky asset. Neither the asset's true value nor rivals' private signals are observed by any dealer, creating a winner's curse problem: the dealer whose quote is accepted is most likely to have overestimated (underestimated) the value. Dealers mitigate this by investing in costly information acquisition, raising signal accuracy. However, when dealer 1 (the most-informed) tightens its bid-ask spread, this intensifies price competition for others, deterring them from matching dealer 1's accuracy. Equilibrium information heterogeneity emerges endogenously: for intermediate information-acquisition costs, a unique core-periphery equilibrium exists in which one well-informed core dealer coexists with less-informed peripheral dealers. The core dealer quotes the tightest bid-ask spread to individual investors yet earns the highest trading margins and loss rates that are zero for a wide range of cost parameters. This is consistent with centrality premia documented in U.S. municipal bond markets (Li and Schürhoff (2019)) and U.S. corporate bond markets.

## Core results

Locators point into the source PDF (23 pages). All results are theoretical propositions and theorems; no empirical data was used.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Better-informed dealers quote tighter bid-ask spreads (Proposition 2, part i) | Prop. 2, §2.2, p. 7; Prop. 1, p. 6 | Bid-ask spread equals $$-2b_i$$; normalized bid $$b_i$$ is strictly decreasing in uncertainty level $$\varepsilon_i$$ (Proposition 1): better-informed dealers set lower $$b_i$$, narrowing their spread |
| R2 | Better-informed dealers earn higher expected trading margins (Proposition 2, part ii) | Prop. 2, §2.2, p. 7; Fig. 4, p. 10 | Expected trading margin $$\Delta_i = R_i / P_i$$ is strictly decreasing in $$\varepsilon_i$$; in the $$n=3$$ core-periphery equilibrium, core dealer margin exceeds peripheral margin by up to a factor of 2 (Fig. 4, left panel) |
| R3 | Better-informed dealers trade more frequently (Proposition 2, part iii) | Prop. 2, §2.2, p. 7; Fig. 4, p. 10 | Trading probability $$P_i(\varepsilon_i, \varepsilon_{-i})$$ strictly decreasing in $$\varepsilon_i$$; core dealer trading probability exceeds peripheral dealer's (Fig. 4, right panel) |
| R4 | Better-informed dealers incur fewer trading losses (Proposition 2, part iv) | Prop. 2, §2.2, p. 7; Fig. 5, p. 11 | Loss probability $$P^L_i(\varepsilon_i, \varepsilon_{-i})$$ strictly increasing in $$\varepsilon_i$$; in $$n=3$$ core-periphery equilibrium, core dealer loss probability is zero for a wide range of the cost parameter $$a$$ (Fig. 5) |
| R5 | Core-periphery dealer structures emerge endogenously for intermediate information-acquisition costs (Result 2) | Result 2, §3.2, p. 9; Table 1, p. 9; Fig. 2, p. 9 | For $$n=3$$: unique core-periphery equilibrium for $$a\varepsilon_I \in (a_l, a_h)$$ with $$a_l = 0.031$$, $$a_h = 0.974$$; unique symmetric equilibrium for $$a\varepsilon_I \geq a_s = 0.733$$; no equilibrium for $$a\varepsilon_I < a_l$$ |
| R6 | Investor transaction costs decrease monotonically in the number of competing dealers (Section 5, Fig. 7) | §5, Fig. 7, p. 12-13; Table A.1, p. 22 | At $$a\varepsilon_I = 0.2$$: $$C_I(2) / C_I(10) \approx 4.05$$; ratio is above 1 for all $$n \in \{2, \ldots, 10\}$$ (Fig. 7) |

**Overall (paper's conclusion).** The friction of opaque market prices in OTC markets, modeled as simultaneous first-price sealed-bid common-value auctions, endogenously generates both (i) the core-periphery dealer structures observed in real markets and (ii) the cross-dealer differences in bid-ask spreads, trading margins, trading frequencies, and loss rates documented in U.S. fixed-income markets. Core dealers earn centrality premia despite quoting tighter spreads, because their superior information leads to fewer mispriced trades offset by higher-margin trades.

## Theory / model

The model has $n \geq 2$ dealers indexed by $\mathcal{N} = \{1, \ldots, n\}$, ordered so dealer 1 has the lowest uncertainty level ($\varepsilon_1 \leq \varepsilon_j$ for all $j$), and one investor (p. 4). The asset has a common value $\theta$ for dealers and a private value $\theta_I$ for the investor. The investor's private value is drawn from $\theta_I \sim U[\theta - \varepsilon_I, \theta + \varepsilon_I]$. Dealer $i$ observes a private signal $\theta_i \sim U[\theta - \varepsilon_i, \theta + \varepsilon_i]$, where $\varepsilon_i \in (0, \varepsilon_I/2]$ is dealer $i$'s uncertainty level (inverse signal accuracy). Both $\theta$ and $\theta_I$ are unknown to the dealers; this is the common-value auction environment.

The investor asks all $n$ dealers simultaneously to quote a binding bid price $B_i(\theta_i)$ (the price at which dealer $i$ will buy) and ask price $A_i(\theta_i)$ (the price at which dealer $i$ will sell). The investor accepts the best bid $\bar{B} \equiv \max\{B_i(\theta_i) : i \in \mathcal{N}\}$ if $\bar{B} \geq \theta_I$, or the best ask $\underline{A} \equiv \min\{A_i(\theta_i) : i \in \mathcal{N}\}$ if $\underline{A} \leq \theta_I$. Dealer $i$ earns trading margin $\theta - B_i(\theta_i)$ when buying, or $A_i(\theta_i) - \theta$ when selling (p. 4).

The bid and ask problems are mathematically symmetric; the paper solves the bid side. Lemma 1 (p. 5) establishes that all equilibrium bid strategies are linear with slope $c_i = 1$ in the dealer's signal, so $B_i(\theta_i) = b_i + \theta_i$ and it suffices to find the normalized bid prices $b_i = B_i(\theta_i) - \theta_i$ (each a scalar independent of $\theta_i$). Letting the normalized common value be $\bar{\theta}^i \equiv \theta - \theta_i$, dealer $i$'s expected bid-price profit simplifies to (eq. 4, p. 5):

$$
\pi_i^B(b_i, b_{-i}) \equiv \frac{1}{2\varepsilon_i} \int_{-\varepsilon_i}^{\varepsilon_i} (\bar{\theta}^i - b_i) \, f_i(b_i, b_{-i} \mid \bar{\theta}^i) \, d\bar{\theta}^i, \tag{4}
$$

where the conditional buying-probability factor is $f_i(b_i, b_{-i} \mid \bar{\theta}^i) \equiv g_i(b_i - \bar{\theta}^i) \prod_{k \in \mathcal{N} \setminus \{i\}} g_k(b_i - b_k - \bar{\theta}^i)$, and the function $g_j$ (eq. 5, p. 5) is:

$$
g_j(x) \equiv \begin{cases} 1, & x > \varepsilon_j, \\ \dfrac{\varepsilon_j + x}{2\varepsilon_j}, & -\varepsilon_j < x \leq \varepsilon_j, \\ 0, & x \leq -\varepsilon_j. \end{cases} \tag{5}
$$

The four dealer statistics derived from the equilibrium (pp. 6-7) are:

- **Bid-ask spread**: $A_i(\theta_i) - B_i(\theta_i) = -2b_i > 0$ (always positive by Lemma A.1 in Appendix).
- **Trading margin** (eq. 8): $\Delta_i(\varepsilon_i, \varepsilon_{-i}) \equiv R_i(\varepsilon_i, \varepsilon_{-i}) / P_i(\varepsilon_i, \varepsilon_{-i})$, where $R_i = 2\pi_i^B$ is expected revenue.
- **Trading probability** (eq. 9): $P_i(\varepsilon_i, \varepsilon_{-i}) \equiv 2 \int_{-\varepsilon_i}^{\varepsilon_i} f_i(b_i, b_{-i} \mid \bar{\theta}^i) \, d\bar{\theta}^i / (2\varepsilon_i)$.
- **Loss probability** (eq. 10): $P_i^L(\varepsilon_i, \varepsilon_{-i})$, the probability that dealer $i$ buys (sells) the asset and later resells (buys back) at a loss.

The framing of dealers as first-price sealed-bid common-value auctioneers builds on the analysis of Milgrom and Weber (1982b) and on the information-acquisition model of Persico (2000), and is complementary to the search-and-bargaining OTC model of Duffie, Garleanu, and Pedersen (2005) and to the endogenous-structure model of Farboodi, Jarosch, and Shimer (2022).

## Method

The model is solved via backward induction through a two-stage game (p. 7). Stage 2 (price competition): dealers simultaneously quote bid and ask prices given fixed uncertainty levels $(\varepsilon_1, \ldots, \varepsilon_n)$. Stage 1 (information acquisition): dealers choose $\varepsilon_i \in (0, \varepsilon_I/2]$ anticipating the Stage-2 equilibrium.

**Stage 2 equilibrium.** The equilibrium first-order condition for dealer $i$'s normalized bid price (eq. 6, p. 5-6) requires marginal expected bid-price profit to be zero:

$$
\frac{d\pi_i^B(b_i, b_{-i})}{db_i} = \frac{1}{2\varepsilon_i} \Big[ (-\varepsilon_i - b_i) f_i(b_i, b_{-i} \mid -\varepsilon_i) - (\varepsilon_i - b_i) f_i(b_i, b_{-i} \mid \varepsilon_i) \Big] = 0. \tag{6}
$$

Theorem 1 (p. 6) establishes a unique equilibrium: for all dealers $i \in \mathcal{N} \setminus \{1\}$ the equilibrium is simply $b_i = -\varepsilon_i$. For dealer 1 (most-informed):
- if $\varepsilon_1 \geq \varepsilon_I/2$, then $b_1 = -\varepsilon_1$;
- otherwise $b_1 \in [-\min(\varepsilon_2, \varepsilon_I/2), -\varepsilon_1]$ satisfies eq. (6) implicitly.

Theorem 2 (p. 6): the equilibrium ask-price strategy is $A_i(\theta_i) = -b_i + \theta_i$ for all dealers.

Proposition 1 (p. 6) establishes comparative statics: $db_1/d\varepsilon_1 < 0$ (dealer 1 quotes tighter spreads when more informed) and $db_i/d\varepsilon_i = -1$ for $i \neq 1$ (peripheral dealers' spreads move one-for-one with uncertainty). Proposition 3 (p. 7) shows dealer 1 has market power: $db_1/d\varepsilon_k \leq 0$ for $k \in \mathcal{N} \setminus \{1\}$, meaning dealer 1 narrows its spread as rivals become better informed, deterring rivals from information acquisition.

**Stage 1 equilibrium.** The information-acquisition cost for dealer $i$ is (p. 7):

$$
C(\varepsilon_i) = \frac{a}{2} \left( \frac{\varepsilon_I}{2} - \varepsilon_i \right)^2,
$$

with cost parameter $a > 0$. Dealer $i$'s overall expected profit is (eq. 11, p. 7):

$$
\Pi_i(\varepsilon_i, \varepsilon_{-i}) \equiv R_i(\varepsilon_i, \varepsilon_{-i}) - C(\varepsilon_i). \tag{11}
$$

Theorem 3 (p. 8) establishes that symmetric equilibria in uncertainty levels (all dealers equally informed) do not exist if the cost parameter $a$ is sufficiently low: dealer 1's market power prevents ex ante identical dealers from choosing the same information level. When a symmetric equilibrium exists (Result 1, eq. 15, p. 8), the equilibrium uncertainty ratio satisfies:

$$
\frac{\varepsilon_1}{\varepsilon_I} = \frac{(n(n+1)a\varepsilon_I - 4)(n+2)}{2(n+1)(n+2)a\varepsilon_I - 8}, \tag{15}
$$

valid for $a\varepsilon_I \geq a_s$ where $a_s$ is a threshold that equals 0.507 at $n=4$ and decreases as $n$ grows (Table 1, p. 9). For $a\varepsilon_I \in (a_l, a_h)$, a unique core-periphery equilibrium exists with $\varepsilon_1 < \varepsilon_j$ for all $j \neq 1$. The phase boundaries $a_l$, $a_s$, $a_h$ are derived numerically via the fixed-point procedure described in Appendices A.8-A.9 (pp. 19-21).

## Empirical specifications

This is a pure-theory paper with no empirical estimation. No data was used (Data availability statement, p. 22). The paper conducts a numerical equilibrium analysis for $n \in \{2, \ldots, 15\}$ dealers (Table 1, p. 9; Appendices A.8-A.9) that:

1. Determines phase boundaries $(a_l, a_s, a_h)$ for each $n$ by solving for symmetric and core-periphery equilibria via a four-step best-response search over $a$ and $\varepsilon_I$ (Appendix A.8, p. 19).
2. Verifies Result 2 for the $n = 3$ case: a symmetric equilibrium exists for $a\varepsilon_I \geq 11/15$; a core-periphery equilibrium for $a\varepsilon_I \in (0.031, 0.974)$; the thresholds are $a_s = 11/15 \approx 0.733$, $a_l = 0.031$, $a_h = 0.974$ (Appendix A.9, p. 20-21).
3. Shows transaction costs $C_I(n)$ decrease monotonically in dealer count for $a\varepsilon_I \in \{0.2, 0.8\}$ (Table A.1, p. 22; Fig. 7, p. 12).

Model predictions are compared qualitatively with cross-dealer statistics in real OTC markets: Li and Schürhoff (2019) for U.S. municipal bond markets, Di Maggio et al. (2017) for U.S. corporate bond markets, and Hasbrouck and Levich (2021) for foreign exchange markets.

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
