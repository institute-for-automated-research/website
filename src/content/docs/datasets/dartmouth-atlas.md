---
title: "Dartmouth Atlas of Health Care"
description: >-
  How to pull the Dartmouth Atlas ZIP-to-HSA-to-HRR geographic crosswalk and
  regional health-care utilization measures from the no-key data downloads, and
  the gotchas that bite pipelines (HSA/HRR are care markets not Census
  geographies, the crosswalk vintage matters, utilization is age-sex-adjusted).
sidebar:
  label: Dartmouth Atlas
  order: 47
tags: [healthcare, geography, hospitals, free, no-api-key, data:dartmouth-atlas]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-key download of the Dartmouth Atlas ZIP-to-HSA-to-HRR crosswalk (ZipHsaHrr19.csv.zip, ZipHsaHrr19.csv ~1.7 MB)
  access: free
---

**The Dartmouth Atlas of Health Care** maps how medical resources are
distributed and used across the United States. Its lasting contribution is two
geographic units built from Medicare patient flows: the **Hospital Service Area
(HSA)**, a local market of ZIP codes whose residents mostly use a given
hospital, and the **Hospital Referral Region (HRR)**, a larger region organized
around tertiary referral care. These are the standard way to define a hospital's
local market. The Atlas also publishes regional utilization, spending, and
workforce measures. The data is free and public. Used in, for example,
[Lewellen](/wiki/papers/jf/2025/lewellen-women-charge-evidence-hospitals-2025/),
where Dartmouth Atlas HSAs supply the geographic market definitions for
hospitals (with demographics drawn from the 2010 Census).

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** national; ZIP-to-HSA-to-HRR crosswalk plus regional utilization
  and spending measures, derived from Medicare claims.
- **Home:** <https://www.dartmouthatlas.org/> (data at
  <https://data.dartmouthatlas.org/>)

## Access

The geographic crosswalk and the measure files are plain downloads, no
authentication:

```bash
# ZIP -> HSA -> HRR crosswalk (the workhorse file; vintage in the name)
curl -sL -o ZipHsaHrr19.csv.zip \
  "https://data.dartmouthatlas.org/downloads/geography/ZipHsaHrr19.csv.zip"
unzip ZipHsaHrr19.csv.zip   # -> ZipHsaHrr19.csv
```

The crosswalk columns are `zipcode19, hsanum, hsacity, hsastate, hrrnum,
hrrcity, hrrstate`: every ZIP maps to exactly one HSA and one HRR, labelled by
the dominant city and state. Utilization, spending, and post-discharge measure
files (by HSA, HRR, hospital, or state) are downloadable from the same data
portal under their topic sections.

### Load in Python

```python
import pandas as pd

xw = pd.read_csv("ZipHsaHrr19.csv", dtype={"zipcode19": str})
# Map a hospital's ZIP to its market:
zip_to_hrr = xw.set_index("zipcode19")["hrrnum"].to_dict()
# ~3,400 HSAs nest into 306 HRRs nationally.
```

## Gotchas (the ones that bite pipelines)

- **HSAs and HRRs are care markets, not Census or postal geographies.** They are
  built from where Medicare patients actually go for care, so they cross county
  and state lines and do not nest inside CBSAs, counties, or ZIP-code tabulation
  areas. Do not treat an HRR as a metro area or merge it to county-level Census
  data without an explicit, area-weighted crosswalk.
- **The crosswalk is versioned; match the vintage to your sample.** The file is
  named for its ZIP vintage (`ZipHsaHrr19` = 2019 ZIPs). ZIP codes are added,
  retired, and reassigned over time, and the HSA/HRR boundaries were defined from
  a specific Medicare era (the canonical 1990s definitions, periodically
  refreshed). Using a 2019 crosswalk on 2005 ZIPs (or vice versa) silently
  drops or misassigns codes. Pick the crosswalk vintage closest to your data.
- **It is built from Medicare (elderly) flows.** The market definitions and most
  utilization measures derive from fee-for-service Medicare claims, so they
  describe the over-65 population's care-seeking. Applying them to commercially
  insured or pediatric populations imports an age-skewed market definition; note
  the assumption.
- **Utilization and spending measures are age-sex-(race-)adjusted.** The Atlas
  reports rates standardized for demographic mix (and price-adjusted for
  spending), not raw counts. Two regions' "spending" are comparable by design
  but are not the dollars actually spent; read each measure's adjustment notes
  before using it as a level.
- **One ZIP, one HSA, one HRR; population is not split.** The crosswalk assigns
  each ZIP wholly to a single HSA/HRR by dominant flow, with no fractional
  allocation. A ZIP that straddles two markets is assigned to one, so
  aggregating ZIP-level counts to HRRs is exact but the boundary is approximate.
- **`hrrnum`/`hsanum` are the join keys, not the city labels.** Match on the
  numeric `hrrnum` (306 HRRs) and `hsanum` codes; the `hrrcity`/`hsacity` labels
  are not unique and change formatting across files.

## Geographic units

| Unit | Count (national) | Definition |
|---|---|---|
| ZIP code | ~40,000 | Postal ZIP (vintage-dated in the file name) |
| HSA (Hospital Service Area) | ~3,400 | Local hospital market: ZIPs whose residents use a given hospital |
| HRR (Hospital Referral Region) | 306 | Tertiary-care referral region (nests HSAs) |

## Citation

Cite the Dartmouth Atlas, the file and its vintage, the URL, and the access
date, for example: *The Dartmouth Atlas of Health Care, ZIP-to-HSA-to-HRR
crosswalk (ZipHsaHrr19), retrieved from https://data.dartmouthatlas.org/,
accessed YYYY-MM-DD.* Record the crosswalk vintage and, for measures, the
reporting year and adjustment, so the geography and rates are reproducible.
