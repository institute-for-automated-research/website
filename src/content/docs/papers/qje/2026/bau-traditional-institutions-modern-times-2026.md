---
title: "Traditional Institutions in Modern Times: Bau, Khanna, Low & Voena (2026)"
description: >-
  Distilled: Using two new surveys on dowry property rights and a natural
  experiment from India's highway expansion, this paper shows that grooms'
  parents commonly retain dowry from migrant sons and that stronger historical
  dowry traditions predict higher male out-migration rates and larger migration
  responses to falling migration costs. The Quarterly Journal of Economics
  141(1), 2026, paywalled. Seven core results with source locators, datasets,
  the theoretical model, and empirical specifications.
sidebar:
  label: Bau-Khanna-Low-Voena 2026
  order: 1
tags: [paper-summary, development-economics, migration, marriage-markets,
       household-finance, cultural-economics, intergenerational-transfers,
       panel-regression, difference-in-differences, event-study,
       peer-reviewed, unreplicated,
       data:nss-india, data:giuliano-nunn-ancestral, data:reds-india,
       data:ihds-india, data:capex-cmie]
paper:
  authors: Natalie Bau, Gaurav Khanna, Corinne Low, Alessandra Voena
  authorList:
    - { family: Bau, given: Natalie, orcid: "0000-0001-6950-8839", affiliation: "University of California, Los Angeles" }
    - { family: Khanna, given: Gaurav, orcid: "0000-0002-6846-3437", affiliation: "University of California, San Diego" }
    - { family: Low, given: Corinne, orcid: "0000-0002-8157-6196", affiliation: "University of Pennsylvania" }
    - { family: Voena, given: Alessandra, affiliation: Stanford University }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 205-262
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf041
  jel:
    codes: [J12, J61, O12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Intergenerational Family Dynamics and Caregiving", "Demographic Trends and Gender Preferences"]
  dataAccess: hand-collected
  outcome:
    - probability of net dowry taking by grooms' parents
    - male out-migration rate
    - migration response to highway construction by strength of dowry tradition
  outcomeClass: [household-finance, labor-careers-health]
  license: >-
    All rights reserved. Published by Oxford University Press on behalf of
    President and Fellows of Harvard College. Crossref license record:
    CHORUS Standard Publication Model
    (https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model),
    content-version vor, start 2025-08-13, delay-in-days 0.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford Academic site, 2026-06-28)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 4
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences, event-study]
    identification: natural-experiment
  contributionType: [new-theory, new-data, new-fact]
  mechanisms: [intergenerational-transfer-friction, risk-sharing, financial-constraint]
  introducesData: true
  scope:
    region: India
    period: 1996..2020
    frequency: mixed
    dataType: [survey, administrative]
    granularity: [individual, aggregate]
    n: "557 men (Destination Survey 2018); 3,069 sons from 2,541 households (Origin Survey 2020); ~188,192 individuals aged 15-45 (NSS Round 64, 2007-08)"
  findings:
    - { ref: R1, outcome: probability of net dowry taking by grooms' parents, metric: probability, value: "45% net takers Destination Survey; 27% Origin Survey (Online Appendix Tables A.1, A.2)", direction: mixed }
    - { ref: R2, outcome: probability of net dowry taking by grooms' parents, metric: pp-effect, value: "0.076** (se 0.038) Origin Survey col(1); 0.218** (se 0.086) Destination Survey col(3)", direction: positive, vsBenchmark: "non-migrant sons, coresidence and mar-year FE (Table I)" }
    - { ref: R3, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Migrant x ln(son occ. score) = 0.199** (se 0.090) Origin Survey col(2)", direction: positive }
    - { ref: R4, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Migrant x parents have veto power = 0.229*** (se 0.076) Destination Survey col(4)", direction: positive }
    - { ref: R5, outcome: probability of net dowry taking by grooms' parents, metric: coefficient, value: "Son transfers x migrant son = 0.176** (se 0.075) Origin Survey col(2)", direction: positive }
    - { ref: R6, outcome: male out-migration rate, metric: coefficient, value: "Continuous dowry = 0.0257** (se 0.0101) to 0.0451** (se 0.0199) across specifications (Table III cols 1-2)", direction: positive }
    - { ref: R7, outcome: migration response to highway construction by strength of dowry tradition, metric: pp-effect, value: "Large significant increase in out-migration for men aged 15-30 in dowry districts (above 0.1% cutoff); near-zero for non-dowry districts; no effect for men aged 31-45 (Figure VI)", direction: positive, vsBenchmark: "non-dowry districts (below 0.1% cutoff)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Munshi and Rosenzweig (2016)", doi: '10.1257/aer.20131365', relation: tests, note: "their finding that social networks restrict rural-urban migration; dowry relaxes the old-age support constraint that network lock-in exploits" }
    - { cite: "Anderson and Bidner (2015)", doi: '10.1093/qje/qjv014', relation: extends, note: "their model of property-rights reallocation over dowry; this paper adds migration decisions and provides first quantitative test" }
    - { cite: "Botticini and Siow (2003)", doi: '10.1257/000282803769206368', relation: builds-on, note: "their model of dowry as early bequest under patrilocality; this paper documents modern reallocation to grooms' parents as sons migrate" }
    - { cite: "Giuliano and Nunn (2018)", doi: '10.1080/20780389.2018.1435267', relation: builds-on, note: "their Ancestral Characteristics methodology; used here to construct district-level historical dowry tradition measures for India" }
    - { cite: "Borusyak, Jaravel, and Spiess (2024)", doi: '10.1093/restud/rdae007', relation: builds-on, note: "their imputation-based staggered event-study estimator used for the GQ highway natural experiment" }
  openQuestions:
    - "Whether expanding formal pension programs would reduce demand for dowry and so reduce its adverse consequences for women; the paper notes this as a policy complement to prohibitions on dowry (p. 256)."
    - "Whether the dowry-as-pension channel generalizes beyond India to other settings where patrilocal old-age support is disrupted by urbanization (p. 255)."
  replicationCode:
    url: "https://doi.org/10.7910/DVN/XCNXQL"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full PDF read (pp. 205-262, 58 pages); seven core results extracted from Tables I-III and Figure VI. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all seven rows confirmed. Fixed: (1) 'counterintuitive' colorful adjective removed from R5; (2) T1 label corrected from 'Predictions 1-4' to 'Predictions 2 and 3' per Table I title; (3) T1 FE description corrected from 'coresidence × mar-year × age cells' (interaction) to two additive groups as shown in Table I." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf041", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license content-version=vor URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model delay-in-days=0 start=2025-08-13; artifact footer All rights reserved Oxford University Press on behalf of President and Fellows of Harvard College" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the household model, and the empirical specifications with the actual equations: enough to know what it found and how, without reading all 58 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf041).

## TL;DR

The paper introduces and tests the hypothesis that dowry in modern India functions as a pension for grooms' parents. When sons migrate for work, they can no longer provide traditional in-person old-age support; the liquidity from the bride's dowry lets families make upfront transfers to parents at the time of marriage, easing this intergenerational friction. Using two new surveys (Destination Survey 2018, Origin Survey 2020) with first-ever quantitative data on who owns dowry within the household, the paper documents that 27-45% of grooms' parents are net takers from the dowry, especially when sons are migrants and earn more. In nationally representative NSS data, male migration rates are higher in districts with stronger historical dowry traditions (Giuliano and Nunn (2018) methodology). Exploiting the staggered construction of the Golden Quadrilateral (GQ) and North-South/East-West highway corridors as a natural experiment (Borusyak, Jaravel, and Spiess (2024) event-study estimator), young men (15-30) from dowry districts show significantly larger migration increases than those from non-dowry districts when migration costs fall.

## Core results

Magnitudes and significance as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Net dowry taking by grooms' parents is **common but heterogeneous**: some parents take, many give, distribution roughly centered at zero | Online Appendix Tables A.1, A.2; Figure III, p. 231 | 45% net takers (Destination Survey); 27% (Origin Survey); distribution of Net Transfers to Grooms' Parents spans both positive and negative, unlike gross/net dowry measures in the literature |
| R2 | **Migrant sons' parents are significantly more likely to take from the dowry** than non-migrant sons' parents | Table I cols (1) and (3), p. 232 | Origin Survey: migrant coefficient = 0.076\*\* (se=0.038); Destination Survey: 0.218\*\* (se=0.086); controlling for coresidence, marriage year, age, son/father education FE, and net dowry |
| R3 | **Higher-earning migrant sons' parents are more likely to take**: interaction of migration and son's occupational score is positive and significant | Table I col (2), p. 232 | Origin Survey: Migrant x ln(son occ. score) = 0.199\*\* (se=0.090); non-migrant x score = 0.014 (ns) |
| R4 | **Greater parental bargaining power (Pareto weight) increases net taking** for both migrant and non-migrant sons | Table I col (4), p. 232 | Migrant x veto power = 0.229\*\*\* (se=0.076); Non-migrant x veto power = 0.221\*\* (se=0.086); consistent with dowry redistributing resources according to Pareto weights regardless of migration |
| R5 | **Sons who remit are more likely to have parents who took from the dowry** (Prediction 4: remittances signal high-Pareto-weight households that exhaust all transfer channels) | Table II col (2), p. 238 | Son transfers x migrant son = 0.176\*\* (se=0.075); robust to income controls |
| R6 | **Historical dowry traditions positively predict male out-migration rates** in NSS data | Table III cols (1)-(2), p. 246 | Continuous dowry = 0.0257\*\* (se=0.0101) to 0.0451\*\* (se=0.0199); remains positive controlling for state and birth-year FE, caste, ethnographic and geographic controls |
| R7 | **GQ highway construction raises out-migration significantly more for young men (15-30) in dowry districts** than in non-dowry districts; no effect for older men (31-45) | Figure VI, p. 252 | Large, significant post-construction increase in all and employment-based migration for men aged 15-30 in dowry districts (0.1% cutoff); coefficient near zero for non-dowry districts; Panel B effect for ages 31-45 is indistinguishable from zero |

**Overall (paper's conclusion).** All six model predictions are confirmed. Dowry appears to have adapted in modern India: rather than functioning purely as a bequest to daughters as in its traditional form described by Botticini and Siow (2003), it increasingly operates as a mechanism for sons' parents to secure resources at the time of marriage when sons migrate and can no longer co-reside and provide in-kind old-age support. Dowry traditions may therefore help explain why rural-urban migration in India remains below its aggregate-productivity-maximizing level as identified by Munshi and Rosenzweig (2016): areas with weaker dowry traditions face higher effective barriers to migration.

## Theory / model

The paper (Section III, pp. 215-223) develops a two-stage collective household model (Chiappori 1988) in which a family with parents and one son decides jointly over marriage gifts, old-age savings, and migration.

**Setup.** Parents have Pareto weight $$\theta(\mathbf{z}) \in (0,1)$$, where $$\mathbf{z}$$ are distribution factors (e.g., whether parents have veto power over the son's marriage). The son has Pareto weight $$1 - \theta(\mathbf{z})$$. Parents earn $$y_{1P}$$ in stage 1 (working age) and zero in stage 2 (retirement). The son earns zero in stage 1 and $$y_{2K}$$ in stage 2, plus a net return to migration $$R$$ if $$m = 1$$. The bride's endowment is $$E$$, of which a liquid fraction $$d \in [0,1]$$ is available as dowry at marriage (stage 1); the illiquid fraction $$(1-d) \cdot E$$ represents future inheritance or human capital. Migration introduces a friction $$\gamma > 0$$: transferring one unit $$\alpha$$ from the son to the parents costs $$(1 + \gamma \cdot m) \cdot \alpha$$ when $$m = 1$$.

**Household optimization.** The family solves (equation (1), p. 217):

$$
\max_{\substack{G \geq 0,\; S_1 \geq 0,\; \alpha \geq 0 \\ m \in \{0,1\},\; c_{2P} \geq 0,\; c_{2K} \geq 0}}
\theta(\mathbf{z}) \ln(c_{2P}) + (1 - \theta(\mathbf{z})) \ln(c_{2K}) \tag{1}
$$

subject to:

$$
S_1 + G \leq y_{1P} + d \cdot E
$$

$$
c_{2P} \leq S_1 + \alpha
$$

$$
c_{2K} \leq y_{2K} + (1-d) \cdot E + R \cdot m + G - (1 + \gamma \cdot m) \cdot \alpha
$$

Here $$G \geq 0$$ is the net marriage gift to the son (the son is a net taker when $$G < d \cdot E$$, i.e., parents retain $$d \cdot E - G > 0$$), $$S_1$$ is parents' savings, and $$\alpha \geq 0$$ is the son's stage-2 transfer to parents. Grooms' parents are **net takers** ($$d \cdot E > G$$) when the net transfer to them is positive.

**Solutions (pp. 218-219).** Three regimes arise when $$m = 1$$:

(i) *Marriage-gifts solution*: $$\alpha^* = 0$$, $$G^* > 0$$. Stage-1 resources are sufficient for parents to achieve their first-best consumption without costly stage-2 remittances. Migration does not distort allocation.

(ii) *Autarky solution*: $$\alpha^* = 0$$, $$G^* = 0$$. Stage-1 resources are in an intermediate range; parents exhaust them and the son sends nothing in stage 2.

(iii) *Remittances solution*: $$\alpha^* > 0$$, $$G^* = 0$$. Stage-2 resources are high enough relative to stage-1 to warrant costly remittances despite $$\gamma > 0$$.

In regimes (ii) and (iii), migration only occurs when $$R$$ exceeds a strictly positive threshold (the consumption distortion cost of migration). A larger $$d$$ (stronger dowry practice) lowers this threshold by pre-funding the stage-2 consumption shortfall at the cheaper stage-1 price, reducing the migration friction. This is the core mechanism: dowry practices enable migration by front-loading intergenerational transfers to the pre-migration stage, where the transfer cost is zero.

**Six testable predictions** (Section III.C, pp. 220-223):
1. Net transfers to grooms' parents can be positive or negative (heterogeneous across families).
2. Parents are more likely to be net takers when sons migrate.
3. Net taking is increasing in the migrant son's income and in the parental Pareto weight.
4. Parents who receive remittances from migrant sons are more likely to be net dowry takers.
5. Families in areas with stronger dowry practices (higher $$d$$) are more likely to have a migrant son.
6. A decline in migration cost increases migration more in areas with higher $$d$$ (when migration rates are low).

## Method

**Survey design (Section IV, pp. 223-230).** The paper introduces two original data sets on dowry property rights:

- *Destination Survey (2018)*: in-person interviews with 557 men aged 21-41 in Gurugram, stratified 20% Delhi natives and 80% migrants. Detailed gift-by-gift ownership questions for every item transferred at marriage, including who gave it and who holds property rights today, allowing construction of gross and net transfers to each family member.
- *Origin Survey (2020)*: phone interviews with 2,541 households in 34 districts of six Indian states (Rajasthan, Uttar Pradesh, Bihar, Jharkhand, Madhya Pradesh, Maharashtra). Random sample of one married son per household, oversampling migrants (70%/30%); yielded data on 3,069 sons.

Net transfers to grooms' parents are defined as: gross transfers received by grooms' parents minus gross transfers made by grooms' parents to other parties (p. 225). Grooms' parents are net takers when this quantity is positive.

**Historical dowry traditions (Section V.A, pp. 239-243).** Following Giuliano and Nunn (2018), the paper constructs a district-level measure of the share of the current population belonging to linguistic groups with historical dowry practices, drawing on ethnographic data from the Murdock (1967) *Ethnographic Atlas* combined with current language group maps from the *Ethnologue* and LandScan population weights. Districts are coded as high-dowry when the measure exceeds 0.1% (368 of 582 districts).

**Highway natural experiment (Section V.D.2, pp. 248-251).** The paper exploits the staggered construction of the Golden Quadrilateral and NS-EW highway corridors (1999-2016, ~5,846 km) as a quasi-random reduction in migration costs across districts and years. Highway project timing and district location are matched from the NHDP project list to the CMIE CapEx database. The staggered event-study estimator of Borusyak, Jaravel, and Spiess (2024) is used (doubly-robust estimator; Callaway and Sant'Anna (2021) as robustness). Standard errors are wild-bootstrapped and clustered at the district level.

## Empirical specifications

**Predictions 2 and 3: OLS on net-taker indicator (Table I, p. 232).** For each son $$h$$ in survey $$s$$:

$$
\text{NetTaker}_{hs} = \alpha_c + \beta_1 \text{Migrant}_{hs} + \mathbf{X}_{hs}\boldsymbol{\gamma} + \varepsilon_{hs} \tag{T1}
$$

where $$\alpha_c$$ denotes coresidence status fixed effects and marriage year and age fixed effects (two separate additive groups as listed in Table I, not a three-way interaction cell); $$\mathbf{X}_{hs}$$ includes son education dummies, father education dummies, and a quadratic in net dowry. For Prediction 3 (income interaction), the specification adds $$\text{Migrant}_{hs} \times \ln(\text{son occ. score})_{hs}$$ and $$\text{Non-migrant}_{hs} \times \ln(\text{son occ. score})_{hs}$$. For the Pareto weight test, the specification adds $$\text{Migrant}_{hs} \times \text{VetoPower}_{hs}$$ and $$\text{Non-migrant}_{hs} \times \text{VetoPower}_{hs}$$.

**Prediction 4: remittances and net-taking (Table II, p. 238).** Using Origin Survey data:

$$
\text{NetTaker}_{hs} = \alpha + \beta_1 \text{SonTransfers}_{hs} + \beta_2 \text{Migrant}_{hs} + \beta_3 (\text{SonTransfers} \times \text{Migrant})_{hs} + \mathbf{X}_{hs}\boldsymbol{\gamma} + \varepsilon_{hs} \tag{T2}
$$

where SonTransfers is an indicator for net financial transfers from son to parents in the year before the survey.

**Prediction 5: dowry traditions and migration (Table III, p. 246).** NSS Round 64 cross-section of men aged 15-45:

$$
\text{Migrated}_{ids} = \beta \cdot \text{Dowry}_d + \delta_s + \delta_{\text{year}} + \mathbf{X}_{ids}\boldsymbol{\gamma} + \varepsilon_{ids} \tag{T3}
$$

where $$d$$ indexes districts, $$s$$ indexes states, year is birth year. $$\text{Dowry}_d$$ is the continuous population-share measure or a discrete indicator. $$\mathbf{X}_{ids}$$ includes caste FE, ethnographic controls (percent patrilineal, percent plow), geographic controls (latitude, longitude, coastal distance, city distance), and education controls.

**Prediction 6: GQ highway event study (Equation (2), p. 249).** Individual $$i$$ of age $$a$$, state $$j$$, district $$d$$, year $$t$$:

$$
y_{iajdt} = \alpha_i + \theta_{jt} + \delta_a + \sum_s \beta_s \cdot GQ_{dts} + \mathbf{X}_{iajdt}\boldsymbol{\gamma} + \varepsilon_{iajdt} \tag{2}
$$

where $$y_{iajdt}$$ is an indicator for having migrated before year $$t$$; $$\alpha_i$$ are individual FE; $$\theta_{jt}$$ are state-by-year FE; $$\delta_a$$ are age FE; $$GQ_{dts}$$ is an indicator equal to one if a highway segment was constructed $$s$$ years ago in district $$d$$ by year $$t$$. The equation is estimated separately for dowry districts (above 0.1% cutoff) and non-dowry districts, with $$t = 0$$ normalized to the year of first highway construction in the district. The sample is restricted to men aged 13-45 at the time of receiving a GQ project to avoid capturing age-dependent migration (dependent migration for under-15s, old-age migration for over-45s).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Author Destination Survey 2018 (Gurugram) | Primary survey: property rights over dowry items for 557 male migrants and non-migrants; net transfers to grooms' parents (Predictions 1-4) | No page yet (hand-collected) |
| Author Origin Survey 2020 (6 Indian states) | Primary survey: phone interviews with 2,541 households, 3,069 married sons; dowry allocation and migration by same-origin comparison (Predictions 1-4) | No page yet (hand-collected) |
| NSS Round 64 (2007-08 migration module) | Nationally representative individual-level migration data; ~188,192 men aged 15-45 in 588 districts; tests Predictions 5 and 6 | No page yet ([data:nss-india](/wiki/tags/)) |
| Giuliano-Nunn Ancestral Characteristics | District-level share of population with historical dowry tradition; constructed from Murdock (1967) Ethnographic Atlas + Ethnologue language maps | No page yet ([data:giuliano-nunn-ancestral](/wiki/tags/)) |
| REDS 1999 (NCAER) | Validation of historical dowry measure against contemporary dowry payment size | No page yet ([data:reds-india](/wiki/tags/)) |
| IHDS 2005 and 2011-12 | Validation of historical dowry measure (gold payment likelihood); robustness tests for migration predictions | No page yet ([data:ihds-india](/wiki/tags/)) |
| CapEx (CMIE, 2023) | Infrastructure project timing and district location for GQ and NS-EW highway segments; matched to NHDP project list | No page yet ([data:capex-cmie](/wiki/tags/)) |

Sample periods: Destination Survey 2018, Origin Survey 2020, NSS migration 1996-2007, CapEx highway projects 1999-2016.

## When to read the full paper

Use the [original](https://doi.org/10.1093/qje/qjaf041) if you are: (i) studying how traditional institutions adapt to economic development (the mechanism literature building on Botticini and Siow (2003) and Anderson and Bidner (2015)); (ii) working on migration frictions in low-income countries, particularly the role of old-age support constraints identified by Munshi and Rosenzweig (2016); (iii) applying staggered event-study methods to infrastructure programs in developing countries; (iv) using the Giuliano and Nunn (2018) Ancestral Characteristics methodology for India; or (v) replicating the dowry property-rights surveys (replication data at Harvard Dataverse, DOI above). Tables I-III and Figure VI contain the headline numbers; Online Appendix B.5 details survey construction.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The paper is paywalled; all rights reserved by Oxford University Press on behalf of President and Fellows of Harvard College. No PDF is hosted here.

> Bau, Natalie, Gaurav Khanna, Corinne Low, and Alessandra Voena. "Traditional Institutions in Modern Times: Dowries as Pensions When Sons Migrate." *The Quarterly Journal of Economics* 141, no. 1 (2026): 205-262. DOI: 10.1093/qje/qjaf041.
