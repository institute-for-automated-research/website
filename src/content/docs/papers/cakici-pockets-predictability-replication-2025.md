---
title: "Pockets of Predictability (Replication): Cakici, Fieberg, Neumaier, Poddig & Zaremba (2025)"
description: >-
  Distilled: Cakici et al. replicate Farmer-Schmidt-Timmermann (2023) and find
  a critical one-sided vs two-sided kernel lookahead error in the original code;
  correcting it collapses average integral R-squared by roughly 20-fold and
  invalidates most FST conclusions about exploitable pockets of predictability.
  J. Finance 80(6), December 2025, CC BY 4.0. Eight core results with source
  locators, datasets used, and the identification strategy.
sidebar:
  label: Cakici et al. 2025 (Pockets Replication)
  order: 1
tags: [paper-summary, return-predictability, replication, market-timing, time-series, panel-regression, open-access, cc-by, peer-reviewed, data:wrds, data:ken-french]
paper:
  authors: Nusret Cakici, Christian Fieberg, Tobias Neumaier, Thorsten Poddig, Adam Zaremba
  year: 2025
  venue: The Journal of Finance 80(6), December 2025, 3771–3790
  venueShort: J. Finance 2025
  doi: 10.1111/jofi.13484
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-08-25; corroborated by artifact p.3771 Creative Commons Attribution License statement)'
  licenseShort: CC BY 4.0
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; not tested directly 2026-05-31; CC-BY VOR licence confirmed in publisher DOI metadata)'
  redistribution: 'extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)'
  resultsCount: 8
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 3771–3790, 20 pages); eight results extracted from the PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information on the journal website but has not been run here.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13484
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-08-25'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and identification
strategy: enough to know what it found without reading all 20 pages. To
replicate or extend it, read the full source at the
[original](https://doi.org/10.1111/jofi.13484) (open access).

## TL;DR

Farmer, Schmidt, and Timmermann (2023, FST) claimed that U.S. aggregate stock
market returns exhibit "pockets of predictability" identifiable ex ante via
one-sided kernel regressions. Cakici et al. audit the FST replication package
and find that the pocket-identification step in FST's code uses a two-sided
kernel, not the one-sided kernel described in the paper. A two-sided kernel
draws on data both before and after the forecast date, making the procedure
in-sample rather than out-of-sample and leaking future information into the
model. Correcting this single error reduces average integral R-squared by a
factor of roughly 20 (e.g., from 1.51-3.70% to 0.09-0.28% for daily
forecasts). The in-pocket vs out-of-pocket return predictability difference
largely disappears, and market-timing alphas become mostly insignificant.
Economic restrictions on forecasts offer partial improvement but cannot
restore the original conclusions.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Original (two-sided) code reproduces FST exactly**: in-pocket average integral R-squared ranges from 1.48% to 3.70% (daily), with strong in-pocket/out-of-pocket asymmetry | Table II Panel A, p. 3779; Figure 1 p. 3773 | Mean integral R² (daily): dp 1.51%, tbl 1.70%, tsp 2.92%, rvar 2.77% (two-sided kernel) |
| R2 | **Corrected (one-sided) code collapses predictability**: pockets become roughly 20x more frequent, 10x shorter, and far less predictable | Table II Panel B, p. 3779 | Mean integral R² (daily): dp 0.18%, tbl 0.12%, tsp 0.09%, rvar 0.28% (one-sided kernel) |
| R3 | **In-pocket CW t-statistics vanish with the one-sided kernel**: under the two-sided code in-pocket CW t-stats commonly exceed 3-4; under the corrected code they are insignificant for nearly all 27 model-predictor combinations | Table III Panel A.1 vs A.2, pp. 3781-3782 | Two-sided in-pocket CW (unrestricted): dp 3.00\*\*\*, tbl 4.75\*\*\*, tsp 3.04\*\*\*; one-sided in-pocket CW (unrestricted): dp -0.47, tbl 0.10, tsp -1.06 |
| R4 | **In-pocket alphas drop sharply**: unrestricted in-pocket annualised alphas fall from 0.76-6.38% (two-sided) to -0.44-2.51% (one-sided); only one out of nine individual/composite predictors exceeds 1% significance under the one-sided kernel | Table III Panel B.1 vs B.2, pp. 3782-3783 | Average Sharpe ratio drops from 0.71 (two-sided) to 0.44 (one-sided), below the prevailing-mean benchmark 0.46 |
| R5 | **Benchmark model beats kernel models out-of-pocket (two-sided code)**: out-of-pocket CW t-stats are significantly negative (at 10%) in roughly half of configurations under the original code | Table III Panel A.1, p. 3781 | Out-of-pocket CW: dp -1.62†, tbl (ns), tsp -1.52†, rvar -1.77†† (two-sided, unrestricted) |
| R6 | **Alternative bandwidth robustness: corrected code always fails to identify in-pocket predictability** across 2-, 2.5-, and 3-year estimation windows and 6-, 12-, 18-month SED windows; not a single significant in-pocket CW t-stat in Panel B | Table IV Panel B, pp. 3785-3786 | All Panel B in-pocket CW entries insignificant across all bandwidth/window combinations |
| R7 | **Monthly data confirms the result**: monthly in-pocket CW t-stats are strong under the two-sided kernel (e.g., tbl 3.55\*\*\*, tsp 2.44\*\*\*) but mostly insignificant under the one-sided kernel | Table V Panels A and B, p. 3788 | One-sided in-pocket monthly CW: dp 0.90, tbl 1.22, tsp 0.57, rvar 1.01 |
| R8 | **Partial exception: factor returns (SMB, HML) retain some time-varying predictability** even with the corrected one-sided kernel, though weaker than FST documented with the two-sided approach | §II.E, p. 3788-3789 (Internet Appendix Section IV) | Qualitative finding: significant CW stats and market-timing gains persist for factor portfolios; aggregate equity market is the null result |

**Overall (paper's conclusion).** The FST pocket-of-predictability evidence
is an artefact of in-sample kernel estimation. Once the identification step
is restricted to information available before the forecast date, the pockets
shrink to one-day artefacts, predictability inside and outside pockets
becomes statistically indistinguishable, and market-timing strategies based
on the pockets offer no reliable abnormal returns.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP U.S. stock market excess return (daily and monthly, 1926-2016) | Dependent variable: aggregate market excess return (CRSP return minus short T-bill) | [WRDS / CRSP](/wiki/licensed/wrds/) (licensed) |
| Dividend-price ratio (dp), 1926-2016 | Predictor variable (sourced from FST replication package) | no page yet |
| 3-month T-bill rate (tbl), 1954-2016 | Predictor variable (sourced from FST replication package) | no page yet |
| Term spread (tsp), 1962-2016 | Predictor variable (sourced from FST replication package) | no page yet |
| Realized variance (rvar), 1927-2016 | Predictor variable (sourced from FST replication package) | no page yet |
| Ken French Data Library (SMB, HML factor returns) | Used in Section II.E robustness for factor-level predictability | [Ken French](/wiki/datasets/ken-french/) |

Study period: 1926-2016 (predictor-dependent; see Table I, p. 3777). Data
sourced directly from the FST replication package ("Replication-code
20190881.zip", Journal of Finance website).

## Theory tested

**No original structural model.** The paper is a pure replication and
methodological audit. It tests whether the FST claim holds under a correctly
implemented out-of-sample procedure. The identification strategy is:

- **Two-framework comparison**: run all FST analyses twice: (i) verbatim
  replication using FST's original code (two-sided kernel in pocket
  identification, equivalent to in-sample estimation), and (ii) corrected
  code replacing the two-sided kernel with the one-sided Epanechnikov kernel
  (as described in the FST text) for both steps.
- **One-sided Epanechnikov kernel** (eq. 3, p. 3775): K(u) = (3/2)(1-u^2) *
  1{-1 < u < 0}, restricting estimation to data prior to forecast date t.
- **Squared forecast error differential (SED)** (eq. 4, p. 3775) tracks
  whether the kernel model beats the prevailing-mean benchmark.
- **Pocket identification** (eq. 5, p. 3775): a pocket begins when the
  one-year SED trend coefficient is positive; FST's code used a two-sided
  (24-month symmetric) window for this step, leaking 12 months of future data.
- Performance assessed via Clark-West (2007) t-statistics, annualised alphas,
  and Sharpe ratios from a stock/T-bill timing strategy.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.13484) (open access) if you
are: auditing the FST replication package directly; extending the
kernel-regression methodology to other predictors or markets; or assessing
whether the partial improvements from economic restrictions (sign constraints
on slope coefficients and forecasts) restore the FST conclusions. The
locators above point to the exact tables. For "what did this paper find,"
the table above is sufficient.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 80(6), December 2025,
pp. 3771-3790. This distillation was extracted by an LLM on 2026-05-31 and
is **not human-verified or independently reproduced**. The article is open
access under CC BY 4.0; PDF mirroring is permitted by the licence but the
PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Cakici, Nusret, Christian Fieberg, Tobias
> Neumaier, Thorsten Poddig, and Adam Zaremba. "Pockets of Predictability:
> A Replication." *The Journal of Finance* 80, no. 6 (December 2025):
> 3771-3790. DOI: 10.1111/jofi.13484. © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
