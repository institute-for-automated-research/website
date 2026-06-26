---
title: "Real Estate Collateral, Lender Screening, and M&A Performance: Gao, Luong & Qiu (2026)"
description: >-
  Distilled: Higher market value of corporate real estate (REMV) improves acquirer M&A deal quality
  measured by three-day announcement returns, operating through two channels: real estate collateral
  triggers tighter lender acquisition covenants (ex-ante screening), and REMV appreciation expands
  financial flexibility for constrained firms in high-growth industries. Journal of Corporate Finance
  98, 2026, CC BY 4.0. Seven core results with source locators, the empirical specifications, and
  the REMV construction equations.
sidebar:
  label: Gao-Luong-Qiu 2026
  order: 1
tags: [paper-summary, mergers-acquisitions, real-estate, collateral, lender-screening, corporate-finance,
       panel-regression, instrumental-variables, event-study, open-access, cc-by, peer-reviewed, unreplicated,
       data:wrds, data:edgar, data:sdc-platinum]
paper:
  authors: Mingze Gao, Thanh Son Luong, Buhui Qiu
  authorList:
    - { family: Gao, given: Mingze, orcid: "0000-0002-8635-4269", affiliation: "Macquarie Business School, Macquarie University, Australia" }
    - { family: Luong, given: "Thanh Son", affiliation: "University of Sydney Business School, The University of Sydney, Australia" }
    - { family: Qiu, given: Buhui, orcid: "0000-0003-2233-0986", affiliation: "University of Sydney Business School, The University of Sydney, Australia" }
  year: 2026
  venue: Journal of Corporate Finance 98 (2026) 102962
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2026.102962
  tier: field
  jel:
    codes: [G34, G32, G21]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Housing Market and Economics", "Credit Risk and Financial Regulations", "Financial Reporting and Valuation Research"]
  dataAccess: licensed-commercial
  outcome:
    - acquirer three-day cumulative abnormal return around M&A announcement (CAR3)
    - acquisition covenant restrictiveness
    - bid withdrawal probability
  outcomeClass: [security-returns, firm-real-outcomes]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-01-22; matches artifact page-1 CC BY license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC BY 4.0 (Elsevier; not fetched directly; confirmed via Crossref DOI metadata 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 7
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression, event-study]
    identification: instrument
  contributionType: [new-fact, new-data]
  mechanisms: [collateral, information-asymmetry, financial-constraint]
  introducesData: true
  scope:
    region: US
    assetClass: US equities, corporate M&A deals
    period: 2004-01..2020-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, transaction]
    n: "3,272 completed M&A deals, 2004-2020; 948 with matched RE-collateral loan filings"
  findings:
    - { ref: R1, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "0.025*** (SE 0.007); 1-SD increase in REMV (0.182) = 0.455 pp in CAR3", direction: positive, vsBenchmark: "41% of sample mean CAR3 of 1.1%" }
    - { ref: R2, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "2SLS instrumented REMV: 0.170** (SE 0.075); Cragg-Donald F = 13.321; Hansen J p = 0.376 and 0.395", direction: positive }
    - { ref: R3, outcome: "acquisition covenant restrictiveness", metric: coefficient, value: "RE collateral = 0.147*** (SE 0.026) on M&A restriction; univariate: 85.47% of RE-collateral loans have partial restrictions vs. 54.66% for non-RE-collateral loans (p < 0.001)", direction: positive }
    - { ref: R4, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "RE collateral indicator = 0.010* (SE 0.005) on CAR3; univariate: CAR3 = 2.26% (RE-backed, N=645) vs. 1.16% (other loans, N=785), p = 0.0065", direction: positive }
    - { ref: R5, outcome: "bid withdrawal probability", metric: coefficient, value: "CAR3 x RE collateral = -0.431** (SE 0.191) on withdrawal; significant at 5% across both specifications (N=976)", direction: negative, vsBenchmark: "withdrawal is more sensitive to negative deal signals when RE is pledged as collateral" }
    - { ref: R6, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "High industry Q: 0.035*** (SE 0.010) vs. low: 0.017* (SE 0.010); financially constrained + high-growth: 0.054*** (SE 0.020) vs. constrained + low-growth: -0.001 (n.s.)", direction: positive, vsBenchmark: "high-growth REMV coefficient roughly double low-growth coefficient" }
    - { ref: R7, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "High growth + M&A restriction: 0.092*** (SE 0.029); high growth + no restriction: 0.032*** (SE 0.009); low growth + restriction: 0.031 (n.s.); low growth + no restriction: 0.010 (n.s.)", direction: positive, vsBenchmark: "lender screening amplifies REMV effect in high-growth + high-restriction quadrant" }
  resultType: new-finding
  relatesTo:
    - { cite: "Chaney, Sraer & Thesmar (2012)", relation: builds-on, note: "REMV construction methodology; extended here to include post-1993 firm entry and real estate transactions via recursive HPI-inflation of book values" }
    - { cite: "Hossain et al. (2023)", relation: contradicts, note: "find insignificant effect of REMV on CAR3 using CST-style REMV and a 2004-2015 sample; this paper finds a positive significant effect using a broader sample and extended REMV measure" }
    - { cite: "Rajan & Winton (1995)", relation: builds-on, note: "theoretical prediction that riskier collateral induces more intensive lender ex-ante monitoring and screening" }
    - { cite: "Campello et al. (2022)", relation: cites, note: "real estate collateral is riskier than other types due to low liquidity and redeployability, motivating lender monitoring incentives" }
  openQuestions:
    - "How different forms of collateralizable assets affect capital allocation efficiency and long-term firm value creation in the M&A context (p. 22, Conclusion)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-28 including appendix tables); seven results extracted from CC-BY PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; one fix applied: R2 overclaimed 0.170** (SE 0.075) for both 2SLS columns but Table 4 Col. 3 is 0.169** (SE 0.074); corrected in Core results table and Empirical specifications text. All other R1-R7 locators, coefficients, SEs, significance stars, and sample sizes match the PDF. All equations (BV, Age, MV, recursive MV, REMV normalisation, Eq. 1, lender-screening regression, bid-withdrawal interaction) verified term-by-term. No em-dashes or colorful adjectives found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102962", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-01-22" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the real estate market value measure it constructs (REMV), the identification strategy, and the two economic channels it tests: enough to know what it found and how, without reading the full 28 pages. To replicate or extend, read the original at [doi.org/10.1016/j.jcorpfin.2026.102962](https://doi.org/10.1016/j.jcorpfin.2026.102962).

