---
title: "LexisNexis court records (licensed)"
description: >-
  LexisNexis aggregates U.S. court filings and public records (civil lawsuits,
  judgments, dockets), the raw material for hand-collected litigation datasets. It
  is licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: LexisNexis court
tags: [court-records, litigation, debt-collection, household-finance, licensed, data:lexisnexis-court]
---

:::caution[Licensed: not exercised here]
**LexisNexis is a paid licensed product** (LexisNexis / RELX), so it carries **no provenance badge**: the access path below was
**not** run in this session. Treat it as unverified until someone exercises it
through a licensed LexisNexis account. This is the honest grade under the
institute's Verified discipline.
:::

**LexisNexis** aggregates U.S. legal and public records: civil and criminal court
filings, dockets, judgments, liens, and related public records, searchable across
jurisdictions. For research it is the source from which **litigation datasets are
hand-collected**, because no single open registry spans all U.S. civil courts. A
paper we distill uses it:
[Di Maggio, Kalda & Yao](/wiki/papers/jf/2026/maggio-student-debt-second-chance-2026/)
hand-collect, from LexisNexis court filings across U.S. civil courts (2010 to
2017), the National Collegiate Student Loan Trusts debt-collection lawsuits
(borrower identity, court, filing date, outcome) and match them to credit-bureau
panels to study what happens when collection suits are dismissed and the debt
discharged.

- **Cost:** licensed, subscription. No free tier for bulk extraction.
- **Vendor:** LexisNexis (RELX).
- **Coverage:** U.S. court filings and public records across federal, state, and
  local jurisdictions, with uneven depth by court; the research asset is typically
  a hand-collected subset matching a named docket, party, or case type.

## Access (when licensed)

- **Through a LexisNexis subscription.** Records are reached via the LexisNexis
  research platform (or CourtLink / public-records products); bulk or programmatic
  extraction needs the appropriate product entitlement and may require a separate
  data agreement.
- **Hand-collection is the norm.** Because coverage and formats vary by court, a
  usable dataset is usually assembled by querying for a specific party, case type,
  or docket and extracting fields by hand or with scripts the licence permits;
  the citing paper's dataset is hand-collected this way.
- **Identity matching is the join.** Court records carry names and addresses, not
  research IDs; linking to credit or administrative data is a name / address /
  date match. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage is uneven across courts.** Jurisdictions digitize and expose filings
  to LexisNexis at different rates; a "national" extract is really the union of
  courts that report, so absence of a case is not absence of litigation. Map which
  courts are covered before treating counts as complete.
- **Records are filings, not outcomes.** A lawsuit record is the filing; the
  disposition (dismissed, settled, judgment) may be in a separate later record or
  missing. Linking filing to outcome is itself work and a source of attrition.
- **Name matching is error-prone.** Matching court parties to a credit panel or
  firm registry on names and addresses produces false positives and missed
  matches, especially for common names; the match rate and rule materially affect
  the sample. Report the matching procedure and rate.
- **Selection into being sued.** Who appears in collection lawsuits is not random
  (it reflects creditor strategy, balance, geography); a sample of sued borrowers
  is selected, so external validity must be argued, not assumed.
- **Redistribution and privacy limits.** Court records contain personal
  identifiers under a restrictive licence; store de-identified derived data, keep
  raw records inside the licence, and do not redistribute. Respect the terms.

## Citation

Cite the vendor and the records used, e.g.: *LexisNexis court records, accessed
YYYY-MM-DD.* State the courts and case type, the date range, that the dataset was
hand-collected, and the identity-matching procedure.
