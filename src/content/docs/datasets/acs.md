---
title: "American Community Survey (ACS)"
description: >-
  How to pull American Community Survey estimates from the Census Bureau API
  (free key) or the no-key bulk files, and the gotchas that bite pipelines
  (1-year vs 5-year, every estimate has a margin of error, table-code churn,
  geographies are vintaged, it is a sample not a count).
sidebar:
  label: ACS
  order: 48
tags: [census, demographics, labor, survey, free, data:acs]
verified:
  level: fetched
  date: 2026-06-22
  with: live Census API pull of ACS 5-year (2022 acs5, B01001_001E total population for California, returned 39,356,104)
  access: free
---

**The American Community Survey (ACS)** is the U.S. Census Bureau's rolling
household survey of demographic, social, economic, and housing characteristics:
income, occupation, education, commuting, rent, ancestry, and more. It replaced
the decennial census "long form" and is the standard source for small-area
socioeconomic data between censuses. The data is free and public. Used in, for
example,
[Allcott, Montanari, Ozaltun & Tan](/wiki/papers/jf/2026/allcott-corporate-social-impact-2026/),
where ACS occupation-by-county employment distributions (2010-2019) drive the
worker-surplus estimation.

- **Cost:** free, public.
- **API key:** the Census Data API needs a **free** API key
  (<https://api.census.gov/data/key_signup.html>); the bulk download files do
  not.
- **Coverage:** annual. **1-year** estimates for areas with population >= 65,000
  (from 2005); **5-year** estimates for all geographies down to block group
  (from the 2005-2009 release). The Census Bureau page covers other Census
  products; this page is the ACS specifically.
- **Home:** <https://www.census.gov/programs-surveys/acs>

## Access

The Census Data API serves ACS as JSON. The endpoint encodes the year and
dataset (`acs/acs5` = 5-year, `acs/acs1` = 1-year), and you select variables and
a geography:

```bash
# ACS 5-year 2022: total population by state (free key required)
curl -sL "https://api.census.gov/data/2022/acs/acs5?get=NAME,B01001_001E&for=state:*&key=$CENSUS_API_KEY"

# Occupation/employment table at county level (detail table B-series), one state
curl -sL "https://api.census.gov/data/2019/acs/acs5?get=NAME,group(B24010)&for=county:*&in=state:06&key=$CENSUS_API_KEY"
```

Variable codes follow the table convention: `B01001_001E` is the *estimate* (`E`)
for line 001 of detail table `B01001`; the matching margin of error is
`B01001_001M`. The bulk **summary files** (no key) live under
`www2.census.gov/programs-surveys/acs/summary_file/<year>/` for whole-table or
whole-state pulls.

### Load in Python

```python
import pandas as pd, requests, os

url = ("https://api.census.gov/data/2022/acs/acs5"
       "?get=NAME,B01001_001E,B01001_001M&for=county:*&in=state:06"
       f"&key={os.environ['CENSUS_API_KEY']}")
rows = requests.get(url, timeout=60).json()
df = pd.DataFrame(rows[1:], columns=rows[0])          # row 0 is the header
df["pop"] = df["B01001_001E"].astype(float)            # estimate
df["pop_moe"] = df["B01001_001M"].astype(float)        # 90% margin of error
```

## Gotchas (the ones that bite pipelines)

- **1-year and 5-year are different products; never mix or overlap them.** The
  1-year estimates are current but only for areas >= 65,000 population; the
  5-year estimates cover everywhere but are a **pooled five-year average**
  centered on the period, so "2019 acs5" means 2015-2019 data. Overlapping
  5-year releases (2015-2019 vs 2016-2020) share four years of sample and must
  **not** be treated as independent annual observations. Pick one product and
  state the period.
- **Every estimate ships with a margin of error; small areas are noisy.** ACS is
  a sample, so each `..._E` has a 90% `..._M` margin of error that can be large
  for small geographies or small subgroups. Ignoring the MOE and treating
  estimates as exact counts produces false precision and spurious cross-area
  differences. Carry the `M` columns and propagate them, especially for derived
  ratios.
- **It is a survey estimate, not a population count.** ACS does not enumerate
  everyone; the decennial census does. Do not use ACS for legal population
  counts, and expect ACS totals to differ from the decennial and from Census
  population estimates.
- **Table codes and universes change between years.** Detail-table IDs are added,
  dropped, and re-specified, and a measure's universe can shift. A code that
  exists in 2019 may be absent or redefined in 2012. Verify each
  `<year>/acs5/variables.json` rather than assuming a code is stable across the
  whole 2010-2019 panel.
- **The 2020 ACS 1-year was not released as standard estimates.** COVID-19
  disrupted 2020 data collection, so the Census Bureau published only
  experimental 2020 1-year estimates, not the standard `acs/acs1` tables. A loop
  iterating years over `acs/acs1` will hit a gap at 2020 (the 5-year series is
  unaffected). Skip 2020 for the 1-year product or handle the missing year
  explicitly.
- **Geographies are vintaged.** County, tract, and place boundaries (and FIPS
  codes) follow the vintage of each release; tract definitions change at the
  decennial boundary. A county-by-year panel needs a geographic crosswalk across
  vintages, not a naive FIPS merge.
- **Geography is hierarchical in the API.** Sub-state geographies require an `in=`
  clause (county needs `in=state:`, tract needs `in=state:...+county:...`).
  Pulling all tracts nationally in one call is not allowed; loop over states.
  `for=...:*` is the wildcard within the parent.
- **Dollar figures are nominal to the survey period.** Income and rent are in the
  dollars of the (multi-year) collection period and are not inflation-adjusted
  across releases by default. Deflate explicitly when building a real series.

## Products and grains

| Dataset | API path | Geographies | Note |
|---|---|---|---|
| ACS 1-year | `acs/acs1` | areas >= 65,000 pop | Most current; coarse geography |
| ACS 5-year | `acs/acs5` | down to block group | Pooled 5-year average; all areas |
| ACS 1-year supplemental | `acs/acsse` | areas >= 20,000 pop | Simplified tables |
| PUMS microdata | `acs/acs5/pums` | PUMA (>= 100,000 pop) | Person/household records for custom tabs |

## Citation

Cite the U.S. Census Bureau, the ACS, the product and period, the table, and the
access date, for example: *U.S. Census Bureau, American Community Survey,
5-year estimates 2018-2022, table B01001, retrieved from the Census Data API
(https://api.census.gov/data), accessed YYYY-MM-DD.* Record the product
(1-year/5-year), the period, and the table/variable codes so the estimate is
reproducible.
