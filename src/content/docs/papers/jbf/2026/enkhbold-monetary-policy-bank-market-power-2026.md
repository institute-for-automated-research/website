---
title: "Bank Market Power and Monetary Policy Transmission: Enkhbold (2026)"
description: >-
  Distilled: Using US bank- and loan-level data from 2000 to 2019, the paper shows that
  a 100 bps monetary policy shock transmits 34 bps to mortgage rates in competitive banking
  markets but near-zero in concentrated markets; wholesale funding reliance amplifies the gap
  in competitive markets and dampens it in concentrated ones. Journal of Banking and Finance
  187 (2026), paywalled. Sixteen core results cover the funding correlations,
  liability responses, rate-regime heterogeneity, identification checks, and
  alternative market-power measures, with source locators and estimating specifications.
sidebar:
  label: Enkhbold 2026
  order: 1
tags: [paper-summary, monetary-policy, macro, banking, market-power, mortgage-markets,
       panel-regression, peer-reviewed, unreplicated,
       data:fannie-mae, data:freddie-mac, data:fdic-sod, data:call-reports, data:hmda]
paper:
  authors: Amina Enkhbold
  authorList:
    - { family: Enkhbold, given: Amina, affiliation: Bank of Canada }
  year: 2026
  venue: "Journal of Banking and Finance 187 (2026) 107690"
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2026.107690
  tier: field
  license: "Crown Copyright 2026 Published by Elsevier B.V.; all rights reserved including text and data mining and AI training; Crossref: tdm licences only, no CC licence (checked 2026-06-25)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 1
  jel:
    codes: [E52, G21, L13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Banking stability, regulation, efficiency", "Global Financial Crisis and Policies", "European Monetary and Fiscal Policies"]
  dataAccess: licensed-commercial
  outcome:
    - mortgage rate pass-through to borrowers
    - loan-level mortgage rate change at the bank-MSA-quarter level
    - bank wholesale funding, retail-deposit, and liability shares
  outcomeClass: [household-finance, bank-funding]
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [market-power, liquidity, wholesale-funding-substitution]
  scope:
    region: US
    assetClass: US residential mortgages (30-year fixed, single-family)
    period: 2000-01..2019-12
    frequency: quarterly
    dataType: [market, accounting, administrative]
    granularity: [firm, transaction]
    n: "27 largest US banks (>$1B assets), 2000Q1-2019Q4; funding-composition regressions N≈39,800-40,400, mortgage-rate specifications N≈10,100-69,300"
  findings:
    - { ref: R1, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "18.47*** bps direct effect; 34.1 bps total for high-WFR competitive banks (Table 4, competitive subsample)", direction: positive, vsBenchmark: "~35 bps above near-zero concentrated-market pass-through" }
    - { ref: R2, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "9.10 bps baseline (insig., t=0.83); WFR interaction = -0.728** bps/log-WFR; near-zero total (Table 4, concentrated subsample)", direction: negative }
    - { ref: R3, outcome: "mortgage rate pass-through to borrowers at ZLB (competitive)", metric: basis-points, value: "38.80*** bps at ZLB vs 23.14*** non-ZLB; WFR interaction = 10.05*** bps (Table 5)", direction: positive, vsBenchmark: "68% above non-ZLB competitive baseline of 23.1 bps" }
    - { ref: R4, outcome: "mortgage rate pass-through to borrowers at ZLB (concentrated)", metric: basis-points, value: "-21.18*** bps at ZLB vs -1.81* non-ZLB (Table 5)", direction: negative, vsBenchmark: "vs +38.8 bps in competitive ZLB markets; sign reversal" }
    - { ref: R5, outcome: "mortgage rate pass-through to borrowers by shock direction", metric: basis-points, value: "contractionary: competitive 29.66*** bps, concentrated 8.73***; expansionary: competitive 6.86*** bps, concentrated -3.17 (insig.) (Table 7)", direction: mixed, vsBenchmark: "contractionary 4.3x expansionary pass-through in competitive markets" }
    - { ref: R6, outcome: "mortgage rate pass-through to borrowers (market-power robustness)", metric: basis-points, value: "Lerner x shock = -9.40*** bps; branch share x shock = +73.35** bps and branch share x log(WFR) x shock = +60.79*** bps (Table 9, cols 3-4)", direction: mixed, vsBenchmark: "Table 9 results differ by proxy: the Lerner interaction is negative, while branch-share interactions are positive" }
    - { ref: R7, outcome: "bank wholesale funding, retail-deposit, and liability shares", metric: correlation, value: "Corr(log WFR, federal funds rate): 0.346* competitive, 0.221* concentrated; Corr(wholesale funding liabilities, federal funds rate): -0.352* competitive, -0.116* concentrated (Table 2, p. 5)", direction: mixed, vsBenchmark: "funding reliance correlation is 57% higher in competitive markets; wholesale funding level correlation is more negative there" }
    - { ref: R8, outcome: "bank wholesale funding, retail-deposit, and liability shares", metric: coefficient, value: "FFR x HHI: -0.00346*** for retail deposits/liabilities, +0.00575*** for wholesale funding/liabilities, and +0.0000143*** for WFR/liabilities (Table 3, p. 6)", direction: mixed }
    - { ref: R9, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "Low-rate: competitive baseline 17.43*** and WFR interaction 25.77***; concentrated 32.07*** and 4.41***. High-rate: competitive 7.26*** and 18.37***; concentrated -16.99*** and 1.83*** (Table 6, p. 11)", direction: mixed, vsBenchmark: "at high rates, concentrated-market baseline pass-through reverses sign while competitive baseline remains positive" }
    - { ref: R10, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "WFR interaction: contractionary +16.03*** competitive and +2.12*** concentrated; expansionary -2.46 competitive (insig.) and -3.79*** concentrated (Table 7, p. 13)", direction: mixed, vsBenchmark: "the concentrated-market interaction changes sign between rate hikes and cuts" }
    - { ref: R11, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "Jarociński-Karadi shock: direct effect 30.96*** competitive and 8.75*** concentrated; WFR interaction -58.92*** competitive and +2.08** concentrated (Table 8, p. 14)", direction: mixed, vsBenchmark: "relative to Bauer-Swanson baseline, direct effects reverse sign; concentrated-market interaction remains positive" }
    - { ref: R12, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "Liability-based WFR interaction: +143.9* competitive and +5.14 concentrated (insig.) (Table 8, p. 14)", direction: positive, vsBenchmark: "the positive concentrated-market estimate is not statistically significant" }
    - { ref: R13, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "HHI SD x policy shock x log(WFR) = -16.79*** (SE 3.92; Table 9, col. 1, pp. 14-15)", direction: negative, vsBenchmark: "greater concentration dampens the positive WFR interaction" }
    - { ref: R14, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "Using second lags of HHI and WFR as instruments: HHI SD x policy shock = -9.14** (SE 3.99; Table 9, col. 2, pp. 14-15)", direction: negative }
    - { ref: R15, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "Policy shock x branch share = +73.35** (SE 29.83) and policy shock x branch share x log(WFR) = +60.79*** (SE 6.05; Table 9, col. 3, pp. 14-15)", direction: positive }
    - { ref: R16, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "Policy shock x Lerner = -9.40*** (SE 2.92; Table 9, col. 4, pp. 14-15); triple interaction = +1.45 (SE 1.71, insignificant)", direction: negative }
  resultType: mixed
  relatesTo:
    - { cite: "Drechsler et al. (2017)", doi: '10.1093/qje/qjx019', relation: builds-on, note: "deposit channel mechanism: market-power banks hold deposit spreads wide, limiting outflows and pass-through when the policy rate rises" }
    - { cite: "Choi and Choi (2021)", relation: builds-on, note: "wholesale funding as a substitute for deposit funding in response to monetary tightening; banks in concentrated markets borrow more wholesale" }
    - { cite: "Wang et al. (2022)", doi: '10.1111/jofi.13159', relation: extends, note: "extends structural evidence on bank market power and monetary transmission to document the interacting role of wholesale funding reliance" }
    - { cite: "Bauer and Swanson (2023)", doi: '10.1086/723574', relation: cites, note: "high-frequency monetary policy surprises used as the exogenous policy variable, orthogonalized to Fed information effects" }
    - { cite: "Enkhbold (2024)", relation: extends, note: "complements the companion paper on shadow banks vs traditional banks in MP transmission; this paper focuses on traditional banks and the concentration x WFR interaction" }
    - { cite: "Jarocinski and Karadi (2020)", relation: cites, note: "sign-based monetary surprise decomposition used in robustness checks (Table 8)" }
  openQuestions:
    - "Whether the market concentration and wholesale funding interaction extends to other credit markets beyond residential mortgages, such as business loans or consumer credit (p. 16, conclusion)."
    - "The analysis covers traditional banks only; shadow banks rely on investor funding and lack the deposit-mortgage link that is central to the paper's mechanism (introduction, p. 2; Enkhbold 2024)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-17 including appendix and references); six results extracted from Tables 4-9. Not human-verified. Not reproduced. Data available on request per p. 17." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two errors fixed: (1) Method section cited Table 8 col 2 for the -9.14 lagged-IV result, corrected to Table 9 col 2 (HHI sd x Δt = -9.14** (3.99)); (2) R6 labelled 60.79*** as 'branch share x shock', corrected to the triple interaction Δt x Branch share x log(WFR); all other magnitudes (Tables 4, 5, 7, 9) and equation (1) terms verified correct." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added results R7-R16, complete estimating specifications, mechanism coverage, and equations. Not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 16 Core results, specifications, classification axes, prose, frontmatter, and citation DOIs against the source PDF; corrected robustness claims and findings directions, and removed unsupported measurement classification." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107690", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: Elsevier TDM 1.0 and TDMRep licences only; no CC licence found. Crown Copyright 2026 per PDF p. 1 footer." }
