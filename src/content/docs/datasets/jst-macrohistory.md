---
title: "JST Macrohistory Database"
description: >-
  How to pull the Jorda-Schularick-Taylor long-run macro-financial panel (18
  advanced economies, annual, 1870 onward) for free as a single spreadsheet,
  what the key series mean, and the subset-citation and crisis-dummy gotchas
  that bite pipelines.
sidebar:
  label: JST Macrohistory
  order: 12
tags: [macro, banks, panel-data, time-series, free, no-api-key, academic, data:jst-macrohistory]
verified:
  date: 2026-06-09
  level: fetched
  with: live no-key pull of JSTdatasetR6.xlsx (release R6; 2718 rows, 18 countries, 1870-2020, 59 series incl. crisisJST, eq_tr, housing_tr, debtgdp)
  url: https://www.macrohistory.net/database/
---

The **Jorda-Schularick-Taylor (JST) Macrohistory Database** is a long-run
cross-country macro-financial panel: **18 advanced economies, annual, 1870 to
2020** (release R6), assembled in one spreadsheet. It is the standard source for long-run
work on credit, banking crises, house prices, returns on the major asset
classes, and business-cycle facts. This page is the distilled access recipe.

- **Cost:** free, no paywall, no key (academic, freely distributed).
- **Coverage:** 18 advanced economies, annual, **1870-2020** in the current
  release (R6); 59 variables per country-year.
- **Format:** a single Excel file (`JSTdatasetR6.xlsx`, about 1.4 MB, one
  `Sheet1`) or the same as Stata (`JSTdatasetR6.dta`).
- **Home:** <https://www.macrohistory.net/database/>

## Access

### No key, direct download

The download links carry a cache-busting token (`?t=...`); the host serves the
current release at a stable file name. Pull the page once to grab the live link,
or use the path below.

```
https://www.macrohistory.net/app/download/9834512569/JSTdatasetR6.xlsx
https://www.macrohistory.net/app/download/9834512469/JSTdatasetR6.dta
```

```python
import pandas as pd

jst = pd.read_excel("JSTdatasetR6.xlsx")   # one sheet, tidy country-year panel
jst = jst.set_index(["country", "year"]).sort_index()
jst.loc["USA", "debtgdp"].dropna().tail()  # private credit / GDP
```

The panel is already tidy: one row per `country` x `year`, with `iso` and `ifs`
country codes, so it merges cleanly onto other country panels.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the workbook. Verified against the live
R6 file on the date above.

- **Cite the right subset, not just the headline paper.** The base panel cites
  Jorda, Schularick and Taylor (2017). The **asset-return** columns (`eq_tr`,
  `housing_tr`, `bond_tr`, `bill_rate`, and the `_interp` variants) require
  citing the 2019 *QJE* "Rate of Return on Everything" paper, and the bank
  balance-sheet ratios (`lev`, `ltd`, `noncore`) require the 2021 *RES* paper.
  Using a column without its source citation is the most common JST mistake.
- **Two crisis dummies, and they differ.** `crisisJST` is the current
  systemic-banking-crisis indicator; `crisisJST_old` is the earlier coding.
  Pick one deliberately and say which; results on crisis prediction move with
  the choice.
- **Real vs nominal is encoded in the name.** `rgdpmad`/`rgdpbarro` are real
  (different source vintages, Maddison vs Barro), `gdp` is nominal, `hpnom` is a
  *nominal* house-price index. Deflate with `cpi` yourself when you need real
  series; do not assume.
- **Returns are total returns where marked `_tr`.** `eq_tr` and `housing_tr` are
  total returns (capital gain plus yield); `eq_capgain` / `housing_capgain` are
  price-only. The `_ipolated` / `_interp` columns fill gaps by interpolation,
  which you may want to exclude.
- **Release versions are not interchangeable.** The file name carries the
  release (R6); country coverage, series, and back-revisions change across
  releases. Pin the release number in your replication, not just "JST".
- **Coverage is unbalanced early.** Many series start well after 1870 for
  several countries (wars, data gaps); the panel is not rectangular. Drop NaN per
  series rather than assuming a balanced panel.

## Series you actually need

| Column | Meaning |
|---|---|
| `rgdpmad`, `gdp` | Real GDP (Maddison), nominal GDP |
| `cpi` | Consumer price index (deflator) |
| `tloans`, `tmort`, `thh`, `tbus` | Total / mortgage / household / business loans |
| `debtgdp` | Private credit to GDP |
| `hpnom` | Nominal house price index |
| `stir`, `ltrate` | Short-term and long-term interest rates |
| `eq_tr`, `housing_tr`, `bond_tr`, `bill_rate` | Total returns on equity, housing, bonds, bills |
| `crisisJST` | Systemic banking-crisis dummy |
| `lev`, `ltd`, `noncore` | Bank leverage, loan-to-deposit, noncore funding |

## Standard operations

- **Credit and crises:** the canonical use is predicting crises or output from
  `debtgdp` growth; choose one crisis dummy and report it.
- **Returns on everything:** the `_tr` columns give comparable long-run real
  returns across asset classes once deflated by `cpi`; cite the 2019 QJE paper.
- **Cross-country panels:** index by `country` x `year`; use `iso` for merges.
- **Pin the release** (R6) and access date for reproducibility.

## Citation

Jorda, Oscar, Moritz Schularick, and Alan M. Taylor. 2017. "Macrofinancial
History and the New Business Cycle Facts." In *NBER Macroeconomics Annual 2016*,
volume 31, edited by Martin Eichenbaum and Jonathan A. Parker. Chicago:
University of Chicago Press. Add the 2019 *Quarterly Journal of Economics*
"Rate of Return on Everything" citation when using the return series, and the
2021 *Review of Economic Studies* citation when using the bank balance-sheet
ratios.
