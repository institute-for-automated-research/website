---
title: "Bureau van Dijk Zephyr: M&A and deals (licensed)"
description: >-
  Bureau van Dijk Zephyr (Moody's) is a global database of M&A, IPO,
  private-equity, and venture deals, linkable to the Orbis firm universe. It is
  licensed: this page documents the access path and the gotchas, but the data was
  not exercised here.
sidebar:
  label: BvD Zephyr
tags: [mergers-acquisitions, deals, firm-ownership, licensed, data:bureau-van-dijk-zephyr]
---

:::caution[Licensed: not exercised here]
**Bureau van Dijk Zephyr is a paid licensed product** (Moody's / Bureau van
Dijk), so it sits in the *Licensed* tier and carries **no provenance badge**: the
access path below was **not** run in this session. Treat it as unverified until
someone exercises it through a licensed BvD account. This is the honest grade
under the institute's Verified discipline.
:::

**Bureau van Dijk Zephyr** is a global deals database: M&A, IPOs, private-equity
and venture rounds, joint ventures, and buybacks, with deal value, dates, stakes,
advisers, and acquirer / target identities. Its advantage over other deal sources
is that the parties link directly to the **Orbis / Amadeus** firm universe (see
[Orbis (BvD)](/wiki/licensed/orbis-bvd/)), so deals join to private-firm
financials and ownership. A paper we distill uses it:
[Beaumont, Hebert & Lyonnet](/wiki/papers/rfs/2025/beaumont-build-buy-human-capital-2025/)
use Zephyr M&A data (7,165 deals, 4,139 acquirers), matched to French
administrative records and combined with [SDC Platinum](/wiki/licensed/sdc-platinum/),
to identify "buy" entries when studying whether firms acquire human capital
rather than build it.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Moody's / Bureau van Dijk.
- **Coverage:** worldwide deals (M&A, IPO, PE/VC, JVs), with the deepest coverage
  for European private firms via the Orbis link; smaller / private deals are
  better covered than in U.S.-centric deal databases.

## Access (when licensed)

- **Through a Bureau van Dijk subscription.** Zephyr is reached via the BvD /
  Moody's platform (web interface, batch download, or the Orbis API where
  entitled). Some institutions license it through a research arrangement.
- **Keyed by deal, linkable to firm IDs.** A deal record carries the parties'
  BvD IDs, so an extract joins to Orbis / Amadeus firm financials and ownership;
  this firm link is the reason to prefer Zephyr.
- Terminal or API credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage and completeness vary by region and era.** Zephyr is strongest for
  recent European deals and thinner for older or non-European transactions; deal
  counts are not a census, so do not read absence as no-deal. The citing paper
  uses SDC Platinum as its primary M&A source and supplements it with Zephyr to
  improve coverage.
- **Deal-status and double-counting.** A single transaction can appear as
  announced, then completed, then amended; counting raw deal rows overstates
  activity. Filter on completed status and dedupe by deal ID.
- **Stake and value fields are often missing.** Deal value and the acquired stake
  are unpopulated for many private deals; conditioning on non-missing value
  silently selects larger, public-side deals. State how you handled missing
  values.
- **Identifier linking across vintages.** The BvD ID is stable within a vintage
  but firms get merged / re-IDed across Orbis releases; a deal-to-firm join built
  on one vintage can break on another. Pin the vintage.
- **Overlap with SDC and other deal sources.** When combining Zephyr with SDC
  Platinum, the same deal appears in both with different keys and slightly
  different dates / values; matching requires party names plus dates, not a shared
  ID. Document the merge and deduplication.

## Citation

Cite the vendor and product, e.g.: *Bureau van Dijk Zephyr (Moody's), accessed
YYYY-MM-DD.* State the deal types and region, the status filter, the date range,
and whether deals were linked to Orbis firm data.
