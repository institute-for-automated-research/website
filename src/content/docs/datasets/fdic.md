---
title: "FDIC Quarterly Banking Profile & BankFind financials"
description: >-
  How to read the FDIC Quarterly Banking Profile (aggregate quarterly bank
  condition and income) and pull the institution-level BankFind financials API
  behind it, with the no-key access recipe and the gotchas that bite pipelines.
sidebar:
  label: FDIC QBP / financials
  order: 23
tags: [banking, free, no-api-key, fdic, time-series, data:fdic]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key FDIC BankFind financials API call (banks.data.fdic.gov /api/financials)
  access: free
---

This page covers two linked FDIC products. The **Quarterly Banking Profile
(QBP)** is the FDIC's quarterly report on the aggregate condition and income of
all FDIC-insured commercial banks and savings institutions: aggregate assets,
loans, deposits, net income, net interest margin, asset quality, and capital,
by quarter and by group. The **institution-level data behind it** is exposed
through the FDIC BankFind Suite REST API at
<https://banks.data.fdic.gov/api>, whose endpoints include `/financials`
(quarterly financial items and ratios per institution `CERT`), `/institutions`,
`/history`, and `/failures`. This page is the access recipe for both. Used in,
for example, [Wang](/wiki/papers/jf/2025/wang-banks-low-interest-rates-2025/),
where the FDIC Quarterly Banking Profile cross-checks the Call Report series
for aggregate U.S. commercial bank data (sample 1997Q2-2018Q2).

This page is distinct from two siblings. The
[FDIC Summary of Deposits](/wiki/datasets/fdic-summary-of-deposits/) (annual
branch-level deposits) has its own page. The
[FFIEC Call Reports](/wiki/datasets/call-reports/) page covers the underlying
bank regulatory filings. The financials API items here are derived from Call
Reports and Thrift Financial Reports; this page is the FDIC aggregate and
financials view, not the raw Call Report schedules.

- **Cost:** free, no paywall.
- **API key:** none required.
- **Coverage:** institution-level financials from 1992 onward, quarterly; the
  QBP narrative and aggregates have been published for decades.
- **Home:** QBP at <https://www.fdic.gov/analysis/quarterly-banking-profile/> ·
  **API docs:** <https://banks.data.fdic.gov/docs/>

## Access

### Institution-level financials (no key, JSON)

The `/financials` endpoint returns quarterly financial items and ratios per
institution. Filters use `field:value` colon syntax, `fields` selects columns,
and `limit`/`offset` paginate.

```bash
# Institution-level financials for one quarter, selected fields, no key
curl -sL "https://banks.data.fdic.gov/api/financials?filters=REPDTE:20231231&fields=CERT,NAME,ASSET&limit=1"
```

`REPDTE` is the quarter-end report date in `YYYYMMDD` form. The response is JSON
with a `meta` block (including an index `createTimestamp`), a `data` array, and
a `totals` block. For `REPDTE:20231231` the query above returned
`totals.count` of 4658 institutions, and the first record was `CERT` 10004,
`NAME` "ERGO BANK", `ASSET` 240478 (in thousands of dollars).

### Pull a full quarter and build a panel

A full quarter is thousands of institutions, so loop `offset` until you have
`totals.count` rows, then iterate `REPDTE` across quarter-ends to build a panel.

```python
import requests, pandas as pd

BASE = "https://banks.data.fdic.gov/api/financials"

def pull_quarter(repdte, fields="CERT,NAME,ASSET,DEP,NETINC", page=2000):
    rows, offset = [], 0
    while True:
        params = {
            "filters": f"REPDTE:{repdte}",
            "fields": fields,
            "limit": page,
            "offset": offset,
        }
        r = requests.get(BASE, params=params)
        r.raise_for_status()
        payload = r.json()
        batch = [rec["data"] for rec in payload["data"]]
        rows.extend(batch)
        total = payload["totals"]["count"]
        offset += page
        if offset >= total:
            break
    return pd.DataFrame(rows)

# One quarter
q = pull_quarter("20231231")

# A panel across several quarter-ends
panel = pd.concat(
    pull_quarter(d).assign(REPDTE=d)
    for d in ["20221231", "20230331", "20230630", "20230930", "20231231"]
)
```

`ASSET` and other dollar items are reported in thousands of dollars; scale
them (multiply by 1,000) before reporting absolute amounts.

## Gotchas (the ones that bite pipelines)

- **Filters use colon syntax, not equals.** Write `filters=REPDTE:20231231`,
  not `REPDTE=20231231`. `REPDTE` is the quarter-end report date as `YYYYMMDD`.
- **Pagination is mandatory.** Results page with `limit`/`offset`. A single
  quarter is thousands of institutions (4658 at `REPDTE:20231231`), so loop
  `offset` until you have `totals.count` rows. Do not assume the default page
  is the whole population.
- **Dollar items are in thousands.** Institution-level dollar fields such as
  `ASSET` are in thousands of dollars; scale before reporting.
- **Item definitions change with regulatory form revisions.** The financials
  items are derived from Call Reports (FFIEC 031/041) and Thrift Financial
  Reports. What is rolled into a given series changes when the underlying form
  is revised, so a long quarterly panel is not on a fixed schema. Check item
  definitions for the vintage you are using.
- **CERT-level series start and stop.** Bank mergers and failures mean an
  institution's `CERT` series begins and ends over time. Track entity changes
  through the `/history` endpoint rather than assuming a balanced panel.
- **QBP aggregates need not equal a sum over /financials.** The published QBP
  aggregates use the FDIC's own groupings and adjustments (de novo
  institutions, prior-period amendments), so they may not equal a naive sum
  over `/financials`. If you need the official aggregate, use the QBP release;
  if you need institution detail, use `/financials`; do not expect the two to
  reconcile to the dollar.
- **Record the index timestamp for reproducibility.** The API `meta` block
  carries an index `createTimestamp`. The same query can return slightly
  different totals as the index is rebuilt, so capture the timestamp alongside
  any pull you need to reproduce.

## Citation

Cite the FDIC, the Quarterly Banking Profile and/or the BankFind financials
API, the report date(s) (`REPDTE`), the FDIC URL, and the access date, for
example: *Federal Deposit Insurance Corporation, Quarterly Banking Profile and
BankFind financials, report date 2023-12-31 (REPDTE 20231231); retrieved from
<https://banks.data.fdic.gov/api> and
<https://www.fdic.gov/analysis/quarterly-banking-profile/>, accessed
YYYY-MM-DD.*
