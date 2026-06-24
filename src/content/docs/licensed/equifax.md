---
title: "Equifax traditional credit-bureau data (licensed)"
description: >-
  Equifax traditional consumer credit-bureau records (installment and revolving
  balances, limits, credit scores) obtained under a commercial research licence.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: Equifax
tags: [consumer-credit, household-finance, credit-bureau, licensed, data:equifax]
---

:::caution[Licensed: not exercised here]
**Equifax credit-bureau data is a paid licensed product** (Equifax), so it sits
in the *Licensed* tier and carries **no provenance badge**: the access path below
was **not** run in this session (no Equifax research licence was available), and
the records are individual-level. The page documents the access route and the
gotchas; treat it as unverified until someone exercises it through a licensed
arrangement. This is the honest grade under the institute's Verified discipline.
:::

**Equifax traditional credit-bureau data** is the mainstream consumer-credit
record: installment and revolving balances, credit limits, credit scores, and
balances in good standing across a consumer's tradelines, obtained under a
**commercial research licence**. This page covers the licensed-commercial access
route; the closely related confidential route (the FRBNY Consumer Credit Panel
and other PII extracts) is documented separately at
[Equifax consumer-credit records](/wiki/datasets/equifax-credit/). A paper we
distill uses the licensed traditional bureau:
[Di Maggio, Ma & Williams](/wiki/papers/jf/2025/maggio-red-overdrafts-payday-lending-2025/)
use Equifax for installment borrowing, credit-card balances and limits, credit
scores, and total balances in good standing (a representative 10% sample of
680,856 borrowers, 2005 to 2018), paired with alternative-bureau
[Clarity Services](/wiki/licensed/clarity-services/) records.

- **Cost:** licensed, commercial research arrangement. No free tier; individual
  records.
- **Vendor:** Equifax.
- **Coverage:** U.S. consumers with a traditional credit file (most adults with
  credit history), with tradeline-level balances, limits, and scores; the
  credit-visible population only.

## Access (when licensed)

- **Through a commercial research licence.** Anonymized borrower-level extracts
  are obtained under an Equifax research agreement; raw records are personally
  identifiable.
- **Related confidential route.** The FRBNY Consumer Credit Panel (a random sample
  of Equifax files) and project-specific PII extracts are a separate, more
  restricted path, documented at
  [Equifax consumer-credit records](/wiki/datasets/equifax-credit/).

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Credit-visible population only.** Consumers with thin or no file are
  under-represented or absent; the sample is not the whole adult population. Do not
  generalize to the credit-invisible.
- **Bureau-specific coverage.** A tradeline appears only if the lender reports to
  Equifax; balances and accounts can differ across the three bureaus. Do not treat
  one bureau as the complete liability picture.
- **Traditional credit only.** Equifax sees mainstream installment and revolving
  credit, not payday/alternative products; pair it with an alternative bureau (for
  example [Clarity Services](/wiki/licensed/clarity-services/)) for the nonprime
  segment.
- **Scores and fields are vendor constructs.** Credit scores and account-type codes
  are Equifax constructions that change over time; a score is not a fixed
  cross-vintage or cross-bureau concept. Pin the score model and codebook.
- **Snapshot timing and reporting lags.** Tradelines update on lender reporting
  cycles, so a period's balance can lag actual events. Be explicit about the
  reporting-date basis.
- **Not redistributable.** Results can be reported but the individual-level
  microdata cannot be shared. Plan accordingly.

## Citation

Cite the vendor and route, e.g.: *Equifax consumer-credit records, accessed under
commercial research licence, YYYY-MM-DD.* State the borrower sample, the date
range, the fields used, and the score/codebook vintage.
