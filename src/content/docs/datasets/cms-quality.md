---
title: "CMS Hospital Quality & Patient-Outcome Metrics (Care Compare)"
description: >-
  How to pull CMS hospital quality measures (mortality, readmissions,
  complications, HCAHPS patient satisfaction) from the no-key Provider Data
  Catalog API, and the gotchas that bite pipelines (risk-adjusted not raw,
  suppressed small cells, measures and vintages change, footnote codes).
sidebar:
  label: CMS quality
  order: 46
tags: [healthcare, hospitals, quality, free, no-api-key, data:cms-quality]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-key pull of the CMS Provider Data Catalog API (metastore) + the "Complications and Deaths - Hospital" CSV (95,840 rows)
  access: free
---

**CMS hospital quality and patient-outcome metrics** are the publicly reported
performance measures behind Medicare's **Care Compare** (formerly Hospital
Compare): risk-adjusted mortality and readmission rates, complication rates,
healthcare-associated infections, timely/effective-care process measures, and
**HCAHPS** patient-satisfaction survey results, reported per hospital. The data
is free and public. Used in, for example,
[Lewellen](/wiki/papers/jf/2025/lewellen-women-charge-evidence-hospitals-2025/),
where CMS patient-outcome metrics (mortality, readmissions, patient
satisfaction) are nonfinancial hospital-performance proxies in supplementary
tests.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** all Medicare-certified hospitals (~4,000-5,000 facilities);
  many measures published from 2008-2009 onward, refreshed roughly quarterly.
- **Home:** <https://data.cms.gov/provider-data/>

## Access

The Provider Data Catalog exposes a DKAN/metastore API. List datasets, then pull
a dataset's CSV distribution. No authentication:

```bash
# 1. List all provider-data datasets (titles + identifiers)
curl -sL "https://data.cms.gov/provider-data/api/1/metastore/schemas/dataset/items?show-reference-ids=false"

# 2. Resolve one dataset's CSV download URL (e.g. Complications and Deaths - Hospital)
curl -sL "https://data.cms.gov/provider-data/api/1/metastore/schemas/dataset/items/ynj2-r877?show-reference-ids=true"

# 3. Download the CSV using the downloadURL from the step-2 response.
#    The resources/<hash>_<id>/ subdirectory is in that response and changes
#    each refresh, so read it from the API rather than hard-coding it:
curl -sL -o complications_deaths_hospital.csv \
  "https://data.cms.gov/provider-data/sites/default/files/resources/6af7c44d77436e5a1caac3ce39a83fe9_1777413950/Complications_and_Deaths-Hospital.csv"
```

Each measure family is published at three grains as separate datasets, suffixed
`- Hospital`, `- State`, and `- National` (for example `ynj2-r877` Complications
and Deaths - Hospital, `dgck-syfz` Patient survey (HCAHPS) - Hospital,
`77hc-ibv8` Healthcare Associated Infections - Hospital). A hospital row carries
`Facility ID` (the CMS Certification Number, CCN), `Measure ID`, `Score`,
`Denominator`, `Lower Estimate`, `Higher Estimate`, and a `Compared to National`
flag.

### Load in Python

```python
import pandas as pd

df = pd.read_csv("complications_deaths_hospital.csv", dtype={"Facility ID": str})
# Long format: one row per (Facility ID, Measure ID). Pivot to a hospital panel:
wide = df.pivot_table(index="Facility ID", columns="Measure ID",
                      values="Score", aggfunc="first")
```

## Gotchas (the ones that bite pipelines)

- **Scores are risk-adjusted, not raw rates.** Mortality, readmission, and
  complication measures are CMS risk-standardized rates (RSMR/RSRR), modeled to
  adjust for patient case mix. They are **not** raw counts divided by
  admissions, and the adjustment model changes over time. Do not compare a CMS
  risk-adjusted rate to a hand-computed raw rate as if they measure the same
  thing.
- **`Score` is text with footnote codes, not always a number.** Cells for
  suppressed or not-applicable measures hold footnote codes (for example "Not
  Available", "Number of Cases Too Small") rather than a value. Parse the
  companion footnote columns and coerce `Score` to numeric explicitly; a naive
  `float()` will choke or silently drop rows.
- **Small-volume hospitals are suppressed.** Measures are withheld when the
  denominator is below a threshold (commonly 25 cases). This censors small and
  rural hospitals non-randomly, so a sample of hospitals with non-missing scores
  is selected toward larger facilities. Account for this before treating missing
  as random.
- **Measures and reporting periods change across refreshes.** CMS adds, retires,
  and re-specifies measures, and each measure covers a rolling multi-year
  window (often three years of discharges) that is **not** the calendar year of
  the file. Two vintages can have different `Measure ID` sets and different
  underlying periods; pin the refresh date and read the measure's data-collection
  window, do not assume the file year is the data year.
- **Join key is the CCN, and it is a string.** `Facility ID` is the 6-character
  CMS Certification Number. For the acute-care, critical-access, and psychiatric
  hospitals in Care Compare it is all digits with leading zeros (for example
  `140010`), so read it as a string or the leading zeros are lost. It is not the
  NPI, not the AHA ID, and not an EIN; crosswalking to AHA or HCRIS requires the
  CCN explicitly.
- **HCAHPS is survey-based and differently scaled.** Patient-satisfaction
  (HCAHPS) measures are "top-box" percentages from a sampled survey with their
  own response-rate and mode adjustments, on a different scale from the clinical
  outcome measures. Do not pool HCAHPS percentages with risk-adjusted rates
  without rescaling.

## Measure families (per-hospital datasets)

| Family | Example dataset id | What it reports |
|---|---|---|
| Complications and Deaths | `ynj2-r877` | Risk-adjusted mortality and complication rates |
| Unplanned Hospital Visits | (readmissions) | Risk-adjusted readmission / return rates |
| Healthcare Associated Infections | `77hc-ibv8` | CLABSI, CAUTI, SSI, MRSA, C. diff |
| Patient survey (HCAHPS) | `dgck-syfz` | Patient-experience top-box percentages |
| Timely and Effective Care | (process) | Process-of-care / timeliness measures |

(Each also has `- State` and `- National` siblings for the benchmark levels.)

## Citation

Cite CMS, Care Compare / Provider Data Catalog, the dataset name and identifier,
the refresh date, and the access date, for example: *Centers for Medicare and
Medicaid Services, Care Compare: Complications and Deaths - Hospital
(data.cms.gov/provider-data, dataset ynj2-r877), accessed YYYY-MM-DD.* Record
the dataset identifier and refresh date, since measures and periods change
between vintages.
