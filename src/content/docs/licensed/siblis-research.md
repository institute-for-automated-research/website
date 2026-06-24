---
title: "Siblis Research index-constituent data (licensed)"
description: >-
  Siblis Research sells historical index addition and deletion dates and
  constituent market values for the S&P 500, MidCap 400, SmallCap 600, and
  Nasdaq 100. It is licensed: this page documents the access path and the
  gotchas, but the data was not exercised here.
sidebar:
  label: Siblis Research
tags: [equity-indices, index-constituents, index-reconstitution, licensed, data:siblis-research]
---

:::caution[Licensed: not exercised here]
**Siblis Research data is a paid subscription product**, so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session. Treat it as unverified until someone exercises it
through a Siblis subscription. This is the honest grade under the institute's
Verified discipline.
:::

**Siblis Research** is a subscription data provider whose research-relevant
product is **historical index membership**: the dates on which a stock was added
to or deleted from the S&P 500, S&P MidCap 400, S&P SmallCap 600, and Nasdaq 100,
along with historical constituent market values and weights. Reconstructed index
event histories are the raw material for index-effect and demand-curve studies. A
paper we distill uses it:
[Greenwood & Sammon](/wiki/papers/jf/2025/greenwood-disappearing-index-effect-2025/)
take 736 S&P 500 additions and 731 deletions over 1980 to 2020 from Siblis
Research (plus MidCap 400, SmallCap, and Nasdaq 100 changes from 1995) when
documenting the disappearance of the index-inclusion effect.

- **Cost:** licensed, subscription. No free historical-constituent download.
- **Vendor:** Siblis Research.
- **Coverage:** addition / deletion dates and constituent market values for the
  major S&P and Nasdaq indices; S&P 500 history back to 1980 in the citing paper,
  MidCap / SmallCap / Nasdaq from 1995.

## Access (when licensed)

- **Through a Siblis Research subscription.** The historical constituent and
  index-change files are bought from Siblis directly (spreadsheet / download
  products by index).
- **Two distinct products.** The change history (dates of additions and
  deletions) and the point-in-time constituent market values are different
  extracts; an index-event study needs the dated change list, while a weighting or
  demand-shock measure needs the constituent values.
- **No credential is run here.** Keep any account credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Announcement date versus effective date.** Index changes have an announcement
  date and a (later) effective date; the abnormal return accrues between them, so
  using the wrong date misplaces the event window. The citing paper anchors its
  baseline window to the trading day before announcement through the day after the
  effective date. Confirm which date each field is.
- **Coverage starts later for the smaller indices.** S&P 500 history reaches back
  to 1980, but MidCap / SmallCap / Nasdaq histories begin around 1995, and
  announcement dates are not available for some sub-indices (events are dated off
  the effective date). Do not assume uniform history across indices.
- **Migrations are not plain additions.** A stock moving from the MidCap 400 to
  the S&P 500 is simultaneously a deletion and an addition; treating it as a clean
  addition double-counts the demand shock (the migration mechanism is central to
  the citing paper). Flag migrations explicitly.
- **Pre-1990 gaps need an outside source.** Early S&P 500 announcement dates are
  incomplete in the historical record; the citing paper fills pre-1990
  announcements from Barberis, Shleifer & Wurgler (2005). Plan for a supplemental
  source if your sample reaches back that far.
- **Identifier matching to CRSP / Compustat.** Constituents must be matched to
  CRSP permnos for returns; the join has known mismatches across ticker reuse and
  reorganizations. Verify the link.

## Citation

Cite the vendor, e.g.: *Siblis Research index-constituent data, accessed
YYYY-MM-DD.* State the index, the date field used (announcement versus effective),
and the constituent-value vintage.
