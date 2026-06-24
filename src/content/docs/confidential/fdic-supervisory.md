---
title: "FDIC confidential supervisory and account-level deposit data (restricted access)"
description: >-
  Confidential FDIC microdata: account-level deposit balances and transactions
  for a failed bank, plus supervisory enforcement actions and brokered-deposit
  waivers. It is confidential supervisory data. This page documents what it is
  and the gotchas, but it was not exercised here.
sidebar:
  label: FDIC supervisory
tags: [banks, deposits, supervision, fdic, data:fdic-supervisory]
---

:::caution[Confidential supervisory data: not exercised here]
**This is confidential FDIC supervisory data.** It is **not for sale and not
publicly downloadable**: it carries **no provenance badge** because there is no
access path we can run here. Researchers reach it only through an FDIC affiliation
or an approved restricted-data arrangement, inside a secure environment, with
output subject to disclosure review. The page documents what the collection is
and the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**FDIC confidential supervisory data** spans two complementary kinds of restricted
microdata. The first is **account-level deposit microdata**: daily account
balances and transactions for an individual bank, which lets researchers watch
deposit inflows and outflows account-by-account as a bank approaches failure. The
second is **supervisory information** on the wider bank population: enforcement
actions (cease-and-desist orders, less-than-well-capitalized status) and
brokered-deposit waivers. A paper we distill uses both:
[Martin, Puri & Ufier](/wiki/papers/jf/2026/martin-deposit-flows-failing-banks-2026/)
use FDIC account-level deposit microdata (daily balances and transactions for one
failed bank, from early 2006 to failure) for their core analysis, and the
confidential supervisory data (enforcement actions, capitalization status,
brokered-deposit waivers) to generalize across a panel of banks built on public
[Call Reports](/wiki/datasets/call-reports/).

- **Cost:** not for sale. Restricted-access confidential supervisory data.
- **Source:** the FDIC (account-level records of a failed bank; supervisory
  enforcement records).
- **Coverage:** account-level data is one bank over a window to failure; the
  supervisory enforcement data covers the broader supervised population.

## Access (restricted)

- **No public download.** The account-level and enforcement microdata is
  confidential and is not posted; enforcement actions are public only in summary
  form.
- **Through an FDIC affiliation or approved program.** Access is limited to
  researchers at the FDIC or others granted entry to the restricted data, worked
  inside a secure environment with output subject to disclosure review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Account-level data is one bank.** The daily deposit microdata is a single
  failed institution; external validity is the central caveat, which is exactly
  why the supervisory panel is used to generalize. Keep the two layers distinct.
- **Account versus depositor versus insured balance.** One depositor can hold
  several accounts, and the insured portion differs from the balance; runs look
  different at the account, depositor, and insured-exposure level. Fix the unit
  before measuring outflows.
- **Enforcement actions are timed and lagged.** A cease-and-desist order or a
  capitalization downgrade is dated by the supervisory process, which lags the
  bank's actual deterioration; treating the action date as the onset of trouble
  mismeasures timing. Use the action date carefully.
- **Brokered-deposit flags are regulatory categories.** Brokered-deposit status
  and waivers follow definitions that have changed; the label is a regulatory
  construct, not a clean economic measure of funding source. Read the definition
  for your period.
- **Identifier joins.** Linking the supervisory panel to public
  [Call Reports](/wiki/datasets/call-reports/) needs the bank identifier crosswalk
  and care with mergers. Verify the link.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source, e.g.: *FDIC confidential supervisory and account-level deposit
data, confidential; accessed under restricted-data arrangement, YYYY-MM-DD.*
State which layer is used (account-level single bank versus supervisory panel),
the unit (account, depositor, or insured balance), and the sample window.
