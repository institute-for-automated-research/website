---
title: "CoStar: commercial real estate transactions (licensed)"
description: >-
  CoStar (CoStar Group) is a commercial-real-estate database: property-level
  records of completed sales, listings, leases, assessments, and
  physical/location characteristics across US markets. It is licensed: this
  page documents the access path and the gotchas, but the data was not
  exercised here.
sidebar:
  label: CoStar
  order: 19
tags: [real-estate, commercial-real-estate, licensed, transaction-data, data:costar]
---

:::caution[Licensed: not exercised here]
**CoStar is a licensed commercial dataset** (CoStar Group), so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session (no CoStar credentials were available). The page
documents the access route and the gotchas; treat it as unverified until someone
exercises it through a licensed account. This is the honest grade under the
institute's Verified discipline.
:::

**CoStar** is a **commercial real estate** database published by CoStar Group.
It records property-level data on completed sales, active and historical
listings, leases, assessments, and physical and location characteristics across
US markets. It is a common source in commercial real estate research: used in,
for example
[Nozawa & Tsoy](/wiki/papers/jf/2025/nozawa-counter-markets-nonstandardized-assets-2025/)
for completed CRE sales across 15 US cities, 1998Q1 to 2022Q3, including sale
price, assessment value, and property characteristics, with days-to-sell as a
liquidity proxy.

- **Cost:** licensed, subscription (broker/investor product; academic access
  via a data agreement or negotiated extract). No free tier.
- **Vendor:** CoStar Group.
- **Coverage:** US commercial properties (office, retail, industrial,
  multifamily) by metro and submarket, with sale transactions, listing dates,
  and property attributes; depth varies by market and era.

## Access (when licensed)

- **Directly from CoStar.** The common path is the CoStar platform, with
  exports or a negotiated data extract arranged through CoStar Group. There is
  no standard WRDS path for CoStar.
- Credentials and a valid license are required. Keep them in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage is a selected sample, not a census.** CoStar records marketed or
  observed properties and skews toward larger metros and institutional-grade
  assets. Absence of a property in the data is not evidence that the property
  does not exist or that no transaction occurred.
- **Listing and delisting dates can be noisy or missing.** Any days-to-sell
  measure depends on these dates, which are entered and maintained by brokers.
  Verify the completeness of listing-date fields for your markets before
  constructing liquidity measures.
- **Prices mix multiple sources.** The price field can reflect a reported sale
  price, a broker estimate, or an assessment value. Keep the price type
  explicit and consistent; do not blend types without flagging them.
- **The live platform is continuously updated and overwritten.** Reproducing a
  historical pull requires a dated extract: a fresh pull from the platform will
  not match an older one. Archive the extract date and its scope.
- **Property and submarket definitions are CoStar-specific and not stable
  across vintages.** The CoStar property identifier and submarket boundaries
  can shift between platform versions; pin the vintage before linking across
  files or time periods.
- **Duplicate and revised listings need de-duplication.** A single property can
  appear under multiple listing records (original, revised, relisted); decide
  on a de-duplication rule before constructing the analysis sample and document
  it.

## Citation

Cite the product and vendor, stating the extract date and vintage, the markets
and time period covered, the price field used, and how listing and delisting
dates were cleaned, e.g.: *CoStar commercial real estate data, CoStar Group,
extract dated YYYY-MM-DD; markets: [list]; period: [start] to [end]; price
field: [field name]; listing-date cleaning: [description].*
