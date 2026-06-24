---
title: "Form N-MFP (Money Market Fund Holdings)"
description: >-
  How to pull SEC Form N-MFP monthly money market fund portfolio holdings free
  with no key via EDGAR full-text search and the Archives endpoint, plus the
  gotchas around schema versioning, multi-series filers, and the User-Agent
  requirement.
sidebar:
  label: Form N-MFP
  order: 31
tags: [money-market-funds, sec-filings, holdings, short-term-funding, free, no-api-key, data:n-mfp]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key EDGAR full-text search for N-MFP2 (efts.sec.gov, 1,017 hits in Q1 2024) plus pull of a real filing's primary_doc.xml (CIK 356476)
  access: free
---

**Form N-MFP** is a monthly SEC filing that every U.S. registered money market
fund must submit. Each filing discloses fund-level assets under management, fund
category (e.g., Government, Prime, Tax-Exempt), and a security-level schedule of
portfolio holdings: issuer name, CUSIP, maturity date, face value, amortized cost
or market value, and yield. Filings are public on EDGAR as structured XML, free,
and require no API key (SEC asks for a descriptive User-Agent header). Used in,
for example, [Anderson, Du & Schlusche](/wiki/papers/jf/2025/anderson-arbitrage-capital-global-banks-2025/),
where month-end N-MFP holdings and per-fund AUM construct the Bartik shares and
funding-shift measures.

- **Cost:** free, public.
- **API key:** none required. Descriptive `User-Agent` header required by SEC
  fair-access policy.
- **Coverage:** monthly, each month-end snapshot. All U.S. registered money
  market funds. Current form versions are N-MFP2 and N-MFP3 for more recent
  vintages.
- **Home:** <https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=N-MFP>

For a commercial alternative with pre-parsed, time-series data, see the
[Crane Data Money Fund Intelligence](/wiki/commercial/crane-mmf/) page; N-MFP is
the underlying public SEC source for those same filings.

## Access

There are two complementary EDGAR endpoints.

**Full-text search across filers** (covers 2001 onward, paginates):

```bash
# All N-MFP2 filings in Q1 2024, no key; replace the User-Agent with your own
curl -s 'https://efts.sec.gov/LATEST/search-index?q=&forms=N-MFP2&startdt=2024-01-01&enddt=2024-03-31' \
  -A "Your Name your-email@example.com"
```

The JSON response contains a `hits.hits` array. Each entry's `_id` field looks
like `"0001145549-24-015515:primary_doc.xml"`. The `_source.display_names` array
holds a string such as `"Fidelity Investments (CIK 0000356476)"` from which you
can parse the CIK; the `cik` field in the JSON may be empty, so parse
`display_names` defensively.

**Pull one filing's XML** (build the archive URL from CIK and accession number
with dashes removed):

```bash
# CIK 356476, accession 0001145549-24-015515 -> dashes removed in the path
curl -s 'https://www.sec.gov/Archives/edgar/data/356476/000114554924015515/primary_doc.xml' \
  -A "Your Name your-email@example.com"
```

The XML contains `<seriesId>`, `<moneyMarketFundCategory>` (e.g., `Exempt
Government`), `<totalValueOtherAssets>`, and repeated `<nameOfIssuer>` rows for
each holding (e.g., `FEDERAL FARM CREDIT BANK`, `FEDERAL HOME LOAN BANK`).

### Load in Python

