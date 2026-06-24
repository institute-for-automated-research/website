---
title: "Implicit Extrapolation and the Beliefs Channel: Liu & Palmer (2026)"
description: >-
  Distilled: Households extrapolate past home-price returns into investment
  allocations beyond what their stated expectations reveal, roughly tripling
  the estimated effect of past returns on investment relative to a beliefs-only
  channel. J. Fin. Econ. 2026, paywalled. Seven core results with source
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
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
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
  resultsCount: 7
  citedByCount: 0

  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, randomized-survey-experiment]
    identification: descriptive

  contributionType: [new-fact, measurement]

  mechanisms: [behavioral-bias, learning]

  scope:
    region: US
    assetClass: residential real estate
    period: 2015-01..2021-12
    frequency: annual
    dataType: [survey, administrative]
    granularity: [individual]
    n: "~7,000 respondents per wave; rotating panel; SCE housing module 2015-2021"

  findings:
    - ref: R1
      outcome: stated forecasted HPA over the next 12 months
      metric: coefficient
      value: "0.24*** (SE 0.014) per pp perceived past HPA; N = 6,993"
      direction: positive
      vsBenchmark: bivariate 0.29*** collapses to 0.24*** after individual controls and forecasted fundamentals (Table 2 col 4)
    - ref: R2
      outcome: housing fund share
      metric: coefficient
      value: "0.71*** (0.11) per pp perceived past HPA, conditional on forecasted returns (0.88***, SE 0.15); N = 2,963"
      direction: positive
      vsBenchmark: past-returns coefficient falls from 1.01*** when alone to 0.71*** once forecasted returns are included (Table 3 cols 2 vs 3)
    - ref: R3
      outcome: housing fund share
      metric: coefficient
      value: "5.48*** (1.29) per unit of confidence in past returns scale (1-5)"
      direction: positive
    - ref: R4
      outcome: housing fund share
      metric: pp-effect
      value: "4.6 pp per 5 pp HPA increase allowing for direct effect (vs. 1.56 pp via beliefs channel only)"
      direction: positive
      vsBenchmark: "beliefs-only channel: 5 pp x 0.24 x 1.30 = 1.56 pp; with implicit extrapolation: 5 pp x (0.24 x 0.88 + 0.71) = 4.6 pp (p. 8)"
    - ref: R5
      outcome: housing fund share
      metric: coefficient
      value: "-0.56*** (0.17) on (Confidence Forecast - Confidence Past) x Perceived Past Returns interaction"
      direction: negative
      vsBenchmark: investors more confident in forecasts relative to past returns downweight past returns at investment stage (Table 5 col 1)
    - ref: R6
      outcome: housing fund share
      metric: coefficient
      value: "Forward-looking: forecasted returns 1.41*** (0.27), past returns 0.19 (0.22) insig; Backward-looking: past returns 1.16*** (0.25), forecasted returns 0.42 (0.32) insig"
      direction: mixed
      vsBenchmark: investors who self-report relying on past returns show no response to forecasted returns and vice versa (Table 6 cols 1-2)
    - ref: R7
      outcome: housing fund share
      metric: coefficient
      value: "Forecasted rent growth: 0.14*** (0.02) predicts HPA forecasts but -0.09 (0.11) insig on investment; Forecasted inflation: 0.12*** (0.03) predicts HPA but -0.17 (0.15) insig on investment"
      direction: none
      vsBenchmark: "rent and inflation forecasts are informative at the forecasting stage but omitted at the investment stage; only past returns load on both (Table 7)"

  resultType: new-finding

  relatesTo:
    - { cite: "Barberis and Jin (2023)", relation: builds-on, note: "model-free reinforcement learning provides the microfoundation for confidence-induced implicit extrapolation; their five-feature framework is tested empirically" }
    - { cite: "Armona et al. (2018)", doi: '10.1093/restud/rdy038', relation: builds-on, note: "SCE housing investment experiment design; randomized information treatment used here to isolate investment behavior from financial constraints" }
    - { cite: "Giglio et al. (2021a)", doi: '10.1073/pnas.2010316118', relation: extends, note: "extends their finding that investors react more to return forecasts when more confident by showing confidence asymmetry across past vs. future returns" }
    - { cite: "Andries et al. (2022)", relation: extends, note: "extends their information-to-beliefs vs. information-to-decisions distinction; shows beliefs are not a sufficient statistic even with the full stated distribution" }
    - { cite: "Glaeser and Nathanson (2017)", doi: '10.1016/j.jfineco.2017.06.012', relation: cites, note: "related extrapolative belief formation in housing markets" }

  openQuestions:
    - "Future research could experiment with inducing confidence concerns over belief factors by incentivizing the forecast elicitation stage directly (p. 16)."
    - "Theoretical work is needed on how confidence drives a wedge between stated forecasts and actions in general reinforcement learning models combining model-free and model-based learning (p. 16)."
    - "Cross-sectional heterogeneity patterns (older, lower-numeracy, non-college, renter households drive effects) are a potential guide for future theoretical development of models of agent-type differences in implicit extrapolation (p. 14)."

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

  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104172"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[] contains only TDM (elsevier.com/tdm/userlicense/1.0/, elsevier.com/legal/tdmrep-license) and STM-ASF entries (doi.org/10.15223/policy-*); no CC licence; all content-version tdm or stm-asf; paper footer confirms all rights reserved Elsevier B.V. 2025"

  rightsSignalConflict: false
