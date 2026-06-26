---
title: "Market Structure, Investment, and Technical Efficiencies in Mobile Telecommunications: Elliott et al. (2024)"
description: >-
  Distilled: A structural model of mobile telecommunications quantifies the trade-off between market power and scale efficiency from consolidation. Applied to the French market, consumer surplus is maximized at eight firms while total surplus peaks at four; all bilateral mergers among France's four operators decrease consumer surplus. Marginal social value of spectrum is approximately five times a firm's auction willingness to pay. Journal of Political Economy 2024, paywalled. Five core results with source locators, the full model, estimation method, and datasets used.
sidebar:
  label: Elliott et al. 2024
  order: 1
tags: [paper-summary, industrial-organization, telecommunications, antitrust, market-structure,
       structural, peer-reviewed, unreplicated, data:orange-mobile, data:osiris,
       data:ookla-speedtest, data:anfr, data:gsma-intelligence, data:insee-census]
paper:
  authors: Jonathan T. Elliott, Georges V. Houngbonon, Marc Ivaldi, Paul T. Scott
  authorList:
    - { family: Elliott, given: "Jonathan T.", affiliation: "Johns Hopkins University" }
    - { family: Houngbonon, given: "Georges V.", affiliation: "IFC-World Bank Group" }
    - { family: Ivaldi, given: Marc, orcid: "0000-0002-4244-7690", affiliation: "Toulouse School of Economics" }
    - { family: Scott, given: "Paul T.", orcid: "0000-0002-2348-4541", affiliation: "New York University" }
  year: 2024
  venue: "Journal of Political Economy 133(5), May 2025, pp. 1401-1459"
  venueShort: J. Pol. Econ. 2024
  doi: 10.1086/734132
  jel:
    codes: [D22, L13, L40]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Consumer Market Behavior and Pricing", "Digital Platforms and Economics", "ICT Impact and Policies"]
  dataAccess: proprietary-confidential
  outcome:
    - consumer surplus from mobile telecommunications (EUR/person/month)
    - total surplus from mobile telecommunications (EUR/person/month)
    - mobile service prices (EUR/month per plan)
    - download speeds (Mbps)
  outcomeClass: [social-welfare, firm-dynamics]
  license: "Paywalled; copyright 2025 The University of Chicago, all rights reserved. Published by The University of Chicago Press."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (UChicago Press; not machine-fetchable without institutional subscription; checked 2026-06-26)"
  redistribution: extract-only
  resultsCount: 5
  citedByCount: 12
  methods:
    role: both
    contributes: mobile-telecom-structural-model
    family: structural
    buildsFrom: [blp-demand, gmm]
    identification: structural
  contributionType: [new-method, new-fact]
  mechanisms: [market-power]
  scope:
    region: France
    assetClass: mobile telecommunications services
    period: 2015-10..2016-06
    frequency: monthly
    dataType: [market, accounting, administrative, other]
    granularity: [firm, aggregate]
    n: "589 French communes (population above 10,000); 4 MNOs; October 2015 base period; Ookla speed tests Q2 2016"
  findings:
    - { ref: R1, outcome: "download speeds (Mbps)", metric: level, value: "monotonically decreasing in number of firms; at 1 firm ~90 Mbps; at 6 firms near 0 Mbps (Figure 7, p. 40); economies of pooling dominate economies of density", direction: negative, vsBenchmark: "monopoly outperforms duopoly on delivered speed despite fewer antennas per user" }
    - { ref: R2, outcome: "consumer surplus and total surplus (EUR/person/month above monopoly)", metric: level, value: "consumer surplus peaks at 8 firms; total surplus peaks at 4 firms (Figure 9, p. 43)", direction: positive, vsBenchmark: "CS-maximizing structure requires 4 more firms than TS-maximizing structure" }
    - { ref: R3, outcome: "consumer surplus change from bilateral MNO merger (EUR/person/month)", metric: level, value: "all 6 pairwise mergers decrease CS; range -0.22 (Orange-Bouygues) to -1.24 (Orange-SFR) EUR/person/month (Figure 12, p. 49)", direction: negative, vsBenchmark: "spectrum pooling from merger insufficient to offset market-power loss" }
    - { ref: R4, outcome: "marginal social value vs. firm willingness-to-pay for spectrum (EUR/person/MHz)", metric: level, value: "marginal consumer surplus = 1.24 EUR/person/MHz; firm WTP = 0.25 EUR/person/MHz; ratio approx 5x (Figure 11, p. 46)", direction: positive, vsBenchmark: "firm auction bids understate social value of spectrum approximately 5-fold" }
    - { ref: R5, outcome: "consumer surplus loss from asymmetric vs. symmetric spectrum allocation (EUR/person)", metric: level, value: "3-firm symmetric CS = -0.668 EUR/person; 3-firm asymmetric CS = -0.701 EUR/person (both vs. 4-firm symmetric benchmark; Table 6, p. 44)", direction: negative, vsBenchmark: "symmetric allocation raises consumer surplus 0.033 EUR/person vs. asymmetric; asymmetric raises producer surplus at consumer expense" }
  resultType: new-finding
  relatesTo:
    - { cite: "Berry, Levinsohn and Pakes (1995)", doi: '10.2307/2171802', relation: builds-on, note: "BLP demand estimation framework extended to discrete-continuous choice with mixed plan-level and firm-level market shares" }
    - { cite: "Bourreau, Sun and Verboven (2021)", doi: '10.1257/aer.20190540', relation: builds-on, note: "calibrated Orange own-price elasticity (-2.36) from their Table A.4 and diversion ratio (0.036) from their Table A.3 to anchor demand on a single cross-section" }
    - { cite: "Spence (1975)", doi: '10.2307/3003237', relation: cites, note: "canonical monopoly quality model; the paper shows oligopoly quality choice has opposite comparative statics here because scale economies make fewer firms generate higher quality" }
    - { cite: "Williamson (1968)", relation: cites, note: "seminal antitrust welfare trade-off paper; the paper provides structural quantification of the price-efficiency trade-off Williamson posed theoretically" }
  openQuestions:
    - "Active network sharing (MNOs sharing infrastructure jointly) creates a trade-off between pooling efficiencies and investment incentives not captured in this model; the paper excludes active sharing present in France only from 2018 onward (p. 29)."
    - "A dynamic model of spectrum auctions with endogenous reallocation and forward-looking infrastructure investment is needed to convert the estimated social spectrum value into auction design prescriptions (p. 47, fn. 46)."
    - "Other sources of economies and diseconomies of scale (backhaul costs, managerial span of control) are omitted; their exclusion may bias scale-efficiency estimates in either direction (p. 30)."
  replicationCode:
    url: https://github.com/jonathantelliott/mobile-telecommunications
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (59 pages of main text plus appendices A-D); five core results extracted from counterfactual simulations (Figures 7, 9, 11, 12, Table 6). Not human-verified. Not reproduced. Replication code at https://github.com/jonathantelliott/mobile-telecommunications confirmed available. Prompt specifies year 2024; Crossref returns volume 133(5) published May 2025 (consistent with sibling paper 10.1086/734131 in same JPE issue; year 2024 is the online-first year per OpenAlex 2024-11-22)." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed R2 locator (Figure 9 is on p. 43, not p. 42) in both the core-results table and findings[]; corrected BSV relatesTo note to distinguish Table A.3 (diversion ratio) from Table A.4 (elasticity) per PDF fn. 29. All other magnitudes (Table 6, Figures 11 and 12 values) confirmed against the PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/734132", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; article is paywalled (UChicago Press). Crossref reports volume 133, issue 5, pages 1401-1459, published-print 2025-05-01. No open-access license." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model, and the estimation method are described here with key equations and source locators. To replicate or extend the analysis, read the full source at [doi.org/10.1086/734132](https://doi.org/10.1086/734132).

