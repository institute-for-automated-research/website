---
title: "Real Estate Collateral, Lender Screening, and M&A Performance: Gao, Luong & Qiu (2026)"
description: >-
  Distilled: Higher market value of corporate real estate (REMV) improves acquirer M&A deal quality
  measured by three-day announcement returns, operating through two channels: real estate collateral
  triggers tighter lender acquisition covenants (ex-ante screening), and REMV appreciation expands
  financial flexibility for constrained firms in high-growth industries. Journal of Corporate Finance
  98, 2026, CC BY 4.0. Seventeen core results with source locators, the empirical specifications, and
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Housing Market and Economics", "Credit Risk and Financial Regulations", "Financial Reporting and Valuation Research"]
  dataAccess: licensed-commercial
  outcome:
    - acquirer three-day cumulative abnormal return around M&A announcement (CAR3)
    - acquisition covenant restrictiveness
    - bid withdrawal probability
    - acquirer deal financing and target selection
    - post-acquisition operating performance
    - deal completion and offer premium
    - M&A acquisitiveness
  outcomeClass: [security-returns, firm-real-outcomes]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-01-22; matches artifact page-1 CC BY license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC BY 4.0 (Elsevier; not fetched directly; confirmed via Crossref DOI metadata 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 17
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression, event-study]
    identification: instrument
  contributionType: [new-fact, new-data]
  mechanisms: [collateral, information-asymmetry, financial-constraint, agency, liquidity]
  introducesData: true
  scope:
    region: US
    assetClass: US equities, corporate M&A deals
    period: 2004-01..2020-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, transaction]
    n: "3,272 completed M&A deals, 2004-2020; 948 with matched M&A-related loan agreements"
  findings:
    - { ref: R1, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "0.025*** (SE 0.007); 1-SD increase in REMV (0.182) = 0.455 pp in CAR3", direction: positive, vsBenchmark: "41% of sample mean CAR3 of 1.1%" }
    - { ref: R2, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "2SLS instrumented REMV: 0.170** (SE 0.075); Cragg-Donald F = 13.321; Hansen J p = 0.376 and 0.395", direction: positive }
    - { ref: R3, outcome: "acquisition covenant restrictiveness", metric: coefficient, value: "RE collateral = 0.147*** (SE 0.026) on M&A restriction; univariate: 85.47% of RE-collateral loans have partial restrictions vs. 54.66% for loans without RE collateral (p < 0.001)", direction: positive }
    - { ref: R4, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "RE collateral indicator = 0.010* (SE 0.005) on CAR3; univariate: CAR3 = 2.26% (RE-backed, N=645) vs. 1.16% (other loans, N=785), p = 0.0065", direction: positive }
    - { ref: R5, outcome: "bid withdrawal probability", metric: coefficient, value: "CAR3 x RE collateral = -0.431** (SE 0.191) on withdrawal; significant at 5% across both specifications (N=976)", direction: negative, vsBenchmark: "withdrawal is more sensitive to negative deal signals when RE is pledged as collateral" }
    - { ref: R6, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "High industry Q: 0.035*** (SE 0.010) vs. low: 0.017* (SE 0.010), difference p = 0.173; constrained + high-growth: 0.054*** (SE 0.020) vs. constrained + low-growth: -0.001 (n.s.), difference p = 0.066", direction: positive, vsBenchmark: "high-growth REMV coefficient roughly double the low-growth estimate, but the difference is not statistically significant in the full sample" }
    - { ref: R7, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "High growth + M&A restriction: 0.092*** (SE 0.029); high growth + no restriction: 0.032*** (SE 0.009); low growth + restriction: 0.031 (n.s.); low growth + no restriction: 0.010 (n.s.)", direction: positive, vsBenchmark: "lender screening amplifies REMV effect in high-growth + high-restriction quadrant" }
    - { ref: R8, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: return-spread, value: "High REMV group mean 1.3% (N=1,630) vs. low REMV group 0.9% (N=1,642); mean-difference p = 0.050", direction: positive, vsBenchmark: "high versus low REMV median split" }
    - { ref: R9, outcome: "acquirer deal financing and target selection", metric: coefficient, value: "REMV coefficients: percent cash 0.100*** (SE 0.033); all-cash indicator 0.106* (SE 0.057); have loan 0.106* (SE 0.060); RE collateral 0.224** (SE 0.096); diversifying deal -0.237*** (SE 0.070)", direction: mixed }
    - { ref: R10, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "Robustness REMV: industry-year FE 0.026*** (SE 0.008); state-year controls 0.026*** (SE 0.007); MSA measure 0.031*** (SE 0.008); commercial property index 0.014*** (SE 0.004); CST measure 0.015** (SE 0.008). Tradable-sector estimates: 0.024*** and 0.024*** (shipping-distance and manufacturing splits)", direction: positive, vsBenchmark: "alternative specifications, REMV constructions, and tradable-industry subsamples" }
    - { ref: R11, outcome: "post-acquisition operating performance", metric: coefficient, value: "Appendix Table A7 reports positive REMV associations with post-deal change in ROA and sales growth, and a negative association with change in cost; see Table A7, pp. 28-29", direction: mixed }
    - { ref: R12, outcome: "deal completion", metric: coefficient, value: "Internet Appendix Table IA1, cited in §5.1 footnote 15 (p. 9): no statistically significant relation between REMV and deal completion conditional on announcement; the appendix coefficient is not reproduced in this PDF", direction: none }
    - { ref: R13, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "Table A13 Panel A: REMV 0.027*** for private targets, 0.010 (n.s.) for subsidiary targets, 0.019** for non-public targets, and 0.053*** for public targets; public vs. subsidiary difference p = 0.037", direction: positive }
    - { ref: R14, outcome: "target offer premium and combined bidder-target synergy return", metric: coefficient, value: "Table A13 Panel B REMV estimates: offer premium 0.157* (SE 0.092); SDC 1-day premium 0.166 (0.122); 1-week premium 0.135 (0.120); 4-week premium 0.143 (0.109), with only the first marginally significant", direction: positive }
    - { ref: R15, outcome: "combined bidder-target synergy return", metric: coefficient, value: "Table A13 Panel B synergy coefficient 0.049*** (SE 0.018), based on value-weighted target-bidder announcement CAR over (-1,+1)", direction: positive }
    - { ref: R16, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "Table A11 2SLS instrumented RE collateral: 0.112*** (SE 0.040) and 0.113*** (SE 0.040); Cragg-Donald F = 13.036; Hansen J p = 0.238 and 0.251", direction: positive }
    - { ref: R17, outcome: "acquirer three-day cumulative abnormal return around M&A announcement (CAR3)", metric: coefficient, value: "Table A12: acquisition restriction 0.011** (SE 0.005) in both columns; RE collateral 0.006 (SE 0.006) and 0.005 (SE 0.006), not significant when restrictions are included", direction: positive }
  resultType: overturns
  relatesTo:
    - { cite: "Chaney, Sraer & Thesmar (2012)", doi: '10.1257/aer.102.6.2381', relation: builds-on, note: "REMV construction methodology; extended here to include post-1993 firm entry and real estate transactions via recursive HPI-inflation of book values" }
    - { cite: "Hossain et al. (2023)", relation: contradicts, note: "find insignificant effect of REMV on CAR3 using CST-style REMV and a 2004-2015 sample; this paper finds a positive significant effect using a broader sample and extended REMV measure" }
    - { cite: "Rajan & Winton (1995)", doi: '10.1111/j.1540-6261.1995.tb04052.x', relation: builds-on, note: "theoretical prediction that riskier collateral induces more intensive lender ex-ante monitoring and screening" }
    - { cite: "Campello et al. (2022)", relation: cites, note: "real estate collateral is riskier than other types due to low liquidity and redeployability, motivating lender monitoring incentives" }
  openQuestions:
    - "How different forms of collateralizable assets affect capital allocation efficiency and long-term firm value creation in the M&A context (p. 22, Conclusion)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-28 including appendix tables); seven results extracted from CC-BY PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; one fix applied: R2 overclaimed 0.170** (SE 0.075) for both 2SLS columns but Table 4 Col. 3 is 0.169** (SE 0.074); corrected in Core results table and Empirical specifications text. All other R1-R7 locators, coefficients, SEs, significance stars, and sample sizes match the PDF. All equations (BV, Age, MV, recursive MV, REMV normalisation, Eq. 1, lender-screening regression, bid-withdrawal interaction) verified term-by-term. No em-dashes or colorful adjectives found." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and augmented the Core results with R8-R17, added matching findings and missing economic mechanisms, and completed formal empirical specifications and equations. Additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; corrected the high-growth subgroup qualification and related magnitude text, findings direction codes, and covenant-mediation overclaim; updated dataAccess to licensed-commercial. See verification JSON for remaining omitted headline detail. Table-locator pass (2026-10-04): R1 Table 3 Panel A Col. 1, p. 9 -> p. 11; R7 Table 10, p. 21 -> p. 22." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102962", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-01-22" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the real estate market value measure it constructs (REMV), the identification strategy, and the two economic channels it tests: enough to know what it found and how, without reading the full 28 pages. To replicate or extend, read the original at [doi.org/10.1016/j.jcorpfin.2026.102962](https://doi.org/10.1016/j.jcorpfin.2026.102962).

