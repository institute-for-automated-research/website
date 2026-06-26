---
title: "Feedback Design in Dynamic Moral Hazard: Ely, Georgiadis & Rayo (2025)"
description: >-
  Distilled: In a dynamic moral hazard setting with a binary success signal, the jointly
  optimal performance feedback and reward contract takes a two-phase bang-bang form: an
  initial silent phase (agent kept in the dark) followed by a full-transparency pronto
  phase, driven by a backward compounding effect that makes front-loading ignorance
  uniquely optimal. Econometrica 2025, CC BY-NC 4.0. Five core theoretical results with
  source locators, the model equations, and the solution method; LLM-distilled, not
  reproduced.
sidebar:
  label: Ely-Georgiadis-Rayo 2025
  order: 1
tags: [paper-summary, contract-theory, moral-hazard, information-design, dynamic-contracting,
       mechanism-design, principal-agent, open-access, peer-reviewed, unreplicated]
paper:
  authors: Jeffrey C. Ely, George Georgiadis, Luis Rayo
  authorList:
    - { family: Ely, given: Jeffrey C., affiliation: Department of Economics, Northwestern University }
    - { family: Georgiadis, given: George, orcid: 0000-0002-5872-5747, affiliation: Kellogg School of Management, Northwestern University }
    - { family: Rayo, given: Luis, orcid: 0000-0003-4429-7398, affiliation: Kellogg School of Management, Northwestern University }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 2 (March 2025), 597-621"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA21871
  jel:
    codes: [D82, D86, C73]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: [Game Theory and Applications, Opinion Dynamics and Social Influence, Experimental Behavioral Economics Studies]
  dataAccess: public
  outcome:
    - optimal structure of performance feedback policy in dynamic moral hazard
    - principal expected effort net of monetary payments
  outcomeClass: [optimal-contract-design]
  license: 'CC BY-NC 4.0 (confirmed via Crossref DOI metadata: content-version unspecified, URL https://creativecommons.org/licenses/by-nc/4.0/, delay-in-days 0, start 2025-01-01; corroborated by artifact p. 597 Creative Commons Attribution-NonCommercial License notice)'
  licenseShort: CC BY-NC 4.0
  access: open
  machineAccess: 'open-access (CC BY-NC 4.0, Wiley/Econometric Society; PDF not machine-fetched directly; licence confirmed in Crossref DOI metadata 2026-06-26)'
  redistribution: 'extract-only (CC BY-NC 4.0 permits sharing for noncommercial purposes; PDF not hosted in this batch)'
  resultsCount: 5
  citedByCount: 3
  methods:
    role: theory
    family: theory
    buildsFrom: [principal-agent, bayesian-persuasion, mechanism-design]
  contributionType: [new-theory]
  mechanisms: [moral-hazard, information-asymmetry]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Sannikov (2008)', doi: '10.1111/j.1467-937x.2008.00486.x', relation: builds-on, note: 'canonical continuous-time principal-agent framework that this paper extends to include joint feedback design' }
    - { cite: 'Kamenica and Gentzkow (2011)', doi: '10.1257/aer.101.6.2590', relation: builds-on, note: 'Bayesian persuasion framework; this paper applies information design jointly with monetary incentives under moral hazard' }
    - { cite: 'Rayo and Segal (2010)', doi: '10.1086/657922', relation: builds-on, note: 'static optimal information disclosure; extended here to dynamic moral hazard with joint reward design' }
    - { cite: 'Ely and Szydlowski (2020)', doi: '10.1086/704387', relation: cites, note: 'related model with irreversible quitting and exogenous rewards where a delay mechanism can be optimal; contrasts with two-phase bang-bang here' }
    - { cite: 'Halac, Kartik, and Liu (2016)', doi: '10.1093/restud/rdw013', relation: cites, note: 'dynamic experimentation with a privately informed agent; does not allow principal to strategically withhold feedback' }
    - { cite: 'Mason and Välimäki (2015)', doi: '10.1111/jeea.12126', relation: cites, note: 'Poisson breakthrough dynamic incentives for project completion; no feedback design component' }
  openQuestions:
    - 'Applying the present methods to multi-agent (contest) settings and to settings with more general monitoring technologies beyond a single binary success signal (Conclusion, p. 613).'
  replicationCode:
    status: none
  extraction:
    - { by: 'paper-distiller (claude-sonnet-4-6)', date: 2026-06-26, role: extracted, note: 'Full text read (pp. 597-621); five theoretical results extracted with equation locators. Not human-verified. Not reproduced.' }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF (pp. 597-621); all 5 Core results rows and all model/method equations (eqs. 1-4, Obj, P, Feas, Prop. 3 bang-bang, Thm. 1 rewards) verified correct. Removed colorful adjective 'novel' from TL;DR; no em-dashes found." }
  licenceVerification:
    - { source: 'Crossref REST API works/10.3982/ECTA21871', checked: 2026-06-26, by: 'paper-distiller (claude-sonnet-4-6)', found: 'license content-version=unspecified, URL=https://creativecommons.org/licenses/by-nc/4.0/, delay-in-days=0, start=2025-01-01' }
  rightsSignalConflict: false
