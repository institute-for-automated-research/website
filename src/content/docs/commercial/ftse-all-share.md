---
title: "FTSE All-Share index constituents and returns (licensed)"
description: >-
  FTSE All-Share (FTSE Russell) is the standard investable-universe index for UK
  equities: membership, market capitalisation, and returns. It is licensed: this
  page documents the access path and the gotchas, but the data was not exercised
  here.
sidebar:
  label: FTSE All-Share
tags: [equity-indices, uk-equities, index-constituents, licensed, data:ftse-all-share]
---

:::caution[Licensed: not exercised here]
**FTSE All-Share index data is a paid licensed product** (FTSE Russell), so it carries **no provenance badge**: the access path
below was **not** run in this session. Treat it as unverified until someone
exercises it through a licensed FTSE Russell feed or a redistributor. This is the
honest grade under the institute's Verified discipline.
:::

**The FTSE All-Share** is the headline broad UK equity index, the union of the
FTSE 100, FTSE 250, and FTSE SmallCap, and it serves as the **investable
universe** for most UK equity research: index membership, free-float market
capitalisation, and daily total returns. A paper we distill uses it:
[Becht, Franks & Wagner](/wiki/papers/jf/2026/becht-private-meetings-portfolio-firms-2026/)
use the FTSE All-Share as the eligible-stock universe (the index held between
roughly 353 and 703 firms over their 2007 to 2015 sample), taking market
capitalisation and daily returns as controls when studying private meetings
between an active asset manager and its UK portfolio firms.

- **Cost:** licensed, subscription. No free download of historical constituents.
- **Vendor:** FTSE Russell (part of LSEG); often reached through redistributors
  such as [Datastream](/wiki/commercial/datastream/) or
  [WRDS](/wiki/commercial/wrds/).
- **Coverage:** UK-listed equities meeting the FTSE size and liquidity rules, with
  membership, market cap, and returns; long daily history.

## Access (when licensed)

- **Through FTSE Russell or a redistributor.** Membership and index returns come
  from a FTSE Russell licence directly, or via Datastream / Refinitiv / WRDS where
  the institution carries the feed. Check which route is available.
- **Keyed by security and date.** A point-in-time constituent extract gives the
  membership set and free-float market cap on each date; pair with the security's
  return series.
- Terminal or API credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Use point-in-time membership, not today's list.** Constituents change at
  quarterly reviews and via fast-entry / corporate-action rules; reconstructing
  the universe from the current membership induces survivorship and look-ahead
  bias. The citing paper's universe swings from roughly 353 to 703 firms over the
  sample for exactly this reason. Pull the historical constituent set.
- **Free-float weighting, not full market cap.** FTSE weights by investable free
  float, so the index market cap differs from full shares-outstanding market cap;
  using the wrong one misweights any value-weighted measure. Match the cap concept
  to the question.
- **Price versus total return.** The price index and the total-return index differ
  by reinvested dividends; performance and event-study work need the total-return
  series. State which you used.
- **Identifier mapping for cross-data joins.** Linking FTSE constituents to
  accounting or holdings data requires mapping SEDOL / ISIN to the other source's
  identifiers across listing changes and dual lines; the join has known
  mismatches. Verify it.
- **Overlap with the sub-indices.** The All-Share is the union of FTSE 100 / 250 /
  SmallCap; double-counting or gaps appear if you splice the sub-indices instead
  of taking the All-Share membership directly. Use the All-Share list.

## Citation

Cite the index provider, e.g.: *FTSE All-Share Index (FTSE Russell / LSEG),
accessed YYYY-MM-DD.* State whether membership, market cap, or returns were used,
the cap concept (free-float versus full), and the point-in-time date range.
