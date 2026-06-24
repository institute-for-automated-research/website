---
title: "Crunchbase: startup and funding data (licensed)"
description: >-
  Crunchbase is a commercial database of startups, funding rounds, investors,
  and company characteristics. A limited free tier exists, but research-grade
  bulk access is licensed. This page documents the access path and the gotchas,
  but the data was not exercised here.
sidebar:
  label: Crunchbase
tags: [startups, venture-capital, private-firms, funding, licensed, data:crunchbase]
---

:::caution[Licensed: not exercised here]
**Crunchbase research access is a paid licensed product** (Crunchbase, Inc.):
the public site exposes a limited free view, but bulk/API access for research
sits in the *Licensed* tier, so this page carries **no provenance badge**. The
access path below was **not** run in this session (no Crunchbase API key or Pro
licence was available). The page documents the access route and the gotchas;
treat it as unverified until someone exercises it through a licensed account.
This is the honest grade under the institute's Verified discipline.
:::

**Crunchbase** is a commercial database of private and public companies focused
on the startup ecosystem: company profiles (founding year, industry, location),
funding rounds (amount, date, stage), investors, acquisitions, and key people.
It is one of the two standard vendor sources for startup and venture-funding
characteristics, the other being [PitchBook](/wiki/commercial/pitchbook/); the two
are frequently used together in the same study. A paper we distill uses it:
[Hu & Ma](/wiki/papers/jf/2025/hu-persuading-investors-video-based-2025/) draw
startup characteristics (founding year, industry, location, funding rounds and
amounts, investor count) from Crunchbase, and separately use
[PitchBook](/wiki/commercial/pitchbook/) business descriptions for idea-novelty
scoring.

- **Cost:** a limited free tier exists; research-grade bulk export and the
  full API require a paid Crunchbase Pro / Enterprise licence.
- **Vendor:** Crunchbase, Inc.
- **Coverage:** global, strongest for U.S. technology startups and venture
  funding; coverage thins for non-U.S. and non-tech firms and for earlier years.

## Access (when licensed)

- **REST API or bulk data export.** Licensed users pull profiles, funding
  rounds, and investor records through the Crunchbase API (entity and search
  endpoints) or a bulk CSV/data export, keyed by Crunchbase's permalink/UUID
  identifiers.
- **Free tier is for lookup, not bulk research.** The public website and the
  free tier allow individual lookups but rate-limit and cap bulk pulls; do not
  build a research panel off the free tier.
- API credentials are required for programmatic access. Keep any credentials in
  `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Crowd-sourced, self-reported entries.** Much of Crunchbase originates from
  user and company submissions, so fields are unevenly populated and can be
  promotional or stale. Treat missing funding amounts as missing, not zero, and
  expect duplicate or merged company records.
- **Selection toward funded, successful, U.S. tech startups.** Companies that
  raise visible rounds and generate press are over-represented; failed or
  bootstrapped firms are under-covered. A sample built from Crunchbase presence
  is a survivorship/visibility-biased sample, not a census of startups.
- **Undisclosed and rounded funding amounts.** Round sizes are often undisclosed
  or reported as ranges/round numbers; the "total funding" field aggregates only
  what was disclosed. Do not treat it as audited capital raised.
- **Date ambiguity.** Founding dates and round announcement dates can differ from
  the actual close date and are sometimes only year-precise; be explicit about
  which date you use for timing.
- **Merging with PitchBook double-counts.** The two vendors overlap heavily but
  use different identifiers, round definitions, and amounts; a naive union
  double-counts rounds and conflicts on amounts. Dedupe on a deliberate match key
  and pick a precedence rule for conflicting fields.
- **Schema and history changes.** Crunchbase has changed its data model and API
  versions over time; a panel assembled across vintages can have inconsistent
  fields. Pin the API version and extraction date.

## Reference: representative entities and fields

| Entity | Representative fields |
|---|---|
| Organization | name, founded-on, category/industry, country/region, status |
| Funding round | announced-on, investment type/stage, money raised, currency |
| Investor | investor name, type, number of investments |
| Acquisition | acquirer, acquiree, announced-on, price (if disclosed) |
| Person | name, role, founder/executive affiliations |

Pull the specific entities and fields you need and record the API version and
extraction date; field availability is uneven across firms and years.

## Citation

Cite the provider and database, e.g.: *Crunchbase / Crunchbase, Inc., accessed
YYYY-MM-DD.* State the entity universe, the fields used, the API version or
export vintage, and the extraction date so the sample is reproducible.
