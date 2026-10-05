---
title: "Market Structure, Investment, and Technical Efficiencies in Mobile Telecommunications: Elliott et al. (2024)"
description: >-
  Distilled: A structural model of mobile telecommunications quantifies the trade-off between market power and scale efficiency from consolidation. Applied to the French market, consumer surplus is maximized at eight firms while total surplus peaks at four; all bilateral mergers among France's four operators decrease consumer surplus. Marginal social value of spectrum is approximately five times a firm's auction willingness to pay. Journal of Political Economy 2024, paywalled. Twelve core results with source locators, the full model, estimation method, and datasets used.
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
    - consumer surplus and total surplus (EUR/person/month above monopoly)
    - total surplus from mobile telecommunications (EUR/person/month)
    - mobile service prices (EUR/month per plan)
    - download speeds (Mbps)
    - consumer surplus change from bilateral MNO merger (EUR/person/month)
    - marginal social value vs. firm willingness-to-pay for spectrum (EUR/person/MHz)
    - consumer surplus loss from asymmetric vs. symmetric spectrum allocation (EUR/person)
    - mobile network infrastructure investment (base stations per firm)
    - mobile plan willingness to pay and demand parameters
    - estimated mobile service costs (EUR per user and base station)
    - average mobile data consumption (MB by plan and market)
    - mobile service price elasticity
    - consumer surplus by income percentile (EUR/person)
  outcomeClass: [social-welfare, firm-dynamics]
  license: "Paywalled; copyright 2025 The University of Chicago, all rights reserved. Published by The University of Chicago Press."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (UChicago Press; not machine-fetchable without institutional subscription; checked 2026-06-26)"
  redistribution: extract-only
  resultsCount: 12
  citedByCount: 12
  methods:
    role: both
    contributes: mobile-telecom-structural-model
    family: structural
    buildsFrom: [blp-demand, gmm]
    identification: structural
  contributionType: [new-method, new-fact]
  mechanisms: [market-power, network-scale-economies]
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
    - { ref: R5, outcome: "consumer surplus loss from asymmetric vs. symmetric spectrum allocation (EUR/person)", metric: level, value: "3-firm symmetric CS = -0.668 EUR/person; 3-firm asymmetric CS = -0.701 EUR/person (both vs. 4-firm symmetric benchmark; Table 6, PDF p. 46)", direction: negative, vsBenchmark: "symmetric allocation raises consumer surplus 0.032 EUR/person vs. asymmetric; asymmetric raises producer surplus at consumer expense" }
    - { ref: R6, outcome: "mobile service prices (EUR/month per plan)", metric: level, value: "Figure 7 shows equilibrium prices for both the 1,000 MB and 10,000 MB plans declining as the number of firms rises from one to six; prices remain above per-user marginal costs of EUR 8.18 and EUR 20.53, respectively (text pp. 41-42)", direction: negative, vsBenchmark: "more firms intensify price competition, while congestion-related quality feedback dampens price reductions" }
    - { ref: R7, outcome: "mobile network infrastructure investment (base stations per firm)", metric: level, value: "investment is non-monotonic in firm count: stations per firm rise from monopoly to duopoly, then fall with each additional firm (Figure 7, p. 40; text p. 42)", direction: mixed, vsBenchmark: "monopoly-to-duopoly expansion is followed by lower investment per firm beyond two firms" }
    - { ref: R8, outcome: "mobile plan willingness to pay and demand parameters", metric: level, value: "Table 4 reports price heterogeneity θ̂pz = -0.727 (0.221), data-value heterogeneity θ̂dz = 0.335 (0.039), θ̂v = 0.460 (0.180); 1 GB to 4 GB willingness to pay rises EUR 2.73 to 4.77 from the 10th to 90th income percentile; unlimited voice rises EUR 3.81 to 20.19; 10 to 20 Mbps rises EUR 1.90 to 4.68 (Table 4, PDF p. 38)", direction: positive, vsBenchmark: "higher-income consumers have higher willingness to pay for plan features" }
    - { ref: R9, outcome: "estimated mobile service costs (EUR per user and base station)", metric: level, value: "per-user costs average EUR 4.95 (0.65) for plans below 1,000 MB, EUR 10.33 (0.66) for 1,000-5,000 MB, EUR 20.53 (2.02) for at least 5,000 MB; 75 MHz base-station costs range from EUR 140,556 (40,035) for SFR to EUR 201,733 (67,896) for Bouygues (Table 5, PDF p. 39)", direction: positive, vsBenchmark: "larger data-limit plans have higher estimated user cost; operator station costs vary" }
    - { ref: R10, outcome: "average mobile data consumption (MB by plan and market)", metric: level, value: "predicted consumption tracks actual market-level average consumption across Orange 1,000, 4,000, and 8,000 MB plans (Figure 6, p. 36)", direction: positive, vsBenchmark: "the model reproduces plan-category usage patterns without category-specific fit parameters" }
    - { ref: R11, outcome: "mobile service price elasticity", metric: elasticity, value: "full price elasticities decline less with firm count than partial elasticities for both 1,000 MB and 10,000 MB plans; Figure 8 plots the differences over one to six firms (Figure 8, p. 41; text pp. 41-42)", direction: mixed, vsBenchmark: "accounting for endogenous download speeds attenuates the fall in elasticities as firm count increases" }
    - { ref: R12, outcome: "consumer surplus by income percentile (EUR/person)", metric: level, value: "the consumer-surplus-maximizing market has five firms for the 90th income percentile, while consumer surplus increases through eight or nine firms for most consumers (Figure 10, p. 43; text p. 42)", direction: mixed, vsBenchmark: "the aggregate eight-firm optimum masks a five-firm optimum for high-income consumers" }
  resultType: new-finding
  relatesTo:
    - { cite: "Berry, Levinsohn and Pakes (1995)", doi: '10.2307/2171802', relation: builds-on, note: "BLP demand estimation framework extended to discrete-continuous choice with mixed plan-level and firm-level market shares" }
    - { cite: "Bourreau, Sun and Verboven (2021)", doi: '10.1257/aer.20190540', relation: builds-on, note: "calibrated Orange own-price elasticity (-2.36) from their Table A.4 and diversion ratio (0.036) from their Table A.3 to anchor demand on a single cross-section" }
    - { cite: "Spence (1975)", doi: '10.2307/3003237', relation: cites, note: "canonical model of quality as a directly controlled product characteristic; this paper instead derives service quality from network engineering, investment, and congestion" }
    - { cite: "Williamson (1968)", relation: cites, note: "seminal antitrust welfare trade-off paper; the paper provides structural quantification of the price-efficiency trade-off Williamson posed theoretically" }
  openQuestions:
    - "Active network sharing can achieve pooling efficiencies without a merger but may weaken quality differentiation and investment incentives; the paper omits it, noting little such sharing during its study period apart from Free's 2G/3G use of Orange's network (pp. 29, 65)."
    - "The paper takes spectrum allocation as exogenous and does not model the auction mechanism; it also leaves dynamic adjustment of networks, plan offerings, and bandwidth holdings after mergers for future work (pp. 38, 47, fn. 46)."
    - "Other sources of economies and diseconomies of scale (backhaul costs, managerial span of control) are omitted; their exclusion may bias scale-efficiency estimates in either direction (p. 30)."
  replicationCode:
    url: https://github.com/jonathantelliott/mobile-telecommunications
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (59 pages of main text plus appendices A-D); five core results extracted from counterfactual simulations (Figures 7, 9, 11, 12, Table 6). Not human-verified. Not reproduced. Replication code at https://github.com/jonathantelliott/mobile-telecommunications confirmed available. Prompt specifies year 2024; Crossref returns volume 133(5) published May 2025 (consistent with sibling paper 10.1086/734131 in same JPE issue; year 2024 is the online-first year per OpenAlex 2024-11-22)." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed R2 locator (Figure 9 is on p. 43, not p. 42) in both the core-results table and findings[]; corrected BSV relatesTo note to distinguish Table A.3 (diversion ratio) from Table A.4 (elasticity) per PDF fn. 29. All other magnitudes (Table 6, Figures 11 and 12 values) confirmed against the PDF." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read all 75 PDF pages; appended seven quantitative findings and added the paper's numbered main-text equations (1)-(31), model, and estimating specifications. Additions are not yet human-verified and were not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, magnitudes, equations, specifications, classification, findings, frontmatter, and prose re-checked against the PDF; corrected three table PDF page locators, Table 6 surplus difference, network-sharing and dynamic-work claims, and added a missing cited-work mention. No unresolved headline omissions." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/734132", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; article is paywalled (UChicago Press). Crossref reports volume 133, issue 5, pages 1401-1459, published-print 2025-05-01. No open-access license." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model, and the estimation method are described here with key equations and source locators. To replicate or extend the analysis, read the full source at [doi.org/10.1086/734132](https://doi.org/10.1086/734132).

