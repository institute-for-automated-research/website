---
title: "Hidden Cost of ETF Investing: Liu, T. Zhang & Y. Zhang (2026)"
description: >-
  Distilled: ETFs earn significantly positive overnight returns and negative
  intraday returns; the gap is driven by retail demand near the market open and
  arbitrage constraints that prevent immediate price correction. Journal of Banking
  and Finance 2026, CC BY 4.0. Twenty-one core results with source locators, datasets
  used, the three tested hypotheses, and the estimating equations.
sidebar:
  label: Liu-Zhang-Zhang 2026
  order: 1
tags: [paper-summary, asset-pricing, equities, portfolio-sort, fama-macbeth, panel-regression, open-access, cc-by, peer-reviewed, unreplicated, data:crsp-mutual-funds, data:wrds, data:taq, data:morningstar, data:thomson-13f]
paper:
  authors: Xin Liu, Tianyao (Terry) Zhang, Yaodong Zhang
  authorList:
    - { family: Liu, given: Xin, orcid: 0000-0003-4878-1486, affiliation: Australian National University }
    - { family: Zhang, given: Tianyao, orcid: 0000-0003-0012-2190, affiliation: Australian National University }
    - { family: Zhang, given: Yaodong, orcid: 0009-0005-4183-9464, affiliation: Australian National University }
  year: 2026
  venue: Journal of Banking and Finance 185, 107621 (2026)
  venueShort: J. Banking Finance 2026
  tier: field
  doi: 10.1016/j.jbankfin.2025.107621
  jel:
    codes: [G12, G14, G23, N22]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Market Dynamics and Volatility', 'Financial Literacy, Pension, Retirement Analysis']
  dataAccess: licensed-commercial
  outcome:
    - overnight-intraday return differential for ETFs
    - cross-sectional variation in ETF overnight vs intraday returns
    - close-to-close ETF returns
  outcomeClass: [security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-03-23; corroborated by artifact p.1 CC BY license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "blocked-paywall (ScienceDirect/Elsevier site; CC-BY VOR licence confirmed in Crossref DOI metadata 2026-06-25)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 21
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [portfolio-sort, fama-macbeth, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [limits-to-arbitrage, demand-elasticity]
  scope:
    region: US
    assetClass: US ETFs (equity, fixed income, other)
    period: 2004-01..2021-12
    frequency: mixed
    dataType: [market, accounting]
    granularity: [security]
    n: "2,916 unique US ETFs, 202,825 monthly observations, January 2004 to December 2021"
  findings:
    - { ref: R1, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "0.933%*** per month (SE 0.207%); overnight = 0.784%*** (SE 0.165%), intraday = -0.150% (SE 0.186%, insignificant)", direction: positive, vsBenchmark: significantly positive overnight vs insignificant intraday }
    - { ref: R2, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "high-minus-low composite retail demand = 1.162%*** per month (SE 0.137%)", direction: positive, vsBenchmark: high-retail-demand ETFs vs low-retail-demand ETFs }
    - { ref: R3, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "high-minus-low composite arbitrage constraint = 0.875%*** per month (SE 0.126%)", direction: positive, vsBenchmark: high-arbitrage-constraint ETFs vs low-arbitrage-constraint ETFs }
    - { ref: R4, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "raw NDiff high/high = 1.988%*** (SE 0.281%) and low/low = 0.312%** (SE 0.152%); high-minus-low arbitrage spreads within low/mid/high retail-demand groups = 0.534%*** (SE 0.160%), 0.646%*** (0.153%), 0.907%*** (0.153%); the intro reports an average of 0.69%", direction: positive, vsBenchmark: "high/high is approximately 6x the low/low portfolio differential" }
    - { ref: R5, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "retail ownership coefficient = 0.898*** (SE 0.102) in the ownership-only column; 0.833*** (SE 0.092) in the full-controls column", direction: positive }
    - { ref: R6, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "EIP months: +2.372%*** (SE 0.076); Retail_demand x EIP interaction = 1.370%*** (SE 0.086)", direction: positive, vsBenchmark: COVID-19 EIP periods vs non-EIP months in the same pandemic window }
    - { ref: R7, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "market open retail order imbalance coefficient = 0.082*** (SE 0.006) on NDiff; market close imbalance coefficient is insignificant", direction: positive }
    - { ref: R8, outcome: overnight-intraday return differential for ETFs, metric: level, value: "NDdiff mean = 1.017% per month (N = 202,825); Night Ret = 0.850%; Day Ret = -0.168%", direction: positive }
    - { ref: R9, outcome: overnight-intraday return differential for ETFs, metric: correlation, value: "corr(NDdiff, Retail Demand) = 0.076; corr(NDdiff, Arbi Constraint) = 0.074", direction: positive }
    - { ref: R10, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "Domestic equity = 1.197%***; foreign equity (US time zone) = 0.709%***; foreign equity (non-US time zone) = 0.590%**; fixed income = 0.191%**; other = 0.891%***; NYSE = 0.921%***; NASDAQ = 1.187%***; excluding Monday = 0.804%***, ex-dividend days = 0.882%***, macro-news days = 0.924%***", direction: positive }
    - { ref: R11, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "High-minus-low: intraday risk = 1.325%*** (SE 0.202); overnight risk = 0.685%*** (0.184); night-minus-day risk = -0.862%*** (0.174); night-minus-day beta = -0.181%* (0.102)", direction: mixed }
    - { ref: R12, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "Fama-MacBeth: Day Risk = 1.982*** (SE 0.231) in col. 1 and 1.957*** (0.198) in col. 6; Night Risk = -0.634*** (0.200) and -0.700*** (0.206); col. 2 Day Beta = 0.772*** (0.172), Night Beta = -0.103 (0.143, n.s.); col. 6 Day Beta = 0.221 (0.230, n.s.), Night Beta = -0.781*** (0.165); N = 200,118", direction: mixed }
    - { ref: R13, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "High retail demand/high arbitrage constraints: overnight = 1.279%*** (SE 0.216), intraday = -0.709%*** (0.268); low/low: overnight = 0.458%*** (0.119), intraday = 0.146% (0.141, n.s.)", direction: positive, vsBenchmark: high-demand/high-constraint portfolio vs low/low portfolio }
    - { ref: R14, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "Benchmark-time FE: col. 3 retail demand = 0.267*** (SE 0.077), arbitrage constraint = 0.152** (0.069); col. 4 = 0.274*** (0.087) and 0.291** (0.137); N = 42,700", direction: positive }
    - { ref: R15, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "Retail_demand x EIP = 0.869*** (SE 0.281) with benchmark-time fixed effects; N = 9,845", direction: positive }
    - { ref: R16, outcome: overnight-intraday return differential for ETFs, metric: coefficient, value: "Benchmark-time FE: market-open retail imbalance = 0.165*** (SE 0.030); market-close imbalance = 0.005 (SE 0.011, n.s.); N = 818,514", direction: positive }
    - { ref: R17, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "Overnight-return quintile 5-minus-1 NDiff = 2.396%*** (SE 0.247) raw; 2.428%*** (0.277) four-factor-adjusted", direction: positive, vsBenchmark: highest vs lowest lagged overnight-return quintile }
    - { ref: R18, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "Intraday-return quintile 5-minus-1 NDiff = -1.958%*** (SE 0.227) raw; -2.083%*** (0.243) four-factor-adjusted", direction: negative, vsBenchmark: highest vs lowest lagged intraday-return quintile }
    - { ref: R19, outcome: close-to-close ETF returns, metric: return-spread, value: "Retail high-minus-low spreads across arbitrage groups: raw = 0.164% (SE 0.151), -0.156% (0.189), -0.029% (0.193), all insignificant; four-factor-adjusted = -0.062% (0.133), -0.488%*** (0.137), -0.052% (0.148)", direction: mixed }
    - { ref: R20, outcome: close-to-close ETF returns, metric: return-spread, value: "Four-factor-adjusted high-minus-low arbitrage-constraint spreads = -0.270%*** (SE 0.083), -0.397%*** (0.103), -0.260%* (0.139) across retail-demand groups", direction: negative, vsBenchmark: high vs low arbitrage-constraint portfolios }
    - { ref: R21, outcome: overnight-intraday return differential for ETFs, metric: return-spread, value: "Four-factor-adjusted NDiff: high retail demand/high arbitrage constraints = 1.868%*** (SE 0.275); low/low = 0.160% (SE 0.164, n.s.)", direction: positive, vsBenchmark: high/high portfolio vs low/low portfolio }
  resultType: confirms
  relatesTo:
    - { cite: 'Lou, Polk and Skouras (2019)', doi: '10.1016/j.jfineco.2019.03.011', relation: builds-on, note: 'overnight/intraday return definitions and tug-of-war concept adapted to the ETF setting' }
    - { cite: 'Lachance (2021)', doi: '10.1016/j.finmar.2020.100563', relation: extends, note: 'complements her study of ETFs high overnight returns by identifying retail demand and arbitrage constraints as the mechanism' }
    - { cite: 'Bogousslavsky (2021)', doi: '10.1016/j.jfineco.2020.07.020', relation: builds-on, note: 'the cross-section of intraday and overnight stock returns; this paper shows similar patterns hold in the ETF market' }
    - { cite: 'Berkman et al. (2012)', doi: '10.1017/s0022109012000270', relation: builds-on, note: 'retail attention and bid-ask bounce inflate open prices; this paper extends to ETFs using mid-quote returns to strip out bid-ask effects' }
    - { cite: 'Boehmer et al. (2021)', doi: '10.1111/jofi.13033', relation: builds-on, note: 'algorithm to identify retail investor orders from TAQ sub-penny price improvements, applied to infer retail order imbalances near the open and close' }
  openQuestions:
    - "How much of the opening-price distortion remains by the close, given the authors' argument that AP creation and redemption make closing prices more efficient (p. 13, conclusion)."
  replicationCode:
    status: none
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107621", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[content-version=vor]: URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-03-23; two TDM licenses also present; artifact footer confirms CC BY" }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-15, all tables and figures); seven results extracted from the source PDF. Not human-verified. Not reproduced. Authors state they do not have permission to share data." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all seven result rows confirmed correct; equations (1)-(5),(9),(10) and FM/PR/EIP specs verified term-by-term; one fix applied: added missing JEL code N22 (present on PDF p. 1)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the source PDF pp. 1-15; appended 14 quantitative Core results and matching findings, added the close-to-close outcome label, and completed equations (6)-(8) and estimating specifications. These additions are not human-verified and not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 21 Core results, equations, specifications, classifications, findings, frontmatter, prose, and citation locatability against the source PDF; corrected the Table 6 diagonal contrast, clarified Table 5 ownership-only versus full-controls estimates, removed the unsupported difference-in-differences method label, and aligned family/resultType with the EIP design and prior-pattern extension." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results (the overnight vs intraday return differential in the US ETF market, its magnitude, and its mechanism), the three tested hypotheses, and the key estimating equations: enough to know what it found and how, without reading all 15 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107621).