---

**What this is.** The paper's core results, the empirical specification, and the identification strategy: enough to know what it found and how, without reading the full paper. To replicate or extend, read the original at the [DOI link](https://doi.org/10.1016/j.jbankfin.2026.107690).

## TL;DR

The paper studies how the interaction between local deposit market concentration and bank wholesale funding reliance (WFR) shapes the transmission of monetary policy surprises to mortgage rates. Using US bank- and loan-level data from 2000 to 2019, and building on the deposit channel of Drechsler et al. (2017) and the wholesale funding analysis of Choi and Choi (2021), the paper shows that in competitive markets (low HHI) a 100 bps policy shock raises mortgage rates by 34 bps for banks with high WFR; wholesale funding amplifies pass-through because it ties funding costs directly to market rates. In concentrated markets (high HHI), the same shock produces near-zero pass-through: banks use market power to hold deposit rates steady and absorb the cost change in margins rather than passing it to borrowers. The 35 bps differential translates to approximately $67 per month on a $300,000 mortgage ($24,000 over the loan life). Wang et al. (2022) show that market power dampens transmission in a structural model; this paper adds WFR as an interacting channel and traces heterogeneity across the interest rate cycle. These contrasts sharpen at the zero lower bound and during contractionary episodes. Robustness results vary by measure: HHI and Lerner estimates indicate dampening, while branch-share interactions are positive and alternative shock and funding measures change the wholesale-funding interaction.

