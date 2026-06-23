---
title: "FICC GCF Repo Service data (dealer-level, restricted access)"
description: >-
  Dealer-level daily interdealer general-collateral repo and reverse-repo
  activity by asset class from the FICC GCF Repo Service, licensed through the
  New York Fed. It is confidential. This page documents what it is and the
  gotchas, but it was not exercised here.
sidebar:
  label: FICC GCF repo
tags: [repo, dealers, money-markets, post-trade, data:ficc-gcf-repo]
---

:::caution[Confidential data: not exercised here]
**This is confidential FICC repo data.** It is **not for sale and not publicly
downloadable**: it carries **no provenance badge** because there is no access
path we can run here. Researchers obtained dealer-level GCF data under a
restricted licence through the Federal Reserve Bank of New York. The page
documents what the data is and the gotchas; treat it as unverified. This is the
honest grade under the institute's Verified discipline.
:::

**FICC GCF Repo Service data** is the dealer-level record of the **General
Collateral Finance (GCF) repo** segment: an interdealer, blind-brokered,
general-collateral repo market cleared by the Fixed Income Clearing Corporation
(FICC, part of DTCC). The data gives daily interdealer repo and reverse-repo
amounts by asset class at the dealer level, a view of the interdealer GC segment
that the published aggregate series does not resolve. A paper we distill uses it:
[Copeland & Martin](/wiki/papers/jf/2025/copeland-repo-financial-crisis-2025/)
use the dealer-level FICC GCF data for interdealer GC repo and reverse repo by
asset class, alongside [FR 2004C](/wiki/datasets/fr2004c/) primary-dealer
positions, to study the repo market over the financial crisis.

- **Cost:** not for sale. Restricted-access confidential data, licensed via the
  FRBNY.
- **Source:** DTCC / FICC (the GCF Repo Service), reached through the Federal
  Reserve Bank of New York under restricted terms.
- **Coverage:** the interdealer GCF (general-collateral) repo segment by asset
  class, daily, at the dealer level; it is one segment of the broader repo market.

## Access (restricted)

- **No public download.** The dealer-level data is confidential; only aggregate
  GCF statistics are public.
- **Through a restricted FRBNY arrangement.** Access to the dealer-level data is
  licensed through the New York Fed under confidential terms; there is no standing
  way for a third party to reach it.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **GCF is one segment, not the whole repo market.** The repo market has tri-party,
  bilateral/DVP, and GCF segments; GCF is the interdealer general-collateral slice.
  Do not read GCF activity as total repo. Combine segments deliberately.
- **General collateral, not specific securities.** GCF trades general-collateral
  baskets by asset class, not individual CUSIPs; you cannot identify a specific
  security's repo rate from it. Match the question to the GC level.
- **Blind-brokered and netted through FICC.** Trades are intermediated and novated
  to FICC as central counterparty; dealer-level positions reflect that netting, so
  gross bilateral exposure is not directly visible. Account for central clearing.
- **Asset-class definitions and segment changes.** The GCF product and its
  asset-class buckets have changed over time (and interact with tri-party reform);
  a series across the change needs reconciliation. Read the definitions for your
  window.
- **Dealer identity and entry/exit.** The set of GCF participants changes,
  especially around 2008; dealer identifiers must be tracked across mergers and
  exits. Verify the dealer roster.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared or re-pulled by others. Plan for non-reproducibility of the raw inputs.

## Citation

Cite the source and arrangement, e.g.: *FICC GCF Repo Service data (DTCC/FICC),
confidential; licensed via the Federal Reserve Bank of New York, YYYY-MM-DD.*
State the asset class, the sample window, and that it is the interdealer GCF
segment only.
