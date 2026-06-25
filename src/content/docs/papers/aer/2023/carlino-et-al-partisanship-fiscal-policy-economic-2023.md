---
title: "Partisanship and Fiscal Policy in Economic Unions: Carlino, Drautzburg, Inman & Zarra (2023)"
description: >-
  Distilled: Using a regression discontinuity design on close gubernatorial elections,
  the paper shows Republican governors spend 0.29 percentage points less (elasticity)
  per 1 percent increase in federal intergovernmental transfers than Democratic governors,
  instead reducing debt and cutting taxes with a two-year lag; a calibrated New Keynesian
  two-state monetary union model implies the IG transfer impact multiplier falls by 0.58
  under equal partisan representation relative to an all-Democratic benchmark.
  American Economic Review 113(3), 2023, paywalled. Eight core results with source
  locators, the NK model equations, and the RDD specification; LLM-distilled, not
  human-verified.
sidebar:
  label: Carlino-Drautzburg-Inman-Zarra 2023
  order: 1
tags: [paper-summary, fiscal-policy, political-economy, fiscal-federalism, macroeconomics,
       regression-discontinuity, panel-regression,
       peer-reviewed, unreplicated,
       data:census-of-governments, data:faads, data:fred, data:klarner-partisan-data]
paper:
  authors: Gerald Carlino, Thorsten Drautzburg, Robert Inman, and Nicholas Zarra
  authorList:
    - { family: Carlino, given: Gerald A., affiliation: Federal Reserve Bank of Philadelphia }
    - { family: Drautzburg, given: Thorsten, affiliation: Federal Reserve Bank of Philadelphia }
    - { family: Inman, given: Robert D., orcid: "0000-0002-4750-1422", affiliation: University of Pennsylvania (Wharton) and NBER }
    - { family: Zarra, given: Nicholas, affiliation: New York University Stern }
  year: 2023
  venue: American Economic Review 113(3), March 2023, 701-737
  venueShort: AER 2023
  doi: 10.1257/aer.20210147
  jel:
    codes: [E62, H77, D72]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics:
    - Fiscal Policies and Political Economy
    - Fiscal Policy and Economic Growth
    - Local Government Finance and Decentralization
  dataAccess: public
  outcome:
    - state government expenditure growth in response to federal intergovernmental transfers
    - state government debt outstanding
    - state top marginal income tax rate
    - state GDP growth
    - aggregate fiscal multiplier of federal IG transfers
  outcomeClass: [macro-aggregates]
  license: >-
    AEA copyright; no CC licence found in Crossref REST API license[] block (license[] empty);
    AEA 12-month embargo expired March 2024; no open-access PDF indexed in OpenAlex
    (open_access_pdf null, checked 2026-06-25); replication data openly available at
    ICPSR doi:10.3886/E177001V1.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "no open-access PDF in OpenAlex (checked 2026-06-25); AEA 12-month embargo expired March 2024; article available via aeaweb.org subscription"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 20
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, panel-regression, dynamic-general-equilibrium]
    identification: rdd
  contributionType: [new-fact, new-theory]
  mechanisms: [agency]
  scope:
    region: US
    period: 1983-01..2014-12
    frequency: annual
    dataType: [administrative, accounting]
    granularity: [aggregate]
    n: "1,508 state-years (48 states, 32 years, 1983-2014); close-election RDD subsample: 299 Democratic, 333 Republican state-years (632 total close-election state-years)"
  findings:
    - ref: R1
      outcome: state government expenditure growth in response to federal intergovernmental transfers
      metric: elasticity
      value: "-0.290 (SE = 0.098); t-stat approximately -3.0"
      direction: negative
      vsBenchmark: "Republican vs Democratic governors; robust RDD, party x year FE (Table 2, col. 5)"
    - ref: R2
      outcome: state government expenditure growth in response to federal intergovernmental transfers
      metric: elasticity
      value: "0.524 (SE = 0.239); additional spending cut by Republicans per 1% IG cut"
      direction: negative
      vsBenchmark: "Republican governors cut spending 0.524% more per 1% IG cut than Democrats (Table 2, col. 5)"
    - ref: R3
      outcome: state government expenditure growth in response to federal intergovernmental transfers
      metric: coefficient
      value: "Democratic MPS = $1.346 per $1 IG increase (SE = $0.600); Republican partisan difference = -$1.576 (SE = $0.892); Republican total approximately -$0.230 (not significant)"
      direction: negative
      vsBenchmark: "Republican governors spend $1.576 less per $1 IG increase than Democrats (Table 4, col. 2)"
    - ref: R4
      outcome: state government debt outstanding
      metric: elasticity
      value: "Republican states lower debt by approximately 0.25% more per 1% IG increase, persisting at least 3 years"
      direction: negative
      vsBenchmark: "Republican vs Democratic governors; RDD with quadratic MOV (Figure 7, Panel A)"
    - ref: R5
      outcome: state top marginal income tax rate
      metric: elasticity
      value: "approximately 0.05 pp (1% in log terms) lower in Republican states per 1% IG increase, with 2-year lag"
      direction: negative
      vsBenchmark: "Republican vs Democratic governors 2 years after IG receipt; no partisan difference on impact (Figure 7, Panel B)"
    - ref: R6
      outcome: state GDP growth
      metric: elasticity
      value: "-0.334% (Republican minus Democratic cumulative GDP growth elasticity per 1% IG increase)"
      direction: negative
      vsBenchmark: "Democratic-led states show 0.334% higher GDP per 1% IG increase; marginally significant (Figure 8)"
    - ref: R7
      outcome: aggregate fiscal multiplier of federal IG transfers
      metric: fiscal-multiplier
      value: "Impact multiplier: 1.22 (all Democrats) vs 0.64 (equal partisanship); difference = -0.58 (SE = 0.33)"
      direction: negative
      vsBenchmark: "equal partisan split reduces IG impact multiplier by 0.58 vs all-Democratic counterfactual (Table 7, col. 1-3, row 1)"
    - ref: R8
      outcome: aggregate fiscal multiplier of federal IG transfers
      metric: fiscal-multiplier
      value: "Long-run PDV multiplier: 0.64 (all Democrats) vs 0.80 (equal partisanship); difference = +0.16 (SE = 0.09)"
      direction: positive
      vsBenchmark: "equal partisan split raises long-run multiplier by 0.16 via delayed Republican tax cuts (Table 7, col. 1-3, row 2)"
  resultType: new-finding
  relatesTo:
    - { cite: "Besley and Case (2003)", doi: '10.1257/002205103321544693', relation: extends, note: "extends their OLS finding of partisan spending differences to a causal RDD design and quantifies aggregate multiplier effects" }
    - { cite: "Lee, Moretti, and Butler (2004)", doi: '10.1162/0033553041502153', relation: builds-on, note: "RDD design using gubernatorial close-election margins of victory, adapted from their US House application" }
    - { cite: "Nakamura and Steinsson (2014)", doi: '10.1257/aer.104.3.753', relation: builds-on, note: "NK monetary union model with fiscal spillovers; adapts their two-region open-economy framework to incorporate partisan state fiscal rules" }
    - { cite: "Chodorow-Reich (2019)", doi: '10.1257/pol.20160465', relation: cites, note: "reviews ARRA IG aid multiplier literature; their headline estimate of 1.7 exceeds this paper's because it does not apply to the ZLB-constrained ARRA episode" }
  openQuestions:
    - "Whether partisan differences in MPS are constant across all margins of victory; RDD estimates are local (close elections), and OLS suggests possible attenuation for landslide governors (p. 717, 731)."
    - "How partisan differences interact with different IG aid types (matched vs. block grants) and whether results extend to local government spending beyond state-level decisions (p. 705, 731)."
    - "The model does not incorporate the zero lower bound on interest rates at the time of large IG shocks such as ARRA; accounting for the ZLB would likely raise multiplier estimates (p. 731)."
  replicationCode:
    url: https://doi.org/10.3886/E177001V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 701-737); eight core results extracted with table and figure locators. Model equations transcribed from pp. 707-708 (empirical specs) and pp. 724-726 (NK model). Not human-verified. Not reproduced. Replication data available at ICPSR doi:10.3886/E177001V1." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; four fixes applied: (1) eq. 5 bond superscripts B_t→B_t^u and B_{t-1}→B_{t-1}^u; (2) eq. 8 first denominator corrected from \\bar{\\Pi}_t to \\Pi_t (current inflation); (3) R5 findings metric corrected from pp-effect to elasticity (Figure 7 title: 'DEBT AND TAX ELASTICITIES'); (4) scope.n close-election subsample corrected from '632 Democratic, 333 Republican' to '299 Democratic, 333 Republican (632 total)' per Table 1 / p.710. Colorful adjective 'substantially' removed from conclusion paragraph. All 8 Core results rows verified: R1-R3 against Table 2 col.5 (p.713) and Table 4 col.2 (p.716); R4-R5 against Figure 7 (p.723); R6 against Figure 8 (p.724); R7-R8 against Table 7 / p.731 text. Equations 1-3 (pp.707-708, p.720) and 4, 6-9 (pp.724-726) checked term-by-term and match the PDF."
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210147", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] block is empty; published 2023-03-01; volume 113 issue 3 pp 701-737; AEA copyright; no CC licence declared; AEA 12-month embargo policy implies free readability since March 2024 but no redistribution rights confirmed" }
  rightsSignalConflict: false
