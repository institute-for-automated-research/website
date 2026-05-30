---
title: "SEC Form ADV (via IAPD): investment-adviser registration"
description: >-
  How to pull investment-adviser registration data from the SEC for free via
  IAPD: the firm report, the search API, and the bulk structured feed, plus
  why Form ADV lives outside EDGAR and the gotchas that bite fund-classification
  pipelines.
sidebar:
  label: Form ADV (IAPD)
  order: 7
tags: [filings, free, no-api-key, sec, cross-section, data:form-adv]
verified:
  level: fetched
  access: free
  date: 2026-05-29
  with: live IAPD firm ADV report PDF fetch (CRD 105631) + SEC bulk Form ADV filing-data zip reachable (HTTP 200)
---

**Form ADV** is the registration form every SEC- or state-registered
investment adviser must file, and it is **public and free** through the SEC's
**IAPD** (Investment Adviser Public Disclosure) system. It is the source for
what an adviser *is*: assets under management, client and employee counts,
private-fund details, ownership, disciplinary history, and a narrative
brochure of strategies and fees. Papers that classify funds or advisers
(hedge fund vs mutual fund adviser, private-fund flags) read Form ADV; the
[Kwan, Liu & Matthies](/wiki/papers/kwan-liu-matthies-2026/) attention paper
uses it for fund classification.

The one thing to know first: **Form ADV is not on EDGAR.** Advisers file it
through the IARD/CRD system, not EDGAR, so it has its own identifiers (CRD
numbers, `801-`/`802-` file numbers) and its own access points. Looking for it
under a CIK on `data.sec.gov` returns nothing.

- **Cost:** free, no paywall, no key.
- **Auth:** none. A descriptive `User-Agent` header is courteous and avoids
  throttling, same as EDGAR.
- **Coverage:** all SEC-registered advisers, exempt reporting advisers (ERAs,
  partial form), and state-registered advisers.
- **Home:** <https://adviserinfo.sec.gov/> ·
  **Bulk data:** <https://www.sec.gov/foia-services/frequently-requested-documents/form-adv-data>

## Access

### Option 1: IAPD firm report (one adviser, PDF)

Every registered firm has a public report addressed by its **CRD number**:

```
https://reports.adviserinfo.sec.gov/reports/ADV/{CRD}/PDF/{CRD}.pdf
```

```python
import requests
headers = {"User-Agent": "Your Name your@email.edu"}
crd = 105631   # Bridgewater Associates
pdf = requests.get(
    f"https://reports.adviserinfo.sec.gov/reports/ADV/{crd}/PDF/{crd}.pdf",
    headers=headers,
)   # 200, application/pdf: the full Form ADV Parts 1 and 2
```

This is the human-readable filing (Part 1 data + Part 2 brochure). Confirmed
live on the verified date: a multi-megabyte ADV PDF returned for CRD 105631.

### Option 2: Search API (resolve a name to a CRD)

CRD is the join key, so most pipelines start by resolving a firm name:

```
https://api.adviserinfo.sec.gov/search/firm?query={name}&hl=true&nrows=12&start=0&wt=json
```

Returns matching firms with CRD, SEC number, and location. There is a parallel
`/search/individual` endpoint for adviser representatives.

### Option 3: Bulk structured data (the whole population)

For panel work, the SEC publishes the **structured Part 1 data** (the
check-box and numeric fields, including Schedule D private-fund rows) as
downloadable archives, plus monthly Part 2 brochure dumps, on the FOIA page:

```
https://www.sec.gov/files/adv-filing-data-20111105-20241231-part1.zip   # ~700 MB
https://www.sec.gov/files/adv-filing-data-20001019-20111104.zip
```

The complete-filing-data archives give you every adviser's Part 1 fields over
time, which is what you want for classification at scale rather than scraping
PDFs one CRD at a time. Confirmed reachable on the verified date (HTTP 200,
~700 MB zip).

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the SEC instructions. Verified
against live IAPD and the bulk feed on the date above.

