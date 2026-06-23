---
title: "IEB: German Integrated Employment Biographies (restricted access)"
description: >-
  The Integrated Employment Biographies (IEB) are the German Institute for
  Employment Research's administrative day-level employment records for the
  universe of workers covered by social security. They are restricted microdata
  accessed through the IAB Research Data Centre. This page documents what they
  are and the gotchas, but they were not exercised here.
sidebar:
  label: IEB (Germany)
tags: [labor, employment-biographies, germany, administrative, data:ieb-germany]
---

:::caution[Restricted administrative microdata: not exercised here]
**The IEB are confidential German administrative microdata** (Institute for
Employment Research, IAB). They are **not for sale and not publicly downloadable**:
they carry **no provenance badge** because there is no access path we can run
here. Researchers reach them only through the **IAB Research Data Centre (FDZ)**,
on-site or via remote execution, with output subject to disclosure review. The
page documents what the collection is and the gotchas; treat it as unverified.
This is the honest grade under the institute's Verified discipline.
:::

**The Integrated Employment Biographies (IEB)** are the IAB's integrated
administrative source covering the working life of essentially every person in
Germany subject to social security: employment spells (with daily start and end
dates), wages, occupation, establishment, benefit receipt, and job-search
registration, assembled from the underlying social-security and employment-agency
notifications. They are the backbone of German register-based labor research and
the source from which many IAB sample products are drawn. A paper we distill uses
them:
[Bias, Lochner, Obernberger & Sevilir](/wiki/papers/jf/2026/bias-going-public-internal-organization-2026/)
use the IEB as the main source for occupational codes, wages, hierarchy layering,
functions, and tenure when measuring how going public reshapes a firm's internal
organization, alongside the [IAB Establishment Panel](/wiki/datasets/iab-establishment-panel/).

- **Cost:** not for sale. Restricted administrative microdata.
- **Producer:** Institute for Employment Research (IAB); access via the FDZ.
- **Coverage:** the universe of workers in social-security-covered employment
  (employment, marginal employment, benefits, job search), with daily spell
  resolution; civil servants and the self-employed are not covered.

## Access (restricted)

- **Through the IAB Research Data Centre (FDZ).** Approved researchers work on-site
  at an FDZ guest workstation or via the FDZ remote-execution service (JoSuA);
  the microdata does not leave the secure environment, and outputs are checked.
- **Project approval required.** Access requires an approved project and a data-use
  agreement; data is provided as a project-specific extract, not an open download.
- The FDZ publishes documentation of the IEB variables and spell structure, so
  the schema can be read even though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is a spell file, not a person-year panel.** Records are employment spells
  with daily start/end dates that overlap and stack (parallel jobs); collapsing to
  a person-year requires deliberate rules about dominant job and overlaps. Do not
  treat raw spells as observations.
- **Wages are right-censored at the contribution ceiling.** Earnings are capped at
  the social-security contribution limit, which varies by year and region;
  high-wage observations are censored. Use an imputation or account for the ceiling.
- **No civil servants or self-employed.** Coverage is social-security employment
  only; whole occupational groups are absent. Do not read the IEB as the entire
  labor force.
- **Occupation and education coding has breaks.** The occupation classification
  (KldB) changed (notably the 2010 revision) and education is imputed by known
  procedures; a code or an education level is not stable across the break. Pin the
  classification and imputation vintage.
- **Establishment identifiers can split or merge.** Establishment IDs change with
  reorganizations and ID renumbering; an apparent open/close can be an
  administrative artifact. Use the FDZ establishment-history flags.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  FDZ only after review, and the microdata itself cannot be shared.

## Citation

Cite the producer and access route, e.g.: *Integrated Employment Biographies
(IEB), Institute for Employment Research (IAB), accessed via the FDZ under
approved project, YYYY-MM-DD.* State the years, the spell-to-panel rules, and the
treatment of the wage ceiling.
