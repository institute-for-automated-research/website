---
title: "NMLS Consumer Access"
description: >-
  NMLS Consumer Access is a free per-record lookup for licensed mortgage loan
  originators and companies, but the Terms of Use forbid bulk or automated
  copying and there is no free bulk feed. Paid NMLS B2B Access is the only
  legitimate programmatic path for panel data.
sidebar:
  label: NMLS
  order: 66
tags: [mortgages, licensing, regulatory, no-api-key, view-only, data:nmls]
---

:::note[Free single-record lookup, bulk and automated access prohibited]
NMLS Consumer Access is free per-record in a browser but the Terms of Use forbid bulk or automated copying. Automated requests returned HTTP 403 (TuringTestPage CAPTCHA gate) from this session. There is no free bulk feed. The page carries no provenance badge: it documents the dataset and access path, but the end-to-end pull was not exercised here.
:::

**NMLS Consumer Access** (https://www.nmlsconsumeraccess.org/) is the public-facing portal of the Nationwide Multistate Licensing System, administered by the Conference of State Bank Supervisors (CSBS). It provides free single-record lookup of licensed mortgage loan originators (MLOs) and companies: name, employer, work address, license status and history, and career history across states. Used in, for example, [Frame et al. (2025)](/wiki/papers/jf/2025/frame-impact-minority-representation-mortgage-2025/), where NMLS links loan officer names, employers, and work addresses to HMDA applications and serves as the source for BIFSG race imputation over 2012-2019 across 255,277 loan officers.

- **Cost:** free for individual lookups; paid for programmatic/bulk access.
- **Automation:** prohibited by Terms of Use; CAPTCHA-gated.
- **Bulk and API access:** paid NMLS B2B Access (contracted through CSBS) or third-party vendors (e.g., Comergence NMLS Verification API); no free bulk download or open API.
- **Key required:** no for the free single-record site; contract required for B2B.
- **Content:** MLO name, employer, work address, license status, career history across states.
- **Home:** https://www.nmlsconsumeraccess.org/

## Access

Individual records are freely accessible by name, NMLS ID, or company. No account or key is needed for a single lookup.

Programmatic access to NMLS data at scale requires paid NMLS B2B Access (contracted through CSBS) or a third-party data vendor. These are commercial licensing arrangements and are not self-serve.

Researchers who need a panel of MLO records (as in Frame et al. 2025) typically obtain a negotiated data access agreement. The HMDA-NMLS link used in that paper was built by the Federal Reserve under a confidential data arrangement, not by scraping the Consumer Access site.

## Gotchas (the ones that bite pipelines)

- **Bulk and automated access is contractually prohibited and CAPTCHA-gated.** The Terms of Use state: "You agree that you will not use any process to monitor or copy NMLS Consumer Access information in bulk, or to make voluminous, excessive or repetitive requests for information," and that you will not use any device or routine to bypass volume-request protections, or duplicate, download, publish, or distribute the information for any purpose other than as expressly permitted.
- **The free site is one record at a time only.** There is no batch export, no pagination endpoint returning multiple records, and no downloadable file.
- **The only legitimate programmatic path is paid B2B.** If you need a large panel of MLO records, budget for the NMLS B2B licensing fee or a third-party vendor contract.
- **BIFSG imputation requires name and address data from this source.** Researchers who apply BIFSG to infer loan officer race (as in Frame et al. 2025) need the name and work-address fields. Obtaining those at scale requires the B2B route or a data access agreement with a regulated party that holds the data.
- **License records change over time.** Renewals, state moves, and employer changes update the record; snapshots are time-stamped at extraction. A panel covering multiple years requires either repeated snapshots or B2B access to the change history.
- **NMLS ID is the stable join key.** Name-based search returns false matches for common names; use the NMLS ID as the primary key when linking to HMDA or other mortgage data.

## Reference

| Field | Value |
|-------|-------|
| Host | https://www.nmlsconsumeraccess.org/ (Conference of State Bank Supervisors) |
| Access | Free single-record lookup (no account, no key) |
| Automation | Prohibited by ToU; CAPTCHA-gated |
| Bulk and API | Paid NMLS B2B Access or third-party vendor (e.g., Comergence) |
| Key required | No for free lookup; contract for B2B |
| Content | MLO name, employer, work address, license status, career history |
| Stable key | NMLS ID |

## Citation

Cite NMLS Consumer Access (Conference of State Bank Supervisors), the NMLS IDs or retrieval date range, and the method used (single-record lookups or B2B access). Note that bulk or programmatic use requires paid B2B access.
