---
title: "Digital Distractions with Peer Influence: Barwick, Chen, Fu & Li (2026)"
description: >-
  Distilled: Mobile app usage is contagious among college roommates and
  causally harms academic performance, physical health, and labor market
  outcomes. The Quarterly Journal of Economics 2026, paywalled. Twenty-one core
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
    - time allocation and class attendance
    - sleep duration and sleep timing
    - health, stress, and job-search behaviors
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
  resultsCount: 21
  citedByCount: 5
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables, event-study]
    identification: instrument
  contributionType: [new-fact, new-data]
  introducesData: true
  mechanisms: [behavioral-bias, social-transmission, time-displacement, peer-environment-disruption]
  scope:
    region: China
    period: 2018-09..2024-06
    frequency: mixed
    dataType: [administrative, other]
    granularity: [individual]
    n: "7,479 undergraduates (2018-2020 cohorts); 6,430 matched to telecom data; 104,307 student-year-months (app use); 15,508 GPA and 12,288 PE student-semesters; 2,812 students (wages); 254,155 student-days (sleep)"
  findings:
    - { ref: R1, outcome: "own in-college mobile app usage", metric: coefficient, value: "0.050 log-log IV; 1 SD increase in roommates raises own usage 5.8% (Table III Panel A col (4))", direction: positive }
    - { ref: R2, outcome: "GPA for required courses", metric: sd-effect, value: "-36.2% of within-cohort-major SD (IV coefficient -0.613, Table V col (1))", direction: negative, vsBenchmark: "OLS -32.2% SD; IV larger, consistent with attenuation in OLS" }
    - { ref: R3, outcome: "GPA for required courses", metric: sd-effect, value: "-20.6% of within-cohort-major SD direct IV effect of roommates (coefficient -0.349, Table V col (1); 1-SD GPA impact -0.408 points per p. 32)", direction: negative }
    - { ref: R4, outcome: "GPA for required courses", metric: sd-effect, value: "-22.7% of within-cohort-major SD total peer effect via contagion + direct channels combined (p. 32)", direction: negative, vsBenchmark: "over 60% of own app usage effect (R2)" }
    - { ref: R5, outcome: "physical education (PE) score", metric: sd-effect, value: "2.74 PE score points per 1 SD in app usage (IV coefficient -2.350, Table V col (4))", direction: negative, vsBenchmark: "roughly 4x the GPA effect; roommates have no direct PE effect" }
    - { ref: R6, outcome: "initial monthly wages upon graduation (log)", metric: sd-effect, value: "-12.1% of within-cohort-major wage SD; 2.3% wage reduction (IV coefficient -0.020, Table VI col (4))", direction: negative }
    - { ref: R7, outcome: "initial monthly wages upon graduation (log)", metric: sd-effect, value: "-4.8% of within-cohort-major wage SD from roommates direct IV (-0.9% wage, Table VI col (4)); total via contagion -5.3% SD", direction: negative, vsBenchmark: "roughly half of own app usage wage effect (R6)" }
    - { ref: R8, outcome: "initial monthly wages upon graduation", metric: sd-effect, value: "4.8% of within-cohort-major wage SD (0.9% wage increase) from extending three-hour weekly gaming cap to college (back-of-envelope, pp. 36-37)", direction: positive, vsBenchmark: "half the wage premium from one extra year of work experience in developing countries" }
    - { ref: R9, outcome: "time of first arrival at study hall", metric: coefficient, value: "18.2 minutes later following Yuanshen release per mean precollege app usage SD (Table VII col (1))", direction: positive }
    - { ref: R10, outcome: "own in-college mobile app usage", metric: coefficient, value: "Roommates’ precollege-use coefficient 0.035 (s.e. 0.011); category coefficients 0.029 social media, 0.026 video, 0.036 games (Table II)", direction: positive }
    - { ref: R11, outcome: "own in-college mobile app usage", metric: coefficient, value: "Contextual peer coefficients 0.024 total apps, 0.017 games, 0.013 game+video, all statistically insignificant; corresponding behavioral coefficients 0.050, 0.078, 0.056 (Table IV)", direction: positive }
    - { ref: R12, outcome: "own in-college mobile app usage", metric: coefficient, value: "After-policy × roommates’ under-18 friends: -0.032 (s.e. 0.008) total apps, -0.034 (0.007) games, -0.037 (0.007) game+video; KP F 34.1, 31.2, 32.3", direction: negative }
    - { ref: R13, outcome: "GPA for required courses", metric: sd-effect, value: "Own game coefficient -0.816 (s.e. 0.226); game+video coefficient -0.681 (0.185); one-SD gaming lowers GPA 1.119 points, 56.6% of SD", direction: negative }
    - { ref: R14, outcome: "time allocation and class attendance", metric: coefficient, value: "Policy × own underage-friends coefficients: -0.064 first arrival, +0.073 last return, +0.137 study-hall duration, -0.054 dorm duration, -0.002 lateness (not significant), -0.007 class absence (Table VII)", direction: mixed }
    - { ref: R15, outcome: "sleep duration and sleep timing", metric: sd-effect, value: "Nighttime total app use per SD: sleep -30 minutes (7% of mean), late sleep +34 pp, late waking +4.5 pp; coefficients -0.199, +0.132, +0.018", direction: mixed }
    - { ref: R16, outcome: "sleep duration and sleep timing", metric: sd-effect, value: "Daytime total app use per SD: sleep -7.2 minutes (1.8% of mean), late waking +3.7 pp, no significant late-sleep effect; coefficients -0.029, +0.000, +0.009", direction: mixed }
    - { ref: R18, outcome: "physical education (PE) score", metric: coefficient, value: "Roommates’ app-use IV coefficient 0.140 (s.e. 0.325), statistically insignificant (Table V col (4))", direction: none }
    - { ref: R21, outcome: "time allocation and class attendance", metric: coefficient, value: "Yuanshen × own precollege app use: +0.010 (s.e. 0.002) for being at least 10 minutes late and +0.012 (0.002) for class absence (Table VII)", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Manski (1993)", doi: '10.2307/2298123', relation: builds-on, note: "reflection problem motivating the separation of behavioral from contextual peer effects" }
    - { cite: "Bramoullé, Djebbari, and Fortin (2020)", relation: builds-on, note: "framework for identifying behavioral and contextual peer effects in social networks" }
    - { cite: "Sacerdote (2001)", doi: '10.1162/00335530151144131', relation: builds-on, note: "random dormitory assignment as a strategy for causal peer-effects identification" }
    - { cite: "Stinebrickner and Stinebrickner (2008)", relation: extends, note: "extends their finding that roommates' video game console use harms GPA to mobile apps with peer contagion, wages, and health" }
  openQuestions:
    - "How digital distractions influence own and peers' outcomes through the intensive margin of study effort beyond the broad time-allocation and job-search-behavior evidence documented here (p. 44)."
    - "Whether digital distractions affect the aggregate economy through workplace productivity and firm-worker sorting, extending the individual college-student outcomes documented here (p. 44)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/PAOKUU", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full text read (pp. 1-49); nine results extracted from PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; two fixes: R3 findings[] mislabelled -0.408 as coefficient (table coeff is -0.349; -0.408 is 1-SD GPA impact per p. 32), R9 direction corrected from negative to positive (Table VII col (1) coefficient +0.067, later arrival = positive sign)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and augmented the Core results with twelve rows (nine quantitative findings), staged two mechanism terms, and added complete numbered equations, estimating specifications, and mechanism evidence. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Verified all 21 Core rows, equations, specifications, classifications, findings, prose, and frontmatter against the PDF; corrected R5 locator, R3 sign, R8 metric, R11 direction, sleep wording/specification, scope sample label, three missing cites, and an incorrect DOI; verdict pass." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf048", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-10-17; standard OUP paywalled model, not CC" }
  rightsSignalConflict: false
---

**What this is.** This page distils the paper's core results, the linear-in-means peer effects model it tests, and the shift-share IV identification strategy, with exact table and page locators. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf048). Replication data are available on Harvard Dataverse at [doi.org/10.7910/DVN/PAOKUU](https://doi.org/10.7910/DVN/PAOKUU).

## TL;DR

Using administrative records for 7,479 college students at a Chinese university linked to detailed mobile phone usage data from a major telecom carrier, the paper estimates causal effects of individual and peer app usage on academic performance, physical health, and early labor market outcomes. Three identification strategies address endogeneity: (i) the university's random dormitory assignment, (ii) a shift-share IV interacting the September 2020 launch of blockbuster game *Yuanshen* (Genshin Impact) with students' precollege app usage, and (iii) a shift-share IV interacting China's October 2019 minors' game restriction policy with the evolving count of each student's underage precollege friends. App usage is contagious: a one standard deviation (SD) increase in roommates' in-college app usage raises a student's own usage by 5.8%, driven by behavioral spillover rather than shared contextual traits. A one SD increase in own app usage reduces GPA for required courses by 36.2% of a within-cohort-major SD and initial wages by 2.3%. The total peer effect on GPA (combining contagion and the direct disruption channel) reaches 22.7% of a GPA SD, more than half the own-usage effect. High-frequency location and app-use data show less time in study halls and worse class attendance; separate sleep analyses associate heavier app use, especially at night, with less sleep. Extending China's gaming restriction to college students would boost initial wages by 0.9%, equivalent to roughly half the return to an additional year of work experience. The paper extends Stinebrickner and Stinebrickner (2008), who found roommates' video game console use harms GPA, by covering mobile apps across all categories, separating behavioral from contextual peer effects, and tracing consequences to wages and physical health.

## Core results

Magnitudes are as reported in the paper; `\*` / `\*\*` / `\*\*\*` = 10% / 5% / 1%. App usage measured in log hours; GPA on a 0-100 scale; wages in log RMB. All regressions control for class-by-gender (cohort-major-administrative-unit) and dorm-size fixed effects at minimum.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Behavioral peer effect on app usage**: 1 SD increase in roommates' in-college total app usage raises own usage by 5.8% | Table III Panel A col (4), p. 24; text p. 22; Table IV col (2), p. 26 | IV coefficient 0.050 (s.e. 0.030)\*; F-stat 34.5; contextual effect 0.024 (s.e. 0.032, insig.) |
| R2 | **Own app usage reduces GPA** (required courses, IV): 1 SD increase reduces GPA by 36.2% of within-cohort-major SD | Table V IV model col (1), p. 28; text p. 32 | IV coefficient -0.613\*\*\* (s.e. 0.214); KP F-stat 16.9; OLS -0.546\*\*\* |
| R3 | **Roommates' app usage reduces GPA** (direct channel, IV): 1 SD increase in roommates' usage reduces GPA by 20.6% of within-cohort-major SD | Table V IV model col (1), p. 28; text p. 32 | IV coefficient -0.349\*\* (s.e. 0.155) |
| R4 | **Total peer effect on GPA** combining contagion and direct channels: 22.7% of a GPA SD reduction per 1 SD roommate increase | p. 32 (derived from R1 and R3) | -0.450 GPA points; exceeds 60% of own-usage effect |
| R5 | **Own app usage reduces PE scores** (IV): 1 SD increase reduces PE grade by 2.74 points, roughly four times the GPA effect; no direct roommate PE effect | Table V, Panel B col (4), p. 28; text p. 32 | IV coefficient -2.350\*\*\* (s.e. 0.854); SD-normalized -2.74 points; roommates' IV coefficient 0.140 (insig.) |
| R6 | **Own app usage reduces initial wages** (IV): 1 SD increase reduces graduation wages by 2.3%, or 12.1% of within-cohort-major wage SD | Table VI IV model col (4), p. 34-35 | IV coefficient -0.020\*\*\* (s.e. 0.006); KP F-stat 317.3 |
| R7 | **Roommates' app usage reduces wages**: direct IV -0.9% (4.8% SD); total effect including contagion -1.0% (5.3% SD) | Table VI IV model col (4), p. 35 | IV coefficient -0.008\* (s.e. 0.005); total ~half of own-usage wage effect |
| R8 | **Policy counterfactual**: extending China's three-hour weekly gaming cap to college students would raise initial wages by 0.9%, equivalent to roughly half the return to one extra year of work experience | pp. 36-37 (back-of-envelope) | Restriction binds 34.3% of student-month observations; reduces average monthly gaming 12.1 to 7.65 hours at steady state |
| R9 | **Time-allocation mechanism**: *Yuanshen* release causes students to arrive at study halls 18.2 minutes later and return to dorms 23.4 minutes earlier; minors' restriction has the opposite sign | Table VII cols (1)-(2), p. 39 | Study-hall arrival: +18.2 min (Yuanshen); dorm return: -23.4 min (Yuanshen); effects evident in lateness and class absences |
| R10 | **Random-roommate reduced-form peer effects**: roommates’ precollege app use predicts own in-college use across app categories | Table II, p. 20; text p. 19 | Total app coefficient 0.035 (s.e. 0.011) for roommates and 0.190 (0.012) for own use; roommates’ coefficients: social media 0.029 (0.011), video 0.026 (0.010), games 0.036 (0.012); one-SD peer exposure raises total use 4.0% |
| R11 | **Behavioral versus contextual peer effects**: peer influence is concentrated in roommates’ behavior, while contextual characteristics are not statistically distinguishable from zero | Table IV, p. 26 | Total-app behavioral effect 0.050 (s.e. 0.030) versus contextual effect 0.024 (0.032); game 0.078 (0.034) versus 0.017 (0.034); game+video 0.056 (0.036) versus 0.013 (0.029) |
| R12 | **Restriction instrument first stage and identification checks**: policy exposure reduces app use through peers’ underage-friend networks, with no differential pre-trend reported | Table III Panel A, p. 24 (KP F); Panel B, p. 25 (first stage); Figure II Panel A, p. 23; text p. 22 | After-policy × roommates’ under-18 friends: -0.032 (0.008) for total app time, -0.034 (0.007) games, -0.037 (0.007) game+video; KP F-statistics 34.1, 31.2, 32.3 |
| R13 | **Game and game+video app use reduce required-course GPA**: IV effects are larger than the total-app estimate | Table V Panel B, p. 28; text p. 32 | Own game coefficient -0.816 (s.e. 0.226); game+video -0.681 (0.185); one-SD gaming increase lowers GPA 1.119 points, or 56.6% of within-cohort-major SD (text p. 32) |
| R14 | **Minors’ gaming restriction improves time allocation** across campus and academic attendance measures | Table VII, p. 39; text p. 38 | Policy × own underage-friends coefficients: first study-hall arrival -0.064 (s.e. 0.006), last dorm return +0.073 (0.007), study-hall duration +0.137 (0.012), dorm duration -0.054 (0.009), lateness -0.002 (0.001, not significant), class absence -0.007 (0.001); average-exposure effects are 17.4 minutes earlier and 19.8 minutes later, respectively (text p. 38) |
| R15 | **Nighttime app use is associated with worse sleep** in the 2020 cohort | Table VIII, p. 43; text p. 42 | Per one-SD increase in nighttime total app use: sleep duration falls about 30 minutes (7% of mean), late sleep rises 34 pp, late waking rises 4.5 pp; table coefficients -0.199 (s.e. 0.003), +0.132 (0.001), +0.018 (0.001) |
| R16 | **Daytime app use also predicts adverse sleep outcomes**, with no significant association with late sleep | Table VIII, p. 43; text p. 42 | Per one-SD increase in daytime total app use: sleep duration falls about 7.2 minutes (1.8% of mean), late waking rises 3.7 pp, late sleep has no significant effect; table coefficients -0.029 (s.e. 0.002), +0.009 (0.000), 0.000 (0.000) |
| R17 | **Survey evidence points to stress, health, job-search, and roommate channels**: heavier app users report worse health and more stress, fewer professional certificates and job applications, and roommate influence | Online Appendix Table C.7 as summarized at text p. 44 | Qualitative summary in the main text; appendix table is not included in this PDF artifact |
| R18 | **Roommates’ app use has no statistically significant direct effect on PE scores**, unlike own app use | Table V Panel B col (4), p. 28; discussion p. 30 | Roommates’ app-use IV coefficient 0.140 (s.e. 0.325), not significant |
| R19 | **Placebo outcomes support the shock exclusion restriction**: the *Yuanshen* launch and minors’ restriction affect gaming and related social/video apps, but not shopping or news apps | Online Appendix Table C.4 as summarized at text p. 31 | Main-text placebo conclusion; appendix estimates are not included in this PDF artifact |
| R20 | **Behavioral peer effects are stronger among heavy precollege users**, so the gaming-restriction wage counterfactual is described as a conservative lower bound | Text p. 37, referring to Online Appendix C.2 | Heterogeneity direction reported; subgroup magnitudes are not included in this PDF artifact |
| R21 | **The *Yuanshen* shock worsens class attendance** alongside time displacement | Table VII cols (5)-(6), p. 39 | Per interaction with own precollege app use: probability late by at least 10 minutes +0.010 (s.e. 0.002); absence +0.012 (0.002) |

**Overall (paper's conclusion).** Mobile app usage imposes economically significant costs on both users and their peers. Behavioral peer spillovers dominate contextual peer effects: roommates' app-use behavior matters more than their predetermined characteristics for the contagion. The negative consequences extend from academic performance to physical health and early wages. The paper documents changes in time allocation, sleep associations, and suggestive survey evidence on health, stress, and job-search behavior as potential mechanisms. A gaming restriction targeted at college students would meaningfully offset these costs.

## Theory / model

The paper uses a linear-in-means peer-effects framework rather than a structural model. Individual app use depends on own predetermined app use, roommates’ contemporaneous use (behavioral effects), and roommates’ predetermined characteristics (contextual effects). This is equation (1), printed on p. 18:

$$
\text{y}_{it} = \alpha + \gamma \text{x}_i + \beta \frac{1}{|N_i|}\sum_{j\in N_i}\text{y}_{jt} + \delta \frac{1}{|N_i|}\sum_{j\in N_i}\text{x}_j + \epsilon_{it} \tag{1}
$$

The primary hypotheses are that app use spreads through roommates’ behavior ($$\beta>0$$), that own and peer app use harm academic, health, and labor outcomes, and that time displaced from study and sleep is a channel. The authors use randomly assigned roommates for reduced-form peer effects, the minors’ gaming restriction interacted with predetermined friend-network exposure to isolate behavioral spillovers, and the *Yuanshen* launch interacted with precollege app use to instrument own and peer use. Their decomposition finds behavioral effects larger than contextual effects (Table IV, p. 26).

The paper frames the identification challenge using the reflection problem in Manski (1993) and the social-network peer-effects framework of Bramoullé, Djebbari, and Fortin (2020). Its use of random roommate assignment as a peer-effects design builds on Sacerdote (2001).

## Method

The reduced-form equation substitutes the peer outcome into the linear-in-means model. The paper’s equation (2) is printed on p. 18:

$$
\text{y}_{it} = \theta_{\alpha} + \theta_{\gamma_1}\text{x}_i + \theta_{\gamma_2}\frac{1}{|N_i|}\sum_{j\in N_i}\text{x}_j + \mathbf{z}'_{it}\rho + \eta_{cg} + \eta_m + \eta_t + \epsilon_{it} \tag{2}
$$

Here $$\theta_{\gamma_2}$$ is the reduced-form peer effect, $$\mathbf{z}_{it}$$ contains demographic controls, and the fixed effects are class-by-gender, dorm size, and month of sample. The outcomes are student-year-month app-use observations (104,307); standard errors are clustered by class (Table II, pp. 19-20). Roommate assignment identifies the reduced-form effects.

To isolate behavioral spillovers, equation (3) uses student fixed effects and 2SLS, instrumenting average roommates’ app use with the minors’ policy interacted with roommates’ evolving number of underage precollege friends. The equation appears on p. 21:

$$
\text{y}_{it} = \eta_i + \beta\frac{1}{|N_i|}\sum_{j\in N_i}\text{y}_{jt} + \epsilon_{it} \tag{3}
$$

The regression includes student and month-of-sample fixed effects. It uses student-year-months, excluding February, July, and August vacations; standard errors are clustered by class (Table III notes, p. 25). The IV estimate for total app use is 0.050 (s.e. 0.030) in the call-frequency weighted specification (Table III, p. 24). Contextual effects are recovered as the reduced-form estimate less the behavioral component, with delta-method standard errors (Table IV, p. 26).

The outcome regressions and first-stage equation are:

$$
\text{GPA}_{is} = \alpha_1\text{Phone}_{is} + \alpha_2\frac{1}{|N_i|}\sum_{j\in N_i}\text{Phone}_{js} + \alpha_3\text{CEE}_i\times\eta_s + \eta_i + \eta_{cs} + \epsilon_{is} \tag{4}
$$

Equation (4) is printed on p. 27. Here $$i$$ indexes students and $$s$$ semesters. It includes student and class-semester fixed effects and the CEE-score-by-linear-semester-trend control. GPA and PE are student-semester outcomes, excluding spring 2020; class-clustered standard errors are used (Table V notes, p. 29).

$$
\begin{aligned}
\text{y}_{is} ={}& \lambda_1\text{YS}_s\times\text{PrePhone}_i + \lambda_2\text{YS}_s\times\frac{1}{|N_i|}\sum_{j\in N_i}\text{PrePhone}_j \\
&+ \lambda_3\text{Policy}_s\times\text{Minor}_{is} + \lambda_4\text{Policy}_s\times\frac{1}{|N_i|}\sum_{j\in N_i}\text{Minor}_{js} + \lambda_5\text{Minor}_{is} + \lambda_6\frac{1}{|N_i|}\sum_{j\in N_i}\text{Minor}_{js} \\
&+ \text{CEE}_i\times\eta_s + \eta_i + \eta_{cs} + \epsilon_{is}
\end{aligned} \tag{5}
$$

Equation (5) is printed on p. 31. $$\text{YS}_s$$ and $$\text{Policy}_s$$ indicate the *Yuanshen* and minors’ policy shocks; $$\text{PrePhone}_i$$ is own precollege app use and $$\text{Minor}_{is}$$ is the evolving number of own precollege friends under 18. The roommate instruments are formed analogously. Table V reports 15,508 GPA student-semester observations and 12,288 PE observations; controls and fixed effects match equation (4), with class-clustered standard errors (Tables V notes, p. 29).

For one-time graduation outcomes, equation (6) replaces student fixed effects with observed student controls and the estimated ability proxy:

$$
\text{y}_i = \gamma_1\text{Phone}_i + \gamma_2\frac{1}{|N_i|}\sum_{j\in N_i}\text{Phone}_j + \mathbf{X}'_i\gamma_X + \eta_{cg} + \eta_m + \hat{\eta}_i + \epsilon_i \tag{6}
$$

Equation (6) appears on p. 33. The wage sample is 2,812 2018 and 2019 cohort graduates. Controls include demographics, own and roommates’ precollege use and characteristics, hometown fixed effects, class-by-gender and dorm-size fixed effects; the estimated GPA fixed effect $$\hat{\eta}_i$$ proxies for time-invariant ability. Standard errors are clustered by class (Table VI notes, p. 36).

## Empirical specifications

**Peer effects in app usage.** Equation (2) is estimated by OLS using random roommate assignments, class-by-gender, dorm-size, and month-of-sample fixed effects, with class-clustered standard errors and student-year-month observations (104,307; Table II notes, p. 20). Equation (3) is estimated by 2SLS with student and month fixed effects and class-clustered standard errors. The main sample excludes vacation months (Table III notes, p. 25). Figure II reports event-study estimates for the policy and *Yuanshen* shocks with the month before each shock normalized to zero; the text reports no differential pre-trend (pp. 22-23, 31).

**Academic and PE outcomes.** The main estimating specification is equation (4), estimated by OLS and 2SLS with own and roommates’ app use instrumented by the two shocks and their respective predetermined exposure measures. Fixed effects are student and class-semester, with CEE score interacted with the semester trend; standard errors are clustered by class. The GPA sample has 15,508 student-semester observations and excludes spring 2020; the PE sample has 12,288 observations because of missing scores (Tables V notes, pp. 28-29). The IV first stage is equation (5), p. 31. Kleibergen-Paap F statistics are 16.9, 14.3, and 19.6 for the three GPA app measures; Hansen J p-values are 0.29, 0.55, and 0.52 (Table V, p. 28). The text also reports no Yuanshen event-study pre-trend and a placebo check showing no effects on shopping or news apps (Figure II, p. 23; text p. 31, referring to Online Appendix Table C.4).

**Graduation wages.** Equation (6) is estimated by OLS and 2SLS on 2,812 students from the 2018 and 2019 graduating cohorts. Instruments are predicted app use from equation (5), averaged over semesters. Regressions include controls, hometown, class-by-gender, and dorm-size fixed effects, and the GPA ability proxy; standard errors are clustered by class (Table VI notes, p. 36).

**Daily time allocation.** The paper reuses the first-stage and outcome structure in equation (5) with daily time-allocation measures as the dependent variable. The six outcomes are study-hall arrival, dorm return, duration at each location, class lateness, and absence. Specifications include student, class-semester, week-of-sample, and day-of-week fixed effects, CEE-score-by-semester trend, and week-of-year interacted with precollege app use. The sample is student-days from September 2018 to June 2021, excluding weekends, holidays, and school breaks; Table VII reports between 1,357,527 and 1,488,711 observations and class-clustered standard errors (Table VII notes, p. 39).

**Sleep.** For the 2020 cohort, OLS relates student-day sleep duration, late sleep, and late waking to night or daytime app usage. The paper estimates separate regressions for night or daytime app use, rather than entering both measures together. The specification is:

$$
\text{SleepOutcome}_{itd} = \beta\text{AppTime}_{itd} + \eta_i + \eta_{cs} + \eta_w + \eta_{dow} + \text{CEE}_i\times\eta_s + \sum_q \delta_q\mathbf{1}\{\text{week-of-year}=q\}\times\text{PrePhone}_i + \epsilon_{itd}
$$

The article describes these controls rather than numbering a sleep equation; the expression above is schematic (Table VIII, p. 43). The sleep analysis uses 254,155 student-days from November 1, 2023, to June 30, 2024, excluding weekends and the February 2024 winter break. It includes student, class-semester, week-of-sample, and day-of-week fixed effects, plus CEE-score-by-semester-trend and week-of-year-by-precollege-use interactions; standard errors are clustered by class (Table VIII notes, p. 43). This is an observational OLS mechanism test; the article states that its earlier instruments predate the sleep sample (text p. 42).

**Survey mechanisms.** Survey regressions are descriptive and suggestive because the paper does not use IVs for the small survey sample. The main text reports correlations linking app use to stress and health, job-search behavior, awareness of addictiveness, and roommate relations (Online Appendix Table C.7 as summarized on p. 44). The appendix table and its numeric estimates are not part of this PDF artifact.

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

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. © The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved. This page is an extract-only LLM distillation by the Institute for Automated Research (initially distilled 2026-06-28; updated 2026-10-04). It is **not human-verified and not independently reproduced**.

> Barwick, Panle Jia, Siyu Chen, Chao Fu, and Teng Li. "Digital Distractions with Peer Influence: The Impact of Mobile App Usage on Academic and Labor Market Outcomes." *The Quarterly Journal of Economics* 141, no. 1 (2026): 1–49. DOI: [10.1093/qje/qjaf048](https://doi.org/10.1093/qje/qjaf048).
