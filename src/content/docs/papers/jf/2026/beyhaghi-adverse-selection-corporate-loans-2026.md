---
title: "Adverse Selection in Corporate Loan Markets: Beyhaghi, Fracassi & Weitzner (2026)"
description: >-
  Distilled: using confidential Federal Reserve Y-14Q supervisory data, this
  paper shows that more banks in a local market raises interest rates, borrower
  risk, and loan volume, consistent with adverse selection dominating
  competition effects; it also constructs a novel risk-orthogonalized markup
  measure and shows repeat-relationship markups and GSIB-shock evidence support
  the channel. J. Finance 2026, paywalled. Nine core results with source
  locators, datasets used, the theory tested, and the estimating specifications.
sidebar:
  label: Beyhaghi-Fracassi-Weitzner 2026
  order: 1
tags: [paper-summary, adverse-selection, banking, corporate-loans, market-structure, information-asymmetry, panel-regression, difference-in-differences, peer-reviewed, unreplicated, data:fr-y14q, data:fdic-summary-of-deposits, data:bls, data:census]
paper:
  authors: Mehdi Beyhaghi, Cesare Fracassi, Gregory Weitzner
  authorList:
    - { family: Beyhaghi, given: Mehdi, affiliation: "Board of Governors of the Federal Reserve System" }
    - { family: Fracassi, given: Cesare, affiliation: "University of Texas at Austin" }
    - { family: Weitzner, given: Gregory, affiliation: "McGill University" }
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
  dataAccess: proprietary-confidential
  outcome:
    - loan interest rates
    - borrower probability of default
    - loan markup (risk-orthogonalized interest rate)
  resultsCount: 9
  citedByCount: 1
  topics: ['Banking stability, regulation, efficiency', 'Corporate Finance and Governance']
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences, instrumental-variables]
  scope:
    region: US
    assetClass: corporate loans
    period: 2014Q4..2019Q4
    frequency: quarterly
  relatesTo:
    - { cite: 'Broecker (1990)', doi: '10.2307/2938210', relation: tests, note: 'core adverse-selection predictions: more banks raises rates, borrower risk, and volume (p. 246)' }
    - { cite: 'Marquez (2002)', doi: '10.1093/rfs/15.3.901', relation: tests, note: 'information-dispersion channel: more banks makes screening harder (p. 246)' }
    - { cite: "Dell'Ariccia and Marquez (2006)", relation: tests, note: 'information-holdup channel: incumbent banks extract rents from repeat borrowers (p. 246)' }
    - { cite: 'Sharpe (1990)', doi: '10.1111/j.1540-6261.1990.tb02427.x', relation: builds-on, note: 'information-holdup theory underlying the Stay Bank markup test (p. 247)' }
    - { cite: 'Rajan (1992)', doi: '10.1111/j.1540-6261.1992.tb04662.x', relation: builds-on, note: 'information-rent extraction by relationship lenders (p. 247)' }
    - { cite: 'Favara, Ivanov and Rezende (2021)', doi: '10.1016/j.jfineco.2021.06.026', relation: builds-on, note: 'GSIB surcharge as a shock to large-bank lending costs, used as the DiD/IV instrument (p. 272)' }
  openQuestions:
    - 'The paper does not provide a welfare analysis of market structure; results suggest standard competition models miss adverse-selection subtleties, but the net welfare effect of more vs. fewer banks is left unresolved (pp. 278-279).'
    - 'The markup measure is relative, not absolute; the paper cannot rule out that some unobserved risk component drives residual variation in interest rates across counties (p. 265).'
    - 'The sample covers only large BHC loans to private nonsyndicated borrowers; whether results extend to small banks, online lenders, or syndicated markets is not tested (pp. 241, 264).'
  replicationCode:
    status: available
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
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Added methods, scope, relatesTo, openQuestions,
        replicationCode, and proposedVocab frontmatter blocks, and replaced the
        old Theory tested section with three formal body sections (Theory / model,
        Method, Empirical specifications) with equations (1)-(7) transcribed from
        the source PDF (pp. 250-272). Core results table and verified locators
        preserved unchanged. Not yet re-verified by paper-verifier.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; all
        9 rows confirmed correct: table numbers, coefficients, t-statistics
        (rounding only), significance stars, signs, and units all match the PDF.
        Equations (1)-(7) checked term-by-term against PDF pp. 250-272: all
        subscripts, signs, fixed-effect sets, and RHS terms match. Spec (7)
        uses Gamma_2 for Z_{f,t} coefficient where the PDF reuses gamma; this
        is a defensible disambiguation, not an error. Frontmatter authors, year,
        venue, and resultsCount verified. No em-dashes or colorful adjectives found.
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

## Theory / model

