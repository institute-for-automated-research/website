---
title: "Worth Your Weight: Macchi (2023)"
description: >-
  Distilled: Two field experiments in Kampala, Uganda show that obesity
  functions as a wealth signal in low-income countries, raising credit access
  by an amount equivalent to a 60 percent increase in self-reported income,
  driven by statistical discrimination that weakens when
  financial information is provided. AER 2023, paywalled. Twenty-one core results
  with source locators, the experimental designs, and the regression
  specifications.
sidebar:
  label: Macchi 2023
  order: 1
tags: [paper-summary, development-economics, discrimination, credit-markets, information-economics, health-economics, experimental, panel-regression, developing-countries, peer-reviewed, unreplicated]
paper:
  authors: Elisa Macchi
  authorList:
    - { family: Macchi, given: Elisa, affiliation: Brown University }
  year: 2023
  venue: American Economic Review 113(9), September 2023, 2287-2322
  venueShort: AER 2023
  doi: 10.1257/aer.20211879
  jel:
    codes: [D82, G21, G51, I12, O16, Z13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Names, Identity, and Discrimination Research', 'Consumer Market Behavior and Pricing', 'Income, Poverty, and Inequality']
  dataAccess: hand-collected
  outcome:
    - perceived wealth of obese individuals (beliefs experiment)
    - credit access (approval likelihood, creditworthiness, financial ability, referral)
    - repayment conditional on borrowing (Uganda National Panel Survey)
    - beliefs accuracy about the obesity wealth signal
    - perceived reliability of borrowers’ self-reported financial information
  outcomeClass: [credit-supply, household-finance]
  license: "paywalled (no license block in Crossref metadata; AEA publisher site pubs.aeaweb.org returned HTTP 403 on 2026-06-25; OpenAlex lists no open-access PDF)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-403 (pubs.aeaweb.org Cloudflare challenge, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 21
  citedByCount: 22
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, randomized-survey-experiment]
    identification: randomized
  contributionType: [new-fact, new-data]
  mechanisms: [information-asymmetry]
  introducesData: true
  scope:
    region: Uganda (Kampala)
    assetClass: credit (microfinance and formal lending)
    period: "Experiments: 2019-11; income-beliefs follow-up: during COVID-19; UNPS: 2019-2020"
    frequency: mixed
    dataType: [experimental, survey]
    granularity: [individual]
    n: "511 residents (beliefs experiment); 124 residents (income-beliefs follow-up); 238 loan officers, 6,645 profile evaluations (credit experiment)"
  findings:
    - { ref: R1, outcome: "perceived wealth of obese individuals", metric: sd-effect, value: "0.699 SD (SE=0.077, p=0.000)", direction: positive, vsBenchmark: "vs. nonobese version of same portrait; interaction Obese x MultiSignals = -0.190 (SE=0.104, p>0.05)" }
    - { ref: R2, outcome: "perceived non-wealth traits (beauty, health, longevity, self-control, ability, trustworthiness)", metric: sd-effect, value: "coefficients range from -0.072 (life expectancy) to 0.113 (beauty), all p>0.05; trustworthiness -0.358 (SE=0.691, n=679, p>0.05)", direction: none }
    - { ref: R3, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: sd-effect, value: "approval 0.199 SD (p=0.00); creditworthiness 0.151 SD (p=0.00); financial ability 0.180 SD (p=0.00)", direction: positive }
    - { ref: R4, outcome: "loan officer referral request (real choice)", metric: sd-effect, value: "0.066 SD (p=0.04); approx 3 percentage points vs 70.5% base referral rate", direction: positive }
    - { ref: R5, outcome: "credit access (approval likelihood)", metric: coefficient, value: "Obese x FinancialInformation = -0.129 (SE=0.038); premium drops approx 70% when financial info provided (p=0.041)", direction: negative, vsBenchmark: "vs. no-financial-information arm" }
    - { ref: R6, outcome: "credit access by borrower quality (approval likelihood)", metric: coefficient, value: "Obese x Low DTI ratio = -0.152 (SE=0.045); p-value Obese + Obese x Low DTI = 0 is 0.149 (insignificant for high-quality borrowers)", direction: negative, vsBenchmark: "vs. high-DTI borrowers where premium is significant" }
    - { ref: R7, outcome: "beliefs about obesity credit premium and wealth signal", metric: sd-effect, value: "laypeople overestimate credit premium by 2x (approval) to 4x (referral); perceived income diff approx US$230/month vs actual approx US$110/month", direction: positive, vsBenchmark: "vs. actual loan officer evaluations in credit experiment" }
    - { ref: R8, outcome: "perceived wealth of obese individuals", metric: p-value, value: "test that car ownership's wealth-rating effect equals the obesity effect: p=0.4397", direction: none, vsBenchmark: "car ownership in the multiple-signal arm vs obesity in the single-signal arm" }
    - { ref: R9, outcome: "beliefs about obesity credit premium and wealth signal", metric: sd-effect, value: "second-order wealth-rating effect of obesity: 0.731 SD (SE=0.079); first-order estimate 0.699 SD (SE=0.077)", direction: positive, vsBenchmark: "incentivized guesses of others' ratings vs respondents' own ratings" }
    - { ref: R10, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: sd-effect, value: "self-reported financial information coefficients: approval 0.168, financial ability 0.118, creditworthiness 0.105, referral 0.048 SD", direction: positive, vsBenchmark: "profiles with vs without self-reported financial information" }
    - { ref: R11, outcome: "perceived reliability of borrowers’ self-reported financial information", metric: sd-effect, value: "Obese coefficient for perceived information reliability: 0.043 SD (SE=0.017); Obese x Self-reported coefficient: 0.000", direction: positive, vsBenchmark: "reliability rating among obese vs nonobese profile portraits, conditional on financial information" }
    - { ref: R12, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: coefficient, value: "obesity premium with financial information (Obese + Obese x Self-reported): approval 0.070 (p=0.001), financial ability 0.098 (p=0.000), creditworthiness 0.067 (p=0.006), referral 0.035 (p=0.105)", direction: positive, vsBenchmark: "profiles with self-reported information; borrower profile and loan officer fixed effects" }
    - { ref: R14, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: probability, value: "about 90% of loan officers said an obese borrower was more likely to get a loan than a normal-weight borrower", direction: positive, vsBenchmark: "explicit officer beliefs relative to normal weight" }
    - { ref: R15, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: coefficient, value: "UNPS: overweight coefficient 0.111 (SE=0.056, p=0.047); obese coefficient 0.070 (SE=0.055, p=0.204); BMI coefficient for borrowing from nonprofit institutions -0.014 (SE=0.006); repayment obese coefficient 0.272 (SE=0.133)", direction: mixed, vsBenchmark: "observational Uganda National Panel Survey 2019-2020, not a causal estimate" }
    - { ref: R18, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: coefficient, value: "interactions with financial information: age 0.002 (SE=0.003); USh 5 million 0.202 (SE=0.058); USh 7 million 0.190 (SE=0.069); home improvement 0.565 (SE=0.074); purchase animal -0.021 (SE=0.085); purchase asset 0.275 (SE=0.086); purchase land 0.352 (SE=0.069)", direction: mixed, vsBenchmark: "placebo check for generalized inattention; signs are not systematically negative" }
    - { ref: R19, outcome: "perceived wealth of obese individuals", metric: sd-effect, value: "Multiple wealth signal coefficient: 0.677 SD (SE=0.199); Obese x Multiple wealth signal interaction: -0.190 SD (SE=0.104)", direction: positive, vsBenchmark: "additional asset or residence signal relative to no additional signal" }
  resultType: confirms
  relatesTo:
    - { cite: "Akerlof (1976)", doi: '10.2307/1885324', relation: tests, note: "paper empirically tests statistical discrimination: observable obesity signals wealth when verified information is absent" }
    - { cite: "Karlan and Zinman (2009)", doi: '10.3982/ecta5781', relation: builds-on, note: "credit market information asymmetries (moral hazard and adverse selection) in poor countries motivate the credit experiment design" }
    - { cite: "Kessler, Low, and Sullivan (2019)", doi: '10.1257/aer.20181714', relation: builds-on, note: "incentivized resume rating (IRR) design adapted from labor to credit markets and to body mass" }
    - { cite: "Bertrand and Mullainathan (2004)", doi: '10.1257/0002828042002561', relation: extends, note: "correspondence study design extended from race/name in labor markets to body mass in credit markets in a developing country" }
    - { cite: "Bursztyn et al. (2017)", relation: cites, note: "experimental evidence on demand for status goods motivates why visible status signals confer market benefits" }
  openQuestions:
    - 'Whether statistical discrimination by body mass is accurate or inaccurate: the experiment cannot measure real borrower loan performance because profiles are hypothetical, and outcome-based tests of accurate discrimination are infeasible by design (p. 2309).'
    - 'Whether banning visible identifiers in loan applications would improve allocative efficiency: the paper identifies the obesity premium but cannot say whether eliminating visual screening would lead to better credit allocation (p. 2315).'
    - 'External validity beyond Kampala: results hold in a small-scale rural Malawi extension but broader generalization across countries or types of credit institutions requires more evidence (pp. 2314-2315).'
  replicationCode:
    url: https://doi.org/10.3886/E181481V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 2287-2322 plus Appendix A-A3); seven results extracted from the PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; three fixes applied: (1) R2 magnitude range corrected from '0.005–0.113' to include life expectancy -0.072 and trustworthiness -0.358 per Table 2 Panel A; (2) JEL codes completed from [D82,G21,Z13] to [D82,G21,G51,I12,O16,Z13] per p.2287; (3) portrait-set composition corrected from '34 Kampala+4 computer-generated' to '30 Kampala+4 White-race (computer-generated)=34 pairs' per p.2293; all other locators and magnitudes confirmed." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-read the full 36-page PDF; appended fourteen result rows, updated findings and row count, added the behavioral-bias mechanism, and completed the formal sections with the numbered equation and estimating specifications. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 21 Core results, equations and specifications, classification axes, findings, prose, frontmatter, and DOI edges against the PDF; corrected R15 repayment coefficient and R21 replication-count attribution, refined data and mechanism classifications, added three locatable related-work mentions, and set resultType to confirms. Table locator script could not detect most captions; PDF locators were checked directly. No headline results are omitted." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20211879", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] array in Crossref response; publisher American Economic Association; pubs.aeaweb.org returned HTTP 403 (Cloudflare); OpenAlex lists no open-access PDF; classified as paywalled with no open-access licence detected" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the hypotheses it tests, and the two experimental designs with their regression specifications: enough to know what it found and how, without reading all 36 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20211879).

