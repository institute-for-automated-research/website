---
title: "Regulation Design in Insurance Markets: Bhaskar, McClellan & Sadler (2023)"
description: >-
  Distilled: The paper models insurance regulation as a delegation problem and
  shows a regulator can implement the socially optimal allocation by requiring
  each firm menu to include at most two latent contracts that are never purchased
  in equilibrium but deter the firm from misusing its private signal about
  consumers. American Economic Review 2023, paywalled. Seven core results with
  source locators, the formal model, and the mechanism with equations.
sidebar:
  label: Bhaskar-McClellan-Sadler 2023
  order: 1
tags: [paper-summary, insurance, regulation, mechanism-design, information-economics, peer-reviewed, unreplicated]
paper:
  authors: Dhruva Bhaskar, Andrew McClellan, Evan Sadler
  authorList:
    - { family: Bhaskar, given: Dhruva, affiliation: Baruch College, CUNY }
    - { family: McClellan, given: Andrew, affiliation: University of Chicago, Booth School of Business }
    - { family: Sadler, given: Evan, orcid: https://orcid.org/0000-0001-5045-2230, affiliation: Columbia University }
  year: 2023
  venue: American Economic Review 113(10), October 2023, 2546-2580
  venueShort: Am. Econ. Rev. 2023
  doi: 10.1257/aer.20210710
  jel:
    codes: [D21, D43, D82, D86, G22, G28, L51]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Auction Theory and Applications", "Law, Economics, and Judicial Systems", "Consumer Market Behavior and Pricing"]
  dataAccess: public
  outcome:
    - consumer welfare under optimal insurance regulation
    - optimal insurance contract allocation across consumer types
    - firm incentive constraints in delegated menu design
  outcomeClass: [social-welfare, optimal-contract-design]
  license: "Copyright American Economic Association, 2023 (no open-access licence found in Crossref DOI metadata 2026-06-25)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 4
  methods:
    role: theory
    family: theory
    buildsFrom: [mechanism-design, principal-agent]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, agency]
  scope:
    region: theoretical
  relatesTo:
    - { cite: "Stiglitz (1977)", doi: '10.2307/2296899', relation: extends, note: "generalizes the canonical monopolistic insurance screening model by introducing a regulator who restricts permitted menus" }
    - { cite: "Baron and Myerson (1982)", doi: '10.2307/1912769', relation: builds-on, note: "optimal price regulation and subsidy provision for a monopolist; differs because the firm contracts with each consumer and can screen" }
    - { cite: "Holmstrom (1984)", relation: builds-on, note: "delegation theory: a principal restricts the action set of a better-informed agent; here the action space is a set of contract menus" }
    - { cite: "Chade and Schlee (2012)", doi: '10.3982/te671', relation: extends, note: "optimal insurance with adverse selection; embeds their canonical case as the single-category special case" }
    - { cite: "Galperti (2015)", doi: '10.3982/ecta11851', relation: builds-on, note: "commitment and screening of time-inconsistent agents; latent contracts here play an analogous off-path disciplining role" }
    - { cite: "Brunnermeier, Lamba, and Segura-Rodriguez (2020)", doi: '10.2139/ssrn.3584331', relation: tests, note: "inverse selection: they study how a more-informed firm designs menus; this paper adds the regulator and shows welfare can be improved" }
  openQuestions:
    - "Whether regulated latent contracts of the specific form derived here are observed in practice; the authors find no clear empirical evidence that regulators use unused options purely for off-path firm incentives (pp. 2571-2572)."
    - "Extension to settings where the regulator can only dictate individual contracts rather than full menus; implementation becomes infeasible and opt-out options play a role similar to latent contracts (p. 2563)."
    - "Extension to multiple competing firms where cream-skimming can arise; the paper discusses this qualitatively but leaves the full analysis as an extension (p. 2563)."
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-25
      role: extracted
      note: "Full PDF read (pp. 2546-2580, 35 pages); six propositions/theorems extracted with locators; formal model and latent-contract construction transcribed from pp. 2554-2577. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; four fixes applied: (1) JEL codes expanded from [D82,G22,G28] to [D21,D43,D82,D86,G22,G28,L51] per PDF p. 2546; (2) equation (5) loss function corrected from \\ell to \\tilde{\\ell} per PDF p. 2557 notation; (3) Proposition 5 latent contract premium corrected from p_n^{m_n}+B^i to p_i^{m_i}+B^i per Proposition 5 on PDF p. 2568; (4) limit statement in Method section corrected from lim p-bar(t-hat)=0 to lim p-bar-prime(t-hat)=0 (derivative, not the premium itself) per PDF p. 2574."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF; added the omitted Proposition 4 result and its formal bound, corrected unnumbered source formulas that had been assigned equation tags, and updated result count. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all seven Core results, formal claims, classification, frontmatter, and prose against the source PDF; fixed an inverted deviation direction, Proposition 3's bound, the indifference monotonicity, assumptions, and overclaims. Locator checks passed for this page." }
  licenceVerification:
    - source: "Crossref REST API works/10.1257/aer.20210710"
      checked: 2026-06-25
      by: paper-distiller (claude-sonnet-4-6)
      found: "No license[] block returned; open_access confirmed false via OpenAlex (2026-06-25); access: closed, oa_url: null"
