---
title: "Vanguard: Ang & Chinoy (2026)"
description: >-
  Distilled: using random variation from the WWI draft lottery and millions of
  digitized military and NAACP records, Ang and Chinoy provide the first causal
  evidence that military service nearly tripled Black veterans' likelihood of
  joining the NAACP, with stronger effects under more discriminatory treatment
  and little evidence of socioeconomic gains. The Quarterly Journal of Economics 141(1), 2026, paywalled.
  Twenty core results with source locators, datasets used, the IV design, and
  the estimating equations.
sidebar:
  label: Ang-Chinoy 2026
  order: 1
tags: [paper-summary, civil-rights, race-discrimination, economic-history, political-economy,
       military-service, instrumental-variables, peer-reviewed, unreplicated,
       data:ww1-draft-cards, data:naacp-papers-proquest, data:vami, data:ats-records,
       data:census]
paper:
  authors: Desmond Ang, Sahil Chinoy
  authorList:
    - { family: Ang, given: Desmond, orcid: "0000-0003-3500-9024", affiliation: Harvard University }
    - { family: Chinoy, given: Sahil, affiliation: Harvard University }
  year: 2026
  venue: The Quarterly Journal of Economics 141(1), 2026, 795-844
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf046
  jel:
    codes: [J15, N42, N32, D71, D74, Z13]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Race, History, and American Society"]
  dataAccess: licensed-commercial
  outcome:
    - NAACP membership among Black WWI veterans
    - community leadership prominence in the New Negro era
    - voter participation among Black WWI veterans
    - veteran status among Black men in the 1930 census
    - other club participation among Black WWI veterans
    - prevalence of injustice themes in Black veterans' surveys
    - prewar registrant characteristics
    - NAACP membership among nonveteran Black men by county veteran share
    - migration and urban residence among Black WWI veterans
  outcomeClass: [civic-participation]
  license: "All rights reserved. Published by Oxford University Press on behalf of President and Fellows of Harvard College, (c) The Author(s) 2025; Crossref license entry: Oxford CHORUS standard publication model (content-version vor, URL https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days 0, start 2025-09-23)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (OUP/QJE site; Crossref confirms CHORUS standard publication model, not a CC licence; 2026-06-28)"
  redistribution: extract-only
  resultsCount: 20
  citedByCount: 1
  introducesData: true
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables]
    identification: instrument
  contributionType: [new-data, new-fact]
  mechanisms: [disparate-treatment, discrimination-radicalization]
  scope:
    region: US
    period: 1917..1940
    frequency: annual
    dataType: [administrative, survey, text]
    granularity: [individual]
    n: "204,923 draft registrants linked to the 1930 census; 3,765 identified NAACP members (1.8%)"
  findings:
    - { ref: R1, outcome: NAACP membership among Black WWI veterans, metric: pp-effect, value: "2SLS 0.0282** (SE 0.0118); baseline nonveteran mean 1.6%, implied veteran rate 4.4%", direction: positive, vsBenchmark: "nearly triple the 1.6% nonveteran baseline (Table III col. 4, p. 817)" }
    - { ref: R2, outcome: NAACP membership duration, metric: pp-effect, value: "2SLS ~0.01 for 7+ years of participation; 1 in 100 draftees induced to remain a member more than 7 years (Figure IV, p. 820)", direction: positive }
    - { ref: R3, outcome: community leadership prominence in the New Negro era, metric: probability, value: "2SLS point estimate implies nearly 3x higher probability of community leader recognition; similar magnitude across both biographical databases (Online Appendix Table A.III)", direction: positive }
    - { ref: R4, outcome: "socioeconomic outcomes (literacy, home ownership, income, employment)", metric: coefficient, value: "all 2SLS estimates near zero; CIs rule out gains above 0.10 SD in occupational income (~$88 in 1950 dollars) (Figure V, p. 823)", direction: none }
    - { ref: R5, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "2SLS increases from ~0 (Q1, smallest Black-white induction rate gap) to ~0.07 (Q4, largest gap) (Figure VIII, p. 830)", direction: positive, vsBenchmark: "near-zero for registrants from equitable draft boards" }
    - { ref: R6, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "2SLS ~0.09 for men at camps with 0-25% Black NCO share or no Black troop training; ~0 for camps where majority of NCOs are Black or training was provided (Figure IX, p. 832)", direction: positive, vsBenchmark: "near-zero for men assigned to less discriminatory camps" }
    - { ref: R7, outcome: voter participation among Black WWI veterans, metric: pp-effect, value: "OLS 24pp higher voting for veterans citing injustice vs those who did not; injustice is the single strongest predictor; all other themes insignificant or borderline (Figure XI, p. 836)", direction: positive, vsBenchmark: "all other veteran survey themes statistically insignificant or borderline" }
    - { ref: R8, outcome: veteran status among Black men in the 1930 census, metric: probability, value: "Veteran (any) share: 15% among NAACP members versus 8% among other adult Black men (Table II, p. 812)", direction: positive, vsBenchmark: "NAACP members compared with nonmembers" }
    - { ref: R9, outcome: prewar registrant characteristics, metric: coefficient, value: "Order-number coefficients below 0.01 standard deviations in magnitude and statistically insignificant for every measured prewar characteristic (Figure III, Panel B, p. 816)", direction: none }
    - { ref: R10, outcome: other club participation among Black WWI veterans, metric: coefficient, value: "No evidence of an increase in lodge, society, union, or nonprofit-organization occupations, or YMCA/club residence (Figure V, Panel B, p. 823)", direction: none }
    - { ref: R11, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "2SLS point estimates decline across county prejudice scores 0 to 3, from about 0.07 to about 0.01 (Figure VI, Panel B, p. 826)", direction: positive, vsBenchmark: "higher county prejudice score is associated with a smaller positive service effect" }
    - { ref: R12, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "2SLS point estimate is about 0.02 in counties without Red Summer racial violence and about 0.06 in counties with violence (Figure VI, Panel C, p. 826)", direction: positive, vsBenchmark: "counties without versus with racial violence" }
    - { ref: R13, outcome: NAACP membership among Black WWI veterans, metric: probability, value: "NAACP membership rates are about 2.1% for noncombatants in the United States and France, 4.0% for the 92nd Division, and 3.0% for the 93rd Division (Figure VII, p. 828)", direction: mixed, vsBenchmark: "combat veterans versus noncombatants; 92nd versus 93rd Division" }
    - { ref: R14, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "About 0.08 for assigned camps with 0-25% Black NCOs, falling to about 0.02 where the Black NCO share is 25-50% or above 50% (Figure IX, Panel A, p. 832)", direction: positive, vsBenchmark: "less versus more Black NCO representation" }
    - { ref: R15, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "About 0.09 where no Black troops received training, near zero where some received training, and about 0.02 where all received training (Figure IX, Panel B, p. 832)", direction: positive, vsBenchmark: "camps with no training versus some or all training" }
    - { ref: R16, outcome: prevalence of injustice themes in Black veterans' surveys, metric: probability, value: "About 6% of approximately 1,300 survey responses mention injustice; about 20% mention a broader mind, 12% manhood, and 8% each civic duty and training (Figure X, Panel A, p. 835; text p. 834)", direction: positive }
    - { ref: R17, outcome: prevalence of injustice themes in Black veterans' surveys, metric: probability, value: "Respondents from the most discriminatory camps were more than twice as likely to mention injustice; differences in other themes were smaller except moderate increases in civic sacrifice and religiosity (Figure X, Panel B, p. 835; text p. 834)", direction: positive, vsBenchmark: "most discriminatory camps versus other camps" }
    - { ref: R18, outcome: NAACP membership among nonveteran Black men by county veteran share, metric: probability, value: "Binned nonveteran NAACP-member probability rises from near zero at county veteran shares around 2-3% to about 2.7% at roughly 10% veteran share (Figure XII, p. 838)", direction: positive, vsBenchmark: "higher versus lower county Black veteran share" }
    - { ref: R19, outcome: migration and urban residence among Black WWI veterans, metric: coefficient, value: "Little direct effect on migration, living in a city with an NAACP chapter, urban residence, local Black population share, or co-location with other Black veterans (text p. 818, note 28; Online Appendix Figure A.VIII)", direction: none }
    - { ref: R20, outcome: NAACP membership among Black WWI veterans, metric: coefficient, value: "2SLS estimates remain positive and statistically significant using alternative links, veteran-status definitions, lottery instruments, and first-stage specifications (text pp. 821-822; Online Appendix Tables A.V-A.VIII)", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: 'Angrist and Krueger (1994)', relation: builds-on, note: 'draft lottery instrument strategy for military service; Vietnam-era design adapted here for WWI serial-number lottery' }
    - { cite: 'Greenberg et al. (2022)', doi: '10.1093/qje/qjac026', relation: tests, note: 'modern military as engine of Black economic mobility; WWI context yields near-zero socioeconomic effects, separating discrimination from opportunity channels' }
    - { cite: 'Angrist and Chen (2011)', doi: '10.1257/app.3.2.96', relation: cites, note: 'Vietnam-era GI Bill schooling gains; near-zero WWI income and education effects weigh against a human-capital explanation in this setting' }
    - { cite: 'Mettler (2002)', doi: '10.1017/s0003055402000217', relation: cites, note: 'WWII GI Bill and civic engagement via policy feedback; mechanism distinguished from WWI where no comparable benefits existed' }
    - { cite: 'Williams (2007)', doi: '10.1086/jaahv92n3p347', relation: builds-on, note: 'historical narrative that racial discrimination in the WWI military catalyzed Black postwar racial militancy; paper provides first causal evidence corroborating this account' }
    - { cite: 'Abramitzky, Boustan, and Eriksson (2012)', doi: '10.1257/aer.102.5.1832', relation: builds-on, note: 'ABE historical record linkage procedure used to link draft cards and NAACP rosters to the 1930 census' }
    - { cite: 'Bazzi et al. (2023)', doi: '10.3386/w31331', relation: builds-on, note: 'Confederate Culture Index adapted to construct county-level racial prejudice measure for heterogeneity analysis' }
  openQuestions:
    - "Whether the strong county-level correlation between Black veteran shares and NAACP membership among non-drafted registrants implies large indirect spillover effects on community activism in the New Negro era beyond the direct 2SLS estimate (p. 838)."
    - "How Black veterans' WWI experiences influenced participation in the civil rights achievements of the 1940s and 1950s, given that key features of Black WWI service were echoed in WWII (p. 838)."
    - "Spillover effects to other political domains: early Gallup surveys suggest Black WWI veterans held distinctive views on U.S. imperialism and federal domestic intervention, pointing to potential effects beyond the civil rights arena (pp. 838-839)."
  replicationCode:
    url: "https://doi.org/10.7910/DVN/LSPICA"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full PDF read (pp. 795-844); seven core results extracted from Tables I-III, Figures IV-V, VIII-XI. Not human-verified. Not reproduced. Replication data available at Harvard Dataverse (https://doi.org/10.7910/DVN/LSPICA)." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and magnitudes re-checked against PDF; three fixes applied: JEL codes corrected to full paper list (N42,N32,D71,D74,J15,Z13); Williams (2007) quote attributed to correct page (350→351); Mettler (2002) body mention added to satisfy relatesTo locatability." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and augmented the core results, structured findings, JEL assignment, and empirical specifications with additional main-text evidence and the survey regression. New extractions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 20 core rows and specifications re-checked against the PDF; corrected row estimates and R3 locator, toned down unsupported wording, and fixed JEL/method classifications. Locator checks pass; one headline heterogeneity result remains absent from Core results." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf046", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-09-23; NOT a CC licence. PDF (pp. 795, 844) confirms All rights reserved." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification strategy (WWI draft lottery as instrument for veteran status), the estimating equations, and the mechanism tests: enough to know what the paper found and how, without reading all 50 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf046).

## TL;DR

Nearly 400,000 Black men were drafted into the National Army during World War I, assigned primarily to racially segregated labor units under white supervisors. Ang and Chinoy (2026) leverage random variation from the WWI draft lottery and millions of digitized military records, NAACP membership rosters, and census data to estimate the causal effect of military service on postwar civil rights activism. Two-stage least squares (2SLS) estimates show that Black men randomly induced to enlist were nearly three times more likely to join the nascent NAACP than comparable nonveterans from the same draft board (baseline mean 1.6% vs implied veteran rate 4.4%), with a first-stage F-statistic of 565. A back-of-the-envelope calculation implies the draft induced approximately 10,000 Black men to join the NAACP, about 20% of the organization's 1940 membership.

These effects are not explained by residential mobility or improved socioeconomic status: near-zero effects on literacy, income, and employment are consistent with the limited training and scant postwar benefits provided to Black WWI soldiers (in contrast to the human capital gains documented for Vietnam-era veterans by Angrist and Chen (2011) and for modern volunteers by Greenberg et al. (2022)). Instead, the estimated effects increase with draft-board discrimination and are largest in camps where Black soldiers faced the most discriminatory treatment, consistent with Williams's (2007) historical account that perceived injustice catalyzed Black postwar activism in the New Negro era.

## Core results

Magnitudes and significance are as reported; `\*\*` = 5%. All 2SLS specifications instrument veteran status with the scaled draft lottery order number and include draft board fixed effects; standard errors clustered by serial number.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Military service nearly **tripled NAACP membership** among Black draftees relative to comparable nondraftees from the same board | Table III, col. 4, p. 817 | 2SLS: 0.0282\*\* (SE 0.0118); baseline nonveteran mean 1.6%, implied veteran rate 4.4%; first-stage F = 565.1 |
| R2 | Draftees were induced into **lasting NAACP participation**: 1 in 100 Black draftees participated for more than 7 years | Figure IV, p. 820 | 2SLS coefficient ~0.01 for 7+ years of membership; 95% CI excludes zero through at least 7 years |
| R3 | Military service nearly **tripled the probability of becoming a historically prominent community leader** in the New Negro era | Text p. 820 (discussing Online Appendix Table A.III; appendix not included in source PDF) | 2SLS point estimate comparable to NAACP membership effect; similar magnitude across both biographical databases |
| R4 | **Near-zero socioeconomic effects**: serving in WWI did not improve Black soldiers' literacy, home ownership, employment, or income | Figure V, Panel A, p. 823 | All 2SLS estimates statistically insignificant; CIs rule out occupational income gains above 0.10 SD (~$88 in 1950 dollars) |
| R5 | NAACP effects increase **monotonically with draft board racial bias**: near-zero for equitable boards, large for the most discriminatory | Figure VIII, p. 830 | 2SLS: ~0 for Q1 (smallest Black-white induction rate gap); ~0.07 for Q4 (largest gap) |
| R6 | Large NAACP effects for men at **most discriminatory camps** (denying Black soldiers training and promotion); near-zero for less discriminatory camps | Figure IX, p. 832 | 2SLS ~0.09 for camps with 0-25% Black NCO share or no Black troop training; ~0 when majority of NCOs are Black or training was provided |
| R7 | **Injustice is the strongest survey theme associated with voter participation**: veterans citing injustice were 24 percentage points more likely to vote | Figure XI, p. 836 | OLS coefficient ~0.24 on the injustice theme; all other themes statistically insignificant or borderline; robust to controls for birth year, birth state, county, and prior military experience |
| R8 | NAACP members were more likely to be WWI veterans than other adult Black men | Table II, p. 812 | Veteran (any) share: 15% of NAACP members versus 8% of nonmembers |
| R9 | The lottery order is balanced on observed prewar characteristics | Figure III, Panel B, p. 816 | Every order-number coefficient is below 0.01 standard deviations in magnitude and statistically insignificant |
| R10 | Military service did not increase other forms of club participation, which argues against a general group-affiliation explanation | Figure V, Panel B, p. 823 | No evidence of an effect on lodge, society, union, or nonprofit-organization occupations, or YMCA/club residence |
| R11 | NAACP effects decline as prewar county racial prejudice rises | Figure VI, Panel B, p. 826 | 2SLS estimates decline from about 0.07 at county prejudice score 0 to about 0.01 at score 3 |
| R12 | NAACP effects are larger in counties marked by Red Summer racial violence | Figure VI, Panel C, p. 826 | 2SLS estimate about 0.02 without county violence and about 0.06 with violence |
| R13 | Wartime experience predicts membership rates: combat veterans joined more often, especially men of the 92nd Division | Figure VII, p. 828 | Rates: about 2.1% for noncombatants in the United States and France, 4.0% for the 92nd Division, and 3.0% for the 93rd Division |
| R14 | The camp NCO composition test is distinct: effects are largest where Black troops had few Black NCOs | Figure IX, Panel A, p. 832 | 2SLS about 0.08 in camps with 0-25% Black NCOs, falling to about 0.02 in camps with 25-50% or over 50% Black NCOs |
| R15 | The camp training test is distinct: effects are concentrated where Black troops received no training | Figure IX, Panel B, p. 832 | 2SLS about 0.09 with no training, near zero with some training, and about 0.02 where all received training |
| R16 | Survey responses report varied service experiences, with injustice appearing less often than broader outlook, hardship, and religion | Figure X, Panel A, p. 835; text p. 834 | Injustice is mentioned in about 6% of roughly 1,300 responses; broader mind about 20%, manhood 12%, civic duty and training 8% each |
| R17 | Injustice themes are more prevalent in accounts from the most discriminatory camps | Figure X, Panel B, p. 835; text p. 834 | Respondents from the most discriminatory camps were more than twice as likely to mention injustice |
| R18 | County veteran shares are positively associated with NAACP membership among nonveterans, consistent with possible community spillovers | Figure XII, p. 838 | Binned probability rises from near zero at county veteran shares around 2-3% to about 2.7% at roughly 10% veteran share; the paper reports no regression coefficient |
| R19 | Direct effects on migration and geographic exposure to NAACP activity are small | Text p. 818, note 28; Online Appendix Figure A.VIII | The paper reports little effect on migration, living in an NAACP-chapter city, urban residence, local Black population share, or co-location with other Black veterans |
| R20 | The NAACP result is robust to alternate matching and identification choices | Text pp. 821-822; Online Appendix Tables A.V-A.VIII | Estimates remain positive and statistically significant across alternate linkage procedures, veteran-status measures, instruments, and first-stage models |

**Overall (paper's conclusion).** Military service causally increased Black Americans' participation in the early civil rights movement. The near-zero socioeconomic estimates weigh against skill acquisition or economic improvement as the main explanation, while larger effects among men exposed to more discriminatory draft boards and military camps are consistent with discrimination-induced activism in the New Negro era. The draft likely induced approximately 10,000 Black men to join the NAACP, accounting for roughly 20% of its 1940 membership.

## Theory / model

The paper has no formal economic model. It tests two competing mechanisms for how military service could affect civil rights activism:

**Mechanism 1 (Human capital / socioeconomic mobility).** Military service provides formal training, organizational skills, income, and social networks that lower the cost of civic participation. This predicts positive effects on income and education alongside NAACP membership, and effects concentrated among soldiers who received more training.

**Mechanism 2 (Discrimination-induced radicalization).** Experiences of institutional racism in the draft process (racial bias in induction rates, denial of exemptions) and in segregated military camps (exclusion from training, leadership, and equal treatment) catalyze perceptions of injustice and political resistance. This predicts effects concentrated among soldiers who experienced the most discrimination, with no corresponding socioeconomic gains.

The paper's evidence is more consistent with Mechanism 2 than with Mechanism 1, though these mechanism tests do not by themselves establish mediation:
- Near-zero effects on all socioeconomic outcomes (R4);
- no increase in other census measures of club involvement (R10), and little effect on migration or geographic exposure to NAACP activity (R19);
- Effects increasing with draft board racial bias in induction rates (R5);
- smaller effects as prewar county prejudice rises, but larger effects in counties marked by Red Summer violence (R11, R12), and at camps with few Black NCOs or no training (R6, R14, R15);
- injustice mentions are more than twice as common among respondents from the most discriminatory camps, and injustice is the strongest survey theme associated with voting (R7, R17).

The absence of comparable postwar benefits makes a policy-feedback channel like the one Mettler (2002) documents for the WWII GI Bill less likely in this WWI setting.

These results are consistent with the historical account of Williams (2007, p. 351) that "systematic discrimination during military service politicized black soldiers" and their "postwar disillusionment" drove racial militancy in the New Negro era.

**Identification.** The WWI draft lottery supplies quasi-random variation in military service. Six weeks after the first registration (June 5, 1917), paper slips containing serial numbers 1-10,500 were drawn in a national lottery; the rank of each man's serial number among those at his draft board determined his induction order. The authors infer order numbers from serial numbers, board size, and the national drawing sequence. The instrument is exogenous by construction: Figure III, Panel B (p. 816) shows all prewar registrant characteristics (exemption claim, marital status, occupation) have coefficients below 0.01 standard deviations on the scaled order number, all statistically insignificant.

Unlike the Vietnam and WWII draft lotteries examined in Angrist and Krueger (1994) and related work, the WWI lottery was based on registration serial numbers rather than birth dates, generating variation within draft boards rather than within birth cohorts.

## Method

The paper applies 2SLS using the scaled draft lottery order number as an instrument for veteran status, with draft-board fixed effects and standard errors clustered by serial number. Historical record linkage across administrative databases follows Abramitzky, Boustan, and Eriksson (2012), henceforth ABE, requiring exact matches on birth state and name initials with close alignment on full names and birth years. For the heterogeneity analysis, county-level racial prejudice is measured using a version of the Confederate Culture Index adapted from Bazzi et al. (2023).

**First stage** (equation 2, p. 815):

$$\text{Veteran}_i = \delta_b + \gamma \, \text{Order}_i + X_i'\Lambda + v_i \tag{2}$$

Here $$\text{Order}_i$$ is registrant $$i$$'s inferred order number scaled by the total number of registrants in his draft board, so $$\text{Order}_i \in [0,1]$$ with lower values indicating earlier lottery draws and greater induction likelihood. $$\delta_b$$ are draft board fixed effects that restrict the variation to within-board comparisons; $$X_i$$ are prewar individual controls (birth year, state of birth, prewar occupation, exemption claim interacted with marital status). The first stage uses the linked analysis sample of 204,923 draft registrants; standard errors are clustered by serial number throughout.

Figure III, Panel A (p. 816) shows the first-stage binned scatterplot: slope = -0.088 (SE 0.0038). The gap in veteran likelihood between men with the lowest and highest order numbers is approximately 10 percentage points. First-stage F-statistics range from 534 to 565 across the main specifications (Table III, p. 817).

## Empirical specifications

**Instrument balance check (R9).** To assess exogeneity, the authors run separate OLS regressions of each standardized prewar registrant characteristic on the scaled lottery order number (Figure III, Panel B, p. 816):

$$X_{ib} = \alpha + \theta \, \text{Order}_{ib} + W_i'\pi + \delta_b + \varepsilon_{ib}$$

Here $$X_{ib}$$ is a prewar characteristic, $$W_i$$ includes birth-year and state-of-birth controls, and $$\delta_b$$ are draft-board fixed effects. The unit is the individual draft registrant with the characteristic observed; standard errors are clustered by serial number. The paper reports each estimated order coefficient is below 0.01 standard deviations in magnitude and statistically insignificant.

**Main specification** (equation 1, p. 813):

$$\text{NAACP}_i = \lambda_b + \beta \, \text{Veteran}_i + X_i'\Gamma + u_i \tag{1}$$

where $$\text{NAACP}_i$$ indicates whether individual $$i$$ appears in NAACP membership rosters between the end of WWI and 1939; $$\text{Veteran}_i$$ is an indicator combining the 1930 census self-report and VAMI/ATS military record matches; $$\lambda_b$$ are draft board fixed effects; and $$X_i$$ are prewar controls. Veteran status is instrumented with $$\text{Order}_i$$ from equation (2). Analysis sample: 204,923 draft registrants linked to the 1930 census.

The preferred specification (Table III, column 4) adds prewar occupation controls; the 2SLS coefficient is 0.0282\*\* (SE 0.0118, first-stage F = 565.1). Column 5 adds 1930 county fixed effects and reports 0.0231\*\* (SE 0.0117, first-stage F = 554.2), addressing residential mobility during the Great Migration. All columns use the 204,923 linked registrants and cluster standard errors by serial number. The OLS coefficients (0.0017-0.0044) are appreciably smaller, consistent with measurement error in veteran status attenuating the first-stage slope and with civic-minded volunteers being less inclined to join organizations that challenged the government.

**Heterogeneity by discrimination (R5, R6, R11, R12, R14, R15).** Equation (1) is estimated separately for quartiles of the board-level Black-white induction rate gap (Figure VIII, p. 830); for county prejudice scores 0-3 and Red Summer violence groups (Figure VI, p. 826); and for camp bins of Black noncommissioned-officer share and access to military training (Figure IX, p. 832). Each 2SLS regression controls for birth year, state of birth, draft-board fixed effects, prewar occupation, and exemption-claim-by-marital-status where available; standard errors are clustered by serial number. The unit is the individual draft registrant in the linked analysis sample, with camp assignment predicted for all registrants from draft-board and order-number crosswalks. The county prejudice measure adapts Bazzi et al. (2023).

**Club involvement (R10).** The same 2SLS design is applied to the three 1930 census club indicators: occupation as an official of a lodge, society, or union; industry in nonprofit membership organizations; and residence in a YMCA or club. The sample is the individual draft registrants linked to the census; draft-board fixed effects and serial-number clustered standard errors are retained.

**Wartime experience (R13).** Figure VII reports NAACP membership rates for four mutually exclusive veteran groups, not a separate causal estimate: noncombatants in the United States, noncombatants in France, combatants in the 92nd Division, and combatants in the 93rd Division. The plotted rates are approximately 2.1%, 2.1%, 4.0%, and 3.0%, respectively (p. 828).

**Socioeconomic outcomes (R4).** The same 2SLS specification is applied to standardized outcomes from the 1930 and 1940 censuses: literacy, home ownership, employment, occupational income score, wage and salary income in 1940, and college attendance. All estimates are near zero and statistically insignificant (Figure V, p. 823); confidence intervals rule out occupational income gains above 0.10 standard deviations.

**Survey analysis (R7, R16, R17).** Figure X reports theme prevalence among about 1,300 returned Virginia and Connecticut veteran questionnaires, while Figure XI estimates multivariate OLS regressions of self-reported voting on theme indicators. The survey regression is:

$$\text{Vote}_i = \alpha + \sum_k \beta_k \text{Theme}_{ik} + Z_i'\theta + \varepsilon_i$$

where $$\text{Theme}_{ik}$$ indicates whether respondent $$i$$ mentioned theme $$k$$ and $$Z_i$$ contains the reported controls. The estimation sample is Black Army veterans with nonmissing questionnaire responses; controls are birth year, birth state, prior military experience, and county of residence; standard errors are heteroskedasticity-robust. The injustice-theme coefficient is 0.24 (24 percentage points, Figure XI, p. 836). The observed theme differences by camp discrimination in Figure X, Panel B are descriptive comparisons among respondents, not a separate causal estimate.

**Community association (R18).** Figure XII is a binned county-level relationship between the share of Black men who were veterans in the 1930 census and NAACP membership among nonveterans. It does not report a regression coefficient or establish a causal spillover effect.

**Mobility and robustness checks (R19, R20).** The authors report little effect of military service on migration or local exposure to NAACP activity (text p. 818, note 28; Online Appendix Figure A.VIII). They also report that the NAACP estimate remains positive and statistically significant under alternative census-linking procedures, veteran-status measures, instruments, and first-stage models (text pp. 821-822; Online Appendix Tables A.V-A.VIII). These analyses reuse equation (1) with draft-board fixed effects and serial-number clustered standard errors; controls and available samples vary by robustness check, and the main text does not give a single N for these appendix specifications.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| WWI Draft Registration Cards, First Registration June 5, 1917 (NARA) | Primary sample: ~936K Black male registrants; serial numbers, birth date/state, address, occupation, exemption claim; serial numbers used to reconstruct lottery order | No page yet |
| NAACP Membership Rosters, ProQuest History Vault (NAACP Papers collection) | Main outcome: 233,517 member observations across 227 branches, 1912-1940; linked to census via name and address | No page yet |
| Veterans Administration Master Index (VAMI), 1917-1919 | Veteran status measure: ~4M veterans who claimed VA benefits, linked to draft cards by name/county/birth date; 120,412 cards linked | No page yet |
| Army Transport Service (ATS) Passenger Lists | Veteran status and unit assignment for soldiers deployed to or returning from Europe; ~6M passengers; Black units identified via *Directory of Troops* | No page yet |
| 1930 Full-Count Census (IPUMS USA, Ruggles et al. 2024) | Primary linking bridge: ~6M Black men; name, address, birth data, veteran self-report; socioeconomic outcomes (literacy, income, employment) | [U.S. Census Bureau data](/wiki/datasets/census/) |
| 1940 Census (subset linked via Abramitzky, Boustan, and Rashid 2020) | Extended outcomes for wage income and college attendance | [U.S. Census Bureau data](/wiki/datasets/census/) |
| Virginia and Connecticut WWI Veterans' Questionnaires | Survey mechanism analysis: ~1,300 Black army veterans' responses to "effects upon yourself" of draft, camp, and overseas experience | No page yet |
| African American National Biography / ProQuest African American Biographical Database | Community leadership outcome (R3): 7,554 Black men born 1860-1900 identified as historically significant by modern historians and contemporaneous publications | No page yet |

Main analysis sample: 204,923 draft registrants linked to the 1930 census, of whom 35% are identified as veterans using the union measure (census self-report OR VAMI/ATS match) and 1.8% are identified as NAACP members. The NAACP membership data spans 1912-1940, with the vast majority of observations from after 1925 (roughly 75% of all NAACP members from the mid-1920s to late 1930s).

## When to read the full paper

Use the [original](https://doi.org/10.1093/qje/qjaf046) if you are:
examining the full set of robustness checks (alternative linking strategies, alternative veteran status definitions, alternative first-stage functional forms including cubic polynomial and nonparametric specifications, alternative instruments based on actual vs. inferred order numbers) in the Online Appendix;
studying the evolution of NAACP membership effects across the 1920s and 1930s (Online Appendix Figure A.IX) or the distribution of membership duration (Online Appendix Figure A.X);
analyzing spillover effects of veterans on undrafted Black community members and the macrolevel relationship between local veteran shares and NAACP branch formation (Figure XII, p. 838);
or replicating from the publicly available dataset at Harvard Dataverse (https://doi.org/10.7910/DVN/LSPICA).

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026, pp. 795-844. This distillation was extracted by LLMs on 2026-06-28 and 2026-10-04 and is **not human-verified or independently reproduced**. The article is paywalled; extract-only applies.

> Ang, Desmond, and Sahil Chinoy. "Vanguard: Black Veterans and Civil Rights After World War I."
> *The Quarterly Journal of Economics* 141, no. 1 (2026): 795-844.
> DOI: 10.1093/qje/qjaf046. © The Author(s) 2025. All rights reserved.
> Published by Oxford University Press on behalf of President and Fellows of Harvard College.
> This page is an **extract** by the Institute for Automated Research: core results and
> equations re-expressed; not a reproduction.
