---
title: "Leaving School VA on the Table: Ainsworth, Dehejia, Pop-Eleches & Urquiola (2023)"
description: >-
  Distilled: Romanian households leave roughly one standard deviation of school
  value added unexploited when choosing high school tracks; both incomplete
  information and preferences for curricular focus and peer quality contribute,
  with preferences explaining 83 percent of the gap that would remain after full
  information correction. An information RCT raises value added by 0.12 SD for
  low-achieving students (out of 1 SD potential); a rank-ordered logit and
  counterfactual simulation decompose the residual. American Economic Review
  2023, AEA open access. Seven core results with source locators, datasets used,
  the model, and the method.
sidebar:
  label: Ainsworth et al. 2023
  order: 1
tags: [paper-summary, school-choice, household-finance, information-economics,
       discrete-choice, panel-regression, open-access, peer-reviewed,
       unreplicated, data:romania-moe-admissions]
paper:
  authors: Robert Ainsworth, Rajeev Dehejia, Cristian Pop-Eleches, Miguel Urquiola
  authorList:
    - { family: Ainsworth, given: Robert, affiliation: University of Florida }
    - { family: Dehejia, given: Rajeev, orcid: "0000-0002-0927-429X", affiliation: New York University }
    - { family: Pop-Eleches, given: Cristian, orcid: "0000-0002-3451-3555", affiliation: Columbia University }
    - { family: Urquiola, given: Miguel, orcid: "0000-0001-7075-9547", affiliation: Columbia University }
  year: 2023
  venue: American Economic Review 113(4), April 2023, 1049-1082
  venueShort: AER 2023
  doi: 10.1257/aer.20210949
  jel:
    codes: [D12, D83, I21, I28]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - School Choice and Performance
    - Housing Market and Economics
    - Gender, Labor, and Family Dynamics
  dataAccess: proprietary-confidential
  outcome:
    - academic value added of chosen high school track
    - probability of passing the baccalaureate exam
    - household preference rankings for school tracks
  outcomeClass: [household-finance]
  license: "open access (AEA open access policy for 2023 publications; Crossref returned no license block 2026-06-24; specific CC variant not confirmed in this session)"
  licenseShort: AEA open access
  access: open
  machineAccess: "open (AEA website, 2026-06-24; freely accessible under AEA 2023 open access policy)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 32
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment, panel-regression, regression-discontinuity-design]
    identification: randomized
  contributionType: [new-fact, new-data, measurement]
  mechanisms: [information-asymmetry]
  introducesData: true
  scope:
    region: Romania
    assetClass: Romanian public high school tracks
    period: 2004-01..2019-12
    frequency: annual
    dataType: [administrative, survey, experimental]
    granularity: [individual]
    n: "2,162,736 students (administrative data, 2004-2017 and 2019); 3,898 students in 194 middle schools, 48 towns (survey/experiment, 2019)"
  findings:
    - ref: R1
      outcome: academic value added of chosen high school track
      metric: sd-effect
      value: "mean percentile rank of chosen track = 67.1 among feasible tracks; potential gain from switching to highest-VA option = 1.01 SD = 12 pp baccalaureate pass probability (2019 SD)"
      direction: negative
      vsBenchmark: below the maximum VA available in the feasible choice set by ~1 SD
    - ref: R2
      outcome: academic value added of chosen high school track
      metric: correlation
      value: "overall VA-selectivity correlation = 0.562; most selective third coefficient = -0.243 (SE 0.024)"
      direction: mixed
      vsBenchmark: positive for least and moderately selective tracks; negative for most selective third
    - ref: R3
      outcome: household beliefs about school value added
      metric: r-squared
      value: "mean absolute error of VA beliefs = 1.1 within-town quintiles; R-squared of household VA scores on true VA quintile = 0.17 (vs 0.33 for selectivity)"
      direction: negative
      vsBenchmark: households roughly 2x more accurate on selectivity than on VA
    - ref: R4
      outcome: academic value added of chosen high school track
      metric: sd-effect
      value: "all students: 0.048 SD (SE 0.025, sig. 10%); low-achieving: 0.121 SD (SE 0.049, sig. 5%); high-achieving: -0.002 SD (insig.)"
      direction: positive
      vsBenchmark: information treatment vs control group, regression (1)
    - ref: R5
      outcome: academic value added of chosen high school track
      metric: sd-effect
      value: "low-achieving students ineligible for both top baseline choices: 0.184 SD (SE 0.065, sig. 1%) = 2.21 pp baccalaureate pass probability"
      direction: positive
      vsBenchmark: near-zero effect for students admitted to their most-preferred baseline choices
    - ref: R6
      outcome: academic value added of chosen high school track
      metric: sd-effect
      value: "fully correcting beliefs raises VA by 0.13-0.20 SD for low-achievers (17-25% of potential) and 0.10-0.23 SD for high-achievers (11-24%) across four model specifications"
      direction: positive
      vsBenchmark: "17-25% of the 1.01 SD potential gain; preferences account for remaining 75-83%"
    - ref: R7
      outcome: household preference rankings for school tracks
      metric: coefficient
      value: "rank-ordered logit: curricular focus = 0.931 (SE 0.071); peer quality = 0.344 (SE 0.069); VA-pass bacc. = 0.337 (SE 0.082); location = 0.276 (SE 0.069); all sig. at 1%; R-squared = 0.33"
      direction: negative
      vsBenchmark: curricular focus preference ~3x the VA-pass coefficient; 83% of unexploited VA under accurate beliefs is due to preferences (Table 15, col. 5)
  resultType: new-finding
  relatesTo:
    - { cite: "Abdulkadiroğlu, Pathak, and Walters (2020)", doi: '10.1257/aer.20172040', relation: tests, note: "extends their NYC parents-value-VA question to Romania with full feasible-choice-set observation and VA measured for all options" }
    - { cite: "Hastings and Weinstein (2008)", doi: '10.1162/qjec.2008.123.4.1373', relation: extends, note: "extends their QJE school-choice information experiment to a value-added framing and adds the preference decomposition channel" }
    - { cite: "Angrist, Hull, Pathak, and Walters (2017)", doi: '10.1257/aer.p20171111', relation: builds-on, note: "adapts their RD approach to validate value added estimates against causal effects at track admissions cutoffs" }
    - { cite: "Kapor, Neilson, and Zimmerman (2020)", doi: '10.1257/aer.20170129', relation: builds-on, note: "related model of heterogeneous beliefs in a centralized school choice market" }
    - { cite: "Fack, Grenet, and He (2019)", doi: '10.1257/aer.20151422', relation: builds-on, note: "preference estimation in a centralized serial dictatorship mechanism; this paper adds an information experiment and a VA simulation" }
  openQuestions:
    - "Whether information interventions change only students' information sets or also their preferences, with different implications for student well-being and schooling outcomes (p. 1081)."
    - "Whether larger or more sustained information delivery would produce larger effects on track assignments and value added (p. 1080)."
    - "What general equilibrium incentive effects on schools would arise if households more strongly demanded higher value added, given that schools attracting VA-seeking households would have incentives to invest in academic quality rather than selectivity or peer composition (Section VI, p. 1080)."
  replicationCode:
    url: https://doi.org/10.3886/E181263V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-24", role: extracted, note: "Full text read (pp. 1049-1082); seven results extracted from source PDF. Not human-verified. Not reproduced. Replication data available at https://doi.org/10.3886/E181263V1 but not run here." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; all 7 core-result rows confirmed (Tables 3-8, 13-15). Two fixes applied: (1) JEL code I28 added to frontmatter (PDF abstract lists D12, D83, I21, I28); (2) X_i covariate list in eq. (1) corrected from three items to two per footnote 27 (VA of baseline-assigned track and indicator for ranked-feasible-track; the wiki had listed the same covariate twice under different names)."
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210949", checked: "2026-06-24", by: "paper-distiller (claude-sonnet-4-6)", found: "license[] returned as empty array; no explicit CC block recorded in Crossref; AEA open access policy (2022+) applies to 2023 publications but specific CC variant not confirmed in this session" }
  rightsSignalConflict: false
