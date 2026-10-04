---
title: "Election Cycles and Systemic Risk: Kladakis & Skouralis (2026)"
description: >-
  Distilled: Election years are associated with significantly higher bank systemic
  risk across 22 OECD economies (2000-2023), with ΔCoVaR rising 3.57% above the
  overall average in the election year, while scheduled elections show a
  pre-election decline. The effect is stronger for snap elections, new-government outcomes, and
  common-law countries; macroprudential tightening mitigates it. Journal of Banking
  and Finance 2026, CC BY 4.0. Twenty-two core results with source locators, datasets
  used, the ΔCoVaR estimation method, and the panel regression specification.
sidebar:
  label: Kladakis-Skouralis 2026
  order: 1
tags: [paper-summary, systemic-risk, elections, political-economy, banking,
       financial-stability, panel-regression, open-access, cc-by, peer-reviewed,
       unreplicated, data:datastream, data:oecd, data:bis, data:imapp]
paper:
  authors: George Kladakis, Alexandros Skouralis
  authorList:
    - { family: Kladakis, given: George, orcid: "0000-0003-2502-2401", affiliation: "University of St Andrews Business School" }
    - { family: Skouralis, given: Alexandros, orcid: "0000-0003-0835-1457", affiliation: "Henley Business School, University of Reading" }
  year: 2026
  venue: Journal of Banking and Finance 187 (2026) 107676
  venueShort: J. Banking Finance 2026
  tier: field
  doi: 10.1016/j.jbankfin.2026.107676
  jel:
    codes: [G02, G18, G32, D72]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Fiscal Policies and Political Economy", "Banking stability, regulation, efficiency"]
  dataAccess: licensed-commercial
  outcome:
    - bank systemic risk (ΔCoVaR)
    - systemic risk of all financial institutions (ΔCoVaR)
  outcomeClass: [macro-aggregates]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-03-05; consistent with artifact footer © 2026 The Author(s), Published by Elsevier B.V. under CC BY license)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF available via DOI (Elsevier; CC BY 4.0 VOR confirmed in Crossref metadata, 2026-06-25)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
  resultsCount: 22
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, political-uncertainty, political-budget-cycle]
  introducesData: true
  scope:
    region: OECD (22 countries)
    assetClass: bank and financial institution equities
    period: 2000-01..2023-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, aggregate]
    n: "193 banks (main), 697 financial institutions (extended), 147 elections, 22 OECD countries"
  findings:
    - { ref: R1, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "0.062*** (SE 0.012)", direction: positive }
    - { ref: R2, outcome: "bank systemic risk in pre/post-election periods (ΔCoVaR)", metric: coefficient, value: "PRE: -0.032*** (SE 0.009); POST: +0.037*** (SE 0.010)", direction: mixed }
    - { ref: R3, outcome: "bank systemic risk by election type (ΔCoVaR)", metric: coefficient, value: "SNAP: 0.084*** (SE 0.023); END-OF-TERM: 0.053*** (SE 0.013)", direction: positive }
    - { ref: R4, outcome: "bank systemic risk by election outcome (ΔCoVaR)", metric: coefficient, value: "NEW GOV: 0.084*** (SE 0.017); RE-ELECTED: 0.043** (SE 0.018)", direction: positive }
    - { ref: R5, outcome: "systemic risk of all financial institutions (ΔCoVaR)", metric: coefficient, value: "0.043*** (SE 0.006)", direction: positive }
    - { ref: R6, outcome: "bank systemic risk differential: common-law vs civil-law (ΔCoVaR)", metric: coefficient, value: "LEGAL ORIGIN x ELECTIONS: 0.049*** (SE 0.022)", direction: positive }
    - { ref: R7, outcome: "bank systemic risk under macroprudential tightening (ΔCoVaR)", metric: coefficient, value: "MP TIGHTENING x ELECTIONS: -0.121*** (SE 0.026)", direction: negative }
    - { ref: R8, outcome: "bank systemic risk (ΔCoVaR, 2SLS)", metric: coefficient, value: "0.045*** (SE 0.011)", direction: positive, vsBenchmark: "close to OLS; first-stage ELECTIONS on TERM LIMITS: 0.685*** (SE 0.007)" }
    - { ref: R9, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "VIX × ELECTIONS: 0.073*** (SE 0.025); VIX: 0.730*** (SE 0.038); ELECTIONS: -0.037 (SE 0.026)", direction: positive }
    - { ref: R10, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "PRICE_INFO × ELECTIONS: -0.001*** (SE 0.000); PRICE_INFO: 0.002*** (SE 0.001)", direction: negative }
    - { ref: R11, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "GDP growth × ELECTIONS: -0.040*** (SE 0.005); GDP growth: -0.019*** (SE 0.005)", direction: negative }
    - { ref: R12, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "GOV. EXP. × ELECTIONS: -0.002* (SE 0.001); GOV. EXP.: 0.018*** (SE 0.005)", direction: negative }
    - { ref: R13, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "TRUST × ELECTIONS: -0.287*** (SE 0.063); TRUST: -0.423*** (SE 0.079)", direction: negative }
    - { ref: R14, outcome: "bank systemic risk differential: common-law vs civil-law (ΔCoVaR)", metric: coefficient, value: "CRE COMMON LAW × ELECTIONS: 0.060** (SE 0.038), banks; 0.047*** (SE 0.012), all financials", direction: positive }
    - { ref: R15, outcome: "bank systemic risk under macroprudential policy (ΔCoVaR)", metric: coefficient, value: "MP TIGHTENING: -0.131*** (SE 0.029), banks; -0.061*** (SE 0.013), all financials; MP EXPANSION: 0.014 (SE 0.057), not significant", direction: mixed }
    - { ref: R16, outcome: "systemic risk (MES and SRISK)", metric: coefficient, value: "MES: 0.064** (SE 0.028), banks; 0.049*** (SE 0.014), all financials; SRISK: 0.014** (SE 0.005), banks; 0.010* (SE 0.005), all financials", direction: positive }
    - { ref: R17, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "ELECTIONS: 0.048*** (SE 0.007); HIGH EPU × ELECTIONS: 0.080*** (SE 0.015); lagged lnEPU: 0.002 (SE 0.021), not significant", direction: mixed }
    - { ref: R18, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "ELECTIONS: 0.016** (SE 0.007), Harvard crisis data; 0.011* (SE 0.006), Metrick-Schmelzing data", direction: positive }
    - { ref: R19, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "ELECTIONS: 0.113*** (SE 0.014); PRE (3 months): -0.028** (SE 0.006); POST (3 months): 0.094*** (SE 0.009)", direction: mixed }
    - { ref: R20, outcome: "bank systemic risk (ΔCoVaR)", metric: coefficient, value: "ELECTIONS: 0.063*** (SE 0.011) without controls; 0.060*** (SE 0.011) with controls; GT Political Uncertainty first stage: 0.356*** (SE 0.008)", direction: positive }
    - { ref: R21, outcome: "monthly bank systemic risk by election type and outcome (ΔCoVaR)", metric: coefficient, value: "PRE × REELECTED: -0.023*** (SE 0.008); POST × REELECTED: 0.016 (SE 0.011), n.s.; PRE × SNAP: 0.065*** (SE 0.014); POST × SNAP: 0.093*** (SE 0.019)", direction: mixed }
    - { ref: R22, outcome: "systemic risk of all financial institutions (ΔCoVaR)", metric: coefficient, value: "RE-ELECTED: 0.008 (not significant); NEW GOVT: 0.093*** (SE 0.011)", direction: mixed }
  resultType: new-finding
  relatesTo:
    - { cite: "Adrian and Brunnermeier (2016)", doi: '10.1257/aer.20120555', relation: builds-on, note: "ΔCoVaR methodology and three-step quantile-regression estimation procedure adopted directly" }
    - { cite: "Brownlees and Engle (2017)", doi: '10.1093/rfs/hhw060', relation: builds-on, note: "SRISK used as alternative systemic risk measure in robustness tests" }
    - { cite: "Jens (2017)", doi: '10.1016/j.jfineco.2016.01.034', relation: extends, note: "term limits instrument for election timing adopted and extended to the systemic risk context" }
    - { cite: "Matousek et al. (2020)", doi: '10.1016/j.jcorpfin.2020.101558', relation: extends, note: "prior evidence on policy uncertainty and bank capital shortfalls; this paper focuses specifically on election cycles using a global OECD sample" }
    - { cite: "Bialkowski et al. (2008)", relation: cites, note: "prior work documenting that country-specific stock market volatility roughly doubles in the week around an election" }
  openQuestions:
    - "Sample restricted to 22 OECD economies with listed financial institutions large enough to appear in the DS Financials index; whether findings extend to non-OECD or emerging-market banking systems is unaddressed (p. 7, footnote 12)."
    - "The EPU analysis (Section 5.3, Table 12) finds that the election association remains after EPU controls and is larger in high-EPU periods, but does not separately identify the mechanism behind that amplification."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-25", role: extracted, note: "Full PDF read (pp. 1-26, all tables and figures); eight results extracted with table locators; licence confirmed via Crossref REST API. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all eight result rows confirmed (R1-R8 coefficient values, SEs, and significance match Tables 3/4/6/9/10/13). Fixed: added missing JEL code G02 (visible p. 1); removed topic 'Agricultural risk and resilience' (clearly misclassified, not in the paper). Equations 4-8, 9, 15 verified term-by-term. No em-dashes found. outcomeClass:credit-risk is partially defensible (banking-crisis probability) but macro-aggregates may be better fit; left unchanged given genuine ambiguity." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added 14 quantitative result rows (R9-R22), corresponding findings, the political budget cycle vocabulary proposal, and missing numbered equations and estimating specifications. These additions are not human-verified and were not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 22 rows, equations, specifications, frontmatter, classification axes, findings, and prose against the PDF; corrected table locators, extended-sample N, equation notation, classification, and pre-election/trust claims. One headline firm-characteristics result remains absent from Core results and is flagged for re-distillation. Post-verification review (2026-10-04) restored the Table 3 (p. 11), Table 4 (p. 12), and Table 14 (p. 21) page locators, which this pass had shifted by one page." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107676", checked: "2026-06-25", by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-03-05" }
