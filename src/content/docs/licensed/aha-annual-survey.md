---
title: "AHA Annual Survey Database (licensed)"
description: >-
  The American Hospital Association Annual Survey Database tracks U.S. hospital
  services, operations, beds, staffing, and system affiliation. It is licensed:
  this page documents the access path and the gotchas, but the data was not
  exercised here.
sidebar:
  label: AHA Annual Survey
tags: [hospitals, healthcare, organizations, survey, administrative, licensed, data:aha-annual-survey]
---

:::caution[Licensed: not exercised here]
**The AHA Annual Survey is a paid licensed product** (American Hospital
Association), so it sits in the *Licensed* tier and carries **no provenance
badge**: the access path below was **not** run in this session. Treat it as
unverified until someone exercises it through an AHA data licence. This is the
honest grade under the institute's Verified discipline.
:::

**The AHA Annual Survey Database** is the standard census of U.S. hospitals: an
annual organization-level record of services offered, bed counts, admissions,
staffing, ownership type, control (nonprofit, for-profit, government), and
system or network affiliation. It is the standard source for the hospital
denominator in health-economics and hospital-finance research, usually joined
to financial filings (IRS Form 990, Medicare cost reports) on a hospital
identifier. A paper we distill uses it:
[Lewellen](/wiki/papers/jf/2025/lewellen-women-charge-evidence-hospitals-2025/)
uses the AHA Annual Survey (2000 to 2018) for hospital services, operations, and
system affiliation alongside IRS Form 990 financials in a study of female
hospital CEOs.

- **Cost:** licensed, subscription. No free tier; academic licences are
  available, often through a data distributor.
- **Vendor:** American Hospital Association (AHA Data). Academic copies are
  frequently obtained via the Dartmouth Institute or a university library.
- **Coverage:** annual, organization-level, all U.S. registered hospitals
  (community, federal, specialty), going back decades; affiliation and system
  fields make it a standard source for tracking consolidation.

## Access (when licensed)

- **Through an AHA data licence.** Extracts are delivered as annual flat files
  (one record per hospital per year) under a use agreement; many researchers
  receive them through an institutional subscription rather than directly.
- **Stable hospital identifier.** The AHA ID is the linking key to Medicare
  cost reports (via a crosswalk) and other hospital data; build joins on it
  rather than on hospital name.
- Credentials or a signed agreement are required. Keep any credentials in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is a survey, so response and item completeness vary.** Not every
  hospital responds every year, and individual fields can be blank or imputed
  by the AHA. A field present in one year may be missing in the next for the
  same hospital. Check the completeness flags before treating a series as a
  panel.
- **The unit is the hospital, not the system.** A multi-hospital system appears
  as several records; system affiliation is a field, not the row grain. Studies
  of consolidation must aggregate carefully and watch for re-affiliation across
  years.
- **Definitions and questionnaire fields change over time.** Service
  categories, bed-type breakdowns, and ownership codes have been revised across
  survey vintages; a variable name can refer to different things in different
  years. Reconcile against the year-specific documentation before pooling.
- **Linking to financial filings is many-to-one and lossy.** One IRS Form 990
  or cost-report entity can span several AHA hospitals (and vice versa); the
  crosswalk is approximate. The citing paper joins AHA operational data to Form
  990 financials, exactly the kind of merge where mismatches drop observations.
- **No patient-level or clinical-outcome data.** The survey is organizational
  (capacity, services, ownership), not clinical; quality and outcome measures
  come from separate sources (CMS metrics, HCRIS). Do not expect mortality or
  readmission fields here.

## Citation

Cite the source and product, e.g.: *AHA Annual Survey Database (American
Hospital Association), [year(s)], accessed YYYY-MM-DD.* State the survey years
used, how missing or imputed fields were handled, and the identifier used to
link to financial or outcome data.