## TL;DR

Decomposing ETF close-to-close mid-quote returns into overnight and intraday components (January 2004 to December 2021, 2,916 US ETFs), the paper documents that overnight returns are significantly positive on average (0.78% per month), while intraday returns are not significantly different from zero (-0.15%), producing a persistent overnight-intraday gap of 0.93% per month. This gap is ubiquitous across asset types (equity, fixed income, and other ETFs) and exchanges (NYSE and NASDAQ). Three candidate explanations are tested and the first two are rejected: the differential is not explained by overnight risk being higher than intraday risk (H1 rejected), nor by information asymmetry driving informed traders to exit at the close (H2 rejected). Instead, the evidence supports H3: the gap is driven by excess retail demand near the market open and by arbitrage constraints that slow correction. ETFs with the highest retail demand and highest arbitrage constraints show a monthly differential nearly six times larger than ETFs in the lowest demand and constraint group (1.99% vs 0.31% per month). Using COVID-19 Economic Impact Payments (EIPs) as an exogenous shock to retail demand, the paper shows that EIP months raise the overnight-intraday return difference by 2.37% per month, providing causal evidence for the retail demand channel.

Prior work by Lou, Polk and Skouras (2019) documents a tug-of-war between overnight and intraday returns for individual stocks; this paper establishes the same pattern in ETFs and identifies the underlying mechanism. Lachance (2021) focuses on ETFs' high overnight returns from a microstructure perspective; this paper complements her work by focusing on the full overnight-intraday differential and by decomposing the sources. Bogousslavsky (2021) documents the cross-section of intraday and overnight stock returns; this paper extends those findings to ETFs and links them to retail demand and arbitrage supply. Berkman et al. (2012) link retail investor attention and bid-ask bounce to inflated open prices; this paper strips out the bid-ask effect via mid-quote returns and shows the return pattern survives. Boehmer et al. (2021) propose an algorithm to identify retail orders in TAQ; the paper uses their method to measure retail order imbalances near the open.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. All returns are in percentages. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | The all-ETF market portfolio has a **significantly positive overnight return and an insignificant intraday return**, producing a 0.93%/month overnight-intraday differential | Table 3, Panel A, p. 7 | Overnight = 0.784%\*\*\* (SE 0.165%), Intraday = -0.150% (SE 0.186%), Overnight-Intraday = 0.933%\*\*\* (SE 0.207%) |
| R2 | **ETFs with the highest retail demand have a significantly larger overnight-intraday differential** than low-retail-demand ETFs; the composite retail demand spread is 1.162%/month | Table 4, Panel B (bottom row), p. 8 | High-minus-low composite retail demand = 1.162%\*\*\* (SE 0.137%); individual proxies: max return 0.926%\*\*\* (SE 0.188%), retail ownership 0.625%\*\*\* (SE 0.078%), retail flow 0.360%\*\*\* (SE 0.084%) |
| R3 | **ETFs with the tightest arbitrage constraints have a larger overnight-intraday differential**; the composite arbitrage constraint spread is 0.875%/month | Table 4, Panel C (bottom row), p. 8 | High-minus-low composite arbitrage constraint = 0.875%\*\*\* (SE 0.126%); proxies: AP Concentration 0.424%\*\*\* (SE 0.095%), IVol 1.012%\*\*\* (SE 0.191%), Bid-Ask Spread 0.634%\*\*\* (SE 0.121%), Amihud Illiquidity 0.373%\*\*\* (SE 0.115%) |
| R4 | **Jointly, high retail demand and high arbitrage constraints produce a differential nearly six times larger** than the low/low group (1.99% vs 0.31% per month) | Table 6, Panel A, p. 10 | High/high = 1.988%\*\*\* (SE 0.281%) and low/low = 0.312%\*\* (SE 0.152%). High-minus-low arbitrage-constraint spreads within low, mid, and high retail-demand groups are 0.534%\*\*\* (SE 0.160%), 0.646%\*\*\* (0.153%), and 0.907%\*\*\* (0.153%), averaging 0.69% as stated in the introduction. The table's 1.143%\*\*\* (SE 0.157%) is instead the high-minus-low retail-demand spread within the high-arbitrage-constraint group. |
| R5 | **Fama-MacBeth regressions show that retail investor ownership positively predicts the overnight-intraday differential**; the association remains significant with the full controls | Table 5, col. 3 and col. 6, p. 9 | Retail Ownership coefficient = 0.898%\*\*\* (SE 0.102) in col. 3 (ownership-only); 0.833%\*\*\* (SE 0.092) in col. 6 (full specification); N = 200,118 |
| R6 | **COVID-19 Economic Impact Payments (EIPs) increase the overnight-intraday differential by 2.37%/month**, confirming causal role of retail demand | Table 8, col. 2-3, p. 11 | EIP months: +2.372%\*\*\* (SE 0.076); Retail_demand x EIP interaction = 1.370%\*\*\* (SE 0.086); sample: January 2020 to December 2021, N = 45,492 |
| R7 | **Retail order imbalances near the market open (not the close) drive the overnight-intraday differential**, measured directly from TAQ | Table 9, col. 1-2, p. 11 | Market open retail imbalance coefficient = 0.082%\*\*\* (SE 0.006) on NDiff; market close retail imbalance coefficient = 0.001 (SE 0.002, insignificant); sample: January 2010 to December 2021, N = 3,975,301 |
| R8 | Fund-month summary statistics show the average ETF overnight-intraday return differential is positive, with positive overnight and negative intraday returns | Table 1, p. 6 | NDdiff mean = 1.017% (N = 202,825); Night Ret = 0.850%; Day Ret = -0.168% |
| R9 | The simple cross-sectional correlations of the return differential with composite retail demand and arbitrage constraints are positive | Table 2, Panel A, p. 6 | corr(NDdiff, Retail Demand) = 0.076; corr(NDdiff, Arbi Constraint) = 0.074 |
| R10 | The differential persists across ETF sectors and venues and after excluding Mondays, ex-dividend days, or macro-news days | Table 3, Panels A-C, p. 7 | Sector NDiff: domestic equity 1.197%*** (SE 0.250), foreign equity with US time zone 0.709%*** (0.246), non-US time zone 0.590%** (0.243), fixed income 0.191%** (0.084), other 0.891%*** (0.191); NYSE 0.921%*** (0.210), NASDAQ 1.187%*** (0.257); excluding Monday 0.804%*** (0.255), ex-dividend 0.882%*** (0.211), macro-news 0.924%*** (0.217) |
| R11 | Risk sorts reject the prediction that greater overnight risk relative to intraday risk produces a larger return differential | Table 4, Panel A, p. 8 | High-minus-low spread: intraday risk 1.325%*** (SE 0.202), overnight risk 0.685%*** (0.184), night-minus-day risk -0.862%*** (0.174), night-minus-day beta -0.181%* (0.102) |
| R12 | Fama-MacBeth estimates associate higher intraday risk and lower overnight risk with a larger differential, while risk betas are less stable across specifications | Table 5, cols. 1, 2, 6, p. 9 | Col. 1: Day Risk 1.982*** (SE 0.231), Night Risk -0.634*** (0.200); col. 2: Day Beta 0.772*** (0.172), Night Beta -0.103 (0.143, n.s.); col. 6: Day Risk 1.957*** (0.198), Night Risk -0.700*** (0.206), Day Beta 0.221 (0.230, n.s.), Night Beta -0.781*** (0.165); N = 200,118 |
| R13 | The high-demand, high-constraint portfolio has higher overnight returns and lower intraday returns than the low-low portfolio | Table 6, Panels C-D, p. 10 | Overnight: high/high 1.279%*** (SE 0.216) vs low/low 0.458%*** (0.119); intraday: high/high -0.709%*** (0.268) vs low/low 0.146% (0.141) |
| R14 | Retail demand and arbitrage constraints remain positively associated with the differential after benchmark-by-time fixed effects | Table 7, cols. 3-4, p. 10 | Col. 3: Retail_demand 0.267*** (SE 0.077), Arbi_constraint 0.152** (0.069); col. 4: 0.274*** (0.087), 0.291** (0.137); N = 42,700 |
| R15 | The retail-demand interaction with EIP periods remains positive in the benchmark-by-time fixed-effects sample | Table 8, col. 5, p. 11 | Retail_demand x EIP = 0.869*** (SE 0.281); N = 9,845 |
| R16 | Open-market retail order imbalance remains positive while close-market imbalance is insignificant with benchmark-by-time fixed effects | Table 9, cols. 3-4, p. 11 | Open imbalance = 0.165*** (SE 0.030); close imbalance = 0.005 (SE 0.011, n.s.); N = 818,514 |
| R17 | ETFs with the highest lagged overnight returns show the strongest next-month overnight-intraday differential | Table 10, Panel A, p. 12 | Quintile 5-minus-1 NDiff = 2.396%*** (SE 0.247) raw and 2.428%*** (0.277) four-factor-adjusted |
| R18 | ETFs with the lowest lagged intraday returns show the strongest next-month differential, while the high-minus-low spread is negative | Table 10, Panel B, p. 12 | Quintile 5-minus-1 NDiff = -1.958%*** (SE 0.227) raw and -2.083%*** (0.243) four-factor-adjusted |
| R19 | Retail demand does not consistently predict higher close-to-close ETF returns, especially after factor adjustment | Table 11, Panels A-B, p. 13 | Retail high-minus-low total return spreads across arbitrage groups: raw 0.164% (SE 0.151), -0.156% (0.189), -0.029% (0.193), all n.s.; four-factor-adjusted -0.062% (0.133), -0.488%*** (0.137), -0.052% (0.148) |
| R20 | Higher arbitrage constraints are associated with lower four-factor-adjusted close-to-close returns across retail-demand groups | Table 11, Panel B, p. 13 | High-minus-low arbitrage-constraint spreads: -0.270%*** (SE 0.083), -0.397%*** (0.103), -0.260%* (0.139) |
| R21 | The high-demand, high-constraint portfolio retains a large differential after four-factor adjustment, while the low-low portfolio is not significant | Table 6, Panel B, p. 10 | High/high = 1.868%*** (SE 0.275); low/low = 0.160% (SE 0.164, n.s.) |

