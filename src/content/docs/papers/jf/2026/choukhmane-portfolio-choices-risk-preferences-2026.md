---
title: "What Drives Investors' Portfolio Choices: Choukhmane & de Silva (2026)"
description: >-
  Distilled: using 401(k) default-fund quasi-experiments, Choukhmane and de
  Silva show that 94% of retirement investors prefer stock market participation
  absent frictions and estimate relative risk aversion of 2.54, EIS of 0.25,
  and a $156 portfolio adjustment cost. J. Finance 2026, CC BY 4.0. Eight core
  results with source locators, datasets used, the model, and the method.
sidebar:
  label: Choukhmane-deSilva 2026
  order: 1
tags: [paper-summary, household-finance, portfolio-choice, stock-market-participation, life-cycle, frictions, default-effects, risk-preferences, structural, panel-regression, peer-reviewed, unreplicated, open-access, cc-by, data:401k-admin, data:wrds, data:sipp, data:scf]
paper:
  authors: Taha Choukhmane, Tim de Silva
  authorList:
    - family: Choukhmane
      given: Taha
      affiliation: MIT Sloan School of Management and NBER
    - family: De Silva
      given: Tim
      affiliation: Stanford University Graduate School of Business
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 5–48
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  citedByCount: 0
  topics: ['Financial Literacy, Pension, Retirement Analysis', 'Insurance, Mortality, Demography, Risk Management', 'Financial Markets and Investment Strategies']
  dataAccess: proprietary-confidential
  outcome:
    - stock market participation rate in retirement accounts
    - portfolio equity share
    - structural preference parameters (relative risk aversion, EIS, adjustment costs)
  doi: 10.1111/jofi.70013
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-17; corroborated by artifact p.5 Creative Commons Attribution License)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; tested 2026-05-31; CC BY VOR licence confirmed in Crossref metadata overrides the paywalled wrapper)'
  redistribution: 'extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)'
  methods:
    role: both
    contributes: revealed-preference-portfolio-bounds
    family: structural
    buildsFrom: [method-of-simulated-moments, revealed-preference, life-cycle-model, epstein-zin-weil]
  scope:
    region: US
    assetClass: US retirement accounts (401k DC plans)
    period: 2006-12..2017-12
    frequency: annual
  relatesTo:
    - { cite: 'Goldin and Reck (2020)', doi: '10.1086/706860', relation: extends, note: 'extends their revealed-preference framing framework from binary savings to continuous portfolio-share decisions (pp. 7, 18)' }
    - { cite: 'Choukhmane (2025)', doi: '10.1257/aer.20210881', relation: builds-on, note: 'life-cycle model extends his consumption-saving DC model to include multiple assets and portfolio choice (p. 29)' }
    - { cite: 'Merton (1969)', doi: '10.2307/1926560', relation: tests, note: 'estimated preferences are broadly consistent with his CRRA life-cycle model predictions of declining equity share with age (pp. 8, 25)' }
    - { cite: 'Gomes (2020)', doi: '10.1146/annurev-financial-012820-113815', relation: builds-on, note: 'builds on his survey of life-cycle portfolio choice models as the benchmark framework (p. 8)' }
  openQuestions:
    - 'Results are specific to moderate-income retirement account holders; they may not extend to the wealthiest households who hold sizeable nonretirement financial wealth (p. 39).'
    - 'Per-period participation costs are not a first-order driver in the 401(k) setting; their importance in brokerage accounts (which require filing tax forms and more frequent monitoring) is left open (pp. 8, 34).'
    - 'The paper cannot explain nonparticipation among high-income households who do not hold stocks, or individuals without access to an employer-sponsored retirement account (p. 8).'
  replicationCode:
    status: available
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70013
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-17; second entry content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 5–48); all eight results extracted from the PDF. Not human-verified. Not reproduced. Replication code availability not confirmed here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Added methods, scope, relatesTo, openQuestions, replicationCode,
        proposedVocab frontmatter blocks and three formal body sections (Theory / model,
        Method, Empirical specifications) with equations transcribed from the PDF
        (pp. 19-36, 40-41). The Core results table is unchanged from the verified version.
        The new formal sections are extracted, not yet re-verified by paper-verifier.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Re-checked all 8 Core results rows, frontmatter, and formal-section equations
        against the PDF. Two fixes applied: (1) working-life budget constraint corrected
        from additive s^dc_t + w_t to multiplicative s^dc_t * w_t (p. 36); (2) SMM
        objective corrected from W^{-1} to W, consistent with W defined as the inverse
        covariance (optimal weight) matrix (p. 40). All Core result locators and
        magnitudes confirmed. No em-dashes or colorful adjectives found.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 44 pages. To replicate or extend
