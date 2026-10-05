---
title: "The Economic Origins of Government: Allen, Bertazzini & Heldring (2023)"
description: >-
  River shifts in ancient southern Iraq (~2850BCE) caused new state formation, canal
  construction, tribute payment, and growth of administrative buildings, supporting
  cooperative over extractive theories of government origins, in a new archeological
  panel dataset spanning 3900BCE-2700BCE. American Economic Review 2023, open access.
  Seventeen core results with source locators, the identification strategy, and regression
  specifications; LLM-distilled, not human-verified.
sidebar:
  label: Allen-Bertazzini-Heldring 2023
  order: 1
tags: [paper-summary, economic-history, political-economy, state-formation, public-goods,
       natural-experiment, difference-in-differences, panel-regression,
       open-access, peer-reviewed, unreplicated, data:cdli]
paper:
  authors: Robert C. Allen, Mattia C. Bertazzini, and Leander Heldring
  authorList:
    - { family: Allen, given: Robert C., orcid: "0000-0003-2079-5683", affiliation: New York University Abu Dhabi }
    - { family: Bertazzini, given: Mattia C., affiliation: University of Oxford }
    - { family: Heldring, given: Leander, orcid: "0009-0009-3351-559X", affiliation: Northwestern University (Kellogg) }
  year: 2023
  venue: American Economic Review 113(10), October 2023, 2507-2545
  venueShort: AER 2023
  doi: 10.1257/aer.20201919
  jel:
    codes: [D72, H11, H41, N45, N55, Q15]
    assignedBy: authors
    date: 2026-06-24
  topics:
    - "Culture, Economy, and Development Studies"
    - "Historical Economic and Social Studies"
    - "Colonialism, slavery, and trade"
  dataAccess: public
  outcome:
    - probability of grid cell being part of a state
    - probability of canal construction (public good provision)
    - probability of tribute payment being recorded in cuneiform tablets
    - number of administrative buildings in nearest city (state capacity)
  outcomeClass: [political-development]
  license: >-
    Open access (freely available on AEA website; OpenAlex open_access_pdf confirmed);
    no CC licence found in Crossref REST API license[] block; AEA CC-BY policy for
    papers accepted 2022 and later may apply but was not confirmed from metadata alone.
  licenseShort: open-access
  access: open
  machineAccess: >-
    open PDF at https://www.aeaweb.org/articles/pdf/doi/10.1257/aer.20201919
    (OpenAlex open_access_pdf; AEA article page shows Complimentary access;
    Crossref license[] empty; checked 2026-06-24)
  redistribution: extract-only
  resultsCount: 17
  citedByCount: 49
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [coordination-failure]
  introducesData: true
  scope:
    region: Iraq (southern Mesopotamia)
    period: "3900BCE..2700BCE (main); 5000BCE..1950CE (extended)"
    frequency: mixed
    dataType: [administrative, other]
    granularity: [aggregate]
    n: "4,631 grid cell-periods (932 grid cells x ~5 archeological periods of ~240 yrs; 3900BCE-2700BCE main study)"
  findings:
    - { ref: R1, outcome: probability of grid cell being part of a state, metric: pp-effect, value: "+0.14 (SE=0.04, Conley SE=0.03); comparison mean 0.06; treatment-period mean 0.24", direction: positive }
    - { ref: R2, outcome: "probability of newly formed state vs. expansion of existing state", metric: pp-effect, value: "new state: +0.11 (SE=0.04, Conley SE=0.03); existing state: +0.02 (SE=0.02, Conley SE=0.01)", direction: positive, vsBenchmark: "main result driven entirely by new state formation; existing-state expansion has a small, insignificant estimate" }
    - { ref: R3, outcome: probability of canal construction (public good provision), metric: pp-effect, value: "+0.12 (SE=0.03, Conley SE=0.02); comparison mean 0.28", direction: positive }
    - { ref: R4, outcome: probability of defensive wall in nearest city, metric: pp-effect, value: "+0.11 (SE=0.04, Conley SE=0.03); comparison mean 0.14", direction: positive }
    - { ref: R5, outcome: probability of tribute payment being recorded in cuneiform tablets, metric: pp-effect, value: "+0.21 (SE=0.06, Conley SE=0.10); comparison mean 0.19", direction: positive }
    - { ref: R6, outcome: number of administrative buildings in nearest city, metric: coefficient, value: "+0.44 (SE=0.15, Conley SE=0.17); comparison mean 0.70", direction: positive }
    - { ref: R7, outcome: probability of state formation by pre-shift population density, metric: pp-effect, value: "high density: +0.18 (SE=0.05, Conley SE=0.03); low density: +0.03 (SE=0.02, Conley SE=0.03); Chow p=0.06", direction: positive, vsBenchmark: "effect about six times as large in high-density as low-density cells" }
    - { ref: R8, outcome: probability of canal construction across all six river shifts (extended panel), metric: pp-effect, value: "+0.11 (SE=0.02, Conley SE=0.02); comparison mean 0.40 (5000BCE-1950CE full panel)", direction: positive }
    - { ref: R9, outcome: probability of grid cell being part of a city state measured by nearest-city building presence, metric: pp-effect, value: "+0.16 (SE=0.05, Conley SE=0.04); mean 0.12; pretrend p=0.26", direction: positive }
    - { ref: R10, outcome: lagged settlement count, city presence, and canal presence, metric: coefficient, value: "Table 2 cols. 1-6: settlements lag 1 -0.15 (SE 0.13; Conley 0.13), lag 2 +0.05 (0.08; 0.08); city lag 1 -0.00 (0.00; 0.00), lag 2 +0.00 (0.00; 0.00); canal lag 1 +0.02 (0.03; 0.02), lag 2 +0.03 (0.03; 0.04); all insignificant", direction: none }
    - { ref: R11, outcome: probability of state formation under a river-shifting-closer placebo, metric: coefficient, value: "Consistently negative across placebo estimates; numerical coefficients are not reported in the main text", direction: negative }
    - { ref: R12, outcome: probability of state formation by settlement alignment for canal building, metric: pp-effect, value: "aligned: +0.22 (SE=0.06, Conley SE=0.04); misaligned: -0.01 (SE=0.03, Conley SE=0.02); Chow p=0.00", direction: mixed }
    - { ref: R13, outcome: probability of state formation by irrigated versus rainfed productivity difference, metric: pp-effect, value: "high productivity difference: +0.16 (SE=0.05); low difference: -0.05 (SE=0.02); Chow p=0.00", direction: mixed }
    - { ref: R14, outcome: probability of state formation by nearest river flow, metric: pp-effect, value: "slow-flowing river: +0.10 (SE=0.05); fast-flowing river: +0.03 (SE=0.06); Chow p=0.14", direction: mixed }
    - { ref: R15, outcome: probability of canal construction in first-state versus subsequent-state periods, metric: pp-effect, value: "first two shifts: +0.15 (SE=0.03, Conley SE=0.02); four subsequent shifts: +0.10 (SE=0.02, Conley SE=0.02)", direction: positive }
    - { ref: R16, outcome: fraction of cuneiform tablets mentioning government and public-good terms, metric: probability, value: "The fraction mentioning gal (chief) increases about 40% after the shift; lugal (lineage head) is absent before and appears after; canal and tribute mentions also rise, with tribute absent before; Figure 6 does not report exact percentage-point estimates", direction: positive }
    - { ref: R17, outcome: trade patterns after a river shift, metric: coefficient, value: "The paper reports failing to reject no effect on trade patterns; the main text does not report a coefficient", direction: none }
  resultType: overturns
  relatesTo:
    - { cite: "Olson (1993)", doi: '10.2307/2938736', relation: tests, note: "roving-bandits theory predicts states form where rivers remain (most surplus to extract); paper finds the opposite" }
    - { cite: "Carneiro (1970)", doi: '10.1126/science.169.3947.733', relation: tests, note: "circumscription theory predicts states form where exit is costly; paper finds cooperative coordination demand dominates" }
    - { cite: "Acemoglu and Robinson (2000)", doi: '10.1162/003355300555042', relation: builds-on, note: "framework for bargaining between social groups over public goods and state formation" }
    - { cite: "Mayshar, Moav, and Pascali (2022)", doi: '10.1086/718372', relation: cites, note: "land storability as a driver of early state formation; an alternative supply-side channel" }
    - { cite: "Sánchez De La Sierra (2020)", doi: '10.1086/703989', relation: cites, note: "empirical evidence for extractive state formation in the Congo; contrasting setting and mechanism" }
  openQuestions:
    - >-
      State formation is historically rare even where coordination opportunities seem
      ubiquitous; the paper argues effects concentrate where cooperation returns exceed
      the outside option of migration and nomadism, but the general scarcity of states
      remains a challenge to the cooperative interpretation (pp.2509, 2535-2537).
    - >-
      Whether the cooperative origins of the first states can explain later, more extractive
      governments: once enforcement power is ceded to the state, it can be repurposed for
      extraction, but the paper does not trace this transition beyond the extended canal panel
      (p.2510, 2537).
  replicationCode:
    url: "https://doi.org/10.3886/184167EV1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full PDF read (pp.2507-2545); eight results extracted with table/page locators from the source PDF. Not human-verified. Not reproduced." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "All 8 Core-results rows verified against Tables 3-6; all locators and magnitudes confirmed correct. JEL codes corrected from LLM-assigned [D72, H41, N45] to authors' official codes [D72, H11, H41, N45, N55, Q15]. Equations (1) and (2) verified term-by-term. Note: introductory paragraph (p.2509) cites administrative buildings effect as 0.6/mean 0.75, but Table 4 col 4 shows 0.44/mean 0.70; wiki correctly uses the table value."
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and augmented Core results, findings, scope, and empirical specifications with omitted main-text checks, heterogeneity, later-period splits, and tablet-text evidence. Additions are not human-verified and were not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 17 Core results, equations, specifications, classification, findings, and prose checked against the PDF; revised theory/placebo and trade claims, corrected the error-term description, and set resultType to overturns. Script locator flags were manually checked against the printed table pages and confirmed. Table-locator pass (2026-10-04): none." }
  licenceVerification:
    - source: "Crossref REST API works/10.1257/aer.20201919"
      checked: 2026-06-24
      by: "paper-distiller (claude-sonnet-4-6)"
      found: "license[] block is empty (no CC licence metadata); paper freely accessible on AEA website per OpenAlex open_access_pdf field; AEA article page shows Complimentary access"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the natural experiment it exploits (river shifts in
ancient southern Iraq), the identification strategy, and the main estimating equations: enough
to know what it found and how, without reading all 39 pages. To replicate or extend it, read
the full source at [https://doi.org/10.1257/aer.20201919](https://doi.org/10.1257/aer.20201919).

## TL;DR

The paper uses river shifts in southern Mesopotamia around 2850BCE as a natural experiment to
test two competing theories of government formation. When a river shifts away from a farming
area, direct irrigation becomes impossible and public canals requiring multi-community
coordination are needed. This creates demand for a coordinating government (cooperative theory),
whereas an extraction-based theory (where government forms to collect surplus) predicts states
would be more likely where the river stays. Constructing a new archeological panel dataset of
5x5 km grid cells across southern Iraq for the period 3900BCE-2700BCE, the paper runs a panel
difference-in-differences design comparing grid cells that lost river access to control cells
that did not. A river shifting away increased the probability of state formation by 14 percentage
points, the probability of canal construction by 12 percentage points, the probability of tribute
payment by 21 percentage points, and the number of administrative buildings by 0.44. The result
is entirely driven by new state formation, not expansion of existing states. Text analysis of
5,885 surviving cuneiform tablets shows increased mentions of lineage-leader titles and tribute
after the shift, consistent with the cooperative interpretation. The simple extractive predictions associated with Olson (1993) and Carneiro (1970) run
in the opposite direction to the observed pattern.

## Core results

Magnitudes and standard errors are as reported; clustered SE in parentheses, Conley (1999) SE in
brackets. Locators point into the source PDF (pp.2507-2545).

| \# | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | River shift away increases probability of **state formation** by 14pp | Table 3, col 1, p.2530 | +0.14 (SE=0.04) [0.03]; sample mean 0.06; treatment-period mean 0.24; pretrend p=0.23 |
| R2 | Effect driven entirely by **new state formation**, not expansion of existing states | Table 3, col 3-4, p.2530 | New state: +0.11 (SE=0.04) [0.03]; existing state: +0.02 (SE=0.02) [0.01] |
| R3 | River shift increases probability of **canal construction** by 12pp | Table 4, col 1, p.2534 | +0.12 (SE=0.03) [0.02]; mean 0.28; pretrend p=0.81 |
| R4 | River shift increases probability of **defensive wall** in nearest city by 11pp | Table 4, col 2, p.2534 | +0.11 (SE=0.04) [0.03]; mean 0.14; pretrend p=0.57 |
| R5 | River shift **doubles** the probability of **tribute payment** being recorded | Table 4, col 3, p.2534 | +0.21 (SE=0.06) [0.10]; mean 0.19; pretrend p=0.20 |
| R6 | River shift increases **administrative buildings** in nearest city by 0.44 | Table 4, col 4, p.2534-2535 | +0.44 (SE=0.15) [0.17]; mean 0.70; pretrend p=0.69 |
| R7 | Effect concentrated in **high population density** areas before the shift | Table 5, Panel A, p.2536 | High: +0.18 (SE=0.05) [0.03]; low: +0.03 (SE=0.02) [0.03]; Chow p=0.06 |
| R8 | Result holds across the **full 7,000-year panel** (5000BCE-1950CE, all 6 river shifts) | Table 6, col 1, p.2539 | Canal: +0.11 (SE=0.02) [0.02]; mean 0.40 |
| R9 | Result persists when state presence is measured by nearest-city building presence only | Table 3, col 2, p.2530 | +0.16 (SE=0.05) [0.04]; mean 0.12; pretrend p=0.26 |
| R10 | Lagged outcomes show no evidence that future treatment cells were already different | Table 2, cols. 1-6, p.2527 | Settlements: lag 1 -0.15 (SE=0.13) [0.13], lag 2 +0.05 (0.08) [0.08]; city: -0.00 (0.00) [0.00], +0.00 (0.00) [0.00]; canal: +0.02 (0.03) [0.02], +0.03 (0.03) [0.04]; all insignificant |
| R11 | River shifting closer has a consistently negative placebo association with state presence | Text p.2533, Results §V.A | Consistently negative coefficients; individual magnitudes are not reported in the main text |
| R12 | State formation is concentrated where settlements align for canal construction | Table 5, Panel A, cols. 4-5, p.2536 | Aligned: +0.22 (SE=0.06) [0.04]; misaligned: -0.01 (0.03) [0.02]; Chow p=0.00 |
| R13 | State formation is higher where irrigation has greater potential productivity returns | Table 5, Panel B, cols. 2-3, p.2536 | High productivity difference: +0.16 (SE=0.05); low difference: -0.05 (0.02); Chow p=0.00 |
| R14 | State formation estimates are larger near slow-flowing rivers, which are easier to irrigate from | Table 5, Panel B, cols. 4-5, p.2536 | Slow flow: +0.10 (SE=0.05); fast flow: +0.03 (0.06); Chow p=0.14 |
| R15 | Canal response persists in both first-state and subsequent-state periods | Table 6, cols. 2-3, p.2539 | First two shifts: +0.15 (SE=0.03) [0.02]; four subsequent shifts: +0.10 (SE=0.02) [0.02] |
| R16 | Tablet texts show more references to leaders and public goods after state formation | Figure 6, p.2541; text p.2540, §VII | Fraction mentioning gal (chief) increases about 40%; lugal (lineage head) is absent before and appears after; canal and tribute mentions rise, tribute is absent before; no exact percentage-point effects are reported |
| R17 | Trade-pattern effects are not statistically distinguishable from zero | Text p.2532, Results §V.A (discussion of Results Appendix Table RA26) | Fail to reject no effect of river shifts on trade patterns; the main text does not report a coefficient |

**Overall (paper's conclusion, p.2540-2541).** Where rivers shifted away, communities formed new
states, built canals and defensive walls, and paid tribute to their governments. These results are
consistent with cooperative (demand-side) theories: states form to solve coordination failures
in public good provision, not to extract. The first states resembled scaled-up versions of the
lineage social structure that preceded them, with government coordinating between extended kinship
groups (lineages) rather than ruling over individuals.

## Theory / model

The paper has no formal mathematical model. Instead it derives two competing sets of testable
hypotheses from the theoretical literature on state formation and maps them onto the sign of the
main difference-in-differences coefficient.

**Cooperative (demand-side) theory.** Government is an organization with a comparative advantage
in providing public goods (Baumol 1952; Samuelson 1954). Problems of externalities and
coordination failure (Olson 1965) prevent private provision. When a river shifts away, arid-land
farming can continue only via public irrigation canals spanning multiple communities. No individual
community can credibly commit to build and maintain such canals alone. This coordination failure
creates demand for a government. Members pay tribute in exchange for canal access and defense. The
framework builds on Acemoglu and Robinson (2000), who model the bargaining between social groups
that determines whether and what form of government emerges. Under this view, states form where
the river shifted away (positive $$\beta_0^{\text{treatment}}$$ in equation 1).

**Extractive (supply-side) theory.** Government is an organization founded by an elite with
coercive power to manage extraction (Carneiro 1970; Olson 1993). Under Olson (1993), "roving
bandits" settle where the expected tax base is largest and find it worthwhile to provide minimal
stability in exchange for an extractive monopoly. Where a river shifts away, the agricultural
tax base collapses: land is no longer productive without irrigation. A predatory ruler would
prefer to locate where the river remains. Under this view, states form where rivers stay, not
where they shift (negative or zero $$\beta_0^{\text{treatment}}$$). Mayshar, Moav, and Pascali
(2022) provide recent empirical support for a related extractive channel in which taxable surplus
(storable crops) predicts state location. The circumscription theory of Carneiro (1970) also fits
this supply-side cluster: states arise where it is hard to escape extraction.

**Empirical mapping.** The sign of the main coefficient distinguishes the two clusters.
A positive and significant $$\beta_0^{\text{treatment}}$$ (R1 = +0.14) fits the cooperative
prediction and runs against the simple extractive predictions, which imply an opposite or null
effect. The placebo test (estimating the effect of a river shifting closer rather than away) yields
negative estimates, an additional pattern consistent with the cooperative interpretation.
Sánchez De La Sierra (2020) finds extractive state formation in the Congo using a comparable
natural-experiment design; the two settings differ in the nature of the shock and the role of
public goods versus looting.

## Method

The paper applies a standard panel difference-in-differences estimator via OLS, using the first
large river shift in history (around 2850BCE) as a quasi-random shock. It builds on
`difference-in-differences` and `panel-regression`.

**Treatment definition.** A 5x5 km grid cell $$c$$ is defined as on a river in period $$t$$ if its
centroid is within 5 km of the nearest river. Cell $$c$$ is treated in period $$t = 0$$ (Early
Dynastic I, 2900BCE-2700BCE) if it was on the river in period $$t - 1$$ (the Jemdet Nasr period,
3100BCE-2900BCE) and is no longer on a river in period $$t$$. Treatment is time-invariant and
applies to roughly 13 percent of the 1,374 grid cells in the study area (Table 1, p.2517).
Rivers shift by 30-40 km on average, so treated cells lose water access entirely, not marginally.

**Main estimating equation.** The panel DiD model for the main study period is (equation 1, p.2525):

$$
Y_{ct} = \sum_{k=-4}^{0} \beta_k^{\text{treatment}} \times \mathbf{1}\{\text{period}_k\} \times \text{treated}_c + \rho_c + \gamma_t + v_{ct} + \varepsilon_{ct} \tag{1}
$$

where $$Y_{ct}$$ is the outcome for grid cell $$c$$ in period $$t$$; $$\text{treated}_c$$ equals 1 if cell
$$c$$ loses river access at $$k = 0$$; $$\mathbf{1}\{\text{period}_k\}$$ are indicators for each period
$$k$$ relative to treatment; $$\beta_k^{\text{treatment}}$$ are the period-relative-to-treatment
interaction coefficients (normalized to zero at $$k = -1$$, the last pre-period); $$\rho_c$$ are unit
(grid cell) fixed effects; $$\gamma_t$$ are period fixed effects; $$v_{ct}$$ is a vector of period
fixed effects interacted with time-invariant covariates (survey area indicators, average rainfall,
average temperature, pre-shift urban status); and $$\varepsilon_{ct}$$ is the error term. Standard
errors are clustered at the grid cell level. Conley (1999) standard errors with a 484 km spatial
cutoff are reported in parallel.

The coefficient of interest is $$\beta_0^{\text{treatment}}$$: the treatment effect in the Early
Dynastic I period (the period of first state formation). Pre-period coefficients
$$\beta_{-2}^{\text{treatment}}, \ldots, \beta_{-4}^{\text{treatment}}$$ serve as pretrend tests;
all are indistinguishable from zero (pretrend p-values reported in Tables 3-4, pp.2530, 2534).

**Extended panel estimator.** For all six river shifts across the full 7,000-year panel
(5000BCE-1950CE), a pooled DiD (equation 2, p.2538) is estimated:

$$
Y_{ct} = \beta \cdot \text{treated}_{ct} + \rho_c + \gamma_t + v_{ct} + \varepsilon_{ct} \tag{2}
$$

where $$\text{treated}_{ct}$$ is now time-varying (equals 1 when cell $$c$$ is treated in period $$t$$
for any of the six shifts), and $$\beta$$ captures the average effect across all shifts.

## Empirical specifications

All regressions are OLS. Unit of observation: 5x5 km grid cell. Time series: archeological period
(average 240 years in the main sample). Standard errors clustered at the grid cell level;
Conley (1999) SE with a 484 km cutoff in brackets.

**State formation (R1-R2, R9; Table 3, p.2530).** Equation (1) with two outcome definitions: column 1
uses an indicator for whether a grid cell is part of a city state, defined using administrative
buildings (palaces, temples, ziggurats) and reconstructed territorial borders; column 2 uses only
building presence without borders. Columns 3 and 4 decompose into new state formation (an indicator
equal to 1 if the nearest city gains state status for the first time) and expansion of an existing
state. Samples are 4,631 observations in columns 1, 3, and 4, and 4,424 in column 2. All columns
include grid cell and period fixed effects plus period interactions with survey area, rainfall,
temperature, and prior urban status. Pretrend p-values are 0.23, 0.26, 0.24, and 0.84.

**Public good provision and tribute (R3-R6, Table 4, p.2534).** Four separate regressions using
equation (1):

- Column 1: indicator for canal presence within 5 km of cell centroid, reconstructed from Chicago
  Oriental Institute excavation reports (Adams 1965, 1981; Adams and Nissen 1972).
- Column 2: indicator for defensive wall in the nearest city, from Bryce (2009) and Meyers (1997).
- Column 3: indicator for surviving cuneiform tablet in the nearest city (validated as a proxy for
  tribute payment and redistribution via keyword analysis of transliterated texts; Table RA29 in
  Results Appendix).
- Column 4: total count of palaces + temples + ziggurats in the nearest city (measure of state
  capacity and administrative infrastructure).
The outcome-specific sample sizes are 4,320 for canals and 4,424 each for walls, tribute, and
administrative buildings. All four include the fixed effects and covariate interactions described
above.

**Heterogeneous effects (R7, Table 5, p.2536).** Equation (1) estimated separately in two
subsamples split by the median of the spatial lag of pre-treatment settlement density (a proxy
for returns to coordination). The Chow test for coefficient equality has p-value 0.06. The other
Panel A split is by settlement alignment for canals: the estimates are +0.22 for aligned and
-0.01 for misaligned cells (Chow p=0.00). Panel B splits by irrigated versus rainfed potential
productivity difference, with +0.16 in the high-difference group and -0.05 in the low-difference
group (Chow p=0.00), and by river speed, with +0.10 near slow-flowing rivers and +0.03 near
fast-flowing rivers (Chow p=0.14). These regressions use the state-presence outcome and include
grid-cell and period fixed effects plus period interactions with survey area, rainfall, temperature,
and pre-period urban status. Samples are: density high/low, 2,323/2,308; settlement aligned/
misaligned, 2,365/2,266; high/low productivity difference, 2,319/2,311; slow/fast river flow,
2,775/1,856. Standard errors are clustered by grid cell; Conley standard errors are also reported
for Panel A.

**Identification checks (R9-R11, R17; Tables 2-3 and text pp.2532-2533).** Table 3 column 2 replaces the
border-based state outcome with an indicator for an administrative building in the nearest city.
Table 2 estimates equation (1) using lagged settlement counts, city presence, and canal presence
as outcomes, with six lags/specifications across 4,320 or 4,660 cell-period observations; the
estimates are small and insignificant. The placebo exercise instead treats a river moving closer
as treatment and finds consistently negative coefficients for state formation (the main text does
not tabulate their magnitudes). As a check on trade as an alternative explanation, the authors
fail to reject no effect of river shifts on trade patterns (Results Appendix Table RA26, cited in
the main text on p.2532). The main regressions use 5x5 km grid cells, grid-cell and period
fixed effects, period interactions with survey-area indicators, rainfall, temperature, and prior
urban status, with grid-cell-clustered and Conley standard errors. For outcomes at the nearest-city
level, the authors also report a robustness version with two-way clustering by grid cell and
nearest-city-by-period (Method §IV.A, pp.2525-2526).

**Extended panel (R8 and R15, Table 6, p.2539).** Equation (2) is estimated on 27,106 grid
cell-period observations across all 31 archeological periods (5000BCE-1950CE). Columns 2-3 split
the sample into the first two river shifts (through 2350BCE; 9,718 observations) and the four
subsequent shifts (2350BCE-1950CE; 17,388 observations). Estimates are +0.15 (SE=0.03) in the
first period and +0.10 (SE=0.02) in subsequent periods. All three specifications include grid-cell and period fixed effects, period
interactions with survey-area indicators, rainfall, temperature, and prior urban status; standard
errors are clustered by grid cell and Conley standard errors are reported in brackets.

**Tablet text mechanism evidence (R16, Figure 6, p.2541; §VII, p.2540).** The authors compare
fractions of 5,885 transliterated tablets mentioning lugal (lineage head), gal (chief), canals, or
tribute before and after the first shift. The fraction mentioning gal increases by about 40%; lugal
is not observed before state formation and appears afterward; mentions of canals and tribute also
rise, with tribute absent before. Figure 6 reports graphical comparisons, not regression
coefficients or exact percentage-point changes.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Chicago Oriental Institute archeological surveys (Adams 1965, 1981; Adams and Nissen 1972) | Settlement history, canal network reconstruction, and city locations; basis for the 5x5 km grid panel covering 5000BCE-1950CE | No page yet |
| Cuneiform Digital Library Initiative (CDLI) | 5,885 transliterated cuneiform tablets from the main study period; text analysis of tribute, canal, and lineage-leader term mentions (Section VII, Figure 6) | No page yet |
| Administrative building and state border data (Heinrich 1982, 1984; Meyers 1997; Bryce 2009) | Identification of palaces, temples, and ziggurats; reconstruction of state territorial borders | No page yet |
| River shift and course reconstructions (Cole and Gasche 1998) | Geographic reconstruction of river courses before and after each of six shifts; defines the treatment variable | No page yet |
| FAO soil and agricultural potential data | Potential productivity of irrigated vs. rainfed barley cultivation; used for geographic heterogeneity subsamples (Table 5, Panel B, p.2536) | No page yet |

Sample: southern Iraq, 1,374 grid cells of 5x5 km covering the area between Baghdad and Basra.
Main study: 3900BCE-2700BCE, five archeological periods (~240 yrs each). Extended study: 5000BCE-1950CE,
31 periods. The replication dataset (including all constructed variables) is publicly available at
[https://doi.org/10.3886/184167EV1](https://doi.org/10.3886/184167EV1).

## When to read the full paper

Use the [original paper](https://doi.org/10.1257/aer.20201919) if you are:
testing theories of state formation in other historical or contemporary settings, where the
identification approach (demand-side shock to coordination costs) can be adapted (Section IV);
studying public good provision and tribute across the full 7,000-year Iraqi panel, including
under the Babylonian and Assyrian empires (Section VI and Table 6); examining the internal
organization of the first states via cuneiform tablet text analysis (Section VII and Figure 6,
p.2541); or extending the dataset to other archeological outcome variables using the replication
data. The online Data Appendix (68 pages) describes dataset construction, coding procedures,
and robustness exercises in full detail.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(10), October 2023. Freely available on
the AEA website; no CC licence detected in Crossref metadata; redistribution is extract-only.
This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or
independently reproduced**.

> Allen, Robert C., Mattia C. Bertazzini, and Leander Heldring.
> "The Economic Origins of Government."
> *American Economic Review* 113, no. 10 (October 2023): 2507-2545.
> DOI: 10.1257/aer.20201919.
