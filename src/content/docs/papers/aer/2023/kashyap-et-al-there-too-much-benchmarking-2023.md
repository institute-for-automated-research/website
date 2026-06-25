---
title: "Too Much Benchmarking in Asset Management: Kashyap, Kovrijnykh, Li & Pavlova (2023)"
description: >-
  Distilled: A tractable general equilibrium model shows that incentive contracts
  for fund managers create a pecuniary externality through equilibrium asset prices:
  benchmarking inflates the risky asset price, crowds trades, and reduces contract
  effectiveness for other investors, so the socially optimal contract has less skin
  in the game and less benchmarking than the privately optimal one. American
  Economic Review 2023, AEA copyright. Six core results with source locators, the
  model equations, and the method.
sidebar:
  label: Kashyap et al. 2023
  order: 1
tags: [paper-summary, asset-pricing, asset-management, benchmarking, general-equilibrium, mechanism-design, theory, peer-reviewed, unreplicated]
paper:
  authors: Anil K Kashyap, Natalia Kovrijnykh, Jian Li, Anna Pavlova
  authorList:
    - { family: Kashyap, given: Anil K, orcid: "0000-0002-9381-7663", affiliation: Booth School of Business, University of Chicago }
    - { family: Kovrijnykh, given: Natalia, affiliation: W. P. Carey School of Business, Arizona State University }
    - { family: Li, given: Jian, orcid: "0000-0001-6194-7781", affiliation: Columbia Business School }
    - { family: Pavlova, given: Anna, orcid: "0009-0006-3895-5947", affiliation: London Business School }
  year: 2023
  venue: American Economic Review 113(4), April 2023, 1112-1141
  venueShort: AER 2023
  doi: 10.1257/aer.20210476
  jel:
    codes: [D82, D86, G11, G12, G23, G41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Economic theories and models', 'Financial Literacy, Pension, Retirement Analysis']
  dataAccess: public
  outcome:
    - equilibrium risky asset price
    - level of benchmarking in manager incentive contracts
    - welfare costs of delegated asset management
  outcomeClass: [asset-prices, fund-behavior, social-welfare]
  license: "AEA copyright; freely accessible on AEA website after 12-month embargo (Crossref DOI record: no license block returned; no CC terms on PDF first page; 2026-06-25)"
  licenseShort: AEA free (delayed)
  access: open
  machineAccess: "freely accessible on AEA website after 12-month embargo; not directly machine-tested in this session (2026-06-25)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 33
  methods:
    role: theory
    family: theory
    buildsFrom: [principal-agent, mechanism-design, cara-mean-variance-optimization]
  contributionType: [new-theory]
  mechanisms: [moral-hazard, agency, contracting-pecuniary-externality]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Holmstrom (1979)', doi: '10.2307/3003320', relation: builds-on, note: 'sufficient-statistic result: a signal correlated with the agent output in the contract helps the principal; here the benchmark return is that signal' }
    - { cite: 'Holmstrom and Milgrom (1991)', doi: '10.1093/jleo/7.special_issue.24', relation: builds-on, note: 'tractable moral-hazard contracting with CARA preferences; unlike that model, a larger agent share encourages risk scaling down, motivating benchmarking' }
    - { cite: 'Brennan (1993)', relation: builds-on, note: 'benchmarking leads to lower expected returns on benchmark stocks in a two-period model; this paper endogenizes the contract and analyzes welfare' }
    - { cite: 'Basak and Pavlova (2013)', doi: '10.1257/aer.103.5.1728', relation: extends, note: 'extends their result that benchmarking raises prices and lowers Sharpe ratios to an optimal contracting setting with welfare analysis' }
    - { cite: 'Lorenzoni (2008)', relation: builds-on, note: 'pecuniary externality in competitive contracting with incomplete markets; decentralized equilibrium falls between constrained and unconstrained optima, a pattern replicated here' }
    - { cite: 'Davila and Korinek (2018)', doi: '10.1093/restud/rdx010', relation: builds-on, note: 'distinguishes distributive and collateral/incentive pecuniary externalities; the contracting externality here falls in the collateral/incentive category' }
  openQuestions:
    - 'Incorporating passive asset managers: evidence covers only active funds; passive fund contracts are unknown and require data from SEC Statements of Additional Information (p. 1134).'
    - 'Optimal design of ESG and governance benchmarks using the same framework, explored by Kashyap et al. (2023a) (p. 1134).'
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1112-1141 plus appendix proofs pp. 1134-1141); six results extracted with source locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: (1) eq. 5 last term corrected from b/a to lambda_M/a (confirmed by PDF p. 1121 image, market-clearing derivation, and Lemma 2 proof on p. 1136); (2) JEL codes completed from [G12,D86,G23] to all six codes listed in the paper's abstract [D82,D86,G11,G12,G23,G41]; (3) locator for eqs. 18-19 corrected from pp. 1128-1129 to p. 1129. All six proposition locators and inequality directions verified correct. Outcome classes confirmed in registry." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210476", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license block returned; volume 113, issue 4, pages 1112-1141 confirmed; AEA copyright; no CC terms in Crossref metadata" }
---