## TL;DR

Gao, Luong & Qiu (2026) show that the market value of a firm's corporate real estate holdings (REMV) positively predicts the quality of its subsequent M&A decisions. Using 3,272 completed deals (2004-2020) and instrumental variables based on headquarters-state property taxes, crime rates, and natural-disaster exposure, the paper documents that a one-standard-deviation increase in REMV raises the acquirer's three-day announcement return (CAR3) by 0.455 percentage points, roughly 41% of the sample mean. Two complementary economic channels account for this effect. First, acquirers with high REMV are more likely to pledge real estate as collateral in M&A-related loans, and such loans embed substantially more restrictive acquisition covenants, consistent with lender ex-ante screening as in Rajan & Winton (1995). Second, REMV appreciation relaxes financing constraints for acquirers in industries with strong growth opportunities, enabling profitable acquisitions that would otherwise be unattainable. The paper extends the REMV construction method of Chaney, Sraer & Thesmar (2012) and contradicts Hossain et al. (2023), who report an insignificant CAR3 effect using a narrower CST-based measure and a shorter sample window.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Standard errors clustered at the acquirer level unless noted. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | REMV positively predicts acquirer CAR3 at the 1% level across all baseline specifications and sample restrictions | Table 3 Panel A Col. 1, p. 9 | Coefficient 0.025\*\*\* (SE 0.007); 1-SD increase in REMV (SD=0.182) raises CAR3 by 0.455 pp; sample mean CAR3 = 1.1%, so the effect = ~41% of mean |
| R2 | 2SLS IV estimates confirm the positive REMV-CAR3 relation; instruments pass overidentification test | Table 4 Cols. 2-3, p. 15 | Instrumented REMV: Col. 2 = 0.170\*\* (SE 0.075), Col. 3 = 0.169\*\* (SE 0.074); Cragg-Donald F = 13.321; Hansen J p-values = 0.376 and 0.395 |
| R3 | Real estate collateral is associated with significantly more restrictive M&A acquisition covenants in loan agreements | Table 6 Panels A-B, p. 17 | Univariate: 85.47% of RE-collateral loans have partial acquisition restrictions vs. 54.66% for non-RE-collateral loans (p < 0.001); multivariate: RE collateral coefficient = 0.147\*\*\* (SE 0.026) |
| R4 | Acquirers pledging real estate collateral in M&A-linked loans earn significantly higher announcement returns | Table 6 Panel A + Table 7 Col. 1, pp. 17-18 | Univariate: CAR3 = 2.26% (RE collateral, N=645) vs. 1.16% (all other loans, N=785), p = 0.0065; multivariate: RE collateral = 0.010\* (SE 0.005) on CAR3 |
| R5 | RE-collateral borrowers are more likely to withdraw M&A bids when deal announcement returns are negative | Table 8, pp. 19-20 | CAR3 × RE collateral coefficient = -0.431\*\* (SE 0.191) on bid-withdrawal probability; significant at 5% in both specifications (N=976) |
| R6 | REMV-CAR3 relation is concentrated in high industry-growth firms and financially constrained acquirers in high-growth sectors | Table 9 Panels A-B, p. 21 | High industry Q: REMV = 0.035\*\*\* (SE 0.010) vs. low: 0.017\* (SE 0.010); financially constrained + high-growth: 0.054\*\*\* (SE 0.020) vs. constrained + low-growth: -0.001 (n.s.) |
| R7 | Two-dimensional test: both lender screening and financial flexibility are active simultaneously; returns are highest when growth is high and covenants are tight | Table 10, p. 21 | High growth + M&A restriction: 0.092\*\*\* (SE 0.029); high growth + no restriction: 0.032\*\*\* (SE 0.009); low growth + restriction: 0.031 (n.s.); low growth + no restriction: 0.010 (n.s.) |

