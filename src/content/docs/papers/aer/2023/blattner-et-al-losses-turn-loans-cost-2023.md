---
title: "When Losses Turn into Loans: Blattner, Farinha & Rebelo (2023)"
description: >-
  Distilled: Distressed banks respond to ratio-based capital shortfalls by
  reallocating credit toward borrowers whose loan losses they underreport,
  using the 2011 EBA capital exercise in Portugal as a natural experiment.
  The credit misallocation accounts for about 22 percent of Portugal's
  allocative-efficiency decline in 2012. American Economic Review 2023,
  paywalled. Seven core results with source locators, datasets used,
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
    - credit allocation by weakly capitalized banks
    - firm-level capital and labor use
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
  resultsCount: 7
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
    - ref: R1
      outcome: quarterly credit growth at firm-bank level
      metric: pp-effect
      value: "+2 pp for underreported firms at exposed banks; -2 pp for all other firms at exposed banks (each ~4% of 1 SD of credit growth)"
      direction: positive
      vsBenchmark: "same firm, comparing exposed vs. nonexposed banks (within-firm DiD)"
    - ref: R2
      outcome: cumulative firm-level total credit
      metric: pp-effect
      value: "+16% for underreported firms borrowing entirely from exposed banks; -14% for all other firms (vs. base quarter 2011:III)"
      direction: positive
      vsBenchmark: "full-exposure vs. zero-exposure underreported firms, cumulative EBA + bailout period"
    - ref: R3
      outcome: firm-level labor use
      metric: elasticity
      value: "0.52 (SE 0.094)"
      direction: positive
      vsBenchmark: "IV estimate; first-stage F = 111.2"
    - ref: R4
      outcome: firm-level capital (fixed assets)
      metric: elasticity
      value: "0.14 (SE 0.046)"
      direction: positive
      vsBenchmark: "IV estimate; first-stage F = 111.2"
    - ref: R5
      outcome: within-sector allocative efficiency
      metric: pp-effect
      value: "-6.59% (total EBA intervention effect; 54% of actual -12.24% AE decline in 2012)"
      direction: negative
      vsBenchmark: "54% of actual Portugal 2012 allocative-efficiency decline"
    - ref: R6
      outcome: within-sector allocative efficiency
      metric: pp-effect
      value: "-2.71% mean from credit reallocation to underreported firms (range -0.89% to -4.43%; mean 22% of actual AE decline)"
      direction: negative
      vsBenchmark: "simulation over 10,000 draws of non-underreported comparison firms; mean = 22% of actual AE decline"
    - ref: R7
      outcome: loan loss underreporting (excess mass in overdue reporting buckets)
      metric: coefficient
      value: "0.014 to 0.451 across collateral types and rate increments of 9-25 pp (all positive and significant); placebo coefficients negative"
      direction: positive
      vsBenchmark: "relative to buckets where the regulatory deduction rate does not increase in the next bucket (placebo)"
  resultType: new-finding
  replicationCode:
    url: https://doi.org/10.3886/E120003V1
    status: available
  relatesTo:
    - { cite: "Peek and Rosengren (2005)", relation: extends, note: "extends their Japan zombie-lending evidence to a causal quasi-experimental setting with credit composition as the key margin" }
    - { cite: "Caballero, Hoshi, and Kashyap (2008)", doi: '10.1257/aer.98.5.1943', relation: extends, note: "extends zombie-lending framework by documenting the underreporting mechanism and linking it causally to input misallocation" }
    - { cite: "Hsieh and Klenow (2009)", doi: '10.1162/qjec.2009.124.4.1403', relation: builds-on, note: "uses their wedge-measurement approach to quantify capital and labor distortions from credit misallocation" }
    - { cite: "Restuccia and Rogerson (2008)", doi: '10.1016/j.red.2008.05.002', relation: builds-on, note: "follows their wedge-decomposition framework to aggregate firm-level distortions into aggregate TFP effects" }
    - { cite: "Schivardi, Sette, and Tabellini (2022)", doi: '10.1093/ej/ueab039', relation: contradicts, note: "Schivardi et al. find no TFP effects of zombie lending in Italy; this paper finds significant allocative-efficiency losses in Portugal" }
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

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Exposed banks increase credit to underreported firms, cut credit to all others**: triple-interaction coefficient positive and significant during EBA, negative and significant for baseline group | Figure 3 Panel A; Table A2 cols. 2-3, p. 1615 | +2 pp quarterly credit growth for underreported firms at exposed banks; -2 pp for all other relationships at exposed banks (each ~4% of 1 SD of credit growth) |
| R2 | **Firm-level credit reallocation is real and not undone by substitution**: total credit rises for underreported firms with high exposure to EBA banks, falls for all others | Figure 5 Panel A, p. 1619 | +16% cumulative credit for underreported firms borrowing entirely from exposed banks; -14% for all other firms relative to base quarter 2011:III |
| R3 | **Credit shock transmits to labor**: IV elasticity of labor w.r.t. credit supply is large and significant | Table 5 Panel B col. 2, p. 1625 | Elasticity = 0.52 (SE 0.094); first-stage F = 111.2 |
| R4 | **Credit shock transmits to capital**: IV elasticity of capital w.r.t. credit supply is significant | Table 5 Panel B col. 4, p. 1625 | Elasticity = 0.14 (SE 0.046); first-stage F = 111.2 |
| R5 | **Total EBA intervention caused large allocative-efficiency loss**: aggregating all firm-level wedge changes explains majority of 2012 AE decline | Table 6 Panel A col. 1, p. 1628 | Total estimated AE effect: -6.59% = 54% of actual -12.24% within-sector AE decline in 2012 |
| R6 | **Credit reallocation to underreported firms alone accounts for ~22% of the AE decline**: reallocation component isolated via simulation | Table 6 Panel B col. 1, p. 1628 | Mean -2.71% AE (range -0.89% to -4.43%); mean = 22% of actual AE decline |
| R7 | **Bunching validity**: underreporting is statistically higher in overdue buckets immediately before a jump in the regulatory deduction rate, confirming strategic behavior | Table B1 Panel A, p. 1636 | Coefficients 0.014-0.451 across collateral types and increment sizes (all positive and significant); placebo using the other collateral type's rate increment yields negative coefficients |

