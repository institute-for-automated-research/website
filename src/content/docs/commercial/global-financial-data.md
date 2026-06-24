---
title: "Global Financial Data (GFD): long-run cross-country series (licensed)"
description: >-
  Global Financial Data is a commercial vendor of long-run historical stock,
  bond, commodity, and macroeconomic series spanning many countries and
  centuries. It is licensed: this page documents the access path and the
  gotchas, but the data was not exercised here.
sidebar:
  label: Global Financial Data
tags: [macro, international, historical, returns, licensed, data:global-financial-data]
---

:::caution[Licensed: not exercised here]
**Global Financial Data is a paid licensed product** (Global Financial Data,
Inc.), so it sits in the *Licensed* tier and carries **no provenance badge**:
the access path below was **not** run in this session (no GFD credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Global Financial Data (GFD)** is a commercial database of long-run historical
financial and macroeconomic series: equity price and total-return indices, bond
yields, exchange rates, commodity prices, interest rates, and macro aggregates,
assembled for many countries with histories reaching back centuries in some
series. Its distinguishing feature is *long-run cross-country* coverage: it
stitches together historical sources to extend series far before the start of
modern machine-readable feeds, which makes it a standard input for
survivorship-bias and very-long-horizon return studies. A paper we distill uses
it:
[Van Binsbergen, Hua, Peeters & Wachter](/wiki/papers/jf/2025/binsbergen-united-states-lucky-survivor-2025/)
draw on annual total returns for 55 countries from 1920 to 2020 to estimate
survivorship-corrected crash risk.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Global Financial Data, Inc.
- **Coverage:** thousands of series across dozens of countries; equity, fixed
  income, FX, commodities, and macro, with deep historical extensions assembled
  from archival sources.

## Access (when licensed)

- **Through the GFD web platform or API.** Series are pulled from the GFD
  Finaeon platform (web interface and an API), keyed by GFD's own ticker/series
  codes. An extract is a set of series codes over a date range.
- **Some series reach researchers via institutional libraries.** Universities
  sometimes provide GFD access through a library subscription rather than a
  direct lab licence; check which route your institution provides.
- API credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Spliced series carry a methodology break at every join.** A "long-run"
  series is a concatenation of underlying historical sources with different
  construction methods; the further back you go, the more the index reflects
  GFD's splicing choices rather than a single consistent methodology. Read the
  series documentation before treating a multi-century series as homogeneous.
- **Total-return versus price indices.** GFD provides both; mixing a price index
  for one country with a total-return index for another silently biases
  cross-country return comparisons. Confirm the index type for every series in a
  panel.
- **Currency and real-versus-nominal.** Series are in native currency and mostly
  nominal; cross-country aggregation requires explicit FX conversion and a
  consistent deflator choice. Do not mix currencies or nominal-with-real series.
- **Sparse and interpolated early history.** Early observations can be annual,
  interpolated, or carried from a single archival source; apparent low volatility
  in the deep past may be an artifact of sparse sampling rather than calm markets.
- **Country composition changes over time.** Borders, market existence, and
  index membership shift across a century-long sample; a "country" series can
  reflect different underlying markets at different dates. Treat the country
  panel as unbalanced and document entry/exit.
- **Provenance is the value and the risk.** Because the long histories come from
  archival reconstruction, cross-check GFD against an independent source
  (e.g. official statistics or another historical compilation) when a single
  series drives a result.

## Reference: representative series families

| Family | Examples |
|---|---|
| Equity indices | Country total-return and price indices, long-run composites |
| Fixed income | Government bond yields, bill rates, long-term interest rates |
| FX | Bilateral exchange rates, long-run currency series |
| Commodities | Gold, oil, agricultural and metal price histories |
| Macro | CPI, GDP, population, and other long-run aggregates |

Series are keyed by GFD codes; pull the specific codes you need, record the
index type (price vs. total return), and note the historical splice points.

## Citation

Cite the provider and database, e.g.: *Global Financial Data (GFD), accessed
YYYY-MM-DD.* State the series codes used, the index type, the currency, and the
date range so the sample is reproducible.
