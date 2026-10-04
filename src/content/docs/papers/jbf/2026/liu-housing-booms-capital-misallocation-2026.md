---
title: "Housing Booms and Local Capital Misallocation: Liu, Zhao & Zhao (2026)"
description: >-
  Distilled: Exploits China's 2010-11 housing purchase restriction (HPR) policy
  as a natural experiment to show housing booms crowd out bank credit to
  manufacturing firms via reduced household mortgage and local government loan
  demand, worsening capital misallocation; the paper estimates a 2.04% aggregate
  industrial TFP gain through its allocation formula. Journal of Banking and
  Finance 2026, paywalled. Twenty-four core results with source locators, datasets used,
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
  resultsCount: 24
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
    - { ref: R3, outcome: "non-housing investment probability and production", metric: coefficient, value: "positive-investment indicator 0.0302** (se 0.0119); log output 0.1081** (se 0.0529); log value-added 0.1409** (se 0.0679)", direction: positive }
    - { ref: R4, outcome: "household mortgage loans (log)", metric: coefficient, value: "-0.2893*** (se 0.0751)", direction: negative, vsBenchmark: "crowding-out channel; housing boom inflates mortgage demand" }
    - { ref: R5, outcome: "local government loans (log)", metric: coefficient, value: "-0.3152** (se 0.1564)", direction: negative, vsBenchmark: "crowding-out channel; housing boom inflates LGFV collateral and land revenue" }
    - { ref: R6, outcome: "cross-firm MRPK dispersion", metric: coefficient, value: "Var(log-MRPK) event-study coefficients significantly negative post-HPR across all three dispersion measures (Figure 5, p. 13)", direction: negative }
    - { ref: R7, outcome: "aggregate industrial total factor productivity", metric: index-growth, value: "2.04% gain from aggregation formula (Eq. 5); 3.1% from reduced-form (6% treated-city TFP gain x 51% national capital share)", direction: positive }
    - { ref: R8, outcome: "non-housing investment of manufacturing firms", metric: coefficient, value: "0.1768** (se 0.0826), log investment", direction: positive }
    - { ref: R9, outcome: "non-housing investment of manufacturing firms", metric: coefficient, value: "0.1615* (se 0.0880), log non-housing capital", direction: positive }
    - { ref: R10, outcome: "local housing market prices and transactions", metric: coefficient, value: "log average housing price: -0.0444** (se 0.0172); log transaction area: -0.3420*** (se 0.0484)", direction: negative, vsBenchmark: "treated versus control cities after HPR" }
    - { ref: R11, outcome: "local government primary land market prices and transactions", metric: coefficient, value: "log land transaction price: -0.3874*** (se 0.1078); log land transaction area: -0.3988*** (se 0.1215)", direction: negative, vsBenchmark: "treated versus control cities after HPR" }
    - { ref: R12, outcome: "local government land-sales revenue", metric: coefficient, value: "-0.4300*** (se 0.0673), log revenue", direction: negative, vsBenchmark: "treated versus control cities after HPR" }
    - { ref: R13, outcome: "firm leverage and interest rate", metric: coefficient, value: "high-bank-leverage x Treat x Post: leverage 0.0952*** (se 0.0233); interest rate -0.0316*** (se 0.0081)", direction: mixed, vsBenchmark: "difference in HPR effects for high versus low bank-leverage cities" }
    - { ref: R14, outcome: "firm leverage and interest rate", metric: coefficient, value: "low-bank-deposits x Treat x Post: leverage 0.0558*** (se 0.0152); interest rate -0.0201*** (se 0.0058)", direction: mixed, vsBenchmark: "difference in HPR effects for low versus high bank-deposit cities" }
    - { ref: R15, outcome: "firm leverage and interest rate", metric: coefficient, value: "Treat x Post x log firm assets: leverage -0.0155*** (se 0.0039); interest rate 0.0053*** (se 0.0014)", direction: mixed, vsBenchmark: "larger HPR credit-access effect for firms with lower initial assets" }
    - { ref: R16, outcome: "firm leverage and interest rate", metric: coefficient, value: "Treat x Post x log firm employment: leverage -0.0151*** (se 0.0038); interest rate 0.0033** (se 0.0014)", direction: mixed, vsBenchmark: "larger HPR credit-access effect for firms with lower initial employment" }
    - { ref: R17, outcome: "firm leverage and interest rate", metric: coefficient, value: "Treat x Post x property holding: leverage -0.0217*** (se 0.0053); interest rate 0.0081*** (se 0.0018)", direction: mixed, vsBenchmark: "firms holding property benefit less, consistent with collateral effects" }
    - { ref: R18, outcome: "firm leverage and interest rate", metric: coefficient, value: "Treat x Post x 2009 firm MRPK: leverage 0.0084** (se 0.0035); interest rate -0.0032** (se 0.0014)", direction: mixed, vsBenchmark: "larger HPR credit-access effect for firms with higher initial MRPK" }
    - { ref: R19, outcome: "firm credit access and real outcomes", metric: coefficient, value: "No differential pre-trends reported before HPR; event-study pre-treatment estimates are not statistically different from zero", direction: none, vsBenchmark: "treated versus control cities before HPR" }
    - { ref: R20, outcome: "firm leverage and interest rate", metric: coefficient, value: "neighboring-city controls: leverage 0.0364*** (se 0.0104); interest rate -0.0131*** (se 0.0036)", direction: mixed, vsBenchmark: "alternative comparison sample" }
    - { ref: R21, outcome: "firm leverage and interest rate", metric: coefficient, value: "full ASIF sample: leverage 0.0381*** (se 0.0099); interest rate -0.0153*** (se 0.0032)", direction: mixed, vsBenchmark: "full ASIF sample versus 261-city baseline sample" }
    - { ref: R22, outcome: "aggregate industrial total factor productivity", metric: index-growth, value: "treated-city industrial TFP increased approximately 6%; 6% x 51% treated-city national capital share = 3.1% national TFP increase", direction: positive, vsBenchmark: "reduced-form estimate, separate from Eq. 5 aggregation" }
    - { ref: R24, outcome: "firm leverage and interest rate", metric: coefficient, value: "ownership splits: leverage private 0.0462*** (se 0.0121), state-owned -0.0032 (se 0.0135), foreign 0.0143* (se 0.0082); interest rate private -0.0158*** (se 0.0036), state-owned -0.0071*** (se 0.0024), foreign -0.0105*** (se 0.0031)", direction: mixed, vsBenchmark: "strongest credit-access response for private firms" }
  resultType: confirms
  relatesTo:
    - { cite: "Chakraborty, Goldstein & MacKinlay (2018)", doi: '10.1093/rfs/hhy033', relation: extends, note: "extends their US crowding-out channel to China, adding the LGFV government-loan mechanism absent in the US context" }
    - { cite: "Hsieh & Klenow (2009)", doi: '10.1162/qjec.2009.124.4.1403', relation: builds-on, note: "adopts their MRPK-based measure to quantify within-city capital misallocation across manufacturing firms" }
    - { cite: "Sraer & Thesmar (2023)", doi: '10.1257/aer.20190609', relation: builds-on, note: "uses their aggregation formula to map firm-level MRPK dispersion changes to aggregate TFP gains" }
    - { cite: "Basco, Lopez-Rodriguez, Moral-Benito & Moreno (2024)", relation: cites, note: "related Spain study estimates a 0.8-1.2% TFP reduction through collateral-related misallocation; the authors caution that the shocks and mechanisms differ, so magnitudes are hard to compare" }
    - { cite: "Martín, Moral-Benito & Schmitz (2021)", doi: '10.1257/aer.20191410', relation: extends, note: "extends this Spain-based financial transmission evidence on housing booms to Chinese manufacturing" }
  openQuestions:
    - "How China can reduce local governments' reliance on land-sales revenue, and whether fiscal reform can mitigate the crowding-out of industrial credit: stated as a key policy challenge for future research (p. 14)."
    - "How the TFP effect varies across settings: the authors suggest it could be larger where financial markets are less developed or local governments rely more heavily on land-based debt financing, and smaller in other contexts (p. 13)."
    - "Whether longer data would reveal long-term crowding-in effects of housing booms on firm credit: the 2006-2013 window is too short to detect them (p. 14)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-16); seven results extracted with locators from Tables 1-2, 5-8, Figure 5, Section 5.5. Not human-verified. Not reproduced. Data stated available on request." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF (pp. 1-16); all seven Core-result magnitudes confirmed. Fixed Eq. (5): covariance term was incorrectly outside the [Phi_s-K_s] bracket; corrected to inside. Added missing JEL code O12 (present on p. 1 of PDF)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and appended seventeen Core results, with findings for the quantitative rows, expanded the estimating-specification details, and checked the five numbered equations against the PDF. Not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Full audit checked all 24 results, equations, specifications, axes, prose, and frontmatter against the PDF; corrected the HPR description, event-time label, Eq. (4)-(5), R3 findings, R18 units, Table 8 locators, resultType, and cross-country framing. Citation locatability check passes. Table-locator pass (2026-10-04): R14, Table 7, p. 11 -> Table 7, p. 14." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107584", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license entries: tdm (Elsevier TDM user licence 1.0, start 2026-01-01) and stm-asf policy references only; no Creative Commons licence; paywalled" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the economic mechanism (crowding-out of firm credit via housing booms and the LGFV government-loan channel), and the DiD/event-study design with the TFP aggregation equation: enough to know what it found and how, without reading all 16 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107584).

