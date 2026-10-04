---
title: "Tick Size and Market Quality: Barardehi, Dixon, Liu & Lohr (2026)"
description: >-
  Distilled: The U.S. Tick Size Pilot (TSP) harmed liquidity for stocks with
  quoted spreads below 10 cents but improved it for stocks with spreads above
  15 cents, explaining mixed results across prior studies that pool stocks with
  very different prevailing spreads. Journal of Financial Markets 2026, CC BY 4.0.
  Seventeen core results with source locators, datasets used, the DiD specification,
  and empirical specifications.
sidebar:
  label: Barardehi et al. 2026
  order: 1
tags: [paper-summary, equities, market-microstructure, tick-size, liquidity,
       transaction-costs, panel-regression, panel-data,
       open-access, cc-by, peer-reviewed, unreplicated, data:taq, data:midas, data:wrds]
paper:
  authors: Yashar H. Barardehi, Peter Dixon, Qiyu Liu, Ariel Lohr
  authorList:
    - { family: Barardehi, given: Yashar H., orcid: 0000-0003-4671-5928, affiliation: Chapman University }
    - { family: Dixon, given: Peter, orcid: 0000-0002-6121-7989, affiliation: US Securities and Exchange Commission }
    - { family: Liu, given: Qiyu, orcid: 0000-0003-1475-2732, affiliation: US Securities and Exchange Commission }
    - { family: Lohr, given: Ariel, affiliation: US Securities and Exchange Commission }
  year: 2026
  venue: Journal of Financial Markets 78 (2026) 101024
  venueShort: J. Fin. Markets 2026
  tier: lower
  doi: 10.1016/j.finmar.2025.101024
  jel:
    codes: [G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: []
  dataAccess: licensed-commercial
  outcome:
    - quoted bid-ask spread
    - effective spread
    - NBBO quoted depth
    - cumulative order-book depth
    - round-trip transaction cost (CRT)
    - quote-improvement-to-deterioration ratio (QID)
    - cancel-to-trade ratio
  outcomeClass: [market-microstructure]
  license: "CC BY 4.0 (confirmed via Crossref works/10.1016/j.finmar.2025.101024: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-10-15; corroborated by CC BY notice on artifact p. 1)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF (Elsevier via DOI, 2026-06-25)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 17
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [liquidity, undercutting-channel, pricing-fidelity]
  scope:
    region: US
    assetClass: "US equities (small-cap, market cap below $3B; Tick Size Pilot stocks)"
    period: 2016-08..2018-11
    frequency: daily
    dataType: [market]
    granularity: [security]
    n: "1,581 stocks in the imposition sample (619 treated, 962 control); 1,585 in the conclusion sample (619 treated, 966 control)"
  findings:
    - { ref: R1, outcome: quoted bid-ask spread, metric: coefficient, value: "QR Pilot x Event: Bin 1 (tick-constrained, <5c) +0.032*** (t=19.36); Bin 2 (near-tick, 5-10c) +0.033*** (t=12.81); Bin 3 (10-15c) +0.0079* (t=1.69); Bin 4 (wide-spread, >15c) -0.048*** (t=-3.63)", direction: mixed, vsBenchmark: "opposite-sign effects for narrow vs wide spreads; Bin 3 does not show a clean reversal across imposition and conclusion" }
    - { ref: R2, outcome: effective spread, metric: coefficient, value: "QR Pilot x Event: Bin 1 +0.033*** (t=26.19); Bin 2 +0.025*** (t=16.46); Bin 3 +0.0075*** (t=2.84); Bin 4 -0.019*** (t=-3.13)", direction: mixed, vsBenchmark: "harmful for spreads below 10c; beneficial for spreads above 15c" }
    - { ref: R3, outcome: quote-improvement-to-deterioration ratio (QID), metric: coefficient, value: "QR Pilot x Event (imposition): Bin 1 -0.27*** (t=-17.90); Bin 2 -0.23*** (t=-15.01); Bin 3 -0.16*** (t=-10.83); Bin 4 -0.11*** (t=-10.81); TSP conclusion all bins positive and significant", direction: negative, vsBenchmark: "QID rebounds at TSP conclusion, consistent with undercutting channel" }
    - { ref: R4, outcome: NBBO quoted depth, metric: coefficient, value: "Ln(NBBO Depth) QR: Bin 1 +1.06*** (t=20.89); Bin 2 +0.91*** (t=20.34); Bin 3 +0.49*** (t=9.88); Bin 4 +0.21*** (t=5.99)", direction: positive, vsBenchmark: "depth rises for all bins; largest log-increase for tick-constrained stocks" }
    - { ref: R5, outcome: round-trip transaction cost (CRT), metric: coefficient, value: "10-round-lot CRT QR: Bin 1 +0.023*** (t=13.98); Bin 4 -0.075*** (t=-4.10); at 2500 shares Bin 1 +0.008*** (Table 4 y=25, still positive); near-uniformly negative across bins at 5000+ shares", direction: mixed, vsBenchmark: "harmful for narrow-spread stocks; beneficial for wide-spread stocks and large trades" }
    - { ref: R6, outcome: effective spread threshold, metric: coefficient, value: "Rolling-bin QR: TSP effect on effective spread positive and significant below ~10c and negative above ~16c, with ~10-16c unclear; 500-share CRT cost rises below ~9c and falls above ~13c", direction: mixed, vsBenchmark: "thresholds where the larger tick shifts from harmful to beneficial (Fig. 3, p. 13)" }
    - { ref: R7, outcome: quoted bid-ask spread, metric: coefficient, value: "Werner et al. (2023) bifurcation applied to TSP imposition: TSC (tick-constrained) QR +0.046*** (t=23.57); TSU (non-tick-constrained) -0.0046 (t=-1.17, insignificant)", direction: none, vsBenchmark: "TSU null reflects cancellation of near-tick-constrained (+) and wide-spread (-) effects when pooled" }
    - { ref: R8, outcome: cancel-to-trade ratio, metric: coefficient, value: "Table 2 QR, imposition: Bin 1 -4.46*** (t=-7.96); Bin 2 -8.89*** (t=-8.37); Bin 3 -8.62*** (t=-4.75); Bin 4 -13.3*** (t=-6.42). Conclusion: +4.28*** (t=5.30), +8.80*** (t=14.55), +7.43*** (t=8.48), +12.0*** (t=8.98), respectively", direction: mixed, vsBenchmark: "Cancel-to-trade falls in all four bins when the tick rises from 1c to 5c, then rises in all four when it returns to 1c" }
    - { ref: R9, outcome: cumulative order-book depth, metric: coefficient, value: "Fig. 2 median estimates at 10c, 15c, 25c, 40c, and 60c from midpoint: depth increases at all displayed levels and in all bins; greatest effects are deeper in the book for tick-constrained stocks, uniform across levels for near-tick-constrained stocks, and closer to midpoint for intermediate- and wide-spread stocks", direction: mixed, vsBenchmark: "Depth profile varies by pre-shock spread bin; conclusion-period effects are negative across bins and distances" }
    - { ref: R10, outcome: round-trip transaction cost (CRT), metric: coefficient, value: "Table 4 imposition QR: Bin 2, 5 round lots +0.024*** (t=8.74) versus 50 round lots -0.064*** (t=-4.73); Bin 1, 5 round lots +0.045*** (t=19.78) versus 100 round lots -0.060*** (t=-5.45)", direction: mixed, vsBenchmark: "The larger tick becomes less harmful or more beneficial as trade size increases" }
    - { ref: R11, outcome: effective spread, metric: coefficient, value: "Table 5 imposition QR: TSC +0.031*** (t=27.82); TSU +0.0033 (t=1.54, insignificant); OLS: TSC +0.024*** (t=46.83); TSU -0.0065 (t=-1.30, insignificant)", direction: mixed, vsBenchmark: "The median-spread split yields a null TSU estimate for effective spreads, like the quoted-spread result in R7" }
    - { ref: R12, outcome: round-trip transaction cost (CRT), metric: coefficient, value: "Fig. 4: 100-share CRT rises below about 9c and falls above about 13c; 250-share CRT rises below about 9c and falls above about 14c; 1,000-share CRT rises below about 7c and falls above about 11c in pre-shock quoted spread", direction: mixed, vsBenchmark: "Each order-size threshold separates harmful from beneficial TSP effects; effects between thresholds are unclear" }
    - { ref: R13, outcome: quote-improvement-to-deterioration ratio (QID), metric: coefficient, value: "Table 2 conclusion QR: Bin 1 +0.26*** (t=18.66); Bin 2 +0.22*** (t=14.65); Bin 3 +0.22*** (t=12.85); Bin 4 +0.11*** (t=10.30)", direction: positive, vsBenchmark: "Undercutting measure reverses the negative imposition-period response in R3" }
    - { ref: R14, outcome: quoted bid-ask spread, metric: coefficient, value: "Table 3 conclusion QR: Bin 1 -0.052*** (t=-25.33); Bin 2 -0.022*** (t=-10.02); Bin 3 +0.033*** (t=5.42); Bin 4 +0.089*** (t=3.97)", direction: mixed, vsBenchmark: "Reducing the tick reverses imposition-period effects for narrow and wide bins; intermediate-spread effects remain positive" }
    - { ref: R15, outcome: effective spread, metric: coefficient, value: "Table 3 conclusion QR: Bin 1 -0.035*** (t=-26.64); Bin 2 -0.016*** (t=-13.94); Bin 3 +0.0051* (t=1.88); Bin 4 +0.027** (t=2.59)", direction: mixed, vsBenchmark: "Reducing the tick reverses imposition-period effects for narrow and wide bins; the intermediate estimate is small and marginally significant" }
    - { ref: R16, outcome: NBBO quoted depth, metric: coefficient, value: "Table 3 conclusion QR: Bin 1 -0.71*** (t=-7.45); Bin 2 -1.14*** (t=-23.55); Bin 3 -0.53*** (t=-14.29); Bin 4 -0.069*** (t=-2.91)", direction: negative, vsBenchmark: "NBBO depth falls in all bins after the tick returns from 5c to 1c; declines are largest in tick- and near-tick-constrained bins" }
    - { ref: R17, outcome: round-trip transaction cost (CRT), metric: coefficient, value: "Table 4 conclusion QR, 5 round lots: Bin 1 -0.060*** (t=-25.82), Bin 2 -0.014*** (t=-6.14), Bin 3 +0.045*** (t=6.67), Bin 4 +0.096*** (t=4.05); 50 round lots: Bin 1 +0.037*** (t=4.21), Bin 2 +0.14*** (t=6.73), Bin 3 +0.32*** (t=6.24), Bin 4 +0.094 (t=0.81)", direction: mixed, vsBenchmark: "The tick reduction lowers small-trade CRT for narrow bins and raises it for intermediate and wide bins; larger trade effects also vary by spread bin" }
  resultType: mixed
  relatesTo:
    - { cite: "Hu et al. (2018)", relation: extends, note: "confirms TSP harmed tick-constrained stocks; extends by identifying that wide-spread stocks (spreads >15c) were helped" }
    - { cite: "Griffith and Roseman (2019)", doi: '10.1016/j.jbankfin.2019.01.017', relation: extends, note: "prior TSP study with mixed results for non-tick-constrained; this paper resolves inference via four-bin spread segmentation" }
    - { cite: "Rindi and Werner (2019)", relation: extends, note: "prior TSP study; reconciles their non-tick-constrained findings as aggregation artifacts from pooling opposing effects" }
    - { cite: "Chung et al. (2020)", doi: '10.1016/j.jfineco.2019.11.004', relation: extends, note: "prior TSP study combining tick-constrained and non-tick-constrained; this paper shows finer spread bins required for clean inference" }
    - { cite: "Werner et al. (2023)", relation: tests, note: "tests their tick size tradeoff framework (pricing fidelity vs undercutting) by identifying empirical spread-level thresholds" }
    - { cite: "Barardehi et al. (2025)", doi: '10.2139/ssrn.4689334', relation: builds-on, note: "uses their QID undercutting measure to document the undercutting mechanism under the TSP" }
  openQuestions:
    - "The analysis compares only two tick size regimes (1 cent and 5 cents) and cannot establish the theoretically optimal number of ticks intra-spread in absolute terms; stocks with fewer than 2 ticks intra-spread may benefit from narrowing, while those with more than 15 may benefit from widening (p. 14)."
    - "Future researchers studying the 2024 SEC tick size change could apply the threshold methodology and spread-bin framework identified here to further refine empirical understanding of optimal tick size (p. 16)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 1-17); seven results extracted from Tables 2-5 and Figs. 1-5. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF (all 17 pages); R1-R4 and R7 magnitudes confirmed exact; R5 mislabelled '5-round-lot' corrected to '10-round-lot' (t-stats 13.98/-4.10 match Table 4 y=10 row); R5 'uniformly negative at 2500 shares' corrected (Table 4 y=25 Bin 1 = +0.008**); JEL codes corrected [G14,G12,G18]→[G14] (PDF shows only G14); erroneous topics field removed (contained CSR/consumer-behavior text from unrelated paper)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF (17 pages); appended R8-R17 for cancel-to-trade, order-book depth, CRT trade-size heterogeneity and thresholds, the effective-spread bifurcation check, and conclusion-period QID, quoted-spread, effective-spread, NBBO-depth, and CRT estimates. Added matching findings, the pricing-fidelity mechanism term, and empirical specification coverage. Existing rows and rights metadata were preserved. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 17 Core results rows, equation (1), specifications, classifications, prose, and frontmatter against the full PDF; corrected R1 t-statistic, R2/R5 significance stars, R6 thresholds and classification rule, R9 conclusion-period description, R10 locator, QID definition, sample counts, and contribution/result classifications. No headline results omitted." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101024", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-10-15" }
