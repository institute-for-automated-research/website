---
title: "Who's Afraid of the Minimum Wage?: Rao & Risch (2026)"
description: >-
  Distilled: Using matched IRS administrative tax records for roughly 271,000
  independent U.S. businesses over 2010-2019 and a stacked difference-in-differences
  design on 19 policy changes across 17 states, Washington, DC, and Chicago, Rao and Risch find that firms in
  highly exposed industries do not lay off workers but modestly reduce part-time
  hiring, fully finance higher wage costs through revenue growth, and leave owner
  profits unchanged; firm entry falls roughly 2% and individual low earners gain
  earnings with stable employment rates. QJE 2026, CC BY 4.0. Twenty-three core results
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Labor market dynamics and wage inequality", "Entrepreneurship Studies and Influences", "Industrial Organization and Market Structure"]
  dataAccess: proprietary-confidential
  outcome:
    - number of employment relationships per firm
    - firm wage bill as share of baseline revenue
    - owner profits as share of baseline revenue
    - firm revenues as share of baseline revenue
    - firm entry and exit rates in highly exposed industries
    - number of active independent firms in highly exposed industries
    - value added per worker at independent firms
    - annual earnings of low-earning workers
    - worker earnings pre-trend coefficients
    - annual earnings of young workers (ages 15-26)
    - annual compensation by worker earnings category
    - individual employment probability
    - worker retention rates
    - employment composition by worker earnings
    - firm cost components as shares of baseline revenue
    - nonlabor input costs as a share of baseline revenue
    - productivity-quartile membership among entrants
    - cost-efficiency quartile membership among firms
    - wage-bill-to-revenue quartile membership among firms
    - aggregate and average firm income-statement outcomes
    - employment probability of young workers
    - worker employment by employer type
    - number of jobs held by employed teenagers
    - firm profits and input cost ratios by entry status
  outcomeClass: [firm-real-outcomes, labor-careers-health]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-10; corroborated by artifact p. 373 Creative Commons Attribution License notice and p. 427 footer)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF available via Oxford University Press (confirmed 2026-06-28)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 23
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, event-study]
    identification: natural-experiment
  contributionType: [new-data, new-fact, measurement]
  mechanisms: [market-power, entry-selection, labor-turnover-cost-savings]
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
    - { ref: R5, outcome: "number of active independent firms in highly exposed industries", metric: coefficient, value: "-1.97% total active firms at s+4; entry -5.5%; exit flat (increase >0.53% ruled out at 95%)", direction: negative }
    - { ref: R6, outcome: "value added per worker at independent firms", metric: coefficient, value: "0.0462 (s.e. = 0.0102) at s+4; 4.6% across all firms; entrants +15.5%; incumbents +3.1%", direction: positive }
    - { ref: R7, outcome: "annual earnings of low-earning workers", metric: level, value: "$1,473 increase (+18.9%) at s+4; own-wage employment elasticity -0.013 (s.e. = 0.036)", direction: positive }
    - { ref: R8, outcome: "annual earnings of young workers (ages 15-26)", metric: level, value: "$1,995 increase (+21.8%) at s+4; employment elasticity 0.064 (s.e. = 0.032); retention +1.30 pp for low earners", direction: positive }
    - { ref: R9, outcome: "composition of employment relationships by worker earnings", metric: probability, value: "Missing hires consist entirely of workers who would have earned <$3,900 annually; 67% would have earned <$1,000", direction: negative }
    - { ref: R10, outcome: "firm cost components as shares of baseline revenue", metric: coefficient, value: "Wage bill +0.0201 for restaurants and +0.0076 for other/retail firms; COGS +0.0131 overall, +0.0053 for restaurants, and +0.0210 for other/retail firms; other deductions +0.0035 overall, +0.0029 for restaurants, and +0.0039 for other/retail firms", direction: positive }
    - { ref: R11, outcome: "firm productivity distribution among entrants", metric: pp-effect, value: "Entrants are 4.11 pp more likely to rank in the high-productivity quartile (s.e. = 0.0128) and 5.81 pp less likely to rank in the low-productivity quartile (s.e. = 0.0176)", direction: mixed }
    - { ref: R12, outcome: "aggregate income-statement outcomes of independent firms", metric: coefficient, value: "Aggregate revenue +0.0263 (s.e. = 0.0294, ns), wage bill +0.0112* (s.e. = 0.0061), material costs +0.0133 (s.e. = 0.0168, ns), profits -0.0012 (s.e. = 0.0025, ns), and value added per worker +0.0805* (s.e. = 0.0467); * p < .10", direction: mixed }
    - { ref: R13, outcome: "average income-statement outcomes of active independent firms", metric: coefficient, value: "Average log effects: revenue +0.0432, wage bill +0.0767, material costs +0.0266, profits +0.0278, and value added per worker +0.0464", direction: positive }
    - { ref: R14, outcome: "number of employment relationships in unexposed industries", metric: coefficient, value: "-0.191 (s.e. = 0.152) at s+4; no differential employment effect", direction: none }
    - { ref: R15, outcome: "employment probability of young workers (ages 15-26)", metric: pp-effect, value: "+1.39 percentage points for the average baseline 15-26 year old", direction: positive }
    - { ref: R16, outcome: "employment of low-earning workers by employer type", metric: pp-effect, value: "Workers from exposed industries: -0.0126 at exposed independent businesses and +0.0173 at large C-corporations", direction: mixed }
    - { ref: R17, outcome: "number of jobs held by employed teenagers", metric: level, value: "0.045 fewer jobs at s+4 (s.e. = 0.015), from an average and median of 1.6 jobs", direction: negative }
    - { ref: R18, outcome: "cost-efficiency quartile membership among firms", metric: pp-effect, value: "Low material-cost quartile probability +0.0324 for entrants (s.e. = 0.0217), +0.0194 for incumbents (s.e. = 0.00569), and +0.0179 for all firms (s.e. = 0.00585); entrants are 0.0267 less likely to be in the high material-cost quartile (s.e. = 0.0124)", direction: mixed }
    - { ref: R19, outcome: "firm profits and input cost ratios by entry status", metric: coefficient, value: "Incumbents: profits/revenue -0.0064 (s.e. = 0.00251), wage bill/revenue +0.0091 (s.e. = 0.00163), material costs/revenue -0.0033 (s.e. = 0.00215); entrants' profits/revenue +0.0070 (s.e. = 0.0111)", direction: mixed }
    - { ref: R21, outcome: "wage-bill-to-revenue quartile membership among firms", metric: pp-effect, value: "Entrants: low quartile -0.0236 (s.e. = 0.00781), high quartile +0.0271 (s.e. = 0.00775); incumbents: high quartile +0.0310 (s.e. = 0.00502); all firms: high quartile +0.0237 (s.e. = 0.00434)", direction: mixed }
    - { ref: R22, outcome: "worker earnings pre-trend coefficients", metric: coefficient, value: "Pre-reform event-study coefficients are described as precise zeroes for s=-4 through s=-2", direction: none }
  resultType: confirms
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added fifteen Core results rows, thirteen quantitative findings, and their matching metadata, plus the missing main-text estimating specifications and equations. These additions are not human-verified and were not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 23 Core results, equations, specifications, classifications, findings, prose, and frontmatter against the PDF; corrected R5's metric, R12's significance and wording, R18's direction, equation denominator subscripts, relevant text locators, the reallocation claim, policy-count phrasing, and attribution date. Noted inconsistent young-worker age labels in the source. Locator and citation guards pass. Review pass (2026-10-04): Labeled the collapsed-count, quartile-transition, and aggregate equations as unnumbered reconstructions because the paper does not print them." }
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
minimum-wage policy changes across 17 states, Washington, DC, and Chicago
between 2013 and 2016, plus a stacked difference-in-differences design with 22
control states as clean comparators, they estimate how independent businesses accommodate higher wage
floors. Firms do not lay off existing workers but modestly reduce part-time
hiring, ending up with about 1.5 fewer employment relationships per year. They
fully finance the higher wage bills through revenue growth: four years out,
revenues rise 3.3% of baseline while profits are statistically indistinguishable
from zero change. Firm entry falls roughly 2%, with surviving entrants
positively selected for efficiency. At the individual level, low earners and
young workers gain substantially in earnings (+18.9% and +21.8%); employment is
essentially unchanged for low earners and modestly higher for young workers.
Minimum wages redistribute from consumers to workers; owners escape the burden.

