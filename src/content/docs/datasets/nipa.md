---
title: "NIPA: National Income and Product Accounts (BEA)"
description: >-
  How to pull the US National Income and Product Accounts (GDP and its
  components) from the BEA for free, the no-key static-file fallback as well as
  the API, and the units, revision, and table-vs-series gotchas that bite
  pipelines.
sidebar:
  label: NIPA (BEA)
  order: 13
tags: [macro, time-series, free, no-api-key, bea, data:nipa]
verified:
  date: 2026-06-09
  level: fetched
  with: live no-key pull of BEA NipaDataA.txt (annual, from 1929) and NipaDataQ.txt (quarterly, from 1947Q1); format SeriesCode,Period,Value
  url: https://apps.bea.gov/national/Release/TXT/NipaDataA.txt
---

The **National Income and Product Accounts (NIPA)** are the US Bureau of
Economic Analysis's official accounts for **GDP and its components**: output,
consumption, investment, government, trade, income, saving, and the price
deflators. They are the primary source for US macro aggregates at higher detail
than FRED's headline series. This page is the distilled access recipe.

- **Cost:** free, no paywall.
- **API key:** free, optional (a no-key static-file fallback exists).
- **Coverage:** annual from **1929**, quarterly from **1947:Q1**; revised
  regularly, with annual and comprehensive revisions.
- **Home:** <https://www.bea.gov/itable/national-gdp-and-personal-income> ·
  **API docs:** <https://apps.bea.gov/api/signup/>

## Access

### Option 1: No API key (static all-series files)

BEA publishes the entire NIPA series set as flat text, no key required:

```
https://apps.bea.gov/national/Release/TXT/NipaDataA.txt   # annual (~12 MB)
https://apps.bea.gov/national/Release/TXT/NipaDataQ.txt   # quarterly (~35 MB)
```

```python
import pandas as pd

url = "https://apps.bea.gov/national/Release/TXT/NipaDataQ.txt"
# Values carry thousands separators inside quotes, e.g. "244,142".
nipa = pd.read_csv(url, thousands=",")
nipa.columns = ["SeriesCode", "Period", "Value"]   # header is %SeriesCode,Period,Value
gdp = nipa[nipa.SeriesCode == "A191RC"]             # nominal GDP, current dollars
```

This is the right default for a pipeline that should not depend on a key.

### Option 2: BEA API (preferred for specific tables)

Get a free key at <https://apps.bea.gov/api/signup/> and store it in the
environment; never hard-code it. The `NIPA` dataset endpoint takes a
`TableName` (e.g. `T10101` for the percent-change-in-real-GDP table) and a
frequency.

```python
import os, requests
key = os.environ["BEA_API_KEY"]
r = requests.get("https://apps.bea.gov/api/data", params={
    "UserID": key, "method": "GetData", "datasetname": "NIPA",
    "TableName": "T10105", "Frequency": "Q", "Year": "ALL", "ResultFormat": "JSON",
})
```

NIPA aggregates are also mirrored on [FRED](/wiki/datasets/fred/) (e.g. `GDP`,
`GDPC1`, `PCE`), which is simpler when you only need a few headline series.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the BEA docs. Verified against the live
static files on the date above.

- **Series code, not table, in the flat files.** `NipaData{A,Q}.txt` are long
  format (`SeriesCode,Period,Value`), keyed by BEA **series codes** (e.g.
  `A191RC` nominal GDP, `A191RX` real GDP, `A001RC` national income). The
  human-friendly *tables* (T10101 etc.) only come through the API or iTable;
  map codes to tables with the BEA series register.
- **Values carry thousands commas, quoted.** A value is written `"244,142"`.
  Parse with `thousands=","` or it imports as text.
- **Nominal vs real vs index suffix.** The trailing letters encode the unit:
  `...RC` current dollars (nominal), `...RX` chained real dollars, `...RG` /
  `...RL` index or percent forms. Do not mix codes across unit conventions.
- **Real series are chained, not additive.** Chained-dollar components do **not**
  sum to the chained aggregate (the chaining residual). For decompositions use
  contributions-to-growth tables, not arithmetic on real levels.
- **Revisions are large and routine.** NIPA has monthly third estimates, annual
  revisions, and comprehensive revisions that can reweight history. For
  point-in-time work use the BEA vintage / "real-time" archive, not the latest
  file.
- **Quarterly often reported as annualized rates.** Many quarterly growth and
  flow series are seasonally adjusted annual rates; check the table definition
  before comparing to a level.
- **Period format differs by frequency.** Annual `Period` is a bare year (e.g.
  `1929`); quarterly appends the quarter (`1947Q1`). Parse per file, do not
  assume one format.

## Series you actually need

| Series code | Description | Unit |
|---|---|---|
| `A191RC` | Gross Domestic Product | current $ |
| `A191RX` | Real GDP (chained) | chained $ |
| `A001RC` | National income | current $ |
| `DPCERC` | Personal consumption expenditures | current $ |
| `A006RC` | Gross private domestic investment | current $ |
| `A822RC` | Government consumption and investment | current $ |
| `DPCERG` | PCE price index | index |

## Standard operations

- **Growth rates:** compute on the chained real series (`...RX`); for component
  contributions use BEA's contributions tables, not differences of real levels.
- **Deflators:** divide nominal by real, or use the published price indexes
  (`DPCERG` for PCE).
- **Point-in-time:** use BEA vintage data when the result depends on what was
  known at the time; the latest file embeds all later revisions.
- **State sample and frequency** with any moment; the files are revised and
  extended.

## Citation

U.S. Bureau of Economic Analysis. *National Income and Product Accounts.*
Suitland, MD: BEA. Cite the specific table or series code and your access date,
e.g. *Bureau of Economic Analysis, Gross Domestic Product [A191RC], accessed
YYYY-MM-DD.*
