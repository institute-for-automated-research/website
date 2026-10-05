---
title: "Value of Working Conditions: Maestas et al. (2023)"
description: >-
  Distilled: Using a new nationally representative stated-preference survey
  (AWCS, 2015-16, N = 1,738 US workers), this paper estimates willingness to pay
  for nine nonwage job amenities; a switch from the worst to the best amenity
  bundle equals 55 percent of the wage. Accounting for amenity incidence and
  preference heterogeneity attenuates the gender wage gap by 24 percent, widens
  the race compensation gap by 27 percent, and increases the 90-10 wage
  inequality measure. American Economic Review 2023, AEA copyright. Twenty-four core
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
    codes: [J22, J28, J31]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: [Employment and Welfare Studies]
  dataAccess: hand-collected
  outcome:
    - willingness to pay for job amenities as percent of wage
    - total compensation differentials by gender, race, education, and age
    - interindustry compensation dispersion
    - log wage inequality (90-10 percentile gap)
    - incidence of nonwage job attributes across workers
    - willingness to pay for weekly work hours
  outcomeClass: [labor-careers-health]
  license: >-
    AEA copyright; article PDF is freely accessible on AEAweb after the 3-year
    embargo (confirmed 2026-10-04); Crossref returned no license block, no
    Creative Commons licence
  licenseShort: AEA copyright
  access: open
  machineAccess: "open-access PDF available from AEAweb (checked 2026-10-04); all rights reserved"
  redistribution: extract-only
  resultsCount: 24
  citedByCount: 0
  introducesData: true
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment, logit-regression]
    identification: randomized
  mechanisms: [compensating-differentials]
  contributionType: [new-data, new-fact, measurement]
  scope:
    region: US
    period: 2015-07..2018-12
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
    - { ref: R11, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "Telecommuting 4.2%; sitting 11.6%; relaxed pace 4.3%; own-performance evaluation 6.5%; work autonomy 4.0%; training 5.4%; community impact 3.6%", direction: positive }
    - { ref: R12, outcome: "willingness to pay for job amenities as percent of wage", metric: probability, value: "20% choose amenity-dominant job at 40% lower wage; attentive sample reaches 100% at 40% higher wage", direction: positive }
    - { ref: R13, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "6.1 pp higher for current holders; 4.1 pp for initial holders retaining amenity (p < 0.01); 1.7 pp for initial nonholders transitioning in, not significant", direction: positive }
    - { ref: R14, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "Best-to-worst bundle 58.8% for women vs 51.7% for men; moderate activity 18.4% vs 11.4%; 10 days PTO 18.7% vs 14.6%", direction: positive }
    - { ref: R15, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "Best-to-worst bundle 45.5% for non-White workers vs 57.0% for White workers; own schedule 3.8% vs 10.1%; autonomy -0.8% vs 5.1%", direction: mixed }
    - { ref: R16, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "Best-to-worst bundle 48.0%, 54.3%, and 60.0% across education groups; telecommuting -0.5%, 4.6%, and 6.9%", direction: positive }
    - { ref: R17, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "Best-to-worst bundle 47.5%, 53.5%, 58.9%, and 74.5% by ascending age group; moderate-activity WTP 8.8% to 30.5%", direction: positive }
    - { ref: R18, outcome: "total compensation differentials by age", metric: coefficient, value: "Under-35 vs age 62+: -0.314 adjusted vs -0.143 wage; age 35-49: -0.217 vs -0.081; age 50-61: -0.140 vs -0.038", direction: negative }
    - { ref: R19, outcome: "interindustry compensation dispersion", metric: coefficient, value: "Employment-weighted standard deviation 0.130 wage vs 0.155 adjusted compensation", direction: positive }
    - { ref: R20, outcome: "log wage inequality (90-50 and 50-10 percentile gaps)", metric: coefficient, value: "90-50: 0.963 to 1.011; 50-10: 0.701 to 0.759 log points", direction: positive }
    - { ref: R21, outcome: "willingness to pay for weekly work hours", metric: pp-effect, value: "40.4% earnings reduction for 40 to 20 hours; 57.7% earnings increase for 40 to 60 hours", direction: mixed }
    - { ref: R22, outcome: "incidence of nonwage job attributes across workers", metric: probability, value: "56.5% set own schedule; 36.4% telecommute; 42.9% mostly sit; 59.7% have 15+ PTO days; mean wage $30.30; N=1,738", direction: mixed }
    - { ref: R23, outcome: "total compensation differentials by education", metric: coefficient, value: "Some-college vs college: -0.564 adjusted vs -0.502 wage log points", direction: negative }
    - { ref: R24, outcome: "willingness to pay for job amenities as percent of wage", metric: pp-effect, value: "Best-to-worst WTP 50.7% mixed-logit mean, 56.9% mixed-logit median, 55.0% standard-logit full sample, 60.3% attentive sample, and 49.9% with amenity interactions; 10-day PTO 17.3%, 17.8%, 16.4%, 17.4%, 16.3%; 20-day PTO 23.7%, 24.9%, 23.0%, 25.6%, 22.9%", direction: positive }
  resultType: mixed
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added missing findings, formal equations and estimating specifications; not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 24 Core rows, equations, specifications, classification axes, findings, prose, frontmatter and DOI edges against the PDF. Corrected Table 2 and Table 8 locators, restored the omitted/misaligned Table 2 PTO estimates in R24 and findings, corrected R24 direction, and updated AEA access status. Locator-script Table 2/Table 3 flags were manually confirmed against printed pp. 2025 and 2031-2032; no unsupported headline claims remain, but the page omits headline incidence and wage-quantile patterns noted in the verdict. Table-locator pass (2026-10-04): none." }
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
| R3 | Paid time off: WTP for 20 days vs none | Table 2 col 5, p. 2025 | 23.0% wage equivalent |
| R4 | Physical demands: WTP for moderate vs heavy activity | Table 2 col 5, p. 2025 | 14.5% wage equivalent |
| R5 | Schedule flexibility: WTP for setting own schedule | Table 2 col 5, p. 2025 | 8.9% wage equivalent |
| R6 | Work arrangement: WTP for working alone (vs team-evaluated team) | Table 2 col 5, p. 2025 | 8.6% wage equivalent |
| R7 | Gender log compensation gap with preference heterogeneity | Table 8 Panel A col 3, p. 2040 | -0.142 log pts (vs -0.192 unadjusted); 24% reduction |
| R8 | Race log compensation gap with preference heterogeneity | Table 8 Panel A col 3, p. 2040 | -0.274 log pts (vs -0.208 unadjusted); 27% widening |
| R9 | Education log compensation gap (HS or less vs college) | Table 8 Panel A col 3, p. 2040 | -0.667 log pts (vs -0.559 unadjusted); 19% widening |
| R10 | Overall wage inequality: 90-10 log wage gap | Table 8 Panel C col 3, p. 2040 | 1.769 (vs 1.664 unadjusted); +10.5 log pts |
| R11 | Other amenity valuations: telecommuting, sitting, relaxed pace, own-performance evaluation, work autonomy, training, and positive community impact | Table 2 col 5, p. 2025 | 4.2%, 11.6%, 4.3%, 6.5%, 4.0%, 5.4%, and 3.6% of wage, respectively |
| R12 | Revealed-preference illustration: choosing a job with dominating amenities as its relative wage changes | Figure 1, p. 2023 | 20% choose the amenity-dominant job at a 40% lower wage; all attentive respondents choose it when it pays 40% more |
| R13 | Preference sorting by current amenity status and subsequent job transition | Table 3, pp. 2031-2032 | Current holders value amenities 6.1 pp more on average; among initial holders, those retaining an amenity value it 4.1 pp more (p < 0.01); among initial nonholders, difference is 1.7 pp and not significant |
| R14 | Gender heterogeneity in amenity valuations | Table 4, p. 2034 | Best-to-worst WTP: 58.8% of wage for women vs 51.7% for men; moderate activity 18.4% vs 11.4%; 10 days PTO 18.7% vs 14.6% |
| R15 | Racial heterogeneity in amenity valuations | Table 5, p. 2035 | Best-to-worst WTP: 45.5% for non-White workers vs 57.0% for White workers; own schedule 3.8% vs 10.1%; autonomy -0.8% vs 5.1% |
| R16 | Education gradient in amenity valuations | Table 6, p. 2036 | Best-to-worst WTP: 48.0% (high school or less), 54.3% (some college), and 60.0% (college degree); telecommuting: -0.5%, 4.6%, and 6.9% |
| R17 | Age heterogeneity in amenity valuations | Table 7, pp. 2037-2038 | Best-to-worst WTP: 47.5%, 53.5%, 58.9%, and 74.5% across ages 25-34, 35-49, 50-61, and 62+; moderate-activity WTP rises from 8.8% to 30.5% |
| R18 | Age compensation differential after preference adjustment | Table 8 Panel A col 3, p. 2040 | Under-35 vs age 62+: -0.314 log points adjusted vs -0.143 log points in wages; age 35-49: -0.217 vs -0.081; age 50-61: -0.140 vs -0.038 |
| R19 | Interindustry compensation dispersion after amenity adjustment | Table 8 Panel B cols 1 and 3, p. 2040 | Employment-weighted standard deviation rises from 0.130 (wages) to 0.155 (compensation allowing valuations to vary) |
| R20 | Wage inequality below and above the median after amenity adjustment | Table 8 Panel C, p. 2040 | 90-50 gap rises 0.963 to 1.011; 50-10 gap rises 0.701 to 0.759 log points when valuations vary |
| R21 | Valuation of weekly hours relative to total earnings | Figure 3, pp. 2029-2030 | Workers require 40.4% lower earnings to accept a 50% reduction in hours (40 to 20); require a 57.7% increase for a 50% increase in hours (40 to 60) |
| R22 | Incidence and distribution of working conditions in the 2015 US sample | Table 1, pp. 2013-2014 | 56.5% set their own schedule, 36.4% telecommute, 42.9% mostly sit, 59.7% have 15+ PTO days; mean hourly wage $30.30 (2015 dollars), N = 1,738 |
| R23 | Some-college compensation differential after preference adjustment | Table 8 Panel A col 3, p. 2040 | -0.564 log points adjusted vs -0.502 wage |
| R24 | Robustness of full-bundle and paid-time-off WTP across logit specifications | Table 2 cols 3-7, p. 2025 | Best-to-worst: 50.7% mixed-logit mean, 56.9% median, 55.0% standard-logit full sample, 60.3% attentive, 49.9% with interactions; 10-day PTO: 17.3%, 17.8%, 16.4%, 17.4%, 16.3%; 20-day PTO: 23.7%, 24.9%, 23.0%, 25.6%, 22.9% |

