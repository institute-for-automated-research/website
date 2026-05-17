---
title: Open Source Asset Pricing (Chen-Zimmermann)
description: >-
  How to pull 212 firm-level anomaly signals and pre-built long-short
  portfolio returns for free — the list-not-string trap, the 1.6 GB bulk
  trap, and the CRSP-merge-already-done point, for automated pipelines.
sidebar:
  label: Open Source Asset Pricing
  order: 4
tags: [asset-pricing, anomalies, equities, panel-data, free, academic]
verified:
  date: 2026-05-16
  with: openassetpricing.com + GitHub reachable (pkg/data per docs, not bulk-fetched)
---

**Open Source Asset Pricing** (Chen & Zimmermann 2022, *RFS*) is the free,
reproducible cross-sectional anomaly dataset: **212 firm-level signals** plus
pre-computed long-short and decile portfolio returns, with the CRSP/Compustat
merge already done. It is what the
[ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline uses to test
whether a model's mechanism maps to a known anomaly. This page is the
distilled recipe.

- **Cost:** free, no auth.
- **Coverage:** 212 signals; original-paper and decile/quintile portfolios.
- **Site:** <https://www.openassetpricing.com> ·
  **Code:** <https://github.com/OpenSourceAP/CrossSection>

## Access

### Option 1 — `openassetpricing` package (preferred)

```python
# pip install openassetpricing
from openassetpricing import OpenAP
ap = OpenAP()

# Firm-level signals — predictor arg MUST be a list (see gotchas)
sig = ap.dl_signal("pandas", ["BM", "Mom12m", "AssetGrowth"])
#   → permno, yyyymm, BM, Mom12m, AssetGrowth

port = ap.dl_port("op", "pandas", ["BM"])      # original-paper portfolios
ap.list_port()                                  # op, deciles_ew/vw, quintiles_*
docs = ap.dl_signal_doc("pandas")               # all 212 with paper refs
```

### Option 2 — Direct download (fallback)

A ~1.6 GB zipped wide CSV of all predictors is at
<https://www.openassetpricing.com/data/>. Download once, cache under `data/`,
never re-pull.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the repo README. Site and GitHub
confirmed reachable on the date above; the package/data interface is as
documented (not bulk-fetched here — the full set is ~1.6 GB).

- **Predictor arguments must be LISTS, not strings.** `["BM"]`, never `"BM"`.
  Passing a string is the #1 failure and the error is not obvious.
- **The bulk download is ~1.6 GB.** `dl_all_signals` / the direct CSV will
  blow memory and time if pulled naively. Request only the signals you need;
  cache aggressively.
- **The CRSP/Compustat merge is already done.** Do not re-merge — signals are
  delivered at `permno × yyyymm`. Re-merging double-counts and misaligns.
- **`yyyymm` is an integer**, not a date — convert before joining to returns.
- **Releases are versioned and periodic.** State the release you used
  (latest tags have been updated as recently as late 2025); results drift
  across releases.
- **Pre-built portfolios beat hand-rolled.** Use `dl_port` deciles for
  long-short spreads rather than re-sorting — it matches the paper's
  methodology and avoids look-ahead in the sort.

## Key signals (10 of 212)

| Signal | Description | Category |
|---|---|---|
| `BM` | Book-to-market | Value |
| `Mom12m` | 12-month momentum (skip last month) | Momentum |
| `AssetGrowth` | Asset growth | Investment |
| `GP` | Gross profitability | Profitability |
| `EP` | Earnings-to-price | Value |
| `Beta` | CAPM beta | Risk |
| `IdioVol` | Idiosyncratic volatility | Risk |
| `Accruals` | Operating accruals | Quality |
| `SUE` | Standardized unexpected earnings | Earnings |
| `ShareIss1Y` | Net share issuance, 1yr | Issuance |

`ap.dl_signal_doc('pandas')` for the full 212 with references.

## Standard operations

- **Long-short spread:** decile 10 − decile 1 from `dl_port("deciles_vw", …)`.
- **Alpha:** regress the long-short series on FF5 (see
  [Ken French](/wiki/datasets/ken-french/)).
- **Signal-zoo test:** does your model's mechanism map onto an existing
  anomaly, or is it genuinely new?
- **Always state** the signals, release/version, sample period, and weighting.

## Citation

*Chen, A. Y., and T. Zimmermann (2022). "Open Source Cross-Sectional Asset
Pricing." Review of Financial Studies. Data from
https://www.openassetpricing.com, release [tag], accessed YYYY-MM-DD.*