---

**What this is.** The core results, the model, and the method from the paper in condensed form: enough to know what it found and how. To replicate or extend, read the full source at [doi.org/10.1257/aer.20210949](https://doi.org/10.1257/aer.20210949).

## TL;DR

Romanian households leave roughly one standard deviation of academic value added (VA) unexploited when choosing among high school tracks. Two candidate explanations are examined: households may lack information about which schools add the most academic value, or they may have genuine preferences for other school characteristics. The authors conduct a clustered information RCT - distributing VA rankings at baseline survey sessions - and find the treatment raises the VA of assigned tracks mostly for low-achieving students who were rejected by their top baseline choices (0.12 SD for all low-achieving students; 0.18 SD for the ineligible subgroup). A rank-ordered logit estimated on household preference rankings reveals that preferences for curricular focus and peer quality are far stronger than preferences for academic VA. Counterfactual simulations imply that fully correcting information would close only 17-25 percent of the VA gap for low-achieving students; preferences for other school traits account for 83 percent of the remaining gap.

## Core results

Magnitudes and significance are as reported; \* / \*\* / \*\*\* = 10% / 5% / 1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Households choose tracks at the 67th percentile of VA in their feasible sets; the mean potential gain from switching to the highest-VA option is 1 standard deviation | Table 4, Panel B-C, p. 1062 | Mean percentile rank = 67.1 (all students); potential increase = 1.01 SD = 12 pp baccalaureate pass probability (2019 SD) |
| R2 | VA and selectivity are positively correlated for less- and moderately-selective tracks but negatively correlated for the most selective third | Table 3, Figure 1, p. 1060 | Overall correlation = 0.562 (SE 0.005); most selective third: coefficient = -0.243 (SE 0.024) |
| R3 | Households' VA beliefs are substantially inaccurate: scores are off by 1.1 within-town quintiles on average and explain only 17 percent of the variation in true VA | Tables 5-6, pp. 1063-1064 | Mean absolute error = 1.13 quintiles; R-squared on true VA quintile = 0.17 (VA); 0.33 (selectivity) |
| R4 | The information treatment raises the VA of assigned tracks by 0.05 SD for all students (10%) and 0.12 SD for low-achieving students (5%); no significant effect for high-achieving students | Table 7, p. 1066 | All: 0.048 SD (SE 0.025)\*; low-achieving: 0.121 SD (SE 0.049)\*\*; high-achieving: -0.002 SD (insig.) |
| R5 | Among low-achieving students ineligible for their two top baseline choices, the treatment raises VA by 0.18 SD = 2.21 pp baccalaureate probability (1%) | Table 8, p. 1067 | 0.184 SD (SE 0.065)\*\*\* for the ineligible-for-top-two subgroup; near-zero for those admitted to their most-preferred baseline choice |
| R6 | Fully correcting beliefs raises VA by 0.13-0.20 SD for low-achievers (17-25% of potential) and 0.10-0.23 SD for high-achievers (11-24%), across four model specifications | Table 14, p. 1078 | Change in VA: 0.13-0.20 SD (low-achieving); 0.10-0.23 SD (high-achieving); share of potential increase 17-25% (low) and 11-24% (high) |
| R7 | Households have much stronger preferences for curricular focus (beta = 0.93) than for academic VA (beta = 0.34) or peer quality (beta = 0.34); 83 percent of unexploited VA under accurate beliefs is due to preferences | Table 13, col. 1, p. 1074; Table 15, col. 5, p. 1079 | All rank-ordered logit coefficients sig. at 1%; R-squared = 0.33; 83% of VA left on table under accurate beliefs is attributable to preferences for curricular focus, peer quality, and other traits |

**Overall (paper's conclusion).** Both information and preferences play a role in explaining why households leave VA on the table. Providing information raises the VA of tracks for some students, but only for low-achieving students who were rejected by their top choices. Even fully correcting information would leave most of the VA gap in place because households have strong preferences for curricular focus and peer quality that cause them to forego schools with high VA. Simply making VA information available is unlikely to close the gap.

## Theory / model

The paper has no formal equilibrium model; it investigates two candidate explanations empirically. The preference structure is specified as a linear expected utility function over quality scores (p. 1073, eq. 4):

$$
U_{ij} = \sum_{q} \beta_q \cdot s_{ij}^q + \epsilon_{ij} \tag{4}
$$

where $$U_{ij}$$ is household $$i$$'s expected utility from track $$j$$, $$s_{ij}^q$$ is the household's baseline survey score for track $$j$$ on quality dimension $$q$$ (location, peer quality, VA on the baccalaureate, curricular focus, siblings and friends; scale 1 to 5), $$\beta_q$$ is the preference weight, and $$\epsilon_{ij}$$ follows a Type I extreme value distribution. The model assumes households rank tracks by expected utility and that the serial dictatorship mechanism is incentive compatible, so submitted rankings truthfully reveal preferences.

Value added $$V_{jt}$$ is a track-year effect on the probability of passing the baccalaureate exam, estimated via selection-on-observables (Rothstein 2010). The measures are validated against regression discontinuity estimates at track admissions cutoffs following Angrist, Hull, Pathak, and Walters (2017): school-specific RD cutoffs (the minimum transition score for admission) generate quasi-random variation in track attendance, and the paper shows that all VA measures closely match the resulting causal estimates. For cohorts without baccalaureate data (2015-2017, 2019), VA is extended via local linear forests (Athey et al. 2019), which explain almost 80 percent of the variation in true VA out of sample.

The counterfactual comparison asks what track choices would look like if households had accurate VA beliefs. Two predicted VA values are compared for each student:

- $$V_{i,IS}$$: weighted-average VA across the feasible set using the preference model with inaccurate (baseline survey) scores for VA
- $$V_{i,AS}$$: the same but replacing inaccurate VA scores with within-town quintiles of measured VA

The difference $$V_{i,AS} - V_{i,IS}$$ estimates the effect of accurate beliefs, holding preferences constant.

**Identification.** Sections II-III are purely descriptive (selection-on-observables): they document the VA gap and the accuracy of households' beliefs without claiming causal identification. Section IV is identified by the clustered RCT (randomization at the middle school level, within matched pairs). Section V (preference estimation) is identified by within-town variation in quality scores and track choice under the rank-ordered logit.

## Method

Three methodological components produce the paper's results.

**Information experiment.** Middle schools were assigned to treatment or control by a matched-pair clustered randomization. At the end of the baseline survey session, all schools received a flyer with links to government admissions websites; treatment schools additionally received a ranking of the town's high school tracks by VA. The main treatment effect equation (eq. 1, p. 1065) is:

$$
\text{std}(V_i) = \eta_0 + \eta_1 \cdot T_i + \eta_X' \cdot \mathbf{X}_i + \eta_i \tag{1}
$$

where $$\text{std}(V_i)$$ is the standardized VA of student $$i$$'s assigned track, $$T_i$$ is the treatment indicator, and $$\mathbf{X}_i$$ includes the VA of the track to which the student would have been assigned based on the baseline preference ranking (equal to the VA of the highest-ranked feasible track, set to zero if no feasible track was ranked) and an indicator for whether the student ranked a feasible track. Standard errors are clustered by middle school treatment-control pairs (78 clusters).

The treatment effect on the accuracy of VA beliefs is estimated via:

$$
\left|\text{quint}(V_{jt}) - s_{ij,\text{fs}}^V\right| = \eta_0 + \eta_1 \cdot T_i + \eta_X' \cdot \mathbf{X}_{ij} + \eta_{ij} \tag{2}
$$

where $$\text{quint}(V_{jt})$$ is the within-town quintile of measured VA and $$s_{ij,\text{fs}}^V$$ is the follow-up-survey quality score for track $$j$$ (p. 1069, eq. 2). The effect of treatment on the association between preference ranks and VA is estimated via:

$$
\text{ppr}_{ij,\text{fs}} = \bigl(\delta_1 + \delta_2 \cdot T_i\bigr) \cdot \text{pr}(V_{jt}) + \bigl(\delta_{X,1} + \delta_{X,2} \cdot T_i\bigr)' \cdot \mathbf{X}_{ij} + \delta_{ij} \tag{3}
$$

where $$\text{ppr}_{ij,\text{fs}}$$ is the follow-up-survey percentile preference rank of track $$j$$ and $$\text{pr}(V_{jt})$$ is the within-town VA percentile rank (p. 1070, eq. 3). The coefficient of interest is $$\delta_2$$, which measures how treatment changed the association between VA and preference ranks.

**Rank-ordered logit for preference estimation.** Building on Fack, Grenet, and He (2019) for preference estimation in centralized choice mechanisms, and the heterogeneous-beliefs framework of Kapor, Neilson, and Zimmerman (2020), the preference weights $$\beta_q$$ are estimated by maximizing the log-likelihood of the top-two baseline track choices (eq. 5, p. 1073):

$$
\Pr\!\left(r_{i1}, r_{i2} \mid \mathcal{J}_i, s_{ij}^q\right) = \prod_{l=1}^{2} \frac{\exp\!\left(\sum_q \hat{\beta}_q \cdot s_{il}^q\right)}{\sum_{b \in \mathcal{J}_i \setminus \{r_{i,m:m<l}\}} \exp\!\left(\sum_q \hat{\beta}_q \cdot s_{ib}^q\right)} \tag{5}
$$

Here $$\mathcal{J}_i$$ is the set of all tracks in household $$i$$'s town (the feasible choice set) and the product runs over the first two ranked choices. The denominator at stage $$l$$ excludes all tracks already ranked. Missing quality scores are imputed via a random forest. Standard errors are clustered by middle school.

This page's `proposedVocab` stages `rank-ordered-logit` as a `builds-from` term (distinct from the fixed-effects `conditional-logit` in the registry), and `multidimensional-preferences` as a mechanism term for the preference-constraint channel. The method builds on `randomized-survey-experiment`, `panel-regression`, and `regression-discontinuity-design` from the registry.

## Empirical specifications

**VA-selectivity correlation (R2).** OLS of standardized $$V_{jt}$$ on standardized minimum transition score $$\text{MTS}_{jt}$$, weighted by student count, SE clustered by town-year. Table 3 also presents split-sample regressions by tercile of selectivity to capture the nonlinearity in Figure 1 (2,162,736 students, 5,969 town-years, all towns; 424,508 students, 720 town-years, survey towns).

**Household choice patterns (R1, R3).** Table 4 computes for each student the percentile rank of their chosen track among feasible options (by VA and by selectivity), and the standard deviation gain available from switching to the highest-VA option. Table 5 computes the mean absolute error between household quality scores and within-town quintiles of true VA. Table 6 regresses true quintiles on household scores; SE clustered by middle school (17,460 student-tracks, 188 clusters).

**Treatment effects on track VA (R4, R5).** Regression (1) on the experimental sample (2,692 students, 78 clusters). Subgroup regressions split by achievement (above/below national transition-score median) and by eligibility for the two highest-ranked baseline choices. The treatment is intent-to-treat (flyer distribution at the session); 85 percent of students were assigned to a track.

**Treatment effects on beliefs and rankings.** Regression (2) on 1,525 students with follow-up survey scores; regression (3) on 1,533 students. Both cluster SE by treatment-control pairs. Columns in Table 11 (beliefs) and Table 12 (rankings) distinguish tracks by position in the baseline preference ranking, revealing that effects exist only for tracks other than the household's two top baseline choices.

**Discrete choice preference estimates (R7).** Rank-ordered logit (eq. 5) on 1,170 students in experimental middle schools, using baseline survey scores. Column (1) of Table 13 includes five quality dimensions; columns (2)-(5) explore alternative VA dimensions; column (5) includes all five simultaneously. SE clustered by middle school (150 clusters).

**Counterfactual simulation (R6).** For each student in the feasible set, the model computes the weighted-average VA under inaccurate scores ($$V_{i,IS}$$) and accurate VA scores ($$V_{i,AS}$$):

$$
V_{i,IS} = \sum_{j \in \mathcal{J}_i^c} \text{std}(V_{jt}) \cdot \frac{\exp\!\left(\sum_q \hat{\beta}_q \cdot \bar{s}_{ij}^q\right)}{\sum_{k \in \mathcal{J}_i^c} \exp\!\left(\sum_q \hat{\beta}_q \cdot \bar{s}_{ik}^q\right)}
$$

(Section VB, p. 1076; $$\bar{s}_{ij}^q$$ denotes inaccurate VA scores and baseline scores for other dimensions; $$\mathcal{J}_i^c$$ excludes tracks newly created in 2019 for which no beliefs were elicited). Table 14 presents the mean difference $$V_{i,AS} - V_{i,IS}$$ across four model specifications. Table 15 decomposes residual unexploited VA by zeroing out selected $$\hat{\beta}_q$$ to isolate the contribution of preferences for each dimension.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Romanian Ministry of Education administrative microdata (2004-2017, 2019 cohorts) | Track-year VA estimation; student demographics, transition scores, middle school GPA, assigned tracks, baccalaureate performance; 2,162,736 students | no page yet |
| Baseline survey of parents (194 middle schools, 48 towns, 3,898 students, 2019) | Households' quality scores for tracks on eight dimensions, intended preference rankings, student characteristics; primary data collected by the authors | no page yet (primary data, collected by authors) |
| Endline (follow-up) survey of parents (2019) | Final submitted preference rankings; post-intervention quality scores for tracks | no page yet (primary data, collected by authors) |

Sample: baccalaureate outcomes available for 2004-2014 cohorts; machine-learning VA extension covers 2015-2017 and 2019. Survey and experiment conducted in 2019 in 48 towns selected for moderate size (7-28 tracks) and VA forecastability. Experimental sample (after removing schools that withdrew permission): 2,692 assigned students in 170 middle schools, 45 towns.

## When to read the full paper

Read the [source](https://doi.org/10.1257/aer.20210949) if you are: (i) estimating or validating school value added in a serial dictatorship setting, including the RD validation approach following Angrist, Hull, Pathak, and Walters (2017) (Sections I-II); (ii) studying how information provision affects school or college choices and want a rigorous mechanism decomposition separating information from preferences, building on Hastings and Weinstein (2008) (Section IV); (iii) estimating rank-ordered logit preference weights for multidimensional product quality in a centralized choice mechanism, extending Fack, Grenet, and He (2019) (Section V); or (iv) running simulation-based counterfactuals to separate information and preference constraints on household choices, in the spirit of Kapor, Neilson, and Zimmerman (2020). The Tables 13-15 combination (preference estimation, simulation, and decomposition by quality dimension) is particularly citable. The prior question of whether parents value school effectiveness is studied for New York City by Abdulkadiroğlu, Pathak, and Walters (2020); this paper provides complementary evidence for Romania with the additional advantage of observing the full feasible choice set.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(4), April 2023. AEA open access policy applies to 2023 publications; specific Creative Commons variant not confirmed from Crossref (license field returned empty) or PDF in this session. This distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-24 and is **not human-verified or independently reproduced**. Replication data: [doi.org/10.3886/E181263V1](https://doi.org/10.3886/E181263V1).

> Ainsworth, Robert, Rajeev Dehejia, Cristian Pop-Eleches, and Miguel Urquiola.
> "Why Do Households Leave School Value Added on the Table? The Roles of Information and Preferences."
> *American Economic Review* 113, no. 4 (April 2023): 1049-1082.
> DOI: 10.1257/aer.20210949.
> Distilled extract only; redistribution of the verbatim PDF not authorized in this session.
