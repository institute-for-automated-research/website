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
  resultsCount: 8
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

## Theory tested

**Formal structural model (welfare economics framework).** The paper builds a
micro-founded partial equilibrium model in which a firm's *individual impact*
is defined as the Pareto-weighted social welfare loss from its exit (equation 6,
p. 293). A second metric, *share of industry impact*, uses the Shapley value to
apportion welfare loss if the entire industry exited (equation 8, p. 293). The
welfare function is the sum of Pareto-weighted indirect utilities across people
(equation 5, p. 293), with social marginal welfare weights inversely proportional
to after-tax income (following Saez 2002; curvature parameter rho = 1 as
benchmark).

**Product markets:** A random-coefficient logit demand system (following Berry,
Levinsohn and Pakes 1995, 2004) estimated by method of simulated moments.
Firms maximize profits in Nash-Bertrand equilibrium. Survey data identify the
demand parameters (substitution patterns by income group). Oil is treated as an
undifferentiated globally traded product with price-taking firms.

**Labor markets:** Firm contribution to worker surplus equals the area above the
residual labor supply function, estimated from the survey's worker price response
question (equation 23-24, pp. 311-312). A linear probability model of the worker
price response regresses on earnings, education, occupation, and local labor
market size (Table V, p. 313).

**Externalities and internalities:** Production externalities use the EPA CO2
emission factors at the U.S. government social cost of carbon ($190/metric ton
CO2 for 2020). Consumption externalities are drawn from prior literature (beer:
$33.60/liter pure alcohol; cigarettes: $0.64/pack; soda: 0.85 cents/ounce).
Internalities for cigarettes (≈ $14.65/pack) and soda (0.93 cents/ounce) are
drawn from prior literature.

**No identification in the causal-inference sense.** This is a structural
quantification exercise, not a quasi-experimental study. Identification of
demand parameters follows standard BLP: survey substitution moments, income-firm
moments, and outside-good moments. The main assumptions are: partial
equilibrium (firms are small relative to factor markets), static Nash-Bertrand
pricing, constant marginal costs, and no general equilibrium up the supply
chain.

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