it, use the [original](https://doi.org/10.1111/jofi.70013).

## TL;DR

Using quasi-experimental variation in 401(k) default asset allocations
(money-market fund vs. target-date fund) across 4 million employees at
hundreds of thousands of plans (Dec 2006-Dec 2017), the paper separates
investors' underlying risk preferences from participation frictions. Absent
frictions, 94% of retirement investors prefer stock market participation
and the average preferred equity share is 76%, declining with age: patterns
broadly consistent with standard life-cycle portfolio choice models. These
preferences differ markedly from observed allocations, where participation
and equity shares are lower and hump-shaped. A life-cycle model estimated
via SMM recovers moderate risk aversion ($$\gamma = 2.54$$), EIS = 0.25, and a
$156 portfolio adjustment cost. Low stock market participation in retirement
accounts is driven by one-time frictions, not nonstandard preferences.

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Lower bound on fraction preferring stock market participation** is 42%; upper bound is 95% | §II.C.1, Fig. 4 (p. 22), Table IAII | At tenure 2 years: bounds 78%–95% (money-market-to-TDF sample); lower bound rises as more investors reveal preferences over tenure |
| R2 | **Point estimate: 94% of investors prefer stock market participation** in their retirement accounts (under Assumption 6) | §II.C.3, Fig. IA9 | At tenure = 3: average preferred participation = 94%; average preferred stock share = 76%; stable over life cycle |
| R3 | **Preferred equity share is high (>60% at all ages) and declining with age** (opposite of the observed hump-shaped profile) | §II.C.4, Fig. 6 (p. 26), right panel | Preferred share ~80% at age 25, declining to ~60% at age 60; observed share hump-shaped and strictly below preferences at all ages |
| R4 | **Observed participation and equity shares diverge from preferences**; TDF-auto-enrolled investors' choices most closely approximate friction-free preferences | Fig. 7 (p. 27) | SCF 2007-16 stock share: 27%; not-auto-enrolled 401(k): 40%; auto-enrolled TDF: 80%; friction-free preference estimate: 76% |
| R5 | **Baseline structural estimate: relative risk aversion $$\gamma = 2.54$$** (EZW model, SMM on 38 moments) | Table III col. (1), p. 41 | $$\gamma = 2.54$$ (SE 0.09); discount factor $$\beta = 0.94$$ (SE 0.001); EIS $$\sigma^{-1} = 0.253$$ (SE 0.018) |
| R6 | **Portfolio adjustment cost = $156; contribution adjustment cost = $488** | Table III col. (1), p. 41 | $$k_\theta$$ = $156 (SE $6.01); $$k_s$$ = $488 (SE $16.60); contribution cost larger, consistent with frictions in DC plan enrollment as additional driver of nonparticipation |
| R7 | **Without frictions, risk-aversion estimates are implausibly heterogeneous**: $$\gamma = 18.94$$ using money-market-default data alone vs. $$\gamma = 2.25$$ using TDF-default data alone | Table III cols. (3) and (4), p. 41 | Same population (employees hired within 12 months of the same policy change), frictionless model produces $$\gamma$$ 18.94 vs. 2.25 depending on which half of the data is used; baseline model reconciles both with $$\gamma = 2.54$$ |
| R8 | **Treatment group (TDF default) maintains ~95% stock market participation and ~80% equity share** throughout tenure; control group (money market default) starts near 0% and converges over years | Fig. 2 (p. 16), Table IAII | Treatment-control gap: 19-25 pp in participation rate, 20-23 pp in stock share of retirement wealth; convergence is gradual, inconsistent with pure time-dependent (Calvo) frictions |

**Overall (paper's conclusion).** Participation frictions, not nonstandard
risk preferences such as loss aversion or ambiguity aversion, are the
primary driver of limited stock market participation in retirement accounts.
Investors' true preferences align with standard life-cycle models once
one-time adjustment costs are accounted for.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| 401(k) administrative records (large U.S. record-keeper, anonymized), Dec 2006–Dec 2017, ~4 million employees, >600k plans | Main data: portfolio allocations, participation, contribution rates, plan defaults | No page yet (proprietary; no public access) |
| CRSP Value-Weighted Index (1925–2006) | Equity premium and return volatility calibration (6.4% premium, 20% vol) | [WRDS / CRSP](/wiki/licensed/wrds/) (licensed) |
| Survey of Income and Program Participation (SIPP) | Labor income process estimation, employment transition probabilities | No page yet |
| Survey of Consumer Finances (SCF), 2007 and 2016 waves | External validation of financial wealth, stock market participation benchmarks | No page yet |

Sample: ~4 million employees, more than 600,000 401(k) plans, ages 25-64,
2006-2017. Quasi-experiment #1 (money-market-to-TDF): 1,086 control + 1,321
treatment investors at 6 firms. Quasi-experiment #2 (opt-in-to-TDF): 40,337
control + 52,400 treatment investors at 191 firms.

## Theory / model

The paper combines two frameworks: a nonparametric revealed-preference
approach and a structural life-cycle model.

**Revealed-preference setup (Section II, pp. 19-24).** Individual $$i$$ has
unobserved preferred participation $$Y^*_{it} \in \{0,1\}$$ and preferred equity
share $$\theta^*_{it} \in [0,1]$$ at tenure $$t$$. Observed allocations $$Y_{it}$$,
$$\theta_{it}$$ may differ because of inertia or frictions. The 401(k) plan
carries a default $$D_i \in \{0,1\}$$ ($$D=1$$ means TDF default; $$D=0$$ means money
market or opt-in). Consistency indicators are (p. 19):

$$
C^Y_{it} = 1 \text{ if } Y_{it}(0) = Y_{it}(1), \quad 0 \text{ otherwise.}
$$

$$
C^\theta_{it} = 1 \text{ if } \theta_{it}(0) = \theta_{it}(1), \quad 0 \text{ otherwise.}
$$

Four identifying assumptions (pp. 20-22):

$$
\text{Assumption 1 (Frame Separability):} \quad (Y^*_{it}, \theta^*_{it}) \text{ independent of } D_i.
$$

$$
\text{Assumption 2 (Frame Exogeneity):} \quad D_i \text{ independent of } (Y_{it}(0), Y_{it}(1), \theta_{it}(0), \theta_{it}(1)).
$$

$$
\text{Assumption 3 (Frame Monotonicity):} \quad Y_{it}(1) \geq Y_{it}(0), \quad \theta_{it}(1) \geq \theta_{it}(0).
$$

$$
\text{Assumption 4 (Consistency):} \quad C^Y_{it} = 1 \Rightarrow Y_{it} = Y^*_{it}; \quad C^\theta_{it} = 1 \Rightarrow \theta_{it} = \theta^*_{it}.
$$

Proposition 1 (p. 21) shows the average preference for participation is
partially identified under Assumptions 1-4:

$$
\mathbb{E}_\tau(Y^*_{it}) \in [\mathbb{E}_\tau(Y_{it} \mid D_i=0),\ \mathbb{E}_\tau(Y_{it} \mid D_i=1)]. \tag{1}
$$

For the average equity share (continuous variable), a fifth assumption is
needed. Assumption 5 (p. 22): an investor who deviates from the default
chooses her preferred share (consistent with fixed-cost models). Proposition 2 (p. 22):

$$
\mathbb{E}_\tau(\theta^*_{it}) \geq \mathbb{E}_\tau(\theta_{it} \mid D_i=0).
$$

For point identification, Assumption 6 (p. 23): preferences of consistent
(active) and inconsistent (passive) investors are uncorrelated at any tenure:

$$
\text{cov}_\tau(Y^*_{it},\, C^Y_{it}) = \text{cov}_\tau(\theta^*_{it},\, C^\theta_{it}) = 0.
$$

Under Assumption 6, Proposition 3 (p. 23) gives:

$$
\mathbb{E}_\tau(Y^*_{it}) = \mathbb{E}_\tau(Y^*_{it} \mid C^Y_{it} = 1) - \frac{1}{\mathbb{E}_\tau(C^Y_{it})} \cdot \text{cov}_\tau(Y^*_{it},\, C^Y_{it}) \tag{2}
$$

$$
\mathbb{E}_\tau(\theta^*_{it}) = \mathbb{E}_\tau(\theta^*_{it} \mid C^\theta_{it} = 1) - \frac{1}{\mathbb{E}_\tau(C^\theta_{it})} \cdot \text{cov}_\tau(\theta^*_{it},\, C^\theta_{it}) \tag{3}
$$

where the first term is the preferences of consistent investors (identified
as their observed active choices, eq. 4) and the second is a selection bias
term. Under Assumption 6 the bias is zero and preferences equal the active
investors' average choices.

**Life-cycle model (Section III, pp. 29-36).** Investors have Epstein-Zin-Weil
recursive preferences. The value function for a retired investor (state
vector $$X_t$$) satisfies (p. 35):

$$
V_t = \max_{d^{dc}_t,\, s^l_t,\, \Xi_t} \left\{ (1-\beta) n_t \left[ \frac{c_t - k_\theta \mathbf{1}\{\Xi_t \neq \Xi_{d,t}\}}{n_t} \right]^{1-\sigma} + \beta \left[ m_t \mathbb{E}_t V^{1-\gamma}_{t+1} \right]^{(1-\sigma)/(1-\gamma)} \right\}^{1/(1-\sigma)}
$$

subject to: (10), (11), (12), (14), (15), (17), and budget constraint

- $$\gamma$$ = relative risk aversion
- $$\sigma^{-1}$$ = EIS
- $$\beta$$ = discount factor
- $$n_t$$ = equivalence scale
- $$k_\theta$$ = portfolio adjustment cost (utility units)
- $$m_t$$ = survival probability

For the working life (employment states $$E$$ or $$JJ$$), an additional contribution adjustment cost
$$k_s$$ is incurred when $$s^{dc}_t \neq s_{d,t}$$ (p. 36):

$$
V_t = \max_{s^{dc}_t,\, s^l_t,\, \Xi_t} \left\{ (1-\beta) n_t \left[ \frac{c_t - k_\theta \mathbf{1}\{\Xi_t \neq \Xi_{d,t}\} - k_s \mathbf{1}\{s^{dc}_t \neq s_{d,t}\}}{n_t} \right]^{1-\sigma} + \beta \left[ m_t \mathbb{E}_t V^{1-\gamma}_{t+1} \right]^{(1-\sigma)/(1-\gamma)} \right\}^{1/(1-\sigma)}
$$

subject to: (7), (8), (10), (11), (12), (14), (15), (17), and

$$
s^{dc}_t \cdot w_t + s^l_t = w_t - c_t - \text{tax}_i(y^{\text{tax}}_t).
$$

Three financial assets: risk-free bond (gross return $$R_f$$), risky stock
(log return process, p. 31):

$$
\ln R^S_t = \ln R_f + \mu_s + \epsilon_t, \quad \epsilon_t \sim N(0,\, \sigma^2_s). \tag{10}
$$

Liquid savings account (p. 31):

$$
L_{t+1} = (L_t + s^l_t)[1 + r(1 - \tau_c)], \quad L_0 = 0. \tag{11}
$$

Labor income follows an AR(1) process with a deterministic cubic-in-age
component (pp. 30-31):

$$
\ln w_t = \delta_0 + \delta_1 a_t + \delta_2 a^2_t + \delta_3 a^3_t + \eta_t, \tag{7}
$$

$$
\eta_t = \rho \eta_{t-1} + \xi^E_t, \quad \xi^E_0 \sim N(0,\, \sigma^2_{\xi_0}), \quad \xi^E_t \sim N(0,\, \sigma^2_\xi) \text{ for } t>0.
$$

Default options follow: at a new job, defaults are the employer's settings
$$\theta^j_{e}$$ (portfolio) and $$s^{dc}_{e}$$ (contribution rate); in
subsequent periods the default is the prior period's choice (eqs. 14-16,
pp. 33-34).

## Method

The estimation has two stages. The first stage sets demographics,
income-process parameters, asset returns, and tax/benefit rules outside the
model using auxiliary data and calibration (pp. 36-38). The second stage
estimates five preference parameters by SMM (Simulated Method of Moments):
$$\beta$$, $$\gamma$$, $$\sigma^{-1}$$, $$k_\theta$$, $$k_s$$ (pp. 36, 39-40).

The life-cycle model is solved by standard numerical discrete-time
dynamic programming. The state vector has 10 dimensions (age, labor
productivity, employment status, employer identity, tenure, average lifetime
earnings, DC retirement savings, liquid savings, default portfolio shares,
default contribution rate). Controls are: consumption, portfolio shares for
new and accumulated DC assets, DC contribution rate, DC withdrawal, and
liquid savings.

The SMM objective minimizes the weighted squared distance between
model-simulated and empirical moments (pp. 39-40):

$$
\min_{\theta} (\hat{m} - m(\theta))' W (\hat{m} - m(\theta))
$$

- $$\hat{m}$$ are 38 empirical moments
- $$m(\theta)$$ are their model counterparts simulated on 7,500 investors (approximately five times the estimation sample size)
- $$W$$ is the inverse covariance matrix of the empirical moments (i.e., the optimal SMM weight matrix), estimated via Erickson-Whited (2002) to avoid bootstrapping-weight-matrix bias

The method builds on Epstein-Zin-Weil preferences (separating $$\gamma$$
from $$\sigma^{-1}$$, following Epstein and Zin (1989) and Weil (1990)) and
on revealed-preference bounds (Goldin and Reck (2020) extended to
continuous shares here).

**Key identifying variation for each parameter:**
- $$k_\theta$$ and $$k_s$$: identified by bunching at default options at various
  tenure levels; the degree of bunching pins down adjustment cost size.
- $$\gamma$$: identified primarily by asset allocation decisions of consistent
  (active) investors who deviate from the default.
- $$\sigma^{-1}$$: identified by bunching at the employer match threshold (6%
  of salary cap), following Best et al. (2020) and Choukhmane (2025).
- $$\beta$$: identified by the overall level of retirement contributions.

## Empirical specifications

The paper does not use OLS regressions with fixed effects as the primary
estimating procedure. Instead, two reduced-form exercises and one SMM
structural estimation generate the results.

**Quasi-experimental comparison (R8, R1, pp. 13-17).** For each sample
(money-market-to-TDF and opt-in-to-TDF), the estimating object is the
difference in observed portfolio outcomes between investors hired within 12
months before versus after the 401(k) default asset allocation change at
the same set of firms:

$$
\text{Outcome}_{it} = f(\text{tenure}_t,\, D_i), \quad D_i = \mathbf{1}[\text{hired after default change at firm } e]
$$

No regression equation is reported; the result is the raw time-path of
stock market participation $$Y_t$$ and equity share $$\theta_t$$ by years of
tenure for treatment vs. control (Figure 2, p. 16). Standard errors are
clustered by investor (quasi-experiment #1) or by firm (quasi-experiment #2).
Sample: money-market-to-TDF: 1,086 control + 1,321 treatment at 6 firms;
opt-in-to-TDF: 40,337 control + 52,400 treatment at 191 firms.

**Nonparametric preference bounds and point estimates (R1-R4, pp. 21-27).**
The estimating objects are the tenure-specific conditional means from
Propositions 1-3 applied to the quasi-experimental data (p. 25):

$$
\mathbb{E}_\tau(Y^*_{it}) = \mathbb{E}_\tau(Y_{it} \mid Y_{it} \neq D_i,\, \text{age}=A) \tag{5}
$$

$$
\mathbb{E}_\tau(\theta^*_{it}) = \mathbb{E}_\tau(\theta_{it} \mid \theta_{it} \neq \theta^d_i(D_i),\, \text{age}=A) \tag{6}
$$

Standard errors are clustered by investor (quasi-experiment #1) and by
firm (quasi-experiment #2). Life-cycle preference profiles by age are
displayed in Figures 5 and 6 (pp. 25-26). The point estimates (Assumption 6)
are displayed in Figure IA9: average preferred participation = 94%, average
preferred equity share = 76%, at tenure = 3.

**SMM estimation (R5-R7, pp. 39-41).** Targeting 38 moments: 14 stock
market participation rates by tenure from the money-market-to-TDF
quasi-experiment; 16 average stock shares by age for each default group at
end of first tenure year; and 8 contribution rate distribution moments
from the opt-in-to-TDF quasi-experiment. Table III (p. 41) reports the
five preference parameters with standard errors:

$$
\beta = 0.940\ (\text{SE}\ 0.001), \quad \gamma = 2.54\ (\text{SE}\ 0.09), \quad \sigma^{-1} = 0.253\ (\text{SE}\ 0.018),
$$

$$
k_\theta = \$156\ (\text{SE}\ \$6.01), \quad k_s = \$488\ (\text{SE}\ \$16.60).
$$

Robustness: column (2) imposes CRRA ($$\sigma = \gamma$$); column (3) zeros
adjustment costs and uses only control-group moments (yields $$\gamma = 18.94$$);
column (4) zeros adjustment costs and uses only TDF-default moments (yields
$$\gamma = 2.25$$). The stark contrast between columns (3) and (4) is the
paper's key identification claim for the role of frictions (R7).

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70013) if you are:
replicating the nonparametric bounds or the SMM estimation; extending the
life-cycle model to brokerage accounts or international settings; reviewing
the Internet Appendix robustness (peer effects, passive rebalancing,
survivorship, cohort/year effects, income conditioning); or auditing a
specific coefficient from Table III. The locators above point to the exact
table or figure.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1). This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The paper is CC BY 4.0 and mirroring is
permitted; no PDF mirror has been set up in this batch.

> **Attribution (CC BY 4.0).** Choukhmane, Taha, and Tim de Silva.
> "What Drives Investors' Portfolio Choices? Separating Risk Preferences
> from Frictions." *The Journal of Finance* 81, no. 1 (February 2026):
> 5–48. DOI: 10.1111/jofi.70013. © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