## Core results

Magnitudes and significance as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Competitive markets: 100 bps shock transmits 34.1 bps to mortgage rates for high-WFR banks | Table 4, p. 9 | Direct effect 18.47\*\*\* bps; WFR interaction adds 15.68\* bps; total ~34.1 bps for high-WFR competitive banks |
| R2 | Concentrated markets: near-zero pass-through; WFR interaction is negative | Table 4, p. 9 | Baseline 9.10 bps (insig., t=0.83); WFR interaction = -0.728\*\* bps/log-unit; net pass-through near zero |
| R3 | Zero lower bound amplifies competitive pass-through to 38.8 bps | Table 5, p. 10 | Competitive baseline at ZLB = 38.80\*\*\* bps (vs 23.14\*\*\* non-ZLB); WFR interaction = 10.05\*\*\* bps |
| R4 | ZLB reverses concentrated-market pass-through to -21.2 bps | Table 5, p. 10 | Concentrated ZLB = -21.18\*\*\* bps (vs -1.81\* non-ZLB); sign reversal vs competitive ZLB (+38.8 bps) |
| R5 | Asymmetric transmission: contractionary shocks pass through 4x more than expansionary | Table 7, p. 13 | Contractionary: competitive 29.66\*\*\* bps, concentrated 8.73\*\*\*; expansionary: competitive 6.86\*\*\* bps, concentrated -3.17 (insig.) |
| R6 | Market-power robustness results vary by proxy | Table 9, pp. 14-15 | Lerner x shock = -9.40\*\*\* bps; branch share x shock = +73.35\*\* bps and branch share x log(WFR) x shock = +60.79\*\*\* bps; lagged HHI as IV yields -9.14\*\* bps interaction |
| R7 | Wholesale funding reliance and funding levels covary differently with policy rates across market structures | Table 2, p. 5 | Corr(log WFR, federal funds rate): 0.346\* competitive, 0.221\* concentrated; corr(wholesale funding liabilities, federal funds rate): -0.352\* competitive, -0.116\* concentrated |
| R8 | Policy-rate and concentration interaction predicts shifts between retail deposits and wholesale funding | Table 3, p. 6 | FFR x HHI: -0.00346\*\*\* for retail deposits/liabilities, +0.00575\*\*\* for wholesale funding/liabilities, and +0.0000143\*\*\* for WFR/liabilities |
| R9 | Pass-through differs between low- and high-rate regimes | Table 6, p. 11 | Low rates: competitive 17.43\*\*\* baseline + 25.77\*\*\* WFR interaction; concentrated 32.07\*\*\* + 4.41\*\*\*. High rates: competitive 7.26\*\*\* + 18.37\*\*\*; concentrated -16.99\*\*\* + 1.83\*\*\* |
| R10 | Wholesale-funding interactions vary with the direction of policy shocks | Table 7, p. 13 | Contractionary: +16.03\*\*\* bps competitive and +2.12\*\*\* concentrated; expansionary: -2.46 bps competitive (insig.) and -3.79\*\*\* concentrated |
| R11 | Alternative shock identification preserves positive concentrated-market interaction but changes other coefficients | Table 8, p. 14 | Jarociński-Karadi shock: direct effect 30.96\*\*\* bps competitive and 8.75\*\*\* concentrated; WFR interaction -58.92\*\*\* competitive and +2.08\*\* concentrated |
| R12 | Liability-based wholesale funding measure gives different interaction magnitudes | Table 8, p. 14 | WFR interaction = +143.9\* bps competitive; +5.14 bps concentrated (insig.) |
| R13 | Triple interaction supports concentration dampening at higher wholesale funding reliance | Table 9, col. 1, pp. 14-15 | HHI SD x policy shock x log(WFR) = -16.79\*\*\* (SE = 3.92) |
| R14 | Instrumenting market structure and funding retains a negative concentration interaction | Table 9, col. 2, pp. 14-15 | Second lags of HHI and WFR as instruments: HHI SD x policy shock = -9.14\*\* (SE = 3.99) |
| R15 | Branch market share produces positive shock interactions | Table 9, col. 3, pp. 14-15 | Policy shock x branch share = +73.35\*\* (SE = 29.83); triple interaction with log(WFR) = +60.79\*\*\* (SE = 6.05) |
| R16 | Lerner-index market power is negatively associated with pass-through | Table 9, col. 4, pp. 14-15 | Policy shock x Lerner = -9.40\*\*\* (SE = 2.92); triple interaction = +1.45 (SE = 1.71, insig.) |

