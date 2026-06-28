---
title: "Permanent Capital Losses after Banking Crises: Baron et al. (2026)"
description: >-
  Distilled: Studying 76 bank equity crises across 46 economies since 1870, this paper
  documents that banking crises produce large, permanent declines in bank capital driven
  by asset write-downs rather than temporary price dislocations, and that forceful liquidity
  interventions restore only a transient fraction of bank value. Historical government
  recapitalizations have been too small, delayed, and narrow to restore banking sector
  capitalization. The Quarterly Journal of Economics, 2026, paywalled. Eight core results
  with source locators, datasets used, and empirical specifications.
sidebar:
  label: Baron et al. 2026
  order: 1
tags: [paper-summary, banking-crises, financial-crises, bank-capital, bank-equity,
       policy-interventions, panel-regression, event-study, peer-reviewed, unreplicated,
       data:bvx, data:jst-macrohistory, data:bsz]
paper:
  authors: Matthew Baron, Luc Laeven, Julien Pénasse, Yevhenii Usenko
  authorList:
    - { family: Baron, given: Matthew, orcid: "0000-0002-4458-5747", affiliation: Georgetown University }
    - { family: Laeven, given: Luc, orcid: "0000-0001-9820-755X", affiliation: European Central Bank }
    - { family: Pénasse, given: Julien, orcid: "0000-0003-3738-4549", affiliation: University of Luxembourg }
    - { family: Usenko, given: Yevhenii, affiliation: MIT Sloan School of Management }
  year: 2026
  venue: The Quarterly Journal of Economics (2026), pp. 667-732
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf052
  tier: top-3
  jel:
    codes: [G01, G12, G15, G21]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Banking stability, regulation, efficiency", "Global Financial Crisis and Policies"]
  dataAccess: public
  introducesData: true
  outcome:
    - bank equity abnormal returns at banking crisis onset
    - long-run bank dividends and earnings per share
    - bank market capitalization relative to precrisis level
  outcomeClass: [security-returns, firm-real-outcomes]
  license: "© 2025 The Author(s). Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford Academic publisher site; Crossref license is CHORUS standard publication model, not open access; 2026-06-28)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [driscoll-kraay-regression, event-study]
    identification: descriptive
  contributionType: [new-data, new-fact]
  mechanisms: [intermediary-constraint, fire-sale-externality]
  scope:
    region: global (46 economies)
    assetClass: bank equities and nonfinancial equities
    period: 1870-01..2019-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [aggregate, firm]
    n: "76 bank equity crises across 46 economies 1870-2019; individual-bank panel for 10 largest banks in 17 economies, N approx. 3,835 country-years in main returns regressions"
  findings:
    - { ref: R1, outcome: bank equity abnormal returns, metric: car, value: "-68 log points (banks) and -36 log points (nonfinancials) at crisis onset; bank cumulative abnormal return at t+3 = -0.263*** (s.e. 0.047), at t+5 = -0.043 (s.e. 0.079)", direction: negative }
    - { ref: R2, outcome: "long-run bank earnings and dividends per share", metric: coefficient, value: "country-level earnings coefficient = 1.750*** (s.e. 0.408); dividends = 2.483*** (s.e. 0.545); bank-level earnings = 0.981*** (s.e. 0.218), with crisis FEs = 0.792*** (s.e. 0.213)", direction: positive, vsBenchmark: "near-zero coefficient predicted by temporary-loss (discount-rate) view" }
    - { ref: R3, outcome: bank equity cumulative return from crisis trough, metric: car, value: "peak bounce-back from trough = ~30% of initial decline; gains partially reverse after ~12 months; no recovery to precrisis level by t+5", direction: mixed }
    - { ref: R4, outcome: cumulative bank book income components, metric: coefficient, value: "cumulative write-downs by t+5 = -0.338*** of precrisis book equity; write-downs account for ~100% of market-value losses by t+5; trading income = small fraction", direction: negative }
    - { ref: R5, outcome: bank equity unlevered cumulative return vs peak NPL rate, metric: r-squared, value: "adj. R2 = 0.232 (full sample); adj. R2 = 0.529 excluding USA 1990 and SWE 1991 outliers; relationship statistically significant", direction: negative }
    - { ref: R6, outcome: bank equity after liquidity-based intervention, metric: car, value: "within 2 months equity continues to decline; bank equity then rises ~20%; gain reverses between months 12 and 36; no persistent increase in bank capitalization", direction: mixed }
    - { ref: R7, outcome: government recapitalization size relative to bank losses, metric: level, value: "mean = 24% of precrisis book equity; 43% of market-value losses; 65% of programs narrow (few banks targeted)", direction: none }
    - { ref: R8, outcome: probability of banking crisis aversion by early liquidity intervention, metric: probability, value: "~50% of 183 incipient panics without prior equity decline averted; 75% of bank equity crises show equity decline strictly before the panic; essentially 0 averted once large equity decline has occurred", direction: positive, vsBenchmark: "essentially no bank equity crises averted after large equity decline already occurs" }
  resultType: overturns
  relatesTo:
    - { cite: "Baron, Verner & Xiong (2021)", doi: '10.1093/qje/qjaa034', relation: builds-on, note: "BVX country-level bank and nonfinancial equity index data; bank equity crisis definition refined from BVX's definition" }
    - { cite: "Jordà, Schularick & Taylor (2017)", doi: '10.1093/epolic/eiv017', relation: builds-on, note: "JST macrohistory database used for individual-bank microdata in 17 economies" }
    - { cite: "Laeven & Valencia (2020)", doi: '10.1057/s41308-020-00107-3', relation: extends, note: "extends their policy intervention database by adding monthly start dates and a detailed recapitalization program database" }
    - { cite: "Gertler & Kiyotaki (2015)", doi: '10.1257/aer.20130665', relation: contradicts, note: "their prediction that liquidity interventions rapidly restore bank value is inconsistent with the finding of only a transient and reversed bank equity rebound" }
    - { cite: "Schularick & Taylor (2012)", doi: '10.1111/jmcb.12069', relation: cites, note: "credit boom-bust as predictor of crisis severity; consistent with permanent-loss interpretation" }
  openQuestions:
    - "Whether the causal counterfactual of bank equity without policy interventions can be identified: both liquidity interventions and recapitalizations are endogenous, so the paper measures their historical correlation, not a causal effect (pp. 712, 715)."
    - "Other potential sources of permanent bank value loss not analyzed here, including reduced future profitability from regulatory limits on risk-taking, increased compliance costs, reduced reputational value, and decreased fee-based income (footnote 15, p. 701)."
    - "Whether the detailed bank-level results (income decomposition, recapitalization statistics) can be extended beyond the 17 JST economies to the full 46-economy sample, where historical bank financial statements were unavailable (p. 680)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/NCUHLW
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full text read (pp. 667-732 plus appendix references); eight results extracted. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: JEL code G12 added (G01, G12, G15, G21 per p. 667) and R6 timing corrected (within 2 months equity continues to decline per p. 712, not rise; ~20% rise comes after that initial decline)." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "FLAG 1: Italy topic removed; paper is a 46-economy global study, Italy appears only as one of many country episodes in Table V (pp. 716-721). FLAG 2: R7 metric corrected from probability to level; the three values (24% book equity, 43% losses, 65% narrow) are descriptive summary statistics confirmed at Table V p. 721 and prose p. 722, not predicted probabilities." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf052", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-11-04; CHORUS standard publication model (paywalled, not CC-licensed)" }
---

