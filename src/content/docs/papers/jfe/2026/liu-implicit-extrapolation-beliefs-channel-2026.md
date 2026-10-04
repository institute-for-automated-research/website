---
title: "Implicit Extrapolation and the Beliefs Channel: Liu & Palmer (2026)"
description: >-
  Distilled: Households extrapolate past home-price returns into investment
  allocations beyond what their stated expectations reveal, roughly tripling
  the estimated effect of past returns on investment relative to a beliefs-only
  channel. J. Fin. Econ. 2026, paywalled. Twelve core results with source
  locators, datasets used, the Merton portfolio framework, and the main
  regression specifications.
sidebar:
  label: Liu-Palmer 2026
  order: 1
tags: [paper-summary, household-finance, beliefs, extrapolation, housing,
       expectations, behavioral-finance, survey-data, panel-regression,
       peer-reviewed, unreplicated, data:sce, data:corelogic]
paper:
  authors: Haoyang Liu, Christopher Palmer
  authorList:
    - { family: Liu, given: Haoyang, affiliation: Federal Reserve Bank of Dallas }
    - { family: Palmer, given: Christopher, orcid: "0000-0002-6182-9037", affiliation: MIT Sloan School of Management }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104172
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104172
  jel:
    codes: [D84, G11, R21, D91]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Economic theories and models", "Decision-Making and Behavioral Economics", "Complex Systems and Time Series Analysis"]
  dataAccess: licensed-commercial
  outcome:
    - housing fund share (share of $1000 allocated to local home-price-tracking fund)
    - probability of buying a non-primary residence
    - probability of buying a primary residence conditional on moving
  outcomeClass: [household-finance, expectations]
  license: >-
    All rights reserved (Elsevier B.V. 2025). Artifact footer states:
    "0304-405X/© 2025 Elsevier B.V. All rights are reserved, including
    those for text and data mining, AI training, and similar technologies."
    Crossref license block contains only TDM and STM-ASF entries; no CC
    licence present.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect; 2026-06-24)"
  redistribution: extract-only
  resultsCount: 12
  citedByCount: 0

  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, randomized-survey-experiment]
    identification: descriptive

  contributionType: [new-fact, measurement]

  mechanisms: [behavioral-bias, learning, ambiguity-aversion, conservatism-illusion]

  scope:
    region: US
    assetClass: residential real estate
    period: 2015-01..2021-12
    frequency: annual
    dataType: [survey, administrative]
    granularity: [individual]
    n: "N = 6,993 pooled observations for forecast regressions (2015-2021); N = 2,963 for the housing-fund experiment; N = 925 for the confidence sample"

  findings:
    - { ref: R1, outcome: stated forecasted HPA over the next 12 months, metric: coefficient, value: "0.24*** (SE 0.014) per pp perceived past HPA; N = 6,993", direction: positive, vsBenchmark: "Bivariate 0.29*** falls to 0.24*** after individual controls and forecasted fundamentals (Table 2, col. 4)" }
    - { ref: R2, outcome: housing fund share, metric: coefficient, value: "0.71*** (0.11) per pp perceived past HPA, conditional on forecasted returns (0.88***, SE 0.15); N = 2,963", direction: positive, vsBenchmark: "Past-returns coefficient falls from 1.01*** alone to 0.71*** with forecasted returns (Table 3, cols. 2-3)" }
    - { ref: R3, outcome: housing fund share, metric: coefficient, value: "5.35*** (1.29) for the confident-in-past-returns indicator (score 4 or 5 on the 1-5 scale), conditional on forecasted and perceived past returns; N = 2,963 (Table 3, col. 6)", direction: positive }
    - { ref: R4, outcome: housing fund share, metric: pp-effect, value: "4.6 pp per 5 pp HPA increase allowing for direct effect (vs. 1.56 pp via beliefs channel only)", direction: positive, vsBenchmark: "Beliefs-only: 5 pp x 0.24 x 1.30 = 1.56 pp; combined channels: 5 pp x (0.24 x 0.88 + 0.71) = 4.6 pp (text p. 8)" }
    - { ref: R5, outcome: housing fund share, metric: coefficient, value: "-0.56*** (0.17) on (Confidence Forecast - Confidence Past) x Perceived Past Returns interaction", direction: negative, vsBenchmark: "Greater relative confidence in forecasts reduces reliance on past returns at the investment stage (Table 5, col. 1)" }
    - { ref: R6, outcome: housing fund share, metric: coefficient, value: "Forward-looking: forecasted returns 1.41*** (0.27), past returns 0.19 (0.22); backward-looking: past returns 1.16*** (0.25), forecasted returns 0.42 (0.32)", direction: mixed, vsBenchmark: "Each group significantly loads on its self-reported preferred signal, not the other (Table 6, cols. 1-2)" }
    - { ref: R7, outcome: housing fund share, metric: coefficient, value: "Forecasted rent growth: 0.14*** (0.02) on HPA forecasts; investment 0.07 (0.11) in col. 2 and -0.09 (0.11) in col. 3. Forecasted inflation: 0.12*** (0.03) on HPA forecasts; investment -0.05 (0.15) in col. 2 and -0.17 (0.15) in col. 3", direction: mixed, vsBenchmark: "Rent and inflation forecasts predict stated HPA but have insignificant investment coefficients; perceived past returns remain significant in both domains (Table 7)" }
    - { ref: R8, outcome: housing fund share, metric: level, value: "Mean = 57.26 pp (SD 34.26), N = 3,015; mean absolute perception gap = 4.91 pp, N = 7,007 (Table 1, p. 6)", direction: positive }
    - { ref: R9, outcome: housing fund share, metric: coefficient, value: "Risk tolerance: 3.70*** (0.28) in bivariate model; perceived past returns: 0.48*** (0.11) with forecasted returns and controls, and 0.46*** (0.11) with risk-tolerance-score-by-year fixed effects; N = 2,963 (Table 4, p. 8)", direction: positive, vsBenchmark: "Perceived past returns remain significant after flexible controls for risk tolerance and the forecasted return distribution (Table 4, cols. 3-5)" }
    - { ref: R10, outcome: housing fund share, metric: coefficient, value: "Reflection-question treatment interactions: forecasted returns x Treated = 0.89* (0.46), perceived past returns x Treated = -0.55 (0.34); N = 925 (Table 5, col. 2, p. 9)", direction: mixed, vsBenchmark: "After reflection, forecast reliance rises and past-return reliance falls; the latter interaction is not statistically significant in col. 2" }
    - { ref: R11, outcome: housing fund share, metric: coefficient, value: "Past returns: renters 0.17 (0.21), owners 0.63*** (0.14); non-college 0.59*** (0.15), college 0.45*** (0.17); income <= $75K 0.58*** (0.14), income > $75K 0.40* (0.21) (Table 8, p. 11)", direction: mixed, vsBenchmark: "Past-return effect is significant among owners and across education/income groups, but not renters" }
    - { ref: R12, outcome: housing fund share, metric: coefficient, value: "Past returns: age < 50 = 0.31* (0.16), age >= 50 = 0.65*** (0.16); female = 0.52*** (0.15), male = 0.45*** (0.17); low numeracy = 0.54*** (0.18), high numeracy = 0.52*** (0.14); no website check = 0.67*** (0.20), checked = 0.28 (0.18) (Table 9, p. 11)", direction: mixed, vsBenchmark: "The point estimates are larger for respondents aged 50+ and those who did not check housing websites; numeracy estimates are similar, and the paper does not report tests of subgroup differences" }

  resultType: confirms


  relatesTo:
    - { cite: "Barberis and Jin (2023)", relation: builds-on, note: "their model-free reinforcement-learning framework offers a microfoundation for experience effects; the paper's housing evidence is consistent with its predictions" }
    - { cite: "Armona et al. (2018)", doi: '10.1093/restud/rdy038', relation: builds-on, note: "SCE hypothetical $1,000 allocation between a local housing fund and a 2% savings account abstracts from mortgage-credit and liquidity constraints" }
    - { cite: "Giglio et al. (2021a)", doi: '10.1073/pnas.2010316118', relation: extends, note: "extends their finding that investors react more to return forecasts when more confident by showing confidence asymmetry across past vs. future returns" }
    - { cite: "Andries et al. (2022)", relation: extends, note: "extends their information-to-beliefs vs. information-to-decisions distinction; shows beliefs are not a sufficient statistic even with the full stated distribution" }
    - { cite: "Glaeser and Nathanson (2017)", doi: '10.1016/j.jfineco.2017.06.012', relation: cites, note: "related extrapolative belief formation in housing markets" }

  openQuestions:
    - "Future research could experiment with inducing confidence concerns over belief factors by incentivizing the forecast elicitation stage directly (p. 16)."
    - "Theoretical work is needed on how confidence drives a wedge between stated forecasts and actions in general reinforcement learning models combining model-free and model-based learning (p. 16)."
    - "Cross-sectional heterogeneity patterns, especially among older, low-numeracy, lower-income, non-college, and less housing-market-attentive investors, may guide future theoretical work on agent-type differences in implicit extrapolation (pp. 14-15)."

  replicationCode:
    url: https://doi.org/10.1016/j.jfineco.2025.104172
    status: available

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (17 pp., JFE vol 175, 2026); seven results extracted from source PDF. Not human-verified. Not reproduced. Replication data and code available via Mendeley Data (linked from article page)."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; R1-R4, R6-R7 all correct; R5 locator corrected from col 3 to col 1 (col 3 has -0.46***, col 1 has -0.56*** as reported); JEL code D91 added (was missing from distilled list)."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the assigned PDF and appended five Core-results rows (R8-R12), aligned findings with all twelve quantitative rows, added mechanisms and staged vocabulary, and expanded the formal empirical specifications. These additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; corrected R3 to Table 3 col. 6 and its indicator scale, corrected R8/R11/R12 table pages, restored JEL D91, and fixed scope, prose, and resultType errors; PDF prose conflicts with its Table 8 renter/owner estimates." }

  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104172"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[] contains only TDM (elsevier.com/tdm/userlicense/1.0/, elsevier.com/legal/tdmrep-license) and STM-ASF entries (doi.org/10.15223/policy-*); no CC licence; all content-version tdm or stm-asf; paper footer confirms all rights reserved Elsevier B.V. 2025"

  rightsSignalConflict: false
