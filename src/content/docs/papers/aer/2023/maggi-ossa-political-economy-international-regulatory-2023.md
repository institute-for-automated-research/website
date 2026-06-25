---
title: "Political Economy of International Regulatory Cooperation: Maggi & Ossa (2023)"
description: >-
  Distilled: cooperative agreements on product standards induce co-lobbying and lead to
  excessive deregulation when producer lobbies are strong, reducing welfare; agreements
  on process standards trigger counter-lobbying, tightening regulations and improving
  welfare when lobbies are powerful. American Economic Review 113(8) 2023, paywalled.
  Five core propositions with source locators, the lobbying-extended regulatory model,
  and the equilibrium characterization method.
sidebar:
  label: Maggi-Ossa 2023
  order: 1
tags: [paper-summary, international-trade, trade-policy, political-economy,
       regulatory-standards, game-theory, peer-reviewed, unreplicated]
paper:
  authors: Giovanni Maggi and Ralph Ossa
  authorList:
    - { family: Maggi, given: Giovanni, affiliation: "Yale University, FGV EPGE, and NBER" }
    - { family: Ossa, given: Ralph, affiliation: "University of Zurich and CEPR" }
  year: 2023
  venue: "American Economic Review 113(8): 2168-2200, 2023"
  venueShort: AER 2023
  doi: 10.1257/aer.20200780
  jel:
    codes: [F13, F14, F15, L15, L51]
    assignedBy: authors (abstract)
    date: 2026-06-25
  topics: ["Global trade and economics", "Political Influence and Corporate Strategies", "World Trade Organization Law"]
  dataAccess: public
  outcome:
    - global welfare impact of cooperative regulatory agreements
    - regulatory standards levels under product and process standards agreements
  outcomeClass: [social-welfare]
  license: "paywalled (American Economic Review; Crossref API reports no licence block as of 2026-06-25)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website; Crossref API reports no licence block; 2026-06-25)"
  redistribution: extract-only
  resultsCount: 5
  citedByCount: 21
  methods:
    role: theory
    family: theory
    buildsFrom: [grossman-helpman-political-economy]
  contributionType: [new-theory, new-fact]
  mechanisms: [externality, lobbying-coordination]
  scope:
    region: "global (theoretical)"
  relatesTo:
    - { cite: "Grossman and Helpman (1994)", doi: '10.1086/261999', relation: builds-on, note: "protection-for-sale political economy framework in which government i attaches extra weight gamma_ig to producer surplus; adopted here for regulatory rather than tariff policy" }
    - { cite: "Bagwell and Staiger (1999)", relation: builds-on, note: "terms-of-trade theory of GATT; present paper extends the logic to regulatory cooperation under lobbying pressures" }
    - { cite: "Grossman, McCalman and Staiger (2021)", doi: '10.3982/ecta17536', relation: cites, note: "optimal trade agreement design with product standards and domestic taxes under monopolistic competition; different focus from the lobbying-welfare question here" }
    - { cite: "Rodrik (2018)", doi: '10.1257/jep.32.2.73', relation: cites, note: "argues informally that deep integration may empower wrong special interests and reduce welfare; this paper formalizes and qualifies that intuition" }
  openQuestions:
    - "Role of imperfect competition and firm heterogeneity: under imperfect competition, tighter standards may raise profits of more-productive firms at the expense of less-productive ones, potentially reversing the co-lobbying logic (Conclusion, p. 2198)."
    - "Fixed compliance costs with product standards as a rationale for harmonization require an imperfect-competition setting outside the scope of this paper (Conclusion, p. 2198)."
    - "Role of global supply chains: upstream and downstream producer interests may conflict, changing the alignment classification between co-lobbying and counter-lobbying (Conclusion, p. 2198)."
    - "Welfare impacts of regional rather than global agreements negotiated under lobbying pressures: most existing literature focuses on shallow preferential agreements (Conclusion, p. 2199)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 2168-2200, all sections). Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: R2 locator corrected from p. 2181 to p. 2183 (Proposition 2 is on p. 2183, not p. 2181 where Proposition 1 appears); JEL codes expanded from [F13, F15, L51] to [F13, F14, F15, L15, L51] to match the paper's abstract. All equations (1)-(14) verified term-by-term; all other locators correct." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20200780", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No licence block returned; Crossref record shows AEA paywalled journal with no open-access flag" }
