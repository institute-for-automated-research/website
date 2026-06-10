---
title: "FHFA House Price Index (HPI)"
description: >-
  How to pull the FHFA repeat-sales house price index from the no-key master
  CSV, the ZIP-code developmental indexes, and the gotchas that bite pipelines
  (purchase-only vs all-transactions, NSA vs SA, the ZIP files are annual).
sidebar:
  label: FHFA HPI
  order: 40
tags: [housing, prices, mortgage, free, no-api-key, time-series, data:fhfa-hpi]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of the FHFA HPI master file (fhfa.gov/hpi/download/monthly/hpi_master.csv, ~17 MB, 184,807 rows)
  access: free
---

**The FHFA House Price Index (HPI)** is a repeat-sales measure of single-family
house price changes published by the Federal Housing Finance Agency, built from
repeat mortgage transactions on the same properties. It is reported at the
national, census-division, state, metro-area, county, and ZIP-code levels, in
purchase-only and all-transactions flavors. The data is free and public. Used
in, for example,
[Heitz, Martin & Ufier](/wiki/papers/jf/2026/heitz-bank-monitoring-onsite-inspections-2026/),
where a ZIP-level HPI serves as a time-varying collateral-value proxy in the
moral-hazard analysis (Tables IV and V).

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** USA and census divisions from 1991 (monthly) and 1975
  (quarterly); states, metros, counties; ZIP-code developmental indexes
  (annual). Purchase-only and all-transactions; seasonally adjusted and not.
- **Home:** <https://www.fhfa.gov/data/hpi>

## Access

The master file appends every quarterly and monthly series into one CSV, no
authentication:

```bash
# FHFA HPI master file: all geographies and flavors, no key
curl -sL -o hpi_master.csv \
  "https://www.fhfa.gov/hpi/download/monthly/hpi_master.csv"
```

The columns are `hpi_type, hpi_flavor, frequency, level, place_name, place_id,
yr, period, index_nsa, index_sa, rstderr, note`. Filter on `hpi_flavor`
(`purchase-only`, `all-transactions`, `expanded-data`), `frequency` (`monthly`,
`quarterly`), and `level` (`USA or Census Division`, `State`, `MSA`, and so on)
to pull the series you want.

The **ZIP-code indexes** are separate developmental files, and they are
**annual**, not monthly or quarterly:

```bash
# Five-digit ZIP, all-transactions developmental index (annual, NSA)
curl -sL -o hpi_at_zip5.xlsx \
  "https://www.fhfa.gov/hpi/download/annual/hpi_at_zip5.xlsx"
# Three-digit ZIP variant:
curl -sL -o hpi_at_zip3.xlsx \
  "https://www.fhfa.gov/hpi/download/annual/hpi_at_zip3.xlsx"
```

### Load in Python

```python
import pandas as pd

df = pd.read_csv("hpi_master.csv")
# Purchase-only, monthly, national series:
us = df[(df.hpi_flavor == "purchase-only")
        & (df.frequency == "monthly")
        & (df.place_name == "United States")]
# index_nsa is the level; build returns within a (place_id, flavor, frequency).
```

## Gotchas (the ones that bite pipelines)

- **Purchase-only and all-transactions are different indexes.** Purchase-only
  uses sales pairs from Fannie/Freddie purchase mortgages; all-transactions
  adds appraisal values from refinances and runs at lower frequency for finer
  geographies. They diverge, especially in stressed periods. Pick one flavor
  deliberately and do not splice them.
- **The ZIP-code indexes are annual and developmental.** FHFA publishes
  five-digit and three-digit ZIP indexes only at **annual** frequency, labelled
  developmental and not seasonally adjusted. There is no official monthly
  five-digit-ZIP FHFA series; a paper using "monthly ZIP-level HPI" has either
  interpolated the annual index or mapped a higher-frequency geography to ZIPs.
  Do not expect to download a monthly ZIP file from FHFA.
- **NSA versus SA columns.** The master file carries both `index_nsa` and
  `index_sa`; the seasonally adjusted column is populated only for some series.
  Choose the column to match your use and check it is non-empty for that series.
- **It is an index, not a price level.** Values are index numbers normalized to
  a base period (the purchase-only series is set to 100 at 1991Q1; other
  flavors and vintages use a different base), not dollar prices. Work in returns
  or ratios, and confirm the base before comparing across series.
- **Repeat-sales coverage skews to conforming mortgages.** The index is built
  from Fannie Mae and Freddie Mac loan data (and, for all-transactions,
  appraisals), so it underweights cash, jumbo, and non-conforming activity.
  This biases coverage in high-price and investor-heavy areas.
- **Small geographies are noisy and revised.** County and ZIP indexes rest on
  thin transaction counts; `rstderr` in the master file flags the standard
  error, and back-history is revised as new pairs arrive. Carry the standard
  error and re-pull rather than caching a small-area series indefinitely.

## Geography levels (master file)

| `level` value | Geography |
|---------------|-----------|
| `USA or Census Division` | National and the nine census divisions |
| `State` | 50 states + DC |
| `MSA` | Metropolitan statistical areas |
| `County` | Counties (all-transactions, annual) |
| ZIP files (separate) | Three- and five-digit ZIP (annual developmental) |

## Citation

Cite the FHFA, the House Price Index, the flavor and geography, the URL, and the
access date, for example: *Federal Housing Finance Agency, House Price Index,
purchase-only monthly series, retrieved from
https://www.fhfa.gov/data/hpi, accessed YYYY-MM-DD.* Record the flavor,
frequency, geography level, and NSA/SA choice so the series is reproducible.
