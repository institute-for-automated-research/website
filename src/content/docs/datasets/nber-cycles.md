---
title: "NBER Business Cycle Dates"
description: >-
  How to pull the NBER U.S. business cycle peak and trough reference dates as
  JSON with no API key, plus the gotchas that bite pipelines (announcement lag,
  day-component conventions, committee judgment versus the GDP rule).
sidebar:
  label: NBER cycles
  order: 27
tags: [macro, business-cycle, recession, time-series, free, no-api-key, data:nber-cycles]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key JSON fetch of NBER business cycle reference dates (data.nber.org/data/cycles/business_cycle_dates.json)
  access: free
---

**NBER Business Cycle Dates** are the official peak and trough dates for U.S.
business cycles, determined by the Business Cycle Dating Committee of the
National Bureau of Economic Research (NBER). A peak marks the end of an
expansion and the start of a contraction; a trough marks the end of a
contraction and the start of an expansion. The data is free, public, and needs
no API key. Used in, for example,
[Coimbra, Gomes, Michaelides & Shen](/wiki/papers/jf/2026/coimbra-pension-plans-asset-pricing-2026/),
where NBER business cycle frequencies calibrate the recession/expansion Markov
chain for the productivity shock process.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** all U.S. business cycle turning points determined by the NBER
  committee. The earliest trough in the JSON is December 1854; the earliest
  peak is June 1857. The latest entry reflects the most recently dated cycle.
- **Home:** <https://www.nber.org/research/business-cycle-dating>

## Access

The JSON endpoint returns an array of objects, each with a `"peak"` and a
`"trough"` field as ISO date strings (e.g. `{"peak":"1857-06-01","trough":"1858-12-01"}`).
The earliest entry has an empty peak and a trough of `1854-12-01`, reflecting
that the committee dates the first trough but not the preceding peak. Fetch
directly, no authentication:

```bash
# No key required; returns a JSON array of peak/trough objects
curl -sL "https://data.nber.org/data/cycles/business_cycle_dates.json"
```

Note: the `.csv` variant of that path returns a 404. The JSON endpoint above
is the confirmed no-key working path.

### Load in Python

```python
import pandas as pd

url = "https://data.nber.org/data/cycles/business_cycle_dates.json"
df = pd.read_json(url)

# Convert to datetime; replace empty strings with NaT
df["peak"]   = pd.to_datetime(df["peak"],   errors="coerce")
df["trough"] = pd.to_datetime(df["trough"], errors="coerce")

# Build a monthly recession indicator (1 = contraction, 0 = expansion)
# Expand each peak-trough pair across a monthly date range, then merge
# into a full calendar index.
```

Once `peak` and `trough` are datetime columns, you can expand each row across
a monthly `pd.date_range` to build a 0/1 recession-indicator series aligned
to any monthly panel dataset.

## Gotchas (the ones that bite pipelines)

- **Long announcement lag.** The committee dates a turning point only after
  sufficient data accumulate, often several months to over a year after the
  event. The latest cycle in the JSON may be undated in real time. Do not
  treat the endpoint as a real-time or near-real-time signal.
- **Day component is a convention, not a measurement.** Peaks and troughs are
  identified to the month; the day is set to the first of the month by
  convention. Do not treat the day as meaningful. Work at monthly frequency or
  strip the day when converting to period labels.
- **Monthly cycle dates are distinct from the NBER quarterly dates.** The NBER
  also publishes quarterly turning points (used in some calibration contexts).
  They are not the same series. Confirm which frequency your source references.
- **Determined by committee judgment, not a fixed rule.** The NBER recession
  definition looks at depth, duration, and diffusion across indicators. It is
  not triggered by two consecutive quarters of negative GDP growth. Do not
  substitute one for the other in code or in writing.
- **FRED USREC is a derived artifact.** The FRED series `USREC` (and related
  `USRECM`, `USRECD`) is constructed from these dates but is a different object
  (monthly 0/1). If you use FRED, cite FRED and its construction note. If you
  use the NBER JSON, cite the NBER endpoint. Do not treat them as
  interchangeable in a citation.
- **First entry has a missing peak.** The array element for the 1854 trough
  has an empty string for `"peak"`. Parse with `errors="coerce"` so it becomes
  `NaT` rather than raising.
- **No versioning in the URL.** The endpoint is updated in place when the
  committee issues new dates. Record the access date and the full array in your
  data snapshot so the pull is reproducible.

## Reference

| Field | Value |
|-------|-------|
| URL | `https://data.nber.org/data/cycles/business_cycle_dates.json` |
| Format | JSON array of `{peak, trough}` ISO date strings |
| Frequency | One row per business cycle |
| Earliest trough | December 1854 |
| Earliest peak | June 1857 |
| Update trigger | Committee announcement (irregular, long lag) |
| Key required | No |

## Citation

Cite the NBER, the Business Cycle Dating Committee, the retrieval URL, and the
access date, for example: *National Bureau of Economic Research, Business Cycle
Dating Committee, "US Business Cycle Expansions and Contractions," retrieved
from https://data.nber.org/data/cycles/business_cycle_dates.json, accessed
YYYY-MM-DD.* Record the access date and archive the JSON array at time of
download; the endpoint is updated in place with no version indicator.