**Overall (paper's conclusion).** Working conditions vary widely across
demographic groups and throughout the wage distribution. Workers have measurable
willingness to pay for most job amenities studied. Accounting for both the
incidence of amenities and heterogeneity in valuations changes standard measures
of the wage structure: the gender gap narrows, the race and education gaps widen,
and overall wage inequality increases. Contrary to the conclusion of Krueger and
Summers (1988), accounting for the value of working conditions widens rather than
narrows interindustry wage differentials.

## Theory / model

The paper applies the competitive compensating-differentials framework of Rosen
(1986): workers sort among jobs by trading wages against nonwage working
conditions, and observed wages alone therefore omit amenity value. The paper does
not estimate a general-equilibrium sorting model. Its individual-level indirect
utility model for respondent `i`, alternative `j` in choice pair `t` is
$$V_{ijt}=\alpha+A_{ijt}'\beta_i+\delta_i\ln w_{ijt}+\varepsilon_{ijt},$$
where the attribute and wage coefficients can vary across workers. With iid
Type-I extreme-value errors, the implied binary logit choice probability is
$$\Pr(V_{ijt}>V_{ikt})=\frac{\exp\{(A_{ijt}'-A_{ikt}')\beta_i+\delta_i(\ln w_{ijt}-\ln w_{ikt})\}}{1+\exp\{(A_{ijt}'-A_{ikt}')\beta_i+\delta_i(\ln w_{ijt}-\ln w_{ikt})\}}.$$
These model expressions are printed in Section III, p. 2021. Stated-preference
experiments randomly vary wages and amenities within choice pairs, identifying
the wage-amenity tradeoff from respondent choices.

## Method

For an amenity `r`, the paper defines WTP by equating utility at the current wage
without that amenity to utility with the amenity and a lower wage. The three
numbered main-text equations are reproduced below as printed in Section III,
p. 2022. The signs and grouping in the exponents follow the PDF.

$$\delta_i\ln w_i=\beta_i^r+\delta_i\ln[w_i-WTP_i^r] \tag{1}$$

$$WTP_i^r=w_i\left[1-e^{-\beta_i^r/\delta_i}\right] \tag{2}$$

$$WTP_i^{\text{FULL}}=w_i\left[1-e^{-\sum_{r=1}^{R}\beta_i^r/\delta_i}\right] \tag{3}$$

For attributes with multiple possible values, the full-bundle calculation uses
the coefficient for the most preferred value to avoid double counting. The
standard logit restricts coefficients to be common across respondents; the mixed
logit allows random coefficients. WTP standard errors use the delta method and
are clustered by respondent unless noted otherwise.

## Empirical specifications

**Main stated-preference estimates.** Respondents completed 10 choices each,
with two nonwage attributes and wages randomized within pairs. The estimating
choice probability is the logit equation stated above (Section III, p. 2021).
The binary dependent variable records preference for Job A. The main estimates
use survey weights and cluster standard errors by respondent; the standard logit
sample is 17,380 choice pairs (Table 2, p. 2025). The paper also estimates a
mixed logit, an attentive-respondent subsample, and a two-way amenity interaction
specification. Online Appendix Table 4 reports probit, common-baseline,
unweighted, and hours-control checks; the authors state that WTP estimates are
robust across these alternatives (text p. 2022 and note 28, p. 2028).

**Observational hedonic comparison.** Table 2 columns 1-2 compare the
experimental estimates with cross-sectional and first-difference log-wage
regressions. Written out from Section IV A, p. 2025:

$$\ln w_{it}=\alpha+\sum_r\gamma_r A_{ir}+X_i'\theta+u_i.$$

For the linked panel, the first-difference estimator removes time-invariant worker
heterogeneity; written out from the same specification:

$$\Delta\ln w_{it}=\sum_r\gamma_r\Delta A_{ir}+\Delta X_i'\theta+\Delta u_i.$$

where `X` includes age-group, race, education, and citizenship indicators in the
cross section; the panel specification first-differences the matched AWCS
observations to remove time-invariant worker attributes. It uses 1,737
cross-sectional respondents and 977 matched panel respondents (Table 2, p. 2025).
These are observational comparisons, not the primary identification design.

**Demographic heterogeneity and sorting.** The standard logit is re-estimated
within gender, race, education, and age groups (Tables 4-7, pp. 2034-2038).
Table 3 interacts experimental WTP with 2015 amenity status, and then with
2018 amenity status for the linked follow-up sample (N = 9,770 choice-pair
observations, 977 respondents; pp. 2031-2032). WTP standard errors are
clustered by respondent; average differences use the delta method. Written out
from the interacted utility specification described in Section IV B, p. 2031:

$$V_{ijt}=\alpha+A_{ijt}'\beta+H_{i,2015}A_{ijt}'\gamma+\delta\ln w_{ijt}+\varepsilon_{ijt},$$

where `H` records whether the respondent has the amenity in the 2015 wave. The
follow-up tests condition these interactions on the 2018 amenity status as shown
in Table 3 (pp. 2031-2032).

**Compensation regressions.** For the compensation analysis, log wage or log
total compensation is regressed on demographic indicators and industry
indicators. Written out from Section V, pp. 2039-2040, the demographic
specification is

$$\ln C_i=\sum_k\phi_kD_{ik}+e_i,$$

where `C` is observed wages or adjusted total compensation and `D` are the
demographic group indicators. For the industry analysis, log compensation is
demeaned and regressed on the 11 industry supersector indicators with no
constant:

$$\widetilde{\ln C_i}=\sum_{s=1}^{11}\phi_sD_{is}+e_i.$$

Total compensation adds the estimated value of a worker's current
amenities to wages, using equation below (p. 2039; the PDF does not number it):

$$\ln\left(w_i+w_i\left[1-e^{-\sum_{r=1}^{R}A_{ir}\beta_i^r/\delta_i}\right]\right).$$

The demographic and wage-percentile analyses use N = 1,738; the industry
analysis uses N = 1,528. Standard errors and confidence intervals come from a
500-iteration respondent block bootstrap (Table 8 note, p. 2040). There are no
fixed effects in the demographic regressions; the industry regression demeans
within supersector.

**Work-hours extension.** The hours analysis replaces hourly wage with total
earnings and adds hours indicators from 5 to 60, with 40 hours omitted. Figure 3
reports valuations relative to earnings with 95% confidence intervals clustered
by respondent (text pp. 2029-2030). The hours-control utility model is stated
in footnote 29, p. 2030:

$$V_{ijt}=\alpha+A_{ijt}'\beta+\delta\ln e_{ijt}+H_{ijt}'\theta+u_{ijt},$$

where `e` is offered total earnings and `H` is the vector of hours indicators.

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
full text available at [aeaweb.org](https://www.aeaweb.org/articles?id=10.1257/aer.20190846).
This summary is LLM-distilled
by IAR, not human-verified, and not reproduced.
