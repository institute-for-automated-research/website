---
title: "Profits, Scale Economies, and Trade Gains: Lashkaripour & Lugovskyy (2023)"
description: >-
  Distilled: Second-best trade taxes are a poor substitute for Pigouvian industrial
  subsidies at correcting scale-economy misallocation, raising average real GDP by
  only 1.19 percent versus 3.05 percent under the first-best in a calibrated
  multi-country Krugman model. Unilateral corrective industrial policies trigger
  immiserizing growth (average -2.78 percent), while coordinated policies via a
  deep agreement deliver +3.42 percent gains. American Economic Review 113(10),
  2023, paywalled. Five core results with source locators, datasets used, the
  model (generalized Krugman 1980 with nested CES preferences), and the estimation
  method (shift-share exchange rate IV on Colombian firm-level import data).
sidebar:
  label: Lashkaripour-Lugovskyy 2023
  order: 1
tags: [paper-summary, international-trade, trade-policy, industrial-policy,
       scale-economies, gains-from-trade, panel-regression, peer-reviewed,
       unreplicated, data:wiod, data:datamyne]
paper:
  authors: Ahmad Lashkaripour, Volodymyr Lugovskyy
  authorList:
    - { family: Lashkaripour, given: Ahmad, affiliation: Indiana University }
    - { family: Lugovskyy, given: Volodymyr, orcid: "0000-0003-4995-0237", affiliation: Indiana University }
  year: 2023
  venue: American Economic Review 113(10), October 2023, 2759-2808
  venueShort: AER 2023
  doi: 10.1257/aer.20210419
  jel:
    codes: [F12, F13, F14, L52, O19, O25]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Global trade and economics', 'Economic Growth and Productivity', 'Fiscal Policy and Economic Growth']
  dataAccess: licensed-commercial
  outcome:
    - real GDP gain from unilaterally optimal trade policy
    - real GDP change from unilateral vs coordinated corrective industrial policy
    - cross-industry covariance of trade and scale elasticities
  outcomeClass: [macro-aggregates, trade-flows]
  license: "paywalled; no CC licence found in Crossref metadata (checked 2026-06-25); copyright American Economic Association"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, aeaweb.org; abstract only without subscription; 2026-06-25)"
  redistribution: extract-only
  resultsCount: 5
  citedByCount: 89
  methods:
    role: both
    contributes: optimal-trade-dual
    family: structural
    buildsFrom: [instrumental-variables, panel-regression, optimal-trade-dual]
    identification: instrument
  contributionType: [new-theory, new-fact, measurement]
  mechanisms: [market-power, love-for-variety-externality]
  scope:
    region: global (43 countries in WIOD; Colombia for structural estimation)
    period: 2007..2014
    frequency: mixed
    dataType: [accounting, administrative]
    granularity: [firm, industry, aggregate]
    n: "225,000+ importing firms from 251 countries, 2007-2013 (Colombian customs); 43 countries, 56 industries, 2014 (WIOD)"
  findings:
    - { ref: R1, outcome: real GDP gain from second-best trade policy, metric: pp-effect, value: "avg 1.19% (free entry); 0.60% (restricted entry); vs 3.05% and 1.59% first-best", direction: positive, vsBenchmark: "~39% of first-best gains under free entry (1.19/3.05); paper text on p. 2800 describes this as 1/3 but the calculated ratio is 39%" }
    - { ref: R2, outcome: real GDP gain from third-best import tariffs alone, metric: pp-effect, value: "avg 0.63% (free entry); 0.47% (restricted entry)", direction: positive, vsBenchmark: "~21% of first-best gains (free entry); roughly half of second-best" }
    - { ref: R3, outcome: real GDP change from unilateral corrective industrial policy, metric: pp-effect, value: "avg -2.78% (free entry); -0.32% (restricted entry)", direction: negative }
    - { ref: R4, outcome: real GDP change from coordinated corrective industrial policy via deep agreement, metric: pp-effect, value: "avg +3.42% (free entry); +1.67% (restricted entry)", direction: positive, vsBenchmark: "exceeds any unilateral trade or industrial policy alternative; dominates even before retaliation" }
    - { ref: R5, outcome: cross-industry covariance of trade and scale elasticities, metric: covariance, value: "cov(sigma_k, mu_k) approx -0.65; median sigma_k - 1 = 3.9; median mu_k approx 0.20", direction: negative }
  resultType: new-finding
  relatesTo:
    - { cite: 'Krugman (1980)', relation: builds-on, note: 'baseline multi-industry monopolistic competition model with scale economies (love for variety); the paper generalizes to semiparametric preferences' }
    - { cite: 'Bagwell and Staiger (2001)', doi: '10.1162/00335530151144096', relation: extends, note: 'generalizes their result on domestic policies and national sovereignty to settings with cross-industry scale-economy and profit heterogeneity' }
    - { cite: 'Kucheryavyy, Lyn, and Rodriguez-Clare (2023a)', doi: '10.1257/mac.20190156', relation: builds-on, note: 'isomorphism between Krugman and EK models used to extend optimal policy theory to alternative trade frameworks' }
    - { cite: 'Bartelme et al. (2019)', doi: '10.3386/w26193', relation: extends, note: 'concurrent work characterizing first-best policy for small open economies; this paper extends to large multi-country settings with second-best and IO linkage cases' }
    - { cite: 'Lashkaripour (2021)', relation: extends, note: 'special case of Theorem 3 (Nash tariffs in monopolistic competition with restricted entry); the dual approach here generalizes to multi-country multi-industry settings' }
    - { cite: 'Ossa (2014)', doi: '10.1257/aer.104.12.4104', relation: extends, note: 'quantitative multi-industry trade war analysis; this paper adds scale-economy and profit heterogeneity and derives analytical sufficient statistics formulas' }
  openQuestions:
    - "Whether scale elasticity estimates can help disentangle the relative contributions of scale economies and Ricardian comparative advantage to intersectoral specialization, a question for which empirical evidence is limited (p. 2805)."
    - "Whether the income gap between advanced and emerging economies partly reflects specialization in high vs low returns-to-scale industries, which the new scale elasticity estimates could quantify (p. 2805)."
    - "The origins of the negative cross-industry correlation between trade and scale elasticities and what they imply for policy design across different country structures (p. 2805)."
  replicationCode:
    status: available
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-25, role: extracted, note: "Full text read (pp. 2759-2808); five results extracted with Table/equation locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all five Core results confirmed in Tables 4-5 and §V.C; all equations (1,4,7,9,16,T1a-c,IV) verified term-by-term; fixed: JEL codes expanded from [F12,F13,O25] to [F12,F13,F14,L52,O19,O25] per PDF p.2759; methods.identification corrected from structural to instrument (shift-share exchange rate IV); R1 magnitude description corrected from ~1/3 to ~39% (1.19/3.05=0.39; paper text on p.2800 loosely states 1/3)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210419", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block in Crossref metadata; content-version vor only; AEA copyright; paywalled" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model it builds on (multi-industry multicountry Krugman 1980 with nested CES preferences), and the estimation method (shift-share exchange rate IV on Colombian firm-level import data) with the defining equations: enough to know what it found and how, without reading all 50 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20210419).