---

**What this is.** The core results, the New Keynesian two-state monetary union model, and the regression discontinuity design that identifies partisan differences in state governors' propensity to spend federal intergovernmental (IG) transfers: enough to understand what the paper found and how, without reading all 37 pages. To replicate or extend it, read the full source at [doi:10.1257/aer.20210147](https://doi.org/10.1257/aer.20210147).

## TL;DR

The paper documents that the party of the state governor is a source of heterogeneity in how federal IG transfers affect the macroeconomy. Using a regression discontinuity design on close gubernatorial elections, it finds Republican governors spend 0.29 percent less (elasticity) per 1 percent increase in IG aid than Democratic governors, and instead reduce debt immediately and cut top income tax rates with a two-year lag. A calibrated New Keynesian model of a two-state monetary union with these estimated partisan fiscal rules implies an intertemporal trade-off: the IG transfer impact multiplier is 1.22 when all governors behave like Democrats but falls to 0.64 under equal partisan representation, a difference of 0.58; the long-run discounted multiplier, however, is 0.16 higher under equal partisanship (0.80 vs. 0.64) because delayed Republican tax cuts stimulate future output. The paper extends Besley and Case (2003), who documented partisan spending differences using OLS, to a causal RDD design, and adds the aggregate macroeconomic implications via a calibrated NK model. The partisan differences are only statistically significant in the post-Reagan era and grew with national polarization.

