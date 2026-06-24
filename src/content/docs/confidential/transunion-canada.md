---
title: "TransUnion credit bureau data (Canada, restricted access)"
description: >-
  Monthly, population-wide individual credit-bureau records for Canada from
  TransUnion: borrower characteristics, mortgage identity, switching activity,
  and inquiries. It is restricted research microdata, not an off-the-shelf
  purchase. This page documents what it is and the gotchas, but it was not
  exercised here.
sidebar:
  label: TransUnion (Canada)
tags: [consumer-credit, mortgages, credit-bureau, canada, data:transunion-canada]
---

:::caution[Restricted individual-level data: not exercised here]
**This is restricted TransUnion Canada credit-bureau microdata** (personally
identifiable in raw form). It is **not an off-the-shelf research purchase and not
publicly downloadable**: it carries **no provenance badge** because there is no
access path we can run here. Researchers reach it only under a restricted research
agreement, anonymized. The page documents what the data is and the gotchas; treat
it as unverified. This is the honest grade under the institute's Verified
discipline.
:::

**TransUnion Canada credit-bureau data** is the monthly, near population-wide
individual credit record for Canada: borrower characteristics (age, credit score,
location at the forward-sortation-area level, non-mortgage debt), mortgage
identity, switching activity between lenders, and credit inquiries. Its value for
research is the combination of full population coverage and the ability to follow
borrowers across lenders over time. A paper we distill uses it:
[Allen & Li](/wiki/papers/jf/2025/allen-dynamic-competition-negotiated-price-2025/)
use TransUnion monthly credit-bureau records for borrower characteristics,
mortgage identity, switching, and inquiries, linked to
[OSFI](/wiki/confidential/osfi-canada/) contract-level mortgage data, to study dynamic
competition in negotiated mortgage pricing.

- **Cost:** not an off-the-shelf research purchase. Restricted-access individual
  microdata.
- **Source:** TransUnion Canada.
- **Coverage:** near population-wide consumers with a credit file in Canada,
  monthly; location is typically at the forward-sortation-area (FSA) level, not the
  exact address.

## Access (restricted)

- **No public download; PII in raw form.** Raw records are personally identifiable
  and cannot be posted; research uses anonymized extracts.
- **Through a restricted research agreement.** Access is granted per project under
  strict privacy terms; there is no standing way for a third party to reach the
  same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Only the credit-visible population.** Consumers without a credit file are
  absent; the panel is not literally everyone. Do not generalize to the
  credit-invisible.
- **Geography is coarse (FSA).** Location is at the forward-sortation-area level,
  not the address; merging to fine-grained local data (house prices, demographics)
  inherits that coarseness. Match at the FSA level deliberately.
- **Scores and tradelines follow bureau definitions.** Credit scores and
  account/tradeline fields are TransUnion constructs that change over time and can
  differ from Equifax Canada; a score is not a fixed cross-vintage or cross-bureau
  concept. Pin the model and codebook.
- **Mortgage identity and switching need careful linking.** Identifying the same
  mortgage across months and a switch between lenders relies on the bureau's
  tradeline matching, which has error; verify the switching definition against the
  lender-side ([OSFI](/wiki/confidential/osfi-canada/)) data.
- **Reporting lags and updates.** Tradelines update on lender reporting cycles, so
  a month's snapshot can lag actual events; be explicit about the reporting-date
  basis.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared or re-pulled by others. Plan for non-reproducibility of the raw inputs.

## Citation

Cite the source and arrangement, e.g.: *TransUnion Canada credit-bureau records,
restricted; accessed under research agreement, YYYY-MM-DD.* State the sample
window, the geographic level (FSA), and the score/codebook vintage.
