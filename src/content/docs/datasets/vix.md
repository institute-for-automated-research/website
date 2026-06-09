---
title: "CBOE Volatility Index (VIX)"
description: >-
  How to pull the full daily VIX history as a no-key CSV from Cboe, plus the
  gotchas that bite pipelines (the 1990-2002 backfill vs the original VXO, flat
  early OHLC, annualized-percentage units, and the family of look-alike vol
  indices).
sidebar:
  label: VIX
  order: 34
tags: [market, volatility, options, time-series, equities, free, no-api-key, data:vix]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key CSV fetch of the full VIX daily history (cdn.cboe.com VIX_History.csv, 9202 rows, 1990-01-02 to 2026-06-08)
  access: free
---

The **CBOE Volatility Index (VIX)** is Cboe Global Markets' measure of the
market's expectation of 30-day forward volatility of the S&P 500, computed from
a strip of SPX option prices. It is quoted as an annualized percentage (a VIX
of 20 implies about 20% annualized expected volatility). The full daily history
is published free by Cboe with no API key. Used in, for example,
[Stavrakeva, Tang & Sun](/wiki/papers/jf/2026/stavrakeva-dollar-great-recession-2026/),
where log VIX is a dependent-variable proxy for risk aversion in the response
to forward-guidance easings.

- **Cost:** free, public (end-of-day history).
- **API key:** none required.
- **Coverage:** daily, 1990-01-02 to present. Values before 2003 are
  backfilled with the current methodology (see Gotchas).
- **Units:** annualized expected volatility, in percentage points.
- **Home:** <https://www.cboe.com/tradable_products/vix/>

## Access

Cboe serves the entire history as a single no-key CSV from its CDN. Columns are
`DATE,OPEN,HIGH,LOW,CLOSE`, with `DATE` formatted `M/D/YYYY`:

```bash
# No key required; full daily history in one file
curl -sL "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv" -o VIX_History.csv
```

The same CDN path serves the sibling volatility indices by swapping the file
name, for example `VIX9D_History.csv` (9-day), `VIX3M_History.csv` (3-month,
formerly VXV), `VVIX_History.csv` (vol-of-vol), `VXN_History.csv` (Nasdaq-100),
and `VXD_History.csv` (Dow). Confirm you are pulling the index your analysis
names.

### Load in Python

```python
import pandas as pd

url = "https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv"
vix = pd.read_csv(url, parse_dates=["DATE"])
vix = vix.rename(columns=str.lower).set_index("date").sort_index()

# The end-of-day level most analyses use is the CLOSE column.
close = vix["close"]
```

## Gotchas (the ones that bite pipelines)

- **The 1990-2002 values are a backfill, not the index that traded then.** Cboe
  redefined VIX in 2003 to a model-free, variance-swap-style formula on a strip
  of SPX options. The pre-2003 portion of the history file is that new formula
  applied retroactively. The index that was actually disseminated in real time
  from 1993 to 2003 was based on at-the-money S&P 100 (OEX) implied volatility
  and now trades under the ticker **VXO**. If your identification depends on
  what investors observed in real time before 2003, you want VXO, not the
  backfilled VIX.
- **Early OHLC is flat.** From 1990-01-02 through the end of 1991 the `OPEN`,
  `HIGH`, `LOW`, and `CLOSE` columns are all equal to the close; only the close
  is meaningful. Distinct intraday open/high/low values begin 1992-01-02. Do
  not compute intraday ranges over the 1990-1991 rows.
- **It is a percentage, not a price.** VIX is annualized expected volatility in
  percentage points and a 30-calendar-day forward measure. Do not treat a level
  change as a return, and do not annualize it again.
- **Many look-alike indices share the path.** VIX9D, VIX3M (VXV), VVIX, VXN,
  VXD, RVX, and the original VXO are distinct series. A wrong file name silently
  returns a different index with the same column layout.
- **No official VIX before 1990.** For longer volatility histories use realized
  volatility or VXO; do not extend the VIX series synthetically without saying
  so.
- **FRED `VIXCLS` is a close-only mirror.** If you pull VIX from FRED, cite FRED
  and note it carries the close only. The canonical primary source with OHLC is
  the Cboe file above.
- **Free history is end-of-day.** Real-time, intraday, and the underlying
  option-level data are licensed Cboe DataShop products. The no-key file is the
  daily history only.

## Reference

| Field | Value |
|-------|-------|
| URL | `https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv` |
| Format | CSV: `DATE,OPEN,HIGH,LOW,CLOSE`; `DATE` is `M/D/YYYY` |
| Frequency | Daily |
| Start | 1990-01-02 (current methodology backfilled to here) |
| Units | Annualized expected volatility, percentage points |
| Methodology change | 2003 (SPX strip; pre-2003 real-time index is VXO) |
| Key required | No |

## Citation

Cite Cboe Global Markets, the index name, the retrieval URL, and the access
date, for example: *Cboe Global Markets, "Cboe Volatility Index (VIX),"
historical data retrieved from
https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv,
accessed YYYY-MM-DD.* If you use the pre-2003 portion, state in your data
description that those values are the current methodology applied
retroactively, and cite VXO separately if you need the real-time pre-2003
index.