---

**What this is.** The paper's core results, the economic framework, and the DiD specification used: enough to know what was found and how, without reading all 17 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101024).

## TL;DR

Using the U.S. Tick Size Pilot (TSP), which raised the minimum tick from 1 cent to 5 cents for roughly 1,200 small-cap pilot stocks in 2016, the paper shows that tick size effects on market quality are heterogeneous and depend on a stock's prevailing quoted spread. For stocks with average quoted spreads below approximately 10 cents, the larger tick harmed liquidity: quoted and effective spreads widened, consistent with pricing fidelity deteriorating. For stocks with spreads above 15 cents, the larger tick improved liquidity: spreads narrowed, consistent with undercutting being reduced. Stocks in between experienced indeterminate or conflicting effects. These opposing effects explain why prior TSP studies that pool narrow- and wide-spread stocks together in a single non-tick-constrained group find muddled or conflicting results. The paper recommends that researchers using the TSP for causal inference bifurcate samples at the 10 cent prevailing spread threshold.

## Core results

Magnitudes are as reported; `\*\*`/`\*\*\*` = 5%/1%. QR = quantile (median) regression; OLS results are similar unless noted. Imposition-period bins use May-June 2016 quoted spreads: (1) Bin 1 = tick-constrained (<5 cents), (2) Bin 2 = near-tick-constrained (5-10 cents), (3) Bin 3 = intermediate-spread (10-15 cents), (4) Bin 4 = wide-spread (>15 cents). Conclusion-period bins use May-June 2018 quoted spreads, with a 5.5-cent cutoff for Bin 1 and the same 10-, 15-cent cutoffs. Pilot x Event is the DiD coefficient from Eq. (1).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | TSP widened quoted spreads for tick-constrained and near-tick-constrained stocks; narrowed them for wide-spread stocks; effect indeterminate for intermediate stocks | Table 3, Panel A, p. 9 | QR Pilot x Event: Bin 1 +0.032\*\*\* (t=19.36); Bin 2 +0.033\*\*\* (t=12.81); Bin 3 +0.0079\* (t=1.69); Bin 4 -0.048\*\*\* (t=-3.63) |
| R2 | TSP widened effective spreads for stocks with spreads below 10 cents and narrowed them for wide-spread stocks | Table 3, Panel A, p. 9 | QR Pilot x Event: Bin 1 +0.033\*\*\* (t=26.19); Bin 2 +0.025\*\*\* (t=16.46); Bin 3 +0.0075\*\*\* (t=2.84); Bin 4 -0.019\*\*\* (t=-3.13) |
| R3 | TSP reduced undercutting (QID ratio) across all four spread bins; QID rebounded upon TSP conclusion, consistent with the undercutting channel | Table 2, Panels A-B, p. 8 | Imposition: Bin 1 -0.27\*\*\* (t=-17.90); Bin 2 -0.23\*\*\* (t=-15.01); Bin 3 -0.16\*\*\* (t=-10.83); Bin 4 -0.11\*\*\* (t=-10.81); all four bins significantly positive at TSP conclusion |
| R4 | TSP increased NBBO quoted depth for all spread bins; largest log-increases for tick-constrained and near-tick-constrained stocks | Table 3, Panel A, pp. 9-10; Fig. 2, p. 10 | Ln(NBBO Depth) QR: Bin 1 +1.06\*\*\* (t=20.89); Bin 2 +0.91\*\*\* (t=20.34); Bin 3 +0.49\*\*\* (t=9.88); Bin 4 +0.21\*\*\* (t=5.99) |
| R5 | TSP increased round-trip transaction costs (CRT) for tick-constrained stocks and reduced them for wide-spread stocks; at very large trade sizes the TSP reduced CRT near-uniformly (Bin 1 remains positive at 2500 shares; paper: "almost uniformly" with that exception) | Table 4, Panel A, p. 12; Fig. 5, p. 15 | 10-round-lot CRT QR: Bin 1 +0.023\*\*\* (t=13.98); Bin 4 -0.075\*\*\* (t=-4.10); 2500-share (y=25) Bin 1 +0.008\*\*\* (t=2.89, Table 4); Bins 2-4 negative at 2500 shares |
| R6 | Rolling-bin thresholds show the larger tick raises effective spreads below about 10 cents and lowers them above about 16 cents; 500-share CRT thresholds are about 9 cents and 13 cents | Fig. 3, p. 13; §4.4, pp. 11-13 | Effective-spread effects are positive below ~10 cents, negative above ~16 cents, and unclear between; 500-share CRT rises below ~9 cents and falls above ~13 cents |
| R7 | Applying the Werner et al. (2023) median-bifurcation methodology to TSP imposition data yields a null result for the non-tick-constrained group; this reflects the cancellation of near-tick-constrained (+) and wide-spread (-) effects when pooled | Table 5, p. 16 | TSC (tick-constrained) QR +0.046\*\*\* (t=23.57); TSU (non-tick-constrained) -0.0046 (t=-1.17, insignificant) |
| R8 | The cancel-to-trade ratio falls in all four spread bins when the tick rises, then rises in all bins when the TSP ends | Table 2, Panels A-B, p. 8 | QR imposition: Bin 1 -4.46\*\*\* (t=-7.96); Bin 2 -8.89\*\*\* (t=-8.37); Bin 3 -8.62\*\*\* (t=-4.75); Bin 4 -13.3\*\*\* (t=-6.42). Conclusion: +4.28\*\*\* (t=5.30); +8.80\*\*\* (t=14.55); +7.43\*\*\* (t=8.48); +12.0\*\*\* (t=8.98) |
| R9 | Cumulative depth rises throughout the order book, with its location profile varying by spread bin | Fig. 2, p. 10 | Median estimates at 10, 15, 25, 40, and 60 cents from midpoint are positive at all displayed levels; strongest deeper in the book for tick-constrained stocks, broadly uniform for near-tick-constrained stocks, and strongest nearer the midpoint for intermediate- and wide-spread stocks; conclusion-period estimates are negative across bins and distances |
| R10 | A larger tick becomes less harmful or more beneficial for round-trip costs as trade size increases | Table 4, Panel A, p. 12 | Bin 2 QR: 5 round lots +0.024\*\*\* (t=8.74) versus 50 round lots -0.064\*\*\* (t=-4.73); Bin 1: 5 round lots +0.045\*\*\* (t=19.78) versus 100 round lots -0.060\*\*\* (t=-5.45) |
| R11 | The median-spread bifurcation produces no significant effect on effective spreads in the non-tick-constrained group | Table 5, p. 16 | QR: TSC +0.031\*\*\* (t=27.82); TSU +0.0033 (t=1.54); OLS: TSC +0.024\*\*\* (t=46.83); TSU -0.0065 (t=-1.30) |
| R12 | The quoted-spread threshold at which the TSP changes from raising to lowering CRT depends on order size | Fig. 4, pp. 13-14 | 100-share CRT: rises below about 9 cents, falls above about 13 cents; 250-share CRT: rises below about 9 cents, falls above about 14 cents; 1,000-share CRT: rises below about 7 cents, falls above about 11 cents; effects in between are unclear |
| R13 | QID rises in every spread bin when the TSP ends, reversing its imposition-period decline | Table 2, Panel B, p. 8 | QR: Bin 1 +0.26\*\*\* (t=18.66); Bin 2 +0.22\*\*\* (t=14.65); Bin 3 +0.22\*\*\* (t=12.85); Bin 4 +0.11\*\*\* (t=10.30) |
| R14 | Returning to a 1-cent tick narrows quoted spreads in the narrow bins and widens them in intermediate and wide bins | Table 3, Panel B, p. 9 | QR: Bin 1 -0.052\*\*\* (t=-25.33); Bin 2 -0.022\*\*\* (t=-10.02); Bin 3 +0.033\*\*\* (t=5.42); Bin 4 +0.089\*\*\* (t=3.97) |
| R15 | The conclusion-period effective-spread response is negative for narrow bins and positive for the wide bin; the intermediate effect is small | Table 3, Panel B, p. 9 | QR: Bin 1 -0.035\*\*\* (t=-26.64); Bin 2 -0.016\*\*\* (t=-13.94); Bin 3 +0.0051\* (t=1.88); Bin 4 +0.027\*\* (t=2.59) |
| R16 | NBBO depth falls in all spread bins when the tick returns to 1 cent, most in tick- and near-tick-constrained bins | Table 3, Panel B, pp. 9-10 | QR: Bin 1 -0.71\*\*\* (t=-7.45); Bin 2 -1.14\*\*\* (t=-23.55); Bin 3 -0.53\*\*\* (t=-14.29); Bin 4 -0.069\*\*\* (t=-2.91) |
| R17 | Returning to a 1-cent tick lowers small-trade CRT in narrow bins but raises it in intermediate and wide bins; estimates at larger sizes are less uniform | Table 4, Panel B, p. 12 | 5 round lots QR: Bin 1 -0.060\*\*\* (t=-25.82), Bin 2 -0.014\*\*\* (t=-6.14), Bin 3 +0.045\*\*\* (t=6.67), Bin 4 +0.096\*\*\* (t=4.05); 50 round lots: +0.037\*\*\* (t=4.21), +0.14\*\*\* (t=6.73), +0.32\*\*\* (t=6.24), +0.094 (t=0.81) |

