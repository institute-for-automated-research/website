---
title: "Zillow research data"
description: >-
  How to pull Zillow Research's free housing metrics (ZHVI, rents, days on
  market, price cuts) as no-key bulk CSVs, plus the gotchas that bite pipelines
  (wide format, the filename-is-the-metadata convention, restated history, and
  RegionID vs FIPS).
sidebar:
  label: Zillow research
  order: 36
tags: [housing, real-estate, prices, time-series, panel, free, no-api-key, data:zillow]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key CSV fetch of the metro ZHVI file (files.zillowstatic.com public_csvs, 896 metros, monthly 2000-01 to 2026-04)
  access: free
---

**Zillow research data** is the set of housing-market metrics Zillow Research
publishes free: the Zillow Home Value Index (ZHVI, a smoothed measure of typical
home value), the Zillow Observed Rent Index (ZORI), days on market, the share of
listings with a price cut, for-sale inventory, new listings, and median sale and
list prices. Each metric is offered as a no-key bulk CSV; ZHVI spans every
geography level (national, state, metro, county, city, ZIP, neighborhood) while
other metrics cover a subset (check the research-data page for what each
offers). Used in, for
example,
[Amaral, Dohmen, Kohl & Schularick](/wiki/papers/jf/2025/amaral-superstar-returns-spatial-heterogeneity-2025/),
where Zillow days-on-market and asking-price-discount metrics proxy liquidity
across 277 MSAs.

- **Cost:** free, public.
- **API key:** none required (bulk CSV download; there is no official query API).
- **Coverage:** geography from national down to ZIP/neighborhood; most series
  monthly. ZHVI runs from 2000; the rent index (ZORI) starts later (2015).
- **Home:** <https://www.zillow.com/research/data/>

## Access

The research-data page is a directory of download links; the files themselves
live on a static CDN at `files.zillowstatic.com/research/public_csvs/<metric>/`.
Fetch a specific file directly, no key:

```bash
# Metro-level ZHVI, all homes (single-family + condo), middle price tier,
# smoothed and seasonally adjusted, monthly:
curl -sL "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv" -o zhvi_metro.csv
```

Each file is wide: identifier columns `RegionID, SizeRank, RegionName,
RegionType, StateName` followed by one column per month (header is the
month-end date, e.g. `2024-01-31`).

### Load in Python

```python
import pandas as pd

url = "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv"
wide = pd.read_csv(url)

id_cols = ["RegionID", "SizeRank", "RegionName", "RegionType", "StateName"]
long = wide.melt(id_vars=id_cols, var_name="date", value_name="zhvi")
long["date"] = pd.to_datetime(long["date"])  # month-end dates
```

## Gotchas (the ones that bite pipelines)

- **ZHVI is a value index, not transaction prices.** It is a smoothed,
  seasonally adjusted measure of the typical home value in a region, not the
  prices of homes that sold. For realized transactions use the median sale price
  files; do not treat ZHVI as a sale-price series.
- **The filename is the metadata.** `sfrcondo` vs `sfr` vs `condo`, the
  `tier_0.33_0.67` (middle third) vs bottom or top tier or bedroom-count cuts,
  `sm` (smoothed) vs raw, and `sa` (seasonally adjusted) vs not are all encoded
  in the file name. Pick the slice deliberately; a different file with the same
  column layout answers a different question.
- **Data are wide; date columns are month-end.** Reshape to long for panel work,
  and read the header dates as month-end timestamps, not month-start.
- **History is restated every release.** Zillow revises the entire back-series
  on each monthly update as methodology and source data change. Two downloads of
  the "same" series from different months will differ. Snapshot the file and
  record the access date.
- **`RegionName` is a label, not a geocode.** Metro rows read like `New York,
  NY`; there is no FIPS or CBSA code in the value file. To merge with Census,
  FHFA, or CoreLogic you must crosswalk `RegionName`/`RegionID` to standard
  geography codes yourself.
- **Composition changes over time.** More metros, counties, and ZIPs enter in
  later years; a region present in 2026 can be missing (NaN) in 2000. Account
  for entry rather than assuming a balanced panel.
- **No official API.** Access is bulk CSV only, and the links on the research
  page can change. Pull from the static CSV host and archive the file.
- **ZTRAX is a different product.** The Zillow Transaction and Assessment
  Dataset (ZTRAX), parcel-level deed and assessment microdata, was a separate,
  application-gated academic dataset (and has been discontinued for new
  agreements). It is not part of these free research CSVs.

## Reference

| Field | Value |
|-------|-------|
| Index page | `https://www.zillow.com/research/data/` |
| CSV host | `https://files.zillowstatic.com/research/public_csvs/<metric>/` |
| Format | Wide CSV: id columns + one column per month (month-end header) |
| Geography | ZHVI: national, state, metro, county, city, ZIP, neighborhood; other metrics a subset |
| Frequency | Mostly monthly |
| ZHVI start | 2000; ZORI (rent) from 2015 |
| Key required | No |

## Citation

Cite Zillow, the specific metric and geography, the retrieval URL, and the
access date, for example: *Zillow Research, "Zillow Home Value Index (ZHVI),"
metro-level CSV retrieved from https://www.zillow.com/research/data/, accessed
YYYY-MM-DD.* Because Zillow restates the full history each release, record the
access date and archive the downloaded file so the vintage is reproducible.
