---
title: "Moody's Ultimate Recovery Database (licensed)"
description: >-
  Moody's Ultimate Recovery Database (URD) records firm- and instrument-level
  creditor recovery rates at the resolution of U.S. corporate defaults. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: Moody's URD
tags: [credit-markets, default, recovery, bankruptcy, corporate-debt, licensed, data:moodys-urd]
---

:::caution[Licensed: not exercised here]
**Moody's URD is a paid licensed product** (Moody's Analytics), so it carries **no provenance badge**: the access path below
was **not** run in this session. Treat it as unverified until someone exercises
it through a Moody's Analytics licence. This is the honest grade under the
institute's Verified discipline.
:::

**Moody's Ultimate Recovery Database (URD)** records the recovery actually
realized by creditors when a U.S. corporate default is resolved: the value of
the cash, new debt, or equity received per dollar of claim, by instrument and
seniority, measured at emergence from bankruptcy rather than from secondary
market prices at default. It is the reference source for loss-given-default and
recovery-rate research because it captures the full resolution rather than a
trading-price proxy. A paper we distill uses it:
[Griffin, Nini & Smith](/wiki/papers/jf/2026/griffin-loan-covenant-violations-decline-2026/)
use the URD for the par-value-weighted firm-level recovery rates of 403
corporate defaults (1997 to 2020) when showing that loan covenant violations,
and the creditor control they trigger, protect recovery at bankruptcy.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Moody's Analytics (part of the CreditView / Default & Recovery
  data family).
- **Coverage:** U.S. nonfinancial corporate defaulters with large rated debt;
  instrument-level recoveries observed at the resolution of the default event.
  Coverage starts in the late 1980s and is deepest for bond and loan issuers
  that Moody's rated.

## Access (when licensed)

- **Through a Moody's Analytics data licence.** Extracts are delivered at two
  grains: the default event (firm, default date, type) and the individual debt
  instrument (seniority, collateral, recovery value). Join on the deal or
  family identifier.
- **Recovery is the realized payout at emergence.** The headline "ultimate
  recovery" is nominal or discounted value received at the resolution of the
  case, not the 30-day-post-default trading price; the database also stores the
  trading-based measure for comparison.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The sample is selected toward large, rated defaulters.** The URD covers
  firms with Moody's-rated debt that went through a formal default and
  resolution; small private-debt defaults and out-of-court workouts are
  underrepresented. Recovery statistics from it do not describe the universe of
  corporate distress. The citing paper's 403-default sample is exactly this
  selected population.
- **Two recovery concepts, easy to mix up.** "Ultimate" (settlement-value)
  recovery and trading-price recovery are different numbers for the same
  instrument and answer different questions. State which you use; comparisons
  across papers break when one uses each.
- **Firm-level numbers are a weighted aggregation of instrument-level rows.**
  The par-value-weighted firm recovery used by the citing paper is built up from
  per-instrument recoveries; the weighting scheme (par, market, by seniority)
  changes the headline. Document the aggregation.
- **Resolution lag truncates recent cohorts.** "Ultimate" recovery is only
  observed once the case closes, so the most recent default years are
  incomplete until their cases resolve. A panel that ends near the data vintage
  systematically misses slow resolutions.
- **Seniority and collateral coding requires care.** Recovery is highly
  sensitive to lien position and instrument type; mislabeling a second-lien or
  unsecured tranche distorts the loss-given-default. Reconcile the instrument
  fields against the credit agreement where it matters.

## Citation

Cite the vendor and product, e.g.: *Moody's Ultimate Recovery Database (Moody's
Analytics), accessed YYYY-MM-DD.* State the default years and sample, which
recovery concept (ultimate versus trading) was used, and the weighting used to
move from instrument-level to firm-level recovery.
