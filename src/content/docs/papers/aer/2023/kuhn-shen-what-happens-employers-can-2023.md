---
title: "Banning Gendered Job Ads: Kuhn & Shen (2023)"
description: >-
  Distilled: When XMRC.com (a Chinese job board) removed explicit gender
  requests from all job ads overnight in March 2019, women's share of
  callbacks to previously male-requesting jobs rose by 61 percent and men's
  share of callbacks to previously female-requesting jobs rose by 146 percent.
  The ban generated a large increase in gender-mismatched applications that
  employers treated relatively well, suggesting gender requests often
  reflected weak preferences or outdated stereotypes. American Economic
  Review 2023, paywalled. Nine core results with source locators, datasets
  used, and the regression-discontinuity estimating equations.
  LLM-distilled, not human-verified.
sidebar:
  label: Kuhn-Shen 2023
  order: 1
tags: [paper-summary, labor-economics, gender-discrimination, hiring, job-ads,
       natural-experiment, panel-regression, peer-reviewed, unreplicated,
       data:xmrc]
paper:
  authors: Peter Kuhn, Kailing Shen
  authorList:
    - { family: Kuhn, given: Peter, orcid: "0000-0003-2003-5908", affiliation: "University of California, Santa Barbara" }
    - { family: Shen, given: Kailing, orcid: "0000-0001-6685-1850", affiliation: "Australian National University" }
  year: 2023
  venue: "American Economic Review 113(4), April 2023, 1013-1048"
  venueShort: AER 2023
  doi: 10.1257/aer.20211127
  jel:
    codes: [J16, J71, J63]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Names, Identity, and Discrimination Research", "Gender Studies in Language", "Game Theory and Voting Systems"]
  dataAccess: proprietary-confidential
  outcome:
    - female share of applications and callbacks to male-requesting jobs
    - male share of applications and callbacks to female-requesting jobs
    - total application arrivals to previously gendered jobs
    - application match quality and callback rate per application
  outcomeClass: [labor-careers-health]
  license: "paywalled (no CC license found in Crossref REST API; AEA standard terms of use)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 9
  citedByCount: 29
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, panel-regression, difference-in-differences]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [information-asymmetry, behavioral-bias]
  introducesData: true
  scope:
    region: China (Xiamen)
    assetClass: skilled private-sector job ads (XMRC.com, Xiamen)
    period: 2018-09..2019-08
    frequency: daily
    dataType: [administrative]
    granularity: [individual, firm]
    n: "3,133,603 applications by 204,407 workers to 117,390 ads by 15,902 firms; 348,198 callbacks"
  findings:
    - { ref: R1, outcome: "female share of callbacks to male-requesting (M) jobs", metric: pp-effect, value: "+2.94 pp (+61%); Table 2 col 4, p. 1027", direction: positive, vsBenchmark: "base 4.79% preban female callback share in M jobs" }
    - { ref: R2, outcome: "male share of callbacks to female-requesting (F) jobs", metric: pp-effect, value: "+9.91 pp (+146%); Table 2 col 4, p. 1027", direction: positive, vsBenchmark: "base 6.78% preban male callback share in F jobs" }
    - { ref: R3, outcome: "female share of applications to M jobs", metric: pp-effect, value: "+4.01 pp (+72%); Table 1 col 4, p. 1026", direction: positive, vsBenchmark: "base 5.59% preban female applicant share in M jobs" }
    - { ref: R4, outcome: "male share of applications to F jobs", metric: pp-effect, value: "+13.40 pp (+133%); Table 1 col 4, p. 1026", direction: positive, vsBenchmark: "base 10.06% preban male applicant share in F jobs" }
    - { ref: R5, outcome: "total daily applications to F (female-requesting) jobs", metric: coefficient, value: "+0.0228 applications/day (+12.2%); Table 4 panel C col 2, p. 1038", direction: positive }
    - { ref: R6, outcome: "total daily applications to M (male-requesting) jobs", metric: coefficient, value: "+0.0165 applications/day (+8.5%); Table 4 panel D col 2, p. 1038", direction: positive }
    - { ref: R7, outcome: "female applications to own (F) jobs after ban removed female-only invitation", metric: coefficient, value: "-0.0160 applications/day; Table 4 panel C col 3, p. 1038", direction: negative, vsBenchmark: "men did not reduce applications to M jobs after ban (coefficient near zero)" }
    - { ref: R8, outcome: "mean application match quality (normalized)", metric: sd-effect, value: "+0.0169 SD (significant at 5%); Table 5 panel A col 2, p. 1040", direction: positive }
    - { ref: R9, outcome: "callback rate per application submitted", metric: pp-effect, value: "-0.0028 (SE 0.0026, not significant); Table 6 panel A col 2, p. 1041", direction: none }
  resultType: new-finding
  relatesTo:
    - { cite: "Kuhn and Shen (2013)", doi: '10.1093/qje/qjs046', relation: builds-on, note: "prior paper documenting gender discrimination in Chinese job ads, which found explicit requests were common and affected applicant gender mix" }
    - { cite: "Delgado Helleseter, Kuhn, and Shen (2020)", relation: builds-on, note: "documented the prevalence and distribution of gender requests across job boards; current paper uses its setting for the policy study" }
    - { cite: "Card, Colella, and Lalive (2021)", doi: '10.3386/w29350', relation: tests, note: "parallel work on Austria's 2004 ban; complementary administrative data observing actual hires but fuzzier policy discontinuity" }
  openQuestions:
    - "Long-run effects: workers cannot acquire skills for highly gendered trades in the short run; a ban may encourage gender-atypical skill investment over longer horizons (pp. 1045-1046)."
    - "The study observes callbacks as a proxy for hires; whether integration fully extends to the hiring stage is unknown (p. 1046)."
    - "The study covers only inflows of new workers; effects on wage growth, promotion, and retention within firms are not observed (footnote 43, p. 1046)."
  replicationCode: { url: "https://doi.org/10.3886/E183021V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read PDF in full (36 pages); all locators sourced directly from the paper; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed R1 base from 6.78% to 4.79% (female callback share in M jobs preban, Table 2 notes) in Core results table and findings[]; fixed R4 formula sign error (|-β¹+β³| → |β¹+β³|) in Empirical specifications; all other magnitudes, locators, and equations confirmed correct." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20211127", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license array empty; title, authors, publisher (American Economic Association), published date (2023-04-01), and page range (1013-1048) confirmed; no open-access license found" }