**Overall (paper's conclusion).** Real estate asset values shape M&A deal quality through two complementary channels: collateral-driven lender screening (restrictive covenants identifying high-quality projects ex ante) and enhanced financial flexibility (allowing financially constrained firms to pursue NPV-positive acquisitions in high-growth industries). Results are robust to IV identification, alternative REMV measures (MSA-level HPI, commercial property index, CST method), firm fixed effects, and exclusion of firms in real-estate and tradable-industry subsamples.

## Theory / model

The paper develops no formal mathematical model. It articulates two hypotheses grounded in existing theories of collateral and corporate investment.

**H1 (lender screening).** When a firm pledges real estate as collateral for M&A-related financing, lenders face stronger monitoring incentives because real estate is illiquid and difficult to redeploy relative to other collateral types such as receivables or inventory (Campello et al. (2022)). Rajan & Winton (1995) predict that lenders accepting riskier collateral will increase ex-ante screening intensity by imposing more restrictive covenants. In the M&A context this implies real-estate-secured loans embed more restrictive acquisition covenants, disciplining borrower deal-making and selecting for higher-quality acquisitions and better announcement returns. The paper tests whether pledging real estate as collateral rather than any asset activates this screening mechanism.

**H2 (financial flexibility).** When REMV appreciates, a firm's pledgeable collateral value increases, expanding its borrowing capacity and relaxing financing constraints. This enhanced access to capital is particularly valuable for financially constrained acquirers in industries with strong growth opportunities (high Tobin's Q, sales growth, or asset growth), where positive NPV acquisitions exist but the binding constraint is access to external finance. Jovanovic & Rousseau (2002) argue high-Q firms should acquire low-Q targets; REMV appreciation helps constrained high-Q firms act on this potential.

**H1 versus moral-hazard theories.** An alternative view (Stulz & Johnson (1985); Boot et al. (1991); Holmstrom & Tirole (1997)) predicts that collateral substitutes for bank monitoring rather than intensifying it, leading to looser screening and lower deal quality. The paper tests these opposing predictions empirically using hand-collected covenant data and deal-performance measures (R3, R4, R7 above).

## Method

The paper extends the REMV construction of Chaney, Sraer & Thesmar (2012) (CST) to cover firms entering the sample after 1993 and to account for real estate purchases and dispositions throughout the sample period. The book value of a firm's real estate assets at year $$t$$ is (p. 5):

$$BV_t = FATB_t + FATC_t + FATP_t \tag{BV}$$

where FATB = plant and equipment including buildings; FATC = construction in progress; FATP = land and improvements (all at historical cost). For firms continuously reporting accumulated depreciation of buildings (DPACB) after 1993, the average age of real estate assets is estimated as:

$$\text{Age}_{i,t} \; (\text{in years}) = 40 \times \frac{DPACB_t}{FATB_t}, \qquad \text{Year of Purchase}_t = t - \text{Age}_{i,t}$$

