---
title: "Birth of a Nation Media Effects: Ang (2023)"
description: >-
  Distilled: Ang (2023) provides the first causal evidence that D. W. Griffith's
  1915 film The Birth of a Nation increased local lynchings and race riots by
  approximately fourfold, raised second-KKK klavern probability by 66 pp (2SLS),
  and predicts 85 percent higher hate crime rates per 100k residents a century later.
  American Economic Review 113(6), 2023, paywalled. Seven core results with source
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
  outcomeClass: [social-welfare]
  license: "paywalled (no license block in Crossref metadata; AEA publisher site pubs.aeaweb.org returned HTTP 403 on 2026-06-24; OpenAlex open_access_pdf is null)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-403 (pubs.aeaweb.org, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 58
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [event-study, instrumental-variables, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [behavioral-bias]
  introducesData: true
  scope:
    region: US
    period: 1910-01..2018-12
    frequency: mixed
    dataType: [administrative, text, other]
    granularity: [aggregate]
    n: "3,103 US counties; 621 screened the film 1915-1919"
  findings:
    - ref: R1
      outcome: monthly lynching probability in county
      metric: coefficient
      value: "beta_0 = 0.0011 (mean = 0.0003); approximately fourfold increase in month of film arrival"
      direction: positive
    - ref: R2
      outcome: monthly race riot probability in county
      metric: coefficient
      value: "beta_0 = 0.00034 (mean = 0.00009); approximately fourfold increase in months after film arrival"
      direction: positive
    - ref: R4
      outcome: second KKK klavern formation by 1930
      metric: pp-effect
      value: "2SLS = 0.662 (se = 0.138); sample mean = 0.313; p < 0.001"
      direction: positive
      vsBenchmark: "66.2 pp above mean of 31%; screened counties nearly certain to have a klavern at the margin"
    - ref: R5
      outcome: klaverns per 10,000 US-born White males (second KKK intensity)
      metric: coefficient
      value: "beta_IV = 0.95 (p = 0.036); implies approximately 1 million additional Klansmen induced"
      direction: positive
    - ref: R6
      outcome: modern hate group presence (2000-2019)
      metric: pp-effect
      value: "2SLS = 0.366 (se = 0.100); mean = 0.374; treatment mean 0.60 vs control mean 0.32"
      direction: positive
      vsBenchmark: "approximately 90% above sample mean"
    - ref: R7
      outcome: modern hate crime rate per 100k residents (2000-2018)
      metric: coefficient
      value: "2SLS = 1.177/100k (se = 0.494; mean = 1.376); anti-Black 0.516 (p = 0.003); anti-other minorities 0.561 (p = 0.030); anti-White 0.101 (insignificant)"
      direction: positive
      vsBenchmark: "approximately 85% above average annual hate crime rate"
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
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20201867", checked: 2026-06-24,
        by: "paper-distiller (claude-sonnet-4-6)",
        found: "No license[] block in Crossref metadata; OpenAlex open_access_pdf is null; pubs.aeaweb.org returned HTTP 403; classified as paywalled with no open-access version detected." }
---

**What this is.** The paper's core results, the identification design, and the estimating equations: enough to understand what was found and how, without reading all 37 pages. To replicate or extend, read the original at [doi.org/10.1257/aer.20201867](https://doi.org/10.1257/aer.20201867).

## TL;DR

Ang (2023) provides the first causal evidence of the social imprint of D. W. Griffith's 1915 film *The Birth of a Nation*, a fictional depiction of the founding of the Ku Klux Klan that reached an estimated 10 million Americans during a five-year road show. Exploiting the film's staggered county-level distribution, the paper finds sharp spikes in lynchings and race riots in the months of each county's screening (approximately fourfold over the county-level baseline). For longer-run effects, theater presence in 1914 instruments for whether a county received the film; the 2SLS estimate shows a 66 percentage-point increase in the probability of a second-KKK klavern forming by 1930 (Fryer and Levitt (2012) provide Klan history and membership benchmarks). Road-show counties remain significantly more likely to contain hate groups and to experience higher hate crime rates a century later, with effects extending beyond anti-Black incidents to other racial, religious, and sexual minorities. Mediation analysis following Dippel, Ferrara, and Heblich (2020) indicates the long-run effects run almost entirely through the historical formation of second-KKK chapters. Esposito et al. (2023) is a companion paper on the film's rhetorical legacy that independently validates the screening data.

