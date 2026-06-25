---
title: "Bank Market Power and Monetary Policy Transmission: Enkhbold (2026)"
description: >-
  Distilled: Using US bank- and loan-level data from 2000 to 2019, the paper shows that
  a 100 bps monetary policy shock transmits 34 bps to mortgage rates in competitive banking
  markets but near-zero in concentrated markets; wholesale funding reliance amplifies the gap
  in competitive markets and dampens it in concentrated ones. Journal of Banking and Finance
  187 (2026), paywalled. Six core results with source locators, datasets used, and the
  estimating regression specification.
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
  resultsCount: 6
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
  outcomeClass: [household-finance]
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: instrument
  contributionType: [new-fact, measurement]
  mechanisms: [market-power, liquidity]
  scope:
    region: US
    assetClass: US residential mortgages (30-year fixed, single-family)
    period: 2000-01..2019-12
    frequency: quarterly
    dataType: [market, accounting, administrative]
    granularity: [firm]
    n: "~40,000 bank-MSA-quarter obs; 27 largest US banks (>$1B assets), 2000Q1-2019Q4"
  findings:
    - { ref: R1, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "18.47*** bps direct effect; 34.1 bps total for high-WFR competitive banks (Table 4, competitive subsample)", direction: positive, vsBenchmark: "~35 bps above near-zero concentrated-market pass-through" }
    - { ref: R2, outcome: "mortgage rate pass-through to borrowers", metric: basis-points, value: "9.10 bps baseline (insig., t=0.83); WFR interaction = -0.728** bps/log-WFR; near-zero total (Table 4, concentrated subsample)", direction: none }
    - { ref: R3, outcome: "mortgage rate pass-through to borrowers at ZLB (competitive)", metric: basis-points, value: "38.80*** bps at ZLB vs 23.14*** non-ZLB; WFR interaction = 10.05*** bps (Table 5)", direction: positive, vsBenchmark: "68% above non-ZLB competitive baseline of 23.1 bps" }
    - { ref: R4, outcome: "mortgage rate pass-through to borrowers at ZLB (concentrated)", metric: basis-points, value: "-21.18*** bps at ZLB vs -1.81* non-ZLB (Table 5)", direction: negative, vsBenchmark: "vs +38.8 bps in competitive ZLB markets; sign reversal" }
    - { ref: R5, outcome: "mortgage rate pass-through to borrowers by shock direction", metric: basis-points, value: "contractionary: competitive 29.66*** bps, concentrated 8.73***; expansionary: competitive 6.86*** bps, concentrated -3.17 (insig.) (Table 7)", direction: mixed, vsBenchmark: "contractionary 4.3x expansionary pass-through in competitive markets" }
    - { ref: R6, outcome: "mortgage rate pass-through to borrowers (Lerner index robustness)", metric: basis-points, value: "Lerner x monetary shock = -9.40*** bps (Table 9, col 4); branch share x log(WFR) x shock (triple interaction) = +60.79*** bps (col 3)", direction: negative, vsBenchmark: "HHI-based dampening confirmed across all four alternative market power measures (Tables 8-9)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Drechsler et al. (2017)", relation: builds-on, note: "deposit channel mechanism: market-power banks hold deposit spreads wide, limiting outflows and pass-through when the policy rate rises" }
    - { cite: "Choi and Choi (2021)", relation: builds-on, note: "wholesale funding as a substitute for deposit funding in response to monetary tightening; banks in concentrated markets borrow more wholesale" }
    - { cite: "Wang et al. (2022)", relation: extends, note: "extends structural evidence on bank market power and monetary transmission to document the interacting role of wholesale funding reliance" }
    - { cite: "Bauer and Swanson (2023)", relation: cites, note: "high-frequency monetary policy surprises used as the exogenous policy variable, orthogonalized to Fed information effects" }
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
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2026.107690", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: Elsevier TDM 1.0 and TDMRep licences only; no CC licence found. Crown Copyright 2026 per PDF p. 1 footer." }
---

**What this is.** The paper's core results, the empirical specification, and the identification strategy: enough to know what it found and how, without reading the full paper. To replicate or extend, read the original at the [DOI link](https://doi.org/10.1016/j.jbankfin.2026.107690).

## TL;DR

The paper studies how the interaction between local deposit market concentration and bank wholesale funding reliance (WFR) shapes the transmission of monetary policy surprises to mortgage rates. Using US bank- and loan-level data from 2000 to 2019, and building on the deposit channel of Drechsler et al. (2017) and the wholesale funding analysis of Choi and Choi (2021), the paper shows that in competitive markets (low HHI) a 100 bps policy shock raises mortgage rates by 34 bps for banks with high WFR; wholesale funding amplifies pass-through because it ties funding costs directly to market rates. In concentrated markets (high HHI), the same shock produces near-zero pass-through: banks use market power to hold deposit rates steady and absorb the cost change in margins rather than passing it to borrowers. The 35 bps differential translates to approximately $67 per month on a $300,000 mortgage ($24,000 over the loan life). Wang et al. (2022) show that market power dampens transmission in a structural model; this paper adds WFR as an interacting channel and traces heterogeneity across the interest rate cycle. These contrasts sharpen at the zero lower bound and during contractionary episodes, and hold across alternative market power measures including the Lerner index and branch market share.

