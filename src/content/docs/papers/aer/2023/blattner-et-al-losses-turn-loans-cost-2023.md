---
title: "When Losses Turn into Loans: Blattner, Farinha & Rebelo (2023)"
description: >-
  Distilled: Distressed banks respond to ratio-based capital shortfalls by
  reallocating credit toward borrowers whose loan losses they underreport,
  using the 2011 EBA capital exercise in Portugal as a natural experiment.
  The credit misallocation accounts for about 22 percent of Portugal's
  allocative-efficiency decline in 2012. American Economic Review 2023,
  paywalled. Eighteen core results with source locators, datasets used,
  the identification design, and the defining equations.
sidebar:
  label: Blattner-Farinha-Rebelo 2023
  order: 1
tags: [paper-summary, banking, credit-supply, zombie-lending, capital-requirements,
       misallocation, productivity, difference-in-differences, panel-regression,
       instrumental-variables, peer-reviewed, unreplicated,
       data:banco-de-portugal-credit-register,
       data:informacao-empresarial-simplificada]
paper:
  authors: Laura Blattner, Luisa Farinha, Francisca Rebelo
  authorList:
    - { family: Blattner, given: Laura, orcid: "0000-0001-7175-8749", affiliation: Stanford University }
    - { family: Farinha, given: Luisa, affiliation: Banco de Portugal }
    - { family: Rebelo, given: Francisca, affiliation: Boston College }
  year: 2023
  venue: American Economic Review 113(6), June 2023, 1600–1641
  venueShort: AER 2023
  doi: 10.1257/aer.20190149
  jel:
    codes: [E23, E32, G21, G28, G32, G38]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - "Banking stability, regulation, efficiency"
    - "Global Financial Crisis and Policies"
    - "Portugal: credit markets and bank regulation"
  dataAccess: proprietary-confidential
  outcome:
    - quarterly credit growth at firm-bank level
    - cumulative firm-level total credit
    - loan loss underreporting (excess mass in overdue reporting buckets)
    - credit supply to risky borrowers
    - firm-level labor use
    - firm-level capital (fixed assets)
    - firm-level capital and labor use
    - firm-level capital and labor marginal products
    - firm-level capital and labor wedges
    - firm-level TFP
    - within-sector allocative efficiency
    - aggregate TFP and allocative efficiency
  outcomeClass: [credit-supply, firm-real-outcomes, macro-aggregates]
  license: >-
    Copyright 2023 American Economic Association; no open licence block found in
    Crossref metadata (checked 2026-06-24); AEA website confirms copyright AEA;
    paper is paywalled
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (pubs.aeaweb.org; copyright 2023 AEA; checked 2026-06-24)"
  redistribution: extract-only
  resultsCount: 18
  citedByCount: 80
  methods:
    role: both
    contributes: loan-loss-underreporting-detector
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, instrumental-variables, panel-regression]
    identification: natural-experiment
  contributionType: [new-method, new-fact]
  mechanisms: [moral-hazard, intermediary-constraint, financial-constraint]
  scope:
    region: Portugal
    assetClass: corporate loans (bank loans to nonfinancial firms)
    period: 2009-01..2015-12
    frequency: quarterly
    dataType: [administrative, accounting]
    granularity: [firm, transaction]
    n: "380,286 lending relationships; 144,050 nonfinancial firms; 45 banks"
  findings:
    - { ref: R1, outcome: quarterly credit growth at firm-bank level, metric: pp-effect, value: "+2 pp for underreported firms at exposed banks; -2 pp for all other firms at exposed banks (each ~4% of 1 SD of credit growth)", direction: mixed, vsBenchmark: "same firm, comparing exposed vs. nonexposed banks (within-firm DiD)" }
    - { ref: R2, outcome: cumulative firm-level total credit, metric: percent-change, value: "+16% for underreported firms borrowing entirely from exposed banks; -14% for all other firms (vs. base quarter 2011:III)", direction: mixed, vsBenchmark: "full vs. zero exposure to EBA banks, separately for underreported and other firms; cumulative EBA + bailout period" }
    - { ref: R3, outcome: firm-level labor use, metric: elasticity, value: "0.52 (SE 0.094)", direction: positive, vsBenchmark: "IV estimate; first-stage F = 111.2" }
    - { ref: R4, outcome: firm-level capital (fixed assets), metric: elasticity, value: "0.14 (SE 0.046)", direction: positive, vsBenchmark: "IV estimate; first-stage F = 111.2" }
    - { ref: R5, outcome: within-sector allocative efficiency, metric: percent-change, value: "-6.59% (total EBA intervention effect; 54% of actual -12.24% AE decline in 2012)", direction: negative, vsBenchmark: "54% of actual Portugal 2012 allocative-efficiency decline" }
    - { ref: R6, outcome: within-sector allocative efficiency, metric: percent-change, value: "-2.71% mean from credit reallocation to underreported firms (range -0.89% to -4.43%; mean 22% of actual AE decline)", direction: negative, vsBenchmark: "simulation over 10,000 draws of non-underreported comparison firms; mean = 22% of actual AE decline" }
    - { ref: R7, outcome: loan loss underreporting (excess mass in overdue reporting buckets), metric: coefficient, value: "0.014 to 0.451 across collateral types and rate increments of 9-25 pp (all positive and significant); placebo coefficients negative", direction: positive, vsBenchmark: "relative to buckets where the regulatory deduction rate does not increase in the next bucket (placebo)" }
    - { ref: R8, outcome: firm-level capital and labor marginal products, metric: level, value: "MRPL 37.30 vs. 48.24 thousand euros; MRPK 47.44 vs. 63.16 percent for underreported vs. performing firms", direction: negative, vsBenchmark: "correctly reported nonperforming firms: MRPL 42.39 and MRPK 55.51" }
    - { ref: R9, outcome: firm-level capital and labor wedges, metric: coefficient, value: "lagged-wedge coefficient 0.786 (SE 0.002) for labor and 0.594 (SE 0.002) for capital", direction: positive }
    - { ref: R11, outcome: credit supply to risky borrowers, metric: coefficient, value: "New-client EBA × exposed × risk: -3.375 (SE 1.274) for predicted default risk and -0.157 (SE 0.053) for sales cyclicality; existing-client approval: 0.002 (SE 0.004); existing-client new-loan estimates: -0.024 (SE 0.008) and -0.022 (SE 0.009)", direction: negative }
    - { ref: R12, outcome: firm-level TFP, metric: coefficient, value: "0.001 (SE 0.005); first-stage F = 111.2", direction: none }
    - { ref: R13, outcome: firm-level capital and labor wedges, metric: coefficient, value: "Share EBA × 2011 capital wedge: 0.012 (SE 0.008) labor; 0.028 (SE 0.013) capital", direction: positive }
    - { ref: R14, outcome: firm-level capital and labor use, metric: percent-change, value: "Underreported firms: labor +6%, capital +9%; non-distressed firms: labor -6%, capital -8%; correctly reported distressed firms: labor -4%, capital -6%", direction: mixed }
  resultType: confirms
  replicationCode:
    url: https://doi.org/10.3886/E120003V1
    status: available
  relatesTo:
    - { cite: "Peek and Rosengren (2005)", relation: extends, note: "extends their Japan zombie-lending evidence to a causal quasi-experimental setting with credit composition as the key margin" }
    - { cite: "Caballero, Hoshi, and Kashyap (2008)", doi: '10.1257/aer.98.5.1943', relation: extends, note: "extends zombie-lending framework by documenting the underreporting mechanism and linking it causally to input misallocation" }
    - { cite: "Hsieh and Klenow (2009)", doi: '10.1162/qjec.2009.124.4.1403', relation: builds-on, note: "uses their wedge-measurement approach to quantify capital and labor distortions from credit misallocation" }
    - { cite: "Restuccia and Rogerson (2008)", doi: '10.1016/j.red.2008.05.002', relation: builds-on, note: "follows their wedge-decomposition framework to aggregate firm-level distortions into aggregate TFP effects" }
    - { cite: "Schivardi, Sette, and Tabellini (2022)", doi: '10.1093/ej/ueab039', relation: builds-on, note: "their reduced-form study of zombie lending in Italy provides a comparison for this paper's causal analysis of underreporting-linked credit reallocation and allocative efficiency in Portugal" }
  openQuestions:
    - "Results pertain specifically to ratio-based capital requirements imposed on banks already in distress and do not extend to prudential pre-crisis tightening when banks are well capitalized (p. 1629)."
    - "The productivity aggregation follows a partial equilibrium decomposition (Osotimehin 2019) and cannot account for general equilibrium price effects; GE channels may amplify or dampen the estimated allocative-efficiency loss (p. 1627)."
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp. 1600-1641 plus appendices A-C). Seven results extracted from the paywalled PDF. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-25
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; fixed 5 issues: JEL codes completed (E23, G32, G38 were missing), erroneous 'Italy' topic corrected to Portugal, R6 locator corrected (p. 1629 -> p. 1628), R7 coefficient range corrected (0.178 min -> 0.014 min per Table B1 Panel A), and equation (1) tag corrected (simple baseline formula was wrongly tagged as eq. 1; actual eq. 1 on p. 1607 is the general form with IN/OUT and B notation, now shown correctly)."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and appended eleven missing main-text result rows, quantitative findings, and complete numbered equations/specifications. This augmentation is not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, magnitudes, specifications, classification, and prose re-checked against the source PDF; corrected Table 3 outcome labels, the Figure 5 page locator, equations (8)-(9) time subscripts, and related-work metadata/body mentions; documented the PDF's B1 fixed-effect inconsistency." }
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20190149
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "No license[] block found; AEA website confirms Copyright 2023 American Economic Association; paper is paywalled with no CC licence"
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the natural-experiment identification design, the loan-loss underreporting algorithm, and the firm-level empirical specifications with their defining equations: enough to know what it found and how, without reading all 42 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20190149).

