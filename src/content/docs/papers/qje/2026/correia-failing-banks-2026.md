---
title: "Failing Banks: Correia, Luck & Verner (2026)"
description: >-
  Distilled: Using a new panel covering 37,000 US banks from 1863 to 2024, with
  historical national-bank and modern commercial-bank samples, Correia, Luck, and Verner show that bank failures across the full history of the US
  banking system are strongly predicted by deteriorating fundamentals, that failures
  with bank runs are as predictable as other failures, and that most pre-FDIC failures
  were fundamentally insolvent under the benchmark assumptions. The Quarterly Journal of Economics 2026,
  public domain (US Government employee work). Twenty-two core results with source locators,
  datasets, the insolvency condition, and the failure prediction specification.
sidebar:
  label: Correia-Luck-Verner 2026
  order: 1
tags: [paper-summary, banking, bank-failures, bank-runs, financial-crises, economic-history,
       insolvency, deposit-insurance, panel-regression, peer-reviewed, unreplicated,
       data:occ-call-reports, data:ffiec-call-reports, data:fdic-failures]
paper:
  authors: Sergio Correia, Stephan Luck, Emil Verner
  authorList:
    - { family: Correia, given: Sergio, orcid: "0000-0003-1111-3513", affiliation: Federal Reserve Bank of Richmond }
    - { family: Luck, given: Stephan, orcid: "0000-0002-0928-8165", affiliation: Federal Reserve Bank of New York }
    - { family: Verner, given: Emil, affiliation: MIT Sloan School of Management }
  year: 2026
  venue: "The Quarterly Journal of Economics 141(1), 2026, 147-204"
  venueShort: QJE 2026
  tier: top-3
  doi: 10.1093/qje/qjaf044
  jel:
    codes: [G01, G21, N20]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Banking stability, regulation, efficiency", "Global Financial Crisis and Policies"]
  dataAccess: public
  outcome:
    - bank failure probability
    - asset recovery rate in receivership
    - deposit outflow immediately before failure
    - aggregate bank failure rate
    - bank fundamentals before failure
    - bank funding composition before failure
    - real bank asset growth before failure
    - OCC-assessed asset quality at failure
    - share of run-associated failures plausibly solvent
  outcomeClass: [credit-risk, bank-funding]
  license: "public domain in the US (PDF p. 204 footer: 'This work is written by (a) US Government employee(s) and is in the public domain in the US'; published by Oxford University Press on behalf of President and Fellows of Harvard College 2025; no Crossref license block found)"
  licenseShort: "public domain (US)"
  access: open
  machineAccess: "open via arXiv preprint PDF (https://arxiv.org/pdf/2506.06082, checked 2026-06-28); OUP canonical URL (doi.org/10.1093/qje/qjaf044) may require institutional access"
  redistribution: "extract-only (public domain in US per PDF footer; PDF not hosted in this batch)"
  resultsCount: 22
  citedByCount: 8
  introducesData: true
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, roc-curve-analysis, logit-regression]
    identification: descriptive
  contributionType: [new-data, new-fact, measurement]
  mechanisms: [asset-quality-deterioration, information-asymmetry, liquidity]
  scope:
    region: US
    assetClass: US commercial banks
    period: "1863-01..2024-12"
    frequency: annual
    dataType: [accounting, administrative]
    granularity: [firm, aggregate]
    n: "37,361 unique banks (14,152 historical 1863-1941; 23,209 modern 1959-2024); 5,120 bank failures"
  findings:
    - { ref: R1, outcome: bank failure probability, metric: auc-roc, value: "in-sample AUC 0.864; OOS AUC 0.851 (historical 1863-1934, 1-year horizon, full spec)", direction: positive }
    - { ref: R2, outcome: bank failure probability, metric: auc-roc, value: "in-sample AUC 0.953; OOS AUC 0.945 (modern 1959-2024, 1-year horizon, full spec)", direction: positive, vsBenchmark: "substantially above historical-sample AUC of 0.864" }
    - { ref: R3, outcome: bank failure probability, metric: probability, value: "27% 3-year failure probability for banks above the 95th percentile in both insolvency risk and noncore funding (both samples)", direction: positive, vsBenchmark: "10-20x unconditional 3-year probability (2.5% historical; 1% modern; PDF p. 168 states '10-20 times greater')" }
    - { ref: R4, outcome: deposit outflow immediately before failure, metric: level, value: "-14% average deposit growth pre-FDIC (1880-1934); -2.5% post-FDIC (1993-2024)", direction: negative }
    - { ref: R5, outcome: bank failure probability (failures with large deposit outflows), metric: auc-roc, value: "in-sample AUC 0.855; OOS AUC 0.839 (historical outflow-observed sample 1880-1934, 1-year horizon)", direction: positive, vsBenchmark: "nearly identical to all-failures AUC (0.864 in the broader 1863-1934 sample); fundamentals predict run-failures approximately as well" }
    - { ref: R6, outcome: aggregate bank failure rate, metric: oos-r-squared, value: "OOS R2 = 0.40 full sample (1874-2024); OOS R2 = 0.81 modern era (1970-2024)", direction: positive }
    - { ref: R7, outcome: asset recovery rate in receivership, metric: probability, value: "average R = 0.52 (1863-1934); 43% of failures have R < 0.50", direction: negative }
    - { ref: R8, outcome: share of fundamentally insolvent failed banks, metric: probability, value: "0.81 (baseline rho = 0, v = 0); 0.60 (rho = 0.1, v = 0.05)", direction: positive }
    - { ref: R9, outcome: bank failures classified as caused by a run (OCC), metric: probability, value: "<0.02 of OCC-classified failures (1863-1937)", direction: negative, vsBenchmark: "vs. >0.30 for economic conditions" }
    - { ref: R10, outcome: bank failure probability, metric: pp-effect, value: "Moving from below the 50th to above the 95th percentile of insolvency risk raises 3-year failure probability by 4 percentage points (1863-1934)", direction: positive }
    - { ref: R11, outcome: bank failure probability, metric: pp-effect, value: "Moving from below the 50th to above the 95th percentile of insolvency risk raises 3-year failure probability by 10 percentage points (1959-2024)", direction: positive }
    - { ref: R12, outcome: bank failure probability, metric: pp-effect, value: "Moving from below the 50th to above the 95th percentile of noncore funding raises 3-year failure probability by 14 percentage points (1863-1934)", direction: positive }
    - { ref: R13, outcome: bank failure probability, metric: pp-effect, value: "Moving from below the 50th to above the 95th percentile of noncore funding raises 3-year failure probability by 5.5 percentage points (1959-2024)", direction: positive }
    - { ref: R14, outcome: bank fundamentals before failure, metric: pp-effect, value: "Nonperforming-loan proxy rose by 5 percentage points before historical failures (1889-1904)", direction: positive }
    - { ref: R15, outcome: bank fundamentals before failure, metric: pp-effect, value: "In the five years before modern failures, NPLs rose by 10 percentage points and equity/assets fell by 8 percentage points", direction: mixed }
    - { ref: R16, outcome: bank funding composition before failure, metric: pp-effect, value: "Noncore funding rose by 18% of assets in the decade before failure in the modern sample", direction: positive }
    - { ref: R17, outcome: real bank asset growth before failure, metric: level, value: "Real assets expanded by 34% from 10 to 3 years before failure, then contracted in the final 2 years; the boom-bust pattern appears in historical and modern samples and is larger in the modern sample", direction: mixed }
    - { ref: R18, outcome: OCC-assessed asset quality at failure, metric: probability, value: "At suspension, the OCC assessed 0.36 of assets as good, 0.47 as doubtful, and 0.18 as worthless (1863-1934)", direction: mixed }
    - { ref: R19, outcome: asset recovery rate in receivership, metric: coefficient, value: "Recovery-rate coefficients: good assets 0.89 (SE 0.01), doubtful assets 0.54 (SE 0.01), worthless assets 0.08 (SE 0.02); R2 = 0.936", direction: positive }
    - { ref: R20, outcome: bank failure probability, metric: pr-auc-lift, value: "Out-of-sample PR-AUC is about 13 times the failure rate historically and more than 70 times the failure rate in the modern sample", direction: positive }
    - { ref: R21, outcome: share of run-associated failures plausibly solvent, metric: probability, value: "Among 1880-1934 failures with deposit outflows over 7.5%, fewer than 8% could plausibly be runs on solvent banks when rho = v = 0; the share is 13% when rho = v = 0.05 and 22% when rho = v = 0.1", direction: positive }
    - { ref: R22, outcome: deposit outflow immediately before failure, metric: level, value: "Mean deposit growth: -14.40% (1880-1913), -15.98% (1914-1918), -21.73% (1929-1933 pre-holiday), +1.13% (1933-1934 post-holiday), -5.64% (1993-2006), and -2.14% (2007-2024)", direction: mixed }
  resultType: mixed
  relatesTo:
    - { cite: "Diamond and Dybvig (1983)", relation: tests, note: "evidence cuts against non-fundamental panic runs as a primary cause; failures with runs are as predictable as all failures, contradicting the random-strike implication of pure-panic equilibria" }
    - { cite: "Goldstein and Pauzner (2005)", relation: tests, note: "confirms failures with runs cluster in banks with weak fundamentals, consistent with fundamental-based panic runs, but low recovery rates imply most run-banks were already insolvent" }
    - { cite: "Calomiris and Mason (2003)", relation: extends, note: "extends their Great Depression cross-bank fundamental-solvency evidence to a 160-year US panel spanning all institutional regimes" }
    - { cite: "Baron, Verner, and Xiong (2021)", relation: builds-on, note: "complements their aggregate-data evidence that banking crises are preceded by bank equity declines with bank-level granular balance-sheet evidence" }
    - { cite: "Gorton (1988)", relation: tests, note: "places bank-level failure forecasts alongside aggregate evidence linking banking panics to business cycles and business failures" }
  openQuestions:
    - "Estimating the receivership value-destruction parameter (rho) is important for pinpointing the share of solvent banks that failed due to a run; the paper calls for devising direct empirical tests of this parameter (p. 199)."
    - "The study covers only bank failures and does not examine runs that do not result in failure; panic runs forcing convertibility suspensions can impose real economic costs even without closures (p. 199)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/Q22XR1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Read PDF in full (pp. 147-204); all results, equations, and locators taken from the PDF. OpenAlex topics field returned 'Islamic Finance and Banking Studies', an apparent misclassification for a paper on US bank failure history; retained as raw provenance. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: (1) eq. (1) summation bounds corrected from j=0..10 to j=-9..0 (PDF text p. 163-164 states omitted benchmark is j=-10, confirming j is negative); (2) eq. (3)/(3') labels swapped: PDF labels the rewritten inequality as (3), not the initial chain form; (3) R3 vsBenchmark updated from 10-27x to 10-20x to match PDF body text (p. 168). All nine Core results rows verified against cited tables/figures; all AUC, R², deposit-outflow, recovery-rate, and insolvency-share values confirmed." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full assigned PDF. Added 13 Core results and matching findings, the staged PR-AUC lift metric, the liquidity mechanism, and equation/specification coverage. These additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Blind audit of all 22 Core results rows, equations and specifications, classifications, findings, frontmatter, and prose. Corrected R3 from 10-27x to 10-20x, R5's outflow-observed window and comparison, R14's sign, R6's metric, sample description, recovery-rate definition, and Gorton attribution. The PDF's printed event-study bounds and prediction equation's bank-age term conflict with their accompanying prose; the page records both discrepancies." }
  licenceVerification:
    - { source: "Crossref works/10.1093/qje/qjaf044", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref response. PDF p. 204 footer states: 'Published by Oxford University Press on behalf of President and Fellows of Harvard College 2025. This work is written by (a) US Government employee(s) and is in the public domain in the US.'" }
---

**What this is.** This is a machine-extracted skeleton of the paper. Read the
[original at QJE](https://doi.org/10.1093/qje/qjaf044) (or the [arXiv preprint](https://arxiv.org/pdf/2506.06082))
to replicate or extend the results.

## TL;DR

Correia, Luck, and Verner build a new panel of US banks from 1863 to 2024, covering
historical national banks and modern commercial banks, and study the history of bank failures. The central finding is that bank failures are
almost always preceded by deteriorating fundamentals: rising asset losses, declining solvency,
and increasing reliance on expensive noncore funding. These patterns make failures highly
predictable from public accounting data. Failures that involve large deposit outflows (bank
runs) are just as predictable as other failures, contradicting the view that non-fundamental
panic runs commonly topple otherwise healthy banks. Low recovery rates on failed banks' assets
further suggest that most pre-FDIC banks that ran were already fundamentally insolvent. The
aggregate failure rate during systemic banking crises is also largely forecast by deteriorating
micro-level fundamentals, with an out-of-sample R-squared of 40% for the full sample and 81%
for the modern era. The result extends, across 160 years of data, the cross-bank evidence of
Calomiris and Mason (2003) on the Great Depression and complements aggregate evidence that
banking crises are predictable from business failures (Gorton 1988) and declining bank equity
(Baron, Verner, and Xiong 2021).

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | AUC for predicting bank failure within 1 year, historical pre-FDIC sample (1863-1934), full specification | Table I, Panel A, col. 4, p. 172 | In-sample AUC = 0.864; OOS AUC = 0.851 |
| R2 | AUC for predicting bank failure within 1 year, modern sample (1959-2024), full specification | Table I, Panel B, col. 4, p. 172 | In-sample AUC = 0.953; OOS AUC = 0.945 |
| R3 | 3-year failure probability for banks above the 95th percentile in both insolvency risk and noncore funding (both samples) | Figure IV, p. 168 | 27% (historical and modern); unconditional = 2.5% (historical), 1% (modern); 10-20x higher |
| R4 | Average deposit growth immediately before failure | Table II, Panel A, p. 178 | -14% pre-FDIC (1880-1934); -2.5% post-FDIC (1993-2024); 25% of pre-FDIC failures had outflows exceeding 20% |
| R5 | AUC for failures with large deposit outflows (runs), historical outflow-observed sample (1880-1934) | Table I, Panel A, col. 5, p. 172; text p. 180 | In-sample AUC = 0.855; OOS AUC = 0.839; nearly identical to all-failures AUC (0.864 in the broader 1863-1934 sample) |
| R6 | Out-of-sample R-squared, aggregate bank failure rate on predicted aggregate failure rate | Table III, col. 1 (full) and col. 3 (modern), p. 184 | R² = 0.40 full sample (1874-2024); R² = 0.81 modern era (1970-2024); slope coefficient ≈ 1.0 in modern era |
| R7 | Average asset recovery rate in bank receiverships, pre-FDIC sample (1863-1934) | Table IV, p. 186 | Average R = 0.52; 43% of failures have R < 0.50; OCC assessed 47% of assets as doubtful and 18% as worthless (Table V, p. 187) |
| R8 | Share of failed banks that were fundamentally insolvent, conditional on rho and v | Table VII, p. 193 | 0.81 (rho = 0, v = 0 baseline); 0.60 (rho = 0.1, v = 0.05); under extreme assumptions (rho = v = 0.2), still 0.31 |
| R9 | OCC-classified cause of failure attributed to bank runs (1863-1937) | Figure IX, p. 195-196 | <2% of failures; economic conditions most common (>30%); losses second (~25%) |
| R10 | Insolvency-risk gradient in historical three-year failure probability | Figure II, Panel A, p. 164; text p. 163 | Moving from below the 50th to above the 95th percentile of insolvency risk raises failure probability by 4 percentage points (1863-1934) |
| R11 | Insolvency-risk gradient in modern three-year failure probability | Figure II, Panel B, p. 164; text p. 163 | Moving from below the 50th to above the 95th percentile of insolvency risk raises failure probability by 10 percentage points (1959-2024) |
| R12 | Noncore-funding gradient in historical three-year failure probability | Figure II, Panel C, p. 164; text p. 165 | Moving from below the 50th to above the 95th percentile of noncore funding raises failure probability by 14 percentage points (1863-1934) |
| R13 | Noncore-funding gradient in modern three-year failure probability | Figure II, Panel D, p. 164; text p. 165 | Moving from below the 50th to above the 95th percentile of noncore funding raises failure probability by 5.5 percentage points (1959-2024) |
| R14 | Credit-loss proxy dynamics before historical failures | Figure III, Panel A, p. 166; text p. 165 | Nonperforming-loan proxy rises by 5 percentage points before failure (OREO proxy, available 1889-1904) |
| R15 | Credit-loss and capital dynamics before modern failures | Figure III, Panel B, p. 166; text p. 165 | In the five years before failure, NPLs rise by 10 percentage points and equity/assets falls by 8 percentage points (1959-2024) |
| R16 | Noncore-funding dynamics before modern failures | Figure III, Panel D, p. 166; text p. 167 | Noncore funding rises by 18% of assets over the decade before failure (1959-2024) |
| R17 | Real asset boom and contraction before failure | Figure III, Panel E, p. 166; text p. 168 | Real assets expand by 34% from 10 to 3 years before failure, then contract over the last 2 years; pattern occurs in both historical and modern samples and is larger in the modern sample |
| R18 | OCC asset-quality assessment at suspension | Table V, p. 187; text p. 188 | Average shares assessed as good = 0.36, doubtful = 0.47, and worthless = 0.18 (1863-1934; N = 2,917) |
| R19 | Asset-quality measures predict receivership recovery | Table VI, col. 1, p. 189; text p. 188 | Recovery-rate coefficients: good assets = 0.89 (SE 0.01), doubtful = 0.54 (SE 0.01), worthless = 0.08 (SE 0.02); R² = 0.936; N = 2,682 |
| R20 | Precision-recall prediction performance relative to failure base rate | Text p. 176 | Out-of-sample PR-AUC is about 13 times the failure rate historically and more than 70 times the rate in the modern sample |
| R21 | Share of run-associated failures plausibly attributable to runs on solvent banks | Figure VIII, p. 194; text p. 193-194 | Among failures with deposit outflows over 7.5%, fewer than 8% could plausibly be runs on solvent banks at rho = v = 0; this rises to 13% at rho = v = 0.05 and 22% at rho = v = 0.1 |
| R22 | Deposit-outflow heterogeneity across institutional eras | Table II, Panel B, p. 178; text p. 179 | Mean deposit growth: -14.40% (1880-1913), -15.98% (1914-1918), -21.73% (1929-1933 pre-holiday), +1.13% (1933-1934 post-holiday), -5.64% (1993-2006), and -2.14% (2007-2024) |

**Overall (paper's conclusion, p. 196-198).** Bank failures are almost always and everywhere
a deterioration of bank fundamentals. Runs are a frequent mechanical trigger but typically
close insolvent banks rather than causing solvent banks to fail. The predictability of failures,
including failures with runs, suggests that non-fundamental, self-fulfilling runs on healthy
banks are a rare cause of US bank failures both before and after deposit insurance.

## Theory / model

The paper organizes its empirical analysis around two competing theoretical frameworks for
why banks fail (Section II.A, pp. 154-156).

**The solvency view.** Banks fail when realized credit losses, interest rate losses, or fraud
erode asset values below debt claims, making the bank insolvent regardless of whether a run
occurs. Morris and Shin (2016) formalize solvency risk as the probability of failure in a
counterfactual with no withdrawals. Under this view, the runnable nature of bank liabilities
is not the root cause.

**The bank runs view (Diamond and Dybvig (1983)).** Banks finance illiquid assets with
demandable deposits. A coordination failure among depositors can produce a self-fulfilling
panic run on an otherwise solvent bank, forcing it to liquidate assets at a loss.

**Fundamental-based panic runs (Goldstein and Pauzner (2005)).** Bank fundamentals
$$\theta$$ are stochastic. Three regions determine equilibrium behavior (p. 155):

- $$\theta > \bar{\theta}$$: fundamentals are strong, no depositor has incentive to withdraw.
- $$\theta \leq \underline{\theta}$$: the bank is insolvent; all depositors withdraw regardless of others' actions (a "fundamental run").
- $$\underline{\theta} < \theta \leq \theta^*$$: a panic region in which a coordinated run can cause failure even though absent the run the bank could pay all creditors.

This model predicts that failures with runs occur randomly within the panic region and should
therefore be harder to predict from fundamentals than failures outside it. The paper tests
this implication and finds it is rejected.

**The insolvency condition (Section VIII.B, p. 190).** The paper develops a simple
framework to gauge what fraction of failed banks were fundamentally insolvent absent a run.
A bank with book assets $$A$$, debt $$D$$, unrealized asset losses $$\lambda$$ before failure,
and additional receivership losses $$\rho$$ has observed recovery rate $$R = (1-\lambda)(1-\rho)$$.
Let $$v$$ be the franchise value as a share of current book assets. The bank is fundamentally
insolvent irrespective of any run if:

$$
(1-\lambda)(1+v)A < D
$$

Rewriting in terms of leverage $$\ell = D/A$$ and the observed recovery rate:

$$
\frac{1+v}{1-\rho} < \frac{\ell}{R} \tag{3}
$$

A bank satisfying this condition was insolvent even if the run had not occurred. When $$\rho$$
and $$v$$ are low (baseline: both zero), the condition simplifies to $$R < \ell$$, which holds
for 81% of pre-FDIC bank failures in the sample.

## Method

**Measures of bank fundamentals (Section IV.A, pp. 161-162).** Three observable proxies
for financial health are constructed:

- *Insolvency risk.* Pre-1934: surplus profit relative to total equity (surplus profit = sum
  of surplus fund and undivided profits; proxies profitability and capitalization). Post-1959:
  net income / total assets.
- *Noncore funding.* Pre-1934: total assets net of total deposits, equity, and national bank
  notes, all scaled by assets (captures expensive nondeposit wholesale funding). Post-1959:
  (time deposits + wholesale funding) / total assets.
- *Asset growth.* Change in log bank assets from t - 3 to t, used in quintile buckets to capture the
  nonlinear boom-bust relation.

**Failure prediction model (Section V, p. 170, eq. 2).** Bank failures are predicted via
linear probability models (with logit as robustness):

$$
\text{Failure}_{b,t+1\to t+h} = \alpha + \beta_1\,\text{Insolvency}_{bt}
+ \beta_2\,\text{Noncore Funding}_{bt}
+ \beta_3\,\text{Insolvency}_{bt}\times\text{Noncore Funding}_{bt}
$$

$$
+ \beta_4\,\text{Asset Growth}_{bt}
+ \beta_5\,\text{Aggregate Conditions}_t
+ \epsilon_{b,t+1\to t+h} \tag{2}
$$

where $$\text{Failure}_{b,t+1\to t+h}$$ is an indicator equal to one if bank $$b$$ fails
within $$h$$ years of call report date $$t$$. The accompanying text also specifies bank-age
controls, although the printed equation omits an age term. Only real-time observables enter;
no bank or time fixed effects are included. Predictive performance is evaluated via the area under the
receiver operating characteristic curve (AUC), computed both in-sample and pseudo-out-of-sample
using an expanding training window (first 10 years of data as initial training sample).

**Aggregate failure rate prediction (Section VII, p. 184).** The bank-level predicted
probabilities are aggregated into a predicted aggregate failure rate:

$$
\bar{p}_{t|t-1} = \sum_{b \in B_{t-1}} w_{bt-1}\,\hat{p}_{b,t|t-1}
$$

and regressed on the realized failure rate:

$$
\text{FailureRate}_t = \alpha + \beta\,\bar{p}_{t|t-1} + u_t
$$

using Newey-West standard errors (truncation parameter $$S = 1.3T^{1/2}$$).

**Event-study dynamics (Section IV.B, p. 163, eq. 1).** To characterize how fundamentals
evolve in failing banks, the paper estimates:

$$
y_{b,t} = \alpha_b + \sum_{j=-9}^{0} \beta_j \times \mathbf{1}[\text{YearsToFail}_{b,t} = j] + \epsilon_{b,t} \tag{1}
$$

restricted to failing banks within 10 years of failure; the omitted period is $$j = -10$$.
The PDF's printed summation bounds read 0 to 10, but the following text and Figure III
index event time negatively and identify -10 as the omitted period; the equation here follows
that event-time indexing.
Coefficients $$\{\beta_j\}$$ trace the pre-failure dynamics of solvency, funding, and assets.

## Empirical specifications

**Predictability of bank failures (Section V.B, pp. 170-174).** Equation (2) is estimated
separately for the historical pre-FDIC sample (1863-1934) and the modern sample (1959-2024)
at one-, three-, and five-year horizons. Table I reports AUC statistics rather than regression
standard errors, and its notes do not state the standard-error treatment. The in-sample AUC for the full specification
(insolvency, noncore funding, their interaction, asset growth quintiles, and aggregate
conditions) ranges from 0.864 to 0.739 across horizons in the historical sample and from
0.953 to 0.831 in the modern sample (Table I, p. 172). The pseudo-OOS performance is nearly
as strong, with OOS AUC = 0.851 (historical, 1-year) and 0.945 (modern, 1-year).

**Failures with bank runs (Section VI.B, pp. 178-181).** Failures with large deposit outflows
are defined as those where deposits decline by more than 7.5% between the last call report and
failure (data available for 1880-1934 historically; 1993-2024 for the modern sample). Equation
(2) is re-estimated restricting to this subsample. The AUC for failures with large deposit
outflows is 0.855 (in-sample, historical 1880-1934, col. 5 vs. 0.864 for all failures in the
broader 1863-1934 col. 4 sample, Table I), consistent with the paper's description that fundamentals predict run-failures approximately as well. On average, banks in the
historical pre-FDIC sample saw deposits decline by 14% before failure (Table II, Panel A),
with 25% experiencing outflows exceeding 20%. Post-FDIC, average outflows are only 2.5%.

**Aggregate waves of bank failures (Section VII, pp. 182-185).** The predicted aggregate
failure rate $$\bar{p}_{t|t-1}$$ is constructed pseudo-out-of-sample using only data up to
year $$t-1$$. Regressing the actual aggregate failure rate on $$\bar{p}_{t|t-1}$$ yields
$$R^2 = 0.40$$ for the full sample and $$R^2 = 0.81$$ for the modern era 1970-2024 (Table III,
p. 184). The estimated coefficient $$\hat\beta$$ is close to one in the modern era, indicating
that predicted and actual failure rates move in proportion. The Great Depression years
(1929-1934) are underpredicted, consistent with excess failures beyond what deteriorating
micro-level fundamentals alone forecast.

**Recovery rates and fundamental insolvency (Section VIII, pp. 185-194).** Recovery rate
  $$R$$ is defined as total funds collected relative to assets at suspension and additional
assets received after suspension. Regressing realized $$R$$ on OCC asset-quality categories (good, doubtful,
worthless) yields coefficients of 0.89, 0.54, and 0.08 respectively, with $$R^2 = 0.936$$
(Table VI, col. 1, p. 189), validating the OCC assessments. The insolvency condition
(equation 3) is applied bank by bank using observed $$\ell$$ and $$R$$ for a grid of $$(\rho, v)$$
values. Under the baseline ($$\rho = v = 0$$), 81% of pre-FDIC failures satisfy the
insolvency condition (Table VII, p. 193). Even under the generous assumption that
receiverships destroy 10% of asset value and franchise value equals 5% of assets
($$\rho = 0.1$$, $$v = 0.05$$), 60% of failures were insolvent.

**Failure-event dynamics (Section IV.B, pp. 163-166, equation 1).** The event-time
regression in the Method section includes bank fixed effects, uses failing banks observed
within ten years of failure, and omits year -10. Figure III reports historical annual
coefficients for 1863-1934 and modern quarterly coefficients for 1959-2024, plotting only
end-of-calendar-year coefficients in the modern panels. The figure caption does not state
the standard-error estimator or clustering procedure. Equation (1) is the paper's numbered
main-text specification and is shown in the Method section with its locator.

**Aggregate failure-rate regression (Section VII, pp. 183-184).** The paper estimates the
following time-series specification (Table III, p. 184):

$$
\text{FailureRate}_{t} = \alpha + \beta\,\bar{p}_{t|t-1} + u_t
$$

Here $$\bar{p}_{t|t-1}$$ is the equally weighted mean of bank-level predicted failure
probabilities produced from an expanding window using information through $$t-1$$, with
the first ten years as the initial training sample. It is estimated by era, with no fixed
effects; Newey-West standard errors use truncation parameter $$S = 1.3T^{1/2}$$. The table
reports annual sample sizes of 117 for the full sample, 61 for 1874-1934, 55 for 1970-2024,
and 111 excluding 1929-1934.

**Receivership recovery regressions (Section VIII.A, pp. 188-189).** Table VI estimates
cross-sectional regressions of each failed bank's recovery rate on the listed assessment
or balance-sheet predictors (Table VI, p. 189):

$$
R_b = \alpha + \beta X_b + \epsilon_b
$$

The sample is receiverships from 1863-1934. Columns 2-5 include a constant; column 1,
which regresses recovery on good, doubtful, and worthless asset shares, omits the constant.
The table uses 2,682 observations in column 1 and 2,727, 2,725, 418, and 1,998 in columns
2-5. It has no bank or time fixed effects. Standard errors are in parentheses, but the
table note does not identify their estimator or clustering.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| OCC Annual Reports to Congress (1863-1941) | Historical bank balance sheets (assets, loans, deposits, equity), failure events, causes of failure, receiver postmortem reports (deposits and assets at suspension, funds collected); digitized via OCR using methods of Correia and Luck (2023) | no page yet |
| FFIEC Call Reports via Federal Reserve (1959-2024) | Modern quarterly bank balance sheets (FFIEC 031/041/051 from 1976; FFIEC 010/011 extended back to 1959); income statements; foundation of the modern-sample analysis | no page yet |
| FDIC Failure Transaction Database (1934-2024) | Failure dates, deposits and assets at resolution for post-FDIC failures (1993-2024 subset used for deposit outflows); defines bank failure as closure involving purchase-and-assumption or liquidating receivership | no page yet |
| National Information Center (NIC) tables | Bank charter and founding dates for de novo bank identification | no page yet |

**Sample scope.** Historical sample: 14,152 national banks, 1863-1941 (annual; national bank
notes era and early Fed era). Modern sample: 23,209 FDIC member banks, 1959-2024 (annual
data used for comparability). Combined: 37,361 unique bank entities; 5,120 bank failures
(2,887 pre-1935; 2,233 post-1959). Recovery rate analysis: 2,917 receiverships with complete
data, 1863-1934.

## When to read the full paper

- **Banking history and crises**: Section IV documents the fundamental dynamics in failing
  banks (Figures II-IV); Section VII shows these dynamics forecast systemic crises including
  the Great Depression and 2008 (Figure VII, Table III).
- **Bank runs and solvency**: Sections VI and VIII contain the main tests of whether runs
  caused failures (Table I col. 5; Table VII); the framework in Section VIII.B (equation 3)
  is the cleanest tool for the fundamental insolvency calculation.
- **Early warning / stress testing**: Table I provides benchmark AUC statistics (0.86-0.95)
  for bank failure prediction from simple accounting ratios; the full regression coefficients
  are in Online Appendix Tables B.4 and B.5.
- **Historical database users**: Section III and Online Appendix C describe the OCR digitization
  of OCC Annual Reports and the construction of the new 1863-1941 balance-sheet panel; replication
  data are on Harvard Dataverse (Correia, Luck, and Verner 2025a).

## Attribution and rights

This paper is in the public domain in the United States. The PDF footer (p. 204) states:
"Published by Oxford University Press on behalf of President and Fellows of Harvard College
2025. This work is written by (a) US Government employee(s) and is in the public domain in
the US."

LLM-distilled summary, not human-verified, not reproduced. For the canonical text see:

> Correia, Sergio, Stephan Luck, and Emil Verner. "Failing Banks."
> *The Quarterly Journal of Economics* 141(1), 2026, 147-204.
> https://doi.org/10.1093/qje/qjaf044

Replication data: Correia, Luck, and Verner (2025a), Harvard Dataverse,
https://doi.org/10.7910/DVN/Q22XR1.
