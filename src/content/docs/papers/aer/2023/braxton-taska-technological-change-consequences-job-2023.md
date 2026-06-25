---
title: "Technological Change and Job-Loss Consequences: Braxton & Taska (2023)"
description: >-
  Distilled: Using Burning Glass Technologies online vacancy data to measure
  within-occupation technological change, Braxton and Taska show that workers
  displaced from more tech-exposed occupations suffer earnings declines over
  7 percentage points larger per standard deviation of exposure, are 17 pp
  more likely to switch occupations, and that a calibrated structural
  search-and-matching model attributes 45 percent of post-displacement earnings
  losses to technological change. American Economic Review 2023, paywalled.
  Six core results with source locators, datasets used, the simple two-period
  model and the quantitative model with Bellman equations, and the empirical
  specifications.
sidebar:
  label: Braxton & Taska 2023
  order: 1
tags: [paper-summary, labor-economics, technological-change, job-loss,
       occupation-switching, human-capital, earnings-dynamics, panel-regression,
       peer-reviewed, unreplicated, data:burning-glass, data:cps-dws,
       data:onet, data:acs, data:cps-org]
paper:
  authors: J. Carter Braxton and Bledi Taska
  authorList:
    - { family: Braxton, given: J. Carter, affiliation: University of Wisconsin-Madison }
    - { family: Taska, given: Bledi, affiliation: Lightcast }
  year: 2023
  venue: American Economic Review 113(2), February 2023, 279-316
  venueShort: AER 2023
  doi: 10.1257/aer.20210182
  jel:
    codes: [J24, J31, J63, O33]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics:
    - Labor market dynamics and wage inequality
    - Employment and Welfare Studies
    - Digital Economy and Work Transformation
  dataAccess: licensed-commercial
  outcome:
    - post-displacement change in log earnings
    - probability of occupation switching after displacement
    - share of earnings decline attributable to technological change
  outcomeClass: [labor-careers-health]
  license: >-
    Paywalled (Crossref license[] block empty; no CC or open-access rights
    asserted; AER is a subscription journal)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (AEA/AER subscription wall; checked 2026-06-25)
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 122
  methods:
    role: both
    family: structural
    buildsFrom: [panel-regression, value-function-iteration]
    identification: selection-on-observables
  contributionType: [new-theory, new-fact]
  mechanisms: [search-frictions, skill-obsolescence]
  scope:
    region: US
    assetClass: labor market
    period: 2007-01..2018-12
    frequency: mixed
    dataType: [administrative, survey, other]
    granularity: [individual]
    n: "6,742 displaced workers (DWS); 150,330 occupation stayers (CPS-ORG)"
  findings:
    - ref: R1
      outcome: post-displacement change in log earnings
      metric: coefficient
      value: "-0.0354 (SE 0.0114); 1 SD higher tech-change exposure implies >7 pp larger earnings decline"
      direction: negative
      vsBenchmark: workers 1 SD above vs below mean tech-change exposure (Table 3 Col 1, p.295)
    - ref: R2
      outcome: probability of occupation switching after displacement
      metric: pp-effect
      value: "coeff 0.0847 (SE 0.0269); 1 SD higher exposure implies 17 pp greater probability of switching"
      direction: positive
    - ref: R3
      outcome: post-displacement change in log earnings
      metric: coefficient
      value: "interaction (delta-z x switch) = -0.0494 (SE 0.0180); effect for stayers is 0.000532 (SE 0.0131), insignificant"
      direction: negative
      vsBenchmark: earnings losses from tech change concentrated among switchers; stayers unaffected (Table 5 Col 3, p.299)
    - ref: R4
      outcome: probability of being displaced
      metric: coefficient
      value: "-0.00125 (SE 0.00320), t-stat = -0.39"
      direction: none
    - ref: R5
      outcome: change in log earnings over 12 months for occupation stayers
      metric: coefficient
      value: "0.00270 (SE 0.000705); 1 SD above mean implies >0.5 pp higher earnings over 12 months"
      direction: positive
    - ref: R6
      outcome: share of earnings decline attributable to technological change
      metric: pp-effect
      value: "7.63% earnings decline (full model) vs 4.16% (model without tech change); tech change share = 45.5%; occ-specific human capital share = 34.5%; job-ladder descent = 20%"
      direction: positive
      vsBenchmark: model without technological change (g = 0) as baseline (Figure 5, p.313)
  resultType: new-finding
  relatesTo:
    - { cite: 'Jacobson, LaLonde & Sullivan (1993)', relation: builds-on, note: 'early documentation of large persistent earnings losses after job loss that this paper decomposes by channel' }
    - { cite: 'Huckfeldt (2022)', relation: extends, note: 'shows displacement losses concentrate among occupation switchers; this paper provides technological change as the mechanism driving the switch' }
    - { cite: 'Davis & von Wachter (2011)', doi: '10.1353/eca.2011.0016', relation: cites, note: 'documents larger earnings losses in recessions; this paper suggests tech-change acceleration in recessions may contribute' }
    - { cite: 'Couch & Placzek (2010)', doi: '10.1257/aer.100.1.572', relation: cites, note: 'documents earnings losses of displaced workers; this paper adds the technology-change channel' }
    - { cite: 'Hershbein & Kahn (2018)', doi: '10.1257/aer.20161570', relation: builds-on, note: 'methodology for measuring technological change from Burning Glass vacancy postings' }
  openQuestions:
    - >-
      Whether technological-change acceleration in recessions can explain why
      earnings losses are larger in downturns, and the implications for
      earnings dynamics over the business cycle (pp. 313-314).
    - >-
      Optimal design of retraining subsidies in conjunction with unemployment
      insurance for workers displaced from high-tech-change occupations,
      studied in a companion paper (p. 313).
  replicationCode:
    url: https://doi.org/10.3886/E181166V1
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-25
      role: extracted
      note: >-
        Full text read (pp. 279-316); six results extracted from Tables 3-7
        and Figure 5. Simple model equations from pp. 283-284, quantitative
        Bellman equations from pp. 306-307, empirical specifications from
        pp. 292-299. Not human-verified. Not reproduced.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-25
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF;
        all six Core-results rows confirmed (Tables 3-7 and Figure 5
        magnitudes exact); production function threshold corrected from
        h >= c_k z to A_x h >= c_k z (per PDF p.308 and fn.60); body
        mentions added for four relatesTo cites (Jacobson et al. 1993,
        Couch & Placzek 2010, Huckfeldt 2022, Davis & von Wachter 2011)
        that were absent from the body text.
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20210182
      checked: 2026-06-25
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[] block is empty; no CC or open-access rights returned; AER is a paywalled subscription journal"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the two-period model and the
quantitative model with their key equations, and the empirical specifications:
enough to understand what was found and how, without reading all 38 pages. To
replicate or extend, read the full source at the
[original](https://doi.org/10.1257/aer.20210182).

## TL;DR

Braxton and Taska use within-occupation changes in computer and software skill
requirements from the Burning Glass Technologies vacancy database (2007-2017)
to measure technological change. Merging this measure with the Current
Population Survey Displaced Workers Supplement (DWS), they document that
workers displaced from occupations with greater technological change (i) suffer
larger earnings declines, (ii) are more likely to switch to a lower-paying
occupation, and (iii) show earnings losses concentrated entirely among those
who do switch. A calibrated search-and-matching model with an "up-to-the-task"
production function attributes 45.5 percent of average post-displacement
earnings losses to technological change (occupation-specific human capital
accounts for 34.5 percent; moving lower on the wage ladder for 20 percent).

## Core results

Magnitudes and significance are as reported; all regressions use clustered
standard errors at the occupation level (SE in parentheses). Locators point
into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Workers displaced from higher-tech-change occupations suffer **larger earnings declines** | Table 3, Col 1, p.295 | Coefficient on $$\Delta\bar{z}_o$$ = -0.0354 (SE 0.0114); 1 SD higher exposure implies >7 pp larger earnings decline |
| R2 | Higher tech-change exposure raises the **probability of occupation switching** after displacement | Table 4, Col 1, p.297 | Coefficient = 0.0847 (SE 0.0269); 1 SD higher exposure implies 17 pp greater probability of switching |
| R3 | **Earnings losses are concentrated among occupation switchers**; stayers are unaffected | Table 5, Col 3, p.299 | Interaction ($$\Delta\bar{z}_o \times S_{i,o,t}$$) = -0.0494 (SE 0.0180); coefficient for stayers = 0.000532 (SE 0.0131), insignificant |
| R4 | Tech-change exposure does **not raise the probability of displacement** | Table 6, Col 1, p.301 | Coefficient = -0.00125 (SE 0.00320), t-stat = -0.39; economically negligible (0.25 pp vs mean displacement rate of 6.7%) |
| R5 | Occupation **stayers** more exposed to tech change earn **more** over time | Table 7, Col 1, p.302 | Coefficient = 0.00270 (SE 0.000705); 1 SD above mean implies >0.5 pp higher earnings over 12 months |
| R6 | Model decomposition: **tech change accounts for 45.5%** of post-displacement earnings decline | Figure 5, p.313; §V.E | Full model: 7.63% average earnings decline; model without tech change: 4.16%; residual after also removing occ-specific HC (experience): 1.53% |

**Overall (paper's conclusion).** Technological change, measured by changes in
computer and software skill requirements in vacancy postings, explains a large
share of post-displacement earnings losses. The mechanism is occupation
switching: workers whose occupation introduced new technology during their
employment period no longer have the skills to match with newly created jobs
there, and transition to lower-tech, lower-wage occupations. This gives a
new rationale for the human-capital-decline modeling device used by
Ljungqvist and Sargent (1998) and others, and suggests retraining policies
may be a productive complement to unemployment insurance. The earnings losses
after job loss documented by Jacobson, LaLonde and Sullivan (1993) and by
Couch and Placzek (2010) are here decomposed by channel; Huckfeldt (2022)
shows displacement losses concentrate among occupation switchers, and this
paper provides technological change as the mechanism driving the switch;
Davis and von Wachter (2011) document larger earnings losses in recessions,
and the paper suggests tech-change acceleration in recessions may contribute.

## Theory / model

### Simple two-period model (Section I, pp. 283-285)

The paper begins with a two-period model to derive the testable predictions.
Two occupations, L (low-tech) and H (high-tech), use technology levels
$$z_L < z_H$$, where $$z_L = (1-\eta)z_H$$ with $$\eta > 0$$. An "up-to-the-task"
production function defines output of a worker-firm match (p.283):

$$
f(h, z) = \begin{cases} z, & \text{if } h \geq z \\ 0, & \text{otherwise} \end{cases}
$$

Workers have general human capital $$h \sim F(h)$$ and receive share
$$\omega \in (0,1)$$ of output as wages. In period 2, a new technology
$$z'_H = (1+\gamma)z_H$$ is introduced in occupation H (embodied in new matches,
as in Mortensen and Pissarides (1998) and Violante (2002)). Workers employed
in H in period 1 who do not have skills for the new technology (i.e.,
$$z'_H > h \geq z_H$$) must move to occupation L after displacement.

Define $$\pi = \frac{F(z'_H) - F(z_H)}{1 - F(z_H)}$$ as the share of H-employed
workers who lack the skills to use the new technology (p.284). The model
delivers three predictions:

- **Prediction 1**: If $$\pi > \frac{\gamma}{\eta + \gamma}$$, workers displaced from
  H experience larger average earnings losses than workers displaced from L.
- **Prediction 2**: Workers displaced from H are more likely to switch
  occupations (whenever $$\pi > 0$$).
- **Prediction 3**: The larger earnings losses among H-displaced workers are
  concentrated among occupation switchers.

These predictions guide the empirical strategy in Section IV.

### Quantitative model (Section V, pp. 303-312)

The quantitative model extends the simple model to an infinite-horizon,
overlapping-generations search environment with $$K = 10$$ occupations. Time is
discrete. Technology grows at rate $$g > 0$$ per year (calibrated to 1.5 percent,
from the Burning Glass data). Occupation $$k$$ has technology intensity
$$c_k \in [0,1]$$, so the technology level in occupation $$k$$ at time $$j$$ is
$$z_{k,j} = c_k z_j$$. Workers live $$T = 120$$ quarters (30 years).

Workers are heterogeneous in general human capital $$h$$ and occupation-specific
experience $$x \in \{E, N\}$$. The up-to-the-task production function is
(p.308):

$$
f(c_k z, h, x) = \begin{cases} A_x c_k z, & \text{if } A_x h \geq c_k z \\ 0, & \text{otherwise} \end{cases}
$$

where $$A_N = 1$$ (inexperienced) and $$A_E = 1.12$$ (experienced), capturing a
12 percent productivity premium from occupation-specific human capital
(following Kambourov and Manovskii (2009)).

Matching follows a constant-returns-to-scale matching function (p.308):

$$
M(s, v) = \frac{sv}{\left(s^\xi + v^\xi\right)^{1/\xi}}, \quad \xi = 1.6
$$

Technology at an existing match and the worker's general human capital both
evolve stochastically, depreciating at rate $$\mu = 1/(1+g)$$ each period with
probability $$\iota = 0.25$$ per quarter:

$$
Z(z) = z' = \begin{cases} z\mu, & \text{with pr. } \iota \\ z, & \text{with pr. } 1-\iota \end{cases}
\qquad
H(h) = h' = \begin{cases} h\mu, & \text{with pr. } \iota \\ h, & \text{with pr. } 1-\iota \end{cases}
$$

**Bellman equations (pp. 306-307).** For an inexperienced, unemployed worker
of age $$t$$ with human capital $$h$$, the value function satisfies:

$$
U_t^N(h, 0) = b + \beta E\!\left[\hat{U}_{t+1}^N(h', 0)\right], \quad \forall t \leq T
$$

where $$b$$ is the public insurance transfer (calibrated so insurance replaces
41.2 percent of lost earnings, using PSID data from 2001-2013), and
$$\hat{U}_{t+1}^N$$ is the value of search over occupations $$k \in \mathcal{K}$$
and wage piece rates $$\omega \in [0,1]$$. For an inexperienced, employed worker
at a firm using technology $$z$$ in occupation $$k$$ with piece rate $$\omega$$:

$$
W_t^N(h, z, k, \omega) = \omega f(c_k z, h, N)
+ \beta E\!\Bigl\{\delta\hat{U}_{t+1}^N(h', k)
+ (1-\delta)\bigl[\lambda_E \hat{W}_{t+1}^E(h', z', k, \omega)
+ (1-\lambda_E)\hat{W}_{t+1}^N(h', z', k, \omega)\bigr]\Bigr\}
$$

where $$\delta = 0.10$$ per quarter is the exogenous job-destruction rate (from
Shimer (2005)) and $$\lambda_E = 0.05$$ is the quarterly probability of becoming
experienced in the current occupation.

## Method

The empirical approach exploits cross-occupation heterogeneity in the change
in computer and software skill requirements between 2007 and 2017, as
measured in the Burning Glass Technologies vacancy database. Following
Hershbein and Kahn (2018), the tech-change measure $$z_{o,t}$$ for occupation
$$o$$ in year $$t$$ is the share of vacancies in that occupation listing a
computer or software related skill. The paper defines the change as
$$\Delta z_o = z_{o,2017} - z_{o,2007}$$, normalized to mean zero and unit SD.

The identifying assumption (selection-on-observables) is that conditional
on controls including the initial level of computer requirements in 2007, the
change in employment share in the occupation, age, education, gender, tenure
before layoff, and unemployment spell duration, the change in tech requirements
is uncorrelated with potential outcomes. Crucially, Section IV.E (Table 6)
shows that $$\Delta z_o$$ is uncorrelated with the probability of displacement
itself, consistent with the model's structure and validating the approach.

The quantitative model is calibrated to match aggregate labor market moments
for the 2010-2017 period. The model is solved using value function iteration
over a discretized state space, with K = 10 occupations grouped by computer
and software requirements from Burning Glass (the technology intensity
$$c_k$$ is calibrated from smoothed earnings ratios across occupation groups
using CPS data).

## Empirical specifications

### Main earnings and switching regressions (Section IV, pp. 292-299)

The baseline specification (equation 1, p.293) is:

$$
Y_{i,o,t} = \alpha + \beta\Delta\bar{z}_o + \Gamma \mathbf{X}_{i,o,t} + \varepsilon_{i,o,t} \tag{1}
$$

where $$Y_{i,o,t}$$ is the outcome for individual $$i$$ displaced from occupation
$$o$$ in DWS wave $$t$$ (change in log earnings, indicator for occupation
switching, etc.); $$\Delta\bar{z}_o$$ is the occupation-level tech-change measure
normalized to mean zero and unit SD; and $$\mathbf{X}_{i,o,t}$$ is a vector of
controls (age, log unemployment-spell duration, pre-displacement computer
requirements in 2007, tenure before layoff, years of education, gender,
DWS survey year, full-time indicators, change in occupation employment
share). Standard errors clustered at the occupation level (four-digit SOC).

Applied to the sample of 6,742 displaced workers in the DWS (waves
2010, 2012, 2014, 2016, 2018, restricted to ages 25-65, employed before
and after displacement, non-top-coded earnings), specification (1) produces
the earnings (Table 3, R1) and occupation-switching (Table 4, R2) results.

To test whether earnings losses are concentrated among occupation switchers
(Model Prediction 3), the paper estimates (equation 2, p.298):

$$
\Delta\ln(\text{Earn}_{i,o,t}) = \alpha + \gamma S_{i,o,t} + \beta\Delta\bar{z}_o
+ \eta\!\left(\Delta\bar{z}_o \times S_{i,o,t}\right) + \Gamma \mathbf{X}_{i,o,t} + \varepsilon_{i,o,t} \tag{2}
$$

where $$S_{i,o,t}$$ is a dummy equal to one if the individual switches occupations
following displacement. The coefficient $$\eta$$ on the interaction captures
whether the earnings-loss effect of tech change is concentrated among switchers.
Table 5, Column 3 shows $$\hat{\eta} = -0.0494$$ (SE 0.0180) and $$\hat{\beta} =
0.000532$$ (SE 0.0131, insignificant), confirming that occupation stayers are
unaffected by tech change while switchers bear the full cost (R3).

### Displacement probability and occupation stayers (Sections IV.E-F, pp. 300-302)

The same specification (1) is applied to two additional outcomes:
(i) an indicator for being displaced (Table 6), using the full DWS sample of
239,509 individuals (not just those who regained employment), showing that
$$\hat{\beta} = -0.00125$$ (SE 0.00320, t = -0.39), confirming tech change does
not raise displacement probability (R4); and (ii) the 12-month change in log
earnings for occupation stayers in the CPS-ORG (Table 7, N = 150,330),
showing $$\hat{\beta} = 0.00270$$ (SE 0.000705), confirming occupation stayers
benefit from tech change (R5).

### Model decomposition (Section V.E, p.312)

The model is used as a laboratory to decompose earnings losses. Starting from
the full model (average earnings decline 7.63 percent), the paper sets the
technology growth rate to zero ($$g = 0$$) and re-solves the model; the average
decline falls to 4.16 percent, implying tech change accounts for
$$(7.63 - 4.16) / 7.63 = 45.5$$ percent of the total decline. Removing
occupation-specific human capital (setting $$A_E = A_N = 1$$) further reduces
the decline to 1.53 percent, attributing 34.5 percent to occ-specific HC.
The residual 1.53 percent (20 percent share) is attributed to moving lower on
the job ladder.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Burning Glass Technologies vacancy database (2007-2017) | Primary source for the tech-change measure: share of vacancies listing computer or software skills by four-digit SOC occupation per year | No page yet |
| CPS Displaced Workers Supplement (DWS), 2010-2018 waves | Primary displaced-worker sample: earnings and occupation before and after displacement for 6,742 workers | No page yet |
| O\*NET (vintage 15.1, 2005-2010) | Validation of Burning Glass tech-change measure via computer-knowledge ratings by occupation (Figure 1); task content measures (Table 1) | No page yet |
| American Community Survey (ACS), 2007 and 2017 | Employment shares by occupation as controls for demand shifts; calibration of smoothed occupation earnings | No page yet |
| CPS Outgoing Rotation Group (CPS-ORG) | Earnings gains for occupation stayers (Table 7, N = 150,330); nondisplaced comparison group (Table 2) | No page yet |

Sample (displaced workers): ages 25-65, employed both before and at time of
DWS, non-top-coded earnings both before and after, displaced 2007-2017.
Quantitative model calibrated to 2010-2017 at quarterly frequency.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20210182) if you are:
examining the role of technological change in earnings dynamics more broadly
(the paper tests against a range of controls and alternative occupation
definitions); building on the Burning Glass vacancy data for measuring
skill requirements (Section III and online Appendices B-C); extending the
search-and-matching model to study retraining policy (the paper references
a companion paper on optimal retraining subsidies); or replicating the
decomposition exercise (replication data are available at the ICPSR).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(2), February 2023.
This distillation was extracted by an LLM on 2026-06-25 and is **not
human-verified or independently reproduced**. The AER is paywalled; no
open-access or CC rights were identified. Extract-only.

> Braxton, J. Carter, and Bledi Taska. "Technological Change and the
> Consequences of Job Loss." *American Economic Review* 113, no. 2
> (February 2023): 279-316. DOI: 10.1257/aer.20210182.
> Replication data: https://doi.org/10.3886/E181166V1
