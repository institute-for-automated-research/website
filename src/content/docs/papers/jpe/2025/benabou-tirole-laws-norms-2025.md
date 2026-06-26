---
title: "Laws and Norms: Bénabou & Tirole (2025)"
description: >-
  Distilled: A unified theory of how intrinsic motivation, material incentives, and social
  norms jointly shape compliance and optimal public policy. Derives modified Pigou-Ramsey
  taxation correcting for reputational rents, and characterizes when the expressive content
  of law makes incentives softer or tougher than the symmetric-information optimum.
  Journal of Political Economy 2025, paywalled. Eight core results with proposition
  locators, the model equations, and the signaling-equilibrium analysis.
sidebar:
  label: Bénabou-Tirole 2025
  order: 1
tags: [paper-summary, social-norms, public-goods, optimal-taxation, expressive-law, signaling, behavioral-economics, peer-reviewed, unreplicated]
paper:
  authors: Roland Bénabou, Jean Tirole
  authorList:
    - { family: Bénabou, given: Roland, affiliation: "Princeton University, NBER, CEPR, IZA" }
    - { family: Tirole, given: Jean, affiliation: "Toulouse School of Economics and IAST" }
  year: 2025
  venue: "Journal of Political Economy 134(2), pp. 731-772 (available online August 2025; print issue February 2026)"
  venueShort: J. Pol. Economy 2025
  doi: 10.1086/738343
  jel:
    codes: [D64, D82, H41, K1, K42, Z13]
    assignedBy: authors
    date: 2026-06-26
  topics: ["Experimental Behavioral Economics Studies", "Gender, Labor, and Family Dynamics", "Taxation and Compliance Studies"]
  dataAccess: public
  outcome:
    - equilibrium compliance with prosocial norms
    - optimal incentive level set by a principal
    - expressive content of law under asymmetric information
    - social norm strength (social multiplier)
  outcomeClass: [social-norms, social-welfare]
  license: "No open license found in Crossref metadata; paywalled (University of Chicago Press). An accepted-manuscript version is available on HAL (hal-05577272)."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press; confirmed via Crossref metadata 2026-06-26, no CC or open-license block in works/10.1086/738343)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 5
  methods:
    role: theory
    family: theory
    buildsFrom: [signaling-game-pbe, principal-agent, mechanism-design]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry]
  scope:
    region: theoretical
  relatesTo:
    - { cite: "Bénabou and Tirole (2006a)", relation: extends, note: "extends their incentives-and-prosocial-behavior framework to derive optimal taxation and the expressive role of law under asymmetric information" }
    - { cite: "Bénabou and Tirole (2003)", doi: '10.1111/1467-937x.00253', relation: builds-on, note: "foundational model of intrinsic vs extrinsic motivation providing the image-concern utility specification" }
    - { cite: "Mailath (1987)", doi: '10.2307/1913560', relation: extends, note: "generalizes his signaling-game incentive-compatibility conditions to non-monotone principal payoffs, deriving a new second-order condition" }
    - { cite: "Besley and Ghatak (2005)", relation: cites, note: "related work on competition and incentives with motivated agents, background for optimal incentive design in Section III" }
  openQuestions:
    - "The law is set by a single principal; in practice interest groups, activists, and norm entrepreneurs compete to change both the social equilibrium and the law (p. 30)."
    - "The distribution of preferences is taken as exogenous; future work could extend to segregation equilibria in firms and schools, or self-sorting via migration across neighborhoods (p. 30)."
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (HAL preprint hal-05577272, 35 pages including references). Not human-verified. Not reproduced. Pure theory paper; no replication code." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed: JEL codes (added D64, K1, K42 from paper abstract; changed assignedBy to authors); R1/R2 locators p.13→p.14; R4 locator pp.19-20→pp.20-21; R5 locator p.22→p.23; R6 content (left-truncation mis-assigned to Prop.9/A<0, belongs to Prop.8/A=B=0); body-text page refs for eq.14 (p.13→p.14), eq.18 (p.18→p.19), and Prop.7 body mention (p.22→p.23). All equations verified term-by-term against PDF; no magnitude errors found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/738343", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block present; PDF link content-version=vor, content-type=unspecified; no CC or open-access terms. Published date 2026-02-01, vol 134, issue 2, pp. 731-772." }
  rightsSignalConflict: false
---

**What this is.** The paper's core propositions, the image-concern model with its equations, and the signaling-game analysis of expressive law: enough to understand what it proved and how, without reading all 42 pages. To extend or replicate the formal results, read the original at [doi.org/10.1086/738343](https://doi.org/10.1086/738343).

## TL;DR