## TL;DR

Elliott, Houngbonon, Ivaldi, and Scott develop a structural model of competition among mobile network operators (MNOs) in which firms simultaneously choose prices and infrastructure investment. The novel supply-side feature is an engineering-based model of data transmission: download speeds depend on spectrum allocation (via Hata path loss and Shannon-Hartley channel capacity) and network congestion (via M/M/1 queuing). Fewer firms mean each firm serves a denser user base, reducing path loss, and pools more spectrum and customers in one queue, reducing congestion waste -- two scale efficiencies that offset the market-power cost. This tension is what Williamson (1968) posed theoretically for antitrust; the paper quantifies it in a calibrated equilibrium.

Estimating the demand system on French mobile data for October 2015 and simulating symmetric-firm counterfactuals, the paper finds that consumer surplus is maximized at eight firms while total surplus peaks at four. Monopoly delivers faster download speeds than a six-firm market, a reversal of intuition from models without scale economies that Spence (1975) and standard monopoly quality theory do not predict. All bilateral mergers among France's four MNOs decrease consumer surplus even accounting for spectrum-pooling efficiencies, because the market-power effect dominates when infrastructure is fixed.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Download speeds are monotonically decreasing in the number of firms; economies of pooling and density generate higher quality under concentration | Figure 7, p. 40 | At 1 firm delivered speeds reach ~90 Mbps; at 6 firms speeds collapse near 0 Mbps; channel capacity changes little across firm counts at the commune level |
| R2 | Consumer surplus is maximized at 8 firms; total surplus is maximized at 4 firms; the two peaks diverge because quality declines and producer surplus also falls with more firms | Figure 9, p. 43 | CS peaks around 29.5 EUR/person/month above monopoly; TS peaks around 14.1 EUR/person/month above monopoly at 4 firms; producer surplus declines monotonically in firm count |
| R3 | All 6 bilateral MNO mergers decrease consumer surplus in the short run when infrastructure is held fixed | Figure 12, p. 49 | Reductions range from -0.22 EUR/person/month (Orange-Bouygues) to -1.24 EUR/person/month (Orange-SFR); merger-specific spectrum pooling is insufficient to offset market-power effects |
| R4 | The marginal social value of spectrum is approximately five times a firm's auction willingness to pay at the four-firm equilibrium | Figure 11, p. 46 | Marginal consumer surplus from bandwidth = 1.24 EUR/person/MHz; firm marginal WTP = 0.25 EUR/person/MHz; the 2015 French 700 MHz auction price was ~0.70 EUR/person/MHz, between the two |
| R5 | Asymmetric spectrum allocations are inefficient: symmetric allocation raises both consumer and total surplus relative to asymmetric, though asymmetric raises producer surplus | Table 6, p. 44 | 3-firm symmetric CS = -0.668 EUR/person; 3-firm asymmetric CS = -0.701 EUR/person (both relative to 4-firm symmetric benchmark); asymmetric TS = -0.076, symmetric TS = -0.054 EUR/person |

