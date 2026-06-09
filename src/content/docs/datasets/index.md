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

Genuinely no-cost. Almost every page carries a dated provenance badge:
"Verified" when the access recipe was run live against the source, or "Source
reachable" when the endpoint was confirmed but not fully pulled. Not just
transcribed from docs. (One free academic dataset, Barro-Ursua, is documented
without a badge because its host blocked automated fetches from this session.)

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
| **SBA loans** | Loan-level SBA 7(a)/504 approvals (FOIA) | [SBA loans](/wiki/datasets/sba-loans/) |
| **FDIC Summary of Deposits** | Annual branch-level bank deposits | [FDIC Summary of Deposits](/wiki/datasets/fdic-summary-of-deposits/) |
| **Census Bureau** | BDS, QWI, ACS, population estimates (public products) | [Census Bureau](/wiki/datasets/census/) |
| **DFA** | Fed distribution of household wealth by group | [DFA](/wiki/datasets/dfa/) |
| **NSMO** | FHFA/CFPB mortgage-origination borrower survey | [NSMO](/wiki/datasets/nsmo/) |
| **Barro-Ursua** | Long-run cross-country GDP/consumption (documented, not fetched here) | [Barro-Ursua](/wiki/datasets/barro-ursua/) |
| **CFTC COT** | Weekly futures positions by trader category | [CFTC COT](/wiki/datasets/cftc-cot/) |
| **EPA TRI** | Facility-by-chemical annual toxic releases | [EPA TRI](/wiki/datasets/epa-tri/) |
| **FDIC QBP / financials** | Aggregate and institution-level bank condition & income | [FDIC QBP / financials](/wiki/datasets/fdic/) |
| **Federal Register** | US agency rules, proposed rules, notices (full text, 1994-) | [Federal Register](/wiki/datasets/federal-register/) |
| **NBER-CES** | Annual US manufacturing industry panel (output, TFP) | [NBER-CES](/wiki/datasets/nber-ces/) |
| **NOAA hurricanes** | Tropical-cyclone best-track positions & landfalls (HURDAT2) | [NOAA hurricanes](/wiki/datasets/noaa-hurricane/) |
| **NBER cycles** | US business cycle peak/trough reference dates | [NBER cycles](/wiki/datasets/nber-cycles/) |
| **IRS Form 990** | Nonprofit returns: financials, officers, compensation | [IRS Form 990](/wiki/datasets/irs-form-990/) |
| **SIPP** | Longitudinal household income & program participation | [SIPP](/wiki/datasets/sipp/) |
| **QWI (LEHD)** | Local labor-market employment & earnings flows | [QWI](/wiki/datasets/qwi-census/) |
| **Form N-MFP** | Monthly money-market-fund portfolio holdings (SEC) | [Form N-MFP](/wiki/datasets/n-mfp/) |
| **BLS** | Labor force, employment, wages (QCEW), CPI/PPI | [BLS](/wiki/datasets/bls/) |
| **HRS** | Older-household panel: health, wealth, expectations (registration-walled; not fetched here) | [HRS](/wiki/datasets/hrs/) |
| **VIX** | Daily CBOE volatility index, full history (1990-) | [VIX](/wiki/datasets/vix/) |
| **Shiller data** | Long-run S&P prices, CAPE, and home prices (1871/1890-) | [Shiller data](/wiki/datasets/shiller-data/) |
| **Zillow research** | Housing metrics: ZHVI, rents, days on market, price cuts | [Zillow research](/wiki/datasets/zillow/) |

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
| **I/B/E/S** | Sell-side analyst estimates, consensus and actuals | [I/B/E/S](/wiki/licensed/ibes/) |
| **SDC Platinum** | M&A and new-issues deal-level data | [SDC Platinum](/wiki/licensed/sdc-platinum/) |
| **CoreLogic** | US property, deeds, repeat-sales, foreclosure | [CoreLogic](/wiki/licensed/corelogic/) |
| **DealScan** | Syndicated and large corporate loan deals | [DealScan](/wiki/licensed/dealscan/) |
| **PitchBook** | Venture, private-equity, and M&A deal data | [PitchBook](/wiki/licensed/pitchbook/) |
| **Preqin** | Private-capital and hedge-fund data | [Preqin](/wiki/licensed/preqin/) |
| **RepRisk** | ESG risk-incident feed (28 issue categories) | [RepRisk](/wiki/licensed/reprisk/) |
| **Trucost** | Firm-level carbon and environmental data | [Trucost](/wiki/licensed/trucost/) |
| **TRACE** | Corporate bond secondary-market transactions (Enhanced, via WRDS) | [TRACE](/wiki/licensed/trace/) |
| **Thomson 13F (s34)** | Institutional equity holdings from 13F filings | [Thomson 13F (s34)](/wiki/licensed/thomson-13f/) |
| **TAQ** | NYSE intraday trade and quote microstructure data | [TAQ](/wiki/licensed/taq/) |
| **Orbis (BvD)** | Global public and private firm financials and ownership | [Orbis (BvD)](/wiki/licensed/orbis-bvd/) |
| **Markit bond pricing** | Composite dealer quotes for individual bonds | [Markit bond pricing](/wiki/licensed/markit/) |
| **Markit CDS** | Single-name credit default swap spreads | [Markit CDS](/wiki/licensed/markit-cds/) |
| **CoStar** | Commercial real estate transactions and characteristics | [CoStar](/wiki/licensed/costar/) |
| **Bloomberg** | Cross-asset terminal market data | [Bloomberg](/wiki/licensed/bloomberg/) |
| **NETS** | Establishment-level employment and location panel | [NETS](/wiki/licensed/nets/) |
| **Crane Data** | Money market fund holdings and assets | [Crane Data](/wiki/licensed/crane-mmf/) |

## Confidential: restricted access

Neither free nor commercially licensed. Confidential supervisory or
administrative microdata, reachable only through a qualifying affiliation or an
approved restricted-data arrangement inside a secure environment. These pages
document what the collection is and the gotchas, but carry **no provenance
badge**: there is no access path we can run here.

| Dataset | What it is | Page |
|---|---|---|
| **FR Y-14Q** | Fed stress-test bank data (loan-level corporate/CRE) | [FR Y-14Q](/wiki/datasets/fr-y14q/) |
| **FHA** | FHA single-family loan-level (restricted; public aggregates separate) | [FHA](/wiki/datasets/fha/) |