**What this is.** The paper's core results, the model it builds on (a two-period CARA general equilibrium with delegated asset management), and the method (analytical optimal contracting): enough to know what it found and how, without reading all 30 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20210476).

## TL;DR

The paper proposes a tractable two-period general equilibrium model of delegated asset management in which benchmarking arises endogenously. When fund managers incur a private, noncontractible cost to manage portfolios, optimal incentive contracts reward them for absolute performance and for performance relative to a benchmark. In general equilibrium, these contracts create a pecuniary externality: benchmarking raises the collective demand for the risky asset, inflating its price and reducing its expected return, which in turn reduces the value of benchmarking for all other fund investors. Because individual fund investors take the stock price as given, they do not internalize this crowding effect and over-incentivize their managers. A constrained social planner, who internalizes the externality, chooses less skin in the game and less benchmarking, and delivers lower asset management costs and a lower (more correctly priced) risky asset.

## Core results

All results are theoretical propositions; magnitudes are qualitative inequalities. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Privately optimal contracts always include benchmarking | Proposition 1(ii), p. 1126 | b\* > 0 whenever x̄ + λ\_D(Δ − ψ)/(γσ²) > 0 |
| R2 | Privately optimal skin in the game lies strictly between perfect risk sharing and full internalization | Proposition 1(i), p. 1126 | a\* ∈ (1/2, 1) |
| R3 | Social planner uses less skin in the game than private equilibrium | Proposition 2(i), p. 1131 | a\*\* < a\* |
| R4 | Social planner uses less benchmarking than private equilibrium | Proposition 2(ii), p. 1131 | b\*\* < b\* (and b\*\*/a\*\* < b\*/a\*) under the same condition as R1 |
| R5 | Private equilibrium inflates the risky asset price above the social optimum | Proposition 3(i), p. 1132 | p\*\* < p\* |
| R6 | Private equilibrium generates excessive risky asset holdings and asset management costs | Proposition 3(ii), p. 1132 | x^{M\*\*} < x^{M\*} and ψx^{M\*\*} < ψx^{M\*} |

