---
title: "The Price of Housing in the United States: Lyons, Shertzer, Gray & Agorastos (2026)"
description: >-
  Distilled: Lyons, Shertzer, Gray, and Agorastos construct the first annual
  market rent and home sales price series for 30 U.S. cities over 1890-2006
  from 2.7 million newspaper real estate listings. Real rents rose 60% rather
  than fell over the postwar period; real sales prices reached four times their
  1890 level by 2006; and the average annual real return to housing was 9%
  (rental 7.7%, capital gain 1.3%). Q.J. Econ. 2026, paywalled. Seven core
  results with source locators, datasets used, the rolling-window hedonic
  method with its equations, and the user cost framework.
sidebar:
  label: Lyons et al. 2026
  order: 1
tags: [paper-summary, macro, real-estate, housing-markets, measurement,
       panel-regression, peer-reviewed, unreplicated,
       data:fred, data:shiller-housing-data, data:rsmeans, data:wharton-rluri]
paper:
  authors: Ronan C. Lyons, Allison Shertzer, Rowena Gray, David Agorastos
  authorList:
    - { family: Lyons, given: "Ronan C.", orcid: "0000-0001-5342-987X", affiliation: "Trinity College Dublin" }
    - { family: Shertzer, given: Allison, affiliation: "Federal Reserve Bank of Philadelphia" }
    - { family: Gray, given: Rowena, orcid: "0000-0003-0571-1381", affiliation: "University of California, Merced" }
    - { family: Agorastos, given: David }
  year: 2026
  venue: "The Quarterly Journal of Economics (2026), 559-603"
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf047
  jel:
    codes: [E3, N1, O18, R3]
    assignedBy: paper-verifier (claude-sonnet-4-6)
    date: 2026-06-28
  topics: ["Housing Market and Economics"]
  dataAccess: hand-collected
  outcome:
    - real housing price index (sales)
    - real market rent index
    - rent-to-price ratio
    - total annual real return to housing
    - real capital gain component of housing return
    - average annual real housing capital gain by city
  outcomeClass: [asset-prices, macro-aggregates]
  license: "All rights reserved. Published by Oxford University Press on behalf of Harvard University. Commercial re-use: reprints@oup.com; other permissions via RightsLink on the article page (journals.permissions@oup.com)."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (OUP site, 2026-06-28)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 2

  methods:
    role: both
    contributes: rolling-window-hedonic-index
    family: descriptive
    buildsFrom: [panel-regression]
    identification: descriptive
  contributionType: [new-data, new-fact, measurement]
  introducesData: true
  scope:
    region: US
    assetClass: US residential housing (rented and owned)
    period: 1890-01..2006-12
    frequency: annual
    dataType: [other]
    granularity: [individual, aggregate]
    n: "2.7 million newspaper real estate listings, 30 cities, 1890-2006"

  findings:
    - { ref: R1, outcome: real market rent index, metric: index-growth, value: "60% above 1890 level nationally in 2006; 36% above 1914 level", direction: positive, vsBenchmark: "BLS RoPR implies ~50% decline from 1914 to 2006" }
    - { ref: R2, outcome: "real housing price index (sales)", metric: index-growth, value: "~4x 1890 level by 2006; 142% real growth 1890-1987 vs 37% in Shiller", direction: positive, vsBenchmark: "Shiller index: +37% real growth 1890-1987" }
    - { ref: R3, outcome: rent-to-price ratio, metric: level, value: "~8-9% in 1890-1920; 9.4% in 1935; 7.4% in 1970; ~3% in 2006", direction: negative }
    - { ref: R4, outcome: total annual real return to housing, metric: level, value: "mean 9.0% (1890-2006): rental return 7.7%, capital gain 1.3%; negative in only 5 of 116 years", direction: positive }
    - { ref: R5, outcome: real capital gain component of housing return, metric: return-spread, value: "HHP capital gain AGR 1.3% vs Shiller 0.7%; +0.6pp upward revision; +0.04% pa before 1940, +1.7% pa 1940-2006", direction: positive, vsBenchmark: "Shiller (2015) long-run capital gain AGR of 0.7%" }
    - { ref: R6, outcome: total annual real return to housing, metric: level, value: "housing mean 9.0% SD 5.4% CV 0.6; equities mean 11.5% SD 17.6% CV 1.5", direction: mixed, vsBenchmark: "equities: 11.5% mean return but SD 17.6% vs housing SD 5.4%" }
    - { ref: R7, outcome: average annual real housing capital gain by city, metric: coefficient, value: "OLS on Saiz (2010) Wharton zoning index: 0.63 (1940-1969), 0.79 (1970-2006)", direction: positive }
  resultType: overturns

  relatesTo:
    - { cite: "Shiller (2015)", relation: contradicts, note: "HHP revises real sales price growth 1890-1987 from 37% to 142% and capital gain AGR from 0.7% to 1.3%; Shiller relies on a retrospective survey and truncated loan data for 1890-1952" }
    - { cite: "Jordà et al. (2019)", relation: extends, note: "HHP provides city-level U.S. evidence and revises the U.S. capital gain AGR upward from 1.0% to 1.3%; confirms their finding that housing returns are dominated by rental income" }
    - { cite: "Knoll, Schularick, and Steger (2017)", doi: '10.1257/aer.20150501', relation: builds-on, note: "prior work on long-run global housing price levels; HHP provides consistent city-level U.S. evidence spanning the same twentieth-century horizon" }
    - { cite: "Crone, Nakamura, and Voith (2010)", doi: '10.1162/rest_a_00015', relation: builds-on, note: "adjustments to the BLS RoPR series for 1940-1995; HHP rental findings are broadly consistent with their upward correction for the postwar period" }
    - { cite: "Gordon and van Goethem (2007)", doi: '10.7208/chicago/9780226044507.003.0007', relation: builds-on, note: "adjustments to the BLS RoPR for 1915-1939; both series find real rental price levels in 1914 and 1939 consistent with HHP" }
    - { cite: "Fishback and Kollmann (2014)", relation: builds-on, note: "census and New Deal data on home values; HHP aligns with their evidence that real prices were lower in 1940 than in 1930" }

  openQuestions:
    - "Estimating land values from the HHP data; the paper explicitly defers land value decomposition to future work while focusing on construction costs (p.581)"
    - "Investigating the relationship between listed and transacted prices over long horizons and across business cycles; HHP relies on listing prices as a proxy for transactions (p.566)"
    - "Understanding how zoning ordinances evolved over time and whether rising home prices incentivized adoption of restrictive zoning (p.587)"

  replicationCode:
    url: "https://doi.org/10.7910/DVN/CYX1PQ"
    status: available

  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Full text read (pp. 559-603, PDF). DOI confirmed via Crossref; licence confirmed as OUP all-rights-reserved (not CC). OpenAlex metadata fetched. Seven results extracted with table/figure locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against source PDF (pp.559-603); all 7 Core result rows confirmed; all equations (1-8) verified term-by-term; JEL codes corrected from [E31,O18,R31] to paper's stated [E3,N1,O18,R3] (N1 was missing); metric field corrected from 'probability' to 'ratio-level' (R3), 'return-mean' (R4), 'return-mean' (R6); CV 0.25 for rental return in R4 magnitude column is mathematically correct (1.9/7.7=0.247) though the PDF text states 2.0, which appears to be a typo in the paper." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf047", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "license content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-10-10; standard OUP publication model (all rights reserved, not CC); PDF p.603 confirms All rights reserved notice" }
  rightsSignalConflict: false
