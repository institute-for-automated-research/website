---
title: "Imperfect Financial Markets and Investment Inefficiencies: Albagli, Hellwig & Tsyvinski (2023)"
description: >-
  Distilled: noisy information aggregation in equity markets creates a rent-seeking
  motive for incumbent shareholders that causes overinvestment in upside risks and
  underinvestment in downside risks; in general equilibrium an externality through
  aggregate share prices dampens overinvestment but amplifies underinvestment. AER
  2023, paywalled. Six core theoretical results with equation locators, the partial
  and general equilibrium models with full equations, and the information-feedback
  extension. LLM-distilled.
sidebar:
  label: Albagli-Hellwig-Tsyvinski 2023
  order: 1
tags: [paper-summary, asset-pricing, equities, corporate-finance, investment, theory, peer-reviewed, unreplicated]
paper:
  authors: Elias Albagli, Christian Hellwig, Aleh Tsyvinski
  authorList:
    - { family: Albagli, given: Elias, affiliation: "Central Bank of Chile" }
    - { family: Hellwig, given: Christian, affiliation: "Toulouse School of Economics and CEPR" }
    - { family: Tsyvinski, given: Aleh, affiliation: "Yale University and NBER" }
  year: 2023
  venue: "American Economic Review 113(9), September 2023, 2323-2354"
  venueShort: AER 2023
  doi: 10.1257/aer.20170725
  jel:
    codes: [D21, D25, D83, G14, G32, G41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics: ["Financial Markets and Investment Strategies", "Corporate Finance and Governance", "Economic theories and models"]
  dataAccess: public
  outcome:
    - firm investment level relative to the efficient benchmark
    - investment distortion magnitude from noisy information aggregation
  outcomeClass: [firm-real-outcomes]
  license: "paywalled (no license block in Crossref metadata; AER standard subscription; author manuscript at hal.science/hal-04210328v1)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site, 2026-06-24; author manuscript at hal.science/hal-04210328v1)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 11
  methods:
    role: theory
    family: theory
    buildsFrom: [noisy-rational-expectations, dynamic-general-equilibrium]
  contributionType: [new-theory, new-fact]
  mechanisms: [information-asymmetry]
  scope:
    region: theoretical
    assetClass: "equity markets (theoretical)"
  relatesTo:
    - { cite: "Grossman and Stiglitz (1980)", relation: builds-on, note: "equity price formation via noisy rational expectations; the model builds on their framework for aggregating dispersed private signals into equilibrium prices" }
    - { cite: "Albagli, Hellwig and Tsyvinski (forthcoming)", relation: builds-on, note: "companion JF paper characterizing equilibrium prices in a nonlinear noisy REE model; this paper endogenizes investment and embeds firms in general equilibrium" }
    - { cite: "Polk and Sapienza (2009)", doi: '10.1093/rfs/hhn030', relation: tests, note: "catering-theory test of positive investment-mispricing sensitivity and lower future returns for overinvesting firms is consistent with Proposition 4 implications" }
    - { cite: "David, Hopenhayn and Venkateswaran (2016)", doi: '10.1093/qje/qjw006', relation: extends, note: "GE firm-dynamics model with informational frictions; this paper adds the rent-seeking motive and shows GE externality can amplify vs. dampen PE distortions depending on risk direction" }
  openQuestions:
    - "Effects of financial transaction taxes on shareholders' intertemporal distortions are analyzed in the working paper version but omitted from the published article (p. 2345)."
    - "Structural estimation of the model to quantify aggregate welfare losses; the key parameters (return wedge, share turnover, scalability) are noted as empirically estimable but are not calibrated (p. 2351)."
  replicationCode:
    url: "https://doi.org/10.3886/E185081V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full text read (pp. 2323-2354); six theoretical results extracted with equation locators. Not human-verified. Not reproduced." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF (pp. 2323-2354); two fixes applied: (1) R5 downside-risk direction corrected from K_GE/K*→∞ to K_GE/K*→0 per Proposition 3(ii) (investment collapses under downside risk with χ→0), and misleading parenthetical corrected; (2) JEL codes expanded from [G14,G32,D83] to [D21,D25,D83,G14,G32,G41] per PDF title page. All six proposition locators, all equations (1)-(14), and Proposition 4 covariance conditions verified term-by-term against PDF."
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20170725", checked: 2026-06-24, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block present in Crossref metadata; AEA standard subscription journal; OpenAlex lists an author manuscript at hal.science/hal-04210328v1 as the OA version" }
  rightsSignalConflict: false
---

