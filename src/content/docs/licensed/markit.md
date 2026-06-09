---
title: "IHS Markit bond pricing: composite quotes for corporate bonds (licensed)"
description: >-
  The Markit Bond Pricing Database (IHS Markit / S&P Global) provides daily
  evaluated composite price quotes for individual corporate and other bonds,
  aggregated from contributing dealers, together with the dealer-count per bond.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: Markit bond pricing
  order: 17
tags: [fixed-income, corporate-bonds, bond-pricing, licensed, data:markit]
---

:::caution[Licensed: not exercised here]
**The Markit Bond Pricing Database is a licensed commercial dataset** (IHS
Markit, now part of S&P Global Market Intelligence), so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session (no IHS Markit / S&P Global credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Markit Bond Pricing** (the Markit Bond Pricing Database, IHS Markit / S&P
Global Market Intelligence) provides daily evaluated composite price quotes for
individual corporate and other bonds, aggregated from contributing dealers,
together with the count of distinct dealers contributing a quote per bond per
day. Note: Markit's single-name CDS spreads, Markit Securities Finance
(securities lending), and Markit quanto forwards are separate products
documented under their own slugs and are not covered here. Used in, for example
[Huang, Nozawa & Shi](/wiki/papers/jf/2025/huang-global-credit-spread-puzzle-2025/)
(daily trader quotes and the number of dealers quoting each bond, used as a
dealer-meeting-intensity proxy), and
[Siriwardane, Sunderam & Wallen](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/)
(Markit cash-bond and CDS pricing for the CDS-bond basis).

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** IHS Markit / S&P Global Market Intelligence.
- **Coverage:** cross-market corporate and credit bonds; daily composite quotes;
  history depending on the feed, with deeper history for investment-grade names.

## Access (when licensed)

- **Directly from IHS Markit / S&P Global.** The common path is a data-feed
  or file-delivery agreement with IHS Markit / S&P Global, keyed on bond
  identifiers (ISIN or CUSIP).
- **Through an institutional data-services agreement.** Some universities and
  asset managers reach Markit products under a broader data-services arrangement
  with S&P Global; confirm whether your institution's agreement covers the Bond
  Pricing feed specifically.
- Credentials and a signed license are required in all cases. Keep them in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Composite quotes, not executed trades.** These are dealer-contributed
  evaluated prices, not transaction prices from TRACE. Quotes can be stale or
  thin where few dealers contribute; for trade-level data you need TRACE (FINRA).
- **Dealer-count is contribution, not depth.** The field reflects how many
  dealers submitted a quote that day; it is not a direct measure of market depth
  or trading volume, and it is bursty around month-ends and holidays.
- **Bond-identifier linking is a separate, imperfect step.** Joining ISIN or
  CUSIP to FISD (Fixed Income Securities Database) issuer, rating, or maturity
  fields requires a separate linking table; match rates are imperfect, and
  idiosyncratic re-issuances or identifier changes can drop bonds silently.
- **Coverage and quote frequency vary by bond and era.** Off-the-run, high-yield,
  or small-issue bonds receive fewer contributing quotes; absence of a quote on a
  given day is not absence of a bond from the universe.
- **Do not conflate with other Markit products.** Markit CDS (single-name
  spreads), Markit Securities Finance (securities lending), and Markit iBoxx
  indices are separate products with separate licenses; mixing feeds or assuming
  a single license covers all Markit data is a common error.
- **Evaluated-price methodology can change across vintages.** The aggregation
  method (trimming, weighting of dealer quotes) can differ across feed versions;
  pin the feed version in your data dictionary and flag any vintage breaks in the
  sample period.

## Citation

Cite the product and vendor, stating the feed version and the bond-identifier
link used, e.g.: *Markit Bond Pricing Database, IHS Markit / S&P Global Market
Intelligence, data licensed and accessed YYYY-MM-DD; bonds linked via CUSIP/ISIN
to FISD.* State the sample period, quote frequency, and how you handle
bond-days with no contributing quote.
