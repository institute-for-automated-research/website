---
title: Openly available datasets for finance & economics research
description: >-
  Free, downloadable data sources for finance and economics research, with
  working access recipes and the gotchas that bite automated pipelines. The
  commercial and confidential tiers are documented separately.
sidebar:
  label: Overview
  order: 0
---

Public, no-cost datasets usable for serious finance and economics research.
Each page gives a working access recipe (including no-API-key fallbacks where
they exist) and the gotchas that bite automated pipelines, distilled from
what the [ZeroPaper](https://github.com/alejandroll10/zeropaper) pipeline
actually runs in production.

Datasets are split by how hard they are to obtain, matching the registry's
three access tiers: **openly available** (this page), then
[**commercial**](/wiki/commercial/) (purchasable from a vendor or via a
licence such as WRDS) and [**confidential**](/wiki/confidential/)
(supervisory or administrative microdata, not purchasable at all).

## Free & verified

Open by default, mostly no-cost. Almost every page carries a dated provenance
badge: "Verified" when the access recipe was run live against the source, or
"Source reachable" when the endpoint was confirmed but not fully pulled. Not
just transcribed from docs. Some entries are documented without a badge because
they could not be exercised here: a host that blocks automated fetches
(Barro-Ursua, CRA), a free but registration-gated portal (Fannie/Freddie), a
free view that prohibits automated access (NMLS, Maryland Judiciary), an
open-but-metered service with per-page fees (PACER), or a historical compilation
with no standing digital source (Forbes executive compensation). Each such page
says so plainly.

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
| **NBER working papers** | Pre-publication economics & finance papers (metadata + full-text PDFs) | [NBER working papers](/wiki/datasets/nber-working-papers/) |
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
| **ECB Data Portal** | Euro-area monetary, rates, FX, Eurosystem holdings | [ECB Data Portal](/wiki/datasets/ecb-data-warehouse/) |
| **IMF IFS** | Cross-country external-sector and macro series | [IMF IFS](/wiki/datasets/imf-ifs/) |
| **FHFA HPI** | Repeat-sales US house price index by geography | [FHFA HPI](/wiki/datasets/fhfa-hpi/) |
| **HCRIS** | Medicare hospital cost reports (CMS-2552) | [HCRIS](/wiki/datasets/hcris/) |
| **EPA Supply Chain GHG** | NAICS-level emissions per dollar of output | [EPA Supply Chain GHG](/wiki/datasets/us-epa-supply-chain/) |
| **BEA Input-Output** | Industry Use/Make/Requirements tables; production networks | [BEA Input-Output](/wiki/datasets/bea-io/) |
| **EIA Electricity** | Retail sales/prices, generation by fuel, emission factors | [EIA Electricity](/wiki/datasets/eia-electricity/) |
| **BIS EER** | Trade-weighted nominal & real effective exchange rates (~60 economies) | [BIS EER](/wiki/datasets/bis-rer/) |
| **Wayback Machine** | Historical web-page snapshots (Internet Archive, 1996-) | [Wayback Machine](/wiki/datasets/wayback-machine/) |
| **CMS quality** | Hospital mortality, readmissions, complications, HCAHPS (Care Compare) | [CMS quality](/wiki/datasets/cms-quality/) |
| **Dartmouth Atlas** | Hospital service-area / referral-region market geographies | [Dartmouth Atlas](/wiki/datasets/dartmouth-atlas/) |
| **ACS** | Small-area income, occupation, housing, demographics (Census survey) | [ACS](/wiki/datasets/acs/) |
| **TNIC (Hoberg-Phillips)** | Text-based firm-pair product similarity and industries | [TNIC](/wiki/datasets/tnic/) |
| **Facebook SCI** | Location-pair social connectedness from Facebook friendships | [Facebook SCI](/wiki/datasets/facebook-sci/) |
| **LoPucki BRD** | Large public-company bankruptcies, 1980-2022 (frozen) | [LoPucki BRD](/wiki/datasets/lopucki-brd/) |
| **Uniswap on-chain** | Swaps, mints, burns for Uniswap pools (no-key Ethereum RPC) | [Uniswap on-chain](/wiki/datasets/uniswap-blockchain/) |
| **Amsterdam housing** | Long-run Amsterdam house prices and rents (1620-) | [Amsterdam housing](/wiki/datasets/amsterdam-housing-transactions/) |
| **Paris rents** | Long-run Paris rents (1809-1943 public; 1500-1831 working-paper-only) | [Paris rents](/wiki/datasets/paris-rents/) |
| **Superstar Cities (GMS)** | Long-run MSA house prices (openICPSR free sign-in) | [Superstar Cities (GMS)](/wiki/datasets/gyourko-mayer-sinai/) |
| **CRA (FFIEC)** | Bank small-business / small-farm lending by tract (host bot-blocks automation; not fetched here) | [CRA (FFIEC)](/wiki/datasets/cra-ffiec/) |
| **Fannie / Freddie loan-level** | GSE single-family loan performance (free, registration-gated; not fetched here) | [Fannie / Freddie loan-level](/wiki/datasets/fannie-freddie/) |
| **NMLS** | Licensed mortgage loan officer registry (free lookup, automation prohibited; not fetched here) | [NMLS](/wiki/datasets/nmls/) |
| **Maryland Judiciary** | State court case records (free view, automation prohibited; not fetched here) | [Maryland Judiciary](/wiki/datasets/maryland-judiciary/) |
| **PACER** | Federal court records, incl. bankruptcy (open to all, per-page fees; not bulk-free) | [PACER](/wiki/datasets/pacer-bankruptcy/) |
| **Forbes exec comp** | Historical CEO pay surveys (hand-collected from print; no standing source) | [Forbes exec comp](/wiki/datasets/forbes-executive-compensation/) |

