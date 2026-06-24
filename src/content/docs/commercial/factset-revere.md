---
title: "FactSet Revere: supply-chain relationships (licensed)"
description: >-
  FactSet Revere is FactSet's database of inter-firm business relationships
  (supplier, customer, competitor, partner) compiled from company filings,
  presentations, and disclosures. It is licensed: this page documents the
  access path and the gotchas, but the data was not exercised here.
sidebar:
  label: FactSet Revere
tags: [supply-chains, production-networks, relationships, licensed, data:factset-revere]
---

:::caution[Licensed: not exercised here]
**FactSet Revere is a paid licensed product** (FactSet Research Systems),
sometimes reached through [WRDS](/wiki/commercial/wrds/), so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session (no FactSet / WRDS credentials were available). The
page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**FactSet Revere** (the FactSet Supply Chain Relationships, formerly the Revere
Data relationship database) maps directed business relationships between firms:
supplier, customer, competitor, and strategic-partner links, each with a
relationship type and date range. Relationships are sourced from public
disclosures (annual reports, investor presentations, press releases, regulatory
filings) rather than from a transaction ledger, so the graph reflects what firms
*disclose* about their counterparties. It is one of the two standard sources for
firm-level production-network links, the other being
[Compustat Segments](/wiki/commercial/compustat-segments/) (whose principal-customer
disclosures cover an earlier period and fewer links). A paper we distill uses
both together:
[Grigoris & Segal](/wiki/papers/jf/2026/grigoris-investment-upstream-downstream-uncertainty-2026/)
splice Compustat Segments (1976-2002) with FactSet Revere (2003-2019) to build
upstream and downstream supply-chain exposures.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** FactSet Research Systems (the relationship product originated at
  Revere Data, which FactSet acquired).
- **Coverage:** broad global coverage of public companies, denser from the
  mid-2000s onward; relationships are time-stamped with start and (where
  disclosed) end dates.

## Access (when licensed)

- **Through FactSet or WRDS.** The relationship tables are reached through a
  FactSet workstation/API entitlement, or through [WRDS](/wiki/commercial/wrds/)
  where the institution licenses the FactSet Supply Chain Relationships product.
  Check which route your institution provides.
- **Keyed by FactSet entity identifiers.** Links are between FactSet's own
  entity IDs (and security IDs); an extract is a list of directed edges
  (source entity, target entity, relationship type, start/end date) that you map
  to your firm universe.
- Terminal or API credentials are required. Keep any credentials in `.env`,
  never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Disclosure-driven, not transaction-driven.** A link exists because a firm
  disclosed the relationship, not because a flow was observed. Coverage is biased
  toward larger, more transparent firms and toward relationships material enough
  to disclose; absence of a link is not evidence of no relationship.
- **No weights or flow magnitudes.** Revere records that a relationship exists
  and its type, not the dollar volume of trade between the two firms. If you need
  edge weights you must impute them (e.g. from Compustat Segments customer sales
  or from input-output shares); do not treat the unweighted graph as a flow
  matrix.
- **Directionality and roles.** Supplier-versus-customer direction matters for
  upstream/downstream exposure measures; confirm the role convention in the
  field you read, and remember the same pair can carry multiple link types.
- **Splicing with Compustat Segments.** The two sources overlap in the mid-2000s
  and use different identifiers and disclosure rules; a naive concatenation
  double-counts or drops links at the seam. Pin the splice year and reconcile
  identifiers across the boundary.
- **Stale and lingering links.** End dates are only as good as the disclosure
  that retired a relationship; some links persist in the data after they have
  ended in reality. Use the as-of date when building a point-in-time network.
- **Identifier linking.** FactSet entity IDs must be linked to CRSP/Compustat
  (e.g. via CUSIP/permno crosswalks); the join has known mismatches, especially
  for subsidiaries and reorganized entities. Verify the link rather than assuming
  a clean one-to-one map.

## Reference: relationship link types

| Link type | Direction | Typical use |
|---|---|---|
| Supplier | source supplies target | Upstream exposure of the target |
| Customer | source sells to target | Downstream exposure of the source |
| Competitor | undirected | Peer/rival sets |
| Partner | undirected | Joint ventures, alliances |

Each edge carries a relationship type and a start/end date; build the
point-in-time network from the as-of date you need.

## Citation

Cite the provider and database, e.g.: *FactSet Supply Chain Relationships
(Revere) / FactSet Research Systems, accessed YYYY-MM-DD.* State the entity
universe, the relationship types used, the as-of date, and the access route
(FactSet or WRDS) so the network is reproducible.
