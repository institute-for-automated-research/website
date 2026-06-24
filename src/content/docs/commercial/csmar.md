---
title: "CSMAR: China Stock Market & Accounting Research (licensed)"
description: >-
  CSMAR is the standard vendor database of Chinese listed-firm prices,
  financials, ownership, and market microstructure. It is licensed: this page
  documents the access path and the gotchas, but the data was not exercised
  here.
sidebar:
  label: CSMAR
tags: [china, equities, accounting, ownership, licensed, data:csmar]
---

:::caution[Licensed: not exercised here]
**CSMAR is a paid licensed product** (GTA Information Technology), so it carries **no provenance badge**: the access path below
was **not** run in this session (no CSMAR / GTA institutional credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**CSMAR** (China Stock Market & Accounting Research, from GTA Information
Technology) is the most widely used vendor database for Chinese capital markets:
daily and intraday stock prices and returns for the Shanghai and Shenzhen
exchanges, listed-firm financial statements, ownership and shareholder data,
fund holdings, corporate governance, and a range of market-microstructure and
specialty modules. It is the China-market analog to the CRSP/Compustat core and
is the standard source for studies of Chinese listed firms. A paper we distill
uses it:
[Hansman, Hong, Jiang, Liu & Meng](/wiki/papers/rfs/2025/hansman-effects-credit-expansions-stock-2025/)
draw stock prices and trading data, book-to-market, semiannual fund holdings,
and top-ten-shareholder ownership from CSMAR.

- **Cost:** licensed, institutional subscription. No general free tier.
- **Vendor:** GTA Information Technology (Shenzhen).
- **Coverage:** A-share, B-share, and (in places) H-share listed firms on the
  Shanghai and Shenzhen exchanges; prices from the early 1990s, with financials,
  ownership, fund, and governance modules of varying start dates.

## Access (when licensed)

- **Through the CSMAR/GTA platform or WRDS.** Tables are downloaded from the
  CSMAR web platform (module-by-module query and CSV export) or, where the
  institution licenses it, through [WRDS](/wiki/commercial/wrds/). Check which
  route your institution provides.
- **Modular schema.** CSMAR is organized into databases/modules (trading,
  financial statements, ownership, funds, governance, etc.); an extract is a set
  of fields from one module for a firm list over a date range, keyed by the
  six-digit stock code.
- Platform credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Stock-code reuse and exchange prefixes.** The six-digit ticker is not a
  stable permanent identifier: codes can be reused after delisting, and the same
  number can exist on different exchanges. Use CSMAR's internal firm identifier
  and an exchange prefix, not the raw six-digit code, as the join key.
- **Share classes split the same firm.** A and B (and offshore H) shares of one
  company trade under different codes, currencies, and investor bases; aggregating
  them naively double-counts the firm or mixes currencies. Decide your share-class
  treatment explicitly.
- **Module boundaries and frequency mismatches.** Holdings and ownership are
  often semiannual or quarterly while prices are daily; merging across modules
  requires aligning report dates and disclosure lags. Do not assume a common
  frequency across modules.
- **Accounting-standard and regime breaks.** Chinese listed-firm financials span
  the pre-2007 PRC GAAP regime and the post-2007 IFRS-converged CAS; statement
  items are not directly comparable across the break. Watch the standard-change
  date when building long accounting panels.
- **Trading halts, limits, and special treatment.** Daily price limits, frequent
  trading suspensions, and ST/*ST special-treatment status produce stale or
  missing prices and truncated returns; treat suspended days carefully rather
  than carrying prices forward.
- **English/Chinese field labels and code tables.** Field names and categorical
  codes are documented in CSMAR's manuals (often Chinese-first); misreading a
  code table silently mislabels a variable. Keep the module codebook for the
  exact vintage you pulled.

## Reference: representative modules

| Module | Contents |
|---|---|
| Trading | Daily/intraday prices, returns, volume, market cap |
| Financial statements | Balance sheet, income, cash flow for listed firms |
| Ownership | Top-ten shareholders, ownership structure, controllers |
| Funds | Mutual-fund holdings and characteristics |
| Governance | Board, executive, and related-party data |

Pull the specific module and fields you need, record the module/version, and
keep the codebook; coverage and start dates differ by module.

## Citation

Cite the provider and database, e.g.: *China Stock Market & Accounting Research
(CSMAR) / GTA Information Technology, accessed YYYY-MM-DD.* State the modules and
fields used, the firm/share-class universe, and the extraction date so the sample
is reproducible.
