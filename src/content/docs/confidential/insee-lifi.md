---
title: "INSEE LIFI: French inter-firm ownership links (restricted access)"
description: >-
  LIFI is INSEE's administrative determination of business-group structure in
  France: which firms control which, used to assemble corporate groups from
  ownership links. It is restricted administrative microdata reached through the
  CASD secure data centre. This page documents what it is and the gotchas, but
  it was not exercised here.
sidebar:
  label: INSEE LIFI
tags: [ownership, business-groups, france, administrative, data:insee-lifi]
---

:::caution[Restricted administrative microdata: not exercised here]
**LIFI is confidential French administrative microdata** (INSEE). It is **not for
sale and not publicly downloadable**: it carries **no provenance badge** because
there is no access path we can run here. Researchers reach it only through an
approved project at the **CASD** secure data centre, with output subject to
statistical-confidentiality review. The page documents what the collection is and
the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**LIFI** (Enquete sur les Liaisons Financieres entre societes) is INSEE's
determination of the **financial links between firms** in France: who owns and
controls whom, used to reconstruct business-group (groupe) structure and to
assign each legal unit to a controlling group. It is the standard source for
defining French corporate groups and parent-subsidiary relationships. A paper we
distill uses it:
[Beaumont, Hebert & Lyonnet](/wiki/papers/rfs/2025/beaumont-build-buy-human-capital-2025/)
use LIFI to identify business-group structure and subsidiaries and to link firms
to their M&A targets, alongside [DADS](/wiki/confidential/insee-dads/) workforce data
and [firm tax files](/wiki/confidential/insee-tax-files/).

- **Cost:** not for sale. Restricted administrative microdata.
- **Producer:** INSEE; access via CASD.
- **Coverage:** ownership and control links among French firms, used to build
  group perimeters; annual, with the linked-unit population evolving over time.

## Access (restricted)

- **Through the CASD secure data centre.** Approved researchers connect to CASD
  via the secure SD-Box; the data never leaves the secure environment and outputs
  are checked before release.
- **Project approval required.** Access requires an approved research project and
  the relevant French confidentiality authorization, granted per project.
- INSEE publishes documentation of the LIFI concepts (control thresholds, group
  definitions), so the methodology can be read even though the data cannot be
  pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **A "group" is a constructed perimeter, not a raw field.** LIFI assembles
  groups from ownership and control links using thresholds; the group boundary
  depends on those rules, and they have evolved. Use the LIFI-defined perimeter
  rather than inventing your own from raw stakes.
- **Control versus ownership.** The link concept is about control, which can
  differ from cash-flow ownership; do not read a control link as a precise equity
  share.
- **Coverage thresholds and survey design.** LIFI combines a survey with
  administrative sources and has size and reporting thresholds; small links can be
  missing. Do not read an absent link as proof of independence.
- **Identifier joins.** Firms are keyed by SIREN; linking LIFI to
  [DADS](/wiki/confidential/insee-dads/) (SIRET establishments) and to
  [tax files](/wiki/confidential/insee-tax-files/) requires the SIREN/SIRET mapping
  and care with restructurings. Verify the join.
- **Time consistency.** Group perimeters change year to year as links are added or
  dropped; a firm can enter and leave a group for reporting reasons. Build
  point-in-time perimeters.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave
  CASD only after confidentiality checks, and the microdata itself cannot be
  shared.

## Citation

Cite the producer and access route, e.g.: *LIFI (INSEE), accessed via the CASD
secure data centre under approved project, YYYY-MM-DD.* State the years and the
group-perimeter definition used.
