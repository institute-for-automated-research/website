---
title: "NIC supervisory data: CAMELS ratings and BHC structure (restricted access)"
description: >-
  The Federal Reserve's National Information Center holds confidential CAMELS
  supervisory ratings alongside public bank holding company structure and
  ownership history. The ratings are confidential; the structure data is public.
  This page documents what it is and the gotchas, but the ratings were not
  exercised here.
sidebar:
  label: NIC (Fed)
tags: [banks, supervision, bank-structure, banking, federal-reserve, data:nic-fed]
---

:::caution[Mixed: structure public, CAMELS ratings confidential]
**The NIC structure and ownership data is public**, but the **CAMELS supervisory
ratings** held alongside it are confidential. This page carries **no provenance
badge**: the ratings have no access path we can run here, and the public
structure data was not exercised in this session. CAMELS ratings are reached only
through a Federal Reserve, FDIC, or OCC affiliation or an approved restricted-data
arrangement, inside a secure environment, with output subject to disclosure
review. The page documents what the collection is and the gotchas; treat it as
unverified. This is the honest grade under the institute's Verified discipline.
:::

**The National Information Center (NIC)** is the Federal Reserve's repository of
data on banking organizations. Its **structure** side is public: the
organizational hierarchy, ownership, and history of bank holding companies
(formations, mergers, RSSD identifiers, listing history). Held alongside it,
**CAMELS** composite and component supervisory ratings (Capital, Asset quality,
Management, Earnings, Liquidity, Sensitivity, on a 1 to 5 scale) are confidential
supervisory assessments. A paper we distill uses both:
[Falato & Scharfstein](/wiki/papers/jf/2025/falato-stock-market-bank-risk-2025/)
use confidential CAMELS composite and component ratings as the bank-risk outcome,
with NIC ownership and listing history to identify which BHCs are publicly listed.

- **Cost:** structure data is free and public; CAMELS ratings are not for sale.
- **Source:** Federal Reserve (the National Information Center).
- **Coverage:** banking organizations supervised in the U.S.; structure history
  is broad, CAMELS ratings cover examined institutions over their exam cycle.

## Access (restricted)

- **Structure data is public.** The NIC website exposes institution search,
  organizational hierarchies, and RSSD identifiers; this is downloadable.
- **CAMELS ratings are confidential.** Access to supervisory ratings is limited
  to researchers at the Federal Reserve System, the FDIC, or the OCC, or others
  granted entry to the restricted data, worked inside a secure environment with
  output subject to disclosure review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **CAMELS is assigned on an exam cycle, not continuously.** A rating is set at
  an examination and carried until the next exam; the timestamp that matters is
  the exam date, not the report date. Do not treat ratings as a smooth monthly or
  quarterly series.
- **Ratings are confidential and their disclosure is restricted.** A bank's CAMELS
  rating is non-public supervisory information; results using it are disclosure-
  reviewed and the rating itself cannot be published at the bank level.
- **Composite versus component.** The composite rating and the six components
  carry different information; using the composite alone discards component-level
  signal (and vice versa). Be explicit about which you use.
- **Lead-supervisor and charter-type differences.** Banks are supervised by the
  Fed, OCC, FDIC, or state regulators, and rating practices can differ; pooling
  across supervisors mixes assessment styles. Note the supervisor.
- **Linking structure to ratings and to market data.** RSSD identifiers must be
  linked across the BHC hierarchy and to market data (for listed parents);
  mergers and reorganizations break the link. Verify the crosswalk and the
  parent-subsidiary mapping.
- **Output is disclosure-reviewed and cannot be redistributed.** Rating-level
  results leave the secure environment only after review.

## Citation

Cite the source, e.g.: *National Information Center (Federal Reserve): structure
data, accessed YYYY-MM-DD; CAMELS supervisory ratings, confidential, accessed
under restricted-data arrangement.* State the rating (composite or component),
the exam-date basis, and the sample window.
