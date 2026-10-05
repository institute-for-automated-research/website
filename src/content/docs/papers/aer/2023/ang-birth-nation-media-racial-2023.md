---
title: "Birth of a Nation Media Effects: Ang (2023)"
description: >-
  Distilled: Ang (2023) provides the first causal evidence that D. W. Griffith's
  1915 film The Birth of a Nation raised local lynching and race-riot estimates to
  approximately four times baseline, though conventional tests are imprecise and
  randomization-inference supports the increases. It raised second-KKK klavern probability by 66 pp (2SLS),
  and predicts 85 percent higher hate crime rates per 100k residents a century later.
  American Economic Review 113(6), 2023, paywalled. Twenty-six core results with source
  locators, datasets used, the identification design, and estimating equations.
sidebar:
  label: Ang 2023
  order: 1
tags: [paper-summary, political-economy, media-economics, racial-discrimination,
       economic-history, event-study, instrumental-variables, panel-regression,
       peer-reviewed, unreplicated, data:project-hal, data:fbi-ucr]
paper:
  authors: Desmond Ang
  authorList:
    - { family: Ang, given: Desmond, orcid: "0000-0003-3500-9024",
        affiliation: "Harvard University, Kennedy School of Government" }
  year: 2023
  venue: "American Economic Review 113(6), June 2023, 1424-1460"
  venueShort: AER 2023
  doi: 10.1257/aer.20201867
  jel:
    codes: [J15, K42, L82, N31, N32, N41, Z13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Media Influence and Politics
    - Electoral Systems and Political Participation
    - Culture, Economy, and Development Studies
  dataAccess: hand-collected
  outcome:
    - monthly lynching probability in county
    - monthly race riot probability in county
    - second KKK klavern formation by 1930
    - modern hate group presence (2000-2019)
    - modern hate crime rate per 100k residents (2000-2018)
    - state homicide rates by race
    - contemporaneous political outcomes
    - racial attitudes and KKK approval
    - naming of White boys in road-show counties
  outcomeClass: [social-welfare]
  license: "paywalled (no license block in Crossref metadata; AEA publisher site pubs.aeaweb.org returned HTTP 403 on 2026-06-24; OpenAlex open_access_pdf is null)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-403 (pubs.aeaweb.org, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 26
  citedByCount: 58
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [event-study, instrumental-variables, panel-regression]
    identification: instrument
  contributionType: [new-fact, new-data]
  mechanisms: [social-norm-erosion, ideological-persuasion, media-imitation]
  introducesData: true
  scope:
    region: US
    period: 1910-01..2018-12
    frequency: mixed
    dataType: [administrative, text, survey, other]
    granularity: [aggregate, individual]
    n: "3,103 US counties; 621 screened the film 1915-1919"
  findings:
    - { ref: R1, outcome: "monthly lynching probability in county", metric: coefficient, value: "beta_0 = 0.0011 (mean = 0.0003); approximately fourfold increase in month of film arrival", direction: positive }
    - { ref: R2, outcome: "monthly race riot probability in county", metric: coefficient, value: "beta_0 = 0.00034 (mean = 0.00009); approximately fourfold increase in months after film arrival", direction: positive }
    - { ref: R3, outcome: "film screening in county", metric: coefficient, value: "Theater coefficient = 0.324 (se = 0.024); mean screened = 0.20; Kleibergen-Paap F = 185.34", direction: positive }
    - { ref: R4, outcome: "second KKK klavern formation by 1930", metric: pp-effect, value: "2SLS = 0.662 (se = 0.138); sample mean = 0.313; p < 0.001", direction: positive, vsBenchmark: "66.2 pp estimated treatment effect; the sample mean is 31.3%, and the LATE implies compliers were almost certain to have a klavern" }
    - { ref: R5, outcome: "klaverns per 10,000 US-born White males (second KKK intensity)", metric: coefficient, value: "beta_IV = 0.95 (p = 0.036); implies approximately 1 million additional Klansmen induced", direction: positive }
    - { ref: R6, outcome: "modern hate group presence (2000-2019)", metric: pp-effect, value: "2SLS = 0.366 (se = 0.100); mean = 0.374; treatment mean 0.60 vs control mean 0.32", direction: positive, vsBenchmark: "approximately 90% above sample mean" }
    - { ref: R7, outcome: "modern hate crime rate per 100k residents (2000-2018)", metric: coefficient, value: "2SLS = 1.177/100k (se = 0.494; mean = 1.376); anti-Black 0.516 (p = 0.003); anti-other minorities 0.561 (p = 0.030); anti-White 0.101 (insignificant)", direction: positive, vsBenchmark: "approximately 85% above average annual hate crime rate" }
    - { ref: R8, outcome: "film screening in county", metric: coefficient, value: "Fully controlled first stage: Theater coefficient = 0.219 (se = 0.023); Kleibergen-Paap F = 87.45; N = 3,103", direction: positive }
    - { ref: R9, outcome: "predetermined county racism and demographics", metric: sd-effect, value: "Conditional theater coefficients are precise zeros, with magnitudes below 0.05 standard deviations across historical racism measures; future population measures are also unrelated", direction: none }
    - { ref: R10, outcome: "second KKK klavern formation by 1930", metric: coefficient, value: "Kansas, where the film was banned: reduced-form Theater coefficient = -0.138 (se = 0.111), versus 0.146 (se = 0.026) outside Kansas", direction: mixed }
    - { ref: R11, outcome: "second KKK klavern formation by 1930", metric: coefficient, value: "Theater-opening indicators are positive and significant for openings before 1918, while post-1918 openings are not significant", direction: mixed }
    - { ref: R12, outcome: "second KKK klavern formation by 1930", metric: pp-effect, value: "Restricted-sample 2SLS estimates: 0.478 (se = 0.101; neighbor controls only), 0.532 (0.110; drop neighbors), 0.535 (0.138; drop 20 largest counties), 0.595 (0.157; theaters by 1930), 0.531 (0.109; paper in 1915); p < 0.001 in all cases", direction: positive }
    - { ref: R13, outcome: "second KKK klavern formation by 1930", metric: coefficient, value: "IV effect = 1.01 in below-median religious-membership counties versus 0.39 in above-median counties; p(diff) < 0.01", direction: positive }
    - { ref: R14, outcome: "third KKK klavern presence in the 1960s", metric: pp-effect, value: "2SLS = 0.132 (se = 0.062); mean = 0.106; N = 3,103", direction: positive }
    - { ref: R15, outcome: "modern hate group presence by type (2000-2019)", metric: pp-effect, value: "2SLS effects: KKK = 0.133 (se = 0.071), other White supremacist groups = 0.314 (se = 0.085), other hate groups = 0.010 (se = 0.044); respective means = 0.186, 0.279, 0.059", direction: mixed }
    - { ref: R16, outcome: "state-level Klan membership intensity", metric: coefficient, value: "IV coefficient = 0.13 (p = 0.107; statistically insignificant); the paper describes an implied persuasion rate of 18%, or roughly one additional Klan member per six US White male moviegoers, as suggestive", direction: none }
    - { ref: R17, outcome: "monthly racial violence probability in county", metric: probability, value: "Across 500 date permutations: lynching estimates exceeded the actual at month 0 in 2/500 tests and after treatment in 6/3,000; race-riot placebo estimates exceeded the actual in 7.4% at month 0 and 4.8% after treatment", direction: positive }
    - { ref: R18, outcome: "monthly racial violence probability in county", metric: coefficient, value: "The Mickey screening event study finds little evidence of increased violence immediately after its premiere; no point estimates are reported in the main text", direction: none }
    - { ref: R19, outcome: "state homicide rates by race", metric: coefficient, value: "States with greater film penetration had a significant increase in minority homicides in the decade after release, with no change in White homicides; numeric estimates are reported only in Online Appendix Figure A.VI", direction: mixed }
    - { ref: R20, outcome: "contemporaneous political outcomes", metric: coefficient, value: "Null effects on Democratic vote share and DW-NOMINATE scores; estimates are reported in Online Appendix Figures A.XXII-A.XXIV", direction: none }
    - { ref: R21, outcome: "KKK knowledge and approval", metric: coefficient, value: "1946 Gallup responses show increased KKK knowledge and reduced desire to ban the organization, particularly among White respondents; numeric estimates are in Online Appendix Table A.X", direction: positive }
    - { ref: R22, outcome: "racial attitudes", metric: coefficient, value: "1970s ANES responses show less favorable views of Black people, civil-rights leaders, and Black militants; numeric estimates are in Online Appendix Figure A.XXV", direction: negative }
    - { ref: R23, outcome: "naming of White boys in road-show counties", metric: coefficient, value: "The share named Benjamin increased in the decade after release; described as a large increase, with numeric estimates in Online Appendix Figure A.XXI", direction: positive }
    - { ref: R24, outcome: "modern hate group presence and hate crime rates", metric: coefficient, value: "Mediation analysis suggests nearly all long-run effects run through historical second-KKK formation, under strong identifying assumptions; numerical direct and indirect effects are in Online Appendix Table A.XVII", direction: positive }
    - { ref: R25, outcome: "second KKK klavern formation by 1930", metric: coefficient, value: "Positive effects are similar across high and low population, density, Black-share, Democratic-support, and illiteracy groups, as well as Confederate and non-Confederate counties and places with or without prior racial violence or monuments", direction: positive }
    - { ref: R26, outcome: "film screening in county", metric: coefficient, value: "Treatment counties averaged population 75.63 thousand versus 25.45 thousand among control counties with theaters; newspaper circulation per capita was 0.18 versus 0.05, media markets 1.30 versus 0.81, and maximum theater seats 786.94 versus 370.95", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Yanagizawa-Drott (2014)", doi: '10.1093/qje/qju020', relation: extends,
        note: "extends the Rwanda radio-propaganda identification approach to popular entertainment media to show persistent effects of a fictional narrative on organized hate" }
    - { cite: "Bursztyn, Egorov and Fiorin (2020)", doi: '10.1257/aer.20171175', relation: builds-on,
        note: "social norm erosion framework that public exposure to stigmatized content reveals latent agreement and removes constraints on discriminatory behavior" }
    - { cite: "Fryer and Levitt (2012)", doi: '10.1093/qje/qjs028', relation: cites,
        note: "source of second KKK historical background, state-level membership estimates, and Klan geography" }
    - { cite: "Esposito et al. (2023)", doi: '10.1257/aer.20210413', relation: cites,
        note: "companion paper on the film's rhetorical legacy; shares and cross-validates screening location data" }
    - { cite: "DellaVigna and La Ferrara (2015)", doi: '10.1016/b978-0-444-63685-0.00019-x', relation: cites,
        note: "media economics benchmark separating demand-for-entertainment from racial-preference-based selection into viewership" }
  openQuestions:
    - "Detailed local survey data on racial attitudes from the era of the film do not exist, so a direct test of whether contemporaneous preference shifts mediated the violence effects remains infeasible (p. 1453)."
    - "Whether entertainment media with subtler racist themes in modern, media-saturated environments generates analogous long-run effects is an open empirical question raised in the conclusion (pp. 1457-1458)."
  replicationCode:
    url: "https://doi.org/10.3886/E183761V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted,
        note: "Full text read (pp. 1424-1460); core results and estimating equations extracted from the paywalled PDF. Not human-verified. Not reproduced. Replication data at doi:10.3886/E183761V1." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; fixed R1/R2 locators from p. 1437 to p. 1438 (Figure 3 is on p. 1438; text is on p. 1437) and expanded JEL codes from [J15, N32, Z13] to the full published set [J15, K42, L82, N31, N32, N41, Z13]; all equations (1)-(3), coefficients, SEs, F-stats, and means confirmed correct."
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added missing Core results, findings entries, mechanisms, and estimating specifications. New additions are not yet re-verified. Not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Checked all 26 Core rows, specifications, equations, classification fields, findings, and page prose against the PDF. Fixed R1/R2 inference qualifiers, R4 comparison, R7 locator, R10 coefficient description, R11 timing cutoff, R16 direction, and R24 mediation qualification; corrected identification and mechanism axes and control specification. Table-locator checker found no page-caption mismatches; relation-locater reported no MISS for this page." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20201867", checked: 2026-06-24,
        by: "paper-distiller (claude-sonnet-4-6)",
        found: "No license[] block in Crossref metadata; OpenAlex open_access_pdf is null; pubs.aeaweb.org returned HTTP 403; classified as paywalled with no open-access version detected." }
