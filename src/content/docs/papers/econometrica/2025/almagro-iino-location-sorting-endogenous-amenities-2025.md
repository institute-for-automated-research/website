---
title: "Location Sorting and Endogenous Amenities: Almagro & Dominguez-Iino (2025)"
description: >-
  Distilled: A dynamic spatial equilibrium model of Amsterdam shows that heterogeneous
  household preferences over endogenous consumption amenities increase residential
  sorting across neighborhoods but reduce welfare inequality, while short-term rental
  entry raises rents for all but redistributes welfare gains and losses across household
  types through the amenity channel. Econometrica 2025, CC BY-NC-ND 4.0. Five core
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
  outcomeClass: [asset-prices, household-finance, social-welfare]
  license: >-
    CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version unspecified,
    URL https://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days 0,
    start 2025-01-01; corroborated by artifact p.1031 Creative Commons
    Attribution-NonCommercial-NoDerivs notice)
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: open-access CC BY-NC-ND (Wiley/Econometric Society site, 2026-06-26)
  redistribution: extract-only (CC BY-NC-ND prohibits modifications and commercial use; PDF not hosted)
  resultsCount: 5
  citedByCount: 22
  methods:
    role: both
    contributes: dynamic-sorting-endogenous-amenities
    family: structural
    buildsFrom: [gmm, instrumental-variables, panel-regression, k-means-clustering, logit-regression]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [participation-frictions, love-for-variety-externality]
  scope:
    region: Amsterdam, Netherlands
    period: 2008..2018
    frequency: annual
    dataType: [administrative, other]
    granularity: [individual, firm, aggregate]
    n: "Universe of residents of the Netherlands 2008-2018; 95 neighborhoods (wijk), 22 districts (gebieden) in Amsterdam; 233,772 renewal-path observations for ECCP estimation"
  findings:
    - { ref: R1, outcome: neighborhood rental prices, metric: coefficient, value: "IV (controls + district-year FE): 0.205 (SE 0.093); OLS: 0.109 (SE 0.018); first-stage F = 69.66", direction: positive, vsBenchmark: "OLS downward-biased vs IV (0.109 vs 0.205), consistent with positive unobservable correlation" }
    - { ref: R2, outcome: neighborhood house sale prices, metric: coefficient, value: "IV (controls + district-year FE): 0.326 (SE 0.102); OLS: 0.037 (SE 0.022); first-stage F = 65.9", direction: positive, vsBenchmark: "OLS severely downward-biased vs IV (0.037 vs 0.326)" }
    - { ref: R3, outcome: consumption amenity supply by sector, metric: pp-effect, value: "10% more tourists: +2.3% touristic amenities, +0.5% restaurants, +2.3% bars, +0.9% food stores, +2.9% non-food stores, 0% nurseries", direction: positive, vsBenchmark: "Nursery supply unresponsive to tourist inflows; maximally responsive to household-with-children types" }
    - { ref: R4, outcome: residential sorting and welfare inequality, metric: level, value: "Entropy index (sorting): ~0.8 under heterogeneous preferences vs ~0.4 under homogeneous; welfare gap (highest/lowest CS): ~1 vs ~10", direction: mixed, vsBenchmark: "More sorting but less welfare inequality under heterogeneous preferences (Figure 9)" }
    - { ref: R5, outcome: welfare inequality across household types, metric: pp-effect, value: "CE gains from STR entry (endogenous amenities): Older Families -4% of income; Singles +1-2%; Younger Families +1-2%; under exogenous amenities all groups lose 1-2%", direction: mixed, vsBenchmark: "Amenity channel reverses distributional incidence for the highest-income (Older Families) group (Figure 10)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Guerrieri, Hartley, and Hurst (2013)", relation: builds-on, note: "endogenous gentrification and housing price dynamics: foundational reference for amenity-driven sorting" }
    - { cite: "Diamond (2016)", relation: builds-on, note: "location sorting and endogenous amenities across cities: closest structural antecedent" }
    - { cite: "Barron, Kung, and Proserpio (2021)", relation: extends, note: "STR effect on rents and housing markets: paper provides structural decomposition beyond their reduced-form IV" }
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
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ECTA21394", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=unspecified, URL=https://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days=0, start=2025-01-01" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural equilibrium model (endogenous amenities + dynamic location choice), and the estimation equations: enough to understand what was found and how, without reading all 41 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.3982/ECTA21394).

