---
title: "Evidence and Lessons on Health Impacts of Public Health Funding: Dillender (2023)"
description: >-
  Distilled: Exploiting staggered variation in Ryan White CARE Act Title I
  eligibility, this paper finds that federal HIV/AIDS funding to US cities
  reduced HIV/AIDS death rates by 15-17 percent, saved approximately 57,000
  lives through 2018 at a cost of $334,000 per death avoided, and reduced HIV
  prevalence by 36-40 percent in local estimates at the eligibility threshold.
  American Economic Review 2023, open (AEA). Nineteen
  core results with source locators, datasets used, identification strategy,
  and the estimating equations. LLM-distilled; not human-verified.
sidebar:
  label: Dillender 2023
  order: 1
tags: [paper-summary, public-health, hiv-aids, federal-funding, place-based-policy,
       health-outcomes, difference-in-differences, event-study, panel-data,
       peer-reviewed, unreplicated,
       data:vital-statistics, data:cdc-hiv-surveillance, data:seer, data:aids-public-info]
paper:
  authors: Marcus Dillender
  authorList:
    - { family: Dillender, given: Marcus, orcid: 0000-0003-3838-2465, affiliation: Vanderbilt University }
  year: 2023
  venue: American Economic Review 113(7), July 2023, 1825-1887
  venueShort: AER 2023
  doi: 10.1257/aer.20220089
  jel:
    codes: [H51, H75, I12, I18]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Healthcare Policy and Management", "HIV/AIDS Research and Interventions"]
  dataAccess: proprietary-confidential
  outcome:
    - HIV/AIDS death rates per 100,000 people
    - annual rates of new AIDS cases
    - number of people living with HIV
    - AIDS prevalence among the population
    - non-HIV/AIDS death rates per 100,000 people
    - AIDS case reporting at the Title I eligibility threshold
    - new HIV diagnoses
    - Title I funding received per city
    - HIV/AIDS deaths avoided per dollar of Title I spending
  outcomeClass: [health-survival]
  license: "AEA standard (no CC; freely readable at pubs.aeaweb.org past 12-month embargo; copyright AEA 2023)"
  licenseShort: open (AEA)
  access: open
  machineAccess: "free to read at pubs.aeaweb.org (confirmed 2026-06-25)"
  redistribution: extract-only
  resultsCount: 19
  citedByCount: 3
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, regression-discontinuity-design, panel-regression, matching]
    identification: natural-experiment
  contributionType: [new-fact, measurement]
  mechanisms: [financial-constraint, access-to-care]
  introducesData: true
  scope:
    region: US
    assetClass: US city public health outcomes
    period: 1988-01..2018-12
    frequency: annual
    dataType: [administrative]
    granularity: [aggregate]
    n: "50 cities, 1988-2018 (1,550 city-year observations)"
  findings:
    - { ref: R1, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "-0.185 (SE 0.069, p=0.010)", direction: negative, vsBenchmark: "control cities without Title I; 1988-2006 window; approximately -17%" }
    - { ref: R2, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "-0.163 (SE 0.075, p=0.036)", direction: negative, vsBenchmark: "control cities without Title I; 1988-2018 window" }
    - { ref: R3, outcome: annual rates of new AIDS cases, metric: coefficient, value: "-0.227 (SE 0.063, p=0.001)", direction: negative, vsBenchmark: "control cities without Title I; approximately -20% on average" }
    - { ref: R4, outcome: number of people living with HIV, metric: coefficient, value: "-0.510 (SE 0.152, p=0.002)", direction: negative, vsBenchmark: "RDD at 2,000-case threshold; -40% in 2008" }
    - { ref: R5, outcome: new HIV diagnoses, metric: coefficient, value: "-0.628 (SE 0.219, p=0.006)", direction: negative, vsBenchmark: "RDD at 2,000-case threshold; -47% in 2008" }
    - { ref: R6, outcome: HIV/AIDS deaths avoided per dollar of Title I spending, metric: level, value: "$334,000 per HIV/AIDS death avoided; 9,421 lives in sample; ~57,000 lives total through 2018 assuming the effect applies across Title I cities", direction: positive, vsBenchmark: "benefit-cost ratio 30 at $10M value of statistical life (Table 6)" }
    - { ref: R7, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "Table 2: population-weighted -0.154 (SE 0.063, p=0.018); all APIDS cities -0.196 (SE 0.056, p=0.001)", direction: negative, vsBenchmark: "1988-2018 baseline in 50 cities: -0.163 (Table 2, cols. 2-4)" }
    - { ref: R8, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "Table 3 Panel A specs 3-14: -0.185, -0.161, -0.183, -0.163, -0.192, -0.180, -0.146, -0.160, -0.193, -0.174, -0.186, -0.163; all reported p-values below 0.05", direction: negative, vsBenchmark: "Alternative controls and regional/state-by-year effects preserve the negative estimate" }
    - { ref: R9, outcome: HIV/AIDS and non-HIV/AIDS death rates, metric: coefficient, value: "Table 3 Panel B: age-adjusted HIV/AIDS deaths -0.187 (SE 0.069, p=0.009) and -0.163 (0.075, 0.036); HIV/AIDS death counts -0.197 (0.076, 0.012) and -0.170 (0.085, 0.052); non-HIV/AIDS deaths -0.005 (0.009, 0.613) and -0.014 (0.015, 0.363); HIV/AIDS deaths outside cities 0.006 (0.057, 0.914) and 0.007 (0.067, 0.923)", direction: mixed, vsBenchmark: "Null estimates for non-HIV/AIDS deaths and state rates outside sample cities serve as placebo outcomes" }
    - { ref: R10, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "Table 4 rows 2-16: estimates range from -0.174 to -0.207 (1988-2006) and -0.151 to -0.185 (1988-2018), with p-values 0.007-0.052", direction: negative, vsBenchmark: "Estimates remain similar after controls for Medicaid eligibility, coverage, and uninsured rates" }
    - { ref: R11, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "Table 5, 1988-2006 / 1988-2018: matched on AIDS rate -0.279/-0.283; population -0.164/-0.152; death-rate change -0.211/-0.188; AIDS-case change -0.202/-0.193", direction: negative, vsBenchmark: "Matched comparison estimates are close to baseline -0.185/-0.163; population-match 95% CIs include zero" }
    - { ref: R12, outcome: HIV/AIDS death rates per 100,000 people, metric: coefficient, value: "Table 7 (1988-2006 / 1988-2018): male -0.189/-0.170; female -0.083/-0.036; under 18 -0.061/-0.086; ages 18-64 -0.180/-0.147; age 65+ -0.150/-0.110; Black -0.234/-0.204; White -0.155/-0.180; other race -0.236/-0.245", direction: negative, vsBenchmark: "Men and ages 18-64 account for 94% and 95% of deaths avoided; Black and White groups account for 50% and 48%" }
    - { ref: R13, outcome: annual rates of new AIDS cases, metric: coefficient, value: "Table 8: -0.227 (SE 0.063, p=0.001), -0.233 (0.055, p<0.001), -0.271 (0.053, p<0.001), -0.254 (0.051, p<0.001), -0.248 (0.055, p<0.001)", direction: negative, vsBenchmark: "AIDS Public Information Dataset and CDC measures, 1988-2002, 1988-2006, and 1988-2018" }
    - { ref: R14, outcome: AIDS prevalence among the population, metric: index-growth, value: "Figure 10, p. 1868; text p. 1870: AIDS prevalence increased 310% in Title I cities and 470% in non-Title I cities through 2006; AIDS diagnosis rates fell 46% versus 16% from 1990 to 2006", direction: negative, vsBenchmark: "Descriptive city-group comparisons around the original eligibility threshold" }
    - { ref: R15, outcome: AIDS case reporting at the Title I eligibility threshold, metric: p-value, value: "McCrary density test p=0.37", direction: none, vsBenchmark: "Fails to reject a smooth running-variable density at 2,000 reported cases" }
    - { ref: R16, outcome: number of people living with HIV and new HIV diagnoses, metric: probability, value: "Figure 14: 5 of 110 placebo-cutoff coefficients are significant at 5%; none at 1%; both true-cutoff estimates are larger in magnitude than every placebo estimate", direction: none, vsBenchmark: "Placebo cutoff tests of equation (5)" }
    - { ref: R17, outcome: number of people living with HIV and new HIV diagnoses, metric: coefficient, value: "Table 9 cols. 2-3: local-linear / optimal-bandwidth estimates -0.444 (SE 0.235, p=0.059) and -0.483 (0.185, 0.015) for HIV stock; -0.521 (0.283, 0.066) and -0.561 (0.245, 0.031) for new diagnoses", direction: negative, vsBenchmark: "Compared with global-linear full-sample estimates -0.510 and -0.628 in column 1" }
    - { ref: R18, outcome: HIV/AIDS death rates per 100,000 people and annual rates of new AIDS cases, metric: coefficient, value: "Callaway-Sant'Anna reweighting estimates: 20.6% reduction in annual HIV/AIDS deaths (text p. 1855) and 26.8% reduction in annual AIDS diagnosis rates (text p. 1870)", direction: negative, vsBenchmark: "Both point estimates are larger in magnitude than the baseline and not statistically distinguishable from it" }
    - { ref: R19, outcome: Title I funding received per city, metric: level, value: "Table 1 Panel B: 1996-2006 mean $68,864,959 per treatment city (SD $22,426,453) vs. $3,852,918 per control city (SD $13,346,971); through 2018 $147,626,659 vs. $21,656,941", direction: positive, vsBenchmark: "25 treatment cities vs. 25 control cities" }
  resultType: overturns
  relatesTo:
    - { cite: "Callaway and Sant'Anna (2021)", relation: builds-on, note: "reweighting methods used to assess staggered DiD treatment timing and potential bias" }
    - { cite: "Lakdawalla, Sood, and Goldman (2006)", doi: '10.1162/qjec.121.3.1063', relation: contradicts, note: "they argued HIV treatment could increase spread via behavioral responses; this paper finds Title I reduced HIV transmission" }
    - { cite: "Bailey and Goodman-Bacon (2015)", doi: '10.1257/aer.20120070', relation: cites, note: "community health centers comparison: Ryan White cost per life substantially lower" }
    - { cite: "Miller, Johnson, and Wherry (2021)", doi: '10.1093/qje/qjab004', relation: cites, note: "Medicaid expansion comparison: Ryan White cost per life over 40x lower than implied cost via Medicaid" }
  openQuestions:
    - "Whether the per-city effect holds for larger Title I cities outside the baseline sample near the 2,000-case threshold, since the regression discontinuity estimates are local effects at the margin (p. 1874)."
    - "How optimal allocation rules for place-based HIV/AIDS funding would differ from the rules that arose from the 1996 reauthorization, and how the resulting funding disparities across cities can be corrected equitably (pp. 1881-1882)."
  replicationCode:
    url: https://doi.org/10.3886/E184821V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1825-1887); six results extracted from the source PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 6 Core results confirmed; all equations (SIR-S/I/R, eq. 1-6) verified term-by-term; JEL code H75 was missing and added." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full source PDF and added thirteen Core results rows, structured findings for all rows, the event-study specification, equation-form corrections, and the missing descriptive, robustness, heterogeneity, placebo, and specification-sensitivity evidence; the additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 19 Core rows, equations and specifications, classification axes, findings, prose, and frontmatter against the source PDF; corrected the R3 percent framing, R10 p-value range, R14/R16 locators, and local-effect interpretation; all reported results are supported." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20220089", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; open_access_pdf confirmed at aeaweb.org via OpenAlex; AEA standard terms with no CC assignment" }
