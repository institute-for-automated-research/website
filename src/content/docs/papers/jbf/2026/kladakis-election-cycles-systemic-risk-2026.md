---
title: "Election Cycles and Systemic Risk: Kladakis & Skouralis (2026)"
description: >-
  Distilled: Election years are associated with significantly higher bank systemic
  risk across 22 OECD economies (2000-2023), with ΔCoVaR rising 3.57% above the
  overall average in the election year, while the pre-election period shows a
  decline. The effect is stronger for snap elections, new-government outcomes, and
  common-law countries; macroprudential tightening mitigates it. Journal of Banking
  and Finance 2026, CC BY 4.0. Eight core results with source locators, datasets
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
  resultsCount: 8
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, political-uncertainty]
  scope:
    region: OECD (22 countries)
    assetClass: bank and financial institution equities
    period: 2000-01..2023-12
    frequency: annual
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
  resultType: new-finding
  relatesTo:
    - { cite: "Adrian and Brunnermeier (2016)", doi: '10.1257/aer.20120555', relation: builds-on, note: "ΔCoVaR methodology and three-step quantile-regression estimation procedure adopted directly" }
    - { cite: "Brownlees and Engle (2017)", doi: '10.1093/rfs/hhw060', relation: builds-on, note: "SRISK used as alternative systemic risk measure in robustness tests" }
    - { cite: "Jens (2017)", doi: '10.1016/j.jfineco.2016.01.034', relation: extends, note: "term limits instrument for election timing adopted and extended to the systemic risk context" }
    - { cite: "Matousek et al. (2020)", doi: '10.1016/j.jcorpfin.2020.101558', relation: extends, note: "prior evidence on policy uncertainty and bank capital shortfalls; this paper focuses specifically on election cycles using a global OECD sample" }
    - { cite: "Bialkowski et al. (2008)", relation: cites, note: "prior work documenting that country-specific stock market volatility roughly doubles in the week around an election" }
  openQuestions:
    - "Sample restricted to 22 OECD economies with listed financial institutions large enough to appear in the DS Financials index; whether findings extend to non-OECD or emerging-market banking systems is unaddressed (p. 7, footnote 11)."
    - "Full separation of election-specific political uncertainty from broader macroeconomic uncertainty remains partial; the EPU robustness exercise (Section 5.3, Table 12) shows elections retain an independent effect, but the two channels overlap."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-25", role: extracted, note: "Full PDF read (pp. 1-26, all tables and figures); eight results extracted with table locators; licence confirmed via Crossref REST API. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all eight result rows confirmed (R1-R8 coefficient values, SEs, and significance match Tables 3/4/6/9/10/13). Fixed: added missing JEL code G02 (visible p. 1); removed topic 'Agricultural risk and resilience' (clearly misclassified, not in the paper). Equations 4-8, 9, 15 verified term-by-term. No em-dashes found. outcomeClass:credit-risk is partially defensible (banking-crisis probability) but macro-aggregates may be better fit; left unchanged given genuine ambiguity." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107676", checked: "2026-06-25", by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-03-05" }
---

