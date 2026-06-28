---
title: "Digital Distractions with Peer Influence: Barwick, Chen, Fu & Li (2026)"
description: >-
  Distilled: Mobile app usage is contagious among college roommates and
  causally harms academic performance, physical health, and labor market
  outcomes. The Quarterly Journal of Economics 2026, paywalled. Nine core
  results with source locators, datasets used, the linear-in-means peer
  effects model, and shift-share IV identification.
sidebar:
  label: Barwick-Chen-Fu-Li 2026
  order: 1
tags: [paper-summary, peer-reviewed, unreplicated, peer-effects, education,
       labor-economics, digital-distraction, panel-regression]
paper:
  authors: Panle Jia Barwick, Siyu Chen, Chao Fu, Teng Li
  authorList:
    - { family: Barwick, given: Panle Jia, orcid: "0000-0001-8857-8736", affiliation: "University of Wisconsin-Madison; NBER; CEPR" }
    - { family: Chen, given: Siyu, orcid: "0000-0002-9712-9796", affiliation: "Jinan University" }
    - { family: Fu, given: Chao, orcid: "0009-0003-9925-8676", affiliation: "University of Wisconsin-Madison; NBER" }
    - { family: Li, given: Teng, orcid: "0000-0001-7901-7371", affiliation: "Sun Yat-sen University" }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 1–49
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf048
  jel:
    codes: [E24, I23, L82]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Technology Adoption and User Behaviour"]
  dataAccess: proprietary-confidential
  outcome:
    - own in-college mobile app usage
    - GPA for required courses
    - physical education (PE) score
    - initial monthly wages upon graduation
  outcomeClass: [educational-achievement, labor-careers-health]
  license: >-
    © The Author(s) 2025. Published by Oxford University Press on behalf of
    President and Fellows of Harvard College. All rights reserved. (Crossref:
    license content-version vor, URL
    https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model,
    delay-in-days 0, start 2025-10-17; standard OUP paywalled publication
    model, not CC)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford University Press, 2026-06-28)"
  redistribution: extract-only
  resultsCount: 9
  citedByCount: 5
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables, event-study]
    identification: instrument
  contributionType: [new-fact, new-data]
  introducesData: true
  mechanisms: [behavioral-bias, social-transmission]
  scope:
    region: China
    period: 2018-01..2023-06
    frequency: mixed
    dataType: [administrative, other]
    granularity: [individual]
    n: "7,479 undergraduates (2018-2020 cohorts); 6,430 matched to telecom data; 104,307 student-year-months (GPA); 2,812 students (wages)"
  findings:
    - { ref: R1, outcome: "own in-college mobile app usage", metric: coefficient, value: "0.050 log-log IV; 1 SD increase in roommates raises own usage 5.8% (Table III Panel A col (4))", direction: positive }
    - { ref: R2, outcome: "GPA for required courses", metric: sd-effect, value: "-36.2% of within-cohort-major SD (IV coefficient -0.613, Table V col (1))", direction: negative, vsBenchmark: "OLS -32.2% SD; IV larger, consistent with attenuation in OLS" }
    - { ref: R3, outcome: "GPA for required courses", metric: sd-effect, value: "-20.6% of within-cohort-major SD direct IV effect of roommates (coefficient -0.349, Table V col (1); 1-SD GPA impact 0.408 points per p. 32)", direction: negative }
    - { ref: R4, outcome: "GPA for required courses", metric: sd-effect, value: "-22.7% of within-cohort-major SD total peer effect via contagion + direct channels combined (p. 32)", direction: negative, vsBenchmark: "over 60% of own app usage effect (R2)" }
    - { ref: R5, outcome: "physical education (PE) score", metric: sd-effect, value: "2.74 PE score points per 1 SD in app usage (IV coefficient -2.350, Table V col (4))", direction: negative, vsBenchmark: "roughly 4x the GPA effect; roommates have no direct PE effect" }
    - { ref: R6, outcome: "initial monthly wages upon graduation (log)", metric: sd-effect, value: "-12.1% of within-cohort-major wage SD; 2.3% wage reduction (IV coefficient -0.020, Table VI col (4))", direction: negative }
    - { ref: R7, outcome: "initial monthly wages upon graduation (log)", metric: sd-effect, value: "-4.8% of within-cohort-major wage SD from roommates direct IV (-0.9% wage, Table VI col (4)); total via contagion -5.3% SD", direction: negative, vsBenchmark: "roughly half of own app usage wage effect (R6)" }
    - { ref: R8, outcome: "initial monthly wages upon graduation", metric: pp-effect, value: "+0.9% wage increase from extending three-hour weekly gaming cap to college (back-of-envelope, pp. 36-37)", direction: positive, vsBenchmark: "half the wage premium from one extra year of work experience in developing countries" }
    - { ref: R9, outcome: "time of first arrival at study hall", metric: coefficient, value: "18.2 minutes later following Yuanshen release per mean precollege app usage SD (Table VII col (1))", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Manski (1993)", doi: '10.2307/2298123', relation: builds-on, note: "reflection problem motivating the separation of behavioral from contextual peer effects" }
    - { cite: "Bramoullé, Djebbari, and Fortin (2020)", relation: builds-on, note: "framework for identifying behavioral and contextual peer effects in social networks" }
    - { cite: "Sacerdote (2001)", doi: '10.1162/00335530151144131', relation: builds-on, note: "random dormitory assignment as a strategy for causal peer-effects identification" }
    - { cite: "Stinebrickner and Stinebrickner (2008)", doi: '10.2202/1935-1682.1868', relation: extends, note: "extends their finding that roommates' video game console use harms GPA to mobile apps with peer contagion, wages, and health" }
  openQuestions:
    - "How digital distractions influence own and peers' outcomes through the intensive margin of study effort beyond the broad time-allocation and job-search-behavior evidence documented here (p. 44)."
    - "Whether digital distractions affect the aggregate economy through workplace productivity and firm-worker sorting, extending the individual college-student outcomes documented here (p. 44)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/PAOKUU", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full text read (pp. 1-49); nine results extracted from PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; two fixes: R3 findings[] mislabelled -0.408 as coefficient (table coeff is -0.349; -0.408 is 1-SD GPA impact per p. 32), R9 direction corrected from negative to positive (Table VII col (1) coefficient +0.067, later arrival = positive sign)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf048", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-10-17; standard OUP paywalled model, not CC" }
  rightsSignalConflict: false
