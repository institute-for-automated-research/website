---
title: "STBL: Survey of Terms of Business Lending (restricted access)"
description: >-
  The Federal Reserve's Survey of Terms of Business Lending collected
  loan-level commercial-and-industrial loan terms and internal risk ratings from
  reporting banks. Aggregates were published (E.2); the loan-level data is
  confidential. This page documents what it is and the gotchas, but it was not
  exercised here.
sidebar:
  label: STBL (Fed)
tags: [banks, credit, business-lending, banking, federal-reserve, data:stbl-fed]
---

:::caution[Confidential supervisory data: not exercised here]
**STBL loan-level data is confidential** and was collected by the Federal
Reserve. Published aggregates (the E.2 release) are public, but the
**loan-level** records carry **no provenance badge**: there is no access path we
can run here. Researchers reach the loan-level data only through a Federal
Reserve affiliation or an approved restricted-data arrangement, inside a secure
environment, with output subject to disclosure review. The page documents what
the collection is and the gotchas; treat it as unverified. This is the honest
grade under the institute's Verified discipline.
:::

**STBL** (the Survey of Terms of Business Lending) was a quarterly Federal
Reserve survey in which a sample of banks reported the terms of a sample of new
**commercial-and-industrial (C&I) loans** made during a survey week: amount,
rate, maturity, collateral, commitment status, and the bank's **internal risk
rating** (a 1 to 5 scale). It is a standard source for loan pricing and loan-risk
research. The survey ran from roughly 1977 to 2017 (when the Fed discontinued the
E.2 release); the internal risk-rating component was added in 1997, so the
risk-rating studies start there. A paper we distill uses it:
[Falato & Scharfstein](/wiki/papers/jf/2025/falato-stock-market-bank-risk-2025/)
use the STBL loan risk rating as a measure of the riskiness of new lending when
studying how going public affects bank risk-taking (their sample runs through
2012, the end of their broader panel, not the end of the survey).

- **Cost:** not for sale at the loan level. The E.2 aggregates were published
  free.
- **Collector:** Federal Reserve Board (the STBL collection; E.2 release).
- **Coverage:** a sample of banks reporting a sample of new C&I loans, quarterly.
  The survey ran from roughly 1977 to 2017; the internal risk rating is available
  from 1997 on. It is a sample of loans, not a census.

## Access (restricted)

- **The E.2 aggregates are public; the loan-level data is not.** The Fed
  published the aggregate Survey of Terms of Business Lending (E.2) release; the
  loan-level micro-records are confidential.
- **Through a Federal Reserve affiliation or approved program.** Loan-level
  access is limited to researchers at the Federal Reserve System or others
  granted entry to the restricted data, worked inside a secure environment with
  output subject to disclosure review.
- The survey was **discontinued in 2017**, so it covers a closed historical
  window; there is no ongoing collection.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is a sample of loans in a survey week, not all lending.** A reporting bank
  submits a sample of loans made during the survey week, so the data is a
  stratified sample, not the bank's full loan book. Use the survey weights; do
  not treat counts as totals.
- **Internal risk ratings are bank-specific.** The 1 to 5 risk rating is mapped
  from each bank's own internal grades, so the scale is not strictly comparable
  across banks. Treat cross-bank rating comparisons with care.
- **The survey ended in 2017 and the risk rating starts in 1997.** Risk-rating
  analysis is bounded below by 1997 (when the rating was added) and above by 2017
  (when the E.2 release was discontinued); there is no continuation past then. Do
  not extrapolate the series outside that window, and do not confuse a paper's own
  sample end with the survey's end.
- **New loans only, C&I only.** The survey captures terms of newly made C&I
  loans, not outstanding balances or other loan types. Match your question to the
  new-loan, C&I scope.
- **Definitions and the sampling frame changed.** Reporting panels and
  definitions were revised across the survey's life; a field can change basis
  between vintages. Read the instructions for your period.
- **Output is disclosure-reviewed and cannot be redistributed.** Loan-level
  results leave the secure environment only after review.

## Citation

Cite the collection and collector, e.g.: *Survey of Terms of Business Lending
(STBL), Federal Reserve Board, confidential loan-level data; accessed under
restricted-data arrangement, YYYY-MM-DD.* For the public series, cite the E.2
release. State the sample window (the risk rating is available from 1997; the
survey ended in 2017) and the use of survey weights.
