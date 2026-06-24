---
title: "CoreLogic: property and housing microdata (licensed)"
description: >-
  CoreLogic (Cotality) is a US property database: deed transactions, tax and
  assessor records, repeat-sales house-price indices, and foreclosure data at
  the property and zip-code level. It is licensed: this page documents the
  access path and the gotchas, but the data was not exercised here.
sidebar:
  label: CoreLogic
  order: 7
tags: [real-estate, housing, microdata, licensed, panel-data, data:corelogic]
---

:::caution[Licensed: not exercised here]
**CoreLogic is a licensed commercial dataset** (CoreLogic, rebranded Cotality), so it carries **no provenance badge**: the
access path below was **not** run in this session (no CoreLogic credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**CoreLogic** is a US **property and housing microdata** provider. Its
research-relevant content includes property-level **deed** records (arms-length
sale transactions with prices and dates), **tax and assessor** files (property
characteristics and assessed values), **repeat-sales** house-price indices, and
**foreclosure** data at the property and zip-code level. It appears across
housing-finance research: used in, for example
[Amaral, Dohmen, Kohl & Schularick](/wiki/papers/jf/2025/amaral-superstar-returns-spatial-heterogeneity-2025/)
for deeds and repeat-sales transactions across 248 MSAs to estimate
idiosyncratic housing-price risk,
[Piazzesi](/wiki/papers/jf/2025/piazzesi-presidential-address-housing-betas-2025/)
for the cross-section of idiosyncratic capital gains on individual houses, and
[Heitz, Martin & Ufier](/wiki/papers/jf/2026/heitz-bank-monitoring-onsite-inspections-2026/)
for zip-code monthly foreclosure rates as a local-stress measure.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** CoreLogic (rebranded Cotality in 2025).
- **Coverage:** US residential and commercial property, with deed, assessor,
  HPI, and foreclosure modules; county-level depth and history vary.

## Access (when licensed)

- **Direct from CoreLogic / Cotality.** Through their data files, platform, or a
  cloud data share, keyed on the CoreLogic property identifier (CLIP).
- **Possibly via a research data provider.** Some institutions reach CoreLogic
  microdata through licensed academic arrangements; availability is not
  confirmed here, so check with your library before assuming a given path.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **County coverage is uneven across time and geography.** Recording practices
  differ by county, and several non-disclosure states (for example Texas) do not
  release transaction prices, so price coverage has structural holes. Check
  coverage for your counties and period before reading gaps as no activity.
- **Deed and assessor files are separate and must be joined.** Transactions
  (deeds) and property characteristics (assessor) live in different files; join
  on the CoreLogic property identifier (CLIP) and confirm the match before
  treating a sale as fully attributed.
- **Repeat-sales needs at least two arms-length sales.** Repeat-sales indices and
  price-risk estimates require the same property selling twice at arms length;
  properties that transact once, or only through non-arms-length transfers, drop
  out, which selects toward more-traded properties.
- **Distinguish arms-length sales from transfers.** The deed file includes
  intra-family transfers, refinancings, and foreclosure-related transfers that
  are not market sales; filter on transaction type before computing returns.
- **Foreclosure data is aggregated geographically.** Foreclosure measures are
  often used at the zip-code or county level; state the geography and the
  monthly definition so the stress measure is reproducible.
- **Files are large and get refreshed.** Property microdata is voluminous and
  periodically restated; pin the data vintage and re-pull deliberately rather
  than mixing refreshes.

## Citation

Cite the product and vendor, e.g.: *CoreLogic property data, CoreLogic
(Cotality); data licensed and accessed YYYY-MM-DD.* State the data vintage, the
module (deed, assessor, HPI, or foreclosure), the geography, and the
transaction-type filter used.