## TL;DR

Distressed banks respond to ratio-based capital shortfalls not only by cutting overall credit but by distorting the composition of credit supply: they reallocate lending toward firms whose loan losses they have been underreporting, thereby delaying the recognition of those losses and protecting their reported capital ratios. Using the October 2011 European Banking Authority (EBA) capital exercise as a natural experiment affecting a subset of large Portuguese banks, Blattner, Farinha, and Rebelo develop a bunching-based algorithm to measure loan-loss underreporting at the monthly firm-bank level, show that exposed banks increase credit supply to underreported borrowers by about 2 percentage points per quarter while cutting credit to all other firms, and trace this credit reallocation through to a widening of capital and labor wedges that accounts for roughly 22 percent of the decline in aggregate allocative efficiency in Portugal in 2012.

The paper extends the Japan zombie-lending evidence of Peek and Rosengren (2005) to a causal quasi-experimental setting focused on credit composition. It extends the zombie-lending framework of Caballero, Hoshi, and Kashyap (2008) by measuring underreporting and linking it to input misallocation. Schivardi, Sette, and Tabellini (2022) report no TFP effects of zombie lending in Italy; this study estimates allocative-efficiency losses in Portugal, so the outcomes and settings differ.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Exposed banks increase credit to underreported firms, cut credit to all others**: triple-interaction coefficient positive and significant during EBA, negative and significant for baseline group | Figure 3 Panel A, p. 1615; Table A2, online appendix (point estimates) | +2 pp quarterly credit growth for underreported firms at exposed banks; -2 pp for all other relationships at exposed banks (each ~4% of 1 SD of credit growth) |
| R2 | **Firm-level credit reallocation is real and not undone by substitution**: total credit rises for underreported firms with high exposure to EBA banks, falls for all others | Figure 5 Panel A, p. 1620; text p. 1619 | +16% cumulative credit for underreported firms borrowing entirely from exposed banks; -14% for all other firms relative to base quarter 2011:III |
| R3 | **Credit shock transmits to labor**: IV elasticity of labor w.r.t. credit supply is large and significant | Table 5 Panel B col. 2, p. 1625 | Elasticity = 0.52 (SE 0.094); first-stage F = 111.2 |
| R4 | **Credit shock transmits to capital**: IV elasticity of capital w.r.t. credit supply is significant | Table 5 Panel B col. 4, p. 1625 | Elasticity = 0.14 (SE 0.046); first-stage F = 111.2 |
| R5 | **Total EBA intervention caused large allocative-efficiency loss**: aggregating all firm-level wedge changes explains majority of 2012 AE decline | Table 6 Panel A col. 1, p. 1628 | Total estimated AE effect: -6.59% = 54% of actual -12.24% within-sector AE decline in 2012 |
| R6 | **Credit reallocation to underreported firms alone accounts for ~22% of the AE decline**: reallocation component isolated via simulation | Table 6 Panel B col. 1, p. 1628 | Mean -2.71% AE (range -0.89% to -4.43%); mean = 22% of actual AE decline |
| R7 | **Bunching validity**: underreporting is statistically higher in overdue buckets immediately before a jump in the regulatory deduction rate, confirming strategic behavior | Table B1 Panel A, p. 1636 | Coefficients 0.014-0.451 across collateral types and increment sizes (all positive and significant); placebo using the other collateral type's rate increment yields negative coefficients |
| R8 | **Underreported firms have lower marginal products than performing firms**: correctly reported nonperforming firms are closer to underreported firms | Table 4 Panel A, p. 1622 | MRPL: 37.30 vs. 48.24 (thousand euros); MRPK: 47.44 vs. 63.16 (percent); correctly reported nonperforming firms: 42.39 and 55.51 |
| R9 | **Firm-level wedges are persistent** | Table 4 Panel B, p. 1622 | Lagged-wedge coefficient: 0.786 (SE 0.002) for labor and 0.594 (SE 0.002) for capital |
| R10 | **Exposed banks increase underreporting during the EBA intervention, then roll it back** | Figure 4, p. 1617 | Underreported losses scaled by 2010 bank capital rise after the announcement and recede at the EBA deadline; the paper reports the pattern graphically |
| R11 | **Risk-shifting evidence is absent**: exposed banks' new lending falls more for higher-risk new clients, while lending to existing clients does not increase | Table 3, p. 1618 | New-client EBA × exposed × risk coefficients: -3.375 (SE 1.274) for predicted default risk and -0.157 (SE 0.053) for sales cyclicality; existing-client approval: 0.002 (SE 0.004); new-loan estimates: -0.024 (SE 0.008) and -0.022 (SE 0.009) in the two specifications |
| R12 | **Credit has no detectable effect on firm-level TFP** | Table 5 Panel B col. 5, p. 1625 | IV coefficient 0.001 (SE 0.005); first-stage F = 111.2 |
| R13 | **Input-wedge responses vary with prior financial constraints** | Table 5 Panel A, p. 1625 | Share EBA × 2011 capital wedge: labor-wedge coefficient 0.012 (SE 0.008); capital-wedge coefficient 0.028 (SE 0.013) |
| R14 | **Credit reallocation changes firm input use**: underreported firms expand inputs while other groups contract | Text p. 1624 | Underreported firms: labor +6%, capital +9%; non-distressed firms: labor -6%, capital -8%; correctly reported distressed firms: labor -4%, capital -6% |
| R15 | **Credit results show no differential pre-trends** for baseline and underreported firm-bank relationships | Figure 3 and text p. 1616 | No differential credit allocation in the two pre-intervention periods; no coefficients reported in the article text |
| R16 | **Firm liquidity measures show no pre-trends** before the intervention | Text p. 1621 (Figure A7, online appendix cited) | No pre-trends in current ratio or cash/assets; numerical estimates not reported in the article text |
| R17 | **Pre-intervention placebo estimates show no significant effects** | Text p. 1625 (Table A5, online appendix cited) | No significant effects in the pre-intervention years; numerical estimates not reported in the article text |
| R18 | **The credit reallocation is specific to underreported relationships among overdue borrowers** | Figure 3 Panel B and text p. 1615 | Exposed banks reduce credit to overdue but non-underreported relationships, while credit increases only for underreported relationships; point estimates are in online Appendix Table A2 |

