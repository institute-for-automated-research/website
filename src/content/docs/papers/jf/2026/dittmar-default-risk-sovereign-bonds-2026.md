---
title: "Default Risk and Sovereign Bond Pricing: Dittmar, Hsu, Roussellet & Simasek (2026)"
description: >-
  Distilled: U.S. Treasury default risk is significantly positively related
  to the spread between inflation-linked swap rates and breakeven inflation
  (ILSBEI); the channel operates primarily through inflation dynamics upon
  default, not differential recovery rates; a no-arbitrage affine term
  structure model shows credit risk explains most of the ILSBEI differential
  at longer maturities outside the financial crisis. J. Finance 2026,
  paywalled. Eight core results with source locators, datasets used, the model
  equations, the estimation method, and the empirical specifications.
sidebar:
  label: Dittmar et al. 2026
  order: 1
tags: [paper-summary, fixed-income, sovereign-debt, default-risk, inflation, term-structure, tips, breakeven-inflation, panel-regression, instrumental-variables, affine-term-structure, peer-reviewed, unreplicated, data:gsw-yields, data:bloomberg, data:fred, data:bls]
paper:
  authors: Robert F. Dittmar, Alex Hsu, Guillaume Roussellet, Peter Simasek
  authorList:
    - { family: Dittmar, given: "Robert F.", affiliation: "Rice University" }
    - { family: Hsu, given: Alex, affiliation: "Georgia Institute of Technology" }
    - { family: Roussellet, given: Guillaume, affiliation: "McGill University and Federal Reserve Bank of New York" }
    - { family: Simasek, given: Peter, affiliation: "Core Alternative Capital" }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 829–869
  venueShort: J. Finance 2026
  licenseShort: paywalled
  dataAccess: licensed-commercial
  outcome:
    - ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate)
    - nominal Treasury yields
    - TIPS yields
  outcomeClass: [asset-prices]
  resultsCount: 8
  citedByCount: 0
  jel:
    codes: [G12, E43, H63]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics: ['Credit Risk and Financial Regulations', 'Global Financial Crisis and Policies']
  doi: 10.1111/jofi.70014
  license: >-
    Paywalled (Wiley VOR licence: http://onlinelibrary.wiley.com/termsAndConditions#vor,
    content-version vor, delay-in-days 0, start 2026-01-06; confirmed via Crossref
    DOI metadata 2026-05-31). Copyright 2026 the American Finance Association.
    Note: the downloaded PDF carries a sidebar watermark reading "Creative Commons
    License" but the Crossref metadata contains no CC URL: only the Wiley T&C
    VOR and TDM licences; the watermark is likely a download-interface artefact
    and does not override the publisher licence.
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley site; confirmed paywalled via Crossref licence metadata 2026-05-31)'
  redistribution: extract-only
  methods:
    role: both
    contributes: affine-sovereign-default-atsm
    family: structural
    buildsFrom: [affine-term-structure, extended-kalman-filter, instrumental-variables, gmm, gamma-zero-processes]
    identification: instrument
  contributionType: [new-fact, new-method, new-theory]
  mechanisms: [liquidity, limits-to-arbitrage, credit-inflation-channel]
  scope:
    region: US
    assetClass: sovereign bonds (nominal Treasuries, TIPS, ILS, sovereign CDS)
    period: 2004-11..2020-12
    frequency: monthly
    dataType: [market]
    granularity: [aggregate]
    n: "187 monthly observations (Jun 2005-Dec 2020, regressions); 23 observable series (Nov 2004-Dec 2019, model estimation)"
  findings:
    - { ref: R1, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: coefficient, value: "G coef 0.013*** (level), 0.025*** (first diff); R^2 = 0.217 (level)", direction: positive }
    - { ref: R2, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: coefficient, value: "G coef 0.004** (level), 0.018*** (FD) with full liquidity controls; R^2 = 0.808", direction: positive }
    - { ref: R3, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: coefficient, value: "CDS coef 0.352*** (spec 2); with G and CDS, CDS coef 0.287*** and G coef 0.002*", direction: positive }
    - { ref: R4, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: coefficient, value: "2SLS instrumented CDS coef 1.205** (SE 0.475)", direction: positive }
    - { ref: R5, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: coefficient, value: "2y = 1.097** (SE 0.522), 3y = 1.324*** (SE 0.511), 7y = 0.868** (SE 0.341), 10y = 0.385 (SE 0.250, insig.)", direction: mixed }
    - { ref: R6, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: r-squared, value: "ILS R^2 93-99%; nominal R^2 99%+; ILSBEI R^2 81-91% (2-7y); RMSE 7.77-10.92 bps (ILSBEI)", direction: positive }
    - { ref: R7, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: basis-points, value: "Mean credit component: 7.57 bps (2y), 10.07 bps (3y), 14.46 bps (5y), 18.16 bps (7y), 23.05 bps (10y)", direction: positive }
    - { ref: R8, outcome: ILSBEI differential (inflation-linked swap rate minus breakeven inflation rate), metric: basis-points, value: "Inflation-upon-default channel contributes 1-10 bps (95% CI); default-in-SDF channel near zero", direction: positive, vsBenchmark: "inflation-upon-default dominates default-in-SDF and inflation/PD correlation channels" }
  resultType: overturns
  relatesTo:
    - { cite: 'Fleckenstein, Longstaff & Lustig (2014)', doi: '10.1111/jofi.12032', relation: extends, note: 'builds on their TIPS-Treasury no-arbitrage puzzle (ILSBEI mispricing); adds credit risk channel to their liquidity/slow-moving-capital explanation (p. 830)' }
    - { cite: 'Pflueger & Viceira (2016)', doi: '10.1002/9781118709207.ch10', relation: contradicts, note: 'they attribute ILSBEI to a liquidity premium; this paper shows credit risk is also a nontrivial driver, especially at long maturities (pp. 830, 862)' }
    - { cite: 'Chernov, Schmid & Schneider (2020)', relation: builds-on, note: 'their macrofinance view of U.S. sovereign CDS premia motivates treating U.S. default risk as nontrivial; this paper uses the same premise applied to relative bond pricing (p. 830)' }
    - { cite: 'Monfort, Pegoraro, Renne & Roussellet (2020)', relation: builds-on, note: 'the affine credit-event modelling approach with gamma-zero processes follows their framework (p. 852)' }
  openQuestions:
    - 'The model has difficulty fitting short-maturity ILSBEI spreads; R^2 declines as maturity decreases and ILSBEI R^2 falls to 59.7% at 10y in Table VIII (p. 859). Short-maturity spreads are dominated by liquidity and the Gaussian riskless yield model has limitations near the zero lower bound (p. 858).'
    - 'The price-of-default-risk parameter Lambda_delta is fixed over time, providing only limited flexibility at short horizons to match the term structure of physical default probabilities (p. 861).'
    - 'The analysis is limited to U.S. sovereign debt; generalization to other developed-market sovereigns where default risk is priced differently is not explored (p. 867).'
  replicationCode:
    url: https://doi.org/10.1111/jofi.70014
    status: available
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70014
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor,
        delay-in-days=0, start=2026-01-06;
        license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1,
        delay-in-days=0, start=2026-01-06. No CC licence found.
  rightsSignalConflict: true
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: >-
        Full text read (pp. 829-869); eight results extracted from the PDF.
        Not human-verified. Not reproduced. Replication code is published as
        Supporting Information at the publisher's website but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Added methods, scope, relatesTo, openQuestions, replicationCode,
        proposedVocab frontmatter blocks; replaced old Theory tested section with three
        formal body sections (Theory / model, Method, Empirical specifications) with
        equations transcribed from pp. 844-856 of the source PDF read this session
        (eqs. 1-11, bond yield decomposition eqs. 2-4, state-space eq. 11). Core
        results table and Attribution are unchanged from the verified version above.
        The new formal sections are extracted, not yet re-verified by paper-verifier.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF (all 41 pages
        read); all eight Core results rows confirmed correct. Equations 1-11 checked
        term-by-term against pp. 844-856: all signs, subscripts, indices, and parameters
        faithful to the PDF. Minor fix applied: R6 ILSBEI RMSE range clarified to
        "7.77-10.92 bps" (wiki had "8-11 bps"); all other numbers exact. No em-dashes;
        no colorful adjectives. Verdict pass.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-03
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-03
      role: verified
      note: >-
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF; all five
        axes confirmed correct - no fixes required.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-04
      role: extracted
      note: >-
        Added the effectiveness axis (findings[] per Core-results row,
        resultType) built from the page's already-verified Core-results table and
        relatesTo edges; existing results and sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-04
      role: verified
      note: >-
        Effectiveness axis (findings[] values/direction, resultType) re-checked
        against the source PDF; all eight entries confirmed exact - values, SEs,
        significance stars, directions, and vsBenchmark all match Tables II-VI,
        VIII-IX and Figure 10; resultType overturns consistent with contradicts
        edge on Pflueger and Viceira (2016); no fixes required.
