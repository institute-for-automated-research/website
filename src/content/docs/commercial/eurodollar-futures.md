---
title: "Eurodollar futures intraday prices (licensed)"
description: >-
  Intraday (tick) Eurodollar futures prices from CME Group, the standard
  instrument for high-frequency monetary-policy-surprise identification around
  FOMC announcements. Daily settlements are public; the intraday windows are licensed.
  This page documents the access path and the gotchas, but the data was not
  exercised here.
sidebar:
  label: Eurodollar futures
tags: [monetary-policy, interest-rate-futures, high-frequency, identification, licensed, data:eurodollar-futures]
---

:::caution[Licensed: not exercised here]
**Intraday Eurodollar futures prices are a paid licensed product** (CME Group via
commercial intraday / tick feeds), so this page carries **no provenance badge**: the access path below was **not** run in this
session. Daily settlement prices are public, but the high-frequency windows that
make this dataset useful for policy-surprise identification are licensed. Treat
it as unverified until someone exercises the intraday feed. This is the honest
grade under the institute's Verified discipline.
:::

**Eurodollar futures** (CME Group) were exchange-traded contracts on the
three-month USD LIBOR rate, with quarterly expiries stretching years out. The
deferred contracts price the expected path of short rates, so the change in a
Eurodollar futures price in a **tight window around an FOMC announcement** is a
standard high-frequency **monetary-policy surprise** that strips out information
known before the announcement. A paper we distill uses it:
[Stavrakeva & Tang](/wiki/papers/jf/2026/stavrakeva-dollar-great-recession-2026/)
build their policy-surprise instrument from the change in the fourth Eurodollar
contract (ED4, expiring three quarters hence) over a one-hour window (15 minutes
before to 45 minutes after) around FOMC and out-of-meeting QE announcements,
using ED4 because it captures unconventional policy at the zero lower bound.

- **Cost:** daily settlement prices are public (CME); the intraday / tick history
  needed for event-window surprises is licensed via a data vendor.
- **Vendor:** CME Group (and commercial intraday redistributors).
- **Coverage:** quarterly Eurodollar contracts out several years, with the
  high-frequency series most useful from the 1990s onward.

## Access (when licensed)

- **Daily settlements are free; intraday is the licensed asset.** Settlement
  prices are published by CME; the tick or minute-bar history around specific
  announcement timestamps is obtained through a CME data subscription or an
  intraday-data vendor.
- **Keyed by contract and timestamp.** An event-window surprise needs the contract
  price immediately before and after each announcement, so you need exact
  announcement timestamps aligned to the futures clock.
- Vendor credentials are required for the intraday feed. Keep any credentials in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The contract is retired; mind the SOFR transition.** With LIBOR's wind-down,
  CME converted Eurodollar futures to SOFR futures (the conversion completed in
  2023), and liquidity migrated well before that. Use the historical Eurodollar
  series for the in-sample period; for recent or forward analysis the comparable
  instrument is SOFR (or fed funds) futures, and the two are not interchangeable
  tick-for-tick.
- **Which contract you pick is the identification choice.** The near contract,
  ED4, or a bundle measure different things; at the zero lower bound the front
  contract barely moves while deferred contracts carry the unconventional-policy
  signal. State the contract and justify it (the citing paper uses ED4).
- **Window width trades noise against contamination.** Too narrow a window misses
  the price adjustment; too wide a window lets other news in. The 15-before /
  45-after FOMC convention is common but a choice. Report robustness to the
  window.
- **Timestamp alignment is fragile.** Surprises are only as clean as the alignment
  between the announcement timestamp and the futures-feed clock (time zone,
  exchange versus wall clock, release-time revisions). A few seconds of
  misalignment around a release corrupts the surprise.
- **Off-cycle announcements need hand-collected timestamps.** Crisis-era QE and
  forward-guidance announcements made outside scheduled FOMC meetings are part of
  the signal but require event timestamps assembled by hand. Document the event
  list.

## Citation

Cite the exchange and the intraday source, e.g.: *Eurodollar futures (CME Group),
intraday prices via [vendor], accessed YYYY-MM-DD.* State the contract used (for
example ED4), the event-window convention, and the announcement-timestamp source.
