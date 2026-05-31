---
title: "SEC EDGAR: filings, financials, full-text search"
description: >-
  How to pull SEC filings, XBRL financial facts, insider trades, and
  institutional holdings from EDGAR for free: the User-Agent trap, the
  10 req/s limit, and XBRL-vs-text, for automated pipelines.
sidebar:
  label: SEC EDGAR
  order: 2
tags: [fundamentals, filings, event-data, free, no-api-key, sec, data:edgar]
verified:
  level: fetched
  date: 2026-05-29
  with: live data.sec.gov + efts.sec.gov fetch (submissions, XBRL, full-text search, N-1A form rows)
---

**SEC EDGAR** is the free, authoritative source for US corporate disclosure:
10-K/10-Q/8-K filings, standardized **XBRL financial facts** (cross-company
comparable), insider trades (Form 4), institutional holdings (13F), proxy
statements, and full-text search across everything. No API key, just a
`User-Agent` header. It is the corporate-finance backbone the
[ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline uses for
governance, disclosure, and fundamentals work. This page is the distilled
access recipe.

- **Cost:** free, no paywall, no key.
- **Auth:** none, but a descriptive `User-Agent` header is **mandatory**.
- **Coverage:** all US public-company filings; XBRL facts from ~2009.
- **Home:** <https://www.sec.gov/edgar> ·
  **API:** <https://data.sec.gov> ·
  **Full-text:** <https://efts.sec.gov>

## Access

### Option 1: `edgartools` (preferred, structured data)

```python
# pip install edgartools
from edgar import Company, set_identity

# Identity = your User-Agent. Required by the SEC. Keep it in .env, not here.
set_identity("Your Name your@email.edu")

company = Company("AAPL")                 # ticker → CIK resolved for you
tenks = company.get_filings(form="10-K")
filing = tenks[0]
print(filing.filing_date, filing.accession_no)

facts = company.get_facts()               # XBRL, cross-company comparable
revenue = facts.to_pandas("us-gaap:Revenues")

form4 = company.get_filings(form="4")[0].obj()   # insider trades
```

### Option 2: Direct REST API (no package)

```python
import requests
headers = {"User-Agent": "Your Name your@email.edu"}  # mandatory

# All filings + metadata for a company (note 10-digit zero-padded CIK):
requests.get("https://data.sec.gov/submissions/CIK0000320193.json",
             headers=headers).json()

# One XBRL concept across time:
requests.get("https://data.sec.gov/api/xbrl/companyconcept/"
             "CIK0000320193/us-gaap/Revenues.json", headers=headers).json()

# Full-text search:
requests.get("https://efts.sec.gov/LATEST/search-index?"
             "q=%22climate+risk%22&forms=10-K", headers=headers).json()
```

Store the name/email in `.env` (e.g. `SEC_EDGAR_NAME`, `SEC_EDGAR_EMAIL`);
never hard-code them.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the SEC docs. Verified against live
endpoints on the date above.

- **No `User-Agent` → HTTP 403.** This is the #1 EDGAR failure. A request
  with no (or a default `python-requests`) User-Agent is rejected outright;
  confirmed 403 live. Always send a descriptive `Name email` string.
- **Rate limit: 10 requests/second, hard.** `edgartools` throttles for you;
  for the direct API add `time.sleep(0.1)` between calls and never parallelize
  blindly; sustained bursts get the host IP blocked, not just throttled.
- **CIK must be 10-digit zero-padded** in `data.sec.gov` URLs
  (`CIK0000320193`, not `CIK320193` or `320193`). `edgartools`'
  `Company("TICKER")` hides this; the raw API does not.
- **Use XBRL for cross-company work, not filing text.** Narrative text and
  table formatting vary by filer and year; `us-gaap:*` XBRL facts are
  standardized and comparable. Only parse text when the datum isn't tagged.
- **XBRL coverage starts ~2009** and tag usage drifts: revenue may be
  `us-gaap:Revenues` *or*
  `us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax`. Check both.
- **Cache aggressively.** Save XBRL facts to `data/*.parquet` and check before
  re-downloading; re-pulling companyfacts for a panel will blow the rate
  limit fast.
- **Amendments & restatements.** `10-K/A` supersedes `10-K`; a company can
  restate prior XBRL facts. Pin the accession number when reproducibility
  matters.

## Key filing types

| Form | Contents | Use for |
|------|----------|---------|
| `10-K` | Annual report | Financials, risk factors, business description |
| `10-Q` | Quarterly report | Interim financials |
| `8-K` | Current report | Material events (M&A, earnings, mgmt changes) |
| `DEF 14A` | Proxy statement | Executive comp, board, governance |
| `4` | Insider trades | Director/officer buy/sell transactions |
| `13F-HR` | Institutional holdings | Quarterly positions of large investors |
| `S-1` | IPO registration | Pre-IPO financials, risk factors |
| `SC 13D/G` | Beneficial ownership | >5% shareholder positions |
| `N-1A` | Open-end fund registration | Mutual fund / ETF prospectus, strategy, fees, classification |

## Common XBRL facts

| Concept | Tag |
|---------|-----|
| Revenue | `us-gaap:Revenues` / `us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax` |
| Net income | `us-gaap:NetIncomeLoss` |
| Total assets | `us-gaap:Assets` |
| Total equity | `us-gaap:StockholdersEquity` |
| EPS (basic) | `us-gaap:EarningsPerShareBasic` |
| Shares outstanding | `us-gaap:CommonStockSharesOutstanding` |
| Cash | `us-gaap:CashAndCashEquivalentsAtCarryingValue` |
| Long-term debt | `us-gaap:LongTermDebt` |
| R&D expense | `us-gaap:ResearchAndDevelopmentExpense` |

## Standard recipes

**Panel of fundamentals across firms**: loop tickers, pull `get_facts()`,
take the XBRL concept you need, cache each to parquet, then assemble:

```python
from edgar import Company
import pandas as pd

rows = []
for t in ["AAPL", "MSFT", "GOOGL", "AMZN", "META"]:
    rev = Company(t).get_facts().to_pandas("us-gaap:Revenues")
    rows.append({"ticker": t, "rev_latest": rev.iloc[-1] if len(rev) else None})
df = pd.DataFrame(rows)
```

**Full-text search for a research topic**: `efts.sec.gov/LATEST/search-index`
returns hit counts and snippets; use it to scope a sample before downloading
filings (`data["hits"]["total"]["value"]`).

**Insider-trading study**: iterate a company's Form 4 filings and read
`.obj().transactions` (a DataFrame of trades) per filing.

## Form N-1A: open-end fund registration

`N-1A` is the registration statement and prospectus for **open-end
investment companies**: mutual funds and most ETFs. It is the EDGAR source
for what a fund *says it is*: investment objective, strategy, fee table,
share classes, adviser. Papers that classify funds (e.g. growth vs value,
active vs index) read N-1A prospectus text; the
[Kwan, Liu & Matthies](/wiki/papers/jf/2026/kwan-liu-matthies-2026/) attention paper
uses it for fund classification. Confirmed live on the verified date:
`efts.sec.gov` full-text search returns 3,473 `N-1A` hits, and
`data.sec.gov/submissions` returns `N-1A` and `N-1A/A` rows for a registrant.

Pull a fund's N-1A filings the same way as any other form:

```python
from edgar import Company
filings = Company("0002100194").get_filings(form="N-1A")   # also matches N-1A/A
```

Or by form across all registrants via full-text search
(`forms=N-1A` on `efts.sec.gov`).

### N-1A gotchas (fund filings are not company filings)

- **No `us-gaap` XBRL facts.** N-1A is a registration document, not a
  financial report; the XBRL on it is the **risk/return summary** taxonomy
  (`rr:*`), not `us-gaap:*`. Do not expect `get_facts()` financials here.
- **A fund family files under one registrant, many series and classes.** A
  single N-1A filer (the trust) can cover dozens of funds (**series**) each
  with multiple share **classes**, keyed by EDGAR `S######` / `C######`
  identifiers, not a ticker. Resolve series/class before attributing a
  prospectus to a fund.
- **`485BPOS` / `485APOS` carry the updates.** The initial `N-1A` is filed
  once; ongoing annual prospectus updates arrive as `485BPOS` (immediately
  effective) and `485APOS` (post-effective amendment). For a current
  prospectus, follow the 485 stream, not the original N-1A.
- **ETFs file N-1A too.** Most ETFs register as open-end funds, so they are
  N-1A filers; only a few structures (e.g. some commodity pools) are not.
- **Classification is text, not a tagged field.** The investment objective
  and strategy are prose in the prospectus; deriving a clean style label
  means parsing text or mapping the SEC series/class metadata, not reading a
  single field.

## Citation

Cite the filing and source, e.g.: *Apple Inc., Form 10-K, fiscal year 2024,
filed [date], accession [no.], U.S. Securities and Exchange Commission EDGAR;
https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000320193,
accessed YYYY-MM-DD.* For XBRL facts, state the concept tag and the filing the
value came from.
