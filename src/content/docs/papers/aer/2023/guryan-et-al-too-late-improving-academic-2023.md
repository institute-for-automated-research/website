---
title: "Not Too Late: Guryan, Ludwig et al. (2023)"
description: >-
  Distilled: Two large-scale RCTs (n=5,343) of high-dosage tutoring with
  paraprofessional tutors in Chicago public high schools find math test score
  gains of 0.18 SD (Study 1) and 0.40 SD (Study 2), persisting at 0.23 SD one to two
  years later. American Economic Review 2023, paywalled. Thirty-seven core results with
  source locators, datasets used, the Lazear-based classroom model, and
  ITT/TOT regression specifications.
sidebar:
  label: Guryan-Ludwig et al. 2023
  order: 1
tags: [paper-summary, education, human-capital, inequality, tutoring, adolescents,
       instrumental-variables, panel-regression, peer-reviewed, unreplicated,
       data:cps-admin, data:chicago-police-dept]
paper:
  authors: >-
    Jonathan Guryan, Jens Ludwig, Monica P. Bhatt, Philip J. Cook,
    Jonathan M. V. Davis, Kenneth Dodge, George Farkas, Roland G. Fryer Jr.,
    Susan Mayer, Harold Pollack, Laurence Steinberg, Greg Stoddard
  authorList:
    - { family: Guryan, given: Jonathan, affiliation: Northwestern University }
    - { family: Ludwig, given: Jens, orcid: "0000-0002-2998-1696", affiliation: University of Chicago }
    - { family: Bhatt, given: "Monica P.", orcid: "0000-0003-3391-2228", affiliation: University of Chicago }
    - { family: Cook, given: "Philip J.", orcid: "0000-0001-5094-9052", affiliation: Duke University }
    - { family: Davis, given: "Jonathan M. V.", orcid: "0000-0001-5209-9768", affiliation: University of Oregon }
    - { family: Dodge, given: Kenneth, orcid: "0000-0001-5932-215X", affiliation: Duke University }
    - { family: Farkas, given: George, orcid: "0000-0002-1751-5612", affiliation: "University of California, Irvine" }
    - { family: Fryer, given: "Roland G.", orcid: "0000-0002-4512-423X", affiliation: Harvard University }
    - { family: Mayer, given: Susan, affiliation: University of Chicago }
    - { family: Pollack, given: Harold, affiliation: University of Chicago }
    - { family: Steinberg, given: Laurence, affiliation: Temple University }
    - { family: Stoddard, given: Greg, affiliation: University of Chicago }
  year: 2023
  venue: American Economic Review 113(3), March 2023, pp. 738-765
  venueShort: AER 2023
  doi: 10.1257/aer.20210434
  jel:
    codes: [I21, I24, J13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Parental Involvement in Education", "School Choice and Performance", "Global Educational Reforms and Inequalities"]
  dataAccess: proprietary-confidential
  outcome:
    - math test scores (standardized)
    - math course GPA
    - math course failure rate
    - nonmath academic outcomes
    - school behavior measures
    - arrests
    - high school graduation rate
    - socioemotional skills
    - program benefit-cost ratio
    - reading test scores
    - baseline student characteristics
    - tutoring participation
  outcomeClass: [educational-achievement]
  license: "paywalled (no license[] block found in Crossref works/10.1257/aer.20210434; AEA standard copyright)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 37
  citedByCount: 68
  introducesData: true
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: randomized
  contributionType: [new-fact, new-data]
  mechanisms: [personalization-of-instruction]
  scope:
    region: US
    period: 2013-09..2015-06
    frequency: annual
    dataType: [administrative, experimental, survey]
    granularity: [individual]
    n: "5,343 ninth and tenth graders across two RCTs, Chicago Public Schools"
  findings:
    - { ref: R1, outcome: "math test scores (standardized)", metric: sd-effect, value: "TOT = 0.179 SD (se = 0.066)", direction: positive, vsBenchmark: "Study 1 Year 1; CCM = -0.111" }
    - { ref: R2, outcome: "math course GPA", metric: coefficient, value: "TOT = 0.571 GPA points (se = 0.079)", direction: positive, vsBenchmark: "Study 1 Year 1; CCM = 1.617 (shift ~C- to ~C+)" }
    - { ref: R3, outcome: "math course failure rate", metric: pp-effect, value: "TOT = -0.086 (se = 0.026)", direction: negative, vsBenchmark: "Study 1 Year 1; 48% decline from CCM 0.178" }
    - { ref: R4, outcome: "math test scores (standardized)", metric: sd-effect, value: "TOT = 0.398 SD (se = 0.105)", direction: positive, vsBenchmark: "Study 2 Year 1; CCM = -0.172" }
    - { ref: R5, outcome: "math test scores (standardized)", metric: sd-effect, value: "TOT = 0.282 SD (se = 0.059)", direction: positive, vsBenchmark: "pooled Year 1; CCM = -0.143" }
    - { ref: R6, outcome: "math course GPA", metric: coefficient, value: "TOT = 0.516 GPA points (se = 0.069)", direction: positive, vsBenchmark: "pooled Year 1; CCM = 1.675" }
    - { ref: R7, outcome: "math course failure rate", metric: pp-effect, value: "TOT = -0.086 (se = 0.022)", direction: negative, vsBenchmark: "pooled Year 1; 47% decline from CCM 0.184" }
    - { ref: R8, outcome: "math test scores (standardized)", metric: sd-effect, value: "TOT = 0.232 SD (se = 0.065)", direction: positive, vsBenchmark: "11th grade persistent effect, pooled; CCM = -0.147" }
    - { ref: R9, outcome: "high school graduation rate", metric: pp-effect, value: "TOT = 1.3pp (se = 3.2pp)", direction: none, vsBenchmark: "on-time graduation; CCM = 78.3%; imprecise (FDR q = 0.677)" }
    - { ref: R10, outcome: "math test scores (standardized)", metric: sd-effect, value: "Study 1 supplemental ISR math test TOT = 0.199 SD (se = 0.090), FDR q = 0.029", direction: positive }
    - { ref: R11, outcome: "nonmath academic outcomes", metric: coefficient, value: "Study 1 nonmath GPA TOT = 0.173 (se = 0.068), q = 0.018; nonmath course failure TOT = -0.057 (se = 0.022), q = 0.018", direction: mixed }
    - { ref: R12, outcome: "reading test scores", metric: coefficient, value: "Study 1 reading test TOT = 0.033 (se = 0.074), FDR q = 0.657", direction: none }
    - { ref: R13, outcome: "school behavior measures", metric: coefficient, value: "Study 1 TOT: disciplinary incidents = 0.189 (se = 0.235); days absent = 0.441 (se = 1.960); suspensions = 0.424 (se = 0.345); q = 0.631-0.823", direction: none }
    - { ref: R14, outcome: "arrests", metric: coefficient, value: "Study 1 arrest outcome TOT estimates range from -0.038 to 0.047; FDR q = 0.624-0.929", direction: none }
    - { ref: R15, outcome: "math course GPA", metric: coefficient, value: "Study 2 math GPA TOT = 0.412 (se = 0.122), FDR q = 0.002", direction: positive, vsBenchmark: "CCM = 1.795" }
    - { ref: R16, outcome: "math course failure rate", metric: coefficient, value: "Study 2 math course failure TOT = -0.080 (se = 0.037), FDR q = 0.029", direction: negative, vsBenchmark: "43% decline from CCM = 0.185" }
    - { ref: R17, outcome: "nonmath academic outcomes", metric: coefficient, value: "Study 2 nonmath GPA TOT = 0.181 (se = 0.100), q = 0.208; nonmath failure = -0.030 (se = 0.028), q = 0.434; behavioral and arrest outcomes also nonsignificant after FDR correction", direction: none }
    - { ref: R18, outcome: "nonmath academic outcomes", metric: coefficient, value: "Pooled nonmath GPA TOT = 0.184 (se = 0.058), q = 0.005; nonmath course failure TOT = -0.048 (se = 0.018), q = 0.012", direction: mixed }
    - { ref: R19, outcome: "school behavior measures", metric: coefficient, value: "Pooled reading, disciplinary, suspension, and arrest outcomes are not statistically detectable after FDR correction; pooled arrest q = 0.287", direction: none }
    - { ref: R20, outcome: "math test scores (standardized)", metric: sd-effect, value: "Study 1 Year 2: per-year participation TOT = 0.228 SD (se = 0.050); upper bounds = 0.305 SD for any participation and 0.835 SD for two years", direction: positive }
    - { ref: R21, outcome: "math course GPA", metric: coefficient, value: "Study 1 Year 2 per-year participation TOT: math GPA = 0.180 (se = 0.065); math course failures = -0.080 (se = 0.035)", direction: mixed }
    - { ref: R22, outcome: "math course GPA", metric: coefficient, value: "Pooled 11th-grade math GPA TOT = 0.251 (se = 0.086), FDR q = 0.004", direction: positive }
    - { ref: R23, outcome: "high school graduation rate", metric: probability, value: "Ever graduated TOT = 0.000 (se = 0.029), FDR q = 0.996", direction: none }
    - { ref: R24, outcome: "high school graduation rate", metric: pp-effect, value: "Grade-retention effects ruled out beyond +/- 3 percentage points in ITT terms", direction: none }
    - { ref: R25, outcome: "math test scores (standardized)", metric: sd-effect, value: "Lee-bound lower effects remain beneficial except Study 1 math test lower bound = -0.008 and Study 2 nonmath GPA lower bound = -0.009", direction: mixed }
    - { ref: R26, outcome: "math test scores (standardized)", metric: coefficient, value: "Tutoring x BAM-assignment interactions: math test scores = 0.08, math GPA = -0.04, math course failures = 0.004; all imprecise and insignificant", direction: mixed }
    - { ref: R30, outcome: "math test scores (standardized)", metric: coefficient, value: "Baseline-achievement groups: math GPA effects positive in all four quartiles; math-test effects positive in the top three quartiles but not the bottom quartile", direction: positive }
    - { ref: R31, outcome: "math test scores (standardized)", metric: coefficient, value: "Classroom-discipline interactions are mostly modest and imprecise; test-score treatment effects are significantly smaller with more baseline misconduct", direction: negative }
    - { ref: R32, outcome: "math test scores (standardized)", metric: coefficient, value: "Classroom achievement-dispersion interactions are positive in 11 of 12 plotted estimates, generally imprecise", direction: positive }
    - { ref: R33, outcome: "socioemotional skills", metric: sd-effect, value: "95% CIs rule out ITT effects above 0.10 SD for grit, 0.16 SD for conscientiousness, and 0.10 SD for locus of control", direction: none }
    - { ref: R34, outcome: "program benefit-cost ratio", metric: level, value: "Study 1 BCR = 2.4-3.6 (PDV earnings gain $11,500); Study 2 BCR = 5.4-8.0 (PDV earnings gain $25,700)", direction: positive }
    - { ref: R35, outcome: "baseline student characteristics", metric: p-value, value: "Joint treatment-control balance test p = 0.798 in Study 1 and p = 0.273 in Study 2", direction: none }
    - { ref: R36, outcome: "tutoring participation", metric: probability, value: "At least one tutoring session: treatment take-up = 40.2% in Study 1 and 36.9% in Study 2; control participation = 1.1% and 7.8%", direction: positive }
    - { ref: R37, outcome: "tutoring participation", metric: coefficient, value: "Study 1 Year 2 assignment first stage: years participated = 0.563 (0.020), any participation = 0.423 (0.014), two years = 0.139 (0.010)", direction: positive }
  resultType: mixed
  relatesTo:
    - { cite: "Lazear (2001)", doi: '10.1162/00335530152466232', relation: builds-on, note: "Mechanism model adapted from Lazear's educational production framework; school optimizes over class size and teacher wage given classroom achievement heterogeneity" }
    - { cite: "Banerjee et al. (2007)", relation: extends, note: "Extends the Pratham NGO paraprofessional tutoring model (India) to US public high schools at larger scale" }
    - { cite: "Nickow, Oreopoulos, and Quan (2020)", doi: '10.3386/w27476', relation: cites, note: "Meta-analysis of tutoring evidence; provides context on paraprofessionals vs credentialed teachers" }
    - { cite: "Fryer (2014)", doi: '10.1093/qje/qju011', relation: tests, note: "Tests whether tutoring, identified as the main component in no-excuses charter schools, accounts for the observed achievement gains" }
    - { cite: "Heller et al. (2017)", doi: '10.1093/qje/qjw033', relation: extends, note: "Extends the Chicago BAM cognitive-behavioral RCT in the same CPS schools by adding an academic intervention" }
  openQuestions:
    - "Whether the effect would hold with less-selective tutor hiring or at larger scale where tutor quality may decline (pp. 760-761)"
    - "The degree to which hybrid tutor-CAL (computer-assisted learning) models preserve effectiveness while increasing student-tutor ratios (p. 761)"
    - "Whether virtual tutoring matches the effectiveness of in-person tutoring (p. 760)"
    - "Whether the null graduation effect reflects a true null or insufficient statistical power (Table 7, p. 753)"
  replicationCode: { url: "https://doi.org/10.3886/E182903V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read PDF in full; all magnitudes verified against Tables 3-7 and Figure 1; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 9 Core results rows confirmed against Tables 3-7 (p. 749-753); equations (1)-(3) and theory model (4.1)-(4.4) verified term-by-term; fixed two errors: description 'two years later' corrected to 'one to two years later', and R9 vsBenchmark 'p = 0.677' corrected to 'FDR q = 0.677'." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF; appended main-text results and expanded the formal sections with equations and estimating specifications. Not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; all 37 Core results rows, equations, specifications, classification axes, findings, and frontmatter checked; corrected null-result directions, an unreported significance marker, the Table 2 locator, mechanism wording, and a missing Heller et al. body mention; flagged an omitted female-benefit headline." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20210434", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block present; AEA standard copyright applies; article is paywalled" }
---

**What this is.** A distilled skeleton of Guryan, Ludwig et al. (2023). Read the
[original article](https://doi.org/10.1257/aer.20210434) to replicate or extend; this
page records the headline results with PDF locators, the model equations, and the
datasets used, as extracted by an LLM and not yet human-verified.

## TL;DR

Two separate randomized controlled trials (RCTs) of high-dosage tutoring for
disadvantaged high school students in Chicago test whether paraprofessional tutors
working at a 2:1 student-to-tutor ratio for 50 minutes per school day can raise math
achievement. Study 1 (n = 2,633, 2013-2014) and Study 2 (n = 2,710, 2014-2015) both
find large positive treatment effects on math test scores (0.18 SD and 0.40 SD,
respectively) and math course grades, with no detectable effect on arrests or disciplinary
outcomes. Pooling the two studies, the treatment-on-the-treated (TOT) effect on math
test scores is 0.28 SD. Effects persist: one to two years after tutoring, math test
scores remain 0.23 SD higher in eleventh grade. The benefit-cost ratio (2.4-8.0 depending
on study) is in the range of well-known early childhood programs such as the Abecedarian
Project and the Perry Preschool Program. The results are consistent with Lazear (2001)'s
model of classroom production. Evidence is suggestive of personalization as a mechanism,
while measured outcomes provide little support for a generic mentoring explanation.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | TOT effect on math test score, Study 1 Year 1 | Table 3, p. 749 | TOT = 0.179 SD (0.066), ITT = 0.091 (0.035); CCM = -0.111 |
| R2 | TOT effect on math GPA, Study 1 Year 1 | Table 3, p. 749 | TOT = 0.571 GPA pts (0.079); CCM = 1.617 (~C- to ~C+) |
| R3 | TOT decline in math course failure rate, Study 1 Year 1 | Table 3, p. 749 | TOT = -0.086 (0.026); 48% decline from CCM 0.178 |
| R4 | TOT effect on math test score, Study 2 Year 1 | Table 4, p. 750 | TOT = 0.398 SD (0.105), ITT = 0.135 (0.036); CCM = -0.172 |
| R5 | TOT effect on math test score, pooled Year 1 | Table 5, p. 751 | TOT = 0.282 SD (0.059); CCM = -0.143 |
| R6 | TOT effect on math GPA, pooled Year 1 | Table 5, p. 751 | TOT = 0.516 GPA pts (0.069); CCM = 1.675 |
| R7 | TOT decline in math course failure rate, pooled Year 1 | Table 5, p. 751 | TOT = -0.086 (0.022); 47% decline from CCM 0.184 |
| R8 | Persistent TOT on 11th grade math test score | Table 7, p. 753 | TOT = 0.232 SD (0.065)\*\*\*; CCM = -0.147 |
| R9 | TOT effect on on-time high school graduation | Table 7, p. 753 | TOT = 1.3pp (3.2pp); CCM = 78.3%; FDR q = 0.677 (null) |
| R10 | Supplemental research-team math test, Study 1 | Table 3, p. 749 | TOT = 0.199 SD (0.090); FDR q = 0.029 |
| R11 | Nonmath GPA and nonmath course failures, Study 1 | Table 3, p. 749 | GPA TOT = 0.173 (0.068), CCM = 1.611, q = 0.018; failure TOT = -0.057 (0.022), CCM = 0.221, q = 0.018 |
| R12 | Reading-test null, Study 1 | Table 3, p. 749 | TOT = 0.033 (0.074); FDR q = 0.657 |
| R13 | Disciplinary outcomes, Study 1 | Table 3, p. 749 | TOT: incidents = 0.189 (0.235), absences = 0.441 (1.960), suspensions = 0.424 (0.345); FDR q = 0.631-0.823 |
| R14 | Arrest outcomes, Study 1 | Table 3, p. 749 | TOT estimates: violent -0.038 (0.035), property -0.025 (0.025), drug 0.047 (0.032), other -0.005 (0.053), ever -0.018 (0.031), any -0.021 (0.087); FDR q = 0.624-0.929 |
| R15 | Math GPA, Study 2 | Table 4, p. 750 | TOT = 0.412 (0.122); CCM = 1.795; FDR q = 0.002 |
| R16 | Math course failures, Study 2 | Table 4, p. 750 | TOT = -0.080 (0.037); 43% decline from CCM = 0.185; FDR q = 0.029 |
| R17 | Nonmath, behavioral, and arrest spillovers, Study 2 | Table 4, p. 750 | No statistically significant spillovers after FDR correction; nonmath GPA TOT = 0.181 (0.100), q = 0.208; total arrests TOT = -0.286 (0.151), q = 0.219 |
| R18 | Nonmath academic spillovers, pooled studies | Table 5, p. 751 | Nonmath GPA TOT = 0.184 (0.058), q = 0.005; course failures TOT = -0.048 (0.018), q = 0.012 |
| R19 | Reading, behavior, and arrest null results, pooled studies | Table 5, p. 751 | Reading TOT = 0.019 (0.065), q = 0.774; discipline, suspension, and arrest results not detectable (arrest q = 0.287) |
| R20 | Year 2 test-score effect and participation bounds, Study 1 | Table 6, p. 753 | Per year of tutoring TOT = 0.228 SD (0.050); upper bound = 0.305 for at least one year and 0.835 for two years |
| R21 | Year 2 math GPA and course-failure effects, Study 1 | Table 6, p. 753 | Per-year TOT: GPA = 0.180 (0.065); failures = -0.080 (0.035) |
| R22 | Persistent 11th-grade math GPA | Table 7, p. 753 | TOT = 0.251 (0.086); CCM = 1.837; FDR q = 0.004 |
| R23 | Ever graduated from high school | Table 7, p. 753 | TOT = 0.000 (0.029); CCM = 0.865; FDR q = 0.996 |
| R24 | Grade-retention balance check | text p. 752 | Authors rule out treatment-control differences in grade retention larger than +/- 3 percentage points in ITT terms |
| R25 | Missing-outcome and Lee-bound robustness | text p. 754 | Lee lower bounds are beneficial except Study 1 math scores = -0.008 and Study 2 nonmath GPA = -0.009 |
| R26 | Interaction with the Becoming a Man intervention | text p. 754 | Tutoring interactions: math test score = 0.08, math GPA = -0.04, math course failures = 0.004; imprecise and insignificant |
| R27 | Similar results across ninth- and tenth-grade cohorts | text p. 754 | Authors report similar results despite different counterfactual courses |
| R28 | No detectable treatment-effect difference by race/ethnicity | text p. 754 | Treatment interactions do not show detectably different effects for Black and Hispanic students |
| R29 | Spillover attenuation check | text p. 754 | Estimated block treatment effects rise with treatment assignment share, opposite the attenuation prediction |
| R30 | Heterogeneity by baseline achievement | Figure 1, p. 756 | Math GPA effects positive in all four quartiles; math-test effects positive in the top three, consistent with a bottom-quartile floor effect |
| R31 | Classroom discipline as a mechanism | Figure 2, p. 758 | Interaction estimates are modest and imprecise with one exception: math-test effects are significantly smaller where baseline misconduct prevalence is higher |
| R32 | Classroom math-achievement heterogeneity as a mechanism | Figure 3, p. 759 | Tutoring interaction estimates are positive in 11 of 12 plotted estimates, generally imprecise |
| R33 | Null evidence for a generic mentoring channel | text p. 758 | No detectable change in caring-adult count; 95% CIs rule out effects above 0.10 SD for grit, 0.16 SD for conscientiousness, and 0.10 SD for locus of control |
| R34 | Earnings-based benefit-cost analysis | text pp. 759-760 | PDV earnings gains: $11,500 (Study 1), $25,700 (Study 2); benefit-cost ratios: 2.4-3.6 and 5.4-8.0, respectively |
| R35 | Randomization balance diagnostic | Table 2, p. 746 | Joint baseline-characteristic balance test p = 0.798 (Study 1), p = 0.273 (Study 2) |
| R36 | First-stage take-up of at least one tutoring session | text p. 749 | Treatment take-up = 40.2% (Study 1), 36.9% (Study 2); control participation = 1.1%, 7.8% |
| R37 | Year 2 participation first stage, Study 1 | Table 6, p. 753 | Assignment effect: years of tutoring = 0.563 (0.020), at least one year = 0.423 (0.014), two years = 0.139 (0.010) |

**Overall (paper's conclusion).** High-dosage tutoring with paraprofessional tutors
raises math test scores by 0.18-0.40 SD within one academic year for disadvantaged
high school students - effect sizes comparable to what Fryer (2014) finds for tutoring
as a component of no-excuses charter schools. Effects persist at 0.23 SD in eleventh
grade math test scores and 0.25 GPA points (Table 7). No statistically significant
effects emerge on disciplinary outcomes, arrests, or graduation (the graduation
point estimate is positive but imprecise at 1.3pp). Benefit-cost ratios of 2.4-8.0
are comparable to the Abecedarian Project (1.9-2.2) and Perry Preschool (3.9-6.8).
The evidence is suggestive of personalization of instruction as a mechanism,
supported by Banerjee et al. (2007) and by heterogeneity analysis showing larger
gains in classrooms with more heterogeneous math achievement levels (Figure 3, p. 759),
though those interaction estimates are generally imprecise. No detectable treatment
effects on grit, conscientiousness, or locus of control provide little support for a
generic mentoring explanation (p. 758).

## Theory / model

The paper adapts Lazear (2001)'s classroom-production framework. A school has S
students and budget M for teachers; teacher quality is V(w), and average class
size is n = wS/M. Student achievement heterogeneity is indexed by variance
\(\sigma^2\), and the probability of learning without disruption falls as
heterogeneity rises. The paper's model equations are unnumbered in the article
(pp. 756-757):

$$
n = \frac{wS}{M}
$$

$$
p(\sigma^2) = \frac{e^{-\sigma^2}}{1 + e^{-\sigma^2}}
$$

$$
\max_w SV(w) p(\sigma^2)^{wS/M}
$$

$$
\frac{\partial w^*}{\partial \sigma^2} = \frac{\left\{\frac{S}{M}[1-p(\sigma^2)]V(w^*)^2\right\}}{V(w^*)V''(w^*)-[V'(w^*)]^2}
$$

The comparative static is negative when teacher quality is not too convex in
wages: more classroom achievement dispersion makes smaller classes or tutoring
more valuable. The paper tests two channels: reducing behavior-related
classroom disruption, and personalizing instruction to achievement levels. The
author's interpretation is that achievement heterogeneity, rather than baseline
classroom misconduct, predicts larger gains (Figures 2-3, pp. 758-759).

## Method

Assignment to tutoring was randomized. The intention-to-treat equation (1),
printed on p. 745, is:

$$
\text{Y}_i = \pi_0 + \pi_1\text{Z}_i + \text{X}_i\pi_2 + \text{B}_i + \varepsilon_i \tag{1}
$$

Here Z is the offer, X contains baseline covariates, and B denotes randomization
block fixed effects. The treatment-on-the-treated estimate uses random assignment
as an instrument for participation. The first stage and outcome equation (2)-(3),
printed on pp. 746-747, are:

$$
\text{D}_i = \gamma_0 + \gamma_1\text{Z}_i + \text{X}_i\gamma_2 + \text{B}_i + \mu_i \tag{2}
$$

$$
\text{Y}_i = \beta_0 + \beta_1\hat{\text{D}}_i + \text{X}_i\beta_2 + \text{B}_i + \vartheta_i \tag{3}
$$

Equation (3) uses the fitted participation indicator from the first stage; Z is the instrument and beta1 is the
complier effect under the IV assumptions. The paper also reports FDR-adjusted
q-values by outcome family and permutation-test inference using 100,000
randomizations (analysis plan, pp. 745-748).

## Empirical specifications

Equations (1)-(3) include randomization-block fixed effects and baseline controls
for sociodemographics, pre-randomization test scores, prior GPA, absences,
suspensions, disciplinary incidents, and arrest history. Missing covariates are
set to zero with missingness indicators; only observations with observed outcomes
are used. Standard errors are heteroskedasticity robust. Study 2 and pooled
estimates cluster standard errors by individual because 65 students were
randomized twice. Table notes for Tables 3-7 (pp. 749-753) report these details.

Study 1 includes 2,633 male ninth- and tenth-graders; Study 2 includes 2,710
students of both sexes; pooled Year 1 analyses include 5,343 students. The main
outcome tables estimate ITT and 2SLS TOT separately by study and pooled cohort.
The Year 2 specification uses years of participation as the endogenous treatment
and random assignment as its instrument (Table 6, p. 753). As described on
pp. 751-752, the TOT is a weighted average of persistent Year 1 effects and the
incremental Year 2 effect. Its reported upper bounds assume one component is
zero while the component effects are nonnegative.

Study 1 included Becoming a Man (BAM) in a 2 × 2 factorial design, building on the
Chicago intervention reported in Heller et al. (2017).

The paper's subgroup specification replaces the treatment indicator with
interactions for baseline achievement quartiles (Figure 1, p. 756; written out
from the figure note):

$$
\text{Y}_i = \alpha + \sum_{q=1}^{4} \beta_q \text{Z}_i\mathbf{1}(\text{Q}_i=q) + \sum_{q=1}^{4} \lambda_q\mathbf{1}(\text{Q}_i=q) + \text{X}_i\gamma + \text{B}_i + \varepsilon_i
$$

The classroom interaction specification (Figures 2-3, pp. 758-759; written out
from the figure notes) is the TOT model:

$$
\text{Y}_i = \alpha + \beta \text{D}_i + \delta \text{H}_i + \theta(\text{D}_i \times \text{H}_i) + \text{X}_i\gamma + \text{B}_i + \varepsilon_i
$$

Here H is a classroom-discipline or achievement-dispersion measure. The
endogenous terms D and D x H are instrumented by assignment Z and Z x H. Both
specifications retain block fixed effects and the standard baseline controls;
the figures report confidence intervals for the interaction estimates. These
specifications are not numbered in the article.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| Chicago Public Schools (CPS) Student Administrative Records | Primary outcomes (test scores, GPA, course failures, attendance, disciplinary actions); enrollment and school records; baseline covariates for Study 1 and Study 2 | no page yet |
| CPS standardized tests (EXPLORE, PLAN by ACT Inc.) | Primary math outcome, expressed as CPS-wide z-scores | no page yet |
| Chicago Police Department (CPD) Arrest Records | Secondary outcome family (violent, property, drug, other arrests) | no page yet |
| ISR Survey Data (Institute for Social Research, Univ. of Michigan) | Math achievement test administered by research team; survey measures of noncognitive skills, adult relationships, risky behavior | no page yet |
| Saga Education internal records | Tutoring attendance and dosage; tutor characteristics; Saga internal math assessments | no page yet |

**Sample scope.** Study 1: 2,633 ninth and tenth grade male students in 12 CPS
high schools, 2013-2014 academic year. Study 2: 2,710 ninth and tenth grade
students (male and female) in 15 CPS high schools, 2014-2015. Pooled N = 5,343.
Average baseline math score in both samples was 8-15 percentile points below the
CPS-wide average (Table 1, p. 746).

## When to read the full paper

Read the original if you are: (a) designing or scaling a tutoring program for
secondary students and need the benefit-cost analysis (Section IV, pp. 759-761);
(b) studying the mechanisms of educational production (Lazear (2001) model,
Section III, pp. 755-759); (c) assessing the credibility of ITT/TOT estimates
in large-scale school RCTs (Section II.D, pp. 745-748 for the analysis plan and
multiple-testing corrections); or (d) building on the evidence for high-dosage
tutoring reviewed in Nickow, Oreopoulos, and Quan (2020). Table 3 and Table 4
are the primary results tables by study; Table 5 (pooled) and Table 7 (persistent
effects) are the synthesis tables of most interest for policy.

## Attribution and rights

Guryan, Jonathan, Jens Ludwig, Monica P. Bhatt, Philip J. Cook, Jonathan M. V.
Davis, Kenneth Dodge, George Farkas, Roland G. Fryer Jr., Susan Mayer, Harold
Pollack, Laurence Steinberg, and Greg Stoddard. 2023. "Not Too Late: Improving
Academic Outcomes among Adolescents." *American Economic Review* 113(3): 738-765.
https://doi.org/10.1257/aer.20210434

Replication data: https://doi.org/10.3886/E182903V1

This page contains LLM-distilled extracts only (extract-only; paywalled article).
Not human-verified. Not reproduced. Read the original for any replication or
downstream use.
