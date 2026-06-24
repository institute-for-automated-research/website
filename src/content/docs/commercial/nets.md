---
title: "NETS: National Establishment Time Series (licensed)"
description: >-
  NETS (Walls & Associates, from Dun & Bradstreet source data) is an
  establishment-level panel tracking US establishments annually from the early
  1990s: location, industry, employment, sales, and ownership links. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: NETS
  order: 21
tags: [firms, establishments, employment, licensed, panel-data, data:nets]
---

:::caution[Licensed: not exercised here]
**NETS is a licensed commercial dataset** (Walls & Associates, built from Dun
& Bradstreet source data), so it carries **no
provenance badge**: the access path below was **not** run in this session (no
Walls & Associates credentials were available). The page documents the access
route and the gotchas; treat it as unverified until someone exercises it
through a licensed account. This is the honest grade under the institute's
Verified discipline.
:::

**NETS** (the National Establishment Time Series) is an establishment-level
panel built by Walls & Associates from annual snapshots of the Dun & Bradstreet
(D&B) business database. Each establishment carries a location (geocoded to
county and census tract), industry code, employment, sales, and ownership and
headquarters links tracked over time, which lets researchers follow
establishment births, deaths, relocations, and ownership changes. It is a
common source in establishment-level research: used in, for example
[Barkai & Panageas](/wiki/papers/jf/2025/barkai-value-employment-2025/)
(establishment-level employment and ownership/acquirer-age changes, 1998 to
2014, 213,792 acquisitions), and
[Kruttli, Roth Tran & Watugala](/wiki/papers/jf/2025/kruttli-pricing-poseidon-extreme-weather-2025/)
(firm establishment locations by county, annual, to construct a hurricane
landfall-region exposure measure).

- **Cost:** licensed, purchased extract. No free tier or standard academic
  subscription path.
- **Vendor:** Walls & Associates (from Dun & Bradstreet source data).
- **Coverage:** US establishments annually from the early 1990s; tens of
  millions of establishments per vintage.

## Access (when licensed)

- **Directly from Walls & Associates.** NETS is purchased as a dataset extract,
  often as a one-time vintage. Contact Walls & Associates for current pricing
  and extraction options.
- **No standard WRDS path.** Unlike many licensed academic datasets, NETS does
  not flow through [WRDS](/wiki/commercial/wrds/); the purchase is a direct
  arrangement with the vendor.
- A license agreement is required. Keep any credentials or delivery tokens in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Sales and employment are often imputed, not reported.** Walls & Associates
  derives establishment-level sales and employment from D&B industry-level
  ratios when the underlying D&B record lacks a reported figure. Establishment-
  level sales growth cannot be measured cleanly and level comparisons are noisy;
  Barkai & Panageas flag exactly this limitation.
- **D&B updates lag and carry stale records.** Establishment births and deaths
  are measured with delay and error because D&B does not instantly remove
  defunct entities or add new ones; treat event timing as approximate.
- **Periodic snapshot stitched into a time series.** Within-establishment
  changes over time are more reliable than cross-section levels in any given
  year; design tests accordingly.
- **DUNS and ownership links change with corporate restructurings.** The
  establishment identifier (DUNS) and headquarters/parent ownership links are
  point-in-time; treat them as such rather than as stable longitudinal keys.
- **Geocoding precision varies by vintage.** County-level assignment is
  generally stable; tract-level precision degrades in older vintages and for
  less-populous areas.
- **Coverage and accuracy are debated.** The literature has noted discrepancies
  relative to County Business Patterns (CBP) and the Quarterly Census of
  Employment and Wages (QCEW), particularly for aggregate employment counts.
  Benchmark NETS figures against CBP or QCEW before drawing aggregate
  conclusions.

## Citation

Cite NETS by vendor and source, stating the vintage, whether employment and
sales figures are reported or imputed, and how establishment births and deaths
were defined in your sample: e.g., *NETS (National Establishment Time Series),
Walls & Associates, from Dun & Bradstreet source data, vintage YYYY; employment
figures are largely imputed from industry ratios.* Report the DUNS-based
identifier scheme and any ownership-link vintages used.
