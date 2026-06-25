---
title: "Behavioral Foundations of Default Effects: Brot-Goldberg, Layton, Vabson & Wang (2023)"
description: >-
  Distilled: Default rules in Medicare Part D have large, persistent effects on
  enrollment and drug utilization; beneficiary passivity is insensitive to the
  value of the default even when following it causes drug consumption losses up
  to 30 percent. Evidence favors "mental gap" over "frictional" models of
  default-following, implying that optimal policy should match beneficiaries to
  their best plans rather than incentivize active choice. AER 2023, paywalled.
  Seven core results with source locators, datasets used, the theoretical
  framework, and the empirical specifications.
sidebar:
  label: Brot-Goldberg et al. 2023
  order: 1
tags: [paper-summary, health-insurance, behavioral-economics, default-effects,
       medicare, difference-in-differences, panel-regression, peer-reviewed,
       unreplicated, data:cms-medicare]
paper:
  authors: Zarek Brot-Goldberg, Timothy Layton, Boris Vabson, Adelina Yanyue Wang
  authorList:
    - { family: Brot-Goldberg, given: Zarek, affiliation: University of Chicago }
    - { family: Layton, given: Timothy, orcid: "0000-0001-9626-4892", affiliation: Harvard University }
    - { family: Vabson, given: Boris, affiliation: Harvard University }
    - { family: Wang, given: Adelina Yanyue, affiliation: McKinsey & Company }
  year: 2023
  venue: "American Economic Review 113(10), October 2023, 2718-2758"
  venueShort: AER 2023
  doi: 10.1257/aer.20210013
  jel:
    codes: [D91, I13, I18, I38, L65]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics:
    - Healthcare Policy and Management
    - "Financial Literacy, Pension, Retirement Analysis"
    - Global Health Care Issues
  dataAccess: proprietary-confidential
  outcome:
    - Medicare Part D plan enrollment and switching
    - prescription drug utilization and spending
    - active choice propensity among health insurance enrollees
  outcomeClass: [household-finance]
  license: "paywalled (no license block found in Crossref metadata; American Economic Review standard paywall)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 24
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, regression-discontinuity-design, panel-regression]
    identification: natural-experiment
  contributionType: [new-theory, new-fact]
  mechanisms: [behavioral-bias, participation-frictions]
  scope:
    region: US
    assetClass: Medicare Part D prescription drug insurance (LIS segment)
    period: 2007..2015
    frequency: annual
    dataType: [administrative]
    granularity: [individual]
    n: >-
      4,628,704 beneficiary-year observations (broad LIS sample);
      460,729 (RD analysis sample); 5,574,684 person-by-experiment-quarter
      observations (stacked DiD sample)
  findings:
    - ref: R1
      outcome: Medicare Part D plan enrollment and switching
      metric: probability
      value: "16% opt out before initial auto-enrollment; only 45% ever make an active choice within 5 years"
      direction: none
      vsBenchmark: "84% passively follow randomly assigned default at initial enrollment (Figure 1, p. 2727)"
    - ref: R2
      outcome: Medicare Part D plan enrollment and switching
      metric: pp-effect
      value: "beta = 0.960 (SE 0.001): plan switching rises from <1% to ~97% when default changes from remaining to reassignment"
      direction: positive
      vsBenchmark: "only 2.4 pp from active choice; 93.6 pp from passive default reassignment (Table 2, p. 2734)"
    - ref: R3
      outcome: prescription drug utilization and spending
      metric: coefficient
      value: "-0.064 (SE 0.004): 6.4% reduction in log drug spending after reassignment default change"
      direction: negative
      vsBenchmark: "~$213 annual loss off a $3,329 control-group base; persists at least 24 months (Table 3 Panel A, p. 2738)"
    - ref: R4
      outcome: prescription drug utilization and spending
      metric: coefficient
      value: "worst-quintile interaction: -0.083 (SE 0.007); total effect for worst-fitting plan = -12.6% vs -4.3% for other plans"
      direction: negative
      vsBenchmark: >-
        3x larger consumption loss for worst-fitting defaults; top 10% fit-variance
        subsample faces losses up to -29.8% (Table 3 Panel B, p. 2738; Table 6, p. 2747)
    - ref: R5
      outcome: active choice propensity among health insurance enrollees
      metric: pp-effect
      value: "1.5 pp (SE 0.002): differential active choice for worst-fitting vs other plan assignment"
      direction: positive
      vsBenchmark: >-
        barely changes despite consumption losses 3x larger for worst-fitting defaults;
        slope of active choice vs consumption loss is nearly flat across the full range
        (Table 5 Panel B, p. 2747; Figure 7, p. 2749)
    - ref: R6
      outcome: active choice propensity among health insurance enrollees
      metric: probability
      value: "26.5% of beneficiaries facing plan exit are 'sometimes choosers'"
      direction: positive
      vsBenchmark: >-
        vs ~4.3% predicted by a constant-friction frictional model; prior passive
        auto-assignees make an active choice 7.7% of the time, prior active choosers
        only 25.6% (p. 2752)
    - ref: R7
      outcome: active choice propensity among health insurance enrollees
      metric: probability
      value: "66.6% [64.6%, 68.6%] of variance in latent attention from within-beneficiary transitory shocks; 33.4% from permanent heterogeneity"
      direction: mixed
      vsBenchmark: "observable characteristics (age, gender, race, health) explain only 3.2% of attention variance (Table 7, p. 2754)"
  resultType: overturns
  relatesTo:
    - { cite: "Handel and Schwartzstein (2018)", doi: '10.1257/jep.32.1.155', relation: builds-on, note: "the frictional vs mental gap framework and the key testable parameter (attention elasticity da/dv^d) draw directly from their taxonomy of default-following models" }
    - { cite: "Abaluck and Gruber (2011)", relation: cites, note: "prior work documenting choice inconsistencies among Medicare Part D beneficiaries" }
    - { cite: "Handel (2013)", doi: '10.1257/aer.103.7.2643', relation: contradicts, note: "their large estimated switching costs presuppose a frictional model; this paper's evidence that da/dv^d is approximately zero largely rejects that class of models" }
    - { cite: "Bernheim, Fradkin, and Popov (2015)", doi: '10.1257/aer.20130907', relation: tests, note: "their welfare analysis of optimal defaults assumes frictional behavior (da/dv^d < 0); finding da/dv^d = 0 shifts the optimal policy prescription from shocking agents toward smart matching defaults" }
  openQuestions:
    - >-
      Whether the insensitivity of active choice to material incentives
      generalizes beyond the LIS population (elderly, low-income, sick) to
      populations with lower cognitive costs of plan search (p. 2754).
    - >-
      Whether active choice would be triggered by payoffs outside the
      plausible market-incentive range observed here, such as mandates or
      large fines (p. 2754).
    - >-
      The extent to which smart defaults matching beneficiaries to their
      best-fitting plans can offset welfare losses from passivity; noted
      as a key direction for future policy design work (Conclusion, p. 2755).
  replicationCode:
    url: "https://doi.org/10.3886/E184423V1"
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-25
      role: extracted
      note: >-
        Full text read (pp. 2718-2758); seven results extracted from the
        paywalled PDF. Not human-verified. Not reproduced.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; four
        fixes applied: R4 locator corrected from p. 2746 to p. 2738 (Table 3 is
        at p. 2738, not the discussion page); JEL codes I38 and L65 added
        (omitted from original); R5 direction corrected from none to positive
        (0.015 SE 0.002 is statistically significant); resultType corrected from
        new-finding to overturns (contradicts edge to Handel 2013 controls).
        All equations (welfare eq. 2, DiD eq. 1, RD spec, eq. 3, latent
        attention model) verified term-by-term against the PDF; no transcription
        errors found.
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20210013
      checked: 2026-06-25
      by: paper-distiller (claude-sonnet-4-6)
      found: "no license[] block in response; container-title 'American Economic Review'; paper is paywalled"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the theoretical framework distinguishing frictional from mental gap models of default-following, and the three natural-experiment designs used to test them: enough to know what was found and how, without reading all 41 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20210013).

