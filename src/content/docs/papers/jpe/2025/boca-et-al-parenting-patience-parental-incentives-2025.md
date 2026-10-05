---
title: "Parenting with Patience: Del Boca, Flinn, Verriest & Wiswall (2026)"
description: >-
  Distilled: A Markov Perfect Equilibrium model of joint parent-child cognitive
  skill investment estimates that Conditional Cash Transfers reduce child patience
  by 13-17% and that intrinsic-motivation crowding-out is the primary reason
  parents limit their use. Journal of Political Economy 134(1), 2026, paywalled.
  Twenty-three core results with source locators, the parent-child dynamic game
  (utility, skill production, CCT design, discount factor transition), the
  Method of Simulated Moments estimator, and three datasets (PSID-CDS,
  Steinberg et al. 2009, Osaka PPS).
sidebar:
  label: Del Boca-Flinn-Verriest-Wiswall 2026
  order: 1
tags: [paper-summary, child-development, parenting, household-economics, non-cognitive-skills, time-preferences, structural, paywalled, peer-reviewed, unreplicated, data:psid, data:steinberg-child-discount-factors, data:osaka-pps]
paper:
  authors: Daniela Del Boca, Christopher Flinn, Ewout Verriest, Matthew Wiswall
  authorList:
    - {family: Del Boca, given: Daniela, orcid: "0000-0001-7569-0112", affiliation: "University of Torino and Collegio Carlo Alberto"}
    - {family: Flinn, given: "Christopher J.", orcid: "0000-0002-7904-1782", affiliation: "New York University and Collegio Carlo Alberto"}
    - {family: Verriest, given: Ewout, orcid: "0000-0001-9577-3468", affiliation: "Pennsylvania State University"}
    - {family: Wiswall, given: Matthew, affiliation: "Johns Hopkins University and NBER"}
  year: 2026
  venue: Journal of Political Economy 134(1), January 2026, 210-284
  venueShort: J. Polit. Econ. 2026
  doi: 10.1086/738481
  jel:
    codes: [J13, D10]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Financial Literacy, Pension, Retirement Analysis", "Gender, Labor, and Family Dynamics", "Intergenerational Family Dynamics and Caregiving"]
  dataAccess: public
  outcome:
    - child cognitive skill (Letter Word score)
    - child discount factor (patience)
    - parental CCT use probability
    - child self-investment time
  outcomeClass: [educational-achievement, labor-careers-health]
  license: "paywalled; no CC licence found in Crossref works/10.1086/738481; subscription-only via University of Chicago Press; preprint available via ScholarSphere (Penn State)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "paywalled (journals.uchicago.edu requires institutional access; preprint at scholarsphere.psu.edu per OpenAlex 2026-06-26)"
  redistribution: extract-only
  resultsCount: 23
  citedByCount: 0
  methods:
    role: both
    family: structural
    buildsFrom: [method-of-simulated-moments, value-function-iteration, markov-perfect-equilibrium, principal-agent]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [agency, extrinsic-crowding-out]
  scope:
    region: US
    period: 1997-01..2007-12
    frequency: annual
    dataType: [survey, experimental]
    granularity: [individual]
    n: "247 households, 3 waves (PSID-CDS 1997/2002/2007); 935 individuals ages 10-30 (Steinberg et al. 2009); 4,625 adults ages 25-65 (Osaka PPS)"
  findings:
    - {ref: R1, outcome: "child discount factor (patience)", metric: level, value: "CCT use at age 10 lowers expected age-11 discount factor from 0.493 (no CCT) to 0.427, a 13% reduction", direction: negative}
    - {ref: R2, outcome: "child discount factor (patience)", metric: level, value: "CCT use at age 16 lowers expected age-17 discount factor from 0.503 (no CCT) to 0.418, a 17% reduction", direction: negative}
    - {ref: R3, outcome: final-period cognitive skill stock, metric: sd-effect, value: "-0.17 log-units (-37% of SD) in cognitive skills when CCTs are unavailable (counterfactual)", direction: negative, vsBenchmark: "baseline with CCT option available"}
    - {ref: R4, outcome: final-period cognitive skill stock, metric: sd-effect, value: "+0.38 log-units (+85% of SD) when CCT-patience crowding-out is eliminated and CCT use reaches 90%", direction: positive, vsBenchmark: "baseline with active crowding-out"}
    - {ref: R5, outcome: "cognitive skill (Letter Word score)", metric: sd-effect, value: "9-11% of SD increase per 1 SD more maternal time at age 6", direction: positive}
    - {ref: R6, outcome: "cognitive skill (Letter Word score)", metric: sd-effect, value: "more than 5% of SD increase per 1 SD more child self-investment time at age 15", direction: positive}
    - {ref: R7, outcome: high-SES vs low-SES cognitive skills gap, metric: level, value: "Removing education dependence of time productivity and discount-factor distributions closes 84% of the simulated skill gap and 79% of the patience gap (Table 14, col. 4)", direction: negative}
    - {ref: R8, outcome: child self-investment time, metric: probability, value: "share of parent-plus-child investment time rises from about 5% at age 6 to over 30% in the teenage years", direction: positive}
    - {ref: R9, outcome: parental CCT use probability, metric: probability, value: "conditional allowance use is 0.373 at ages 8-10 and 0.157 at ages 14-16", direction: negative}
    - {ref: R10, outcome: parental CCT use probability, metric: probability, value: "ages 8-10: 0.423 for high-school-or-less versus 0.250 for graduate-educated fathers; ages 11-13: 0.542 versus 0.250", direction: negative}
    - {ref: R11, outcome: child self-investment time, metric: coefficient, value: "father schooling coefficient 0.558 (SE 0.120), p<0.01", direction: positive}
    - {ref: R12, outcome: child self-investment time, metric: coefficient, value: "parental investment time coefficient -0.0549 (SE 0.0189), p<0.01", direction: negative}
    - {ref: R13, outcome: child self-investment time, metric: coefficient, value: "weekly allowance coefficient 0.108 (SE 0.0613), p<0.10", direction: positive}
    - {ref: R14, outcome: parental CCT use probability, metric: probability, value: "setting monitoring-cost parameter κ=0 raises use only from 0.35 to 0.37, child self-investment from 6.43 to 6.45 hours, and leaves final log skill at 7.41", direction: none}
    - {ref: R15, outcome: child discount factor (patience), metric: level, value: "for an initially high-patience child, CCT use at age 16 lowers expected age-17 β from 0.957 to 0.925; marginal skill value falls from 1.70 to 0.97", direction: negative}
    - {ref: R16, outcome: child discount factor (patience), metric: pp-effect, value: "CCT use raises the probability a low-patience child remains low in the next period by about 15 pp at age 10 and 20 pp at age 16", direction: negative}
    - {ref: R17, outcome: high-SES vs low-SES cognitive skills gap, metric: level, value: "gap remains 98.7% of baseline after removing age- and education-based wage/NLI heterogeneity; wage gaps fall to 2.5% or less", direction: none}
    - {ref: R18, outcome: high-SES vs low-SES cognitive skills gap, metric: level, value: "equalizing parental time productivity leaves 38.6% of the skill gap and 53.6% of the parental-time gap", direction: negative}
    - {ref: R19, outcome: parental CCT use probability, metric: probability, value: "simulated use 0.353 versus data 0.239; age correlation -0.226 versus -0.197 and Letter Word correlation -0.206 versus -0.189", direction: mixed}
    - {ref: R20, outcome: "child discount factor (patience)", metric: level, value: "simulated mean rises from 0.422 at ages 3-5 to 0.766 at ages 13-17", direction: positive}
    - {ref: R21, outcome: final-period cognitive skill stock, metric: coefficient, value: "lagged-skill productivity is 0.79 in early childhood and 0.84 by age 16", direction: positive}
    - {ref: R22, outcome: "cognitive skill (Letter Word score)", metric: sd-effect, value: "per 1-SD maternal time: 9-11% SD at age 6, about 6% at age 10, and about 3% at age 15", direction: positive}
    - {ref: R23, outcome: "cognitive skill (Letter Word score)", metric: sd-effect, value: "per 1-SD paternal time: 5-6% SD at age 6 and about 2% at age 15", direction: positive}
  resultType: confirms
  relatesTo:
    - {cite: "Del Boca, Flinn, and Wiswall (2014)", relation: extends, note: "adds child as an active strategic player and endogenizes the child's discount factor; the two-parent model in Review of Economic Studies 81 is the structural benchmark departed from"}
    - {cite: "Doepke and Zilibotti (2017)", relation: builds-on, note: "adopts their parenting-styles framework of altruism and paternalism; the endogenous patience channel extends their preference-transmission mechanism"}
    - {cite: "Cunha, Heckman, and Schennach (2010)", relation: builds-on, note: "the Cobb-Douglas log-linear cognitive-skill production function follows their technology of skill formation"}
    - {cite: "Deci, Koestner, and Ryan (1999)", relation: builds-on, note: "the CCT-reduces-patience mechanism formalizes their meta-analytic finding that extrinsic rewards crowd out intrinsic motivation"}
  openQuestions:
    - "The conditional-allowance measure in PSID-CDS is an imperfect proxy for CCTs; better parental-incentive and relationship measures linked to household choices and demographics are needed (p. 76)."
    - "Additional data on child non-cognitive development (discount rates, grit, executive function, self-regulation) linked to household demographics would enable richer structural estimation (p. 76)."
    - "The skill technology parameters are assumed independent of endogenous choices and state variables; allowing dynamic skill complementarities (e.g. marginal productivity of self-investment time depending on lagged skill) would alter counterfactual welfare implications (p. 71)."
    - "Interventions and experiments, particularly those likely to alter child-parent interactions, can provide valuable data for the next generation of child-development models (p. 76)."
  replicationCode:
    status: available
  extraction:
    - {by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-76); seven results extracted from MSM-estimated structural model. Not human-verified. Not reproduced."}
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed R1/R2 locator (Sect. 5.5.5 p.63 → Sect. 5.3 p.60), fixed R5/R6 locator (Sect. 5.5 → Sect. 5.2), and fixed Eq. 3 prose coefficient ((1−φ)α₄ omitted the (1−φ) factor); all seven magnitudes confirmed correct." }
    - {by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 102-page PDF; appended sixteen quantitative core-result rows and matching findings, added mechanisms and data tags, and completed numbered equations (1)-(12) and the main estimating specifications. New extraction only; not human-verified or reproduced."}
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 23 Core results, equations, specifications, classifications, findings, prose, and frontmatter against the PDF; corrected Table 13/14 locators, CCT transition timing, finding metrics/directions, an overstatement in an open question, and a missing author-year body mention. Table-locator check now flags no rows; this page passes relatesTo locatability." }
  licenceVerification:
    - {source: "Crossref REST API works/10.1086/738481", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "no CC licence in licence[] array; no license URL returned; subscription-only (University of Chicago Press)"}
---

**What this is.** The paper's core results, the dynamic model of parent-child interaction (utility functions, cognitive skill production, CCT design, discount factor dynamics), and the Method of Simulated Moments estimation: enough to understand what the paper found and how, without reading all 76 pages. To replicate or extend the model, read the full source at [10.1086/738481](https://doi.org/10.1086/738481) and use the replication package at [Harvard Dataverse](https://doi.org/10.7910/DVN/F7QVQ5).

## TL;DR

The paper builds a Markov Perfect Equilibrium model in which parents and children jointly determine cognitive skill formation over childhood (ages 3-17). Parents choose how to allocate their own time, expenditure, and whether to use a Conditional Cash Transfer (CCT) that links child consumption to study time; the child simultaneously chooses self-investment time given parental decisions. The novel feature is that the child's discount factor (patience) is endogenous: it evolves stochastically with age but is stochastically reduced by CCT use, capturing the intrinsic-motivation crowding-out effect documented by Deci, Koestner, and Ryan (1999). Estimated by the Method of Simulated Moments on PSID-CDS household data, cross-national discount factor data from Steinberg et al. (2009), and adult patience data from the Osaka Preference Parameter Survey, the model finds: CCT use at age 10 or 16 lowers expected patience at the next age by 13-17%; the primary deterrent to CCT use is this crowding-out cost rather than the direct disutility; maternal time inputs are most productive in early childhood while child self-investment time dominates by adolescence; and SES gaps in child outcomes are primarily explained by differences in parental time productivity and initial discount factor distributions, not by income or wage differences.

## Core results

Magnitudes are as reported in the paper. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | CCT use at age 10 lowers expected child patience at age 11 by 13% | Sect. 5.3, p. 60 | Expected age-11 discount factor falls from 0.493 (no CCT at age 10) to 0.427 (CCT at age 10) |
| R2 | CCT use at age 16 lowers expected child patience at age 17 by 17% | Sect. 5.3, p. 60 | Expected age-17 discount factor falls from 0.503 (no CCT at age 16) to 0.418 (CCT at age 16) |
| R3 | Removing CCT access raises final patience to 0.88 but reduces final cognitive skills by 37% of a SD | Table 13, col. 1, p. 95 | Cognitive skills fall 0.17 log-units (37% of SD); patience rises from 0.81 to 0.88 at age 17 |
| R4 | Removing the patience crowding-out channel causes CCT use to jump to 90% and cognitive skills to rise 85% of a SD | Table 13, col. 3, p. 95 | Cognitive skills rise 0.38 log-units (85% of SD); patience rises to 0.88 |
| R5 | Maternal time is most productive in early childhood | Sect. 5.2, p. 58 | 1 SD more maternal time at age 6 raises Letter Word score 9-11% of a SD |
| R6 | Child self-investment time surpasses parental time in productivity by adolescence | Sect. 5.2, p. 58 | 1 SD more study time at age 15 raises Letter Word score more than 5% of a SD |
| R7 | SES gaps in cognitive skills are driven mainly by parental time productivity and discount factor heterogeneity, not wages or income | Table 14, col. 4, p. 96 | Homogenizing productivity and discount factors closes 84% of simulated high/low-SES cognitive-skills gap and 79% of patience gap |
| R8 | Children’s share of total investment time rises as they age | text p. 5 | Self-investment rises from about 5% of total parent-plus-child investment time at age 6 to over 30% by the teenage years |
| R9 | Conditional-allowance CCT use is less common for older children | Table 4, panel (c), p. 86 | 0.373 of households with children ages 8-10 use conditional allowances versus 0.157 for ages 14-16 |
| R10 | CCT use is more common among lower-education households | Table 4, panel (c), p. 86 | For ages 8-10, use is 0.423 for fathers with high school or less versus 0.250 for graduate-educated fathers; for ages 11-13, 0.542 versus 0.250 |
| R11 | Father’s schooling is positively associated with child study time | Table 5, col. 3, p. 87 | Coefficient 0.558 (SE 0.120), significant at 1%; study time is weekly hours |
| R12 | Parental investment time is negatively associated with child self-investment time | Table 5, col. 3, p. 87 | Coefficient -0.0549 (SE 0.0189), significant at 1% |
| R13 | Weekly allowance is positively associated with child self-investment time conditional on controls | Table 5, col. 3, p. 87 | Coefficient 0.108 (SE 0.0613), significant at 10%; N=404 |
| R14 | Eliminating the fixed CCT utility cost alone has little effect when the patience channel remains | Table 13, col. 2, p. 95; text p. 69 | CCT use rises only from 0.35 to 0.37, child self-investment time from 6.43 to 6.45 hours, and final log skill remains 7.41 |
| R15 | CCTs reduce patience among children who begin with high patience | text p. 60 | For an initially high-patience 16-year-old, expected age-17 discount factor is 0.957 without CCT at age 16 versus 0.925 with CCT; marginal skill value falls from 1.70 to 0.97 |
| R16 | CCT use worsens persistence in low-patience states, with larger transition effects at older ages | Figure 6a, p. 60 | CCT at age 10 raises the probability a low-patience child remains low at age 11 by about 15 percentage points; CCT at age 16 raises the age-17 probability by about 20 points |
| R17 | Wage and income heterogeneity explain little of the simulated SES gap in child skill | Table 14, col. 2, p. 96; text p. 72 | After removing age- and education-based wage/NLI heterogeneity, the skill gap remains 98.7% of baseline; mean wage gaps fall to 2.5% or less |
| R18 | Parental time-productivity heterogeneity explains part of the SES skill gap | Table 14, col. 3, p. 96; text p. 73 | Equalizing parental time productivity reduces the parental-time gap to 53.6% and the final cognitive-skill gap to 38.6% of baseline |
| R19 | The estimated model overpredicts average conditional-allowance use but reproduces the age and test-score CCT correlations | Table 11, p. 93 | Simulated CCT use is 0.353 versus 0.239 in data; age correlation is -0.226 versus -0.197 and Letter Word correlation is -0.206 versus -0.189 |
| R20 | Child patience rises with age in the fitted model | Table 12, panel (b), p. 94; text p. 65 | Simulated mean discount factor rises from 0.422 at ages 3-5 to 0.766 at ages 13-17 |
| R21 | Cognitive skills are persistent and persistence rises through childhood | Sect. 5.2, p. 58 | Estimated lagged-skill productivity rises from 0.79 in early childhood to 0.84 by age 16 |
| R22 | Maternal time productivity declines as children age | Sect. 5.2, p. 58 | A 1-SD increase in maternal time raises next-period scores 9-11% of an SD at age 6, about 6% at age 10, and about 3% at age 15 |
| R23 | Paternal time productivity also declines with child age and remains below maternal productivity | Sect. 5.2, p. 58 | A 1-SD increase in paternal time raises scores 5-6% of an SD at age 6 and about 2% at age 15 |

**Overall (paper's conclusion).** Parents rationally limit CCT use because CCTs stochastically reduce child patience, not primarily because of the direct utility cost. The model unifies cognitive and non-cognitive skill formation: study incentives boost cognitive outcomes but erode patience, creating a tradeoff that explains the declining use of CCTs with child age and the lower CCT use among college-educated parents whose children are already more patient. SES gaps in child outcomes are primarily rooted in heterogeneous parental time productivity and patience distributions, suggesting that income or wage redistribution alone would close little of the gap.

## Theory / model

Del Boca, Flinn, and Wiswall (2014) provide the two-parent structural benchmark; this paper adds an active strategic child and an endogenous child discount factor. The paper models parents and children as forward-looking agents in a within-period Stackelberg game. Parents choose labor, consumption, investment goods, time with the child, and whether to offer an input-based conditional cash transfer (CCT); the child then chooses self-investment time. The model's state is household wages and non-labor income, child cognitive skill, and child patience. Equations (1)-(7) below are the numbered main-text model equations (pp. 12-22).

**Preferences and terminal values.** The parents' altruistic flow utility is a weighted combination of private parental utility and child utility. Substitution yields the composite utility in Equation 1:

$$
\tilde{u}_{p,t} = \tilde{\alpha}_1 \ln l_{1,t} + \tilde{\alpha}_2 \ln l_{2,t} + \tilde{\alpha}_3 \ln c_t + \tilde{\alpha}_4 \ln k_t + \tilde{\alpha}_5 \ln l_{c,t} + \tilde{\alpha}_6 \ln x_t \tag{1}
$$

The child's terminal value is a perpetuity of final cognitive skill (Equation 2, p. 13):

$$
V_{c,M+1}(k_{M+1},\beta_{c,M+1}) = \frac{\lambda_3 \ln k_{M+1}}{1-\beta_{c,M+1}} \tag{2}
$$

The corresponding parental terminal value weights own and altruistic valuation by the respective discount factors (Equation 3, p. 14):

$$
V_{p,M+1}(k_{M+1},\beta_{c,M+1}) = \left(\frac{(1-\varphi)\alpha_4}{1-\beta_p} + \frac{\varphi\lambda_3}{1-\beta_{c,M+1}}\right)\ln k_{M+1} \tag{3}
$$

**Skill production and incentives.** Cognitive skill follows an age-varying Cobb-Douglas technology (Equation 4, p. 14):

$$
\ln k_{t+1} = \ln R_t + \delta_{1,t}\ln\tau_{1,t} + \delta_{2,t}\ln\tau_{2,t} + \delta_{3,t}\ln\tau_{c,t} + \delta_{4,t}\ln e_t + \delta_{5,t}\ln k_t \tag{4}
$$

A CCT makes the child's current private consumption depend on self-investment time (Equation 5, p. 17):

$$
\ln x_t(\tau_{c,t};r_t,b_t) = b_t + r_t\ln\tau_{c,t} \tag{5}
$$

The CCT monitoring or psychic cost is a household-specific fixed disutility (Equation 6, p. 19):

$$
\tilde{u}_{p,t}(\mathbf{a}_{p,t}) = \tilde{\alpha}_1\ln l_{1,t} + \tilde{\alpha}_2\ln l_{2,t} + \tilde{\alpha}_3\ln c_t + \tilde{\alpha}_4\ln k_t + \tilde{\alpha}_5\ln l_{c,t} + \tilde{\alpha}_6\ln x_t - \zeta\,\mathbf{1}[CCT_t=1] \tag{6}
$$

The child's discrete discount factor evolves according to a first-order Markov transition depending on age and current CCT use, with the initial-state distribution conditional on the child's age and father's schooling (both parts of Equation 7, p. 22):

$$
\Pr(\beta_{c,t+1,h}=\beta_c^{j'}\mid\beta_{c,t,h}=\beta_c^j,t,CCT_{t,h}),\quad (j,j')=1,\ldots,Z;\qquad \Pr(\beta_{c,t_{h,0},h}=\beta_c^j\mid t_{h,0},s_{h,2}),\quad j=1,\ldots,Z \tag{7}
$$

The paper estimates the CCT transition effect without imposing its sign. The estimated transition shifts probability toward lower patience states. The economic channel is extrinsic crowding out: the immediate study incentive raises current effort but can reduce future patience, self-investment, and skill accumulation.

**Equilibrium and child reaction functions.** Each period the parent chooses first and the child best responds. The unnumbered Bellman equations define the Markov Perfect Equilibrium (pp. 24-25):

$$
V_{c,t}(\Gamma_t\mid\mathbf{a}_{p,t}) = \max_{\tau_{c,t}}\left[u_c(l_{c,t},x_t,k_t)+\beta_{c,t}\mathbb{E}_t V_{c,t+1}(\Gamma_{t+1}\mid\tau_{c,t},\mathbf{a}_{p,t},\Gamma_t)\right]
$$

$$
V_{p,t}(\Gamma_t) = \max_{\mathbf{a}_{p,t}}\left[\tilde{u}_{p,t}(\mathbf{a}_{p,t})+\beta_p\mathbb{E}_t V_{p,t+1}(\Gamma_{t+1}\mid\mathbf{a}_{p,t},\Gamma_t)\right]
$$

Without a CCT, the child's self-investment time is a fraction of available non-school time after parental investment (Equation 8, p. 26):

$$
\tau_{c,t}^{0}(\mathbf{a}_{p,t}^{0};\Gamma_t)=\gamma_t^{0}(\Gamma_t)(\tilde{T}_t-\tau_{p,t}^{0}),\qquad \gamma_t^{0}(\Gamma_t)=\frac{\Delta_{c,t}^{0}(\Gamma_t)}{\lambda_1+\Delta_{c,t}^{0}(\Gamma_t)} \tag{8}
$$

The expected marginal value of future cognitive skill in the no-CCT regime, used in the marginal return term, is Equation 9 (p. 26):

$$
\psi_{c,t+1}^{0}(\Gamma_t)=\frac{\partial\mathbb{E}_t[V_{c,t+1}(\Gamma_{t+1})\mid CCT_t=0]}{\partial\ln k_{t+1}},\qquad \Delta_{c,t}^{0}(\Gamma_t)=\beta_{c,t}\delta_{3,t}\psi_{c,t+1}^{0}(\Gamma_t) \tag{9}
$$

With a CCT, the incentive elasticity adds to the child's marginal return and changes the reaction function (Equation 10, p. 27):

$$
\tau_{c,t}^{1}(\mathbf{a}_{p,t}^{1};\Gamma_t)=\gamma_t^{1}(r_t,\Gamma_t)(\tilde{T}_t-\tau_{p,t}^{1}),\qquad \gamma_t^{1}(r_t;\Gamma_t)=\frac{\lambda_2r_t+\Delta_{c,t}^{1}(\Gamma_t)}{\lambda_1+\lambda_2r_t+\Delta_{c,t}^{1}(\Gamma_t)} \tag{10}
$$

The corresponding future marginal value and return are Equation 11 (p. 27):

$$
\psi_{c,t+1}^{1}(\Gamma_t)=\frac{\partial\mathbb{E}_t[V_{c,t+1}(\Gamma_{t+1})\mid CCT_t=1]}{\partial\ln k_{t+1}},\qquad \Delta_{c,t}^{1}(\Gamma_t)=\beta_{c,t}\delta_{3,t}\psi_{c,t+1}^{1}(\Gamma_t) \tag{11}
$$

The parent compares the value of the CCT and no-CCT choices after anticipating these child reaction functions. The no-CCT and CCT cases therefore differ both in current effort incentives and in the child discount-factor transition.

## Method

The authors solve the model with backward induction over the age-specific state grid for cognitive skill and child discount factor. Parental time investments and binary CCT choices are numerically optimized; conditional on them, labor supply, consumption, child expenditures, self-investment time, and CCT reward parameters have analytic solutions. The child's reaction functions (8) and (10) reduce the within-period game to the parent's optimization problem.

They estimate structural parameters by the Method of Simulated Moments (MSM), simulating household histories under trial parameter vectors and matching simulated moments to observed moments from PSID-CDS, Steinberg et al. (2009), and Osaka PPS. The objective uses a diagonal weight matrix based on sampling variances:

$$
\widehat{\boldsymbol{\theta}}=\arg\min_{\boldsymbol{\theta}}\left[\widehat{\mathbf{m}}(\boldsymbol{\theta})-\mathbf{m}_{data}\right]'\widehat{W}\left[\widehat{\mathbf{m}}(\boldsymbol{\theta})-\mathbf{m}_{data}\right]
$$

The target moments include age- and education-conditional means, standard deviations, and correlations for parental labor, parental and child investment time, test scores, conditional allowances, accepted wages, income, child and adult discount factors, and child expenditures (pp. 54-55). Non-labor-income and parental discount-factor processes are estimated outside the main model; wage offers, preference and technology parameters, CCT costs, and child discount-factor dynamics are jointly estimated. Standard errors use a multi-step panel bootstrap that resamples households with all observed periods and re-estimates the non-labor-income process and main parameters. The model solution and estimator are structural; the auxiliary Table 5 regressions below are descriptive associations.

## Empirical specifications

**Reduced-form skill technology.** Equation 12 gives the age-specific log skill production regression (p. 49):

$$
\ln k_{h,t+1}=\ln R_t+\mathbf{Z}_{h,t}\boldsymbol{\delta}_t+\phi_t\ln k_{h,t}+\varepsilon_{h,t},\qquad \mathbf{Z}_{h,t}=(\ln\tau_{1,t},\ln\tau_{2,t},\ln\tau_{c,t},\ln e_t) \tag{12}
$$

The paper identifies these slopes using a synthetic cohort across households at each child age, conditional on CCT status and the discrete child discount factor. The disturbance is mean independent of inputs and current skill under the model assumptions. Latent skill location and scale are normalized using the test-score measurement function. These estimates anchor the technology moments and starting values in the structural estimation.

**OLS evidence on self-investment time.** Table 5 estimates a separate set of linear specifications with weekly child study time as the dependent variable (p. 87). The common control set includes an intercept, child age, and child age squared; columns add father schooling, parental investment time, and weekly allowance in sequence:

$$
\text{StudyTime}_{h}=\alpha_1+\beta_1\text{FatherSchooling}_{h}+\gamma_1\text{Age}_{h}+\eta_1\text{Age}_{h}^{2}+\varepsilon_{h},\quad N=572
$$

$$
\text{StudyTime}_{h}=\alpha_2+\beta_2\text{FatherSchooling}_{h}+\beta_3\text{ParentalInvestment}_{h}+\gamma_2\text{Age}_{h}+\eta_2\text{Age}_{h}^{2}+\varepsilon_{h},\quad N=572
$$

$$
\text{StudyTime}_{h}=\alpha_3+\beta_4\text{FatherSchooling}_{h}+\beta_5\text{ParentalInvestment}_{h}+\beta_6\text{WeeklyAllowance}_{h}+\gamma_3\text{Age}_{h}+\eta_3\text{Age}_{h}^{2}+\varepsilon_{h},\quad N=404
$$

Table 5 reports heteroskedasticity-robust standard errors. Its coefficients are associations, not causal effects; weekly allowance is set to zero where no allowance is reported. The structural MSM targets these and other age/education-split moments. For the wage-offer equations, accepted wages are observed selectively because labor supply can be zero, so the model jointly estimates wage processes with preference and technology parameters rather than using wage OLS. Non-labor income is treated as strictly exogenous and estimated from PSID time-series and cross-sectional variation (pp. 48-49).

**CCT and heterogeneity counterfactuals.** Table 13 holds other parameters fixed and compares baseline simulations with four alternatives: infinite monitoring cost, zero monitoring cost, no CCT effect on child patience, and both costs removed (pp. 69-70). Table 14 gradually removes age and education heterogeneity from wage/income processes, time productivity, and discount-factor distributions (pp. 72-73). These are model-based comparative statics, not separate causal estimators. The underlying household sample comprises 247 PSID-CDS households and the auxiliary discount-factor samples include 344 children ages 10-17 and 4,625 adults ages 25-65.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| PSID-CDS (Panel Study of Income Dynamics, Child Development Supplement) | Primary structural estimation: parental time inputs (Childhood Activity Study modules), child study time, CCT use (conditional-allowance questions), Woodcock-Johnson Letter Word and Applied Problems test scores, household income, wages, demographics | No page yet |
| Steinberg et al. (2009) experimental data | Discount factor moments: age profile of patience from 935 individuals ages 10-30 across 11 study sites; pins down $$ \beta_{c,t} $$ age dynamics and CCT crowding-out parameters | No page yet |
| Osaka Preference Parameter Survey (Osaka PPS) | Adult discount factor moments: mean and variance for 4,625 adults ages 25-65; anchors the terminal patience distribution used in the structural model | No page yet |

Sample: 247 PSID-CDS households, three waves (1997, 2002, 2007), children ages 3-16. Replication code and processed data: Del Boca, Flinn, Verriest, and Wiswall (2025), [Harvard Dataverse (10.7910/DVN/F7QVQ5)](https://doi.org/10.7910/DVN/F7QVQ5).

## When to read the full paper

Read the source at [doi.org/10.1086/738481](https://doi.org/10.1086/738481) if you are:

- Building or extending structural models of child development that treat children as active players with endogenous time preferences; Section 2.4 derives the closed-form equilibrium reaction functions.
- Studying parenting-style economics (CCT vs. unconditional transfers) and need the MPE solution method and identification argument.
- Calibrating age-varying skill production elasticities from PSID-CDS; Table 12 (p. 57) lists all input-elasticity estimates by age group.
- Running SES-heterogeneity counterfactuals: Table 14 (pp. 72-73) decomposes the simulated high/low-SES gap into wage, productivity, time-preference, and initial-condition channels.
- Extending the Doepke and Zilibotti (2017) or Cunha, Heckman, and Schennach (2010) frameworks to a game-theoretic setting with endogenous patience.

The comparative statics of CCT cost and crowding-out parameters (Table 13, pp. 69-70) and the SES decomposition (Table 14) are the headline policy-relevant outputs; the formal game solution and MSM algorithm are in Appendices A-C.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 134(1), January 2026. This distillation was updated by an LLM on 2026-10-04 and is **not human-verified or independently reproduced**. The VoR is paywalled (University of Chicago Press); this page is extract-only.

> Del Boca, Daniela, Christopher Flinn, Ewout Verriest, and Matthew Wiswall. "Parenting with Patience: Parental Incentives and Child Development." *Journal of Political Economy* 134, no. 1 (January 2026): 210-284. DOI: 10.1086/738481.
> Replication data: Del Boca, Flinn, Verriest and Wiswall (2025), Harvard Dataverse, https://doi.org/10.7910/DVN/F7QVQ5.
