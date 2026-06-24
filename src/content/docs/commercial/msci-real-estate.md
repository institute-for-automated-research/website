---
title: "MSCI Real Estate (IPD): property indices and yields (licensed)"
description: >-
  MSCI Real Estate (formerly IPD) provides property total-return indices and
  rental-yield benchmarks across countries and sectors, built from appraised
  institutional portfolios. It is licensed: this page documents the access path
  and the gotchas, but the data was not exercised here.
sidebar:
  label: MSCI Real Estate
tags: [real-estate, indices, international, yields, licensed, data:msci-real-estate]
---

:::caution[Licensed: not exercised here]
**MSCI Real Estate is a paid licensed product** (MSCI, formerly IPD), so it carries **no provenance badge**: the access path below
was **not** run in this session (no MSCI Real Estate credentials were available).
The page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**MSCI Real Estate** (the IPD indices, after MSCI acquired Investment Property
Databank) measures the performance of directly held institutional real estate:
total returns, capital growth, income return, and rental-yield benchmarks, by
country and by property sector (office, retail, industrial, residential). The
indices are built bottom-up from the appraised portfolios that institutional
investors contribute, so they reflect *valuation-based* performance rather than
transaction prices. It is a standard benchmark source for real-estate yield and
return levels. A paper we distill uses it:
[Amaral, Dohmen, Kohl & Schularick](/wiki/papers/jf/2025/amaral-superstar-returns-spatial-heterogeneity-2025/)
anchor their long-run city housing-return database to 2018 MSCI rental-yield
benchmarks.

- **Cost:** licensed, subscription. No free tier (headline aggregates are
  sometimes published, but the underlying series are licensed).
- **Vendor:** MSCI (the IPD databank lineage).
- **Coverage:** many countries and property sectors, with annual and (in some
  markets) quarterly frequency; history is deeper in markets with long-standing
  IPD contribution (UK, several European and developed markets).

## Access (when licensed)

- **Through MSCI Real Estate (IPD) products.** Series are obtained via MSCI's
  real-estate index and analytics products under a licence, keyed by country,
  sector, and index variant (total return, capital growth, income return, yield).
- **Aggregates versus contributed micro-data.** The published indices are
  available to licensees; the underlying contributed portfolio data is a separate,
  more restricted arrangement. Confirm which you have access to.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Appraisal-based, so returns are smoothed.** Index values come from periodic
  property appraisals, not market transactions; this *smooths* and lags returns
  relative to a transaction-price index, understating volatility and the speed of
  repricing. Do not treat MSCI real-estate volatility as comparable to equity or
  transaction-based indices without an unsmoothing adjustment.
- **Survivorship and contributor composition.** The index reflects the
  portfolios institutions choose to contribute; the contributor set changes over
  time and skews toward prime institutional-grade assets. Levels and trends can
  shift as composition changes, not only as the market moves.
- **Yield definitions differ.** "Net initial yield," "equivalent yield," and
  "income return" are distinct concepts; using a yield series for the wrong
  purpose (e.g. a benchmark anchor) silently mismatches the level. Confirm the
  exact yield variant.
- **Frequency and geography are uneven.** Many markets are annual-only, some are
  quarterly; sector breakdowns and history depth vary by country. Treat the panel
  as unbalanced and do not assume a common frequency across markets.
- **Currency.** Returns and yields are reported per local market; cross-country
  aggregation needs explicit currency handling. Do not mix currencies in a panel.
- **Cross-source anchoring.** When using an MSCI yield as a benchmark anchor for
  a separately built series (as in the distilled paper), the anchor inherits
  MSCI's appraisal and composition properties; document the anchor year and
  variant so the extrapolation is reproducible.

## Reference: representative index variants

| Variant | What it measures |
|---|---|
| Total return | Income return plus capital growth |
| Capital growth | Change in appraised capital value |
| Income return | Net income relative to capital value |
| Rental / initial yield | Income as a share of value (benchmark anchor) |

Series are keyed by country, sector, and variant; pull the specific variant you
need and record the country, sector, frequency, and as-of year.

## Citation

Cite the provider and database, e.g.: *MSCI Real Estate (IPD) / MSCI, accessed
YYYY-MM-DD.* State the country, sector, index variant, and as-of year so the
series is reproducible.
