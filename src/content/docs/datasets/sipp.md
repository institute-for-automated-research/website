---
title: "SIPP (Survey of Income and Program Participation)"
description: >-
  How to pull SIPP public-use household income and employment microdata from the
  U.S. Census Bureau with no API key, including the schema JSON for variable
  definitions, the character-delimited CSV format, and the gotchas that bite
  longitudinal pipelines.
sidebar:
  label: SIPP
  order: 29
tags: [household, labor, income, survey, panel, free, no-api-key, data:sipp]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of the SIPP 2022 public-use schema (www2.census.gov/programs-surveys/sipp/data/datasets/2022/pu2022_schema.json) and confirmed the pu2022_csv.zip data file serves over HTTP
  access: free
---

**Survey of Income and Program Participation (SIPP)** is a longitudinal
household survey conducted by the U.S. Census Bureau. The same respondents are
re-interviewed annually, and the interview captures monthly-level information on
labor-force activity and employment transitions, income by source, household and
family composition, and participation in government programs. Public Use (PU)
microdata files are released free with no API key. Used in, for example,
[Choukhmane & de Silva](/wiki/papers/jf/2026/choukhmane-portfolio-choices-risk-preferences-2026/),
where SIPP supplies the labor income process estimation and employment
transition probabilities.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** monthly recall for all panel members, re-interviewed annually.
  The redesigned SIPP begins with the 2014 panel, with annual single-year
  panels from 2018 onward; older panels run from 1984 through 2008.
- **Home:** <https://www.census.gov/sipp>

## Access

Panel-year files are organized in per-year subdirectories under
<https://www2.census.gov/programs-surveys/sipp/data/datasets/>. Each year
folder contains a public-use CSV zip, a gzipped CSV, SAS input files, and a
JSON schema with variable definitions and labels. Download the 2022 panel
directly, no authentication:

```bash
# Variable schema (complete pull, 768 KB) -- first variable is SSUID
curl -sL -o pu2022_schema.json \
  "https://www2.census.gov/programs-surveys/sipp/data/datasets/2022/pu2022_schema.json"

# Public-use microdata (large CSV zip)
curl -sL -o pu2022_csv.zip \
  "https://www2.census.gov/programs-surveys/sipp/data/datasets/2022/pu2022_csv.zip"
```

List the top-level directory to see available panel years before downloading:
<https://www2.census.gov/programs-surveys/sipp/data/datasets/>

### Files available per panel year

| File type | Typical filename pattern | Notes |
|-----------|--------------------------|-------|
| CSV zip | `pu<year>_csv.zip` | pipe/character-delimited; parse with schema |
| Gzipped CSV | `pu<year>_csv.gz` | same content, gzip-compressed |
| SAS input files | `pu<year>_sas.zip` | format statements for SAS users |
| Schema JSON | `pu<year>_schema.json` | variable names, labels, value codes |

### Load in Python

```python
import json
import pandas as pd

# 1. Load the schema to inspect variable names and labels
with open("pu2022_schema.json") as f:
    schema = json.load(f)

# schema is a list of variable-definition objects, e.g.:
# [{"name": "SSUID", "label": "Sample Unit Identifier (scrambled)", ...}, ...]
var_names = [v["name"] for v in schema]
print(var_names[:10])

# 2. Read the public-use CSV; the file is pipe/character-delimited
#    Read dtype=str first and cast after inspecting each column
df = pd.read_csv(
    "pu2022_csv.zip",          # pandas reads zip directly
    sep="|",                   # pipe delimiter; confirm with schema if changed
    dtype=str,
    low_memory=False,
)

# 3. Track individuals: combine SSUID (sample unit) + PNUM (person number)
df["person_id"] = df["SSUID"] + "_" + df["PNUM"]

# 4. Apply person weights before computing any means or proportions
df["WPFINWGT"] = pd.to_numeric(df["WPFINWGT"], errors="coerce")
```

Confirm the delimiter and column names against the schema for the specific
panel year you are using; the variable set and coding can differ across panels.

## Gotchas (the ones that bite pipelines)

- **Old and new panels are not comparable.** The 2014 redesign (the 2014 panel,
  then annual single-year panels from 2018 onward) changed the sample design,
  weighting, and reference-period recall relative to the 1984-2008 panels. Do not splice the two generations into a
  single time series without explicit adjustment.
- **Weights are required.** SIPP is a complex survey. Estimates need the
  supplied person or household weights and the set of replicate weights for
  variance estimation. An unweighted mean is biased and not representative of
  the U.S. population.
- **Seam bias inflates transition rates.** Respondents recall month-by-month
  activity since the prior interview. Month-to-month transitions cluster at
  interview-wave boundaries because recall degrades within a reference period;
  measured transition rates are artificially elevated at seams.
- **Longitudinal linking requires two keys.** SSUID identifies the sample
  unit (roughly a household at the time of initial sampling) and PNUM
  identifies the person within it. Both must be combined to track an individual
  across waves. Attrition shrinks the panel over time; account for panel
  non-response in any longitudinal analysis.
- **Income variables are topcoded and imputed.** High incomes are topcoded to
  protect confidentiality, and hot-deck imputation flags are provided for
  missing values. Tail estimates of income distributions and regression
  coefficients on imputed observations are affected; check the imputation flags
  before using income in a model.
- **The data is character-delimited text, not a preformatted table.** The
  public-use file is a flat text file with a pipe delimiter. You must parse it
  against the schema JSON to get variable labels and value codes. Do not assume
  columns are in a fixed position without checking the schema for the specific
  panel year.

## Citation

U.S. Census Bureau, Survey of Income and Program Participation, 2022 Panel,
Public Use Microdata, retrieved from
https://www2.census.gov/programs-surveys/sipp/data/datasets/2022/, accessed
2026-06-09.
