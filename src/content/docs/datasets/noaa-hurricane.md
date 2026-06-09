---
title: "NOAA hurricane track data (HURDAT2 / NHC)"
description: >-
  NOAA National Hurricane Center best-track tropical-cyclone data (HURDAT2):
  6-hourly positions, winds, pressure, and landfalls, with the no-key
  text-file download recipe and the gotchas that bite pipelines.
sidebar:
  label: NOAA hurricanes
  order: 26
tags: [climate, natural-disasters, weather, free, no-api-key, event-data, data:noaa-hurricane]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key pull of the Atlantic HURDAT2 best-track file (nhc.noaa.gov, hurdat2-1851-2023)
  access: free
---

**HURDAT2** (HURricane DATabase, version 2) is the post-season "best track"
archive maintained by NOAA's National Hurricane Center (NHC). For every
tropical and subtropical cyclone it records 6-hourly entries (plus extra
entries at landfall and intensity peaks) with maximum sustained wind, central
pressure, and the 34/50/64-knot wind radii by quadrant. There is a separate
Atlantic file (since 1851) and a separate Northeast and North-Central Pacific
file (since 1949). Used in, for example,
[Kruttli, Roth Tran & Watugala](/wiki/papers/jf/2025/kruttli-pricing-poseidon-extreme-weather-2025/),
which identifies 37 hurricane landfalls (1996-2019), eye location at 6-hour
intervals, and (separately) wind-speed probability forecasts and seasonal
outlooks.

- **Cost:** free, public domain.
- **API key:** none required.
- **Coverage:** Atlantic from 1851, Northeast and North-Central Pacific from
  1949. Each file is reissued after every annual reanalysis.
- **Home:** <https://www.nhc.noaa.gov/data/> (HURDAT2 section); the Atlantic
  and Pacific files are under <https://www.nhc.noaa.gov/data/hurdat/>

The paper also uses real-time NHC forecast and advisory products (wind-speed
probability forecasts and seasonal hurricane outlooks). Those operational
products are distinct from the post-season HURDAT2 best track; see the gotchas.

## Access

The directory <https://www.nhc.noaa.gov/data/hurdat/> lists both the Atlantic
and the Pacific files along with their issue dates. The dated filename changes
with each annual reanalysis, so list the directory and pick the current file
rather than hardcoding a name.

```bash
# Atlantic best-track file (1851-2023 issue), no key.
# The dated filename changes with each annual reanalysis; list the directory first.
curl -sL "https://www.nhc.noaa.gov/data/hurdat/hurdat2-1851-2023-051124.txt" \
  -o hurdat2_atlantic.txt
```

The file is comma-delimited text with two line types. A storm header line has
three fields (storm ID, name, and the number of data lines that follow); each
following line is one observation. Parse it as a state machine, not as a flat
CSV:

```python
import numpy as np
import pandas as pd

def parse_coord(s):
    s = s.strip()
    val = float(s[:-1])
    if s[-1] in ("S", "W"):
        val = -val
    return val

rows = []
with open("hurdat2_atlantic.txt") as f:
    storm_id = storm_name = None
    for line in f:
        fields = [p.strip() for p in line.split(",")]
        # A header line has exactly three populated fields; data lines have many more.
        if len(fields) == 4 and fields[3] == "":
            storm_id, storm_name = fields[0], fields[1]
            continue
        if len(fields) < 8:
            continue
        rows.append({
            "storm_id": storm_id,
            "storm_name": storm_name,
            "date": fields[0],
            "time": fields[1],
            "record_id": fields[2],        # "L" marks a landfall, else blank
            "status": fields[3],           # HU, TS, TD, ...
            "lat": parse_coord(fields[4]),
            "lon": parse_coord(fields[5]),
            "wind_kt": int(fields[6]),
            "pressure_mb": int(fields[7]),
        })

df = pd.DataFrame(rows)
# Missing values are coded -999; convert before any aggregation.
df = df.replace(-999, np.nan)
```

The first storm header in the Atlantic file is `AL011851, UNNAMED`. To work
basin-wide, repeat the pull for the Pacific file from the same directory.

## HURDAT2 line format

| Position | Header line | Data line |
|----------|-------------|-----------|
| 1 | Storm ID (basin letters + cyclone number + 4-digit year, e.g. `AL011851`) | Date `YYYYMMDD` |
| 2 | Storm name (or `UNNAMED`) | Time `HHMM` UTC |
| 3 | Number of data lines that follow | Record identifier (`L` = landfall, else blank) |
| 4 | | System status (`HU` hurricane, `TS` tropical storm, `TD` tropical depression, others) |
| 5 | | Latitude, e.g. `28.0N` |
| 6 | | Longitude, e.g. `94.8W` |
| 7 | | Maximum sustained wind (knots) |
| 8 | | Minimum central pressure (millibars) |
| 9+ | | 34/50/64-knot wind radii in the four quadrants |

Missing values are coded `-999`.

## Gotchas (the ones that bite pipelines)

- **The filename encodes the version and issue date.** A name like
  `hurdat2-1851-2023-051124.txt` carries the issue date (`051124`) and changes
  with each annual reanalysis. Do not hardcode it; list the directory and pick
  the current file.
- **Two line types in one file.** Storm header lines and observation lines have
  different field counts. Parse with a state machine or a two-pass approach that
  tracks the current storm, not as a flat CSV.
- **Missing values are `-999`, not blank.** Convert them to NaN before
  computing means, maxima, or any aggregate, or the numbers will be wrong.
- **Coordinates are strings with hemisphere suffixes.** Values like `28.0N` and
  `94.8W` must be converted to signed decimals before any distance calculation.
- **Units.** Winds are in knots and pressure in millibars. Convert if you need
  meters per second, miles per hour, or hectopascals.
- **Atlantic and Pacific are separate files.** A basin-wide analysis must read
  both; neither file alone covers all storms.
- **Best track is a post-season reanalysis.** It differs from the operational
  advisories issued in real time. For an identification that depends on what
  investors or agents knew at the time (as in the citing paper's real-time
  forecast use), the best track is not the real-time information set. Keep
  best-track and operational products distinct.
- **One storm can make several landfalls.** The `L` record identifier marks a
  landfall, and a single storm can carry more than one such entry. Do not assume
  one landfall per storm.

## Citation

Cite NOAA NHC, the HURDAT2 database, the basin file and its issue date, the NHC
URL, and the access date, for example: *NOAA National Hurricane Center,
HURDAT2 Atlantic best-track file (hurdat2-1851-2023-051124), retrieved from
https://www.nhc.noaa.gov/data/hurdat/, accessed YYYY-MM-DD.* The issue date is
in the filename; record it so the pull is reproducible.
