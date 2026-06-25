---
title: "Law and Norms: Lane, Nosenzo & Sonderegger (2023)"
description: >-
  Distilled: Using incentivized vignette experiments and a legal-threshold
  identification strategy, Lane, Nosenzo, and Sonderegger show laws causally
  shape social norms, producing sharp discontinuities in perceived social
  appropriateness at legal thresholds across UK, US, and Chinese samples (n=7,000).
  American Economic Review 2023, paywalled. Eight core results with source
  locators, the social-image model, and the estimating regressions.
sidebar:
  label: Lane-Nosenzo-Sonderegger 2023
  order: 1
tags: [paper-summary, law-and-economics, social-norms, behavioral-economics, experimental-economics, panel-regression, peer-reviewed, unreplicated]
paper:
  authors: Tom Lane, Daniele Nosenzo, Silvia Sonderegger
  authorList:
    - { family: Lane, given: Tom, orcid: "0000-0003-2168-3042", affiliation: University of Nottingham Ningbo China }
    - { family: Nosenzo, given: Daniele, orcid: "0000-0002-0831-5408", affiliation: Aarhus University }
    - { family: Sonderegger, given: Silvia, orcid: "0000-0001-8856-449X", affiliation: University of Nottingham }
  year: 2023
  venue: American Economic Review 113(5), May 2023, 1255-1293
  venueShort: AER 2023
  doi: 10.1257/aer.20210970
  jel:
    codes: [C91, C92, D91, K00, K42, P37]
    assignedBy: paper (abstract)
    date: 2026-06-25
  topics: ["Experimental Behavioral Economics Studies", "Law, Economics, and Judicial Systems", "Taxation and Compliance Studies"]
  dataAccess: hand-collected
  outcome:
    - perceived social appropriateness of behaviors near legal thresholds
    - perceived prosocial traits (trustworthiness, honesty, altruism) of norm violators
  outcomeClass: [social-norms]
  license: "paywalled (no CC licence block in Crossref DOI metadata; open author manuscript at eprints.ncl.ac.uk)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 85
  methods:
    role: both
    contributes: legal-threshold-norm-identification
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, randomized-survey-experiment, panel-regression, legal-threshold-norm-identification]
    identification: randomized
  contributionType: [new-fact, new-method, new-theory]
  mechanisms: [information-asymmetry]
  introducesData: true
  scope:
    region: UK, US, China
    period: 2017-09..2022-03
    dataType: [survey, experimental]
    granularity: [individual]
    n: "7,000 subjects across 9 experiments; main experiment 1,248 UK subjects; robustness experiments 5,771 additional subjects"
  findings:
    - { ref: R1, outcome: perceived social appropriateness of behaviors near legal thresholds, metric: coefficient, value: "age of consent: beta2 = -0.778 (students, SE 0.184); -0.890 (gen pop 2019, SE 0.127)", direction: negative, vsBenchmark: "2-4x larger than drink-driving and speeding coefficients" }
    - { ref: R2, outcome: perceived social appropriateness of behaviors near legal thresholds, metric: coefficient, value: "alcohol to youth: beta2 = -1.035 (students, SE 0.138); -0.920 (gen pop 2019, SE 0.118)", direction: negative }
    - { ref: R3, outcome: perceived social appropriateness of behaviors near legal thresholds, metric: coefficient, value: "cash at customs: beta2 = -0.866 (students, SE 0.132); -0.948 (gen pop 2019, SE 0.124)", direction: negative }
    - { ref: R4, outcome: perceived social appropriateness of behaviors near legal thresholds, metric: coefficient, value: "drink driving: beta2 = -0.326 (students, SE 0.178, p=0.068); -0.522 (gen pop 2019, SE 0.143)", direction: mixed, vsBenchmark: "weaker than age-of-consent, alcohol, and customs vignettes" }
    - { ref: R5, outcome: perceived social appropriateness of behaviors near legal thresholds, metric: coefficient, value: "speeding: beta2 = -0.103 (students, SE 0.107, n.s.); -0.461 (gen pop 2019, SE 0.127)", direction: mixed, vsBenchmark: "weakest effect; n.s. for student sample" }
    - { ref: R6, outcome: perceived social appropriateness of behaviors near legal thresholds, metric: coefficient, value: "placebo discontinuity = 0.22 vs legal-threshold discontinuity = 0.88 (p=0.000, Krupka-Weber); no significant placebo for age-of-consent and alcohol-to-youth vignettes", direction: none, vsBenchmark: "legal-threshold effect 4x larger than placebo effect" }
    - { ref: R7, outcome: "perceived prosocial traits (trustworthiness, honesty, altruism) of norm violators", metric: coefficient, value: "trustworthiness drops 0.45-0.63; honesty drops 0.51-0.81; altruism drops 0.26-0.42 across high-effect vignettes (all p <= 0.009)", direction: negative }
    - { ref: R8, outcome: "perceived prosocial traits (trustworthiness, honesty, altruism) of norm violators", metric: coefficient, value: "CANO bad-law vignette: honesty +0.36 (p=0.002); trustworthiness +0.11; altruism +0.17 (both n.s.)", direction: positive, vsBenchmark: "upward discontinuity rules out meta-norm (rule-following) explanation" }
  resultType: new-finding
  relatesTo:
    - { cite: "Benabou and Tirole (2011)", doi: '10.3386/w17579', relation: builds-on, note: "social-image concerns framework; the paper's model extends their approach to show law exerts expressive power via esteem/stigma discontinuities at the legal threshold" }
    - { cite: "Krupka and Weber (2013)", doi: '10.1111/jeea.12006', relation: builds-on, note: "coordination-game method for incentivized second-order-belief elicitation of social norms; one of the two norm-measurement methods the paper uses" }
    - { cite: "Bursztyn, Gonzalez, and Yanagizawa-Drott (2020)", doi: '10.1257/aer.20180975', relation: cites, note: "opinion matching norm-elicitation method used alongside the Krupka-Weber method in the 2021 general-population sample" }
    - { cite: "Tankard and Paluck (2017)", doi: '10.1177/0956797617709594', relation: cites, note: "prior empirical work exploiting a US Supreme Court ruling to study law's effect on social norms; design relies on changes in existing laws" }
    - { cite: "Casoria, Galeotti, and Villeval (2020)", doi: '10.2139/ssrn.3670895', relation: cites, note: "prior work using incentivized norm elicitation and changes in COVID-19 public health regulations to measure law-norm linkages" }
  openQuestions:
    - "Whether the expressive power of law differs across demographic subgroups (gender, race); if enforcement patterns create differential signal noise across groups, law may exert unequal normative effects (p. 1290; Gorges et al. 2023 in progress)."
    - "The design measures discontinuities exactly at the legal threshold and does not capture how laws may shift the entire shape of the norm function S(.) further from the threshold (p. 1266)."
    - "How the interplay between substitution and complementarity effects between formal and social incentives relates to the nature of the institution setting formal incentives: government versus private organizations (p. 1290)."
  replicationCode:
    url: "https://doi.org/10.3886/E182995V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read PDF in full; equations, tables, and experimental results extracted from source PDF. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all 8 Core results confirmed against Table 2 and robustness experiment text. Fixed: JEL codes corrected from [K42,C91,D91] to [C91,C92,D91,K00,K42,P37] (from paper abstract); replication DOI corrected from 10.388/E182995V1 to 10.3886/E182995V1 (resolves to openICPSR; old prefix returned 404); scope.period start corrected from 2017-01 to 2017-09 (student sample recruited September 2017 per p.1269). Equations (1),(3),(4),(5),(7) verified term-by-term; all correct." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20210970", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block present; AER published by AEA is paywalled; open author manuscript exists at eprints.ncl.ac.uk (Newcastle eprints) but carries no CC-licence in Crossref metadata" }
