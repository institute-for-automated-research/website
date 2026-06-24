---
title: "Indifi FinTech loan application records (India, restricted access)"
description: >-
  Loan-level application records from one Indian FinTech lender (Indifi):
  applications with payment-transaction history, applicant characteristics,
  credit-bureau data, and outcomes. It is confidential single-counterparty data.
  This page documents what it is and the gotchas, but it was not exercised here.
sidebar:
  label: Indifi (India)
tags: [fintech, lending, credit, india, data:indifi-loan-applications]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential data from a single FinTech lender** (Indifi
Technologies). It is **not for sale, not publicly downloadable, and not
re-obtainable without the same agreement**: it carries **no provenance badge**
because there is no access path we can run here. Researchers obtained it under a
confidential agreement with the lender. The page documents what the data is and
the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**The Indifi data** is the loan-level application record of one Indian FinTech
lender: complete loan applications with applicant characteristics, the applicant's
**payment-transaction history** (digital payments flowing through the business),
merged credit-bureau scores, and loan outcomes. The payment history is the
distinguishing feature, because it lets the lender (and the researcher) see
cashless-payment flows as a credit signal. A paper we distill uses it:
[Ghosh, Vallee & Zeng](/wiki/papers/jf/2026/ghosh-fintech-lending-cashless-payments-2026/)
use the Indifi application data (316,719 complete applications, September 2015 to
November 2022, with payment records, applicant characteristics, credit-bureau
data, and outcomes) to study how cashless-payment data changes FinTech lending.

- **Cost:** not for sale. Confidential single-counterparty data.
- **Source:** Indifi Technologies (an Indian FinTech lender).
- **Coverage:** applicants to this one lender, not the Indian borrower population;
  loan-level applications and outcomes over the sample window.

## Access (restricted)

- **No public download and no resale.** The data is the lender's confidential
  application records; it cannot be purchased or redistributed.
- **Through a confidential agreement with the lender.** Access required a research
  agreement. There is no standing way for a third party to reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **One lender is a selected applicant pool.** Applicants self-select into this
  FinTech and into its product (small-business lending with payment data); they are
  not the Indian credit market. Do not generalize approval or default patterns.
- **Outcomes are observed only for approved loans.** Repayment is seen for funded
  loans, so default analysis conditions on approval; correcting for the
  approval decision requires the application stage. Model selection into funding.
- **Payment history is platform-specific.** The cashless-payment signal reflects
  flows the lender observes, which depend on the merchant's payment setup; coverage
  of a borrower's total turnover is partial. Do not read it as full revenue.
- **Credit-bureau merge.** Bureau (Cibil) scores are merged in and follow Indian
  bureau definitions and history-length rules; the merge has match error. Verify
  the join.
- **Policy and platform changes over 2015 to 2022.** Demonetization, the growth of
  digital payments, and the lender's own model changes shift the data-generating
  process across the window. Control for regime and vintage.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared and cannot be re-pulled by others. Plan for non-reproducibility of the raw
  inputs.

## Citation

Cite the source and arrangement, e.g.: *Indifi loan-application records (Indifi
Technologies, India), confidential; used under agreement, YYYY-MM-DD.* State the
sample window, the approved-versus-applied scope, and the credit-bureau merge.