---

**What this is.** The paper's core results, the epidemiological model of HIV dynamics, and the research designs (difference-in-differences and regression discontinuity) with their estimating equations: enough to understand what the paper found and how it identified the causal effect of federal HIV/AIDS funding. To replicate or extend the results, read the full source at the [original](https://doi.org/10.1257/aer.20220089).

## TL;DR

This paper estimates the health impact of Ryan White CARE Act Title I funds, which are federal grants directed to US cities to help low-income HIV-positive people access treatment and support services. Identification exploits two quasi-experimental sources of variation. First, the original 1990 Ryan White legislation granted cities Title I status after they reported at least 2,000 cumulative AIDS cases by March 31 of a given year, while a 1996 rule change (combined with a grandfather clause) froze the set of eligible cities just as effective antiretroviral treatment emerged, generating staggered treatment timing across cities with similar baseline HIV/AIDS trajectories. Second, the sharp discontinuity in Title I funding at the 2,000-case threshold supports a regression discontinuity design to estimate local effects on HIV prevalence.

Comparing 25 cities that qualified for Title I status under the original rules with the 25 cities that had the most AIDS cases but fell just below the threshold, the paper finds that Title I status reduced annual HIV/AIDS death rates by about 15-17 percent on average. Annual AIDS case rates fell by roughly 20-25 percent. A regression discontinuity at the 2,000-case threshold finds 36-40 percent fewer people living with HIV by 2008 in the marginal cities near the cutoff, indicating lower HIV transmission as well as fewer deaths. The implied cost per HIV/AIDS death avoided is $334,000, and the program's benefit-cost ratio is approximately 30 at a $10 million value of statistical life. Total lives saved are estimated at approximately 57,000 through 2018.