---

**What this is.** This page distils the paper's core results, the linear-in-means peer effects model it tests, and the shift-share IV identification strategy, with exact table and page locators. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf048). Replication data are available on Harvard Dataverse at [doi.org/10.7910/DVN/PAOKUU](https://doi.org/10.7910/DVN/PAOKUU).

## TL;DR

Using administrative records for 7,479 college students at a Chinese university linked to detailed mobile phone usage data from a major telecom carrier, the paper estimates causal effects of individual and peer app usage on academic performance, physical health, and early labor market outcomes. Three identification strategies handle endogeneity: (i) the university's random dormitory assignment, (ii) a shift-share IV interacting the September 2020 launch of blockbuster game *Yuanshen* (Genshin Impact) with students' precollege app usage, and (iii) a shift-share IV interacting China's October 2019 minors' game restriction policy with the evolving count of each student's underage precollege friends. App usage is contagious: a one standard deviation (SD) increase in roommates' in-college app usage raises a student's own usage by 5.8%, driven by behavioral spillover rather than shared contextual traits. A one SD increase in own app usage reduces GPA for required courses by 36.2% of a within-cohort-major SD and initial wages by 2.3%. The total peer effect on GPA (combining contagion and the direct disruption channel) reaches 22.7% of a GPA SD, more than half the own-usage effect. High-frequency GPS data show that app usage displaces time from study halls, increases class lateness and absences, and disrupts sleep. Extending China's gaming restriction to college students would boost initial wages by 0.9%, equivalent to roughly half the return to an additional year of work experience. The paper extends Stinebrickner and Stinebrickner (2008), who found roommates' video game console use harms GPA, by covering mobile apps across all categories, separating behavioral from contextual peer effects, and tracing consequences to wages and physical health.

