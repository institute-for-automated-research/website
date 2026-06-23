---
title: "German online broker retail investor data (restricted access)"
description: >-
  Individual-level holdings, trades, and returns for retail investors at one
  anonymous German online broker, used in household-finance research. It is
  confidential single-counterparty data. This page documents what it is and the
  gotchas, but it was not exercised here.
sidebar:
  label: Online broker (Germany)
tags: [household-finance, retail-investors, portfolios, germany, data:online-broker]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential data from a single online broker.** It is **not for sale,
not publicly downloadable, and not re-obtainable without the same agreement**: it
carries **no provenance badge** because there is no access path we can run here.
Researchers obtained it under a confidential agreement with the broker, which is
kept anonymous. The page documents what the data is and the gotchas; treat it as
unverified. This is the honest grade under the institute's Verified discipline.
:::

**The online-broker data** is the account-level record of retail investors at one
anonymous German online brokerage: security holdings, trades, portfolio
characteristics, and returns over a multi-year window. It is one of the
recurring sources for German retail-investor behavior, valued because it observes
actual holdings and trades rather than survey-reported intentions. A paper we
distill uses it:
[Laudenbach, Malmendier & Niessen-Ruenzi](/wiki/papers/jf/2026/laudenbach-communism-attitudes-2026/)
use the online-broker data (839,292 investor-year observations for 230,229 retail
investors, 2004 to 2012; holdings, portfolio characteristics, and returns, with
[Datastream](/wiki/licensed/datastream/) returns merged in) to study how growing
up under communism shapes financial attitudes.

- **Cost:** not for sale. Confidential single-counterparty data.
- **Source:** an anonymous German online broker.
- **Coverage:** the broker's own clients, not the German population; account-level
  holdings, trades, and returns over the sample window.

## Access (restricted)

- **No public download and no resale.** The data is the broker's confidential
  client records; it cannot be purchased or redistributed.
- **Through a confidential agreement with the broker.** Access required a research
  agreement, and the broker's identity is not disclosed. There is no standing way
  for a third party to reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **One broker is a selected clientele.** Online-broker clients self-select on
  being active, online, and direct investors; they are not representative of all
  German households or investors. Do not generalize portfolio behavior to the
  population.
- **Holdings at this broker, not total wealth.** The account shows assets held at
  this broker, not the investor's whole portfolio or non-traded wealth; apparent
  concentration or risk-taking can be an artifact of partial coverage. Treat it as
  one account.
- **Returns need an external price source.** Position-level returns are computed by
  merging an external price/return feed (here [Datastream](/wiki/licensed/datastream/));
  corporate actions and mergers must be handled or returns are mismeasured.
- **Demographics are limited and sometimes imputed.** Investor characteristics are
  thinner than in administrative registers and may be merged from municipality-level
  sources; do not treat imputed demographics as individual ground truth.
- **Not redistributable and broker stays anonymous.** Results can be reported but
  the microdata cannot be shared and the broker is not named, limiting external
  replication. Plan for non-reproducibility of the raw inputs.

## Citation

Cite the source and arrangement, e.g.: *Retail online-broker account data
(anonymous German broker), confidential; used under agreement, YYYY-MM-DD.* State
the sample window, the unit (investor-year), and the external return source used.
