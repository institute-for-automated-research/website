---
title: "INSEE firm tax and accounting files (restricted access)"
description: >-
  The French firm tax and accounting files (the BIC/FICUS-FARE lineage) are
  administrative firm-level balance sheets and income statements compiled by
  INSEE from DGFiP tax filings. They are restricted administrative microdata
  reached through the CASD secure data centre. This page documents what they are
  and the gotchas, but they were not exercised here.
sidebar:
  label: INSEE tax files
tags: [accounting, firm-financials, france, administrative, data:insee-tax-files]
---

:::caution[Restricted administrative microdata: not exercised here]
**The French firm tax/accounting files are confidential administrative microdata**
(INSEE, from DGFiP tax filings). They are **not for sale and not publicly
downloadable**: they carry **no provenance badge** because there is no access
path we can run here. Researchers reach them only through an approved project at
the **CASD** secure data centre, with output subject to statistical-confidentiality
review. The page documents what the collection is and the gotchas; treat it as
unverified. This is the honest grade under the institute's Verified discipline.
:::

**The French firm tax and accounting files** are the administrative firm-level
financial statements that INSEE compiles from corporate tax filings collected by
the DGFiP (the French tax authority). In the **BIC** (Benefices Industriels et
Commerciaux) regime and its INSEE products (historically BRN/FICUS, later FARE),
they provide balance sheets, income statements, and standard accounting items for
essentially the universe of French firms. They are the French administrative
analog of a firm-fundamentals database, with near-complete coverage rather than a
listed-firm sample. A paper we distill uses them:
[Beaumont, Hebert & Lyonnet](/wiki/papers/rfs/2025/beaumont-build-buy-human-capital-2025/)
use the French tax files (BIC) for subsidiary-level balance sheets and income
statements as firm-level controls, alongside [DADS](/wiki/confidential/insee-dads/)
workforce data and [LIFI](/wiki/confidential/insee-lifi/) ownership links.

- **Cost:** not for sale. Restricted administrative microdata.
- **Producer:** INSEE, compiled from DGFiP tax filings; access via CASD.
- **Coverage:** essentially all French firms filing the relevant tax regimes,
  annual; the product name and exact scope change across the FICUS/FARE vintages.

## Access (restricted)

- **Through the CASD secure data centre.** Approved researchers connect via the
  secure SD-Box; the data never leaves the secure environment and outputs are
  checked before release.
- **Project approval required.** Access requires an approved research project and
  the relevant French confidentiality authorization, granted per project.
- INSEE publishes documentation of the accounting variables and the
  FICUS-to-FARE transition, so the schema can be read even though the data cannot
  be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **A regime break sits in the middle of the panel.** INSEE switched from the
  FICUS product to FARE around the early 2010s, with definitional and
  source changes; a series spanning the break needs explicit reconciliation. Do
  not splice naively.
- **Tax regime determines who appears.** Firms in different tax regimes (BIC
  versus others, micro-regimes, simplified filings) report different items or are
  absent; the sample depends on the regime, not on economic size alone. Check the
  regime for your population.
- **Legal unit, not group.** Statements are at the legal-unit (SIREN) level; to
  study a group you must consolidate using [LIFI](/wiki/confidential/insee-lifi/), or
  you will double-count intra-group flows. Decide consolidation explicitly.
- **Accounting concepts are French GAAP.** Items follow the French chart of
  accounts; mapping to Compustat-style fields is not one-to-one. Map carefully
  before any cross-country comparison.
- **Identifier joins.** Linking to [DADS](/wiki/confidential/insee-dads/) (SIRET) and
  LIFI (SIREN) requires the SIREN/SIRET mapping and care with restructurings.
  Verify the join.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave
  CASD only after confidentiality checks, and the microdata itself cannot be
  shared.

## Citation

Cite the producer and access route, e.g.: *French firm tax/accounting files
(INSEE, from DGFiP), accessed via the CASD secure data centre under approved
project, YYYY-MM-DD.* State the product (for example FICUS or FARE), the years,
and the consolidation level.
