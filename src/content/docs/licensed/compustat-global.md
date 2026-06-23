---
title: "Compustat Global: non-US company fundamentals (licensed)"
description: >-
  Compustat Global is S&P Global Market Intelligence's database of fundamental
  and market data for publicly traded companies outside North America,
  standardized into a common data model for cross-country comparison. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: Compustat Global
tags: [accounting, international, fundamentals, licensed, data:compustat-global]
---

:::caution[Licensed: not exercised here]
**Compustat Global is a paid S&P product** (S&P Global Market Intelligence), so it
sits in the *Licensed* tier and carries **no provenance badge**: the access path
below was **not** run in this session (no WRDS or S&P credentials were available).
The page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**Compustat Global** is S&P Global Market Intelligence's database of fundamental
(balance sheet, income statement, cash flow) and market data for publicly traded
companies **outside North America**. The North American counterpart is plain
Compustat (Compustat North America). It covers tens of thousands of non-US firms
across many countries, standardized into a common data model so that
cross-country comparisons are possible. Papers we distill use it, for example
[Faccio et al.](/wiki/papers/jf/2025/faccio-impediments-schumpeterian-process-replacement-2025/)
on cross-country impediments to the Schumpeterian process of firm replacement
(creative destruction).

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** S&P Global Market Intelligence; the product lineage traces back to
  Standard & Poor's Compustat.
- **Coverage:** non-US public firms, annual and some interim, from roughly 1987
  with deeper coverage in later years; includes Global Security Daily for prices.

## Access (when licensed)

- **Most commonly through [WRDS](/wiki/licensed/wrds/).** Compustat Global is
  reached under the WRDS *Compustat - Global* library. Key tables: `g_funda`
  (annual fundamentals), `g_company` (header / metadata), and `g_secd` (security
  daily prices). Currency and exchange-rate handling lives alongside `g_funda`
  through the companion exchange-rate table.
- **S&P direct feed.** It is also available through an S&P Global direct data
  feed for institutions that license it outside WRDS.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Currency: fundamentals are in native currency.** Line items in `g_funda` are
  reported in each firm's local currency (`curcd`), and you must convert using the
  companion exchange-rate table before aggregating or comparing across countries.
  Mixing currencies silently is the classic error and produces meaningless sums
  and ratios.
- **The Global data model differs from Compustat North America.** Different
  variable names, the `g_` table prefix, and different fiscal-period conventions
  mean North American Compustat code does not port directly. Map variables
  deliberately rather than assuming a North American name exists in Global.
- **The key is `gvkey` + `iid` (issue id).** Securities are keyed by company
  (`gvkey`) plus issue (`iid`); a single firm can have multiple issues or share
  classes. Apply the primary-issue flag, or you will double-count firms and
  attach prices to the wrong security.
- **Fiscal-year-end heterogeneity across countries.** Fiscal year-ends vary
  widely by country, so aligning `datadate` / `fyear` needs care when forming
  annual panels; a naive calendar-year merge misaligns observations.
- **Accounting-standard heterogeneity.** Countries adopted IFRS at different
  dates and many used local GAAP before that, so line items are not strictly
  comparable across countries or over time. Treat cross-country level
  comparisons with caution and lean on standardized fields where possible.
- **Coverage and backfill.** Early-year coverage is thinner, and inclusion has
  changed over time. Retain inactive firms to avoid survivorship bias; dropping
  delisted or dead firms biases the panel toward survivors.
- **Linking is separate work.** Joining to North American Compustat or to returns
  data requires care: `gvkey` values can overlap, but the databases are separate,
  so do not assume a shared `gvkey` resolves to the same entity without checking.

## Reference: the main `g_` tables

| Table | What it holds |
|---|---|
| `g_funda` | Annual fundamentals (balance sheet, income statement, cash flow), in native currency |
| `g_company` | Company header and metadata (identifiers, country, industry) |
| `g_secd` | Global Security Daily: daily security prices and related market data |

## Citation

Cite the provider and the database, e.g.: *S&P Compustat Global, via WRDS,
accessed YYYY-MM-DD.* State the WRDS library (*Compustat - Global*), the tables
used (for example `g_funda`, `g_company`, `g_secd`), the currency and
exchange-rate handling applied, and the extraction date.
