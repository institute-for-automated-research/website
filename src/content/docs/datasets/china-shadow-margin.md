---
title: "China shadow-margin lending data (single provider, restricted access)"
description: >-
  Daily stock-level off-exchange ("shadow") margin balances from one large
  Chinese lending platform, used to study the 2015 boom and bust. It is
  confidential single-counterparty data. This page documents what it is and the
  gotchas, but it was not exercised here.
sidebar:
  label: China shadow margin
tags: [china, leverage, margin, equities, data:china-shadow-margin]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential data from a single shadow-margin platform.** It is **not
for sale and not publicly downloadable**: it carries **no provenance badge**
because there is no access path we can run here. Off-exchange margin lending was
not officially reported, so this is one private platform's records, shared under
a confidential arrangement and not purchasable off the shelf. The page documents
what the data is and the gotchas; treat it as unverified. This is the honest
grade under the institute's Verified discipline.
:::

**The China shadow-margin data** is the daily, stock-level record of off-exchange
("shadow") margin balances from one large lending platform during the Chinese
equity boom and bust of 2014 to 2015. Shadow margin sat outside the regulated,
exchange-reported brokerage margin system and allowed much higher leverage, so it
is central to understanding the 2015 crash but is unobserved in official
statistics. This dataset is one platform's book, estimated at roughly 5% of the
shadow-margin market. A paper we distill uses it:
[Hansman, Hong, Jiang, Liu & Meng](/wiki/papers/rfs/2025/hansman-effects-credit-expansions-stock-2025/)
use the proprietary shadow-margin balances (daily, stock-level, about 5% of the
market) for the bust analysis, alongside exchange formal-margin data and
[CSMAR](/wiki/licensed/csmar/) prices and holdings.

- **Cost:** not for sale. Confidential single-counterparty data.
- **Source:** one large (undisclosed) shadow-margin lending platform.
- **Coverage:** daily stock-level balances on this platform, a partial slice
  (about 5%) of the total shadow-margin market, concentrated around the 2015
  episode.

## Access (restricted)

- **No public download and no resale.** Off-exchange margin was not officially
  collected; this is a private platform's book, shared confidentially.
- **Through a confidential arrangement.** Access required an agreement with the
  platform (or an intermediary); there is no standing way for a third party to
  reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is about 5% of the market, from one provider.** The platform's book is a
  partial and possibly non-representative slice of total shadow margin; scaling to
  the market requires an assumption about representativeness. State it explicitly.
- **Shadow margin is, by nature, incompletely measured.** Because it was
  unregulated and unreported, there is no benchmark to validate coverage against;
  the true market size is itself uncertain. Treat market-share claims as estimates.
- **Episode-specific.** The data is concentrated around the 2014 to 2015 boom and
  bust; it is not a long panel and the platform's behavior in the crash is
  endogenous to the event. Do not extrapolate beyond the episode.
- **Stock-level balances, not borrower-level.** Balances are by stock on the
  platform; the borrower composition behind them is not the unit, so inferences
  about who delevered are indirect. Match the inference to the stock-level unit.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared and cannot be re-pulled by others. Plan for non-reproducibility of the raw
  inputs.

## Citation

Cite the source and arrangement, e.g.: *Proprietary shadow-margin balances (single
Chinese platform), confidential; used under agreement, YYYY-MM-DD.* State the
window, the estimated market share, and the stock-level unit.
