---
title: "Real Effects of Centralized Markets: Martin (2025)"
description: >-
  Distilled: Using staggered NYMEX steel futures introductions (2008, 2012) as
  natural experiments in a difference-in-differences framework, this paper finds
  that centralizing derivative markets reduces price dispersion in the physical
  product market by 6 pp (CV), lowers product prices by 3-4%, increases
  producer hedging, shifts market share toward low-cost firms, and reduces
  producer operating profits by 1.6-2.2 pp across specifications. Review of Financial Studies 2025,
  CC BY 4.0. Twelve core results with source locators, datasets used, hypotheses,
  and the empirical specifications.
sidebar:
  label: Martin 2025
  order: 1
tags: [paper-summary, derivatives, commodity-markets, market-microstructure,
       futures, real-effects, competition, price-transparency, panel-regression,
       difference-in-differences, event-study, open-access, cc-by,
       peer-reviewed, unreplicated, data:wrds, data:edgar,
       data:steelbenchmarker]
paper:
  authors: Thorsten Martin
  authorList:
    - { family: Martin, given: Thorsten, affiliation: "Bocconi University and Frankfurt School of Finance & Management" }
  year: 2025
  venue: The Review of Financial Studies 38(7), 2025, 2140-2181
  venueShort: Rev. Financ. Stud. 2025
  doi: 10.1093/rfs/hhaf011
  jel:
    codes: [G14, G32, D22]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-06
  topics: ["Global trade and economics"]
  dataAccess: licensed-commercial
  outcome:
    - price dispersion in physical steel product market
    - producer commodity hedging activity
    - market share sensitivity to production costs
    - physical product market price level
    - producer operating profit
    - producer stock market valuation (CAR)
  outcomeClass: [firm-real-outcomes, asset-prices, security-returns]
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor,
    URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2025-02-27; corroborated by artifact p.2140 Open Access notice)
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF available via OUP (academic.oup.com, 2026-06-06)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 12
  citedByCount: 4

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, event-study]
    identification: natural-experiment

  contributionType: [new-fact]
  mechanisms: [information-asymmetry, liquidity, financial-constraint]

  scope:
    region: US
    assetClass: steel physical product markets and producer equities
    period: 2007-01..2017-12
    frequency: mixed
    dataType: [market, accounting, text]
    granularity: [firm, security, aggregate]
    n: "19,653 product-publication-date observations (price dispersion); 2,993 firm-year observations (hedging/profits); 1,106 firm-event observations (event study)"

  findings:
    - ref: R1
      outcome: price dispersion in physical steel product market
      metric: pp-effect
      value: "CV(Price) decreases by 6 pp for treated relative to control products after futures introduction (Table 2, Panel B, col 1)"
      direction: negative
      vsBenchmark: "pre-introduction CV of ~19-23% for HRC/BUS; 6 pp is roughly a one-third reduction"
    - ref: R2
      outcome: price dispersion in physical steel product market
      metric: coefficient
      value: "SD(Price) decreases by US$39 per ton for treated relative to control products (Table 2, Panel A, col 1)"
      direction: negative
      vsBenchmark: "average SD(Price) is US$126 per ton (19% of average price); $39 reduction is ~31% of baseline"
    - ref: R3
      outcome: producer commodity hedging activity
      metric: pp-effect
      value: "Probability of discussing commodity derivatives in annual report increases by 21.5-25.8 pp for treated relative to control firms (Table 3, col 1-3; coefficients 0.258***, 0.248***, 0.215**)"
      direction: positive
      vsBenchmark: "base rate ~26%; treated firms roughly double their hedging disclosure rate"
    - ref: R4
      outcome: market share sensitivity to production costs
      metric: coefficient
      value: "When iron ore prices rise 10% relative to scrap, EAF producers gain 0.5 to 0.8 pp more market share after futures introduction (Table 4, col 1-3; 0.054***, 0.078***, 0.073***)"
      direction: positive
      vsBenchmark: "zero extra sensitivity for control EAF producers; market shares become more cost-sensitive after futures introduction"
    - ref: R5
      outcome: physical product market price level
      metric: coefficient
      value: "Ln(Price) decreases by 3-4% for treated relative to control products (Table 5, col 1-5; coefficients -0.032*** to -0.040***)"
      direction: negative
      vsBenchmark: "significant at 1% across all five specifications including full controls"
    - ref: R6
      outcome: producer operating profit
      metric: pp-effect
      value: "Operating profit/assets decreases by 1.6-2.2 pp for treated relative to control firms (Table 6, cols 1-7; coefficients -0.016*** to -0.022***)"
      direction: negative
      vsBenchmark: "sample mean profit/assets ~2.8%; 1.6-2.2 pp reduction is roughly 57-79% of the mean"
    - ref: R7
      outcome: producer stock market valuation (CAR)
      metric: car
      value: "CAR over 5-day event window is -3.7% to -4.9% for treated producers around news increasing futures likelihood (Table 7, col 1-4; -0.049*** to -0.037***)"
      direction: negative
      vsBenchmark: "control firms show no significant CAR; treated firms lose 4-5% of equity value per futures-introduction news event"
    - ref: R8
      outcome: price dispersion in physical steel product market
      metric: coefficient
      value: "In separate introduction samples, CV(Price) falls by 0.049*** (SE 0.015) for HRC and 0.064*** (SE 0.012) for BUS (Table 8, Panel A col 2 and Panel B col 2)"
      direction: negative
      vsBenchmark: "Both introduction-specific estimates retain the pooled result, including the BUS-only period after the financial crisis and commodity boom-bust"
    - ref: R9
      outcome: producer commodity hedging activity
      metric: pp-effect
      value: "Non-U.S. placebo estimate is 0.009 (SE 0.067), not statistically significant (Table 9, col 1)"
      direction: none
      vsBenchmark: "treated and control non-U.S. producers do not show a differential change around the U.S. futures introductions"
    - ref: R10
      outcome: market share sensitivity to production costs
      metric: coefficient
      value: "Non-U.S. placebo estimate on Post x Futures_firm x EAF x Iron/Scrap is 0.008 (SE 0.023), not statistically significant (Table 9, col 2)"
      direction: none
      vsBenchmark: "treated and control non-U.S. producers do not show a differential change around the U.S. futures introductions"
    - ref: R11
      outcome: producer operating profit
      metric: coefficient
      value: "Non-U.S. placebo estimate is -0.000 (SE 0.003), not statistically significant (Table 9, col 3)"
      direction: none
      vsBenchmark: "treated and control non-U.S. producers do not show a differential change around the U.S. futures introductions"
    - ref: R12
      outcome: producer stock market valuation (CAR)
      metric: car
      value: "Non-U.S. placebo estimate is -0.004 (SE 0.022), not statistically significant (Table 9, col 4)"
      direction: none
      vsBenchmark: "treated and control non-U.S. producers do not show a differential event-window response"

  resultType: confirms

  relatesTo:
    - { cite: "Duffie, Dworczak & Zhu (2017)", doi: '10.1111/jofi.12525', relation: tests, note: "reference-price channel: futures provide benchmarks that reduce equilibrium price dispersion in search markets" }
    - { cite: "Janssen, Pichler & Weidenholzer (2011)", doi: '10.1111/j.1756-2171.2011.00144.x', relation: tests, note: "oligopolistic search model predicting lower price dispersion and prices when buyers have reference prices" }
    - { cite: "Grennan & Swanson (2020)", doi: '10.1086/705329', relation: extends, note: "extends their evidence on price benchmarking to futures markets as the source of reference prices" }
    - { cite: "Froot, Scharfstein & Stein (1993)", doi: '10.1111/j.1540-6261.1993.tb05123.x', relation: tests, note: "hedging-investment channel: better risk management relaxes financial constraints and enables market-share investment" }
    - { cite: "Chevalier & Scharfstein (1996)", relation: tests, note: "customer-markets model: liquidity-constrained firms underinvest in market share; futures ease constraint" }
    - { cite: "Goldstein & Yang (2022)", doi: '10.1111/jofi.13165', relation: tests, note: "tests their theory that commodity financialization may reduce risk-sharing; finds net effect is increased hedging" }
    - { cite: "Vuillemey (2020)", doi: '10.1111/jofi.12902', relation: builds-on, note: "central clearing reduces counterparty risk and improves hedging in commodity markets (coffee futures)" }
    - { cite: "Perez-Gonzalez & Yun (2013)", relation: cites, note: "weather derivatives improved energy-utility risk management and firm investment" }

  openQuestions:
    - "Whether the reference-price and risk-management channels operate independently or interact, and which channel contributes more to price and competition effects; the paper cannot fully disentangle them (pp. 2150-2152, 2176)."
    - "The generalizability of the findings beyond U.S. steel, and which market features, such as price dispersion or sticky customer bases, support similar effects (pp. 2175-2176)."
    - "Long-run effects on market structure and entry: the paper covers 2007-2017 and cannot speak to whether the competitive reallocation of market share ultimately drives exit and concentration (pp. 2176-2177)."

  replicationCode:
    url: https://doi.org/10.7910/DVN/FHSYBL
    status: available

  proposedVocab:
    - { axis: topic, term: futures, def: "Exchange-traded standardized forward contracts on a commodity or financial instrument, used for price discovery and risk management.", aliases: [commodity-futures, futures-contracts] }
    - { axis: topic, term: real-effects, def: "Effects of financial market innovations or policies on real economic outcomes such as prices, production, and firm investment.", aliases: [financial-markets-real-effects] }
    - { axis: topic, term: price-transparency, def: "Availability of public price information in a market, reducing buyers' search costs and sellers' pricing power.", aliases: [reference-prices, price-discovery] }

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-06
      role: extracted
      note: "Full text read (pp. 2140-2181); seven results extracted from PDF tables. Not human-verified. Not reproduced. Replication code available at Harvard Dataverse (DOI 10.7910/DVN/FHSYBL) but not run here."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-06
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; one fix applied: R5 coefficient range corrected from -0.036***/-0.040*** to -0.032***/-0.040*** (Table 5 col 2 is -0.032, the minimum across cols 1-5); all other locators, magnitudes, equations (3.1, 4.1, 4.2, 4.3), and specifications confirmed correct."

    - by: paper-distiller (gpt-6-luna)
      date: 2026-10-04
      role: extracted
      note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added Table 8 and Table 9 findings, matching findings entries, the profit specification, and placebo estimating specifications. These additions are not human-verified and have not been reproduced."
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; all 12 rows supported. Corrected R2's metric, R6 profit range, equations/specification indexing and terms, data classification, and prose; all DOI-bearing relatesTo edges confirmed." }

  licenceVerification:
    - source: Crossref REST API works/10.1093/rfs/hhaf011
      checked: 2026-06-06
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[].content-version=vor, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-02-27"

  rightsSignalConflict: false