## Core results

Magnitudes are as reported; preferred estimates use the robust RDD estimator (quadratic MOV polynomial, state x party and year x party fixed effects, bandwidth 10 percentage points). Locators point to the published version.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Republican governors spend less per 1% increase in IG aid than Democratic governors (MPS elasticity partisan difference) | Table 2, col. 5, p. 713 | $$\gamma_{r,\text{inc}} = -0.290$$ (SE 0.098); t approximately -3.0 with party FE |
| R2 | Republican governors cut spending more per 1% decrease in IG aid than Democrats (asymmetric response to cuts) | Table 2, col. 5, p. 713 | $$\gamma_{r,\text{cut}} = 0.524$$ (SE 0.239); statistically significant at 5% |
| R3 | Dollar-for-dollar: Democratic MPS near $1.35 per $1 IG increase; Republican partisan difference -$1.58, leaving Republican total near zero | Table 4, col. 2, p. 716 | Democrat: $1.346 (SE 0.600); Rep diff: -$1.576 (SE 0.892); Republican total not different from zero |
| R4 | Republican states immediately lower debt outstanding relative to Democratic states; effect persists for at least 3 years | Figure 7, Panel A, p. 723 | Debt elasticity partisan difference approximately -0.25 per 1% IG increase; statistically significant |
| R5 | Republican top marginal income tax rates are lower, but only with a 2-year lag; no partisan tax difference on impact | Figure 7, Panel B, p. 723 | Log tax-rate elasticity partisan difference approximately -1% after 2 years; zero on impact and year 1 |
| R6 | Democratic-led states show higher GDP growth per dollar of IG aid, with the gap persisting up to 3 years | Figure 8, p. 724 | Partisan GDP growth elasticity (Rep - Dem): approximately -0.334% per 1% IG increase; marginally significant |
| R7 | IG transfer impact multiplier falls by 0.58 under equal partisanship vs. all-Democratic baseline | Table 7, rows 1-2, col. 1-3, p. 731 | Impact multiplier: 1.22 (all Democrats) vs 0.64 (equal partisanship); difference -0.58 (SE 0.33) |
| R8 | Long-run PDV multiplier is 0.16 higher under equal partisanship than all-Democratic, because of delayed Republican tax cuts | Table 7, rows 1-2, col. 1-3, p. 731 | Long-run multiplier: 0.64 (all Democrats) vs 0.80 (equal partisanship); difference +0.16 (SE 0.09) |

