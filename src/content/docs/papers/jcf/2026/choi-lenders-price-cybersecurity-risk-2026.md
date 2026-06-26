---
title: "Lenders Pricing Cybersecurity Risk: Choi, Degryse & Smedts (2026)"
description: >-
  Distilled: Using syndicated loan data for U.S. non-financial firms
  (2012-2018), lenders charge 4 to 13 basis points higher loan spreads for
  firms with rising ex-ante cybersecurity risk, with commercial banks pricing
  more conservatively than non-bank lenders and pricing concentrated among
  lenders who are themselves aware of cybersecurity risk. Cybersecurity
  insurance does not mitigate the higher spreads. Journal of Corporate Finance
  vol. 98, 2026, paywalled; eight core results with source locators, the
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
    - number of financial covenants
    - lender share in syndicated loan
    - borrower distance-to-default
  outcomeClass: [firm-financing, credit-supply]
  license: "Elsevier paywalled; Crossref license block contains TDM-only licenses (Elsevier TDM userlicense 1.0, TDMRep, and STM-ASF policy licenses only); no CC or open-access license found"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 8
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
    dataType: [accounting, text]
    granularity: [firm, transaction]
    n: "5,957 loan facilities from 1,714 unique borrowers"
  findings:
    - { ref: R1, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "0.021** on cybersecurity risk score (firm+industry-year FE); ~2.1% increase per 1 SD, ~4.15 bps", direction: positive }
    - { ref: R2, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "AboveZero: 0.063*** (firm+industry-year FE); firms with non-zero cybersecurity exposure face ~12.71 bps higher AISD on average", direction: positive }
    - { ref: R3, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Commercial bank only: 0.029** (intensive), 0.087*** (extensive); NonBank interaction: -0.033***, -0.092*** (nearly offsets base effect)", direction: positive, vsBenchmark: "commercial banks more conservative; non-bank participation largely offsets the cyber premium" }
    - { ref: R4, outcome: number of financial covenants, metric: coefficient, value: "0.065* more covenants per 1 SD cybersecurity risk (commercial banks only; ~6% of mean covenant count)", direction: positive }
    - { ref: R5, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "Insurance: 0.003-0.004 (ns); Cybersecurity risk x Insurance: 0.001-0.007 (ns)", direction: none }
    - { ref: R6, outcome: "syndicated loan all-in-spread-drawn (AISD)", metric: coefficient, value: "No-mention: -0.014 (ns); Mention: 0.028***; Insured lenders: 0.042***", direction: positive, vsBenchmark: "pricing absent without lender awareness; only lenders discussing cybersecurity risk price it in spreads" }
    - { ref: R7, outcome: lender share in syndicated loan, metric: coefficient, value: "Cybersecurity risk x Insured: -1.310** on lead arranger share (%); paper reports 2.51% (1.31%) decrease per 1 SD when lender discussed risk (insurance) (mean share 19.81%)", direction: negative }
    - { ref: R8, outcome: borrower distance-to-default, metric: coefficient, value: "-0.209* (loan-level sample), -0.181* (firm-year sample) per 1 SD cybersecurity risk; ~3% decrease in distance-to-default", direction: negative }
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
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102958", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license block contains TDM-only licenses (Elsevier TDM userlicense 1.0 and TDMRep, plus Elsevier STM-ASF policy licenses only); no CC or open-access license present; paper is paywalled" }
---

