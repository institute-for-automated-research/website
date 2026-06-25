---
title: "Not Too Late: Guryan, Ludwig et al. (2023)"
description: >-
  Distilled: Two large-scale RCTs (n=5,343) of high-dosage tutoring with
  paraprofessional tutors in Chicago public high schools find math test score
  gains of 0.18 SD (Study 1) and 0.40 SD (Study 2), persisting at 0.23 SD one to two
  years later. American Economic Review 2023, paywalled. Nine core results with
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
    - high school graduation rate
  outcomeClass: [educational-achievement]
  license: "paywalled (no license[] block found in Crossref works/10.1257/aer.20210434; AEA standard copyright)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 9
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
  resultType: new-finding
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
model of classroom production and the hypothesis that personalization of instruction
drives the gains, rather than a generic mentoring channel.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | TOT effect on math test score, Study 1 Year 1 | Table 3, p. 749 | TOT = 0.179 SD (0.066)\*\*\*, ITT = 0.091 (0.035)\*\*\*; CCM = -0.111 |
| R2 | TOT effect on math GPA, Study 1 Year 1 | Table 3, p. 749 | TOT = 0.571 GPA pts (0.079)\*\*\*; CCM = 1.617 (~C- to ~C+) |
| R3 | TOT decline in math course failure rate, Study 1 Year 1 | Table 3, p. 749 | TOT = -0.086 (0.026)\*\*\*; 48% decline from CCM 0.178 |
| R4 | TOT effect on math test score, Study 2 Year 1 | Table 4, p. 750 | TOT = 0.398 SD (0.105)\*\*\*, ITT = 0.135 (0.036)\*\*\*; CCM = -0.172 |
| R5 | TOT effect on math test score, pooled Year 1 | Table 5, p. 751 | TOT = 0.282 SD (0.059)\*\*\*; CCM = -0.143 |
| R6 | TOT effect on math GPA, pooled Year 1 | Table 5, p. 751 | TOT = 0.516 GPA pts (0.069)\*\*\*; CCM = 1.675 |
| R7 | TOT decline in math course failure rate, pooled Year 1 | Table 5, p. 751 | TOT = -0.086 (0.022)\*\*\*; 47% decline from CCM 0.184 |
| R8 | Persistent TOT on 11th grade math test score | Table 7, p. 753 | TOT = 0.232 SD (0.065)\*\*\*; CCM = -0.147 |
| R9 | TOT effect on on-time high school graduation | Table 7, p. 753 | TOT = 1.3pp (3.2pp); CCM = 78.3%; FDR q = 0.677 (null) |

