---
title: "Deposit Inflows and Outflows in Failing Banks: Martin, Puri & Ufier (2026)"
description: >-
  Distilled: Using confidential daily account-level FDIC data from a failing U.S. bank,
  this paper shows that gross deposit inflows are first-order in a distressed bank's
  funding dynamics: deposit insurance stabilizes outflows while simultaneously
  enabling large insured deposit inflows that nearly offset departing uninsured
  funds. J. Finance 2026, U.S. Government public domain. Ten core results with
  source locators, datasets used, and the estimating equations.
sidebar:
  label: Martin-Puri-Ufier 2026
  order: 1
tags: [paper-summary, banking, deposit-insurance, bank-runs, financial-stability,
       panel-regression, linear-probability-model, event-study, peer-reviewed,
       unreplicated, data:fdic-supervisory, data:call-reports, data:ratewatch]
paper:
  authors: Christopher Martin, Manju Puri, Alexander Ufier
  authorList:
    - { family: Martin, given: Christopher, affiliation: FDIC }
    - { family: Puri, given: Manju, affiliation: Duke University and NBER }
    - { family: Ufier, given: Alexander, affiliation: FDIC }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 643-685
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70007
  topics:
    - Banking stability, regulation, efficiency
    - Banking Systems and Strategies
    - Credit Risk and Financial Regulations
  dataAccess: proprietary-confidential
  outcome:
    - probability of deposit account liquidation
    - share and log-level of new deposit inflows
    - bank funding composition (brokered, listing-service, term deposits by size)
  license: >-
    U.S. Government work, public domain in the USA (stated on PDF p. 643:
    "This article is a U.S. Government work and is in the public domain in
    the USA."). Wiley VOR licence URL present in Crossref (Wiley T&C), but
    the public-domain assertion on the artifact governs for U.S. works.
  licenseShort: public domain (U.S. Government work)
  access: open
  machineAccess: open-access PDF available via Wiley (https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/jofi.70007, confirmed 2026-06-01)
  redistribution: extract-only
  resultsCount: 10
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, event-study, probit-regression, matching]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [information-asymmetry, moral-hazard]
  introducesData: true
  scope:
    region: US
    assetClass: bank deposits (transaction and term accounts)
    period: 2006-01..2016-12
    frequency: mixed
    dataType: [administrative, survey]
    granularity: [individual, firm]
    n: "~44,000 deposit accounts (single failed bank); up to 554,180 bank-quarters (generalization panel, ~10,000 banks, 2000-2016)"
  relatesTo:
    - { cite: 'Egan, Hortacsu & Matvos (2017)', doi: '10.1257/aer.20150342', relation: tests, note: 'Confirms EHM predictions: distressed banks raise deposit rates; insured depositors flow in; uninsured depositors flee (pp. 644, 646, 673).' }
    - { cite: 'Iyer & Puri (2012)', doi: '10.1257/aer.102.4.1414', relation: builds-on, note: 'Earlier account-level bank-run study; present paper uses finer daily data and separates inflows from outflows (p. 647).' }
    - { cite: 'Diamond & Dybvig (1983)', doi: '10.1086/261155', relation: builds-on, note: 'Foundational bank-run theory motivating the role of deposit insurance in preventing runs (p. 647).' }
    - { cite: 'Granja, Matvos & Seru (2017)', doi: '10.1111/jofi.12512', relation: cites, note: 'Cited for evidence on failed banks during the Great Recession and FDIC DIF costs (p. 644).' }
    - { cite: 'Davila & Goldstein (2023)', doi: '10.1086/723633', relation: cites, note: 'Cited for model of optimal deposit insurance; paper notes insured inflows inform the optimal design (p. 665).' }
  openQuestions:
    - 'Whether the insured deposit inflow phenomenon and its scale generalize beyond community and mid-size banks to very large (systemically important) banks, where enforcement actions are rare and the paper acknowledges insufficient sample power (pp. 681-682).'
    - 'Whether deposit rate caps of 75 bps above the national average would be more effective when short-term rates are substantially above zero, versus the zero-lower-bound environment covering the entire sample period (pp. 674-675).'
    - 'The paper is limited to one bank with complete account-level data; granular data for a large sample of failed banks would allow testing heterogeneity in the inflow mechanism across bank types and crisis periods (pp. 675-676).'
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Full PDF read (pp. 643-685). Ten results extracted from tables and text.
        Not human-verified. Not reproduced. Data are confidential FDIC supervisory
        microdata; replication requires FDIC access.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; one
        fix applied: R9 stated Listed deposit coefficients turn positive at t-2
        but Table XIII shows Listed is -0.633*** at (τ-2) and first turns positive
        at (tau+2) = 0.477** (corrected to t+2). All other nine rows (R1-R8, R10)
        confirmed correct: Table III col.(4) Uninsured 0.183*** t=8.45; Table VI
        col.(4) Uninsured 0.147*** Brokered/Placed 0.550***; Table VIII Panel B
        Formal 20.79%; Table X col.(3) Rate Spread 5.549*** t=2.71; Table XI
        col.(4) Formal 5.124** t=2.32; Table XII and XV coefficients confirmed.
        Equations 1-5 checked term-by-term and match. No em-dashes or colorful
        adjectives found. Frontmatter facts verified.
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
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF; one fix
        applied - scope.frequency changed from daily to mixed (primary micro-data
        is daily but generalization panel in Section IV is quarterly).
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70007
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor,
        delay-in-days=0, start=2026-01-21. license[1]: content-version=tdm,
        URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0,
        start=2026-01-21. No CC licence in Crossref metadata. Artifact (PDF p. 643)
        states: "This article is a U.S. Government work and is in the public domain
        in the USA." Public-domain statement on artifact governs.
  rightsSignalConflict: true