## Core results

Magnitudes are as reported from the source PDF. Locators are in the form
Table/Figure, page number. Unless stated otherwise, post-policy estimates are
from the stacked difference-in-differences specification at event-year s+4
(four years after the initial minimum wage increase).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Firms reduce part-time hiring; no layoffs; employment falls ~2% | Figure II Panel A, p. 390; text p. 389 | 1.5 fewer employment relationships per firm per year; own-wage employment elasticity -0.245 (s.e. 0.134) |
| R2 | Wage bills rise sharply after the minimum wage increase | Figure III Panel A, p. 392; Table II, p. 397 | +0.0143 of baseline revenue (s.e. 0.00167); 1.43 cents per dollar baseline revenue |
| R3 | Revenues rise and fully cover the added labor costs | Figure IV, p. 395; Table II, p. 397 | +0.0331 of baseline revenue; 3.31 cents per dollar; consumers bear 100% of incidence |
| R4 | Owner profits are unchanged: incidence falls on consumers, not owners | Figure V, p. 396; text p. 394; Table II, p. 397 | 0.0002 (s.e. 0.0029); null result; rules out losses larger than 0.37% of baseline revenues at 95% confidence |
| R5 | Firm entry falls; total active firms decline ~2% | Figure VI, p. 401; text pp. 400, 402 | -1.97% total active firms; entry rate -5.5%; exit flat (increase >0.53% ruled out at 95%) |
| R6 | Value added per worker rises; stronger among entrants | Table III, p. 402 | +4.6% across all firms (coeff. 0.0462, s.e. 0.0102); entrants +15.5% (0.1550, s.e. 0.0473); incumbents +3.1% (0.0313, s.e. 0.0149) |
| R7 | Low-earning workers gain earnings with near-zero employment effect | Figure VII Panel A, p. 409; text pp. 376, 409-410; Online Appendix Figure I.11 | +$1,473 (+18.9%) at s+4; own-wage employment elasticity -0.013 (s.e. 0.036) |
| R8 | Young workers gain earnings with stable employment; retention rises | Figure VII Panel B, p. 409; Figure VIII, p. 413; Figure IX, p. 415; text pp. 410, 414; Online Appendix Figure I.11 | +$1,995 (+21.8%) for baseline ages 15-26 at s+4; employment elasticity 0.064 (s.e. 0.032); retention +1.30 pp for low earners |
| R9 | Reduced hiring is concentrated among very low-earning workers | Figure II Panels B-C, text p. 391 | Missing hires consist entirely of workers who would have earned less than $3,900 annually; 67% would have earned less than $1,000 |
| R10 | Costs rise across categories, with nonlabor cost increases differing by industry | Table II, p. 397; text pp. 397-398 | Wage bill: 0.0201 for restaurants, 0.0076 for other/retail; COGS: +0.0131 overall, +0.0053 for restaurants, +0.0210 for other/retail; other deductions: +0.0035 overall, +0.0029 for restaurants, +0.0039 for other/retail, all as shares of baseline revenue |
| R11 | Entrants are positively selected on productivity | Table IV, p. 403 | Entrants are 0.0411 more likely to rank in the high-productivity quartile (s.e. 0.0128) and 0.0581 less likely in the low-productivity quartile (s.e. 0.0176) |
| R12 | Aggregate point estimates are positive for revenue and value added; wage bills rise weakly significantly and profits are unchanged | Table V, p. 405 | Aggregates scaled by baseline revenue: revenue 0.0263 (s.e. 0.0294, ns), wage bill 0.0112* (s.e. 0.0061), material costs 0.0133 (s.e. 0.0168, ns), profits -0.0012 (s.e. 0.0025, ns), value added per worker 0.0805* (s.e. 0.0467); * p < .10 |
| R13 | Average outcomes among all active firms rise in the unbalanced panel | Table V, p. 405 | Average log effects: revenue 0.0432 (s.e. 0.0048), wage bill 0.0767 (s.e. 0.0054), material costs 0.0266 (s.e. 0.0059), profits 0.0278 (s.e. 0.0083), value added per worker 0.0464 (s.e. 0.0044) |
| R14 | Unexposed industries show no employment response in the placebo test | Online Appendix Figure H.8, reported text p. 399 | Employment relationships estimate -0.191 (s.e. 0.152) at s+4; no differential pre- or post-policy trends in other firm outcomes |
| R15 | Young workers become more likely to be employed | Figure VIII, p. 413; text p. 410 | Employment probability +1.39 percentage points for the average baseline 15-26 year old |
| R16 | Low-earning workers shift from independent firms to large C-corporations | Table VI Panel A, p. 411 | For workers initially in exposed industries, employment at exposed independent firms -0.0126 (s.e. 0.0055), at large C-corporations +0.0173 (s.e. 0.0065) |
| R17 | Employed teenagers hold fewer jobs after the increase | Text p. 419 | 0.045 fewer jobs at s+4 (s.e. 0.015), from an average and median of 1.6 jobs |
| R18 | Firms shift toward lower material costs relative to revenue | Table IV, p. 403; text p. 404 | Low material-cost quartile probability: entrants +0.0324 (s.e. 0.0217), incumbents +0.0194 (s.e. 0.00569), all firms +0.0179 (s.e. 0.00585); entrants are 0.0267 less likely to have high material costs (s.e. 0.0124) |
| R19 | Profit shares fall among incumbents while entrant profit shares are statistically unchanged | Table III, p. 402 | Incumbent profits/revenue -0.0064 (s.e. 0.00251); wage bill/revenue +0.0091 (s.e. 0.00163); material costs/revenue -0.0033 (s.e. 0.00215); entrant profits/revenue +0.0070 (s.e. 0.0111) |
| R20 | Compensation gains reach workers earning above the minimum-wage equivalent | Figure III Panel B, p. 392; text p. 393 | Annual compensation rises for workers earning $3,900-$35,000, with the largest gains among workers earning around a full-time minimum wage; no earnings reductions appear higher in the distribution |
| R21 | Entrants and incumbents shift toward higher wage-bill-to-revenue quartiles | Table IV, p. 403 | Entrants: low quartile -0.0236 (s.e. 0.00781), high quartile +0.0271 (s.e. 0.00775); incumbents: high quartile +0.0310 (s.e. 0.00502); all firms: high quartile +0.0237 (s.e. 0.00434) |
| R22 | Worker earnings show no differential pre-trend before minimum wage changes | Figure VII, p. 409; text p. 408 | Pre-reform earnings coefficients are described as precise zeroes for event years s=-4 through s=-2 |
| R23 | Worker outcomes remain similar around a 2010 placebo event | Online Appendix Figures I.13-I.14; text p. 414 | Earnings and employment paths in treatment and control states are described as very similar around the placebo event |