## TL;DR

The paper asks how effective trade and industrial policies are at correcting misallocation from scale economies and profit-generating markups. It characterizes optimal policies analytically in a multi-industry multicountry Krugman (1980) model and estimates the key structural parameters (scale elasticity μ_k and trade elasticity σ_k) from Colombian firm-level import data using a shift-share exchange rate instrument. The answer is sharp: second-best trade taxes are a poor substitute for Pigouvian industrial subsidies, raising average real GDP by only 1.19 percent versus 3.05 percent for the first-best (free entry). Worse, unilateral corrective industrial policies cause immiserizing growth in most countries (average -2.78 percent, free entry), because the estimated cross-industry covariance cov(σ_k, μ_k) ≈ -0.65 creates an irreconcilable tension between terms-of-trade (ToT) improvement and misallocation correction. Coordinated policies via a deep agreement deliver average real GDP gains of +3.42 percent (free entry), dominating any unilateral alternative even before partner retaliation.

## Core results

Welfare gains are simple averages across 43 WIOD countries. Results under both restricted and free entry are reported; restricted entry approximates short-run and free entry approximates long-run policy consequences.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Second-best trade policy (import taxes + export subsidies, no domestic subsidies) raises average real GDP but far below first-best | Table 4, p. 2796; §VI.B, p. 2799-2800 | avg 1.19% (free entry), 0.60% (restricted entry); vs 3.05% and 1.59% first-best; trade taxes replicate ~39% of first-best gains (1.19/3.05) |
| R2 | Third-best (import tariffs alone) is weaker still | Table 4, p. 2796 | avg 0.63% (free entry), 0.47% (restricted entry); ~21% of first-best gains (free entry) |
| R3 | Unilateral corrective industrial policies cause immiserizing growth | Table 5, p. 2801; §VI.C, p. 2800-2803 | avg -2.78% (free entry), -0.32% (restricted entry); most countries experience welfare losses |
| R4 | Coordinated industrial policies via a deep agreement reverse the immiserizing outcome | Table 5, p. 2801; Figure 2, p. 2802 | avg +3.42% (free entry), +1.67% (restricted entry); exceed any unilateral trade or industrial policy alternative |
| R5 | Micro-estimated cross-industry covariance of trade and scale elasticities is strongly negative | Table 3, p. 2792; §V.C, p. 2791-2792 | cov(σ_k, μ_k) ≈ -0.65; median σ_k - 1 = 3.9; median μ_k ≈ 0.20 |