**Overall (paper's conclusion).** Ratio-based capital requirements create distorted lending incentives when banks are already in distress: exposed banks intensify loss underreporting and roll over credit to underreported borrowers to avoid booking additional losses. This credit misallocation prevents inputs from being reallocated to their highest-value uses, widening the dispersion of capital and labor wedges and contributing meaningfully to aggregate productivity decline.

## Theory / model

The paper has no formal equilibrium model; its conceptual framework is that ratio-based capital requirements create distorted incentives for already-distressed banks (tested hypotheses) and that these distortions propagate to real outcomes through credit misallocation.

**Identification.** The EBA in October 2011 announced that a subset of European banks had to meet a 9 percent Core Tier 1 ratio (with an additional sovereign debt buffer) by June 2012 (p. 1610). In Portugal, four banking groups (seven banks) were affected. The capital shortfall was determined by:

$$
\frac{\text{Core Tier 1} - \text{sovereign debt buffer}}{\text{RWA}} \geq 0.09. \tag{EBA threshold}
$$

A bank is defined as exposed if it was subject to the EBA exercise AND had a large capital shortfall (above-median sovereign bond holdings among eligible banks). The control group consists of eligible banks with below-median holdings plus all other commercial banks operating in Portugal. The key assumption is that observed credit reallocation is driven by the supply side (the shock to exposed banks' incentives) rather than differential credit demand from underreported firms. The paper supports this with parallel pre-trends, firm-level liquidity checks, and the result that exposed banks increase credit only to underreported (not to overdue-but-correctly-reported) firms.

**Wedge measurement.** Firm-level distortions are quantified as wedges in the first-order conditions of a Cobb-Douglas production function (equations 4-5, p. 1622):

$$
\alpha_s \frac{Y_{it}}{K_{it}} = (r_t + \Delta_t)(1 + \tau_{it}^K), \tag{4}
$$

$$
\beta_s \frac{Y_{it}}{L_{it}} = w_t(1 + \tau_{it}^L), \tag{5}
$$

where $$\tau_{it}^K$$ and $$\tau_{it}^L$$ are the capital and labor wedges (gaps between marginal revenue products and user costs), $$\alpha_s$$ and $$\beta_s$$ are sector-level capital and labor income shares, $$r_t + \Delta_t$$ is the depreciation-adjusted interest rate, and $$w_t$$ is the wage. Underreported firms have substantially lower marginal revenue products (mean MRPL = 37,300 vs. 48,240 for performing firms; mean MRPK = 47,440 vs. 63,160), indicating they are far from the efficient allocation even before the EBA shock (Table 4, p. 1622).

**Tested hypotheses:** (i) capital-constrained banks increase loss underreporting; (ii) they roll over credit to underreported borrowers to avoid forced loss recognition; (iii) credit reallocation to low-productivity borrowers widens wedge dispersion and lowers allocative efficiency; (iv) the mechanism is loss delay, not risk shifting (no increase in risky lending; see Table 3, p. 1618). Peek and Rosengren (2005) and Caballero, Hoshi, and Kashyap (2008) documented zombie lending in Japan; European reduced-form evidence exists (Schivardi, Sette, and Tabellini 2022 find no TFP effect in Italy) but has not established causality; this paper introduces quasi-experimental variation to establish causality and links the channel to input misallocation.

## Method

**Loan-loss underreporting algorithm.** The key methodological contribution is a Markovian excess-mass algorithm (Section I and Appendix A, pp. 1605-1608) that measures strategic delay in loan-loss reporting using the Portuguese Credit Register (Central de Responsabilidades de Credito), which reports the overdue loan balance in each regulatory deduction-rate bucket at the monthly firm-bank level.

Denote the observed loan balance in overdue bucket $$k$$ in month $$t$$ as $$B_{ib}(t;k)$$. In the absence of misreporting, the balance in bucket $$k$$ at $$t$$ equals the amount that moved up from bucket $$k-1$$ in the previous period. Excess mass is the deviation from this identity. When there are no flows the baseline expression is $$E(t;k) = B(t;k) - B(t-1; k-1)$$ (p. 1606). In general, inflows (new overdue installments) and outflows (repayments, restructurings, write-offs) require adjustment; the paper's equation (1) is:

$$
E(t;k) = \bigl[B(t;k) - IN(t;k)\bigr] - \bigl[B(t-1; k-1) - OUT(t; k-1)\bigr]. \tag{1, p. 1607}
$$

For multi-month buckets the appendix reformulates this using unobserved monthly sub-bucket balances $$C(t;c)$$ (where $$B(t;k) = \sum_{c \in k} C(t;c)$$), giving equation (A3, p. 1632):

$$
E(t;k) = \bigl[C(t;c) - IN(t;c)\bigr] - \bigl[C(t-1;c-1) - OUT(t;c-1)\bigr], \tag{A3}
$$

where $$IN(t;k)$$ denotes new installments falling overdue and $$OUT(t;k-1)$$ denotes repayments and restructurings. Excess mass is set to zero when negative (additional restriction) and adjusted for December window-dressing (Appendix A4). The algorithm is validated by the bunching result: excess mass is significantly higher in buckets immediately before a jump in the mandatory deduction rate, and the effect increases with the size of the regulatory increment (Table B1, p. 1636; equation B1, p. 1635):

$$
\frac{\text{excess mass}_{ibkct}}{\text{overdue loans}_{ibkct}} = \sum_{j=1}^{5} \beta_j \Delta \text{deduction rate}_j + \varphi_b + \theta_t + \mu_t + \epsilon_{ibkct}. \tag{B1}
$$

**Productivity decomposition.** To aggregate firm-level wedge changes to the macro level, the paper follows Osotimehin (2019) and decomposes aggregate TFP growth into technical efficiency (TE), within-sector allocative efficiency ($$\Delta AE_{\text{within}}$$), and between-sector allocative efficiency ($$\Delta AE_{\text{between}}$$) (equation 7, p. 1625):

$$
\Delta \ln TFP \simeq \Delta TE + \Delta AE_{\text{within}} + \Delta AE_{\text{between}}. \tag{7}
$$

Within-sector allocative efficiency in sector $$s$$ depends on the weighted sum of firm-level wedge changes (equations 9-10, pp. 1626-1627); allocative efficiency deteriorates when wedge dispersion across firms grows. The paper focuses on the within-sector component since between-sector allocative efficiency is small in the data (Figure 6, p. 1627).

## Empirical specifications

**Firm-bank DiD (primary credit results, R1).** The estimating specification is a dynamic differences-in-differences with a triple interaction at the firm-bank-quarter level (equation 2, p. 1613):

$$
g_{ibt}^{\text{credit}} = \sum_{\tau=-2}^{5} \beta_\tau^{\text{treat}}(\text{period}_\tau \times \text{exposed}_b)
  + \sum_{\tau=-2}^{5} \beta_\tau^{\text{period}}(\text{period}_\tau \times \text{underreported}_{ib})
$$

$$
+ \sum_{\tau=-2}^{5} \beta_\tau^{\text{treatgroup}}(\text{period}_\tau \times \text{underreported}_{ib} \times \text{exposed}_b)
  + \beta_1^{\text{base}}(\text{underreported}_{ib} \times \text{exposed}_b) + \beta_2^{\text{base}} \text{underreported}_{ib}
$$

$$
+ \alpha_2 \mathbf{X}_{ibt} + \theta_{it} + \varphi_b + \epsilon_{ibt}. \tag{2}
$$

Here $$g_{ibt}^{\text{credit}} = \text{credit}_{ibt}/\text{credit}_{ib,t-1} - 1$$, $$\text{exposed}_b$$ is a bank-level dummy, $$\text{underreported}_{ib}$$ is a dummy for lending relationships with prior loss underreporting, $$\text{period}_\tau$$ groups quarters into three-quarter windows, $$\theta_{it}$$ are firm-quarter fixed effects (absorbing all firm-level credit demand shocks), and $$\varphi_b$$ are bank fixed effects. Standard errors are two-way clustered at the firm and bank level. N = 1,981,219. The coefficients of interest are $$\beta_\tau^{\text{treatgroup}}$$, measuring the treatment effect for underreported firms at exposed banks.

**Firm-level DiD (credit confirmation, R2).** To confirm that firms do not undo the bank-level reallocation through other lenders, a dynamic firm-level specification instruments for the firm-level credit shock using the pre-EBA borrowing share from exposed banks (equation 3, p. 1618):

$$
\Delta \log \text{credit}_{it} = \sum_{t=-5}^{10} \Delta_t^{\text{treatgroup}}(\text{quarter}_t \times \text{treatment}_i \times \text{underreported}_i)
  + \sum_{t=-5}^{10} \Delta_t^{\text{treatment}}(\text{quarter}_t \times \text{treatment}_i)
  + \text{controls} + \alpha_1 \mathbf{X}_{it} + \theta_i + \epsilon_{it}. \tag{3}
$$

N = 1,346,771 firm-quarter observations. Standard errors clustered at the firm level.

**IV for real effects (R3-R4).** To estimate pass-through to inputs, an IV strategy instruments the log change in firm-level credit with the normalized pre-EBA borrowing share from exposed banks interacted with the underreported dummy (equation 6, p. 1623):

$$
\Delta \log y_{is} = \gamma \Delta \log \text{credit}_{is} + \text{controls} + u_{is}, \tag{6}
$$

where $$y_{is}$$ is labor or capital. The instrument is the first-stage version of equation (3). The regression is estimated at annual frequency for 2012. N = 104,499. Standard errors clustered by industry. First-stage F-statistic = 111.2 (above Stock-Yogo 5% maximal-bias criterion). Capital elasticity = 0.14, labor elasticity = 0.52; TFP elasticity is near zero and insignificant (Table 5 Panel B, p. 1625).

**Productivity aggregation (R5-R6).** Firm-level predicted wedge changes are computed as:

$$
\frac{\Delta \hat{\tau}_{it}^X}{1 + \tau_{it,t-1}^X} = \left(\hat{\gamma}_1^X + \hat{\gamma}_2^X \times \text{capital wedge}_{i,t-1}\right) \times \left(\hat{\Delta}^{\text{treatment}} \text{borrowing share}_{is}\right), \tag{12}
$$

for $$X = K, L$$. These firm-level changes are aggregated using equations (9)-(10) to estimate the contribution to within-sector allocative efficiency. The between-sector contribution (equation 11) is small and excluded from the headline calculation.

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

Source: peer-reviewed, *American Economic Review* 113(6), June 2023. Replication data available at [ICPSR E120003V1](https://doi.org/10.3886/E120003V1). This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**.

> Blattner, Laura, Luisa Farinha, and Francisca Rebelo. "When Losses Turn into Loans:
> The Cost of Weak Banks." *American Economic Review* 113, no. 6 (June 2023): 1600-1641.
> DOI: 10.1257/aer.20190149. Copyright 2023 American Economic Association.
> Paywalled; this page is an extract-only distillation.
