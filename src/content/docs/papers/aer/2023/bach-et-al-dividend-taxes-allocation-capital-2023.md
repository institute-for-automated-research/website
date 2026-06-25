---
title: "Dividend Taxes and Allocation of Capital (Comment): Bach et al. (2023)"
description: >-
  Distilled: This comment replicates Boissel and Matray (2022) using their own
  data and code, finding a coding alteration that suppresses differential
  pre-trends and showing that "size growth" controls are lagged outcome
  controls; no corrected specification produces convincing evidence that the
  2013 French dividend tax increase raised corporate investment. American
  Economic Review 2023, paywalled. Three core results with source locators,
  datasets used, and the estimating equations.
sidebar:
  label: Bach et al. 2023
  order: 1
tags: [paper-summary, replication, public-finance, corporate-investment,
       panel-regression, panel-data, peer-reviewed, unreplicated,
       data:insee-suse, data:insee-lifi, data:insee-esane]
paper:
  authors: Laurent Bach, Antoine Bozio, Arthur Guillouzouic, Clément Malgouyres
  authorList:
    - { family: Bach, given: Laurent, orcid: "0000-0002-7081-6502", affiliation: ESSEC Business School }
    - { family: Bozio, given: Antoine, orcid: "0000-0003-0201-6148", affiliation: "Paris School of Economics, EHESS, IPP" }
    - { family: Guillouzouic, given: Arthur, affiliation: "PSE, IPP" }
    - { family: Malgouyres, given: Clément, orcid: "0000-0002-2711-7669", affiliation: "CNRS, CREST, IP Paris" }
  year: 2023
  venue: "American Economic Review 113(7), July 2023, pp. 2048-2052"
  venueShort: AER 2023
  doi: 10.1257/aer.20221432
  jel:
    codes: [D22, G31, G35, H25, H32]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Corporate Taxation and Avoidance
    - Corporate Finance and Governance
    - Fiscal Policy and Economic Growth
  dataAccess: proprietary-confidential
  outcome:
    - effect of dividend taxes on corporate investment rate
  outcomeClass: [firm-real-outcomes]
  license: >-
    paywalled (no license[] block returned by Crossref works/10.1257/aer.20221432,
    checked 2026-06-24; AEA publisher site; no open-access signal found)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site; no machine-readable full text without subscription; checked 2026-06-24)"
  redistribution: extract-only
  resultsCount: 3
  citedByCount: 8
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study]
    identification: natural-experiment
  contributionType: [replication]
  mechanisms: [taxes]
  scope:
    region: France
    assetClass: French private non-financial firms
    period: 2007..2017
    frequency: annual
    dataType: [administrative, accounting]
    granularity: [firm]
  findings:
    - ref: R1
      outcome: pre-treatment event-study coefficients in BM's investment analysis
      metric: coefficient
      value: "two pre-reform coefficients (t=-2 and t=-1) divided by 1.8 in BM's released plotting code; standard errors untouched (p. 2050)"
      direction: negative
    - ref: R2
      outcome: parallel trends assumption for dividend tax-investment DiD
      metric: coefficient
      value: "corrected BM specification: CI excludes zero for t=-2 and t=-1 (Figure 1, p. 2049)"
      direction: negative
      vsBenchmark: "BM original: CI includes zero for both pre-reform periods, masking differential pre-trends"
    - ref: R3
      outcome: effect of 2013 French dividend tax increase on corporate investment rate
      metric: coefficient
      value: "no corrected specification shows a clear positive post-reform effect; capital-level controls produce pre-trends significant in the opposite direction (Figure 2, p. 2051)"
      direction: none
      vsBenchmark: "BM original: positive post-reform DiD coefficients with apparent parallel pre-trends"
  resultType: overturns
  relatesTo:
    - { cite: "Boissel and Matray (2022)", doi: '10.1257/aer.20210369', relation: contradicts, note: "using BM's own data and code, finds no convincing event-study evidence of a positive investment effect of the 2013 French dividend tax increase" }
    - { cite: "Yagan (2015)", doi: '10.1257/aer.20130098', relation: cites, note: "prior US evidence that the 2003 dividend tax cut had no effect on corporate investment" }
    - { cite: "Becker, Jacob, and Jacob (2013)", doi: '10.1016/j.jfineco.2012.08.003', relation: cites, note: "prior cross-country evidence that higher dividend taxes hinder investment" }
  openQuestions:
    - "Providing a specification with convincing causal evidence that the 2013 French dividend tax increase did or did not affect investment is beyond the scope of this comment and should be the subject of other research (p. 2052)."
  replicationCode:
    url: "https://doi.org/10.3886/E185061V1"
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: >-
        Full text read (pp. 2048-2052, 5 pages); three core results extracted
        from the PDF. Not human-verified. Not reproduced.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; two
        fixes applied: JEL codes corrected from [H25, G31, D22] to [D22, G31,
        G35, H25, H32] (G35 and H32 were omitted); Event study 2 color label
        corrected from "orange" to "green" (in Figure 2 the green curve is spec
        2; orange is spec 1). Equation (1) terms verified term-by-term; all R1,
        R2, R3 locators and magnitudes confirmed against the PDF.
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20221432
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        no license[] block returned; title confirmed as "Dividend Taxes and the
        Allocation of Capital: Comment"; authors Bach, Bozio, Guillouzouic,
        Malgouyres; container-title American Economic Review; volume 113, issue
        7, published 2023-07-01, pages 2048-2052; no open-access signal
  rightsSignalConflict: false
