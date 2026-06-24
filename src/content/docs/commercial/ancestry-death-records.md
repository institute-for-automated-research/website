---
title: "Ancestry.com death and genealogical records (licensed)"
description: >-
  Ancestry.com aggregates death indexes, obituaries, and genealogical records used
  to date individual births and deaths (for example to build executive mortality
  panels). It is licensed: this page documents the access path and the gotchas,
  but the data was not exercised here.
sidebar:
  label: Ancestry records
tags: [mortality, individual-records, executives, hand-collected, licensed, data:ancestry-death-records]
---

:::caution[Licensed: not exercised here]
**Ancestry.com is a paid subscription product**, so it carries **no provenance badge**: the access path below was **not** run in this
session. Treat it as unverified until someone exercises it through a licensed
Ancestry subscription. This is the honest grade under the institute's Verified
discipline.
:::

**Ancestry.com** aggregates genealogical and vital records: the Social Security
Death Index, state death indexes, obituaries, census records, and family trees.
For research it is the standard way to **hand-collect birth and death dates** for
a named set of individuals when no administrative mortality file is available. A
paper we distill uses it:
[Borgschulte, Guenzel, Liu & Malmendier](/wiki/papers/jf/2025/borgschulte-ceo-stress-aging-death-2025/)
hand-collect birth and death dates from Ancestry.com for 2,361 of 2,720 CEOs at
1,501 firms to build the CEO Mortality Data Set, then estimate how industry
distress and antitakeover-law protection affect CEO longevity.

- **Cost:** licensed, consumer subscription (tiered by record collection).
- **Vendor:** Ancestry.com.
- **Coverage:** U.S. and international vital and genealogical records, deepest for
  U.S. deaths via the Social Security Death Index and state indexes; the research
  asset is a hand-matched set of birth / death dates for named individuals.

## Access (when licensed)

- **Through an Ancestry.com subscription.** Records are searched on the Ancestry
  web platform; there is no bulk research feed, so a mortality panel is assembled
  by searching each named individual and recording matched dates.
- **Identity matching by name and detail.** A person is matched on name plus
  corroborating detail (birth year, location, employer, relatives); the match is
  hand-judged. Keep the matched dates and provenance, not scraped pages.
- **Respect the terms of use.** Ancestry's terms restrict automated access and
  redistribution; collection is manual or within permitted limits, and personal
  records stay inside the licence. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage is not a census, and absence is ambiguous.** A person not found may be
  alive, or simply unrecorded; the Social Security Death Index misses some deaths
  and lags recent ones. Treat "no death record" as missing, not as survival,
  without a confirming source. The citing paper matches 2,361 of 2,720 CEOs, so
  roughly 13 percent are unmatched.
- **Match accuracy drives the result.** Common names and thin detail produce false
  matches (attributing the wrong death) and missed matches; for mortality analysis
  a single wrong death date is a large error. Hand-verify and report the match
  rate.
- **Survivorship and selection in who is searchable.** Prominent individuals
  (executives) are better documented than the general population, so match rates
  and data quality are not representative; do not generalize the matched sample's
  completeness to other groups.
- **Date precision varies.** Some records give only a year or month; mixing
  exact and coarse dates biases any duration / hazard estimate. Record date
  precision and handle it explicitly.
- **No stable research identifier.** Records carry names, not IDs; linking to a
  firm or compensation panel (for example Execucomp) is a name-and-tenure match
  with its own error. Document the link.

## Citation

Cite the source and that dates were hand-collected, e.g.: *Birth and death dates
hand-collected from Ancestry.com, accessed YYYY-MM-DD.* State the population, the
match rate, the date precision, and the identity-matching procedure.
