---
title: "FDIC failed-bank bidding and resolution records (restricted access)"
description: >-
  Bid-level records from FDIC bank-failure resolutions: bidder identities, bid
  terms, the FDIC's least-cost estimates, and loss-share claims. It is
  confidential FDIC data. This page documents what it is and the gotchas, but it
  was not exercised here.
sidebar:
  label: FDIC failed-bank bids
tags: [banks, bank-failures, resolution, fdic, data:fdic-failed-bank]
---

:::caution[Confidential FDIC data: not exercised here]
**This is confidential FDIC resolution data.** It is **not for sale and not
publicly downloadable**: it carries **no provenance badge** because there is no
access path we can run here. Researchers reach it only through an FDIC affiliation
or an approved restricted-data arrangement, inside a secure environment, with
output subject to disclosure review. The page documents what the collection is
and the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**The FDIC failed-bank bidding and resolution records** are the proprietary
bid-level files from how the FDIC resolves failed banks. When a bank fails, the
FDIC runs a Purchase and Assumption (P&A) auction; the records capture **bidder
identities, bid terms, the FDIC's internal least-cost estimates**, and subsequent
**loss-share** claims by the acquirer. Because some auctions produce near-tied
bids between acquirer types, the data supports close-bid quasi-random designs. A
paper we distill uses it:
[Johnston-Ross, Ma & Puri](/wiki/papers/jf/2025/johnston-ross-private-equity-financial-stability-2025/)
use the failed-bank bidding records (P&A bid values, acquirer identities, FDIC
least-cost estimates) for a close-bid design on private-equity acquirers, with the
loss-share records for claims by acquirer type, alongside public FDIC
[Call Reports](/wiki/datasets/call-reports/) and
[Summary of Deposits](/wiki/datasets/fdic-summary-of-deposits/).

- **Cost:** not for sale. Restricted-access confidential FDIC data.
- **Source:** the FDIC (resolution and receivership records).
- **Coverage:** resolved bank failures (concentrated in and after the 2008-2013
  wave), at the bid and transaction level.

## Access (restricted)

- **No public download.** The bid-level microdata is confidential and is not
  posted; the FDIC publishes only summary failure information openly.
- **Through an FDIC affiliation or approved program.** Access is limited to
  researchers at the FDIC or others granted entry to the restricted data, worked
  inside a secure environment with output subject to disclosure review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Bids are conditioned on the failure happening.** The sample is failed banks
  that went to resolution; selection into failure (and into receiving qualified
  bids) precedes the auction. The close-bid design addresses who wins, not who
  fails. Keep the two selection stages distinct.
- **Bidder eligibility is screened.** Not everyone can bid; the FDIC pre-qualifies
  bidders, so the bidder pool is selected, especially for non-bank or PE acquirers.
  Do not treat the bidder set as the universe of potential buyers.
- **Bid structures are not scalar.** A P&A bid bundles deposit premium, asset
  discounts, and loss-share terms; reducing it to one number discards the
  structure that determines the least-cost ranking. Use the FDIC's own least-cost
  comparison.
- **Loss-share claims realize over years.** Loss-share payments accrue well after
  resolution and depend on later asset performance; a snapshot understates
  eventual claims. Pin the as-of date.
- **Identifier joins to public data.** Linking to
  [Call Reports](/wiki/datasets/call-reports/) and other bank data needs the
  failed-bank identifier crosswalk; acquirers also change over time. Verify the
  link.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source, e.g.: *FDIC failed-bank bidding and resolution records,
confidential; accessed under restricted-data arrangement, YYYY-MM-DD.* State the
resolution window, the bid concept used, and the loss-share as-of date.
