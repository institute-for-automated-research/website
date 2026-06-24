---
title: "Revelio Labs: workforce and human-capital data (licensed)"
description: >-
  Revelio Labs builds a firm-level workforce panel from public professional
  profiles and job postings: headcount, hiring and attrition, role and
  seniority mix, and education. It is a paid subscription: this page documents
  the access path and the gotchas; the access path was exercised through a
  licensed WRDS session on 2026-06-09.
sidebar:
  label: Revelio Labs
  order: 4
tags: [equities, licensed, panel-data, data:revelio]
verified:
  date: 2026-06-09
  with: live Revelio Labs query (revelio.individual_positions) through a licensed WRDS session
  access: licensed
---

:::note[Access confirmed via a licensed WRDS session]
The keystone query `SELECT * FROM revelio.individual_positions LIMIT 1` was run
against the live dataset through a licensed WRDS Postgres session on 2026-06-09
and returned a real row (24 columns). The page carries the amber "Access
confirmed (licensed)" badge. Reproducing this still requires your own WRDS
account and your institution's Revelio entitlement; the data is licensed, not
open.
:::

**Revelio Labs** builds a firm-level **workforce / human-capital panel** from
public professional profiles and online job postings: headcount, hiring and
attrition flows, role and seniority composition, skills, education (including
the **advanced-degree share** of staff), inferred compensation, and sentiment.
It maps this to companies and, where listed, to tickers. The
[Kwan, Liu & Matthies](/wiki/papers/jf/2026/kwan-liu-matthies-2026/) attention paper
uses Revelio / LinkedIn data for fund human capital (the advanced-degree share
of staff) in its result that more efficient funds employ more highly educated
analysts.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Revelio Labs (workforce intelligence built from aggregated
  public professional profiles and job postings).
- **Coverage:** company-level workforce panels, mapped to a Revelio company
  identifier and, where applicable, to listed-equity tickers.

## Access (when licensed)

- **Direct from Revelio Labs.** Through their data feed, API, or a cloud data
  share (e.g. Snowflake), keyed on the Revelio company identifier.
- **Via WRDS.** Revelio Labs is available on [WRDS](/wiki/commercial/wrds/); the
  keystone query above runs against `revelio.individual_positions` through a
  licensed WRDS session. Some institutions also reach it through a direct
  Revelio feed or cloud share. Check your library's entitlement.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented below.

- **Coverage skews to white-collar, US, and large firms.** The data derives
  from public professional profiles, which over-represent office roles, the
  US, and big employers. Headcount levels are estimates, not a census; treat
  cross-firm level comparisons with care and prefer within-firm changes.
- **Profiles are self-reported and inferred.** Roles, seniority, and dates are
  inferred from self-authored profiles, so titles and start/end dates carry
  noise. Education fields (the advanced-degree share) inherit that noise.
- **Historical panels get restated.** As the underlying models and profile
  coverage are reworked, prior periods can be revised. Pin the data vintage
  and re-pull deliberately rather than mixing vintages.
- **Entity mapping is its own step.** Join on the Revelio company identifier
  and confirm the parent/subsidiary and ticker mapping; a single listed parent
  can span many subsidiary employers, and vice versa.
- **Timing is inferred, not point-in-time disclosure.** Hiring and attrition
  are reconstructed from profile changes, which surface with a lag and
  irregular timing; do not treat a monthly series as a clean as-of snapshot.
- **Define the metric explicitly.** "Advanced-degree share" and similar
  measures depend on how degrees and the staff denominator are defined; state
  the definition so the number is reproducible.

## Citation

Cite the product and vendor, e.g.: *Revelio Labs workforce data, Revelio Labs;
data licensed and accessed YYYY-MM-DD.* State the data vintage and the exact
metric definition used.
