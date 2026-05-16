---
title: Flexible data-mining strategies (Chen-Lopez-Lira-Zimmermann)
description: >-
  How to get ~30,000 data-mined long-short strategies and the signal-theory
  classification for free — the gdown-for-Drive trap, the size trap, and
  start-from-the-small-file tip, for automated pipelines.
sidebar:
  label: Flexible data-mining
  order: 5
verified:
  date: 2026-05-16
  with: live GitHub raw fetch (SignalsTheoryChecked.csv, 200, real columns)
---

The **flexible data-mining** dataset (Chen, Lopez-Lira & Zimmermann, *"Peer-
reviewed theory does not help predict the cross-section of stock returns"*)
is the free benchmark of **~30,000 long-short strategies** built from every
constructible CRSP/Compustat accounting ratio, plus a classification of which
*published* signals are theory-motivated vs. purely empirical. It is what the
[ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline uses to ask
whether a "novel" predictor is actually distinguishable from data mining.

- **Cost:** free, no auth (public GitHub + public Google Drive).
- **Code:** <https://github.com/chenandrewy/flex-mining>
- **Bulk data:** a public Google Drive folder (see below).

## Access

### Option 1 — Signal-theory classification (small, start here)

```python
import pandas as pd
url = ("https://raw.githubusercontent.com/chenandrewy/flex-mining/"
       "main/DataInput/SignalsTheoryChecked.csv")
signals = pd.read_csv(url)   # signalname, Authors, Year, Journal, theory, …
```

### Option 2 — Full data-mined returns (large, Google Drive)

```python
# pip install gdown
import gdown
gdown.download_folder(
    "https://drive.google.com/drive/folders/1SZe_aF4ZNvK4ZRx2jQUE1j19KQvBaqWr",
    output="data/flex-mining/", remaining_ok=True)
```

Key files: `DataMinedLongShortReturnsEW.csv`,
`DataMinedLongShortReturnsVW.csv` (~30K strategies, monthly).

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the repo. The small GitHub CSV was
fetched live on the date above (200, real columns); the bulk returns live in
the linked Drive folder.

- **The bulk data is on Google Drive — use `gdown`.** Plain `requests` on a
  Drive folder URL does not work. `pip install gdown` and use
  `download_folder`. This is the most common failure here.
- **It's large (~500 MB+).** Download once to `data/flex-mining/` and cache.
  Load big CSVs with `usecols=` / chunking or you will OOM.
- **Start from the small file.** `SignalsTheoryChecked.csv` (~65 KB, straight
  from GitHub) is enough to scope an analysis before pulling 30K strategies.
- **EW vs VW are different files.** State which; they tell different stories.
- **It's a benchmark distribution, not a strategy list.** The point is to
  compare a published signal's return against the *distribution* of mined
  returns (is it in the right tail?), not to trade the 30K.
- **Drive folder IDs can rotate.** If `download_folder` fails, check the
  GitHub README for the current link before assuming the data moved.

## What's inside

| File / folder | Description |
|---|---|
| `DataMinedLongShortReturnsEW.csv` | EW long-short returns, ~30K strategies |
| `DataMinedLongShortReturnsVW.csv` | VW long-short returns, ~30K strategies |
| `DataInput/SignalsTheoryChecked.csv` | Published signals: theory vs. empirical |
| `Risk-vs/` | Risk vs. mispricing decomposition outputs |

## Standard operations

- **Benchmark published vs. mined:** is a published signal in the right tail
  of the mined return distribution?
- **Sufficiency:** how much cross-sectional variation does the published set
  capture vs. the full mined set?
- **Pre-publication:** do soon-to-be-published patterns differ before vs.
  after publication?
- **Theory value:** do theory-motivated signals beat empirical ones,
  conditional on mined performance?
- **Always state** EW vs VW, sample period, and any filters.

## Citation

*Chen, A. Y., J. Lopez-Lira, and T. Zimmermann. "Peer-reviewed theory does not
help predict the cross-section of stock returns." Data and code:
https://github.com/chenandrewy/flex-mining, accessed YYYY-MM-DD.*
