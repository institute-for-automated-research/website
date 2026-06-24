---
title: "Investor Composition and Liquidity Component: Li & Yu (2026)"
description: >-
  Distilled: The loading of U.S. corporate bond credit spreads on bid-ask spreads
  more than doubled from 2005 to 2019 as mutual funds and ETFs grew, raising the
  liquidity component from roughly 10% to 30% of credit spreads. A directed-search
  model with heterogeneous investors and bonds shows that the inflow of short-term
  investors (mutual funds, ETFs) amplifies secondary-market frictions on prices via
  both a direct trading-frequency channel and an indirect trade-delay channel.
  J. Finance 2026, paywalled. Eight core results with source locators, datasets
  used, the model, and the method with its key equations.
sidebar:
  label: Li-Yu 2026
  order: 1
tags: [paper-summary, fixed-income, liquidity, corporate-bonds, investor-composition,
       structural, panel-regression, instrumental-variables, peer-reviewed, unreplicated,
       data:wrds, data:trace, data:emaxx, data:gsw-yields, data:flow-of-funds]
paper:
  authors: Jian Li, Haiyue Yu
  authorList:
    - { family: Li, given: Jian, affiliation: Columbia Business School }
    - { family: Yu, given: Haiyue, orcid: "0000-0002-1476-2431", affiliation: Snowflake Inc. }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 871-922
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70024
  jel:
    codes: [G12, G14, G23]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics:
    - Credit Risk and Financial Regulations
    - Financial Markets and Investment Strategies
    - Banking stability, regulation, efficiency
  dataAccess: licensed-commercial
  outcome:
    - loading of credit spreads on bid-ask spreads (liquidity component of credit spreads)
    - bond turnover and number of trades
    - credit spread sensitivity to secondary-market frictions
  outcomeClass: [asset-prices]
  license: >-
    Wiley VOR license (confirmed via Crossref DOI metadata: content-version vor,
    URL http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0,
    start 2026-01-21); no CC license found. Paywalled.
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (Wiley/Journal of Finance site; confirmed via Crossref metadata 2026-06-01)
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: both
    contributes: heterogeneous-investor-bond-search-model
    family: structural
    buildsFrom: [panel-regression, instrumental-variables, gmm]
    identification: rdd
  contributionType: [new-theory, new-fact, measurement]
  mechanisms: [liquidity, search-frictions]
  scope:
    region: US
    assetClass: US corporate bonds
    period: 2005-Q2..2019-Q2
    frequency: quarterly
    dataType: [market, accounting, administrative]
    granularity: [security, firm]
    n: "15,256 unique bonds, 3,217 unique firms"
  findings:
    - { ref: R1, outcome: loading of credit spreads on bid-ask spreads (liquidity component of credit spreads), metric: coefficient, value: "beta rose from 0.54 (2005) to 1.2 (2019); IG: ~10-20 to ~60 bp/100 bp BA; HY: ~60 to ~250 bp/100 bp BA", direction: positive }
    - { ref: R2, outcome: loading of credit spreads on bid-ask spreads (liquidity component of credit spreads), metric: coefficient, value: "median liquidity component grew ~2.8x from 11.3% (first three years) to 31.4% (last three years); model predicts 6.77% in 2005 and 16.62% in 2019 (2.5x model increase)", direction: positive }
    - { ref: R3, outcome: bond turnover and number of trades, metric: coefficient, value: "second stage: 1 s.d. increase in Inv_Comp raises log No. of Trades by 75.02*** (t=8.02, full sample) and 61.62*** (t=9.69, subsample); first stage: 1_{ttm>10} coefficient on Inv_Comp = -0.00581*** (t=-5.86)", direction: positive }
    - { ref: R4, outcome: credit spread sensitivity to secondary-market frictions, metric: coefficient, value: "Inv_Comp x Bid_Ask: 48.65*** (t=6.61, full sample OLS) and 55.86*** (t=3.93, subsample IV); 1 s.d. increase in Inv_Comp associated with ~1.44 increase in the loading coefficient", direction: positive }
    - { ref: R6, outcome: loading of credit spreads on bid-ask spreads (liquidity component of credit spreads), metric: coefficient, value: "investor participation cutoff theta increases from 0.688 in 2005 to 0.766 in 2019 in calibration", direction: positive }
    - { ref: R7, outcome: credit spread sensitivity to secondary-market frictions, metric: coefficient, value: "beta_exo (direct): 0.27 (2005) to 0.35 (2019); beta_endo (indirect): 0.65 (2005) to 1.7 (2019); indirect channel accounts for more than 50% of total sensitivity by 2019", direction: positive }
  resultType: mixed
  relatesTo:
    - { cite: "Bao, Pan & Wang (2011)", doi: "10.1111/j.1540-6261.2011.01655.x", relation: builds-on, note: "uses their finding that illiquidity explains a significant part of common credit spread variation; extends by documenting the growing loading over time" }
    - { cite: "Dick-Nielsen, Feldhutter & Lando (2012)", relation: builds-on, note: "adopts their TRACE filtering and liquidity factor construction; uses their liquidity component definition (beta x BA / CS)" }
    - { cite: "Lester, Rocheteau & Weill (2015)", doi: '10.1111/jmcb.12215', relation: builds-on, note: "provides theoretical micro-foundation for bid-ask spread as fraction of trade surplus in directed search; model follows their reduced-form bid-ask spread specification" }
    - { cite: "Amihud & Mendelson (1986)", doi: '10.1016/0304-405x(86)90065-6', relation: contradicts, note: "in their model investors sort on exogenous bid-ask spreads; in this paper bid-ask spreads are endogenous and investors sort on maturity and default probability, a distinct mechanism" }
    - { cite: "Bai, Li & Manela (2022)", doi: '10.2139/ssrn.4343095', relation: cites, note: "exploits their 10-year maturity threshold discontinuity in intermediate-term bond fund mandates as an IV for investor composition" }
    - { cite: "Wu (2020)", doi: '10.2139/ssrn.3613379', relation: contradicts, note: "attributes similar trends to dealer regulation changes; this paper shows investor composition is an independent quantitative explanation even for investment-grade bonds where dealer regulation may matter less" }
  openQuestions:
    - "Evaluating the effectiveness of different quantitative easing programs, taking into account the induced change in investor base across bonds (p. 908, Conclusion)."
    - "Why investment-grade bonds suffered a larger dislocation than high-yield bonds in the COVID-19 crisis, and whether investor base shifts contributed to differential exposure to aggregate shocks (p. 908, Conclusion)."
    - "Formally incorporating a dealer sector into the model to evaluate the interaction effects between investor composition and dealer regulation changes rigorously (p. 907-908)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-01", role: extracted, note: "Full text read (pp. 871-922); eight results extracted from the PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-01", role: verified, note: "All 8 result rows re-checked against PDF: locators correct, magnitudes match (Table I, II, III, IV, V). Fixed eq. 27 (Corollary 2): numerator and denominator both had lambda^gamma / lambda^{gamma+1} where the PDF shows gamma/lambda in both positions." }
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
        introducesData, data-scope) re-checked against the source PDF; fixed
        methods.identification from "instrument" to "rdd" - the paper explicitly
        uses a regression discontinuity design (10-year maturity threshold, p.885)
        with Calonico-Cattaneo-Titiunik optimal bandwidth; contributionType,
        mechanisms, and scope fields are accurate.
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
        against the source PDF; all six findings[] values confirmed against Table I
        (R3), Table II (R4), Table III/Figure 1 (R1), Table III/footnote 33 (R2),
        Table IV (R6), and Table V Panel A (R7); directions correct; resultType
        corrected from "new-finding" to "mixed" - the page carries two contradicts
        edges (Wu 2020, Amihud and Mendelson 1986) that preclude new-finding per
        the schema discipline.
  licenceVerification:
    - { source: "Crossref REST API works/10.1111/jofi.70024", checked: "2026-06-01", by: "paper-distiller (claude-sonnet-4-6)", found: "license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2026-01-21; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1. No CC license present." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the directed-search model with two-sided
heterogeneity, and the key equations that connect investor composition to the
liquidity component of corporate bond credit spreads: enough to understand what
it found and how, without reading all 52 pages. To replicate or extend it, read
the full source at the [original](https://doi.org/10.1111/jofi.70024).

## TL;DR

Building on Bao, Pan, and Wang (2011), who find that illiquidity explains a
significant part of common credit spread variation, the paper documents that
from 2005 to 2019 the loading of U.S. corporate bond credit spreads on bid-ask
spreads more than doubled, driven by the rapid entry of mutual funds and ETFs
into the bond market. The authors document this trend and use a 10-year
time-to-maturity discontinuity in fund mandates as an instrument to show
causally that bonds held by more short-term investors have higher trading
activity and a stronger credit-spread sensitivity to secondary-market frictions.
A directed-search model with heterogeneous investors (differing in liquidity
shock frequency) and heterogeneous bonds (differing in maturity and default
probability) shows that declining risk-free rates induce more short-term
investors to reach for yield in the illiquid bond market, amplifying the effect
of secondary-market frictions on prices through two channels: a direct channel
(more frequent trading means each unit of transaction cost is incurred more
often) and an indirect channel (bid-ask spreads are correlated with
seller-buyer ratios, so trade delays are priced into credit spreads). The
calibrated model matches the observed 2.5 to 2.8x growth in the liquidity
component and shows the indirect channel accounts for more than half of
the total sensitivity by the end of the sample.

## Core results

Magnitudes and significance are as reported; `\*`, `\*\*`, `\*\*\*` = 5%, 1%, 0.1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | The loading of credit spreads on bid-ask spreads (beta) has increased significantly for both investment-grade and high-yield bonds since 2005 | Figure 1, p. 880; Figure A3, p. 910 | IG: loading rose from ~10-20 bp/100 bp BA to ~60 bp/100 bp BA by 2019; HY: from ~60 bp/100 bp BA to ~250 bp/100 bp BA; for the full sample, beta rose from 0.54 to 1.2 |
| R2 | The median liquidity component (loading x BA / CS) grew from roughly 10% to 30% of credit spreads, a ~2.8x increase | Figure 2, p. 882; §I.B, p. 881-882 | Median liq. component grew ~2.8x from pre-GFC to 2019 (11.3% in first three years of sample; 31.4% in last three years); model predicts 6.77% in 2005 and 16.62% in 2019, a 2.5x model increase |
| R3 | Bonds held by more short-term investors have significantly higher investor composition measures and significantly more trades (IV first stage and second stage) | Table I, cols. (1)-(6), p. 886 | First stage: 1_{ttm>10} coefficient on Inv_Comp = -0.00581\*\*\* (t=-5.86, full) and -0.00692\*\*\* (t=-7.24, subsample). Second stage: 1 s.d. increase in Inv_Comp raises log No. of Trades by 75.02\*\*\* (t=8.02) and 61.62\*\*\* (t=9.69) |
| R4 | Higher investor composition (more short-term investors) significantly increases the loading of credit spreads on bid-ask spreads (Inv_Comp x Bid_Ask interaction) | Table II, cols. (2) and (4), p. 887 | Inv_Comp x Bid_Ask: 48.65\*\*\* (t=6.61, full sample) and 55.86\*\*\* (t=3.93, subsample); a 1 s.d. increase in investor composition (0.03) is associated with ~1.44 increase in the loading coefficient |
| R5 | The model generates positive assortative matching: short-term investors endogenously hold short-maturity and high-default-probability bonds (Proposition 1) | §III, p. 895; Figure 3, p. 884 | Theoretical result (Prop. 1): theta'(delta+d) > 0 in equilibrium; empirically confirmed by monotone relationships in Figure 3 across 20 investor-composition bins |
| R6 | As the risk-free rate declines, more short-term investors enter the illiquid bond market, reducing the seller-buyer ratio in all submarkets (Proposition 3) | §III, p. 898; Figure 4, p. 898 | Proposition 3 result; numerically verified: cutoff theta increases from 0.688 in 2005 to 0.766 in 2019 in calibration (Table IV, p. 903) |
| R7 | The calibrated model matches the key empirical moments; the indirect channel (bid-ask spreads correlated with seller-buyer ratios) accounts for more than 50% of the total sensitivity by 2019 | Table III and Table V, pp. 903-905 | beta_exo (direct component): 0.27 in 2005, 0.35 in 2019; beta_endo (indirect component): 0.65 in 2005, 1.7 in 2019; total empirical beta: 0.54 in 2005, 1.2 in 2019 |
| R8 | The change in investor composition amplifies the effect of a dealer regulation change for short-term bonds but alleviates it for long-term bonds, highlighting the dual liquidity-provision role | §IV, p. 907; Appendix A | Qualitative result from calibration: for short-term bonds, more short-term investors amplify dealer regulation frictions; for long-term bonds, investor inflows provide liquidity that dampens the regulation effect |

**Overall (paper's conclusion).** Where Wu (2020) attributes similar trends to
dealer regulation changes, this paper shows that investor composition is an
independent quantitative explanation even for investment-grade bonds where
dealer regulation may matter less. The massive growth of mutual funds and ETFs in
the corporate bond market is quantitatively important in explaining the rising
sensitivity of credit spreads to secondary-market frictions. The model shows
this operates through two amplification channels (direct trading frequency,
indirect trade-delay pricing) and that investor composition can interact with
dealer regulatory changes in complex ways depending on bond maturity.

## Theory / model

The paper builds a directed-search model with two-sided heterogeneity: investors
differ in their liquidity shock frequency $$\theta$$ and bonds differ in their
maturity intensity $$\delta$$ and default intensity $$d$$. Time is continuous. All agents
are infinitely lived and risk-neutral.

**Investors.** Each period measure $$m_I$$ of new investors enter with discount rate
$$\rho$$. Investor $$j$$ faces liquidity shocks arriving at Poisson rate $$\theta_j \in
[\bar{\theta}, +\infty)$$, a permanent feature with CDF $$F(\cdot)$$ and PDF $$f(\cdot)$$. Upon a
liquidity shock an investor becomes impatient and values flow coupon at a
discount $$\Delta$$ units less. The effective flow to an impatient investor is thus
$$r_i - \Delta$$ (p. 889, §II.A).

**Bonds.** There is a continuum of bonds indexed by $$i \in I$$. Bond $$i$$ has face value 1,
coupon $$r_i$$ (determined in equilibrium), matures at rate $$\delta_i$$, and defaults at
Poisson intensity $$d_i$$ with recovery $$s_i$$. Bonds are ordered so that $$\delta_i + d_i
\leq \delta_j + d_j$$ for $$i \leq j$$ (p. 889, §II.A.2).

**Secondary market and bid-ask spread.** In each submarket (indexed by bond type
and price), sellers search for buyers via a Cobb-Douglas matching function
(p. 890, II.A.2):

$$
m(\alpha_{s,i},\, \alpha_{b,j}) = \eta \cdot \alpha_{s,i}^{\gamma} \cdot \alpha_{b,j}^{1-\gamma}, \quad \eta > 0,\; \gamma \in (0,1)
$$

Following the reduced-form bid-ask spread specification of Lester, Rocheteau,
and Weill (2015), which micro-founds the bid-ask spread as a fraction of the
trade surplus in directed search, the bid-ask spread decomposes into an
endogenous component $$\xi$$ (proportional to the trade surplus) and an exogenous
component $$\epsilon_{\xi}$$ capturing dealers' balance sheet conditions:

$$
P_{b,i,t} - P_{s,i,t} = \xi_i + \epsilon_{\xi,i} \tag{9}
$$

$$
\text{Assumption 1:} \quad \xi_i = \kappa \bigl(V_{h,i}(\theta) - V_{b,i}(\theta) - V_{s,i}\bigr), \quad \kappa \in (0,1) \tag{14}
$$

**Value functions.** The HJB equation for a patient bondholder of type $$\theta$$
holding bond $$i$$ is (eq. 10, p. 891):

$$
\rho \, V_{h,i}(\theta) = r_i + \delta_i \bigl(1 - V_{h,i}(\theta)\bigr)
                           + d_i \bigl(s_i - V_{h,i}(\theta)\bigr)
                           + \theta \bigl(V_{s,i} - V_{h,i}(\theta)\bigr) \tag{10}
$$

The seller's HJB is (eq. 11, p. 892):

$$
\rho \, V_{s,i} = r_i - \Delta + \delta_i \bigl(1 - V_{s,i}\bigr)
              + d_i \bigl(s_i - V_{s,i}\bigr)
              + \mu_s\!\bigl(\lambda(i, P_s)\bigr) \bigl(P_s - V_{s,i}\bigr) \tag{11}
$$

The buyer's HJB for type $$\theta$$ searching in bond $$i$$'s submarket is (eq. 12,
p. 892):

$$
\rho \, V_{b,i}(\theta) = \mu_b\!\bigl(\lambda(i, P_s)\bigr) \bigl(V_{h,i}(\theta) - V_{b,i}(\theta) - P_{b,i}\bigr) \tag{12}
$$

where $$\mu_b(\lambda) = \eta \lambda^{\gamma}$$ and $$\mu_s(\lambda) = \eta \lambda^{\gamma-1}$$
are the buyer and seller meeting intensities given Cobb-Douglas matching.

**Equilibrium conditions.** In equilibrium buyers are indifferent between
primary and secondary markets:

$$
V_{h,i}(\theta) - 1 = V_{b,i}(\theta) \tag{15}
$$

The investor participation decision features a cutoff strategy: investors with
$$\theta < \bar{\theta}(r_f)$$ hold risk-free assets; those with $$\theta \geq \bar{\theta}$$
participate in the bond market. As $$r_f$$ decreases, the cutoff falls and more
short-term investors enter (Proposition 3, p. 898).

**Equilibrium characterization.** Unlike Amihud and Mendelson (1986), where
investors sort on exogenous bid-ask spreads, here bid-ask spreads are endogenous
and investors sort on maturity and default probability. Under Assumption 1 and
$$\epsilon_{\xi} = 0$$, Proposition 1 (p. 895) establishes positive assortative
matching: $$\theta'(\delta+d) > 0$$.
Proposition 2 (p. 896) characterizes the full equilibrium as a system of ODEs
in $$\bar{\delta} = \delta + d$$ (eq. 24, p. 896):

$$
\begin{cases}
\lambda'(\bar{\delta}) = \dfrac{\lambda \left[\frac{1-\gamma}{\alpha_b}\,\lambda - \frac{\gamma}{\alpha_b}\,\theta'\!\left(\frac{1}{\alpha_b} + (1-\gamma)\!\left(\frac{1}{\rho} + \frac{1}{\alpha_b}\right)\right)\right]}{\gamma(1-\gamma)(\rho + \bar{\delta} + \theta)} \\[10pt]
\theta'(\bar{\delta}) = \dfrac{\bar{\delta} + \rho\,\alpha_s / (\rho + \mu_s + \bar{\delta} + d)}{m_I\, f(\theta)}
\end{cases} \tag{24}
$$

with boundary conditions $$\theta(\bar{\delta} + \bar{d}) = \bar{\theta}$$ and
$$\theta(\bar{\delta}_{\text{end}} + \bar{d}) = \bar{\theta}_{\text{end}}$$.

**Interest rate and credit spread sensitivity.** In equilibrium the interest
rate for bond $$j$$ is (Lemma 2, eq. 26, p. 899):

$$
r = \frac{\rho}{\rho + \delta + \theta} + \frac{d(1-s)}{\rho + \delta + \theta} + \frac{\theta\,\Delta}{\rho + \delta + \theta} + [\text{exo and endo bid-ask spread terms}] \tag{26}
$$

The sensitivity of the interest rate to exogenous bid-ask spread changes is
(Corollary 2, eq. 27, p. 900):

$$
\frac{dr}{d\epsilon_{\xi}} = \frac{\dfrac{\theta}{\rho+\delta+\theta}\cdot\dfrac{\gamma}{\lambda} - \dfrac{\rho+\delta}{\rho}\cdot(1-\gamma)}{\left(\dfrac{1}{\mu_s} + \dfrac{1-\kappa}{\rho+\delta+\theta}\right)\dfrac{\gamma}{\lambda} + \left(\dfrac{1-\kappa}{\rho} + \dfrac{1}{\mu_b}\right)(1-\gamma)} \tag{27}
$$

When $$r_f$$ decreases (more short-term investors enter), $$dr/d\epsilon_{\xi}$$ increases
for all bonds.

## Method

The paper applies two complementary methods: reduced-form panel regressions
with an instrumental variables (IV) design, and a calibrated structural model
solved via ordinary differential equations (ODEs).

**Reduced-form evidence.** The baseline cross-sectional regression is
(eq. 1, p. 880):

$$
\text{CS}_{i,t} = \alpha_t + \beta_t \cdot \text{BA}_{i,t} + \gamma_t^T X_{i,t} + \epsilon_{i,t} \tag{1}
$$

Run quarter by quarter; $$X_{i,t}$$ includes bond characteristics (bond age,
time-to-maturity, coupon, offering amount, rating) and firm characteristics
(leverage, size, profitability, equity volatility, total asset value) and
industry fixed effects. Standard errors are clustered at the firm level.

The liquidity component is defined following Dick-Nielsen, Feldhutter, and
Lando (2012) as (eq. 2, p. 881):

$$
\text{liquidity\_component}_{i,t} = \frac{\beta_t \times \text{BA}_{i,t}}{\text{CS}_{i,t}} \tag{2}
$$

**Investor composition measure.** Fund-level net transaction rate (eq. 3, p. 882):

$$
\text{net\_transaction}_{j,t} = \frac{\left|\sum_i \text{holding}_{i,j,t} - \sum_i \text{holding}_{i,j,t-1}\right|}{\sum_i \text{holding}_{i,j,t-1}} \tag{3}
$$

Smoothed over four quarters (eq. 4, p. 883):

$$
\text{NT}_{j,t} = \frac{1}{4} \sum_{t'=1}^{4} \text{net\_transaction}_{j,t-t'} \tag{4}
$$

Bond-level investor composition (eq. 5, p. 883):

$$
\text{investor\_comp}_{i,t} = \frac{\sum_j \text{holding}_{i,j,t} \times \text{NT}_{j,t}}{\sum_j \text{holding}_{i,j,t}} \tag{5}
$$

**Instrumental variables design.** Exploiting the 10-year time-to-maturity
threshold in intermediate-term bond fund mandates documented by Bai, Li, and
Manela (2022) as a sharp discontinuity, using the two-stage specification
(eqs. 6-7, pp. 885-886):

First stage: $$\text{Inv\_Comp}_{i,t} = \alpha + \beta_1 \cdot \mathbf{1}_{\text{ttm}>10} + \gamma^T X_{i,t} + \epsilon_{i,t}$$

Second stage: $$Y_{i,t} = \alpha + \beta_1 \cdot \widehat{\text{Inv\_Comp}}_{i,t} + \gamma^T X_{i,t} + \epsilon_{i,t}$$

with optimal bandwidth around the 10-year cutoff (Calonico, Cattaneo, and
Titiunik 2014). Also instruments the interaction term $$\text{Inv\_Comp} \times \text{BA}$$ with
$$\mathbf{1}_{\text{ttm}>10} \times \text{BA}$$ for the credit-spread loading regression (eq. 8, p. 886):

$$
\text{CS}_{i,t} = \alpha + \beta_1 \cdot \text{BA}_{i,t} + \beta_2 \cdot \widehat{\text{Inv\_Comp}}_{i,t}
           + \beta_3 \cdot \text{BA}_{i,t} \times \widehat{\text{Inv\_Comp}}_{i,t} + \gamma^T X_{i,t} + \epsilon_{i,t} \tag{8}
$$

Standard errors are clustered by industry and time; estimation uses demeaned
bid-ask spreads for interpretability.

**Calibration.** The structural model is calibrated to annual-level moments
for bonds with 2 to 15 years to maturity ($$\bar{\delta} \in [1/15,\, 0.5]$$).
Parameters are set to match six moments in 2005 and 2019: bond turnover rates,
the loading coefficient on bid-ask spreads, average credit spreads, average
bid-ask spreads, and the ratio of residualized standard deviations (Table III,
p. 903). The model is then simulated for $$N = 1{,}000$$ bonds and the following
regression run on simulated data to obtain the model-implied $$\beta$$:

$$
\text{CS}_i = \beta_0 + \beta \cdot \text{BA}_i + \beta_M \cdot \delta_i + \epsilon_i \tag{32}
$$

The mechanism decomposition separates the loading into an exogenous component
(eq. 34, p. 904):

$$
\text{CS}_i = \beta_0 + \beta_{\text{exo}} \cdot \epsilon_{\xi,i} + \beta_M \cdot \delta_i + \epsilon_i \tag{34}
$$

and an endogenous component (eq. 35, p. 905):

$$
\text{CS}_i = \beta_0 + \beta_{\text{endo}} \cdot \text{BA}_{\text{endo},i} + \beta_M \cdot \delta_i + \epsilon_i \tag{35}
$$

where $$\text{BA}_{\text{endo},i}$$ is the endogenous part of bid-ask spreads with $$\epsilon_{\xi}$$ set
to zero.

## Empirical specifications

All regressions are quarterly, 2005Q2 to 2019Q2, on U.S. corporate debentures
with fixed coupon, nonconvertible, nonputtable, and nonexchangeable. The primary
sample excludes bonds that have more than 95% of days with no trading. Bonds
with ratings below CCC- are excluded.

**Aggregate trend (R1, R2).** Regression (1) run quarter by quarter on all
bonds using WRDS bid-ask spreads; standard errors clustered at the firm level
(Figure 1, p. 880). The aggregate loading $$\beta_t$$ and the liquidity component
median are the key time-series outcomes.

**Cross-sectional analysis, investor composition effects (R3).** Table I
(p. 886) reports the first-stage and second-stage IV regressions using the
10-year maturity threshold as an instrument, with bandwidth 1.699 for the full
sample and 2.282 for the subsample with maturity > 10 years at issuance.
Controls include time-to-maturity, age, coupon, log amount outstanding, firm
total assets, fraction of long-term debt, leverage ratio, profitability, equity
price volatility, slope and level of Treasury yields, and rating x industry x
date fixed effects.

**Credit spreads and bid-ask spreads interaction (R4).** Table II (p. 887)
reports four specifications of regression (8): full sample OLS, full sample IV,
subsample OLS, subsample IV. Investor composition is instrumented with
$$\mathbf{1}_{\text{ttm}>10}$$; the interaction $$\text{Inv\_Comp} \times \text{BA}$$ is instrumented with $$\mathbf{1}_{\text{ttm}>10} \times \text{BA}$$.
Standard errors are clustered by industry and time. The key finding is the
significant positive coefficient on $$\text{Inv\_Comp} \times \text{Bid\_Ask}$$ (48.65\*\*\* OLS full
sample; 55.86\*\*\* IV subsample).

**Structural equilibrium and calibration (R5-R7).** The model is simulated in
2005 and 2019 with calibrated parameters (Table IV, p. 903). The mechanism
decomposition (Table V, p. 905) shows $$\beta_{\text{exo}} = 0.27/0.35$$ (2005/2019) vs
empirical $$\beta = 0.54/1.2$$, confirming the indirect channel (via seller-buyer
ratio correlation) must explain the remainder. The indirect loading
$$\beta_{\text{endo}} = 0.65/1.7$$ matches the total pattern.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| TRACE (Enhanced, FINRA) | Corporate bond transaction prices and volumes for bid-ask spread calculation, number of trades, bond turnover; filtered following Dick-Nielsen (2014) | [TRACE](/wiki/commercial/trace/) (licensed) |
| WRDS Bond Return database + Mergent FISD | Bond characteristics: maturity, coupon, rating, offering amount, issuance date; credit spreads calculated from reported yields minus matched Treasury yield | [WRDS](/wiki/commercial/wrds/) (licensed) |
| CRSP equity returns | Equity price volatility for bond issuers | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| Compustat annual fundamentals | Firm characteristics: leverage, size, profitability, total asset value, fraction of long-term debt | [WRDS / Compustat](/wiki/commercial/wrds/) (licensed) |
| Lipper eMaxx (Thomson Reuters) | Quarterly investor holdings of corporate bonds at the CUSIP level for insurance companies, mutual funds, ETFs, and annuities; covers 40-50% of total bonds outstanding | [no page yet] |
| Flow of Funds (Federal Reserve) | Aggregate corporate and foreign bond holdings by investor type for benchmarking eMaxx coverage | [no page yet] |
| Gurkaynak, Sack & Wright (2007) Treasury yield curve | Used to calculate credit spreads by subtracting matched Treasury yields | [no page yet] |

Sample: 2005Q2 to 2019Q2 (58 quarters, quarterly). Primary analysis covers
U.S. corporate debentures with fixed coupon; 15,256 unique bonds, 3,217 unique
firms (cross-sectional sample with eMaxx coverage > 20%).

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70024) if you are:
investigating the corporate bond liquidity premium and its time-series variation;
building or calibrating a model of OTC bond markets with heterogeneous investors;
studying how the growth of mutual funds and ETFs affects bond market fragility;
evaluating the interaction between investor-side and dealer-side regulatory changes;
or replicating the regression discontinuity design around the 10-year maturity
threshold. The locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2), April 2026. This
distillation was extracted by an LLM on 2026-06-01 and is **not human-verified
or independently reproduced**. The article is paywalled; redistribution is
extract-only. Access the original at [https://doi.org/10.1111/jofi.70024](https://doi.org/10.1111/jofi.70024).

> Li, Jian, and Haiyue Yu. "Investor Composition and the Liquidity Component
> in the U.S. Corporate Bond Market." *The Journal of Finance* 81, no. 2
> (April 2026): 871-922. DOI: 10.1111/jofi.70024.
> (c) 2026 the American Finance Association.
