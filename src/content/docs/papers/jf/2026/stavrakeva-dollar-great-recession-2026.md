---
title: "The Dollar during the Great Recession: Stavrakeva & Tang (2026)"
description: >-
  Distilled: U.S. forward guidance easings during the Great Recession (Dec 2008
  to Sep 2012) caused the dollar to appreciate, not depreciate, against both
  advanced-economy and emerging-market currencies, reversing the conventional
  wisdom. The paper attributes this to an information channel: forward guidance
  signaled economic weakness, triggering a flight-to-safety effect and lower
  expected U.S. inflation. J. Finance 2026, paywalled. Eight core results with
  source locators, datasets used, the partial-equilibrium model, and the
  high-frequency local projection method.
sidebar:
  label: Stavrakeva-Tang 2026
  order: 1
tags: [paper-summary, macro, exchange-rates, monetary-policy, flight-to-safety,
       forward-guidance, information-effect, event-study, panel-regression,
       peer-reviewed, unreplicated,
       data:eurodollar-futures, data:blue-chip-forecasts, data:vix]
paper:
  authors: Vania Stavrakeva, Jenny Tang
  authorList:
    - { family: Stavrakeva, given: Vania, affiliation: London Business School }
    - { family: Tang, given: Jenny, affiliation: Federal Reserve Bank of Boston }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 971-1010
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70025
  topics:
    - Global Financial Crisis and Policies
    - Monetary Policy and Economic Impact
    - Economic Theory and Policy
  dataAccess: licensed-commercial
  outcome:
    - log exchange rate change (USD vs advanced and emerging-market currencies)
    - S&P 500 and MSCI World log equity return
    - risk aversion (VIX, Bekaert-Engstrom-Xu index)
    - components of exchange rate and equity price changes (interest rate, currency risk premium, inflation, dividend growth)
  license: >-
    Paywalled (Wiley VOR terms confirmed via Crossref DOI metadata:
    content-version vor, URL http://onlinelibrary.wiley.com/termsAndConditions#vor,
    delay-in-days 0, start 2026-01-27; TDM licence also present)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (Wiley site, confirmed via Crossref licence metadata 2026-06-01)
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: both
    contributes: information-channel-fg
    family: reduced-form-causal
    buildsFrom: [event-study, panel-regression, affine-term-structure]
  scope:
    region: global
    assetClass: currency (USD vs 9 advanced + 15 emerging market), US equities, global equities
    period: 1990-01..2019-12
    frequency: daily
  relatesTo:
    - { cite: 'Nakamura & Steinsson (2018)', doi: '10.1093/qje/qjy004', relation: builds-on, note: 'high-frequency monetary policy identification using interest-rate futures (the "information effect" framing)' }
    - { cite: 'Swanson (2021)', doi: '10.1016/j.jmoneco.2020.09.003', relation: extends, note: 'decomposes FOMC surprises into FG and LSAP factors; Stavrakeva-Tang use these factors to verify that the sign reversal is driven by FG alone, not QE' }
    - { cite: 'Tang (2015)', relation: builds-on, note: 'information-channel model of monetary policy signaling; Stavrakeva-Tang build a partial-equilibrium extension with exchange rates and stock prices' }
    - { cite: 'Melosi (2017)', relation: builds-on, note: 'signaling model of monetary policy with heterogeneous agents; co-inspires the theoretical framework here' }
    - { cite: 'Andrade et al. (2019)', doi: '10.1257/mac.20180141', relation: builds-on, note: 'forward guidance with heterogeneous beliefs; informs the information-effect model structure' }
    - { cite: 'He, Kelly & Manela (2017)', doi: '10.1016/j.jfineco.2017.08.002', relation: cites, note: 'intermediary capital ratio used as an SDF proxy for measuring currency hedging quality (Figure 3, Panel B)' }
    - { cite: 'Montiel Olea & Plagborg-Moller (2021)', relation: builds-on, note: 'lag-augmented local projection inference method used for all impulse response estimation' }
    - { cite: 'Rogers, Scotti & Wright (2018)', doi: '10.1111/jmcb.12511', relation: contradicts, note: 'find conventional-sign dollar responses to unconventional policy at longer horizons using a monthly VAR with sign restrictions that rule out the information channel by assumption' }
  openQuestions:
    - 'Whether the information channel was a special feature of calendar-based forward guidance (Dec 2008 to Sep 2012) or could recur under analogous ZLB-adjacent forward guidance regimes in other economies (p. 1007).'
    - 'Why cross-currency heterogeneity in the exchange rate response aligns with hedging quality and carry-trade properties; the paper documents the pattern and provides a model explanation but notes that further microfounding the carry-trade mechanism is beyond its scope (p. 992).'
    - 'Whether the findings generalize to other central banks that have used calendar-based forward guidance (p. 1007).'
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Full text read (pp. 971-1010); eight results extracted from the
        paywalled PDF. Not human-verified. Not reproduced. Replication code
        referenced in the paper ("Supporting Information: Replication Code")
        but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF;
        R1-R4 and R6-R8 locators and numbers confirmed correct. R5 and the
        TL;DR had the equity price direction inverted (stated "prices fell"
        during GR in response to easings; PDF Figure 5 and p. 986-987 show
        the response is positive = prices rose, with the pre/post-GR
        pattern being negative); R5 headline, magnitude, and TL;DR corrected.
        R6 parenthetical "(lower VIX = higher risk aversion)" removed as
        misleading. R8 parenthetical "(falling equity prices)" corrected to
        reflect the positive GR response. All equations (eqs. 1-24) verified
        term-by-term against PDF; no transcription errors found. Frontmatter
        facts, resultsCount, venue, DOI, and author affiliations confirmed.
        No em-dashes or colorful adjectives detected.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70025
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0]: content-version=vor,
        URL=http://onlinelibrary.wiley.com/termsAndConditions#vor,
        delay-in-days=0, start=2026-01-27. No CC licence detected.
        Paper is paywalled (Wiley standard VOR terms).
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the partial-equilibrium model of the
information channel, and the high-frequency local projection method: enough to
understand what was found and why, without reading all 40 pages. To replicate
or extend the results, read the full source at the
[original](https://doi.org/10.1111/jofi.70025).

## TL;DR

During the Great Recession (December 2008 to September 2012), U.S. forward
guidance (FG) easings caused the dollar to persistently appreciate against both
advanced-economy and emerging-market currencies, three to four weeks after each
FOMC announcement. This is the opposite of the conventional wisdom that
monetary easing depreciates the domestic currency. The appreciation coincided
with the release of detailed FOMC meeting minutes and was driven entirely by
FG, not QE. Outside the Great Recession, FG easings caused equity prices to fall (information effect); during the Great Recession, the pattern reversed and equity prices rose in response to FG easings, with the switch occurring about three to four weeks post-announcement. The paper builds a partial-equilibrium model showing this occurs when FG has a
dominant information effect: calendar-based FG signals economic weakness,
triggering a flight to safety, raising investor risk aversion, and lowering
expected U.S. inflation relative to foreign inflation. Cross-sectional
heterogeneity confirms the mechanism: the dollar appreciated most against
currencies that are poor hedges (those that tend to depreciate when the U.S.
economy contracts), consistent with a flight-to-safety story.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF. Coefficients in Tables I-III are multiplied
by 100 for presentation.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | During the Great Recession, a positive U.S. FG surprise (unexpected easing) led to a **persistent and large dollar appreciation** against advanced-economy currencies (opposite to pre- and post-GR periods) | Table I, p. 980; Figure 1, p. 979 | Non-QE GR coefficient at horizon 50 days: -37.68\*\*\* (SE 11.89); pre-GR coefficient at same horizon: 2.26 (0.00 R2); post-GR: 8.11 |
| R2 | The sign reversal against **emerging-market currencies** mirrors the advanced-economy result, with a similarly large eventual depreciation against USD | Table II, p. 981; Figure 1, p. 979 | Non-QE GR coefficient at horizon 50 days: -34.27\*\*\* (SE 10.18); pre-GR: 3.12; post-GR: 13.99\* |
| R3 | The sign reversal is driven **entirely by FG, not QE**: using Swanson (2021) LSAP and FG factors, FG carries the appreciation and LSAP does not | Table III, p. 983; Figure 2, p. 982 | FG coefficient for advanced economies at 90 days: -0.72 (0.72 SE); LSAP coefficient: 1.07\* (0.53 SE). FG dominates at intermediate horizons (40-80 days): e.g. day 40, FG: -0.85\* (0.47), LSAP: 0.43 (0.25) |
| R4 | The dollar appreciation is **larger for currencies that are worse hedges** (higher covariance with U.S. SDF proxies), consistent with the flight-to-safety channel | Figure 3, p. 985; Figure 4, p. 986 | A one-standard-deviation worse hedge quality is associated with about 10 percentage points larger dollar appreciation at 90 days; statistically significant for SDF-covariance measures |
| R5 | FG easings during the GR caused **equity prices to rise** (S&P 500 and MSCI World peak ~30 pp for all announcements and ~100 pp for non-QE surprises at ~40-60 days post-announcement); outside GR, easing led to equity price declines (information effect) | Figure 5, p. 987; Figure 6, p. 988 | S&P 500 non-QE GR: positive response peaking near 100 pp at ~40-60 days; all-announcement GR: positive response peaking near 30 pp; conventional negative near-term response of close to 10 pp reversed after the minutes release; pre- and post-GR coefficients negative (easing → equity falls) |
| R6 | The paper interprets the response of its risk-aversion proxies (VIX and the Bekaert-Engstrom-Xu index) to FG easings during the GR as **increased risk aversion**, three to four weeks post-announcement | Figure 7, p. 1001 | Peak effect at ~60 days: estimated log VIX response is nearly -50 pp and log BEX risk aversion index about -25 pp (coefficient negative and statistically significant for non-QE surprises); the paper reads this negative estimated response, through its flight-to-safety mechanism, as increased risk aversion (p. 1001, and pp. 973-974) |
| R7 | The structural break in exchange rates is driven by **currency risk premia and inflation expectations, not the nominal interest rate component** | Figure 8, p. 1004; §III.B, p. 1002 | Interest rate component response is small and conventional in sign across all subsamples; currency premia and inflation residual carries the sign reversal during GR (Figure 8, Panel B) |
| R8 | The structural break in equity prices is driven by **equity risk premia and dividend growth expectations**, not the nominal rate component | Figure 9, p. 1005; §III.B, p. 1002 | Interest rate component of equity price response is small and pushes in the conventional direction; equity risk premia and dividend growth component carries the large positive response (equity prices rising in response to FG easings) during GR, while it is the dominant channel for the negative responses outside GR |

**Overall (paper's conclusion).** The Great Recession was a period where the
information content of U.S. forward guidance dominated the direct interest-rate
channel: investors interpreted FG promises of low rates as bad news about
growth, raising risk aversion and triggering a flight to safety. This generated
dollar appreciation in response to policy easings, contrary to standard
macroeconomic predictions. This contrasts with Rogers, Scotti, and Wright
(2018), who find conventional-sign dollar responses to unconventional policy
at longer horizons using a monthly VAR with sign restrictions that rule out
the information channel by assumption. Equity prices also rose in response to FG easings
during this period (reversing the pre- and post-GR pattern where easings led to
equity price declines due to the information effect). The finding implies that
models of exchange rates and asset prices need to incorporate the information
channel of monetary policy, especially during periods of high fundamental
uncertainty and calendar-based forward guidance.

## Theory / model

The paper proposes a partial-equilibrium daily model of the U.S. economy and
a marginal investor SDF. The model is purposefully stripped down to illustrate
how the information channel can qualitatively reconcile the empirical facts.
Building on the information-channel model of monetary policy signaling in
Tang (2015), it adds a partial-equilibrium extension with exchange rates and
stock prices.
The signaling model of monetary policy with heterogeneous agents in Melosi
(2017) co-inspires the theoretical framework, and the forward guidance with
heterogeneous beliefs in Andrade et al. (2019) informs the information-effect
model structure.

**U.S. macroeconomic block** (pp. 989-990, eqs. 3-5). Log inflation and real
output follow:

$$
\pi^{us}_t = \alpha \, y^{us}_t \tag{3}
$$

$$
y^{us}_t = -v(i^{us}_t - \pi^{us}_t) + \varepsilon^{y,us}_t \tag{4}
$$

with a Taylor rule:

$$
i^{us}_t = \phi^y y^{us}_t + \phi^\pi \pi^{us}_t + \varepsilon^{mp,us}_t
$$

where $$\varepsilon^{y,us}_t \sim N(0, \sigma^2_y)$$ is the demand shock and
$$\varepsilon^{mp,us}_t \sim N(0, \sigma^2_{mp})$$ is the monetary policy shock.
Solving the system (eq. 5, p. 990):

$$
\begin{aligned}
y^{us}_t  &= \frac{\varepsilon^{y,us}_t - v\,\varepsilon^{mp,us}_t}{1+v\kappa} \\
\pi^{us}_t &= \frac{\alpha(\varepsilon^{y,us}_t - v\,\varepsilon^{mp,us}_t)}{1+v\kappa} \\
r^{us}_t  &= \frac{\kappa\,\varepsilon^{y,us}_t + \varepsilon^{mp,us}_t}{1+v\kappa}
\end{aligned}
$$

where $$\kappa = \phi^y + \alpha(\phi^\pi - 1)$$.

**Investor SDF and pricing conditions** (pp. 990-991, eqs. 6-7). The real
log SDF is $$\text{sdf}_{t,t+1} = \ln(\beta) - \rho_t \Delta c_{t+1} - c_t \Delta \rho_t$$
with CRRA preferences. The exchange rate pricing condition is:

$$
E_t\!\left[ \text{SDF}_{t,t+1} \cdot e^{-\pi_{t+1}} \cdot \left((1+i^{us}_t) - \frac{S_{t+1}}{S_t}(1+i^i_t)\right) \right] = 0 \tag{6}
$$

and the equity pricing condition:

$$
E_t\!\left[ \text{SDF}_{t,t+1} \cdot \left(e^{r^{eq}_{t+1}} - (1+i^{us}_t)\right) \right] = 0 \tag{7}
$$

**Currency risk premium** (p. 991, eqs. 8-10). The expected excess return
from being long the U.S. bond and short currency $$i$$:

$$
\lambda_t = E_t[\Delta s_{t+1}] - \tilde{i}_t
          = \frac{\sigma^2_s}{2} + \sigma_{\pi,s} + \rho_t \, \sigma_{c,s} \tag{10}
$$

**Risk aversion is countercyclical** (eq. 12, p. 991):

$$
\rho_t = \rho_y \, y^{us}_t, \quad \rho_y < 0 \tag{12}
$$

so a negative demand shock raises risk aversion, consistent with habit
formation and intermediary asset pricing.

**Information channel mechanics** (pp. 992-995, eqs. 14-16). The central
bank receives a private signal $$\tilde{\varepsilon}^{y,us,CB}_{t+1} = \varepsilon^{y,us}_{t+1} + \hat{\varepsilon}_{t+1}$$
about future demand. Investors initially believe the signal is less precise
(market perception variance inflated by $$q^{CB}_{t+l} = \hat{q}_{CB} > 0$$ for
$$l < l^m$$, where $$l^m$$ is the date of the FOMC minutes release). At the
FG announcement, investors apply Bayes' rule:

$$
E_{t+l}[y^{us}_{t+h}] - E_t[y^{us}_{t+h}] = K_{t+l} \cdot a_{t+1}, \quad 1 \leq l < h \tag{15}
$$

where $$K_{t+l}$$ (eq. 16, p. 994) is:

$$
K_{t+l} = \frac{(\kappa+\alpha)\,\sigma^2_y/\sigma^2_{mp} - \left((\sigma^2_{\varepsilon,CB}+q^{CB}_{t+l})/\sigma^2_y + 1\right)v\eta}{(\kappa+\alpha)^2\,\sigma^2_y/\sigma^2_{mp} + \left((\sigma^2_{\varepsilon,CB}+q^{CB}_{t+l})/\sigma^2_y + 1\right)\eta^2} \tag{16}
$$

When $$\sigma^2_y/\sigma^2_{mp}$$ is large (high fundamental uncertainty relative to
policy uncertainty), $$K_{t+l} > 0$$: a negative FG surprise (lower rates
promised) causes investors to revise down expected future GDP, raising risk
aversion and triggering the flight-to-safety channel. The bias $$q^{CB} > 0$$
makes $$K < 0$$ on the FOMC day itself but turns positive once minutes are
released (at $$l = l^m$$, $$q^{CB} = 0$$), generating the delayed reversal in
estimated impulse responses.

**Exchange rate decomposition** (pp. 995-997, eqs. 17-21). The exchange
rate change is decomposed into:

$$
\Delta s_{t+l,t} = \psi^{EH}_{t+l,t} + \psi^{\lambda}_{t+l,t} + \psi^{LR}_{t+l,t}
$$

- $$\psi^{EH}_{t+l,t}$$: interest rate differential component
- $$\psi^{\lambda}_{t+l,t}$$: currency risk premium component
- $$\psi^{LR}_{t+l,t}$$: long-run inflation / real exchange rate component

The derivative of the currency risk premium component with respect to the
FG announcement (eq. 20, p. 996):

$$
\frac{d\,\psi^{\lambda}_{t+l,t}}{d\,a_{t+1}} = -\rho_y \, \sigma_{c,s} \, K_{t+l} \tag{20}
$$

Since $$\rho_y < 0$$ and $$K_{t+l} > 0$$ when the information channel dominates,
this derivative is positive (dollar appreciates) for currencies where
$$\sigma_{c,s} < 0$$ (currencies that are poor hedges: they tend to depreciate
when U.S. consumption/output falls). The interest rate component is
unconditionally positive and independent of $$K_{t+l}$$, so it pushes in the
conventional direction; the structural break requires the flight-to-safety and
inflation channels to dominate.

## Method

The estimation strategy is the lag-augmented local projection (LALP) of
Montiel Olea and Plagborg-Moller (2021), applied to high-frequency monetary
policy surprises. The high-frequency monetary policy identification using
interest-rate futures, and the "information effect" framing, follows Nakamura
and Steinsson (2018). The approach builds on `event-study` identification and
`panel-regression` for the cross-currency specification, and uses
`affine-term-structure` models disciplined by survey forecasts for the channel
decomposition.

**Monetary policy surprise** (p. 977). The surprise $$mp_\tau$$ is the change in
Eurodollar futures expiring three quarters hence (ED4) over a one-hour window
(15 minutes before to 45 minutes after) around FOMC announcements and
QE announcements made outside regular FOMC meetings. ED4 captures
unconventional policy during the ZLB period (Swanson (2021)).

**Baseline impulse response regression** (eq. 1, p. 977):

$$
\bar{s}_{\tau+n} - \bar{s}_{\tau-1} = \alpha_n + \beta^{\Delta s}_n \, mp_\tau + \gamma_n(\bar{s}_{\tau-1} - \bar{s}_{\tau-2}) + \text{error}_{\tau,n} \tag{1}
$$

- $$\bar{s}_t = \frac{1}{K}\sum_{k=1}^K s_{k,t}$$: average log exchange rate across $$K$$ currencies (units of currency $$k$$ per USD)
- $$\beta^{\Delta s}_n$$: impulse response at horizon $$n$$ ($$n = 0,\ldots,90$$ days)
- Sample: full sample with pre-GR, GR, and post-GR subsamples estimated separately
- SE: Newey-West, lag length set to the maximum number of overlapping FOMC dates within the estimation window for each horizon

**Cross-currency heterogeneity regression** (eq. 2, p. 984):

$$
s_{k,\tau+n} - s_{k,\tau-1} = \alpha_{k,n} + \beta^{\Delta s}_n \, mp_\tau + \beta^{\text{hedge}}_n \cdot \text{hedge}_k \cdot mp_\tau + \gamma_{n,h}(s_{k,\tau-1} - s_{k,\tau-2}) + \text{error}_{\tau,n} \tag{2}
$$

- $$\text{hedge}_k$$: currency $$k$$'s hedging quality (covariance of exchange rate change with the SDF proxy: log S&P 500, log intermediary capital ratio, or U.S. minus country $$k$$ average interest rate differential), standardized to unit variance
- $$\beta^{\text{hedge}}_n$$: measures how the response to tightening varies with hedge quality
- Fixed effects: currency-specific intercept $$\alpha_{k,n}$$
- Sample: GR non-QE subsample (19 dates)

**Channel decomposition** (eqs. 23-24, p. 1002). The estimated
$$\beta^{\Delta s}_n$$ is decomposed by replacing the dependent variable with each
exchange rate change component estimated from an affine term structure VAR
disciplined by Blue Chip Financial Forecasts survey data:

$$
\beta^{\Delta s}_n = \beta^{\psi^{EH}}_n + \beta^{\psi^{\lambda}+\psi^{LR}}_n \tag{23}
$$

and analogously for equity prices:

$$
\beta^{\Delta p^{eq}}_n = \beta^{\psi^{EH,eq}}_n + \beta^{\psi^{\lambda,eq}+\psi^{D,eq}}_n \tag{24}
$$

**FG vs QE separation** (pp. 977-978). Two complementary approaches: (i)
restrict to FOMC announcement dates without QE announcements (19 of 33 GR
dates); (ii) use the Swanson (2021) principal-component-identified FG and LSAP
factors with sign restrictions.

## Empirical specifications

All specifications use daily frequency data. The main sample for exchange rates
is 1990 through 2019 (173 pre-GR observations, 33 GR observations, 60 post-GR
observations). The GR subsample spans December 16, 2008 through September 13,
2012.

**Exchange rate outcome (R1, R2).** Baseline regression (eq. 1) using average
log exchange rate changes against 9 advanced-economy currencies (AUD, CAD, CHF,
EUR/DEM pre-1999, GBP, JPY, NOK, NZD, SEK) and 15 emerging-market currencies
(BRL, CLP, COP, CZK, ILS, INR, ISK, KRW, MXN, PHP, RUB, SGD, THB, TRY, ZAR).
Pegged-regime observations excluded. Newey-West SE with horizon-specific lags.
Fixed effects: date-of-announcement intercept $$\alpha_n$$.

**FG vs. LSAP factor comparison (R3).** Same dependent variable, but monetary
policy surprise replaced by the (negated) LSAP factor and the FG factor from
Swanson (2021). Sample: July 5, 1991 through June 19, 2019 with GR subsample
December 16, 2008 through September 13, 2012. 30 GR observation dates for each
factor (Table III, p. 983).

**Cross-currency heterogeneity (R4).** Panel regression (eq. 2) on GR non-QE
subsample (19 dates), with currency-specific fixed effect $$\alpha_{k,n}$$ and
interaction $$\beta^{\text{hedge}}_n$$. Three hedge quality proxies used separately
(Figure 3, p. 985; Figure 4, p. 986).

**Risk aversion outcome (R6).** Dependent variable replaced by log VIX or log
Bekaert-Engstrom-Xu (2022) risk aversion index. Otherwise same regression as
eq. 1. Full sample 1990-2019 (Figure 7, p. 1001).

**Channel decomposition (R7, R8).** Affine term structure VAR (three-factor,
discipline by Blue Chip Financial Forecasts) for advanced economies to extract
interest rate component. Residual is the currency risk premium and inflation
component (exchange rates) or the equity risk premium and dividend growth
component (equity prices). Results in Figures 8-9, pp. 1004-1005. Robustness:
measurement error in interest rate expectations proxied and found to push
against the main findings (footnote 33, p. 1003).

**Uncertainty measures (R3, §III.C).** Jurado-Ludvigson-Ng (2015) 12-month
macroeconomic uncertainty, GDP forecast dispersion from Blue Chip Financial
Forecasts (25th-75th percentile range), and Baker-Bloom-Davis (2016) monetary
policy uncertainty index, all standardized 1990-2019 (Table IV, p. 1006).
GR subsample means significantly higher for macro uncertainty and GDP
dispersion; monetary policy uncertainty declines slightly, supporting the
high-$$\sigma^2_y / \sigma^2_{mp}$$ interpretation.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Eurodollar futures (ED4), daily, 15-min window around FOMC | Monetary policy surprise measure; identification instrument | no page yet |
| Daily bilateral nominal exchange rates (24 currencies, 1990-2019) | Primary outcome variable (log changes against USD) | no page yet |
| Swanson (2021) FG and LSAP factors | Alternative surprise decomposition separating forward guidance from QE | no page yet |
| S&P 500 and MSCI World daily total return indices | Equity price outcome variable | no page yet |
| VIX (CBOE Volatility Index), daily | Risk aversion proxy; additional testable implication | no page yet |
| Bekaert, Engstrom, and Xu (2022) risk aversion index, daily | Risk aversion proxy (alternative to VIX) | no page yet |
| Blue Chip Financial Forecasts survey (GDP forecasts) | Discipline affine-term-structure VAR; measure GDP forecast dispersion | [no page yet] |
| Jurado, Ludvigson, and Ng (2015) macro uncertainty index | Measure macroeconomic uncertainty; explain why GR was special (Table IV) | no page yet |
| Baker, Bloom, and Davis (2016) monetary policy uncertainty index | Measure monetary policy uncertainty; complement to JLN in Table IV | no page yet |
| He, Kelly, and Manela (2017) intermediary capital ratio | Proxy for marginal investor SDF (alternative hedge quality measure) | no page yet |

Sample: 1990 through 2019 for most series; GR subsample December 16, 2008
through September 13, 2012 (33 FOMC-adjacent observations). Pegged-regime
observations excluded per Ilzetzki, Reinhart, and Rogoff (2022) classification.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70025) if you are:
decomposing the channels through which FG shocks transmit to asset prices (the
Internet Appendix contains the affine term structure VAR, formal derivations,
and robustness tables); extending the model to binding-ZLB environments or
non-U.S. central banks; building on the cross-currency hedging heterogeneity
result (Figures 3-4 and the supporting regressions); or evaluating whether
the information channel was also operative outside the Dec 2008 to Sep 2012
window. The locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). This distillation was
extracted by an LLM on 2026-06-01 and is **not human-verified or independently
reproduced**. The paper is paywalled; no PDF is hosted here. Extract only.

> Stavrakeva, Vania, and Jenny Tang. "The Dollar during the Great Recession:
> The Information Channel of U.S. Monetary Policy and the 'Flight to Safety'."
> *The Journal of Finance* 81, no. 2 (April 2026): 971-1010.
> DOI: 10.1111/jofi.70025. (c) 2026 the American Finance Association.
> All rights reserved. Paywalled; this page is an extract-only distillation.
