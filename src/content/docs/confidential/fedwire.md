---
title: "Fedwire Funds Service: payment-level transaction data (restricted access)"
description: >-
  Fedwire transaction data is the Federal Reserve's confidential record of
  real-time gross-settlement interbank payments: sender, receiver, value, and
  timestamp. It is restricted supervisory data: this page documents what it is
  and the gotchas, but it was not exercised here and is not publicly accessible.
sidebar:
  label: Fedwire
tags: [payments, interbank, banking, federal-reserve, data:fedwire]
---

:::caution[Confidential supervisory data: not exercised here]
**Fedwire transaction data is confidential** and held by the Federal Reserve.
It is **not for sale and not publicly downloadable**: it carries **no provenance
badge** because there is no access path we can run here. Aggregate Fedwire
volume and value statistics are published, but the **payment-level** records are
restricted. Researchers reach them only through a Federal Reserve affiliation or
an approved restricted-data arrangement, inside a secure environment, with output
subject to disclosure review. The page documents what the collection is and the
gotchas; treat it as unverified. This is the honest grade under the institute's
Verified discipline.
:::

**Fedwire Funds Service** is the Federal Reserve's real-time gross-settlement
(RTGS) system for large-value interbank payments. The transaction data is the
**payment-level** record of each transfer: sending institution, receiving
institution, value, and timestamp. It is the canonical source for studying
interbank payment flows, liquidity, and contagion through the payment system. A
paper we distill uses it:
[Kotidis & Schreft](/wiki/papers/jf/2025/kotidis-propagation-cyberattacks-financial-system-2025/)
use Fedwire payment-level data (payments sent and received by banks, in number
and value) to trace how a cyberattack on a set of banks propagates through the
payment system.

- **Cost:** not for sale. Restricted-access confidential payment data.
- **Source:** Federal Reserve (the Fedwire Funds Service).
- **Coverage:** large-value interbank transfers settled over Fedwire; complete at
  the payment level within the system, aggregated to the institution (RSSD) level
  for most research.

## Access (restricted)

- **Aggregate statistics are public; payment-level data is not.** The Fed
  publishes Fedwire volume and value aggregates; the payment-level records are
  confidential and are not posted.
- **Through a Federal Reserve affiliation or approved program.** Payment-level
  access is limited to researchers at the Federal Reserve System or others
  granted entry to the restricted data, worked inside a secure environment with
  output subject to disclosure review.
- Records are typically aggregated to the **depository-institution (RSSD)** level
  for analysis; the raw transfer-level data does not leave the secure
  environment.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Fedwire is not all payments.** It settles large-value transfers; small-value
  and many retail flows go through other rails (ACH, CHIPS, card networks).
  Fedwire flows are not the firm's or system's entire payment activity.
- **Identity is at the institution, not the underlying customer.** A payment is
  between member institutions; the ultimate originator and beneficiary are not
  the Fedwire participants. Do not read a participant as the economic party.
- **Bilateral flows can net or gross differently.** Gross RTGS records every
  transfer, but research aggregations may net within a day or a pair; a netted
  series understates gross throughput. Be explicit about the aggregation.
- **Timing and intraday dynamics matter.** Payments carry timestamps, and
  liquidity and queuing dynamics are intraday; collapsing to daily totals discards
  the timing that often drives the question. Decide your time resolution
  deliberately.
- **Mapping to bank identifiers.** Participants must be linked to RSSD IDs and
  then to other bank data; mergers and reorganizations break the link over time.
  Verify the crosswalk for your window.
- **Output is disclosure-reviewed and cannot be redistributed.** Payment-level
  results leave the secure environment only after review, and the micro-data
  itself cannot be shared.

## Citation

Cite the source, e.g.: *Fedwire Funds Service transaction data (Federal
Reserve), confidential; accessed under restricted-data arrangement, YYYY-MM-DD.*
For the public series, cite the Fed's published Fedwire statistics. State the
aggregation level (for example RSSD), the time resolution, and the sample window.
