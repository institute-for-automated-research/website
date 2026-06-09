---
title: "NBER-CES Manufacturing Industry Database"
description: >-
  Annual U.S. manufacturing industry panel (output, employment, capital,
  materials, price deflators, and TFP) from the NBER and the Census Bureau's
  Center for Economic Studies, with the no-key download recipe and the gotchas
  that bite pipelines.
sidebar:
  label: NBER-CES
  order: 25
tags: [manufacturing, productivity, industry-data, macro, free, no-api-key, academic, panel-data, data:nber-ces]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key CSV pull of NBER-CES (data.nber.org, nberces5818v1_n2012.csv, NAICS panel 1958-2018)
  access: free
---

**NBER-CES Manufacturing Industry Database** is an annual panel of U.S.
manufacturing industries, a joint project of the NBER and the U.S. Census
Bureau's Center for Economic Studies (CES). Each row is one industry in one
year and carries output, employment, payroll, capital, materials, energy,
inventories, price deflators, and total factor productivity. It is maintained
by Randy A. Becker, Wayne B. Gray, and Jordan Marvakov (and predecessors). It
is free and public; no API key. Used in, for example,
[Grigoris & Segal](/wiki/papers/jf/2026/grigoris-investment-upstream-downstream-uncertainty-2026/),
which uses it to validate the link between input price uncertainty and supplier
return volatility (an upstream/downstream price-correlation check).

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** U.S. manufacturing industries, annual. The NAICS-2012 vintage
  pulled here (`nberces5818v1`) covers 1958 to 2018. A separate SIC-based
  vintage also exists.
- **Home:** <https://www.nber.org/research/data/nber-ces-manufacturing-industry-database>

## Access

Files are served as plain CSV from the NBER data directory with no
authentication.

### Step 1: download the CSV

```bash
# Download the NAICS-2012 vintage (1958-2018), no key
curl -sL -o nberces5818v1_n2012.csv \
  "https://data.nber.org/nberces/nberces5818v1/nberces5818v1_n2012.csv"
```

The file is about 5 MB. The directory <https://data.nber.org/nberces/> lists
each vintage and, within a vintage, both the NAICS version and the SIC version
plus a data dictionary.

### Step 2: load in Python

```python
import pandas as pd

df = pd.read_csv(
    "nberces5818v1_n2012.csv",
    dtype={"naics": str},   # keep industry codes as strings
)
df["year"] = df["year"].astype(int)
```

Parse `naics` as a string so industry codes keep their structure and join
cleanly to other NAICS-coded data; parse `year` as an integer.

## Gotchas (the ones that bite pipelines)

- **NAICS and SIC vintages are not directly comparable.** Industry definitions
  differ between the two bases. Pick one basis and stay on it for a given study;
  do not mix rows from a NAICS file with rows from a SIC file.
- **Industry definitions change across NAICS revisions.** A given code can map
  to a different industry in different vintages or revision years. Cross-walk
  codes before pooling long panels across revisions.
- **Deflators are price indices, not dollars.** The `pi*` series are price
  indices (deflators); deflate the nominal series yourself. Confirm the base
  year and the dollar units (the data dictionary describes nominal dollar
  variables in millions, per the data dictionary) in the documentation rather
  than assuming.
- **Two TFP definitions, each as a rate and a level.** TFP comes in a 4-factor
  variant (`dtfp4`, `tfp4`) and a 5-factor variant (`dtfp5`, `tfp5`), and each
  appears both as a growth rate (`dtfp*`) and as an index level (`tfp*`). Do not
  mix the 4-factor and 5-factor definitions, and do not mix the growth rate with
  the index.
- **This vintage ends in 2018.** `nberces5818v1` is not updated annually, so do
  not expect recent years. Check the directory for a newer vintage before
  pinning one.
- **`naics` reads as an integer by default.** `read_csv` will infer it as an
  integer, which discards any leading zeros and breaks joins to other
  NAICS-coded data. Parse it as a string as shown above.

## Columns

Header row of `nberces5818v1_n2012.csv`, verbatim:

| Column | Meaning |
|--------|---------|
| `naics` | NAICS industry code |
| `year` | Year |
| `emp` | Employment (thousands) |
| `pay` | Total payroll |
| `prode` | Production-worker employment |
| `prodh` | Production-worker hours |
| `prodw` | Production-worker wages |
| `vship` | Value of shipments |
| `matcost` | Cost of materials |
| `vadd` | Value added |
| `invest` | Capital investment |
| `invent` | End-of-year inventories |
| `energy` | Cost of electricity and fuels |
| `cap` | Total real capital stock |
| `equip` | Real equipment capital |
| `plant` | Real structures/plant capital |
| `piship` | Price deflator for shipments |
| `pimat` | Price deflator for materials |
| `piinv` | Price deflator for investment |
| `pien` | Price deflator for energy |
| `dtfp5` | 5-factor TFP growth |
| `tfp5` | 5-factor TFP index |
| `dtfp4` | 4-factor TFP growth |
| `tfp4` | 4-factor TFP index |

Nominal dollar variables are in millions of nominal dollars per the data
dictionary; confirm units and the deflator base year in the documentation for
your vintage.

## Citation

Cite the database, the specific vintage and basis, the maintainers, the NBER
home URL, and the access date, for example: *Becker, Randy A., Wayne B. Gray,
and Jordan Marvakov, NBER-CES Manufacturing Industry Database (vintage
nberces5818v1, NAICS-2012 basis, 1958-2018), National Bureau of Economic
Research,
https://www.nber.org/research/data/nber-ces-manufacturing-industry-database,
accessed YYYY-MM-DD.* For reproducibility, pin the exact vintage filename
(`nberces5818v1_n2012.csv`) so the pull can be repeated.
