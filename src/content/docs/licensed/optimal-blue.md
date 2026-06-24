---
title: "Optimal Blue mortgage rate-lock data (licensed)"
description: >-
  Optimal Blue captures mortgage rate-lock agreements and real-time lender offer
  distributions from its pricing-engine platform, a near-real-time view of locked
  rates and the offers borrowers could have gotten. It is licensed: this page
  documents the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: Optimal Blue
tags: [mortgage-markets, rate-locks, household-finance, price-dispersion, licensed, data:optimal-blue]
---

:::caution[Licensed: not exercised here]
**Optimal Blue data is a paid licensed product** (Optimal Blue, a Constellation
Software business), so it sits in the *Licensed* tier and carries **no provenance
badge**: the access path below was **not** run in this session. Treat it as
unverified until someone exercises it through a licensed Optimal Blue research
agreement. This is the honest grade under the institute's Verified discipline.
:::

**Optimal Blue** runs a mortgage product-and-pricing-engine platform used by a
large share of U.S. originators, so its data captures **rate-lock agreements**
(the locked rate, loan and borrower characteristics, program, points) and, via
the **Pricing Insight** product, the **distribution of lender offers** available
for an identical loan at a point in time. That combination lets researchers
compare what a borrower locked against what they could have gotten. A paper we
distill uses it:
[Bhutta, Fuster & Hizmo](/wiki/papers/jf/2026/bhutta-mortgage-overpayment-borrower-sophistication-2026/)
use 3.6 million Optimal Blue rate-lock agreements (January 2015 to December 2019)
and, for the subset of locks in 20 MSAs where offer data is sold, link each lock
to the real-time distribution of competing lender offers, to measure how much
borrowers overpay relative to the offers available for the same loan.

- **Cost:** licensed, research agreement. No free tier.
- **Vendor:** Optimal Blue (Constellation Software).
- **Coverage:** locked mortgages flowing through Optimal Blue's pricing engine,
  with loan / borrower attributes and (in Pricing Insight) the contemporaneous
  lender offer surface; the citing paper covers 2015 to 2019, with offer-level
  data for 20 MSAs.

## Access (when licensed)

- **Through an Optimal Blue research / data agreement.** Extracts are obtained
  under a licence with Optimal Blue; the lock-level data and the Pricing Insight
  offer distributions are separate products that must both be licensed for the
  overpayment comparison.
- **Keyed by loan and lock date.** A lock record carries the locked rate, points,
  FICO, LTV, loan amount, program, purpose, and MSA; matching to offers requires
  the same-day, same-MSA offer surface for a near-identical loan.
- **No credential is run here.** Keep any access credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Platform coverage, not the whole market.** The data covers originators that
  use Optimal Blue's pricing engine, not every U.S. lender; the panel of lenders
  and channels (retail, wholesale, correspondent) is selected. Check
  representativeness before generalizing to all originations.
- **Points and the rate are a package.** The locked rate is meaningless without
  the points paid; comparing rates across loans requires adjusting for the
  points-rate trade-off (the citing paper adjusts locked rates for points using
  the empirical relationship). Never compare bare rates.
- **The offer match defines the benchmark.** "Overpayment" is only as clean as the
  match between a lock and the offer distribution for an *identical* loan (same
  day, MSA, FICO, LTV, program, amount, points). A loose match contaminates the
  benchmark; the offer data also exists only for the subset of MSAs Optimal Blue
  sells, which is why the matched sub-sample (roughly 67,500 loans) is far smaller
  than the full 3.6 million locks.
- **A lock is not a closed loan.** Rate locks can expire, be renegotiated, or fall
  through; a lock record is the lock, not a funded mortgage. Do not treat lock
  counts as origination counts.
- **Linking to other mortgage data.** Joining to [HMDA](/wiki/datasets/hmda/) or
  to lender financials such as the [Mortgage Call Report (NMLS)](/wiki/datasets/mcr-nmls/)
  requires careful mapping of lender identity and loan attributes; the join has no
  shared key and must be built on characteristics. Document the merge.

## Citation

Cite the vendor and product, e.g.: *Optimal Blue rate-lock and Pricing Insight
data, accessed YYYY-MM-DD.* State the lock-date range, whether the offer
distribution was used, the MSAs covered, and the points adjustment applied.
