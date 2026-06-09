---
title: "FFIEC Call Reports: US bank condition and income filings"
description: >-
  How to pull US bank Call Report data for free: the FDIC financials JSON API
  (with the host move and amounts-in-thousands trap), the FFIEC bulk schedules,
  the CERT/RSSD identifiers, the RCFD-vs-RCON codes, and the YTD-income trap.
sidebar:
  label: FFIEC Call Reports
  order: 8
tags: [banks, filings, panel-data, free, no-api-key, federal-reserve, fdic, data:call-reports]
verified:
  level: fetched
  date: 2026-06-09
  with: live api.fdic.gov/banks fetch (financials REPDTE:20231231, CERT 3511 Q1/Q2 2023, institutions CERT->FED_RSSD) + host-move 301 confirmed
---

**Call Reports** (FFIEC Reports of Condition and Income, forms FFIEC 031 / 041 /
051) are the quarterly regulatory filings every US insured depository
institution submits. They are the canonical free, bank-level panel for
balance sheet, income statement, loan composition, deposits, capital, and past
due items, going back decades. This page is the access recipe for the two public
paths: the FDIC financials API (clean JSON) and the FFIEC bulk schedules (raw
MDRM items).

- **Cost:** free, no auth, no API key.
- **Coverage:** every FDIC-insured bank and thrift, quarterly. FDIC financials
  API reaches back to 1992; FFIEC bulk Call Reports go back further per form.
- **Granularity:** one filing per (institution, quarter-end).
- **Home:** FDIC API <https://api.fdic.gov/banks/> ·
  FFIEC bulk <https://cdr.ffiec.gov/public/>

## Access

### Option 1: FDIC financials API (JSON, no auth, cleaned series)

A no-key JSON API serving FDIC-computed financials derived from the Call
Reports. Filter on `REPDTE` (the quarter-end report date, `YYYYMMDD`) and pick
fields:

```python
import requests

def fdic_financials(repdte="20231231", limit=10000, fields="CERT,NAME,ASSET,DEP,NETINC,REPDTE"):
    r = requests.get(
        "https://api.fdic.gov/banks/financials",
        params={"filters": f"REPDTE:{repdte}", "fields": fields,
                "limit": limit, "format": "json"},
        timeout=60,
    )
    r.raise_for_status()
    return [row["data"] for row in r.json()["data"]]

q4 = fdic_financials("20231231")   # ~4,660 banks that quarter
```

The companion `/banks/institutions` endpoint is the bank master (name, state,
charter, and the identifier bridge): pull it to map `CERT` to the Fed `RSSD`.

```python
import requests
inst = requests.get(
    "https://api.fdic.gov/banks/institutions",
    params={"filters": "CERT:3511", "fields": "CERT,NAME,FED_RSSD,STALP"},
    timeout=30,
).json()["data"][0]["data"]
# {'CERT': 3511, 'FED_RSSD': '451965', 'NAME': 'Wells Fargo Bank, ...'}
```

### Option 2: FFIEC bulk schedules (raw MDRM items)

For items the FDIC series does not expose, download the raw Call Report
schedules at
<https://cdr.ffiec.gov/public/PWS/DownloadBulkData.aspx>: pick "Call Reports --
Single Period" (or balance-sheet / income / past-due subsets), choose a
quarter, and get a ZIP of tab-delimited schedule files keyed by `IDRSSD`. Each
column is an MDRM code (see gotchas). Programmatic pulls of this path go through
the FFIEC Public Web Service (PWS), which needs a free registered account token;
the bulk web download itself is an ASP.NET postback, not a clean GET.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the FDIC/FFIEC sites. Verified live on
the date above (financials and institutions endpoints pulled; the host 301 and
the YTD-income behavior were reproduced).

- **The FDIC API host moved.** `banks.data.fdic.gov` now issues a `301` to
  `api.fdic.gov/banks/...` (confirmed live). A client that does not resend the
  query on redirect, or a hard-coded old host, silently breaks. Request
  `api.fdic.gov/banks` directly.
