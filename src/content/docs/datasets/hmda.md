---
title: "HMDA: Home Mortgage Disclosure Act loan data"
description: >-
  How to pull HMDA mortgage application and origination records for free: the
  CFPB data-browser CSV and aggregations API, the 2018 schema break, the
  privacy-binned public file, the string-ranged DTI trap, and the action_taken
  and sentinel-code gotchas.
sidebar:
  label: HMDA
  order: 9
tags: [mortgages, housing, filings, panel-data, free, no-api-key, cfpb, data:hmda]
verified:
  level: fetched
  date: 2026-06-09
  with: live ffiec.cfpb.gov/v2/data-browser-api fetch (DC 2022 loan-level CSV + aggregations)
---

**HMDA** (Home Mortgage Disclosure Act) data is the near-census of US mortgage
activity: most home-purchase, refinance, and home-improvement applications and
originations, reported loan by loan with borrower demographics, geography, and
(since 2018) pricing and underwriting fields. It is the standard free source for
mortgage-market, fair-lending, redlining, and household-finance research. This
page is the access recipe for the CFPB data browser and its API.

- **Cost:** free, no auth, no API key.
- **Coverage:** nationwide loan-level. Modern expanded schema from 2018; older
  vintages back to the 1990s on a different, smaller schema.
- **Granularity:** one row per application/loan (the Loan/Application Register,
  LAR), privacy-protected in the public release.
- **Home:** <https://ffiec.cfpb.gov/> ·
  **Data browser:** <https://ffiec.cfpb.gov/data-browser/>

## Access

### Option 1: Data-browser CSV (loan-level)

A no-key endpoint returns filtered loan-level rows as CSV. Filter by year,
geography, and any LAR field:

```python
import pandas as pd

url = ("https://ffiec.cfpb.gov/v2/data-browser-api/view/csv"
       "?states=DC&years=2022&actions_taken=1&loan_purposes=1")
lar = pd.read_csv(url, low_memory=False)   # originated home-purchase loans, DC 2022
```

The same query against `/view/aggregations` returns counts and dollar sums
without pulling rows, which is the right call for tabulations:

```
https://ffiec.cfpb.gov/v2/data-browser-api/view/aggregations?states=DC&years=2022&actions_taken=1
# -> {"aggregations":[{"count":14277,"sum":9.96e9,"actions_taken":"1"}], ...}
```

### Option 2: Snapshot national loan-level files

For a full-year national pull, download the annual snapshot dataset rather than
paging the browser API by state:
<https://ffiec.cfpb.gov/data-publication/snapshot-national-loan-level-dataset/2022>
(swap the year). These are large ZIPs of the same privacy-protected LAR plus the
transmittal sheet (institution names and IDs).

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the CFPB site. Verified live on the
date above (DC 2022 loan-level CSV and the aggregations endpoint were pulled).

- **The 2018 schema break.** Expanded HMDA added many fields in 2018
  (`interest_rate`, `loan_to_value_ratio`, `debt_to_income_ratio`,
  `property_value`, `applicant_credit_score_type`, `loan_term`, fees). Pre-2018
  vintages lack them and key lenders differently. Do not assume the modern
  schema for an older year.
- **The public file is privacy-protected, not the raw record.** The released LAR
  bins and suppresses fields: ages are bucketed (`35-44`), debt-to-income is a
  range string, free-text and some exact values are withheld, and small cells
  are masked. The unredacted register is confidential (the FFIEC version);
  treat the public file as a privacy-protected extract.
- **`debt_to_income_ratio` is a string with ranges.** Values like `50%-60%`,
  `<20%`, or `>60%` (and `NA`) sit in the column, so it does not parse as a
  number. Map the buckets explicitly; do not `astype(float)`.
- **Sentinel codes, not nulls.** Missing/not-applicable values use codes:
  `9999` (e.g. `co-applicant_age` when there is no co-applicant), `8888`,
  `NA`, and `Exempt` (small-filer partial exemption). Filter these before
  computing statistics rather than treating them as real magnitudes.
- **`action_taken` controls what a row means.** `1` originated, `2` approved not
  accepted, `3` denied, `4` withdrawn, `5` closed incomplete, `6` purchased
  loan, `7` preapproval denied, `8` preapproval approved but not accepted.
  Filter `action_taken=1` for originations; include
  `1-5` for the application funnel; **purchased loans (`6`) are not new
  originations** and double-count if you also have the originating lender.
- **Use the `derived_` fields for demographics.** `derived_race`,
  `derived_ethnicity`, `derived_sex`, and `derived_loan_product_type` are
  CFPB-computed roll-ups of the raw multi-field encodings
  (`applicant_race-1..5`, etc.); the raw fields are messier to aggregate.
- **Lender identity changed in 2018.** Post-2018 the lender is the `lei` (Legal
  Entity Identifier); pre-2018 it was `respondent_id` + `agency_code`. Join to
  the transmittal sheet / panel for institution names.
- **Geography is FIPS.** `state_code` (2-letter), `county_code` (5-digit FIPS),
  and `census_tract` (11-digit) are the geo keys; tract-level fields
  (`tract_minority_population_percent`, `tract_to_msa_income_percentage`) are
  prejoined for redlining work.

## Key columns

| Column | Meaning |
|---|---|
| `activity_year` | Reporting year |
| `lei` | Lender Legal Entity Identifier (post-2018) |
| `action_taken` | Disposition code (see gotchas) |
| `loan_amount` | Loan amount (dollars; binned for some products) |
| `loan_purpose` | 1 purchase, 2 home improvement, 31/32 refi, 4 other, 5 N/A |
| `derived_race` / `derived_ethnicity` / `derived_sex` | CFPB demographic roll-ups |
| `interest_rate`, `rate_spread`, `loan_to_value_ratio` | Pricing/underwriting (2018+) |
| `debt_to_income_ratio` | Range string, e.g. `50%-60%` (see gotchas) |
| `census_tract`, `county_code`, `state_code` | FIPS geography |
| `denial_reason-1..4` | Denial reasons when `action_taken=3` |

## Standard operations

- **Origination vs application analysis:** filter `action_taken=1` for
  originations; keep `1-5` (drop `6` purchases) for the application funnel and
  denial-rate work.
- **Denial-rate / fair-lending:** model `action_taken in (1,3)` on
  `derived_race`/`derived_ethnicity` with tract and lender controls.
- **Pricing:** use `interest_rate` / `rate_spread` only for 2018+ years.
- **Aggregations first:** use `/view/aggregations` for counts and sums; pull
  loan-level CSV only when you need row detail (large states/years are big).
- **Always state** the year(s), the geography filter, and the `action_taken`
  set, since a count is meaningless without them.

## Citation

*Consumer Financial Protection Bureau / Federal Financial Institutions
Examination Council, Home Mortgage Disclosure Act (HMDA) data; retrieved from
the HMDA data browser (https://ffiec.cfpb.gov/data-browser/), accessed
YYYY-MM-DD.*