---

**What this is.** The core results, hypotheses, and empirical specifications of this paper, distilled from the PDF. To replicate or extend, read the full source at the [original](https://doi.org/10.1093/rfs/hhaf011) or access the replication code at the [Harvard Dataverse](https://doi.org/10.7910/DVN/FHSYBL).

## TL;DR

The paper asks whether centralizing derivative markets has real effects on the underlying product markets. It exploits two staggered introductions of NYMEX steel futures contracts in the United States: hot-rolled coil (HRC) futures in October 2008 and busheling scrap (BUS) futures in September 2012. Using a difference-in-differences strategy comparing treated steel products (HRC, BUS) to similar untreated products (cold-rolled coil, plates, heavy-melting scrap, shredded scrap), the paper finds that futures markets: (1) reduce physical product price dispersion by about 6 percentage points (CV), consistent with futures prices acting as public reference prices; (2) increase producers’ reported use of commodity derivatives, consistent with improved hedging; (3) make market shares more sensitive to production costs, reallocating share toward low-cost producers; (4) reduce product prices by 3-4%; and (5) reduce producer operating profits by 1.6-2.2 percentage points across specifications and stock market valuations by 4-5%. The results are consistent with centralized futures markets fostering competition in the underlying product market through improved price transparency and risk management.

## Core results

Magnitudes and significance are as reported; `\*\*` = 5%, `\*\*\*` = 1% level. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Futures introduction reduces price dispersion (CV)** by 6 pp for treated relative to control steel products | Table 2 Panel B col 1, p. 2158 | Coefficient on Post x Futures_product = -0.057\*\*\* (SE 0.011); stable across cols 2-5 with demand, supply, trade controls |
| R2 | **Futures introduction reduces price dispersion (SD)** by ~$39/ton for treated products | Table 2 Panel A col 1, p. 2158 | Coefficient = -38.636\*\*\* (SE 7.737); stable across specifications; parallel pre-trends confirmed (Figure 2) |
| R3 | **Treated producers significantly increase commodity hedging** after futures introduction | Table 3 col 1-3, p. 2161 | Coefficient on Post x Futures_firm = 0.258\*\*\* (0.089), 0.248\*\*\* (0.091), 0.215\*\* (0.096); parallel pre-trends (Figure 3) |
| R4 | **Market shares become more sensitive to costs** after futures: EAF producers gain 0.5-0.8 pp more share per 10% iron-ore/scrap price increase | Table 4 col 1-3, p. 2163 | Post x Futures_firm x EAF x Iron/Scrap = 0.054\*\*\* (0.016), 0.078\*\*\* (0.023), 0.073\*\*\* (0.020) |
| R5 | **Product prices fall 3-4%** for treated relative to control products after futures introduction | Table 5 col 1-5, p. 2164 | Post x Futures_product: -0.032\*\*\* (0.005) to -0.040\*\*\* (0.007); significant at 1% with full controls; parallel pre-trends (Figure 4) |
| R6 | **Producer operating profits fall 1.6-2.2 pp across specifications** for treated relative to control firms after futures introduction | Table 6 cols 1-7, p. 2166 | Post x Futures_firm: -0.016\*\*\* (0.004) to -0.022\*\*\* (0.004); significant at 1% across all seven specifications; parallel pre-trends (Figure 5) |
| R7 | **Producer stock prices fall 4-5%** around news events increasing likelihood of a futures contract | Table 7 col 1-4, p. 2169 | Futures_firm coefficient on CAR_{-2,+2}: -0.049\*\*\* (0.010) to -0.037\*\*\* (0.012) across market-adj., CAPM, 3-factor, 4-factor models |
| R8 | **Price-dispersion effects hold separately for both futures introductions** | Table 8 Panel A col 2 and Panel B col 2, p. 2174 | CV(Price): HRC -0.049\*\*\* (0.015); BUS -0.064\*\*\* (0.012). BUS-only results exclude the 2008 financial crisis and commodity boom-bust period |
| R9 | **No differential change in non-U.S. producers' hedging** around U.S. futures introductions | Table 9 col 1, p. 2175 | Post x Futures_firm = 0.009 (0.067), not statistically significant |
| R10 | **No differential change in non-U.S. producers' cost sensitivity of market share** | Table 9 col 2, p. 2175 | Post x Futures_firm x EAF x Iron/Scrap = 0.008 (0.023), not statistically significant |
| R11 | **No differential change in non-U.S. producers' profits** | Table 9 col 3, p. 2175 | Post x Futures_firm = -0.000 (0.003), not statistically significant |
| R12 | **No differential non-U.S. producer stock-market response** to futures news | Table 9 col 4, p. 2175 | Futures_firm CAR = -0.004 (0.022), not statistically significant |

**Overall (paper's conclusion).** Centralized futures markets reduce price dispersion, increase cost-sensitivity of market shares, lower prices, and compress producer profits and valuations. The results are consistent with two channels: futures prices as public reference prices (improving buyer search and competition, as in Grennan and Swanson 2020 on hospital-supplier pricing) and improved risk management (which can ease financing constraints and support investment in market share, as in Froot, Scharfstein, and Stein 1993 and Chevalier and Scharfstein 1996). The paper presents both channels as contributing to product-market competition, but does not disentangle their relative importance.

## Theory / model

The paper has no formal structural model. Instead it derives testable hypotheses from two theoretical channels in the literature.

**Reference price channel.** Following Janssen, Pichler, and Weidenholzer (2011) and Duffie, Dworczak, and Zhu (2017), in decentralized search markets buyers have limited information about prices offered by other sellers. Price dispersion is a manifestation of this ignorance (Stigler 1961). When a futures market publishes reference prices, buyers can compare a seller's offered price against the publicly observed futures benchmark, improving their bargaining position and enabling more effective search. The equilibrium predictions are:

- Price dispersion decreases.
- Market shares become more sensitive to production costs (buyers identify low-cost sellers more easily).
- Average prices fall (sellers reduce markups).

**Risk management channel.** Futures markets may improve or impair producers' hedging ability. The net effect is theoretically ambiguous: centralization lowers counterparty risk and increases liquidity (Telser and Higinbotham 1977; Telser 1981; Vuillemey 2020), helping hedging. But increased price transparency may reduce risk-sharing opportunities (Hirshleifer 1971; Goldstein and Yang 2022), harming hedging. Empirically, the paper finds net hedging increases. Following Froot, Scharfstein, and Stein (1993) and Chevalier and Scharfstein (1996), improved hedging stabilizes cash flows, enabling otherwise liquidity-constrained firms to invest in market share by lowering prices. The prediction: if hedging improves, prices fall further and market shares reallocate toward low-cost producers.

Perez-Gonzalez and Yun (2013) document that weather derivatives improved energy-utility risk management and firm investment.

**Identification logic.** The key identifying assumption is a parallel trends condition: treated products (HRC, BUS) would have followed the same trends as control products (cold-rolled coil, plates, heavy-melting scrap, shredded scrap) absent the futures introductions. Three facts support this: (1) treated and control products exhibit comparable ex ante price volatility, a requirement for futures viability; (2) parallel pre-trends in outcomes for products and firms; (3) placebo tests show no differential evolution for non-U.S. producers of treated products following the U.S.-targeted introductions.

## Method

The headline empirical design is a stacked difference-in-differences (DiD) exploiting the two staggered NYMEX futures introductions (HRC in October 2008, BUS in September 2012). For each introduction, the paper constructs a symmetric event window of 40 publication dates (product-level) or 9 years (firm-level) around the futures start date, then stacks the two panels and estimates a single DiD coefficient.

**Product-level specification** (equation 3.1, p. 2155, price dispersion and price):

$$
\text{PriceDispersion}_{k,p,t} = \beta \cdot \text{Post} \cdot \text{Futures}_{product,k,p} + \alpha_{k,p} + \alpha_{k,t} + \varepsilon_{k,p,t} \tag{3.1}
$$

where $$k$$ indexes the futures introduction (HRC, BUS), $$p$$ indexes the steel product, $$t$$ indexes the publication date. $$\text{Futures}_{product}$$ equals one for hot-rolled coils (HRC introduction) and busheling scrap (BUS introduction). $$\text{Post}$$ equals one after trading begins. $$\alpha_{k,p}$$ and $$\alpha_{k,t}$$ are product and publication-date fixed effects specific to each introduction event. Standard errors are clustered by publication date. The coefficient $$\beta$$ measures the change in price dispersion for treated versus control products after futures introduction.

**Firm-level hedging specification** (equation 4.1, p. 2160):

$$
\text{Hedge}(1/0)_{k,i,y} = \beta \cdot \text{Post} \cdot \text{Futures}_{firm,k,i} + \sum_{\tau=-4}^{4} \left( \theta_\tau' X_{k,i} \right) \mathbf{1}\{y=\tau\} + \alpha_{k,i} + \alpha_{k,y} + \alpha_{k,j,y} + \varepsilon_{k,i,y} \tag{4.1}
$$

where $$i$$ indexes firms, $$y$$ indexes years, $$j$$ indexes 3-digit NAICS industries. $$\text{Futures}_{firm}$$ equals one for HRC producers (BUS introduction: ferrous scrap sellers). Baseline controls (log assets, firm age, sales growth) are measured at the last pre-introduction quarter and interacted with year fixed effects. Standard errors clustered by firm.

**Market share cost-sensitivity specification** (equation 4.2, p. 2162):

$$
\text{MarketShare}_{i,q} = \beta \cdot \text{Post} \cdot \text{Futures}_{firm,i} \cdot \text{EAF}_i \cdot \text{Iron/Scrap}_q + \alpha_i + \alpha_q + \alpha_{j,q} + \varepsilon_{i,j,q} \tag{4.2}
$$

where $$q$$ indexes year-quarters, $$\text{EAF}_i$$ indicates electric arc furnace producers who benefit from cheap scrap, and $$\text{Iron/Scrap}_q$$ is the quarterly price ratio of iron ore to scrap prices. $$\beta$$ measures the change in EAF producers' market-share sensitivity to input price variation after futures introduction.

**Event study specification** (equation 4.3, p. 2168):

$$
\text{CAR}_{i,e} = \beta \cdot \text{Futures}_{firm,i,e} + \alpha_e + \alpha_i + \varepsilon_{i,e} \tag{4.3}
$$

where $$e$$ indexes news events related to futures introductions, and CAR is measured over the 5-day window $$[-2, +2]$$ around the event using market-adjusted returns, CAPM, Fama and French (1993) three-factor, and Carhart (1997) four-factor models.

The builds on `difference-in-differences`, `panel-regression`, and `event-study` technique primitives. The identification rests on `natural-experiment`: the staggered NYMEX product selection decisions are treated as quasi-exogenous events (exchanges chose which products based on liquidity-versus-basis-risk trade-offs, not potential real-economy externalities).

## Empirical specifications

**Price dispersion (R1, R2).** Panel: 19,653 product-publication-date observations. Window: 40 publication dates (SteelBenchmarker biweekly releases) before and after each introduction, stacked across HRC and BUS. Outcomes: SD(Price) and CV(Price) across reporting firms per product-date. Robustness: columns 2-5 add domestic demand controls (GDP growth, key-sector output interacted with Futures_product), supply controls (U.S. production growth, capacity utilization), and trade controls (import growth rates), all interacted with the treatment indicator. Standard errors clustered by publication date. Dynamic coefficient plot (Figure 2) confirms no pre-trend and immediate post-treatment break (p. 2158-2159).

**Producer hedging (R3).** Firm-year panel: 2,993 observations. Window: firms in years $$y=-4$$ to $$y=4$$ relative to each futures start, stacked across HRC and BUS. Outcome: indicator for any mention of commodity derivatives in SEC annual report. Fixed effects: firm, year, and industry-year (3-digit NAICS) interacted with each introduction. Robustness: column 3 adds controls-times-year interactions. Parallel pre-trends confirmed (Figure 3). Profits-steel price correlation (Table A.7) provides additional evidence: treated producers' profits become less correlated with steel prices after futures introduction (pp. 2160-2161).

**Market share cost-sensitivity (R4).** Restricted to HRC introduction (EAF/BOF distinction applies only to raw steel). 1,419 firm-year-quarter observations from Q1 2007 to Q3 2010. Fixed effects: firm, year-quarter, and industry-year-quarter (3-digit NAICS). Controls: log assets, firm age, sales growth measured at last pre-introduction quarter interacted with year-quarter FE. All interactions of Post, Futures_firm, EAF, and Iron/Scrap included. Standard errors clustered by firm (p. 2162-2163).

**Product prices (R5).** Same panel as price dispersion (19,653 observations). Outcome: ln(average price per ton). Specification mirrors equation 3.1. Demand, supply, and trade controls added in columns 2-5. Dynamic plot (Figure 4) shows price decline emerges only post-futures and persists to end of sample (pp. 2163-2164).

**Producer profits (R6).** Firm-year-quarter panel: 5,095 observations. Window: $$q=-7$$ to $$q=7$$ relative to each introduction, stacked. Outcome: operating profit/beginning-of-quarter total assets (Compustat oibdpq/atq). Fixed effects: firm and industry-year-quarter. Seven robustness columns control for: business cycle, iron/scrap price exposure, import competition, industry segment controls, and M&A exclusions (Table 6 cols 2-7). Significant at 1% throughout. Dynamic plot (Figure 5) confirms parallel pre-trends and persistent post-introduction decline (pp. 2165-2167). The estimated profit specification follows the firm-level DiD structure described on p. 2165:

$$
\text{Profit}_{k,i,q} = \beta \cdot \text{Post} \cdot \text{Futures}_{\text{firm},k,i} + \sum_{\tau=-7}^{7} \left( \theta_\tau' X_{k,i} \right) \mathbf{1}\{q=\tau\} + \alpha_{k,i} + \alpha_{k,j,q} + \varepsilon_{k,i,q}
$$

Columns 1-7 add controls and exclusions as described above. Columns 1-2 use 5,095 firm-quarter observations; later columns have fewer observations because of added controls and exclusions. Firm and industry-year-quarter fixed effects are included, with standard errors clustered by firm (Table 6, p. 2166).

**Stock market valuations (R7).** 1,106 firm-event observations across five HRC events (2007-2008) and two BUS events (2012). CAR measured over 5-day window $$[-2, +2]$$ using CRSP daily returns benchmarked against market-adjusted, CAPM, FF3, and Carhart four-factor models. Event-study OLS includes firm and event-date fixed effects. Standard errors clustered by firm. Robustness: results hold for alternative windows $$[d-2, d+3]$$, $$[d-3, d+3]$$; removing any single event; excluding below-median market return days (pp. 2168-2170).

**Placebo tests (R9-R12).** Non-U.S. firms (from Compustat Global/Refinitiv) selling treated products in countries without steel futures show no significant changes in hedging, market share sensitivity, profitability, or CAR around the NYMEX introductions. Table 9 reports 4,054 hedge observations, 2,394 market-share observations, 7,303 profit observations, and 1,804 firm-event CAR observations. The four specifications are:

$$
\begin{aligned}
\text{Hedge}_{i,y} &= \beta_1 \cdot \text{Post} \cdot \text{Futures}_{\text{firm},i} + \alpha_i + \alpha_y + \varepsilon_{i,y}, \\
\text{MarketShare}_{i,q} &= \beta_2 \cdot \text{Post} \cdot \text{Futures}_{\text{firm},i} \cdot \text{EAF}_i \cdot \text{Iron/Scrap}_q + \alpha_i + \alpha_q + \varepsilon_{i,q}, \\
\text{Profit}_{i,q} &= \beta_3 \cdot \text{Post} \cdot \text{Futures}_{\text{firm},i} + \alpha_i + \alpha_{j,q} + \varepsilon_{i,q}, \\
\text{CAR}_{i,e} &= \beta_4 \cdot \text{Futures}_{\text{firm},i,e} + \alpha_e + \alpha_i + \varepsilon_{i,e}.
\end{aligned}
$$

These are the placebo analogues of the U.S. specifications in Table 9 (p. 2175). The table includes firm FE and year FE for hedging, firm FE and year-quarter FE plus the listed interactions for market share, firm FE and year-quarter FE for profits, and firm FE and event-date FE for CAR. Standard errors are clustered by firm in all four specifications. The U.S. control-product placebo shows no differential reaction either (Table A.15, discussed on p. 2175).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| SteelBenchmarker (proprietary price database) | Product-level bi-weekly reported transaction prices for 6 steel products; primary source for price dispersion and price-level tests (R1, R2, R5) | [SteelBenchmarker](/wiki/commercial/steelbenchmarker/) (licensed) |
| Compustat North America Fundamentals Quarterly | Firm accounting data (assets, sales, profitability), identification of treated firms by product description, construction of profit variable (R6) | [WRDS / Compustat](/wiki/commercial/wrds/) (licensed) |
| SEC EDGAR (annual report text) | Firm product descriptions and commodity derivative mentions for hedging analysis (R3); treatment status classification | [SEC EDGAR](/wiki/datasets/edgar/) |
| CRSP daily stock returns | Stock prices for CAR computation (R7) and treatment status confirmation | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| U.S. Geological Survey (USGS) | Steel production quantities by product for production quantity tests and trade controls | No page yet |
| Bureau of Economic Analysis (BEA) | Quarterly GDP growth and key steel-consuming sector output for demand controls | No page yet |
| PPI for Iron Ore and Steel Scrap (BLS) | Iron ore-to-scrap price ratio for market-share cost-sensitivity test (R4) | No page yet |
| Compustat Global / Refinitiv | Non-U.S. firm data for placebo tests | No page yet |

Sample (firm-level): Compustat North America, 2003-2017. Sample (price-level): SteelBenchmarker, January 2007-December 2017. All firm-level variables winsorized at 1st and 99th percentiles.

## When to read the full paper

Use the [original](https://doi.org/10.1093/rfs/hhaf011) if you are:
studying real effects of financial market innovations on product markets (Tables 2-7 with full robustness); examining how price transparency and risk management interact as channels for competition; replicating the DiD or event-study design (replication code at the [Harvard Dataverse](https://doi.org/10.7910/DVN/FHSYBL)); generalizing findings to other industries with similar market structure (Section 5.2); or assessing the external validity of the parallel trends assumption (Figures 2-5, Table A.3-A.5).

## Attribution and rights

Source: peer-reviewed, *The Review of Financial Studies* 38(7), 2025. This distillation was extracted with AI assistance and checked against the source PDF on 2026-10-04; it has not been independently reproduced. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Martin, Thorsten. "Real Effects of Centralized Markets: Evidence from Steel Futures."
> *The Review of Financial Studies* 38, no. 7 (2025): 2140-2181.
> DOI: 10.1093/rfs/hhaf011. © 2025 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
