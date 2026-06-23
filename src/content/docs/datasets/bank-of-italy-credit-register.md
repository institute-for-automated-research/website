---
title: "Italian Credit Register (Centrale dei Rischi, restricted access)"
description: >-
  The Centrale dei Rischi is the Bank of Italy's confidential credit register:
  firm-bank loan quantities and interest rates above a reporting threshold,
  alongside the Or.So. bank-board register and supervisory balance-sheet
  reports. It is confidential supervisory data. This page documents what it is
  and the gotchas, but it was not exercised here.
sidebar:
  label: Italy Credit Register
tags: [credit-register, banks, credit, italy, central-bank, data:bank-of-italy-credit-register]
---

:::caution[Confidential supervisory data: not exercised here]
**The Italian Credit Register is confidential supervisory data** held by the Bank
of Italy. It is **not for sale and not publicly downloadable**: it carries **no
provenance badge** because there is no access path we can run here. Researchers
reach it only through a Bank of Italy affiliation or an approved restricted-data
arrangement, inside a secure environment, with output subject to disclosure
review. The page documents what the collection is and the gotchas; treat it as
unverified. This is the honest grade under the institute's Verified discipline.
:::

**The Centrale dei Rischi** is the Bank of Italy's credit register: banks report
their exposures to each borrower above a reporting threshold, so the register
gives **firm-bank loan quantities and interest rates** across the banking system.
Two companion Bank of Italy sources are accessed under the same terms: the
**Or.So.** register of bank board members (who sits on which bank board, at
quarterly frequency) and the **supervisory reports** (bank and banking-group
balance sheets). Together they support credit-supply and bank-competition
research. A paper we distill uses them:
[Barone, Schivardi & Sette](/wiki/papers/jf/2025/barone-interlocking-directorates-competition-banking-2025/)
use the Credit Register for quarterly firm-bank loan quantities and gross
interest rates on overdraft lines, for relationships with total lending above
75,000 euros (2011Q1 to 2014Q4, 3.5 million firm-bank-quarters), Or.So. for
interlocking bank directorships, and the
supervisory reports for bank balance sheets.

- **Cost:** not for sale. Restricted-access confidential supervisory data.
- **Collector:** Bank of Italy (Centrale dei Rischi; Or.So.; supervisory reports).
- **Coverage:** exposures above the reporting threshold across Italian banks,
  monthly/quarterly; the threshold has changed over time, so small exposures move
  in and out of scope.

## Access (restricted)

- **No public download.** The microdata is confidential and is not posted.
- **Through a Bank of Italy affiliation or approved program.** Access is limited
  to researchers at the Bank of Italy or others granted entry to the restricted
  data, worked inside a secure environment with output subject to disclosure
  review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The reporting threshold censors small exposures.** Only exposures above the
  threshold are reported, and the threshold was lowered over time; a borrower can
  appear or disappear for reporting reasons, not economic ones. Do not read a
  missing exposure as no lending.
- **Drawn versus granted.** The register distinguishes credit granted (the
  commitment) from credit drawn (utilization), especially for revolving overdraft
  lines; conflating them mismeasures both supply and demand. Pick the concept that
  matches your question.
- **Interest rates cover specific products.** Rate data is reported for particular
  loan categories (the overdraft/revolving lines), not every exposure; do not
  treat a rate field as the firm's overall borrowing cost.
- **Identifier joins.** Banks (and groups) and firms must be linked across the
  Credit Register, Or.So., the supervisory reports, and any firm-financials source
  (such as the Cerved firm database); mergers and group restructurings break the
  links. Verify the crosswalk and consolidate groups deliberately.
- **Bank versus banking group.** Reporting is at the bank level but ownership is
  at the group level; intra-group exposures and shared boards require the group
  perimeter. Decide consolidation explicitly.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source, e.g.: *Centrale dei Rischi (Bank of Italy), confidential
supervisory data; accessed under restricted-data arrangement, YYYY-MM-DD*; cite
Or.So. and the supervisory reports likewise. State the sample window, the
threshold in force, and the drawn-versus-granted concept used.