- **Not on EDGAR; CRD, not CIK.** Form ADV uses CRD/IARD identifiers and
  `801-`/`802-` SEC file numbers. There is no CIK and no `data.sec.gov`
  endpoint. Join to EDGAR-based holdings by name or a hand-built CRD↔CIK map,
  not by a shared key.
- **Self-reported and as-of the latest amendment.** The IAPD firm report shows
  the *current* filing. Advisers must file an annual updating amendment within
  90 days of fiscal year-end, but for a point-in-time history you need the
  bulk archive or dated compilation reports, not the live report.
- **AUM is regulated AUM (RAUM), gross.** Part 1 Item 5.F reports *regulated*
  assets under management: gross of leverage, including uncalled capital
  commitments for private-fund advisers. It is not net AUM and is not directly
  comparable to a 13F dollar value.
- **Three registration regimes, different coverage.** SEC-registered advisers
  (generally >$100M RAUM), **state-registered** advisers (smaller, file with
  states), and **exempt reporting advisers** (ERAs, e.g. some private-fund and
  VC advisers) who file only a truncated Form ADV. Do not assume the
  SEC-registered set is the whole universe.
- **Private funds live in Schedule D Section 7.B.1:** one row per reported
  private fund, with a self-classified fund type (hedge fund, private equity,
  etc.). The type is the adviser's own label; treat it as a self-report.
- **Part 2 is prose, not fields.** The brochure (Part 2A) and supplement
  (Part 2B) are narrative PDFs. Strategy, fee, and conflict classification
  means parsing text, not reading a tagged field.
- **Bulk filenames embed date ranges.** The archive filenames carry the
  period they cover (e.g. `...20111105-20241231-part1.zip`), so the URL goes
  stale as the SEC adds new periods. Re-read the FOIA page for the current
  filenames rather than hard-coding a URL.
- **One adviser can advise many funds.** A fund-classification join is
  adviser→funds, often many-to-many; a single ADV does not map one-to-one to a
  single mutual fund. Cross-reference fund-level filings (e.g. EDGAR
  [N-1A](/wiki/datasets/edgar/#form-n-1a-open-end-fund-registration)) for the
  fund side.

## What's in each part

| Part | Form | Contents |
|------|------|----------|
| 1A | structured | RAUM, client/employee counts, custody, ownership, disciplinary, Schedule D (incl. private funds) |
| 1B | structured | State-registration items |
| 2A | brochure (PDF) | Narrative: advisory business, fees, strategies, conflicts |
| 2B | supplement (PDF) | Background of individual advisory personnel |
| 3 | Form CRS | Relationship summary for retail clients |

## Standard operations

- **Classify advisers/funds:** resolve name to CRD (Option 2), then read
  Schedule D and Item 5/Item 7 from the bulk Part 1 data (Option 3) rather
  than scraping PDFs; the structured fields are the classifiable signal.
- **Build a panel:** use the dated bulk archives for point-in-time fields;
  the live IAPD report is current-only and not reproducible as history.
- **Join to holdings or returns:** map CRD to the EDGAR CIK (by name) to link
  an adviser's Form ADV profile to its 13F /
[N-1A](/wiki/datasets/edgar/#form-n-1a-open-end-fund-registration) filings;
there is no shared
  key, so document the crosswalk.
- **Always record the CRD and the as-of date** of the filing you read; ADV is
  amended continuously, so an undated pull is not reproducible.

## Citation

Cite the form, adviser, and source, e.g.: *Bridgewater Associates, LP, Form
ADV, CRD No. 105631, U.S. Securities and Exchange Commission, Investment
Adviser Public Disclosure (IAPD); https://adviserinfo.sec.gov/, accessed
YYYY-MM-DD.* For bulk data, cite the SEC Form ADV complete filing-data
archive and the archive date range.
