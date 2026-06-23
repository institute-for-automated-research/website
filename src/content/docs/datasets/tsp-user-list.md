---
title: "Technology service provider user list (restricted access)"
description: >-
  A confidential list identifying which banks used a third-party technology
  service provider that was the target of a cyberattack, used as a treatment
  indicator. It is confidential single-source data. This page documents what it
  is and the gotchas, but it was not exercised here.
sidebar:
  label: TSP user list
tags: [banks, cyber-risk, third-party-risk, payments, data:tsp-user-list]
---

:::caution[Confidential single-source data: not exercised here]
**This is a confidential list of bank-vendor relationships.** It is **not for sale
and not publicly downloadable**: it carries **no provenance badge** because there
is no access path we can run here. Identifying which banks used a particular
third-party technology service provider (TSP) is sensitive supervisory/operational
information, obtained under a confidential arrangement. The page documents what
the data is and the gotchas; treat it as unverified. This is the honest grade
under the institute's Verified discipline.
:::

**The TSP user list** identifies which banks were customers of a specific
third-party **technology service provider** that suffered a cyberattack. By
itself it is a small but pivotal dataset: it is the **treatment indicator** that
separates banks that lost access to the provider's services from those that did
not, which is what makes a clean event study of cyber propagation possible. A
paper we distill uses it:
[Kotidis & Schreft](/wiki/papers/jf/2025/kotidis-propagation-cyberattacks-financial-system-2025/)
use the confidential user list as the treatment-group indicator (user versus
nonuser banks) when tracing how a cyberattack propagates through the
[Fedwire](/wiki/datasets/fedwire/) payment system.

- **Cost:** not for sale. Confidential single-source data.
- **Source:** confidential records of which banks used the attacked TSP (a
  vendor-relationship mapping, not a market product).
- **Coverage:** the set of banks linked to one technology service provider around
  the attack event; it is an identification key, not a broad panel.

## Access (restricted)

- **No public download and no resale.** Vendor-relationship identities are
  sensitive and are not published; the list was obtained under a confidential
  arrangement.
- **Event-specific and supervisory in nature.** The list pertains to one provider
  and one episode; it is paired with confidential payment data inside a secure
  environment. There is no standing way for a third party to reach it.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **It is a treatment indicator, not an outcome.** The list only says who used the
  TSP; all the economics comes from pairing it with payment and borrowing data.
  Without the linked outcomes it carries no information on its own.
- **TSP use is not random.** Banks chose this provider for reasons (size, region,
  business model) that may correlate with outcomes; the user/nonuser split is not a
  clean experiment by itself. The design must address selection.
- **Membership can be fuzzy at the edges.** Some banks use a provider partially, or
  through an intermediary; binary user/nonuser coding hides partial exposure.
  Check how borderline relationships are classified.
- **Identifier joins.** Banks on the list must be linked to
  [Fedwire](/wiki/datasets/fedwire/) participants and to
  [Call Reports](/wiki/datasets/call-reports/) (RSSD) for outcomes and controls;
  mergers break the link. Verify the crosswalk.
- **Not redistributable, and the provider is not named.** The vendor and the bank
  identities are confidential; results are reported in aggregate. Plan for
  non-reproducibility of the raw inputs.

## Citation

Cite the source and arrangement, e.g.: *Confidential user list for the attacked
technology service provider; used under arrangement, YYYY-MM-DD.* State the event,
the user/nonuser coding, and the data it was linked to.
