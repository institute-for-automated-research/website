---
title: "Location Sorting and Endogenous Amenities: Almagro & Dominguez-Iino (2025)"
description: >-
  Distilled: A dynamic spatial equilibrium model of Amsterdam shows that heterogeneous
  household preferences over endogenous consumption amenities increase residential
  sorting across neighborhoods but reduce welfare inequality, while short-term rental
  entry raises rents for all but redistributes welfare gains and losses across household
  types through the amenity channel. Econometrica 2025, CC BY-NC-ND 4.0. Fourteen core
  results with source locators, datasets used, the model, and the method with its
  defining equations.
sidebar:
  label: Almagro-Dominguez-Iino 2025
  order: 1
tags: [paper-summary, urban-economics, residential-sorting, housing-markets, short-term-rentals,
       urban-inequality, endogenous-amenities, structural, discrete-choice, panel-regression,
       instrumental-variables, open-access, peer-reviewed, unreplicated,
       data:cbs-netherlands, data:inside-airbnb, data:amsterdam-city-data]
paper:
  authors: Milena Almagro, Tomás Domínguez-Iino
  authorList:
    - { family: Almagro, given: Milena, orcid: "0009-0000-3336-5434", affiliation: "University of Chicago Booth School of Business; NBER" }
    - { family: Domínguez-Iino, given: Tomás, affiliation: "University of Chicago Booth School of Business" }
  year: 2025
  venue: Econometrica, Vol. 93, No. 3 (May 2025), 1031–1071
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA21394
  jel:
    codes: [R21, R31, L83]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: [Regional Economics and Spatial Analysis, Consumer Retail Behavior Studies, Housing Market and Economics]
  dataAccess: proprietary-confidential
  outcome:
    - residential sorting across Amsterdam neighborhoods
    - welfare inequality across household types
    - consumption amenity supply by sector
    - neighborhood rental prices and house sale prices
    - tourist and short-term rental activity in Amsterdam
    - tourist neighborhood location choice
    - long-term relative to short-term housing supply
    - equilibrium rents, STR prices, and amenity counts
    - neighborhood amenity spatial dispersion
    - household welfare under urban policy taxes
  outcomeClass: [asset-prices, social-welfare]
  license: >-
    CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version unspecified,
    URL https://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days 0,
    start 2025-01-01; corroborated by artifact p.1031 Creative Commons
    Attribution-NonCommercial-NoDerivs notice)
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: open-access CC BY-NC-ND (Wiley/Econometric Society site, 2026-06-26)
  redistribution: extract-only (CC BY-NC-ND prohibits modifications and commercial use; PDF not hosted)
  resultsCount: 14
  citedByCount: 22
  methods:
    role: both
    contributes: dynamic-sorting-endogenous-amenities
    family: structural
    buildsFrom: [gmm, instrumental-variables, panel-regression, k-means-clustering, logit-regression]
    identification: instrument
  contributionType: [new-theory, new-fact]
  mechanisms: [participation-frictions, residential-amenity-externality]
  scope:
    region: Amsterdam, Netherlands
    period: 2008..2018
    frequency: annual
    dataType: [administrative, other]
    granularity: [individual, aggregate]
    n: "Universe of residents of the Netherlands 2008-2018; 95 neighborhoods (wijk), 22 districts (gebieden) in Amsterdam; 233,772 renewal-path observations for ECCP estimation"
  findings:
    - { ref: R1, outcome: neighborhood rental prices, metric: coefficient, value: "IV (controls + district-year FE): 0.205 (SE 0.093); OLS: 0.109 (SE 0.018); first-stage F = 69.66", direction: positive, vsBenchmark: "OLS downward-biased vs IV (0.109 vs 0.205), consistent with positive unobservable correlation" }
    - { ref: R2, outcome: neighborhood house sale prices, metric: coefficient, value: "IV (controls + district-year FE): 0.326 (SE 0.102); OLS: 0.037 (SE 0.022); first-stage F = 65.9", direction: positive, vsBenchmark: "OLS severely downward-biased vs IV (0.037 vs 0.326)" }
    - { ref: R3, outcome: consumption amenity supply by sector, metric: elasticity, value: "10% more tourists: +2.3% touristic amenities, +0.5% restaurants, +2.3% bars, +0.9% food stores, +2.9% non-food stores, 0% nurseries", direction: positive, vsBenchmark: "Nursery supply unresponsive to tourist inflows; maximally responsive to household-with-children types" }
    - { ref: R4, outcome: residential sorting across Amsterdam neighborhoods, metric: level, value: "Entropy index (sorting): about 0.8 under heterogeneous preferences vs about 0.4 under homogeneous; welfare gap (highest/lowest CS): about 2 under heterogeneous vs about 10 under homogeneous preferences", direction: mixed, vsBenchmark: "More sorting but less welfare inequality under heterogeneous preferences (Figure 9)" }
    - { ref: R5, outcome: welfare inequality across household types, metric: level, value: "CE gains from STR entry (endogenous amenities): Older Families -4% of income; Singles +1-2%; Younger Families +1-2%; under exogenous amenities all groups lose 1-2%", direction: mixed, vsBenchmark: "Amenity channel reverses distributional incidence for the highest-income (Older Families) group (Figure 10)" }
    - { ref: R6, outcome: tourist and short-term rental activity in Amsterdam, metric: level, value: "Overnight stays rose from 8 million in 2008 to nearly 16 million in 2017; STR listings grew from zero to over 25,000, including about 7,000 commercial listings in 2017", direction: positive }
    - { ref: R7, outcome: consumption amenity supply by sector, metric: probability, value: "Nurseries declined in 58% of neighborhoods, with a median decline of 32% (2011-2017)", direction: negative }
    - { ref: R8, outcome: residential sorting across Amsterdam neighborhoods, metric: coefficient, value: "Table IV: log-rent coefficients Older Families -10.886 (SE 1.205), Singles -2.310 (0.999), Younger Families -1.964 (1.028); log-nurseries 1.631 (0.173), 0.044 (0.143), 0.246 (0.147); WTP for 1% more nurseries: about 0.14% rent for family groups and 0.02% for Singles", direction: mixed, vsBenchmark: "Preferences differ by household type; estimates are from two-step optimal GMM" }
    - { ref: R9, outcome: tourist neighborhood location choice, metric: coefficient, value: "Table V baseline: log-price -2.723 (SE 0.819), log-touristic amenities 1.008 (0.377), log-nurseries -0.233 (0.137); with review controls: -2.659 (0.759), 0.837 (0.394), -0.229 (0.136); N=371 and 370, R-squared=0.529 and 0.537", direction: mixed, vsBenchmark: "Coefficients are not statistically different after review-score controls; twice as many touristic amenities is associated with willingness to pay about 30% higher price (text p.1060)" }
    - { ref: R10, outcome: long-term relative to short-term housing supply, metric: coefficient, value: "Table VI price-gap coefficient: OLS 0.242 (SE 0.099); IV 0.287 (0.086), 0.309 (0.091), and preferred two-way FE IV 0.385 (0.639); preferred first-stage F=3.24; 275 observations", direction: positive, vsBenchmark: "A 1-SD (29%) increase in STR-LT price gap raises relative STR market share by 13.6% (text p.1062)" }
    - { ref: R12, outcome: equilibrium rents, STR prices, and amenity counts, metric: coefficient, value: "The 2017 simulated equilibrium tracks observed rents, STR prices, and amenity counts; simulated-to-observed slopes are not statistically different from 1 except for food and non-food stores (Figures 7-8, text p.1063)", direction: mixed }
    - { ref: R13, outcome: neighborhood amenity spatial dispersion, metric: level, value: "Table VII heterogeneous-minus-homogeneous Gini: touristic amenities 0.02, restaurants 0.13, bars 0.08, food stores 0.26, non-food stores 0.14, nurseries -0.10", direction: mixed, vsBenchmark: "Five of six amenity sectors become more spatially concentrated with heterogeneous preferences" }
  resultType: confirms
  relatesTo:
    - { cite: "Guerrieri, Hartley, and Hurst (2013)", doi: '10.1016/j.jpubeco.2013.02.001', relation: builds-on, note: "endogenous gentrification and housing price dynamics: foundational reference for amenity-driven sorting" }
    - { cite: "Diamond (2016)", doi: '10.1257/aer.20131706', relation: builds-on, note: "location sorting and endogenous amenities across cities: closest structural antecedent" }
    - { cite: "Barron, Kung, and Proserpio (2021)", doi: '10.1287/mksc.2020.1227', relation: extends, note: "STR effect on rents and housing markets: paper provides structural decomposition beyond their reduced-form IV" }
    - { cite: "Kalouptsidi, Scott, and Souza-Rodrigues (2021b)", relation: builds-on, note: "linear IV regression estimators for structural dynamic discrete choice: the ECCP backbone used for housing demand estimation" }
  openQuestions:
    - "Within-sector amenity quality differences are not modeled due to absence of firm-level quality data; all differentiation is horizontal (p.1068)."
    - "Transitional dynamics are not characterized; counterfactuals compare stationary equilibria only (p.1069)."
    - "The assumption that households consume amenities only at their residential location abstracts from commuting-to-consume; relaxing it would require trip-level data not available for Amsterdam (p.1069)."
  replicationCode:
    url: https://doi.org/10.5281/zenodo.14807135
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1031-1071, Econometrica Vol. 93 No. 3 May 2025); five headline results extracted from Tables I, III, IV and Figures 9, 10; model equations transcribed from pp. 1042-1048 (eqs. 1-22), estimation equations from pp. 1051-1058 (eqs. 23-29). Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and magnitudes re-checked against PDF; all five Core-results rows confirmed (Table I, III, Figures 9-10); three equation transcription errors fixed: (1) eq.27 delta_a vector had uppercase S as generic index, corrected to lowercase s; (2) eq.29 LHS subscript incorrectly retained j' after setting j'=0, corrected to Y^k_{t,j,tilde-j,x}; (3) eq.29 error term had j' instead of tilde-j, corrected to xi^k_{t,j,tilde-j,x}." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF. Appended nine Core-results rows and matching findings, and completed numbered equations (1)-(29) plus estimating specifications from the source PDF. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 14 Core-results rows, equations and specifications, classification axes, findings, prose, and frontmatter against the PDF; corrected the Figure 9 welfare ratio, qualified the imprecise preferred Table VI estimate, corrected classifications and metric labels, removed an unverified DOI, and restored two body citations. No unsupported headline results found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ECTA21394", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=unspecified, URL=https://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days=0, start=2025-01-01" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural equilibrium model (endogenous amenities + dynamic location choice), and the estimation equations: enough to understand what was found and how, without reading all 41 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.3982/ECTA21394).

