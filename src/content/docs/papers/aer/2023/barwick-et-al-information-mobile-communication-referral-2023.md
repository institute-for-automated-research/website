---
title: "Information, Mobile Communication, and Referral Effects: Barwick, Liu, Patacchini & Wu (2023)"
description: >-
  Distilled: Using geocoded cellphone records from a Chinese telecom provider matched to
  administrative firm data, the paper provides the first direct evidence of increased
  communication between job seekers and their referrers around job changes (inverted
  U-shape peaking at the switch month), quantifies a referral effect of 0.35 on job
  location choice (nearly tripling the baseline probability), and shows referral jobs
  yield higher wages, shorter commutes, and faster firm growth. American Economic
  Review 2023, paywalled. Eight core results with source locators, datasets used,
  the identification strategy, and estimating equations.
sidebar:
  label: Barwick et al. 2023
  order: 1
tags: [paper-summary, labor-economics, social-networks, information-economics, urban-economics,
       china, panel-regression, event-study, peer-reviewed, unreplicated]
paper:
  authors: Panle Jia Barwick, Yanyan Liu, Eleonora Patacchini, Qi Wu
  authorList:
    - { family: Barwick, given: Panle Jia, orcid: "0000-0001-8857-8736", affiliation: "University of Wisconsin-Madison and NBER" }
    - { family: Liu, given: Yanyan, orcid: "0000-0002-1405-7345", affiliation: "International Food Policy Research Institute and Cornell University" }
    - { family: Patacchini, given: Eleonora, orcid: "0000-0002-3510-2969", affiliation: "Cornell University and CEPR" }
    - { family: Wu, given: Qi, orcid: "0000-0002-2114-9037", affiliation: "Guanghua School of Management, Peking University" }
  year: 2023
  venue: "American Economic Review 113(5), May 2023, 1170-1207"
  venueShort: AER 2023
  doi: 10.1257/aer.20200187
  jel:
    codes: [D82, J62, O18, P23, P25, R23, Z13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics: ["ICT Impact and Policies", "Regional Economics and Spatial Analysis", "Social Capital and Networks"]
  dataAccess: proprietary-confidential
  outcome:
    - probability of job location switch to referrer's workplace
    - wage at new job (thousand RMB)
    - probability of part-time to full-time transition at new job
    - probability of shorter commute at new job
    - firm net labor inflow
    - firm matching rate (hires over vacancies)
    - firm growth rate
  outcomeClass: [labor-careers-health, firm-real-outcomes]
  license: "Copyright American Economic Association 2023; no open-access licence found in Crossref DOI metadata checked 2026-06-24; AEA standard policy grants free readability after embargo"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "not machine-checked (2026-06-24); AEA standard policy grants free access after 12-month embargo; paper published May 2023"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, event-study]
    identification: selection-on-observables
  contributionType: [new-fact, new-data, measurement]
  mechanisms: [information-asymmetry]
  introducesData: true
  scope:
    region: China (northern city, anonymous)
    period: 2016-11..2017-10
    frequency: mixed
    dataType: [administrative, other]
    granularity: [individual, firm]
    n: "456,000 total users; 38,102 job switchers; 915,251 switcher-location pair observations"
  findings:
    - ref: R1
      outcome: probability of moving to referrer's work location
      metric: probability
      value: "0.35 (SE 0.01); mean baseline probability 0.09"
      direction: positive
      vsBenchmark: "nearly 3x the unconditional switching probability to a location"
    - ref: R2
      outcome: call frequency between switcher and referrer pair relative to baseline
      metric: coefficient
      value: "approx +8 calls/month above baseline at event month 0; nonreferrer pairs approx 0 throughout"
      direction: positive
      vsBenchmark: "nonreferrer pairs flat throughout 20-month event window"
    - ref: R3
      outcome: probability of job location choice for high-information-asymmetry groups
      metric: probability
      value: "rural-to-urban: additional +0.32 (SE 0.05); sector-changers: additional +0.21 (SE 0.02)"
      direction: positive
      vsBenchmark: "baseline referral coefficient 0.35 for all switchers"
    - ref: R4
      outcome: wage at new job (thousand RMB)
      metric: coefficient
      value: "0.62 thousand RMB (SE 0.31); approx 2% of mean annual wage 31 thousand RMB"
      direction: positive
    - ref: R5
      outcome: probability of part-time to full-time transition at new job
      metric: pp-effect
      value: "+1.4 pp (SE 0.007); approx 2% relative increase"
      direction: positive
    - ref: R6
      outcome: probability of shorter commute at new job
      metric: pp-effect
      value: "+9 pp (SE 0.01)"
      direction: positive
    - ref: R7
      outcome: firm net labor inflow (log)
      metric: coefficient
      value: "0.63 (SE 0.14); approx 63% increase"
      direction: positive
    - ref: R8
      outcome: firm matching rate (log net inflow over vacancies)
      metric: coefficient
      value: "0.84 (SE 0.27); approx 84% increase; average matching rate 1.53 for large firms"
      direction: positive
  resultType: new-finding
  relatesTo:
    - { cite: "Bayer, Ross & Topa (2008)", doi: '10.1086/595975', relation: extends, note: "residential-neighbor proxy yields referral coefficient 0.21 vs call-based measure 0.35; direct communication data dominates proxy-based approaches" }
    - { cite: "Topa (2001)", doi: '10.1111/1467-937x.00169', relation: builds-on, note: "foundational work on social interactions, local spillovers, and labor market referrals" }
    - { cite: "Gee, Jones & Burke (2017)", relation: cites, note: "Facebook strong ties more important than weak ties at margin for job finding; results corroborated here" }
    - { cite: "Granovetter (1973)", doi: '10.1086/225469', relation: cites, note: "the weak-ties hypothesis; results confirm stronger referral effect for stronger social ties (higher call intensity)" }
  openQuestions:
    - "Future studies on the mechanisms governing how information exchange through referrals increases labor market efficiency would be valuable (Conclusion, p. 1204)."
    - "The analysis cannot disentangle whether referrers pass job information to workers or inform employers about candidates' attributes, since both implications are consistent with a stronger referral effect when information asymmetry is more severe (p. 1189)."
    - "Phone calls serve as a proxy for total information exchange; WeChat, text messages, and app usage are not directly observed but are shown to be complements rather than substitutes (Section V, pp. 1201-1202)."
  replicationCode:
    url: https://doi.org/10.3886/E183161V1
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full PDF read (pp. 1170-1207); eight results extracted with source locators. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; five fixes applied: JEL codes completed (added O18, P23, P25, Z13); R3 baseline Friend corrected to 0.34/0.32 (cols 5-6) from erroneous 0.33; R5 PT-to-FT mean 0.57 replaced with paper-stated 2% relative increase (0.57 is pre-switch FT rate, not regression-variable mean); Table 5 description corrected to distinguish cols 3 and 4 (col-4 call-based coefficient is 0.35 not 0.25 as previously stated)."
  licenceVerification:
    - source: "Crossref REST API works/10.1257/aer.20200187"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "no license[] block present in Crossref response; VOR content-version only; AEA copyright; no CC licence found"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification strategy, and the estimating
