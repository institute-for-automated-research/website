---
title: "Competitive Capture of Public Opinion: Alonso & Padró i Miquel (2025)"
description: >-
  Distilled: Two opposed interested parties compete to capture news coverage; rational
  citizens discount informative messages and sort into aligned sources, so competition
  compounds rather than cancels harm to social learning. Econometrica 2025, CC BY 4.0.
  Nine core results with locators, the capture-and-communication game model, and
  equilibrium characterization with the numbered main-text equations.
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
  resultsCount: 9
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
    - { cite: 'Gentzkow and Kamenica (2017)', relation: extends, note: 'extends to competing IPs without commitment; Gentzkow-Kamenica assumes a single committed sender' }
    - { cite: 'Prat (2018)', doi: '10.1086/698107', relation: builds-on, note: 'builds on upper bounds on IP influence on citizen beliefs in a multiple-media setting' }
    - { cite: 'Suen (2004)', doi: '10.1111/j.1468-0297.2004.00213.x', relation: contradicts, note: 'Suen (2004) shows aligned media filtering creates value; here disinformation destroys value for rational citizens regardless of source alignment' }
    - { cite: 'Shapiro (2016)', doi: '10.1016/j.jpubeco.2016.10.004', relation: extends, note: 'extends to multiple competing IPs across multiple sources; Shapiro (2016) has multiple IPs on a single outlet' }
  openQuestions:
    - "Sources are modeled as passive receivers of IP pressure; the trade-off between profit/viewership maximization and yielding to capture is left for future research (conclusion, AAM p. 32)."
    - "Applications to social media audience targeting and the effectiveness of public health campaigns as a function of the existing media landscape remain open (conclusion, AAM p. 32)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text of the accepted author manuscript read (LSE Research Online eprint/127777); six propositions extracted with AAM locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: author order corrected (Kamenica and Gentzkow → Gentzkow and Kamenica, per bibliography p. 34); eq. (7) locator corrected AAM p. 18 → p. 19; eq. (15) locator corrected AAM p. 20 → p. 21. All six Core-results rows confirmed against PDF. Equations (1)-(4), (7), (11)-(12), (15) verified term-by-term." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the assigned PDF and added three missing main-text result rows, complete numbered equations (1)-(19), and expanded formal sections. Not human-verified and not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; all nine Core-results rows and equations (1)-(19) checked. Corrected result qualifications and locators, added the five missing body citations, removed a DOI resolving to a different work, and updated the attribution date. No unresolved result errors." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ecta22072", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref metadata; title, authors, container-title Econometrica, published 2025, pages 1265-1297 confirmed." }
    - { source: "LSE Research Online eprint/127777 cover page (AAM)", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "Accepted author manuscript; Licence stated as Creative Commons: Attribution 4.0." }
  rightsSignalConflict: true
---

