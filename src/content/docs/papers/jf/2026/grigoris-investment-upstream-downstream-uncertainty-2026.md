---
title: "Investment under Upstream and Downstream Uncertainty: Grigoris & Segal (2026)"
description: >-
  Distilled: upstream (supplier-level) uncertainty reduces firm investment,
  hiring, and working capital while downstream (customer-level) uncertainty
  has a weaker and often positive effect; the asymmetry is amplified for
  long time-to-build firms and scales to the macro level. J. Finance 2026,
  paywalled. Nine core results with source locators, datasets used, and the
  theory tested.
sidebar:
  label: Grigoris-Segal 2026
  order: 1
tags: [paper-summary, corporate-investment, uncertainty, supply-chains, real-options, production-networks, macro, panel-regression, peer-reviewed, unreplicated, data:wrds, data:factset-revere, data:bea-io, data:compustat-segments, data:nber-ces, data:fred]
paper:
  authors: Fotis Grigoris, Gill Segal
  authorList:
    - { family: Grigoris, given: Fotis, affiliation: "Tippie College of Business, University of Iowa" }
    - { family: Segal, given: Gill, affiliation: "Kenan-Flagler Business School, University of North Carolina at Chapel Hill" }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 413–457
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70010
  license: 'Paywalled. Crossref DOI metadata returns Wiley VOR terms (content-version vor, URL onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0, start 2025-12-22) and a TDM licence; no Creative Commons licence found. Artifact p. 413: copyright 2025 the American Finance Association.'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley site; checked 2026-05-31)'
  redistribution: extract-only
  resultsCount: 9
  citedByCount: 1
  jel:
    codes: [G31, D81, E22]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics: ['Capital Investment and Risk Analysis', 'Market Dynamics and Volatility', 'Innovation and Knowledge Management']
  dataAccess: licensed-commercial
  outcome:
    - firm investment rate
    - employment and working capital growth
    - aggregate GDP, consumption, and investment growth
  outcomeClass: [firm-real-outcomes, macro-aggregates]
  methods:
    role: both
    contributes: upstream-downstream-uncertainty
    family: structural
    buildsFrom: [real-options, value-function-iteration, panel-regression, smooth-local-projections]
    identification: selection-on-observables
  contributionType: [new-theory, new-fact, measurement]
  mechanisms: [networks]
  scope:
    region: US
    assetClass: US equities (CRSP/Compustat non-financial, non-utility firms)
    period: 1976-01..2019-12
    frequency: mixed
    dataType: [market, accounting, other]
    granularity: [aggregate, industry, firm]
    n: "17,456-50,786 firm-years (Table III); macro 1976Q1-2019Q4"
  relatesTo:
    - { cite: 'Bloom (2009)', doi: '10.3982/ecta6248', relation: builds-on, note: 'canonical bad-news-principle channel that upstream uncertainty operates through; the paper decomposes total uncertainty into upstream vs. downstream components' }
    - { cite: 'Bernanke (1983)', relation: builds-on, note: 'bad news principle that motivates why upstream uncertainty delays investment unambiguously' }
    - { cite: 'Majd and Pindyck (1987)', doi: '10.1016/0304-405x(87)90059-6', relation: extends, note: 'time-to-build real-option model extended to stochastic volatility and supply-chain location of uncertainty' }
    - { cite: 'Alfaro, Bloom, and Lin (2024)', doi: '10.1086/726230', relation: builds-on, note: 'IV strategy for supply-chain uncertainty used in robustness section (§III.F / §VIII.D of Internet Appendix)' }
    - { cite: 'Acemoglu, Akcigit, and Kerr (2016)', doi: '10.1086/685961', relation: tests, note: 'production-network propagation of shocks; paper tests analogous channels for second-moment (uncertainty) shocks' }
    - { cite: 'Barnichon and Brownlees (2019)', doi: '10.1162/rest_a_00778', relation: builds-on, note: 'smooth local projections (SLPs) used for macrolevel impulse response estimation (eq. 13)' }
    - { cite: 'Antras and Chor (2018)', doi: '10.4324/9781351061544-5', relation: builds-on, note: 'upstreamness measure from BEA I-O tables used to construct macrolevel upstream-downstream industry classification (eq. 12)' }
  openQuestions:
    - 'The paper leaves the theoretical exploration of policies that increase time-to-market entry (e.g., more trials and testing) for future research, noting they may promote investment if downstream uncertainty is dominant (p. 454).'
    - 'The causal interpretation of the downstream-investment relation is suggestive; the paper notes that if the relation is noncausal, its sign still contrasts with the typical negative uncertainty-growth association (p. 416, fn. 3).'
    - 'The macrolevel analysis uses aggregate proxies for upstream and downstream uncertainty; extending the decomposition to other countries or asset classes is not explored (pp. 444-454).'
  replicationCode:
    status: available
  findings:
    - { ref: R1, outcome: firm investment rate, metric: coefficient, value: "-0.03 (t = -2.80)", direction: negative }
    - { ref: R2, outcome: firm investment rate, metric: coefficient, value: "+0.03 (t = 3.15)", direction: positive }
    - { ref: R3, outcome: employment and working capital growth, metric: coefficient, value: "upstream significant negative all four outcomes; downstream working capital t = 2.18-3.32", direction: mixed }
    - { ref: R4, outcome: firm investment rate, metric: coefficient, value: "0.03-0.06 (t = 3.15-4.60)", direction: positive, vsBenchmark: "long vs. short time-to-build firms; Wald test rejects equality at 10%" }
    - { ref: R5, outcome: firm investment rate, metric: coefficient, value: "LowReverse -0.05 (t = -3.31); HighReverse -0.03 (t = -1.42)", direction: mixed, vsBenchmark: "low-reversibility firms show larger upstream suppression than high-reversibility" }
    - { ref: R6, outcome: firm investment rate, metric: coefficient, value: "HighReverse +0.05 (t = 3.60); LowReverse +0.02 (t = 1.32)", direction: mixed, vsBenchmark: "high-reversibility firms show significant positive downstream effect; low-reversibility insignificant" }
    - { ref: R7, outcome: aggregate GDP, consumption, and investment growth, metric: sd-effect, value: "IP and GDP -0.15 SD; consumption and investment -0.10 SD", direction: negative }
    - { ref: R8, outcome: aggregate GDP, consumption, and investment growth, metric: sd-effect, value: "+0.10 SD for at least 4 quarters; P/D ratio +0.10 SD for ~12 quarters", direction: positive, vsBenchmark: "upstream impacts up to 50% larger in absolute magnitude" }
    - { ref: R9, outcome: aggregate GDP, consumption, and investment growth, metric: coefficient, value: "orthogonal downstream uncertainty spike in March 2020", direction: positive, vsBenchmark: "downstream dominance consistent with short-lived recession vs. upstream-driven recessions" }
  resultType: new-finding
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 413–457); nine results extracted from the PDF. Not human-verified. Not reproduced. Replication code is available as Supporting Information but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; R4 magnitude range corrected from "0.05-0.06 (t=3.24-4.60)" to "0.03-0.06 (t=3.15-4.60)" to include Panel B sector-proxy columns of Table V; all other eight rows confirmed correct.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Added methods, scope, relatesTo, openQuestions,
        replicationCode, and proposedVocab frontmatter from PDF read this
        session. Replaced the old Theory tested section with three formal body
        sections (Theory / model, Method, Empirical specifications) with
        equations transcribed from pp. 421-424 and 437-447 of the source PDF.
        Core results table and licenceVerification are unchanged from the
        verified pass above. New formal sections are extracted, not yet
        re-verified.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        All nine result rows re-checked term-by-term against source PDF; R1
        (Table III col. 4: -0.03, t=-2.80), R2 (col. 6: +0.03, t=3.15), R3
        (Table IV all panels), R4 (Table V: Long coef 0.03-0.06,
        t=3.15-4.60, prior fix confirmed correct), R5 (Table VI col. 2:
        LowReverse -0.05 t=-3.31, HighReverse -0.03 t=-1.42), R6 (col. 4:
        HighReverse +0.05 t=3.60, LowReverse +0.02 t=1.32), R7 (Figure 6
        p. 448: IP and GDP -0.15 SD, consumption and investment -0.10 SD),
        R8 (Figure 7 p. 449: all four macro variables +0.10 SD, PD ratio
        ~12 quarters, upstream 50% larger), R9 (Figure 9 / p. 453: orthogonal
        downstream spike March 2020) all confirmed correct. Frontmatter
        authors/year/venue/DOI/resultsCount confirmed. No em-dashes or
        colorful adjectives found. No corrections needed.
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
        introducesData, data-scope) re-checked against the source PDF;
        granularity corrected from [aggregate, firm] to [aggregate, industry, firm]
        (BEA I-O industry upstreamness scores are the unit in the macro analysis);
        all other axes confirmed correct.
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
        against the source PDF; R1-R8 values and directions all confirmed against
        Tables III-VI and Figures 6-7; R9 direction confirmed (positive downstream
        spike in March 2020 per Figure 9 / p. 453) but metric "coefficient" is a
        minor imprecision since no numerical coefficient is reported for this
        figure-based observation; resultType "new-finding" consistent with
        relatesTo edges (builds-on and extends only, no confirmed or overturned
        prior finding); no corrections applied.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70010
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0] content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-22; license[1] content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1; no CC licence present'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 45 pages. To replicate or extend
it, use the [original](https://doi.org/10.1111/jofi.70010) (paywalled) or
the replication code available in the journal's Supporting Information.

## TL;DR

Using granular supplier-customer link data from Compustat Segments and
FactSet Revere (1976-2019), the paper measures each firm's upstream
(supplier-level) and downstream (customer-level) uncertainty as the
realized stock return volatility of its trading partners. Upstream
uncertainty robustly suppresses investment, hiring, and working capital.
Downstream uncertainty has a weaker and often positive effect, flipping
sign for firms with long time-to-build periods. A production-based
real-option model with time-to-build generates this asymmetry: upstream
uncertainty raises the option value of waiting via the bad news principle,
while downstream uncertainty raises the opportunity cost of waiting via the
good news principle (convex future cash flows). The asymmetry scales to the
macro level: macrolevel upstream (downstream) uncertainty negatively
(positively) predicts GDP growth, consumption, investment, and
price-dividend ratios.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. All
firm-level independent variables are scaled by their unconditional
standard deviation. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Upstream uncertainty negatively predicts firm investment** | Table III col. (4), p. 438 | 1-SD increase: investment rate -0.03 (t = -2.80)\*\*\*; firm + year FE, controls |
| R2 | **Downstream uncertainty positively predicts firm investment** | Table III col. (6), p. 438 | 1-SD increase: investment rate +0.03 (t = 3.15)\*\*\*; firm + year FE, controls |
| R3 | **Asymmetry extends to working capital, employment, COGS, and intangibles** | Table IV, p. 439 | Upstream: significant negative in all four outcomes; downstream: positive (working capital t=2.18-3.32) or insignificant (employment, intangibles); upstream effect weakly larger in absolute value |
| R4 | **Downstream uncertainty effect on investment is stronger for long time-to-build firms** | Table V, p. 442 | Long vs. short interaction: coef 0.03-0.06 (t=3.15-4.60)\*\*\* across three proxies (depreciation, sector, R&D); Wald test rejects equality at 10% in all specs |
| R5 | **Upstream uncertainty effect on investment is amplified for low-reversibility (hard-to-abandon) firms** | Table VI col. (2), p. 443 | LowReverse: -0.05 (t=-3.31)\*\*\*; HighReverse: -0.03 (t=-1.42, insignificant) |
| R6 | **Downstream uncertainty effect on investment is stronger for high-reversibility firms** | Table VI col. (4), p. 443 | HighReverse: +0.05 (t=3.60)\*\*\*; LowReverse: +0.02 (t=1.32, insignificant) |
| R7 | **Macrolevel upstream uncertainty shock leads to economic contraction** | Figure 6, p. 448 | 1-SD shock: industrial production and GDP fall ~0.15 SD, consumption and investment fall ~0.10 SD; P/D ratio falls ~0.10-0.15 SD; effects persist ~4 quarters (90% CI excludes zero) |
| R8 | **Macrolevel downstream uncertainty shock leads to economic expansion** | Figure 7, p. 449 | 1-SD shock: industrial production, consumption, investment, and GDP rise ~0.10 SD for at least 4 quarters; P/D ratio rises ~0.10 SD for ~12 quarters; upstream impacts up to 50% larger in absolute magnitude |
| R9 | **COVID-19 onset was driven by downstream uncertainty spike, consistent with fast recovery** | Figure 9 / §IV.C, pp. 451-452 | Orthogonal downstream uncertainty spiked in March 2020 (while upstream uncertainty also rose); downstream dominance consistent with the recession being short-lived relative to upstream-driven recessions |

**Overall (paper's conclusion).** Uncertainty is not uniformly contractionary:
downstream uncertainty may have an expansionary impact. The asymmetry
arises from the time-to-build mechanism and the real-option structure of
investment, not from the magnitude of uncertainty.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP / Compustat (via WRDS), 1976-2019 | Investment rates, firm characteristics (size, leverage, tangibility, Tobin's q, profitability, past returns), stock return volatility | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Compustat Segments database, 1976-2002 | Supplier-customer links for early subsample (pre-FactSet) | no page yet |
| FactSet Revere Relationship database, 2003-2019 | Supplier-customer links (primary source for post-2003 period; more comprehensive than Segments) | no page yet |
| NBER-CES Manufacturing Industry database | Validates link between input price uncertainty and supplier return volatility; upstream and downstream price correlation check | [NBER-CES](/wiki/datasets/nber-ces/) |
| BEA Input-Output (Make and Use) tables, 1977-2012 | Industry upstreamness scores for macrolevel analysis; published every 5 years | no page yet |
| FRED (VIX, industrial production index) | VIX used in COVID-19 episode illustration; IP index as macro outcome variable | [FRED](/wiki/datasets/fred/) |

Sample: firm-year panel 1976-2019; ~17,000-50,786 observations depending on
specification (Table III). Macrolevel analysis: 1976Q1-2019Q4.

## Theory / model

The paper builds a production-based real-option model with time-to-build
(Section II, pp. 421-434). It extends the time-to-build real-option model of
Majd and Pindyck (1987) to stochastic volatility and to the supply-chain
location of uncertainty. The focal firm has assets-in-place (installed
capacity $$k_t$$, depreciating at rate $$\delta$$) and a growth option to expand.
Operating cash flow per period (eq. 1, p. 421):

$$
\pi_t = P_t^{\text{Out}} \cdot k_t^{\alpha} - \omega \cdot k_t - P_t^{\text{In}} \cdot \delta \cdot k_t
$$

- $$P_t^{\text{Out}}$$ is the stochastic output price
- $$P_t^{\text{In}}$$ is the stochastic input price
- $$\alpha \in (0,1)$$ is returns to scale
- $$\omega$$ is a proportional operating cost

The last term captures maintenance (replacing
depreciated inputs purchased at the current input price).

Both input and output log-prices follow mean-reverting stochastic volatility
processes (eqs. 2-3, p. 422). For $$j \in \{\text{In}, \text{Out}\}$$:

$$
\begin{aligned}
p^j_{t+1} &= \rho_p \, p^j_t + \sigma_p \exp\!\left(\sigma^j_t / 2\right) \epsilon^j_{t+1} \\
\sigma^j_{t+1} &= \rho_\sigma \, \sigma^j_t + \sigma_w \, \eta^j_{t+1}
\end{aligned}
$$

- $$p^j_t = \log(P^j_t)$$; innovations $$\epsilon$$ and $$\eta$$ are i.i.d. standard normal
- $$\rho_p$$ governs price persistence
- $$\rho_\sigma$$ governs volatility persistence
- $$\sigma_w$$ governs the volatility of volatility

The firm's recursive Bellman equation (eq. 4, p. 422), choosing future
capacity $$k'$$ to maximize cum-dividend value $$V(k, \Gamma)$$, where
$$\Gamma = [p^{\text{In}}, \sigma^{\text{In}}, p^{\text{Out}}, \sigma^{\text{Out}}]$$:

$$
V(k, \Gamma) = \max_{k'} \left\{ \pi(k, \Gamma) + \Phi(k, k') +
  \max\!\begin{cases}
    P^{\text{In}}(k - k') & \text{if } k' \leq k \text{ (Contraction)} \\
    -f \cdot k - P^{\text{In}} \cdot w_1(k' - k) + \beta \, \mathbb{E}[V^{\text{Build}}(k, k', \Gamma, H-1)] & \text{if } k' > k \text{ (Expansion)}
  \end{cases}
\right\}
$$

- $$f$$ is the fixed cost of expansion
- $$w_1$$ is the fraction of excess capacity purchased in period 1 of time-to-build
- $$V^{\text{Build}}$$ (eq. 5, p. 423) is the firm's continuation value during the build-up stage

The price of the focal firm's input equals the output price of its supplier
$$s$$, and its output price equals the input price of its customer $$c$$
(eq. 8, p. 424):

$$
P_t^{\text{In}} = P_t^{s,\text{Out}} \qquad \text{and} \qquad P_t^{\text{Out}} = P_t^{c,\text{In}}
$$

This links the focal firm's input and output price uncertainty to its
trading partners' fundamentals. The observable proxy for each uncertainty
type is the realized stock return volatility of the supplier (customer)
over a rolling window (eq. 9, p. 424):

$$
\begin{aligned}
\sigma_t^{\text{Upstream}}   &= \operatorname{Std}(R^s_{t-W}, \ldots, R^s_t) \\
\sigma_t^{\text{Downstream}} &= \operatorname{Std}(R^c_{t-W}, \ldots, R^c_t)
\end{aligned}
$$

**Key asymmetry (pp. 428-431).** The paper builds on the canonical
bad-news-principle channel of Bloom (2009) by decomposing total uncertainty
into upstream and downstream components. Both uncertainties increase the option
value of waiting (bad news principle, Bernanke 1983). Only downstream
uncertainty also raises the opportunity cost of waiting: during
time-to-build, forgone revenues are a convex function of the future output
price (the firm can disinvest if the price falls), so higher downstream
uncertainty raises the cost of delay. Upstream uncertainty is unaffected
because all input purchases are made up front. Net result: upstream
uncertainty unambiguously suppresses investment; downstream uncertainty can
hasten investment when the time-to-build period is sufficiently long.

Four testable hypotheses (§II.C.4, p. 434):

1. Upstream-investment association is unambiguously negative.
2. Downstream-investment association is weaker in absolute value, can be positive.
3. Downstream effect is more positive for firms with longer time-to-build.
4. Harder-to-abandon firms show a more negative (less positive) upstream
   (downstream) effect.

## Method

**Model solution.** The model is solved numerically by value function
iteration (Section II.B, p. 425). Gaussian autoregressive processes are
discretized using a Tauchen (1986) variant that allows time-varying
conditional volatility, similar to Alfaro et al. (2024). The state space
uses a refined, endogenous grid for capital centered around the stochastic
steady state, with a dense grid near the free boundaries where the growth
option is exercised. The model is calibrated at the quarterly frequency
(Table I, p. 425); key parameters: $$\alpha = 0.40$$, $$\beta = 0.997$$,
$$\delta = 0.025$$, $$f = 0.020$$, $$\rho_p = 0.950$$, $$\sigma_p = 0.200$$.
Model-implied moments (Table II, p. 426) match $$\sigma(I/K) = 0.165$$ and
skewness $$= 0.626$$ in the data within the 95% confidence interval.

This builds on `real-options` and `value-function-iteration`; the macrolevel
evidence builds on `smooth-local-projections`.

**Uncertainty measures.** Upstream (downstream) uncertainty is the
equal-weighted average realized daily stock return volatility of
the firm's suppliers (customers), computed over the prior calendar year
using CRSP daily data. Firm-level supplier-customer networks are identified
from Compustat Segments (1976-2002) and FactSet Revere (2003-2019), merged
to maximize coverage.

## Empirical specifications

All firm-level regressions (Section III, pp. 434-443) are estimated on a
firm-year panel of CRSP/Compustat firms (NYSE, AMEX, NASDAQ, excl.
financials SIC 6000-6999 and utilities SIC 4900-4999), 1976-2019.
Standard errors are clustered at the firm level. Each independent variable
is scaled by its unconditional standard deviation.

**Baseline investment regression (eq. 10, p. 437; R1-R3):**

$$
y_{i,t} = \alpha_i + \delta_t + \beta_1 \cdot \sigma(\text{Own})_{i,t}
          + \beta_2 \cdot \sigma(\text{SupplyChain})_{i,t} + \gamma' Z_{i,t} + \epsilon_{i,t}
$$

- $$\sigma(\text{SupplyChain}) \in \{ \sigma(\text{Upstream}),\, \sigma(\text{Downstream}) \}$$
- $$y_{i,t}$$ is the investment rate (I/K) of firm $$i$$ at time $$t$$, measured from the most recent annual report as of June $$t$$
- $$\alpha_i$$ = firm fixed effects; $$\delta_t$$ = year fixed effects
- $$\sigma(\text{Own})_{i,t}$$ is the firm's own stock return volatility
- $$Z_{i,t}$$ includes firm size, leverage, tangibility, Tobin's q, profitability, and past returns (Leary and Roberts 2014)
- Sample: OLS, firm + year FE; ~17,456-50,786 observations (Table III, p. 438)

The same equation with $$y$$ replaced by working capital growth,
employment growth, COGS growth, or intangibles growth gives Table IV results
(R3).

**Time-to-build heterogeneity regression (eq. 11, p. 440; R4):**

$$
y_{i,t} = \alpha_i + \delta_t + \beta_1 \cdot \sigma(\text{Own})_{i,t}
          + \beta_2 \cdot \sigma(\text{Downstream})_{i,t} \times I[\text{Long}]_{i,t}
          + \beta_3 \cdot \sigma(\text{Downstream})_{i,t} \times I[\text{Short}]_{i,t}
          + \gamma' Z_{i,t} + \epsilon_{i,t}
$$

- $$I[\text{Long}]$$ and $$I[\text{Short}]$$ are indicator variables for long and short time-to-build firms
- Three proxies: (i) inverse depreciation rate, (ii) sector (nondurables/services = short; investment goods/durables = long, Gomes et al. 2009), (iii) R&D intensity
- The null $$H_0: \beta_2 = \beta_3$$ (Wald test) is rejected at 10% in all specifications (Table V, p. 442)

The same interaction structure is used to test reversibility heterogeneity
(Table VI, p. 443), replacing $$I[\text{Long}]$$ with $$\text{HighReverse}$$ / $$\text{LowReverse}$$
(Kim and Kung 2017 capital redeployability measure).

Where Acemoglu, Akcigit, and Kerr (2016) study the production-network
propagation of shocks, the paper tests analogous channels for second-moment
(uncertainty) shocks at the macro level.

**Macrolevel impulse responses (eq. 13, p. 447; R7-R8):** Smooth local
projections (SLPs, Barnichon and Brownlees 2019) estimated for forecast
horizons $$h \in \{1, \ldots, H\}$$ quarters:

$$
y_{t+h} = \beta_{0(h)} + \beta_{1(h)} y_t + \beta_{2(h)} \sigma_{U,t}
           + \beta_{3(h)} \sigma_{D,t} + \sum_{p=1}^{P} \gamma'_{p(h)} \Gamma_{t-p}
           + \epsilon_{t+h}
$$

- $$y_{t+h}$$ is one of: quarterly real growth rates of industrial production, consumption, private investment, GDP, and the level of market price-dividend ratio and risk-free rate
- $$\sigma_{U,t}$$ ($$\sigma_{D,t}$$) is macrolevel upstream (downstream) uncertainty, constructed as the value-weighted average realized volatility of firms classified in the top (bottom) 10th percentile of the industry upstreamness score (eq. 12), built on the upstreamness measure from BEA I-O tables of Antras and Chor (2018) to form the macrolevel upstream-downstream industry classification
- $$\Gamma_{t-p}$$ includes the dependent variable, both macrolevel uncertainties, excess market return, term spread, default spread, and inflation
- $$P = 4$$ lags; 1976Q1-2019Q4 quarterly data; all variables standardized
- SE/CIs: IRFs plotted with 90% confidence intervals (Figures 6-7, pp. 448-449)

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70010) (institutional
access required) if you are: replicating (code in Supporting Information);
extending the supply-chain uncertainty measures or time-to-build
heterogeneity tests; auditing the IV strategy or the macrolevel SLP
estimates; or reviewing the COVID-19 application in §IV.C. The locators
above point to the exact table or figure.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026.
© 2025 the American Finance Association. This distillation was
extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The paper is paywalled; no CC licence is
present in Crossref metadata or on the artifact. Reproduction of the
verbatim text requires a licence from the publisher.

> Grigoris, Fotis, and Gill Segal. "Investment under Upstream and Downstream
> Uncertainty." *The Journal of Finance* 81, no. 1 (February 2026): 413–457.
> DOI: 10.1111/jofi.70010. Extract-only; all rights reserved by the
> American Finance Association / Wiley.
