---
title: "Competitive Capture of Public Opinion: Alonso & Padró i Miquel (2025)"
description: >-
  Distilled: Two opposed interested parties compete to capture news coverage; rational
  citizens discount informative messages and sort into aligned sources, so competition
  compounds rather than cancels harm to social learning. Econometrica 2025, CC BY 4.0.
  Six core propositions with locators, the capture-and-communication game model, and
  equilibrium characterization with equations.
sidebar:
  label: Alonso-Miquel 2025
  order: 1
tags: [paper-summary, political-economy, media-bias, information-economics, public-opinion,
       open-access, cc-by, peer-reviewed, unreplicated]
paper:
  authors: "Ricardo Alonso, Gerard Padró i Miquel"
  authorList:
    - { family: Alonso, given: Ricardo, orcid: "0000-0001-9559-0864", affiliation: "London School of Economics" }
    - { family: "Padró i Miquel", given: Gerard, affiliation: "Yale University" }
  year: 2025
  venue: "Econometrica 93(4), 2025, 1265-1297"
  venueShort: Econometrica 2025
  doi: 10.3982/ecta22072
  jel:
    codes: [D72, D80, D83]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Media Influence and Politics", "Opinion Dynamics and Social Influence", "Social Media and Politics"]
  dataAccess: public
  outcome:
    - equilibrium distribution of published news coverage slant
    - Blackwell-informativeness of citizen posterior beliefs under capture
    - citizen sorting across news sources
  outcomeClass: [information-quality]
  license: "CC BY 4.0 (LSE Research Online accepted author manuscript confirmed CC BY 4.0; VOR via Wiley/Econometrica has no license block in Crossref as of 2026-06-26)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open AAM at researchonline.lse.ac.uk/id/eprint/127777/; VOR paywalled via Wiley (checked 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)"
  resultsCount: 6
  citedByCount: 5
  methods:
    role: theory
    contributes: competitive-capture-model
    family: theory
    buildsFrom: [signaling-game-pbe, contest-capture-game]
  contributionType: [new-theory]
  mechanisms: [information-asymmetry, learning]
  scope:
    region: theoretical
  relatesTo:
    - { cite: 'Besley and Prat (2006)', relation: extends, note: 'extends to two opposing IPs and a continuous message space; Besley-Prat has a single IP and a binary disclosure game' }
    - { cite: 'Gentzkow and Kamenica (2017)', doi: '10.1257/jep.31.2.211', relation: extends, note: 'extends to competing IPs without commitment; Gentzkow-Kamenica assumes a single committed sender' }
    - { cite: 'Prat (2018)', doi: '10.1086/698107', relation: builds-on, note: 'builds on upper bounds on IP influence on citizen beliefs in a multiple-media setting' }
    - { cite: 'Suen (2004)', doi: '10.1111/j.1468-0297.2004.00213.x', relation: contradicts, note: 'Suen (2004) shows aligned media filtering creates value; here disinformation destroys value for rational citizens regardless of source alignment' }
    - { cite: 'Shapiro (2016)', doi: '10.1016/j.jpubeco.2016.10.004', relation: extends, note: 'extends to multiple competing IPs across multiple sources; Shapiro (2016) has multiple IPs on a single outlet' }
  openQuestions:
    - "Sources are modeled as passive receivers of IP pressure; the trade-off between profit/viewership maximization and yielding to capture is left for future research (conclusion, AAM p. 32)."
    - "Applications to social media audience targeting and the effectiveness of public health campaigns as a function of the existing media landscape remain open (conclusion, AAM p. 32)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text of the accepted author manuscript read (LSE Research Online eprint/127777); six propositions extracted with AAM locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: author order corrected (Kamenica and Gentzkow → Gentzkow and Kamenica, per bibliography p. 34); eq. (7) locator corrected AAM p. 18 → p. 19; eq. (15) locator corrected AAM p. 20 → p. 21. All six Core-results rows confirmed against PDF. Equations (1)-(4), (7), (11)-(12), (15) verified term-by-term." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ecta22072", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref metadata; title, authors, container-title Econometrica, published 2025, pages 1265-1297 confirmed." }
    - { source: "LSE Research Online eprint/127777 cover page (AAM)", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "Accepted author manuscript; Licence stated as Creative Commons: Attribution 4.0." }
  rightsSignalConflict: true
