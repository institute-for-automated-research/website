---
title: "RepRisk: ESG risk-incident data (licensed)"
description: >-
  RepRisk is a daily firm-level feed of negative environmental, social, and
  governance incidents sourced from media and stakeholder reports, scored for
  severity, reach, and novelty across 28 issue categories. It is licensed: this
  page documents the access path and the gotchas; the access path was exercised
  through a licensed WRDS session.
sidebar:
  label: RepRisk
  order: 11
tags: [equities, esg, news, licensed, event-data, data:reprisk]
verified:
  date: 2026-06-09
  with: live RepRisk query (reprisk.pm_company_identifiers) through a licensed WRDS session
  access: licensed
---

:::note[Access confirmed via a licensed WRDS session]
The keystone query `SELECT * FROM reprisk.pm_company_identifiers LIMIT 1` was run against the live dataset through a licensed WRDS session on 2026-06-09, so this page carries the amber "Access confirmed (licensed)" badge. Reproducing it still requires the reader's own WRDS account and the institution's RepRisk entitlement (licensed, not open).
:::

**RepRisk** is an **ESG risk-incident** database. Rather than a static rating, it
records discrete **negative incidents** at the firm level, captured daily from
media, NGO, government, and other stakeholder sources, classified into 28 ESG
issue categories and scored for **severity**, **reach** (source breadth), and
**novelty**. It also publishes the firm-level RepRisk Index (RRI), a running
measure built from the incident flow. Coverage starts in 2007. It is used in, for
example
[Derrien, Kruger, Landier & Yao](/wiki/papers/jf/2025/derrien-esg-news-future-cash-2025/)
as the main independent variable (daily negative ESG incidents, 2007 to 2019),
[Duchin, Gao & Xu](/wiki/papers/jf/2025/duchin-sustainability-greenwashing-evidence-asset-2025/)
for ESG risk incidents, and
[Starks, Venkat & Zhu](/wiki/papers/jf/2026/starks-esg-profiles-investor-horizons-2026/)
for negative environmental and social incident data.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** RepRisk AG.
- **Coverage:** firm-level incidents and RRI from 2007, global, across listed
  and unlisted companies, mapped to a RepRisk company identifier.

## Access (when licensed)

- **Direct from RepRisk.** Through their data feed, API, or a cloud data share,
  keyed on the RepRisk company identifier.
- **Via WRDS.** RepRisk is available on WRDS; the keystone query above runs
  against `reprisk.pm_company_identifiers` through a licensed WRDS session. Some
  institutions also reach it through a direct RepRisk feed or bundled products.
  Check your library's entitlement.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented.

- **It is an incident flow, not a rating, and only negative.** RepRisk records
  negative events; there are no positive offsets. A firm with no recorded
  incidents is not certified clean, only unmentioned. Do not read a zero as good
  ESG performance.
- **Media-attention bias confounds with size and visibility.** Incidents are
  captured from public sources, so larger, more-covered, English-language, and
  US/European firms accumulate more incidents mechanically. Control for media
  coverage and firm size before reading incident counts as risk.
- **Severity, reach, and novelty are RepRisk's own scores.** These are vendor
  classifications, not observed outcomes; state which fields you use and how you
  aggregate daily incidents to your event window.
- **The RRI is a derived, decaying index.** The RepRisk Index is constructed
  from the incident flow with its own decay and weighting; it is not the raw
  count. Decide deliberately whether your design wants raw incidents or the RRI.
- **History gets restated and methodology evolves.** Categories and scoring have
  been refined over time, and the back-catalogue can be reprocessed. Pin the
  data vintage and re-pull deliberately.
- **Entity mapping is its own step.** Join on the RepRisk company identifier and
  confirm the parent/subsidiary and ticker mapping before merging with returns
  or fundamentals.

## Citation

Cite the product and vendor, e.g.: *RepRisk ESG risk data, RepRisk AG; data
licensed and accessed YYYY-MM-DD.* State the data vintage, whether you use raw
incidents or the RRI, and the issue categories and scores included.
