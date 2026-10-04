---
title: "Lenders Pricing Cybersecurity Risk: Choi, Degryse & Smedts (2026)"
description: >-
  Distilled: Using syndicated loan data for U.S. non-financial firms
  (2012-2018), lenders charge 4 to 13 basis points higher loan spreads for
  firms with rising ex-ante cybersecurity risk, with commercial banks pricing
  more conservatively than non-bank lenders and pricing concentrated among
  lenders who are themselves aware of cybersecurity risk. Cybersecurity
  insurance does not mitigate the higher spreads. Journal of Corporate Finance
  vol. 98, 2026, paywalled; 21 core results with source locators, the
  regression specifications, and datasets used.
sidebar:
  label: Choi-Degryse-Smedts 2026
  order: 1
tags: [paper-summary, cybersecurity, credit-risk, syndicated-loans, banking, non-bank-lenders, panel-regression, peer-reviewed, unreplicated, data:wrds, data:edgar]
paper:
  authors: Bok Min Choi, Hans Degryse, Kristien Smedts
  authorList:
    - { family: Choi, given: Bok Min, affiliation: KU Leuven }
    - { family: Degryse, given: Hans, orcid: 0000-0002-0130-057X, affiliation: "KU Leuven, CEPR" }
    - { family: Smedts, given: Kristien, orcid: 0000-0003-2967-3236, affiliation: KU Leuven }
  year: 2026
  venue: Journal of Corporate Finance 98 (2026) 102958
  venueShort: J. Corp. Finance 2026
  tier: field
  doi: 10.1016/j.jcorpfin.2026.102958
  jel:
    codes: [G21, G23]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Banking stability, regulation, efficiency', 'FinTech, Crowdfunding, Digital Finance', 'Financial Distress and Bankruptcy Prediction']
  dataAccess: licensed-commercial
  outcome:
    - syndicated loan all-in-spread-drawn (AISD)
    - borrower cybersecurity insurance coverage
    - number of financial covenants
    - lender share in syndicated loan
    - borrower distance-to-default
  outcomeClass: [firm-financing, credit-supply, credit-risk]
  license: "Elsevier paywalled; Crossref license block contains TDM-only licenses (Elsevier TDM userlicense 1.0, TDMRep, and STM-ASF policy licenses only); no CC or open-access license found"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 21
  citedByCount: 1
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression]
    identification: selection-on-observables
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, moral-hazard, credit-risk-channel]
  scope:
    region: US
    assetClass: syndicated corporate loans
    period: 2012-01..2018-12
    frequency: annual
    dataType: [market, accounting, text]
    granularity: [firm, transaction]
    n: "5,957 loan facilities from 1,714 unique borrowers"
  findings:
    - { ref: R1, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "0.021** on cybersecurity risk score (firm+industry-year FE); ~2.1% increase per 1 SD, ~4.15 bps", direction: positive }
    - { ref: R2, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "AboveZero: 0.063*** (firm+industry-year FE); firms with a positive cybersecurity-risk score face ~12.71 bps higher AISD on average", direction: positive }
    - { ref: R3, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Commercial bank only: 0.029** (intensive), 0.087*** (extensive); NonBank interaction: -0.033***, -0.092*** (nearly offsets base effect)", direction: positive, vsBenchmark: "commercial banks more conservative; non-bank participation largely offsets the cyber premium" }
    - { ref: R4, outcome: number of financial covenants, metric: coefficient, value: "0.065* more covenants per 1 SD cybersecurity risk (commercial banks only; ~6% of mean covenant count)", direction: positive }
    - { ref: R5, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Insurance: 0.003-0.004 (ns); Cybersecurity risk x Insurance: 0.001-0.007 (ns)", direction: none }
    - { ref: R6, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "NoMention: -0.014 (ns); Mention: 0.028***; NoInsurance: 0.014 (ns); Insurance-discussion: 0.042***", direction: positive, vsBenchmark: "pricing is absent when lead arrangers do not discuss cybersecurity or insurance, and present in the discussion subsamples" }
    - { ref: R7, outcome: lender share in syndicated loan, metric: coefficient, value: "Single-lead sample, col. 1: Cybersecurity risk x Discussed = -2.505***; x Insured = -1.310** on lead arranger share (%); corresponding decreases are 2.51% and 1.31% per 1 SD, respectively (mean share 19.81%)", direction: negative }
    - { ref: R8, outcome: borrower distance-to-default, metric: coefficient, value: "-0.209* (loan-level sample), -0.181* (firm-year sample) per 1 SD cybersecurity risk; ~3% decrease in distance-to-default, consistent with a credit-risk channel", direction: negative }
    - { ref: R9, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Cybersecurity risk x InvestmentBank: -0.017 (SE 0.015); AboveZero x InvestmentBank: -0.039 (SE 0.040); both insignificant", direction: none, vsBenchmark: "investment-bank participation does not significantly change the commercial-bank pricing slope" }
    - { ref: R10, outcome: number of financial covenants, metric: coefficient, value: "0.028 (SE 0.025), not significant in the full sample", direction: none, vsBenchmark: "the positive covenant response is limited to commercial-bank-only loans" }
    - { ref: R11, outcome: "borrower cybersecurity insurance coverage", metric: coefficient, value: "Cybersecurity risk coefficient 0.139** in industry-year logit; a 1 SD increase is associated with about 14% higher odds of insurance", direction: positive }
    - { ref: R12, outcome: "borrower cybersecurity insurance coverage", metric: coefficient, value: "Cybersecurity risk coefficient -0.117 (SE 0.262), insignificant with firm and industry-year fixed effects", direction: none }
    - { ref: R13, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "NoInsurance-discussion subsample: cybersecurity risk coefficient 0.014 (SE 0.016), not significant", direction: none, vsBenchmark: "the risk premium appears in the subsample whose lead arrangers discuss cybersecurity and insurance (Table 6, col. 4)" }
    - { ref: R14, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Cybersecurity risk x Insured: 0.022** with firm and lender fixed effects; 0.035*** with firm-lender fixed effects", direction: positive }
    - { ref: R15, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Cybersecurity risk x lender discussion intensity: 0.002* with firm and lender fixed effects; 0.004*** with firm-lender fixed effects; about 0.2% and 0.4% per additional keyword", direction: positive }
    - { ref: R16, outcome: lender share in syndicated loan, metric: coefficient, value: "All lead arrangers: Discussed interactions -1.615*** and -0.716; Insured interactions -0.403 and -0.792**. All lenders: Discussed interactions -0.165** and -0.059; Insured interactions -0.090 and -0.120", direction: negative, vsBenchmark: "negative exposure responses are generally weaker outside the single-lead-arranger sample" }
    - { ref: R17, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Lattanzio and Ma Cyber_score: 0.034*** for commercial-bank loans and 0.028*** in the full sample", direction: positive, vsBenchmark: "alternative 10-K cybersecurity-risk measure in extended samples" }
    - { ref: R18, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Jamilov et al. Cyber_Mentioned indicator: 0.070* for commercial-bank loans and 0.030* in the full sample", direction: positive, vsBenchmark: "alternative conference-call measure in extended samples" }
    - { ref: R19, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Including post-breach observations: Cybersecurity risk 0.019** and AboveZero 0.063***; N=6,316", direction: positive, vsBenchmark: "baseline association persists without dropping post-breach observations" }
    - { ref: R20, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Excluding all firms with a breach: Cybersecurity risk 0.021** and AboveZero 0.069***; N=4,881", direction: positive, vsBenchmark: "baseline association persists after excluding all firms that experienced a breach" }
    - { ref: R21, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Without firm fixed effects, Cybersecurity risk coefficients are -0.001, -0.003, -0.004 and AboveZero coefficients are 0.003, 0.002, 0.002 across year, industry, and industry-year specifications; all insignificant", direction: none, vsBenchmark: "cross-sectional associations disappear without firm-level controls" }
  resultType: new-finding
  relatesTo:
    - { cite: "Florackis et al. (2023)", doi: '10.1093/rfs/hhac024', relation: builds-on, note: "cybersecurity risk measure from textual similarity of 10-K disclosures to pre-breach firms; main risk measure used throughout" }
    - { cite: "Jamilov et al. (2021)", relation: builds-on, note: "conference call cybersecurity and insurance keyword data for lender awareness and borrower insurance coverage variables" }
    - { cite: "Huang and Wang (2021)", doi: '10.2308/tar-2018-0643', relation: extends, note: "shift from their ex-post data-breach pricing to ex-ante cybersecurity risk pricing in loan spreads" }
    - { cite: "Sheneman (2017)", relation: extends, note: "ex-post data breach impact on loan spreads; this paper documents ex-ante pricing before any breach occurs" }
    - { cite: "Kamiya et al. (2021)", doi: '10.1016/j.jfineco.2019.05.019', relation: cites, note: "cyberattack impact on firm risk appetite and shareholder wealth, motivating the credit risk channel" }
    - { cite: "Aldasoro et al. (2022)", relation: cites, note: "non-bank lenders' higher risk appetite versus commercial banks, motivating lender-type heterogeneity tests" }
  openQuestions:
    - "Whether ex-ante cybersecurity risk pricing generalizes beyond U.S. syndicated loans to other credit markets and jurisdictions, as the sample covers only U.S. non-financial firms 2012-2018 (conclusion, pp. 14-15)."
    - "Why cybersecurity insurance does not lower loan spreads: it may cover only partial direct losses and could induce moral hazard by weakening borrower incentives to invest in security (pp. 8-9)."
    - "Whether regulatory stress tests and mandated lender cybersecurity assessments can raise bank awareness and improve pricing of unconventional risks more broadly (conclusion, p. 15)."
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-20 incl. appendices A-D); eight results extracted from Tables 2-9. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; six locator errors corrected (R1/R2 p.5->p.6, R3 p.6->p.7, R4 p.7->p.8, Table A.4 p.19->p.20, Appendix C pp.17-18->p.18 and Eq.4 p.17->p.18); all eight coefficient magnitudes and significance stars confirmed against Tables 2-9; Eq.8 DD formula verified term-by-term; no em-dashes or colorful adjectives found." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added 13 Core results rows, matching findings entries, and missing estimating specifications and Appendix C equations. Additions are not human-verified and the analysis was not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 21 Core results rows, findings, locators, reported magnitudes and specifications against the PDF; verified formal equations and classification axes. Corrected the Table 8 Discussed/Insured mapping in R7, clarified Table 6 discussion subsamples, corrected R2's positive-score description, added the credit-risk outcome class, classified DealScan as market data and qualified the credit-risk channel language." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102958", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license block contains TDM-only licenses (Elsevier TDM userlicense 1.0 and TDMRep, plus Elsevier STM-ASF policy licenses only); no CC or open-access license present; paper is paywalled" }
---

**What this is.** Core results, tested hypotheses, and regression specifications from this paper, distilled from the published PDF. To replicate or extend the analysis, read the full source at the [original](https://doi.org/10.1016/j.jcorpfin.2026.102958).

## TL;DR

Using 5,957 syndicated loan facilities for U.S. non-financial firms from 2012 to 2018, the paper asks whether lenders price firms' ex-ante cybersecurity risk in loan spreads. The main measure of cybersecurity risk, from Florackis et al. (2023), captures the textual similarity of a firm's 10-K disclosures to those of firms that experienced data breaches. The paper's key findings are: (1) a one standard deviation increase in cybersecurity risk is associated with about a 2% increase in the All-in-Spread-Drawn (AISD), equivalent to roughly 4 basis points; (2) firms with a positive cybersecurity-risk score face about 13 basis points higher spreads; (3) commercial banks price the risk more strictly than non-bank lenders; (4) pricing depends on lenders' own awareness: the premium appears when lead arrangers discuss cybersecurity risk and is larger when they also discuss insurance; (5) cybersecurity insurance does not reduce the premium; and (6) higher cybersecurity risk is associated with lower distance-to-default, consistent with a credit-risk channel. Prior studies such as Huang and Wang (2021) and Sheneman (2017) documented ex-post pricing after data breaches; this paper examines ex-ante pricing from the lenders' perspective.

## Core results

Magnitudes and significance are as reported; \*/\*\*/\*\*\* = 10%/5%/1%. The preferred spread regressions use log AISD as the outcome and include firm and industry-year fixed effects; Table 2 also reports specifications with year, industry, and firm fixed effects. Standard errors are clustered at the firm level unless noted. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Lenders price cybersecurity risk at the **intensive margin**: within-firm increases in the cybersecurity risk score are associated with higher AISD | Table 2, col. (3), p. 6 | Coefficient on Cybersecurity risk = 0.021\*\*; ~2.1% higher AISD per 1 SD, ~4.15 bps (mean AISD = 195 bps) |
| R2 | At the **extensive margin**, firms with a positive cybersecurity-risk score face a large premium | Table 2, col. (4), p. 6 | AboveZero coefficient = 0.063\*\*\*; firms with a positive score face ~12.71 bps higher AISD on average |
| R3 | **Commercial banks price cybersecurity risk more strictly** than non-bank lenders; non-bank participation nearly offsets the premium | Table 3, cols. (1)-(4), p. 7 | CBank-only: Cybersecurity risk = 0.029\*\* (intensive), AboveZero = 0.087\*\*\* (extensive); NonBank interaction: -0.033\*\*\*, AboveZero x NonBank = -0.092\*\*\* (offsets base) |
| R4 | Commercial banks **attach more financial covenants** as cybersecurity risk rises | Table 4, col. (1), p. 8 | Cybersecurity risk coefficient = 0.065\*; ~0.065 additional covenants per 1 SD, ~6% of mean covenant count; effect not significant in full sample with non-bank lenders |
| R5 | **Cybersecurity insurance does not mitigate** the higher loan spreads | Table 5, cols. (3)-(4), p. 8 | Insurance coefficient = 0.003-0.004 (ns); Cybersecurity risk x Insurance = 0.001-0.007 (ns); both small and insignificant |
| R6 | Pricing depends on lender awareness: the premium appears when lead arrangers discuss cybersecurity risk and insurance | Table 6, cols. (1)-(4), p. 9 | NoMention: -0.014 (ns); Mention: 0.028\*\*\*; NoInsurance: 0.014 (ns); Insurance-discussion: 0.042\*\*\* |
| R7 | Lenders who discuss cybersecurity risk **reduce their loan-share exposure** to riskier borrowers | Table 8, col. (1), p. 11 | Discussed interaction = -2.505\*\*\*; Insured interaction = -1.310\*\* on lead arranger share (%); corresponding decreases are 2.51% and 1.31% per 1 SD, respectively |
| R8 | Cybersecurity risk is associated with **lower borrower distance-to-default**, consistent with a credit-risk channel | Table 9, p. 12 | Cybersecurity risk coefficient on distance-to-default: -0.209\* (loan-level sample), -0.181\* (firm-year sample); ~3% average decrease per 1 SD |
| R9 | Investment-bank participation does not significantly change the commercial-bank cybersecurity pricing slope | Table 3, cols. (3)-(4), p. 7 | Cybersecurity risk x InvestmentBank = -0.017 (SE 0.015); AboveZero x InvestmentBank = -0.039 (SE 0.040); both insignificant |
| R10 | The covenant response is not statistically significant in the full lender sample | Table 4, col. (2), p. 8 | Cybersecurity risk coefficient = 0.028 (SE 0.025), not significant; commercial-bank-only coefficient in R4 is 0.065\* |
| R11 | Firms with higher cross-sectional cybersecurity risk are more likely to have insurance | Table 5, col. (1), p. 8 | Logit coefficient = 0.139\*\*; a 1 SD increase in risk corresponds to about 14% higher odds of coverage |
| R12 | Within-firm changes in cybersecurity risk do not predict insurance uptake | Table 5, col. (2), p. 8 | Cybersecurity risk coefficient = -0.117 (SE 0.262), not significant with firm and industry-year fixed effects |
| R13 | Cybersecurity risk is not priced when lead arrangers do not discuss insurance | Table 6, col. (3), p. 9 | NoInsurance subsample coefficient = 0.014 (SE 0.016), not significant; the Insurance subsample coefficient is 0.042\*\*\* |
| R14 | The risk premium is stronger when single lead arrangers discuss cybersecurity and insurance, including with firm-lender fixed effects | Table 7, cols. (1), (3), p. 10 | Cybersecurity risk x Insured = 0.022\*\* with firm and lender fixed effects; 0.035\*\*\* with firm-lender fixed effects |
| R15 | More lender discussion intensity is associated with stronger pricing of borrower cybersecurity risk | Table 7, cols. (2), (4), p. 10 | Cybersecurity risk x Intensity = 0.002\* and 0.004\*\*\*; about 0.2% and 0.4% higher spreads per additional keyword |
| R16 | Lender-share reductions extend beyond single-lead loans, with weaker estimates in wider lender samples | Table 8, cols. (3)-(6), p. 11 | All lead arrangers: Discussed interactions = -1.615\*\*\*, -0.716; Insured = -0.403, -0.792\*\*. All lenders: Discussed = -0.165\*\*, -0.059; Insured = -0.090, -0.120 |
| R17 | An alternative 10-K cybersecurity measure also predicts higher loan spreads | Table 10, cols. (1)-(2), p. 13 | Lattanzio and Ma Cyber_score coefficients = 0.034\*\*\* for commercial-bank loans and 0.028\*\*\* for the full sample |
| R18 | An alternative conference-call indicator also predicts higher loan spreads | Table 10, cols. (3)-(4), p. 13 | Jamilov et al. Cyber_Mentioned coefficients = 0.070\* and 0.030\* for commercial-bank loans and the full sample |
| R19 | Baseline pricing estimates persist when post-breach observations are retained | Table 11, cols. (1)-(2), p. 13 | Cybersecurity risk = 0.019\*\*; AboveZero = 0.063\*\*\*; N = 6,316 |
| R20 | Baseline pricing estimates persist after excluding firms that ever experienced a breach | Table 11, cols. (3)-(4), p. 13 | Cybersecurity risk = 0.021\*\*; AboveZero = 0.069\*\*\*; N = 4,881 |
| R21 | Cross-sectional estimates without firm fixed effects are null | Table A.4, p. 20 | Cybersecurity risk coefficients = -0.001, -0.003, -0.004; AboveZero = 0.003, 0.002, 0.002 across year, industry, and industry-year fixed effects; all insignificant |

**Overall (paper's conclusion).** Lenders do price ex-ante cybersecurity risk based on within-firm changes in risk scores; cross-sectional differences alone are not significant. Pricing is strongest when lead arrangers discuss their own cybersecurity risk and insurance policies. Commercial banks are more conservative than non-bank lenders. The negative association with distance-to-default is consistent with a credit-risk channel. Cybersecurity insurance neither reduces breach probability nor provides comprehensive loss coverage, so it does not lower the credit premium.

## Theory / model

The paper has no formal structural model. It tests five empirical hypotheses using within-firm variation in cybersecurity risk scores over time:

- **H1 (Pricing)**: Lenders charge higher loan spreads for firms with higher ex-ante cybersecurity risk, based on within-firm changes in risk exposure. The null of no ex-ante pricing is motivated by the observation that cross-sectional comparisons (Table A.4, p. 20) find no significant effect, suggesting the risk is idiosyncratic and firm-specific rather than industry-wide.
- **H2 (Lender heterogeneity)**: Commercial banks, subject to tighter regulation and lower risk tolerance (Aldasoro et al. (2022)), price cybersecurity risk more strictly than non-bank lenders (hedge funds, private equity funds, mutual funds, insurance companies, and finance companies).
- **H3 (Lender awareness)**: Pricing of borrower cybersecurity risk depends on the lender's own engagement with cybersecurity risk, measured via conference call discussions of cybersecurity and insurance policies (Jamilov et al. (2021)). Lenders who discuss cybersecurity risk are hypothesized to price it; those who do not, to ignore it.
- **H4 (Insurance)**: Cybersecurity insurance may signal adverse selection (riskier firms are more likely to buy it) and may induce moral hazard (weakening incentives to improve security), so it need not lower loan spreads.
- **H5 (Credit risk channel)**: Cybersecurity risk is correlated with default probability. To test this channel, the Merton (1974) distance-to-default is used as the dependent variable in place of loan spreads (see Empirical specifications for the formula).

**Identification.** The paper identifies effects from within-firm variation in cybersecurity risk scores over time, controlling for firm fixed effects (absorbing time-invariant firm characteristics) and industry-year fixed effects (absorbing sector-wide and time shocks). The cybersecurity risk score varies substantially within firms over the 2012-2018 window as cyber disclosures became more detailed following the SEC's 2011 guidance. Cross-sectional regressions without firm fixed effects (Table A.4) find no significant effect, consistent with the risk being idiosyncratic. Standard errors are clustered at the firm level.

## Method

**Cybersecurity risk measure.** The primary measure follows Florackis et al. (2023), who apply textual analysis to the "Item 1 A. Risk Factors" section of 10-K filings for U.S. non-financial firms from 2007 to 2018. The measure captures the similarity between a firm's current cybersecurity disclosure and the pre-breach disclosures of firms that subsequently experienced significant data breaches. A higher score indicates higher ex-ante cybersecurity risk, reflecting both the quantitative and qualitative intensity of cybersecurity disclosures. The paper standardizes the measure within the sample (subtracting the mean, dividing by the standard deviation). An indicator variable AboveZero captures firms with a positive risk score.

**Lender awareness.** Conference call data from Jamilov et al. (2021) identify whether a firm's quarterly earnings calls mention cybersecurity-related terms within 50 words of insurance topics. Lenders that discuss cybersecurity risk in their own calls (Discussed) or also mention insurance (Insured) are classified as aware. The Intensity variable counts cybersecurity-related keywords per call.

**Estimation.** All main regressions are OLS on a panel of loan facilities, building on the `panel-regression` technique with high-dimensional fixed effects. Following Lattanzio and Ma (2023), the paper employs either year + industry + firm fixed effects (Tables 2, cols. 1-2) or industry-year + firm fixed effects (Tables 2, cols. 3-4, and all subsequent tables). Industry-year FE absorb sector-time shocks and allow focus on within-firm variation. Loan-level controls include log loan amount, maturity, secured and covenant indicators, number of lead arrangers, non-bank participation indicator, and a relationship-lending indicator. Borrower controls (lagged one year) include log total assets, leverage, ROA, interest coverage, fixed-asset ratio, R&D intensity, log patents, book-to-market, a technology director indicator, and the share of AI-knowledge employees.

## Empirical specifications

**Main regression (Eq. 1, p. 5).**

$$
\log AISD_{i,j,t} = \beta_1 \text{CybersecurityRisk}_{i,t-1} + \gamma X_{i,j,t-1} + \text{FE} + \varepsilon_{i,j,t} \tag{1}
$$

where $$\log AISD_{i,j,t}$$ is the log of the All-in-Spread-Drawn (bps over LIBOR plus facility fee) for loan facility $$j$$ granted to firm $$i$$ in year $$t$$; $$\text{CybersecurityRisk}_{i,t-1}$$ is the standardized Florackis et al. (2023) score; $$X_{i,j,t-1}$$ is the vector of loan and borrower controls; FE are fixed effects (industry-year and firm in the preferred specification). A positive $$\beta_1$$ indicates lenders price cybersecurity risk in spreads. Results: Table 2, p. 5; full controls in Table A.3, p. 19.

**Lender composition interaction (Eq. 2, p. 6).** To test whether commercial banks differ from non-bank lenders:

$$
\log AISD_{i,j,t} = \beta_1 \text{CybersecurityRisk}_{i,t-1} + \beta_2 \text{LenderComposition}_j + \beta_3 \text{CybersecurityRisk}_{i,t-1} \times \text{LenderComposition}_j + \gamma X_{i,j,t-1} + \text{FE} + \varepsilon_{i,j,t} \tag{2}
$$

where LenderComposition is a categorical variable: the base group is commercial-bank-only loans; InvestmentBank includes investment bank participation; NonBank includes non-bank lender participation. Results: Table 3, p. 6. Commercial bank-only regressions (Table 3, cols. 1-2) exclude all non-commercial-bank loans and estimate Eq. (1) directly. The interaction $$\beta_3$$ tests whether non-bank or investment-bank participation dilutes the cybersecurity premium.

**Financial covenants.** Equation (1) is re-estimated replacing $$\log AISD_{i,j,t}$$ with the number of financial covenants attached to the loan facility, testing whether lenders adjust monitoring intensity. Results: Table 4, p. 7.

**Insurance effect.** A logit model on a firm-year panel tests which firms hold cybersecurity insurance. Equation (1) is then augmented with Insurance and a Cybersecurity risk x Insurance interaction term, testing whether insurance mitigates the spread premium. Results: Table 5, p. 8.

**Lender awareness subsamples.** Equation (1) is estimated separately on subsamples split by whether the lead arranger mentioned cybersecurity risk (Mention vs. NoMention) and whether they discussed insurance (Insurance vs. NoInsurance). Single-lead-loan regressions (Table 7, p. 10) add lender fixed effects and firm-lender fixed effects, with the interaction Cybersecurity risk x Insured testing whether lenders who have adopted cybersecurity insurance policies price borrower risk more. Results: Table 6, p. 9; Table 7, p. 10.

**Lender share (exposure reduction).** The outcome is each lender's percentage share in the syndicated loan. The interaction of Cybersecurity risk with Discussed and Insured tests whether aware lenders reduce exposure to riskier borrowers. Results: Table 8, p. 11.

**Credit risk mechanism: Merton distance-to-default.** To test the credit channel, the dependent variable is replaced with the Merton (1974) distance-to-default (DD). Appendix C specifies a geometric Brownian motion for firm value (Eq. 3, p. 18):

$$
dV = \mu V\,dt + \sigma_V V\,dW \tag{3}
$$

Equity is treated as a call option on firm value, with equity value given by the Black-Scholes-Merton relation (Eq. 4, p. 18), where $$d_1$$ and $$d_2$$ are defined by Eqs. 5-6 (p. 18):

$$
E = V N(d_1) - e^{-rT} F N(d_2) \tag{4}
$$

$$
d_1 = \frac{\ln(V/F) + (r + 0.5\sigma_V^2)T}{\sigma_V\sqrt{T}} \tag{5}
$$

$$
d_2 = d_1 - \sigma_V\sqrt{T} \tag{6}
$$

The equity volatility and asset volatility relation is (Eq. 7, p. 18):

$$
\sigma_E = \left(\frac{V}{E}\right)N(d_1)\sigma_V \tag{7}
$$

They solve Eqs. 3 and 4 simultaneously to infer $$V$$ and $$\sigma_V$$. The distance-to-default (Eq. 8, p. 18) is:

$$
DD = \frac{\ln\!\left(\dfrac{V}{F}\right) + \left(\mu - 0.5\sigma_V^2\right) T}{\sigma_V \sqrt{T}} \tag{8}
$$

where $$F$$ is the face value of debt, $$\mu$$ is the estimated annual return on firm assets (risk-free rate plus 0.06 as equity premium proxy), and $$T = 1$$ year. A negative coefficient on Cybersecurity risk in Eq. (1) re-estimated with DD as the outcome would confirm the credit channel (higher risk reduces distance-to-default). Results: Table 9, p. 12. Both Kamiya et al. (2021) and prior credit rating agency analyses motivate this mechanism test.

**Other estimating specifications.** For financial monitoring, the authors replace the Eq. (1) outcome with the number of financial covenants (Table 4, p. 8):

$$
\text{NFinancialCovenant}_{i,j,t} = \beta_1\text{CybersecurityRisk}_{i,t-1} + \gamma X_{i,j,t-1} + \text{FirmFE}_i + \text{IndustryYearFE}_{s,t} + \varepsilon_{i,j,t}
$$

Errors are clustered by firm. The commercial-bank-only sample has 3,242 loan facilities; the full sample has 5,957.

The insurance-uptake model is a firm-year logit (Table 5, cols. 1-2, p. 8):

$$
\log\left(\frac{\Pr(\text{Insurance}_{i,t}=1)}{1-\Pr(\text{Insurance}_{i,t}=1)}\right) = \beta_1\text{CybersecurityRisk}_{i,t-1} + \gamma X_{i,t-1} + \text{IndustryYearFE}_{s,t} + [\text{FirmFE}_i]
$$

The bracketed firm effects appear only in column 2. The samples contain 3,269 firm-years in column 1 and 1,287 in column 2. The loan-spread insurance specification (Table 5, cols. 3-4, p. 8) augments Eq. (1):

$$
\log \text{AISD}_{i,j,t} = \beta_1\text{CybersecurityRisk}_{i,t-1} + \beta_2\text{Insurance}_{i,t} + \beta_3(\text{CybersecurityRisk}_{i,t-1}\times\text{Insurance}_{i,t}) + \gamma X_{i,j,t-1} + \text{FirmFE}_i + \text{IndustryYearFE}_{s,t} + \varepsilon_{i,j,t}
$$

These facility samples contain 2,992 commercial-bank loans and 5,535 loans overall; standard errors are clustered by firm.

For single-lead-arranger loans, the awareness specifications interact borrower risk with lender awareness categories or the number of discussion keywords (Table 7, p. 10):

$$
\log \text{AISD}_{i,j,t} = \beta_1\text{CybersecurityRisk}_{i,t-1} + \beta_2(\text{CybersecurityRisk}_{i,t-1}\times\text{Discussed}_j) + \beta_3(\text{CybersecurityRisk}_{i,t-1}\times\text{Insured}_j) + \gamma X_{i,j,t-1} + \text{FE} + \varepsilon_{i,j,t}
$$

$$
\log \text{AISD}_{i,j,t} = \beta_1\text{CybersecurityRisk}_{i,t-1} + \beta_2(\text{CybersecurityRisk}_{i,t-1}\times\text{Intensity}_{j,t-1}) + \gamma X_{i,j,t-1} + \text{FE} + \varepsilon_{i,j,t}
$$

Both use 4,396 facilities. Columns 1-2 include industry-year, firm, and lender fixed effects; columns 3-4 include industry-year and firm-lender fixed effects. Standard errors are two-way clustered by borrower and lead arranger. For lender shares (Table 8, p. 11), the dependent variable is the percentage allocation to lender $$j$$ in the syndicate:

$$
\text{Share}_{i,j,t} = \beta_1\text{CybersecurityRisk}_{i,t-1} + \beta_2(\text{CybersecurityRisk}_{i,t-1}\times\text{Discussed}_{j,t-1}) + \beta_3(\text{CybersecurityRisk}_{i,t-1}\times\text{Insured}_{j,t-1}) + \gamma X_{i,j,t-1} + \text{FE} + \varepsilon_{i,j,t}
$$

The specifications use lender and firm fixed effects or firm-lender fixed effects, alongside industry-year effects, and cluster errors by borrower and lender. Samples are 4,396 single-lead facilities, 6,279 lead-arranger observations, and 36,105 all-lender observations.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Florackis et al. (2023) cybersecurity risk scores | Main ex-ante cybersecurity risk measure derived from 10-K filings (2007-2018) | No page yet (based on SEC EDGAR 10-K filings: [EDGAR](/wiki/datasets/edgar/)) |
| Jamilov et al. (2021) conference call data | Borrower insurance coverage and lender awareness of cybersecurity risk from earnings call transcripts | No page yet |
| Thomson Reuters LPC DealScan | Syndicated loan facilities (spreads, covenants, lender identities, amounts, maturity, collateral) 1988-2019; sample 2012-2018 | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Compustat | Borrower financial characteristics (lagged one year): total assets, leverage, ROA, R&D, book-to-market | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Kogan et al. (2017) patent data | Patent count control for firm technological intensity | No page yet |
| Babina et al. (2024) AI employee data | Share of employees with AI-related knowledge | No page yet |
| WRDS Audit Analytics Cybersecurity | Data breach events; used to exclude post-breach observations | [WRDS](/wiki/commercial/wrds/) (licensed) |

Sample: 5,957 loan facilities from 1,714 unique U.S. non-financial borrowers, originated 2012-2018 (one year after the SEC's October 2011 cybersecurity disclosure guidance). Facility-level (loan as the unit of observation). Borrower variables are annual, lagged one year.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jcorpfin.2026.102958) if you are: studying how non-standard risks (outside financial statements) enter credit pricing; building a model of lender heterogeneity in risk assessment; designing policies to raise bank awareness of operational or cyber risks (the stress-test policy implication is spelled out in the conclusion); or extending the analysis to international markets, different loan types, or other unconventional risk measures. Tables A.3 and A.4 (pp. 19-20) provide the full coefficient vectors and the cross-sectional robustness check.

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* vol. 98, 2026, article 102958. DOI: [10.1016/j.jcorpfin.2026.102958](https://doi.org/10.1016/j.jcorpfin.2026.102958). This page includes an initial distillation and verification from 2026-06-26 and an expanded extraction and re-verification by gpt-6-luna on 2026-10-04. The analysis was not independently reproduced or human-verified. The paper is paywalled (Elsevier; no CC license). Only text excerpts and numeric results appear here under extract-only use; the verbatim PDF is not hosted or redistributed.

Choi, Bok Min, Hans Degryse, and Kristien Smedts. "Do lenders price firms' cybersecurity risk?" *Journal of Corporate Finance* 98 (2026): 102958. DOI: 10.1016/j.jcorpfin.2026.102958.
