---
title: "Flow of Funds: Financial Accounts of the United States (Z.1)"
description: >-
  How to pull the Federal Reserve's Z.1 Financial Accounts (sector balance
  sheets and flows for the whole US economy) for free with no key, how to read
  the per-table CSV package and series-code grammar, and the levels-vs-flows
  gotchas that bite pipelines.
sidebar:
  label: Flow of Funds (Z.1)
  order: 11
tags: [macro, time-series, free, no-api-key, federal-reserve, data:flow-of-funds]
verified:
  date: 2026-06-09
  level: fetched
  with: live no-key pull of z1_csv_files.zip (586 per-table CSVs, 2025:Q4 release; read household balance-sheet table b101, quarterly 1945:Q4 onward)
  url: https://www.federalreserve.gov/releases/z1/
---

The **Financial Accounts of the United States** (Federal Reserve **Z.1**
statistical release, long known as the **Flow of Funds Accounts**) are the
macro-accounting backbone for the US economy: quarterly balance sheets and
transaction flows for every sector (households and nonprofits, nonfinancial
business, government, each financial sector, and the rest of the world) that
sum to a consistent whole. It is the standard source for household net worth,
sector leverage, credit growth, and who-holds-what. This page is the distilled
access recipe.

- **Cost:** free, no paywall, no key.
- **Coverage:** quarterly, **1945:Q4** onward; released about 10 weeks after
  quarter end, with an earlier `preview` of the upcoming release.
- **Format:** a bulk CSV package (`z1_csv_files.zip`, about 7.5 MB, **586**
  per-table CSVs plus a data dictionary), per-series via the Data Download
  Program, or the same series on FRED.
- **Home:** <https://www.federalreserve.gov/releases/z1/>

## Access

### No key, bulk CSV package (recommended for pipelines)

The download path is **stamped with the release date**, which changes every
quarter; resolve the latest from the release page, or use the stable `preview`
path for the upcoming quarter.

```
https://www.federalreserve.gov/releases/z1/20260319/z1_csv_files.zip   # 2025:Q4 release
https://www.federalreserve.gov/releases/z1/preview/z1_csv_files.zip     # next-quarter preview
```

```python
import io, zipfile, requests, pandas as pd

url = "https://www.federalreserve.gov/releases/z1/20260319/z1_csv_files.zip"
z = zipfile.ZipFile(io.BytesIO(requests.get(url).content))
# Each table is its own CSV under csv/; b101 is households & nonprofits.
hh = pd.read_csv(z.open("csv/b101.csv"))
```

### Data Download Program (per series)

For a handful of series rather than whole tables, the DDP at
`https://www.federalreserve.gov/datadownload/` (release `Z1`) emits CSV/XML for
a selected set; series are addressed by mnemonic (e.g. `FL152000005.Q`).

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the Z.1 PDF. Verified against the live
package on the date above.

- **586 separate CSVs, one per table.** The zip is not one tidy file: you pick
  the table (`b101` household balance sheet, `b103` nonfinancial corporate,
  `l108` and friends, etc.). A `data_dictionary/` folder in the package maps
  table and series codes.
- **Series-code grammar.** Columns are mnemonics like `FL152000005.Q`: a
  two-letter prefix (`FL` = level / amounts outstanding, `LM` = level at market
  value, `FU` = unadjusted flow, `FA` = flow at a seasonally adjusted annual
  rate, `FR` = revaluation, `FV` = other volume change), then a six-or-more
  digit sector-plus-instrument code, then a `.Q` / `.A` frequency suffix. Decode
  with the Fed's series structure (the `data_dictionary/` folder spells out each
  series); do not guess from the number.
- **Levels vs flows are different tables.** `b` and `l` tables are **levels**
  (stocks); `f` and `fu` tables are **flows** (transactions). Do not difference a
  level series and call it a flow.
- **Change in a level is not the flow.** A level change = transactions (`f`) +
  revaluations (`FR`) + other volume changes. Use the `f`-series when you mean
  actual flows; price changes are netted out there.
- **Flows are seasonally adjusted annual rates.** The `f`-tables report SAAR;
  levels are not annualized. Read the table header before scaling.
- **Households and nonprofits are lumped.** The headline household table (sector
  15) combines households with nonprofit organizations; a nonprofit-only split
  exists in separate tables if you need households alone.
- **The bulk URL date moves.** The dated path (`/20260319/`) is only good for
  one release. Pin it for reproducibility, or script resolving the latest date
  from the release page.

## Tables you actually need

| Table | Sector / content | Type |
|---|---|---|
| `b101` | Households and nonprofits balance sheet (net worth) | levels |
| `b103` | Nonfinancial corporate business balance sheet | levels |
| `l108` | Households credit-market instruments | levels |
| `f101` | Households flows | flows |
| `s` tables | Sector income and saving statements | mixed |
| `data_dictionary/` | Table and series-code descriptions | reference |

## Standard operations

- **Household net worth / wealth:** read `b101`; state real vs nominal and the
  quarter, since the series is revised.
- **Credit and leverage:** combine the relevant `l` level table with the `f`
  flow table; never infer flows by differencing levels.
- **Sector consistency:** the accounts are designed to sum across sectors; use
  that as a sanity check rather than mixing in unrelated sources.
- **Pin the release.** Record the dated release path (or "preview") and your
  access date; every quarter revises history.

## Citation

Board of Governors of the Federal Reserve System. *Financial Accounts of the
United States* (Z.1 statistical release). Washington: Federal Reserve Board.
Cite the specific release date and your access date.
