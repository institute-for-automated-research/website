---
title: "Forest through the Trees: Bryzgalova, Pelger & Zhu (2025)"
description: >-
  Distilled: Asset Pricing Trees (AP Trees) use decision-tree conditional sorts
  with global SDF-spanning pruning to build interpretable cross-sections of stock
  returns that achieve out-of-sample Sharpe ratios up to three times higher than
  conventional double and triple sorts. J. Finance 2025, CC BY 4.0. Eight core
  results with source locators, datasets used, and the theory tested.
sidebar:
  label: Bryzgalova-Pelger-Zhu 2025
  order: 1
tags: [paper-summary, asset-pricing, factors, anomalies, cross-section, portfolio-sort, decision-trees, factor-models, machine-learning, open-access, cc-by, peer-reviewed, unreplicated, data:wrds, data:ken-french]
paper:
  authors: Svetlana Bryzgalova, Markus Pelger, Jason Zhu
  year: 2025
  venue: The Journal of Finance 80(5), October 2025, 2447–2506
  venueShort: J. Finance 2025
  licenseShort: CC BY 4.0
  resultsCount: 8
  doi: 10.1111/jofi.13477
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-09-02; corroborated by artifact p.2447 Creative Commons Attribution License notice)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; not machine-fetched directly; CC-BY VOR licence confirmed in Crossref DOI metadata 2026-05-31)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13477
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-09-02'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 2447–2506); eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is referenced in the paper but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 60 pages. To replicate or extend
it, read the full source at the
[original](https://doi.org/10.1111/jofi.13477).

## TL;DR

The paper proposes Asset Pricing Trees (AP Trees): a decision-tree method
that groups individual stocks into managed portfolios by conditional
characteristic splits, then selects a sparse subset via global SDF-spanning
pruning (LASSO + robust mean/variance shrinkage). Applied to 10
CRSP/Compustat characteristics (Jan 1964 to Dec 2016, 53 years of monthly
data), AP Trees deliver small cross-sections of 10 to 40 long-only
portfolios whose combined out-of-sample Sharpe ratio is up to three times
higher than conventional double/triple sorts, and whose SDF alpha is
significant against all leading factor models. The key drivers are
(i) modeling characteristic interactions via conditional splits and
(ii) optimizing the SDF-spanning objective rather than return prediction.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | AP Trees deliver **out-of-sample Sharpe ratios up to three times higher** than conventional triple sorts across all 36 three-characteristic cross-sections | Figure 6, Panel A, p. 2474; Table B.II, p. 2497 | AP Tree SR ranges from ~0.24 to ~0.65 (monthly); triple-sort SR rarely exceeds 0.4; difference is up to 3x for cross-sections including investment, idiosyncratic volatility, or profitability |
| R2 | **AP Tree SDF alphas are large and significant** against FF3, FF5, XSF, and FF11 models; triple-sort SDFs are routinely spanned | Table I, p. 2482; Figure 6, Panel B, p. 2474 | For size/OP/investment: AP Trees (10) α = 0.94 vs FF3 (t=10.11), 0.81 vs FF5 (t=8.76); triple sorts α = 0.75 vs FF3 (t=7.40), 0.47 vs FF5 (t=5.57) |
| R3 | **Cross-sectional fit (XS-R²) is far lower for AP Trees**, confirming they contain pricing information not in standard factor models | Table I, p. 2482 | AP Trees (10) XS-R² vs FF5 = 11%; triple sorts (32) XS-R² vs FF5 = 91%; AP Trees (40) = 64% vs 91% for TS(32) |
| R4 | **Interaction nodes account for roughly half of AP Trees' SR**; removing interactions halves the out-of-sample Sharpe ratio | Figure 8, p. 2478 | AP Tree (10) monthly SR ~0.4–0.65 with interactions; dropping interactions reduces SR to roughly that of XSF long-short factors (~0.2); similar pattern for AP Trees (40) |
| R5 | **SDF-spanning objective drives the result**: V-Trees (same splits, variance criterion only) have 2–3x lower SR; ML return-prediction portfolios (deep learning, random forest) have SR at best half that of AP Trees | Figure 9, p. 2481; Figure 15, p. 2494 | AP Trees monthly SR ~0.4–0.65; V-Trees ~0.2–0.3; DL-MV, RF-MV ~0.2–0.35 across 10-characteristic cross-sections |
| R6 | **10 pruned AP Tree portfolios retain ~90% of the SR** of 40-portfolio cross-sections, showing the quality of the cross-section is not driven by size | Figure 7, p. 2477; Table I, p. 2482 | AP Trees (10) SR = 0.65 vs AP Trees (40) SR = 0.69 for size/OP/investment; 10 portfolios already span ~90% of the SDF |
| R7 | **In the large-dimension setting (10 characteristics), AP Trees raise monthly SR by ~0.1 over the best 25x9 double-sort cross-section** (roughly 20% gain), and 80–100% over anomaly-based deciles | Figure 14, p. 2493; §V | AP Trees (10/40) achieve SR ~0.5; best DS25 combination reaches ~0.4–0.45; decile-sort SR ~0.3; quintile SR ~0.25 |
| R8 | **Microcaps do not drive results**: excluding small caps (size quantile below 0.4) or restricting to the top 600 stocks by market cap, AP Trees still roughly double the SR of triple sorts | Table III, p. 2490 | Liquid-stocks AP Trees (10): SR = 0.30, α vs FF5 = 0.70 (t=5.04); triple sorts SR = 0.17 (TS32) / 0.17 (TS64) |

**Overall (paper's conclusion).** Conventional single/double/triple sorts and
their stacked combinations provide an unreliable and often misspecified
benchmark for asset pricing models. AP Trees resolve this by finding a small,
interpretable, well-diversified cross-section that genuinely spans the
conditional SDF projected on characteristics, enabling better model
evaluation and construction of tradable risk factors.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP monthly stock returns and market data | Portfolio returns, market cap, momentum, short-term reversal, idiosyncratic volatility | [WRDS / CRSP](/wiki/licensed/wrds/) (licensed) |
| Compustat annual fundamentals | Book-to-market, investment, operating profitability, accruals, turnover, long-term reversal | [WRDS / Compustat](/wiki/licensed/wrds/) (licensed) |
| Kenneth French Data Library | 10 firm-specific characteristic definitions (Table A.I); Fama-French factor returns for benchmarking (FF3, FF5) | [Ken French library](/wiki/datasets/ken-french/) |
| One-month Treasury bill rate | Proxy for the risk-free rate | No page yet |

Sample: January 1964 to December 2016 (53 years, monthly). Training sample: first 20 years; validation: 10 years; testing (out-of-sample): last 23 years.

## Theory tested

**No original structural model.** The paper is primarily methodological and
empirical. The theoretical contribution is a formal misspecification result
(Proposition 1): if the chosen test assets do not span the SDF projected on
a given set of characteristics, even a model that perfectly explains those
assets can be misspecified for individual stocks. The paper then constructs
AP Trees to satisfy the spanning requirement.

The SDF framework is standard no-arbitrage: the conditional SDF
M^C projected on individual stock excess returns R_t is:

M^C = 1 - sum_i b_{t-1,i} (R_{t,i} - E_{t-1}[R_{t,i}]), with b_{t-1,i} = f(C_{t-1,i}).

AP Pruning (Definitions 1 and 2, pp. 2466–2468) selects a sparse set of
tree-node portfolios by minimizing weighted pricing errors with LASSO plus
mean and variance shrinkage. Proposition 2 shows AP Pruning is equivalent
to constructing a robust tangency portfolio. Proposition 3 shows it
generalizes the robust SDF recovery of Kozak, Nagel, and Santosh (2020).
Proposition 4 gives a robust-control interpretation: shrinkage solves a
minimax problem over estimation uncertainty in means and variances.

Identification: fully out-of-sample evaluation with a train/validate/test
split (Figure 5, p. 2472); no look-ahead bias; portfolio selection is fixed
on training+validation data before the testing period.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.13477) if you are:
replicating (the Internet Appendix contains formal proofs and additional
robustness); building new cross-sections beyond the 10 characteristics
studied; evaluating whether a candidate factor model spans the SDF; or
extending AP Trees to other asset classes or conditional models. The
locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 80(5). This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The CC BY 4.0 licence permits mirroring; the
verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Bryzgalova, Svetlana, Markus Pelger, and Jason Zhu.
> "Forest through the Trees: Building Cross-Sections of Stock Returns."
> *The Journal of Finance* 80, no. 5 (October 2025): 2447–2506.
> DOI: 10.1111/jofi.13477. © 2025 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
