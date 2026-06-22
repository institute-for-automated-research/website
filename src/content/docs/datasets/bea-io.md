---
title: "BEA Input-Output Accounts"
description: >-
  How to pull the BEA Input-Output Accounts (Use, Make/Supply, and Requirements
  tables) for free with a registered API key, the table IDs you actually need
  to build upstreamness and production-network measures, and the gotchas that
  bite pipelines.
sidebar:
  label: BEA Input-Output
  order: 42
tags: [production-networks, supply-chains, industry, free, bea, data:bea-io]
verified:
  level: fetched
  date: 2026-06-22
  with: live keyed BEA API pull, InputOutput dataset, Use table (TableID 259, year 2022, 4642 rows) and total-requirements table (TableID 56)
  access: free
  url: https://apps.bea.gov/api/data
---

The **BEA Input-Output (I-O) Accounts** record, in dollars, how each US industry
buys from and sells to every other industry: which commodities each industry
uses as inputs (the **Use** table), which commodities each industry produces
(the **Make / Supply** table), and the **Requirements** tables that invert those
into the total output each industry needs from every other to deliver a dollar
of final demand. They are the standard source for production-network and
supply-chain measures, including the upstreamness/downstreamness index of Antras
and Chor (2018). This page is the distilled access recipe.

- **Cost:** free, no paywall.
- **API key:** free but **required** (register for a `UserID`; bare requests are
  rejected).
- **Coverage:** through this API, Sector (~15 industries) and Summary (~71)
  tables, annual from **1997 to 2024** (confirmed live). The Detail (~400
  industry) tables are published only for benchmark years (most recently 2017)
  and come as separate downloadable files, not through this endpoint.
- **Home:** <https://www.bea.gov/industry/input-output-accounts-data> ·
  **API docs:** <https://apps.bea.gov/api/>

## Access

The I-O tables are not in the no-key NIPA static files. They come through the
BEA Data API, which needs a free key.

### Register a key

Get a free `UserID` at <https://apps.bea.gov/API/signup/>. BEA emails the key
**plus an activation step**: the key stays inert until the account is activated,
so a freshly issued key can return `"This UserId is not active"` until you
complete it. Store it in the environment (e.g. `.env` as `BEA_API_KEY=...`);
never hard-code it.

### Pull a table

The `InputOutput` dataset endpoint takes a `TableID` and a `Year` (or
`Year=ALL`). The same `UserID` also serves NIPA, Regional, GDPbyIndustry, and
the other BEA datasets.

```python
import os, requests
key = os.environ["BEA_API_KEY"]
r = requests.get("https://apps.bea.gov/api/data", params={
    "UserID": key, "method": "GetData", "datasetname": "InputOutput",
    "TableID": "259", "Year": "2022", "ResultFormat": "JSON",
})
rows = r.json()["BEAAPI"]["Results"]["Data"]   # long format: RowCode/ColCode/DataValue
```

Discover valid table IDs and years before pulling, since they are not a tidy
1..N range:

```python
requests.get("https://apps.bea.gov/api/data", params={
    "UserID": key, "method": "GetParameterValues",
    "datasetname": "InputOutput", "ParameterName": "TableID",
    "ResultFormat": "JSON",
})
```

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the BEA docs. Verified against live
keyed pulls on the date above.

- **`"This UserId is not active"` is BEA's generic error, not always an
  activation problem.** Error code `4` carries this message for *any* malformed
  `GetData` call, including a wrong `TableID`. If a metadata call
  (`GetParameterValues`) on the same dataset succeeds with the same key, the key
  is active and the real fault is the request. Check the `TableID` against the
  valid list before assuming the key is dead.
- **Table IDs are an unordered set, not 1..N.** The I-O tables are numbered with
  values like `56`-`61` (Requirements) and `258`-`262` (Use, Make/Supply). A
  guessed small integer such as `TableID=2` returns the "not active" error.
  Always pull the `TableID` parameter list first.
- **Two API levels, plus a Detail tier off-API.** This API serves Sector (~15)
  and Summary (~71) tables; a measure built at one level is not comparable to the
  same measure at the other. The Detail (~400 industry) tables exist only for
  benchmark years and are downloaded as separate files, not through this dataset
  endpoint.
- **Use and Make are different objects.** Upstreamness/downstreamness and
  total-requirements measures are derived from the **Use** and **Make/Supply**
  tables (and their Leontief inverse), not from a single matrix. Confirm which
  table a method needs before pulling: Antras-Chor (2018) upstreamness is built
  from the Use/requirements structure.
- **Long format, paired codes.** Rows return as `RowCode`/`RowDescr` (the
  using/producing industry or commodity) crossed with `ColCode`/`ColDescr`; you
  pivot to a matrix yourself. `RowType`/`ColType` flag whether each axis is an
  Industry or a Commodity, which differs by table.
- **Benchmark vs annual revisions.** Detail benchmark tables (every five years)
  are revised when a new benchmark lands and can reweight history; annual
  Summary tables are themselves revised. State the vintage year for any
  reproducible network measure.

## Tables you actually need

Pulled live from the `TableID` parameter list. Verify against the live list, as
IDs can change between releases.

| TableID | Table | Use |
|---|---|---|
| `259` | Use of Commodities by Industries, Summary | input flows; upstreamness |
| `258` | Use of Commodities by Industries, Sector | coarse input flows |
| `262` | Domestic Supply of Commodities by Industries, Summary | Make/Supply side |
| `261` | Domestic Supply of Commodities by Industries, Sector | coarse supply |
| `56` | Total Requirements, Industry-by-Commodity, Sector | Leontief inverse |
| `57` | Total Requirements, Industry-by-Commodity, Summary | Leontief inverse |
| `60` | Total Requirements, Industry-by-Industry, Sector | industry linkages |
| `61` | Total Requirements, Industry-by-Industry, Summary | industry linkages |

## Standard operations

- **Upstreamness / position in the chain:** build from the Use and total
  requirements tables following Antras-Chor (2018); pick one industry-detail
  level and hold it fixed across years.
- **Network centrality / propagation:** use the requirements (Leontief inverse)
  tables, not raw Use dollars, when you need how much output each industry
  ultimately draws from every other.
- **Pivot before analysis:** the API returns long `Row x Col` records; pivot to
  a square industry-by-commodity (or industry-by-industry) matrix, watching
  `RowType`/`ColType`.
- **Pair with NIPA / GDP-by-Industry:** for value-added and output deflators per
  industry, combine with [NIPA](/wiki/datasets/nipa/) and the BEA
  GDP-by-Industry dataset (same key).
- **State the vintage year and detail level** with any network measure; the I-O
  tables are revised and exist at three granularities.

## Citation

U.S. Bureau of Economic Analysis. *Input-Output Accounts.* Suitland, MD: BEA.
Cite the specific table and year and your access date, e.g. *Bureau of Economic
Analysis, Use of Commodities by Industries (Summary), 2022, accessed
YYYY-MM-DD.*