---

**What this is.** The paper's core results, the identification design, and the estimating equations: enough to understand what was found and how, without reading all 37 pages. To replicate or extend, read the original at [doi.org/10.1257/aer.20201867](https://doi.org/10.1257/aer.20201867).

## TL;DR

Ang (2023) provides causal evidence on the social imprint of D. W. Griffith's 1915 film *The Birth of a Nation*, a fictional depiction of the founding of the Ku Klux Klan that reached an estimated 10 million Americans during a five-year road show. Exploiting the film's staggered county-level distribution, the paper estimates roughly fourfold increases in lynchings and race riots around arrival; conventional tests are imprecise (p = 0.06 and p = 0.30), while randomization-inference tests support the increases. For longer-run effects, theater presence in 1914 instruments for whether a county received the film; the 2SLS estimate shows a 66 percentage-point increase in the probability of a second-KKK klavern forming by 1930 (Fryer and Levitt (2012) provide Klan history and membership benchmarks). Road-show counties remain significantly more likely to contain hate groups and to experience higher hate crime rates a century later, with effects extending beyond anti-Black incidents to other racial, religious, and sexual minorities. Mediation analysis following Dippel, Ferrara, and Heblich (2020) indicates the long-run effects run almost entirely through the historical formation of second-KKK chapters. Esposito et al. (2023) is a companion paper on the film's rhetorical legacy that independently validates the screening data.