## TL;DR

Liu, Zhao, and Zhao (2026) use China's 2010-11 housing purchase restriction (HPR) policy as a natural experiment to study how housing booms affect manufacturing-firm credit. The policy restricted household purchases (in most cities, to two homes with a minimum two-year gap), reducing housing demand and prices. Comparing 45 treated cities with 216 controls over 2006-2013, the paper finds that HPR reduced household mortgage loans and local-government/LGFV loans, freeing bank credit for firms. The preferred estimates show firm leverage rising by 3.78 percentage points and interest rates falling by 1.62 percentage points. Smaller firms, firms with higher initial MRPK, and firms in cities with more constrained banks benefited more. Greater credit access accompanied increases in non-housing investment, output, and value-added. Within-city MRPK dispersion fell significantly. The authors estimate a 2.04% industrial TFP gain using their allocation formula; a separate reduced-form calculation implies 3.1%. Their evidence supports crowding-out as the dominant channel in China while also finding evidence consistent with a collateral channel.

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
| R7 | HPR policy increased estimated aggregate industrial TFP | Section 5.5, Eq. 5, p. 12-13; Table A.21, p. 13 | Allocation formula: 2.04%; separate reduced-form estimate: treated-city TFP gain of ~6% x 51% national capital share = ~3.1% |
| R8 | HPR increased firms' non-housing investment | Table 2, col. 2, p. 7 | DiD coeff. on log non-housing investment: 0.1768** (se 0.0826) |
| R9 | HPR increased firms' net non-housing capital | Table 2, col. 3, p. 7 | DiD coeff. on log non-housing capital: 0.1615* (se 0.0880) |
| R10 | HPR reduced secondary-market housing prices and transaction volume | Table 5, Panel A, cols. 2 and 4, p. 8 | Log average housing price: -0.0444** (se 0.0172); log transaction area: -0.3420*** (se 0.0484) |
| R11 | HPR reduced primary-market land prices and area sold | Table 5, Panel B, cols. 8 and 10, p. 8 | Log land price: -0.3874*** (se 0.1078); log transaction area: -0.3988*** (se 0.1215) |
| R12 | HPR reduced local governments' land-sales revenue | Table 5, Panel B, col. 12, p. 8 | DiD coeff. on log land-sales revenue: -0.4300*** (se 0.0673) |
| R13 | Firm credit access gains were larger where banks had higher leverage | Table 6, cols. 3 and 6, p. 10 | Triple interaction: leverage 0.0952*** (se 0.0233); interest rate -0.0316*** (se 0.0081) |
| R14 | Firm credit access gains were larger where banks had lower deposits | Table 7, cols. 3 and 6, p. 14 | Triple interaction: leverage 0.0558*** (se 0.0152); interest rate -0.0201*** (se 0.0058) |
| R15 | Smaller firms by initial assets benefited more from HPR | Table 8, cols. 1-2, p. 14 | Treat x Post x log assets: leverage -0.0155*** (se 0.0039); interest rate 0.0053*** (se 0.0014) |
| R16 | Smaller firms by initial employment benefited more from HPR | Table 8, cols. 3-4, p. 14 | Treat x Post x log employment: leverage -0.0151*** (se 0.0038); interest rate 0.0033** (se 0.0014) |
| R17 | Property-owning firms benefited less, consistent with a collateral channel | Table 8, cols. 5-6, p. 14; discussion p. 11 | Treat x Post x property holding: leverage -0.0217*** (se 0.0053); interest rate 0.0081*** (se 0.0018) |
| R18 | Firms with higher initial MRPK benefited more from HPR | Table 8 (continued), cols. 7-8, p. 15 | Treat x Post x 2009 MRPK: leverage 0.0084** (se 0.0035); interest rate -0.0032** (se 0.0014) |
| R19 | Event studies show no differential pre-trends in core outcomes | Figures 2 and A.4, pp. 8-9; Figure 3, p. 9 | No differential pre-treatment estimates reported for the main firm outcomes or mortgage and government loans; year 0 omitted because 2010 ASIF data are unavailable |
| R20 | Credit-access results hold using neighboring cities as controls | Table 3, cols. 1 and 5, p. 7 | Leverage: 0.0364*** (se 0.0104); interest rate: -0.0131*** (se 0.0036) |
| R21 | Credit-access results hold in the full ASIF sample | Table 4, cols. 1 and 5, p. 8 | Leverage: 0.0381*** (se 0.0099); interest rate: -0.0153*** (se 0.0032) |
| R22 | Reduced-form estimates imply a 3.1% national industrial TFP gain | Section 5.5, Table A.21, p. 13 | Treated-city industrial TFP rose approximately 6%; scaled by 51% national capital share: 6% x 51% = 3.1% |
| R23 | HPR had smaller and less significant effects on labor misallocation than on capital misallocation | Figure 5, panels b, d, f, p. 13 | MRPL dispersion estimates are smaller and less significant than the corresponding MRPK dispersion estimates |
| R24 | Credit-access gains were strongest for private firms across ownership groups | Table 1, cols. 3-5 and 8-10, p. 6 | Leverage: private 0.0462*** (se 0.0121), state-owned -0.0032 (se 0.0135), foreign 0.0143* (se 0.0082); interest rate: private -0.0158*** (se 0.0036), state-owned -0.0071*** (se 0.0024), foreign -0.0105*** (se 0.0031) |

