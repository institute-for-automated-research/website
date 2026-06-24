---
title: "Trucost: firm-level environmental and carbon data (licensed)"
description: >-
  Trucost (S&P Global) is a firm-level environmental panel: scope 1, 2, and 3
  greenhouse-gas emissions, intensities, and other environmental metrics, with
  much of it modeled rather than disclosed. It is licensed: this page documents
  the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: Trucost
  order: 12
tags: [equities, esg, climate, licensed, panel-data, data:trucost]
---

:::caution[Licensed: not exercised here]
**Trucost is a licensed commercial dataset** (S&P Global), so it carries **no provenance badge**: the access path below was
**not** run in this session (no S&P credentials were available). The page
documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**Trucost** is a firm-level **environmental dataset** maintained by S&P Global.
Its most-used content is **greenhouse-gas emissions**: scope 1 (direct), scope 2
(purchased electricity), and scope 3 (value chain), reported in tonnes of CO2
equivalent (tCO2e) by fiscal year, alongside emission intensities (per revenue),
other pollutants, natural-capital costs, and fossil-fuel reserve exposure. It is
a common carbon-emissions source in climate-finance papers: used in, for example
[Zhang](/wiki/papers/jf/2025/zhang-carbon-returns-globe-2025/) for firm-level
annual scope 1 and 2 emissions with their actual release dates, and
[Pedersen](/wiki/papers/jf/2026/pedersen-carbon-pricing-green-finance-2026/) for
fiscal-year 2021 scope 1 and 2 emissions in a sustainable-discount-rate
calibration.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** S&P Global (Trucost; the environmental data line of S&P Global
  Sustainable1).
- **Coverage:** thousands of listed companies globally, with emissions and other
  environmental metrics by fiscal year; history back to roughly 2005 for the
  broadest panels.

## Access (when licensed)

- **S&P Global / Sustainable1.** Through S&P's data feeds, the S&P Capital IQ
  platform, or the Trucost data files, keyed on the S&P company identifier.
- **Possibly via a data vendor or library feed.** Some institutions reach
  Trucost through bundled S&P Global products; availability is not confirmed
  here, so check with your library before assuming a given path.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Most emissions are modeled, not disclosed.** A large share of firm-year
  emissions are estimated by Trucost's environmental model from sector and
  activity data, not taken from a company report. Disclosed and modeled values
  are mixed in the same field; if your design needs disclosed numbers, filter on
  the disclosure flag rather than treating every value as reported.
- **Fiscal-year emissions are released with a long lag.** Emissions for a fiscal
  year are published well after that year ends. Using a value as if it were
  known at fiscal-year close builds in look-ahead. Match on the actual data
  release date, not the fiscal year, for any return or pricing test.
- **Scope 3 is the noisiest.** Value-chain emissions depend on the most
  estimation and on boundary choices; treat scope 3 levels and changes with more
  caution than scope 1 and 2.
- **History gets restated.** As the model and disclosures are reworked, prior
  firm-years can be revised. Pin the data vintage and re-pull deliberately
  rather than mixing vintages.
- **Intensity denominators matter.** Emission intensity uses revenue (or another
  denominator) that itself changes with currency and restatements; state the
  denominator and the units so the number is reproducible.
- **Entity and identifier mapping is its own step.** Join on the S&P company
  identifier and confirm the parent/subsidiary and ticker mapping before
  merging with returns or fundamentals.

## Citation

Cite the product and vendor, e.g.: *Trucost environmental data, S&P Global;
data licensed and accessed YYYY-MM-DD.* State the data vintage, the emission
scope, the units (tCO2e), and whether values are disclosed or modeled.
