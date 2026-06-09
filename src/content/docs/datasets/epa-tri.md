---
title: "EPA Toxics Release Inventory (TRI)"
description: >-
  Facility-by-chemical annual reports of toxic chemical releases and waste
  management from the U.S. EPA, with the no-key bulk CSV and Envirofacts REST
  recipes and the gotchas that bite pipelines.
sidebar:
  label: EPA TRI
  order: 22
tags: [pollution, environmental, esg, free, no-api-key, panel-data, data:epa-tri]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key pulls of the EPA TRI bulk CSV (mv_tri_basic_download/2022_US) and Envirofacts tri_facility JSON (data.epa.gov)
  access: free
---

The **Toxics Release Inventory (TRI)** is the U.S. EPA's annual program tracking
releases and other waste management of listed toxic chemicals. Facilities above
size and chemical-throughput thresholds in covered industry sectors must report
under Section 313 of the Emergency Planning and Community Right-to-Know Act
(EPCRA). Each record is at the facility x chemical x year level: on-site and
off-site releases (to air, water, land), plus recycling, energy recovery, and
treatment quantities. Reporting began for 1987. Used in, for example,
[Duchin, Gao & Xu](/wiki/papers/jf/2025/duchin-sustainability-greenwashing-evidence-asset-2025/)
for plant-chemical-level toxic emissions (total pollution, pollution intensity,
abatement), 1,056,361 plant-chemical-year observations, 2000-2020.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** facility x chemical x year, reporting years from 1987 to the most
  recent processed year, for covered industry sectors and listed chemicals.
- **Home:** <https://www.epa.gov/toxics-release-inventory-tri-program>

## Access

All paths below need no key. The bulk path gives you a full year of national
data in one file; the Envirofacts REST service lets you slice individual TRI
tables. The TRI Basic Data Files (annual CSV/ZIP) are also published on the EPA
website if you prefer to download by hand.

### Option 1: bulk CSV (one year, national)

A materialized download view returns a full year of US data as a single CSV:

```bash
# (a) Bulk: one year, national, as CSV (no key)
curl -sL -o tri_2022_US.csv \
  "https://data.epa.gov/efservice/downloads/tri/mv_tri_basic_download/2022_US/csv"
```

The 2022 US file is roughly 25 MB. Load it as strings first, then cast the
columns you need:

```python
import pandas as pd

df = pd.read_csv(
    "tri_2022_US.csv",
    dtype=str,           # read everything as str first; cast after schema alignment
    low_memory=False,
)

# Cast key fields after inspecting column names and the unit column
df["total_releases"] = pd.to_numeric(df["TOTAL RELEASES"], errors="coerce")
```

Inspect the header before casting; column names and the unit column matter (see
Gotchas).

### Option 2: Envirofacts REST service

The Envirofacts service exposes TRI tables directly. The URL grammar is:

```
https://data.epa.gov/efservice/<table>/<column>/<value>/rows/<start>:<end>/<format>
```

`<format>` can be `JSON` or `CSV`. The `rows/<start>:<end>` window is required
for large tables.

```bash
# (b) Envirofacts REST: a windowed slice of a TRI table as JSON (no key)
curl -sL "https://data.epa.gov/efservice/tri_facility/state_abbr/CA/rows/0:1/JSON"
```

This returns facility records with fields such as `tri_facility_id`,
`facility_name`, `street_address`, `city_name`, `county_name`,
`state_county_fips_code`, `state_abbr`, `zip_code`, `region`, `fac_closed_ind`,
and `frs_id`. Page through a table with successive windows
(`rows/0:9999`, `rows/10000:19999`, and so on).

## Gotchas (the ones that bite pipelines)

- **Self-reported estimates, not measured emissions.** TRI quantities are
  estimates; estimation methods vary by facility, and reported values can be
  revised and back-filed in later releases. Pin the release year you pulled.
- **Chemical list and thresholds change across years.** A chemical added in a
  given year appears to jump from zero. That is a reporting-scope change, not a
  real increase. Check whether a chemical was reportable in the years you
  compare.
- **Covered sectors have expanded over time.** Do not read a sector first
  appearing in the data as a real onset of pollution; it can be a coverage
  change.
- **Units: pounds, except PBT chemicals in grams.** Quantities are in pounds,
  except certain highly toxic persistent bioaccumulative and toxic (PBT)
  chemicals (such as dioxin and dioxin-like compounds), which are reported in
  grams. Never sum the raw quantity column across chemicals without
  unit-aligning first; do not sum pounds and grams.
- **Facility identity drifts.** TRI Facility ID, FRS ID, and parent-company name
  do not map one-to-one, and ownership changes across years break a naive
  facility panel. This matters for any buyer/seller or plant-tracking analysis
  (as in the citing paper); link facilities deliberately across years.
- **On-site vs. off-site, released vs. managed.** Do not conflate on-site versus
  off-site, or "released" versus "managed as waste". These are distinct columns
  with distinct meaning.
- **Envirofacts needs the rows window.** The REST service requires the
  `rows/<start>:<end>` window for large tables, or the request times out. Page
  through with successive windows.

## Citation

Cite the U.S. EPA, the Toxics Release Inventory, the reporting year(s), and the
specific file or Envirofacts table used, with the EPA URL and the access date,
for example: *U.S. Environmental Protection Agency, Toxics Release Inventory
(TRI), reporting year 2022, TRI Basic Data Download
(mv_tri_basic_download/2022_US), retrieved from
https://data.epa.gov/efservice/downloads/tri/mv_tri_basic_download/2022_US/csv,
accessed YYYY-MM-DD.* Record the reporting year and the table or file so the
pull is reproducible.
