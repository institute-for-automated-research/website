---
title: "Republican Support and Economic Hardship: Arteaga & Barone (2026)"
description: >-
  Distilled: Using quasi-exogenous variation in Purdue Pharma's OxyContin cancer-market targeting,
  this paper links opioid epidemic exposure to higher Republican vote shares, economic hardship,
  and conservative media framing. QJE 2026, paywalled. Thirty-one core results with source
  locators, datasets used, equations, and identification strategy.
sidebar:
  label: Arteaga-Barone 2026
  order: 1
tags: [paper-summary, political-economy, health-economics, opioids, elections, partisan-realignment,
       natural-experiment, panel-regression, event-study, peer-reviewed, unreplicated,
       data:arcos, data:nvss, data:ssa-disability, data:snap, data:us-elections, data:cces]
paper:
  authors: Carolina Arteaga, Victoria Barone
  authorList:
    - { family: Arteaga, given: Carolina, affiliation: "University of Toronto and National Bureau of Economic Research" }
    - { family: Barone, given: Victoria, affiliation: University of Notre Dame }
  year: 2026
  venue: "The Quarterly Journal of Economics 141(1), 2026, 499-558"
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf051
  jel:
    codes: [I12, P00]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  dataAccess: proprietary-confidential
  outcome:
    - Republican two-party vote share in House, presidential, and gubernatorial elections
    - drug-induced mortality rate
    - SSDI and SSI application and receipt rates
    - SNAP receipt rate
    - policy preferences for law enforcement and drug legalization
    - Fox News viewership
    - prescription opioid supply
    - Republican campaign donation gap
    - opioid news coverage and framing
  outcomeClass: [electoral-outcomes, social-welfare, labor-careers-health]
  license: >-
    Copyright The Author(s) 2025. Published by Oxford University Press on behalf of
    President and Fellows of Harvard College. All rights reserved; commercial re-use
    requires RightsLink permission (reprints@oup.com).
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (OUP site, 2026-06-28)"
  redistribution: extract-only
  resultsCount: 31
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [economic-hardship-partisan-sorting, media-framing, law-and-order-policy-alignment]
  introducesData: true
  scope:
    region: US
    period: "1976-2022 (main CZ panel 1982-2022; newspaper data 1995-2020)"
    frequency: mixed
    dataType: [administrative, survey, text]
    granularity: [aggregate, individual]
    n: "621 commuting zones (CZs); 438 CZs for SSDI/SSI applications; 267,926 CCES respondents in the full House-vote sample"
  findings:
    - { ref: R1, outcome: drug-induced mortality rate, metric: coefficient, value: "46% above pre-epidemic average by 2017 (per 1 SD higher 1996 cancer mortality)", direction: positive }
    - { ref: R2, outcome: prescription opioid death rate, metric: coefficient, value: "61% increase relative to pre-epidemic average by 2012 (per 1 SD)", direction: positive }
    - { ref: R3, outcome: SSDI application rate, metric: coefficient, value: "12% rise in SSDI applications by 2012 (per 1 SD)", direction: positive }
    - { ref: R4, outcome: SSI application rate, metric: coefficient, value: "7.6% rise in SSI applications by 2012 (per 1 SD)", direction: positive }
    - { ref: R5, outcome: SNAP receipt rate, metric: coefficient, value: "8% increase in SNAP recipients by 2020, equivalent to 0.14 SD (per 1 SD)", direction: positive }
    - { ref: R6, outcome: "Republican two-party House vote share", metric: pp-effect, value: "4.5 pp increase by 2022 midterms (per 1 SD)", direction: positive }
    - { ref: R7, outcome: "Republican two-party presidential vote share", metric: pp-effect, value: "4.6 pp increase by 2020 (per 1 SD)", direction: positive }
    - { ref: R8, outcome: "Republican two-party gubernatorial vote share", metric: pp-effect, value: "4.3 pp increase after six elections post-1996 (per 1 SD)", direction: positive }
    - { ref: R9, outcome: support for law enforcement and drug policy, metric: coefficient, value: "0.0393*** (police officers), 0.125*** (safety around police), -0.0179** (marijuana legalization)", direction: mixed }
    - { ref: R10, outcome: Fox News viewership, metric: coefficient, value: "0.0475*** increase in Fox News viewership share (CCES 2020)", direction: positive }
    - { ref: R11, outcome: prescription opioid supply, metric: coefficient, value: "Exposure-proxy validation in Table I: 1994 MS Contin rate coefficient 0.717*** (0.134) conditional on 1996 cancer mortality; cancer mortality coefficient 2.065* (1.161); population-weighted correlation between MS Contin and OxyContin rates 0.70", direction: positive }
    - { ref: R12, outcome: prescription opioid supply, metric: coefficient, value: "0.97 additional opioid doses per capita in 2012, 65% above the baseline mean, per 1 SD higher 1996 cancer mortality", direction: positive }
    - { ref: R13, outcome: drug-induced mortality rate, metric: probability, value: "55% higher by 2020 in high-cancer-mortality CZs than low-cancer-mortality CZs", direction: positive }
    - { ref: R14, outcome: drug-induced mortality rate, metric: p-value, value: "Joint pre-1996 coefficients test p = 0.3462", direction: none }
    - { ref: R16, outcome: Republican two-party House vote share, metric: p-value, value: "Joint pre-1996 coefficients test p = 0.7510", direction: none }
    - { ref: R18, outcome: Republican two-party House vote share, metric: pp-effect, value: "At most 0.22 percentage points of the observed 2020 vote share change", direction: none, vsBenchmark: "Counterfactual assigns opioid-death-missing votes to Democrats" }
    - { ref: R19, outcome: Republican two-party House vote share, metric: coefficient, value: "Table IV coefficients 0.0477*** to 0.0721*** (standard errors 0.0131 to 0.0165) across demographic splits", direction: positive }
    - { ref: R23, outcome: Republican campaign donation gap, metric: sd-effect, value: "0.44 SD increase in the Republican-minus-Democratic donation gap in 2016 per 1 SD higher cancer mortality", direction: positive }
    - { ref: R25, outcome: Republican two-party House vote share, metric: correlation, value: "Correlation with state-level SNAP effects in 2006: 0.198 (2008), 0.309 (2010), 0.392 (2012), 0.394 (2014), 0.450 (2016), 0.397 (2018), 0.433 (2020), 0.492 (2022)", direction: positive }
    - { ref: R26, outcome: opioid news coverage and framing, metric: probability, value: "Republican-leaning newspapers had 23% higher frequency of economic-hardship keywords, 19% higher frequency of illegal-activity keywords, and 22% higher frequency of rehabilitation/treatment keywords than Democratic-leaning newspapers", direction: positive }
    - { ref: R27, outcome: opioid news coverage and framing, metric: level, value: "Fox News coverage rate was 1.5 times CNN's and 1.7 times MSNBC's; crime, trafficking, and cartel stories appeared at double the frequency", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Autor, Dorn, Hanson, and Majlesi (2020)", doi: "10.1257/aer.20170011", relation: extends, note: "extends the trade-shock exposure design for local political change to quasi-exogenous geographic variation in opioid-marketing exposure" }
    - { cite: "Alpert, Evans, Lieber, and Powell (2022)", doi: "10.1093/qje/qjab043", relation: builds-on, note: "uses their triplicate-state identification of opioid supply shocks as a benchmark; extends to welfare and political outcomes" }
    - { cite: "Voigtländer and Voth (2012)", doi: "10.1093/qje/qjs019", relation: extends, note: "extends the epidemics-and-right-wing-politics framework from historical Europe to the contemporary US" }
    - { cite: "Evans, Lieber, and Power (2019)", doi: "10.1162/rest_a_00755", relation: builds-on, note: "uses their OxyContin reformulation evidence to document the prescription-to-illicit-opioid transition" }
    - { cite: "Goodwin et al. (2018)", doi: '10.1001/jamanetworkopen.2018.0450', relation: extends, note: "extends their observational association between chronic opioid use and GOP voting to a causal quasi-experimental design" }
  openQuestions:
    - "Why conservative media engaged far more extensively with the opioid epidemic than liberal-leaning outlets, and what consequences this asymmetry has for public perception and political behavior (p. 550)."
    - "How different types of health shocks, from chronic conditions to infectious disease outbreaks, affect community economic conditions and translate into long-term political shifts (p. 550)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/R5PKQL", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Read full PDF (60 pages, pp. 499-558); all locators confirmed against PDF tables and figures; not human-verified; not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; four fixes applied: Table I column reference corrected from (1)&(3) to (2)&(3); Table IV coefficient range corrected from 0.0588-0.0722 to 0.0477-0.0721; Alpert et al. fourth author corrected from Pacula to Powell; Autor et al. author list corrected to include Dorn." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added omitted main-text results, explicit joint-test metrics, and equation/specification coverage; additions are not human-verified and not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 31 Core rows, equations, specifications, classifications, and prose against the PDF; corrected locators, the 2020 SNAP horizon, exposure-measure wording, and metadata; no unresolved discrepancies. Review pass (2026-10-04): corrected Eq. (2) to the first-difference form printed on p. 535." }
  licenceVerification:
    - { source: "Crossref works/10.1093/qje/qjaf051", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license URL https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model (content-version vor, delay-in-days 0, start 2025-11-04); OUP CHORUS standard publication model, not Creative Commons; paywalled" }
---

**What this is.** A distilled skeleton of Arteaga and Barone (2026). Read the
[original paper](https://doi.org/10.1093/qje/qjaf051) to replicate or extend; this
page records headline results with source locators, the estimating equations, and
the data used, extracted by an LLM and checked against the PDF.

## TL;DR

Arteaga and Barone use unsealed Purdue Pharma litigation records to show that the
pharmaceutical company targeted OxyContin marketing at communities with high cancer
mortality in 1996, creating quasi-exogenous geographic variation in opioid exposure.
This exposure caused persistent increases in drug-induced mortality, disability, and
food-stamp receipt. By 2022, a one standard deviation higher 1996 cancer mortality
rate raised the Republican two-party House vote share by 4.5 percentage points. The
political shift was not anti-incumbent, was not confined to any demographic group,
and was concentrated in communities where economic hardship was greatest. Conservative
media covered the epidemic more extensively and framed it around crime and economic
distress, themes aligned with the Republican Party's messaging to white working-class
America.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Drug-induced mortality: 1 SD higher 1996 cancer mortality rate causes persistent rise in drug deaths | Fig. III, p. 522; text p. 523 | 46% above pre-epidemic average by 2017 |
| R2 | Prescription opioid deaths: 1 SD increase causes 61% rise by 2012 | Online Appendix Fig. A3; text p. 523 | 61% higher than pre-epidemic average at 2012 peak |
| R3 | SSDI applications: 1 SD increase causes 12% rise by 2012 | Fig. IV, p. 525; text p. 524 | +12% SSDI applications by 2012 |
| R4 | SSI applications: 1 SD increase causes 7.6% rise by 2012 | Fig. IV, p. 525; text p. 524 | +7.6% SSI applications by 2012 |
| R5 | SNAP receipt: 1 SD increase predicts 8% more recipients by 2020 | Fig. IV, p. 525; text p. 524 | +8% SNAP recipients (0.14 SD) by 2020 |
| R6 | Republican House vote share: 1 SD increase raises GOP share 4.5 pp in 2022 | Fig. V, p. 527; text p. 526 | +4.5 pp GOP two-party vote share in 2022 midterms |
| R7 | Republican presidential vote share: 1 SD increase raises GOP share 4.6 pp by 2020 | Fig. VII, p. 531; text p. 530 | +4.6 pp GOP presidential vote share by 2020 |
| R8 | Republican gubernatorial vote share: 1 SD increase raises GOP share 4.3 pp after six elections | Fig. VIII, p. 532 | +4.3 pp GOP gubernatorial vote share |
| R9 | Policy preferences: exposure predicts support for law enforcement and opposition to marijuana legalization | Table V, p. 538 | +0.0393\*\*\* (more police), +0.125\*\*\* (safety around police), -0.0179\*\* (marijuana legalization) |
| R10 | Media: exposure predicts higher Fox News viewership | Table V col. 4, p. 538 | +0.0475\*\*\* Fox News viewership share (CCES 2020) |
| R11 | Exposure-proxy validation: baseline cancer mortality predicts early opioid-market exposure conditional on MS Contin use | Table I, cols. (2)-(4), p. 512 | MS Contin 1994 coefficient 0.717\*\*\* (0.134); cancer mortality coefficient 2.065\* (1.161) conditional on MS Contin; population-weighted MS Contin/OxyContin correlation 0.70 |
| R12 | Prescription opioid supply: cancer-market exposure predicts greater opioid dispensing | Fig. II, Panel B, p. 514; text p. 523 | By 2012, +0.97 opioid doses per capita, 65% above baseline mean, per 1 SD higher 1996 cancer mortality |
| R13 | Descriptive mortality split: drug-induced deaths diverge between high- and low-cancer CZs | text p. 523 | Drug-induced mortality in high-cancer CZs was 55% higher by 2020 |
| R14 | Mortality identification check: no differential pre-trend before OxyContin | Fig. III caption, p. 522 | Joint test of pre-1996 coefficients: p = 0.3462 |
| R15 | Disability application effects are concentrated among people under age 55 | Fig. IV, Panel C, p. 525; text p. 524 | The under-55 group shows the increase; the 55+ group does not show a comparable pattern |
| R16 | House-vote identification check: no differential pre-trend before OxyContin | Fig. V caption, p. 527 | Joint test of pre-1996 coefficients: p = 0.7510 |
| R17 | Turnout does not account for the Republican vote-share shift | Online Appendix Fig. A6, cited text p. 527 | No meaningful change in voter turnout over time or across exposure levels |
| R18 | Direct deaths cannot mechanically explain the House vote-share estimate | text p. 527 | Missing votes attributable to opioid deaths change the observed 2020 Republican share by at most 0.22 percentage points under the counterfactual |
| R19 | House-vote effect is similar across demographic groups | Table IV, p. 528 | Cancer 1996 coefficients range from 0.0477\*\*\* to 0.0721\*\*\* (SE 0.0131-0.0165) across race, age, gender, and education groups |
| R20 | Exposure raises the probability of a Republican House seat win on a sustained basis from 2012 | Fig. VI, Panel A, p. 529; text p. 528 | The probability of a Republican win begins a sustained increase from 2012 |
| R21 | House vote-share gains are largest first in CZs with low initial Republican support | Fig. VI, Panel B, p. 529; text p. 529 | Vote share rises first in the lowest 1996 Republican-support tercile; the middle tercile begins rising from 2010 |
| R22 | Elected House members become more conservative, mainly through composition changes | Online Appendix Fig. A7, cited text p. 529 | Roll-call ideology shifts in a conservative direction, especially in initially Democratic-leaning districts; no rise in election of ideological extremes |
| R23 | Campaign giving shifts toward Republicans through fewer Democratic donations | Online Appendix Fig. A8, cited text p. 530 | In 2016, the Republican-minus-Democratic donations-per-capita gap rises by 0.44 SD per 1 SD higher cancer mortality; no effect on Republican donations |
| R24 | House vote-share effects are not explained by incumbent party or reelection changes | Online Appendix Fig. A9, cited text p. 533 | Republican vote-share changes are not statistically different by incumbent party; incumbent reelection ability shows no change for most of the period and a slight increase after 2016 |
| R25 | State-level economic hardship effects predict later Republican gains | Fig. IX, p. 536 | Correlation of state-level SNAP effects in 2006 with House vote-share effects rises from 0.198 in 2008 to 0.492 in 2022 (intermediate values: 0.309, 0.392, 0.394, 0.450, 0.397, 0.433) |
| R26 | Republican-leaning local newspapers frame opioids more around hardship, illegal activity, and treatment | Online Appendix Table A4, reported text p. 540 | Keyword frequencies are respectively 23%, 19%, and 22% higher than in Democratic-leaning newspapers |
| R27 | Fox News gives opioids more coverage and more crime-centered framing | text pp. 540-541 | Coverage is 1.5 times CNN's and 1.7 times MSNBC's; crime, trafficking, and cartel stories are covered at double the frequency |
| R28 | Pre-OxyContin 1976 cancer mortality does not predict later health, economic, or political outcomes | Fig. X, p. 542 | No relationship for drug-induced mortality, SNAP, House vote share, unemployment, or sector employment before 1996 |
| R29 | Placebo mortality measures do not predict the main outcomes | Fig. XI, p. 543 | Hypertension and pneumonia mortality among adults over 65 show no relationship with drug mortality, SNAP receipt, or Republican House vote share |
| R30 | The opioid exposure measure does not predict unemployment | text p. 524 n. 24 | No significant unemployment response |
| R31 | Main estimates remain stable across expanded controls and treatment definitions | Figs. XII-XIII, pp. 544, 547; text pp. 545-549 | Estimates remain similar with added health, economic, and political controls, continuous-exposure heterogeneity checks, a top-quartile indicator, and economic-shock controls |

**Overall (paper's conclusion).** The opioid epidemic causally reshaped the
political landscape of affected communities, generating sustained gains for
Republicans in House, presidential, and gubernatorial elections from 2006 onward.
The evidence links these gains to economic hardship (higher disability and SNAP
enrollment), and the authors argue that conservative media coverage reinforced the
shift by framing the epidemic around crime and economic distress, themes aligned
with Republican messaging on working-class economic decline.

## Theory / model

The paper has no formal structural model. It tests a set of empirical hypotheses
derived from the political economy of economic distress and partisan realignment.

The core identification assumption is that in the absence of OxyContin marketing,
commuting zones with higher 1996 cancer mortality would have followed the same
trends in health, economic, and political outcomes as zones with lower cancer
mortality (parallel trends). The validity of this assumption is supported by
pre-trend tests, out-of-sample placebo exercises, and controls for alternative
economic and political shocks (NAFTA exposure, China import shock, recessions,
robot adoption, Fox News rollout, Southern partisan realignment).

The paper rules out three alternative explanations:

1. **Anti-incumbent voting**: the GOP vote share increase does not depend on the
   party of the incumbent at the time of each election (Online Appendix Figure A9,
   p. 533).
2. **Voter turnout**: no meaningful changes in turnout rates are estimated across
   the distribution of opioid exposure (Online Appendix Figure A6, p. 527).
3. **Direct mortality effect**: a counterfactual calculation shows that missing
   votes attributable to opioid-related deaths shift the observed vote share by at
   most 0.22 pp relative to 2020 (p. 527), far smaller than the 4.5 pp House effect.

The mechanisms the paper tests are:
- Economic hardship (SNAP, disability) predicts subsequent Republican gains with a
  lag: state-level SNAP effects in 2006 are the strongest predictor of GOP vote
  share shifts in 2022 (Figure IX, p. 536).
- Conservative media engaged more extensively with the epidemic and framed it
  around crime and economic hardship, themes favoring the Republican Party's
  platform (Online Appendix Figure A10, Table V, pp. 538-541).
- Residents preferred Republican law enforcement policy solutions (more police,
  opposition to harm-reduction policies) over Democratic harm-reduction approaches
  (Table V, p. 538).

The paper is related to three strands of literature. First, the causal
identification design extends Autor, Dorn, Hanson, and Majlesi (2020), who use the China
trade shock as an instrument for local economic distress and document downstream
political polarization. Second, the finding that acute epidemics can shift politics
rightward complements Voigtländer and Voth (2012), who document that the Black Death
increased anti-Semitic persecution in medieval Germany. Third, the paper extends
Goodwin et al. (2018), who document an observational association between chronic
opioid use and presidential voting patterns in US counties, to a causal
quasi-experimental framework. Evans, Lieber, and Power (2019) provide the evidence
that OxyContin's 2010 abuse-deterrent reformulation pushed users toward heroin,
used here to contextualize the epidemic's transition from prescription to illicit
drugs.

## Method

The main estimating equation is an event-study specification on a panel of
commuting zones (CZs), interacting a pre-determined exposure proxy with year
indicators (p. 515):

$$y_{ct} = \sum_{\tau=1982}^{2022} \phi_\tau \, \text{CancerMR}_{c,1996} \cdot \mathbf{1}(\text{Year} = \tau) + \alpha X_{ct} + \gamma_c + \gamma_{st} + \upsilon_{ct} \tag{1}$$

where $$c$$ indexes the CZ, $$s$$ the state, and $$t$$ the year.
$$\text{CancerMR}_{c,1996}$$ is the 1996 cancer mortality rate per 1,000 in CZ
$$c$$. The regression uses the rate itself; the paper reports effects for a
one-standard-deviation increase (0.58 rate units in the House-vote analysis).
The sum runs from 1982 (or the earliest available year for each outcome) to 2022.
Coefficients $$\phi_{1982}$$ to $$\phi_{1995}$$ are pre-trend estimates that test
for differential trends before OxyContin's 1996 launch; $$\phi_{1997}$$ to
$$\phi_{2022}$$ trace the cumulative effect of opioid exposure over time. The
interaction for 1996 is omitted, so all coefficients are relative to that base year.

$$\gamma_c$$ are CZ fixed effects capturing time-invariant unobserved heterogeneity.
$$\gamma_{st}$$ are state-year fixed effects controlling for state-level policy
changes (prescription drug monitoring programs, pill-mill regulations, naloxone
access laws). $$X_{ct}$$ are time-varying controls at the CZ level: contemporaneous
cancer mortality, white and female population shares, and age shares (18-29, 30-49,
50-64, 65+, under 1). Standard errors are clustered at the CZ level. The main
panel contains 621 CZs with more than 20,000 residents, and runs from 1982 to 2022
subject to outcome-specific data availability; the ARCOS opioid-supply sample is
1997-2020.

The exposure measure is 1996 commuting-zone cancer mortality, which
proxies the cancer pain market that Purdue targeted for OxyContin at launch. The
validity rests on Purdue's documented strategy: internal records state "OxyContin
will be marketed at the cancer pain market" (Purdue Pharma 1994, cited p. 509) and
cancer-market penetration was used as a springboard into the far larger noncancer
pain market. Columns (2) and (3) of Table I (p. 512) confirm that 1994 MS Contin
prescription rates (the pre-OxyContin cancer opioid) and 1996 cancer mortality both
strongly predict 1996-1998 OxyContin prescription rates.

To identify geographic concentration of political effects and test whether
communities with the largest economic effects saw the largest political shifts, the
paper also estimates a state-level in-differences model (p. 535):

$$\Delta y_{ct} = \sum_{s=1}^{50} \sum_{\tau=1982}^{2022} \phi_\tau^s \, \text{CancerMR}_{c,1996} \mathbf{1}(\text{Year} = \tau \text{ and State} = s) + \alpha \Delta X_{ct} + \gamma_t + \upsilon_{ct} \tag{2}$$

The state-by-year interactions $$\phi_\tau^s$$ capture state-specific exposure
effects at each point in time. The specification expresses outcomes and covariates
in changes, equivalent to a level specification with CZ fixed effects, and includes
year fixed effects. It uses 621 CZs over the relevant outcome years and the
time-varying controls in equation (1). The paper does not state a separate
standard-error clustering rule for the state-level correlation exercise.

## Empirical specifications

**Exposure proxy validation (Table I, p. 512).** State-level regressions use 49 states and Medicaid State Drug Utilization Data (SDUD). The specifications regress 1994 MS Contin rates on 1996 cancer mortality, then 1996-1998 OxyContin rates on 1994 MS Contin rates, cancer mortality, or both:

$$\text{MSContin}_{s,1994} = a + b\,\text{CancerMR}_{s,1996} + e_s$$

$$\text{OxyContin}_{s,1996-1998} = a + b_1\,\text{MSContin}_{s,1994} + b_2\,\text{CancerMR}_{s,1996} + e_s$$

Table I reports the four columns and parenthetical standard errors; the table does not state fixed effects or a clustering level. In column (4), the MS Contin coefficient is 0.717 (0.134) and the cancer-mortality coefficient is 2.065 (1.161). The population-weighted correlation between 1994 MS Contin and 1996-1998 OxyContin rates is 0.70.

**Baseline determinants (Table II, p. 517).** The cross-sectional regressions relate the three dependent variables (prescription opioid doses, cancer mortality, and Republican House vote) to demographic, health, and economic characteristics listed in Table II. The sample is the CZ-level cross section described in Section IV; standard errors are heteroskedasticity-robust, with no fixed effects. The table reports coefficients and dependent-variable means but no observation-count row.

$$y_c = a + X_c'\beta + e_c$$

**Opioid-supply exposure check (Figure II, p. 514).** The estimating equation is
equation (1) above, with $$y_{ct}$$ replaced by DEA ARCOS prescription opioid doses
per capita (1997-2020). The peak coefficient is in 2012, when a one standard
deviation higher cancer mortality corresponded to 0.97 additional opioid doses
prescribed per capita (65% above the baseline mean), consistent with the magnitude
of Alpert, Evans, Lieber, and Powell (2022).

**Mortality (Figure III, p. 522-523).** Equation (1) with $$y_{ct}$$ = drug-induced
mortality per 1,000. Drug-induced mortality is the broadest measure, covering
poisoning and medical conditions caused by legal or illegal drugs (ICD-9/10 codes
linked per CDC 2013 guidance). The coefficient rises steadily from 1996 onward,
peaks around 2015-2017, then begins to decline as fentanyl-related deaths shift the
geographic distribution. Pre-trend test: $$p$$-value for joint test of
$$\phi_{1982}, \ldots, \phi_{1995} = 0$$ is 0.3462 (Figure III caption, p. 522).
Deaths are concentrated among individuals under 55 (Online Appendix Figure A4).

**Economic outcomes (Figure IV, p. 524-525).** Same specification with outcomes:
(i) share of working-age population (18-65) applying for SSDI, (ii) share of
population applying for SSI (blindness/disability), and (iii) share of population
receiving SNAP benefits. SSDI and SSI data available for 1990-2015 (438 CZs);
SNAP data from USDA Food and Nutrition Service, January counts, 1989-2022.
Unemployment does not respond significantly (Online Appendix Section C.3, p. 524n).

**Political outcomes: House elections (Figure V, Table IV, pp. 526-528).**
Equation (1) with $$y_{ct}$$ = two-party Republican vote share in House elections.
Outcome is the ratio of Republican votes to total Republican plus Democratic votes.
CZs cover 616 House election observations. Pre-trend: $$p$$-value for joint zero
of $$\phi_{1982}, \ldots, \phi_{1994}$$ is 0.7510 (Figure V caption). Cross-demographic
stability: Table IV shows coefficients of 0.0477-0.0721 (standard errors 0.0131-0.0165)
across race (white vs. non-white), age (under vs. over 50), gender, and education
groups, all statistically indistinguishable. The effect on Republican seat wins appears
from 2012 onward (Figure VI, Panel A, p. 529).

**CCES House vote choice (Table IV, p. 528).** For individual respondents in CZs, states, and election years, the repeated cross-section is:

$$y_{ict} = \beta\,\text{CancerMR}_{c,1996} + X_{it}'\alpha + \gamma_{st} + \varepsilon_{ict}$$

The CCES sample covers 2006-2020; controls are respondent sex, race, and education, regressions use survey weights, state-year fixed effects, and standard errors clustered by CZ. Table IV reports 267,926 observations in the full sample and 105,467-162,459 across its demographic splits.

**Policy preferences and media choice (Table V, p. 538).** Columns (1), (2), and (4) use individual-level CCES 2020 data with state fixed effects; column (3) uses CZs in states with marijuana ballot initiatives from 2012-2023 and state-year fixed effects:

$$y_{ic} = \alpha_1 + \beta\,\text{CancerMR}_{c,1996} + X_i'\alpha + \gamma_s + \varepsilon_{ic}$$

$$y_{ct} = \alpha_1 + \beta\,\text{CancerMR}_{c,1996} + X_{ct}'\alpha + \gamma_{st} + \varepsilon_{ct}$$

The reported samples are 60,054, 59,989, 198, and 25,417 observations by columns (1)-(4); standard errors are clustered by CZ. The table reports individual-level controls in columns (1), (2), and (4), and state-year effects for marijuana ballot results in column (3).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| DEA ARCOS (Automation of Reports and Consolidated Orders System), 1997-2020 | CZ-level opioid prescription doses per capita (opioid-supply outcome); digitized from DEA records | no page yet |
| CDC/NCHS National Vital Statistics System (NVSS) Detailed Multiple Cause of Death files, 1976-2022; restricted-use county identifiers | Drug-induced, prescription opioid, and all-opioid mortality rates; cancer mortality exposure measure | no page yet |
| SSA SSDI and SSI application and receipt data, 1990-2015 (applications), 1998-2020 (receipts); 438 CZs | SSDI and SSI application and receipt rates (economic hardship measures) | no page yet |
| USDA Food and Nutrition Service SNAP county-level participation, January 1989-2022 | SNAP receipt rate (economic hardship measure) | no page yet |
| Dave Leip's Atlas of U.S. Elections + ICPSR U.S. Historical Election Returns, 1976-2022 | Two-party Republican vote shares for House, presidential, and gubernatorial elections; voter turnout | no page yet |
| Cooperative Congressional Election Study (CCES), 2006-2020 | Individual-level survey data: vote choice, demographic heterogeneity analysis, policy preferences (police, marijuana), Fox News viewership | no page yet |
| Purdue Pharma unsealed litigation documents | OxyContin marketing strategy; source of identification rationale (cancer market targeting strategy) | no page yet |
| State Drug Utilization Data (SDUD), 1994-1998 | MS Contin and OxyContin prescription rates at state level for validating the exposure proxy (Table I) | no page yet |
| Newspapers.com local newspaper archive, 1995-2020; TV News Internet Archive (Fox News/CNN/MSNBC), 2009-2020 | Media coverage content and framing analysis; newspaper political affiliation from Gentzkow and Shapiro (2011) | no page yet |

Sample: 621 CZs (restricted to those with more than 20,000 residents, covering more than 99% of all opioid deaths and 99% of total US population). Panel period 1982-2022 for political and mortality outcomes; 1989-2022 for SNAP; 1990-2015/1998-2020 for disability.

## When to read the full paper

Read Arteaga and Barone (2026) if you need:

- A credible causal estimate of the opioid epidemic's effect on partisan realignment
  (Table I, Figures V-VIII are the key evidence).
- A detailed treatment of how economic hardship mediates the link from a public health
  crisis to political preferences (Figure IX, Online Appendix Table A2).
- Evidence on differences in conservative and liberal media coverage of a crisis and
  the political context around that coverage (Online Appendix Figure A10, Table V
  columns 1-4).
- A worked example of using industry marketing documents (unsealed litigation records)
  as a source of quasi-exogenous variation (Sections III.A-B, pp. 509-516).

## Attribution and rights

Arteaga, Carolina, and Victoria Barone. "Republican Support and Economic Hardship:
The Enduring Effects of the Opioid Epidemic." *The Quarterly Journal of Economics*
141, no. 1 (2026): 499-558. https://doi.org/10.1093/qje/qjaf051

Copyright The Author(s) 2025. Published by Oxford University Press on behalf of
President and Fellows of Harvard College. All rights reserved. This page contains
only extracts for academic reference (titles, locators, magnitudes, descriptions).
Replication data are available at Harvard Dataverse:
https://doi.org/10.7910/DVN/R5PKQL.

LLM-distilled by paper-distiller (gpt-6-luna), 2026-10-04; checked against the
source PDF by paper-verifier (gpt-6-luna), 2026-10-04. Not reproduced.
