---
title: "SteelBenchmarker steel price index (licensed)"
description: >-
  SteelBenchmarker publishes biweekly reference prices for hot-rolled band,
  cold-rolled coil, scrap, and other steel products. Current spot reports are
  free, but the full historical product-level series is a subscription product.
  This page documents the access path and the gotchas; the series was not
  exercised here.
sidebar:
  label: SteelBenchmarker
tags: [commodities, steel, prices, reference-price, market-data, licensed, data:steelbenchmarker]
---

:::caution[Licensed: not exercised here]
**SteelBenchmarker's full historical series is a paid product** (World Steel
Dynamics / American Metal Market), so it sits in the *Licensed* tier and carries
**no provenance badge**: the access path below was **not** run in this session.
The latest spot prices are posted free, but the product-level history used for
research is a subscription. Treat it as unverified until someone exercises the
full series. This is the honest grade under the institute's Verified discipline.
:::

**SteelBenchmarker** publishes biweekly reference transaction prices for U.S.
and world steel products: hot-rolled band (coil), cold-rolled coil, hot-dipped
galvanized, standard plate, and steel scrap grades. Prices are built from a
survey of buyers and sellers and serve as the public benchmark that physical
steel contracts and the NYMEX steel futures settle against. A paper we distill
uses it:
[Martin](/wiki/papers/rfs/2025/martin-real-effects-centralized-markets-2025/)
uses SteelBenchmarker product-level biweekly prices (January 2007 to December
2017, 19,653 product-publication-date observations across six products) as the
primary source for measuring price dispersion and price levels when testing
whether the introduction of steel futures reduced dispersion in the physical
product market.

- **Cost:** the latest spot reference prices are posted free on the
  SteelBenchmarker site; the full historical, product-level series is a paid
  subscription. No open bulk download of the history.
- **Vendor:** World Steel Dynamics with American Metal Market (the citing paper
  calls it a proprietary price database).
- **Coverage:** biweekly, by product and region (USA, China, World Export),
  going back to 2006; the cross-product structure is what enables
  dispersion-across-products tests.

## Access (when licensed)

- **Spot prices free; history licensed.** The current biweekly release is
  public; the multi-year, product-level back series used for panel work comes
  through a SteelBenchmarker / American Metal Market subscription.
- **The grain is product by publication date.** Each release carries one price
  per product per region; the panel is assembled by stacking releases, as the
  citing paper does around the futures-introduction events.
- Credentials are required for the historical series. Keep any credentials in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Biweekly, not daily.** Prices update roughly every two weeks, so event
  windows are measured in publication dates, not trading days; the citing paper
  counts 40 publication dates before and after each event. Do not assume a daily
  series exists.
- **Survey-based reference prices, not transaction tape.** Each print is a
  reference level derived from a buyer-and-seller survey, not a clearing price
  from a tape. It is a benchmark, with the smoothing and judgment that implies;
  dispersion measures must be built across reporting firms or products, not
  within a single tick.
- **Free spot page is not the research series.** The public site shows only the
  latest values; scraping it does not reconstruct the licensed history, and the
  free numbers can be revised relative to the archived series. Use the licensed
  back series for any panel.
- **Product definitions and regional baskets matter.** Hot-rolled band,
  cold-rolled coil, and the scrap grades are distinct series with different
  liquidity and different futures linkage; treating them as one steel price
  conflates the treated and control products the design relies on.
- **Units and currency.** Prices are quoted per ton in USD for U.S. products;
  reconcile metric versus short ton and region before comparing across baskets.

## Citation

Cite the source and product, e.g.: *SteelBenchmarker (World Steel Dynamics /
American Metal Market), [dates], accessed YYYY-MM-DD.* State the products and
regions used, the date range, and whether the free spot page or the licensed
historical series was the source.