---

**What this is.** The paper's core propositions, the formal delegation model it builds on, and the latent-contract mechanism with its defining equations: enough to understand what was proved and how, without reading all 35 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20210710).

## TL;DR

A regulator seeks to restrict the menus of insurance contracts a firm may offer. The firm privately observes a signal about each consumer's type, giving it an informational advantage the regulator lacks. The paper's main result (Theorem 1) shows that, under its type-ordering and signal-monotonicity condition, the regulator can implement an allocation solving the relaxed problem by augmenting each intended menu with at most two "latent contracts." These contracts are never chosen in equilibrium but deter the firm from offering menus designed for different signals. A separate result shows that when the regulator maximizes consumer welfare, an additional ordered signal satisfying the same condition weakly improves welfare under optimal regulation: the regulator can use the firm's data advantage as a tool.

## Core results

Locators reference the published version. No numerical magnitudes are reported; all results are theoretical propositions.

| # | Result | Locator | Formal claim |
|---|---|---|---|
| R1 | Under the paper's type-ordering and signal-monotonicity condition, any incentive-compatible, participation-feasible allocation can be implemented with at most two latent contracts per menu | Theorem 1, p. 2560 | There exist contracts {c̄^s, c_s}_{s∈S} such that policy R = {M^s_{a\*} ∪ {c̄^s, c_s}}_{s∈S} implements a\* in perfect Bayesian equilibrium |
| R2 | Noncontractible loss model: optimal allocation gives all agents in category x the same contract, equalizing marginal utility across all types and events | Prop. 1(i), pp. 2561-2562 | c_x = (p\*, t_x\*) where t_x\*(ω) equates the marginal utility of transfers u_z across all (ω, x) pairs |
| R3 | Under supermodularity of utility in transfer and category, transfers are strictly increasing in category and one downward latent contract per menu suffices | Prop. 1(ii), p. 2562 | t_x\*(ω) strictly increasing in x for each ω; policy R = {M_x}_{x∈X} with M_x = {c_x, c̄_x} implements a\* |
| R4 | Consumer welfare is weakly higher under optimal regulation when the firm receives an additional ordered signal that satisfies the paper's order condition | Prop. 2, p. 2563 | When the new signal structure can be linearly ordered and satisfies the order condition, an optimal policy under it attains weakly higher consumer welfare than under the initial signal structure |
| R5 | In the canonical one-category model, allocations close to the laissez-faire allocation can be implemented with latent contracts whose distances from existing contracts are bounded proportionally | Prop. 3, pp. 2564-2565 | For any Δ > 0, if an allocation â satisfies agent incentives and firm participation and d(â, a) < Δ from the laissez-faire allocation a, it can be implemented; each latent contract is within KΔ of a contract allocated under a to some type in that signal's support |
| R6 | Price cap plus latent contracts: using observable market data, a cap on the highest-signal menu and latent contracts on the other menus can improve on laissez-faire when the firm remains profitable | Prop. 5, pp. 2568-2569 | For menu M_n (highest signal), price-capped menu M^C_n combined with latent contracts c̄^i on menus M_1,...,M_{n-1} leads the firm to offer M^C_n after signal s_n; if the firm makes positive profits, highest-risk types purchase full coverage at a lower price |
| R7 | Existing-policy local improvements: if a current policy satisfies option diversity, any feasible incentive-compatible allocation can be implemented by a policy whose distance from the current policy is bounded by a constant times the allocation change | Prop. 4, p. 2566 | There exists K ≥ 1 such that D(R̂, R) ≤ K d(â, a) for each feasible target allocation â |