## TL;DR

Default rules in the Low-Income Subsidy (LIS) segment of Medicare Part D determine what plan a beneficiary is enrolled in, and most beneficiaries never change their default assignment. Using random assignment of new enrollees to benchmark plans and two regression discontinuity and difference-in-differences designs that exploit premium-subsidy threshold crossings, the authors show that: (i) default changes shift virtually all beneficiaries through passive reassignment, not active choice; (ii) these reassignments reduce annual drug spending by 6.4 percent on average, with losses up to 30 percent for those assigned to poorly fitting plans; and (iii) beneficiaries whose randomly assigned defaults are worst-fitting are only marginally more likely to make an active choice, even as the consumption losses grow dramatically. A variance decomposition reveals that two-thirds of variation in latent attention comes from random transitory shocks within a beneficiary over time, not from permanent friction heterogeneity. This evidence favors "mental gap" models (Handel and Schwartzstein (2018)), where attention is driven by factors unrelated to the stakes, over the "frictional" class of models used in most prior work (Handel (2013); Abaluck and Gruber (2011)). The welfare implication: optimal default policy should paternalistically match beneficiaries to their best plans, not try to incentivize active choice.

## Core results

Magnitudes and significance are as reported. Locators refer to pages in the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Only 16% of new LIS beneficiaries opt out before initial auto-enrollment**; 84% passively follow their randomly assigned default. Even after 5 years, only 45% have ever made an active choice | Figure 1, p. 2727 | Active choice rate stays flat below 50% across all quintiles of default-plan fit, including for beneficiaries assigned to plans covering few of their prior drugs |
| R2 | **A change in default from remaining to reassignment raises plan switching by 96 percentage points**, driven almost entirely by passive reassignment (93.6 pp), not active choice (2.4 pp) | Table 2, p. 2734 | RD estimate beta = 0.960 (SE 0.001); average switching rate for controls at cutoff = 0.006 |
| R3 | **Reassignment default reduces annual drug spending by 6.4 percent** (approximately $213 off a $3,329 control base), a non-trivial consumption loss | Table 3 Panel A, p. 2738 | DiD coefficient: -0.064 (SE 0.004) on log drug spending; effect persists at least 24 months; robust to drug-level and class-level price normalizations |
| R4 | **Worst-fitting default plans reduce drug spending by 12.6 percent**, nearly 3x the 4.3 percent loss for better-fitting defaults; high-fit-variance subsamples face losses up to nearly 30 percent | Table 3 Panel B, p. 2738; Table 6, p. 2747 | Worst-quintile interaction: -0.083 (SE 0.007); top 50% / 25% / 10% variance subsamples face total losses of -24.9% / -27.6% / -29.8% |
| R5 | **Active choice propensity barely responds to the value of the default**: beneficiaries assigned to worst-fitting plans are only about 1.5 pp more likely to make an active choice than those assigned to better plans | Table 5 Panel B, p. 2747; Figure 7, p. 2749 | Worst-quintile differential: 0.015 (SE 0.002); slope of active choice vs drug consumption loss is nearly flat across the full range; ∂a/∂v^d ≈ 0 |
| R6 | **26.5 percent of beneficiaries are "sometimes choosers"** whose plan exits, far exceeding the ~4.3 percent predicted by a constant-friction frictional model | p. 2752 | Prior passive auto-assignees make an active choice 7.7% of the time following plan exit; prior active choosers make an active choice only 25.6% of the time - far below the ~100% predicted by a constant-friction model |
| R7 | **Two-thirds of variation in latent attention is driven by within-beneficiary transitory shocks**, not permanent friction differences: transitory share = 66.6%, permanent heterogeneity = 33.4% | Table 7, p. 2754 | Observable characteristics (age, gender, race, Elixhauser index) explain only 3.2% of total attention variance; unobservable permanent heterogeneity = 30.6%; transitory shocks = 66.2% |

