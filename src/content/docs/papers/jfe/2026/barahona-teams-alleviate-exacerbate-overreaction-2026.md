---
title: "Teams and Belief Overreaction: Barahona, Cassella, Jansen & Pezone (2026)"
description: >-
  Distilled: Preregistered lab experiments and US mutual fund data show that two-person
  teams reduce individual belief overreaction to past returns by 30 to 55 percent, with
  self-selection into team leadership accounting for roughly 70 percent of the lab effect.
  Journal of Financial Economics 176 (2026), paywalled. Fifteen core results with source
  locators, datasets used, the measurement framework, and the estimating equations.
sidebar:
  label: Barahona et al. 2026
  order: 1
tags: [paper-summary, behavioral-finance, expectations, overreaction, extrapolation,
       fund-performance, institutional-investors, panel-regression, peer-reviewed, unreplicated,
       data:wrds, data:morningstar, data:edgar]
paper:
  authors: Ricardo Barahona, Stefano Cassella, Kristy A.E. Jansen, Vincenzo Pezone
  authorList:
    - { family: Barahona, given: Ricardo, orcid: "0009-0005-3907-1775", affiliation: "Banco de España" }
    - { family: Cassella, given: Stefano, orcid: "0000-0001-5516-7164", affiliation: "Tilburg University" }
    - { family: Jansen, given: "Kristy A.E.", orcid: "0000-0003-4371-3417", affiliation: "Marshall School of Business, USC; CEPR; De Nederlandsche Bank" }
    - { family: Pezone, given: Vincenzo, orcid: "0000-0002-1652-4891", affiliation: "LUISS Guido Carli" }
  year: 2026
  venue: Journal of Financial Economics 176 (2026), article 104219
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104219
  jel:
    codes: [G41, D91]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Financial Markets and Investment Strategies
    - Experimental Behavioral Economics Studies
    - Decision-Making and Behavioral Economics
  dataAccess: licensed-commercial
  outcome:
    - individual belief overreaction coefficient to recent stock returns
    - mutual fund trading sensitivity to past returns
    - self-selection intensity in team chat decisions
    - mutual fund characteristics by management type
    - mutual fund performance by extrapolation group
  outcomeClass: [expectations, fund-behavior, behavioral-aggregate-outcomes]
  license: >-
    All rights reserved (Elsevier B.V. copyright 2025); Crossref confirms TDM-only
    licenses (content-versions tdm and stm-asf); no CC licence found.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 15
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment, panel-regression, llm-text-classification]
    identification: randomized
  contributionType: [new-fact, new-data, measurement]
  mechanisms: [behavioral-bias, team-self-selection, internal-reflection, external-screening]
  introducesData: true
  scope:
    region: US
    assetClass: US equity mutual funds (field); hypothetical stock returns (lab)
    period: "Field: 1980-Q1..2018-Q4; Lab: 2024"
    frequency: mixed
    dataType: [experimental, market, accounting]
    granularity: [individual, firm, security]
    n: >-
      Lab: 1,512 participants (248 Individual, 456 Group, 405 Internal Reflection,
      403 Self-Selection); Field: 847 unique funds, 308 unique teams, quarterly 1980-2018
  findings:
    - { ref: R1, outcome: individual belief overreaction coefficient, metric: coefficient, value: "-0.092*** [0.035]; 30% reduction relative to Individual mean of 0.311", direction: negative, vsBenchmark: "Individual treatment mean overreaction beta = 0.311 (SD = 0.424)" }
    - { ref: R2, outcome: individual belief overreaction coefficient (channel decomposition), metric: coefficient, value: "Most conservative spec (Col 4): IR = -0.001 (n.s.); SS = -0.068* [0.039] (69% of total); ES = -0.031 (n.s.); total team effect = -0.098", direction: negative, vsBenchmark: "self-selection (SS) channel alone accounts for ~70% of the -0.098 total reduction" }
    - { ref: R3, outcome: recency parameter lambda2 in return-extrapolation model, metric: coefficient, value: "Group lambda2 = 0.953 vs Individual lambda2 = 0.886; recency effect (1-lambda2) is 0.047 for Group vs 0.114 for Individual", direction: negative, vsBenchmark: "Individual recency effect is ~2.4x larger than Group recency effect" }
    - { ref: R4, outcome: votes cast in next round by prior team decision maker, metric: coefficient, value: "MostVotes_{t-1} x |Error_{t-1}| interaction = -4.440*** [0.645] (Votes, Col 1); -0.137*** [0.018] (MostVotes dummy, Col 3)", direction: negative }
    - { ref: R5, outcome: prediction accuracy (MSE, MAE) and experimental bonus, metric: coefficient, value: "MSE: -157.722*** [30.394]; MAE: -2.015*** [0.408]; Bonus: +$0.059** [0.023] (Group vs Individual, full controls)", direction: positive, vsBenchmark: "bonus gain ~25% of Individual cross-sectional SD; MAE reduction ~9% of Individual mean" }
    - { ref: R6, outcome: mutual fund trading sensitivity to past returns (team transmission), metric: coefficient, value: "IV sum delta0 + delta1 = 0.45 (Col 7); null of full transmission rejected at IV p = 0.015 (Col 7) and IV p = 0.018 (Col 8); ~55% attenuation of individual overreaction in extrapolative teams", direction: negative, vsBenchmark: "full transmission from solo to team management would yield sum delta0 + delta1 = 1" }
    - { ref: R7, outcome: individual belief overreaction coefficient, metric: coefficient, value: "Group coefficient on absolute overreaction |beta| = -0.101*** [0.027] (Table 5, Col 1)", direction: negative, vsBenchmark: "Individual mean |beta| = 0.413; group coefficient is a 1% significant reduction" }
    - { ref: R8, outcome: self-selection intensity in team chat decisions, metric: correlation, value: "Uncontested rounds mean = 16.37 (SD = 3.16); LLM score mean = 6.56 (SD = 0.53); Spearman correlation = 0.293***", direction: positive, vsBenchmark: "Scores range from 0 (external screening) to 10 (self-selection)" }
    - { ref: R9, outcome: mutual fund trading sensitivity to past returns, metric: coefficient, value: "All teams: counterfactual solo mean = -0.011 (s.e. 0.022; t = -0.489); team mean = -0.034 (s.e. 0.028; t = -1.200); CF - TM = 0.023 (s.e. 0.026; t = 0.891)", direction: none }
    - { ref: R10, outcome: mutual fund trading sensitivity to past returns, metric: coefficient, value: "Contrarian teams: counterfactual solo mean = -0.224 (s.e. 0.029; t = -7.593); team mean = -0.178 (s.e. 0.043; t = -4.127); CF - TM = -0.046 (s.e. 0.034; t = -1.374)", direction: none, vsBenchmark: "Difference is not statistically significant; individual contrarian behavior is retained" }
    - { ref: R11, outcome: mutual fund trading sensitivity to past returns, metric: coefficient, value: "Extrapolative teams: counterfactual solo mean = 0.184 (s.e. 0.024; t = 7.815); team mean = 0.090 (s.e. 0.035; t = 2.589); CF - TM = 0.094 (s.e. 0.039; t = 2.414)", direction: negative, vsBenchmark: "Team sensitivity is about half the solo counterfactual, significant at 5%" }
    - { ref: R12, outcome: mutual fund trading sensitivity to past returns, metric: coefficient, value: "IV test of full transmission of contrarian behavior: H0 delta0 = 1 not rejected, p = 0.568 (Table 8, Col 5)", direction: none, vsBenchmark: "Contrarian behavior is fully transmitted in the IV specification" }
    - { ref: R13, outcome: mutual fund characteristics by management type, metric: level, value: "Solo vs team means: Fund TNA 1017.82 vs 1200.26 million; number of stocks 89.88 vs 103.07 (medians 52 vs 54); expense ratio 1.25 vs 1.26 percentage points", direction: mixed, vsBenchmark: "Table 6 reports no sizable differences in the characteristics shown" }
    - { ref: R14, outcome: mutual fund performance by extrapolation group, metric: return-spread, value: "Contrarians outperform extrapolators across five plotted measures: raw returns, benchmark-adjusted returns, CAPM alpha, FF3 alpha, and FF5 alpha; figure does not print exact bar values", direction: positive, vsBenchmark: "Panel A group mean beta labels: -0.22 for contrarians and 0.15 for extrapolators" }
  resultType: confirms
  relatesTo:
    - { cite: "Afrouzi et al. (2023)", doi: '10.1093/qje/qjad009', relation: builds-on, note: "adopts their preregistered overreaction elicitation task (AR(1) stock return prediction, 20 rounds) as the cognitive measure" }
    - { cite: "Greenwood and Shleifer (2014)", relation: builds-on, note: "uses their survey-based evidence of return extrapolation and their recency-weight model (Eq. 7) as the empirical backdrop" }
    - { cite: "Bordalo et al. (2020)", doi: '10.1257/aer.20181219', relation: tests, note: "replicates their finding of widespread individual overreaction in macroeconomic expectations, then shows teams reduce it" }
    - { cite: "Enke et al. (2023)", doi: '10.1257/aer.20220915', relation: extends, note: "extends their self-selection finding in cognitive tasks to financial forecasting and adds a formal quantitative decomposition" }
    - { cite: "Barberis (2018)", doi: '10.1016/j.jfineco.2018.04.007', relation: cites, note: "cites their representativeness-heuristic framework as the theoretical backdrop for individual belief overreaction" }
    - { cite: "Jegadeesh et al. (2019)", doi: '10.1016/j.jfineco.2019.02.010', relation: builds-on, note: "adapts their disjoint-subsample IV strategy to correct for measurement error in the counterfactual overreaction regressor" }
  openQuestions:
    - "How belief aggregation in teams affects outcomes beyond overreaction (e.g. risk-taking, ambiguity preferences, other heuristics): the paper notes this is outside its current scope (Conclusion, p. 15-16)."
    - "How internal reflection, self-selection, and external screening interact within actual team interaction, since separate treatments isolate mechanisms and do not identify cross-channel interactions (p. 8, fn. 18)."
    - "How the lab results vary with organizational settings and team formation, given the field analysis's endogeneity of team formation and indirect measure of overreaction (pp. 13-14)."
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: >-
        Full text read (17 pp. main body + references, pages 1-17 of the PDF);
        six results extracted from the paywalled PDF. Not human-verified. Not reproduced.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; four fixes applied:
        (1) R4 Table 4 Col 3 interaction SE corrected from [0.009] to [0.018] (the [0.009] was the SE of the standalone |Error| term, not the interaction);
        (2) R6 column reference corrected from Col 8 to Col 7 for the delta0+delta1=0.45 sum (Col 7 IV gives 1.1703-0.7167=0.4536; Col 8 gives 0.30);
        (3) R6 p-value label corrected from "OLS p=0.018" to "IV p=0.018 (Col 8)" (both 0.015 and 0.018 are from IV columns; OLS gives p=0.000);
        (4) JEL code C91 removed (PDF lists only G41 and D91). All other locators, magnitudes, equations, and classification axes confirmed against the PDF.
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the complete 17-page PDF; appended nine missing findings and expanded the formal sections to include numbered equations (1)-(11) and main estimating specifications. These additions are not human-verified and were not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 15 Core rows, equations (1)-(11), classifications, findings, frontmatter, and prose against the PDF; corrected R5 locator, R3 finding direction, resultType, and prose claims; added locatable Bordalo citation. All checked claims supported." }
  licenceVerification:
    - source: Crossref REST API works/10.1016/j.jfineco.2025.104219
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[] entries: content-version=tdm URL=elsevier.com/tdm/userlicense/1.0/
        and elsevier.com/legal/tdmrep-license; content-version=stm-asf URLs
        doi.org/10.15223/policy-017/037/012/029/004; delay-in-days 0; start 2026-02-01;
        no CC licence found.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the measurement framework for belief overreaction, the decomposition of the team effect into three channels, and the key estimating equations: enough to understand what was found and how, without reading the full 17-page article. To replicate or extend it, read the original at <https://doi.org/10.1016/j.jfineco.2025.104219>.

