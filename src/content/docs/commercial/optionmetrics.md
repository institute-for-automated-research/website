---
title: "OptionMetrics IvyDB: option prices, implied vols, and Greeks (licensed)"
description: >-
  OptionMetrics IvyDB is the standard database of end-of-day option prices,
  OptionMetrics-computed implied volatilities and Greeks, and the standardized
  volatility surface for US exchange-listed equity and index options from 1996.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: OptionMetrics
tags: [options, equities, licensed, data:optionmetrics]
---

:::caution[Licensed: not exercised here]
**OptionMetrics IvyDB is a paid licensed product** (from OptionMetrics, an
independent data provider), so it sits in the *Licensed* tier and carries **no
provenance badge**: the access path below was **not** run in this session (no
OptionMetrics or WRDS credentials were available). The page documents the access
route and the gotchas; treat it as unverified until someone exercises it through
a licensed account. This is the honest grade under the institute's Verified
discipline.
:::

**OptionMetrics IvyDB US** is the standard source for historical US option
data: **daily closing bid/ask quotes**, volume, and open interest for
exchange-listed equity and index options, plus **OptionMetrics-computed implied
volatilities and Greeks** (delta, gamma, vega, theta) and a **volatility
surface** (standardized, interpolated implied vols indexed by delta and
maturity). Coverage begins in 1996. The option records link to the underlying
security prices and to distribution (dividend and split) data, so a pipeline can
join options to their underlying. Papers we distill use it for option-pricing
work, for example
[Kruttli, Roth Tran & Watugala](/wiki/papers/jf/2025/kruttli-pricing-poseidon-extreme-weather-2025/)
on the pricing of extreme-weather and hurricane risk in options.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** OptionMetrics, an independent data provider.
- **Coverage:** US equity and index options 1996-present (IvyDB US); also IvyDB
  Global, IvyDB Europe, IvyDB Canada, and futures options are sold as separate
  products.

## Access (when licensed)

- **Most commonly through WRDS.** Like CRSP, Compustat, and I/B/E/S, IvyDB US is
  usually reached through [WRDS](/wiki/commercial/wrds/) under the OptionMetrics
  library, with tables such as `opprcd` (option prices), `secprd` (security
  prices), `vsurfd` (the standardized volatility surface), and the
  `optionm` metadata tables. Check whether your institution's WRDS subscription
  includes OptionMetrics; it is licensed separately.
- **Direct subscription.** IvyDB is also available as a direct OptionMetrics
  subscription (file delivery or API), independent of WRDS.
- Credentials and a licensed seat are required. Keep any credentials in `.env`,
  never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Implied vols and Greeks are model output, not market-observed.**
  OptionMetrics computes implied volatility and the Greeks (delta, gamma, vega,
  theta) from its own pricing model (a binomial / Cox-Ross-Rubinstein tree with
  OptionMetrics' dividend and interest-rate assumptions). These fields inherit
  the model's assumptions; they are not quoted by the exchange. Do not treat a
  reported implied vol or delta as a primitive observation.
- **The volatility surface is interpolated and smoothed.** The `vsurfd`
  product gives constant-maturity, fixed-delta implied vols produced by a
  kernel-smoothed fit across the available options, not raw quotes. Surface
  points are standardized constructs; do not treat them as tradable prices or
  as observed quotes for a specific contract.
- **Prices are end-of-day snapshot bid/ask, with quality issues.** Option
  records are closing bid/ask quotes (and their midpoint) from a daily snapshot,
  so they include stale quotes, crossed quotes, and illiquid contracts with a
  zero bid or a very wide spread. Filter on bid > 0, on spread, on volume, and
  on open interest before using prices.
- **The identifier is OptionMetrics' `secid`, which must be linked.** Underlying
  securities are keyed by OptionMetrics' own `secid`, not by permno or CUSIP.
  Use the provided linking table to map `secid` to CRSP permno / CUSIP rather
  than assuming a match; tickers are reused and change over time.
- **Survivorship and changing coverage.** Delisted underlyings and expired
  contracts are handled by point-in-time records, and exchange coverage (which
  options classes are included) has changed over the sample. A naive
  current-universe filter will drop history; check coverage by period.
- **Early-sample data revisions and known errors.** OptionMetrics has revised
  historical records, and the early years (late 1990s) have documented
  data-quality issues and thinner liquidity. Pin the extraction date and treat
  early-sample illiquid options cautiously.

## Reference: the main IvyDB tables/files

| Table / file | What it holds |
|---|---|
| `opprcd` (option prices) | Daily closing bid/ask, volume, open interest, implied vol, and Greeks per contract |
| `secprd` (security prices) | Daily prices and returns for the underlying securities |
| `vsurfd` | Standardized, interpolated implied vols by constant maturity and fixed delta |
| `optionm` metadata | Security and contract reference data, distributions, and the `secid` linking table |

Each is keyed by `secid` and date; option records carry contract terms (strike,
expiration, call/put) and the `optionid`.

## Citation

Cite the provider and the database, e.g.: *OptionMetrics IvyDB US, via WRDS,
accessed YYYY-MM-DD.* State the library and the exact tables used (for example
`opprcd`, `secprd`, `vsurfd`), the date range, and the extraction date.