**Overall finding.** Consolidation in mobile telecommunications presents a genuine trade-off between market power and scale efficiency. The welfare-maximizing market structure depends critically on the welfare criterion: antitrust policy targeting consumer surplus implies a more competitive market than policy targeting total surplus. All bilateral mergers among France's 2015 MNOs decrease consumer surplus, and the social return to spectrum is substantially above what firms reveal through auction bids.

## Theory and model

The paper builds a two-stage model: (i) a discrete-continuous consumer demand system and (ii) an engineering-based industry model of data transmission and firm competition.

**Demand.** Consumer $i$'s indirect utility for phone plan $j$ in municipality $m$, at chosen data consumption $x$, is (equation 1, p. 15):

$$u_{jm}(x;\, \vartheta_i,\varepsilon_{ij},\theta_{pi}) = w_j(x,Q_{f(j),m},\vartheta_i) + \theta_v v_j - \theta_{pi} P_j + \xi_{jm} + \varepsilon_{ij} \tag{1}$$

where $w_j(\cdot)$ is the utility of data consumption, $\theta_v$ is the voice-quality valuation, $\theta_{pi}$ is a price sensitivity parameter that decreases in household income, $\xi_{jm}$ is an unobserved product-market demand shock, and $\varepsilon_{ij}$ follows a nested logit structure (two nests: outside good vs. all mobile plans). The data consumption utility is (equation 2, p. 16):

$$w_j(x,Q,\vartheta_i) = \vartheta_i \log(1+x) - c_j(x,Q) \tag{2}$$

