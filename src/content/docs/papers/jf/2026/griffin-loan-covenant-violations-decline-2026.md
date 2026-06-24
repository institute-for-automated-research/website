---
title: "Losing Control: Griffin, Nini & Smith (2026)"
description: >-
  Distilled: the annual share of U.S. public firms reporting a financial
  covenant violation fell roughly 70% from 1997 to 2019; a structural
  decomposition shows the drop is driven mainly by fewer false-positive
  violations and a lower corporate distress rate, not a deterioration in
  lender monitoring ability. J. Finance 2026, paywalled. Nine core results
  with source locators, datasets used, and the theory tested.
sidebar:
  label: Griffin-Nini-Smith 2026
  order: 1
tags: [paper-summary, corporate-finance, debt-covenants, credit-markets, lender-control, panel-regression, peer-reviewed, unreplicated, data:wrds, data:edgar, data:dealscan, data:moodys-urd, data:audit-analytics, data:lopucki-brd]
paper:
  authors: Thomas P. Griffin, Greg Nini, David C. Smith
  authorList:
    - { family: Griffin, given: "Thomas P.", affiliation: "Villanova School of Business, Villanova University" }
    - { family: Nini, given: Greg, affiliation: "LeBow College of Business, Drexel University" }
    - { family: Smith, given: "David C.", affiliation: "McIntire School of Commerce, University of Virginia" }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 371–412
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 9
  citedByCount: 1
  jel:
    codes: [G21, G32, G33]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics: ['Auditing, Earnings Management, Governance', 'Corporate Finance and Governance']
  dataAccess: licensed-commercial
  outcome:
    - financial covenant violation rate
    - false-positive violation rate
    - true-positive rate (distressed-firm violations)
  outcomeClass: [credit-risk]
  doi: 10.1111/jofi.70005
  license: 'Paywalled, copyright 2025 the American Finance Association. Crossref license[]: content-version vor, URL http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0, start 2025-12-14; content-version tdm, URL http://doi.wiley.com/10.1002/tdm_license_1.1. No CC licence found.'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/J. Finance publisher site; DOI checked via Crossref 2026-05-31)'
  redistribution: extract-only
  methods:
    role: both
    contributes: covenant-violation-decomposition
    family: descriptive
    buildsFrom: [probit-regression, blinder-oaxaca-decomposition, roc-curve-analysis]
    identification: descriptive
  contributionType: [new-method, new-fact, new-data]
  mechanisms: [agency, information-asymmetry]
  introducesData: true
  scope:
    region: US
    assetClass: corporate loans (syndicated bank loans to public firms)
    period: 1997-01..2019-12
    frequency: annual
    dataType: [accounting, text, administrative]
    granularity: [firm, transaction]
    n: "85,876 firm-years; 17,724 loan packages; 403 bankruptcies"
  findings:
    - { ref: R1, outcome: financial covenant violation rate, metric: pp-effect, value: "~70% decline; peak ~18% in 2001 to ~5% by 2012; new-violation rate fell from ~9% to ~2%", direction: negative }
    - { ref: R2, outcome: financial covenant violation rate, metric: coefficient, value: "avg covenants per package fell from ~2.75 to ~1.5; tightest-covenant slack ~3x larger; ex ante strictness fell roughly half", direction: negative }
    - { ref: R3, outcome: false-positive violation rate, metric: pp-effect, value: "true positives 2.5%; false positives 2.9%; false negatives 1.1%; true negatives 93.6%", direction: positive, vsBenchmark: "false positives (2.9%) exceed true positives (2.5%)" }
    - { ref: R4, outcome: true-positive rate (distressed-firm violations), metric: coefficient, value: "No-Violation coefficient: -11.4*** (col.1), -10.1*** (col.2), -9.8*** (col.3), -6.7** (col.4)", direction: negative, vsBenchmark: "firms without prior covenant violation vs. firms with violation at bankruptcy" }
    - { ref: R5, outcome: false-positive violation rate, metric: pp-effect, value: "FPR: 5.3% (Period 1) to 0.5% (Period 3); drop explains 4.6 of 7.6 pp total decline (61%)", direction: negative }
    - { ref: R6, outcome: financial covenant violation rate, metric: pp-effect, value: "distress rate contributes -1.9 pp (25%); TPR decline contributes -1.1 pp (14%)", direction: negative }
    - { ref: R7, outcome: financial covenant violation rate, metric: coefficient, value: "preference parameter R: 3.10 (P1) to 6.06 (P2) to 30.29 (P3); technology mu_D: 2.21 to 2.68 to 2.65", direction: positive }
    - { ref: R8, outcome: false-positive violation rate, metric: pp-effect, value: "observable characteristics explain 5.1 of 7.6 pp total decline (~two-thirds); FPR ~52% explained; TPR ~69% explained", direction: positive, vsBenchmark: "explained vs. unexplained portion of violation-rate decline" }
    - { ref: R9, outcome: true-positive rate (distressed-firm violations), metric: pp-effect, value: "counterfactual violation rate 4.0% vs. realized 1.4% in Period 3; R rises ~80% absent characteristic changes vs. ~880% raw", direction: mixed }
  resultType: new-finding
  relatesTo:
    - { cite: 'Nini, Smith & Sufi (2012)', doi: '10.1093/rfs/hhs007', relation: extends, note: 'extends their 1997-2008 violation sample through 2019 and adds the structural decomposition framework' }
    - { cite: 'Murfin (2012)', doi: '10.1111/j.1540-6261.2012.01767.x', relation: builds-on, note: 'adopts the Murfin covenant strictness measure and its Demerjian-Owens update as the ex ante tightness measure' }
    - { cite: 'Chava & Roberts (2008)', doi: '10.1111/j.1540-6261.2008.01391.x', relation: builds-on, note: 'uses the Chava-Roberts link file to merge Dealscan and Compustat; also uses their imputed-violation measure as robustness check' }
    - { cite: 'Blinder (1973) / Oaxaca (1973)', doi: '10.2307/144855', relation: builds-on, note: 'employs the Blinder-Oaxaca decomposition to separate explained (observable characteristics) from unexplained portions of the FPR/TPR trends' }
    - { cite: 'Demerjian (2011)', relation: builds-on, note: 'documents the shift from balance-sheet to cash-flow covenants in loan agreements; the paper uses this as a covenant-technology channel' }
  openQuestions:
    - 'Whether the unexplained post-2012 TPR decline reflects a true deterioration in lender monitoring ability or other unobserved sample changes; the paper acknowledges substantial estimation uncertainty for Period 3 due to the low number of distressed firms (p. 405-406).'
    - 'Whether the trend extends to non-public or international borrowers, given the sample is limited to U.S. public nonfinancial firms; private borrowers face different monitoring incentives (p. 407).'
    - 'The extent to which add-backs and EBITDA manipulation have diluted cash-flow covenant informativeness after 2012, which could explain unexplained technology decline; the paper cites Badawi et al. (2022) but does not fully resolve it (p. 406).'
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 371–412). Nine results extracted directly from tables and figures in the PDF. Not human-verified. Not reproduced. Replication code is listed as Supporting Information at the publisher's site but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; one fix applied -- R7 description changed from "nearly quintupled from Period 1 to Period 3" to "nearly doubled then nearly quintupled" to accurately reflect the P1-to-P2 and P2-to-P3 increases (3.10 to 6.06 to 30.29, roughly tenfold overall), consistent with PDF p. 395 and Table III.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: 'Augmented with the deepened schema. Added methods, scope, relatesTo, openQuestions, replicationCode, proposedVocab frontmatter blocks and three formal body sections (Theory / model, Method, Empirical specifications) with equations transcribed from pp. 382-390, 392-393, 399-402 of the source PDF read this session. Core results table is unchanged from the verified version above. New formal sections are extracted only, not yet re-verified by paper-verifier.'
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: 'All 9 core result rows re-checked against source PDF (pp. 378-407). Locators, magnitudes, signs, and significance stars confirmed correct. All equations in Theory/model, Method, and Empirical specifications sections checked term-by-term against PDF pp. 381-393, 402: eq. (1) FOC, cost objective, FNR/FPR definitions, eq. (2) violation decomposition and change decomposition, t*/mu_D/R recovery formulas, eq. (3) Blinder-Oaxaca -- all match. Regression LHS/RHS/FE/SE/sample for Table I and Table IV specifications confirmed. No em-dashes or colorful adjectives found. No errors requiring correction.'
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
        introducesData, data-scope) re-checked against the source PDF; removed
        financial-constraint and behavioral-bias from mechanisms (not invoked as
        channels in the paper's own framework -- the paper's channels are agency
        and imperfect-screening information asymmetry; investor sentiment is
        cited associatively not as a tested mechanism slug).
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
        against the source PDF; all 9 entries confirmed -- values match PDF
        exactly (Table I, II, III, V, VI, VII; Figure 1, 2, 3), directions are
        consistent with sign of effect, resultType new-finding is appropriate
        given no contradicts edge and a genuinely novel structural decomposition.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70005
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-14. license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0. No CC licence present. Copyright: 2025 the American Finance Association (per PDF p. 371).'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model it builds on, and the
method it contributes with the defining equations: enough to know what it
found and how, without reading all 42 pages. To replicate or extend it,
read the full source at the
[original](https://doi.org/10.1111/jofi.70005) (paywalled).

## TL;DR

Using hand-collected SEC filings (10-K/10-Q, 1997-2019) merged with
Dealscan and Compustat, the paper extends the violation sample of Nini,
Smith, and Sufi (2012) from 1997-2008 through 2019 and adds a structural
decomposition framework. It documents that the annual share of U.S.
public firms reporting a financial covenant violation fell roughly 70%,
from about 18% at the 2001 peak to around 5% by 2012 and below that
thereafter. A structural model of optimal covenant design, cast as a
medical-diagnostic analogy (true positives, false positives, true
negatives, false negatives), decomposes the trend. The dominant driver is
a collapse in false-positive violations: lenders set looser covenants,
reducing nuisance violations for nondistressed borrowers. The corporate
distress rate also fell. The true-positive rate (distressed firms that
violate) stayed near 75% through 2011 and only declined modestly after the
global financial crisis. Observable loan-market changes (larger borrowers,
more investment-grade firms, universal-bank arrangers, the shift from
balance-sheet to cash-flow covenants) explain about two-thirds of the
overall drop; the remaining third reflects an unexplained shift in lender
preferences post-2012 consistent with heightened investor sentiment.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Covenant **violation rate fell roughly 70%** from 1997 to 2019 | Figure 1, p. 378 | Peak ~18% in 2001; ~5% by 2012; stable at ~5% through 2019; new-violation rate fell from ~9% to ~2% over same period |
| R2 | Loan **covenants became fewer and looser** over 1997-2019 | Figure 2, p. 380 | Average covenants per package: ~2.75 (late 1990s) to ~1.5 (2016); tightest-covenant slack ~3x larger at end of sample vs. late 1990s; ex ante covenant strictness (Murfin measure) fell roughly half |
| R3 | **More than half of violations are false positives** (waived with no consequential change) | Figure 3, p. 385 | True positives 2.5%; false positives 2.9%; false negatives 1.1%; true negatives 93.6% of firm-year observations |
| R4 | **False negatives cost lenders 7-11 pps in creditor recovery rates** at bankruptcy | Table I, p. 387 | No-Violation coefficient: -11.4\*\*\* (col. 1), -10.1\*\*\* (col. 2), -9.8\*\*\* (col. 3), -6.7\*\* (col. 4, with Bank Debt Share); N = 403 corporate defaults from Moody's URD |
| R5 | **FPR fell from ~6% to under 0.5%** (a 90% drop), explaining 61% of total violation decline | Table II, Figure 5, pp. 389-391 | Period 1 (1997-2003) FPR 5.3%; Period 3 (2012-2019) FPR 0.5%; FPR drop explains 4.6 pps of total 7.6 pp decline |
| R6 | **Distress rate decline explains 25%** and **TPR decline explains 14%** of the total drop | Table II Panel B, p. 390-391 | Distress rate contributes -1.9 pps; TPR decline (from ~72% to ~52%) contributes -1.1 pps over full period |
| R7 | **Preference parameter R nearly doubled then nearly quintupled** across periods in structural estimates (roughly tenfold overall), while covenant technology improved modestly | Table III, p. 393 | R: 3.10 (1997-2003) to 6.06 (2004-2011) to 30.29 (2012-2019); technology parameter $$\mu_D$$: 2.21 to 2.68 to 2.65 |
| R8 | **Observable loan-market changes** (borrower size, rating, lender type, covenant type) explain ~52% of FPR decline and ~69% of TPR decline | Table V, p. 402; Table VI, p. 404 | Observable characteristics explain 5.1 pp of the 7.6 pp total violation decline (~two-thirds); borrower size and speculative-grade rating are the largest contributors |
| R9 | **Unexplained post-2012 drop in TPR** is consistent with heightened investor sentiment, not deterioration in covenant technology | Table VII, Figure 10, pp. 405-406 | Absent characteristic changes, R rises ~80% (from 3.10 to 5.69) vs. ~880% raw; counterfactual violation rate 4.0% vs. realized 1.4% in Period 3 |

**Overall (paper's conclusion).** The dramatic decline in covenant
violations is best attributed to a compositional shift in the public
borrower population toward larger, rated firms with transactional lenders
who prefer fewer costly renegotiations, with a modest but real residual
reflecting looser lender preferences post-GFC. The decline does not
primarily signal a deterioration in lenders' ability to monitor distressed
borrowers.

## Theory / model

The paper develops a model of optimal financial covenant thresholds as a
binary-classification problem (Section II, pp. 381-383). Borrowers are
either distressed ($$D = 1$$) or nondistressed ($$D = 0$$). The lender observes
a financial metric $$r$$ (e.g., a coverage or leverage ratio) correlated with
but not perfectly identifying $$D$$. A covenant sets a contractual threshold
$$t$$; a violation occurs when $$r > t$$ (for covenants written so that a higher
ratio signals distress). Distressed and nondistressed firms have
distributions over $$r$$:

$$
\Pr(r < t \mid D = 1) = F_D(t) \qquad \text{(distressed CDF)}
$$

$$
\Pr(r < t \mid D = 0) = F_{ND}(t) \qquad \text{(nondistressed CDF)}
$$

The false negative rate (FNR) and false positive rate (FPR) follow:

$$
\text{FNR}(t) = \Pr(r < t \mid D = 1) = F_D(t)
$$

$$
\text{FPR}(t) = \Pr(r > t \mid D = 0) = 1 - F_{ND}(t)
$$

Because $$\text{FNR}(t)$$ is increasing in $$t$$ and $$\text{FPR}(t)$$ is decreasing in $$t$$, there
is a trade-off: tighter thresholds catch more truly distressed firms
(lower FNR, higher $$\text{TPR} = 1 - \text{FNR}$$) at the cost of more nuisance violations
for healthy firms (higher FPR). The ROC curve traces this trade-off;
better covenant "technology" shifts the ROC curve further from the
45-degree diagonal, allowing a lower FPR at any given TPR (Figure 4, p. 385).

The optimal threshold minimizes total expected costs of both error types
(equation (1), p. 382):

$$
\min_t \; (1 - \rho) \cdot \text{FPR}(t) \cdot C_{\text{FP}} \;+\; \rho \cdot \text{FNR}(t) \cdot C_{\text{FN}}
$$

where $$\rho$$ is the unconditional probability of distress and $$C_{\text{FP}}$$, $$C_{\text{FN}}$$
are the costs of false positives and false negatives, respectively. The
first-order condition identifies the optimal threshold $$t^*$$:

$$
\frac{1 - \rho}{\rho} \cdot \frac{C_{\text{FP}}}{C_{\text{FN}}} = \frac{f_D(t^*)}{f_{ND}(t^*)} \tag{1}
$$

The left side is the preference parameter $$R = \frac{1-\rho}{\rho} \cdot \frac{C_{\text{FP}}}{C_{\text{FN}}}$$,
the ratio of expected costs of false positives to false negatives. The right
side is the likelihood ratio for the relative probability of violation for a
distressed vs. nondistressed borrower at $$t^*$$. Thus:
- A higher $$R$$ (more costly false positives relative to false negatives)
  raises $$t^*$$, loosening the covenant and reducing both FPR and TPR.
- Better technology (ROC curve farther from 45 degrees) allows a lower FPR
  without reducing the TPR.
- Lower distress prevalence $$\rho$$ also raises $$R$$, loosening covenants.

One covenant-technology channel is the shift from balance-sheet to
cash-flow covenants in loan agreements documented by Demerjian (2011),
which the paper treats as a change in how well the metric separates
distressed from nondistressed borrowers.

The paper estimates parameters by assuming $$r \sim N(\mu_D, 1)$$ for distressed
firms and $$r \sim N(0, 1)$$ for nondistressed firms, so $$\mu_D$$ indexes covenant
technology (how well the metric separates the two populations), and $$R$$ is
estimated from the observed FPR and TPR via the ROC curve slope (p. 393).
As an ex ante measure of covenant tightness the paper adopts the covenant
strictness measure of Murfin (2012) together with its Demerjian-Owens
update.

## Method

The paper builds on `probit-regression`, `roc-curve-analysis`, and
`blinder-oaxaca-decomposition` to estimate and decompose structural
parameters from realized violation rates.

**Step 1: Structural parameter estimation (Section IV, pp. 392-393).**
Under the normality assumption, the optimal threshold satisfies
$$\text{FPR} = 1 - \Phi(t^*)$$, so:

$$
t^* = \Phi^{-1}(1 - \text{FPR}_t)
$$

where $$\Phi(\cdot)$$ is the standard normal CDF. Given $$t^*$$, the technology
parameter $$\mu_D$$ is recovered from the TPR:

$$
\text{TPR} = 1 - \Phi(t^* - \mu_D) \implies \mu_D = t^* - \Phi^{-1}(1 - \text{TPR})
$$

The preference parameter $$R$$ is then recovered from the likelihood ratio
condition of equation (1):

$$
R = e^{(t^* - \mu_D / 2) \cdot \mu_D}
$$

Standard errors use the delta method, since the parameters are functions
of sample proportions with known sampling variances (Table III, p. 393).

**Step 2: Violation-rate decomposition (Section III, p. 388).** The annual
violation rate is decomposed using the identity (equation (2), p. 388):

$$
V_t = \rho_t \cdot \text{TPR}_t \;+\; (1 - \rho_t) \cdot \text{FPR}_t \tag{2}
$$

- $$\rho_t = (\text{FN}_t + \text{TP}_t) / N_t$$ is the realized distress rate.
- $$\text{TPR}_t = \text{TP}_t / (\text{TP}_t + \text{FN}_t)$$.
- $$\text{FPR}_t = \text{FP}_t / (\text{FP}_t + \text{TN}_t)$$.

The change in violation rate from period $$s$$ to period $$t$$ decomposes as:

$$
\Delta V_{s,t} = \underbrace{\rho_s \cdot (\Delta\text{TPR})}_{\text{"TPR"}} \;+\; \underbrace{(1 - \rho_s) \cdot (\Delta\text{FPR})}_{\text{"FPR"}} \;+\; \underbrace{(\text{TPR}_t - \text{FPR}_t) \cdot (\Delta\rho)}_{\text{"Distress"}}
$$

**Step 3: Blinder-Oaxaca decomposition (Section V, pp. 399-402).** To
separate the portion of the FPR and TPR trends explained by observable
characteristics from the unexplained portion, the paper employs the
decomposition of Blinder (1973) and Oaxaca (1973). It
estimates two probit regressions: one for the FPR (nondistressed firms
only) and one for the TPR (distressed firms only). For each, the marginal
effects of borrower size, credit rating, lender type, and covenant type
are estimated. The Blinder-Oaxaca decomposition of the change in violation
rates across periods takes the form (equation (3), p. 402):

$$
\bar{V}^t - \bar{V}^s = \underbrace{\bigl[\Phi(\bar{X}^t \hat{\beta}) - \Phi(\bar{X}^s \hat{\beta})\bigr]}_{\text{"Explained"}} \;+\; \underbrace{U}_{\text{"Unexplained"}} \tag{3}
$$

- $$\Phi$$ is the normal CDF.
- $$\hat{\beta}$$ is the estimated probit coefficient vector from Table IV.
- $$X$$ is the set of explanatory variables (borrower size, rating, lender type, loan type, covenant type).
- $$U$$ captures changes in the mapping from $$X$$ to violation status beyond observable composition shifts. The Yun (2004) method attributes the explained portion to individual characteristics.

## Empirical specifications

All main specifications use annual firm-year observations from the
Compustat-EDGAR panel (85,876 firm-years) merged with the Dealscan loan
sample (17,724 packages) for the FPR/TPR analysis. The Dealscan-to-Compustat
merge uses the link file of Chava and Roberts (2008), whose imputed-violation
measure the paper also uses as a robustness check.

**Creditor recovery rate regression (R4, Table I, p. 387).**

$$
\text{RecoveryRate}_i = \alpha + \beta \cdot \text{NoViolation}_i + \gamma' X_i + \epsilon_i
$$

- $$\text{RecoveryRate}_i$$: firm-level par value-weighted average recovery rate (Moody's URD).
- $$\text{NoViolation}_i$$: indicator equal to 1 if the firm did not report a covenant violation in the year before bankruptcy.
- $$X_i$$: controls including operating cash flow/assets, debt/assets, interest expense/assets, net worth/assets, current ratio, market-to-book, cash/assets, and (in column 4) bank debt share.
- Specification: OLS, year and industry fixed effects (columns 2-4), standard errors in parentheses.
- Sample: 403 corporate bankruptcies (Moody's URD, 1997-2020). Winsorized at 1/99%.

**Probit regressions for FPR and TPR determinants (R8, Table IV, p. 401).**

$$
V_i = \Phi\!\left(\alpha + \beta_1 \cdot \text{BorrowerSize}_i + \beta_2 \cdot \text{SpeculativeRating}_i + \beta_3 \cdot \text{InvestmentRating}_i + \beta_4 \cdot \text{UniversalBank}_i + \beta_5 \cdot \text{InstitutionalLoan}_i + \beta_6 \cdot \text{BalanceSheetCovenant}_i + \gamma' \cdot \text{IndustryFE}_i + \epsilon_i\right)
$$

- $$V_i$$: covenant violation indicator (1 = violation).
- Two separate regressions: (i) nondistressed firms only (FPR regression, N = 29,719 full sample; period sub-samples 5,792 / 6,715 / 7,500) and (ii) distressed firms only (TPR regression, N = 1,102 full sample; period sub-samples 968 / ... / 763).
- Specification: probit, Fama-French 12-industry fixed effects, standard errors via delta-method for marginal effects. Coefficients reported as estimated marginal effects.
- $$\text{BorrowerSize}$$: log(total assets, real 2000 dollars). Ratings and lender/covenant-type indicators are as described in Section V.

**Blinder-Oaxaca decomposition (R8, Table V, p. 402).** Based on probit
coefficients from Table IV and period-specific sample means. The explained
portion equals the predicted change due to shifts in the distribution of
$$X$$ using a constant coefficient vector; the unexplained portion is the
residual. Standard errors via delta method.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Compustat (WRDS) | Firm financials, firm-year sample construction (85,876 firm-years, 9,618 firms, 1997-2019) | [WRDS](/wiki/licensed/wrds/) (licensed) |
| SEC EDGAR (10-K and 10-Q filings) | Hand-collected covenant violation disclosures; loan amendment exhibits | [EDGAR](/wiki/datasets/edgar/) |
| Dealscan (WRDS) | Loan package and covenant data; covenant strictness measure; lender characteristics (17,724 packages, 5,258 firms) | [DealScan](/wiki/licensed/dealscan/) (licensed) |
| CRSP (WRDS) | Stock price and shares outstanding for sample filters and controls | [WRDS](/wiki/licensed/wrds/) (licensed) |
| Moody's Ultimate Recovery Database (URD) | Creditor recovery rates for 403 corporate defaults, 1997-2020 | [Moody's URD](/wiki/licensed/moodys-urd/) (licensed) |
| Audit Analytics | Bankruptcy filings cross-check for false-negative identification | no page yet |
| UCLA-LoPucki Bankruptcy Research Database | Bankruptcy filing dates for false-negative classification | [LoPucki BRD](/wiki/datasets/lopucki-brd/) |

Sample: 85,876 firm-year observations (Compustat-EDGAR); 17,724 loan packages
(Dealscan); 403 bankruptcies with recovery data (Moody's URD).

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.70005) if you are:
replicating the violation-coding procedure (the text-search and manual
inspection process from SEC filings); extending the structural
covenant-design model; analyzing the Blinder-Oaxaca decomposition in
detail; or checking the Internet Appendix robustness results (alternative
distress measures, ratio-manipulation tests, loan amendment trends).
The locators above point to the exact table. For "what did this paper
find," the table above is sufficient.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 371-412. (c) 2025 the American Finance Association. This
distillation was extracted by an LLM on 2026-05-31 and is **not
human-verified or independently reproduced**. The paper is paywalled;
only the extract (core results, datasets, theory) is reproduced here
under fair-use principles.

> Griffin, Thomas P., Greg Nini, and David C. Smith. "Losing Control?
> The Two-Decade Decline in Loan Covenant Violations." *The Journal of
> Finance* 81, no. 1 (February 2026): 371-412.
> DOI: [10.1111/jofi.70005](https://doi.org/10.1111/jofi.70005).
> Extract-only; no PDF hosted here.
