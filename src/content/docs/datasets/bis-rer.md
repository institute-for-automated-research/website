---
title: "BIS Effective Exchange Rate Indices (EER)"
description: >-
  How to pull the BIS nominal and real effective exchange rate indices from the
  no-key BIS statistics API, and the gotchas that bite pipelines (real vs
  nominal, narrow vs broad basket, an up-move means appreciation, the index is
  rebased not a level).
sidebar:
  label: BIS EER
  order: 44
tags: [macro, exchange-rates, international, time-series, free, no-api-key, data:bis-rer]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-key BIS stats API pull of WS_EER (real & nominal, broad-64 and narrow-27 baskets, US, monthly)
  access: free
---

**The BIS Effective Exchange Rate (EER) indices** are trade-weighted exchange
rate indices published by the Bank for International Settlements for around 60
economies. Each index averages a currency against a basket of trading partners,
weighted by bilateral trade. They come in **nominal** (NEER) and **real**
(REER, CPI-deflated) flavors, and in a **broad** basket (64 economies) and a
**narrow** basket (27 economies). The data is free and public. Used in, for
example,
[Kremens, Martin & Varela](/wiki/papers/jf/2025/kremens-long-horizon-exchange-rate-2025/),
where the BIS real effective exchange rate is the RER predictor variable in the
long-horizon exchange-rate regressions.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** ~60 economies. Narrow basket monthly from 1964; broad basket
  monthly from 1994. Real (CPI-based) and nominal.
- **Home:** <https://www.bis.org/statistics/eer.htm>

## Access

The BIS statistics API serves the EER dataflow (`WS_EER`) as CSV with no
authentication. The series key is `FREQ.EER_TYPE.EER_BASKET.REF_AREA`:

```bash
# Real, broad (64-economy) basket, United States, monthly, last 12 obs
curl -sL \
  "https://stats.bis.org/api/v2/data/dataflow/BIS/WS_EER/1.0/M.R.B.US?lastNObservations=12&format=csv"

# Nominal, narrow (27-economy) basket, full history
curl -sL \
  "https://stats.bis.org/api/v2/data/dataflow/BIS/WS_EER/1.0/M.N.N.US?format=csv"
```

The dimension codes are: `FREQ` = `M` (monthly); `EER_TYPE` = `R` (real,
CPI-deflated) or `N` (nominal); `EER_BASKET` = `B` (broad, 64 economies) or `N`
(narrow, 27 economies); `REF_AREA` = the ISO-style economy code (`US`, `XM` for
the euro area, and so on). Returned rows carry `TIME_PERIOD` (`YYYY-MM`) and
`OBS_VALUE` (the index level). Bulk CSV for the whole dataflow is also linked
from the EER landing page.

### Load in Python

```python
import pandas as pd, io, requests

url = ("https://stats.bis.org/api/v2/data/dataflow/BIS/WS_EER/1.0/"
       "M.R.B.US?format=csv")
df = pd.read_csv(io.StringIO(requests.get(url, timeout=60).text))
df["TIME_PERIOD"] = pd.PeriodIndex(df["TIME_PERIOD"], freq="M")
reer = df.set_index("TIME_PERIOD")["OBS_VALUE"]  # real broad US, index level
```

## Gotchas (the ones that bite pipelines)

- **Real and nominal are different series; pick deliberately.** The real EER
  deflates the nominal index by relative CPI, so it moves with inflation
  differentials, not just nominal FX. A paper using "the BIS RER" wants
  `EER_TYPE=R`; do not substitute the nominal index. They diverge materially
  over long horizons.
- **Broad versus narrow basket changes both the level and the history.** The
  broad (64-economy) basket starts in 1994; the narrow (27-economy) basket runs
  back to 1964 but covers fewer partners. They are separate indices with
  different weights and base periods, so do not splice the narrow history onto
  the broad series to get a longer sample. Choose one basket and state which.
- **An increase means appreciation.** The BIS convention is that a *rise* in the
  index is an appreciation of the reference economy's currency (it buys more
  foreign goods/currency, trade-weighted). This is the opposite sign of some
  bilateral quote conventions; confirm the direction before signing your
  regressor.
- **It is a rebased index, not a price or a rate.** Values are index numbers
  normalized to a base year (currently averaging 100 over a recent reference
  period), and BIS periodically rebases and re-weights. Work in log changes or
  ratios, and re-pull rather than caching a level that may be rebased on the
  next release.
- **Weights are updated in vintages.** Trade weights are revised roughly every
  three years and applied with a chaining method, so the historical index is not
  frozen. For exact reproduction, record the access date and the basket; a pull
  a year later can differ in back-history.
- **Coverage and start dates differ by economy.** Not every economy has both
  baskets or the full history; emerging-market series often start later. Check
  the first non-missing `TIME_PERIOD` for your `REF_AREA` rather than assuming
  the basket's nominal start date.

## Dimensions (WS_EER)

| Dimension | Code | Meaning |
|---|---|---|
| `FREQ` | `M` | Monthly (the only frequency) |
| `EER_TYPE` | `R` / `N` | Real (CPI-deflated) / Nominal |
| `EER_BASKET` | `B` / `N` | Broad (64 economies) / Narrow (27 economies) |
| `REF_AREA` | e.g. `US`, `XM`, `JP` | Reference economy |

## Citation

Cite the BIS, the EER series (type, basket, economy), the URL, and the access
date, for example: *Bank for International Settlements, Effective Exchange Rate
Indices (real, broad basket, United States), retrieved from
https://www.bis.org/statistics/eer.htm, accessed YYYY-MM-DD.* Record the
type (real/nominal), basket (broad/narrow), and the vintage so the index is
reproducible.
