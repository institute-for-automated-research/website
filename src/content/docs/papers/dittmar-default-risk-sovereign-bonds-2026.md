---
title: "Default Risk and Sovereign Bond Pricing: Dittmar, Hsu, Roussellet & Simasek (2026)"
description: >-
  Distilled: U.S. Treasury default risk is significantly positively related
  to the spread between inflation-linked swap rates and breakeven inflation
  (ILSBEI); the channel operates primarily through inflation dynamics upon
  default, not differential recovery rates; a no-arbitrage affine term
  structure model shows credit risk explains most of the ILSBEI differential
  at longer maturities outside the financial crisis. J. Finance 2026,
  paywalled. Eight core results with source locators, datasets used, and the
  theory tested.
sidebar:
  label: Dittmar et al. 2026
  order: 1
tags: [paper-summary, fixed-income, sovereign-debt, default-risk, inflation, term-structure, tips, breakeven-inflation, panel-regression, instrumental-variables, affine-term-structure, peer-reviewed, unreplicated, data:gsw-yields, data:bloomberg, data:fred, data:bls-cpi]
paper:
  authors: Robert F. Dittmar, Alex Hsu, Guillaume Roussellet, Peter Simasek
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 829–869
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 8
  doi: 10.1111/jofi.70014
  license: >-
    Paywalled (Wiley VOR licence: http://onlinelibrary.wiley.com/termsAndConditions#vor,
    content-version vor, delay-in-days 0, start 2026-01-06; confirmed via Crossref
    DOI metadata 2026-05-31). Copyright 2026 the American Finance Association.
    Note: the downloaded PDF carries a sidebar watermark reading "Creative Commons
    License" but the Crossref metadata contains no CC URL: only the Wiley T&C
    VOR and TDM licences; the watermark is likely a download-interface artefact
    and does not override the publisher licence.
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley site; confirmed paywalled via Crossref licence metadata 2026-05-31)'
  redistribution: extract-only
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70014
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor,
        delay-in-days=0, start=2026-01-06;
        license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1,
        delay-in-days=0, start=2026-01-06. No CC licence found.
  rightsSignalConflict: true
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: >-
        Full text read (pp. 829–869); eight results extracted from the PDF.
        Not human-verified. Not reproduced. Replication code is published as
        Supporting Information at the publisher's website but has not been run here.
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 42 pages. To replicate or extend
it, consult the original:
[https://doi.org/10.1111/jofi.70014](https://doi.org/10.1111/jofi.70014)
(paywalled).

## TL;DR

Using monthly U.S. data from June 2005 to December 2020, the paper
documents that the spread between the inflation-linked swap (ILS) rate and
the breakeven inflation rate (BEI), the ILSBEI differential, is
significantly positively related to two measures of U.S. sovereign default
risk: growth in Treasury debt held by the public and Euro-denominated
five-year CDS spreads. Controlling for liquidity (VIX, LIBOR-OIS, OTR
spread, HPW noise), debt growth remains a robust predictor. Treasury debt
growth is used as an instrument for CDS to address endogeneity, and
instrumented CDS loads significantly on the ILSBEI spread across tenors of
two through seven years. A new affine no-arbitrage term structure model
estimated by Extended Kalman Filter decomposes the ILSBEI spread into
credit and liquidity components: at the 10-year maturity, most of the
ILSBEI spread is explained by the credit component outside the financial
crisis. The dominant transmission channel is the correlation between
inflation dynamics and default probability (hyperinflation upon default),
not differential loss-given-default between nominal Treasuries and TIPS.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **ILSBEI differential is positively related to Treasury debt growth** (G) | Table II, p. 837 | G coef 0.013\*\*\* (level), 0.025\*\*\* (first diff); R² = 0.217 (level), 0.113 (FD); debt growth captures ~22% of level variation |
| R2 | **Debt growth relationship is robust to liquidity and slow-moving-capital controls** (HPW noise, LIBOR-OIS, VIX) | Table III, p. 839 | G coef 0.004\*\* (level), 0.018\*\*\* (FD) with full liquidity controls; HPW noise also significantly positive (0.053\*\*\* level); overall R² = 0.808 |
| R3 | **Postcrisis (2010-2020) results are qualitatively similar**; CDS is a stronger predictor than in the full sample | Table IV, p. 840 | CDS coef 0.352\*\*\* (spec 2); with both G and CDS, CDS coef 0.287\*\*\* and G coef 0.002\* |
| R4 | **Treasury debt growth is a strong instrument for CDS**; instrumented CDS is significantly positively related to ILSBEI | Table V Panel B, p. 842 | 2SLS: instrumented CDS coef on ILSBEI = 1.205\*\* (SE 0.475); on ILS = -2.174\*\*\*, on nominal TSY = -3.643\*\*; TIPS coefficient insignificant (-0.265) |
| R5 | **Effect is robust across maturities 2–7 years**; 10-year loading positive but not statistically significant | Table VI, p. 843 | Instrumented CDS on ILSBEI: 2y = 1.097\*\* (SE 0.522), 3y = 1.324\*\*\* (SE 0.511), 7y = 0.868\*\* (SE 0.341), 10y = 0.385 (SE 0.250) |
| R6 | **Term structure model fits the data well** (R² 93–99% for ILS; 99%+ for nominals; ILSBEI R² 81–91% for maturities 2–7y) | Table VIII, p. 859 | ILS RMSE 6–13 bps; Nominal RMSE 6–10 bps; ILSBEI RMSE 8–11 bps; model-implied default probabilities peak at ~3% (10y) during 2008–2009 crisis |
| R7 | **Credit component of ILSBEI is small at short maturities but large at long maturities**; outside the crisis, more than half of the 10-year spread is credit | Table IX / Figure 7, pp. 859–862 | Mean credit component (Cred.): 7.57 bps (2y), 10.07 bps (3y), 14.46 bps (5y), 18.16 bps (7y), 23.05 bps (10y); credit share rises from ~46% (2y) to ~78% (10y) on average |
| R8 | **Dominant channel is inflation jump upon default** (hyperinflation), not differential LGD or default priced in SDF alone | Figure 10 / §IV.F, pp. 865–866 | Comparative statics: inflation-upon-default channel (kappa_delta^pi) contributes 1–10 bps to ILSBEI (95% CI, orange curve); inflation/PD correlation channel contributes ~1 bp at 10y median (~3.5 bps at 97.5th percentile); default-in-SDF channel contributes near zero |

**Overall (paper's conclusion).** Credit risk can drive persistent deviations
between ILS rates and BEI rates that are often attributed solely to
liquidity. The interaction between inflation dynamics and default is the
primary source of differential pricing between nominal Treasuries and TIPS.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Gurkaynak, Sack, and Wright (GSW) zero-coupon yields (nominal Treasury and TIPS) | BEI construction; nominal yield curve estimation | no page yet (Federal Reserve Board data, publicly available) |
| Bloomberg ILS rates (zero-coupon, 2–10y maturities) | ILSBEI spread construction; model estimation target | no page yet (licensed Bloomberg terminal data) |
| U.S. Treasury debt held by public (monthly, Federal Reserve/Treasury) | Default risk proxy (G); instrument for CDS | [FRED](/wiki/datasets/fred/), series available via FRED |
| Euro-denominated 5-year U.S. Treasury CDS spreads | Alternative default risk measure; model estimation target | no page yet (Bloomberg/Markit licensed data) |
| BLS CPI-U (monthly) | Inflation measure for model | [FRED](/wiki/datasets/fred/), series `CPIAUCSL` |
| VIX (CBOE) | Liquidity/slow-moving capital control | [FRED](/wiki/datasets/fred/), series `VIXCLS` |
| LIBOR-OIS spread | Liquidity control (counterparty risk) | no page yet |
| Off-the-run / on-the-run 10y Treasury spread (OTR) | Liquidity control | no page yet (derived from GSW and Bloomberg) |
| HPW noise measure (Hu, Pan & Wang 2013) | Slow-moving capital proxy; TIPS liquidity intensity proxy | no page yet (academic dataset, Jun Pan's website) |
| OIS 6-month rate | Short-term riskless nominal yield for model | no page yet (Bloomberg) |

Sample: monthly, Nov 2004 to Dec 2019 (model estimation); Jun 2005 to Dec 2020 (regressions).

## Theory tested

**Structural model.** The paper builds a new **affine no-arbitrage term
structure model** of sovereign bonds with default risk, estimated via the
Extended Kalman Filter. The model has three blocks of state variables:
(i) three Gaussian riskless real factors (x_t, VAR(1)), (ii) two credit
and one liquidity factor (y_t, VARG dynamics), and (iii) gamma-zero credit
and liquidity event processes (delta_t). Inflation is driven by all factors
plus a credit event jump. Bond prices for riskless real bonds, defaultable
TIPS, defaultable nominal Treasuries, ILS, and sovereign CDSs are all
derived in closed form.

The model is used to test three channels through which sovereign default
affects the ILSBEI spread:

1. **Default priced in the SDF** (Lambda_delta): a price of default risk
   that lowers riskless real bond yields and affects nominal yields through
   the pricing kernel.
2. **Inflation jump upon default** (kappa_delta^pi): hyperinflation upon
   default raises the value of inflation swaps relative to nominal
   Treasuries, widening ILSBEI.
3. **Negative correlation between default probability and inflation**
   (kappa_y^pi negative): higher default probability predicts lower current
   inflation, which lowers the ILS rate.

Identification for the reduced-form regressions uses Treasury debt growth
as an instrument for CDS spreads (GMM, Newey-West corrected), on the
grounds that Treasury debt issuance decisions are exogenous to financial
market pricing frictions. The affine model is estimated on 23 observable
variables (ILS, nominal yields, TIPS, CDS at five maturities, OIS, CPI,
TIPS liquidity proxy) by Extended Kalman Filter maximum likelihood.

**Conclusion on channels:** Comparative statics show the inflation jump
upon default channel dominates. The default-in-SDF channel has near-zero
impact. The correlation channel moves ILS and BEI roughly equally so it
largely cancels in ILSBEI. Differential LGD between nominals and TIPS
(disindexation) is estimated to be negligible (disindexation rate rho*
close to one).

## When to read the full paper

Consult the original via [https://doi.org/10.1111/jofi.70014](https://doi.org/10.1111/jofi.70014)
if you are: replicating (code in journal Supporting Information); extending
the affine model to other sovereign issuers; studying how monetary policy
passivity interacts with default to generate inflation dynamics; or auditing
a specific coefficient. The locators above point to the exact tables and
figures. For "what did this paper find," the table above is sufficient and
is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). Copyright 2026 the
American Finance Association. This distillation was extracted by an LLM
on 2026-05-31 and is **not human-verified or independently reproduced**.
The paper is paywalled; no verbatim content is reproduced here.

> Dittmar, Robert F., Alex Hsu, Guillaume Roussellet, and Peter Simasek.
> "Default Risk and the Pricing of U.S. Sovereign Bonds." *The Journal of
> Finance* 81, no. 2 (April 2026): 829–869. DOI: 10.1111/jofi.70014.
> © 2026 the American Finance Association. All rights reserved.
> This page is an **extract-only distillation** by the Institute for
> Automated Research: core results summarised; no verbatim text reproduced.