## TL;DR

The paper builds and estimates a dynamic spatial equilibrium model of Amsterdam in which heterogeneous households make forward-looking residential choices and firms endogenously supply consumption amenities (restaurants, bars, nurseries, touristic venues, food and non-food stores) in response to the neighborhood's demographic composition. Using restricted Dutch administrative microdata (CBS) linked to neighborhood amenity counts (ACD BBGA) and short-term rental listings (Inside Airbnb), and exploiting tourist inflows as a demand shifter via a shift-share instrument, the paper shows: (1) short-term rental (STR) penetration raises rents 0.09-0.21% per 1% growth in listings (IV); (2) tourist presence increases touristic amenities and restaurants but leaves nurseries unchanged; (3) preference heterogeneity across household types increases residential sorting but reduces welfare inequality relative to the homogeneous-preference benchmark, because neighborhoods become horizontally differentiated; and (4) STR entry produces winner-loser welfare splits by household type once amenity adjustment is allowed: the highest-income group (Older Families) loses 4% of income while lower-income Singles and Younger Families gain 1-2%. The paper extends prior work by Guerrieri, Hartley, and Hurst (2013) and Diamond (2016) by microfounding how different amenity types respond to demographic heterogeneity.

The reduced-form STR estimates build on the shift-share housing-market evidence of Barron, Kung, and Proserpio (2021). Local housing-demand estimation also builds on the ECCP and linear-IV methods of Kalouptsidi, Scott, and Souza-Rodrigues (2021b).