---

**What this is.** The paper's core results on implicit extrapolation in real-estate investment decisions, the theoretical framework (Merton portfolio choice), and the regression specifications that identify the gap between stated beliefs and decision-relevant beliefs: enough to know what it found and how, without reading all 17 pages. To replicate or extend, read the original at [https://doi.org/10.1016/j.jfineco.2025.104172](https://doi.org/10.1016/j.jfineco.2025.104172).

## TL;DR

Liu and Palmer document that households extrapolate from perceived past home-price returns when making real-estate investment decisions even after conditioning on their stated expected future returns and stated risk aversion. They call this gap "implicit extrapolation." Using the Survey of Consumer Expectations (SCE) housing module (2015-2021), they find that a 5 percentage-point increase in perceived past HPA raises housing investment by roughly 4.6 pp when allowing for the direct channel, versus only 1.56 pp if past returns only matter through stated expected returns. The confidence mechanism is key: investors who are more confident about their perceived past returns than about their return forecasts rely more heavily on past returns at the investment stage. The findings are consistent with reinforcement learning (Barberis and Jin (2023)) and with ambiguity aversion, and are inconsistent with measurement error in stated beliefs.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Perceived past HPA **strongly predicts stated one-year-ahead HPA forecasts** even conditional on individual controls and forecasted fundamentals | Table 2, col 4, p. 7 | coeff = 0.24\*\*\* (SE 0.014); N = 6,993; R² = 0.222 |
| R2 | Perceived past HPA **remains a significant, independent predictor of housing investment** conditional on stated forecasted returns | Table 3, col 3, p. 7 | Past returns coeff = 0.71\*\*\* (0.11); Forecasted returns coeff = 0.88\*\*\* (0.15); N = 2,963 |
| R3 | **Confidence in past returns** is an independent predictor of housing investment beyond past returns and forecasted returns | Table 3, col 3, p. 7 | Confidence in Past Returns = 5.48\*\*\* (1.29) pp per unit; above-median risk aversion = -9.63\*\*\* (1.29) |
| R4 | Allowing for implicit extrapolation **multiplies the estimated investment response to past HPA by roughly three** | Text, p. 8 (computed from Tables 2-3) | Via beliefs only: 1.56 pp per 5 pp HPA; combined channels: 4.6 pp per 5 pp HPA |
| R5 | Investors **shift weight from past returns to forecasted returns** as their relative confidence in forecasts rises | Table 5, col 1, p. 9 | (Conf Forecast - Conf Past) x Past Returns = -0.56\*\*\* (0.17); N = 925 |
| R6 | **Forward-looking investors rely on forecasts; backward-looking investors rely on past returns**, each ignoring the other signal | Table 6, cols 1-2, p. 10 | Forward-looking: forecasted returns 1.41\*\*\* (0.27), past returns 0.19 (insig); Backward-looking: past returns 1.16\*\*\* (0.25), forecasted returns 0.42 (insig) |
| R7 | **Rent and inflation forecasts predict stated HPA expectations but are downweighted to zero at the investment stage**; only past returns matter for both | Table 7, cols 1-3, p. 10 | Forecasted rent growth 0.14\*\*\* (0.02) on HPA forecast but -0.09 (0.11) on investment; inflation 0.12\*\*\* (0.03) on HPA forecast but -0.17 (0.15) on investment |

