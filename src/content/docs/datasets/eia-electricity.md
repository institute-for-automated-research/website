---
title: "EIA Electricity Data"
description: >-
  How to pull US Energy Information Administration electricity data (retail
  sales and prices, generation by fuel, plant-level operations, CO2 emission
  factors) from the EIA API v2 with a free key, plus the bracket-encoding,
  row-limit, and facet gotchas that bite pipelines.
sidebar:
  label: EIA Electricity
  order: 43
tags: [energy, electricity, emissions, industry, time-series, free, eia, data:eia-electricity]
verified:
  level: fetched
  date: 2026-06-22
  with: live keyed EIA API v2 pulls, electricity/retail-sales (annual price) and electricity/electric-power-operational-data (annual coal generation, fueltype COW, 2022)
  access: free
  url: https://api.eia.gov/v2/
---

The **US Energy Information Administration (EIA)** publishes the official US
energy statistics. The **electricity** branch covers retail sales, prices, and
revenue by state and customer sector; net generation and fuel consumption by
fuel type; plant-level operating data; operable-generator inventory; and, via
the SEDS and CO2 branches, the emission factors used to convert generation into
carbon. It is the standard source for electricity-sector calibration, including
the brown-electricity emission factor in Pedersen (2026). This page is the
distilled access recipe.

- **Cost:** free, no paywall.
- **API key:** free but **required** (bare requests are rejected).
- **Coverage:** monthly/quarterly/annual electricity series by state and sector,
  generally from 2001; plant-level and hourly grid data on their own histories.
- **Home:** <https://www.eia.gov/electricity/> ·
  **API docs:** <https://www.eia.gov/opendata/documentation.php>

## Access

### Register a key

Get a free key at <https://www.eia.gov/opendata/register.php> (instant email).
Store it in the environment (e.g. `.env` as `EIA_API_KEY=...`); never hard-code
it. The same key works across all EIA branches (coal, natural gas, petroleum,
SEDS, ...), not just electricity.

### Pull a series (API v2)

API v2 is a browsable route tree. Each leaf `/data/` endpoint takes one or more
`data[]` metrics, optional `facets[...][]` filters, and a `frequency`. Query the
parent route (no `/data/`) to discover the available `data` columns, `facets`,
and `frequency` values first.

```python
import os, requests
key = os.environ["EIA_API_KEY"]
r = requests.get(
    "https://api.eia.gov/v2/electricity/retail-sales/data/",
    params={
        "api_key": key, "frequency": "annual",
        "data[0]": "price", "facets[stateid][]": "CA",
        "start": "2022", "end": "2023", "length": 5000,
    },
)
rows = r.json()["response"]["data"]   # period/stateid/sectorid/price/price-units
```

The electricity sub-routes: `retail-sales` (sales, revenue, price, customers by
state and sector), `electric-power-operational-data` (generation and fuel
consumption by fuel type), `rto` (daily/hourly grid operations), `facility-fuel`
(individual plants), `operating-generator-capacity`, and
`state-electricity-profiles`. For emission factors and CO2, use the `seds` and
`co2-emissions` branches.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the EIA docs. Verified against live
keyed pulls on the date above.

- **The `data[0]` / `facets[...][]` brackets are real and must survive the
  shell.** With `curl`, the `[` and `]` are glob metacharacters: the request
  silently returns an empty body until you pass `-g` (or `--globoff`). In
  Python's `requests`, pass them as literal param keys (`"data[0]": "price"`) and
  it works. A blank response is almost always this, not an auth failure.
- **You must name at least one `data[]` metric.** A leaf `/data/` call with no
  `data[0]=` returns metadata-style output or an error, not the series. Pick the
  column (`price`, `sales`, `revenue`, `customers`, `generation`, ...) explicitly.
- **5000-row JSON cap, with a quiet warning.** Each call returns at most 5000
  rows; beyond that you get a `"warnings": [{"warning": "incomplete return"}]`
  block and silently truncated data. Constrain with `facets`, `start`/`end`, or
  paginate with `offset`; do not trust an unpaginated bulk pull.
- **Codes, not labels, in facets.** Fuel types are codes (`COW` = all coal,
  `NG` = natural gas, ...), sectors are numeric IDs, states are postal codes plus
  Census-region aggregates (e.g. `location: 90` Pacific). Pull the facet's value
  list from the parent route before filtering.
- **Sales price is cents per kWh, sector-split.** `retail-sales` `price` is in
  cents/kWh and is reported per `sectorid` (residential, commercial, industrial,
  transportation, and `ALL`); do not average sectors naively. Generation is in
  thousand megawatthours.
- **Some endpoints are deprecated mid-flight.** The CO2 aggregates endpoint, for
  example, is marked *deprecated, see SEDS*. Check the route's `name`/`description`
  for a redirect before standardizing a pipeline on it.

## Endpoints you actually need

| Route (under `/v2/electricity/`) | What it is | Key data columns |
|---|---|---|
| `retail-sales` | Sales, price, revenue, customers by state & sector | `price`, `sales`, `revenue`, `customers` |
| `electric-power-operational-data` | Net generation & fuel use by fuel type | `generation`, `total-consumption` |
| `facility-fuel` | Plant-level operations | `generation`, `consumption` |
| `operating-generator-capacity` | Operable generator inventory | `nameplate-capacity-mw` |
| `rto` | Daily/hourly grid demand & interchange | `value` |

Outside `/electricity/`: `/seds/` (State Energy Data System, including emission
coefficients) and `/co2-emissions/` for carbon.

## Standard operations

- **Electricity prices:** `retail-sales` `price` (cents/kWh); filter to one
  `sectorid` and state, and state the sample window.
- **Generation mix / emission factors:** `electric-power-operational-data`
  `generation` by `fueltypeid`; convert to CO2 with the SEDS coefficient for the
  fuel and vintage you need. Pedersen (2026) calibrates its brown-electricity
  factor at ~0.82 kg CO2/kWh; EIA's published coal factors run somewhat higher,
  so use the paper's number only as its stated calibration, not as the EIA coal
  factor.
- **Always paginate or constrain** to stay under the 5000-row cap, and keep the
  facet codes (fuel, sector, state) documented next to any aggregate.

## Citation

U.S. Energy Information Administration. *Electricity data.* Washington, DC: EIA.
Cite the specific series or table and your access date, e.g. *U.S. Energy
Information Administration, Electricity retail sales (annual, by state and
sector), accessed YYYY-MM-DD, https://www.eia.gov/opendata/.*
