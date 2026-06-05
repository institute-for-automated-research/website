---
title: "Paying Too Much: Bhutta, Fuster & Hizmo (2026)"
description: >-
  Distilled: many U.S. mortgage borrowers significantly overpay relative
  to rates available in their market on the same day; overpayment is
  largest for FHA and low-FICO borrowers and rises when market interest
  rates are low; borrower sophistication (shopping and knowledge) strongly
  predicts lower rates and competition benefits sophisticated borrowers
  most. J. Finance 2026, paywalled. Eight core results with source
  locators, datasets used, the EGain model, and the key estimating
  specifications.
sidebar:
  label: Bhutta-Fuster-Hizmo 2026
  order: 1
tags: [paper-summary, mortgage-markets, consumer-finance, price-dispersion, borrower-sophistication, household-finance, panel-regression, peer-reviewed, unreplicated, data:optimal-blue, data:nsmo, data:mcr-nmls, data:hmda]
paper:
  authors: Neil Bhutta, Andreas Fuster, Aurel Hizmo
  authorList:
    - { family: Bhutta, given: Neil, affiliation: "Federal Reserve Bank of Philadelphia" }
    - { family: Fuster, given: Andreas, affiliation: "EPFL, Swiss Finance Institute, and CEPR" }
    - { family: Hizmo, given: Aurel, affiliation: "Independent" }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 49–90
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 8
  citedByCount: 0
  jel:
    codes: [G21, G51, D14]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics: ['Housing Market and Economics', 'Banking stability, regulation, efficiency', 'Housing, Finance, and Neoliberalism']
  dataAccess: proprietary-confidential
  outcome:
    - mortgage rate paid relative to available offers
    - rate dispersion across borrowers and lenders
    - borrower overpayment by loan program and FICO
  outcomeClass: [household-finance]
  doi: 10.1111/jofi.70001
  license: 'Paywalled (© 2025 the American Finance Association; Crossref license[] returns content-version=vor URL=http://onlinelibrary.wiley.com/termsAndConditions#vor and content-version=tdm URL=http://doi.wiley.com/10.1002/tdm_license_1.1, both delay-in-days=0, start=2025-12-09; no CC licence found)'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/Journal of Finance publisher site; checked 2026-05-31)'
  redistribution: extract-only

  # --- methodological identity ---
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression]
    identification: selection-on-observables
  contributionType: [new-fact, measurement]
  mechanisms: [behavioral-bias, market-power, information-asymmetry]
  # --- sample scope ---
  scope:
    region: US
    assetClass: residential mortgages
    period: 2013-01..2019-12
    frequency: mixed
    dataType: [market, administrative, survey]
    granularity: [individual, transaction, firm]
    n: "3.6M rate-lock agreements (full); 67,537 matched for EGain; 2,996,149 for dispersion; 22,567 NSMO mortgages"
  # --- the "what works" effectiveness axis ---
  findings:
    - { ref: R1, outcome: mortgage rate paid relative to available offers, metric: basis-points, value: "28 bp mean EGain for FHA; 17 bp conforming; 10 bp super-conforming; 4 bp jumbo", direction: positive, vsBenchmark: "FHA vs. jumbo borrowers on same-day offer distribution" }
    - { ref: R2, outcome: mortgage rate paid relative to available offers, metric: coefficient, value: "-0.097*** (FICO>=740 vs [640,660), col 1)", direction: negative, vsBenchmark: "FICO>=740 vs. [640,660) omitted category" }
    - { ref: R3, outcome: mortgage rate paid relative to available offers, metric: coefficient, value: "-0.051*** per 1 pp rise in 10-yr Treasury yield (col 1); -0.026** with lender-branch FEs (col 3)", direction: negative }
    - { ref: R4, outcome: rate dispersion across borrowers and lenders, metric: basis-points, value: "90-10 gap 55 bp raw (col 3); 26 bp after full lender/branch/LO FEs (col 10); same-branch same-day gap 31 bp (col 8)", direction: positive, vsBenchmark: "residual dispersion after full observable and FE controls" }
    - { ref: R5, outcome: rate dispersion across borrowers and lenders, metric: coefficient, value: "+0.127*** pp (size quartile 4 lender FE, col 1); +0.385*** (FHA share, col 2); $4.05*** gross income per $100 originated per 1 pp rate premium", direction: positive, vsBenchmark: "larger and high-FHA-share lenders vs. smaller/lower-FHA peers" }
    - { ref: R6, outcome: rate dispersion across borrowers and lenders, metric: coefficient, value: "$3.50*** gross expenses and $0.45** net income (residential) per $100 per 1 pp rate", direction: positive, vsBenchmark: "expensive vs. cheaper lenders on income/expense line items" }
    - { ref: R7, outcome: mortgage rate paid relative to available offers, metric: pp-effect, value: "-13*** pp satisfied with interest rate; -2.3*** pp satisfied with lender; -1.9** pp application process; overall satisfaction -0.035***", direction: negative, vsBenchmark: "100 bp more expensive mortgage vs. baseline" }
    - { ref: R8, outcome: borrower overpayment by loan program and FICO, metric: coefficient, value: "-0.226*** (Sophistication Index, col 2); HHI x Sophistication interaction +0.050** (col 3)", direction: negative, vsBenchmark: "most vs. least sophisticated borrowers; low- vs. high-concentration markets" }
  resultType: overturns
  # --- edges to prior work ---
  relatesTo:
    - { cite: 'Carlson & McAfee (1983)', doi: '10.1086/261159', relation: builds-on, note: 'EGain measure is motivated by Carlson-McAfee discrete equilibrium search model (p. 63)' }
    - { cite: 'Woodward & Hall (2012)', doi: '10.1257/aer.102.7.3249', relation: extends, note: 'extends evidence on consumer confusion and sub-optimal shopping to real-time lender-offer benchmark (p. 52)' }
    - { cite: 'Agarwal, Ben-David & Yao (2017)', relation: extends, note: 'extends systematic-mistakes literature to include offer-distribution benchmark and borrower sophistication index (p. 53)' }
    - { cite: 'Alexandrov & Koulayev (2017)', doi: '10.2139/ssrn.2948491', relation: contradicts, note: 'contrasts with their finding that negotiation plays little role; this paper finds substantial within-lender within-branch-day dispersion consistent with negotiation (p. 52)' }
    - { cite: 'Fuster, Lo & Willen (2024)', relation: builds-on, note: 'complements their time-varying price-of-intermediation result: lenders also make worse offers when rates are low, and borrowers are less likely to shop (p. 71)' }
  # --- open questions (paper''s own stated gaps) ---
  openQuestions:
    - 'How effective specific policies would be for reducing dispersion (e.g., required disclosure of available rates at lock time, GSE caps on locked-offer spreads): general-equilibrium effects on lender offers are unknown (p. 88).'
    - 'Whether the pass-through asymmetry (less pass-through of rate cuts due to reduced shopping effort) is a net positive or negative from a monetary policy perspective depends on whether slowing the housing market via higher rates is desirable (p. 88).'
    - 'The causal mechanism behind sophisticated borrowers benefiting more from competition: whether it reflects better ability to exploit low-concentration markets or selection effects (pp. 87-88).'
  # --- replication code ---
  replicationCode:
    status: available
    url: https://doi.org/10.1111/jofi.70001
  # --- vocab proposals ---
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 49–90); eight results extracted from the PDF. Not human-verified. Not reproduced. Replication code available as Supporting Information at the publisher site but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; R7 lender and application-process satisfaction figures corrected from -23/-19 pp to -2.3/-1.9 pp (decimal-point errors); all other locators and magnitudes confirmed correct.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: Augment pass. Added methods/scope/relatesTo/openQuestions/replicationCode/proposedVocab frontmatter blocks and replaced the old Theory tested section with the three formal body sections (Theory / model, Method, Empirical specifications) with equations and specifications transcribed from the PDF read this session (EGain eq. 1 p. 63; service-quality regression eq. 2 p. 83; sophistication regression eq. 3 p. 85; rate-dispersion regression Table V p. 73; Table IV p. 70). Core results table is unchanged from the verified version above. New formal sections are extracted, not yet re-verified.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: All 8 core result rows, equations 1-3, and FE escalation specs re-checked term-by-term against PDF; all locators, magnitudes, signs, and significance stars confirmed correct; no em-dashes or colorful adjectives found; no fixes required.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-03
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-03
      role: verified
      note: >-
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF;
        removed introducesData (Optimal Blue is an existing industry platform, not a new source introduced by this paper) and dropped new-data from contributionType for the same reason; all other axes confirmed correct.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-04
      role: extracted
      note: >-
        Added the effectiveness axis (findings[] per Core-results row,
        resultType) built from the page's already-verified Core-results table and
        relatesTo edges; existing results and sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-04
      role: verified
      note: >-
        Effectiveness axis (findings[] values/direction, resultType) re-checked
        against the source PDF; all eight findings[] entries confirmed correct
        (R1 Table II p.66, R2 Table III p.67, R3 Table IV p.70, R4 Tables V-VI
        pp.73-75, R5 Tables VII-VIII pp.79-81, R6 Table VIII p.81, R7 Table IX
        p.84, R8 Table X p.86) with values, directions, and significance stars
        matching the PDF; resultType overturns consistent with contradicts edge
        to Alexandrov and Koulayev (2017); no fixes required.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70001
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-09; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0, start=2025-12-09; no CC licence entry present'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 42 pages. To replicate or extend
it, access the full source at the
[original](https://doi.org/10.1111/jofi.70001) (paywalled).

## TL;DR

Using a proprietary platform dataset of 3.6 million rate-lock agreements
(Optimal Blue, Jan 2015 to Dec 2019) linked to real-time lender offer
distributions, the paper constructs an *Expected Gain from Additional
Search (EGain)* metric: the rate reduction a borrower could expect by
obtaining one more quote from a randomly drawn lender. FHA borrowers
average 28 bp of EGain; jumbo borrowers average 4 bp. Overpayment rises
when market interest rates are low, consistent with behavioral factors
reducing shopping effort. Substantial rate dispersion persists even within
the same lender, branch, and loan officer on the same day. Expensive
lenders earn higher profits: a 1 pp rate premium translates to $4.05 more
gross income per $100 originated, with no evidence of better service
quality. NSMO survey data show that a composite borrower sophistication
index (shopping and knowledge) predicts rates 23 bp lower for the most
vs. least sophisticated, and the benefit of lower market concentration
accrues primarily to sophisticated borrowers.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **FHA borrowers have the largest expected gain from additional search** | Table II, p. 66; Figure 2, p. 65 | Mean EGain = 28 bp for FHA vs. 17 bp conforming, 10 bp super-conforming, 4 bp jumbo; 25% of FHA borrowers have EGain above 40 bp |
| R2 | **Low-FICO and high-LTV borrowers overpay more, conditional on loan amount** | Table III, p. 67 | FICO>=740 vs. [640,660]: coef -0.097\*\*\* (col 1); adding lender-branch FEs reduces but does not eliminate the FICO gap |
| R3 | **EGain falls when market interest rates are higher** | Table IV, p. 70; Figure 3, p. 69 | A 1 pp rise in the 10-yr Treasury yield reduces average EGain by about 5 bp (coef -0.051\*\*\*, col 1); effect persists after lender-branch FEs (coef -0.026\*\*, col 3); stronger for unconstrained borrowers (DTI <= 36: interaction +0.012\*\*\*) |
| R4 | **Substantial residual rate dispersion remains after controlling for all observable characteristics, lender, branch, and LO** | Table V, p. 73; Table VI, p. 75 | 90-10 percentile gap: 55 bp raw (col 3); 26 bp after full lender, branch, and LO FEs (col 10); FHA 90-10 gap = 31 bp, jumbo = 24 bp in most restrictive spec; gap for same-branch same-day identical borrowers = 31 bp (col 8) |
| R5 | **Larger lenders and those with high FHA share are more expensive and more profitable** | Table VII, p. 79; Table VIII, p. 81 | Size quartile 4 lender FE: +0.127\*\*\* pp (col 1); FHA share coef: +0.385\*\*\* (col 2); 1 pp higher rate associated with $4.05\*\*\* more gross income per $100 originated (Table VIII) |
| R6 | **Expensive lenders have higher costs but higher net income; higher costs mostly reflect personnel, not service quality** | Table VIII, p. 81 | Gross expenses rise $3.50\*\*\* per $100 per 1 pp rate; net income rises $0.45\*\* (residential) and $0.24\*\* (all lines); technology and occupancy effects are small |
| R7 | **More expensive mortgages are not associated with better service; borrowers paying more are less satisfied** | Table IX, p. 84 | A 100 bp more expensive mortgage: satisfied with interest rate -13\*\*\* pp, satisfied with lender -2.3\*\*\* pp, application process -1.9\*\* pp; overall satisfaction coefficient -0.035\*\*\* |
| R8 | **Borrower sophistication (shopping and knowledge) strongly predicts lower mortgage rates; competition benefits sophisticated borrowers most** | Table X, p. 86 | Sophistication Index coef: -0.226\*\*\* (col 2); applied to 2+ lenders for better terms: -0.075\*\*\*; knows their interest rate: -0.060\*\*\*; interaction Sophistication x County HHI: +0.050\*\* (col 3), meaning lower concentration helps sophisticated borrowers more |

**Overall (paper's conclusion).** A large fraction of U.S. borrowers,
especially FHA and low-FICO borrowers targeted by government homeownership
programs, overpay for mortgages. Limited borrower sophistication provides
lenders with market power even in low-concentration markets. Overpayment
also impedes pass-through of monetary policy easing to mortgage rates.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Optimal Blue rate-lock and pricing-insight data (Jan 2015 to Dec 2019; ~3.6M locks; 20 MSAs for offer data) | Primary dataset: locked mortgage rates, lender offer distributions, loan/borrower characteristics; basis for EGain construction | No page yet |
| Mortgage Call Reports (MCR/NMLS), 2015:Q1 to 2019:Q4; 162 unique lenders | Nonbank lender income, expenses, and profitability; merged with Optimal Blue to study lender market power | No page yet |
| National Survey of Mortgage Originations (NSMO), waves 1-26, 2013-2019; 22,567 mortgages | Borrower sophistication, shopping behavior, knowledge, satisfaction; merged with administrative credit/servicing data | No page yet |
| HMDA (Home Mortgage Disclosure Act) | Lender classification (bank vs. nonbank); market concentration (HHI) | No page yet |

Sample sizes: lock data 3.6M (full) / 67,537 (matched to offer data for EGain); dispersion analysis 2,996,149; MCR-Optimal Blue merge 162 lenders, 1,897 lender-quarters; NSMO 22,567 mortgages.

## Theory / model

The paper has no original structural model. It is an empirical paper that
tests predictions from the consumer-search and price-dispersion literature
(Carlson and McAfee (1983), Baye et al. (2006)) and from the literature on
limited financial sophistication in consumer finance (Woodward and Hall (2012),
Agarwal et al. (2015, 2017)).

The central identification object is the **Expected Gain from Additional
Search (EGain)**. Given $$n$$ lenders posting rates $$r_1 \leq r_2 \leq \cdots \leq r_n$$
for an identical borrower type on a given day, and a borrower who has already
found rate $$r_k$$, the expected gain from one more search is (eq. 1, p. 63):

$$
\text{EGain}_k = \sum_{i=1}^{k-1} (r_k - r_i) \times \frac{1}{n-1}
= \left[ r_k - \frac{\sum_{i=1}^{k-1} r_i}{k-1} \right] \times \frac{k-1}{n-1}
$$

Intuitively, the bracketed term is the locked rate minus the expected rate
among the $$k-1$$ cheaper lenders; this is scaled by $$\frac{k-1}{n-1}$$, the share
of remaining lenders who offer cheaper rates. The measure accounts for both
the borrower's position in the distribution and the width of the distribution.
Lenders that do not offer a given loan type are treated as $$r_i = \infty$$.

The main hypotheses tested:
- (H1) Borrowers with lower financial sophistication (less shopping, less
  knowledge) pay higher rates relative to available offers.
- (H2) Overpayment varies systematically with borrower type (FICO, LTV,
  loan program) even after controlling for risk-based pricing in offers.
- (H3) Market concentration interacts with borrower sophistication: lower
  concentration (HHI) benefits sophisticated borrowers more.
- (H4) Expensive lenders are more profitable but do not provide better service,
  implying pure market power rather than quality differentiation.

Identification for the EGain analysis rests on comparing each locked rate
to the real-time distribution of lender offers for an identical loan (same
MSA, same day, same FICO/LTV/program/amount/points), which is observed in
the Optimal Blue Pricing Insight data. For the dispersion and sophistication
analyses, identification uses within-market OLS with exhaustive fixed effects
(lender, branch, loan officer, MSA x month) and the NSMO survey linked to
administrative loan records.

## Method

The estimating strategy has three parts: (1) constructing EGain from matched
lock and offer data; (2) OLS regressions of EGain and locked rates on
borrower/lender characteristics with layered fixed effects; (3) NSMO-based
OLS regressions of contracted rates on borrower sophistication with
administrative controls.

**EGain construction.** For each rate-lock, the authors match to the
offer distribution on the same day in the same MSA for a loan with nearly
identical FICO, LTV, program, purpose, and amount. They adjust locked rates
for points paid using the empirical points-rate relationship. The EGain is
then computed from equation (1) above. The matched sub-sample is 67,537 loans
from the 20 MSAs with offer data.

**Rate-dispersion regressions (Table V, p. 73).** Locked rates are regressed
on increasingly rich sets of fixed effects. The outcome of interest is the
residual variance (measured as standard deviation and 90th-to-10th percentile
gap) after absorbing each specification:

$$
\text{Rate}_{ilt} = \beta \, X_{ilt} + \text{FE\_set} + \varepsilon_{ilt}
$$

- $$\text{FE\_set}$$ escalates across columns:
- col (1): Lock Date x MSA F.E.
- col (2): + FICO x LTV x Program x Lock Month F.E., ZIP Code F.E., Discount Points x Program x Lock Month F.E.
- col (3): + Discount Points x Program x Lock Month F.E. (finer)
- col (4): + Lender F.E.
- col (5): + Lender x Lock-Day x Program x LTV x Loan Month F.E.
- col (6): + Lender x FICO x LTV x Program x Lock Month F.E.
- col (7): + Branch F.E.
- col (8): + Branch x Lock Month F.E.
- col (9): + Loan Officer F.E.
- col (10): + Loan Officer x Lock Year F.E. x Program
- SE: two-way clustered by month and lender.

Standard errors are two-way clustered by month and lender. Sample: 2,996,149
loans locked 2015 to 2019, 30-year fixed-rate, fully documented, owner-
occupied, single-unit purchase mortgages in 277 MSAs.

**EGain-on-Treasury-yield regression (Table IV, p. 70).** The time-series
variation in overpayment is estimated as:

$$
\text{EGain}_{it} = \beta \cdot \text{TreasuryYield}_t + \gamma \, Z_{it}
+ \text{MSA F.E.} + [\text{MSA} \times \text{Month F.E.}] + [\text{Lender-Branch F.E.}]
+ \varepsilon_{it}
$$

- $$\text{TreasuryYield}_t$$: daily 10-year Treasury yield at the lock date.
- $$Z_{it}$$: FICO, LTV, loan amount controls and a DTI-below-36 dummy.
- $$\text{DTI} \leq 36$$ is interacted with Treasury yield to test whether affordability-constrained borrowers drive the relationship.
- SE: two-way clustered by month and lender.
- Sample: 67,241 matched loans.

## Empirical specifications

**EGain cross-section (R1, R2; Table II and III).** Cross-sectional
differences in EGain by loan program, FICO, and LTV are first shown in
summary statistics (Table II, p. 66), then confirmed in regressions:

$$
\text{EGain}_{it} = \beta_1 \, I_{\text{FICO\_bin}} + \beta_2 \, I_{\text{LTV\_bin}}
+ \gamma \cdot \text{LoanOfficerComp}_{it}
+ \text{Loan Amount F.E. (\$10k bins)}
+ \text{MSA} \times \text{Month F.E.}
+ [\text{Lender-Branch F.E.}]
+ \varepsilon_{it}
$$

- $$I_{\text{FICO\_bin}}$$: indicator dummies for FICO bins; omitted category [640, 660).
- $$I_{\text{LTV\_bin}}$$: indicator dummies for LTV bins; omitted category [60, 80].
- $$\text{LoanOfficerComp}_{it}$$: loan officer compensation controls.
- SE: two-way clustered by month and lender.
- Sample: 67,637 matched loans, 30-year fixed-rate purchase, 20 MSAs, 2016-2019.
- Key coefficients: FICO >= 740 vs [640,660) is -0.097\*\*\* (col 1); adding lender-branch FEs reduces but does not eliminate the FICO gradient (Table III).

**EGain and market rates (R3; Table IV, p. 70).** The core specification is:

$$
\text{EGain}_{it} = \beta \cdot \text{TreasuryYield}_t + \gamma \, Z_{it} + \text{MSA F.E.} + \varepsilon_{it}
$$

with columns progressively adding MSA x Month F.E. and Lender-Branch F.E.
Key result: a 1 pp rise in Treasury yield reduces EGain by about 5 bp
(col 1: -0.051\*\*\*); with lender-branch FEs: -0.026\*\* (col 3). This
builds on Fuster, Lo, and Willen (2024) and their time-varying
price-of-intermediation result: lenders also make worse offers when rates
are low, and borrowers are less likely to shop (p. 71).

**Rate dispersion (R4; Table V, p. 73).** The 10-spec rate dispersion
regression described in Method above. Key results: 90-10 gap = 55 bp in
spec (3) (pure observable controls); = 26 bp in spec (10) after full lender,
branch, and LO FEs. Same-branch same-day gap (spec 8) = 31 bp. This
contrasts with Alexandrov and Koulayev (2017), who find that negotiation
plays little role; the substantial within-lender within-branch-day
dispersion here is consistent with negotiation (p. 52).

**Lender expensiveness and profits (R5, R6; Tables VII-VIII).** Lender FEs
from spec (4) of Table V are the dependent variable in lender-level
regressions on size quartiles, nonbank indicator, and FHA share (Table VII,
p. 79). Lender expensiveness is then regressed on income/expense line items
from MCR filings in median regressions with year-quarter FEs (Table VIII, p. 81):

$$
\text{FinancialOutcome}_l = \beta \cdot \text{LenderExpensiveness}_l + \text{year-quarter F.E.} + \varepsilon_l
$$

Key: 1 pp higher rate corresponds to $4.05\*\*\* extra gross income and
$3.50\*\*\* extra gross expenses per $100 originated; net income rises
$0.45\*\* (residential originations, precorporate).

**Service quality (R7; eq. 2, Table IX, p. 84).** NSMO borrower survey
outcomes are regressed on contracted rate, with rich controls:

$$
Y_{ijtw} = \beta \cdot \text{Rate}_i + \Gamma \, Z_{ij} + \alpha_t + \delta_w + \varepsilon_{ijtw}
\tag{2}
$$

- $$Y_{ijtw}$$: binary satisfaction/delay indicator.
- $$\text{Rate}_i$$: contracted mortgage rate.
- $$Z_{ij}$$: credit-score and LTV flexible controls, county FEs, program indicators, income/employment/wealth/race/ethnicity controls, and likelihood-of-moving controls.
- $$\alpha_t$$: origination-month FEs.
- $$\delta_w$$: survey-wave FEs.
- SE: robust.
- Sample: 22,567 NSMO mortgages, 2013-2019.

**Borrower sophistication and rates (R8; eq. 3, Table X, p. 86).** NSMO
contracted rates are regressed on a sophistication index and market
concentration:

$$
\text{Rate}_{ijtw} = \beta \, X_i + \Gamma \, Z_{ij} + \alpha_t + \delta_w + \varepsilon_{ijtw}
\tag{3}
$$

- $$X_i$$: either (col 1) individual shopping/knowledge binary indicators or (col 2) a composite Sophistication Index (sum of six shopping/knowledge dummies divided by 6, range 0-1), or (col 3) Sophistication Index plus County HHI (last year) and their interaction.
- $$Z_{ij}$$, $$\alpha_t$$, $$\delta_w$$: the same rich controls as eq. (2).
- SE: robust.
- Sample: 22,567 (cols 1-2), 22,563 (col 3).
- Key results: Sophistication Index coef = -0.226\*\*\* (col 2); HHI x Sophistication interaction = +0.050\*\* (col 3), meaning lower concentration primarily benefits sophisticated borrowers.

## When to read the full paper

Access the [original](https://doi.org/10.1111/jofi.70001) if you are:
replicating (code available in the journal's Supporting Information);
studying the EGain measure construction in detail (Section III and Internet
Appendix Sections IV-V); reviewing robustness across loan programs and
lender types; or tracing the monetary policy transmission implications
(Section VI). The locators above point to the exact tables and figures.
For "what did this paper find," the table above is sufficient.

## Attribution & rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 49–90. © 2025 the American Finance Association. This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The paper is paywalled; redistribution is
extract-only. Cite as:

> Bhutta, Neil, Andreas Fuster, and Aurel Hizmo. "Paying Too Much?
> Borrower Sophistication and Overpayment in the U.S. Mortgage Market."
> *The Journal of Finance* 81, no. 1 (February 2026): 49–90.
> DOI: 10.1111/jofi.70001.
