---
title: Datasets for finance & economics research
description: >-
  Free, verified data sources for finance and economics research — plus the
  licensed core (WRDS/CRSP/Compustat) and what substitutes for it — with
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

## Free & verified

Genuinely no-cost. Every page carries a **Verified** date — when its access
recipe was last actually run against the live source, not just transcribed
from docs.

| Dataset | What it is | Page |
|---|---|---|
| **FRED** | Macro & financial time series (800k+) | [FRED](/wiki/datasets/fred/) |
| **SEC EDGAR** | US filings, XBRL financials, insider/13F | [SEC EDGAR](/wiki/datasets/edgar/) |
| **Ken French** | Fama-French factors & test portfolios | [Ken French](/wiki/datasets/ken-french/) |
| **Open Source Asset Pricing** | 212 anomaly signals + portfolios | [OSAP](/wiki/datasets/open-source-asset-pricing/) |
| **Flexible data-mining** | ~30K data-mined long-short strategies | [Flex-mining](/wiki/datasets/flex-mining/) |
| **DOL Form 5500** | ERISA pension/welfare plan filings | [Form 5500](/wiki/datasets/form-5500/) |

## Licensed — academic access

Not free, kept deliberately separate from the verified-free set.
**WRDS / CRSP / Compustat / IBES / OptionMetrics** are subscription-gated, but
most universities license WRDS for affiliated researchers. See
[WRDS / CRSP / Compustat](/wiki/licensed/wrds/) for the academic-access path
and exactly which free sources above substitute for which paid ones.
