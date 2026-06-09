---
title: "SDC Platinum: M&A and new-issues deal data (licensed)"
description: >-
  SDC Platinum is the standard deal-level database of mergers and acquisitions
  and new security issues (IPOs, SEOs, debt), assembled by LSEG / Refinitiv. It
  is licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: SDC Platinum
  order: 6
tags: [equities, mergers-and-acquisitions, licensed, event-data, data:sdc-platinum]
---

:::caution[Licensed: not exercised here]
**SDC Platinum is a paid licensed product** (LSEG / Refinitiv), so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session (no Refinitiv / SDC credentials were available). The
page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**SDC Platinum** (Securities Data Company) is the long-standing deal-level
database used across corporate finance: **mergers and acquisitions** (the M&A
database) and **new issues** (the Global New Issues database: IPOs, seasoned
equity offerings, and debt issuance), with deal terms, dates, parties,
advisers, and deal values. It is the standard source for M&A and issuance
samples. Papers we distill use it for deal samples, for example
[Guenzel](/wiki/papers/jf/2025/guenzel-too-deep-effect-sunk-2025/) on sunk-cost
effects in acquisitions and
[Cookson, Niessner & Schiller](/wiki/papers/jf/2026/cookson-social-media-merger-withdrawals-2026/)
on merger withdrawals.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** LSEG / Refinitiv (formerly Thomson Reuters / Thomson Financial;
  the product traces back to Securities Data Company).
- **Coverage:** global M&A from the 1980s and new security issues, deal-level,
  with target/acquirer identifiers, deal status and dates, consideration, and
  league-table fields. Newer access is migrating into Refinitiv Workspace
  (Deals), with the legacy SDC Platinum desktop being retired.

## Access (when licensed)

- **Refinitiv / LSEG, not WRDS.** Unlike CRSP, Compustat, and I/B/E/S, SDC is
  usually reached through the Refinitiv terminal (legacy SDC Platinum desktop or
  the newer Refinitiv Workspace "Deals" application), not through
  [WRDS](/wiki/licensed/wrds/). Check whether your institution licenses it
  separately from its WRDS subscription.
- **Custom reports.** Data is pulled by building a query (deal type, date range,
  nation, status) and exporting a custom report; there is no single canonical
  table. Save the request definition so the extract is reproducible.
- Credentials and a terminal seat are required. Keep any credentials in `.env`,
  never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The sample is the query, so the query is the method.** Because every extract
  is defined by a point-and-click request (deal flags, date window, nation,
  public/private status, minimum deal value), two researchers asking "the same"
  question can get different samples. Record the exact request definition and
  every filter; the extract is not reproducible without it.
- **Deal value is missing for a large share of deals.** Many transactions,
  especially private and small deals, have no disclosed value. Filtering on
  deal value silently selects toward large, public, US deals; treat a
  value-conditioned sample as non-random.
- **Coverage and flags change over time and get backfilled.** SDC has revised
  historical records and added deals retroactively, and definitions of fields
  (deal attitude, completion status, percent sought/acquired) are not uniform
  across the full history. Pin the extraction date and do not assume a field
  means the same thing across decades.
- **Status and double-counting need care.** A single transaction can appear as
  multiple records (amended terms, competing bids, tranches), and the
  completed/withdrawn/pending status drives the sample. Define inclusion on
  status explicitly and de-duplicate on the deal identifier, not on
  target-acquirer-date alone.
- **Documented data-quality errors.** The reliability of SDC M&A fields has been
  questioned in the accounting and finance literature; do not treat individual
  flags as ground truth. Cross-check material deals against filings
  ([SEC EDGAR](/wiki/datasets/edgar/)) or news when the deal drives the result.
- **Identifiers need linking to returns data.** Target and acquirer are keyed by
  SDC's own identifiers plus CUSIP/ticker; join to CRSP via CUSIP with the usual
  historical-CUSIP caveats rather than assuming a clean permno match.

## Reference: the two main databases

| Database | What it holds |
|---|---|
| M&A | Deal-level mergers, acquisitions, tender offers, buybacks, stake purchases |
| Global New Issues | IPOs, seasoned equity offerings, and debt issuance (terms, dates, underwriters) |

Each is queried by deal type, date range, nation, and status into a custom
exported report; field availability differs between the two.

## Citation

Cite the provider and the database, e.g.: *SDC Platinum (M&A) / Refinitiv (LSEG),
accessed YYYY-MM-DD.* State the database (M&A or New Issues), the exact query
filters (deal type, dates, nation, status, deal-value cutoff), and the
extraction date.
