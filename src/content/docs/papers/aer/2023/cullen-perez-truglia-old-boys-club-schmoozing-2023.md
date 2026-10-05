---
title: "Old Boys' Club: Cullen & Perez-Truglia (2023)"
description: >-
  Distilled: Face-to-face social interactions with managers appear to give male
  employees a promotion advantage under male managers at a large anonymous
  commercial bank in Southeast Asia, with quasi-random manager rotations
  providing causal identification. A back-of-the-envelope estimate attributes
  up to 40 percent of the promotion pay-grade gap to this advantage. American
  Economic Review 2023, paywalled. Twenty-five core results with source locators,
  datasets used, the event-study design, and the empirical specifications with equations.
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
  resultsCount: 25
  citedByCount: 160
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [event-study, difference-in-differences, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [agency, information-asymmetry, workplace-social-capital]
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
    - { ref: R7, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.54 x 0.66 = 0.36 pay grade reduction; gap falls from 0.90 to 0.54 pay grades (40 percent)", direction: negative, vsBenchmark: "back-of-envelope removing male-to-male advantage from unconditional gender gap" }
    - { ref: R8, outcome: "effort, performance, and retention outcomes", metric: coefficient, value: "Days worked: 0.015 log pts (p = 0.707); firm exit: -0.010 (p = 0.887); all near zero and insignificant", direction: none }
    - { ref: R9, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.70 additional pay grades at 10 quarters (p = 0.002)", direction: positive, vsBenchmark: "smoking employees gaining a smoking vs another nonsmoking manager; single difference" }
    - { ref: R10, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "0.07 pay grades at 10 quarters (p = 0.722)", direction: none, vsBenchmark: "nonsmoking employees gaining a smoking vs another nonsmoking manager; single difference" }
    - { ref: R11, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Odd/even birthday placebo coefficients are close to zero, statistically insignificant, and precisely estimated; the main text gives no point estimate", direction: none, vsBenchmark: "placebo event study using manager and employee odd/even birthdays" }
    - { ref: R12, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "Pretransition placebo: -2 pp (p = 0.846)", direction: none, vsBenchmark: "smoking employees before gaining a smoking vs another nonsmoking manager" }
    - { ref: R13, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "Nonsmoking employees: posttransition -3 pp (p = 0.625); pretransition placebo +1 pp (p = 0.845)", direction: none, vsBenchmark: "nonsmoking employees gaining a smoking vs another nonsmoking manager" }
    - { ref: R14, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "High proximity: 1.02 pay grades at 10 quarters (p = 0.017); low proximity: 0.34 (p = 0.410); difference p = 0.269", direction: positive, vsBenchmark: "smoker-to-smoker promotion advantage by manager proximity" }
    - { ref: R15, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Male employees gaining a male manager: +0.60 pay grades at 10 quarters (p < 0.001)", direction: positive, vsBenchmark: "female-to-male vs female-to-female manager transition; single difference" }
    - { ref: R16, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Female employees gaining a male manager: -0.043 pay grades at 10 quarters (p = 0.736); difference from the male coefficient p < 0.001", direction: none, vsBenchmark: "female-to-male vs female-to-female manager transition; single difference" }
    - { ref: R17, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Shared-trait gain: +0.05 pay grades at 10 quarters (p = 0.478)", direction: none, vsBenchmark: "gaining a manager sharing at least one trait vs changing between managers sharing none" }
    - { ref: R18, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Shared-trait loss: +0.08 pay grades at 10 quarters (p = 0.316)", direction: none, vsBenchmark: "losing a shared trait vs changing between managers sharing a trait" }
    - { ref: R19, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Reverse-transition male-to-male advantage: 0.44 pay grades at 10 quarters (p < 0.001); differs from the gaining estimate of 0.65 with p = 0.343", direction: positive, vsBenchmark: "losing a male manager, relative to transition between male managers" }
    - { ref: R20, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "Male employees' pretransition placebo: +0.2 pp (p = 0.987)", direction: none, vsBenchmark: "male employees before gaining a male vs another female manager" }
    - { ref: R21, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "Female employees: posttransition -8 pp (p = 0.037); pretransition estimate -11 pp (p = 0.080)", direction: negative, vsBenchmark: "female employees gaining a male vs another female manager; paper reports no robust evidence of a posttransition change" }
    - { ref: R22, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Dual-double-difference by quarters +1 through +8: 0.10, 0.10, 0.12, 0.16, 0.20, 0.21, 0.30, 0.38 pay grades; respective p-values 0.006, 0.032, 0.022, 0.012, 0.011, 0.016, 0.001, <0.001", direction: positive, vsBenchmark: "event-time effect rises alongside average pay-grade changes of 0.05, 0.15, 0.25, 0.34, 0.47, 0.56, 0.67, 0.75" }
    - { ref: R23, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Smoker-to-smoker effect 0.63 vs male-to-male effect 0.65 pay grades; equality test p = 0.956", direction: none, vsBenchmark: "comparison of the two subgroup effects at 10 quarters" }
    - { ref: R24, outcome: "share of breaks taken with the manager", metric: pp-effect, value: "Smoker effect 25 pp vs male employee effect 14.5 pp; equality test p = 0.360", direction: none, vsBenchmark: "comparison of the two subgroup effects" }
    - { ref: R25, outcome: "employee pay grade (promotion speed)", metric: coefficient, value: "Gender pay-grade gap: 0.83 among women without recorded maternity leave vs 1.09 among women with leave; difference p < 0.001, corresponding to 23.9% of the latter gap", direction: positive, vsBenchmark: "cross-section in December 2018; descriptive comparison, not a causal maternity-leave estimate" }
  resultType: confirms
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full source PDF and augmented the Core results table with R9-R25, matching findings entries, the workplace-social-capital and information-asymmetry mechanisms, and specification/sample details. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 25 result rows, equations, specifications, classifications, findings, frontmatter, prose, and DOI edges against the source PDF; corrected figure/text locators, R7 finding direction, and mechanism/causality framing." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210863", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license array present in Crossref metadata; no CC license found; paywalled under AEA standard terms." }
---

**What this is.** The paper's core results, the event-study identification design, and the empirical specifications with exact estimating equations: enough to understand what was found and how, without reading all 38 pages. To replicate or extend, read the full source at [doi:10.1257/aer.20210863](https://doi.org/10.1257/aer.20210863).

## TL;DR

Cullen and Perez-Truglia exploit quasi-random manager rotations at a large anonymous commercial bank in Southeast Asia. Male employees gain promotion pay grades under male managers, and smoking employees do so under smoking managers. The evidence points to face-to-face social interactions as a mechanism: employees in these groups share more work breaks with managers of the same type. The male-to-male advantage accumulates to 0.54 pay grades after 2.5 years and is concentrated among employees who work in physical proximity to their manager. The abstract says this mechanism could explain a third of the gender gap in promotions; Section IV's back-of-the-envelope calculation attributes 40 percent of the pay-grade gap to it, which the authors note may be an upper bound. The estimated effects do not come with significant measured differences in effort, sales performance, or retention. The paper provides causal evidence related to the old boys' club hypothesis, extending the correlational evidence of Kunze and Miller (2017) and contributing to the gender pay gap literature of Goldin (2014) and Bertrand, Goldin, and Katz (2010).

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Smoker-to-smoker **promotion advantage**: smoking employees promoted faster under a smoking manager | Figure 1, panel B, p. 1718; text p. 1719 | Double-difference = 0.63 pay grades at 10 quarters (p = 0.035), ~15 percent salary increase |
| R2 | Smoking employees **share significantly more breaks** with a smoking manager | Figure 2, panel A, p. 1721; text p. 1722 | +24 pp (38% to 62% of breaks, p = 0.002); no effect for nonsmoking employees |
| R3 | Male employees **promoted faster under a male manager** (double-differences) | Figure 7, panel A, p. 1729; text p. 1730 | Male-to-male double-difference = 0.65 pay grades at 10 quarters (p < 0.001) |
| R4 | Male-to-male advantage (dual-double-differences, gain and lose) | Figure 7, panel C, p. 1729; text p. 1730 | 0.54 pay grades at 10 quarters (p < 0.001) |
| R5 | Male employees **share significantly more breaks** with a male manager | Figure 2, panel C, p. 1721; text p. 1732 | +14.5 pp (46.7% to 61.2%, p = 0.017); no robust effect for female employees |
| R6 | Male-to-male advantage **concentrated in high-proximity** positions | Figure 8, p. 1732 | 0.76 pay grades high-proximity (p < 0.001) vs 0.21 low-proximity (p = 0.178); difference p = 0.013 |
| R7 | Male-to-male advantage **accounts for up to 40 percent** of the gender gap | Section IV, p. 1734 | 0.54 x 0.66 = 0.36 pay grade reduction; gap falls from 0.90 to 0.54 pay grades; authors note 40 percent is an upper bound |
| R8 | **No significant effect** on effort (days worked, hours), sales performance, or firm exit | Figure 3, p. 1723; text p. 1724 | All coefficients near zero and insignificant (e.g., attrition at 10 quarters = -0.010, p = 0.887) |
| R9 | Smoking employees' single-difference promotion gain under a smoking manager | Figure 1, panel A, p. 1718; text p. 1719 | +0.70 pay grades at 10 quarters (p = 0.002) |
| R10 | Nonsmoking employees' promotion response to gaining a smoking manager | Figure 1, panel A, p. 1718; text p. 1719 | +0.07 pay grades at 10 quarters (p = 0.722) |
| R11 | Birthday parity placebo for the promotion event study | text p. 1720 | Odd/even birthday coefficients are close to zero, insignificant, and precisely estimated; exact coefficients are not reported in the main text |
| R12 | Pretransition placebo in smoking employees' shared-break outcome | Figure 2, panel A, p. 1721; text p. 1722 | -2 pp (p = 0.846) |
| R13 | Shared-break response and pretrend for nonsmoking employees | Figure 2, panel B, p. 1721; text p. 1722 | Posttransition: -3 pp (p = 0.625); pretransition placebo: +1 pp (p = 0.845) |
| R14 | Smoker-to-smoker promotion advantage by manager proximity | Figure 5, p. 1726 | 1.02 pay grades high proximity (p = 0.017) vs 0.34 low proximity (p = 0.410); difference p = 0.269 |
| R15 | Male employees' single-difference promotion gain under a male manager | Figure 6, panel A, p. 1728; text p. 1727 | +0.60 pay grades at 10 quarters (p < 0.001) |
| R16 | Female employees' promotion response to gaining a male manager | Figure 6, panel A, p. 1728; text p. 1727 | -0.043 pay grades (p = 0.736); male-female coefficient difference p < 0.001 |
| R17 | Shared-trait gain falsification for pay grades | Figure 4, panel A, p. 1725; text p. 1725 | +0.05 pay grades at 10 quarters (p = 0.478) |
| R18 | Shared-trait loss falsification for pay grades | Figure 4, panel B, p. 1725; text p. 1726 | +0.08 pay grades at 10 quarters (p = 0.316) |
| R19 | Reverse-transition male-to-male promotion advantage | Figure 7, panel B, p. 1729; text p. 1730 | 0.44 pay grades at 10 quarters (p < 0.001); difference from gaining estimate of 0.65 has p = 0.343 |
| R20 | Pretransition placebo in male employees' shared-break outcome | Figure 2, panel C, p. 1721; text p. 1732 | +0.2 pp (p = 0.987) |
| R21 | Shared-break response for female employees gaining a male manager | Figure 2, panel D, p. 1721; text p. 1732 | -8 pp (p = 0.037); pretransition estimate -11 pp (p = 0.080), and authors report no robust posttransition evidence |
| R22 | Timing of the dual-double-difference male-to-male advantage | text p. 1731 | Quarters +1 to +8: 0.10, 0.10, 0.12, 0.16, 0.20, 0.21, 0.30, 0.38 pay grades; p-values 0.006, 0.032, 0.022, 0.012, 0.011, 0.016, 0.001, <0.001 |
| R23 | Comparison of smoker-to-smoker and male-to-male promotion estimates | text p. 1733 | 0.63 vs 0.65 pay grades at 10 quarters; equality test p = 0.956 |
| R24 | Comparison of smoking and gender effects on shared breaks | text p. 1733 | 25 pp vs 14.5 pp; equality test p = 0.360 |
| R25 | Descriptive promotion-gap comparison by maternity-leave history | text p. 1734 | 0.83 pay grades without recorded leave vs 1.09 with leave; difference p < 0.001 (23.9% of the latter gap; not a causal estimate) |

**Overall (paper's conclusion).** Manager-employee social interactions may give some employees a durable and economically large promotion advantage when they share the manager's type (smoking status or gender). The effect builds gradually over two years as more employees cycle through promotion opportunities, is concentrated in positions requiring physical proximity to the manager, and is not accompanied by any significant measured differences in productivity outcomes. The abstract says this mechanism could explain a third of the gender gap in promotions; Section IV's calculation attributes up to 40 percent of the observed gender gap in pay grades to the male-to-male advantage, comparable in magnitude to the motherhood penalty.

## Theory / model

The paper has no formal economic model. It tests two related hypotheses about face-to-face social interactions and promotions.

**Hypothesis 1 (smoker-to-smoker advantage).** Employees who smoke and gain a smoking manager have more shared smoking breaks, leading the manager to favor them in promotion decisions or to learn more about their effort and potential through increased contact. This advantage should be absent for nonsmoking employees gaining a smoking manager, and larger among employees who work in physical proximity to their manager.

**Hypothesis 2 (male-to-male advantage).** Male employees broadly have more opportunities for social interaction with male managers than female employees do, not limited to smoking breaks. Switching from a female manager to a male manager therefore raises male employees' promotion prospects but not female employees'. The effect should again be larger in high-proximity positions.

The identification logic rests on the quasi-random rotation of managers as part of the firm's standard practice of rotating personnel across teams to give them broad exposure (pp. 1704-1705, pp. 1712-1713). The paper tests this assumption via parallel pre-trends and via a falsification exercise using the reverse transition direction (losing vs. gaining a male manager), which produces roughly mirror-image effects. An affinity-channel falsification using shared demographic traits (same province, same college, or close in age, covering 16, 8, and 43 percent of pairs respectively) finds a small and insignificant gain effect on pay grade at 10 quarters (0.05 pay grades, p = 0.478) compared to the smoker-to-smoker estimate of 0.63. The authors caution that affinity may explain some of the advantage, but these measured shared traits do not explain it entirely. Evidence from Bandiera, Barankay, and Rasul (2009) on manager social connections in a different workplace setting is cited for context. For magnitude context, the paper compares the male-to-male estimate to motherhood-penalty estimates in Kleven, Landais, and Søgaard (2019).

## Method

The estimator is a two-way fixed-effects event-study exploiting manager rotation events, introduced in Section IIA (p. 1716). Let $$y_{i,t}$$ be the outcome for employee $$i$$ at month $$t$$. Let $$S_i \in \{0,1\}$$ indicate whether the employee smokes, and let $$J_S = \{N2S, N2N, S2S, S2N\}$$ denote the four types of manager transitions (N2S = nonsmoking-to-smoking manager, etc.). For event-time leads and lags $$\mathcal{E} = \{-30, \ldots, -4, 0, +1, \ldots, +30\}$$ (monthly, aggregated to quarterly for presentation), the baseline specification is (equation 1, p. 1717):

$$
y_{i,t} = \sum_{j \in J_S} \sum_{e \in \mathcal{E}} \beta_{j,e}^S \cdot S_i \cdot D_{i,t+e}^j + \sum_{j \in J_S} \sum_{e \in \mathcal{E}} \beta_{j,e}^N \cdot (1-S_i) \cdot D_{i,t+e}^j + \gamma_i + \eta_{i,t} + \delta_t^S + \delta_t^N + \epsilon_{i,t} \tag{1}
$$

where $$D_{i,t+e}^j = 1$$ if employee $$i$$ experiences a type-$$j$$ manager transition at time $$t+e$$, $$\gamma_i$$ are employee fixed effects, $$\eta_{i,t}$$ are manager fixed effects, and $$\delta_t^S$$, $$\delta_t^N$$ are separate month effects for smokers and nonsmokers. Standard errors are two-way clustered by team and manager (p. 1717). The omitted categories are the three months before the event (months -3, -2, and -1); the paper adds absorbing dummies for the extreme event-time categories at or before -31 and at or after +31 months (p. 1717).

The key estimands are:

- *Single-difference* for smokers: $$\beta_{N2S,e}^S - \beta_{N2N,e}^S$$, the gain from acquiring a smoking manager vs. acquiring any nonsmoking manager.
- *Double-difference*: $$\left(\beta_{N2S,e}^S - \beta_{N2N,e}^S\right) - \left(\beta_{N2S,e}^N - \beta_{N2N,e}^N\right)$$, the differential effect of a smoking manager on smoking vs. nonsmoking employees (R1).

The male-to-male specification is identical to equation (1) but replaces the smoking indicator $$S_i$$ with a female indicator $$F_i$$ and the transition set $$J_S$$ with $$J_G = \{F2M, F2F, M2F, M2M\}$$ (p. 1727). A symmetric *dual-double-difference* for the male-to-male analysis (R4) averages the double-difference from gaining a male manager (panel A of Figure 7) with the negative of the double-difference from losing a male manager (panel B of Figure 7), using a disjoint set of transition events as a sharp robustness check.

For social interactions, the outcome $$\text{Share}_{i,m}$$ is the fraction of work breaks employee $$i$$ took with manager $$m$$. Since this is measured as a cross-section of employee-manager pairs rather than a monthly panel, the specification collapses to (equation 2, p. 1720):

$$
\text{Share}_{i,m} = \sum_{j \in J_S} \beta_{j,\text{post}}^S S_i D_{i,m}^j + \sum_{j \in J_S} \beta_{j,\text{post}}^N (1-S_i) D_{i,m}^j + \sum_{j \in J_S} \beta_{j,\text{pre}}^S S_i D_{i,m+1}^j + \sum_{j \in J_S} \beta_{j,\text{pre}}^N (1-S_i) D_{i,m+1}^j + \mathbf{X}_{i,m} \boldsymbol{\gamma} + \epsilon_{i,m} \tag{2}
$$

where $$D_{i,m}^j = 1$$ if employee $$i$$ experienced a type-$$j$$ transition from manager $$m-1$$ to $$m$$, and $$D_{i,m+1}^j = 1$$ for the upcoming transition from $$m$$ to $$m+1$$ (used as a placebo pre-trend test). Controls $$\mathbf{X}_{i,m}$$ include unit size, manager pay grade, employee and manager smoking indicators, and position-title dummies.

## Empirical specifications

**Smoker-to-smoker advantage (Section II, R1-R2, R9-R14).** The sample is male employees and male managers with assignable smoking status: 2,907 unique employees, 997 unique managers, 1,798 manager transition events, 94,728 employee-month observations. Outcome for R1 and R9-R11: monthly pay grade (range 41-66, January 2015 to December 2018); Figure 1 standard errors cluster by team and manager. Outcome for R2 and R12-R13: share of breaks with the manager (manager relationship survey, cross-section of employee-manager pairs); Figure 2 has 1,287 employee-manager observations for 699 workers, and standard errors cluster by manager and employee. Equation (2) also includes unit size, manager pay grade, smoking indicators for employee and manager, and position-title indicators. The headline estimate is the double-difference at 10 quarters posttransition.

**Male-to-male advantage (Section III, R3-R7, R15-R24).** The full panel covers 14,638 unique employees, 1,269 unique managers, 8,670 transition events, and 380,959 employee-month observations (65 percent female). Equation (1)'s gender specification is written out from the replacement described in footnote 39 (text p. 1727):

$$
y_{i,t} = \sum_{j \in J_G} \sum_{e \in \mathcal{E}} \beta_{j,e}^M \cdot (1-F_i) \cdot D_{i,t+e}^j + \sum_{j \in J_G} \sum_{e \in \mathcal{E}} \beta_{j,e}^F \cdot F_i \cdot D_{i,t+e}^j + \gamma_i + \eta_{i,t} + \delta_t^M + \delta_t^F + \epsilon_{i,t}
$$

Here $$F_i=1$$ for female employees and $$J_G=\{F2M,F2F,M2F,M2M\}$$ is the set of manager-gender transitions. Employee and manager fixed effects and separate month effects by employee gender follow equation (1); standard errors cluster two-way by team and manager. Figure 6 compares gaining transitions, Figure 7's reverse-transition check compares losing transitions, and Figure 7 panel C averages the gain estimate and the negative of the loss estimate using disjoint transition events. Figure 7 reports 380,964 observations in its note (p. 1729), while the Figure 6 note reports 380,959. Figure 2's gender interaction sample has 4,843 observations for 2,638 workers; its standard errors cluster by manager and employee (Figure 2 note, p. 1721). The primary headline estimate (R4) uses the dual-double-differences from panel C of Figure 7.

**Physical proximity heterogeneity (R6).** The dual-double-differences model is re-estimated separately for high-proximity and low-proximity subsamples. High-proximity classification uses card-swipe floor-sharing data (headquarters employees, 45 percent of the sample) and survey-reported daily proximity (sales and distribution employees); roughly half of employees fall in each group. The 0.76 vs. 0.21 pay grade contrast (p = 0.013 for the difference) confirms the face-to-face interaction channel.

**Effort, performance, and retention (R8, Figure 3).** The same event-study specification as equation (1) is run with four alternative dependent variables: log days worked (HR absence records), log daily hours worked (card-swipe data, headquarters only), monthly sales revenue index (sales-role employees, normalized to mean 100), and a firm-exit dummy. All post-transition coefficients are close to zero and precisely estimated, with pre-trends also flat.

**Affinity-channel falsification (Section IIE, Figure 4).** The event-study is re-run using transitions in which an employee gains or loses a manager with a shared demographic trait. The posttransition pay grade coefficient at 10 quarters is 0.05 (p = 0.478), well below the 0.63 smoker-to-smoker estimate, ruling out pure demographic affinity as the driver.

**Additional distinct checks and comparisons (R11-R13, R17-R25).** Figure 1's lead coefficients support parallel pretrends, and an odd/even birthday placebo is reported as close to zero and precisely estimated (text p. 1720). Figure 2 reports the stated pretransition placebos and the nonsmoker and female interaction outcomes. Figure 4's shared-trait gain and loss tests are separate specifications. Figure 7's losing-manager estimates form the disjoint reverse-transition check; its event-time path grows from 0.10 at quarter +1 to 0.38 by quarter +8 (text p. 1731). The December 2018 maternity-leave comparison is descriptive and the authors explicitly caution that it is not a causal estimate (text p. 1734).

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

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. This distillation was updated on 2026-10-04 and is **not human-verified or independently reproduced**. The article is paywalled under AEA standard terms; no CC license was found in Crossref metadata. Replication data are publicly archived at [doi:10.3886/E182243V1](https://doi.org/10.3886/E182243V1).

> Cullen, Zoë, and Ricardo Perez-Truglia. "The Old Boys' Club: Schmoozing and the Gender Gap." *American Economic Review* 113, no. 7 (July 2023): 1703-1740. DOI: 10.1257/aer.20210863. Extracted here under fair use for educational and research purposes; no verbatim reproduction of extended passages.