**Overall (paper's conclusion).** Consumers extrapolate from perceived past returns even beyond what their stated expectations reveal, a pattern the paper calls implicit extrapolation. The implied magnitude of the beliefs channel of investment demand is larger than previously estimated. The pattern is driven by differential confidence across signals: investors are systematically more confident about their recalled past returns than about their forecasted returns, leading them to rely on past returns as a conservative or more reliable guide at the investment stage. Andries et al. (2022) document the information-to-beliefs and information-to-decisions channels separately; this paper shows the former does not capture the latter even when the full stated distribution is recorded.

## Theory / model

The classical portfolio choice benchmark is the Merton (1969) model. For an investor with constant absolute risk aversion allocating between a risky asset with return $$r_{t+1}$$ and a risk-free rate $$r_f$$, the optimal risky-asset share is (Eq. 1, p. 2):

$$
\phi_i = \frac{E_i[r_{t+1}] - r_f}{a \sigma_i^2} \tag{1}
$$

where $$E_i[r_{t+1}]$$ is the investor's conditional expectation of the risky asset's return, $$\sigma_i^2$$ is the conditional variance, and $$a$$ is the coefficient of constant absolute risk aversion. Under this model, if stated beliefs are a sufficient statistic for decision-relevant beliefs, the prior period's realized return $$r_t$$ enters $$\phi_i$$ only through its effect on $$E_i[r_{t+1}]$$: there is no direct channel.

The paper's central empirical question is whether stated $$E_i[r_{t+1}]$$ and $$\sigma_i^2$$ are indeed sufficient statistics. If investors hold latent decision-relevant beliefs that differ from stated ones, then $$r_t$$ can affect $$\phi_i$$ even conditional on stated $$E_i[r_{t+1}]$$. The paper documents this as implicit extrapolation: extrapolation that goes beyond what is revealed by expectations surveys.

The paper has no formal model of its own; the formal microfoundation is adapted from Barberis and Jin (2023), which proposes model-free reinforcement learning as the channel. Related evidence in housing comes from Glaeser and Nathanson (2017), who show that extrapolative belief formation can arise endogenously in housing markets. The intuition for the confidence mechanism is that investors engage in both model-based learning (forming explicit forecasts) and model-free learning (using past performance directly to guide decisions), with the relative weight depending on investors' confidence in each signal. Giglio et al. (2021a) show that investors react more to their return forecasts when they are more confident in those forecasts; the present paper extends this by showing that confidence asymmetry across past and future returns drives differential weighting at the investment stage.

## Method

The paper is empirical, using the Survey of Consumer Expectations (SCE) housing module. No structural estimation is performed; estimation is cross-sectional OLS on survey data. The primary estimating equation (Eq. 2, p. 7) is:

$$
Y_{i,t} = \beta_0 + \beta_1 \hat{r}_{i,t} + \beta_2 \hat{E}_i[r_{i,t+1}] + X'_{i,t}\psi + \varepsilon_{i,t} \tag{2}
$$

where $$\hat{r}_{i,t}$$ is respondent $$i$$'s perceived past home-price appreciation (HPA) in their zip code over the prior 12 months, $$\hat{E}_i[r_{i,t+1}]$$ is their stated expected HPA over the next 12 months, $$Y_{i,t}$$ is the investment outcome (primarily housing fund share), and $$X_{i,t}$$ is a vector of demographic controls. The null hypothesis of rational beliefs being a sufficient statistic is $$\beta_1 = 0$$.

The paper builds on `panel-regression` and `randomized-survey-experiment` primitives. Standard errors are heteroskedasticity-robust (Huber-White) throughout. The investment experiment was originally designed by Armona et al. (2018) for the 2015 SCE wave; the current paper reuses it and extends the design to 2020 and 2021 waves. Each wave is fielded to the rotating panel of approximately 1,200 respondents (with a larger cross-section when stacking waves).

Robustness approaches include:
- IV for survey noise in stated beliefs (Appendix F): perceived past returns instrumented with actual CoreLogic zip-code HPA to strip measurement error
- Non-parametric controls for the full distribution of expected future returns (bin fixed effects)
- Interactions with risk tolerance, wealth, and housing equity to rule out risk-aversion confounds
- ACS-SCE reweighted sample for population representativeness (Appendix Table A6)

## Empirical specifications

**Belief formation (Table 2, p. 7):** Regresses stated one-year-ahead HPA forecast on perceived past HPA, progressively adding individual controls and forecasted fundamentals (rent growth, inflation). The estimating equation is the same Eq. 2 above with the HPA forecast as the outcome. This identifies explicit extrapolation: the degree to which stated forecasts reflect past returns.

**Main investment result (Table 3, p. 7):** Runs Eq. 2 with housing fund share as the outcome. Key columns:
- Col 1: Forecasted returns alone (coefficient = 1.30***)
- Col 2: Perceived past returns alone (coefficient = 1.01***)
- Col 3: Both jointly (forecasted returns = 0.88***, past returns = 0.71***), plus confidence dummies; N = 2,963; R² = 0.047

Columns 4-6 add full individual controls. The coefficient on perceived past returns in column 6 is 0.54*** (SE 0.11), and on forecasted returns is 0.93*** (0.14).

**Role of risk aversion (Table 4, p. 8):** The risk-tolerance score (1-10) enters positively and significantly (3.70*** in bivariate), confirming risk aversion matters, but past returns remain significant after nonparametric controls for the risk-tolerance distribution and the full distribution of expected returns.

**Confidence mechanism (Table 5, p. 9):** Adds the confidence-gap variable (Confidence in Forecast Returns minus Confidence in Past Returns, scaled 1-5) and its interactions with both return signals. Key interaction on past returns is -0.56*** (0.17), showing higher relative confidence in forecasts reduces reliance on past returns. The 2020-2021 subsample of 925 respondents received the confidence elicitation module.

**Forward vs. backward-looking investors (Table 6, p. 10):** Splits the 2020-2021 sample by self-reported reliance on past vs. expected returns. Forward-looking respondents (N = 772) show significance only on forecasted returns (1.41***); backward-looking respondents (N = 613) show significance only on past returns (1.16***). Column 3 of Table 6 pools both and includes a Forward-Looking indicator and its interactions.

**Factor reweighting (Table 7, p. 10):** Column 1 estimates the belief-formation equation for HPA forecasts (with forecasted rent growth 0.14*** and inflation 0.12***); columns 2-3 run the investment equation, finding both rent and inflation are insignificant predictors of investment allocation. This rules out pure measurement-error explanations: noise would not cause only certain belief factors (rent, inflation) to lose relevance while past returns retain it.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Survey of Consumer Expectations (SCE), FRBNY, housing module | Primary data: investment allocations, perceived past HPA, stated forecasted HPA, confidence, demographics; 2015, 2020, 2021 waves | No page yet |
| CoreLogic repeat-sales price index | Zip-code-level actual HPA for constructing Perception Gap; used as IV in robustness | No page yet |

Sample: SCE respondents 2015-2021, N up to ~7,000 per wave; main investment-experiment sample is N = 2,963-3,015 (2015 wave); confidence subsample is N = 925 (2020-2021).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jfineco.2025.104172) if you are studying: how stated beliefs and decision-relevant beliefs diverge (Appendix C formalizes the confidence mechanism); heterogeneity in implicit extrapolation across demographic groups (Tables 8-9); robustness to IV, bin-fixed-effects, and wealth-channel alternatives (Appendix Tables A2-A14); the open-ended survey evidence on why investors rely on past returns (Section 4.1, Figure 3); or other real-estate investment outcomes beyond the fund-share experiment (Table A10). The locators above point to the exact tables.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026), article 104172. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The paper is paywalled; extract-only applies. For text-mining inquiries see the Elsevier TDM licence at https://www.elsevier.com/tdm/userlicense/1.0/.

> Liu, Haoyang, and Christopher Palmer. "Implicit extrapolation and the beliefs channel of investment demand." *Journal of Financial Economics* 175 (2026): 104172. DOI: 10.1016/j.jfineco.2025.104172. © 2025 Elsevier B.V. All rights reserved.
