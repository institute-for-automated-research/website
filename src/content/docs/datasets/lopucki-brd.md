---
title: "Florida-UCLA-LoPucki Bankruptcy Research Database (BRD)"
description: >-
  Case-level records for large U.S. public-company bankruptcies (Chapter 11/7,
  assets >= $100 million in 1980 dollars) from 1980 through the December 2022
  final update, distributed free via a research-use click-through agreement
  at lopucki.law.ufl.edu; the database is frozen and will not be updated further.
sidebar:
  label: LoPucki BRD
  order: 62
tags: [bankruptcy, corporate-finance, distress, event-data, free, no-api-key, academic, data:lopucki-brd]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-login download of the Cases table ZIP from lopucki.law.ufl.edu/download_cases_table.php (HTTP 200, application/zip, 2,938,544 bytes) containing the Florida-UCLA-LoPucki Bankruptcy Research Database 1-12-2023 CSV and XLSX, Protocols.pdf, and Stata import/label .do files
  access: free
---

**The Florida-UCLA-LoPucki Bankruptcy Research Database (BRD)** is a case-level
record of large U.S. public-company bankruptcy filings, assembled by Lynn M.
LoPucki and now preserved by the University of Florida Levin College of Law (the
site formerly resided at UCLA; lopucki.law.ucla.edu now redirects). Each row is one bankruptcy case. Covered fields include filing,
confirmation, and emergence dates; the federal court, district, and judge;
whether the case was prepackaged or free-fall; the outcome (emerged, acquired,
or liquidated); whether the firm refiled (Chapter 22 = second filing, Chapter
33 = third); CEO turnover around filing; and professional fees. Used in, for
example,
[Griffin, Nini & Smith (2026)](/wiki/papers/jf/2026/griffin-loan-covenant-violations-decline-2026/),
where BRD filing dates support false-negative classification of covenant violations
near bankruptcy.

- **Cost:** free.
- **API key:** none. The data downloads as a ZIP after a click-through form.
- **Coverage:** Chapter 11 (or Chapter 7) cases where the filing firm had assets
  of at least $100 million in 1980 dollars, as reported in the fiscal year before
  filing. Cases from 1980 onward.
- **Final update:** January 12, 2023 (frozen; no further updates planned).
- **Home:** <https://lopucki.law.ufl.edu>

## Access

The Cases table is served via a click-through research-use agreement at the form
page. After checking the agreement box and submitting, the server delivers the
ZIP directly. There is no terms-free direct URL and no API.

```bash
# Complete the form at:
#   https://lopucki.law.ufl.edu/download_cases_table.php
# After the POST accepting the research-use terms, the server returns (verified 2026-06-22):
#   HTTP 200, Content-Type: application/zip, 2,938,544 bytes
#
# Automated pipelines must handle the form POST carrying the agreement checkbox.
# A manually cached copy avoids repeating the click-through.
```

The ZIP contains:
- `Florida-UCLA-LoPucki Bankruptcy Research Database 1-12-2023.csv` (the data)
- `Florida-UCLA-LoPucki Bankruptcy Research Database 1-12-2023.xlsx` (same data)
- `Protocols.pdf` (field definitions, inclusion rules, coding conventions)
- `BRD Import.do` (Stata import script)
- `BRD Labels.do` (Stata variable-label and value-coding script)

A free sample (`/sample_download.php`) and a user manual are available on the
site without the click-through, useful for inspecting field structure before
agreeing to the terms. A separate "Purchase options" page (`/buy_cases_table.php`)
covers additional or derived products; the core Cases table itself is free.

Read `Protocols.pdf` before using the data. It defines the $100M inclusion
threshold, the coding for each field, and conventions for missing or recoded values.

## Gotchas (the ones that bite pipelines)

- **Frozen database.** The site states the BRD will not be updated after the
  December 2022 update (final file date January 12, 2023). No case filed after
  that date will appear. It is now a historical resource.
- **Click-through agreement required; redistribution is restricted.** The terms
  prohibit disclosing the database or its data except, for the purpose of the
  user's own research, to a co-researcher or research assistant who has accepted
  the same conditions. An automated pipeline must handle the form POST with the
  agreement checkbox; there is no direct no-click URL.
- **One row per case, not per firm.** A firm with two bankruptcy filings (Chapter
  22) appears as two rows. Key on the case identifier, not the company name, for
  all joins.
- **Small bankruptcies absent by design.** The $100M-in-1980-dollars threshold
  excludes small filings entirely. The BRD is not a census of all Chapter 11s.
  For completeness checks or work requiring smaller-firm coverage, pair with
  PACER court records or EDGAR filings.
- **CSV and XLSX contain the same data.** Choose one format; do not merge both.
- **Categorical fields require Protocols.pdf for coding.** The Stata .do files
  apply variable labels and value codings; the raw CSV contains numeric codes
  for outcome, filing type, refiling status, and similar categorical columns.
  Without Protocols.pdf the coding for these fields is ambiguous.

## Reference

| Field | Value |
|-------|-------|
| Host | University of Florida Levin College of Law: `lopucki.law.ufl.edu` |
| Download | Click-through research-use form at `/download_cases_table.php` |
| ZIP contents | CSV, XLSX (same data), Protocols.pdf, BRD Import.do, BRD Labels.do |
| Scope | U.S. public companies, Ch. 11/7, assets >= $100M in 1980 dollars, cases 1980-2022 |
| Unit of observation | One row per bankruptcy case |
| Final update | January 12, 2023 (frozen) |
| Key required | No (research-use click-through required) |

## Citation

Cite Lynn M. LoPucki, "Bankruptcy Research Database," available at
`lopucki.law.ufl.edu` (University of Florida Levin College of Law), with the
specific version (January 12, 2023 update) and the access date. Many papers
also cite associated articles by LoPucki and coauthors that document the
coverage decisions and methodology; consult Protocols.pdf for the preferred
citation form posted on the site.
