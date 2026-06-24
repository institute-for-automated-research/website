---
title: "Titlon Oslo Stock Exchange data (licensed)"
description: >-
  Titlon is the University of Tromso's financial database for the Oslo Stock
  Exchange: prices, returns, shares outstanding, and accounting data for Nordic
  listed firms. It is free to Nordic academic users but credential-gated, not
  openly public; this page documents the access path and the gotchas, and the
  data was not exercised here.
sidebar:
  label: Titlon (OSE)
tags: [equities, asset-pricing, nordic, market-data, academic, licensed, data:titlon-ose]
---

:::caution[Credential-gated: not exercised here]
**Titlon is free to Nordic academic users but credential-gated**, so it sits in
the *Licensed* tier (not openly public) and carries **no provenance badge**: the
access path below was **not** run in this session, and access requires an
eligible Nordic academic affiliation. Treat it as unverified until someone
exercises it through a Titlon account. This is the honest grade under the
institute's Verified discipline.
:::

**Titlon** is the financial-data service maintained by UiT The Arctic University
of Norway (formerly the University of Tromso) covering the Oslo Stock Exchange
(OSE) and other Nordic markets: daily and monthly stock prices, returns, shares
outstanding, dividends, and linked accounting data for listed firms. It is the
standard source for Norwegian equity returns in academic work, the OSE
counterpart to CRSP. A paper we distill uses it:
[Betermier, Calvet, Knupfer & Kvaerner](/wiki/papers/jf/2025/betermier-investor-factors-2025/)
use Titlon for prices, returns, and shares outstanding of 535 OSE stocks (1997
to 2017), joined to complete individual investor holdings from the Norwegian
central securities depository, when building investor-based factors that price
the Norwegian cross section.

- **Cost:** free to eligible Nordic academic users, but access is
  credential-gated through a participating institution; it is not an open
  public download.
- **Vendor:** UiT The Arctic University of Norway (Titlon), with data sourced
  from the Oslo Stock Exchange and Oslo Bors.
- **Coverage:** OSE-listed equities and related Nordic securities, daily and
  monthly, with prices, returns, corporate actions, and accounting links; the
  citing paper's window runs 1997 to 2017.

## Access (when licensed)

- **Through a Titlon academic account.** Eligible users at participating Nordic
  institutions log in and query the database (a SQL-style client / data
  portal); access is tied to the institution's agreement, so a non-Nordic
  researcher needs a collaborator or affiliation.
- **CRSP-style return building.** Prices, shares outstanding, and corporate
  actions support standard return and market-cap construction; corporate-action
  adjustment is the key step, as with any clean-return source.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Access is affiliation-bound, not purchasable.** Titlon is free but gated to
  Nordic academic users; a pipeline cannot simply buy a key. Plan for a
  collaborator with eligible access, and do not assume the data can be exercised
  outside that channel.
- **A small, thin market.** The OSE cross section is a few hundred names (535 in
  the citing paper), with thin trading and energy/shipping concentration;
  illiquidity, non-synchronous prices, and a short cross section make
  cross-sectional asset-pricing tests noisier than on U.S. data. Weight and
  filter accordingly.
- **Corporate-action and delisting handling is on you.** As with CRSP, returns
  must be adjusted for splits, dividends, and delistings; survivorship creeps in
  if delisted names are dropped. Confirm the corporate-action coverage before
  building a return series.
- **Identifier mapping to other Nordic data.** Joining Titlon to holdings or tax
  registers (as the citing paper does) relies on consistent security and firm
  identifiers (ISIN, organization number) that can change across time and source;
  build joins on stable keys plus dates.
- **Redistribution is restricted despite being free.** Free-to-academics does
  not mean republishable; the underlying OSE data carries reuse limits. Cache
  derived series, not raw vendor tables, and do not redistribute.

## Citation

Cite the source, e.g.: *Titlon financial database (UiT The Arctic University of
Norway), Oslo Stock Exchange data, [dates], accessed YYYY-MM-DD.* State the
securities and date range, the return-construction and corporate-action handling,
and the identifier used to link to any holdings or accounting data.
