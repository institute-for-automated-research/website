---
title: "Securing Technological Leadership? The Cost of Export Controls: Crosignani et al. (2026)"
description: >-
  Distilled: Crosignani, Han, Macchiavelli, and Silva (2026) document using hand-collected BIS
  Entity List data matched to FactSet Revere supply-chain linkages that U.S. export controls on
  Chinese firms cause broad-based decoupling from Chinese customers; affected U.S. suppliers
  suffer large stock market losses, declining revenues and employment, and tighter bank credit,
  while failing to form new customer relations domestically or in politically aligned countries.
  Journal of Financial Economics 2026, paywalled. Nine core results with source locators,
  datasets used, and the empirical design (stacked DiD and event study). LLM-distilled.
sidebar:
  label: Crosignani et al. 2026
  order: 1
tags: [paper-summary, geopolitics, trade-policy, export-controls, supply-chains, geoeconomics,
       event-study, difference-in-differences, panel-regression, peer-reviewed, unreplicated,
       data:wrds, data:ken-french, data:factset-revere, data:fr-y14q, data:capital-iq,
       data:bis-entity-list, data:refinitiv, data:mingshi]
paper:
  authors: Matteo Crosignani, Lina Han, Marco Macchiavelli, André F. Silva
  authorList:
    - { family: Crosignani, given: Matteo, orcid: "0000-0002-3525-3492", affiliation: Federal Reserve Bank of New York }
    - { family: Han, given: Lina, affiliation: University of Massachusetts Amherst }
    - { family: Macchiavelli, given: Marco, orcid: "0000-0003-3755-1861", affiliation: University of Massachusetts Amherst }
    - { family: Silva, given: "André F.", affiliation: Federal Reserve Board }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104192
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104192
  jel:
    codes: [G12, F51, F38]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Global trade, sustainability, and social impact
    - Global trade and economics
    - International Business and FDI
  dataAccess: proprietary-confidential
  outcome:
    - cumulative abnormal return of U.S. suppliers affected by export controls
    - revenues, cash flow, and employment of affected U.S. suppliers
    - bank lending to affected U.S. suppliers
    - supply-chain customer terminations and new-relation formation
  outcomeClass: [firm-real-outcomes, security-returns, credit-supply]
  license: >-
    All rights reserved (Elsevier, 2025). No open licence found in Crossref works
    metadata: only TDM licences present (Elsevier TDM 1.0 and TDMREP policy DOIs,
    content-version tdm). Artifact first page: "0304-405X/c 2025 Elsevier B.V.
    All rights reserved, including those for text and data mining, AI training,
    and similar technologies."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; checked 2026-06-24)"
  redistribution: extract-only
  resultsCount: 9
  citedByCount: 6
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [financial-constraint, supply-chain-rigidity]
  introducesData: true
  scope:
    region: US (suppliers) and China (targets)
    assetClass: US equities, Chinese equities, corporate bank loans
    period: 2007-01..2023-09
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, security, transaction]
    n: "351 U.S. suppliers with supply-chain links to 90 Chinese BIS-list targets; 250 stock-price events; 331 firms in bank-lending sample (71 treated); 2007-2023"
  findings:
    - ref: R1
      outcome: termination of Chinese customer supply-chain relations
      metric: coefficient
      value: "0.572*** (SE 0.209) full sample; 0.414* to 0.560** excluding directly targeted Chinese customers (Table 4, cols 1-3, 5-6); equivalent to 51-75% increase in terminations excluding targeted"
      direction: positive
    - ref: R2
      outcome: total customer relations after export controls
      metric: coefficient
      value: "-0.145** (SE 0.064) total customers; domestic and Asia-Pacific new relations not significantly higher (Table 5, col 1; Table 6)"
      direction: negative
      vsBenchmark: no reshoring or friendshoring in 3 years post-control
    - ref: R3
      outcome: cumulative abnormal return of affected U.S. suppliers
      metric: car
      value: "-3.6% over [-10, 20] day window (3-factor FF model, Fig. 3, p. 11); $1 billion per firm average; $158 billion total market cap loss"
      direction: negative
    - ref: R4
      outcome: operating cash flow of affected U.S. suppliers
      metric: coefficient
      value: "-0.018** (SE 0.007); decline equal to 21% of average value for treated firms (Table 7, col 1, Panel A, p. 12)"
      direction: negative
    - ref: R5
      outcome: revenues of affected U.S. suppliers
      metric: coefficient
      value: "-0.093** (SE 0.032); revenues decline 8.9% post export controls (Table 7, col 2, Panel A, p. 12)"
      direction: negative
    - ref: R6
      outcome: employment at affected U.S. suppliers
      metric: coefficient
      value: "-0.076** (SE 0.031); 7.3% decline in employees; CapEx: 0.004 (SE 0.003, not significant) (Table 7, cols 5 and 4, Panel A, p. 12)"
      direction: negative
    - ref: R7
      outcome: bank lending to affected U.S. suppliers
      metric: coefficient
      value: "Committed term loans: -0.630** (SE 0.251); spread: +0.179** bps (SE 0.088); maturity: -4.874*** months (SE 1.538) (Table 8, cols 2, 5, 6, p. 13)"
      direction: negative
      vsBenchmark: pattern consistent with a negative credit-supply shift
    - ref: R8
      outcome: new Chinese domestic supplier relations formed by targeted Chinese firms
      metric: coefficient
      value: "0.469*** (SE 0.181) to 0.517*** (SE 0.172) (Table 9, cols 3-4, p. 13); targeted Chinese firms terminate U.S. supplier relations and replace them with domestic Chinese suppliers"
      direction: positive
      vsBenchmark: "Chinese firms reshore faster and more effectively than U.S. firms friendshore"
    - ref: R9
      outcome: cumulative abnormal return of targeted Chinese firms
      metric: car
      value: "-8.2% to -9.0% over [-10, 20] day window (3- and 4-factor China model, Fig. 5, p. 14-15); Chinese total $18-19 billion; U.S. full-sample $158 billion; U.S. subsample linked to listed Chinese targets $77 billion"
      direction: negative
      vsBenchmark: "conservative subsample U.S. losses ($77B) approximately 4x Chinese losses ($18-19B); full-sample U.S. losses ($158B) approximately 8-9x (p. 15)"
  resultType: new-finding
  relatesTo:
    - { cite: "Baker, Larcker & Wang (2022)", doi: '10.1016/j.jfineco.2022.01.004', relation: builds-on, note: "stacked DiD methodology used to address staggered-treatment bias in the main identification" }
    - { cite: "Gormley and Matsa (2011)", relation: builds-on, note: "stacked regression approach that the paper describes as the backbone of its identification strategy" }
    - { cite: "Clayton et al. (2025b)", relation: builds-on, note: "theoretical framework for geoeconomics; paper provides systematic empirical evidence on collateral costs of export controls" }
    - { cite: "Liu et al. (2024)", relation: extends, note: "calibrated model on technology transfer restrictions; paper tests empirically the broader productive-sector adjustment the model addresses" }
    - { cite: "Fama and French (1993)", doi: '10.1016/0304-405x(93)90023-5', relation: cites, note: "3-factor model used to estimate cumulative abnormal returns in the event study" }
    - { cite: "Crosignani et al. (2023)", doi: '10.1016/j.jfineco.2022.12.002', relation: builds-on, note: "prior work by the same authors on supply-chain propagation of cyberattacks; this paper extends the supply-chain methodology to export controls" }
  openQuestions:
    - >-
      A full cost-benefit analysis, including national security gains and the differential effect on
      U.S. and Chinese innovation, is beyond the scope of this paper and left for future research
      (p. 16, Conclusion).
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full text read (pp. 1-16); nine results extracted from PDF. Not human-verified. Not reproduced." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: (1) R2 locator corrected to add Table 4 cols 7-9 for new Chinese relations figures, and range corrected from -0.483/-0.473 to the full -0.473**/-0.523*** span; (2) R9 and TL;DR corrected to clarify that the 4x comparison uses the $77 billion conservative subsample estimate (U.S. suppliers linked to listed Chinese targets), not the full $158 billion figure which is ~8-9x the Chinese losses; all other nine result rows confirmed against tables and figures in PDF."
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jfineco.2025.104192", checked: 2026-06-24, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains TDM licences only (Elsevier TDM 1.0 and TDMREP policy DOIs, content-version tdm, start 2026-01-01, delay-in-days 0); no CC or open-access licence present. Artifact p. 1: 0304-405X/c 2025 Elsevier B.V. All rights reserved." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification strategy, and the empirical
design: enough to know what it found and how, without reading all 16 pages. To replicate or
extend it, read the full source at the [original](https://doi.org/10.1016/j.jfineco.2025.104192).

## TL;DR

To safeguard its technological edge, the U.S. government has restricted domestic firms from
selling advanced technology to selected Chinese companies by adding those companies to Bureau
of Industry and Security (BIS) export control lists. Crosignani et al. (2026) use hand-collected
BIS list data matched to FactSet Revere global supply-chain linkages to document how these
restrictions affect U.S. domestic suppliers and their Chinese customers. The intended effect
materializes: affected U.S. suppliers terminate relations with their targeted Chinese customers.
However, the broader supply-chain reconfiguration that U.S. policymakers hope for (reshoring or
friendshoring) does not happen in the three years following the controls. Instead, affected U.S.
firms experience negative stock market reactions, declines in revenues, cash flow, and employment,
and tighter bank credit conditions. Chinese firms targeted by export controls, by contrast, are
more proactive: they terminate U.S. supplier relations and replace them with domestic Chinese
alternatives, consistent with the prior work of Crosignani et al. (2023) on supply-chain
propagation. Total U.S. supplier stock market losses ($158 billion across all affected suppliers) far exceed
the $18-19 billion in losses on the Chinese side; even the conservative estimate for U.S. suppliers
linked to publicly listed Chinese targets ($77 billion) is approximately four times larger (p. 15),
raising doubts about the effectiveness of export controls as a tool for preserving U.S.
technological leadership.

## Core results

Magnitudes and significance as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Export controls lead to broad-based decoupling: affected U.S. suppliers terminate relations with targeted AND non-targeted Chinese customers | Table 4, cols 1-3 and 5-6, p. 8 | Full: coefficient 0.572\*\*\* (SE 0.209); excluding targeted Chinese customers: 0.414\* to 0.560\*\*, equivalent to +51% to +75% more terminations |
| R2 | No reshoring or friendshoring: affected U.S. suppliers form fewer new Chinese customer relations and cannot offset the loss with domestic or Asia-Pacific alternatives | Table 4, cols 7-9, p. 8; Table 5, col 1, p. 9-10; Table 6, p. 10 | Total customers: -0.145\*\* (SE 0.064); new Chinese relations: -0.473\*\* to -0.523\*\*\* (Table 4, cols 7-9); domestic, Asia, Asia-ally, and EU shares: all coefficients insignificant |
| R3 | Stock market reaction: affected U.S. suppliers lose -3.6% in cumulative abnormal return in the 30-day window around BIS list announcements | Fig. 3, p. 11-12 | -3.6% CAR over [-10, 20] (3-factor FF model); $1 billion market cap loss per firm; $158 billion total across 156 affected suppliers |
| R4 | Cash flow declines significantly: export controls reduce operating cash flow by an amount equal to 21% of average treated-firm value | Table 7, col 1 (Panel A), p. 12 | Coefficient -0.018\*\* (SE 0.007) in stacked panel regression |
| R5 | Revenue declines: export controls reduce revenues by 8.9% | Table 7, col 2 (Panel A), p. 12 | Coefficient -0.093\*\* (SE 0.032) |
| R6 | Employment falls 7.3%; capital expenditure not significantly affected | Table 7, cols 5 and 4 (Panel A), p. 12 | Employees: -0.076\*\* (SE 0.031); CapEx: 0.004 (SE 0.003, insignificant) |
| R7 | Banks tighten lending to affected U.S. suppliers: term loans fall, spreads rise, maturities shorten | Table 8, cols 2, 5, 6, p. 13 | Term loans: -0.630\*\* (SE 0.251); spread: +0.179\*\* bps (SE 0.088); maturity: -4.874\*\*\* months (SE 1.538) |
| R8 | Chinese firms targeted by export controls successfully reshore by forming new domestic supplier relations, replacing U.S. suppliers faster than U.S. firms can friendshore | Table 9, cols 3-4, p. 13 | New relations with Chinese suppliers: +0.469\*\*\* (SE 0.181) to +0.517\*\*\* (SE 0.172); U.S. supplier share of targeted Chinese firms falls significantly (Table 10, cols 5-6) |
| R9 | Targeted Chinese firms also lose market capitalization, but U.S. supplier losses are considerably larger (approximately 4x by the conservative subsample estimate) | Fig. 5, p. 14-15 | CAR [-10, 20]: -8.2% (3-factor) to -9.0% (4-factor China model); Chinese total $18-19 billion; U.S. full-sample $158 billion; U.S. subsample linked to listed Chinese targets $77 billion (approximately 4x the Chinese losses, p. 15) |

**Overall (paper's conclusion).** Export controls prompt immediate and broad-based decoupling of
U.S. suppliers from their Chinese customers, but U.S. firms struggle to find new customers in
the three years following the controls. These supply-chain rigidities translate into sizable
declines in market capitalization, revenues, cash flow, employment, and bank credit access.
Chinese firms targeted by export controls are more proactive in supply-chain reconfiguration,
increasing reliance on domestic Chinese alternatives. The total capitalization losses incurred by U.S. suppliers ($158 billion full sample;
$77 billion for the subsample linked to listed Chinese targets) are considerably larger than those
experienced by their Chinese counterparts ($18-19 billion); the conservative ratio is approximately
four times (p. 15), questioning whether export controls are an effective tool for preserving U.S.
technological leadership at acceptable cost.

## Theory / model

The paper has no formal theoretical model. It operates in the nascent theoretical literature on
geoeconomics summarized by Clayton et al. (2025b) and the literature on targeted trade
restrictions such as Liu et al. (2024), who develop a calibrated model in which comprehensive
semiconductor restrictions could raise domestic welfare by facilitating technology transfer.

The paper tests three sets of hypotheses grounded in the policy context:

1. **Decoupling hypothesis**: Export controls cause affected U.S. suppliers to terminate supply
   relations with Chinese customers named in BIS lists, and plausibly also with non-targeted
   Chinese customers ("wake-up call" or re-export concern effect).
2. **Reshoring / friendshoring hypothesis**: Following decoupling, U.S. firms form new customer
   relations with domestic or politically aligned (Asia-ally, EU) customers to offset lost
   Chinese business. The paper finds this does NOT happen within three years.
3. **Collateral damage hypothesis**: The inability to substitute customers generates measurable
   declines in firm value (stock market), operating performance (revenues, cash flow, employment),
   and credit supply (bank lending).

**Identification logic.** The BIS Entity List, Military End User (MEU) List, and Unverified List
(UVL) have been expanded continuously since the late 1990s. The staggered, firm-specific nature
of these additions constitutes a quasi-natural experiment: some U.S. suppliers become
"affected" earlier (their Chinese customer is added to a list), others later. By comparing
affected firms with not-yet-affected firms exporting to China in the same industry-size cell
around each BIS event, the paper identifies the causal effects of export controls on supply-chain
configurations and firm outcomes.

## Method

The paper uses two main estimators: a stacked difference-in-differences (DiD) panel regression
for supply-chain and balance-sheet outcomes, and a standard event study for stock-market
reactions.

**Stacked DiD.** Because BIS additions are staggered and could produce biased two-way
fixed-effects (TWFE) estimates, the paper follows the stacked regression methodology developed
by Gormley and Matsa (2011) and described in Baker, Larcker, and Wang (2022). Cohorts are
defined around each BIS inclusion event. Within each cohort, treated firms are U.S. suppliers
whose Chinese customer is included in that cohort's event; control firms are U.S. suppliers
exporting to China that are never treated or not yet treated at event time. A [-3, 3] year window
centers each cohort. The estimating equation (p. 7, Eq. 1) is:

$$
y_{ict} = \beta \, \text{Affected}_{ic} \times \text{Post}_{ict} + \mu_{ic} + \mu_{ckt} + \varepsilon_{ict} \tag{1}
$$

where $$i$$ indexes a firm, $$c$$ a cohort (round of export controls), and $$t$$ a year.
$$\text{Affected}_{ic}$$ is an indicator equal to one if export control $$c$$ is imposed on a
Chinese customer of U.S. firm $$i$$. $$\text{Post}_{ict}$$ equals one after the imposition.
$$\mu_{ic}$$ are cohort-firm fixed effects; $$\mu_{ckt}$$ are cohort-industry-size-year fixed
effects (absorbing demand shocks that hit similar firms in the same year). Standard errors are
double-clustered at the firm and year level.

For count-like outcomes (number of terminated or new relations), the paper estimates Poisson
pseudo-maximum-likelihood (PPML) regressions following Cohn, Liu, and Wardlaw (2022), with the
same fixed-effects structure. Coefficients in PPML regressions are interpreted as percentage
effects via $$\exp(\hat\beta) - 1$$.

**Event study (stock market reactions).** Cumulative abnormal returns (CARs) are estimated over a
[-10, 20] trading-day window around the BIS list announcement date (p. 11). Pre-event betas are
estimated on the [-150, -50] day window using the Fama and French (1993) 3-factor model or the
Fama and French (2015) 5-factor model. Affected suppliers are the U.S. firms that supply Chinese
entities included in the BIS lists; the sample includes 250 events involving 156 unique affected
suppliers (one firm can contribute multiple events if it exports to multiple Chinese targets added
at different times).

## Empirical specifications

**Supply-chain reconfiguration (R1, R2, Table 4-6, p. 8-10).** The outcome variables are:
(a) the total number of terminated relations with Chinese customers (including/excluding directly
targeted firms); (b) the number of new Chinese customer relations; (c) total customer count;
(d) regional customer shares (domestic, China, Asia, Asia-ally, EU). Estimated by PPML with
cohort-firm and cohort-SIC-size-year fixed effects, double-clustered SEs. Treatment requires
all control firms to export to China in the pre-treatment period; within each cohort, controls
are matched on industry (2-digit SIC) and firm-size quartile. A "Restrictive Sample" narrows
to only Entity List and MEU List events, excluding the less restrictive UVL.

**Balance sheet and real outcomes (R4-R6, Table 7, p. 12).** Outcome variables are:
cash flow (operating income before depreciation minus interest and taxes divided by lagged assets),
revenues (log total revenues), EBIT (earnings before interest and taxes divided by lagged assets),
CapEx (capital expenditures divided by lagged assets), and employees (log total employees).
Specification: OLS stacked panel regression (Eq. 1) with cohort-firm and cohort-SIC-size-year
fixed effects. Results are robust to NAICS fixed effects (Table C.1 online appendix).

**Bank lending (R7, Table 8, p. 13).** Outcome variables: committed total credit, committed term
loans, committed credit lines, utilized credit lines, the interest rate spread, and loan maturity.
Sample: 331 firms exporting to China that borrow from a total of 38 banks over 2012:Q3-2023:Q3;
71 are affected by export controls. Specification: stacked OLS panel with firm fixed effects
(absorbing time-invariant firm characteristics), industry-size-quarter fixed effects (absorbing
common demand conditions for similar firms), and bank-quarter fixed effects (capturing
bank-specific credit-supply shocks):

$$
y_{ibqt} = \beta \, \text{Affected}_{i} \times \text{Post}_{iqt} + \mu_{i} + \mu_{kqt} + \mu_{bqt} + \varepsilon_{ibqt}
$$

The coefficient $$\beta$$ is identified from within-bank-quarter comparisons of affected vs
control firms in the same industry-size cohort.

**Chinese supply-chain reconfiguration (R8, R9, Table 9-11, Fig. 5, p. 13-15).** Chinese
targeted firms' supply-chain adjustments are estimated symmetrically to the U.S. side, with
Targeted replacing Affected and the control group being Chinese firms importing from U.S. suppliers
not in the BIS lists. This documents whether Chinese firms actively reshore (R8) and how
non-U.S. third-country firms benefit (Table 11: revenues of non-U.S., non-allied suppliers to
targeted Chinese firms increase by 15.7%\*\*\* after controls). Stock market reactions for
Chinese targets (R9) use the China-specific 3-factor and 4-factor models of Liu, Stambaugh,
and Yuan (2019).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| FactSet Revere supply-chain linkages | Global firm-to-firm customer-supplier relations 2007-2023; identifies U.S. suppliers of BIS-targeted Chinese firms | [FactSet Revere](/wiki/commercial/factset-revere/) |
| BIS Entity List, MEU List, UVL (hand-collected) | Export control targets; hand-collected additions and removals of Chinese entities from federalregister.gov and ecfr.gov with dates and aliases | no page yet |
| CRSP daily stock file | U.S. equity prices and returns for event-study CAR estimation | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Compustat North America fundamentals (annual) | Firm-level balance sheet characteristics (assets, revenues, employment, CapEx) | [WRDS](/wiki/commercial/wrds/) (licensed) |
| Ken French Data Library | Fama-French 3- and 5-factor daily returns for beta estimation | [Ken French library](/wiki/datasets/ken-french/) |
| Federal Reserve Y-14Q (CCAR) | Confidential quarterly loan-level data for 331 U.S. firms borrowing from 38 large banks, 2012:Q3-2023:Q3 | [FR Y-14Q](/wiki/confidential/fr-y14q/) |
| Refinitiv (Chinese stock prices) | Daily stock price data for publicly listed Chinese firms targeted by export controls | no page yet |
| S&P Capital IQ | International firm balance sheet data (EBIT, revenues) for 6,068 suppliers of targeted Chinese firms | [Capital IQ](/wiki/commercial/capital-iq/) |
| Mingshi | Chinese stock market 3-factor and 4-factor model returns for Chinese-side CAR estimation | no page yet |

Sample: U.S. supply-chain panel 2007-2023 (up to Q3); bank-lending sample 2012:Q3-2023:Q3; stock event study 250 events, 156 unique affected U.S. suppliers.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104192) if you are:
studying the real effects of geoeconomic policy on domestic supply chains; estimating the
collateral costs of U.S. export controls on firms in the technology sector; applying stacked
DiD methods with staggered treatment to firm-level data; or examining the asymmetric
reconfiguration capacity of U.S. versus Chinese firms in a supply-chain disruption. Locators
above point to the exact tables and figures in the source PDF.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026) 104192. This
distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or
independently reproduced**. The paper is paywalled; reproduction is extract-only.

> Crosignani, Matteo, Lina Han, Marco Macchiavelli, and André F. Silva.
> "Securing technological leadership? The cost of export controls on firms."
> *Journal of Financial Economics* 175 (2026): 104192.
> DOI: 10.1016/j.jfineco.2025.104192. © 2025 Elsevier B.V. All rights reserved.
> This page is an extract-only distillation by the Institute for Automated Research.
