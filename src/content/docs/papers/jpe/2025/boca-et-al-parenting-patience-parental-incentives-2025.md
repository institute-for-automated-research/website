---
title: "Parenting with Patience: Del Boca, Flinn, Verriest & Wiswall (2026)"
description: >-
  Distilled: A Markov Perfect Equilibrium model of joint parent-child cognitive
  skill investment estimates that Conditional Cash Transfers reduce child patience
  by 13-17% and that intrinsic-motivation crowding-out is the primary reason
  parents limit their use. Journal of Political Economy 134(1), 2026, paywalled.
  Seven core results with source locators, the parent-child dynamic game
  (utility, skill production, CCT design, discount factor transition), the
  Method of Simulated Moments estimator, and three datasets (PSID-CDS,
  Steinberg et al. 2009, Osaka PPS).
sidebar:
  label: Del Boca-Flinn-Verriest-Wiswall 2026
  order: 1
tags: [paper-summary, child-development, parenting, household-economics, non-cognitive-skills, time-preferences, structural, paywalled, peer-reviewed, unreplicated]
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
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Financial Literacy, Pension, Retirement Analysis", "Gender, Labor, and Family Dynamics", "Intergenerational Family Dynamics and Caregiving"]
  dataAccess: public
  outcome:
    - child cognitive skill (Letter Word score)
    - child discount factor (patience)
    - parental CCT use probability
  outcomeClass: [educational-achievement, labor-careers-health]
  license: "paywalled; no CC licence found in Crossref works/10.1086/738481; subscription-only via University of Chicago Press; preprint available via ScholarSphere (Penn State)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "paywalled (journals.uchicago.edu requires institutional access; preprint at scholarsphere.psu.edu per OpenAlex 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 0
  methods:
    role: both
    family: structural
    buildsFrom: [method-of-simulated-moments, value-function-iteration, life-cycle-model, principal-agent]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [moral-hazard, agency]
  scope:
    region: US
    period: 1997-01..2007-12
    frequency: annual
    dataType: [survey, experimental]
    granularity: [individual]
    n: "247 households, 3 waves (PSID-CDS 1997/2002/2007); 935 individuals ages 10-30 (Steinberg et al. 2009); 4,625 adults ages 25-65 (Osaka PPS)"
  findings:
    - {ref: R1, outcome: "child discount factor (patience)", metric: level, value: "expected discount factor falls from 0.493 (no CCT) to 0.427 (CCT) at age 11, a 13% reduction", direction: negative}
    - {ref: R2, outcome: "child discount factor (patience)", metric: level, value: "expected discount factor falls from 0.503 (no CCT) to 0.418 (CCT) at age 17, a 17% reduction", direction: negative}
    - {ref: R3, outcome: final-period cognitive skill stock, metric: sd-effect, value: "-0.17 log-units (-37% of SD) in cognitive skills when CCTs are unavailable (counterfactual)", direction: negative, vsBenchmark: "baseline with CCT option available"}
    - {ref: R4, outcome: final-period cognitive skill stock, metric: sd-effect, value: "+0.38 log-units (+85% of SD) when CCT-patience crowding-out is eliminated and CCT use reaches 90%", direction: positive, vsBenchmark: "baseline with active crowding-out"}
    - {ref: R5, outcome: "cognitive skill (Letter Word score)", metric: sd-effect, value: "9-11% of SD increase per 1 SD more maternal time at age 6", direction: positive}
    - {ref: R6, outcome: "cognitive skill (Letter Word score)", metric: sd-effect, value: "more than 5% of SD increase per 1 SD more child self-investment time at age 15", direction: positive}
    - {ref: R7, outcome: high-SES vs low-SES cognitive skills gap, metric: probability, value: "84% of simulated SES cognitive-skills gap and 79% of patience gap closed by homogenizing parental time productivity and discount factors (Table 14, col. 4)", direction: none}
  resultType: new-finding
  relatesTo:
    - {cite: "Del Boca, Flinn, and Wiswall (2014)", relation: extends, note: "adds child as an active strategic player and endogenizes the child's discount factor; the two-parent model in Review of Economic Studies 81 is the structural benchmark departed from"}
    - {cite: "Doepke and Zilibotti (2017)", relation: builds-on, note: "adopts their parenting-styles framework of altruism and paternalism; the endogenous patience channel extends their preference-transmission mechanism"}
    - {cite: "Cunha, Heckman, and Schennach (2010)", relation: builds-on, note: "the Cobb-Douglas log-linear cognitive-skill production function follows their technology of skill formation"}
    - {cite: "Deci, Koestner, and Ryan (1999)", relation: builds-on, note: "the CCT-reduces-patience mechanism formalizes their meta-analytic finding that extrinsic rewards crowd out intrinsic motivation"}
  openQuestions:
    - "The conditional-allowance measure in PSID-CDS is an imperfect proxy for CCTs; better parental-incentive and relationship measures linked to household choices and demographics are needed (p. 76)."
    - "Additional data on child non-cognitive development (discount rates, grit, executive function, self-regulation) linked to household demographics would enable richer structural estimation (p. 76)."
    - "The skill technology parameters are assumed independent of endogenous choices and state variables; allowing dynamic skill complementarities (e.g. marginal productivity of self-investment time depending on lagged skill) would alter counterfactual welfare implications (p. 71)."
    - "Experiments and interventions that alter child-parent interactions are the most valuable next data source for child development models (p. 76)."
  replicationCode:
    status: available
  extraction:
    - {by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-76); seven results extracted from MSM-estimated structural model. Not human-verified. Not reproduced."}
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed R1/R2 locator (Sect. 5.5.5 p.63 → Sect. 5.3 p.60), fixed R5/R6 locator (Sect. 5.5 → Sect. 5.2), and fixed Eq. 3 prose coefficient ((1−φ)α₄ omitted the (1−φ) factor); all seven magnitudes confirmed correct." }
  licenceVerification:
    - {source: "Crossref REST API works/10.1086/738481", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "no CC licence in licence[] array; no license URL returned; subscription-only (University of Chicago Press)"}
---

**What this is.** The paper's core results, the dynamic model of parent-child interaction (utility functions, cognitive skill production, CCT design, discount factor dynamics), and the Method of Simulated Moments estimation: enough to understand what the paper found and how, without reading all 76 pages. To replicate or extend the model, read the full source at [10.1086/738481](https://doi.org/10.1086/738481) and use the replication package at [Harvard Dataverse](https://doi.org/10.7910/DVN/F7QVQ5).

## TL;DR

The paper builds a Markov Perfect Equilibrium model in which parents and children jointly determine cognitive skill formation over childhood (ages 3-17). Parents choose how to allocate their own time, expenditure, and whether to use a Conditional Cash Transfer (CCT) that links child consumption to study time; the child simultaneously chooses self-investment time given parental decisions. The novel feature is that the child's discount factor (patience) is endogenous: it evolves stochastically with age but is stochastically reduced by CCT use, capturing the intrinsic-motivation crowding-out effect documented by Deci, Koestner, and Ryan (1999). Estimated by the Method of Simulated Moments on PSID-CDS household data, cross-national discount factor data from Steinberg et al. (2009), and adult patience data from the Osaka Preference Parameter Survey, the model finds: CCTs reduce child patience by 13-17%; the primary deterrent to CCT use is this crowding-out cost rather than the direct disutility; maternal time inputs are most productive in early childhood while child self-investment time dominates by adolescence; and SES gaps in child outcomes are primarily explained by differences in parental time productivity and initial discount factor distributions, not by income or wage differences.

## Core results

Magnitudes are as reported in the paper. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | CCT use stochastically reduces child patience: expected discount factor falls 13% at age 11 | Sect. 5.3, p. 60 | From 0.493 (no CCT) to 0.427 (CCT use) |
| R2 | CCT use reduces child patience by 17% at age 17 | Sect. 5.3, p. 60 | From 0.503 (no CCT) to 0.418 (CCT use) |
| R3 | Removing CCT access raises final patience to 0.88 but reduces final cognitive skills by 37% of a SD | Table 13, col. 1, p. 69 | Cognitive skills fall 0.17 log-units (37% of SD); patience rises from 0.81 to 0.88 at age 17 |
| R4 | Removing the patience crowding-out channel causes CCT use to jump to 90% and cognitive skills to rise 85% of a SD | Table 13, col. 3, p. 70 | Cognitive skills rise 0.38 log-units (85% of SD); patience rises to 0.88 |
| R5 | Maternal time is most productive in early childhood | Sect. 5.2, p. 58 | 1 SD more maternal time at age 6 raises Letter Word score 9-11% of a SD |
| R6 | Child self-investment time surpasses parental time in productivity by adolescence | Sect. 5.2, p. 58 | 1 SD more study time at age 15 raises Letter Word score more than 5% of a SD |
| R7 | SES gaps in cognitive skills are driven mainly by parental time productivity and discount factor heterogeneity, not wages or income | Table 14, col. 4, p. 73 | Homogenizing productivity and discount factors closes 84% of simulated high/low-SES cognitive-skills gap and 79% of patience gap |

**Overall (paper's conclusion).** Parents rationally limit CCT use because CCTs stochastically reduce child patience, not primarily because of the direct utility cost. The model unifies cognitive and non-cognitive skill formation: study incentives boost cognitive outcomes but erode patience, creating a tradeoff that explains the declining use of CCTs with child age and the lower CCT use among college-educated parents whose children are already more patient. SES gaps in child outcomes are primarily rooted in heterogeneous parental time productivity and patience distributions, suggesting that income or wage redistribution alone would close little of the gap.

## Theory / model

The model covers ages $$ t = t_0, t_0+1, \ldots, 17 $$ with the terminal period at $$ M+1 $$. State variables at each age are the current cognitive skill stock $$ k_t $$, the child's current discount factor $$ \beta_{c,t} $$, and a set of parental characteristics (wages, education, non-labor income) collected in $$ \Gamma_t $$.

**Preferences.** The child's instantaneous utility over leisure $$ l_{c,t} $$, private consumption $$ x_t $$, and cognitive skill $$ k_t $$ is (p. 11):

$$
u_{c,t} = \lambda_1 \ln l_{c,t} + \lambda_2 \ln x_t + \lambda_3 \ln k_t
$$

Parents are altruistic toward the child. Their composite utility (Eq. 1, p. 12), combining own consumption and altruistic terms over child leisure, child consumption, and skill, is:

$$
\tilde{u}_{p,t} = \tilde{\alpha}_1 \ln l_{1,t} + \tilde{\alpha}_2 \ln l_{2,t} + \tilde{\alpha}_3 \ln c_t + \tilde{\alpha}_4 \ln k_t + \tilde{\alpha}_5 \ln l_{c,t} + \tilde{\alpha}_6 \ln x_t \tag{1}
$$

where $$ l_{1,t}, l_{2,t} $$ are mother's and father's leisure, $$ c_t $$ is parental consumption, and the $$ \tilde{\alpha} $$ parameters embed a convex combination of parental own preferences and child preferences weighted by the altruism parameter $$ \varphi $$. When the parent uses a CCT, a random fixed utility cost $$ \zeta $$ drawn from an exponential distribution is deducted (Eq. 6, p. 19):

$$
\tilde{u}_{p,t}(\mathbf{a}_{p,t}) = \tilde{\alpha}_1 \ln l_{1,t} + \tilde{\alpha}_2 \ln l_{2,t} + \tilde{\alpha}_3 \ln c_t + \tilde{\alpha}_4 \ln k_t + \tilde{\alpha}_5 \ln l_{c,t} + \tilde{\alpha}_6 \ln x_t - \zeta \cdot \mathbf{1}[CCT_t = 1] \tag{6}
$$

**Terminal values.** At period $$ M+1 $$ the model closes with an infinite-horizon continuation. The child's terminal value (Eq. 2, p. 13) is:

$$
V_{c,M+1}(k_{M+1}, \beta_{c,M+1}) = \frac{\lambda_3 \ln k_{M+1}}{1 - \beta_{c,M+1}} \tag{2}
$$

reflecting that with patience $$ \beta_{c,M+1} $$ the child will continue to value the skill stock at rate $$ \lambda_3 / (1 - \beta_{c,M+1}) $$ into the adult perpetuity. The parent's terminal value (Eq. 3, p. 14) combines the parent's own long-run discount factor with the imputed value of the child's terminal stock, weighting both $$ (1-\varphi)\alpha_4 / (1 - \beta_p) $$ (parent's own valuation of $$ k_{M+1} $$) and the altruistic share $$ \varphi \lambda_3 / (1 - \beta_{c,M+1}) $$.

**Cognitive skill production.** Skill evolves via a Cobb-Douglas log-linear production function following Cunha, Heckman, and Schennach (2010) (Eq. 4, p. 14):

$$
\ln k_{t+1} = \ln R_t + \delta_{1,t} \ln \tau_{1,t} + \delta_{2,t} \ln \tau_{2,t} + \delta_{3,t} \ln \tau_{c,t} + \delta_{4,t} \ln e_t + \delta_{5,t} \ln k_t \tag{4}
$$

where $$ \tau_{1,t}, \tau_{2,t} $$ are mother's and father's time with the child, $$ \tau_{c,t} $$ is child self-investment time, $$ e_t $$ is monetary expenditure on the child, $$ k_t $$ is the lagged skill stock, $$ R_t $$ is age-specific total factor productivity, and the $$ \delta $$ parameters are age-varying input elasticities. The persistence parameter $$ \delta_{5,t} $$ ("skills beget skills") is estimated at 0.79 in early childhood and rises to 0.84 by age 16.

**CCT incentive contract.** When a parent uses a CCT, child consumption is linked to study time (Eq. 5, p. 17):

$$
\ln x_t(\tau_{c,t};\, r_t, b_t) = b_t + r_t \ln \tau_{c,t} \tag{5}
$$

with floor parameter $$ b_t $$ (base consumption) and slope $$ r_t > 0 $$ (study-time elasticity of consumption). A higher $$ r_t $$ provides stronger incentives to study. The parent jointly chooses $$ CCT_t \in \{0,1\} $$ and, when $$ CCT_t = 1 $$, the contract parameters $$ (r_t, b_t) $$.

**Endogenous discount factor.** The child's discount factor evolves via a Markov chain (Eq. 7, p. 22) with $$ Z $$ discrete support points:

$$
\Pr(\beta_{c,t+1,h} = \beta_c^{j'} \mid \beta_{c,t,h} = \beta_c^j,\, t,\, CCT_{t,h}) \quad \forall\, (j,j') = 1,\ldots,Z \tag{7}
$$

The transition probabilities depend on current patience, age, and whether a CCT was used. The key restriction, identified from the Steinberg et al. and Osaka PPS data, is that CCT use stochastically shifts probability mass toward lower patience states: the estimated CCT-on transition matrix puts more weight on low-$$ \beta_c $$ values than the CCT-off matrix.

**Equilibrium.** The game is a Markov Perfect Equilibrium in the tradition of Del Boca, Flinn, and Wiswall (2014) and Doepke and Zilibotti (2017). Each period the parent announces actions $$ \mathbf{a}_{p,t} = (\tau_{1,t}, \tau_{2,t}, e_t, CCT_t, r_t, b_t) $$ before the child chooses $$ \tau_{c,t} $$. The child's Bellman equation is (p. 24):

$$
V_{c,t}(\Gamma_t \mid \mathbf{a}_{p,t}) = \max_{\tau_{c,t}} \Bigl[ u_c(l_{c,t}, x_t, k_t) + \beta_{c,t}\, \mathbb{E}_t V_{c,t+1}(\Gamma_{t+1} \mid \tau_{c,t}, \mathbf{a}_{p,t}, \Gamma_t) \Bigr]
$$

The parent's Bellman equation is (p. 25):

$$
V_{p,t}(\Gamma_t) = \max_{\mathbf{a}_{p,t}} \Bigl[ \tilde{u}_p(\mathbf{a}_{p,t}) + \beta_p\, \mathbb{E}_t V_{p,t+1}(\Gamma_{t+1} \mid \mathbf{a}_{p,t}, \Gamma_t) \Bigr]
$$

Under the Cobb-Douglas structure the child's optimal study time has a closed-form linear reaction function: without a CCT it is proportional to available non-parental time $$ (\tilde{T}_t - \tau_{p,t}^0) $$ at a state-dependent rate $$ \gamma_t^0(\Gamma_t) $$; with a CCT the proportionality constant $$ \gamma_t^1(r_t, \Gamma_t) $$ also depends on the CCT elasticity $$ r_t $$ (Eqs. 8 and 10, pp. 26-27). Parental CCT choice then follows from comparing $$ V_{p,t}(\Gamma_t \mid \mathbf{a}_{p,t}^0) $$ and $$ V_{p,t}(\Gamma_t \mid \mathbf{a}_{p,t}^1) $$ at each state.

## Method

**Solution.** The model is solved by backward induction (value function iteration starting at $$ t = M+1 $$ and rolling back to $$ t = t_0 $$). At each age-state grid node, the child's reaction function and the parent's optimality conditions are solved in closed form given the known next-period value function, then rolled back. The key analytic result (Proposition in Section 2.4, pp. 28-29) is that in equilibrium, child study time is a fixed fraction of remaining non-parental time, which makes the parent's optimization tractable. The `value-function-iteration` approach uses a discretized state space for $$ k_t $$ and $$ \beta_{c,t} $$ (integrating out the Markov transition at each step).

**Estimation.** Parameters are estimated by the Method of Simulated Moments. Let $$ \boldsymbol{\theta} $$ be the vector of structural parameters. Given a draw of household heterogeneity, the model simulates histories of all endogenous variables; simulated moments $$ \hat{m}(\boldsymbol{\theta}) $$ are matched to empirical counterparts $$ m_{\text{data}} $$ by minimizing:

$$
\hat{\boldsymbol{\theta}} = \arg\min_{\boldsymbol{\theta}} \bigl(\hat{m}(\boldsymbol{\theta}) - m_{\text{data}}\bigr)' \hat{W} \bigl(\hat{m}(\boldsymbol{\theta}) - m_{\text{data}}\bigr)
$$

where $$ \hat{W} $$ is a diagonal weighting matrix. Standard errors are computed from the Jacobian of simulated moments; 1,000 simulated households are used per parameter evaluation. The `method-of-simulated-moments` estimator builds on the `principal-agent` parent-child game framework and the `life-cycle-model` specification of parental wages and non-labor income.

## Empirical specifications

**Cognitive skill production function.** The age-specific input elasticities $$ \boldsymbol{\delta}_t $$ and persistence $$ \phi_t $$ are first estimated from a reduced-form log-linear specification (Eq. 12, p. 49):

$$
\ln k_{h,t+1} = \ln R_t + \mathbf{Z}_{h,t} \boldsymbol{\delta}_t + \phi_t \ln k_{h,t} + \varepsilon_{h,t} \tag{12}
$$

where $$ \mathbf{Z}_{h,t} $$ is the vector of log time and expenditure inputs for household $$ h $$ at age $$ t $$. These first-stage estimates are used as calibrated starting values and production-function moments in the structural estimation.

**Structural moment conditions.** The MSM matches 211 moments from three datasets:

- PSID-CDS moments: age-conditional means and correlations of parental time inputs, child study time, CCT use (conditional-allowance indicator), test scores (Woodcock-Johnson Letter Word and Applied Problems), wages, household income, and CCT use by parental education group.
- Steinberg et al. (2009) moments: age-conditional means and variances of elicited child discount factors (ages 10-30), and correlation of discount factors with IQ scores across sites.
- Osaka PPS moments: mean and variance of adult discount factors by age group (ages 25-65), and education-conditional means.

The CCT-patience crowding-out parameters (the off-diagonal elements of the CCT-on relative to the CCT-off discount factor transition matrix) are identified from the conditional covariance between CCT use and changes in the simulated patience distribution, cross-validated against the Steinberg et al. and Osaka PPS moments.

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

Source: peer-reviewed, *Journal of Political Economy* 134(1), January 2026. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The VoR is paywalled (University of Chicago Press); this page is extract-only.

> Del Boca, Daniela, Christopher Flinn, Ewout Verriest, and Matthew Wiswall. "Parenting with Patience: Parental Incentives and Child Development." *Journal of Political Economy* 134, no. 1 (January 2026): 210-284. DOI: 10.1086/738481.
> Replication data: Del Boca, Flinn, Verriest and Wiswall (2025), Harvard Dataverse, https://doi.org/10.7910/DVN/F7QVQ5.