## Core results

Magnitudes and significance as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Competitive markets: 100 bps shock transmits 34.1 bps to mortgage rates for high-WFR banks | Table 4, p. 9 | Direct effect 18.47\*\*\* bps; WFR interaction adds 15.68\* bps; total ~34.1 bps for high-WFR competitive banks |
| R2 | Concentrated markets: near-zero pass-through; WFR interaction is negative | Table 4, p. 9 | Baseline 9.10 bps (insig., t=0.83); WFR interaction = -0.728\*\* bps/log-unit; net pass-through near zero |
| R3 | Zero lower bound amplifies competitive pass-through to 38.8 bps | Table 5, p. 10 | Competitive baseline at ZLB = 38.80\*\*\* bps (vs 23.14\*\*\* non-ZLB); WFR interaction = 10.05\*\*\* bps |
| R4 | ZLB reverses concentrated-market pass-through to -21.2 bps | Table 5, p. 10 | Concentrated ZLB = -21.18\*\*\* bps (vs -1.81\* non-ZLB); sign reversal vs competitive ZLB (+38.8 bps) |
| R5 | Asymmetric transmission: contractionary shocks pass through 4x more than expansionary | Table 7, p. 13 | Contractionary: competitive 29.66\*\*\* bps, concentrated 8.73\*\*\*; expansionary: competitive 6.86\*\*\* bps, concentrated -3.17 (insig.) |
| R6 | Robustness: Lerner index and branch share confirm market power dampening | Table 9, pp. 15-16 | Lerner x shock = -9.40\*\*\* bps; branch share x log(WFR) x shock (triple interaction) = +60.79\*\*\* bps; lagged HHI as IV yields -9.14\*\* bps interaction |