**Overall (paper's conclusion).** Regulators can use a firm's informational advantage to implement an allocation without observing the firm's signal by requiring off-path latent contracts in permitted menus. The theorem adds at most two latent contracts to each intended menu; the total number of contracts can exceed three when the intended menu contains multiple contracts. The paper also shows how targeted latent contracts can support a data-driven price cap in its canonical one-category model.

## Theory / model

The framework builds on the monopolistic insurance screening model of Stiglitz (1977), in which a firm offers menus to separate risk types, and on the delegation theory of Holmstrom (1984), who studies a principal restricting the action set of a better-informed agent. Baron and Myerson (1982) study optimal price regulation of a monopolist with privately known costs; the key difference here is that the firm contracts with individual consumers and screens them using its data advantage. Chade and Schlee (2012) characterize optimal insurance allocation under adverse selection; the noncontractible loss model below embeds their canonical formulation as a special case. Galperti (2015) shows commitment devices can screen time-inconsistent agents; latent contracts serve an analogous off-path incentive role here. Brunnermeier, Lamba, and Segura-Rodriguez (2020) study how a firm better informed than consumers designs profit-maximizing menus; this paper adds a regulator who turns that asymmetry into a welfare tool.

The model is a three-stage game (regulator, firm, consumers) with heterogeneous agents and a privately informed intermediary (pp. 2554-2556).

**Types and preferences.** Each agent has a two-dimensional type $$\tau = (x, \theta) \in T = X \times \Theta$$, where $$X \subset \mathbb{N}$$ is the finite set of categories and $$\Theta \subset \Delta(\Omega)$$ is the set of risk types. Categories capture utility differences in the event of a loss (treatment cost, severity of need); risk types determine the probability distribution over verifiable loss events $$\Omega$$. Types are distributed according to $$\mu \in \Delta(X \times \Theta)$$. A contract $$c = (p, t)$$ specifies a premium $$p \in \mathbb{R}_+$$ and a transfer function $$t : \Omega \to \mathbb{R}_+$$. Agent $$\tau$$ buying contract $$c$$ obtains expected utility (p. 2554):

$$
U(\tau, c) := \sum_{\omega \in \Omega} \theta(\omega)\, u(t(\omega) - p,\, \omega,\, x)
$$

where $$u : \mathbb{R} \times \Omega \times X \to \mathbb{R}$$ is strictly increasing and strictly concave in its first argument, with the Inada condition $$\lim_{z \to \underline{z}_{\omega,x}} u_z = \infty$$. The firm's expected profit from selling $$c$$ to type $$\tau$$ is (p. 2555):

$$
\Pi(\tau, c) := p - \sum_{\omega \in \Omega} \theta(\omega)\, t(\omega)
$$

**Information structure.** The firm privately observes a signal $$s \in S \subset \mathbb{N}$$ about each agent's type; the regulator observes neither the signal nor the type, only the aggregate joint distribution of types and signals. Let $$\mu(\cdot \mid s)$$ denote the conditional type distribution given signal $$s$$ and $$\text{supp}(s)$$ the support of $$\mu(\cdot \mid s)$$.

**Regulatory policy and timing.** A regulatory policy $$\mathcal{R}$$ is a set of menus (each menu is a set of contracts). Timing: (i) the regulator chooses $$\mathcal{R}$$; (ii) the firm decides whether to enter, then offers each agent a menu from $$\mathcal{R}$$ based on its signal; (iii) agents choose a contract from the offered menu; (iv) loss events realize and transfers are paid.

**Aggregate welfare.** An allocation $$\mathbf{a} = \{c^s_\tau\}$$ specifies, for each type and signal, a contract. Total consumer welfare and firm expected profit from allocation $$\mathbf{a}$$ are (p. 2556):

$$
W(\mathbf{a}) := \sum_{\tau \in T} \mu(\tau) \sum_{s:\, \tau \in \text{supp}(s)} \Pr(s \mid \tau)\, U(\tau, c^s_\tau)
$$

$$
\pi(\mathbf{a}) := -k + \sum_{\tau \in T} \mu(\tau) \sum_{s:\, \tau \in \text{supp}(s)} \Pr(s \mid \tau)\, \Pi(\tau, c^s_\tau)
$$

The regulator maximizes a social welfare function $$F(\mathbf{a})$$ satisfying $$F(\mathbf{a}) = -\infty$$ whenever $$W(\mathbf{a}) = -\infty$$; a canonical special case is $$F(\mathbf{a}) = \beta W(\mathbf{a}) + (1-\beta)\pi(\mathbf{a})$$ for $$\beta \in (0,1]$$.

**Order condition (Assumption 1, p. 2558).** The main result requires that higher signals correspond to higher coverage need. There exists a loss event $$\omega_1 \neq \omega_0$$ such that $$u(z, \omega, x)$$ is supermodular in $$z$$ and $$x$$, and for every signal $$s$$, a maximal type $$\bar{\tau}^s = (\bar{x}^s, \bar{\theta}^s)$$ and a minimal type $$\underline{\tau}^s = (\underline{x}^s, \underline{\theta}^s)$$ exist in $$\text{supp}(s)$$ such that:

- the maximal type has a weakly higher category and higher likelihood ratio $$\bar{\theta}^s(\omega_1)/\bar{\theta}^s(\omega_0) \geq \theta(\omega_1)/\theta(\omega_0)$$ for all types in the support of $$s$$; and
- for $$s' > s$$, the maximal category $$\bar{x}^{s'} \geq \bar{x}^s$$ and the maximal likelihood ratio in signal $$s'$$ is strictly greater than in signal $$s$$.