---

**What this is.** The paper's core results, the model it builds on (an affine
no-arbitrage term structure with sovereign default), the estimation method
(Extended Kalman Filter maximum likelihood), and the empirical specifications
(IV regression, GMM): enough to know what it found and how, without reading
all 42 pages. To replicate or extend it, read the full source at
[https://doi.org/10.1111/jofi.70014](https://doi.org/10.1111/jofi.70014) (paywalled).

## TL;DR

The ILSBEI differential is a version of the TIPS-Treasury no-arbitrage
mispricing studied by Fleckenstein, Longstaff, and Lustig (2014), and this
paper extends their liquidity and slow-moving-capital account by adding a
credit risk channel. Treating U.S. default risk as nontrivial follows the
macrofinance view of U.S. sovereign CDS premia in Chernov, Schmid, and
Schneider (2020), applied here to relative bond pricing.

Using monthly U.S. data from June 2005 to December 2020, the paper
documents that the spread between the inflation-linked swap (ILS) rate and
the breakeven inflation rate (BEI), the ILSBEI differential, is
significantly positively related to two measures of U.S. sovereign default
risk: growth in Treasury debt held by the public and Euro-denominated
five-year CDS spreads. Controlling for liquidity (VIX, LIBOR-OIS, OTR
spread, HPW noise), debt growth remains a robust predictor. Treasury debt
growth is used as an instrument for CDS to address endogeneity, and
instrumented CDS loads significantly on the ILSBEI spread across tenors of
two through seven years. A new affine no-arbitrage term structure model
estimated by Extended Kalman Filter decomposes the ILSBEI spread into
credit and liquidity components: at the 10-year maturity, most of the
ILSBEI spread is explained by the credit component outside the financial
crisis. The dominant transmission channel is the correlation between
inflation dynamics and default probability (hyperinflation upon default),
not differential loss-given-default between nominal Treasuries and TIPS.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **ILSBEI differential is positively related to Treasury debt growth** (G) | Table II, p. 837 | G coef 0.013\*\*\* (level), 0.025\*\*\* (first diff); R^2 = 0.217 (level), 0.113 (FD); debt growth captures ~22% of level variation |
| R2 | **Debt growth relationship is robust to liquidity and slow-moving-capital controls** (HPW noise, LIBOR-OIS, VIX) | Table III, p. 839 | G coef 0.004\*\* (level), 0.018\*\*\* (FD) with full liquidity controls; HPW noise also significantly positive (0.053\*\*\* level); overall R^2 = 0.808 |
| R3 | **Postcrisis (2010-2020) results are qualitatively similar**; CDS is a stronger predictor than in the full sample | Table IV, p. 840 | CDS coef 0.352\*\*\* (spec 2); with both G and CDS, CDS coef 0.287\*\*\* and G coef 0.002\* |
| R4 | **Treasury debt growth is a strong instrument for CDS**; instrumented CDS is significantly positively related to ILSBEI | Table V Panel B, p. 842 | 2SLS: instrumented CDS coef on ILSBEI = 1.205\*\* (SE 0.475); on ILS = -2.174\*\*\*, on nominal TSY = -3.643\*\*; TIPS coefficient insignificant (-0.265) |
| R5 | **Effect is robust across maturities 2-7 years**; 10-year loading positive but not statistically significant | Table VI, p. 843 | Instrumented CDS on ILSBEI: 2y = 1.097\*\* (SE 0.522), 3y = 1.324\*\*\* (SE 0.511), 7y = 0.868\*\* (SE 0.341), 10y = 0.385 (SE 0.250) |
| R6 | **Term structure model fits the data well** (R^2 93-99% for ILS; 99%+ for nominals; ILSBEI R^2 81-91% for maturities 2-7y) | Table VIII, p. 859 | ILS RMSE 6-13 bps; Nominal RMSE 6-10 bps; ILSBEI RMSE 8-11 bps (range 7.77-10.92 bps across maturities); model-implied default probabilities peak at ~3% (10y) during 2008-2009 crisis |
| R7 | **Credit component of ILSBEI is small at short maturities but large at long maturities**; outside the crisis, more than half of the 10-year spread is credit | Table IX / Figure 7, pp. 859-862 | Mean credit component (Cred.): 7.57 bps (2y), 10.07 bps (3y), 14.46 bps (5y), 18.16 bps (7y), 23.05 bps (10y); credit share rises from ~46% (2y) to ~78% (10y) on average |
| R8 | **Dominant channel is inflation jump upon default** (hyperinflation), not differential LGD or default priced in SDF alone | Figure 10 / Section IV.F, pp. 865-866 | Comparative statics: inflation-upon-default channel (kappa_delta^pi) contributes 1-10 bps to ILSBEI (95% CI, orange curve); inflation/PD correlation channel contributes ~1 bp at 10y median (~3.5 bps at 97.5th percentile); default-in-SDF channel contributes near zero |

**Overall (paper's conclusion).** Credit risk can drive persistent deviations
between ILS rates and BEI rates that are often attributed solely to
liquidity. Where Pflueger and Viceira (2016) attribute the ILSBEI differential
to a liquidity premium, this paper finds credit risk is also a nontrivial
driver, especially at long maturities. The interaction between inflation
dynamics and default is the primary source of differential pricing between
nominal Treasuries and TIPS.

## Theory / model

The paper builds intuition through a one-period two-equation toy model
(Section II, p. 844) before embedding these mechanisms in the full
multivariate term structure model (Section III, p. 852).

**Toy model (Section II, eq. 1, p. 844).** The real pricing kernel and
inflation rate are:

$$
\log M^*_{t+1} = \bar{M} + \Lambda_\delta \cdot \mathbf{1}\{\delta^{(c)}_{t+1} > 0\}
$$

$$
\pi_{t+1} = \kappa_0 + \kappa_y \lambda_t + \kappa_\delta \cdot \mathbf{1}\{\delta^{(c)}_{t+1} > 0\}
$$

where $$\delta^{(c)}_{t+1}$$ is a nonnegative default process with conditional
jump probability $$\lambda_t$$, $$\Lambda_\delta > 0$$ is the price of default
risk, $$\kappa_0$$ governs average inflation, $$\kappa_y$$ is the loading of
inflation dynamics on default probability, and $$\kappa_\delta$$ is the
inflation jump upon default. Under independence (default event is transitory),
all bond prices are in closed form.

**Bond yield decomposition (eq. 2, p. 845).** Any nominal Treasury yield can
be decomposed into four parts:

$$
\begin{aligned}
R^{(n)}_t \;=\; & r^{(n)*}_t & &\text{(a) real risk-free rate} \\
               + & \bigl(r^{(n)}_t - r^{(n)*}_t\bigr) & &\text{(b) ILS} \\
               + & \bigl(R^{(n)*}_t - r^{(n)*}_t\bigr) & &\text{(c) real credit spread} \\
               + & \bigl(R^{(n)}_t - r^{(n)}_t\bigr) - \bigl(R^{(n)*}_t - r^{(n)*}_t\bigr) & &\text{(d) -ILSBEI}
\end{aligned}
$$

where $$*$$ denotes real yields and capitalization denotes defaultable bond
yields. The ILSBEI spread in component (d) is negative when the nominal
credit spread exceeds the real credit spread, that is, when nominal
Treasuries are more exposed to default than TIPS. Expanding around small
default probability $$\lambda_t$$, the nominal Treasury yield decomposes as
(eqs. 3.a-3.d, pp. 845-846):

$$
\begin{aligned}
R^{(n)}_t \;\approx\; & -\bar{M} + \lambda_t(1 - e^{\Lambda_\delta}) & &\text{(3.a: risk-free real yield)} \\
                    + & \kappa_0 + \kappa_y \lambda_t + \lambda_t e^{\Lambda_\delta}(1 - e^{-\kappa_\delta}) & &\text{(3.b: ILS)} \\
                    + & \lambda_t e^{\Lambda_\delta} \cdot \text{LGD}^* & &\text{(3.c: real credit spread)} \\
                    + & \lambda_t e^{\Lambda_\delta}(e^{-\kappa_\delta} \cdot \text{LGD} - \text{LGD}^*) & &\text{(3.d: -ILSBEI)}
\end{aligned}
$$

where $$\text{LGD}$$ ($$\text{LGD}^*$$) is the loss given default of a nominal (real) Treasury.
Equation (3.d) shows that even equal LGDs produce a nonzero ILSBEI if
$$\kappa_\delta > 0$$, that is, if there is hyperinflation upon default.

**Three channels.** The model identifies three channels through which
default affects ILSBEI (pp. 844, 865):

1. Default priced in the SDF ($$\Lambda_\delta$$): a price of default risk that
   lowers riskless real bond yields through the pricing kernel.
2. Inflation jump upon default ($$\kappa_\delta^{(\pi)}$$): hyperinflation upon
   default raises the value of inflation swaps relative to nominal
   Treasuries, widening ILSBEI.
3. Negative correlation between default probability and inflation
   ($$\kappa_y^{(\pi)} < 0$$): higher default probability predicts lower current
   inflation, lowering the ILS rate.

**Lucas tree motivation (Section II.D, p. 850).** The inflation/default
correlations arise naturally in a CRRA representative-agent Lucas tree
economy with long-run risk and a central bank following a Taylor rule with
coefficient on inflation less than one (passive monetary policy). The
passive central bank stance means the Taylor principle is violated: inflation
must fall when default probability rises, consistent with the negative
$$\kappa_y$$ in the regression results.

## Method

**Full term structure model (Section III, pp. 852-855).** The paper builds a
dynamic discrete-time affine no-arbitrage term structure model following
Monfort et al. (2020), using `affine-term-structure` and `gamma-zero-processes`
as building blocks.

**Risk factors (eqs. 5-8, pp. 852-853).** Three blocks of state variables:

Riskless real short rate driven by three Gaussian factors $$x_t$$ (eq. 5):

$$
r^{(1)*}_t = \kappa_0^{(r)} + \kappa_x^{(r)\prime} x_t
$$

with VAR(1) dynamics (eq. 6):

$$
x_t = \Phi_x x_{t-1} + \epsilon_{x,t}, \qquad \epsilon_{x,t} \sim \text{iid}\; N(0, I_3)
$$

Credit and liquidity event processes $$\delta_t = (\delta^{(c)}_t, \delta^{(l)}_t)$$
modelled as gamma-zero processes (eq. 7): for $$i \in \{c, l\}$$,

$$
\delta^{(i)}_t = \sum_{j=1}^{P^{(i)}_t} \xi^{(i)}_{j,t},
\quad \text{where } P^{(i)}_t \mid \lambda^{(i)}_t \sim \text{Poisson}(\lambda^{(i)}_t)
\text{ and } \xi^{(i)}_{j,t} \sim \text{Exp}(1/c^{(i)}_\delta)
$$

Event intensities driven by nonnegative factors $$y_t = (y^{(c)}_{1,t}, y^{(c)}_{2,t}, y^{(l)}_t)$$ following VARG dynamics (eq. 8):

$$
\begin{aligned}
\lambda^{(c)}_t &= \beta^{(c)}_{\lambda,1} y^{(c)}_{1,t} + \beta^{(c)}_{\lambda,2} y^{(c)}_{2,t} \\
\lambda^{(l)}_t &= \beta^{(l)}_\lambda y^{(l)}_t
\end{aligned}
$$

**Pricing kernel (eq. 9, p. 853):**

$$
\log(M^*_{t+1}) = -r^{(1)*}_t + \Lambda_{x,t}' x_{t+1} + \Lambda_y' y_{t+1}
                  + \Lambda_\delta \delta^{(c)}_{t+1} - \zeta_t
$$

where $$\Lambda_{x,t} = \Lambda_{0,x} + \Lambda_{1,x} x_t$$ are the prices of
riskless factor risk, $$\Lambda_y$$ are the prices of credit/liquidity factor
risk, and $$\Lambda_\delta$$ is the price of credit event risk. The structure-
preserving property of the pricing kernel ensures the model belongs to the
affine class, so all pricing formulas are in closed form.

**Inflation dynamics (eq. 10, p. 854):**

$$
\pi_t = \kappa_0^{(\pi)} + \kappa_x^{(\pi)\prime} x_t + \kappa_y^{(\pi)\prime} y_t + \kappa_\delta^{(\pi)} \delta^{(c)}_t
$$

The expected positive sign on $$\kappa_\delta^{(\pi)}$$ (hyperinflation upon
default) and expected negative sign on $$\kappa_y^{(\pi)}$$ (lower inflation when
default probability is high) are both key model predictions tested against
the data.

**Estimation (eq. 11, p. 856).** The model is cast in state-space form with
23 observable variables $$\mathbf{y}_t \in \mathbb{R}^{23}$$ (ILS, nominal yields, TIPS, CDS at
multiple maturities, OIS, CPI, TIPS liquidity proxy):

$$
\mathbf{y}_t = F(x_t, y_t, \delta_t, \theta^Q) + \eta_t, \qquad \eta_t \sim N(0, \Sigma_\eta)
$$

where $$F(\cdot)$$ is a nonlinear closed-form function summarizing the affine
pricing equations and $$\theta^Q$$ is the set of risk-neutral parameters.
Since $$F(\cdot)$$ is nonlinear (due to the gamma-zero processes), the model is
estimated by Extended Kalman Filter approximate maximum likelihood (`extended-kalman-filter`). CDS measurement error standard deviations are allowed to
depend on a CDS liquidity proxy (Grischenko and Huang (2013)) to account
for mismeasurement.

## Empirical specifications

**Baseline regression (Tables II-IV, pp. 837-840).** OLS in levels and first
differences of the five-year ILSBEI spread on measures of default risk:

$$
\text{ILSBEI}_t = \alpha + \beta G_t + \epsilon_t \qquad \text{(level)}
$$

$$
\Delta\text{ILSBEI}_t = \alpha + \beta\, \Delta G_t + \epsilon_t \qquad \text{(first diff)}
$$

- $$\text{ILSBEI}_t$$: five-year inflation-linked swap rate minus breakeven inflation rate at time $$t$$
- $$G_t$$: year-over-year log growth in Treasury debt held by the public (level regressions) or monthly log variation (first-difference)
- $$\alpha$$: intercept
- $$\beta$$: slope coefficient on default risk proxy
- $$\epsilon_t$$: error term
- Standard errors: Newey-West with three lags
- Sample: June 2005 to December 2020, monthly

Extended specification adds liquidity controls:

$$
\text{ILSBEI}_t = \alpha + \beta_G G_t + \beta_{\text{CDS}} \text{CDS}_t
                 + \beta_{\text{VIX}} \text{VIX}_t + \beta_{\text{OIS}} (L\text{-}OIS)_t
                 + \beta_{\text{OTR}} \text{OTR}_t + \beta_{\text{HPW}} \text{HPW}_t + \epsilon_t
$$

- $$G_t$$: Treasury debt growth (default risk proxy)
- $$\text{CDS}_t$$: Euro-denominated five-year U.S. sovereign CDS spread
- $$\text{VIX}_t$$: CBOE Volatility Index (liquidity/risk-aversion control)
- $$(L\text{-}OIS)_t$$: LIBOR-OIS spread (counterparty risk / liquidity control)
- $$\text{OTR}_t$$: off-the-run/on-the-run 10-year Treasury spread (liquidity control)
- $$\text{HPW}_t$$: Hu-Pan-Wang noise measure (slow-moving capital proxy)

**Instrumental variables (Tables V-VI, pp. 841-843).** Single-stage GMM
using $$G_t$$ (Treasury debt growth) as an instrument for CDS spreads.
First stage: regress each liquidity/slow-moving-capital control on $$G_t$$
to obtain orthogonalized residuals $$\text{VIX}^\perp$$, $$(L\text{-}OIS)^\perp$$, $$\text{OTR}^\perp$$,
$$\text{HPW}^\perp$$; then regress $$\text{CDS}_t$$ on $$G_t$$ and these residuals. Second stage:
regress $$\text{ILSBEI}_t$$ (and individually: ILS, nominal TSY, TIPS) on the
first-stage predicted $$\widehat{\text{CDS}}_t$$ and the orthogonalized liquidity controls.
Standard errors are Newey-West with three lags, estimated simultaneously
via single-stage GMM. Specification repeated at 2y, 3y, 5y, 7y, 10y tenors.
Identifying assumption: Treasury debt issuance decisions are exogenous to
financial market pricing frictions (p. 841).

**Term structure model estimation (Section IV, pp. 855-856).** Extended
Kalman Filter maximum likelihood on 23 observable monthly series from
November 2004 to December 2019 (data availability for TIPS liquidity proxy).
Observable variables are the term structures of ILS (2-10y), nominal
Treasuries (1-10y), TIPS (implied from BEI), sovereign CDS (5y, 10y), OIS
(6m), monthly CPI inflation, and the Grischenko-Huang TIPS liquidity index.
The riskless real one-period yield and all bond prices are derived in closed
form under the affine structure. Model parameters are estimated jointly
including $$\kappa_\delta^{(\pi)}$$, $$\kappa_y^{(\pi)}$$, $$\Lambda_\delta$$, recovery fractions,
and the TIPS disindexation rate $$\rho^*$$.

**Comparative statics (Figure 10, Section IV.F, pp. 865-866).** Sequential
counterfactuals setting $$\Lambda_\delta = 0$$, $$\kappa_\delta^{(\pi)} = 0$$, or
$$\kappa_y^{(\pi)} = 0$$ in turn, computing the deviation between fitted and
counterfactual yield curves. The median contribution of each channel to
ILSBEI is measured in basis points at each maturity, with 95% confidence
intervals across sample dates.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Gurkaynak, Sack, and Wright (GSW) zero-coupon yields (nominal Treasury and TIPS) | BEI construction; nominal yield curve estimation | no page yet (Federal Reserve Board data, publicly available) |
| Bloomberg ILS rates (zero-coupon, 2-10y maturities) | ILSBEI spread construction; model estimation target | [Bloomberg](/wiki/commercial/bloomberg/) (licensed) |
| U.S. Treasury debt held by public (monthly, Federal Reserve/Treasury) | Default risk proxy (G); instrument for CDS | [FRED](/wiki/datasets/fred/), series available via FRED |
| Euro-denominated 5-year U.S. Treasury CDS spreads | Alternative default risk measure; model estimation target | [Bloomberg](/wiki/commercial/bloomberg/) / [Markit CDS](/wiki/commercial/markit-cds/) (licensed) |
| BLS CPI-U (monthly) | Inflation measure for model | [BLS](/wiki/datasets/bls/) (CPI-U), pulled via [FRED](/wiki/datasets/fred/) series `CPIAUCSL` |
| VIX (CBOE) | Liquidity/slow-moving capital control | [FRED](/wiki/datasets/fred/), series `VIXCLS` |
| LIBOR-OIS spread | Liquidity control (counterparty risk) | no page yet |
| Off-the-run / on-the-run 10y Treasury spread (OTR) | Liquidity control | no page yet (derived from GSW and Bloomberg) |
| HPW noise measure (Hu, Pan & Wang 2013) | Slow-moving capital proxy; TIPS liquidity intensity proxy | no page yet (academic dataset, Jun Pan's website) |
| OIS 6-month rate | Short-term riskless nominal yield for model | [Bloomberg](/wiki/commercial/bloomberg/) (licensed) |

Sample: monthly, Nov 2004 to Dec 2019 (model estimation); Jun 2005 to Dec 2020 (regressions).

## When to read the full paper

Consult the original via [https://doi.org/10.1111/jofi.70014](https://doi.org/10.1111/jofi.70014)
if you are: replicating (code in journal Supporting Information); extending
the affine model to other sovereign issuers; studying how monetary policy
passivity interacts with default to generate inflation dynamics; auditing a
specific coefficient; or tracing the closed-form bond pricing derivations
(Internet Appendix Sections I-XII). The locators above point to the exact
tables and figures. For "what did this paper find," the table above is
sufficient and is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). (c) 2026 the
American Finance Association. This distillation was extracted by an LLM
on 2026-05-31 and augmented on 2026-06-01; it is **not human-verified or
independently reproduced**. The paper is paywalled; no verbatim content is
reproduced here.

> Dittmar, Robert F., Alex Hsu, Guillaume Roussellet, and Peter Simasek.
> "Default Risk and the Pricing of U.S. Sovereign Bonds." *The Journal of
> Finance* 81, no. 2 (April 2026): 829-869. DOI: 10.1111/jofi.70014.
> (c) 2026 the American Finance Association. All rights reserved.
> This page is an **extract-only distillation** by the Institute for
> Automated Research: core results summarised; no verbatim text reproduced.
