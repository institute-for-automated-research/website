---
title: "Housing Booms and Local Capital Misallocation: Liu, Zhao & Zhao (2026)"
description: >-
  Distilled: Exploits China's 2010-11 housing purchase restriction (HPR) policy
  as a natural experiment to show housing booms crowd out bank credit to
  manufacturing firms via reduced household mortgage and local government loan
  demand, worsening capital misallocation; the HPR policy improvement raised
  China's aggregate industrial TFP by approximately 2-3%. Journal of Banking and
  Finance 2026, paywalled. Seven core results with source locators, datasets used,
  the DiD/event-study design, and the TFP aggregation equation.
sidebar:
  label: Liu-Zhao-Zhao 2026
  order: 1
tags: [paper-summary, housing, banks, capital-misallocation, credit-supply,
       total-factor-productivity, china, panel-regression, difference-in-differences,
       panel-data, peer-reviewed, unreplicated,
       data:asif, data:wind, data:china-land-transaction,
       data:china-real-estate-yearbook, data:ntsd]
paper:
  authors: Yu Liu, Peng Zhao, Xiaoxue Zhao
  authorList:
    - { family: Liu, given: Yu, orcid: 0000-0003-0420-314X, affiliation: Fudan University }
    - { family: Zhao, given: Peng, orcid: 0000-0002-8381-547X, affiliation: Shanghai Lixin University of Accounting and Finance }
    - { family: Zhao, given: Xiaoxue, orcid: 0000-0001-5082-118X, affiliation: Wesleyan University }
  year: 2026
  venue: Journal of Banking and Finance 182 (2026) 107584
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2025.107584
  tier: field
  jel:
    codes: [R31, G28, D24, O12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: [Housing Market and Economics, China's Socioeconomic Reforms and Governance, Regional Economics and Spatial Analysis]
  dataAccess: proprietary-confidential
  outcome:
    - firm leverage and credit access (interest rate paid)
    - non-housing investment and industrial output of manufacturing firms
    - cross-firm MRPK dispersion within cities (capital misallocation)
    - aggregate industrial total factor productivity
  outcomeClass: [firm-financing, firm-real-outcomes, macro-aggregates]
  license: "Paywalled; all rights reserved. Crossref licence entries: TDM (Elsevier user licence 1.0, start 2026-01-01) and STM-ASF policy references only; no Creative Commons licence found. Copyright 2025 Elsevier B.V."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; paywalled confirmed from Crossref licence metadata, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 2
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, measurement]
  mechanisms: [financial-constraint, intermediary-constraint, collateral]
  scope:
    region: China
    assetClass: Chinese manufacturing firms
    period: 2006-01..2013-12
    frequency: annual
    dataType: [accounting, administrative]
    granularity: [firm, aggregate]
    n: "approx. 1,845,072 firm-years (Table 1, col. 1); 261 cities"
  findings:
    - { ref: R1, outcome: "firm leverage", metric: coefficient, value: "0.0378*** (se 0.0099)", direction: positive, vsBenchmark: "vs. non-HPR cities pre/post 2011 (DiD)" }
    - { ref: R2, outcome: "firm interest rate", metric: coefficient, value: "-0.0162*** (se 0.0034)", direction: negative, vsBenchmark: "vs. non-HPR cities pre/post 2011 (DiD)" }
    - { ref: R3, outcome: "non-housing investment probability", metric: pp-effect, value: "0.0302** (se 0.0119); log output also 0.1081** (se 0.0529)", direction: positive }
    - { ref: R4, outcome: "household mortgage loans (log)", metric: coefficient, value: "-0.2893*** (se 0.0751)", direction: negative, vsBenchmark: "crowding-out channel; housing boom inflates mortgage demand" }
    - { ref: R5, outcome: "local government loans (log)", metric: coefficient, value: "-0.3152** (se 0.1564)", direction: negative, vsBenchmark: "crowding-out channel; housing boom inflates LGFV collateral and land revenue" }
    - { ref: R6, outcome: "cross-firm MRPK dispersion", metric: coefficient, value: "Var(log-MRPK) event-study coefficients significantly negative post-HPR across all three dispersion measures (Figure 5, p. 13)", direction: negative }
    - { ref: R7, outcome: "aggregate industrial total factor productivity", metric: pp-effect, value: "2.04% gain from aggregation formula (Eq. 5); 3.1% from reduced-form (6% treated-city TFP gain x 51% national capital share)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Chakraborty, Goldstein & MacKinlay (2018)", doi: '10.1093/rfs/hhy033', relation: extends, note: "extends their US crowding-out channel to China, adding the LGFV government-loan mechanism absent in the US context" }
    - { cite: "Hsieh & Klenow (2009)", doi: '10.1162/qjec.2009.124.4.1403', relation: builds-on, note: "adopts their MRPK-based measure to quantify within-city capital misallocation across manufacturing firms" }
    - { cite: "Sraer & Thesmar (2023)", doi: '10.1257/aer.20190609', relation: builds-on, note: "uses their aggregation formula to map firm-level MRPK dispersion changes to aggregate TFP gains" }
    - { cite: "Basco, Lopez-Rodriguez, Moral-Benito & Moreno (2024)", relation: cites, note: "comparison paper on Spain; their collateral-channel TFP reduction (0.8-1.2%) vs. this paper's crowding-out channel TFP gain of 2%" }
    - { cite: "Martín, Moral-Benito & Schmitz (2021)", doi: '10.1257/aer.20191410', relation: extends, note: "extends this Spain-based financial transmission evidence on housing booms to Chinese manufacturing" }
  openQuestions:
    - "How China can reduce local governments' reliance on land-sales revenue, and whether fiscal reform can mitigate the crowding-out of industrial credit: stated as a key policy challenge for future research (p. 14)."
    - "Whether the TFP effect magnitude generalizes to other developing countries where financial markets are less developed or land-based government debt financing is less prevalent (footnote 35, p. 13)."
    - "Whether longer data would reveal long-term crowding-in effects of housing booms on firm credit: the 2006-2013 window is too short to detect them (p. 14)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-16); seven results extracted with locators from Tables 1-2, 5-8, Figure 5, Section 5.5. Not human-verified. Not reproduced. Data stated available on request." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF (pp. 1-16); all seven Core-result magnitudes confirmed. Fixed Eq. (5): covariance term was incorrectly outside the [Phi_s-K_s] bracket; corrected to inside. Added missing JEL code O12 (present on p. 1 of PDF)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107584", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license entries: tdm (Elsevier TDM user licence 1.0, start 2026-01-01) and stm-asf policy references only; no Creative Commons licence; paywalled" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the economic mechanism (crowding-out of firm credit via housing booms and the LGFV government-loan channel), and the DiD/event-study design with the TFP aggregation equation: enough to know what it found and how, without reading all 16 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107584).