Bénabou and Tirole (2006a) introduced the image-concern model; this paper completes that program by deriving optimal taxation and the expressive role of law. A continuum of agents with heterogeneous intrinsic motivation v choose a prosocial action, earn reputational returns from peers who infer their type from their choice (honor if they act, stigma if they do not), and respond to material incentives y set by a principal. Under symmetric information, the optimal first-best incentive departs from the standard Pigouvian subsidy by subtracting the reputational rent that the marginal contributor extracts, and is hump-shaped in society's overall prosociality and in the compliance cost: norms substitute for incentives at both extremes of compliance. Under asymmetric information, where the principal knows the social environment θ but agents do not, the law becomes expressive. The principal uses her choice of y to signal θ, leading to softer law when she wants to signal norm strength, and tougher law when she signals the magnitude of the social externality. Extensions cover societies' resistance to economists' prescriptions ("commodification"), zero-tolerance policies, broken-windows theory, norm-based interventions, and the avoidance of cruel punishments.

## Core results

All locators refer to the version with DOI 10.1086/738343 (HAL preprint hal-05577272, 35 pp.).

| # | Result | Locator | Content as stated |
|---|---|---|---|
| R1 | First-best optimal incentive subtracts the reputational rent from the standard Pigouvian subsidy | Prop. 1(i), eq. (14), p. 14 | $$y^{FB}_\theta = \epsilon_\theta - \Delta_\theta\!\left(\tfrac{c_\theta - \epsilon_\theta}{e_\theta}\right)$$; the second term is the reputational rent extracted by the marginal contributor |
| R2 | Second-best optimal incentive is always strictly below the first-best and decreases with the shadow cost of funds | Prop. 1(ii), eq. (15), p. 14 | $$y^{SI}_\theta < y^{FB}_\theta$$ for all λ > 0; prosocial behavior is always underprovided; social multiplier amplifies but does not fully replace y |
| R3 | Optimal incentive is hump-shaped (bell-shaped) in the overall prosociality of society θ and in the compliance cost c | Prop. 2, Fig. 2, pp. 14-15 | When f_θ is strictly unimodal, y^{FB}_θ is single-peaked at θ₀ = (c − ε)/e; high prosociality (respectable act) and low prosociality (admirable act) both reduce the optimal incentive relative to the modal case |
| R4 | Soft law results when the principal's private information (M⁺, P⁻) or (M⁻, P⁺); tough law when (M⁺, P⁺) or (M⁻, P⁻) | Prop. 5, Fig. 3, pp. 20-21 | y^{AI}_θ < y^{SI}_θ on the off-diagonal of Table 1; y^{AI}_θ > y^{SI}_θ on the diagonal; always underprovision of prosocial behavior |
| R5 | A separating equilibrium (expressive law) exists when θ shifts societal values with a norm, operates a right truncation, affects the externality ε, or affects compliance cost under an anti-norm | Prop. 7, p. 23 | SOC₁ and SOC₂ satisfied strictly; existence proved in Online Appendix for cases (a)-(d) |
| R6 | Full pooling is the equilibrium outcome when θ indexes social monitoring intensity or performs a left-truncation; no separating equilibrium when θ is a distributional-shift parameter under an anti-norm or a cost parameter under a norm | Prop. 8-9, p. 23 | Prop. 8: A = B = 0 when θ = μ (social monitoring) or θ is a left-truncation parameter; full pooling preferred. Prop. 9: A < 0 when θ is a distributional-shift parameter with anti-norm (Δ' > 0) or a cost parameter with norm (Δ' < 0); no separating equilibrium exists |
| R7 | A principal with private information about θ selectively discloses: reveals good news, withholds bad; more disclosure when the probability of obtaining information is higher | Prop. 10, p. 24 | Disclosure iff θ ≥ θ̃ (under M⁺) or θ ≤ θ̃ (under M⁻); threshold θ̃ is decreasing in the probability q of observing θ |
| R8 | Commodification spillovers make soft law optimal when strong incentives on a formally-controlled activity would signal low prosociality and erode the norm in a non-incentivized activity | Prop. 11, p. 27 | For λ small enough, the high-type principal sets y^{AI}_{θ_H} < y^{SI}_{θ_H}; the least-cost separating equilibrium is D1-robust |

**Overall.** Optimal policy corrects the Pigouvian subsidy in two directions: subtract the reputational rent (norms already motivate, so over-incentivizing is wasteful and crowds out esteem), and use the signal sent by incentive choice itself to harness agents' intrinsic motivation and image concerns. The expressive content of law is soft when signaling social norms and tough when signaling social costs.

## Theory / model

