---
title: "Repurchasing Overpriced Shares: Oded (2026)"
description: >-
  Distilled: Jacob Oded proposes an agency model in which firms repurchase
  shares even when overpriced because insiders' benefit from preventing free
  cash waste can outweigh the cost of overpaying. Journal of Banking and
  Finance vol. 182 (2026), paywalled. Fifteen core results cover equilibrium
  conditions, governance predictions, control rights, payout choice, and the
  model's debt comparison, with equations and source locators.
sidebar:
  label: Oded 2026
  order: 1
tags: [paper-summary, payout-policy, stock-repurchases, corporate-governance, agency-costs, peer-reviewed, unreplicated]
paper:
  authors: Jacob Oded
  authorList:
    - { family: Oded, given: Jacob, affiliation: "Coller School of Management, Tel Aviv University, Israel" }
  year: 2026
  venue: "Journal of Banking and Finance 182 (2026) 107568"
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2025.107568
  tier: field
  jel:
    codes: [G14, G30, G35]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ['Corporate Finance and Governance', 'Working Capital and Financial Performance', 'Financial Reporting and Valuation Research']
  outcome:
    - stock repurchase program announcement decision
    - repurchase execution when shares may be overpriced
    - program completion rate
  outcomeClass: [firm-financing]
  license: "Copyright 2025 Elsevier B.V. All rights reserved, including those for text and data mining, AI training, and similar technologies (Crossref: TDM and STM-ASF licenses only; no CC license found)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 15
  citedByCount: 0
  methods:
    role: theory
    family: theory
    buildsFrom: [principal-agent]
  contributionType: [new-theory]
  scope:
    region: theoretical
    assetClass: corporate equity
  mechanisms: [agency, moral-hazard, information-asymmetry, liquidity, taxes]
  relatesTo:
    - { cite: "Jensen (1986)", relation: builds-on, note: "agency costs of free cash as the foundational channel; insiders waste free cash absent disbursement" }
    - { cite: "Babenko et al. (2020)", doi: '10.1287/mnsc.2019.3359', relation: cites, note: "alternative model for overpriced repurchases via current-shareholder-wealth maximization; contrasted against the waste-prevention channel" }
    - { cite: "Oded (2005)", doi: '10.1093/rfs/hhh004', relation: builds-on, note: "prior model by same author on why firms announce repurchase programs; this paper extends it to the overvaluation case" }
    - { cite: "Guthrie (2020)", relation: cites, note: "empirical evidence that governance quality determines whether buybacks harm or benefit shareholders" }
  openQuestions:
    - "Whether the predicted negative relation between the GIM index, E-index, and Tobin's Q and repurchase program completion rates, and the positive relation between governance-quality shocks and completion, hold empirically (Section 4, p. 9)."
    - "Whether the model predictions extend when boards (rather than insider shareholders) control repurchase policy, and how board independence affects completion rates (Section 5.1, p. 9)."
    - "Whether the 1% excise tax on repurchases (effective January 2023 in the US) affects repurchase activity differently across governance regimes, and whether higher buyback taxes increase free-cash waste rather than investment (Section 4, p. 9)."
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (19 pp. plus appendices); five propositions extracted with PDF locators. Pure theory paper; no empirical data. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; one equation error fixed: eq. (5) in Theory/model and R3 key finding both had a spurious -δ appended outside the fraction in the β(1−σ/α(1−δ)) form (distiller mixed the two equivalent PDF forms); corrected to β(1−σ/(α(1−δ))). All other propositions, equations, thresholds, and numerical-example parameters confirmed against PDF." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-read the full 20-page PDF; appended ten Core results rows and matching findings, completed the numbered main-text equations and payout extensions, and transcribed the Appendix A mixed-strategy equilibrium and sensitivity thresholds. Not human-verified; not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, magnitudes, equations, classifications, and prose checked against the source PDF; corrected the R2 lemma locator, model parameter bounds, the δ = 1 boundary, the R3 finding direction, governance proxy wording, the excise-tax open question, and finding metric labels. Conclusion-level outsider-control predictions remain omitted from Core results. Post-verification review (2026-10-04) removed findings[] and resultType, which the schema omits for a pure-theory paper." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107568", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: two TDM licenses (elsevier.com/tdm/userlicense/1.0/ and elsevier.com/legal/tdmrep-license) and five STM-ASF licenses; no CC license. Artifact states Copyright 2025 Elsevier B.V. All rights reserved." }
  rightsSignalConflict: false