For each signal, the maximal and minimal types bound both category and relative risk within its support. Across signals, both extreme categories are weakly increasing and both extreme likelihood ratios are strictly increasing in the signal. Thus, types in a higher signal's support are not required to be uniformly higher; the assumptions order the extreme types and support the deviation-deterring construction.

**Relaxed problem.** The regulator first solves the Relaxed Problem that ignores firm incentive constraints, treating the firm as if the regulator could directly observe the signal (pp. 2559-2560):

$$
\max_{\mathbf{a}}\; F(\mathbf{a}) \quad \text{s.t.} \quad \pi(\mathbf{a}) \geq 0 \text{ and } U(\tau, c^s_\tau) \geq U(\tau, c)\; \forall\, \tau \in \text{supp}(s),\, c \in M^s_\mathbf{a},\, s \in S
$$

The firm's incentive constraints to truthfully offer the menu intended for each signal are then the binding constraint for implementation in the actual problem.

**Noncontractible loss model (special case).** For the main application, each verifiable event $$\omega$$ contains a set of noncontractible states $$\hat{\omega}$$; agents in category $$x$$ face the distribution $$\nu_x(\hat{\omega} \mid \omega)$$ over them, suffering loss $$\tilde{\ell}(\hat{\omega})$$. Utility in event $$\omega$$ is (p. 2557):

$$
u(t(\omega) - p,\, \omega,\, x) := \int_{\hat{\omega} \in \omega} v\!\left(e - p + t(\omega) - \tilde{\ell}(\hat{\omega})\right) d\nu_x(\hat{\omega} \mid \omega)
$$

where $$e$$ is initial wealth and $$v$$ is strictly concave. In the canonical Stiglitz (1977) model this collapses to two states (no loss, loss $$\ell$$) with a single category $$x$$.

## Method

The paper is theoretical and has no estimating equation. Its main-text displayed formulas are unnumbered in the PDF; the formal model and construction below therefore use page locators rather than equation numbers.