## TL;DR

Elliott, Houngbonon, Ivaldi, and Scott develop a structural model of competition among mobile network operators (MNOs) in which firms simultaneously choose prices and infrastructure investment. The supply-side model derives data transmission from engineering: download speeds depend on spectrum allocation (via Hata path loss and Shannon-Hartley channel capacity) and network congestion (via M/M/1 queuing). Unlike the directly chosen quality in Spence (1975), quality here emerges from spectrum, cell density, and congestion. Fewer firms mean each firm serves a denser user base, reducing path loss, and pools more spectrum and customers in one queue, reducing congestion waste. These scale efficiencies offset some of the market-power cost. This is the trade-off Williamson (1968) posed theoretically for antitrust; the paper quantifies it in a calibrated equilibrium.

Estimating the demand system on French mobile data for October 2015 and simulating symmetric-firm counterfactuals, the paper finds that consumer surplus is maximized at eight firms while total surplus peaks at four. Monopoly delivers faster download speeds than a six-firm market. The simulations attribute the quality advantage of concentration mainly to economies of pooling; density economies are small at typical cell sizes. All bilateral mergers among France's four MNOs decrease consumer surplus even accounting for spectrum-pooling efficiencies, because the market-power effect dominates when infrastructure is fixed.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Download speeds are monotonically decreasing in the number of firms; economies of pooling and density generate higher quality under concentration | Figure 7, p. 40 | At 1 firm delivered speeds reach ~90 Mbps; at 6 firms speeds collapse near 0 Mbps; channel capacity changes little across firm counts at the commune level |
| R2 | Consumer surplus is maximized at 8 firms; total surplus is maximized at 4 firms; the two peaks diverge because quality declines and producer surplus also falls with more firms | Figure 9, p. 43 | CS peaks around 29.5 EUR/person/month above monopoly; TS peaks around 14.1 EUR/person/month above monopoly at 4 firms; producer surplus declines monotonically in firm count |
| R3 | All 6 bilateral MNO mergers decrease consumer surplus in the short run when infrastructure is held fixed | Figure 12, p. 49 | Reductions range from -0.22 EUR/person/month (Orange-Bouygues) to -1.24 EUR/person/month (Orange-SFR); merger-specific spectrum pooling is insufficient to offset market-power effects |
| R4 | The marginal social value of spectrum is approximately five times a firm's auction willingness to pay at the four-firm equilibrium | Figure 11, p. 46 | Marginal consumer surplus from bandwidth = 1.24 EUR/person/MHz; firm marginal WTP = 0.25 EUR/person/MHz; the 2015 French 700 MHz auction price was ~0.70 EUR/person/MHz, between the two |
| R5 | Asymmetric spectrum allocations are inefficient: symmetric allocation raises both consumer and total surplus relative to asymmetric, though asymmetric raises producer surplus | Table 6, PDF p. 46 | 3-firm symmetric CS = -0.668 EUR/person; 3-firm asymmetric CS = -0.701 EUR/person (both relative to 4-firm symmetric benchmark); asymmetric TS = -0.076, symmetric TS = -0.054 EUR/person; table's symmetric-minus-asymmetric CS difference is 0.032 EUR/person |
| R6 | Equilibrium prices decline as the number of firms increases for both representative plans | Figure 7, p. 40; text pp. 41-42 | Prices remain above per-user marginal costs of EUR 8.18 for the low-data plan and EUR 20.53 for the high-data plan |
| R7 | Infrastructure investment per firm is non-monotonic in firm count | Figure 7, p. 40; text p. 42 | Stations per firm rise from monopoly to duopoly, then fall with each additional firm |
| R8 | Estimated demand parameters imply higher willingness to pay for plan features among higher-income consumers | Table 4, PDF p. 38 | θ̂pz = -0.727 (0.221); θ̂dz = 0.335 (0.039); willingness to pay for 1 GB to 4 GB rises EUR 2.73 to 4.77 from the 10th to 90th percentile; unlimited voice EUR 3.81 to 20.19; 10 to 20 Mbps EUR 1.90 to 4.68 |
| R9 | Estimated costs rise with plan data limits and vary across operators for base stations | Table 5, PDF p. 39 | Per-user costs are EUR 4.95 (0.65), EUR 10.33 (0.66), and EUR 20.53 (2.02) across increasing data-limit groups; 75 MHz station costs range EUR 140,556 (40,035) to EUR 201,733 (67,896) |
| R10 | The estimated demand model reproduces average data consumption across plan categories | Figure 6, p. 36 | Predicted market-level consumption tracks actual consumption for Orange 1,000, 4,000, and 8,000 MB plans |
| R11 | Endogenous quality feedback changes price elasticities | Figure 8, p. 41; text pp. 41-42 | Full elasticities decline less with firm count than partial elasticities for both representative plans, over one to six firms |
| R12 | The welfare maximizing number of firms varies across income groups | Figure 10, p. 43; text p. 42 | Consumer surplus peaks at five firms for the 90th income percentile; for most consumers it rises through eight or nine firms |

