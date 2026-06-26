---
title: "Ambulance Taxis: Eliason, League, Leder-Luis, McDevitt & Roberts (2025)"
description: >-
  Distilled: Prior authorization for Medicare ambulance rides to dialysis facilities
  reduced nonemergency rides by 68% and payments by 67.7%, far outperforming
  criminal and civil pay-and-chase litigation. Journal of Political Economy 2025
  (May 2025), paywalled. Eight core results with source locators, the
  stylized fraud-deterrence model, and the staggered difference-in-differences
  specifications.
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
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Healthcare Policy and Management", "Law, Economics, and Judicial Systems", "Medical Malpractice and Liability Issues"]
  dataAccess: proprietary-confidential
  outcome:
    - nonemergency ambulance rides to dialysis facilities (count and Medicare payments)
    - number of active ambulance companies in the market
    - patient health outcomes (mortality, hospitalization, dialysis sessions)
  outcomeClass: [social-welfare, firm-dynamics, labor-careers-health]
  license: "Paywalled (c) 2025 The University of Chicago. All rights reserved. Published by the University of Chicago Press. NIH-funded accepted manuscript available via NIH Public Access at PubMed Central (PMC12331087)."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press site, 2026-06-26); NIH Public Access accepted manuscript at https://pmc.ncbi.nlm.nih.gov/articles/PMC12331087/"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 7
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [moral-hazard]
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
    - { ref: R1, outcome: total Medicare payments for nonemergency ambulance rides, metric: coefficient, value: "-1.129 log points (SE 0.350)**", direction: negative, vsBenchmark: "criminal enforcement: -0.211 (10-15% the magnitude); civil enforcement: -0.042 (n.s.)" }
    - { ref: R2, outcome: number of nonemergency ambulance rides, metric: coefficient, value: "-0.913 log points (SE 0.176)***", direction: negative, vsBenchmark: "criminal enforcement: -0.280 (about 30% the magnitude); civil enforcement: +0.026 (n.s.)" }
    - { ref: R3, outcome: total Medicare payments (criminal enforcement), metric: coefficient, value: "-0.211 log points (SE 0.106)+", direction: negative }
    - { ref: R4, outcome: number of nonemergency ambulance rides (criminal enforcement), metric: coefficient, value: "-0.280 log points (SE 0.099)**", direction: negative }
    - { ref: R5, outcome: total Medicare payments (civil enforcement), metric: coefficient, value: "-0.042 log points (SE 0.110)", direction: none }
    - { ref: R6, outcome: number of nonemergency ambulance rides (civil enforcement), metric: coefficient, value: "0.026 log points (SE 0.066)", direction: none }
    - { ref: R7, outcome: number of active ambulance firms providing nonemergency dialysis rides, metric: coefficient, value: "-0.286 log points (SE 0.066)***", direction: negative }
    - { ref: R8, outcome: patient mortality and dialysis sessions after prior authorization, metric: coefficient, value: "mortality 0.000372 (SE 0.000580) n.s.; dialysis sessions -0.026 (SE 0.019) n.s.", direction: none }
  resultType: new-finding
  relatesTo:
    - { cite: "Shavell (1984)", doi: '10.1086/467745', relation: builds-on, note: "limited liability and harm vs regulation theory; our model extends to financial fraud by many small actors" }
    - { cite: "Polinsky and Shavell (2000)", doi: '10.1257/jel.38.1.45', relation: builds-on, note: "economic theory of public enforcement of law; we add the setting of financial fraud against government" }
    - { cite: "Glaeser and Shleifer (2003)", doi: '10.1162/003355302320935016', relation: builds-on, note: "rise of the regulatory state and conditions when administrative rules outperform litigation" }
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
  licenceVerification:
    - { source: "Crossref works/10.1086/734134", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "license field absent (null); title and authors confirmed; published [[2025,5,1]], volume 133, issue 5; no CC or open license in Crossref metadata. Artifact page 1 states (c) 2025 The University of Chicago. All rights reserved." }
---

