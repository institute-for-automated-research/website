---
title: "Second Chance: Di Maggio, Kalda & Yao (2026)"
description: >-
  Distilled: exploiting plausibly random private student debt discharge (National
  Collegiate paperwork loss), the paper finds debt relief reduces other debt
  balances and delinquency rates, and raises geographic and job mobility and
  income for defaulted borrowers. J. Finance 2026, CC BY 4.0. Eight core
  results with source locators, datasets used, and the theory tested.
sidebar:
  label: Di Maggio-Kalda-Yao 2026
  order: 1
tags: [paper-summary, household-finance, student-debt, debt-relief, consumer-credit, labor-markets, panel-regression, difference-in-differences, open-access, cc-by, peer-reviewed, unreplicated, data:equifax-credit, data:lexisnexis-court]
paper:
  authors: Marco Di Maggio, Ankit Kalda, Vincent Yao
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 507–550
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  doi: 10.1111/jofi.70002
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-14; corroborated by artifact p.507 Creative Commons Attribution License)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; tested 2026-05-31; CC-BY VOR licence confirmed in publisher DOI metadata despite access wrapper)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70002
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-14; license[1].content-version=tdm (Wiley TDM)'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 507–550); eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; one fix applied; R5 job-change significance corrected from *** to ** (Table VI col. 2 shows two stars at 5% level, not three).
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough to
know what it found without reading all 44 pages. To replicate or extend it,
read the full source at the
[original](https://doi.org/10.1111/jofi.70002).

## TL;DR

Using hand-collected court-filing data matched to Equifax credit bureau
records, the paper exploits a plausibly random debt discharge shock: National
Collegiate Student Loan Trusts lost paperwork for thousands of borrowers,
causing courts to dismiss collection lawsuits and discharge the debt. Treated
borrowers (debt discharged) are compared with similar defaulted borrowers
whose cases were not dismissed. Debt relief leads to lower balances and
delinquency rates on other accounts, higher geographic and job mobility, and
approximately $3,000 more income over three years. Both the treated group
(via debt relief) and the control group (via wage garnishment and collections)
contribute to these differential outcomes.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Debt relief **reduces student loan balances** by approximately $7,400 and credit scores improve by 6.8 points | Table II, p. 524 | SL balance: -$7,404.56\*\*\* (SE 340.5); credit score: +6.81\*\*\* (SE 1.23); N=1,283,639 |
| R2 | **Total non-student debt balances fall** by more than $4,500 for treated borrowers | Table III, p. 528 | -$4,600.88\*\*\* (SE 387.55); credit card -$618.76\*\*\*; mortgage -$1,564.60\*\*\*; auto loan not significant |
| R3 | Treated borrowers **deleverage actively**: credit card utilization falls, credit limits decline, new account opening falls, repayments rise | Table IV, p. 529 | Utilization -0.023\*\*\* (SE 0.007); credit limit -$971.82\*\*; new accounts -0.002\*\*\*; monthly payment +$13.57\*\* |
| R4 | **Delinquency rates on other accounts fall by 3 percentage points** (12% relative decline); bankruptcy and foreclosure also decline | Table V, p. 531 | Total delinquency -0.03\*\*\* (SE 0.003); bankruptcy -0.04\*\*\* pp; foreclosure -0.03\*\*\* pp; medical default -0.1\*\*\* pp |
| R5 | **Geographic mobility rises** 0.3 pp; **job change probability rises** 0.3 pp; **industry switching rises** 0.3 pp | Table VI, p. 532 | Mobility dummy +0.003\*\*\* (SE 0.001); job change +0.003\*\* (SE 0.001); new industry +0.003\* (SE 0.002) |
| R6 | **Monthly income rises by approximately $80** (1 pp higher income growth); cumulative gain over three years approximately $3,000 | Table VI, p. 532 | Income (level): +$79.98\*\*\* (SE 31.99); % change in income: +0.01\*\* (SE 0.004) |
| R7 | **Control group drives credit outcomes** via liquidity constraints (wage garnishment): estimates are larger when control group is more likely to be garnished | Table VII, p. 537 | Panel A (adjudicated controls): total balance -$5,099.56\*\*\* vs baseline -$4,600.88\*\*\*; delinquency -0.029\*\*\* |
| R8 | **Treated group drives labor outcomes** via debt overhang: fraction of variable pay rises +3.1 pp and hours worked rise by 1.20/week for treated borrowers post-discharge | Table VIII, p. 539 | Variable pay share: +0.031\*\*\* (SE 0.015) all jobs; +0.042\*\*\* (SE 0.018) no-job-change sample; hours: +1.20\*\* (SE 0.510) for hourly workers |

**Overall (paper's conclusion).** A $7,400 debt-relief shock translates into
a $4,600 reduction in non-student indebtedness, a $3,000 income gain over
three years, and a $4,700 decline in the amount of debt in delinquency.
Effects persist for at least two years and are not transitory.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| LexisNexis court filings (all U.S. civil courts, 2010–2017) | Hand-collected National Collegiate lawsuit data: borrower identity, court, filing date, outcome | no page yet |
| Equifax credit bureau (matched anonymized panel) | Monthly credit outcomes: balances, delinquency, credit score, account types for treatment/control borrowers | no page yet |
| Equifax employment and income verification (payroll data, 5,000+ U.S. firms) | Labor market outcomes: monthly gross earnings, hours, job type, tenure, employer | no page yet |

Sample: 9,878 treated borrowers; 6,388 control borrowers; 1,283,639 borrower-month observations in the credit data. Lawsuits cover 2010–2017.

## Theory tested

**No original structural model.** The paper is empirical. It tests
hypotheses common to debt-overhang and liquidity-constraint models (Melzer
2017; Dobbie and Song 2015; Herkenhoff, Phillips and Cohen-Cole 2021):
(i) debt relief relaxes credit constraints, reducing non-student balances;
(ii) debt relief reduces delinquency via improved financial condition and
spillover benefits to other creditors; (iii) debt relief raises labor
mobility and income by removing debt-overhang distortions to labor supply.

Identification: difference-in-differences (DiD) with individual fixed effects
and filing-year-by-calendar-year-month fixed effects. Treatment is the
plausibly random loss of paperwork by National Collegiate trusts, which
caused case dismissals uncorrelated with borrower characteristics. Standard
errors are clustered at the zip code level. Dynamic event-study
specifications (equation 2, quarterly dummies from -5 to +9 quarters) confirm
parallel pre-trends and persistent post-discharge effects. The paper also
estimates specifications using only treated borrowers (staggered timing as
source of variation) to address concerns about the control group.

## When to read the full paper

Use the [original DOI](https://doi.org/10.1111/jofi.70002) if you are:
replicating (code in Supporting Information); extending the design to other
debt types or populations; examining mechanism tests (wage composition,
above/below median debt relief, liquidity-constraint heterogeneity); or
auditing a specific coefficient. The locators above point you to the exact
table. For "what did this paper find," the table above is the intended
default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1). This distillation was
extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The CC BY 4.0 licence (confirmed via Crossref)
permits reproduction with attribution. No verbatim PDF is hosted in this
batch; the canonical source is the publisher DOI.

> **Attribution (CC BY 4.0).** Di Maggio, Marco, Ankit Kalda, and Vincent
> Yao. "Second Chance: Life with Less Student Debt." *The Journal of
> Finance* 81, no. 1 (February 2026): 507–550. DOI: 10.1111/jofi.70002.
> © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