**Overall (paper's conclusion).** The convenience of buying ETFs during intraday trading hours comes at a cost: retail investors bid up the opening price and arbitrageurs cannot fully correct this by the end of the day. This hidden cost is economically large (4.2 basis points per day on average, or 0.93% per month), ubiquitous across ETF types and exchanges, and causal: exogenous increases in retail demand during EIP months raise the differential. Investors can reduce the cost by purchasing near the market close, when ETF prices are more efficient due to the AP creation and redemption mechanism restoring pricing accuracy.

## Theory / model

The paper has no formal structural model. It tests three hypotheses (pp. 2-3, 5-9). H1 predicts that higher overnight risk raises the overnight-intraday return differential; H2 predicts a larger differential when informed institutional investors are more prevalent; H3 predicts that retail demand and arbitrage constraints both raise the differential. For H3, the paper argues that retail buying near the open inflates opening prices, while limited arbitrage supply slows correction during the day. ETF authorized participants can create and redeem shares near the close, which the authors argue helps restore price alignment.

The causal design uses US Economic Impact Payment (EIP) months in 2020-2021 as shocks to retail demand, comparing EIP and non-EIP months within the COVID-19 period and testing whether the response is stronger for ETFs with greater prior retail demand (pp. 10-11). The paper also uses benchmark-by-time fixed effects to compare ETFs tracking the same benchmark.

## Method

The paper constructs daily returns from average NBBO midpoint quotes over the first and last five minutes of regular trading (pp. 4-5). Let $$P_{\text{open},t}^{i}$$ and $$P_{\text{close},t}^{i}$$ denote those quote averages. Equation (1) defines the intraday return:

$$
r^{i}_{\text{intraday},t} = \frac{P^{i}_{\text{close},t}}{P^{i}_{\text{open},t}} - 1 \tag{1}
$$

The dividend-adjusted close-to-close return and overnight return are defined in equations (2)-(3), p. 4. The PDF's adjustment term includes both cumulative price and price-adjustment factors:

$$
r^{i}_{\text{close-to-close},t} = \frac{P^{i}_{\text{close},t}/\text{CFACPR}^{i}_{t} + \text{Div}^{i}_{t}/(\text{CFACPR}^{i}_{t}/\text{FACPR}^{i}_{t})}{P^{i}_{\text{close},t-1}/\text{CFACPR}^{i}_{t-1}} - 1 \tag{2}
$$

$$
r^{i}_{\text{overnight},t} = \frac{1 + r^{i}_{\text{close-to-close},t}}{1 + r^{i}_{\text{intraday},t}} - 1 \tag{3}
$$

Monthly intraday and overnight returns are geometrically accumulated and standardized to 21 trading days (equations (4)-(5), p. 5):

$$
r^{i}_{\text{intraday},m} = \left[\prod_{t \in m} (1 + r^{i}_{\text{intraday},t})\right]^{21/n} - 1 \tag{4}
$$

$$
r^{i}_{\text{overnight},m} = \left[\prod_{t \in m} (1 + r^{i}_{\text{overnight},t})\right]^{21/n} - 1 \tag{5}
$$

where $$n$$ is the number of valid daily observations in month $$m$$. Portfolio close-to-close, intraday, and overnight returns use the prior month portfolio weights (equations (6)-(8), p. 5):

$$
r^{p}_{\text{close-to-close},m} = \sum_{i \in p} w^{i}_{m-1} r^{i}_{\text{close-to-close},m} \tag{6}
$$

$$
r^{p}_{\text{intraday},m} = \sum_{i \in p} w^{i}_{m-1} r^{i}_{\text{intraday},m} \tag{7}
$$

$$
r^{p}_{\text{overnight},m} = \sum_{i \in p} w^{i}_{m-1} r^{i}_{\text{overnight},m} \tag{8}
$$

The portfolio return differential is the difference between equations (7) and (8), written as equation (9), p. 5:

$$
r^{p}_{\text{NDdiff},m} = r^{p}_{\text{overnight},m} - r^{p}_{\text{intraday},m} = \sum_{i \in p} w^{i}_{m-1} (r^{i}_{\text{overnight},m} - r^{i}_{\text{intraday},m}) \tag{9}
$$

The retail demand index averages ranks of MAX, retail ownership, and retail flow; the arbitrage-constraint index averages ranks of idiosyncratic volatility, bid-ask spread, Amihud illiquidity, and inverse AP count (pp. 5-6). For the direct order-flow test, retail order imbalance is net retail buy volume divided by total retail buy-plus-sell volume (equation (10), p. 11):

$$
\text{RetailImbalance}_{it} = \frac{\text{BuyVolume}_{it} - \text{SellVolume}_{it}}{\text{BuyVolume}_{it} + \text{SellVolume}_{it}} \tag{10}
$$

## Empirical specifications

**Portfolio sorts and baseline evidence (R1-R4, R8-R11, R13, R17-R21).** Equal-weighted ETF portfolios are formed at month-end and held the following month. Unless stated otherwise, ETFs are assigned to bottom 30%, middle 40%, and top 30% groups using lagged characteristics; returns are monthly, January 2004-December 2021. Table 3 reports sector, exchange, and event-exclusion portfolios; Table 4 reports univariate risk, demand, and arbitrage-constraint sorts; Table 6 double-sorts on the two composite indices, including factor-adjusted returns (R21). Table 10 sorts into quintiles on lagged one-month overnight or intraday returns. Table 11 double-sorts on retail demand and arbitrage constraints for close-to-close returns. These portfolio-sort standard errors use Newey-West with three lags. Table 1 and Table 2 are fund-month descriptive statistics and raw correlations, respectively (pp. 6-8, 10, 12-13).

**Fama-MacBeth regressions (R5, R12; Table 5, p. 9).** Each month, the paper estimates cross-sectional regressions of monthly ETF NDiff on column-specific lagged characteristics and controls. The six columns use alternative risk measures and control sets; the time-series means of monthly coefficients use Newey-West standard errors with three lags. The sample has 200,118 ETF-month observations from January 2004 through December 2021:

$$
\text{NDdiff}_{i,t} = \alpha_t + \boldsymbol{\beta}_t'\mathbf{X}^{(k)}_{i,t-1} + \boldsymbol{\gamma}_t'\mathbf{Z}_{i,t-1} + \varepsilon_{i,t} \tag{FM}
$$

The characteristic vector $$\mathbf{X}^{(k)}$$ varies by column: the regressions use day/night risk, day/night beta, retail ownership, or the corresponding full-controls specification. Controls include CAPM beta, log market capitalization, turnover, and momentum where specified.

**Benchmark-by-time panel regressions (R14; Table 7, p. 10).** The panel regressions use ETF-months from January 2004 through December 2021, benchmark-by-time fixed effects, and benchmark-clustered standard errors. Column 4 includes beta, log capitalization, turnover, and momentum; N = 42,700:

$$
\text{NDdiff}_{i,t} = \alpha + \beta_1\text{RetailDemand}_{i,t-1} + \beta_2\text{ArbiConstraint}_{i,t-1} + \boldsymbol{\gamma}'\mathbf{Z}_{i,t-1} + \mu_{j \times t} + \varepsilon_{i,t} \tag{PR}
$$

**EIP regressions (R6, R15; Table 8, p. 11).** Pooled OLS columns use ETF-months from January 2020 through December 2021 and standard errors clustered by fund. The EIP indicator equals one in April, May, and December 2020, and January, March, and April 2021. Columns 4-5 add benchmark-by-time fixed effects, restrict the sample to benchmarks followed by at least two ETFs, and cluster standard errors by benchmark. The pooled interaction specification is:

$$
\text{NDdiff}_{i,t} = \alpha + \beta_1\text{RetailDemand}_{i,t-1} + \beta_2\text{EIP}_{t} + \beta_3(\text{RetailDemand}_{i,t-1} \times \text{EIP}_{t}) + \beta_4\text{ArbiConstraint}_{i,t-1} + \boldsymbol{\gamma}'\mathbf{Z}_{i,t-1} + \varepsilon_{i,t} \tag{EIP}
$$

For columns 4-5, the fixed-effects version replaces the intercept and common time effect with $$\mu_{j \times t}$$; the coefficient of interest is the interaction because EIP itself is absorbed by the time fixed effects. The full samples have N = 45,492 for pooled columns and N = 9,845 for benchmark-fixed-effects columns. The corresponding benchmark-by-time specification is:

$$
\text{NDdiff}_{i,t} = \beta_1\text{RetailDemand}_{i,t-1} + \beta_3(\text{RetailDemand}_{i,t-1} \times \text{EIP}_{t}) + \beta_4\text{ArbiConstraint}_{i,t-1} + \boldsymbol{\gamma}'\mathbf{Z}_{i,t-1} + \mu_{j \times t} + \varepsilon_{i,t} \tag{EIP-FE}
$$

**Retail order-imbalance regressions (R7, R16; Table 9, p. 11).** Daily NDiff is regressed on opening and closing retail order imbalance. Columns 1-2 include fund and date fixed effects; columns 3-4 use benchmark-by-time fixed effects. Standard errors are clustered by fund in columns 1-2 and by benchmark in columns 3-4. The sample is January 2010-December 2021, excluding 2016-2018; N = 3,975,301 for fund/date-FE columns and 818,514 for benchmark-time-FE columns:

$$
\text{NDdiff}_{i,t} = \alpha + \beta_o\text{OpenImbalance}_{i,t} + \beta_c\text{CloseImbalance}_{i,t} + \mu_i + \lambda_t + \varepsilon_{i,t} \tag{OI}
$$

For columns 3-4, $$\mu_i + \lambda_t$$ is replaced with benchmark-by-time fixed effects. Columns 1 and 3 omit the close-imbalance regressor. The alternative fixed-effects specification is:

$$
\text{NDdiff}_{i,t} = \beta_o\text{OpenImbalance}_{i,t} + \beta_c\text{CloseImbalance}_{i,t} + \mu_{j \times t} + \varepsilon_{i,t} \tag{OI-BM}
$$

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP Mutual Fund (CRSPMF) database | ETF identifier, fund metadata, NAV, total net assets, quarterly holdings, inception date, investment style codes | [CRSP Mutual Funds](/wiki/commercial/crsp-mutual-funds/) |
| CRSP Daily Stock (CRSPSTOCK) | Daily open, high, low, close prices; trading volume; shares outstanding; return adjustment factors | [WRDS](/wiki/commercial/wrds/) |
| TAQ database | NBBO mid-quotes (5-minute intervals at open and close); retail investor order imbalances via Boehmer et al. (2021) algorithm | [TAQ](/wiki/commercial/taq/) |
| Morningstar | ETF benchmark identifiers, authorized participant (AP) lists, benchmark-level performance | [Morningstar](/wiki/commercial/morningstar/) |
| Thomson Reuters s34 filings | Quarterly institutional holding shares; used to construct retail investor ownership as total minus institutional | [Thomson Reuters 13F](/wiki/commercial/thomson-13f/) |

Sample: 2,916 unique US ETFs, January 2004 to December 2021 (217 months). Final sample covers approximately 98% of net assets invested in the US ETF market at end-2021. TAQ analysis restricted to January 2010 to December 2021 (excluding 2016-2018); benchmark panel restricted to ETFs followed by at least two ETFs sharing the same benchmark.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2025.107621) if you are: (i) building on the return decomposition methodology (equations 1-9, pp. 4-5) for ETF or fund research; (ii) studying the role of retail investors in ETF pricing or market microstructure; (iii) using the TAQ-based retail order imbalance measure following Boehmer et al. (2021) in an ETF context; (iv) working on the cost of ETF investing (the paper's Online Appendix contains daily-return robustness, value-weighted results, and equity-only subsamples at Tables OA1-OA4); or (v) studying retail-demand shocks around the COVID-19 EIP months.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* vol. 185, article 107621 (2026). This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Liu, Xin, Tianyao (Terry) Zhang, and Yaodong Zhang.
> "A hidden cost of ETF investing: Retail demand shocks and limits to arbitrage."
> *Journal of Banking and Finance* 185 (2026): 107621.
> DOI: 10.1016/j.jbankfin.2025.107621. (c) 2026 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