**Overall (paper's conclusion).** The negative covariance (R5) is the empirical basis for why trade policy is ineffective (R1-R2) and industrial policy backfires unilaterally (R3). Industries with the most national product differentiation (high σ, high ToT leverage) are not the ones with the highest love-for-variety externalities (high μ, high misallocation). Correcting misallocation in high-μ industries expands exports in high-σ industries, worsening ToT. A deep agreement that coordinates Pigouvian subsidies globally avoids this race to the bottom and unlocks large gains (R4).

## Theory / model

The baseline is a multi-industry, multicountry Krugman (1980) model with semiparametric preferences. Countries are indexed by i, j, n ∈ C and industries by g, k ∈ K. Each country has L_i workers who supply labor inelastically; labor is the sole factor of production.

**Cross-industry preferences.** The representative consumer in country i maximizes a nonparametric utility U_i over industry-level bundles subject to a budget constraint (eq. 1, p. 2764):

$$
V_i(Y_i, \tilde{\mathbf{P}}_i) = \max_{\mathbf{Q}_i} U_i(\mathbf{Q}_i), \quad \text{s.t.} \quad \sum_{k \in \mathbb{K}} \tilde{P}_{i,k} Q_{i,k} = Y_i. \tag{1}
$$

**Within-industry CES aggregator (Assumption A1, p. 2765).** Within each industry k, the utility aggregator is nested CES:

$$
Q_{i,k} = \left(\sum_{j \in \mathbb{C}} Q_{ji,k}^{\frac{\sigma_k - 1}{\sigma_k}}\right)^{\!\frac{\sigma_k}{\sigma_k - 1}}, \qquad Q_{ji,k} = \left[\int_{\omega \in \Omega_{j,k}} \varphi_{ji,k}(\omega)^{\frac{1}{\gamma_k}} q_{ji,k}(\omega)^{\frac{\gamma_k - 1}{\gamma_k}} d\omega\right]^{\!\frac{\gamma_k}{\gamma_k - 1}},
$$

with γ_k ≥ σ_k > 1 and φ_{ji,k}(ω) > 0 a constant variety-specific taste shifter. The outer tier σ_k governs national-level market power (the trade elasticity); the inner tier γ_k governs firm-level market power and love for variety.

**Producer prices and the scale elasticity.** Under free entry, the producer price index for composite good ij,k aggregating over firm-level varieties from origin i is (eq. 4, p. 2766):

$$
P_{ij,k} = \frac{\gamma_k}{\gamma_k - 1}\, \tau_{ij,k}\, \bar{a}_{i,k}\, w_i\, M_{i,k}^{-\frac{1}{\gamma_k - 1}},
$$

where τ_{ij,k} is an iceberg trade cost, ā_{i,k} is average unit labor cost, and M_{i,k} is the mass of varieties. The *scale elasticity* (equal to the markup under restricted entry) is (p. 2767):

$$
\mu_k \equiv \frac{1}{\gamma_k - 1} \quad \sim \text{scale elasticity} \sim \text{markup}.
$$

Under free entry, μ_k measures the elasticity by which variety-adjusted TFP grows with industry employment (love for variety). Under restricted entry, 1 + μ_k = γ_k/(γ_k - 1) is the constant firm-level markup.

**Tax instruments.** The government in country i can levy an import tax t_{ji,k} on goods from origin j, an export subsidy x_{ij,k} on goods sold to market j, and an industrial subsidy s_{i,k} on domestic output. These create a wedge between consumer price P̃ and producer price P (eq. 7, p. 2768):

$$
\tilde{P}_{ji,k} = \frac{1 + t_{ji,k}}{(1 + x_{ji,k})(1 + s_{j,k})}\, P_{ji,k}, \qquad \forall j,i \in \mathbb{C},\; k \in \mathbb{K}. \tag{7}
$$

**Globally efficient policy.** The globally efficient allocation uses Pigouvian domestic subsidies that restore marginal-cost pricing and sets all trade taxes to zero (eq. 9, p. 2772):

$$
t^*_{ji,k} = x^*_{ji,k} = 0, \quad \forall\, ji,k; \qquad 1 + s^*_{i,k} = 1 + \mu_k, \quad \forall\, i,k. \tag{9}
$$

Governments deviate from this benchmark only to exploit terms-of-trade (ToT) gains vis-a-vis the rest of the world, as shown by Bagwell and Staiger (2001) in a closely related setting. The isomorphism established by Kucheryavyy, Lyn, and Rodriguez-Clare (2023a) between the Krugman model and the Eaton and Kortum model allows the policy theorems to extend to alternative trade frameworks; the paper also derives analogous results for the Melitz-Pareto model.

## Method

The paper proposes a **dual approach** (`optimal-trade-dual`) for characterizing unilaterally optimal trade and industrial policies in multi-country, multi-industry GE models. It builds on `instrumental-variables` (shift-share exchange rate IV) and `panel-regression` (first-difference estimation on a firm-level panel).

**Unilaterally optimal policy via sufficient statistics (Theorem 1, p. 2775).** The government's problem of maximizing welfare W_i(t_i, x_i, s_i; w) is reformulated as choosing price vectors P̃_i directly (Step 1). First-order conditions are derived using the envelope theorem (Step 2). Tax neutrality (Lemma 1) and homogeneity properties of Marshallian demand are invoked to eliminate redundant wage and income terms (Step 3). The result is a unique sufficient statistics formula:

$$
1 + s^*_{i,k} = (1 + \mu_k)(1 + \bar{s}_i), \tag{T1a}
$$

$$
1 + t^*_{ji,k} = (1 + \omega_{ji,k})(1 + \bar{t}_i), \tag{T1b}
$$

$$
\mathbf{1} + \mathbf{x}^*_{ij} = -\mathbf{E}_{ij}^{-1}\, \mathbf{E}_{ij}^{(-ij)}\,(\mathbf{1} + \mathbf{t}^*_i), \tag{T1c}
$$

where ω_{ji,k} is the good ji,k's conditional inverse export supply elasticity (eq. 10, p. 2773), E_{ij} ~ E_{ij}^{(ji)} and E_{ij}^{(-ij)} are matrices of Marshallian demand elasticities as defined under (D1), and s̄_i, t̄_i ∈ R_+ are uniform tax shifters that account for the multiplicity of optimal equilibria (Lemma 1). Intuitively: (T1a) is a Pigouvian domestic subsidy restoring marginal-cost pricing; (T1b) exploits the home country's collective import market power via ω; and (T1c) exploits export market power. First-best tariffs and export subsidies are misallocation-blind but depend on the overall magnitude of scale economies through ω.

**Second-best and third-best policies (Theorems 2-3, pp. 2778-2780).** When domestic subsidies are unavailable (second-best), both import taxes and export subsidies gain a misallocation-correcting component proportional to (1 + μ_k)/(1 + μ̄_i), so they favor high-μ_k industries to mimic Pigouvian subsidies. When export subsidies are also unavailable (third-best), a uniform import tariff shifter 1 + t̄*_i compensates for the missing export instruments via Lerner symmetry. These formulas extend to economies with IO linkages (Theorem 4, p. 2785) where first-best import tariffs remain IO-blind but export subsidies require upward adjustment to account for reimportation.

The Bartelme et al. (2019) concurrent analysis of first-best policy for small open economies is a special case (setting ω ≈ 0, λ ≈ 1), as is the Lashkaripour (2021) Nash tariff formula for monopolistic competition with restricted entry (a special case of Theorem 3).

**Tension between objectives (Conjectures 1-2, pp. 2781-2782).** A central feature of the sufficient statistics is the inverse export supply elasticity ω_{ji,k}: under free entry, ω_{ji,k} → 0 when μ_k is uniform (no misallocation), confirming that scale economies are the only source of ToT-misallocation tension under free entry. When cov(σ_k, μ_k) < 0, industries best positioned for ToT manipulation (high σ) are not those most in need of correction (high μ), making it impossible for trade policy to simultaneously achieve both objectives.

## Empirical specifications

**Estimation sample.** Demand parameters (σ_k, γ_k) are estimated from the universe of firm-level import transactions at the Colombian Customs Office, 2007-2013, accessed via DATAMYNE. The data include detailed information on HS10 product category, country of origin, importing and exporting firm IDs, quantity (f.o.b.), and c.i.f. value. A unique feature is the identification of individual foreign firms, enabling firm-product combinations as the variety unit rather than the standard country-product.

**Estimating equation (eq. 16, p. 2788).** Log-linearizing the nested CES demand function (A1) and taking first differences to eliminate time-invariant quality φ̄_{j,k}(ω):

$$
\Delta \ln \bar{x}_{j,kt}(\omega) = (1 - \sigma_k)\,\Delta \ln \bar{p}_{j,kt}(\omega) + \left(1 - \frac{\sigma_k - 1}{\gamma_k - 1}\right)\Delta \ln \lambda_{j,kt}(\omega) + \Delta D_{kt} + \Delta \ln \varphi_{\omega,jkt}, \tag{16}
$$

where x̄_{j,kt}(ω) is annual sales of variety ω (firm-product-country), p̄_{j,kt}(ω) is the variety's annual average price (quantity-weighted monthly average), λ_{j,kt}(ω) is the within-national expenditure share, D_{kt} = ln(P^{σ_k - 1}_{kt} Q_{kt}) is a product-year fixed effect, and Δ ln φ_{ω,jkt} is a variety-level demand shock. The coefficient on Δ ln p̄ identifies σ_k; the coefficient on Δ ln λ additionally pins down (σ_k - 1)/(γ_k - 1), from which μ_k = 1/(γ_k - 1) is recovered.

**Shift-share instrument (pp. 2789-2790).** Both Δln p̄ and Δln λ are endogenous. The price instrument uses lagged monthly export-share weights applied to current monthly exchange rate changes:

$$
z_{j,kt}(\omega) = \sum_{m \in \mathcal{M}} s_{j,kt-1}(\omega,m)\, \Delta \ln \mathcal{E}_{jt}(m), \tag{IV}
$$

where s_{j,kt-1}(ω,m) is the share of month m in variety ωjkt's annual export sales to Colombia in year t-1, and Δln E_{jt}(m) is the year-over-year change in origin j's exchange rate with the Colombian peso in month m. This shift-share design generates firm-level cost shocks via the monthly composition of each firm's prior export activity, circumventing the country-level tariff approach of Ossa (2014) (which cannot discriminate across firms within a country-product). The within-national market share instrument follows Khandelwal (2010): annual changes in the total number of origin j firms and in the total number of HS10 categories served by firm ω.

Standard errors are clustered two-way by product-year and origin-product, following Adao, Kolesár, and Morales (2019), to account for cross-cluster correlation in shift-share designs. The pooled Kleibergen-Paap Wald rk F-statistic is 259, well above Stock-Yogo critical values.

**Welfare quantification (eqs. 17-21, pp. 2797-2799).** Policy welfare gains are computed via the hat-algebra technique, avoiding numerical optimization. Counterfactual changes in wages ŵ_i, expenditure shares λ̂_{ji,k}, industry sales shares ρ̂_{i,k}, and optimal taxes are jointly solved from a system of 2N + NK + [2(N-1)+1]K equations and unknowns derived from the optimal policy formulas (Theorems 1-3) plus labor-market clearing (eq. 20) and balanced budget conditions (eq. 21). Macro data on production and bilateral trade come from the 2014 WIOD, aggregated to 15 traded industries across 43 countries. The Cobb-Douglas cross-industry utility assumption (U_i = Π_k Q^{e_{i,k}}_{i,k}) is imposed for the quantitative analysis.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Colombian Customs Office import transactions, 2007-2013 (via DATAMYNE) | Firm-level structural estimation of demand parameters (σ_k, γ_k) and hence scale and trade elasticities; 225,000+ importing firms from 251 countries, HS10 product level | no page yet |
| 2014 World Input-Output Database (WIOD) | Macro-level calibration for policy quantification: bilateral trade shares, industry production and expenditure shares, applied tariff rates; 43 countries, 56 industries | no page yet |
| Bank of Canada monthly exchange rates, 2007-2013 | Construction of the shift-share exchange rate instrument for IV identification | no page yet |

Sample for estimation: firm-product-year level, 2007-2013, Colombia as the importer; one-time exporters dropped; observations trimmed at the 1st and 99th percentiles of price changes per HS10-year. Sample for quantification: 2014 cross-section, 43 countries (all 27 EU members plus 16 other major economies).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210419) if you are:
verifying the sufficient statistics derivations (Theorems 1-3 with formal proofs in online appendices B, I, J);
implementing the optimization-free welfare quantification procedure (Proposition 1, eqs. 17-21) for other trade models;
studying the IO linkage extension (Theorem 4, §IV.B) or the political economy extension (§IV.C) where politically adjusted subsidies replace Pigouvian ones;
reading country-specific welfare decompositions (Table 4, Figure 2) for all 43 countries;
checking robustness of the elasticity estimates to alternative IV lags, two-way FE, firm-size trimming, or Melitz-Pareto reparametrization (online appendices P, Q, Y).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(10), October 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The paper is paywalled; no CC licence found in Crossref metadata. Extract only.

> Lashkaripour, Ahmad, and Volodymyr Lugovskyy. "Profits, Scale Economies, and the Gains from Trade and Industrial Policy." *American Economic Review* 113, no. 10 (October 2023): 2759-2808. DOI: 10.1257/aer.20210419.
