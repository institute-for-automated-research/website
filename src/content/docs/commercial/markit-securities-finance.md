---
title: "Markit Securities Finance: securities-lending data (licensed)"
description: >-
  Markit Securities Finance (S&P Global / IHS Markit) is the standard
  securities-lending dataset: stock borrow fees, utilization, and lendable
  supply from a broad contributor base. It is licensed: this page documents the
  access path and the gotchas, but the data was not exercised here.
sidebar:
  label: Markit Securities Finance
tags: [short-selling, securities-lending, borrow-fees, licensed, data:markit-securities-finance]
---

:::caution[Licensed: not exercised here]
**Markit Securities Finance is a paid licensed product** (S&P Global / IHS
Markit), so it carries **no provenance badge**:
the access path below was **not** run in this session (no Markit credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Markit Securities Finance** (the former Data Explorers securities-lending
database) is the standard source for **short-selling cost and supply**: stock
borrow fees, utilization, lendable supply, and on-loan quantities, aggregated from
a large contributor base of lenders and prime brokers. It is the data behind most
empirical work on borrow costs, the short-sale-cost wedge in anomaly returns, and
crowded shorts. A paper we distill uses it:
[Muravyev, Pearson & Pollet](/wiki/papers/jf/2025/muravyev-anomalies-short-sale-costs-2025/)
use the Markit Securities Finance Buy Side Analytics feed (daily from June 28,
2006) for the indicative borrow fee (the buy-side expected borrow cost) and
utilization when measuring how short-sale costs erode anomaly returns.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** S&P Global (IHS Markit); lineage through Data Explorers.
- **Coverage:** global equities (and some other securities) with daily borrow
  fees, utilization, and supply; deeper and broader from the mid-2000s onward.

## Access (when licensed)

- **Through a Markit / S&P Global feed or WRDS.** The data is reached via a Markit
  entitlement (for example the Buy Side Analytics data feed) or, where the
  institution licenses it, through [WRDS](/wiki/commercial/wrds/). Check which route
  your institution provides.
- **Keyed by security and date.** An extract is borrow fee, utilization, and
  supply by security over a date range. Distinguish indicative (buy-side) fees
  from other fee concepts in the product.
- Terminal or API credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Several fee concepts, not one.** The product reports multiple fee measures
  (indicative buy-side fee, value-weighted average fee, and others); they differ in
  level and timing. Use the fee concept that matches your question and state it.
- **Contributor-based, so coverage is uneven.** Fees and supply come from
  contributing lenders/brokers; a hard-to-borrow name with thin contribution is
  noisily measured. Check contributor depth before trusting a fee.
- **Fees are stale and sticky for some names.** Indicative fees update on
  contribution cycles and can lag the true marginal borrow cost, especially for
  specials around events. Treat event-window fees cautiously.
- **Utilization needs the supply denominator.** Utilization depends on the
  lendable-supply estimate, which is itself contributor-based; a low-supply name
  inflates utilization mechanically. Read utilization with supply.
- **History start and the proxy fallback.** The daily series starts in the
  mid-2000s; for earlier periods or without access, researchers proxy borrow cost
  with the short-interest-to-institutional-ownership ratio, which is a coarse
  substitute. Do not splice the proxy and the Markit fee without care.
- **Identifier linking.** Securities must be linked to CRSP/Compustat
  identifiers; the join has known mismatches across reorganizations. Verify the
  link.

## Citation

Cite the vendor and product, e.g.: *Markit Securities Finance / S&P Global (IHS
Markit), accessed YYYY-MM-DD.* State the fee concept used (for example indicative
buy-side fee), the security universe, and the date range.