---

**What this is.** The core findings of this replication comment, with the
estimating equations and event-study diagnostics: enough to know what it
found and how, without reading the source. To replicate or extend, read the
original at [doi.org/10.1257/aer.20221432](https://doi.org/10.1257/aer.20221432).
The replication package is at [doi.org/10.3886/E185061V1](https://doi.org/10.3886/E185061V1).

## TL;DR

Using the same data and code as Boissel and Matray (2022), this comment
identifies two problems in BM's analysis of the 2013 French dividend tax
increase on corporate investment. First, a line in the code plotting BM's
Figure 4 divides two pre-reform event-study coefficients (t=-2 and t=-1) by
1.8, visually attenuating the gap between treated and control firms in the
pre-period. Second, BM's "size growth" controls are controls for the pre-reform
average of the outcome variable (investment rate), which mechanically suppresses
apparent pre-trends by creating mean reversion. After correcting either
problem, no specification produces convincing event-study evidence that the
reform raised investment. The paper concludes that one cannot claim the
dividend tax increase had a positive effect on companies' investment (p. 2049).

## Core results

Magnitudes and locators are as reported in the comment; figures are from the
5-page article.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | A line in BM's plotting code divides two pre-reform event-study coefficients (t=-2 and t=-1) by 1.8, reducing the visual evidence of differential pre-trends | p. 2050 | Factor of 1.8 applied to the t=-2 and t=-1 coefficients; original standard errors left untouched; alteration affects two of four pre-reform years |
| R2 | Without the code alteration, the corrected BM specification shows differential pre-trends: confidence intervals for t=-2 and t=-1 exclude zero | Figure 1, pp. 2049-2050 | CI excludes the null for t=-1 and t=-2 (orange curve); BM's original figure places the null at or inside the CI edge for both periods |
| R3 | Removing the size-growth (lagged outcome) controls leaves significant pre-trends and no clear post-reform positive investment effect in any specification | Figure 2, p. 2051 | Three alternative event-study variants all show significant differential pre-trends; capital-level control specification shows pre-trends significant and in the opposite direction |

**Overall (paper's conclusion).** Using BM's own data and code, the comment
shows that the estimation of the investment impact of the French dividend tax
hike is sensitive to the code alteration and to the choice of controls; no
specification provides clear evidence that dividend taxes encourage investment
(pp. 2051-2052).

## Theory / model

This paper has no formal model. The central hypothesis under test is BM's
parallel trends assumption: absent the 2013 reform, investment trends in
treated (high dividend-tax-burden) and control firms would have evolved
identically. The comment is diagnostic: it tests whether this assumption holds
in the corrected data.

The motivating economic claim, attributed to Boissel and Matray (2022), is
that a higher dividend tax reduces the after-tax return to distributing
earnings, encouraging firms to retain profits and invest. This channel contrasts
with prior evidence. Becker, Jacob, and Jacob (2013) find cross-country
evidence that higher dividend taxes hinder investment. Yagan (2015) finds the
US 2003 dividend tax cut had no effect on corporate investment. Because BM's
result contradicts both of these priors, the comment provides strict
re-examination of the methodology.

The parallel trends assumption is the sole identification claim. The comment
assesses it by inspecting pre-period event-study coefficients; a finding of
significant differential pre-trends invalidates the causal interpretation.

## Method

The comment applies BM's own difference-in-differences estimator, building on
`difference-in-differences` and `event-study` primitives (see `buildsFrom`).
Two diagnostic exercises identify the problems:

**Code alteration check.** The released code for BM's Figure 4 first runs a
regression with year-by-year interaction terms and then uses the output to
produce an event-study plot. In this last step, a command divides the
coefficients for t=-2 and t=-1 by 1.8, while leaving the standard errors
unchanged (p. 2050). Removing this command restores the regression output as
produced (event study 1 in Figure 1).

**Lagged-outcome control check.** BM define their "size growth" control as
"a vector of pre-reform annualized size growth quartile-by-year fixed effects"
(BM p. 2896, quoted p. 2050 of the comment). Size growth refers to capital
growth, which is identical to the investment rate (the main outcome). In a
difference-in-differences setting, conditioning on pre-treatment values of
the outcome forces parallel pre-trends mechanically (Daw and Hatfield 2018;
Chabé-Ferret 2017), biasing the post-treatment estimates upward. Removing
these controls reveals differential pre-trends that were hidden.

## Empirical specifications

BM's baseline difference-in-differences estimator, reproduced as equation (1)
in this comment (p. 2050):

$$
Y_{ijct} = \beta \, \text{Treated}_i \times \text{Post}_t
           + \theta_i + \text{SizeGrowthBin}_{it}
           + \delta_{jt} + \gamma_{ct} + \varepsilon_{ijct}
\tag{1}
$$

where $$Y_{ijct}$$ is total investment scaled by capital in 2011 for firm
$$i$$ in industry $$j$$, cohort $$c$$, year $$t$$; $$\text{Treated}_i \times \text{Post}_t$$
is the main difference-in-differences term (dividend-tax-affected firms
after the 2013 reform); $$\theta_i$$ are firm fixed effects;
$$\text{SizeGrowthBin}_{it}$$ are pre-reform annualized size-growth
quartile-by-year fixed effects (the lagged-outcome controls); $$\delta_{jt}$$
and $$\gamma_{ct}$$ are industry-year and cohort-year fixed effects.

The comment runs three alternative event-study specifications around the
2013 reform (Figure 2, p. 2051):

- **Event study 1** (R2): Equation (1) with the code alteration removed.
  Keeps size-growth controls. Differential pre-trends for t=-2 and t=-1 are
  significant (CI excludes zero).
- **Event study 2** (R3, green): Equation (1) without the alteration and
  without size-growth controls. Pre-trends are present but smaller; post-reform
  effect is unclear.
- **Event study 3** (R3, brown): Equation (1) without the alteration and
  without size-growth controls, but with year dummies interacted with quintiles
  of average pre-reform capital level (2009-2012) to correct for pre-trends.
  Differential pre-trends are significant in the opposite direction.

All three corrected specifications are inconsistent with the parallel trends
assumption that BM's causal interpretation requires.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| INSEE and DGFiP SUSE unified accounting files (2007) | Firm-level investment and capital data for the main DiD analysis | no page yet |
| INSEE Liaisons financières entre societes (2007-2011, 2012-2017) | Ownership structure for identifying dividend-tax-treatment status | no page yet |
| INSEE and DGFiP ESANE enterprise results (2008-2017) | Annual firm results covering the event-study window | no page yet |

All data are French administrative microdata accessed via CASD (Centre
d'Acces Securise aux Donnees) with institutional authorization. These are
the same datasets as used by Boissel and Matray (2022). Sample: French
private non-financial firms around the 2013 dividend tax reform; event-study
window from 4 years pre-reform (approximately 2009) to 5 years post-reform
(approximately 2018); annual frequency.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20221432) if you are:
evaluating the credibility of Boissel and Matray (2022)'s claimed positive
investment effect of dividend taxes; studying how lagged-outcome controls
can produce spurious parallel trends in difference-in-differences designs;
or seeking event-study evidence on the investment effects of dividend
taxation in France. The replication package at
[doi.org/10.3886/E185061V1](https://doi.org/10.3886/E185061V1) includes the
corrected code and data documentation. Locators above point to the exact
figures in the 5-page comment.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(7), July 2023.
This distillation was extracted by an LLM on 2026-06-24 and is
**not human-verified or independently reproduced**. Paywalled; extract-only.

> Bach, Laurent, Antoine Bozio, Arthur Guillouzouic, and Clement Malgouyres.
> "Dividend Taxes and the Allocation of Capital: Comment."
> *American Economic Review* 113, no. 7 (July 2023): 2048-2052.
> DOI: 10.1257/aer.20221432.
