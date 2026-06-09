---
title: "Barro-Ursua macroeconomic database"
description: >-
  The Barro-Ursua database is a long-run cross-country panel of annual real
  per-capita GDP and consumption, assembled to study macroeconomic disasters.
  It is a free academic dataset; the canonical host blocked automated fetches
  from this session, so the download was not exercised here.
sidebar:
  label: Barro-Ursua
  order: 20
tags: [macro, historical, free, academic, time-series, data:barro-ursua]
---

:::note[Free academic data, not exercised here]
The Barro-Ursua database is a **free** academic download (no account, no key),
but the canonical host (Robert Barro's university page) returned automated
requests with a block from this session, so the end-to-end download was **not**
run here. The page therefore carries **no provenance badge**: it documents the
dataset and the access path, but the pull is unverified under the institute's
Verified discipline. Anyone with a browser can download the file directly.
:::

**The Barro-Ursua macroeconomic database** (Robert J. Barro and Jose F. Ursua)
is a long-run, cross-country panel of **annual real per-capita GDP and personal
consumer expenditure**, built to study rare macroeconomic disasters: large
cumulative contractions in output or consumption. For some economies the series
reach back into the nineteenth century. It is used in, for example,
[Krishnamurthy & Muir](/wiki/papers/jf/2025/krishnamurthy-credit-cycles-financial-crisis-2025/)
for long historical real per-capita GDP series for advanced economies.

- **Cost:** free, academic release (no key, no account).
- **Authors / source:** Robert J. Barro and Jose F. Ursua; hosted on the
  authors' academic pages and referenced by the NBER.
- **Coverage:** roughly 40 economies, annual; GDP for more countries than
  consumption; history extends to the 1800s for several countries, ending at
  the published update vintage.

## Access

- **Author download.** The dataset is published as a spreadsheet workbook on
  Robert Barro's academic page (consumption and GDP series, plus the
  disaster-dating worksheets). It is a direct file download with no key or
  account.
- **Not exercised here.** Automated requests from this session were blocked by
  the host, so confirm the current download URL in a browser. The dataset is a
  static academic release, so a cached copy is a reasonable fallback.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; the download itself was not run here.

- **Long series are spliced from heterogeneous national sources.** Pre-WWII
  observations stitch together different historical sources by country, so data
  quality and definitions vary across eras; treat the deep history as more
  uncertain than the post-war sample.
- **Consumption and GDP coverage differ.** More countries have a GDP series
  than a consumption series, and start dates vary by country, so a balanced
  panel is much shorter than the full file. Decide on the series and the
  balanced window deliberately.
- **The disaster definition is a construct, not a field.** "Disasters" are
  derived by applying a cumulative-contraction threshold (the authors use a
  fractional peak-to-trough decline) to the series; the raw data does not label
  them. Reproduce the threshold to match the papers.
- **It is a periodic academic release, not a maintained feed.** The data ends
  at the publication update vintage and is not refreshed in real time; do not
  expect recent years. Pin the vintage you used.
- **Currency basis and population denominators vary.** Real-terms basis and the
  per-capita denominator are country-specific; check the definitions before
  pooling across countries.

## Citation

Cite the Barro-Ursua macroeconomic database (Barro and Ursua), stating the
series used (real per-capita GDP or consumption), the country sample and
window, the release vintage, and the disaster threshold applied. The companion
references are Barro and Ursua, "Macroeconomic Crises since 1870" (2008) and
related work.
