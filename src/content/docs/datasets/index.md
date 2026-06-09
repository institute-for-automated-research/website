---
title: Datasets for finance & economics research
description: >-
  Free, verified data sources for finance and economics research, plus the
  licensed core (WRDS/CRSP/Compustat) and what substitutes for it, with
  working access recipes and the gotchas that bite automated pipelines.
sidebar:
  label: Overview
  order: 0
---

Public, no-cost datasets usable for serious finance and economics research.
Each page gives a working access recipe (including no-API-key fallbacks where
they exist) and the gotchas that bite automated pipelines, distilled from
what the [ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline
actually runs in production.

## Free & verified

Genuinely no-cost. Every page carries a dated provenance badge: "Verified"
when the access recipe was run live against the source, or "Source reachable"
when the endpoint was confirmed but not fully pulled. Not just transcribed
from docs.

| Dataset | What it is | Page |
|---|---|---|
| **FRED** | Macro & financial time series (800k+) | [FRED](/wiki/datasets/fred/) |
| **SEC EDGAR** | US filings, XBRL financials, insider/13F | [SEC EDGAR](/wiki/datasets/edgar/) |
| **Ken French** | Fama-French factors & test portfolios | [Ken French](/wiki/datasets/ken-french/) |
| **Open Source Asset Pricing** | 212 anomaly signals + portfolios | [OSAP](/wiki/datasets/open-source-asset-pricing/) |
| **Flexible data-mining** | ~30K data-mined long-short strategies | [Flex-mining](/wiki/datasets/flex-mining/) |
| **DOL Form 5500** | ERISA pension/welfare plan filings | [Form 5500](/wiki/datasets/form-5500/) |
| **Form ADV (IAPD)** | SEC investment-adviser registration | [Form ADV](/wiki/datasets/form-adv/) |
| **FFIEC Call Reports** | Quarterly bank condition & income filings | [Call Reports](/wiki/datasets/call-reports/) |
| **HMDA** | Loan-level US mortgage applications & originations | [HMDA](/wiki/datasets/hmda/) |
| **GSW yields** | Daily fitted US Treasury zero-coupon curve (1961-) | [GSW yields](/wiki/datasets/gsw-yields/) |
| **Flow of Funds (Z.1)** | US sector balance sheets & flows | [Flow of Funds](/wiki/datasets/flow-of-funds/) |
| **JST Macrohistory** | Long-run macro-financial panel, 18 economies | [JST Macrohistory](/wiki/datasets/jst-macrohistory/) |
| **NIPA (BEA)** | National accounts: GDP & components | [NIPA](/wiki/datasets/nipa/) |
| **SCF** | Survey of Consumer Finances household wealth | [SCF](/wiki/datasets/scf/) |

## Licensed: academic access

Not free, kept deliberately separate from the verified-free set.
**WRDS / CRSP / Compustat / IBES / OptionMetrics** are subscription-gated, but
most universities license WRDS for affiliated researchers. See
[WRDS / CRSP / Compustat](/wiki/licensed/wrds/) for the academic-access path
and exactly which free sources above substitute for which paid ones.

Alongside WRDS, several commercial vendor datasets show up in the papers we
distill. These pages document the access path and the gotchas, but carry **no
provenance badge**: they were not exercised here (no vendor credentials), so
they read as unverified per the Verified discipline.

| Dataset | What it is | Page |
|---|---|---|
| **WRDS / CRSP / Compustat** | The paywalled core; academic access | [WRDS](/wiki/licensed/wrds/) |
| **RavenPack** | News and event analytics (sentiment, relevance) | [RavenPack](/wiki/licensed/ravenpack/) |
| **FactSet LionShares** | Global institutional and fund holdings | [FactSet LionShares](/wiki/licensed/factset-lionshares/) |
| **Revelio Labs** | Workforce / human-capital panel | [Revelio Labs](/wiki/licensed/revelio/) |