## TL;DR

Liu, Zhao, and Zhao (2026) exploit China's housing purchase restriction (HPR) policy, implemented city-by-city starting in 2010, as a natural experiment to study how housing booms crowd out credit to manufacturing firms. The HPR capped household home purchases (at most one new home), directly reducing housing demand and halting local house-price growth. Using a DiD design comparing 45 treated cities to 216 control cities over 2006-2013, the paper shows that the housing boom had significantly crowded out bank credit to manufacturing firms via two channels: (i) banks reduced mortgage loans to households (down 23-29%), and (ii) local governments' land-sales revenue fell, reducing their borrowing through local government financing vehicles (LGFVs, down 31-52%), freeing bank credit for firms. The credit relaxation raised firm leverage by about 3.8 percentage points and lowered firms' interest costs by about 1.6 pp. More financially constrained firms (smaller, higher initial MRPK) and cities with more constrained banks (higher bank leverage) benefited most. Increased credit access led to higher non-housing investment, industrial output, and value-added. The paper documents that within-city capital misallocation (MRPK dispersion) fell significantly in treated cities and estimates the HPR policy increased China's aggregate industrial TFP by approximately 2-3%, consistent with Chakraborty, Goldstein, and MacKinlay (2018) and extending that crowding-out literature to the Chinese manufacturing context. The comparison with Basco, Lopez-Rodriguez, Moral-Benito, and Moreno (2024) suggests the crowding-out channel dominates the collateral channel in China.

## Core results

