---
title: "IRS Form 990 (Nonprofit Returns)"
description: >-
  How to pull IRS Form 990 nonprofit information returns free with no key via
  the e-file index on apps.irs.gov, including officer compensation, board
  composition, and organization financials, plus the gotchas that bite pipelines.
sidebar:
  label: IRS Form 990
  order: 28
tags: [nonprofits, tax-filings, governance, compensation, free, no-api-key, data:irs-form-990]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of the IRS annual e-file index (apps.irs.gov/pub/epostcard/990/xml/2018/index_2018.csv)
  access: free
---

**IRS Form 990 (Nonprofit Returns)** is the annual information return that
U.S. tax-exempt organizations must file with the Internal Revenue Service.
Returns cover organization financials (total revenue, expenses, and assets),
the names, titles, and compensation of officers, directors, and key employees,
and governance or board information. Since 2016 the IRS has released
machine-readable versions of e-filed returns as XML files, indexed by year.
The data is free, public, and needs no API key. Used in, for example,
[Lewellen](/wiki/papers/jf/2025/lewellen-women-charge-evidence-hospitals-2025/),
which uses 19 years of Form 990 filings for U.S. nonprofit hospitals to measure
hospital financials, CEO and officer names, titles and salaries, and board
composition.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** e-filed returns from tax-exempt organizations (primarily
  501(c) entities), indexed from 2011 onward; coverage grows after the
  e-file mandate phased in more fully around 2016.
- **Home:** <https://apps.irs.gov/pub/epostcard/990/xml/>

## Access

Annual index files and per-filing XML documents are hosted on the IRS public
server at `https://apps.irs.gov/pub/epostcard/990/xml/`. Each year has a CSV
index and a corresponding directory of XML files. Download the 2018 index
directly, no authentication:

```bash
# Annual e-file index for 2018, ~58 MB, no key
curl -sL -o index_2018.csv \
  "https://apps.irs.gov/pub/epostcard/990/xml/2018/index_2018.csv"
```

The index CSV has columns: `RETURN_ID`, `FILING_TYPE`, `EIN`, `TAX_PERIOD`,
`SUB_DATE`, `TAXPAYER_NAME`, `RETURN_TYPE`, `DLN`, `OBJECT_ID`. Each row's
`OBJECT_ID` locates that filing's XML document under the same year directory.

**Note on the AWS mirror:** an AWS Registry of Open Data bucket named
`irs-form-990` historically mirrored these filings, but when checked in this
session the S3 bucket listing returned no objects (`s3://irs-form-990/` lists
empty). Use the `apps.irs.gov` index path above as the working no-key route.

### Load in Python

```python
import pandas as pd
import requests

# Read the index; use dtype=str to avoid silent int casting of EINs/IDs
index = pd.read_csv("index_2018.csv", dtype=str)

# Keep only full Form 990 filers (exclude 990-EZ, 990-PF, 990-T, etc.)
returns_990 = index[index["RETURN_TYPE"] == "990"].copy()

# Fetch one filing's XML by OBJECT_ID
obj_id = returns_990.iloc[0]["OBJECT_ID"]
url = f"https://apps.irs.gov/pub/epostcard/990/xml/2018/{obj_id}_public.xml"
response = requests.get(url)
# response.text holds the XML; parse with lxml or xml.etree.ElementTree
```

Adjust the year in the index URL and the `xml/<year>/` path together to pull
other vintages. Inspect the XML namespace and schema version in the document
root before extracting fields, as the layout differs by return type and filing
year.

## Gotchas (the ones that bite pipelines)

- **Only e-filed returns are in the XML set.** Paper-filed returns, which
  smaller organizations and older filings use, are not in the machine-readable
  index. Coverage is incomplete before the e-file mandate phased in, so the
  pre-2016 years underrepresent smaller nonprofits.
- **The XML schema changed across versions and form types.** Form 990, 990-EZ,
  and 990-PF each report different schedules, and the field paths within a
  given form type also vary across filing-year schema versions. Parse
  defensively: check the schema version element in the document root and map
  fields accordingly rather than assuming a fixed XPath.
- **TAX_PERIOD is not SUB_DATE.** The `TAX_PERIOD` column is the fiscal period
  the return covers; `SUB_DATE` is when the return was submitted. Many
  nonprofits use non-calendar fiscal years, so do not align filings on
  submission date when building time series of organizational activity.
- **One EIN can appear multiple times in an index.** An organization may file
  an original return and one or more amended returns, or returns for multiple
  tax periods, all in the same annual index file. Deduplicate deliberately,
  choosing amended-over-original or latest-filing logic as appropriate.
- **Financial fields are self-reported and definitions vary.** Revenue,
  expense, and asset figures come from the organization's own accounting.
  Line-item definitions can differ across filers; reconcile schedules before
  comparing figures across organizations.
- **990 and 990-PF are not the same form.** Public charities file Form 990
  (or 990-EZ below a revenue threshold); private foundations file Form 990-PF.
  The two forms report different schedules and have different compensation
  disclosure structures. Do not pool them without harmonizing fields.

## Return-type families

| Return type | Who files | Notes |
|-------------|-----------|-------|
| 990 | Public charities and other 501(c) organizations above the 990-EZ threshold | Full form; most detail on compensation and governance |
| 990-EZ | Smaller public charities (generally gross receipts under $200 000 and total assets under $500 000) | Abbreviated form; fewer schedule requirements |
| 990-PF | Private foundations | Different schedules; required regardless of size |
| 990-T | Organizations with unrelated business income | Filed in addition to the primary return; separate filing |
| 990-N (e-Postcard) | Very small organizations (gross receipts normally $50 000 or less) | Not in the XML index; submitted separately via a web form |

## Citation

Cite the IRS, the form type, the index year, the retrieval URL, and the access
date, for example: *Internal Revenue Service, Form 990 Series Returns
(machine-readable e-file index and XML filings), 2018 index, retrieved from
https://apps.irs.gov/pub/epostcard/990/xml/2018/index_2018.csv, accessed
2026-06-09.* Record the return types included and the tax-period range covered
so the pull is reproducible.