## TL;DR

The paper builds and estimates a dynamic spatial equilibrium model of Amsterdam in which heterogeneous households make forward-looking residential choices and firms endogenously supply consumption amenities (restaurants, bars, nurseries, touristic venues, food and non-food stores) in response to the neighborhood's demographic composition. Using restricted Dutch administrative microdata (CBS) linked to neighborhood amenity counts (ACD BBGA) and short-term rental listings (Inside Airbnb), and exploiting tourist inflows as a demand shifter via a shift-share instrument, the paper shows: (1) short-term rental (STR) penetration raises rents 0.09-0.21% per 1% growth in listings (IV); (2) tourist presence increases touristic amenities and restaurants but leaves nurseries unchanged; (3) preference heterogeneity across household types increases residential sorting but reduces welfare inequality relative to the homogeneous-preference benchmark, because neighborhoods become horizontally differentiated; and (4) STR entry produces winner-loser welfare splits by household type once amenity adjustment is allowed: the highest-income group (Older Families) loses 4% of income while lower-income Singles and Younger Families gain 1-2%. The paper extends prior work by Guerrieri, Hartley, and Hurst (2013) and Diamond (2016) by microfounding how different amenity types respond to demographic heterogeneity.

## Core results

Magnitudes and significance are as reported; `\*` = 5%, `\*\*` = 1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **STR penetration raises neighborhood rents** (IV); OLS is downward-biased, consistent with tourist-attractive areas becoming locally less attractive to residents | Table I, p.1038 | IV (full controls + district-year FE): coeff = 0.205 (SE 0.093), F = 69.66; OLS = 0.109 (SE 0.018); range across specs: 0.091-0.205 |
| R2 | **STR penetration raises house sale prices** (IV); OLS severely underestimates the price effect | Table I, p.1038 | IV (full controls + district-year FE): coeff = 0.326 (SE 0.102), F = 65.9; OLS = 0.037 (SE 0.022); range: 0.149-0.326 |
| R3 | **Tourist presence drives supply of touristic amenities but not nurseries**; supply responses are sectorally differentiated by the demographic type driving demand | Table III, p.1054; text p.1053 | 10% more tourists: +2.3% touristic amenities, +0.5% restaurants, +2.3% bars, +0.9% food stores, +2.9% non-food stores, 0% nurseries |
| R4 | **Heterogeneous preferences increase residential sorting but reduce welfare inequality** relative to the homogeneous benchmark; horizontal neighborhood differentiation is the mechanism | Figure 9, p.1064; Table VII, p.1065 | Entropy index: 0.8 (heterogeneous) vs 0.4 (homogeneous); welfare gap (max/min consumer surplus): ~1 vs ~10; Gini indices rise for 5 of 6 amenity sectors under heterogeneous preferences |
| R5 | **STR entry produces welfare gains for younger/lower-income households and losses for older/higher-income households** once amenity endogeneity is accounted for; direction reverses vs the exogenous-amenity benchmark | Figure 10, p.1066 | Older Families: -4% income CE loss; Singles: +1-2% CE gain; Younger Families: +1-2% CE gain; under exogenous amenities all lose 1-2% (dark bars in Figure 10) |