---

**What this is.** The paper's core results, estimating equations, and datasets:
enough to know what the paper found and how, without reading the 43-page source.
To replicate or extend, read the full article at [doi.org/10.1111/jofi.70007](https://doi.org/10.1111/jofi.70007).

## TL;DR

Using confidential daily, account-level deposit records collected by the FDIC from a
single failing U.S. bank (roughly $2 billion in assets, failed during the
financial crisis), the paper documents that gross deposit *inflows* are as
important as outflows for understanding bank funding under distress. Granja,
Matvos, and Seru (2017) document the failed banks of the Great Recession and
the resulting FDIC Deposit Insurance Fund costs that motivate this question. Deposit
insurance (regular FDIC coverage, the FDIC-extended $250,000 limit, and the
temporary TAG program) significantly reduces outflows from insured accounts.
Simultaneously, the distressed bank raised deposit rates to the 95th percentile
of the industry and attracted nearly $400 million in new insured term deposits,
mostly from out-of-state credit unions and banks via internet listing services,
replacing roughly one-third of its departing deposit base. These inflows are
generalizable: a panel of over 2,000 U.S. banks facing regulatory enforcement
actions shows similar shifts in deposit composition toward small and medium-term
insured deposits and away from brokered and large-uninsured deposits. The
central policy implication is that insured deposit inflows substantially weaken
the depositor discipline otherwise exerted by uninsured outflows.

## Core results

Magnitudes and significance are as reported in the paper. `***`/`**`/`*` = 1%/5%/10%.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | In the Formal (bank-specific distress) period, uninsured transaction accounts liquidate 18 pp faster than insured accounts | Table III, col. (4), p. 656 | Uninsured coeff = 0.183\*\*\* (t = 8.45); compared to near-zero baseline in Placebo period (0.0249\*) |
| R2 | TAG temporary unlimited insurance reduces transaction-account liquidation as much as ordinary deposit insurance: the two coefficients are not statistically different (p-value 0.67 for equality) | Table III, col. (3), p. 656; text p. 659 | TAG/DFA Eligible coeff = -0.0944\*\* (t = -2.00) in Postcrisis; difference from Uninsured coeff not significant |
| R3 | Uninsured term deposits are 14.7 pp more likely to liquidate in the Formal period; brokered/placed term deposits are 55 pp more likely to liquidate | Table VI, col. (4), p. 662 | Uninsured coeff = 0.147\*\*\* (t = 2.92); Brokered/Placed coeff = 0.550\*\*\* (t = 25.76) |
| R4 | Uninsured transaction depositors draw balances well below the insurance limit under stress: in the Formal period, 20.8% liquidate to less than $1, far above the 5-7% in earlier periods | Table VIII, Panel B, p. 665 | Formal period: 20.79% in < $1 bin; Placebo: 4.98% |
| R5 | The failed bank attracted nearly $400 million in new insured term deposits in its last year, roughly one-third of its deposit base, mostly in the 90 days before failure | Figure 3, p. 666; text p. 666 | ~$400M new insured term deposits; nearly all from institutional depositors (81% of 2,600 new accounts in Formal period) |
| R6 | Higher deposit rate spreads are associated with more new deposit inflows: estimated interest elasticity of demand of 0.61, in line with Egan, Hortacsu and Matvos (2017) | Tables X-XI, p. 670-671; text p. 673 | Rate Spread to Market coeff = 5.549\*\*\* (t = 2.71) in Table X col. (3); elasticity of demand calculated at 0.61 |
| R7 | The Formal period is the only period where new deposit inflows are significantly elevated after controlling for macroeconomic conditions and interest rates, confirming bank-specific (not macro) drivers | Table XI, col. (4), p. 671 | Formal period dummy coeff = 5.124\*\* (t = 2.32) on log new deposits; no other period significant after controls |
| R8 | Banks under regulatory enforcement actions in the broad U.S. panel reduce brokered deposits by 1.24 pp and increase listing-service deposits by 0.826 pp; small-term ($<$100k) deposits rise by 0.364 pp, large-term ($>$250k) fall by 0.830 pp | Table XII, p. 679 | Under Reg. Action coeff: Brokered = -1.24\*\*\* (t = -22.72); Listed = 0.826\*\*\* (t = 11.40); Sm. Term = 0.364\*\*\* (t = 5.21); Lg. Term = -0.830\*\*\* (t = -12.10) |
| R9 | The shift toward listing-service deposits begins before the enforcement action and ramps up sharply after; brokered deposits decline sharply at enforcement, consistent with regulatory restrictions | Table XIII / Figure 5, pp. 678-680 | Dynamic coefficients on Listed deposits turn positive at t+2 (0.477**), reaching ~1.2 pp by t+4 and t≥5; Brokered coefficients: ~1.1 pp before enforcement (τ-4 = 1.17***), -3.9 pp by t≥5 |
| R10 | Large banks (assets > $5B) under enforcement action raise 12-month CD spreads by a statistically significant 41 bps, paying on average ~75 bps above the FDIC national average, near the regulatory rate cap | Table XV, p. 683 | Under Reg. Action coeff = 0.4121\*\*\* (t = 4.48); constant = 0.3547\*\*\* |

**Overall (paper's conclusion).** Gross deposit inflows to a failing bank are
first-order in magnitude: deposit insurance both reduces outflows and enables
insured inflows that offset them. Focusing only on net outflows misses this
mechanism and overstates the stabilizing power of depositor discipline.
Temporary crisis-era guarantees such as TAG are as effective as standard
deposit insurance. These results hold for the single failed bank in the micro
data and generalize to over 2,000 U.S. banks under regulatory enforcement
action (pp. 683-684).

## Theory / model

The paper has no formal structural model. It builds on the framework of Egan,
Hortacsu, and Matvos (2017), who model a market for insured and uninsured
deposits where distressed banks raise deposit rates to attract insured funds
while uninsured funds flee. It also builds on Diamond and Dybvig (1983), the
foundational bank-run theory that motivates the role of deposit insurance in
preventing runs. The paper tests this framework empirically with
granular data. The core hypotheses are:

1. **Outflow hypothesis.** Deposit insurance (regular, temporary TAG/DFA) reduces
   the probability that a covered account liquidates, because insured depositors
   bear no principal risk from bank failure.
2. **Inflow hypothesis.** Even as uninsured funds leave, distressed banks raise
   deposit rates above market to attract new insured deposits, especially from
   rate-sensitive institutional depositors using internet listing services. The
   inflows are concentrated just below the insurance limit.
3. **Depositor-discipline hypothesis.** If insured inflows offset uninsured
   outflows, gross outflows overstate discipline; net outflows (as reported in
   Call Reports) understate it. Understanding bank runs requires decomposing
   gross flows.

The evidence on insured inflows informs the design of optimal deposit
insurance, as modeled by Davila and Goldstein (2023).

**Identification.** The paper exploits two quasi-natural experiments:

- The October 2008 increase in FDIC insurance from $100,000 to $250,000 and the
  simultaneous introduction of the unlimited-guarantee TAG program provide
  sharp policy changes. An event study around the insurance limit change (a
  36-day symmetric window) shows the daily liquidation probability for term
  deposits newly insured under the $250,000 limit falls from 0.0806 to 0.0512
  (p. 664).
- For generalization, the paper uses the quasi-random timing of formal
  regulatory enforcement actions against a large panel of U.S. banks (2000-2016),
  comparing treated banks to untreated controls before and after enforcement,
  and a propensity-score-matched specification for robustness.

## Method

The paper applies linear probability models (LPM), probit, Cox proportional
hazard models, OLS time-series regressions, and propensity-score matching. It
does not propose a new method; the contribution is entirely empirical.

The account-level approach extends Iyer and Puri (2012), an earlier
account-level bank-run study, by using finer daily data and separating
inflows from outflows.

**Outflow regressions (Section II).** The baseline is a cross-sectional LPM for
each of four time periods (Placebo, Precrisis, Postcrisis, Formal), separately
for transaction and term accounts. This builds on `panel-regression` and
`linear-probability-model` primitives. Robustness uses `probit-regression` and
Cox proportional hazard models (Tables IV, VII), giving consistent results.

**Inflow regressions (Section III).** The characteristics of new versus extant
depositors are compared via OLS (equation 2, p. 667). The daily volume of new
deposits is explained with OLS and Newey-West standard errors (Tables X-XI,
equations 3, p. 669).

**Generalization panel (Section IV).** The treatment of a formal enforcement
action is identified by two OLS specifications (equations 4-5, pp. 676-677) and
a propensity-score-matched comparison (equation 6 for large banks, p. 682).
These build on `panel-regression`, `event-study`, and `matching` primitives.

## Empirical specifications

### Outflow regressions (Core results R1-R4)

**Baseline LPM (equation 1, p. 653):**

$$
\mathbf{1}(\text{Liquidation}_i) = \alpha + \beta \times \text{Controls}_i + \delta_b + \epsilon_i
$$

Where subscript $$i$$ indexes deposit accounts; $$\delta_b$$ is a set of branch
fixed effects. $$\text{Liquidation}_i$$ = 1 if the account balance falls by 75% or more
relative to start-of-period and stays at or below 25% of the starting balance
for at least 61 days. $$\text{Controls}_i$$ includes: Uninsured dummy, TAG/DFA Eligible
dummy, Checking dummy, Direct Deposit dummy, Log(Age), Prior Transactions,
$$\text{Prior Transactions}^2$$, Institutional-Any dummy, Trust dummy, Brokered/Placed
dummy (term only), Log(Days to Maturity) (term only). Standard errors are
asymptotically normal. Run separately for each of four periods and for
transaction vs. term deposits (Tables III, VI). Alternative specifications use
probit (marginal effects) and Cox proportional hazard models (Tables IV, VII).

Interest rate controls added in Table V (Postcrisis and Formal periods only):
rate spread to market and past-month fees are added to equation 1 for both
transaction and term deposits.

### New-depositor characteristics (equation 2, p. 667)

$$
\mathbf{1}(\text{Characteristic}_{i,t}) = \alpha + \sum_{t=1}^{5} \beta_t \times \text{Time Period Dummy}_t \times \mathbf{1}(\text{Extant Depositor}_{i,t}) + \epsilon_{i,t}
$$

OLS, N = 188,834, six separate regressions (one per account characteristic as
dependent variable). Omitted category is extant depositors in the Placebo
period.

### Time-series inflow regressions (equations 3, p. 669)

$$
y_t = \alpha + \beta \times \text{Time Period Dummy}_t + \gamma \times X_t + \epsilon_t
$$

$$y_t$$ is either the share of deposits that are new that day (Table X) or the
log of dollar volume of new deposits (Table XI). $$X_t$$ includes Log(VIX), GDP
Growth, Housing Starts, Daily S&P 500 Return, AR(1) term, OFR Financial Stress
Index, Rate Spread to Market (dollar-weighted average). OLS with Newey-West
standard errors (lag length 9, Newey-West rule of thumb).

### Generalization: panel with regulatory action dummy (equations 4-5, pp. 676-677)

$$
y_{j,t} = \alpha + \beta \times \text{Under Reg. Action}_{j,t} + \gamma \times X_{j,t} + \delta_j + \zeta_t + \epsilon_{j,t} \tag{4}
$$

$$
y_{j,t} = \alpha + \sum_{i=-4}^{\geq 5} \beta_i \times \text{Under Reg. Action}_{j,t=\tau+i} + \gamma \times X_{j,t} + \delta_j + \zeta_t + \epsilon_{j,t} \tag{5}
$$

$$y_{j,t}$$ is a funding-share outcome for bank $$j$$ at quarter $$t$$. Bank and
quarter fixed effects ($$\delta_j$$, $$\zeta_t$$). $$X_{j,t}$$ includes NPL/Assets,
one-year asset growth rate, log assets, deposits/assets, term deposits/assets.
Panel covers ~10,000 U.S. banks, 2000-2016, quarterly. Equation (4) produces
Table XII; equation (5) produces Table XIII and Figure 5. A propensity-score-
matched specification (Table XIV) and a pooled OLS for large banks (equation 6,
p. 682, Table XV) round out Section IV.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| FDIC confidential account-level deposit microdata | Daily account balances and transactions for the one failed bank (early 2006 to failure); source of all Section II-III results | No page yet |
| FDIC Call Reports (public) | Panel of ~10,000 U.S. banks for the generalization analysis (Section IV); funding-share outcomes and bank-level controls | No page yet |
| FDIC confidential supervisory data | Identifies enforcement actions (C&D orders, less-than-well-capitalized status) and brokered-deposit waivers for the generalization panel | No page yet |
| RateWatch deposit rate surveys | 12-month CD rate spreads for large banks under enforcement action (Section IV.B); branch-level weekly survey data | No page yet |

Sample (single bank): daily, from early 2006 to bank failure (approximately
late 2010-early 2011). Generalization panel: quarterly, 2000-2016 (brokered
deposits); 2011-2016 (listing-service deposits); 2010-2016 (term deposits by
size). Total observations in panel regressions: up to 554,180 bank-quarters.

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.70007) if you are:
studying bank-run dynamics and need account-level evidence on the gross
inflow-outflow decomposition; designing deposit insurance policy (insurance
limit levels, temporary guarantees, rate caps); testing or calibrating models
of depositor behavior under distress (the EHM 2017 framework empirically);
or analyzing the stability of different deposit categories (checking vs.
savings vs. CDs, insured vs. uninsured, brokered/placed vs. listing-service).
The Internet Appendix (Appendix S1, referenced p. 685) contains additional
robustness tables cited throughout.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2), April 2026. This article
is a U.S. Government work and is in the public domain in the USA (stated on
PDF p. 643). This distillation was extracted by an LLM on 2026-06-01 and is
**not human-verified or independently reproduced**. The underlying data are
confidential FDIC supervisory records; replication requires FDIC data access.

> Martin, Christopher, Manju Puri, and Alexander Ufier. "Deposit Inflows and
> Outflows in Failing Banks: The Role of Deposit Insurance." *The Journal of
> Finance* 81, no. 2 (April 2026): 643-685. DOI: 10.1111/jofi.70007.
> U.S. Government work; public domain in the USA.
> This page is an extract-only distillation by the Institute for Automated
> Research; it is not a verbatim reproduction of the article.
