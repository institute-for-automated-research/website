---
title: "Quarterly Workforce Indicators (QWI)"
description: >-
  How to pull Census LEHD Quarterly Workforce Indicators local labor-market
  statistics free with no key via the LEHD bulk flat files, including the
  filename scheme, status-flag columns, and the suppression gotchas that
  bite pipelines.
sidebar:
  label: QWI (LEHD)
  order: 30
tags: [labor, employment, regional, firms, free, no-api-key, data:qwi-census]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of a QWI LEHD bulk file (lehd.ces.census.gov/data/qwi/latest_release/us/qwi_us_sa_fa_gn_ns_op_u.csv.gz; 19 MB, 266k rows)
  access: free
---

**Quarterly Workforce Indicators (QWI)** is produced by the U.S. Census Bureau
Longitudinal Employer-Household Dynamics (LEHD) program. It delivers local
labor-market statistics built from linked employer-employee administrative
records: employment levels, hires, separations, job creation and destruction,
turnover, and earnings, broken down by geography (national, state, metro,
county), industry, and worker demographics (sex, age group, race, ethnicity,
education), and by firm age and firm size. The data is free and public. The
LEHD bulk flat-file path used here needs no API key. Used in, for example,
[Johnston-Ross, Ma & Puri](/wiki/papers/jf/2025/johnston-ross-private-equity-financial-stability-2025/),
where county-level QWI startup employment (firm age 0 to 1) and total
employment feed the regional-recovery analysis.

This page documents the LEHD flat-file bulk download path. A separate
[Census Bureau page](/wiki/datasets/census/) covers the api.census.gov API
route (key required) and the Business Dynamics Statistics (BDS) product; this
page does not duplicate BDS material.

- **Cost:** free, public.
- **API key:** none required for the LEHD bulk files. The api.census.gov QWI
  API route requires a free key (returns "Missing Key" without one).
- **Coverage:** quarterly, by state (with national aggregates), from the early
  1990s onward, though state start dates differ.
- **Home:** <https://lehd.ces.census.gov/data/>

## Access

The LEHD flat files live under
<https://lehd.ces.census.gov/data/qwi/latest_release/>. Each subdirectory
corresponds to a geography: `us/` for national aggregates, then one folder per
state FIPS abbreviation (`ak/`, `al/`, ..., `wy/`). Within each folder,
multiple files cover different demographic and firm-characteristic breakdowns.
No authentication is required.

Download the U.S. national, seasonally adjusted, firm-age breakdown file:

```bash
# US national QWI file: seasonally adjusted, by firm age, no key
curl -sL -o qwi_us.csv.gz \
  "https://lehd.ces.census.gov/data/qwi/latest_release/us/qwi_us_sa_fa_gn_ns_op_u.csv.gz"
gzip -dc qwi_us.csv.gz | head
```

The file is approximately 19 MB compressed and contains 266,256 rows.

### Filename scheme

Files follow the pattern:

```
qwi_<geo>_<seasonadj>_<firmchar>_<geo_level>_<raceeth>_<owner>_<ratevar>.csv.gz
```

Confirmed segment codes from the verified file above and LEHD documentation:

| Position | Code | Meaning |
|----------|------|---------|
| `<geo>` | `us`, `ca`, `tx`, ... | Geography (national or 2-letter state abbreviation) |
| `<seasonadj>` | `sa` | Seasonally adjusted |
| `<seasonadj>` | `se` | Seasonally extracted (not seasonally adjusted) |
| `<firmchar>` | `fa` | By firm age |
| `<firmchar>` | `fs` | By firm size |
| `<firmchar>` | `f` | No firm-characteristic detail |
| `<geo_level>` | `gn` | National/state aggregate level |
| `<raceeth>` | `ns` | No race/ethnicity detail |
| `<raceeth>` | `rs` | Race/ethnicity detail included |
| `<owner>` | `op` | Private ownership |

List the directory index to see every available file and confirm the exact
code meanings for your vintage against the LEHD schema documentation at
<https://lehd.ces.census.gov/data/schema/latest/lehd_public_use_schema.pdf>
rather than guessing. Segment codes can change across schema versions.

### Load in Python

