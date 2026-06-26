---
title: "Mandatory CSR Spending and Firm Risk: Chauhan, Ghosh & Jadiyappa (2026)"
description: >-
  Distilled: Exploiting India's 2013 mandatory CSR regulation as a
  quasi-natural experiment, this paper finds that firms subject to mandatory
  CSR spending exhibit higher systematic risk (equity beta) than non-subject
  firms, with operating leverage as the primary transmission channel. Journal
  of Corporate Finance vol 98 (2026) 102965, paywalled (Elsevier). Eight core
  results with source locators, datasets used, the identification strategy,
  and the estimating equations.
sidebar:
  label: Chauhan-Ghosh-Jadiyappa 2026
  order: 1
tags: [paper-summary, csr, esg, systematic-risk, india, corporate-finance,
       regulation-policy, panel-regression, panel-data,
       peer-reviewed, unreplicated, data:cmie-prowess]
paper:
  authors: Yogesh Chauhan, Chinmoy Ghosh, Nemiraja Jadiyappa
  authorList:
    - { family: Chauhan, given: Yogesh, orcid: 0000-0003-3989-1333, affiliation: Indian Institute of Management Raipur }
    - { family: Ghosh, given: Chinmoy, orcid: 0000-0002-4196-1292, affiliation: University of Connecticut }
    - { family: Jadiyappa, given: Nemiraja, orcid: 0000-0003-2720-5703, affiliation: Indian Institute of Management Kozhikode }
  year: 2026
  venue: Journal of Corporate Finance 98 (2026) 102965
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2026.102965
  tier: field
  jel:
    codes: [G32, G38, M14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Corporate Social Responsibility Reporting', 'Regulation and Compliance Studies', 'Corporate Finance and Governance']
  dataAccess: licensed-commercial
  outcome:
    - systematic risk (equity beta) of Indian listed firms
    - marginal expected shortfall (MES)
    - delta CoVaR
  outcomeClass: [security-returns, firm-financing]
  license: 'paywalled; Elsevier B.V. all rights reserved including text/data mining and AI training (artifact p. 1); Elsevier TDM licence only via Crossref (content-version tdm, start 2026-03-01)'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Elsevier ScienceDirect, checked 2026-06-26)'
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, regression-discontinuity-design, matching]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [operating-leverage-channel]
  scope:
    region: India
    assetClass: Indian equities (BSE/NSE non-financial listed firms)
    period: 2010..2019
    frequency: annual
    dataType: [market, accounting]
    granularity: [firm]
    n: "8,671 firm-year observations, 930 unique firms"
  findings:
    - { ref: R1, outcome: "systematic risk (equity beta)", metric: coefficient, value: "DiD = 0.112*** (p<1%); ~12.7% above sample mean beta of 0.88", direction: positive, vsBenchmark: "vs control firms in pre-regulation period (Table 2, p. 8)" }
    - { ref: R2, outcome: "systematic risk (equity beta)", metric: coefficient, value: "CSR Dummy x Treatment Firms: 0.117*** (t=4.49) no controls; 0.098*** (t=3.754) with controls; 0.061** (t=2.325) firm FE (Table 3, pp. 8-9)", direction: positive }
    - { ref: R3, outcome: "systematic risk (equity beta)", metric: coefficient, value: "PSM-matched DiD: 0.078** (t=2.571) col. 1; 0.100*** (t=4.155) col. 2 (Table 5, p. 10)", direction: positive }
    - { ref: R4, outcome: "systematic risk (equity beta)", metric: coefficient, value: "MRDD at M=0: 0.241-0.292 (BW 0.50, all significant); 0.318-0.427 (BW 0.10, all significant) (Table 6, p. 12)", direction: positive, vsBenchmark: "firms just above vs just below CSR eligibility thresholds" }
    - { ref: R5, outcome: "marginal expected shortfall (MES)", metric: coefficient, value: "DiD: 0.344** (t=2.305) col. 1; 0.392*** (t=3.222) col. 2 (Table 7, pp. 14-15)", direction: positive }
    - { ref: R6, outcome: "delta CoVaR", metric: coefficient, value: "DiD: 1.886*** (t=4.65) col. 3; 0.841** (t=2.243) col. 4 (Table 7, pp. 14-15)", direction: positive }
    - { ref: R7, outcome: "systematic risk (equity beta)", metric: coefficient, value: "Triple interaction CSR Dummy x Treatment Firms x ΔDOL: 0.013*** (t=3.556) col. 1; 0.013*** (t=2.632) col. 2 (Table 9, p. 17)", direction: positive }
    - { ref: R8, outcome: "change in ROA (profit cyclicality)", metric: coefficient, value: "Triple interaction CSR Dummy x Treatment Firms x GDP growth: 0.007** (t=2.296) col. 1; 0.006** (t=2.213) col. 2 (Table 10, p. 19)", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Albuquerque, Koskinen and Zhang (2019)", relation: tests, note: "confirms their prediction that widespread CSR adoption erodes differentiation benefits and raises systematic risk; extends it to a mandatory regulatory setting" }
    - { cite: "Manchiraju and Rajgopal (2017)", doi: '10.1111/1475-679x.12174', relation: builds-on, note: "uses their treatment/control group identification under India's 2013 Companies Act Section 135" }
    - { cite: "Rajgopal and Tantri (2023)", doi: '10.1111/1475-679x.12461', relation: builds-on, note: "consistent with their finding that the mandate eroded voluntary CSR signaling value and reduced firm performance" }
    - { cite: "Harjoto (2017)", doi: '10.1007/s11156-016-0598-5', relation: builds-on, note: "adopts the operating leverage mechanism linking CSR quasi-fixed costs to earnings sensitivity and systematic risk" }
  openQuestions:
    - "Whether the saturation mechanism generalizes beyond India to other mandatory CSR regimes (e.g. EU CSRD): the equilibrium argument depends on the share of firms engaged in CSR, which varies by institutional setting (p. 20)."
    - "Heterogeneity by CSR activity type: the Companies Act mandates diverse activities (poverty alleviation, environmental protection, education) whose risk implications may differ; the aggregate analysis cannot identify which forms drive the result (p. 20)."
    - "Unobserved time-varying macroeconomic or institutional factors may affect firm-level risk exposure beyond the CSR channel, despite contemporaneous governance reforms being controlled (p. 20)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: '2026-06-26', role: extracted, note: "Read PDF in full; all locators verified against tables and figures; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and magnitudes re-checked against source PDF; fixed R1 locator (p.7->p.8, Table 2 is on p.8), R2 col-4 stars (***->**, t=2.325<2.576), R3 locator (p.9->p.10, Table 5 is on p.10), R4 BW±0.10 lower bound (0.393->0.318; 0.393 is Panel B BW±0.25 not Panel C), R7 col-2 stars (**->***, t=2.632>2.576); all equations verified term-by-term; R5, R6, R8 pass." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2026.102965", checked: '2026-06-26', by: "paper-distiller (claude-sonnet-4-6)", found: "Elsevier TDM licence only (content-version tdm, start 2026-03-01; stm-asf entries also present); no CC licence; article is paywalled" }
