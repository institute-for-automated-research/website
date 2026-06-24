---
title: "NYSE TAQ: trade and quote microstructure data (licensed)"
description: >-
  NYSE TAQ (Trade and Quote) is a tick-level database of intraday trades and
  quotes for all US-listed equities on the consolidated tape, covering two
  lineages: Monthly TAQ (1993 onward) and Daily TAQ (millisecond to nanosecond
  stamps, 2003/2014+), reached by most academics through WRDS. It is licensed:
  the access path was exercised through a licensed WRDS session.
sidebar:
  label: TAQ
  order: 15
tags: [equities, market-microstructure, licensed, event-data, wrds, data:taq]
verified:
  date: 2026-06-09
  with: live TAQ NBBO query (taqm_2020.complete_nbbo_2020) through a licensed WRDS session
  access: licensed
---

:::note[Access confirmed via a licensed WRDS session]
**NYSE TAQ is a licensed commercial dataset** (NYSE / ICE Data Services,
reached for most academics through
[WRDS](/wiki/commercial/wrds/)). The keystone query `SELECT * FROM taqm_2020.complete_nbbo_2020 LIMIT 1` was run against a live WRDS Postgres session on 2026-06-09 and returned a real row, so this page carries the amber "Access confirmed (licensed)" badge. Reproducing it requires the reader's own WRDS account and the institution's TAQ entitlement.
:::

**NYSE TAQ** is a **tick-level trade and quote** database covering all US-listed
equities on the consolidated tape. It records every trade (price, size,
timestamp, exchange code, condition flags) and every quote (bid, ask, size,
exchange) reported to the consolidated tape. It is a common data source for
market-microstructure research: used in, for example
[Brogaard, Ringgenberg & Roesch](/wiki/papers/jf/2025/brogaard-floor-trading-matter-2025/)
for a study of whether floor trading matters in market microstructure, and
[Schwarz, Barber, Huang, Jorion & Odean](/wiki/papers/jf/2025/schwarz-actual-retail-price-equity-2025/)
for execution-quality analysis in the actual retail price of equity.

- **Cost:** licensed, subscription. No free tier. Most academics reach it
  through [WRDS](/wiki/commercial/wrds/).
- **Vendor:** NYSE (ICE Data Services).
- **Coverage:** all US-listed equities, consolidated tape, intraday (tick level);
  Monthly TAQ from 1993 onward; Daily TAQ from 2003 onward (millisecond stamps),
  with nanosecond resolution introduced in 2014.

## Access (when licensed)

- **Through WRDS.** The common academic path: WRDS exposes both the Monthly TAQ
  and Daily TAQ tables. WRDS also provides the Intraday Indicators product
  (WRDS-computed microstructure measures such as effective spreads, price
  impact, and realized spreads), so many research designs do not require
  processing raw ticks at all; use the derived measures where they suffice.
- **Directly from NYSE / ICE Data Services.** Available through NYSE's data
  licensing programs.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect when working with the data.

- **Raw Daily TAQ is enormous.** Daily TAQ runs to terabytes per year; do not
  attempt a naive full pull. Use WRDS server-side queries (SAS or Python with
  WRDS Cloud filters), push filtering and aggregation to the server, or use the
  WRDS Intraday Indicators for pre-aggregated measures.
- **Trade-signing rules must match the era.** Timestamp alignment between trades
  and quotes changed over the sample period. The original Lee-Ready rule used a
  5-second lookback; later literature moved to a contemporaneous-quote convention
  once timestamps tightened. The sign-of-trade algorithm must be chosen to match
  the period; mixing conventions introduces systematic errors in effective spread
  and order-flow estimates.
- **The data requires cleaning before use.** Key steps: drop cancelled and
  corrected trades (condition codes), exclude opening and closing auction prints,
  filter out-of-sequence and late-reported trades, and apply standard quote
  filters (zero or locked/crossed quotes). Failing to clean produces biased
  spread and impact estimates.
- **Monthly TAQ and Daily TAQ are not the same product.** They differ in field
  names, timestamp resolution, and symbology conventions. Code written for one
  does not transfer directly to the other; state which product your pull uses.
- **Consolidated tape mixes venues.** TAQ records trades and quotes from all
  reporting venues (NYSE, Nasdaq, regional exchanges, dark pools). Venue-level
  inference requires the exchange code; studies of a specific venue must filter
  on it, not take the full tape.
- **Symbology and the CRSP link require care.** TAQ identifies securities by
  symbol (which can be reused across firms over time), not CUSIP or PERMNO.
  Linking to CRSP or Compustat requires the TAQ-CRSP linking table and attention
  to date ranges; symbol reuse and symbol changes cause silent mismatches if the
  link is applied without effective dates.

## Citation

Cite the specific product and vendor, e.g.: *NYSE TAQ [Monthly TAQ / Daily TAQ],
NYSE / ICE Data Services, accessed via WRDS; data licensed and accessed
YYYY-MM-DD.* State which product (Monthly or Daily), the timestamp resolution
used, the trade-signing rule applied, and the cleaning criteria (condition codes
excluded, auction prints, quote filters).
