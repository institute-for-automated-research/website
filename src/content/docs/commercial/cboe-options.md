---
title: "Cboe options and volatility data (licensed)"
description: >-
  Cboe Global Markets options and volatility data: index and equity option
  quotes and trades, the VIX and related volatility indices, and historical
  files via Cboe DataShop. It is licensed: this page documents the access path
  and the gotchas, but the data was not exercised here.
sidebar:
  label: Cboe options
tags: [options, volatility, derivatives, licensed, data:cboe-options]
---

:::caution[Licensed: not exercised here]
**Cboe market data is a paid licensed product** (historical files are sold
through Cboe DataShop; some headline index levels are free but the research data
is not), so it carries **no provenance badge**:
the access path below was **not** run in this session. The page documents the
access route and the gotchas; treat it as unverified until someone exercises it
through a licensed account. This is the honest grade under the institute's
Verified discipline.
:::

**Cboe Global Markets** is the exchange operator behind index options (notably
SPX options on the S&P 500) and the **VIX** volatility index. Its market data
covers option quotes and trades on the Cboe exchanges, the VIX and a family of
related volatility indices (VIX term structure, VVIX, SKEW, and similar), and
end-of-day and intraday historical files sold through **Cboe DataShop**. It is
distinct from [OptionMetrics IvyDB](/wiki/commercial/optionmetrics/), which is a
research-oriented panel of computed implied vols and Greeks across all U.S.
options; Cboe data is exchange-native and centered on Cboe-listed products. A
paper we distill uses it:
[Siriwardane et al.](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/)
on segmented arbitrage.

- **Cost:** the VIX and headline index levels are freely published, but the
  historical option-level and intraday data are licensed through Cboe DataShop;
  no free tier for the research-grade files.
- **Vendor:** Cboe Global Markets (Cboe DataShop for historical data; the
  LiveVol platform for analytics).
- **Coverage:** Cboe-listed index and equity options; the VIX index history runs
  from 1990 (with the current methodology from 2003 and a back-cast to 1990).

## Access (when licensed)

- **Cboe DataShop for historical files.** Option quotes/trades, end-of-day
  summaries, and intraday data are purchased and downloaded from Cboe DataShop;
  the analytics/options-calculator data is the LiveVol product line. Index levels
  (VIX and family) are downloadable from Cboe's site as time series.
- **Keyed by option symbol and the OCC contract specification.** An option record
  is identified by underlying, expiration, strike, and call/put (the OPRA / OCC
  contract spec), not by a single stable id; build the contract key yourself.
- Credentials and a purchase are required for the licensed files; keep any
  credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is exchange data, not a computed panel.** Cboe files give quotes and
  trades, not OptionMetrics-style fitted implied vols and Greeks. If you need a
  clean implied-vol surface you compute it yourself (with a dividend and rate
  assumption) or use [OptionMetrics](/wiki/commercial/optionmetrics/); do not expect
  the two to match contract-for-contract.
- **VIX methodology and history caveats.** The current VIX (model-free,
  SPX-based) dates from 2003; the pre-2003 series is the old VXO (OEX,
  Black-Scholes-based) and the 1990-2003 VIX is a back-cast. Do not treat the
  whole 1990-onward series as one consistent methodology.
- **SPX versus SPXW (AM versus PM settlement).** S&P 500 options come in monthly
  AM-settled (SPX) and weekly/end-of-month PM-settled (SPXW) variants with
  different settlement conventions and expiration handling; mixing them
  misaligns expirations and settlement prices. Separate the root symbols
  deliberately.
- **Settlement and expiration prices are special.** AM-settled index options
  settle on a Special Opening Quotation (SOQ), which is not the same as the
  opening trade print; using the wrong settlement value distorts payoffs near
  expiration.
- **Quote timestamps and the close.** Intraday data is large and the "closing"
  quote depends on which timestamp convention you take (last quote, 15:59, market
  close); be explicit, because option quotes can be stale or wide at the close.
- **Corporate actions and underlying changes.** Equity-option contracts adjust
  for splits and special dividends (adjusted/non-standard deliverables); the
  strike and multiplier on an adjusted contract are not the plain-vanilla values.
  Flag adjusted series rather than treating them as standard.
- **Volume is Cboe-venue volume.** Cboe data reflects activity on Cboe exchanges,
  not consolidated OPRA volume across all venues; do not read it as total market
  volume for a multiply-listed option.

## Reference: Cboe data products

| Product | What it is |
|---|---|
| DataShop end-of-day | daily option quotes/summaries and open interest |
| DataShop intraday | timestamped quotes and trades for Cboe-listed options |
| Volatility indices | VIX, VIX term structure, VVIX, SKEW and related index levels |
| LiveVol | analytics platform with computed implied vols and Greeks |

## Citation

Cite Cboe as the source and name the product, e.g.: *Cboe Global Markets, via
Cboe DataShop, accessed YYYY-MM-DD* (or the relevant volatility-index series).
State the products, root symbols (e.g. SPX versus SPXW), the date range, and the
timestamp convention used so the sample is reproducible.