```python
import json, re, urllib.request, xml.etree.ElementTree as ET

UA = {"User-Agent": "Your Name your-email@example.com"}

# 1. Query the full-text search for a date window
url = (
    "https://efts.sec.gov/LATEST/search-index?q=&forms=N-MFP2"
    "&startdt=2024-01-01&enddt=2024-01-31"
)
req = urllib.request.Request(url, headers=UA)
hits = json.loads(urllib.request.urlopen(req).read())["hits"]["hits"]

for hit in hits:
    filing_id = hit["_id"]  # e.g. "0001145549-24-015515:primary_doc.xml"
    accession_raw = filing_id.split(":")[0]            # "0001145549-24-015515"
    accession_nodash = accession_raw.replace("-", "")  # "000114554924015515"

    # Parse CIK from display_names if the cik field is empty
    names = hit["_source"].get("display_names", [])
    cik_match = re.search(r"CIK\s+(\d+)", " ".join(names))
    if not cik_match:
        continue
    cik = cik_match.group(1).lstrip("0")  # drop leading zeros for URL

    # 2. Fetch the primary XML
    xml_url = (
        f"https://www.sec.gov/Archives/edgar/data/{cik}"
        f"/{accession_nodash}/primary_doc.xml"
    )
    req2 = urllib.request.Request(xml_url, headers=UA)
    tree = ET.parse(urllib.request.urlopen(req2))
    root = tree.getroot()

    # Strip namespace for convenience
    ns = {"n": root.tag.split("}")[0].lstrip("{")} if "}" in root.tag else {}

    # Fund-level fields
    series_id = root.findtext(".//seriesId") or root.findtext(".//n:seriesId", namespaces=ns)
    category  = root.findtext(".//moneyMarketFundCategory") or \
                root.findtext(".//n:moneyMarketFundCategory", namespaces=ns)

    # Holding rows
    for issuer_el in root.iter("nameOfIssuer"):
        print(series_id, category, issuer_el.text)
```

Inspect the tag names in the XML before production use; they vary across form
versions (see Gotchas).

## Gotchas (the ones that bite pipelines)

- **Form version determines XML schema.** The form changed from N-MFP to N-MFP2
  to N-MFP3, and the XML tag names and structure differ across versions. A parser
  keyed to one version breaks on another; branch on the form type returned in the
  search results before parsing.
- **One CIK, multiple series.** A single filing is submitted by a fund family
  (one CIK) and can cover multiple series, each representing a separate fund.
  Key on `<seriesId>`, not just CIK; aggregating at the CIK level mixes funds.
- **Month-end snapshot only.** N-MFP captures holdings as of the last business
  day of the month. Holdings between month-ends are not observed.
- **Full-text search pagination.** The `efts.sec.gov` endpoint paginates results
  and covers filings from 2001 onward. Use narrow date windows and page through
  results rather than pulling a single large query that hits the cap.
- **User-Agent is required.** The SEC fair-access policy requires a descriptive
  `User-Agent` header (name and contact email). Requests without it are
  throttled or blocked.
- **CIK may be embedded in `display_names`, not in a dedicated field.** The
  `cik` field in the full-text search JSON can be empty. Parse the CIK out of
  the `display_names` string and strip leading zeros when building the archive
  URL path.
- **Value convention varies by tag.** Holdings can be reported at amortized cost
  or market value depending on the schema field. Do not assume one convention;
  read the tag name and map it to the fund's stated valuation method.

## Form versions

| Form | Approx. period | Notes |
|------|---------------|-------|
| N-MFP | 2010-2016 | Original structured XML filing; initial schema |
| N-MFP2 | 2016-2023 | Revised schema following 2014 money market reform; tag names changed |
| N-MFP3 | 2024 onward | Further schema revision; check SEC release notes for tag-level changes |

## Key XML fields (N-MFP2 and N-MFP3)

| Tag | Level | Description |
|-----|-------|-------------|
| `seriesId` | Fund | Series identifier for this fund within the filing |
| `moneyMarketFundCategory` | Fund | Fund type: Government, Prime, Tax-Exempt, etc. |
| `totalValueOtherAssets` | Fund | Total assets in dollars |
| `nameOfIssuer` | Holding | Issuer name for each portfolio security |
| `cusip` | Holding | CUSIP of the security, if available |
| `finalMaturityDate` | Holding | Stated final maturity date |
| `percentageOfMoneyMarketFundNetAssets` | Holding | Holding as a share of net assets |

Tag names may differ slightly in N-MFP (the original version); verify against
the filing you are parsing.

## Citation

Cite the SEC, the form type and version, the filer and period, the accession
number or full archive URL, and the access date, for example: *U.S. Securities
and Exchange Commission, Form N-MFP2, [Fund Family Name] (CIK [NNNNNN]),
filing for [Month Year], accession no. [XXXXXXXXXX-XX-XXXXXX], retrieved from
https://www.sec.gov/Archives/edgar/data/, accessed YYYY-MM-DD.* When citing the
EDGAR full-text search endpoint, note the form type, date range, and the
`efts.sec.gov` URL so the pull is reproducible.