and the market value of real estate is inflated from the historical book value at purchase to the current year using a state-level Housing Price Index (HPI), substituting CPI where HPI is unavailable (p. 5):

$$MV_t = BV_{\text{Year of Purchase}} \times \frac{HPI_t}{HPI_{\text{Year of Purchase}}} \tag{MV}$$

For firms that cease reporting DPACB after 1993, the market value is updated recursively year-by-year (p. 6). A positive change in book value $$\Delta BV_{t+1} > 0$$ signals a new real estate purchase: the market value of new assets is added to the existing assets appreciated by HPI:

$$MV_{t+1} = MV_t \times \frac{HPI_{t+1}}{HPI_t} + \Delta BV_{t+1}, \qquad \text{if } \Delta BV_{t+1} > 0$$

A non-positive change signals a disposal: the existing portfolio is scaled down by the fraction of book value sold and appreciated by HPI:

$$MV_{t+1} = MV_t \times \frac{HPI_{t+1}}{HPI_t} \times \frac{BV_{t+1}}{BV_t}, \qquad \text{if } \Delta BV_{t+1} \leq 0$$

The normalized measure used throughout is:

$$REMV_t = \frac{MV_t}{\text{Total assets}_t}$$

Panel A of Appendix Table A2 (p. 24) confirms high correlation with the CST measure (0.856 for firms with non-missing values) while providing substantially broader sample coverage, especially post-2010. For the lender-screening tests, the paper hand-collects approximately 1,200 M&A-related loan contracts from SEC EDGAR 8-K filings, classifying each as RE-collateral, non-RE-collateral, or unsecured, and coding six categories of restrictive acquisition covenants (full restriction, expenditure limit, minimum profitability of target, no hostile acquisition, no diversifying acquisition, pro forma compliance, specific acquisition target; Table A6, appendix, pp. 26-27).

## Empirical specifications

**Baseline OLS (Eq. 1, p. 9).** The primary regression is a deal-level OLS with two-digit SIC industry and year fixed effects:

$$CAR3_i = \beta_0 + \beta_1 \, REMV_{i,t-1} + \beta \, X_{i,t-1} + \gamma_k + \lambda_t + \varepsilon_i \tag{1}$$

Controls $$X_{i,t-1}$$ include acquirer log market cap, M/B ratio, ROA, leverage, log cash, past stock return, top-5 institutional ownership, state-level real estate return, and deal characteristics: relative size, all-cash indicator, tender offer, diversifying indicator, private target, subsidiary target. $$\gamma_k$$ = 2-digit SIC industry FE; $$\lambda_t$$ = year FE; standard errors clustered at the acquirer level. $$CAR3$$ is the market-adjusted three-day cumulative abnormal return around deal announcement using the CRSP value-weighted index. The headline coefficient across all columns of Table 3 Panel A is 0.025\*\*\* to 0.026\*\*\* (SEs 0.007).

**Instrumental variable 2SLS (Table 4, p. 15).** To address omitted-variable bias and reverse causality, three instruments are used for REMV in the first stage:

1. *State property tax rate*: higher state taxes depress real estate values and REMV (Oates (1969); Hoyt et al. (2011)) without directly affecting M&A activity. Data from the Minnesota Department of Revenue, 2004-2019.
2. *State crime rate*: higher crime rates reduce property values and REMV (Gibbons (2004); Linden & Rockoff (2008)) without directly affecting acquisition quality. Data from the FBI Uniform Crime Reporting (UCR) program.
3. *Has disaster* (county-level binary): indicator for counties with severe natural-disaster exposure in the recent two years (SHELDUS database; top-decile property damage; hazards relevant to real estate: flooding, wildfire, severe storms, earthquake, hurricane, landslide, coastal, tsunami). Natural disasters reduce local real estate values without directly affecting M&A strategy.

First-stage coefficients (Table 4 Col. 1): state property tax = -2.796\*\*\* (SE 0.815), crime rate = -0.002\*\* (SE 0.001), Has disaster = -0.042\*\* (SE 0.021). Cragg-Donald F = 13.321. Second stage: Col. 2 instrumented REMV coefficient = 0.170\*\* (SE 0.075); Col. 3 = 0.169\*\* (SE 0.074). Hansen J overidentification test p-values = 0.376 and 0.395, supporting instrument validity.

**Lender-screening regressions (Tables 6-7, pp. 17-18).** Acquisition covenant restrictiveness is modeled as:

$$\text{M\&A restriction}_{i} = \alpha_0 + \alpha_1 \, \text{RE collateral}_i + \alpha \, X_{i,t-1} + \gamma_k + \lambda_t + \nu_i$$

