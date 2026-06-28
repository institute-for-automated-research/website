---
title: "Diversifying Society's Leaders: Chetty, Deming & Friedman (2026)"
description: >-
  Distilled: Using anonymized admissions data linked to federal tax records,
  Chetty, Deming, and Friedman show that top-0.1% income families are 2.5x more
  likely than middle-class applicants to gain admission to Ivy-Plus colleges with
  identical test scores, driven by legacy preferences (46%), nonacademic credentials
  (31%), and athletic recruitment (24%), none of which predict postcollege success.
  Attending an Ivy-Plus college instead of an average flagship public college
  causally increases the probability of reaching the top 1% of earnings by 5 pp
  and triples chances of working at an elite firm. Quarterly Journal of Economics
  141(1), 2026, paywalled. Eight core results with source locators, the statistical
  model, and both research designs. LLM-distilled; not human-verified.
sidebar:
  label: Chetty-Deming-Friedman 2026
  order: 1
tags: [paper-summary, higher-education, inequality, social-mobility, income-mobility,
       elite-colleges, admissions, panel-regression, peer-reviewed, unreplicated,
       data:irs-tax-records, data:college-board-sat, data:act-scores, data:nslds]
paper:
  authors: Raj Chetty, David J. Deming, John N. Friedman
  authorList:
    - { family: Chetty, given: Raj, orcid: "0000-0001-8610-8546", affiliation: Harvard University and NBER }
    - { family: Deming, given: David J., affiliation: Harvard University and NBER }
    - { family: Friedman, given: John N., affiliation: Brown University and NBER }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 51-145
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf050
  jel:
    codes: [I23, J24, J62]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Higher Education Research Studies", "Medical Education and Admissions", "Occupational and Professional Licensing Regulation"]
  dataAccess: proprietary-confidential
  outcome:
    - Ivy-Plus college attendance rate by parental income conditional on test scores
    - probability of reaching top 1% of earnings at age 33
    - probability of attending elite graduate school
    - probability of working at an elite or prestigious firm at age 25
    - share of Ivy-Plus students from below top 5% of parental income under counterfactual admissions policies
  outcomeClass: [labor-careers-health, educational-choices]
  license: "All rights reserved. Published by Oxford University Press on behalf of President and Fellows of Harvard College. OUP standard publication model (CHORUS); not open access. Commercial re-use requires permission from reprints@oup.com"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (OUP site, confirmed 2026-06-28)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 11
  introducesData: true
  methods:
    role: both
    contributes: multiple-rater-admissions-test
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression]
    identification: instrument
  contributionType: [new-fact, new-method, measurement]
  scope:
    region: US
    period: 1996-01..2021-12
    frequency: annual
    dataType: [administrative]
    granularity: [individual]
    n: "5,063,263 in pipeline sample; 486,150 Ivy-Plus college-specific; 1,877,770 flagship public college-specific (Table I, p. 72); entering classes 2010-2015 for main analysis"
  findings:
    - { ref: R1, outcome: "Ivy-Plus admission rate by parental income conditional on test scores", metric: probability, value: "top 0.1% families 2.5x more likely to be admitted than middle class (70th-80th pctile) with comparable test scores; 99th-99.9th pctile 44% more likely (Figure III Panel B, p. 80)", direction: positive }
    - { ref: R2, outcome: "fraction of income gap in Ivy-Plus attendance explained by admissions vs. application or matriculation", metric: probability, value: "68% (114 of 168 excess top-1% students from admissions-related factors): 52 from legacy preferences, 35 from nonacademic credentials, 27 from athletic recruitment (Table II, pp. 77, 82)", direction: positive }
    - { ref: R3, outcome: "probability of reaching top 1% of earnings at age 33", metric: pp-effect, value: "5.01 pp (SE 1.31); from 11.8% to 16.8%, +42% (Table IV col. 1 and 6, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college (rescaled waitlist design)" }
    - { ref: R4, outcome: "probability of attending elite graduate school", metric: pp-effect, value: "5.64 pp (SE 2.79); from 6.1% to 11.7%, +92% (Table IV Panel B, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college" }
    - { ref: R5, outcome: "probability of working at an elite firm at age 25", metric: pp-effect, value: "16.96 pp (SE 4.01); from 8.5% to 25.5%, +199% (Table IV Panel B, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college" }
    - { ref: R6, outcome: "probability of working at a prestigious firm at age 25", metric: pp-effect, value: "17.51 pp (SE 4.26); from 7.2% to 24.7%, +245% (Table IV Panel B, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college" }
    - { ref: R7, outcome: "postcollege outcomes of Ivy-Plus applicants by application credentials adjusted for college quality", metric: coefficient, value: "legacy negative (negatively associated with top-1% probability, p. 129); nonacademic rating approx. 0 (no significant association); athlete approx. 0 (no significant association); high academic rating +4.8 pp on top-1% probability (Figure XV Panel B, p. 129)", direction: mixed }
    - { ref: R8, outcome: "income distribution of Ivy-Plus students under counterfactual admissions policies", metric: pp-effect, value: "eliminating legacy + nonacademic + athlete advantages: top-1% parental income share falls 15.8% to 9.9%; bottom-95% share rises 8.8 pp (Table V Panel A rows 1-4, p. 133)", direction: positive, vsBenchmark: "comparable to effects of race-based affirmative action on Black/Hispanic share (Card 2017)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Dale and Krueger (2002)", doi: '10.1162/003355302320935089', relation: extends, note: "paper finds large causal effects on upper-tail income outcomes not captured by Dale and Krueger who measured mean log earnings; both results are correct and the paper reconciles them in Section IV.D showing the divergence is entirely on upper-tail outcomes" }
    - { cite: "Dale and Krueger (2014)", doi: '10.1353/jhr.2014.0015', relation: extends, note: "extends their administrative-earnings update; both designs agree on mean log earnings, confirming reconciliation is due to upper-tail outcomes not design differences" }
    - { cite: "Chetty et al. (2020)", doi: '10.1093/qje/qjaa005', relation: builds-on, note: "builds on their linked IRS-college-attendance dataset on income segregation across US colleges" }
    - { cite: "Mountjoy and Hickman (2021)", doi: '10.3386/w29276', relation: builds-on, note: "Research Design 2 (matriculation design) follows their admissions-portfolio conditioning approach" }
    - { cite: "Hoxby and Avery (2013)", doi: '10.1353/eca.2013.0000', relation: cites, note: "cited for application-rate differences; this paper finds admissions rates are the primary driver at Ivy-Plus colleges, partly because the period studied postdates major low-income recruitment expansions" }
  openQuestions:
    - "General equilibrium effects of simultaneous admissions changes across all highly selective private colleges are not modeled; the 2.5x multiplier if the next 60 highest-ranked private colleges also change policies is noted but not estimated (p. 141)."
    - "Effects on students who currently do not apply to Ivy-Plus colleges are not estimated; the counterfactual simulations apply only to current applicants and are therefore conservative estimates of the policy's reach (pp. 137-138)."
    - "The causal effects of Ivy-Plus attendance on long-run leadership outcomes (senators, CEOs) cannot be directly estimated due to data censoring for recent cohorts; the paper extrapolates from early-career proxies under a proportionality assumption (pp. 97-98, 139-141)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/YMVK4K", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Read PDF in full (95 pages); all results and equations transcribed from source tables and figures with page locators. Not human-verified; not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-28", role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed 4 errors: description said top-1% are 2.5x more likely (corrected to top-0.1%, PDF p. 80); R7 legacy sign was approx-zero (corrected to negative, PDF p. 129); R4 locator said p. 116 (corrected to p. 114 where Table IV appears); Dale-Krueger-2002 relation changed from contradicts to extends (paper explicitly reconciles, not overturns). All equations (3)-(6) and Eq. 1-2 verified term-by-term; all R3/R5/R6/R8 magnitudes confirmed." }
  licenceVerification:
    - { source: "Crossref works/10.1093/qje/qjaf050", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "content-version vor; license URL https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model (OUP CHORUS standard publication model, not open access); start 2025-10-30; delay-in-days 0. Artifact first page confirms all-rights-reserved OUP copyright notice." }
