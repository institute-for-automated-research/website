---
title: "DTCC commercial paper transaction data (restricted access)"
description: >-
  Transaction-level commercial paper issuance records (issuer, volume, rate,
  maturity) from DTCC, used in money-market and bank-funding research. It is
  confidential, not an off-the-shelf feed. This page documents what it is and
  the gotchas, but it was not exercised here.
sidebar:
  label: DTCC (commercial paper)
tags: [money-markets, commercial-paper, funding, post-trade, data:dtcc]
---

:::caution[Confidential data: not exercised here]
**This is confidential DTCC transaction data.** It is **not an off-the-shelf
feed and not publicly downloadable**: it carries **no provenance badge** because
there is no access path we can run here. Researchers obtained it under a
restricted arrangement with DTCC (the post-trade infrastructure provider). The
page documents what the data is and the gotchas; treat it as unverified. This is
the honest grade under the institute's Verified discipline.
:::

**DTCC commercial paper (CP) transaction data** is the transaction-level record
of CP issuance cleared through DTCC: for each issue, the issuer, volume, rate,
and maturity. Because DTCC clears the bulk of U.S. CP, the data is a broad
cross-section of U.S. CP at the security level, more detailed than the published
aggregate CP outstanding series, but defined by what clears through DTCC. A paper
we distill uses it:
[Anderson, Du & Schlusche](/wiki/papers/jf/2025/anderson-arbitrage-capital-global-banks-2025/)
use DTCC CP transaction data (issuer, volume, rate, maturity) to measure banks'
unsecured funding and build their arbitrage-capital measures, alongside
[FR 2420](/wiki/datasets/fr2420/) money-market rates and
[FR 2644](/wiki/datasets/fr2644/) balance sheets.

- **Cost:** not for sale as a standard feed. Restricted-access confidential data.
- **Source:** DTCC Solutions LLC (the data-licensing subsidiary of the DTCC
  group; CP settles through DTC, the Depository Trust Company, also part of DTCC).
- **Coverage:** CP issuance cleared through DTCC at the transaction level; a
  large share of U.S. CP, but defined by what clears through DTCC, not literally
  every CP trade.

## Access (restricted)

- **No public download.** The transaction microdata is confidential; only
  aggregate CP statistics are public (for example the Fed's CP releases).
- **Through a restricted arrangement with DTCC.** Access is granted per project
  under confidential terms; there is no standing way for a third party to reach
  the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Issuance flow, not outstanding stock.** The data is new issues with their
  terms; building an outstanding-amount series requires aggregating issues by
  maturity, not reading a stock field. Do not confuse issuance with outstanding.
- **CP programs and issuer identity.** An issuer can run multiple programs and
  appear under different names or conduits (especially ABCP); mapping issues to
  the ultimate parent requires care. Verify the issuer crosswalk.
- **Asset-backed versus unsecured CP.** ABCP and unsecured financial/nonfinancial
  CP behave differently; pooling them conflates very different funding. Separate by
  CP type.
- **Rate conventions.** CP is quoted on a discount basis with specific day-count
  conventions; comparing CP rates to other money-market rates needs conversion.
  Convert before comparing.
- **Coverage is defined by DTCC clearing.** Anything not cleared through DTCC is
  outside the data; do not treat it as literally every CP trade. State the
  coverage assumption.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared or re-pulled by others. Plan for non-reproducibility of the raw inputs.

## Citation

Cite the source and arrangement, e.g.: *DTCC commercial paper transaction data
(DTCC Solutions LLC), confidential; used under restricted arrangement,
YYYY-MM-DD.* State the sample window, the CP type (ABCP versus unsecured), and the
issuance-versus-outstanding treatment.
