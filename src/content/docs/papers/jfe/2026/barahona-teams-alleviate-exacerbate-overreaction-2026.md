---
title: "Teams and Belief Overreaction: Barahona, Cassella, Jansen & Pezone (2026)"
description: >-
  Distilled: Preregistered lab experiments and US mutual fund data show that two-person
  teams reduce individual belief overreaction to past returns by 30 to 55 percent, with
  self-selection into team leadership accounting for roughly 70 percent of the lab effect.
  Journal of Financial Economics 176 (2026), paywalled. Six core results with source
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
  outcomeClass: [expectations, fund-behavior]
  license: >-
    All rights reserved (Elsevier B.V. copyright 2025); Crossref confirms TDM-only
    licenses (content-versions tdm and stm-asf); no CC licence found.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment, panel-regression, llm-text-classification]
    identification: randomized
  contributionType: [new-fact, new-data, measurement]
  mechanisms: [behavioral-bias, team-self-selection]
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
    - ref: R1
      outcome: individual belief overreaction coefficient
      metric: coefficient
      value: "-0.092*** [0.035]; 30% reduction relative to Individual mean of 0.311"
      direction: negative
      vsBenchmark: "Individual treatment mean overreaction beta = 0.311 (SD = 0.424)"
    - ref: R2
      outcome: individual belief overreaction coefficient (channel decomposition)
      metric: coefficient
      value: >-
        Most conservative spec (Col 4): IR = -0.001 (n.s.); SS = -0.068* [0.039]
        (69% of total); ES = -0.031 (n.s.); total team effect = -0.098
      direction: negative
      vsBenchmark: "self-selection (SS) channel alone accounts for ~70% of the -0.098 total reduction"
    - ref: R3
      outcome: recency parameter lambda2 in return-extrapolation model
      metric: coefficient
      value: "Group lambda2 = 0.953 vs Individual lambda2 = 0.886; recency effect (1-lambda2) is 0.047 for Group vs 0.114 for Individual"
      direction: positive
      vsBenchmark: "Individual recency effect is ~2.4x larger than Group recency effect"
    - ref: R4
      outcome: votes cast in next round by prior team decision maker
      metric: coefficient
      value: "MostVotes_{t-1} x |Error_{t-1}| interaction = -4.440*** [0.645] (Votes, Col 1); -0.137*** [0.018] (MostVotes dummy, Col 3)"
      direction: negative
    - ref: R5
      outcome: prediction accuracy (MSE, MAE) and experimental bonus
      metric: coefficient
      value: "MSE: -157.722*** [30.394]; MAE: -2.015*** [0.408]; Bonus: +$0.059** [0.023] (Group vs Individual, full controls)"
      direction: positive
      vsBenchmark: "bonus gain ~25% of Individual cross-sectional SD; MAE reduction ~9% of Individual mean"
    - ref: R6
      outcome: mutual fund trading sensitivity to past returns (team transmission)
      metric: coefficient
      value: "IV sum delta0 + delta1 = 0.45 (Col 7); null of full transmission rejected at IV p = 0.015 (Col 7) and IV p = 0.018 (Col 8); ~55% attenuation of individual overreaction in extrapolative teams"
      direction: negative
      vsBenchmark: "full transmission from solo to team management would yield sum delta0 + delta1 = 1"
  resultType: new-finding
  relatesTo:
    - { cite: "Afrouzi et al. (2023)", doi: '10.1093/qje/qjad009', relation: builds-on, note: "adopts their preregistered overreaction elicitation task (AR(1) stock return prediction, 20 rounds) as the cognitive measure" }
    - { cite: "Greenwood and Shleifer (2014)", relation: builds-on, note: "uses their survey-based evidence of return extrapolation and their recency-weight model (Eq. 7) as the empirical backdrop" }
    - { cite: "Bordalo et al. (2020)", doi: '10.1257/aer.20181219', relation: tests, note: "replicates their finding of widespread individual overreaction in macroeconomic expectations, then shows teams reduce it" }
    - { cite: "Enke et al. (2023)", doi: '10.1257/aer.20220915', relation: extends, note: "extends their self-selection finding in cognitive tasks to financial forecasting and adds a formal quantitative decomposition" }
    - { cite: "Barberis (2018)", doi: '10.1016/j.jfineco.2018.04.007', relation: cites, note: "cites their representativeness-heuristic framework as the theoretical backdrop for individual belief overreaction" }
    - { cite: "Jegadeesh et al. (2019)", doi: '10.1016/j.jfineco.2019.02.010', relation: builds-on, note: "adapts their disjoint-subsample IV strategy to correct for measurement error in the counterfactual overreaction regressor" }
  openQuestions:
    - "How belief aggregation in teams affects outcomes beyond overreaction (e.g. risk-taking, ambiguity preferences, other heuristics): the paper notes this is outside its current scope (Conclusion, p. 15-16)."
    - "How self-selection and external screening interact within the actual team interaction, since the experimental design measures them in separate pre-interaction and post-interaction phases rather than within a single joint treatment (p. 8, fn. 18)."
    - "Whether the lab findings extend to settings with non-random team formation, social ties, or professional hierarchies (Conclusion, p. 15)."
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