Magnitudes and significance are as reported; \*\*/\*\*\* = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | HPR policy significantly raised firm leverage in treated cities | Table 1, col. 2, p. 6 | DiD coeff. 0.0378\*\*\* (se 0.0099); leverage = debt / total assets |
| R2 | HPR policy significantly lowered firm interest rate in treated cities | Table 1, col. 7, p. 6 | DiD coeff. -0.0162\*\*\* (se 0.0034); interest rate = total interest / total debt |
| R3 | Firms increased non-housing investment and industrial output after HPR | Table 2, cols. 1, 4-5, p. 7 | I(non-housing investment > 0): 0.0302\*\* (se 0.0119); log output: 0.1081\*\* (se 0.0529); log value-added: 0.1409\*\* (se 0.0679) |
| R4 | HPR policy significantly reduced household mortgage loans | Table 5, Panel A, col. 5, p. 8 | DiD coeff. on log total mortgage loans: -0.2893\*\*\* (se 0.0751) |
| R5 | HPR policy significantly reduced local government (LGFV) loans | Table 5, Panel B, col. 13, p. 8 | DiD coeff. on log total LGFV loans: -0.3152\*\* (se 0.1564) |
| R6 | HPR policy significantly reduced within-city cross-firm MRPK dispersion | Figure 5a, 5c, 5e, p. 13 | Event-study coefficients on Var(log-MRPK), 90th/10th, and 75th/25th MRPK ratios all significantly negative post-HPR |
| R7 | HPR policy increased China's aggregate industrial TFP by approximately 2-3% | Section 5.5, Eq. 5, p. 12-13 | Aggregation formula: 2.04%; reduced-form: treated-city TFP gain of ~6% x 51% national capital share = ~3.1% |