---

**What this is.** The paper's core results on implicit extrapolation in real-estate investment decisions, the theoretical framework (Merton portfolio choice), and the regression specifications that estimate the gap between stated beliefs and decision-relevant beliefs: enough to know what it found and how, without reading all 17 pages. To replicate or extend, read the original at [https://doi.org/10.1016/j.jfineco.2025.104172](https://doi.org/10.1016/j.jfineco.2025.104172).

## TL;DR

Liu and Palmer document that households extrapolate from perceived past home-price returns when making real-estate investment decisions even after conditioning on their stated expected future returns and stated risk aversion. They call this gap "implicit extrapolation." Using the Survey of Consumer Expectations (SCE) housing module (2015-2021), they find that a 5 percentage-point increase in perceived past HPA raises housing investment by roughly 4.6 pp when allowing for the direct channel, versus only 1.56 pp if past returns only matter through stated expected returns. The confidence mechanism is key: investors who are more confident about their perceived past returns than about their return forecasts rely more heavily on past returns at the investment stage. The findings are consistent with reinforcement learning (Barberis and Jin (2023)) and with ambiguity aversion, and weigh against a pure white-noise explanation based on stated-belief measurement error.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Perceived past HPA **strongly predicts stated one-year-ahead HPA forecasts** even conditional on individual controls and forecasted fundamentals | Table 2, col 4, p. 7 | coeff = 0.24\*\*\* (SE 0.014); N = 6,993; R² = 0.222 |
| R2 | Perceived past HPA **remains a significant, independent predictor of housing investment** conditional on stated forecasted returns | Table 3, col 3, p. 7 | Past returns coeff = 0.71\*\*\* (0.11); Forecasted returns coeff = 0.88\*\*\* (0.15); N = 2,963 |
| R3 | **Confidence in past returns** is an independent predictor of housing investment beyond past returns and forecasted returns | Table 3, col. 6, p. 7 | Confident in Past Returns indicator = 5.35\*\*\* (1.29) pp; above-median risk aversion = -9.38\*\*\* (1.29) |
| R4 | Allowing for implicit extrapolation **multiplies the estimated investment response to past HPA by roughly three** | Text, p. 8 (computed from Tables 2-3) | Via beliefs only: 1.56 pp per 5 pp HPA; combined channels: 4.6 pp per 5 pp HPA |
| R5 | Investors **shift weight from past returns to forecasted returns** as their relative confidence in forecasts rises | Table 5, col 1, p. 9 | (Conf Forecast - Conf Past) x Past Returns = -0.56\*\*\* (0.17); N = 925 |
| R6 | **Forward-looking investors rely on forecasts; backward-looking investors rely on past returns**, each ignoring the other signal | Table 6, cols 1-2, p. 10 | Forward-looking: forecasted returns 1.41\*\*\* (0.27), past returns 0.19 (insig); Backward-looking: past returns 1.16\*\*\* (0.25), forecasted returns 0.42 (insig) |
| R7 | **Rent and inflation forecasts predict stated HPA expectations but have no significant investment coefficients**; perceived past returns remain significant in both domains | Table 7, cols. 1-3, p. 10 | Forecasted rent growth 0.14\*\*\* (0.02) on HPA forecast; investment coefficients are 0.07 (0.11) in col. 2 and -0.09 (0.11) in col. 3. Inflation is 0.12\*\*\* (0.03) on HPA forecast; investment coefficients are -0.05 (0.15) and -0.17 (0.15), respectively |
| R8 | The investment allocation and subjective past-return measure vary substantially in the sample | Table 1, p. 6 | Mean housing-fund share = 57.26 pp (SD 34.26; N = 3,015); mean absolute perception gap = 4.91 pp (N = 7,007) |
| R9 | Past returns remain predictive after flexible controls for risk tolerance and forecast distributions | Table 4, p. 8 | Risk tolerance = 3.70\*\*\* (0.28) in bivariate model; perceived past returns = 0.48\*\*\* (0.11) with forecasted returns and controls, and 0.46\*\*\* (0.11) with risk-tolerance-score-by-year fixed effects; N = 2,963 |
| R10 | Asking investors to reflect before allocating shifts signal weights toward stated forecasts | Table 5, col. 2, p. 9 | Forecasted returns × Treated = 0.89\* (0.46); perceived past returns × Treated = -0.55 (0.34), not significant; N = 925 |
| R11 | Past-return reliance differs across economic subgroups, with a nonsignificant estimate for renters | Table 8, p. 11 | Past returns: renters 0.17 (0.21), owners 0.63\*\*\* (0.14); non-college 0.59\*\*\* (0.15), college 0.45\*\*\* (0.17); income ≤ $75K 0.58\*\*\* (0.14), income > $75K 0.40\* (0.21) |
| R12 | Past-return estimates vary across age, gender, numeracy, and housing-website-checking groups | Table 9, p. 11 | Past returns: age < 50 = 0.31\* (0.16), age ≥ 50 = 0.65\*\*\* (0.16); female = 0.52\*\*\* (0.15), male = 0.45\*\*\* (0.17); low numeracy = 0.54\*\*\* (0.18), high numeracy = 0.52\*\*\* (0.14); no website check = 0.67\*\*\* (0.20), checked = 0.28 (0.18) |

