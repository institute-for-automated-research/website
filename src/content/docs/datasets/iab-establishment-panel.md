---
title: "IAB Establishment Panel (restricted access)"
description: >-
  The IAB Establishment Panel is an annual representative survey of German
  establishments covering employment, wages, investment, and business practices.
  It is restricted microdata accessed through the IAB Research Data Centre. This
  page documents what it is and the gotchas, but it was not exercised here.
sidebar:
  label: IAB Establishment Panel
tags: [establishments, survey, germany, administrative, data:iab-establishment-panel]
---

:::caution[Restricted survey microdata: not exercised here]
**The IAB Establishment Panel is confidential German survey microdata**
(Institute for Employment Research, IAB). It is **not for sale and not publicly
downloadable**: it carries **no provenance badge** because there is no access
path we can run here. Researchers reach it only through the **IAB Research Data
Centre (FDZ)**, on-site or via remote execution, with output subject to
disclosure review. The page documents what the collection is and the gotchas;
treat it as unverified. This is the honest grade under the institute's Verified
discipline.
:::

**The IAB Establishment Panel** is an annual, representative survey of German
**establishments** (workplaces), interviewing thousands of establishments each
year about employment, hiring and separations, wages, working time, training,
investment, business expectations, and internal practices. Because it samples
establishments drawn from the social-security universe, it complements the
administrative [IEB](/wiki/datasets/ieb-germany/) (which has the worker spells but
not the survey questions on practices and expectations). A paper we distill uses
it:
[Bias, Lochner, Obernberger & Sevilir](/wiki/papers/jf/2026/bias-going-public-internal-organization-2026/)
use the IAB Establishment Panel to test whether the hierarchical changes they
measure correlate with the formalization of internal processes, alongside the
worker-level [IEB](/wiki/datasets/ieb-germany/).

- **Cost:** not for sale. Restricted survey microdata.
- **Producer:** Institute for Employment Research (IAB); access via the FDZ.
- **Coverage:** a representative annual panel of German establishments (the survey
  began in the western states in 1993 and added the east in 1996), with sampling
  weights for population inference.

## Access (restricted)

- **Through the IAB Research Data Centre (FDZ).** Approved researchers work on-site
  at an FDZ guest workstation or via the FDZ remote-execution service (JoSuA);
  the microdata does not leave the secure environment, and outputs are checked.
- **Project approval required.** Access requires an approved project and a data-use
  agreement; data is a project-specific extract, not an open download.
- The FDZ publishes documentation and questionnaires, so the variables can be read
  even though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is a survey, so use the weights.** Unlike the administrative IEB, this is a
  sample; population statements require the provided sampling weights, and
  large establishments are over-sampled by design. Do not treat raw counts as
  population totals.
- **Establishment, not firm.** The unit is the establishment (workplace), not the
  legal firm; a multi-site firm appears as separate establishments or not at all.
  Do not roll up to the firm without external links.
- **Panel attrition and rotation.** Establishments enter, drop out, and are
  refreshed; the panel is unbalanced and attrition is non-random (closures). Model
  entry/exit rather than assuming a fixed panel.
- **Questionnaire changes year to year.** Topics rotate and question wording
  changes across waves; a variable may exist only in some years or shift meaning.
  Check the questionnaire for each wave you use.
- **Self-reported and recall-based.** Many items are self-reported by the
  respondent and refer to a reference date or prior year; they carry recall and
  reporting error. Cross-check against IEB administrative measures where possible.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  FDZ only after review, and the microdata itself cannot be shared.

## Citation

Cite the producer and access route, e.g.: *IAB Establishment Panel, Institute for
Employment Research (IAB), accessed via the FDZ under approved project,
YYYY-MM-DD.* State the waves used, the application of sampling weights, and the
establishment population.