---

**What this is.** A distilled skeleton of Chetty, Deming, and Friedman (2026). Read the [original article](https://doi.org/10.1093/qje/qjaf050) to replicate or extend. Equations, tables, and figures referenced below are from that source. This page is LLM-extracted and has not been human-verified.

## TL;DR

The paper uses a newly linked panel dataset combining federal income tax records, college attendance records, SAT/ACT scores, and internal applications data from Ivy-Plus and flagship public colleges to study two questions: (i) why children from top-income families disproportionately attend Ivy-Plus colleges (Harvard, Yale, Princeton, and the other eight Ivy League colleges, Chicago, Duke, MIT, and Stanford), and (ii) whether attending those colleges causally improves students' postcollege outcomes. The analysis proceeds in four parts: characterizing the pipeline from application through matriculation, identifying the mechanisms driving the high-income admissions advantage, estimating causal effects using two quasi-experimental designs, and predicting the effects of counterfactual admissions policies on socioeconomic diversity.

The headline findings are that (i) Ivy-Plus attendance does causally improve upper-tail outcomes by substantial magnitudes relative to attending a flagship public college, and (ii) the credentials that give high-income applicants their admissions advantage (legacy status, nonacademic ratings, athletic recruitment) do not predict better postcollege outcomes once college quality is held fixed, while academic credentials do. Contrary to the well-known findings of Dale and Krueger (2002) on mean log earnings, large causal effects of Ivy-Plus attendance on upper-tail income and nonmonetary outcomes emerge once richer data allow college value-added to be measured directly rather than through test-score proxies. The paper reconciles with Dale and Krueger (2002) and Dale and Krueger (2014): both papers agree on effects on mean log earnings; the divergence arises entirely on upper-tail outcomes where Ivy-Plus colleges have disproportionate effects.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Top 0.1% income families are 2.5x more likely to gain admission to Ivy-Plus than middle-class applicants (70th-80th pctile) with the same test scores; 99th-99.9th pctile are 44% more likely; flagship public admissions rates are uncorrelated with parental income conditional on test scores | Figure III Panel B, p. 80 | Relative admission rate: 2.5x for top 0.1%; 1.44x for 99th-99.9th pctile; roughly 1.0x at flagship publics |
| R2 | 68% of the income gap in Ivy-Plus attendance conditional on test scores arises from admissions rather than applications or matriculation; decomposed into legacy preferences (31%), nonacademic credentials (21%), and athletic recruitment (16%), accounting for 114 of 168 extra top-1% students | Table II, pp. 77, 82; Figures V, VI | 52 extra top-1% students from legacy preferences; 35 from nonacademic credentials; 27 from athletic recruitment; 141 of 168 from admissions-related factors combined including athletes |
| R3 | Attending an Ivy-Plus college instead of the average flagship public college causally increases the predicted probability of reaching the top 1% of income at age 33 by 5 pp (+42%) | Table IV col. 1 and 6, p. 114 | TOT = 5.01 pp (SE 1.31), $$p < .001$$; from 11.8% to 16.8% |
| R4 | Ivy-Plus attendance nearly doubles the probability of attending an elite graduate school | Table IV Panel B, p. 114 | TOT = 5.64 pp (SE 2.79); from 6.1% to 11.7%, +92% |
| R5 | Ivy-Plus attendance more than triples the probability of working at an elite firm at age 25 | Table IV Panel B, p. 114 | TOT = 16.96 pp (SE 4.01); from 8.5% to 25.5%, +199% |
| R6 | Ivy-Plus attendance nearly quadruples the probability of working at a prestigious firm at age 25 | Table IV Panel B, p. 114 | TOT = 17.51 pp (SE 4.26); from 7.2% to 24.7%, +245% |
| R7 | The credentials underlying the high-income admissions advantage (legacy status, nonacademic ratings, athletic recruitment) have zero or negative association with postcollege success after adjusting for college quality; high academic ratings have a +4.8 pp effect on top-1% probability | Figure XV Panel B, p. 129 | Legacy: negative (negatively associated, p. 129); nonacademic rating: approx. 0 (no significant association); athlete: approx. 0 (no significant association); high academic rating: +4.8 pp on top-1% probability |
| R8 | Eliminating all three high-income admissions advantages (legacy preferences, nonacademic-credentials boost, athletic recruitment income gradient) would increase the share of Ivy-Plus students from the bottom 95% of parental income by 8.8 pp, with no reduction in average student outcomes | Table V Panel A rows 1-4, p. 133 | Top-1% parental income share falls from 15.8% to 9.9%; bottom-60% share rises from 15.7% to 20.0%; average predicted outcomes unchanged or improved |

**Overall (paper's conclusion).** Ivy-Plus colleges have large causal effects on students' chances of achieving upper-tail earnings and nonmonetary leadership outcomes, but they also substantially over-admit students from high-income families relative to what academic credentials alone would predict. The three factors driving this admissions advantage (legacies, nonacademic credentials, athletes) are uncorrelated with, or negatively predictive of, postcollege success, meaning that admissions policy changes that eliminate these advantages would increase socioeconomic diversity by an amount comparable to race-based affirmative action without reducing student-body quality. Because Ivy-Plus colleges account for a relatively small share of all Americans, changes in admissions policy have small effects on the share of top-1% earners from low-income families but could meaningfully diversify the socioeconomic backgrounds of people in nonmonetary leadership positions (senators, Supreme Court justices, Nobel laureates).

## Theory / model

The paper presents a formal statistical model (Section IV.A, pp. 92-97) to clarify what each research design identifies.

**Admissions ratings.** College $$j$$ assigns applicant $$i$$ a composite rating

$$Z_{ij} = \gamma_{1j} X_{1i} + \gamma_{2j} X_{2i} + \eta_i + \epsilon_{ij}, \tag{3}$$

where $$X_{1i}$$ is observable (e.g., SAT/ACT score), $$X_{2i}$$ is unobservable but correlated with long-term outcomes $$Y_i$$ (e.g., intrinsic ability or motivation), $$\eta_i$$ is a common idiosyncratic component uncorrelated with $$Y_i$$ (e.g., a strong guidance counselor letter that helps at all colleges), and $$\epsilon_{ij}$$ is pure noise at college $$j$$ uncorrelated with $$Y_i$$ across all colleges (e.g., whether the student plays an instrument needed for the college's orchestra in the application year). Colleges admit student $$i$$ to college $$j$$ if $$Z_{ij} > C_j$$, where $$C_j$$ is a college-specific cutoff. Colleges are assumed to decide independently.

**Postcollege outcomes.** The student's outcome (e.g., earnings or one of the leadership proxies in Figure I) follows

$$Y_i = \sum_{j \in J_i} D_{ij} \phi_j + \beta_1 X_{1i} + \beta_2 X_{2i} + \epsilon_i^Y, \tag{4}$$

where $$D_{ij}$$ is an enrollment indicator, $$\phi_j$$ is college $$j$$'s causal value added (normalized to zero for the average flagship public, the outside option $$O$$), and $$\epsilon_i^Y$$ is an outcome error orthogonal to $$\eta_i$$ and $$\epsilon_{ij}$$. The goal is to estimate $$\phi_A$$, the causal effect of attending an Ivy-Plus college $$A$$ instead of college $$O$$.

**Identification.** OLS on admitted students is biased because $$X_{2i}$$ affects both admission and outcomes. The paper offers two designs to remove this bias, both exploiting data on admissions decisions at multiple colleges.

**Research Design 1 (idiosyncratic-admissions IV, Section IV.A.2, p. 93).** Among students on the waitlist at college $$A$$, the paper uses being admitted off the waitlist as a quasi-instrument. The rescaled waitlist estimator is

$$r_A = \frac{E[Y_i | P_{iA}=1, X_{1i}, \tilde{X}_{2i}] - E[Y_i | P_{iA}=0, X_{1i}, \tilde{X}_{2i}]}{E[D_{iA} | P_{iA}=1, X_{1i}, \tilde{X}_{2i}]}, \tag{5}$$

where $$\tilde{X}_{2i}$$ is a proxy for $$X_{2i}$$ (e.g., whether the student was placed on the waitlist, itself a signal of near-marginal quality). Under the correlated-admissions-criteria assumption (Assumption 1, p. 95) that $$\gamma_{2A} > 0 \Rightarrow \gamma_{2B} > 0$$ for colleges $$B$$ with similar holistic admissions processes, the estimator identifies $$\phi_A$$ if and only if the test statistic $$T_{B|A} = 0$$, where $$T_{B|A}$$ measures whether being admitted vs. rejected from college $$A$$'s waitlist predicts admission at college $$B$$. This multiple-rater test (Figure VII, pp. 102-104) passes empirically: waitlisted students' admission outcomes at other Ivy-Plus colleges are statistically indistinguishable from each other, regardless of whether they are admitted from the waitlist at the reference college.

**Research Design 2 (matriculation design, Section IV.A.3, p. 96).** Following Mountjoy and Hickman (2021) and Dale and Krueger (2002), the paper compares outcomes for students admitted to the same portfolio of colleges $$J_i = \{A, O\}$$ who choose to attend different colleges:

$$r_M = E[Y_i | D_{iA}=1, X_{1i}, J_i = \{A, O\}] - E[Y_i | D_{iO}=1, X_{1i}, J_i = \{A, O\}], \tag{6}$$

under Assumption 2 that conditional on the admissions portfolio and $$X_{1i}$$, the unobservable $$X_{2i}$$ is orthogonal to the matriculation choice (p. 96). Both designs yield consistent estimates (Table IV, p. 114), which strengthens the credibility of both.

## Method

**Surrogate index for early-career outcomes (Section II.C.4, p. 67; Section IV.B, pp. 97-100).** Because income ranks at age 33 are not observed for recent cohorts, the paper constructs a surrogate index (Athey et al., forthcoming) using employers and graduate schools at ages 22-25 to predict the probability of reaching the top 1% of income at age 33. This is motivated by the finding that firms' employment composition at ages 22-25 strongly predicts income at 33 (Figure IX and Online Appendix Figure A.23a, pp. 107-108). The paper verifies that early-career employers and graduate schools capture the income dynamics that produce age-33 outcomes, with a near-zero treatment effect at age 25 that grows steadily to ~5 pp by age 33 (Figure IX Panel A, p. 107).

**Treatment-effect heterogeneity by outside options (Section IV.C.5, pp. 110-113).** To identify $$\phi_{Ivy}$$ (the causal effect relative to the average flagship public as outside option), the paper exploits variation in the value added of each applicant's outside option. Applicants are grouped by home state, parental income, and race; the outside-option quality is measured as the average observational value added of colleges attended by rejected non-waitlisted applicants in each group. The paper then estimates:

$$\hat{\phi}_{Ivy} \approx 5.01 \text{ pp (SE 1.31), rescaling the reduced-form waitlist estimate by the ratio of observational VA differences}$$

(Table IV col. 1 and Figure X Panel A, pp. 112-113). The slope of the heterogeneity relationship equals -0.79 (Figure X Panel A), indicating that most variation in outcomes between colleges is driven by genuine causal effects rather than selection, with students facing weaker outside options gaining most from Ivy-Plus attendance.

**Multiple-rater admissions test (Section IV.C.1, pp. 100-104; Figure VII, p. 102).** The paper develops a new validation test for the quasi-random variation assumption in Research Design 1. The test compares admission rates at lower-ranked Ivy-Plus colleges $$B$$ (ranked by revealed student preferences) for students who are admitted vs. rejected from the waitlist at college $$A$$. Under the correlated-admissions-criteria assumption, $$T_{B|A} = 0$$ if and only if the residual variation in $$A$$'s admissions decisions among waitlisted students is orthogonal to $$X_{2i}$$. The paper implements this test for three specifications (no controls, with controls, dropping legacies/athletes/top-1%) and finds $$T_{B|A}$$ statistically indistinguishable from zero across all three (Figure VII, p. 102), supporting the identification assumption.

## Empirical specifications

**Pipeline analysis: counterfactual attendance rate under income-neutral admissions (Section III.A.1, p. 75, Equation 1).** To quantify how many extra top-1% students are in the Ivy-Plus class conditional on test scores, the paper computes:

$$\text{Counterfactual Attendance Rate}_c = \sum_a N_{Top 1\%, a} \times \text{Attendance Rate}_{P70-80, ac}, \tag{1}$$

where $$N_{Top 1\%, a}$$ is the number of test takers with score $$a$$ from families in the top 1% and $$\text{Attendance Rate}_{P70-80, ac}$$ is the fraction attending college $$c$$ among students with score $$a$$ from the 70th-80th percentile. Scaling to a class of 1,650 students, this counterfactual implies 93 students from the top 1% rather than the observed 261, a gap of 168 "extra" top-1% students (10.2% of enrollment).

**Pipeline decomposition (Section III.B.4, p. 81, Equation 2).** For non-athletes, the paper decomposes the 168-student gap by sequentially equalizing applications, admissions, and matriculation rates across income groups:

$$\text{Equal Admit CF}_c = \sum_a N_{Top 1\%, a} \times \text{Application Rate}_{Top 1\%, ac} \times \text{Admission Rate}_{P70-80, ac} \times \text{Matriculation Rate}_{Top 1\%, ac}. \tag{2}$$

Setting application, admission, and matriculation rates to those of the middle class, and averaging across orderings, admissions account for 58% (96 students) of the 168-student gap (Online Appendix Table A.6, p. 82). Including athletes, 114 of 168 extra students (68%) are from admissions-related factors.

**Causal-effect regression (Section IV.C.3, pp. 105-106).** The paper estimates the treatment-on-the-treated (TOT) effect from Research Design 1 by regressing an outcome indicator on a waitlist-admission indicator $$P_{iA}$$ plus college-by-cohort fixed effects, clustering standard errors by student (to account for students on multiple waitlists), and dividing the reduced-form coefficient by the first-stage effect (the probability of attending college $$A$$ conditional on admission). In the primary specification (Table IV col. 1, p. 114), the outcome is the predicted top-1% income probability based on age-22-25 employers. Controls include a quintic in SAT/ACT scores, parent income bin dummies, race/ethnicity indicators, gender, home-state indicators, recruited-athlete and legacy status indicators, and college-by-cohort fixed effects. Robustness to dropping legacies, athletes, and top-1% applicants (the third bar set in Figures VIII and XI) confirms the estimates are not driven by the same characteristics that generate the admissions imbalance.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| Federal income tax records (IRS, 1996-2021) | Parental income (1040, W-2), children's individual income (W-2, Form SE, 1040), employer identification (W-2) | [no page yet](/wiki/confidential/) |
| 1098-T college attendance forms (Dept of Education via NSLDS) | College attendance indicator for all US colleges; linked to tax records at individual level | [no page yet](/wiki/confidential/) |
| SAT scores (College Board, 2001-2005 and odd years 2007-2015) | Standardized academic qualification measure; composite score (math + critical reading) | [no page yet](/wiki/confidential/) |
| ACT scores (ACT, 2001-2015) | Standardized test scores converted to SAT equivalents via ACT 2016 concordance tables | [no page yet](/wiki/confidential/) |
| Pell Grant records (NSLDS, 1999-2013) | Low-income student identification; supplementary college attendance signal | [no page yet](/wiki/confidential/) |
| Application and admissions records (Ivy-Plus and flagship public colleges, 1998-2015) | Admission indicators, legacy/athlete/faculty-child flags, admissions-office ratings (academic and nonacademic), application round, GPA; from several Ivy-Plus colleges plus 9 flagship public systems | no page yet |

**Sample note.** The pipeline analysis sample covers 5,063,263 students on pace to graduate high school in 2011, 2013, or 2015 (Table I col. 1, p. 70). The college-specific analysis sample covers 486,150 Ivy-Plus applicants and 1,877,770 flagship public applicants for whom internal admissions records are available (Table I cols. 3-4, p. 72). All data were linked at the individual level using Social Security numbers and stripped of personally identifiable information before analysis; the IRS component was accessed under IRS contract TIRNO-16-E-00013. The dataset construction and income variable definitions build on the earlier linked administrative dataset of Chetty et al. (2020) on income segregation across US colleges; the current paper extends that work with internal admissions records and later cohorts. Application-rate differences as a driver of access gaps were documented by Hoxby and Avery (2013) using geographic imputations of family income; this paper finds admissions rates are the primary driver at Ivy-Plus colleges in the more recent period studied, after private colleges expanded low-income recruitment programs.

## When to read the full paper

Read Chetty, Deming, and Friedman (2026) if you need:

- The exact statistical model and identification assumptions (Equations 3-6, Online Appendix H with formal proofs), especially the multiple-rater test logic and how the two designs nest into a unified framework (Section IV.A, pp. 92-97).
- Heterogeneity in treatment effects by parental income, race, and outside-option quality (Figure XII Panel D, p. 120; Table IV, p. 114; Online Appendix Table A.10).
- The admissions-ratings analysis showing how legacy preferences and nonacademic credentials mechanically generate the high-income admissions advantage and how it is measured via counterfactual admissions predictions (Figures V and VI, pp. 85, 89; Section III.C, pp. 84-91).
- The counterfactual admissions simulations and their predicted effects on leadership outcomes across specific categories (senators, Supreme Court justices, Nobel laureates) under alternative admissions policies (Table V, pp. 133-134; Section VI, pp. 131-141).
- The quantile treatment effects analysis showing why Ivy-Plus effects are concentrated at the very top of the income distribution rather than distributed proportionally (Figure XIII, p. 124; Section IV.E, pp. 122-125).
- The college-level data on parental income distributions at each stage of the application process, publicly released at www.opportunityinsights.org/data (Online Appendix O, p. 142).

## Attribution and rights

Chetty, Raj, David J. Deming, and John N. Friedman. "Diversifying Society's Leaders? The Determinants and Causal Effects of Admission to Highly Selective Private Colleges." *The Quarterly Journal of Economics* 141(1), 2026, 51-145. DOI: [10.1093/qje/qjaf050](https://doi.org/10.1093/qje/qjaf050).

Copyright (c) The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved. Replication code and data available at Harvard Dataverse: [https://doi.org/10.7910/DVN/YMVK4K](https://doi.org/10.7910/DVN/YMVK4K).

This page is a machine-generated distillation (LLM-extracted). It has not been human-verified and reproduces no paywalled content, only brief quotations of results as permitted for commentary and research purposes (extract-only).
