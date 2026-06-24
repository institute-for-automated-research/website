---
title: "Clarity Services: alternative-credit bureau (licensed)"
description: >-
  Clarity Services (an Experian company) is a specialty credit bureau for
  subprime and alternative credit: payday, installment, and other nonprime loan
  records. It is licensed: this page documents the access path and the gotchas,
  but the data was not exercised here.
sidebar:
  label: Clarity Services
tags: [consumer-credit, subprime, payday-lending, credit-bureau, licensed, data:clarity-services]
---

:::caution[Licensed: not exercised here]
**Clarity Services data is a paid licensed product** (Clarity Services, an
Experian company), so it carries **no provenance
badge**: the access path below was **not** run in this session (no Clarity
credentials were available), and the records are individual-level. The page
documents the access route and the gotchas; treat it as unverified until someone
exercises it through a licensed research arrangement. This is the honest grade
under the institute's Verified discipline.
:::

**Clarity Services** is a specialty (alternative) consumer credit bureau, now part
of Experian, that covers the **subprime and nonprime** segment that traditional
bureaus see poorly: payday loans, single-payment and installment small-dollar
loans, rent-to-own, and similar products. It records loan-level applications,
disbursements, terms, and performance for these alternative-credit borrowers. It
is the standard data source for research on payday and small-dollar lending. A
paper we distill uses it:
[Di Maggio, Ma & Williams](/wiki/papers/jf/2025/maggio-red-overdrafts-payday-lending-2025/)
use Clarity Services as the primary outcome source for payday and alternative
installment loans disbursed 2013 to 2019 (a random sample of 171,445 alternative
borrowers), paired with traditional-bureau [Equifax](/wiki/commercial/equifax/)
records.

- **Cost:** licensed, commercial research arrangement. No free tier; individual
  records.
- **Vendor:** Clarity Services (an Experian company).
- **Coverage:** subprime/alternative-credit borrowers and products in the U.S.;
  strong where traditional bureaus are thin, but only for the alternative-credit
  segment.

## Access (when licensed)

- **Through a commercial research licence.** Loan-level extracts are obtained
  under an agreement with Clarity/Experian, anonymized for research; raw records
  are personally identifiable.
- **Keyed to borrowers and loans.** An extract is applications and loans with
  terms and performance for a borrower sample over a date range.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Alternative-credit segment only.** Clarity sees subprime/nonprime products,
  not a borrower's prime or mainstream credit; it is the complement to a
  traditional bureau, not a substitute. Pair it with a traditional bureau (for
  example [Equifax](/wiki/commercial/equifax/)) for the full picture.
- **Coverage depends on contributing lenders.** A loan appears only if the lender
  reports to Clarity; coverage of the payday/small-dollar market is partial and
  varies by product and state. Do not read absence as no borrowing.
- **Inquiries versus funded loans.** Applications and inquiries are distinct from
  disbursed loans; outcomes are observed for funded loans, so default analysis
  conditions on funding. Separate the application and disbursement stages.
- **State regulation shapes the data.** Payday lending is legal and structured
  differently across states (and changed over the sample); product mix and terms
  reflect regulation, not just demand. Control for the state regime.
- **Anonymized matching to other bureaus.** Linking Clarity to a traditional
  bureau is on anonymized keys with match error; verify the match rate and its
  selectivity.
- **Not redistributable.** Results can be reported but the individual-level
  microdata cannot be shared. Plan accordingly.

## Citation

Cite the vendor, e.g.: *Clarity Services (Experian), accessed under commercial
research licence, YYYY-MM-DD.* State the product scope, the borrower sample, the
date range, and any match to a traditional bureau.
