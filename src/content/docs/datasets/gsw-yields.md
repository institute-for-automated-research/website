---
title: "GSW: Gurkaynak-Sack-Wright Treasury yield curve"
description: >-
  How to pull the Federal Reserve staff's daily fitted US Treasury zero-coupon
  yield curve (Svensson model, 1961 to present) for free with no key, which
  mnemonic is which, and the header and compounding gotchas that bite pipelines.
sidebar:
  label: GSW yields
  order: 10
tags: [macro, time-series, free, no-api-key, federal-reserve, data:gsw-yields]
verified:
  date: 2026-06-09
  level: fetched
  with: live no-key CSV pull of feds200628.csv (16958 rows, 1961-06-14 to 2026-05-29; SVENY/SVENPY/SVENF columns + Svensson BETA/TAU parameters)
  url: https://www.federalreserve.gov/data/yield-curve-tables/feds200628.csv
---

The **Gurkaynak-Sack-Wright (GSW)** dataset is the Federal Reserve Board
staff's daily fitted **US Treasury zero-coupon yield curve**, estimated with
the Svensson (1994) six-parameter forward-rate model and updated continuously.
It is the standard source for continuously-compounded zero yields, par yields,
and forward rates at maturities of 1 to 30 years, going back to 1961. This page
is the distilled access recipe.

- **Cost:** free, no paywall, no key.
- **Coverage:** daily (business days), 1961-06-14 to present; longer maturities
  populate only as the sample lengthens.
- **Format:** one CSV (`feds200628.csv`), about 16 MB, latest date at the bottom.
- **Caveat:** a staff research product, *not* an official statistical release;
  the whole history can be revised when the curve is re-estimated.
- **Paper / home:** FEDS working paper 2006-28 ·
  <https://www.federalreserve.gov/data/nominal-yield-curve.htm>

## Access

### No key, direct CSV (the only access path needed)

```
https://www.federalreserve.gov/data/yield-curve-tables/feds200628.csv
```

```python
import pandas as pd

url = "https://www.federalreserve.gov/data/yield-curve-tables/feds200628.csv"
# The real header (Date,BETA0,...) is on line 10; skip the 9-line preamble.
gsw = pd.read_csv(url, skiprows=9, parse_dates=["Date"], index_col="Date")

gsw["SVENY10"].dropna().tail()   # 10-year zero-coupon yield, percent, cont. comp.
term = gsw["SVENY10"] - gsw["SVENY02"]   # 10y-2y term spread
```

The companion releases use the same layout: the **TIPS / real** curve is
`feds200805.csv` and the **inflation-compensation** series ship alongside it.
Same `skiprows` trick applies.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the raw CSV. Verified against the live
file on the date above.

- **Nine-line preamble.** The file opens with a disclaimer note, a blank line,
  a small legend table mapping each series to its mnemonic, and another blank
  line. The actual column header (`Date,BETA0,...`) is **line 10**, so read with
  `skiprows=9` (or detect the `Date` header). A naive `read_csv` mis-parses the
  legend as data.
- **Mnemonics are not obvious.** `SVENYxx` = continuously-compounded
  zero-coupon yield at `xx` years; `SVENPYxx` = par yield (coupon-equivalent);
  `SVENFxx` = instantaneous forward rate; `SVENnFmm` = the `n`-year forward
  rate `mm` years ahead (e.g. `SVEN1F09` is the one-year rate nine years out).
  All in **percent**.
- **Continuously compounded, not bond-equivalent.** `SVENY` zero yields are
  continuously compounded. To compare with a coupon Treasury quote use the
  `SVENPY` par yields or convert; mixing conventions silently biases spreads.
- **Blanks are missing, not zero.** Early in the sample the curve is fit only to
  about 7 years, so the 10-to-30-year columns are empty (NaN) for older dates.
  `dropna()` per maturity; never fill blanks with 0.
- **The Svensson parameters are in the file.** `BETA0`-`BETA3`, `TAU1`, `TAU2`
  are the fitted parameters; you can reconstruct the yield at any maturity from
  them, but the 1-to-30-year grid is already tabulated, so you rarely need to.
- **Staff product, revised without notice.** The note at the top says so. For
  point-in-time / vintage work, archive the file with its download date; the
  series you pulled today may not match a pull next month.
- **Business days only.** No weekend or holiday rows; align to a trading
  calendar before merging with other daily series.

## Mnemonics you actually need

| Mnemonic | Meaning | Maturities | Unit |
|---|---|---|---|
| `SVENYxx` | Zero-coupon yield (continuously compounded) | 01-30 | percent |
| `SVENPYxx` | Par yield (coupon-equivalent) | 01-30 | percent |
| `SVENFxx` | Instantaneous forward rate | 01-30 | percent |
| `SVENnFmm` | `n`-year forward, `mm` years ahead | 1F01-1F09 | percent |
| `BETA0..3`, `TAU1`, `TAU2` | Svensson curve parameters | per day | mixed |

## Standard operations

- **Term spreads:** build from the zero curve (`SVENY10 - SVENY02`), not from
  coupon quotes, so the maturities are exact.
- **Excess bond returns / Cochrane-Piazzesi:** use the forward-rate columns
  (`SVENFxx`, `SVENnFmm`) directly rather than differencing yields.
- **Monthly studies:** resample to month-end (last business day); state the
  convention, since the file is daily.
- **Always record the access date.** Because the whole history is revised, an
  unstated download date is not reproducible.

## Citation

Gurkaynak, Refet S., Brian Sack, and Jonathan H. Wright. 2007. "The U.S.
Treasury Yield Curve: 1961 to the Present." *Journal of Monetary Economics*
54(8): 2291-2304. Data maintained and updated by the Board of Governors of the
Federal Reserve System; cite the release and your access date.