**Overall finding.** Consolidation in mobile telecommunications presents a genuine trade-off between market power and scale efficiency. The welfare-maximizing market structure depends critically on the welfare criterion: antitrust policy targeting consumer surplus implies a more competitive market than policy targeting total surplus. All bilateral mergers among France's 2015 MNOs decrease consumer surplus, and the social return to spectrum is substantially above what firms reveal through auction bids.

## Theory / model

The paper specifies a discrete-continuous demand model and an engineering model of cellular capacity, congestion, and firm competition. These equations are reproduced from the main text, with the printed page locator stated before each equation.

Consumer utility for plan j in market m (equation 1, p. 15):

$$
u_{jm}(x;\vartheta_i,\varepsilon_{ij},\theta_{pi}) = w_j(x,Q_{f(j),m},\vartheta_i)+\theta_v v_j-\theta_{pi}P_j+\xi_{jm}+\varepsilon_{ij} \tag{1}$$

Data utility and time cost, including throttling beyond the monthly data limit (equations 2-3, pp. 16-17):

$$w_j(x,Q,\vartheta_i)=\vartheta_i\log(1+x)-c_j(x,Q) \tag{2}$$

$$c_j(x,Q)=\begin{cases}\theta_c x/Q,&x\leq\bar d_j,\\[3pt]\theta_c\left(\bar d_j/Q+(x-\bar d_j)/Q^L\right),&x>\bar d_j.\end{cases} \tag{3}$$

