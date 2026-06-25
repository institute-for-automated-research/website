---
title: "Relinquishing Riches: Covert & Sweeney (2023)"
description: >-
  Distilled: Auctioned oil and gas leases in Texas generate 53 log points more
  in up-front bonus payments and 39 log points more output than informally
  negotiated leases, measured using a natural experiment from early-twentieth-century
  Texas land allocation decisions. American Economic Review 2023, paywalled.
  Six core results with source locators, datasets used, the identification
  strategy, and the estimating equations.
sidebar:
  label: Covert-Sweeney 2023
  order: 1
tags: [paper-summary, auction-theory, market-design, natural-resources, oil-and-gas,
       panel-regression, natural-experiment, peer-reviewed, unreplicated,
       data:texas-glo, data:eia]
paper:
  authors: Thomas R. Covert, Richard L. Sweeney
  authorList:
    - { family: Covert, given: Thomas R., affiliation: University of Chicago }
    - { family: Sweeney, given: Richard L., affiliation: Boston College }
  year: 2023
  venue: American Economic Review 113(3), March 2023, 628-663
  venueShort: AER 2023
  doi: 10.1257/aer.20191594
  jel:
    codes: [D44, L71, Q35]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Auction Theory and Applications", "Law, Economics, and Judicial Systems", "Economic theories and models"]
  dataAccess: licensed-commercial
  outcome:
    - bonus payment per acre on oil and gas leases
    - oil and gas output per acre (discounted barrels of oil equivalent)
    - total seller revenue per acre
  outcomeClass: [market-microstructure, firm-real-outcomes]
  license: paywalled (AEA standard; no CC license found in Crossref metadata checked 2026-06-25)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (AEA website, 2026-06-25)
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 21
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: natural-experiment
  contributionType: [new-fact, measurement]
  mechanisms: [search-frictions, information-asymmetry]
  introducesData: true
  scope:
    region: US
    assetClass: oil and gas mineral leases (Texas)
    period: 2004-01..2016-12
    frequency: mixed
    dataType: [administrative, other]
    granularity: [transaction, firm]
    n: "1,515 leases for bonus analysis (1,061 negotiated, 454 auctioned); 2,621 parcels for parcel-level analysis"
  findings:
    - { ref: R1, outcome: bonus payment per acre on oil and gas leases, metric: coefficient, value: "0.53 log points (SE 0.06); range 0.44-0.59 across all specifications", direction: positive, vsBenchmark: "average negotiated bonus = $945/acre; auction gain ~ $185,000 per average RAL lease" }
    - { ref: R2, outcome: oil and gas output per acre (discounted barrels of oil equivalent), metric: coefficient, value: "0.45 log points pseudo-Poisson (SE 0.17); paper reports 39 log points in conclusion", direction: positive, vsBenchmark: "average negotiated lease generates 1,648 discounted barrels of oil equivalent per acre" }
    - { ref: R3, outcome: total seller revenue per acre, metric: level, value: "$1,146-$1,894 more per acre; $341,000 more per average RAL lease under main specification (col 2)", direction: positive, vsBenchmark: "average negotiated lease generates $5,780 per acre in lease revenue" }
    - { ref: R4, outcome: bonus payment per acre on oil and gas leases, metric: coefficient, value: "0.58 log points with firm FE (SE 0.08), within-firm output 1.583 discounted barrels (SE 0.681)", direction: positive, vsBenchmark: "larger than baseline estimates in cols 1-2 of Table 9; the match quality premium is not driven by firm composition" }
    - { ref: R5, outcome: probability of lease transaction, metric: probability, value: "statistically indistinguishable leasing rates for all but 2 of 52 quarters; cannot reject equal rates", direction: none }
    - { ref: R6, outcome: oil and gas output per acre (discounted barrels of oil equivalent), metric: coefficient, value: "1-to-2 allocative gain = 50 log points; 1-to-N allocative gain = 107 log points (3+ bidder auctions)", direction: positive, vsBenchmark: "consistent with output gaps in Table 6 Panel B; confirms allocative efficiency channel" }
  resultType: new-finding
  relatesTo:
    - { cite: "Roberts and Sweeting (2013)", doi: '10.1257/aer.103.5.1830', relation: tests, note: "paper tests whether informal negotiations outperform auctions as sequential mechanisms do in their timber model; finds they do not" }
    - { cite: "Hendricks and Porter (1988)", relation: builds-on, note: "early work on auctions for US government mineral leases; this paper extends to private-land negotiations" }
    - { cite: "Bulow and Klemperer (1996)", relation: builds-on, note: "theoretical benchmark showing auctions dominate negotiations; paper provides direct empirical evidence" }
    - { cite: "Salz (2022)", doi: '10.1086/717349', relation: cites, note: "related work on intermediary search market efficiency; used to frame the fewer-bidders explanation" }
    - { cite: "Larsen (2021)", relation: cites, note: "related evidence from used-auto wholesale bargaining vs. second-best; similar reduced-form approach" }
    - { cite: "Kong (2020)", relation: cites, note: "companion evidence on auction design in neighboring New Mexico mineral lease auctions" }
  openQuestions:
    - "Why do informal negotiations perform so poorly: the paper lacks data on the process leading up to informal transactions and cannot distinguish fewer bidders, collusion, or landowner unsophistication as the primary cause (pp. 660-661)."
    - "Whether similar gains from formalization exist in other markets where formal and informal mechanisms coexist: real estate, construction procurement, and used automobile sales are suggested but unstudied here (p. 661)."
    - "Whether the gains generalize to the private mineral leasing market writ large, where RAL lessors (who have GLO oversight) are likely better informed than typical private landowners, suggesting the true gains in private markets may be even larger (pp. 659-660)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/9WJ3JK
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 628-663 of PDF); six results extracted. Not human-verified. Not reproduced. Replication data available at Harvard Dataverse (doi.org/10.7910/DVN/9WJ3JK) and ICPSR (doi.org/10.3886/E181143V1) but not run here." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all six Core results rows confirmed (Table 4 col 2 for R1, Table 6 Panel B col 2 for R2/R3, Table 9 for R4, Figure 4 for R5, Table 11 for R6); all three equations verified term-by-term; sample sizes 1,061+454=1,515 leases and 2,621 parcels confirmed; no errors found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20191594", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block present; VOR PDF link present but no CC licence; AEA standard paywalled journal" }
---

