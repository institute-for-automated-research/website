---
title: "DFA: Distributional Financial Accounts (Federal Reserve)"
description: >-
  How to download the Federal Reserve Board's Distributional Financial Accounts,
  which give quarterly estimates of US household wealth distribution by wealth
  percentile, generation, education, and race, reconciled to Z.1 aggregates,
  with no key required.
sidebar:
  label: DFA
  order: 18
tags: [macro, wealth-distribution, free, no-api-key, federal-reserve, time-series, data:dfa]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of dfa.zip CSV tables from federalreserve.gov
  access: free
---

**Note:** DFA here refers to the Federal Reserve Board's Distributional Financial Accounts, not Dimensional Fund Advisors.

**The Distributional Financial Accounts (DFA)** are the Federal Reserve Board's quarterly estimates of the distribution of US household wealth (assets, liabilities, and net worth) across groups defined by wealth percentile, income, generation (age cohort), education, and race. The series are reconciled to the Financial Accounts of the United States (Z.1) totals. Used in, for example, [Catherine, Miller & Sarin](/wiki/papers/jf/2025/catherine-social-security-trends-wealth-2025/) for the aggregate value of defined-benefit pension obligations by wealth group.

- **Cost:** free, no paywall, no key.
- **Coverage:** US households, quarterly, from 1989 Q3.
- **Breakdowns:** wealth percentile (top 0.1%, 1%, 10%, next 40%, bottom 50%), generation (Silent and earlier, Baby Boomer, Gen X, Millennial, Gen Z and younger), education (college degree, some college, no college), race (White non-Hispanic, Black and African American, Hispanic, Other).
- **Home:** <https://www.federalreserve.gov/releases/z1/dataviz/dfa/>

## Access

The entire release is a single zip of CSV tables, downloadable with no authentication:

```
https://www.federalreserve.gov/releases/z1/dataviz/download/zips/dfa.zip
```

The zip contains files such as:

- `dfa-networth-levels-detail.csv` (net worth levels by wealth percentile)
- `dfa-generation-levels.csv` (levels by generation)
- `dfa-education-shares.csv` (shares by education)
- `dfa-race-shares.csv` (shares by race)
- `dfa-data-definitions.txt` (variable definitions and metadata)

### Shell

```bash
curl -O https://www.federalreserve.gov/releases/z1/dataviz/download/zips/dfa.zip
unzip dfa.zip -d dfa/
```

### Python

```python
import io, zipfile, urllib.request
import pandas as pd

url = "https://www.federalreserve.gov/releases/z1/dataviz/download/zips/dfa.zip"
with urllib.request.urlopen(url) as resp:
    zf = zipfile.ZipFile(io.BytesIO(resp.read()))

# list available tables
print(zf.namelist())

# load net worth levels by wealth percentile
nw = pd.read_csv(zf.open("dfa-networth-levels-detail.csv"))
print(nw.head())
```

An interactive data visualization tool is also available on the home page above, allowing point-and-click queries by category and date range without any download.

## Gotchas (the ones that bite pipelines)

- **Model-based distribution, not direct measurement.** The DFA interpolate the triennial Survey of Consumer Finances (SCF) onto quarterly Z.1 aggregates. Quarterly distributional movements between SCF waves are smoothed and imputed, not directly observed. Treat quarter-over-quarter changes in distributional shares with appropriate skepticism, especially in non-SCF years.
- **Definitions follow Z.1, not household intuition.** Because the DFA reconcile to Financial Accounts totals, category definitions (e.g. defined-benefit pension entitlements as a specific Z.1 line item) may differ from what a survey respondent or a household-level study would count. Read `dfa-data-definitions.txt` before constructing any derived series.
- **Wealth groups are contemporaneous, not cohorts.** The "top 1%" series tracks whichever households are in the top 1% in each period. It does not follow the same households over time. Do not interpret changes in group-level holdings as individual-level dynamics.
- **Breakdowns are not cross-tabulated.** The percentile breakdown, the generation breakdown, the education breakdown, and the race breakdown are separate files. There is no joint distribution (e.g. "top 10% by wealth among Black households") in the public release.
- **Vintage dependence.** The DFA are revised whenever the underlying SCF or Z.1 is revised. A replication that does not pin the download vintage may not reproduce exactly. Record the access date and, where possible, the release label printed in the data definitions file.

## Standard operations

- **Shares vs. levels:** the zip provides both. Use shares when comparing relative concentration across time; use levels when calibrating a model that requires dollar magnitudes. Never mix the two without rescaling.
- **Reconciliation check:** sum the wealth-percentile group levels; they should equal the Z.1 household net worth aggregate for that quarter (small rounding differences are expected).
- **Merging with Z.1:** the DFA are designed to be used alongside Z.1 tables. Match by date column and verify the aggregate before constructing group-level series derived from other Z.1 lines.
- **Always state the vintage and breakdown dimension** (percentile, generation, education, or race) in any result that relies on these data.

## Citation

Cite the Federal Reserve Board Distributional Financial Accounts with the release vintage date and the specific table (levels or shares, and the breakdown dimension) used. Example:

*Board of Governors of the Federal Reserve System, Distributional Financial Accounts: Net Worth Levels by Wealth Percentile [dfa-networth-levels-detail.csv], release dated YYYY-QQ, downloaded from https://www.federalreserve.gov/releases/z1/dataviz/dfa/, accessed YYYY-MM-DD.*

The home page lists the current release date; record it at time of download.
