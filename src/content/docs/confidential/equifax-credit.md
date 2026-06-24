---
title: "Equifax consumer-credit records (restricted access)"
description: >-
  Individual-level consumer credit microdata from Equifax (balances,
  delinquency, scores, account types), often reached as an anonymized matched
  panel, plus Equifax payroll-based employment and income verification. It is
  restricted PII, not an off-the-shelf purchase. This page documents what it is
  and the gotchas, but it was not exercised here.
sidebar:
  label: Equifax credit
tags: [consumer-credit, household-finance, credit-bureau, united-states, data:equifax-credit]
---

:::caution[Restricted individual-level data: not exercised here]
**This is restricted Equifax consumer-credit microdata** (personally identifiable
in raw form). It is **not an off-the-shelf research purchase and not publicly
downloadable**: it carries **no provenance badge** because there is no access
path we can run here. Researchers reach it only as an anonymized panel under a
restricted data agreement (for example through the New York Fed Consumer Credit
Panel, or a project-specific Equifax extract). The page documents what the data
is and the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**Equifax consumer-credit records** are individual-level credit-bureau data:
monthly balances, delinquency, credit scores, and account types across a
consumer's tradelines. For research it is usually accessed as an **anonymized
matched panel** (the FRBNY Consumer Credit Panel is one standing example). Equifax
also offers **employment and income verification** built on payroll data (its
"Work Number" product), which links credit outcomes to labor-market outcomes. A
paper we distill uses both:
[Di Maggio, Kalda & Yao](/wiki/papers/jf/2026/maggio-student-debt-second-chance-2026/)
use an anonymized Equifax credit-bureau panel for monthly balances, delinquency,
scores, and account types, and Equifax payroll-based employment/income
verification (5,000-plus U.S. firms) for monthly earnings, hours, and employer,
to study student-debt relief.

- **Cost:** not an off-the-shelf research purchase. Restricted-access individual
  microdata.
- **Source:** Equifax (consumer credit-bureau records; payroll-based income
  verification).
- **Coverage:** consumers with a credit file (effectively most U.S. adults with
  credit history), monthly; the income-verification product covers only employees
  of contributing employers.

## Access (restricted)

- **No public download; PII in raw form.** Raw credit records are personally
  identifiable and cannot be posted; research uses anonymized, matched extracts.
- **Through a restricted data agreement.** Access is via a standing anonymized
  panel (for example the FRBNY Consumer Credit Panel) or a project-specific
  Equifax agreement, under strict privacy terms.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Only the credit-visible population.** People with thin or no credit files are
  under-represented or absent; the panel is not the whole adult population. Do not
  generalize to the unbanked or credit-invisible.
- **Bureau-specific coverage.** A consumer's tradelines appear only if the lender
  reports to Equifax; balances and accounts can differ across bureaus. Do not treat
  one bureau as the complete liability picture.
- **Scores and account types follow vendor definitions.** Credit scores and
  account-type codes are Equifax constructs that change over time; a score is not a
  fixed cross-vintage concept. Pin the score model and codebook.
- **Income verification is selected and partial.** The payroll-based income data
  covers only employees of contributing employers, so it is a non-random slice of
  workers; absence of income is not unemployment. Treat coverage carefully.
- **Anonymized matching introduces error.** Linking the credit panel to income or
  to a treatment population is done on anonymized keys with match error; verify the
  match rate and its selectivity.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared or re-pulled by others. Plan for non-reproducibility of the raw inputs.

## Citation

Cite the source and access route, e.g.: *Equifax consumer-credit records
(anonymized panel; FRBNY Consumer Credit Panel or project-specific extract),
restricted; accessed under data agreement, YYYY-MM-DD*; cite the Equifax
income-verification product separately if used. State the panel, the sample
window, and the score/codebook vintage.
