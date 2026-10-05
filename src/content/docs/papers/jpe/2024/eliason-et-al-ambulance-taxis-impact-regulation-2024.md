---
title: "Ambulance Taxis: Eliason, League, Leder-Luis, McDevitt & Roberts (2025)"
description: >-
  Distilled: Prior authorization for Medicare ambulance rides to dialysis facilities
  reduced nonemergency rides by 68% and payments by 67.7%, far outperforming
  criminal and civil pay-and-chase litigation, without measurable patient health
  harms. Journal of Political Economy 2025 (May 2025), paywalled. Twenty core
  results cover treatment effects, validation, mechanisms, and counterfactual savings.
sidebar:
  label: Eliason et al. 2025
  order: 1
tags: [paper-summary, health-economics, public-finance, regulation, fraud, medicare,
       healthcare-policy, criminal-justice, event-study, difference-in-differences,
       panel-regression, peer-reviewed, unreplicated, data:usrds]
paper:
  authors: Paul Eliason, Riley League, Jetson Leder-Luis, Ryan C. McDevitt, James W. Roberts
  authorList:
    - { family: Eliason, given: Paul, affiliation: "University of Utah and NBER" }
    - { family: League, given: Riley, orcid: "0000-0003-3381-7618", affiliation: "University of Illinois Urbana-Champaign" }
    - { family: Leder-Luis, given: Jetson, affiliation: "Boston University and NBER" }
    - { family: McDevitt, given: "Ryan C.", affiliation: "Duke University and NBER" }
    - { family: Roberts, given: "James W.", orcid: "0000-0001-6204-5325", affiliation: "Duke University and NBER" }
  year: 2025
  venue: "Journal of Political Economy 133(5), May 2025, pp. 1661-1702"
  venueShort: J. Polit. Economy 2025
  doi: 10.1086/734134
  jel:
    codes: [I11, K42, I18]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Healthcare Policy and Management", "Law, Economics, and Judicial Systems", "Medical Malpractice and Liability Issues"]
  dataAccess: proprietary-confidential
  outcome:
    - nonemergency ambulance rides to dialysis facilities (count and Medicare payments)
    - number of active ambulance companies in the market
    - patient health outcomes (mortality, hospitalization, dialysis sessions)
  outcomeClass: [social-welfare, firm-dynamics]
  license: "Paywalled (c) 2025 The University of Chicago. All rights reserved. Published by the University of Chicago Press. NIH-funded accepted manuscript available via NIH Public Access at PubMed Central (PMC12331087)."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press site, 2026-06-26); NIH Public Access accepted manuscript at https://pmc.ncbi.nlm.nih.gov/articles/PMC12331087/"
  redistribution: extract-only
  resultsCount: 20
  citedByCount: 7
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [moral-hazard, limited-liability-deterrence-failure, low-detection-probability]
  introducesData: true
  scope:
    region: US
    assetClass: Medicare ESRD ambulance services
    period: 2003-01..2017-12
    frequency: monthly
    dataType: [administrative]
    granularity: [individual, firm, aggregate]
    n: "37.5 million nonemergency ambulance rides billed to Medicare (2003-2017); 18.99 million patient-months; 3,081 ambulance firms (last 6 years of data)"
  findings:
    - { ref: R1, outcome: total Medicare payments for nonemergency ambulance rides, metric: coefficient, value: "-1.129 log points (SE 0.350)**", direction: negative, vsBenchmark: "criminal enforcement: -0.211 (about 19% of the average-effect point estimate); civil enforcement: -0.042 (n.s.)" }
    - { ref: R2, outcome: number of nonemergency ambulance rides, metric: coefficient, value: "-0.913 log points (SE 0.176)***", direction: negative, vsBenchmark: "criminal enforcement: -0.280 (about 30% the magnitude); civil enforcement: +0.026 (n.s.)" }
    - { ref: R3, outcome: total Medicare payments (criminal enforcement), metric: coefficient, value: "-0.211 log points (SE 0.106)+", direction: negative }
    - { ref: R4, outcome: number of nonemergency ambulance rides (criminal enforcement), metric: coefficient, value: "-0.280 log points (SE 0.099)**", direction: negative }
    - { ref: R5, outcome: total Medicare payments (civil enforcement), metric: coefficient, value: "-0.042 log points (SE 0.110)", direction: none }
    - { ref: R6, outcome: number of nonemergency ambulance rides (civil enforcement), metric: coefficient, value: "0.026 log points (SE 0.066)", direction: none }
    - { ref: R7, outcome: number of active ambulance firms providing nonemergency dialysis rides, metric: coefficient, value: "-0.286 log points (SE 0.066)***", direction: negative }
    - { ref: R8, outcome: patient health outcomes after prior authorization, metric: coefficient, value: "Dialysis sessions -0.0256 (SE 0.0191); mortality 0.000372 (SE 0.000580); all-cause hospitalizations -0.00132 (SE 0.00136); fluid hospitalizations -0.000854 (SE 0.000777), all n.s.", direction: none }
    - { ref: R9, outcome: nonemergency ambulance use among dialysis patients who ride, metric: level, value: "19.54 nonemergency rides per riding patient-month; 660.3 lifetime rides per rider; more than 37.5 million rides and $7.7 billion in Medicare spending", direction: positive }
    - { ref: R10, outcome: total Medicare payments for nonemergency ambulance rides, metric: coefficient, value: "First-wave states: -1.21 log points; second-wave states: -1.07 log points; difference not statistically significant", direction: negative }
    - { ref: R11, outcome: number of emergency ambulance rides, metric: coefficient, value: "Prior authorization had no impact (falsification test; exact coefficient not reported in main text)", direction: none }
    - { ref: R12, outcome: patient health outcomes among frequent ambulance riders, metric: coefficient, value: "Dialysis sessions -0.0226 (SE 0.0312); mortality -0.000433 (SE 0.00167); all-cause hospitalizations -0.00828 (SE 0.00517); fluid hospitalizations -0.00137 (SE 0.00176)", direction: none }
    - { ref: R13, outcome: number and composition of active ambulance firms, metric: coefficient, value: "Active firms -0.286 log points (SE 0.0657)***; firms providing only nonemergency dialysis rides increased from 93 to 120", direction: mixed }
    - { ref: R14, outcome: patient ride persistence and health among current ambulance riders, metric: coefficient, value: "Riding next month -0.0633 (SE 0.0529); same-month hospitalization +0.01171 (SE 0.00630); same-month mortality +0.00711 (SE 0.00348)*", direction: mixed }
    - { ref: R15, outcome: Medicare denial rate for submitted nonemergency ambulance claims, metric: probability, value: "5.7% in the year before prior authorization; 22.7% in January 2015; among firms exiting at the start, 8.1% to 52.5%", direction: positive }
    - { ref: R16, outcome: number of active ambulance firms after litigation, metric: coefficient, value: "Civil: log firms +0.0122 (SE 0.0290), count +0.779 (SE 0.652); criminal: log firms -0.0442 (SE 0.0731), count -5.651 (SE 6.436)", direction: mixed }
    - { ref: R17, outcome: Medicare payments to firms directly subject to litigation, metric: level, value: "Criminal indictment reduced payments by approximately $12,000 per firm-month in the 20% claims sample (about $60,000 scaled to all claims); civil litigation showed no apparent effect", direction: mixed }
    - { ref: R18, outcome: total Medicare payments and nonemergency ambulance rides, metric: coefficient, value: "Civil hours: payments +0.0117 (SE 0.105), rides -0.0124 (SE 0.0574); criminal hours: payments +0.0631 (SE 0.191), rides -0.0705 (SE 0.144); total hours: payments +0.102 (SE 0.262), rides -0.0478 (SE 0.196)", direction: none }
    - { ref: R19, outcome: Medicare spending and unnecessary nonemergency ambulance rides, metric: level, value: "Counterfactual prior authorization throughout the sample: $4.8 billion saved and 21.2 million unnecessary rides prevented, at about $28 million annual administrative cost", direction: positive }
    - { ref: R20, outcome: nonemergency ambulance rides and Medicare payments in neighboring districts, metric: coefficient, value: "No negative impacts in neighboring districts; exact estimates not reported in main text", direction: none }
  resultType: new-finding
  relatesTo:
    - { cite: "Shavell (1984)", doi: '10.1086/467745', relation: builds-on, note: "limited liability and harm vs regulation theory; our model extends to financial fraud by many small actors" }
    - { cite: "Polinsky and Shavell (2000)", doi: '10.1257/jel.38.1.45', relation: builds-on, note: "economic theory of public enforcement of law; we add the setting of financial fraud against government" }
    - { cite: "Glaeser and Shleifer (2003)", relation: builds-on, note: "rise of the regulatory state and conditions when administrative rules outperform litigation" }
    - { cite: "Becker (1968)", doi: '10.1086/259394', relation: builds-on, note: "crime and punishment framework; we adapt to health-care fraud with limited liability and low detection" }
    - { cite: "Callaway and Sant'Anna (2021)", relation: cites, note: "DiD with multiple time periods; we implement their estimator as robustness check" }
    - { cite: "Behrer et al. (2021)", doi: '10.1086/712733', relation: cites, note: "monitoring vis-a-vis investigation in law enforcement; parallel to our regulation vs litigation comparison" }
    - { cite: "Eliason et al. (2020)", doi: '10.1093/qje/qjz034', relation: cites, note: "prior work on dialysis industry acquisition effects; shared setting" }
  openQuestions:
    - "Whether prior authorization generalizes to other Medicare expenditures with similar fraud profiles (power mobility devices, home health services, hyperbaric oxygen), which Medicare has begun expanding to (pp. 1698-1699)."
    - "A full welfare model would require specifying the social planner's objective function with weights on firms' profits, patients' utility, and public expenditure, which the paper intentionally omits (p. 1697)."
    - "Whether litigation would become more effective at general deterrence if additional resources were devoted to prosecution, or if case specialization improved; the current evidence finds no elasticity of rides with respect to enforcement capacity (p. 1689, Table 9)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/QAGBDM", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-26", role: extracted, note: "Read full PDF; all locators and magnitudes are from the PDF; not human-verified and not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; two fixes applied: (1) R8 all-cause hospitalizations coefficient corrected from -0.013 (SE 0.014) to -0.00132 (SE 0.00136) per Table 4 col. 3 (factor-of-10 transcription error); (2) year corrected from 2024 to 2025 per PDF cover (electronically published March 19, 2025; JPE vol. 133(5) May 2025). All other magnitudes, equations (1)-(5), penalty formulas, and locators verified correct." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added twelve findings, matching findings-axis entries, model and estimating equations, and complete specification details. Additions are not yet re-verified and were not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 20 Core rows, equations and specifications, classifications, findings, frontmatter, and prose against the PDF; corrected the TL;DR's 'most' to 'many', the payments comparison from 10-15% to about 19%, removed R9's non-directional finding, fixed the outcome classes, added body mentions for cited works, and removed the incorrect DOI for Glaeser and Shleifer (2003). Required locator checks pass for this page; no unresolved substantive discrepancies. Findings pass (2026-10-04): added the R9 finding." }
  licenceVerification:
    - { source: "Crossref works/10.1086/734134", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "license field absent (null); title and authors confirmed; published [[2025,5,1]], volume 133, issue 5; no CC or open license in Crossref metadata. Artifact page 1 states (c) 2025 The University of Chicago. All rights reserved." }
