---
title: "Leaving School VA on the Table: Ainsworth, Dehejia, Pop-Eleches & Urquiola (2023)"
description: >-
  Distilled: Romanian households leave roughly one standard deviation of school
  value added unexploited when choosing high school tracks; incomplete
  information and preferences for other track attributes contribute,
  with preferences explaining 83 percent of the gap that would remain after full
  information correction. An information RCT raises value added by 0.12 SD for
  low-achieving students (out of 1 SD potential); a rank-ordered logit and
  counterfactual simulation decompose the residual. American Economic Review
  2023, AEA open access. Twenty-one core results with source locators, datasets used,
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
    - household beliefs about school value added
    - characteristics of assigned high school track
    - experimental sample covariate balance
  outcomeClass: [educational-achievement, educational-choices]
  license: "open access (AEA open access policy for 2023 publications; Crossref returned no license block 2026-06-24; specific CC variant not confirmed in this session)"
  licenseShort: AEA open access
  access: open
  machineAccess: "open (AEA website, 2026-06-24; freely accessible under AEA 2023 open access policy)"
  redistribution: extract-only
  resultsCount: 21
  citedByCount: 32
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment, panel-regression, regression-discontinuity-design, rank-ordered-logit]
    identification: randomized
  contributionType: [new-fact, new-data, measurement]
  mechanisms: [information-asymmetry, multidimensional-preferences]
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
    - { ref: R1, outcome: academic value added of chosen high school track, metric: sd-effect, value: "mean percentile rank of chosen track = 67.1 among feasible tracks; potential gain from switching to highest-VA option = 1.01 SD = 12 pp baccalaureate pass probability (2019 SD)", direction: negative, vsBenchmark: below the maximum VA available in the feasible choice set by ~1 SD }
    - { ref: R2, outcome: academic value added of chosen high school track, metric: correlation, value: "overall VA-selectivity correlation = 0.562; most selective third coefficient = -0.243 (SE 0.024)", direction: mixed, vsBenchmark: positive for least and moderately selective tracks; negative for most selective third }
    - { ref: R3, outcome: household beliefs about school value added, metric: r-squared, value: "mean absolute error of VA beliefs = 1.1 within-town quintiles; R-squared of household VA scores on true VA quintile = 0.17 (vs 0.33 for selectivity)", direction: negative, vsBenchmark: households roughly 2x more accurate on selectivity than on VA }
    - { ref: R4, outcome: academic value added of chosen high school track, metric: sd-effect, value: "all students: 0.048 SD (SE 0.025, sig. 10%); low-achieving: 0.121 SD (SE 0.049, sig. 5%); high-achieving: -0.002 SD (insig.)", direction: positive, vsBenchmark: information treatment vs control group, regression (1) }
    - { ref: R5, outcome: academic value added of chosen high school track, metric: sd-effect, value: "students ineligible for their two top baseline choices: 0.184 SD (SE 0.065, sig. 1%) = 2.21 pp baccalaureate pass probability", direction: positive, vsBenchmark: near-zero effect for students eligible for either of their two top baseline choices }
    - { ref: R6, outcome: academic value added of chosen high school track, metric: sd-effect, value: "fully correcting beliefs raises VA by 0.13-0.20 SD for low-achievers (17-25% of potential) and 0.10-0.23 SD for high-achievers (11-24%) across four model specifications", direction: positive, vsBenchmark: "17-25% of the 1.01 SD potential gain; preferences account for remaining 75-83%" }
    - { ref: R7, outcome: household preference rankings for school tracks, metric: coefficient, value: "rank-ordered logit: curricular focus = 0.931 (SE 0.071); peer quality = 0.344 (SE 0.069); VA-pass bacc. = 0.337 (SE 0.082); location = 0.276 (SE 0.069); all sig. at 1%; R-squared = 0.33", direction: positive, vsBenchmark: curricular focus preference ~3x the VA-pass coefficient; 83% of unexploited VA under accurate beliefs is due to preferences (Table 15, col. 5) }
    - { ref: R8, outcome: academic value added of chosen high school track, metric: sd-effect, value: "mean chosen-track selectivity rank = 81.0th percentile; potential selectivity increase = 0.32 SD versus 1.01 SD for value added", direction: positive, vsBenchmark: households leave less selectivity unexploited than value added }
    - { ref: R9, outcome: household beliefs about school value added, metric: coefficient, value: "VA belief errors: 1.19 quintiles for low-achieving and 1.09 for high-achieving households; score R-squared = 0.12 and 0.20, respectively; favored-track overestimation = 0.64 and 0.63 quintiles", direction: mixed, vsBenchmark: high-achieving households are more accurate; both groups overestimate their two favored tracks }
    - { ref: R10, outcome: academic value added of chosen high school track, metric: sd-effect, value: "ineligible students: low-achieving effect = 0.204 SD (SE 0.069); high-achieving = -0.023 SD (SE 0.123, insignificant); eligible low-achieving = 0.035 SD (SE 0.058)", direction: mixed, vsBenchmark: treatment gains are concentrated among low-achieving students who miss both top choices }
    - { ref: R11, outcome: characteristics of assigned high school track, metric: coefficient, value: "ineligible students: technical-track attendance effect = -0.069 (SE 0.033); selectivity = 0.006 (SE 0.050), peer SES = -0.009 (SE 0.052), and location quality = 0.073 (SE 0.086)", direction: mixed, vsBenchmark: other listed track characteristics show no statistically significant changes }
    - { ref: R12, outcome: household beliefs about school value added, metric: coefficient, value: "treatment effect on absolute VA-belief error = -0.055 quintiles overall (SE 0.034, insignificant); -0.101 below top two (SE 0.045); -0.181 below top five (SE 0.063)", direction: negative, vsBenchmark: treatment improves accuracy for less-preferred tracks, with no significant change for the top two }
    - { ref: R13, outcome: household preference rankings for school tracks, metric: coefficient, value: "VA/rank association treatment effect = 0.049 overall (SE 0.026); 0.062 below the top two (SE 0.023); -0.072 for the top two (SE 0.103)", direction: mixed, vsBenchmark: strongest significant increase is among tracks below the top two baseline choices; the estimate for those two tracks is negative and insignificant }
    - { ref: R14, outcome: household preference rankings for school tracks, metric: coefficient, value: "horse-race model: VA-college = 0.347 (SE 0.082); VA-wages = 0.320 (SE 0.069); VA-pass = 0.013 (SE 0.083); teacher quality = -0.026 (SE 0.080)", direction: mixed, vsBenchmark: college and wage value added remain significant; baccalaureate-pass value added and teacher quality are insignificant }
    - { ref: R15, outcome: academic value added of chosen high school track, metric: sd-effect, value: "remaining potential VA gain = 0.44 SD with VA and curricular focus only; 0.57 SD adding peer quality; 0.69 SD with all attributes", direction: positive, vsBenchmark: preference dimensions account for a substantial part of the residual gap }
    - { ref: R16, outcome: academic value added of chosen high school track, metric: correlation, value: "main track-year pass-probability measure correlates above 0.9 with each alternative value-added measure", direction: positive, vsBenchmark: alternative measures include student performance percentile and imputed exam score }
    - { ref: R18, outcome: academic value added of chosen high school track, metric: r-squared, value: almost 80% of variation in true value added predicted out of sample by local linear forest, direction: positive, vsBenchmark: out-of-sample forecasts for years with observed value added }
    - { ref: R20, outcome: experimental sample covariate balance, metric: p-value, value: "joint balance test p-value = 0.722; none of the individual balance differences is statistically significant", direction: none, vsBenchmark: treatment versus control groups in the experimental sample }
    - { ref: R21, outcome: household preference rankings for school tracks, metric: coefficient, value: "in separate specifications, VA-college = 0.519 (SE 0.073) and VA-wages = 0.485 (SE 0.064), each significant at 1%; teacher quality = 0.180 (SE 0.088), significant at 5%", direction: positive, vsBenchmark: each is included separately alongside location, siblings/friends, peer quality, and curricular focus }
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
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read full source PDF (pp. 1049-1082); added fourteen Core results rows and expanded findings, mechanisms, and empirical specification coverage. Additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 21 Core results rows, equations, specifications, classifications, findings, prose, and frontmatter against the PDF. Corrected R5's subgroup attribution, R21's significance level, R13's finding direction, R3/R9 table-page locators, and equation notation; clarified the preference-channel comparison. Table locators and related-work locatability checked; no page-specific locator flags or missing cites." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210949", checked: "2026-06-24", by: "paper-distiller (claude-sonnet-4-6)", found: "license[] returned as empty array; no explicit CC block recorded in Crossref; AEA open access policy (2022+) applies to 2023 publications but specific CC variant not confirmed in this session" }
  rightsSignalConflict: false
