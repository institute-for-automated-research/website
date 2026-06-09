---
title: "Robert Shiller online data"
description: >-
  How to pull Robert Shiller's long-run U.S. stock market (ie_data.xls, CAPE)
  and home price (Fig3-1.xls) files with no key, plus the gotchas that bite
  pipelines (the YYYY.MM decimal date, monthly-average prices, the provisional
  tail, and the changing download link).
sidebar:
  label: Shiller data
  order: 35
tags: [market, valuation, housing, macro, time-series, equities, free, no-api-key, data:shiller-data]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key fetch + parse of ie_data.xls (Data sheet, monthly 1871.01 to 2024.09) and Fig3-1.xls home-price file (annual from 1890); shillerdata.com link and econ.yale.edu mirror both confirmed live
  access: free
---

**Robert Shiller online data** is the long-run U.S. financial dataset Shiller
maintains alongside *Irrational Exuberance*. Two free files cover most uses: the
stock-market file `ie_data.xls` (monthly S&P Composite price, dividends,
earnings, CPI, the 10-year rate, and the cyclically adjusted price-earnings
ratio, CAPE, back to 1871) and the home-price file `Fig3-1.xls` (a long-run
U.S. real home price index back to 1890). No API key is required. Used in, for
example,
[Li](/wiki/papers/rfs/2025/li-dominate-historical-average-2025/),
which draws CAPE and several Shiller predictors for an out-of-sample equity
premium test, and
[Piazzesi](/wiki/papers/jf/2025/piazzesi-presidential-address-housing-betas-2025/),
which uses the `ie_data.xls` real stock returns and 10-year Treasury series as
cashflow and discount-rate inputs.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** `ie_data.xls` monthly from 1871; `Fig3-1.xls` home prices
  annual from 1890 (monthly only in recent decades).
- **Home:** <https://shillerdata.com/> (current host); mirror at
  <http://www.econ.yale.edu/~shiller/data.htm>.

## Access

The download links on shillerdata.com point at a content-delivery blob whose
URL carries a `?ver=` query that changes whenever Shiller re-uploads. The robust
recipe is to scrape the current link off the page; a stable fallback is the
Yale econ mirror, which serves the same file names directly:

```bash
# Stable Yale mirror (same files, direct names)
curl -sL "http://www.econ.yale.edu/~shiller/data/ie_data.xls" -o ie_data.xls
curl -sL "http://www.econ.yale.edu/~shiller/data/Fig3-1.xls"  -o Fig3-1.xls

# Or resolve the current shillerdata.com download link, then fetch it:
curl -sL "https://shillerdata.com/" \
  | grep -oiE 'href="[^"]*ie_data[^"]*"' | head -1
```

### Load in Python

```python
import pandas as pd

# ie_data.xls: the table starts a few rows down; the workbook also has a
# "Disclaimer" sheet, so read the "Data" sheet explicitly with a header offset.
ie = pd.read_excel("ie_data.xls", sheet_name="Data", header=7)

# The Date column is decimal YYYY.MM (e.g. 1871.01 = Jan 1871, 2024.10 = Oct
# 2024). Split it; do NOT treat the fractional part as a fraction of a year.
def ym(x):
    y = int(x)
    m = round((x - y) * 100)
    return pd.Period(freq="M", year=y, month=m)

ie = ie.dropna(subset=["Date"])
ie["period"] = ie["Date"].map(ym)
```

## Gotchas (the ones that bite pipelines)

- **The date is `YYYY.MM`, not a year fraction.** `1871.01` is January 1871 and
  `2024.10` is October 2024. The digits after the decimal are the month number,
  so `1871.1` means October, not "one-tenth into the year." Parse by splitting
  year and month, never by float arithmetic on the year.
- **Prices are monthly averages of daily closes.** The S&P Composite price in
  `ie_data.xls` is the average of that month's daily closing prices, not an
  end-of-month value. Do not merge it against month-end series as if it were a
  point-in-time observation.
- **The tail is provisional and lags the access date.** The most recent months'
  dividends and earnings are estimates, and the file is updated irregularly: a
  pull in mid-2026 ended in September 2024. Do not assume the series runs to the
  month you downloaded it, and flag the estimated tail.
- **Read the `Data` sheet with the right header row.** The workbook opens on a
  notes band and includes a separate `Disclaimer` sheet. The real column header
  for `ie_data.xls` is several rows down (around row 8). Reading the default
  sheet or row 0 returns header noise.
- **Real series and CAPE are precomputed columns.** Real price, real dividend,
  real earnings, CAPE, and the total-return CAPE are computed inside the
  spreadsheet from a specific CPI vintage. Reading the stored values is fine;
  recomputing them with a different CPI series will not match.
- **Home prices are a separate file and mostly annual.** The long-run home price
  index is in `Fig3-1.xls`, not `ie_data.xls`, and is annual back to 1890 with
  monthly detail only in recent decades. Do not expect monthly home prices for
  the nineteenth century.
- **The download URL is not stable.** The shillerdata.com link embeds a
  `?ver=` token that changes on re-upload, so a hardcoded blob URL can go stale.
  Scrape the page for the current link or use the Yale mirror, and record the
  access date.
- **Legacy `.xls` format.** Both files are old-style BIFF `.xls`, not `.xlsx`;
  read them with an engine that handles `.xls`.

## Reference

| File | Contents | Frequency | Start |
|------|----------|-----------|-------|
| `ie_data.xls` (Data sheet) | S&P price, dividends, earnings, CPI, GS10, real series, CAPE | Monthly | 1871-01 |
| `Fig3-1.xls` (Data sheet) | Nominal and real U.S. home price index, building cost, population, long rate | Annual (recent monthly) | 1890 |

| Field | Value |
|-------|-------|
| Current host | `https://shillerdata.com/` |
| Mirror | `http://www.econ.yale.edu/~shiller/data/` |
| Date encoding | Decimal `YYYY.MM` |
| Key required | No |

## Citation

Cite Robert J. Shiller, the file, the host, and the access date, for example:
*Robert J. Shiller, "U.S. Stock Markets 1871-Present and CAPE Ratio"
(`ie_data.xls`), retrieved from https://shillerdata.com/, accessed YYYY-MM-DD.*
For the home price series cite `Fig3-1.xls` from the same source. Shiller's data
underlies *Irrational Exuberance* (Princeton University Press); cite the book if
your text refers to it. Record the access date and archive the file, since both
the data tail and the download URL change over time.
