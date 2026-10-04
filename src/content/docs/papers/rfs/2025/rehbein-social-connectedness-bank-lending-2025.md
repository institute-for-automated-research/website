---
title: "Social Connectedness in Bank Lending: Rehbein & Rother (2025)"
description: >-
  Distilled: Using Facebook's Social Connectedness Index, Rehbein and Rother
  show that bank lending volumes, borrower-friendly loan terms, and bank
  profitability all increase with social connectedness between bank and borrower
  counties, while fintech lending is unaffected. Review of Financial Studies
  2025, paywalled. Sixteen core results with source locators, datasets used, the
  empirical model, and the complete numbered specifications.
sidebar:
  label: Rehbein-Rother 2025
  order: 1
tags: [paper-summary, banking, credit-supply, social-networks, geographic-lending,
       information-asymmetry, panel-regression, peer-reviewed, unreplicated,
       data:cra-ffiec, data:hmda, data:fannie-freddie, data:call-reports,
       data:facebook-sci]
paper:
  authors: Oliver Rehbein, Simon Rother
  authorList:
    - { family: Rehbein, given: Oliver, affiliation: Vienna University of Economics and Business }
    - { family: Rother, given: Simon, affiliation: University of Mannheim }
  year: 2025
  venue: The Review of Financial Studies 38(9), September 2025, 2759–2809
  venueShort: Rev. Financ. Stud. 2025
  doi: 10.1093/rfs/hhaf014
  jel:
    codes: [D82, D83, G21, O16, L14, Z13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-06
  topics: ['Corporate Finance and Governance', 'Banking stability, regulation, efficiency', 'Microfinance and Financial Inclusion']
  dataAccess: public
  outcome:
    - county-to-county SME loan volume
    - county-to-county mortgage loan volume
    - mortgage interest rate
    - mortgage loan-to-value ratio
    - mortgage delinquency and default rates
    - bank return on assets
    - bank return on equity
    - bank nonperforming loan ratio
    - borrower-county GDP growth
    - borrower-county employment
  outcomeClass: [credit-supply, credit-risk, macro-aggregates]
  license: Oxford University Press standard publication reuse rights (confirmed via Crossref DOI metadata; content-version vor, URL https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days 0, start 2025-03-07)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (Oxford Academic site; not machine-fetchable without institutional access; checked 2026-06-06)
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 9
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, measurement]
  mechanisms: [information-asymmetry, agency]
  scope:
    region: US
    assetClass: corporate loans (SMEs), residential mortgages
    period: 2000-01..2018-12
    frequency: mixed
    dataType: [administrative, accounting, other]
    granularity: [firm, transaction, aggregate]
    n: "9,144,627 county pairs (loan-volume analysis); 1,268,200 loans (loan-term analysis); 18,914 bank-quarters (bank profitability analysis); 3,021 counties (real-effects analysis)"
  findings:
    - { ref: R1, outcome: county-to-county SME loan volume, metric: elasticity, value: "0.64 (Table 3, column 11, full controls); 0.91 in baseline (Table 2, column 1)", direction: positive, vsBenchmark: "elasticity stable across broad array of geographic and economic controls; Oster (2019) coefficient-stability analysis argues omitted-variable bias is unlikely" }
    - { ref: R2, outcome: county-to-county mortgage loan volume, metric: elasticity, value: "1.10*** (Table 2, column 8)", direction: positive, vsBenchmark: "mortgage elasticity similar to SME elasticity; robust to alternative clustering and HQ-based bank location" }
    - { ref: R3, outcome: mortgage interest rate, metric: basis-points, value: "1 SD increase in log(social connectedness) lowers interest rate by 1 bp (coefficient -0.497, Table 7 column 2; SD = 2.1)", direction: negative, vsBenchmark: "more favorable terms than borrowers in low-connectedness county pairs" }
    - { ref: R4, outcome: mortgage delinquency and default rates, metric: pp-effect, value: "1 SD increase in log(SCI) associated with 0.8 pp lower delinquency (coefficient -0.004, Table 7 col 3) and 0.4 pp lower default (coefficient -0.002, Table 7 col 4)", direction: negative, vsBenchmark: "delinquency falls 8% relative to mean of 10%; default falls 20% relative to mean of 2%" }
    - { ref: R5, outcome: bank return on assets, metric: sd-effect, value: "1 SD increase in log(portfolio social connectedness) raises ROA by 0.07 pp (coefficient 0.05, Table 10 panel A column 1; SD = 1.4)", direction: positive, vsBenchmark: "effect is larger for heavy lenders (interaction 0.04*, Table 10 panel B col 1)" }
    - { ref: R6, outcome: bank return on equity, metric: sd-effect, value: "1 SD increase in log(portfolio social connectedness) raises ROE by 1.04 pp (coefficient 0.74, Table 10 panel A column 2; SD = 1.4)", direction: positive }
    - { ref: R7, outcome: borrower-county GDP growth, metric: pp-effect, value: "baseline coefficient 1.719*** (SE 0.553, Table 12 col 2); 10% increase in social proximity raises GDP growth by ~0.3 pp at 95th-pct small-firm share (Table 12 col 3, interaction 1.660+0.060·19 per 100)", direction: positive, vsBenchmark: "effect negligible for counties dominated by large firms; supported by the shale-boom natural-experiment analysis (Table 13)" }
    - { ref: R8, outcome: borrower-county employment, metric: elasticity, value: "10% increase in social proximity raises employment by 0.21% (Table 12, column 4); twice as large in high-small-firm counties", direction: positive, vsBenchmark: "effect confirmed with shale-boom natural-experiment analysis of shocked banks (Table 13, columns 4-5)" }
    - { ref: R9, outcome: county-to-county SME loan volume, metric: elasticity, value: "Table 4 interactions: +0.08* for rural counties, -0.18*** for high-GDP counties, +0.13*** for volatile-industry counties, +0.21*** for high-small-firm counties, and -0.13** when large banks predominate", direction: mixed, vsBenchmark: "connectedness matters more in disadvantaged, volatile, opaque borrower counties and less for large-bank lending" }
    - { ref: R10, outcome: county-to-county mortgage loan volume, metric: coefficient, value: "connectedness interaction: -0.14* for guaranteed, -0.10* for securitized, and -0.08* for low-LTV loans (Table 5, columns 1-3); corresponding county-pair FE interactions -0.09*, -0.04 (not significant), and -0.11*** (columns 5-7)", direction: negative, vsBenchmark: "connectedness gradient is smaller for loan types with weaker screening incentives" }
    - { ref: R11, outcome: county-to-county mortgage loan volume, metric: coefficient, value: "traditional lender coefficient 1.29*** and fintech interaction -0.99*** (Table 5, column 4); with county-pair FE fintech interaction -1.58*** (column 8)", direction: none, vsBenchmark: "traditional-bank association is nearly offset for fintech lenders; county-pair FE specification indicates no fintech association" }
    - { ref: R12, outcome: mortgage loan-to-value ratio, metric: coefficient, value: "log(Social connectedness) coefficient 0.205*** (SE 0.077; Table 7, column 1)", direction: positive, vsBenchmark: "borrowers who obtain loans make lower down payments in more connected county pairs" }
    - { ref: R13, outcome: dispersion of mortgage interest rates, metric: coefficient, value: "log(Social connectedness) coefficient 1.41** (SE 0.70; Table 8, column 3)", direction: positive, vsBenchmark: "remains significant controlling for dispersion in FICO, LTV, DTI, first-time-buyer status, and loan amount" }
    - { ref: R14, outcome: bank nonperforming loan ratio, metric: sd-effect, value: "coefficient -0.35*** (SE 0.10); a 1 SD increase in portfolio connectedness corresponds to a 0.49 pp decrease (Table 10, panel A, column 3; SD = 1.4)", direction: negative }
    - { ref: R15, outcome: borrower-county loan volume, GDP growth, and employment, metric: coefficient, value: "shale-boom natural experiment: loan volume 0.047** (SE 0.020); GDP interaction with small-firm share 0.103*** (SE 0.024), while GDP main effects are 0.146 (SE 0.240) in column 2 and -0.119 (SE 0.244) in column 3 (neither significant); employment coefficients are 0.006*** (SE 0.002) in column 4 and 0.005*** (SE 0.002) in column 5, with interaction 0.000 (not significant) (Table 13, columns 1-5)", direction: positive, vsBenchmark: "county and year FE; shale-boom county-years excluded; results support lending and employment effects and a GDP-growth association in small-firm-intensive counties" }
    - { ref: R16, outcome: county-to-county SME loan volume, metric: coefficient, value: "physical-distance coefficient 0.07 (SE 0.21), not significant, when connectedness is included; connectedness coefficient remains 0.96*** (Table 2, column 4)", direction: none, vsBenchmark: "the lending association with physical distance is subsumed by connectedness in this specification" }
  resultType: new-finding
  relatesTo:
    - { cite: 'Bailey et al. (2018b)', relation: builds-on, note: 'introduces the Facebook Social Connectedness Index used as the main explanatory variable' }
    - { cite: 'Kuchler et al. (2022)', relation: extends, note: 'applies the social-proximity-to-institutions approach from institutional investors to banks' }
    - { cite: 'Degryse and Ongena (2005)', doi: '10.1111/j.1540-6261.2005.00729.x', relation: tests, note: 'social connectedness subsumes and reduces the coefficient on physical distance in lending' }
    - { cite: 'Agarwal and Hauswald (2010)', doi: '10.1093/rfs/hhq001', relation: tests, note: 'soft-information channel for distance effects in lending also operates via social connectedness' }
    - { cite: 'Haselmann, Schoenherr, and Vig (2018)', doi: '10.1086/697742', relation: cites, note: 'favoritism in elite networks as a competing mechanism to information-based lending' }
    - { cite: 'Gilje, Loutskina, and Strahan (2016)', doi: '10.1111/jofi.12387', relation: builds-on, note: 'shale-boom liquidity shocks motivate the natural-experiment test of real effects and reverse causality' }
    - { cite: 'Gilje (2019)', relation: builds-on, note: 'shale-boom county boom exposure measure used in the real-effects natural experiment' }
    - { cite: 'Loutskina and Strahan (2011)', doi: '10.1093/rfs/hhq142', relation: extends, note: 'bank profitability model extended with portfolio social connectedness' }
    - { cite: 'Oster (2019)', relation: cites, note: 'coefficient-stability argument used to rule out omitted-variable explanations' }
  openQuestions:
    - "Whether social connectedness reflects primarily an information channel or a favoritism/discrimination channel: bank profitability increases suggest information may dominate, but the two mechanisms are observationally similar in many specifications (pp. 2784, 2801)."
    - "The long-run welfare implications for borrowers in low-connectedness regions, who may have greater difficulty obtaining credit: the paper documents aggregate benefits but acknowledges distributional concerns (p. 2801)."
    - "How the role of social connectedness in lending evolves as online and algorithm-based lending expands, given that fintech lending is already unrelated to connectedness (p. 2784)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/T3G5MD
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-06
      role: extracted
      note: "Full text read (pp. 2759-2809); eight results extracted with locators from Tables 2, 3, 4, 5, 7, 8, 10, 12, 13. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-06
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; four fixes applied: (1) R1 SE in Core results corrected from 0.05 to 0.06 (Table 3 col 11); (2) R7 Core results magnitude reworded from '1.66 pp' (confounded coefficient with effect) to '~0.3 pp at 95th-pct small-firm share'; (3) equation 7 summation index corrected from Σ_j to Σ_i; (4) JEL codes corrected from [G21, G14, R12] to [D82, D83, G21, O16, L14, Z13] per paper abstract."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the assigned PDF; augmented the Core results and findings through R16 and added the numbered equations and complete estimating specifications. Not human-verified; not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, magnitudes, equations, specifications, prose, and metadata re-checked against the source PDF; corrected the Table 4 page, Table 7 standard errors, shale-boom design description, and classification details." }
  licenceVerification:
    - source: Crossref REST API works/10.1093/rfs/hhaf014
      checked: 2026-06-06
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[].content-version=vor, URL=https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days=0, start=2025-03-07; this is OUP standard reuse rights, NOT CC BY; paper is paywalled"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the economic hypotheses (information channel vs. favoritism), and the main empirical specifications with equations: enough to understand what was found and how, without reading all 51 pages. To replicate or extend it, see the full source at the [original](https://doi.org/10.1093/rfs/hhaf014) and the replication archive at the Harvard Dataverse.

