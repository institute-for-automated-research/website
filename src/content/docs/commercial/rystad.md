---
title: "Rystad Energy database (licensed)"
description: >-
  Rystad Energy maintains asset-level oil and gas data: production, costs,
  reserves, and field economics for operators worldwide. It is licensed: this
  page documents the access path and the gotchas, but the data was not exercised
  here.
sidebar:
  label: Rystad Energy
tags: [energy, oil-gas, commodities, production, firm-level, licensed, data:rystad]
---

:::caution[Licensed: not exercised here]
**The Rystad Energy database is a paid licensed product** (Rystad Energy), so it
sits in the *Licensed* tier and carries **no provenance badge**: the access path
below was **not** run in this session. Treat it as unverified until someone
exercises it through a Rystad subscription. This is the honest grade under the
institute's Verified discipline.
:::

**The Rystad Energy database** is an asset-level model of the global oil and gas
industry: production volumes, operating and capital expenditures, reserves, and
field-level economics, built bottom-up from individual fields and tied to the
operating companies. Its products (UCube and related modules) are the reference
source for firm-by-field production and cost data when public filings are too
aggregated. A paper we distill uses it:
[Allcott, Montanari, Ozaltun & Tan](/wiki/papers/jf/2026/allcott-corporate-social-impact-2026/)
use Rystad for the oil production and operating expenses of the seven oil
supermajors across all of their oil fields worldwide (2018) when estimating the
consumer-surplus component of corporate social impact and the high impact per
dollar of revenue of oil producers under inelastic global demand.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Rystad Energy (UCube and related upstream data products).
- **Coverage:** global upstream oil and gas at the field and company level, with
  production, cost, and reserve estimates; some figures are modeled rather than
  reported.

## Access (when licensed)

- **Through a Rystad Energy subscription.** Data are accessed via Rystad's
  platform (UCube and related modules) with extracts or API access where
  entitled; the grain runs from individual field to operating company to
  country aggregate.
- **Company-by-field is the useful join.** The citing paper aggregates
  field-level production and operating expense up to each supermajor; the
  field-to-operator mapping is the key Rystad provides that public filings do
  not.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Many figures are modeled, not reported.** Rystad estimates field economics
  (costs, reserves, decline curves) from a proprietary model; they are
  estimates, not audited filings. Treat operating-cost and reserve numbers as
  vendor estimates and state that, as the citing paper's supply-elasticity
  argument rests on them.
- **Operator versus equity ownership of a field.** Production attributed to a
  company can be on an operated basis or a working-interest basis; the two
  differ for joint ventures and partial stakes. Confirm which attribution you
  pulled before summing a firm's output.
- **Vintage revisions.** Reserve and production estimates are revised as new
  information arrives, so the same field-year can change between data vintages.
  Pin the extract date; a re-pull will not reproduce an earlier number exactly.
- **Coverage and quality vary by region and operator.** Disclosure-poor
  jurisdictions and small private operators are modeled with less precision than
  listed majors. Country and company aggregates inherit that uneven precision.
- **Unit and currency conventions.** Volumes (barrels of oil equivalent versus
  oil only), cost units, and currency must be normalized before comparison; the
  oil-only restriction the citing paper applies is a deliberate scoping choice,
  not the database default.

## Citation

Cite the vendor and product, e.g.: *Rystad Energy (UCube), accessed
YYYY-MM-DD.* State which module and grain (field, company, country) were used,
the extract vintage, and that production or cost figures are vendor estimates
where applicable.