## Core results

Magnitudes as reported. Randomization-inference p-values cited for R1 and R2 (the rarity of events makes conventional standard errors imprecise). Locators point into the source PDF.

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Lynching probability rose around the month of the film's county arrival | Figure 3 Panel A, p. 1438; text p. 1437 | beta_0 = 0.0011 (mean = 0.0003); ~4x monthly base rate; conventional p = 0.06; randomization-inference p < 0.01 |
| R2 | Race riot probability rose in the three months following the film's arrival | Figure 3 Panel B, p. 1438; text p. 1437 | beta_0 = 0.00034 (mean = 0.00009); ~4x base rate; conventional p = 0.30; randomization-inference p < 0.05 |
| R3 | Theater presence in 1914 strongly predicts screening (first stage) | Table 3 col. 1, p. 1444 | Coefficient = 0.324 (se = 0.024); mean screened = 0.20; Kleibergen-Paap F = 185.34 |
| R4 | Screening raised klavern probability by 66 pp (2SLS main estimate) | Table 4 Panel C col. 1, p. 1446; OLS: Panel A col. 1 | 2SLS = 0.662 (se = 0.138); mean = 0.313; p < 0.001; OLS = 0.111 (se = 0.021) |
| R5 | Screening raised klavern intensity (klaverns per 10,000 US-born White males) | Online Appendix Table A.II; p. 1449 | beta_IV = 0.95 (p = 0.036); implies ~1 million additional Klansmen induced |
| R6 | Road-show counties ~90% more likely to host a hate group in 2000-2019 | Table 5 col. 2, p. 1454 | 2SLS = 0.366 (se = 0.100); mean = 0.374; treatment mean 0.60 vs control mean 0.32 |
| R7 | Hate crime rate ~85% higher in road-show counties, 2000-2018; elevated for anti-Black and anti-other-minority crimes | Table 6 cols. 1-4, p. 1455 | 2SLS = 1.177/100k (se = 0.494; mean = 1.376); anti-Black = 0.516 (p = 0.003); anti-other minorities = 0.561 (p = 0.030); anti-White = 0.101 (insignificant) |
| R8 | Fully controlled theater instrument strongly predicts film screening | Table 3 col. 5, p. 1444 | Coefficient = 0.219 (se = 0.023); Kleibergen-Paap F = 87.45; N = 3,103 |
| R9 | Theater presence is unrelated to observed historical racism and demographic measures | Figure 4, p. 1441; Online Appendix Figure A.XIV cited p. 1442 | Conditional coefficients are precise zeros, with magnitudes below 0.05 standard deviations; no relation to pre/post-film population measures |
| R10 | Theater presence does not predict klavern formation in Kansas, where the film was banned | Table 2 Panel A col. 1, p. 1442 | Reduced form = -0.138 (se = 0.111); outside Kansas = 0.146 (se = 0.026) |
| R11 | Theaters opened before 1918 predict later klavern formation; post-1918 theaters do not | Figure 5, p. 1443 | Theater-opening estimates are significant and positive before 1918; estimates after 1918 are insignificant |
| R12 | Historical klavern effect persists across five restricted samples | Table 4 Panel C cols. 2-6, p. 1446 | 2SLS = 0.478 (se = 0.101), 0.532 (0.110), 0.535 (0.138), 0.595 (0.157), 0.531 (0.109); all p < 0.001 |
| R13 | Klan formation effect is largest where religious participation was low | Figure 6, pp. 1448-1449 | IV effect = 1.01 below-median versus 0.39 above-median religious membership; p(diff) < 0.01 |
| R14 | Historical screenings predict third-KKK presence in the 1960s | Table 5 col. 1, p. 1454 | 2SLS = 0.132 (se = 0.062); mean = 0.106 |
| R15 | Long-run hate-group effects are concentrated in KKK and other White supremacist groups | Table 5 cols. 3-5, p. 1454 | 2SLS: KKK = 0.133 (se = 0.071), White supremacist = 0.314 (se = 0.085), other groups = 0.010 (se = 0.044; insignificant) |
| R16 | State-level estimates suggest higher Klan membership intensity | Online Appendix Figure A.XIX; discussed p. 1449 | IV coefficient = 0.13 (p = 0.107); implied persuasion rate = 18%, roughly one member per six US White male moviegoers |
| R17 | Permutation tests show the short-run violence estimates are unusual under placebo dates | Online Appendix Figure A.XII; discussed p. 1439 | Lynching placebo estimates exceed the actual in 2/500 month-0 and 6/3,000 post-treatment tests; race-riot proportions are 7.4% and 4.8% |
| R18 | The 1918 film Mickey does not produce an immediate violence spike | Online Appendix Figure A.XIII; discussed p. 1439 | Little evidence of increased violence after Mickey screenings; no point estimates reported in the main text |
| R19 | Film penetration predicts minority, but not White, homicide increases after release | Online Appendix Figure A.VI; discussed pp. 1438-1439 | Significant increase in minority homicides over the following decade; no change in White homicides; numerical estimates are not printed in the main text |
| R20 | Historical screenings do not change contemporaneous political outcomes | Online Appendix Figures A.XXII-A.XXIV; discussed p. 1453 | Null effects on Democratic vote share and DW-NOMINATE scores; numerical estimates are not printed in the main text |
| R21 | 1946 survey responses indicate increased KKK knowledge and approval | Online Appendix Table A.X; discussed p. 1454 | Greater KKK knowledge and reduced desire to ban the organization, particularly among White respondents |
| R22 | 1970s survey responses indicate more negative views of Black people and leaders | Online Appendix Figure A.XXV; discussed p. 1454 | Less favorable views of Black people, civil-rights leaders, and Black militants; numeric estimates are not printed in the main text |
| R23 | Census naming patterns are consistent with imitation of the film's protagonist | Online Appendix Figure A.XXI; discussed p. 1453 | Large increase in the share of White boys named Benjamin in road-show counties during the decade after release; no point estimate in the main text |
| R24 | Mediation analysis suggests nearly all long-run effects run through historical KKK formation | Online Appendix Table A.XVII; discussed pp. 1456-1457 | Under strong identifying assumptions, nearly all long-run effects are mediated by second-KKK formation; numerical direct and indirect effects are not printed in the main text |
| R25 | Historical klavern effects appear across counties with different demographic and racial histories | Figure 6, pp. 1448-1449 | Positive and similar IV estimates across population, density, Black-share, Democratic-support, illiteracy, Confederate status, and prior violence/monument splits |
| R26 | Film distribution was associated more with market size and media access than measured preexisting racial animus | Table 1, p. 1436 | Treatment versus control counties with theaters: population 75.63k vs 25.45k; newspaper circulation 0.18 vs 0.05; media markets 1.30 vs 0.81; maximum seats 786.94 vs 370.95 |

