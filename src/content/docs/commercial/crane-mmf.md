---
title: "Crane Data: money market fund holdings and assets (licensed)"
description: >-
  Crane Data LLC is a money-market-fund (MMF) data service covering monthly
  fund-level total net assets, yields, and portfolio holdings (instrument type,
  issuer, maturity) for US money-market funds. It is licensed: this page
  documents the access path and the gotchas, but the data was not exercised
  here.
sidebar:
  label: Crane Data
  order: 22
tags: [money-market-funds, licensed, fund-data, data:crane-mmf]
---

:::caution[Licensed: not exercised here]
**Crane Data is a licensed commercial dataset** (Crane Data LLC), so it carries **no provenance badge**: the access path
below was **not** run in this session (no Crane Data subscription was
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Crane Data** is a **money-market-fund (MMF)** data service, operated by
Crane Data LLC. It provides monthly fund-level total net assets (AUM), yields,
and portfolio holdings (instrument type, issuer, maturity), with the
portfolio-weight detail needed to study fund composition (e.g. Treasury-bill
and Fed reverse-repo / RRP weights). It is a source in MMF and short-term
markets research: used in, for example
[Siriwardane, Sunderam & Wallen](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/)
(MMF total net assets and holdings for the money-fund-reform analysis,
cross-checked with SEC Form N-MFP), and
[Stein & Wallen](/wiki/papers/jf/2025/stein-imperfect-intermediation-money-like-2025/)
(monthly money-fund holdings and AUM, T-bill and RRP portfolio weights,
fund-level elasticity estimation, and an AUM decomposition).

- **Cost:** licensed, subscription.
- **Vendor:** Crane Data LLC.
- **Coverage:** US money-market funds, monthly, fund and holding level. The
  free public counterpart is SEC Form N-MFP (the monthly MMF portfolio filing
  on EDGAR), which carries much of the same holdings detail but needs assembly.

## Access (when licensed)

- **Directly from Crane Data LLC.** Data are delivered by subscription via file
  delivery or downloads. License required; contact Crane Data LLC for terms.
- **Free alternative.** SEC Form N-MFP filings are available on EDGAR and cover
  similar holdings detail. The trade-off is more processing: filings must be
  fetched, parsed, and assembled into a panel before use.
- Credentials and subscription details should be stored in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Commercial repackaging of regulatory filings.** Crane Data cleans and
  repackages fund filings; convenient, but the underlying source for holdings
  is the same N-MFP filings on EDGAR. Cross-check against EDGAR when accuracy
  matters for a specific holding or vintage.
- **Fund vs. share-class structure.** AUM and yields are reported at the
  share-class and fund levels. Decide the unit of analysis before aggregating
  and avoid double-counting share classes when computing fund-level totals.
- **Monthly snapshots only.** Holdings are month-end snapshots; intra-month
  dynamics and same-day repo turnover are not captured.
- **Proprietary instrument and issuer taxonomy.** Crane's instrument and issuer
  classifications are their own taxonomy. Map them explicitly before merging
  with other sources; do not assume they align with EDGAR N-MFP field codes or
  other data vendors.
- **Fund identity changes over time.** Fund-name and identifier changes across
  mergers and liquidations break a naive panel. Build a crosswalk before
  treating the fund identifier as a stable entity key.
- **Coverage is not a regulatory census.** Crane tracks a broad universe of US
  MMFs, but it is not identical to the full SEC-registered population the way
  N-MFP is. Funds near launch or wind-down may appear or disappear differently
  than in EDGAR.

## Citation

Cite Crane Data LLC money market fund data, stating the vintage (date range
pulled), the unit of observation (fund level or share-class level), and whether
holdings were cross-checked against SEC Form N-MFP filings on EDGAR.