## TL;DR

Rehbein and Rother exploit geographic variation in the Facebook Social Connectedness Index (SCI) to show that bank lending is shaped by the social ties between bank and borrower counties. A 10% increase in social connectedness between counties is associated with roughly 6-9% higher cross-county SME loan volumes and a similar increase in mortgage loan volumes, after controlling for physical distance, cultural dissimilarity, and a broad set of geographic and economic factors. The relationship is stronger when screening incentives are high (e.g., no government guarantee, not securitized) and is absent for fintech lenders whose decisions are algorithm-based. Loans to high-connectedness borrowers carry lower interest rates, higher LTV ratios, and lower delinquency and default rates. Banks with more socially connected loan portfolios have higher ROA and ROE. At the aggregate level, borrower counties more socially proximate to bank regions receive more lending and experience higher GDP growth and employment, especially if they are small-firm intensive, patterns also supported by a shale-boom natural experiment.

## Core results

Magnitudes and significance are as reported in the paper; `\*` = 10%, `\*\*` = 5%, `\*\*\*` = 1%.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | County-to-county **SME loan volume increases strongly with social connectedness**; the relationship persists across a broad array of geographic and economic controls | Table 2, col. 1 (baseline); Table 3, col. 11 (full controls), pp. 2773-2775 | Baseline elasticity 0.91\*\*\* (SE 0.06); with all controls 0.64\*\*\* (SE 0.06); R2 rises from 0.70 to 0.91; the authors argue omitted-variable bias would need to be unusually large |
| R2 | **Mortgage loan volumes** also strongly increase with social connectedness | Table 2, col. 8, p. 2773 | Elasticity 1.10\*\*\* (SE 0.05); robust to OLS, alternative clustering, HQ-based bank location |
| R3 | High social connectedness is associated with **lower interest rates** on originated mortgages | Table 7, col. 2, p. 2787 | Coefficient on log(SCI) = -0.497\* (SE 0.259); 1-SD increase in log(SCI) lowers rate by ~1 bp |
| R4 | High social connectedness is associated with **lower delinquency and default rates** | Table 7, cols. 3-4, p. 2787 | Delinquency coefficient -0.004\*\*\* (SE 0.001); default coefficient -0.002\*\* (SE 0.001); 1-SD change implies 0.8 pp lower delinquency and 0.4 pp lower default |
| R5 | **Bank ROA** increases with portfolio social connectedness | Table 10, Panel A, col. 1, p. 2793 | Coefficient 0.05\*\*\* (SE 0.02); 1-SD increase (1.4 log-units) raises ROA by 0.07 pp; effect larger for heavy SME lenders |
| R6 | **Bank ROE** increases significantly with portfolio social connectedness | Table 10, Panel A, col. 2, p. 2793 | Coefficient 0.74\*\*\* (SE 0.27); 1-SD increase raises ROE by 1.04 pp; nonperforming loans decrease (coefficient -0.35\*\*\*, SE 0.10) |
| R7 | Borrower counties more socially proximate to bank regions have **higher real GDP growth**, particularly in small-firm counties | Table 12, cols. 2-3, p. 2797 | Baseline coefficient 1.719\*\*\* (SE 0.553); 10% increase in social proximity raises GDP growth by ~0.3 pp for counties at 95th percentile of small-firm share (= 10·(1.660+0.060·19)/100); with a positive and significant GDP interaction for high-small-firm counties in the shale-boom natural-experiment analysis (Table 13, col. 3) |
| R8 | **Employment** is also higher with social proximity to bank regions, concentrated in small-firm counties | Table 12, cols. 4-5, p. 2797; Table 13, cols. 4-5, p. 2800 | 10% higher social proximity: coefficient 0.021\*\*\* (SE 0.006) on log(employment); twice as large at high small-firm-share counties; the shale-boom natural experiment also shows an employment increase |
| R9 | **County characteristics shape the SME lending gradient**: it is larger in rural, volatile-industry, and small-firm counties and smaller in high-GDP counties and where large banks predominate | Table 4, cols. 1-5, p. 2780 | Interaction coefficients: rural 0.08\* (SE 0.04); high GDP per capita -0.18\*\*\* (0.04); volatile industries 0.13\*\*\* (0.04); high small-firm share 0.21\*\*\* (0.06); high large-bank share -0.13\*\* (0.06) |
| R10 | **Screening incentives moderate the mortgage connectedness gradient**: government-guaranteed, securitized, and low-LTV loans show smaller connectedness effects | Table 5, cols. 1-3 and 5-7, pp. 2782-2783 | Interactions: guaranteed -0.14\* (SE 0.06), securitized -0.10\* (0.05), low LTV -0.08\* (0.04); with county-pair FE: -0.09\* (0.05), -0.04 (0.05, not significant), -0.11\*\*\* (0.04) |
| R11 | **Fintech lending is nearly unrelated to connectedness**, consistent with the proposed loan-officer screening channel | Table 5, cols. 4 and 8, pp. 2782-2783 | Traditional lender coefficient 1.29\*\*\* (SE 0.14), fintech interaction -0.99\*\*\* (0.20); with county-pair FE fintech interaction -1.58\*\*\* (0.38) |
| R12 | High-connectedness mortgage borrowers have **higher loan-to-value ratios** | Table 7, col. 1, p. 2787 | Coefficient on log(SCI) = 0.205\*\*\* (SE 0.077) |
| R13 | Social connectedness is associated with **greater dispersion in mortgage interest rates**, consistent with more differentiated borrower assessment | Table 8, col. 3, p. 2789 | Coefficient = 1.41\*\* (SE 0.70), controlling for SDs of FICO, LTV, DTI, first-time-buyer status, and loan amount |
| R14 | Banks with more socially connected loan portfolios have **lower nonperforming loan ratios** | Table 10, Panel A, col. 3, p. 2793 | Coefficient -0.35\*\*\* (SE 0.10); a 1-SD increase (1.4 log units) is associated with a 0.49 pp decrease |
| R15 | **Shale-boom natural-experiment results support real lending effects**: loan volume and employment rise, and GDP response is concentrated in small-firm counties | Table 13, cols. 1-5, p. 2800 | Social proximity to shocked banks: loan volume 0.047\*\* (SE 0.020); GDP 0.146 (0.240, not significant) in column 2 and -0.119 (0.244, not significant) in column 3, with GDP × small-firm share 0.103\*\*\* (0.024); employment 0.006\*\*\* (0.002) in column 4 and 0.005\*\*\* (0.002) in column 5, interaction 0.000 (not significant) |
| R16 | After controlling for social connectedness, **physical distance no longer predicts SME lending** | Table 2, col. 4, p. 2773 | Physical-distance coefficient 0.07 (SE 0.21), not significant; social-connectedness coefficient remains 0.96\*\*\* (SE 0.09) |

