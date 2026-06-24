---
title: "401(k) plan administrative records (restricted access)"
description: >-
  Plan-administration microdata from a large U.S. retirement-plan recordkeeper:
  participant portfolio allocations, participation, contribution rates, and plan
  defaults across many plans. It is confidential single-counterparty data. This
  page documents what it is and the gotchas, but it was not exercised here.
sidebar:
  label: 401(k) administrative
tags: [retirement, household-finance, portfolios, united-states, data:401k-admin]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential data from a single retirement-plan recordkeeper.** It is
**not for sale and not publicly downloadable**: it carries **no provenance badge**
because there is no access path we can run here. Researchers obtained it under a
confidential agreement with the recordkeeper, anonymized. The page documents what
the data is and the gotchas; treat it as unverified. This is the honest grade
under the institute's Verified discipline.
:::

**The 401(k) administrative records** are the plan-administration microdata held
by a large U.S. retirement-plan **recordkeeper**: for each participant, the
portfolio allocation, participation status, contribution rate, and the features of
the employer plan (notably the **default** investment and auto-enrollment
settings). Because a recordkeeper administers many employers' plans, the data
spans a large cross-section of plans and workers with the plan-design detail that
public surveys lack. A paper we distill uses it:
[Choukhmane & de Silva](/wiki/papers/jf/2026/choukhmane-portfolio-choices-risk-preferences-2026/)
use anonymized 401(k) administrative records from a large recordkeeper (December
2006 to December 2017, about 4 million employees across more than 600,000 plans)
for portfolio allocations, participation, contribution rates, and plan defaults,
to study what drives investors' portfolio choices.

- **Cost:** not for sale. Confidential single-counterparty data.
- **Source:** a large U.S. retirement-plan recordkeeper (anonymized).
- **Coverage:** participants in the plans this recordkeeper administers, not all
  U.S. workers; high-detail allocation and plan-design data over the sample window.

## Access (restricted)

- **No public download and no resale.** The data is the recordkeeper's
  confidential administrative records; it cannot be purchased or redistributed.
- **Through a confidential agreement with the recordkeeper.** Access required a
  research agreement, and the recordkeeper is anonymized. There is no standing way
  for a third party to reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **One recordkeeper is a selected set of plans.** The plans administered by this
  recordkeeper are not a random sample of U.S. employers; plan size, industry, and
  design skew the data. Do not treat it as the universe of 401(k) plans.
- **Defaults drive observed choices.** A large share of allocations reflect the
  plan default and auto-enrollment, not active choice; treating observed allocation
  as revealed preference confounds default effects. Separate active from defaulted
  participants.
- **Within-plan, not whole-portfolio.** The data shows assets in this 401(k), not
  the household's other accounts (IRAs, taxable, a spouse's plan); apparent
  risk-taking can reflect partial coverage. Treat it as one account.
- **Plan menu constrains allocations.** Participants can only hold the funds the
  plan offers; the menu, not just preferences, shapes allocations. Condition on the
  plan menu.
- **Job and plan changes break panels.** Participants leave plans on job change and
  the recordkeeper may lose them; the panel is unbalanced for administrative
  reasons. Model entry/exit.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared and cannot be re-pulled by others. Plan for non-reproducibility of the raw
  inputs.

## Citation

Cite the source and arrangement, e.g.: *401(k) plan administrative records (large
U.S. recordkeeper, anonymized), confidential; used under agreement, YYYY-MM-DD.*
State the sample window, the number of plans/participants, and the treatment of
defaults.
