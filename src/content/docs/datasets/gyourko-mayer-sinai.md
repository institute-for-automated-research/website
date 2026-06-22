---
title: "Gyourko-Mayer-Sinai Superstar Cities database"
description: >-
  How to reach the Superstar Cities long-run MSA house-price database (Gyourko,
  Mayer & Sinai), plus the gotchas: the data sits behind a free openICPSR
  sign-in while only the AEA appendix PDF is open, it is decadal MSA panels in
  Stata format, and the public file ends at the published vintage.
sidebar:
  label: Superstar Cities (GMS)
  order: 70
tags: [housing, prices, real-estate, urban, panel-data, free, no-api-key, academic, data:gyourko-mayer-sinai]
verified:
  level: reachable
  date: 2026-06-22
  with: confirmed the replication package (openICPSR project 114839, doi 10.3886/E114839V1) resolves and is live, and fetched the open AEA online appendix PDF (HTTP 200, application/pdf, 1.48 MB); the data files sit behind a free openICPSR sign-in and were not pulled here
  access: free
---

**The Superstar Cities database** is the long-run, MSA-level house-price data
assembled by Joseph Gyourko, Christopher Mayer and Todd Sinai for their paper
"Superstar Cities." It tracks real house-price growth across US metropolitan
areas back to 1950, the basis for ranking "superstar" MSAs (those with the
highest long-run real price appreciation) against the rest. It is a standard free
source for cross-MSA long-run housing-return work. Used in, for example,
[Amaral et al. (2025)](/wiki/papers/jf/2025/amaral-superstar-returns-spatial-heterogeneity-2025/),
which extends the Gyourko-Mayer-Sinai MSA database to 2018 via the American
Community Survey for a 316-MSA cross-section.

- **Cost:** free (data behind a no-cost openICPSR sign-in; the appendix PDF is
  fully open).
- **Replication package:** openICPSR project 114839, deposited with the AEA,
  distributed by ICPSR (2019).
- **Coverage:** decadal MSA-level house prices and related series, reaching back
  to 1950; the public file ends at the published vintage.
- **Paper:** *American Economic Journal: Economic Policy* 5(4), 2013, 167-199.

## Access

The replication data is on openICPSR; the journal also posts an open appendix
PDF (documentation, not the panel).

```text
# Replication package (data behind a free openICPSR / ICPSR sign-in; Google
# login works). Scripted requests get HTTP 403, so a human signs in once:
#   https://doi.org/10.3886/E114839V1
#   -> https://www.openicpsr.org/openicpsr/project/114839/version/V1/view

# Open AEA online appendix PDF (documentation only, ~1.48 MB), no login:
#   https://www.aeaweb.org/content/file?id=20254
```

The data files are typically Stata `.dta` plus Excel and a readme; the MSA-by-year
panels are inside the openICPSR deposit, not in the appendix PDF.

## Gotchas (the ones that bite pipelines)

- **openICPSR is a login wall for automation.** Scripted access returns HTTP 403;
  a human must sign in once (free; Google login works) and download. There is no
  anonymous direct-file URL.
- **The open PDF is not the data.** The AEA `content/file?id=20254` appendix is
  documentation; do not mistake it for the MSA panel. The Wharton and Columbia
  faculty pages host the paper PDF, also not the data.
- **Stata-format deposit.** Expect `.dta` files plus a readme, not a single tidy
  CSV; read the readme for variable definitions and the MSA coding.
- **Decadal, long-run frequency.** The series are decadal MSA house prices back to
  1950, not annual; align carefully if joining to annual data.
- **The public file ends at the published vintage.** Later studies (for example
  Amaral et al. 2025) extend it to 2018 via the ACS themselves; the deposit does
  not include that extension, so you build it or use the authors' replication.
- **Do not confuse versions.** "Superstar Cities" is the AEJ: Economic Policy 2013
  article; an earlier NBER working-paper version circulated from 2006. The
  replication package is the AEA deposit (project 114839).

## Reference

| Field | Value |
|-------|-------|
| Authors | Joseph Gyourko, Christopher Mayer, Todd Sinai |
| Replication host | openICPSR project 114839, doi `10.3886/E114839V1` |
| Open appendix | AEA `aeaweb.org/content/file?id=20254` (PDF, documentation) |
| Format | Stata `.dta` plus Excel and readme |
| Coverage | Decadal MSA house prices, back to 1950, to the published vintage |
| Access | Free openICPSR sign-in (no fee); scripted access blocked |
| Key required | No (but sign-in) |

## Citation

Cite Gyourko, Joseph, Christopher Mayer, and Todd Sinai, "Superstar Cities,"
*American Economic Journal: Economic Policy* 5(4), 2013, 167-199, together with
the replication package (openICPSR project 114839, doi 10.3886/E114839V1) and the
retrieval date. If you use an extension of the series (for example to 2018 via the
ACS), describe that construction separately.
