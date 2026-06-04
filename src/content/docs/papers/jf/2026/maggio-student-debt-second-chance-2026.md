---
title: "Second Chance: Di Maggio, Kalda & Yao (2026)"
description: >-
  Distilled: exploiting plausibly random private student debt discharge (National
  Collegiate paperwork loss), the paper finds debt relief reduces other debt
  balances and delinquency rates, and raises geographic and job mobility and
  income for defaulted borrowers. J. Finance 2026, CC BY 4.0. Eight core
  results with source locators, datasets used, the identification strategy, and
  the estimating specifications with equations.
sidebar:
  label: Di Maggio-Kalda-Yao 2026
  order: 1
tags: [paper-summary, household-finance, student-debt, debt-relief, consumer-credit, labor-markets, panel-regression, difference-in-differences, open-access, cc-by, peer-reviewed, unreplicated, data:equifax-credit, data:lexisnexis-court]
paper:
  authors: Marco Di Maggio, Ankit Kalda, Vincent Yao
  authorList:
    - { family: Di Maggio, given: Marco, affiliation: Imperial College Business School, London and NBER }
    - { family: Kalda, given: Ankit, affiliation: Kelley School of Business, Indiana University }
    - { family: Yao, given: Vincent, affiliation: J. Mack Robinson College of Business, Georgia State University }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 507–550
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  citedByCount: 0
  topics: ['Financial Literacy, Pension, Retirement Analysis', 'Higher Education Research Studies']
  dataAccess: proprietary-confidential
  outcome:
    - non-student debt balances and delinquency rates
    - geographic and job mobility
    - borrower income
  doi: 10.1111/jofi.70002
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-14; corroborated by artifact p.507 Creative Commons Attribution License)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; tested 2026-05-31; CC-BY VOR licence confirmed in publisher DOI metadata despite access wrapper)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study, panel-regression]
    identification: natural-experiment
  contributionType: [new-data, new-fact]
  mechanisms: [financial-constraint, debt-overhang]
  introducesData: true

  scope:
    region: US
    assetClass: consumer loans (private student debt, credit cards, mortgages, auto)
    period: 2010-01..2017-12
    frequency: monthly
    dataType: [administrative]
    granularity: [individual]
    n: "1,283,639 borrower-months (9,878 treated; 6,388 control borrowers)"

  relatesTo:
    - { cite: 'Dobbie & Song (2015)', doi: 10.1257/aer.20130612, relation: builds-on, note: 'benchmark for debt-relief effects on credit and labor outcomes via chapter 13 bankruptcy; this paper examines private student debt discharge outside bankruptcy' }
    - { cite: 'Dobbie & Song (2020)', doi: 10.1257/aer.20171541, relation: builds-on, note: 'targeted credit-card debt relief experiment; this paper finds faster and broader effects for student debt discharge' }
    - { cite: 'Melzer (2017)', doi: '10.1111/jofi.12482', relation: tests, note: 'debt overhang reducing homeowner investment; here the same mechanism is tested for student-debt borrowers in the labor market' }
    - { cite: 'Herkenhoff, Phillips & Cohen-Cole (2021)', doi: '10.1016/j.jfineco.2021.03.004', relation: tests, note: 'credit access improving self-employment; this paper tests whether student debt discharge relaxes credit constraints' }

  openQuestions:
    - 'Whether results generalize to blanket student loan forgiveness programs, where borrowers are not necessarily in default and relief is not unexpected; the paper explicitly notes its findings likely do not speak to blanket forgiveness (p. 513).'
    - 'The moral hazard costs of debt relief in the student loan market cannot be estimated in this setting, as National Collegiate paperwork loss is plausibly random and not driven by borrower anticipation (p. 548).'
    - 'Whether the effects operate through hidden income or informal income substitution, which cannot be directly tested because informal income is unobserved (p. 543-544).'

  replicationCode:
    status: available

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
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: 'Augment pass. Added methods, scope, relatesTo, openQuestions, replicationCode, proposedVocab frontmatter blocks, and three formal body sections (Theory / model, Method, Empirical specifications) with equations transcribed from pp. 517-519 of the source PDF read this session (budget constraint eq., baseline DiD eq. 1, dynamic event-study eq. 2). Core results table is unchanged from the verified version above. The new formal sections are extracted, not yet re-verified by paper-verifier.'
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: 'All 8 core-result locators and magnitudes re-checked against PDF tables (II–VIII, pp. 524–539); all correct. Budget constraint (p. 517) and eq. 1–2 (pp. 518–519) verified term-by-term: subscripts, signs, summation indices, and FE structure match. Formal sections (Theory/model, Method, Empirical specifications) checked against PDF: all accurate. No em-dashes, no colorful adjectives. No fixes required.'
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-03
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-03
      role: verified
      note: >-
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF; all
        axes confirmed correct - natural-experiment from National Collegiate
        paperwork-loss quasi-experiment (pp. 508-509, 516), new-data and
        new-fact contributions both supported, financial-constraint and
        debt-overhang mechanisms match PDF sections A.1 and A.2 (pp. 534-539),
        introducesData=true confirmed by hand-collected LexisNexis dataset
        (p. 508), scope fields match Table I and Table II sample counts; no
        fixes required.
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

