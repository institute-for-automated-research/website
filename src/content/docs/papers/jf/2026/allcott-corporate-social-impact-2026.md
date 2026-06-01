---
title: "An Economic View of Corporate Social Impact: Allcott, Montanari, Ozaltun & Tan (2026)"
description: >-
  Distilled: a welfare-economics framework defines corporate social impact as
  the social welfare loss from a firm's exit; applied to 74 firms in 12
  industries, consumer surplus dominates all other components, and ESG ratings
  are essentially unrelated to the resulting estimates. J. Finance 2026, open
  access (Wiley/AFA terms). Eight core results with source locators, datasets
  used, and the theory tested.
sidebar:
  label: Allcott-Montanari-Ozaltun-Tan 2026
  order: 1
tags: [paper-summary, esg, corporate-social-responsibility, welfare-economics, consumer-surplus, impact-investing, structural-estimation, panel-regression, open-access, peer-reviewed, unreplicated, data:nielseniq, data:wrds, data:acs, data:infousa, data:rystad, data:us-epa-supply-chain]
paper:
  authors: Hunt Allcott, Giovanni Montanari, Bora Ozaltun, Brandon Tan
  authorList:
    - { family: Allcott, given: Hunt, affiliation: Stanford University and NBER }
    - { family: Montanari, given: Giovanni, affiliation: New York University }
    - { family: Ozaltun, given: Bora, affiliation: University of California at Berkeley }
    - { family: Tan, given: Brandon, affiliation: Harvard University }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 285–328
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70004
  license: >-
    Open access under Wiley/AFA terms (VOR, delay-in-days 0, start 2025-12-15).
    Crossref licence URL is the Wiley VOR terms page
    (onlinelibrary.wiley.com/termsAndConditions#vor), not a Creative Commons
    URL. PDF sidebar carries a "Creative Commons License" watermark but no CC
    attribution block appears on the article itself; copyright line reads
    "© 2025 the American Finance Association." No CC licence confirmed.
  licenseShort: Wiley OA (AFA copyright)
  access: open
  machineAccess: 'blocked-402 (Wiley/AFA publisher site, 2026-05-31)'
  redistribution: >-
    extract-only. No CC licence confirmed; copyright held by the American
    Finance Association. Redistribution of verbatim PDF not permitted here.
    CC permits mirroring only if a CC licence is positively confirmed; it was
    not confirmed in this batch.
  dataAccess: proprietary-confidential
  outcome:
    - corporate social impact (welfare loss from firm exit)
    - social impact per dollar of revenue
    - ESG rating correlation with welfare-grounded impact estimates
  resultsCount: 8
  citedByCount: 0
  topics: ['Community Development and Social Impact', 'Corporate Social Responsibility Reporting', 'Environmental and Social Impact Assessments']
  methods:
    role: both
    contributes: corporate-social-impact-framework
    family: structural
    buildsFrom: [blp-demand, method-of-simulated-moments, shapley-value-allocation]
  scope:
    region: US
    assetClass: US large firms (12 industries, 74 firms)
    period: 2018..2021
    frequency: annual
  relatesTo:
    - { cite: 'Berry, Levinsohn & Pakes (1995)', relation: builds-on, note: 'Demand estimation follows the BLP random-coefficient logit framework (§IV.A, p. 302)' }
    - { cite: 'Berry, Levinsohn & Pakes (2004)', relation: builds-on, note: 'Estimation strategy for differentiated-product markets using micro data (§IV.B, p. 304)' }
    - { cite: 'Brest & Born (2013)', relation: builds-on, note: 'Conceptualizes enterprise impact; the paper operationalizes this as welfare loss from firm exit (§I, p. 291)' }
    - { cite: 'Serafeim, Trinh & Zochowski (2020)', relation: contradicts, note: 'HBS Impact Weighted Accounts use accounting methods to monetize impact; this paper uses demand estimation instead, yielding different results (§VII, p. 321)' }
    - { cite: 'Chatterji et al. (2015)', relation: contradicts, note: 'ESG ratings disagree substantially with each other; this paper shows they are also uncorrelated with welfare-grounded estimates (§VII, p. 322)' }
    - { cite: 'Saez (2002)', relation: builds-on, note: 'Social marginal welfare weights inversely proportional to income, rho = 1 benchmark (§I.C.1, p. 294)' }
  openQuestions:
    - 'Framework may not capture diversity/inclusion, political lobbying, or good governance because these do not fit cleanly into a welfarist welfare function (§conclusion, p. 290).'
    - 'Static partial equilibrium ignores how a firm exit would affect worker surplus at upstream suppliers, innovation spillovers to competitors, and long-run dynamic entry (§conclusion, p. 290-291).'
    - 'Empirical implementation relies on survey-elicited price elasticities and controversial functional form assumptions for consumer surplus; contested estimates of externalities and internalities also affect results (p. 291).'
    - 'The framework covers only firms that can be represented by a single representative product; industries with complex multi-product firms or non-market outputs are not covered here (p. 295).'
  replicationCode:
    url: https://allcott.stanford.edu/research
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: >-
        Full text read (pp. 285–328). Eight results extracted from the PDF.
        Not human-verified. Not reproduced. Replication code is available at
        allcott.stanford.edu/research but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF;
        all eight rows confirmed correct: R1 (Figure 7/p. 317-318, welfare
        weight 0.12, 22% revenues), R2 (Figure 5/p. 316, R2=0.89, excluded
        firms match), R3 (Figure 6/p. 316, range 0.2-1.0), R4 (Table VI
        Panel A/p. 319, Walmart $150.54B rank 1, Philip Morris -$16.78B rank
        74), R5 (Table VI Panel B/p. 319, oil companies 1.50-1.51,
        elasticity -0.14), R6 (Table IV/p. 311, cigarette internality $2.77
        per dollar sales confirmed), R7 (p. 318, industry vs individual
        impact gap confirmed), R8 (Figure 9/p. 322, ESG uncorrelated,
        IA.VII cited). No locator errors, no magnitude mismatches, no
        em-dashes, no colorful adjectives found. No fixes applied.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Full PDF re-read (pp. 285-328). Added methods, scope,
        relatesTo, openQuestions, replicationCode, and proposedVocab frontmatter
        blocks. Replaced old ## Theory tested section with three formal body
        sections (Theory / model, Method, Empirical specifications) with equations
        transcribed from the PDF (eq. 1-9, 10-21, 22-27). Core results table,
        verifier entry, and attribution block are unchanged. New formal sections
        are extracted, not yet re-verified by paper-verifier.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Full PDF re-read (pp. 285-328). All eight Core results rows re-confirmed
        (locators and magnitudes correct). All equations in Theory/model (eq. 1-9),
        Method (eq. 10-20), and Empirical specifications (eq. 22-27, Table V col 3)
        checked term-by-term against the PDF. One fix applied: eq. 15 bracket
        structure corrected, the sum_f gamma_f internality adjustment term
        belongs inside the N sum_z mu_z g(z) T_m [...] bracket (p. 304), not
        outside it as previously transcribed. No em-dashes, no colorful adjectives
        found.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70004
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0]: content-version=vor,
        URL=http://onlinelibrary.wiley.com/termsAndConditions#vor,
        delay-in-days=0, start=2025-12-15.
        license[1]: content-version=tdm,
        URL=http://doi.wiley.com/10.1002/tdm_license_1.1,
        delay-in-days=0, start=2025-12-15.
        No Creative Commons licence URL found in Crossref metadata.
        Publisher site returned 402. PDF copyright: © 2025 the American
        Finance Association.
  rightsSignalConflict: true
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 44 pages. To replicate or extend
it, read the full source at the
[original](https://doi.org/10.1111/jofi.70004) (open access on the Wiley
platform under AFA/Wiley terms). Replication files and the survey instrument
are available at allcott.stanford.edu/research.

