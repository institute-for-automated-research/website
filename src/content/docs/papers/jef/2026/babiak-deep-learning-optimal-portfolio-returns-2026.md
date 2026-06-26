---
title: "Deep Learning, Predictability, and Optimal Portfolio Returns: Babiak & Barunik (2026)"
description: >-
  Distilled: Deep feedforward and LSTM recurrent neural networks deliver
  economically significant gains in certainty-equivalent returns and Sharpe ratios
  over linear predictive regressions for a two-asset optimal US equity portfolio.
  Journal of Empirical Finance 2026, paywalled. Six core results with source
  locators, datasets used, the investor model, and the neural network method with
  its defining equations.
sidebar:
  label: Babiak & Barunik 2026
  order: 1
tags: [paper-summary, asset-pricing, return-predictability, machine-learning, neural-networks,
       portfolio-optimization, equities, peer-reviewed, unreplicated, data:welch-goyal, data:nber-cycles]
paper:
  authors: Mykola Babiak, Jozef Baruník
  authorList:
    - { family: Babiak, given: Mykola, orcid: 0000-0002-9277-3937, affiliation: Lancaster University Management School }
    - { family: Baruník, given: Jozef, orcid: 0000-0001-5097-2607, affiliation: "Charles University; Czech Academy of Sciences, Institute of Information Theory and Automation" }
  year: 2026
  venue: Journal of Empirical Finance 87 (2026) 101705
  venueShort: J. Empir. Finance 2026
  tier: lower
  doi: 10.1016/j.jempfin.2026.101705
  jel:
    codes: [C45, C53, E37, G11, G17]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Stock Market Forecasting Methods', 'Monetary Policy and Economic Impact']
  dataAccess: public
  outcome:
    - certainty-equivalent return of two-asset optimal portfolio
    - monthly Sharpe ratio of optimal portfolio
    - out-of-sample R-squared of return forecasts
  outcomeClass: [security-returns]
  license: 'All rights reserved (Elsevier B.V. © 2026; no CC or OA license; text and data mining rights explicitly reserved, per Crossref licence record checked 2026-06-25)'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Elsevier/ScienceDirect, 2026-06-25)'
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 2
  methods:
    role: applies-method
    family: ml
    buildsFrom: [time-series-forecasting, lstm-recurrent-network]
    identification: descriptive
  contributionType: [new-fact]
  scope:
    region: US
    assetClass: US equities (S&P 500 index)
    period: 1945-01..2018-12
    frequency: monthly
    dataType: [market, other]
    granularity: [aggregate]
    n: "Monthly S&P 500 excess log returns, Jan 1945-Dec 2018; portfolio evaluation Feb 1955-Dec 2018"
  findings:
    - { ref: R1, outcome: out-of-sample R-squared of return forecasts, metric: oos-r-squared, value: "LSTM OOS-R2-q = 1.6% (p=0.002); NN1 = 7.1% (p=0.006), NN2 = 5.1% (p=0.007), NN3 = 5.6% (p=0.002); OLS1 = -2.5%, OLS2 = -3.6%, OLS3 = -8.0%, OLS4 = -2.5%", direction: positive, vsBenchmark: "vs constant-mean EH benchmark; all OLS models negative" }
    - { ref: R2, outcome: certainty-equivalent return of two-asset optimal portfolio, metric: cer, value: "LSTM 10.007% (p=0.000, SR=0.175); EH 4.737% (SR=0.049); NN1 7.295%, NN2 6.984%", direction: positive, vsBenchmark: "vs EH and OLS; LSTM roughly doubles CER and triples SR (6-month horizon, quarterly rebalancing, 1955-2018)" }
    - { ref: R3, outcome: certainty-equivalent return during NBER recessions, metric: cer, value: "LSTM recession CER = 26.770% (p=0.000, SR=0.358); EH recession CER = 3.311% (SR=-0.193)", direction: positive, vsBenchmark: "vs EH; LSTM CER nearly 9x higher in recessions where EH Sharpe ratio is negative" }
    - { ref: R4, outcome: certainty-equivalent return of two-asset optimal portfolio, metric: cer, value: "LSTM 5.622% (p=0.012, SR=0.118); EH 4.542% (SR=0.048); annual rebalancing, 2-year horizon", direction: positive, vsBenchmark: "vs EH with annual rebalancing; smaller but still significant gains with less frequent revision" }
    - { ref: R5, outcome: certainty-equivalent return of two-asset optimal portfolio, metric: cer, value: "Low TC (tau=0.1%): LSTM 9.592% (p=0.000, SR=0.169); High TC (tau=0.5%): LSTM 7.910% (p=0.000, SR=0.145)", direction: positive, vsBenchmark: "vs EH ~4.7%; LSTM CER more than doubles EH even at high transaction costs" }
    - { ref: R6, outcome: certainty-equivalent return of two-asset optimal portfolio, metric: cer, value: "LSTM with borrowing and short-selling constraints: 7.775% (p=0.000, SR=0.150)", direction: positive, vsBenchmark: "vs EH 4.737%; NNs maintain >60% CER advantage under full weight constraints" }
  resultType: new-finding
  relatesTo:
    - { cite: 'Welch and Goyal (2008)', doi: '10.1093/rfs/hhm014', relation: builds-on, note: 'uses their 12 monthly S&P 500 predictor variables and tests whether deep NNs can exploit them where OLS fails' }
    - { cite: 'Johannes et al. (2014)', doi: '10.1111/jofi.12121', relation: builds-on, note: 'adopts their dynamic portfolio choice framework with power utility, quarterly and annual rebalancing, and the AR(1) predictor process' }
    - { cite: 'Rossi (2018)', relation: tests, note: 'benchmarks against tree-based ML portfolios; NNs achieve comparable or higher Sharpe ratios without explicitly modeling conditional volatility' }
    - { cite: 'Feng et al. (2018)', relation: cites, note: 'related deep NN paper on statistical stock return prediction; this paper adds the portfolio performance dimension' }
    - { cite: 'Gu et al. (2020)', relation: cites, note: 'related ML paper on cross-sectional return prediction; this paper focuses on aggregate market time-series rather than the cross-section' }
  openQuestions:
    - "Whether investors with tail-sensitive utility functions or preference for early resolution of uncertainty could achieve comparable portfolio gains from deep learning (p.21)."
    - "Whether restricting portfolio weights more tightly, as in Van Binsbergen and Koijen (2010), could improve NN model performance rather than reduce it (p.21)."
    - "Extension to multiple risky assets: the paper solves a two-asset problem; generalizing to many stocks would require modeling the return covariance structure (p.21)."
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-25, role: extracted, note: "Full text read (22 pp.); six results extracted from Tables 1-10 and Figures 1-4. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 6 Core-results rows confirmed (Tables 1, 2, 7, 8); fixed JEL codes (added C53, E37 missing from distiller assignment); corrected Eq. 7 and Eq. 8 page locators from p.6 to p.5 (both equations appear on article page 5, not page 6)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jempfin.2026.101705", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No CC or OA license; five Elsevier TDM/STM-ASF license entries (content-versions tdm/unspecified, delay-in-days=0) effective 2026-06-01; copyright: all rights reserved including TDM and AI training" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the investor model, and the neural network forecasting method with its defining equations: enough to know what was found and how, without reading the full 22 pages. To replicate or extend, read the source at the [original](https://doi.org/10.1016/j.jempfin.2026.101705).

