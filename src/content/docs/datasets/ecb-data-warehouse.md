---
title: "ECB Data Portal (Statistical Data Warehouse)"
description: >-
  How to pull euro-area macro, monetary, and Eurosystem balance-sheet series
  from the ECB, including the no-key data-api CSV endpoint, series-key
  structure, and the gotchas that bite pipelines.
sidebar:
  label: ECB Data Portal
  order: 38
tags: [macro, monetary-policy, euro-area, central-bank, free, no-api-key, time-series, data:ecb-data-warehouse]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key CSV pull of the ECB data-api (EXR/D.USD.EUR.SP00.A daily euro reference rate, csvdata format)
  access: free
---

**The ECB Data Portal** (formerly the Statistical Data Warehouse, SDW) is the
European Central Bank's public statistics service: euro-area monetary
aggregates, interest rates, exchange rates, bank balance sheets, securities
holdings, and the Eurosystem's own asset-purchase data (APP and PEPP). The data
is free and public, served over an SDMX REST API that needs no key. Used in, for
example,
[Costain, Nuno & Thomas](/wiki/papers/jf/2025/costain-term-structure-interest-rates-2025/),
where it supplies Eurosystem bond holdings and purchase paths to calibrate net
bond supply and the maturity distribution of holdings under APP and PEPP.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** euro-area and member-state series, many from 1999 onward;
  exchange rates and some series earlier; daily, monthly, quarterly frequencies.
- **Home:** <https://data.ecb.europa.eu>

## Access

The data API serves any series by its dataset and series key. Append
`?format=csvdata` for a flat CSV, no authentication:

```bash
# Daily euro reference exchange rate, USD per EUR, last 3 observations, no key
curl -sL -H "Accept: text/csv" \
  "https://data-api.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A?lastNObservations=3&format=csvdata" \
  -o eur_usd.csv
```

The path is `service/data/<DATAFLOW>/<SERIES_KEY>`. The dataflow (here `EXR`,
exchange rates) sets the dimension order; the series key is the
dot-separated dimension values (`D.USD.EUR.SP00.A` = daily, USD, against EUR,
spot, average). Leave a dimension blank to fetch all of its values, or use `+`
to list several. Find the dataflow and its dimensions by browsing the dataset
on <https://data.ecb.europa.eu> and copying the series key it shows.

### Load in Python

```python
import requests, io, pandas as pd

r = requests.get(
    "https://data-api.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A",
    params={"format": "csvdata", "startPeriod": "2020-01-01"},
    headers={"Accept": "text/csv"},
    timeout=60,
)
df = pd.read_csv(io.StringIO(r.text))
# Key columns: KEY (series id), TIME_PERIOD, OBS_VALUE.
```

## Gotchas (the ones that bite pipelines)

- **The SDW was rebranded the ECB Data Portal; old SDW URLs may not resolve.**
  `sdw.ecb.europa.eu` links and the legacy SDW API have been superseded by
  `data.ecb.europa.eu` and `data-api.ecb.europa.eu`. Point pipelines at the
  current host.
- **Series keys are positional and dataflow-specific.** A key like
  `D.USD.EUR.SP00.A` only makes sense against the `EXR` dimension order; the
  same dotted string means nothing in another dataflow. Always pair a key with
  its dataflow, and read the dimension order from the dataset page.
- **Asset-purchase series are split across PSPP, CSPP, CBPP, ABSPP, and PEPP.**
  The APP is the sum of its component programmes; PEPP is reported separately.
  Adding holdings across programmes requires picking the right component series
  and not double-counting the APP total against its parts.
- **Book value, not market value.** Eurosystem securities-holdings series are
  generally reported at amortised book value, and purchase data is at
  settlement. Do not treat them as mark-to-market positions.
- **Blank dimension means "all", which can return a large multi-series file.**
  Omitting a dimension value fetches every series along that dimension. Filter
  deliberately, or a single call can pull thousands of series.
- **Revisions and breaks.** Monetary and balance-sheet statistics are revised,
  and methodology breaks exist across the sample. Record the access date and
  watch for series discontinuities before splicing.

## Common dataflows

| Dataflow | Content |
|----------|---------|
| `EXR` | Exchange rates (reference and effective) |
| `BSI` | Bank (MFI) balance-sheet items, monetary aggregates |
| `FM` | Financial-market and money-market interest rates |
| `ILM` | Eurosystem balance-sheet and liquidity items |
| `SEC` | Securities issues and holdings |
| `YC` | Euro-area yield curve (AAA and all-bond) |

Confirm the dataflow code and its dimensions on the portal before building a
series key; the list above is a starting point, not the full set.

## Citation

Cite the European Central Bank, the ECB Data Portal, the series key and
dataflow, the URL, and the access date, for example: *European Central Bank,
ECB Data Portal, series EXR/D.USD.EUR.SP00.A, retrieved from
https://data.ecb.europa.eu, accessed YYYY-MM-DD.* Record the series key and
frequency so the pull is reproducible.