Optimal data consumption is the argmax of data utility. Its four cases are reported as equation 4 (p. 17):

$$x^*_{jm}(\vartheta_i)=\begin{cases}0,&\vartheta_i\leq\theta_c/Q_{f(j),m},\\[3pt]\dfrac{\vartheta_i}{\theta_c/Q_{f(j),m}}-1,&\theta_c/Q_{f(j),m}\leq\vartheta_i<(\theta_c/Q_{f(j),m})(\bar d_j+1),\\[5pt]\bar d_j,&(\theta_c/Q_{f(j),m})(\bar d_j+1)\leq\vartheta_i<(\theta_c/Q^L)(\bar d_j+1),\\[5pt]\dfrac{\vartheta_i}{\theta_c/Q^L}-1,&\vartheta_i\geq(\theta_c/Q^L)(\bar d_j+1).\end{cases} \tag{4}$$

The outside option is alone in one nest and all mobile plans share the other; the paper assumes nested-logit shocks (Section 3.1.2, p. 18):

$$\varepsilon_{ij}=\zeta_{ig(j)}+(1-\sigma)\eta_{ij},\qquad \eta_{ij}\text{ i.i.d. extreme value},\qquad 0\leq\sigma<1$$

Data value is exponentially distributed, and plan choice, conditional shares, aggregate shares, and average consumption are given by equations 5-8 (pp. 17-18):

