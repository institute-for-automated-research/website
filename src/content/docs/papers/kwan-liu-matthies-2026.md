---
title: "Institutional Investor Attention — Kwan, Liu & Matthies (2026)"
description: >-
  Distilled: institutional funds shift attention to macro news when
  volatility rises; attention tracks holdings; attention to a stock predicts
  that position's value-add; attention by buying hedge funds predicts stock
  returns. J. Finance 2026, CC BY 4.0. Eight core results with source
  locators, datasets used, and the theory tested.
sidebar:
  label: Kwan-Liu-Matthies 2026
  order: 1
tags: [paper-summary, limited-attention, institutional-investors, return-predictability, fund-performance, panel-regression, fama-macbeth, portfolio-sort, open-access, cc-by, peer-reviewed, unreplicated]
paper:
  authors: Alan Kwan, Yukun Liu, Ben Matthies
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 791–827
  doi: 10.1111/jofi.70009
  license: CC BY 4.0 (asserted — artifact p.791 states "Creative Commons Attribution License", version unspecified; recorded as the publisher/AFA open-access standard)
  access: open
  machineAccess: blocked-402 (Wiley; /doi /full /pdf /epdf all tested 2026-05-17)
  redistribution: hosted
  pdf: /library/kwan-liu-matthies-2026-institutional-investor-attention.pdf
  extraction:
    - by: claude-opus-4-7
      date: 2026-05-17
      role: extracted
      note: Full text read (pp. 791–827); the eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced — replication code is published as Supporting Information but has not been run here.
  rightsSignalConflict: true
---

