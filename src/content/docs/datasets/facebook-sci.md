---
title: "Facebook Social Connectedness Index (SCI)"
description: >-
  How to pull Meta's Social Connectedness Index (SCI) as no-key bulk CSVs from
  the Humanitarian Data Exchange, plus the gotchas that bite pipelines (it is a
  rescaled relative measure not a count, symmetric with both directions stored,
  the diagonal dominates, and region codes differ by file).
sidebar:
  label: Facebook SCI
  order: 50
tags: [social-network, geography, cross-section, panel, free, no-api-key, data:facebook-sci]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-key download from the Humanitarian Data Exchange of country.csv (31,684 country-pair rows) and us_counties.csv (245 MB, 10,265,616 county-pair rows; columns user_country/friend_country/user_region/friend_region/scaled_sci)
  access: free
---

**The Social Connectedness Index (SCI)** is Meta's measure of how strongly two
places are linked by Facebook friendships. For a pair of locations, `scaled_sci`
is proportional to the relative probability that a Facebook user in one is
friends with a user in the other (friendship links between the two, divided by
the product of their user counts), built from a snapshot of anonymized,
aggregated friendships. It is distributed openly through the Humanitarian Data
Exchange (HDX). Used in, for example,
[Rehbein & Rother (2025)](/wiki/papers/rfs/2025/rehbein-social-connectedness-bank-lending-2025/),
where county-pair SCI proxies the social ties along which bank lending travels.

- **Cost:** free, public.
- **API key:** none required (bulk CSV download from HDX).
- **Coverage:** several geography levels, each its own file: country-country,
  sub-national admin level 1 and 2 (GADM), US counties, US ZCTAs, and European
  NUTS regions. A cross-section per release (the index has been re-snapshotted
  across several vintages), not a time series.
- **Home:** <https://data.humdata.org/dataset/social-connectedness-index>

## Access

Each geography level is a separate file on the HDX dataset page. The
country-country and US-county files are direct CSV downloads; some larger files
(GADM2, US ZCTA) are served from Google Drive links listed on the same page.

```bash
# Country-to-country SCI (small, ~0.5 MB):
curl -sL "https://data.humdata.org/dataset/e9988552-74e4-4ff4-943f-c782ac8bca87/resource/652cf9c9-541f-47de-8d53-ff818062bd0c/download/country.csv" -o sci_country.csv

# US county-to-county SCI (245 MB, ~10.3M rows):
curl -sL "https://data.humdata.org/dataset/e9988552-74e4-4ff4-943f-c782ac8bca87/resource/97dc352f-c9c5-47d6-a6ef-88709e14006c/download/us_counties.csv" -o sci_us_counties.csv
```

Every file has the same five columns: `user_country, friend_country,
user_region, friend_region, scaled_sci`. In the country file the region columns
repeat the country code; in the US-county file `user_region`/`friend_region`
are five-digit FIPS county codes.

### Load in Python

```python
import pandas as pd

sci = pd.read_csv("sci_us_counties.csv")            # FIPS-pair rows
sci = sci[sci.user_region != sci.friend_region]     # drop the diagonal
# undirected: keep each unordered pair once
sci = sci[sci.user_region < sci.friend_region]
```

## Gotchas (the ones that bite pipelines)

- **`scaled_sci` is a rescaled relative measure, not a count or a probability.**
  Within a release the values are rescaled to integers with the single
  most-connected pair set to 1,000,000,000. Only the ordering and ratios within
  one file are meaningful; the absolute number is arbitrary. Do not read it as a
  number of friendships.
- **Do not compare `scaled_sci` across files or vintages.** Each release and each
  geography file is rescaled independently to its own max of 1e9, so a value in
  one vintage's county file is not comparable to one in another vintage or in the
  country file. Normalize within the single file you use.
- **It is symmetric and both directions are stored.** `(i, j)` and `(j, i)` carry
  the same `scaled_sci`, so the file double-counts unordered pairs (the US-county
  file is roughly 3,200 squared = 10.3M rows). Deduplicate to one direction for
  pairwise analysis.
- **The diagonal is included and dominates.** Self-pairs (`user_region ==
  friend_region`) measure within-area connectedness and are far larger than any
  cross-area value (within-county friendships dominate). Drop the diagonal for
  between-area work.
- **Region codes differ by file.** US counties are five-digit FIPS; sub-national
  files use GADM codes; the European file uses NUTS; ZCTAs are US ZIP-code
  tabulation areas. The `user_country`/`friend_country` columns are still present
  in sub-national files (both `US` in the county file), so do not assume those
  columns vary.
- **It is a snapshot, not a panel.** Each release is built from Facebook
  friendships at one point in time; releases are occasional re-snapshots, not a
  continuous series. Treat a file as a single cross-section and record which
  vintage you pulled.
- **Built from anonymized, aggregated data with privacy protection.** The index
  comes from de-identified, aggregated friendship counts; very thin pairs can be
  floored or noised. It reflects Facebook's user base, which is not a uniform
  sample of the population, so connectedness is conditioned on who uses the
  platform.
- **The US-county file is large.** 245 MB and about 10.3M rows; read it filtered
  or in chunks rather than loading the raw symmetric table whole.

## Reference

| Field | Value |
|-------|-------|
| Host | Humanitarian Data Exchange: `data.humdata.org/dataset/social-connectedness-index` |
| Files | `country.csv`, `gadm1.csv`, `gadm2.zip`, US `us_counties.csv`, `us_zcta.zip`, `nuts_2024.zip`, geoboundaries variants |
| Columns | `user_country`, `friend_country`, `user_region`, `friend_region`, `scaled_sci` |
| US region code | Five-digit FIPS (county file) |
| Scaling | Integer, rescaled so the max pair = 1,000,000,000 within each file |
| Structure | Symmetric, both directions stored; diagonal included |
| Key required | No |

## Citation

Cite Bailey, Cao, Kuchler, Stroebel & Wong, "Social Connectedness: Measurement,
Determinants, and Effects," *Journal of Economic Perspectives* 32(3), 2018,
259-280, together with the specific SCI release and geography level, the
retrieval URL, and the access date. Record the vintage, since the index is
rescaled per release and the values are not comparable across versions.
