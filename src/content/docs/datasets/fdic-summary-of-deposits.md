---
title: "FDIC Summary of Deposits (SOD)"
description: >-
  How to pull branch-level deposit data from the FDIC Summary of Deposits for
  free, with no API key, including the headquarters-booking distortion and the
  other gotchas that bite branch-geography pipelines.
sidebar:
  label: FDIC Summary of Deposits
  order: 16
tags: [banking, deposits, free, no-api-key, fdic, panel-data, data:fdic-summary-of-deposits]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key SOD API query (api.fdic.gov/banks/sod, YEAR:2022 branch deposits)
  access: free
---

The **FDIC Summary of Deposits (SOD)** is the annual survey of branch-office
deposits for all FDIC-insured institutions, recorded as of June 30 each year.
For each branch it reports the institution, the branch location (address, city,
county, state, and geocoordinates), and the deposits booked to that branch.
It is used in, for example,
[Di Maggio, Ma & Williams](/wiki/papers/jf/2025/maggio-red-overdrafts-payday-lending-2025/)
for bank branch locations and deposits of the 50 largest banks,
[Beyhaghi, Fracassi & Weitzner](/wiki/papers/jf/2026/beyhaghi-adverse-selection-corporate-loans-2026/)
for county-level branch counts, and
[Johnston-Ross, Ma & Puri](/wiki/papers/jf/2025/johnston-ross-private-equity-financial-stability-2025/)
for branch-level deposit balances and locations.

- **Cost:** free, no paywall.
- **API key:** none required.
- **Coverage:** every domestic branch of every FDIC-insured bank and thrift,
  annually since 1994.
- **Home:** <https://www.fdic.gov/resources/data-tools/> (Summary of Deposits)
  · **API:** <https://api.fdic.gov/banks/sod>

## Access

### Option 1: FDIC API (no key, JSON)

The FDIC public API serves the SOD at `https://api.fdic.gov/banks/sod`.
No key or authentication is needed.

```bash
curl -G "https://api.fdic.gov/banks/sod" \
  --data-urlencode "filters=YEAR:2022" \
  --data-urlencode "fields=NAMEFULL,STALPBR,CITYBR,DEPSUMBR,YEAR" \
  --data-urlencode "limit=10"
```

The response is JSON with a `data[]` array; each element is one branch-year
record. Pagination is controlled by `limit` and `offset` parameters.

```python
import requests, pandas as pd

params = {
    "filters": "YEAR:2022",
    "fields": "NAMEFULL,STALPBR,CITYBR,COUNTYNAME,DEPSUMBR,UNINUMBR,CERT,YEAR",
    "limit": 10000,
    "offset": 0,
}
r = requests.get("https://api.fdic.gov/banks/sod", params=params)
rows = [rec["data"] for rec in r.json()["data"]]
df = pd.DataFrame(rows)
```

Loop over `offset` in steps of 10,000 (the API maximum per call) to pull a
full year; a single year holds roughly 70,000-80,000 branch records.

### Option 2: Bulk download

The FDIC also publishes annual flat files at the Summary of Deposits page
(<https://www.fdic.gov/resources/data-tools/>). Each year's ZIP contains a
pipe-delimited `.csv` with all branches. This is faster than paging the API
for a full-year pull.

## Gotchas (the ones that bite pipelines)

- **Headquarters-booking distortion.** Deposits are booked to the branch of
  administrative assignment, not where the customer lives. Large banks
  concentrate a disproportionate share of deposits at one headquarters or main
  branch. Any branch-deposit geography measure is affected; papers that use
  SOD for deposit geography typically acknowledge or adjust for this.
- **Annual June-30 snapshot only.** There is no intra-year or quarterly
  frequency. The survey date is always June 30; do not treat it as a
  year-end figure.
- **API host change.** The API host moved from `banks.data.fdic.gov` to
  `api.fdic.gov` (the old host issues a 301 redirect). Pin the new host
  in your pipeline to avoid the redirect hop.
- **Identifier reassignment at M&A.** Branch identifiers (`UNINUMBR`) and
  institution certificate numbers (`CERT`) are reassigned at mergers and
  acquisitions. A naive year-over-year branch panel breaks at M&A events:
  track the acquirer's `CERT` to link branches across a merger.
- **Credit unions are absent.** SOD covers only FDIC-insured banks and
  thrifts. Credit unions are not included; they are reported separately by
  the NCUA.

## Citation

Cite the FDIC Summary of Deposits, the survey year (June 30 as-of date), and
note whether the deposit geography was adjusted for the headquarters-booking
issue, e.g.: *Federal Deposit Insurance Corporation, Summary of Deposits,
[year] (as of June 30); <https://www.fdic.gov/resources/data-tools/>, accessed
YYYY-MM-DD. Branch deposits not adjusted / adjusted for headquarters-booking
concentration.*
