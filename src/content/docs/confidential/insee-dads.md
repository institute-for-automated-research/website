---
title: "INSEE DADS: French matched employer-employee data (restricted access)"
description: >-
  DADS is the French administrative matched employer-employee dataset: annual
  social declarations linking workers to establishments, with earnings,
  occupation, and hours. It is restricted administrative microdata reached
  through the CASD secure data centre. This page documents what it is and the
  gotchas, but it was not exercised here.
sidebar:
  label: INSEE DADS
tags: [labor, matched-employer-employee, france, administrative, data:insee-dads]
---

:::caution[Restricted administrative microdata: not exercised here]
**DADS is confidential French administrative microdata** (INSEE). It is **not for
sale and not publicly downloadable**: it carries **no provenance badge** because
there is no access path we can run here. Researchers reach it only through an
approved project at the **CASD** (Centre d'acces securise aux donnees) secure
data centre, with output subject to statistical-confidentiality review. The page
documents what the collection is and the gotchas; treat it as unverified. This is
the honest grade under the institute's Verified discipline.
:::

**DADS** (Declarations Annuelles des Donnees Sociales) is the French
administrative matched employer-employee dataset built from the annual social
declarations that employers must file. It links **workers to establishments**
with earnings, occupation (the detailed PCS occupation codes), hours, and
contract information, covering essentially the universe of salaried employment.
It is the French analog of the matched employer-employee panels used in labor
and firm research. A paper we distill uses it:
[Beaumont, Hebert & Lyonnet](/wiki/papers/rfs/2025/beaumont-build-buy-human-capital-2025/)
use DADS for firm-level workforce composition by 4-digit occupation code (414
codes) to compute a human-capital distance between firms, alongside
[LIFI](/wiki/confidential/insee-lifi/) ownership links and
[firm tax files](/wiki/confidential/insee-tax-files/).

- **Cost:** not for sale. Restricted administrative microdata.
- **Producer:** INSEE (the French national statistical institute); access via
  CASD.
- **Coverage:** essentially the universe of salaried jobs in France over a long
  annual panel; establishment and worker identifiers allow matching across years.

## Access (restricted)

- **Through the CASD secure data centre.** Approved researchers connect to CASD
  via a dedicated secure device (the SD-Box); the data never leaves the secure
  environment, and outputs are checked before release.
- **Project approval required.** Access requires an approved research project and
  the relevant French confidentiality authorization; it is granted per project,
  not as an open download.
- INSEE publishes documentation of the DADS variables and concepts, so the schema
  can be read even though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Identifiers and their changes are the whole game.** Worker (NIR-derived) and
  establishment (SIRET) identifiers are pseudonymized and can change across
  vintages and reforms; a naive year-over-year join loses spells. Use the
  official panel identifiers and watch identifier breaks.
- **DADS has had major format changes.** The collection moved through the DADS
  "postes," DADS-U, and later DSN regimes; variable definitions and the unit of
  observation differ across these. Read the documentation for your exact years.
- **Occupation codes are detailed but revised.** The PCS occupation
  classification has versions; a 4-digit code is not stable across reclassifications.
  Pin the classification vintage when building occupation-based measures.
- **Establishment, not firm.** The base unit is the establishment (SIRET); rolling
  up to the firm (SIREN) requires the establishment-to-firm mapping and care with
  multi-establishment firms. Do not treat an establishment as a firm.
- **Censoring and truncation in earnings.** Earnings concepts and any top/bottom
  treatment follow the declaration rules; do not assume a clean uncensored wage.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave
  CASD only after confidentiality checks, and the microdata itself cannot be
  shared.

## Citation

Cite the producer and access route, e.g.: *DADS (INSEE), accessed via the CASD
secure data centre under approved project, YYYY-MM-DD.* State the years, the unit
(establishment or firm), and the occupation-classification vintage.