## Core results

Magnitudes are as reported in the paper; `\*` / `\*\*` / `\*\*\*` = 10% / 5% / 1%. App usage measured in log hours; GPA on a 0-100 scale; wages in log RMB. All regressions control for class-by-gender (cohort-major-administrative-unit) and dorm-size fixed effects at minimum.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Behavioral peer effect on app usage**: 1 SD increase in roommates' in-college total app usage raises own usage by 5.8% | Table III Panel A col (4), p. 24 | IV coefficient 0.050 (s.e. 0.030)\*; F-stat 34.5; contextual effect 0.024 (s.e. 0.032, insig.), Table IV |
| R2 | **Own app usage reduces GPA** (required courses, IV): 1 SD increase reduces GPA by 36.2% of within-cohort-major SD | Table V IV model col (1), p. 28 | IV coefficient -0.613\*\*\* (s.e. 0.214); KP F-stat 16.9; OLS -0.546\*\*\* |
| R3 | **Roommates' app usage reduces GPA** (direct channel, IV): 1 SD increase in roommates' usage reduces GPA by 20.6% of within-cohort-major SD | Table V IV model col (1), p. 28 | IV coefficient -0.349\*\* (s.e. 0.155) |
| R4 | **Total peer effect on GPA** combining contagion and direct channels: 22.7% of a GPA SD reduction per 1 SD roommate increase | p. 32 (derived from R1 and R3) | -0.450 GPA points; exceeds 60% of own-usage effect |
| R5 | **Own app usage reduces PE scores** (IV): 1 SD increase reduces PE grade by 2.74 points, roughly four times the GPA effect; no direct roommate PE effect | Table V IV model col (4), p. 30-32 | IV coefficient -2.350\*\*\* (s.e. 0.854); SD-normalized -2.74 points; roommates' IV coefficient 0.140 (insig.) |
| R6 | **Own app usage reduces initial wages** (IV): 1 SD increase reduces graduation wages by 2.3%, or 12.1% of within-cohort-major wage SD | Table VI IV model col (4), p. 34-35 | IV coefficient -0.020\*\*\* (s.e. 0.006); KP F-stat 317.3 |
| R7 | **Roommates' app usage reduces wages**: direct IV -0.9% (4.8% SD); total effect including contagion -1.0% (5.3% SD) | Table VI IV model col (4), p. 35 | IV coefficient -0.008\* (s.e. 0.005); total ~half of own-usage wage effect |
| R8 | **Policy counterfactual**: extending China's three-hour weekly gaming cap to college students would raise initial wages by 0.9%, equivalent to roughly half the return to one extra year of work experience | pp. 36-37 (back-of-envelope) | Restriction binds 34.3% of student-month observations; reduces average monthly gaming 12.1 to 7.65 hours at steady state |
| R9 | **Time-allocation mechanism**: *Yuanshen* release causes students to arrive at study halls 18.2 minutes later and return to dorms 23.4 minutes earlier; minors' restriction has the opposite sign | Table VII cols (1)-(2), p. 39 | Study-hall arrival: +18.2 min (Yuanshen); dorm return: -23.4 min (Yuanshen); effects evident in lateness and class absences |