**Overall (paper's conclusion).** China's prolonged housing boom generated large unintended negative externalities on manufacturing firms by crowding out bank credit, particularly through the government-loan channel (LGFVs backed by land-sales collateral) and the household mortgage channel. The housing market decline induced by the HPR policy relieved these credit constraints, improved capital allocation across firms, and raised aggregate industrial productivity. The TFP improvement of 2-3% represents a substantial welfare gain attributable to cooling the housing boom through the credit channel.

## Theory / model

The paper presents no formal general-equilibrium model. The theoretical argument rests on two institutional features of China's credit market that create the conditions for housing-boom crowding-out.

**Geographic segmentation.** China's credit market is highly segmented geographically: about 89% of all bank loans are issued to borrowers in the issuing bank's own city (Gao et al., 2019, cited p. 3). When local housing demand rises, local banks increase mortgage lending to households and extend more credit to LGFVs (whose borrowing capacity is backed by rising land-sales collateral and land-conveyance revenue). Because banks face binding regulatory constraints (Basel III leverage ratio, loan-to-deposit ratio, and annual credit quotas from the People's Bank of China), credit to housing-related borrowers crowds out credit to local manufacturing firms.

**Identification.** The HPR policy was implemented in 46 cities based on whether housing prices were rising rapidly - a criterion orthogonal to manufacturing productivity trends. This quasi-random assignment provides a credible DiD design: manufacturing firms in treated and control cities showed no differential pre-existing trends in leverage, interest rate, investment, or output (Figure 2 and Figure A.4, pp. 9, 10). The exclusion restriction is that the HPR policy affected manufacturing firms only through the housing and credit market (no explicit government mandate to redirect lending to industry, confirmed in Section C of the online appendix).

**Tested hypotheses.** Three primary hypotheses follow:
1. Housing market declines raise firm credit access: leverage rises, interest rate falls.
2. The mechanism operates through reductions in household mortgage loans and LGFV loans, crowding in credit to manufacturing firms.
3. Effects are stronger in cities with more financially constrained banks (higher bank leverage, lower deposits) and in firms that are more ex-ante credit-constrained (smaller, lower MRPK).

Hsieh and Klenow (2009) provide the theoretical framework for how credit-access heterogeneity translates into capital misallocation: firms with high marginal revenue product of capital (MRPK) relative to the average are under-financed, and equalizing credit access across firms reduces the MRPK dispersion and raises aggregate TFP.

## Method

The headline estimator is a two-way fixed-effects DiD regression (p. 5):

$$
y_{i,c,t} = \beta \, \text{Treat}_c \times \text{Post}_t + \lambda X_{i,t} + \theta X_{c,t} + \gamma_i + \gamma_t + \epsilon_{i,c,t} \tag{1}
$$

where $$y_{i,c,t}$$ is leverage or interest rate of firm $$i$$ in city $$c$$ in year $$t$$; $$\text{Treat}_c$$ is a dummy equal to 1 for the 45 HPR-implementing cities; $$\text{Post}_t$$ is equal to 1 for years 2011 onward; $$\gamma_i$$ and $$\gamma_t$$ are firm and year fixed effects; $$X_{i,t}$$ includes firm age, age squared, log assets, and fixed-asset share; $$X_{c,t}$$ includes city-level contemporaneous real-estate investment share, total credit/GDP, log real GDP, and GDP growth rate. Standard errors are clustered at the city level.

Dynamic (event-study) effects use (p. 5):

$$
y_{i,c,t} = \sum_{\tau=-4}^{3} \beta_\tau \, \text{Treat}_c \times I_t^\tau + \lambda X_{i,t} + \theta X_{c,t} + \gamma_i + \gamma_t + \epsilon_{i,c,t} \tag{2}
$$

where $$I_t^\tau = 1$$ if year $$t$$ is $$\tau$$ years after the HPR shock (year 0 = 2011). Coefficients for $$\tau \in \{-4, \ldots, -1\}$$ test for pre-existing trends; none are found for any main outcome variable.

Heterogeneous effects by firm financial constraint are examined via triple-differences (p. 10):

$$
y_{i,c,t} = \beta_1 \, \text{Treat}_c \times \text{Post}_t \times \text{FirmFC}_i + \beta_2 \, \text{Treat}_c \times \text{Post}_t + \beta_3 \, \text{FirmFC}_i \times \text{Post}_t + \lambda X_{i,t} + \theta X_{c,t} + \gamma_i + \gamma_t + \epsilon_{i,c,t} \tag{3}
$$

where $$\text{FirmFC}_i$$ is a pre-reform financial constraint proxy (employment, total assets, property-holding status, or initial MRPK).

Capital misallocation is studied with an industry-city-year event study (p. 12):

$$
y_{c,j,t} = \sum_{\tau=-4}^{3} \alpha_\tau \, \text{Treat}_c \times I_t^\tau + \gamma_{c,j} + \delta_t + \epsilon_{c,j,t} \tag{4}
$$

where $$y_{c,j,t}$$ is one of three cross-firm MRPK dispersion measures in 2-digit industry $$j$$, city $$c$$, year $$t$$: variance of log-MRPK, log-ratio of 90th to 10th percentiles, and log-ratio of 75th to 25th percentiles. City-industry and year fixed effects are included.

Aggregate TFP is computed via the Sraer and Thesmar (2023) aggregation formula (p. 12):

$$
\Delta \log(\text{TFP}) \approx -\frac{a}{2}\!\left(1 + \frac{a\theta}{1-\theta}\right) K_s \Delta\Delta\sigma^2 - \frac{a}{2}\!\left(\frac{a\theta}{1-\theta}\right) \left[\Phi_s - K_s\right] \left(\Delta\Delta\bar{\mu} + \Delta\Delta\hat{\sigma}_{\text{MRPK},py}\right) + \frac{1}{2}\frac{a\theta}{1-\theta} \Delta\Delta\sigma^2 \tag{5}
$$

where $$a = 1/3$$ (capital share from Cobb-Douglas production), $$\theta = 0.83$$ (price elasticity of demand), $$K_s = 0.5114$$ (treated cities' share of national capital), $$\Phi_s = 0.4723$$ (treated cities' output share), and $$\Delta\Delta\sigma^2$$, $$\Delta\Delta\bar{\mu}$$, $$\Delta\Delta\hat{\sigma}_{\text{MRPK},py}$$ are the DiD estimates of changes in variance, mean, and covariance of log-MRPKs from Table 9 (p. 15).

## Empirical specifications

**Credit access (R1-R2).** Eq. (1) with firm leverage (debt/total assets) or interest rate (total interest/total debt) as the dependent variable, applied to approximately 1.85 million firm-year observations from the ASIF panel, 261 cities, 2006-2013. City controls, firm controls, and pre-trend interaction terms are added progressively (Table 1, cols. 1-5 for leverage, cols. 6-10 for interest rate). Results are replicated separately for private, state-owned, and foreign firms; private firms show the largest effects, consistent with private firms being most financially constrained.

**Real outcomes (R3).** Eq. (1) applied to real firm outcomes: an indicator of positive non-housing investment, log non-housing investment, log non-housing capital, log industrial output, and log value-added (Table 2). The 427,088 to 655,568 firm-year observations used here are the subset of firms reporting investment data.

**Crowding-out mechanism (R4-R5).** Eq. (1) applied at the province-treatment-year level with log total mortgage loans (China Real Estate Yearbooks, 31 provinces, 35 major cities) and at the city-year level with log total LGFV loans (WIND database, 261 cities). Table 5 Panel A shows that HPR reduced housing transaction volumes and prices (cols. 1-4) and total mortgage loans (cols. 5-6). Panel B shows that HPR reduced primary land-market prices and areas sold by local governments (cols. 7-10), local government land-sales revenue (cols. 11-12), and total LGFV loan volumes (cols. 13-14).

**Bank constraints heterogeneity.** Eq. (1) and a triple-differences variant separating cities by pre-reform bank leverage (above/below national median, Table 6, p. 10) and by bank deposits (Table 7). The HPR leverage effect is 8.62 pp for cities with high bank leverage vs. insignificant for low-leverage cities; the interest-rate effect is -2.91 pp vs. insignificant. Consistent with the crowding-out channel operating through bank balance-sheet constraints.

**Firm constraints heterogeneity.** Eq. (3) with four proxies for $$\text{FirmFC}_i$$ (Table 8, p. 14-15). Firms with higher initial MRPK (2009) show a 0.0084 pp larger leverage increase per unit of log-MRPK (t = 2.40) and a 0.0032 pp larger interest-rate decline, consistent with HPR differentially improving credit access for the most capital-constrained firms, reducing MRPK dispersion.

**Capital misallocation (R6).** Eq. (4) applied at the 2-digit industry by city by year level. All three MRPK dispersion measures (variance, 90/10 ratio, 75/25 ratio) show significantly negative event-study coefficients in the post-HPR period with no pre-trends, both for capital (MRPK) and labor (MRPL) misallocation (Figure 5, p. 13). Within-city capital misallocation contributes approximately 60% of overall MRPK dispersion in China.

**Aggregate TFP (R7).** Eq. (5) applied using parameter values from Table 9 (p. 15): $$\Delta\Delta\sigma^2 = -0.0998$$, $$\Delta\Delta\bar{\mu} = -0.0453$$, $$\Delta\Delta\hat{\sigma}_{\text{MRPK},py} = 0.0326$$. The formula yields a 2.04% TFP improvement. A reduced-form approach directly estimating TFP at the 2-digit industry by city by year level finds treated cities improved TFP by approximately 6% relative to control cities; scaling by the 51% national capital share of treated cities gives 3.1%.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Annual Survey of Industrial Firms (ASIF) | Main firm panel: leverage, interest rate, investment, output, MRPK; manufacturing firms with annual sales above 5 million RMB; approx. 1,845,072 firm-years | No page yet |
| WIND database (LGFV data) | Local government financing vehicle loan volumes for 261 cities, 2006-2013 | No page yet |
| China Land Transaction Monitoring System (landchina.com) | Primary land market transaction prices and areas sold by city-year, 2006-2013 | No page yet |
| CEIC China database | Secondary housing market transaction prices and sold housing area by city-year | No page yet |
| China Real Estate Yearbooks | Province-level and city-level home mortgage loan data, 31 provinces and 35 major cities | No page yet |
| National Tax Statistics Database (NTSD) | Firm-level property holding status and non-housing asset investments; approx. 700,000 firms annually | No page yet |
| China City Statistical Yearbooks | City-level covariates: GDP, credit/GDP ratio, real-estate investment share | No page yet |

Sample: 261 Chinese cities, 2006-2013 (2010 excluded because ASIF data for 2010 were never released). The 45 HPR-treated cities implemented the policy in 2010-2011; 216 cities serve as controls.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2025.107584) to:
- Replicate the DiD estimates or extend to the post-2013 HPR relaxation period (after 2016).
- Examine the full battery of robustness checks: neighboring-city controls (Table 3), full ASIF sample (Table 4), balanced panel (Table A.5), alternative leverage and interest measures (Tables A.7-A.9), province-year fixed effects (Table A.10), and NTSD-supplemented estimates (Table A.11).
- Study the bank-constraints heterogeneity (Tables 6-7) and firm-level heterogeneity (Table 8, Figure 4) in detail.
- Apply the Sraer and Thesmar (2023) aggregation formula in other settings; parameters and derivation are in Table 9.
- Study the comparison with Basco et al. (2024) and Martín et al. (2021) on the relative importance of the crowding-out vs. collateral channel across countries.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 182 (2026), article 107584. Copyright 2025 Elsevier B.V. All rights reserved. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The source is paywalled; reproduction beyond brief extraction requires the publisher's permission.

> Liu, Yu, Peng Zhao, and Xiaoxue Zhao. "Housing booms and local capital misallocation." *Journal of Banking and Finance* 182 (2026) 107584. DOI: [10.1016/j.jbankfin.2025.107584](https://doi.org/10.1016/j.jbankfin.2025.107584).
