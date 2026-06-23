---
title: "VPS: Norwegian securities depository holdings (restricted access)"
description: >-
  VPS is the Norwegian central securities depository; its records give complete
  individual-level securities holdings for Norwegian investors. It is restricted
  research microdata. This page documents what it is and the gotchas, but it was
  not exercised here.
sidebar:
  label: VPS (Norway)
tags: [holdings, household-finance, equities, norway, administrative, data:vps-norway]
---

:::caution[Restricted holdings microdata: not exercised here]
**VPS holdings data is confidential individual-level microdata** (Euronext
Securities Oslo, the former Verdipapirsentralen). It is **not for sale and not
publicly downloadable**: it carries **no provenance badge** because there is no
access path we can run here. Researchers reach it only through an approved
project under restricted research terms, typically in a secure environment, with
output subject to confidentiality review. The page documents what the collection
is and the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**VPS** (Verdipapirsentralen, now Euronext Securities Oslo) is Norway's central
securities depository. Because Norwegian securities are registered there at the
beneficial-owner level, VPS records give **complete individual-level holdings** of
listed stocks and other registered securities, at monthly (or finer) frequency.
This makes it one of the few datasets with the full cross-section of a market's
retail and institutional holdings, not a sample. A paper we distill uses it:
[Betermier, Calvet, Knupfer & Kvaerner](/wiki/papers/jf/2025/betermier-investor-factors-2025/)
use VPS for complete individual investor stockholdings at monthly frequency
(300,000+ investors), linked to investor characteristics from
[Statistics Norway](/wiki/datasets/statistics-norway/) tax records and to OSE
prices from the Titlon database.

- **Cost:** not for sale. Restricted research microdata.
- **Source:** the Norwegian CSD (VPS / Euronext Securities Oslo).
- **Coverage:** registered holdings of Norwegian securities at the beneficial-owner
  level; complete for registered instruments, monthly or finer.

## Access (restricted)

- **Through an approved research arrangement.** Access to the holdings microdata
  is granted per project under restricted terms; it is not an open or commercial
  download.
- **Linked in a secure environment.** In practice VPS holdings are merged with
  [Statistics Norway](/wiki/datasets/statistics-norway/) registers under
  pseudonymized identifiers inside a secure setting, with outputs checked before
  release.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Registered holdings, not all wealth.** VPS covers securities registered in the
  depository; assets held abroad, through foreign brokers, or in funds not
  registered there are outside it. Do not read VPS as the investor's whole
  portfolio.
- **Nominee and omnibus accounts hide beneficial owners.** Holdings via nominee
  or omnibus accounts (often foreign) are not resolved to the ultimate owner; the
  beneficial-owner completeness is strongest for domestic direct holders. Treat
  nominee-held shares carefully.
- **Account-to-investor mapping.** An investor can have multiple VPS accounts;
  aggregating to the person requires the account-to-owner mapping. Do not treat an
  account as an investor.
- **Linkage keys are pseudonymized per project.** The keys joining VPS to SSB
  registers are project-specific pseudonyms; you cannot merge across separate
  deliveries. Plan all links inside one delivery.
- **Corporate actions and identifier changes.** Splits, mergers, and ISIN changes
  alter holdings mechanically; without adjusting for corporate actions, holdings
  changes are mismeasured. Apply a corporate-action map.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source and access route, e.g.: *VPS holdings (Euronext Securities Oslo /
Verdipapirsentralen), accessed under approved research arrangement, YYYY-MM-DD.*
State the years, the holdings frequency, and how accounts were aggregated to
investors.