**Overall (paper's conclusion).** Mobile app usage imposes economically significant costs on both users and their peers. Behavioral peer spillovers dominate contextual peer effects: it is what roommates *do* (their app usage), not who they are (their prior characteristics), that drives the contagion. The negative consequences extend from academic performance to physical health and early wages, with time displacement from study and sleep as the primary mechanism. A gaming restriction targeted at college students would meaningfully offset these costs.

## Theory / model

The paper does not build a structural model. It tests a linear-in-means peer effects framework, originally formalized by Manski (1993), in which an individual's outcome depends on both their own predetermined characteristics and on the contemporaneous behavior and characteristics of their peer group.

**Linear-in-means specification.** Let $$y_{it}$$ be individual $$i$$'s in-college app usage in month $$t$$, $$x_i$$ their predetermined characteristic (precollege app usage), and $$N_i$$ the set of their roommates. The model (equation (1), p. 18) is:

$$
y_{it} = \alpha + \gamma x_i + \beta \frac{1}{|N_i|} \sum_{j \in N_i} y_{jt} + \delta \frac{1}{|N_i|} \sum_{j \in N_i} x_j + \epsilon_{it} \tag{1}
$$

where $$\beta$$ is the behavioral peer effect (how peers' contemporaneous app usage affects own usage) and $$\delta$$ is the contextual peer effect (how peers' prior characteristics affect own usage, independent of their behavior). The reflection problem, first formalized by Manski (1993), means $$\beta$$ and $$\delta$$ are not separately identified in a cross-section. Bramoullé, Djebbari, and Fortin (2020) survey conditions under which panel variation and exclusion restrictions restore identification.

**Hypothesis tested.** The paper's central hypothesis is that app usage is *contagious*: $$\beta > 0$$. Beyond this, it tests whether $$\beta$$ dominates $$\delta$$ (behavioral versus contextual), and whether the combined peer channel transmits harmful effects on GPA and wages. The paper also tests whether the displacement of study time and sleep (mechanism) and the direct disruption of the study environment (direct channel) account for the academic penalty.

**Identification logic.** Three sources of quasi-random variation are used. (i) The university randomly assigns freshmen to single-gender dorm rooms within administrative classes (cohort-major-administrative-unit), yielding exogenous peer groups; the random assignment is verified by a balance table (Online Appendix Table C.1). (ii) The September 2020 launch of *Yuanshen* (Genshin Impact) differentially increased app usage for students with higher precollege gaming intensity; interacting the launch indicator with precollege usage produces a shift-share instrument. (iii) China's October 2019 National Press and Publication Administration policy prohibiting individuals under 18 from gaming between 10 p.m. and 8 a.m. (and capping gaming at 90 minutes on weekdays) differentially reduced app usage for students with more underage precollege friends; interacting the policy with the evolving underage-friend count produces a second shift-share instrument for peer usage.

## Method

The paper estimates three nested models using these identification strategies: the reduced-form peer effect (which mixes behavioral and contextual channels), the behavioral peer effect (isolated via the minors' restriction IV), and the GPA / wage effects (via the Yuanshen and restriction IVs). It builds on `panel-regression` with student and class-semester fixed effects, `instrumental-variables` (2SLS) for endogenous app usage, and `event-study` graphs to validate the exclusion restrictions.

**Reduced-form peer effect.** Substituting the linear-in-means model into itself and using the random assignment of roommates, the estimating equation (equation (2), p. 18) is:

$$
y_{it} = \theta_a + \theta_{\gamma_1} x_i + \theta_{\gamma_2} \frac{1}{|N_i|} \sum_{j \in N_i} x_j + \mathbf{z}'_{it} \rho + \eta_{cg} + \eta_m + \eta_t + \varepsilon_{it} \tag{2}
$$

where $$\theta_{\gamma_2}$$ is the reduced-form peer effect (a function of both $$\beta$$ and $$\delta$$), $$\mathbf{z}_{it}$$ is a vector of demographic controls, $$\eta_{cg}$$ are class-by-gender fixed effects, $$\eta_m$$ are dorm-size fixed effects, and $$\eta_t$$ are month-of-sample fixed effects. Standard errors are clustered at the class level. OLS on this equation yields the causal reduced-form estimate because roommate precollege usage is predetermined (set before any college interaction) and randomly assigned. Sacerdote (2001) established this strategy for peer effects at Dartmouth; the paper extends it to a Chinese university context with mobile app data.

**Behavioral peer effect isolation.** Adding student fixed effects absorbs time-invariant individual characteristics (including $$x_i$$) to estimate equation (3) via 2SLS:

$$
y_{it} = \eta_i + \beta \frac{1}{|N_i|} \sum_{j \in N_i} y_{jt} + \epsilon_{it} \tag{3}
$$

The IV for average roommates' in-college usage $$\frac{1}{|N_i|} \sum y_{jt}$$ is the interaction of the minors' game restriction policy timing with the evolving count of underage precollege friends among roommates. Because roommate friend networks are predetermined and do not overlap with the focal student's, this instrument affects peers but not the focal student directly, satisfying the exclusion restriction.

**GPA and wage estimation.** OLS regresses GPA on own and roommates' current app usage (equation (4), p. 27):

$$
\text{GPA}_{is} = \alpha_1 \text{Phone}_{is} + \alpha_2 \frac{1}{|N_i|} \sum_{j \in N_i} \text{Phone}_{js} + \alpha_3 \text{CEE}_i \times \eta_s + \eta_i + \eta_{cs} + \epsilon_{is} \tag{4}
$$

where $$\text{Phone}_{is}$$ is log app usage in semester $$s$$, $$\text{CEE}_i \times \eta_s$$ is an interaction between the student's college-entrance exam score and a semester trend (absorbing differential GPA trends by incoming ability), and $$\eta_{cs}$$ are class-by-semester fixed effects. The IV first stage (equation (5), p. 31) instruments both own and roommates' usage using the Yuanshen and restriction shocks:

$$
y_{is} = \lambda_1 \text{YS}_s \times \text{PrePhone}_i + \lambda_2 \text{YS}_s \times \frac{1}{|N_i|} \sum_{j \in N_i} \text{PrePhone}_j + \lambda_3 \text{Policy}_s \times \text{Minor}_{is} + \lambda_4 \text{Policy}_s \times \frac{1}{|N_i|} \sum_{j \in N_i} \text{Minor}_{js} + \lambda_5 \text{Minor}_{is} + \lambda_6 \frac{1}{|N_i|} \sum_{j \in N_i} \text{Minor}_{js} + \text{CEE} \times \eta_s + \eta_i + \eta_{cs} + \epsilon_{is} \tag{5}
$$

where YS is the Yuanshen release indicator, PrePhone is precollege app usage, Policy is the minors' restriction indicator, and Minor is the evolving count of underage precollege friends.

For wages, because outcomes are measured once per student, student fixed effects are infeasible; the paper instead controls for a rich set of student attributes and the estimated GPA fixed effect $$\hat{\eta}_i$$ (equation (6), p. 33):

$$
y_i = \gamma_1 \text{Phone}_i + \gamma_2 \frac{1}{|N_i|} \sum_{j \in N_i} \text{Phone}_j + X'_i \gamma_X + \eta_{cg} + \eta_m + \hat{\eta}_i + \varepsilon_i \tag{6}
$$

where $$\text{Phone}_i$$ is the student's average in-college app usage across all semesters (predicted from the IV first stage), $$X_i$$ includes demographic controls and hometown fixed effects, and $$\hat{\eta}_i$$ captures time-invariant ability and effort.

## Empirical specifications

**Peer effects on app usage (Section III).** Reduced-form estimates use equation (2) with OLS; the random assignment delivers causal identification without instruments. Standard errors are clustered at the class level (a cohort-major-administrative-unit triplet of 20-50 students). Behavioral peer effects in equation (3) are estimated by 2SLS using the minors' restriction shift-share instrument; Kleibergen-Paap F-statistics for total app usage is 34.5 (Table III col (4)) and for game apps 31.2 (col (2)). Event studies (Figure II) confirm pre-trend flatness for both the Yuanshen and policy shocks.

**GPA and PE effects (Section IV.A).** OLS on equation (4) and 2SLS using four instruments from equation (5): the Yuanshen interaction with own and roommates' precollege usage, and the restriction-policy interaction with own and roommates' underage friend count. Sample is student-semester cells (excluding spring 2020, COVID). Kleibergen-Paap F-statistics: 16.9 for total app usage (Table V col (1)), 14.3 for games (col (2)), 19.6 for games + video (col (3)). Hansen J p-values exceed 0.29 in all columns (Table V), supporting instrument validity. Standard errors clustered at the class level.

**Wage effects (Section IV.B).** OLS and 2SLS on equation (6). Sample: 2,812 students from 2018 and 2019 cohorts who had a job one month after graduation. Phone is predicted in-college usage averaged across semesters. Kleibergen-Paap F-statistics are very large (317.3 for total app time, up to 4,625 for game apps, Table VI). Standard errors clustered at the class level.

**Time allocation (Section V.A).** Specification (5) with the dependent variable replaced by one of six on-time performance measures (time of study-hall arrival, dorm return, duration at study hall, duration at dorm, class lateness, class absence). Controls include week-of-sample, day-of-week, class-semester, and student fixed effects, plus interactions between week-of-year and precollege app usage.

**Sleep patterns (Section V.B).** OLS regressions for the 2020 cohort (November 2023 to June 2024 with hourly app usage data) regressing sleep duration or late-sleep / late-wakeup indicators on total nighttime and daytime app usage, controlling for student, class-by-semester, week-of-sample, and day-of-week fixed effects.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Chinese university administrative records (2018-2020 cohorts, 7,479 students) | Roommate assignments, CEE scores, demographics, college transcripts (GPA per course per semester), postgraduation employment status and initial wages | No page yet (proprietary-confidential institutional data) |
| Mobile phone usage data (major Chinese telecom carrier, province-level, 2018-2021) | Monthly in-college app usage in log hours by category (social media, video, games, other) for 6,430 matched students; GPS location data at five-minute intervals; hourly usage for 2020 cohort | No page yet (proprietary-confidential telecom data) |
| Precollege friend network (phone call records) | Identifies predetermined "private" friends: bilateral calls from 2 months before college start; used as instrument-construction input (underage friend count) | No page yet |
| University annual survey (2 waves: 2022 for 2018 cohort; 2023 for 2019-2020 cohorts) | Personality, health, job search behaviors, attitudes toward gaming; 1,798 respondents (24% response rate); reweighted for representativeness | No page yet (university internal survey) |

Sample coverage: September 2018 to June 2021 (spring 2020 excluded for COVID). Wage data: graduates of 2018 cohort (June 2022) and 2019 cohort (June 2023). Average total monthly app usage: 92.9 hours (s.d. 108.5); average GPA: 78 (s.d. 6.6). The anonymized replication dataset is publicly available at Harvard Dataverse ([doi.org/10.7910/DVN/PAOKUU](https://doi.org/10.7910/DVN/PAOKUU)).

## When to read the full paper

Read the [original](https://doi.org/10.1093/qje/qjaf048) if you are: (i) replicating with the Harvard Dataverse data and code; (ii) extending the peer-effects decomposition framework (behavioral vs. contextual via equation (3)) to other technology use or addiction contexts; (iii) designing or evaluating screen-time restriction policies for students; (iv) studying mechanisms in detail via the GPS time-allocation or sleep-pattern analyses (Section V, Tables VII-VIII). The locators above (Table III, V, VI, VII) point to the exact panels.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. © The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved. This page is an extract-only LLM distillation by the Institute for Automated Research (2026-06-28). It is **not human-verified and not independently reproduced**.

> Barwick, Panle Jia, Siyu Chen, Chao Fu, and Teng Li. "Digital Distractions with Peer Influence: The Impact of Mobile App Usage on Academic and Labor Market Outcomes." *The Quarterly Journal of Economics* 141, no. 1 (2026): 1–49. DOI: [10.1093/qje/qjaf048](https://doi.org/10.1093/qje/qjaf048).
