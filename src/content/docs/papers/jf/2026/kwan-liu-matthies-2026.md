---
title: "Institutional Investor Attention: Kwan, Liu & Matthies (2026)"
description: >-
  Distilled: institutional funds shift attention to macro news when
  volatility rises; attention tracks holdings; attention to a stock predicts
  that position's value-add; attention by buying hedge funds predicts stock
  returns. J. Finance 2026, CC BY 4.0. Eight core results with source
  locators, datasets used, and the theory tested.
sidebar:
  label: Kwan-Liu-Matthies 2026
  order: 1
tags: [paper-summary, limited-attention, institutional-investors, return-predictability, fund-performance, panel-regression, fama-macbeth, portfolio-sort, open-access, cc-by, peer-reviewed, unreplicated, data:fred, data:edgar, data:wrds, data:ravenpack, data:factset-lionshares, data:revelio, data:form-adv]
paper:
  authors: Alan Kwan, Yukun Liu, Ben Matthies
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 791–827
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  doi: 10.1111/jofi.70009
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0, delay-in-days 0, start 2026-01-16; corroborated by artifact p.791 Creative Commons Attribution License)'
  access: open
  machineAccess: 'blocked-402 (Wiley site wrapper; /doi /full /pdf /epdf all tested 2026-05-17; the paywalled wrapper does not override the CC-BY VOR licence in the publisher own DOI metadata)'
  redistribution: hosted
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70009
      checked: 2026-05-17
      by: claude-opus-4-7
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0'
  pdf: /library/kwan-liu-matthies-2026-institutional-investor-attention.pdf
  extraction:
    - by: claude-opus-4-7
      date: 2026-05-17
      role: extracted
      note: Full text read (pp. 791–827); the eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
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
| R8 | **Attention by buying hedge funds predicts future stock returns** | Tables X–XI, pp. 821–823 | Fama-MacBeth: buying-HF attention 0.51\*/0.56\*\*\* (MF & other negative/insignificant); ≈ +0.35%/mo (~4%/yr) per 1-SD; HF long-short 0.53%/mo EW (t=2.75), 0.80%/mo VW; FF5 α ≈ 0.45%\*\* EW; no predictability for held/sold |

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

## Theory tested

**No original structural model.** The paper is empirical: it tests
predictions common to **limited- and rational-inattention models**: Peng &
Xiong (2006), Van Nieuwerburgh & Veldkamp (2009, 2010), Glode (2011),
Kacperczyk, Van Nieuwerburgh & Veldkamp (2016); related: Sims (2003),
Maćkowiak & Wiederholt. The shared predictions tested: (i) attention shifts
to macro news when aggregate uncertainty is high; (ii) attention and
holdings are positively linked; (iii) attention to a stock raises its
value-add. Identification: panel regressions with fund / fund×time /
firm×time fixed effects, Fama-MacBeth, and portfolio sorts (Newey-West).

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
