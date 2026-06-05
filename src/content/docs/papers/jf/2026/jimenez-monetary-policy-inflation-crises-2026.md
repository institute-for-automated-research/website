---
title: "Monetary Policy, Inflation, and Crises: Jimenez, Kuvshinov, Peydro & Richter (2026)"
description: >-
  Distilled: A U-shaped monetary policy rate path (prolonged cuts followed by
  hikes) substantially raises banking crisis risk across 17 countries from 1870
  to 2020, via credit and asset price boom-bust cycles, with loan-level
  evidence from Spain confirming the credit supply channel. J. Finance 2026,
  CC BY 4.0. Ten core results with source locators, datasets used, the
  empirical specifications, and identification strategy.
sidebar:
  label: Jimenez-Kuvshinov-Peydro-Richter 2026
  order: 1
tags: [paper-summary, macro, banking, monetary-policy, financial-crises,
       credit-cycles, panel-regression, instrumental-variables, event-study,
       open-access, cc-by, peer-reviewed, unreplicated,
       data:jst-macrohistory, data:spain-cir]
paper:
  authors: Gabriel Jimenez, Dmitry Kuvshinov, Jose-Luis Peydro, Bjorn Richter
  authorList:
    - { family: Jimenez, given: Gabriel, affiliation: Banco de Espana }
    - { family: Kuvshinov, given: Dmitry, affiliation: "Universitat Pompeu Fabra, Barcelona School of Economics, and CEPR" }
    - { family: Peydro, given: Jose-Luis, affiliation: "LUISS University, EIEF, and CEPR" }
    - { family: Richter, given: Bjorn, affiliation: "Nova SBE, UPF, and BSE" }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 923-970
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70023
  jel:
    codes: [E52, G01, G21]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics:
    - Banking stability, regulation, efficiency
    - Global Financial Crisis and Policies
    - "Italy: Economic History and Contemporary Issues"
  dataAccess: proprietary-confidential
  outcome:
    - systemic banking crisis probability
    - loan-level default probability
    - bank profitability and loan losses
    - credit and asset price growth (financial red zone)
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor,
    URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2026-01-27; corroborated by artifact p.923 Creative Commons
    Attribution License notice)
  licenseShort: CC BY 4.0
  access: open
  machineAccess: blocked-paywall (Wiley site wrapper; CC-BY VOR licence confirmed in Crossref DOI metadata 2026-06-01)
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 10
  citedByCount: 0

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables, trilemma-iv, event-study, difference-in-differences]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [moral-hazard, intermediary-constraint]

  scope:
    region: global (17 advanced economies) and Spain
    assetClass: banking sector, corporate loans, credit and house prices
    period: 1870-01..2020-12
    frequency: annual
    dataType: [administrative, accounting, market]
    granularity: [aggregate, transaction]
    n: "77 crisis observations across 17 economies (1870-2020); 1.9 million bank-firm-quarter loan observations (Spain credit growth); 1.1 million loan observations (Spain defaults)"

  relatesTo:
    - { cite: "Schularick & Taylor (2012)", doi: "10.1257/aer.102.2.1029", relation: extends, note: "extends their credit-boom-as-crisis-predictor result by showing U-shaped monetary rate path is the key conditioning factor" }
    - { cite: "Greenwood et al. (2022)", doi: "10.1111/jofi.13105", relation: builds-on, note: "uses their financial red zone definition (joint high credit and asset price growth) as the mechanism variable" }
    - { cite: "Jorda, Schularick & Taylor (2016a)", doi: '10.1093/epolic/eiv017', relation: builds-on, note: "uses their macrohistory database of 17 advanced economies and banking crisis chronology" }
    - { cite: "Jorda, Schularick & Taylor (2020)", doi: "10.1016/j.jmoneco.2019.01.021", relation: builds-on, note: "follows their trilemma IV strategy for instrumenting monetary rate changes" }
    - { cite: "Baron, Verner & Xiong (2021)", doi: '10.1093/qje/qjaa034', relation: tests, note: "results robust to their alternative crisis chronology based on bank stock returns" }
    - { cite: "Boissay et al. (2023)", doi: '10.2139/ssrn.4201911', relation: tests, note: "empirical findings are consistent with their New Keynesian model of U-shaped monetary policy and endogenous crises" }
    - { cite: "Grimm et al. (2023)", doi: '10.1093/restud/rdag044', relation: contradicts, note: "differ on mechanism: this paper uses nominal rates and shows the full path (not just loose policy) matters; also adds administrative loan-level evidence" }
    - { cite: "Jimenez et al. (2012)", doi: "10.1257/aer.102.5.2301", relation: builds-on, note: "Spain CIR loan-level methodology for identifying credit supply vs demand channels" }
    - { cite: "Jimenez et al. (2014)", doi: "10.3982/ecta11105", relation: builds-on, note: "Spain CIR approach to bank risk-taking and monetary policy" }

  openQuestions:
    - "Why policymakers cut monetary rates over extended periods, potentially creating financial vulnerabilities, and how the interaction between monetary policy dynamics and other policies (banking supervision, macroprudential regulation) influences crisis risk (p. 966)."
    - "Whether the findings generalize to the most recent 2022-2023 rate-hiking cycle, where the economy was not in a red zone prior to hikes because the boom following COVID-era cuts was shorter than in typical pre-crisis episodes (implied by discussion on pp. 958, 966)."

  findings:
    - { ref: R1, outcome: systemic banking crisis probability, metric: coefficient, value: "U-shape 55% conditional vs 27% unconditional; 100% for post-WWII deep crises", direction: positive }
    - { ref: R2, outcome: systemic banking crisis probability, metric: pp-effect, value: "18% three-year crisis frequency vs 10% unconditional; deep crisis 12% vs 1-4%", direction: positive, vsBenchmark: "above unconditional crisis base rate" }
    - { ref: R3, outcome: systemic banking crisis probability, metric: coefficient, value: "interaction = 0.03** (s.e. 0.01); sum of coefficients approx 0.09", direction: positive }
    - { ref: R4, outcome: systemic banking crisis probability, metric: coefficient, value: "IV interaction = 0.07** (s.e. 0.03); sum approx 0.10-0.12", direction: positive }
    - { ref: R5, outcome: systemic banking crisis probability, metric: coefficient, value: "recession regression interaction = 0.02 (s.e. 0.01), insignificant", direction: none }
    - { ref: R6, outcome: credit and asset price growth (financial red zone), metric: pp-effect, value: "residual U + red zone = 45% crisis frequency vs 36% any U + red zone", direction: positive, vsBenchmark: "above any-U-shape plus red zone base" }
    - { ref: R7, outcome: credit and asset price growth (financial red zone), metric: coefficient, value: "R-zone x rate hike = 0.18*** (OLS, s.e. 0.05) to 0.38*** (IV, s.e. 0.15)", direction: positive }
    - { ref: R8, outcome: loan-level default probability, metric: coefficient, value: "Cut = 4.80** (col. 2); Cut x Bank NPL ratio = 2.62** (col. 3)", direction: positive }
    - { ref: R9, outcome: bank profitability and loan losses, metric: basis-points, value: "Cut = -0.20*** (col. 1); Cut x Bank NPL ratio = -0.13*** to -0.32*** (cols. 2-5)", direction: negative, vsBenchmark: "below baseline cost of debt without cuts" }
    - { ref: R10, outcome: loan-level default probability, metric: coefficient, value: "Delta_3Rate x Cut = 0.005*** (col. 3); quadruple interaction = 0.005*** (col. 6)", direction: positive }
  resultType: overturns

  replicationCode:
    status: available

  proposedVocab:
    - { axis: topic, term: banking-crises, def: "Systemic banking crisis risk and the macroeconomic conditions that precede and follow them, distinct from market microstructure or individual bank failure.", aliases: [financial-crises, banking-crisis] }
    - { axis: topic, term: monetary-policy, def: "Effects of central bank interest rate policy (levels and paths) on credit, asset prices, financial stability, and the real economy.", aliases: [interest-rate-policy, central-bank-policy] }
    - { axis: topic, term: credit-cycles, def: "Boom-bust dynamics in credit aggregates and asset prices over multi-year horizons, often preceding banking crises.", aliases: [credit-booms, boom-bust-cycles] }

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Full text read (pp. 923-970, 48 pages); ten results extracted from the
        source PDF. Not human-verified. Not reproduced. Replication code is
        referenced in the paper (Supporting Information) but has not been run
        here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; three
        fixes applied: R8 Cut*BankNPL significance corrected from *** to ** (Table
        XI Panel A col. 3); R6 deep-crisis U+R-zone frequency corrected from 30% to
        23% (Table VIII col. 2; 30% is post-WWII deep, col. 4); R10 Delta_3Rate*Cut
        interaction corrected from 0.003 to 0.005 (Table XII col. 3). All equations
        (eq. 1-6), locators, and remaining magnitudes confirmed against PDF.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-03
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-03
      role: verified
      note: >-
        Classification axes re-checked against the source PDF; one fix applied,
        mechanisms changed from [moral-hazard, financial-constraint] to
        [moral-hazard, intermediary-constraint] (paper invokes bank risk-taking
        and search-for-yield and loan-loss / bank-stress channels, not a firm
        financing-constraint wedge); identification instrument, contributionType
        [new-fact], introducesData absent, and data-scope fields all confirmed
        correct.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-04
      role: extracted
      note: >-
        Added the effectiveness axis (findings[] per Core-results row,
        resultType) built from the page's already-verified Core-results table and
        relatesTo edges; existing results and sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-04
      role: verified
      note: >-
        Effectiveness axis (findings[] values/direction, resultType) re-checked
        against the source PDF; all ten findings[] values and directions confirmed
        correct against Tables I-XII; one fix applied: resultType changed from
        new-finding to overturns, consistent with the contradicts edge to Grimm
        et al. (2023) per template rule (contradicts headline -> overturns).
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70023
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/,
        delay-in-days=0, start=2026-01-27; license[1] is TDM only.
        Artifact p.923 carries Creative Commons Attribution License notice.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification strategy (trilemma IV),
