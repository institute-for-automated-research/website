---
title: "A Signal to End Child Marriage: Buchmann, Field, Glennerster, Nazneen & Wang (2023)"
description: >-
  Distilled: A clustered RCT in rural Bangladesh showed a small conditional
  financial incentive (cooking oil, about US$16/year) for adolescent girls to remain
  unmarried reduced underage marriage by 19 percent for girls age 15 and
  increased school enrollment among those in school at baseline. In the main
  parents' sample, a traditional empowerment program had no significant
  marriage effect and raised dowry. A signaling model explains child marriage persistence as a pooling
  equilibrium driven by information asymmetry about bride type. American
  Economic Review 2023, free after 12-month AEA embargo. Sixteen core results
  with source locators, the signaling model, and the empirical specifications.
sidebar:
  label: Buchmann et al. 2023
  order: 1
tags: [paper-summary, development-economics, gender, child-marriage, marriage-markets,
       field-experiment, signaling, open-access, peer-reviewed, unreplicated, data:dhs]
paper:
  authors: Nina Buchmann, Erica Field, Rachel Glennerster, Shahana Nazneen, Xiao Yu Wang
  authorList:
    - { family: Buchmann, given: Nina, affiliation: Stanford University }
    - { family: Field, given: Erica, affiliation: Duke University }
    - { family: Glennerster, given: Rachel, orcid: "0000-0002-9345-4858", affiliation: University of Chicago }
    - { family: Nazneen, given: Shahana, affiliation: Bangladesh }
    - { family: Wang, given: Xiao Yu, orcid: "0000-0002-6800-1275", affiliation: "Duke University / CRI Foundation" }
  year: 2023
  venue: "American Economic Review 113(10), October 2023, 2645-2688"
  venueShort: AER 2023
  doi: 10.1257/aer.20220720
  jel:
    codes: [J12, J16, C93]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Poverty, Education, and Child Welfare", "Demographic Trends and Gender Preferences", "Global Maternal and Child Health"]
  dataAccess: hand-collected
  outcome:
    - probability of underage marriage (below age 18)
    - age at first marriage
    - school enrollment and years of schooling completed
    - dowry amount paid at marriage
    - teenage childbearing
    - denmeher amount due to the wife at divorce
    - husband's education, salaried employment, and residence outside the woman's union
  outcomeClass: [social-welfare, labor-careers-health, educational-choices]
  license: "free access after 12-month AEA embargo; NIH Public Access copy on PMC (https://pmc.ncbi.nlm.nih.gov/articles/PMC12734939/); no CC license found in Crossref metadata (checked 2026-06-25)"
  licenseShort: "AEA 12-month embargo (no CC)"
  access: open
  machineAccess: "AEA landing page accessible; full text via NIH PMC (https://pmc.ncbi.nlm.nih.gov/articles/PMC12734939/); AEA embargo expired Oct 2024 (checked 2026-06-25)"
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 35
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [panel-regression, signaling-game-pbe]
    identification: randomized
  contributionType: [new-theory, new-fact, new-data]
  mechanisms: [information-asymmetry]
  introducesData: true
  scope:
    region: Bangladesh
    period: 2007-01..2017-09
    frequency: mixed
    dataType: [survey, experimental]
    granularity: [individual]
    n: "15,576 women in parents' survey (age 15-17 at program start); 1,755 in young women's survey"
  findings:
    - ref: R1
      outcome: probability of underage marriage (below age 18)
      metric: pp-effect
      value: "-7.4 ppts (SE 0.019, p<0.01) for girls age 15 eligible 2 years; -4.9 ppts (SE 0.010, p<0.01) for full sample age 15-17"
      direction: negative
      vsBenchmark: "control means 38.5% (age 15) and 29.3% (age 15-17)"
    - ref: R2
      outcome: age at first marriage
      metric: coefficient
      value: "+0.32 years (3.9 months, p<0.01) for age 15; +0.21 years (2.5 months, p<0.01) for age 15-17"
      direction: positive
    - ref: R3
      outcome: school enrollment and years of schooling completed
      metric: pp-effect
      value: "+8.6 ppts in school at midline (p<0.01) for age 15; +5.0 ppts in school at endline (p<0.05) for age 15"
      direction: positive
      vsBenchmark: "control means 48.2% in school at midline and 27.8% at endline for the age-15 cohort"
    - ref: R4
      outcome: dowry amount paid at marriage
      metric: coefficient
      value: "US$17.6 (SE 24.3, not significant) incentive effect on dowry; husband education -0.166 (SE 0.119, not significant)"
      direction: none
      vsBenchmark: "control mean US$888 dowry; estimates detect no statistically significant incentive penalty and are imprecise"
    - ref: R5
      outcome: dowry amount paid at marriage
      metric: coefficient
      value: "US$57.3 (SE 20.7, p<0.01) empowerment effect on dowry; no significant marriage-timing effect in the main parents' sample"
      direction: positive
      vsBenchmark: "6% above control mean of US$888; no statistically significant offsetting changes in husband quality or denmeher"
    - ref: R6
      outcome: probability of underage marriage (below age 18)
      metric: pp-effect
      value: "-2.9 ppts (SE 1.6, p<0.10) for untreated age 15-17 within 500m of incentive village; placebo age 7-14: -0.9 ppts (SE 1.5, not significant)"
      direction: negative
      vsBenchmark: "control mean 28.8% in non-incentive communities; the placebo provides no evidence of a broad spillover to ineligible ages"
    - ref: R7
      outcome: probability of underage marriage (below age 18)
      metric: pp-effect
      value: "Low social conservatism (nonpreferred type): -14.7 ppts (SE 5.9, p<0.05); high social conservatism (preferred type): +9.3 ppts (SE 8.0, not significant)"
      direction: mixed
      vsBenchmark: "control means 36.0% (low SC) and 47.9% (high SC); the type-specific pattern supports the predicted signaling channel"
    - { ref: R8, outcome: probability of marriage before age 16, metric: pp-effect, value: "-2.0 ppts (p<0.10) for girls age 15 at program start", direction: negative, vsBenchmark: "Control mean 11.3%" }
    - { ref: R9, outcome: teenage childbearing, metric: pp-effect, value: "-1.6 ppts (p<0.10) for the age 15-17 sample; -3.9 ppts (p<0.05) for age 15", direction: negative, vsBenchmark: "Reduction in birth before age 20; the birth-history outcome is less exposed to marriage-age reporting bias" }
    - { ref: R10, outcome: years of schooling completed, metric: coefficient, value: "+0.17 years (p<0.10) for age 15-17; +0.25 years (p>0.10) for age 15", direction: positive, vsBenchmark: "The age-15 estimate is not statistically significant" }
    - { ref: R11, outcome: probability of underage marriage (below age 18), metric: coefficient, value: "Empowerment coefficient -0.007 (SE 0.008) for age 15-17; -0.005 (SE 0.015) for age 15, neither statistically significant", direction: none, vsBenchmark: "No marriage-timing effect of the empowerment program in the parents' sample" }
    - { ref: R12, outcome: marriage-market outcomes of incentive recipients, metric: coefficient, value: "Denmeher +US$95.741 (SE 124.305); husband salaried -0.019 (SE 0.013); husband from outside union +0.017 (SE 0.017); none statistically significant", direction: none, vsBenchmark: "No statistically significant differences in denmeher or the reported husband characteristics" }
    - { ref: R13, outcome: difference between parent- and young-woman-reported age at first marriage, metric: level, value: "Parents' reports averaged 1.5 months higher; the difference was balanced across treatment arms", direction: positive, vsBenchmark: "Comparison in a subsample of 1,222 women; no significant treatment bias detected" }
    - { ref: R14, outcome: years of schooling completed, metric: coefficient, value: "Empowerment coefficient 0.174 (SE 0.091) on last class passed for age 15-17; reported as significant at p<0.10", direction: positive, vsBenchmark: "Table 3 endline parents' sample" }
    - { ref: R15, outcome: school enrollment and years of schooling completed, metric: coefficient, value: "Incentive-by-empowerment interaction: no significant complementarity for marriage outcomes or schooling; last class passed interaction -0.166 (SE 0.243)", direction: none, vsBenchmark: "Interaction coefficients are not statistically significant across Tables 2 and 3" }
    - { ref: R16, outcome: probability of underage marriage (below age 18), metric: pp-effect, value: "-0.9 ppts (SE 1.5, not significant) for observably ineligible girls age 7-14 living within 500m of an incentive village", direction: none, vsBenchmark: "Placebo outcome in nonincentive communities" }
  resultType: new-finding
  relatesTo:
    - { cite: "Wahhaj (2018)", doi: '10.1016/j.jebo.2018.06.001', relation: builds-on, note: "closest theoretical antecedent; both models show early marriage persists as signaling equilibrium without preference for young brides; key differences in mechanism (differential returns to education by type) and policy predictions" }
    - { cite: "Field and Ambrus (2008)", doi: '10.1086/593333', relation: cites, note: "documents causal negative effect of early marriage on female schooling in Bangladesh; motivates the education channel in the signaling model" }
    - { cite: "Duflo, Dupas, and Kremer (2015)", doi: '10.1257/aer.20121607', relation: cites, note: "evidence that transfers conditional on school attendance delay marriage in contexts without dowry; this paper conditions on marriage age alone in a dowry context" }
    - { cite: "Baird, McIntosh, and Ozler (2011)", doi: '10.1093/qje/qjr032', relation: cites, note: "cash-transfer evidence from Malawi cited as a context where conditional transfers did not reduce marriage" }
  openQuestions:
    - "Scalability depends on feasibility of monitoring marriage status at larger scale; rising digitization of identification may reduce monitoring costs over time (p. 2679)."
    - "ITT estimates exclude general-equilibrium effects on untreated girls; full impact depends on comprehensiveness of program coverage (p. 2679)."
    - "Long-run adult outcomes beyond marriage and schooling (labor force participation, bargaining power, children's outcomes) are not observed in the 2017 endline and are the subject of a planned third data collection wave (p. 2659)."
  replicationCode:
    url: "https://doi.org/10.3886/E192114V1"
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-25
      role: extracted
      note: "Full PDF read (pp. 2645-2688); seven core results extracted with table and page locators. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; R3 midline control mean corrected from 46.6% to 48.2% (age-15 cohort, Table 3 col 2); colorful adjective removed from TL;DR; all equations and specifications verified term-by-term; six other rows passed without change."
    - by: paper-distiller (gpt-6-luna)
      date: 2026-10-04
      role: extracted
      note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 44-page PDF. Added nine distinct main-text results and matching findings entries, included additional dependent variables, corrected equation numbering, and completed spillover specification sample details. These additions are extracted, not human-verified and not reproduced."
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 16 Core results, equations, specifications, classifications, findings, prose, DOI edges, and frontmatter against the PDF. Corrected R1/R3/R4 locators and R3 significance, Result 1 type signaling, Result 2's missing equilibrium condition, the Result 4 expected-quality denominator, the data classification and subdistrict sample description, and overstrong significance and spillover claims; no headline result is omitted. Table-locator pass (2026-10-04): R5, Table 2, col 1, p. 2666 -> Table 2, col. 1, p. 2661." }
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20220720
      checked: 2026-06-25
      by: paper-distiller (claude-sonnet-4-6)
      found: "No license[] block in Crossref metadata; published 2023-10-01; container-title American Economic Review. OpenAlex reports NIH PMC open-access copy at https://pmc.ncbi.nlm.nih.gov/articles/PMC12734939/"
  rightsSignalConflict: false