## Core results

Magnitudes and significance are as reported. Locators point to the source PDF (American Economic Review 113(7): 1825-1887).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Title I status reduced HIV/AIDS death rates (1988-2006) | Table 2, col 1, p. 1847 | DiD coefficient: -0.185 log points (SE 0.069, p=0.010); 50 cities, 950 city-year obs |
| R2 | Effect on HIV/AIDS death rates through 2018 | Table 2, col 2, p. 1847 | DiD coefficient: -0.163 log points (SE 0.075, p=0.036); 50 cities, 1,550 obs |
| R3 | Title I reduced annual rates of new AIDS cases | Table 8, col 1, p. 1870 | DiD coefficient: -0.227 log points (SE 0.063, p=0.001); about 20% reduction |
| R4 | Title I reduced people living with HIV (RDD) | Table 9, Panel A, col 1, p. 1875 | RDD: -0.510 log points (SE 0.152, p=0.002); -40.0% in 2008 |
| R5 | Title I reduced new HIV diagnoses (RDD) | Table 9, Panel B, col 1, p. 1875 | RDD: -0.628 log points (SE 0.219, p=0.006); -46.7% in 2008 |
| R6 | Cost per HIV/AIDS death avoided; total lives saved | Table 6, p. 1860 | $334,000 per death avoided; 9,421 lives in sample; ~57,000 total through 2018 assuming the effect applies across Title I cities; BCR = 30 |
| R7 | Population weighting and expanded-city sample retain the mortality result | Table 2, cols. 3-4, p. 1847 | Weighted estimate: -0.154 (SE 0.063, p=0.018); all APIDS cities: -0.196 (SE 0.056, p=0.001); 1,550 and 3,162 city-years |
| R8 | Mortality effect survives alternative controls and fixed effects | Table 3, Panel A, p. 1848 | Specs. 3-14, coefficient (SE; p): -0.185 (0.069; 0.010), -0.161 (0.075; 0.038), -0.183 (0.069; 0.011), -0.163 (0.076; 0.036), -0.192 (0.074; 0.013), -0.180 (0.086; 0.040), -0.146 (0.062; 0.021), -0.160 (0.065; 0.015), -0.193 (0.066; 0.005), -0.174 (0.071; 0.018), -0.186 (0.069; 0.010), -0.163 (0.075; 0.036) |
| R9 | Placebo outcomes show no comparable mortality effects | Table 3, Panel B, p. 1848 | Non-HIV/AIDS deaths: -0.005 (SE 0.009, p=0.613) and -0.014 (0.015, 0.363); HIV/AIDS death rates outside sample cities: 0.006 (0.057, 0.914) and 0.007 (0.067, 0.923); age-adjusted and count estimates remain negative |
| R10 | Mortality results persist with Medicaid and insurance controls | Table 4, p. 1852 | Rows 2-16 coefficient (SE; p), 1988-2006 / 1988-2018: -0.176 (0.070; 0.016)/-0.163 (0.078; 0.042); -0.178 (0.070; 0.014)/-0.164 (0.077; 0.038); -0.187 (0.069; 0.009)/-0.166 (0.075; 0.032); -0.193 (0.071; 0.009)/-0.170 (0.076; 0.031); -0.207 (0.075; 0.009)/-0.172 (0.079; 0.033); -0.174 (0.071; 0.018)/-0.151 (0.076; 0.052); -0.206 (0.075; 0.009)/-0.176 (0.078; 0.029); -0.184 (0.072; 0.013)/-0.161 (0.077; 0.042); -0.202 (0.078; 0.012)/-0.183 (0.082; 0.029); -0.188 (0.067; 0.007)/-0.167 (0.073; 0.027); -0.204 (0.076; 0.010)/-0.185 (0.080; 0.025); -0.174 (0.068; 0.014)/-0.155 (0.076; 0.047); -0.203 (0.073; 0.007)/-0.181 (0.077; 0.022); -0.178 (0.066; 0.010)/-0.160 (0.074; 0.036); -0.205 (0.072; 0.007)/-0.182 (0.076; 0.021) |
| R11 | Matched city comparisons support the mortality finding | Table 5, p. 1858 | 1988-2006 / 1988-2018 coefficient (SE; p): AIDS-rate match -0.279 (0.082; 0.002)/-0.283 (0.094; 0.005); population -0.164 (0.095; 0.094)/-0.152 (0.099; 0.134); death-rate change -0.211 (0.059; 0.001)/-0.188 (0.070; 0.010); AIDS-case change -0.202 (0.076; 0.011)/-0.193 (0.082; 0.023) |
| R12 | Title I mortality effects vary across demographic groups | Table 7, pp. 1864-1865 | 1988-2006 / 1988-2018 coefficient (SE; p): male -0.189 (0.067; 0.007)/-0.170 (0.072; 0.023); female -0.083 (0.071; 0.251)/-0.036 (0.081; 0.660); under 18 -0.061 (0.080; 0.447)/-0.086 (0.093; 0.358); age 18-64 -0.180 (0.064; 0.007)/-0.147 (0.072; 0.045); age 65+ -0.150 (0.111; 0.183)/-0.110 (0.100; 0.277); Black -0.234 (0.073; 0.002)/-0.204 (0.073; 0.008); White -0.155 (0.066; 0.023)/-0.180 (0.073; 0.017); other race -0.236 (0.171; 0.174)/-0.245 (0.163; 0.141). Men vs. women bootstrap t=2.0/2.4; Black vs. White t=1.8/0.6 |
| R13 | New AIDS-case rate reductions replicate across data sources and periods | Table 8, p. 1870 | Coefficients: -0.227 (SE 0.063, p=0.001), -0.233 (0.055, p<0.001), -0.271 (0.053, p<0.001), -0.254 (0.051, p<0.001), -0.248 (0.055, p<0.001) |
| R14 | Descriptive trends show slower AIDS prevalence growth and faster diagnosis declines in Title I cities | Figure 10, p. 1868; text p. 1870 | Through 2006, AIDS prevalence rose 310% in Title I cities versus 470% in non-Title I cities; AIDS diagnosis rates fell 46% versus 16% from 1990 to 2006 |
| R15 | Density test finds no evidence of manipulation at the RDD threshold | Text p. 1874 | McCrary density test p=0.37 for reported AIDS cases around 2,000 |
| R16 | RDD placebo cutoffs do not reproduce the HIV outcome discontinuities | Figure 14, p. 1878; text p. 1877 | Of 110 placebo estimates, 5 are significant at 5% and none at 1%; both true-cutoff estimates exceed every placebo estimate in magnitude |
| R17 | HIV RDD estimates remain negative under local-linear and optimal-bandwidth specifications | Table 9, cols. 2-3, p. 1875 | HIV stock: -0.444 (SE 0.235, p=0.059) and -0.483 (0.185, p=0.015); new diagnoses: -0.521 (0.283, p=0.066) and -0.561 (0.245, p=0.031) |
| R18 | Reweighted staggered DiD estimates confirm reductions in deaths and AIDS diagnoses | Text pp. 1855, 1870 (Callaway-Sant'Anna reweighting; Appendix Table A.6) | Annual HIV/AIDS deaths fall 20.6%; annual AIDS diagnoses fall 26.8%; both estimates are larger than, but not statistically different from, the baseline estimates |
| R19 | Title I cities received substantially higher per-city funding after the 1996 rule change | Table 1, Panel B, p. 1844 | Mean funding in 1996-2006: $68,864,959 (SD $22,426,453) per treatment city vs. $3,852,918 (SD $13,346,971) per control city; through 2018: $147,626,659 vs. $21,656,941 |

**Overall (paper's conclusion).** Federal HIV/AIDS funding allocated to cities through Ryan White Title I had large health impacts: reducing HIV/AIDS deaths and new AIDS cases, and lowering the number of people living with HIV in local estimates at the eligibility threshold. The funding disparities that emerged from the 1996 Ryan White reauthorization rules, which effectively froze Title I eligibility just as effective treatment arrived, are responsible for a large share of the divergent HIV/AIDS trajectories across US cities. The cost per life saved is low relative to other health programs, which the paper attributes to Ryan White targeting a vulnerable population with a deadly infectious disease for which effective treatment exists.

## Theory / model

The paper has no formal economic theory model. The theoretical content consists of the identification framework and an epidemiological susceptible-infected-removed (SIR) model used to analyze HIV transmission dynamics under Title I funding.

**HIV dynamics (SIR model, pp. 1871-1872).** Let S, I, and R denote the susceptible, infected, and removed (deceased) populations in a city. Absent Title I, HIV-positive individuals transmit at rate trans and die from HIV/AIDS at rate death. Title I changes transmission by factor p and death rates by factor q (q < 0 since Title I reduces deaths). The annual transitions are:

$$
\begin{aligned}
S_{t+1} &= S_t - (1+p)\times \text{trans}\times I_t\times S_t,\\
I_{t+1} &= I_t + (1+p)\times \text{trans}\times I_t\times S_t - (1+q)\times \text{death}\times I_t,\\
R_{t+1} &= (1+q)\times \text{death}\times I_t.
\end{aligned}
$$

The number of people living with HIV after t periods of Title I status is (equation 3, p. 1871):

$$
I_t = I_0\times\prod_{j=1}^{t}\left[1 + (1+p)\times\text{trans}\times S\!\left(t;\,I_0,S_0,\text{trans},p,\text{death},q\right) - (1+q)\times\text{death}\right] \tag{3}
$$

Taking the log difference between Title I and non-Title I cities gives the main identifying expression (equation 4, p. 1872):

$$
\begin{aligned}
\gamma_t &= \log\!\left(I_t^{\text{Title1}}\right) - \log\!\left(I_t^{\text{NoTitle1}}\right)\\
&= \sum_{j=1}^{t} \log\!\left\{\frac{1 + (1+p)\times \text{trans}\times S\!\left(t; I_0,S_0,\text{trans},p,\text{death},q\right) - (1+q)\times\text{death}}{1 + \text{trans}\times S\!\left(t; I_0,S_0,\text{trans},\text{death}\right) - \text{death}}\right\} \tag{4}
\end{aligned}
$$

Because Title I reduces death rates (q < 0), finding fewer people living with HIV in 2008 implies a sufficiently large reduction in transmission within this SIR framework to outweigh the additional people alive because fewer died. The paper notes that p cannot be precisely recovered without assumptions about HIV risk among the susceptible population. The net evidence runs against the behavioral-response scenario proposed by Lakdawalla, Sood, and Goldman (2006), in which treatment increases HIV spread.

**Identification logic.** The identifying assumption is parallel trends: absent Title I, cities that qualified under the original rules would have trended similarly in HIV/AIDS outcomes to cities that fell just below the 2,000-case threshold. Event-study plots (Figure 3) confirm that treatment and control cities tracked each other in log HIV/AIDS death rates before treatment cities gained Title I status. Robustness to Callaway and Sant'Anna (2021) reweighting methods, matching on 1995 AIDS rates or population, and state-by-year fixed effects (Table 3) supports the identifying assumption.

## Method

The main estimating strategy is a staggered difference-in-differences using variation arising from three features of the Ryan White CARE Act. First, the original 1990 legislation granted Title I status to any city reporting at least 2,000 cumulative AIDS cases to the CDC by March 31 of a given year. Second, Title I status, once obtained, was not lost even if a city's AIDS burden fell below the threshold. Third, a 1996 reauthorization changed eligibility from a cumulative to a five-year rolling count, but included a grandfather clause allowing cities that had qualified by March 31, 1995 to retain Title I status regardless. Since effective antiretroviral treatment emerged in 1996, the combined rule change effectively froze Title I eligibility for the next decade, creating persistent large funding differences between cities just above and just below the 2,000-case threshold (treatment cities averaged $68.9 million in Title I funds from 1996 to 2006; control cities averaged $3.9 million).

This builds on `difference-in-differences` for the main estimates (equation 1), `panel-regression` with two-way fixed effects for the within-city-year estimator, `matching` for robustness checks that pair each treated city with control cities having similar baseline AIDS rates or AIDS trends (equation 2), and `regression-discontinuity-design` for the HIV stock and transmission analysis (equation 5).

For the regression discontinuity, the running variable is the log of cumulative AIDS cases by March 31, 1995. The 2,000-case threshold is credible because cities could not manipulate their AIDS case counts ex ante (a McCrary density test fails to reject smoothness at the cutoff; p-value 0.37), and the significance of crossing 2,000 cases by March 31, 1995 only became clear after the 1996 rule change and treatment emergence.

## Empirical specifications

**Main DiD specification (equation 1, p. 1839).**

$$
y_{jt} = \gamma_j + \delta_t + \mathbf{X}_{jt}\alpha_t + \text{Title1}_{jt}\,\beta + \varepsilon_{jt} \tag{1}
$$

where j indexes cities, t indexes years; $$y_{jt}$$ is the log of HIV/AIDS deaths per 100,000 people (or log AIDS cases, or other health outcomes); $$\gamma_j$$ are city fixed effects; $$\delta_t$$ are fiscal-year fixed effects; $$\mathbf{X}_{jt}$$ is a vector of demographic controls (shares male, younger than 18, older than 64, Black, Hispanic) with coefficients $$\alpha_t$$ allowed to vary by year; and $$\text{Title1}_{jt}$$ is an indicator equal to one for city j having qualified for Title I status under the original Ryan White rules by year t. Standard errors are clustered by city. The coefficient $$\beta$$ is the average causal effect of Title I status on the outcome.

The baseline sample is 50 cities (25 treatment, 25 control), yielding 950 observations for the 1988-2006 window and 1,550 for 1988-2018. All city-year observations for death rates come from restricted-use Vital Statistics data. Alternative samples expanding to all AIDS Public Information Dataset cities confirm results (Table 3, cols 9-10).

**Event-study specification (written out from Figure 3 notes, p. 1846; unnumbered in the article).** The figure reports coefficients on treatment-city event-time indicators, with the year before initial eligibility omitted:

$$
 y_{jt} = \gamma_j + \delta_t + \mathbf{X}_{jt}\alpha_t + \sum_{k \ne -1} \beta_k \mathbb{1}\{t-T_j=k\} + \varepsilon_{jt}
$$

Here $$T_j$$ is the year city j first became eligible under the original rules. The paper includes city and year fixed effects and the equation (1) demographic controls, clusters standard errors by city, and uses 1,550 observations from 50 cities over 1988-2018; indicators for each event year outside the plotted range are included separately.

**Matching robustness (equation 2, p. 1856).** For each treated city, control cities are selected by nearest-neighbor matching on 1995 AIDS rates per 100,000, 1995 population, or 1990-to-1991 changes in HIV/AIDS death rates or AIDS cases, creating matched groups g:

$$
y_{gjt} = \gamma_j + \delta_{gt} + \mathbf{X}_{jt}\alpha_t + \text{Title1}_{jt}\,\beta + \varepsilon_{gjt} \tag{2}
$$

where $$\delta_{gt}$$ are group-by-year fixed effects; identification comes entirely from within-matched-group variation in Title I status. Equation (2) is estimated on matched city-year samples with city and group-by-year fixed effects and standard errors clustered by city. The four comparison samples contain 855/1,395 observations when matched on 1995 AIDS rates, 1,083/1,767 when matched on population, 1,425/2,325 when matched on 1990-1991 death-rate changes, and 1,254/2,046 when matched on AIDS-case changes, for 1988-2006 / 1988-2018 respectively (Table 5, p. 1858). Results support the baseline estimates, although the population-matched estimate is less precise.

**HIV stock and diagnosis regression discontinuity (equation 5, p. 1874).** For each 2008 HIV outcome, the paper estimates the following cross-sectional specification:

$$
\log(\text{Num\_HIV}_{j,2008}) = \lambda + f(\text{AIDS\_Cases}_{j,1995}) + \text{Title1}_j\,\gamma + \eta_j \tag{5}
$$

where f is a linear polynomial in the log of AIDS cases reported by March 31, 1995, fit separately on either side of the 2,000-case cutoff. The same specification is estimated for log people living with HIV and log new diagnoses. There are no fixed effects in this cross-section; robust standard errors are used. The global linear specification uses 46 main-sample cities with nonmissing 2008 HIV data. Local linear regression with a triangular kernel and the Calonico, Cattaneo, and Titiunik (2014) optimal bandwidth uses 15 cities on each side (Table 9, p. 1875).

**Decomposition of Title I's effect on new HIV transmissions (equation 6, p. 1875).** The effect on 2008 new diagnoses decomposes as:

$$
\begin{aligned}
\tau &= \log\!\left(\text{Num\_Trans}_{2008}^{\text{Title1}}\right) - \log\!\left(\text{Num\_Trans}_{2008}^{\text{NoTitle1}}\right)\\
&= \log(1+p) + \hat{\gamma} + \log\!\left[\frac{S\!\left(t=2008; I_0; S_0; \text{trans}; p; \text{death}; q\right)}{S\!\left(t=2008; I_0; S_0; \text{trans}; \text{death}\right)}\right] \tag{6}
\end{aligned}
$$

Term 1 is the direct effect on HIV transmissibility; term 2 is the estimated reduction in HIV-positive people (from Table 9, Panel A); term 3 is the offsetting effect of a larger susceptible population (fewer past infections means more people at risk). Estimates from Table 9 indicate that 81 to 85 percent of the reduction in new diagnoses in 2008 is accounted for by term 2 alone (fewer people living with HIV), with term 3 partially offsetting.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Vital Statistics Multiple Cause of Death Files (restricted-use) | Annual HIV/AIDS death rates per 100,000 people for all US civilians, 1988-2018; primary outcome (R1, R2) | No page yet |
| AIDS Public Information Dataset (CDC) | Annual cumulative and annual AIDS cases by city, 1988-2002; used to determine Title I eligibility and as an outcome (R3) | No page yet |
| CDC HIV surveillance data (special request) | City-level HIV diagnoses and HIV prevalence in 2008 (46 cities); used for RDD analysis (R4, R5) | No page yet |
| SEER population data | Annual city populations and demographic denominators, 1988-2018; used to convert counts to rates | No page yet |
| Ryan White Title I funding (assembled) | Annual city-level Title I allocations 1991-2018, assembled from GAO reports, HRSA releases, and federal grant databases; used to construct funding treatment variable and cost-per-life estimate (R6) | No page yet |

Sample: 50 US cities, annual data 1988-2018 (1,550 city-year observations for main sample). Treatment cities received on average $68.9 million in Title I funds from 1996 to 2006; control cities received on average $3.9 million over the same period (Table 1, p. 1844).

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20220089) if you are: estimating causal effects of place-based health funding programs; studying the determinants of HIV/AIDS disparities across US cities; evaluating the efficiency of federal public health spending relative to Medicaid or community health centers (Bailey and Goodman-Bacon (2015) comparison, pp. 1861-1862); or assessing whether "treatment as prevention" works in a real-world public health setting. The regression discontinuity design for HIV stock (Table 9 and Figure 12, pp. 1872-1875) provides especially clean quasi-experimental evidence on spillover effects of HIV treatment on HIV transmission, directly bearing on the debate opened by Miller, Johnson, and Wherry (2021) and others on optimal public health targeting.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. This distillation was extracted and verified by an LLM (gpt-6-luna) on 2026-10-04 and is **not independently reproduced**. Replication data are available at [openICPSR doi:10.3886/E184821V1](https://doi.org/10.3886/E184821V1). The paper is freely accessible at [pubs.aeaweb.org](https://doi.org/10.1257/aer.20220089) under AEA standard terms (no CC; redistribution restricted to extract-only).

> Dillender, Marcus. "Evidence and Lessons on the Health Impacts of Public Health Funding from the Fight against HIV/AIDS." *American Economic Review* 113, no. 7 (July 2023): 1825-1887. DOI: 10.1257/aer.20220089.
