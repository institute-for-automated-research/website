---
title: "Communism and Financial Markets: Laudenbach, Malmendier & Niessen-Ruenzi (2026)"
description: >-
  Distilled: East Germans invest less in stocks and hold more
  negative attitudes toward capital markets decades after reunification, with
  the gap explained by lasting adherence to anti-capitalist ideology shaped by
  personal experiences under communism. J. Finance 2026, paywalled. Ten core
  results with source locators, datasets used, the identification strategy, and
  the empirical specifications.
sidebar:
  label: Laudenbach-Malmendier-Niessen-Ruenzi 2026
  order: 1
tags: [paper-summary, household-finance, stock-market-participation, ideology,
       political-economy, panel-regression, logit-regression, peer-reviewed,
       unreplicated, data:bilendi-survey, data:bank-proprietary,
       data:online-broker]
paper:
  authors: Christine Laudenbach, Ulrike Malmendier, Alexandra Niessen-Ruenzi
  authorList:
    - { family: Laudenbach, given: Christine, orcid: "0000-0002-2452-5683", affiliation: "SAFE and Goethe University" }
    - { family: Malmendier, given: Ulrike, orcid: "0000-0002-2786-4365", affiliation: "University of California, Berkeley" }
    - { family: Niessen-Ruenzi, given: Alexandra, affiliation: "University of Mannheim" }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 1103-1145
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70006
  topics:
    - Financial Markets and Investment Strategies
    - Household Finance and Stock Market Participation
    - Political Economy and Ideology
  dataAccess: proprietary-confidential
  outcome:
    - stock market participation (extensive and intensive margin)
    - anti-capitalist attitudes toward capital markets
    - portfolio returns and portfolio characteristics
  license: >-
    Paywalled. Crossref license[]: content-version vor,
    URL http://onlinelibrary.wiley.com/termsAndConditions#vor,
    delay-in-days 0, start 2025-12-25. No Creative Commons licence.
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (Wiley site; confirmed paywalled via Crossref DOI metadata 2026-06-01)
  redistribution: extract-only
  resultsCount: 10
  citedByCount: 1

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, logit-regression, difference-in-differences, matching]

  scope:
    region: Germany (East vs. West)
    assetClass: household equity (stocks, equity funds, ETFs)
    period: 2004-06..2023-06
    frequency: mixed

  relatesTo:
    - { cite: "Fuchs-Schundeln & Haliassos (2021)", doi: "10.1016/j.jmoneco.2020.01.004", relation: extends, note: "prior paper documents the East-West participation gap; this paper shows a significant residual ~10 pp gap with richer controls and explains it via ideology" }
    - { cite: "Malmendier & Nagel (2011)", doi: "10.1093/qje/qjr001", relation: builds-on, note: "experience-effects framework: lifetime returns shape stock market participation; this paper applies the logic to ideological rather than financial experiences" }
    - { cite: "Bursztyn & Cantoni (2016)", doi: "10.1162/REST_a_00538", relation: builds-on, note: "Western TV access in East Germany as a quasi-exogenous instrument; this paper adopts the same proxy for negative GDR experience" }
    - { cite: "Fuchs-Schundeln & Schundeln (2020)", doi: "10.1257/jep.34.2.172", relation: cites, note: "review of long-term effects of communism in Eastern Europe; provides the broader context for the East-West comparison" }
    - { cite: "Becker, Mergele & Woessmann (2020)", doi: "10.1257/jep.34.2.143", relation: tests, note: "questions whether German reunification is a clean natural experiment; this paper addresses the critique with within-East variation and movers analysis" }

  openQuestions:
    - "Whether the findings extend beyond Germany to other post-communist transitions and whether the speed of convergence differs by country (pp. 1142-1143)."
    - "What factors explain faster vs. slower convergence to market-economy norms across formerly communist countries; the role of (re-)framing of ideology is left as future work (p. 1143)."
    - "Whether anti-capital-market doctrines beyond communism drive similar participation gaps in Western countries; broader applicability is stated but not tested (p. 1142)."

  replicationCode:
    status: available

  proposedVocab:
    - { axis: topic, term: stock-market-participation, def: "Whether a household or individual holds stocks, equity funds, or ETFs (extensive margin) or the portfolio share allocated to equity (intensive margin).", aliases: [equity-participation, household-equity] }
    - { axis: topic, term: ideology, def: "Persistent adherence to a political-economic belief system (here anti-capitalist/communist doctrine) that shapes financial behavior decades after exposure.", aliases: [political-ideology, ideological-priming] }
    - { axis: topic, term: political-economy, def: "Research linking political institutions, ideology, or governance to economic outcomes at the individual or aggregate level.", aliases: [political-economics] }

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: "Full text read (pp. 1103-1146); ten results extracted from the PDF. Not human-verified. Not reproduced. Replication code is referenced in the paper (Supporting Information) but has not been run here."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; all 10 result rows confirmed correct. Fixed two errors: (1) topics field contained two unrelated placeholder topics ('Climate Change Communication and Perception', 'Media Influence and Health') replaced with accurate topics; (2) colorful adverb 'strikingly' removed from R1 description per house style."

  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70006
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[]: (1) content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-25; (2) content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0, start=2025-12-25. No Creative Commons licence found."

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification strategy, and
the empirical specifications with enough detail to know what it found and how,
without reading all 43 pages. To replicate or extend, read the full source at
the [original](https://doi.org/10.1111/jofi.70006).

## TL;DR

Using three independent data sets (a representative survey of 9,695 Germans,
proprietary bank records for 326,437 customers, and brokerage data for 230,229
retail investors), the paper shows that East Germans are 25-28% less likely to
participate in the stock market than West Germans, and that a significant gap of
roughly 10% persists after controlling exhaustively for wealth, income,
financial literacy, trust, social capital, and risk aversion. The paper argues
that the gap is explained by lasting adherence to the GDR's anti-capitalist
ideology: East Germans with stronger positive experiences of life under
communism (proxied by geography-based variation and by survey memories) show
greater stock-market aversion, while those with more negative experiences (e.g.,
living in heavily polluted areas or areas without Western TV access) invest more.
The financial cost is real: East German investors earn 7-11 basis points per
month less, hold fewer assets, pay higher fund fees, and hold less diversified
portfolios than comparable West Germans.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Raw East-West gap in stock market participation is large and consistent across all three data sets | Table III, pp. 1119-1120; Table II, p. 1114 | Survey: 27.6% gap (East 26.9% vs. West 35.5%); bank: 25.2% gap; broker: 27.7% gap |
| R2 | A significant residual gap of ~10% remains after controlling for the full set of demographic and financial variables | Table III col (2) all panels, pp. 1119-1120 | Survey: -0.026\*\*\* (SE 0.009), effect size 8.4%; bank: -0.007\*\*\* (SE 0.001), 7.7%; broker data: -0.156\*\*\* (SE 0.002), 19.1% |
| R3 | East Germans who moved to West Germany after Reunification and now live in the same economic environment as West Germans still invest significantly less | Table IV col (1)-(2), p. 1125 | Survey movers: -0.072\*\*\* (SE 0.026) on all Germans, -0.075\*\* (SE 0.029) restricting to West Germans only |
| R4 | East Germans are less willing to buy "capitalist" stocks (financial firms, U.S. firms) and more willing to buy stocks of formerly communist countries | Table V, p. 1130 | Survey: -1.9 pp for financial firms (4.7% relative gap), -1.9 pp for U.S. firms (5.5% gap); +5.9 pp for Chinese firms (23.5% gap); broker data: -4.9 pp financial firms\*\*\*, -1.9 pp U.S. firms\*\*\*, +0.4 pp East European firms\*\*\* |
| R5 | Within East Germany, anti-capitalist and anti-stock-market attitudes directly predict lower stock market participation | Table VI, p. 1132 | "I generally reject stocks": -0.103\*\*\* (SE 0.004); "Investing in stocks is immoral": -0.070\*\*\* (SE 0.006); "Capitalism should be abolished": -0.020\*\*\* (SE 0.005) |
| R6 | Negative GDR experiences (pollution, no Western TV access) predict higher stock market participation; positive experiences (renamed showcase cities, Olympic gold medal wins) predict lower participation | Table VII, p. 1136 | Pollution: +0.058\*\*\* (SE 0.009); No West-TV: +0.090\*\*\* (SE 0.016); Renamed city: -0.169\*\*\* (SE 0.010); Olympic gold (population-weighted): -0.044\*\*\* (SE 0.006) |
| R7 | Survey-based GDR memories directly link to stock market participation in the expected direction | Table VIII, p. 1138 | High GDR life standard: -0.032\*\*\* (SE 0.008); Wishing GDR back: -0.062\*\*\* (SE 0.016); Positive GDR memories: -0.050\*\*\* (SE 0.019) |
| R8 | East German investors earn lower risk-adjusted portfolio returns than West Germans | Table IX Panel A, p. 1140 | CAPM alpha (equal-weighted long East, short West): -0.082\*\* (SE 0.040); FF3 alpha: -0.070\* (SE 0.040); FF4 alpha: -0.099\*\* (SE 0.041) per month |
| R9 | East German investors hold significantly fewer passive investments, fewer assets, pay higher fund fees, and hold less diversified portfolios | Table IX Panel B, p. 1141 | Passive investments: -0.017\*\*\* (SE 0.002), 44.7% lower relative to baseline; fund fees: +3.78% higher (col 3); number of assets: -33.1% (col 2) |
| R10 | The stock market participation gap did not exist before the separation of Germany (1920-1924 bank data), ruling out pre-existing persistent differences | §II.A, p. 1116 | Historical stock-market participation: East 66.7% vs. West 68.2%; difference not statistically significant (t-statistic: 0.34) |

**Overall (paper's conclusion).** Exposure to anti-capitalist ideology can
exert lasting influence on individual investment behavior for years and even
decades. Individuals who remember life in the GDR positively are more likely
to continue holding anti-capitalist views and to refrain from stock market
investment, with adverse financial consequences. Negative personal experiences
under communism reverse the effect. These findings suggest that ideology, not
only financial experience, shapes long-run investment behavior, and offer a
micro-level foundation for macroeconomic growth differentials between formerly
communist and capitalist countries.

## Theory / model

The paper has no formal model. The theoretical framework is the
**emotional-tagging hypothesis** from cognitive science, applied to ideological
formation. The core logic is as follows.

Emotionally charged stimuli are encoded more strongly in long-term memory. The
valence (positive vs. negative) of an emotional context during an experience
shapes the memory trace: positive emotions create favorable associations with
the context, and negative emotions create unfavorable ones (Richter-Levin and
Akirav, 2003; Dolan, 2002). Applied to the GDR setting, individuals who lived
under communism with positive experiences are predicted to (i) form stronger
positive associations with the communist ideology and its anti-capitalist
stance, (ii) retain these associations in long-term memory, and (iii) carry
them into financial behavior decades later. Those with negative experiences are
predicted to reject the ideology and, as a result, embrace capitalist financial
markets more readily.

The tested hypothesis is:

- **H1 (positive tagging):** East Germans with more positive experiences under
  communism show greater adherence to anti-capitalist views and lower stock
  market participation.
- **H2 (negative tagging):** East Germans with more negative experiences under
  communism show less adherence to anti-capitalist views and higher stock
  market participation.
- **H3 (mechanism):** The link from experience to investment runs through
  ideological attitudes: anti-capitalist beliefs (toward stocks specifically
  and capitalism generally) mediate the effect on stock market participation.

**Identification strategy.** The paper uses three complementary identification
approaches:

1. **East-West comparison** (Sections II-III): the quasi-natural experiment of
   Germany's post-WWII division and 1990 reunification. Pre-trends are
   addressed using historical 1920-1924 bank data showing no pre-existing gap.
   Movers (East Germans who relocated to West Germany after Reunification) are
   used to rule out contemporaneous environmental confounders.

2. **Within-East survey variation** (Section III.B): variation in anti-capitalist
   attitudes among East Germans, related directly to stock market participation
   via logit regressions.

3. **Within-East geographic variation** (Section IV): four geography-based,
   predetermined (pre-reunification) proxies for positive or negative GDR
   experiences - pollution levels (negative), access to West German TV (negative
   for lack thereof), living in GDR renamed showcase cities (positive), and
   proximity to Olympic gold medal winners (positive) - are used as
   quasi-exogenous instruments for emotional tagging. These proxies are
   orthogonal to current economic conditions and to each other (Internet
   Appendix Table IA.XIV).

## Method

The paper applies logit regression as the primary estimator for all stock
market participation outcomes. For portfolio characteristics and returns, OLS
is used. The estimating framework is described in Section II.B (p. 1118).

**Main logit specification (equation 1, p. 1118):**

```
P(y_{it} = 1 | East_i, x_{it}, z_{c(i),t}, v_t) = Phi(alpha + beta * East_i + gamma' * x_{it} + delta' * z_{c(i),t} + v_t)
```

where:
- `y_{it}` = 1 if investor `i` participates in the stock market in year `t`
- `East_i` = 1 if investor lives in East Germany (former GDR)
- `x_{it}` = individual-level controls (gender, age, marital status, risk
  tolerance, wealth, income, financial literacy, trust, social capital,
  return expectations, peer effects; data-set specific)
- `z_{c(i),t}` = municipality-level controls (in broker data: number of bank
  branches, population, real estate wealth, share with high-school degree,
  county GDP, number of local firms, Facebook social connectedness index)
- `v_t` = year fixed effects (broker data only)
- `Phi(.)` = logistic CDF (the paper's notation for the logit link function)

Coefficients are reported as **average marginal effects**. Standard errors are
clustered by municipality in the survey and bank data; by broker customer in
the broker data.

The `builds-on` technique primitives used are `panel-regression` (OLS for
returns and portfolio characteristics), `logit-regression` (the logit AME
specification for participation), `difference-in-differences` (East-West
comparison before/after, with matched-city and Berlin sub-samples), and
`matching` (characteristics-matched cities: Eisenach vs. Bad Hersfeld, broker
data col (4) Table III Panel C).

**Alternative estimation.** The paper also uses Conley (1999, 2008) spatial
HAC standard errors with a 50 km distance cutoff and a two-year linear
Bartlett window (§II.C) to address spatial and serial autocorrelation in the
broker data. Results are qualitatively unchanged.

## Empirical specifications

### Baseline East-West participation gap (R1, R2)

Three separate logit regressions are run on each of the three data sets (Table
III, pp. 1119-1120):

```
P(stock market participant = 1) = Phi(alpha + beta * East_i + controls)
```

- **Survey data (Panel A):** N = 9,695; cross-section, 2023; SE clustered by
  municipality. Controls include gender, age, marital status, wealth (8-level),
  income (6-level), education (4-level), trust, risk tolerance (1-7), financial
  literacy (0-3), familiarity with stocks, peer effects, social capital (two
  measures), return expectations. Berlin excluded.

- **Bank data (Panel B):** N = 326,437; cross-section, 2019; SE clustered by
  municipality. Controls include gender, age, marital status, employment,
  wealth, income, risk tolerance, product ownership (consumer credit, retirement
  savings plans, credit card, mortgage, savings plans), number of consultations.

- **Broker data (Panel C):** N = 839,292 investor-years, June 2004-December
  2012; SE clustered by broker customer. Controls include investor age, marital
  status, portfolio value, time account open, municipality controls (see above);
  year FE.

Robustness variants: (i) Berlin-only subsample (col 3, Panel C), (ii) matched
cities Eisenach-Bad Hersfeld (col 4, Panel C, N = 574), (iii) restricting to
active bank accounts (col 3, Panel B), (iv) single-stock holding as dependent
variable (col 4, Panel B), (v) HAC standard errors.

### Movers specification (R3)

```
P(stock market participant = 1) = Phi(alpha + beta_1 * Mover_i + beta_2 * East_i + controls)
```

where `Mover_i` = 1 if respondent moved from East to West Germany after 1989
and lived in GDR for at least 10 years. The `East_i` coefficient is set to
zero in columns (2) and (4) (West-Germans-only subsample). Estimated on survey
data (col 1-2, N = 9,695/4,409) and a bank survey subsample (col 3-4, N =
241/198). Table IV, p. 1125.

### Stock type preference: "communist" vs. "capitalist" stocks (R4)

```
P(hold stock type k = 1) = Phi(alpha + beta * East_i + controls)
```

run separately for financial-industry stocks, U.S.-company stocks, Chinese
stocks, and East European stocks. Survey: willingness to buy (Table V Panel A,
p. 1130); bank data: actual holdings conditional on participating (N = 29,768,
Table V Panel B); broker data: portfolio share (N = 611,410, Table V Panel C).
Year FE included in broker data. SE clustered by municipality (survey, bank) or
broker customer (broker data).

### Anti-capitalist attitudes and participation (R5)

```
P(stock market participant = 1) = Phi(alpha + beta * Attitude_{qi} + controls)
```

estimated separately for each of nine attitude survey questions on four-point
Likert scales, restricted to the East German survey subsample (N = 5,286). Questions
span (i) anti-stock-market attitudes (Panel A), (ii) anti-capitalist attitudes
(Panel B), and (iii) pro-capitalist attitudes (Panel C). Table VI, p. 1132. SE
clustered by municipality.

### Geographic experience proxies and participation (R6)

```
P(stock market participant = 1) = Phi(alpha + beta_k * Proxy_k + controls + year FE)
```

run separately for each of four proxy variables on the East German broker
subsample (N = 171,343 investor-years):

- `Pollution_c` = 1 if investor lives in a municipality on the 1990 GDR
  environmental emergency list (negative experience proxy)
- `NoWestTV_c` = 1 if municipality did not receive West German TV signals
  (negative experience proxy)
- `RenamedCity_c` = 1 if municipality was renamed under the GDR communist
  regime (positive experience proxy)
- `OlympicGold_c` = indicator scaled by inverse population rank for whether
  an Olympic gold medal winner was born in the same municipality (positive
  experience proxy)

Table VII, p. 1136. SE clustered by broker customer.

### GDR memories and participation (R7)

Same specification as R6 but using survey self-reports for five GDR memory
questions (Likert scale): living standard, wishing GDR back, disappointed in
FRG, positive GDR experience, positive GDR memories. East German survey
subsample only (N = 1,661-4,874). Table VIII, p. 1138. SE clustered by
municipality.

### Portfolio return and characteristic regressions (R8, R9)

```
alpha_{E-W, t} = Long East portfolio - Short West portfolio
```

Monthly portfolio returns (including dividends, from Thomson Reuters
Datastream) are regressed on CAPM, Fama-French three-factor, and Carhart
four-factor models using German risk factors (CFR Cologne). Both equal- and
value-weighted portfolio constructions used. N = 92 monthly observations. Table
IX Panel A, p. 1140.

Portfolio characteristics (passive investment indicator, number of assets, fund
fees, Herfindahl index, bank-owned product share) regressed on East dummy plus
the same broker-data controls. N = 515,600-839,292. Table IX Panel B,
p. 1141.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Bilendi online survey (2023) | Representative survey of 9,695 Germans (5,286 East, 4,409 West); attitudes, stock market participation, demographics, trust, risk tolerance | no page yet |
| Proprietary bank data (2019) | 326,437 randomly selected bank customers; financial product holdings, wealth, income, stock market participation | no page yet |
| Online broker data (2004-2012) | 839,292 investor-year observations for 230,229 retail investors; security holdings, portfolio characteristics, returns | no page yet |
| Thomson Reuters Datastream | Monthly stock returns (including dividends) for portfolio return calculations; merged into broker data | no page yet |
| SAVE survey (Germany) | Municipality-level real estate wealth panel, merged as control into broker data | no page yet |
| German Census / Federal Statistical Office | Education variables (share with high-school degree) and economic indicators at municipality level | no page yet |
| GDR 1990 Environmental Emergency Report | Municipality-level air-pollution indicator (18 GDR municipalities requiring immediate action) | no page yet |
| Braggion, von Meyerinck & Schaub (2023) bank data (1920-1924) | Historical baseline: stock market participation for 2,000+ East and West German customers before the GDR, to rule out pre-existing differences | no page yet |

Sample: survey 2023 (cross-section); bank 2019 (cross-section); broker June
2004-December 2012 (panel). Geographic scope: Germany (East former GDR vs.
West FRG). The broker data cover 171,343 East German investor-year observations
used in the within-East experience analysis.

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.70006) if you are:
studying the long-run behavioral effects of political or ideological exposure
on financial markets; replicating the geography-based experience proxies
(pollution, West-TV access, renamed cities, Olympic victories); designing
surveys to measure ideology and financial behavior jointly; or studying the
financial welfare costs of ideological aversion to capital markets. The
Internet Appendix contains all robustness tables (IA.III-IA.XV), variable
definitions (Table IA.I), and the exact survey question wording (Table IA.X).

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2), April 2026, pp.
1103-1145. DOI: [10.1111/jofi.70006](https://doi.org/10.1111/jofi.70006).
Copyright 2025 the American Finance Association. This article is paywalled; no
Creative Commons licence is in effect.

This distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-01
and is **not human-verified or independently reproduced**. Access to the full
text requires a subscription to *The Journal of Finance* or institutional
access via Wiley Online Library.

> Laudenbach, Christine, Ulrike Malmendier, and Alexandra Niessen-Ruenzi.
> "The Long-Lasting Effects of Experiencing Communism on Attitudes toward
> Financial Markets." *The Journal of Finance* 81, no. 2 (April 2026):
> 1103-1145. DOI: 10.1111/jofi.70006.
