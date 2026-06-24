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
| **OptionMetrics IvyDB** | Daily option prices, implied vols, and Greeks | [OptionMetrics](/wiki/licensed/optionmetrics/) |
| **Compustat Global** | Non-US company fundamentals | [Compustat Global](/wiki/licensed/compustat-global/) |
| **Compustat Segments** | Business- and geographic-segment financials | [Compustat Segments](/wiki/licensed/compustat-segments/) |
| **Datastream** | Global multi-asset and macro time series | [Datastream](/wiki/licensed/datastream/) |
| **Worldscope** | Global company fundamentals | [Worldscope](/wiki/licensed/worldscope/) |
| **Capital IQ** | Company, capital-structure, and transactions data | [Capital IQ](/wiki/licensed/capital-iq/) |
| **Audit Analytics** | Auditor, disclosure, and restatement data | [Audit Analytics](/wiki/licensed/audit-analytics/) |
| **NielsenIQ** | Retail scanner and Homescan consumer-panel data (via Kilts) | [NielsenIQ](/wiki/licensed/nielseniq/) |
| **Morningstar** | Fund, ETF, and fund-sustainability data | [Morningstar](/wiki/licensed/morningstar/) |
| **KLD / MSCI ESG** | Firm-level ESG strength/concern and ratings | [KLD / MSCI ESG](/wiki/licensed/kld/) |
| **Cboe options** | Index/equity option quotes, trades, and VIX | [Cboe options](/wiki/licensed/cboe-options/) |
| **FactSet Revere** | Inter-firm supplier/customer/competitor links | [FactSet Revere](/wiki/licensed/factset-revere/) |
| **Global Financial Data** | Long-run cross-country stock, bond, and macro series | [Global Financial Data](/wiki/licensed/global-financial-data/) |
| **Crunchbase** | Startup characteristics, funding rounds, investors | [Crunchbase](/wiki/licensed/crunchbase/) |
| **CSMAR** | Chinese listed-firm prices, financials, ownership | [CSMAR](/wiki/licensed/csmar/) |
| **MSCI Real Estate** | Property total-return indices and rental yields (IPD) | [MSCI Real Estate](/wiki/licensed/msci-real-estate/) |
| **Refinitiv transcripts** | Earnings-call transcripts for textual analysis | [Refinitiv transcripts](/wiki/licensed/refinitiv-transcripts/) |
| **Markit Securities Finance** | Stock borrow fees, utilization, lendable supply | [Markit Securities Finance](/wiki/licensed/markit-securities-finance/) |
| **Markit quanto** | Cross-currency quanto quotes (FX-equity covariance) | [Markit quanto](/wiki/licensed/markit-quanto/) |
| **Blue Chip Forecasts** | Professional forecaster rate/GDP survey | [Blue Chip Forecasts](/wiki/licensed/blue-chip-forecasts/) |
| **Consensus Economics** | Cross-country macro & FX forecast surveys | [Consensus Economics](/wiki/licensed/consensus-economics/) |
| **Cerved** | Italian company financials (incl. private firms) | [Cerved](/wiki/licensed/cerved/) |
| **Clarity Services** | Subprime/alternative-credit bureau (payday, installment) | [Clarity Services](/wiki/licensed/clarity-services/) |
| **Equifax** | Traditional consumer credit-bureau records | [Equifax](/wiki/licensed/equifax/) |
| **InfoUSA / Data Axle** | Establishment listings: location, industry, employment | [InfoUSA / Data Axle](/wiki/licensed/infousa/) |
| **Lipper eMAXX** | CUSIP-level bond holdings by insurer/fund/ETF | [Lipper eMAXX](/wiki/licensed/emaxx/) |
| **Eurodollar futures** | Intraday CME prices for policy-surprise windows | [Eurodollar futures](/wiki/licensed/eurodollar-futures/) |
| **FTSE All-Share** | UK equity index membership, market cap, returns | [FTSE All-Share](/wiki/licensed/ftse-all-share/) |
| **Siblis Research** | S&P/Nasdaq index addition-deletion dates and values | [Siblis Research](/wiki/licensed/siblis-research/) |
| **Optimal Blue** | Mortgage rate-locks and real-time lender offers | [Optimal Blue](/wiki/licensed/optimal-blue/) |
| **RateWatch** | Branch-level posted deposit and CD rates (weekly) | [RateWatch](/wiki/licensed/ratewatch/) |
| **BvD Zephyr** | Global M&A, IPO, and PE/VC deals, linked to Orbis | [BvD Zephyr](/wiki/licensed/bureau-van-dijk-zephyr/) |
| **VentureSource** | VC funds, financing rounds, startup locations | [VentureSource](/wiki/licensed/venturesource/) |
| **NYT archive** | Full-text New York Times corpus (text-as-data) | [NYT archive](/wiki/licensed/nyt-news/) |
| **LexisNexis court** | U.S. court filings and public records | [LexisNexis court](/wiki/licensed/lexisnexis-court/) |
| **Ancestry records** | Death indexes and genealogical records | [Ancestry records](/wiki/licensed/ancestry-death-records/) |
| **Getty CEO photos** | Dated executive press photos for facial measures | [Getty CEO photos](/wiki/licensed/gettyimages-ceo-photos/) |
| **AHA Annual Survey** | U.S. hospital services, beds, operations, system affiliation | [AHA Annual Survey](/wiki/licensed/aha-annual-survey/) |
| **Moody's URD** | Creditor recovery rates at resolution of corporate defaults | [Moody's URD](/wiki/licensed/moodys-urd/) |
| **Rystad Energy** | Asset-level global oil and gas production, costs, reserves | [Rystad Energy](/wiki/licensed/rystad/) |
| **SteelBenchmarker** | Biweekly reference prices for steel products | [SteelBenchmarker](/wiki/licensed/steelbenchmarker/) |
| **StockTwits** | Ticker-tagged retail social-media messages and sentiment | [StockTwits](/wiki/licensed/stocktwits/) |
| **Titlon (OSE)** | Oslo Stock Exchange prices, returns, accounting (Nordic academic) | [Titlon (OSE)](/wiki/licensed/titlon-ose/) |
| **ZTRAX** | Zillow property deeds and assessor records (discontinued 2023) | [ZTRAX](/wiki/licensed/ztrax/) |

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
| **FR 2052a** | Bank liquidity flows by counterparty, product, maturity | [FR 2052a](/wiki/datasets/fr-2052a/) |
| **FR 2004C** | Weekly primary-dealer positions and financing (dealer-level) | [FR 2004C](/wiki/datasets/fr2004c/) |
| **FR 2420** | Transaction-level money-market rates (FF, ED, CD) | [FR 2420](/wiki/datasets/fr2420/) |
| **FR 2644** | Weekly bank balance sheet (bank-level; H.8 basis) | [FR 2644](/wiki/datasets/fr2644/) |
| **Fed funds (confidential)** | Transaction-level federal funds borrowing/lending | [Fed funds](/wiki/datasets/fed-funds-confidential/) |
| **Discount window (confidential)** | Loan-level Fed discount window borrowing | [Discount window](/wiki/datasets/discount-window-confidential/) |
| **Fedwire** | Payment-level interbank transfers (RTGS) | [Fedwire](/wiki/datasets/fedwire/) |
| **NIC (Fed)** | CAMELS ratings (confidential) + BHC structure (public) | [NIC](/wiki/datasets/nic-fed/) |
| **STBL (Fed)** | Loan-level C&I terms and internal risk ratings (risk rating 1997 on; survey ended 2017) | [STBL](/wiki/datasets/stbl-fed/) |
| **MCR (NMLS)** | Company-level nonbank mortgage lender reports | [MCR](/wiki/datasets/mcr-nmls/) |
| **INSEE DADS** | French matched employer-employee data (via CASD) | [INSEE DADS](/wiki/datasets/insee-dads/) |
| **INSEE LIFI** | French inter-firm ownership / business-group links (via CASD) | [INSEE LIFI](/wiki/datasets/insee-lifi/) |
| **INSEE tax files** | French firm balance sheets and income statements (via CASD) | [INSEE tax files](/wiki/datasets/insee-tax-files/) |
| **LISA (Sweden)** | Swedish individual-level population register (via SCB) | [LISA](/wiki/datasets/lisa-sweden/) |
| **FEK (Sweden)** | Swedish firm structural business statistics (via SCB) | [FEK](/wiki/datasets/fek-sweden/) |
| **Statistics Norway** | Norwegian income/wealth registers (aggregates public; microdata restricted) | [Statistics Norway](/wiki/datasets/statistics-norway/) |
| **VPS (Norway)** | Complete individual securities holdings (Norwegian CSD) | [VPS](/wiki/datasets/vps-norway/) |
| **IEB (Germany)** | German administrative employment biographies (via IAB FDZ) | [IEB](/wiki/datasets/ieb-germany/) |
| **IAB Establishment Panel** | German establishment survey (via IAB FDZ) | [IAB Establishment Panel](/wiki/datasets/iab-establishment-panel/) |
| **Italy Credit Register** | Italian firm-bank loans + bank boards (Bank of Italy) | [Italy Credit Register](/wiki/datasets/bank-of-italy-credit-register/) |
| **Spain CIR** | Spanish loan-level corporate credit register (Banco de Espana) | [Spain CIR](/wiki/datasets/spain-cir/) |
| **FDIC construction loans** | Loan-level construction-loan servicing (single failed bank) | [FDIC construction loans](/wiki/datasets/fdic-construction-loans/) |
| **FDIC failed-bank bids** | Bid-level bank-failure resolution records | [FDIC failed-bank bids](/wiki/datasets/fdic-failed-bank/) |
| **FDIC supervisory** | Account-level deposits + enforcement actions | [FDIC supervisory](/wiki/datasets/fdic-supervisory/) |
| **OSFI (Canada)** | Contract-level mortgages from federally regulated lenders | [OSFI](/wiki/datasets/osfi-canada/) |
| **Banorte (Mexico)** | One bank's account panel + a savings field experiment | [Banorte](/wiki/datasets/banorte-experiment/) |
| **Online broker (Germany)** | One broker's retail-investor holdings and trades | [Online broker](/wiki/datasets/online-broker/) |
| **Bank proprietary (Germany)** | One bank's customer wealth/income/holdings | [Bank proprietary](/wiki/datasets/bank-proprietary/) |
| **Bilendi survey (Germany)** | Author-commissioned representative online survey | [Bilendi survey](/wiki/datasets/bilendi-survey/) |
| **Indifi (India)** | One FinTech lender's loan applications + payment history | [Indifi](/wiki/datasets/indifi-loan-applications/) |
| **China shadow margin** | One platform's off-exchange margin balances (2015) | [China shadow margin](/wiki/datasets/china-shadow-margin/) |
| **SLI private meetings** | One asset manager's meeting notes, ratings, trades | [SLI private meetings](/wiki/datasets/sli-private-meetings/) |
| **TSP user list** | Which banks used the attacked tech service provider | [TSP user list](/wiki/datasets/tsp-user-list/) |
| **401(k) administrative** | One recordkeeper's participant allocations and defaults | [401(k) administrative](/wiki/datasets/401k-admin/) |
| **DTCC commercial paper** | Transaction-level CP issuance (issuer, rate, maturity) | [DTCC](/wiki/datasets/dtcc/) |
| **FICC GCF repo** | Dealer-level interdealer general-collateral repo | [FICC GCF repo](/wiki/datasets/ficc-gcf-repo/) |
| **Equifax credit** | US consumer credit microdata + payroll income verification | [Equifax credit](/wiki/datasets/equifax-credit/) |
| **TransUnion (Canada)** | Population-wide Canadian credit-bureau records | [TransUnion](/wiki/datasets/transunion-canada/) |
