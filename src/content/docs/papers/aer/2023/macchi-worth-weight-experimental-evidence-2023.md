---
title: "Worth Your Weight: Macchi (2023)"
description: >-
  Distilled: Two field experiments in Kampala, Uganda show that obesity
  functions as a wealth signal in low-income countries, raising credit access
  by an amount equivalent to a 60 percent increase in self-reported income,
  driven by statistical discrimination that weakens when
  financial information is provided. AER 2023, paywalled. Seven core results
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
    - beliefs accuracy about the obesity wealth signal
  outcomeClass: [credit-supply, household-finance]
  license: "paywalled (no license block in Crossref metadata; AEA publisher site pubs.aeaweb.org returned HTTP 403 on 2026-06-25; OpenAlex open_access_pdf is null)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-403 (pubs.aeaweb.org Cloudflare challenge, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
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
    period: 2019-11
    frequency: mixed
    dataType: [experimental, survey, administrative]
    granularity: [individual]
    n: "511 residents (beliefs experiment); 238 loan officers, 6,645 profile evaluations (credit experiment)"
  findings:
    - { ref: R1, outcome: "perceived wealth of obese individuals", metric: sd-effect, value: "0.699 SD (SE=0.077, p=0.000)", direction: positive, vsBenchmark: "vs. nonobese version of same portrait; interaction Obese x MultiSignals = -0.190 (SE=0.104, p>0.05)" }
    - { ref: R2, outcome: "perceived non-wealth traits (beauty, health, longevity, self-control, ability, trustworthiness)", metric: sd-effect, value: "coefficients range from -0.072 (life expectancy) to 0.113 (beauty), all p>0.05; trustworthiness -0.358 (SE=0.691, n=679, p>0.05)", direction: none }
    - { ref: R3, outcome: "credit access (approval likelihood, creditworthiness, financial ability)", metric: sd-effect, value: "approval 0.199 SD (p=0.00); creditworthiness 0.151 SD (p=0.00); financial ability 0.180 SD (p=0.00)", direction: positive }
    - { ref: R4, outcome: "loan officer referral request (real choice)", metric: sd-effect, value: "0.066 SD (p=0.04); approx 3 percentage points vs 70.5% base referral rate", direction: positive }
    - { ref: R5, outcome: "credit access (approval likelihood)", metric: coefficient, value: "Obese x FinancialInformation = -0.129 (SE=0.038); premium drops approx 70% when financial info provided (p=0.041)", direction: negative, vsBenchmark: "vs. no-financial-information arm" }
    - { ref: R6, outcome: "credit access by borrower quality (approval likelihood)", metric: coefficient, value: "Obese x Low DTI ratio = -0.152 (SE=0.045); p-value Obese + Obese x Low DTI = 0 is 0.149 (insignificant for high-quality borrowers)", direction: negative, vsBenchmark: "vs. high-DTI borrowers where premium is significant" }
    - { ref: R7, outcome: "beliefs about obesity credit premium and wealth signal", metric: sd-effect, value: "laypeople overestimate credit premium by 2x (approval) to 4x (referral); perceived income diff approx US$230/month vs actual approx US$110/month", direction: positive, vsBenchmark: "vs. actual loan officer evaluations in credit experiment" }
  resultType: new-finding
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
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20211879", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] array in Crossref response; publisher American Economic Association; pubs.aeaweb.org returned HTTP 403 (Cloudflare); OpenAlex open_access_pdf is null; classified as paywalled with no open-access licence detected" }
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

