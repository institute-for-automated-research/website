---
title: "Value of Working Conditions: Maestas et al. (2023)"
description: >-
  Distilled: Using a new nationally representative stated-preference survey
  (AWCS, 2015-16, N = 1,738 US workers), this paper estimates willingness to pay
  for nine nonwage job amenities; a switch from the worst to the best amenity
  bundle equals 55 percent of the wage. Accounting for amenity incidence and
  preference heterogeneity attenuates the gender wage gap by 24 percent, widens
  the race compensation gap by 27 percent, and increases the 90-10 wage
  inequality measure. American Economic Review 2023, AEA copyright. Ten core
  results with source locators, datasets used, the indirect utility model, and
  the stated-preference logit estimation method with equations.
sidebar:
  label: Maestas et al. 2023
  order: 1
tags: [paper-summary, labor-economics, wages, wage-inequality, working-conditions,
       compensating-differentials, panel-regression, peer-reviewed, unreplicated,
       data:awcs, data:rand-alp, data:cps]
paper:
  authors: Nicole Maestas, Kathleen J. Mullen, David Powell, Till von Wachter, Jeffrey B. Wenger
  authorList:
    - { family: Maestas, given: Nicole, orcid: "0000-0001-5819-0108", affiliation: "Harvard University" }
    - { family: Mullen, given: Kathleen J., orcid: "0000-0003-3032-7293", affiliation: "University of Oregon" }
    - { family: Powell, given: David, orcid: "0000-0002-1462-2826", affiliation: "RAND Corporation" }
    - { family: von Wachter, given: Till, affiliation: "UCLA" }
    - { family: Wenger, given: Jeffrey B., orcid: "0000-0002-5352-5519", affiliation: "RAND Corporation" }
  year: 2023
  venue: "American Economic Review 113(7), July 2023, 2007-2047"
  venueShort: AER 2023
  doi: 10.1257/aer.20190846
  jel:
    codes: [J22, J28, J31, J81]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: [Employment and Welfare Studies]
  dataAccess: hand-collected
  outcome:
    - willingness to pay for job amenities as percent of wage
    - total compensation differentials by gender, race, education, and age
    - interindustry compensation dispersion
    - log wage inequality (90-10 percentile gap)
  outcomeClass: [labor-careers-health]
  license: >-
    AEA copyright; articles freely accessible on AEAweb after 3-year embargo
    (elapses July 2026); Crossref returned no license block (checked 2026-06-25);
    no Creative Commons licence
  licenseShort: AEA copyright
  access: paywalled
  machineAccess: >-
    blocked-paywall on aeaweb.org (AEA 3-year embargo, elapses July 2026;
    not independently verified 2026-06-25)
  redistribution: extract-only
  resultsCount: 10
  citedByCount: 0
  introducesData: true
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment]
    identification: randomized
  contributionType: [new-data, new-fact, measurement]
  scope:
    region: US
    period: 2015-07..2016-02
    frequency: mixed
    dataType: [survey, experimental]
    granularity: [individual]
    n: "1,738 employed workers ages 25-71"
  findings:
    - { ref: R1, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "55.0% wage equivalent for best vs worst amenity bundle", direction: positive }
    - { ref: R2, outcome: "willingness to pay for paid time off", metric: pp-effect, value: "16.4% wage equivalent for 10 days PTO vs none", direction: positive }
    - { ref: R3, outcome: "willingness to pay for paid time off", metric: pp-effect, value: "23.0% wage equivalent for 20 days PTO vs none", direction: positive }
    - { ref: R4, outcome: "willingness to pay for physical job demands avoidance", metric: pp-effect, value: "14.5% wage equivalent for moderate vs heavy physical activity", direction: positive }
    - { ref: R5, outcome: "willingness to pay for schedule flexibility", metric: pp-effect, value: "8.9% wage equivalent for setting own schedule", direction: positive }
    - { ref: R6, outcome: "willingness to pay for working alone vs team with team evaluation", metric: pp-effect, value: "8.6% wage equivalent for working alone", direction: positive }
    - { ref: R7, outcome: "total compensation differentials by gender", metric: coefficient, value: "-0.142 log points (women vs men) after preference adjustment vs -0.192 unadjusted", direction: negative, vsBenchmark: "attenuates gender gap 24% relative to unadjusted log wage" }
    - { ref: R8, outcome: "total compensation differentials by race", metric: coefficient, value: "-0.274 log points (non-White vs White) after preference adjustment vs -0.208 unadjusted", direction: negative, vsBenchmark: "widens race gap 27% relative to unadjusted log wage" }
    - { ref: R9, outcome: "total compensation differentials by education", metric: coefficient, value: "-0.667 log points (HS or less vs college) after amenity adjustment vs -0.559 unadjusted", direction: negative, vsBenchmark: "widens education gap 19% relative to unadjusted log wage" }
    - { ref: R10, outcome: "log wage inequality (90-10 percentile gap)", metric: coefficient, value: "1.769 adjusted vs 1.664 unadjusted (increase of 10.5 log points)", direction: positive, vsBenchmark: "increases 90-10 gap by 10.5 log points when preferences accounted for" }
  resultType: new-finding
  relatesTo:
    - { cite: "Rosen (1986)", doi: '10.1016/s1573-4463(86)01015-5', relation: builds-on, note: "theoretical framework: competitive compensating differentials equilibrium underlying the wage-amenity trade-off" }
    - { cite: "Mas and Pallais (2017)", doi: '10.1257/aer.20161500', relation: extends, note: "extends their schedule-flexibility and telecommute WTP experiments to 9 amenities for a nationally representative sample" }
    - { cite: "Krueger and Summers (1988)", doi: '10.2307/1911072', relation: tests, note: "tests and contradicts their conclusion that compensating differentials do not narrow interindustry wage differentials; the paper finds they widen them instead" }
    - { cite: "Wiswall and Zafar (2018)", relation: cites, note: "prior stated-preference evidence on job amenity valuations among undergraduate students" }
    - { cite: "Pierce (2001)", doi: '10.1162/003355301753265633', relation: cites, note: "benchmark on compensation inequality including fringe benefits; comparable magnitudes found here for non-fringe amenities" }
  openQuestions:
    - "Coverage is limited to 9 amenities; all nonmonetary job attributes not captured, and their omission limits the extent to which compensation differentials can be fully explained (p. 2044)."
    - "The WTP estimates are a partial equilibrium measure of individual valuations, not a counterfactual for what firms would do if amenities were added or removed; which workers are at the margin of equilibrium cannot be identified (p. 2044)."
    - "Cultural factors such as childcare availability (for gender differences) and systemic racism (for race differences) plausibly affect amenity preferences but cannot be separately identified from the survey data (pp. 2040-2041)."
  replicationCode: { url: "https://doi.org/10.3886/E184378V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read full PDF; core results, equations, and locators extracted directly; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 10 Core results rows confirmed correct against Table 2 col 5 (R1-R6) and Table 8 (R7-R10); all equations verified term-by-term against PDF pp. 2021-2022 and 2039; one fix: JEL code J28 added (was missing from codes list; PDF p. 2007 shows J22, J28, J31, J81)." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20190846", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "title and authors confirmed; container-title American Economic Review; published 2023-07; license[] block absent, no CC licence registered" }
---

**What this is.** This is a distilled skeleton of Maestas et al. (2023). Read the
original at [https://doi.org/10.1257/aer.20190846](https://doi.org/10.1257/aer.20190846) to replicate or extend.

## TL;DR

Maestas et al. (2023) field the American Working Conditions Survey (AWCS), a new
nationally representative survey covering 1,738 employed Americans, and use
embedded stated-preference experiments to estimate how much workers are willing
to pay for nine nonwage job amenities. Across all amenities, switching from the
worst to the best job is equivalent to a 55 percent wage increase, confirming
that nonwage job attributes are a central component of total compensation. Workers
differ widely in their valuations by gender, race, education, and age: older
workers and women place especially high value on physical job demands and paid time
off. Incorporating both the incidence and the valuation of amenities into standard
wage differentials attenuates the gender gap (24 percent) but widens the race and
education gaps, and raises overall wage inequality. The paper builds on the
compensating differentials framework of Rosen (1986) and extends the experimental
approach of Mas and Pallais (2017) to a nationally representative sample and a
broader set of amenities. Related prior work includes Wiswall and Zafar (2018) on
stated-preference evidence for job attributes among students, and Pierce (2001) on
compensation inequality once fringe benefits are included.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Best vs worst amenity bundle: total WTP | Table 2 col 5, p. 2025 | 55.0% wage equivalent |
| R2 | Paid time off: WTP for 10 days vs none | Table 2 col 5, p. 2025 | 16.4% wage equivalent |
| R3 | Paid time off: WTP for 20 days vs none | Table 2 col 5, pp. 2025-2027 | 23.0% wage equivalent |
| R4 | Physical demands: WTP for moderate vs heavy activity | Table 2 col 5, pp. 2025-2027 | 14.5% wage equivalent |
| R5 | Schedule flexibility: WTP for setting own schedule | Table 2 col 5, pp. 2025-2027 | 8.9% wage equivalent |
| R6 | Work arrangement: WTP for working alone (vs team-evaluated team) | Table 2 col 5, pp. 2025-2027 | 8.6% wage equivalent |
| R7 | Gender log compensation gap with preference heterogeneity | Table 8 Panel A col 3, p. 2040 | -0.142 log pts (vs -0.192 unadjusted); 24% reduction |
| R8 | Race log compensation gap with preference heterogeneity | Table 8 Panel A col 3, pp. 2040-2041 | -0.274 log pts (vs -0.208 unadjusted); 27% widening |
| R9 | Education log compensation gap (HS or less vs college) | Table 8 Panel A col 3, p. 2041 | -0.667 log pts (vs -0.559 unadjusted); 19% widening |
| R10 | Overall wage inequality: 90-10 log wage gap | Table 8 Panel C col 3, p. 2042 | 1.769 (vs 1.664 unadjusted); +10.5 log pts |

**Overall (paper's conclusion).** Working conditions vary widely across
demographic groups and throughout the wage distribution. Workers have measurable
willingness to pay for most job amenities studied. Accounting for both the
incidence of amenities and heterogeneity in valuations changes standard measures
of the wage structure: the gender gap narrows, the race and education gaps widen,
and overall wage inequality increases. Contrary to the conclusion of Krueger and
Summers (1988), accounting for the value of working conditions widens rather than
narrows interindustry wage differentials.

## Theory / model

The paper builds on the competitive compensating differentials framework of
Rosen (1986). In a long-run competitive equilibrium, workers sort into jobs that
equate, at the margin, their willingness to pay for an amenity with the market
wage-amenity trade-off required by firms. Observed wages therefore understate total
compensation for workers in jobs with desirable nonwage attributes.

There is no formal general equilibrium model estimated in the paper, but the
theoretical logic motivates the empirical setup: if workers trade wages for amenities,
then the true compensation differential between two workers must add back the market
value of the amenities each holds. The indirect utility function of individual $$i$$
over job alternative $$j$$ in choice pair $$t$$ is specified as (p. 2021, equation in
estimation section):

$$V_{ijt} = \alpha + A'_{ijt}\,\beta_i + \delta_i \ln w_{ijt} + \varepsilon_{ijt} \tag{1}$$

where $$A_{ijt}$$ is the vector of nonwage job characteristics (length $$R$$), $$w_{ijt}$$
is the offered wage, and $$\beta_i$$ and $$\delta_i$$ allow heterogeneous marginal
utilities across individuals. The error $$\varepsilon_{ijt}$$ is i.i.d. Extreme Value
Type I, yielding a logit choice probability.

The identification logic is that the stated-preference experiments vary $$A_{ijt}$$
and $$w_{ijt}$$ independently and randomly across choice pairs for each respondent, so
the wage-amenity trade-off is observed directly without the selection confounds that
plague hedonic regressions estimated from observational job choices.

## Method

**Estimating equation.** Under the logit assumption, the probability that individual
$$i$$ prefers job $$j$$ over job $$k$$ in choice pair $$t$$ is (p. 2021):

$$\Pr(V_{ijt} > V_{ikt}) = \frac{\exp\!\bigl[(A'_{ijt} - A'_{ikt})\,\beta_i + \delta_i\,(\ln w_{ijt} - \ln w_{ikt})\bigr]}{1 + \exp\!\bigl[(A'_{ijt} - A'_{ikt})\,\beta_i + \delta_i\,(\ln w_{ijt} - \ln w_{ikt})\bigr]} \tag{2}$$

The authors estimate two versions: (i) a **standard logit** where $$\beta_i = \beta$$
and $$\delta_i = \delta$$ for all $$i$$ (so WTP does not vary across individuals except
through their wage level), and (ii) a **mixed logit** where $$\beta_i \sim N(\beta,\Sigma_\beta)$$
to allow unobserved preference heterogeneity. Results are similar across both
specifications; the standard logit is used for subgroup and robustness analyses.

**Willingness-to-pay derivation.** Individual $$i$$ is indifferent between not having
attribute $$r$$ at wage $$w_i$$ and having it at wage $$w_i - WTP_i^r$$. Setting the
two utility levels equal (p. 2022, eq. 1):

$$\delta_i \ln w_i = \beta_i^r + \delta_i \ln\!\bigl[w_i - WTP_i^r\bigr] \tag{3}$$

Solving for willingness to pay (p. 2022, eq. 2):

$$WTP_i^r = w_i\Bigl[1 - e^{(-\beta_i^r/\delta_i)}\Bigr] \tag{4}$$

This is reported as $$100\times[1 - e^{(-\beta^r/\delta)}]$$ percent of the wage for
the standard logit.

**Best-to-worst WTP.** The total value of the best amenity bundle relative to the
worst is (p. 2022, eq. 3):

$$WTP_i^{\text{FULL}} = w_i\Bigl[1 - e^{(-\sum_r \beta_i^r / \delta_i)}\Bigr] \tag{5}$$

where the sum is over the most-preferred value of each attribute. This yields 55
percent of the wage for the full sample (Table 2 col 5, p. 2025).

**Log total compensation** for the wage-structure analysis is (p. 2039):

$$\ln\!\Bigl(w_i + w_i\Bigl[1 - e^{(-\sum_r A_{ir}\,\beta_i^r / \delta_i)}\Bigr]\Bigr) \tag{6}$$

where $$A_{ir}$$ is an indicator for whether respondent $$i$$'s current job has
attribute $$r$$.

Standard errors use the delta method for the WTP estimates and are clustered by
respondent throughout.

## Empirical specifications

**Stated-preference experiment design.** The AWCS administered 10 stated-preference
experiments per respondent (December 2015-February 2016). In each experiment,
respondents chose between two hypothetical jobs (Job A and Job B). Job attributes were
drawn from the respondent's own current job as a baseline, with two nonwage attributes
randomly selected to vary between jobs. The offered wage $$w_{ijt}$$ was
$$\theta \cdot w_i$$ where $$\theta \sim N(1, 0.1^2)$$, truncated to $$[0.75, 1.25]$$,
ensuring wage variation of at most 50 percent of the current wage. Respondents chose
from four options: Strongly Prefer A, Prefer A, Prefer B, Strongly Prefer B, which
are aggregated into a binary indicator for Job A preference (p. 2021). This design
means identification of $$\beta / \delta$$ (the WTP ratio) comes from within-respondent
random variation in both wages and attributes across the 10 choice pairs.

**Subgroup WTP regressions.** To document heterogeneity in valuations, the authors
estimate the standard logit model separately for subgroups defined by gender (Table 4),
race (Table 5), education (Table 6), and age (Table 7), computing $$WTP^r$$
for each amenity within each subgroup.

**Wage and compensation differential regressions (Section V, Table 8).** For each
measure of compensation, the paper estimates separate regressions of log compensation
on indicator variables for demographic group and industry (aggregated to 11 NAICS
supersectors), with no constant (demeaned within supersector for industry analysis):

$$\ln(\text{compensation}_i) = \sum_k \phi_k D_{ik} + \text{controls} + e_i \tag{7}$$

where $$D_{ik}$$ are indicators for demographic group $$k$$ (female, non-White, education
group, age group) and $$\phi_k$$ is the log compensation differential relative to the
omitted group. Three versions are estimated: (i) log wage only, (ii) log total
compensation holding valuations at full-sample estimates from Table 2 col 5, and
(iii) log total compensation allowing valuations to differ by gender, race, education,
and age. The 90th, 50th, and 10th percentile differences are computed from these
regressions. Standard errors and confidence intervals use a block (by respondent)
bootstrap with 500 iterations (p. 2039).

**Sorting validation.** To test internal validity of the stated-preference estimates,
the authors use the 2018 AWCS follow-up wave ($$N = 977$$ matched respondents) to
test whether individuals who hold a given amenity in 2015 value it more in the
experiments than those without it. Those with a desired attribute in 2015 value it
4.1 percentage points more than those who transition away from it ($$p < 0.01$$),
consistent with preference-driven sorting (Table 3, p. 2032).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| American Working Conditions Survey (AWCS), waves 2015 and 2016 | Primary data source: incidence of 9 job attributes by demographic group (wave 1, July-October 2015); stated-preference experiments for WTP estimation (wave 2, December 2015-February 2016); N = 1,738 workers | no page yet |
| American Working Conditions Survey (AWCS), follow-up wave 2018 | Longitudinal follow-up for sorting validation and preference-transition analysis; N = 977 matched respondents | no page yet |
| RAND American Life Panel (ALP) | Nationally representative probability-based panel that served as the sampling frame for all AWCS waves | no page yet |
| Current Population Survey (CPS) | Used to generate survey weights matching AWCS to US working population demographics | no page yet |

Sample: 1,738 employed workers ages 25-71, from the RAND ALP, weighted to match the
US working population via CPS. The AWCS data are available publicly at
[https://www.rand.org/pubs/tools/TL269.html](https://www.rand.org/pubs/tools/TL269.html).
Replication data are archived at ICPSR (Maestas et al. 2023, DOI 10.3886/E184378V1).

## When to read the full paper

Read the source if you are:

- Estimating compensating wage differentials or the value of specific job amenities
  (Tables 2-7 provide WTP estimates by amenity and demographic group with standard errors).
- Adjusting wage gaps (gender, race, education, interindustry) for nonwage job
  attributes; Table 8 and Section V detail the methodology and results.
- Designing stated-preference experiments for labor market research; Sections III-IV
  provide the experimental design, logit estimation, and robustness checks including
  attention screens, probit alternatives, and common-baseline variants.
- Studying heterogeneity in labor market preferences; Tables 4-7 present results by
  gender, race, education, and age with cross-group p-values.

## Attribution and rights

This page is a distilled extract. The source paper is:

Maestas, Nicole, Kathleen J. Mullen, David Powell, Till von Wachter, and Jeffrey B.
Wenger. 2023. "The Value of Working Conditions in the United States and Implications
for the Structure of Wages." *American Economic Review* 113(7): 2007-2047.
https://doi.org/10.1257/aer.20190846

Copyright American Economic Association; reproduced with permission. Extract only;
full text available at [aeaweb.org](https://www.aeaweb.org/articles?id=10.1257/aer.20190846)
(paywalled; AEA 3-year embargo elapses July 2026). This summary is LLM-distilled
by IAR, not human-verified, and not reproduced.
