---
title: "InfoUSA / Data Axle business and consumer files (licensed)"
description: >-
  Data Axle (formerly InfoUSA) compiles business and consumer reference files:
  establishment listings with location, industry, and employment, plus consumer
  household files. It is licensed: this page documents the access path and the
  gotchas, but the data was not exercised here.
sidebar:
  label: InfoUSA / Data Axle
tags: [establishments, employment, marketing-data, licensed, data:infousa]
---

:::caution[Licensed: not exercised here]
**InfoUSA / Data Axle files are a paid licensed product** (Data Axle, formerly
InfoUSA), so they sit in the *Licensed* tier and carry **no provenance badge**:
the access path below was **not** run in this session (no Data Axle credentials
were available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Data Axle** (formerly **InfoUSA**, also known historically as infoGROUP)
compiles commercial **business** and **consumer** reference files: establishment
listings with name, address, geocode, industry (SIC/NAICS), and employment/sales
estimates, plus consumer household files. The business file is used in research to
get establishment-level location and employment counts, including for small and
private firms not in other databases. A paper we distill uses it:
[Allcott, Montanari, Ozaltun & Tan](/wiki/papers/jf/2026/allcott-corporate-social-impact-2026/)
use InfoUSA for firm-level county employment counts in their analysis of corporate
social impact.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Data Axle (formerly InfoUSA / infoGROUP).
- **Coverage:** U.S. establishments and consumer households, broad but
  compiled-and-estimated rather than administrative; annual snapshots with
  geocodes and industry codes.

## Access (when licensed)

- **Through a Data Axle licence or a research archive.** Files are obtained under a
  commercial licence; some historical InfoUSA business-file vintages are available
  to researchers through data archives. Check which route your institution
  provides.
- **Keyed by establishment.** An extract is a set of establishments with location,
  industry, and employment for a geography and year.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Compiled and estimated, not administrative.** Listings are assembled from
  directories, phone records, and modeling; employment and sales are often
  estimated, not reported. Treat employment counts as estimates, not a census like
  the [QWI](/wiki/datasets/qwi-census/) or BLS.
- **Coverage and accuracy vary by firm size and industry.** Small and new
  establishments are missed or stale; the file lags openings and closings. Do not
  read absence as nonexistence.
- **Establishment, not firm.** Records are establishments (locations); rolling up
  to the firm requires the corporate-linkage fields, which are imperfect. Decide
  the unit deliberately.
- **Vintage snapshots and definition changes.** The file is a periodic snapshot and
  the compilation methodology has changed across the InfoUSA-to-Data-Axle history;
  a panel across vintages is not perfectly consistent. Pin the vintage.
- **Industry coding.** SIC/NAICS assignment is vendor-applied and can be coarse or
  wrong for diversified establishments. Verify industry codes before conditioning
  on them.
- **Duplicate and merged records.** The same establishment can appear under
  variant names or be merged across files; dedupe before counting.

## Citation

Cite the vendor, e.g.: *Data Axle (formerly InfoUSA) business file, accessed
YYYY-MM-DD.* State the vintage/year, the geography, the unit (establishment vs
firm), and that employment figures are compiled estimates.