where $\vartheta_i \sim \mathrm{Exp}(\theta_{di})$ is the consumer's data valuation shock and $c_j(x,Q)$ is the time cost of downloading $x$ GB at speed $Q$. Below the data limit $\bar{d}_j$ the cost is linear in $x/Q$; above $\bar{d}_j$ the throttled speed $Q^L = 128$ Kbps applies (equation 3, p. 17). Optimal data consumption is pinned down by the first-order condition, which yields a closed-form for $x^*(P_j,Q,\vartheta_i,v_j)$.

**Download speed from engineering.** Channel capacity (maximum average speed absent congestion) is derived from hexagonal cell geometry and the Hata path loss model (equation 14, p. 26):

$$\bar{Q}_{fm}(R_{fm},B_{fm}) = \frac{B_{fm}\, A(R_{fm})}{\displaystyle\int_{\ell\in\mathcal{L}(R_{fm})} q_{m\ell}^{-1}\,d\ell} \tag{14}$$

where $R_{fm}$ is the cell radius (the firm's infrastructure choice), $B_{fm}$ is spectrum bandwidth, $A(R_{fm}) = \frac{3\sqrt{3}}{2}R_{fm}^2$ is the hexagonal cell area, and $q_{m\ell} = \gamma_m \log_2(1+SINR_\ell)$ is the location-specific data rate in bits per second per Hz via the Shannon-Hartley theorem. The signal-to-noise-and-interference ratio $SINR_\ell$ follows the Hata model with estimated path loss exponent 3.522.

Actual delivered speeds also depend on congestion. Following an M/M/1 queuing model (equation 17, p. 28):

$$Q_{fm} = \bar{Q}_{fm} - Q_{fm}^D \tag{17}$$

where $Q_{fm}^D$ is the Poisson arrival rate of download requests from consumers on operator $f$'s network in municipality $m$. This yields two sources of scale efficiency from consolidation: economies of density (fewer firms means each serves a denser population per cell, shortening the average distance and reducing path loss) and economies of pooling (combined spectrum and customer base in a single queue cuts queuing waste).

**Firm competition.** Each operator unilaterally and simultaneously sets a national price vector $\mathbf{P}_f$ and a vector of cell radii $\mathbf{R}_f$ (one per municipality) to maximize profits (equation 24, p. 34):

$$\Pi_f(\mathbf{P},\mathbf{R},\mathbf{B}) = \sum_m \Pi_{mf}(\mathbf{P},\mathbf{R}_m,\mathbf{B}_m) - \sum_m C_{fm}(R_{fm},B_{fm}) \tag{24}$$

with infrastructure cost proportional to both cell area covered and bandwidth operated per base station (equation 22, p. 33):

$$C_{fm}(R_{fm},B_{fm}) = c_{fm}^s\,\frac{A_m}{A(R_{fm})}\,B_{fm} \tag{22}$$

The Nash equilibrium prices $\mathbf{P}^*$ and cell radii $\mathbf{R}^*$ satisfy first-order conditions for both price and infrastructure simultaneously; the paper solves these jointly using numerical methods across 589 municipalities.

Counterfactual equilibria are computed on a single representative commune (population-weighted mean density 2,792 people/km$^2$) with $n$ symmetric firms each holding $B_0/n$ MHz of spectrum (Section 6.1, pp. 40-43). Merger counterfactuals add a second and third representative commune (to capture all population density categories) and combine the merging MNOs' bandwidth allocations while keeping infrastructure fixed in the short run (Section 6.3, pp. 47-49).

## Method

**Demand estimation.** The paper follows Berry, Levinsohn and Pakes (1995) extended to a discrete-continuous demand system. Market shares observed at two levels of aggregation (plan-level for Orange, firm-level for other MNOs) require a modified contraction mapping in which the inner loop solves for $\boldsymbol{\xi}(\theta)$ that simultaneously matches both data sources (Appendix B, equations B.1-B.4). The outer loop searches over demand parameters $\theta = (\theta_{pi},\theta_{di},\theta_c,\theta_v,\sigma)$ minimizing a two-stage efficient GMM objective.

Price variation in the October 2015 cross-section is insufficient to separately identify demand elasticities (prices were stable 2013-2015). The calibration approach from Bourreau, Sun and Verboven (2021) is used: the own-price elasticity of Orange (-2.36) and the diversion ratio to the outside good (0.036) are imposed as additional moment conditions (equations 11-12, p. 23), anchoring the demand system. The income heterogeneity parameter $\theta_{dz}$ is identified from the covariance of municipality median income with average data consumption. Download speed is instrumented by log population density to correct for measurement error and congestion endogeneity.

**Cost estimation.** Variable costs per user $c_j^u$ are recovered from the pricing first-order condition (equation 26, p. 35) evaluated at observed equilibrium prices and estimated demand. Infrastructure costs per base station per MHz $c_{fm}^s$ are recovered from the infrastructure first-order condition (equation 27, p. 35), obtained by numerically differentiating the marginal operating income with respect to cell radius $R_{fm}$ and equating it to the marginal cost implied by equation 22.

**Identification summary.** Demand parameters: identified by price variation across plans, consumption-income covariance (income heterogeneity), download speed variation across municipalities (speed coefficient), and calibrated elasticity and diversion moments. Supply cost parameters: identified from firms' optimal pricing and investment decisions, exploiting cross-municipality variation in population density and land area.

## Empirical specifications

**Demand GMM moments.** Nine moment conditions (p. 23): the price elasticity calibration (equation 11), the diversion ratio calibration (equation 12), mean data consumption across markets, the covariance of Orange demand shocks with median income, the covariance of Orange demand shocks with log population density, the demand-shock covariance with data limit indicators, the demand-shock covariance with voice plan indicator, and two cross-plan mean-consumption moments.

**Sample.** Cross-section of 589 French communes with population above 10,000 (covering 43.5% of France's total population). Data period: October 2015 for customer shares and consumption; Q2 2016 for Ookla speed measurements. The commune is the unit of observation for the demand estimation; the representative commune is the unit for counterfactual simulations.

**Counterfactual design.** Symmetric counterfactuals: $n \in \{1, 2, 3, 4, 5, 6, 7, 8\}$ firms each with $B_0/n$ MHz. Asymmetric counterfactual (3 firms): replicates 2011 French spectrum allocation (ANFR frequencies). Merger counterfactuals: 6 pairs from France's 4 MNOs (Orange, SFR, Bouygues, Free); three representative communes weighted by France's population distribution within each density class.

## Datasets used

| Dataset | Role | Access | Wiki page |
|---|---|---|---|
| Orange Mobile customer database (proprietary) | Plan-level market shares and average data consumption per municipality, October 2015 | proprietary-confidential | No page yet |
| Ookla Speedtest data (proprietary) | Over 1 million measured download speeds per operator per municipality, France Q2 2016 | proprietary-confidential | No page yet |
| ANFR base station database | Locations of all mobile antennas and frequencies per operator per municipality | public | No page yet |
| GSMA Intelligence | National-level market shares for SFR, Bouygues Telecom, Free Mobile | licensed-commercial | No page yet |
| INSEE 2011 population census | Income deciles per municipality; municipality land area | public | No page yet |
| OSIRIS (Orange internal traffic data) | Total data traffic per network cell, used to calibrate Poisson demand arrival rates for the queuing model | proprietary-confidential | No page yet |

The most restrictive source (Orange subscriber database, OSIRIS, Ookla) makes this a `proprietary-confidential` paper that cannot be replicated without access to those proprietary datasets. The estimation code at https://github.com/jonathantelliott/mobile-telecommunications is fully available.

## When to read the full paper

Use the [original](https://doi.org/10.1086/734132) if you are: building a structural model of network infrastructure competition; quantifying welfare trade-offs in mobile market consolidation or spectrum auction design; studying how engineering-based scale economies interact with product market competition; or applying a discrete-continuous demand system to a market with heterogeneous quality. The online Internet Appendix contains technical derivations of the Hata path loss formula, the modified BLP contraction mapping, the network-sharing deviation from equilibrium, and robustness checks for alternative cost specifications.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(5), May 2025, pp. 1401-1459. Paywalled; no open-access license found in Crossref metadata. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. Only the content of this page may be used; the underlying article requires a library subscription or individual purchase.

> Elliott, Jonathan T., Georges V. Houngbonon, Marc Ivaldi, and Paul T. Scott. "Market Structure, Investment, and Technical Efficiencies in Mobile Telecommunications." *Journal of Political Economy* 133, no. 5 (May 2025): 1401-1459. https://doi.org/10.1086/734132.