---

**What this is.** The core results, the model, and the method from the paper in condensed form: enough to know what it found and how. To replicate or extend, read the full source at [doi.org/10.1257/aer.20210949](https://doi.org/10.1257/aer.20210949).

## TL;DR

Romanian households leave roughly one standard deviation of academic value added (VA) unexploited when choosing among high school tracks. Two candidate explanations are examined: households may lack information about which schools add the most academic value, or they may have genuine preferences for other school characteristics. The authors conduct a clustered information RCT - distributing VA rankings at baseline survey sessions - and find the treatment raises the VA of assigned tracks mostly for low-achieving students who were rejected by their top baseline choices (0.12 SD for low-achieving students overall; 0.20 SD for low-achieving students ineligible for their two top choices). For the full ineligible group, the estimate is 0.18 SD. A rank-ordered logit estimated on household preference rankings reveals that preferences for curricular focus are much stronger than those for academic VA; the peer-quality coefficient is similar in size to the VA coefficient. Counterfactual simulations imply that fully correcting information would close only 17-25 percent of the VA gap for low-achieving students; preferences for other school traits account for 83 percent of the remaining gap.

## Core results

Magnitudes and significance are as reported; \* / \*\* / \*\*\* = 10% / 5% / 1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Households choose tracks at the 67th percentile of VA in their feasible sets; the mean potential gain from switching to the highest-VA option is 1 standard deviation | Table 4, Panel B-C, p. 1062 | Mean percentile rank = 67.1 (all students); potential increase = 1.01 SD = 12 pp baccalaureate pass probability (2019 SD) |
| R2 | VA and selectivity are positively correlated for less- and moderately-selective tracks but negatively correlated for the most selective third | Table 3, Figure 1, p. 1060 | Overall correlation = 0.562 (SE 0.005); most selective third: coefficient = -0.243 (SE 0.024) |
| R3 | Households' VA beliefs are substantially inaccurate: scores are off by 1.1 within-town quintiles on average and explain only 17 percent of the variation in true VA | Tables 5-6, p. 1064 | Mean absolute error = 1.13 quintiles; R-squared on true VA quintile = 0.17 (VA); 0.33 (selectivity) |
| R4 | The information treatment raises the VA of assigned tracks by 0.05 SD for all students (10%) and 0.12 SD for low-achieving students (5%); no significant effect for high-achieving students | Table 7, p. 1066 | All: 0.048 SD (SE 0.025)\*; low-achieving: 0.121 SD (SE 0.049)\*\*; high-achieving: -0.002 SD (insig.) |
| R5 | Among students ineligible for their two top baseline choices, the treatment raises VA by 0.18 SD = 2.21 pp baccalaureate probability (1%) | Table 8, p. 1067 | 0.184 SD (SE 0.065)\*\*\* for the full ineligible group; near-zero for those eligible for either of their two top baseline choices. Among low-achieving students in the ineligible group, the effect is 0.204 SD (SE 0.069), or 2.45 pp (Table 9, p. 1068). |
| R6 | Fully correcting beliefs raises VA by 0.13-0.20 SD for low-achievers (17-25% of potential) and 0.10-0.23 SD for high-achievers (11-24%), across four model specifications | Table 14, p. 1078 | Change in VA: 0.13-0.20 SD (low-achieving); 0.10-0.23 SD (high-achieving); share of potential increase 17-25% (low) and 11-24% (high) |
| R7 | Households have much stronger preferences for curricular focus (beta = 0.93) than for academic VA (beta = 0.34) or peer quality (beta = 0.34); 83 percent of unexploited VA under accurate beliefs is due to preferences | Table 13, col. 1, p. 1074; Table 15, col. 5, p. 1079 | All rank-ordered logit coefficients sig. at 1%; R-squared = 0.33; 83% of VA left on table under accurate beliefs is attributable to preferences for curricular focus, peer quality, and other traits |
| R8 | Households come closer to maximizing track selectivity than value added | Table 4, Panels B-C, p. 1062 | Mean chosen-track selectivity rank = 81.0th percentile; potential selectivity increase = 0.32 SD, compared with a 1.01 SD potential increase in value added |
| R9 | Belief accuracy varies by achievement and favored tracks are overestimated | Tables 5-6, p. 1064; text p. 1065 | VA belief errors: 1.19 quintiles for low-achieving and 1.09 for high-achieving households; VA-score R-squared = 0.12 and 0.20, respectively; favored-track VA overestimation = 0.64 and 0.63 quintiles |
| R10 | Treatment effects among students missing their top choices are concentrated among low-achieving students | Table 9, p. 1068 | Ineligible students: low-achieving effect = 0.204 SD (SE 0.069, 1% level); high-achieving = -0.023 SD (SE 0.123, insignificant); eligible low-achieving = 0.035 SD (SE 0.058) |
| R11 | Information changes curricular track choice but produces little change in other track traits | Table 10, p. 1068 | Among students ineligible for both top choices, technical-track attendance falls 0.069 (SE 0.033); effects on selectivity = 0.006 (SE 0.050), peer SES = -0.009 (SE 0.052), and location quality = 0.073 (SE 0.086) |
| R12 | Information improves accuracy for less-preferred tracks, not the top two | Table 11, p. 1070 | Treatment effect on absolute VA-belief error = -0.055 quintiles overall (SE 0.034, insignificant), -0.101 for tracks below the top two (SE 0.045), and -0.181 below the top five (SE 0.063) |
| R13 | Information raises the association between VA and preference ranks for less-preferred tracks | Table 12, p. 1071 | Treatment interaction = 0.049 overall (SE 0.026), 0.062 for tracks below the top two (SE 0.023), and -0.072 for the top two (SE 0.103) |
| R14 | In the horse race, households value college and wage VA more than baccalaureate-pass VA | Table 13, col. 5, p. 1074 | VA-college = 0.347 (SE 0.082); VA-wages = 0.320 (SE 0.069); VA-pass = 0.013 (SE 0.083); teacher quality = -0.026 (SE 0.080) |
| R15 | Preference counterfactuals leave substantial value added unused even with accurate beliefs | Table 15, p. 1079 | Mean residual potential VA gain = 0.44 SD with VA and curricular focus only, 0.57 SD adding peer quality, and 0.69 SD with all attributes |
| R16 | The paper's alternative value-added measures track the main measure closely | Text p. 1055 | Main track-year pass-probability measure has correlation above 0.9 with each alternative value-added measure |
| R17 | Value-added estimates are reported to match RD causal effects at track admissions cutoffs | Text p. 1055 | The article says all measures closely match the RD causal effects; no numeric RD estimates are reported in the article text |
| R18 | The local linear forest predicts most of the variation in value added out of sample | Text p. 1055 | Out-of-sample model predicts almost 80% of the variation in tracks' true value added |
| R19 | The authors find no evidence that treatment effects are smaller in towns with more study-school coverage | Text p. 1066 | No evidence of informational spillovers is reported; no numerical estimate is printed in the article |
| R20 | Experimental treatment and control groups pass the reported joint balance test | Text p. 1058 | Joint test p-value = 0.722; none of the individual balance differences is statistically significant |
| R21 | Households value college and wage value added when those outcomes enter separately | Table 13, cols. 2-4, p. 1074 | VA-college = 0.519 (SE 0.073) and VA-wages = 0.485 (SE 0.064), both significant at 1%; teacher quality = 0.180 (SE 0.088), significant at 5% |

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

For inaccurate scores, the paper predicts value added as the preference-probability-weighted mean across the student's feasible set (Section VB, p. 1076):

$$
V_{i,IS} \equiv \sum_{j \in \mathcal{J}_i^e} \text{std}(V_{jt}) \cdot \frac{\exp\!\left[\sum_q \hat{\beta}_q \cdot \tilde{s}_{ij}^q\right]}{\sum_{k \in \mathcal{J}_i^e} \exp\!\left[\sum_q \hat{\beta}_q \cdot \tilde{s}_{ik}^q\right]}
$$

The accurate-beliefs version uses the same formula but replaces the inaccurate VA score with the measured within-town VA quintile. The simulation holds each household's feasible set fixed.

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
\left|\text{quint}(V_{jt}) - s_{iV_j,\text{fs}}\right| = \eta_0 + \eta_1 \cdot T_i + \eta_X' \cdot \mathbf{X}_{ij} + \eta_{ij} \tag{2}
$$

where $$\text{quint}(V_{jt})$$ is the within-town quintile of measured VA and $$s_{iV_j,\text{fs}}$$ is the follow-up-survey quality score for track $$j$$ (p. 1069, eq. 2). The effect of treatment on the association between preference ranks and VA is estimated via:

$$
\text{ppr}_{ij,\text{fs}} = \bigl(\delta_1 + \delta_2 \cdot T_i\bigr) \cdot \text{pr}(V_{jt}) + \bigl(\delta_{X,1} + \delta_{X,2} \cdot T_i\bigr)' \cdot \mathbf{X}_{ij} + \delta_{ij} \tag{3}
$$

where $$\text{ppr}_{ij,\text{fs}}$$ is the follow-up-survey percentile preference rank of track $$j$$ and $$\text{pr}(V_{jt})$$ is the within-town VA percentile rank (p. 1070, eq. 3). The coefficient of interest is $$\delta_2$$, which measures how treatment changed the association between VA and preference ranks.

**Rank-ordered logit for preference estimation.** Building on Fack, Grenet, and He (2019) for preference estimation in centralized choice mechanisms, and the heterogeneous-beliefs framework of Kapor, Neilson, and Zimmerman (2020), the preference weights $$\beta_q$$ are estimated by maximizing the log-likelihood of the top-two baseline track choices (eq. 5, p. 1073):

$$
\Pr\!\left(r_{i1}, r_{i2} \mid \mathcal{J}_i, \{s_{ij}^q\}_{q,j}\right) = \prod_{l=1}^{2} \frac{\exp\!\left(\sum_q \beta_q \cdot s_{i r_{il}}^q\right)}{\sum_{k \in \mathcal{J}_i \setminus \{r_{im}:m<l\}} \exp\!\left(\sum_q \beta_q \cdot s_{ik}^q\right)} \tag{5}
$$

Here $$\mathcal{J}_i$$ is the set of all tracks in household $$i$$'s town (the feasible choice set) and the product runs over the first two ranked choices. The denominator at stage $$l$$ excludes all tracks already ranked. Missing quality scores are imputed via a random forest. Standard errors are clustered by middle school.

The method builds on the registry terms `randomized-survey-experiment`, `panel-regression`, `regression-discontinuity-design`, and `rank-ordered-logit`. The preference-constraint channel uses the registry mechanism `multidimensional-preferences` alongside `information-asymmetry`.

## Empirical specifications

**Value added and selectivity (R2).** Table 3 reports student-weighted regressions of standardized track-year value added on standardized minimum transition score, written out from Section II (p. 1060):

$$
\text{std}(V_{jt}) = \alpha + \beta\,\text{std}(\text{MTS}_{jt}) + \varepsilon_{jt}
$$

The paper splits this specification by yearly selectivity tercile. Standard errors are clustered by town-year; the regressions have no fixed effects specified in the main-text description. The all-town sample has 5,969 town-years, 57,521 track-years, and 2,162,736 students; the survey-town sample has 720 town-years, 11,253 track-years, and 424,508 students. Regressions are weighted by student counts (Table 3, p. 1060).

**Feasible-choice gaps (R1, R8).** For each student, the chosen-track percentile is its rank by value added or selectivity within the eligible tracks divided by the number of feasible tracks. The potential gain is the feasible-set maximum less the value at the assigned track. Table 4 reports these descriptive statistics by achievement group, without a regression or standard-error estimate (p. 1062). Two percent of students in the full sample have only one feasible track.

**Belief accuracy and heterogeneity (R3, R9).** Table 5 calculates mean absolute error and mean signed bias between the household score and the within-town quintile of measured value added; Table 6 estimates the score-to-quintile relationship. Written out from the description of Table 6 (pp. 1064-1065):

$$
\text{quint}(V_{jt}) = \alpha + \beta_V s_{ij}^{V} + \varepsilon_{ij}, \qquad
\text{quint}(\text{MTS}_{jt-1}) = \alpha + \beta_P s_{ij}^{PQ} + \varepsilon_{ij}
$$

These are separate regressions for all, low-achieving, and high-achieving households. Standard errors are clustered by middle school; no fixed effects are specified. The full sample has 17,460 student-track observations and 188 clusters (Table 6, p. 1064).

**Randomized information effects on assignment and track traits (R4, R5, R10, R11).** The printed estimating equation (1) is:

$$
\text{std}(V_i) = \eta_0 + \eta_1 T_i + \eta_X' X_i + \eta_i \tag{1}
$$

The controls are an indicator for ranking a feasible track at baseline and the value added of the highest-ranked feasible baseline track, set to zero when none was ranked (footnote 27, p. 1065). The intent-to-treat sample has 2,692 assigned students in 170 middle schools and 78 matched-pair clusters; subgroup estimates split by achievement, eligibility for the two highest-ranked baseline tracks, gender, and mother's schooling (Tables 7-9, pp. 1066-1068). Table 10 applies the same equation to other track attributes, with the baseline-assigned track's value for the relevant outcome and an indicator for no feasible ranked track as controls (p. 1068). Standard errors are clustered by randomized middle-school pair. No fixed effects are specified in the printed equation.

**Information effects on beliefs and preference ranks (R12, R13).** The printed absolute-error regression (2) is:

$$
\left|\text{quint}(V_{jt}) - s_{iV_j,\text{fs}}\right| = \eta_0 + \eta_1 T_i + \eta_X' X_{ij} + \eta_{ij} \tag{2}
$$

Here the outcome is the absolute difference between measured within-town VA quintile and follow-up score. Controls include indicators for the baseline absolute score difference; estimates use 1,525 students, 4,970 student-tracks, and 76 treatment-control-pair clusters. The preference-rank regression (3) is:

$$
\text{ppr}_{ij,\text{fs}} = (\delta_1 + \delta_2 T_i)\,\text{pr}(V_{jt}) + (\delta_{X,1} + \delta_{X,2}T_i)'X_{ij} + \delta_{ij} \tag{3}
$$

The controls include indicators for baseline track-rank position interacted with treatment. Estimates use 1,533 students, 20,029 student-tracks, and 76 pair clusters. Both regressions report standard errors clustered by middle-school treatment-control pair; no fixed effects are specified in the equations (Tables 11-12, pp. 1070-1071).

**Preference estimates (R7, R14).** Utility equation (4) and the rank-ordered-logit probability (5) appear in Section V (pp. 1073-1074). The likelihood uses the first two baseline choices from 1,170 students in experimental middle schools; standard errors are clustered by middle school (150 clusters). Columns vary the VA dimension and include a horse race across all measured attributes (Table 13, p. 1074). This is a discrete-choice likelihood, so the paper does not specify fixed effects for it.

**Counterfactual information and preference mechanisms (R6, R15).** For each student and belief scenario, the preference model weights standardized track VA by predicted track-choice probabilities. The formula for inaccurate scores is displayed in Theory / model; accurate scores replace the VA scores by measured within-town quintiles (Section VB, p. 1076). Table 14 reports four belief/model specifications for 997 low-achieving and 1,680 high-achieving students (p. 1078). Table 15 sets selected preference coefficients to zero to test each trait's contribution to the residual gap; it reports mean potential VA gains in SD units for the same sample (p. 1079). These are simulated counterfactuals, not regressions, so no fixed effects or standard errors are reported.

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

Source: peer-reviewed, *American Economic Review* 113(4), April 2023. AEA open access policy applies to 2023 publications; specific Creative Commons variant not confirmed from Crossref (license field returned empty) or PDF in this session. The initial distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-24; the page was updated by gpt-6-luna on 2026-10-04. It is **not human-verified or independently reproduced**. Replication data: [doi.org/10.3886/E181263V1](https://doi.org/10.3886/E181263V1).

> Ainsworth, Robert, Rajeev Dehejia, Cristian Pop-Eleches, and Miguel Urquiola.
> "Why Do Households Leave School Value Added on the Table? The Roles of Information and Preferences."
> *American Economic Review* 113, no. 4 (April 2023): 1049-1082.
> DOI: 10.1257/aer.20210949.
> Distilled extract only; redistribution of the verbatim PDF not authorized in this session.