The paper builds on Dobbie and Song (2015), a benchmark for debt-relief
effects on credit and labor outcomes via chapter 13 bankruptcy, but examines
private student debt discharge outside bankruptcy. It also builds on Dobbie
and Song (2020), a targeted credit-card debt relief experiment, and finds
faster and broader effects for student debt discharge.

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

## Theory / model

The paper has no structural model; it is a reduced-form causal study. It
tests three hypotheses derived from debt-overhang and liquidity-constraint
models (pp. 519-521):

- **Hypothesis 1** (p. 520): Student debt discharge leads to a relative
  decline in other debt balances. Mechanism: discharge removes a delinquent
  account from the credit report, relaxes credit constraints, and protects
  future wages from garnishment, reducing the incentive to borrow further.
  Building on Herkenhoff, Phillips, and Cohen-Cole (2021), who show credit
  access improving self-employment, the paper tests whether student debt
  discharge relaxes credit constraints.
- **Hypothesis 2** (p. 520): Student debt discharge leads to a relative
  decline in the likelihood of default and experiencing distress. Mechanism:
  improved financial condition reduces delinquency on all accounts and
  provides positive spillovers to other creditors.
- **Hypothesis 3** (p. 521): Student debt discharge leads to a relative
  increase in mobility and income. Mechanism: debt overhang (analogous to
  the corporate finance problem) and liquidity constraints distort labor
  supply decisions; discharge removes these frictions. Melzer (2017) documents
  debt overhang reducing homeowner investment; here the same mechanism is
  tested for student-debt borrowers in the labor market.

The paper formalizes the borrower's budget constraint (p. 517) to clarify
what is and is not observable:

$$
c_{i,t} = (1 - s^u_{i,t}) \cdot \gamma_{i,t-1}
         + (1 - G_i(t_d))(1 - s_{i,t})(Y^o_{i,t} + Y^h_{i,t} + Y^f_{i,t})
         - \sum_{l=1}^{A} (1 + r_{i,l}) \cdot b_{i,t,l}
$$

where $$c_{i,t}$$ is consumption of individual $$i$$ in period $$t$$;
$$\gamma_{i,t-1}$$ is wealth at $$t-1$$; $$G_i(t_d)$$ is a piecewise garnishment
function equal to rate $$g$$ if $$i$$ is in the control group after default date
$$t_d$$, zero otherwise; $$Y^o_{i,t}$$ is observed wage income; $$Y^h_{i,t}$$ is
hidden wage income; $$Y^f_{i,t}$$ is financial income; $$s^u_{i,t}$$ is the
savings rate out of assets; $$s_{i,t}$$ is the savings rate out of income;
$$r_{i,l}$$ and $$b_{i,t,l}$$ are interest rates and balances for loans of type
$$l$$ (p. 517-518). The paper explicitly notes it cannot observe consumption,
savings, or hidden income, which limits the set of testable predictions.

**Identification.** The source of variation is the plausibly random loss of
paperwork by National Collegiate Student Loan Trusts. Courts dismissed
collection lawsuits against borrowers whose chain of title could not be
proved. This documentation loss is argued to be orthogonal to borrower
characteristics (p. 516): the same trust held loans it could and could not
prove, and the distinction was driven by clerical errors, not by borrower
type. The paper verifies balance on pre-treatment observables and the absence
of pre-trends across all outcomes (Figure 2, pp. 525-527).

