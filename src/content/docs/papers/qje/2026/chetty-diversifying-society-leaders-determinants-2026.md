---
title: "Diversifying Society's Leaders: Chetty, Deming & Friedman (2026)"
description: >-
  Distilled: Using anonymized admissions data linked to federal tax records,
  Chetty, Deming, and Friedman show that top-0.1% income families are 2.5x more
  likely than middle-class applicants to gain admission to Ivy-Plus colleges with
  comparable test scores, driven by legacy preferences (46%), nonacademic credentials
  (31%), and athletic recruitment (24%) of the admissions advantage. After adjusting for college quality, these
  credentials have no positive association with postcollege outcomes, while academic
  ratings do.
  Attending an Ivy-Plus college instead of an average flagship public college
  causally increases the probability of reaching the top 1% of earnings by 5 pp
  and nearly triples chances of working at an elite firm. Quarterly Journal of Economics
  141(1), 2026, paywalled. Eighteen core results with source locators, the statistical
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
  resultsCount: 18
  citedByCount: 11
  introducesData: true
  methods:
    role: both
    contributes: multiple-rater-admissions-test
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression]
    identification: instrument
  contributionType: [new-fact, new-method, measurement]
  mechanisms: [selective-admissions-advantage]
  scope:
    region: US
    period: 1996-01..2021-12
    frequency: annual
    dataType: [administrative]
    granularity: [individual]
    n: "5,063,263 in pipeline sample; 486,150 Ivy-Plus college-specific; 1,877,770 flagship public college-specific (Table I, pp. 70-72); entering classes 2010-2015 for main analysis"
  findings:
    - { ref: R1, outcome: "Ivy-Plus admission rate by parental income conditional on test scores", metric: probability, value: "top 0.1% families 2.5x more likely to be admitted than middle class (70th-80th pctile) with comparable test scores; 99th-99.9th pctile 44% more likely (Figure III Panel B, p. 79; text p. 80)", direction: positive }
    - { ref: R2, outcome: "fraction of income gap in Ivy-Plus attendance explained by admissions vs. application or matriculation", metric: probability, value: "68% (114 of 168 excess top-1% students from admissions-related factors): 52 from legacy preferences, 35 from nonacademic credentials, 27 from athletic recruitment (Table II, p. 77; text p. 82)", direction: positive }
    - { ref: R3, outcome: "probability of reaching top 1% of earnings at age 33", metric: pp-effect, value: "5.01 pp (SE 1.31); from 11.8% to 16.8%, +42% (Table IV cols. 1, 5-7, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college (rescaled waitlist design)" }
    - { ref: R4, outcome: "probability of attending elite graduate school", metric: pp-effect, value: "5.64 pp (SE 2.79); from 6.1% to 11.7%, +92% (Table IV Panel B, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college" }
    - { ref: R5, outcome: "probability of working at an elite firm at age 25", metric: pp-effect, value: "16.96 pp (SE 4.01); from 8.5% to 25.5%, +199% (Table IV Panel B, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college" }
    - { ref: R6, outcome: "probability of working at a prestigious firm at age 25", metric: pp-effect, value: "17.51 pp (SE 4.26); from 7.2% to 24.7%, +245% (Table IV Panel B, p. 114)", direction: positive, vsBenchmark: "vs. average flagship public college" }
    - { ref: R7, outcome: "postcollege outcomes of Ivy-Plus applicants by application credentials adjusted for college quality", metric: pp-effect, value: "legacy negative (negatively associated with top-1% probability, p. 129); nonacademic rating approx. 0 (no significant association); athlete approx. 0 (no significant association); high academic rating +4.8 pp on top-1% probability (Figure XV Panel B, p. 128; text p. 129)", direction: mixed }
    - { ref: R8, outcome: "income distribution of Ivy-Plus students under counterfactual admissions policies", metric: pp-effect, value: "eliminating legacy + nonacademic + athlete advantages: top-1% parental income share falls 15.8% to 9.9%; bottom-95% share rises 8.8 pp (Table V Panel A rows 1-4, p. 133)", direction: positive }
    - { ref: R9, outcome: Ivy-Plus college attendance rate by parental income conditional on test scores, metric: probability, value: "top-1% students are 2.3x as likely as 70th-80th percentile students to attend; bottom-40% rates are slightly above middle-class rates (Figure II Panel B, p. 54; text p. 74)", direction: positive }
    - { ref: R10, outcome: share of excess top-1% Ivy-Plus students attributable to application rates, metric: probability, value: "top-1% families apply at 37% higher rates; application differences account for 34 of 168 students, or 20.1% (Figure III Panel A, p. 79; Table II rows 6 and 12, pp. 76-77)", direction: positive }
    - { ref: R11, outcome: share of excess top-1% Ivy-Plus students attributable to matriculation rates, metric: probability, value: "conditional matriculation rate is 1.15x for top-1% vs. middle-class applicants; 20 of 168 students, or 11.9% (Figure III Panel C, p. 79; text pp. 80-81; Table II rows 6 and 11, p. 77)", direction: positive }
    - { ref: R12, outcome: difference in admission probability at other Ivy-Plus colleges by waitlist outcome, metric: probability, value: "not statistically distinguishable from zero; upper 95% confidence bound implies at most a 2% higher admission rate for waitlist admits (Figure VII, pp. 102-103; text p. 103)", direction: none }
    - { ref: R13, outcome: admission probability by legacy status at parent’s college versus other Ivy-Plus colleges, metric: probability, value: "36.4% actual vs. 11.7% counterfactual at parent’s college; 9.3% legacy vs. 9.6% non-legacy at other colleges (Figure V Panel C, p. 85)", direction: mixed }
    - { ref: R14, outcome: Ivy-Plus treatment effect by strength of outside option, metric: coefficient, value: "slope -0.79; alternative specifications range from 0.69 to 0.93 in magnitude (Figure X Panel A, text p. 113; Online Appendix Table A.9)", direction: negative }
    - { ref: R15, outcome: probability of reaching the extreme upper tail of age-33 earnings, metric: probability, value: "relative likelihood 1.4x at 99th-99.5th pctile, 2.2x at 99.9th-99.99th pctile, nearly 4x above 99.99th pctile; mean income difference $101,000 (Figure XIII Panel B, p. 124)", direction: positive, vsBenchmark: "reweighted flagship public students with similar test scores, race, gender, and parent income" }
    - { ref: R16, outcome: predicted socioeconomic composition of leadership positions, metric: pp-effect, value: "bottom-95% share of U.S. senators +1.7 pp under eliminating high-income admissions advantages; bottom-60% share +5.6 pp under legacy-equivalent need-affirmative policy (Table V Panel B, pp. 134-135)", direction: positive }
    - { ref: R17, outcome: Ivy-Plus share of US leadership positions, metric: probability, value: "less than 0.5% of Americans attend these colleges; alumni account for more than 10% of Fortune 500 CEOs, one-quarter of U.S. senators, and three-quarters of Supreme Court justices appointed in the prior half-century (Figure I, p. 53; text p. 52)", direction: positive }
    - { ref: R18, outcome: causal effect of Ivy-Plus attendance by parental-income group, metric: coefficient, value: "no statistically significant heterogeneity across eight parental-income bins; tests are underpowered to reject meaningful differences (Figure XII Panel D, p. 120; text p. 123)", direction: none }
  resultType: mixed
  relatesTo:
    - { cite: "Dale and Krueger (2002)", doi: '10.1162/003355302320935089', relation: extends, note: "paper finds large causal effects on upper-tail income outcomes not captured by Dale and Krueger who measured mean log earnings; both results are correct and the paper reconciles them in Section IV.D showing the divergence is entirely on upper-tail outcomes" }
    - { cite: "Dale and Krueger (2014)", doi: '10.1353/jhr.2014.0015', relation: extends, note: "extends their administrative-earnings update; both designs agree on mean log earnings, confirming reconciliation is due to upper-tail outcomes not design differences" }
    - { cite: "Chetty et al. (2020)", doi: '10.1093/qje/qjaa005', relation: builds-on, note: "builds on their linked IRS-college-attendance dataset on income segregation across US colleges" }
    - { cite: "Mountjoy and Hickman (2021)", doi: '10.3386/w29276', relation: builds-on, note: "Research Design 2 (matriculation design) follows their admissions-portfolio conditioning approach" }
    - { cite: "Hoxby and Avery (2013)", doi: '10.1353/eca.2013.0000', relation: cites, note: "cited for application-rate differences; this paper finds admissions rates are the primary driver at Ivy-Plus colleges, partly because the period studied postdates major low-income recruitment expansions" }
  openQuestions:
    - "General-equilibrium responses are not modeled. Using observational value-added estimates, the paper estimates that predicted diversity effects would be about 2.5x larger if the next 60 highest-ranked private colleges made similar changes (p. 141)."
    - "Effects on students who currently do not apply to Ivy-Plus colleges are not estimated; the counterfactual simulations apply only to current applicants and are therefore conservative estimates of the policy's reach (pp. 137-138)."
    - "The causal effects of Ivy-Plus attendance on long-run leadership outcomes (senators, CEOs) cannot be directly estimated due to data censoring for recent cohorts; the paper extrapolates from early-career proxies under a proportionality assumption (pp. 97-98, 139-141)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/YMVK4K", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Read PDF in full (95 pages); all results and equations transcribed from source tables and figures with page locators. Not human-verified; not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-28", role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed 4 errors: description said top-1% are 2.5x more likely (corrected to top-0.1%, PDF p. 80); R7 legacy sign was approx-zero (corrected to negative, PDF p. 129); R4 locator said p. 116 (corrected to p. 114 where Table IV appears); Dale-Krueger-2002 relation changed from contradicts to extends (paper explicitly reconciles, not overturns). All equations (3)-(6) and Eq. 1-2 verified term-by-term; all R3/R5/R6/R8 magnitudes confirmed." }
    - { by: "paper-distiller (gpt-6-luna)", date: "2026-10-04", role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the source PDF and augmented the Core results table to cover attendance and pipeline decompositions, identification and mechanism checks, outside-option heterogeneity, upper-tail income effects, and leadership counterfactuals; added matching findings, a staged mechanism term, and estimating specifications. Additions are not human-verified and were not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: "2026-10-04", role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Full adversarial audit against the source PDF; corrected table decomposition, figure/table locators, identification wording, specification details, and overstatement in R5. Existing rows and equations are supported. The conclusion aggregate income and tax-revenue estimates remain missing from the page summary." }
  licenceVerification:
    - { source: "Crossref works/10.1093/qje/qjaf050", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "content-version vor; license URL https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model (OUP CHORUS standard publication model, not open access); start 2025-10-30; delay-in-days 0. Artifact first page confirms all-rights-reserved OUP copyright notice." }
---

**What this is.** A distilled skeleton of Chetty, Deming, and Friedman (2026). Read the [original article](https://doi.org/10.1093/qje/qjaf050) to replicate or extend. Equations, tables, and figures referenced below are from that source. This page is LLM-extracted and has not been human-verified.

## TL;DR

The paper uses a newly linked panel dataset combining federal income tax records, college attendance records, SAT/ACT scores, and internal applications data from Ivy-Plus and flagship public colleges to study two questions: (i) why children from top-income families disproportionately attend Ivy-Plus colleges (Harvard, Yale, Princeton, and the other eight Ivy League colleges, Chicago, Duke, MIT, and Stanford), and (ii) whether attending those colleges causally improves students' postcollege outcomes. The analysis proceeds in four parts: characterizing the pipeline from application through matriculation, identifying the mechanisms driving the high-income admissions advantage, estimating causal effects using two quasi-experimental designs, and predicting the effects of counterfactual admissions policies on socioeconomic diversity.

The headline findings are that (i) Ivy-Plus attendance causally improves upper-tail outcomes relative to attending a flagship public college, and (ii) the credentials that give high-income applicants their admissions advantage (legacy status, nonacademic ratings, athletic recruitment) have no positive association with postcollege outcomes once college quality is held fixed, while academic credentials do. The paper reconciles its results with Dale and Krueger (2002) and Dale and Krueger (2014): the estimates agree on mean log earnings, while this paper finds large effects on upper-tail income and nonmonetary outcomes. It also measures college value added directly rather than proxying for it with admitted students' average test scores.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Top 0.1% income families are 2.5x more likely to gain admission to Ivy-Plus than middle-class applicants (70th-80th pctile) with comparable test scores; 99th-99.9th pctile are 44% more likely; flagship public admissions rates are uncorrelated with parental income conditional on test scores | Figure III Panel B, p. 79; text p. 80 | Relative admission rate: 2.5x for top 0.1%; 1.44x for 99th-99.9th pctile; roughly 1.0x at flagship publics |
| R2 | 68% of the income gap in Ivy-Plus attendance conditional on test scores arises from admissions rather than applications or matriculation; decomposed into legacy preferences (31%), nonacademic credentials (21%), and athletic recruitment (16%), accounting for 114 of 168 extra top-1% students | Table II, p. 77; text pp. 81-82; Figures V, VI | 52 extra top-1% students from legacy preferences; 35 from nonacademic credentials; 27 from athletic recruitment; 114 of 168 from admissions-related factors including athletes |
| R3 | Attending an Ivy-Plus college instead of the average flagship public college causally increases the predicted probability of reaching the top 1% of income at age 33 by 5 pp (+42%) | Table IV cols. 1, 5-7, p. 114 | TOT = 5.01 pp (SE 1.31), $$p < .001$$; from 11.8% to 16.8% |
| R4 | Ivy-Plus attendance nearly doubles the probability of attending an elite graduate school | Table IV Panel B, p. 114 | TOT = 5.64 pp (SE 2.79); from 6.1% to 11.7%, +92% |
| R5 | Ivy-Plus attendance nearly triples the probability of working at an elite firm at age 25 | Table IV Panel B, p. 114 | TOT = 16.96 pp (SE 4.01); from 8.5% to 25.5%, +199% |
| R6 | Ivy-Plus attendance nearly quadruples the probability of working at a prestigious firm at age 25 | Table IV Panel B, p. 114 | TOT = 17.51 pp (SE 4.26); from 7.2% to 24.7%, +245% |
| R7 | The credentials underlying the high-income admissions advantage (legacy status, nonacademic ratings, athletic recruitment) have zero or negative association with postcollege success after adjusting for college quality; high academic ratings have a +4.8 pp effect on top-1% probability | Figure XV Panel B, p. 128; text p. 129 | Legacy: negative (negatively associated, p. 129); nonacademic rating: approx. 0 (no significant association); athlete: approx. 0 (no significant association); high academic rating: +4.8 pp on top-1% probability |
| R8 | Eliminating all three high-income admissions advantages (legacy preferences, nonacademic-credentials boost, athletic recruitment income gradient) would increase the share of Ivy-Plus students from the bottom 95% of parental income by 8.8 pp, with no reduction in average student outcomes | Table V Panel A rows 1-4, p. 133 | Top-1% parental income share falls from 15.8% to 9.9%; bottom-60% share rises from 15.7% to 20.0%; average predicted outcomes unchanged or improved |
| R9 | Conditional on SAT/ACT scores, students from top-1% families are 2.3 times as likely as middle-class students to attend an Ivy-Plus college; rates show a missing-middle pattern | Figure II Panel B, p. 54; text p. 74 | Relative attendance rate = 2.3x for top-1% vs. 70th-80th percentile families; bottom-40% attendance is slightly higher than the middle class |
| R10 | Top-1% families apply to Ivy-Plus colleges at higher rates than middle-class families, but the application gradient explains a smaller share of the attendance gap | Figure III Panel A, p. 79; Table II rows 6 and 12, pp. 76-77 | Application rate is 37% higher for top-1% families; application differences account for 34 students, or 20.1% of the 168-student gap |
| R11 | Top-1% applicants are somewhat more likely to matriculate after admission, but this explains only a small share of the attendance gap | Figure III Panel C, p. 79; text pp. 80-81; Table II rows 6 and 11, p. 77 | Conditional matriculation rate is 1.15x the middle-class rate; matriculation differences account for 20 students, or 11.9% of the 168-student gap |
| R12 | The multiple-rater identification check finds no detectable difference in admission to other Ivy-Plus colleges for applicants admitted versus rejected from a waitlist | Figure VII, pp. 102-103; text p. 103 | Cannot reject $$T_{B|A}=0$$; upper bound of the 95% confidence interval implies at most a 2% higher admission rate at other colleges for waitlist admits |
| R13 | Legacy admissions advantage is concentrated at the parent’s college, consistent with a preference rather than broadly stronger unobserved credentials | Figure V Panel C, p. 85; text pp. 86-87 | Legacy applicants: 36.4% admitted at parent’s college vs. 11.7% counterfactual absent preference; admissions at other Ivy-Plus colleges are 9.3% vs. 9.6% for non-legacies |
| R14 | The relationship between observational outside-option value added and the estimated Ivy-Plus treatment effect has slope -0.79 | Figure X Panel A, text p. 113 | Slope = -0.79; estimates across alternative outside-option specifications range from 0.69 to 0.93 in magnitude (Online Appendix Table A.9) |
| R15 | Ivy-Plus attendance effects are concentrated in the far upper tail of the age-33 income distribution | Figure XIII Panel B, p. 124; text pp. 122-123 | Relative likelihood vs. reweighted flagship peers: 1.4x at the 99th-99.5th percentiles, 2.2x at the 99.9th-99.99th percentiles, and nearly 4x above the 99.99th percentile; mean income difference = $101,000 |
| R16 | Counterfactual admissions reforms increase representation of lower-income backgrounds among leaders, with larger changes for nonmonetary leadership outcomes | Table V Panel B, pp. 134-135 | Eliminating high-income advantages raises the bottom-95% share of U.S. senators by 1.7 pp; legacy-equivalent low-income preferences raise the bottom-60% share by 5.6 pp |
| R17 | Ivy-Plus graduates are overrepresented in leadership positions relative to their small share of the population | Figure I, p. 53; text p. 52 | Less than 0.5% of Americans attend Ivy-Plus colleges, yet their graduates account for more than 10% of Fortune 500 CEOs, one-quarter of U.S. senators, and three-quarters of Supreme Court justices appointed in the prior half-century |
| R18 | The paper finds no statistically significant evidence that causal effects vary across parental-income groups, while noting limited power to reject meaningful differences | Figure XII Panel D, p. 120; text p. 123 | No significant treatment-effect heterogeneity detected across the eight parental-income bins; tests are not powered to reject meaningful differences |

**Overall (paper's conclusion).** Ivy-Plus colleges have large causal effects on students' chances of achieving upper-tail earnings and nonmonetary leadership outcomes, but they also admit students from high-income families at substantially higher rates than comparable middle-class applicants. The three factors driving this admissions advantage (legacies, nonacademic credentials, athletes) have no positive association with, or are negatively predictive of, postcollege success after adjusting for college quality. Simulated admissions changes increase lower-income representation without reducing average student outcomes. Because Ivy-Plus colleges account for a relatively small share of all Americans, changes in their admissions policies have small effects on the share of top-1% earners from low-income families but could meaningfully diversify the socioeconomic backgrounds of people in nonmonetary leadership positions (senators, Supreme Court justices, Nobel laureates).

## Theory / model

The paper presents a formal statistical model (Section IV.A, pp. 92-97) to clarify what each research design identifies.

**Admissions ratings.** College $$j$$ assigns applicant $$i$$ a composite rating

$$Z_{ij} = \gamma_{1j} X_{1i} + \gamma_{2j} X_{2i} + \eta_i + \epsilon_{ij}, \tag{3}$$

where $$X_{1i}$$ is observable (e.g., SAT/ACT score), $$X_{2i}$$ is unobservable but correlated with long-term outcomes $$Y_i$$ (e.g., intrinsic ability or motivation), $$\eta_i$$ is a common idiosyncratic component uncorrelated with potential outcomes (e.g., a strong guidance counselor letter that helps at all colleges), and $$\epsilon_{ij}$$ is college-specific noise, uncorrelated across colleges and with potential outcomes (e.g., whether the student plays an instrument needed for the college's orchestra in the application year). Colleges admit student $$i$$ to college $$j$$ if $$Z_{ij} > C_j$$, where $$C_j$$ is a college-specific cutoff. The model assumes colleges do not condition their admissions decisions on decisions at other schools.

**Postcollege outcomes.** The student's outcome (e.g., earnings or one of the leadership proxies in Figure I) follows

$$Y_i = \sum_{j \in J_i} D_{ij} \phi_j + \beta_1 X_{1i} + \beta_2 X_{2i} + \epsilon_i^Y, \tag{4}$$

where $$D_{ij}$$ is an enrollment indicator, $$\phi_j$$ is college $$j$$'s causal value added (assumed homogeneous across students and normalized to zero for the average flagship public, the outside option $$O$$), and $$\epsilon_i^Y$$ is an outcome error orthogonal to $$\eta_i$$ and $$\epsilon_{ij}$$. The goal is to estimate $$\phi_A$$, the causal effect of attending an Ivy-Plus college $$A$$ instead of college $$O$$.

**Identification.** OLS on admitted students is biased because $$X_{2i}$$ affects both admission and outcomes. The paper offers two designs to remove this bias, both exploiting data on admissions decisions at multiple colleges.

**Research Design 1 (idiosyncratic-admissions IV, Section IV.A.2, p. 93).** Among students on the waitlist at college $$A$$, the paper uses being admitted off the waitlist as a quasi-instrument. The rescaled waitlist estimator is

$$r_A = \frac{E[Y_i | P_{iA}=1, X_{1i}, \tilde{X}_{2i}] - E[Y_i | P_{iA}=0, X_{1i}, \tilde{X}_{2i}]}{E[D_{iA} | P_{iA}=1, X_{1i}, \tilde{X}_{2i}]}, \tag{5}$$

where $$\tilde{X}_{2i}$$ is a proxy for $$X_{2i}$$ (in this application, whether the student was placed on the waitlist). Under the correlated-admissions-criteria assumption (Assumption 1, p. 95) that $$\gamma_{2A} > 0 \Rightarrow \gamma_{2B} > 0$$ for colleges $$B$$ with similar holistic admissions processes, $$T_{B|A} = 0$$ implies that the estimator identifies $$\phi_A$$. Here $$T_{B|A}$$ measures whether being admitted versus rejected from college $$A$$'s waitlist predicts admission at college $$B$$. The multiple-rater test (Figure VII, pp. 102-104) does not reject zero differences in waitlisted students' admission outcomes at other Ivy-Plus colleges, supporting the identifying assumption under the paper's correlated-criteria condition.

**Research Design 2 (matriculation design, Section IV.A.3, p. 96).** Following Mountjoy and Hickman (2021) and Dale and Krueger (2002), the paper compares outcomes for students admitted to the same portfolio of colleges $$J_i = \{A, O\}$$ who choose to attend different colleges:

$$r_M = E[Y_i | D_{iA}=1, X_{1i}, J_i = \{A, O\}] - E[Y_i | D_{iO}=1, X_{1i}, J_i = \{A, O\}], \tag{6}$$

under Assumption 2 that conditional on the admissions portfolio and $$X_{1i}$$, the unobservable $$X_{2i}$$ is orthogonal to the matriculation choice (p. 96). The paper reports similar estimates from both designs (Table IV, p. 114), consistent with the two approaches under their respective assumptions.

## Method

**Surrogate index for early-career outcomes (Section II.C.4, p. 67; Section IV.B, pp. 97-100).** Because income ranks at age 33 are not observed for recent cohorts, the paper constructs a surrogate index (Athey et al., forthcoming) using employers and graduate schools at ages 22-25 to predict the probability of reaching the top 1% of income at age 33. This is motivated by the finding that firms' employment composition at ages 22-25 strongly predicts income at 33 (Figure IX and Online Appendix Figure A.23a, pp. 107-108). The paper verifies that early-career employers and graduate schools capture the income dynamics that produce age-33 outcomes, with a near-zero treatment effect at age 25 that grows steadily to ~5 pp by age 33 (Figure IX Panel A, p. 107).

**Treatment-effect heterogeneity by outside options (Section IV.C.5, pp. 110-113).** To identify $$\phi_{Ivy}$$ (the causal effect relative to the average flagship public as outside option), the paper exploits variation in the value added of each applicant's outside option. Applicants are grouped by home state, parental income, race, and the Ivy-Plus college to which they applied; outside-option quality is measured using the average observational value added of colleges attended by rejected non-waitlisted applicants in each group. Figure X Panel A estimates a downward-sloping relationship between waitlist treatment effects and outside-option quality, with slope $$-0.79$$ (SE $$0.20$$). At outside-option quality equal to the average flagship public, the estimated effect is 5.14 percentage points (SE 1.29). Separately, rescaling the waitlist estimate by observational value-added differences gives the Table IV estimate of 5.01 pp (SE 1.31). Across alternative outside-option specifications, the slope estimates range from 0.69 to 0.93 in magnitude (text p. 113; Online Appendix Table A.9). The pattern indicates larger gains for students with weaker outside options.

**Multiple-rater admissions test (Section IV.C.1, pp. 100-104; Figure VII, p. 102).** The paper develops a multiple-rater test for the quasi-random variation assumption in Research Design 1. The test compares admission rates at lower-ranked Ivy-Plus colleges $$B$$ (ranked by revealed student preferences) for students admitted versus rejected from the waitlist at college $$A$$. Under the correlated-admissions-criteria assumption, $$T_{B|A} = 0$$ implies that the waitlist-admission estimator identifies the causal effect; this is not an unconditional equivalence between the test statistic and latent balance. The paper implements the test with no controls, with controls, and after dropping legacies, athletes, and top-1% applicants; it does not reject $$T_{B|A}=0$$ in these specifications (Figure VII, pp. 102-103).

## Empirical specifications

**Pipeline analysis: counterfactual attendance rate under income-neutral admissions (Section III.A.1, p. 75, Equation 1).** To quantify how many extra top-1% students are in the Ivy-Plus class conditional on test scores, the paper computes:

$$\text{Counterfactual Attendance Rate}_c = \sum_a N_{Top 1\%, a} \times \text{Attendance Rate}_{P70-80, ac}, \tag{1}$$

where $$N_{Top 1\%, a}$$ is the number of test takers with score $$a$$ from families in the top 1% and $$\text{Attendance Rate}_{P70-80, ac}$$ is the fraction attending college $$c$$ among students with score $$a$$ from the 70th-80th percentile. Scaling to a class of 1,650 students, this counterfactual implies 93 students from the top 1% rather than the observed 261, a gap of 168 "extra" top-1% students (10.2% of enrollment).

**Pipeline decomposition (Section III.B.4, p. 81, Equation 2).** For non-athletes, the paper estimates the changes in Ivy-Plus attendance from equalizing admissions, matriculation, and application rates across income groups in sequence:

$$\text{Equal Admit CF}_c = \sum_a N_{Top 1\%, a} \times \text{Application Rate}_{Top 1\%, ac} \times \text{Admission Rate}_{P70-80, ac} \times \text{Matriculation Rate}_{Top 1\%, ac}. \tag{2}$$

Equalizing admissions rates accounts for 87 of the 168 extra students among nonathletes (52%); the separately estimated athlete component adds 27 students. Table II therefore attributes 114 students, or 68% of the total gap, to admissions-related factors. The remaining 20 and 34 students are attributed to matriculation and application differences, respectively (Table II, p. 77; text pp. 81-82).

**Causal-effect regression (Section IV.C.3, pp. 105-106).** The paper estimates the treatment-on-the-treated (TOT) effect from Research Design 1 by regressing the outcome on a waitlist-admission indicator $$P_{iA}$$ and fixed effects for the college at which the student was waitlisted; it divides the reduced-form coefficient by attendance conditional on admission. Standard errors are clustered by student because some students appear on multiple waitlists. In the precision specification, the outcome is the predicted top-1% probability based on employers at ages 22-25. Added controls are a quintic in test scores, parent-income bins, gender, race, state, recruited-athlete status, and legacy status. A further specification excludes legacies, athletes, and applicants with parental income in the top 1% (Figure VIII, pp. 104-105).

**Waitlist admissions design (Figure VIII, pp. 104-105; Table IV, p. 114).** For waitlisted applicants, the paper regresses the outcome on admission from the waitlist and fixed effects for the college where they were waitlisted, then divides the reduced-form coefficient by attendance conditional on admission. The main precision specification uses the predicted top-1% probability based on employers at ages 22-25. Standard errors are clustered by student. The controlled specification adds a quintic in test scores and controls for parent-income bins, gender, race, state, athlete status, and legacy status.

$$Y_{ij} = \alpha_j + \tau P_{ij} + X_i'\beta + \varepsilon_{ij}, \qquad \widehat{TOT} = \frac{\hat{\tau}}{E[D_{ij} \mid P_{ij}=1]}$$

Here $$P_{ij}$$ is waitlist admission, $$D_{ij}$$ is attendance, and $$j$$ indexes the college at which applicant $$i$$ was waitlisted. Figure VIII also reports the college-fixed-effects-only and the controlled sample excluding legacies, athletes, and top-1% families.

**Multiple-rater identification check (Figure VII, pp. 102-103).** Among applicants who applied to at least two Ivy-Plus colleges, the authors compare admission at another, lower-ranked college for waitlisted applicants admitted versus rejected at college $$A$$. They also show direct-admit and reject groups for context. Specifications are unadjusted, controlled, and restricted by removing legacy, athlete, and top-1% applicants. The controlled specification includes a quintic in test scores and fixed effects for parental-income bin, race, gender, athlete status, legacy status, and home state. Figure VII reports 95% confidence intervals but does not state the standard-error clustering in its note. The distinct balance test described on p. 104 clusters by student.

Among waitlisted applicants, a schematic specification is $$P_{iB} = \alpha + \tau P_{iA} + X_i'\beta + \varepsilon_i$$

**Matriculation design (Figure XII, pp. 119-121; Table IV, pp. 114-115).** The paper compares applicants who enroll at different colleges while holding their exact admissions portfolio fixed. The sample is applicants admitted to the same set of schools, with Ivy-Plus and flagship-public applicants for the main contrast. The outcome regression includes exact admitted-school-set fixed effects; specifications include observable controls as indicated in the figure. Figure XII's observational value-added comparison uses college fixed effects with parental-income bins, a quintic in SAT, race, gender, birth cohort, and home state. Table IV reports standard errors in parentheses; the main-text note does not specify their clustering.

$$Y_i = \sum_j D_{ij}\phi_j + \lambda_{J_i} + X_i'\beta + \varepsilon_i$$

**Admissions-credential outcome specification (Figure XV, pp. 128-130).** Among applicants admitted or waitlisted at the Ivy-Plus college with the most granular ratings, the paper regresses outcomes on four indicators: legacy, recruited athlete, high nonacademic rating, and high academic rating. It compares those raw outcome coefficients with coefficients from a regression of adjusted college value added on the same indicators. College value added is estimated from college fixed effects controlling for test scores, parental income, and demographics, then rescaled by the ratio of the waitlist causal estimate to the observational value-added estimate. The analysis also uses elite graduate-school attendance and prestigious-firm employment as outcomes. The Figure XV note does not state the standard-error clustering. Robustness analyses add controls from the admissions model (text p. 129; Online Appendix Table A.13).

$$Y_i = \alpha + \theta_L L_i + \theta_A A_i + \theta_N N_i + \theta_H H_i + \varepsilon_i$$

**Surrogate-index outcome construction (Section II.C.4, p. 67).** For cohorts with age-33 outcomes, the authors regress top-1% status and mean income rank on graduate-school and employer fixed effects interacted with age-at-observation indicators for ages 22-25. They use the fitted values as predicted age-33 outcomes for younger cohorts. The main text identifies the fixed-effect structure and target outcomes but does not state a standard-error procedure for this prediction regression.

$$Y_{i,33} = \sum_{a=22}^{25} \left(\mu_{G_{ia},a} + \nu_{F_{ia},a}\right) + \varepsilon_i$$

Here $$G_{ia}$$ and $$F_{ia}$$ denote the graduate-school and employer category assigned to individual $$i$$ at age $$a$$; a separate regression is run for each target outcome.

**Admissions-rate model for legacy counterfactuals (Figure V, pp. 84-85).** The authors estimate a linear-probability model on non-legacy applicants and apply its coefficients to legacy applicants to predict their counterfactual admission rate without a legacy preference. The model includes race, gender, first-generation status, entering cohort, and application round; fixed effects for the full tuple of admissions-office ratings, GPA where available, parental-income bin, and high school; and weights to match attendees' test-score distribution. The figure note does not state the standard-error clustering; the sample is applicants in the selected Ivy-Plus colleges with internal admissions records.

$$P_{ij} = \alpha + X_i'\beta + \lambda_{ratings_i} + \lambda_{GPA_i} + \lambda_{income_i} + \lambda_{HS_i} + \varepsilon_{ij}$$

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