## TL;DR

The paper addresses a fundamental question in behavioral finance: does moving from individual to team decision-making amplify or attenuate belief overreaction to recent asset returns? Using preregistered randomized experiments on the Labvanced platform with 1,512 Prolific participants, plus a within-subject field study of US equity mutual fund managers (1980-2018), the paper finds that two-person teams reduce individual overreaction by 30 to 55 percent. A quantitative decomposition, following the approach of Enke et al. (2023), partitions the lab team effect into three channels: internal reflection (the act of pre-team deliberation), self-selection (the tendency of the less-biased member to lead), and external screening (the group interaction itself). Self-selection accounts for roughly 70 percent of the reduction. LLM analysis of roughly 18,000 chat exchanges in the Group treatment corroborates this, and dynamic evidence shows that participants reduce their leadership role after making larger forecast errors. In the field, where overreaction is measured indirectly from funds' sensitivity to past stock returns, mutual fund teams attenuate extrapolative overreaction by about 55 percent relative to the individual behavior of the same managers. This attenuation is associated with better investment performance.

## Core results

Magnitudes and significance are as reported; `\*` / `\*\*` / `\*\*\*` = 10% / 5% / 1%. Standard errors in brackets, clustered at the team level (equivalent to individual-level for the Individual treatment). Locators reference the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Teams reduce overreaction by ~30%**: Group treatment dummy lowers the individual overreaction coefficient by 0.092, significant at 1%, robust across demographics, financial sophistication, and income fixed-effects controls | Table 2, p. 6 | Group = -0.092\*\*\* [0.035] (Col 1, n = 704); stable at -0.099\*\*\* to -0.101\*\*\* in Cols 2-4; Individual mean beta = 0.311, SD = 0.424 |
| R2 | **Self-selection explains ~70% of the team effect**: the three-channel decomposition shows internal reflection contributes essentially nothing (-0.001, n.s.) and external screening contributes -0.025 to -0.031 (n.s.), while self-selection contributes -0.067 to -0.090 (significant in most specifications) | Table 3/Eq. (5), p. 8 | Most conservative spec (Col 4): IR = -0.001 (n.s.); SS = -0.068\* [0.039]; ES = -0.031 (n.s.); total team effect = -0.098 [0.035] |
| R3 | **Teams show a weaker recency effect**: fitting the exponential return-extrapolation model separately for each treatment, the recency weight (1 minus the decay parameter) is about 2.4x smaller for Group participants than Individual participants | Fig. 3/Eq. (7), p. 11 | Group lambda2 = 0.953 (recency = 0.047) vs Individual lambda2 = 0.886 (recency = 0.114); Group places more equal weight across all 40 past returns |
| R4 | **Self-selection is dynamic and driven by past errors**: participants who led the team prediction in round t-1 are significantly less likely to lead in round t after the team made a large forecast error in round t-1 | Table 4/Eq. (6), p. 10 | MostVotes\_{t-1} x \|Error\_{t-1}\| coefficient = -4.440\*\*\* [0.645] (Votes, Col 1); -0.137\*\*\* [0.018] (MostVotes dummy, Col 3); n = 7,657 round observations |
| R5 | **Teams achieve higher prediction accuracy**: Group participants generate lower mean-squared error, lower mean-absolute error, and earn a higher experimental bonus than Individual participants | Table 5, p. 11 | Group vs Individual: MSE -157.722\*\*\* [30.394]; MAE -2.015\*\*\* [0.408]; Bonus +$0.059\*\* [0.023]; full controls, n = 703 |
| R6 | **Mutual fund teams attenuate extrapolative overreaction by ~55%**: within-subject comparison of team overreaction and statistical counterfactual individual overreaction shows teams transmit only about 45% of extrapolative behavior, while contrarian (non-overreacting) behavior is fully transmitted | Table 8/Eq. (10-11), p. 15 | IV sum delta0 + delta1 = 0.45 (Col 7); null of full transmission (= 1) rejected at IV p = 0.015 (Col 7) and IV p = 0.018 (Col 8); contrarian-only delta0 not significantly below 1 (IV p = 0.568) |
| R7 | **Lower absolute belief bias**: the group treatment also reduces absolute sensitivity to past returns, establishing that the main result is closer to the rational benchmark rather than merely a change in coefficient sign | Table 5, p. 11 | Group coefficient on absolute overreaction = -0.101\*\*\* [0.027]; Individual mean = 0.413 |
| R8 | **Chat evidence supports self-selection**: both LLM measurement approaches indicate that one partner commonly leads while the other withdraws, and their team-level measures are positively associated | Fig. 2, p. 9 | Uncontested rounds mean = 16.37 (SD = 3.16); LLM score mean = 6.56 (SD = 0.53); Spearman correlation = 0.293\*\*\* |
| R9 | **No significant average field difference across all teams**: the within-team comparison of solo counterfactual and observed team trading sensitivity is not statistically significant in the pooled sample | Table 7, p. 13 | Solo counterfactual mean = -0.011 (s.e. 0.022; t = -0.489); team mean = -0.034 (s.e. 0.028; t = -1.200); CF - TM = 0.023 (s.e. 0.026; t = 0.891), N = 308 |
| R10 | **Contrarian behavior is retained in teams**: among contrarian teams, solo and team sensitivities are statistically indistinguishable | Table 7, p. 13 | Solo counterfactual mean = -0.224 (s.e. 0.029; t = -7.593); team mean = -0.178 (s.e. 0.043; t = -4.127); CF - TM = -0.046 (s.e. 0.034; t = -1.374), N = 143 |
| R11 | **Extrapolative behavior is attenuated in teams**: among extrapolative teams, mean sensitivity falls by about one-half between solo management and team management | Table 7, p. 13 | Solo counterfactual mean = 0.184 (s.e. 0.024; t = 7.815); team mean = 0.090 (s.e. 0.035; t = 2.589); CF - TM = 0.094 (s.e. 0.039; t = 2.414), N = 165 |
| R12 | **IV evidence does not reject full transmission of contrarian behavior**: in the field IV specification, the coefficient on solo counterfactual sensitivity is statistically consistent with one | Table 8, p. 15 | Test of H0 delta0 = 1: p = 0.568 (IV Col 5) |
| R13 | **Solo and team fund samples have similar observed characteristics**: the descriptive statistics support the paper's decision to use a within-subject design rather than rely on between-sample comparability | Table 6, p. 12 | Solo vs team: mean TNA = 1017.82 vs 1200.26 million; mean stocks held = 89.88 vs 103.07 (median 52 vs 54); expense ratio = 1.25 vs 1.26 percentage points |
| R14 | **Extrapolative trading predicts weaker fund performance**: the paper's full-sample and recursive sorts show lower performance among extrapolators than contrarians across raw, benchmark-adjusted, CAPM, FF3, and FF5 measures | Fig. 4, p. 16 | Panel A labels mean beta as -0.22 for contrarians and 0.15 for extrapolators; exact numerical performance bar values are not printed |
| R15 | **No evidence of naive one-period extrapolation**: participants are not more likely to predict an identical return in consecutive periods, distinguishing the measured bias from simply repeating the latest return | text p. 11 | Null reported in unreported results; no coefficient or test statistic is given |