**What this is.** The paper's core results, identification strategy, and estimating equations: enough to know what it found and how, without reading all 36 pages. To replicate or extend, read the full source at [https://doi.org/10.1257/aer.20191594](https://doi.org/10.1257/aer.20191594).

## TL;DR

Covert and Sweeney compare outcomes on oil and gas leases on Texas Permanent School Fund (PSF) land, where early-twentieth-century legislative decisions quasi-randomly assigned parcels to two allocation mechanisms: informal bilateral negotiations (RAL parcels) and centralized first-price auctions (state auction parcels). Using data from over 1,500 leases signed during the 2004-2016 shale boom, they find that auctioned leases pay 53 log points more in up-front bonus payments and produce 39 log points more output than comparable negotiated leases signed in the same location and time. The combined revenue gain amounts to roughly $341,000 more per average lease. Auctions do not generate more leases overall; the gains arise entirely from better firm-parcel matching, evidenced by within-firm auction premiums and large gaps in bidder values within auctions. The findings imply large potential gains from replacing informal allocation in the roughly $3 trillion private US mineral rights market.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Auctioned leases pay **53 log points more** in bonus payments per acre than comparable negotiated leases (main specification) | Table 4 col 2, p. 643 | 0.53 (SE 0.06)\*\*\*; range 0.44-0.59 across all nine specifications; $185,000 more per average RAL lease |
| R2 | Auctioned leases produce **39-45 log points more** oil and gas output per acre (pseudo-Poisson) | Table 6 Panel B col 2, p. 648 | Auction-output = 0.45 (SE 0.17)\*\*\*; consistent across 10-mile grid, 20-mile grid, and DML specifications |
| R3 | Total seller revenue (bonus + royalties) is **$341,000 higher** per average auctioned lease | Table 6 col 2, p. 648 | $1.15k/acre more (SE $0.39k)\*\*\*; Panel B: 0.43 log points (SE 0.12)\*\*\*; average negotiated lease generates $5,780/acre |
| R4 | Within-firm: **auction premium persists** after conditioning on firm identity, ruling out firm-composition as the driver | Table 9 col 2 and 4, p. 654 | Auction-bonus with firm FE = 0.58 (SE 0.08)\*\*\*; within-firm output gap = 1.583 barrels/acre (SE 0.681)\*; point estimates larger than the pooled baseline |
| R5 | **No differential leasing rate**: auction and negotiation parcels are equally likely to be under lease in 50 of 52 sample quarters | Figure 4, p. 650 | Point estimates tightly centered on zero; cannot reject equal hazard rates; both mechanisms generate similar reserve prices (Table 12 cols 3-4) |
| R6 | Large **allocative efficiency gains**: auction winner's inferred value is 50-107 log points above competing bidders' values | Table 11, p. 656 | 1-to-2 allocative gain = 50 log points; 1-to-N gain = 107 log points (3+ bidders); consistent with output difference in Panel B of Table 6 |