---

**What this is.** This is a distilled skeleton of Eliason, League, Leder-Luis, McDevitt, and Roberts (2025). Read the [original paper](https://doi.org/10.1086/734134) or the [NIH Public Access version](https://pmc.ncbi.nlm.nih.gov/articles/PMC12331087/) to replicate or extend.

## TL;DR

Between 2003 and 2017, Medicare spent $7.7 billion on 37.5 million nonemergency ambulance rides transporting dialysis patients to and from treatment facilities, many of which did not satisfy Medicare's medical necessity criteria. Using the staggered rollout of a prior authorization requirement across US states and the differential timing of 69 criminal and civil DOJ lawsuits across 26 federal judicial districts, the paper identifies the causal effects of two anti-fraud approaches. Prior authorization, which requires ambulance companies to obtain physician sign-off before providing a ride and receiving payment, caused an immediate and persistent 68% drop in nonemergency rides. Criminal litigation reduced rides by roughly 24%, while civil litigation had no statistically significant effect. No evidence is found that prior authorization harmed patient health. The paper estimates the federal government would have saved $4.8 billion had it imposed prior authorization in 2003 at an administrative cost of only $28.6 million per year.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Prior authorization reduces total Medicare payments for nonemergency dialysis rides | Table 2, col. 1, p. 1676 | beta = -1.129 log points (SE = 0.350)\*\*, dep. mean = 9.934; -67.7% in levels |
| R2 | Prior authorization reduces total nonemergency ride count | Table 2, col. 3, p. 1676 | beta = -0.913 log points (SE = 0.176)\*\*\*, dep. mean = 5.357 |
| R3 | Criminal enforcement reduces total ride payments (modest, delayed) | Table 3, col. 3, p. 1678 | beta = -0.211 log points (SE = 0.106)+; Fig. 5 shows gradual decline over 24 months |
| R4 | Criminal enforcement reduces ride count | Table 3, col. 4, p. 1678 | beta = -0.280 log points (SE = 0.099)\*\* |
| R5 | Civil enforcement has no significant effect on payments | Table 3, col. 1, p. 1678 | beta = -0.042 (SE = 0.110), n.s. |
| R6 | Civil enforcement has no significant effect on ride count | Table 3, col. 2, p. 1678 | beta = 0.026 (SE = 0.066), n.s. |
| R7 | Prior authorization reduces number of active ambulance firms by 24.9% | Table 6, col. 1, p. 1681 | beta = -0.286 log points (SE = 0.066)\*\*\*, dep. mean = 2.152 |
| R8 | No evidence of adverse patient health effects from prior authorization | Table 4, p. 1680; Table 5, p. 1680 | mortality: 0.000372 (SE 0.000580) n.s.; dialysis sessions: -0.026 (SE 0.019) n.s.; hospitalizations: -0.00132 (SE 0.00136) n.s. |
| R9 | Dialysis ambulance use was frequent among riders | Table 1, p. 1671; text p. 1670 | Riding patient-months averaged 19.54 nonemergency rides; riders averaged 660.3 lifetime claims; the study covers 37.5 million rides and over $7.7 billion in spending |
| R10 | Payment effects were similar across the two authorization rollout waves | text p. 1676 | First wave: -1.21 log points; second wave: -1.07 log points; difference not statistically significant |
| R11 | Prior authorization did not reduce emergency ambulance rides, a falsification outcome | text p. 1676 | The appendix F falsification test reports no impact on emergency rides; the main text gives no coefficient |
| R12 | Frequent riders also show no detectable health deterioration after authorization | Table 5, p. 1680 | Dialysis sessions: -0.0226 (SE 0.0312); mortality: -0.000433 (SE 0.00167); all-cause hospitalizations: -0.00828 (SE 0.00517); fluid hospitalizations: -0.00137 (SE 0.00176), all n.s. |
| R13 | Authorization changed the ambulance-firm market and increased specialization | Table 6, p. 1681; Figure 7, p. 1683 | Active firms: -0.286 log points (SE 0.0657)***; firms serving only nonemergency dialysis rides rose from 93 to 120; over half of firms with under 20% nonemergency rides exited (text p. 1683) |
| R14 | Remaining riders were less persistent and more medically acute | Table 7, p. 1684 | Among riding patient-months: next-month ride probability -0.0633 (SE 0.0529); same-month hospitalization +0.01171 (SE 0.00630); same-month mortality +0.00711 (SE 0.00348)* |
| R15 | Claim denials rose after authorization, consistent with screening | Figure 10, p. 1686; text p. 1695 | Overall claim denial rate: 5.7% in the year before authorization to 22.7% in January 2015; firms exiting at the start rose from 8.1% to 52.5% |
| R16 | Litigation barely changed the market-wide number of active firms | Table 8, p. 1687 | Civil: log firms +0.0122 (SE 0.0290), count +0.779 (SE 0.652); criminal: log firms -0.0442 (SE 0.0731), count -5.651 (SE 6.436) |
| R17 | Criminal indictments incapacitated defendants, unlike civil complaints | Figure 12, p. 1688; text p. 1688 | Payments fell nearly to zero after criminal indictments; text estimates an approximately $12,000 per firm-month decrease in the observed 20% sample, about $60,000 scaled to all claims; civil cases had no apparent effect |
| R18 | Greater DOJ enforcement capacity did not measurably change rides or payments | Table 9, p. 1689 | Civil hours: payment +0.0117 (SE 0.105), rides -0.0124 (SE 0.0574); criminal hours: payment +0.0631 (SE 0.191), rides -0.0705 (SE 0.144); total hours: payment +0.102 (SE 0.262), rides -0.0478 (SE 0.196) |
| R19 | The full-sample counterfactual implies large fiscal savings | Conclusion, text p. 1698 | Authorization throughout the sample would save $4.8 billion, prevent 21.2 million unnecessary rides, and cost about $28 million per year to administer |
| R20 | Litigation effects were localized, supporting the district comparison design | text p. 1676 | Appendix G reports no negative impacts on rides or payments in neighboring districts; exact estimates are not reported in the main text |

**Overall (paper's conclusion).** Prior authorization was far more effective than pay-and-chase litigation for reducing Medicare ambulance fraud because it prevents fraudulent payments from being made in the first place, bypassing the twin obstacles of limited defendant liability and low prosecution probability that make realized enforcement ineffective against a large population of small fraudulent firms.

## Theory / model

Section VI frames why prior authorization can outperform litigation when fraudulent providers can spend proceeds before enforcement, penalties are limited by recoverable assets, and detection is unlikely (pp. 1690-1693). The firm's fraud decision is equation (5):

The model builds on Shavell (1984) and Polinsky and Shavell (2000) on liability and public enforcement, Becker (1968) on crime and punishment, and Glaeser and Shleifer (2003) on when administrative rules outperform litigation. The regulation-versus-investigation comparison also relates to Behrer et al. (2021).

$$
G(\text{Reg}) > P_{\text{Crim}} F_{\text{Crim}} + P_{\text{Civ}} F_{\text{Civ}} \tag{5}
$$

The gain from fraud is revenue less operating cost, while prior authorization raises compliance costs and reduces revenue through denials (text p. 1690):

$$
G(\text{Reg}) = R(\text{Reg}) - C(\text{Reg})
$$

Penalties reflect treble damages capped by assets, with jail disutility added for criminal enforcement (text p. 1690):

$$
F_{\text{Civ}} = \min(3R(\text{Reg}),\, \text{Assets}), \qquad
F_{\text{Crim}} = \min(3R(\text{Reg}),\, \text{Assets}) + J
$$

The mechanism is that limited liability caps collectible monetary penalties, and low detection probability keeps expected litigation costs low. In 27 prosecution cases with recovery data, recovered funds averaged less than $1.2 million or 51% of amounts owed (text p. 1691). From 2007 to 2014, the authors estimate 2.4% criminal and 3.8% civil enforcement probabilities, based on 28 criminal and 44 civil defendants relative to about 1,150 potentially fraudulent firms (text p. 1692). Prior authorization directly lowers the expected gains by preventing claims from being paid until medical necessity is approved. The observed denial rate rose from 5.7% before authorization to 22.7% in January 2015 (text p. 1695).

## Method

The design uses the staggered rollout of prior authorization across states and staggered timing of DOJ civil and criminal actions across federal judicial districts. Prior authorization began in December 2014 in New Jersey, Pennsylvania, and South Carolina, with a second wave in January 2016. Lawsuit treatment dates are the first filing of the relevant action in each district (Section IV, pp. 1673-1675). The main design is a two-way fixed effects event study and a scalar post-treatment summary, with district and month fixed effects and controls for prior exposure to other enforcement types. Treatment windows are restricted to districts observed for the full event window: K=24 pre-treatment months and L=23 post-treatment months for district outcomes, and K=12, L=11 for patient outcomes (pp. 1673-1674). Standard errors are clustered by district.

The district-level event study is equation (1), with the month immediately before treatment omitted as the reference period (p. 1673):

$$
Y_{dt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \sum_{e=0}^{L} \beta_e T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{dt} + \epsilon_{dt} \tag{1}
$$

Equation (2) replaces the post-treatment event-time coefficients with their common average, representing the average effect over the first L months (pp. 1673-1674):

$$
Y_{dt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \beta \sum_{e=0}^{L} T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{dt} + \epsilon_{dt} \tag{2}
$$

For patient-level outcomes, equations (3) and (4) use the same dynamic and scalar specifications, with patient and facility controls and a one-year event window (p. 1674):

$$
Y_{idt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \sum_{e=0}^{L} \beta_e T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{idt} + \epsilon_{idt} \tag{3}
$$

$$
Y_{idt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \beta \sum_{e=0}^{L} T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{idt} + \epsilon_{idt} \tag{4}
$$

Appendix B reports alternative staggered difference-in-differences estimators; Appendix D varies control groups and functional forms. The main text reports those checks as consistent with the principal estimates (pp. 1674-1675, 1676).

## Empirical specifications

**District-level rides and payments (Tables 2-3, pp. 1676, 1678).** Equation (2) is estimated on log(1 + payments) and log(1 + rides), as well as levels. The policy treatment is prior authorization for Table 2 and the first civil or criminal action in the district for Table 3. District and year-month fixed effects are included, along with controls for exposure to other enforcement types; standard errors are clustered by district. Table 2 uses 7,272 district-months from 2011-2017. Table 3 uses 14,160 civil and 14,436 criminal district-month observations from 2003-2017. Table 2 estimates -1.129 (SE 0.350) for log payments and -0.913 (SE 0.176) for log rides. Table 3 estimates civil effects of -0.042 (SE 0.110) on log payments and +0.026 (SE 0.0663) on log rides, and criminal effects of -0.211 (SE 0.106) and -0.280 (SE 0.0994), respectively.

**Patient health and selection (Tables 4-5, pp. 1680; Table 7, p. 1684).** Equations (3)-(4) estimate patient-month outcomes from 2011-2017 with district and year-month effects, patient and facility controls, facility fixed effects, and district-clustered standard errors. Table 4 has 15,077,158 patient-months; Table 5 restricts to frequent riders with at least 100 rides before the policy and has 905,331 observations. Table 7 restricts to current rider-months and has 603,917 observations. The health outcomes in Tables 4-5 are dialysis sessions, mortality, all-cause hospitalization, and fluid hospitalization. Table 7 estimates next-month riding and same-month hospitalization and mortality, measuring post-policy changes in who continues to use rides rather than average health effects across all patients.

**Firm outcomes and litigation incapacitation (Tables 6 and 8, pp. 1681, 1687; Figure 12, p. 1688).** Equation (2) is estimated for log(1 + active firms) and active-firm counts, with district and year-month fixed effects and standard errors clustered by district. Table 6 uses 6,336 district-months from 2012-2017 in the USRDS data. Table 8 uses the 20% Medicare claims sample, 12,143 civil and 12,203 criminal district-month observations from 2007-2019. Figure 12 follows firm-month payments around the complaint or indictment date. The paper reports the firm-level criminal-incapacitation contrast descriptively: payments fall nearly to zero after indictment, while civil complaints show no apparent effect; the text scales the criminal payment reduction to about $12,000 monthly in the 20% sample.

**Patient selection and claim screening (Table 7, p. 1684; Figure 10, p. 1686).** Table 7 estimates equation (4) for current rider-months, with patient and facility controls, facility fixed effects, and district-clustered standard errors. Figure 9 presents the corresponding event-study path using equation (3), with K=12 and L=11. Figure 10 plots the share of submitted ambulance claims denied by Medicare across the two authorization waves. Its plotted claim-denial series is descriptive; no separate regression is specified in the main text.

**Enforcement capacity (Table 9, p. 1689).** The paper regresses log(1 + rides) and log(1 + payments) on log personnel hours devoted to civil, criminal, or total court cases, including district and month-year fixed effects. There are 1,410 district-month observations, and standard errors are clustered by district. The estimating specification represented by Table 9 is:

$$
\log(1+Y_{dt}) = \theta \log(\text{CourtHours}_{dt}) + \alpha_d + \alpha_t + \epsilon_{dt}
$$

where each column uses civil, criminal, or total court hours and Y is payments or rides. The six coefficients are small and statistically insignificant (Table 9, p. 1689). The paper also reports no negative spillovers to neighboring districts and no emergency-ride response as identifying and falsification checks (text pp. 1676).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| USRDS (United States Renal Data System), 100% Medicare ESRD sample | Primary outcome data: 37.5 million nonemergency ambulance rides billed to Medicare for dialysis patients, 2003-2017; patient demographics, comorbidities, dialysis treatment histories, facility identifiers | [no page yet](/wiki/datasets/) |
| DOJ litigation data (hand-collected) | Novel dataset of 69 lawsuits (43 criminal, 26 civil) against ambulance companies for dialysis fraud, 2003-2017; court records from PACER, press releases from DOJ; includes filing dates, jurisdictions, defendant names | no page yet |
| Medicare 20% sample, all beneficiaries | Firm-level outcomes (active firm count, incapacitation effects); 2007-2019; supplements USRDS which began recording firm identifiers only in 2012 | no page yet |
| DOJ National Caseload Data | Enforcement capacity: log personnel hours of US Attorneys' Offices devoted to civil and criminal cases by district-year, 2001-2021; used for general deterrence test (Table 9) | no page yet |
| FOIA responses on financial recoveries | Actual financial recoveries from 27 ambulance fraud prosecutions; obtained via Freedom of Information Act requests to US Attorneys' Offices; average recovery $1.2 million (51% of penalties owed) | no page yet |

Sample scope: US, 2003-2017 (main), 2007-2019 (firm-level). Unit of observation: district-month (main), patient-month (health outcomes), firm-month (incapacitation). Monthly frequency. The dialysis industry context draws on Eliason et al. (2020), who document how acquisitions by large chains affect dialysis facility behavior.

## When to read the full paper

Read this paper if you are studying: (1) the empirical effectiveness of administrative regulation versus ex post litigation for deterring financial fraud, using a setting with clean staggered quasi-random variation in both; (2) Medicare fraud in the dialysis sector, including Table 1 (p. 1671) for patient summary statistics and Figure 1 (p. 1669) for the time series of rides; (3) the identification and robustness literature on staggered DiD, including comparisons with Callaway and Sant'Anna (2021) estimators (Appendix B); or (4) the economic theory of why limited liability and low detection probability undermine pay-and-chase enforcement (Section VI, pp. 1690-1696). The counterfactual savings calculation ($4.8 billion at $28.6 million/year administrative cost) is in Appendix K (p. 1698).

## Attribution and rights

This page is a LLM-distilled summary, not human-verified, and not a reproduction of the research.

> Eliason, P., League, R., Leder-Luis, J., McDevitt, R. C., and Roberts, J. W. (2025). "Ambulance Taxis: The Impact of Regulation and Litigation on Health-Care Fraud." *Journal of Political Economy* 133(5): 1661-1702. [https://doi.org/10.1086/734134](https://doi.org/10.1086/734134)

Paywalled (c) 2025 The University of Chicago. All rights reserved. Published by the University of Chicago Press. An NIH Public Access accepted manuscript is available at [https://pmc.ncbi.nlm.nih.gov/articles/PMC12331087/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12331087/). Replication data and code: Harvard Dataverse, [https://doi.org/10.7910/DVN/QAGBDM](https://doi.org/10.7910/DVN/QAGBDM). Extract-only: do not reproduce tables or figures without permission from the University of Chicago Press.
