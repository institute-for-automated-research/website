---
title: "NielsenIQ retail scanner and consumer panel (licensed)"
description: >-
  NielsenIQ retail scanner and Homescan consumer-panel data, distributed for
  academic research through the Kilts Center at Chicago Booth. It is licensed:
  this page documents the access path and the gotchas, but the data was not
  exercised here.
sidebar:
  label: NielsenIQ
tags: [consumption, retail, micro, licensed, data:nielseniq]
---

:::caution[Licensed: not exercised here]
**NielsenIQ data is a paid licensed product**, distributed to researchers under
a Kilts Center data agreement, so it sits in the *Licensed* tier and carries
**no provenance badge**: the access path below was **not** run in this session
(no Kilts / NielsenIQ subscription was available). The page documents the access
route and the gotchas; treat it as unverified until someone exercises it through
a licensed account. This is the honest grade under the institute's Verified
discipline.
:::

**NielsenIQ** (formerly Nielsen) sells two distinct consumer datasets that
academic users reach through the **Kilts Center for Marketing at the University
of Chicago Booth School of Business**: the **Retail Scanner** data (weekly
store-level sales, prices, and quantities aggregated from point-of-sale systems)
and the **Consumer Panel** (Homescan, a longitudinal panel of households that
record their purchases). They are the standard source for high-frequency
household consumption and retail-price research. A paper we distill uses it:
[Allcott et al.](/wiki/papers/jf/2026/allcott-corporate-social-impact-2026/)
on an economic view of corporate social impact.

- **Cost:** licensed; access for academics runs through a Kilts Center data
  agreement and an annual subscription paid by the institution. No free tier.
- **Vendor:** NielsenIQ, distributed for research by the Kilts Center
  (Chicago Booth).
- **Coverage:** Retail Scanner covers a large set of participating U.S. retail
  chains at the store-week-UPC level; the Consumer Panel tracks tens of
  thousands of U.S. households at the trip-UPC level. Both run from the mid-2000s
  forward.

## Access (when licensed)

- **Through the Kilts Center.** An institution signs the Kilts data agreement;
  named researchers are then granted access and download the data from the Kilts
  Center marketing-data server. Each product (Retail Scanner, Consumer Panel) is
  licensed and downloaded separately.
- **Annual files, not a live feed.** The data is delivered as annual flat-file
  releases (tab-delimited), organized by year and product module, plus master
  files for products, stores, and households. You build a panel by stitching the
  annual releases together yourself.
- Credentials and the signed agreement are required; keep any credentials in
  `.env`, never hard-coded, and respect the agreement's redistribution limits.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Retail Scanner is store-level, the Consumer Panel is household-level: they
  are not the same data.** Scanner is what stores sold; the panel is what
  households reported buying. They cover different universes, use different
  weights, and do not reconcile to each other. Pick the one that matches the
  question and do not splice them naively.
- **Projection and panel weights are mandatory for any population total.** Both
  products ship sampling/projection weights; raw row counts and raw sums are
  sample artifacts, not population quantities. Always apply the provided weights
  before reporting national or market totals.
- **UPC versioning and product churn.** A UPC can be reused or revised over time,
  and the product master changes across annual releases, so a UPC is not a stable
  panel identifier on its own. Join through the version-stamped product master
  for the matching year rather than assuming a UPC means the same item across
  years.
- **Product modules and departments, not free-text categories.** Items are
  classified into NielsenIQ product modules, groups, and departments; analysis by
  "category" means choosing a level of that hierarchy. Misaligning the hierarchy
  level across years silently changes the category definition.
- **Store coverage changes as chains enter and leave.** The set of participating
  retailers is not constant, so a store-week panel has entry and exit that is a
  data-coverage artifact, not a market event. Do not read a store dropping out as
  a closure.
- **Magnet and special items.** Some non-UPC items (random-weight produce, meat,
  bulk) are captured through "magnet" data with different conventions and
  coverage; treat them separately from scanned UPC items.
- **It is large.** Retail Scanner is hundreds of gigabytes across years; plan for
  out-of-core processing and pull only the product modules and years you need.

## Reference: the two products

| Product | Unit of observation | Typical key fields |
|---|---|---|
| Retail Scanner | store x week x UPC | store code, week ending, UPC, units, dollar sales, price |
| Consumer Panel (Homescan) | household x trip x UPC | household code, trip date, retailer code, UPC, quantity, total price paid |

Master files (products, stores, households, retailers) carry the descriptive
fields and the weights; join the transaction files to them through the matching
annual release.

## Citation

Cite NielsenIQ as the data owner and the Kilts Center as the distributor, per the
required acknowledgment in the data agreement, e.g.: *Researcher(s) own analyses
calculated (or derived) based in part on data from NielsenIQ and marketing
databases provided through the Kilts Center for Marketing Data Center at the
University of Chicago Booth School of Business.* State the product (Retail Scanner
or Consumer Panel), the years, and the product modules used. The conclusions are
the researcher's own and not those of NielsenIQ.