- **Amounts are in thousands of dollars.** `ASSET` of `1687507000` is
  $1.687 trillion, not $1.7 billion (confirmed: Wells Fargo, CERT 3511,
  2023-Q1). Scale by 1,000 before reporting dollars.
- **Income items are year-to-date, not quarterly.** `NETINC` is cumulative
  within the calendar year: Wells Fargo CERT 3511 reads 6,017,000 at
  2023-03-31 and 11,455,000 at 2023-06-30 (confirmed live). The Q2 *quarterly*
  flow is the difference (11,455,000 - 6,017,000), and Q1 YTD equals Q1
  quarterly. Differencing the wrong way double-counts Q1.
- **Three identifiers, do not confuse them.** `CERT` (FDIC certificate) keys the
  FDIC API; `IDRSSD` / `RSSD` (Federal Reserve) keys the raw FFIEC bulk
  schedules and NIC; the OCC/OTS charter is a third. Join FDIC-API data to raw
  FFIEC items via `FED_RSSD` from the institutions endpoint (CERT 3511 ->
  RSSD 451965).
- **The form differs by bank, so a field may not exist for every filer.**
  FFIEC 031 (banks with foreign offices), 041 (domestic only), and 051 (small
  banks under $5B, streamlined with fewer schedules) carry different item sets.
  Do not assume a schedule or MDRM code is present for every institution.
- **RCFD vs RCON prefix.** In the raw schedules, the same concept appears as a
  consolidated item (`RCFD...`, includes foreign offices) and a domestic item
  (`RCON...`). Total assets is `RCFD2170` consolidated vs `RCON2170` domestic;
  mixing them across banks under-counts or double-counts.
- **Mergers break naive panels.** Banks enter and exit via M&A; a `CERT`/`RSSD`
  can be retired. Build the panel with the NIC structure/transformations table,
  not by assuming identifier continuity.
- **Quarter-end only, and amended filings exist.** `REPDTE` is always a
  quarter-end (`0331`, `0630`, `0930`, `1231`). Banks file late amendments, so
  "as filed" and "amended" can differ; the FDIC API serves a cleaned series.
- **The confidential supervisory overlay is a distinct source.** Holding-company
  filings (FR Y-9C) and the stress-test panel (FR Y-14) are restricted and
  tracked under separate slugs. Call Reports are the public bank-level layer.

## Identifiers and key fields

| Field | Meaning |
|---|---|
| `CERT` | FDIC certificate number; the FDIC-API key |
| `FED_RSSD` / `IDRSSD` | Federal Reserve RSSD ID; keys the FFIEC bulk schedules and NIC |
| `REPDTE` | Report date, always a quarter-end (`YYYYMMDD`) |
| `ASSET` | Total assets (thousands of dollars) |
| `DEP` | Total deposits (thousands) |
| `NETINC` | Net income, year-to-date (thousands) |
| `RCFD2170` / `RCON2170` | Total assets, consolidated / domestic (raw MDRM) |

## Standard operations

- **Bank-quarter panel:** stack `/banks/financials` across `REPDTE`, key on
  `(CERT, REPDTE)`; map to `RSSD` once via the institutions endpoint.
- **Quarterly flows:** difference YTD income/flow items within the calendar year
  (Q_n quarterly = Q_n YTD - Q_{n-1} YTD; Q1 quarterly = Q1 YTD).
- **Ratios:** compute ROA, capital, and loan-mix ratios from levels you pulled,
  rather than trusting a precomputed field across form changes.
- **Raw items:** when the FDIC series lacks an item, pull the FFIEC schedule by
  MDRM code, choosing `RCFD` vs `RCON` deliberately.
- **Always state** the report quarter, the form (031/041/051) if it matters, and
  whether a figure is a level or a YTD/quarterly flow.

## Citation

*Federal Financial Institutions Examination Council (FFIEC), Consolidated
Reports of Condition and Income (Call Reports); retrieved via the FDIC
financials API (https://api.fdic.gov/banks/) / FFIEC CDR
(https://cdr.ffiec.gov/public/), accessed YYYY-MM-DD.*