equations: enough to know what it found and how, without reading all 38 pages. To replicate
or extend, read the full source at the [original](https://doi.org/10.1257/aer.20200187).

## TL;DR

The paper exploits geocoded cellphone records from a major Chinese telecom provider to study
whether social contacts (referrers) transmit job-relevant information to job seekers. It
documents (i) an inverted U-shaped spike in call frequency between switchers and their
referrers in the months before a job change, with no corresponding pattern for non-referrer
friends; (ii) a referral effect of 0.35 on job location choice - having a social contact
working at a location nearly triples the probability of switching there; and (iii) referral
jobs are of higher quality: they pay more, involve shorter commutes, are more likely to be
full-time, and lead to faster firm growth. Effect heterogeneity shows referrals matter
especially when information asymmetry is more severe, as for young workers, rural-to-urban
movers, and sector-changers. Topa (2001) provides the foundational social-interactions
framework; Bayer, Ross, and Topa (2008) introduced the residential-neighbor proxy
approach that this paper extends using direct communication data.

## Core results

Magnitudes and significance are as reported; \*/\*\*/\*\*\* = 10%/5%/1%. Locators point
into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Referral effect on job location choice**: having a friend at location l increases probability of switching there by 0.35 | Table 3, col 2, p. 1186 | Coeff = 0.35 (SE 0.01); mean baseline probability = 0.09; N = 915,251 switcher-location pairs |
| R2 | **Inverted U-shape in referrer call frequency**: calls between switchers and referrers peak at the job switch month; nonreferrer calls are flat throughout | Figure 3, p. 1188 | Referrer-pair coefficient at month 0 approx +8 above baseline; nonreferrer pairs approx 0 throughout; 238,092 referrer-month obs vs 4,759,176 nonreferrer obs |
| R3 | **Referral effect amplified for high information-asymmetry groups**: rural-to-urban movers and sector-changers show substantially larger referral effects | Table 4, cols 5-6, p. 1191 | Friend x rural-to-urban = +0.32 (SE 0.05); Friend x changing sector = +0.21 (SE 0.02); baseline Friend 0.34 (col 5) / 0.32 (col 6) |
| R4 | **Referral wage premium**: referral jobs pay RMB 620 more per year, about 2 percent above the mean wage | Table 7, col 1, p. 1199 | 0.62 thousand RMB (SE 0.31); mean wage approx 31 thousand RMB/year; N = 17,615 |
| R5 | **Referral jobs are more likely to be full-time**: having a referrer at the new workplace raises the probability of a part-time to full-time transition by 1.4 percentage points | Table 7, col 3, p. 1199 | 0.014 (SE 0.007); approx 2% relative increase (p. 1198); N = 19,431 |
| R6 | **Referral jobs have shorter commutes**: referral raises probability of a shorter commute by 9 percentage points | Table 7, col 4, p. 1199 | 0.09 (SE 0.01); approx one-third of job changes involve a shorter commute; N = 29,117 |
| R7 | **Firm benefit: net labor inflow**: firms hiring through referrals gain 63 percent more workers (log net inflow) in the most saturated specification | Table 8, Panel A col 4, p. 1201 | gamma = 0.63 (SE 0.14); R-squared = 0.66 |
| R8 | **Firm benefit: matching rate**: firms hiring through referrals achieve an 84 percent higher job matching rate (log hires over vacancies) | Table 8, Panel B col 8, p. 1201 | gamma = 0.84 (SE 0.27); average matching rate = 1.53 for large firms |

**Overall (paper's conclusion).** Information provided by social contacts mitigates
information asymmetry in labor markets and facilitates better worker-firm matching.
The inverted U-shape in referrer communication around job changes, absent for
non-referrer friends, provides direct evidence that referrers pass job-relevant
information and rules out homophily and sorting as the sole explanation. Both
workers and firms benefit: referred employees earn more, commute less, and are
more likely to hold full-time positions, while firms that hire through referrals
grow faster and fill vacancies at higher rates.

## Theory / model

This paper has no formal economic model. It tests three linked hypotheses derived
from the theoretical literature on information transmission in labor markets
(Topa 2001):

1. **Information channel hypothesis.** Referrers pass job-relevant information to job
   seekers, generating an increase in communication intensity in the months before the
   job change. The prediction is an inverted U-shape in call frequency between referrer
   pairs centered on the event month, with no such spike for non-referrer friends.

2. **Referral effect hypothesis.** Having a social contact working at a given location
   raises the probability of switching there. The coefficient captures both information
   provision (the referrer informs the job seeker of an opening) and endorsement
   (the referrer vouches for the candidate to the employer). Under either channel,
   the referral should increase location choice probability.

3. **Information-asymmetry amplification.** The referral effect should be larger when
   information between workers and firms is more asymmetric: for young workers with
   limited labor market experience, rural-to-urban movers unfamiliar with urban job
   markets, and sector-changers whose skills are less observable. If the mechanism is
   pure preference (working near friends), no such heterogeneity would be predicted.

**Identification strategy.** The key threats are homophily (friends share unobserved
location preferences) and sorting (friends cluster in locations with unobserved job
opportunities). The paper addresses these via:

- **Origin-destination neighborhood-pair fixed effects** (equation 1, p. 1184):
  the referral coefficient beta is identified from within-pair variation, comparing
  job switchers who move between the same old-new neighborhood pair but have
  different social networks. This controls for all aggregate pair-specific attributes
  including industry composition, labor demand, and amenities.

- **Falsification tests using friend type** (Table 3, cols 3-4, p. 1186): friends
  who recently moved away from location l have a coefficient of 0.07 (far below
  the 0.35 for current referrers). Friends who live in the new location's
  neighborhood but do not work there have a coefficient of 0.15. If homophily or
  the specific neighborhood drove the result, these coefficients would be similar
  to the baseline. Current employment at the destination is what matters, consistent
  with information about job openings being the active ingredient.

- **Vacancy restriction** (Table 3, col 2, p. 1186): the baseline sample restricts to
  switchers with at least one alternative location in the same neighborhood offering
  the same occupation and salary range, ruling out the concern that the friend dummy
  proxies for the only available matching job.

- **Homophily controls** (Table 6, p. 1195): adding same-gender, same-age-group,
  same-birth-county, same-housing-price controls and k-means cluster dummies for
  switcher-friend pairs leaves the estimate stable at 0.33-0.34, showing the baseline
  controls adequately capture sorting.

The paper also compares its call-based referral measure with proxy-based approaches
common in the literature: residential neighbors in the spirit of Bayer, Ross, and
Topa (2008) (coefficient 0.21) and same-birth-county coworkers (0.10). The
call-based measure dominates both proxies by a margin that is statistically
significant at the one-percent level (Table 5, col 3-4, p. 1192).

## Method

The paper applies OLS panel regression with fixed effects and an event study. The
builds on `panel-regression` and `event-study` technique primitives. The four
estimating equations are introduced on pp. 1181-1184 and 1197-1200.

**Preliminary correlation (Table 2, p. 1182).** The relationship between
information flow (call volume) and worker flows across neighborhood pairs is
established via OLS with origin and destination fixed effects. Adding call volume
as a regressor raises the R-squared from 0.037 to 0.17, and doubling call volume
is associated with a 16 percent increase in worker flows (inverse-hyperbolic-sine
specification). This motivates using communication intensity as a proxy for
information provision.

**Main referral regression (eq. 1, p. 1183-1184).** Let $$\text{M}_{il} = 1$$ if job
switcher $$i$$ moves to location $$l$$ within the new workplace neighborhood. The
specification restricts individual $$i$$'s choice set to locations within the destination
neighborhood to absorb heterogeneity across neighborhoods:

$$M_{il} = \beta \text{Friend}_{il} + \mathbf{X}_i \mathbf{Z}_l \gamma + \lambda_{\tilde{c},c} + \epsilon_{il} \tag{1}$$

where $$\text{Friend}_{il} = 1$$ if at least one of $$i$$'s social contacts works at location
$$l$$ three months before the job switch; $$\mathbf{X}_i$$ = individual demographics (gender,
age groups, migration status, total social contacts); $$\mathbf{Z}_l$$ = location amenities
(restaurants, roads and parking lots, schools within 500 m radius); $$\lambda_{\tilde{c},c}$$ = old-by-new
neighborhood-pair fixed effects (20,811 total pairs in unrestricted sample; 16,468 in
the baseline vacancy-restricted sample). Standard errors are clustered at the neighborhood-pair
level.

**Event study (p. 1187).** Call frequency between switcher $$i$$ and friend $$j$$ in
month $$t$$ is regressed on event-time dummies interacted with referrer vs non-referrer
status, covering an event window from 11 months before to 9 months after the job switch
(month $$s = -1$$ is the reference category):

$$\text{Freq}_{ijt} = \sum_{s=-11}^{9} \gamma_s \text{Referral}_{ij} \cdot \mathbf{1}\{t = s\} + \sum_{\substack{s=-11 \\ s \neq -1}}^{9} b_s \text{Nonreferral}_{ij} \cdot \mathbf{1}\{t = s\} + \lambda_i + \tau_t + \epsilon_{ijt}$$

where $$\lambda_i$$ are individual fixed effects and $$\tau_t$$ are calendar month fixed effects.
The coefficients $$\{\gamma_s, b_s\}$$ capture changes in call frequency relative to
the individual's own baseline rate of talking to non-referrer friends. Standard errors
are clustered at the individual level.

**Worker outcome regression (eq. 2, p. 1197).** Labor market outcomes of the referral job:

$$Y_{ilr} = \beta \text{Friend}_{ilr} + \mathbf{X}_i \mathbf{Z}_l \gamma + \lambda_c + \alpha_r + \epsilon_{ilr} \tag{2}$$

where $$Y_{ilr}$$ is a labor outcome for worker $$i$$ at new work location $$l$$ in
residential neighborhood $$r$$; $$\lambda_c$$ = new work neighborhood fixed effect;
$$\alpha_r$$ = residential neighborhood fixed effect; controls $$\mathbf{X}_i$$ include
gender, age groups, migration status, and log number of social contacts. Standard
errors are two-way clustered by residential and new work neighborhood.

**Firm performance regression (eq. 3, p. 1200).** Log firm outcomes:

$$Y_i = \gamma \text{Referral}_i + \mathbf{Z}_i \beta + \lambda_c + \epsilon_i \tag{3}$$

where $$\text{Referral}_i = 1$$ if at least one new hire at firm $$i$$ has a social contact
already working there; $$Y_i \in \{\log(\text{net inflow}),\, \log(\text{matching rate}),\,
\log(\text{growth rate})\}$$; $$\lambda_c$$ = neighborhood fixed effect; $$\mathbf{Z}_i$$
includes firm age, 18 industry dummies, SOE dummy, average employees 2010-2015, average
capital stock 2010-2015, previous employment growth rate, share of female workers, share
of migrants, average employee age, average employee housing price, and the firm's referral
network size. Standard errors are clustered at the neighborhood level.

## Empirical specifications

**Baseline specification (Table 3, p. 1186).** Equation (1) estimated on 915,251
switcher-location pairs (restricted to individuals facing at least one alternative same-neighborhood,
same-occupation, same-salary-range opening). Old-by-new neighborhood-pair fixed effects
(16,468 pairs). The mean within-neighborhood switching probability is 0.09. The baseline
referral coefficient is 0.35 (col 2). Columns 3-4 add falsification friend types (moved-away:
0.07; lives-but-not-works: 0.15); column 5 replaces direct friends with friends-of-friends
(coefficient 0.14, confirming these second-degree links carry less job information); column 6
adds extensive local labor market controls (0.33, similar to baseline).

**Effect heterogeneity (Table 4, p. 1191).** Equation (1) augmented with interaction
terms $$\text{Friend}_{il} \times X_i$$, one per column: (i) distance between old and new
workplaces, coefficient 0.002 (SE 0.0004); (ii) distance between home and new workplace,
0.002 (SE 0.0003); (iii) young dummy (ages 25-34), +0.04 (SE 0.01); (iv) rural-to-urban
switch, +0.32 (SE 0.05); (v) sector-change dummy, +0.21 (SE 0.02). For rural-to-urban
movers and sector-changers the point estimates of the total referral effect are 0.66 and
0.53 respectively, substantially above the base estimate.

**Event study (Figure 3, p. 1188).** 238,092 switcher-referrer-month observations and
4,759,176 switcher-nonreferrer-month observations. The referrer-pair call frequency coefficient
rises from near zero at month -9 to a peak of approximately +8 above baseline at month 0,
then remains elevated post-switch as referrers become coworkers. Nonreferrer friends show
coefficients near zero throughout. Falsification event studies (Figure 4, p. 1190) show that
moved-away and lives-at-new-location friends display flat or mildly elevated patterns with
no inverted U-shape, confirming the information spike is specific to current employment
at the destination.

**Comparison with literature proxies (Table 5, p. 1192).** Equation (1) replaces the
call-based Friend dummy with (i) residential neighbor dummy (0.21, SE 0.01) and (ii)
same-birth-county coworker dummy (0.10, SE 0.01). Columns 3 and 4 each include one
proxy alongside the call-based measure. In column 3, the residential neighbor coefficient
falls to 0.18 (SE 0.01) while the call-based Friend (not neighbor) coefficient is 0.25
(SE 0.01). In column 4, the same-birth-county coefficient falls to 0.09 (SE 0.01) while
the call-based Friend (not same birth county) coefficient is 0.35 (SE 0.03). Both proxy
estimates decline when the direct communication measure is included, confirming the
proxies capture genuine but attenuated social interactions, consistent with Granovetter
(1973) and the approach of Gee, Jones, and Burke (2017).

**Worker benefits (Table 7, p. 1199).** Equation (2) estimated separately for five
outcome variables. Sample sizes vary by outcome due to data availability. All columns
include residential and new-work neighborhood fixed effects. Key results: wage = 0.62
thousand RMB (SE 0.31, N=17,615); coworker housing price difference = 0.07 thousand
RMB/m$^2$ (SE 0.04, N=23,323); PT-to-FT = 0.014 (SE 0.007, N=19,431); shorter
commute = 0.09 (SE 0.01, N=29,117); non-SOE to SOE = 0.012 (SE 0.005, N=15,881).

**Firm benefits (Table 8, p. 1201).** Equation (3) estimated on large-firm locations
(firms with more than 100 employees) to reduce spurious worker-firm linking. In the most
saturated specification (column 4/8/12 for each panel), gamma = 0.63 (SE 0.14) for log
net inflow, 0.84 (SE 0.27) for log matching rate, and 0.45 (SE 0.11) for log firm
growth rate. The estimates are stable across specifications with progressively richer
firm and employee controls, arguing against upward bias from fast-growing firms being
more likely to use referrals.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Geocoded cellphone records, Company A (anonymous northern Chinese city) | Main analysis: social network construction, information-flow measures, work and home location histories for 456,000 users, Nov 2016-Oct 2017 | No page yet (proprietary; provider anonymous under data-sharing agreement) |
| Administrative firm-level records (merged by location) | Industry composition, average payroll, number of employees, capital stock; used for firm-performance regressions and location controls | No page yet (Chinese administrative data; not publicly available) |
| Job postings data (unnamed online platform) | Occupation and salary range at each location; used to restrict baseline sample to switchers facing comparable alternative opportunities | No page yet |
| Residential housing price data | Proxy for coworker socioeconomic status; used as a nonwage benefit measure (delta coworker HP) | No page yet |
| China Family Panel Studies (CFPS, 2014) | Descriptive only: national average demographics and job-search method frequencies for comparison with sample (Figure 1, Table 1) | No page yet |
| US Current Population Survey (2014) | Descriptive only: US job-search method frequencies for cross-country comparison (Figure 1) | No page yet |

Sample: November 2016 to October 2017 (12 months). Final analysis sample: 456,000
individuals with stable work locations for at least 45 weeks and at most two work
locations; 38,102 job switchers (8 percent of sample). Social contacts defined as
anyone with at least one call to or from individual i in the three months prior to the
job switch; on average 50 percent of a user's friends are Company A customers.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20200187) if you are: measuring
information transmission in labor markets with mobile phone data or other digital
footprints; designing or evaluating employee referral programs and need evidence
on the heterogeneity of referral effects by worker type; working on urban labor
mobility in developing economies where formal job-search institutions are weak;
extending the event-study design to other communication technologies (WeChat,
messaging apps) or other information channels; or benchmarking referral-effect
magnitudes for structural job-search models. The online appendix (referenced in
the paper and in the replication package at
[10.3886/E183161V1](https://doi.org/10.3886/E183161V1)) contains detailed
robustness tables and the event study for unemployed job-seekers.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(5), May 2023. Replication
data available at [10.3886/E183161V1](https://doi.org/10.3886/E183161V1). This
distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or
independently reproduced**. No CC licence was found in Crossref metadata; standard
AEA copyright applies; extract-only.

> Barwick, Panle Jia, Yanyan Liu, Eleonora Patacchini, and Qi Wu.
> "Information, Mobile Communication, and Referral Effects."
> *American Economic Review* 113, no. 5 (May 2023): 1170-1207.
> DOI: 10.1257/aer.20200187. Copyright 2023 American Economic Association.
> This page is an extract only; it is not a substitute for the original.