## TL;DR

The paper asks whether deep neural networks can generate economically meaningful portfolio gains for a long-horizon investor allocating between the US stock market (S&P 500) and a risk-free Treasury bill. Using 12 monthly macroeconomic and financial predictor variables from Welch and Goyal (2008), the paper trains feedforward networks (NN1, NN2, NN3) and an LSTM recurrent network and compares their out-of-sample portfolio performance to linear OLS benchmarks and the no-predictability expectations hypothesis (EH), rebalancing quarterly or annually over February 1955 to December 2018. All deep learning architectures achieve positive out-of-sample R-squared statistics where OLS models uniformly fail, and deliver certainty-equivalent returns and Sharpe ratios roughly double and triple those of the EH benchmark. The LSTM's gated memory cells, which capture long-range temporal dependence in predictor variables, provide additional gains during NBER recessions and with more frequent rebalancing. Earlier empirical papers by Feng et al. (2018) and Gu et al. (2020) established that deep learning improves statistical predictions for stock returns; this paper demonstrates the translation into economically significant portfolio performance gains.

## Core results

Magnitudes are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Deep NNs achieve positive OOS R-squared; all OLS models fail to beat the historical mean | Table 1, Panel A, p.8 | LSTM OOS-R2-q = 1.6% (p=0.002); NN1 = 7.1%, NN2 = 5.1%, NN3 = 5.6% (all p<0.01); OLS1 = -2.5%, OLS2 = -3.6%, OLS3 = -8.0%, OLS4 = -2.5% |
| R2 | LSTM roughly doubles the investor's CER and triples the Sharpe ratio vs no-predictability benchmark (quarterly rebalancing, whole sample) | Table 2, Panel A, p.10 | LSTM CER = 10.007% (p=0.000, SR = 0.175); EH CER = 4.737% (SR = 0.049); NN1 CER = 7.295%, NN2 CER = 6.984% |
| R3 | Deep NN gains are especially large during NBER recessions: LSTM CER nearly 9x higher than EH in downturns | Table 2, Panel A, p.10 | LSTM recession CER = 26.770% (p=0.000, SR = 0.358); EH recession CER = 3.311% (SR = -0.193); LSTM expansion CER = 7.998% |
| R4 | Annual rebalancing: NNs still outperform but gains are smaller with less frequent portfolio revision | Table 2, Panel B, p.10 | LSTM CER = 5.622% (p=0.012, SR = 0.118); EH CER = 4.542% (SR = 0.048); NN2 CER = 6.879% |
| R5 | Results robust to transaction costs: LSTM CER exceeds 7.9% even at high TC | Table 7, p.17 | Low TC (tau = 0.1%): LSTM CER = 9.592% (p=0.000, SR = 0.169); High TC (tau = 0.5%): LSTM CER = 7.910% (p=0.000, SR = 0.145) |
| R6 | Results robust to borrowing and short-selling constraints: NNs maintain large CER advantage | Table 8, Panel C, p.18 | LSTM with both constraints: CER = 7.775% (p=0.000, SR = 0.150) vs EH CER = 4.737% (SR = 0.049) |