**Overall (paper's conclusion).** Market concentration dampens monetary policy transmission by allowing banks to absorb policy shocks in margins. Wholesale funding reliance amplifies this gap: in competitive markets it ties funding costs to market rates and forces pass-through; in concentrated markets it provides a substitute for unraised deposit rates, further cushioning borrowers from the policy change. The Federal Reserve's ability to affect household mortgage costs depends on local banking market structure throughout the interest rate cycle.

## Theory / model

The paper does not specify a formal theoretical model. It combines the deposit channel of Drechsler et al. (2017) with wholesale-funding substitution discussed by Choi and Choi (2021). When market power lets banks hold deposit rates below policy rates, depositors leave and banks replace some retail funding with wholesale funding. Because wholesale costs track policy rates more closely, this replacement affects mortgage-rate pass-through differently in competitive and concentrated markets (Introduction, pp. 1-2; §3, pp. 6-7).

The tested hypothesis is that wholesale funding reliance amplifies pass-through in competitive markets, where banks have limited room to absorb cost changes, while deposit-market power can weaken or reverse that pass-through in concentrated markets. The paper tests the claim using within-MSA differences across banks and time variation in high-frequency monetary-policy surprises. A separate second-lag IV specification addresses endogeneity of market structure and funding choice (Table 9, p. 15).

## Method

The paper estimates fixed-effects panel regressions. Equation (1) is the main loan-level mortgage-rate specification (p. 8):

$$
\begin{aligned}
\Delta r_{mbt} ={}& \alpha_b + \alpha_m + \beta_1 \Delta i_t + \beta_2 \log(\text{WFR}_{bt-1}) + \beta_3 \log(\text{WFR}_{bt-1}) \times \Delta i_t \\
&+ \Gamma \text{HH Controls}_{mbt-1} + \Xi \text{HH Controls}_{mbt-1} \times \Delta i_t \\
&+ \Pi \text{Bank Controls}_{bt-1} + \Lambda \text{Bank Controls}_{bt-1} \times \Delta i_t \\
&+ \Psi \text{Macro Controls}_{mt-1} + \Omega \text{Macro Controls}_{mt-1} \times \Delta i_t + \epsilon_{mbt} \tag{1}
\end{aligned}
$$

Here $$\Delta r_{mbt}$$ is the mortgage-rate change for loans in MSA $$m$$ originated by bank $$b$$ in quarter $$t$$; $$\alpha_b$$ and $$\alpha_m$$ are bank and MSA fixed effects; $$\Delta i_t$$ is a 100 bps monetary shock; and $$\text{WFR}_{bt-1}$$ is wholesale funding divided by retail deposits. Household controls include credit score, LTV, and debt-to-income ratio. Bank controls include branch count, liquid assets, duration mismatch, liability interest rate, real-estate and commercial-and-industrial loan shares, equity-to-asset ratio, and MBS-to-asset ratio. Macro controls include unemployment, income per capita, and house prices. The authors cluster standard errors by bank and quarter (equation (1) notes, pp. 8-9).

The policy shocks are changes in financial variables in a 30-minute FOMC announcement window, from 10 minutes before to 20 minutes after the announcement. Bauer and Swanson (2023) orthogonalize the measure to Fed information effects; Table 8 also uses the sign-based Jarociński and Karadi (2020) measure (pp. 3, 13-14). Deposit-market concentration is the local deposit HHI:

$$
\text{HHI}_{mt} = \sum_{b \in m} \left(\frac{\text{dep}_{mbt}}{\sum_{b' \in m} \text{dep}_{mb't}}\right)^2
$$

The baseline results split observations into competitive and concentrated markets using the HHI classification. Table 9 replaces or instruments the concentration and funding variables to assess robustness and endogeneity. The baseline design is a reduced-form panel specification using high-frequency monetary shocks; the table 9 lagged-variable instrument check is a distinct identification check, not the source of the baseline policy shock.

## Empirical specifications

**Funding-composition specification (Table 3, p. 6).** For changes in deposit/liability shares, wholesale-funding/liability shares, and WFR/liabilities, the paper estimates:

$$
\Delta y_{mbt} = \alpha_b + \alpha_m + \beta_1 \text{FFR}_t + \beta_2(\text{FFR}_t \times \text{HHI}_{m,t-1}) + \beta_3 \text{HHI}_{m,t-1} + \Gamma \text{HH Controls}_{mb,t-1} + \Xi \text{Bank Controls}_{b,t-1} + \epsilon_{mbt}
$$

The table notes report bank and MSA fixed effects and bank-clustered standard errors. The samples contain 39,785-40,381 bank-MSA-quarter observations depending on the outcome. Table 2's 2000Q1-2019Q4 correlations are descriptive, with 0.346* versus 0.221* correlations between log WFR and the federal funds rate in competitive versus concentrated markets (p. 5).

**Main mortgage pass-through and heterogeneity (Tables 4-7, pp. 9-13).** Equation (1) is estimated for competitive and concentrated market samples (Table 4), then by non-ZLB/ZLB periods (Table 5), low/high federal-funds-rate regimes (Table 6), and contractionary/expansionary shocks (Table 7). The shock-direction split estimates separate terms for positive and negative policy shocks. Tables 4-7 use bank and MSA fixed effects and standard errors clustered by bank and quarter. The reported sample sizes are 24,539 and 30,527 in Table 4; 17,281, 22,473, 10,067, and 12,182 across Table 5; 16,888, 20,100, 10,454, and 14,554 across Table 6; and 28,295 or 33,710 in Table 7. The source reports the actual coefficients in R1-R5 and R9-R10.

**Alternative policy-shock and funding measures (Table 8, p. 14).** The baseline regression is re-estimated for the competitive and concentrated subsamples using liability-based WFR and the Jarociński-Karadi shock. It retains bank and MSA fixed effects and bank-quarter clustered standard errors; sample sizes range from 27,351 to 34,664. The alternative shock yields direct coefficients of 30.96*** and 8.75*** bps and interactions of -58.92*** and 2.08** bps in competitive and concentrated markets, respectively (R11). The liability-based WFR interaction estimates are 143.9* and 5.14 bps, the latter insignificant (R12).

**Market-power and endogeneity specifications (Table 9, pp. 14-15).** Table 9 estimates an expanded interaction model with HHI and WFR, and substitutes branch market share or the Lerner index. Its general HHI specification is:

$$
\begin{aligned}
\Delta r_{mbt} ={}& \alpha_b + \alpha_m + \beta_1 \Delta i_t + \beta_2 \log(\text{WFR}_{bt-1}) + \beta_3 \log(\text{WFR}_{bt-1})\times\Delta i_t \\
&+ \beta_4 \text{HHI}_{m,t-1} + \beta_5 \text{HHI}_{m,t-1}\times\Delta i_t + \beta_6 \text{HHI}_{m,t-1}\times\log(\text{WFR}_{bt-1}) \\
&+ \beta_7 \text{HHI}_{m,t-1}\times\Delta i_t\times\log(\text{WFR}_{bt-1}) + \Gamma \text{HH Controls}_{mb,t-1} \\
&+ \Xi \text{HH Controls}_{mb,t-1}\times\Delta i_t + \Pi \text{Bank Controls}_{b,t-1} + \Lambda \text{Bank Controls}_{b,t-1}\times\Delta i_t \\
&+ \Psi \text{Macro Controls}_{m,t-1} + \Omega \text{Macro Controls}_{m,t-1}\times\Delta i_t + \epsilon_{mbt}
\end{aligned}
$$

The HHI SD x shock x log(WFR) coefficient is -16.79*** (SE 3.92) in column 1 (R13). Column 2 uses second lags of HHI and WFR as instruments and reports HHI SD x shock = -9.14** (SE 3.99), as also recorded in R14. Columns 3-4 replace HHI with branch market share and the Lerner index. These specifications use bank and MSA fixed effects and bank-quarter clustered standard errors; N is 61,143, 25,324, 69,292, and 62,015 by column. The branch-share and Lerner coefficients are summarized in R6 and R15-R16. Their signs differ by proxy: branch-share interactions are positive, while the Lerner shock interaction is negative. The table's notes list household, bank, and macro controls as in equation (1).

For column 3, the market-power interactions use branch market share in place of HHI:

$$
\begin{aligned}
\Delta r_{mbt} ={}& \alpha_b + \alpha_m + \beta_1 \Delta i_t + \beta_2 \log(\text{WFR}_{bt-1}) + \beta_3 \log(\text{WFR}_{bt-1})\times\Delta i_t \\
&+ \beta_4 \text{BranchShare}_{bt-1} + \beta_5 \text{BranchShare}_{bt-1}\times\Delta i_t + \beta_6 \text{BranchShare}_{bt-1}\times\log(\text{WFR}_{bt-1}) \\
&+ \beta_7 \text{BranchShare}_{bt-1}\times\Delta i_t\times\log(\text{WFR}_{bt-1}) + \Gamma \text{HH Controls}_{mbt-1} + \Xi \text{HH Controls}_{mbt-1}\times\Delta i_t \\
&+ \Pi \text{Bank Controls}_{bt-1} + \Lambda \text{Bank Controls}_{bt-1}\times\Delta i_t + \Psi \text{Macro Controls}_{mt-1} + \Omega \text{Macro Controls}_{mt-1}\times\Delta i_t + \epsilon_{mbt}
\end{aligned}
$$

Column 4 substitutes the Lerner index, retaining the same main effects, pairwise terms, triple interaction, and controls:

$$
\begin{aligned}
\Delta r_{mbt} ={}& \alpha_b + \alpha_m + \beta_1 \Delta i_t + \beta_2 \log(\text{WFR}_{bt-1}) + \beta_3 \log(\text{WFR}_{bt-1})\times\Delta i_t \\
&+ \beta_4 \text{Lerner}_{bt-1} + \beta_5 \text{Lerner}_{bt-1}\times\Delta i_t + \beta_6 \text{Lerner}_{bt-1}\times\log(\text{WFR}_{bt-1}) \\
&+ \beta_7 \text{Lerner}_{bt-1}\times\Delta i_t\times\log(\text{WFR}_{bt-1}) + \Gamma \text{HH Controls}_{mbt-1} + \Xi \text{HH Controls}_{mbt-1}\times\Delta i_t \\
&+ \Pi \text{Bank Controls}_{bt-1} + \Lambda \text{Bank Controls}_{bt-1}\times\Delta i_t + \Psi \text{Macro Controls}_{mt-1} + \Omega \text{Macro Controls}_{mt-1}\times\Delta i_t + \epsilon_{mbt}
\end{aligned}
$$

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Fannie Mae Single-Family Loan Performance Data | Loan-level mortgage rates, borrower characteristics (FICO, LTV, loan purpose, MSA) | No page yet |
| Freddie Mac Single-Family Loan-Level Dataset | Loan-level mortgage rates, originator identity | No page yet |
| FDIC Summary of Deposits (SOD) | Branch-level deposits; used to construct HHI for each bank-MSA-quarter | No page yet |
| Federal Reserve Call Reports | Bank-level wholesale funding, assets, liabilities, branch count (quarterly) | No page yet |
| HMDA (Home Mortgage Disclosure Act) | Loan-level origination data; used to construct mortgage market HHI for robustness | No page yet |

Sample: 2000Q1 to 2019Q4. Working sample: 27 largest US banks with assets over $1 billion, approximately 40,000 bank-MSA-quarter observations. Mortgages restricted to 30-year fixed-rate single-family loans acquired by Fannie Mae and Freddie Mac (30-year, fully amortizing, full documentation, conventional).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jbankfin.2026.107690) if you are: studying heterogeneous monetary policy transmission across bank types (Tables 4-7 carry the full coefficient estimates); designing monetary policy that accounts for local banking market structure (the ZLB and asymmetric results in Tables 5-7 are particularly relevant to forward guidance); extending the baseline specification with additional controls or alternative periods; comparing with shadow bank transmission (see Enkhbold (2024) for the companion paper on traditional vs shadow banks); or replicating the deposit-market concentration and wholesale funding interaction documented by the paper.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 187 (2026) 107690. Crown Copyright 2026, published by Elsevier B.V. All rights reserved, including text and data mining. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. No CC licence is in effect; redistribution requires publisher permission. Reproduced here as extract-only commentary.

> Enkhbold, Amina. "Monetary policy transmission, bank market power, and wholesale funding reliance." *Journal of Banking and Finance* 187 (2026): 107690. DOI: 10.1016/j.jbankfin.2026.107690.
