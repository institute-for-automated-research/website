---
title: "Adverse Selection in Corporate Loan Markets: Beyhaghi, Fracassi & Weitzner (2026)"
description: >-
  Distilled: using confidential Federal Reserve Y-14Q supervisory data, this
  paper shows that more banks in a local market raises interest rates, borrower
  risk, and loan volume, consistent with adverse selection dominating
  competition effects; it also constructs a novel risk-orthogonalized markup
  measure and shows repeat-relationship markups and GSIB-shock evidence support
  the channel. J. Finance 2026, paywalled. Nine core results with source
  locators, datasets used, and theory tested.
sidebar:
  label: Beyhaghi-Fracassi-Weitzner 2026
  order: 1
tags: [paper-summary, adverse-selection, banking, corporate-loans, market-structure, information-asymmetry, panel-regression, difference-in-differences, peer-reviewed, unreplicated, data:fr-y14q, data:fdic-summary-of-deposits, data:bls, data:census]
paper:
  authors: Mehdi Beyhaghi, Cesare Fracassi, Gregory Weitzner
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 239–284
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70011
  license: >-
    Paywalled (Wiley VOR terms; Crossref license[].content-version=vor,
    URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0,
    start=2025-12-09). PDF p.239 carries a U.S. Government work notice for the
    Federal Reserve co-author's contribution under 17 U.S.C. §105, which does
    not make the full article open access.
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (Wiley site; confirmed paywalled 2026-05-31)
  redistribution: extract-only
  resultsCount: 9
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: >-
        Full text read (pp. 239–284 of the PDF, Tables I–XIII, Figures 1–14,
        Appendix). Nine results extracted directly from the source PDF. Not
        human-verified. Not reproduced. Replication code not examined.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; all
        9 rows confirmed correct: table numbers, coefficients, t-statistics
        (rounding only), significance stars, signs, and units all match the PDF.
        Frontmatter authors, year, venue, and resultsCount verified. No em-dashes
        or colorful adjectives found.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70011
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0]: content-version=vor,
        URL=http://onlinelibrary.wiley.com/termsAndConditions#vor,
        delay-in-days=0, start=[[2025,12,9]]; license[1]: content-version=tdm,
        URL=http://doi.wiley.com/10.1002/tdm_license_1.1. No CC licence found.
        PDF p.239 notes U.S. Government employee contribution (Beyhaghi/Fed);
        this is a partial public-domain notice, not a whole-article CC grant.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough to
