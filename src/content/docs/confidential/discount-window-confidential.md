---
title: "Federal Reserve discount window lending (restricted access)"
description: >-
  Loan-level records of Federal Reserve discount window borrowing (primary
  credit and related facilities). Contemporaneous borrower-level data is
  confidential; transaction details are released only with a statutory lag. This
  page documents what it is and the gotchas, but it was not exercised here.
sidebar:
  label: Discount window (confidential)
tags: [banks, central-bank-lending, liquidity, banking, federal-reserve, data:discount-window-confidential]
---

:::caution[Confidential supervisory data: not exercised here]
**Contemporaneous discount window borrower data is confidential** and held by the
Federal Reserve. It carries **no provenance badge** because there is no
contemporaneous access path we can run here. Under Dodd-Frank, transaction-level
details are released to the public only after a roughly two-year lag; the
contemporaneous, borrower-identified data is restricted to a Federal Reserve
affiliation or an approved restricted-data arrangement, inside a secure
environment, with output subject to disclosure review. The page documents what
the collection is and the gotchas; treat it as unverified. This is the honest
grade under the institute's Verified discipline.
:::

**Federal Reserve discount window lending** records are the loan-level details of
borrowing at the Fed's discount window (primary credit, secondary credit,
seasonal credit, and, in stress periods, related emergency facilities): which
institution borrowed, how much, at what rate, and for how long. Borrowing is
historically **stigmatized**, so the identity of contemporaneous borrowers is
sensitive and protected. A paper we distill uses it:
[Kotidis & Schreft](/wiki/papers/jf/2025/kotidis-propagation-cyberattacks-financial-system-2025/)
use discount window borrowing records to measure whether banks exposed to a
cyberattack increase their probability of borrowing from the window.

- **Cost:** not for sale contemporaneously. Lagged transaction details are
  released publicly under Dodd-Frank.
- **Source:** Federal Reserve (discount window lending).
- **Coverage:** institutions that borrow at the window; loan-level terms. Most
  banks do not borrow in normal times, so usage is sparse outside stress periods.

## Access (restricted)

- **Lagged release is public; contemporaneous borrower data is not.**
  Dodd-Frank requires the Fed to disclose discount window transaction details
  after about two years; the contemporaneous, borrower-identified data is
  confidential until then.
- **Through a Federal Reserve affiliation or approved program.** Contemporaneous
  loan-level access is limited to researchers at the Federal Reserve System or
  others granted entry to the restricted data, worked inside a secure environment
  with output subject to disclosure review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Usage is sparse and stigma-driven.** Most banks never borrow in normal times;
  borrowing spikes in stress. The data is a selected, episodic signal, not a
  continuous panel, and the decision to borrow is itself informative (stigma).
- **The two-year lag shapes what is usable contemporaneously.** For recent
  periods only the restricted data exists; the public lagged release is unavailable
  for the most recent two years. Match your access route to your sample window.
- **Facility heterogeneity.** Primary, secondary, and seasonal credit, plus
  crisis facilities, have different terms, eligibility, and meaning; pooling them
  conflates very different borrowing. Separate by facility.
- **Borrowing is an outcome, not an exposure.** Whether a bank borrows is an
  endogenous response to its condition; treating window use as exogenous
  mismeasures causality. Be explicit about identification.
- **Mapping to bank identifiers.** Borrowers must be linked to RSSD IDs and other
  bank data; mergers break the link over time. Verify the crosswalk.
- **Output is disclosure-reviewed and cannot be redistributed.** Contemporaneous
  loan-level results leave the secure environment only after review.

## Citation

Cite the source, e.g.: *Federal Reserve discount window lending records,
confidential; accessed under restricted-data arrangement, YYYY-MM-DD* (or the
public Dodd-Frank lagged release for older periods). State the facility, the
sample window, and whether contemporaneous or lagged data was used.
