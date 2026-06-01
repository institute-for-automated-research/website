---
title: "Investment under Upstream and Downstream Uncertainty: Grigoris & Segal (2026)"
description: >-
  Distilled: upstream (supplier-level) uncertainty reduces firm investment,
  hiring, and working capital while downstream (customer-level) uncertainty
  has a weaker and often positive effect; the asymmetry is amplified for
  long time-to-build firms and scales to the macro level. J. Finance 2026,
  paywalled. Nine core results with source locators, datasets used, and the
  theory tested.
sidebar:
  label: Grigoris-Segal 2026
  order: 1
tags: [paper-summary, corporate-investment, uncertainty, supply-chains, real-options, production-networks, macro, panel-regression, peer-reviewed, unreplicated, data:wrds, data:factset-revere, data:bea-io, data:compustat-segments, data:nber-ces, data:fred]
paper:
  authors: Fotis Grigoris, Gill Segal
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 413–457
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70010
  license: 'Paywalled. Crossref DOI metadata returns Wiley VOR terms (content-version vor, URL onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0, start 2025-12-22) and a TDM licence; no Creative Commons licence found. Artifact p. 413: copyright 2025 the American Finance Association.'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley site; checked 2026-05-31)'
  redistribution: extract-only
  resultsCount: 9
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 413–457); nine results extracted from the PDF. Not human-verified. Not reproduced. Replication code is available as Supporting Information but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; R4 magnitude range corrected from "0.05-0.06 (t=3.24-4.60)" to "0.03-0.06 (t=3.15-4.60)" to include Panel B sector-proxy columns of Table V; all other eight rows confirmed correct.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70010
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0] content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-22; license[1] content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1; no CC licence present'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 45 pages. To replicate or extend
it, use the [original](https://doi.org/10.1111/jofi.70010) (paywalled) or
the replication code available in the journal's Supporting Information.

## TL;DR

Using granular supplier-customer link data from Compustat Segments and
FactSet Revere (1976-2019), the paper measures each firm's upstream
(supplier-level) and downstream (customer-level) uncertainty as the
realized stock return volatility of its trading partners. Upstream
uncertainty robustly suppresses investment, hiring, and working capital.
Downstream uncertainty has a weaker and often positive effect, flipping
sign for firms with long time-to-build periods. A production-based
real-option model with time-to-build generates this asymmetry: upstream
uncertainty raises the option value of waiting via the bad news principle,
while downstream uncertainty raises the opportunity cost of waiting via the
good news principle (convex future cash flows). The asymmetry scales to the
macro level: macrolevel upstream (downstream) uncertainty negatively
(positively) predicts GDP growth, consumption, investment, and
price-dividend ratios.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. All
firm-level independent variables are scaled by their unconditional
standard deviation. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Upstream uncertainty negatively predicts firm investment** | Table III col. (4), p. 438 | 1-SD increase: investment rate -0.03 (t = -2.80)\*\*\*; firm + year FE, controls |
| R2 | **Downstream uncertainty positively predicts firm investment** | Table III col. (6), p. 438 | 1-SD increase: investment rate +0.03 (t = 3.15)\*\*\*; firm + year FE, controls |
| R3 | **Asymmetry extends to working capital, employment, COGS, and intangibles** | Table IV, p. 439 | Upstream: significant negative in all four outcomes; downstream: positive (working capital t=2.18-3.32) or insignificant (employment, intangibles); upstream effect weakly larger in absolute value |
| R4 | **Downstream uncertainty effect on investment is stronger for long time-to-build firms** | Table V, p. 442 | Long vs. short interaction: coef 0.03-0.06 (t=3.15-4.60)\*\*\* across three proxies (depreciation, sector, R&D); Wald test rejects equality at 10% in all specs |
| R5 | **Upstream uncertainty effect on investment is amplified for low-reversibility (hard-to-abandon) firms** | Table VI col. (2), p. 443 | LowReverse: -0.05 (t=-3.31)\*\*\*; HighReverse: -0.03 (t=-1.42, insignificant) |
| R6 | **Downstream uncertainty effect on investment is stronger for high-reversibility firms** | Table VI col. (4), p. 443 | HighReverse: +0.05 (t=3.60)\*\*\*; LowReverse: +0.02 (t=1.32, insignificant) |
| R7 | **Macrolevel upstream uncertainty shock leads to economic contraction** | Figure 6, p. 448 | 1-SD shock: industrial production and GDP fall ~0.15 SD, consumption and investment fall ~0.10 SD; P/D ratio falls ~0.10-0.15 SD; effects persist ~4 quarters (90% CI excludes zero) |
| R8 | **Macrolevel downstream uncertainty shock leads to economic expansion** | Figure 7, p. 449 | 1-SD shock: industrial production, consumption, investment, and GDP rise ~0.10 SD for at least 4 quarters; P/D ratio rises ~0.10 SD for ~12 quarters; upstream impacts up to 50% larger in absolute magnitude |
| R9 | **COVID-19 onset was driven by downstream uncertainty spike, consistent with fast recovery** | Figure 9 / §IV.C, pp. 451-452 | Orthogonal downstream uncertainty spiked in March 2020 (while upstream uncertainty also rose); downstream dominance consistent with the recession being short-lived relative to upstream-driven recessions |

**Overall (paper's conclusion).** Uncertainty is not uniformly contractionary:
downstream uncertainty may have an expansionary impact. The asymmetry
arises from the time-to-build mechanism and the real-option structure of
investment, not from the magnitude of uncertainty.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP / Compustat (via WRDS), 1976-2019 | Investment rates, firm characteristics (size, leverage, tangibility, Tobin's q, profitability, past returns), stock return volatility | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Compustat Segments database, 1976-2002 | Supplier-customer links for early subsample (pre-FactSet) | no page yet |
| FactSet Revere Relationship database, 2003-2019 | Supplier-customer links (primary source for post-2003 period; more comprehensive than Segments) | no page yet |
| NBER-CES Manufacturing Industry database | Validates link between input price uncertainty and supplier return volatility; upstream and downstream price correlation check | no page yet |
| BEA Input-Output (Make and Use) tables, 1977-2012 | Industry upstreamness scores for macrolevel analysis; published every 5 years | no page yet |
| FRED (VIX, industrial production index) | VIX used in COVID-19 episode illustration; IP index as macro outcome variable | [FRED](/wiki/datasets/fred/) |

Sample: firm-year panel 1976-2019; ~17,000-50,786 observations depending on
specification (Table III). Macrolevel analysis: 1976Q1-2019Q4.

## Theory tested

**Production-based real-option model with time-to-build (Section II, pp.
421-434).** The focal firm holds a growth option to expand capacity. The
key structural feature is time-to-build: the firm pays input costs at time
0 but receives output revenues only after H periods. This creates an
asymmetry between upstream uncertainty (input price uncertainty, affecting
the short run) and downstream uncertainty (output price uncertainty,
affecting the longer run after the build-up stage concludes).

Mechanism:

- Both uncertainties increase the option value of waiting (bad news
  principle, Bernanke 1983): higher upstream or downstream uncertainty
  implies more extreme future input or output prices, making it worth
  waiting to learn.
- Only downstream uncertainty also increases the opportunity cost of
  waiting. During time-to-build, forgone revenues are a convex function of
  the future output price (because the firm can disinvest if output price
  falls). This convexity grows with downstream uncertainty, raising the
  cost of delay (good news principle).
- Net effect: upstream uncertainty unambiguously delays investment;
  downstream uncertainty has an ambiguous and potentially positive effect
  that is increasing in the length of the time-to-build period.

Four testable hypotheses (§II.C.4, p. 434):

1. Upstream-investment association is unambiguously negative.
2. Downstream-investment association is weaker in absolute value, can be positive.
3. Downstream effect is more positive for firms with longer time-to-build.
4. Harder-to-abandon firms show a more negative (less positive) upstream
   (downstream) effect.

All four are confirmed empirically.

Identification: panel regressions with firm and year fixed effects plus
controls for firm's own uncertainty. Robustness includes option-implied
volatility, idiosyncratic volatility, sales-weighted uncertainty measures,
industry-time FE, and an IV approach following Alfaro et al. (2024).
Macrolevel evidence uses smooth local projections (SLPs, Barnichon and
Brownlees 2019) with 1976Q1-2019Q4 data.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70010) (institutional
access required) if you are: replicating (code in Supporting Information);
extending the supply-chain uncertainty measures or time-to-build
heterogeneity tests; auditing the IV strategy or the macrolevel SLP
estimates; or reviewing the COVID-19 application in §IV.C. The locators
above point to the exact table or figure.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026.
© 2025 the American Finance Association. This distillation was
extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The paper is paywalled; no CC licence is
present in Crossref metadata or on the artifact. Reproduction of the
verbatim text requires a licence from the publisher.

> Grigoris, Fotis, and Gill Segal. "Investment under Upstream and Downstream
> Uncertainty." *The Journal of Finance* 81, no. 1 (February 2026): 413–457.
> DOI: 10.1111/jofi.70010. Extract-only; all rights reserved by the
> American Finance Association / Wiley.
