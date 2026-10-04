---
title: "Uncertainty, Contracting, and Beliefs in Organizations: Dicks & Fulghieri (2025)"
description: >-
  Distilled: In a multidivisional firm, uncertainty aversion by managers creates
  endogenous disagreement that raises incentive costs; HQ can hedge this by
  designing contracts with cross-divisional exposure (equity or relative-performance
  pay), improving effort and aligning beliefs. Review of Financial Studies 2025,
  paywalled. Eleven core results with source locators, the model with its key
  equations, and the method.
sidebar:
  label: Dicks-Fulghieri 2025
  order: 1
tags: [paper-summary, contract-theory, executive-compensation, organizational-economics,
       uncertainty, moral-hazard, peer-reviewed, unreplicated]
paper:
  authors: David L. Dicks, Paolo Fulghieri
  authorList:
    - { family: Dicks, given: David L., orcid: "0000-0001-7036-2638", affiliation: Baylor University }
    - { family: Fulghieri, given: Paolo, affiliation: "University of North Carolina, CEPR, and ECGI" }
  year: 2025
  venue: The Review of Financial Studies 38(7), 2025, 2182-2225
  venueShort: Rev. Financ. Stud. 2025
  doi: 10.1093/rfs/hhaf005
  jel:
    codes: [D86, D81, J33]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-06
  topics: [Complex Systems and Decision Making]
  dataAccess: public
  outcome:
    - optimal incentive contract structure in multidivisional firms
    - pay-performance sensitivity under uncertainty
    - prevalence of equity-based vs relative-performance compensation
  outcomeClass: [optimal-contract-design]
  license: "Oxford standard publication reuse rights (confirmed via Crossref DOI metadata: content-version vor, URL https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days 0, start 2025-03-14)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (Oxford Academic, 2026-06-06)
  redistribution: extract-only
  resultsCount: 11
  citedByCount: 4

  methods:
    role: theory
    family: theory
    buildsFrom: [principal-agent, mechanism-design]

  contributionType: [new-theory]
  mechanisms: [moral-hazard, belief-endogeneity, uncertainty-hedging]

  scope:
    region: theoretical
    assetClass: executive compensation contracts

  relatesTo:
    - { cite: "Holmstrom (1979)", doi: '10.2307/3003320', relation: builds-on, note: "standard principal-agent moral hazard framework the paper extends to uncertainty aversion" }
    - { cite: "Gilboa and Schmeidler (1989)", doi: '10.1016/0304-4068(89)90018-9', relation: builds-on, note: "maxmin expected utility (MEU) and uncertainty hedging axiom underlying the model" }
    - { cite: "Hansen and Sargent (2001)", doi: '10.1257/aer.91.2.60', relation: builds-on, note: "relative entropy criterion used to define the parametric core beliefs set" }
    - { cite: "Dicks and Fulghieri (2019)", relation: extends, note: "earlier working paper (risk-neutral agents) extended here to risk-averse division managers" }
    - { cite: "Dicks and Fulghieri (2021)", doi: '10.1093/rfs/hhaa065', relation: extends, note: "companion RFS paper on uncertainty and innovation; same MEU-with-relative-entropy approach" }
    - { cite: "Holmstrom (1982)", relation: builds-on, note: "moral hazard in teams; paper rules out synergies in the basic model following this benchmark" }
    - { cite: "Holmstrom and Milgrom (1987)", doi: '10.2307/1913238', relation: builds-on, note: "linearity of optimal contracts under CARA utility; this paper derives linear contracts in the same spirit" }
    - { cite: "Miao and Rivera (2016)", doi: '10.3982/ecta13127', relation: cites, note: "robust contracts in continuous time; alternative uncertainty formulation" }

  openQuestions:
    - "Extending the model to multitasking settings, as in Holmstrom and Milgrom (1991), and examining the interaction of uncertainty with task assignment and optimal compensation (Conclusion, p. 2218)."
    - "Examining the impact of uncertainty on organization design; plausibility that high-uncertainty organizations have flatter structures for uncertainty hedging purposes (Conclusion, p. 2218)."
    - "A thorough analysis of firms' overall uncertainty-hedging policy, including financial and real hedges and their interaction with traditional risk hedging (Section 5.1, p. 2214)."
    - "Examining matching of heterogeneous agents to heterogeneous firms in a labor-market equilibrium (Conclusion, p. 2218)."

  replicationCode:
    status: none




  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-06, role: extracted, note: "Full text read (pp. 2182-2225); five results extracted from the paywalled PDF. Not human-verified. Not reproduced. No replication code stated by authors (Code Availability statement p. 2218)." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-06, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all five Core-results rows confirmed correct (Theorem 1 p. 2201, Corollary 1 p. 2203, Theorem 3 p. 2207, Theorem 4 p. 2209, Lemma 5/Theorem 5 p. 2213, Theorem 7 p. 2215); all equations (eqs. 1, 3, 5, 6, 7, 8, 10, 11, 20, 21, 25) verified term-by-term; three fixes applied: removed off-registry outcomeClass 'firm-financing' (paper studies incentive contracts, not capital structure), removed methods.identification field (omitted for role:theory papers per classification rules), and removed contributionType 'new-fact' (paper explains known stylized facts theoretically but introduces no new empirical regularity)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF; appended six Core-results rows, aligned findings and result count, staged uncertainty-hedging vocabulary, and added missing numbered main-text equations. This augmentation is not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 11 Core results, formal equations, classifications, findings, and prose against the PDF; corrected equity-result conditions, HQ/manager position direction, outcome and mechanism classifications, and a zero-effect finding direction. Post-verification review (2026-10-04) removed findings[] and resultType, which the schema omits for a pure-theory paper." }

  licenceVerification:
    - { source: "Crossref REST API works/10.1093/rfs/hhaf005", checked: 2026-06-06, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days=0, start=2025-03-14; Oxford standard reuse rights, not CC" }

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the theoretical model with its key
equations, and the method: enough to know what it found and how, without reading
all 44 pages. To replicate or extend it, read the full source at
[https://doi.org/10.1093/rfs/hhaf005](https://doi.org/10.1093/rfs/hhaf005).

## TL;DR

Dicks and Fulghieri study optimal incentive contracts in a two-division firm where
headquarters (HQ) and division managers are uncertainty averse in the sense of
Gilboa and Schmeidler (1989): they hold a set of admissible priors and evaluate
random variables by their worst-case expected utility. The paper extends the
classical moral hazard framework of Holmstrom (1979) and the linearity results of
Holmstrom and Milgrom (1987) to settings where agents lack a single prior on
the probability distribution of cash flows. Uncertainty creates two novel costs.
First, an "incentive effect": conservative beliefs about own division productivity
suppress effort, requiring higher pay-performance sensitivity. Second, an
"uncertainty discount": HQ and division managers disagree on the value of
compensation contracts because their positions in the hierarchy give them
different exposures to uncertainty, making participation constraints more costly.
The key insight is that HQ can partly resolve both costs by designing contracts
with cross-divisional exposure. Linking pay to the other division's output hedges
division managers' uncertainty, improves beliefs, and lowers incentive costs.
This motive for cross-pay is present even when divisions are uncorrelated, in
contrast to the informativeness principle of Holmstrom (1982). When uncertainty
is sufficiently high for both HQ and division managers, pure equity is optimal
in the risk-neutral-manager case regardless of cash-flow correlation. With
uncertainty-neutral HQ, high uncertainty instead produces relative-performance
pay for positively correlated divisions.

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Cross-division pay is optimal even absent correlation**, violating the informativeness principle; uncertainty aversion motivates uncertainty hedging through equity or relative-performance contracts | Theorem 1, p. 2201; Corollary 1, p. 2203 | With uncertainty-neutral HQ and risk-neutral division managers, optimal cross-division exposure is $$\lvert\gamma_d\rvert = \xi_d \beta_d > 0$$ when division managers face uncertainty ($$\eta > 0$$); $$\beta_d = 1/(1 + 3(1 - \hat{q}^d_d/q_d)) < 1$$ and effort decrease in $$\eta$$ (eq. 20). With risk-averse managers, Corollary 1 gives nonzero cross-pay when uncertainty exceeds its risk- and correlation-dependent threshold. |
| R2 | **Pure equity replaces relative-performance pay under sufficiently high uncertainty for both HQ and division managers**, regardless of cash-flow correlation | Theorem 3, p. 2207 | With risk-neutral division managers, if HQ uncertainty is sufficiently high ($$\eta^{HQ} > \max_d \ln\hat{H}_d$$) and division-manager uncertainty satisfies $$\eta > \eta^{HQ} + 2\ln(3/2)$$, then $$\beta_d = \gamma_d = 1/[1 + 3(1 - \hat{q}^d_d/\hat{q}^{HQ}_d)] < 1$$. By contrast, Corollary 1(ii) with uncertainty-neutral HQ sets $$\operatorname{sign}(\gamma)=-\operatorname{sign}(\rho)$$. |
| R3 | **HQ uncertainty aversion makes relative-performance contracts more costly** because division managers take a short position in the other division while HQ remains long, widening belief disagreement | Theorem 3, p. 2207; Section 4.1, pp. 2206-2208 | Under the theorem's uncertainty conditions, $$\beta_d = \gamma_d = 1/[1+3(1-\hat{q}^d_d/\hat{q}^{HQ}_d)] < 1$$; increasing HQ uncertainty raises pay sensitivity while HQ uncertainty remains below division-manager uncertainty (Figure 5). |
| R4 | **Internal hedging (cross-division pay) dominates external benchmarks** for uncertainty hedging; with large HQ uncertainty, optimal contracts exclude external hedges entirely | Lemma 5, p. 2213; Theorem 5, p. 2213 | HQ weakly prefers contract $$(\beta, \lvert\psi\rvert, 0)$$ over $$(\beta, 0, \lvert\psi\rvert)$$ when choosing between internal (division B) and external (variable C) hedges; if $$\eta^{HQ} > \tilde{\eta}^{HQ}$$, optimal contracts set $$\psi = 0$$ (no external hedge) |
| R5 | **Synergies reinforce the optimality of equity-based pay**; for any uncertainty level there exists a synergy threshold above which pure equity is optimal | Theorem 7, p. 2215 | For any $$\eta \geq 0$$ there is a threshold $$\bar{\zeta}$$ such that for all $$\zeta > \bar{\zeta}$$, the optimal contract has $$\gamma = \beta$$; at $$\eta = 0$$, pure equity is optimal only when $$\zeta = 1$$ (perfect effort substitutes) |
| R6 | **Risk aversion changes the optimal uncertainty hedge**, but does not eliminate cross-division pay | Theorem 2, p. 2203; eq. 21 | $$\beta_d a_d q_d + r\sigma^2\beta_d^2 = |\gamma_d|a_{d'}q_{d'} + r\sigma^2\gamma_d^2$$ and $$\gamma_d \neq 0$$; for $$a_dq_d > a_{d'}q_{d'}$$, $$|\gamma_{d'}| > \xi_{d'}\beta_{d'}$$ and $$|\gamma_d| < \xi_d\beta_d$$ |
| R7 | **Cross-pay raises equilibrium effort by improving own-division beliefs** | Lemma 3, p. 2199 | $$a_d = \beta_d\theta_d\hat{q}^d_d$$; effort increases in $$\beta_d, |\gamma_d|, \theta_d$$ and decreases in $$\eta_d$$; a unique Nash equilibrium exists |
| R8 | **With risk-averse managers, the correlation and HQ uncertainty determine whether cross-pay is relative-performance or equity** | Theorem 4, pp. 2209-2210 | At low uncertainty and low HQ uncertainty, $$\gamma = -(\rho-\bar{\rho})\beta$$; with high uncertainty, $$\gamma=\beta$$ when $$\rho\leq0$$ or when HQ uncertainty exceeds the stated threshold; for positive correlation and lower HQ uncertainty, $$\gamma=-\hat{\xi}(\eta^{HQ})\beta$$ |
| R9 | **Rectangular beliefs remove the uncertainty-hedging response**, and sufficiently uncertain HQ chooses no cross-pay | Theorem 6, p. 2215 | For $$\rho>0$$ and $$\eta^{HQ}>\eta^{HQ}_1$$, $$\gamma_d=0$$; rectangular-belief worst-case assessments do not vary with contract exposure |
| R10 | **The rectangular-belief no-cross-pay branch has a closed-form own-pay sensitivity** | Theorem 6, p. 2215; eq. 30 | $$\beta_d=\frac{1}{1+\left(1-\frac{\hat{q}^d_d}{\hat{q}^{HQ}_d}\right)+\frac{r\sigma^2}{\theta\hat{q}^{HQ}_d\hat{q}^d_d}}$$ |
| R11 | **At low uncertainty, risk-hedging pay remains optimal**, while the cross-pay threshold depends on risk aversion and cash-flow correlation | Corollary 1(i), p. 2203 | $$\gamma=-\rho\beta$$ and $$\beta<\beta^*$$ for $$\eta\leq\bar{\eta}(r,\rho)$$; $$\bar{\eta}(0,\rho)=0$$, and the threshold increases in $$r$$ and decreases in $$|\rho|$$ |

**Overall (paper's conclusion).** Uncertainty aversion provides a unifying
explanation for three otherwise puzzling compensation practices: the prevalence of
equity-based pay for lower-level managers (even when risk-bearing arguments do not
support it), the rarity of relative-performance contracts especially in high-uncertainty
environments such as young and innovative firms, and the optimism gradient
whereby senior managers hold systematically more favorable beliefs about firm
prospects than rank-and-file employees.

## Theory / model

The paper's model is a one-period, two-division firm. There are two divisions
$$d \in \{A, B\}$$, each run by a division manager supervised by HQ.

**Cash flows and effort.** Each division's cash flow is specified on p. 2189:

$$
Y_d = \mu_d + \varepsilon_d, \quad \text{where} \quad \mu_d = a_d q_d 
$$

Division cash flows $$(Y_A, Y_B)$$ have a joint normal distribution $$N(\mu, \Sigma)$$
with homoscedastic variance $$\sigma^2$$ and correlation $$\rho$$. Effort $$a_d \in \mathbb{R}_+$$
affects the mean; the cost is $$c_d(a_d) = \tfrac{1}{2\theta_d} a_d^2$$, where $$\theta_d$$
is efficiency of effort. Division managers have CARA utility $$U(w) = -e^{-r w}$$
with coefficient $$r$$; HQ is risk neutral (in the base model).

**Linear incentive contracts.** HQ offers linear contracts (p. 2192). Division manager $$d$$'s
compensation is:

$$
w_d(Y) = s_d + \beta_d Y_d + \gamma_d Y_{d'} 
$$

where $$s_d$$ is a fixed base pay, $$\beta_d$$ is pay-performance sensitivity on own
division output, and $$\gamma_d$$ is cross-division ("cross-pay") exposure. Setting
$$\gamma_d > 0$$ gives an equity component; $$\gamma_d < 0$$ gives relative-performance pay.

**Uncertainty aversion (MEU, Gilboa and Schmeidler (1989)).** Both HQ and division
managers are uncertainty averse: they evaluate payoffs by minimizing expected utility
over a set of admissible priors $$\mathcal{P}$$:
The minimization is eq. 1, p. 2190.

Miao and Rivera (2016) study robust contracts in continuous time as an alternative
uncertainty formulation.

$$
\mathcal{U} = \min_{p \in \mathcal{P}} E_p[U(w)] \tag{1}
$$

The core beliefs set is defined using the relative entropy (Kullback-Leibler
divergence) of candidate distribution $$\hat{P}(x)$$ relative to reference $$P(x)$$
(Hansen and Sargent (2001); eq. 3, p. 2190):

$$
R\!\left(\hat{P}(x) \,\middle|\, P(x)\right) \equiv \int \hat{p}(x) \ln\!\left(\frac{\hat{p}(x)}{p(x)}\right) dx \tag{3}
$$

The admissible set is $$\mathcal{P}(P) \equiv \{\hat{P}: R(\hat{P}(x)|P(x)) \leq \eta^P\}$$,
where $$\eta^P$$ is the uncertainty parameter. A higher $$\eta^P$$ means greater uncertainty
aversion and a larger set of admissible beliefs.

**Parametric approximation.** For tractability (following Dicks and Fulghieri (2019,
2021)), the core beliefs set for agent $$i \in \{HQ, A, B\}$$ is approximated as in eq. 11, p. 2195:

$$
K^i(q) \equiv \left\{\hat{q}^i \,\middle|\, D(\chi^i_A) + D(\chi^i_B) \leq \eta^i\right\}, \quad \chi^i_d = \frac{\hat{q}^i_d - q_d}{q_d}, \quad D(\chi) = -\ln(1-\chi) \tag{11}
$$

where $$\hat{q}^i_d$$ is agent $$i$$'s belief about division $$d$$'s productivity and $$q_d$$
is the reference productivity. This set is strictly convex with smooth boundaries,
guaranteeing that beliefs respond to changes in compensation contracts.

**Division manager utility.** Given beliefs $$\hat{q}^d$$ and action $$a$$, division
manager $$d$$'s certainty-equivalent utility is given in eq. 5, p. 2192:

$$
u_d(\hat{q}^d, a) \equiv E\!\left[w_d|\hat{q}^d, a\right] - \frac{r}{2} Var(w_d) - c_d(a_d) \tag{5}
$$

where $$Var(w_d) = \sigma^2(\beta_d^2 + 2\rho\beta_d\gamma_d + \gamma_d^2)$$. The key feature
is that the expected wage $$E[w_d|\hat{q}^d, a]$$ depends on division managers'
beliefs about productivity of both divisions (through own-pay $$\beta_d$$ and
cross-pay $$\gamma_d$$), while $$Var(w_d)$$ does not.

The uncertainty-hedging axiom implies the following inequality for acts
$$y_1,y_2$$ and mixture weight $$\alpha$$ (eq. 2, p. 2190):

$$
\alpha\min_{p\in\mathcal{P}}E_p[U(y_1)] +(1-\alpha)\min_{p\in\mathcal{P}}E_p[U(y_2)]
\leq \min_{p\in\mathcal{P}}\{\alpha E_p[U(y_1)]+(1-\alpha)E_p[U(y_2)]\} \tag{2}
$$

The relative-entropy ball defining admissible priors is eq. 4, p. 2190:

$$
\mathcal{P}(P(x)) = \{\hat{P}:R(\hat{P}(x)|P(x))\leq\eta^P\} \tag{4}
$$

The contract's fixed component makes the participation constraint bind (eq. 9,
p. 2194):

$$
s_d=c_d(a_d)+\frac{r}{2}\operatorname{Var}(w_d)-E[w_d|\hat{q}^d,a] \tag{9}
$$

For symmetric divisions the paper assumes condition (S), eq. 12, p. 2195:

$$
\theta_A=\theta_B\equiv\theta,\quad q_A=q_B\equiv q,\quad \eta_A=\eta_B\equiv\eta \tag{12}
$$

In the no-uncertainty benchmark, risk-neutral HQ's optimal own-output
sensitivity and cross-pay are given by eq. 13, p. 2195:

$$
\beta_d^*=\frac{1}{1+\frac{r\sigma^2(1-\rho^2)}{\theta_d q_d^2}},\quad \gamma_d^*=-\rho\beta_d^*,\quad a_d^*=\beta_d^*\theta_dq_d \tag{13}
$$

## Method

The paper derives analytical solutions to a minimax contracting problem. HQ
maximizes expected profits subject to division managers' incentive constraints
(IC) and participation constraints (PC), while both HQ and managers minimize
over their worst-case beliefs. The problem and constraints are eqs. 6-8, p. 2193:

$$
\max_{\{w_d, a_d\}} \min_{\hat{q}^{HQ} \in K^{HQ}} \pi(\hat{q}^{HQ}) \equiv \sum_{d \in \{A,B\}} E\!\left[Y_d(a_d) - w_d|\hat{q}^{HQ}\right] \tag{6}
$$

subject to the division managers' IC constraints:

$$
\max_{a_d} \min_{\hat{q}^d \in K^d} u_d(\hat{q}^d, a) \equiv E\!\left[w_d|\hat{q}^d, a_d, a_{d'}\right] - \frac{r}{2}Var(w_d) - c_d(a_d) \tag{7}
$$

and PC constraints:

$$
\min_{\hat{q}^d \in K^d} u_d(\hat{q}^d, a_d, a_{d'}) \geq u_0 = 0 \tag{8}
$$

The solution strategy is three-step: (1) characterize how contracts determine
beliefs via Lemma 2; (2) derive equilibrium effort from beliefs via Lemma 3;
(3) characterize optimal contracts by substituting the binding PC into the
objective, yielding the reduced-form HQ payoff (eq. 10, p. 2194):

$$
\pi = \sum_{d \in \{A,B\}} \left\{E(Y_d(a_d)|\hat{q}^{HQ}_d) - \frac{r}{2}Var(w_d) - c_d(a_d) - \left(E[w_d|\hat{q}^d,a] - E[w_d|\hat{q}^{HQ}_d,a]\right)\right\} \tag{10}
$$

The fourth term is the "uncertainty discount" arising from belief disagreement;
it is novel and central to the paper's results.

**Key analytical result (Theorem 1, eq. 20, p. 2201).** With uncertainty-neutral HQ and
uncertainty-averse risk-neutral division managers, optimal contracts set
$$H_d = 1$$ (uncertainty-hedging ratio equal to one), where
$$H_d \equiv |\gamma_d| a_{d'} q_{d'} / (\beta_d a_d q_d)$$.
Optimal pay-performance sensitivity is:

$$
\beta_d = \frac{1}{1 + 3\!\left(1 - \hat{q}^d_d/q_d\right)} < 1, \quad |\gamma_d| = \xi_d \beta_d \tag{20}
$$

with $$\xi_d \equiv \frac{a_{d'} q_{d'}}{a_d q_d}$$. Both $$\beta_d$$ and effort $$a_d$$ are
decreasing in uncertainty $$\eta$$. Under symmetry, pure equity is optimal:
$$\beta = \gamma < 1$$.

**Theorem 2** (risk-averse division managers) shows that the optimal contract must
satisfy (eq. 21, p. 2203):

$$
\beta_d a_d q_d + r\sigma^2 \beta_d^2 = |\gamma_d| a_{d'} q_{d'} + r\sigma^2 \gamma_d^2 \tag{21}
$$

equating the total expected cost to HQ of a division manager's exposure to each
division, regardless of the correlation $$\rho$$. Cross-pay is always non-zero,
$$\gamma_d \neq 0$$, even when divisions are uncorrelated.

**Theorem 3** (uncertainty-averse HQ) yields pure equity at sufficiently high
uncertainty:

$$
\beta_d = \gamma_d = \frac{1}{1 + 3(1 - \hat{q}^d_d/\hat{q}^{HQ}_d)} < 1 \tag{25}
$$

Relative-performance pay creates a short position for HQ in the other division,
amplifying the beliefs disagreement between HQ (long position) and division
managers (short position), raising the uncertainty discount and making equity
strictly preferred.

The proofs use the envelope theorem applied to the minimax problem, with
closed-form first-order conditions derived under the parametric beliefs
approximation (eq. 11). The proofs of Theorems 1 and 2 appear in the appendix
(pp. 2218-2221); Theorems 3, 4, 5, and 7 proofs are in the supplemental materials.

## Equation coverage in the main text

The remaining numbered equations specify the uncertainty-neutral principal's
problem and the belief and effort subproblems. Equations 14-16, p. 2197,
specialize HQ's objective and the managers' incentive and participation
constraints:

$$
\max_{\{w_d,a_d\}}\pi=\sum_{d\in\{A,B\}}E[Y_d(a_d)-w_d(Y)|q_d] \tag{14}
$$

$$
\max_{a_d}\min_{\hat{q}^d\in K^d}u_d=E[w_d|\hat{q}^d,a_d,a_{d'}]-\frac{r}{2}\operatorname{Var}(w_d)-c_d(a_d) \tag{15}
$$

$$
\min_{\hat{q}^d\in K^d}u_d=E[w_d|\hat{q}^d,a_d,a_{d'}]-\frac{r}{2}\operatorname{Var}(w_d)-c_d(a_d)\geq0 \tag{16}
$$

For a given contract, managers' worst-case beliefs solve eq. 17, p. 2198,
subject to the relative-entropy constraint in eq. 18, p. 2198:

$$
\min_{\hat{q}^d}u_d(\hat{q}^d)=E[w_d|\hat{q}^d,a]-\frac{r}{2}\operatorname{Var}(w_d)-c_d(a_d) \tag{17}
$$

$$
\ln\!\left(\frac{1}{1-(\hat{q}^d_A-q_A)/q_A}\right)+\ln\!\left(\frac{1}{1-(\hat{q}^d_B-q_B)/q_B}\right)\leq\eta_d \tag{18}
$$

Effort is chosen after beliefs respond to the offered contracts (eq. 19, p. 2199):

$$
\max_{a_d}u_d(a,\hat{q}^d(a,w))=E[w_d|\hat{q}^d,a_d,a_{d'}]-\frac{r}{2}\operatorname{Var}(w_d)-c_d(a_d) \tag{19}
$$

When HQ is uncertainty averse, its belief minimization is given in eq. 22,
p. 2204, with the core set in eq. 23, pp. 2204-2205:

$$
\min_{\hat{q}^{HQ}\in K^{HQ}}\pi(\hat{q}^{HQ})=\sum_{d\in\{A,B\}}E[Y_d(a_d)-w_d(Y)|\hat{q}^{HQ}] \tag{22}
$$

$$
K^{HQ}=\left\{\hat{q}^{HQ}:D\!\left(\frac{\hat{q}^{HQ}_A-q_A}{q_A}\right)+D\!\left(\frac{\hat{q}^{HQ}_B-q_B}{q_B}\right)\leq\eta^{HQ}\right\},\quad D(x)=-\ln(1-x) \tag{23}
$$

HQ's relative exposure to the divisions is summarized by the hedging ratio in
eq. 24, p. 2205:

$$
H_d^{HQ}=\frac{(1-\beta_{d'}-\gamma_d)a_{d'}q_{d'}}{(1-\beta_d-\gamma_{d'})a_dq_d} \tag{24}
$$

For the external-hedge extension, the three-variable core set and HQ and manager
payoffs appear in eqs. 26-28, p. 2213:

$$
K^i=\left\{\hat{q}^i:\sum_{j\in\{A,B,C\}}\ln\!\left(\frac{1}{1-(\hat{q}^i_j-q_j)/q_j}\right)\leq\eta_i\right\},\quad i\in\{A,HQ\} \tag{26}
$$

$$
\min_{\hat{q}^{HQ}\in K^{HQ}}\tilde{\pi}=(1-\beta)a_A\hat{q}^{HQ}_A+(1-\gamma)\mu\hat{q}^{HQ}_B-\psi\mu\hat{q}^{HQ}_C-s \tag{27}
$$

$$
\min_{\hat{q}^A\in K^A}\tilde{u}=s+\beta a_A\hat{q}^A_A+\gamma\mu\hat{q}^A_B+\psi\mu\hat{q}^A_C-\frac{r\sigma^2}{2}(\beta^2+\gamma^2+\psi^2)-\frac{a_A^2}{2\theta_A} \tag{28}
$$

The rectangular-beliefs alternative in eq. 29, p. 2214, is a product of bounded
intervals. Its high-HQ-uncertainty solution is eq. 30, p. 2215:

$$
K^i(q^i)=\{\hat{q}^i:[q_A-\eta_i\leq\hat{q}^i_A\leq q_A+\eta_i]\times[q_B-\eta_i\leq\hat{q}^i_B\leq q_B+\eta_i]\} \tag{29}
$$

$$
\beta_d=\frac{1}{1+\left(1-\frac{\hat{q}^d_d}{\hat{q}^{HQ}_d}\right)+\frac{r\sigma^2}{\theta_d\hat{q}^{HQ}_d\hat{q}^d_d}} \tag{30}
$$

## Empirical specifications

The paper has no empirical sample or estimated regression. Its results are
analytical propositions and comparative statics from the contracting model;
Figures 1-7 illustrate parameterized model solutions rather than empirical
estimates. Section 6 states testable implications about firm uncertainty and
compensation choice but does not estimate them.

## Datasets used

This paper is purely theoretical. It introduces no dataset.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| No empirical data used | Theory paper with numerical illustrations only | N/A |

The empirical illustrations use baseline parameter values $$q_A = q_B = 10$$,
$$\theta_A = \theta_B = 2$$, $$\sigma = 10$$, $$r = 1$$ (stated in Section 2 footnotes,
p. 2195 and Figures 1-7).

## When to read the full paper

Use the [original](https://doi.org/10.1093/rfs/hhaf005) if you are:
designing incentive contracts under Knightian uncertainty or ambiguity aversion;
trying to explain equity-based compensation for division managers or rank-and-file
employees; studying why relative-performance pay is rare in practice despite
its theoretical benefits; or extending the model to multitasking, labor-market
equilibrium, or organization design with uncertainty. Theorem 1 (p. 2201) and
Corollary 1 (p. 2203) are the key analytical results; Figure 3 and Figure 6
(pp. 2204, 2210) illustrate optimal contracts under uncorrelated and correlated
cash flows respectively.

## Attribution and rights

Source: peer-reviewed, *The Review of Financial Studies* 38(7), 2025.
This distillation was initially extracted on 2026-06-06 and augmented and
machine-verified against the PDF on 2026-10-04; it is **not independently
reproduced**. The paper is published under
Oxford University Press standard reuse rights (paywalled). Extract-only.

> Dicks, David L., and Paolo Fulghieri. "Uncertainty, Contracting, and Beliefs
> in Organizations." *The Review of Financial Studies* 38, no. 7 (2025): 2182-2225.
> DOI: 10.1093/rfs/hhaf005.