**Overall (paper's conclusion).** The allocation mechanism for mineral leases, which is determined by pre-fracking land privatization dates rather than by observed quality, generates large and robust differences in both payments and output. The gains arise from better horizontal matching of parcels to the firms that can use them most productively, not from a differential probability of transacting. The implied annual gains from formalizing the private mineral leasing market are economically large relative to the cost of operating electronic auction platforms.

## Theory / model

The paper has no formal structural model. The tested hypothesis is that a centralized, first-price sealed-bid auction (administered by the Texas General Land Office) generates higher payments and more output than the informal bilateral negotiation process used on RAL parcels, when both mechanisms face the same distribution of bidder values and the same underlying resource quality.

The mechanism-design benchmark is the classic Bulow and Klemperer (1996) result that an English auction with one extra bidder dominates optimal bilateral bargaining, and the Roberts and Sweeting (2013) result that a sequential mechanism can outperform a simultaneous auction when entry is selective. Prior empirical work by Hendricks and Porter (1988) on US government Gulf of Mexico mineral lease auctions showed that centralized auctions capture most of the surplus in symmetric information environments; this paper extends the comparison to informal private-land negotiations. Larsen (2021) provides analogous reduced-form evidence in wholesale used-auto markets, finding large gaps between actual bargaining outcomes and second-best mechanisms. Salz (2022) models intermediary-organized auctions in waste collection; the paper uses that framework to interpret negotiations as an auction with fewer participants. Kong (2020) studies auction design in neighboring New Mexico mineral lease auctions and provides complementary evidence on bidder uncertainty. The paper tests these predictions directly rather than estimating a structural model of the negotiation process, because the informal process leaves no observable record at the transaction level that would anchor a structural estimate.

**Identification logic (pp. 637-640).** Parcels inside the PSF were privatized at different times: RAL parcels were sold to private surface owners before 1931 (granting them rights to negotiate mineral leases on behalf of the state); all remaining PSF parcels transact via GLO auction. The privatization dates are determined before the fracking boom, and, within narrow geographic areas, the RAL/auction status is argued to be uncorrelated with shale rock quality, verified via balance tests on shale thickness (Table 3, p. 640). The identifying assumption is thus:

Within a 10-mile geographic grid cell, and conditional on the year-quarter of lease signing, the assignment of a parcel to the RAL (negotiation) or auction mechanism is as good as random.

## Method

The paper applies a natural-experiment design with location-by-time fixed effects and several additional robustness layers, including double/debiased machine learning (DML) following Chernozhukov et al. (2018).

**Core estimator.** The primary object is the average treatment effect of auction assignment on lease outcomes, estimated by ordinary least squares. The technique builds on `panel-regression` and uses the location-by-time fixed-effect structure to absorb unobserved geological and market variation. For outcomes measured in levels (dollar amounts, output quantities), the linear estimator is:

$$Y_i = \tau \, \text{Auction}_i + X_i \beta + \delta_{L(i),\, T(i)} + \varepsilon_i \tag{1}$$

where $$Y_i$$ is the lease outcome, $$\text{Auction}_i$$ is an indicator equal to one for state-auction leases, $$X_i$$ includes lease size and (in extended specifications) additional surface and geological controls, and $$\delta_{L(i),\, T(i)}$$ is a fixed effect for the location bin $$L(i)$$ (10- or 20-mile square grid cell containing the lease centroid) crossed with the time bin $$T(i)$$ (year-quarter of lease signing). Standard errors are clustered at the grid level. The parameter of interest $$\tau$$ is interpreted as the average causal effect of auction assignment on the outcome, under the identifying assumption above.

**Pseudo-Poisson estimator.** For heavily right-skewed outcomes with a mass of zeros (most leases are never drilled), a pseudo-Poisson quasi-maximum likelihood estimator is used:

$$\log E[Y \mid \text{Auction}_i,\, X_i,\, L_i,\, T_i] = \tau \, \text{Auction}_i + X_i \beta + \delta_{L,\, T}$$

This projects the log of the expected outcome on the same controls, accommodating proportional effects and the zeros without requiring a log transformation (p. 648).

**DML nonparametric controls.** As an alternative to grid fixed effects, the Robinson (1988) partially linear model estimated via DML (Chernozhukov et al. 2018) is used to control nonparametrically for location and time. The cross-fitted empirical analog of the orthogonality condition is:

$$E\!\left[\bigl(Y - \gamma(L,T,X) - \tau(D - \delta(L,T,X))\bigr)(D - \delta(L,T,X))\right] = 0$$

where $$D = \text{Auction}$$, $$\gamma(L,T,X) = E[Y \mid L,T,X]$$, and $$\delta(L,T,X) = E[D \mid L,T,X]$$ are estimated by random forest. The DML estimates (columns labelled "DML" in Tables 4, 6, and 7) are stable across all specifications (p. 641, footnote 22).

## Empirical specifications

**Bonus regressions (R1).** The dependent variable is $$\log(\text{bonus payment per acre})$$. All models include a spline in lease size. Specifications in Table 4 (p. 643) vary the spatial grid (10 vs. 20 miles), the time control (quarter-of-sample Q vs. grid-by-year-quarter GY,Q vs. grid-by-year-and-quarter-of-sample GYQ), and whether additional surface and geological controls ("Extra") or private-surface-only sample restrictions ("Private only") are included. The 9 specifications all yield $$\tau \in [0.44, 0.59]$$ with SEs of 0.05-0.10, all significant at 1%.

**Output and revenue regressions (R2, R3).** Dependent variables are discounted lease revenue (in $k/acre), discounted output (hundreds of BOE/acre), and discounted seller revenue (in $k/acre). Table 6 Panel A uses the linear model (1); Panel B uses the pseudo-Poisson. Fixed effect models drop grids and time periods with no variation in outcome. The sample is restricted to leases whose primary term ends before March 2019 to reduce right-censoring of realized production (p. 647). Main specification output result: Auction coefficient = 0.45 log points (SE 0.17, Panel B col 2); seller revenue = 0.43 log points (SE 0.12, Panel B col 2).

**Royalty rate and primary term regressions (R5, not in findings).** Table 5 (p. 645) estimates equation (1) with the royalty rate (in percentage points) and primary term (in years) as dependent variables. Auctions generate approximately 0.82-0.95 pp higher royalty rates and 0.85-1.00 year longer primary terms, significant at 1%, across all specifications. These are intermediate outcomes that also favor the mineral owner.

**Firm fixed-effect regressions (R4).** Table 9 (p. 654) adds indicators for each E&P firm identity to equation (1). The within-firm auction premium for bonus is 0.58 (SE 0.08), larger than the pooled 0.53, confirming that the auction gains are not driven by a different composition of firms.

**Parcel-level regressions.** Table 7 (p. 652) re-estimates equation (1) at the parcel level, including parcels that never sign a lease (all outcomes discounted to 2004). This addresses the selection concern that only successful transactions are observed at the lease level. Parcel results confirm the lease-level findings, though noisier due to the additional zeros.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Texas General Land Office (GLO) oil and gas lease records, 2004-2016 | Bonus payments, primary terms, royalty rates for 4,460 RAL leases + 694 auction leases; monthly royalty production data through March 2019 | No page yet |
| GLO auction bid notices and bid data | Auction reserve prices and all bids above reserve; used to infer bidder values and allocative efficiency (Tables 10-12) | No page yet |
| P2 Energy Solutions Texas PSF parcel map (2018) | GIS shapefile linking historical PSF parcel records to geographic boundaries; used to match leases to parcels and compute parcel-level outcomes (Section V) | No page yet |
| US Energy Information Administration (EIA) price and shale data | Henry Hub gas prices, WTI oil prices (for output-revenue conversion); shale formation boundaries and isopachs defining shale thickness | [No page yet](/wiki/datasets/) |
| US Census Bureau TIGER shapefiles (2017) | Texas county boundaries for spatial intersection | No page yet |
| US Geological Survey National Hydrography + Land Cover (2019, 2021) | Distance to water and land cover measures used as surface quality controls in robustness checks (Table 3) | No page yet |

Sample: leases signed 2004-2016 on PSF land overlying shale formations, with size 10-1,000 acres and single-ownership. The main bonus sample contains 1,515 leases; output sample is restricted to leases whose primary term ends by March 2019 (1,259 leases).

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20191594) if you are: (a) designing or evaluating a formal mechanism for natural resource or real-estate allocation in a market currently served by informal bilateral negotiation; (b) studying the auction theory literature on auctions vs. negotiations and want direct empirical evidence; (c) extending the identification strategy to other settings where assignment to formal/informal mechanisms is determined by historical institutional decisions; or (d) replicating, with the replication data at [Harvard Dataverse](https://doi.org/10.7910/DVN/9WJ3JK) and [ICPSR](https://doi.org/10.3886/E181143V1). The locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(3), March 2023. Paywalled; no open-access licence found in Crossref metadata. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Extract-only; the verbatim article is available via AEA or institutional access.

> Covert, Thomas R., and Richard L. Sweeney. "Relinquishing Riches: Auctions versus Informal Negotiations in Texas Oil and Gas Leasing." *American Economic Review* 113, no. 3 (March 2023): 628-663. DOI: 10.1257/aer.20191594.
