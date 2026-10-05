---
title: "Relinquishing Riches: Covert & Sweeney (2023)"
description: >-
  Distilled: Auctioned oil and gas leases in Texas generate 53 log points more
  in up-front bonus payments and 39 log points more output than informally
  negotiated leases, measured using a natural experiment from early-twentieth-century
  Texas land allocation decisions. American Economic Review 2023, paywalled.
  Eighteen core results with source locators, datasets used, the identification
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
  dataAccess: public
  outcome:
    - bonus payment per acre on oil and gas leases
    - oil and gas output per acre (discounted barrels of oil equivalent)
    - total seller revenue per acre
    - parcel characteristics by allocation mechanism
    - lease contract terms
    - bonus payment, output, lease revenue, and seller revenue per parcel
    - lessee market share by allocation mechanism
    - within-auction relative bids across recurring firm pairs
    - auction bid dispersion
    - auction winner's inferred bidder value
    - lease contract terms after GLO review
    - lease production revenue per acre
    - within-firm lease revenue per acre
    - auction winner's inferred bidder value by bidder-count group
    - probability of lease transaction
  outcomeClass: [firm-real-outcomes]
  license: paywalled (AEA standard; no CC license found in Crossref metadata checked 2026-06-25)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (AEA website, 2026-06-25)
  redistribution: extract-only
  resultsCount: 18
  citedByCount: 21
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, double-debiased-machine-learning]
    identification: natural-experiment
  contributionType: [new-fact, measurement]
  mechanisms: [search-frictions, information-asymmetry, agency, matching-quality]
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
    - { ref: R2, outcome: oil and gas output (discounted barrels of oil equivalent), metric: coefficient, value: "0.45 log points pseudo-Poisson in levels (SE 0.17); paper reports 39 log points in conclusion", direction: positive, vsBenchmark: "average negotiated lease generates 1,648 discounted barrels of oil equivalent per acre" }
    - { ref: R3, outcome: total seller revenue per acre, metric: level, value: "$1,146-$1,894 more per acre; $341,000 more per average RAL lease under main specification (col 2)", direction: positive, vsBenchmark: "average negotiated lease generates $5,780 per acre in discounted production revenue" }
    - { ref: R4, outcome: bonus payment per acre on oil and gas leases, metric: coefficient, value: "0.58 log points with firm FE (SE 0.08), within-firm output 1.583 discounted barrels (SE 0.681)", direction: positive, vsBenchmark: "larger than baseline estimates in cols 1-2 of Table 9; the match quality premium is not driven by firm composition" }
    - { ref: R5, outcome: probability of lease transaction, metric: probability, value: "statistically indistinguishable leasing rates for all but 2 of 52 quarters; cannot reject equal rates", direction: none }
    - { ref: R6, outcome: auction winner's inferred bidder value, metric: level, value: "In 2-bidder auctions, winner value exceeds runner-up by 0.50 log points; in 3+ bidder auctions, the winner-to-runner-up gap is 0.43 and winner-to-lowest is 1.07", direction: positive, vsBenchmark: "The 2-bidder winner-to-runner-up gap is within the range of estimated output effects; the 3+ bidder winner-to-lowest gap is larger" }
    - { ref: R7, outcome: parcel characteristics by allocation mechanism, metric: coefficient, value: "Table 3: Auction coefficients are 0.020 (SE 0.054) for shale thickness, -83.097 acres (SE 14.918), -0.008 (SE 0.006) for shape, 0.144 (SE 0.368) for water distance, and 0.067 (SE 0.064) for river distance; N = 2,487 for thickness and 3,731 otherwise", direction: mixed, vsBenchmark: "Compared with RAL parcels; all regressions include 10-mile grid fixed effects and cluster standard errors by grid" }
    - { ref: R8, outcome: lease contract terms, metric: coefficient, value: "Auction royalty-rate coefficients = 0.95, 0.86, 0.90, 0.86, 0.82 percentage points (SE 0.13, 0.17, 0.25, 0.14, 0.09); primary-term coefficients = 1.00, 0.86, 0.85, 0.87, 0.99 years (SE 0.10, 0.10, 0.13, 0.09, 0.05)", direction: positive, vsBenchmark: "Five specifications; N = 1,515 in each" }
    - { ref: R9, outcome: bonus payment, output, lease revenue, and seller revenue per parcel, metric: coefficient, value: "Table 7 linear coefficients: 0.36, 0.34, 0.29 (bonus); 0.09, 0.21, 0.16 (output); 0.23, 0.58, 0.63 (lease revenue); 0.46, 0.52, 0.45 (seller revenue). Pseudo-Poisson coefficients: 0.69, 0.66, 0.61; 0.22, 0.29, 0.16; 0.20, 0.26, 0.13; 0.37, 0.40, 0.30, respectively. Linear output and lease-revenue estimates are imprecise (SEs 0.12-0.16 and 0.44-0.62)", direction: positive, vsBenchmark: "Linear N = 2,621; Poisson N = 2,132, 2,240, and 2,621; outcomes discounted to January 1, 2004" }
    - { ref: R10, outcome: lessee market share by allocation mechanism, metric: p-value, value: "Chi-square test rejects equal firm auction and negotiation market shares (p < 2 x 10^-16); 62% of negotiated transactions are won by firms that bid at auction and 75% of auctions are won by firms that also complete a negotiation", direction: mixed }
    - { ref: R11, outcome: within-auction relative bids across recurring firm pairs, metric: probability, value: "For 10 of 12 firm pairs bidding together at least 10 times, the share where firm A bids more is not statistically different from 0.5; exceptions include 0.79 (p = 0.019) and 0.00 (p = 0.002)", direction: mixed, vsBenchmark: "The pairwise rank evidence indicates horizontal match variation is large relative to persistent firm rankings" }
    - { ref: R12, outcome: auction bid dispersion, metric: log-point-effect, value: "Winner bid averages 0.38 log points above the second bid in two-bid auctions; for 3+ bidders, winner is 0.30 log points above second bid and 0.86 above lowest bid; average reserve margins are 0.54, 0.71, and 1.34 for 1, 2, and 3+ bidders", direction: positive }
    - { ref: R13, outcome: bonus payment per acre on oil and gas leases, metric: coefficient, value: "Replacing winning auction bids with reserve prices yields coefficients -0.14 (SE 0.04) and -0.07 (SE 0.04); with the lowest submitted bid, 0.00 (SE 0.05) and 0.06 (SE 0.04); with the second bid, 0.10 (SE 0.06) and 0.15 (SE 0.05)", direction: mixed, vsBenchmark: "The corresponding winning-bid coefficients are 0.53 (SE 0.06) and 0.58 (SE 0.05)" }
    - { ref: R14, outcome: auction winner's inferred bidder value, metric: log-point-effect, value: "Removing one bidder lowers expected winner value by about 0.24 log points with two bidders and 0.15 with three; moving from three bidders to one lowers it by about 0.39", direction: negative, vsBenchmark: "Section VI simulation using the estimated bidder-value distribution; gaps for a one-bidder loss are below the lease output difference except when moving from three bidders to one" }
    - { ref: R15, outcome: lease contract terms after GLO review, metric: probability, value: "19% of RAL leases were improved during GLO approval; median bonus improvement was 50% and median royalty improvement was 17%", direction: positive, vsBenchmark: "The paper treats these as evidence that observed negotiated terms already include state intervention" }
    - { ref: R16, outcome: lease production revenue per acre, metric: coefficient, value: "$2.61-$4.56 thousand per acre across Table 6 Panel A specifications; main specification = $2.64 thousand (SE 1.43)", direction: positive, vsBenchmark: "Average negotiated lease revenue is $5.78 thousand per acre" }
    - { ref: R17, outcome: within-firm lease revenue per acre, metric: coefficient, value: "4.67 (SE 2.07) with firm fixed effects versus 2.64 (SE 1.46) without", direction: positive, vsBenchmark: "Table 9 controls for firm identity in addition to 10-mile grid-by-year and quarter effects" }
    - { ref: R18, outcome: auction winner's inferred bidder value by bidder-count group, metric: level, value: "For auctions with 3+ bidders, the winner's inferred value exceeds the second-highest bidder's value by 0.43 log points; the winner-to-lowest inferred value gap is 1.07", direction: positive, vsBenchmark: "For two-bidder auctions the winner-to-second value gap is 0.50 log points" }
  resultType: new-finding
  relatesTo:
    - { cite: "Roberts and Sweeting (2013)", doi: '10.1257/aer.103.5.1830', relation: cites, note: "contrasting benchmark: a selective-entry sequential timber mechanism can outperform simultaneous auctions; the authors caution that their Texas evidence does not test that formal model" }
    - { cite: "Hendricks and Porter (1988)", relation: builds-on, note: "early work on auctions for US government mineral leases; this paper extends to private-land negotiations" }
    - { cite: "Bulow and Klemperer (1996)", relation: builds-on, note: "theoretical benchmark in which an English auction with one extra bidder dominates optimal bilateral bargaining; this paper measures outcomes in a different setting" }
    - { cite: "Salz (2022)", doi: '10.1086/717349', relation: cites, note: "related work on intermediary search market efficiency; used to frame the fewer-bidders explanation" }
    - { cite: "Larsen (2021)", relation: cites, note: "related evidence on welfare losses from actual bargaining versus second-best mechanisms in used-vehicle transactions, estimated with a structural counterfactual" }
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added twelve Core results rows, aligned findings, mechanism and DML vocabulary proposals, and the paper's main estimating specifications and equations. Additions are not human-verified and were not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all six Core results rows confirmed (Table 4 col 2 for R1, Table 6 Panel B col 2 for R2/R3, Table 9 for R4, Figure 4 for R5, Table 11 for R6); all three equations verified term-by-term; sample sizes 1,061+454=1,515 leases and 2,621 parcels confirmed; no errors found." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Audited all 18 Core results rows, equations, specifications, classifications, and surrounding claims; corrected bidder-value comparisons, R4 significance, leasing-rate and matching language, output units, and metadata. Table 6 is confirmed on PDF p. 21 (printed p. 648); the locator script false-matches a later body mention. Table-locator pass (2026-10-04): R8, Table 5, p. 645 -> p. 646. Post-verification review (2026-10-04) dropped parcel from scope.granularity: it is not a schema value." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20191594", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block present; VOR PDF link present but no CC licence; AEA standard paywalled journal" }
---

**What this is.** The paper's core results, identification strategy, and estimating equations: enough to know what it found and how, without reading all 36 pages. To replicate or extend, read the full source at [https://doi.org/10.1257/aer.20191594](https://doi.org/10.1257/aer.20191594).

## TL;DR

Covert and Sweeney compare outcomes on oil and gas leases on Texas Permanent School Fund (PSF) land, where early-twentieth-century legislative decisions quasi-randomly assigned parcels to two allocation mechanisms: informal bilateral negotiations (RAL parcels) and centralized first-price auctions (state auction parcels). Using data from over 1,500 leases signed during the 2004-2016 shale boom, they find that auctioned leases pay 53 log points more in up-front bonus payments and produce 39 log points more output than comparable negotiated leases signed in the same location and time. The combined revenue gain amounts to roughly $341,000 more per average lease. For all but two quarters, the study cannot reject equal leasing rates under the two mechanisms. The authors attribute the payment and output differences to better firm-parcel matching, supported by within-firm auction premiums and gaps in bidder values within auctions; they note that the data cannot identify exactly why negotiations produce worse matches. The findings imply large potential gains from replacing informal allocation in the roughly $3 trillion private US mineral rights market.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Auctioned leases pay **53 log points more** in bonus payments per acre than comparable negotiated leases (main specification) | Table 4 col 2, p. 643 | 0.53 (SE 0.06)\*\*\*; range 0.44-0.59 across all nine specifications; $185,000 more per average RAL lease |
| R2 | Auctioned leases produce **39 log points more in the conclusion and 45 log points in the main pseudo-Poisson specification** | Table 6 Panel B col 2, PDF p. 21 (printed p. 648) | Auction-output = 0.45 (SE 0.17)\*\*\*; coefficients range from 0.39 to 0.64 across specifications; the pseudo-Poisson outcome is in levels with lease-size controls |
| R3 | Total seller revenue (bonus + royalties) is **$341,000 higher** per average auctioned lease | Table 6 col 2, PDF p. 21 (printed p. 648) | $1.15k/acre more (SE $0.39k)\*\*\*; Panel B: 0.43 log points (SE 0.12)\*\*\*; average negotiated lease generates $5,780/acre |
| R4 | Within-firm: **auction premium persists** after conditioning on firm identity, showing firm composition alone does not explain the gaps | Table 9 col 2 and 4, p. 654 | Auction-bonus with firm FE = 0.58 (SE 0.08)\*\*\*; within-firm output gap = 1.583 barrels/acre (SE 0.681)\*\*; point estimates larger than the pooled baseline |
| R5 | **No detectable overall difference in leasing rates**: cannot reject equal rates for all but 2 of 52 sample quarters | Figure 4, p. 650 | Quarter-specific point estimates fluctuate around zero and are noisy; for 50 of 52 quarters the paper cannot reject equal rates |
| R6 | Large **allocative efficiency gains**: winner value exceeds runner-up by 50 log points with 2 bidders and 43 with 3+ bidders; winner-to-lowest gap is 107 with 3+ bidders | Table 11, p. 656 | 1-to-2 allocative gain = 0.50 log points for 2 bidders; 1-to-N gain = 1.07 for 3+ bidders; the 2-bidder winner-to-runner-up gap is within the range of Table 6 Panel B output effects |
| R7 | Balance check: parcels match on shale thickness and most observed surface characteristics, although auction parcels are smaller | Table 3, p. 640 | Auction coefficients: shale thickness 0.020 (SE 0.054); acres -83.097 (SE 14.918); shape -0.008 (SE 0.006); water distance 0.144 (SE 0.368); river distance 0.067 (SE 0.064); N=2,487 for thickness, 3,731 otherwise |
| R8 | Auction leases have higher royalty rates and longer primary terms, adding to the owner-side contract terms | Table 5, p. 646 | Royalty-rate effects 0.82-0.95 percentage points (SE 0.09-0.25); primary-term effects 0.85-1.00 years (SE 0.05-0.13); N=1,515 |
| R9 | Parcel-level estimates are positive when never-leased parcels are included, though linear output and lease-revenue estimates are imprecise | Table 7, p. 652 | Linear coefficients, G10/G20/DML: bonus 0.36/0.34/0.29; output 0.09/0.21/0.16; lease revenue 0.23/0.58/0.63; seller revenue 0.46/0.52/0.45. Poisson coefficients: 0.69/0.66/0.61; 0.22/0.29/0.16; 0.20/0.26/0.13; 0.37/0.40/0.30 |
| R10 | Firm composition differs across mechanisms, while many leading firms participate in both | Table 8 and text p. 653 | Equal market shares rejected, chi-square p < 2 x 10^-16; 62% of negotiated deals are won by firms that bid at auction, and 75% of auctions are won by firms that also complete a negotiation |
| R11 | Repeated firm-pair bid rankings support horizontal match heterogeneity rather than fixed firm ranking | Table 10, p. 655 | In 10 of 12 pairs, share that firm A bids more is statistically indistinguishable from 0.5; two exceptions include shares 0.79 (p=0.019) and 0.00 (p=0.002) |
| R12 | Auction bids are far above reserve and winning bids exceed losing bids | Table 11, p. 656 | Average reserve margins: 0.54, 0.71, and 1.34 log points for 1, 2, and 3+ bidders; winner-to-second bid gap 0.38 for 2 bidders and 0.30 for 3+; winner-to-lowest gap 0.86 for 3+ bidders |
| R13 | Negotiated bonuses are above comparable auction reserves and near the lowest submitted bids | Table 12, p. 657 | Auction coefficient is -0.14 (SE 0.04) / -0.07 (SE 0.04) using reserve prices, 0.00 (SE 0.05) / 0.06 (SE 0.04) using the lowest bid, and 0.10 (SE 0.06) / 0.15 (SE 0.05) using the second bid; winning-bid comparison: 0.53 (SE 0.06) / 0.58 (SE 0.05) |
| R14 | A bidder-count difference alone is too small to explain output gains except under a large participation gap | Text p. 658 | Simulated winner-value loss from one fewer bidder: about 0.24 log points with 2 bidders and 0.15 with 3; 3-to-1 bidders yields about 0.39 |
| R15 | GLO review improves a subset of negotiated leases before finalization | Text p. 660 | 19% of RAL leases improved during approval; median bonus improvement 50% and royalty improvement 17% |
| R16 | Auction leases generate higher discounted production revenue | Table 6 Panel A, PDF p. 21 (printed p. 648) | $2.61-$4.56 thousand more per acre across specifications; main specification is $2.64 thousand (SE $1.43 thousand); average negotiated lease revenue is $5.78 thousand per acre |
| R17 | Auction revenue remains higher within the same firm | Table 9 cols 5-6, p. 654 | Lease revenue coefficient is 4.67 (SE 2.07) with firm fixed effects versus 2.64 (SE 1.46) without |
| R18 | Winner value advantage remains large in auctions with three or more bidders | Table 11, p. 656 | The winner's inferred value is 0.43 log points above the second-highest value and 1.07 above the lowest value |

**Overall (paper's conclusion).** The allocation mechanism for mineral leases, which is determined by pre-fracking land privatization dates rather than by observed quality, generates large and robust differences in both payments and output. The paper attributes these differences to better horizontal matching of parcels to the firms that can use them most productively; its leasing-rate tests do not detect an extensive-margin difference. It argues that formalizing private mineral leasing could yield gains large relative to the cost of electronic auction platforms.

## Theory / model

The paper has no formal structural model. It compares a centralized, first-price sealed-bid auction (administered by the Texas General Land Office) with the informal bilateral negotiation process used on RAL parcels for parcels of similar underlying resource quality. The comparison does not impose a common set of bidders or specify a structural model of negotiations.

The mechanism-design benchmark includes the Bulow and Klemperer (1996) result that an English auction with one extra bidder dominates optimal bilateral bargaining, and the Roberts and Sweeting (2013) result that a sequential mechanism can outperform a simultaneous auction when entry is selective. The authors caution that their Texas comparison does not test or validate those formal mechanisms because the informal negotiation process is heterogeneous and unobserved. Prior empirical work by Hendricks and Porter (1988) on US government Gulf of Mexico mineral lease auctions showed that centralized auctions capture most of the surplus in symmetric information environments; this paper extends the comparison to informal private-land negotiations. Larsen (2021) estimates welfare differences between actual bargaining and second-best mechanisms in wholesale used-vehicle markets using a structural counterfactual. Salz (2022) models intermediary-organized auctions in waste collection; the paper uses that framework to interpret negotiations as an auction with fewer participants. Kong (2020) studies auction design in neighboring New Mexico mineral lease auctions and provides complementary evidence on bidder uncertainty. The paper estimates causal effects of observed allocation mechanisms directly rather than fitting a structural model of the negotiation process, because the informal process leaves no observable transaction-level record.

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

Equation (1) is the paper's numbered main-text estimating equation (Section III, p. 640). For fixed-effect specifications, $$X_i$$ includes a flexible lease-size control and optional surface/geology controls; $$\delta_{L(i),T(i)}$$ denotes location and transaction-time fixed effects. The paper clusters standard errors by grid. The 10-mile grid and grid-by-year plus quarter fixed effects are the main specification. DML replaces those fixed effects with random-forest controls for location, time, and covariates; see online Appendix C for its inference procedure.

**Parcel balance and identification check (R7).** Written out from the text (the paper does not number this equation), Table 3 (p. 640) regresses each pre-treatment parcel characteristic on indicators for auction and Free Royalty status, relative to RAL parcels, and location fixed effects:

$$Z_i = \alpha_A \text{Auction}_i + \alpha_F \text{FreeRoyalty}_i + \delta_{L(i)} + \varepsilon_i$$

The outcomes are shale thickness, parcel acres, shape, distance to water, and distance to rivers. The sample is PSF parcels overlying shale formations (N=2,487 for thickness, N=3,731 for the other outcomes); standard errors are clustered by 10-mile grid. The estimates show no measurable difference in thickness, shape, or distance to water/rivers, while auction and Free Royalty parcels are smaller than RAL parcels.

**Bonus and lease-term regressions (R1, R8).** Table 4 (p. 643) applies equation (1) to log bonus payments per acre. All nine specifications control for lease size; the fixed-effect models use grid and time controls, with standard errors clustered by grid, while columns 5, 7, and 9 use the DML procedure. The primary result is 0.53 (SE 0.06) in column 2, with coefficients from 0.44 to 0.59 across specifications. Table 5 (p. 646) applies the same set of location/time controls to royalty rate in percentage points and primary term in years, with the same 1,515 lease sample and grid-clustered standard errors for the fixed-effect columns; column 5 uses DML. Auction effects are 0.82-0.95 percentage points on royalties and 0.85-1.00 years on term.

**Production, output, and seller revenue (R2-R3).** Table 6 (pp. 648-649) estimates equation (1) in levels per acre and then the pseudo-Poisson conditional mean specification shown in Method. The dependent variables are discounted lease revenue (thousands of dollars), output (hundreds of discounted barrels of oil equivalent), and seller revenue (thousands of dollars). The lease sample is restricted to leases whose primary term ended before March 2019. Linear models have N=1,259 (1,012 with extra controls); fixed-effect standard errors are clustered by grid. Pseudo-Poisson fixed-effect specifications drop grid/time cells without outcome variation; sample sizes range from 589 to 1,259, and DML uses the full 1,259 sample. Under the main specification, Panel B coefficients are 0.45 (SE 0.17) for output and 0.43 (SE 0.12) for seller revenue.

**Extensive margin (R5).** Figure 4 (p. 650) estimates a separate regression for each quarter, with active parcel leasing as the outcome:

$$\text{Leased}_{it} = \tau_t \text{Auction}_i + X_i \beta + \delta_{l(i)} + \varepsilon_{it}$$

The observations are PSF parcels by quarter from 2004 to 2016; $$X_i$$ includes parcel covariates, and $$\delta_{l(i)}$$ is a 10-mile grid fixed effect. Standard errors are clustered by grid. The authors cannot reject equal leasing rates in all but two of the 52 quarters.

**Parcel outcomes (R9).** Table 7 (p. 652) re-estimates the mechanism effect across the cross-section of 2,621 PSF parcels, including those with no lease. Outcomes are discounted to January 1, 2004. The linear models are per-acre outcomes with 10-mile grid, 20-mile grid, or DML controls; the pseudo-Poisson models use outcomes in levels. Both model families control for parcel size, through a spline in fixed-effect models or as a random-forest covariate in DML. Table 7 reports 2,621 observations for each linear model and 2,132, 2,240, and 2,621 for the Poisson models. The table notes do not separately state standard-error treatment for these parcel regressions; the DML estimates use the cross-fitted procedure. The estimates for bonus, output, lease revenue, and seller revenue are all positive across specifications.

**Firm composition and within-firm estimates (R4, R10).** Table 8 and the text on p. 653 show different firm market shares by mechanism (chi-square p < 2 x 10^-16), even though many leading firms are active in both. Table 9 (p. 654) adds firm fixed effects to the 10-mile-grid-by-year and quarter specification of equation (1). The sample is 1,515 leases for bonus outcomes and 1,259 for output and lease revenue; standard errors are clustered by grid. The auction coefficients are 0.58 (SE 0.08) for log bonus, 1.583 (SE 0.681) for output, and 4.67 (SE 2.07) for lease revenue, all larger than the pooled counterparts.

**Bid-level mechanism evidence (R11-R14).** Table 10 (p. 655) reports pairwise bid rankings among firms that met in at least ten auctions. In 10 of 12 pairs, the share of auctions in which firm A bids more than firm B is not statistically different from one-half, consistent with substantial horizontal firm-lease match variation. Table 11 (p. 656) summarizes reserve margins and bid markups by number of bidders; the inferred value gains are recorded in R6 and observed-bid gaps in R12. Table 12 (p. 657) re-estimates the log-bonus comparison after substituting an auction's reserve, lowest submitted bid, or second-highest bid for its winning bid. The fixed-effect columns use 10-mile grid-by-year and quarter controls and cluster standard errors by grid; the DML columns use random forests. The sample is 1,515 leases in each column. The comparison coefficients show negotiated payments above reserve prices, near the lowest submitted auction bid, and below the second-highest bid.

In Section VI (text p. 658), the authors simulate the expected highest value from draws of the estimated bidder-value distribution. With two bidders, reducing the count to one lowers expected winning value by about 0.24 log points; with three bidders, the loss from one fewer bidder is about 0.15, while reducing three bidders to one yields about 0.39. The paper concludes that a small bidder-count difference alone is insufficient to explain the output gap unless participation falls substantially.

**GLO approval of negotiated terms (R15).** The text on p. 660 reports that 19 percent of RAL leases show an improvement during GLO review; median bonus and royalty improvements are 50 percent and 17 percent. These figures describe the institutional approval process rather than a separate regression.

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

Source: peer-reviewed, *American Economic Review* 113(3), March 2023. Paywalled; no open-access licence found in Crossref metadata. This distillation was extracted on 2026-10-04 and verified against the source PDF; results were not independently reproduced. Extract-only; the verbatim article is available via AEA or institutional access.

> Covert, Thomas R., and Richard L. Sweeney. "Relinquishing Riches: Auctions versus Informal Negotiations in Texas Oil and Gas Leasing." *American Economic Review* 113, no. 3 (March 2023): 628-663. DOI: 10.1257/aer.20191594.