**Overall (paper's conclusion).** Partisanship of state governors alters how federal IG transfers translate into macroeconomic activity. More Democratic governors raise the short-run IG impact multiplier; more Republican governors raise the long-run discounted multiplier by channeling aid into delayed tax cuts. The resulting intertemporal trade-off means the optimal partisan composition of governors depends on whether the federal government prioritizes short-run or long-run stimulus. As national polarization increased after 1980, partisan differences in MPS widened and became statistically detectable, implying the aggregate consequences of partisanship for IG policy have grown over time.

## Theory / model

The model is a two-state New Keynesian monetary union with home state size $$n$$ and foreign state size $$1-n$$. The states are symmetric except for their governors' partisan MPS. Each state has constrained households (fraction $$\mu$$, hand-to-mouth) and unconstrained households (fraction $$1-\mu$$, with complete markets and bond holdings). Households in each state have utility (eq. 4, p. 724):

$$
u(C_t, N_t, G_{st,t}) = \frac{1}{1-1/\varepsilon_C} C_t^{1-1/\varepsilon_C} - \kappa_n^i \frac{N_t^{1+1/\varepsilon_N}}{1+1/\varepsilon_N} + v(G_{st,t}) \tag{4}
$$

where $$C_t$$ is aggregate consumption, $$N_t$$ labor supply, $$G_{st,t}$$ state government services, $$\varepsilon_C$$ the elasticity of intertemporal substitution, $$\varepsilon_N$$ the Frisch elasticity, and $$\kappa_n^i$$ a leisure weight that differs by household type $$i \in \{c, u\}$$. The budget constraint for unconstrained agents is (eq. 5, p. 725):

$$
P_t C_t^u + B_t^u \leq (1 - \tau_t^f - \tau_t^{st}) W_t N_t^u + B_{t-1}^u R_{t-1}^n + Pr_t + Tr_t^u \tag{5}
$$

Intermediate goods firms produce using labor only under decreasing returns to scale (eq. 6, p. 725):

$$
y_{h,t}(z) = A_t \times N_t(z)^{1-\alpha} \tag{6}
$$

where $$\alpha \in (0,1)$$ is the fixed-factor share. Firms face Calvo price stickiness: with probability $$\xi$$ a firm cannot reoptimize; calibrated $$\xi = 0.735$$ at annual frequency to match a peak defense spending multiplier of 0.8.

**State government fiscal rules.** Government consumption responds to IG transfers through the partisan MPS $$\psi_{IG}$$ (eq. 7, p. 725):

$$
G_{st,t} = \psi_{IG}\!\left(\frac{IG_t}{P_t} - \bar{IG}\right) + G_{st,t}^x \tag{7}
$$

The Republican home state uses $$\psi_{IG} = 0$$ (calibrated: Republican spending effect not significantly different from zero) while the Democratic foreign state uses $$\psi_{IG}^* = 1.576$$ (robust RDD estimate from Table 4, col. 2). State tax rates adjust smoothly to service debt and to cover expenditure net of IG revenue (eq. 8, p. 726):

$$
\tau_{st,t} = \rho_\tau \tau_{st,t-1} + (1-\rho_\tau)\!\left\{\bar{\tau}_{st} + \psi_{st,b}\!\left[(R_{t-1}^n - 1)\frac{b_{st,t-1}}{\Pi_t} - (\bar{R}^n - 1)\frac{\bar{b}_{st}}{\bar{\Pi}}\right] + \psi_{st,E}\!\left[G_{st,t-1} - \bar{G}_{st} - \frac{IG_{t-1} - \bar{IG}}{P_t}\right]\right\} \tag{8}
$$

Calibrated: persistence $$\rho_\tau = 0.35$$, debt loading $$\psi_{st,b} = 0.99$$, expenditure-net-of-IG loading $$\psi_{st,E} = 0.85$$ (Table 6, p. 729). This yields no tax change in year 1, a fall after year 2, and reversal toward zero by year 3, consistent with the micro estimates in Figure 7.

**Monetary policy.** The common central bank follows a Taylor rule reacting to union-wide inflation and the output gap (eq. 9, p. 726):

$$
R_t^n = \left(\frac{\bar{\Pi}}{\beta}\right)^{\rho_r}\!\!\left[\!\left(\frac{\Pi_t^{agg}}{\bar{\Pi}}\right)^{\psi_{r,\pi}}\!\!\left(\frac{Y_t^{agg}}{Y_t^{flex}}\right)^{\psi_{r,y}}\right]^{1-\rho_r} \tag{9}
$$

where $$\Pi_t^{agg} = n\Pi_t + (1-n)\Pi_t^*$$ and $$Y_t^{agg} = nY_t + (1-n)Y_t^*$$ are population-weighted. Calibrated: $$\rho_r = 0.75$$, $$\psi_{r,\pi} = 1.5$$, $$\psi_{r,y} = 0.5$$. The model builds on Nakamura and Steinsson (2014) by adding heterogeneous state fiscal rules that encode partisan differences. It is linearized around a deterministic steady state and solved numerically with Dynare (Adjemian et al. 2011).

## Method

The identification design exploits the regression discontinuity in gubernatorial elections. Near a 50-50 vote outcome (margin of victory MOV = 0), the party of the winning governor is as good as randomly assigned. This yields a consistent estimate of partisan differences in MPS conditional on IG aid changes, without relying on the assumption that IG aid is itself randomly allocated. The design follows Lee, Moretti, and Butler (2004) and Ferreira and Gyourko (2009), who used close-election RDDs for US House representatives and mayors.

MOV is signed positive (negative) for a Democratic (Republican) winner. Standard errors are two-way clustered by state and year throughout. The bandwidth $$\bar{m}$$ on absolute MOV is chosen by cross-validated MSE minimization using linear MOV controls ($$q = 1$$). The preferred "robust" estimator uses quadratic MOV controls ($$q = 2$$) with the same bandwidth; the preferred bandwidth is 10 percentage points with fixed effects and 11 without. Internal validity is assessed via Table 1 (p. 710), which shows no significant differences in pre-determined covariates across Democratic and Republican winners in close elections. External validity is assessed in Section III: rolling-window OLS shows the same partisan pattern for margins up to 30 percentage points, and candidate ideological differences are uncorrelated with closeness.

## Empirical specifications

**Baseline panel regression (eq. 1, p. 707).** Changes in log state expenditure $$\Delta \ln E_{s,t}$$ in state $$s$$, fiscal year $$t$$, are regressed on log changes in IG aid interacted with the governor's party lagged one year ($$\text{Rep}_{s,t-1} = 1$$ for Republican):

$$
\Delta \ln E_{s,t} = (\gamma_{0,\text{inc}} + \gamma_{r,\text{inc}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{inc}} + (\gamma_{0,\text{cut}} + \gamma_{r,\text{cut}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{cut}} + \mu_0 + \mu_r \times \text{Rep}_{s,t-1} + \text{fixed effects} + e_{s,t} \tag{1}
$$

where $$\Delta \ln IG_{s,t}^{\text{inc}} = \max\{0, \Delta \ln IG_{s,t}\}$$ captures IG increases and $$\Delta \ln IG_{s,t}^{\text{cut}} = \min\{0, \Delta \ln IG_{s,t}\}$$ captures decreases. The Democratic MPS elasticity is $$\gamma_{0,\text{inc}}$$ for increases and $$\gamma_{0,\text{cut}}$$ for decreases; the Republican partisan difference is $$\gamma_{r,\text{inc}}$$ (expected negative: Republicans spend less on increases) and $$\gamma_{r,\text{cut}}$$ (expected positive: Republicans cut more when aid falls). Fixed effects are state x party and year x party in the preferred specification.

**RDD specification (eq. 2, p. 708).** Equation (1) is augmented with a polynomial of order $$q$$ in the MOV and its interactions with IG changes, estimated on observations within bandwidth $$|MOV_{s,t-1}| \leq \bar{m}$$:

$$
\Delta \ln E_{s,t} = (\gamma_{0,\text{inc}} + \gamma_{r,\text{inc}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{inc}} + (\gamma_{0,\text{cut}} + \gamma_{r,\text{cut}} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\text{cut}} $$

$$+ \sum_{\hat{s} \in \{\text{cut},\text{inc}\}}\sum_{p=1}^{q} (\gamma_{0,\hat{s},m,p} + \gamma_{r,\hat{s},m,p} \times \text{Rep}_{s,t-1})\Delta \ln IG_{s,t}^{\hat{s}} \times MOV_{s,t-1}^p $$

$$+ \sum_{p=1}^{q} (\beta_{0,m,p} + \beta_{r,m,p} \times \text{Rep}_{s,t-1})MOV_{s,t-1}^p + \mu_0 + \mu_r \times \text{Rep}_{s,t-1} + \text{fixed effects} + e_{s,t} \tag{2}
$$

The RDD identifies partisan differences $$(\gamma_{r,\text{inc}}, \gamma_{r,\text{cut}})$$ but not the Democratic baseline MPS $$(\gamma_{0,\text{inc}}, \gamma_{0,\text{cut}})$$. The paper benchmarks Republican MPS to zero (consistent with the near-zero robust estimate) and sets Democratic MPS to 1.576 (from dollar-level Table 4, col. 2). Headline results are R1 and R2 above (Table 2, cols. 5 and 2 respectively).

**Debt and tax rate specifications.** Equations (1) and (2) are re-estimated replacing $$\Delta \ln E_{s,t}$$ with the log level of total debt outstanding and the log of the state top marginal income tax rate, estimated at horizons 0-3 years (Figure 7, p. 723). These specifications produce R4 and R5: Republicans lower debt immediately; tax cuts arrive with a two-year lag. Results R4-R5 do not appear in a formal regression table; Figure 7 plots the RDD coefficient path with 68% and 90% pointwise confidence bands.

**State GDP specification.** Equation (2) with cumulative GDP growth as the dependent variable produces R6 (Figure 8, p. 724): a 0.334 percent Democratic advantage in GDP growth per 1 percent increase in IG aid, which persists for up to three years.

**Polarization extension (eq. 3, p. 720).** Interacting partisan MPS differences with a political polarization index $$PPC_{t-1}$$ (normalized; from Azzimonti 2018) shows that partisan MPS differences grew with polarization: the interaction is $$-0.13 \times PPC_{t-1}$$ (SE 0.06) for IG increases. Before 1980, $$PPC_{t-1}$$ averaged 1.1 standard deviations below the mean, implying near-zero partisan differences (consistent with the pre-Reagan evidence). After 1990, $$PPC_{t-1}$$ averaged 0.8 standard deviations above the mean, implying partisan differences of approximately $$-0.25$$ (standard error 0.09).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| US Census Bureau, State and Local Government Finance (State Government Finances series) | Primary source for state expenditure, revenue, debt, and tax data; 1983-2014 | no page yet |
| Federal Assistance Award Data System (FAADS) via National Archives / SAM | Identifies federal aid programs with matching provisions (excluded from main IG measure); 1983-2010 | no page yet |
| Council of State Governments, The Book of the States | Gubernatorial election outcomes, party affiliation, and term data | no page yet |
| US Bureau of Economic Analysis, Regional Economic Accounts | State-level GDP (personal income), used for R6 state GDP growth specifications | no page yet |
| US Bureau of Labor Statistics / Federal Reserve Bank of St. Louis (FRED) | State unemployment rate (used in robustness checks, Table 5); macro data | [FRED](/wiki/datasets/fred/) |
| S&P Global Ratings, History of US State Ratings | State bond downgrade dummies for fiscal-stress robustness checks (Table 5) | no page yet |
| Klarner (2013) State Partisan Balance Data (Harvard Dataverse) | State partisan composition of legislature; used in robustness checks and polarization analysis | no page yet |
| Bonica (2014) DIME Database on Ideology | Ideological scores for gubernatorial candidates; external validity check in Figure 5 | no page yet |

Sample: 48 US states, fiscal years 1983-2014. Alaska, Wyoming, and North Dakota excluded from main sample (large sovereign wealth funds). Close-election RDD subsample: elections with absolute MOV at most 10-11 percentage points.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20210147) if you are: calibrating the partisan heterogeneity in state fiscal responses for a fiscal federalism model (Tables 2 and 4 give the full set of MPS estimates by party, sign, and specification); studying the macroeconomic implications of state partisanship for federal stimulus design (Section V and Table 7 provide the NK model results and counterfactuals); assessing external validity of RDD designs for close gubernatorial elections (Section III, Figures 4-6, Appendix C); comparing IG multiplier estimates across methodologies (Chodorow-Reich (2019) surveys ARRA-era estimates and finds a headline multiplier of 1.7, higher than the estimates here partly because it implicitly assumes the ZLB constraint); or extending the model to incorporate the zero lower bound or other heterogeneous states. The replication data at [doi:10.3886/E177001V1](https://doi.org/10.3886/E177001V1) includes all cleaned datasets and Dynare code.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(3), March 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The AEA retains copyright; no CC licence was found in Crossref metadata. Reproduction of figures or tables requires AEA permission.

> Carlino, Gerald, Thorsten Drautzburg, Robert Inman, and Nicholas Zarra.
> "Partisanship and Fiscal Policy in Economic Unions: Evidence from US States."
> *American Economic Review* 113, no. 3 (March 2023): 701-737.
> DOI: 10.1257/aer.20210147.
> Replication data: [doi:10.3886/E177001V1](https://doi.org/10.3886/E177001V1).