## TL;DR

Macchi (2023) provides field-experimental evidence that obesity functions as a wealth signal in Uganda and confers tangible market benefits through statistical discrimination. Two complementary field experiments are set in Kampala. The first, a beliefs experiment with 511 residents rating 34 weight-manipulated portrait pairs, shows that obese portraits are rated 0.70 standard deviations wealthier than their nonobese counterparts, while obesity has no effect on perceived beauty, health, longevity, self-control, or trustworthiness. The second, a credit experiment with 238 professional loan officers evaluating 6,645 hypothetical borrower profiles, shows that obese borrowers receive significantly better credit ratings and are three percentage points more likely to be referred, equivalent in magnitude to a 60 percent raise in self-reported monthly income. The premium falls by 50 to 70 percent when borrowers provide self-reported financial information, consistent with loan officers using body size as a proxy for wealth under asymmetric information (statistical discrimination, following Akerlof (1976)). A third exercise shows that people overestimate both the obesity credit premium (by a factor of two to four) and the income difference between obese and normal-weight people (by two to three times), suggesting beliefs about obesity benefits are inaccurate and market distortions follow.

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Obesity raises perceived wealth by 0.70 SD; the signal holds when other wealth signals (car, slum) are present | Table 2 Panel A, p. 2298 | Obese coeff = 0.699 SD (SE=0.077, p=0.000); Obese × MultiSignals = -0.190 (SE=0.104, p>0.05) |
| R2 | Obesity has no effect on perceived beauty, health, life expectancy, self-control, ability, or trustworthiness | Table 2 Panel A, p. 2298 | Coefficients range from -0.072 (life expectancy) to 0.113 (beauty), all p > 0.05; trustworthiness -0.358 (SE=0.691, n=679); wealth is the sole affected trait |
| R3 | Loan officers rate obese borrowers as significantly more creditworthy, financially able, and likely to be approved | Table 3 col. 1-3, p. 2306 | Approval: +0.199 SD (p=0.00); Financial ability: +0.180 SD (p=0.00); Creditworthiness: +0.151 SD (p=0.00) |
| R4 | Loan officers are more likely to request a real meeting with obese borrowers (a real-stakes choice) | Table 3 col. 4, p. 2306 | +0.066 SD (p=0.04); approx 3 percentage points vs. a 70.5% base referral rate |
| R5 | Providing self-reported financial information reduces the obesity premium by 50-70% (mechanism: statistical discrimination) | Table 3, p. 2306 | Obese × FinancialInformation = -0.129 (SE=0.038) for approval; premium drops approx 70% for approval likelihood (p=0.041) |
| R6 | Obesity premium concentrated among lower-quality borrowers (high DTI); insignificant for high-quality (low-DTI) borrowers | Table 4, p. 2308 | Obese × Low DTI ratio = -0.152 (SE=0.045) for approval; p-value: Obese + Obese×Low DTI = 0 is 0.149 |
| R7 | Laypeople overestimate the obesity credit premium by 2-4× and overestimate the income advantage of obese individuals by 2-3× | Figure 5, p. 2311; Figure 6, p. 2313 | Perceived credit premium: 2× actual (approval), 4× actual (referral); perceived income diff: approx US$230/month vs. actual approx US$110/month |
| R8 | The test does not reject equal wealth-rating effects for car ownership and obesity | Text p. 2296 | Equality test: car-ownership effect in the multiple-signal arm versus obesity effect in the single-signal arm, p=0.4397 |
| R9 | Incentivized second-order beliefs also treat obesity as a wealth signal, with a null effect on trustworthiness | Table 2 Panel B, p. 2298 | Obese coefficient for wealth beliefs about others: 0.731 SD (SE=0.079); trustworthiness: -0.504 (SE=0.441, n=679) |
| R10 | Self-reported financial information improves officers' credit ratings and referral choices | Table 3, p. 2306 | Financial-information coefficients: approval 0.168, financial ability 0.118, creditworthiness 0.105, referral request 0.048 SD |
| R11 | Loan officers rate financial information as more reliable when the profile shows an obese portrait | Table 3 col. 5, p. 2306 | Obese coefficient = 0.043 SD (SE=0.017); Obese × Self-reported coefficient = 0.000; n=4,438 |
| R12 | An obesity premium remains for credit ratings after financial disclosure, while the remaining referral premium is not statistically significant | Table 3, p. 2306 | Obese + Obese × Self-reported: approval 0.070 (p=0.001), financial ability 0.098 (p=0.000), creditworthiness 0.067 (p=0.006), referral request 0.035 (p=0.105) |
| R13 | Credit ratings rise with borrower BMI from overweight levels, with no penalty at BMI values above 40 | Figure 3, p. 2304; text p. 2303 | Binned BMI plots trend upward from BMI 25 onward; the paper reports no decline for BMI above 40 and no single slope coefficient |
| R14 | Loan officers' explicit beliefs match the direction of the experimental premium | Figure 4, p. 2310; text p. 2309 | About 90% said an obese borrower was more likely to get a loan than a normal-weight borrower |
| R15 | National survey data show a positive, noncausal association between weight and borrowing; repayment also correlates positively with obesity | Appendix Table A3, p. 2320; text p. 2309 | Overweight: 0.111 (SE=0.056, p=0.047); obese: 0.070 (SE=0.055, p=0.204); obese repayment coefficient: 0.272 (SE=0.133); for-profit/nonprofit BMI slope test p=0.126 |
| R16 | A small rural Malawi extension shows similar wealth and creditworthiness ratings for obese portraits | Text p. 2315 | The paper describes the pattern as similar to Kampala but reports no numerical estimate in the main text |
| R17 | Credit-experiment heterogeneity checks do not support homophily or a simple taste-based account | Text p. 2308; Online Appendix Tables G8-G9 | The premium is stronger for male borrowers, persists in same-sex borrower-lender pairs, and is not systematically correlated with loan officer body size or other observed characteristics |
| R18 | Added financial information does not mechanically attenuate every borrower characteristic, supporting the information-channel interpretation over generalized inattention | Appendix Table A2, p. 2319; text p. 2307 | Financial-information interactions have mixed signs: age 0.002 (SE=0.003), USh 5 million 0.202 (SE=0.058), USh 7 million 0.190 (SE=0.069), home improvement 0.565 (SE=0.074), animal purchase -0.021 (SE=0.085), asset purchase 0.275 (SE=0.086), land purchase 0.352 (SE=0.069) |
| R19 | Other wealth information adds to perceived wealth independently of obesity | Table 2 Panel A, p. 2298 | Multiple wealth signal coefficient = 0.677 SD (SE=0.199); Obese × Multiple wealth signal = -0.190 SD (SE=0.104) |
| R20 | The portrait manipulation check makes a thinness-penalty explanation for the beliefs experiment unlikely | Figure A1, p. 2316; text p. 2295 | All fatter portraits are perceived as obese; none of the thinner portraits is perceived as underweight, although a few are perceived as overweight |
| R21 | The credit-experiment results remain robust under randomization inference | Text p. 2305; Table A1, p. 2318; Online Appendix Figure G5 | The text reports that main results are robust to a randomization-inference exercise; Table A1's treatment-balance randomization-inference p-values use 5,000 replications |

