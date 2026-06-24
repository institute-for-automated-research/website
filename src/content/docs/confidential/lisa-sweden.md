---
title: "LISA: Swedish longitudinal population register (restricted access)"
description: >-
  LISA is Statistics Sweden's individual-level longitudinal register covering
  the entire resident population: annual labor-market, income, transfer,
  education, and family records, with the Wealth Register accessed under the same
  terms. It is restricted administrative microdata. This page documents what it
  is and the gotchas, but it was not exercised here.
sidebar:
  label: LISA (Sweden)
tags: [labor, income, wealth, population-register, sweden, administrative, data:lisa-sweden]
---

:::caution[Restricted administrative microdata: not exercised here]
**LISA is confidential Swedish administrative microdata** (Statistics Sweden /
SCB). It is **not for sale and not publicly downloadable**: it carries **no
provenance badge** because there is no access path we can run here. Researchers
reach it only through an approved project with an ethics approval, accessed
remotely in SCB's secure environment (MONA), with output subject to
confidentiality review. The page documents what the collection is and the
gotchas; treat it as unverified. This is the honest grade under the institute's
Verified discipline.
:::

**LISA** (the longitudinal integrated database for health insurance and
labor-market studies) is Statistics Sweden's register linking **every resident**
aged 16 and over across years (the lower bound was later extended to include
15-year-olds), with annual records on employment, wages, unemployment, transfers,
family structure, and education. Combined with the **Wealth Register** (accessed
under the same terms, covering 1999 to 2007, when the wealth tax was abolished),
it supports population-wide labor and household-finance research. A paper we
distill uses it:
[Olsson & Tag](/wiki/papers/jf/2025/olsson-what-cost-privatization-workers-2025/)
use LISA for individual-level wages, unemployment, transfers, family structure,
education, and wealth for all Swedish residents (the paper states aged 15 and
over), 1990 to 2017, alongside the firm-level [FEK](/wiki/confidential/fek-sweden/)
statistics.

- **Cost:** not for sale. Restricted administrative microdata.
- **Producer:** Statistics Sweden (SCB).
- **Coverage:** the full resident population on an annual panel, with linkable
  individual, family, firm, and establishment identifiers; the Wealth Register
  component ends in 2007.

## Access (restricted)

- **Through SCB's secure remote environment (MONA).** Approved researchers
  access pseudonymized extracts remotely; the microdata does not leave SCB, and
  outputs are checked before release.
- **Project and ethics approval required.** Access requires an approved research
  project and a Swedish ethics review; data is delivered as a project-specific
  extract, not an open download.
- SCB publishes documentation of the LISA and Wealth Register variables, so the
  schema can be read even though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The Wealth Register ends in 2007.** Sweden abolished the wealth tax effective
  2007, so the register covers 1999 to 2007 and individual wealth, risky assets,
  and debt are not available afterward; any later wealth analysis must use a
  different source or stop there. Do not extrapolate wealth past the register's
  end, and mind the income-year versus file-year distinction when pinning the last
  usable year.
- **Pseudonymized linkage keys, project-specific.** Individual and firm keys are
  pseudonyms created per delivery; you cannot merge across separately delivered
  extracts, and keys are not comparable to other projects. Plan all links inside
  one delivery.
- **Annual snapshots miss within-year dynamics.** LISA records an annual
  position (often a reference week or year-end); job changes and spells within
  the year are coarsened. Match your timing to the annual structure.
- **Variable definitions and the population frame change.** Income, employment,
  and education concepts have been revised, and the lower age cutoff and frame
  have changed over time; a long panel is not perfectly consistent. Read the
  documentation for your years.
- **Firm/establishment links need the right registers.** Linking individuals to
  employers requires the establishment identifier and the matched registers;
  joining to [FEK](/wiki/confidential/fek-sweden/) firm data must respect the
  firm-versus-establishment distinction.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the producer and access route, e.g.: *LISA and the Wealth Register
(Statistics Sweden), accessed via MONA under approved project, YYYY-MM-DD.* State
the years, the population frame, and whether the Wealth Register (through 2007)
was used.