## TL;DR

Gao, Luong & Qiu (2026) show that the market value of a firm's corporate real estate holdings (REMV) positively predicts the quality of its subsequent M&A decisions. Using 3,272 completed deals (2004-2020) and instrumental variables based on headquarters-state property taxes, crime rates, and natural-disaster exposure, the paper estimates that a one-standard-deviation increase in REMV is associated with a 0.455-percentage-point increase in the acquirer's three-day announcement return (CAR3), roughly 41% of the sample mean. The paper identifies lender screening as an important channel: acquirers with high REMV are more likely to pledge real estate as collateral in M&A-related loans, and such loans embed substantially more restrictive acquisition covenants, consistent with Rajan & Winton (1995). A complementary financial-flexibility channel is that REMV appreciation relaxes financing constraints for acquirers in industries with strong growth opportunities, enabling profitable acquisitions that would otherwise be unattainable. The paper extends the REMV construction method of Chaney, Sraer & Thesmar (2012) and contradicts Hossain et al. (2023), who report an insignificant CAR3 effect using their CST-style REMV measure; in the overlapping 2004-2015 sample, this paper finds the result depends on the REMV construction, not the sample window alone.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Standard errors clustered at the acquirer level unless noted. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | REMV positively predicts acquirer CAR3 at the 1% level across all baseline specifications and sample restrictions | Table 3 Panel A Col. 1, p. 11 | Coefficient 0.025\*\*\* (SE 0.007); 1-SD increase in REMV (SD=0.182) is associated with a 0.455 pp higher CAR3; sample mean CAR3 = 1.1%, so the effect = ~41% of mean |
| R2 | 2SLS IV estimates confirm the positive REMV-CAR3 relation; instruments pass overidentification test | Table 4 Cols. 2-3, p. 15 | Instrumented REMV: Col. 2 = 0.170\*\* (SE 0.075), Col. 3 = 0.169\*\* (SE 0.074); Cragg-Donald F = 13.321; Hansen J p-values = 0.376 and 0.395 |
| R3 | Real estate collateral is associated with significantly more restrictive M&A acquisition covenants in loan agreements | Table 6 Panels A-B, p. 17 | Univariate: 85.47% of RE-collateral loans have partial acquisition restrictions vs. 54.66% for loans without RE collateral (p < 0.001); multivariate: RE collateral coefficient = 0.147\*\*\* (SE 0.026) |
| R4 | Acquirers pledging real estate collateral in M&A-linked loans have significantly higher announcement returns | Table 6 Panel A + Table 7 Col. 1, pp. 17-18 | Univariate: CAR3 = 2.26% (RE collateral, N=645) vs. 1.16% (all other loans, N=785), p = 0.0065; multivariate: RE collateral = 0.010\* (SE 0.005) on CAR3 |
| R5 | RE-collateral borrowers are more likely to withdraw M&A bids when deal announcement returns are negative | Table 8, pp. 19-20 | CAR3 × RE collateral coefficient = -0.431\*\* (SE 0.191) on bid-withdrawal probability; significant at 5% in both specifications (N=976) |
| R6 | REMV estimates are larger in high-growth industries; full-sample high-low differences are not statistically significant, while among constrained acquirers only high-growth estimates are significant | Table 9 Panels A-B, p. 21 | Full sample, industry Q: high growth 0.035\*\*\* (SE 0.010) vs. low 0.017\* (SE 0.010), difference p = 0.173; constrained sample: high growth 0.054\*\*\* (SE 0.020) vs. low -0.001 (n.s.), difference p = 0.066 |
| R7 | Two-dimensional test: both lender screening and financial flexibility are active simultaneously; returns are highest when growth is high and covenants are tight | Table 10, p. 22 | High growth + M&A restriction: 0.092\*\*\* (SE 0.029); high growth + no restriction: 0.032\*\*\* (SE 0.009); low growth + restriction: 0.031 (n.s.); low growth + no restriction: 0.010 (n.s.) |
| R8 | High-REMV acquirers have higher announcement CAR3 than low-REMV acquirers | Table 2, p. 10 | Mean CAR3: 0.013 (N=1,630) vs. 0.009 (N=1,642); mean-difference p = 0.050 |
| R9 | Higher REMV predicts more cash financing, borrowing and real estate pledging, and fewer diversifying acquisitions | Table 5, p. 16 | REMV coefficients: percent cash 0.100\*\*\* (SE 0.033); all cash 0.106\* (0.057); have loan 0.106\* (0.060); RE collateral 0.224\*\* (0.096); diversifying -0.237\*\*\* (0.070) |
| R10 | The positive REMV-CAR3 relation persists across alternative measures, specifications, and tradable-industry samples | Table 3 Panels B-C, pp. 11-12 | Industry-year FE: 0.026\*\*\* (SE 0.008); state-year controls: 0.026\*\*\* (0.007); MSA REMV: 0.031\*\*\* (0.008); commercial property index: 0.014\*\*\* (0.004); CST REMV: 0.015\*\* (0.008); tradable industry: 0.024\*\*\* under both classifications |
| R11 | REMV predicts improved post-deal operating outcomes | Table A7, pp. 28-29 | REMV coefficients: change in ROA 0.060\*\*\* (SE 0.014); change in sales growth 0.061\*\* (0.029); change in costs -0.025\*\*\* (0.008) |
| R12 | REMV is not significantly related to whether an announced deal is completed | §5.1, footnote 15, p. 9 (Internet Appendix Table IA1, Col. 4) | No statistically significant relation reported; coefficient is not reproduced in this PDF |
| R13 | The positive REMV-CAR3 relation varies by target status, with the largest estimate for public targets | Table A13 Panel A, pp. 33-34 | REMV: private targets 0.027\*\*\*; subsidiary targets 0.010 (n.s.); non-public targets 0.019\*\*; public targets 0.053\*\*\*; public vs. subsidiary p = 0.037 |
| R14 | REMV has little consistent association with target offer premiums | Table A13 Panel B, p. 34 | REMV: target offer premium 0.157\* (SE 0.092); SDC 1-day 0.166 (0.122); 1-week 0.135 (0.120); 4-week 0.143 (0.109) |
| R15 | REMV is positively associated with combined bidder-target synergy gains | Table A13 Panel B, p. 34 | REMV coefficient 0.049\*\*\* (SE 0.018) on value-weighted target-bidder announcement CAR over (-1,+1) |
| R16 | Instrumented real estate collateral use predicts higher CAR3 in the mechanism-specific IV check | Table A11, p. 32 | 2SLS coefficients 0.112\*\*\* (SE 0.040) and 0.113\*\*\* (SE 0.040); Cragg-Donald F = 13.036; Hansen J p = 0.238 and 0.251 |
| R17 | Acquisition restrictions predict higher CAR3; including them is consistent with the collateral-return association operating through covenants | Table A12, p. 33 | Restriction coefficient 0.011\*\* (SE 0.005) in both columns; RE collateral falls to 0.006 (SE 0.006) and 0.005 (SE 0.006), both n.s. |