---

**What this is.** Core results, the signaling model of marriage timing, and
the main empirical specifications from a 44-page paper: enough to know what
it found and how, without reading the full source. To replicate or extend,
read the original at the [DOI](https://doi.org/10.1257/aer.20220720).

## TL;DR

The paper runs a clustered RCT in rural Bangladesh (2007-2017) testing two
policy approaches to child marriage: (i) a conditional financial incentive
(cooking oil, approximately US$16/year) paid to families while their adolescent
daughters remain unmarried, and (ii) a standard adolescent empowerment program
(Kishore Kontha). Girls age 15 eligible for two years are 19 percent less likely
to marry underage. Among girls in school at program start, the age-15 group is
also more likely to remain enrolled. The study detects no statistically
significant incentive penalty in marriage-market outcomes. In the main parents'
sample, the empowerment program has no statistically significant marriage
effect and raises dowry; a smaller young-women sample offers suggestive evidence
of earlier marriage. The paper develops a signaling model in which early
marriage signals socially conservative bride type (valued by grooms). Its
predicted spillover appears among less socially conservative women near incentive
communities; the estimate for more conservative women is not statistically
significant.

## Core results

Magnitudes as reported; \*\*\* = 1%, \*\* = 5%, \* = 10%. ITT estimates
from OLS with Huber-White SEs clustered at the community level and union fixed
effects (Tables 2-4). Table 5 uses a proximity-based spillover design within
non-incentive communities.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Incentive reduces underage marriage (< 18) | Table 2, cols. 1-2, p. 2661 | -7.4 ppts\*\*\* (age 15, 19% reduction); -4.9 ppts\*\*\* (age 15-17, 17%); control means 38.5% and 29.3% |
| R2 | Incentive increases average age at marriage | Table 2, cols 6-7, p. 2661 | +0.32 years\*\*\* (3.9 months) for age 15; +0.21 years\*\*\* (2.5 months) for age 15-17 |
| R3 | Incentive increases school enrollment and attainment | Table 3, cols. 2, 4, p. 2664; text p. 2663 | +8.6 ppts\*\*\* in school at midline for age 15; +5.0 ppts\*\* in school at endline for age 15; control means 48.2% (midline) and 27.8% (endline) for age-15 cohort |
| R4 | No marriage-market penalty detected for incentive recipients | Table 4, cols. 1, 3, p. 2666 | Dowry: US$17.6 (SE 24.3, not sig.); husband education: -0.166 (SE 0.119, not sig.); control mean US$888 |
| R5 | Empowerment raises dowry with no marriage improvement | Table 4, col. 1, p. 2666; Table 2, col. 1, p. 2661 | Dowry +US$57.3\*\*\* (6% above control); marriage rate coefficient -0.007 (SE 0.008, not sig.) |
| R6 | Spillovers on untreated nearby women; null for ineligible ages | Table 5, cols 1-2, p. 2678 | Age 15-17 within 500m: -2.9 ppts\* married <18; placebo age 7-14: -0.9 ppts (not sig.) |
| R7 | Spillovers are specific to less socially conservative (nonpreferred-type) women | Table 5, cols 3-4, p. 2678 | Low SC: -14.7 ppts\*\* married <18; high SC: +9.3 ppts (not sig.); control means 36.0% and 47.9% |
| R8 | Incentive reduces marriage before age 16 among girls eligible for two years | Table 2, col. 3, p. 2661 | -2.0 ppts\* (18% relative to control mean 11.3%) |
| R9 | Incentive reduces teenage childbearing, supporting the marriage-timing result with a less bias-prone birth-history outcome | Table 2, cols. 8-9, p. 2661; text p. 2663 | -1.6 ppts\* for ages 15-17; -3.9 ppts\*\* for age 15 |
| R10 | Incentive increases schooling attainment, measured by last class passed | Table 3, cols. 5-6, p. 2664; text p. 2664 | +0.17 years\* for ages 15-17; +0.25 years (not significant) for age 15 |
| R11 | Empowerment has no statistically significant effect on marriage timing in the main parents' sample | Table 2, cols. 1-7, p. 2661 | Married <18: -0.007 (SE 0.008), ages 15-17; -0.005 (SE 0.015), age 15; no significant effect across reported marriage outcomes |
| R12 | Incentive recipients show no marriage-market penalty in denmeher or additional husband characteristics | Table 4, cols. 2, 4-5, p. 2666 | Denmeher +US$95.741 (SE 124.305); husband salaried -0.019 (SE 0.013); husband outside union +0.017 (SE 0.017); all not significant |
| R13 | Parent-reported marriage age closely matches young women's reports, with no treatment-arm reporting bias | Text p. 2659 | In the 1,222-woman subsample, parents reported marriage age 1.5 months higher on average; difference balanced across treatment arms |
| R14 | Empowerment raises schooling attainment despite no main-sample marriage effect | Table 3, col. 5, p. 2664; text p. 2665 | Last class passed +0.174 (SE 0.091), p<0.10, for ages 15-17 |
| R15 | No complementarity between incentive and empowerment for marriage or schooling outcomes | Tables 2-3, pp. 2661, 2664; text p. 2665 | Interaction coefficients are statistically insignificant throughout; last class passed interaction -0.166 (SE 0.243) |
| R16 | No proximity spillover appears for girls observably ineligible for the incentive | Table 5, col. 2, p. 2678 | -0.9 ppts (SE 1.5), not significant, for girls age 7-14 within 500m of incentive communities |

**Overall (paper's conclusion).** The pattern is inconsistent with child
marriage reflecting strong cultural preferences for young brides or unraveling
in a thin marriage market. A signaling model in which early marriage signals
socially conservative (preferred) bride type explains why: a small financial
incentive orthogonal to type can shift the equilibrium away from universal early
marriage: treated women and untreated nonpreferred types delay, while untreated
preferred types marry early in the semiseparating equilibrium.
The empowerment program's failure, and its associated dowry increase, is also
predicted by the model: making more women appear nonpreferred strengthens the
incentive for conservative women to signal type by marrying early.

## Theory / model

The model is a two-period marriage-market signaling game (Section IV,
pp. 2666-2675). Women have measure $$|W| = 1$$ and men measure $$|M| > 1$$.
Women are heterogeneous in an unobservable type $$\Theta \in \{\Theta_H, \Theta_L\}$$,
where $$\Theta_H$$ (preferred, socially conservative) has population fraction
$$f \in (0,1)$$ and is privately known. Men are homogeneous and desire $$\Theta_H$$ women.

If a woman marries in period $$t_1$$ she has education $$E_L$$; if she delays to
$$t_2$$ her education rises to $$E_H > E_L$$. The total transferable utility of a
union between a man and woman of type $$\Theta_j$$ and education $$E_j$$ is
$$\mu(\Theta_j, E_j)$$, increasing in both arguments. Two conditions govern
equilibrium (p. 2669):

**(i) Preferred type is first-order in desirability:**

$$
\mu(\Theta_H, E_H) \;>\; \mu(\Theta_H, E_L) \;>\; \mu(\Theta_L, E_H) \;>\; \mu(\Theta_L, E_L)
$$

**(ii) Single-crossing, type and education are substitutes:**

$$
\mu(\Theta_H, E_H) - \mu(\Theta_H, E_L) \;<\; \mu(\Theta_H, E_L) - \mu(\Theta_L, E_H) \;<\; \mu(\Theta_L, E_H) - \mu(\Theta_L, E_L)
$$

Condition (ii) implies preferred types gain less from delayed marriage (higher
education) than nonpreferred types. Dowry $$D$$ can be conditioned only on
observable characteristics (marriage timing, education); men compete for
available women and receive their outside options in equilibrium.

**Result 1** (p. 2671, Section IV.B): Under a liquidity constraint
$$Y < \omega_M + \mu(\Theta_H, E_H) - 2\mu(\Theta_H, E_L)$$, no separating equilibrium
exists: nonpreferred types cannot afford the dowry $$D|t_2$$ required to separate
as nonpreferred types.

**Result 2** (p. 2672, Section IV.B): If
$$\mu(\Theta_H, E_H) - \mu(\Theta_H, E_L) < \mu(\Theta_H, E_L) - \bar{\mu}(E_H) < \mu(\Theta_L, E_H) - \mu(\Theta_L, E_L),$$
the unique equilibrium is pooling on $$t_1$$ (all women marry early), with dowries:

$$
D|t_1 = \omega_M - \bigl[f\,\mu(\Theta_H, E_L) + (1-f)\,\mu(\Theta_L, E_L)\bigr], \qquad D|t_2 = \omega_M - \mu(\Theta_L, E_H)
$$

This pooling equilibrium survives the intuitive criterion. Pooling on $$t_2$$ fails
that criterion because preferred types would
profitably deviate to $$t_1$$ (where grooms know with certainty that early
entrants are preferred type). Pooling on $$t_1$$ survives because neither type
can credibly signal itself by deviating to $$t_2$$. This is the child-marriage
equilibrium of Wahhaj (2018) but generated here by differential returns to
education rather than preference for young brides.

**Corollary 2** (p. 2675): A decrease in $$f$$ (more nonpreferred types)
makes pooling more likely. This is the mechanism by which the empowerment
program can worsen early marriage: by reducing the perceived fraction of
preferred types, it strengthens the signaling incentive for conservative women.

**Result 3** (p. 2673): A random incentive independent of type cannot sustain a
separating equilibrium; it relaxes liquidity constraints for preferred and
nonpreferred types alike. **Result 4** (pp. 2673-2674): If a conditional incentive $$C$$ satisfying

$$
C \;>\; \mu(\Theta_H, E_L) - \bar{\mu}(E_H) - \bigl[\mu(\Theta_H, E_H) - \mu(\Theta_H, E_L)\bigr]
$$

is offered randomly to fraction $$\tau$$ of women (treatment orthogonal to type),
a semiseparating PBE exists and Pareto-dominates the pooling equilibrium.
Untreated preferred types marry at $$t_1$$; all other women delay to $$t_2$$.
Equilibrium dowries under the incentive:

$$
D|t_1 = \omega_M - \mu(\Theta_H, E_L), \qquad D|t_2 = \omega_M - \bar{\mu}(E_H)
$$

The paper defines $$\bar{\mu}(E_H)$$ as expected match quality among $$t_2$$
entrants. Written out from that definition, it is
$$\bar{\mu}(E_H) \equiv \frac{\tau f\,\mu(\Theta_H, E_H) + \tau(1-f)\,\mu(\Theta_L, E_H) + (1-\tau)(1-f)\,\mu(\Theta_L, E_H)}{\tau f + \tau(1-f) + (1-\tau)(1-f)}$$
when the fraction of preferred types among $$t_2$$
entrants is $$f' < f$$. Crucially, untreated nonpreferred types also delay (the
**spillover**): because treatment status is unobservable, delaying marriage is
no longer a certain signal of being the nonpreferred type (Prediction 4,
p. 2676).

## Method

**Experimental design.** A clustered randomized trial in 460 communities
across five subdistricts in rural Bangladesh, randomized in ratio 1:2:1:2 to
(i) incentive only, (ii) empowerment only, (iii) both, (iv) control.
Randomization was stratified by union (administrative grouping of approximately
10 communities) and community size. All girls aged 15-17 and unmarried at
program start (January 2008) were eligible for the conditional incentive; 92
percent received it at least once. The empowerment program (Kishore Kontha)
reached 93 percent of eligible girls.

The incentive program was implemented January 2008 to August 2010. Main outcome
data come from an endline survey conducted 2016-2017, approximately 4.5 years
after program completion.

**Estimation.** ITT effects are estimated via OLS linear probability models
(`panel-regression`) with Huber-White robust standard errors clustered at the
community level (the unit of randomization). The theoretical mechanism is
formalized in the `signaling-game-pbe` model (Results 1-4 above). Field and
Ambrus (2008) establish the education channel in Bangladesh; Duflo, Dupas, and
Kremer (2015) and Baird, McIntosh, and Ozler (2011) provide comparable evidence
from transfer programs in other contexts.

## Empirical specifications

**Main ITT regression** (Equation 1, p. 2659):

$$
Y_{icu} = \alpha + \beta_1 I_c + \beta_2 E_c + \beta_3 (I_c \times E_c) + \beta_4' \mathbf{X}_{ic} + \varepsilon_{icu} \tag{1}
$$

where $$Y_{icu}$$ is outcome for person $$i$$ in community $$c$$ and union $$u$$;
$$I_c$$ = assignment to the incentive program; $$E_c$$ = assignment to the
empowerment program; $$\mathbf{X}_{ic}$$ includes village population tercile and union
fixed effects, age indicators, household size, older unmarried sister in
household, school enrollment, mother's education, and public transport access
(a proxy for remoteness). The interaction $$I_c \times E_c$$ tests complementarity.
Tables 2, 3, and 4 report $$\hat{\beta}_1$$, $$\hat{\beta}_2$$, $$\hat{\beta}_3$$.
The main analysis sample covers 15,576 women in the parents' survey.

**Spillover specification (written out from Section V; Table 5, p. 2678):**
Estimated on nonincentive communities only, comparing women within 500 meters of an incentive community
center to women farther away:

$$
Y_{icu} = \alpha + \gamma \cdot \text{Close}_c + \delta' \mathbf{W}_{ic} + \varepsilon_{icu}
$$

where $$\text{Close}_c = 1$$ if the community center is within 500 meters of the
closest incentive community center. $$\mathbf{W}_{ic}$$ includes union fixed effects,
baseline characteristics, and distances to the closest community center and safe
space (to rule out urbanicity confounds). Placebo test: same regression for
girls aged 7-14 who are observably ineligible. Type heterogeneity: equation (4)
is estimated separately for girls with above-median and below-median social
conservatism index (columns 3-4 of Table 5), testing Prediction 4 of the
signaling model. Huber-White standard errors are clustered at the community
level. The parents' survey specification has 10,544 observations for ages 15-17
and 40,136 for the ineligible ages 7-14 placebo; the young women's survey
specification has 682 low-conservatism and 417 high-conservatism observations.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Authors' RCT survey data (parents' and young women's surveys) | Main analysis: marriage outcomes, schooling, dowry, husband characteristics; 460 communities, 24,095 girls at baseline, 15,576 in endline parents' sample | No page yet (hand-collected; replication data at https://doi.org/10.3886/E192114V1) |
| Bangladesh Demographic and Health Surveys (DHS, waves 2004-2017) | Descriptive context: trends in marriage age, education, and child mortality 2004-2017 (Figure 1, p. 2646) | No page yet |

Sample scope: rural Bangladesh. The initial sample covered six subdistricts
(Daulatkhan, Babuganj, Muladi, Patuakhali Sadar, Bauphal, Bhola Sadar); Muladi
was dropped in 2011, excluding 2,061 girls in 84 communities, leaving five
subdistricts in the analyzed sample. Program period January 2007 to
September 2017. Main endline wave: 2016-2017.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20220720) if you are: (i)
extending the signaling model to other cultural contexts with bride-type
heterogeneity or dowry; (ii) designing a conditional transfer program for child
marriage reduction; (iii) examining the cost-effectiveness calculation of
US$1,010 NPV per US$1,000 invested (Buchmann et al. 2021 companion paper);
or (iv) testing Predictions 1-4 of the signaling model in a new setting. Tables
2, 3, and 5 contain the core empirical results; Section IV formalizes the
model; Appendix A carries the proofs.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(10), October 2023.
This distillation was extracted by an LLM on 2026-10-04 and re-verified against
the source PDF on 2026-10-04; it has not been independently reproduced. The
article is freely accessible after the AEA 12-month embargo (expired October
2024) and via NIH PMC; no CC
license applies, so redistribution is extract-only.

> Buchmann, Nina, Erica Field, Rachel Glennerster, Shahana Nazneen, and Xiao Yu Wang.
> "A Signal to End Child Marriage: Theory and Experimental Evidence from Bangladesh."
> *American Economic Review* 113, no. 10 (October 2023): 2645-2688.
> DOI: 10.1257/aer.20220720.