and the key empirical specifications with equations: enough to know what it found and how,
without reading all 48 pages. To replicate or extend, read the full source at the
[original](https://doi.org/10.1111/jofi.70023).

## TL;DR

The paper shows that what matters for banking crisis risk is not the level of
monetary policy rates, but the full path: a U-shaped path of prolonged cuts
followed by hikes is associated with roughly double the unconditional crisis
probability. Using long-run data for 17 advanced economies back to 1870 and
Spanish loan-level administrative data (1995 to 2008), the paper finds that
prolonged rate cuts fuel credit supply expansions and asset price booms (the
financial red zone), and that subsequent rate hikes crystallize these
vulnerabilities into crises, primarily through realized credit risk rather
than interest rate risk. Neither cuts alone nor hikes alone are strongly
linked to crises; it is the combination that matters.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | U-shaped monetary rate path is more than twice as frequent before banking crises as unconditionally; 100% of deep post-WWII crises preceded by U shape | Table I, p. 935 | Crisis conditional frequency: U shape 55% (all crises) vs 27% unconditional; 100% for post-WWII deep crises |
| R2 | U-shaped rate path is associated with 18% three-year crisis frequency, roughly double the 10% unconditional probability; deep and post-WWII crises show even larger gaps | Table II, p. 936 | U shape: 18%`***` crisis frequency vs 6-9% for other rate paths; deep crisis: 12%`***` vs 1-4% |
| R3 | OLS regression: the interaction of rate hikes with previous cuts (U-shape) significantly raises crisis probability; 1 ppt hike after cuts raises three-year crisis probability by 9 ppts (sum of coefficients) | Table III col. (2), p. 939 | $$\Delta_3\text{Rate} \times \text{Cut}$$ interaction = 0.03`**` (s.e. 0.01); sum of first three coefficients approx 0.09 |
| R4 | IV result (trilemma instrument): 1 ppt rate increase over three years, after rates were cut for five years, raises three-year crisis probability by approximately 10 to 12 ppts | Table III col. (4), p. 939-940 | $$\Delta_3\text{Rate} \times \text{Cut}$$ (IV) = 0.07`**` (s.e. 0.03); sum approx 0.10-0.12; Kleibergen-Paap weak ID = 27.48 |
| R5 | U-shaped rates are not associated with nonfinancial recession risk; for recessions the interaction term is small and insignificant | Table IV, p. 942 | $$\Delta_3\text{Rate} \times \text{Cut}$$ in recession regression = 0.02 (s.e. 0.01), insignificant; rate level alone raises recession risk |
| R6 | A residual (above-and-beyond-systematic) U-shaped monetary path raises the three-year crisis frequency to 26%; combining the residual U shape with the financial red zone raises it to 45% (all crises), versus 36% for any U-shaped path with a red zone and 22% for a systematic U shape with a red zone | Tables V and VIII, pp. 943, 951 | Strong residual U crisis frequency: 26% (Table V, all crises). Table VIII: any U-shape + red zone = 36% (Panel A, 18/50); residual U-shape + red zone = 45% (Panel B, 14/30 all crises; 48% post-WWII, 11/22); systematic U-shape + red zone = 22% (3/15) |
| R7 | Red zones (high credit and asset price growth) are strongly associated with future crises only if preceded by a U-shaped monetary rate path; monetary rate hikes while in the red zone raise crisis risk (R-zone x rate hike interaction = 0.18`***` to 0.38`***`) | Tables VII and IX, pp. 950, 953 | $$\text{R-zone} \times I(\Delta_3\text{Rate} \geq 0)$$ = 0.18`***` (OLS, s.e. 0.05), 0.38`***` (IV, s.e. 0.15); R-zones pre-raised: interaction 0.22`***` (OLS, s.e. 0.08) |
| R8 | Spain loan level: monetary rate cuts increase credit growth, especially from weaker banks to riskier firms; 1 ppt cut raises credit growth by 4.8 ppt at the bank-firm level, rising 2.8 ppt further per interquartile increase in bank NPL ratio | Table XI Panel A, p. 962 | $$\text{Cut}$$ = 4.80`**` (col. 2); $$\text{Cut} \times \text{Bank NPL ratio}$$ = 2.62`**` (col. 3); triple interaction with real estate firms: up to 7.9 ppt additional (col. 6) |
| R9 | Spain loan level: monetary rate cuts reduce firm cost of debt by 20 bps on average, with larger reductions for firms borrowing from weaker (high-NPL) banks, consistent with credit supply and mispricing | Table XI Panel B, p. 962 | $$\text{Cut}$$ = -0.20`***` (col. 1); $$\text{Cut} \times \text{Bank NPL ratio}$$ = -0.13`***` to -0.32`***` (cols. 2-5) |
| R10 | Spain loan level: U-shaped monetary path raises loan default probability; 1 ppt rate hike after cuts raises three-year delinquency probability by 11.2% relative, with effects stronger for loans by weaker banks to real estate firms | Table XII, pp. 964-965 | $$\Delta_3\text{Rate}$$ (col. 3) = 0.002`***`; $$\text{Cut}$$ = 0.011`***`; $$\Delta_3\text{Rate} \times \text{Cut}$$ (col. 3) = 0.005`***`; quadruple interaction ($$\Delta_3\text{Rate} \times \text{Cut} \times \text{Bank NPL} \times \text{Real estate}$$, col. 6) = 0.005`***` |

**Overall (paper's conclusion).** The dynamic path of monetary policy rates is
crucial for financial stability. Prolonged rate cuts fuel credit and asset price
booms through credit supply (including bank risk-taking and mispricing), and
subsequent rate hikes crystallize these vulnerabilities into banking crises
through realized credit risk. Neither the red zone alone nor U-shaped monetary
rates alone are sufficient to produce a high crisis probability; their
combination is what generates the largest crisis risks historically (p. 965-966).
This differs from Grimm et al. (2023) on mechanism: where they emphasize loose
policy, this paper uses nominal rates to show the full U-shaped path (not just the
easing leg) matters, and adds administrative loan-level evidence.

## Theory / model

The paper has no structural model. It tests a path-dependency hypothesis:
crisis risk depends not on the current level of monetary rates but on the
sequence of cuts and subsequent hikes. The economic mechanism it proposes is
consistent with the theoretical framework of Boissay et al. (2023), in which
a long period of monetary loosening triggers an investment and credit boom
and a search for yield/risk-taking; the subsequent tightening then collapses
credit markets through the fear of loan defaults.

**Identification strategy.** The key endogeneity concern is that central banks
raise rates when the economy (and the financial sector) is overheating,
so a positive correlation between rate hikes and crisis risk could reflect
omitted financial-sector vulnerabilities rather than a causal effect. The
paper addresses this by:

1. Controlling for contemporaneous and eight lags of country-level and global
   GDP growth and inflation in all specifications.
2. Residualizing monetary rate changes with respect to the main business-cycle
   variables (GDP growth, inflation, investment, consumption, current account,
   short- and long-term rates, decade fixed effects) to separate the systematic
   from the discretionary component.
3. Using the Mundell trilemma instrumental variable (see Method section), which
   exploits variation in base-country monetary policy transmitted through
   fixed-exchange-rate pegs and open capital accounts (Jorda, Schularick, and
   Taylor, 2020).

The paper shows the U-shape result is present for both raw and residualized
rate changes, and that the effect is larger for the residual (discretionary)
component, ruling out the possibility that the U shape merely reflects
mechanical policy responses to business-cycle conditions.

## Method

**Crisis-window regressions (equation 1, p. 932).**

$$
y_{i,t+h} - y_{i,t} = \alpha_{i,h} + \alpha_{d,h} + \beta_h \cdot 1[\text{Crisis}_{i,t}=1] + \epsilon_{i,t+h}
$$

- $$h = -7, \ldots, 0, \ldots, 7$$: years relative to crisis onset
- $$y$$: monetary policy rate level
- $$\alpha_i$$: country FE; $$\alpha_d$$: decade FE

This plots the average path of monetary rates around historical crisis events,
with 90% confidence intervals, for different crisis definitions and subsamples.

**Linear probability model for crisis risk (equation 2, p. 937-938).**

$$
\text{Crisis}_{i,t\text{ to }t+2} = \alpha_i + \beta_1 \cdot \Delta_3\text{Rate}_{i,t} + \beta_2 \cdot \text{Cut}_{i,t-8,t-3}
  + \beta_3 \cdot \Delta_3\text{Rate}_{i,t} \times \text{Cut}_{i,t-8,t-3}
  + \gamma \cdot X_{i,t} + u_{i,t}
$$

- $$\Delta_3\text{Rate}$$: three-year change in monetary policy rate (ppts)
- $$\text{Cut}$$: 1 if monetary rates were cumulatively cut (t-8 to t-3)
- $$X$$: contemporaneous values and eight lags of local and global inflation and GDP growth
- SE: Driscoll-Kraay (five lags) to account for cross-country, cross-time correlation

The coefficient $$\beta_3$$ is the U-shape test: it captures whether rate hikes
are especially crisis-inducing when preceded by prolonged cuts.

**Trilemma IV (equation 3, p. 938).**

$$
\text{Trilemma IV}_{i,t} = \Delta\text{Rate}^{\text{Residual}}_{b(i),t} \times \text{PEG}_{i,t} \times \text{PEG}_{i,t-1} \times \text{KOPEN}_{i,t}
$$

- $$\Delta\text{Rate}^{\text{Residual}}_{b(i),t}$$: residualized monetary rate change of the base country $$b(i)$$ (e.g. Germany for ERM members)
- $$\text{PEG}$$: 1 if fixed exchange rate regime
- $$\text{KOPEN}$$: degree of capital account openness (Quinn-Schindler-Toyoda rescaled)

The IV strategy instruments $$\Delta_3\text{Rate}$$ with the three-year change in the
residualized trilemma variable, and the interaction with $$\text{Cut}$$ with the
trilemma variable interacted with the cut dummy. Standard errors remain
Driscoll-Kraay. First-stage Kleibergen-Paap weak ID statistics are well above
conventional thresholds (27.48 to 65.68 across columns; Table III, p. 939).

**Local projections for red zone interaction (equation 4, p. 954).**

$$
\Delta_h y_{i,t} = \alpha_{i,h} + \beta_{1,h} \cdot \Delta\text{Rate}_{i,t} + \beta_{2,h} \cdot I(\Delta_3 y_{i,t} \geq \text{Rz})
  + \beta_{3,h} \cdot \Delta\text{Rate}_{i,t} \times I(\Delta_3 y_{i,t} \geq \text{Rz})
  + \gamma \cdot X + \epsilon_{i,t+h}, \quad h = 1, \ldots, 10
$$

- $$y$$: household credit, house prices, business credit, or equity prices
- $$\text{Rz}$$: red zone threshold (80th pctile for credit, 66.7th pctile for asset prices, following Greenwood et al. 2022)
- $$\beta_{3,h}$$: main coefficient: does a rate hike reverse vulnerabilities more strongly when the financial variable is already elevated?
- SE: Driscoll-Kraay with $$1.5 \times h$$ lags; 10% confidence intervals

**Spain loan-level credit supply regression (equation 5, p. 960).**

$$
\Delta y_{i,j,t} = \beta_1 \cdot \text{Cut}_{t-5,t} + \beta_2 \cdot \text{Cut}_{t-5,t} \times \text{Bank risk}_{i,t-1}
  + \beta_3 \cdot \text{Cut}_{t-5,t} \times \text{Bank risk}_{i,t-1} \times \text{Firm risk}_{j,t-1}
  + \gamma_1 \cdot F_{j,t-1} + \gamma_2 \cdot B_{i,t-1} + \gamma_3 \cdot M_t + u_{i,j,t}
$$

- $$\Delta y$$: log change in credit granted by bank $$i$$ to firm $$j$$
- $$\text{Cut}$$: 1 if overnight rates were below their average between t-5 and t
- $$\text{Bank risk}$$: bank NPL ratio (proxy for ex ante bank risk)
- $$\text{Firm risk}$$: 1 if firm is in construction/real estate sector
- $$F$$: firm-level controls (industry, location) and FE
- $$B$$: bank-level controls and FE
- $$M$$: macro controls and time FE; also firm*bank and firm*time FE variants
- SE: clustered at time and bank levels

**Spain loan-level default regression (equation 6, p. 963).**

$$
\text{Loan Default}_{i,j,t,t+3} = \beta_1 \cdot \Delta_3\text{Rate}_{t,t+3} + \beta_2 \cdot \text{Cut}_{t-5,t}
  + \beta_3 \cdot \Delta_3\text{Rate}_{t,t+3} \times \text{Cut}_{t-5,t}
  + \gamma_1 \cdot F_{j,t-1} + \gamma_2 \cdot B_{i,t-1} + \gamma_3 \cdot M_t + u_{i,j,t,t+3}
$$

- $$\text{Loan Default}$$: 1 if loan becomes delinquent (>90 days overdue) in t+1 to t+3
- $$\Delta_3\text{Rate}$$: ppt change in monetary rate between t and t+3
- $$\beta_3 > 0$$: hikes are more crisis-inducing when preceded by cuts (U-shape test)
- SE: clustered at time and bank levels

## Empirical specifications

The headline results tie to the following specification choices:

- **Macro panel (R1-R7).** Sample: 17 advanced economies, 1870 to 2020, 87
  banking crises (Jorda, Schularick, and Taylor 2016a chronology), annual
  frequency. Baseline uses the narrative crisis definition of Schularick and
  Taylor (2012). Robustness: Baron, Verner, and Xiong (2021) crisis dates;
  probit vs linear probability models; one-year vs three-year crisis windows;
  alternative rate-path window lengths; global credit-growth controls; decade
  fixed effects (Table III; Internet Appendix Tables IA.VI-IA.XI).

- **U-shape path classification.** An eight-year window is classified into four
  shapes based on the direction of the cumulative change in t-8 to t-3 and
  in t-3 to t. U shape = cumulative cut in the first five years followed by
  a raise in the last three years. This classification is used in frequency
  comparisons (Tables I, II, V, VIII) and interacted with rate changes in
  regression (equation 2).

- **Financial red zone (R7, R8 mechanism).** Defined following Greenwood et al.
  (2022) as periods when both credit growth (above the 80th percentile of the
  three-year change in the credit-to-GDP ratio) and asset price growth (above
  the 66.7th percentile of three-year real asset price changes) are
  simultaneously elevated. Computed separately for household and business
  sectors. Used as a mechanism variable to test whether the U-shape crisis
  effect runs through financial booms.

- **Spain micro panel (R8-R10).** The loan-level analysis follows the Spain CIR
  approach to bank risk-taking and monetary policy of Jimenez et al. (2014) and
  the CIR loan-level methodology for separating credit supply from credit demand
  of Jimenez et al. (2012). Sample: 10% random sample of Spanish
  nonfinancial corporate loans from the Central de Informacion de Riesgos
  (CIR), quarterly 1995 Q1 to 2008 Q3, matched to bank supervisory data and
  firm Mercantile Register data. Credit growth regressions: 1.9 million
  bank-firm-quarter observations. Cost of debt regressions: 1.2 million
  firm-year observations. Default regressions: 1.1 million loan observations
  (sample ends at 2011 Q3 to allow three-year default look-ahead). Fixed-effect
  saturation reaches firm-time and bank-time FE in the most demanding
  specifications (Table XI col. 6, Table XII col. 5-6).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Jorda-Schularick-Taylor (JST) Macrohistory Database | Monetary policy rates, banking crisis chronology, macro controls (GDP, inflation, credit, investment) for 17 advanced economies 1870-2020 | no page yet |
| Greenwood et al. (2022) financial red zone data | Credit-to-GDP and asset price growth series to define the financial red zone mechanism variable | no page yet |
| Baron, Verner & Xiong (2021) BVX crisis chronology | Alternative crisis dates using bank equity returns for robustness | no page yet |
| Spain Central de Informacion de Riesgos (CIR) | Loan-level monthly data on all corporate loans by Spanish banks 1984 to 2008 Q3 (10% random sample used); credit volumes, maturities, defaults | no page yet |
| Spain Mercantile Register (Registro Mercantil) | Annual firm balance sheet and income statement data; financial expenses over liabilities as cost-of-debt proxy | no page yet |
| Banco de Espana bank supervisory data | Bank-level balance sheet characteristics (total assets, capital ratio, liquidity, ROA, NPL ratio) matched to CIR | no page yet |
| Quinn-Schindler-Toyoda (2011) KOPEN index | Rescaled capital account openness measure for trilemma IV construction | no page yet |

Sample scope: macro panel covers 17 advanced economies (Australia, Belgium, Canada, Denmark, Finland, France, Germany, Italy, Japan, Netherlands, Norway, Portugal, Spain, Sweden, Switzerland, UK, US), annually 1870 to 2020 (77 crisis observations after data availability filters). Spain panel covers quarterly 1995 to 2008 Q3 (boom period) and defaults through 2011 Q3.

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.70023) if you are:
studying banking crisis predictors and want the full robustness battery (30+
Internet Appendix tables); extending the trilemma IV to other contexts;
building on the financial red zone mechanism to study credit supply dynamics;
analyzing the 2022-2025 rate-hiking cycle as a potential U-shape episode;
or using the Spanish CIR administrative data methodology for loan-level
identification of credit supply. Tables III and XII contain the key
specifications; Figures 2 and 3 show the event-study path estimates.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). This distillation
was extracted by an LLM on 2026-06-01 and is **not human-verified or
independently reproduced**. The CC BY 4.0 licence permits mirroring; the
verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Jimenez, Gabriel, Dmitry Kuvshinov,
> Jose-Luis Peydro, and Bjorn Richter.
> "Monetary Policy, Inflation, and Crises: Evidence from History and
> Administrative Data."
> *The Journal of Finance* 81, no. 2 (April 2026): 923-970.
> DOI: 10.1111/jofi.70023. (C) 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