$$\vartheta_i\sim\operatorname{Exponential}(\theta_{di}),\qquad j^*_{im}(\varepsilon_i;\theta_i)=\arg\max_{j\in\mathcal J\cup\{0\}}\mathbb E\left[u_{jm}(x^*_{jm}(\vartheta_i);\vartheta_i,\varepsilon_{ij},\theta_{pi})\mid\theta_{di}\right] \tag{5}$$

$$s_{ijm}(\theta_i)=\int\mathbf 1\{j=j^*_{im}(\varepsilon_i;\theta_i)\}\,dF(\varepsilon_i) \tag{6}$$

$$s_{jm}=\int s_{ijm}(\theta_i)\,dF_m(\theta_i) \tag{7}$$

$$\bar x_{jm}=\frac{1}{s_{jm}}\iint s_{ijm}(\theta_i)x^*_{jm}(\vartheta_i)\,dF(\vartheta_i\mid\theta_i)\,dF_m(\theta_i) \tag{8}$$

Income heterogeneity in price sensitivity and data valuation is specified in equation 9 (p. 19):

$$\begin{pmatrix}\log(\theta_{pi})\\\log(\theta_{di})\end{pmatrix}=\begin{pmatrix}\theta_{p0}\\\theta_{d0}\end{pmatrix}+\begin{pmatrix}\theta_{pz}\\\theta_{dz}\end{pmatrix}z_i \tag{9}$$

The engineering model derives average channel capacity as a harmonic mean over locations in a hexagonal cell. Equations 13-16 define download time, channel capacity, spectral efficiency, and signal-to-noise-and-interference (pp. 26-27):

$$\int_{\ell\in\mathcal L(R_{fm})}\frac{1}{B_{fm}q_{m\ell}}\,d\ell \tag{13}$$

$$\bar Q_{fm}(R_{fm},B_{fm})=\frac{B_{fm}A(R_{fm})}{\displaystyle\int_{\ell\in\mathcal L(R_{fm})}q_{m\ell}^{-1}\,d\ell} \tag{14}$$

$$q_{m\ell}=\gamma_m\log_2(1+\operatorname{SINR}_{\ell}) \tag{15}$$

$$\operatorname{SINR}_{\ell}(R_{fm})=\frac{S_{\ell}}{N+I_{\ell}(R_{fm})} \tag{16}$$

Under the M/M/1 queue, delivered speed is channel capacity less download demand rate (equation 17, p. 28). Demand, per-base-station arrival rate, and equilibrium quality are equations 18-20 (pp. 31-32):

$$Q_{fm}=\bar Q_{fm}-Q^D_{fm} \tag{17}$$

$$X_{fm}(Q_m,P)=\operatorname{pop}_m\sum_{j\in\mathcal J_f}s_{jm}(Q_m,P)\bar x_{jm}(Q_m,P) \tag{18}$$

$$Q^D_{fm}(R_{fm},Q_m,P)=\frac{X_{fm}(Q_m,P)}{H\,N_{fm}(R_{fm})} \tag{19}$$

