---
title: "Subtle Discrimination: Pikulina & Ferreira (2026)"
description: >-
  Distilled: a theoretical model of "subtle discrimination" (biased promotion
  decisions with plausible deniability) showing that small biases generate
  large gaps in skills and promotions; the direction of the skill gap reverses
  with career stakes. J. Finance 2026, CC BY 4.0. Eight core results with
  source locators, theory tested, and further applications.
sidebar:
  label: Pikulina-Ferreira 2026
  order: 1
tags: [paper-summary, discrimination, labor-economics, promotions, human-capital, career-stakes, diversity, contest-theory, open-access, cc-by, peer-reviewed, unreplicated]
paper:
  authors: Elena S. Pikulina, Daniel Ferreira
  authorList:
    - family: Pikulina
      given: Elena S.
      affiliation: University of British Columbia
    - family: Ferreira
      given: Daniel
      affiliation: London School of Economics and Political Science, CEPR, ECGI
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 329–369
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  citedByCount: 2
  topics: ['Names, Identity, and Discrimination Research', 'Gender Diversity and Inequality']
  dataAccess: public
  outcome:
    - promotion probability gap between favored and unfavored agents
    - skill investment level by each agent
    - firm profits under endogenous bias
  doi: 10.1111/jofi.13506
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-10-06; corroborated by artifact p.329 Creative Commons Attribution License statement)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; checked 2026-05-31; the paywalled wrapper does not override the CC BY VOR licence in the publisher DOI metadata)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  methods:
    role: theory
    family: theory
    buildsFrom: [promotion-contest, principal-agent]
  contributionType: [new-theory]
  mechanisms: [agency]
  scope:
    region: theoretical
    assetClass: labor markets (promotions)
    period: theoretical
  relatesTo:
    - { cite: 'Coate & Loury (1993)', relation: extends, note: 'generalizes the self-fulfilling stereotype model by adding strategic competition between agents; unlike Coate-Loury, the unfavored group may invest more than the favored group under low stakes' }
    - { cite: 'Lazear & Rosen (1990)', doi: '10.1086/298246', relation: contradicts, note: 'their model predicts small promotion gaps in high-stakes jobs; this paper predicts the opposite: promotion gaps are larger at higher stakes when discrimination is subtle' }
    - { cite: 'Prendergast (1993)', doi: '10.2307/2118343', relation: builds-on, note: 'uses the same setup of firm-specific human capital incentivized through promotions; adds biased tie-breaking' }
    - { cite: 'Drugov & Ryvkin (2017)', doi: '10.1016/j.geb.2016.02.003', relation: extends, note: 'extends the biased-contest literature by distinguishing subtle from overt bias and showing their effects differ qualitatively' }
  openQuestions:
    - 'Whether the overcompensation and discouragement effects are empirically distinguishable using observational data on promotion gaps across different career tracks; the paper derives the predictions but notes identifying subtle versus overt discrimination empirically is difficult (pp. 359-361).'
    - 'How the model extends to cases where the skill is general (not firm-specific) and agents can move across employers; Internet Appendix Sections II-III present partial extensions but the full treatment is left for future work (p. 339, footnote).'
    - 'Whether the quota analysis in Internet Appendix Section XI fully captures the welfare effects of affirmative action under subtle discrimination; the paper notes ambiguous Pareto effects remain (p. 355).'
  findings:
    - { ref: R1, outcome: skill investment level by each agent, metric: coefficient, value: "e*_b = [σ(0.5 − β) + 2βσ²(0.5 + β)] / (1 + 4β²σ²); corner solution e*_b = 1 if σ > σ̄(β)", direction: positive }
    - { ref: R2, outcome: skill investment level by each agent, metric: coefficient, value: "e*_r ≥ e*_b if and only if σ ≤ 1 (symmetric-cost case)", direction: mixed, vsBenchmark: "investment comparison between unfavored (Red) and favored (Blue) agents; sign flips at σ = 1" }
    - { ref: R3, outcome: promotion probability gap between favored and unfavored agents, metric: coefficient, value: "Δp first decreases then increases with σ; U-shaped in σ", direction: mixed, vsBenchmark: "vs Lazear-Rosen (1990) prediction of small promotion gaps in high-stakes jobs" }
    - { ref: R4, outcome: firm profits under endogenous bias, metric: coefficient, value: "β*(θ) = 0.5 for low θ; β*(θ) = 0 for high θ; threshold θ' ≈ 2.62", direction: mixed, vsBenchmark: "vs zero-bias (unbiased) firm benchmark" }
    - { ref: R5, outcome: firm profits under endogenous bias, metric: coefficient, value: "β(θ) = 0.5 if θ ∈ (0, θ'], β(θ) = 0 if θ ∈ [θ', θ̄]", direction: mixed, vsBenchmark: "optimal bias policy vs arbitrary fixed bias" }
    - { ref: R6, outcome: skill investment level by each agent, metric: coefficient, value: "e*_r ≥ e*_b if and only if σ ≤ 1/(1 − δ); overcompensation requires excess subtle bias ε ≡ β − δ/2 > 0", direction: mixed, vsBenchmark: "overcompensation threshold under overt bias δ vs pure subtle bias baseline" }
    - { ref: R7, outcome: skill investment level by each agent, metric: coefficient, value: "e*_r = σ(1 − δ)(1 − a(1 − β)); female analysts invest more in accuracy than male under subtle bias", direction: positive, vsBenchmark: "female (Red) analyst accuracy vs male (Blue) analyst accuracy" }
  resultType: overturns
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 329–369 plus appendix proofs). Results extracted from the CC BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; all 8 rows confirmed correct; Proposition 2 formula (p. 343), Corollary 1 (p. 344), Proposition 3 and Figure 2 (pp. 348–349), Proposition 7 and eq. (15) (p. 353), Figures 3–4 (pp. 352, 354), Corollary 3 (p. 347), eq. (16) §IV.A (p. 356), §IV.C (pp. 358–359); frontmatter authors/year/venue/DOI/resultsCount verified; no em-dashes or colorful adjectives found.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: Augment pass. Added methods, scope, relatesTo, openQuestions, proposedVocab frontmatter blocks and replaced old "Theory tested" body section with the three formal sections (Theory / model, Method, Empirical specifications) with equations transcribed from the source PDF read this session (eq. 1-16, Propositions 1-7, Corollaries 1-4, pp. 336-364). Core results table and verified provenance entries preserved verbatim. New formal sections are extracted, not yet re-verified by paper-verifier.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: Independent re-check of all 8 rows and all equations in Theory/model, Method, and Empirical specifications sections against source PDF; eq. (1) bias definition (p. 336), eq. (2) social planner (p. 341), eq. (3) agent utility (p. 342), eq. (4) reaction functions (p. 342), eqs. (5)-(6) Prop. 2 closed-form (p. 343), Corollary 1 sigma<=1 (p. 344), eq. (10) promotion gap (p. 348), Prop. 3 U-shape (p. 348), eq. (12) IC constraint (p. 350), eq. (13) profit maximization (p. 350), eq. (14) endogenous bias (p. 351), eq. (15) Prop. 7 corner solution (p. 353), eq. (16) analyst accuracy (p. 356), Corollary 3 sigma<=1/(1-delta) (p. 347), fund-flow lexicographic argument (pp. 358-359); all terms, signs, subscripts, and inequality directions confirmed correct; theta-prime approx 2.62 not stated in main text body but appropriately marked (numerical); frontmatter authors/year/venue/DOI/resultsCount all verified; no em-dashes or colorful adjectives found; all rows and equations pass.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-03
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-03
      role: verified
      note: >-
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF; identification
        correctly absent (theory paper); contributionType set to [new-theory]
        (purely theoretical paper; the three contributions on p. 331 are all
        model results, not an empirical fact); introducesData and
        data-scope fields correctly absent (no data used); information-asymmetry
        removed from mechanisms - the paper's named channels are discouragement and
        overcompensation effects, both driven by biased agency rather than an
        adverse-selection or signaling friction; agency retained as sole mechanism.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-04
      role: extracted
      note: >-
        Added the effectiveness axis (findings[] per Core-results row,
        resultType) built from the page's already-verified Core-results table and
        relatesTo edges; existing results and sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-04
      role: verified
      note: >-
        Effectiveness axis (findings[] values/direction, resultType) re-checked
        against the source PDF; R5 direction corrected from positive to mixed
        (Prop. 7 eq. 15 shows optimal bias flips between 0.5 and 0 across theta,
        not a uniformly positive effect); R1-R4, R6-R7 confirmed correct; R8
        qualitative row correctly has no finding entry; resultType overturns
        consistent with contradicts edge to Lazear and Rosen (1990).
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13506
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-10-06'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, model equations, and theory: enough to
know what it found without reading all 41 pages. To replicate or extend it,
read the full source at the [original](https://doi.org/10.1111/jofi.13506).
CC BY 4.0 permits redistribution; the PDF is not mirrored in this batch.

## TL;DR

The paper introduces and formalizes *subtle discrimination*: biased acts
that cannot be objectively ascertained as discriminatory because the
decision-maker can invoke a plausible nondiscriminatory defense. In a
model of promotion contests between two ex ante identical agents ("Blue"
favored, "Red" unfavored), even an arbitrarily small bias generates large
equilibrium gaps in skill investment and promotion outcomes. The direction
of the skill gap reverses with career stakes: unfavored agents
overcompensate (invest more) in low-stakes careers and underinvest in
high-stakes careers. The model delivers novel predictions for equity
analysts, lending, fund flows, banking, and entrepreneurial finance.

## Core results

Magnitudes and significance are as reported. All results are
model-derived (propositions and corollaries); this paper is purely
theoretical. Locators point into the source PDF.

| # | Result | Locator | Magnitude / Content |
|---|---|---|---|
| R1 | A unique equilibrium investment profile exists for any bias level | Proposition 2, p. 343 | Closed-form: e\*\_b = [σ(0.5 − β) + 2βσ²(0.5 + β)] / (1 + 4β²σ²); e\*\_r symmetric with β negated; corner solution e\*\_b = 1 if σ > σ̄(β) |
| R2 | At low stakes (σ ≤ 1), unfavored Red invests more than favored Blue; at high stakes (σ > 1), Blue invests more | Corollary 1, p. 344; Figure 1, p. 343 | e\*\_r ≥ e\*\_b if and only if σ ≤ 1 (symmetric-cost case); driven by the overcompensation vs discouragement trade-off |
| R3 | The promotion gap is U-shaped in the premium-cost ratio σ | Proposition 3, p. 348; Figure 2, p. 349 | Gap Δp first decreases then increases with σ; at high σ observable achievement differences (achievement gap) dominate over the direct favoritism gap, so promotion gaps are large with little visible bias |
| R4 | Subtle discrimination raises profits for low-productivity firms and lowers them for high-productivity firms | Proposition 7, p. 353; Figures 3–4, pp. 352, 354 | Optimal bias β\*(θ) = 0.5 for low-productivity-cost ratio θ, and 0 for high θ; threshold θ' ≈ 2.62 (numerical) |
| R5 | High-productivity firms optimally choose zero bias; low-productivity firms optimally choose maximum bias | Proposition 7, eq. (15), p. 353 | β(θ) = 0.5 if θ ∈ (0, θ'], 0 if θ ∈ [θ', θ̄]; firms become polarized between progressive (high-θ) and conservative (low-θ) |
| R6 | Subtle discrimination, not overt discrimination, generates the overcompensation effect | Corollary 3, p. 347 | e\*\_r ≥ e\*\_b if and only if σ ≤ 1/(1 − δ) under overt bias δ; excess subtle bias ε ≡ β − δ/2 must be strictly positive for Red to outinvest Blue |
| R7 | In the equity analyst application, subtle bias against female (Red) analysts causes them to overinvest in forecast accuracy | §IV.A, p. 356; eq. (16) | e\*\_r = σ(1 − δ)(1 − a(1 − β)); female analysts invest more in accuracy than male, rationalizing Kumar (2010) evidence without assuming superior innate ability |
| R8 | In the fund-flow application, subtle investor bias does not generate a performance gap at marginal funds, making outcome (Becker) tests unable to reject the null of no discrimination | §IV.C, pp. 358–359 | When investors use a lexicographic rule (performance first, then manager characteristics for ties), biased choice at the margin does not affect returns, so outcome tests have no power against subtle discrimination |

**Overall (paper's conclusion).** Subtle and overt discrimination have
markedly different empirical predictions. Small subtle biases can
generate large skill and promotion gaps; the gaps are amplified through
strategic interactions between competing agents. High-stakes careers
see discouragement of unfavored agents; low-stakes careers see
overcompensation. Observable achievement differences explain most of
the promotion gap in high-stakes settings, making the discrimination
hard to detect. Firm-level diversity is predicted to correlate with
firm productivity and human capital intensity.

## Theory / model

The paper formalizes a concept and solves a model; there is no empirical
identification. The formal object is a two-player promotion contest
embedded in a principal-agent setting.

**Decision-maker bias (Definition 1, p. 337).** Two candidates Blue (b)
and Red (r) have observable skills $$s_b$$ and $$s_r$$. The principal
privately observes a subjective signal $$x_i$$ for each agent; the
decision function $$P(s_b, s_r, \omega)$$ is the probability of choosing Blue.
Bias toward Blue is the excess probability of choosing Blue not justified
by the qualification gap:

$$
b(s_b, s_r, \omega) = P(s_b, s_r, \omega) - F\!\left(\frac{s_b - s_r}{\omega}\right) \geq 0 \tag{1}
$$

where $$F(\cdot)$$ is the CDF of $$\Delta_x = x_r - x_b$$, $$\omega > 0$$ weights
subjective signals. The bias is *subtle* (Definition 1, p. 337) if
$$F\!\left(\frac{s_b - s_r}{\omega}\right) > 0$$, i.e., there exist signals that could
justify choosing Blue without proof of bias. It is *overt* (Definition 2)
if $$F = 0$$, meaning a single act is conclusive evidence of discrimination.

**Promotion model (§III.A, pp. 338-340).** This setup builds on
Prendergast (1993), which incentivizes firm-specific human capital
through promotions; the present model adds biased tie-breaking. A firm
hires two ex ante identical agents for job 1. At Date 1 both simultaneously choose
investments $$e_i \in [0, 1]$$ at cost $$c(e_i)$$ (quadratic: $$c(e_i) = k e_i^2 / 2$$).
Skill $$s_i \in \{0, 1\}$$ is realized; $$\Pr(s_i = 1) = e_i$$. At Date 2 the
principal promotes one agent to job 2 (the top position), yielding a
productivity gain $$H > 0$$ if skilled. Wages are $$(w_1, w_2 = w_1 + W)$$;
the promotion premium $$W$$ is the main incentive instrument.
Agent $$i$$'s utility is:

$$
u_i = w_i - c(e_i)
$$

- $$w_i$$ is the wage received

The principal's bias toward Blue is captured by $$\beta \in (0, 0.5]$$,
interpreted as agents' belief about the principal's tie-breaking probability:
if $$s_b = s_r$$, $$\Delta_s = 0$$, principal chooses Blue with probability
$$0.5 + \beta$$. The principal always promotes the skilled agent when the
two differ in observable skill (no overt discrimination).

**Firm profit (pp. 339-340):**

$$
\Pi = l + H(e_b + e_r - e_b e_r) - 2w_1 - W
$$

- $$l$$ is the base payoff and $$H(e_b + e_r - e_b e_r)$$ is the expected value added by skilled promotion

**First-best benchmark (Proposition 1, p. 341).** The social planner
maximizes total surplus:

$$
\max_{(e_b,\, e_r) \in [0,1]^2} \; l + H(e_b + e_r - e_b e_r) - c(e_b) - c(e_r) \tag{2}
$$

The first-best investment levels are either (i) symmetric $$e_b^{FB} = e_r^{FB} = \tilde{e} < 1$$,
or (ii) $$e_i^{FB} > 0$$ and $$e_{-i}^{FB} = 0$$ for some $$i \in \{b, r\}$$ (corner solution).
With quadratic costs $$c(e_i) = k e_i^2 / 2$$ and $$H \leq k$$: symmetric
$$\tilde{e} = H / (H + k)$$. If $$H > k$$: corner solution.

**Identification of mechanisms.** The model isolates two opposing forces
on the unfavored agent's investment (p. 344):

- *Discouragement effect*: Red's probability of promotion is low, so the
  marginal benefit of investing is low, discouraging investment.
- *Overcompensation effect*: Red wants to separate from Blue to avoid ties
  (where she loses), so Red invests more to minimize tie probability.

Which force dominates depends on the premium-cost ratio $$\sigma = W / k$$.
This extends Coate and Loury (1993): the self-fulfilling stereotype model
is generalized by adding strategic competition between agents, and unlike
Coate and Loury the unfavored group may invest more than the favored group
under low stakes.

## Method

The paper uses `promotion-contest` analysis and `principal-agent` optimal
contracting; no econometric estimator is involved.

**Equilibrium characterization (§III.D.1, p. 342).** Under the limiting
case $$\omega \to 0$$ (subjective information negligible), agent $$i$$'s
expected utility is:

$$
U_i(e, w) = w_1 + W \left[ e_i(1 - e_{-i}) + \left(\tfrac{1}{2} + \beta_i\right)(1 - e_i - e_{-i} + 2 e_i e_{-i}) \right] - \frac{k e_i^2}{2} \tag{3}
$$

- $$\beta_b = -\beta_r = \beta$$

Maximizing over $$e_i$$ taking $$e_{-i}$$ as given, the reaction functions are (eq. 4, p. 342):

$$
e_b = \frac{W}{k}\!\left(\tfrac{1}{2} - \beta + 2\beta e_r\right) \qquad \text{and} \qquad e_r = \frac{W}{k}\!\left(\tfrac{1}{2} + \beta - 2\beta e_b\right) \tag{4}
$$

**Optimal compensation (§III.E, pp. 349-350).** The principal chooses
promotion premium $$\sigma$$ to maximize expected profit net of entry costs:

$$
\Pi(k, \beta, \theta) = \max_{\sigma \in [0,\, \bar{\sigma}(\beta)]} \; k\theta(e_b + e_r - e_b e_r) - k\sigma \tag{13}
$$

- subject to equilibrium conditions (5) and (6), where $$\theta = H / k$$ is the *productivity-cost ratio*

The IC constraint for each agent is:

$$
e_i = \operatorname*{arg\,max}_{e \in [0,1]} \; e W \!\left[\left(\tfrac{1}{2} - \beta_i\right) + 2\beta_i e_{-i}\right] - \frac{k e^2}{2}, \quad i \in \{b, r\} \tag{12}
$$

**Endogenous bias (§III.F, p. 351, eq. 14).** When the firm also chooses
its subtle bias $$\beta$$, the problem becomes:

$$
\Pi(\theta) = \max_{(\sigma,\, \beta) \in [0,\, \bar{\sigma}(\beta)] \times [0,\, 0.5]} \; \theta(e_b + e_r - e_b e_r) - \sigma \tag{14}
$$

subject to (5) and (6). The optimal policy is characterized in
Proposition 7 (eq. 15, p. 353):

$$
\beta(\theta) = 0.5 \quad \text{if } \theta \in (0, \theta'] \tag{15}
$$

$$
\beta(\theta) = 0 \quad \text{if } \theta \in [\theta', \bar{\theta}]
$$

with $$\sigma(\theta) < 1$$ (low stakes) for $$\theta \in (0, \theta']$$ and
$$\sigma(\theta) > 1$$ (high stakes) for $$\theta \in [\theta', \bar{\theta}]$$.

## Empirical specifications

This paper derives theoretical propositions; it has no regression
specifications or econometric estimates. Empirical content comes in two
forms: (a) comparative-statics predictions tied to observable proxies,
and (b) cross-application predictions showing how the framework matches
existing evidence.

**Promotion-gap specification (Proposition 3 and Figure 2, pp. 348-349).**
The equilibrium promotion gap between Blue and Red is:

$$
\Delta_p = p_b - p_r = (e_b - e_r) + \bigl[e_b e_r + (1 - e_b)(1 - e_r)\bigr] \cdot 2\beta \tag{10}
$$

- the first term is the *achievement gap* and the second is the *favoritism gap*

Prediction: $$\Delta_p$$ is U-shaped in $$\sigma$$; at high
$$\sigma$$, the achievement gap dominates, so promotion gaps are large but
little direct evidence of discrimination is observable. This contradicts
Lazear and Rosen (1990), whose model predicts small promotion gaps in
high-stakes jobs; here promotion gaps are larger at higher stakes when
discrimination is subtle.

**Analyst accuracy specification (§IV.A, eq. 16, p. 356).**
An analyst of type $$i$$ earns promotion via composite metric
$$y_i = y_{1i} + y_{2i}$$ (accuracy + optimism). With subtle bias $$\beta$$
and overt bias $$\delta$$, analyst investment levels are:

$$
e_r^* = \sigma(1 - \delta)(1 - a(1 - \beta)) \qquad \text{and} \qquad e_b^* = \sigma(1 + \delta)(1 - a(1 + \beta)) \tag{16}
$$

- $$a \in (0,1)$$ is the accuracy-optimism trade-off and $$\sigma = W/k$$

A subtle bias ($$\delta = 0$$, $$\beta > 0$$) increases Red accuracy relative
to Blue; an overt bias ($$\delta > 0$$) has the opposite effect.

**Overt vs. subtle specification (Corollary 3, p. 347).**
With overt bias $$\delta \geq 0$$ and subtle bias $$\beta \geq \delta/2$$, the
overcompensation effect dominates if and only if:

$$
\sigma \leq \frac{1}{1 - \delta}
$$

The threshold $$1/(1 - \delta) > 1$$ is strictly larger than 1, implying
overt bias attenuates overcompensation: overt discrimination moderates
the overcompensation effect of subtle discrimination. This extends
Drugov and Ryvkin (2017) in the biased-contest literature by
distinguishing subtle from overt bias and showing their effects differ
qualitatively.

## Datasets used

This paper is entirely theoretical; it presents no empirical analysis
and uses no data. Empirical predictions are linked to existing
evidence from the literature (e.g., Bircan, Friebel and Stahl (2023)
on banking; Kumar (2010) on analyst forecasts; Frame et al. (2025) on
mortgage lending) but the paper itself does not run any regressions or
construct any dataset. No `data:` tags apply.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None (theoretical paper) | N/A | N/A |

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.13506) if you are:
deriving the model's propositions or checking proofs (Appendix, pp.
361-365); working through the Internet Appendix robustness extensions;
applying the framework to a new context (the lending or fund-flow
application sections are self-contained); or auditing how the
discouragement vs overcompensation trade-off interacts with cost
heterogeneity (§III.D.3). For "what did this paper find," the table
above is sufficient and is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1). This distillation
was extracted by an LLM on 2026-05-31 and augmented on 2026-06-01; it is
**not human-verified or independently reproduced**.

> **Attribution (CC BY 4.0).** Pikulina, Elena S., and Daniel Ferreira.
> "Subtle Discrimination." *The Journal of Finance* 81, no. 1
> (February 2026): 329–369. DOI: 10.1111/jofi.13506. © 2025 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**. CC BY 4.0
> permits redistribution; the verbatim PDF is not hosted in this batch.
