---
title: "Orbis (Bureau van Dijk): global firm financials and ownership (licensed)"
description: >-
  Orbis (Bureau van Dijk / Moody's Analytics) is a global firm-level database
  covering financial statements, ownership and corporate-structure links, and
  firm identifiers for public and private companies across countries. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: Orbis (BvD)
  order: 16
tags: [firms, financial-statements, licensed, panel-data, data:orbis-bvd]
---

:::caution[Licensed: not exercised here]
**Orbis is a licensed commercial dataset** (Bureau van Dijk, a Moody's
Analytics company), so it carries **no
provenance badge**: the access path below was **not** run in this session
(no BvD credentials were available). The page documents the access route
and the gotchas; treat it as unverified until someone exercises it through
a licensed account. This is the honest grade under the institute's Verified
discipline.
:::

**Orbis** is a global firm-level database from Bureau van Dijk (a Moody's
Analytics company). It aggregates financial statements, ownership and
corporate-structure links, and firm identifiers sourced from national
business registers and filings for public and (especially) private companies
across countries. It is used in, for example
[Greenwald, Krainer & Paul](/wiki/papers/jf/2025/greenwald-credit-line-channel-2025/)
(firm financials in the credit-line-channel analysis), and
[Bias, Lochner, Obernberger & Sevilir](/wiki/papers/jf/2026/bias-going-public-internal-organization-2026/)
(firm structure around going public).

- **Cost:** licensed, subscription. Institution-specific modules and country
  coverage determine scope and price. Usually a direct BvD license, not via
  WRDS.
- **Vendor:** Bureau van Dijk / Moody's Analytics.
- **Coverage:** hundreds of millions of firms globally, public and private.
  Financial-statement depth is uneven by country: deeper in countries with
  mandatory account filing (much of Europe), thinner in the US.

## Access (when licensed)

- **BvD Orbis platform.** The common access route is the Orbis web interface
  for ad hoc queries, batch extract requests, or the BvD data feed or API,
  keyed on the BvD ID.
- **Institution-hosted vintage.** Some institutions maintain a historical Orbis
  vintage on a research server; access rules are institution-specific.
- Credentials and an active license are required. Keep them in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Country coverage is deeply uneven.** Europe has detailed filings due to
  mandatory account-filing requirements; US coverage is thin for private
  firms. Cross-country comparisons are biased by differences in reporting
  regimes; document the country-specific coverage gaps in your sample.
- **The live platform does not retain prior vintages.** BvD historically
  overwrote records rather than preserving history, so building a true panel
  requires archived annual disks or institutional vintages. Back-filled and
  restated figures change history silently in the live product.
- **Survivorship bias.** Dead and dissolved firms can drop out of the live
  product, biasing samples toward survivors. Use historical vintages and
  document how you handle firm exit.
- **Consolidation codes must be chosen deliberately.** Orbis carries both
  consolidated and unconsolidated accounts for the same firm; mixing them
  double-counts economic activity. State the consolidation code and apply it
  consistently.
- **The BvD ID is not stable.** Identifiers can change across BvD products
  (Orbis, Amadeus, Zephyr) and across vintages. Linking across products or
  vintages requires a crosswalk; pin the identifier scheme and vintage before
  any merge.
- **Ownership links are point-in-time.** Ownership-structure data reflects
  a snapshot, not a panel. Building ownership histories requires multiple
  vintages and explicit handling of the observation date for each link.
- **Currency, accounting standard, and units fields must be normalized.**
  Orbis mixes currencies, IFRS and local GAAP, and sometimes inconsistent
  units across countries and sources; pooling without normalization produces
  garbage comparisons.

## Citation

Cite the product and vendor, e.g.: *Orbis firm-level data, Bureau van Dijk
(Moody's Analytics), vintage [disk/year], consolidation code [C1/C2/U1/U2],
country sample [list], accessed [date].* State the vintage or disk, the
consolidation code, the country sample, and how survivorship and restatements
were handled in your sample construction.