**What this is.** The paper's core theoretical results, the partial and general equilibrium models with their defining equations, and the empirical-relevance discussion: enough to understand the mechanism and all six propositions without reading all 32 pages. To replicate or extend it, read the full article at [doi.org/10.1257/aer.20170725](https://doi.org/10.1257/aer.20170725).

## TL;DR

Incumbent shareholders who sell a fraction of their equity before dividends are realized have a rent-seeking motive: by distorting investment, they can move the market price in their favor. With upside risk in cash flows (positive return asymmetry), they overinvest to inflate expected prices; with downside risk, they underinvest to avoid price deflation. The magnitude of the distortion scales with three parameters: the percentage return wedge between market-implied and fundamental returns ($$\Delta$$), the fraction of shares traded ($$\alpha$$), and the inverse scalability of investment ($$\chi^{-1}$$). In general equilibrium, the shareholders' collective attempts to boost their firms' share prices lower aggregate dividends, creating an externality that dampens overinvestment with upside risk but amplifies underinvestment with downside risk. A corrective tax implements the efficient allocation in both settings.

## Core results

Propositions reference the paper's own numbering; locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Partial equilibrium investment distortion**: overinvestment for upside risk ($$\alpha\Delta > 0$$), underinvestment for downside risk ($$\alpha\Delta < 0$$); log distortion approximately $$\alpha\Delta\chi^{-1}$$ | Proposition 1, pp. 2333-2334 | $$\hat{K}/K^* = (1+\alpha\Delta)^{1/\chi}$$; dividend losses $$V(\hat{K})/V(K^*) = (1+\alpha\Delta)^{1/\chi}(1-\alpha\Delta\chi^{-1})$$ |
| R2 | **Negative expected dividends** arise when upside risk and high scalability combine: the firm overinvests so severely that it destroys value in expectation | Proposition 1(iv), eq. 4, p. 2333 | Condition: $$\alpha\Delta\chi^{-1} > 1$$ |
| R3 | **Partial equilibrium corrective tax** implements efficient investment by offsetting the return wedge | eq. 5, p. 2336 | $$\tau = 1 - \frac{1}{1+\alpha\Delta}$$ |
| R4 | **General equilibrium unique solution**; investment is lower than in partial equilibrium ($$K_{GE} < K_{PE}$$); with upside risk overinvestment is dampened ($$K_{PE} > K_{GE} > K^*$$); with downside risk underinvestment is amplified ($$K_{GE} < K_{PE} < K^*$$) | Proposition 2, p. 2342 | $$K_{GE}/K^* = \bigl(1 + \alpha\Delta \cdot Q/\hat{Q}\,/\,(1-\alpha+\alpha Q/\hat{Q})\bigr)^{1/\chi}$$ |
| R5 | **Limiting behavior** for highly scalable investments ($$\chi \to 0$$): upside distortions are bounded ($$K_{GE}/K^* \to e^\alpha$$); downside distortions are unbounded ($$K_{GE}/K^* \to 0$$ as investment collapses; GE surplus vanishes relative to PE surplus) | Proposition 3, p. 2342 | Upside: $$\lim_{\chi \to 0} V(K_{GE})/V(K^*) = (1-\alpha)e^\alpha < 1$$; Downside: $$\lim_{\chi \to 0} V(K_{GE})/V(K_{PE}) = 0$$ |
| R6 | **Information feedback** (price-contingent investment) merges both mechanisms: investment is positively correlated with prices (excess sensitivity to market signals), and higher investment predicts lower future equity returns | Proposition 4, pp. 2348-2349 | $$\text{cov}(\hat{K}(z), P(z)) > 0$$; $$\hat{K}(z)/K^*(z)$$ increasing in $$z$$; $$\text{cov}\bigl(\hat{K}(z),\,(V(z)-P(z))/P(z)\bigr) < 0$$ |

