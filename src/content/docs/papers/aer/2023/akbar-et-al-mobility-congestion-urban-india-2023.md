---
title: "Mobility and Congestion in Urban India: Akbar, Couture, Duranton & Storeygard (2023)"
description: >-
  Distilled: Develops city-level vehicular speed indices decomposable into uncongested speed and
  a congestion factor, applied to 57 million simulated Google Maps trips in 180 Indian cities.
  Uncongested speed explains 70 percent of cross-city speed variance; congestion explains only
  13 percent, overturning the view that slow Indian cities are primarily congested. American
  Economic Review 2023, paywalled. Seventeen core results with source locators, datasets used, the
  index methodology, and the empirical specifications.
sidebar:
  label: Akbar-Couture-Duranton-Storeygard 2023
  order: 1
tags: [paper-summary, urban-economics, transportation, congestion, india, developing-countries,
       panel-regression, cross-section, peer-reviewed, unreplicated,
       data:google-maps, data:openstreetmap, data:india-census, data:ghsl]
paper:
  authors: Prottoy Akbar, Victor Couture, Gilles Duranton, Adam Storeygard
  authorList:
    - { family: Akbar, given: Prottoy, orcid: "0000-0003-3332-7600", affiliation: Aalto University and Helsinki Graduate School of Economics }
    - { family: Couture, given: Victor, affiliation: Vancouver School of Economics, University of British Columbia }
    - { family: Duranton, given: Gilles, orcid: "0000-0002-5261-9927", affiliation: Wharton School, University of Pennsylvania }
    - { family: Storeygard, given: Adam, orcid: "0009-0001-1525-1043", affiliation: Department of Economics, Tufts University }
  year: 2023
  venue: American Economic Review 113(4), April 2023, 1083-1111
  venueShort: AER 2023
  doi: 10.1257/aer.20181662
  jel:
    codes: [O15, O18, R23, R41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Urban Transport and Accessibility
    - Transportation Planning and Optimization
    - Human Mobility and Location-Based Analysis
  dataAccess: licensed-commercial
  outcome:
    - city-level vehicular speed index
    - city-level uncongested speed index
    - congestion factor across Indian cities
    - welfare gains from speed improvement
  outcomeClass: [urban-mobility]
  license: >-
    All rights reserved (standard AER copyright; Crossref licence block empty for this work;
    no open-access licence asserted; paywalled via AEA website)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 17
  citedByCount: 58
  methods:
    role: both
    contributes: city-speed-index
    family: descriptive
    buildsFrom: [panel-regression]
    identification: descriptive
  contributionType: [new-method, new-data, new-fact, measurement]
  mechanisms: [urban-road-network]
  introducesData: true
  scope:
    region: India (US for comparison)
    period: 2019-06..2019-11
    frequency: mixed
    dataType: [administrative, other]
    granularity: [aggregate, transaction]
    n: "57,103,181 trip instances, 180 Indian cities, 2,730,969 unique trips, June-November 2019"
  findings:
    - {"ref": "R1", "outcome": "cross-city variation in city vehicular speed index", "metric": "r-squared", "value": "0.701 (uncongested speed share of speed index variance, 180 cities, all trips); 0.126 for congestion factor; -0.086 covariance (Table 4, p. 1102)", "direction": "positive", "vsBenchmark": "uncongested speed explains 5.6x more cross-city variance than congestion (Table 4)"}
    - {"ref": "R2", "outcome": "cross-city variation in city vehicular speed index", "metric": "r-squared", "value": "0.567 vs 0.259 (uncongested vs congestion share of speed variance at high-peak hours 6-8 PM, Table 4, p. 1102)", "direction": "positive", "vsBenchmark": "uncongested speed explains 2.2x more variance than congestion even at peak hours"}
    - {"ref": "R3", "outcome": "city-level vehicular speed index", "metric": "elasticity", "value": "log population elasticity = -0.15 (SE 0.016); log area elasticity = +0.17 (SE 0.017) (Table 5, col. 1, p. 1104)", "direction": "negative"}
    - {"ref": "R4", "outcome": "city-level vehicular speed index", "metric": "elasticity", "value": "0.069 (SE 0.016) for log major roads on speed index (Table 5, col. 2); 0.077 (SE 0.016) on uncongested speed (col. 5); 0.0074 (SE 0.0056) in col. 8 and 0.0038 (SE 0.0051) in col. 9 for the congestion factor, both statistically indistinguishable from zero (p. 1104)", "direction": "positive"}
    - {"ref": "R5", "outcome": "city-level vehicular speed index", "metric": "coefficient", "value": "earnings coefficient 0.028 (SE 0.0088); earnings-squared -0.0021 (SE 0.00053); speed peaks at 8th income decile (Table 5, col. 3, p. 1104)", "direction": "mixed"}
    - {"ref": "R6", "outcome": "vehicular speed comparison India vs US", "metric": "coefficient", "value": "US city trips 70% faster on average than Indian city trips; top-to-bottom decile speed difference is 36% in India versus 25% in the US (p. 1108)", "direction": "positive", "vsBenchmark": "Indian cities as benchmark"}
    - {"ref": "R7", "outcome": "welfare gains from uncongested speed improvement", "metric": "level", "value": "Population-weighted average yearly gain ~Rs 1,157 (~$16) per vehicle commuter in the 100 cities with the largest census worker samples, from a 10% uncongested speed improvement; up to Rs 2,696 (~$38) in Delhi (pp. 1102-1103)", "direction": "positive", "vsBenchmark": "many times larger than gains from optimal congestion pricing (Akbar and Duranton 2018; Kreindler 2018)"}
    - {"ref": "R8", "outcome": "city-level vehicular speed index", "metric": "level", "value": "Slowest city Bhiwandi index = -0.34 and fastest city Ranipet = 0.26; slowest-to-fastest speed difference is 83% (Table 3, p. 1100; text p. 1099)", "direction": "mixed", "vsBenchmark": "mean-centered city index"}
    - {"ref": "R9", "outcome": "travel-time unreliability across Indian cities", "metric": "level", "value": "At peak times, 90th-percentile trip time is 6% above median on average; over 80% of cities lie between 4% and 8%; top-population-decile city average is 8%; correlation with congestion index = 0.89 (text p. 1100)", "direction": "positive"}
    - {"ref": "R10", "outcome": "cross-city variation in city vehicular speed index", "metric": "r-squared", "value": "Smallest 50%: uncongested/congestion shares = 0.813/0.062 all trips and 0.842/0.115 high peak; largest 50% = 0.632/0.179 and 0.464/0.324; largest 25% = 0.528/0.224 and 0.390/0.349; largest 10% = 0.477/0.238 and 0.370/0.340 (Table 4, p. 1102)", "direction": "mixed", "vsBenchmark": "all-city shares are 0.701 and 0.126 for all trips, and 0.567 and 0.259 at high peak (Table 4)"}
    - {"ref": "R11", "outcome": "city-level vehicular speed index", "metric": "coefficient", "value": "Elevation-variance coefficients are -0.036 for speed and -0.027 for uncongested speed; water-length coefficients are -0.14 and -0.082, respectively (Table 5, cols. 3 and 6, p. 1104). For congestion, corresponding coefficients are 0.0089 and 0.053 (col. 9)", "direction": "mixed"}
    - {"ref": "R12", "outcome": "city-level vehicular speed index", "metric": "coefficient", "value": "Street-light coefficients are 0.014 for speed, 0.010 for uncongested speed, and -0.0041 for congestion; grid-network coefficients are 0.29, 0.24, and -0.054, respectively (Table 5, cols. 2, 5, and 8, p. 1104). Adding road, lighting, and network measures raises speed-index R-squared from 0.47 to 0.62", "direction": "positive"}
    - {"ref": "R13", "outcome": "city-level walking speed", "metric": "level", "value": "Mean walking speed is 4.8 km/h (SD 0.1 km/h); elevation differences account for 76% of cross-city variation (text p. 1107)", "direction": "mixed"}
    - {"ref": "R14", "outcome": "transit travel time and speed", "metric": "level", "value": "18% of trip instances have a viable transit option; viable transit takes 2.9 times driving trip time including initial wait and 2.5 times excluding it; transit and driving index rank correlation = 0.18 (text pp. 1107-1108)", "direction": "mixed"}
    - {"ref": "R15", "outcome": "cross-city variation in city vehicular speed index", "metric": "correlation", "value": "Correlation between congestion factor and uncongested speed is -0.29 in India and -0.82 in the United States (text p. 1108)", "direction": "negative", "vsBenchmark": "United States comparison"}
    - {"ref": "R16", "outcome": "intracity vehicular speed variation over the day", "metric": "level", "value": "For all 180 cities, the slowest time (6:30-7:00 PM) is slightly more than 25% slower than the fastest; the gap exceeds 35% for the 18 largest cities and peak travel in Central Mumbai is about half as fast as at night (Figure 3, p. 1099; text p. 1098)", "direction": "negative"}
    - {"ref": "R17", "outcome": "cross-city variation in city vehicular speed index", "metric": "r-squared", "value": "Full speed-index model R-squared = 0.64 and falls to 0.23 without population; uncongested-speed R-squared = 0.60 and falls to 0.21 without population; congestion R-squared = 0.51 and falls to 0.39 without population (text pp. 1105-1106)", "direction": "positive"}
  resultType: confirms
  replicationCode:
    url: https://doi.org/10.3886/E182681V1
    status: available
  relatesTo:
    - { cite: "Couture, Duranton, and Turner (2018)", doi: '10.1162/rest_a_00744', relation: extends, note: "applies and extends their US city speed-index methodology to 180 Indian cities, using the same GM-trip approach" }
    - { cite: "Duranton and Turner (2011)", relation: builds-on, note: "the fundamental law of road congestion underpins the finding that more major roads leave the congestion factor near zero" }
    - { cite: "Akbar and Duranton (2018)", relation: builds-on, note: "prior single-city congestion measurement work in Bogota that motivates the cross-city approach" }
    - { cite: "Kreindler (2018)", relation: cites, note: "welfare gains from optimal congestion pricing in Bangalore are smaller than one percent of travel cost, far below uncongested-speed gains" }
    - { cite: "Brownstone and Small (2005)", relation: cites, note: "percentile-based approach to measuring travel-time unreliability" }
  openQuestions:
    - "Speed is only one component of accessibility; the other is proximity to destinations. The authors note ongoing work on complementary accessibility measures for Indian cities (p. 1109)."
    - "The investigation leaves for future research a deeper analysis of population growth and congestion: population growth over the previous three decades is associated with more congestion and faster uncongested travel; the positive overall association is not statistically significant, and the authors leave the pattern for future research (p. 1106)."
    - "Country-specific studies are needed: the comparison with the US implies that policies effective there may not transfer, and other developing countries may exhibit their own distinctive patterns (p. 1108-1109)."
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: >-
        Full text read from local PDF (pp. 1083-1111); seven results extracted from tables and
        narrative. Crossref licence block confirmed empty (paywalled). Not human-verified.
        Not reproduced. Replication data is publicly archived at ICPSR (doi:10.3886/E182681V1)
        but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against source PDF (pp. 1083-1111). All seven
        Core results rows confirmed against Table 4 (p. 1102) and Table 5 (p. 1104); R6 narrative
        confirmed p. 1108; R7 values confirmed pp. 1102-1103. Equations (1)-(3) and both empirical
        specifications verified term-by-term. Two fixes applied: JEL codes corrected (O15 was
        missing from [O18, R41, R23]; abstract shows O15, O18, R23, R41); R4 locator expanded from
        "cols. 2 and 8" to "cols. 2, 5, and 8" and findings value updated to include all three
        column magnitudes (congestion factor 0.0074, SE 0.0038 from col. 8). No em-dashes or
        colorful adjectives found.
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added ten main-text findings with locators and magnitudes, mechanism vocabulary, and the full Table 2 and Table 5 estimating specifications. These additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked 17 results, equations, specifications, classification, prose, and metadata against the source PDF; corrected R4 standard errors, the US-India comparison direction, equation 3 notation, Table 2 sample sizes, causal wording, resultType, and a mismatched DOI; all table locators manually confirmed." }
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20181662
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[] block empty; no open-access licence asserted; paper published in AER under standard AEA copyright; access is paywalled"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the speed-index methodology (equations and decomposition), and the empirical specifications: enough to understand what was found and how, without reading all 29 pages. To replicate or extend, read the original at [doi.org/10.1257/aer.20181662](https://doi.org/10.1257/aer.20181662) or download the replication archive at [doi.org/10.3886/E182681V1](https://doi.org/10.3886/E182681V1).

## TL;DR

The paper develops a methodology to estimate city-level vehicular speed indices from 57 million simulated Google Maps trips in 180 large Indian cities (population above 300,000 as of 2018, data collected June to November 2019). The headline index is exactly decomposable into an uncongested speed component and a congestion factor. Across the 180 cities, uncongested speed explains 70 percent of the cross-city variance in overall speed; the congestion factor explains only 13 percent. This holds even at peak hours (6-8 PM), where uncongested speed still accounts for 57 percent of variance versus 26 percent for congestion. Slower Indian cities are slower at all hours, not primarily because of traffic. Population density is the dominant correlate of lower speed (working mostly through uncongested speed), while more major roads, a gridded network, and street lighting are associated with higher uncongested speed. A hill-shaped relationship between city income and speed reflects two opposing forces: higher income is associated with higher uncongested speed and with more congestion in the upper half of the income distribution. US city trips are 70 percent faster on average than Indian city trips.

## Core results

Magnitudes are as reported; SE in parentheses. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Uncongested speed explains 70% of cross-city speed variance**; congestion explains only 13% (all trips, 180 cities) | Table 4, p. 1102 | Variance shares: uncongested = 0.701, congestion = 0.126, covariance = -0.086 |
| R2 | **At high-peak hours (6-8 PM), uncongested speed still explains 57% of variance** vs 26% for congestion | Table 4, p. 1102 | Variance shares, high-peak: uncongested = 0.567, congestion = 0.259 |
| R3 | **Population elasticity of city speed = -0.15**; city area elasticity = +0.17 (a strong density association) | Table 5, col. 1, p. 1104 | log population: -0.15 (0.016); log area: 0.17 (0.017); R\*\*2 = 0.47 |
| R4 | **More major roads are associated with higher speed via uncongested speed, not congestion** (consistent with the fundamental law) | Table 5, cols. 2, 5, 8, and 9, p. 1104 | log major roads: 0.069 (0.016) on speed; 0.077 (0.016) on uncongested speed; 0.0074 (0.0056) and 0.0038 (0.0051) on congestion factor, both indistinguishable from zero |
| R5 | **Hill-shaped income-speed relationship**: speed rises with city earnings up to the 8th decile, then falls | Table 5, col. 3, p. 1104 | earnings: 0.028 (0.0088); earnings\*\*2: -0.0021 (0.00053); turning point at 8th decile |
| R6 | **US city trips are 70% faster than Indian city trips** on average; top-to-bottom decile speed difference is larger in India (36%) than the US (25%) | p. 1108 | US mean trip speed is 70% above India mean; US trip elasticity on trip length is 25-50% larger |
| R7 | **Welfare gain from 10% uncongested speed improvement** far exceeds gains from optimal congestion pricing | p. 1102-1103 | Population-weighted average gain ~Rs 1,157 (~$16) per vehicle commuter per year in the 100 cities with the largest census worker samples; Rs 2,696 (~$38) in Delhi |
| R8 | **Large cross-city speed range**: fastest city is 83% faster than slowest | Table 3, p. 1100; text p. 1099 | Mean-centered index: Bhiwandi (slowest) = -0.34; Ranipet (fastest) = 0.26 |
| R9 | **Peak travel times are unreliable, especially in large and congested cities** | Text p. 1100 | 90th percentile is 6% above median on average; over 80% of cities fall between 4% and 8%; top-population-decile average is 8%; correlation with congestion = 0.89 |
| R10 | **Congestion accounts for more variance in larger cities** | Table 4, p. 1102 | Uncongested/congestion shares for smallest 50%: 0.813/0.062 all trips and 0.842/0.115 high peak; largest 50%: 0.632/0.179 and 0.464/0.324; largest 25%: 0.528/0.224 and 0.390/0.349; largest 10%: 0.477/0.238 and 0.370/0.340 |
| R11 | **Hills and water bodies are associated with lower speed and more congestion** | Table 5, cols. 3, 6, and 9, p. 1104 | Elevation-variance coefficient: -0.036 speed, -0.027 uncongested speed, +0.0089 congestion; water-length coefficient: -0.14, -0.082, +0.053 |
| R12 | **Streetlights and gridded networks are associated with faster uncongested travel** | Table 5, cols. 2, 5, and 8, p. 1104 | Streetlights: +0.014 speed, +0.010 uncongested speed, -0.0041 congestion; grid: +0.29, +0.24, -0.054; adding infrastructure raises speed-index R-squared from 0.47 to 0.62 |
| R13 | **Walking speed varies little across trips; elevation explains much of city variation** | Text p. 1107 | Mean 4.8 km/h, SD 0.1 km/h; elevation accounts for 76% of cross-city variation |
| R14 | **Viable transit options are scarce and much slower than driving** | Text pp. 1107-1108 | Viable for 18% of trips; duration 2.9x driving including initial wait and 2.5x excluding it; transit-driving rank correlation = 0.18 |
| R15 | **The congestion-speed relationship is stronger in US cities** | Text p. 1108 | Correlation of congestion factor with uncongested speed = -0.29 in India and -0.82 in the United States |
| R16 | **Intracity speed varies more over the day in large cities** | Figure 3, p. 1099; text p. 1098 | Slowest period is just over 25% slower than the fastest for all cities, over 35% for the 18 largest cities; Central Mumbai peak speed is about half its overnight speed |
| R17 | **Population accounts for the largest part of explanatory power in city speed regressions** | Text pp. 1105-1106 | Removing population lowers speed-index R-squared from 0.64 to 0.23, uncongested-speed R-squared from 0.60 to 0.21, and congestion R-squared from 0.51 to 0.39 |

**Overall (paper's conclusion).** Slow Indian cities are slow at all times of day because of low uncongested speed, not primarily because of traffic congestion. The paper estimates that a 10% improvement in uncongested speed could yield gains many times larger than existing estimates for optimal congestion pricing; this is a counterfactual calculation, not a causal estimate of any specific road intervention. The authors argue that congestion pricing or ride-sharing policies may do little where low uncongested speed is the main problem. Prior welfare estimates of optimal congestion pricing, including Kreindler (2018) for Bangalore and Akbar and Duranton (2018) for Bogotá, are below one percent of travel costs, far below the estimated uncongested-speed gains; Brownstone and Small (2005) inform the paper’s percentile-based measure of travel-time unreliability. The finding challenges popular reports (e.g., Chin et al. 2018) that characterize certain Indian cities as exceptionally congested: Kolkata is in fact among the least congested but is the second slowest city due to its low uncongested speed.

## Theory / model

The paper has no formal structural economic model. It conceptualizes travel as a consumption problem in which travelers select trips, and city-level speed serves as a price index for the cost of a typical trip. The conceptual framework identifies two components of that price: uncongested speed (the inherent ability of the road network to move vehicles in the absence of traffic) and a congestion factor (the additional delay imposed by other vehicles at peak times).

**Key conceptual result (decomposition identity, p. 1095, equation 3).** Because uncongested and congested speed are defined over identical trip lengths, the following exact additive decomposition holds at the city level:

$$
\hat{f}_c^{fe} = \hat{n}_c^{fe} - \hat{s}_c^{fe} \tag{3}
$$

where $$\hat{s}_c^{fe}$$ is the estimated speed index, $$\hat{n}_c^{fe}$$ is the uncongested speed index, and $$\hat{f}_c^{fe}$$ is the congestion factor. All three are city fixed effects from separate OLS regressions run on the same sample with the same covariates; they therefore add up algebraically, enabling exact variance decomposition.

**Identification.** The paper does not claim causal identification. City-speed indices are estimated by conditioning on trip characteristics (length, distance to center, time of day, day of week, weather, trip type, road class), so the city fixed effect captures the component of speed attributable to the city after holding these trip-level factors constant. Cross-city correlates of the indices (population, roads, income, topography) are interpreted as associations, not causal effects.

## Method

The method has two stages: constructing a comparable speed index per city, and decomposing it into uncongested speed and congestion.

**Stage 1: City speed index (pp. 1093-1094).** The naïve approach, a length-weighted average speed for city $$c$$:

$$
S_c^m = \frac{\sum_{i \in c} D_i}{\sum_{i \in c} T_i} \tag{1}
$$

is not comparable across cities because trip length and distance to the city center vary systematically. The paper instead estimates a log-linear regression of trip speed on city fixed effects and a vector of trip characteristics $$\mathbf{X}_i$$ (equation 2, p. 1093):

$$
\log S_i = \alpha \mathbf{X}_i' + s_{c(i)}^{fe} + \epsilon_i \tag{2}
$$

where $$S_i = D_i / T_i$$ is the speed of trip instance $$i$$, $$c(i)$$ is its city, and $$s_c^{fe}$$ is the city fixed effect used as the speed index. The index $$\hat{S}_c^{fe} = \exp(\hat{s}_c^{fe} + \hat{\phi}^2/2)$$ is a predicted speed for a typical comparable trip in city $$c$$. The same regression is re-estimated twice more: once with log uncongested speed ($$S_i^{nt} = D_i / T_i^{nt}$$, where $$T_i^{nt}$$ is GM's no-traffic duration) as the dependent variable to obtain $$\hat{n}_c^{fe}$$, and once with the log congestion delay $$\log T_i - \log T_i^{nt}$$ to obtain $$\hat{f}_c^{fe}$$. The additive identity in equation (3) follows immediately. This builds on the panel-regression tradition and adapts the price-index approach of Couture, Duranton, and Turner (2018) to a developing-country setting. The finding that more major roads are associated with higher uncongested speed and no detectable change in the congestion factor is consistent with the fundamental law of road congestion advanced by Duranton and Turner (2011): new road capacity attracts new traffic and leaves congestion unchanged in aggregate.

**Stage 2: Reliability.** Trip-time unreliability is measured as the ratio of the 90th to 50th percentile of the travel-time distribution across different weekday instances of the same trip, after conditioning on city-specific weekday effects (p. 1095). Unreliability is then used as a dependent variable in a variant of equation (2).

Written out from Section II.D (p. 1095), the trip-level reliability measure is:

$$
U_i = \frac{P_{90}(T_{i,d}^{adj})}{P_{50}(T_{i,d}^{adj})}
$$

where weekday-specific city effects are removed from the distribution of travel times before calculating the percentile ratio. The resulting ratio is the dependent variable in the trip-level city-fixed-effect regression from equation (2), with weather controls omitted. The paper describes this construction and regression in the text, but does not number a separate equation.

## Empirical specifications

**Benchmark trip-level regression (Table 2, p. 1097).** The core specification regresses log trip speed on city fixed effects, day and time of day effects (30-minute bins), log trip length, log distance to city center, and weather controls:

$$
\log S_i = \alpha_1 \log D_i + \alpha_2 \log \text{Dist}_{ci} + \text{time}_{t(i)} + \text{day}_{d(i)} + \text{type}_{k(i)} + \text{weather}_{w(i)} + s_{c(i)}^{fe} + \epsilon_i
$$

OLS, N = 57,103,181 trip instances in column 1 or 41,991,655 weekday trips in columns 2-5; columns 6-7 have 41,249,209 observations, across 180 cities. Standard errors are robust. Column (1) without weather controls yields trip-length elasticity 0.22 (SE 0.0046); adding distance to center (column 3) raises the distance elasticity to 0.078. Columns (5-7) add route-level controls (gradient, road class shares, intersections, turns against traffic, establishment density) to obtain "narrow" city fixed effects that isolate indirect effects.

The full Table 2 specification written out from its column definitions (p. 1097) is:

$$
\log S_i = \beta_1 \log D_i + \beta_2 \log \text{Dist}_{ci} + \boldsymbol{\gamma}'\text{TripType}_i + \boldsymbol{\delta}'\text{Weather}_i + \text{Day}_{d(i)} + \text{Time}_{t(i)} + s_{c(i)}^{fe} + \boldsymbol{\theta}'\text{Route}_{i} + \epsilon_i
$$

The right-hand-side blocks vary by column: columns 1-2 omit distance-to-center and weather, column 3 adds them, column 4 reweights to match Intents departure-time shares, and columns 5-7 add route controls in stages. The notes to Table 2 specify OLS, city/day/30-minute time indicators, robust standard errors, 180 cities, and N = 57,103,181 in column 1, N = 41,991,655 in columns 2-5, and N = 41,249,209 in columns 6-7.

**City-level correlates regression (Table 5, p. 1104).** The extracted city fixed effects from equation (2) are regressed on city characteristics with 180 city-level observations and a constant:

$$
\hat{s}_c^{fe} = \beta_1 \log \text{Pop}_c + \beta_2 \log \text{Area}_c + \beta_3 \text{Geography}_c + \beta_4 \text{Roads}_c + \beta_5 \text{Earnings}_c + \beta_6 \text{Earnings}_c^2 + u_c
$$

The same specification is estimated three times (columns 1-3 for speed index, 4-6 for uncongested speed, 7-9 for congestion factor). Coefficients in columns 1-3 equal the analogous coefficients in columns 4-6 minus those in columns 7-9 (from the decomposition identity). Geography variables include elevation variance, water length; roads include log major roads, log street lights, and a grid-conformity index (network shape). Robust standard errors throughout; R\*\*2 reaches 0.64 in the full speed-index specification. The same specification is run for US metro areas (online Appendix M) for cross-country comparison.

The Table 5 regressor set, transcribed from the printed rows and notes (p. 1104), is:

$$
Y_c^{(j)} = \beta_1 \log \text{Population}_c + \beta_2 \log \text{Area}_c + \beta_3 \text{ElevationVariance}_c + \beta_4 \text{WaterLength}_c + \beta_5 \log \text{MajorRoads}_c + \beta_6 \log \text{StreetLights}_c + \beta_7 \text{Network}_c + \beta_8 \text{Earnings}_c + \beta_9 \text{Earnings}_c^2 + u_c
$$

This equation is written out from the table, not printed as a numbered equation. Columns 1-3, 4-6, and 7-9 set $$Y_c^{(j)}$$ to speed, uncongested speed, and congestion factor, respectively. Within each outcome block, the first column includes population, area, and geography; the second adds roads, lighting, and network shape; the third adds earnings and its square. Each is OLS with a constant, 180 city observations, and robust standard errors. No city or other fixed effects are included in these cross-sectional regressions.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Google Maps simulated trips (57M+ instances) | Primary speed data: GM's recommended route duration with and without traffic for 2,730,969 unique origin-destination pairs sampled across 180 Indian cities; also 52M US instances for comparison | no page yet |
| OpenStreetMap via OSMnx | Road network classification (motorways, primary, secondary, tertiary, residential), intersection counts, turns against traffic, network shape (grid index) | no page yet |
| India Census 2011 | City population (sum of town/village level), car and motorcycle ownership shares, road inventory (paved/unpaved, street lights), commute mode shares, earnings from National Sample Survey 2011-2012 | no page yet |
| Global Human Settlement Layer (GHSL) | Urban extent and city boundary delineation; built-up area pixels used to define the 180-city sample | no page yet |
| Intents Mobi actual-trip app | Validation: 90,894 actual weekday trips in 89 cities by professional drivers, used to verify GM speed patterns and calibrate time-of-day weighting | no page yet |
| Meteostat | Weather conditions at time of each trip instance (rain, thunderstorms, wind, humidity, temperature), used as controls | no page yet |
| DMSP nightlight satellite data | Proxy for urban extent and street lighting; used alongside OSM street light data | no page yet |

Sample: 180 Indian cities with 2011 census population above 300,000 (after dropping one city with defective boundary data), June 5 to November 13, 2019. Each trip sampled across 21 instances spanning times of day and days of the week.

## When to read the full paper

Read the original at [doi.org/10.1257/aer.20181662](https://doi.org/10.1257/aer.20181662) if you are:
replicating or extending the speed-index methodology to other countries (the online appendices give full details on trip sampling, city boundary construction, and robustness variants including Laspeyres-type indices and discrete-choice models); studying urban transportation policy in developing countries (the paper discusses implications for congestion pricing, ride-sharing, and road investment); comparing Indian and US urban mobility in detail (Appendix M); or examining walking and transit in India (Appendix A). The replication archive at Akbar et al. (2023) (ICPSR, doi:10.3886/E182681V1) provides data and code.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(4), April 2023. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The verbatim PDF is under standard AEA copyright (all rights reserved); only this extract-only summary is provided here.

> Akbar, Prottoy, Victor Couture, Gilles Duranton, and Adam Storeygard.
> "Mobility and Congestion in Urban India."
> *American Economic Review* 113, no. 4 (April 2023): 1083-1111.
> DOI: 10.1257/aer.20181662.
> Replication data: doi:10.3886/E182681V1 (ICPSR).