**Overall (paper's conclusion).** High-dosage tutoring with paraprofessional tutors
raises math test scores by 0.18-0.40 SD within one academic year for disadvantaged
high school students - effect sizes comparable to what Fryer (2014) finds for tutoring
as a component of no-excuses charter schools. Effects persist at 0.23 SD in eleventh
grade math test scores and 0.25 GPA points (Table 7). No statistically significant
effects emerge on disciplinary outcomes, arrests, or graduation (the graduation
point estimate is positive but imprecise at 1.3pp). Benefit-cost ratios of 2.4-8.0
are comparable to the Abecedarian Project (1.9-2.2) and Perry Preschool (3.9-6.8).
The evidence is consistent with personalization of instruction as the primary mechanism,
supported by Banerjee et al. (2007) and by heterogeneity analysis showing larger
gains in classrooms with more heterogeneous math achievement levels (Figure 3, p. 759).
No detectable treatment effects on grit, conscientiousness, or locus of control rule
out a generic mentoring mechanism (p. 758).

## Theory / model

The paper adapts the Lazear (2001) educational production model to compare
whole-class instruction (with a credentialed teacher) against small-group tutoring
(with a lower-paid paraprofessional tutor). The model helps predict when tutoring
produces the largest gains relative to classroom instruction.

The school has $$S$$ students and a budget $$M$$ to spend on teachers. Teacher
quality depends on the wage according to $$V(w)$$, with $$V'(w) > 0$$. Hiring
$$M/w$$ teachers yields an average class size of

$$n = \frac{wS}{M}. \tag{4.1}$$

Each student's skill level is drawn independently from $$N(\mu, \sigma^2)$$. Following
Lazear (2001), students only learn when there are no classroom disruptions, which occurs
with probability $$p^n$$ where $$p$$ depends on classroom achievement heterogeneity:

$$p(\sigma^2) = \frac{e^{-\sigma^2}}{1 + e^{-\sigma^2}}. \tag{4.2}$$

The school chooses the teacher wage $$w$$ to solve (p. 756)

$$\max_w S V(w) \, p(\sigma^2)^{wS/M}. \tag{4.3}$$

The key comparative static is (p. 756)

$$\frac{\partial w^*}{\partial \sigma^2} = \frac{\left\{\tfrac{S}{M}\left[1 - p(\sigma^2)\right] V(w^*)^2\right\}}{V(w^*) V''(w^*) - V'(w^*)^2}. \tag{4.4}$$

This is negative whenever teacher quality is not too convex in wages - meaning the
optimal wage (and hence class size) decreases as classroom achievement heterogeneity
$$\sigma^2$$ rises. Equivalently, shifting budget toward smaller classes (or tutoring)
becomes more valuable as students become more heterogeneous. The model thus predicts
tutoring gains should be larger in classrooms with higher dispersion in student
achievement levels (confirmed in Figure 3, p. 759), rather than in classrooms with
higher prevalence of behavioral disruptions (Figure 2, p. 758).

The paper also develops a "mentoring" alternative hypothesis - that tutors build
adult relationships that improve noncognitive skills - and uses survey evidence to
rule it out (no detectable effect on grit, conscientiousness, locus of control, or
number of caring adults, p. 758).

## Method

**Estimation.** The paper estimates both the intention-to-treat (ITT) and the
treatment-on-the-treated (TOT) effect. The ITT comes from a simple OLS regression of
the outcome on the randomization indicator (equation (1) in the paper, p. 745):

$$Y_i = \pi_0 + \pi_1 Z_i + X_i \pi_2 + B_i + \varepsilon_i \tag{1}$$

where $$Y_i$$ is a post-randomization outcome for student $$i$$, $$Z_i$$ is an
indicator for assignment to the tutoring offer, $$X_i$$ is a vector of baseline
controls (sociodemographics, prior test scores, GPA, days absent, disciplinary
incidents, arrest history), and $$B_i$$ is a full set of randomization block fixed
effects. Standard errors are heteroskedasticity-robust (clustered by individual in
Study 2 due to the 65-student duplicate overlap).

**TOT via 2SLS.** Because take-up rates are 37-40%, the ITT understates the
per-participant effect. The paper uses random assignment $$Z_i$$ as an instrument
for actual participation $$D_i$$ (having attended at least one tutoring session), as
in Angrist, Imbens, and Rubin (1996) and H. Bloom (1984). The first-stage equation
is (p. 747):

$$D_i = \gamma_0 + \gamma_1 Z_i + X_i \gamma_2 + B_i + \mu_i \tag{2}$$

and the structural equation of interest is:

$$Y_i = \beta_0 + \beta_1 \hat{D}_i + X_i \beta_2 + B_i + \vartheta_i \tag{3}$$

where $$\hat{D}_i$$ is the fitted value from (2). The TOT coefficient $$\beta_1$$
identifies the local average treatment effect (LATE) for compliers.

**Multiple testing.** Outcomes are grouped into four families: (i) mathematics
achievement, (ii) nonmath academic achievement, (iii) school behavior, and
(iv) arrests. The paper reports false discovery rate (FDR) $$q$$-values using
Benjamini and Hochberg (1995). Nonparametric permutation tests (100,000 randomizations)
are also reported to guard against finite-sample inference issues (Young 2019).

## Empirical specifications

**Study 1 sample (2013-2014).** Of 2,633 randomized ninth and tenth grade male
students in 12 Chicago Public Schools, 2,103 enrolled in a study school. The
sample is almost entirely low-income Black and Hispanic students. Study 1 used a
2x2 factorial design that also independently randomized students to a metacognitive
behavioral intervention (Becoming a Man, BAM), which had been separately evaluated in
Heller et al. (2017). Take-up rate for the tutoring offer was 40.2%. First-stage
impact on participation: $$\gamma_1$$ in equation (2) is approximately 0.40
(Table 6, p. 753).

**Study 2 sample (2014-2015).** 2,710 ninth and tenth graders (male and female)
in 15 schools; 36.9% take-up. Study 2 replicated Study 1 in response to preliminary
Study 1 results and public-sector support from the city of Chicago.

**Primary outcomes.** CPS standardized math test scores (EXPLORE for ninth grade,
PLAN for tenth grade, both by ACT Inc.) are the primary outcome, expressed as
CPS-wide $$z$$-scores. Math course GPA and math course failure rate (share of math
courses with a failing grade) are secondary course-record outcomes from CPS
administrative data. In Study 1, a supplemental math test administered by the
Institute for Social Research (ISR) at the University of Michigan corroborates the
CPS test score results (ISR TOT = 0.199 SD, Table 3).

**Specification.** The ITT specification (equation 1) controls for school-level
randomization block fixed effects (Study 1) or school-grade-gender block fixed effects
(Study 2), plus: sociodemographic controls, baseline test scores, prior year GPA,
days absent, suspension days, disciplinary incidents, and arrest history. Missing
covariates are imputed to zero with a missingness indicator included.

**Follow-up outcomes.** Table 7 (p. 753) reports 11th grade outcomes pooling both
studies. The estimating equations are the same as above, but outcomes are measured
one to two years after the intervention year, in the academic year when students
would be in 11th grade. On-time graduation is estimated pooling all students in
both samples (N = 3,594 for on-time graduation, N = 3,614 for ever-graduated).

**Heterogeneity.** Subgroup ITT effects by baseline achievement quartile (Figure 1,
p. 756) show positive math GPA effects across all four quartiles, but math test score
gains only for the top three quartiles - consistent with floor effects in the test for
the lowest-achieving students. Classroom-level heterogeneity interactions (Figures 2
and 3, pp. 758-759) show larger tutoring gains in more heterogeneous classrooms
(by math achievement dispersion), consistent with the personalization channel of
the Lazear (2001) model.

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