---

**What this is.** This is a distilled skeleton of the paper. Read the original
([doi:10.1257/aer.20211127](https://doi.org/10.1257/aer.20211127)) to replicate
or extend the analysis.

## TL;DR

On March 1, 2019, XMRC.com (a private Chinese job board serving the Xiamen
metropolitan area) removed its standardized "preferred gender" field from all
job ads overnight, without advance notice to employers or workers. Using
internal job-board records spanning a full year around the ban, Kuhn and Shen
(2023) estimate the causal effects of this sudden policy change on workers'
application behavior and the gender composition of successful (callback)
applicant pools. The ban raised women's share of callbacks to jobs that had
previously requested men by 2.94 percentage points (61 percent), and raised
men's share of callbacks to jobs that had previously requested women by 9.91
percentage points (146 percent). The main mechanism was a large surge in
gender-mismatched applications, which employers treated relatively well:
workers who applied to jobs of the "wrong" gender received callbacks at
65 to 87 percent of the rate of gender-matched applicants, both before and
after the ban. The ban did not increase matching frictions: aggregate
application match quality rose slightly and callback rates per application
were unaffected. The effect was asymmetric: men entered formerly female jobs
at a far greater rate than women entered formerly male jobs, which the paper
links to gender differences in ambiguity aversion and the greater
industry-specificity of the most male-dominated job titles. Integration
concentrated in relatively low-wage positions; the most strongly gendered
titles (drivers, electricians, nurses, receptionists) were essentially
untouched.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Women's share of callbacks to M (male-requesting) jobs rose after ban | Table 2 col 4, p. 1027 | +2.94 pp (+61%), from base 4.79% |
| R2 | Men's share of callbacks to F (female-requesting) jobs rose after ban | Table 2 col 4, p. 1027 | +9.91 pp (+146%), from base 6.78% |
| R3 | Women's share of applications to M jobs rose after ban | Table 1 col 4, p. 1026 | +4.01 pp (+72%), from base 5.59% |
| R4 | Men's share of applications to F jobs rose after ban | Table 1 col 4, p. 1026 | +13.40 pp (+133%), from base 10.06% |
| R5 | Total daily applications to F jobs increased | Table 4 panel C col 2, p. 1038 | +0.0228/day (+12.2%); all new applications gender-mismatched |
| R6 | Total daily applications to M jobs increased | Table 4 panel D col 2, p. 1038 | +0.0165/day (+8.5%); all new applications gender-mismatched |
| R7 | Women reduced their applications to F jobs after ban removed female invitation | Table 4 panel C col 3, p. 1038 | -0.0160 applications/day (sig.); men did not reduce M-job applications |
| R8 | Mean application match quality rose slightly | Table 5 panel A col 2, p. 1040 | +0.0169 SD (significant, 5% level) |
| R9 | Callback rate per application submitted: null result | Table 6 panel A col 2, p. 1041 | -0.0028 (SE 0.0026), not significant |

**Overall (paper's conclusion).** The ban integrated gender-previously-segregated
applicant pools and callback pools without measurable harm to application quality
or workers' success rates per application. The integrating effects were
broad-based across ads, firms, and job titles, but were concentrated in
lower-wage positions and did not penetrate the most gender-stereotyped job titles
(drivers, electricians, nurses, receptionists). The ban's effects were considerably
stronger for men than for women, which the paper attributes to gender differences
in ambiguity aversion and the greater specificity of skills required for highly
male-dominated occupations.

## Theory / model

The paper has no formal theoretical model. Building on Kuhn and Shen (2013),
the paper lays out the following testable hypotheses and identifies two channels
through which a gendered-ad ban could affect labor markets.

**Hypotheses.** (i) Banning explicit gender requests will change the gender
composition of applicant pools to formerly gendered jobs. (ii) The direction
and magnitude of the change depend on how employers used gender requests before
the ban: if requests reproduced the incumbent workforce gender mix (reinforcing
segregation), the ban integrates; if requests were affirmative-action
("lean against the wind"), the ban impedes integration. (iii) The ban may
generate additional frictions (harder to find good matches) or may be benign
if workers self-select appropriately despite the absence of a gender signal.

**Identification.** The policy shock is a sharp RD in time. On the night of
February 28, 2019, XMRC removed the preconfigured "desired gender" dropdown
field from all job ads, effective March 1, 2019, without advance notice.
The removal was sudden (employers had not pre-emptively reduced their use of
gender requests between 2016 and the ban date), unexpected, and limited to
the standardized field (text-embedded gender preferences in job descriptions
were not removed). This allows a regression-discontinuity-in-time design:
the outcome is compared in the same job ads before and after March 1, 2019.
The parallel DiD robustness check uses equivalent weeks in 2018 as controls
for 2019 (Delgado Helleseter, Kuhn, and Shen (2020) provides the baseline
for the time-series context).

**Evidence on the mechanism.** Figure 3 (p. 1029) shows that, overwhelmingly,
employers on XMRC used gender requests to reinforce the incumbent gender mix
of the job title (not for affirmative-action purposes), confirming that the
ban had an integrating effect in principle. The asymmetry between men and
women (R4 vs R3, R2 vs R1) is consistent with two channels: (a) the
female-dominated jobs on XMRC are less industry-specific ("administration and
reception" titles appear across all sectors), so men could quickly qualify;
(b) women are more deterred than men by ambiguous signals - removing an
explicit female invitation reduced women's own-gender applications (R7),
while removing an explicit male invitation did not reduce men's own-gender
applications, consistent with Card, Colella, and Lalive (2021) and gender
differences in ambiguity aversion documented in other settings.

## Method

The paper applies two regression models, both adapted to the regression-
discontinuity-in-time structure.

**Equation (1): gender-share outcomes (weekly ad-week cells).** The outcome
$$Y_{jt}$$ is the female share of applications or callbacks to job $$j$$ in week $$t$$.
The estimating equation is (p. 1025):

$$Y_{jt} = \beta^1 \text{Post}_t \cdot F_j + \beta^2 \text{Post}_t \cdot M_j + \beta^3 \text{Post}_t + \beta^4 F_j + \beta^5 M_j + \beta^6 \mathbf{X}_j + \varepsilon_{jt} \tag{1}$$

where $$F_j$$ and $$M_j$$ indicate that job $$j$$ had a female (male) gender request
when first posted; $$\text{Post}_t$$ equals one for weeks on or after March 1, 2019;
and $$\mathbf{X}_j$$ is a vector of controls including an intercept. Nongendered
(N) jobs in the preban period are the reference category. The treatment effects
are $$\beta^1$$ (ban's effect on female share in F jobs relative to N jobs) and
$$\beta^2$$ (ban's effect in M jobs relative to N jobs). A quartic in calendar
weeks and a quartic in job age (weeks since posting) control for secular trends
and duration dependence within recruiting spells. The most saturated specification
adds job-ad fixed effects (column 4 of Tables 1 and 2), absorbing all
time-invariant job characteristics. Observations are weighted by total
applications received; standard errors cluster by firm ID throughout.

**Equation (2): application arrival rates (daily ad-day cells, 30-day window).**
For outcomes with non-smooth seasonal trends around the Spring Festival, the
paper fits local linear regressions to daily data within a 30-day window on
either side of the ban (p. 1037):

$$Y_{jt} = \alpha + \beta \text{Post}_t + \delta^1 t + \delta^2 t \cdot \text{Post}_t + \theta \mathbf{X}_{jt} + \varepsilon_{jt} \tag{2}$$

where $$t$$ indexes days relative to the ban date (March 1, 2019 = day 0),
$$Y_{jt}$$ is the number of applications received by job $$j$$ on day $$t$$,
$$\beta$$ is the size of the discontinuity on the first treatment day, and
$$\delta^1, \delta^2$$ allow different linear time trends on either side of the ban.
Controls $$\mathbf{X}_{jt}$$ include day-of-week fixed effects, the number of
vacancies specified in the ad, and dummies for the first three days of an
ad's life (to account for application-arrival spikes at posting). Job-ad
fixed effects are added in column 2 of Table 4, giving the tightest
within-ad estimate of the ban's daily application effect. Regressions for
match quality (Table 5) use the same specification as equation (2) with the
normalized match quality as $$Y_{jt}$$. The callback-per-application regressions
(Table 6) replace job-ad fixed effects with applicant fixed effects and define
the outcome at the application level (application $$i$$ ever receives a callback).

## Empirical specifications

**Tables 1 and 2: gender composition of applicant and callback pools.**
Equation (1) is estimated on ad-week cells with at least one application
(N = 1,428,768 for applications; 214,585 for callbacks). The preferred
specification is column 4 (job-ad fixed effects), which implies:

- R3: ban raised female applicant share in M jobs by $$\hat{\beta}^2 + \hat{\beta}^3 = 0.0348 + 0.0053 = 4.01$$ pp, from a preban base of 5.59% (Table 1, p. 1026).
- R4: ban raised male applicant share in F jobs by $$|{\hat{\beta}^1 + \hat{\beta}^3}| = |{-0.1393} + 0.0053| = 13.40$$ pp, from 10.06% (Table 1, p. 1026).
- R1: ban raised female callback share in M jobs by $$2.46 + 0.48 = 2.94$$ pp (61%), from 4.79% (Table 2 col 4, p. 1027).
- R2: ban raised male callback share in F jobs by $$10.39 - 0.48 = 9.91$$ pp (146%), from 6.78% (Table 2 col 4, p. 1027).

All four estimates are robust across five specifications (columns 1-5 of Tables
1 and 2) including quartic time trends, calendar-week fixed effects, and
job-ad fixed effects.

**Tables 4-6: application flows, match quality, and callback yield.**
Equation (2) identifies the ban's effect on application arrival rates using
the 30-day daily window (N = 3,514,552 application-day cells for Table 4
panel A). The ban raised total applications by 3.2 percent in aggregate,
concentrated in F and M jobs (R5, R6). All of the new applications to F
and M jobs were gender-mismatched (columns 3-4, Table 4): women exclusively
drove the increase to M jobs, and men drove the increase to F jobs, while
women reduced applications to their own F jobs (R7, coefficient -0.0160/day,
significant), consistent with greater female ambiguity aversion when an
explicit gender invitation is removed. Match quality rose slightly (R8,
Table 5), suggesting the new gender-mismatched applications were not low
quality. Callback rates per application were statistically indistinguishable
from zero in all sixteen specification-by-subsample cells in Table 6 (R9),
confirming that the ban did not increase matching frictions for workers.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| XMRC.com internal job-board records | Primary: 3,133,603 applications by 204,407 workers to 117,390 ads by 15,902 firms over September 2018 to August 2019, including job gender labels, application timestamps, callback indicators, match scores, and worker resume data | no page yet |

Sample scope: private-sector vacancies in the Xiamen metropolitan area (Fujian,
China), skewed toward skilled workers (mean education 13.3 years, mean
requested age 29.8). The mean posted wage was 5,793 RMB/month for M jobs and
4,433 RMB/month for F jobs, reflecting a raw gender wage gap of 23.5 percent
in posted wages.

## When to read the full paper

- Read if you study gender discrimination in labor markets, effects of equal-opportunity legislation, or job-ad content on application behavior.
- Read Section III (Tables 1 and 2, Figure 1) for the core integration result with gender-share regressions.
- Read Section IV (Table 3, Figures 3 and 4) to understand which job titles and workplaces integrated and which did not.
- Read Section V (Tables 4-6, Figure 5) for the mechanism evidence: application flows, match quality, and callback yield.
- Read the Discussion (Section VII, pp. 1045-1046) for the policy limits: asymmetry, low-wage concentration, and the untouched most-gendered titles.

## Attribution and rights

Kuhn, Peter, and Kailing Shen. 2023. "What Happens When Employers Can No Longer
Discriminate in Job Ads?" *American Economic Review* 113(4): 1013-1048.
https://doi.org/10.1257/aer.20211127

Replication data: Kuhn and Shen (2023), openICPSR, https://doi.org/10.3886/E183021V1.

Paywalled; all rights reserved by the American Economic Association. Extract-only.
This page is an LLM-distilled summary (paper-distiller, claude-sonnet-4-6,
2026-06-25); it is not human-verified and the results have not been reproduced.
