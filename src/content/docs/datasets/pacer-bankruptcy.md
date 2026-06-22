---
title: "PACER: federal court records (incl. bankruptcy)"
description: >-
  How PACER (Public Access to Court Electronic Records) works, what it costs
  ($0.10/page, $3.00/document cap, $30/quarter waiver), and why automated bulk
  retrieval is metered rather than free. Covers bankruptcy filings, case-level
  dockets, and how RECAP partially mirrors paid content.
sidebar:
  label: PACER
  order: 64
tags: [bankruptcy, courts, legal, filings, event-data, no-api-key, paid, data:pacer-bankruptcy]
---

:::note[Open to anyone, but metered by per-page fees]
PACER is open to any registered user but charges $0.10 per page, so it is not a free bulk dataset and was not pulled here. The metered structure makes large automated pulls expensive and unpredictable. This page carries no provenance badge: it documents the dataset and access path, but the end-to-end pull was not exercised here.
:::

**PACER** (Public Access to Court Electronic Records), at https://pacer.uscourts.gov, is the federal courts' public electronic access system for case dockets and filed documents across all 94 federal district and bankruptcy courts. For bankruptcy research, it covers case-level filings (chapter 7, chapter 11, chapter 13, and others), filing dates, debtor addresses, and docket entries across all federal bankruptcy courts. Used in, for example, [Slutzky and Xu (2025)](/wiki/papers/rfs/2025/slutzky-financial-consequences-pretrial-detention-2025/), where PACER bankruptcy filings from 2000 to 2011 (318,000 filings in Maryland) form the outcome variable.

- **Cost:** $0.10 per page; $3.00 cap per document; fees waived if total court-record spending in a quarter is $30 or less (per the PACER pricing page, https://pacer.uscourts.gov/pacer-pricing-how-fees-work). The waiver means most low-volume users pay nothing in a given quarter.
- **API key:** no API key required; account registration with billing is required.
- **Bulk access:** no free bulk feed; every page is metered at $0.10; there is no single bulk download endpoint.
- **Coverage:** all 94 federal courts (district, bankruptcy, appellate, Court of International Trade); case dockets and documents.
- **Home:** https://pacer.uscourts.gov

## Access

Access requires a PACER account with billing information on file. Registration is free. Retrieval is per-case, per-docket, and per-document: navigate to the court's PACER site, search by case number or party name, and download docket sheets and documents. Each page is billed at $0.10; the docket sheet and each attached document are billed separately.

Bulk or automated retrieval is technically permitted under PACER terms but every page is metered: a scraping run across thousands of cases can accumulate substantial charges. Legislation to eliminate PACER fees has been introduced in Congress several times but none has become law as of 2026, so fees still apply.

The RECAP project (Free Law Project, https://free.law/recap/) mirrors documents that other users have already downloaded and paid for, making them freely available. Coverage is incomplete and is not authoritative, but it is a partial free complement.

## Gotchas (the ones that bite pipelines)

- **Per-page metering makes large pulls expensive and unpredictable.** Page counts per document vary; a 50-page brief costs $3.00 (capped), but a long docket sheet with many entries may run higher before the per-document cap applies.
- **The $30/quarter waiver resets quarterly.** A pipeline that batches downloads at the start of each quarter gets one free tranche; subsequent pulls in the same quarter are billed. Track cumulative quarterly spend.
- **Docket sheets and attached documents are billed separately.** Fetching a docket sheet to find document numbers does not include the documents; each document download incurs its own per-page charge (capped at $3.00 per document).
- **No single bulk download.** You crawl dockets one at a time; there is no bulk export endpoint.
- **RECAP is partial.** The RECAP mirror covers only documents others have already downloaded; new cases, sealed documents, and unpopular dockets are absent. Do not rely on RECAP for a complete case-level panel.
- **Do not assume PACER will become free.** Bills to eliminate PACER fees have been introduced repeatedly but none has been enacted; plan budgets around the current fee schedule.
- **Court-specific access points.** Each federal court has its own PACER site (e.g., `ecf.mdb.uscourts.gov` for the District of Maryland); the central search at `pcl.uscourts.gov` covers all courts but links out to per-court portals for document downloads.

## Reference

| Field | Value |
|-------|-------|
| Host | https://pacer.uscourts.gov (central); per-court ECF sites for documents |
| Fee | $0.10/page; $3.00/document cap; waived if total court-record spend is $30 or less in the quarter |
| Access | Registered account with billing (free to register) |
| Bulk | Metered, no free bulk feed |
| API key | No (account required, no API key) |
| Free alternative | RECAP (partial mirror; not authoritative) |
| Coverage | All 94 federal courts: bankruptcy, district, appellate |

## Citation

Cite PACER by identifying the specific court, case number(s), document(s), and retrieval date. In a methods appendix, note the fee paid or the waiver threshold applied, and whether documents were retrieved directly from PACER or via the RECAP mirror. A representative format: Public Access to Court Electronic Records (PACER), [Court Name], Case No. [X], retrieved [Date]. Fees paid per PACER pricing schedule.