**What this is.** This is a distilled skeleton of Eliason, League, Leder-Luis, McDevitt, and Roberts (2025). Read the [original paper](https://doi.org/10.1086/734134) or the [NIH Public Access version](https://pmc.ncbi.nlm.nih.gov/articles/PMC12331087/) to replicate or extend.

## TL;DR

Between 2003 and 2017, Medicare spent $7.7 billion on 37.5 million nonemergency ambulance rides transporting dialysis patients to and from treatment facilities, most of which did not satisfy Medicare's medical necessity criteria. Using the staggered rollout of a prior authorization requirement across US states and the differential timing of 69 criminal and civil DOJ lawsuits across 26 federal judicial districts, the paper identifies the causal effects of two anti-fraud approaches. Prior authorization, which requires ambulance companies to obtain physician sign-off before providing a ride and receiving payment, caused an immediate and persistent 68% drop in nonemergency rides. Criminal litigation reduced rides by roughly 24%, while civil litigation had no statistically significant effect. No evidence is found that prior authorization harmed patient health. The paper estimates the federal government would have saved $4.8 billion had it imposed prior authorization in 2003 at an administrative cost of only $28.6 million per year.

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

**Overall (paper's conclusion).** Prior authorization was far more effective than pay-and-chase litigation for reducing Medicare ambulance fraud because it prevents fraudulent payments from being made in the first place, bypassing the twin obstacles of limited defendant liability and low prosecution probability that make realized enforcement ineffective against a large population of small fraudulent firms.

## Theory / model

The paper develops a stylized model in Section VI (pp. 1690-1696) to frame why prior authorization dominated litigation. A firm commits fraud if the gain exceeds expected penalties:

$$G(\text{Reg}) > P_{\text{Crim}} F_{\text{Crim}} + P_{\text{Civ}} F_{\text{Civ}} \tag{5}$$

where $$G(\text{Reg}) = R(\text{Reg}) - C(\text{Reg})$$ is the net gain from fraud (fraudulent Medicare revenue minus operating costs) under regulatory regime Reg, $$P_{\text{Crim}}$$ and $$P_{\text{Civ}}$$ are the perceived probabilities of facing criminal or civil enforcement, and the penalties (p. 1690) are:

$$F_{\text{Civ}} = \min(3R(\text{Reg}),\, \text{Assets}) \quad \text{and} \quad F_{\text{Crim}} = \min(3R(\text{Reg}),\, \text{Assets}) + J$$

reflecting the False Claims Act's treble-damages rule bounded by the firm's assets, plus a jail-disutility term $$J$$ available only under criminal enforcement. Prior authorization sets $$\text{Reg} = 1$$, sharply reducing $$R(1)$$ through claim denials (denial rate jumped from 5.7% to 22.7% in January 2015, Table 10) while modestly raising $$C(1)$$ through paperwork. Litigation operates through $$P_{\text{Crim}}$$ and $$P_{\text{Civ}}$$, but the model identifies two constraints that keep these low in practice. This framework builds on Becker (1968), who established that optimal enforcement balances penalties and detection probability, and extends it to the setting of financial fraud by many small actors against the government.

**Limited liability** (Section VI.A, p. 1691): Shavell (1984) and Polinsky and Shavell (2000) showed that litigation may fail to curtail illicit behavior when severe penalties cannot be enforced. Here, firms can draw down assets before prosecution, so the effectively enforceable penalty $$\min(3R, \text{Assets})$$ is far smaller than the statutory treble damages. Of 27 observed criminal prosecution cases, the government recovered on average less than $1.2 million, or 51% of penalties owed (p. 1691).

**Low probability of detection** (Section VI.B, p. 1692): From 2007 to 2014, only 28 firms faced criminal suits and 44 civil suits while roughly 1,150 firms may have provided fraudulent rides, implying only a 2.4% detection probability for criminal enforcement and 3.8% for civil enforcement. The model implies the expected monetary cost of fraud detection was approximately $72,000 (p. 1694), making fraud profitable for any firm with revenue margins above 1.4%.

Callaway and Sant'Anna (2021) and Behrer et al. (2021) provide the econometric and theoretical benchmarks the paper tests against. The paper also connects to Glaeser and Shleifer (2003), who find that administrative rules optimally complement litigation when courts can be subverted or when specialized enforcement has informational advantages over generalist prosecutors.

## Method

The identification strategy (Section IV, pp. 1673-1675) exploits two sources of staggered quasi-random variation:

1. **Prior authorization rollout**: Medicare implemented prior authorization in December 2014 in New Jersey, South Carolina, and Pennsylvania, then expanded in January 2016 to Delaware, DC, Maryland, North Carolina, Virginia, and West Virginia. This staggered rollout creates treatment and control districts within a DiD framework.

2. **Litigation timing**: The DOJ filed 43 criminal and 26 civil lawsuits against ambulance companies across 26 federal judicial districts at different dates. The paper compares districts in the 48-month window around each action, using not-yet-treated districts as controls.

The primary approach uses TWFE. For district-month outcomes (equations 1 and 2, p. 1673), the event-study specification is:

$$Y_{dt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \sum_{e=0}^{L} \beta_e T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{dt} + \epsilon_{dt} \tag{1}$$

and the scalar post-treatment estimator is:

$$Y_{dt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \beta \sum_{e=0}^{L} T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{dt} + \epsilon_{dt} \tag{2}$$

where $$T_{dt}(e)$$ is an indicator for district $$d$$ being $$e$$ months from its treatment date, $$\alpha_d$$ and $$\alpha_t$$ are district and year-month fixed effects, and $$X_{dt}$$ is a matrix of indicators for prior exposure to a different enforcement type. The estimator sets $$K = 24$$ and $$L = 23$$ (a 48-month symmetric window) to avoid compositional issues flagged by Callaway and Sant'Anna (2021). For untreated districts, $$T_{dt}(e) = 0$$ for all $$e$$. The $$\beta$$ in equation (2) captures the average treatment effect over the first $$L$$ months post-treatment relative to the period immediately before treatment ($$e = -1$$), rather than the entire pre-period.

For patient-month outcomes (equations 3 and 4, p. 1673-1674), individual characteristics $$X_{idt}$$ replace district-level controls, facility fixed effects are added, $$K = 12$$ and $$L = 11$$:

$$Y_{idt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \sum_{e=0}^{L} \beta_e T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{idt} + \epsilon_{idt} \tag{3}$$

$$Y_{idt} = \sum_{e=-K}^{-2} \beta_e T_{dt}(e) + \beta \sum_{e=0}^{L} T_{dt}(e) + \alpha_d + \alpha_t + \Gamma X_{idt} + \epsilon_{idt} \tag{4}$$

Robustness checks in Appendix B use the Borusyak, Jaravel, and Spiess (2017); Cengiz et al. (2019); and Callaway and Sant'Anna (2021) estimators that address staggered-treatment compositional issues, finding similar results. Standard errors are clustered at the district level throughout.

## Empirical specifications

**R1, R2: Prior authorization on payments and rides (Table 2, p. 1676)**

Outcome: log(1 + total payments) or log(1 + total rides) at the district-month level. Treatment: a binary indicator for districts in states subject to prior authorization in the given month. Estimating equation (2) above with $$K = 24, L = 23$$. District and year-month fixed effects; standard errors clustered at the district level. 7,272 district-month observations (2011-2017). Dependent variable means: payments log 9.934 (levels $415,286), rides log 5.357 (levels 2,005 rides/district-month).

The -1.129 log point coefficient (Table 2, col. 1) implies a reduction of 67.7% in payments. The dynamic event-study coefficient path (Figure 3, p. 1677) shows no pre-trends in the 24 months before adoption and an immediate, persistent drop after adoption, with the effect growing to approximately -1.5 log points by month 24.

**R3, R4: Criminal enforcement on payments and rides (Table 3, p. 1678)**

Same specification as R1/R2 but the treatment date is the earliest criminal action filed in the district. Sample: 14,436 district-months (2003-2017). Criminal enforcement reduces ride payments by 0.211 log points (p < 0.10) and ride count by 0.280 log points (p < 0.01). The dynamic event study (Figure 4B, p. 1678) shows gradual rather than immediate effects, consistent with deterrence operating through learning about enforcement.

**R5, R6: Civil enforcement on payments and rides (Table 3, p. 1678)**

Same specification with the earliest civil action as the treatment date. 14,160 district-month observations. Civil enforcement has no statistically significant effect on payments (-0.042, SE = 0.110) or rides (+0.026, SE = 0.066). The dynamic event study (Figure 4A, p. 1678) shows no post-treatment decline.

**R7: Prior authorization on active firms (Table 6, p. 1681)**

Outcome: log(1 + number of firms providing nonemergency dialysis rides) at the district-month level. Estimating equation (2) with year-month and district fixed effects. Sample: 6,336 district-months (2012-2017 for firm identifiers). Prior authorization reduced the number of active ambulance firms by 0.286 log points (24.9%). Firms with a higher pre-period nonemergency dialysis share were most likely to exit; firms providing only nonemergency rides increased in number (93 to 120), indicating market specialization.

**R8: Patient health outcomes (Table 4, p. 1680)**

Outcome: dialysis sessions per month, mortality indicator, all-cause hospitalization indicator, fluid hospitalization indicator. Estimated at the patient-month level with equation (4), $$K = 12, L = 11$$. Controls include patient characteristics (age, sex, race, comorbidities), tenure on dialysis, facility fixed effects and facility characteristics. Sample: 15,077,158 patient-months (2011-2017). All four health outcome coefficients on prior authorization are small and statistically insignificant, ruling out a 0.6% decrease in monthly dialysis sessions at the 95% confidence level. Results hold for frequent riders (Table 5, p. 1680, restricted to patients with at least 100 prior rides).

**General deterrence test (Table 9, p. 1689)**

To test whether enforcement capacity alone (without realized actions) deters fraud via general deterrence, the paper regresses rides and payments on log personnel hours devoted to civil and criminal court cases in each district-year using DOJ National Caseload Data. No statistically significant elasticities are found, ruling out an elasticity of payments with respect to civil enforcement capacity of -0.20 and with respect to criminal capacity of -0.32 at the 95% level.

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