## Core results

Magnitudes and significance are as reported; `\*` = 5%, `\*\*` = 1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **STR penetration raises neighborhood rents** (IV); OLS is downward-biased, consistent with tourist-attractive areas becoming locally less attractive to residents | Table I, p.1038 | IV (full controls + district-year FE): coeff = 0.205 (SE 0.093), F = 69.66; OLS = 0.109 (SE 0.018); range across specs: 0.091-0.205 |
| R2 | **STR penetration raises house sale prices** (IV); OLS severely underestimates the price effect | Table I, p.1038 | IV (full controls + district-year FE): coeff = 0.326 (SE 0.102), F = 65.9; OLS = 0.037 (SE 0.022); range: 0.149-0.326 |
| R3 | **Tourist presence drives supply of touristic amenities but not nurseries**; supply responses are sectorally differentiated by the demographic type driving demand | Table III, p.1054; text p.1053 | 10% more tourists: +2.3% touristic amenities, +0.5% restaurants, +2.3% bars, +0.9% food stores, +2.9% non-food stores, 0% nurseries |
| R4 | **Heterogeneous preferences increase residential sorting but reduce welfare inequality** relative to the homogeneous benchmark; horizontal neighborhood differentiation is the mechanism | Figure 9, p.1064; Table VII, p.1065 | Entropy index: 0.8 (heterogeneous) vs 0.4 (homogeneous); welfare gap (max/min consumer surplus): about 2 (heterogeneous) vs about 10 (homogeneous); Gini indices rise for 5 of 6 amenity sectors under heterogeneous preferences |
| R5 | **STR entry produces welfare gains for younger/lower-income households and losses for older/higher-income households** once amenity endogeneity is accounted for; direction reverses vs the exogenous-amenity benchmark | Figure 10, p.1066 | Older Families: -4% income CE loss; Singles: +1-2% CE gain; Younger Families: +1-2% CE gain; under exogenous amenities all lose 1-2% (dark bars in Figure 10) |
| R6 | **Tourism and STR activity expanded** in Amsterdam | Figure 1, p.1037; text pp.1032-1033 | Overnight stays rose from 8 million in 2008 to nearly 16 million in 2017; STR listings grew from zero to over 25,000, including about 7,000 commercial listings in 2017 |
| R7 | **Local-oriented nurseries declined as tourism-oriented amenities spread** | Figure 4, p.1040 | Nurseries declined in 58% of neighborhoods, with a median decline of 32% between 2011 and 2017 |
| R8 | **Local households have heterogeneous amenity preferences** in the dynamic location-choice estimates | Table IV, p.1059; text p.1060 | Log-rent coefficients: Older Families -10.886 (SE 1.205), Singles -2.310 (0.999), Younger Families -1.964 (1.028); nursery coefficients: 1.631 (0.173), 0.044 (0.143), 0.246 (0.147); WTP for 1% more nurseries is about 0.14% rent for family groups and 0.02% for Singles |
| R9 | **Tourists prefer lower-price neighborhoods with more touristic amenities and fewer nurseries** | Table V, p.1061; text p.1060 | Baseline coefficients: log price -2.723 (SE 0.819), log touristic amenities 1.008 (0.377), log nurseries -0.233 (0.137); with review controls: -2.659 (0.759), 0.837 (0.394), -0.229 (0.136); N=371 and 370; R²=0.529 and 0.537 |
| R10 | **IV estimates indicate landlords shift housing toward short-term rentals as their relative price rises**; the preferred two-way-FE estimate is imprecise | Table VI, p.1062; text p.1062 | Price-gap coefficient: OLS 0.242 (SE 0.099); IV 0.287 (0.086), 0.309 (0.091), and preferred two-way FE IV 0.385 (0.639); preferred first-stage F=3.24; 275 observations; the preferred estimate implies a 1-SD (29%) price-gap increase raises relative STR market share by 13.6% |
| R11 | **Amenity-supply estimates are stable to precinct-year fixed effects**, a check on the tenancy-stock instruments | Text p.1053 (Supplemental Appendix A.7.2) | Adding precinct-year fixed effects does not significantly change the Table III estimates; the paper presents this as suggestive evidence that the instruments are uncorrelated with unobserved firm costs |
| R12 | **The estimated equilibrium reproduces most observed rent, STR-price, and amenity variation** | Figures 7-8, p.1063; text p.1063 | Simulated-to-observed slopes are not statistically different from 1 except for food and non-food stores |
| R13 | **Heterogeneous preferences spatially concentrate five of six amenity sectors** | Table VII, p.1065 | Heterogeneous-minus-homogeneous Gini: touristic amenities 0.02, restaurants 0.13, bars 0.08, food stores 0.26, non-food stores 0.14, nurseries -0.10 |
| R14 | **Housing and amenity taxes have different welfare incidence** | Figure 12, p.1068; text pp.1067-1068 | Welfare rises monotonically for all groups as STR tax increases; with a touristic-amenity tax, Older Families gain while Singles and Younger Families lose |

