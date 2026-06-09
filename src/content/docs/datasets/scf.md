---
title: "SCF: Survey of Consumer Finances"
description: >-
  How to pull the Federal Reserve's Survey of Consumer Finances summary extract
  (US household wealth, debt, income, and portfolios) for free with no key, why
  the file has five rows per household, and the weighting and imputation gotchas
  that bite pipelines.
sidebar:
  label: SCF
  order: 14
tags: [macro, cross-section, free, no-api-key, federal-reserve, data:scf]
verified:
  date: 2026-06-09
  level: fetched
  with: live no-key pull of scfp2022excel.zip -> SCFP2022.csv (357 variables, 22975 rows = 5 implicates x ~4595 families; sum of WGT over all rows = 1.313e8, the US household count)
  url: https://www.federalreserve.gov/econres/scfindex.htm
---

The **Survey of Consumer Finances (SCF)** is the Federal Reserve Board's
triennial survey of US household balance sheets: assets, debts, net worth,
income, and portfolio composition, with the detail needed to study wealth
distribution and household leverage. The **summary extract public dataset** is
the version most research uses. This page is the distilled access recipe.

- **Cost:** free, no paywall, no key.
- **Coverage:** triennial (1989, 1992, ... 2019, 2022), cross-sectional; the
  2022 summary extract has **357 variables** for about **4,595 families**.
- **Format:** the summary extract as CSV (in `scfp2022excel.zip`), Stata
  (`scfp2022s.zip`), or SAS; plus the larger full public dataset.
- **Home:** <https://www.federalreserve.gov/econres/scfindex.htm>

## Access

### No key, summary extract (recommended starting point)

```
https://www.federalreserve.gov/econres/files/scfp2022excel.zip   # CSV -> SCFP2022.csv
https://www.federalreserve.gov/econres/files/scfp2022s.zip       # Stata
```

```python
import io, zipfile, requests, pandas as pd

url = "https://www.federalreserve.gov/econres/files/scfp2022excel.zip"
z = zipfile.ZipFile(io.BytesIO(requests.get(url).content))
scf = pd.read_csv(z.open("SCFP2022.csv"))

# WGT already nets the five implicates: summing WGT over all rows = US households.
wmean_nw = (scf.NETWORTH * scf.WGT).sum() / scf.WGT.sum()   # weighted mean net worth
```

The summary extract carries the cleaned, ready-to-use aggregates (`NETWORTH`,
`INCOME`, `ASSET`, `DEBT`, and demographic recodes like `AGE`, `EDCL`, `RACE`).
Use the **full public dataset** only when you need a variable the extract does
not expose.

## Gotchas (the ones that bite pipelines)

The reason to read this page rather than the codebook. Verified against the live
2022 extract on the date above.

- **Five rows per household (multiple imputation).** The file has about five
  times as many rows as families (22,975 = 5 x ~4,595): every household appears
  as **five implicates** that fill in missing answers. `Y1` is the implicate
  id, `YY1` the household id. You must use **all five** and not deduplicate, or
  you discard the imputation and bias standard errors.
- **Weights are mandatory, and already net the five implicates.** Nothing is
  representative unweighted. In this summary extract `WGT` is pre-scaled so that
  summing it over all five implicate rows equals the US household count (verified:
  the sum of `WGT` over the full 2022 file is about 131 million). Weight by `WGT`
  directly across all rows; do **not** divide by five again, or totals come out
  5x too small.
- **Proper standard errors need replicate weights.** Point estimates use `WGT`,
  but correct sampling variance needs the separate **replicate-weight** file
  plus the imputation variance across the five implicates; the naive SE on the
  stacked file is wrong.
- **Triennial, and dollars are survey-year.** Surveys are three years apart;
  values are in the survey year's dollars. Deflate to compare across waves, and
  do not treat it as a panel: each wave is a fresh cross-section, not the same
  households.
- **Top wealth is special.** The SCF oversamples wealthy households (via a
  list sample) precisely so top-tail wealth is captured; this is a feature, but
  it means the weights, not raw counts, carry the distribution. Public values
  are also rounded / lightly disclosure-protected.
- **Extract vs full dataset codes differ.** Summary-extract variable names
  (`NETWORTH`, `ASSET`) are constructed aggregates; the full public dataset uses
  raw `Xnnnn` question codes. Do not assume a name carries across the two files.

## Variables you actually need (summary extract)

| Variable | Meaning |
|---|---|
| `YY1`, `Y1` | Household id, implicate id (1-5) |
| `WGT` | Sample weight |
| `NETWORTH` | Household net worth |
| `ASSET`, `DEBT` | Total assets, total debt |
| `INCOME` | Total household income |
| `AGE`, `EDCL`, `RACE` | Age, education class, race/ethnicity of respondent |

## Standard operations

- **Wealth distribution:** compute weighted percentiles of `NETWORTH` with
  `WGT`; report across all five implicates.
- **Means and totals:** weight by `WGT` across all rows; it is already scaled so
  the five implicate copies sum to the population, so neither means nor totals
  need a further division by five.
- **Inference:** use the replicate weights plus the imputation (Rubin) variance
  for standard errors; the macros / packages the Fed documents handle both.
- **Cross-wave:** deflate to a common year and treat each wave as a separate
  cross-section.

## Citation

Board of Governors of the Federal Reserve System. *Survey of Consumer Finances*
(2022). Washington: Federal Reserve Board. Cite the survey wave and your access
date; the Fed's SCF page lists the suggested wording and the codebook.