The core model (Section II, pp. 6-9) has a continuum of agents of mass 1, each choosing a ∈ {0,1}. Choosing a = 1 costs c_θ, creates externality ε_θ, and earns a material incentive y from the principal. Agent types v are private information, distributed with continuous density f_θ(v) > 0 on V_θ = [v^min_θ, v^max_θ]. Intrinsic motivation for compliance is e_θ ≡ γε_θ + 1 − γ, capturing both consequentialist concern (weight γ on externalities) and warm glow. The utility function (eq. 1, p. 6) is:

$$
U = (ve_\theta - c_\theta + y)\,a + \epsilon_\theta\,\bar{a}_\theta + \mu_\theta\!\left(E_\theta[\tilde{v} \mid a, y] - \bar{v}_\theta\right). \tag{1}
$$

Here ā_θ is aggregate participation, μ_θ is the weight on reputational concerns, and $$E_\theta[\tilde{v} \mid a, y]$$ is others' posterior mean belief about the agent's type. The third term captures image concerns: the agent values being perceived as high-v by peers (or, via self-signaling, by himself). Reputation is a positional good.

The two conditional moments that generate honor and stigma (eqs. 2-3, pp. 7-8) are:

$$
E^+_\theta(v) = E_\theta[\tilde{v} \mid \tilde{v} \geq v], \quad E^-_\theta(v) = E_\theta[\tilde{v} \mid \tilde{v} < v], \tag{2}
$$

$$
\Delta_\theta(v^*) \equiv \mu_\theta\!\left[E^+_\theta(v^*) - E^-_\theta(v^*)\right]. \tag{3}
$$

$$E^+_\theta(v^*)$$ is the honor conferred on those who contribute when v* is the cutoff, and $$E^-_\theta(v^*)$$ is the stigma borne by abstainers. An agent chooses a = 1 iff $$ve_\theta \geq c_\theta - y - \Delta_\theta(v^*)$$, so the equilibrium cutoff $$v^*_\theta(y)$$ satisfies (eq. 4, p. 8):

$$
v^*_\theta(y)\,e_\theta - c_\theta + y + \Delta_\theta(v^*_\theta(y)) = 0. \tag{4}
$$

Lemma 1 (attributed to Jewitt; Harbaugh and Rasmusen; Adriani and Sonderegger; p. 9) characterizes Δ_θ: when f_θ is unimodal, Δ_θ is strictly quasi-convex. The equilibrium then exhibits a norm (strategic complements, Δ'_θ < 0) for respectable behaviors and an anti-norm (strategic substitutes, Δ'_θ > 0) for admirable, rare behaviors. Multiple equilibria can arise when complementarity is strong; uniqueness is ensured by $$e_\theta + \Delta'_\theta(v) > 0$$ for all v. The social multiplier (eq. 6, p. 8),

