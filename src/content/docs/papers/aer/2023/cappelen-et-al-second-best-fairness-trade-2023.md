---
title: "Second-Best Fairness: Cappelen, Cappelen & Tungodden (2023)"
description: >-
  Distilled: Large-scale experimental evidence from 26,500 spectators in the
  US and Norway on how people trade off false positives against false
  negatives in second-best fairness decisions. A majority are false negative
  averse across three economic environments, with substantial heterogeneity by
  country and political affiliation. American Economic Review 2023, AEA
  copyright. Twelve core results with source locators, datasets used, the
  theoretical model, and the estimation strategy.
sidebar:
  label: Cappelen et al. 2023
  order: 1
tags: [paper-summary, behavioral-economics, fairness, redistribution,
       social-insurance, political-economy,
       peer-reviewed, unreplicated]
paper:
  authors: Alexander W. Cappelen, Cornelius Cappelen, and Bertil Tungodden
  authorList:
    - { family: Cappelen, given: "Alexander W.", orcid: "0000-0002-3489-7085", affiliation: Norwegian School of Economics }
    - { family: Cappelen, given: Cornelius, orcid: "0000-0003-2725-0547", affiliation: University of Bergen }
    - { family: Tungodden, given: Bertil, orcid: "0000-0002-4182-8491", affiliation: Norwegian School of Economics }
  year: 2023
  venue: American Economic Review 113(9), September 2023, 2458-2485
  venueShort: AER 2023
  doi: 10.1257/aer.20211015
  jel:
    codes: [D63, D72, D78, H23, I38]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - "Gender, Labor, and Family Dynamics"
    - "Experimental Behavioral Economics Studies"
    - "Economic Policies and Impacts"
  dataAccess: hand-collected
  outcome:
    - spectator probability of paying (binary decision)
    - share of false negative averse and false positive averse spectators
    - policy attitudes toward unemployment benefits and income redistribution
  outcomeClass: [social-preferences]
  license: >-
    AEA copyright; the three-year embargo expired September 2026. The publisher
    PDF endpoint returned 403 on 2026-10-04; Crossref listed no license block
    (checked 2026-06-24); no Creative Commons licence identified
  licenseShort: AEA copyright
  access: paywalled
  machineAccess: "blocked-403 (AEA publisher PDF endpoint; 2026-10-04)"
  redistribution: extract-only
  resultsCount: 12
  citedByCount: 34
  introducesData: true
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment]
    identification: randomized
  contributionType: [new-theory, new-fact]
  mechanisms: [second-best-fairness-preferences]
  scope:
    region: "US, Norway"
    period: "2022"
    dataType: [experimental, survey]
    granularity: [individual]
    n: "26,500 spectators (11,250 US + 11,250 Norway main; 4,000 pilot); 6,250 workers"
  findings:
    - ref: R1
      outcome: spectator probability of paying (binary decision)
      metric: pp-effect
      value: "-17.6 pp (p<0.001) at Pr(f)=0.5; 72.4% pay at 50% false-claim probability; FN-FP gap = 44.8 pp (p<0.001)"
      direction: negative
      vsBenchmark: "90.0% baseline rate at Pr(f)=0"
    - ref: R2
      outcome: share of false negative averse and false positive averse spectators
      metric: probability
      value: "FP averse lower bound 20.3% (SE=0.015); FN averse lower bound 65.2% (SE=0.027); pooled compensation experiment"
      direction: positive
    - ref: R3
      outcome: share of false negative averse and false positive averse spectators
      metric: probability
      value: "Strongly FP averse 20.3%; strongly FN averse 43.5% (pooled compensation experiment)"
      direction: positive
    - ref: R4
      outcome: share of false negative averse and false positive averse spectators
      metric: pp-effect
      value: "US vs Norway (pooled across experiments): strongly FP averse +11.8 pp (SE=0.017, p<0.001); strongly FN averse -10.0 pp (SE=0.021, p<0.001)"
      direction: mixed
    - ref: R5
      outcome: share of false negative averse and false positive averse spectators
      metric: pp-effect
      value: "Right-wing vs non-right-wing (pooled): FN averse -9.5 pp (SE=0.010, p<0.001); strongly FP averse +6.2 pp (SE=0.019, p<0.001); strongly FN averse -12.1 pp (SE=0.022, p<0.001)"
      direction: mixed
    - ref: R6
      outcome: policy attitudes toward unemployment benefits and income redistribution
      metric: coefficient
      value: "Paying is positively associated with support for generous unemployment benefits: coeff 0.562 (SE=0.025, p<0.001); support for reducing income inequality: coeff 0.354 (SE=0.025, p<0.001), with associations persisting after controls"
      direction: positive
    - ref: R7
      outcome: share of false negative averse and false positive averse spectators
      metric: pp-effect
      value: "Compensation experiment: strongly false positive averse 25.3% in US versus 15.5% in Norway; strongly false negative averse 39.1% versus 47.8% (both country differences p<0.001)"
      direction: mixed
    - ref: R8
      outcome: spectator probability of paying (binary decision)
      metric: pp-effect
      value: "Compensation experiment additional treatments: high stakes -4.3 pp (SE=0.021); nationality information -0.9 pp (SE=0.020); endowment -1.4 pp (SE=0.020); none robust to multiple-testing correction"
      direction: none
    - ref: R9
      outcome: spectator probability of paying (binary decision)
      metric: pp-effect
      value: "Personal cost treatments: low cost -6.0 pp (SE=0.024), high cost -6.4 pp (SE=0.024) pooled; US effects -11.3 pp (SE=0.032) and -8.6 pp (SE=0.031); Norway effects -0.8 pp (SE=0.036) and -4.3 pp (SE=0.036), not significant"
      direction: negative
    - ref: R10
      outcome: share of false negative averse and false positive averse spectators
      metric: probability
      value: "Earnings experiment, pooled: FP-averse lower/upper bounds 19.6%/26.0%; symmetric upper bound 12.7%; FN-averse lower/upper bounds 67.6%/74.0%; N=5,391"
      direction: mixed
    - ref: R11
      outcome: spectator probability of paying (binary decision)
      metric: pp-effect
      value: "Earnings versus compensation treatment interactions are small and almost all insignificant; none survives multiple-hypothesis correction"
      direction: none
    - ref: R12
      outcome: spectator probability of paying (binary decision)
      metric: probability
      value: "Unemployment experiment: 95.6% would pay when a claim is certainly correct; 94.0% would refuse payment when it is certainly false; most remain false-negative averse at intermediate probabilities. Disability-benefit treatment shows a similar pattern (conclusion, p. 2483)"
      direction: mixed
  resultType: new-finding
  relatesTo:
    - { cite: "Cappelen et al. (2013a)", relation: builds-on, note: "the expected utility function for second-best fairness preferences extends their just-luck framework" }
    - { cite: "Almås, Cappelen, and Tungodden (2020)", doi: '10.1086/705551', relation: builds-on, note: "cross-country comparison of US and Norway on distributive preferences and meritocratic versus egalitarian views" }
    - { cite: "Alesina and Angeletos (2005)", doi: '10.1257/0002828054825655', relation: cites, note: "foundational reference on fairness views and redistribution preferences across countries" }
  openQuestions:
    - "Whether people are consistent in how they trade off false positives and false negatives across domains (judicial cases, disability, labor) has not been studied; p. 2483."
    - "Whether there are systematic biases based on claimant characteristics (gender, race) in how people evaluate false positives and false negatives remains open; p. 2483."
  replicationCode:
    url: "https://www.openicpsr.org/openicpsr/188201"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-24", role: extracted, note: "Full text read (pp. 2458-2485); six core results extracted from Tables 3-7 and Figures 1-4. Not human-verified. Not reproduced." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-25
      role: verified
      note: "Locators and magnitudes re-checked against source PDF (all six rows pass); two fixes: JEL codes D72 and H23 added (missing from distiller list; PDF p. 2458 shows D63,D72,D78,H23,I38); equation (7) scale corrected five-point to seven-point (Table 7 notes and p. 2481 both say seven-point; five-point on p. 2471 is a typo in the source paper, confirmed by constant=4.009)."
    - { by: "paper-distiller (gpt-6-luna)", date: "2026-10-04", role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and augmented the Core results table with six distinct findings, corresponding findings metadata, the missing mechanism vocabulary proposal, and estimating-specification details. Formal sections and numbered equations were already present. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: "2026-10-04", role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Checked all 12 Core results, equations, specifications, classification axes, findings, locators, and prose against the PDF; corrected the personal-cost treatment summary, association language, and cross-sectional method label, and removed a mismatched DOI. All reported rows and headline claims are supported." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20211015", checked: "2026-06-24", by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] array; container-title American Economic Review; published 2023-09-01; volume 113 issue 9 pages 2458-2485; no Creative Commons entry" }
