---
title: "Old Boys' Club: Cullen & Perez-Truglia (2023)"
description: >-
  Distilled: Face-to-face social interactions with managers give same-gendered
  employees a promotion advantage at a large anonymous commercial bank in
  Southeast Asia, with quasi-random manager rotations providing causal
  identification; the male-to-male advantage accounts for about 40 percent of
  the gender pay gap in promotions at this firm. American Economic Review 2023,
  paywalled. Eight core results with source locators, datasets used, the
  event-study design, and the empirical specifications with equations.
  LLM-distilled, not human-verified.
sidebar:
  label: Cullen & Perez-Truglia 2023
  order: 1
tags: [paper-summary, labor-economics, gender-gap, promotions, social-interactions,
       event-study, panel-regression, peer-reviewed, unreplicated]
paper:
  authors: Zoë Cullen, Ricardo Perez-Truglia
  authorList:
    - { family: Cullen, given: Zoë, affiliation: Harvard University }
    - { family: Perez-Truglia, given: Ricardo, affiliation: University of California, Berkeley }
  year: 2023
  venue: American Economic Review, vol. 113, no. 7, July 2023, pp. 1703-1740
  venueShort: AER 2023
  doi: 10.1257/aer.20210863
  jel:
    codes: [J16, J71, M51]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Experimental Behavioral Economics Studies', 'Corporate Finance and Governance', 'Culture, Economy, and Development Studies']
  dataAccess: proprietary-confidential
  outcome:
    - employee pay grade (promotion speed)
    - share of breaks taken with the manager
    - effort, performance, and retention outcomes
  outcomeClass: [labor-careers-health]
  license: "paywalled (no CC license found in Crossref REST API; AEA standard terms of use)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 160
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [event-study, difference-in-differences, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [agency]
  introducesData: true
  scope:
    region: Southeast Asia
    assetClass: corporate employees (commercial banking)
    period: 2015-01..2018-12
    frequency: monthly
    dataType: [administrative, survey]
    granularity: [individual]
    n: "14,638 unique employees, 1,269 unique managers (male-to-male sample); 2,907 employees, 997 managers (smoker sample); 48-month panel"
  findings:
    - { ref: R1, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.63 pay grades at 10 quarters post-transition (p = 0.035), ~15 percent salary increase", direction: positive, vsBenchmark: "smoker-to-smoker double-difference vs nonsmoking-manager control" }
    - { ref: R2, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "+24 pp, from 38% to 62% (p = 0.002)", direction: positive, vsBenchmark: "smoking employee gaining a smoking vs nonsmoking manager" }
    - { ref: R3, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.65 pay grades at 10 quarters (p < 0.001)", direction: positive, vsBenchmark: "male-to-male double-difference; panel A of Figure 7" }
    - { ref: R4, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.54 pay grades at 10 quarters (p < 0.001)", direction: positive, vsBenchmark: "dual-double-differences combining gain-and-lose male manager; panel C of Figure 7" }
    - { ref: R5, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "+14.5 pp, from 46.7% to 61.2% (p = 0.017)", direction: positive, vsBenchmark: "male employee gaining a male vs female manager" }
    - { ref: R6, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.76 pay grades high-proximity (p < 0.001) vs 0.21 low-proximity (p = 0.178); difference p = 0.013", direction: positive, vsBenchmark: "high vs low physical proximity to manager; Figure 8" }
    - { ref: R7, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.54 x 0.66 = 0.36 pay grade reduction; gap falls from 0.90 to 0.54 pay grades (40 percent)", direction: positive, vsBenchmark: "back-of-envelope removing male-to-male advantage from unconditional gender gap" }
    - { ref: R8, outcome: "effort, performance, and retention outcomes", metric: coefficient, value: "Days worked: 0.015 log pts (p = 0.707); firm exit: -0.010 (p = 0.887); all near zero and insignificant", direction: none }
  resultType: new-finding
  relatesTo:
    - { cite: "Kunze and Miller (2017)", doi: '10.1162/rest_a_00668', relation: extends, note: "extends to causal event-study estimates via manager rotations and identifies face-to-face social interactions as the mechanism" }
    - { cite: "Goldin (2014)", doi: '10.1257/aer.104.4.1091', relation: builds-on, note: "builds on the convergence-in-promotions framework motivating the focus on within-firm promotion gaps" }
    - { cite: "Bertrand, Goldin, and Katz (2010)", doi: '10.1257/app.2.3.228', relation: builds-on, note: "prior evidence that promotion-rate gaps drive early-career gender pay gaps in corporate settings" }
    - { cite: "Bandiera, Barankay, and Rasul (2009)", relation: cites, note: "social connections and incentives in the workplace using personnel data from a fruit-picking farm" }
    - { cite: "Kleven, Landais, and Søgaard (2019)", doi: '10.1257/app.20180010', relation: cites, note: "motherhood penalty benchmark for contextualizing the magnitude of the male-to-male advantage" }
  openQuestions:
    - "Whether the male-to-male advantage generalizes beyond this anonymous bank to other industries, countries, and organizational structures; the paper's design can be replicated with manager rotation data elsewhere (p. 1737)."
    - "Whether policies such as involving multiple managers in promotion decisions, standardizing objective performance metrics, or leveling social activity opportunities can curb the favoritism channel (p. 1737)."
    - "Whether women fail to benefit from female managers because they interact less face-to-face with female managers or because they convert interactions into promotions less effectively than men; the paper's data cannot distinguish these explanations (pp. 1735-1736)."
  replicationCode:
    url: "https://doi.org/10.3886/E182243V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1703-1740); eight results extracted from the source PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; R1-R4, R6-R8 confirmed correct; R5 locator fixed from p. 1731 to p. 1721 (Figure 2 is on p. 1721, not the discussion page)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210863", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license array present in Crossref metadata; no CC license found; paywalled under AEA standard terms." }
---

**What this is.** The paper's core results, the event-study identification design, and the empirical specifications with exact estimating equations: enough to understand what was found and how, without reading all 38 pages. To replicate or extend, read the full source at [doi:10.1257/aer.20210863](https://doi.org/10.1257/aer.20210863).

## TL;DR

Cullen and Perez-Truglia exploit quasi-random manager rotation at a large anonymous commercial bank in Southeast Asia to show that employees who share a social trait with their manager (smoking habit or gender) get promoted faster. The causal effect operates through face-to-face social interactions: after gaining a same-type manager, treated employees share significantly more work breaks with that manager, while otherwise similar employees gaining a different-type manager do not change their break-sharing rate. The male-to-male advantage in promotions accumulates to 0.54 pay grades after 2.5 years and is concentrated among employees who work in physical proximity to their manager. Back-of-the-envelope calculations attribute roughly 40 percent of the unconditional gender gap in promotions to this mechanism, a magnitude comparable to estimates of the motherhood penalty from Kleven, Landais, and Søgaard (2019). No effects are found on effort, sales performance, or retention, ruling out productivity differences as the mechanism. The paper is the first to provide causal evidence on the old boys' club hypothesis, extending the correlational evidence of Kunze and Miller (2017) and contributing to the gender pay gap literature of Goldin (2014) and Bertrand, Goldin, and Katz (2010).

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Smoker-to-smoker **promotion advantage**: smoking employees promoted faster under a smoking manager | Figure 1, panel B, p. 1719 | Double-difference = 0.63 pay grades at 10 quarters (p = 0.035), ~15 percent salary increase |
| R2 | Smoking employees **share significantly more breaks** with a smoking manager | Figure 2, panel A, p. 1721 | +24 pp (38% to 62% of breaks, p = 0.002); no effect for nonsmoking employees |
| R3 | Male employees **promoted faster under a male manager** (double-differences) | Figure 7, panel A, p. 1729 | Male-to-male double-difference = 0.65 pay grades at 10 quarters (p < 0.001) |
| R4 | Male-to-male advantage (dual-double-differences, gain and lose) | Figure 7, panel C, p. 1729 | 0.54 pay grades at 10 quarters (p < 0.001) |
| R5 | Male employees **share significantly more breaks** with a male manager | Figure 2, panel C, p. 1721 | +14.5 pp (46.7% to 61.2%, p = 0.017); no robust effect for female employees |
| R6 | Male-to-male advantage **concentrated in high-proximity** positions | Figure 8, p. 1732 | 0.76 pay grades high-proximity (p < 0.001) vs 0.21 low-proximity (p = 0.178); difference p = 0.013 |
| R7 | Male-to-male advantage **accounts for 40 percent** of the gender gap | Section IV, p. 1734 | 0.54 x 0.66 = 0.36 pay grade reduction; gap falls from 0.90 to 0.54 pay grades |
| R8 | **No effect** on effort (days worked, hours), sales performance, or firm exit | Figure 3, p. 1723 | All coefficients near zero and insignificant (e.g., attrition at 10 quarters = -0.010, p = 0.887) |

**Overall (paper's conclusion).** Manager-employee social interactions generate a durable and economically large promotion advantage for co-typed employee-manager pairs (same smoking status or same gender). The effect builds gradually over two years as more employees cycle through promotion opportunities, is concentrated in positions requiring physical proximity to the manager, and is not accompanied by any gain in measured productivity. At this firm, the male-to-male advantage through social interactions can account for about 40 percent of the observed gender gap in pay grades, comparable in magnitude to the motherhood penalty.

## Theory / model

The paper has no formal economic model. It tests two related hypotheses about face-to-face social interactions and promotions.

**Hypothesis 1 (smoker-to-smoker advantage).** Employees who smoke and gain a smoking manager have more shared smoking breaks, leading the manager to favor them in promotion decisions or to learn more about their effort and potential through increased contact. This advantage should be absent for nonsmoking employees gaining a smoking manager, and larger among employees who work in physical proximity to their manager.

**Hypothesis 2 (male-to-male advantage).** Male employees broadly have more opportunities for social interaction with male managers than female employees do, not limited to smoking breaks. Switching from a female manager to a male manager therefore raises male employees' promotion prospects but not female employees'. The effect should again be larger in high-proximity positions.

The identification logic rests on the quasi-random rotation of managers as part of the firm's standard practice of rotating personnel across teams to give them broad exposure (pp. 1704-1705, pp. 1712-1713). The paper tests this assumption via parallel pre-trends and via a falsification exercise using the reverse transition direction (losing vs. gaining a male manager), which should and does produce mirror-image effects. An affinity-channel falsification using shared demographic traits (same province, same college, or close in age, covering 16, 8, and 43 percent of pairs respectively) finds negligible effects on pay grade at 10 quarters (0.05 pay grades, p = 0.478) compared to the smoker-to-smoker estimate of 0.63, ruling out group identity as the main channel. Evidence from Bandiera, Barankay, and Rasul (2009) on manager social connections in a different workplace setting is cited for context.

## Method

The estimator is a two-way fixed-effects event-study exploiting manager rotation events, introduced in Section IIA (p. 1716). Let $$y_{i,t}$$ be the outcome for employee $$i$$ at month $$t$$. Let $$S_i \in \{0,1\}$$ indicate whether the employee smokes, and let $$J_S = \{N2S, N2N, S2S, S2N\}$$ denote the four types of manager transitions (N2S = nonsmoking-to-smoking manager, etc.). For event-time leads and lags $$\mathcal{E} = \{-30, \ldots, -4, 0, +1, \ldots, +30\}$$ (monthly, aggregated to quarterly for presentation), the baseline specification is (equation 1, p. 1717):

$$
y_{i,t} = \sum_{j \in J_S} \sum_{e \in \mathcal{E}} \beta_{j,e}^S \cdot S_i \cdot D_{i,t+e}^j + \sum_{j \in J_S} \sum_{e \in \mathcal{E}} \beta_{j,e}^N \cdot (1-S_i) \cdot D_{i,t+e}^j + \gamma_i + \eta_{i,t} + \delta_t^S + \delta_t^N + \epsilon_{i,t} \tag{1}
$$

where $$D_{i,t+e}^j = 1$$ if employee $$i$$ experiences a type-$$j$$ manager transition at time $$t+e$$, $$\gamma_i$$ are employee fixed effects, $$\eta_{i,t}$$ are manager fixed effects, and $$\delta_t^S$$, $$\delta_t^N$$ are separate month effects for smokers and nonsmokers. Standard errors cluster two-way by manager and employee. The omitted category is the quarter prior to the transition event.

The key estimands are:

- *Single-difference* for smokers: $$\beta_{N2S,e}^S - \beta_{N2N,e}^S$$, the gain from acquiring a smoking manager vs. acquiring any nonsmoking manager.
- *Double-difference*: $$\left(\beta_{N2S,e}^S - \beta_{N2N,e}^S\right) - \left(\beta_{N2S,e}^N - \beta_{N2N,e}^N\right)$$, the differential effect of a smoking manager on smoking vs. nonsmoking employees (R1).

The male-to-male specification is identical to equation (1) but replaces the smoking indicator $$S_i$$ with a female indicator $$F_i$$ and the transition set $$J_S$$ with $$J_G = \{F2M, F2F, M2F, M2M\}$$ (p. 1727). A symmetric *dual-double-difference* for the male-to-male analysis (R4) averages the double-difference from gaining a male manager (panel A of Figure 7) with the negative of the double-difference from losing a male manager (panel B of Figure 7), using a disjoint set of transition events as a sharp robustness check.

For social interactions, the outcome $$\text{Share}_{i,m}$$ is the fraction of work breaks employee $$i$$ took with manager $$m$$. Since this is measured as a cross-section of employee-manager pairs rather than a monthly panel, the specification collapses to (equation 2, p. 1720):

$$
\text{Share}_{i,m} = \sum_{j \in J_S} \beta_{j,\text{post}}^S S_i D_{i,m}^j + \sum_{j \in J_S} \beta_{j,\text{post}}^N (1-S_i) D_{i,m}^j + \sum_{j \in J_S} \beta_{j,\text{pre}}^S S_i D_{i,m+1}^j + \sum_{j \in J_S} \beta_{j,\text{pre}}^N (1-S_i) D_{i,m+1}^j + \mathbf{X}_{i,m} \boldsymbol{\gamma} + \epsilon_{i,m} \tag{2}
$$

where $$D_{i,m}^j = 1$$ if employee $$i$$ experienced a type-$$j$$ transition from manager $$m-1$$ to $$m$$, and $$D_{i,m+1}^j = 1$$ for the upcoming transition from $$m$$ to $$m+1$$ (used as a placebo pre-trend test). Controls $$\mathbf{X}_{i,m}$$ include unit size, manager pay grade, and position-title dummies.

## Empirical specifications

**Smoker-to-smoker advantage (Section II, R1-R2).** The sample is male employees and male managers with assignable smoking status: 2,907 unique employees, 997 unique managers, 1,798 manager transition events, 94,728 employee-month observations. Outcome for R1: monthly pay grade (range 41-66, January 2015 to December 2018). Outcome for R2: share of breaks with the manager (manager relationship survey, cross-section of employee-manager pairs). The headline estimate is the double-difference at 10 quarters posttransition.

**Male-to-male advantage (Section III, R3-R7).** The full panel covers 14,638 unique employees, 1,269 unique managers, 8,670 transition events, and 380,959 employee-month observations (65 percent female). The specification is identical to equation (1) with gender replacing smoking. The primary headline estimate (R4) uses the dual-double-differences from panel C of Figure 7, averaging gains and losses to control for mean-reversion and maximize precision.

**Physical proximity heterogeneity (R6).** The dual-double-differences model is re-estimated separately for high-proximity and low-proximity subsamples. High-proximity classification uses card-swipe floor-sharing data (headquarters employees, 45 percent of the sample) and survey-reported daily proximity (sales and distribution employees); roughly half of employees fall in each group. The 0.76 vs. 0.21 pay grade contrast (p = 0.013 for the difference) confirms the face-to-face interaction channel.

**Effort, performance, and retention (R8, Figure 3).** The same event-study specification as equation (1) is run with four alternative dependent variables: log days worked (HR absence records), log daily hours worked (card-swipe data, headquarters only), monthly sales revenue index (sales-role employees, normalized to mean 100), and a firm-exit dummy. All post-transition coefficients are close to zero and precisely estimated, with pre-trends also flat.

**Affinity-channel falsification (Section IIE, Figure 4).** The event-study is re-run using transitions in which an employee gains or loses a manager with a shared demographic trait. The posttransition pay grade coefficient at 10 quarters is 0.05 (p = 0.478), well below the 0.63 smoker-to-smoker estimate, ruling out pure demographic affinity as the driver.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Anonymous commercial bank HR records (pay grades, manager assignments, organizational chart, HR absence records) | Primary outcome (monthly pay grade), manager assignment construction, effort and retention outcomes; 2015-2018 | No page yet (proprietary-confidential) |
| Anonymous commercial bank annual health exam (smoking status, 2017) | Smoking status for 59% of employees (59% classified from exam, 41% from supplementary surveys) | No page yet (proprietary-confidential) |
| Two supplementary smoking surveys (February 2018 and December 2017) | Imputed smoking status for employees not in the health exam | No page yet (proprietary-confidential) |
| Manager relationship survey (share of breaks with manager, December 2017) | Social interactions measure; 3,345 of 4,847 invited employees responded (69%) | No page yet (proprietary-confidential) |
| Card-swipe security data (floor occupancy by employee) | Physical proximity classification for headquarters employees (45% of sample) | No page yet (proprietary-confidential) |

Sample: January 2015 to December 2018 (48 months). All data originate from a single anonymous commercial bank in Southeast Asia; no external public sources used in the main analysis. The firm identity is withheld by agreement; the paper refers to it throughout as "the firm."

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210863) if you are: tracing the mechanism in detail (the affinity-channel tests in Section IIE and proximity heterogeneity in Sections IIF and IIIE provide the richest identification evidence); applying the same manager-rotation design to a new organizational dataset (Sections IIB and IIIB lay out the parallel-trends and reverse-transitions validation); assessing how the male-to-male advantage interacts with occupational proximity or cultural norms across different settings (Section V); or running the replication code (data: [doi:10.3886/E182243V1](https://doi.org/10.3886/E182243V1), noting the firm identity remains anonymous).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The article is paywalled under AEA standard terms; no CC license was found in Crossref metadata. Replication data are publicly archived at [doi:10.3886/E182243V1](https://doi.org/10.3886/E182243V1).

> Cullen, Zoë, and Ricardo Perez-Truglia. "The Old Boys' Club: Schmoozing and the Gender Gap." *American Economic Review* 113, no. 7 (July 2023): 1703-1740. DOI: 10.1257/aer.20210863. Extracted here under fair use for educational and research purposes; no verbatim reproduction of extended passages.
