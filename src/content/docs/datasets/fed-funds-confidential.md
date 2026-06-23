---
title: "Confidential federal funds transaction data (restricted access)"
description: >-
  Confidential, transaction-level federal funds borrowing and lending records
  held by the Federal Reserve, beyond what published benchmark rates reveal. It
  is restricted supervisory data: this page documents what it is and the
  gotchas, but it was not exercised here and is not publicly accessible.
sidebar:
  label: Fed funds (confidential)
tags: [money-markets, fed-funds, interbank, banking, federal-reserve, data:fed-funds-confidential]
---

:::caution[Confidential supervisory data: not exercised here]
**Confidential federal funds transaction data is restricted** and held by the
Federal Reserve. It is **not for sale and not publicly downloadable**: it carries
**no provenance badge** because there is no access path we can run here. The
effective federal funds rate and other published benchmarks are public, but the
underlying transaction-level borrowing and lending records are confidential.
Researchers reach them only through a Federal Reserve affiliation or an approved
restricted-data arrangement, inside a secure environment, with output subject to
disclosure review. The page documents what the collection is and the gotchas;
treat it as unverified. This is the honest grade under the institute's Verified
discipline.
:::

**Confidential federal funds transaction data** is the transaction-level record
of overnight interbank borrowing and lending in the federal funds market, held
by the Federal Reserve (collected largely through [FR 2420](/wiki/datasets/fr2420/)
and related reporting). It lets researchers see who borrowed from whom, at what
rate and amount, beyond the published effective rate. A paper we distill uses
it:
[Kotidis & Schreft](/wiki/papers/jf/2025/kotidis-propagation-cyberattacks-financial-system-2025/)
use confidential federal funds data to measure how exposed banks turn to the fed
funds market for borrowing after a cyberattack disrupts their normal payment
flows.

- **Cost:** not for sale. Restricted-access confidential supervisory data.
- **Source:** Federal Reserve (transaction reporting, including FR 2420).
- **Coverage:** federal funds transactions of reporting institutions; the
  reporting universe is a size-thresholded set of banks and FBOs, not every
  market participant.

## Access (restricted)

- **Benchmark rates are public; the transactions are not.** The effective federal
  funds rate and related statistics are published; the transaction-level records
  are confidential.
- **Through a Federal Reserve affiliation or approved program.** Access is limited
  to researchers at the Federal Reserve System or others granted entry to the
  restricted data, worked inside a secure environment with output subject to
  disclosure review.
- See [FR 2420](/wiki/datasets/fr2420/) for the reporting form whose instructions
  are public even though the data cannot be pulled.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The reporting universe is not the whole market.** Only institutions above a
  size threshold report, so the observed transactions are a selected subset.
  Inferring market-wide totals requires care about coverage.
- **Identifying fed funds versus look-alike trades.** Fed funds, Eurodollars, and
  some repo are economically similar overnight transactions; classification rules
  determine what counts as fed funds. Use the collection's definition, not your
  own.
- **Borrowing and lending sides.** A transaction has two reporters with possibly
  different reporting obligations; double-counting or one-sided coverage can bias
  volumes. Confirm which side is observed.
- **Post-crisis structural change.** The fed funds market changed markedly after
  2008 (large reserves, FHLB lending, IOER); volumes and participants are not
  comparable across that break. Do not pool pre- and post-crisis naively.
- **Mapping to bank identifiers.** Reporters must be linked to RSSD IDs and other
  bank data; mergers break the link over time. Verify the crosswalk.
- **Output is disclosure-reviewed and cannot be redistributed.** Transaction-level
  results leave the secure environment only after review, and the micro-data
  itself cannot be shared.

## Citation

Cite the source, e.g.: *Confidential federal funds transaction data (Federal
Reserve), accessed under restricted-data arrangement, YYYY-MM-DD.* For the public
series, cite the effective federal funds rate. State the reporting basis (for
example FR 2420), the sample window, and the reporting population.