---

**What this is.** The core results, theoretical model, and empirical strategy from this paper: enough to understand what was found and how, without reading all 28 pages. To replicate or extend, read the original at the [DOI](https://doi.org/10.1257/aer.20211015).

## TL;DR

The paper examines how people trade off false positives (paying an undeserving individual) against false negatives (not paying a deserving individual) in second-best fairness decisions. Across three large-scale experiments in the United States and Norway (26,500 spectators total), the large majority of spectators are false negative averse: they prefer risking a false positive over a false negative. When the probability of a false claim is 50 percent, 72.4 percent of spectators still choose to pay, consistent with placing higher weight on avoiding a false negative. However, about 20 percent are strongly false positive averse. Americans are more false positive averse and less false negative averse than Norwegians, and right-wing spectators exhibit the same pattern within both countries. These second-best fairness preferences are positively associated with policy attitudes on unemployment benefits and income redistribution, including after controls for stated fairness views, efficiency beliefs, altruism, and religiosity.

## Core results

Magnitudes are as reported; `\*\*\*` = 1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Paying falls monotonically with false-claim probability; 72.4% still pay at Pr(f)=0.5**, implying a FN-FP gap of 44.8 pp | Table 3 col 1, p. 2473; Figure 1, p. 2472 | Coeff at 50% false-claim prob: -17.6 pp (SE=0.016, p<0.001); baseline (Pr(f)=0) = 90.0%; at 100%: -79.7 pp; FN-FP difference = 44.8 pp (p<0.001) |
| R2 | **Type-share lower bounds: FP averse 20.3%, FN averse 65.2%** (pooled compensation experiment) | Table 4 upper panel, p. 2474 | FP averse LB 20.3% (SE=0.015); symmetric UB 14.5% (SE=0.037); FN averse LB 65.2% (SE=0.027) |
| R3 | **Majority have highly asymmetric preferences: 20.3% strongly FP averse, 43.5% strongly FN averse** | Figure 2 upper-left panel, p. 2475; text p. 2474 | Strongly FP averse (beta <= 0.25): 20.3%; strongly FN averse (beta >= 0.75): 43.5% of pooled sample |
| R4 | **US spectators are more FP averse and less FN averse than Norwegians** across all experiments | Table 6 right panel, p. 2481 | Strongly FP averse US vs Norway: +11.8 pp (SE=0.017, p<0.001); strongly FN averse: -10.0 pp (SE=0.021, p<0.001) |
| R5 | **Right-wing spectators are less FN averse and more FP averse** than non-right-wing spectators | Table 6 left panel, p. 2481 | FN averse -9.5 pp (SE=0.010, p<0.001); strongly FP averse +6.2 pp (SE=0.019, p<0.001); strongly FN averse -12.1 pp (SE=0.022, p<0.001) |
| R6 | **Second-best fairness preferences are associated with policy attitudes beyond stated fairness views** | Table 7, p. 2482 | Paying is positively associated with support for generous unemployment benefits: coeff 0.562 (SE=0.025, p<0.001); support for reducing income inequality: 0.354 (SE=0.025, p<0.001); associations persist after controls for fairness views, efficiency costs, altruism, and religiosity |
| R7 | **The country gap in strong preference types also appears in the compensation experiment** | Figure 2, p. 2475; text p. 2475 | Strongly FP averse: US 25.3% vs Norway 15.5% (p<0.001); strongly FN averse: US 39.1% vs Norway 47.8% (p<0.001) |
| R8 | **Higher stakes, nationality information, and an endowment have no robust effect on paying** | Table 5, Panel A and Panel B Endowment, p. 2476; text p. 2476 | High stakes: -0.043 (SE=0.021); nationality information: -0.009 (SE=0.020); endowment: -0.014 (SE=0.020); estimates are not robust to multiple-testing correction |
| R9 | **A personal cost reduces paying, mainly among US spectators** | Table 5, Panel B Cost, p. 2476; text p. 2477 | Pooled: low cost -0.060 (SE=0.024), high cost -0.064 (SE=0.024); US: -0.113 (SE=0.032), -0.086 (SE=0.031); Norway: -0.008 (SE=0.036), -0.043 (SE=0.036), not significant |
| R10 | **The earnings experiment reproduces the prevalence of asymmetric types** | Table 4, upper panel, p. 2474 | FP-averse lower/upper bounds 19.6%/26.0%; symmetric upper bound 12.7%; FN-averse lower/upper bounds 67.6%/74.0%; N=5,391 |
| R11 | **The compensation and earnings treatment effects do not differ robustly** | Figure 3, Panel A, p. 2478; text p. 2478 | Interaction effects are small and almost all insignificant; none is robust to multiple-hypothesis correction |
| R12 | **The main pattern carries over to hypothetical benefit decisions** | Figure 4, p. 2480; text pp. 2479, 2483 | Unemployment-benefit willingness to pay is 95.6% when a claim is certainly correct; 94.0% refuse payment when it is certainly false. The majority remain false-negative averse; disability-benefit treatment shows a similar pattern (p. 2483) |

**Overall (paper's conclusion).** The majority of spectators in both countries are false negative averse in all three experiments. A significant minority is strongly false positive averse. Country and political differences are of similar magnitude: the US-Norway gap runs in the same direction as the right-wing/non-right-wing gap within each country. These second-best fairness preferences are positively associated with policy attitudes on redistribution and social insurance, including after controls for fairness views and beliefs about policy costs.

## Theory / model

The paper proposes a simple expected utility framework to characterize second-best fairness preferences (Section I, pp. 2461-2462). Consider an environment where a spectator must choose a payment $$y$$ for an individual whose claim may or may not be false. Let $$m(f)$$ be the fair payment if the claim is false and $$m(c)$$ the fair payment if it is correct, with $$m(c) > m(f)$$. The probability the claim is false is $$\Pr(f)$$ and the probability it is correct is $$1 - \Pr(f)$$.

In line with Cappelen et al. (2013a), the spectator dislikes any payment that deviates from what is fair. The expected utility of paying $$y$$ is (equation 1, p. 2461):

$$
EU(y) = \Pr(f)\, u\!\left(y - m(f)\right) + \bigl[1 - \Pr(f)\bigr]\, u\!\left(y - m(c)\right), \tag{1}
$$

where $$u(\cdot)$$ is weakly decreasing in the deviation from the fair payment and $$u(0) = 0$$. The spectator faces a binary choice between paying, $$y = m(c)$$, and not paying, $$y = m(f)$$. These yield (equations 2 and 3, p. 2461):

$$
EU\!\left(y = m(c)\right) = \Pr(f)\, u\!\left(m(c) - m(f)\right), \tag{2}
$$

$$
EU\!\left(y = m(f)\right) = \bigl[1 - \Pr(f)\bigr]\, u\!\left(m(f) - m(c)\right). \tag{3}
$$

Since $$|m(c) - m(f)| = |m(f) - m(c)|$$, define $$\beta$$ as the relative weight the spectator places on avoiding a false negative versus a false positive (p. 2462):

$$
\beta = \frac{u\!\left(m(f) - m(c)\right)}{u\!\left(m(c) - m(f)\right) + u\!\left(m(f) - m(c)\right)}.
$$

Three types follow: False Positive Averse ($$\beta < 1/2$$), Symmetric ($$\beta = 1/2$$), False Negative Averse ($$\beta > 1/2$$).

Observation 1 (p. 2462): The spectator is indifferent between paying and not paying when $$\Pr(f) = \beta$$; strictly prefers not to pay when $$\Pr(f) > \beta$$; and strictly prefers to pay when $$\Pr(f) < \beta$$. The individual switching threshold directly reveals $$\beta$$. This also predicts that the choice between the two options should be independent of the size of $$m(c) - m(f)$$ (the payoff size), which Table 5 confirms (the high-stakes treatment changes behavior by -4.3 pp, not significant after multiple-testing correction).

Upper and lower bounds on type shares are derived from $$sp(\Pr(f))$$, the share of spectators paying at each treatment value (Observation 4, p. 2469):

$$
S_U = 2 \times \max\!\left\{0,\, \min\!\bigl(sp(0.25) - sp(0.5),\; sp(0.5) - sp(0.75)\bigr)\right\},
$$

$$
FP_U = 1 - sp(0.5), \quad FN_U = sp(0.5), \quad FP_L = FP_U - 0.5\, S_U, \quad FN_L = FN_U - 0.5\, S_U.
$$

## Method

The estimation strategy is between-subject OLS on the binary payment indicator, applied to the pooled sample and separately for each country (Section III, pp. 2468-2471). The approach builds on `randomized-survey-experiment` (spectators randomly assigned to treatment arms), estimated with population-weighted linear probability regressions with controls. Regressions are population weighted; these cross-sectional specifications have no fixed effects, and standard errors are reported in parentheses. The paper reports Holm-Bonferroni and Romano-Wolf corrections for multiple hypotheses.

The main specification for treatment effects (equation 4, p. 2468):

$$
e_i = \alpha + \alpha_1 P(0.25)_i + \alpha_2 P(0.5)_i + \alpha_3 P(0.75)_i + \alpha_4 P(1)_i + \gamma \mathbf{X}_i + \varepsilon_i, \tag{4}
$$

where $$e_i$$ is an indicator equal to one if spectator $$i$$ pays, $$P(0.25)_i$$ through $$P(1)_i$$ are treatment indicators for each false-claim probability level (baseline: $$\Pr(f) = 0$$), and $$\mathbf{X}_i$$ is a vector of controls (income, education, gender, age, political ideology). Estimates are population-weighted. Multiple testing corrected via Holm-Bonferroni and Romano-Wolf procedures.

For additional robustness treatments at $$\Pr(f) = 0.5$$ (equation 5, p. 2470):

$$
e_i = \alpha + \alpha_1 M_i + \gamma \mathbf{X}_i + \varepsilon_i, \tag{5}
$$

where $$M_i$$ indicates the specific additional treatment (doubled stakes, nationality information, or endowment introduction). For the cost treatments (equation 6, p. 2470):

$$
e_i = \alpha + \alpha_1 C(0.1)_i + \alpha_1 C(0.3)_i + \gamma \mathbf{X}_i + \varepsilon_i, \tag{6}
$$

where $$C(0.1)_i$$ and $$C(0.3)_i$$ indicate treatments where the spectator bears a personal cost of US$0.1 or US$0.3 for paying.

For policy attitudes (equation 7, p. 2471):

$$
\text{pol}_i = \alpha + \alpha_1\, \text{pay}_i + \gamma \mathbf{X}_i + \varepsilon_i, \tag{7}
$$

where $$\text{pol}_i$$ is stated support for unemployment benefit generosity or income equalization on a seven-point scale, and $$\text{pay}_i$$ is an indicator for having paid in the experiment.

Equation (4) is estimated by experiment and country, with and without controls. The Compensation samples in Table 3 are 5,395 pooled observations, 2,695 US, and 2,700 Norway; the Earnings main sample has 5,391 observations (Section III, pp. 2468-2471; Table 3, p. 2473; Table 4, p. 2474). The same design is used for the Unemployment survey experiment and for pooled comparisons. Equation (5) compares a manipulated arm with the main Compensation arm at a 50 percent false-claim probability; Table 5 reports 2,696 observations for each pooled high-stakes, nationality, and endowment comparison. Equation (6) compares the two personal-cost arms with the endowed no-cost arm; Table 5 reports 2,699 pooled observations. These Table 5 estimates are population-weighted OLS, with standard errors in parentheses and no fixed effects (pp. 2470, 2476).

Two further regressions are described but not printed as numbered equations. Written out from Section III (p. 2471), the cross-experiment comparison adds treatment-by-experiment interactions to equation (4):

$$
e_i = \alpha + \sum_{j \in \{0.25,0.5,0.75,1\}} \alpha_j P(j)_i + \delta C_i + \sum_{j \in \{0.25,0.5,0.75,1\}} \theta_j\bigl(P(j)_i \times C_i\bigr) + \gamma \mathbf{X}_i + \varepsilon_i,
$$

where $$C_i$$ indicates participation in the Compensation experiment. This comparison pools Compensation with Earnings or Unemployment, uses randomized treatment arms, and reports population-weighted OLS with standard errors in parentheses; Figure 3 plots the estimates for the Earnings and Unemployment comparisons (p. 2478). The political-affiliation specification described on p. 2470 adds interactions between treatment indicators and right-wing affiliation to equation (4). The pooled estimates cover 22,476 observations (Table 6, p. 2481). Equation (7) is estimated on this same 22,476-observation sample for both policy outcomes in Table 7, with columns progressively adding fairness, policy-cost, demographic, altruism, and religiosity controls; estimates are population weighted, with standard errors in parentheses (p. 2482). The printed specification text on p. 2471 calls the attitude scale five-point, while Table 7 identifies the dependent outcomes as seven-point scales; the table's scale description is used here. None of the specifications includes fixed effects.

## Empirical specifications

Three experiments share the same between-subject design. In each, spectators are randomly assigned to one of five treatments where $$\Pr(f) \in \{0, 0.25, 0.5, 0.75, 1\}$$, then decide whether to pay a worker whose claim may be false.

**Compensation experiment** (Section II.A, pp. 2463-2465). Workers are recruited on an international online labor market platform. It is randomly determined whether they are offered work. Those not offered work are entitled to a compensation of US$4 ($$m(c) = 4$$, $$m(f) = 0$$). Spectators are told the false-claim probability for the matched worker and decide whether to pay. The main sample is 5,395 spectators (2,695 US, 2,700 Norway). Additional treatments at $$\Pr(f) = 0.5$$ test: (i) high stakes (US$8 compensation); (ii) nationality information, withholding that workers were recruited on an international labor-market platform and reporting pay in local currency; and (iii) endowment and personal-cost arms (Table 5, p. 2476). High stakes, nationality information, and the endowment alone have no robust effect; adding a personal cost reduces payment, mainly among US spectators (RESULT 3).

**Earnings experiment** (Section II.B, pp. 2465-2466). Same structure but the claim is for earnings from completing a 15-minute task rather than compensation for not being offered work. Spectators in 5,391 observations (main study, excluding pilot). Treatment effects are tested for differences from the Compensation experiment via interaction terms (Figure 3, Panel A). All interaction effects are small and not robust to multiple-testing correction (RESULT 4), confirming the preferences are not specific to the compensation context.

**Unemployment experiment** (Section II.C, p. 2466). A nonincentivized survey experiment where respondents decide whether to hypothetically pay unemployment benefits to someone with a known false-claim probability. The pattern of results closely matches the incentivized experiments (RESULT 5). Respondents are somewhat more false positive averse in this policy domain, consistent with the policy debate around welfare fraud (Figure 3, Panel B).

Country-level regressions run equation (4) separately for the US and Norway. Pooled cross-country and cross-political-spectrum comparisons use 22,476 observations (all three experiments combined) with interaction terms for Norwegian nationality and for right-wing political affiliation (Table 6). Almås, Cappelen, and Tungodden (2020) provide the comparison framework for cross-country distributive preference differences. Policy attitude regressions (Table 7) pool all experiments and add controls for fairness views and efficiency beliefs; Alesina and Angeletos (2005) is the background reference for the fairness-redistribution link.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Norstat population panel (US and Norway) | Recruitment of 22,500 spectators, quota-matched on age, gender, and geography to be nationally representative | No page yet |
| Amazon Mechanical Turk | Recruitment of 6,250 workers (consequential decisions) and 4,000 pilot spectators from earlier Earnings versions | No page yet |

All primary data are author-generated experimental data. Replication data and code are publicly available at the AEA/ICPSR OpenICPSR archive (https://www.openicpsr.org/openicpsr/188201). Sample: summer 2022 (main study); pilot collected 2019. Workers: 2,250 AMT main study + 4,000 pilot.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20211015) if you are: designing second-best social insurance policies where eligibility is uncertain; studying cross-country or political heterogeneity in redistributive preferences; classifying spectator types (FP vs FN averse) in a behavioral experiment; or extending the framework to judicial or disability contexts. The locators above point to the exact tables and figures for each result.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(9), September 2023. AEA copyright; the three-year embargo expired September 2026, but the publisher PDF endpoint returned 403 on 2026-10-04. This page was distilled from the article and its reported claims were re-checked against the source PDF on 2026-10-04; it has not been independently reproduced. Redistribution is extract-only; the PDF is not hosted here.

> Cappelen, Alexander W., Cornelius Cappelen, and Bertil Tungodden. "Second-Best Fairness: The Trade-Off between False Positives and False Negatives." *American Economic Review* 113, no. 9 (September 2023): 2458-2485. DOI: 10.1257/aer.20211015.
