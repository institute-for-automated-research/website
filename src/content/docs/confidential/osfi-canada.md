---
title: "OSFI federally regulated lender data (Canada, restricted access)"
description: >-
  Contract-level mortgage records for federally regulated Canadian lenders,
  collected by OSFI and reached through the Bank of Canada: lender identity,
  loan size, rate, amortization, LTV, and debt-service ratio. It is restricted
  supervisory data. This page documents what it is and the gotchas, but it was
  not exercised here.
sidebar:
  label: OSFI (Canada)
tags: [mortgages, banks, supervision, canada, data:osfi-canada]
---

:::caution[Restricted supervisory data: not exercised here]
**OSFI federally regulated lender data is confidential supervisory data.** It is
**not for sale and not publicly downloadable**: it carries **no provenance badge**
because there is no access path we can run here. Researchers reach it only through
an approved restricted-data arrangement (in practice through the Bank of Canada),
inside a secure environment, with output subject to disclosure review. The page
documents what the collection is and the gotchas; treat it as unverified. This is
the honest grade under the institute's Verified discipline.
:::

**OSFI federally regulated lender data** is the contract-level mortgage reporting
that federally regulated Canadian lenders submit to the **Office of the
Superintendent of Financial Institutions (OSFI)**, the prudential supervisor of
federal banks and insurers. Each record carries lender identity, loan size,
funding date, monthly payment, outstanding balance, mortgage rate, amortization,
loan-to-value (LTV), and total debt-service ratio. It is a near-complete view of
new federally regulated mortgage lending, used for studies of mortgage pricing and
competition. A paper we distill uses it:
[Allen & Li](/wiki/papers/jf/2025/allen-dynamic-competition-negotiated-price-2025/)
use the OSFI contract-level mortgage data (lender identity, loan size, rate,
amortization, LTV, debt-service ratio) together with Canadian credit-bureau
records to study dynamic competition in negotiated mortgage pricing.

- **Cost:** not for sale. Restricted-access confidential supervisory data.
- **Collector:** OSFI; research access in practice through the Bank of Canada.
- **Coverage:** mortgages originated by federally regulated lenders;
  provincially regulated lenders and credit unions are outside the federal
  perimeter.

## Access (restricted)

- **No public download.** The contract-level microdata is confidential and is not
  posted.
- **Through an approved arrangement, in practice via the Bank of Canada.** Access
  is limited to researchers granted entry to the restricted data, worked inside a
  secure environment with output subject to disclosure review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Federally regulated only, so it is not all mortgages.** Provincially regulated
  lenders, credit unions, and some private lenders are outside the OSFI perimeter;
  the data is the federal slice, not the whole Canadian mortgage market. Do not
  generalize to all lenders.
- **New originations, not the full stock.** The reporting is oriented to newly
  funded mortgages and their terms; it is not a complete outstanding-stock panel.
  Match the new-origination scope to your question.
- **Debt-service and LTV are reported metrics.** TDS/GDS ratios and LTV follow
  the reporting and underwriting definitions, which interact with regulatory
  guidelines (for example the B-20 stress-test rules) that changed over the
  period; a ratio is not a fixed concept across years. Read the definition for
  your window.
- **Lender identity needs linking.** Joining to credit-bureau records and to
  house-price or demographic data requires borrower- and lender-level crosswalks
  under pseudonyms; plan links inside one secure delivery.
- **Regulatory regime breaks.** Mortgage-insurance rules and qualifying-rate
  guidelines shifted over the sample; loan terms respond to policy, not only to
  market conditions. Control for the regulatory regime.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source and access route, e.g.: *OSFI federally regulated lender mortgage
data (Canada), confidential; accessed via the Bank of Canada under restricted-data
arrangement, YYYY-MM-DD.* State the origination window, the LTV/debt-service
definitions, and the regulatory regime in force.