---

**What this is.** This is a distilled skeleton of the paper by Giovanni Maggi and Ralph Ossa (2023). Read the [original article](https://doi.org/10.1257/aer.20200780) to replicate or extend the results.

## TL;DR

Maggi and Ossa build a political economy model of international regulatory cooperation under lobbying by producer groups. The central insight is that the welfare properties of regulatory agreements depend on whether producer interests across countries are aligned or in conflict. For product standards (restrictions on the characteristics of products sold locally, such as emissions caps for automobiles), deregulation in any country benefits producers worldwide by raising world prices; international negotiations therefore induce co-lobbying and lead to excessive deregulation when lobbies are strong, reducing global welfare. For process standards (restrictions on production methods on domestic soil, such as factory pollution limits), deregulation at home reduces world prices and hurts foreign producers; international negotiations induce counter-lobbying that moderates the influence of lobbies on regulatory outcomes, tightening regulations when lobbying is strong and improving welfare. The paper formalizes a concern raised by Rodrik (2018) for product standards while reaching the opposite conclusion for process standards, and extends the analysis to large countries where Bagwell and Staiger (1999) terms-of-trade motives also affect standards.

## Core results

| # | Result | Locator | Key condition / statement |
|---|--------|---------|--------------------------|
| R1 | Cooperative agreement loosens all product standards | Proposition 1, p. 2181 | Holds under mild regularity: demand semi-elasticities do not vary too much with price, or countries are not too asymmetric, or lobby strength gamma_g is sufficiently high |
| R2 | Cooperation on product standards increases global welfare iff lobbying is weak; decreases welfare when lobbying is sufficiently strong | Proposition 2, p. 2183 | Welfare change Delta_g > 0 for low gamma_g; Delta_g < 0 for high gamma_g; Delta_g monotone decreasing in gamma_g (Figure 1, p. 2182) |
| R3 | Cooperation on process standards loosens standards when lobbying is weak; tightens them when lobbying is strong | Proposition 3, p. 2190 | (i) loosens all process standards for sufficiently small gamma_g under mild regularity; (ii) tightens all process standards for sufficiently large gamma_g unconditionally |
| R4 | Cooperation on process standards increases welfare when lobbying is weak or strong; may decrease welfare at intermediate lobbying levels | Proposition 4, p. 2192 | Delta_g > 0 for very low or very high gamma_g; possible Delta_g < 0 for intermediate gamma_g; intermediate welfare loss is guaranteed to exist if countries are symmetric (Figure 2, p. 2191) |
| R5 | Main qualitative results extend to N large countries; asymmetric countries add a terms-of-trade motive for product-standard manipulation | Section III, pp. 2193-2197 | With N large countries, importers tend to tighten product standards to depress world prices while exporters tend to loosen them; with sufficiently strong lobbying, the cooperative agreement still loosens product standards and tightens process standards |

**Overall.** The paper's central lesson is that product-standard agreements are prone to excessive deregulation when lobbies are powerful, while process-standard agreements have a built-in counter-lobbying correction that tightens regulations and preserves welfare. The distinction between co-lobbying (aligned producer interests amplify lobby influence) and counter-lobbying (conflicting interests dilute it) drives both the positive and normative results.

## Theory / model

The model (Section I.A, pp. 2175-2177 for product standards; Section II.A, pp. 2186-2187 for process standards) considers a perfectly competitive world with a continuum of small countries (extended to N large countries in Section III). There are $$\mathcal{G} + 1$$ goods: a numeraire good produced one-for-one from labor, and $$G$$ non-numeraire goods freely traded. The two settings are analyzed separately: one focuses on product standards, the other on process standards.

**Preferences (product standards setting).** Each country $$i$$ has a unit mass of consumers with quasi-linear utility (eq. 1, p. 2176):

$$
U_i = c_{i0} + \sum_{g \in \mathcal{G}} \left[ u_{ig}(c_{ig}) - E_{ig} \right] \tag{1}
$$

where $$c_{i0}$$ is numeraire consumption, $$c_{ig}$$ is consumption of good $$g$$, and $$E_{ig} = -a_{ig} e_{ig} d_{ig}(p^c_{ig})$$ is the local consumption externality. The parameter $$a_{ig} > 0$$ measures how strongly country $$i$$ dislikes pollution; $$e_{ig} \in [0, \infty)$$ indexes the dirtiness of the variety sold (a product standard is a cap on $$e_{ig}$$). Cleaner varieties are more costly: producers incur abatement cost $$\phi_{ig}(e_{ig})$$ per unit (strictly positive, decreasing, convex). Consumer price is $$p^c_{ig} = p_g + \phi_{ig}(e_{ig})$$ where $$p_g$$ is the world price.

**Welfare and government objective.** Country $$i$$'s aggregate welfare across sectors is (eq. 2, p. 2177):

$$
W_i = \sum_{g} \left[ \pi_{ig}(p_g) + S_{ig}\!\left(p_g + \phi_i(e_{ig})\right) - a_{ig} e_{ig} d_{ig}\!\left(p_g + \phi_i(e_{ig})\right) \right] \tag{2}
$$

where $$\pi_{ig}$$ is producer surplus and $$S_{ig}$$ is consumer surplus. Following Grossman and Helpman (1994), governments face lobbying by specific-factor owners and attach extra weight $$\gamma_{ig} \geq 0$$ to sector $$g$$ producer surplus. Government $$i$$ maximizes (eq. 3, p. 2177):

$$
\Omega_i = W_i + \sum_{g \in \mathcal{G}} \gamma_{ig} \pi_{ig} \tag{3}
$$

where $$\gamma_{ig} = 0$$ for all $$g$$ gives a welfare-maximizing government.

**Market clearing.** With free trade and competitive markets, the world market clears for each good $$g$$ (eq. 5, p. 2178):

$$
\int_i y_{ig}(p_g) = \int_i d_{ig}\!\left(p_g + \phi_{ig}(e_{ig})\right) \tag{5}
$$

**Process standards setting.** Good $$g$$ is homogeneous but can be produced with technologies $$z_{ig} \in [0, \infty)$$ indexed by dirtiness; dirtier processes are cheaper. The per-unit abatement cost $$\varphi_{ig}(z_{ig})$$ is paid by producers, so the producer price net of abatement is $$p^P_{ig} = p_g - \varphi_{ig}(z_{ig})$$, and the associated local pollution is $$b_{ig} z_{ig} y_{ig}(p^P_{ig})$$ where $$b_{ig}$$ is the disutility per pollution unit. The incidence of process standards falls on domestic producers (not consumers), which is the source of the counter-lobbying mechanism. Government $$i$$'s objective in sector $$g$$ is:

$$
\Omega_{ig} = (1 + \gamma_{ig})\pi_{ig}\!\left(p_g - \varphi_{ig}(z_{ig})\right) + S_{ig}(p_g) - b_{ig} z_{ig} y_{ig}\!\left(p_g - \varphi_{ig}(z_{ig})\right) \tag{8}
$$

(eq. 8 derivation, p. 2187). Market clearing in process standards requires (eq. 10, p. 2187):

$$
\int_i y_{ig}\!\left(p_g - \varphi_{ig}(z_{ig})\right) = \int_i d_{ig}(p_g) \tag{10}
$$

## Method

The paper characterizes noncooperative Nash equilibria and a cooperative (joint-payoff-maximizing) equilibrium using first-order conditions and local perturbation arguments; formal proofs are in online Appendix B.

**Noncooperative product standards.** Each government maximizes $$\Omega_i$$ over $$e_{ig}$$ taking the world price and all other standards as given. Since countries are small and the problem is separable across industries, the first-order condition for good $$g$$ yields (eq. 4, p. 2178):

$$
e_{ig} = \frac{1}{\sigma_{ig}} \left( \frac{1}{a_{ig}} + \frac{1}{\phi'_{ig}} \right) \quad \text{for all } i \tag{4}
$$

where $$\sigma_{ig} \equiv -d'_{ig}/d_{ig} > 0$$ is the demand semi-elasticity. Lobby strength $$\gamma_{ig}$$ does not enter eq. (4) because the incidence of product standards falls entirely on consumers in the small-country case, leaving producer surplus unaffected at the margin.

**Cooperative product standards.** Governments jointly maximize $$\int_i \Omega_i$$ subject to market clearing (eq. 5). Applying a standard Lagrangian approach, the cooperative product standard satisfies (eq. 6, p. 2179):

$$
e_{ig} = \frac{1}{\sigma_{ig}} \left( \frac{1}{a_{ig}} + \frac{1}{\phi'_{ig}} \right) + \frac{\lambda_g}{a_{ig}} \quad \text{for all } i \tag{6}
$$

where the Lagrange multiplier is

$$
\lambda_g = \frac{\int_i \!\left(\gamma_{ig} y_{ig} + a_{ig} e_{ig} \sigma_{ig} d_{ig}\right)}{\int_i \!\left(\varepsilon_{ig} y_{ig} + \sigma_{ig} d_{ig}\right)} > 0
$$

with $$\varepsilon_{ig} \equiv y'_{ig}/y_{ig} > 0$$ the supply semi-elasticity. Since $$\lambda_g > 0$$ always, cooperative standards are always looser than noncooperative standards (Proposition 1).

**Local argument for product standards direction.** To confirm that $$\lambda_g > 0$$, the paper evaluates the derivative of the joint government payoff with respect to the world price at the noncooperative equilibrium (eq. 7, p. 2180):

$$
\left. \frac{\partial \Omega_g}{\partial p_g} \right|_{\text{NE}} = \int_i \left( \gamma_{ig} y_{ig} + a_{ig} e^N_{ig} \sigma_{ig} d_{ig} \right) > 0 \tag{7}
$$

Both terms are positive: the first captures a political externality (higher world price benefits producers worldwide, so co-lobbying applies) and the second captures an environmental externality (higher price reduces consumption and hence pollution). The agreement internalizes this positive externality by loosening standards to raise the world price.

**Noncooperative process standards.** The first-order condition for $$z_{ig}$$ yields (eq. 9, p. 2187):

$$
z_{ig} = \frac{1}{\varepsilon_{ig}} \left( \frac{1 + \gamma_{ig}}{b_{ig}} + \frac{1}{\varphi'_{ig}} \right) \quad \text{for all } i \tag{9}
$$

Unlike eq. (4), lobby strength $$\gamma_{ig}$$ directly enters the noncooperative process standard: stronger lobbying yields looser process standards unilaterally, since the incidence falls on domestic producers.

**Cooperative process standards.** Joint maximization yields (eq. 11, p. 2188):

$$
z_{ig} = \frac{1}{\varepsilon_{ig}} \left( \frac{1 + \gamma_{ig}}{b_{ig}} + \frac{1}{\varphi'_{ig}} \right) - \frac{\lambda_g}{b_{ig}} \quad \text{for all } i \tag{11}
$$

where

$$
\lambda_g = \frac{\int_i y_{ig}\!\left(\gamma_{ig} - b_{ig} z_{ig} \varepsilon_{ig}\right)}{\int_i \varepsilon_{ig} y_{ig} + \int_i \sigma_{ig} d_{ig}}
$$

The sign of $$\lambda_g$$ determines whether cooperation tightens ($$\lambda_g > 0$$) or loosens ($$\lambda_g < 0$$) process standards. Crucially, $$\lambda_g > 0$$ when $$\gamma_{ig} > b_{ig} z_{ig} \varepsilon_{ig}$$ for all $$i$$, i.e., when lobbying is sufficiently strong.

**Local argument for process standards direction.** At the noncooperative equilibrium, the derivative of the joint payoff with respect to the world price is (eq. 12, p. 2189):

$$
\left. \frac{\partial \Omega_g}{\partial p_g} \right|_{\text{NE}} = \int_i \left( \gamma_{ig} y_{ig} - b_{ig} z^N_{ig} \varepsilon_{ig} y_{ig} \right) \tag{12}
$$

The first term is the positive political externality (tighter standards raise world price, benefiting foreign producers) and the second is a negative environmental externality (higher world price stimulates supply and increases pollution). This is the counter-lobbying mechanism: each lobby prefers loose domestic regulations but tight foreign regulations, so their demands partially offset each other in the cooperative setting. The sign of eq. (12) changes with $$\gamma_g$$, driving Proposition 3.

**Welfare analysis (Propositions 2 and 4).** The paper scales lobby strength proportionally as $$\gamma_{ig} = \gamma_g \cdot \nu_{ig}$$ and tracks the welfare change $$\Delta_g = W^A_g - W^N_g$$ as $$\gamma_g$$ varies. For product standards (Figure 1, p. 2182), $$\Delta_g$$ is positive at $$\gamma_g = 0$$ (noncooperative standards are over-tight from the welfare standpoint) and decreasing in $$\gamma_g$$, turning negative once $$\gamma_g$$ crosses a threshold $$\bar{\gamma}_g$$. For process standards (Figure 2, p. 2191), $$\Delta_g$$ is positive at $$\gamma_g = 0$$, may turn negative for an intermediate range $$[\gamma^L_g, \gamma^H_g]$$, and becomes positive again for large $$\gamma_g$$ (since by then the agreement tightens standards enough to counteract the race to the bottom in the noncooperative equilibrium).

**Large-country extension.** Section III replaces the continuum of small countries with N large countries that each have market power over world prices. The noncooperative product standard becomes (eq. 13, p. 2193):

$$
e^N_{ig} = \frac{1}{\sigma_{ig}} \left( \frac{1}{a_{ig}} + \frac{1}{\phi'_{ig}} \right) + \frac{\lambda^N_{ig}}{a_{ig}} \quad \text{for all } i \tag{13}
$$

where $$\lambda^N_{ig} = (\gamma_{ig} y_{ig} + a_{ig} e^N_{ig} \sigma_{ig} d_{ig} - m_{ig}) / \sum_i (\varepsilon_{ig} y_{ig} + \sigma_{ig} d_{ig})$$ and $$m_{ig} \equiv d_{ig} - y_{ig}$$ is imports. The import term $$-m_{ig}$$ reflects each country's terms-of-trade incentive: importers tighten product standards to depress world prices, exporters loosen them. The cooperative product standard aggregates these effects (eq. 14, p. 2194):

$$
e^A_{ig} = \frac{1}{\sigma_{ig}} \left( \frac{1}{a_{ig}} + \frac{1}{\phi'_{ig}} \right) + \frac{\lambda^A_g}{a_{ig}} \quad \text{for all } i \tag{14}
$$

where $$\lambda^A_g = \sum_i (\gamma_{ig} y_{ig} + a_{ig} e^A_{ig} \sigma_{ig} d_{ig}) / \sum_i (\varepsilon_{ig} y_{ig} + \sigma_{ig} d_{ig})$$. The terms-of-trade motive vanishes in symmetric countries (no trade in equilibrium), and the main results from the small-country model carry through. With strong enough lobbying, the political externality dominates and Propositions 1-4 hold qualitatively for large countries too.

## Datasets used

This is a pure theory paper. No empirical datasets are used; all results are derived analytically.

| Dataset | Role | Wiki page |
|---------|------|-----------|
| (none) | | |

## When to read

Read the full paper when working on the political economy of "deep" trade agreements (non-tariff barriers, regulatory convergence, and CETA/TTIP-style regulatory cooperation councils); when you need the formal conditions under which international lobbying either amplifies or attenuates regulatory distortions; or when extending the Grossman and Helpman (1994) protection-for-sale framework to regulatory rather than tariff policy. The four core propositions (pp. 2181-2192) and Figures 1-2 (pp. 2182, 2191) are the main reusable reference points. Grossman, McCalman and Staiger (2021) provide a complementary analysis focused on harmonization vs. regulatory diversity under imperfect competition. Bagwell and Staiger (1999) supply the terms-of-trade foundation. The companion survey by Maggi and Ossa (2021) in the Annual Review of Economics provides additional context on the political economy of deep integration.

## Attribution and rights

Giovanni Maggi and Ralph Ossa, "The Political Economy of International Regulatory Cooperation," *American Economic Review* 113(8): 2168-2200, 2023. DOI: [10.1257/aer.20200780](https://doi.org/10.1257/aer.20200780).

This page is an LLM-distilled summary (extract-only). It is not human-verified and has not been reproduced. The original article is paywalled; see the [AEA website](https://www.aeaweb.org/articles?id=10.1257/aer.20200780) for access.