## TL;DR

The paper proposes an economic definition of corporate social impact as the
social welfare loss that would result from a firm's exit. Using a 3,500-person
survey (fielded July and November 2021) combined with standard industrial
organization and labor economics methods, it estimates social impact for 74
large firms across 12 U.S. industries. Consumer surplus is by far the largest
component, dwarfing profits, worker surplus, and externalities. Firm size is
the strongest driver of total impact; product differentiation (own-price
elasticity) drives impact per dollar of revenue. Existing ESG ratings from
CSRHub and Just Capital are essentially uncorrelated with these
welfare-grounded estimates. Cigarette companies have negative social impact
in the model; Walmart's grocery business has by far the largest positive impact
($151 billion/year).

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Consumer surplus dominates all other components of corporate social impact** | §VI.C, Figure 7, p. 317–318 | Consumer surplus accounts for the overwhelming share of weighted individual impact per dollar of revenue across all differentiated industries; profits receive much less weight (welfare weight on profits ≈ 0.12 because high-income people own most equity); worker surplus is small because average total compensation is only about 22% of revenues |
| R2 | **Firm size is highly correlated with social impact** (R² = 0.89) | Figure 5, p. 316 | Log-log plot of unweighted individual impact vs. revenue across 74 firms; firms excluded are the two cigarette companies plus Frontier and Spirit Airlines (negative impact) |
| R3 | **Product differentiation (own-price inelasticity) drives impact per dollar of revenue** | Figure 6, p. 316 | Unweighted impact/revenue ranges from about 0.2 to over 1.0 across firms; much of this variation explained by own-price elasticity from the survey |
| R4 | **Walmart's grocery business has by far the highest individual social impact in the sample** | Table VI Panel A, p. 319 | Weighted individual impact: Walmart $150.54 billion/year (rank 1); Philip Morris: -$16.78 billion/year (rank 74, most harmful) |
| R5 | **Oil companies have the highest social impact per dollar of revenue** due to global supply inelasticity | Table VI Panel B, p. 319 | Weighted impact/revenue: Conoco, Eni, Total, Shell, Chevron all at 1.50–1.51; the large consumer surplus arises because oil exit raises prices substantially given inelastic global demand (elasticity ≈ -0.14) |
| R6 | **Cigarette companies have negative social impact** due to large internalities ($2.77/\$ sales) | §VI.A, Table IV, pp. 311, 314 | Internality for cigarettes ≈ $2.77 per dollar of sales (vs. externality ≈ $0.12/$ sales); internality-adjusted consumer surplus is negative; Philip Morris -$16.78 billion/year, Reynolds -$13.72 billion/year (Table VI) |
| R7 | **Shares of industry impact are considerably larger than individual firm impacts**, especially in industries with inelastic aggregate demand | §VI.C, p. 318 | When all auto firms exit, consumers must find entirely different forms of transportation; individual BMW exit allows substitution to other auto firms; the gap is largest for toothpaste, groceries, and smartphones (most inelastic aggregate demand per Figure 2) |
| R8 | **ESG ratings from CSRHub and Just Capital are essentially unrelated to the welfare-grounded impact estimates** | Figure 9, §VII, pp. 322–323 | Scatterplot of weighted individual impact/revenue vs. CSRHub and Just Capital ratings shows little relationship; Internet Appendix Table IA.VII also shows other rating systems (Refinitiv, S&P) are not closely correlated with each other or with the paper's estimates |