**Overall (paper's conclusion).** Independent businesses are more adaptable than
the conventional narrative about small-firm vulnerability to minimum wage hikes
suggests. They accommodate the cost shock through revenue growth, while lower
entry among less productive firms and positive selection among entrants reshape
the industry. This reduces the number of firms without evidence of higher exit.
The paper cannot separate price pass-through from demand reallocation or
quantify their relative contributions.
The worker-reallocation channel (from independent businesses to larger
C-corporations), analogous to what Dustmann et al. (2022) document for Germany,
helps explain why firm-level employment reductions do not translate into
individual-level unemployment; increased retention also contributes to this pattern.

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
Goodman-Bacon (2021)). Pre-trend analyses at s = -4 to s = -2 assess the
plausibility of parallel trends across the primary outcomes.

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
$$y_{jct} = z_{jct} / \text{revenue}_{jc,s-1}$$. For percent-change outcomes the
dependent variable is $$y_{jct} = z_{jct} / z_{jc,s-1}$$.
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

For the individual panel estimates in equation (2), standard errors are
clustered by state-by-cohort. The main samples are a 2% random sample of
low-earning individuals and a 2% random sample of people ages 15-26, with
individual-cohort and cohort-by-year fixed effects. Binary employment outcomes
use the LPM; earnings are measured annually, with log earnings used for the
own-wage elasticity calculation (pp. 387, 407-408).

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

