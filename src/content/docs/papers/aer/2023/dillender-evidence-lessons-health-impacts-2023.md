---
title: "Evidence and Lessons on Health Impacts of Public Health Funding: Dillender (2023)"
description: >-
  Distilled: Exploiting staggered variation in Ryan White CARE Act Title I
  eligibility, this paper finds that federal HIV/AIDS funding to US cities
  reduced HIV/AIDS death rates by 15-17 percent, saved approximately 57,000
  lives through 2018 at a cost of $334,000 per death avoided, and reduced HIV
  prevalence by 36-40 percent. American Economic Review 2023, open (AEA). Six
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
  topics: ["Healthcare Policy and Management", "HIV/AIDS Research and Interventions", "Food Security and Health in Diverse Populations"]
  dataAccess: proprietary-confidential
  outcome:
    - HIV/AIDS death rates per 100,000 people
    - annual rates of new AIDS cases
    - number of people living with HIV
    - new HIV diagnoses
  outcomeClass: [labor-careers-health, social-welfare]
  license: "AEA standard (no CC; freely readable at pubs.aeaweb.org past 12-month embargo; copyright AEA 2023)"
  licenseShort: open (AEA)
  access: open
  machineAccess: "free to read at pubs.aeaweb.org (confirmed 2026-06-25)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 3
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, regression-discontinuity-design, panel-regression, matching]
    identification: natural-experiment
  contributionType: [new-fact, measurement]
  mechanisms: [financial-constraint]
  introducesData: true
  scope:
    region: US
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
    - { ref: R6, outcome: HIV/AIDS deaths avoided per dollar of Title I spending, metric: level, value: "$334,000 per HIV/AIDS death avoided; 9,421 lives in sample; ~57,000 lives total through 2018", direction: positive, vsBenchmark: "benefit-cost ratio 30 at $10M value of statistical life (Table 6)" }
  resultType: new-finding
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
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20220089", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; open_access_pdf confirmed at aeaweb.org via OpenAlex; AEA standard terms with no CC assignment" }
---

**What this is.** The paper's core results, the epidemiological model of HIV dynamics, and the research designs (difference-in-differences and regression discontinuity) with their estimating equations: enough to understand what the paper found and how it identified the causal effect of federal HIV/AIDS funding. To replicate or extend the results, read the full source at the [original](https://doi.org/10.1257/aer.20220089).

## TL;DR

This paper estimates the health impact of Ryan White CARE Act Title I funds, which are federal grants directed to US cities to help low-income HIV-positive people access treatment and support services. Identification exploits two quasi-experimental sources of variation. First, the original 1990 Ryan White legislation granted cities Title I status after they reported at least 2,000 cumulative AIDS cases by March 31 of a given year, while a 1996 rule change (combined with a grandfather clause) froze the set of eligible cities just as effective antiretroviral treatment emerged, generating staggered treatment timing across cities with similar baseline HIV/AIDS trajectories. Second, the sharp discontinuity in Title I funding at the 2,000-case threshold supports a regression discontinuity design to estimate effects on HIV prevalence.

Comparing 25 cities that qualified for Title I status under the original rules with the 25 cities that had the most AIDS cases but fell just below the threshold, the paper finds that Title I status reduced annual HIV/AIDS death rates by about 15-17 percent on average. Annual AIDS case rates fell by roughly 20-25 percent. A regression discontinuity at the 2,000-case threshold finds 36-40 percent fewer people living with HIV in Title I cities by 2008, indicating the funding reduced HIV spread as well as deaths. The implied cost per HIV/AIDS death avoided is $334,000, and the program's benefit-cost ratio is approximately 30 at a $10 million value of statistical life. Total lives saved are estimated at approximately 57,000 through 2018.

## Core results

Magnitudes and significance are as reported. Locators point to the source PDF (American Economic Review 113(7): 1825-1887).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Title I status reduced HIV/AIDS death rates (1988-2006) | Table 2, col 1, p. 1847 | DiD coefficient: -0.185 log points (SE 0.069, p=0.010); 50 cities, 950 city-year obs |
| R2 | Effect on HIV/AIDS death rates through 2018 | Table 2, col 2, p. 1847 | DiD coefficient: -0.163 log points (SE 0.075, p=0.036); 50 cities, 1,550 obs |
| R3 | Title I reduced annual rates of new AIDS cases | Table 8, col 1, p. 1870 | DiD coefficient: -0.227 log points (SE 0.063, p=0.001); ~25% reduction |
| R4 | Title I reduced people living with HIV (RDD) | Table 9, Panel A, col 1, p. 1875 | RDD: -0.510 log points (SE 0.152, p=0.002); -40.0% in 2008 |
| R5 | Title I reduced new HIV diagnoses (RDD) | Table 9, Panel B, col 1, p. 1875 | RDD: -0.628 log points (SE 0.219, p=0.006); -46.7% in 2008 |
| R6 | Cost per HIV/AIDS death avoided; total lives saved | Table 6, p. 1860 | $334,000 per death avoided; 9,421 lives in sample; ~57,000 total through 2018; BCR = 30 |