---

**What this is.** The model equations, equilibrium characterization, and core propositions of Oded (2026): enough to understand why an agency model generates overpriced repurchases, and what it predicts about governance and completion rates, without reading the full paper and appendices. To replicate or extend, read the original at [doi.org/10.1016/j.jbankfin.2025.107568](https://doi.org/10.1016/j.jbankfin.2025.107568).

## TL;DR

Firms are widely observed to repurchase shares even when those shares are overpriced, a puzzle for standard signaling models that predict repurchases only when shares are undervalued. This paper proposes an agency explanation rooted in the free cash flow framework of Jensen (1986). An insider-controlled firm holds uncertain value and generates free cash. If not disbursed, the free cash deteriorates (gets wasted), and insiders privately benefit from that waste. In a full repurchase equilibrium, insiders repurchase in both high-value and low-value states because the benefit from preventing free cash waste outweighs the cost of overpaying for shares. In a partial repurchase equilibrium they repurchase only when the stock is undervalued. The model predicts that program completion rates rise with governance quality (lower private benefits from waste) and insider ownership, and fall with value variance. Repurchases are a positive governance mechanism in this framework, not a sign of managerial abuse, as long as the private-benefit rate is low. The distinct model of Babenko et al. (2020) also generates overpriced repurchases, through a current-shareholder-wealth channel rather than waste prevention. Oded (2005) is the prior framework by the same author on repurchase announcements, which this paper extends to the overvaluation setting.

## Core results

Propositions are derived analytically; proofs are in Appendix B of the source.

| # | Result | Locator | Key finding |
|---|---|---|---|
| R1 | Proposition 1: full repurchase equilibrium always involves repurchase of overvalued shares | Prop. 1, p. 6 | In state L (value = α − σ), the post-repurchase per-share value at t2 equals (1 − σ/α)(α + c) < p_f = α + c, so the repurchase price exceeds true per-share value; shares are overvalued at the repurchase price |
| R2 | Proposition 3: partial repurchase equilibrium never involves repurchase of overvalued shares | Prop. 3, p. 7 | In a partial repurchase equilibrium the firm repurchases only in state H (high value = α + σ); by Lemma 1 p_p < p_f, so the partial-repurchase price is lower, and shares are always undervalued at p_p |
| R3 | Proposition 4: full repurchase equilibrium existence condition | Prop. 4, p. 8 | For δ < 1, full repurchase equilibrium exists if and only if condition (5) holds: γ < β(1 − σ/(α(1 − δ))); this range is identical to the region where repurchase of overvalued shares occurs; at δ = 1 full repurchase cannot hold |
| R4 | Proposition 5: three equilibrium types as a function of private-benefit rate γ | Prop. 5, pp. 8-9 | γ < γ₁: full repurchase (firm always announces and repurchases regardless of value); γ₂ < γ < γ₃: partial repurchase in pure strategies (repurchase only when undervalued); γ > γ₃: no announcement; γ₁ < γ₂ < γ₃ by Lemma 4 |
| R5 | Section 4 empirical predictions: governance and completion rates | §4, p. 9 | Good governance (low γ), higher insider ownership (β), more free cash waste (1 − δ), and lower value variance (σ) each increase the probability of a full repurchase equilibrium and raise predicted program completion rates |
| R6 | Section 4 prediction: governance quality | §4, pp. 9-10 | Lower private-benefit parameter γ (better governance) predicts more program announcements and higher completion rates; the paper gives the sign, not an estimated coefficient |
| R7 | Section 4 prediction: insider ownership | §4, pp. 9-10 | Higher insider ownership β predicts more announcements and higher completion rates; no estimated coefficient is reported |
| R8 | Section 4 prediction: free-cash waste | §4, pp. 9-10 | Higher waste rate 1 - δ predicts a higher completion rate conditional on announcement; no estimated coefficient is reported |
| R9 | Section 4 prediction: firm and industry risk | §4, pp. 9-10 | Higher value variance σ predicts more strategic repurchase and lower completion rates; no estimated coefficient is reported |
| R10 | Proposition 2: partial-equilibrium market price | Prop. 2 and Lemmas 1-2, p. 7 | p_p increases with δ and decreases with σ; define Ω = ((1 - δ)/(1 - q))[(α - δc)q - c]. At σ = Ω, p_p = p_n = α + δc; above Ω, p_p < p_n, and below Ω, p_p > p_n |
| R11 | Appendix A Proposition 9: mixed-strategy partial repurchase | Prop. 9, Appendix A, p. 13 | For γ₁ < γ < γ₂, insiders always repurchase in H and repurchase in L with probability 0 < ω < 1; the market-maker price is p_m = (α - σ)/[(1 - δ)βγ + δ] + c, with p_p < p_m < p_f |
| R12 | Proposition 6: policy under outsider control | Prop. 6, p. 9 | Outsiders announce whenever a full-repurchase equilibrium can hold; under a partial-repurchase equilibrium they announce iff γ₃ < 1, otherwise choose no payout |
| R13 | Proposition 7: insiders choose repurchases over dividends | Prop. 7, pp. 10-11 | For every T_D > 0, insiders announce if a full or partial repurchase equilibrium can hold; if neither can hold, they choose no payout |
| R14 | Proposition 8: outsiders choose among repurchases, dividends, and no payout | Prop. 8, pp. 11-12 | T_D3 = 1 - 1/2[δ + (1/(1 - β))(1 - β(α + σ)/(p_p - c))] and T_D4 = 1 - δ; 0 < T_D3 < T_D4 when γ₃ < 1, separating dividend, partial-repurchase, and no-payout choices |
| R15 | Debt as an alternative cash-disbursement policy | §5.2.3, p. 12 | Qualitative comparison: debt commits the firm to remove free cash but reduces flexibility and introduces covenant and bankruptcy costs; no numeric estimate is reported |

**Overall (paper's conclusion).** The model resolves the overpriced-repurchase puzzle without invoking managerial mistakes or irrationality. Repurchases prevent free cash waste; in firms with low private benefits from waste (good governance) this motive dominates the cost of overpaying for shares, generating repurchase regardless of mispricing. Repurchase programs are a rational and value-enhancing mechanism in such firms. The model also explains the observed underperformance of actual repurchase returns relative to benchmark strategies: when repurchases occur in overvalued states, realized long-run returns to repurchasers are lower than a pure undervaluation strategy would deliver.

## Theory / model

The model considers an all-equity firm that cannot raise external capital. There are three dates indexed by $$t_i$$, $$i \in \{0, 1, 2\}$$. The firm's only asset generates value $$X \in \{H, L\}$$ with equal probability at $$t_1$$, where $$H = \alpha + \sigma$$ and $$L = \alpha - \sigma$$, with $$\alpha > 1$$ and $$0 < \sigma < \alpha - 1$$, so $$1 < L < H$$ and $$E[X] = \alpha$$. Free cash $$c$$ is also generated at $$t_1$$, with $$0 < c < 1$$. All information becomes public at $$t_2$$; the firm is liquidated and paid out at true value.

**Share structure and agency.** Insider shareholders control the firm with ownership fraction $$0 < \beta < 1$$; outsiders hold $$1 - \beta$$. A subset $$q < 1 - \beta$$ of outsiders face a liquidity shock at $$t_1$$ and must sell their shares. Free cash retained at $$t_1$$ deteriorates between $$t_1$$ and $$t_2$$: retention rate $$\delta \in [0, 1]$$ means fraction $$1 - \delta$$ is wasted. Insiders earn private benefit $$\gamma \in [0, 1]$$ per dollar wasted (perks, empire building, and similar agency costs of free cash following Jensen (1986)). Parameter $$\gamma$$ therefore measures the quality of governance: low $$\gamma$$ (hard to waste) reflects good governance; high $$\gamma$$ (easy to waste with large private gain) reflects poor governance.

**Repurchase policy.** At $$t_0$$, insiders may announce an open-market repurchase program. The announcement does not commit them to repurchasing; execution is decided at $$t_1$$ after value $$X$$ is privately observed. A competitive market maker, observing neither $$X$$ nor the insider's $$t_1$$ decision, sets the $$t_1$$ price $$p$$ to earn zero expected profit from liquidity sellers.

**Insider repurchase condition.** Given market price $$p$$, insiders in state $$X \in \{H, L\}$$ repurchase if and only if their expected wealth with repurchase exceeds their expected wealth without. Rearranging (eq. 3, p. 5):

$$
\beta \delta + (1 - \delta)\gamma < \frac{\beta X}{p - c} \tag{3}
$$

The left side is the marginal benefit of keeping cash (insiders retain fraction $$\delta$$ of value and privately benefit at rate $$\gamma$$ from the waste fraction $$1 - \delta$$). The right side is the marginal share-value enhancement from repurchasing at price $$p$$. Repurchase dominates waste whenever the share-value gain exceeds the waste benefit.

**Full repurchase equilibrium.** Suppose insiders repurchase in both states H and L. The market maker earns zero profit from liquidity sellers in both states (eq. 1, p. 5):

$$
0 = \frac{1}{2}\!\left[\!\left(q - \frac{c}{p}\right)\!\left(\frac{H}{1 - \frac{c}{p}} - p\right) + \left(q - \frac{c}{p}\right)\!\left(\frac{L}{1 - \frac{c}{p}} - p\right)\right] \tag{1}
$$

which simplifies to (eq. 2, p. 5):

$$
p_f = \alpha + c \tag{2}
$$

Under $$p_f$$, the post-repurchase per-share value in state L at $$t_2$$ is $$(1 - \sigma/\alpha)(\alpha + c) < p_f$$, confirming that shares are overpriced at the repurchase price when value is low (Proposition 1, p. 6). The full repurchase equilibrium requires the repurchase condition (3) to hold in state L, the binding constraint. Substituting $$X = L = \alpha - \sigma$$ and $$p = p_f = \alpha + c$$ into (3) and rearranging (eqs. 4-5, p. 5):

$$
p_f < \frac{\beta(\alpha - \sigma)}{\beta\delta + (1 - \delta)\gamma} + c \quad\iff\quad \gamma < \beta\!\left(1 - \frac{\sigma}{\alpha(1 - \delta)}\right) \tag{5}
$$

For $$\delta < 1$$, condition (5) is more easily satisfied when $$\gamma$$ (private benefit from waste) is low, $$\beta$$ (insider ownership) is high, $$\sigma$$ (value variance) is low, or $$\delta$$ (cash retention) is low. At $$\delta = 1$$, the condition is undefined and full repurchase cannot hold (p. 5).

**No-repurchase equilibrium.** If insiders never repurchase, the market maker prices at (eqs. 6-7, p. 6):

$$
p_n = \alpha + \delta c \tag{7}
$$

No repurchase dominates for insiders in both states when the benefit from waste exceeds the gain from repurchase even in the high-value state (H is binding). Rearranging the no-repurchase condition for $$\gamma$$ (eqs. 8-10, p. 6):

$$
\gamma > \beta\!\left(1 + \frac{\sigma + c(1 - \delta)}{[\alpha - c(1 - \delta)](1 - \delta)}\right) \equiv \gamma_n \tag{10}
$$

**Partial repurchase equilibrium.** In a partial repurchase equilibrium insiders repurchase only in state H. The market maker anticipates this, facing adverse selection from insiders who repurchase strategically. The zero-profit condition becomes (eq. 12, p. 6):

$$
0 = \frac{1}{2}\!\left[\!\left(q - \frac{c}{p}\right)\!\left(\frac{H}{1 - \frac{c}{p}} - p\right) + q(L + \delta c - p)\right] \tag{12}
$$

This yields a closed-form quadratic solution (eq. 13, p. 6):

$$
p_p = \frac{\Psi + \sqrt{\Psi^2 - 4\zeta}}{2} \tag{13}
$$

where $$\Psi \equiv \alpha + c + \tfrac{c}{2}\!\left(\delta + \tfrac{1}{q}\right)$$ and $$\zeta \equiv \left[\alpha + \sigma + c(1 + \delta q) + q(\alpha - \sigma)\right]\tfrac{c}{2q}$$. By Lemma 1 (p. 7), $$p_p < p_f = \alpha + c$$, since adverse selection from strategic repurchase lowers the expected gain from liquidity sellers. By Proposition 3 (p. 7), $$p_p \leq H/(1 - c/p_p)$$, so shares are always undervalued at the partial repurchase price.

The partial repurchase equilibrium holds when (eqs. 16-17, p. 7):

$$
\frac{\beta(\alpha - \sigma)}{\beta\delta + (1-\delta)\gamma} + c < p_p < \frac{\beta(\alpha + \sigma)}{\beta\delta + (1-\delta)\gamma} + c \tag{16}
$$

Rearranging in terms of $$\gamma$$:

$$
\frac{\beta}{1-\delta}\!\left(\frac{\alpha - \sigma}{p_p - c} - \delta\right) < \gamma < \frac{\beta}{1-\delta}\!\left(\frac{\alpha + \sigma}{p_p - c} - \delta\right) \tag{17}
$$

**Equilibrium existence (Proposition 5, p. 8-9).** Define three thresholds:

$$
\gamma_1 \equiv \frac{\beta}{1-\delta}\!\left(\frac{\alpha - \sigma}{\alpha} - \delta\right), \quad \gamma_2 \equiv \frac{\beta}{1-\delta}\!\left(\frac{\alpha - \sigma}{p_p - c} - \delta\right), \quad \gamma_3 \equiv \frac{\beta}{1-\delta}\!\left(\frac{\alpha + \sigma}{p_p - c} - \delta\right) \tag{23-25}
$$

with $$\gamma_1 < \gamma_2 < \gamma_3$$ (Lemma 4). Then:

- $$\gamma < \gamma_1$$: full repurchase equilibrium; firm always announces and repurchases regardless of value realization.
- $$\gamma_2 < \gamma < \gamma_3$$: partial repurchase equilibrium in pure strategies; firm announces and repurchases only when undervalued.
- $$\gamma > \gamma_3$$: no announcement; firm never announces a program.
- $$\gamma_1 < \gamma < \gamma_2$$: partial repurchase equilibrium in mixed strategies (Appendix A, Proposition 9).

Corollary 1 (p. 9) summarizes: a firm announces a repurchase program if and only if a full or partial repurchase equilibrium can hold.

**Additional numbered equilibrium conditions.** The following display equations complete the main-text derivation omitted from the earlier distillation. The full-repurchase feasibility bound is equation (4), p. 5:

$$
p_f < \frac{\beta(\alpha - \sigma)}{\beta\delta + (1 - \delta)\gamma} + c \tag{4}
$$

For no repurchase, the zero-profit condition is equation (6), p. 6, and the insider no-repurchase inequality and its high-state bound are equations (8)-(9), p. 6:

$$
0 = \frac{1}{2}\left(q[H + \delta c - p] + q[L + \delta c - p]\right) \tag{6}
$$

$$
\frac{\beta X}{p - c} < \beta\delta + (1 - \delta)\gamma \tag{8}
$$

$$
\frac{\beta(\alpha + \sigma)}{\beta\delta + (1 - \delta)\gamma} + c < p_n \tag{9}
$$

The interval in which neither full nor no repurchase can hold under announcement is equation (11), p. 6:

$$
\beta\left(1 - \frac{\sigma}{\alpha(1 - \delta)}\right) < \gamma < \beta\left(1 + \frac{\sigma + c(1 - \delta)}{[\alpha - c(1 - \delta)](1 - \delta)}\right) \tag{11}
$$

The bounds on the price required for repurchase in H but not L are equations (14) and (15), pp. 6-7:

$$
\frac{\beta(\alpha - \sigma)}{\beta\delta + (1 - \delta)\gamma} + c < p \tag{14}
$$

$$
p < \frac{\beta(\alpha + \sigma)}{\beta\delta + (1 - \delta)\gamma} + c \tag{15}
$$

Lemma 2's price crossover is equation (18), p. 7:

$$
\Omega \equiv \frac{1 - \delta}{1 - q}\left[(\alpha - \delta c)q - c\right] \tag{18}
$$

The partial-repurchase expected wealth, equation (21), p. 7, is the unsimplified expression underlying equation (22):

$$
W_p = \frac{1}{2}\left[\beta(L + \delta c) + (1 - \delta)c\gamma + \frac{\beta H}{1 - c/p_p}\right] \tag{21}
$$

**Payout extensions.** For outsider control, the condition γ₃ < 1 is written in equation (26), p. 10:

$$
\frac{\alpha + \sigma}{p_p - c} < \frac{1}{\beta}\left[1 - (1 + \beta)\delta\right] \tag{26}
$$

Expected insider wealth from a dividend, equation (27), and the indifference tax thresholds, equations (28)-(29), are on p. 10:

$$
W_D^{\text{insider}} = \beta[\alpha + (1 - T_D)c] \tag{27}
$$

$$
T_{D1}(\gamma) \equiv \frac{1}{2}\left[(1 - \delta)\left(1 - \frac{\gamma}{\beta}\right) - \left(\frac{\alpha + \sigma}{p_p - c} - 1\right)\right] \tag{28}
$$

$$
T_{D2}(\gamma) \equiv (1 - \delta)\left(1 - \frac{\gamma}{\beta}\right) \tag{29}
$$

For outsider control, expected dividend wealth and the two indifference tax thresholds are equations (30)-(32), pp. 11-12:

$$
W_D^{\text{outsider}} = (1 - \beta)[\alpha + (1 - T_D)c] \tag{30}
$$

$$
T_{D3} \equiv 1 - \frac{1}{2}\left(\delta + \frac{1}{1 - \beta}\left[1 - \frac{\beta(\alpha + \sigma)}{p_p - c}\right]\right) \tag{31}
$$

$$
T_{D4} \equiv 1 - \delta \tag{32}
$$

**Mixed-strategy equilibrium (Appendix A).** In the gap γ₁ < γ < γ₂, Proposition 9 gives the mixed-equilibrium price (equation (34), Appendix A, p. 13):

$$
p_m = \frac{\alpha - \sigma}{(1 - \delta)\beta\gamma + \delta} + c \tag{34}
$$

For the parameter example in Appendix A, p. 13, γ₁ = 0.1571, γ₂ = 0.1687, γ = 0.2, γ₃ = 0.4583, p_f = 3.6, p_n = 3.57, p_p = 3.5533, and mixed-equilibrium insider wealth is 1.081 versus 1.077 without announcement. The appendix's sensitivity figures report thresholds rather than estimated effects: Fig. 5, p. 15, gives a partial-repurchase range 0.13 < β < 0.35 and full repurchase for β > 0.38; Fig. 6, p. 15, gives full repurchase for δ ≤ 0.57 and partial repurchase for δ > 0.6; Fig. 7, p. 16, gives full repurchase for σ < 0.35 and partial repurchase for σ > 0.38. The intervals between these ranges are the mixed-strategy equilibrium region.

## Method

The model is solved by backward induction using subgame perfection as the solution concept (Definition 1, p. 5). The equilibrium consists of (1) a repurchase policy (announce or not at $$t_0$$), (2) a market maker price $$p$$ given the policy, and (3) an execution strategy by insiders at $$t_1$$ given $$p$$ and realized value. The three steps are:

**Step 1: market maker pricing.** For each candidate insider strategy, the market maker sets $$p$$ to earn zero expected profit from liquidity sellers. Three candidate prices arise: $$p_f = \alpha + c$$ (full repurchase, eq. 2), $$p_n = \alpha + \delta c$$ (no repurchase, eq. 7), and $$p_p$$ from the quadratic eq. (13) (partial repurchase).

**Step 2: insider execution condition.** Given $$p$$, insiders in each state compare wealth with and without repurchase via condition (3). Full repurchase requires (3) to hold in state L (the binding constraint); partial repurchase requires (3) to hold in H but fail in L; no repurchase requires (3) to fail in both.

**Step 3: announcement decision.** Insiders compare expected wealth under each equilibrium before the value realization. Expected insider wealth under each type (eqs. 19-22, pp. 7-8):

$$
W_f = \beta(\alpha + c), \tag{19}
$$

$$
W_n = \beta(\alpha + \delta c) + (1 - \delta)c\gamma, \tag{20}
$$

$$
W_p = \beta\alpha + \frac{c}{2}\!\left(\beta\delta + (1-\delta)\gamma + \beta\frac{\alpha + \sigma}{p_p - c}\right). \tag{22}
$$

Lemma 3 shows $$W_f > W_n$$ whenever condition (5) holds. Lemma 5 shows $$W_p > W_n$$ whenever the partial repurchase equilibrium can hold. These comparisons determine which equilibrium prevails for each range of $$\gamma$$.

**Extensions.** Section 5 adds three extensions:

(a) *Outsiders in control* (Proposition 6): outsiders have no benefit from waste, so they prefer a full repurchase equilibrium whenever insiders do; for partial repurchase they announce only when $$\gamma_3 < 1$$ (condition 26, p. 10), which holds less often. Firms with outsider control have higher completion rates but fewer strategic repurchases.

(b) *Dividends* (Propositions 7-8, pp. 9-11): with dividend tax rate $$T_D > 0$$, insiders prefer repurchases over dividends whenever a full repurchase equilibrium holds. A partial repurchase equilibrium always dominates dividends for insiders (since $$T_{D1}(\gamma) < 0 < T_D$$), while outsiders prefer dividends below a threshold tax rate.

(c) *Debt* (Section 5.2.3, p. 12): debt removes free cash mechanically and prevents waste, an advantage over repurchases, but introduces bankruptcy costs and eliminates flexibility. Repurchases dominate debt as a waste-prevention mechanism in the model.

## Empirical specifications

This is a pure theory paper, so there is no empirical estimating specification, fixed-effect structure, standard-error treatment, or sample to report. The results above follow from backward-induction equilibrium conditions and comparative statics. The data availability statement in the source reads: "No data was used for the research described in this article" (p. 19).

Section 4 (pp. 9-10) derives testable comparative statics from Proposition 5. The main predictions, in terms of model parameters:

- **Governance quality** (lower $$\gamma$$): makes full repurchase more likely, predicting more program announcements and higher completion rates. Section 4 predicts that the GIM index, E-index, and Tobin's Q are negatively related to completion rates, while a positive shock to governance quality raises completion. Guthrie (2020) provides supporting evidence that governance quality governs whether buybacks harm or benefit shareholders.

- **Insider ownership** (higher $$\beta$$): increases all three thresholds $$\gamma_1$$, $$\gamma_2$$, $$\gamma_3$$ proportionally, expanding the full repurchase region and raising predicted completion rates.

- **Free cash waste** (higher $$1 - \delta$$): increases the benefit from repurchasing (more waste to prevent), raising the likelihood of the full repurchase equilibrium and predicted completion rates.

- **Value variance** (higher $$\sigma$$): lowers $$\gamma_1$$ and raises $$\gamma_3$$ (via $$p_p$$), making the full repurchase equilibrium harder to sustain; firms in riskier industries have lower predicted completion rates and more strategic (partial) repurchases.

The model also explains the post-announcement return underperformance documented by Bonaime et al. (2016): when full repurchase equilibria prevail, overpriced repurchases are executed, so realized long-run returns are lower than a pure undervaluation strategy, but this does not imply value destruction.

Appendix A provides a numerical example confirming all three equilibrium types at parameters $$\delta = 0.7$$, $$\gamma = 0.2$$, $$\beta = 0.3$$, $$\alpha = 3.5$$, $$\sigma = 0.5$$, $$c = 0.1$$, $$q = 0.2$$ (pp. 13-16). Figures 4-7 (pp. 14-16) trace equilibria as each of $$\gamma$$, $$\beta$$, $$\delta$$, $$\sigma$$ is varied holding others fixed.

## Datasets used

This is a pure theory paper. No empirical data are used.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | All results are analytical; no estimation or calibration to data | N/A |

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2025.107568) if you are:
building an empirical test of the governance-repurchase completion-rate predictions (Section 4, pp. 9-10 give the exact comparative statics);
extending the model to board control, dividends, or debt (Section 5 covers all three, pp. 9-12);
working through proofs of Propositions 1-9 and Lemmas 1-6 (Appendix B, pp. 17-19);
or comparing the waste-prevention mechanism mechanically against the Babenko et al. (2020) current-shareholder-wealth channel.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* vol. 182 (2026), article 107568. JEL codes G14, G30, G35 are printed on the article. This distillation was updated on 2026-10-04 and is **not human-verified or independently reproduced**. The paper is paywalled; only textual extracts are reproduced here under scholarly commentary norms (extract-only).

> Oded, Jacob. "Why do firms repurchase their shares when they are overpriced?" *Journal of Banking and Finance* 182 (2026): 107568. DOI: 10.1016/j.jbankfin.2025.107568. Copyright 2025 Elsevier B.V. All rights reserved.
