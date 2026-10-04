---
title: "Air Pollution and Bank Loan Pricing: Li et al. (2026)"
description: >-
  Distilled: Using proprietary loan data from a Chinese state-owned commercial bank
  linked to firm-level ESR emissions, Li et al. find a positive association between
  emissions and loan spreads, with labor risk and environmental transition risk as
  proposed channels. A PSM-DID around China's 2013 Air Pollution Prevention and
  Control Action Plan finds lower spreads for treated firms after the plan. Journal of Banking and Finance 185 (2026),
  paywalled. Thirteen core results with source locators, datasets, and estimating
  specifications.
sidebar:
  label: Li et al. 2026
  order: 1
tags: [paper-summary, environmental-finance, bank-lending, air-pollution, credit-pricing,
       china, panel-regression, difference-in-differences, peer-reviewed, unreplicated,
       data:esr-china, data:csmar, data:wustl-pm25]
paper:
  authors: Donghui Li, Jian Sun, Rui Xu, Chun Yuan, Liyi Zhu
  authorList:
    - { family: Li, given: Donghui, affiliation: Shenzhen University }
    - { family: Sun, given: Jian, orcid: "0000-0002-8049-3487", affiliation: Central University of Finance and Economics }
    - { family: Xu, given: Rui, orcid: "0000-0002-5574-0028", affiliation: Guangdong University of Foreign Studies }
    - { family: Yuan, given: Chun, affiliation: Central University of Finance and Economics }
    - { family: Zhu, given: Liyi, orcid: "0009-0006-9257-087X", affiliation: Capital University of Economics and Business }
  year: 2026
  venue: Journal of Banking and Finance 185 (2026) 107655
  venueShort: J. Banking Finance 2026
  tier: field
  doi: 10.1016/j.jbankfin.2026.107655
  jel:
    codes: [G21, G32, Q53]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Energy, Environment, Economic Growth", "Corporate Social Responsibility Reporting", "Sustainable Finance and Green Bonds"]
  dataAccess: proprietary-confidential
  outcome:
    - bank loan spread (actual rate minus PBOC benchmark)
    - total loan volume extended to borrowing firm
    - mortgage-related loan contract terms
  outcomeClass: [firm-financing, credit-supply]
  license: "© 2026 Elsevier B.V. All rights reserved, including those for text and data mining, AI training, and similar technologies. No open-access or CC licence found in Crossref metadata; licence blocks are tdm and stm-asf only."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 13
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences, matching]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [labor-risk, transition-risk]
  introducesData: true
  scope:
    region: China
    assetClass: corporate loans (Chinese listed firms)
    period: 2007-01..2019-12
    frequency: annual
    dataType: [accounting, administrative, other]
    granularity: [firm, transaction]
    n: "55,483 loan-level observations, 745 firms, 175 cities, 2007-2019"
  findings:
    - { ref: R1, outcome: "bank loan spread", metric: coefficient, value: "0.047*** (t=3.20); 1-SD increase in emissions is equivalent to 17.85% of mean loan spread", direction: positive }
    - { ref: R2, outcome: "bank loan spread", metric: coefficient, value: "0.062*** (t=4.58) in PSM-OLS (N=42,530)", direction: positive, vsBenchmark: "confirms baseline after PSM selection correction" }
    - { ref: R3, outcome: "bank loan spread", metric: coefficient, value: "Treatpost = -0.124*** (t=-3.07) in PSM-DID", direction: negative, vsBenchmark: "Air Pollution Control Plan reduces spreads for treated high-pollution firms" }
    - { ref: R4, outcome: "bank loan spread", metric: coefficient, value: "Airpollution x Bankruptcy_dummy = 0.039*** (t=3.34); x Educated_dummy = 0.031** (t=2.33); x Technical_dummy = 0.028** (t=2.00)", direction: positive, vsBenchmark: "labor risk channel: premium concentrated in firms with high bankruptcy risk or low-skill workforce" }
    - { ref: R5, outcome: "bank loan spread", metric: coefficient, value: "Airpollution x Violation_dummy = 0.065** (t=2.40); x Gsubsidy_dummy = 0.021** (t=2.00); x Greeninno_dummy = 0.024** (t=1.97)", direction: positive, vsBenchmark: "transition risk channel: concentrated in firms with environmental violations or weak green support" }
    - { ref: R6, outcome: "bank loan spread", metric: coefficient, value: "Political=0: 0.052*** (t=3.16); Political=1: 0.018 (t=0.97)", direction: positive, vsBenchmark: "only the estimate for politically unconnected firms is statistically significant; the table note describes bootstrap coefficient-difference tests but reports no p-value" }
    - { ref: R7, outcome: "bank loan spread", metric: coefficient, value: "Weak governance: 0.079*** (t=4.67); strong governance: -0.002 (t=-0.11)", direction: mixed, vsBenchmark: "only the estimate for provinces with weak environmental governance is statistically significant; the table note describes bootstrap coefficient-difference tests but reports no p-value" }
    - { ref: R8, outcome: "total loan volume and mortgage contract terms", metric: coefficient, value: "Sum_volume: -0.017* (t=-1.67); Mortgage_terms: 0.009** (t=2.08)", direction: mixed, vsBenchmark: "air pollution tightens non-price terms: less credit extended, more mortgage requirements" }
    - { ref: R9, outcome: "bank loan spread", metric: coefficient, value: "Pre3×Treat = 0.079 (t=0.71), Pre2×Treat = -0.065 (t=-0.57), Current×Treat = 0.104 (t=0.95); Post1×Treat = -0.287*** (t=-3.58), Post2×Treat = -0.167* (t=-1.92)", direction: mixed, vsBenchmark: "pre-period estimates are insignificant; post-policy estimates are negative" }
    - { ref: R10, outcome: "bank loan spread", metric: coefficient, value: "Airpollution×Labor_risk = 0.060*** (t=2.81); Airpollution×Transition_risk = 0.086*** (t=3.12); Airpollution terms = 0.011 (t=0.93) and 0.006 (t=0.49)", direction: positive, vsBenchmark: "each composite risk index is interacted with emissions in a separate specification" }
    - { ref: R11, outcome: "bank loan spread", metric: coefficient, value: "Headquarter clients: 0.006 (t=0.46); non-headquarter clients: 0.054*** (t=3.82)", direction: positive, vsBenchmark: "only the estimate for non-headquarter clients is statistically significant; the table note describes bootstrap coefficient-difference tests but reports no p-value" }
    - { ref: R12, outcome: "bank loan spread", metric: coefficient, value: "SO2 = 0.001 (t=1.25); NOx = 0.002* (t=1.76); Smoke = 0.002** (t=2.54)", direction: positive, vsBenchmark: "all three estimates are positive; smoke is the largest and statistically strongest while SO2 is insignificant" }
    - { ref: R13, outcome: "bank loan spread", metric: coefficient, value: "Credit loans = 0.025** (t=2.33); secured loans = -0.006 (t=-0.25); mortgage/pledge loans = 0.004 (t=0.37)", direction: mixed, vsBenchmark: "significant premium appears only for unsecured credit loans" }
  resultType: mixed
  relatesTo:
    - { cite: "Bolton and Kacperczyk (2021)", relation: extends, note: "extends evidence on pollution premiums from equity returns to bank loan markets" }
    - { cite: "Hsu et al. (2023)", doi: '10.1111/jofi.13217', relation: extends, note: "extends environmental transition risk evidence to bank loans using firm-level ESR data" }
    - { cite: "Graham et al. (2008)", relation: builds-on, note: "builds on the determinants-of-bank-loan-pricing framework (firm characteristics, loan attributes)" }
    - { cite: "Barwick et al. (2024)", doi: '10.1257/aer.20200956', relation: tests, note: "PSM-DID result partially supports their finding that environmental regulation can ease bank creditors' concerns" }
    - { cite: "Houston et al. (2014)", doi: '10.1111/1475-679x.12038', relation: builds-on, note: "builds on political connections and loan pricing to motivate the political connection cross-section test" }
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-16 including all tables and appendices); eight results extracted from the paywalled PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 Core results rows confirmed against Tables 2-9 and A3; Eq. (1) and Eq. (2) verified term-by-term; outcome classes, metric slugs, and relatesTo cites all valid; no errors found." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the source PDF and augmented the Core results table with five additional findings, corresponding findings metadata, mechanism vocabulary proposals, and the event-study, mechanism, cross-sectional, and non-price estimating specifications. These additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 13 Core results rows, equations and specifications, classifications, findings, frontmatter, and related-work edges against the PDF; corrected the Table 2 fixed-effect claim, removed unreported Table 8 p-values, and clarified the horse-race results. Table 2 prose conflicts with its displayed fixed-effect indicators." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107655", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains only tdm (elsevier.com/tdm/userlicense/1.0/) and stm-asf (doi.org/10.15223/policy-*) blocks; no CC or open-access licence present; paper is paywalled" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, identification strategy, estimating equations, and key datasets: enough to understand what it found and how, without reading the full paper. To replicate or extend, read the original at [https://doi.org/10.1016/j.jbankfin.2026.107655](https://doi.org/10.1016/j.jbankfin.2026.107655).

## TL;DR

Using a proprietary loan dataset from a nationwide Chinese state-owned commercial bank (55,483 loan observations, 745 borrowing firms in 175 cities, 2007-2019) linked to firm-level air pollutant emissions from China's Environmental Survey and Reporting (ESR) database, this paper finds that higher emissions are associated with higher bank loan spreads. In the richest Table 2 specification, a one-standard-deviation increase in emissions is equivalent to 17.85% of the mean loan spread (Table 2, Col. 4, p. 5). A PSM-DID around China's 2013 Air Pollution Prevention and Control Action Plan finds lower loan pricing for treated high-pollution firms after the plan (Table 3). The authors propose labor risk, through skilled-worker retention and borrower risk, and environmental transition risk as mechanisms. Interactions support both channels separately; in the joint horse-race, one labor-risk and two transition-risk interactions remain significant. The emissions association is present in the unconnected-firm, weak-governance-province, and non-headquarter subsamples. Emissions are also associated with lower total credit volume and increased mortgage-related contract terms.

## Core results

Magnitudes as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Air pollutant emissions positively predict bank loan spread in the richest Table 2 specification, with firm and year fixed effects and firm and loan controls; borrower-category and risk-type fixed effects are reported as absent in Table 2 | Table 2, Col. (4), p. 5 | Airpollution = 0.047\*\*\* (t=3.20); 1-SD increase is equivalent to 17.85% of mean loan spread; N=55,483 |
| R2 | PSM-OLS confirms the baseline: positive and significant after controlling for self-selection of high-polluting firms | Table 3, Panel B, Col. (1), p. 6 | Airpollution = 0.062\*\*\* (t=4.58); N=42,530 |
| R3 | PSM-DID: the 2013 Air Pollution Control Action Plan significantly reduces loan pricing for treated high-pollution firms; parallel trends confirmed pre-shock | Table 3, Panel B, Col. (2), p. 6; Table 4, p. 7 | Treatpost = -0.124\*\*\* (t=-3.07); pre-period interactions Pre3\*Treat and Pre2\*Treat insignificant |
| R4 | Labor risk channel: pollution premium concentrated in firms lacking high-skill workers or with higher bankruptcy risk | Table 5, Cols. (1)-(3), p. 8 | Airpollution × Educated\_dummy = 0.031\*\* (t=2.33); × Technical\_dummy = 0.028\*\* (t=2.00); × Bankruptcy\_dummy = 0.039\*\*\* (t=3.34) |
| R5 | Transition risk channel: premium concentrated in firms with weak green innovation, rich environmental violation records, or low green subsidy support | Table 6, Cols. (1)-(3), p. 8 | Airpollution × Greeninno\_dummy = 0.024\*\* (t=1.97); × Violation\_dummy = 0.065\*\* (t=2.40); × Gsubsidy\_dummy = 0.021\*\* (t=2.00) |
| R6 | Cross-section: the emissions estimate is significant only for politically unconnected firms; the paper proposes implicit political insurance as an explanation | Table 8, Cols. (1)-(2), p. 10 | Political=0: 0.052\*\*\* (t=3.16); Political=1: 0.018 (t=0.97); table note describes bootstrap difference tests but reports no p-value |
| R7 | Cross-section: the emissions estimate is significant only in provinces with weak environmental governance; strong-governance regions show no effect | Table 8, Cols. (3)-(4), p. 10 | Weak governance: 0.079\*\*\* (t=4.67); strong governance: -0.002 (t=-0.11); table note describes bootstrap difference tests but reports no p-value |
| R8 | Air pollution tightens non-price contract terms: reduces total credit volume and increases mortgage requirements | Table 9, Cols. (1)-(2), p. 11 | Sum\_volume: Airpollution = -0.017\* (t=-1.67); Mortgage\_terms: 0.009\*\* (t=2.08) |
| R9 | Event-study identification check: treated-control loan-spread differences are absent before the plan and negative after it | Table 4, p. 7; Figure 1, p. 7 | Pre3×Treat = 0.079 (t=0.71), Pre2×Treat = -0.065 (t=-0.57), Current×Treat = 0.104 (t=0.95); Post1×Treat = -0.287\*\*\* (t=-3.58), Post2×Treat = -0.167\* (t=-1.92); N=42,530 |
| R10 | Composite risk-index tests support distinct labor and transition channels | Table 7, Cols. (1)-(2), p. 9 | Airpollution×Labor\_risk = 0.060\*\*\* (t=2.81); Airpollution×Transition\_risk = 0.086\*\*\* (t=3.12); corresponding Airpollution terms = 0.011 (t=0.93) and 0.006 (t=0.49) |
| R11 | The emissions estimate is significant among non-headquarter clients, but not headquarter clients | Table 8, Cols. (5)-(6), p. 10 | Headquarter clients: Airpollution = 0.006 (t=0.46), N=9,251; non-headquarter clients: 0.054\*\*\* (t=3.82), N=46,232; table note describes bootstrap difference tests but reports no p-value |
| R12 | Emissions-species split: the strongest measured pollution premium is for smoke; SO2 is null | Table A1, p. 14 | SO2 = 0.001 (t=1.25); NOx = 0.002\* (t=1.76); Smoke = 0.002\*\* (t=2.54); N=55,483 in each specification |
| R13 | Loan-type split: the premium appears for unsecured credit loans, with null estimates for secured and mortgage/pledge loans | Table A2, pp. 14-15 | Credit loans: Airpollution = 0.025\*\* (t=2.33), N=32,293; secured loans: -0.006 (t=-0.25), N=13,309; mortgage/pledge loans: 0.004 (t=0.37), N=9,881 |

**Overall (paper's conclusion).** Firm-level air pollutant emissions, measured using annual ESR data, are positively associated with bank loan spreads in China; the PSM-DID analysis also finds lower spreads for treated firms after the 2013 action plan. The paper presents labor risk and environmental transition risk as complementary mechanisms. In the joint horse-race, the bankruptcy-risk interaction and two transition-risk interactions remain significant, while the other three interaction terms do not. The premium is concentrated in firms without political connections, provinces with weak environmental governance, and non-headquarter clients. Beyond price, emissions are associated with lower total lending volume and more mortgage-related contract changes. The species estimates are largest and most statistically significant for smoke, and the loan-type premium is significant for unsecured credit loans; secured and mortgage/pledge loan estimates are insignificant. Bolton and Kacperczyk (2021) studied pollution premiums in equity markets; this paper extends evidence to Chinese bank loans and relates to the pollution-premium evidence of Hsu et al. (2023).

## Theory / model

This paper has no formal theoretical model. The two tested hypotheses are derived from prior literature and stated as verbal mechanisms:

**Hypothesis 1 (main).** *Ceteris paribus*, firms with higher air pollutant emissions are charged higher bank loan prices than firms with lower emissions (pp. 2-3).

**Channel 1: Labor risk.** Air pollutant emissions have an adverse impact on employee health and retention, especially for skilled workers with higher education or technical background. This results in lower operational efficiency and greater default risk for the borrower. Following Liu and Yu (2020) and Xue et al. (2021), employees at high-pollution firms "vote with their feet," depressing productivity and raising expected credit losses for the bank lender. The mechanism is tested by interacting emissions with borrower-level proxies for the proportion of educated staff (Educated\_dummy), technical staff (Technical\_dummy), and bankruptcy risk (Bankruptcy\_dummy).

**Channel 2: Transition risk.** Schneider (2011) and Hsu et al. (2023) document that environmental transition risk, the cost of shifting toward a low-carbon economy, is elevated for high-pollution firms. Funding green production, meeting regulatory obligations, and managing the risk of factory shutdowns or contract termination raises the cash-flow concerns that lenders must price. The mechanism is tested via interactions with green innovation experience (Greeninno\_dummy), environmental violation records (Violation\_dummy), and government green subsidies (Gsubsidy\_dummy).

**Identification logic.** Because air pollution and loan pricing may share unobserved determinants, the paper exploits the Air Pollution Prevention and Control Action Plan promulgated by China's State Council in 2013 as an exogenous shock. Firms above the industry-year median emission intensity are designated as treated; propensity-score matching (PSM) balances pre-treatment covariates. The DID design compares treated and control firms before and after 2013, isolating the causal effect of the regulatory reduction in pollution on loan pricing. The parallel trend assumption is validated by insignificant pre-period coefficients in Table 4 (p. 7).

## Method

The paper applies standard OLS panel regression for the baseline, and a two-step PSM-DID for causal identification. It builds on `panel-regression` (multi-way fixed effects), `difference-in-differences` (pre/post policy shock), and `matching` (propensity-score matching on firm characteristics).

**Baseline OLS.** The estimating equation (Eq. 1, p. 3) is:

$$
\text{Loan\_spread}_{ijt} = \alpha + \beta \, \text{Airpollution}_{it-1} + \delta \, \text{Controls} + \text{FirmFE} + \text{LoanAttributesFE} + \text{YearFE} + \varepsilon_{ijt} \tag{1}
$$

where $$\text{Loan\_spread}_{ijt}$$ is the actual loan rate on loan $$j$$ of firm $$i$$ in year $$t$$ minus the PBOC benchmark rate, $$\text{Airpollution}_{it-1}$$ is the year-specific air pollutant emission volume lagged one year to mitigate endogeneity, and $$\text{Controls}_{t-1}$$ includes loan attributes (Volume, Maturity, Collateral) and firm attributes (Firmsize, Lev, Soe, Roa, Growth, Tangible, Age, BM, Cash\_holding). In the equation's notation, LoanAttributesFE refers to borrower-category and loan-risk-type fixed effects. Table 2 itself marks both of those fixed effects as absent in every column, while its prose and note say the richest specification adds them; the table and accompanying description conflict. Standard errors are clustered at the firm level; the baseline has 55,483 loan-level observations from 745 firms in 175 cities over loan years 2008-2019 (pp. 3-5).

**PSM-DID.** After PSM matching on 2012 (pre-policy) firm characteristics, the DID equation (Eq. 2, p. 4) is:

$$
\text{Loan\_spread}_{ijt} = \alpha + \beta \, \text{Treatpost}_{it-1} + \delta \, \text{Controls} + \text{FirmFE} + \text{LoanAttributesFE} + \text{YearFE} + \varepsilon_{ijt} \tag{2}
$$

where $$\text{Treatpost}$$ equals one for firms above the industry-year median emission intensity in the post-2013 period. The coefficient $$\beta$$ identifies the policy-induced change in loan pricing for treated firms relative to matched controls. Matching variables are Firmsize, Lev, Growth, Roa, Age, BM, and Cash\_holding; 1:1 nearest-neighbor matching without replacement is used. Balance tests are in Table 3, Panel A (p. 6).


## Empirical specifications


The event-study identification check replaces Treatpost with treatment-by-event-time indicators (Table 4, p. 7):

$$
\text{Loan\_spread}_{ijt} = \alpha + \sum_{k \neq -1} \beta_k (\text{Treat}_i \times \text{EventYear}_{kt}) + \delta \text{Controls}_{t-1} + \text{FirmFE} + \text{LoanAttributesFE} + \text{YearFE} + \varepsilon_{ijt}
$$

Pre1 is the reference period; reported event-time coefficients are Pre3, Pre2, Current, Post1, and Post2. This matched-sample regression includes firm, year, borrower-category, and risk-type fixed effects, firm-clustered standard errors, and N=42,530 (Table 4, p. 7).

**Baseline (R1).** Table 2 (p. 5) reports four progressively richer columns: (1) air pollution only, with no fixed effects or controls; (2) adds firm and year fixed effects; (3) adds firm-level controls; and (4) adds loan-level controls. Table 2 marks borrower-category and risk-type fixed effects as absent in all columns, despite the prose and note saying Col. (4) adds them. In Col. (4), Airpollution = 0.047\*\*\* (t=3.20), implying an effect equal to 17.85% of mean loan spread per standard deviation of emissions (calculation: 0.047 × 4.783 / 1.259, where 4.783 = SD of Airpollution and 1.259 = mean of Loan\_spread, Table 1).

**PSM-DID (R2, R3).** Table 3, Panel B (p. 6), Col. (1) is PSM-OLS on the matched sample: Airpollution = 0.062\*\*\* (t=4.58). Col. (2) is PSM-DID: Treatpost = -0.124\*\*\* (t=-3.07), confirming that the 2013 regulation causally reduces spreads for high-pollution firms. All columns include firm, year, borrower-category, and risk-type fixed effects; standard errors are clustered by firm; the matched-sample PSM-OLS and DID have N=42,530 (Table 3, p. 6). The Graham et al. (2008) framework for loan-pricing determinants motivates the choice of control variables.

**Parallel trend test (R3 supplement).** Table 4 (p. 7) replaces Treatpost with interactions of Treat with year dummies. Pre-period interactions (Pre3\*Treat, Pre2\*Treat) are insignificant (t=0.71, -0.57). Post-period interactions (Post1\*Treat, Post2\*Treat) are significantly negative (t=-3.58, -1.92), consistent with causal post-policy reduction. Figure 1 (p. 7) plots the coefficient path with 95% confidence intervals.

**Mechanism tests (R4, R5).** Tables 5-6 (pp. 8) add triple-interaction terms Airpollution × mechanism\_dummy to Eq. (1). Subgroup dummies (Educated\_dummy, Technical\_dummy, Bankruptcy\_dummy for labor risk; Greeninno\_dummy, Violation\_dummy, Gsubsidy\_dummy for transition risk) take the value one for firms in the riskier half of each proxy distribution. All interaction coefficients are positive and significant at 5-10%, confirming both channels. Table A3 (p. 15) horse-races all six interactions jointly; Bankruptcy\_dummy (t=3.58) and Violation\_dummy (t=2.24) and Gsubsidy\_dummy (t=2.85) remain significant, supporting channel independence.

**Cross-sectional heterogeneity (R6, R7).** Table 8 (p. 10) splits the sample by political connection (Political = 0 vs. 1), regional environmental governance, and borrower headquarters status. Envir\_governance = 1 denotes provinces with pollution treatment costs above the year-specific median (strong governance); 0 denotes the remaining provinces (weak governance). The table note says bootstrap tests are used for coefficient differences but gives no p-values. For Houston et al. (2014), politically connected borrowers may benefit from implicit government guarantees that attenuate pollution risk; the estimate is significant only for Political=0 firms. Barwick et al. (2024) find environmental regulation eases creditor concerns; this is consistent with the PSM-DID result.

**Non-price terms (R8).** Table 9 (p. 11) re-estimates Eq. (1) with two non-price outcomes: Sum\_volume (total annual loan volume from the bank to the borrowing firm) and Mortgage\_terms (change in mortgage-related contract terms). The regression is at the firm-year level. Both Airpollution coefficients have the expected sign and are statistically significant, indicating that pollution tightens credit quantity and collateral requirements, not only the interest rate.

**Robustness.** Alternative explanatory variables (Airpollution\_revenue: emission intensity scaled by revenue; separate SO2, NOx, smoke-dust regressions in Table A1), alternative outcome variables (Actual\_rate, Loan\_spread2, Loan\_spread3 in Table A4), province-year and industry-year FE replacing year FE (Tables A5), branch-bank FE (Table A5, Col. 4), and exclusion of the 2008 financial crisis period and non-SOE borrowers (Table A6) all confirm positive and significant Airpollution coefficients.

**Mechanism and composite-index specifications.** Tables 5-7 interact lagged emissions with channel proxies and composite indices, retaining controls and the fixed effects listed in those tables (Tables 5-7, pp. 8-9):

$$
\text{Loan\_spread}_{ijt} = \alpha + \beta \text{Airpollution}_{i,t-1} + \theta (\text{Airpollution}_{i,t-1} \times \text{RiskProxy}_{i,t-1}) + \lambda \text{RiskProxy}_{i,t-1} + \delta \text{Controls}_{t-1} + \text{FirmFE} + \text{LoanAttributesFE} + \text{YearFE} + \varepsilon_{ijt}
$$

The separate proxy regressions cover Educated_dummy, Technical_dummy, Bankruptcy_dummy, Greeninno_dummy, Violation_dummy, and Gsubsidy_dummy. Table A3 horse-races all six interaction terms together (p. 15): the Bankruptcy_dummy, Violation_dummy, and Gsubsidy_dummy interactions are significant; the other three are not. Table 7 substitutes Labor_risk and Transition_risk, each formed as the average of its three component indicators (p. 9). These loan-level regressions include firm, year, borrower-category, and risk-type fixed effects; standard errors are clustered by firm; N=55,483 for Tables 5-7 and Table A3.

**Cross-sectional and non-price specifications.** Table 8 re-estimates Eq. (1) in groups defined by Political, Envir_governance, and Headquarter (p. 10). Each group regression retains firm, year, borrower-category, and risk-type fixed effects and firm-clustered standard errors; group sample sizes are reported in the R6, R7, and R11 rows. Bootstrap tests use 1,000 repetitions for coefficient differences (Table 8 note, p. 10). Table 9 uses a firm-year specification with firm-level controls for non-price outcomes (p. 11):

$$
\text{Outcome}_{it} = \alpha + \beta \text{Airpollution}_{i,t-1} + \delta \text{FirmControls}_{i,t-1} + \text{FirmFE} + \text{YearFE} + \varepsilon_{it}
$$

The outcomes are Sum_volume and Mortgage_terms; both regressions include firm and year fixed effects, firm-clustered standard errors, and N=3,052 (Table 9, p. 11). Appendix Tables A1 and A2 re-estimate Eq. (1) separately by pollutant species and loan type. Each includes firm, year, borrower-category, and risk-type fixed effects and firm-clustered standard errors, with subgroup Ns shown in R12 and R13 (pp. 14-15).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Environmental Survey and Reporting (ESR) database, China | Main explanatory variable: firm-year air pollutant emissions (tons); jointly managed by Ministry of Environmental Protection and National Bureau of Statistics; self-reported and government-audited | No page yet |
| China Stock Market Accounting Research (CSMAR) | Firm-level financial and governance controls (size, leverage, ROA, BM, tangibility, state ownership, etc.); lagged one year | [CSMAR](/wiki/commercial/csmar/) (licensed) |
| Proprietary state-owned commercial bank loan data | Main dataset: 61,718 raw loan observations (55,483 after exclusions) from 745 firms in 175 cities; annual credit exceeding RMB 50 million; nationwide deposit and loan network; covers 2008-2019 | No page yet (proprietary) |
| Washington University satellite PM2.5 data | City-level PM2.5 concentrations (ug/m³) from the Atmospheric Composition Analysis Group; used for city-level robustness analysis (not the main explanatory variable) | No page yet |

Sample period: air pollution controls 2007-2018 (lagged to match loan data 2008-2019); final loan-level sample 55,483 observations, annual frequency.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2026.107655) if you are: studying how environmental risk gets priced into bank loan markets (Tables 2-4 contain the headline regressions); designing a study that uses China's ESR emission database or proprietary bank loan data (Sections 3.1 and Appendix B contain the variable construction); working on the mechanisms linking pollution to firm credit risk (Tables 5-7 and Appendix C break down emission types and loan types); or extending this evidence to other countries, private banks, or post-2019 periods (the paper's own institutional scope is limited to one Chinese state-owned bank, 2007-2019).

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 185 (2026), article 107655. © 2026 Elsevier B.V. All rights reserved. This paper is paywalled; no open-access or CC licence was found in Crossref metadata as of 2026-06-25. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Extract-only; the verbatim PDF is not hosted here.

> Li, Donghui, Jian Sun, Rui Xu, Chun Yuan, and Liyi Zhu. "Air pollution and bank loan pricing."
> *Journal of Banking and Finance* 185 (2026): 107655.
> DOI: [10.1016/j.jbankfin.2026.107655](https://doi.org/10.1016/j.jbankfin.2026.107655)
