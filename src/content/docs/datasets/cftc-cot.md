---
title: "CFTC Commitments of Traders (COT)"
description: >-
  How to pull weekly aggregate futures positions by trader category from the
  CFTC, including the Traders in Financial Futures report, the no-key
  history-file download, and the gotchas that bite pipelines.
sidebar:
  label: CFTC COT
  order: 21
tags: [futures, positioning, derivatives, free, no-api-key, time-series, data:cftc-cot]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of the CFTC Traders in Financial Futures history file (cftc.gov, fut_fin_txt_2023.zip -> FinFutYY.txt)
  access: free
---

**CFTC Commitments of Traders (COT)** is a weekly report published by the U.S.
Commodity Futures Trading Commission (CFTC). Each release gives aggregate open
futures positions (a separate version covers futures and options combined),
broken down by trader category for each reported market. Positions are measured
as of Tuesday and released the following Friday. The data is free, public, and
needs no API key. Used in, for example,
[Siriwardane, Sunderam & Wallen](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/),
where it supplies weekly position quantities by dealer, hedge fund, and
asset-manager type for futures-based trades.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** weekly aggregate positions by trader category. The Traders in
  Financial Futures (TFF) report runs from June 2010 onward; the Legacy report
  goes back to 1986, with some series earlier.
- **Home:** <https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm>

## Access

Historical annual files are compressed and live under
<https://www.cftc.gov/files/dea/history/>. The paper above uses the Traders in
Financial Futures (TFF) report, futures-only. Download one year directly, no
authentication:

```bash
# Financial-futures (TFF), futures-only, 2023 history file, no key
curl -sL -o fut_fin_txt_2023.zip \
  "https://www.cftc.gov/files/dea/history/fut_fin_txt_2023.zip"
unzip fut_fin_txt_2023.zip   # -> FinFutYY.txt  (~2.1 MB)
```

The archive unzips to a single text file, `FinFutYY.txt`, holding the
financial-futures, futures-only data for that year.

The filename encodes the report family and version: `fut_fin_txt_<year>.zip`
is financial-futures (TFF), futures-only. The combined (futures and options)
version and the other report families (Legacy, Disaggregated, Supplemental)
use different prefixes under the same `/files/dea/history/` directory. List
that directory to find the exact file you need before downloading.

### Load in Python

```python
import pandas as pd

df = pd.read_csv(
    "FinFutYY.txt",
    dtype=str,           # read as str first; cast after inspecting the schema
    low_memory=False,
)

# The TFF position columns hold counts of contracts by trader category, e.g.
# Dealer/Intermediary, Asset Manager/Institutional, Leveraged Funds,
# Other Reportables, plus a Nonreportable residual.
```

Inspect the header row to confirm the exact column names for the vintage you
pulled; the layout differs across report families.

## Gotchas (the ones that bite pipelines)

- **Futures-only versus futures-and-options-combined are different files.**
  They live under different filenames in the same directory. Pick one
  deliberately and do not mix the two in a single series.
- **Dated Tuesday, released Friday.** The snapshot is measured as of Tuesday
  but published the following Friday. Align event windows to the Tuesday
  "as of" date, not the release date, or you bake in a reporting lag.
- **Nonreportable is a residual, not a measured group.** The report counts
  only reportable positions. The Nonreportable figure is what is left over
  after the reportable categories, not a surveyed trader type.
- **Classification is self-reported and can change.** Traders report their own
  category to the CFTC and can be reclassified over time. A category's series
  is not a fixed set of firms across the sample.
- **Each row aggregates across all contract months.** A row covers a whole
  market, not a single contract month, so the data is not contract-month-level.
- **TFF covers financial futures only.** Interest rates, FX, and equity indices
  are in TFF. Physical commodity markets (energy, metals, agriculture) are in
  the Disaggregated report, not TFF. Use the report family that matches the
  market.
- **Market identifiers differ across report families.** Contract-market names
  and codes are not consistent between Legacy, Disaggregated, and TFF; build a
  mapping before joining across families or to other datasets.

## Report families

| Family | Trader categories | History |
|--------|-------------------|---------|
| Legacy | Commercial, Non-Commercial, Nonreportable | from 1986, some series earlier |
| Disaggregated | Producer/Merchant, Swap Dealers, Managed Money, Other Reportables (physical commodity markets) | from 2006 |
| Traders in Financial Futures (TFF) | Dealer/Intermediary, Asset Manager/Institutional, Leveraged Funds, Other Reportables, plus Nonreportable residual (financial futures) | from June 2010 |
| Supplemental | Index trader breakout for selected agricultural markets | from 2006 |

## Citation

Cite the CFTC, the COT report family used, the year or history file, the URL,
and the access date, for example: *U.S. Commodity Futures Trading Commission,
Commitments of Traders, Traders in Financial Futures (futures-only), 2023
history file, retrieved from https://www.cftc.gov/files/dea/history/, accessed
YYYY-MM-DD.* Record the report family and futures-only-versus-combined choice
so the pull is reproducible.
