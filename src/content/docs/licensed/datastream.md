---
title: "Refinitiv Datastream: global time-series of prices and macro series (licensed)"
description: >-
  Datastream is Refinitiv's (LSEG) historical financial time-series database
  covering equities, bonds, commodities, indices, exchange rates, interest
  rates, options/futures, and a large library of macroeconomic series across
  many countries. It is licensed: this page documents the access path and the
  gotchas, but the data was not exercised here.
sidebar:
  label: Datastream
tags: [equities, international, macro, time-series, licensed, data:datastream]
---

:::caution[Licensed: not exercised here]
**Datastream is a paid licensed product** (Refinitiv / LSEG), so it sits in the
*Licensed* tier and carries **no provenance badge**: it is not on
[WRDS](/wiki/licensed/wrds/) for most institutions, and the access path below was
**not** run in this session (no Refinitiv / LSEG credentials were available). The
page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**Datastream** is Refinitiv's (LSEG) historical financial time-series database. It
covers **equities, bonds, commodities, indices, exchange rates, interest rates,
and options/futures**, alongside a large library of **macroeconomic series**
across many countries, with long histories (some series run back to the 1960s
and 1970s). Data is accessed by **series mnemonic** and **datatype code**. It is
a standard source for international asset prices and macro series. A paper we
distill uses it:
[Costain et al.](/wiki/papers/jf/2025/costain-term-structure-interest-rates-2025/)
on the term structure of interest rates.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Refinitiv / LSEG (lineage: Thomson Reuters Datastream).
- **Coverage:** global, multi-asset and macro; daily, weekly, and monthly
  frequencies; deep history but uneven by series.

## Access (when licensed)

- **Refinitiv / LSEG, not WRDS.** Datastream is usually reached through a
  Refinitiv terminal, the **Datastream for Office** Excel add-in, or the
  **Datastream API / DSWS** (DataStream Web Service); it is not generally
  reached through [WRDS](/wiki/licensed/wrds/). Check whether your institution
  licenses it separately.
- **Pulled by mnemonic plus datatype.** Each request names a series mnemonic and
  a datatype code, for example `RI` (total-return index), `P` (price), or `MV`
  (market value), plus a frequency and date range.
- A terminal seat or API credentials are required. The **DSWS** service has
  Python and R clients for programmatic extraction. Keep any credentials in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Static / padded data.** Datastream carries forward the last value on
  non-trading days and after a stock delists, producing spurious zero returns
  and flat stretches. Screen these out: a run of repeated identical values, or
  zero returns after the last live date, is padding, not data.
- **Survivorship and dead stocks.** Research lists and constituent lists differ,
  and using current index constituents introduces survivorship bias. Use the
  dead / research lists so delisted securities stay in the sample.
- **Data errors at the extremes.** There are well-documented spikes and
  reversals (a price that jumps and then reverts) that inflate small-stock
  returns. The standard Ince and Porter screens trim returns above set
  thresholds and delete suspicious reversals before any analysis.
- **RI versus P.** Use `RI` (return index) for total returns; `P` (price)
  excludes dividends and has its own adjustment quirks. Mixing them understates
  returns by the dividend component.
- **Currency.** Series come in local currency or a chosen currency, and the
  conversion / datatype must be set explicitly. Do not assume the default
  currency; record which one was requested.
- **Mnemonics are not stable.** The same economic series can have multiple codes,
  and codes change over time. Document the exact mnemonic, datatype, frequency,
  and extraction date so the extract is reproducible.
- **Market-value and shares fields lag.** `MV` and number-of-shares fields lag
  and are periodically restated; do not treat a recent value as final or assume
  point-in-time accuracy.

## Reference: common datatypes

| Datatype | What it holds |
|---|---|
| `RI` | Total-return index (price plus reinvested dividends); use for returns |
| `P` | Price (unadjusted for dividends) |
| `MV` | Market value (market capitalisation) |
| `NOSH` | Number of shares |
| `UP` | Unadjusted price |
| `DY` | Dividend yield |
| `PE` | Price-earnings ratio |

## Citation

Cite the provider and the database, e.g.: *Refinitiv (LSEG) Datastream, accessed
YYYY-MM-DD.* State the exact mnemonics, datatypes, and frequency requested, and
the extraction date. When you apply the standard data screens, cite Ince and
Porter (2006), "Individual Equity Return Data from Thomson Datastream: Handle
with Care!", *Journal of Financial Research*.