---

**What this is.** A distilled skeleton of Chauhan, Ghosh and Jadiyappa (2026), extracted by an LLM from the published PDF. Read the [original](https://doi.org/10.1016/j.jcorpfin.2026.102965) to replicate or extend.

## TL;DR

India's Companies Act 2013 (Section 135) created a mandatory CSR regulation, requiring firms with net profit above INR 50 million, net worth above INR 5 billion, or revenue above INR 10 billion to spend at least 2% of their three-year average net profit on specified CSR activities. The paper exploits this as a quasi-natural experiment. The treatment group comprises 662 Indian non-financial listed firms that did not engage in CSR before the regulation but began doing so afterward; the control group comprises 268 firms that remained below all statutory thresholds and never engaged in CSR. Using a difference-in-differences (DiD) design over 2010-2019, the paper finds that mandatory CSR spending raises firms' systematic risk (equity beta) by approximately 8-13% of the sample mean beta. Three complementary robustness strategies (propensity-score matched DiD, a multivariate regression discontinuity design, and tail-risk measures MES and delta CoVaR) all confirm the direction. The paper identifies operating leverage as the primary transmission channel: mandatory CSR outlays act as quasi-fixed costs, raising firms' degree of operating leverage (DOL) and making earnings more sensitive to macroeconomic fluctuations.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Univariate DiD: treatment firms exhibit higher beta post-regulation | Table 2, p. 8 | DiD = 0.112\*\*\* (p<1%); ~12.7% above sample mean beta of 0.88 |
| R2 | Multivariate DiD (OLS + FE): baseline panel regression | Table 3 cols. 1-6, pp. 8-9 | CSR Dummy x Treatment Firms: 0.117\*\*\* (t=4.49) no controls; 0.098\*\*\* (t=3.754) with controls; 0.061\*\* (t=2.325) with firm FE |
| R3 | PSM-matched DiD corroborates baseline | Table 5 cols. 1-2, p. 10 | 0.078\*\* (t=2.571) without firm FE; 0.100\*\*\* (t=4.155) with firm FE |
| R4 | MRDD: Beta is higher at the CSR eligibility cutoff | Table 6, p. 12 | Discontinuity at M=0: 0.241-0.292 (BW ±0.50, all significant); 0.318-0.427 (BW ±0.10, all significant) |
| R5 | Treatment firms exhibit higher marginal expected shortfall | Table 7 cols. 1-2, pp. 14-15 | DiD = 0.344\*\* (t=2.305) col. 1; 0.392\*\*\* (t=3.222) col. 2 |
| R6 | Treatment firms exhibit higher delta CoVaR | Table 7 cols. 3-4, pp. 14-15 | DiD = 1.886\*\*\* (t=4.65) col. 3; 0.841\*\* (t=2.243) col. 4 |
| R7 | Operating leverage mediates the CSR-to-beta channel | Table 9 cols. 1-2, p. 17 | Triple interaction (CSR Dummy x Treatment Firms x ΔDOL): 0.013\*\*\* (t=3.556) col. 1; 0.013\*\*\* (t=2.632) col. 2 |
| R8 | Treated firms' profits are more sensitive to GDP growth post-regulation | Table 10 cols. 1-2, p. 19 | Triple interaction (CSR Dummy x Treatment Firms x GDP growth): 0.007\*\* (t=2.296) col. 1; 0.006\*\* (t=2.213) col. 2 |

**Overall (paper's conclusion).** Across all specifications and outcome measures, firms subject to India's mandatory CSR spending regulation exhibit significantly higher systematic risk than non-subject firms in the post-regulation period. The evidence supports the mechanism that mandatory CSR introduces quasi-fixed costs, raises firms' operating leverage, and amplifies their sensitivity to aggregate economic fluctuations. The findings imply that universal CSR mandates can impose costs on firms at the expense of shareholders, in contrast to the risk-reducing role of voluntary CSR documented in prior literature.

## Theory / model

The paper has no formal model. It tests the theoretical prediction of Albuquerque et al. (2019) in a mandatory CSR setting. In their framework, CSR investment enables firms to cultivate consumer loyalty and reduce demand elasticity, thereby stabilizing revenues and lowering systematic risk. A key implication of their model is that these risk-mitigating benefits depend on CSR remaining a relatively selective differentiating practice: as adoption becomes widespread, the strategic distinctiveness erodes and the insurance mechanism dissipates. Their model therefore predicts a reversal in the CSR-risk relationship once CSR adoption becomes ubiquitous.

The paper argues that India's 2013 mandate creates precisely this condition. Before the regulation, roughly 35-38% of Indian listed firms engaged in CSR voluntarily, using it as a differentiation signal. After the regulation, participation rose to 48-56%. This shift from selective adoption to universal compliance simultaneously (i) dilutes CSR's differentiation value, eroding the demand-stabilization channel, and (ii) imposes new quasi-fixed costs on formerly non-CSR firms, raising their degree of operating leverage.

The operating leverage channel follows Harjoto (2017): when firms cannot pass CSR costs onto customers or offset them with higher contribution margins, CSR expenditures function as fixed costs. Higher fixed costs raise the operating leverage ratio (DOL), amplifying the sensitivity of operating profit to sales fluctuations. Because sales fluctuations co-move with aggregate demand, higher DOL translates into higher systematic risk (equity beta).

The tested hypothesis (Section 3.2, p. 4): firms subject to mandatory CSR regulation would experience higher levels of systematic risk than firms not subject to the mandatory CSR regulation in the post-regulation period.

## Method

The primary estimator is a panel DiD comparing treatment firms (those legally compelled to begin CSR spending after 2014) against control firms (those consistently below all statutory thresholds). Standard errors are clustered at the firm level.

**Parallel trends validation.** An event-study specification (eq. 2 below) tests whether pre-regulation beta differences between treatment and control firms are statistically zero. Figure 1 (p. 8) confirms no significant pre-trend differences for 2010-2013, with positive and significant post-treatment coefficients from 2014 onward.

**PSM-matched DiD.** To address observable pre-period differences, each CSR-exposed firm is matched (nearest-neighbor with replacement) to a non-exposed control on Leverage, Tangibility, Sales Growth, Market-to-Book ratio, and Firm Age during the pre-shock period (Section 5.5, p. 7). The matched sample comprises 5,258 firm-year observations.

**MRDD.** Following Manchiraju and Rajgopal (2017), a multivariate regression discontinuity design (MRDD) constructs a composite binding score M = min(R1, R2, R3), where R1 = (Profit - 50)/50, R2 = (Book value - 5,000)/5,000, and R3 = (Sales - 10,000)/10,000 (all thresholds in INR millions). Firms with M > 0 are treated; M < 0 are controls. The rdrobust command (Calonico et al., 2014) provides bias-corrected and robust inference (Section 5.6, pp. 8-9).

**Tail-risk measures.** MES and delta CoVaR (Section 7.3, pp. 14-15) are used as alternative outcome measures. MES captures a firm's average return on days when the market falls in the bottom 5% of its distribution; delta CoVaR captures how much the system's downside VaR worsens when a firm moves from its median to its distressed state. Both are estimated over the same DiD framework as eq. 1.

**DOL mediation.** A two-stage approach identifies the operating leverage channel (Section 8.2, pp. 17-18). Stage 1 estimates each firm's ΔDOL from a regression of log EBIT on log Sales interacted with the CSR Dummy. Stage 2 tests whether post-mandate changes in DOL account for the increase in beta, via a triple interaction (CSR Dummy x Treatment Firms x ΔDOL) in the beta regression.

## Empirical specifications

**Main DiD regression** (eq. 1, p. 6), producing R1-R2:

$$\text{Beta}_{it} = \alpha + \beta_1\text{CSR Dummy}_t + \beta_2\text{Treatment Firms}_i + \beta_3(\text{CSR Dummy}_t \times \text{Treatment Firms}_i) + \beta_4\text{Size}_{it} + \beta_5\text{ROA}_{it} + \beta_6\text{Tangibility}_{it} + \beta_7\text{MB}_{it} + \beta_8\text{Leverage}_{it} + \beta_9\text{Firm Age}_{it} + \varepsilon_{it} \tag{1}$$

where $$\text{Beta}_{it}$$ is equity beta estimated from daily returns against the NSE Nifty 50 index (minimum 100 trading days per year); $$\text{CSR Dummy}_t = 1$$ for 2015-2019 (post-regulation) and 0 for 2010-2014; $$\text{Treatment Firms}_i = 1$$ for the 662 firms legally compelled to begin CSR spending. The coefficient of interest is $$\beta_3$$. All specifications include year and industry (firm x year) fixed effects; errors clustered at the firm level (Table 3).

**Parallel trends event study** (eq. 2, p. 7):

$$\text{Beta}_{it} = \sum_{p \neq 0} \delta_p (D_p \times \text{Treatment Firms}_i) + X_{it}\gamma + \mu_i + \lambda_t + \varepsilon_{it} \tag{2}$$

where $$D_p$$ is a year dummy (omitted base year: 2014), $$\mu_i$$ are firm fixed effects, and $$\lambda_t$$ are year fixed effects. Pre-regulation coefficients $$\delta_{-4}, \delta_{-3}, \delta_{-2}, \delta_{-1}$$ should be indistinguishable from zero; post-regulation coefficients $$\delta_1$$ to $$\delta_5$$ are expected to be positive (Figure 1, p. 8).

**MES definition** (eq. 3, p. 14), producing R5:

$$\text{MES}_{j,t} = \frac{1}{N_t} \sum_{d \in D_t} R_{j,d} \tag{3}$$

where $$D_t$$ is the set of trading days on which the market falls in the bottom 5% of its return distribution, $$N_t$$ is the number of such days in year $$t$$, and $$R_{j,d}$$ is firm $$j$$'s return on day $$d$$. MES is multiplied by $$-1$$ so higher values indicate greater systemic vulnerability.

**Delta CoVaR** (eqs. 4-6, p. 14), producing R6. The tail-event VaR for firm $$j$$ is defined by:

$$\Pr\!\left(r_j \leq \text{VaR}_{j,5\%}\right) = 5\% \tag{4}$$

The system's CoVaR conditional on firm $$j$$ being in distress:

$$\Pr\!\left(r_{\{j\}} \leq \text{CoVaR}_{\text{system}|j},\; r_j = \text{VaR}_{j,5\%}\right) = 5\% \tag{5}$$

$$\Delta\text{CoVaR}(r_{\{j\}}, 1\%) = \text{CoVaR}(r_{\{j\}} \mid j, 1\%) - \text{CoVaR}(r_{\{j\}} \mid j, 50\%) \tag{6}$$

Delta CoVaR is estimated via quantile regression conditioning on firm $$j$$'s median vs distressed state, with lagged market return, volatility (VIX), Treasury bill yield, and term premium as state variables.

**DOL estimation** (eq. 7, p. 17), providing the baseline DOL measure:

$$\ln(\text{EBIT}_{it}) = \alpha + \beta \ln(\text{Sales}_{it}) + \varepsilon_{it} \tag{7}$$

where $$\beta$$ is the firm's degree of operating leverage.

**Extended DOL with CSR mandate** (eq. 8, p. 17), producing R7 first stage (Table 8):

$$\begin{aligned} \ln(\text{EBIT}_{it}) = \alpha &+ \beta_1\text{CSR Dummy}_t + \beta_2\text{Treatment Firms}_i + \beta_3(\text{CSR Dummy}_t \times \text{Treatment Firms}_i) \\ &+ \beta_4(\text{Treatment Firms}_i \times \ln\text{Sales}_{it}) + \beta_5(\text{CSR Dummy}_t \times \text{Treatment Firms}_i \times \ln\text{Sales}_{it}) + X_{it}\gamma + \varepsilon_{it} \end{aligned} \tag{8}$$

$$\beta_5$$ captures whether mandated firms become more sensitive to sales in the post-regulation period. The estimate 0.023\*\* (t=2.270, Table 8 col. 2) implies a 1% change in sales corresponds to a ~2.3% larger change in operating profit for treatment firms after the mandate.

**First-stage DOL mediation** (eq. 9, p. 18), estimated per firm to recover ΔDOL:

$$\ln(\text{EBIT}_{it}) = \alpha + \beta_1\text{CSR Dummy}_t + \beta_2(\text{CSR Dummy}_t \times \ln\text{Sales}_{it}) + \beta_3\ln\text{Sales}_{it} + X_{it}\gamma + \varepsilon_t \tag{9}$$

Here $$\beta_2$$ measures the firm's change in DOL (ΔDOL) in the post-regulation period. The coefficient on $$\text{CSR Dummy}_t \times \text{Treatment Firms}_i \times \ln\text{Sales}_{it}$$ in Table 8 confirms ΔDOL is positive and significant for mandated firms.

**Second-stage DOL mediation** (eq. 10, p. 18), producing R7 (Table 9):

$$\text{Beta}_{it} = \alpha + \beta_1\text{CSR Dummy}_t + \beta_2(\text{CSR Dummy}_t \times \text{Treatment Firms}_i) + \beta_3(\text{CSR Dummy}_t \times \text{Treatment Firms}_i \times \Delta\text{DOL}_i) + \beta_4\text{Treatment Firms}_i + X_{it}\gamma + \varepsilon_{it} \tag{10}$$

$$\beta_3$$ tests whether firms with larger post-mandate increases in DOL exhibit correspondingly higher systematic risk. The estimate 0.013\*\*\* (t=3.556, Table 9 col. 1) is economically significant: with SD(ΔDOL) = 2.4, a one-standard-deviation rise in ΔDOL is associated with a beta increase of approximately 0.031 for mandated firms.

**Profit cyclicality** (eq. 11, p. 19), producing R8 (Table 10):

$$\Delta\text{ROA}_{it} = \alpha + \beta_1\text{CSR Dummy}_t + \beta_2(\text{CSR Dummy}_t \times \text{Treatment Firms}_i) + \beta_3(\text{CSR Dummy}_t \times \text{Treatment Firms}_i \times \text{GDP growth}_t) + \text{Controls} + \varepsilon_{it} \tag{11}$$

$$\beta_3$$ captures whether mandated firms' operating profits become more sensitive to GDP growth after the regulation. The estimate 0.007\*\* (Table 10 col. 1) confirms that CSR-exposed firms are more vulnerable to aggregate economic shocks, consistent with higher systematic risk via the operating leverage channel.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CMIE Prowess | Primary source: firm financials (profit/loss, balance sheet, financial ratios, share prices, stock returns), annual 2010-2019 for all Indian non-financial listed firms | no page yet |

Sample: 8,671 firm-year observations from 930 unique firms (2010-2019), of which 662 treatment firms (6,332 firm-years) and 268 control firms (2,339 firm-years). Beta estimated from daily returns against the NSE Nifty 50 index; firm-years with fewer than 100 trading days excluded. All variables winsorized at the 2% tails.

Rajgopal and Tantri (2023) noted that firms that voluntarily spent more than 2% of average profits on CSR prior to the mandate subsequently reduced their CSR expenditures; the paper excludes these voluntary pre-spenders from the treatment group to keep it clean.

## When to read the full paper

Read the original when studying: (1) the causal effect of mandatory ESG or CSR regulations on corporate risk, using India's Section 135 as a quasi-natural experiment with a clean statutory eligibility rule; (2) the two-stage DOL mediation design (eqs. 7-10) for tracing a compliance-cost channel through to systematic risk; or (3) MRDD methodology applied to multi-threshold eligibility rules following the composite score approach (Table 6). The appendix (Table A1, p. 21) defines all variables; Tables A2-A10 provide the full robustness suite (pre-mandate CSR orientation, voluntary spenders, direct CSR-spending regressions, industry concentration, alternative systematic risk measures, confounding governance reforms, and advertising substitution).

## Attribution and rights

Chauhan, Y., Ghosh, C., and Jadiyappa, N. (2026). Mandatory CSR spending and firm risk: New evidence from regulatory intervention in India. *Journal of Corporate Finance*, 98, 102965. https://doi.org/10.1016/j.jcorpfin.2026.102965

Copyright 2026 Elsevier B.V. All rights reserved, including those for text and data mining, AI training, and similar technologies. This page is an LLM-distilled extract (not human-verified, not reproduced). Access the original at [doi.org/10.1016/j.jcorpfin.2026.102965](https://doi.org/10.1016/j.jcorpfin.2026.102965).