**Overall (paper's conclusion).** Two-way heterogeneity, in household preferences and in amenity supply responses, determines both the degree of horizontal differentiation across neighborhoods and the distributional incidence of urban policies. Low-income households may gain rather than lose from STR entry if the amenities tourists bring align with their preferences, reversing naive predictions based on rent effects alone. The amenity channel matters for incidence qualitatively, not just quantitatively.

## Theory / model

The paper models Amsterdam as a stationary spatial equilibrium with local households, tourists, landlords, and firms supplying differentiated consumption amenities. Local residents choose locations dynamically; landlords allocate housing between long-term and short-term rental; and firm entry makes amenities respond to the demographic mix. Equations (1)-(22) define the model in Sections 4.1-4.4 (pp.1042-1048).

The population composition and amenity vector in location $$j$$ at time $$t$$ are defined in equations (1)-(2), p.1042:

$$
M_{jt} \equiv [M^1_{jt}, \ldots, M^K_{jt}, M^T_{jt}]', \tag{1}
$$

$$
a_{jt} \equiv [N_{1jt}, \ldots, N_{Sjt}]'. \tag{2}
$$

Here $$M^k_{jt}$$ is the number of households of type $$k$$, including tourists $$T$$, and $$N_{sjt}$$ is the number of varieties in amenity sector $$s$$. Households have Cobb-Douglas spending across sectors and CES demand across varieties. The individual and aggregate demand equations (3)-(4), p.1042-1043, are:

$$
q^k_{isjt} = \frac{\alpha^k_s \phi^k w^k_t}{p_{isjt}}\left(\frac{p_{isjt}}{P_{sjt}}\right)^{1-\sigma_s}, \qquad P_{sjt} = \left(\sum_{i=1}^{N_{sjt}}p_{isjt}^{1-\sigma_s}\right)^{\frac{1}{1-\sigma_s}}, \tag{3}
$$

$$
q_{isjt} = \sum_k q^k_{isjt}M^k_{jt}. \tag{4}
$$

With identical marginal costs within a sector-location, monopolistic competition implies common prices and quantities, equation (5), and free entry imposes the zero-profit condition in equation (6), both p.1043:

$$
p_{isjt}=\frac{c_{sjt}}{1-\frac{1}{\sigma_s}}\quad \forall i\in sjt \quad \Longrightarrow \quad p_{isjt}=p_{sjt},\;q_{isjt}=q_{sjt}\quad \forall i\in sjt. \tag{5}
$$

$$
(p_{sjt}-c_{sjt})q_{sjt}=F_{sjt}(N_{jt}), \qquad N_{jt}=\sum_s N_{sjt}. \tag{6}
$$

The zero-profit condition delivers the equilibrium amenity count in equation (7), and the resulting population-to-amenities mapping in equation (8), p.1043:

$$
N_{sjt}=\frac{1}{\sigma_sF_{sjt}}\sum_k\alpha^k_s\phi^kw^k_tM^k_{jt}. \tag{7}
$$

$$
a_{jt}=\mathcal{A}(M_{jt}). \tag{8}
$$

The inelastic housing stock is allocated across long-term and short-term rental by landlords facing Type I extreme-value shocks. Equations (9)-(10), p.1044, give the supply shares:

$$
\mathcal{H}^{LT,S}_{jt}(r_{jt},p_{jt})=\frac{\exp(\alpha r_{jt})}{\exp(\alpha r_{jt})+\exp(\alpha p_{jt}-\kappa_{jt})}\mathcal{H}_{jt}. \tag{9}
$$

$$
\mathcal{H}^{ST,S}_{jt}(r_{jt},p_{jt})=\mathcal{H}_{jt}-\mathcal{H}^{LT,S}_{jt}(r_{jt},p_{jt}). \tag{10}
$$

Local households pay a fixed and distance-related cost when moving; tenure rises with continued residence and resets after a move. Their flow utility and dynamic value function are given in equation (11) and the Bellman equation immediately following it, p.1045:

$$
MC^k(j_{it},j_{it-1})=\begin{cases}0 & \text{if }j_{it}=j_{it-1},\\ m^k_0+m^k_1\operatorname{dist}(j_{it},j_{it-1}) & \text{if }j_{it}\ne j_{it-1},\;j_{it},j_{it-1}\ne0,\\ m^k_2 & \text{if }j_{it}\ne j_{it-1}\text{ and }j_{it}=0\text{ or }j_{it-1}=0,\end{cases} \qquad \tau_{it}=\begin{cases}\min\{\tau_{it-1}+1,\bar{\tau}\} & \text{if }j_{it}=j_{it-1},\\1 & \text{otherwise.}\end{cases}
$$

$$
u^k_t(j,x_{it})=\bar{u}^k_t(j)+\delta^k_{\tau}\log\tau_{it}-MC^k(j,j_{it-1}). \tag{11}
$$

The household value function satisfies the Bellman equation immediately following (11), p.1045:

$$
V^k_t(x_{it},\epsilon_{it})=\max_{j\in\{0,1,\ldots,J\}}\left\{u^k_t(j,x_{it})+\epsilon_{ijt}+\beta\mathbb{E}_t[V^k_{t+1}(x_{it+1},\epsilon_{it+1})\mid j,x_{it},\epsilon_{it}]\right\}.
$$

The logit choice probability under Type I extreme-value shocks is equation (12), p.1045:

$$
P^k_t(j\mid x_{it})=\frac{\exp\left(u^k_t(j,x_{it})+\beta\mathbb{E}_t[V^k_{t+1}(x_{it+1},\epsilon_{it+1})\mid j,x_{it},\epsilon_{it}]\right)}{\sum_{j'}\exp\left(u^k_t(j',x_{it})+\beta\mathbb{E}_t[V^k_{t+1}(x_{it+1},\epsilon_{it+1})\mid j',x_{it},\epsilon_{it}]\right)}. \tag{12}
$$

Conditional choice probabilities update the population distribution over locations and tenure by equation (13), p.1045-1046; equation (14) converts that distribution to local household counts, p.1046:

$$
\pi^k_t(j,\tau)=\begin{cases}\sum_{\tau'}\sum_{j'\ne j}P^k_t(j\mid j',\tau')\pi^k_{t-1}(j',\tau') & \tau=1,\\P^k_t(j\mid j,\tau-1)\pi^k_{t-1}(j,\tau-1) & \tau\in[2,\bar{\tau}),\\P^k_t(j\mid j,\bar{\tau}-1)\pi^k_{t-1}(j,\bar{\tau}-1)+P^k_t(j\mid j,\bar{\tau})\pi^k_{t-1}(j,\bar{\tau}) & \tau=\bar{\tau}.\end{cases} \tag{13}
$$

$$
M^k_{jt}(r_t,a_t)=\sum_{\tau}\pi^k_t(j,\tau)M^k_t, \qquad k\in\{1,\ldots,K\}. \tag{14}
$$

Type-$$k$$ households spend a share $$1-\phi^k$$ of income on housing. The resulting floor-space consumption and long-term housing demand in equation (15), p.1046, are:

$$
f^k_{jt}=\frac{(1-\phi^k)w^k_t}{r_{jt}}, \qquad \mathcal{H}^{LT,D}_{jt}(r_t,a_t)=\sum_{k=1}^K M^k_{jt}(r_t,a_t)f^k_{jt}. \tag{15}
$$

Tourists choose between STRs and hotels. Their STR utility and logit demand are equations (16)-(17), p.1046:

$$
u^{ST}_{jt}=\delta^{ST}_j+\delta^{ST}_t+\delta^{ST}_p\log p_{jt}+\delta^{ST}_a\log a_{jt}+\xi^{ST}_{jt}. \tag{16}
$$

$$
M^{ST}_{jt}(p_t,a_t)=\frac{\exp(u^{ST}_{jt})}{\sum_{j'=0}^{J}\exp(u^{ST}_{j't})}M^T_t. \tag{17}
$$

Hotel demand is the residual of total tourist arrivals after STR demand; hotel guests are allocated across locations in proportion to hotel-bed shares. Total tourists in location $$j$$ are therefore equation (18), p.1047. STR housing demand in floor-space units is equation (19), p.1047:

$$
M^H_t(p_t,a_t)=M^T_t-\sum_{j=1}^{J}M^{ST}_{jt}(p_t,a_t), \qquad M^H_{jt}(p_t,a_t)=s^{beds}_{jt}M^H_t(p_t,a_t), \qquad M^T_{jt}(p_t,a_t)=M^{ST}_{jt}(p_t,a_t)+M^H_{jt}(p_t,a_t). \tag{18}
$$

$$
\mathcal{H}^{ST,D}_{jt}(p_t,a_t)=M^{ST}_{jt}(p_t,a_t)f_{jt}. \tag{19}
$$

The stationary population law of motion, stationary distribution, and stationary local counts are equations (20)-(22), pp.1047-1048:

$$
\pi^k_t=\Pi^k_t(r_t,a_t)\pi^k_{t-1}. \tag{20}
$$

$$
\pi^k(r,a)=\Pi^k(r,a)\pi^k(r,a). \tag{21}
$$

$$
M^k_j(r,a)=\sum_{\tau}\pi^k(r,a)_{[j,\tau]}M^k, \qquad k\in\{1,\ldots,K\}. \tag{22}
$$

A stationary equilibrium jointly determines long-term rents $$r$$, STR prices $$p$$, amenities $$a$$, stationary local distributions $$\pi^k$$, and tourist STR populations $$M^{ST}$$. For each location, long-term and short-term housing markets clear and amenities satisfy the mapping in (8). The conditions in the stationary-equilibrium definition, pp.1048-1049, are:

$$
\mathcal{H}^{LT,S}_j(r_j,p_j)=\sum_{k=1}^{K}M^k_j(r,a)f^k_j, \qquad \mathcal{H}^{ST,S}_j(r_j,p_j)=M^{ST}_j(p,a)f_j, \qquad a_j=\mathcal{A}(M_j),\quad \forall j.
$$

The paper selects the equilibrium by initializing its solver at observed rents and amenities; it reports local uniqueness under that selection rule in Supplemental Appendix A.4.2.

## Method

The empirical design combines a reduced-form shift-share IV for STR effects on housing prices with a structural spatial-equilibrium model. The amenity-supply block uses GMM with tenancy-stock demand shifters; local housing demand is estimated with the Euler Equation in Conditional Choice Probabilities (ECCP); tourist demand is estimated with location-choice logit; and landlords' relative LT/ST supply response is estimated by IV. The numbered estimating equations (23)-(29) appear in Sections 5.2-5.3, pp.1051-1057.

**Amenity supply.** Rewriting the free-entry condition in logs gives equation (23), and parameterizing operating cost produces the main estimating equation (24), both p.1051:

$$
\log N_{sjt}=-\log F_{sjt}(N_{jt})+\log\left(\sum_k\beta^k_sX^k_{jt}\right), \qquad X^k_{jt}=\phi^kw^k_tM^k_{jt},\quad \beta^k_s=\frac{\alpha^k_s}{\sigma_s}. \tag{23}
$$

$$
F_{sjt}(N_{jt})=\Lambda_j\Lambda_tR(N_{jt})\Omega_{sjt},\qquad R(N_{jt})=N_{jt}^{\eta},
$$

$$
\log N_{sjt}=\lambda_j+\lambda_t-\eta\log N_{jt}+\log\left(\sum_k\beta^k_sX^k_{jt}\right)+\omega_{sjt}. \tag{24}
$$

The demand shifter and exclusion restriction used for identification are equation (25), p.1052:

$$
Z^k_{jt}=w^k_tS^{\gamma(k)}_{jt}, \qquad \mathbb{E}[Z^k_{jt}\omega_{sjt}\mid\lambda_j,\lambda_t]=0. \tag{25}
$$

The six sector equations are jointly estimated by constrained GMM, imposing $$\beta^k_s\geq0$$. Stacked sector instruments and moment residuals form the p.1053 objective:

$$
\max_{\lambda_j,\lambda_t,\beta^k_s}\widehat{g}(\lambda_j,\lambda_t,\beta^k_s)'_{sjt}\widehat{W}\widehat{g}(\lambda_j,\lambda_t,\beta^k_s)_{sjt}, \qquad \text{s.t. }\beta^k_s\geq0\;\forall s,k, \qquad \widehat{W}=(Z_{sjt}Z'_{sjt})^{-1}.
$$

Instruments are interacted with sector indicators; location and year effects are included. The sample is a three-way panel of 22 Amsterdam districts, 2008-2018; standard errors use a Bayesian bootstrap with random Dirichlet weights over 500 draws (Table III note, p.1054). The paper calibrates $$\eta=1.52$$ and reports that adding precinct-year fixed effects does not significantly change estimates (text p.1053; Supplemental Appendix A.7.2).

**Local housing demand (ECCP).** The two-step ECCP estimator uses renewal actions to cancel continuation values. Its path log-likelihood outcome and regression equation are equation (26), p.1056:

$$
Y^k_{t,j,j',\tilde{j},x_t}=u^k_t(j,x_t)-u^k_t(j',x_t)+\beta\left[u^k_t(j,x_{t+1})-u^k_t(j',x'_{t+1})\right]+\tilde{\nu}^k_{t,j,j',\tilde{j},x_t},
$$

$$
Y^k_{t,j,j',\tilde{j},x_t}\equiv\log\frac{P^k_t(j\mid x_t)}{P^k_t(j'\mid x_t)}+\beta\log\frac{P^k_{t+1}(\tilde{j}\mid x_{t+1})}{P^k_{t+1}(\tilde{j}\mid x'_{t+1})}. \tag{26}
$$

Type-specific flow utility, equation (27), and the relation between amenity preferences and direct consumption plus spillovers, equation (28), are given on pp.1056-1057:

$$
\bar{u}^k_t(j)=\delta^k_j+\delta^k_t+\delta^k_r\log r_{jt}+\delta^k_a\log a_{jt}+\delta^k_b\log b_{jt}+\xi^k_{jt},\qquad j\ne0. \tag{27}
$$

$$
\delta^k_s=\frac{\alpha^k_s\left(\frac{\phi^k}{\sigma_s-1}\right)+\gamma^k_s}{\sigma^k_{\epsilon}}. \tag{28}
$$

Setting $$j'=0$$ and normalizing outside-option utility to zero gives the estimating equation (29), p.1057:

$$
Y^k_{t,j,\tilde{j},x_{it}}=\delta^k_j+\delta^k_t+\delta^k_r\log r_{jt}+\delta^k_a\log a_{jt}+\delta^k_b\log b_{jt}+\delta^k_{\tau}\Delta\tau_{it}-\Delta MC^k_{it}+\tilde{\xi}^k_{t,j,x_{it}}. \tag{29}
$$

Here $$\Delta\tau_{it}=\tau'(j,x_{it})-\tau'(0,x_{it})$$ and $$\Delta MC^k_{it}=MC^k(j,j_{it-1})-MC^k(0,j_{it-1})-\beta[MC^k(\tilde{j},j)-MC^k(\tilde{j},0)]$$. The first step estimates conditional choice probabilities using multinomial logit; the second estimates the flow-payoff parameters by two-step optimal GMM. The paper uses seven instruments for rents and amenities, location and time fixed effects, 22 districts, years 2008-2018, and 233,772 renewal-path observations for each of the three market-driven household types. Two-step efficient GMM standard errors are reported in Table IV (p.1059); the reported first-stage F-statistic is 169.8 (text p.1059).

## Empirical specifications

**Reduced-form STR effects on rents and sale prices (R1-R2).** Table I (p.1038) estimates the same panel specification for neighborhood rent per square meter and house sale prices:

$$
\log Y_{jt}=\beta\log(\text{commercial Airbnb listings}_{jt})+\gamma'X_{jt}+\mu_{dt}+\varepsilon_{jt},
$$

where $$X_{jt}$$ includes housing stock, average income, and high-skill population share, and $$\mu_{dt}$$ is district-by-year fixed effects in the fullest specification. The IV is a shift-share instrument using worldwide Airbnb search activity as the shift and neighborhood exposure based on historic monuments as the share. Table I reports OLS and IV models with and without controls and district-year fixed effects; standard errors are clustered by wijk. The full-control, district-year-FE samples contain 763 rent observations and 737 sale-price observations. First-stage F-statistics are 69.66 for rents and 65.9 for sale prices. Table I coefficients and these design details are recorded in R1-R2.

**Amenity-supply GMM (R3, R11).** Equation (24) is estimated jointly for six sectors with sector-specific tenancy-stock instruments from (25), location and year effects, a three-way 22-district panel over 2008-2018, and Bayesian-bootstrap standard errors. It imposes nonnegative supply parameters. The reported tourist-demand effects and separate household-type response patterns are in Table III (p.1054) and text p.1053. The precinct-year-FE sensitivity check is reported as not significantly changing estimates (Supplemental Appendix A.7.2, referenced on p.1053).

**Local preference estimation and household counterfactuals (R4-R5, R8, R13).** Equations (26)-(29) are estimated separately for Older Families, Singles, and Younger Families with two-step optimal GMM, location and time fixed effects, and seven instruments for endogenous rents and amenities. The data describe Amsterdam districts and the 2008-2018 estimation period; Table IV reports 233,772 state-path observations per type and two-step efficient GMM standard errors. Counterfactuals compare stationary equilibria under estimated heterogeneous preferences with population-weighted homogeneous amenity preferences (Figure 9, p.1064), report sectoral Gini dispersion (Table VII, p.1065), and compare pre-STR, post-STR with fixed amenities, and post-STR with endogenous amenities (Figure 10, p.1066). Welfare is measured as a consumption equivalent relative to income. Table IV preference coefficients and willingness-to-pay translations are in R8, sorting and welfare comparisons in R4-R5, and sectoral spatial dispersion in R13.

**Tourist neighborhood demand (R9).** Taking log odds of choosing an STR location relative to the hotel outside option yields:

$$
\log P^{ST}_{jt}-\log P^H_t=\delta^{ST}_j+\delta^{ST}_t+\delta^{ST}_p\log p_{jt}+\delta^{ST}_a\log a_{jt}+\xi^{ST}_{jt}.
$$

The paper estimates a yearly panel of 95 neighborhoods over 2015-2018, with neighborhood and year effects; the review-controlled specification adds Airbnb review scores. Standard errors are clustered by wijk. Table V (p.1061) reports 371 baseline observations and 370 review-controlled observations. Coefficients are not statistically different between the two specifications (text p.1061), which the authors treat as suggestive evidence against material time-varying omitted location quality.

**Landlord housing-supply choice (R10).** The log odds of supplying long-term rather than short-term floor space yields the main estimating equation:

$$
\log\mathcal{H}^{LT,S}_{jt}-\log\mathcal{H}^{ST,S}_{jt}=\alpha(r_{jt}-p_{jt})+\kappa_j+\kappa_t+\nu_{jt}.
$$

The IV uses predicted tourist demand from worldwide Airbnb search volume interacted with neighborhood historic-attraction exposure. Table VI (p.1062) uses 92 locations over 2015-2017; the preferred IV specification includes wijk and year fixed effects, clusters standard errors by wijk, and has 275 observations. Its first-stage F-statistic is 3.24. The text reports the implied change in relative STR market share for a one-standard-deviation price-gap increase (R10).

**Model fit and policy counterfactuals (R12, R14).** The authors simulate a stationary equilibrium for 2017 using estimated parameters, observed rents and amenities as the solver initialization, perfect foresight, zero steady-state demand shocks, and calibrated landlord costs. Figures 7-8 (p.1063) compare simulated with observed rents, STR prices, and amenities. Figure 12 (p.1068) compares consumer surplus as a share of income as STR and touristic-amenity tax rates rise. STR-tax welfare is increasing for every modeled household type; responses to the touristic-amenity tax differ by type, with Older Families gaining and Singles and Younger Families losing.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CBS residential cadaster (Centraal Bureau voor de Statistiek, Netherlands) | Individual-level annual residential histories for universe of Dutch residents; key panel for location choice estimation | no page yet |
| CBS tax return data | Household income, educational attainment, employment status, ethnic background; source for household type classification | no page yet |
| CBS housing unit tax appraisal panel 2006-2020 | Property values, tenancy status, geo-coordinates, quality measures for universe of Dutch residential units | no page yet |
| CBS national rent survey 2006-2019 | Rental prices per neighborhood; imputed via random forest and CBS valuations (Mullainathan and Spiess 2017) | no page yet |
| Amsterdam City Data BBGA (ACD) | Annual neighborhood-level demographics, amenity establishment counts, tourist inflows; 95 wijk / 22 districts, 2008-2018; publicly available at ACD BBGA | no page yet |
| ACD Tourism data | City-level tourist overnight stays and hotel room counts; public via ACD Tourism portal | no page yet |
| Inside Airbnb | Monthly web-scraped listing-level STR data for Amsterdam (prices per night, calendar availability, reviews); used to construct commercial listings time series | no page yet |

Sample period: 2008-2018 (annual). Household type classification uses the CBS panel of 672,093 households. Amenity supply estimated on 22 districts. Housing demand estimated on 22 districts with 46 individual states per type per year.

## When to read the full paper

Read the [original](https://doi.org/10.3982/ECTA21394) if you are: (i) building a structural spatial equilibrium model with endogenous amenities and need the full equilibrium existence/uniqueness arguments (Supplemental Appendix A.4); (ii) running welfare counterfactuals for STR regulation in a city with heterogeneous amenity demand and need the CE calculation formulas (Supplemental Appendix A.5); (iii) implementing the ECCP estimator for dynamic location choice and need the finite-dependence / renewal-action derivation (Supplemental Appendix A.6); or (iv) using CBS microdata or ACD BBGA for Amsterdam and need the exact variable construction (Supplemental Appendix A.2). Tables I, III, IV, VI are the main empirical anchors; Figures 9, 10, 12 are the main counterfactual exhibits.

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(3) (May 2025). This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The CC BY-NC-ND 4.0 licence permits non-commercial use with attribution and no modifications; the verbatim PDF is not hosted here.

> **Attribution (CC BY-NC-ND 4.0).** Almagro, Milena, and Tomás Domínguez-Iino.
> "Location Sorting and Endogenous Amenities: Evidence From Amsterdam."
> *Econometrica* 93, no. 3 (May 2025): 1031-1071.
> DOI: 10.3982/ECTA21394. © 2025 The Authors.
> Licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
> This page is a distillation by the Institute for Automated Research: core results extracted and re-expressed. The licence prohibits modifications and commercial use; this extract is used for non-commercial research reference only.
