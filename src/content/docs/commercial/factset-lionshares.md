---
title: "FactSet LionShares: institutional ownership (licensed)"
description: >-
  FactSet LionShares (FactSet Ownership) is a commercial source for global
  institutional and fund holdings, with institution classification. It
  is a paid subscription: this page documents the access path and the gotchas
  that bite ownership pipelines, but the data was not exercised here.
sidebar:
  label: FactSet LionShares
  order: 3
tags: [equities, institutional-investors, licensed, panel-data, data:factset-lionshares]
---

:::caution[Licensed: not exercised here]
**FactSet LionShares is a paid subscription**, so it sits in the *Licensed*
tier and carries **no provenance badge**: the access path below was **not**
run in this session (no FactSet credentials were available). The page
documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade
under the institute's Verified discipline.
:::

**FactSet LionShares** (now delivered as **FactSet Ownership**) is a
commercial source for **institutional and fund equity holdings**.
It assembles holdings from regulatory filings (US 13-F and equivalents) and
fund disclosures into a position-level panel, and **classifies each
holder** by type (mutual fund, hedge fund, pension, bank, insurance company,
and so on). The
[Kwan, Liu & Matthies](/wiki/papers/jf/2026/kwan-liu-matthies-2026/) attention paper
uses LionShares for institutional holdings and institution classification,
which it needs to separate hedge funds from other investor types.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** FactSet.
- **Coverage:** global institutional and fund holdings (broader than US-only
  13-F sources, which is part of the point), with holder-type classification.

## Access (when licensed)

- **Direct from FactSet.** Through the FactSet workstation, the holdings/
  ownership data feed, or the API, using FactSet entity identifiers.
- **Via WRDS.** Subscribing institutions can reach the FactSet ownership
  data through [WRDS](/wiki/commercial/wrds/); query it like any other WRDS
  library and filter on date and security before pulling.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Holdings are stale between report dates.** Positions are observed at
  disclosure dates (quarterly for US 13-F, less often for many non-US
  holders). Between dates a position is carried forward, not live. Date your
  panel to actual report dates and do not infer intra-quarter trading.
- **The 13-F lag and omissions.** US 13-F positions are reported up to 45 days
  after quarter-end, and confidential-treatment requests let filers omit
  positions. The holdings you see lag reality and can be incomplete.
- **Two levels, institution and fund: do not double count.** The same assets
  can appear at the managing-institution level and the individual-fund level.
  Pick the level your analysis needs and aggregate consistently.
- **Holder classification is a mapping, with edge cases.** The institution
  type (hedge fund, mutual fund, pension, etc.) is FactSet's classification;
  multi-strategy and changing managers blur the lines. Inspect the type field
  rather than assuming a clean partition.
- **Identifiers are FactSet's own.** Holders and securities use FactSet entity
  IDs; securities also carry CUSIP/ISIN/SEDOL. Build an explicit crosswalk to
  PERMNO/CIK rather than assuming a shared key.
- **International coverage is less frequent and less complete** than US 13-F,
  because non-US disclosure regimes differ; do not treat a global panel as
  uniformly dense.

## Citation

Cite the product and vendor, e.g.: *FactSet Ownership (LionShares), FactSet
Research Systems; data licensed and accessed YYYY-MM-DD.* State the holding
level (institution vs fund) and the report dates used.
