---
title: "Who's Afraid of the Minimum Wage?: Rao & Risch (2026)"
description: >-
  Distilled: Using matched IRS administrative tax records for roughly 271,000
  independent U.S. businesses over 2010-2019 and a stacked difference-in-differences
  design on 19 state minimum wage changes, Rao and Risch find that firms in
  highly exposed industries do not lay off workers but modestly reduce part-time
  hiring, fully finance higher wage costs through revenue growth, and leave owner
  profits unchanged; firm entry falls roughly 2% and individual low earners gain
  earnings with stable employment rates. QJE 2026, CC BY 4.0. Eight core results
  with source locators, datasets, and the estimating equations.
sidebar:
  label: Rao & Risch 2026
  order: 1
tags: [paper-summary, minimum-wage, labor-markets, small-business, firm-dynamics,
       difference-in-differences, panel-regression, open-access, cc-by, peer-reviewed,
       unreplicated, data:irs-tax-records, data:cps]
paper:
  authors: Nirupama L. Rao and Max Risch
  authorList:
    - { family: Rao, given: Nirupama L., orcid: 0000-0001-7234-1152, affiliation: Ross School of Business, University of Michigan }
    - { family: Risch, given: Max, affiliation: Tepper School of Business, Carnegie Mellon University }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 373-427
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf053
  jel:
    codes: [J23, J31, J38, L13, L11]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Labor market dynamics and wage inequality", "Firm Innovation and Growth", "Digital Economy and Work Transformation"]
  dataAccess: proprietary-confidential
  outcome:
    - number of employment relationships per firm
    - owner profits as share of baseline revenue
    - firm revenues as share of baseline revenue
    - firm entry and exit rates in highly exposed industries
    - value added per worker at independent firms
    - annual earnings of low-earning workers
    - annual earnings of young workers (ages 15-26)
    - individual employment probability
    - worker retention rates
  outcomeClass: [firm-real-outcomes, labor-careers-health]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-10; corroborated by artifact p. 373 Creative Commons Attribution License notice and p. 427 footer)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF available via Oxford University Press (confirmed 2026-06-28)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 8
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, event-study]
    identification: natural-experiment
  contributionType: [new-data, new-fact, measurement]
  mechanisms: [market-power]
  introducesData: true
  scope:
    region: US
    assetClass: "US independent businesses (pass-through firms: S-corps, LLCs, partnerships)"
    period: 2010..2019
    frequency: annual
    dataType: [administrative, survey]
    granularity: [firm, individual]
    n: "~134,974 firms (balanced panel) / ~271,000 firms per year (full unbalanced panel); individual panels: 2% random samples of low-earning and young workers"
  findings:
    - { ref: R1, outcome: "number of employment relationships per firm", metric: coefficient, value: "1.5 fewer per year at s+4 (2% decline); own-wage employment elasticity -0.245 (s.e. = 0.134)", direction: negative }
    - { ref: R2, outcome: "firm wage bill as share of baseline revenue", metric: coefficient, value: "0.0143 (s.e. = 0.00167) at s+4; 1.43 cents per dollar baseline revenue", direction: positive }
    - { ref: R3, outcome: "firm revenue as share of baseline revenue", metric: coefficient, value: "0.0331 at s+4; 3.31 cents per dollar baseline revenue; consumers bear 100% of incidence (Table II)", direction: positive }
    - { ref: R4, outcome: "owner profits as share of baseline revenue", metric: coefficient, value: "0.0002 (s.e. = 0.0029) at s+4; null; rules out profit losses >0.37% of baseline revenues at 95% confidence", direction: none }
    - { ref: R5, outcome: "number of active independent firms in highly exposed industries", metric: pp-effect, value: "-1.97% total active firms at s+4; entry -5.5%; exit flat (increase >0.53% ruled out at 95%)", direction: negative }
    - { ref: R6, outcome: "value added per worker at independent firms", metric: coefficient, value: "0.0462 (s.e. = 0.0102) at s+4; 4.6% across all firms; entrants +15.5%; incumbents +3.1%", direction: positive }
    - { ref: R7, outcome: "annual earnings of low-earning workers", metric: level, value: "$1,473 increase (+18.9%) at s+4; own-wage employment elasticity -0.013 (s.e. = 0.036)", direction: positive }
    - { ref: R8, outcome: "annual earnings of young workers (ages 15-26)", metric: level, value: "$1,995 increase (+21.8%) at s+4; employment elasticity 0.064 (s.e. = 0.032); retention +1.30 pp for low earners", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Card and Krueger (1995)", relation: extends, note: "extends prior employment-effect evidence to the independent-business margin; confirms small employment effects using a matched panel" }
    - { cite: "Cengiz et al. (2019)", doi: '10.1093/qje/qjz014', relation: builds-on, note: "builds on aggregate employment-effect estimates; traces the independent-firm mechanism behind the aggregate null" }
    - { cite: "Harasztosi and Lindner (2019)", doi: '10.1257/aer.20171445', relation: extends, note: "extends who-pays evidence to independent U.S. businesses using matched tax data; confirms full consumer incidence" }
    - { cite: "Dustmann et al. (2022)", relation: extends, note: "extends reallocation findings to the U.S. context; documents worker transitions from independent businesses to C-corporations" }
  openQuestions:
    - Longer-run effects may differ if new entrants eventually adopt production methods relying less on low-wage labor, or if incumbents reconfigure their inputs away from workers most affected by these policies (p. 423).
    - Firms may respond along margins not estimated here, such as reducing workplace amenities or deferring equipment maintenance (p. 423).
  replicationCode:
    url: "https://doi.org/10.7910/DVN/3ZXSCE"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full PDF read (pp. 373-427); eight results extracted with source locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 rows pass; both equations match PDF term-by-term; JEL codes L13 and L11 added (missing from prior extraction, confirmed p. 374)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf053", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-10" }
