---
title: "FDIC construction-loan servicing records (restricted access)"
description: >-
  Loan-level construction-loan servicing data for a single failed bank held by
  the FDIC: terms, draw requests, on-site inspection reports, and outcomes. It
  is confidential FDIC data. This page documents what it is and the gotchas, but
  it was not exercised here.
sidebar:
  label: FDIC construction loans
tags: [banks, credit, real-estate, monitoring, fdic, data:fdic-construction-loans]
---

:::caution[Confidential FDIC data: not exercised here]
**This is confidential FDIC loan-servicing data** for a single failed bank. It is
**not for sale and not publicly downloadable**: it carries **no provenance badge**
because there is no access path we can run here. Researchers reach it only through
an FDIC affiliation or an approved restricted-data arrangement, inside a secure
environment, with output subject to disclosure review. The page documents what
the collection is and the gotchas; treat it as unverified. This is the honest
grade under the institute's Verified discipline.
:::

**The FDIC construction-loan servicing records** are the loan-level servicing
files for the construction-loan book of **one failed bank**, held by the FDIC as
receiver. Their distinguishing feature is the **draw-request and on-site
inspection** detail: each construction loan funds in stages against physical
inspections, so the data records inspection dates, inspection reports, draw
requests, loan terms, borrower identifiers, and default outcomes. It lets
researchers observe bank monitoring at the loan-action level. A paper we distill
uses it:
[Heitz, Martin & Ufier](/wiki/papers/jf/2026/heitz-bank-monitoring-onsite-inspections-2026/)
use it as the primary dataset (about 11.6 million loan-day observations, 28,939
loans, roughly ten years) to study how on-site inspections affect monitoring and
moral hazard.

- **Cost:** not for sale. Restricted-access confidential FDIC data.
- **Source:** the FDIC (records of a failed bank held in receivership).
- **Coverage:** the construction-loan portfolio of a single failed institution
  over its history; it is one bank, not a system-wide sample.

## Access (restricted)

- **No public download.** The servicing microdata is confidential and is not
  posted.
- **Through an FDIC affiliation or approved program.** Access is limited to
  researchers at the FDIC or others granted entry to the restricted data, worked
  inside a secure environment with output subject to disclosure review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is one bank.** The data is the portfolio of a single failed institution, so
  external validity is the central caveat; patterns may reflect that bank's
  practices, region, and cycle. Do not generalize to the banking system without
  argument.
- **Construction loans are staged and unusual.** Funds disburse in draws against
  inspections, so balances rise over the loan's life and a "draw" is not a new
  loan; standard loan-level conventions (one balance, one origination) do not
  apply. Model the draw schedule explicitly.
- **Loan-day structure inflates observation counts.** The ~11.6M figure is
  loan-days, not loans; clustering and serial correlation within a loan are severe.
  Cluster at the loan (and borrower) level.
- **Inspection timing is partly endogenous.** Inspections are triggered by draw
  requests and by the bank's own concern; treating inspection timing as exogenous
  mismeasures the monitoring effect. Be explicit about identification.
- **A failed bank is a selected sample over time.** The portfolio is observed up
  to and through failure, so later vintages are conditioned on the bank's
  deterioration. Watch for survivorship within the book.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source, e.g.: *FDIC construction-loan servicing records (single failed
bank), confidential; accessed under restricted-data arrangement, YYYY-MM-DD.*
State the observation unit (loan-day versus loan), the clustering, and the caveat
that it is one institution.