**What this is.** The paper's core results, the ΔCoVaR methodology it applies (from Adrian
and Brunnermeier 2016), and the panel regression specification: enough to know what it found
and how, without reading all 26 pages. To replicate or extend it, read the full source at the
[original](https://doi.org/10.1016/j.jbankfin.2026.107676).

## TL;DR

Kladakis and Skouralis examine whether national elections are associated with higher bank
systemic risk using a panel of 193 banks from 22 OECD economies, covering 147 elections
over 2000-2023. Systemic risk is measured by ΔCoVaR (the additional tail risk to the
financial system when an institution is in distress), following Adrian and Brunnermeier
(2016). The central finding is a robust, time-varying relationship: bank ΔCoVaR rises by
approximately 3.57% above the overall mean in the election year, but the effect is
heterogeneous across the electoral cycle. In the pre-election period, suppressed negative
information and expansionary fiscal policies push systemic risk downward (-2.19%); the
surge occurs at election time and in the post-election period. Snap elections drive larger
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
| R1 | **Elections raise bank systemic risk** in the election year | Table 3 Model (3), p. 11 | ELECTIONS: 0.062\*\*\* (SE 0.012); the election year is associated with ΔCoVaR 3.57% above the overall mean (mean = 1.737%) |
| R2 | **Pre-election period: systemic risk falls; post-election period: systemic risk rises** | Table 4 Models (1)(4), p. 12 | PRE (year before election): -0.032\*\*\* (SE 0.009); POST (year after election): +0.037\*\*\* (SE 0.010) |
| R3 | **Snap elections drive larger systemic risk increases than end-of-term elections** | Table 3 Models (4)(5), p. 9-11 | SNAP: 0.084\*\*\* (SE 0.023); END-OF-TERM: 0.053\*\*\* (SE 0.013); snap elections increase ΔCoVaR by 4.83% vs 3.05% for end-of-term (relative to mean) |
| R4 | **Incumbent turnover amplifies effect; re-election dampens it** | Table 3 Model (6), p. 10-11 | NEW GOV: 0.084\*\*\* (SE 0.017); RE-ELECTED: 0.043\*\* (SE 0.018); new government coefficient is roughly twice that under re-election |
| R5 | **Effect extends to all financial institutions** (banks + insurance + investment trusts) | Table 6 Model (1), p. 14 | ELECTIONS: 0.043\*\*\* (SE 0.006); sample of 697 institutions; snap: 0.056\*\*\*, end-of-term: 0.042\*\*\* |
| R6 | **Common-law countries show a stronger elections-systemic risk link** than civil-law countries | Table 9 Model (1), p. 17 | LEGAL ORIGIN × ELECTIONS: 0.049\*\*\* (SE 0.022); ELECTIONS main coefficient: 0.043\*\*\* (SE 0.014) |
| R7 | **Macroprudential policy tightening mitigates election-related systemic risk** | Table 10 Model (2), p. 17 | MP TIGHTENING × ELECTIONS: -0.121\*\*\* (SE 0.026); effect remains positive in tightening years but is significantly reduced |
| R8 | **2SLS with term limits IV confirms positive election effect**, addressing reverse causality | Table 13 Models (2)(4), pp. 18-19 | 2SLS ELECTIONS: 0.045\*\*\* (SE 0.011); first stage: ELECTIONS on TERM LIMITS 0.685\*\*\* (SE 0.007); consistent with OLS |

**Overall (paper's conclusion).** Elections are associated with a robust and time-varying
increase in bank systemic risk. The hump-shaped trajectory (lower pre-election, peak around
election time and first two post-election quarters, gradual decline over 12 months) is driven
primarily by turnover episodes: in re-elected cases the post-election rise is smaller and
shorter-lived. Multiple transmission channels are evidenced: stock market volatility (VIX
interaction), suppressed stock price informativeness (reduced transparency), expansionary
fiscal policies before elections, and declining trust in government. Macroprudential
tightening, strong economic growth, and high public trust in government partially buffer the
effect.

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
R^{\text{system}}_t = a_q^{\text{system}} + \beta_q^{\text{system}} S_{t-1} + \gamma_q^{\text{system}} R^i_t + \varepsilon_{q,t} \tag{6}
$$

$$
\widehat{\text{CoVaR}}^{si}_{q,t} = \hat{a}_q^{\text{system}} + \hat{\beta}_q^{\text{system}} S_{t-1} + \hat{\gamma}_q^{\text{system}} \widehat{\text{VaR}}^i_t \tag{7}
$$

**Step 3: ΔCoVaR.** The systemic importance measure is the difference between the system's
CoVaR when institution $$i$$ is at its distress level ($$q = 0.05$$) and when it is at its
median ($$q = 0.5$$) (Eq. 8, p. 6):

$$
\Delta\text{CoVaR}^{si} = \widehat{\text{CoVaR}}^{si}_{q=0.05} - \widehat{\text{CoVaR}}^{si}_{q=0.5} \tag{8}
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

$$
\text{SRISK}_{i,t} = k \cdot \text{DEBT}_{i,t} - (1 - k) \cdot W_{i,t} \cdot (1 - \text{LRMES}_{i,t}) \tag{15}
$$

where $$k = 0.08$$ is the prudential capital fraction, $$W_{i,t}$$ is market capitalization,
and $$\text{LRMES}_{i,t}$$ is the long-run marginal expected shortfall (p. 15, Eq. 15).

## Empirical specifications

**Benchmark panel regression.** The headline specification (Eq. 9, p. 7) is a panel fixed-
effects regression of annual ΔCoVaR on an election dummy and controls:

$$
\Delta\text{CoVaR}^{ci}_t = \beta_0 + \beta_1 \text{ELECTIONS}_{c,t} + \beta_2 X_{L,t-1} + \beta_3 M_{c,t-1} + \alpha_i + \alpha_t + \varepsilon_{i,t} \tag{9}
$$

where subscripts $$t$$, $$i$$, $$c$$, and $$s$$ refer to year, firm, country, and financial-
system index. $$\text{ELECTIONS}_{c,t} = 1$$ in years when national elections occurred in
country $$c$$. $$X_{L,t-1}$$ is a vector of lagged firm controls: log total assets (size),
VaR (idiosyncratic risk), leverage (total debt to market-cap ratio), and ROE (profitability).
$$M_{c,t-1}$$ is a vector of lagged country-level controls: GDP growth, inflation, real house
price growth, and credit growth to non-financials. $$\alpha_i$$ and $$\alpha_t$$ are firm and
year fixed effects. Standard errors are clustered at the firm level.

The sample is 193 banks from 22 OECD countries, yielding 3,827 firm-year observations in the
full-control specification (Table 3 Model 3, p. 11). The ELECTIONS dummy is split into SNAP
(elections called before end of term) and END-OF-TERM (within six months of term limit) to
test H2, and into RE-ELECTED and NEW GOV based on the electoral outcome to test H3 (Table 3,
Models 4-7). Pre- and post-election dynamics are examined by replacing ELECTIONS with PRE
(year before elections) and POST (year after) in Table 4.

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

**Transmission-channel tests.** Table 8 (p. 16) introduces four transmission-channel
interaction terms one at a time, each interacted with ELECTIONS: (1) VIX (stock market
volatility index): positive and significant interaction (VIX × ELECTIONS: 0.073\*\*\*,
SE 0.025), confirming that market-sentiment amplifies election effects; (2) PRICE\_INFO (stock
price informativeness, measured as the country average bid-ask spread, lower = more
informative): negative interaction (PRICE\_INFO × ELECTIONS: -0.001\*\*\*, SE 0.000),
consistent with reduced informativeness dampening the election-risk link; (3) GDP growth ×
ELECTIONS: -0.040\*\*\* (SE 0.005), confirming strong economic growth mitigates the effect;
(4) GOV.EXP × ELECTIONS: -0.002\* (SE 0.001), fiscal expansion partially buffers.
These results tie back to the hypotheses in Section 2 and establish that multiple channels
operate simultaneously.

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
was extracted by an LLM on 2026-06-25 and is **not human-verified or independently
reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in
this batch.

> **Attribution (CC BY 4.0).** Kladakis, George, and Alexandros Skouralis.
> "Election cycles and systemic risk."
> *Journal of Banking and Finance* 187 (2026) 107676.
> DOI: 10.1016/j.jbankfin.2026.107676. © 2026 The Author(s).
> Published by Elsevier B.V. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