The paper has no original structural model. It tests predictions derived from
Broecker (1990) and related adverse-selection models (Riordan 1995, Marquez
2002, Dell'Ariccia and Marquez 2006). In these models, when lenders cannot
observe whether a borrower has been previously rejected by another bank, they
face a winner's curse: the pool of applicants worsens as the number of banks
in the market increases, because lower-quality borrowers have more chances to
find an approving lender. Two related mechanisms reinforce each other (p. 246):

1. As the number of banks rises, individual banks become more concerned that
   applicants have been screened and rejected elsewhere, raising the expected
   risk of any given applicant and thus the required interest rate.
2. More banks makes it harder for any one bank to infer whether a borrower
   has been rejected (Marquez 2002), further worsening adverse selection.

Both mechanisms predict that more banks leads to (i) higher average borrower
risk conditional on observables, (ii) higher interest rates, and (iii) higher
lending volume (pp. 246-247).

A second class of predictions concerns market power arising from information
advantages. Because incumbent banks learn about borrowers through lending
relationships, they hold private information that competitors lack (Sharpe
1990, Rajan 1992, Dell'Ariccia and Marquez 2006). This advantage lets them
charge above-marginal-cost rates to repeat borrowers who would be pooled with
riskier applicants if they tried to switch banks. More banks in the market
worsens adverse selection further and thus strengthens the incumbent's
information advantage and holdup capacity (p. 246).

**Tested predictions:**

1. More banks raises average bank-assessed PD, conditional on observables.
2. More banks raises interest rates (adverse-selection effect dominates competition).
3. More banks raises total lending volume.
4. Markups (interest rates net of risk) rise with bank count.
5. Repeat borrowers pay higher markups; the effect attenuates when borrowers
   have prior multi-bank relationships that reduce holdup.

The paper provides no welfare ranking and is fully empirical.

## Method

The paper applies three estimation strategies. All use OLS (or 2SLS) at the
loan level with multi-way fixed effects; no structural model is estimated.
The approach builds on `panel-regression`, `difference-in-differences`, and
`instrumental-variables`.

**Risk-assessment validation (Section II, pp. 250-254).** Before testing
market-structure predictions, the paper verifies that banks' internal PD and
LGD reports contain genuine private information. This is critical because the
markup measure relies entirely on the credibility of these assessments. The
validation runs two regressions (equations 1 and 2 in the PDF).

**Markup construction (Section IV, p. 264).** Markup is not an externally
observed price-cost margin; it is constructed residually. Equation (5) regresses
the interest rate on PD, LGD, their interaction, loan controls, bank x quarter
FEs, and industry x quarter FEs. The residual after partialling out the risk
components measures the portion of the interest rate unexplained by the
bank's own assessment of risk. This makes the measure internally consistent:
by construction, Table IV shows that interest rates do not predict loan
performance once PD and LGD are controlled for, so the residual markup
arguably reflects market power rather than unpriced risk.

**GSIB DiD/IV (Section VII, pp. 272-278).** To address endogeneity of the
number of banks, the paper uses a Bartik-style design (Goldsmith-Pinkham,
Sorkin, and Swift 2020): the pre-determined number of GSIBs in a county in
2015, interacted with a post-surcharge dummy, instruments for changes in the
number of lending banks. The first stage (column (1) of Table XII) shows that
more GSIBs in 2015 predicts a significant drop in the total number of banks
after 2016. The IV strategy identifies the adverse-selection channel by
exploiting a supply-side cost shock that affected GSIBs differentially across
counties.

## Empirical specifications

All regressions use loan $$l$$ in industry $$i$$ originated by bank $$b$$ in quarter $$t$$ as
the unit of observation unless noted. Standard errors are clustered by county
throughout.

**Spec (1): Risk assessment and interest rates (Table III, p. 251)**

$$
\text{IR}_l = \beta_0 \cdot \text{PD}_l + \beta_1 \cdot \text{LGD}_l + \beta_2 \cdot (\text{PD}_l \times \text{LGD}_l)
       + \Gamma X_l + \delta_{b,t} + \alpha_{i,t} + u_l \tag{1}
$$

- $$\text{IR}_l$$ is loan interest rate (%);
- $$\text{PD}_l$$ is bank-assessed probability of default (%);
- $$\text{LGD}_l$$ is loss given default (%);
- $$X_l$$ is a vector of loan controls (log maturity, log amount, guarantee dummy, loan purpose FE, loan type FE);
- $$\delta_{b,t}$$ is bank x quarter FE;
- $$\alpha_{i,t}$$ is industry x quarter FE.

Produces results R1 (Table III, p. 251).

**Spec (2): Risk assessments and loan performance (Table IV, p. 254)**

$$
y_l = \beta_0 \cdot \text{IR}_l + \beta_1 \cdot \text{PD}_l + \beta_2 \cdot \text{LGD}_l + \beta_3 \cdot (\text{PD}_l \times \text{LGD}_l)
      + \Gamma X_l + \delta_{b,t} + \alpha_{i,t} + u_l \tag{2}
$$

- $$y_l$$ is either nonperformance (dummy) or realized default (dummy);
- same controls and FEs as spec (1).

Produces results R1 (Table IV, p. 254).

**Spec (3): Market structure and interest rates (Table V, p. 255)**

$$
\text{IR}_l = \beta \cdot \text{NOB}_c + \Gamma_0 X_l + \Gamma_1 Z_{f,t}
       + \delta_{b,t} + \alpha_{i,t} + u_l \tag{3}
$$

- $$\text{NOB}_c$$ is the number of banks in county $$c$$;
- $$Z_{f,t}$$ is firm characteristics (log assets, leverage, tangibility, profitability).

Produces results R2 (Table V, p. 255). The same specification is used with $$\text{PD}$$ as the dependent variable for R3 (Table VI, p. 257).

**Spec (4): Market structure and loan volume (Table VII, p. 258)**

$$
\text{Volume}_{c,t} = \beta_0 \cdot \text{NOB}_c + \Gamma_0 X_{c,t} + \delta_t + u_{c,t} \tag{4}
$$

- $$\text{Volume}_{c,t}$$ is log total dollar loan volume (or log total number of loans) in county $$c$$ in quarter $$t$$;
- $$X_{c,t}$$ is county-level controls (log population density, log wages, log financial industry wages, log population);
- $$\delta_t$$ is year-quarter FE.

Produces results R4 (Table VII, p. 258). The same specification with blanket lien as the outcome produces collateral results (Table VIII, p. 261).

**Spec (5): Market structure and markups (Table IX, p. 265)**

$$
\text{IR}_l = \beta_0 \cdot \text{NOB}_c + \beta_1 \cdot \text{PD}_l + \beta_2 \cdot \text{LGD}_l + \beta_3 \cdot (\text{PD}_l \times \text{LGD}_l)
       + \Gamma_0 X_l + \Gamma_1 Z_{f,t} + \delta_{b,t} + \alpha_{i,t} + u_l \tag{5}
$$

This is spec (3) augmented with the risk measures as controls; the coefficient on $$\text{NOB}_c$$ now captures the markup effect (interest rate variation beyond risk). Produces results R5 (Table IX, p. 265).

**Spec (6): Switching banks and markups (Table XI, p. 271)**

$$
\text{IR}_l = \beta_0 \cdot \text{Stay Bank}_l + \beta_1 \cdot \text{PD}_l + \beta_2 \cdot \text{LGD}_l + \beta_3 \cdot (\text{PD}_l \times \text{LGD}_l)
       + \Gamma_0 X_l + \Gamma_1 Z_{f,t} + \delta_{b,t} + \alpha_{i,t} + \lambda_{c,t} + u_l \tag{6}
$$

- $$\text{Stay Bank}_l$$ equals one when the borrower stays with an existing bank;
- $$\lambda_{c,t}$$ is county x quarter FE (additional to bank x quarter FE);
- Sample restricted to firms with more than one loan.

Produces results R8 (Table XI, p. 271).

**Spec (7): GSIB surcharges - DiD reduced form and 2SLS (Tables XII-XIII, pp. 273-278)**

$$
y_{t,c} = \beta_0 + \beta_1 \cdot (\text{NOG2015}_c \times \text{Post}_t)
          + \Gamma_0 X_l + \Gamma_2 Z_{f,t} + \delta_{b,t} + \gamma_{b,c} + \alpha_{i,t} + u_{t,c} \tag{7}
$$

- $$\text{NOG2015}_c$$ is the number of GSIBs in county $$c$$ in 2015;
- $$\text{Post}_t$$ equals one for 2016 and later;
- $$\gamma_{b,c}$$ is bank x county FE;
- $$y_{t,c}$$ is in turns: number of banks, log loan volume, interest rate, PD, or markup.
- Sample period: 2014Q4-2019Q4 except column (1) of Table XII which uses 2015Q1-2019Q4 for the annual bank-count series.
- In the 2SLS version (Table XIII, p. 278), $$\text{NOG2015}_c \times \text{Post}_t$$ is used as an instrument for the annual number of banks in the county.

Produces results R9.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Federal Reserve Y-14Q (Schedule H.1) | Confidential supervisory loan-level data: interest rates, PD, LGD, loan characteristics, firm financials, 2014Q4-2019Q4, 21,924 loans from 23 BHCs | [FR Y-14Q](/wiki/datasets/fr-y14q/) (no page yet) |
| FDIC Summary of Deposits | Alternative county-level bank count (branches), corroboration of main measure | [FDIC Summary of Deposits](/wiki/datasets/fdic-summary-of-deposits/) (no page yet) |
| Bureau of Labor Statistics (BLS) | County-level wage and financial-industry wages | [BLS](/wiki/datasets/bls/) (no page yet) |
| U.S. Census Bureau | County-level population estimates | [Census](/wiki/datasets/census/) (no page yet) |
| Zillow | County-level residential rent (robustness) | no page yet |

Sample: 21,924 new corporate loans (private, nonsyndicated borrowers) originated
2014Q4-2019Q4 by 23 U.S. bank holding companies. Median firm assets $23.6 mm,
median revenue $46 mm; median interest rate 3.66% (~150 bp credit spread).

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