**Overall (paper's conclusion).** When all fund investors use incentive contracts, they collectively increase demand for the risky asset, raise its price, and lower the expected return, making the marginal benefit of benchmarking lower for everyone else. Individual investors fail to account for this. A social planner, recognizing the crowding, opts for less incentive provision and less benchmarking. The planner also delivers lower asset management costs and a lower (better priced) risky asset.

## Theory / model

The model is a two-period ($$t = 0, 1$$) general equilibrium with one risky asset (stock) paying dividend $$\tilde{D} \sim N(\mu, \sigma^2)$$ at $$t = 1$$, in net supply $$\bar{x} > 0$$, and one risk-free bond at zero interest in infinite supply. The stock price $$p$$ clears the market at $$t = 0$$.

**Agents.** Three types, population normalized so $$\lambda_D + 2\lambda_M = 1$$:

- Direct investors (fraction $$\lambda_D$$): manage own portfolios.
- Fund investors (fraction $$\lambda_M$$): delegate to managers; can only buy the bond themselves.
- Fund managers (mass $$\lambda_M$$): each works for one fund investor; restricted to investing personal wealth in the bond.

All agents have CARA utility $$U(W) = -e^{-\gamma W}$$ ($$\gamma > 0$$).

**Manager's return.** Managers can access return-augmenting strategies (securities lending, market making, liquidity provision) unavailable to direct investors. The fund's per-share return (equation 1, p. 1118):

$$
r_x = x(\Delta + \tilde{D} - p) + \varepsilon, \tag{1}
$$

where $$x$$ is the manager's position in the risky asset, $$\Delta \geq 0$$ is the expected abnormal return, and $$\varepsilon \sim N(0, \sigma_\varepsilon^2)$$ is idiosyncratic noise from the return-augmenting activities. The manager incurs a private, noncontractible portfolio management cost $$x\psi$$ ($$\psi > 0$$) per share.

**Compensation contract.** Fund investors design linear contracts (equation 2, p. 1119):

$$
w = \hat{a}r_x + b(r_x - r_b) + c = ar_x - br_b + c, \tag{2}
$$

where $$r_b = \tilde{D} - p$$ is the benchmark return (one share of the risky asset), $$a = \hat{a} + b$$ is "skin in the game" (sensitivity to absolute performance), $$b \geq 0$$ is the benchmark sensitivity (relative performance fee), and $$c$$ is a fixed component. Benchmarking shields the manager from dividend variance while still incentivizing risky-asset investment, because performance relative to the benchmark is insensitive to the aggregate dividend shock.

**Equilibrium conditions.** An equilibrium with privately optimal contracts is a contract $$(a^*, b^*, c^*)$$, portfolio choices $$(x^D, x^{M*})$$, and price $$p^*$$ such that: (i) direct investors and managers optimize given $$p^*$$; (ii) fund investors optimize contracts given $$p^*$$ and the manager's incentive constraint (her first-order condition); and (iii) the stock market clears: $$\lambda_D x^D + \lambda_M x^{M*} = \bar{x}$$ (Definition 1, p. 1135). The equilibrium with socially optimal contracts replaces (ii) with a social planner who internalizes the price externality (Definition 2, p. 1135).

## Method

The paper solves both equilibria analytically using first-order conditions. CARA utility with normally distributed returns reduces every agent's problem to an equivalent mean-variance program, yielding closed-form portfolio demands and equilibrium prices. This builds on `principal-agent` and `mechanism-design` primitives and on the `cara-mean-variance-optimization` technique (proposed vocab).

**Portfolio demands and market-clearing price (Lemma 1, p. 1121).** For a given contract $$(a, b, c)$$:

$$
x^D = \frac{\mu - p}{\gamma\sigma^2} \tag{3}
$$

$$
x^M = \frac{\Delta - \psi/a + \mu - p}{a\gamma\sigma^2} + \frac{b}{a} \tag{4}
$$

$$
p = \mu - \gamma\sigma^2\Lambda\!\left(\bar{x} - \lambda_M\frac{b}{a}\right) + \Lambda\frac{\lambda_M}{a}\!\left(\Delta - \frac{\psi}{a}\right) \tag{5}
$$

where $$\Lambda \equiv (\lambda_M/a + \lambda_D)^{-1}$$ is the inverse of the market's effective risk aversion. From (4)-(5), an increase in $$b/a$$ raises manager demand, which raises the equilibrium price and lowers the expected return. This is the price-externality channel: benchmarking inflates the stock price.

**Private equilibrium (Lemma 2, p. 1125).** The fund investor maximizes her expected utility subject to the manager's participation constraint $$U^M \geq u_0$$ and the manager's incentive constraint (her FOC, equation 8, p. 1123):

$$
y = \frac{\Delta - \psi/a + \mu - p}{\gamma\sigma^2}
$$

where $$y = ax - b$$ is the manager's effective risky-asset exposure. The fund investor's FOC with respect to $$b/a$$ (equation 9) equates the marginal benefit of inducing more risky investment against the variance cost. The FOC with respect to $$a$$ (equation 11) trades incentive provision against risk sharing. After substituting the equilibrium price (5), $$a^*$$ solves:

$$
(1 - a^*)\frac{\psi^2}{\gamma\sigma^2 a^{*3}} - (2a^* - 1)\gamma\sigma_\varepsilon^2 = 0. \tag{12}
$$

The first term is the marginal benefit of raising $$a$$ (it reduces the manager's effective cost $$\psi/a$$, incentivizing more risky-asset investment); the second is the marginal cost (higher $$a$$ exposes the manager to more idiosyncratic risk $$\sigma_\varepsilon^2$$). The solution satisfies $$a^* \in (1/2, 1)$$ (Proposition 1(i), p. 1126), because at $$a = 1/2$$ the first term dominates and at $$a = 1$$ the second dominates. The equilibrium benchmark parameter $$b^*$$ follows from equation (13) and the price from:

$$
p^* = \mu - \gamma\sigma^2\bar{x} + \lambda_M\!\left(2\Delta - \psi - \frac{\psi}{a^*}\right) \tag{14}
$$

Benchmarking is optimal (b\* > 0) whenever $$\bar{x} + \lambda_D(\Delta - \psi)/(\gamma\sigma^2) > 0$$ (Proposition 1(ii)), which follows from Holmstrom (1979)'s sufficient-statistic logic: the benchmark return is a signal correlated with the manager's performance, so including it in the contract is always (weakly) beneficial for the principal.

**Social planner (Lemma 4, p. 1130).** The planner maximizes a weighted sum of fund investors' and direct investors' utilities, treating $$p$$ as a function of the contract parameters. The planner's FOC for $$b/a$$ adds a "contracting pecuniary externality" term to equation (9), yielding (equations 18-19, p. 1129):

$$
\Delta - \frac{\lambda_M/a + \lambda_D}{\lambda_M + \lambda_D}\,\psi + \mu - p - \gamma\sigma^2 z = 0. \tag{19}
$$

Compared to the private FOC (equation 9), the cost of incentive provision is now $$[(\lambda_M/a + \lambda_D)/(\lambda_M + \lambda_D)]\psi$$, which exceeds $$\psi$$ whenever $$a < 1$$. The planner perceives benchmarking as more expensive because she accounts for the price inflation it creates. Substituting the equilibrium price, $$a^{**}$$ solves:

$$
(1 - a^{**})\frac{\psi^2}{\gamma\sigma^2 a^{**3}} \cdot \frac{\lambda_D}{\lambda_M + \lambda_D} - (2a^{**} - 1)\gamma\sigma_\varepsilon^2 = 0. \tag{23}
$$

Comparing (12) and (23): the coefficient $$\lambda_D/(\lambda_M + \lambda_D) < 1$$ in (23) makes the first term smaller for the planner, delivering $$a^{**} < a^*$$ (Proposition 2(i)). A parallel argument shows $$b^{**} < b^*$$ (Proposition 2(ii)). Proposition 3 follows by substituting $$(a^{**}, b^{**})$$ into the equilibrium price (equation 25) and holdings (equation 26) and comparing with the private equilibrium.

The paper's mechanism unifies three strands of prior work. Holmstrom (1979)'s sufficient-statistic result explains why benchmarking enters the contract; Holmstrom and Milgrom (1991)'s tractable CARA contracting framework enables the closed-form analysis; and Brennan (1993)'s two-period finding that benchmarking lowers expected returns is replicated and embedded in a welfare framework. The crowding externality is the contracting analogue of the collateral externality in Davila and Korinek (2018). Lorenzoni (2008) also finds a decentralized equilibrium between constrained and unconstrained optima, but with the price ordering reversed; here $$p^{**} < p^* < p^{FB}$$ (Remark 2, p. 1133). Basak and Pavlova (2013) show the same price-inflating effect of benchmarking in dynamic models; this paper adds the optimal-contracting and welfare dimensions.

## Empirical specifications

This is a pure theory paper. There are no empirical specifications, datasets, or estimation procedures. All propositions (Propositions 1-3 and Lemmas 1-4) are derived analytically; all results are qualitative inequalities among equilibrium quantities under privately and socially optimal contracts. The paper does not calibrate to data or estimate model parameters. Online Appendix D provides a tax-implementation analysis of the social optimum. Online Appendix E analyzes extensions, including an effort-based private cost and an endogenous abnormal return from securities lending.

## Datasets used

This paper uses no empirical datasets. All results follow from theoretical propositions about a stylized two-period economy.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20210476) if you are: (i) designing or evaluating incentive contracts for fund managers and need the welfare benchmark (Propositions 2-3 give the comparison); (ii) studying the asset-pricing implications of institutional delegation (Lemma 2, equation 14 gives the equilibrium price formula); (iii) extending the model to passive funds, multiple risky assets (Remark 5, p. 1134), or ESG benchmarks; or (iv) analyzing tax implementations of the social optimum (Online Appendix D). The locators in the Core results table point to the exact propositions.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(4), April 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The article is freely accessible on the AEA website after the 12-month embargo (now elapsed); redistribution and reproduction rights are reserved by the American Economic Association. Extract-only.

> Kashyap, Anil K., Natalia Kovrijnykh, Jian Li, and Anna Pavlova.
> "Is There Too Much Benchmarking in Asset Management?"
> *American Economic Review* 113, no. 4 (April 2023): 1112-1141.
> DOI: 10.1257/aer.20210476. Copyright 2023 American Economic Association.