---

**What this is.** This is an LLM-distilled skeleton of Lane, Nosenzo, and Sonderegger (2023); read the [original](https://doi.org/10.1257/aer.20210970) to replicate or extend.

## TL;DR

Lane, Nosenzo, and Sonderegger develop a legal-threshold identification strategy to test whether laws causally influence social norms. They exploit a special class of laws that regulate behavior via legal thresholds (age of consent, legal drinking age, maximum undeclared cash import, BAC drink-driving limit, motorway speed limit), measuring the social norm function S(o, 1) on both sides of each threshold using incentivized vignette experiments with 1,248 UK subjects across three samples. Under the identifying assumption that norms vary continuously near the threshold absent the law, any sharp discontinuity at the legal threshold is causally attributable to the law. Laws produce large, statistically significant drops in perceived social appropriateness for three of five behaviors (age of consent, alcohol to youth, cash at customs) and smaller effects for drink driving and speeding. Robustness experiments with 5,771 additional UK, US, and Chinese subjects show: (i) placebo thresholds produce no comparable discontinuities, ruling out focal-point and information-transmission alternatives; (ii) perceived prosocial traits (trustworthiness, honesty, altruism) shift discontinuously at legal thresholds in the same direction, consistent with a social-image signaling mechanism; and (iii) a "bad law" (CANO nuisance ordinance) reverses the direction of discontinuity in honesty, ruling out the meta-norm (rule-following) explanation.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Age of consent: strong norm discontinuity at legal threshold | Table 2 col A1/B1/C1/D1, Fig 1, p. 1273 | beta2 = -0.778\*\*\* (students, SE 0.184); -0.890\*\*\* (gen pop 2019, SE 0.127); -0.803\*\*\* / -0.813\*\*\* (gen pop 2021 first/second order) |
| R2 | Alcohol to youth: largest norm discontinuity across all samples | Table 2 col A2/B2/C2/D2, Fig 1, p. 1273 | beta2 = -1.035\*\*\* (students, SE 0.138); -0.920\*\*\* (gen pop 2019, SE 0.118); up to -1.137\*\*\* (gen pop 2021 second order) |
| R3 | Cash at customs: strong norm discontinuity | Table 2 col A3/B3/C3/D3, Fig 1, p. 1273 | beta2 = -0.866\*\*\* (students, SE 0.132); -0.948\*\*\* (gen pop 2019, SE 0.124); -0.821\*\*\* / -0.971\*\*\* (gen pop 2021) |
| R4 | Drink driving: weaker norm discontinuity | Table 2 col A4/B4, p. 1273-1274 | beta2 = -0.326 (students, SE 0.178, p=0.068); -0.522\*\*\* (gen pop 2019, SE 0.143); roughly half of R1/R2/R3 magnitudes |
| R5 | Speeding: weakest effect, insignificant for student sample | Table 2 col A5/B5, p. 1273-1274 | beta2 = -0.103 (students, SE 0.107, n.s.); -0.461\*\*\* (gen pop 2019, SE 0.127) |
| R6 | Placebo thresholds: no systematic discontinuities | Fig 2, Appendix F, p. 1278-1280 | Krupka-Weber: placebo discontinuity = 0.22 vs legal threshold = 0.88 (difference p=0.000); no significant placebo for age-of-consent and alcohol-to-youth vignettes under either method |
| R7 | Perceived trustworthiness and honesty drop sharply at legal threshold (Exp 2) | Fig 3, Appendix G, p. 1282-1283 | Trustworthiness drops 0.45-0.63 units; honesty drops 0.51-0.81 units; altruism drops 0.26-0.42 units across high-effect vignettes (all p <= 0.009) |
| R8 | "Bad" law (CANO): upward discontinuity in honesty rules out rule-following mechanism (Exp 3) | Fig 4, Appendix I, p. 1286 | Honesty +0.36 (p=0.002); trustworthiness +0.11; altruism +0.17 (both n.s.); rule-compliance shows near-zero discontinuity (-0.04) |

**Overall.** Laws exert causal expressive power on social norms, creating sharp discontinuities in perceived social appropriateness at legal thresholds. The effect is large for behaviors with high perceived intentionality and high law-enforcement detectability (age of consent, alcohol to youth, cash at customs), and weaker for behaviors that are harder to detect or likely to be unintentional (drink driving, speeding). The pattern of results across all five robustness experiments is consistent with a social-image signaling mechanism (Benabou and Tirole 2011) in which laws make illegality a credible signal of low prosociality.

## Theory / model

The model (Section I, pp. 1260-1264) adapts the social-image framework of Benabou and Tirole (2006, 2011). An individual with privately known type theta (measuring prosociality) faces an opportunity o drawn from a distribution with density g(.) and full support [o_min, o_max] with o_min > 0, where o is the magnitude of the negative externality imposed on others. The individual can seize or leave the opportunity. A law sets a threshold o-bar above which seizing the opportunity is illegal; if caught (with probability p), the individual incurs a material penalty K.

**Utility.** Utility depends on the material payoff, the psychological cost of imposing externalities, and social esteem from observers' inferences about type (eq. 1, p. 1260):

$$u_a(o;\theta) = (t - \theta o - pK I_{o>\bar{o}})a + S(o,a), \tag{1}$$

where t is the material gain, $$I_{o>\bar{o}}$$ is an indicator for illegal action, a = 1 if the opportunity is seized (a = 0 otherwise), and S(o, a) is the social esteem accruing to the individual. Social esteem equals observers' expectation of the individual's type upon observing opportunity o and action a (pp. 1260-1261):

$$S(o,1) \equiv E(\theta \mid o, a=1), \qquad S(o,0) \equiv E(\theta \mid o, a=0).$$

**Absence of law (Proposition 1, p. 1262).** When no law sets a threshold (p = 0), equilibrium esteem is determined by the highest type theta-hat who seizes opportunity o, defined by the indifference condition (eq. 3, p. 1261):

$$t - \hat{\theta}_o \, o - \Delta(\hat{\theta}_o) = 0, \tag{3}$$

where $$\Delta(\hat{\theta}_o) \equiv \mathcal{M}^+(\hat{\theta}_o) - \mathcal{M}^-(\hat{\theta}_o)$$ is the esteem gap, with $$\mathcal{M}^-(\theta_o) \equiv E(\theta \mid \theta < \theta_o)$$ and $$\mathcal{M}^+(\theta_o) \equiv E(\theta \mid \theta > \theta_o)$$. Since theta-hat is continuously decreasing in o, S(o, 1) is also continuously decreasing in o: without law, norms do not create sharp distinctions between arbitrarily close behaviors.

**Presence of law (Proposition 2, p. 1263).** When a law sets a threshold o-bar, legal sanctions create a payoff discontinuity. The threshold type for illegal actions solves (eq. 5, p. 1263):

$$t - pK - \bar{\theta}_o \, o - \Delta(\bar{\theta}_o) = 0. \tag{5}$$

Since theta-hat (highest type taking legal action just below o-bar) always lies strictly above theta-bar (highest type taking illegal action just above o-bar), and $$\mathcal{M}^-(\cdot)$$ is increasing, the esteem function exhibits a downward discontinuity at o-bar (eq. 4, p. 1263):

$$S(o,1) = \begin{cases} \mathcal{M}^-(\hat{\theta}_o), & \text{if } o \le \bar{o}; \\ \mathcal{M}^-(\bar{\theta}_o), & \text{if } o > \bar{o}, \end{cases} \tag{4}$$

with jump:

$$\lim_{\epsilon\to 0}\bigl[S(\bar{o}-\epsilon,1) - S(\bar{o}+\epsilon,1)\bigr] = \mathcal{M}^-(\hat{\theta}_{\bar{o}}) - \mathcal{M}^-(\bar{\theta}_{\bar{o}}) > 0.$$

Proposition 3 (p. 1264) extends the result to distant observers (who see the criminal record but not the action directly): the discontinuity holds even when K = 0, since visibility of illegal behavior to a wider audience is itself a mechanism.

## Method

The empirical approach (Section II, pp. 1265-1270) exploits laws with threshold rules to identify the causal effect of law on norms, using a design analogous to regression discontinuity. The identifying assumption is that the social norm function S(.) is continuous in the vicinity of the legal threshold absent the law's expressive effect. Under this assumption, any discrete jump in measured norms at the legal threshold is causally attributable to the law (p. 1265).

**Norm elicitation.** Two incentivized methods from Krupka and Weber (2013) and Bursztyn, Gonzalez, and Yanagizawa-Drott (2020) are used:

- **Krupka-Weber method**: subjects rate vignette behavior on a four-point scale (very/somewhat socially appropriate or inappropriate) and earn a bonus when their response matches the modal response in their sample. This coordination game incentivizes truthful second-order belief reporting.
- **Opinion matching method**: a first group states personal appropriateness opinions (unincentivized); a second group guesses the first group's modal response for a financial bonus. This elicits second-order beliefs without legality as a coordination device.

**Experimental design.** Subjects are randomly assigned between-subjects to one of 4 or 8 versions of each vignette, varying the behavior's distance from the legal threshold (e.g., age of the younger person in the age-of-consent vignette being 1-4 months above or below the threshold). The random assignment of subjects to versions means the identification design is randomized, not observational; the RDD-analogy is in the analysis, not in whether subjects select their treatment. Prior work such as Tankard and Paluck (2017) and Casoria, Galeotti, and Villeval (2020) exploited natural changes in existing laws to study law's effect on norms; those designs face the challenge that simultaneous events may confound the measured effect. The present design instead uses legal thresholds, requiring only the local continuity assumption rather than assuming all other norm-relevant factors are unchanged by a legislative change.

**Samples.** The main experiment (Section II.C, pp. 1269-1270, Table 1, p. 1270) ran between September 2017 and March 2021 with 1,248 UK participants across three samples: 197 students (Krupka-Weber, 2017), 375 representative general-population subjects (Krupka-Weber, 2019), and 676 representative general-population subjects (opinion matching, 2021). Robustness experiments added 5,771 subjects (Table 3, p. 1277): 1,554 UK general-population (Exp 1 placebo), 2,767 UK general-population (Exp 2 prosocial traits), 1,202 US general-population (Exp 3 bad law), and 248 Chinese students (Exp 4 weak rule of law).

## Empirical specifications

**Main regression (eq. 7, p. 1273).** For each vignette and sample, OLS is estimated with heteroskedasticity-robust standard errors:

$$s(o_i) = \alpha + \beta_1(T - o_i) + \beta_2 \, \text{Illegal}_i + \beta_3(T - o_i) \times \text{Illegal}_i + \epsilon_i, \tag{7}$$

where $$s(o_i)$$ is subject i's social appropriateness evaluation (coded +1 to -1 for four-point scale), $$(T - o_i)$$ is the signed distance from the legal threshold T (positive for legal, negative for illegal actions), $$\text{Illegal}_i$$ is a dummy equal to one for the vignette version describing illegal behavior, and $$\beta_2$$ is the key coefficient of interest: the estimated norm discontinuity at the legal threshold (the causal effect of law on normative appropriateness). Regressions for the two general-population samples include demographic controls (age, gender, income); no controls were collected for the student sample.

**Identification check.** Chow tests confirm no statistically significant differences in $$\beta_2$$ across the three high-effect vignettes (age of consent, alcohol to youth, cash at customs) within each sample (all p >= 0.136), but statistically significant differences between the first group (high effect) and the second group (drink driving, speeding), supporting the model's prediction that intentionality and law-enforcement detectability moderate the effect size (p. 1273-1276, Appendix E).

**Placebo regression (Exp 1).** An extended version of equation (7) adds dummy variables for a placebo threshold placed 5-6 units from the legal threshold and its interaction with threshold distance. The placebo produces no significant discontinuities in four of five vignettes (Krupka-Weber method); the legal-threshold discontinuity is significantly larger than the placebo in all five cases where a comparison is possible (p. 1278-1280, Appendix F).

**Prosocial-traits regression (Exp 2).** The same regression specification is applied to subjects' ratings of the likelihood that the vignette person engages in trustworthy, honest, and altruistic behavior, using the opinion-matching method with 1,984 incentivized and 783 unincentivized UK general-population subjects. Each subject sees one version of one target vignette, randomly assigned. Results (Appendix G, p. 1282-1283): statistically significant discontinuities in trustworthiness and honesty across all high-effect vignettes (all p <= 0.009), confirming the social-image mechanism.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|---------------|-----------|
| Original vignette experiment, UK samples (1,248 subjects, 2017-2021) | Main experiment measuring social norm functions; Krupka-Weber and opinion-matching methods | no page yet |
| Robustness experiment 1 (1,554 UK subjects, 2021) | Placebo-threshold test via Prolific | no page yet |
| Robustness experiment 2 (2,767 UK subjects, 2021) | Prosocial-traits elicitation via Prolific | no page yet |
| Robustness experiment 3 (1,202 US subjects, 2022) | "Bad law" CANO vignette via Prolific | no page yet |
| Robustness experiment 4 (248 Chinese students, 2017) | Weak-rule-of-law generalizability test | no page yet |

All data are author-collected online vignette experiments; replication data are deposited at https://doi.org/10.3886/E182995V1.

## When to read the full paper

Read this paper to understand the expressive function of law from a causal empirical standpoint. The theoretical model (Section I) is compact and shows formally how a social-image mechanism (Benabou and Tirole 2011) predicts exactly the pattern observed. The norm-elicitation methods (Section II.B) using Krupka and Weber (2013) and Bursztyn, Gonzalez, and Yanagizawa-Drott (2020) are carefully contrasted. The online appendices (A-K) contain full proofs, vignette wordings, robustness analyses, regression tables, and an alternative conformity-based model. Figure 1 (p. 1272) gives a visual overview of all five norm functions across all three UK samples; Table 2 (pp. 1273-1275) gives the full regression results.

## Attribution and rights

Lane, T., Nosenzo, D., and Sonderegger, S. (2023). "Law and Norms: Empirical Evidence." *American Economic Review* 113(5): 1255-1293. https://doi.org/10.1257/aer.20210970

This page is an LLM-distilled extract (claude-sonnet-4-6, 2026-06-25). Not human-verified; not reproduced. The source article is paywalled; no CC licence is recorded in Crossref metadata. An open author manuscript is available at https://eprints.ncl.ac.uk/file_store/production/293182/ACD73151-8B74-4985-A1E4-B8D65A151BE8.pdf. Replication data are available at https://doi.org/10.3886/E182995V1.