```python
import pandas as pd

df = pd.read_csv(
    "qwi_us.csv.gz",
    dtype=str,        # read everything as str first; cast after inspecting
    compression="gzip",
    low_memory=False,
)

# Key identifier columns:
# periodicity, seasonadj, geo_level, geography, ind_level, industry,
# ownercode, sex, agegrp, race, ethnicity, education, firmage, firmsize,
# year, quarter, agg_level

# Then the indicator columns:
# Emp, EmpEnd, HirA, Sep, FrmJbGn, FrmJbLs, EarnBeg, Payroll, ...
# Each has an s-prefixed status/flag twin, e.g. sEmp, sHirA, sSep

# Convert numeric indicators after filtering for acceptable status flags
numeric_indicators = ["Emp", "EmpEnd", "HirA", "Sep",
                       "FrmJbGn", "FrmJbLs", "EarnBeg", "Payroll"]
df[numeric_indicators] = df[numeric_indicators].apply(
    pd.to_numeric, errors="coerce"
)
```

The s-prefixed twin of each indicator (e.g. `sEmp` alongside `Emp`) encodes
a data-quality and suppression status code for that cell. Cells are blank or
hold a sentinel value (e.g. `-1`) where suppressed. These are not zeros and
must not be treated as zeros. Read the status flags and drop or flag
suppressed cells before any analysis.

## Gotchas (the ones that bite pipelines)

- **The api.census.gov QWI API returns "Missing Key" without a free API key.**
  The LEHD flat files used here need no key. If you want zero credentials, use
  the LEHD bulk route; if you use the Census API, register for a free key at
  <https://www.census.gov/data/developers.html>.
- **Suppressed cells are not zeros.** Cells are suppressed or fuzzed for
  confidentiality. Blank cells and sentinel values (e.g. `-1`) in indicator
  columns indicate suppression, not a true zero. Each indicator has an
  s-prefixed status flag column you must read before treating any value as
  valid data.
- **State coverage start dates differ.** States joined the LEHD program in
  different years, so a national panel has ragged left edges by state. A
  series starting in 1990 for some states may start in 1995 or later for
  others. Massachusetts has historically been absent from LEHD.
- **Firm-age and firm-size breakdowns are only in files that carry that
  dimension.** The filename encodes whether firm age or firm size is included.
  Requesting firm-age detail from a file without the `fa` segment returns
  nothing; pick the correct file for your breakdown.
- **QWI counts jobs and worker flows, not firm financials.** Employment,
  hires, separations, and earnings are from administrative records. QWI does
  not contain revenue, assets, or profitability. It is also not the same as
  BDS firm counts (see the [Census Bureau page](/wiki/datasets/census/)).
- **Seasonal adjustment is a file-level choice.** Seasonally adjusted (`sa`)
  and seasonally extracted (`se`) series are in separate files. Do not mix
  them in one panel series.
- **Industry and geography codes follow LEHD conventions.** The `industry`
  column uses NAICS codes at varying levels of aggregation (controlled by
  `ind_level`). The `geography` column uses FIPS codes. Confirm the
  aggregation level in `agg_level` before joining to external sources.

## Key indicators

| Column | Description |
|--------|-------------|
| `Emp` | Beginning-of-quarter employment |
| `EmpEnd` | End-of-quarter employment |
| `HirA` | Total hires (accessions) |
| `Sep` | Total separations |
| `FrmJbGn` | Firm job gains |
| `FrmJbLs` | Firm job losses |
| `EarnBeg` | Average monthly earnings for workers employed at beginning of quarter |
| `Payroll` | Total payroll |

## Geography levels

| Level | Description |
|-------|-------------|
| National | `us/` subdirectory |
| State | One subdirectory per state (e.g. `ca/`, `tx/`) |
| Metro (MSA/CBSA) | Included within state files, `geo_level = M` |
| County | Included within state files, `geo_level = C` |
| WIA/workforce area | Included within state files, `geo_level = W` |

## Citation

*U.S. Census Bureau, Longitudinal Employer-Household Dynamics Program,
Quarterly Workforce Indicators, latest release, retrieved from
https://lehd.ces.census.gov/data/qwi/latest_release/, accessed 2026-06-09.*

Record the schema version, the specific file path, and the seasonal-adjustment
and firm-characteristic segments so the pull is reproducible.
