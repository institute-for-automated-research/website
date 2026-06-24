---
title: "VentureSource venture-capital data (licensed)"
description: >-
  VentureSource (Dow Jones / CB Insights) tracks venture-capital funds, financing
  rounds, valuations, and startup locations. It is licensed: this page documents
  the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: VentureSource
tags: [venture-capital, startups, private-markets, financing-rounds, licensed, data:venturesource]
---

:::caution[Licensed: not exercised here]
**VentureSource is a paid licensed product** (Dow Jones / CB Insights), so it sits
in the *Licensed* tier and carries **no provenance badge**: the access path below
was **not** run in this session. Treat it as unverified until someone exercises it
through a licensed account. This is the honest grade under the institute's
Verified discipline.
:::

**VentureSource** is a venture-capital deals and fund database: VC fund
characteristics (size, vintage, location), startup financing rounds (amount,
date, investors), pre-money valuations, and the startup's headquarters location
over time. It is one of the two standard VC sources (alongside
[PitchBook](/wiki/commercial/pitchbook/) and the older Thomson VentureXpert) for
financing-round and fund-flow research. A paper we distill uses it:
[Chen & Ewens](/wiki/papers/jf/2025/chen-venture-capital-startup-agglomeration-2025/)
use VentureSource as their primary VC source (2010 to 2018) for fund
characteristics, startup financing rounds, and the startup's HQ state over time
when showing that local VC supply drives startup agglomeration in VC hubs, with
PitchBook used for robustness.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Dow Jones (VentureSource); now part of CB Insights.
- **Coverage:** VC-backed startups, financing rounds, and funds, with the startup
  location and round-level detail that makes geographic and time-series analysis
  possible; deepest for U.S. VC.

## Access (when licensed)

- **Through a Dow Jones / CB Insights subscription.** Extracts are obtained under
  a VentureSource / CB Insights data licence (download or API where entitled).
- **Two linked grains.** Fund-level records (fund size, vintage, LPs where
  available) and round-level records (startup, amount, date, investors,
  valuation) are different extracts that join on fund and company identifiers.
- Terminal or API credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage is built from disclosure, so it is selective.** Rounds enter the
  database when they are reported; small, early, or undisclosed rounds are
  undercounted, and coverage thickens over time. A rising round count can reflect
  better reporting rather than more activity. Check coverage stability.
- **Cross-check against a second source.** VentureSource and PitchBook disagree on
  round amounts, dates, and even whether a round happened; conclusions that turn
  on one source are fragile. The citing paper uses PitchBook for robustness for
  exactly this reason.
- **Valuations are sparse and noisy.** Pre-money valuations are missing for many
  rounds and are often imputed or self-reported; conditioning on non-missing
  valuation selects larger, later rounds. State the missingness handling.
- **Startup location changes over time.** A startup's HQ state is time-varying
  (relocations to hubs are themselves an outcome); using a single static location
  induces look-ahead bias in any migration analysis. Use the point-in-time
  location.
- **Entity linking and renames.** Startups and funds get renamed, merged, or
  re-IDed; joins to other data (Crunchbase, SDC, regulatory filings) must be built
  on names plus dates, not a shared key. Verify the link.

## Citation

Cite the vendor and product, e.g.: *VentureSource (Dow Jones / CB Insights),
accessed YYYY-MM-DD.* State whether fund-level or round-level data was used, the
date range, and how location and valuation missingness were handled.