**Overall (paper's conclusion).** Consumers extrapolate from perceived past returns even beyond what their stated expectations reveal, a pattern the paper calls implicit extrapolation. The implied magnitude of the beliefs channel of investment demand is larger than previously estimated. The pattern is driven by differential confidence across signals: investors are systematically more confident about their recalled past returns than about their forecasted returns, leading them to rely on past returns as a conservative or more reliable guide at the investment stage. Andries et al. (2022) document the information-to-beliefs and information-to-decisions channels separately; this paper shows the former does not capture the latter even when the full stated distribution is recorded.

## Theory / model

The classical portfolio choice benchmark is the Merton (1969) model. For an investor with constant absolute risk aversion allocating between a risky asset with return $$r_{t+1}$$ and a risk-free rate $$r_f$$, the optimal risky-asset share is (Eq. 1, p. 2):

$$
\phi_t = \frac{E_t[r_{t+1}] - r_f}{\alpha \sigma_t^2} \tag{1}
$$

where $$E_t[r_{t+1}]$$ is the conditional expected return given information at time $$t$$, $$\sigma_t^2$$ is the conditional variance, and $$\alpha$$ is constant absolute risk aversion. Under this model, if stated beliefs are a sufficient statistic for decision-relevant beliefs, the prior period's realized return $$r_t$$ enters $$\phi_t$$ only through its effect on $$E_t[r_{t+1}]$$: there is no direct channel.

The paper's central empirical question is whether stated $$E_t[r_{t+1}]$$ and $$\sigma_t^2$$ are indeed sufficient statistics. If investors hold latent decision-relevant beliefs that differ from stated ones, then $$r_t$$ can affect $$\phi_t$$ even conditional on stated $$E_t[r_{t+1}]$$. The paper documents this as implicit extrapolation: extrapolation that goes beyond what is revealed by expectations surveys.

The paper uses the Merton framework as a benchmark and formalizes its confidence mechanism in Appendix C using a model adapted from the cognitive-imprecision literature. Barberis and Jin (2023) provide a related model-free reinforcement-learning microfoundation. Related evidence in housing comes from Glaeser and Nathanson (2017), who show that extrapolative belief formation can arise endogenously in housing markets. The intuition for the confidence mechanism is that investors engage in both model-based learning (forming explicit forecasts) and model-free learning (using past performance directly to guide decisions), with the relative weight depending on investors' confidence in each signal. Giglio et al. (2021a) show that investors react more to their return forecasts when they are more confident in those forecasts; the present paper extends this by showing that confidence asymmetry across past and future returns drives differential weighting at the investment stage.

Liu and Palmer also discuss ambiguity aversion and a conservatism illusion as alternative explanations for confidence-induced implicit extrapolation. Under ambiguity aversion, investors may underreact to positive rent and inflation news because those signals are intangible and their quality is uncertain. Under the conservatism-illusion explanation, investors rely on whichever of their past-return estimate and forecast is lower. The paper treats these as potential channels rather than separately identified mechanisms (Sections 4.1.2-4.1.3, pp. 15-16).

## Method

The paper is empirical, using the Survey of Consumer Expectations (SCE) housing module. No structural estimation is performed; estimation is cross-sectional OLS on survey data. The primary estimating equation (Eq. 2, p. 7) is:

$$
Y_{i,t} = \beta_0 + \beta_1 \hat{r}_{i,t} + \beta_2 \hat{E}_t[r_{i,t+1}] + X'_{i,t}\psi + \varepsilon_{i,t} \tag{2}
$$

where $$\hat{r}_{i,t}$$ is respondent $$i$$'s perceived past home-price appreciation (HPA) in their zip code over the prior 12 months, $$\hat{E}_t[r_{i,t+1}]$$ is their stated expected HPA over the next 12 months, $$Y_{i,t}$$ is the investment outcome (primarily housing-fund share), and $$X_{i,t}$$ is a vector of demographic controls. The null hypothesis of stated beliefs being a sufficient statistic is $$\beta_1 = 0$$.

The paper builds on `panel-regression` and `randomized-survey-experiment` primitives. Standard errors are heteroskedasticity-robust (Huber-White) throughout. The investment experiment was originally designed by Armona et al. (2018) for the 2015 SCE wave; the current paper reuses it and extends the design to 2020 and 2021 waves. Each wave is fielded to the rotating panel of approximately 1,200 respondents (with a larger cross-section when stacking waves).

All main specifications are cross-sectional OLS without respondent fixed effects. Table 2 uses survey years 2015-2021 and N = 6,993; Tables 3-4 use the housing-fund experiment sample, N = 2,963; the confidence specifications in Table 5 use N = 925 from 2020-2021. Robust standard errors are reported in parentheses. Table 4 columns 4-5 additionally include risk-tolerance-score-by-year fixed effects; Table 5 columns 3-4 add individual controls, and column 4 controls flexibly for the forecasted return distribution.

Robustness approaches include:
- IV for survey noise in stated beliefs (Appendix F): perceived past returns instrumented with actual CoreLogic zip-code HPA to strip measurement error
- Non-parametric controls for the full distribution of expected future returns (bin fixed effects)
- Interactions with risk tolerance, wealth, and housing equity to rule out risk-aversion confounds
- ACS-SCE reweighted sample for population representativeness (Appendix Table A6)

## Empirical specifications

The paper's main regression is Eq. 2 (p. 7), repeated for the different outcomes and subsamples below:

$$
Y_{i,t} = \beta_0 + \beta_1 \hat{r}_{i,t} + \beta_2 \hat{E}_t[r_{i,t+1}] + X'_{i,t}\psi + \varepsilon_{i,t}. \tag{2}
$$

Here, $$\hat{r}_{i,t}$$ is perceived past zip-code HPA, $$\hat{E}_t[r_{i,t+1}]$$ is stated expected HPA, and $$X_{i,t}$$ contains the individual controls listed in Table 2. The paper estimates by OLS with heteroskedasticity-robust standard errors; there are no respondent fixed effects. The cross-sectional sample varies by specification and is stated with each table below.

**Belief formation (Table 2, p. 7):** The dependent variable is the one-year HPA forecast. Columns 1-4 progressively add individual controls and forecasted fundamentals. The Table 2 version of Eq. 2 is:

$$
\widehat{E}_t[r_{i,t+1}] = \gamma_0 + \gamma_1 \hat{r}_{i,t} + Z'_{i,t}\gamma_2 + u_{i,t},
$$

where the fundamentals in the full specification include forecasted rent growth, inflation, mortgage-rate changes, future economic conditions, and credit availability. N = 6,993 in each column, years 2015-2021, robust standard errors, no fixed effects.

**Main investment result (Table 3, p. 7):** Runs Eq. 2 with housing-fund share as $$Y_{i,t}$$. Key columns:
- Col 1: Forecasted returns alone (coefficient = 1.30***)
- Col 2: Perceived past returns alone (coefficient = 1.01***)
- Col 3: Both return variables jointly (forecasted returns = 0.88***, past returns = 0.71***); N = 2,963; R² = 0.047

Columns 4-6 include confident-in-past-returns and above-median-risk-aversion indicators, and add full individual controls. In column 6, perceived past returns is 0.54*** (SE 0.11), forecasted returns is 0.93*** (0.14), and confidence in past returns is 5.35*** (1.29).

The Table 3 specification is cross-sectional OLS, N = 2,963 in all columns, robust standard errors, and no fixed effects. Columns 4-6 add demographics and other individual controls.

**Risk aversion and return distributions (Table 4, p. 8; Appendix Tables A2-A4, discussed pp. 9-10):** The Table 4 specification augments Eq. 2 with risk-tolerance controls and cubic controls for the respondent's probabilities over return ranges. Risk tolerance has a 3.70*** (0.28) bivariate coefficient; the past-return coefficient remains 0.48*** (0.11) with forecasted returns and controls, and 0.46*** (0.11) with risk-tolerance-score-by-year fixed effects. N = 2,963; robust standard errors. Appendix Table A2 estimates a log-log Merton demand specification with forecast-implied variance; Appendix A4 flexibly controls for return-distribution probabilities and return bins. The article refers to these appendix tables but their numeric tables are in supplementary material, not printed in this PDF.

**Confidence mechanism (Table 5, p. 9):** Adds the confidence-gap variable (Confidence in Forecast Returns minus Confidence in Past Returns, scaled 1-5) and its interactions with both return signals. Key interaction on past returns is -0.56*** (0.17), showing higher relative confidence in forecasts reduces reliance on past returns. The 2020-2021 subsample of 925 respondents received the confidence elicitation module.

The estimated extension to Eq. 2 includes the confidence gap $$C_{i,t}$$, reflection-treatment indicator $$T_{i,t}$$, and risk-tolerance measure:

$$
Y_{i,t} = \beta_0 + \beta_1\hat{r}_{i,t} + \beta_2\hat{E}_t[r_{i,t+1}] + \beta_3(\hat{r}_{i,t} C_{i,t}) + \beta_4(\hat{E}_t[r_{i,t+1}] C_{i,t}) + \beta_5 C_{i,t} + \beta_6(\hat{r}_{i,t} T_{i,t}) + \beta_7(\hat{E}_t[r_{i,t+1}] T_{i,t}) + \beta_8 T_{i,t} + \beta_9 RiskTolerance_{i,t} + X'_{i,t}\psi + \varepsilon_{i,t}.
$$

Table 5 uses N = 925; columns 1-2 have no individual controls, columns 3-4 add them, and column 4 adds return-distribution controls. Robust standard errors are used, with no fixed effects. Column 2's reflection-treatment interactions are 0.89* (0.46) for forecasted returns and -0.55 (0.34) for perceived past returns.

**Forward vs. backward-looking investors (Table 6, p. 10):** Splits the 2020-2021 sample by self-reported reliance on past vs. expected returns. Forward-looking respondents (N = 772) show significance only on forecasted returns (1.41***); backward-looking respondents (N = 613) show significance only on past returns (1.16***). Column 3 of Table 6 pools both and includes a Forward-Looking indicator and its interactions.

Table 6 estimates Eq. 2 separately for each reported decision-factor group and in the pooled N = 1,385 sample with the forward-looking indicator and its interactions. All columns include individual controls, use robust standard errors, and have no fixed effects.

**Factor reweighting (Table 7, p. 10):** Column 1 estimates the belief-formation equation for HPA forecasts (with forecasted rent growth 0.14*** and inflation 0.12***); columns 2-3 run the investment equation, finding both rent and inflation are insignificant predictors of investment allocation. This weighs against a pure white-noise measurement-error explanation: only certain belief factors (rent and inflation) lose statistical relevance at the investment stage while past returns retain it.

Table 7 replaces the two focal belief variables with past HPA, rent-growth forecasts, and inflation forecasts in the belief-formation and investment equations. The sample is N = 2,963; columns include individual controls, column 3 adds cubic return-distribution controls, standard errors are robust, and there are no fixed effects.

**Heterogeneity (Tables 8-9, pp. 10-11):** The authors re-estimate Eq. 2 by renter/owner, education, income, age, gender, numeracy, and housing-website-checking subsamples. Table 8 has N between 734 and 2,229 by subgroup; Table 9 has N between 744 and 2,184. All columns include individual controls and return-distribution probability controls, use robust standard errors, and have no fixed effects. The paper emphasizes that the effect is concentrated among older, lower-numeracy, lower-income, non-college, and less housing-market-attentive respondents; the renter/owner split is an exception to that pattern.

**Other outcomes and identification checks (Appendix Tables A3-A14 and F, discussed pp. 9-16):** The paper reports checks for home-wealth interactions, ACS-SCE reweighting, incentivized allocations, forecasted fundamentals, actual versus perceived past returns, alternative housing outcomes, ambiguity-aversion predictions, and an IV strategy using CoreLogic HPA to address survey noise. The source PDF identifies these appendix specifications and their purpose but does not include the supplementary numeric tables, so their coefficients and standard errors cannot be transcribed here. The primary specification remains Eq. 2, OLS with robust standard errors; the IV robustness is a separate instrument design discussed in Appendix F.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Survey of Consumer Expectations (SCE), FRBNY, housing module | Primary data: investment allocations, perceived past HPA, stated forecasted HPA, confidence, demographics; 2015, 2020, 2021 waves | No page yet |
| CoreLogic repeat-sales price index | Zip-code-level actual HPA for constructing Perception Gap; used as IV in robustness | No page yet |

Sample: SCE housing-survey observations pooled across 2015-2021 (N = 6,993 for forecast regressions); main investment-experiment sample is N = 2,963-3,015; confidence subsample is N = 925 (2020-2021).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jfineco.2025.104172) if you are studying: how stated beliefs and decision-relevant beliefs diverge (Appendix C formalizes the confidence mechanism); heterogeneity in implicit extrapolation across demographic groups (Tables 8-9); robustness to IV, bin-fixed-effects, and wealth-channel alternatives (Appendix Tables A2-A14); the open-ended survey evidence on why investors rely on past returns (Section 4.1, Figure 3); or other real-estate investment outcomes beyond the fund-share experiment (Table A10). The locators above point to the exact tables.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026), article 104172. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The paper is paywalled; extract-only applies. For text-mining inquiries see the Elsevier TDM licence at https://www.elsevier.com/tdm/userlicense/1.0/.

> Liu, Haoyang, and Christopher Palmer. "Implicit extrapolation and the beliefs channel of investment demand." *Journal of Financial Economics* 175 (2026): 104172. DOI: 10.1016/j.jfineco.2025.104172. © 2025 Elsevier B.V. All rights reserved.