**Overall (paper's conclusion).** Market concentration dampens monetary policy transmission by allowing banks to absorb policy shocks in margins. Wholesale funding reliance amplifies this gap: in competitive markets it ties funding costs to market rates and forces pass-through; in concentrated markets it provides a substitute for unraised deposit rates, further cushioning borrowers from the policy change. The Federal Reserve's ability to affect household mortgage costs depends on local banking market structure throughout the interest rate cycle.

## Theory / model

The paper has no formal theoretical model. It builds on two prior mechanisms and documents a new interaction between them.

**Deposit channel (Drechsler et al. (2017)).** When the policy rate rises, banks with market power over local depositors need not match the rate increase: they hold the deposit spread wide and allow some depositors to leave without triggering mass outflows. This contracts aggregate deposits but does not immediately force pass-through to lending rates.

**Wholesale funding substitution (Choi and Choi (2021)).** As policy tightens, banks can replace contracting retail deposits with wholesale funding (repos, federal funds purchased, brokered deposits, time deposits from institutional investors). In concentrated markets, this substitution is cost-effective because raising deposit rates on a large base is expensive relative to borrowing wholesale at the margin. In competitive markets, thin markups force deposit repricing anyway, so wholesale funding adds cost pressure rather than providing insulation.

**Central hypothesis.** The two mechanisms interact: wholesale funding amplifies pass-through in competitive markets (funding costs track the policy rate closely) but dampens it in concentrated markets (market power absorbs wholesale cost increases into margins). The paper documents this interaction empirically across multiple policy-rate regimes.

**Identification.** The paper exploits cross-bank variation in HHI (measured from the FDIC Summary of Deposits) and WFR (from Call Reports), holding constant time trends via the monetary shock variable and location trends via MSA fixed effects. Bauer and Swanson (2023) high-frequency monetary surprises serve as the exogenous policy variable (see Method). Within each MSA, the identifying variation is cross-bank heterogeneity in market concentration and funding mix.

## Method

The estimating equation (equation (1), p. 8) is a panel regression of loan-level mortgage rate changes on the monetary shock, the log wholesale funding ratio, and their interaction, with bank and MSA fixed effects:

$$
\Delta r_{mbt} = \alpha_b + \alpha_m + \beta_1 \Delta_t + \beta_2 \log(\text{WFR}_{bt-1}) + \beta_3 \log(\text{WFR}_{bt-1}) \times \Delta_t \tag{1}
$$

$$
+ \;\Gamma \text{HH Controls}_{mbt-1} + \Xi \text{HH Controls}_{mbt-1} \times \Delta_t
$$

$$
+ \;\Pi \text{Bank Controls}_{mbt-1} + \Lambda \text{Bank Controls}_{mbt-1} \times \Delta_t
$$

$$
+ \;\Psi \text{Macro Controls}_{mt-1} + \Omega \text{Macro Controls}_{mt-1} \times \Delta_t + \epsilon_{mbt}
$$

where $$\Delta r_{mbt}$$ is the change in the loan-level mortgage rate at MSA $$m$$, bank $$b$$, quarter $$t$$; $$\alpha_b$$ is a bank fixed effect; $$\alpha_m$$ is an MSA fixed effect; $$\Delta_t$$ is the Bauer and Swanson (2023) monetary shock normalized to a 100 bps impact; and $$\text{WFR}_{bt-1} = \text{wholesale funding}_b / \text{retail deposits}_b$$ at quarter $$t-1$$. HH controls (interacted with the shock) include the borrower's credit score, LTV, and debt-to-income ratio. Bank controls include number of branches, liquidity asset ratio, duration mismatch, liability interest rate, real estate loans ratio, commercial and industrial loans ratio, and MBS-to-asset ratio. Macro controls include the unemployment rate, house price index, and personal income per capita. Standard errors are clustered at the bank and quarter levels.

**Policy shocks.** The shock $$\Delta_t$$ aggregates changes in financial variables in a 30-minute window around FOMC announcements (10 minutes before to 20 minutes after), orthogonalized to Fed information effects following Bauer and Swanson (2023). An alternative sign-based decomposition from Jarocinski and Karadi (2020) is used in robustness checks (Table 8).

**Market concentration.** Local deposit market concentration in MSA $$m$$ at quarter $$t$$ is the Herfindahl-Hirschman Index constructed from the FDIC Summary of Deposits (p. 3):

$$
\text{HHI}_{mt} = \sum_{b \in m} \left( \frac{dep_{mbt}}{\sum_{b' \in m} dep_{mb't}} \right)^2
$$

where $$dep_{mbt}$$ is deposits of bank $$b$$ in MSA $$m$$ in year $$t$$. A lower HHI indicates a competitive market; a higher HHI indicates a concentrated market. The main results split the sample at the median HHI into competitive (HHI = 0) and concentrated (HHI = 1) subsamples.

The method builds on `panel-regression` with two-way fixed effects and `instrumental-variables` for the monetary shock. Robustness checks instrument for potential endogeneity of market structure using lagged HHI and WFR as instruments (Table 9, col 2; interaction coefficient -9.14** bps).

## Empirical specifications

All headline results come from equation (1), estimated separately on competitive and concentrated subsamples. The focal coefficient is $$\beta_3$$, the interaction of log WFR and the monetary shock, capturing how wholesale funding reliance moderates policy pass-through.

**Main pass-through (R1, R2; Table 4).** The competitive subsample (HHI = 0, N = 24,539) yields a direct shock effect of 18.47\*\*\* bps (SE = 6.14) and a WFR interaction of 15.68\* bps (SE = 8.69). The concentrated subsample (HHI = 1, N = 30,527) yields a baseline of 9.10 bps (SE = 11.05, insignificant) and a WFR interaction of -0.728\*\* bps (SE = 0.318). For a $300,000 mortgage the 35 bps gap translates to approximately $67 per month.

**ZLB vs non-ZLB (R3, R4; Table 5).** The same regression is estimated separately for the ZLB period (2009-2015, cols 3-4) and non-ZLB periods (cols 1-2). The deposit floor constraint pins deposit rates at zero in competitive markets, removing the margin buffer and raising competitive pass-through to 38.80\*\*\* bps. In concentrated markets, forward guidance and quantitative easing compress long-term premia while market power prevents pass-through of cheap funding to borrowers, producing a large negative coefficient of -21.18\*\*\* bps.

**Low vs high policy rates (Table 6).** Estimated separately for low and high rate periods (split at the median federal funds rate). In competitive markets, the WFR interaction is largest at low rates (25.77\*\*\* bps) and remains large at high rates (18.37\*\*\* bps). In concentrated markets the baseline is positive at low rates (32.07\*\*\* bps) but deeply negative at high rates (-16.99\*\*\* bps), reflecting that banks at low rates lower mortgage rates to expand lending volume while using their pricing power to avoid fully passing the cost saving to borrowers at high rates.

**Contractionary vs expansionary shocks (R5; Table 7).** The sample is split into expansionary and contractionary periods. Within each, the model estimates separate coefficients for positive shocks ($$\Delta_t > 0$$, rate hikes) and negative shocks ($$\Delta_t < 0$$, rate cuts). Contractionary shocks produce 29.66\*\*\* bps pass-through in competitive markets (concentrated: 8.73\*\*\*) with WFR adding 16.03\*\*\* bps in competitive markets. Expansionary shocks produce only 6.86\*\*\* bps in competitive markets and an insignificant -3.17 bps in concentrated markets, consistent with banks in concentrated markets rebuilding margins during easing.

**Alternative market power measures (R6; Tables 8-9).** The specification is replicated with (i) liability-side wholesale funding share, (ii) branch market share, and (iii) the Lerner index as market power proxies. The Lerner index specification (Table 9, col 4) yields a direct interaction of -9.40\*\*\* bps, providing the most direct evidence that price-setting ability, not just market concentration, dampens transmission. Branch share produces a positive triple interaction of +60.79\*\*\* bps (col 3; this is the Δt × Branch share × log(WFR) coefficient; the simpler Δt × Branch share = 73.35\*\* bps), showing that physical presence amplifies rather than dampens transmission, distinct from market power measured by HHI or Lerner.

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