with the same controls as Eq. (1). RE collateral = 0.147\*\*\* (SE 0.026) in the full-or-partial-restriction specification (Table 6 Panel B Col. 1); non-RE collateral = -0.210\*\*\* (Col. 2). A separate regression of CAR3 on RE collateral in the matched-loan subsample (Table 7 Col. 1, N=948) yields a coefficient of 0.010\* (SE 0.005). Controlling for restrictive acquisition covenants makes the RE collateral coefficient insignificant (Appendix Table A12), confirming that covenants mediate the collateral-CAR3 link.

**Bid-withdrawal test (Table 8, pp. 19-20).** Ex-ante screening is verified by testing whether negative announcement returns more strongly predict withdrawal for RE-collateral borrowers:

$$\text{Withdrawn}_i = \delta_0 + \delta_1 \, CAR3_i + \delta_2 \, \text{RE collateral}_i + \delta_3 \, (CAR3_i \times \text{RE collateral}_i) + \delta \, X_{i,t-1} + \gamma_k + \lambda_t + u_i$$

using a sample of completed and withdrawn deals (N=976). The interaction $$\delta_3 = -0.431^{**}$$ (SE 0.191): worse announcement returns predict withdrawal significantly more for RE-collateral borrowers, consistent with stricter ex-ante screening making borrowers more selective in completing deals that receive negative market signals.

**Growth-opportunity and covenant heterogeneity (Tables 9-10, p. 21).** The sample is split by industry-level growth opportunity (Tobin's Q, sales growth, or asset growth relative to the annual cross-industry median) and by whether the matched loan includes M&A acquisition restrictions. The four cells of the high/low growth times restriction/no-restriction partition produce REMV coefficients on CAR3 ranging from 0.092\*\*\* (high growth, tight covenants) to 0.010 (n.s., low growth, loose covenants), confirming that lender screening and financial flexibility are simultaneously active and complementary.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Compustat annual (via WRDS) | Acquirer firm characteristics; DPACB, FATB, FATC, FATP for REMV construction; total assets, M/B, ROA, leverage, cash | [WRDS / Compustat](/wiki/commercial/wrds/) |
| CRSP (via WRDS) | CAR3 construction using value-weighted index; acquirer past stock return; market capitalization | [WRDS / CRSP](/wiki/commercial/wrds/) |
| Thomson One Banker SDC | M&A deal sample: 3,272 completed deals 2004-2020; deal value, method of payment, target type | no page yet |
| DealScan (via WRDS) | Loan collateral type identification; cross-check for RE-collateral classification | [WRDS / DealScan](/wiki/commercial/wrds/) |
| SEC EDGAR 8-K filings | Hand-collected loan contracts (~1,200 agreements) for acquisition covenant data and RE collateral classification | [SEC EDGAR](/wiki/datasets/edgar/) |
| State-level HPI / CPI | Inflating historical real estate book values to current market values in the REMV construction | no page yet |
| FBI UCR crime data | Instrument 2: state-level crime rates 2004-2019 | no page yet |
| SHELDUS natural disasters | Instrument 3: county-level severe natural-disaster exposure, 2-year rolling window | no page yet |
| Minnesota Dept. of Revenue | Instrument 1: state property tax rates scaled by state personal income, 2004-2019 | no page yet |

Sample: 3,272 M&A deals announced 2004-2020 (deal level); acquirer characteristics lagged one year. Lender-screening subsample: 1,430 deals with matched loan filings (8-K + DealScan); RE-collateral loan subsample: 645 (8-K filings) and 948 deals (including DealScan matches).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jcorpfin.2026.102962) if you are: studying how asset collateral shapes deal quality beyond the announcement-return evidence; replicating the extended REMV construction (Section 3 and Appendix Table A2); examining how acquisition covenants in credit agreements reflect lender screening (Tables 6-8); or testing the interaction of real estate wealth with financial constraints and industry growth opportunities (Tables 9-10). Tables 3-4 contain the main result and IV estimates; Tables 6-7 the covenant and collateral evidence.

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* 98 (2026) 102962. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Gao, Mingze, Thanh Son Luong, and Buhui Qiu.
> "Real estate collateral, lender screening, and M&A performance."
> *Journal of Corporate Finance* 98 (2026): 102962.
> DOI: 10.1016/j.jcorpfin.2026.102962. © 2026 The Authors.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