**Overall (paper's conclusion).** The TSP provides direct evidence of the tick size tradeoff between pricing fidelity and undercutting. Narrow-spread stocks were harmed because the larger tick distorted the bid-ask spread relative to the latent competitive spread, worsening pricing fidelity. Wide-spread stocks benefited because the larger tick made undercutting less attractive, encouraging displayed liquidity provision. The opposing effects within the broad non-tick-constrained category explain why Hu et al. (2018), Griffith and Roseman (2019), Rindi and Werner (2019), Chung et al. (2020), and Werner et al. (2023) reach different conclusions: they employ different sample constructions that weight the two opposing groups differently.

## Theory / model

The paper has no formal theoretical model of its own. It tests the "tick size tradeoff" framework of Werner et al. (2023), which characterizes tick size effects as a tradeoff between two competing channels.

**Pricing fidelity channel.** A smaller tick enables a finer price grid, allowing the equilibrium bid-ask spread to narrow toward the latent competitive spread. When a tick is too large relative to the competitive spread, the tick forces the quoted spread above its competitive level, inflating transaction costs and reducing allocative efficiency. This channel dominates for stocks whose competitive spreads are narrow (tick-constrained or near-tick-constrained): a tick increase makes pricing fidelity worse.

**Undercutting channel.** A smaller tick lowers the cost of front-running a resting limit order with a trivially better price: posting a quote that is just one tick better is cheaper when the tick is smaller. Greater undercutting risk discourages displayed liquidity provision (adverse selection for slower traders and higher monitoring costs), reduces fill rates on limit orders, and lowers overall depth. A larger tick reduces this activity and can thereby improve market quality. This channel dominates for stocks with wide spreads (many ticks intra-spread): a tick increase reduces undercutting and improves market quality.

**Testable prediction.** The two channels predict opposite effects for stocks with different prevailing spreads. For effective spreads, the larger tick raises costs below ~10 cents, effects are unclear from ~10 to ~16 cents, and costs fall above ~16 cents. For 500-share CRT, costs rise below ~9 cents and fall above ~13 cents.

**Identification.** The TSP is a natural experiment: the SEC randomly assigned approximately 2,400 stocks with market capitalization below $3 billion to pilot (tick = 5 cents) and control (tick = 1 cent) groups. Table 1 reports pretreatment comparisons of market capitalization, dollar volume, return volatility, and quoted spreads across treatment and control stocks within each spread bin (p. 7).

## Method

The paper uses difference-in-differences (DiD) quantile regressions (Callaway and Li, 2019) to estimate the causal effect of the tick size change. Quantile (median) regression is used as the primary estimator because microstructure outcomes such as quoted spreads are positively skewed: OLS means are sensitive to large outliers and can diverge from medians in ways that depend on how researchers handle extreme observations. The paper also reports OLS estimates after winsorizing at the 5th and 95th percentiles by tick-constraint category; results are qualitatively similar.

The DiD specification (equation 1, p. 6) is:

$$
Y_{j,t} = \alpha_0 + \alpha_p \text{Pilot}_j + \alpha_e \text{Event}_{j,t} + \beta \left( \text{Pilot}_j \times \text{Event}_{j,t} \right) + u_t + \varepsilon_{j,t} \tag{1}
$$

where $$\text{Pilot}_j$$ equals 1 for treated stocks (G1 or G2) and 0 for control stocks; $$\text{Event}_{j,t}$$ equals 0 before the tick size change and 1 after it (with enforcement-date-based assignment for the staggered TSP rollout across October 2016); $$u_t$$ is a date fixed effect; and $$\varepsilon_{j,t}$$ is the error. Standard errors are double-clustered at the stock and date level.

The coefficient of interest is $$\beta$$, the DiD estimate of the treatment effect. Because G1 and G2 differed only in whether the 5-cent increment applied to trading in addition to quoting (the authors find no reliable differences between G1 and G2 and so pool them), while G3 included a trade-at rule, the primary analysis uses G1 and G2 pilot stocks versus control stocks.

The paper estimates equation (1) separately for each of four spread bins based on prevailing pre-shock quoted spreads: bin 1 (tick-constrained, below 5 cents), bin 2 (near-tick-constrained, 5-10 cents), bin 3 (intermediate, 10-15 cents), and bin 4 (wide-spread, above 15 cents). For the threshold analysis in Section 4.4, the paper uses overlapping 6-cent bins shifted by 1 cent ({(0, 6c), (1c, 7c), ...}) and plots the DiD coefficient versus the bin's median pre-shock quoted spread. The resulting figure traces the spread-level transition from harmful to beneficial TSP effects.

## Empirical specifications

**Spread and depth outcomes (R1, R2, R4).** The dependent variable $$Y_{j,t}$$ is, in turn: time-weighted average quoted dollar spread; size-weighted average effective dollar spread; and natural log of time-weighted average quoted depth at the NBBO (using WRDS Intraday Indicators). Equation (1) is estimated via quantile regression (median) with date fixed effects and standard errors double-clustered by stock and date. Table 3 imposition sample: 08/12/2016-12/14/2016 (excluding the staggered imposition period 10/03/2016-10/23/2016); conclusion sample: 08/08/2018-11/20/2018 (TSP ended 10/01/2018). Results in Table 3 (p. 9).

**Undercutting and cancel-to-trade (R3).** The primary undercutting measure QID (quote-improvement-to-deterioration ratio) is from Barardehi et al. (2025): the difference between the frequencies of NBBO quote improvements and trade-driven NBBO quote deteriorations, divided by the sum of those frequencies, computed daily from TAQ data. A higher QID indicates more undercutting. The cancel-to-trade ratio (from MIDAS data) is total canceled orders divided by total executed trades. Equation (1) is estimated the same way. Results in Table 2 (p. 8).

**Round-trip transaction costs (R5).** The dependent variable $$\text{CRT}_{y,j,t}$$ is the average per-share cost of a round-trip trade of $$y$$ round lots (where $$y \in \{1, 2.5, 5, 10, 25, 50, 100\}$$), computed from MIDAS order book snapshots taken every 15 minutes. The CRT is the absolute difference between the average per-share purchase price and the midpoint, averaged across buy and sell sides and across the trading day. Equation (1) estimated separately for each $$y$$. Results in Table 4 (p. 12) and Figs. 4-5.

**Threshold analysis (R6).** Rolling overlapping bins of width 6 cents shifted by 1 cent across the pre-shock quoted spread distribution. For each bin, equation (1) yields a DiD coefficient on effective spread and on 500-share CRT. A bin is classified as having a determinable effect when the imposition and conclusion estimates have opposite signs and at least one is statistically significant; bins with same-sign estimates or with both estimates insignificant are labelled undetermined. Results in Fig. 3 (p. 13).

**Bifurcation reconciliation (R7).** The paper replicates the Werner et al. (2023) sample-bifurcation approach: stocks split by median quoted spread, with stocks below the median classified as tick-constrained (TSC) and above as non-tick-constrained (TSU). Equation (1) is estimated for the TSP imposition on quoted and effective spreads. Results in Table 5 (p. 16).

**Additional mechanism, order-book, and heterogeneity specifications (R8-R17).** The cancel-to-trade and QID outcomes (R8, R13) and cumulative depth at five distances from the midpoint (R9) use the same median DiD equation (1), date fixed effects, and standard errors double-clustered by stock and date. Table 2 imposition and conclusion windows are 08/12/2016-12/14/2016 and 08/08/2018-11/20/2018; its samples contain 43,399, 27,998, 13,818, and 25,203 stock-days in the four imposition bins, and 36,779, 30,510, 14,871, and 25,081 in the conclusion bins. The separate Table 3 conclusion-period estimates (R14-R16) use equation (1), date fixed effects, and standard errors double-clustered by stock and date on 08/08/2018-11/20/2018; the Table 3 bin counts are 36,779, 30,510, 14,871, and 25,081. CRT specifications (R10, R12, R17) substitute order-size-specific CRT for the dependent variable, using MIDAS order-book snapshots; Table 4 tests round lots and Figs. 3-4 use share amounts. They use date fixed effects and standard errors double-clustered by stock and date over the event windows stated in the Table 4 notes. The effective-spread bifurcation check (R11) applies equation (1) to the TSP imposition sample, with date fixed effects and standard errors double-clustered by stock and date, splitting at the May-June 2016 median quoted spread of 6.6 cents (Table 5, p. 16). The paper's only numbered main-text estimating equation is equation (1), printed on p. 6; all reported regression findings, including these additions, use that specification.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| TAQ (Trade and Quote) daily data via WRDS | Daily time-weighted quoted spreads; size-weighted effective spreads; daily QID undercutting measure; computed from tick-level trades and quotes during regular trading hours | [TAQ](/wiki/commercial/taq/) |
| WRDS Intraday Indicators | Daily time-weighted NBBO depth measures for ~2,400 TSP pilot and control stocks | [WRDS](/wiki/commercial/wrds/) |
| MIDAS (SEC Market Information Data Analytics System) | 15-minute order book snapshots used to compute cumulative depth at price levels, round-trip transaction costs (CRT), and cancel-to-trade ratios; covers all exchanges and price levels | no page yet |

Sample: TSP imposition window 08/11/2016-12/15/2016 (with enforcement dates 10/03/2016-10/23/2016 as staggered treatment onset); TSP conclusion window 08/07/2018-11/20/2018 (simultaneous return to 1-cent tick 10/01/2018). Approximately 2,400 securities: ~1,200 pilot stocks (G1+G2 combined) and ~1,200 control stocks.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.finmar.2025.101024) if you are: (i) designing or evaluating tick size reform policies and need the specific threshold estimates (10 cents, 15 cents) and the spread-bin CRT gradients; (ii) using the TSP as a causal instrument for microstructure or price efficiency questions and need guidance on sample construction; (iii) reconciling conflicting TSP findings in the literature (Section 5 provides a systematic comparison to Hu et al. (2018), Griffith and Roseman (2019), Rindi and Werner (2019), Chung et al. (2020), and Werner et al. (2023)); or (iv) studying undercutting dynamics and the cancel-to-trade channel using MIDAS data.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Markets* 78 (2026) 101024. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Barardehi, Yashar H., Peter Dixon, Qiyu Liu, and Ariel Lohr.
> "When does the tick size help or harm market quality? Evidence from the Tick Size Pilot."
> *Journal of Financial Markets* 78 (2026) 101024.
> DOI: 10.1016/j.finmar.2025.101024. © 2025 The Authors.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
