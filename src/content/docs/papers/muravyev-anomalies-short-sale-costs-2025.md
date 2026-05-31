---
title: "Anomalies and Their Short-Sale Costs: Muravyev, Pearson & Pollet (2025)"
description: >-
  Distilled: across 162 asset pricing anomalies, average long-short abnormal
  returns of 0.14%/month vanish once stock borrow fees are accounted for,
  either by fee adjustment or by dropping high-fee stocks; the result holds
  for subsets including microcaps, high-fee anomalies, and factor-mimicking
  portfolios. J. Finance 2025, CC BY 4.0. Nine core results with source
  locators, datasets used, and the identification strategy.
sidebar:
  label: Muravyev-Pearson-Pollet 2025
  order: 1
tags: [paper-summary, anomalies, short-selling, asset-pricing, limits-to-arbitrage, portfolio-sort, panel-regression, open-access, cc-by, peer-reviewed, unreplicated, data:wrds, data:open-source-asset-pricing, data:markit-securities-finance]
paper:
  authors: Dmitriy Muravyev, Neil D. Pearson, Joshua M. Pollet
  year: 2025
  venue: The Journal of Finance 80(6), December 2025, 3639–3694
  venueShort: J. Finance 2025
  licenseShort: CC BY 4.0
  resultsCount: 9
  doi: 10.1111/jofi.13501
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-09-30; corroborated by artifact p.3639 Creative Commons Attribution License statement)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; not tested directly 2026-05-31; CC-BY VOR licence confirmed in Crossref DOI metadata)'
  redistribution: 'extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)'
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13501
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-09-30'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 3639-3694, 12 tables, 12 figures); nine results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and identification
strategy: enough to know what it found without reading all 56 pages. To
replicate or extend it, read the original at
[doi.org/10.1111/jofi.13501](https://doi.org/10.1111/jofi.13501).

## TL;DR

Using 162 anomalies from Chen and Zimmermann (2021) and stock borrow fee data
from Markit (July 2006 to December 2020), the paper shows that the average
long-short abnormal return of 0.14%/month is entirely due to high-fee stocks
(borrow fee greater than 1%/year, roughly 12% of stock-month observations).
Once high-fee stocks are excluded, or once returns are adjusted for the borrow
fee, the average long-short abnormal return collapses to 0.04% or -0.01%/month,
respectively, neither significantly different from zero. The result holds across
microcap stocks, the 20 anomalies with the highest fees, four factor-mimicking
portfolios (momentum, profitability, investment, book-to-market), and five
individually named anomalies. Portfolios sorted on theoretically grounded risk
measures (CAPM beta, tail-risk beta) are unaffected, serving as a placebo.
A short-interest-to-institutional-holdings ratio (from Compustat/13F) works as
a publicly available proxy for borrow fees, eliminating the need for Markit data
to test exploitability.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Average long-short **abnormal return across 162 anomalies is 0.14%/month before fees**, significantly positive | Table III Panel A, p. 3659 | Mean = 0.14%/mo, t-stat = 2.87\*\*\* |
| R2 | **High-fee stocks drive the long-short return**: excluding stocks with borrow fee > 1%/yr, long-short abnormal return drops to 0.04% and is insignificant | Table III Panel B, p. 3659 | Mean = 0.04%/mo, t-stat = 0.84 |
| R3 | **Fee-adjusted long-short return is near zero** (borrow fee added back to short-side returns for full sample) | Table III Panel C, p. 3659 | Mean = -0.01%/mo, t-stat = -0.24 |
| R4 | **Unadjusted decile 1 abnormal returns are approximately linear in the borrow fee**, slope -0.088 (approx. -1/12 per 1 ppt fee) | Table V col. 1, p. 3671 | Slope = -0.0883, t-stat = -1.96\* |
| R5 | **Microcap anomaly returns are also entirely due to high-fee stocks**: before fees decile 1 = -0.48%/mo (t = -2.92); excluding high-fee stocks decile 1 = +0.09% (t = 0.76); fee-adjusted = +0.08% (t = 0.50) | Table IV, p. 3669 | Before-fee L/S = +0.36% (t = 5.06); after drop = +0.11% (t = 1.39); net-of-fee = -0.05% (t = -0.62) |
| R6 | **High-fee anomaly subset (20 anomalies, avg fee > 4%/yr)**: before-fee long-short = 0.41%/mo (t = 2.08); excluding high-fee stocks = -0.04%/mo; fee-adjusted long-short = 0.02%/mo (near zero, insignificant) | Table VI, p. 3673 | Exclud. high-fee L/S = -0.04% (t = -0.21); net-of-fee = 0.02% (t = 0.10) |
| R7 | **Momentum and profitability factor long-short returns are eliminated by borrow fees**: momentum L/S drops from 0.21% to 0.03%/mo after excluding high-fee stocks, profitability from 0.61% to 0.09%/mo; net-of-fee momentum = -0.01%, profitability = 0.21%/mo (annualizes to 2.52%/yr, insignificant) | Table XI, p. 3688 | Momentum net-of-fee L/S: -0.01% (t = -0.11); profitability net-of-fee: 0.21% (t = 0.59) |
| R8 | **CAPM-beta and tail-risk-beta sorted portfolios are unaffected** by borrow fee exclusion or adjustment (placebo): CAPM L/S net-of-fee = 0.45%/mo (t = 0.81), tail-risk L/S net-of-fee = 0.43%/mo (t = 0.97) | Table XII, p. 3690 | Net-of-fee CAPM L/S = 0.45%, tail-risk L/S = 0.43%; both insignificant |
| R9 | **Short-interest-to-institutional-holdings ratio (Compustat/13F, no Markit needed) replicates the main result**: excluding stocks with SI/IO > 18% reduces decile 1 abnormal return by 0.27%/mo relative to Panel A | Table IX Panel D, p. 3682 | SI/IO exclusion decile 1: 0.03% (t = 0.47) vs. -0.24% (t = -2.92) in Panel A |

**Overall (paper's conclusion).** Stock borrow fees function as a common limit
to arbitrage that is sufficient to explain the persistence of anomaly returns
for marginal investors. The average anomaly cannot be profitably exploited via
long-short strategies once shorting costs are incorporated. The residual puzzle
is why long-side investors continue to hold high-fee stocks despite bearing
negative expected returns relative to low-fee benchmarks.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Chen and Zimmermann (2021) anomaly signals (openassetpricing.com), Jan 2000 to Dec 2020; 202 anomalies, 162 retained | Anomaly signal construction; decile portfolio assignment | [Open Source Asset Pricing](/wiki/datasets/open-source-asset-pricing/) |
| Markit Securities Finance Buy Side Analytics Data Feed, daily from Jun 28 2006 | Stock borrow fees (indicative fee = buy-side expected borrow cost); utilization | no page yet |
| CRSP (via WRDS) common stocks, returns, delisting returns | Stock returns, market cap filters, sample construction | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Compustat (via WRDS) short interest + 13F institutional holdings | Proxy for borrow fee (SI/IO ratio) for researchers without Markit access | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |

Sample: 554,253 stock-months (162 anomaly signals, Jul 2006 to Dec 2020),
after dropping stocks below $1 price or $50 mn market cap and requiring at
least 4 days of borrow fee observations per month.

## Theory tested

**No original structural model.** The paper is purely empirical. It tests the
hypothesis, motivated by the limits-to-arbitrage literature (Lee, Shleifer, and
Thaler (1991); Nagel (2005); Stambaugh, Yu, and Yuan (2012); Drechsler and
Drechsler (2021)), that stock borrow fees are the binding arbitrage constraint
preventing exploitation of cross-sectional return anomalies.

**Identification strategy.** Two complementary approaches:

1. *Exclude high-fee stocks*: drop stock-month observations with borrow fee
   above 1%/year (about 12% of the sample) from sorted decile portfolios
   without resorting. If the anomaly return survives this exclusion, it is not
   driven by high-fee stocks.
2. *Fee-adjust returns*: add the borrow fee to the return for portfolio 1
   (short side), and add the expected fee received (utilization rate times
   fee times 0.7, following D'Avolio (2002)) to the return for the long-side
   deciles. If the long-short return survives fee adjustment, it is
   exploitable net of costs.

Both approaches use a characteristics-matched benchmark (DGTW, Daniel et al.
1997), excluding high-fee stocks from the benchmark portfolios to prevent
distortion. Panel regressions with decile fixed effects and standard errors
double-clustered by anomaly and month address contemporaneous correlation
across anomaly returns.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.13501) if you are: replicating
(code in the journal's Supporting Information); extending the borrow fee
adjustment methodology; examining the specific anomaly-by-anomaly results in
the Internet Appendix; or auditing factor return attrition (Section VI). The
locators above point to the exact tables. For "what did this paper find," the
table above is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 80(6). This distillation was
extracted by an LLM on 2026-05-31 and is **not human-verified or independently
reproduced**. CC BY 4.0 permits this adaptation; the verbatim PDF is not hosted
in this batch but CC permits mirroring.

> **Attribution (CC BY 4.0).** Muravyev, Dmitriy, Neil D. Pearson, and Joshua
> M. Pollet. "Anomalies and Their Short-Sale Costs." *The Journal of Finance*
> 80, no. 6 (December 2025): 3639–3694. DOI: 10.1111/jofi.13501.
> © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
