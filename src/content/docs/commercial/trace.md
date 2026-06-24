---
title: "FINRA TRACE: corporate bond transactions (licensed)"
description: >-
  TRACE (Trade Reporting and Compliance Engine) is FINRA's facility for
  secondary-market transaction reporting in US fixed-income securities,
  primarily corporate bonds. The version used by most academic researchers is the historical
  Enhanced TRACE file, reached for most researchers through WRDS. It is
  licensed: this page documents the access path and the gotchas, and the
  keystone query was exercised through a licensed WRDS session.
sidebar:
  label: TRACE
  order: 13
tags: [fixed-income, corporate-bonds, licensed, transaction-data, wrds, data:trace]
verified:
  date: 2026-06-09
  with: live Enhanced TRACE query (trace.trace_enhanced) through a licensed WRDS session
  access: licensed
---

:::note[Access confirmed via a licensed WRDS session]
The keystone query `SELECT cusip_id, trd_exctn_dt FROM trace.trace_enhanced LIMIT 1` was run against `trace.trace_enhanced` through a licensed WRDS session on 2026-06-09, so this page carries the amber "Access confirmed (licensed)" badge. Reproducing it still requires your own WRDS account and your institution's TRACE entitlement; the data is licensed, not open.
:::

**TRACE** (Trade Reporting and Compliance Engine) is FINRA's facility into
which dealers report secondary-market transactions in eligible US fixed-income
securities: primarily corporate bonds, with agency and securitized products
added in later phases. The version used by most academic researchers is the historical
Enhanced TRACE file, which carries fuller fields and uncapped trade sizes
compared with the free public dissemination feed. It is a common source in
fixed-income research: used in, for example,
[Nozawa & Tsoy](/wiki/papers/jf/2025/nozawa-counter-markets-nonstandardized-assets-2025/)
for corporate bond transaction prices and volumes 2002-2020 (plus a TRACE
agency-MBS subset used as a liquidity placebo), and
[Li & Yu](/wiki/papers/jf/2026/li-investor-composition-corporate-bond-liquidity-2026/)
for corporate bond liquidity and investor composition.

- **Cost:** Enhanced TRACE is licensed (via WRDS); the real-time dissemination
  feed is free but volume-capped (not a substitute for the academic history).
- **Vendor / originator:** FINRA. Distributed to academics via WRDS.
- **Coverage:** secondary-market corporate bond transactions reported to FINRA;
  coverage phased in from July 2002 through 2005, so the early period is
  partial. Agency MBS and securitized-product TRACE are separate, later-phase
  files.

## Access (when licensed)

- **Through WRDS.** The common academic path is the Enhanced TRACE tables on
  WRDS; see [WRDS / CRSP / Compustat](/wiki/commercial/wrds/) for the connection
  recipe. Credentials are required.
- **Directly from FINRA.** FINRA publishes a real-time public dissemination
  feed at no cost, but it masks large trade sizes (e.g., as "5MM+" or "1MM+"
  indicators) and does not carry the full historical depth of the Enhanced
  file. Use it only if volume-capping is acceptable for your purpose.
- Keep credentials in `.env`; never hard-code them.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect when working with the data.

- **Do not mix the free dissemination feed with the Enhanced file.** The
  public feed caps reported trade sizes (large trades are flagged as "5MM+" or
  "1MM+" rather than showing the actual notional). Merging it with Enhanced
  TRACE records, or treating it as a substitute for the historical Enhanced
  file, produces silent volume errors.
- **TRACE requires cleaning before use.** The raw file contains cancellations,
  corrections, reversals, and double-counted interdealer and agency legs. These
  must be filtered out before computing prices or volumes. The Dick-Nielsen
  cleaning procedure is the common reference in the literature; document which
  version you apply.
- **Coverage phased in over 2002-2005.** Phase 1 (July 2002) covered only
  investment-grade bonds above a size threshold. Phases 2 and 3 expanded
  coverage through 2005. Research samples starting before 2005 have partial
  bond-market coverage; control or restrict accordingly.
- **Prices are dealer-reported transaction prices, not quotes.** They reflect
  executed trades rather than bid-ask midpoints. Small-trade prices are
  noisier; large trades are subject to time delays in the dissemination feed.
- **Linking to bond characteristics requires Mergent FISD.** TRACE records
  CUSIPs but does not carry issue-level characteristics (coupon, maturity,
  seniority, rating). Merging those fields requires a separate link to Mergent
  FISD at the CUSIP level; treat this as an explicit join step and report match
  rates.
- **Agency MBS and securitized-product TRACE are separate files.** They were
  added in later phases, have different field structures, and cover different
  instrument types. Do not assume the corporate bond cleaning procedure applies
  to them without checking.

## Citation

Cite FINRA TRACE (Enhanced TRACE via WRDS), stating: the version (Enhanced vs.
dissemination feed), the data vintage (access date or coverage window), the
cleaning procedure applied (e.g., Dick-Nielsen with version reference), and the
FISD link used for bond characteristics. Example: *FINRA TRACE Enhanced
file, accessed via WRDS, [coverage dates]; cleaned following Dick-Nielsen
([year]); bond characteristics linked from Mergent FISD via CUSIP.*