The paper addresses a fundamental question in behavioral finance: does moving from individual to team decision-making amplify or attenuate belief overreaction to recent asset returns? Using preregistered randomized experiments on the Labvanced platform with 1,512 Prolific participants, plus a within-subject field study of US equity mutual fund managers (1980-2018), the paper finds that two-person teams reduce individual overreaction by 30 to 55 percent. A quantitative decomposition, following the approach of Enke et al. (2023), partitions the lab team effect into three channels: internal reflection (the act of pre-team deliberation), self-selection (the tendency of the less-biased member to lead), and external screening (the group interaction itself). Self-selection accounts for roughly 70 percent of the reduction. LLM analysis of roughly 18,000 chat exchanges in the Group treatment corroborates this, and dynamic evidence shows that participants reduce their leadership role after making larger forecast errors. The field results, based on the approach of Bordalo et al. (2020) for identifying overreaction, are consistent: mutual fund teams attenuate extrapolative overreaction by about 55 percent relative to the individual behavior of the same managers, and this attenuation coincides with better investment performance.

## Core results

Magnitudes and significance are as reported; `\*` / `\*\*` / `\*\*\*` = 10% / 5% / 1%. Standard errors in brackets, clustered at the team level (equivalent to individual-level for the Individual treatment). Locators reference the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Teams reduce overreaction by ~30%**: Group treatment dummy lowers the individual overreaction coefficient by 0.092, significant at 1%, robust across demographics, financial sophistication, and income fixed-effects controls | Table 2, p. 6 | Group = -0.092\*\*\* [0.035] (Col 1, n = 704); stable at -0.099\*\*\* to -0.101\*\*\* in Cols 2-4; Individual mean beta = 0.311, SD = 0.424 |
| R2 | **Self-selection explains ~70% of the team effect**: the three-channel decomposition shows internal reflection contributes essentially nothing (-0.001, n.s.) and external screening contributes -0.025 to -0.031 (n.s.), while self-selection contributes -0.067 to -0.090 (significant in most specifications) | Table 3/Eq. (5), p. 8 | Most conservative spec (Col 4): IR = -0.001 (n.s.); SS = -0.068\* [0.039]; ES = -0.031 (n.s.); total team effect = -0.098 [0.035] |
| R3 | **Teams show a weaker recency effect**: fitting the exponential return-extrapolation model separately for each treatment, the recency weight (1 minus the decay parameter) is about 2.4x smaller for Group participants than Individual participants | Fig. 3/Eq. (7), p. 11 | Group lambda2 = 0.953 (recency = 0.047) vs Individual lambda2 = 0.886 (recency = 0.114); Group places more equal weight across all 40 past returns |
| R4 | **Self-selection is dynamic and driven by past errors**: participants who led the team prediction in round t-1 are significantly less likely to lead in round t after the team made a large forecast error in round t-1 | Table 4/Eq. (6), p. 10 | MostVotes\_{t-1} x \|Error\_{t-1}\| coefficient = -4.440\*\*\* [0.645] (Votes, Col 1); -0.137\*\*\* [0.018] (MostVotes dummy, Col 3); n = 7,657 round observations |
| R5 | **Teams achieve higher prediction accuracy**: Group participants generate lower mean-squared error, lower mean-absolute error, and earn a higher experimental bonus than Individual participants | Table 5, p. 10 | Group vs Individual: MSE -157.722\*\*\* [30.394]; MAE -2.015\*\*\* [0.408]; Bonus +$0.059\*\* [0.023]; full controls, n = 703 |
| R6 | **Mutual fund teams attenuate extrapolative overreaction by ~55%**: within-subject comparison of team overreaction and statistical counterfactual individual overreaction shows teams transmit only about 45% of extrapolative behavior, while contrarian (non-overreacting) behavior is fully transmitted | Table 8/Eq. (10-11), p. 15 | IV sum delta0 + delta1 = 0.45 (Col 7); null of full transmission (= 1) rejected at IV p = 0.015 (Col 7) and IV p = 0.018 (Col 8); contrarian-only delta0 not significantly below 1 (IV p = 0.568) |