---

**What this is.** The paper's core theoretical results, the model equations (principal-agent setup with binary success signal), and the solution method (minimal reward characterization, bang-bang relaxed problem): enough to know what it found and how, without reading all 25 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.3982/ECTA21871).

## TL;DR

The paper studies the optimal joint design of performance feedback and monetary rewards when the only available performance signal is coarse: a binary "success" that arrives stochastically as a function of the agent's accumulated effort. A "backward compounding effect" governs the analysis: promising greater future rewards to prevent pausing raises the cost of all earlier rewards as well, and this cost is larger the further into the future the information is hidden. As a result, it is always optimal to front-load the agent's ignorance. The optimal contract takes a two-phase bang-bang form (Theorem 1, p. 606): a fully silent phase in which the principal says nothing and the agent works regardless of success, followed by a full-transparency pronto phase in which the agent is immediately informed and stops upon success. The silent phase exists precisely when the flow cost satisfies c < 1/2. The two-phase structure is robust to continuation payoffs, a more informed agent, learning-by-doing, and costly direct monitoring.

## Core results

All results are theoretical; locators point into the source PDF.

| # | Result | Locator | Stated form |
|---|---|---|---|
| R1 | Local incentive constraint (LIC): necessary condition for incentive compatibility via deterring instantaneous pauses | Prop. 1, p. 602 | r(t)R(t)f(t) - cp(t) ≥ cr(t)Q(t)f(t) + ∫ r(s)[R(s)-cQ(s)]\|f'(s)\| ds - c∫ r(s)f(s) ds |
| R2 | Minimal implementing reward schedule: unique least-cost reward satisfying LIC with equality at every t | Prop. 2, p. 603 | r(t)R(t) = c[p(t)/f(t) - ∫ f'(s)/f(s)² p(s) ds - ∫ (r(s)-r(t)q(s\|t)) ds] (eq. 4) |
| R3 | Principal's objective simplifies to (Obj); relaxed problem (P) admits bang-bang solution with cutoffs t\* and T\* | Lemma 1 + Prop. 3, pp. 605-606 | t\* = min{t : 1-2c-cΦ(t) ≤ 0}; p = 1 on [0,t\*], 1-F(t) on (t\*,T\*], 0 thereafter; r = 1 on [0,T\*] |
| R4 | Every optimal policy takes exactly two phases: silent (no disclosure) then pronto (immediate disclosure) | Thm. 1, p. 606 | Silent reward: c/λ(T\*) + cF(t\*)/f(t\*); pronto reward: c/λ(T\*); silent phase iff c < 1/2 |
| R5 | With direct monitoring cost m > c, early silence dominates always pronto when the silent phase is sufficiently short | Prop. 4, p. 612 | Expected cost ratio Δ(t̃) < 1 iff m > c and t̃ sufficiently small; m > c is the exact threshold |

**Overall (paper's conclusion).** The backward compounding effect unifies the analysis: silence grants the agent rents, and these rents compound the longer they are deferred, making it uniquely optimal to front-load ignorance. The two-phase bang-bang structure holds under every extension considered, and the key quantity governing it is the function Φ(t) = F(t)(d/dt)(1/f(t)), which measures how severely the backward compounding escalates over time.

## Theory / model

The baseline model (Section 2, pp. 599-601) is a continuous-time game on [0, T] with T large and finite. At each instant, the agent privately chooses to work (incurring flow cost c < 1 per unit time) or wait. A success occurs at most once and is observed only by the principal. The agent's cumulative effort e maps to success via a CDF $$F : [0, T] \to [0, 1]$$ with F(0) = 0 and F(T) ≤ 1. Both the density $$f = F'$$ and the hazard rate $$\lambda(e) = f(e)/[1-F(e)]$$ are weakly decreasing in e. The key auxiliary function (p. 600, eq. 1) is:

$$
\Phi(t) := F(t)\,\frac{d}{dt}\frac{1}{f(t)}, \quad \Phi(0) = 0, \quad \Phi \text{ weakly increasing.} \tag{1}
$$

A larger $$\Phi(t)$$ means the backward compounding effect is more severe: the hazard rate is falling faster (large $$-f'/f^2$$) and there is more cumulative mass of past rewards to compound (large $$F(t)$$).

The principal designs (i) a reward schedule $$R(t) \geq 0$$ paid upon success at t and (ii) a feedback policy. By a direct-mechanism argument it suffices to consider direct policies: $$q(s|t)$$, the probability the agent is asked to continue working at s conditional on having succeeded at $$t \leq s$$, and $$r(s)$$, the probability the agent is asked to continue conditional on no success yet. The total probability the agent is asked to work at least until s is (p. 600, eq. 2):

$$
p(s) = r(s)\bigl[1 - F(s)\bigr] + \int_0^s r(u)\,f(u)\,q(s|u)\,du. \tag{2}
$$

The agent's continuation payoff from obeying recommendations from t onward is (p. 601, eq. 3):

$$
U(t) := \int_t^T r(s)\,R(s)\,f(s)\,ds - c\int_t^T p(s)\,ds. \tag{3}
$$

The principal maximizes total expected effort net of rewards: $$\int_0^T p(s)\,ds - \int_0^T r(s)R(s)f(s)\,ds$$, subject to incentive compatibility. The agent is risk neutral and cash-constrained (no punishment below zero). Both players are assumed not to discount time, though the results are qualitatively unchanged with a common discount rate.

The paper builds on the continuous-time principal-agent approach of Sannikov (2008) and the information-design frameworks of Kamenica and Gentzkow (2011) and Rayo and Segal (2010), extending them to a setting where the principal jointly controls both the feedback policy and the monetary rewards.

## Method

**Step 1 - Local incentive constraint (Proposition 1, p. 602).** It suffices to focus on instantaneous deviations (brief pauses). Dividing the no-pause condition by $$\Delta t$$ and letting $$\Delta t \to 0$$ establishes the local incentive constraint (LIC): for all t,

$$
r(t)R(t)f(t) - c\,p(t) \geq c\,r(t)Q(t)f(t) + \int_t^T r(s)\bigl[R(s) - cQ(s)\bigr]\lvert f'(s)\rvert\,ds - c\int_t^T r(s)\,f(s)\,ds, \tag{LIC}
$$

where $$Q(t) = \int_t^T q(u|t)\,du$$ is the agent's expected future work conditional on succeeding at t. The three right-hand terms represent: (i) the effort savings (the agent avoids cost c for $$Q(t)$$ future periods), (ii) the higher density of future success because accumulated effort is lower (the backward compounding integral), and (iii) the higher probability that future recommendation-to-work periods are reached.

**Step 2 - Minimal reward schedule (Proposition 2, p. 603).** For any given recommendation policy, there is a unique least-expensive reward schedule satisfying (LIC) with equality at every t. Equation (4) gives it:

$$
r(t)R(t) = c\!\left[\frac{p(t)}{f(t)} - \int_t^T \frac{f'(s)}{f(s)^2}\,p(s)\,ds - \int_t^T \bigl(r(s) - r(t)\,q(s|t)\bigr)\,ds\right]. \tag{4}
$$

The first term is the zero-rent reward (just enough to cover current expected cost). The second term is the backward compounding penalty: since $$f' \leq 0$$, this term is positive and requires raising current rewards to compensate for high future rewards. The third term is the information rebate: when the principal reveals a success at t (low $$q(s|t)$$), the agent works less thereafter, reducing future reward obligations, so current rewards can be lower.

**Step 3 - Simplified objective and bang-bang relaxed problem (Lemma 1 + Proposition 3, pp. 605-606).** Substituting (4) into the objective, Lemma 1 shows it simplifies to:

$$
\int_0^T p(t)\,dt - c\int_0^T \bigl[p(t)(1 + \Phi(t)) - (r(t) - p(t))\bigr]\,dt. \tag{Obj}
$$

The integrand $$r(t) - p(t)$$ is the information rebate (positive only when a successful agent is still asked to work). Rearranging and collecting terms, the relaxed problem (P) that ignores global deviations is:

$$
\sup_{r(\cdot),\,p(\cdot)} \int_0^T p(t)\{1 - 2c - c\Phi(t)\}\,dt + c\int_0^T r(t)\,dt \tag{P}
$$

$$
\text{s.t.} \quad r(t)[1-F(t)] \leq p(t) \leq 1, \quad 0 \leq r(t) \leq 1 \text{ non-increasing.} \tag{Feas}
$$

Since $$\Phi$$ is weakly increasing, the coefficient $$1-2c-c\Phi(t)$$ is weakly decreasing in t: positive at t = 0 when c < 1/2 and eventually non-positive. Because the objective is linear in $$p(t)$$ and $$r(t)$$, Proposition 3 establishes a bang-bang solution: define $$t^* = \min\{t : 1-2c-c\Phi(t) \leq 0\}$$ and let $$T^* \in (t^*, T]$$ be the optimal terminal date. Then:

$$
p(t) = \begin{cases} 1 & t \in [0, t^*], \\ 1-F(t) & t \in (t^*, T^*], \\ 0 & t > T^*, \end{cases} \qquad r(t) = \begin{cases} 1 & t \leq T^*, \\ 0 & t > T^*. \end{cases}
$$

**Step 4 - Two-phase optimal contract (Theorem 1, p. 606).** The bang-bang solution is implemented by a deterministic-deadline contract with exactly two phases. In Phase 1 (silent phase, $$t \in [0, t^*]$$): the principal is silent; $$q(t|s) \equiv r(t) \equiv 1$$; the agent works continuously regardless of success. In Phase 2 (pronto phase, $$t \in (t^*, T^*]$$): $$r(t) = 1$$ and $$q(s|t) \equiv 0$$; the agent quits immediately upon success. Substituting into (4) and simplifying using $$\lambda(T^*) = f(T^*)/[1-F(T^*)]$$, the reward for each phase is (Appendix A.5, pp. 618-619):

$$
R(t) = \frac{c}{\lambda(T^*)} + \frac{cF(t^*)}{f(t^*)} \quad \text{for } t \in [0, t^*], \qquad R(t) = \frac{c}{\lambda(T^*)} \quad \text{for } t \in (t^*, T^*].
$$

The phase 1 reward exceeds the phase 2 reward by $$cF(t^*)/f(t^*)$$: the "silent premium" that compensates for the rents the agent would earn during the pronto phase, compounded backward into the silent phase. The cutoff $$t^* > 0$$ (positive silent phase) if and only if c < 1/2. Global incentive compatibility is verified by showing that the non-increasing reward profile makes any global deviation unprofitable (Appendix A.5). The result contrasts with Ely and Szydlowski (2020), where quitting is irreversible and rewards are exogenous, and with Halac, Kartik, and Liu (2016) and Mason and Välimäki (2015), neither of which allows the principal to strategically withhold performance feedback.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Pure theory paper; all results are analytical propositions and theorems | n/a |

## When to read the full paper

Read the [original](https://doi.org/10.3982/ECTA21871) if you are: designing performance evaluation or promotion systems with coarse binary signals in employment or professional services settings; extending the two-phase framework to multiple agents or contest environments (the paper's own suggested direction); studying how information design interacts with monetary incentives under dynamic moral hazard; or working through the formal proofs, which are detailed and constructive (Appendix A, pp. 613-620). Section 5 (pp. 608-613) covers four extensions: continuation payoffs, a more informed agent, an upfront learning-by-doing investment phase, and costly direct monitoring.

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(2), March 2025. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The CC BY-NC 4.0 licence permits noncommercial sharing; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY-NC 4.0).** Ely, Jeffrey C., George Georgiadis, and Luis Rayo.
> "Feedback Design in Dynamic Moral Hazard."
> *Econometrica* 93, no. 2 (March 2025): 597-621.
> DOI: 10.3982/ECTA21871. © 2025 The Authors. The Econometric Society.
> Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