**What this is.** The propositions, model, and equilibrium characterization of this paper on competitive capture of public opinion: enough to know what was proved and how, without reading the full 33 pages. To replicate, extend, or verify any result, read the original at [https://doi.org/10.3982/ecta22072](https://doi.org/10.3982/ecta22072). Page references are to the accepted author manuscript (AAM).

## TL;DR

Two interested parties (IPs), right (R) and left (L), compete to capture news items produced by multiple information sources that reach citizens with heterogeneous prior beliefs over a binary state of the world. When an IP captures a news item it can publish any message it likes, genuine disinformation with no commitment and no restriction. Citizens rationally discount suspicious coverage. The nine results in the table cover communication equilibrium, polarized coverage and compressed beliefs, equilibrium existence, strategic substitutes, source-attribute comparative statics, lower instrumental value under capture, and ideological sorting across sources. The model's item-level slant implications are consistent with documented empirical patterns.

## Core results

Page locators refer to the AAM; equation numbers are identical across AAM and VOR.

| # | Result | Locator | Magnitude as stated |
|---|---|---|---|
| R1 | In the unique communication equilibrium, R randomizes over messages with $$\lambda_H(m) \ge \overline{\lambda}$$ and L over messages with $$\lambda_H(m) \le \underline{\lambda}$$; citizens treat every message in each IP's support as conveying the same constant effective likelihood ratio | Proposition 1, eq. (2), AAM p. 13 | $$\lambda^*(m) = \overline{\lambda}$$ for all $$m \in \text{supp}(\tau_R^*)$$; $$\lambda^*(m) = \underline{\lambda}$$ for all $$m \in \text{supp}(\tau_L^*)$$; moderate messages $$m \in (\underline{m}^*, \overline{m}^*)$$ taken at honest face value |
| R2 | Capture shifts the published coverage distribution to the tails: extreme messages become more frequent, moderate messages less frequent, than under honest coverage | Proposition 1, AAM p. 13; Figure 1, AAM p. 15 | Equilibrium density has higher mass at both tails relative to the honest distribution $$F_H(\lambda)$$; model accommodates Budak, Goel, and Rao (2016) and Kim, Lelkes, and McCrain (2022) empirical patterns of within-outlet slant variation |
| R3 | Capture reduces Blackwell-informativeness of the source: the equilibrium message distribution SOSD-dominates honest coverage; under Assumption II, higher effort by either IP compresses citizen posteriors further | Lemma 1, eq. (6), Section 3.2, AAM pp. 16-17 | $$F(\lambda; p) = \pi_L(r,l) + \pi_H(r,l) F_H(\lambda; p)$$ for $$\underline{\lambda} \leq \lambda < \overline{\lambda}$$; R's own effort lowers $$\overline{\lambda}$$ and L's own effort raises $$\underline{\lambda}$$; under Assumption II, either effort also worsens skepticism about the other party's messages |
| R4 | Competing capture efforts are strategic substitutes at the item level: one IP's higher effort reduces the other IP's marginal return to capture | Proposition 3, AAM p. 21 | Under Assumptions I-II, $$B_R$$ decreases as L's effort rises along $$l=\tilde l$$, and $$B_L$$ decreases as R's effort rises along $$r=\tilde r$$ |
| R5 | A horizontal source attribute (favoring one IP) unambiguously increases that IP's capture and decreases the opponent's; strategic substitution amplifies differentiation | Proposition 5, AAM p. 26 | Under Assumptions I-II: if horizontal attribute $$\zeta$$ favoring R increases, there exists an equilibrium $$(\bar{r}, \bar{l})$$ with $$\bar{r}_j \ge r_j^*$$ and $$\bar{l}_j \le l_j^*$$ |
| R6 | Citizens sort ideologically: those with rightist priors choose the source mostly captured by R; those with leftist priors choose the source mostly captured by L | Proposition 6, AAM pp. 28-29 | With symmetric sources and $$\pi_R^1/\pi_R^2 > \pi_H^1/\pi_H^2 > \pi_L^1/\pi_L^2$$: there exist $$\underline{p} \le \bar{p}$$ such that citizens with $$p < \underline{p}$$ choose source 2 and $$p > \bar{p}$$ choose source 1; when $$\pi_H^1 = \pi_H^2$$, sorting is monotone in $$p$$ |
| R7 | A pure-strategy capture equilibrium exists under increasing convex effort costs and concave capture probabilities | Proposition 2, eqs. (9)-(14), AAM p. 19 | For each IP, marginal capture benefit equals marginal cost, with the likelihood-ratio bounds satisfying the two equilibrium mass conditions; existence holds under the proposition's stated conditions |
| R8 | A vertical increase in a source attribute raises equilibrium capture by at least one IP; with Assumption II and direct-effect dominance, both increase capture | Proposition 4, AAM p. 25 | At least one IP raises effort; both IPs raise effort when the additional conditions hold |
| R9 | Under Assumption II, greater capture weakly lowers every citizen's instrumental value from a news item | Lemma 2, eq. (18), AAM p. 27 | $$I^j(p;(r_j,l_j))$$ is non-increasing in $$r_j$$ and $$l_j$$ for every $$p \in (0,1)$$ if and only if Assumption II holds |

**Overall (paper's conclusion).** Competition between IPs does not restore informational balance: opposing capture efforts are strategic substitutes at each item so they do not cancel, they compound harm to social learning. Horizontal differentiation between sources is amplified by competition, not dampened. Citizens rationally sort into ideologically aligned sources, consistent with recent experimental evidence on demand for biased news, not because they prefer bias but because the lies they fear most come from the ideologically opposed source.

## Theory / model

**State, citizens, and honest news.** The state is binary, $$\theta\in\{-1,1\}$$. Citizens have prior $$p=\Pr[\theta=1]$$ drawn from $$F_p$$. An honest item has state-dependent message density $$q_\theta^j(m)$$, and the posterior for a citizen who knows the item is honest is (eq. (1), AAM p. 9):

$$
\mu_H^j(m;p)=\Pr[\theta=1\mid m^j=m,H,p]=\frac{q_1^j(m)p}{q_1^j(m)p+q_{-1}^j(m)(1-p)}. \tag{1}
$$

Messages are ordered by their honest likelihood ratio $$\lambda_H(m)=q_1^j(m)/q_{-1}^j(m)$$. The two interested parties, R and L, choose costly capture efforts simultaneously. Capture occurs with probabilities $$\pi_R(r,l)$$ and $$\pi_L(r,l)$$, while $$\pi_H(r,l)=1-\pi_R(r,l)-\pi_L(r,l)$$ is the probability the item remains honest. A successful party can send any message. Citizens observe the message but not the capture state, and form Bayesian posteriors. Effort costs are increasing and strictly convex. The equilibrium concept is Perfect Bayesian Equilibrium (AAM pp. 9-10).

**Communication equilibrium.** For fixed efforts, Proposition 1 gives a unique communication equilibrium. Messages R sends have honest likelihood ratios at or above $$\bar\lambda$$, and those L sends are at or below $$\underline\lambda$$. The perceived likelihood ratio is censored at the two thresholds (eq. (2), AAM p. 13):

$$
\lambda^*(m)=\begin{cases}\underline\lambda & \text{if }m\leq\underline m^*,\\ \lambda_H(m)&\text{if }\underline m^*<m<\bar m^*,\\ \bar\lambda&\text{if }m\geq\bar m^*\end{cases} \tag{2}
$$

The thresholds solve the probability-weighted tail-mass conditions (eqs. (3)-(4), AAM p. 13):

$$
\int_{\bar\lambda}^{\infty}(\lambda-\bar\lambda)\,dF_{H,-1}(\lambda)=\frac{\pi_R(r,l)}{\pi_H(r,l)}(\bar\lambda-1) \tag{3}
$$

$$
\int_0^{\underline\lambda}(\underline\lambda-\lambda)\,dF_{H,-1}(\lambda)=\frac{\pi_L(r,l)}{\pi_H(r,l)}(1-\underline\lambda) \tag{4}
$$

For a message in R's support, Bayes' rule gives the perceived likelihood ratio in terms of honest signal density and R's mixed reporting strategy (eq. (5), AAM p. 14):

$$
\lambda^*(m)=\frac{\pi_H(r,l)q_1(m)+\pi_R(r,l)\tau_R^*(m)}{\pi_H(r,l)q_{-1}(m)+\pi_R(r,l)\tau_R^*(m)}. \tag{5}
$$

For a citizen with prior $$p$$, the equilibrium distribution of perceived likelihood ratios is the censored mixture (eq. (6), AAM p. 16):

$$
F(\lambda;p)=\begin{cases}0 & \text{if }\lambda<\underline\lambda,\\ \pi_L(r,l)+\pi_H(r,l)F_H(\lambda;p)&\text{if }\underline\lambda\leq\lambda<\bar\lambda,\\ 1&\text{if }\lambda\geq\bar\lambda.\end{cases} \tag{6}
$$

This distribution second-order stochastically dominates the honest-message distribution: capture lowers Blackwell informativeness by compressing posterior beliefs. Lemma 1 (AAM p. 17) states that greater R effort lowers the upper threshold and greater L effort raises the lower threshold; under Assumption II, either party's increased effort also worsens skepticism about the other party's messages. Thresholds are invariant to audience priors, and a more informative honest signal yields a more informative captured item.

**Citizens' source choice.** In the Section 6 extension, each citizen chooses whether to act, receiving payoff one when the action matches the state. The likelihood-ratio cutoff is $$\lambda_{\mathrm{crit}}(p)=(1-p)/p$$. The citizen's instrumental value of source j is the probability-weighted chance of seeing coverage that changes her action (eq. (18), AAM p. 27):

$$
I^j(p)\equiv\begin{cases}\displaystyle\int_0^{\lambda_{\mathrm{crit}}(p)}F^j(\lambda,p)\frac{p(1-p)}{(1-p+\lambda p)^2}\,d\lambda&\text{if }p\geq\frac12,\\[6pt]\displaystyle\int_{\lambda_{\mathrm{crit}}(p)}^{\infty}\bar F^j(\lambda,p)\frac{p(1-p)}{(1-p+\lambda p)^2}\,d\lambda&\text{if }p<\frac12.\end{cases} \tag{18}
$$

Lemma 2 says that this value is non-increasing in either capture effort for all priors if and only if Assumption II holds. For two symmetric sources, Proposition 6's sorting condition is (eq. (19), AAM p. 28):

$$
\frac{\pi_R^1}{\pi_R^2}>\frac{\pi_H^1}{\pi_H^2}>\frac{\pi_L^1}{\pi_L^2}. \tag{19}
$$

Under this condition, citizens with sufficiently low priors choose the source mostly captured by L and those with sufficiently high priors choose the source mostly captured by R. If honest coverage probabilities are equal, sorting is monotone in priors.

## Method

**Capture payoffs and equilibrium conditions.** Let $$V_i(\lambda)$$ be party i's audience-weighted payoff when a message is interpreted as likelihood ratio $$\lambda$$, and let $$F_H(\lambda;p_i)$$ denote the honest likelihood-ratio distribution for its audience. Given citizens' assessment $$(\tilde r,\tilde l)$$, expected party payoffs before effort costs are (eq. (7), AAM p. 19):

$$
W_i(r,l;\tilde r,\tilde l)=\pi_L(r,l)V_i(\underline\lambda(\tilde r,\tilde l))+\pi_H(r,l)\mathbb{E}_H[V_i(\lambda);p_i]+\pi_R(r,l)V_i(\bar\lambda(\tilde r,\tilde l)). \tag{7}
$$

For honest coverage, R's expected payoff is (eq. (8), AAM p. 19):

$$
\mathbb{E}_H[V_R(\lambda);p_i]=\bar F_H(\bar\lambda;p_i)V_i(\bar\lambda)+\int_{\underline\lambda}^{\bar\lambda}V_i(\lambda)\,dF_H(\lambda;p_i)+F_H(\underline\lambda;p_i)V_i(\underline\lambda). \tag{8}
$$

Under Proposition 2's conditions, marginal benefits of capture for R and L are (eqs. (9)-(10), AAM p. 19):

$$
B_R(r,l;\tilde r,\tilde l)\equiv\int_{\underline\lambda(\tilde r,\tilde l)}^{\bar\lambda(\tilde r,\tilde l)}V_R'(\lambda)\left(\frac{\partial\pi_R(r,l)}{\partial r}F_H(\lambda;p_R)-\frac{\partial\pi_L(r,l)}{\partial r}\bar F_H(\lambda;p_R)\right)d\lambda. \tag{9}
$$

$$
B_L(r,l;\tilde r,\tilde l)\equiv\int_{\underline\lambda(\tilde r,\tilde l)}^{\bar\lambda(\tilde r,\tilde l)}V_L'(\lambda)\left(\frac{\partial\pi_R(r,l)}{\partial l}F_H(\lambda;p_R)-\frac{\partial\pi_L(r,l)}{\partial l}\bar F_H(\lambda;p_R)\right)d\lambda. \tag{10}
$$

The pure-strategy equilibrium conditions equate these marginal benefits to marginal costs, while the likelihood-ratio thresholds satisfy the mass equations (eqs. (11)-(14), AAM p. 19):

$$
B_R(r^*,l^*;r^*,l^*)=C_R'(r^*) \tag{11}
$$

$$
B_L(r^*,l^*;r^*,l^*)=C_L'(l^*) \tag{12}
$$

$$
\int_{\bar\lambda}^{\infty}(\lambda-\bar\lambda)\,dF_{H,-1}(\lambda)=\frac{\pi_R(r^*,l^*)}{\pi_H(r^*,l^*)}(\bar\lambda-1) \tag{13}
$$

$$
\int_0^{\underline\lambda}(\underline\lambda-\lambda)\,dF_{H,-1}(\lambda)=\frac{\pi_L(r^*,l^*)}{\pi_H(r^*,l^*)}(1-\underline\lambda) \tag{14}
$$

**Strategic effects.** Assumption I sets capture-probability cross-partials to zero, and Assumption II requires $$\pi_R/\pi_H$$ to increase in L effort and $$\pi_L/\pi_H$$ to increase in R effort. Differentiating R's marginal benefit along the path where citizens correctly anticipate L effort gives the full expression in eq. (15) (AAM p. 21):

$$
\begin{aligned}\frac{\partial B_R(r,l;\tilde r,\tilde l)}{\partial l}+\left.\frac{\partial B_R(r,l;\tilde r,\tilde l)}{\partial\tilde l}\right|_{l=\tilde l}&=-V_R'(\underline\lambda)\left(\frac{\partial\pi_R(r,l)}{\partial r}F_H(\underline\lambda;p_R)-\frac{\partial\pi_L(r,l)}{\partial r}\bar F_H(\underline\lambda;p_R)\right)\frac{\partial\underline\lambda}{\partial\tilde l}\\&\quad+V_R'(\bar\lambda)\left(\frac{\partial\pi_R(r,l)}{\partial r}F_H(\bar\lambda;p_R)-\frac{\partial\pi_L(r,l)}{\partial r}\bar F_H(\bar\lambda;p_R)\right)\frac{\partial\bar\lambda}{\partial\tilde l}.\end{aligned} \tag{15}
$$

Under Assumptions I and II, the result is that the marginal benefit of either party's capture decreases as the opponent's effort rises along the correctly anticipated path: capture efforts are strategic substitutes.

### Relation to prior work

Besley and Prat (2006) study a single interested party and a binary disclosure game; this paper extends the setup to two opposing parties and a continuous message space. Gentzkow and Kamenica (2017) assume a single committed sender, while this model allows competing interested parties without commitment. Prat (2018) provides upper bounds on interested-party influence on citizen beliefs in a multiple-media setting, which this paper builds on. Suen (2004) shows that aligned media filtering can create value; here, disinformation destroys value for rational citizens regardless of source alignment. Shapiro (2016) studies multiple interested parties acting through a single outlet; this paper extends the setting to multiple competing parties across multiple sources.

**Source attributes.** The source-specific best response to anticipated capture is represented by (eq. (16), AAM p. 23):

$$
b_{ij}(r_j,l_j)=\{r'_j:r'_j=h_{ij}(M^j B_{ij}(r'_j,l'_j;r_j,l_j))\}. \tag{16}
$$

Here $$h_{ij}(c)=(C'_{ij})^{-1}(c)$$ is the inverse marginal effort cost. An increase in audience size is a vertical attribute because it raises both parties' direct returns to capture. An ownership or relative-cost change can be horizontal, raising one party's return while lowering the other's. The direct audience-prior effect depends on the audience-average marginal payoff (eq. (17), AAM p. 24):

$$
V_i'(\lambda)=\int\left(\frac{\partial v_i(\mu(\lambda,p))}{\partial\lambda}\right)dF_p^j(p). \tag{17}
$$

Proposition 4 establishes that an increase in a vertical attribute raises at least one party's equilibrium capture; if Assumption II and direct-effect dominance hold, both parties increase effort. Proposition 5 establishes that an increase in a horizontal attribute favoring R raises R's effort and lowers L's in some equilibrium (AAM p. 26).

## Empirical specifications

This is a pure theory paper: it reports no empirical estimating equation, regression, standard-error procedure, sample, or dataset. The theoretical model's item-level slant implications are compared qualitatively with prior empirical patterns in Section 3.1 (AAM pp. 14-15): captured coverage moves mass from the center toward the tails, with more mass in the tail favored by the party exerting greater effort. The paper cites Budak, Goel, and Rao (2016), Kim, Lelkes, and McCrain (2022), and Braghieri et al. (2024) for within-outlet or within-program slant variation and centrist items. These comparisons are motivation and consistency checks, not new empirical specifications.

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

Source: peer-reviewed, *Econometrica* 93(4), 2025. The accepted author manuscript is available under CC BY 4.0 from LSE Research Online. This distillation was updated with LLM assistance on 2026-10-04 and is **not human-verified or independently reproduced**. The VOR licence could not be confirmed via Crossref (no license block); the AAM licence and the VOR licence may differ.

> **Attribution (CC BY 4.0 - AAM).** Alonso, Ricardo, and Gerard Padró i Miquel.
> "Competitive Capture of Public Opinion."
> *Econometrica* 93, no. 4 (2025): 1265-1297.
> DOI: 10.3982/ecta22072.
> Accepted author manuscript available at LSE Research Online (eprint/127777)
> under Creative Commons Attribution 4.0 International (CC BY 4.0).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
