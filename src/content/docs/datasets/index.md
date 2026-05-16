---
title: Free datasets for finance & economics research
description: >-
  Public, no-cost data sources for finance and economics research — with
  working access recipes and the gotchas that bite automated pipelines.
sidebar:
  label: Overview
  order: 0
---

Public, no-cost datasets usable for serious finance and economics research.
Each page gives a working access recipe (including no-API-key fallbacks where
they exist) and the gotchas that bite automated pipelines — distilled from
what the [ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline
actually runs in production.

## Genuinely free

| Dataset | What it is | Page |
|---|---|---|
| **FRED** | Macro & financial time series (800k+) | [FRED](/wiki/datasets/fred/) |
| **SEC EDGAR** | US filings, XBRL financials, insider/13F | [SEC EDGAR](/wiki/datasets/edgar/) |

_More dataset pages (Ken French, Open Source Asset Pricing, flexible
data-mining strategies, DOL Form 5500) are being added. Every page carries a
**Verified** date — when its access recipe was last actually run._

## Paywalled — academic-access note

**WRDS / CRSP / Compustat** are not free, but most universities hold a WRDS
subscription that covers them for affiliated researchers. If you have WRDS
access, the pipeline reaches CRSP and Compustat through it; if you do not, the
genuinely-free sources above cover a large share of asset-pricing and
corporate-finance work.
