---
title: "Cerved: Italian company financials (licensed)"
description: >-
  Cerved (Cerved Group) provides balance-sheet, income-statement, and credit
  information for Italian incorporated companies, including private firms. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: Cerved
tags: [accounting, firm-financials, private-firms, italy, licensed, data:cerved]
---

:::caution[Licensed: not exercised here]
**Cerved is a paid licensed product** (Cerved Group), so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session (no Cerved credentials were available). The page
documents the access route and the gotchas; treat it as unverified until someone
exercises it through a licensed account. This is the honest grade under the
institute's Verified discipline.
:::

**Cerved** is the main commercial source of financial statements and credit
information for **Italian incorporated companies**, including a deep cross-section
of private firms that are not in listed-firm databases. It provides balance
sheets, income statements, and derived measures (ROA, leverage, liquidity, size,
and Z-score-style credit indicators), built from the company filings Italian firms
must deposit. It is the Italian analog of a near-universe firm-fundamentals
database. A paper we distill uses it:
[Barone, Schivardi & Sette](/wiki/papers/jf/2025/barone-interlocking-directorates-competition-banking-2025/)
use Cerved for firm balance sheets and income statements for all Italian
incorporated companies (ROA, leverage, liquidity, size, Z-score) as firm controls
and in firm-level real-outcome regressions, alongside the
[Bank of Italy Credit Register](/wiki/confidential/bank-of-italy-credit-register/).

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Cerved Group (Italy).
- **Coverage:** Italian incorporated companies (a near-universe of those filing
  accounts), annual; private-firm coverage is the distinguishing strength.

## Access (when licensed)

- **Through a Cerved subscription or research extract.** Data is obtained under a
  commercial licence, keyed by the Italian company identifier; an extract is a set
  of accounting items for a firm list over a date range.
- **Sometimes linked inside secure environments.** In Italian research it is
  frequently merged with confidential central-bank sources (for example the
  [Credit Register](/wiki/confidential/bank-of-italy-credit-register/)) inside a secure
  setting; the Cerved layer itself is the licensed commercial component.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Unconsolidated filings dominate.** Most observations are unconsolidated
  legal-entity accounts; to study a group you must consolidate or you double-count
  intra-group items. Decide consolidation explicitly.
- **Filing thresholds and form types.** Small firms file abbreviated accounts with
  fewer items; an item can be missing because of the form, not the firm. Check the
  filing type before treating a field as absent.
- **Italian GAAP concepts.** Accounting items follow the Italian chart of accounts;
  mapping to Compustat-style fields is not one-to-one. Map carefully before any
  cross-country comparison.
- **Z-score and credit indicators are vendor-constructed.** Cerved's credit and
  Z-score-style measures are proprietary constructions that change methodology over
  time; do not treat them as a fixed academic Altman Z-score. Pin the vintage.
- **Identifier linking.** The Italian company identifier must be linked to other
  sources (credit register, ownership data); mergers and reorganizations break the
  link. Verify the crosswalk.
- **Coverage and backfill over time.** Firm coverage and item availability grow
  over the years; building a sample from currently covered firms biases toward
  survivors. Pin the extraction date.

## Citation

Cite the vendor, e.g.: *Cerved (Cerved Group), accessed YYYY-MM-DD.* State the
accounting items used, the consolidation level, the firm universe, and the
extraction date.