**Overall (paper's conclusion).** Both in the lab and in the field, teams reduce belief overreaction relative to individuals. The dominant mechanism is self-selection: in two-person teams, the less-biased member tends to take on decision authority. This process is dynamic (driven by past forecast errors and feedback) and is confirmed by LLM-based analysis of chat exchanges. In the field, the attenuation of extrapolative trading by mutual fund teams is associated with better subsequent fund performance, while contrarian (non-overreacting) behavior is preserved.

## Theory / model

The paper has no formal structural model. It motivates belief overreaction with the representativeness-heuristic framework of Barberis (2018), which predicts that investors overextrapolate recent returns, and tests team effects on this well-documented bias.

**Cognitive task and AR(1) process.** The hypothetical stock used in the experiment follows an AR(1) process (p. 4):

$$
x_t = \rho x_{t-1} + \varepsilon_t, \qquad \varepsilon_t \sim \mathcal{N}(0, \sigma^2), \quad \rho = 0.5, \quad \sigma = 20
$$

Given that past returns have only weak predictive power for future returns, the paper sets the rational benchmark at $$\beta_i = 0$$ (the best response when $$\rho$$ is difficult to infer). Any positive $$\beta_i$$ signals overreaction: the participant over-weights the most recent return realization.

**Return-extrapolation model (recency channel).** Following Greenwood and Shleifer (2014), an exponentially-weighted extrapolation model is estimated to decompose overreaction into a level (attribute substitution) and a recency component (Eq. 7, p. 11):

$$
\hat{E}_i x_{i,t+1} = \lambda_0 + \lambda_1 \frac{\sum_{j=0}^{N} \lambda_2^j \, x_{t-j}}{\sum_{j=0}^{N} \lambda_2^j} + \varepsilon_{i,t} \tag{7}
$$

Here $$\lambda_1$$ captures the overall level of attribute substitution (sensitivity to past returns in general) and $$\lambda_2$$ governs the relative importance of more versus less recent returns: as $$\lambda_2 \to 0$$, the most recent observation receives disproportionately more weight (stronger recency effect); as $$\lambda_2 \to 1$$, all past returns receive equal weight. The quantity $$1 - \lambda_2$$ is used as the recency-effect measure.

**Team-effect decomposition.** The aggregate team effect is $$\Delta\beta_G = \bar{\beta}_G - \bar{\beta}_I$$. It is partitioned into three additive channels (Eq. 3, p. 6):

$$
\Delta\beta_G
= \underbrace{(\bar{\beta}_{IR} - \bar{\beta}_I)}_{\Delta\beta_{IR}\,(\text{internal reflection})}
+ \underbrace{(\bar{\beta}_{SS} - \bar{\beta}_{IR})}_{\Delta\beta_{SS}\,(\text{self-selection})}
+ \underbrace{(\bar{\beta}_G - \bar{\beta}_{SS})}_{\Delta\beta_{ES}\,(\text{external screening})} \tag{3}
$$

where $$\bar{\beta}_{IR}$$ is average overreaction in the Internal Reflection treatment (participants forecast individually before seeing their partner's prediction, no team interaction yet), $$\bar{\beta}_{SS}$$ is average overreaction in the Self-Selection treatment (voting mechanism picks the team forecast), and $$\bar{\beta}_G$$ is the average in the actual Group treatment. The design isolates each mechanism: IR captures the effect of deliberate pre-team reasoning; the gap between SS and IR isolates the self-selection mechanism; the residual of G vs SS measures external screening via actual discussion.

## Method

**Lab experiment.** The experiment runs on the Labvanced browser-based platform with subjects recruited via Prolific (US-based, pre-screened for 98% approval rate). Participants observe a 40-period AR(1) return series and use a vertical slider to predict the next-period return; the prediction task repeats for 20 rounds per session. Compensation uses a Brier-style scoring rule following Dwyer et al. (1993) and Afrouzi et al. (2023): $$S_t = 100 \times \max(0,\, 1 - |FE_t|/\sigma)$$, paid as a dollar bonus (mean approximately $6.09). Two key treatments:

- **Individual (I)**: each participant forecasts independently in each round.
- **Group (G)**: two randomly matched participants communicate via a live chat box and must agree on a joint forecast before advancing; both earn the group score.

Two additional preregistered treatments isolate mechanism channels:

- **Internal Reflection (IR, RCT-Id AEARCTR-0013710)**: participants forecast individually first, see their partner's forecast, then make a joint prediction; eliminates the actual chat discussion.
- **Self-Selection (SS, RCT-Id AEARCTR-0014914)**: participants each independently forecast and then allocate 100 votes across the two predictions; the prediction with the most votes becomes the team forecast.

Final sample: 1,512 participants (248 Individual, 456 Group, 405 IR, 403 SS) after quality filtering for abnormally high rates of exactly-correct predictions.

**LLM analysis of chat content.** To quantify self-selection patterns in the Group treatment, the paper uses GPT-4o-mini (07/18/2024) on the roughly 18,000 chat exchanges collected (Fig. 2, p. 9). In a "supervised" pass, the LLM records: (i) the first numeric proposal made and its author, (ii) whether the other participant accepted or counter-proposed. The number of rounds where the first proposal was accepted without counter-proposal (uncontested rounds, mean 16.37 per team) proxies for self-selection intensity. In an "unsupervised" pass, the LLM rates each team's self-selection score on a 0-10 scale (mean 6.56). The two measures correlate at 0.29 (Spearman, p < 0.01, Panel C), validating the LLM-based approach. This LLM analysis is conducted by Enke et al. (2023)-inspired methods adapted to team financial decisions.

**Within-subject field design.** The paper identifies 308 mutual fund teams in which at least one member has also managed a fund individually at some point. The statistical counterfactual $$\hat{\beta}_j^{CF}$$ is the equal-weighted average overreaction of the team's members measured when they manage individually, observing them at the same point in time as the team observation. This within-subject design isolates the team effect from compositional differences between solo- and team-managed funds. An IV strategy based on Jegadeesh et al. (2019) uses disjoint subsamples of the data to construct an instrument for $$\hat{\beta}_j^{CF}$$ that is free of measurement error.

## Empirical specifications

**Overreaction measurement (R1-R5, lab).** For each participant $$i$$, an individual overreaction coefficient $$\hat{\beta}_i$$ is estimated from the individual-level time-series regression (Eq. 1, p. 4):

$$
\hat{E}_i x_{i,t+1} = \alpha_i + \beta_i x_t + \varepsilon_{i,t} \tag{1}
$$

where $$\hat{E}_i x_{i,t+1}$$ is participant $$i$$'s stated prediction for the next-period return and $$x_t$$ is the most recent return. Rational expectations benchmark: $$\beta_i = 0$$. Larger $$\hat{\beta}_i > 0$$ signals stronger overreaction.

**Team effect regression (R1).** The participant-level overreaction coefficients $$\hat{\beta}_i$$ serve as the dependent variable in the cross-sectional regression (Eq. 2, p. 5):

$$
\hat{\beta}_i = \alpha_2 + \gamma G_i + \delta' X_i + \eta_i \tag{2}
$$

where $$G_i = 1$$ for Group treatment participants and $$X_i$$ is a vector of demographic and financial sophistication controls. Standard errors are clustered at the team level. The key estimate is $$\hat{\gamma} = -0.092$$ (Table 2, Col 1), stable from -0.099 to -0.101 with controls (Cols 2-4), corresponding to a 30 percent reduction relative to the Individual mean of 0.311.

**Mechanism decomposition regression (R2).** The sample is expanded to include all four treatments and the regression becomes (Eq. 4, p. 8):

$$
\hat{\beta}_i = \alpha_3 + \gamma_{IR} IR_i + \gamma_{SS} SS_i + \gamma_G G_i + \delta' X_i + \varepsilon_i \tag{4}
$$

where $$IR_i$$, $$SS_i$$, and $$G_i$$ are treatment dummies. The estimated treatment differences map to the three channels in Eq. (3). The most conservative four-control specification gives (Eq. 5, p. 8):

$$
\underbrace{-0.098}_{\Delta\hat{\beta}_G\;[\text{se}=0.035]}
= \underbrace{-0.001}_{\Delta\hat{\beta}_{IR}}
  \underbrace{-0.067}_{\Delta\hat{\beta}_{SS}}
  \underbrace{-0.031}_{\Delta\hat{\beta}_{ES}} \tag{5}
$$

**Dynamic self-selection (R4).** The round-level panel regression identifies how past decision-making errors affect subsequent voting behavior in the Self-Selection treatment (Eq. 6, p. 9):

$$
Y_{i,t} = \alpha + \beta \, \text{MostVotes}_{i,t-1} + \gamma |\text{Error}_{t-1}| + \delta \, \text{MostVotes}_{i,t-1} \times |\text{Error}_{t-1}| + \varepsilon_t \tag{6}
$$

where $$\text{MostVotes}_{i,t-1} = 1$$ if participant $$i$$ cast the most votes (and hence made the team decision) in round $$t-1$$, and $$|\text{Error}_{t-1}|$$ is the absolute team forecast error in round $$t-1$$, demeaned and standardized. The dependent variable $$Y_{i,t}$$ is either the number of votes cast in round $$t$$ (Cols 1-2) or an indicator for being the decision maker in round $$t$$ (Cols 3-4). The interaction term $$\hat{\delta}$$ captures the feedback loop: the decision maker in round $$t-1$$ reduces their vote count in round $$t$$ by 4.44 votes per standard-deviation increase in the team forecast error (Table 4, Col 1).

**Field overreaction measurement (R6).** For each fund $$j$$, the fund's sensitivity of trades to past returns is estimated by a panel regression (Eqs. 8-9, p. 12):

$$
\text{trade}_{s,j,t+1} = \alpha_j + \beta_j^X r_{s,t-4\to t} + \gamma_j^T C_{s,t} + \theta_{jt} + \varepsilon_{s,j,t+1} \tag{8}
$$

$$
\text{trade}_{s,j,t+1} \;\equiv\; \frac{(\text{shares}_{s,j,t+1} - \text{shares}_{s,j,t+1}^{\text{sp(t-adj)}}) P_{s,t+1}}{TNA_{j,t+1}} \tag{9}
$$

where $$r_{s,t-4\to t} = \sum_{l=0}^{3} w_l r_{s,t-l}$$ is the exponentially-weighted four-quarter past return of stock $$s$$ (weights from Greenwood and Shleifer (2014), $$\lambda = 0.56$$), $$C_{s,t}$$ is a vector of stock controls (momentum, stock characteristics), $$\theta_{jt}$$ is a fund-quarter fixed effect, and $$TNA_{j,t+1}$$ is fund net assets. A positive $$\hat{\beta}_j^X$$ characterizes extrapolators; a negative $$\hat{\beta}_j^X$$ characterizes contrarians.

**Team transmission (R6).** The team overreaction $$\hat{\beta}_j^{TM}$$ is regressed on the statistical counterfactual $$\hat{\beta}_j^{CF}$$ (Eq. 10, p. 13):

$$
\hat{\beta}_j^{TM} = \alpha + \delta_0 \hat{\beta}_j^{CF} + \delta_1 \hat{\beta}_j^{CF} \times D_j^E + \delta_2 D_j^E + \delta_3 C_j + \varepsilon_j \tag{10}
$$

where $$D_j^E = 1$$ for extrapolative teams ($$\hat{\beta}_j^{CF} > 0$$) and $$C_j$$ are fund controls. Full transmission of overreaction for extrapolative teams implies $$\delta_0 + \delta_1 = 1$$; attenuation implies $$\delta_0 + \delta_1 < 1$$. Contrarian behavior is fully transmitted if $$\delta_0 = 1$$. The IV estimate (Table 8, Col 7) gives $$\delta_0 + \delta_1 \approx 0.45$$; the null $$\delta_0 + \delta_1 = 1$$ is rejected at $$p = 0.015$$ (IV Col 7) and $$p = 0.018$$ (IV Col 8).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Lab experiment data (Labvanced / Prolific, 2024) | Primary data for Sections 2-2.5: 1,512 participants, four treatments, 20 prediction rounds each; chat transcripts analyzed by LLM | No page yet (original data; replication package on Mendeley Data) |
| CRSP monthly stock returns (via WRDS) | Quarterly stock-level returns for the fund trading regression (Eq. 8); past four-quarter return predictor | [WRDS](/wiki/licensed/wrds/) (licensed) |
| Thomson Reuters Mutual Fund Holdings (via WRDS) | Quarterly holdings of US stocks per fund; used to construct the split-adjusted trade measure (Eq. 9) | [WRDS](/wiki/licensed/wrds/) (licensed) |
| Morningstar | Fund investment objectives, fund family, expense ratios, fund age; used as controls in the field analysis | [Morningstar](/wiki/licensed/morningstar/) (licensed) |
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