**Overall (paper's conclusion).** Obesity is a status symbol in Kampala that provides economically large benefits in credit markets because loan officers use it as a proxy for wealth under asymmetric information. The premium is consistent with statistical discrimination: it falls by 50 to 70 percent when financial information is provided and is concentrated among lower-quality borrowers where uncertainty about creditworthiness is greatest. People broadly overestimate both the obesity wealth signal and the credit market benefits, pointing to market distortions from inaccurate beliefs.

## Theory / model

The paper has no formal structural model. It tests statistical discrimination as described by Akerlof (1976): when direct financial information is missing or costly, lenders can use observable traits correlated with wealth as proxies for borrower quality. The credit-market setting follows Karlan and Zinman (2009), who document moral hazard and adverse selection in poor-country lending. The paper also builds on experimental evidence of demand for status goods by Bursztyn et al. (2017), which motivates the possibility that visible status signals carry market benefits. The beliefs experiment tests whether obesity signals wealth rather than beauty, health, longevity, self-control, ability, or trustworthiness. The credit experiment then tests whether that signal changes lender decisions and whether providing borrower financial information weakens the premium (pp. 2296, 2306-2307). Since the experimental borrowers are hypothetical, the paper cannot determine whether the screening rule predicts actual repayment performance (pp. 2309, 2313).

## Method

The beliefs experiment is a randomized survey experiment using 34 weight-manipulated portrait pairs. Its manipulation check reports that all fatter images were perceived as obese and none of the thinner images as underweight, reducing the concern that results reflect a thinness penalty (Figure A1, p. 2316; text p. 2295, R20). Each respondent evaluates four randomly selected portraits, with the displayed version randomized within portrait pair. Respondents are also randomized to see either obesity alone or obesity plus another wealth signal, such as car ownership or residence in a slum. This within-pair manipulation isolates the effect of body mass while portrait-pair and respondent fixed effects absorb stable differences (pp. 2293-2296).

The credit experiment adapts an incentivized rating design to 30 hypothetical borrower profiles. The 238 loan officers each evaluate 30 profiles, for 6,645 evaluations. The portrait version and the availability and quality of self-reported financial information are randomized. The design adapts the correspondence-study approach of Bertrand and Mullainathan (2004) to body mass and credit markets, while the referral request is incentive-compatible because the matching process makes a chosen profile more likely to lead to a meeting with a real borrower of similar characteristics (pp. 2302-2303). The design tests the information-asymmetry channel by comparing the obesity premium when financial information is absent and present, then by comparing the premium across low and high debt-to-income profiles (pp. 2306-2308).

## Empirical specifications

**Beliefs experiment, first- and second-order ratings (R1, R2, R8, R9, R19).** Equation (1), printed on p. 2296, is the main specification. The outcome is the standardized rating of portrait $$i$$ on trait $$k$$ by respondent $$j$$; first-order own ratings and incentivized beliefs about others are estimated as outcomes using the same form.

$$
Y^k_{ij} = \beta_0 + \beta_1 \text{Obese}_{ij} + \beta_2 \text{MultiSignals}_{j} + \beta_3 \text{Obese}_{ij} \times \text{MultiSignals}_{j} + \alpha_i + \gamma_j + u_{ij} \tag{1}
$$

Here $$\alpha_i$$ are portrait-pair fixed effects and $$\gamma_j$$ are respondent fixed effects. Standard errors are clustered by respondent. The beliefs sample has 511 respondents and 1,699 evaluations; trustworthiness was elicited from 679 evaluations. Table 2, Panel A reports own ratings and Panel B reports second-order beliefs (Table 2, p. 2298). The car-versus-obesity equality test is reported in the text on p. 2296.

**Credit experiment, baseline and information interaction (R3-R5, R10-R12).** The main credit equation is printed without an equation number on p. 2303:

$$
Y^k_{ij} = \beta_0 + \beta_1 \text{Obese}_{ij} + \beta_2 \text{FinancialInformation}_{ij} + \beta_3 \text{Obese}_{ij} \times \text{FinancialInformation}_{ij} + \delta_i + \gamma_j + u_{ij}
$$

$$Y^k_{ij}$$ is a standardized rating or referral outcome for profile $$i$$ evaluated by loan officer $$j$$. $$\delta_i$$ and $$\gamma_j$$ are borrower-profile and loan-officer fixed effects. Standard errors are clustered by loan officer. The sample has 238 officers and 6,645 evaluations; perceived information reliability is observed for 4,438 evaluations. Table 3 reports the main effects and interaction for approval likelihood, financial ability, creditworthiness, referral request, and information reliability (p. 2306). The main text reports that the credit-experiment results are robust to a randomization-inference exercise (p. 2305; Online Appendix Figure G5, R21). Table A1's treatment-balance randomization-inference p-values use 5,000 replications (p. 2318).

**Borrower-quality split (R6).** Table 4 estimates the obesity premium separately across profiles with no financial information, low DTI, and high DTI. The paper does not print this as a numbered equation; written out from Table 4, the specification is:

$$
Y^k_{ij} = \beta_0 + \beta_1 \text{Obese}_{ij} + \beta_2 \text{HighDTI}_{ij} + \beta_3 \text{LowDTI}_{ij} + \beta_4 \text{Obese}_{ij} \times \text{HighDTI}_{ij} + \beta_5 \text{Obese}_{ij} \times \text{LowDTI}_{ij} + \delta_i + \gamma_j + u_{ij}
$$

The omitted group is profiles with no reported income information. Outcomes are standardized; profile and loan-officer fixed effects are included and standard errors are clustered by loan officer. The sample is the same 6,645 evaluations. Table 4 reports tests of the total obesity premium for high-DTI and low-DTI profiles (p. 2308). Low DTI is 0.3-0.4; high DTI is 0.9-1.05 (text p. 2307).

**Beliefs about credit decisions (R7).** Laypeople predict officers' approval ratings and referral choices for four randomly selected hypothetical profiles. The Figure 5 note describes the perceived obesity premium as the effect of obesity on guesses conditional on respondent and profile fixed effects; the actual premium is estimated on officer evaluations without financial information. The sample is the same 511 laypeople and the matching no-information officer subsample (Figure 5, p. 2311; text p. 2311). The text does not state the standard-error treatment for this comparison. Figure 6 reports the income-beliefs exercise for 124 respondents; it compares each respondent’s guessed income gap with the observed gap in the 511-person beliefs sample, reporting about US$230 versus about US$110 per month (Figure 6, p. 2313; text pp. 2312-2313).

**BMI, explicit officer beliefs, and external survey check (R13-R18).** Figure 3 plots binned BMI relationships after residualizing the outcomes and BMI on borrower-profile and loan-officer indicators, with ten BMI bins; the 6,645 profile evaluations are shown (Figure 3, p. 2304). Figure 4 codes the officers' answers to pairwise silhouette comparisons of likelihood of getting a loan; the paper reports that about 90% say obesity raises loan chances among the loan officers surveyed (Figure 4, p. 2310; text p. 2309). Appendix Table A3 uses Uganda National Panel Survey 2019-2020 data. Its outcomes are whether a respondent borrowed in the last 12 months (columns 1-2) and whether a borrower repaid (column 3); regressions include district and household fixed effects and controls for gender, age, and gender-specific age trends. The table reports 2,181 observations for borrowing and 237 for repayment; the PDF table note does not state the standard-error clustering method (Appendix Table A3, p. 2320). The Malawi extension is described in the conclusion without main-text numerical estimates (text p. 2315). The taste-based discrimination checks are summarized in the main text with references to Online Appendix Tables G8-G9 (text p. 2308). Appendix Table A2 checks for generalized inattention by estimating approval-likelihood interactions of financial information with other randomized borrower-profile characteristics, including borrower age, loan amount, and loan purpose. These regressions include borrower-profile and loan-officer fixed effects, cluster standard errors by loan officer, and use 6,645 evaluations; the paper notes that signs vary rather than all turning negative (p. 2319; discussion p. 2307).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Author-collected weight-manipulated portrait pairs | 30 Kampala resident + 4 White-race (computer-generated) portraits, morphed to normal-weight and obese versions; 34 portrait pairs total; stimulus in both experiments | No page yet |
| Author-collected beliefs experiment survey (511 Kampala residents) | Beliefs experiment: rating perceived wealth and other traits from portrait pairs; 1,699 evaluations | No page yet |
| Author-collected credit experiment (238 loan officers, 6,645 profiles) | Credit experiment: loan officer evaluations of 30 hypothetical borrower profiles cross-randomized by body mass and financial information | No page yet |
| Uganda National Panel Survey (UNPS) 2019-2020 | Auxiliary: correlates BMI with credit access in nationally representative Ugandan data (Appendix Table A3, p. 2320) | No page yet |

Primary data: original field-experimental data collected November 2019 in Kampala, Uganda, in partnership with IPA Uganda. Deposited at AEA/ICPSR (Macchi 2023, https://doi.org/10.3886/E181481V1). The experiments were preregistered on the AEA registry (Macchi 2019a and 2019b).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20211879) if you are: studying field-experimental tests of statistical discrimination in credit markets (the full design and robustness checks, including the rural Malawi replication and the randomization inference); designing portrait-based or correspondence experiments for non-labor-market settings (the IRR adaptation by Kessler, Low, and Sullivan (2019) creates real stakes without deception); analyzing obesity or malnutrition policy in developing countries (Section IV discusses implications for optimal sin taxes and anti-malnutrition programs); or interested in beliefs accuracy and overestimation of status signals (Section III and Figure 5). The Internet Appendix contains all experimental instruments and additional robustness tables. The locators in the Core results table above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(9), September 2023. Published by the American Economic Association. No open-access license detected (Crossref metadata, AEA publisher site, and OpenAlex all confirm paywalled). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Extract-only: the PDF is not hosted here.

> Macchi, Elisa. "Worth Your Weight: Experimental Evidence on the Benefits of Obesity in Low-Income Countries." *American Economic Review* 113, no. 9 (September 2023): 2287-2322. DOI: 10.1257/aer.20211879. © 2023 American Economic Association.
