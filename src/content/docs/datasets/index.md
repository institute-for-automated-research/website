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

_More dataset pages (EDGAR, Ken French, Open Source Asset Pricing, flexible
data-mining strategies, DOL Form 5500) are being added._

## Paywalled — academic-access note

**WRDS / CRSP / Compustat** are not free, but most universities hold a WRDS
subscription that covers them for affiliated researchers. If you have WRDS
access, the pipeline reaches CRSP and Compustat through it; if you do not, the
genuinely-free sources above cover a large share of asset-pricing and
corporate-finance work.
