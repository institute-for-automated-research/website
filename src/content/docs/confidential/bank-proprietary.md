---
title: "German bank proprietary customer data (restricted access)"
description: >-
  Individual-level customer records (product holdings, wealth, income, equity
  participation) from one anonymous German bank, used in household-finance
  research. It is confidential single-counterparty data. This page documents
  what it is and the gotchas, but it was not exercised here.
sidebar:
  label: Bank proprietary (Germany)
tags: [household-finance, banking, wealth, germany, data:bank-proprietary]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential data from a single bank** (kept anonymous). It is **not
for sale, not publicly downloadable, and not re-obtainable without the same
agreement**: it carries **no provenance badge** because there is no access path
we can run here. Researchers obtained it under a confidential agreement with the
bank. The page documents what the data is and the gotchas; treat it as
unverified. This is the honest grade under the institute's Verified discipline.
:::

**The proprietary bank data** is the individual-level customer record from one
anonymous German bank: financial-product holdings, wealth, income, and
stock-market participation for a sample of customers. It complements survey and
broker data by observing balance-sheet and participation measures inside a single
institution. A paper we distill uses it:
[Laudenbach, Malmendier & Niessen-Ruenzi](/wiki/papers/jf/2026/laudenbach-communism-attitudes-2026/)
use proprietary bank data on 326,437 randomly selected customers (2019) for
financial-product holdings, wealth, income, and stock-market participation,
alongside the [Bilendi survey](/wiki/confidential/bilendi-survey/) and the
[online-broker](/wiki/confidential/online-broker/) data.

- **Cost:** not for sale. Confidential single-counterparty data.
- **Source:** an anonymous German bank.
- **Coverage:** the bank's own customers, not the German population; a
  cross-sectional sample of customer records.

## Access (restricted)

- **No public download and no resale.** The data is the bank's confidential
  customer records; it cannot be purchased or redistributed.
- **Through a confidential agreement with the bank.** Access required a research
  agreement, and the bank's identity is not disclosed. There is no standing way
  for a third party to reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **One bank is a selected clientele.** The sample is this bank's customers, who
  differ from the population on who banks where; external validity is the central
  caveat. Do not generalize participation or wealth to all Germans.
- **Holdings at this bank, not total wealth.** Wealth and product holdings are what
  this bank sees; assets at other institutions are missing, so wealth and
  participation can be understated. Treat it as a partial balance sheet.
- **Cross-section, not panel.** The data is a snapshot (here 2019); it cannot speak
  to within-person dynamics. Match the question to the cross-sectional design.
- **Income is bank-observed.** Income is inferred from what the bank records
  (inflows, declared income), not a tax authority; it is noisier than
  administrative income. Treat it as a proxy.
- **Not redistributable and bank stays anonymous.** Results can be reported but the
  microdata cannot be shared and the bank is not named, limiting external
  replication. Plan for non-reproducibility of the raw inputs.

## Citation

Cite the source and arrangement, e.g.: *Proprietary retail-bank customer data
(anonymous German bank), confidential; used under agreement, YYYY-MM-DD.* State
the snapshot date, the sample size, and that holdings reflect one institution.