**Overall (paper's conclusion).** Both in the lab and in the field, teams reduce belief overreaction relative to individuals. The dominant mechanism is self-selection: in two-person teams, the less-biased member tends to take on decision authority. This process is dynamic (driven by past forecast errors and feedback) and is confirmed by LLM-based analysis of chat exchanges. In the field, the attenuation of extrapolative trading by mutual fund teams is associated with better subsequent fund performance, while contrarian (non-overreacting) behavior is preserved.

## Theory / model

The paper does not present a formal structural model. It motivates belief overreaction through representativeness and extrapolation accounts, including Barberis (2018) and Greenwood and Shleifer (2014), and tests whether teams attenuate the tendency to overweight past returns. In the lab task, returns follow the AR(1) process described on p. 4:

$$
x_t = \rho x_{t-1} + \varepsilon_t, \qquad \varepsilon_t \sim \mathcal{N}(0, \sigma^2), \qquad \rho = 0.5, \quad \sigma = 20
$$

The paper treats zero sensitivity to the latest return as the rational benchmark because past returns have weak predictive power. It predicts an individual coefficient above zero under overreaction and a negative group-treatment effect if teams reduce it (pp. 4-5).

The authors replicate widespread individual overreaction in expectations documented by Bordalo et al. (2020) before testing how teams change it.

The conceptual team effect is the difference between mean overreaction in the Group and Individual treatments. Equation (3) partitions that difference into internal reflection, self-selection, and external screening (p. 6):

$$
\Delta\beta_G = \beta_G - \beta_I = (\beta_{IR} - \beta_I) + (\beta_{SS} - \beta_{IR}) + (\beta_G - \beta_{SS}) \tag{3}
$$

Internal Reflection measures beliefs after participants know they are part of a team but before team interaction; Self-Selection uses votes to choose which participant's forecast becomes the team forecast; External Screening is the residual difference between actual discussion and the voting treatment. The decomposition predicts that self-selection lowers team overreaction when less biased members tend to lead. The direction is theoretically ambiguous if the more biased members instead assume leadership (pp. 7-8).

## Method

**Randomized lab experiment.** The Individual and Group arms randomly assign US Prolific participants to forecast alone or in two-person teams. Each participant sees 40 returns from the same hypothetical AR(1) process over 20 rounds. The two additional treatments isolate channels: Internal Reflection adds individual forecasts before discussion, while Self-Selection asks partners to allocate 100 votes across their independent forecasts. The final sample is 1,512 participants: 248 Individual, 456 Group, 405 Internal Reflection, and 403 Self-Selection (pp. 4, 7-8). Participants receive a score based on forecast error, $$S_t = 100 \times \max(0, 1 - |FE_t|/\sigma)$$, converted to a dollar bonus (p. 4).

The lab task follows Afrouzi et al. (2023), adapting their overreaction elicitation to forecast hypothetical stock returns. The paper uses two measures of lab overreaction. Equation (1) regresses each participant's forecast on the most recent return; Equation (7) fits an exponentially weighted average of 40 past returns and separates overall sensitivity from recency (pp. 4, 11). For the mechanism evidence, the authors use GPT-4o-mini to code chat exchanges for uncontested first proposals and to generate a separate self-selection score over 100 queries (Fig. 2, p. 9). The Self-Selection treatment panel follows votes and forecast errors over repeated rounds (Table 4, p. 10).

**Mutual fund field design.** The authors compare 308 teams with the equal-weighted average behavior of the same managers when they worked alone, rather than comparing unrelated solo- and team-managed funds. The underlying panel covers 1980-2018, with 467 managers and 847 funds. The trading response to past returns is estimated at the fund level using stock holdings, returns, controls for stock characteristics and flow-induced trading, and fund-by-quarter fixed effects (Eqs. 8-9, p. 12). The team-level transmission regressions include team controls and, where reported, style fixed effects. To address measurement error in the generated solo counterfactual, the paper instruments it using estimates from disjoint subsamples, following Jegadeesh et al. (2019) (Eqs. 10-11 and Table 8, pp. 13-15).

## Empirical specifications

The lab measure regresses participant i's reported expectation on the latest realized return (Eq. 1, p. 4). Participants see the same 40-return information history in each round, repeated over 20 rounds; this is a participant-level time-series regression, not a treatment regression:

$$
\widehat{E}_{t} x_{i,t+1} = \alpha_i + \beta_i x_t + \varepsilon_{i,t} \tag{1}
$$

The participant-level treatment regression relates the estimated coefficient to Group assignment and survey controls (Eq. 2, p. 5):

$$
\widetilde{\beta}_i = \alpha_2 + \gamma G_i + \delta' X_i + \eta_i \tag{2}
$$

Here G_i equals one for Group participants. Table 2 reports 704 observations in columns 1-3 and 703 in column 4. Columns 2-4 add demographic controls, column 3 adds financial-sophistication controls, and column 4 adds US region and income-category fixed effects. Standard errors are clustered at the team level. The estimated Group coefficient ranges from -0.092 to -0.101 (Table 2, p. 6).

The four-treatment specification estimates the overreaction coefficient on treatment indicators and controls (Eq. 4, p. 8):

$$
\widetilde{\beta}_i = \alpha_3 + \gamma_{IR} IR_i + \gamma_{SS} SS_i + \gamma_G G_i + \delta' X_i + \epsilon_i \tag{4}
$$

It uses all 1,512 participants, with the Individual treatment as the omitted group. The controls are added successively across columns; the final column includes demographics, financial-sophistication controls, and US region and income-category fixed effects. Standard errors are clustered at the team level. Equation (5) reports the decomposition from the most controlled column (Table 3, p. 8):

$$
\underbrace{-0.098}_{\Delta\widehat{\beta}_G\;[\text{s.e.}=0.035]} = \underbrace{-0.001}_{\Delta\widehat{\beta}_{IR}\;[\text{s.e.}=0.034]} + \underbrace{-0.067}_{\Delta\widehat{\beta}_{SS}\;[\text{s.e.}=0.034]} + \underbrace{-0.031}_{\Delta\widehat{\beta}_{ES}\;[\text{s.e.}=0.035]} \tag{5}
$$

Equation (6) tests whether the previous round's forecast error changes the next-round leadership/vote outcome conditional on who led in the previous round (p. 9):

$$
Y_{i,t} = \alpha + \beta \text{MostVotes}_{i,t-1} + \gamma |\text{Error}_{i,t-1}| + \delta \text{MostVotes}_{i,t-1} \times |\text{Error}_{i,t-1}| + \varepsilon_t \tag{6}
$$

The outcome is either votes cast or an indicator for being the decision maker. The absolute forecast error is demeaned and standardized. Table 4 uses 7,657 round-participant observations, team-clustered standard errors, and demographic and financial-sophistication controls plus region and income fixed effects in columns 2 and 4; the controls also interact with MostVotes. The interaction estimates are -4.440 [0.645] for vote counts and -0.137 [0.018] for decision-maker status (Table 4, p. 10).

The alternative belief-formation model weights past returns exponentially (Eq. 7, p. 11):

$$
\widehat{E}_{t} x_{i,t+1} = \lambda_0 + \lambda_1 \frac{\sum_{j=0}^{N} \lambda_2^j x_{t-j}}{\sum_{i=0}^{N} \lambda_2^i} + \varepsilon_{i,t} \tag{7}
$$

Here N is set to 39, corresponding to 40 past returns. The model is estimated separately by treatment; the Appendix reports nonlinear least squares. Figure 3 reports $$\lambda_2 = 0.886$$ for Individual and 0.953 for Group. The main text does not give standard-error or fixed-effect details for these treatment-specific estimates (Fig. 3, p. 11).

For fund j and stock s, the field measure is estimated from changes in holdings on past stock returns, controls, and fund-time fixed effects (Eqs. 8-9, p. 12):

$$
\text{trades}_{s,j,t+1} = \alpha_j + \beta_j^X r_{s,t-4\to t} + \gamma_j' C_{s,t} + \theta_{j,t} + e_{s,j,t+1}, \qquad j = 1, \ldots, J \tag{8}
$$

$$
\text{trades}_{s,j,t+1} \equiv \frac{(\text{shares}_{s,j,t+1} - \text{shares}^{\text{split-adj}}_{s,j,t}) P_{s,t+1}}{TNA_{j,t+1}} \tag{9}
$$

The past-return regressor is the weighted sum of four quarterly returns, with weights proportional to $$\lambda^j$$ and $$\lambda = 0.56$$. The controls include stock characteristics and flow-induced trading controls; $$\theta_{j,t}$$ is a fund-quarter fixed effect. The panel uses the stock holdings history from the 1980-2018 field sample. The paper refers to Internet Appendix IA5 for the full control list and investment universe; the main text does not specify a standard-error treatment for this fund-level estimation (Eq. 8, p. 12).

The team-level regression compares each observed team's sensitivity with its solo-manager counterfactual (Eq. 10, p. 13):

$$
\widehat{\beta}_j^{TM} = \alpha + \widehat{\beta}_j^{CF} (\delta_0 + \delta_1 D_j^E) + \delta_2 D_j^E + \delta_3 C_j + \epsilon_j \tag{10}
$$

Here D_j^E marks extrapolative teams and C_j contains team controls. Table 8 estimates this cross-section for 308 teams (307 in controlled columns), with team controls and style fixed effects included as indicated and standard errors reported in brackets; the main text does not state a clustering level. The IV columns use disjoint-subsample estimates to instrument the generated counterfactual. The simpler model reported in Table 8 columns 1, 2, 5, and 6 is (Eq. 11, p. 14):

$$
\widehat{\beta}_j^{TM} = \alpha + \delta_0 \widehat{\beta}_j^{CF} + \delta_1 C_j + \epsilon_j \tag{11}
$$

In the full IV model, the estimate of $$\delta_0 + \delta_1$$ is 0.4536 in column 7 and 0.4997 in column 8; the null of full extrapolative transmission is rejected at p = 0.015 and p = 0.018, respectively. The null that contrarian behavior is fully transmitted, $$\delta_0 = 1$$, is not rejected in IV column 5 (p = 0.568; Table 8, p. 15).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Lab experiment data (Labvanced / Prolific, 2024) | Primary data for Sections 2-2.5: 1,512 participants, four treatments, 20 prediction rounds each; chat transcripts analyzed by LLM | No page yet (original data; replication package on Mendeley Data) |
| CRSP monthly stock returns (via WRDS) | Quarterly stock-level returns for the fund trading regression (Eq. 8); past four-quarter return predictor | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Thomson Reuters Mutual Fund Holdings (via WRDS) | Quarterly holdings of US stocks per fund; used to construct the split-adjusted trade measure (Eq. 9) | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Morningstar | Fund investment objectives, fund family, expense ratios, fund age; used as controls in the field analysis | [Morningstar](/wiki/commercial/morningstar/) (licensed) |
| SEC mandatory fund filings | Fund managerial structure (team vs individual management identification); fund-level panel 1980-2018 | [EDGAR](/wiki/datasets/edgar/) |

Sample (field): 467 unique managers, 847 unique funds, 308 unique team observations, quarterly 1980-2018. Sample (lab): 1,512 participants across four treatments, run June-November 2024.

## When to read the full paper

Read the original at <https://doi.org/10.1016/j.jfineco.2025.104219> if you are studying team effects on belief formation and behavioral biases (Section 2 for the experimental design and Tables 2-5 for the core results); implementing the three-channel decomposition of team effects (Section 2.3 and Eq. 3-5 for the framework); analyzing the dynamic feedback between forecast errors and team leadership roles (Section 2.4 and Table 4); studying how organizational structure (solo vs team management) affects fund manager trading behavior and fund performance in the field (Section 3 and Tables 6-8); or looking for evidence linking overreaction to investment underperformance (Section 3.6.1 and Fig. 4). The Internet Appendix contains preregistration documents, the LLM prompts (Appendix IA3), and robustness checks.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 176 (2026), article 104219. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. All rights reserved; this page is extract-only.

> Barahona, Ricardo, Stefano Cassella, Kristy A.E. Jansen, and Vincenzo Pezone.
> "Do teams alleviate or exacerbate overreaction in beliefs?"
> *Journal of Financial Economics* 176 (2026): 104219.
> DOI: 10.1016/j.jfineco.2025.104219. © 2025 Elsevier B.V. All rights reserved.
