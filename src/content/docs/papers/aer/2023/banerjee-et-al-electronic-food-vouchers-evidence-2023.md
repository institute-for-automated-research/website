---
title: "Electronic Food Vouchers: Banerjee, Hanna, Olken, Satriawan & Sumarto (2023)"
description: >-
  Distilled: An at-scale RCT across 105 Indonesian districts (3.4 million
  households) shows that switching from in-kind rice distribution to electronic
  food vouchers delivered 46 percent more subsidy to targeted poor households and
  cut poverty by 20 percent for the bottom 15 percent, driven by improved
  administrative fidelity rather than price-theoretic mechanisms. American Economic
  Review 2023, paywalled. Eight core results with source locators, the
  administrative-fidelity bargaining model, and the estimating equation.
sidebar:
  label: Banerjee et al. 2023
  order: 1
tags: [paper-summary, macro, panel-regression, cross-section, peer-reviewed,
       unreplicated, data:susenas, data:podes]
paper:
  authors: >-
    Abhijit Banerjee, Rema Hanna, Benjamin A. Olken, Elan Satriawan, Sudarno Sumarto
  authorList:
    - { family: Banerjee, given: Abhijit, orcid: "0000-0001-9923-6088", affiliation: MIT }
    - { family: Hanna, given: Rema, orcid: "0000-0001-6845-2327", affiliation: Harvard Kennedy School }
    - { family: Olken, given: "Benjamin A.", affiliation: MIT }
    - { family: Satriawan, given: Elan, affiliation: "Gadjah Mada University and TNP2K" }
    - { family: Sumarto, given: Sudarno, affiliation: "TNP2K and SMERU" }
  year: 2023
  venue: "American Economic Review 113(2), February 2023, pp. 514-547"
  venueShort: AER 2023
  doi: 10.1257/aer.20210461
  jel:
    codes: [H53, I18, I32, I38, O12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Gender, Labor, and Family Dynamics
    - Poverty, Education, and Child Welfare
    - Income, Poverty, and Inequality
  dataAccess: public
  outcome:
    - poverty rate (share of households below the poverty line)
    - total subsidy received per month
    - food consumption (rice and egg protein)
    - rice price level
  outcomeClass: [social-welfare, household-finance]
  license: >-
    AEA copyright; no CC licence found in Crossref record (standard paywalled
    AEA publication)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (pubs.aeaweb.org, checked 2026-06-24)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 49

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, lasso]
    identification: randomized
  contributionType: [new-fact]
  mechanisms: [agency]
  scope:
    region: Indonesia
    period: "2018-03..2019-03"
    frequency: mixed
    dataType: [administrative, survey, experimental]
    granularity: [individual, aggregate]
    n: "105 districts, ~66,000 households in the March 2019 SUSENAS endline wave"
  findings:
    - ref: R1
      outcome: total subsidy received per month
      metric: pp-effect
      value: "Rp 13,496 more/month for targeted households (PMT <= 30); 46% above the in-kind mean of Rp 29,219 (p < 0.001)"
      direction: positive
      vsBenchmark: "46% above in-kind baseline for the targeted group (Table 1 col. 2)"
    - ref: R2
      outcome: total subsidy received per month
      metric: pp-effect
      value: "Conditional on receiving any assistance, voucher recipients received Rp 31,333 more/month (85% above in-kind recipient mean of Rp 36,931; p < 0.001)"
      direction: positive
      vsBenchmark: "85% above in-kind mean among actual recipients (Table 1 col. 7)"
    - ref: R3
      outcome: total subsidy received per month
      metric: pp-effect
      value: "Non-targeted households (PMT > 30) received Rp 2,532 less/month in voucher areas (-28% of in-kind mean of Rp 9,162; p = 0.002)"
      direction: negative
      vsBenchmark: "-28% relative to in-kind mean for non-targeted group (Table 1 col. 3)"
    - ref: R4
      outcome: share of households receiving any subsidy
      metric: pp-effect
      value: "Probability of receiving any subsidy fell 10.5pp (16%) for PMT <= 30 (p < 0.001) and 14.5pp (49%) for PMT > 30 (p < 0.001)"
      direction: negative
      vsBenchmark: "Exclusion rise much larger for non-targeted (49%) than targeted (16%); Table 1 cols. 5-6"
    - ref: R5
      outcome: poverty rate (share of households below the poverty line)
      metric: pp-effect
      value: "-4.3pp (20% reduction from baseline rate of 21.0%) for households with PMT <= 15 (bottom ~15%; p = 0.028)"
      direction: negative
      vsBenchmark: "20% reduction from in-kind baseline poverty rate for the poorest group (Table 2 col. 5)"
    - ref: R6
      outcome: rice quality
      metric: coefficient
      value: "0.203 on a 0-1 quality scale; 32% above the in-kind recipient mean of 0.630 (p < 0.001)"
      direction: positive
      vsBenchmark: "32% quality improvement over in-kind benchmark (Table 1 col. 8)"
    - ref: R7
      outcome: food consumption (rice and egg protein)
      metric: pp-effect
      value: "Total egg protein for PMT <= 30: +9.3g/month (+4.3%; p = 0.10); no change in total rice consumption (p = 0.492)"
      direction: positive
      vsBenchmark: "28% of subsidized-egg increase represents net new consumption; no rice substitution (Table 3 Panel B)"
    - ref: R8
      outcome: rice price level
      metric: pp-effect
      value: "Overall: Rp 129 (p = 0.309, not significant); in very remote areas (above 75th pct time to district capital): Rp 334 (3.5%; p = 0.027)"
      direction: none
      vsBenchmark: "No overall price effect; 3.5% increase only in most-isolated villages (Table 4 cols. 1 and 7)"
  resultType: new-finding
  relatesTo:
    - { cite: "Banerjee et al. (2018)", doi: '10.1086/700734', relation: builds-on, note: "prior work on information and food subsidy programs in the same Indonesian Rastra context" }
    - { cite: "Muralidharan et al. (2016)", doi: '10.1257/aer.20141346', relation: builds-on, note: "state capacity and biometric smartcards for welfare delivery in India; parallel administrative-fidelity finding" }
    - { cite: "Cunha, De Giorgi, and Jayachandran (2019)", doi: '10.1093/restud/rdy018', relation: tests, note: "price-theoretic predictions of cash vs in-kind programs; paper finds price effects are small relative to administrative-fidelity gains" }
    - { cite: "Hastings and Shapiro (2018)", doi: '10.1257/aer.20170866', relation: cites, note: "SNAP mental-accounting / earmarking evidence; consistent with egg-consumption stickiness from voucher labeling" }
  openQuestions:
    - "How much the results generalize to settings with different levels of administrative capacity: the poverty gain depends on the accuracy of government targeting data and on whether local officials use discretion to serve the very poor or the comparatively well-off (p. 518, p. 546)."
    - "Whether the self-targeting benefits of low-quality in-kind goods matter in settings where distributed food is not systematically degraded, given that higher rice quality in the voucher program did not impair concentration of benefits (pp. 534-535)."
  replicationCode:
    url: "https://doi.org/10.3886/E167262V1"
    status: available
  extraction:
    - by: "paper-distiller (claude-sonnet-4-6)"
      date: 2026-06-24
      role: extracted
      note: >-
        Full text read (pp. 514-547, all tables and figures); eight results
        extracted from the source PDF. Not human-verified. Not reproduced.
        Replication data at https://doi.org/10.3886/E167262V1 has not been
        run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; all
        eight Core results rows confirmed against Tables 1-4 (pp. 529-541); Nash
        bargaining model and estimating equation (1) verified term-by-term; two
        fixes applied: JEL codes expanded from [I32, I38, H53] to [H53, I18,
        I32, I38, O12] (I18 and O12 were in the abstract but omitted); colorful
        adverb "dramatically" removed from TL;DR.
  licenceVerification:
    - source: "Crossref REST API works/10.1257/aer.20210461"
      checked: 2026-06-24
      by: "paper-distiller (claude-sonnet-4-6)"
      found: >-
        No license[] block returned; standard paywalled AEA publication with no
        CC licence recorded in Crossref metadata. Open-access author copy
        available at MIT DSpace (https://dspace.mit.edu/bitstream/1721.1/153910/1/2023_Electronic_Food_Vouchers_aer.20210461.pdf)
        but no re-use licence attached.
  rightsSignalConflict: false
---

**What this is.** Core results, the administrative-fidelity bargaining model, and
the estimating equation from Banerjee, Hanna, Olken, Satriawan, and Sumarto (2023):
a distilled skeleton for quick orientation. To replicate or extend, read the original
at [https://doi.org/10.1257/aer.20210461](https://doi.org/10.1257/aer.20210461) and
use the replication package at [https://doi.org/10.3886/E167262V1](https://doi.org/10.3886/E167262V1).

## TL;DR

Indonesia's government randomized 105 districts across the transition from its
in-kind rice subsidy program (Rastra: 10 kg free rice per month) to an electronic
voucher program (BPNT: a debit card worth approximately the same value, redeemable
for rice and eggs at private agents). Forty-two districts converted in 2018; 63 were
randomized to convert in 2019. The voucher program improved fidelity to program
design substantially: nearly all voucher recipients received the full entitlement
amount, versus broad distribution of small amounts in the in-kind program. As a
result, targeted (poor) households received 46 percent more subsidy value on net,
poverty rates fell 20 percent for the bottom 15 percent of the distribution, and
rice quality improved substantially. Price-theoretic channels (price effects,
consumption substitution, self-targeting) explain far less of the difference than
the administrative-fidelity mechanism: local village officials who previously
controlled rice distribution could no longer divert benefits once distribution moved
to private bank agents with individually named debit cards.

## Core results

Magnitudes are as reported; locators point into the source PDF. `\*` = 10%,
`\*\*` = 5%, `\*\*\*` = 1% (randomization inference p-values, Young 2019).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Targeted households (PMT ≤ 30) received 46% more subsidy** per month in voucher districts than in in-kind districts | Table 1, col. 2, p. 529 | Rp 13,496 more/month (SE = Rp 1,909; p < 0.001); in-kind mean = Rp 29,219 |
| R2 | **Among recipients, voucher households received 85% more** per month (conditional on receiving any assistance) | Table 1, col. 7, p. 529 | Rp 31,333 more/month (SE = Rp 3,190; p < 0.001); in-kind recipient mean = Rp 36,931 |
| R3 | **Non-targeted households (PMT > 30) received 28% less** subsidy in voucher areas | Table 1, col. 3, p. 529 | -Rp 2,532/month (SE = Rp 564; p = 0.002); in-kind mean = Rp 9,162 |
| R4 | **Probability of receiving any subsidy fell** in voucher areas: 16% decline for targeted, 49% decline for non-targeted | Table 1, cols. 5-6, p. 529 | -10.5pp for PMT ≤ 30 (p < 0.001); -14.5pp for PMT > 30 (p < 0.001) |
| R5 | **Poverty rate fell 20% for the bottom 15%** in voucher areas | Table 2, col. 5, p. 537 | -4.3pp from a baseline of 21.0% for PMT ≤ 15 (p = 0.028) |
| R6 | **Rice quality rated 32% higher** in voucher areas (recipient households) | Table 1, col. 8, p. 529 | Coefficient = 0.203 on a 0-1 Likert scale (p < 0.001); in-kind mean = 0.630 |
| R7 | **Total egg protein consumption rose ~4.3%** for targeted households; no change in total rice consumption (consistent with Hastings and Shapiro 2018 earmarking evidence) | Table 3, Panel B, cols. 4-5, p. 539 | +9.3 g/month (p = 0.10) for PMT ≤ 30; rice coefficient = -0.411 kg (p = 0.492) |
| R8 | **No overall price effect** on rice; modest 3.5% increase in the most remote areas only | Table 4, cols. 1, 7, p. 541 | Overall: Rp 129 (p = 0.309); above 75th pct travel time to district capital: Rp 334 (p = 0.027) |

**Overall (paper's conclusion).** Switching from an in-kind food program to
electronic vouchers substantially increased the concentration of benefits to the
poor, primarily by removing local officials from the distribution chain and
replacing them with private bank agents who issued individually named debit cards
(Banerjee et al. 2018 context). Price-theoretic mechanisms (consumption flexibility,
supply-side price effects, self-targeting) are present but small relative to the
administrative-fidelity mechanism. The result parallels the administrative gains from
biometric smartcards documented in India by Muralidharan et al. (2016), here at
larger scale and with electronic vouchers rather than smartcard identification. The
voucher program also costs about half as much to administer (2.1 vs. 4.1 percent
of benefits disbursed).

## Theory / model

The paper has no structural model. It posits a simple Nash bargaining framework
(Section II.C, pp. 532-534) to explain why the voucher program produced a point
mass at the full entitlement amount while in-kind transfers produced a diffuse
distribution.

**Setup.** A beneficiary is entitled to transfer $$b$$ from the program. A village
head can impose a penalty $$X_i$$ on beneficiary $$i$$ (e.g., exclusion from community
activities). The village head and beneficiary split the surplus with bargaining
weight $$\alpha$$ for the village head. The beneficiary's net transfer and the village
head's rent are:

$$
\text{Transfer}_i = b - (1-\alpha)\,X_i, \qquad \text{village head rent} = \alpha\,X_i.
$$

There is a fixed cost $$F$$ for the village head to initiate bargaining with
beneficiary $$i$$.

**In-kind program.** The village head must distribute rice regardless, so $$F$$ is
sunk. The village head always bargains, and the distribution of $$X_i$$ across
beneficiaries produces a spread of realized transfer amounts (matching the broad
histogram in Figure 1, Panel A, p. 526).

**Voucher program.** Distribution moves to private bank agents with individually
named debit cards; the village head no longer has a role in the transfer unless
he actively seeks one. Now $$F$$ is not sunk. The village head bargains only
if $$\alpha X_i > F$$:

$$
\text{Transfer}_i = \begin{cases} b & \text{if } \alpha X_i \leq F \\ b - (1-\alpha)\,X_i & \text{if } \alpha X_i > F. \end{cases}
$$

This generates: (i) a point mass at the full entitlement $$b$$ for beneficiaries
where $$\alpha X_i \leq F$$, (ii) a gap just below $$b$$, and (iii) a left tail for
those with large $$X_i$$. The predicted distribution matches Figure 1, Panel A:
in voucher districts, 81 percent of monthly deliveries are exactly the
nominal Rp 110,000 entitlement, versus 24 percent in in-kind districts (p. 525).

**Identification.** The paper exploits budget-constrained random assignment: 105
districts were deemed potentially ready to convert, but the budget allowed
converting only about 42. The government randomized which 42 were treated in 2018
and which 63 were treated in 2019, stratifying by geography. Balance checks across
11 baseline variables show no significant imbalance (joint F-test p = 0.384; online
appendix Table 1, p. 523). The paper estimates intent-to-treat effects since only
3 of the 63 control districts converted early (p. 522).

## Method

The main estimator is OLS on the randomized intent-to-treat design with
double-LASSO-selected controls (Belloni, Chernozhukov, and Hansen 2014). The
method builds on `panel-regression` for the regression structure and `lasso` for
variable selection.

Control variables $$\mathbf{X}_{hvds}$$ are selected from a large candidate set
(UDB household characteristics, village-census covariates, and district
$$\times$$ urban/rural baseline averages from SUSENAS) using a double LASSO
procedure. The LASSO simultaneously selects variables predictive of (i) the
outcome and (ii) treatment assignment. Including the double-LASSO-selected controls
raises precision without affecting consistency (Belloni, Chernozhukov, and Hansen 2014).

Standard errors are clustered at the district (kabupaten) level, which is the
unit of randomization (d). Permutation-based (randomization inference) p-values
are computed using 1,000 permutations of the treatment vector (Young 2019).

## Empirical specifications

**Main estimating equation.** All outcomes are estimated via a single
equation (equation 1, p. 523):

$$
y_{hvds} = \beta_0 + \beta_1\,\text{Voucher}_{ds} + \mathbf{X}_{hvds}'\,\gamma + \alpha_s + \varepsilon_{hvds}, \tag{1}
$$

where $$y_{hvds}$$ is the relevant outcome for household $$h$$ in village $$v$$,
district $$d$$, stratum $$s$$; $$\text{Voucher}_{ds}$$ is an indicator equal to 1 if
district $$d$$ was randomly assigned to receive the voucher program in 2018;
$$\mathbf{X}_{hvds}$$ is the vector of double-LASSO-selected control variables;
$$\alpha_s$$ is a stratum fixed effect; and $$\varepsilon_{hvds}$$ is the error term.
Standard errors are clustered at the district level; randomization-inference p-values
from 1,000 permutations (Young 2019) are reported in brackets in all tables.

**Outcome variables and samples.** The paper estimates equation (1) on several
outcomes: total subsidy received (Rp/month, the sum of Rastra and BPNT values),
an indicator for receiving any subsidy, total food consumption of rice and eggs
(from the separate SUSENAS consumption module), rice quality (a 0-1 Likert
scale), rice price (for non-eligible households to avoid compositional effects),
and the poverty indicator. Results are presented for (i) the full sample, (ii)
households with PMT score ≤ 30 at baseline (the approximate target population,
PMT ≤ 30 being the program eligibility threshold), and (iii) PMT > 30 (those
not targeted). For the poverty analysis (Table 2, p. 537), the sample is further
restricted to PMT ≤ 25, ≤ 20, ≤ 15, ≤ 10, and ≤ 5 to document heterogeneous
poverty effects at different points of the distribution.

**Price specification.** To isolate the general-equilibrium price effect,
equation (1) is estimated with rice price as the outcome for households not in the
UDB (i.e., those ineligible for the programs, whose reported prices are not
affected by selection into which program they receive). Heterogeneity by supply
shock size and geographic isolation is assessed through interaction terms
$$\text{Voucher}_{ds} \times \text{Variable}_{d}$$ (Table 4, cols. 2-7, p. 541).

**Subsidy-fidelity specification.** To examine overall leakage at the district
level, the unit of observation becomes the district: the fraction of intended
subsidy actually received (subsidy received from SUSENAS divided by intended
subsidy, computed from the official number of beneficiaries times the
entitlement amount) is regressed on $$\text{Voucher}_{ds}$$ with district-level
strata fixed effects (Table 5, p. 544; N = 105 districts).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| SUSENAS (Survei Sosial Ekonomi Nasional) | Primary outcome data: subsidy receipt, food consumption, prices, poverty; March 2018 (baseline) and March 2019 (endline) waves | No page yet |
| Unified Targeting Database (UDB) | Household-level PMT scores and baseline characteristics for control selection and heterogeneity analysis; 2015 data merged by the government using national IDs; deidentified version in replication package | No page yet |
| PODES (Potensi Desa) village census | Village-level baseline control variables (roads, infrastructure, remoteness measures); 2018 wave | No page yet |
| Program administrative data | District-level intended subsidy disbursements (number of official beneficiaries times entitlement) for leakage calculations | No page yet |

Sample scope: 105 districts across Indonesia; approximately one-fifth of Indonesia's
population (53 million individuals); 3.4 million targeted beneficiary households.
Primary analysis uses household-level March 2019 SUSENAS (endline), approximately
66,000 households. Merged deidentified replication data available at
[https://doi.org/10.3886/E167262V1](https://doi.org/10.3886/E167262V1).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210461) if you are:
studying the design and analysis of large-scale RCTs in the presence of
general-equilibrium effects (Muralidharan and Niehaus 2017); evaluating the
relative merits of in-kind vs. voucher / cash transfer programs in settings with
limited administrative capacity; replicating (the ICPSR replication package at
[https://doi.org/10.3886/E167262V1](https://doi.org/10.3886/E167262V1) contains
all code and data); or reading for the price-effects analysis of the transition
(Section III.B; Cunha, De Giorgi, and Jayachandran 2019 predictions tested at
scale). Table 1 (p. 529) gives the full delivery and targeting results; Table 2
(p. 537) the poverty heterogeneity; Table 3 (p. 539) the consumption results.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(2). This distillation was
extracted by an LLM on 2026-06-24 and is **not human-verified or independently
reproduced**. The AEA copyright applies; no CC licence is recorded in Crossref.
Extract-only; the verbatim PDF is not hosted here.

> Banerjee, Abhijit, Rema Hanna, Benjamin A. Olken, Elan Satriawan, and Sudarno
> Sumarto. "Electronic Food Vouchers: Evidence from an At-Scale Experiment in
> Indonesia." *American Economic Review* 113, no. 2 (February 2023): 514-547.
> DOI: 10.1257/aer.20210461. Copyright 2023 American Economic Association.
> Replication data: DOI 10.3886/E167262V1. This page is an extract by the
> Institute for Automated Research: core results and equations summarized.
