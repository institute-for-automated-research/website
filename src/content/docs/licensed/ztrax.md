---
title: "ZTRAX: Zillow Transaction and Assessment Dataset (licensed)"
description: >-
  ZTRAX was Zillow's national property-level dataset of deed transactions and
  assessor records, distributed free to academics under a data-use agreement
  until the program was discontinued in 2023. This page documents the access
  path and the gotchas; the data was not exercised here.
sidebar:
  label: ZTRAX
tags: [real-estate, housing, property-records, transactions, administrative, licensed, data:ztrax]
---

:::caution[Licensed and discontinued: not exercised here]
**ZTRAX was distributed under a Zillow data-use agreement, not an open
download, and the academic program was discontinued in 2023.** It sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session, and Zillow no longer issues new ZTRAX agreements.
Treat it as unverified and effectively closed to new users. This is the honest
grade under the institute's Verified discipline.
:::

**ZTRAX (the Zillow Transaction and Assessment Dataset)** was a national,
property-level database covering hundreds of millions of records nationwide: deed
transfers (sales, prices, mortgages, foreclosures) and assessor / tax-roll data
(property characteristics, assessed values, owner information) across U.S.
counties. It was the standard research source for parcel-level housing
transactions before Zillow ended the academic program. A paper we distill uses
it:
[Slutzky & Xu](/wiki/papers/rfs/2025/slutzky-financial-consequences-pretrial-detention-2025/)
use ZTRAX real-estate transactions (1993 to 2020; about 9 million Maryland
transactions, with foreclosure events identifiable post-2007) for foreclosure
events and the property-matched sample behind the foreclosure and combined
insolvency tests when estimating the effect of pretrial detention on household
financial distress.

- **Cost:** was free to academic and nonprofit researchers under a signed Zillow
  data-use agreement; not an open public download. The program was discontinued
  in 2023, so new access is no longer granted.
- **Vendor:** Zillow (ZTRAX). Coverage and successor products differ; some
  researchers now turn to commercial deed/assessor vendors instead.
- **Coverage:** parcel-level deeds and assessor records for most U.S. counties,
  back to the early 1990s where county records allow; transaction history depth
  varies by county.

## Access (when licensed)

- **Was through a Zillow data-use agreement.** Approved researchers downloaded
  the full transaction and assessment files (large fixed-width tables with a
  layout document) and matched on property identifiers. New agreements are no
  longer issued.
- **Two linked grains.** A transaction table (deed events: sale, mortgage,
  foreclosure, dates, amounts) and an assessment table (property characteristics,
  assessed value, owner), joined on a Zillow property identifier (RowID / ImportParcelID).
- Where a researcher still holds a legacy copy under their prior agreement, keep
  any credentials or keys in `.env`, never hard-coded, and respect the
  agreement's redistribution limits.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The program is discontinued.** ZTRAX is no longer obtainable from Zillow;
  results built on it are not reproducible by a new user without a legacy copy.
  A pipeline cannot acquire it today. Plan for a commercial deed/assessor vendor
  if you need fresh access.
- **County coverage and history depth are uneven.** Transaction back-history,
  field completeness, and whether prices are recorded depend on each county's
  recording practice; absence of a record is often missing data, not absence of
  a sale. The citing paper's coverage scopes to Maryland for this reason.
- **Deed records mix arms-length and non-arms-length transfers.** Quitclaims,
  intra-family transfers, refinancings, and foreclosure deeds all appear;
  filtering to genuine market sales (by document type and price) is required
  before treating a transfer as a sale. Foreclosure identification is reliable
  only from the post-2007 deeds in the citing paper.
- **Matching to people or addresses is fuzzy.** Owner names and addresses need
  standardization; linking ZTRAX parcels to individuals (as the citing paper
  does to court records) is a probabilistic match that drops and mismatches
  observations. Document the match rate.
- **Large, layout-heavy files.** The raw tables are big fixed-width extracts
  with a separate layout document and shifting schemas across vintages; a
  loader built for one delivery can silently misparse another. Validate against
  the layout file.

## Citation

Cite the source and product, e.g.: *Zillow Transaction and Assessment Dataset
(ZTRAX), Zillow, [dates], accessed YYYY-MM-DD (academic data-use agreement; program
discontinued 2023).* State the counties and date range, the transaction filters
applied, and the match procedure used to link parcels to other records.