$$\forall f=1,\ldots,F:\quad Q_{fm}=\bar Q_{fm}(R_{fm},B_{fm})-Q^D_{fm}(R_{fm},Q_m,P) \tag{20}$$

Firms set prices and infrastructure simultaneously. Variable profits, infrastructure costs, market-level profits, and national profits are equations 21-24 (pp. 32-34):

$$\sum_m(P_f-c^u_f)\operatorname{pop}_m S^*_{fm}(P,R_m,B_m) \tag{21}$$

$$C_{fm}(R_{fm},B_{fm})=c^s_{fm}\frac{A_m}{A(R_{fm})}B_{fm},\qquad A(R)=\frac{3\sqrt 3}{2}R^2 \tag{22}$$

$$\Pi_{fm}(P,R_m,B_m)=\operatorname{pop}_m(P_f-c^u_f)\cdot S^*_{fm}(P,R_m,B_m) \tag{23}$$

$$\Pi_f(P,R,B)=\sum_m\Pi_{mf}(P,R_m,B_m)-\sum_m C_{fm}(R_{fm},B_{fm}) \tag{24}$$

The testable mechanism is the trade-off between market power and network scale economies. Pooling bandwidth and demand improves utilization under stochastic congestion; serving denser users reduces path loss. The paper also emphasizes that typical observed cell sizes make density effects small relative to pooling (text pp. 29-30, Figure 7, p. 40).

## Method

The paper applies a structural discrete-continuous demand system in the Berry, Levinsohn and Pakes (1995) tradition (`blp-demand`), estimated by two-stage efficient generalized method of moments (`gmm`). Bourreau, Sun and Verboven (2021) supply the calibrated Orange own-price elasticity and outside-option diversion moments (their Tables A.4 and A.3, respectively; fn. 29, pp. 20-21). Firm costs are recovered from the first-order conditions for price and infrastructure choices. Market-level shares are observed at plan level for Orange and at aggregate firm level for other operators; the modified contraction mapping solves for demand shocks consistent with both levels (Section 3.2.1, pp. 19-20; Internet Appendix B.1).

The identifying price moments use the Orange own-price elasticity and diversion to the outside option. Equations 10-12 define those moments (pp. 20-22):

$$e^{ORG}_m(\theta)=\frac{d\ln s_{ORG,m}(P;\theta)}{d\ln P_{ORG}} \tag{10}$$

$$\mathbb E[e^{ORG}_m(\theta)]=-2.36 \tag{11}$$

$$\mathbb E[DIV^{ORG,0}_m(\theta)]=0.036,\qquad DIV^{ORG,0}_m(\theta)=-\frac{d s_{0,m}(P;\theta)/d\ln P_{ORG}}{d s_{ORG,m}(P;\theta)/d\ln P_{ORG}} \tag{12}$$

The remaining demand moments match mean data consumption and orthogonality of the demeaned Orange demand shock with median income, population density, plan data limits, voice-plan status, and zero. Download speed is instrumented with log population density because local demand and investment may make speed endogenous and because speed is measured with error (Section 3.2.2, pp. 22-23). In compact notation, their moment vector contains the calibration moments above and the following sample restrictions:

$$\mathbb E[(\xi_{jm}-\theta_O)\operatorname{incmed}_m]=0,\quad \mathbb E[\bar x_{jm}(\theta)-\bar x_{jm}]=0,\quad \mathbb E[(\bar x_{jm}(\theta)-\bar x_{jm})\operatorname{incmed}_m]=0$$
$$\mathbb E[(\xi_{jm}-\theta_O)\log(\operatorname{pop\_density}_m)]=0,\quad \mathbb E[(\xi_{jm}-\theta_O)\bar d_j]=0,\quad \mathbb E[(\xi_{jm}-\theta_O)v_j]=0,\quad \mathbb E[\xi_{jm}-\theta_O]=0$$