**Overall (paper's conclusion).** Obesity is a status symbol in Kampala that provides economically large benefits in credit markets because loan officers use it as a proxy for wealth under asymmetric information. The premium is consistent with statistical discrimination: it falls by 50 to 70 percent when financial information is provided and is concentrated among lower-quality borrowers where uncertainty about creditworthiness is greatest. People broadly overestimate both the obesity wealth signal and the credit market benefits, pointing to market distortions from inaccurate beliefs.

## Theory / model

The paper has no formal structural model. It tests the statistical discrimination hypothesis from Akerlof (1976): when credible information about creditworthiness is costly or unavailable, decision-makers rationally use observable signals that correlate with the underlying trait. In Uganda, body mass and wealth are positively correlated across all wealth quintiles (Figure 1, p. 2292), so Bayesian agents who observe obesity should update toward wealth. The credit market is a natural setting: loan applications in Kampala are dealt in person, and loan officers in poor countries face both moral hazard and adverse selection, as described by Karlan and Zinman (2009) (p. 2299).

The empirical test has two ingredients. First, the beliefs experiment isolates whether obesity specifically signals wealth (and not beauty, health, or trust), which is a necessary condition for a statistical discrimination interpretation. Second, the credit experiment cross-randomizes the degree of information asymmetry: under statistical discrimination, providing verified financial information should reduce the obesity premium, whereas taste-based discrimination (preference for obese borrowers independent of their wealth signal) should be unaffected.

Beliefs accuracy is assessed by comparing the obesity premium estimated among loan officers with the same premium as guessed by the general population. Overestimation is consistent with stereotyping models (Bordalo et al. (2016)), where a visible trait associated with a group becomes overweighted as a signal. Pluralistic ignorance (people think others rely on obesity more than themselves) is also consistent with the second-order beliefs results (Table 2 Panel B, p. 2298). The broader motivation for studying status-signal benefits draws on Bursztyn et al. (2017), who provide field-experimental evidence that demand for visible status goods generates tangible social and economic returns.

## Method

Two OLS panel regressions with fixed effects. The paper adapts the incentivized resume rating (IRR) design of Kessler, Low, and Sullivan (2019) and extends the correspondence study approach of Bertrand and Mullainathan (2004) from labor markets to credit markets in a developing country. The key methodological innovation over standard correspondence studies is the within-person portrait variation: rather than comparing different people at different body masses, each portrait pair is the same person morphed to a thinner (normal-weight) and a fatter (obese) version, eliminating confounding from other visible characteristics.

**Beliefs experiment.** Respondents rate portrait pairs along seven outcomes on a 1-4 scale. The estimating equation (p. 2296) is:

$$
Y^k_{ij} = \beta_0 + \beta_1 \text{Obese}_{ij} + \beta_2 \text{MultiSignals}_{j} + \beta_3 \text{Obese}_{ij} \times \text{MultiSignals}_{j} + \alpha_i + \gamma_j + u_{ij} \tag{1}
$$

where $$Y^k_{ij}$$ is respondent $$j$$'s rating of portrait $$i$$ on outcome $$k$$ (standardized), $$\text{Obese}_{ij}$$ is a dummy for the fatter (obese) version, $$\text{MultiSignals}_j$$ indicates the respondent was shown a second wealth signal (car ownership or slum residence), $$\alpha_i$$ are portrait-pair fixed effects, and $$\gamma_j$$ are respondent fixed effects. Standard errors are clustered at the respondent level. The coefficient of interest is $$\beta_1$$, capturing the causal effect of obesity on ratings, controlling for portrait-specific characteristics and respondent rating tendencies.

**Credit experiment.** Loan officers evaluate 30 borrower profiles each (238 officers, 6,645 evaluations). The credit regression (p. 2303) is:

$$
Y^k_{ij} = \beta_0 + \beta_1 \text{Obese}_{ij} + \beta_2 \text{FinancialInformation}_{ij} + \beta_3 \text{Obese}_{ij} \times \text{FinancialInformation}_{ij} + \delta_i + \gamma_j + u_{ij} \tag{2}
$$

where $$Y^k_{ij}$$ is loan officer $$j$$'s rating of profile $$i$$ on outcome $$k$$ (standardized), $$\text{Obese}_{ij}$$ is a dummy for the borrower's portrait being the obese version, $$\text{FinancialInformation}_{ij}$$ indicates whether the profile displays self-reported financial information (occupation, collateral, monthly revenue and profits), $$\delta_i$$ are borrower profile fixed effects, and $$\gamma_j$$ are loan officer fixed effects. Standard errors are clustered at the loan officer level. $$\beta_1$$ captures the obesity premium absent any financial information; $$\beta_3$$ captures the reduction in that premium when information asymmetry is reduced by financial disclosure.

## Empirical specifications

**Beliefs experiment design.** A 2×3 factorial structure crosses obesity status (obese vs. nonobese portrait) with the number of wealth signals available (no signal, one signal, two signals). Portrait pairs are 30 Kampala residents plus 4 White-race (computer-generated) portraits, each morphed to a thinner (normal-weight, BMI 18-26) and a fatter (obese, BMI 30-46) version using photo-morphing software, for a total of 34 portrait pairs (Figure A1, p. 2316). Each respondent rates 4 portraits drawn randomly from the set, always seeing one version of the portrait (obese or nonobese) within each pair. Stratified sample: 511 Kampala residents from the Greater Kampala Metropolitan Area, balanced by age, gender, and socioeconomic status (Table 1, p. 2294). Outcome variables are standardized; standard errors are clustered at the respondent level.

**Credit experiment design.** A 2×3 design cross-randomizes obesity (obese vs. nonobese portrait of the borrower) with financial information (no financial info / self-reported info with low DTI ratio / self-reported info with high DTI ratio). The 30 hypothetical borrower profiles are built from 187 real prospective borrowers and information from loan officer focus groups (p. 2302). Each profile is associated with a weight-manipulated portrait (same portrait set as the beliefs experiment), a name, passport number, nationality, date of birth, and loan information; profiles displaying self-reported financial information also show monthly revenue, profits, occupation, and collateral. Loan officers evaluate 30 profiles during working hours, with real incentives (they are referred to real borrowers matching their choices at study end, following Kessler, Low, and Sullivan (2019)). The first 10 profiles per loan officer show no financial information; the last 20 show self-reported financial information. Standard errors are clustered at the loan officer level. Robustness: randomization inference with 5,000 replications (online Appendix Figure G5).

**Identification.** The within-portrait-pair random assignment (same person, different body mass) is the core identification strategy: observable characteristics (face, age, gender) are held constant across conditions. In the credit experiment the 2×3 design additionally provides within-profile variation in financial information availability, so the interaction term $$\beta_3$$ in equation (2) identifies the change in the obesity premium as asymmetric information is reduced. The credit experiment uses borrower profile and loan officer fixed effects, so identification comes from within-profile variation in the obesity treatment.

**Heterogeneity analysis.** The mechanism test allows for heterogeneity in the DTI ratio (Table 4, p. 2308): most of the obesity premium is driven by lower-quality borrowers (high DTI), consistent with statistical discrimination theory (Bertrand and Mullainathan (2004)). A complementary test shows that the obesity premium for profiles rated as having more reliable financial information is smaller (Table 3 col. 5, p. 2306), further supporting the information asymmetry channel over taste-based explanations.

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
