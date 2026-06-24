---
title: "Bloomberg: terminal market data (licensed)"
description: >-
  Bloomberg (Bloomberg L.P.) is a market-data terminal and data-feed service
  covering spot and forward FX, money-market and OIS rates, futures, government
  and corporate bond yields, inflation swaps, equities, and derived analytics,
  retrieved by Bloomberg ticker and field. It is licensed: this page documents
  the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: Bloomberg
  order: 20
tags: [markets, fixed-income, licensed, data:bloomberg]
---

:::caution[Licensed: not exercised here]
**Bloomberg is a licensed commercial dataset** (Bloomberg L.P.), so it sits in
the *Licensed* tier and carries **no provenance badge**: the access path below
was **not** run in this session (no Bloomberg terminal credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Bloomberg** is a market-data terminal and data-feed service operated by
Bloomberg L.P. It covers spot and forward FX, money-market and OIS rates,
futures, government and corporate bond yields, inflation swaps and
inflation-linked-swap rates, equities, and derived analytics, retrieved by
Bloomberg ticker and field mnemonic. It is a common source in asset-pricing and
fixed-income research: used in, for example
[Siriwardane, Sunderam & Wallen](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/)
(spot rates, FX forwards, OIS rates, futures, Treasury yields, and inflation
swaps used to build 32 arbitrage spreads), and
[Dittmar, Hsu, Roussellet & Simasek](/wiki/papers/jf/2026/dittmar-default-risk-sovereign-bonds-2026/)
(inflation-linked-swap zero-coupon rates and OIS rates as model estimation
targets).

- **Cost:** licensed, per-terminal subscription. Data access is tied to
  terminal entitlements. No free tier.
- **Vendor:** Bloomberg L.P.
- **Coverage:** cross-asset global market data and reference data, real-time
  and historical.

## Access (when licensed)

- **Bloomberg Terminal.** The primary interface; data is keyed on Bloomberg
  tickers and field mnemonics (e.g. `PX_LAST`, `YLD_YTM_MID`).
- **Excel add-in (BDP/BDH functions).** Point-and-click pulls from within
  Excel using the same ticker/field syntax.
- **blpapi (the official Bloomberg API).** Low-level C++/Java/Python/other
  interface for programmatic pulls; requires an entitled terminal session or
  Bloomberg server-side licence.
- **xbbg or pdblp (Python wrappers).** Third-party wrappers over blpapi for
  Pandas-friendly pulls; still require an active blpapi session and entitlements.
- **Bloomberg Anywhere.** Remote access via browser or app; same entitlements
  apply.
- Credentials (terminal login) are required for all paths. Keep them out of
  version-controlled files.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Redistribution is contractually restricted.** Data is entitled per terminal
  and per user; you generally may not republish or share raw Bloomberg series.
  Reproducibility therefore relies on documenting exact tickers and fields
  rather than sharing the data itself.
- **History can be revised.** Pulls are point-in-time and Bloomberg can
  restate history, so re-pulling later can return different values for the same
  ticker/date. Record the pull date and, where possible, the data vintage.
  Rate-limited daily download caps also apply.
- **Ticker and field conventions are Bloomberg-specific and change.** The
  distinction between yield and price fields, generic versus specific futures
  contract tickers, and roll conventions for futures are easy to mis-state.
  Document the exact field mnemonic (e.g. `YLD_YTM_MID` versus `PX_LAST`)
  and the exact ticker string used.
- **Composite and evaluated quotes differ from transaction data.** Prices such
  as CBBT (Bloomberg Composite Bond Trader) and BVAL (Bloomberg Valuation) are
  dealer composites or model-based evaluations, not executed trades. State
  which quote type you use and be aware it may differ from transaction prices
  in illiquid markets.
- **Snap times and time zones vary by asset and region.** The meaning of
  "close" differs across equity, FX, and fixed-income markets, and across
  regions. Document the snap time and time zone for each series.
- **No programmatic access without an entitled session.** There is no anonymous
  or API-key-only path; every pull requires an active, licensed terminal
  session. Automated pipelines must be run from a machine with a valid session.

## Citation

Cite Bloomberg L.P., listing the exact tickers and field mnemonics, the snap
time and time zone, and the pull date, since the raw data cannot be
redistributed. For example: *Bloomberg L.P., tickers [list], field
[mnemonic], [snap time, time zone], accessed YYYY-MM-DD.*