**What this is.** The paper's core results, identification strategy, datasets, and empirical
specifications: enough to know what it found and how. To replicate or extend, read the full
source at the [original](https://doi.org/10.1093/qje/qjaf052).

## TL;DR

The paper studies the mechanisms driving bank losses across historical banking crises
in 46 economies and the effectiveness of policy interventions in restoring bank
capitalization. It constructs several new historical datasets: a country-level panel of
bank and nonfinancial equity returns (extending Baron, Verner and Xiong (2021), henceforth
BVX), individual-bank-level balance sheet and income data for the 10 largest banks in 17
economies around each crisis (building on Jordà, Schularick and Taylor (2017), henceforth
JST), and a comprehensive database of policy interventions extending Laeven and Valencia (2020).
The central finding is that bank stock prices experience large, permanent declines at banking
crisis onset, predicting commensurate long-run declines in banks' earnings and dividends rather
than elevated future equity returns. This earnings-driven pattern is inconsistent with models
that posit bank losses are primarily due to temporary price dislocations or liquidity strains.
Write-downs on nonperforming assets account for the bulk of realized bank losses; asset
sales during panics contribute little on average. Liquidity-based interventions (central bank
support, blanket liability guarantees) provide only a transient rebound in bank equity that
reverses within 12-36 months. Historical government recapitalizations have been too small,
delayed, and narrow to restore banking sector capitalization.

## Core results

Magnitudes and significance as reported; \* = 10%, \*\* = 5%, \*\*\* = 1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Bank equity has large, permanent abnormal declines at crisis onset; no elevated returns in years t+1 to t+5** | Figure I, p. 685; Table II Panel A, p. 687 | Average abnormal return: -68 log points (banks), -36 log points (nonfinancials) at crisis onset; bank cumulative abnormal return at t+3 = -0.263\*\*\* (s.e. 0.047); at t+5 = -0.043 (s.e. 0.079); nonfinancials at t+5 = +0.313\*\*\* (s.e. 0.081) |
| R2 | **Initial bank equity declines predict long-run earnings and dividend declines** (earnings-driven, not discount-rate-driven) | Table III, p. 695 | Country-level: coeff. on 5-yr log-change in earnings per share = 1.750\*\*\* (s.e. 0.408); dividends = 2.483\*\*\* (s.e. 0.545); bank-level: earnings = 0.981\*\*\* (s.e. 0.218); with crisis FEs = 0.792\*\*\* (s.e. 0.213) |
| R3 | **Even with perfect trough timing, bounce-back averages only ~30% of initial decline; gains reverse after ~12 months** | Figure II, pp. 691-692 | Peak bounce-back from trough = ~30% of initial bank equity decline; gains begin reversing after approximately one year; banks do not recover to precrisis levels by t+5 |
| R4 | **Write-downs account for nearly all bank losses; trading losses from asset sales during panics are small on average** | Figure IV, Table IV, pp. 703-706 | Cumul. write-downs by t+5 = -0.338\*\*\* of precrisis book equity; write-downs account for approx. 100% of market-value losses by t+5; trading income = small fraction; banks with large securities portfolios show larger immediate trading losses |
| R5 | **Countries with larger bank equity declines exhibit higher subsequent NPL rates** (consistent with asset quality as primary mechanism) | Figure V, p. 709 | Adj. R² = 0.232 (full sample); adj. R² = 0.529 excluding USA 1990 and SWE 1991 outliers; relationship statistically significant across advanced economies |
| R6 | **Liquidity-based interventions yield only a transient ~20% bank equity rebound that reverses by months 12-36** | Figure VI, pp. 711-712 | Within two months of intervention, bank equity continues to decline; bank equity then rises by about ~20%, but this gain is short-lived; gains reverse between months 12 and 36; no persistent or large increase in bank capitalization from liquidity support or liability guarantees |
| R7 | **Government recapitalizations are small (~24% of book equity, ~43% of losses), delayed, and narrow** | Table V, Figure VII, pp. 715-722 | Mean recap size: ~24% of precrisis book equity; ~43% of market-value losses; 65% of programs narrow (few banks targeted); median delay ~8-9 months from panic start; bank market cap remains persistently lower 5 years after crisis |
| R8 | **Early liquidity interventions can avert incipient panics only before large equity declines occur**; 75% of bank equity crises feature equity decline strictly preceding the panic | Section VI, pp. 725-728 | Of 183 incipient liquidity shocks without prior bank equity decline: ~92 (~50%) averted by early intervention; of 76 bank equity crises: 57 (75%) show equity decline before any panic; essentially no bank equity crises averted by liquidity intervention after large equity decline has occurred |

**Overall (paper's conclusion).** Bank equity crises produce permanent capital losses driven by
deteriorating asset quality and eventual write-downs, not temporary price dislocations. Forceful
liquidity policy can avert crises when invoked before fundamental bank equity weakness occurs,
but after large equity declines have materialized, neither liquidity support nor historical
recapitalization programs have reliably restored banking sector capitalization.

## Theory / model

The paper has no formal structural model. It organizes the analysis around two competing
theoretical views and tests their empirical predictions:

**Temporary-loss view.** Several prominent models posit that bank losses during crises are
primarily temporary. Under this view, crises are times when assets held by financial
intermediaries trade at sharp discounts due to binding borrowing constraints or temporary
illiquidity (e.g., Gertler and Kiyotaki (2015); He and Krishnamurthy (2012); Dang, Gorton,
and Holmstrom (2020)). The temporary-loss view predicts: (i) elevated bank equity returns in
the years following a crisis, as discount rates normalize; (ii) limited long-run declines in
bank dividends and earnings; and (iii) large and lasting increases in bank equity following
liquidity interventions by central banks.

**Permanent-loss view.** An alternative view holds that banking crises give rise to permanent
bank losses through deterioration in asset quality (e.g., Kaminsky and Reinhart (1999);
Calomiris and Mason (2003); Schularick and Taylor (2012)). Nonperforming assets and borrower
defaults lead to asset impairments, permanently lowering bank equity and earnings. Banks are
slow to recognize these losses in accounting statements, but equity markets price them at crisis
onset. This view predicts: (i) no elevated future bank equity returns; (ii) commensurate
long-run declines in earnings and dividends; (iii) persistent rise in nonperforming loan rates;
and (iv) limited effectiveness of liquidity-based interventions.

The paper defines a "bank equity crisis" as the starting year in which both: (i) the bank
equity index declines by more than 30% in any year within the past five years; and (ii) a
top-20 bank (ranked by total assets) fails within a 0-5 year window around that decline.
This is a real-time, objective indicator based entirely on public information available to
market participants, designed to avoid the retrospective look-ahead bias in narrative crisis
chronologies. The sample contains 76 bank equity crises across 46 economies over 1870-2019.

## Method

The primary estimator is a panel regression with country (or bank) fixed effects and
Driscoll-Kraay standard errors, which allow for arbitrary serial correlation and
cross-sectional dependence across countries. This builds on `driscoll-kraay-regression`.
The event-study-style analysis (`event-study`) traces cumulative coefficients for each
horizon $$h$$ relative to the crisis onset.

**Cumulative abnormal returns.** For each crisis, the paper traces cumulative buy-and-hold
abnormal returns using equation (1) (p. 684):

$$
r_{i,t-k,t+h} = \alpha_i + \beta^h \text{BankEqCrisis}_{i,t} + \varepsilon_{i,t+h} \tag{1}
$$

where $$r_{i,t-k,t+h}$$ is the cumulative log excess total return from year $$t-k$$ to
$$t+h$$ for either the bank or nonfinancial equity index in country $$i$$;
$$\text{BankEqCrisis}_{i,t}$$ equals one if country $$i$$ enters a crisis in year $$t$$;
and $$\alpha_i$$ are country fixed effects. Setting $$k=1$$ normalizes cumulative returns
relative to the year before crisis onset. The coefficient $$\beta^h$$ measures abnormal
returns at horizon $$h$$. Standard errors are Driscoll-Kraay; 95% confidence intervals
for $$h \in [-5, 5]$$ are plotted in Figure I (p. 685) and tabulated in Table II (p. 687).
The key test: if $$\beta^h \leq 0$$ for $$h > 0$$, the temporary-loss view's prediction
of elevated post-crisis returns is rejected.

**Earnings and dividends predictability.** Equations (2a) and (2b) (p. 694) regress the
log-change in real dividends or earnings per share from year $$t-1$$ to $$t+5$$ on the
bank log excess total return in the crisis year, estimated conditional on the start of a
bank equity crisis. At the country level:

$$
\Delta y_{i,t-1,t+5} = \alpha_i + \beta r_{i,t-1,t} + \varepsilon_{i,t} \tag{2a}
$$

At the individual-bank level (banks indexed by $$b$$):

$$
\Delta y_{i,b,t-1,t+5} = \alpha_b + \beta r_{i,b,t-1,t} + \varepsilon_{i,b,t} \tag{2b}
$$

A coefficient $$\beta \approx 1$$ means a 1 log-point initial equity decline predicts an
approximately equal 1 log-point long-run decline in earnings or dividends, supporting the
permanent-loss view. Standard errors are Huber-White at the country level (Panel A) and
clustered by crisis episode at the bank level (Panel B), reported in Table III (p. 695).

**Heterogeneity by market-to-book ratio.** Equation (3) (p. 697) sorts banks into five bins
by their market-to-book (M/B) ratio at crisis onset to assess cross-bank heterogeneity:

$$
\Delta y_{i,b,t,t+5} = \alpha_i + \sum_k \beta_k \left(\frac{M}{B}\right)_{(\text{lower}_k,\, \text{upper}_k),\, i,b,t} + \varepsilon_{i,b,t} \tag{3}
$$

The five bins are M/B ratios 0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, and above 0.8. Country
fixed effects $$\alpha_i$$ are included. Results in Online Appendix Table A.10 show
monotonically worse five-year outcomes for more distressed (low M/B) banks.

**Book income decomposition.** Cumulative abnormal book income is computed relative to each
bank's average precrisis income (years $$t-4$$ to $$t-1$$), normalized by aggregate
precrisis book equity, then averaged across crises in 17 advanced economies. Income is
decomposed into: (i) write-downs (revaluations of balance-sheet assets: loan loss
provisions, impairments, goodwill write-downs); (ii) trading income (realized gains and
losses from securities trading and all asset sales); and (iii) all other book income.
Results in Table IV (p. 705) and Figure IV (p. 703).

## Empirical specifications

All main regressions use annual data conditional on the start of a bank equity crisis.
The primary country-level sample is 76 bank equity crises across 46 economies, 1870-2019;
individual-bank analyses cover the 17 JST economies.

**Returns analysis (R1).** Equation (1) is estimated with $$k=0$$ (cumulative returns
after crisis onset) and $$k=1$$ (normalized to the year before onset). Table II (p. 687)
Panel A reports bank returns and Panel B nonfinancial returns for $$h \in [1, 5]$$, with
panels C-D repeating the analysis using real total returns in place of excess returns.
Driscoll-Kraay standard errors are used throughout; the within-R² is reported as a
measure of explanatory power.

**Earnings and dividends predictability (R2).** Specifications (2a) and (2b) are estimated
by OLS, with the sample restricted to country-years (or bank-years) at the onset of bank
equity crises. The dependent variable is the log-change from year $$t-1$$ to $$t+5$$ in
real earnings per share (columns 1-2 in Table III) or real dividends per share (columns 3-4).
The independent variable is the past one-year bank log excess total return. For bank-level
regressions (Panel B), even-numbered columns add crisis fixed effects, so that the coefficient
captures within-crisis cross-bank heterogeneity (banks harder hit in a given crisis also show
larger long-run earnings declines).

**Income decomposition (R4).** Cumulative abnormal income components are averaged across
37 crisis episodes for the write-down vs. all-other split (Panel A) and 21 crisis episodes
for the three-way split (Panel B). Banks are sorted by the ratio of securities to total assets
in year $$t-1$$ to form top and bottom quartile subsamples (Panels C and D of Figure IV,
p. 703), examining whether banks with large tradeable-securities holdings experience more
immediate trading losses during panics.

**NPL cross-section (R5).** Figure V (p. 709) plots the unlevered cumulative log excess
total return of the bank equity index (from $$t-1$$ to $$t+5$$) against the peak NPL rate
(maximum from $$t$$ to $$t+5$$) across crises in advanced JST economies with available NPL
data. Unlevered returns (returns divided by banking sector book leverage) measure the implied
market value of asset losses. A line of best fit with adjusted R² is shown.

**Liquidity intervention event study (R6).** Using monthly BVX equity index returns, equation
(1) is re-estimated with the event month $$t$$ set to the first month of extraordinary central
bank liquidity support or blanket bank liability guarantee announcement (whichever occurs first)
for each crisis. Cumulative abnormal monthly returns are traced over a $$\pm 60$$ month window
with Driscoll-Kraay standard errors (Figure VI, p. 711).

**Crisis aversion probit (R8).** A probit regression on the full sample of historical banking
events (Online Appendix Table A.17) estimates predictors of crisis aversion using four
binary variables: (i) small bank equity decline preceding the panic (below 30%), (ii) early
liquidity intervention within one month of the panic, (iii) outbreak of war, and (iv) run
initially focused on a single institution (Online Appendix Table A.18).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| BVX equity index data (Baron, Verner and Xiong (2021)) | Country-level bank and nonfinancial equity index total returns for 46 economies, annual 1870-2016 and monthly; primary source for abnormal return analysis and crisis crisis dating | No page yet |
| JST Macrohistory Database (Jordà, Schularick and Taylor (2017)) | Individual-bank balance sheets, income statements, and equity returns for the 10 largest banks in each of 17 economies around each crisis; source for write-down decomposition and bank-level regressions | [JST Macrohistory](/wiki/datasets/jst-macrohistory/) |
| BSZ database (Baron, Schularick and Zimmermann (2024)) | Identities and annual balance sheets of the top-20 banks in 17 economies since 1870; used to identify bank failures and implement the real-time crisis definition | No page yet |
| Policy interventions database (new, this paper) | Monthly starting dates of extraordinary central bank liquidity support, blanket liability guarantees, and government recapitalizations across all 76 bank equity crises; extends Laeven and Valencia (2020) and Metrick and Schmelzing (2024) | No page yet |
| Ari, Chen and Ratnovski (2021) NPL data | Peak nonperforming loan rates for advanced economies used in the cross-crisis NPL scatter (Figure V) | No page yet |

Sample: 46 economies, annual, 1870-2019 for the main returns analysis; 17 JST economies
for individual-bank income decompositions and policy-effectiveness analyses. BVX monthly
data are used for short-horizon bounce-back (Figure II) and intervention event studies
(Figure VI). Replication data are available at Harvard Dataverse:
<https://doi.org/10.7910/DVN/NCUHLW>.

## When to read the full paper

Read the original if you are:

- **Building or calibrating a structural model of banking crises**: Tables II-IV provide empirical
  targets for bank equity dynamics, earnings declines, and write-down timing at both the country
  and individual-bank levels.
- **Assessing the effectiveness of lender-of-last-resort policy vs. recapitalization programs**:
  Sections V and VI cover both types of intervention with historical evidence; Table V documents
  recapitalization size, speed, and breadth across all 17 JST economies since 1870.
- **Studying heterogeneity in crisis outcomes**: Sections III.D-E compare banks sorted by M/B
  ratio; Section VI contrasts bank equity crises to panic-only crises and averted crises.
- **Using the historical banking crisis or policy intervention database**: Online Appendix
  Table A.1 lists all 76 bank equity crisis episodes with policy intervention dates; Table V
  lists individual government recapitalization programs with size, timing, and breadth statistics.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* (2026), pp. 667-732. This
distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or
independently reproduced**. The work is paywalled; reproduction is extract-only.

> Baron, Matthew, Luc Laeven, Julien Pénasse, and Yevhenii Usenko. "Permanent Capital
> Losses after Banking Crises." *The Quarterly Journal of Economics* (2026): 667-732.
> DOI: 10.1093/qje/qjaf052.