**Overall (paper's conclusion).** Ratio-based capital requirements create distorted lending incentives when banks are already in distress: exposed banks intensify loss underreporting and roll over credit to underreported borrowers to avoid booking additional losses. This credit misallocation prevents inputs from being reallocated to their highest-value uses, widening the dispersion of capital and labor wedges and contributing meaningfully to aggregate productivity decline.

## Theory / model

The paper has no formal equilibrium model. Its tested mechanism is that ratio-based capital shortfalls make already-distressed banks reluctant to recognize losses: they preserve lending to borrowers whose losses were underreported, while cutting other credit. The paper tests this against risk-shifting and demand explanations, then traces credit reallocation into factor use and allocative efficiency.

**EBA capital exercise and identification.** The October 2011 EBA exercise required affected banks to meet a 9 percent Core Tier 1 threshold, net of the sovereign-debt buffer (text p. 1610):

$$
\frac{\text{Core Tier 1} - \text{sovereign debt buffer}}{\text{RWA}} \geq 0.09.
$$

Exposure combines EBA eligibility with above-median sovereign holdings among eligible Portuguese banks. The comparison is eligible banks with below-median holdings plus other Portuguese commercial banks. The identifying assumption is no unobserved difference between exposed and comparison banks that independently drives credit allocation during the intervention. Evidence includes pre-period balance, parallel credit and liquidity trends, firm-quarter fixed effects in the main firm-bank design, and null risky-lending evidence (pp. 1611-1621).

**Input wedges.** For sector $s$, labor and capital distortions are defined by equations (4)-(5), p. 1622, where $Y_{it}$ is value added, $L_{it}$ employment, $K_{it}$ capital, and the wedges measure gaps between marginal products and factor user costs:

$$
\alpha_s \frac{Y_{it}}{K_{it}} = (r_t + \Delta_t)(1 + \tau_{it}^{K}). \tag{4}
$$

$$
\beta_s \frac{Y_{it}}{L_{it}} = w_t(1 + \tau_{it}^{L}). \tag{5}
$$

Underreported firms have lower mean marginal products than performing firms (Table 4 Panel A, p. 1622). The authors' causal claim is that directing credit toward these firms prevents resources from moving to higher marginal-product uses, increasing within-sector wedge dispersion.

## Method

**Loan-loss underreporting measure.** The paper uses monthly firm-bank overdue balances by regulatory bucket. Inflows into a bucket and outflows from the preceding bucket adjust the observed change; equation (1), p. 1607, defines excess mass:

$$
E(t;k) = [B(t;k) - IN(t;k)] - [B(t-1;k-1) - OUT(t;k-1)]. \tag{1}
$$

The measure is Markovian: it flags a discrepancy relative to the prior month, not the true age of a loan. For multi-month reporting buckets, Appendix A's flow-adjusted monthly-bucket expression is equation (A3), p. 1632:

$$
E(t;k) = [C(t;c) - IN(t;c)] - [C(t-1;c-1) - OUT(t;c-1)]. \tag{A3}
$$

For the validity test, the share of excess mass in overdue loans is regressed on deduction-rate jumps; equation B1 as printed includes bank, firm, and month fixed effects and firm-bank clustered standard errors (pp. 1635-1636). The accompanying text and Table B1 notes instead describe firm-bank fixed effects, an internal specification inconsistency in the PDF; the collateral-type samples are estimated separately:

$$
\frac{\text{excess mass}_{ibkct}}{\text{overdue loans}_{ibkct}} = \sum_{j=1}^{5} \beta_j \Delta \text{deduction rate}_j + \phi_b + \theta_i + \mu_t + \epsilon_{ibkct}. \tag{B1}
$$

**Productivity decomposition.** The accounting decomposition following Osotimehin (2019) separates aggregate productivity change into technical efficiency and within- and between-sector allocative efficiency (equation 7, p. 1625):

$$
\Delta \ln TFP \simeq \Delta TE + \Delta AE_{\text{within}} + \Delta AE_{\text{between}}. \tag{7}
$$

The sector-weighting formula for technical efficiency and the within-sector component are equations (8)-(9), p. 1626. Here $s_t^x$ is sector $s$'s share of input $x$, $s_t^Y$ its value-added share, $\gamma_s$ returns to scale, $\rho$ the elasticity of substitution across sectors, and $\epsilon_t^x$ the elasticity defined in Appendix C:

$$
\Delta TE = \sum_{s=1}^{S} \frac{1}{1-\gamma_s\rho}\left[s_t^Y - \rho \sum_x \epsilon_t^x s_t^x\right]\Delta TE_s. \tag{8}
$$

$$
\Delta AE_{\text{within}} = \sum_{s=1}^{S} \frac{1}{1-\gamma_s\rho}\left[s_t^Y - \rho \sum_x \epsilon_t^x s_t^x\right]\Delta AE_{\text{within},s}. \tag{9}
$$

Equation (10), p. 1626, gives the within-sector change as a weighted sum of firms' lagged input shares and proportional changes in capital and labor wedges:

$$
\begin{aligned}
\Delta AE_{\text{within},s} ={}& \frac{\alpha_s}{1-\gamma_s\theta_s}\sum_i\left[(1-\beta_s\theta_s)s^K_{i,t-1}+\beta_s\theta_s s^L_{i,t-1}-s^Y_{i,t-1}\right]\frac{\Delta\tau^K_{it}}{1+\tau^K_{i,t-1}} \\
&+ \frac{\beta_s}{1-\gamma_s\theta_s}\sum_i\left[\alpha_s\theta_s s^K_{i,t-1}+(1-\alpha_s\theta_s)s^L_{i,t-1}-s^Y_{i,t-1}\right]\frac{\Delta\tau^L_{it}}{1+\tau^L_{i,t-1}}.
\end{aligned} \tag{10}
$$

The between-sector component is equation (11), p. 1626:

$$
\begin{aligned}
\Delta AE_{\text{between}} ={}& \sum_{s=1}^{S}\frac{1}{1-\gamma_s\rho}\left[\epsilon_t^K(1-\beta_s\rho)s_t^K+\epsilon_t^L\alpha_s\rho s_t^L-\alpha_s s_t^Y\right]\frac{\Delta\mathcal{T}_{st}^K}{1+\mathcal{T}_{s,t-1}^K} \\
&+\sum_{s=1}^{S}\frac{1}{1-\gamma_s\rho}\left[\epsilon_t^K\beta_s\rho s_t^K+\epsilon_t^L(1-\alpha_s\rho)s_t^L-\beta_s s_t^Y\right]\frac{\Delta\mathcal{T}_{st}^L}{1+\mathcal{T}_{s,t-1}^L}.
\end{aligned} \tag{11}
$$

The paper focuses on within-sector allocative efficiency because the between-sector contribution is small (Figure 6, p. 1627). The estimates of firm-level TFP effects are imprecise and near zero, so the aggregation sets $\Delta TE$ to zero (Table 5 Panel B and text p. 1628). For the reallocation-only estimate, the authors add underreported firms to a randomly selected set of non-underreported firms with an equal credit decline, repeating the draw 10,000 times (Table 6, p. 1628-1629).

## Empirical specifications

**Firm-bank dynamic difference-in-differences.** Equation (2), pp. 1613-1614, estimates quarterly firm-bank credit-growth responses across event-time windows $\tau=-2,\ldots,5$:

$$
\begin{aligned}
g^{\text{credit}}_{ibt} ={}& \sum_{\tau=-2}^{5}\beta^{\text{treat}}_{\tau}(\text{period}_{\tau}\times\text{exposed}_b)
+ \sum_{\tau=-2}^{5}\beta^{\text{period}}_{\tau}(\text{period}_{\tau}\times\text{underreported}_{ib}) \\
&+ \sum_{\tau=-2}^{5}\beta^{\text{treatgroup}}_{\tau}(\text{period}_{\tau}\times\text{underreported}_{ib}\times\text{exposed}_b)
+ \theta_{it} + \phi_b \\
&+ \beta^{\text{base}}_1(\text{underreported}_{ib}\times\text{exposed}_b)
+ \beta^{\text{base}}_2\text{underreported}_{ib}
+ \alpha_2 X_{ibt}+\epsilon_{ibt}.
\end{aligned} \tag{2}
$$

Here $g^{\text{credit}}_{ibt}=\text{credit}_{ibt}/\text{credit}_{ib,t-1}-1$. The sample is continuing firm-bank relationships over 2009:I-2014:IV, $N=1{,}981{,}219$. It includes firm-by-quarter and bank fixed effects and relationship controls (lending share, relationship length, main-lender indicator, and firm share in the bank portfolio); standard errors are two-way clustered by firm and bank. The separate overdue-loan subsample has $N=426{,}127$ (Figure 3, p. 1615).

**Firm-level credit response.** Equation (3), pp. 1618-1619, tests whether firms offset the firm-bank response by borrowing elsewhere:

$$
\Delta\log\text{credit}_{it} = \sum_{t=-5}^{10}\Delta^{\text{treatgroup}}_t(\text{quarter}_t\times\text{treatment}_i\times\text{underreported}_i)
+ \sum_{t=-5}^{10}\Delta^{\text{treatment}}_t(\text{quarter}_t\times\text{treatment}_i)
+ \text{controls} + \alpha_1 X_{it} + \theta_i + \epsilon_{it}. \tag{3}
$$

Treatment is the standardized pre-EBA borrowing share from exposed banks. The specification includes firm and industry-by-quarter effects, firm controls averaged over 2008-2010 interacted with quarter, and firm fixed effects; standard errors are clustered by firm. The quarterly 2009-2015 sample has $N=1{,}346{,}771$ firm-quarter observations. The estimated cumulative treatment effects are +16% for underreported firms and -14% for all others over the EBA and bailout period (text p. 1619; Figure 5, p. 1620).

**Input effects by instrumental variables.** Equation (6), pp. 1623-1624, estimates the effect of credit growth on input use and wedge growth:

$$
\Delta\log y_{is} = \gamma\Delta\log\text{credit}_{is} + \text{controls} + u_{is}. \tag{6}
$$

The endogenous credit change is instrumented with the firm-level pre-EBA borrowing share from exposed banks, interacted with underreporting status. The first stage is written out from Section IIIB (p. 1624), as the paper describes it:

$$
\Delta\log\text{credit}_{is} = \Delta^{\text{treatment}}\text{borrowing share}_{is} + \Delta^{\text{treatgroup}}\text{borrowing share}_{is}\times\text{underreported}_{is} + \text{controls} + \epsilon_{is}.
$$

The annual 2012 regressions use firm-size and two-digit-industry fixed effects and controls averaged over 2008-2010 (log assets, interest/EBITDA, capital/assets, current ratio, cash/assets, sales growth). Standard errors are clustered by industry; $N=104{,}499$ for labor and capital and $N=104{,}492$ for TFP. The reported labor and capital credit elasticities are 0.522 (SE 0.094) and 0.140 (SE 0.046), respectively; the TFP coefficient is 0.001 (SE 0.005), with first-stage $F=111.2$ (Table 5 Panel B, p. 1625). The translated mean input responses are reported in the Core results (text p. 1624).

**Wedge prediction and productivity aggregation.** Equation (12), p. 1628, maps the estimated credit response and initial capital wedge into predicted wedge changes, for $X=K,L$:

$$
\frac{\Delta\hat{\tau}^{X}_{it}}{1+\tau^{X}_{i,t-1}} = \left(\hat{\gamma}^{X}_1+\hat{\gamma}^{X}_2\times\text{capital wedge}_{i,t-1}\right)\times\widehat{\Delta^{\text{treatment}}\text{ borrowing share}_{is}}. \tag{12}
$$

These firm-level wedge changes are aggregated with equations (9)-(10). The reported full-intervention within-sector effect is -6.59%, or 53.83% of the actual 2012 decline; the credit-reallocation-only simulation averages -2.71%, or 22.10% of the decline (Table 6, p. 1628). Both exercises are partial equilibrium.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Portuguese Credit Register (Central de Responsabilidades de Credito) | Monthly firm-bank loan balances by overdue bucket; universe of lending relationships above EUR 50 (2009-2015); primary source for underreporting algorithm and DiD | No page yet |
| Simplified Corporate Information / IES (Informacao Empresarial Simplificada) | Annual mandatory firm census; value added, employment, capital, sales, balance sheet; used for wedge measurement and productivity decomposition (2009-2015) | No page yet |
| Banco de Portugal quarterly bank balance sheet data | Bank-level capital ratios, sovereign bond holdings, liquidity; determines EBA exposure definition (2010-2012) | No page yet |
| EBA capital exercise disclosures | Bank eligibility and sovereign debt buffer used to define the exposed/nonexposed distinction (October 2011) | No page yet |

Sample: quarterly loan data 2009:I to 2014:IV; annual firm data 2009-2015. Firms cover 81% of Portuguese sales and 73% of assets. Underreporting measured on firm-finance loans (36% of banks' corporate portfolio; 73% collateralized). 56% of firms have multiple lending relationships, required for the within-firm firm-bank DiD.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20190149) if you are: (i) replicating the underreporting algorithm or DiD design (appendices A-C give the full algorithm, validity checks, and productivity decomposition details); (ii) studying how ratio-based capital requirements distort credit composition in distress (the paper tests risk-shifting vs. loss-delay mechanisms in Table 3); (iii) interested in the link between credit misallocation and aggregate TFP measurement in a bank-dependent economy; or (iv) extending the Hsieh and Klenow (2009) or Restuccia and Rogerson (2008) wedge framework to a credit-supply channel.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(6), June 2023. Replication data available at [ICPSR E120003V1](https://doi.org/10.3886/E120003V1). This distillation was first extracted on 2026-06-24 and expanded and AI-verified on 2026-10-04; it is **not human-verified or independently reproduced**.

> Blattner, Laura, Luisa Farinha, and Francisca Rebelo. "When Losses Turn into Loans:
> The Cost of Weak Banks." *American Economic Review* 113, no. 6 (June 2023): 1600-1641.
> DOI: 10.1257/aer.20190149. Copyright 2023 American Economic Association.
> Paywalled; this page is an extract-only distillation.
