---
title: "S&P Capital IQ: company, capital-structure, and transactions data (licensed)"
description: >-
  S&P Capital IQ is S&P Global Market Intelligence's platform covering public and
  private companies worldwide: detailed capital-structure and debt data, company
  financials, people, M&A and private-equity transactions, and key developments.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: Capital IQ
tags: [corporate-finance, debt, transactions, licensed, data:capital-iq]
---

:::caution[Licensed: not exercised here]
**S&P Capital IQ is a paid licensed product** (S&P Global Market Intelligence),
commonly reached through [WRDS](/wiki/commercial/wrds/), so it carries **no provenance badge**: the access path below was
**not** run in this session (no Capital IQ / WRDS credentials were available).
The page documents the access route and the gotchas; treat it as unverified
until someone exercises it through a licensed account. This is the honest grade
under the institute's Verified discipline.
:::

**S&P Capital IQ** is S&P Global Market Intelligence's platform covering public
and private companies worldwide. It holds detailed **capital structure / debt
data** (individual debt tranches, terms, and maturities), company **financials**,
**people / professionals**, **M&A and private-equity transactions**, **key
developments** (corporate events), and ESG-adjacent fields. In research it is
most used for granular debt-structure data (Capital IQ Capital Structure) that
Compustat does not break out, and for private-company and transactions coverage.
A paper we distill uses it, for example
[Derrien, Krüger, Landier & Yao](/wiki/papers/jf/2025/derrien-esg-news-future-cash-2025/)
on ESG news and future cash flows.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** S&P Global Market Intelligence.
- **Coverage:** global public and private firms, with debt-tranche detail,
  transactions, and key developments. Most data runs from the 2000s, with some
  back-history.

## Access (when licensed)

- **Via WRDS or the Capital IQ platform.** Many researchers reach Capital IQ
  through [WRDS](/wiki/commercial/wrds/) under the Capital IQ libraries (Capital
  Structure / debt, key developments, people, transactions). It is also
  available directly through the Capital IQ Pro platform and its API.
- **Identifiers and linking.** Capital IQ is keyed by its own `companyid`
  (and `securityid`). To join to Compustat, use the CIQ-to-gvkey linking table
  (`ciqgvkey`) rather than assuming a direct match.
- Credentials and a WRDS or Capital IQ account are required. Keep any
  credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Identifiers are not gvkey.** Capital IQ uses `companyid` / `securityid`, not
  gvkey. The CIQ-to-Compustat link table (`ciqgvkey`) is essential and is
  imperfect: expect unmatched firms and many-to-one cases. Resolve the link
  before building a panel, and report the match rate.
- **Capital Structure (debt) data is point-in-time / snapshot oriented.**
  Reconstructing a firm's debt as of a past date is tricky: some fields reflect
  the latest available value rather than the as-of value, so a naively built
  panel can be anachronistic. Pull as-of snapshots where available and pin the
  extraction date.
- **Debt tranches can double-count or omit.** Revolver availability versus drawn
  amounts, capitalized leases, and the classification of hybrids all complicate
  the totals; summing tranches need not equal balance-sheet debt. Reconcile to a
  known total before using tranche-level figures.
- **Private-company financials are sparse.** Coverage is conditional and not
  missing at random: private-firm financials are sparsely populated and are
  self-reported or estimated. Do not treat the populated subset as a random
  sample of private firms.
- **Key developments change over time.** Events are tagged by S&P, and both the
  taxonomy and the coverage shift across the history. Pin the extraction date and
  check the event-type definitions for the period you use.
- **It will not match Compustat.** Figures will not reconcile to Compustat line
  items because of different definitions and timing. Do not assume a Capital IQ
  field equals its nearest Compustat analogue; compare definitions first.
- **WRDS table structure is nontrivial.** The Capital IQ tables on WRDS are
  multiple linked tables, and the join keys must be applied carefully. A wrong
  join silently inflates or drops rows; validate row counts at each step.

## Reference: the main Capital IQ modules

| Module / library | What it holds |
|---|---|
| Capital Structure | Individual debt tranches, terms, maturities, and capital-structure summaries |
| Financials | Standardized company financial statements (public and private) |
| People / Professionals | Executives, board members, and other professionals |
| Transactions | M&A, private-equity, and financing transactions |
| Key Developments | Tagged corporate events (earnings, deals, management changes) |
| Linking (`ciqgvkey`) | CIQ `companyid`-to-Compustat `gvkey` crosswalk |

## Citation

Cite the provider and the modules used, e.g.: *S&P Capital IQ (Capital Structure)
/ WRDS, accessed YYYY-MM-DD.* State the modules / tables used (for example
Capital Structure, Transactions, Key Developments), the identifier link applied
(`ciqgvkey`), and the extraction date.