## Core results

Magnitudes as reported. Randomization-inference p-values cited for R1 and R2 (the rarity of events makes conventional standard errors imprecise). Locators point into the source PDF.

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Lynching probability spiked in the month of the film's county arrival | Figure 3 Panel A, p. 1438 | beta_0 = 0.0011 (mean = 0.0003); ~4x monthly base rate; randomization-inference p < 0.01 |
| R2 | Race riot probability spiked in the three months following the film's arrival | Figure 3 Panel B, p. 1438 | beta_0 = 0.00034 (mean = 0.00009); ~4x base rate; randomization-inference p < 0.05 |
| R3 | Theater presence in 1914 strongly predicts screening (first stage) | Table 3 col. 1, p. 1444 | Coefficient = 0.324 (se = 0.024); mean screened = 0.20; Kleibergen-Paap F = 185.34 |
| R4 | Screening raised klavern probability by 66 pp (2SLS main estimate) | Table 4 Panel C col. 1, p. 1446 | 2SLS = 0.662 (se = 0.138); mean = 0.313; p < 0.001; OLS = 0.111 (se = 0.021) |
| R5 | Screening raised klavern intensity (klaverns per 10,000 US-born White males) | Online Appendix Table A.II; p. 1449 | beta_IV = 0.95 (p = 0.036); implies ~1 million additional Klansmen induced |
| R6 | Road-show counties ~90% more likely to host a hate group in 2000-2019 | Table 5 col. 2, p. 1454 | 2SLS = 0.366 (se = 0.100); mean = 0.374; treatment mean 0.60 vs control mean 0.32 |
| R7 | Hate crime rate ~85% higher in road-show counties, 2000-2018; elevated for anti-Black and anti-other-minority crimes | Table 6 cols. 1-3, p. 1455 | 2SLS = 1.177/100k (se = 0.494; mean = 1.376); anti-Black = 0.516 (p = 0.003); anti-other minorities = 0.561 (p = 0.030); anti-White = 0.101 (insignificant) |

