---
title: FRED — Federal Reserve Economic Data
description: >-
  How to pull macro and financial time series from FRED for free — including
  the no-API-key fallback, the series you actually need for finance and macro
  calibration, and the gotchas that bite automated pipelines.
sidebar:
  label: FRED
  order: 1
tags: [macro, time-series, free, no-api-key, federal-reserve]
verified:
  date: 2026-05-16
  with: live no-key CSV fetch (GDP, USREC, SP500)
---

**FRED** (Federal Reserve Economic Data, St. Louis Fed) is the single most
useful free source for macro and financial time series: ~800,000 series —
output, prices, rates, spreads, the cross-section of Treasury yields, recession
indicators — with a clean API and, crucially, a **no-authentication CSV
fallback**. It is the default calibration source the
[ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline reaches for
when a model needs macro moments. This page is the distilled access recipe.

- **Cost:** free, no paywall.
- **API key:** free, optional (a fallback works without one).
- **Coverage:** US macro/financial aggregates, many international series.
- **Home:** <https://fred.stlouisfed.org/> ·
  **API docs:** <https://fred.stlouisfed.org/docs/api/fred/>

## Access

### Option 1 — No API key (fallback, zero setup)

Any series has a direct CSV endpoint that needs no authentication:

```
https://fred.stlouisfed.org/graph/fredgraph.csv?id=GDP
```

```python
import pandas as pd
gdp = pd.read_csv(
    "https://fred.stlouisfed.org/graph/fredgraph.csv?id=GDP",
    parse_dates=["observation_date"], index_col="observation_date",
)
```

This works for most series and is the right default for a pipeline that
shouldn't depend on a key being present. Use it unless you need search,
metadata, vintages, or bulk pulls.

### Option 2 — `fredapi` (preferred when a key is available)

Get a free key at
<https://fred.stlouisfed.org/docs/api/api_key.html> and store it in the
environment (e.g. `.env` as `FRED_API_KEY=...`) — never hard-code it.

```python
# pip install fredapi python-dotenv
import os
from dotenv import load_dotenv
from fredapi import Fred

load_dotenv()
fred = Fred(api_key=os.environ["FRED_API_KEY"])
gdp = fred.get_series("GDP")
```

### Option 3 — Direct REST API

```
https://api.stlouisfed.org/fred/series/observations?series_id=GDP&api_key={KEY}&file_type=json
```

Useful for series search (`/fred/series/search`), release calendars, and
ALFRED vintage (real-time) data that `fredapi` doesn't expose as conveniently.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the FRED docs. Verified against live
data on the date above.

- **`SP500` is price-only and ~10 years deep.** The series begins ~10 years
  back (confirmed: first observation 2016-05-16) and is an *index level*, not
  total return. For asset-pricing work use the
  [Ken French](/wiki/datasets/) market series or CRSP instead — never `SP500`
  for long-horizon return studies.
- **Revisions.** `GDP`/`GDPC1` are revised for years. If your result depends
  on what was *known at the time*, use ALFRED vintages, not the latest series.
- **Mixed frequencies.** Don't silently merge daily and monthly series;
  resample deliberately and document the convention.
- **Discontinued series.** Some IDs stop updating or are superseded; check the
  last observation date before trusting a "current" value.
- **Rate limits.** The keyed API rate-limits bulk pulls — batch and cache;
  the CSV fallback is fine for low-volume use.
- **Units & seasonal adjustment.** Many series are indices or seasonally
  adjusted (`SA`) variants — read the series page; don't assume levels or NSA.
- **CSV column name.** The no-key endpoint returns `observation_date` as the
  date column (not `DATE`); parse it explicitly as shown above.

## Series you actually need

FRED has ~800,000 series; for finance and macro calibration the recurring set
is small. Search the site or the API for anything else.

| Series ID | Description | Frequency |
|-----------|-------------|-----------|
| `GDP` | Nominal GDP | Quarterly |
| `GDPC1` | Real GDP | Quarterly |
| `CPIAUCSL` | CPI, all urban consumers | Monthly |
| `PCEPILFE` | Core PCE inflation | Monthly |
| `FEDFUNDS` | Effective fed funds rate | Monthly |
| `GS10` | 10-year Treasury yield | Monthly |
| `TB3MS` | 3-month T-bill rate | Monthly |
| `BAA10Y` | Baa corporate – 10yr Treasury spread | Monthly |
| `UNRATE` | Unemployment rate | Monthly |
| `PCE` | Personal consumption expenditures | Monthly |
| `VIXCLS` | CBOE VIX | Daily |
| `SP500` | S&P 500 index (price-only, ~10yr — see gotchas) | Daily |
| `USREC` | NBER recession indicator (0/1) | Monthly |

## Standard operations

- **Moments:** report mean, std, and autocorrelation of *growth rates* (log
  differences), not levels, when calibrating to a stationary model.
- **Business-cycle stats:** HP-filter or band-pass the cyclical component;
  use `USREC` for recession dating.
- **Term structure / spreads:** combine yield series (`GS10`, `TB3MS`,
  `BAA10Y`) rather than hunting for a pre-computed spread.
- **Real vs. nominal:** deflate with `CPIAUCSL` or the PCE deflator; be
  explicit about which.
- **Always state the sample period and frequency** when reporting any moment —
  FRED series are revised and extended, so an unstated window is not
  reproducible.

## Citation

Cite the series and provider, e.g.: *U.S. Bureau of Economic Analysis, Gross
Domestic Product [GDP], retrieved from FRED, Federal Reserve Bank of St.
Louis; https://fred.stlouisfed.org/series/GDP, accessed YYYY-MM-DD.* Each
series page lists its original source and the exact suggested citation.
