---
title: "FinTech Lending and Cashless Payments: Ghosh, Vallee & Zeng (2026)"
description: >-
  Distilled: Borrowers' use of cashless payments improves access to capital from
  FinTech lenders and predicts lower default probability, with outflows and
  information-intensive payment records showing the strongest effects. J. Finance
  2026, CC BY-NC 4.0. Ten core results with source locators, datasets used, the
  signaling model, and empirical specifications.
sidebar:
  label: Ghosh-Vallee-Zeng 2026
  order: 1
tags: [paper-summary, fintech, lending, cashless-payments, credit-markets,
       financial-inclusion, panel-regression, instrumental-variables,
       text-classification, open-access, peer-reviewed, unreplicated,
       data:indifi-loan-applications]
paper:
  authors: Pulak Ghosh, Boris Vallee, Yao Zeng
  authorList:
    - { family: Ghosh, given: Pulak, orcid: "0000-0003-4775-4179", affiliation: Indian Institute of Management }
    - { family: Vallee, given: Boris, orcid: "0000-0001-8047-1782", affiliation: INSEAD and Harvard Business School }
    - { family: Zeng, given: Yao, orcid: "0000-0002-7496-3972", affiliation: Wharton School, University of Pennsylvania }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 1053-1101
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70003
  topics: ['FinTech, Crowdfunding, Digital Finance', 'Microfinance and Financial Inclusion', 'Banking stability, regulation, efficiency']
  dataAccess: proprietary-confidential
  outcome:
    - loan approval probability
    - offered interest rate
    - offered loan amount
    - loan default probability
  license: >-
    CC BY-NC 4.0 (confirmed via Crossref DOI metadata: content-version vor,
    URL http://creativecommons.org/licenses/by-nc/4.0/, delay-in-days 0,
    start 2025-12-18; corroborated by artifact p.1053 Creative Commons
    Attribution-NonCommercial License notice)
  licenseShort: CC BY-NC 4.0
  access: open
  machineAccess: open-access PDF available (Wiley/Crossref open-access PDF, CC BY-NC 4.0, checked 2026-06-01)
  redistribution: extract-only (CC BY-NC 4.0 permits reproduction for non-commercial use; PDF not hosted in this batch)
  resultsCount: 10
  citedByCount: 3

  methods:
    role: both
    contributes: digital-collateral-signaling-model
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables, text-classification]

  scope:
    region: India
    assetClass: unsecured small-business loans (FinTech)
    period: 2015-09..2022-11
    frequency: mixed

  relatesTo:
    - { cite: "Parlour, Rajan & Zhu (2022)", doi: '10.1093/rfs/hhac022', relation: builds-on, note: "model of payment-lending synergy; authors extend to make cashless payment technology choice itself the selection mechanism (digital collateral)" }
    - { cite: "Berg, Fuster & Puri (2022)", doi: '10.1146/annurev-financial-101521-112042', relation: cites, note: "survey of FinTech lending landscape; motivates the research question" }
    - { cite: "Berg et al. (2020)", doi: '10.1093/rfs/hhz099', relation: tests, note: "digital footprints complement credit bureau data; paper confirms this for cashless payment records specifically" }
    - { cite: "Chodorow-Reich et al. (2020)", doi: '10.1093/qje/qjz027', relation: builds-on, note: "uses cross-district currency chest variation from 2016 Indian Demonetization as identification strategy" }
    - { cite: "Crouzet, Gupta & Mezzanotti (2023)", doi: '10.1086/724847', relation: builds-on, note: "further leverages Demonetization variation; adapts their IV design to within-district variation" }
    - { cite: "He, Huang & Zhou (2023)", doi: '10.1016/j.jfineco.2022.12.003', relation: cites, note: "open banking and FinTech-bank competition; complements by showing informational value of payment records" }

  openQuestions:
    - "Whether cashless payments improve financial inclusion for previously unbanked borrowers is not established; only 5% of successful applicants lack prior credit history, limiting the financial inclusion channel (pp. 1090-1091)."
    - "The monitoring and repayment-collection role of cashless payments (as exploited by PayPal and BigTech lenders with ongoing payment access) is left to future research; Indifi only observes six months of pre-application data (p. 1090)."
    - "Endogenous self-selection between FinTech and traditional bank lending, and general-equilibrium effects on overall credit access, are beyond the empirical setting and left to future work (pp. 1091-1092)."
    - "Privacy implications of cashless payment records as digital collateral, and the magnitude of privacy costs that could counterbalance adoption benefits, remain open (pp. 1085, 1089)."

  proposedVocab:
    - { axis: topic, term: cashless-payments, def: "Use of non-cash (electronic) payment technologies as an information signal in credit markets.", aliases: [digital-payments, payment-technology] }
    - { axis: topic, term: fintech, def: "Technology-enabled financial innovation; here specifically FinTech lending platforms that use alternative data for loan screening.", aliases: [fintech-lending, digital-finance] }
    - { axis: topic, term: credit-markets, def: "Markets for lending and borrowing; here small-business unsecured credit from FinTech lenders.", aliases: [lending-markets, small-business-credit] }

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: "Full text read (pp. 1053-1101, plus Appendices A-D); ten results extracted from the CC BY-NC PDF. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; one fix applied: R6 info-intensive default beta corrected from -0.020*** to -0.017*** (Table V Panel B col 7); all other rows, equations, and specifications confirmed correct."

  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70003
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[0]: content-version=vor, URL=http://creativecommons.org/licenses/by-nc/4.0/, delay-in-days=0, start=2025-12-18; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1"

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the signaling model it contributes,
and the empirical specifications behind each finding: enough to know what it
found and how, without reading all 49 pages. To replicate or extend it, read
the full source at the [original](https://doi.org/10.1111/jofi.70003).

## TL;DR

Using a dataset of 316,719 loan applications to Indifi, an Indian
FinTech lender (2015-2022), the paper shows that borrowers who conduct more of
their business through cashless payment technologies obtain better financing
outcomes: higher loan approval rates, lower interest rates, and larger loan
amounts. They also default less. These patterns are stronger for payment
outflows than inflows, for information-intensive than information-light payment
records, and for applicants with higher credit scores (an accuracy effect).
A within-applicant specification with applicant fixed effects and an
instrumental variable strategy exploiting the 2016 Indian Demonetization
support a causal interpretation. The authors rationalize the findings with a
signaling model in which cashless payment records serve as "digital
collateral": bad borrowers face higher expected costs from posting their
records (because discrepancies are more easily detected upon default), so only
good borrowers endogenously choose cashless payments.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | A one-SD increase in cashless payment share raises loan approval probability by **2 percentage points** (full controls) | Table II, col. (2), p. 1067 | $$\beta = 0.017^{***}$$ (SE 0.001); baseline approval ~21%; represents ~8% of baseline |
| R2 | A one-SD increase in cashless payments **reduces offered interest rate by 44 bps** (full controls) | Table II, col. (4), p. 1067 | $$\beta = -0.440^{***}$$ (SE 0.024); mean rate 25.4% |
| R3 | A one-SD increase in cashless payments **raises offered loan amount by 13%** (log) | Table II, col. (6), p. 1067 | $$\beta = 0.134^{***}$$ (SE 0.006) |
| R4 | A one-SD increase in cashless payments **reduces default probability by 2 pp** (11% of baseline) | Table III, col. (2), p. 1069 | $$\beta = -0.023^{***}$$ (SE 0.003); baseline default rate ~18% of matured loans |
| R5 | **Payment outflows** have 2x larger effects on loan approval and amount than inflows; interest-rate effects are not significantly different by direction | Table V, Panel A, p. 1073 | Outflow approval $$\beta = 0.022^{***}$$ vs inflow $$\beta = 0.008^{***}$$; outflow default $$\beta = -0.021^{***}$$ vs inflow $$\beta = -0.009^{***}$$ |
| R6 | **Information-intensive** cashless payments (individually identifiable counterparty) have larger effects than information-light payments | Table V, Panel B, p. 1073 | Info-intensive approval $$\beta = 0.050^{***}$$ (vs Table II baseline $$0.017^{***}$$); info-intensive default $$\beta = -0.017^{***}$$ |
| R7 | **Within-applicant** (repeat borrowers, applicant FE): a firm-level increase in cashless payments raises approval probability; applicant fixed effects absorbed | Table VI, col. (2), p. 1075 | $$\beta = 0.009^{***}$$ (SE 0.003); spending-only $$\beta = 0.010^{***}$$, info-intensive $$\beta = 0.021^{***}$$ |
| R8 | Cashless payment benefit is **complementary, not substitute**, with credit score (accuracy effect): interaction term positive and significant for approval and amount | Table VII, Panel A, p. 1077 | Cashless $$\times$$ Cibil Score $$\beta$$ on approval $$= 0.012^{***}$$ (SE 0.001); on log amount $$= 0.039^{***}$$ (SE 0.005) |
| R9 | **2SLS IV estimate** (Demonetization $$\times$$ currency chest instrument): a one-SD increase in cashless use raises approval by **12 pp** (larger than OLS, consistent with attenuation bias) | Table VIII, col. (4), p. 1082 | IV $$\beta = 0.117^{*}$$ (SE 0.064), second-stage col. (4); full-FE first-stage F-stat = 26.90 (col. 2); banking at chest branch in 2018-19 reduces cashless share by ~10 pp |
| R10 | **Online marketplace transactions** (BigTech-style digital records) show similar effects to cashless payments and their effects are cumulative | Table IV, p. 1071 | Marketplace approval $$\beta = 0.061^{***}$$ (SE 0.002); conditional on cashless share, marketplace $$\beta$$ remains $$0.016^{***}$$; default $$\beta = -0.006^{***}$$ |

**Overall (paper's conclusion).** The use of cashless payments provides an
informational synergy for FinTech lending that operates through a selection
mechanism (payment technology choice signals creditworthiness) and an accuracy
effect (the signal is most useful for otherwise good borrowers). This provides
a rationale for the joint rise of cashless payments and FinTech lending, and
for open banking policies that expand access to historical payment records.

## Theory / model

The paper develops a three-date model of signaling via payment technology
choice, building on Parlour, Rajan, and Zhu (2022). There is a continuum of
risk-neutral entrepreneurs (fraction $$\alpha$$ good, $$1-\alpha$$ bad) and a competitive
lender. Entrepreneurs operate a production technology $$n$$ times during $$t=0$$ to
$$t=1$$ (the "production stage"). Output $$y_i \in \{0, \theta\}$$ with failure probability
$$\pi_j$$ for type $$j \in \{G, B\}$$ (p. 1083).

At t=0, the entrepreneur chooses a payment method: cash (production outcomes
$$Y$$ are unverifiable) or cashless (outcomes become verifiable payment records $$X$$).
The cashless payment technology generates a record $$x_i$$ for each production
outcome $$y_i$$ with informational precision $$q \in [1/2, 1]$$ (p. 1084, eq. 5):

$$
\Pr(x_i = \theta \mid y_i = \theta) = \Pr(x_i = 0 \mid y_i = 0) = q
$$

$$
\Pr(x_i = 0 \mid y_i = \theta) = \Pr(x_i = \theta \mid y_i = 0) = 1 - q
$$

If a borrower with cashless payment records defaults at t=2, she incurs a cost
$$C$$ proportional to the discrepancies between production capacity $$\theta$$ and
realized records $$X$$ (p. 1084, eq. 6):

$$
C = \phi \sum_{i=1}^{n} (\theta - x_i), \quad \phi > 0
$$

This cost $$C$$ rises with the number of cashless records $$n$$, failure probability
$$\pi_j$$ (bad types have more deviations), and informational precision $$q$$. In
equilibrium the lender offers two contracts: $$r_{\text{cashless}}$$ (for borrowers who
committed to cashless at t=0) and $$r_{\text{cash}}$$ (for those who did not). The
borrower type $$j$$'s expected utility under each contract is (pp. 1085-1086,
eqs. 7-8):

$$
w_j(r_{\text{cashless}}, C \mid \pi_j) = (1 - \pi_j)(\theta - r_{\text{cashless}}) - \pi_j E_j[C]
$$

$$
w_j(r_{\text{cash}} \mid \pi_j) = (1 - \pi_j)(\theta - r_{\text{cash}})
$$

**Proposition 1** (p. 1086): A separating equilibrium with $$r_{\text{cashless}} < r_{\text{cash}}$$
exists when two conditions hold:

(i) The cost $$\phi n \theta$$ is intermediate so that good types prefer cashless but
bad types do not (incentive compatibility, eq. 14):

$$
\frac{\pi_B - \pi_G}{\pi_B (1 - \pi_G)(1 - q - \pi_B + 2q\pi_B)}
  \leq \phi n \theta \leq
\frac{\pi_B - \pi_G}{(1 - \pi_B)\pi_G (1 - q - \pi_G + 2q\pi_G)}
$$

(ii) The average borrower quality $$(1 - \bar{\pi})$$ is not so high that a pooling
contract dominates (eq. 15):

$$
1 - \bar{\pi} \leq \frac{1 - \pi_G}{1 + \phi n \theta \pi_G (1 - q - \pi_G + 2q\pi_G)}
$$

The selection effect is stronger when $$n$$ (number of cashless records) is larger
and when $$q$$ (informational precision) is higher, which the model maps directly
to the empirical patterns: outflows have higher $$q$$ than inflows, and
information-intensive records have higher $$q$$ than information-light records.

**Proposition 2** (p. 1088, eq. 16): The accuracy effect: in the separating
equilibrium, the benefit from cashless payments $$(r_{\text{cash}} - r_{\text{cashless}})$$ is larger
for firms with lower relative default probability:

$$
\frac{d(r_{\text{cash}} - r_{\text{cashless}})}{d(\pi_B - \pi_G)} > 0
$$

This implies better entrepreneurs benefit more, consistent with the empirical
complementarity between cashless payment usage and credit score (Table VII).

## Method

The paper is primarily an applied empirical paper (`applies-method`), but also
contributes a signaling model. The econometric approach uses four distinct
estimators:

**Cross-sectional OLS (baseline, `panel-regression`):** The financing outcome
specifications (eqs. 1 and 2) are cross-sectional OLS over the full applicant
sample, with a comprehensive set of fixed effects to nonlinearly absorb
selection on observable dimensions. Standard errors are clustered at the
application-month level throughout.

**Within-applicant panel regression (eq. 3, `panel-regression`):** To address
time-invariant unobserved heterogeneity, repeat borrowers are used with
applicant fixed effects and application-year fixed effects, exploiting
within-firm time-series variation in cashless payment usage.

**Text classification (`text-classification`):** Payment records from bank
statements are classified into cash vs. cashless, and further into
information-intensive vs. information-light, using text analysis of payment
labels (Appendix A). This covers 75% of all payment records; unclassified
records show no meaningful predictive power.

**2SLS instrumental variables (`instrumental-variables`):** The share of
cashless payments is instrumented by the interaction of an indicator for
banking at a currency chest branch and an indicator for the 2018-2019 period
when Demonetization cash shortages were most severe (Table VIII). Currency
chest branches had better access to new banknotes post-Demonetization, so
their clients reverted to cash more than non-chest clients during 2018-2019,
creating plausibly exogenous within-district variation in cashless payment use.

## Empirical specifications

### Baseline financing outcomes (R1-R3, R5-R6, R8, R10)

Specification (1), p. 1065:

$$
\text{FinancingOutcome}_i = \beta \cdot \text{CashlessShare}_i + \gamma X_i
                   + \sum_k \theta_{F_k(i)} + \epsilon_i
$$

- $$\text{FinancingOutcome}_i$$ is (i) an indicator for loan approval, (ii) offered interest rate, or (iii) log offered loan amount.
- $$\text{CashlessShare}_i$$ is the standardized amount-weighted share of transactions in cashless technology over six months prior to application (average of inflow and outflow shares).
- $$X_i$$ includes log number of payments, credit history length, business vintage, log owner age, missing credit score indicator, and top-up loan indicator.
- Fixed effects $$F_k(i)$$ include industry (67), application month, Cibil score group (10-point bands), 3-digit zip code, and revenue decile.
- Sample: 311,942-314,538 observations (cols. 1-6 of Table II). Standard errors: clustered at application month level.

### Loan default (R4)

Specification (2), p. 1068:

$$
\text{Default}_i = \beta \cdot \text{CashlessShare}_i + \gamma X_i
           + \sum_k \theta_{F_k(i)} + \epsilon_i
$$

- Same controls and fixed effects as specification (1).
- Sample: restricted to matured/outstanding loans as of November 2022 (41,227 observations, Table III cols. 1-4).
- Additional columns (3-4) add log offered interest rate and log disbursed amount as controls.
- Columns (5-8) use time-to-first-delinquency and time-to-full-repayment as dependent variables (OLS on the loans that reached the respective event; note repayment regression run internally by Indifi due to data-privacy regulation).

### Complementarity with credit quality (R8)

Specification (4), p. 1075:

$$
\text{FinancingOutcomes}_i = \beta_1 \cdot \text{CashlessShare}_i + \beta_2 \cdot \text{FirmQuality}_i
                    + \beta_3 \cdot \text{CashlessShare}_i \times \text{FirmQuality}_i
                    + \gamma X_i + \sum_k \theta_{F_k(i)} + \epsilon_i
$$

- $$\text{FirmQuality}$$ proxied by (i) Cibil score (Table VII Panel A, N=277,323) and (ii) weekly outflow volatility constructed from payment records (Table VII Panel B, N=311,938).
- Full set of fixed effects including credit score band FE.

### Instrumental variable (R9)

First stage of specification (Table VIII), p. 1082:

$$
\text{CashlessShare}_i = \delta \cdot (\text{ChestBank}_i \times \text{Year2018-19}_i) + \lambda \cdot \text{ChestBank}_i
               + \gamma X_i + \sum_k \theta_{F_k(i)} + v_i
$$

- Table VIII layout (p. 1082): cols. (1) and (2) report the first stage (year FE only, then full fixed effects); cols. (3), (4), and (5) report the second stage (approved loan indicator on instrumented cashless share).
- The effective F-statistic is reported only for the first-stage columns: 37.41 (col. 1) / 26.90 (col. 2), above Montiel Olea-Pflueger critical values.
- Column (5) additionally instruments the interaction of cashless share $$\times$$ Cibil Score.
- Sample: 316,407 (year FE) / 311,941 (full FE) observations.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Indifi loan application data (proprietary) | Primary dataset: 316,719 complete applications with payment records, applicant characteristics, credit bureau data, and loan outcomes (September 2015 to November 2022) | No page yet |
| Indian Cibil (credit bureau) scores | Borrower credit score control variable; credit history length and past loans | No page yet |
| Indian Demonetization / currency chest branch designations | Identification of IV; Reserve Bank of India currency chest branch list | No page yet |

Sample: 316,719 complete loan applications from micro and small businesses,
with 152 million transactions; approximately half are repeat applicants
traceable via unique applicant identifier. Loan outcomes available for 66,017
approved loans; default outcome for 41,123 matured loans as of November 2022.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70003) if you are:
studying the informational role of payment technology in credit markets;
designing open banking policies (the model and discussion in Sections VI-VII
give a formal rationale); working on FinTech or BigTech lending mechanisms;
interested in the Indian Demonetization as a natural experiment for financial
digitization; or building on the digital-collateral concept vs. traditional
collateral. The Internet Appendix (Tables IA.I-IA.XIV) provides extensive
robustness by sector, subperiod, clustering level, and specification.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2), April 2026 (published
online December 18, 2025). This distillation was extracted by an LLM on
2026-06-01 and is **not human-verified or independently reproduced**.
The CC BY-NC 4.0 licence permits reproduction for non-commercial use with
attribution; the verbatim PDF is not hosted in this batch.

> Ghosh, Pulak, Boris Vallee, and Yao Zeng.
> "FinTech Lending and Cashless Payments."
> *The Journal of Finance* 81, no. 2 (April 2026): 1053-1101.
> DOI: 10.1111/jofi.70003. (C) 2025 The Author(s).
> Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
> Non-commercial use only.