**Overall (paper's conclusion).** Consumer surplus is the primary driver of
corporate social impact. Impact investors should consider devoting more
attention to firms that deliver more consumer surplus, especially for lower
income people. Making more differentiated products that more consumers want
to buy is the key to social impact in this framework (p. 324).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Original 3,500-person consumer and worker survey (Lucid and Cint panels, July and November 2021) | Firm-level price response, aggregate price response, worker price response, satisfaction, income | Proprietary/custom survey; not a public dataset; no page |
| NielsenIQ Homescan and Statista Consumer Market Outlook | Consumer packaged goods revenues and market shares | [no page yet](/wiki/datasets/) |
| U.S. Department of Transportation DB1B | Airline revenues | no page yet |
| Wards (auto revenues) | Auto revenues | no page yet |
| Winsight (grocery revenues) | Grocery revenues | no page yet |
| Technomic (restaurant revenues) and Statista / Statcounter (smartphone revenues) | Restaurant and smartphone revenues | no page yet |
| Compustat | Revenues and employment for publicly traded firms | [WRDS / Compustat](/wiki/licensed/wrds/) (licensed) |
| InfoUSA | Firm-level county employment counts | no page yet |
| American Community Survey (ACS), 2010-2019 | Occupation and county employment distributions for worker surplus estimation | no page yet |
| Rystad Energy | Oil production and operating expenses for the seven oil supermajors across all oil fields worldwide (2018) | no page yet |
| U.S. EPA supply-chain CO2 emission factors (Ingwersen and Li 2020) | Production externalities from CO2 emissions | [no page yet](/wiki/datasets/) |
| Piketty, Saez and Zucman (2018) distributional national accounts | After-tax income distribution for social marginal welfare weights | no page yet |
| C-corporation ownership data (Piketty et al. 2018) | Profit distribution across income percentiles | no page yet |
| National Household Travel Survey (2017) | U.S. gasoline consumption by income (for oil consumer surplus welfare weights) | no page yet |

Sample: 74 firms; 12 industries (autos, airline, beer, cereal, cigarettes, grocery, oil, restaurant, smartphone, soda, toothpaste, yogurt); survey n = 3,544 valid respondents after screening.

## Theory / model

The paper builds a micro-founded partial equilibrium model. There are N people
indexed by i with income-earning ability theta_i. Each person i has quasilinear
utility additively separable in consumption, labor, and externality (eq. 1,
p. 292):

```
U_i(y; p, w(theta_i)) = U_i( sum_m sum_{t in T_m} sum_{j in J_m} (u_ijt - p_j) y_ijt
                              + pi_i
                              + sum_fl (u_ifl + w_ifl(theta_i)) y_ifl
                              - Phi )
```

where y_ijt are binary purchase indicators, y_ifl are binary employment
indicators, pi_i is person i's share of redistributed profits, and Phi is the
per-capita externality. For markets with behavioral biases (cigarettes, soda),
consumers maximize perceived utility U-tilde_i where u_ijt is replaced by
u_ijt + gamma_j; gamma_j < 0 is a negative internality. Consumer choice is
(eq. 2, p. 292):

```
y* = argmax U-tilde_i(y; p, w(theta_i))
```

Firm f's profits are (eq. 3, p. 292):

```
Pi_f(p) = sum_{j in J_f} [ p_j q_j(p) - C_j(q_j) ]
```

Per-capita externality (eq. 4, p. 292):

```
Phi = (1/N) sum_m sum_{j in J_m} q_j(p) phi_j
```

Social welfare is the Pareto-weighted sum of indirect utilities (eq. 5, p. 293):

```
W(p, w) = sum_i omega_i V_i(p, w(theta_i))
```

**Individual impact.** Firm f's individual impact is the welfare loss from its
exit if all other firms remain (eq. 6-7, p. 293):

```
Delta W_f(X) := W(p^{X_0}, w^{X_0}) - W(p^{X_0\f}, w^{X_0\f})

Delta W_f^{Individual} = Delta W_f(F)
```

**Share of industry impact.** Defined as firm f's Shapley value for the social
welfare loss if the entire industry exited. With R_m the set of orderings of
firms in market m and P_f^R the set of firms preceding f in ordering R
(eq. 8, p. 293):

```
Delta W_f^{Shapley} = (1 / F_m!) sum_{R_n} Delta W_f(P_f^R)
```

**Social marginal welfare weights.** Following Saez (2002), welfare weights are
inversely proportional to after-tax income (eq. 9, p. 294):

```
g_i = kappa * a(z_i)^{-rho},    kappa = N / [ sum_i a(z_i)^{-rho} ]
```

where a(z_i) is after-tax income and rho = 1 as benchmark (log utility).
When rho = 0, all people receive equal weight and W is total surplus.

**Identification.** This is a structural quantification exercise, not a
quasi-experimental design. Demand parameters are identified by survey moments
(substitution, income-firm, aggregate price response), combined with aggregate
market-share matching (BLP contraction). The partial equilibrium framework
assumes each firm is a small share of the labor market and that intermediate
inputs are produced at constant marginal cost.

## Method

The estimation proceeds in three parallel modules: (i) differentiated product
markets via BLP demand, (ii) oil market via price-taking competitive fringe, and
(iii) labor markets via linear probability model. It builds on `blp-demand`,
`method-of-simulated-moments`, and `shapley-value-allocation`.

**Differentiated product markets (Sections IV.A-B, pp. 302-305).** Representative
utility for income group z and firm f is (eq. 12, p. 303):

```
V_{zf}(p_f, v_i) = eta(-p_f + u_ift) - epsilon_ift
                 = -eta p_f + xi_f + gamma_f + A_i zeta_f + sigma_f v_if + sigma_n v_in
```

where eta is a market-level price scaling factor, xi_f + gamma_f = delta_f is
firm f's mean utility, zeta_f is an income-firm interaction parameter, and
sigma_f, sigma_n are standard deviations of firm-specific and inside-good random
coefficients. Income group z's choice probability (eq. 13, p. 303):

```
P_{zf}(p) = E_v [ exp(V_{zf}(p_f, v_i)) / (1 + sum_{k in F_m} exp(V_{zk}(p_k, v_i))) ]
```

Consumer surplus loss from firm f's exit (eq. 15, p. 304):

```
Delta CS_f(X_0) = N sum_z mu_z g(z) T_m [ CS-tilde_{zm}(p^{X_0}) - CS-tilde_{zm}(p^{X_0\f})
                  - sum_f gamma_f (P_{zf}(p^{X_0}) - P_{zf}(p^{X_0\f})) ]
```

**Estimation moments (MSM, p. 305).** Three sets of micro-moments identify the
structural parameters (Theta^m = {eta, zeta, sigma_f, sigma_n}):

Income-firm moments (informative about zeta_f):

```
g_f^{inc} = ( sum_i omega_i chi_im )^{-1} sum_i omega_i chi_im
            [ (A_i F_if - B_i F_if) - (mu_A P_{Af}(p^0) - mu_B P_{Bf}(p^0)) / (1 - P_0(p^0)) ]
```
(eq. 16, p. 305)

Substitution moments (informative about eta and sigma_f):

```
g_f^{sub} = ( sum_i omega_i chi_im F_if )^{-1} sum_i omega_i chi_im F_if
            [ H_if - P_f(p_f') / P_f(p^0) ]
```
(eq. 17, p. 305)

Outside-good moments (informative about sigma_n):

```
g^{out} = ( sum_i omega_i chi_im )^{-1} sum_i omega_i chi_im
          [ O_i - (1 - P_0(p')) / (1 - P_0(p^0)) ]
```
(eq. 18, p. 305)

Parameters are estimated by minimizing G^m(Theta^m)' G^m(Theta^m). Marginal
costs are backed out from Nash-Bertrand first-order conditions (eq. 10, p. 302):

```
p_f - C'_f = q_f / (- partial q_f(p) / partial p_f)
```

Counterfactual equilibrium prices p^X are found by fixed-point iteration
(Conlon and Gortmaker 2020).

**Oil market (Section IV.D, pp. 308-309).** Oil is treated as an undifferentiated
globally traded commodity with price-taking firms. Market clearing (eq. 19):

```
D(p^X) = S(p^X; F)
```

Consumer surplus loss from firm f's exit under linear demand (eq. 20):

```
Delta CS_f(X_0) = (1/2)( D(p^{X_0\f}) + D(p^{X_0}) ) * (p^{X_0\f} - p^{X_0})
```

**Labor markets (Section V, pp. 311-314).** Worker surplus per worker assuming
linear labor supply. Normalized surplus relative to outside option (eq. 22-23,
pp. 311-312):

```
(u_ifl + w_ifl - u_i0 - w_i0) / w_ifl = epsilon_ifl / (alpha x_ifl),   epsilon ~ U(0,1)

E_i[ WS_ifl ] = integral_0^1 (w_ifl epsilon) / (alpha x_ifl) d epsilon = w_ifl / (2 alpha x_ifl)
```

Total worker surplus loss from firm f's exit (eq. 24, p. 312):

```
Delta WS_f = sum_{l in L_f} sum_{i in fl} w_ifl / (2 alpha x_ifl)
```

## Empirical specifications

**Labor supply regression (Table V, p. 313).** The labor supply arc elasticity
alpha is estimated from a linear probability model of whether workers leave if
their employer cuts salaries by 10% (eq. 27, p. 312):

```
Pr(L_i = 1) = (0.1 alpha) x_ifl
```

where x_ifl includes: annual earnings w_ifl (from survey), college degree
indicator, major occupation indicators (management/business/science reference),
natural log of firm total employment in county (from InfoUSA), natural log of
labor market size (employment in occupation-county cell, from ACS), and a
constant. Standard errors in parentheses; n = 1,302 employed non-self-employed
respondents. Wages divided by 0.69 to convert from compensation to wages
(U.S. DOL 2023).

Key estimates from column (3): constant = 0.448 (SE 0.079)\*\*\*, total
compensation ($10,000) = -0.014 (SE 0.002)\*\*\*, college degree = -0.078
(SE 0.032)\*\*, ln(firm employees in county) = 0.025 (SE 0.006)\*\*\*;
R^2 = 0.064. (Table V, p. 313.)

**Product market estimation (Section IV.B-C, pp. 304-306).** MSM estimation per
market. Sample restricted to firms with at least 25 survey respondents as
customers; all other firms in market pooled as "other" firm. Baseline prices
p^0 = 1. Parameter identification: firm zeta estimated from share of purchases
by high- vs. low-income consumers (income-firm moments); market eta and sigma_f
from share of customers who would still buy after a 25% price increase
(substitution moments); sigma_n from share of inside-good consumption retained
if all prices double (outside moments). Berry (1994) contraction mapping used
to match aggregate market shares in every iteration. (p. 305.)

**Externality and internality calibration (Section IV.F, Table IV, pp. 310-311).**
No regression; values imported from prior literature. Production externalities:
U.S. EPA supply-chain CO2 emission factors valued at $190/metric ton (U.S.
government social cost of carbon, 2020). Consumption externalities: beer $33.60
per liter of pure alcohol (Herrnstadt et al. 2015); cigarettes $0.64/pack
(DeCicca et al. 2020); soda 0.85 cents/oz; autos and oil include lifetime
CO2 emissions discounted at 3%. Cigarette internality = (1 - beta) * H^c =
(1 - 0.67) * $44.40 per pack ~= $14.65/pack (Chaloupka et al. 2019; Gruber
and Koszegi 2001); soda internality 0.93 cents/oz (Allcott et al. 2019a).

**Robustness checks (Section VI.E, Figure 8, p. 320).** Six panels vary: social
cost of carbon doubled to $380/ton; cigarette internality halved; soda internality
doubled; more inelastic labor supply assumed. Main results are qualitatively
unchanged across all panels.

## When to read the full paper

Use the [original article](https://doi.org/10.1111/jofi.70004) if you are:
constructing your own social impact measure and need the full derivations
(Sections I-V); replicating the demand or labor surplus estimates (replication
code at allcott.stanford.edu/research); extending the framework to new
industries or markets; auditing a specific firm-level estimate (Internet
Appendix Table IA.V has all 74 firms); or comparing against the Harvard
Business School Impact Weighted Accounts methodology (Section VII). The
locators above point to the exact table or figure.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026.
Copyright © 2025 the American Finance Association. Open access on the Wiley
platform under Wiley/AFA terms; no Creative Commons licence was confirmed
(Crossref returns only the Wiley VOR terms URL). This distillation was
extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The PDF sidebar carries a "Creative Commons
License" watermark, but no CC attribution block appears in the article
and no CC URL appears in Crossref metadata; the rights signal is therefore
flagged as conflicted (`rightsSignalConflict: true`).

> Allcott, Hunt, Giovanni Montanari, Bora Ozaltun, and Brandon Tan.
> "An Economic View of Corporate Social Impact." *The Journal of Finance*
> 81, no. 1 (February 2026): 285–328. DOI: 10.1111/jofi.70004.
> © 2025 the American Finance Association.
> This page is an extract-only distillation by the Institute for Automated
> Research: core results re-expressed; **changes were made**. No verbatim
> PDF is mirrored here.