**Local improvements from an existing policy (Proposition 4, p. 2566).** Let $$\mathcal{C}$$ be a compact contract space and $$\mathcal{A}$$ the allocations satisfying agent incentives and firm participation using contracts in $$\mathcal{C}$$. If a current policy $$\mathcal{R}$$ implements $$\mathbf{a}\in\mathcal{A}$$ with option diversity, then every $$\hat{\mathbf{a}}\in\mathcal{A}$$ can be implemented by a policy $$\hat{\mathcal{R}}$$ satisfying the bound:

$$
D(\hat{\mathcal{R}}, \mathcal{R}) \leq K d(\hat{\mathbf{a}}, \mathbf{a}), \qquad K \geq 1.
$$

The proposition also preserves option diversity, allowing incremental changes to be applied repeatedly (p. 2566).

The proof of Theorem 1 constructs two families of latent contracts for each signal $$s$$, using the order condition to ensure they deter deviations without distorting on-path allocations.

**Latent contract properties (p. 2560).** For each signal $$s$$, the two contracts $$(\bar{c}^s, \underline{c}^s)$$ added to menu $$M^s_{a^*}$$ satisfy:
1. Every type $$\tau \in \text{supp}(s)$$ weakly prefers the allocated contract $$c^s_{\tau, a^*}$$ to both latent contracts.
2. For any higher signal $$s' > s$$, all types $$\tau \in \text{supp}(s')$$ with $$\theta(\omega_1)/\theta(\omega_0) > \bar{\theta}^s(\omega_1)/\bar{\theta}^s(\omega_0)$$ and $$x \geq \bar{x}^s$$ prefer the downward latent contract $$\bar{c}^s$$ over any contract in $$M^s_{a^*}$$.
3. For any lower signal $$s' < s$$, all types $$\tau \in \text{supp}(s')$$ with $$\theta(\omega_1)/\theta(\omega_0) < \underline{\theta}^s(\omega_1)/\underline{\theta}^s(\omega_0)$$ and $$x \leq \underline{x}^s$$ prefer the upward latent contract $$\underline{c}^s$$ over any contract in $$M^s_{a^*}$$.

**Construction of the downward latent contract (Lemma 1, p. 2574).** Fix signal $$s$$ and let $$(\bar{x}^s, \bar{\theta}^s)$$ be the maximal type in its support. Let $$(p', t')$$ be a reference contract with $$U(\tau, (p', t')) > -\infty$$ for all $$\tau$$. The downward latent contract $$(\bar{p}, \bar{t})$$ is constructed so that the maximal type is indifferent between $$(\bar{p}, \bar{t})$$ and $$(p', t')$$. The indifference condition is (Appendix A1, p. 2574):

$$
\frac{\bar{\theta}^s(\omega_1)}{\bar{\theta}^s(\omega_0)} \Big[ u\!\left(\hat{t} - \bar{p},\, \omega_1,\, \bar{x}^s\right) - u\!\left(t'(\omega_1) - p',\, \omega_1,\, \bar{x}^s\right)\Big] = u\!\left(t'(\omega_0) - p',\, \omega_0,\, \bar{x}^s\right) - u\!\left(-\bar{p},\, \omega_0,\, \bar{x}^s\right)
$$

For fixed $$\hat{t} > t'(\omega_1)$$, a unique $$\bar{p} \in [p' - t'(\omega_0),\, -\underline{z}]$$ solving the indifference condition exists because the right-hand side is finite and increasing in $$\bar{p}$$, and utility is unbounded above. Raising $$\hat{t}$$ drives the firm's expected profit from selling $$(\bar{p}, \bar{t})$$ toward $$-\infty$$, because $$\lim_{\hat{t} \to \infty} \bar{p}'(\hat{t}) = 0$$ (the marginal increase in $$\bar{p}$$ vanishes, so $$\hat{t} - \bar{p}(\hat{t}) \to \infty$$) while the transfer cost $$\bar{\theta}^s(\omega_1) \hat{t} \to \infty$$ (p. 2574). Choosing $$\hat{t}$$ large enough makes the downward latent contract arbitrarily unprofitable for the firm when it offers menu $$M^s$$ after a higher signal $$s' > s$$. A type in that higher signal's support then prefers $$\bar{c}^s$$ to contracts in the deviating menu, deterring the deviation.