**What this is.** Core results, tested hypotheses, and regression specifications from this paper, distilled from the published PDF. To replicate or extend the analysis, read the full source at the [original](https://doi.org/10.1016/j.jcorpfin.2026.102958).

## TL;DR

Using 5,957 syndicated loan facilities for U.S. non-financial firms from 2012 to 2018, the paper asks whether lenders price firms' ex-ante cybersecurity risk in loan spreads. The main measure of cybersecurity risk, from Florackis et al. (2023), captures the textual similarity of a firm's 10-K disclosures to those of firms that experienced data breaches. The paper's key findings are: (1) a one standard deviation increase in cybersecurity risk raises the All-in-Spread-Drawn (AISD) by about 2%, equivalent to roughly 4 basis points; (2) first-time exposure to non-zero cybersecurity risk adds about 13 basis points; (3) commercial banks price the risk more strictly than non-bank lenders; (4) pricing depends on the lender's own awareness: only lenders who discuss cybersecurity risk in conference calls price it in spreads; (5) cybersecurity insurance does not reduce the premium; and (6) the credit risk channel, identified via distance-to-default, mediates the pricing. Prior studies such as Huang and Wang (2021) and Sheneman (2017) documented ex-post pricing after data breaches; this paper is the first to examine ex-ante pricing from the lenders' perspective.

## Core results

Magnitudes and significance are as reported; \*/\*\*/\*\*\* = 10%/5%/1%. All main regressions use the log AISD as the outcome and include firm fixed effects and industry-year fixed effects. Standard errors are clustered at the firm level. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Lenders price cybersecurity risk at the **intensive margin**: within-firm increases in the cybersecurity risk score raise the AISD | Table 2, col. (3), p. 6 | Coefficient on Cybersecurity risk = 0.021\*\*; ~2.1% increase in AISD per 1 SD, ~4.15 bps (mean AISD = 195 bps) |
| R2 | At the **extensive margin**, first exposure to non-zero cybersecurity risk carries a large premium | Table 2, col. (4), p. 6 | AboveZero coefficient = 0.063\*\*\*; firms with any cybersecurity exposure face ~12.71 bps higher AISD on average |
| R3 | **Commercial banks price cybersecurity risk more strictly** than non-bank lenders; non-bank participation nearly offsets the premium | Table 3, cols. (1)-(4), p. 7 | CBank-only: Cybersecurity risk = 0.029\*\* (intensive), AboveZero = 0.087\*\*\* (extensive); NonBank interaction: -0.033\*\*\*, AboveZero x NonBank = -0.092\*\*\* (offsets base) |
| R4 | Commercial banks **attach more financial covenants** as cybersecurity risk rises | Table 4, col. (1), p. 8 | Cybersecurity risk coefficient = 0.065\*; ~0.065 additional covenants per 1 SD, ~6% of mean covenant count; effect not significant in full sample with non-bank lenders |
| R5 | **Cybersecurity insurance does not mitigate** the higher loan spreads | Table 5, cols. (3)-(4), p. 8 | Insurance coefficient = 0.003-0.004 (ns); Cybersecurity risk x Insurance = 0.001-0.007 (ns); both small and insignificant |
| R6 | Pricing is **driven by lender awareness**: the premium appears only when lead arrangers discuss cybersecurity risk in their own conference calls | Table 6, cols. (1)-(2), p. 9 | No-mention subsample: coefficient = -0.014 (ns); Mention subsample: 0.028\*\*\*; Insured lenders: 0.042\*\*\* |
| R7 | Aware lenders **reduce their loan-share exposure** to riskier borrowers after recognizing their own cybersecurity risk | Table 8, col. (1), p. 11 | Cybersecurity risk x Insured: -1.310\*\* on lead arranger share (%); paper reports a 2.51% (1.31%) decrease per 1 SD when lead arranger discussed cybersecurity risk (insurance policy) |
| R8 | Cybersecurity risk is priced **via the credit risk channel**: it lowers borrower distance-to-default | Table 9, p. 12 | Cybersecurity risk coefficient on distance-to-default: -0.209\* (loan-level sample), -0.181\* (firm-year sample); ~3% average decrease per 1 SD |

**Overall (paper's conclusion).** Lenders do price ex-ante cybersecurity risk, but only through within-firm changes in risk scores (not cross-sectional differences), and only when they are themselves engaged with cybersecurity risk management. Commercial banks are more conservative than non-bank lenders. The credit risk mechanism, proxied by distance-to-default, mediates the pricing. Cybersecurity insurance neither reduces breach probability nor provides comprehensive loss coverage, so it does not lower the credit premium.

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

**Credit risk mechanism: Merton distance-to-default.** To test the credit channel, the dependent variable is replaced with the Merton (1974) distance-to-default (DD), calculated following the Appendix C procedure (p. 18). Firm value $$V$$ and asset volatility $$\sigma_V$$ are solved simultaneously from the Black-Scholes-Merton equity pricing equation (Eq. 4, p. 18) and the relationship between equity volatility and asset volatility (Eq. 7, p. 18). The distance-to-default (Eq. 8, p. 18) is:

$$
DD = \frac{\ln\!\left(\dfrac{V}{F}\right) + \left(\mu - 0.5\sigma_V^2\right) T}{\sigma_V \sqrt{T}} \tag{8}
$$

where $$F$$ is the face value of debt, $$\mu$$ is the estimated annual return on firm assets (risk-free rate plus 0.06 as equity premium proxy), and $$T = 1$$ year. A negative coefficient on Cybersecurity risk in Eq. (1) re-estimated with DD as the outcome would confirm the credit channel (higher risk reduces distance-to-default). Results: Table 9, p. 12. Both Kamiya et al. (2021) and prior credit rating agency analyses motivate this mechanism test.

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

Source: peer-reviewed, *Journal of Corporate Finance* vol. 98, 2026, article 102958. DOI: [10.1016/j.jcorpfin.2026.102958](https://doi.org/10.1016/j.jcorpfin.2026.102958). This distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-26 and is **not human-verified or independently reproduced**. The paper is paywalled (Elsevier; no CC license). Only text excerpts and numeric results appear here under extract-only use; the verbatim PDF is not hosted or redistributed.

Choi, Bok Min, Hans Degryse, and Kristien Smedts. "Do lenders price firms' cybersecurity risk?" *Journal of Corporate Finance* 98 (2026): 102958. DOI: 10.1016/j.jcorpfin.2026.102958.
