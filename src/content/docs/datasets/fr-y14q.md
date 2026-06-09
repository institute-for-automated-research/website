---
title: "FR Y-14Q: confidential bank supervisory data (restricted access)"
description: >-
  FR Y-14Q is the Federal Reserve's quarterly stress-test data collection from
  large bank holding companies: loan-level corporate (H.1) and commercial real
  estate (H.2) records and more. It is confidential supervisory data: this page
  documents what it is and the gotchas, but it was not exercised here and is not
  publicly accessible.
sidebar:
  label: FR Y-14Q
  order: 30
tags: [banks, credit, banking, federal-reserve, panel-data, data:fr-y14q]
---

:::caution[Confidential supervisory data: not exercised here]
**FR Y-14Q is confidential supervisory data** collected by the Federal Reserve.
It is **not for sale and not publicly downloadable**: it carries **no provenance
badge** because there is no access path we can run here. Researchers reach it
only through a Federal Reserve, FDIC, or OCC affiliation or an approved
restricted-data arrangement, inside a secure environment, and results are
subject to disclosure review. The page documents what the collection is and the
gotchas; treat it as unverified. This is the honest grade under the institute's
Verified discipline.
:::

**FR Y-14Q** is the **quarterly** data collection that supports the Federal
Reserve's stress tests (CCAR / DFAST). Large bank holding companies report
detailed, often **loan-level**, records across many schedules. The two
schedules most used in credit research are **Schedule H.1 (corporate loans)**
and **Schedule H.2 (commercial real estate)**, which carry loan terms, interest
rates, the bank's own probability-of-default (PD) and loss-given-default (LGD)
estimates, borrower financials, and utilization. It is used in, for example
[Beyhaghi, Fracassi & Weitzner](/wiki/papers/jf/2026/beyhaghi-adverse-selection-corporate-loans-2026/)
for loan-level interest rates, PD, LGD, and firm financials (2014Q4 to 2019Q4),
[Cooperman, Duffie, Luck, Wang & Yang](/wiki/papers/jf/2025/cooperman-bank-funding-risk-reference-2025/)
for loan-level credit commitments and utilization, and
[Greenwald, Krainer & Paul](/wiki/papers/jf/2025/greenwald-credit-line-channel-2025/)
for the credit-line draw analysis.

- **Cost:** not for sale. Restricted-access confidential supervisory data.
- **Collector:** Federal Reserve Board (the FR Y-14Q collection).
- **Coverage:** bank holding companies above the stress-test asset threshold;
  loan-level and aggregate schedules, quarterly. The reporting population and
  threshold have changed over time, so the panel is not fixed.

## Access (restricted)

- **No public download.** Unlike the Fed's published statistical releases, the
  microdata is confidential and is not posted on the Fed website or FRED.
- **Through a supervisory affiliation or approved program.** Access is limited to
  researchers at the Federal Reserve System, the FDIC, the OCC, or others
  granted entry to the restricted data, worked inside a secure environment with
  output subject to disclosure review.
- The published **form and instructions** are public (the Fed posts the FR Y-14Q
  reporting templates), so the schedule and field definitions can be read even
  though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage is only large BHCs, so it is not the banking system.** Only holding
  companies above the stress-test asset threshold report, so the sample is a
  selected set of the largest banks. Do not generalise loan-level findings to
  community or mid-size banks.
- **The reporting threshold and population changed over time.** The asset
  threshold and the set of filers shifted across the 2010s, which breaks the
  panel: firms enter and exit the collection for regulatory reasons, not
  economic ones. Control for the changing population.
- **Loan-level corporate detail starts mid-decade.** The collection began early
  in the 2010s, but the granular loan-level corporate (H.1) reporting builds up
  over time; check the field-by-field start date for the window you use.
- **PD and LGD are the banks' own model outputs.** Risk estimates are produced by
  each reporting bank's internal models, so they are heterogeneous across filers
  and not a common-methodology benchmark. Treat cross-bank comparisons of PD/LGD
  with care.
- **Definitions change across collection vintages.** Schedules and instructions
  are revised over the years; a field can change meaning or reporting basis
  between vintages. Read the form instructions for your sample period.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave
  the secure environment only after review, and the microdata itself cannot be
  shared. Plan for aggregation and review when designing what you report.

## Citation

Cite the collection and collector, e.g.: *FR Y-14Q (Federal Reserve Board),
confidential supervisory data; accessed under restricted-data arrangement,
YYYY-MM-DD.* State the schedule (for example H.1 or H.2), the sample window, and
the reporting population for your period.