---

**What this is.** The paper's core results, the ΔCoVaR methodology it applies (from Adrian
and Brunnermeier 2016), and the panel regression specification: enough to know what it found
  and how, without reading the full paper. To replicate or extend it, read the full source at the
[original](https://doi.org/10.1016/j.jbankfin.2026.107676).

## TL;DR

Kladakis and Skouralis examine whether national elections are associated with higher bank
systemic risk using a panel of 193 banks from 22 OECD economies, covering 147 elections
over 2000-2023. Systemic risk is measured by ΔCoVaR (the additional tail risk to the
financial system when an institution is in distress), following Adrian and Brunnermeier
(2016). The central finding is a robust, time-varying relationship: bank ΔCoVaR rises by
approximately 3.57% above the overall mean in the election year, but the effect is
heterogeneous across the electoral cycle. For scheduled elections, suppressed negative
information and expansionary fiscal policies are associated with lower systemic risk in the
pre-election period (-2.19%); snap-election risk can rise before the election. The surge occurs
at election time and in the post-election period. Snap elections drive larger
increases than scheduled end-of-term elections, incumbent turnover amplifies the effect while
re-election dampens it, common-law countries show a stronger response than civil-law
jurisdictions, and macroprudential policy tightening can partially offset the election-driven
rise in systemic risk. Results are robust to alternative systemic risk measures (MES, SRISK),
instrumental-variable estimation (term limits; Google Trends uncertainty index), exclusion of
banking-crisis years, and monthly data.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the
source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Elections raise bank systemic risk** in the election year | Table 3 Model (3), p. 11; text p. 8 | ELECTIONS: 0.062\*\*\* (SE 0.012); the election year is associated with ΔCoVaR 3.57% above the overall mean (mean = 1.737%) |
| R2 | **Pre-election period: systemic risk falls; post-election period: systemic risk rises** | Table 4 Models (1)(4), p. 12 | PRE (year before election): -0.032\*\*\* (SE 0.009); POST (year after election): +0.037\*\*\* (SE 0.010) |
| R3 | **Snap elections drive larger systemic risk increases than end-of-term elections** | Table 3 Models (4)(5), p. 11; text p. 9 | SNAP: 0.084\*\*\* (SE 0.023); END-OF-TERM: 0.053\*\*\* (SE 0.013); snap elections increase ΔCoVaR by 4.83% vs 3.05% for end-of-term (relative to mean) |
| R4 | **Incumbent turnover amplifies effect; re-election dampens it** | Table 3 Model (6), p. 11 | NEW GOV: 0.084\*\*\* (SE 0.017); RE-ELECTED: 0.043\*\* (SE 0.018); new government coefficient is roughly twice that under re-election |
| R5 | **Effect extends to all financial institutions** (banks, insurers, investment funds, and other financial firms) | Table 6 Model (1), p. 14 | ELECTIONS: 0.043\*\*\* (SE 0.006); regression sample of 693 institutions; snap: 0.056\*\*\*, end-of-term: 0.042\*\*\* |
| R6 | **Common-law countries show a stronger elections-systemic risk link** than civil-law countries | Table 9 Model (1), p. 17 | LEGAL ORIGIN × ELECTIONS: 0.049\*\*\* (SE 0.022); ELECTIONS main coefficient: 0.043\*\*\* (SE 0.014) |
| R7 | **Macroprudential tightening is associated with a weaker election-risk link** | Table 10 Model (2), p. 17 | MP TIGHTENING × ELECTIONS: -0.121\*\*\* (SE 0.026); the interaction is negative, but the combined marginal election effect is not separately tested |
| R8 | **2SLS with term limits IV confirms positive election effect**, addressing reverse causality | Table 13 Models (1)-(4), p. 19 | 2SLS ELECTIONS: 0.045\*\*\* (SE 0.011); first stage: ELECTIONS on TERM LIMITS 0.685\*\*\* (SE 0.007); consistent with OLS |
| R9 | **Market volatility amplifies the election-risk association** | Table 8 Model (1), p. 16 | VIX × ELECTIONS: 0.073\*\*\* (SE 0.025); VIX: 0.730\*\*\* (SE 0.038); ELECTIONS: -0.037 (SE 0.026) |
| R10 | **Price informativeness moderates the election-risk association** | Table 8 Model (2), p. 16 | PRICE_INFO × ELECTIONS: -0.001\*\*\* (SE 0.000); PRICE_INFO: 0.002\*\*\* (SE 0.001) |
| R11 | **Economic growth buffers election-related systemic risk** | Table 8 Model (3), p. 16 | GDP growth × ELECTIONS: -0.040\*\*\* (SE 0.005); GDP growth: -0.019\*\*\* (SE 0.005) |
| R12 | **Government expenditure expansion weakens election-related systemic risk** | Table 8 Model (4), p. 16 | GOV. EXP. × ELECTIONS: -0.002\* (SE 0.001); GOV. EXP.: 0.018\*\*\* (SE 0.005) |
| R13 | **Trust in government mitigates the election-risk effect** | Table 8 Model (5), p. 16 | TRUST × ELECTIONS: -0.287\*\*\* (SE 0.063); TRUST: -0.423\*\*\* (SE 0.079) |
| R14 | **Legal-origin interaction is robust to correlated random effects** | Table 9 Models (3)-(4), p. 17 | COMMON LAW × ELECTIONS: 0.060\*\* (SE 0.038) for banks; 0.047\*\*\* (SE 0.012) for all financials |
| R15 | **Macroprudential tightening lowers risk; expansion is not consistently significant** | Table 10 Models (1)-(4), p. 17 | MP TIGHTENING: -0.131\*\*\* (SE 0.029) for banks; -0.061\*\*\* (SE 0.013) for all financials; MP EXPANSION: 0.014 (SE 0.057), not significant |
| R16 | **Election effects persist across alternative systemic-risk measures** | Table 11 Models (1)-(4), p. 18 | MES: 0.064\*\* (SE 0.028) for banks and 0.049\*\*\* (SE 0.014) for all financials; SRISK: 0.014\*\* (SE 0.005) for banks and 0.010\* (SE 0.005) for all financials |
| R17 | **Election effect remains with EPU controls, while high EPU amplifies it** | Table 12 Models (1)-(7), p. 18 | ELECTIONS: 0.048\*\*\* (SE 0.007) in Model (1); HIGH EPU × ELECTIONS: 0.080\*\*\* (SE 0.015) in Model (6); lagged lnEPU: 0.002 (SE 0.021), not significant |
| R18 | **The election-risk estimate remains positive after banking-crisis years are removed** | Table 14 Models (1)-(4), p. 21 | ELECTIONS: 0.016\*\* (SE 0.007) with Harvard crisis data and controls; 0.011\* (SE 0.006) with Metrick-Schmelzing data and controls |
| R19 | **Monthly estimates retain a positive election effect and show distinct pre/post dynamics** | Table 15 Models (3)-(4), p. 21 | ELECTIONS: 0.113\*\*\* (SE 0.014); PRE (3 months): -0.028\*\* (SE 0.006); POST (3 months): 0.094\*\*\* (SE 0.009) |
| R20 | **Google Trends instrument specifications confirm the election effect** | Table 13 Models (5)-(8), p. 19 | ELECTIONS: 0.063\*\*\* (SE 0.011) without controls; 0.060\*\*\* (SE 0.011) with controls; GT Political Uncertainty first stage: 0.356\*\*\* (SE 0.008) |
| R21 | **Snap-election monthly dynamics are stronger; post-election re-election interaction is null** | Table 15 Models (5)-(6), p. 21 | PRE × REELECTED: -0.023\*\*\* (SE 0.008); POST × REELECTED: 0.016 (SE 0.011), not significant; PRE × SNAP: 0.065\*\*\* (SE 0.014); POST × SNAP: 0.093\*\*\* (SE 0.019) |
| R22 | **In the extended financial-institution sample, incumbent re-election has no significant association while turnover does** | Table 6 Model (4), p. 14 | RE-ELECTED: 0.008 (not significant); NEW GOVT: 0.093\*\*\* (SE 0.011) |

**Overall (paper's conclusion).** Elections are associated with a robust and time-varying
increase in bank systemic risk. The pre-election decline is clearest for scheduled elections;
snap-election systemic risk is also elevated beforehand. The hump-shaped trajectory peaks
around six months after elections and gradually declines over 12 months. Its persistence is
driven primarily by turnover episodes: in re-elected cases the post-election rise is smaller
and shorter-lived. The paper attributes the pre-election decline to suppressed negative
information and expansionary fiscal policies, while stock-market volatility is associated
with greater election-period risk. Macroprudential tightening, strong economic growth, and
high public trust in government partially buffer the effect.

## Theory / model

The paper proposes no formal economic model. It develops six testable hypotheses grounded in
the prior literature on political uncertainty and financial markets.

**Competing hypotheses on election-period systemic risk.**

- H1a: Election periods are associated with increased systemic risk (via heightened policy
  uncertainty, reduced information disclosure, and amplified market volatility).
- H1b: Election periods are associated with reduced systemic risk (via uncertainty resolution,
  improved investor confidence when a competent government is expected, and credible policy
  commitments).
- H2: Snap elections are associated with increased systemic risk relative to scheduled
  elections (owing to their unexpected nature and greater uncertainty about outcomes).
- H3: Re-election of the incumbent is associated with reduced systemic risk (via continuity
  and reduced policy risk).
- H4a/H4b: Systemic risk is increased/reduced in the pre-election period (depending on
  whether anticipatory political risk or information suppression and fiscal stimulus dominate).
- H5: The impact of elections on systemic risk is stronger in common-law countries (where
  more market-based financial systems transmit political shocks more directly through asset
  prices and intermediaries).
- H6: Macroprudential policy can mitigate election-related systemic risk (by strengthening
  system resilience against political-economic shocks).

**Identification logic.** The core identification challenge is that systemic risk may itself
influence election timing (reverse causality: distressed governments may call early elections,
or delay elections to avoid political punishment). The prior literature documents that
Bialkowski et al. (2008) find country-specific stock market volatility roughly doubles in the
week around a national election, and Matousek et al. (2020) show that policy uncertainty
exerts a significant and persistent impact on bank capital shortfall, peaking around
11 months after elections, providing direct motivation for the systemic-risk focus here. The paper addresses this via (i) the
argument that national election schedules in parliamentary democracies are largely exogenous
to individual bank risk (particularly for scheduled end-of-term elections); (ii) a 2SLS
approach using term limits (Jens 2017) as an instrument for election occurrence, which is
predetermined and uncorrelated with contemporaneous financial conditions; and (iii) an
additional instrument based on Google Trends election search intensity. The authors also
exclude years in which banking crises occurred (Harvard Global Crisis Data; Metrick and
Schmelzing 2021) and run a separate sub-sample restricted to US presidential elections, which
occur at fixed intervals.

## Method

The paper applies the ΔCoVaR methodology of Adrian and Brunnermeier (2016) to construct
the systemic risk measure. The estimation has three steps (Eqs. 4-8, p. 6).
The underlying tail-risk definitions are Eqs. 1-3 (p. 5):

$$
P(R^i_t < \text{VaR}^i_t) = q \tag{1}
$$

$$
P(R^s_t < \text{CoVaR}^{s|i}_t \mid R^i_t = \text{VaR}^i_t) = q \tag{2}
$$

$$
\Delta\text{CoVaR}^{s|i}_t = \text{CoVaR}^{s|i}_{q=0.05} - \text{CoVaR}^{s|i}_{q=0.5} \tag{3}
$$


**Step 1: institution-level VaR.** For each financial institution $$i$$, run a quantile
regression of weekly returns $$R^i_t$$ on state variables $$S_{t-1}$$ (stock market returns,
short-term government bond yield change, and the 10Y-to-short-term yield spread) at the
distress quantile $$q = 0.05$$ (Eq. 4, p. 6):

$$
R^i_t = a_q + \beta_q S_{t-1} + \varepsilon_{q,t} \tag{4}
$$

$$
\widehat{\text{VaR}}^i_{q,t} = \hat{a}_q + \hat{\beta}_q S_{t-1} \tag{5}
$$

**Step 2: system CoVaR.** For the country-level financial system index (returns
$$R^{\text{system}}_t$$), run a second quantile regression conditioning on institution $$i$$'s
return (Eq. 6, p. 6):

$$
R^{\text{system}}_t = a_q^{\text{system}|i} + \beta_q^{\text{system}|i} S_{t-1} + \gamma_q^{\text{system}|i} R^i_t + \varepsilon_{q,t} \tag{6}
$$

$$
\widehat{\text{CoVaR}}^{\text{system}|i}_{q,t} = \hat{a}_q^{\text{system}|i} + \hat{\beta}_q^{\text{system}|i} S_{t-1} + \hat{\gamma}_q^{\text{system}|i} \widehat{\text{VaR}}^i_{q,t} \tag{7}
$$

**Step 3: ΔCoVaR.** The systemic importance measure is the difference between the system's
CoVaR when institution $$i$$ is at its distress level ($$q = 0.05$$) and when it is at its
median ($$q = 0.5$$) (Eq. 8, p. 6):

$$
\Delta\text{CoVaR}^{\text{system}|i}_{q,t} = \widehat{\text{CoVaR}}^{\text{system}|i}_{q=0.05,t} - \widehat{\text{CoVaR}}^{\text{system}|i}_{q=0.5,t} \tag{8}
$$

The system index $$R^{\text{system}}_t$$ is the return of the DS Financials country index
from Thomson Reuters EIKON Datastream, which includes large listed financial institutions in
each country. All data are weekly. The resulting annual average of ΔCoVaR is the dependent
variable in the panel regressions.

The paper also uses two alternative systemic risk measures for robustness (Table 11, p. 18):
Marginal Expected Shortfall (MES) from Acharya et al. (2017), and SRISK from
Brownlees and Engle (2017). MES is the expected equity loss of institution $$i$$ when the
market experiences an extreme loss. SRISK is the expected capital shortfall conditional on a
systemic event:

MES is defined conditionally on market distress at the fifth percentile (Eq. 10, p. 15), and the authors also express it as the marginal contribution to system expected shortfall (Eq. 11, p. 15):

$$
\text{MES}_{i,t} = E[R_{i,t} \mid R^M_t \leq C = \text{VaR}^M] \tag{10}
$$

$$
\text{ES}_{i,t}(C) = \frac{\partial \text{ES}_{m,q}(C)}{\partial w_{i,t}} = E_{t-1}[R_{i,t} \mid R_{m,t} \leq C] \tag{11}
$$

The SRISK construction begins from firm capital shortfall (Eq. 12, p. 15), then takes its expectation conditional on a systemic event (Eq. 13) and separates debt and equity components (Eq. 14):

$$
\text{Capital Shortfall}_{i,t} = k A_{i,t} - \text{MCap}_{i,t} \tag{12}
$$

$$
\text{SRISK}_{i,t} = E_t[\text{Capital Shortfall}_{i,t} \mid R_{t+1:t+h} < T] \tag{13}
$$

$$
\text{SRISK}_{i,t} = k E_t[D_{i,t+h} \mid R_{t+1:t+h} < T] - (1-k)E_t[W_{i,t+h} \mid R_{t+1:t+h} < T] \tag{14}
$$

$$
\text{SRISK}_{i,t} = k \cdot \text{DEBT}_{i,t} - (1 - k) \cdot W_{i,t} \cdot (1 - \text{LRMES}_{i,t}) \tag{15}
$$

where $$k = 0.08$$ is the prudential capital fraction, $$W_{i,t}$$ is market capitalization,
and $$\text{LRMES}_{i,t}$$ is the long-run marginal expected shortfall (p. 15, Eq. 15).

## Empirical specifications

**Benchmark panel regression.** The headline specification (Eq. 9, p. 7) is a panel fixed-
effects regression of annual ΔCoVaR on an election dummy and controls:

$$
\Delta\text{CoVaR}^{s|i}_t = \beta_0 + \beta_1 \text{ELECTIONS}_{c,t} + \beta_2 X_{i,t-1} + \beta_3 M_{c,t-1} + \alpha_t + \alpha_i + \varepsilon_{i,t} \tag{9}
$$

where subscripts $$t$$, $$i$$, $$c$$, and $$s$$ refer to year, firm, country, and financial-
system index. $$\text{ELECTIONS}_{c,t} = 1$$ in years when national elections occurred in
country $$c$$. $$X_{i,t-1}$$ is a vector of lagged firm controls: log total assets (size),
VaR (idiosyncratic risk), leverage (total debt to market-cap ratio), and ROE (profitability).
$$M_{c,t-1}$$ is a vector of lagged country-level controls: GDP growth, inflation, real house
price growth, and credit growth to non-financials. $$\alpha_i$$ and $$\alpha_t$$ are firm and
year fixed effects. Standard errors are clustered at the firm level.

The sample is 193 banks from 22 OECD countries, yielding 3,827 firm-year observations in the
full-control specification (Table 3 Model 3, p. 11). The ELECTIONS dummy is split into SNAP
(elections called before end of term) and END-OF-TERM (within six months of term limit) to
test H2, and into RE-ELECTED and NEW GOV based on the electoral outcome to test H3 (Table 3,
Models 4-7, p. 11). Pre- and post-election dynamics are examined by replacing ELECTIONS with PRE
(year before elections) and POST (year after) in Table 4. Table 8 tests the proposed channels
with one interaction at a time, adding the channel variable and its product with elections:

$$
\Delta\text{CoVaR}_{i,t} = \beta_0 + \beta_1 \text{ELECTIONS}_{c,t} + \beta_2 Z_{c,t} + \beta_3 (Z_{c,t} \times \text{ELECTIONS}_{c,t}) + \boldsymbol{\gamma}'X_{i,t-1} + \boldsymbol{\delta}'M_{c,t-1} + \alpha_i + \alpha_t + \varepsilon_{i,t}
$$

The channel variable $$Z$$ is VIX, PRICE_INFO, GDP growth, government expenditure, or trust in government, estimated in separate specifications. Tables 8-10 use firm and year fixed effects and robust standard errors clustered by firm; samples range from 3,827 to 12,431 firm-years, depending on the subsample and available controls. Table 9 omits firm fixed effects to estimate legal-origin levels, then reports random-effects and correlated-random-effects specifications.

**2SLS instrumental-variable specification.** To address reverse causality (Table 13, p. 19),
ELECTIONS is instrumented by two variables. The first is TERM LIMITS: a dummy equal to one
if the country's constitution or law prohibits the incumbent government from seeking
re-election; Jens (2017) shows term limits are strongly correlated with election timing but
unrelated to financial conditions. The second is a Google Trends political uncertainty index
(GT Political Uncertainty dummy): the equally-weighted sum of standardized search volumes for
election-related terms, equal to one if the index exceeds the upper quartile of its country
distribution. First-stage coefficient on TERM LIMITS: 0.685\*\*\* (SE 0.007); on
GT Political Uncertainty dummy: 0.356\*\*\*. Second-stage ELECTIONS coefficient: 0.045\*\*\*
(SE 0.011, Table 13 Model 2), close to the OLS estimate of 0.062.

The first and second stages use the same firm and year fixed effects and firm-clustered robust standard errors (Table 13, p. 19):

$$
\text{ELECTIONS}_{c,t} = \pi_0 + \pi_1 Z_{c,t} + \pi_2 X_{i,t-1} + \pi_3 M_{c,t-1} + \alpha_i + \alpha_t + u_{i,t}
$$

$$
\Delta\text{CoVaR}^{s|i}_t = \beta_0 + \beta_1 \widehat{\text{ELECTIONS}}_{c,t} + \beta_2 X_{i,t-1} + \beta_3 M_{c,t-1} + \alpha_i + \alpha_t + \varepsilon_{i,t}
$$

Here the instruments are TERM LIMITS in Models 1-4 and TERM LIMITS together with the Google Trends Political Uncertainty dummy in Models 5-8. Table 13 reports 693 financial institutions without controls, and 691 institutions in the controlled first and second stages; robust standard errors are clustered at the firm level.

For monthly estimates (Table 15 and Figs. 5-6, pp. 21-22), the fixed-effects design uses monthly systemic risk, monthly industrial production and inflation controls, and firm and time effects where specified. Table 15 reports a three-month pre-election window and a three-month post-election window, with interactions for re-election and snap elections. Figures 5-6 plot cumulative windows from three quarters before through six quarters after the election.

The monthly table covers 162,684 observations without controls and 135,692 in the dynamic specifications with controls (Table 15, p. 21); robust standard errors are clustered by firm. Its outcome and election-type specifications interact the pre/post windows with REELECTED and SNAP, respectively.

**Transmission-channel tests.** Table 8 (p. 16) introduces four transmission-channel
interaction terms one at a time, each interacted with ELECTIONS: (1) VIX (stock market
volatility index): positive and significant interaction (VIX × ELECTIONS: 0.073\*\*\*,
SE 0.025), consistent with market volatility amplifying election effects; (2) PRICE\_INFO
(the year-on-year change in the country average bid-ask spread; higher spreads indicate lower
informativeness): negative interaction (PRICE\_INFO × ELECTIONS: -0.001\*\*\*, SE 0.000),
consistent with reduced informativeness dampening the election-risk link; (3) GDP growth ×
ELECTIONS: -0.040\*\*\* (SE 0.005), consistent with strong growth buffering the effect;
(4) GOV.EXP × ELECTIONS: -0.002\* (SE 0.001), fiscal expansion partially buffers.
These interaction estimates are consistent with the proposed channels, but the paper estimates
them separately and does not establish that all channels operate simultaneously.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Thomson Reuters EIKON Datastream (DS Financials index) | Weekly stock return data for all financial institutions; country financial system index; firm-level total assets, ROE, leverage, VaR | [no page yet](/wiki/commercial/) |
| OECD database | Country-level GDP growth and inflation (year-on-year) | no page yet |
| BIS | Real residential property price growth; credit growth to non-financial sector | no page yet |
| iMaPP (IMF / Alam et al. 2019) | Macroprudential policy indicators: countercyclical capital buffer, LTV, LTD, DSTI, stress tests, SIFI measures; annual aggregate at country level | no page yet |
| National election databases (22 OECD countries) | Date, type (snap vs. end-of-term), and outcome (re-elected vs. new government) of 147 national elections, 2000-2023; collected by the authors from national sources | no data: tag (hand-collected) |
| Harvard Global Crisis Data (Reinhart-Rogoff 2014) | Banking crisis dates for banking-crisis robustness exclusion | no page yet |
| Metrick-Schmelzing (2021) banking crisis dataset | Alternative banking crisis dates for robustness | no page yet |
| Baker et al. (2016) EPU index | Economic Policy Uncertainty index; robustness subsample of 12 OECD countries | no page yet |

Sample: 2000-2023 (annual), 22 OECD countries, 193 banks in the main sample (3,827 firm-years).
ΔCoVaR estimation uses weekly returns. Extended sample includes 697 financial institutions
(banks, insurance companies, financial services companies, investment trusts). Macroeconomic
controls are from OECD (GDP, inflation) and BIS (house prices, credit).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jbankfin.2026.107676) if you are:
studying how political events transmit into tail risk measures (Tables 3-5 give the full
decomposition by election type and outcome); building a stress-testing framework that
incorporates election cycles (Section 4.7 / Table 10 on the macroprudential buffer channel
is the most policy-relevant section); extending the ΔCoVaR approach to other political
events; or investigating legal-origin heterogeneity in political-financial transmission
(Table 9 and Section 4.6). Figure 5 (p. 22) shows the monthly impulse-response of systemic
risk around elections and Figure 6 replicates it on US data alone.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 187 (2026) 107676. This distillation
was extracted and checked against the PDF by LLMs on 2026-06-25 and 2026-10-04; it is
**not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in
this batch.

> **Attribution (CC BY 4.0).** Kladakis, George, and Alexandros Skouralis.
> "Election cycles and systemic risk."
> *Journal of Banking and Finance* 187 (2026) 107676.
> DOI: 10.1016/j.jbankfin.2026.107676. © 2026 The Author(s).
> Published by Elsevier B.V. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
