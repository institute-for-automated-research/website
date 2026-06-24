---
title: "RateWatch deposit-rate surveys (licensed)"
description: >-
  RateWatch (S&P Global Market Intelligence) is the standard branch-level survey
  of U.S. deposit and CD rates, posted-rate data at weekly frequency. It is
  licensed: this page documents the access path and the gotchas, but the data was
  not exercised here.
sidebar:
  label: RateWatch
tags: [deposit-rates, banking, branch-level, deposit-competition, licensed, data:ratewatch]
---

:::caution[Licensed: not exercised here]
**RateWatch is a paid licensed product** (S&P Global Market Intelligence), so it
sits in the *Licensed* tier and carries **no provenance badge**: the access path
below was **not** run in this session. Treat it as unverified until someone
exercises it through a licensed S&P Global / RateWatch subscription. This is the
honest grade under the institute's Verified discipline.
:::

**RateWatch** surveys the **posted deposit and CD rates** of U.S. bank and credit
union branches, at the branch level and weekly frequency, across products
(savings, money market, certificates of deposit by term and balance tier). It is
the standard source for the **price of deposits** in the cross-section of
branches, used to study deposit competition, rate-setting, and the deposits
channel. A paper we distill uses it:
[Martin, Puri & Ufier](/wiki/papers/jf/2026/martin-deposit-flows-failing-banks-2026/)
use RateWatch 12-month CD rate spreads to show that large banks under regulatory
enforcement raise deposit rates (paying on average roughly 75 basis points above
the FDIC national average, near the regulatory rate cap) to attract insured term
deposits.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** S&P Global Market Intelligence (RateWatch).
- **Coverage:** branch-level posted deposit and CD rates for U.S. depository
  institutions, weekly, by product and balance tier; broad branch coverage with a
  long weekly history.

## Access (when licensed)

- **Through an S&P Global / RateWatch subscription.** Extracts are obtained under
  a RateWatch licence (directly or through S&P Global Market Intelligence); some
  institutions reach it via a market-data agreement.
- **Keyed by branch, product, and week.** A rate record is a posted rate for a
  product (for example a 12-month CD at a balance tier) at a branch in a survey
  week; aggregate to bank level with branch weights when you need an
  institution-level rate.
- **No credential is run here.** Keep any access credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Posted rates, not paid rates.** RateWatch records the rate a branch advertises,
  not the average rate actually paid on the existing deposit book; the posted rate
  leads and overstates marginal cost relative to the realized interest expense in
  Call Reports. Match the concept to your question and do not equate the two.
- **Product and balance tier must be fixed.** Deposit rates vary sharply by product
  (savings versus CD), CD term, and balance tier; comparing across branches
  requires holding the product and tier constant (the citing paper fixes on the
  12-month CD). Specify the product.
- **Branch versus institution aggregation.** A bank has many branches that may post
  different rates; rolling up to a bank-level rate needs a weighting choice
  (deposit-weighted, simple, rate-setter branch). State the aggregation.
- **Rate-setter and follower structure.** RateWatch identifies rate-setting
  branches whose rates other branches mirror; treating every branch as an
  independent observation overstates the effective sample size. Account for the
  rate-setter design.
- **Linking to bank financials.** Joining branch rates to bank-level Call Report
  data (see [Call Reports](/wiki/datasets/call-reports/)) requires mapping branch
  to RSSD / institution across mergers and branch sales; the join has known
  mismatches around acquisition events. Verify the link.

## Citation

Cite the vendor and product, e.g.: *RateWatch (S&P Global Market Intelligence),
accessed YYYY-MM-DD.* State the deposit product and balance tier, the branch-to-
bank aggregation, and the weekly date range.