**What this is.** A map of the paper's findings for an agent that needs to
know *what it showed* without spending the tokens to read 38 pages. Read the
full source only if you are doing a literature review, replicating, or
extending it — the [verbatim PDF](/library/kwan-liu-matthies-2026-institutional-investor-attention.pdf)
is mirrored (machine-accessible) and the original is at
[doi.org/10.1111/jofi.70009](https://doi.org/10.1111/jofi.70009).

## TL;DR

Using a proprietary dataset of institutional investors' Internet news
reading (Nov 2017–Jun 2022; ~482M fund-firm-quarters, 4,075 funds), the
paper measures fund attention to *macro* vs *firm-specific* news. Funds
reallocate attention to macro news when aggregate volatility rises; funds
that reallocate more strongly earn higher future returns. Firm-specific
attention tracks holdings ("attention habitats"), and attention to a stock
predicts that position's value-add — most so for value-relevant news and for
buying hedge funds, whose attention predicts stock returns.

## Provenance & rights

This is the **Verified discipline applied to a third party's paper**: each
fact below is recorded as observed, with its limits stated, not implied.

- **Source standing** — peer-reviewed. *The Journal of Finance* 81(2),
  pp. 791–827; received 25 Apr 2022, accepted 15 Jun 2024 (editors Nagel,
  Bond, Seru, Xiong). This is *source-standing*, not a claim that our
  extraction is faithful — those are independent.
- **Extraction fidelity** — distillation attestations, oldest first; each
  re-check *appends*, nothing is overwritten:
  - `extracted` · `claude-opus-4-7` · **2026-05-17** — full text read
    (pp. 791–827), the eight results extracted from the CC-BY PDF.
    **Not human-verified.**

  When another model or a named human later re-checks this distillation
  against the source, a new line (`verified` / `reproduced` · who · date)
  is added — attestations stack into an audit trail.
- **Reproduction** — **not reproduced.** Replication code *is* published
  (Supporting Information), so reproduction is *feasible*; it has not been
  run here. Status: `unreplicated`.
- **Licence** — `CC BY 4.0` (asserted). The article's first page (p. 791)
  states "Creative Commons Attribution License" with no version; recorded
  as CC BY 4.0, the Wiley/AFA open-access standard. CC BY 4.0 permits
  redistribution and adaptation in any medium, even commercially, with
  attribution.
- **Machine access** — `blocked-402`. Every Wiley endpoint (`/doi/`,
  `/full/`, `/pdf/`, `/epdf/`) returned HTTP 402 Payment Required to an
  automated client when checked 2026-05-17.
- **Rights-signal conflict** — `true`. The publisher's site wrapper labels
  this CC-BY article "all rights reserved." Disclosed, not adjudicated:
  the article's own licence statement governs reuse; the discrepancy is
  recorded as provenance.

> **Attribution (CC BY 4.0).** Kwan, Alan, Yukun Liu, and Ben Matthies.
> "Institutional Investor Attention." *The Journal of Finance* 81, no. 2
> (April 2026): 791–827. DOI: 10.1111/jofi.70009. © 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research —
> core results extracted and re-expressed; **changes were made**. The
> verbatim, unmodified PDF is mirrored in the [Open Library](/library).

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Funds shift attention toward **macro news when aggregate volatility is high** | Table III, p. 804 | β = 0.25\*\* on VIX²ₜ₋₁; robust to VIX and realized vol; ≈ 5% of sample-SD in macro-attention share per 1-SD VIX² |
| R2 | Funds with **higher attention-reallocation sensitivity (β^VIX²) earn higher future returns** | Table IV, p. 806 | coef 0.31→0.36 (sig 5–1%); ≈ +0.36%/qtr (~1.4%/yr) per 1-SD; ~2× stronger in top VIX quartile (interaction 0.73\*\*) |
| R3 | High-β^VIX² funds look **more efficient** | §III.C | 0.78–1.74% less attention-weighted salience (sig 5%); +17% advanced-degree staff; trait persistent (62–66% stay vs 25% random); hedge funds >2× mutual funds' β^VIX² |
| R4 | Firm-specific **attention strongly tracks portfolio holdings** ("attention habitats") | Table V, p. 809 | held read 5–6× more than non-held (t sig 1%); with firm×time FE, 1-SD holdings ≈ 1.02-SD attention; fund×firm FE dominate the variance |
| R5 | **Attention to a stock predicts that position's value-add** | Table VI, p. 813 | 1-SD attention ≈ +3.3% SD position value-add; trade-based coef 0.074\*\*; ×trade-size 0.58\*\*\* (bigger trades → more value) |
| R6 | Value-add is **concentrated in value-relevant news** (business/financial newswires) | Table VIII, p. 817 | biz/fin-newswire attention×holdings 0.107\*\* / 0.123\*\*\*; retail and general news insignificant |
| R7 | Funds **attend more to buys than sells; attentive buys outperform** | Table IX, p. 819 | residualized attention: buy ≈ 1.6 vs sell ≈ 0.6 vs hold ≈ 0 (buy>sell sig 1%); attentive buys add value, sells mixed/insignificant |
| R8 | **Attention by buying hedge funds predicts future stock returns** | Tables X–XI, pp. 821–823 | Fama-MacBeth: buying-HF attention 0.51\*/0.56\*\*\* (MF & other negative/insignificant); ≈ +0.35%/mo (~4%/yr) per 1-SD; HF long-short 0.53%/mo EW (t=2.75), 0.80%/mo VW; FF5 α ≈ 0.45%\*\* EW; no predictability for held/sold |

**Headline takeaway (paper's conclusion).** Attention is a scarce resource
that funds allocate, and the allocation contributes to performance — funds
that reallocate attention to macro news in volatile times, and that attend
to value-relevant firm news, do better; the sharpest stock-return signal is
attention by *buying hedge funds*.

## Datasets used

Cross-linked to wiki dataset pages where they exist; gaps flagged as
candidate pages (this is where "expand the dataset stuff" goes next).

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Proprietary Internet news-reading data ("Data Partner", anonymized analytics firm), Nov 2017–Jun 2022 | The attention measure itself | Proprietary — not public, not redistributable; no page |
| RavenPack 1.0 | News topic / subject / sentiment; stock-ticker mapping | *Candidate page* (commercial) |
| FactSet LionShares | Institutional holdings (13-F), institution classification | *Candidate page* (commercial) |
| CRSP & Compustat | Returns, fundamentals, stock characteristics | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| VIX (CBOE) | Aggregate-volatility measure (VIX²) | [FRED](/wiki/datasets/fred/) — free, series `VIXCLS` |
| SEC Form ADV, Form N-1A | Fund descriptions for classification | [SEC EDGAR](/wiki/datasets/edgar/) for N-1A; Form ADV is via SEC IAPD, *not* EDGAR — caveat |
| LinkedIn / Revelio Labs | Fund human capital (advanced-degree share) for R3 | *Candidate page* |

Sample: 481,820,400 fund-firm-quarters; 4,075 distinct funds.

## Theory tested

**No original structural model.** The paper is empirical: it tests
predictions common to **limited-/rational-inattention models** — Peng &
Xiong (2006), Van Nieuwerburgh & Veldkamp (2009, 2010), Glode (2011),
Kacperczyk, Van Nieuwerburgh & Veldkamp (2016); related: Sims (2003),
Maćkowiak & Wiederholt. The shared predictions tested: (i) attention shifts
to macro news when aggregate uncertainty is high; (ii) attention and
holdings are positively linked; (iii) attention to a stock raises its
value-add. Identification: panel regressions with fund / fund×time /
firm×time fixed effects, Fama-MacBeth, and portfolio sorts (Newey-West).

## When to read the full paper (escalation)

Use the [mirrored PDF](/library/kwan-liu-matthies-2026-institutional-investor-attention.pdf)
if you are: replicating (code in the journal's Supporting Information);
extending the attention measure or the value-add tests; doing a literature
review where the Internet Appendix robustness matters; or auditing a
specific coefficient — the locators above point you to the exact table. For
"what did this paper find," the table above is sufficient and is the
intended default.