**Overall (paper's conclusion).** Screenings of *The Birth of a Nation* triggered near-term racial violence and fueled the nationwide revival of the Ku Klux Klan. That historical catalysis persists a century later: road-show counties experience markedly higher rates of organized White supremacist activity and hate crimes directed at a wide range of minority groups, effects mediated almost entirely by the Klan chapters the film historically seeded.

## Theory / model

The paper proposes no formal economic model. The research design tests three related hypotheses.

*Short-run violence hypothesis.* Exposure to *The Birth of a Nation* increased racial hate in the county in the months of the screening, through some combination of: (i) persuasion and direct belief change about racial hierarchy, (ii) emotional responses that lowered inhibitions for violence, and (iii) public revelation of latent racism that reduced the perceived social cost of acting on racial animus.

*Medium-run KKK formation hypothesis.* Exposure catalyzed the formation of second-KKK chapters that would not have formed otherwise. Proposed channels include: (a) provision of common cultural symbols and imagery (white robes, cross burning, which the second KKK copied directly from the film's fictionalized Klan, unlike the first Reconstruction-era Klan; Section I.C, p. 1432), (b) reduction of coordination costs among individuals seeking to organize around racial ideology, and (c) persuasion of latent adherents into active participants.

*Long-run persistence hypothesis.* The Klan chapters historically seeded by the film transmitted racial hate across generations through social institutions and networks, so areas with early klavern formation exhibit higher hate-group presence and hate crime rates decades after the second KKK's formal dissolution.

Three mechanism channels are discussed (Section V, pp. 1452-1453):

1. **Social norm erosion and coordination.** Public screenings publicly revealed latent racism and unraveled norms that had suppressed discriminatory behavior, facilitating coordination among individuals predisposed to racial animus. This channel is consistent with Bursztyn, Egorov and Fiorin (2020) and with the heterogeneous-effects finding that the film's catalyzing impact was largest in counties with below-median religious participation, where prior social coordination infrastructure was weakest.
2. **Media imitation.** The second KKK adopted the film's specific iconography: white robes, hoods, and cross burning. None of these practices appeared in the Reconstruction-era Klan; all were drawn directly from the film. Full-count census data also show that White parents in road-show counties became more likely to name their sons "Benjamin," after the film's protagonist.
3. **Persuasion and preference change.** Survey evidence from the 1946 Gallup and 1970s ANES shows road-show counties were associated with less favorable attitudes toward African Americans and greater Klan approval, consistent with a shift in racial preferences among viewers.

## Method

The paper applies two identification strategies, linked by the same instrument.

**Event study (short-run racial violence).** The film's five-year road show created staggered county-level variation in when and whether each county received a screening. This variation, combined with the demonstrated role of market factors (population size, theater capacity, urban density) rather than racial animus in determining where the film was shown, supports a parallel-trends assumption for an event study comparing counties before and after the film's arrival. The key estimate is the coefficient at $$\tau = 0$$ (month of arrival) from Equation 1.

**Instrumental variables (long-run effects).** Whether a county received the film is endogenous to local characteristics. The paper instruments for county-level screening using movie theater presence in 1914, the year before the film's release. Theaters predict screenings because the film required elaborate projection equipment and large paying audiences, so distributors prioritized counties with existing cinema infrastructure. Exogeneity is validated by four pieces of evidence: (i) theater presence in 1914 is uncorrelated with pre-period racial violence, Democratic vote shares, and Black population shares, conditional on controls (Figure 4, p. 1441); (ii) in Kansas, where the film was banned statewide, theaters in 1914 do not predict klavern formation (Table 2 Panel A), supporting the exclusion restriction; (iii) only theaters opened before the road show's end (pre-1919) predict future klavern formation, while post-1918 theaters do not (Figure 5, p. 1443); (iv) Oster's delta ranges from 1.7 to 4.8 in matched samples (p. 1451), indicating that selection on unobservables would need to be several times larger than selection on observables to explain the estimates away. For long-run outcomes, the same IV design is re-estimated with hate groups (2000-2019) and hate crime rates (2000-2018) as dependent variables. DellaVigna and La Ferrara (2015) provide the media-economics benchmark establishing that selection into viewership of entertainment media is driven primarily by demand for entertainment rather than pre-existing racial preferences.

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

**Controls** (Table 3) include: total population, density, Black population and share, US-born share, and draft-eligible age share (1910 Census); urban share, illiteracy rate, voter turnout 1912, religious organization share (1906 Census of Religious Bodies), occupational income score, and railroad distances to the two nearest major cities; per-capita newspaper circulation and number of media markets in 1912 (Gentzkow, Shapiro, and Sinkinson 2011); historical lynching count 1900-1905, Democratic vote share 1912, Confederate monuments by 1914, and NAACP chapter presence in 1914.

**Robustness** includes: propensity-score matching across three comparison groups; restriction and exclusion of neighboring counties; restriction to counties with at least one digitized local newspaper; alternative instruments (theaters per 1,000 White residents, maximum seating capacity, year of first theater, showings of *Mickey* or *The Million Dollar Mystery*); spatial-correlation-robust standard errors (Conley 1999; Muller and Watson 2021); and placebo tests using screenings of the 1918 comedy *Mickey*, which show no significant effect on racial violence or Klan formation.

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

Source: peer-reviewed, *American Economic Review* 113(6), June 2023. Published by the American Economic Association. No open-access license detected (Crossref metadata, AEA publisher site, and OpenAlex all confirm paywalled). This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. Extract-only: the PDF is not hosted here.

> Ang, Desmond. "The Birth of a Nation: Media and Racial Hate." *American Economic Review* 113, no. 6 (June 2023): 1424-1460. DOI: 10.1257/aer.20201867.