---

**What this is.** The core results, the user cost framework, and the rolling-window hedonic method with its defining equations: enough to understand what the paper found and how, without reading the full 45 pages. To replicate or extend, read the original at the [DOI](https://doi.org/10.1093/qje/qjaf047). The underlying data are in the [Harvard Dataverse](https://doi.org/10.7910/DVN/CYX1PQ).

## TL;DR

The paper constructs the first annual market rent index (RI) and housing price index (HPI) for 30 U.S. cities from 1890 to 2006, drawing on over 2.7 million archival newspaper real estate listings. The authors apply a rolling-window hedonic regression to remove unobserved quality trends and aggregate by population weight to a national series. The headline finding is that the standard sources misrepresent the history of U.S. housing prices: real market rents rose 60% nationally rather than fell (as the BLS Rent of Primary Residence series implies), and real sales prices grew 142% from 1890 to 1987 rather than the 37% implied by the Shiller (2015) national index. The paper also revises upward the U.S. capital gain estimate of Jordà et al. (2019) (who report 1.0% AGR for housing capital gains) and provides city-level evidence extending the national long-run series of Knoll, Schularick, and Steger (2017). The average annual real total return to housing over the full period was 9%, dominated by rental income at 7.7%; capital gains contributed just 1.3% but were near-zero before 1940 and rose to 1.7% per year thereafter, concentrated in cities with more restrictive land use regulation.

## Core results

Magnitudes and significance are as reported in the paper. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | HHP real market rents rose 60% nationally from 1890 to 2006, contrasting with the BLS Rent of Primary Residence (RoPR) series, which implies rents fell roughly 50% from 1914 to 2006 | Figure II, p.572; p.573 | HHP national RI: +60% relative to 1890; +36% relative to 1914; BLS RoPR series: approximately -0.6% per year from 1914 to 2006 |
| R2 | HHP real sales prices grew 142% from 1890 to 1987, nearly four times the 37% implied by the Shiller index, and reached approximately four times the 1890 level by 2006 | Figure III, p.575; p.576 | HHP: +142% real growth 1890-1987 (Shiller: +37%); HHP real HPI in 2006 ~4x the 1890 level; the two series diverge mainly in 1953-1987 |
| R3 | The rent-to-price ratio fell from approximately 8-9% in 1890-1920 to 3% in 2006, driven by the emergence of the modern long-term amortized mortgage and falling user costs | Figure VII Panel A, p.589; p.590 | Rent-to-price: ~8-9% in 1890-1920; 9.4% in 1935; 7.4% in 1970; ~3% in 2006; tracks declines in user cost component from LTV expansion and mortgage term extension |
| R4 | The average annual real total return to housing over 1890-2006 was 9.0%, with rental returns accounting for 7.7% and real capital gains just 1.3%; returns were negative in only 5 of 116 years | Figure VIII, p.595; pp.595-596 | Total return 9.0%; rental return 7.7% (SD 1.9%, CV 0.25); capital gain 1.3% (SD 5.0%, CV 3.8); capital gain close to zero before 1940 (+0.04% pa) |
| R5 | HHP capital gains averaged +0.04% pa before 1940 and +1.7% pa from 1940 to 2006, revising the Shiller long-run capital gain estimate of 0.7% upward by approximately 0.6 percentage points | pp.595-596 | HHP overall capital gain AGR 1.3% vs Shiller 0.7%; the revision is driven by the post-World War II decades where the Shiller data relied on appraisals and excluded non-conforming loans |
| R6 | Over 1890-2006, housing offered a real return of 9% vs 11.5% for equities, but with standard deviation 5.4% vs 17.6% (coefficient of variation 0.6 vs 1.5) | p.597; Figure IX, p.598 | Housing: mean 9.0%, SD 5.4%, CV 0.6; equities: mean 11.5%, SD 17.6%, CV 1.5; equity capital gain ~3.6% pa vs housing 1.3% pa; housing outperformed equities only in the early 1920s, early 1940s, and late 1970s to early 1980s |
| R7 | Cities with higher zoning restrictiveness had substantially higher average annual real capital gains, with the OLS coefficient on the Saiz (2010) Wharton zoning index stable across both 1940-1969 and 1970-2006 | Figure VI, p.586; p.585 | OLS slope on zoning index: 0.63 (1940-1969), 0.79 (1970-2006); the positive relationship between regulatory constraint and capital gains is statistically similar across the two periods |

**Overall (paper's conclusion).** The HHP series revise several standard facts about U.S. housing markets. Postwar real rents rose rather than fell: adjustments to the BLS series by Crone, Nakamura, and Voith (2010) and by Gordon and van Goethem (2007) move in the same direction as HHP but do not reach the same level. Real sales prices grew substantially more before 1987 than the Shiller index records, consistent with limitations in the Grebler, Blank, and Winnick retrospective survey and the exclusion of non-conforming loans identified by Fishback and Kollmann (2014). Over the full 116 years, housing offered a stable annual return of 9% driven primarily by rental income (7.7%), with capital gains (1.3%) more volatile but rising in importance after 1940, particularly in cities with binding land use regulation.

## Theory / model

The paper has no formal equilibrium model. It applies two accounting frameworks to interpret the HHP data.

**User cost of housing (Section VI, p.587).** The no-arbitrage condition equating annual rent $$R_t$$ to the user cost of owning one unit of housing at price $$P_t$$ is (equations 4 and 5):

$$
R_t = P_t \, u_t, \tag{4}
$$

$$
u_t = i_t + \tau_t + \delta_t - g_{t+1} + \gamma_t, \tag{5}
$$

where $$i_t$$ is the real risk-free interest rate, $$\tau_t$$ the tax benefit or cost associated with homeownership, $$\delta_t$$ maintenance costs, $$g_{t+1}$$ expected appreciation over the coming year, and $$\gamma_t$$ the risk premium for owning relative to renting. The user cost framework motivates the rent-to-price ratio series (R3) and is used to interpret the three-phase narrative of mortgage market development (Section VI).

**Housing production cost identity (Section V, p.581).** Following Glaeser and Gyourko (2018), the production cost of housing in period $$t$$ is

$$
\text{PC}_t = (L_t + \text{CC}_t) \times \text{EP}_t, \tag{3}
$$

where $$L_t$$ is land cost, $$\text{CC}_t$$ construction costs, and $$\text{EP}_t$$ entrepreneurial profit. The paper focuses on $$\text{CC}_t$$ using RSMeans indices; land value estimation is deferred to future work.

**Total return to housing (Section VII, pp.593-594).** For city $$c$$ in year $$t$$, the total real return $$r_{c,t}$$ decomposes into a real capital gain $$h_{c,t}$$ and a rental return $$y_{c,t}$$:

$$
R_{c,t} = H_{c,t} + Y_{c,t} \;=\; \frac{\text{HPI}_{c,t} - \text{HPI}_{c,t-1}}{\text{HPI}_{c,t-1}} + \frac{\text{RI}_{c,t}}{\text{HPI}_{c,t-1}}, \tag{6-7}
$$

where $$\pi_t = (\text{CPI}_t - \text{CPI}_{t-1})/\text{CPI}_{t-1}$$ is CPI inflation. The inflation-adjusted capital gain is

$$
h_{c,t} = \frac{1 + H_{c,t}}{1 + \pi_t} - 1,
$$

and the average return over $$T = \{1891, \ldots, 2006\}$$ is defined as the arithmetic mean (equation 8, p.594):

$$
\bar{h}_c = \frac{1}{|T|} \sum_{t=1891}^{2006} h_{c,t}. \tag{8}
$$

National averages are population-weighted Paasche aggregates.

## Method

The core method is a hedonic rolling-window (RW) regression, following the approach formalized by Silver (2016), implemented here for the first time at city scale over a century-long horizon. The method builds on `panel-regression` (hedonic OLS) but avoids imposing fixed quality coefficients across the full sample.

**Rolling-window hedonic regression (Section III, p.568).** For a rolling window of size $$s$$ with base year $$b$$, and city $$c$$, the estimating equation is (equation 1):

$$
\ln(\text{price})_{ict} = \alpha_{bc} + \sum_{y=b+1}^{b+s-1} \beta_{cy} \cdot \mathbf{1}_{\{y=t\}} + \mathbf{X}_{ict} \boldsymbol{\Gamma}_{bc} + \varepsilon_{ict}, \tag{1}
$$

where the regression uses only observations $$i$$ from years $$t \in \{b, \ldots, b+s-1\}$$, $$\beta_{cy}$$ captures the log price change from year $$y$$ to $$y+1$$ for city $$c$$, $$\mathbf{1}_{\{y=t\}}$$ is an indicator for year $$t$$, and $$\mathbf{X}_{ict}$$ is a vector of property characteristics. The baseline is $$s = 2$$ (two-year windows), giving one $$\beta$$ per window. Allowing coefficients $$\boldsymbol{\Gamma}_{bc}$$ to vary by window means the relative price of a bathroom or an extra room can change over time, addressing unobserved quality drift that a single pooled regression cannot accommodate.

**Chain-linking.** The city-level index at time $$t$$ is the product of all preceding window-specific price changes (equation 2, p.569):

$$
\iota_{ct} = \prod_{y=1891}^{t} \exp(\beta_{cy}). \tag{2}
$$

**National aggregation.** The national index aggregates city-level percentage changes each year using the city's population share as a weight (effectively a Paasche price index). Population counts come from U.S. Census metropolitan area data, interpolated between census years.

**Robustness variants** include three-year and five-year rolling windows; results are qualitatively similar with the main difference in the wartime rental segment (1944-1947), where the two-year specification with rent-control adjustments is preferred.

## Empirical specifications

**HHP rent and sales price indices (Sections II-IV).** Each city-window regression (equation 1) is estimated on the cross-section of newspaper listings for that city in the relevant two-year window. Controls in $$\mathbf{X}_{ict}$$:

- **Location:** 20 standardized geographic areas per city, defined by machine-learning geocoding of address or intersection information; allowed to expand as the metro area grows over time.
- **Size:** Dummies for total rooms (or bedrooms post-WWII) and bathrooms (rounded to nearest half); stories; missing-size indicators included.
- **Type:** House vs. apartment indicator.
- **Rental frequency (rents only):** Rental payment period dummies (weekly/monthly/annual), with frequency imputed for approximately 33,000 listings without a stated period using city-year percentile comparisons.

When the two-year window yields too few listings in a city-year (mainly rental listings during WWII and sales during the Great Depression), the window length is extended to three or five years; cases are documented in Online Appendix Table B2.

**Rent-to-price ratio (Section VI).** The ratio is constructed from the national HPI and RI series, benchmarked to a 2006 value of 3.16% taken from the Davis land-price indicators dataset. The user cost decomposition (equation 5) is used descriptively: real mortgage interest rates from Drehmann, Juselius, and Quincy (2024) and loan-to-value ratios from Fetter (2013) and the Historical Statistics of the United States are plotted against the ratio to identify the three credit-condition phases (1890-1935; 1935-1970; 1970-2006).

**Total return decomposition (Section VII).** For each city and year, the real capital gain and rental return are computed from the baseline HPI and RI indices and the Officer-Williamson CPI. National returns are population-weighted arithmetic means. The volatility comparison uses Shiller (1992) S&P 500 earnings and price data from Robert Shiller's website for equities.

**Housing supply and zoning (Sections V-VI, R7).** The zoning result uses a city-level OLS regression of average annual real capital gains (from HHP HPI) over 1940-1969 and 1970-2006 on the Saiz (2010) zoning restrictiveness measure (Wharton Residential Urban Land Regulation Index from Gyourko, Saiz, and Summers 2008). Reported coefficients are 0.63 and 0.79 respectively (Figure VI, p.586); the difference is not statistically significant.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| HHP Newspaper Real Estate Listings | Primary source: 2.7 million archival newspaper listings for 30 U.S. cities, 1890-2006; supports rent and sales price index construction | No page (hand-collected; data in [Harvard Dataverse](https://doi.org/10.7910/DVN/CYX1PQ)) |
| BLS Rent of Primary Residence (RoPR / CUUR0000SEHA) | Benchmark comparison for the rental price series (Sections III-IV) | [FRED](/wiki/datasets/fred/) |
| Shiller national housing price index (Yale website) | Benchmark comparison for the sales price series (Sections III-IV, VII) | No page yet |
| FHFA House Price Index | City-level benchmark for sales prices from 1975 onward (Online Appendix) | No page yet |
| RSMeans construction cost index | City-level construction cost series (five-year intervals 1940-1980; annual thereafter) used in housing supply analysis (Section V) | No page yet |
| BLS city building permit surveys (1920-1950) and Census Bureau Building Permit Survey (1959-2006) | Population-adjusted housing permit series for supply analysis (Section V) | No page yet |
| Officer-Williamson extended CPI | Deflating all nominal series to real terms | No page yet |
| Wharton Residential Urban Land Regulation Index (WRLURI) | City-level zoning stringency from Gyourko, Saiz, and Summers (2008) / Saiz (2010); used in zoning and capital gains analysis (Section V) | No page yet |
| Drehmann, Juselius, and Quincy (2024) mortgage data | Real mortgage interest rates and loan-to-value ratios for the user cost analysis (Section VI) | No page yet |

Sample scope: 30 U.S. cities from 1890 to 2006 (annual frequency). Most cities enter in 1890; Las Vegas enters later. Approximately 1.23 million rental listings and 1.47 million sales listings.

## When to read the full paper

Read the source at the [original DOI](https://doi.org/10.1093/qje/qjaf047) if you are: constructing city-level housing models and need the annual HPI or RI series (available in Harvard Dataverse); examining the history of U.S. housing returns over the twentieth century; studying the relationship between mortgage market development and asset pricing; or investigating whether the standard Shiller index understates historical housing price growth for a specific period or city. The locators above point to the exact figures and tables.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* (2026), 559-603. Advance Access published October 10, 2025. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The paper is paywalled; redistribution is extract-only.

> Lyons, Ronan C., Allison Shertzer, Rowena Gray, and David Agorastos.
> "The Price of Housing in the United States, 1890-2006."
> *The Quarterly Journal of Economics* (2026), 559-603.
> DOI: 10.1093/qje/qjaf047.
> © The Author(s) 2025. Published by Oxford University Press on behalf of Harvard University.
> All rights reserved. This page is an extract by the Institute for Automated Research.