## Method

The empirical strategy uses a difference-in-differences (DiD) estimator
building on `difference-in-differences` and `panel-fe`.

**Treatment and control groups.** Treated borrowers are those whose
National Collegiate cases were dismissed and debt discharged. Control
borrowers were sued by the same trusts but their debt was not discharged
during the sample period (either the trust did not lose the paperwork or
the case was not adjudicated by end of sample). Both groups defaulted on
loans owned by the same trust and were subject to collection by the same
agency, making the groups likely to be similar on unobservables (p. 518).

**Standard-error treatment.** Standard errors are clustered at the zip code
level throughout, allowing within-neighborhood error correlation across
borrowers (p. 519). Robustness checks use individual-level clustering and
double clustering by zip code and calendar month (Internet Appendix Table
IA.I).

**Treated-only robustness.** To address concerns that the control group
is confounded by wage garnishment, the paper re-estimates the main
specifications using only treated borrowers, exploiting the staggered
timing of discharges as the source of variation (Table IX, p. 541).
Results are qualitatively similar and economically meaningful, supporting
the validity of the treated group's contribution.

## Empirical specifications

**Baseline DiD (equation 1, p. 518).** The main estimating equation is:

$$
\text{Outcome}_{i,j,t} = \alpha + \beta \cdot (\text{DebtRelief}_i \times \text{Post}_t)
                + \mu_i + \gamma_{j \times t} + \epsilon_{i,j,t}
\tag{1}
$$

- $$\text{Outcome}_{i,j,t}$$ is the outcome variable for borrower $$i$$, filing year $$j$$, calendar year-month $$t$$.
- $$\text{DebtRelief}_i$$ = 1 for treated borrowers (debt discharged), 0 for control.
- $$\text{Post}_t$$ = 1 after debt discharge and 0 before.
- $$\mu_i$$ are individual fixed effects.
- $$\gamma_{j \times t}$$ are filing-year by calendar-year-month fixed effects (ensuring treated and control borrowers are compared within the same filing-year cohort and calendar time).
- $$\epsilon_{i,j,t}$$ is the error term.
- Standard errors clustered at zip code level. N = 1,283,639 borrower-month observations (credit data).

**Dynamic event-study (equation 2, p. 519).** To assess pre-trends and
persistence:

$$
\text{Outcome}_{i,j,t} = \alpha + \sum_{\tau=-5}^{9} \beta_\tau \cdot (\text{DebtRelief}_i \times \text{Post}_\tau)
                + \mu_i + \gamma_{j \times t} + \epsilon_{i,j,t}
\tag{2}
$$

- $$\tau$$ indexes event-quarters relative to discharge.
- $$\tau = -5$$ captures all months before five quarters pre-treatment and $$\tau = 9$$ captures all months nine or more quarters post-treatment.
- Coefficients $$\beta_\tau$$ are plotted with confidence intervals (Figure 2, pp. 525-526).
- Pre-trend coefficients are indistinguishable from zero across all outcomes; post-discharge coefficients diverge persistently for at least two years.

**Outcome variable groups and samples:**
- Credit outcomes (R1-R4): full sample, N = 1,283,639; outcomes include
  SL balance, credit score, total non-SL balance, credit card balance,
  mortgage balance, credit card utilization, credit limit, account openings,
  monthly payments, delinquency rates, bankruptcy, foreclosure, medical
  default.
- Labor outcomes (R5-R6): subsample with Equifax employment data;
  N = 211,716 (job change), 197,874 (new industry), 106,580 (income level),
  91,230 (income growth).
- Mechanism tests (R7): subsample with adjudicated control-group cases
  (Table VII Panel A, N = 1,028,559); and control borrowers with prior
  collections on file (Table VII Panel B, N = 838,295).
- Wage composition (R8): subsample of workers in Equifax payroll data
  (Table VIII, N = 39,459 all jobs; 28,653 no-job-change; 22,128 hourly).

The same two-way FE structure (individual + filing-year x YM) applies in
all specifications; the only variation across tables is the outcome variable
and the sample restriction.

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
