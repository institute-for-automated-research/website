---
title: "Banorte bank-account panel and savings experiment (Mexico, restricted access)"
description: >-
  Individual-level account and transaction records for millions of customers of
  one Mexican bank (Banorte), plus a randomized savings field experiment run
  with the bank. It is confidential single-counterparty data. This page
  documents what it is and the gotchas, but it was not exercised here.
sidebar:
  label: Banorte (Mexico)
tags: [household-finance, banking, field-experiment, mexico, data:banorte-experiment]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential data from a single bank** (Banorte). It is **not for sale,
not publicly downloadable, and not re-obtainable without the same institutional
agreement**: it carries **no provenance badge** because there is no access path
we can run here. Researchers obtained it under a confidential agreement with the
bank, and the field experiment was run jointly with it. The page documents what
the data is and the gotchas; treat it as unverified. This is the honest grade
under the institute's Verified discipline.
:::

**The Banorte data** combines two things from one large Mexican bank: an
individual-level **account panel** (checking balances, credit-card balances,
limits and interest charges, deposits, payments, and transaction-level spending
across ATM, card, and transfers, for millions of customers) and a **randomized
savings field experiment** run with the bank. The experiment is what makes the
panel valuable for causal work: treatment is assigned by the researchers, while
the account panel measures outcomes at high frequency. A paper we distill uses
it:
[Medina & Pagel](/wiki/papers/jf/2025/medina-saving-cause-borrowing-implications-2025/)
use the Banorte account panel (161 pretreatment variables) and bimonthly credit
bureau pulls (for non-Banorte balances) to study whether nudging saving causes
households to borrow more.

- **Cost:** not for sale. Confidential single-counterparty data plus a joint
  field experiment.
- **Source:** Banorte (a Mexican bank); credit-bureau pulls obtained through the
  bank.
- **Coverage:** the bank's own customers, not the Mexican population; high-frequency
  account and transaction records over the experiment window.

## Access (restricted)

- **No public download and no resale.** The data is the bank's confidential
  customer records; it cannot be purchased or redistributed.
- **Through a confidential agreement with the bank.** Access required a research
  agreement with Banorte; the field experiment was designed and run jointly with
  the bank. There is no standing way for a third party to reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **One bank is not the population.** The sample is Banorte customers, who are
  selected (banked, in this bank, eligible for the product); external validity to
  all Mexican households is a real limit. Do not generalize without argument.
- **Outside-bank activity is only partly observed.** Spending and balances at other
  institutions are seen only through the bimonthly credit-bureau pulls, which are
  coarser than the own-bank panel; cross-institution substitution is measured with
  error. Treat the credit-bureau view as lower resolution.
- **The experiment defines the causal sample.** Clean identification comes from the
  randomized treatment, not the full panel; observational comparisons in the panel
  are not the experiment. Keep the experimental and observational analyses
  separate.
- **Account, not person, and not household.** A customer can hold several products
  and a household several customers; aggregating requires care. Fix the unit before
  measuring saving or borrowing.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared, and the data cannot be re-pulled by others. Plan for non-reproducibility
  of the raw inputs.
- **Currency and PPP.** Balances are in pesos; cross-country reporting needs an
  explicit PPP conversion (the paper uses 2019 OECD PPP). State the conversion.

## Citation

Cite the source and arrangement, e.g.: *Banorte proprietary account panel and
savings field experiment, confidential; used under agreement with the bank,
YYYY-MM-DD.* State the experiment window, the unit (account, customer, household),
and any currency/PPP conversion.