---

**What this is.** The paper's core results, the identification strategy, and the estimating
equations: enough to know what it found and how, without reading all 55 pages. To
replicate or extend it, read the full source at the
[original](https://doi.org/10.1093/qje/qjaf053).

## TL;DR

Rao and Risch construct the first matched firm-worker-owner panel from the
universe of U.S. pass-through tax returns, covering roughly 271,000 independent
businesses in highly minimum-wage-exposed industries over 2010-2019. Using 19
state minimum wage increases between 2013 and 2016 as quasi-natural experiments
and a stacked difference-in-differences design with 22 control states as clean
comparators, they estimate how independent businesses accommodate higher wage
floors. Firms do not lay off existing workers but modestly reduce part-time
hiring, ending up with about 1.5 fewer employment relationships per year. They
fully finance the higher wage bills through revenue growth: four years out,
revenues rise 3.3% of baseline while profits are statistically indistinguishable
from zero change. Firm entry falls roughly 2%, with surviving entrants
positively selected for efficiency. At the individual level, low earners and
young workers gain substantially in earnings (+18.9% and +21.8%) with
essentially unchanged employment rates. Minimum wages redistribute from
consumers to workers; owners escape the burden.

## Core results

Magnitudes are as reported from the source PDF. Locators are in the form
Table/Figure, page number. All coefficients are from the stacked
difference-in-differences specification at event-year s+4 (four years after
the initial minimum wage increase).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Firms reduce part-time hiring; no layoffs; employment falls ~2% | Figure II Panel A, p. 390 | 1.5 fewer employment relationships per firm per year; own-wage employment elasticity -0.245 (s.e. 0.134) |
| R2 | Wage bills rise sharply after the minimum wage increase | Figure III Panel A, p. 392; Table II, p. 397 | +0.0143 of baseline revenue (s.e. 0.00167); 1.43 cents per dollar baseline revenue |
| R3 | Revenues rise and fully cover the added labor costs | Figure IV, p. 395; Table II, p. 397 | +0.0331 of baseline revenue; 3.31 cents per dollar; consumers bear 100% of incidence |
| R4 | Owner profits are unchanged: incidence falls on consumers, not owners | Figure V, p. 396; Table II, p. 397 | 0.0002 (s.e. 0.0029); null result; rules out losses larger than 0.37% of baseline revenues at 95% confidence |
| R5 | Firm entry falls; total active firms decline ~2% | Figure VI, p. 401 | -1.97% total active firms; entry rate -5.5%; exit flat (increase >0.53% ruled out at 95%) |
| R6 | Value added per worker rises; stronger among entrants | Table III, p. 402 | +4.6% across all firms (coeff. 0.0462, s.e. 0.0102); entrants +15.5% (0.1550, s.e. 0.0473); incumbents +3.1% (0.0313, s.e. 0.0149) |
| R7 | Low-earning workers gain earnings with near-zero employment effect | Figure VII Panel A, p. 409; Table VI Panel A, p. 411 | +$1,473 (+18.9%) at s+4; own-wage employment elasticity -0.013 (s.e. 0.036) |
| R8 | Young workers gain earnings with stable employment; retention rises | Figure VII Panel B, p. 409; Figure VIII, p. 413; Figure IX, p. 415 | +$1,995 (+21.8%) for ages 15-26 at s+4; employment elasticity 0.064 (s.e. 0.032); retention +1.30 pp for low earners |

**Overall (paper's conclusion).** Independent businesses are more adaptable than
the conventional narrative about small-firm vulnerability to minimum wage hikes
suggests. They absorb the cost shock by passing it through to consumers via
revenue growth and by shedding the least productive firms from the industry,
leaving owners whole and workers better off. The worker-reallocation channel
(from independent businesses to larger C-corporations), analogous to what
Dustmann et al. (2022) document for Germany, explains why firm-level employment
reductions do not translate into individual-level unemployment.

## Theory / model

The paper presents no formal model in the main text. A Cournot competition
model with heterogeneous production technologies appears in Online Appendix O,
following Besley (1989). The conceptual framework generates five empirical
predictions that structure the analysis.

The paper connects to the long-standing empirical debate on minimum wage
employment effects, complementing Card and Krueger (1995) and extending the
who-pays analysis of Harasztosi and Lindner (2019) to independent U.S.
businesses using matched tax data.

Under imperfect product market competition with fixed costs, a minimum wage acts
as a differential labor cost shock: firms relying more heavily on low-wage labor
face larger per-unit cost increases. The key predictions are:

1. **Employment.** Incumbent firms facing modest cost shocks need not reduce
   employment if they can pass costs forward. Employment reductions should be
   concentrated in part-time and low-earning positions.

2. **Revenue pass-through.** Under Cournot, market shares are proportional to
   margins. An industry-wide cost shock is easier to pass through than a
   unilateral price increase because the elasticity facing firms is the industry
   demand elasticity, not the firm demand elasticity. Revenue should rise to
   offset wage bill increases.

3. **Profits.** If revenue pass-through is complete, owner profits should be
   unchanged. Consumers bear the entire burden.

4. **Entry deterrence.** Higher fixed operating costs (relative to benefits)
   deter entry of firms that cannot cover the wage premium. The minimum wage
   raises the viability threshold, reducing entrant counts.

5. **Positive selection.** Firms that enter despite higher costs are more
   productive and efficient than the marginal entrants under the pre-reform
   wage floor, generating a positive shift in the productivity distribution
   of the industry.

**Identification.** The paper relies on state-level variation in minimum wage
policy. Treatment states are the 17 states, Washington DC, and the city of
Chicago that raised their minimum wages between 2013 and 2016. Control states
are 22 states that enacted no minimum wage increase between 2011 and 2019,
providing a set of clean controls (p. 385). The stacked design compares treated
firms in each reform cohort to all control firms over event time, avoiding the
negative-weight problem in staggered difference-in-differences that arises when
previously treated units serve as controls (Callaway and Sant'Anna (2021);
Goodman-Bacon (2021)). Pre-trend validation at s = -4 to s = -2 confirms
parallel trends across all primary outcomes.

## Method

The paper applies a panel stacked difference-in-differences design introduced
in Cengiz et al. (2019) and extended here to a firm-level setting. It builds
on `difference-in-differences`, `panel-regression`, and `event-study` estimators.

**Firm-level estimating equation (equation 1, p. 385).** For firm j in year t
belonging to reform cohort c:

$$
y_{jct} = \alpha + \sum_{s=-4,\, s \neq -1}^{4} \left(\beta_s \,\text{treat}_{jc} + \Gamma_s X_{jc}\right) \times \text{year}_{s=t} + \delta_{ct} + \psi_{jc} + \nu_{jct} \tag{1}
$$

where $$\text{treat}_{jc}$$ is an indicator for firm j being in a treatment state
in cohort c; $$X_{jc}$$ is a vector of baseline firm and market controls (size
categories, value-added deciles, two-digit industry, county density quintiles,
county employment-rate quintiles); $$\delta_{ct}$$ is a cohort-by-year fixed
effect; $$\psi_{jc}$$ is a firm-cohort fixed effect; and $$s = -1$$ (year before
the minimum wage increase) is the omitted base year. The DD estimator
$$\beta_s$$ represents the differential average outcome between firms in treated
and untreated states relative to the pre-reform base year. Standard errors are
clustered at the state-by-cohort level.

For outcomes scaled by baseline revenue the dependent variable is
$$y_{jct} = z_{jct} / \text{revenue}_{j,s-1}$$. For percent-change outcomes the
dependent variable is $$y_{jct} = z_{jct} / z_{j,s-1}$$.
Regressions are weighted by log baseline revenues.

**Individual-level estimating equation (equation 2, p. 387).** For individual i
in year t belonging to cohort c:

$$
y_{ict} = \alpha + \sum_{s=-4,\, s \neq -1}^{4} \left(\beta_s \,\text{treat}_{ic} + \Gamma_s V_{ic}\right) \times \text{year}_{s=t} + \delta_{ct} + \rho_{ic} + \nu_{ict} \tag{2}
$$

where $$V_{ic}$$ are individual controls (age, age squared, county density
quintiles, county employment-rate quintiles); $$\rho_{ic}$$ is an
individual-cohort fixed effect (replacing the firm fixed effect). For binary
employment outcomes the specification is a linear probability model (LPM),
with coefficients interpreted as percentage-point changes for the treatment
group relative to the control group.

## Empirical specifications

All headline estimates are at event-year s+4 (four years after the initial
minimum wage increase). The full event-study path (s = -4 to s = 4, omitting
s = -1) is shown in the figures.

**Firm-level analyses (Section IV).** The primary sample is a balanced panel of
134,974 independent businesses in highly exposed industries in treatment and
control states, measured in the base year. "Highly exposed" industries are
four-digit NAICS industries where at least 1% of workers are paid less than the
prevailing minimum wage, identified using CPS Monthly Outgoing Rotation Group
data (CPS MORGs) for the pre-reform period. Restaurants alone account for 42%
of minimum wage workers; together the selected industries cover more than
two-thirds of minimum wage workers (pp. 382-383).

The main firm-level outcomes are:
- Wage bill / baseline revenue (Figure III; Table II)
- Revenues / baseline revenue (Figure IV; Table II)
- Owner profits / baseline revenue (Figure V; Table II)
- Number of employment relationships (Figure II; Section IV.A)
- Value added per worker (Table III)

The COGS and other-deductions items complete the income statement decomposition
in Table II, which traces the incidence of each cost dollar:

| Component | All exposed | Restaurants | Other/retail |
|---|---|---|---|
| Wage bill | 0.0143 | 0.0201 | 0.0076 |
| Revenue (financing) | 0.0331 | 0.0294 | 0.0359 |
| COGS (nonlabor costs) | 0.0131 | 0.0053 | 0.0210 |
| Other deductions | 0.0035 | 0.0029 | 0.0039 |
| Owner profits | 0.0002 | -0.0001 | 0.0003 |

Table II coefficients are scaled by baseline revenue at s-1; the three asterisk
significance levels (p < .01, .05, .10) from the paper are omitted here; revenue
and wage bill are significant at 1% for all-exposed and restaurants.

**Extensive-margin analysis.** The collapsed dataset aggregating firm counts by
cohort, year, treatment status, and industry is used for entry, exit, and total
active firm regressions (Section IV.E). Regressions are weighted by base-year
firm counts and scaled by pre-reform firm counts.

**Individual-level analyses (Section V).** Two panels constructed from IRS
administrative data:
- Low-earning workers: 2% random sample of individuals earning less than $20k
  in any industry in the year before the minimum wage increase (s-1) who were
  also earning less than $25k or not working in s-2.
- Young workers: 2% random sample of individuals ages 15-26 in the year before
  the minimum wage increase, regardless of employment status.

Individual employment outcomes use an LPM; earnings outcomes use the log of
annual individual income estimated via equation (2) with individual-cohort fixed
effects. Own-wage employment elasticities are estimated as the percent change in
employment divided by the percent change in average annual earnings, calculated
using the delta method.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| IRS administrative tax records (linked firm-worker-owner panel) | Business income tax returns (revenues, COGS, deductions, profits) + Form W-2 wage data linked to owners and workers; universe of U.S. pass-through firms 2010-2019 | No page yet |
| CPS Monthly Outgoing Rotation Groups (CPS MORGs) | Identifies highly exposed industries by share of hourly workers paid below the prevailing minimum wage, pre-reform | No page yet |

Sample: approximately 134,974 firms in highly exposed industries (balanced panel)
or 271,000 firms per year (full unbalanced panel); 2% random samples of
low-earning and young workers. Period: 2010-2019. Frequency: annual.

## When to read the full paper

Read the [original](https://doi.org/10.1093/qje/qjaf053) if you are:
designing or evaluating minimum wage policy for a setting that covers
independent businesses; extending the incidence decomposition to other
cost shocks (payroll taxes, mandated benefits); studying how the IRS
linked firm-worker-owner panel (detailed in Online Appendix L) was
constructed; or exploring the productivity selection mechanism in the
Cournot model of Online Appendix O. The locators above point to exact
tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026.
This distillation was extracted by an LLM on 2026-06-28 and is
**not human-verified or independently reproduced**. The CC BY 4.0 licence
permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Rao, Nirupama L., and Max Risch.
> "Who's Afraid of the Minimum Wage? Measuring the Impacts on Independent
> Businesses Using Matched U.S. Tax Returns."
> *The Quarterly Journal of Economics* 141, no. 1 (2026): 373-427.
> DOI: 10.1093/qje/qjaf053. (c) The Author(s) 2025.
> Published by Oxford University Press on behalf of President and Fellows
> of Harvard College.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
