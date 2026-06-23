---
title: "FEK: Swedish Structural Business Statistics (restricted access)"
description: >-
  FEK is Statistics Sweden's firm-level structural business statistics:
  employment, payroll, productivity, and balance-sheet items for Swedish firms.
  It is restricted administrative microdata accessed in SCB's secure
  environment. This page documents what it is and the gotchas, but it was not
  exercised here.
sidebar:
  label: FEK (Sweden)
tags: [firm-financials, productivity, sweden, administrative, data:fek-sweden]
---

:::caution[Restricted administrative microdata: not exercised here]
**FEK is confidential Swedish administrative microdata** (Statistics Sweden /
SCB). It is **not for sale and not publicly downloadable**: it carries **no
provenance badge** because there is no access path we can run here. Researchers
reach it only through an approved project, accessed remotely in SCB's secure
environment (MONA), with output subject to confidentiality review. The page
documents what the collection is and the gotchas; treat it as unverified. This is
the honest grade under the institute's Verified discipline.
:::

**FEK** (Foretagens ekonomi, the Structural Business Statistics) is Statistics
Sweden's firm-level economic register: employment, payroll, value added,
productivity, return on assets, investment, and balance-sheet items for Swedish
firms, compiled from accounts and administrative sources. It is the firm-side
complement to the individual-level [LISA](/wiki/datasets/lisa-sweden/) register
and is the standard source for Swedish firm fundamentals in register-based
research. A paper we distill uses it:
[Olsson & Tag](/wiki/papers/jf/2025/olsson-what-cost-privatization-workers-2025/)
use FEK for firm-level employees, payroll, productivity (value added per
employee), ROA, investment ratio, and leverage, 1997 to 2017, linked to LISA
worker outcomes.

- **Cost:** not for sale. Restricted administrative microdata.
- **Producer:** Statistics Sweden (SCB).
- **Coverage:** Swedish firms on an annual panel; firm identifiers link to LISA
  individuals and to establishment registers.

## Access (restricted)

- **Through SCB's secure remote environment (MONA).** Approved researchers
  access pseudonymized extracts remotely; the microdata does not leave SCB, and
  outputs are checked before release.
- **Project approval required.** Access requires an approved research project;
  data is delivered as a project-specific extract, not an open download.
- SCB publishes documentation of the FEK variables, so the schema can be read
  even though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Firm versus establishment.** FEK is firm-level; linking to worker data in
  [LISA](/wiki/datasets/lisa-sweden/) goes through establishment identifiers, and
  a multi-establishment firm must be handled deliberately. Do not equate firm and
  establishment.
- **Definitional and threshold changes.** The structural business statistics have
  revised variable definitions and reporting frames over time; a long FEK panel is
  not perfectly consistent. Read the documentation for your years.
- **Productivity is a constructed ratio.** Value added per employee depends on how
  value added and headcount are measured; small denominator firms produce
  unstable ratios. Trim or check small firms before using productivity.
- **Coverage of small firms.** Very small firms can be estimated or imputed rather
  than fully reported; do not treat every cell as a clean filing. Check the
  reporting basis by size class.
- **Pseudonymized, project-specific keys.** Firm keys are pseudonyms created per
  delivery; you cannot merge across separately delivered extracts. Plan all links
  inside one delivery.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the producer and access route, e.g.: *Structural Business Statistics (FEK,
Statistics Sweden), accessed via MONA under approved project, YYYY-MM-DD.* State
the years, the firm population, and how firm-to-worker links were built.
