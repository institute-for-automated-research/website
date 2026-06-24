---
title: "IHS Markit CDS: single-name credit default swap spreads (licensed)"
description: >-
  Markit CDS (IHS Markit, now S&P Global Market Intelligence) provides daily
  composite single-name and index credit-default-swap spreads contributed by
  dealers, across maturities, currencies, seniority, and restructuring clauses.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: Markit CDS
  order: 18
tags: [credit, cds, licensed, data:markit-cds]
---

:::caution[Licensed: not exercised here]
**Markit CDS is a licensed commercial dataset** (IHS Markit, now S&P Global
Market Intelligence), so it carries **no
provenance badge**: the access path below was **not** run in this session (no
Markit credentials were available). The page documents the access route and the
gotchas; treat it as unverified until someone exercises it through a licensed
account. This is the honest grade under the institute's Verified discipline.
:::

**Markit CDS** is a daily composite single-name credit-default-swap spread
product, built from marks contributed by dealer banks and aggregated by IHS
Markit (now S&P Global Market Intelligence). It covers individual corporate and
sovereign reference entities as well as CDS indices (CDX, iTraxx), across
maturities (the five-year tenor is the common reference point), currencies,
seniority tiers, and restructuring clauses (for example, modified restructuring
"MR" and no-restructuring "XR"). Note: this is the Markit single-name CDS
spread product; Markit bond pricing and Markit Securities Finance are separate
products under their own slugs. It is a common source in credit-risk and
fixed-income research: used in, for example
[Siriwardane, Sunderam & Wallen](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/)
(CDS pricing in the CDS-bond basis construction), and
[Copeland & Martin](/wiki/papers/jf/2025/copeland-repo-financial-crisis-2025/)
(five-year modified-restructuring USD CDS spreads as a proxy for dealer
counterparty credit risk, matched to 13 of 18 dealers).

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** IHS Markit / S&P Global Market Intelligence.
- **Coverage:** single-name corporate and sovereign reference entities plus CDS
  indices (CDX, iTraxx), daily composite spreads, from the mid-2000s.

## Access (when licensed)

- **Direct from IHS Markit / S&P Global.** Data is delivered as a feed keyed
  on the Markit RED code (Reference Entity Database) per reference entity and
  seniority tier. Credentials and a subscription are required.
- Pulls are parameterized by: RED code, maturity tenor, currency, seniority
  (e.g. SNRFOR), and document clause / restructuring convention.
- Keep credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **You must pin all contract dimensions.** Maturity tenor (5y), currency
  (USD vs EUR), seniority (SNRFOR vs SUBLT2), and restructuring clause (MR vs
  XR vs CR) are distinct series; mixing them silently produces non-comparable
  spreads. State all four dimensions in every pull.
- **Spreads are composite dealer marks, not executed trades.** Thin or
  infrequently-traded names have stale or interpolated marks; treat them with
  caution and check the number of contributing dealers per observation.
- **The RED code is the linking key and is not an equity or bond identifier.**
  Matching to CUSIP, ISIN, or ticker requires a separate crosswalk. Entity
  successions from mergers, spin-offs, or defaults can reassign RED codes;
  verify entity continuity when working across long panels.
- **The 2009 CDS Big Bang changed contract conventions.** Standardized fixed
  coupons (100 bps or 500 bps), upfront points-in-lieu, and restructuring
  standardization took effect in April 2009 for North American names. Pre- and
  post-2009 quoted spreads are not directly comparable; document how your
  pipeline handles this break (par spread conversion, separate pre/post
  samples, or exclusion of the transition window).
- **Index and single-name data are separate files.** CDX/iTraxx index spreads
  live in a different feed from single-name spreads; they require separate
  pulls and should not be mixed without explicit justification.
- **Coverage thins for high-yield and sovereign names.** Investment-grade
  US corporates have the densest coverage; high-yield names and many sovereign
  entities have fewer contributing dealers and more gaps.

## Citation

Cite the product, vendor, and the full contract specification: *IHS Markit CDS
single-name spread data, S&P Global Market Intelligence, accessed YYYY-MM-DD;
maturity [e.g. 5y], currency [USD], seniority [SNRFOR], restructuring clause
[MR/XR/CR], RED-code vintage [date].* Also state how the April 2009 Big Bang
convention change was handled in the sample construction.