**Overall (paper's conclusion).** Screenings of *The Birth of a Nation* triggered near-term racial violence and fueled the nationwide revival of the Ku Klux Klan. That historical catalysis persists a century later: road-show counties experience markedly higher rates of organized White supremacist activity and hate crimes directed at a wide range of minority groups. The paper's mediation analysis suggests, under strong identifying assumptions, that these long-run effects run almost entirely through the Klan chapters the film historically seeded.

## Theory / model

The paper proposes no formal economic model. The research design tests three related hypotheses.

*Short-run violence hypothesis.* Exposure to *The Birth of a Nation* increased racial hate in the county in the months of the screening, through some combination of: (i) persuasion and direct belief change about racial hierarchy, (ii) emotional responses that lowered inhibitions for violence, and (iii) public revelation of latent racism that reduced the perceived social cost of acting on racial animus. The conventional estimates are imprecise (p = 0.06 for lynchings and p = 0.30 for race riots); the paper reports stronger support from randomization inference.

*Medium-run KKK formation hypothesis.* Exposure catalyzed the formation of second-KKK chapters that would not have formed otherwise. Proposed channels include: (a) provision of common cultural symbols and imagery (white robes, cross burning, which the second KKK copied directly from the film's fictionalized Klan, unlike the first Reconstruction-era Klan; Section I.C, p. 1432), (b) reduction of coordination costs among individuals seeking to organize around racial ideology, and (c) persuasion of latent adherents into active participants.

*Long-run persistence hypothesis.* The Klan chapters historically seeded by the film transmitted racial hate across generations through social institutions and networks, so areas with early klavern formation exhibit higher hate-group presence and hate crime rates decades after the second KKK's formal dissolution.

Three mechanism channels are discussed (Section V, pp. 1452-1453):

1. **Social norm erosion and coordination.** Public screenings publicly revealed latent racism and unraveled norms that had suppressed discriminatory behavior, facilitating coordination among individuals predisposed to racial animus. This channel is consistent with Bursztyn, Egorov and Fiorin (2020) and with the heterogeneous-effects finding that the film's catalyzing impact was largest in counties with below-median religious participation, where prior social coordination infrastructure was weakest.
2. **Media imitation.** The second KKK adopted the film's specific iconography: white robes, hoods, and cross burning. None of these practices appeared in the Reconstruction-era Klan; all were drawn directly from the film. Full-count census data also show that White parents in road-show counties became more likely to name their sons "Benjamin," after the film's protagonist.
3. **Persuasion and preference change.** Survey evidence from the 1946 Gallup and 1970s ANES shows road-show counties were associated with less favorable attitudes toward African Americans and greater Klan approval, consistent with a shift in racial preferences among viewers.

## Method

The paper applies two identification strategies, linked by the same instrument.

**Event study (short-run racial violence).** The film's five-year road show created staggered county-level variation in when and whether each county received a screening. This variation, combined with the demonstrated role of market factors (population size, theater capacity, urban density) rather than racial animus in determining where the film was shown, supports a parallel-trends assumption for an event study comparing counties before and after the film's arrival. The key estimate is the coefficient at $$\tau = 0$$ (month of arrival) from Equation 1.

**Instrumental variables (long-run effects).** Whether a county received the film is endogenous to local characteristics. The paper instruments for county-level screening using movie theater presence in 1914, the year before the film's release. Theaters predict screenings because the film required elaborate projection equipment and large paying audiences, so distributors prioritized counties with existing cinema infrastructure. Exogeneity is validated by four pieces of evidence: (i) theater presence in 1914 is uncorrelated with pre-period racial violence, Democratic vote shares, and Black population shares, conditional on controls (Figure 4, p. 1441); (ii) in Kansas, where the film was banned statewide, theaters in 1914 do not predict klavern formation (Table 2 Panel A), supporting the exclusion restriction; (iii) theaters opened before 1918 predict future klavern formation, while those opened after 1918 do not (Figure 5, p. 1443); (iv) Oster's delta ranges from 1.7 to 4.8 in matched samples (p. 1451), indicating that selection on unobservables would need to be several times larger than selection on observables to explain the estimates away. For long-run outcomes, the same IV design is re-estimated with hate groups (2000-2019) and hate crime rates (2000-2018) as dependent variables. DellaVigna and La Ferrara (2015) provide the media-economics benchmark establishing that selection into viewership of entertainment media is driven primarily by demand for entertainment rather than pre-existing racial preferences.

This design extends the approach of Yanagizawa-Drott (2014), who identifies the causal effect of Rwanda radio propaganda on genocide participation using a topography-based instrument for signal reception, to the case of popular fictional entertainment media in a democratic setting.

## Empirical specifications

**Event study (Equation 1, p. 1437).** Weekly county panel data, 1913-1922, all US counties:

$$
y_{c,t} = \delta_c + \lambda_{s,t} + \sum_{\tau=-6}^{6} \beta_\tau \, Show_\tau + \epsilon_{c,t} \tag{1}
$$

Here $$y_{c,t}$$ is an indicator for whether a lynching (or race riot) occurred in county $$c$$ at week $$t$$; $$\delta_c$$ are county fixed effects; $$\lambda_{s,t}$$ are state-week fixed effects, absorbing state-wide shocks and differential secular trends; $$Show_\tau$$ are dummies for months relative to the film's first screening in the county ($$\tau = 0$$ = month of arrival), defined as five-week intervals centered on the week of the film's premiere in each county; $$Show_6$$ ($$Show_{-6}$$) equals 1 for periods six or more months after (before) a screening; the omitted category is the last month before arrival; standard errors clustered by state. Sample: 3,104 US counties (Washington DC dropped due to collinearity with state fixed effects). Outcome means: 0.0003 (lynchings) and 0.00009 (race riots) per county-week.

**IV first stage (Equation 3, p. 1440):**

$$
\text{Screened}_c = \delta_s + \gamma \, \text{Theater}_c + X'_c \Lambda + v \tag{3}
$$

where $$\text{Screened}_c$$ is a binary indicator for whether county $$c$$ received the film from 1915 to 1919; $$\text{Theater}_c$$ is a binary indicator for a movie theater in county $$c$$ in 1914; $$\delta_s$$ are state fixed effects; $$X'_c$$ is the vector of demographic, social-capital, media, and racism controls described in Table 3. The preferred fully-controlled specification (col. 5, Table 3) yields a coefficient of 0.219 (se = 0.023) and Kleibergen-Paap F = 87.45, well above the 16.38 maximal-10%-bias benchmark.

**IV second stage (Equation 2, p. 1440):**

$$
KKK_c = \lambda_s + \beta \, \text{Screened}_c + X'_c \Gamma + u \tag{2}
$$

where $$KKK_c$$ is the outcome of interest (klavern indicator by 1930, hate-group indicator, or hate crime rate); $$\beta$$ is the LATE identifying the average causal effect of screening on compliers; standard errors clustered by state throughout. The same specification is applied to hate-group presence (Table 5) and hate crime rates (Table 6) to produce the long-run estimates.

**Controls** (Table 3) include: a quadratic in total population, density, Black population and share, US-born share, and draft-eligible age share (1910 Census); urban share, illiteracy rate, voter turnout 1912, religious organization share (1906 Census of Religious Bodies), occupational income score, and quadratics in railroad distance to the two nearest major cities; per-capita newspaper circulation and number of media markets in 1912 (Gentzkow, Shapiro, and Sinkinson 2011); historical lynching count 1900-1905, Democratic vote share 1912, Confederate monuments by 1914, and NAACP chapter presence in 1914.

**Robustness** includes: propensity-score matching across three comparison groups; restriction and exclusion of neighboring counties; restriction to counties with at least one digitized local newspaper; alternative instruments (theaters per 1,000 White residents, maximum seating capacity, year of first theater, showings of *Mickey* or *The Million Dollar Mystery*); spatial-correlation-robust standard errors (Conley 1999; Muller and Watson 2021); and placebo tests using screenings of the 1918 comedy *Mickey*, which show no significant effect on racial violence or Klan formation.

**Kansas exclusion-restriction test (Table 2, p. 1442; written out from the reduced-form specification).** The paper regresses the 1930 klavern outcome on theater-stock measures, the full Table 3 controls, and state fixed effects, separately for Kansas and non-Kansas counties:

$$
\text{Klavern}_{c,1930} = \lambda_s + \rho \, \text{TheaterStock}_{c,1914} + X'_c \Pi + e_c
$$

The theater-presence coefficient is -0.138 (se = 0.111; N = 105) in Kansas and 0.146 (se = 0.026; N = 2,998) outside Kansas. Standard errors are clustered by state.

**Theater-timing exclusion test (Figure 5, p. 1443; written out from the plotted specification).** The outcome is klavern presence by 1930, with mutually exclusive indicators for the year the county's first theater opened and an omitted group of counties without a theater by 1930:

$$
\text{Klavern}_{c,1930} = \lambda_s + \sum_{y \neq \text{no theater by 1930}} \rho_y \, \mathbb{1}(\text{first theater year}_c = y) + X'_c \Pi + e_c
$$

The regressions include Table 3 controls and state-clustered standard errors. The source reports significant positive estimates for theaters opened before 1918 and insignificant estimates after 1918; it does not tabulate individual coefficients.

**Heterogeneity and long-run outcome specifications.** Figure 6 estimates Equation 2 separately across county subgroups, omitting the split variable from controls; standard errors are clustered by state. Tables 5 and 6 reuse the Equation 2 IV design for third-KKK/hate-group indicators and county hate-crime rates, respectively, with the Table 3 controls and state-clustered standard errors. Each cross-sectional estimate uses 3,103 counties.

**State homicide event study (written out from the analogous-design description on pp. 1438-1439).** The main text describes a state-level event study of minority- and White-homicide rates using state exposure to the film. This schematic expression records that description; the appendix equation, fixed effects, sample, and error treatment are not printed in the main-text PDF:

$$
Homicide^{g}_{s,t} = \mu_s + \lambda_t + \sum_{\tau} \beta^{g}_{\tau} \, Exposure_{s,\tau} + \epsilon^{g}_{s,t}
$$

Here $$g$$ denotes minority or White homicide and $$Exposure_{s,\tau}$$ is state film penetration around release. The referenced analysis reports significant increases for minority homicide and no change for White homicide.

**Survey specifications (written out from the descriptions on pp. 1453-1454).** For 1946 Gallup responses, the paper regresses individual KKK knowledge and KKK-ban responses on an instrumented state-level exposure share:

$$
Y_{i,s} = \alpha + \beta \, \widehat{Exposure}_{s} + u_{i,s}
$$

The exposure is the share of US-born White men in a state living in screening counties, instrumented by the corresponding share living in counties with theaters. For 1970s ANES responses, the paper uses an individual-level analogue of Equation 2:

$$
Attitude_{i,c} = \lambda_s + \beta \, Screened_c + X'_c \Gamma + u_{i,c}
$$

The main text does not print the complete covariate list, fixed effects beyond the Equation 2 analogy, standard-error treatment, or individual sample sizes for these appendix analyses.

**Causal mediation (written out from note 38, p. 1457).** Long-run outcomes are regressed on klavern formation instrumented by historical theater presence, while controlling for film screening and the full covariate set. The paper notes that interpretation relies on strong assumptions, including that film screenings and long-run outcomes are exogenous conditional on historical klaverns:

$$
Y_c = \lambda_s + \theta \, \widehat{Klavern}_c + \beta \, Screened_c + X'_c \Gamma + u_c
$$

The instrument for $$Klavern_c$$ is theater presence; standard errors and sample follow the underlying county IV analysis. The estimated klavern effect is scaled by the baseline effect of screenings on klavern formation to obtain an indirect effect, then compared with the total effect. The paper suggests that nearly all long-run effects are mediated this way; numerical mediation estimates are in the online appendix.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Hand-collected newspaper screening data (newspapers.com, newspaperarchive.com, Library of Congress; 6,266 ads, 1914-1919) | Primary treatment variable: county-level first-screening dates; 621 screened counties | No page yet (hand-collected; see `introducesData`) |
| Historical American Lynching Data Collection Project ("Project HAL"); supplemented by Seguin and Rigby (2019) for non-Southern counties | Short-run outcome: lynching indicator, weekly county panel 1913-1922 | No page yet |
| Race riot records from Gilje (1996) and Red Summer Archive (visualizingtheredsummer.com) | Short-run outcome: race riot indicator, weekly county panel 1913-1922 | No page yet |
| Kneebone and Torres (2015) KKK klavern location data | Long-run outcome: second-KKK klavern presence by 1930; intensive margin klaverns per capita | No page yet |
| House Un-American Activities Committee reports, compiled by Mazumder (2018) | Long-run outcome: third-KKK klavern presence, 1960s | No page yet |
| Southern Poverty Law Center Hate Map (2000-2019) | Long-run outcome: active hate group presence by type (KKK, White supremacist, other) | No page yet |
| FBI Uniform Crime Reports hate crimes, compiled by Kaplan (2020) | Long-run outcome: hate crimes per 100k residents by victim group, 2000-2018 | No page yet |
| Theater location data (Klenotic / mappingmovies.unh.edu 1910; cinematreasures.com) | Instrument: county theater presence in 1914 | No page yet |
| 1910 US Census and 1906 Census of Religious Bodies | Demographic, social-capital, and economic controls | No page yet |

Sample: 3,103 US counties, continental United States. Event study runs at weekly frequency, 1913-1922. Cross-sectional IV uses 1910 pre-treatment characteristics and outcomes measured at 1930 (KKK), 1960s (third KKK), 2000-2019 (hate groups), and 2000-2018 (hate crimes).

## When to read the full paper

Read the original if you are: examining the causal effects of entertainment media on political and social outcomes; studying the origins and geographic persistence of KKK formation; applying staggered event-study or IV designs to county-level historical data; or researching the long-run transmission of racially charged organizations and institutions. Table 4 (p. 1446) contains the main IV estimates; Tables 5 and 6 (pp. 1454-1455) contain long-run hate-group and hate-crime results. Section V (mechanisms, pp. 1452-1453) is the most speculative part of the paper. Yanagizawa-Drott (2014) is the closest design precedent.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(6), June 2023. Published by the American Economic Association. No open-access license detected (Crossref metadata, AEA publisher site, and OpenAlex all confirm paywalled). This distillation was initially extracted on 2026-06-24 and updated on 2026-10-04; it is **not human-verified or independently reproduced**. Extract-only: the PDF is not hosted here.

> Ang, Desmond. "The Birth of a Nation: Media and Racial Hate." *American Economic Review* 113, no. 6 (June 2023): 1424-1460. DOI: 10.1257/aer.20201867.