**Overall (paper's conclusion).** Federal HIV/AIDS funding allocated to cities through Ryan White Title I had large health impacts: reducing HIV/AIDS deaths, new AIDS cases, and HIV prevalence. The funding disparities that emerged from the 1996 Ryan White reauthorization rules, which effectively froze Title I eligibility just as effective treatment arrived, are responsible for a large share of the divergent HIV/AIDS trajectories across US cities. The cost per life saved is low relative to other health programs, which the paper attributes to Ryan White targeting a vulnerable population with a deadly infectious disease for which effective treatment exists.

## Theory / model

The paper has no formal economic theory model. The theoretical content consists of the identification framework and an epidemiological susceptible-infected-removed (SIR) model used to analyze HIV transmission dynamics under Title I funding.

**HIV dynamics (SIR model, pp. 1871-1872).** Let S, I, and R denote the susceptible, infected, and removed (deceased) populations in a city. Absent Title I, HIV-positive individuals transmit at rate trans and die from HIV/AIDS at rate death. Title I changes transmission by factor p and death rates by factor q (q < 0 since Title I reduces deaths). The annual transitions are:

$$
S_{t+1} = S_t - (1+p)\times \text{trans}\times I_t\times S_t \tag{SIR-S}
$$

$$
I_{t+1} = I_t + (1+p)\times \text{trans}\times I_t\times S_t - (1+q)\times \text{death}\times I_t \tag{SIR-I}
$$

$$
R_{t+1} = (1+q)\times \text{death}\times I_t \tag{SIR-R}
$$

The number of people living with HIV after t periods of Title I status is (equation 3, p. 1871):

$$
I_t = I_0\times\prod_{j=1}^{t}\left[1 + (1+p)\times\text{trans}\times S\!\left(t;\,I_0,S_0,\text{trans},p,\text{death},q\right) - (1+q)\times\text{death}\right] \tag{3}
$$

Taking the log difference between Title I and non-Title I cities gives the main identifying expression (equation 4, p. 1872):

$$
\gamma_t = \log\!\left(I_t^{\text{Title1}}\right) - \log\!\left(I_t^{\text{NoTitle1}}\right)
= \sum_{j=1}^{t}\log\!\left\{\frac{1 + (1+p)\times\text{trans}\times S(\cdot;\,p,q) - (1+q)\times\text{death}}{1 + \text{trans}\times S(\cdot;\,p{=}0,q{=}0) - \text{death}}\right\} \tag{4}
$$

Because Title I reduces death rates (q < 0), and because the paper documents a reduction in people living with HIV in 2008 (Table 9, R4), equation (4) implies that p < 0 as well: Title I must have reduced HIV transmission rates, not only death rates. This rules out the scenario proposed by Lakdawalla, Sood, and Goldman (2006), in which providing treatment to HIV-positive people increases HIV spread through behavioral responses.

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

**Matching robustness (equation 2, p. 1856).** For each treated city, control cities are selected by nearest-neighbor matching on 1995 AIDS rates per 100,000, 1995 population, or 1990-to-1991 changes in HIV/AIDS death rates or AIDS cases, creating matched groups g:

$$
y_{gjt} = \gamma_j + \delta_{gt} + \mathbf{X}_{jt}\alpha_t + \text{Title1}_{jt}\,\beta + \varepsilon_{gjt} \tag{2}
$$

where $$\delta_{gt}$$ are group-by-year fixed effects; identification comes entirely from within-matched-group variation in Title I status. Results are robust across all four matching approaches (Table 5).

**HIV stock regression discontinuity (equation 5, p. 1874).** For the cross-sectional analysis of 2008 HIV outcomes:

$$
\log(\text{Num\_HIV}_{j,2008}) = \lambda + f(\text{AIDS\_Cases}_{j,1995}) + \text{Title1}_j\,\gamma + \eta_j \tag{5}
$$

where f is a linear polynomial in the log of AIDS cases ever reported by March 31, 1995, fit separately on each side of the 2,000-case cutoff; $$\text{Title1}_j$$ is an indicator for cities above the threshold; and robust standard errors are used. The baseline specification uses 46 cities (all main-sample cities with nonmissing 2008 HIV data); local linear regression with the Calonico, Cattaneo, and Titiunik (2014) optimal bandwidth uses 15 cities on each side (Table 9).

**Decomposition of Title I's effect on new HIV transmissions (equation 6, p. 1875).** The effect on 2008 new diagnoses decomposes as:

$$
\tau = \log\!\left(\text{Num\_Trans}_{2008}^{\text{Title1}}\right) - \log\!\left(\text{Num\_Trans}_{2008}^{\text{NoTitle1}}\right)
= \underbrace{\log(1+p)}_{1} + \underbrace{\hat{\gamma}}_{2} + \underbrace{\log\!\left[\frac{S(t{=}2008;\ldots;\,p,q)}{S(t{=}2008;\ldots;\,p{=}0,q{=}0)}\right]}_{3} \tag{6}
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

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. This distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-25 and is **not human-verified or independently reproduced**. Replication data are available at [openICPSR doi:10.3886/E184821V1](https://doi.org/10.3886/E184821V1). The paper is freely accessible at [pubs.aeaweb.org](https://doi.org/10.1257/aer.20220089) under AEA standard terms (no CC; redistribution restricted to extract-only).

> Dillender, Marcus. "Evidence and Lessons on the Health Impacts of Public Health Funding from the Fight against HIV/AIDS." *American Economic Review* 113, no. 7 (July 2023): 1825-1887. DOI: 10.1257/aer.20220089.
