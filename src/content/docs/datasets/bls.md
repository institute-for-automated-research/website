---
title: "Bureau of Labor Statistics (BLS)"
description: >-
  How to pull BLS labor-force, employment, wage, and price series from the
  public data API with no key, plus the QCEW county wage files, and the
  series-ID and revision gotchas that bite pipelines.
sidebar:
  label: BLS
  order: 32
tags: [labor, employment, wages, prices, inflation, time-series, free, no-api-key, data:bls]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key BLS API v2 pull (unemployment rate LNS14000000) and no-key QCEW county-wage CSV (data.bls.gov/cew, area 06037, 2022 Q1)
  access: free
---

**The Bureau of Labor Statistics (BLS)** publishes U.S. labor-force,
employment, wage, and price statistics: the labor-force participation rate,
the unemployment rate, payroll employment, the Consumer Price Index (CPI) and
Producer Price Index (PPI), job openings (JOLTS), and county-by-industry
employment and wages (the Quarterly Census of Employment and Wages, QCEW). The
public data API and the QCEW files are free and need no key. Used in, for
example,
[Beyhaghi, Fracassi & Weitzner](/wiki/papers/jf/2026/beyhaghi-adverse-selection-corporate-loans-2026/)
for county-level and financial-industry wages, and the CPI-U series underlies
[Dittmar, Hsu, Roussellet & Simasek](/wiki/papers/jf/2026/dittmar-default-risk-sovereign-bonds-2026/)
as the inflation measure (obtained there through [FRED](/wiki/datasets/fred/),
which re-publishes BLS series).

- **Cost:** free, public.
- **API key:** none required. The public API v2 works with no key at lower
  limits (25 queries/day, up to 10 years, up to 25 series per call). A free
  `BLS_API_KEY` raises the limits (500 queries/day, 20 years, 50 series).
- **Coverage:** national labor-force and price series (monthly, from the
  mid-twentieth century for the headline series); QCEW county-by-industry
  employment and wages (quarterly, from 1990).
- **Home:** <https://www.bls.gov/data/> ·
  **API:** <https://api.bls.gov/publicAPI/v2/timeseries/data/> ·
  **QCEW:** <https://www.bls.gov/cew/>

## Access

### Time series via the public API (no key)

The API takes a JSON POST with a list of series IDs and a year range. No key is
needed for low-volume use:

```bash
# Unemployment rate (LNS14000000), 2023-2024, no key
curl -s -X POST "https://api.bls.gov/publicAPI/v2/timeseries/data/" \
  -H "Content-Type: application/json" \
  -d '{"seriesid":["LNS14000000"],"startyear":"2023","endyear":"2024"}'
```

Add `"registrationkey":"<BLS_API_KEY>"` to the JSON body to use a free key and
the higher limits.

```python
import requests

def bls_series(series_ids, start, end, key=None):
    body = {"seriesid": list(series_ids), "startyear": str(start),
            "endyear": str(end)}
    if key:
        body["registrationkey"] = key
    r = requests.post(
        "https://api.bls.gov/publicAPI/v2/timeseries/data/", json=body)
    r.raise_for_status()
    out = r.json()
    assert out["status"] == "REQUEST_SUCCEEDED", out.get("message")
    return out["Results"]["series"]   # each: seriesID + data[] (year, period, value)
```

### QCEW county wages (no key)

County-by-industry employment and wages come as direct CSV downloads keyed by
the 5-digit area FIPS code. No key, no API body:

```bash
# Los Angeles County (06037), 2022 Q1, all industries: establishments,
# employment, and wages by industry/ownership
curl -s -o qcew_06037_2022q1.csv \
  "https://data.bls.gov/cew/data/api/2022/1/area/06037.csv"
```

The header row names the fields (`area_fips`, `own_code`, `industry_code`,
`qtrly_estabs`, employment columns, `total_qtrly_wages`, `avg_wkly_wage`, and a
`disclosure_code` flag).

### Flat files

The full published tables, including discontinued and detailed series, live as
flat files under <https://download.bls.gov/pub/time.series/>, organized by
survey prefix (for example `ln/` for the CPS labor-force series, `cu/` for
CPI-U). These need no key.

## Gotchas (the ones that bite pipelines)

- **The seasonal-adjustment flag is hidden in the series ID.** For the CPS
  labor series the third letter sets it: `LNS...` is seasonally adjusted,
  `LNU...` is not. They are the same concept with different numbers. The same
  split holds across surveys (`CES`/`CEU`, `CUUR`/`CUSR`, `WPU`/`WPS`). Pick one
  deliberately and state which you used.
- **The no-key tier is rate-limited.** Without a key you get 25 queries per day,
  10 years, and 25 series per call. A batch backfill will hit that wall; either
  register a free key or cache aggressively. Closed-period data is immutable, so
  cache hits are safe.
- **Series are revised.** Monthly CES employment and CPI figures are revised
  (CES has preliminary, second, and final estimates, plus annual benchmark
  revisions). Pin the vintage you pulled; a re-pull of a recent month can change
  the number.
- **QCEW cells are suppressed for confidentiality.** A non-empty
  `disclosure_code` marks a cell withheld to protect an identifiable employer,
  so employment and wage figures are blanked there. A blank is not a zero;
  handle the disclosure flag.
- **QCEW counts jobs and wages, not firm financials.** It is administrative
  unemployment-insurance data covering covered employment by establishment
  location and industry, not a firm-level financial panel.
- **The API is the same series FRED re-publishes, not a different number.** FRED
  mirrors many headline BLS series (for example seasonally adjusted CPI-U
  `CUSR0000SA0` as `CPIAUCSL`; the not-seasonally-adjusted `CUUR0000SA0` maps to
  `CPIAUCNS` instead). Cite the source you actually pulled from; do not imply two
  independent measurements.

## Series-ID prefixes

| Prefix | Survey | Common use |
|--------|--------|------------|
| `LNS` / `LNU` | CPS (household), SA / NSA | LFPR, employment-population ratio, unemployment |
| `CES` / `CEU` | CES (establishment), SA / NSA | Payroll employment, hours, earnings |
| `CUUR` / `CUSR` | CPI-U, NSA / SA | Consumer prices |
| `WPU` / `WPS` | PPI, NSA / SA | Producer prices |
| `JTU` | JOLTS | Job openings, hires, quits, layoffs |
| `ENU` | QCEW | County by industry employment and wages |
| `SMU` / `SMS` | State and area CES, NSA / SA | Sub-national payrolls |

Discover exact series IDs with the BLS data finder
(<https://www.bls.gov/data/>) or the per-survey "Series ID formats" pages.

## Citation

Cite the U.S. Bureau of Labor Statistics, the survey and series IDs used (with
the seasonal-adjustment choice), the period range, the retrieval URL, and the
access date. For QCEW, record the area FIPS, year, quarter, and ownership and
industry codes so the pull is reproducible.
