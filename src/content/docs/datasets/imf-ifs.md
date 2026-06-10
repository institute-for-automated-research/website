---
title: "IMF International Financial Statistics (IFS)"
description: >-
  How to pull cross-country macro and external-sector series from the IMF,
  including the no-key DataMapper API, the SDMX data portal, and the gotchas
  that bite pipelines (database moves, units, missing-period gaps).
sidebar:
  label: IMF IFS
  order: 37
tags: [macro, external-sector, cross-country, free, no-api-key, time-series, data:imf-ifs]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key pull of the IMF DataMapper API (api/v1/BCA_NGDPD, current account balance as percent of GDP, all countries)
  access: free
---

**IMF International Financial Statistics (IFS)** is a cross-country database of
macroeconomic and external-sector series published by the International Monetary
Fund: balance of payments, international reserves, exchange rates, monetary and
financial accounts, prices, and national accounts, for most member countries.
The data is free and public. Used in, for example,
[Kremens, Martin & Varela](/wiki/papers/jf/2025/kremens-long-horizon-exchange-rate-2025/),
where it supplies each country's current account balance and capital inflows,
both scaled by GDP.

- **Cost:** free, public.
- **API key:** none required for the DataMapper API or the SDMX data portal.
- **Coverage:** annual, quarterly, and monthly series across most IMF member
  countries; external-sector and macro series, many from the 1940s-1960s
  onward depending on country and indicator.
- **Home:** <https://www.imf.org/en/Data>

## Access

Two no-key paths reach IMF data. The simplest is the **DataMapper API**, which
returns a single indicator across all countries as JSON:

```bash
# Current account balance, percent of GDP, all countries, no key
curl -sL \
  "https://www.imf.org/external/datamapper/api/v1/BCA_NGDPD?periods=2019" \
  -o bca_ngdpd.json
# List every available indicator and its code/units:
curl -sL "https://www.imf.org/external/datamapper/api/v1/indicators" -o indicators.json
```

The JSON is keyed `values -> <indicator> -> <ISO3 country> -> <year> -> value`.
The indicator catalogue (`/indicators`) gives each code's label and unit, so
resolve the code you need there first (for example `BCA_NGDPD` is current
account balance as a percent of GDP).

For the full IFS database, series-level dimensions, and quarterly or monthly
frequencies, use the **IMF data portal** (SDMX REST) at
<https://data.imf.org>. Browse the dataset, select the country, indicator, and
frequency dimensions, and either download the CSV or call the SDMX endpoint.
The DataMapper draws a curated subset of indicators across IMF databases; the
SDMX portal exposes the IFS dataflow in full.

### Load in Python

```python
import requests, pandas as pd

j = requests.get(
    "https://www.imf.org/external/datamapper/api/v1/BCA_NGDPD",
    params={"periods": ",".join(str(y) for y in range(2010, 2020))},
    timeout=60,
).json()

# values -> indicator -> country (ISO3) -> {year: value}
rows = [
    {"iso3": c, "year": int(y), "bca_ngdpd": v}
    for c, series in j["values"]["BCA_NGDPD"].items()
    for y, v in series.items()
]
df = pd.DataFrame(rows)
```

## Gotchas (the ones that bite pipelines)

- **The IMF data portal moved, and the legacy SDMX endpoint is being retired.**
  The old `dataservices.imf.org/REST/SDMX_JSON.svc/` JSON service is unreliable
  and on the way out; the current portal is `data.imf.org`. Pin your access
  path and re-check it, rather than hardcoding the legacy host.
- **Indicator codes are not interchangeable across IMF databases.** The same
  concept (say, current account) appears under different codes in IFS, BOP,
  and WEO, in different units (level in USD, percent of GDP, domestic
  currency). Resolve the exact code and unit from `/indicators` before pulling,
  and do not assume two codes that read alike are the same series.
- **DataMapper is a curated subset, not all of IFS.** If an indicator you need
  is missing from `/indicators`, it may still exist in the full IFS dataflow on
  the SDMX portal. Absence from DataMapper is not absence from IFS.
- **Country coverage and start dates vary by indicator.** A series can begin
  decades later for one country than another, and some country-years are simply
  missing. Do not read a gap as a zero; carry it as missing.
- **Vintages get revised.** External-sector and national-accounts figures are
  revised across releases. Record the access date, and for reproducibility note
  the database and the period you pulled, since a later pull can differ.
- **BPM5 versus BPM6 balance-of-payments definitions.** External-sector series
  shifted from the fifth to the sixth Balance of Payments Manual; the
  definitions and signs are not identical. Check which manual a series uses
  before splicing old and new vintages.

## Selected IFS / external-sector indicators

| Indicator | DataMapper code | Unit |
|-----------|-----------------|------|
| Current account balance, percent of GDP | `BCA_NGDPD` | percent of GDP |
| Current account balance, USD | `BCA` | billions USD |
| Gross national savings, percent of GDP | `NGSD_NGDP` | percent of GDP |
| Total investment, percent of GDP | `NID_NGDP` | percent of GDP |

Confirm the exact code, label, and unit against the live `/indicators`
catalogue before use; the set above is illustrative, not the full IFS.

## Citation

Cite the IMF, the database (International Financial Statistics), the indicator
and country, the URL, and the access date, for example: *International Monetary
Fund, International Financial Statistics, current account balance (percent of
GDP), retrieved from https://www.imf.org/en/Data, accessed YYYY-MM-DD.* Record
the indicator code and frequency so the pull is reproducible.
