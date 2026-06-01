---
title: "Institutional Investor Attention: Kwan, Liu & Matthies (2026)"
description: >-
  Distilled: institutional funds shift attention to macro news when
  volatility rises; attention tracks holdings; attention to a stock predicts
  that position's value-add; attention by buying hedge funds predicts stock
  returns. J. Finance 2026, CC BY 4.0. Eight core results with source
  locators, datasets used, the theory tested, and empirical specifications.
sidebar:
  label: Kwan-Liu-Matthies 2026
  order: 1
tags: [paper-summary, limited-attention, institutional-investors, return-predictability, fund-performance, panel-regression, fama-macbeth, portfolio-sort, open-access, cc-by, peer-reviewed, unreplicated, data:fred, data:edgar, data:wrds, data:ravenpack, data:factset-lionshares, data:revelio, data:form-adv]
paper:
  authors: Alan Kwan, Yukun Liu, Ben Matthies
  authorList:
    - { family: Kwan, given: Alan, affiliation: University of Hong Kong }
    - { family: Liu, given: Yukun, affiliation: University of Rochester }
    - { family: Matthies, given: Ben, affiliation: University of Notre Dame }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 791–827
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  citedByCount: 2
  topics: ['Financial Markets and Investment Strategies', 'Auditing, Earnings Management, Governance', 'Corporate Finance and Governance']
  dataAccess: proprietary-confidential
  outcome:
    - fund-level returns
    - position-level value-add
    - cross-sectional stock returns
  doi: 10.1111/jofi.70009
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-01-16; corroborated by artifact p.791 Creative Commons Attribution License)'
  access: open
  machineAccess: 'blocked-402 (Wiley site wrapper; /doi /full /pdf /epdf all tested 2026-05-17; the paywalled wrapper does not override the CC-BY VOR licence in the publisher own DOI metadata)'
  redistribution: hosted
  pdf: /library/kwan-liu-matthies-2026-institutional-investor-attention.pdf

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, fama-macbeth, portfolio-sort]

  scope:
    region: US
    assetClass: US equities, institutional funds
    period: 2017-11..2022-06
    frequency: monthly

  relatesTo:
    - { cite: 'Peng & Xiong (2006)', doi: '10.1016/j.jfineco.2005.05.003', relation: tests, note: 'Tests prediction that attention-constrained investors shift toward macro news when aggregate volatility is high (p. 801)' }
    - { cite: 'Kacperczyk, Van Nieuwerburgh & Veldkamp (2016)', relation: tests, note: 'Tests prediction that funds with higher attention-reallocation sensitivity to VIX earn higher future returns (pp. 801, 805)' }
    - { cite: 'Van Nieuwerburgh & Veldkamp (2010)', relation: tests, note: 'Tests prediction that attention and portfolio holdings are positively related in equilibrium (pp. 802, 809)' }
    - { cite: 'Berk & Van Binsbergen (2015)', doi: '10.1016/j.jfineco.2015.05.002', relation: builds-on, note: 'Position-level value-add measure is conceptually analogous to their fund-level value-add (p. 811)' }
    - { cite: 'Akepanidtaworn et al. (2023)', doi: '10.1111/jofi.13271', relation: builds-on, note: 'Trade-based value-add tests build on their finding that institutional buying adds value while selling does not (p. 815)' }

  openQuestions:
    - 'Whether results extend to non-US institutional investors or to asset classes beyond equities; the sample covers US funds reading English-language news from Nov 2017 to Jun 2022 only (p. 824).'
    - 'Whether salience-driven or limited-capacity explanations can be fully disentangled; the paper shows limited-attention predictions hold but acknowledges salience channels make competing predictions and are difficult to rule out entirely (pp. 801, 803).'
    - 'Whether asymmetry between attentive buys and attentive sells is driven by short-selling constraints or by alpha decay; both explanations are consistent with the data but the paper cannot distinguish them (p. 820).'

  replicationCode:
    status: available

  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70009
      checked: 2026-05-17
      by: claude-opus-4-7
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0'
    - source: Crossref REST API works/10.1111/jofi.70009
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-01-16; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0, start=2026-01-16'

  extraction:
    - by: claude-opus-4-7
      date: 2026-05-17
      role: extracted
      note: Full text read (pp. 791–827); the eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Full PDF re-read (pp. 791-827). Added methods, scope,
        relatesTo, openQuestions, replicationCode, and proposedVocab frontmatter
        blocks. Replaced the old Theory tested section with the three formal
        sections (Theory / model, Method, Empirical specifications) with
        equations and specifications transcribed from the PDF: eq. 1 (p. 803),
        eq. 2 (p. 810), eq. 3 (p. 812), eq. 4 (p. 814). Core results table and
        Attribution block preserved verbatim from the prior extraction. Not
        human-verified; not reproduced.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against source PDF (pp.
        791-827). Two fixes applied to R8: (1) "other" buying-fund coefficient
        in Table X col (2) is -0.443** (significant at 5%), not insignificant
        as previously stated; (2) FF5 alpha for HF EW long-short (Table XI
        Panel B) is 0.446*** (1% level), corrected from ** to ***. All other
        locators, coefficients, t-stats, sample sizes, and equations (eqs.
        1-4) confirmed correct. No em-dashes or colorful adjectives found.

  rightsSignalConflict: true
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 38 pages. To replicate or extend
it, read the full source: the
[verbatim PDF](/library/kwan-liu-matthies-2026-institutional-investor-attention.pdf)
(machine-accessible) or the
[original](https://doi.org/10.1111/jofi.70009).

## TL;DR

Using a proprietary dataset of institutional investors' Internet news
reading (Nov 2017 to Jun 2022; ~482M fund-firm-quarters, 4,075 funds), the
paper measures fund attention to *macro* vs *firm-specific* news. Funds
reallocate attention to macro news when aggregate volatility rises; funds
that reallocate more strongly earn higher future returns. Firm-specific
attention tracks holdings ("attention habitats"), and attention to a stock
predicts that position's value-add, most so for value-relevant news and for
buying hedge funds, whose attention predicts stock returns.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Funds shift attention toward **macro news when aggregate volatility is high** | Table III, p. 804 | β = 0.25\*\* on VIX²ₜ₋₁; robust to VIX and realized vol; ≈ 5% of sample-SD in macro-attention share per 1-SD VIX² |
| R2 | Funds with **higher attention-reallocation sensitivity (β^VIX²) earn higher future returns** | Table IV, p. 806 | coef 0.31→0.36 (sig 5–1%); ≈ +0.36%/qtr (~1.4%/yr) per 1-SD; ~2× stronger in top VIX quartile (interaction 0.73\*\*) |
| R3 | High-β^VIX² funds look **more efficient** | §III.C | 0.78–1.74% less attention-weighted salience (sig 5%); +17% advanced-degree staff; trait persistent (62–66% stay vs 25% random); hedge funds >2× mutual funds' β^VIX² |
| R4 | Firm-specific **attention strongly tracks portfolio holdings** ("attention habitats") | Table V, p. 809 | held read 5–6× more than non-held (t sig 1%); with firm×time FE, 1-SD holdings ≈ 1.02-SD attention; fund×firm FE dominate the variance |
| R5 | **Attention to a stock predicts that position's value-add** | Table VI, p. 813 | 1-SD attention ≈ +3.3% SD position value-add; trade-based coef 0.074\*\*; ×trade-size 0.58\*\*\* (bigger trades, more value) |
| R6 | Value-add is **concentrated in value-relevant news** (business/financial newswires) | Table VIII, p. 817 | biz/fin-newswire attention×holdings 0.107\*\* / 0.123\*\*\*; retail and general news insignificant |
| R7 | Funds **attend more to buys than sells; attentive buys outperform** | Table IX, p. 819 | residualized attention: buy ≈ 1.6 vs sell ≈ 0.6 vs hold ≈ 0 (buy>sell sig 1%); attentive buys add value, sells mixed/insignificant |
| R8 | **Attention by buying hedge funds predicts future stock returns** | Tables X–XI, pp. 821–823 | Fama-MacBeth: buying-HF attention 0.51\*/0.56\*\*\* (MF negative/insignificant, other-fund negative/significant at 5%); ≈ +0.35%/mo (~4%/yr) per 1-SD; HF long-short 0.53%/mo EW (t=2.75), 0.80%/mo VW; FF5 α ≈ 0.45%\*\*\* EW; no predictability for held/sold |

**Overall (paper's conclusion).** Attention is a resource that funds
allocate, and the allocation contributes to performance. Funds that
reallocate attention to macro news in volatile times, and that attend to
value-relevant firm news, do better; the strongest stock-return signal is
attention by *buying hedge funds*.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Proprietary Internet news-reading data ("Data Partner", anonymized analytics firm), Nov 2017–Jun 2022 | The attention measure itself | Proprietary; not public or redistributable; no page |
| RavenPack 1.0 | News topic / subject / sentiment; stock-ticker mapping | [RavenPack](/wiki/licensed/ravenpack/) (licensed) |
| FactSet LionShares | Institutional holdings (13-F), institution classification | [FactSet LionShares](/wiki/licensed/factset-lionshares/) (licensed) |
| CRSP & Compustat | Returns, fundamentals, stock characteristics | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| VIX (CBOE) | Aggregate-volatility measure (VIX²) | [FRED](/wiki/datasets/fred/), free, series `VIXCLS` |
| SEC Form ADV, Form N-1A | Fund descriptions for classification | [Form ADV](/wiki/datasets/form-adv/) (via SEC IAPD, *not* EDGAR); [N-1A](/wiki/datasets/edgar/#form-n-1a-open-end-fund-registration) via SEC EDGAR |
| LinkedIn / Revelio Labs | Fund human capital (advanced-degree share) for R3 | [Revelio Labs](/wiki/licensed/revelio/) (licensed) |

Sample: 481,820,400 fund-firm-quarters; 4,075 distinct funds.

## Theory / model

The paper has no original structural model. It is purely empirical,
testing predictions from the limited- and rational-inattention literature.

The primary theoretical framework is Peng and Xiong (2006) and
Kacperczyk, Van Nieuwerburgh and Veldkamp (2016), whose models predict
that attention-constrained investors allocate more attention to
macroeconomic news when aggregate uncertainty is high. In those models,
information about macro conditions becomes more valuable during high-VIX
periods, so a rational fund reallocates limited attention toward it. A
competing interpretation (also from Peng and Xiong (2006), Kacperczyk
et al. (2014)) is that funds with more binding constraints react more
to macro news when volatility rises, which would predict lower, not
higher, future returns. The paper tests both predictions against data.

For firm-specific attention, the theoretical baseline is Van Nieuwerburgh
and Veldkamp (2010): in equilibrium, investors prefer to hold assets they
are more informed about and have incentives to acquire information about
assets they expect to hold. This generates a positive feedback between
attention and holdings. Further, a fund's attention to a stock should be
positively associated with the value the position contributes to the
fund's performance (position-level value-add), because learning about a
stock becomes more valuable when the fund expects to hold a larger
position.

There is no identification via a natural experiment. The paper controls
for potential confounds through rich fixed-effect structures (see Method
and Empirical specifications).

## Method

The paper applies standard panel-regression, Fama-MacBeth, and portfolio-sort
methods (`panel-regression`, `fama-macbeth`, `portfolio-sort`); it proposes
no new estimator.

**Attention measures.** The core attention measure is the fraction of a
fund's reading of news articles covering either macroeconomic conditions
(`InstAttn^{macro}_{it}`) or a specific firm (`InstAttn_{ist}`), derived
from event-level Internet news-reading data matched to fund identities via
the Data Partner (p. 796-799). Article topics and firm-stock mappings come
from RavenPack 1.0 (p. 797).

**Macroeconomic attention beta.** For each fund-quarter, the macroeconomic
attention sensitivity to aggregate volatility (`beta^{VIX^2}_{it}`) is
estimated by regressing weekly attention to macro news on contemporaneous
VIX^2 over a trailing 52-week window (p. 804). This fund-quarter-level
beta is then used as a predictor in quarterly fund-return regressions.

**Position-level value-add.** The outcome `h_{ist-1} x R_{st}` weights
the stock return by the fund's prior-period dollar holding share, following
Berk and Van Binsbergen (2015) in spirit (p. 811).

**Trade-based value-add.** The outcome `DeltaPosition_{ist-1} x R_{st}`
multiplies the future stock return by the dollar change in holdings from
`t-2` to `t-1`, isolating performance attributable to trading (p. 814).

**Stock-level return predictability.** Fama-MacBeth cross-sectional
regressions at the monthly frequency, with controls for size,
book-to-market, profitability, investment, and news coverage (p. 821).
Portfolio sorts rank stocks into quintiles by attention from buying funds
within each investor-type category (p. 822). Newey-West standard errors
with two lags are used in both (pp. 821, 822).

## Empirical specifications

### Specification 1: Macro attention and aggregate volatility (eq. 1, p. 803)

```
InstAttn^macro_{it} = beta * VIX^2_{t-1} + mu_i + Controls + epsilon_{it}
```

- LHS: fraction of fund `i`'s reading in month `t` about macro news.
- RHS: `VIX^2_{t-1}`, the average VIX-squared in the prior month (normalized
  to mean 0, SD 1); `mu_i` = fund fixed effects; controls include market
  return.
- SE: clustered by fund and time (p. 804).
- Sample: 234,934 fund-month observations (Table III, p. 804).
- Robustness: replaces VIX^2 with VIX and with realized S&P 500 daily
  volatility (columns 3-4 of Table III).

### Specification 2: Fund-level return predictability (Table IV, p. 806)

```
Fund Ret_{it} = gamma * beta^{VIX^2}_{it-1} + lambda * [beta^{VIX^2}_{it-1} x VIX_{t-1}]
                + FundFE + TimeFE + Controls + epsilon_{it}
```

- LHS: quarterly fund return weighted by holdings at `t-1`.
- RHS: `beta^{VIX^2}_{it-1}` (attention-reallocation sensitivity, normalized);
  interaction with VIX level; controls include log AUM and log articles read.
- SE: clustered by fund and time (p. 806).
- Sample: 51,207 fund-quarter observations (Table IV, p. 806).

### Specification 3: Attention and holdings - intensive margin (eq. 2, p. 810)

```
InstAttn_{ist} = alpha + beta * h_{ist-1} + epsilon_{ist}
```

- LHS: share of fund `i`'s reading devoted to firm `s` in quarter `t`.
- RHS: `h_{ist-1}` = dollar share of firm `s` in fund `i`'s portfolio at
  end of quarter `t-1`; `alpha` denotes fixed effects (fund x time, firm x
  time in various columns).
- SE: clustered by fund, firm, and time (p. 809).
- Sample: held stocks only (`h_{ist-1} > 0`); 11,910,288 fund-stock-quarter
  observations (Table V, p. 809).

### Specification 4: Position-level value-add (eq. 3, p. 812)

```
h_{ist-1} x R_{st} = alpha + beta * InstAttn_{ist-1} + delta * h_{ist-2} + epsilon_{ist}
```

- LHS: position-level value-add (holding weight times next-quarter return,
  scaled by 100).
- RHS: `InstAttn_{ist-1}` = fraction of reading about firm `s` in `t-1`
  relative to total fund reading; `h_{ist-2}` controls for prior-period
  holdings.
- FE: fund x time; or fund x time + firm x time (columns 1-3, Table VI,
  p. 813).
- SE: clustered by fund, firm, and time.
- Sample: held stocks (`h_{ist-1} > 0`); ~11.9M fund-stock-quarter obs.

### Specification 5: Trade-based value-add (eq. 4, p. 814)

```
DeltaPosition_{ist-1} x R_{st} = alpha + beta * InstAttn_{ist-1} + delta * h_{ist-2} + epsilon_{ist}
```

- LHS: trade-based value-add (dollar change in holdings from `t-2` to `t-1`
  times return at `t`, scaled by 100).
- RHS: same regressors as specification 4; also interacted with trade size.
- FE: firm x time; fund x time (Table VI, Panel B, p. 813).
- SE: clustered by fund, firm, and time.
- Sample: traded positions only; ~11.1M fund-stock-quarter observations.

### Specification 6: Stock-level Fama-MacBeth return predictability (Table X, p. 821)

```
R_{st+1} x 100 = a_t + b_t * AttnBuying_{st} + controls_t + u_{st}
```

- LHS: monthly stock return times 100.
- RHS: attention by buying (or holding/selling) hedge funds, mutual funds, or
  other funds; controls include size, book-to-market, gross profitability,
  investment, log news coverage, and log number of funds in the action
  category.
- Coefficients: time-series average of cross-sectional OLS slopes.
- SE: Newey-West with two lags (p. 821).
- Sample: 54 monthly periods (Nov 2017 to Jun 2022); each period ~500-3000
  stocks with adequate news coverage.

### Specification 7: Portfolio sorts by buying-fund attention (Table XI, p. 822-823)

Stocks are ranked into five quintiles each quarter by the attention-to-buys
measure from the Fama-MacBeth specification, separately for hedge funds,
mutual funds, and other funds. Equal-weighted (EW) and value-weighted (VW)
returns to each quintile and the long-short (H-L) spread are computed over
the next three months. Factor alphas (CAPM, FF3, FF3+MOM, FF5) are estimated
with Newey-West two-lag adjustment (Table XI, Panel B, p. 823).

## When to read the full paper

Use the [mirrored PDF](/library/kwan-liu-matthies-2026-institutional-investor-attention.pdf)
if you are: replicating (code in the journal's Supporting Information);
extending the attention measure or the value-add tests; doing a literature
review where the Internet Appendix robustness matters; or auditing a
specific coefficient. The locators above point you to the exact table. For
"what did this paper find," the table above is sufficient and is the
intended default.

## Attribution & rights

Source: peer-reviewed, *The Journal of Finance* 81(2). This distillation
was extracted by an LLM on 2026-05-17 and is **not human-verified or
independently reproduced**. Licence, verification trail, and takedown
policy: [Open Library](/library).

> **Attribution (CC BY 4.0).** Kwan, Alan, Yukun Liu, and Ben Matthies.
> "Institutional Investor Attention." *The Journal of Finance* 81, no. 2
> (April 2026): 791–827. DOI: 10.1111/jofi.70009. © 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**. The
> verbatim, unmodified PDF is mirrored in the [Open Library](/library).