For Figure II's employment-composition estimates, the authors use equation (1)
with outcomes for entrants, separations, and employment counts by worker age
and annual earnings. These regressions include firm-cohort and cohort-by-year
fixed effects and the baseline firm and market controls described above; they
are weighted by base-year firm employment, winsorize employment counts at the
99th percentile, and cluster standard errors by state-by-cohort (Figure II,
p. 390). The other balanced-panel firm specifications weight by log baseline
revenue and winsorize raw firm outcomes at 1% in each tail (Table II, p. 397).

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

The paper's sample description and Table I label the young-worker panel ages
16-26 (pp. 382, 387), while the Figure VII and VIII captions label their
baseline group ages 15-26 (pp. 409, 413). The age-specific estimates above
follow the figure captions; the PDF does not reconcile the difference.

Individual employment outcomes use an LPM. The main earnings estimates use
annual income levels; log annual earnings enter the own-wage elasticity
calculation, which divides the percent change in employment by the percent
change in earnings using the delta method.

**Reconstruction (not printed in the paper): collapsed firm-count specification
(Section IV.E; Figure VI, p. 401).** The authors describe collapsing firm records
to cells indexed by reform cohort, year, treatment status, industry, and market
characteristics, then estimating event-time changes in active-firm, entrant, and
exit counts:

