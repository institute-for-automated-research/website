---
title: "Going Public and the Internal Organization of the Firm: Bias, Lochner, Obernberger & Sevilir (2026)"
description: >-
  Distilled: German IPO firms become more hierarchical and standardized
  organizations in the two years before and during the IPO, adding management
  layers, narrowing control spans, expanding administrative functions, and
  standardizing job profiles. Hierarchy growth is more pronounced in firms with
  greater human capital risk. J. Finance 2026, CC BY 4.0. Eight core results
  with source locators, datasets used, and the theory tested.
sidebar:
  label: Bias-Lochner-Obernberger-Sevilir 2026
  order: 1
tags: [paper-summary, ipo, organizational-economics, firm-structure, human-capital, labor-economics, difference-in-differences, panel-regression, peer-reviewed, unreplicated, open-access, cc-by, data:ieb-germany, data:orbis-bvd, data:sdc-platinum, data:iab-establishment-panel]
paper:
  authors: Daniel Bias, Benjamin Lochner, Stefan Obernberger, Merih Sevilir
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 459–505
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70012
  licenseShort: CC BY 4.0
  resultsCount: 8
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-09; corroborated by artifact p.459 Creative Commons Attribution License statement and Projekt DEAL acknowledgment)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; canonical DOI resolves to paywalled landing page; the paywalled wrapper does not override the CC BY VOR licence in the publisher DOI metadata; checked 2026-05-31)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
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
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 47 pages. To replicate or extend
it, read the original: [DOI 10.1111/jofi.70012](https://doi.org/10.1111/jofi.70012).
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
| R1 | IPO firms become **more hierarchical starting two years pre-IPO**, with changes concentrated in the anticipation and IPO year | Table III, p. 479; Figure 2, p. 478 | DiD coef on layers: +0.119\*\*\* at t−2, +0.202\*\*\* at t−1, +0.388\*\*\* at t (all vs. matched private controls; t-stats 3.1–7.3); 11.8% more hierarchical by IPO year (0.388/3.28 mean layers) |
| R2 | About **60% of hierarchical changes cannot be explained by firm growth**; the residual reflects going public per se | Table III col. (1) vs. (2), p. 479 | Without growth controls: +0.394 at t+2; with controls: +0.244 (7.4% more hierarchical); growth explains ~40% of the raw change |
| R3 | **Middle and top management (layers 3 and 4) grow disproportionately**; control spans narrow significantly | Table IV, p. 482 | Layer 3 employment +23.9% (p=0.002); layer 4 employment +18.9% (p=0.009) relative to controls; control span of layer 3 falls 23.3% (p=0.003), layer 4 falls 17.0% (p=0.015) |
| R4 | **Production share falls; administration and management shares rise** in IPO firms | Table V, p. 484 | Production share: −4.971pp\*\*\* at t+2 (vs. −4.8%/48.1% mean); administration: +2.708pp\*\*\* (p=0.003); management: +1.986pp\*\*\* (p=0.001); management share rises 31.5% relative to its t−3 base |
| R5 | **Finance, accounting, legal, and public-firm expert shares all rise** around the IPO | Table V cols. (4)–(6), p. 484 | Finance/accounting: +1.376pp\*\*\* at t+2 (53.1% relative increase); legal experts: +0.254pp\*\*\* (158.8% relative); public-firm experts: +2.779pp\*\* at t+2, peak +7.570pp\*\*\* at IPO year |
| R6 | **Firms with higher human capital risk experience larger hierarchical changes**, consistent with Rajan (2012) | Table VI Panel A, p. 486 | Triple-DiD: human-capital-intensive industry: interaction 0.202\* (p=0.054); highly skilled labor force: 0.261\*\*\* (p=0.009); R&D-intensive industry: 0.207\* (p=0.062) in post-IPO period |
| R7 | IPO firms **add job roles that align with industry-specific job ladders** (standardization); hierarchical changes correlate with more formalized internal processes | Table VII, p. 491; Figure 4, p. 489 | Promotion levels DiD: +0.196\*\*\* to +0.423\*\*\* across t+1/t+2 (3.8–8.3% increase relative to mean of 5.11; col. (1) without controls); with controls col. (2): +0.196\*\*\* at t+2, +0.256\*\*\* at t+1; more layers linked to written HR plans, job descriptions, performance reviews (all p<0.10) |
| R8 | **Withdrawn IPO firms build layers before withdrawal then reverse them**; PE-backed firms show no comparable hierarchical change beyond scale | Table VIII, p. 492; Table IX, p. 494 | Withdrawn firms: +0.183 at t−1 (p=0.123), −0.089 at t+2 (p=0.609); difference significant (F-stat 3.699\*). PE firms: all DiD estimates statistically indistinguishable from zero except borderline at t+2 (0.254\*, p~0.10) and fully explained by scale |

**Overall (paper's conclusion).** Firms reorganize to reduce dependence on key
individuals' human capital when transitioning to public markets. Most
organizational changes precede the listing date, occur in the two years before
the IPO, and are not fully explained by growth. The internal organization of a
firm is linked to its financing choices.

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

Sample: 312 IPO firms and 312 matched private-firm controls; 4,992 firm-years in the main panel (eight-year window, t−5 to t+2). IPOs span 1986–2015; primarily Manufacturing (34.9%), Information and Communication (21.8%), Wholesale and Retail Trade (15.3%), and Professional, Scientific, and Technical Activities (14.4%).

## Theory tested

The paper derives predictions from three organizational-economics frameworks
applied to the IPO context:

1. **Bolton and Dewatripont (1994) / Garicano (2000)**: Firms are
   knowledge-based communication networks. Going public increases operational
   complexity (regulations, disclosure requirements, investor scrutiny), which
   raises the likelihood of hard problems, prompting firms to add hierarchical
   layers and specialized problem solvers, narrowing control spans (predictions
   BG.1, BG.2, BG.3, BG.4).

2. **Rajan (2012)**: Young firms rely on key individuals whose human capital
   creates a bargaining problem with outside shareholders. IPO firms must
   standardize by shifting control to professional managers and creating
   conventional job profiles that can be filled by external hires, reducing
   key-person dependence (predictions R.1, R.2, R.3, R.4).

These frameworks are treated as complementary, not competing. All three
predict more hierarchical organizations; they differ in the mechanism.

**Identification**: Stacked difference-in-differences (DiD) on a balanced
eight-year panel (t−5 to t+2). IPO firms are matched to private firms that
show no observable differences in internal organization three years before the
IPO (conditional parallel trends). Firm fixed effects, cohort-by-year fixed
effects, and controls for layer-1 employment and number of establishments.
Standard errors clustered at the firm level. Pre-IPO coefficients are used
to test the parallel-trends assumption (all near zero and statistically
insignificant). Purely empirical; no structural model estimated.

## When to read the full paper

Read the original if you are: studying organizational economics of IPOs or
corporate governance; extending the hierarchy-measurement methodology
(layers, refined layers, promotion levels); using the German IPO sample or
IAB/IEB data; examining the standardization-via-job-ladders mechanism; or
auditing a specific coefficient. The locators above point to the exact tables.
For "what did this paper find," the table above is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026. This
distillation was extracted by an LLM on 2026-05-31 and is **not
human-verified or independently reproduced**. The article is published under
CC BY 4.0, which permits mirroring; the PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Bias, Daniel, Benjamin Lochner, Stefan
> Obernberger, and Merih Sevilir. "Going Public and the Internal Organization
> of the Firm." *The Journal of Finance* 81, no. 1 (February 2026): 459–505.
> DOI: 10.1111/jofi.70012. © 2025 The Author(s). Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Open access
> funding enabled and organized by Projekt DEAL.
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