know what it found without reading all 46 pages. To replicate or extend it,
read the full source at the
[original DOI](https://doi.org/10.1111/jofi.70011) (paywalled).

## TL;DR

Using the Federal Reserve's confidential Y-14Q supervisory data on corporate
loans (21,924 loans, 2014Q4–2019Q4, 23 large bank holding companies), the
paper documents that markets with more banks have higher interest rates, riskier
borrowers (higher bank-assessed probability of default), and larger loan volume.
These patterns contradict standard competition models but are consistent with
adverse selection: riskier borrowers find it easier to obtain financing when
more banks compete, creating a winner's curse for lenders. The paper constructs
a novel markup measure by orthogonalizing the interest rate to the bank's
internal risk assessment, finds markups also rise with the number of banks,
and shows that firms staying with their existing bank pay 9 bp higher markups,
consistent with information holdup. A GSIB capital-surcharge shock confirms the
channel: counties with more GSIBs in 2015 saw falling interest rates and
borrower risk after surcharges reduced adverse selection.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Bank risk assessments strongly predict loan interest rates** and loan performance; after controlling for PD and LGD, interest rates are orthogonal to future performance | Table III, p. 251; Table IV, p. 254 | PD coef 0.077\*\*\* (t=4.66), LGD coef 0.003\*\*\* (t=4.37); adj. R² rises from 0.52 to 0.55; interest-rate coef on nonperformance drops from 0.527\*\*\* to 0.101 (insig) when PD/LGD added |
| R2 | **More banks in a county raises interest rates** (adverse selection reverses standard competition effect) | Table V, p. 255 | coef 0.013\*\*\* (t=6.32) in col.(2); 1-SD increase (~6 banks) ≈ +7 bp vs. average credit spread ~150 bp; nonmonotonic U-shape (Fig. 2, p. 256): rates first fall then rise with bank count |
| R3 | **More banks raises borrower risk** (higher bank-assessed PD, conditional on observables) | Table VI, p. 257 | coef 0.011\*\*\* (t=4.97) in col.(2); PD increases monotonically with bank count (Fig. 3, p. 258); average PD = 134 bp, effect ≈ +1.1 bp per additional bank |
| R4 | **More banks raises total lending volume** (consistent with adverse selection and competition alike, but combined with R2–R3 supports adverse selection) | Table VII, p. 258 | coef 0.140\*\*\* (t=14.66) on log volume; 1 additional bank ≈ +14% volume; monotonically increasing (Fig. 4, p. 259) |
| R5 | **Novel markup measure also rises with number of banks**, consistent with adverse-selection-driven market power | Table IX, p. 265 | coef 0.012\*\*\* (t=5.84) in col.(2); markups U-shaped in bank count (Fig. 8, p. 266) |
| R6 | **Adverse selection effects are concentrated in low-tangibility firms**, for which private information problems are most severe | Table X, pp. 267–268 | Interest rate coef: high-tangibility 0.003 (insig), low-tangibility 0.013\*\*\* (t=3.77); PD coef: high-tangibility 0.000 (insig), low-tangibility 0.014\*\* (t=2.47); markup: high-tangibility insig, low-tangibility 0.011\*\*\* |
| R7 | **Firms rarely switch banks** (~75% stay with existing bank, roughly constant across market structures), consistent with information holdup | Fig. 6, p. 262 | Stay Bank rate ~75% across all bank-count bins; small economically insignificant reduction (Fig. 7, p. 263) |
| R8 | **Firms staying with their existing bank pay higher markups** (information rent extraction); holdup attenuated by prior multi-bank borrowing | Table XI, p. 271 | Stay Bank coef 0.090\*\*\* (t=3.64) in col.(2); interaction Stay Bank × N. of Prior Lenders: −0.052\*\*\* (t=3.50) |
| R9 | **GSIB capital surcharges (2016) reduced the number of banks, interest rates, and borrower risk** in high-GSIB counties; markup direction consistent but not significant | Table XII (reduced-form DiD), p. 273; Table XIII (2SLS), p. 278 | Reduced form: Post × N. of GSIBs(2015) coefs: N. banks −0.201\*\* (t=2.44), log volume −0.084\*\*\* (t=3.16), interest rate −0.031\* (t=1.96), PD −0.069\* (t=1.68); 2SLS: interest rate +0.179\* (t=1.85), PD +0.396\* (t=1.66) per additional bank |

**Overall (paper's conclusion).** Standard competition models fail to capture
the corporate loan market: more banks lead to riskier borrowers and higher
rates, not lower. Adverse selection gives informed incumbent banks market power,
which they exploit via information rents on repeat borrowers. Antitrust
policies that increase the number of banks in local loan markets may raise
rates and borrower risk as an unintended consequence.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Federal Reserve Y-14Q (Schedule H.1) | Confidential supervisory loan-level data: interest rates, PD, LGD, loan characteristics, firm financials, 2014Q4–2019Q4, 21,924 loans from 23 BHCs | [FR Y-14Q](/wiki/datasets/fr-y14q/) (no page yet) |
| FDIC Summary of Deposits | Alternative county-level bank count (branches), corroboration of main measure | [FDIC Summary of Deposits](/wiki/datasets/fdic-summary-of-deposits/) (no page yet) |
| Bureau of Labor Statistics (BLS) | County-level wage and financial-industry wages | [BLS](/wiki/datasets/bls/) (no page yet) |
| U.S. Census Bureau | County-level population estimates | [Census](/wiki/datasets/census/) (no page yet) |
| Zillow | County-level residential rent (robustness) | no page yet |

Sample: 21,924 new corporate loans (private, nonsyndicated borrowers) originated
2014Q4–2019Q4 by 23 U.S. bank holding companies. Median firm assets $23.6 mm,
median revenue $46 mm; median interest rate 3.66% (~150 bp credit spread).

## Theory tested

**Adverse selection in credit markets.** The paper tests predictions from
Broecker (1990) and related models (Riordan 1995, Marquez 2002, Dell'Ariccia
and Marquez 2006): in loan markets with asymmetric information across lenders,
an increase in the number of banks worsens adverse selection because
lower-quality borrowers have more chances to find a lender that approves them
(winner's curse analog). Specific predictions tested:

1. More banks leads to higher average borrower risk (PD) conditional on observables.
2. More banks leads to higher interest rates (adverse selection offsets competition).
3. More banks leads to higher lending volume.
4. Markups (interest rates orthogonalized to bank-assessed risk) rise with bank count.
5. Information rents arise from repeat lending relationships (Sharpe 1990, Rajan 1992).

**Identification strategies:**
- Baseline: loan-level OLS with bank x quarter and industry x quarter fixed
  effects to absorb bank funding costs and aggregate industry shocks; standard
  errors clustered by county.
- Cross-sectional: tangibility splits (low-tangibility firms face more severe
  information asymmetry).
- Quasi-experiment: Bartik-style difference-in-differences using GSIB capital
  surcharges (phased in 2016–2019) as a shock to lending costs of the largest
  banks, with NOG2015,c x Post_t as the treatment interaction; followed by
  two-stage least squares using the same instrument.

The paper is **empirical** throughout: no original structural model is estimated.

## When to read the full paper

Read the source at [doi.org/10.1111/jofi.70011](https://doi.org/10.1111/jofi.70011)
if you are: replicating or extending the markup methodology (orthogonalizing
interest rates to bank internal risk assessments); studying adverse selection
identification in loan markets; using the GSIB surcharge as an instrument for
bank presence; or auditing a specific coefficient. The locators above point to
the exact table or figure.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 239–284. DOI: 10.1111/jofi.70011. © 2025 American Finance Association.
Paywalled; Wiley VOR licence (no CC grant). The Federal Reserve co-author's
contribution carries a U.S. Government public-domain notice under 17 U.S.C.
§105, which does not extend to the full article.

This distillation was extracted by an LLM on 2026-05-31 and is **not
human-verified or independently reproduced**. Extract-only: no PDF is hosted
here.

> Beyhaghi, Mehdi, Cesare Fracassi, and Gregory Weitzner. "Adverse Selection
> in Corporate Loan Markets." *The Journal of Finance* 81, no. 1 (February
> 2026): 239–284. DOI: 10.1111/jofi.70011.