**Overall (paper's conclusion).** Even small departures from market efficiency can produce large aggregate investment distortions when investments are highly scalable, and these distortions are compounded by the price externality in general equilibrium. The paper provides a rationale for regulating financial risk-taking by publicly traded firms even when equity markets operate near efficiency.

## Theory / model

The model has three stages and is developed first in partial equilibrium (Section I) and then embedded in general equilibrium (Section II).

**Partial equilibrium baseline (§I.A, pp. 2326-2330).** A single firm. At stage 1, incumbent shareholders choose investment $$k \geq 0$$. At stage 2, they sell a fraction $$\alpha \in (0,1]$$ of shares to outside investors. At stage 3, dividends $$\Pi(\theta, k) \equiv R(\theta)k - C(k)$$ are paid to final shareholders, where $$\theta \sim \mathcal{N}(0, \lambda^{-1})$$ is a stochastic fundamental and $$C(k) = k^{1+\chi}/(1+\chi)$$ with $$\chi \geq 0$$. The parameter $$\chi^{-1}$$ captures the scalability of investment. Ex ante efficient investment $$K^*$$ maximizes $$E[\Pi(\theta,k)]$$.

At stage 2, informed investors (mass 1) each observe private signal $$x_i \sim \mathcal{N}(\theta, \beta^{-1})$$; noise traders place a random demand $$\alpha\Phi(u)$$ with $$u \sim \mathcal{N}(0, \delta^{-1})$$ independent of $$\theta$$. In the unique noisy rational expectations equilibrium, the sufficient statistic for the price signal is $$z \equiv \theta + (1/\sqrt{\beta}) \cdot u$$, and the Lemma (p. 2327) gives the market-clearing price (eq. 1):

$$P(z, k) = E\!\left[\Pi(\theta, k) \mid x = z, z\right] \tag{1}$$

The price equals the expected dividend of the marginal informed trader, who observes both private signal $$x = z$$ and the public signal embedded in the price (also $$z$$). This double-conditioning places excess weight on $$z$$ relative to its true precision as a public signal, generating a systematic bias: the market-implied prior is $$\mathcal{N}(0, \hat{\lambda}^{-1})$$ with $$\hat{\lambda}^{-1} > \lambda^{-1}$$, so prices overweight tail realizations of $$\theta$$. Denote $$\hat{E}[\cdot]$$ as the expectation under this market-implied prior.

At stage 1, incumbent shareholders maximize (eq. 2, p. 2329):

$$\max_{k \geq 0} \; E\!\left[\alpha P(z;k) + (1-\alpha)\Pi(\theta,k)\right] \tag{2}$$

$$= \max_{k \geq 0}\left\{ E[\Pi(\theta,k)] + \alpha E\!\left[P(z;k) - \Pi(\theta,k)\right] \right\}$$

The term $$\alpha E[P(z;k) - \Pi(\theta,k)]$$ is the rent accruing to incumbent shareholders from the price bias. In equilibrium, the distorted investment $$\hat{K}$$ satisfies (eq. 3, p. 2330):

$$C'(\hat{K}) = E[R(\theta)] + \alpha\!\left(\hat{E}[R(\theta)] - E[R(\theta)]\right) \tag{3}$$

Defining the return wedge $$\Delta \equiv \hat{E}[R(\theta)]/E[R(\theta)] - 1$$, the investment ratio is (p. 2332):

$$\frac{\hat{K}}{K^*} = (1 + \alpha\Delta)^{1/\chi}$$

When $$R(\cdot)$$ has upside risk (gains exceed losses at fixed distances from the mean), $$\hat{E}[R(\theta)] > E[R(\theta)]$$ so $$\Delta > 0$$ and $$\hat{K} > K^*$$ (overinvestment). When $$R(\cdot)$$ has downside risk, $$\Delta < 0$$ and $$\hat{K} < K^*$$ (underinvestment). For upside risk with high scalability, expected dividends can turn negative when $$\alpha\Delta\chi^{-1} > 1$$ (eq. 4, p. 2333) as the firm pursues negative-NPV overinvestment to capture rent.

The Grossman and Stiglitz (1980) noisy REE framework underpins the price characterization: prices aggregate private information but the market-clearing condition introduces a systematic bias that shareholders exploit through their investment decision.

**General equilibrium (§II, pp. 2337-2345).** A unit measure of firms indexed $$i$$, each with idiosyncratic fundamental $$\theta_i \sim \mathcal{N}(0, \lambda^{-1})$$. Incumbent shareholders sell an endogenous (and symmetric) fraction $$s$$ of shares. Final shareholders invest through mutual funds (acting as noise traders) and hedge funds (acquiring noisy private information about each firm). Let aggregate market value $$T = \int P_i \, di$$ and aggregate dividends $$V = \int \Pi_i \, di$$. With log preferences $$v_I(C^I_2) + u_I(C^I_3) = \alpha\ln C^I_2 + (1-\alpha)\ln C^I_3$$ for incumbent shareholders (ensuring $$s = \alpha$$ is exogenous), the aggregate intertemporal MRS satisfies (eq. 6, p. 2337):

$$\frac{T}{V} = Q^{-1} = \frac{u'_I((1-s)V)}{v'_I(sT)} = u'_F(sV) \tag{6}$$

The GE equity price for firm $$i$$ is (eq. 7, p. 2339):

$$P_i(z_i, k_i) = \frac{1}{\hat{Q}} \, E\!\left[\Pi(\theta_i, k_i) \mid x = z_i, z_i\right] \tag{7}$$

where $$\hat{Q}$$ is the threshold return on equity required by hedge funds in equilibrium. Aggregating across firms and combining with $$E[P_i] = T = VQ^{-1}$$, the equilibrium $$\hat{Q}$$ satisfies (eq. 8, p. 2340):

$$\hat{Q} = Q \cdot \frac{\hat{E}[\Pi(\theta,K)]}{E[\Pi(\theta,K)]} \tag{8}$$

The ratio $$Q/\hat{Q}$$ is the GE wedge that adjusts the PE rent-seeking incentive. Each firm's incumbents maximize (eq. 10, p. 2340):

$$\max_{k_i \geq 0} \left\{ \alpha \frac{Q}{\hat{Q}} \hat{E}[\Pi(\theta_i, k_i)] + (1-\alpha) E[\Pi(\theta_i, k_i)] \right\} \tag{10}$$

The GE investment ratio and the intertemporal wedge jointly satisfy (eqs. 11 and 13, pp. 2340-2341):

$$\frac{K_{GE}}{K^*} = \left(1 + \alpha\Delta \cdot \frac{Q/\hat{Q}}{1-\alpha+\alpha Q/\hat{Q}}\right)^{1/\chi} \tag{11}$$

$$\frac{Q}{\hat{Q}} = \frac{\chi + 1 - (K_{GE}/K^*)^\chi}{(1+\chi)(1+\Delta) - (K_{GE}/K^*)^\chi} \tag{13}$$

With upside risk ($$\Delta > 0$$), overinvestment by all firms lowers aggregate dividends $$V$$ and thus $$Q$$, making $$Q < \hat{Q}$$ (i.e. $$Q/\hat{Q} < 1$$): the GE wedge attenuates the PE overinvestment, so $$K_{PE} > K_{GE} > K^*$$. With downside risk ($$\Delta < 0$$), underinvestment raises $$Q > \hat{Q}$$: the GE wedge amplifies underinvestment, so $$K_{GE} < K_{PE} < K^*$$. This externality arises because individual shareholders do not internalize that their collective rent-seeking reduces aggregate dividends $$V$$, thereby lowering $$Q$$ and ultimately feeding back to distort the intertemporal incentive of all firms.

## Method

The model is solved analytically throughout. The solution strategy builds on `noisy-rational-expectations` for the price characterization and `dynamic-general-equilibrium` for the fixed-point analysis.

**Price characterization.** The noisy REE price (eq. 1) is derived using the Gaussian signal structure: the market-clearing condition with informed and noise traders yields the sufficient statistic $$z = \theta + (1/\sqrt{\beta})\cdot u$$ (Lemma, p. 2327). Compounding normal distributions implies $$E[P(z;k)] = \hat{E}[\Pi(\theta,k)]$$ under a market-implied prior with inflated variance $$\hat{\lambda}^{-1}$$ (p. 2330). This representation holds for general (nonlinear) payoff functions $$R(\cdot)$$, as shown in the companion paper Albagli, Hellwig and Tsyvinski (forthcoming), making the results robust to the specific return functional form.

**Partial equilibrium investment.** The FOC for investment (eq. 3) follows from differentiating eq. 2 and noting $$E[\partial P(z;k)/\partial k] = \hat{E}[R(\theta)]$$. The power cost structure $$C(k) = k^{1+\chi}/(1+\chi)$$ yields the closed-form investment ratio $$\hat{K}/K^* = (1+\alpha\Delta)^{1/\chi}$$. Comparative statics follow from first-order approximations around the efficient level $$K^*$$; the dividend-loss formula $$V(\hat{K})/V(K^*) = (1+\alpha\Delta)^{1/\chi}(1-\alpha\Delta\chi^{-1})$$ is derived by a second-order expansion of $$\ln(V(\hat{K})/V(K^*))$$ around zero (pp. 2332-2333).

**General equilibrium fixed point.** Proposition 2 (existence and uniqueness) is proved by showing that equations (11) and (13) have a unique solution $$(K_{GE}/K^*, Q/\hat{Q})$$ via continuity arguments and monotone comparative statics (Appendix, pp. 2351-2353). The limiting results in Proposition 3 follow by taking $$\chi \to 0$$ and establishing boundary behavior of the ratio using L'Hopital-type arguments.

**Corrective taxes.** In partial equilibrium, the tax $$\tau$$ on payoff $$R(\theta)k$$ shifts the effective return so that the FOC yields $$K^*$$ (eq. 5, p. 2336):

$$\tau = 1 - \frac{1}{1+\alpha\Delta} \tag{5}$$

In general equilibrium, accounting for the intertemporal wedge $$\hat{Q}/Q = 1 + (1+\chi^{-1})\Delta$$ at the efficient level, the GE corrective tax is (eq. 14, p. 2345):

$$\tau = 1 - \frac{1 - \alpha + \alpha Q/\hat{Q}}{1 - \alpha + \alpha (Q/\hat{Q})(1+\Delta)} \tag{14}$$

This adjusts the PE formula by a Pigouvian correction for the aggregate externality through share prices.

## Empirical specifications

Section III (pp. 2345-2350) studies the model's empirical implications. The paper does not conduct original regressions; it shows that the PE model nests the predictions of two empirical literatures and discusses qualitative consistency with existing estimates.

**Information feedback extension (§III.B, pp. 2346-2349).** The PE model is extended to allow price-contingent investment $$K(z)$$: shareholders commit to an investment rule that the market anticipates. With $$\alpha = 1$$ (full share turnover), shareholders choose $$\hat{K}(z)$$ to satisfy $$C'(\hat{K}(z)) = E[R(\theta)\mid x=z,z]$$, so the equilibrium investment function is (p. 2348):

$$\hat{K}(z) = \left[(1 + 1/\chi)\,P(z)\right]^{1/(1+\chi)}$$

Expected equity returns decrease in investment and price:

$$\frac{V(z)}{P(z)} - 1 = \frac{1+\chi}{\chi}\left(\frac{E[R(\theta)\mid z]}{E[R(\theta)\mid x=z,z]} - 1\right)$$

Proposition 4 (pp. 2348-2349) establishes three predictions: (i) investment is increasing in share prices: $$\text{cov}(\hat{K}(z), P(z)) > 0$$; (ii) excess sensitivity relative to fundamentals: $$\hat{K}(z)/K^*(z)$$ is strictly increasing in $$z$$; (iii) higher investment leads to lower future equity returns: $$\text{cov}(\hat{K}(z), (V(z)-P(z))/P(z)) < 0$$.

**Consistency with existing evidence (§III.A and §III.C, pp. 2346-2350).** The model is consistent with three lines of external evidence:

- Diether, Malloy, and Scherbina (2002) find that stocks in the highest earnings-forecast-dispersion quintile earn about 0.62% per month (roughly 7% annualized) lower returns, consistent with overvaluation from upside-risk overinvestment.
- Polk and Sapienza (2009) estimate a positive relation between share overvaluation (proxied by discretionary accruals) and investment after controlling for Tobin's Q, with stronger effects for firms with higher share turnover (the paper's $$\alpha$$) and lower future returns for overinvesting firms: consistent with Proposition 4(i) and 4(iii).
- David, Hopenhayn and Venkateswaran (2016) calibrate a GE model with the same informational friction (but without the rent-seeking motive) and find it responsible for 20-50% of observed dispersion in the marginal revenue product of capital.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Numerical simulations (Figures 1-5) | Synthetic data generated from model parameters to illustrate comparative statics on investment distortions and efficiency losses; no external dataset is used | No external data |

Sample: none. The paper is theoretical; Figures 1-5 use calibrated parameter values (e.g., $$\alpha = 0.5$$, $$\beta = 1$$, $$\lambda = 1$$) without fitting to real data.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20170725) if you are: building on the model (the Appendix at pp. 2351-2353 contains full proofs of Propositions 1-3 and the GE existence-uniqueness argument); studying the optimal tax design in general equilibrium and its Pigouvian correction; extending the information-feedback model to dynamic or multi-period settings; or seeking the working paper version's analysis of financial transaction taxes and additional policy instruments not covered in the published article.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(9), September 2023. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The published article is paywalled; an author manuscript is available at [hal.science/hal-04210328v1](https://hal.science/hal-04210328v1). Replication data are deposited at [doi.org/10.3886/E185081V1](https://doi.org/10.3886/E185081V1).

> Albagli, Elias, Christian Hellwig, and Aleh Tsyvinski. "Imperfect Financial Markets and Investment Inefficiencies." *American Economic Review* 113, no. 9 (September 2023): 2323-2354. DOI: 10.1257/aer.20170725. Extract only; not licensed for reproduction.
