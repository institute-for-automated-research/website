---
title: "Alternative Explanation for the Fed Information Effect: Bauer & Swanson (2023)"
description: >-
  Distilled: Bauer and Swanson (2023) show that standard "Fed information
  effect" regressions suffer from omitted variable bias; once economic news
  controls are added, monetary policy surprise coefficients reverse sign to
  match standard macroeconomic theory. A "Fed response to news" channel,
  supported by their own forecaster survey and financial market evidence,
  explains the data without invoking Fed private information. American
  Economic Review 2023, AEA copyright. Seven core results with source
  locators, datasets used, the model (imperfect information about the policy
  rule), and the method (OLS with news controls, high-frequency event study).
sidebar:
  label: Bauer-Swanson 2023
  order: 1
tags: [paper-summary, monetary-policy, monetary-economics, central-banking,
       information-effects, forecasting, macro, peer-reviewed, unreplicated,
       panel-regression, event-study,
       data:blue-chip-forecasts, data:fed-greenbook]
paper:
  authors: Michael D. Bauer and Eric T. Swanson
  authorList:
    - { family: Bauer, given: Michael D., orcid: "0000-0002-2711-816X", affiliation: "Universität Hamburg, CEPR, CESifo" }
    - { family: Swanson, given: Eric T., orcid: "0009-0004-7871-174X", affiliation: "University of California, Irvine, NBER" }
  year: 2023
  venue: "American Economic Review 113(3), March 2023, 664-700"
  venueShort: AER 2023
  doi: 10.1257/aer.20201220
  jel:
    codes: [D82, E23, E27, E43, E44, E52, E58]
    assignedBy: paper-verifier (claude-sonnet-4-6)
    date: 2026-06-24
  topics:
    - Monetary Policy and Economic Impact
    - Market Dynamics and Volatility
    - Fiscal Policies and Political Economy
  dataAccess: licensed-commercial
  outcome:
    - Blue Chip consensus forecast revisions for GDP, unemployment, and CPI inflation around FOMC announcements
    - high-frequency monetary policy surprises around FOMC announcements
    - stock price and exchange rate responses to FOMC announcements
  outcomeClass: [expectations, macro-aggregates]
  license: >-
    AEA copyright; articles freely accessible on AEAweb after 3-year embargo
    (elapsed March 2026); Crossref returned no license block (checked
    2026-06-24); no Creative Commons licence
  licenseShort: AEA copyright
  access: open
  machineAccess: >-
    free on AEAweb (AEA 3-year embargo elapsed March 2026; not independently
    verified by machine fetch 2026-06-24)
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 249
  introducesData: true
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, event-study]
    identification: selection-on-observables
  contributionType: [new-fact, replication]
  mechanisms: [information-asymmetry]
  scope:
    region: US
    assetClass: monetary policy, macroeconomic forecasts
    period: 1990-01..2019-06
    frequency: monthly
    dataType: [market, survey, administrative]
    granularity: [aggregate]
    n: "217 FOMC announcements (full sample, 1990-2019); N=120 (NS subsample); N=129 (CEFJ subsample)"
  findings:
    - ref: R1
      outcome: Blue Chip consensus forecast revisions for GDP, unemployment, and CPI inflation around FOMC announcements
      metric: r-squared
      value: "R² = 0.00-0.06 in standard Fed information effect regressions; coefficients have signs opposite to standard macro theory (Table 1, pp. 672-674)"
      direction: none
    - ref: R2
      outcome: Blue Chip consensus forecast revisions for GDP, unemployment, and CPI inflation around FOMC announcements
      metric: r-squared
      value: "R² = 0.64 (unemployment), 0.40 (GDP), 0.31 (CPI inflation) for economic news predictors of Blue Chip forecast revisions (Table 2, p. 677)"
      direction: positive
    - ref: R3
      outcome: high-frequency monetary policy surprises around FOMC announcements
      metric: r-squared
      value: "R² = 0.12-0.20 across target, path, and NS surprise measures for economic news predicting monetary policy surprises (Table 3, pp. 679-680)"
      direction: positive
    - ref: R4
      outcome: Blue Chip consensus forecast revisions for GDP, unemployment, and CPI inflation around FOMC announcements
      metric: coefficient
      value: "Target factor on GDP = -0.241 (se=0.145); target on unemployment = +0.152 (se=0.074); target on inflation = +0.067 (se=0.088); R² rises to 31-65% from 0-6% (Table 4, p. 682)"
      direction: mixed
      vsBenchmark: "signs flip from Table 1 (wrong-sign) to correct-sign consistent with standard macro theory and VARs"
    - ref: R5
      outcome: Blue Chip consensus forecast revisions for GDP, unemployment, and CPI inflation around FOMC announcements
      metric: probability
      value: "0 out of 36 survey respondents revise GDP forecast upward after a hawkish surprise; 18 of 23 revising respondents revise downward (conventional direction); 13 of 36 do not revise at all in response to the federal funds rate decision (Table 5, pp. 683-686)"
      direction: none
      vsBenchmark: "directly contradicts the upward-revision prediction of Nakamura and Steinsson (2018)"
    - ref: R6
      outcome: stock price and exchange rate responses to FOMC announcements
      metric: coefficient
      value: "S&P500 response to NS surprise: -8.04 (se=1.91) for 10 strongest information-effect observations vs. -7.14 (se=1.84) for remaining 110 obs; difference not significant (Table 7, p. 689)"
      direction: negative
      vsBenchmark: "equally negative for the strongest information-effect announcements; no attenuation consistent with a Fed information effect"
    - ref: R7
      outcome: Blue Chip consensus forecast revisions for GDP, unemployment, and CPI inflation around FOMC announcements
      metric: r-squared
      value: "Greenbook and Blue Chip forecast RMSEs essentially identical: unemployment 0-3Q avg GB=0.42, BC=0.42; GDP 0-3Q avg GB=1.64, BC=1.60; Diebold-Mariano p-values mostly above 0.05 (Table 8, pp. 690-692)"
      direction: none
      vsBenchmark: "Fed has no systematic forecast accuracy advantage over Blue Chip professional forecasters"
  resultType: overturns
  relatesTo:
    - { cite: "Nakamura and Steinsson (2018)", relation: contradicts, note: "challenges their Fed information effect evidence for real GDP: the positive Blue Chip GDP forecast revision coefficient disappears after controlling for economic news" }
    - { cite: "Campbell et al. (2012)", doi: '10.1353/eca.2012.0004', relation: contradicts, note: "challenges their Fed information effect evidence for unemployment: coefficient reverses sign after economic news controls; survey shows forecasters do not revise in the information-effect direction" }
    - { cite: "Romer and Romer (2000)", doi: '10.1257/aer.90.3.429', relation: contradicts, note: "original paper proposing the Fed information effect for inflation; result attributed to Volcker disinflation era and does not hold in the updated full sample" }
    - { cite: "Gurkaynak, Sack, and Swanson (2005b)", doi: '10.1257/0002828053828446', relation: builds-on, note: "uses their target and path factors (GSS) as high-frequency monetary policy surprise measures computed from short-maturity futures in a 30-minute FOMC window" }
    - { cite: "Cieslak (2018)", doi: '10.1093/rfs/hhy051', relation: builds-on, note: "provides empirical evidence that financial markets underestimated the Fed responsiveness to the economy, supporting the Fed response to news channel" }
  openQuestions:
    - "Whether a Fed information effect was present and important in the 1970s, a period predating the paper's data (p. 670, footnote 6)."
    - "Whether the results fully eliminate a small residual information effect: the paper acknowledges FOMC announcements might still reveal some private information, but any such effect is small relative to standard monetary policy effects (p. 683)."
  replicationCode:
    url: "https://doi.org/10.3886/E181661V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full text read (pp. 664-700); seven results extracted from source PDF. Not human-verified. Not reproduced." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; all seven Core results rows confirmed correct. Fixed JEL codes (wiki had 3 of 7; now lists all 7 from the PDF abstract: D82, E23, E27, E43, E44, E52, E58). Equations (2)-(15) verified term-by-term; all transcribed correctly."
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20201220", checked: 2026-06-24, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block returned; container-title: American Economic Review; published: 2023-03-01; pages: 664-700; volume: 113; issue: 3; ISSN: 0002-8282" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model (imperfect information about the Fed's policy rule), and the method (OLS with economic news controls plus high-frequency financial-market evidence): enough to see what it found and how, without reading all 37 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20201220) and the [replication package](https://doi.org/10.3886/E181661V1).

## TL;DR

Bauer and Swanson (2023) challenge the "Fed information effect" (FIE): the finding that monetary policy tightenings are associated with *upward* revisions in private-sector GDP and employment forecasts, which prior literature interpreted as the Fed revealing positive private information about the economy. They make four main arguments. First, economic news released in the weeks between the Blue Chip survey and the FOMC announcement is an important omitted variable in standard FIE regressions. Second, once that news is controlled for (regressions with full news vectors), the monetary policy surprise coefficients reverse sign and become consistent with standard macroeconomic theory: hawkish surprises reduce GDP forecasts and raise unemployment forecasts. Third, their direct survey of all 52 Blue Chip forecasters (Section III) confirms that forecasters do not revise in the information-effect direction. Fourth, high-frequency stock market and exchange rate responses to FOMC announcements are equally negative for the "most influential" FIE announcements as for all other announcements, with no sign of a positive information channel. The alternative explanation, which they call the "Fed response to news" channel, is that both the Fed and private forecasters respond to the same public economic data, but the Fed responded more strongly than markets anticipated, generating a spurious positive correlation in simple regressions.

## Core results

Magnitudes and significance as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Standard FIE regressions of Blue Chip forecast revisions on monetary policy surprises have very low R² and fragile coefficients with signs opposite to standard macro theory | Table 1, pp. 672-674 | R² = 0.00-0.06 across unemployment, GDP, and CPI inflation and across samples (N=120, 129, 206, 217); estimates sensitive to sample period and variable forecast |
| R2 | Economic news strongly predicts Blue Chip forecast revisions, confirming the omitted variable | Table 2, p. 677 | R² = 0.64 (unemployment), 0.40 (GDP), 0.31 (CPI inflation); unemployment surprise coefficient = 0.308 (se=0.037); S&P500 change coefficient on GDP = 0.620 (se=0.167) |
| R3 | Economic news predicts high-frequency monetary policy surprises, establishing omitted variable bias in FIE regressions | Table 3, pp. 679-680 | R² = 0.12-0.20 across target, path, and NS surprise measures; S&P500 coefficient \approx 0.15 across all three MPS measures |
| R4 | Controlling for economic news eliminates the FIE: MPS coefficients reverse to conventional signs and R² rises to 31-65% | Table 4, p. 682 | Target factor on GDP = -0.241 (se=0.145); target on unemployment = +0.152 (se=0.074); target on inflation = +0.067 (se=0.088); R² rises from 0-6% to 31-65% |
| R5 | Survey of 52 Blue Chip forecasters: no respondent revises GDP forecast upward after a hawkish surprise; 18 of 23 who revise do so conventionally | Table 5, pp. 683-686 | 0/36 upward GDP revision after hawkish surprise; 18/36 downward; 13/36 do not revise at all in response to the funds rate decision |
| R6 | High-frequency stock market and exchange rate responses to FOMC announcements are equally negative for the ten "most influential" FIE observations | Table 7, p. 689 | S&P500: -8.04 (se=1.91) for top-10 FIE observations vs. -7.14 (se=1.84) for remaining 110 obs; difference not significant |
| R7 | Fed Greenbook and Blue Chip forecast RMSEs are essentially identical; no systematic Fed information advantage | Table 8, pp. 690-692 | Unemployment 0-3Q avg RMSE: GB=0.42, BC=0.42; GDP 0-3Q avg: GB=1.64, BC=1.60; Diebold-Mariano p-values mostly above 0.05 |

**Overall (paper's conclusion).** The response of Blue Chip macroeconomic forecast revisions to FOMC announcements can be fully explained by omitted economic news variables, without invoking the Fed information effect. Once news is controlled for, the monetary policy surprise coefficients become consistent with standard macro models and VARs. The "Fed response to news" channel, in which both the Fed and private forecasters respond to the same publicly available economic data, explains all the empirical patterns.

## Theory / model

Section V (pp. 692-696) presents a simple partial-equilibrium model with imperfect information about the Fed's policy rule. It contains no Fed information effect by construction and illustrates the "Fed response to news" channel.

**Output gap** follows an exogenous AR(1) (eq. 10, p. 693):

$$
x_t = \rho_x x_{t-1} + \eta_t, \qquad \eta_t \sim i.i.d.\, N(0, \sigma_\eta^2), \quad \rho_x \in [0,1)
$$

**Monetary policy rule:** the central bank sets the interest rate linearly in the output gap (eq. 11, p. 693):

$$
i_t = a x_t + \varepsilon_t, \qquad \varepsilon_t \sim i.i.d.\, N(0, \sigma_\varepsilon^2)
$$

The parameter $$a > 0$$ denotes the central bank's responsiveness to the output gap and is known to the central bank but NOT to the private sector. The private sector maintains prior beliefs $$a \sim N(\hat{a}_t, \sigma^2_{a_t})$$ updated from history $$\mathcal{H}_{t-1} = \{i_s, x_s, i_{s-1}, x_{s-1}, \ldots\}$$. The core uncertainty is about $$a$$, not about $$x_t$$ (which is observed by all).

**Expected future rates** (after observing $$x_t$$ but before the FOMC announcement; eq. 12, p. 694):

$$
E[i_{t+j} | x_t, \mathcal{H}_{t-1}] = \hat{a}_t \rho_x^j x_t
$$

**Monetary policy surprise** (the gap between announced $$i_t$$ and prior expectation; eq. 13, p. 694):

$$
mps_t \equiv i_t - E[i_t | x_t, \mathcal{H}_{t-1}] = (a - \hat{a}_t) x_t + \varepsilon_t
$$

This shows that $$mps_t$$ is driven both by the pure exogenous shock $$\varepsilon_t$$ and by the private sector's uncertainty about $$a$$, captured by $$(a - \hat{a}_t) x_t$$. If markets have persistently underestimated $$a$$ (i.e., $$\hat{a}_t < a$$), then $$mps_t$$ will be positively correlated with $$x_t$$, exactly as found empirically in Tables 2 and 3. Cieslak (2018) provides direct evidence that financial markets systematically underestimated the Fed's responsiveness to the economy over this period, consistent with $$\hat{a}_t < a$$ persisting for many periods.

**Bayesian belief update** (eq. 14, p. 694): after observing $$mps_t$$, the private sector updates:

$$
E[a | \mathcal{H}_t] = \hat{a}_t + \omega_t \frac{1}{x_t} mps_t, \qquad \omega_t \equiv \frac{x_t^2 \sigma^2_{a_t}}{x_t^2 \sigma^2_{a_t} + \sigma^2_\varepsilon}
$$

**Interest rate forecast revision** (eq. 15, p. 694): the updated belief implies a forecast path revision of:

$$
E[i_{t+j} | \mathcal{H}_t] - E[i_{t+j} | x_t, \mathcal{H}_{t-1}] = \rho_x^j \omega_t \, mps_t
$$

So interest rate path revisions are a positive, horizon-declining function of $$mps_t$$, replicating the empirical pattern of Gurkaynak, Sack, and Swanson (2005b) without any private Fed information.

**Implication for identification.** Even though $$mps_t$$ may be correlated with $$x_t$$ ex post, it can still be used without adjustment to estimate the causal effects of the exogenous monetary policy shock $$\varepsilon_t$$ on asset prices in narrow-window event-study regressions, because interest rate expectations respond only to $$mps_t$$ and not separately to $$\varepsilon_t$$ (p. 695). However, using $$mps_t$$ as an instrument in structural VARs or local projections is problematic because the exogeneity condition is violated: $$mps_t$$ is correlated ex post with structural shocks to $$x_t$$ (p. 695-696).

## Method

The paper applies three empirical designs. This section states the estimating equations; the identifying assumptions are discussed in the Empirical specifications section. The method builds on `panel-regression` and `event-study`.

**Design 1: Blue Chip forecast revision regressions (replication and extension, eqs. 2-3, pp. 672-673).** Following Campbell et al. (2012) (henceforth CEFJ):

$$
\text{BCrev}_t = \alpha + \beta \, \text{target}_t + \gamma \, \text{path}_t + \varepsilon_t \tag{2}
$$

where $$\text{BCrev}_t$$ is the one-month revision in the Blue Chip consensus forecast, averaged over the 1-, 2-, and 3-quarter-ahead horizons; $$\text{target}_t$$ and $$\text{path}_t$$ are GSS high-frequency factors computed from short-maturity federal funds and Eurodollar futures in a 30-minute window around the FOMC announcement. The Nakamura and Steinsson (2018) variant uses a single composite surprise $$\text{mps}_t$$ (first principal component):

$$
\text{BCrev}_t = \phi + \theta \, \text{mps}_t + \eta_t \tag{3}
$$

Standard errors are bootstrapped (50,000 replications) to account for the generated-regressor nature of the GSS factors.

**Design 2: Economic news controls (eqs. 4-6, p. 676).** The corrected specification adds a news vector $$\text{news}_t$$:

$$
\text{BCrev}_t = \alpha + \beta \, \text{target}_t + \gamma \, \text{path}_t + \delta'\text{news}_t + \varepsilon_t \tag{4}
$$

and analogously for the NS version. $$\text{news}_t$$ includes: unemployment surprise, payrolls surprise, GDP surprise, BBK composite business-cycle index, lagged core CPI measures, core CPI surprise, log change in the S&P500, change in yield curve slope, and log change in commodity prices, all pre-dating the FOMC announcement. Economic news also predicts the monetary policy surprises themselves (eq. 7, p. 679):

$$
mps_t = \alpha + \beta'\text{news}_t + \varepsilon_t \tag{7}
$$

**Design 3: Financial market event study (eq. 8, p. 688).** High-frequency stock and exchange rate regressions:

$$
\Delta \log x_t = \phi + \theta \, \text{mps}_t + \eta_t \tag{8}
$$

run separately over the ten most influential FIE observations and the remaining observations.

**Design 4: Greenbook encompassing regressions (eq. 9, p. 691).** Following Romer and Romer (2000):

$$
X_{t+h} = \alpha + \beta \hat{X}^{GB}_{t+h|t} + \gamma \hat{X}^{BC}_{t+h|t} + \varepsilon_{t+h} \tag{9}
$$

where $$X_{t+h}$$ is the realized macro variable, $$\hat{X}^{GB}$$ and $$\hat{X}^{BC}$$ are the Greenbook and Blue Chip forecasts. A coefficient test asks whether either forecast dominates. Hansen-Hodrick standard errors with $$2(h+1)$$ lags for overlapping horizons.

## Empirical specifications

**Section I (Table 1, R1).** Regressions (2) and (3) are run on four samples: CEFJ replication sample (1990-2007, N=129); NS replication sample (1995-2014, N=120); full sample including unscheduled FOMC announcements (1990-2019, N=217); full sample excluding unscheduled (N=206). Three outcomes: unemployment, GDP, CPI inflation. Identification rests on the assumption that the 30-minute monetary policy surprise window is exogenous to monthly forecast revision determinants; the paper shows this assumption is violated by the economic news omitted variable.

**Section II (Tables 2-4, R2-R4).** Full sample, N=217. Table 2 runs eq. (6) with $$\text{BCrev}$$ as outcome; confirms news has R² of 31-64% for forecast revisions. Table 3 runs eq. (7) with MPS as outcome; confirms news has R² of 12-20% for monetary policy surprises. Table 4 runs eqs. (4) and (5) simultaneously, adding all news controls. Identifying assumption: conditional on economic news, the residual variation in the FOMC surprise is uncorrelated with other determinants of forecast revisions (selection on observables). Standard errors bootstrapped (50,000 reps) throughout.

**Section III (Table 5, R5).** Original survey of 52 Blue Chip Economic Indicators forecasting firms, conducted July-August 2019; 36 responses (70% response rate). Each firm was asked how it revises its GDP, unemployment, and CPI forecasts in response to four components of FOMC announcements: (i) the funds rate decision, (ii) the FOMC statement, (iii) the dot plot, and (iv) the SEP forecasts. Survey answers are self-reported and directional (up/down/no change), not quantitative.

**Section IV (Tables 6-8, R6-R7).** The ten "most influential" FIE observations in the NS regression are identified by the change in the regression t-statistic when that observation is excluded. Regression (8) is run separately for these ten and the remaining 110 NS observations (heteroskedasticity-consistent standard errors). Greenbook comparison (eq. 9) uses 1990-2013 (N=192 observations matched on timing), horizons h=0,1,2,3 quarters, plus the 0-3 quarter average.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Blue Chip Economic Indicators survey (Wolters Kluwer) | Monthly consensus forecasts of GDP growth, unemployment, CPI inflation used as $$\text{BCrev}_t$$ dependent variable; monthly revisions in Sections I-III | [Blue Chip Financial Forecasts](/wiki/commercial/blue-chip-forecasts/) (licensed) |
| GSS monetary policy surprise factors (Gurkaynak, Sack, Swanson 2005b) | Target and path surprise factors from federal funds and Eurodollar futures in 30-minute FOMC windows; also NS first-principal-component surprise | No page yet |
| Money Market Services survey | Market expectations of upcoming BLS/BEA data releases; used to compute the "surprise" component of each macro release | No page yet |
| BLS employment report, BEA GDP release, BLS CPI release | Unemployment surprise, payrolls surprise, GDP surprise, core CPI surprise (components of $$\text{news}_t$$) | No page yet |
| BBK composite business cycle index (Brave, Butters, Kelley 2019) | Comprehensive single monthly business activity index; included in $$\text{news}_t$$ | No page yet |
| S&P500, USD/EUR exchange rate, commodity price index | Financial news controls (lagged in $$\text{news}_t$$) and event-study outcomes in Section IV | No page yet |
| Federal Reserve Greenbook forecasts | Fed's internal forecasts of unemployment, GDP, CPI; compared against Blue Chip accuracy in Section IV.B; public after 5-year lag, available through Dec 2013 | No page yet |
| Authors' own survey of Blue Chip forecasters (July 2019) | Hand-collected survey of 52 professional forecasting firms on how they revise forecasts in response to FOMC announcements; Section III; published in the replication package | No page yet |

Sample: monthly FOMC announcement months, January 1990 to June 2019 (N=217 including unscheduled; N=206 excluding). NS subsample: January 1995 to March 2014 (N=120). CEFJ subsample: January 1990 to June 2007 (N=129). Greenbook comparison: 1990-2013 (N=192).

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20201220) if you are: (i) using high-frequency monetary policy surprises as instruments in a structural VAR or local projections framework, where the paper's recommendation to purge the "Fed response to news" component before using them as instruments is directly relevant (Section V, pp. 695-696 and the forthcoming companion paper); (ii) studying whether FOMC announcements transmit private central-bank information to private forecasters (the core question); (iii) replicating or extending the Nakamura and Steinsson (2018) or Campbell et al. (2012) results (exact sample construction details and bootstrap procedure are in Sections I-II and online appendices); or (iv) comparing Fed Greenbook and Blue Chip forecast accuracy (Section IV.B, Table 8 panel structure). The [replication package](https://doi.org/10.3886/E181661V1) at ICPSR contains the data and code.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(3), March 2023. AEA copyright; freely accessible on AEAweb.org past the 3-year embargo (elapsed March 2026). No Creative Commons licence; extract-only. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**.

> Bauer, Michael D., and Eric T. Swanson. "An Alternative Explanation for the 'Fed Information Effect'." *American Economic Review* 113, no. 3 (March 2023): 664-700. DOI: [10.1257/aer.20201220](https://doi.org/10.1257/aer.20201220). Copyright 2023 American Economic Association.