**Overall (paper's conclusion).** Two-way heterogeneity, in household preferences and in amenity supply responses, determines both the degree of horizontal differentiation across neighborhoods and the distributional incidence of urban policies. Low-income households may gain rather than lose from STR entry if the amenities tourists bring align with their preferences, reversing naive predictions based on rent effects alone. The amenity channel matters for incidence qualitatively, not just quantitatively.

## Theory / model

The model has three blocks: endogenous amenity determination, housing supply, and household/tourist location demand. There are $$J+1$$ locations ($$J$$ inside the city plus an outside option) and $$K+1$$ household types ($$K$$ local types and a tourist type $$T$$). The population composition of location $$j$$ at time $$t$$ (equation 1, p.1042) is:

$$
M_{jt} \equiv [M^1_{jt}, \ldots, M^K_{jt}, M^T_{jt}]', \tag{1}
$$

and the amenity vector (equation 2, p.1042) is:

$$
a_{jt} \equiv [N_{1jt}, \ldots, N_{Sjt}]', \tag{2}
$$

where $$N_{sjt}$$ is the number of varieties in amenity sector $$s$$ at location $$j$$.

**Endogenous amenities.** Households have Cobb-Douglas preferences over housing and a composite amenity good, with $$\phi^k$$ the expenditure share on amenities for type $$k$$. Within each amenity sector, firms supply differentiated varieties under CES preferences (substitution elasticity $$\sigma_s > 1$$). Individual demand for variety $$i$$ in sector $$s$$ at location $$j$$ (equation 3, p.1042) is:

$$
q^k_{isjt} = \frac{\alpha^k_s \phi^k w^k_t}{p_{isjt}} \left(\frac{p_{isjt}}{P_{sjt}}\right)^{1-\sigma_s}, \tag{3}
$$

where $$\alpha^k_s$$ is type $$k$$'s sectoral budget share and $$P_{sjt}$$ is the sector-location price index. Firms engage in monopolistic competition with free entry, equating variable profits to a fixed cost $$F_{sjt}(N_{jt})$$ increasing in total firm count $$N_{jt}$$. The zero-profit condition yields equilibrium varieties (equation 7, p.1043):

$$
N_{sjt} = \frac{1}{\sigma_s F_{sjt}} \sum_k \alpha^k_s \phi^k w^k_t M^k_{jt}. \tag{7}
$$

This delivers a mapping $$a_{jt} = \mathcal{A}(M_{jt})$$ (equation 8, p.1043): equilibrium amenities are a function of population composition alone, encoding the preference-externality mechanism.

**Housing supply.** Absentee landlords choose between the long-term (LT) rental market (income $$r_{jt}$$ per floor-space unit) and the short-term (ST) market (income $$p_{jt}$$) subject to an operating cost wedge $$\kappa_{jt}$$. Under Type I EV shocks, long-term supply (equation 9, p.1044) and short-term supply (equation 10) are:

$$
\mathcal{H}^{LT,S}_{jt}(r_{jt}, p_{jt}) = \frac{\exp(\alpha r_{jt})}{\exp(\alpha r_{jt}) + \exp(\alpha p_{jt} - \kappa_{jt})} \mathcal{H}_{jt}, \tag{9}
$$

$$
\mathcal{H}^{ST,S}_{jt}(r_{jt}, p_{jt}) = \mathcal{H}_{jt} - \mathcal{H}^{LT,S}_{jt}(r_{jt}, p_{jt}). \tag{10}
$$

**Local household location choice.** At each period $$t$$, household $$i$$ of type $$k$$ chooses location $$j_{it}$$ to maximize discounted expected utility. The flow utility inside the city (p.1044-1045) is:

$$
u^k_t(j, x_{it}) = \bar{u}^k_t(j) + \delta^k_\tau \log \tau_{it} - MC^k(j_{it}, j_{it-1}), \tag{11}
$$

where $$\tau_{it}$$ is location tenure, $$MC^k$$ is a moving cost that combines a bilateral distance-adjusted component and a fixed component, and $$\bar{u}^k_t(j)$$ collects aggregate state-dependent payoffs. Under Type I EV preference shocks, location choice probabilities (equation 12, p.1045) are:

$$
\mathbb{P}^k_t(j|x_{it}) = \frac{\exp\!\left(u^k_t(j,x_{it}) + \beta \mathbb{E}_t[V^k_{t+1}(x_{it+1},\varepsilon_{it+1})|j,x_{it},\varepsilon_{it}]\right)}{\sum_{j'} \exp\!\left(u^k_t(j',x_{it}) + \beta \mathbb{E}_t[V^k_{t+1}(x_{it+1},\varepsilon_{it+1})|j',x_{it},\varepsilon_{it}]\right)}. \tag{12}
$$

**Stationary equilibrium.** A stationary equilibrium (Definition, p.1048) is a vector of long-term rental prices $$\mathbf{r}$$, short-term rental prices $$\mathbf{p}$$, amenities $$\mathbf{a}$$, and stationary population distributions $$\pi^k(\mathbf{r}, \mathbf{a})$$ for each type $$k$$, such that the long-term and short-term rental markets clear for every location and $$a_j = \mathcal{A}(M_j)$$ for every $$j$$. Population and amenities are thus jointly determined in equilibrium.

## Method

Estimation proceeds in three independent blocks.

**Amenity supply (GMM).** Taking logs of equation (7) and parameterizing the fixed cost as $$F_{sjt}(N_{jt}) = \Lambda_j \Lambda_t R(N_{jt}) \Omega_{sjt}$$ with $$R(N_{jt}) = N^\eta_{jt}$$, the estimating equation (equation 24, p.1051) is:

$$
\log N_{sjt} = \lambda_j + \lambda_t - \eta \log N_{jt} + \log\!\left(\sum_k \beta^k_s X^k_{jt}\right) + \omega_{sjt}, \tag{24}
$$

where $$X^k_{jt} \equiv \phi^k w^k_t M^k_{jt}$$ is total amenity expenditure by type $$k$$ in location $$j$$, $$\beta^k_s \equiv \alpha^k_s / \sigma^s$$ captures how type $$k$$'s expenditure converts to amenity supply in sector $$s$$, and $$\omega_{sjt}$$ is an unobservable supply shock. The key endogeneity concern is that $$\omega_{sjt}$$ shifts firm costs and thus residential composition $$M^k_{jt}$$ simultaneously. The instrument is $$Z^k_{jt} = w^k_t S^{\gamma(k)}_{jt}$$, the interaction of type $$k$$'s wages with the housing stock of its modal tenancy status $$\gamma(k)$$, exploiting the idea that neighborhoods composed primarily of social housing attract households qualifying for social housing assistance. GMM is implemented on a three-way panel of 22 districts for 2008-2018. The housing supply inverse elasticity $$\eta = 1.52$$ is calibrated from Saiz (2010).

**Housing demand from locals (ECCP).** The method builds on `eccp-estimator` (Aguirregabiria and Mira (2010), Scott (2013), Kalouptsidi, Scott, and Souza-Rodrigues (2021b)). The parametric flow utility (equation 27, p.1056) for type $$k$$ in location $$j \neq 0$$ is:

$$
\bar{u}^k_t(j) = \delta^k_j + \delta^k_t + \delta^k_r \log r_{jt} + \delta^k_a \log a_{jt} + \delta^k_b \log b_{jt} + \xi^k_{jt}, \tag{27}
$$

where $$\delta^k_a = [\delta^k_1, \ldots, \delta^k_s, \ldots, \delta^k_S]$$ is the vector of amenity preference parameters (one per sector). Exploiting renewal actions (household pairs who at $$t+1$$ choose the same new location $$\tilde{j}$$, so their continuation values cancel), the estimating equation (equation 29, p.1057) is:

$$
Y^k_{t,j,\tilde{j},x_{it}} = \delta^k_j + \delta^k_t + \delta^k_r \log r_{jt} + \delta^k_a \log a_{jt} + \delta^k_b \log b_{jt} + \delta^k_\tau \Delta\tau_{it} - \Delta MC^k_{it} + \tilde{\xi}^k_{t,j,\tilde{j},x_{it}}, \tag{29}
$$

where $$Y^k$$ is the log ratio of path likelihoods for the two paths diverging from state $$x_t$$ and converging at $$\tilde{j}$$ in period $$t+1$$, and $$\Delta\tau_{it}$$ is the change in location capital (tenure). The left-hand side is formed from conditional choice probabilities estimated via multinomial logit. Seven instruments are used to address endogeneity of rents and amenities: three post-2011 rental-market policy dummies (social-housing reclassification 2011, rent deregulation 2015, STR regulation 2017) interacted with lagged tenancy stock, plus removal of housing units inside and outside the precinct. First-stage F-stat = 169.8.

**Housing supply.** From equation (9)-(10), the log ratio of long- to short-term supply shares gives (p.1061):

$$
\log \mathcal{H}^{LT,S}_{jt} - \log \mathcal{H}^{ST,S}_{jt} = \alpha(r_{jt} - p_{jt}) + \kappa_j + \kappa_t + \nu_{jt}.
$$

The instrument for the relative price $$r_{jt} - p_{jt}$$ is predicted tourist demand from a shift-share following Barron, Kung, and Proserpio (2021): the "shift" is Airbnb worldwide search volume; the "share" is neighborhood-level exposure from the historic spatial distribution of touristic attractions. IV estimate (two-way FE preferred spec): $$\hat{\alpha} = 0.385$$ (Table VI, p.1062), implying a 1 SD increase in the STR-LT price gap (29%) raises the short-term market share by 13.6%.

**Household type classification.** Six types are identified using `k-means-clustering` on income, skill, household composition, and ethnicity from CBS tax returns (Table II, p.1050): Older Families, Singles, Younger Families (market-determined types used in structural estimation) and Students, Immigrant Families, Dutch Low Income (treated as exogenous allocation in social-housing/university assignment). Discount factor $$\beta = 0.85$.

## Empirical specifications

**Reduced-form STR rent effects (R1, R2).** The estimating equation for Table I (p.1038) is:

$$
\ln Y_{jt} = \beta \ln(\text{Commercial Airbnb listings}_{jt}) + \gamma X_{jt} + \mu_{dt} + \varepsilon_{jt},
$$

where $$Y_{jt}$$ is either rent/m² or house sale price, $$X_{jt}$$ includes housing stock, average income, and high-skill population share, and $$\mu_{dt}$$ are district-year fixed effects. Standard errors are clustered at the wijk (neighborhood) level. The shift-share IV for Airbnb listings uses worldwide Airbnb search volume as the shift and the spatial density of historic monuments as the neighborhood share. First-stage F-stats exceed 65 in all IV specifications.

**Amenity supply estimation (R3).** GMM on equation (24) for 6 amenity sectors simultaneously, using the district-level panel 2008-2018. Parameter $$\beta^k_s$$ captures how a 1% increase in type $$k$$'s expenditure on location $$j$$ changes the number of sector-$$s$$ firms. The economic magnitude is translated to tourist effects in the text (p.1053): a 10% increase in city-wide tourists shifts amenity composition toward touristic and retail amenities and away from nurseries.

**Preference heterogeneity and sorting/inequality counterfactual (R4).** Two equilibria are compared: the baseline with heterogeneous amenity preferences (from Table IV estimates) against a homogeneous-preference counterfactual in which $$\delta^k_a$$ is replaced by its population-weighted average. Sorting is measured by an entropy index (Figure 9, p.1064); welfare inequality is the ratio of the highest to lowest consumer surplus in euros across household types.

**STR welfare decomposition (R5).** Three equilibria are compared step by step: (i) pre-STR equilibrium $$(\mathbf{r}_0, \mathbf{a}_0)$$; (ii) post-STR with exogenous amenities $$(\mathbf{r}_1, \mathbf{a}_0)$$; (iii) post-STR with endogenous amenities $$(\mathbf{r}_1, \mathbf{a}_1)$$. Welfare is measured in consumption equivalent (CE) terms: how much extra income a household in the pre-STR equilibrium must receive to be as well off as in the counterfactual. Positive CE values indicate welfare gains. Homeowners receive back landlord income from rent increases; renters do not (Supplemental Appendix A.5, p.1065).

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