**Overall (paper's conclusion).** Real estate asset values shape M&A deal quality through two complementary channels, with lender screening identified as the more important: restrictive covenants help screen deal-making ex ante, while enhanced financial flexibility allows constrained firms to pursue positive-NPV acquisitions in high-growth industries. The page records seventeen distinct results, including the mechanism, robustness, heterogeneity, operating-outcome, and null evidence. Results are robust to IV identification, alternative REMV measures (MSA-level HPI, commercial property index, CST method), firm fixed effects, and exclusion of firms in real-estate and tradable-industry subsamples.

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

with the borrower controls for market capitalization, M/B, ROA, leverage, cash, past stock return, and top-five institutional ownership. RE collateral = 0.147\*\*\* (SE 0.026) in the full-or-partial-restriction specification (Table 6 Panel B Col. 1); non-RE collateral = -0.210\*\*\* (Col. 2). A separate regression of CAR3 on RE collateral in the matched-loan subsample (Table 7 Col. 1, N=948) yields a coefficient of 0.010\* (SE 0.005). Controlling for restrictive acquisition covenants makes the RE collateral coefficient insignificant while the restriction coefficient remains positive (Appendix Table A12), consistent with covenants accounting for the collateral-CAR3 association.

**Bid-withdrawal test (Table 8, pp. 19-20).** Ex-ante screening is verified by testing whether negative announcement returns more strongly predict withdrawal for RE-collateral borrowers:

$$\text{Withdrawn}_i = \delta_0 + \delta_1 \, CAR3_i + \delta_2 \, \text{RE collateral}_i + \delta_3 \, (CAR3_i \times \text{RE collateral}_i) + \delta \, X_{i,t-1} + \gamma_k + \lambda_t + u_i$$

using a sample of completed and withdrawn deals (N=976). The interaction $$\delta_3 = -0.431^{**}$$ (SE 0.191): worse announcement returns predict withdrawal significantly more for RE-collateral borrowers, consistent with stricter ex-ante screening making borrowers more selective in completing deals that receive negative market signals.

**Growth-opportunity and covenant heterogeneity (Tables 9-10, p. 21).** The sample is split by industry-level growth opportunity (Tobin's Q, sales growth, or asset growth relative to the annual cross-industry median) and by whether the matched loan includes M&A acquisition restrictions. The four cells of the high/low growth times restriction/no-restriction partition produce REMV coefficients on CAR3 ranging from 0.092\*\*\* (high growth, tight covenants) to 0.010 (n.s., low growth, loose covenants), confirming that lender screening and financial flexibility are simultaneously active and complementary.

**Financing, target selection, and operating outcomes (Table 5, p. 16; Table A7, pp. 28-29).** Table 5 estimates the common deal-level specification for five outcomes:

$$Y_{i} = \alpha + \beta \, REMV_{i,t-1} + \theta' X_{i,t-1} + \gamma_k + \lambda_t + \varepsilon_i$$

Here $$Y_i$$ is, in turn, percent cash consideration, an all-cash indicator, whether the acquirer has a loan, whether it pledges real estate collateral (loan-matched subsample), and a diversifying-deal indicator. The table uses the 3,272 completed-deal sample except the collateral outcome (N=948); it includes industry and year fixed effects and acquirer-clustered heteroskedasticity-consistent standard errors. Appendix Table A7 applies the same RHS and fixed effects to changes in post-deal ROA, sales growth, and costs; its samples are N=3,055, 2,829, and 2,700, respectively, after removing deals with confounding subsequent acquisitions, and standard errors are clustered by acquirer.

**First-stage and second-stage equations (Table 4, p. 15).** The instrument set consists of headquarters-state property tax, headquarters-state crime rate, and recent county disaster exposure. The first stage and second stage are:

$$REMV_{i,t-1} = \pi_0 + \pi_1 \, PropertyTax_{s,t-1} + \pi_2 \, Crime_{s,t-1} + \pi_3 \, Disaster_{c,t-1} + \pi' X_{i,t-1} + \gamma_k + \lambda_t + v_i$$

$$CAR3_i = \beta_0 + \beta_1 \, \widehat{REMV}_{i,t-1} + \beta' X_{i,t-1} + \gamma_k + \lambda_t + \varepsilon_i$$

Both stages use the 2,667 observations reported in Table 4, two-digit SIC industry and year fixed effects, and acquirer-clustered heteroskedasticity-consistent standard errors. The first stage instruments REMV; columns 2-3 use its fitted value in the CAR3 equation, with governance controls added in column 3.

**Collateral screening and CAR3 specifications (Tables 6-7, pp. 17-18).** Table 6 Panel B uses the 1,118 matched credit agreements and estimates the restriction indicator against collateral type and lagged borrower controls:

$$Restriction_i = \alpha_0 + \alpha_1 \, RECollateral_i + \theta' X_{i,t-1} + \gamma_k + \lambda_t + u_i$$

The alternative columns replace $$RECollateral_i$$ with non-RE collateral or a pooled collateral indicator. Table 7 estimates deal CAR3 on separate real-estate and non-real-estate collateral indicators, then on a pooled collateral indicator:

$$CAR3_i = \alpha_0 + \alpha_1 \, CollateralType_i + \theta' X_{i,t-1} + \gamma_k + \lambda_t + \varepsilon_i$$

Table 7 estimates separate variants using the real-estate collateral, non-real-estate collateral, and pooled collateral indicators, each in place of $$CollateralType_i$$; it uses 948 matched deals. Both tables include industry and year fixed effects and acquirer-clustered heteroskedasticity-consistent standard errors. Table 8 uses the completed and withdrawn deal sample (N=976), the same fixed effects, and firm-clustered heteroskedasticity-consistent standard errors for the withdrawal interaction already shown above.

**Growth splits, target status, premiums, and synergies (Table 9, p. 21; Table 10, p. 22; Table A13, pp. 33-34).** Within each growth, financial-constraint, covenant, or target-status subsample, the paper re-estimates the baseline CAR3 model:

$$CAR3_i = \alpha + \beta \, REMV_{i,t-1} + \theta' X_{i,t-1} + \gamma_k + \lambda_t + \varepsilon_i$$

Tables 9-10 split at annual two-digit-SIC industry medians and by restrictive-covenant presence; errors are clustered by firm. Table A13 Panel A splits by target type, while Panel B replaces CAR3 with four measures of offer premium and a value-weighted target-bidder synergy CAR. Both A13 panels include controls and industry/year fixed effects, with firm-clustered heteroskedasticity-consistent standard errors. The Internet Appendix Table IA1 completion test is referenced in §5.1 footnote 15 (p. 9); its coefficient is not reproduced in the supplied PDF.

**Collateral-use instrument and covenant mediation (Tables A11-A12, pp. 32-33).** Table A11 instruments deal-level real estate collateral use with REMV and secured-debt ratio measured three years before announcement. The first stage and CAR3 second stage are:

$$RECollateral_i = \pi_0 + \pi_1 \, REMV_{i,t-3} + \pi_2 \, SecuredDebtRatio_{i,t-3} + \pi' X_i + \gamma_k + \lambda_t + v_i$$

$$CAR3_i = \beta_0 + \beta_1 \, \widehat{RECollateral}_i + \beta' X_i + \gamma_k + \lambda_t + \varepsilon_i$$

Table A11 uses 794 matched deals, industry and year fixed effects, and firm-clustered heteroskedasticity-consistent standard errors. Table A12 estimates CAR3 on both the acquisition-restriction indicator and RE-collateral indicator, with the Table 7 controls and fixed effects, in 840 matched deals; errors are firm-clustered. Its result is that covenant restrictions retain a positive coefficient while the conditional collateral coefficient is not significant:

$$CAR3_i = \alpha_0 + \alpha_1 \, Restriction_i + \alpha_2 \, RECollateral_i + \theta' X_i + \gamma_k + \lambda_t + \varepsilon_i$$

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

Source: peer-reviewed, *Journal of Corporate Finance* 98 (2026) 102962. This distillation was prepared by an LLM and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Gao, Mingze, Thanh Son Luong, and Buhui Qiu.
> "Real estate collateral, lender screening, and M&A performance."
> *Journal of Corporate Finance* 98 (2026): 102962.
> DOI: 10.1016/j.jcorpfin.2026.102962. © 2026 The Authors.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
