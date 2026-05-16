---
title: Ken French Data Library — factors & test portfolios
description: >-
  How to pull Fama-French factors, momentum, and sorted test portfolios for
  free — the percent-not-decimal trap, the header-rows trap, and the
  monthly/annual-in-one-file trap, for automated pipelines.
sidebar:
  label: Ken French
  order: 3
verified:
  date: 2026-05-16
  with: live CSV-zip fetch (F-F_Research_Data_Factors, 200, monthly-fresh)
---

The **Ken French Data Library** (Tuck/Dartmouth) is the canonical free source
for asset-pricing factors and test assets: FF3/FF5/FF6 factors, momentum,
industry portfolios, and 100+ characteristic-sorted portfolio sets. No
authentication, updated monthly. It is what the
[ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline uses to
compute alphas and build test assets. This page is the distilled recipe.

- **Cost:** free, no key, no auth.
- **Cadence:** updated monthly (the zip I fetched was dated within the month).
- **Coverage:** US + international factors, sorts, industry portfolios.
- **Home:** <https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html>

## Access

### Option 1 — `pandas-datareader` (preferred)

```python
# pip install pandas-datareader
import pandas_datareader.data as web

ff3 = web.DataReader("F-F_Research_Data_Factors", "famafrench", start="1963")
ff3[0].head()   # dict of DataFrames; [0] = monthly: Mkt-RF, SMB, HML, RF
```

### Option 2 — Direct CSV zip (no package)

```python
import pandas as pd, zipfile, io, requests

url = ("https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/"
       "ftp/F-F_Research_Data_Factors_CSV.zip")
z = zipfile.ZipFile(io.BytesIO(requests.get(url).content))
df = pd.read_csv(z.open(z.namelist()[0]), skiprows=3)
```

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the library site. Verified against a
live download on the date above.

- **Returns are in PERCENT, not decimal.** `Mkt-RF = 1.23` means 1.23%, not
  123%. Divide by 100 before compounding or regressing. This is the single
  most common error against this data.
- **CSV has a multi-line text header.** Numeric data starts after a preamble —
  `skiprows=3` for the factors file, but it varies by dataset; never assume,
  inspect.
- **One file often holds multiple tables.** Monthly *and* annual tables are
  stacked in the same CSV, separated by blank lines and a second header.
  Read only to the first blank line, or split deliberately — a naive
  `read_csv` silently concatenates them.
- **Dates are `YYYYMM` integers** for monthly files (e.g. `202401`), not
  parseable dates. Convert explicitly.
- **Value- vs equal-weighted.** Many portfolio sets ship both; the file/column
  must be stated or the result isn't reproducible.
- **`pandas-datareader` returns a dict**, not a DataFrame — `[0]` is monthly,
  `[1]` annual, with a `'DESCR'` key documenting the build.

## Key datasets

| Dataset | Contents |
|---|---|
| `F-F_Research_Data_Factors` | Mkt-RF, SMB, HML, RF (monthly/annual) |
| `F-F_Research_Data_5_Factors_2x3` | + RMW, CMA |
| `F-F_Momentum_Factor` | MOM |
| `25_Portfolios_5x5` | Size × B/M test assets |
| `100_Portfolios_10x10` | Size × B/M, fine grid |
| `6_Portfolios_2x3` | The sorts used to build the factors |

100+ more on the site (industry, international, single-sort characteristics).

## Standard operations

- **Factor models:** regress excess returns on FF3/FF5/FF6.
- **GRS test:** joint test that a set of alphas is zero (use the matching
  test-portfolio set).
- **Sharpe ratios:** mean/std of factor returns, annualized appropriately.
- **Fama-MacBeth:** cross-sectional regressions on portfolio test assets.
- **Always report** sample period and value- vs equal-weighting.

## Citation

*Fama, E. F., and K. R. French. Data from the Kenneth R. French Data Library,
Tuck School of Business, Dartmouth College;
https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html,
accessed YYYY-MM-DD.* Cite the originating papers (Fama-French 1993, 2015;
Carhart 1997) as appropriate.