**Overall (paper's conclusion).** Social connectedness between bank and borrower regions is a distinct and economically important dimension of the geography of bank lending. It is not subsumed by physical or cultural distance and explains lending patterns consistent with both an information channel and favoritism, though the increase in bank profitability may indicate that reduced information frictions dominate favoritism on average.

## Theory / model

The paper has no single formal theoretical model. It motivates the analysis with two competing hypotheses.

**Information hypothesis.** Social connections reduce information asymmetries between bank and borrower regions. Loan officers in socially connected counties obtain soft information about local economic conditions (through their own or their networks' acquaintances in the borrower region) and can make better lending decisions. Formally, if social connectedness $$\text{SCI}_{i,j}$$ increases, the precision of banks' private signal about borrowers in region $$j$$ rises. Better-screened borrowers receive lower rates and have lower delinquency; banks earn higher ROA. This prediction aligns with the classical framework of Diamond (1984) and Boot (2000) on delegated monitoring.

**Favoritism hypothesis.** Social connections may also lead to conscious or unconscious preferential treatment of borrowers in connected regions. Haselmann, Schoenherr, and Vig (2018) document rent-seeking in elite networks; the paper considers whether a similar mechanism operates at the population level. Unlike the information channel, favoritism predicts that banks' loan profitability might not improve (and could fall) if resources flow to less creditworthy but socially connected borrowers. The paper tests both channels by examining loan terms, loan performance, and bank profitability jointly (Section 2.6).

**Identification logic.** The social connectedness measure (Facebook SCI, equation 1, p. 2766) is cross-sectional (2016) and predetermined relative to the 2017 lending outcomes in the baseline. It is not randomly assigned, so the authors proceed in two ways. First, they add an extensive set of geographic and economic controls including the physical and cultural distance controls emphasized by Degryse and Ongena (2005) and Agarwal and Hauswald (2010), and use the Oster (2019) coefficient-stability argument to argue that omitted-variable bias is unlikely. Second, for the real-effects results (Section 5.2), they exploit shale-boom liquidity shocks (Gilje, Loutskina, and Strahan (2016); Gilje (2019)) as a natural experiment: unanticipated increases in deposits at shale-exposed bank branches raise lending potential for banks with branches in boom counties, and counties socially connected to those banks receive more lending, without being directly affected by the boom.

## Method

The paper has no standalone theoretical model. Its empirical framework tests two channels: social ties may reduce information asymmetry by conveying soft information about borrowers, or they may enable favoritism. The paper compares loan quantities, borrower terms and performance, and bank profitability to distinguish the implications. It also introduces a county-pair cultural-distance measure (Section 2.1, pp. 2767-2769), formed by combining standardized differences across four categories of cultural traits; this is described in prose rather than a numbered equation.

Facebook's county-pair Social Connectedness Index is defined as (Equation 1, p. 2766):

$$
\text{social connectedness}_{i,j} = \frac{\text{number of friendship links}_{i,j}}{\text{population}_i \cdot \text{population}_j} \cdot \text{scaling factor}. \tag{1}
$$

The county-pair PPML loan-volume model is (Equation 2, p. 2770):

$$
\text{volume of loans}_{i,j} = \exp\left[\beta \cdot \log(\text{social connectedness})_{i,j} + \gamma_1 \cdot \log(\text{physical distance})_{i,j} + \gamma_2 \cdot \text{cultural distance}_{i,j} + M_{i,j} + \alpha_i + \alpha_j\right] \cdot \epsilon_{i,j}. \tag{2}
$$

For loan-type heterogeneity the paper estimates (Equation 3, p. 2781):

$$
\text{volume of mortgage loans}_{i,j,k} = \exp\left[\beta \cdot \log(\text{social connectedness})_{i,j} \cdot \text{loan type}_k + \text{distance percentile FE}_{i,j} \cdot \text{loan type}_k + \alpha_{i,j}\right] \cdot \epsilon_{i,j,k}. \tag{3}
$$

The portfolio connectedness measure is a loan-count-weighted average (Equation 5, p. 2790):

$$
\text{portfolio social connectedness}_{b,y} = \sum_i \sum_j \text{social connectedness}_{i,j} \cdot \frac{\#\,\text{loans}_{b,i,j,y}}{\text{total }\#\,\text{loans}_{b,y}}. \tag{5}
$$

The bank-profitability specification extends the empirical model of Loutskina and Strahan (2011) by adding portfolio connectedness and distance measures. Bank profitability is related to that measure and controls by (Equation 6, p. 2791):

$$
\text{profitability}_{b,s,t} = \beta \cdot \log(\text{portfolio social connectedness})_{b,t} + \gamma_1 \cdot \log(\text{portfolio physical distance})_{b,t} + \gamma_2 \cdot \text{portfolio cultural distance}_{b,t} + \gamma_3 \cdot \text{loan concentration}_{b,t} + \gamma_4 \cdot \text{further bank controls}_{b,t} + \alpha_s + \alpha_t + \epsilon_{b,t}. \tag{6}
$$

The social proximity to bank capital measure is (Equation 7, p. 2794):

$$
\text{social proximity to banks}_{j,t} = \sum_i \text{social connectedness}_{i,j} \cdot \text{total bank assets}_{i,t}. \tag{7}
$$

For shale-boom exposure, bank exposure is the branch-share-weighted well count (Equation 9, p. 2799):

$$
\text{shale-boom exposure}_{b,t} = \frac{\sum_c \text{number of branches}_{b,c,t} \cdot \text{number of wells}_{c,t}}{\sum_c \text{number of branches}_{b,c,t}}. \tag{9}
$$

County boom exposure averages the exposure of banks headquartered in county i (Equation 10, p. 2799):

$$
\text{county boom exposure}_{i,t} = \sum_b \text{shale-boom exposure}_{b,t} \cdot \frac{I(\text{HQ in county }j)_{b,i,t}}{\sum_b I(\text{HQ in county }j)_{b,i,t}}. \tag{10}
$$

Social proximity to shocked banks weights county boom exposure by county connectedness (Equation 11, p. 2799):

$$
\text{social proximity to shocked banks}_{j,t} = \sum_i \text{social connectedness}_{i,j} \cdot \text{county boom exposure}_{i,t}. \tag{11}
$$

## Empirical specifications

The baseline county-pair specification is Equation 2 above. The headline analysis estimates it by PPML on county-pair lending observations, using 2017 CRA/HMDA outcomes and 2016 SCI. It includes bank-county and borrower-county fixed effects; expanded versions add same-state, common-border, distance percentile, and percentile fixed effects for commuting, migration, trade, industry-share, GDP, unemployment, travel-cost, and travel-time controls. Standard errors are clustered by bank county and borrower county. Table 2 uses 7,127,218 SME pairs and 5,935,135 mortgage pairs (p. 2773); Table 3's full-control columns use 6,872,500 SME pairs and 5,761,073 mortgage pairs (p. 2775). County-type interactions are PPML with the same county fixed effects and distance-percentile-by-type effects (Table 4, p. 2780; N = 7,022,043, or 1,079,877 for the large-bank split). Loan-type interactions use Equation 3, PPML and bank-county/borrower-county clustered standard errors; Table 5 reports county-pair FE variants as well (pp. 2781-2782; N ranges from 11,870,270 to 35,788 by specification).

Loan-level mortgage outcomes use (Equation 4, p. 2785):

$$
\text{outcome}_{l,b,i,j,s,t} = \beta \cdot \log(\text{social connectedness})_{i,j} + \gamma \cdot \text{loan characteristics}_l + \text{distance percentile FE}_{i,j} + M_{i,j} + \alpha_{b,t} + \alpha_{s,t} + \epsilon_{l,b,i,j,s,t}. \tag{4}
$$

The equation is estimated by OLS for LTV and interest rates and by linear probability models for delinquency and default, on 1,268,200 Fannie Mae/Freddie Mac mortgages originated in 2000-2008 and observed through 2018. It includes bank-by-origination-year and borrower-state-by-origination-year fixed effects, same-state and common-border effects, and physical- and cultural-distance percentile effects. Loan controls vary by outcome: FICO for LTV; FICO, DTI, first-time buyer, loan amount, LTV for interest rate; and these controls plus interest rate for delinquency/default. Errors are clustered at bank-county and borrower-county levels (Table 7, p. 2787). The rate-dispersion mechanism test is a separate county-pair OLS regression of the standard deviation of interest rates on log connectedness; it uses 6,999 pairs with at least four loans, distance percentile, common-border, and same-state fixed effects, then adds dispersion in loan characteristics in the full column; errors use the same two-way county clustering (Table 8, p. 2789).

Bank outcomes use Equation 6 above, estimated by OLS on 18,914 bank-quarter observations for 844 banks from 2009-2017. The regressions include bank-state and year fixed effects, portfolio physical and cultural distance, loan concentration, and bank balance-sheet controls. Errors are clustered by bank. Table 10 also interacts connectedness and controls with the heavy-lender indicator (banks above the median SME-loans-to-assets ratio) (pp. 2791-2793).

The county-year real-outcome regression is (Equation 8, p. 2796):

$$
\text{outcome}_{j,t} = \beta \cdot \log(\text{social proximity to banks})_{j,t-1} + \gamma_1 \cdot \log(\text{physical proximity to banks})_{j,t-1} + \gamma_2 \cdot \log(\text{cultural proximity to banks})_{j,t-1} + \gamma_3 \cdot \text{additional control variables}_{j,t-1} + \alpha_j + \alpha_t + \epsilon_{j,t}. \tag{8}
$$

OLS estimates use 3,021 counties over 2009-2017 (N = 24,152-24,161), with county and year fixed effects, lagged proximity measures and industry-share controls; employment regressions add commuting and migration controls. Errors are clustered by county. For the identification check in Table 13, Equation 8 replaces each proximity measure with proximity to shocked banks constructed from Equations 9-11, excluding county-years in which new fracking wells are built; the corresponding sample has N = 22,047-22,053. Fixed effects, controls, and county-clustered errors follow the baseline (pp. 2799-2800).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Facebook Social Connectedness Index (Bailey et al. 2018b) | Main explanatory variable; county-pair relative probability of Facebook friendship | [Facebook SCI](/wiki/datasets/facebook-sci/) |
| Community Reinvestment Act (CRA) data, FFIEC | County-to-county SME loan volumes for 2017 (and 2004-2018 for time series); bank-level loan counts | [CRA (FFIEC)](/wiki/datasets/cra-ffiec/) |
| Home Mortgage Disclosure Act (HMDA) data, FFIEC | County-to-county mortgage loan volumes for 2017; loan-type classification | [HMDA](/wiki/datasets/hmda/) |
| Fannie Mae and Freddie Mac Single Family Loan-Level Datasets | Loan-level mortgage data (2000-2008 originations, observed through 2018): LTV, interest rate, FICO, DTI, delinquency, default | [Fannie / Freddie loan-level](/wiki/datasets/fannie-freddie/) |
| FDIC Call Reports | Bank profitability (ROA, ROE, % NPL) and bank characteristics (2009-2017); branch-location data for assigning loans to bank counties | [Call Reports](/wiki/datasets/call-reports/) |
| NBER county distance database | Physical distance (as-the-crow-flies, miles) between county centroids | No page yet |
| Bureau of Economic Analysis | County-level real GDP growth and industry-share data | No page yet |
| Bureau of Labor Statistics | County-level employment; unemployment differentials | No page yet |
| U.S. Census Bureau | Commuting, migration, common-border, and county-level population data | No page yet |
| National Transportation Center / Oak Ridge | Highway travel costs and flight-and-drive time between county pairs | No page yet |
| Gilje, Loutskina & Strahan (2016) / Gilje (2019) | Shale-boom well counts and bank branch locations in boom counties for the shale-boom natural experiment | No page yet |

Sample summary: cross-sectional county-pair analysis uses 2016 SCI and 2017 CRA/HMDA lending data, covering over 9 million county pairs. Loan-level analysis: 1,268,200 mortgages originated 2000-2008. Bank-profitability analysis: 844 banks, 2009-2017. Real-effects analysis: 3,021 counties, 2009-2017.

## When to read the full paper

Read the [original](https://doi.org/10.1093/rfs/hhaf014) if you are: studying the geographic determinants of bank lending beyond physical distance; researching social networks and credit markets; applying the Facebook SCI to a new financial context; building a social-proximity-to-institutions measure analogous to Kuchler et al. (2022); evaluating the information-vs.-favoritism debate in relationship banking; or studying shale-boom liquidity shocks and bank lending. The replication archive at Harvard Dataverse (https://doi.org/10.7910/DVN/T3G5MD) covers all tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Review of Financial Studies* 38(9), September 2025. This distillation was extracted by an LLM on 2026-06-06 and is **not human-verified or independently reproduced**. The paper is paywalled (Oxford University Press standard reuse rights; not CC); this page is extract-only.

> Rehbein, Oliver, and Simon Rother. "Social Connectedness in Bank Lending." *The Review of Financial Studies* 38, no. 9 (September 2025): 2759-2809. DOI: 10.1093/rfs/hhaf014.
