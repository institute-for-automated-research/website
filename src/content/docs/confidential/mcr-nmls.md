---
title: "NMLS Mortgage Call Report (company-level, restricted access)"
description: >-
  The NMLS Mortgage Call Report collects loan-origination and financial-condition
  data from state-licensed mortgage companies. Aggregate statistics are
  published; the company-level data used in research is restricted. This page
  documents what it is and the gotchas, but it was not exercised here.
sidebar:
  label: MCR (NMLS)
tags: [mortgages, nonbank-lenders, lending, regulatory, data:mcr-nmls]
---

:::caution[Restricted regulatory data: not exercised here]
**The company-level Mortgage Call Report is restricted.** It is collected through
the Nationwide Multistate Licensing System (NMLS) by state regulators and the
Conference of State Bank Supervisors (CSBS). Aggregate statistics are published,
but the **company-level** records used in research carry **no provenance badge**:
there is no open access path we can run here. They are obtained under restricted
regulatory terms (a research agreement with the regulator/CSBS). The page
documents what the collection is and the gotchas; treat it as unverified. This is
the honest grade under the institute's Verified discipline.
:::

**The Mortgage Call Report (MCR)** is the standardized report that state-licensed
mortgage companies (most importantly **nonbank lenders**) file through the
**NMLS**. It contains residential mortgage loan-origination activity (application,
closing, and pipeline volumes by loan type and state) and a financial-condition
component (income, expenses, assets, and liabilities of the licensed company). It
is a leading source for studying nonbank mortgage lenders, which are largely
outside the bank Call Report system. A paper we distill uses it:
[Bhutta, Fuster & Hizmo](/wiki/papers/jf/2026/bhutta-mortgage-overpayment-borrower-sophistication-2026/)
use company-level MCR data (2015:Q1 to 2019:Q4, 162 unique lenders) for nonbank
lender income, expenses, and profitability, merged with Optimal Blue to study how
rate premiums translate into lender margins and how competition moderates
borrower overpayment.

- **Cost:** aggregate statistics are published free; the company-level data is
  obtained under a restricted regulatory arrangement.
- **Collector:** state regulators via the NMLS, administered by the Conference of
  State Bank Supervisors (CSBS).
- **Coverage:** state-licensed mortgage companies (nonbanks and some others);
  origination and financial-condition components, quarterly. Depository
  institutions report mortgage data elsewhere, so the MCR is mainly a nonbank
  view.

## Access (restricted)

- **Aggregates are public; company-level data is not.** The NMLS publishes
  aggregate Mortgage Call Report statistics; the company-level records are not
  openly downloadable.
- **Company-level data is obtained under a regulatory arrangement.** Research use
  of the company-level MCR is granted under restricted terms by the relevant
  regulator or CSBS; it is not a commercial product and not an open download.
- The reporting **form and instructions** are public, so the field definitions
  can be read even though the company-level data cannot be pulled openly.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is a licensee view, not all mortgage lending.** Depository institutions
  report mortgage activity through other channels; the MCR is mainly state-
  licensed nonbanks. Do not read it as the whole mortgage market.
- **Two components with different bases.** The residential-activity component
  (loan volumes) and the financial-condition component (company financials) are
  reported on different bases; do not mix a flow line with a balance-sheet line
  without checking definitions.
- **State-by-state reporting and licensing.** A company licensed in many states
  reports activity by state; aggregation and de-duplication across state lines is
  required to get a clean company total. Watch for double counting.
- **Company identity and entity changes.** Licensed entities merge, rebrand, and
  surrender licenses; the company identifier is not stable across reorganizations.
  Track entity changes when building a panel.
- **Self-reported financials.** The financial-condition data is self-reported by
  licensees and is not audited to bank-Call-Report standards; treat profitability
  measures with appropriate caution.
- **Restricted use.** Company-level results are governed by the regulatory
  agreement; plan for the disclosure and use restrictions of that arrangement.

## Citation

Cite the collection and administrator, e.g.: *NMLS Mortgage Call Report
(company-level), Conference of State Bank Supervisors / state regulators;
obtained under restricted research arrangement, YYYY-MM-DD.* For the public
series, cite the NMLS aggregate Mortgage Call Report statistics. State the
component (activity or financial condition), the sample window, and the lender
universe.
