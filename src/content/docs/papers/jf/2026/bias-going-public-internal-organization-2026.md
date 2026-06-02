---
title: "Going Public and the Internal Organization of the Firm: Bias, Lochner, Obernberger & Sevilir (2026)"
description: >-
  Distilled: German IPO firms become more hierarchical and standardized
  organizations in the two years before and during the IPO, adding management
  layers, narrowing control spans, expanding administrative functions, and
  standardizing job profiles. Hierarchy growth is more pronounced in firms with
  greater human capital risk. J. Finance 2026, CC BY 4.0. Eight core results
  with source locators, datasets used, the theory tested, and the estimating
  equations.
sidebar:
  label: Bias-Lochner-Obernberger-Sevilir 2026
  order: 1
tags: [paper-summary, ipo, organizational-economics, firm-structure, human-capital, labor-economics, difference-in-differences, panel-regression, peer-reviewed, unreplicated, open-access, cc-by, data:ieb-germany, data:orbis-bvd, data:sdc-platinum, data:iab-establishment-panel]
paper:
  authors: Daniel Bias, Benjamin Lochner, Stefan Obernberger, Merih Sevilir
  authorList:
    - { family: Bias, given: Daniel, affiliation: Vanderbilt University }
    - { family: Lochner, given: Benjamin, affiliation: "Institute for Employment Research (IAB), FAU Erlangen-Nurnberg, and Institute of Labor Economics (IZA)" }
    - { family: Obernberger, given: Stefan, affiliation: "Erasmus School of Economics, Erasmus University Rotterdam" }
    - { family: Sevilir, given: Merih, affiliation: "Halle Institute for Economic Research (IWH), ESMT-Berlin, and European Corporate Governance Institute (ECGI)" }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 459–505
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70012
  licenseShort: CC BY 4.0
  resultsCount: 8
  citedByCount: 1
  topics: ['Corporate Finance and Governance']
  dataAccess: proprietary-confidential
  outcome:
    - number of hierarchical layers in the firm
    - employment shares by organizational function
    - job standardization (promotion levels aligned to industry job ladders)
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-09; corroborated by artifact p.459 Creative Commons Attribution License statement and Projekt DEAL acknowledgment)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; canonical DOI resolves to paywalled landing page; the paywalled wrapper does not override the CC BY VOR licence in the publisher DOI metadata; checked 2026-05-31)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, matching]
  scope:
    region: Germany
    assetClass: private and public firms (non-financial, non-utility)
    period: 1986-01..2015-12
    frequency: annual
  relatesTo:
    - { cite: 'Bolton and Dewatripont (1994)', doi: '10.2307/2118349', relation: builds-on, note: 'firms as communication networks; going public raises task complexity and hierarchy depth (tested as predictions BG.1-BG.4)' }
    - { cite: 'Garicano (2000)', doi: '10.1086/317671', relation: builds-on, note: 'knowledge-based hierarchies; complexity increases the number of problem-solvers (managers) and narrows control spans (tested as BG.2)' }
    - { cite: 'Rajan (2012)', doi: '10.1111/j.1540-6261.2012.01745.x', relation: tests, note: 'standardization to reduce key-person dependence; human-capital risk drives hierarchy growth (tested as predictions R.1-R.4); evidence supports this channel' }
    - { cite: 'Caliendo, Monte, and Rossi-Hansberg (2015)', doi: '10.1086/681641', relation: builds-on, note: 'method for assigning employees to layers from occupation codes; adapted here for German KldB1988 classification' }
    - { cite: 'Gumpert, Steimer, and Antoni (2021)', relation: builds-on, note: 'validation of KldB1988-to-layer mapping for German administrative data used here directly' }
  openQuestions:
    - 'How a change in a firm''s organizational structure around an IPO affects its performance and innovativeness; the paper documents the reorganization but cannot estimate this causal effect (p. 493).'
    - 'Identification of exogenous variation in how firms are organized (beyond the IPO event-study design), which would allow understanding how much of post-IPO firm behavior is driven by the organizational transformation (p. 493).'
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70012
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-09; license[1].content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 459–505); eight results extracted from the CC BY PDF. Not human-verified. Not reproduced. Internet Appendix referenced but not read.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against source PDF Tables III–IX and Figures 2–4; one fix applied to R7 magnitude range (corrected "+0.196 to +0.256" to "+0.196 to +0.423" with clarification of column, matching paper text p.488 and Table VII col.(1)); all other rows confirmed correct.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: Augmented with methods/scope/relatesTo/openQuestions/proposedVocab frontmatter and three formal body sections (Theory / model, Method, Empirical specifications) with equations and specifications transcribed from pp. 464-490 of the source PDF read this session. The old Theory tested section has been replaced. Core results table, Attribution block, and all prior extraction/licenceVerification entries are unchanged. New formal sections are extracted only, not yet re-verified.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: Locators and magnitudes re-checked against source PDF Tables III-IX (pp. 479-494) and Figures 2-4; two fixes applied -- R4 production share relative figure corrected from erroneous "-4.8%" to "10.3% relative decline" (PDF p.485); R5 finance/accounting significance corrected from *** to ** (Table V col.(4) t-stat=2.378, p=0.018); equations and specifications in Theory/model, Method, and Empirical specifications sections verified term-by-term against PDF pp. 476-490 and confirmed correct; all other rows confirmed supported.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, theory, and estimating
equations: enough to know what it found and how without reading all 47 pages.
To replicate or extend it, read the original:
[DOI 10.1111/jofi.70012](https://doi.org/10.1111/jofi.70012).
The CC BY 4.0 licence permits mirroring; this batch does not host the PDF.

## TL;DR

Using administrative employment data matched to 312 German IPOs (1986–2015),
the paper tracks how firms change their internal hierarchies across an
eight-year window (five years pre-IPO to two years post-IPO) relative to
matched private-firm controls. IPO firms become more hierarchical in
preparation for listing: they add management layers (especially a new middle
management layer), narrow control spans, shift employment toward managerial
and administrative functions, hire finance, legal, and public-firm experts,
and standardize job profiles to align with industry job ladders. Approximately
40% of the hierarchical change is not explained by firm growth. Firms with
greater human capital risk undergo the largest hierarchical changes, consistent
with the theory that going public requires reducing dependence on key
individuals. Firms that withdraw their IPOs reverse these changes;
private-equity-backed firms show no analogous hierarchical transformation.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | IPO firms become **more hierarchical starting two years pre-IPO**, with changes concentrated in the anticipation and IPO year | Table III, p. 479; Figure 2, p. 478 | DiD coef on layers: +0.119\*\*\* at t-2, +0.202\*\*\* at t-1, +0.388\*\*\* at t (all vs. matched private controls; t-stats 3.1–7.3); 11.8% more hierarchical by IPO year (0.388/3.28 mean layers) |
| R2 | About **60% of hierarchical changes cannot be explained by firm growth**; the residual reflects going public per se | Table III col. (1) vs. (2), p. 479 | Without growth controls: +0.394 at t+2; with controls: +0.244 (7.4% more hierarchical); growth explains ~40% of the raw change |
| R3 | **Middle and top management (layers 3 and 4) grow disproportionately**; control spans narrow significantly | Table IV, p. 482 | Layer 3 employment +23.9% (p=0.002); layer 4 employment +18.9% (p=0.009) relative to controls; control span of layer 3 falls 23.3% (p=0.003), layer 4 falls 17.0% (p=0.015) |
| R4 | **Production share falls; administration and management shares rise** in IPO firms | Table V, p. 484 | Production share: -4.971pp\*\*\* at t+2 (10.3% relative decline vs. 48.1% mean share); administration: +2.708pp\*\*\* (p=0.003); management: +1.986pp\*\*\* (p=0.001); management share rises 31.5% relative to its t-3 base |
| R5 | **Finance, accounting, legal, and public-firm expert shares all rise** around the IPO | Table V cols. (4)–(6), p. 484 | Finance/accounting: +1.376pp\*\* at t+2 (53.1% relative increase, p=0.018); legal experts: +0.254pp\*\*\* (158.8% relative); public-firm experts: +2.779pp\*\* at t+2, peak +7.570pp\*\*\* at IPO year |
| R6 | **Firms with higher human capital risk experience larger hierarchical changes**, consistent with Rajan (2012) | Table VI Panel A, p. 486 | Triple-DiD: human-capital-intensive industry: interaction 0.202\* (p=0.054); highly skilled labor force: 0.261\*\*\* (p=0.009); R&D-intensive industry: 0.207\* (p=0.062) in post-IPO period |
| R7 | IPO firms **add job roles that align with industry-specific job ladders** (standardization); hierarchical changes correlate with more formalized internal processes | Table VII, p. 491; Figure 4, p. 489 | Promotion levels DiD: +0.196\*\*\* to +0.423\*\*\* across t+1/t+2 (3.8–8.3% increase relative to mean of 5.11; col. (1) without controls); with controls col. (2): +0.196\*\*\* at t+2, +0.256\*\*\* at t+1; more layers linked to written HR plans, job descriptions, performance reviews (all p<0.10) |
| R8 | **Withdrawn IPO firms build layers before withdrawal then reverse them**; PE-backed firms show no comparable hierarchical change beyond scale | Table VIII, p. 492; Table IX, p. 494 | Withdrawn firms: +0.183 at t-1 (p=0.123), -0.089 at t+2 (p=0.609); difference significant (F-stat 3.699\*). PE firms: all DiD estimates statistically indistinguishable from zero except borderline at t+2 (0.254\*, p~0.10) and fully explained by scale |

**Overall (paper's conclusion).** Firms reorganize to reduce dependence on key
individuals' human capital when transitioning to public markets. Most
organizational changes precede the listing date, occur in the two years before
the IPO, and are not fully explained by growth. The internal organization of a
firm is linked to its financing choices.

## Theory / model

The paper has no structural model and no formal estimation of structural
parameters. It derives testable predictions from two bodies of organizational-
economics theory and tests them empirically.

**Bolton and Dewatripont (1994) / Garicano (2000): firms as communication
networks (pp. 464–465).** In Bolton and Dewatripont (1994), firms are
information-processing networks that balance specialization and communication
costs. In Garicano (2000), employees in lower layers handle routine problems
while complex tasks escalate to specialized problem-solvers in upper layers.
Going public raises operational complexity (regulations, disclosure
requirements, investor scrutiny), making problems less predictable and
increasing the information load. The model predicts:

- BG.1: IPO firms increase the number of hierarchical layers.
- BG.2: IPO firms allocate more of the workforce to upper layers (more top-heavy),
  narrowing control spans.
- BG.3: IPO firms increase the proportion of specialized-role employees
  (finance, accounting, legal experts).
- BG.4: Hierarchical changes are greater in firms facing stricter listing
  standards (higher regulatory complexity).

**Rajan (2012): standardization to reduce key-person dependence
(pp. 465–466).** Early-stage firms rely on founders and key employees whose
human capital creates bargaining power and a risk to outside shareholders.
Going public requires transferring control to professional managers and
creating conventional job profiles that exist across firms in the same
industry and can be staffed with external recruits. The predictions are:

- R.1: IPO firms expand management capacity (top-heavy hierarchy, replaceable
  managers instead of founders/early employees).
- R.2: IPO firms grow administrative functions (personnel management, etc.).
- R.3: Hierarchical changes are more pronounced in firms with more valuable
  human capital (harder to replace).
- R.4: IPO firms align their hierarchies with industry-specific job ladders
  (jobs that exist at other firms in the same industry).

The two frameworks are treated as complementary (p. 467): both predict more
hierarchy; they differ in mechanism (complexity vs. key-person dependence).
The paper's goal is not to pit them against each other but to measure
organizational changes and assess which channel explains more variation.

**Identification logic (pp. 475–476).** The design is a stacked
difference-in-differences with matched never-treated private controls. The
identifying assumptions are (i) no treatment anticipation more than two years
before the IPO (preparation for a German IPO typically takes 12–24 months,
so $$t{-}3$$ and earlier are assumed clean); and (ii) conditional parallel trends:
matched controls would have followed the same hierarchy trajectory as IPO
firms in the absence of the IPO. Parallel trends cannot be tested directly
but is supported by near-zero, statistically insignificant pre-IPO period
coefficients at $$t{-}5$$ and $$t{-}4$$ (Table III).

## Method

The estimator is a stacked difference-in-differences (DiD) that builds on
`difference-in-differences` and `matching` as its technique primitives
(pp. 475–476). It is applied-method, not method-proposing; the stacked DiD
design follows Gormley and Matsa (2011) and Cengiz et al. (2019).

**Hierarchy measurement.** Three complementary measures of a firm's
hierarchical structure are constructed from German administrative occupation
codes (KldB1988):

1. `layers`: the number of hierarchical levels a firm has, where each
   occupation is mapped to one of four layers (layer 1 = production/blue-collar;
   layer 2 = supervisors/experts; layer 3 = middle management; layer 4 = top
   management/directors). Follows Caliendo, Monte, and Rossi-Hansberg (2015)
   and Gumpert, Steimer, and Antoni (2021).

2. `refined layers` (log): sublayers within each of the four layers, formed
   by clustering employees by wages within each layer (Bonhomme, Lamadon, and
   Manresa (2022)). Captures within-layer heterogeneity. Mean of 5.89 for IPO
   firms and 5.68 for controls at $$t{-}3$$ (Table II, p. 474).

3. `promotion levels`: industry-specific job-ladder positions derived from
   within-firm occupational transitions associated with wage increases, building
   on Huitfeldt et al. (2023). Captures the alignment of a firm's hierarchy
   with the industry job ladder.

**Sample construction (pp. 472–473).** Starting from 888 German IPOs (1984–2016,
compiled from SDC, Deutsche Boerse website, Bloomberg, and a manual dataset
from Christoph Kaserer at TU Munich), the paper links each IPO to employment
data via Orbis (BvD) firm identifiers and the ADIAB linking table to the
Betriebs-Historik-Panel. The matching algorithm has two steps: (1) match
each IPO to up to 20 private firms in the same industry with the most similar
size, age, employment growth, and mean wage three years before the IPO; then
(2) restrict to controls with the same layer structure as the IPO firm at
$$t{-}3$$. This yields 312 matched pairs (312 IPO firms and 312 matched private
firms, 4,992 firm-years in the main panel).

## Empirical specifications

The main specification is the dynamic stacked DiD (Equation 1, p. 476):

$$
y_{f,t,c} = \alpha
  + \sum_{k=-5}^{-4} \beta_k \cdot \mathbf{1}(\text{IPO})_f \cdot \mathbf{1}(t{+}k)_{f,t}
  + \sum_{k=-2}^{0}  \beta_k \cdot \mathbf{1}(\text{IPO})_f \cdot \mathbf{1}(t{+}k)_{f,t}
  + \sum_{k=1}^{2}   \beta_k \cdot \mathbf{1}(\text{IPO})_f \cdot \mathbf{1}(t{+}k)_{f,t}
  + \phi_f + \psi_{t,c} + \Pi \cdot X_{f,t} + \epsilon_{f,t}
$$

- $$f$$ = firm, $$t$$ = year, $$c$$ = cohort of IPO firms going public in the focal year.
- $$\mathbf{1}(\text{IPO})_f$$ is an indicator for the IPO (treated) firm.
- $$\mathbf{1}(t{+}k)_{f,t}$$ is an indicator for calendar year $$t$$ being $$k$$ years relative to the firm's IPO year.
- The omitted reference period is $$t{-}3$$ (the matching year).
- $$\phi_f$$ = firm fixed effects (equivalent to cohort-by-firm fixed effects).
- $$\psi_{t,c}$$ = cohort-by-year fixed effects.
- $$X_{f,t}$$ = controls: log number of layer-1 employees and log number of establishments.
- Standard errors are clustered at the firm level.

The dependent variable $$y_{f,t,c}$$ varies by table:
- **Table III**: `layers` (cols. 1-2) and $$\log(\text{refined layers})$$ (cols. 3-4),
  the extensive margin of hierarchy. Columns (2) and (4) add firm-growth
  controls.
- **Table IV**: $$\log(\text{employment in layer } L)$$ for layers 2, 3, 4 and
  $$\log(\text{control span of layer } L)$$ for layers 2, 3, 4, the intensive margin.
- **Table V**: employment share in production/service, administration,
  management, finance/accounting, legal experts, and public-firm experts.
- **Table VII**: `promotion levels` (industry-specific job-ladder alignment).
- **Tables VIII and IX**: the same specification estimated on withdrawn-IPO
  and PE-investment samples respectively.

**Triple-DiD specification for heterogeneity (Table VI, p. 486).**
To test whether human capital risk or regulatory complexity moderates the
main effect, the paper adds a triple interaction:

$$
y_{f,t,c} = \alpha
  + \sum_{\text{period}} \beta_k \cdot \mathbf{1}(\text{IPO})_f \cdot \mathbf{1}(\text{period})_{f,t}
  + \sum_{\text{period}} \gamma_k \cdot \mathbf{1}(\text{IPO})_f \cdot \mathbf{1}(\text{period})_{f,t} \cdot \mathbf{1}(\text{Split})_f
  + \delta \cdot \mathbf{1}(\text{Split})_f \cdot \mathbf{1}(\text{period})_{f,t}
  + \phi_f + \psi_{t,c} + \Pi \cdot X_{f,t} + \epsilon_{f,t}
$$

- $$\mathbf{1}(\text{Split})_f$$ is an indicator for higher human capital risk (human-capital-intensive industry, highly skilled labor force, R&D-intensive industry) or for higher IPO proceeds or listing in a more regulated market segment.
- The coefficient of interest is $$\gamma_k$$ in the post-IPO period.

**Formalization cross-section (Figure 4, p. 489, footnote p. 490).**
Using the IAB Establishment Panel survey, the paper regresses 10 standardization/
reorganization indicators on number-of-layers dummies, controlling for
establishment and year fixed effects:

$$
\mathbf{1}(\text{standardization/reorganization})_{j,t}
  = \alpha
  + \beta_1 \cdot \mathbf{1}(\text{firm has two layers})_{j,t}
  + \beta_2 \cdot \mathbf{1}(\text{firm has three layers})_{j,t}
  + \beta_3 \cdot \mathbf{1}(\text{firm has four layers})_{j,t}
  + \phi_j + \psi_t + \epsilon_{j,t}
$$

- $$j$$ = establishment.
- $$\phi_j$$ = establishment fixed effects.
- $$\psi_t$$ = year fixed effects.
- The omitted category is firms with one layer.
- Vertical bars in Figure 4 are 95% confidence intervals from heteroskedasticity-consistent standard errors clustered at the establishment level.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Integrated Employment Biographies (IEB), German Institute for Employment Research (IAB) | Administrative employee-level data: occupational codes, wages, layering, functions, tenure; main source for all hierarchy measures | No page yet |
| Orbis (Bureau van Dijk) | Firm identifier linking IPO list to employment data; firm characteristics | No page yet |
| Thomson Reuters Securities Data Corporation (SDC) | German IPO list (888 IPOs, 1984–2016) | No page yet |
| Bloomberg database | IPO list compilation (supplementary to SDC) | No page yet |
| Deutsche Boerse AG website | IPO list compilation | No page yet |
| Manually collected data (Christoph Kaserer, TU Munich) | German IPO identifiers | No page yet |
| IAB Establishment Panel | Representative survey of German establishments; used to test whether hierarchical changes correlate with formalization of internal processes | No page yet |
| Bureau van Dijk Orbis / VentureSource | PE growth investment sample (71 firms) | No page yet |

Sample: 312 IPO firms and 312 matched private-firm controls; 4,992 firm-years in the main panel (eight-year window, $$t{-}5$$ to $$t{+}2$$). IPOs span 1986–2015; primarily Manufacturing (34.9%), Information and Communication (21.8%), Wholesale and Retail Trade (15.3%), and Professional, Scientific, and Technical Activities (14.4%).

## When to read the full paper

Read the original if you are: studying organizational economics of IPOs or
corporate governance; extending the hierarchy-measurement methodology
(layers, refined layers, promotion levels); using the German IPO sample or
IAB/IEB data; examining the standardization-via-job-ladders mechanism; or
auditing a specific coefficient. The locators above point to the exact tables.
For "what did this paper find," the table above is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026. This
distillation was extracted by an LLM on 2026-05-31 and augmented on 2026-06-01;
it is **not human-verified or independently reproduced**. The article is
published under CC BY 4.0, which permits mirroring; the PDF is not hosted in
this batch.

> **Attribution (CC BY 4.0).** Bias, Daniel, Benjamin Lochner, Stefan
> Obernberger, and Merih Sevilir. "Going Public and the Internal Organization
> of the Firm." *The Journal of Finance* 81, no. 1 (February 2026): 459–505.
> DOI: 10.1111/jofi.70012. © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Open access
> funding enabled and organized by Projekt DEAL.
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