**Overall (paper's conclusion).** China's prolonged housing boom generated negative externalities on manufacturing firms by crowding out bank credit through household mortgage lending and local-government borrowing (including LGFV loans backed by land-sale revenue). The HPR-induced housing-market decline reduced these competing loans, improved firm credit access and capital allocation, and raised estimated industrial productivity. The allocation formula estimates a 2.04% TFP gain; the separate reduced-form approach implies 3.1%. The authors also find evidence consistent with a collateral channel, though their results support crowding-out as dominant in China.

## Theory / model

The paper presents no formal general-equilibrium model. The theoretical argument rests on two institutional features of China's credit market that create the conditions for housing-boom crowding-out.

**Geographic segmentation.** China's credit market is highly segmented geographically: about 89% of all bank loans are issued to borrowers in the issuing bank's own city (Gao et al., 2019, cited p. 3). When local housing demand rises, local banks increase mortgage lending to households and extend more credit to LGFVs (whose borrowing capacity is backed by rising land-sales collateral and land-conveyance revenue). Because banks face binding regulatory constraints (Basel III leverage ratio, loan-to-deposit ratio, and annual credit quotas from the People's Bank of China), credit to housing-related borrowers crowds out credit to local manufacturing firms.

The paper follows Chakraborty, Goldstein, and MacKinlay (2018) in examining the US crowding-out channel and adds the LGFV government-loan mechanism in the Chinese setting.

**Identification.** The HPR policy was implemented in 46 cities, with rapid housing-price growth the primary selection factor. The authors use a DiD design and report no differential pre-existing trends in leverage, interest rate, investment, or output (Figure 2 and Figure A.4, pp. 9-10). The policy had no explicit government mandate to redirect lending to industry (Section C of the online appendix), supporting their interpretation that effects operate through housing and credit markets.

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

where $$I_t^\tau = 1$$ if year $$t$$ is $$\tau$$ years after the HPR shock; year 1 denotes 2011, and year-0 estimates for 2010 are omitted because ASIF data are unavailable. Coefficients for pre-treatment years test for differential trends; the paper reports none for the main outcomes.

Heterogeneous effects by firm financial constraint are examined via triple-differences (p. 10):

$$
y_{i,c,t} = \beta_1 \, \text{Treat}_c \times \text{Post}_t \times \text{FirmFC}_i + \beta_2 \, \text{Treat}_c \times \text{Post}_t + \beta_3 \, \text{FirmFC}_i \times \text{Post}_t + \lambda X_{i,t} + \theta X_{c,t} + \gamma_i + \gamma_t + \epsilon_{i,c,t} \tag{3}
$$

where $$\text{FirmFC}_i$$ is a pre-reform financial constraint proxy (employment, total assets, property-holding status, or initial MRPK).

Capital misallocation is studied with an industry-city-year event study (p. 12):

$$
y_{c,j,t} = \sum_{\tau=-4}^{3} \beta_\tau \, \text{Treat}_c \times I_t^\tau + \gamma_{c,j} + \delta_t + \epsilon_{c,j,t} \tag{4}
$$

where $$y_{c,j,t}$$ is one of three cross-firm MRPK dispersion measures in 2-digit industry $$j$$, city $$c$$, year $$t$$: variance of log-MRPK, log-ratio of 90th to 10th percentiles, and log-ratio of 75th to 25th percentiles. City-industry and year fixed effects are included.

Aggregate TFP is computed via the Sraer and Thesmar (2023) aggregation formula (p. 12):

$$
\Delta \log(\text{TFP}) \approx -\frac{\alpha}{2}\!\left(1 + \frac{\alpha\theta}{1-\theta}\right) K_s \Delta\Delta\hat{\sigma}^2 - \frac{\alpha}{2}\!\left(1 + \frac{\alpha\theta}{1-\theta}\right) \left[\Phi_s - K_s\right] \left(\Delta\Delta\hat{\mu} + \Delta\Delta\hat{\sigma}_{\text{MRPK},py}\right) + \frac{1}{2}\frac{\alpha\theta}{1-\theta} \Delta\Delta\hat{\sigma}^2 \tag{5}
$$

where $$\alpha = 1/3$$ (capital share from Cobb-Douglas production), $$\theta = 0.83$$ (price elasticity of demand), $$K_s = 0.5114$$ (treated cities' share of national capital), $$\Phi_s = 0.4723$$ (treated cities' output share), and $$\Delta\Delta\hat{\sigma}^2$$, $$\Delta\Delta\hat{\mu}$$, $$\Delta\Delta\hat{\sigma}_{\text{MRPK},py}$$ are the estimated DiD effects on variance, mean, and covariance of log-MRPKs from Table 9 (p. 15).

## Empirical specifications

**Credit access (R1-R2).** Eq. (1) uses firm leverage (debt/total assets) or interest rate (total interest/total debt) as the dependent variable in the ASIF panel, covering 261 cities over 2006-2013. Table 1's full-sample columns 1 and 6 contain 1,845,072 and 1,761,814 observations; the controlled specifications used for R1-R2 (columns 2 and 7) contain 1,639,502 and 1,588,629 observations. City controls, firm controls, and pre-trend interactions are added in the controlled specifications. Results are also reported separately for private, state-owned, and foreign firms; private firms show the largest effects, consistent with greater financial constraints.

**Real outcomes (R3).** Eq. (1) applied to real firm outcomes: an indicator of positive non-housing investment, log non-housing investment, log non-housing capital, log industrial output, and log value-added (Table 2). The 427,088 to 655,568 firm-year observations used here are the subset of firms reporting investment data.

**Crowding-out mechanism (R4-R5).** Eq. (1) applied at the province-treatment-year level with log total mortgage loans (China Real Estate Yearbooks, 31 provinces, 35 major cities) and at the city-year level with log total LGFV loans (WIND database, 261 cities). Table 5 Panel A shows that HPR reduced housing transaction volumes and prices (cols. 1-4) and total mortgage loans (cols. 5-6). Panel B shows that HPR reduced primary land-market prices and areas sold by local governments (cols. 7-10), local government land-sales revenue (cols. 11-12), and total LGFV loan volumes (cols. 13-14).

For the city-level housing and local-government outcomes in Table 5, specifications include city and year fixed effects; city controls are added in alternating columns. Standard errors are clustered by city, except the household-mortgage regressions, which cluster at the province-treatment level. Samples contain 2,076-2,084 city-years for most outcomes, 1,937-1,947 city-years for primary land-market outcomes, and 351 province-treatment-years for household mortgage loans (Table 5, p. 8).

**Bank constraints heterogeneity.** Eq. (1) and a triple-differences variant separating cities by pre-reform bank leverage (above/below national median, Table 6, p. 10) and by bank deposits (Table 7). The HPR leverage effect is 8.62 pp for cities with high bank leverage vs. insignificant for low-leverage cities; the interest-rate effect is -2.91 pp vs. insignificant. Consistent with the crowding-out channel operating through bank balance-sheet constraints.

Tables 6 and 7 use firm-year leverage and interest-rate outcomes, firm and year fixed effects, city and firm controls, and pre-trend controls; standard errors are clustered by city. Table 6's pooled triple-interaction estimates use 1,113,419 leverage and 1,084,545 interest-rate observations; Table 7 uses 1,638,916 and 1,588,046 observations respectively (Table 6, p. 10; Table 7, p. 14).

**Firm constraints heterogeneity.** Eq. (3) with four proxies for $$\text{FirmFC}_i$$ (Table 8, pp. 14-15). Firms with higher initial MRPK (2009) show a leverage interaction coefficient of 0.0084 (se 0.0035) and an interest-rate interaction coefficient of -0.0032 (se 0.0014), consistent with HPR differentially improving credit access for firms with higher initial MRPK.

Table 8 keeps firm and year fixed effects, city and firm controls, and pre-trend controls, with standard errors clustered by city. The row-specific samples range from 799,445 firm-years for the property-holding interest-rate specification to 1,393,754 for the asset-based leverage specification (Table 8, p. 15).

**Capital misallocation (R6).** Eq. (4) is applied at the 2-digit industry by city by year level. All three MRPK dispersion measures (variance, 90/10 ratio, 75/25 ratio) show significant relative reductions in treated cities after HPR, with no year-0 estimates because 2010 ASIF data are missing (Figure 5, p. 13). Corresponding MRPL estimates are smaller and less significant. Within-city capital misallocation contributes approximately 60% of overall MRPK dispersion in China.

**Aggregate TFP (R7).** Eq. (5) applied using parameter values from Table 9 (p. 15): $$\Delta\Delta\hat{\sigma}^2 = -0.0998$$, $$\Delta\Delta\hat{\mu} = -0.0453$$, $$\Delta\Delta\hat{\sigma}_{\text{MRPK},py} = 0.0326$$. The formula yields a 2.04% TFP improvement. A reduced-form approach directly estimating TFP at the 2-digit industry by city by year level finds treated cities improved TFP by approximately 6% relative to control cities; scaling by the 51% national capital share of treated cities gives 3.1%.

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

Source: peer-reviewed, *Journal of Banking and Finance* 182 (2026), article 107584. Copyright 2025 Elsevier B.V. All rights reserved. This distillation was updated on 2026-10-04 and is **not human-verified or independently reproduced**. The source is paywalled; reproduction beyond brief extraction requires the publisher's permission.

> Liu, Yu, Peng Zhao, and Xiaoxue Zhao. "Housing booms and local capital misallocation." *Journal of Banking and Finance* 182 (2026) 107584. DOI: [10.1016/j.jbankfin.2025.107584](https://doi.org/10.1016/j.jbankfin.2025.107584).
