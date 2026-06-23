---
title: "Statistics Norway administrative registers (restricted access)"
description: >-
  Statistics Norway (SSB) maintains linked individual- and firm-level
  administrative registers: demographics, income, wealth, and balance sheets
  from tax records. Aggregate tables are public; the linked microdata is
  restricted. This page documents what it is and the gotchas, but the microdata
  was not exercised here.
sidebar:
  label: Statistics Norway
tags: [income, wealth, population-register, norway, administrative, data:statistics-norway]
---

:::caution[Mixed: aggregates public, microdata restricted]
**Statistics Norway publishes aggregate tables publicly**, but the **linked
individual- and firm-level microdata is restricted**. This page carries **no
provenance badge**: the microdata has no access path we can run here, and the
public aggregates were not exercised in this session. Microdata is reached only
through an approved project in SSB's secure environment (the microdata access
service), with output subject to confidentiality review. The page documents what
the registers are and the gotchas; treat it as unverified. This is the honest
grade under the institute's Verified discipline.
:::

**Statistics Norway** (Statistisk sentralbyra, SSB) maintains the Norwegian
administrative registers: population demographics, employment, income, and the
tax-based household balance sheet (financial assets, real assets, and debt), all
linkable at the individual level through national identifiers and to firms. The
tax-record wealth data is especially detailed because Norway levies a wealth tax,
so household balance sheets are reported annually. A paper we distill uses it:
[Betermier, Calvet, Knupfer & Kvaerner](/wiki/papers/jf/2025/betermier-investor-factors-2025/)
use SSB tax records for investor demographics, balance sheets, income, and wealth
(annual, 1997 to 2017), linked to individual stockholdings from
[VPS](/wiki/datasets/vps-norway/).

- **Cost:** aggregate tables are free; the linked microdata is not for sale.
- **Producer:** Statistics Norway (SSB).
- **Coverage:** the full resident population and Norwegian firms on annual panels,
  with national identifiers enabling individual, household, and firm linkage.

## Access (restricted)

- **Aggregates are public; microdata is not.** SSB publishes statistics and tables
  openly; the linked individual/firm microdata is confidential.
- **Through SSB's secure microdata service.** Approved researchers access
  pseudonymized extracts in a secure environment; the microdata does not leave
  SSB, and outputs are checked before release.
- **Project approval required.** Access requires an approved research project and
  the relevant authorization; data is a project-specific extract, not an open
  download.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Tax-record wealth is a year-end snapshot at assessed values.** Balance-sheet
  items are reported for tax purposes at year-end and at assessed (not always
  market) values; this affects real estate and unlisted assets especially. Do not
  treat assessed values as market values without adjustment.
- **Linkage keys are pseudonymized per project.** Individual and firm keys are
  pseudonyms tied to a delivery; you cannot merge across separately delivered
  extracts. Plan all links inside one delivery.
- **Household versus individual.** Many outcomes are individual but tax and wealth
  concepts can be household-level; mixing the two double-counts or misattributes.
  Fix the unit before aggregating.
- **Definitional changes and the wealth-tax regime.** Income and wealth concepts
  follow tax rules that change over time; a long panel is not perfectly
  consistent. Read the documentation for your years.
- **Coverage of assets.** Listed-equity and bank-reported items are well measured;
  some assets (private business, foreign holdings) are less complete. Do not read
  a missing asset as zero.
- **Output is disclosure-reviewed and cannot be redistributed.** Microdata
  results leave the secure environment only after review.

## Citation

Cite the producer and access route, e.g.: *Statistics Norway (SSB) administrative
registers, accessed via the SSB secure microdata service under approved project,
YYYY-MM-DD.* For public figures, cite the relevant SSB statistics. State the
years, the unit (individual or household), and the registers linked.
