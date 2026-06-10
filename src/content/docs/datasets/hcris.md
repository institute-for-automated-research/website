---
title: "HCRIS (Medicare Hospital Cost Reports, CMS)"
description: >-
  How to pull hospital cost-report data from CMS HCRIS, including the no-key
  bulk download, the flat-file worksheet layout, and the gotchas that bite
  pipelines (form versions, alpha/numeric files, fiscal-year boundaries).
sidebar:
  label: HCRIS
  order: 39
tags: [healthcare, hospitals, filings, microdata, free, no-api-key, data:hcris]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of the HCRIS hospital cost-report archive (downloads.cms.gov/Files/hcris/HOSP10FY2021.zip, ~137 MB)
  access: free
---

**HCRIS** (the Healthcare Cost Report Information System) holds the annual cost
reports that Medicare-certified institutional providers file with the Centers
for Medicare & Medicaid Services (CMS). The hospital report (Form CMS-2552) is
the most-used: facility-level financials, charges, costs, beds, discharges,
uncompensated and charity care, and Medicare utilization, for nearly every US
hospital. The data is free and public. Used in, for example,
[Lewellen](/wiki/papers/jf/2025/lewellen-women-charge-evidence-hospitals-2025/),
where the 2011-2018 hospital reports supply Charity Care and Uninsured Discounts
spending.

- **Cost:** free, public.
- **API key:** none required for the bulk files.
- **Coverage:** institutional Medicare cost reports; the hospital form
  (CMS-2552) for essentially all US hospitals, by provider fiscal year.
- **Home:** <https://www.cms.gov/data-research/statistics-trends-and-reports/cost-reports>

## Access

CMS publishes the data as bulk archives, one per provider type and fiscal year,
under `downloads.cms.gov/Files/hcris/`. The hospital form (CMS-2552-10) files
are named `HOSP10FY<year>.zip`:

```bash
# Hospital cost reports (CMS-2552-10), FY2021 archive, no key
curl -sL -o HOSP10FY2021.zip \
  "https://downloads.cms.gov/Files/hcris/HOSP10FY2021.zip"
unzip HOSP10FY2021.zip
```

Each archive holds the standard HCRIS flat files for that year:

- `*_RPT.CSV` - report-level records (one row per cost report: provider number,
  fiscal-year begin/end dates, status, the report record number that joins the
  others).
- `*_NMRC.CSV` - the numeric data lines (worksheet, line, column, numeric
  value).
- `*_ALPHA.CSV` - the alphanumeric data lines (text-valued cells).
- Plus roster and supporting files.

A single reported figure (say, charity care) is a cell located by
**worksheet + line + column** in the numeric file, joined to the report record
in `RPT`. There is no wide "one row per hospital" table; you pivot the long
worksheet cells yourself using the cost-report form layout.

### Load in Python

```python
import pandas as pd

rpt = pd.read_csv("HOSP10_2021_RPT.CSV", header=None, dtype=str)
nmrc = pd.read_csv("HOSP10_2021_NMRC.CSV", header=None, dtype=str)
# NMRC columns: record number, worksheet code, line, column, value.
# Locate a cell by (worksheet, line, column) from the CMS-2552-10 form,
# then join to RPT on the report record number to get provider + fiscal year.
```

Confirm the column order against the HCRIS documentation for the vintage you
pulled; the flat files ship without header rows.

## Gotchas (the ones that bite pipelines)

- **Two form versions coexist: CMS-2552-96 and CMS-2552-10.** Hospitals moved
  to the `-10` form for cost-reporting periods beginning on or after 1 May 2010.
  Worksheet, line, and column coordinates differ between the two forms; a line
  number is meaningless without knowing which form produced it. The `HOSP10`
  files are the `-10` form; older years use the `-96` layout.
- **Data lives in long worksheet cells, not columns.** A variable is a
  (worksheet, line, column) triple in the numeric file. Build an explicit
  mapping from the form before extracting; the wrong line silently returns a
  different concept.
- **Provider fiscal years are not calendar years and vary in length.** Each
  report covers that hospital's own fiscal year, and short or long periods occur
  (mergers, fiscal-year changes). Align on the begin/end dates in `RPT`, not on
  a calendar-year label.
- **One provider can have multiple reports for a period.** Amended, reopened,
  or superseded reports appear; use the report status and dates in `RPT` to keep
  the right one rather than summing duplicates.
- **The most recent fiscal years are incomplete.** Reports arrive and settle
  with a lag, so the latest year's archive keeps growing and is partial when
  first posted. Treat recent vintages as not-yet-final.
- **Alphanumeric versus numeric files hold different cells.** Text-valued
  fields are in `ALPHA`, numeric in `NMRC`. A field you cannot find in one is
  often in the other.

## Provider types

| File prefix | Form | Provider type |
|-------------|------|---------------|
| `HOSP10` | CMS-2552-10 | Hospitals (2010 form onward) |
| `HOSP` | CMS-2552-96 | Hospitals (1996 form) |
| `SNF10` | CMS-2540-10 | Skilled nursing facilities |
| `HHA10` | CMS-1728-94/-20 | Home health agencies |
| `HOSPICE` | CMS-1984-14 | Hospices |

Match the file prefix and form version before pulling line numbers; layouts are
form-specific.

## Citation

Cite CMS, HCRIS, the form and provider type, the fiscal years, the URL, and the
access date, for example: *Centers for Medicare & Medicaid Services, Healthcare
Cost Report Information System, Hospital Form CMS-2552-10, FY2021, retrieved
from https://downloads.cms.gov/Files/hcris/, accessed YYYY-MM-DD.* Record the
form version and the worksheet/line/column coordinates used so the extract is
reproducible.