---

**What this is.** The propositions, model, and equilibrium characterization of this paper on competitive capture of public opinion: enough to know what was proved and how, without reading the full 33 pages. To replicate, extend, or verify any result, read the original at [https://doi.org/10.3982/ecta22072](https://doi.org/10.3982/ecta22072). Page references are to the accepted author manuscript (AAM).

## TL;DR

Two interested parties (IPs), right (R) and left (L), compete to capture news items produced by multiple information sources that reach citizens with heterogeneous prior beliefs over a binary state of the world. When an IP captures a news item it can publish any message it likes, genuine disinformation with no commitment and no restriction. Citizens rationally discount suspicious coverage. The paper characterizes the Perfect Bayesian Equilibrium of this capture-and-communication game and obtains four results: (i) each IP mixes over an interval of favorable messages, equalizing effective informational content within its support (Proposition 1); (ii) published coverage is more polarized than honest coverage and rational skepticism makes it less informative than face value suggests (Section 3.2); (iii) competing IPs do not cancel each other but compound harm to social learning because capture efforts are strategic substitutes (Proposition 3); (iv) citizens sort into ideologically aligned sources despite knowing the bias (Proposition 6). These results match documented empirical patterns in the item-level distribution of media slant.

## Core results

Page locators refer to the AAM; equation numbers are identical across AAM and VOR.

| # | Result | Locator | Magnitude as stated |
|---|---|---|---|
| R1 | In the unique communication equilibrium, R randomizes over messages with $$\lambda_H(m) \ge \overline{\lambda}$$ and L over messages with $$\lambda_H(m) \le \underline{\lambda}$$; citizens treat every message in each IP's support as conveying the same constant effective likelihood ratio | Proposition 1, eq. (2), AAM p. 13 | $$\lambda^*(m) = \overline{\lambda}$$ for all $$m \in \text{supp}(\tau_R^*)$$; $$\lambda^*(m) = \underline{\lambda}$$ for all $$m \in \text{supp}(\tau_L^*)$$; moderate messages $$m \in (\underline{m}^*, \overline{m}^*)$$ taken at honest face value |
| R2 | Capture shifts the published coverage distribution to the tails: extreme messages become more frequent, moderate messages less frequent, than under honest coverage | Proposition 1, Figure 1, AAM pp. 13-15 | Equilibrium density has higher mass at both tails relative to the honest distribution $$F_H(\lambda)$$; model accommodates Budak, Goel, and Rao (2016) and Kim, Lelkes, and McCrain (2022) empirical patterns of within-outlet slant variation |
| R3 | Capture uniformly reduces Blackwell-informativeness of the source: the equilibrium message distribution SOSD-dominates honest coverage; higher effort by either IP compresses citizen posteriors further | Lemma 1, eq. (6), Section 3.2, AAM pp. 16-17 | $$F(\lambda; p) = \pi_L(r,l) + \pi_H(r,l) F_H(\lambda; p)$$ for $$\lambda \in [\underline{\lambda}, \overline{\lambda}]$$; $$\overline{\lambda}$$ is decreasing and $$\underline{\lambda}$$ is increasing in each IP's own effort, so more capture always makes the source less informative |
| R4 | Competing capture efforts are strategic substitutes at the item level: one IP's higher effort reduces the other IP's marginal return to capture | Proposition 3, AAM p. 21 | Under Assumptions I-II: $$\partial B^R / \partial l < 0$$ and $$\partial B^L / \partial r < 0$$ along the best-response locus; equilibrium $$r^*$$ and $$l^*$$ move in opposite directions to each other's effort |
| R5 | A horizontal source attribute (favoring one IP) unambiguously increases that IP's capture and decreases the opponent's; strategic substitution amplifies differentiation | Proposition 5, AAM p. 26 | Under Assumptions I-II: if horizontal attribute $$\zeta$$ favoring R increases, there exists an equilibrium $$(\bar{r}, \bar{l})$$ with $$\bar{r}_j \ge r_j^*$$ and $$\bar{l}_j \le l_j^*$$ |
| R6 | Citizens sort ideologically: those with rightist priors choose the source mostly captured by R; those with leftist priors choose the source mostly captured by L | Proposition 6, AAM pp. 28-29 | With symmetric sources and $$\pi_R^1/\pi_R^2 > \pi_H^1/\pi_H^2 > \pi_L^1/\pi_L^2$$: there exist $$\underline{p} \le \bar{p}$$ such that citizens with $$p < \underline{p}$$ choose source 2 and $$p > \bar{p}$$ choose source 1; when $$\pi_H^1 = \pi_H^2$$, sorting is monotone in $$p$$ |

**Overall (paper's conclusion).** Competition between IPs does not restore informational balance: opposing capture efforts are strategic substitutes at each item so they do not cancel, they compound harm to social learning. Horizontal differentiation between sources is amplified by competition, not dampened. Citizens rationally sort into ideologically aligned sources, consistent with recent experimental evidence on demand for biased news, not because they prefer bias but because the lies they fear most come from the ideologically opposed source.

## Theory / model

**State and citizens.** The unknown binary state is $$\theta \in \Theta = \{-1, 1\}$$. A mass $$M$$ of citizens have heterogeneous prior beliefs $$p = \Pr[\theta = 1]$$ distributed with CDF $$F_p(p)$$. IP R wants citizens to hold the highest possible posterior on $$\theta = 1$$; IP L wants the lowest. Their indirect utilities over citizen posteriors are $$v_R(\mu)$$ (strictly increasing) and $$v_L(\mu)$$ (strictly decreasing), differentiable on $$[0,1]$$ with bounded derivatives.

**Honest news.** Each of $$n$$ sources produces one news item $$j$$. If uncaptured (honest), item $$j$$ conveys an informative signal $$m^j \in \mathcal{M} \subset \mathbb{R}$$ with state-dependent density $$\Pr[m^j = m \mid \theta] = q_\theta^j(m)$$, conditionally independent across items. The honest posterior of a $$p$$-citizen who observes message $$m$$ is (§2, eq. (1), AAM p. 8):

$$\mu_H^j(m; p) = \Pr\!\bigl[\theta = 1 \mid m^j = m,\, \text{honest},\, p\bigr] = \frac{q_1^j(m)\, p}{q_1^j(m)\, p + q_{-1}^j(m)(1-p)} \tag{1}$$

Messages are ordered by the likelihood ratio $$\lambda_H(m) = q_1^j(m)/q_{-1}^j(m)$$: higher $$\lambda_H(m)$$ means a message more favorable to $$\theta = 1$$.

**Capture and timing.** IPs simultaneously and covertly choose efforts $$r_j \in [0, \bar{x}_R^j]$$ and $$l_j \in [0, \bar{x}_L^j]$$ for each item $$j$$. Nature draws the state of capture $$S^j \in \{R, L, H\}$$ with probabilities $$\pi_R^j(r_j, l_j)$$, $$\pi_L^j(r_j, l_j)$$, $$\pi_H^j = 1 - \pi_R^j - \pi_L^j$$. If IP $$i$$ wins, it publishes any $$m \in \mathcal{M}$$ regardless of the true state (genuine disinformation). Citizens observe the published message and update beliefs without observing whether capture occurred. Each IP's cost of capture effort across items is $$C_R(r) = \sum_j C_{Rj}(r_j)$$ and $$C_L(l) = \sum_j C_{Lj}(l_j)$$ with $$C_{ij}$$ increasing and strictly convex.

The equilibrium concept is Perfect Bayesian Equilibrium (PBE). Citizens hold assessments $$(\tilde{r}, \tilde{l}, \tilde{\tau}_R, \tilde{\tau}_L)$$ of IPs' efforts and reporting strategies; in any PBE these assessments are correct on the equilibrium path.

The paper advances on prior work by allowing two opposing IPs (unlike Besley and Prat (2006), which has one), using a continuous message space (unlike binary disclosure models), and imposing no commitment to an editorial line (unlike Gentzkow and Kamenica (2017), where the sender commits to an information structure). Prat (2018) gives upper bounds on IP influence in a multiple-media setting; this paper endogenizes the capture incentives.

## Method

**Characterizing the communication equilibrium.** For fixed efforts $$(r, l)$$, Proposition 1 (AAM p. 13) characterizes the unique communication equilibrium. R mixes over messages whose honest likelihood ratio $$\lambda_H(m) \ge \overline{\lambda}$$; L mixes over messages with $$\lambda_H(m) \le \underline{\lambda}$$. The equilibrium likelihood ratio $$\lambda^*(m) \equiv \Pr[m \mid \theta=1]/\Pr[m \mid \theta=-1]$$ takes the censored form (eq. (2)):

$$\lambda^*(m) = \begin{cases} \underline{\lambda} & \text{if } m \le \underline{m}^* \\ \lambda_H(m) & \text{if } \underline{m}^* < m < \overline{m}^* \\ \overline{\lambda} & \text{if } m \ge \overline{m}^* \end{cases} \tag{2}$$

The key step is that each IP's indirect payoff $$V_i(m) = M \int_0^1 v_i(\mu^*(\lambda; p))\, dF_p(p)$$ is strictly monotone in $$\lambda^*(m)$$, so IP optimality requires equalizing $$\lambda^*(m)$$ across all messages in the support of $$\tau_i^*$$ (the mixing condition). The thresholds $$\overline{\lambda}$$ and $$\underline{\lambda}$$ are pinned down by the mass conditions (Proposition 1, Part 3, eqs. (3)-(4)):

$$\int_{\overline{\lambda}}^{\infty} \!\!(\lambda - \overline{\lambda})\, dF_{H,-1}(\lambda) = \frac{\pi_R(r,l)}{\pi_H(r,l)}\,(\overline{\lambda} - 1) \tag{3}$$

$$\int_0^{\underline{\lambda}} (\underline{\lambda} - \lambda)\, dF_{H,-1}(\lambda) = \frac{\pi_L(r,l)}{\pi_H(r,l)}\,(1 - \underline{\lambda}) \tag{4}$$

where $$F_{H,-1}(\lambda)$$ is the distribution of honest likelihood ratios in state $$\theta = -1$$. Because the right-hand side of (3) is strictly increasing in $$\overline{\lambda}$$ and the left-hand side is strictly decreasing, the solution is unique.

**Full-game equilibrium.** IP $$i$$'s payoff given efforts $$(r, l)$$ and citizens' assessment $$(\tilde{r}, \tilde{l})$$ is (eq. (7), AAM p. 19):

$$W_i(r,l;\tilde{r},\tilde{l}) = \pi_L(r,l)\,V_i\!\bigl(\underline{\lambda}(\tilde{r},\tilde{l})\bigr) + \pi_H(r,l)\,\mathbb{E}_H\!\bigl[V_i(\lambda); p_i\bigr] + \pi_R(r,l)\,V_i\!\bigl(\overline{\lambda}(\tilde{r},\tilde{l})\bigr) \tag{7}$$

where $$\mathbb{E}_H[V_i(\lambda); p_i]$$ integrates $$V_i(\lambda)$$ over the honest message distribution. Proposition 2 (AAM p. 19) establishes existence of a pure-strategy equilibrium $$(r^*, l^*)$$ satisfying the first-order conditions:

$$B_R(r^*, l^*;\, r^*, l^*) = C_R'(r^*) \tag{11}$$
$$B_L(r^*, l^*;\, r^*, l^*) = C_L'(l^*) \tag{12}$$

combined with the communication-equilibrium conditions (3)-(4), where $$B_i$$ is the marginal benefit from capture (the integral of $$V_i'(\lambda)$$ weighted by the effect of a marginal increase in capture probability over the contested message range, eqs. (9)-(10) in Proposition 2).

**Strategic substitutability.** Proposition 3 (AAM p. 21) is proved by differentiating $$B_R$$ with respect to $$l$$ (Assumption I rules out cross-partials in the contest function; Assumption II requires $$\pi_R/\pi_H$$ increasing in $$l$$, ensuring that higher left effort increases the perceived odds that honest coverage is crowded out rather than that the right is crowded in). Both effects reduce R's marginal return, giving (eq. (15), AAM p. 21):

$$\frac{\partial B_R}{\partial l} + \frac{\partial B_R}{\partial \tilde{l}}\bigg|_{l=\tilde{l}} < 0$$

and symmetrically $$\partial B_L / \partial r < 0$$ along the best-response locus.

## Empirical specifications

This is a pure theory paper. There are no estimating equations, regression specifications, or structural estimation exercises. The model's equilibrium predictions on the shape of the published coverage distribution are compared qualitatively to three empirical studies of item-level slant (§3.1, AAM pp. 14-15). Budak, Goel, and Rao (2016) measure ideological content of articles at top US news outlets using crowdsourced scoring and find that within-outlet variation in slant far exceeds across-outlet variation and that a large share of items is centrist. Kim, Lelkes, and McCrain (2022) study dynamic media bias in cable news and find large week-by-week variation within program. Braghieri, Eichmeyer, Levy, Mobius, Steinhardt, and Zhong (2024) document article-level slant on social media and find only about 35% of article-level variance is explained by outlet differences. All three patterns are consistent with the model: equilibrium coverage puts mass at both tails and in the center because each IP mixes over an interval of favorable messages, not a single extreme one.

Suen (2004) is discussed in Section 6 as a contrast: in that model media filters rather than lies, and bias can create value for aligned citizens. Here disinformation without commitment destroys value for rational citizens, generating sorting for a different reason.

In Section 7, robustness is established analytically for: (i) a mixed population including naive citizens who take coverage at face value; (ii) multi-homing (citizens observe more than one news item); and (iii) ideology reflecting heterogeneous preferences rather than heterogeneous beliefs. Shapiro (2016) is discussed there as related work on multiple IPs but a single outlet.

## Datasets used

This is a pure theory paper. No empirical datasets are used in the analysis. The model is motivated by and compared qualitatively to published empirical studies of media slant; no proprietary or public microdata are analyzed directly.

## When to read the full paper

Read the source at [https://doi.org/10.3982/ecta22072](https://doi.org/10.3982/ecta22072) if you are:
- modeling how competing interest groups influence information intermediaries (media, social media platforms, scientific discourse)
- studying information transmission under strategic manipulation without commitment to an editorial or publishing rule
- extending the framework to allow sources to be strategic (profit-maximizing, reputation-seeking) rather than passive
- applying the model to social media bot campaigns (Section 2 explicitly discusses this interpretation), public health campaigns, or regulatory communications
- replicating the proofs: the online appendix contains extensions including non-separable cost functions (§OA-13), naive citizens (§OA-15), and preference heterogeneity (§OA-16)

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(4), 2025. The accepted author manuscript is available under CC BY 4.0 from LSE Research Online. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The VOR licence could not be confirmed via Crossref (no license block); the AAM licence and the VOR licence may differ.

> **Attribution (CC BY 4.0 - AAM).** Alonso, Ricardo, and Gerard Padró i Miquel.
> "Competitive Capture of Public Opinion."
> *Econometrica* 93, no. 4 (2025): 1265-1297.
> DOI: 10.3982/ecta22072.
> Accepted author manuscript available at LSE Research Online (eprint/127777)
> under Creative Commons Attribution 4.0 International (CC BY 4.0).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
