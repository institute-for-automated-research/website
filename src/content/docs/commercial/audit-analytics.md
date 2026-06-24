---
title: "Audit Analytics: auditor, disclosure, and restatement data (licensed)"
description: >-
  Audit Analytics is the standard database of audit- and disclosure-related
  corporate events drawn from SEC filings: auditor identity and fees, auditor
  changes, internal-control opinions, financial-statement restatements, late
  filings, and litigation. It is licensed: this page documents the access path
  and the gotchas, but the data was not exercised here.
sidebar:
  label: Audit Analytics
tags: [accounting, disclosure, auditing, licensed, data:audit-analytics]
---

:::caution[Licensed: not exercised here]
**Audit Analytics is a paid licensed product** (Audit Analytics, an Ideagen
company), so it sits in the *Licensed* tier and carries **no provenance badge**:
the access path below was **not** run in this session (no WRDS or Audit Analytics
credentials were available). The page documents the access route and the
gotchas; treat it as unverified until someone exercises it through a licensed
account. This is the honest grade under the institute's Verified discipline.
:::

**Audit Analytics** (an Ideagen company) is the standard database of audit- and
disclosure-related corporate events drawn from SEC filings: **auditor identity
and fees** (audit and non-audit fees), **auditor changes** and dismissals,
**internal-control** (SOX 404) opinions and material weaknesses,
**financial-statement restatements**, **late filings** (NT 10-K/Q),
**litigation**, and other disclosure events. It is the go-to source for
restatement and auditor-quality research. Papers we distill use it, for example
[Griffin et al.](/wiki/papers/jf/2026/griffin-loan-covenant-violations-decline-2026/)
on the decline in loan-covenant violations, which draws on restatement and
disclosure data.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Audit Analytics (an Ideagen company).
- **Coverage:** SEC registrants; auditor and fee data from around 2000,
  restatements and SOX 404 data from the early-2000s onward; sourced from EDGAR
  filings.

## Access (when licensed)

- **Via WRDS.** Audit Analytics is most commonly reached through
  [WRDS](/wiki/commercial/wrds/), under the Audit Analytics libraries (audit fees,
  auditor changes, restatements, SOX 404 internal controls, non-reliance
  restatements, comment letters). Records are keyed by Audit Analytics company
  identifiers that link to the EDGAR CIK and, via a link table, to
  gvkey / Compustat.
- **Via direct subscription.** Audit Analytics also sells a direct subscription
  outside WRDS; check whether your institution licenses it that way.
- The underlying source is [SEC EDGAR](/wiki/datasets/edgar/); Audit Analytics
  parses and codes the filings into structured tables.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Restatement dating has several dates, and the wrong one misaligns event
  studies.** A restatement carries the restated period, the filing /
  announcement date, and the 8-K Item 4.02 non-reliance date; picking the wrong
  date shifts the event window. The "non-reliance" restatement file is the
  stricter subset and differs from the broader restatement file; decide which
  population the question needs.
- **The data is event/filing-keyed, not firm-year-keyed.** A firm can have
  multiple events, so collapsing to a panel requires explicit aggregation rules
  (count, first, most severe) rather than a one-to-one join.
- **Identifier linking needs the WRDS link table.** Audit Analytics keys on its
  own company id and CIK; linking to Compustat gvkey or CRSP runs through the
  WRDS link table, which leaves unmatched cases. Do not assume a clean merge.
- **Fee data depends on what is disclosed.** Audit versus non-audit fee
  classifications and the universe (only registrants disclosing in proxies and
  filings) bias coverage; small and foreign filers differ in what they report.
- **Coverage start dates differ by module.** SOX 404 data is only post-2004, for
  example, so a pooled sample inherits the most-restrictive start date across the
  modules it touches.
- **Definitions and taxonomies evolve.** Material-weakness types and restatement
  categories change over time, so the flags are not constant across the full
  history; pin the extraction date and do not assume a category means the same
  thing across years.
- **Parsed from filings, so classification errors exist.** Because the data is
  coded from filings, there are known classification errors; cross-check
  material cases against the underlying [EDGAR](/wiki/datasets/edgar/) filing
  when a case drives the result.

## Reference: the main modules

| Module | What it holds |
|---|---|
| Audit Fees | Audit and non-audit fees, auditor identity, engagement fields |
| Auditor Changes | Auditor dismissals and resignations, opinion changes |
| Restatements | Financial-statement restatements with restated periods and dates |
| Non-Reliance Restatements | Stricter subset tied to 8-K Item 4.02 non-reliance disclosures |
| SOX 404 Internal Controls | Internal-control opinions and material-weakness types |
| Comment Letters | SEC staff comment letters and responses |

Each module is event/filing-keyed and starts in a different year; field
availability differs between them.

## Citation

Cite the provider and the access route, e.g.: *Audit Analytics (via WRDS),
accessed YYYY-MM-DD.* State the modules used (audit fees, restatements,
non-reliance restatements, SOX 404 internal controls), and the extraction date.