They minimize the efficient GMM quadratic form over demand parameters in an outer loop and solve the modified contraction mapping for unobserved demand shocks in an inner loop. In the usual notation for the reported two-stage efficient GMM procedure, the estimator is (Section 3.2.2, p. 23; Appendix B.1):

$$\hat{\theta}=\arg\min_{\theta}\;\bar g_N(\theta)'W\bar g_N(\theta)$$

The cross-section has 589 French communes with population above 10,000; demand and consumption are for October 2015 and speed measures are from Q2 2016. There are no panel fixed effects. Table 4 reports standard errors in parentheses and uses the Delta Method for transformed parameters; the main text does not describe clustered standard errors.

## Empirical specifications

The demand estimator uses the following nine moment conditions for Orange plans, as listed on p. 23: the calibrated elasticity and diversion moments (equations 11-12), mean predicted-minus-observed consumption, consumption-income covariance, demand-shock covariances with income and log density, demand-shock orthogonality to data limit and voice allowance, and the demeaned demand shock. The paper estimates the parameter vector by two-stage efficient GMM; no fixed effects are specified, and the observations are the 589 commune cross-section. Speed enters through the demand system and is instrumented by log population density. Table 4 presents estimates and standard errors in parentheses; its note specifies Delta Method errors for transformed parameters. No cluster-robust treatment is reported.

Per-user marginal cost follows from the price first-order condition (equations 25-26, p. 35):

$$\sum_m\operatorname{pop}_m S^*_{mf}(P,R_m,B_m)+\sum_m\operatorname{pop}_m J_f S^*_{mf}(P,R_m,B_m)(P_f-c^u_f)=0 \tag{25}$$

$$\hat c^u_f=P_f+\left(\sum_m\operatorname{pop}_m J_f S^*_{mf}(P,R_m,B_m)\right)^{-1}\sum_m\operatorname{pop}_m S^*_{mf}(P,R_m,B_m) \tag{26}$$

Infrastructure costs are inferred by finite-differencing operating income with a 0.01 km radius perturbation (equation 27, p. 35), then equating marginal cost implied by equation 22 to this marginal income. The sample is the same set of 589 communes and operators; these structural cost-recovery equations have no regression fixed effects or reported clustered standard errors:

$$MR^{R}_{fm}(R_m,B_m)=\frac{\Pi_{fm}(P,(R_{fm}+0.01,R_{-f,m}),B_m)-\Pi_{fm}(P,(R_{fm}-0.01,R_{-f,m}),B_m)}{0.02} \tag{27}$$

The spectrum exercise differentiates equilibrium profits with respect to one firm’s bandwidth, another firm’s bandwidth, or common industry bandwidth; equations 28-31 define these counterfactual derivatives (pp. 45-46):

$$\frac{d\Pi_f(\mathbf R^*(B_f,\mathbf B_{-f}), (B_f,\mathbf B_{-f}))}{dB_f} \tag{28}$$

$$\frac{d\Pi_f(\mathbf R^*(B_f,B_{f'},\mathbf B_{-f,f'}), (B_f,B_{f'},\mathbf B_{-f,f'}))}{dB_{f'}} \tag{29}$$

$$\frac{d\Pi_f(\mathbf R^*(B\mathbf 1),B\mathbf 1)}{dB} \tag{30}$$

$$\frac{dCS(\mathbf R^*(B\mathbf 1),B\mathbf 1)}{dB} \tag{31}$$

The results in Figures 7-10 and Table 6 are structural counterfactuals, not separate reduced-form regressions: firms re-optimize prices and infrastructure for symmetric one-to-six or one-to-nine firm cases and for three-firm asymmetric spectrum allocation. The merger analysis holds products and infrastructure fixed, combines the two firms’ products and bandwidth, and evaluates six possible pairs using three population-category representative markets weighted by population (Figures 9-12, pp. 43-49). These exercises report no regression fixed effects or standard-error clustering; Figures 7 and 11 show 95% confidence intervals. Figure 12 does not report confidence intervals. Table 6 reports standard errors in parentheses.

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
