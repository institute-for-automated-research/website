---
title: "Refinitiv Worldscope: global company fundamentals (licensed)"
description: >-
  Worldscope is Refinitiv (LSEG) global database of standardized company
  fundamentals (balance sheet, income statement, cash flow, ratios, per-share
  data) and descriptive information for public companies across many countries.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: Worldscope
tags: [accounting, international, fundamentals, licensed, data:worldscope]
---

:::caution[Licensed: not exercised here]
**Worldscope is a paid licensed product** (Refinitiv / LSEG), sometimes reached
through [WRDS](/wiki/licensed/wrds/), so it sits in the *Licensed* tier and
carries **no provenance badge**: the access path below was **not** run in this
session (no Refinitiv / LSEG / WRDS credentials were available). The page
documents the access route and the gotchas; treat it as unverified until someone
exercises it through a licensed account. This is the honest grade under the
institute's Verified discipline.
:::

**Worldscope** is Refinitiv's (LSEG) global database of standardized company
fundamentals: balance sheet, income statement, and cash flow items, along with
ratios, per-share data, and descriptive information for public companies across
many countries, with a long international history. It is one of the two main
sources of international company fundamentals, the other being
[Compustat Global](/wiki/licensed/compustat-global/). Worldscope is the
fundamentals complement to [Datastream](/wiki/licensed/datastream/) (which
supplies prices, returns, and market data) and is frequently used together with
it. A paper we distill uses it:
[Faccio et al.](/wiki/papers/jf/2025/faccio-impediments-schumpeterian-process-replacement-2025/)
on impediments to the Schumpeterian process of creative destruction.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Refinitiv / LSEG (lineage traces through Thomson Reuters /
  Thomson Financial, where the product was the Worldscope database).
- **Coverage:** tens of thousands of firms across developed and emerging
  markets, with annual and interim fundamentals; history reaches into the 1980s,
  with deeper and broader coverage in later years.

## Access (when licensed)

- **Through Datastream or WRDS.** Worldscope fundamentals are typically reached
  through [Datastream](/wiki/licensed/datastream/), where they are exposed as
  Datastream datatypes (the Worldscope "WC" item codes), or through
  [WRDS](/wiki/licensed/wrds/) where the institution licenses it. Check which
  route your institution provides.
- **Keyed by Worldscope identifiers and item codes.** Data is keyed by
  Worldscope's own company identifier and by item ("WC") codes; an extract is a
  set of WC items pulled for a list of firms over a date range.
- Terminal or API credentials are required. Keep any credentials in `.env`,
  never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The "WC" item codes are the schema, and you must map them carefully.** A
  Worldscope extract is a list of WC item codes, and the same labeled item can
  be computed differently than its Compustat analog. As a result Worldscope and
  [Compustat Global](/wiki/licensed/compustat-global/) do **not** reconcile
  item-for-item; do not assume a WC item equals the same-named Compustat field.
- **Accounting-standard heterogeneity limits comparability.** Firms report under
  local GAAP or IFRS with different adoption dates by country, so even after
  Worldscope's standardization, cross-country comparisons of a given item remain
  imperfect. Treat cross-border comparisons with caution.
- **Currency.** Fundamentals are reported in native currency and need explicit
  conversion before any cross-country aggregation or comparison; do not mix
  currencies in a panel.
- **Backfill and survivorship.** Worldscope has added historical data and firms
  retroactively, and the active list excludes dead firms; building a sample from
  only currently covered firms biases it toward survivors. Pin the extraction
  date and source a delisted/dead-firm list when survivorship matters.
- **Identifier linking.** Worldscope codes must be linked to Datastream
  mnemonics and to returns and prices; the Worldscope-to-Datastream link is the
  usual join and has known mismatches. Verify the link rather than assuming a
  clean one-to-one map.
- **Coverage and item availability vary by country and year.** Item availability
  and firm coverage are uneven, with more missingness in emerging markets and in
  early years. Do not read missing as zero, and check item-level availability
  before conditioning a sample on it.
- **Documented data errors.** The comparative-database literature documents
  discrepancies between Worldscope and Compustat Global; do not treat individual
  items as ground truth. Cross-check material observations when a single firm or
  item drives the result.

## Reference: representative WC item codes

| WC code | Item (category) |
|---|---|
| WC02999 | Total assets (balance sheet) |
| WC03351 | Total liabilities (balance sheet) |
| WC03995 | Common equity (balance sheet) |
| WC01001 | Net sales / revenue (income statement) |
| WC01651 | Net income before preferred dividends (income statement) |
| WC04860 | Net cash flow, operating activities (cash flow) |
| WC05001 | Market price, year end (per-share / market) |
| WC05101 | Earnings per share (per-share) |

Item codes are the extraction schema; pull the specific WC items you need and
record them. Availability differs by country and year.

## Citation

Cite the provider and database, e.g.: *Worldscope / Refinitiv (LSEG), accessed
YYYY-MM-DD.* State the WC item codes used, the access route (Datastream or WRDS),
and the extraction date so the sample is reproducible.