An analogous upward latent contract $$(\underline{p}, \underline{t})$$ is constructed with lower payouts in $$\omega_1$$ and a higher transfer in $$\omega_0$$, targeting the minimal type $$\underline{\tau}^s$$, to deter the firm from offering a lower-signal menu after signal $$s$$.

**Equilibrium verification (proof of Theorem 1, pp. 2576-2577).** With $$M^s = M^s_{a^*} \cup \{(\bar{p}^s, \bar{t}^s), (\underline{p}^s, \underline{t}^s)\}$$, consider the strategy profile: the firm offers $$M^s$$ after signal $$s$$; on-path agents choose their allocated contract; if the firm deviates to $$M^{s'}$$, all types who weakly prefer the corresponding latent contract choose it. For $$\hat{t}$$ sufficiently large, the latent contracts are chosen by enough types that the deviation is unprofitable regardless of what other types choose, since the expected loss from latent-contract purchases is unbounded. Hence the firm's optimal response is to follow the regulator's prescribed menu after each signal.

**Data-driven price cap (Proposition 5, pp. 2568-2569).** For the canonical one-category model the regulator can observe three objects from laissez-faire market data: the contracts sold in each menu $$M_i = \{(p_i^1, t_i^1), \ldots, (p_i^{m_i}, t_i^{m_i})\}$$; the fraction $$\lambda(c_i^k)$$ of agents choosing each contract; and the fraction $$\rho(c_i^k)$$ suffering a loss. From these she infers: the loss amount $$\ell = t_n^{m_n}$$ (the transfer paid by the full-coverage contract on the highest-signal menu); the highest-risk types $$\bar{\theta}^{s_i} = \rho(c_i^{m_i})$$; and their menu share $$\lambda(c_n^{m_n})$$. The price-capped menu $$M_n^C$$ charges $$\bar{p}_i = \min\{p_i, p^C\}$$ for each contract. Adding to each other menu a latent contract with premium $$\bar{p}^i = p_i^{m_i} + B^i$$ (surcharge $$B^i \geq 0$$) and add-on transfer $$\bar{t}^i = \ell + A^i$$ ($$A^i \geq 0$$) constructs these purely from observable parameters, implementing the price cap without requiring knowledge of the full type distribution.

## Empirical specifications

This is a pure theory paper. There are no regression specifications or estimated equations. The illustration in Section I (p. 2552, Figure 1) uses calibrated parameters from Handel, Hendel, and Whinston (2015) to visualize the latent contract construction: CARA utility $$u(z) = -e^{-\alpha z}/\alpha$$ with risk-aversion coefficient $$\alpha = 0.0004$$, low risk $$\underline{\theta} = 0.1$$, high risk $$\bar{\theta} = 0.2$$. The figure shows indifference curves and the shaded region of contracts that attract the type $$(H, \bar{\theta})$$ but repel category $$L$$ consumers. These are calibration parameters used only for visual illustration; no data are fitted or tested.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Handel, Hendel, and Whinston (2015) CARA calibration | Parameters for the illustrative Figure 1 only (not data in the usual sense: α, θ, θ̄ are fixed prior estimates) | No page yet |

No empirical data are used in the main theoretical analysis or proofs.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210710) if you are: designing or evaluating menu-based regulatory policies for insurance or other selection markets; studying delegation theory where an agent uses private data to screen principals; extending the framework to multiple firms, multidimensional types, or settings where regulators cannot impose purchase mandates; or working through the formal proofs and the online Appendix extensions (cream-skimming, constrained regulatory power, moral hazard). The seven locators above point to the exact theorem and proposition pages.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(10), 2023. No open-access licence was found in Crossref or OpenAlex metadata (access: closed). This page is a distillation updated by an LLM on 2026-10-04 and checked against the source PDF by an LLM; it is **not human-verified or independently reproduced**. Redistribution: extract-only.

> Bhaskar, Dhruva, Andrew McClellan, and Evan Sadler.
> "Regulation Design in Insurance Markets."
> *American Economic Review* 113, no. 10 (October 2023): 2546-2580.
> DOI: 10.1257/aer.20210710.
> © 2023 American Economic Association.
> Reproduced here in extract form only under fair-use scholarly commentary.