$$
Y_{gct} = \alpha + \sum_{s=-4,\,s\neq -1}^{4} \left(\beta_s\,\text{treat}_{gc} + \Gamma_s X_{gc}\right) \times \text{year}_{s=t} + \delta_{ct} + \nu_{gct}
$$

Here $$Y_{gct}$$ is the number of active firms, entrants, or exits in cell $$g$$;
$$X_{gc}$$ includes baseline two-digit industry, county-density quintile,
county-employment-rate quintile, and commuting-zone pre-period firm-churn
controls, each interacted flexibly with year. The specification has cohort-by-
year fixed effects; it is weighted by the base-year firm count in each cell, and
standard errors are clustered by state-by-cohort. The sample is the collapsed
firm-count data from highly exposed industries in treatment and control states.

**Reconstruction (not printed in the paper): quartile-transition specification
(Table IV, p. 403).** For each baseline measure $$k$$ and quartile $$q$$, the
outcome is an indicator that firm $$j$$ belongs to that quartile at event time
$$s+4$$. This expresses the paper's stated use of equation (1)'s event-time
design and controls:

$$
\mathbb{1}\{Q_{jct}^{k}=q\} = \alpha + \sum_{s=-4,\,s\neq -1}^{4} \left(\beta_s\,\text{treat}_{jc} + \Gamma_s X_{jc}\right) \times \text{year}_{s=t} + \delta_{ct} + \psi_{jc} + \nu_{jct}
$$

The fixed effects are firm-cohort and cohort-by-year. Controls are baseline
industry, county-density quintile, and county-employment-rate quintile,
flexibly interacted with year. The unbalanced panel has about 271,307 active
firms per year; standard errors are clustered by state-by-cohort. Table IV does
not state a regression weight.

**Reconstruction (not printed in the paper): aggregate specification (Table V,
p. 405).** For the aggregate row, state-by-industry totals of each
income-statement item are scaled by baseline total revenue and estimated over
event time:

$$
Y_{gct}^{\text{agg}} = \alpha + \sum_{s=-4,\,s\neq -1}^{4} \beta_s\,\text{treat}_{gc}\times\text{year}_{s=t} + \delta_{ct} + \nu_{gct}
$$

The observations are state-by-industry totals; regressions are weighted by
baseline total revenue and standard errors are clustered by state-by-cohort.
The table note identifies cohort-by-year fixed effects for the average-log
specification below, but does not enumerate additional fixed effects for the
aggregate regression. For the unbalanced firm-panel row, the specification is
the firm-level event-study equation (1), with cohort-by-year fixed effects and
two-digit industry, county-density-quintile, and county-employment-rate-quintile
controls flexibly interacted with year. It uses about 271,307 active firms per
year, clusters standard errors by state-by-cohort, and estimates average log
impacts. The aggregate row is suggestive because its state-level cells provide
relatively few observations.

**Worker-transition and teenage repeated-cross-section specifications (Table VI,
pp. 411-412).** For the low-earning worker panel, equation (2) is estimated as
an LPM for indicators of employment in each industry and employer type at
$$s+4$$. The specification includes individual-cohort and cohort-by-year fixed
effects, age and age-squared, and county-density and county-employment-rate
quintiles flexibly interacted with year. It clusters standard errors by
state-by-cohort; panel-row regression samples range from 842,201 to 1,485,775
observations. The repeated cross-section of teenagers uses the same controls
and cohort-by-year effects, without individual fixed effects; its two row
samples are 5,338,697 and 2,370,428 observations. These estimates compare
employment outcomes from $$s-1$$ to $$s+4$$. Figure IX's retention regression
uses the low-earning panel, an LPM, individual-cohort and cohort-by-year fixed
effects, the same age and market controls, and state-by-cohort clustered
standard errors (Figure IX, p. 415).

As an identification check, the worker earnings event-study coefficients for
the pre-reform years $$s=-4$$ through $$s=-2$$ are described as precise zeroes
(Figure VII, p. 409; text p. 408). A separate placebo exercise assigns a 2010
minimum-wage event, at least three years before the first actual increase; the
paper reports very similar earnings and employment paths between treatment and
control states in that exercise (Online Appendix Figures I.13-I.14; text p. 414).

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
This distillation was extracted by an LLM on 2026-10-04 and is
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
