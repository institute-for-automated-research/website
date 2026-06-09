---
title: "U.S. Census Bureau public data"
description: >-
  How to pull U.S. Census Bureau public data products (BDS, QWI, ACS, CBP,
  population estimates) for free, covering the bulk no-key flat-file path and
  the api.census.gov API, with the gotchas that bite automated pipelines.
sidebar:
  label: Census Bureau
  order: 17
tags: [firms, demographics, free, data:census]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key Census BDS bulk CSV (www2.census.gov bds time-series)
  access: free
---

**U.S. Census Bureau public data** covers a family of distinct statistical
products used in finance and economics research: Business Dynamics Statistics
(BDS: firm and establishment counts, entry and exit, job creation and
destruction, by age and size), Quarterly Workforce Indicators (QWI: local
employment and earnings flows), the American Community Survey (ACS: demographic
and economic characteristics down to ZIP code and census tract), County Business
Patterns (CBP: establishment counts and payroll by industry and county), and
official population estimates. These products are cited in, for example,
[Barkai & Panageas](/wiki/papers/jf/2025/barkai-value-employment-2025/) for
Business Dynamics Statistics (young-firm employment share, firm-size
distribution, job creation and destruction), and
[Beyhaghi, Fracassi & Weitzner](/wiki/papers/jf/2026/beyhaghi-adverse-selection-corporate-loans-2026/)
for county-level population estimates.

- **Cost:** free, no paywall.
- **API key:** free key required for the api.census.gov API (returns "Missing
  Key" otherwise); the bulk flat files on www2.census.gov need no key.
- **Coverage:** U.S. firms, establishments, employment flows, demographics, and
  population, from the 1970s onward depending on the product.
- **Home:** <https://www.census.gov/data.html> ·
  **API docs:** <https://www.census.gov/data/developers.html>

## Access

### Option 1: No-key bulk flat files (verified path)

The BDS time-series CSVs are published as flat files on www2.census.gov and
need no authentication. The 2022 release is at:

```
https://www2.census.gov/programs-surveys/bds/tables/time-series/2022/bds2022.csv
```

Key columns: `year`, `firms`, `estabs`, `emp`, `estabs_entry`,
`estabs_exit`, `job_creation`, `job_destruction`, `job_creation_rate`,
`job_destruction_rate`.

```python
import pandas as pd

bds = pd.read_csv(
    "https://www2.census.gov/programs-surveys/bds/tables/time-series/2022/bds2022.csv",
    dtype=str,   # suppress int-parsing of suppressed cells marked "S"
)
# Convert numeric columns explicitly after handling suppression flags
numeric_cols = ["year", "firms", "estabs", "emp",
                "estabs_entry", "estabs_exit",
                "job_creation", "job_destruction"]
bds[numeric_cols] = bds[numeric_cols].apply(pd.to_numeric, errors="coerce")
```

This path is the genuinely no-key route and is what the verified stamp above
covers. Analogous bulk files exist for CBP and population estimates under
`www2.census.gov/programs-surveys/`.

### Option 2: api.census.gov (key required)

Get a free key at <https://www.census.gov/data/developers.html> and store it
in your environment (e.g. `CENSUS_API_KEY=...`); never hard-code it.

Example: ACS 5-year estimates for median household income (`B19013_001E`) by
county in California:

```python
import os, requests, pandas as pd

key = os.environ["CENSUS_API_KEY"]
url = (
    "https://api.census.gov/data/2022/acs/acs5"
    "?get=NAME,B19013_001E"
    "&for=county:*"
    "&in=state:06"
    f"&key={key}"
)
data = requests.get(url).json()
df = pd.DataFrame(data[1:], columns=data[0])
df["B19013_001E"] = pd.to_numeric(df["B19013_001E"], errors="coerce")
```

The API supports BDS, ACS, CBP, QWI, and population estimates with consistent
`?get=<variables>&for=<geography>&key=<key>` syntax. Variable and geography
codes are listed in the API discovery endpoint at
`https://api.census.gov/data/2022/acs/acs5/variables.json`.

## Gotchas (the ones that bite pipelines)

- **The API requires a free key; the bulk files do not.** The api.census.gov
  endpoint returns a plain-text "Missing Key" error (not a JSON error object)
  when called without a key. The genuinely no-key path is the bulk flat files
  on www2.census.gov as shown in Option 1 above.
- **"Census data" is not one dataset.** BDS, QWI, ACS, CBP, and population
  estimates have different geographies, frequencies, disclosure rules, and
  update cadences. Code that treats them interchangeably will silently produce
  nonsense. Pick the specific product and vintage for each research use, and
  document it.
- **Disclosure avoidance and noise injection.** The post-2020 differential
  privacy regime changed how small-cell counts are released. Suppressed cells
  appear as `"S"` or `"D"` in bulk files, and noise-injected counts in
  small geographies can be negative or implausibly volatile. This regime is
  a break from earlier products and affects panel comparability.
- **ACS margins of error must be propagated.** Every ACS estimate ships with a
  margin-of-error column (suffix `MA` or `M`). Ignoring it and treating point
  estimates as exact is incorrect, especially for small geographies or small
  subgroups. Also: 1-year ACS (larger geographies, current) and 5-year ACS
  (smaller geographies, averaged) are different products and must not be mixed
  in a panel without adjustment.
- **NAICS and geography vintages change.** Industry codes are revised across
  NAICS releases (1997, 2002, 2007, 2012, 2017, 2022), and county FIPS codes
  change when counties are created, dissolved, or renamed. Concatenating CBP or
  BDS panels across NAICS transitions or county changes requires crosswalks,
  which the Census provides but which must be applied explicitly.
- **BDS and QWI measure jobs and establishments, not firm financials.** These
  products describe entry, exit, employment flows, and earnings, not revenue,
  assets, or profitability. They complement Compustat or CRSP for
  macro-finance calibration but do not substitute for firm-level financial data.

## Products at a glance

| Product | Unit | Geography | Frequency | Key use in finance research |
|---------|------|-----------|-----------|------------------------------|
| BDS | Firm / establishment | Nation, state, metro, county | Annual | Entry/exit rates, firm-age distribution, job flows |
| QWI | Worker / establishment | State, metro, county, WIA | Quarterly | Local labor market dynamics, earnings by firm age |
| ACS | Household / person | Nation down to tract/ZIP (5-yr) | Annual | Demographics, income, education for local-area work |
| CBP | Establishment | Nation, state, county, ZIP | Annual | Industry structure, payroll, establishment counts |
| Population estimates | Person | Nation, state, county | Annual | County-level controls, normalization denominators |

## Citation

Cite the specific Census product and vintage, not just "Census." Examples:

- *U.S. Census Bureau, Business Dynamics Statistics, 2022 release,
  https://www.census.gov/programs-surveys/bds.html, accessed YYYY-MM-DD.*
- *U.S. Census Bureau, American Community Survey 5-Year Estimates, 2022,
  Table B19013, accessed via api.census.gov, accessed YYYY-MM-DD.*
- *U.S. Census Bureau, County Business Patterns, 2021,
  https://www.census.gov/programs-surveys/cbp.html, accessed YYYY-MM-DD.*

Each product's landing page lists the suggested citation format and the
appropriate technical documentation to reference.
