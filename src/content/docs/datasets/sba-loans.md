---
title: "SBA 7(a) and 504 loan data (FOIA)"
description: >-
  How to download and work with the U.S. Small Business Administration's
  loan-level FOIA datasets for the 7(a) and 504/CDC programs, including
  the CKAN portal, direct CSV access, and the gotchas that bite pipelines.
sidebar:
  label: SBA loans
  order: 15
tags: [small-business, lending, free, no-api-key, loan-data, data:sba-loans]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key CSV pull of the SBA 7(a) FOIA file (data.sba.gov, FY2010-FY2019)
  access: free
---

**SBA 7(a) and 504 loan data (FOIA)** is a set of loan-level files released by
the U.S. Small Business Administration under FOIA. Each record is one approved
loan and includes borrower name and address, lender name and FDIC/NCUA number,
gross approval amount, SBA-guaranteed amount, approval date and fiscal year,
initial interest rate, fixed-or-variable indicator, term in months, NAICS code
and description, project county and state, SBA district office, congressional
district, and jobs supported. The files cover the two main SBA credit programs:
the 7(a) loan-guarantee program and the 504/CDC program. Used in, for example,
[Johnston-Ross, Ma & Puri](/wiki/papers/jf/2025/johnston-ross-private-equity-financial-stability-2025/)
for the number, amount, interest rate, and average size of small-business loans
by county.

- **Cost:** free, public domain.
- **API key:** none required.
- **Coverage:** 7(a) approvals from FY1991 and 504 approvals from FY1991, split
  into FY-range files, refreshed periodically. Each filename encodes an "asof"
  snapshot date.
- **Home:** <https://data.sba.gov/dataset/7-a-504-foia>

## Access

The portal is a CKAN instance. You can query it programmatically to list all
resources, then download any CSV directly without authentication.

### Step 1: list available resources

```bash
curl -s "https://data.sba.gov/api/3/action/package_show?id=7-a-504-foia" \
  | python3 -c "
import json, sys
pkg = json.load(sys.stdin)
for r in pkg['result']['resources']:
    print(r['name'], r['url'])
"
```

This prints each resource name (e.g. `7(a) FY2010-FY2019 (asof 230930)`) and
its direct download URL.

### Step 2: download a CSV file

Pick the URL for the file you need and fetch it directly:

```bash
# Example: 7(a) FY2010-FY2019 snapshot
curl -L -o sba_7a_2010_2019.csv \
  "https://data.sba.gov/dataset/7-a-504-foia/resource/<resource-id>/download/<filename>.csv"
```

Replace `<resource-id>` and `<filename>` with values from the package listing
above; the exact URL is stable for a given snapshot.

### Step 3: load in Python

```python
import pandas as pd

df = pd.read_csv(
    "sba_7a_2010_2019.csv",
    dtype=str,           # read everything as str first; cast after schema alignment
    low_memory=False,
)

# Cast key numeric fields after inspection
df["GrossApproval"] = pd.to_numeric(df["GrossApproval"], errors="coerce")
df["ApprovalDate"]  = pd.to_datetime(df["ApprovalDate"], errors="coerce")
```

A separate data-dictionary XLSX is listed alongside the CSV resources in the
package; download it to map coded fields and confirm column names for the
vintage you are using.

## Gotchas (the ones that bite pipelines)

- **Approvals, not disbursements or outcomes.** Every record means a loan was
  approved. The file carries no information on whether the loan was fully drawn,
  repaid, or defaulted. Default and charge-off information lives in a separate
  SBA purchase/charge-off dataset; join on the loan number if you need it.
- **Multiple FY-range CSVs that must be concatenated; schemas drift.** The data
  is split into files by program and FY range. Column names and coded values
  change across vintages: a field named `NaicsCode` in one file may appear as
  `NAICS` in another. Inspect and align schemas before stacking; do not assume
  a union of columns is safe.
- **Pin the "asof" snapshot date.** Each filename encodes a snapshot date (e.g.
  `asof230930` for the September 30, 2023 cut). Records can be retroactively
  revised or added in later snapshots. To reproduce a prior result, use the
  same snapshot, not the latest file.
- **Geography is recorded at approval.** The project county and state reflect
  where the project was located at the time of approval. There is no update if
  the borrower relocates.
- **NAICS definitions change across years.** NAICS codes are revised on a
  five-year cycle. A code present in FY1997 data may map to a different
  industry description in FY2022 data. Use the NAICS revision year to
  cross-walk codes before aggregating across long panels.
- **7(a) and 504 have different structures; do not pool blindly.** The 7(a)
  program is a direct guarantee to a participating lender. The 504 program
  involves a Certified Development Company (CDC) and a separate third-party
  lender, so the "lender" field means different things. The guaranteed
  percentage and term conventions also differ. Keep the programs separate unless
  you have a specific reason to combine them, and document that choice.

## Citation

Cite the program, the FY-range file(s), and the specific "asof" snapshot date
used, for example: *U.S. Small Business Administration, 7(a) Loan Data
(FOIA), FY2010-FY2019 (as of 2023-09-30), retrieved from
https://data.sba.gov/dataset/7-a-504-foia, accessed YYYY-MM-DD.* The snapshot
date is in the filename; record it so the pull is reproducible.