**Overall (paper's conclusion).** Beneficiaries are overwhelmingly passive in their Medicare Part D plan choices, even when that passivity generates large and immediate drug consumption losses. Because active choice is insensitive to the value of the default, the evidence fits mental gap rather than frictional models of default-following. This means that policymakers cannot incentivize their way out of passivity: optimal default design should match beneficiaries to their best outcomes, not shock them into making active choices.

## Theory / model

Section V (pp. 2740-2743) formalizes two classes of default-following models and derives the welfare implications that distinguish them, following the taxonomy of Handel and Schwartzstein (2018).

**Active choice decision.** Beneficiary $$i$$ makes an active choice if and only if $$A(v^*, v^d, c, \ldots) \geq 0$$, where $$v^*$$ is the payoff from the best active choice, $$v^d$$ is the payoff of the default option, and $$c$$ represents the psychic, search, or attention cost of making an active choice (p. 2741). Active choosers receive $$v^* - c$$; passive followers receive $$v^d$$.

**Welfare.** Expected welfare is (p. 2742):

$$
W = \Pr\!\bigl(A \geq 0\bigr) \cdot E\bigl[v^* - c \mid A \geq 0\bigr] + \Pr\!\bigl(A < 0\bigr) \cdot E\bigl[v^d \mid A < 0\bigr]
$$

Differentiating with respect to the default value $$v^d$$ yields the welfare derivative (equation 2, p. 2742):

$$
\frac{\partial W}{\partial v^d} = \underbrace{1 - a(v^*, v^d, \ldots)}_{\substack{\text{benefit to}\\\text{inframarginal}\\\text{passive agents}}} + \underbrace{\frac{\partial a}{\partial v^d}}_{\substack{\text{attention}\\\text{elasticity}}} \times \underbrace{E\!\bigl[v^* - c - v^d \mid A = 0\bigr]}_{\substack{\text{value of choice for}\\\text{marginal agents}}} \tag{2}
$$

where $$a = \Pr(A \geq 0)$$ is the aggregate share making an active choice.

**The frictional vs mental gap distinction.** In "frictional" models, $$\partial a / \partial v^d < 0$$: agents respond to a worse default by making active choices more often (the second term in equation (2) is non-zero), so optimal policy can improve welfare by setting the default so badly that all agents switch - the "shocking default" logic of Carroll et al. (2009) and Bernheim, Fradkin, and Popov (2015). In "mental gap" models, $$\partial a / \partial v^d = 0$$: active choice is driven by random attention or contextual salience, not by material stakes. The second term in equation (2) drops out, leaving $$\partial W / \partial v^d = 1 - a > 0$$: welfare always rises when the default improves, so the optimal default maximizes $$v^d$$ (a "smart" default matching beneficiaries to their best plan, as in Thaler and Sunstein (2003)).

**Structural model of latent attention (Section VII, p. 2752).** To decompose the variation in active choice, the paper models latent attention for beneficiary $$i$$ in year $$t$$ as:

$$
A_{it} = c_i + k_{it}
$$

where $$c_i \sim \mathcal{N}(\mu X_i, \sigma^2)$$ captures permanent, beneficiary-specific drivers of attention (with observable characteristics $$X_i$$) and $$k_{it} \sim \mathcal{N}(0, 1)$$ are i.i.d. transitory shocks across periods. A beneficiary makes an active choice when $$A_{it} \geq 0$$. Estimated by maximum likelihood on sequences of active/passive choices observed for the same beneficiary over multiple plan-exit events (Online Appendix E). The key testable implication is the share of total variance explained by $$k_{it}$$ (transitory) versus $$c_i$$ (permanent): a frictional model with fixed individual frictions predicts the permanent component dominates; the empirical result (two-thirds transitory) falsifies that prediction.

## Method

The paper uses three natural experiments within the LIS segment of Medicare Part D. All exploit the institutional structure of the LIS program, where defaults are quasi-randomly assigned or quasi-randomly changed via premium-subsidy threshold crossings.

**Experiment 1 - New enrollee random assignment (Section II, pp. 2726-2729).** When a beneficiary first qualifies for Medicare at age 65, she is randomly assigned to a benchmark plan in her service region (stratified randomization to avoid insurer gaming). The paper tracks cumulative active choice rates over 60 months post-enrollment using the 20 percent CMS claims sample, using `difference-in-differences`-style comparisons across subgroups (fit quintiles, health status) and cohort-year cells.

**Experiment 2 - Regression discontinuity in plan benchmark status (Section III, pp. 2729-2735).** For continuing LIS beneficiaries enrolled by auto-assignment, the default switches from "remain in your plan" to "be randomly reassigned to a new benchmark plan" if the incumbent plan sets a year-$$t$$ premium bid just above the regional subsidy level (losing benchmark status). This provides quasi-random variation in default rules around the subsidy cutoff. The `regression-discontinuity-design` estimating equation is (p. 2733):

$$
\Pr(\text{Switch Plans})_{it} = \beta \cdot \mathbf{1}\!\bigl\{B_{jt} - S_{rt} > 0\bigr\} + \gamma^{-} (B_{jt} - S_{rt}) \cdot \mathbf{1}\!\bigl\{B_{jt} - S_{rt} \leq 0\bigr\} + \gamma^{+} (B_{jt} - S_{rt}) \cdot \mathbf{1}\!\bigl\{B_{jt} - S_{rt} > 0\bigr\} + \delta X_{it} + \epsilon_{it}
$$

where $$B_{jt}$$ is the year-$$t$$ monthly premium bid for plan $$j$$, $$S_{rt}$$ is the regional LIS subsidy for year $$t$$, and $$X_{it}$$ includes individual controls. Standard errors clustered at incumbent-plan-by-year level; bandwidth restricted to within $6 of the cutoff; region-year fixed effects included. The design is validated by density tests (Figure 2, p. 2731) and covariate balance checks (Figure 3, p. 2732; Table A1).

**Experiment 3 - Stacked difference-in-differences for drug consumption (Section IV, pp. 2736-2740).** To estimate drug consumption effects, the paper stacks all market-year pairs where some plans lose benchmark status, creating a series of experiment-specific `difference-in-differences` comparisons. The pooled estimating equation (equation 1, p. 2736) is:

$$
y_{itd} = \beta\,(\text{BenchmarkLoss}_{id} \times \text{Post}_{td}) + \gamma_{id} + \eta_{hd} + \epsilon_{itd} \tag{1}
$$

where $$y_{itd}$$ is log total allowed prescription drug spending for beneficiary $$i$$ in quarter $$t$$ in experiment-cohort $$d$$, $$\gamma_{id}$$ are individual-by-experiment fixed effects, and $$\eta_{hd}$$ are event-time-by-experiment fixed effects. Standard errors clustered at the beneficiary level. Final stacked DiD sample: 5,574,684 person-by-experiment-quarter observations.

## Empirical specifications

**RD enrollment effects (R1-R2).** Linear probability model on 460,729 beneficiary-year observations from the RD analysis sample. Dependent variable = switched plans (December of year $$t-1$$ to January of year $$t$$). Running variable: incumbent plan bid minus regional subsidy. Bandwidth: within $6 of year-$$t$$ benchmark; "de minimis" plans (bid above cutoff but below cutoff plus $2) excluded. Results decomposed by outcome type: overall switching, active-choice switching, benchmark-plan active switching, and passive-reassignment switching (columns 1-4 of Table 2, p. 2734).

**DiD drug consumption (R3-R4).** Stacked DiD per equation (1), outcome = log drug spending. Panel A of Table 3 (pooled across all reassigned beneficiaries): $$\hat{\beta} = -0.064$$ (SE 0.004). Panel B of Table 3 (interacted with worst-quintile fit indicator): main effect $$\hat{\beta} = -0.043$$ (SE 0.004), worst-quintile interaction $$\hat{\delta} = -0.083$$ (SE 0.007), implying total loss of -12.6% for worst-fitting plans vs -4.3% for others. Effects robust to drug-level price normalization (-5.0%, column 2) and class-level normalization (-2.1%, column 3). Drug-type heterogeneity: high-value drugs -6.2%, chronic drugs -7.8%, non-chronic -2.8% (Table 4, p. 2740). Online Appendix C shows effects persist 24 months.

**Active choice elasticity (R5).** Same stacked DiD as equation (1) augmented per equation (3) (p. 2745) to identify $$\partial a / \partial v^d$$:

$$
y_{itd} = \delta_t(\text{LowestFit}_{id} \times \text{BenchmarkLoss}_{id}) + \beta_t\,\text{BenchmarkLoss}_{id} + \gamma_{id} + \eta_{hd} + \epsilon_{itd} \tag{3}
$$

where $$\text{LowestFit}_{id}$$ indicates that the beneficiary's randomly assigned default plan falls in the bottom quintile of formulary fit for her drug consumption. Identification comes from random assignment of plans to beneficiaries. Outcome = binary active-choice indicator by December. Main effect: $$\hat{\beta} = 0.047$$ (SE 0.001). Worst-quintile differential: $$\hat{\delta} = 0.015$$ (SE 0.002) - a 1.5 pp increase in active choice despite a -8.3 pp additional consumption loss. Slope of active choice vs consumption loss is nearly flat across the full range (Figure 7, p. 2749).

**Structural attention decomposition (R7).** Maximum likelihood estimation of the bivariate normal model $$A_{it} = c_i + k_{it}$$ on the exiting-plans subsample (32,852 beneficiaries from 84 exiting plans, 28.3% of whom had previously made an active enrollment choice). Variance shares bootstrap-estimated with 1,000 draws. Without covariates: permanent heterogeneity 33.4% [31.4%, 35.4%]; transitory 66.6% [64.6%, 68.6%]. With age/gender/race/health covariates: observable permanent variation = 3.2% [2.9%, 3.8%]; unobservable permanent = 30.6%; transitory = 66.2%. These shares rule out frictional models with constant, stable individual frictions, as they predict the permanent component should dominate.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CMS Medicare Beneficiary Summary File (2007-2015) | Beneficiary demographics, plan enrollment by month, LIS and Medicare Advantage eligibility | no page yet |
| CMS Medicaid Personal Summary File (NY and TX, 2004-2010) | Demographics and Medicaid eligibility pre-Medicare enrollment for the NY/TX Medicaid-Medicare linked subsample | no page yet |
| CMS Part D Event Files (2007-2015), 20% sample | Prescription drug claims: NDC code, quantity, days supply, date, cost charged to beneficiary and Medicare | no page yet |
| CMS MAX RX Files (NY and TX, 2004-2010), 20% sample | Medicaid prescription claims pre-Medicare enrollment, used to measure prior drug use and plan fit | no page yet |
| CMS Plan Election Type File (2007-2015) | Tracks whether each enrollment spell began through active choice or default auto-assignment; also records the assigned default plan even when the beneficiary opted out | no page yet |
| CMS Plan Characteristics Data (publicly available) | Plan-level monthly premiums, benchmark status, and formulary coverage by year and service region | no page yet |

Sample overview: CMS administrative data for dual-eligible LIS beneficiaries over 65 enrolled in Medicare Parts A, B, and D. Broad LIS sample: 4,628,704 beneficiary-year observations. National MCR initial enrollment sample: 216,772. NY/TX Medicaid-Medicare linked sample: 14,218. RD analysis sample: 1,989,603 (from Table 1, p. 2726); 460,729 beneficiary-year observations restricted to within $6 of the subsidy cutoff. Stacked DiD: 5,574,684 person-by-experiment-quarter observations.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20210013) if you are: (i) evaluating the welfare economics of default design in health insurance and need the full derivation of the optimal default conditions in Online Appendix D; (ii) replicating the RD or stacked DiD designs for other Part D populations or subgroups; (iii) extending the structural attention decomposition to new settings; (iv) studying the institutional details of LIS premium-benchmark rules to design a natural experiment; or (v) modeling attention as a mixture of permanent frictions and transitory shocks in other contexts. The full paper includes Online Appendix E (MLE procedure), Online Appendix C (24-month persistence), and additional robustness tests for the DiD price normalizations and alternative fit measures not covered by this distillation.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(10), October 2023, pages 2718-2758. DOI: [10.1257/aer.20210013](https://doi.org/10.1257/aer.20210013). Replication data and code: [ICPSR E184423V1](https://doi.org/10.3886/E184423V1). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The article is paywalled; redistribution is extract-only.

> Brot-Goldberg, Zarek, Timothy Layton, Boris Vabson, and Adelina Yanyue Wang.
> "The Behavioral Foundations of Default Effects: Theory and Evidence from
> Medicare Part D." *American Economic Review* 113, no. 10 (October 2023):
> 2718-2758. DOI: 10.1257/aer.20210013.