**Overall (paper's conclusion).** Deep neural networks, particularly the LSTM recurrent architecture, deliver economically significant and statistically significant portfolio gains over the full 1955-2018 sample and across business-cycle subperiods. The gains survive transaction costs, borrowing and short-selling constraints, alternative rebalancing horizons, and a post-1969 20-year rolling window robustness check. The non-parametric capture of time-series structure in standard predictor variables from Welch and Goyal (2008) is the primary source of improvement over linear models, without any explicit modeling of conditional volatility.

## Theory / model

The paper formulates a standard power utility portfolio choice problem; it proposes no formal asset-pricing model and takes the 12 predictor variables as given. A representative investor with a T-period horizon maximizes expected utility by choosing an allocation $$\omega$$ between the S&P 500 index and a risk-free Treasury bill.

The power utility function is (p.6):

$$
U(r_{p,t+T}) = \frac{r_{p,t+T}^{1-\gamma}}{1-\gamma}, \qquad \gamma = 4 \tag{U}
$$

where $$r_{p,t+T}$$ is the cumulative portfolio return and $$\gamma$$ is the coefficient of relative risk aversion, calibrated to 4 following Johannes et al. (2014). The optimization problem is (Eq. 7, p.5):

$$
\max_\omega \mathbb{E}_t\!\left[U(r_{p,t+T})\right] \tag{7}
$$

subject to the cumulative portfolio return (Eq. 8, p.5):

$$
r_{p,t+T} = \prod_{\tau=1}^{T}\!\left[(1-\omega_{t+\tau-1})\exp\!\left(r^f_{t+\tau}\right) + \omega_{t+\tau-1}\exp\!\left(r^f_{t+\tau} + r_{t+\tau}\right)\right] \tag{8}
$$

where $$r^f_{t+\tau}$$ is the risk-free rate and $$r_{t+\tau}$$ is the excess equity log return. Two horizon settings: T = 6 months with quarterly rebalancing, and T = 24 months with annual rebalancing. Weights are bounded to $$-1 \leq \omega_{t,\tau} \leq 2$$.

Each predictor variable $$x^i_t$$ follows an AR(1) process (Eq. 12, p.6):

$$
x^i_{t+\tau} = \alpha^{x^i} + \beta^{x^i} x^i_{t+\tau-1} + \varepsilon^{x^i}_{t+\tau} \tag{12}
$$

The joint forecast errors $$\varepsilon_t = (\varepsilon^r_t, \varepsilon^x_t)$$ are drawn from a multivariate normal with estimated covariance $$\hat{\Sigma}_t$$, enabling simulation of future return paths for utility evaluation.

## Method

**Linear benchmark.** The standard predictive regression (Eq. 1, p.3):

$$
r_{t+1} = \alpha + \beta x_t + \varepsilon^r_{t+1} \tag{1}
$$

where $$x_t = (x^1_t, \ldots, x^n_t)$$ is the vector of 12 Welch and Goyal (2008) predictors. OLS1-OLS4 vary by predictor set (single dividend yield vs. kitchen-sink) and estimation window (expanding vs. rolling 10-year).

**Deep feedforward neural network.** The NN approximation replaces the linear link function (Eq. 2-3, p.4):

$$
r_{t+1} = \hat{f}_{W,b}(x_t) + \varepsilon^r_{t+1} \tag{2}
$$

$$
\hat{r}_{t+1} = f^{(L)}_{W^{(L)},b^{(L)}} \circ \cdots \circ f^{(1)}_{W^{(1)},b^{(1)}}(x_t) \tag{3}
$$

where each layer $$f^{(\ell)}$$ applies a sigmoid or ReLU activation to an affine transformation. With L = 2 and linear activations, Eq. (3) reduces to OLS. Three feedforward architectures: NN1 (16 neurons, 1 hidden layer), NN2 (32-16, 2 layers), NN3 (32-16-8, 3 layers).

**LSTM recurrent network.** The LSTM builds on `lstm-recurrent-network` by adding gated temporal state. A recurrent network introduces serial dependence into Eq. (3) via a lagged hidden state (Eq. 4, p.4):

$$
h_t = f(W_h h_{t-1} + W_x x_t + b_0) \tag{4}
$$

The LSTM variant extends this with gated memory cells. The hidden state (output gate) is (Eq. 5, p.5):

$$
h_t = \sigma\!\left(W_h^{(o)} h_{t-1} + W_x^{(o)} x_t + b_0^{(o)}\right) \circ \tanh(c_t) \tag{5}
$$

The memory cell combines a forget gate and an input gate (Eq. 6, p.5):

$$
c_t = \sigma\!\left(W_h^{(g)} h_{t-1} + W_x^{(g)} x_t + b_0^{(g)}\right) \circ c_{t-1} + \sigma\!\left(W_h^{(i)} h_{t-1} + W_x^{(i)} x_t + b_0^{(i)}\right) \circ \tanh(k_t) \tag{6}
$$

where $$\sigma(\cdot)$$ is the sigmoid function and $$k_t$$ is the new information flow. The forget gate term $$\sigma(\cdot) c_{t-1}$$ enables long-range dependence across many lags, while the input gate $$\sigma(\cdot)\tanh(k_t)$$ incorporates new predictor information. The LSTM uses three recurrent layers with 32-16-8 neurons and LSTM cells in the last layer, building on `time-series-forecasting` by learning nonlinear time-series patterns in the Welch and Goyal (2008) predictors.

Estimation uses the Adam optimizer with weight decay regularization (Kingma and Ba 2014) and dropout (0-60%). Hyperparameters (learning rate, weight decay, dropout, activation) are selected from 100 random combinations on a rolling validation sample each quarter using a combined statistical and economic criterion.

## Empirical specifications

**Data and rolling estimation.** Predictors and returns span January 1945 to December 2018. Portfolio evaluation starts February 1955 (after an initial 10-year training window). All models are re-estimated on a rolling 10-year window each quarter (annual: each year), matching the investor's rebalancing timing.

**Statistical accuracy: OOS R-squared.** Following Campbell and Thompson (2008) (Eq. 14-15, p.7), the OOS R-squared for quarterly rebalancing is:

$$
R^2_{q,oos} = 1 - \frac{\displaystyle\sum_{t \in \mathcal{T}_q}(r_t - \hat{r}_t^{\mathcal{M}_s})^2}{\displaystyle\sum_{t \in \mathcal{T}_q}(r_t - \bar{r}_t)^2} \tag{15}
$$

where $$\mathcal{T}_q$$ is the set of end-of-quarter months when the investor reoptimizes and $$\bar{r}_t$$ is the historical mean over the same sample. The Clark-West (2007) test evaluates $$H_0: R^2_{oos} \leq 0$$ (Table 1, p.8). All NNs achieve positive OOS R-squared; all OLS models are negative (R1).

**Portfolio performance: CER and Sharpe ratio.** Expected utility is computed by simulating 1,000,000 draws from $$(\varepsilon_{r,t+\tau}, \varepsilon^x_{t+\tau}) \sim N(0, \hat{\Sigma}_t)$$, iterating Eqs. (10)-(13) forward. The annualized certainty-equivalent return CER solves $$U(1 + \text{CER}/100) = \mathbb{E}_t[U(r_{p,t+T})]$$. Statistical significance for CER differences from EH is assessed by the one-sided Diebold and Mariano (2002) test (Table 2, p.10). Sharpe ratios are computed monthly.

**Robustness checks.** Transaction costs: $$\tilde{r}^{\mathcal{M}_s}_t = r^{\mathcal{M}_s}_t - \tau|\omega_t - \omega_{t-1} \hat{r}^{\mathcal{M}_s}_{t-1}|$$ with $$\tau \in \{0.1\%, 0.5\%\}$$ (Table 7, p.17). Borrowing constraint (non-negative allocation to risk-free) and short-selling constraint ($$0 \leq \omega_t \leq 1$$) imposed separately and jointly (Table 8, p.18). A 20-year rolling window provides out-of-sample evidence from February 1969 onward (Table 9, p.19). A timing strategy (Table 10, p.20) benchmarks monthly Sharpe ratios across specifications and compares to Rossi (2018).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Welch-Goyal monthly predictors | 12 monthly predictor variables (dividend yield, log earnings-price ratio, dividend payout ratio, book-to-market, net equity expansion, treasury bill rate, term spread, default yield spread, default return spread, cross-sectional premium, inflation growth, stock variance) for S&P 500 excess log returns, Jan 1945-Dec 2018; from Amit Goyal's website | No page yet |
| NBER business cycle reference dates | Define expansion and recession subsamples in Tables 2, 4, and Figure 2 | [NBER cycles](/wiki/datasets/nber-cycles/) |

Sample: monthly, January 1945 to December 2018 (888 monthly observations). Portfolio evaluation: February 1955 to December 2018. Estimation run on GPU cluster (2 servers with 2 NVIDIA GeForce RTX 2080 Ti GPUs; rolling window calibration takes approximately 2 days).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jempfin.2026.101705) if you are:
building a two-asset dynamic portfolio strategy with aggregate return predictors and want the exact hyperparameter grid and GPU estimation setup; comparing LSTM vs. feedforward NN architectures (NN1-NN3) with a consistent utility-based criterion; benchmarking against Rossi (2018) boosted-tree portfolios or the Johannes et al. (2014) Bayesian predictive framework on the Welch and Goyal (2008) predictor set; or studying the subperiod and decade performance in Tables 4 and 9 (where the Gu et al. (2020) cross-section evidence is separately in the literature). Table 2 gives the headline CER and SR by NBER phase; Tables 7-9 contain the robustness evidence.

## Attribution and rights

Source: peer-reviewed, *Journal of Empirical Finance* 87 (2026) 101705. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The paper is paywalled (Elsevier B.V., all rights reserved, including text and data mining and AI training); only short extracts are reproduced here.

> Babiak, Mykola, and Jozef Baruník. "Deep learning, predictability, and optimal portfolio returns." *Journal of Empirical Finance* 87 (2026) 101705. DOI: [10.1016/j.jempfin.2026.101705](https://doi.org/10.1016/j.jempfin.2026.101705). © 2026 Elsevier B.V. All rights reserved.