$$
s_\theta(y) \equiv -\frac{\partial v^*_\theta}{\partial y} = \frac{1}{e_\theta + \Delta'_\theta(v^*_\theta(y))}, \tag{6}
$$

amplifies the compliance response to a unit increase in y through the reputational feedback. It exceeds $$1/e_\theta$$ for respectable (norm-driven) behaviors and falls below $$1/e_\theta$$ for admirable ones.

Under asymmetric information (Sections IV-VI), θ ∈ [θ₁, θ₂] is privately known to the principal. Agents infer θ from y and form long-run reputations. The informational multiplier (Section IV.B, pp. 18-19) captures the additional channel: the policy signals θ, shifting agents' beliefs about ε, c, or the distribution of values, and hence their intrinsic motivation and reputational incentives. The principal's objective under asymmetric information is (eq. 18, p. 19):

$$
W^{AI}_\theta(y) = \int_{v^*_{\hat\theta(y)}(y)}^{+\infty} \!\left[ve_\theta + \epsilon_\theta - c_\theta - \lambda y\right] f_\theta(v)\,dv, \tag{18}
$$

where $$\hat\theta(y)$$ is agents' belief about θ on the equilibrium path.

Building on Bénabou and Tirole (2006a) and Bénabou and Tirole (2003), the paper also extends the framework in Section V to direct communication: a principal who can selectively disclose hard information about θ will reveal good news and conceal bad news (Proposition 10), with credibility limited by the sender's incentives. Besley and Ghatak (2005) provide related background on motivated-agent settings that informs the optimal-policy analysis.

## Method

The paper derives optimal policy in two settings and establishes the existence of separating equilibria for expressive law. It builds on `signaling-game-pbe`, `principal-agent`, and `mechanism-design`.

**Symmetric information: modified Pigou-Ramsey (Section III).** The principal maximizes social welfare $$W^{SI}_\theta(y)$$ subject to eq. (4). The first-order condition (eq. 12, p. 13) equates the net social marginal benefit to the deadweight loss from paying all inframarginal agents:

$$
\frac{\epsilon_\theta + v^*_\theta(y)\,e_\theta - c_\theta - \lambda y}{e_\theta + \Delta'_\theta(v^*_\theta(y))} = \frac{\lambda}{h_\theta(v^*_\theta(y))}, \tag{12}
$$

where $$h_\theta(v) = f_\theta(v)/[1-F_\theta(v)]$$ is the monotone hazard rate. The first-best formula (eq. 14, p. 14) subtracts from the standard Pigouvian subsidy ε_θ the reputational rent $$\Delta_\theta((c_\theta - \epsilon_\theta)/e_\theta)$$ that the marginal contributor extracts. The second-best (eq. 15) further discounts for fiscal cost.

**Asymmetric information: the expressive-law signaling problem (Section IV).** In a separating equilibrium, the principal of type θ chooses $$y^{AI}_\theta$$ and agents invert y to learn θ exactly. The first-order condition (eq. 19, p. 19) adds an informational multiplier to eq. (12):

$$
\left(\frac{\epsilon_\theta + v^*_\theta(y)\,e_\theta - c_\theta - \lambda y}{e_\theta + \Delta'_{\hat\theta(y)}(v^*_{\hat\theta(y)}(y))}\right)\!\!\left(1 + \left(v^*_{\hat\theta}\gamma\frac{\partial\epsilon_\theta}{\partial\theta} - \frac{\partial c_\theta}{\partial\theta} + \frac{\partial\Delta_\theta}{\partial\theta}(v^*_{\hat\theta(y)})\right)\hat\theta'(y)\right) = \frac{\lambda}{h_\theta(v^*_{\hat\theta(y)}(y))}. \tag{19}
$$

The second bracket is the informational multiplier: $$\hat\theta'(y) = 1/(y^{AI}_\theta)'$$ is the inverse slope of the separating schedule; the term in parentheses captures how a belief shift about θ changes motivation (via M⁺ or M⁻) and reputational pressure (via P⁺ or P⁻). When these signs align (diagonal of Table 1), the multiplier exceeds 1 and calls for tougher law; when they oppose (off-diagonal), it falls below 1 and calls for softer law.

The paper extends Mailath (1987)'s classic analysis to non-monotone payoffs. The key second-order condition for a separating equilibrium (Proposition 6, SOC₁, p. 22) is:

$$
\mathcal{A}(\theta, \hat\theta) \equiv y'(\hat\theta)\,b(\theta,\hat\theta,y(\hat\theta))\,\frac{\partial\!\left[b(\theta,\hat\theta,y(\hat\theta))\,h_\theta(v^*_{\hat\theta}(y(\hat\theta)))\right]}{\partial\theta} \geq 0, \tag{SOC_1}
$$

where $$b(\theta,\hat\theta,y)$$ is the social benefit of a marginal contribution. A ≥ 0 ensures no principal type wants to mimic another. Proposition 7 (p. 23) then identifies the four cases where SOC₁ and a complementary SOC₂ hold strictly, establishing existence of a separating equilibrium. Propositions 8-9 (p. 23) characterize knife-edge (full pooling) and impossible (no separating equilibrium) cases.

## Empirical specifications

This paper contains no empirical analysis of its own. All results are propositions with formal proofs in the Online Appendix. Section II.E (pp. 11-12) surveys empirical applications by other researchers that test the model's comparative-statics predictions: Besley, Jensen and Persson (2023) use eq. (4) to study tax evasion in local British and Welsh councils 1980-2009 and document persistence of social-multiplier effects; Jia and Persson (2021) exploit Chinese affirmative-action policy changes to test predictions on ethnic-identity choice; Chen (2016) studies deterrence effects of WWI executions on Irish vs British soldiers to test the social-multiplier comparative static.

## Datasets used

This paper uses no datasets. All results are mathematical propositions.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| (none) | Theory paper | none |

## When to read the full paper

Read the original at [doi.org/10.1086/738343](https://doi.org/10.1086/738343) if you are: (1) working through the formal proofs, all of which are in the Online Appendix; (2) studying the extension sections (Section VI on spillovers, zero-tolerance policies, broken-windows theory, and cruel punishments; the Online Appendix on reciprocity, conformity, and status); (3) applying the framework to specific policies, where Table 1 (p. 16) and Figure 2 (p. 14) summarize the comparative statics; or (4) building on the expressive-law signaling equilibrium, where Propositions 6-9 and their appendix proofs are the required inputs.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 134(2), pp. 731-772. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. Paywalled; extract-only. An accepted-manuscript version is available on HAL at [hal.science/hal-05577272v1](https://hal.science/hal-05577272v1).

> Bénabou, Roland, and Jean Tirole. "Laws and Norms." *Journal of Political Economy* 134, no. 2 (2025): 731-772. DOI: 10.1086/738343.
