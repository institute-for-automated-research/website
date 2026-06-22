---
title: "Maryland Judiciary Case Search"
description: >-
  Maryland's free public court record lookup, why automated access is prohibited
  (CAPTCHA added March 2022, HTTP 403 to bots), how bulk access via a Public
  Information Act request works, and the data-use restrictions on individual
  records.
sidebar:
  label: Maryland Judiciary
  order: 65
tags: [courts, legal, criminal-justice, event-data, no-api-key, view-only, data:maryland-judiciary]
---

:::note[Free to view one case at a time, automated access prohibited]
Maryland Judiciary Case Search is free to view in a browser but the terms forbid bulk or automated access. A CAPTCHA blocks scraping, and automated requests returned HTTP 403 from this session. The page carries no provenance badge: it documents the dataset and access path, but the end-to-end pull was not exercised here.
:::

**Maryland Judiciary Case Search** (https://casesearch.courts.state.md.us/) is the public web interface for Maryland state court records, covering criminal and civil cases. It provides individual case records including charges, hearing dates, dispositions, bail decisions, and party information. Used in, for example, [Slutzky and Xu (2025)](/wiki/papers/rfs/2025/slutzky-financial-consequences-pretrial-detention-2025/), where 1.08 million criminal cases (2000-2016) with commissioner IDs, release decisions, bail types, and charge categories form the core treatment and control data, and 386,938 civil judgment lien filings (2000-2020) form one outcome variable.

- **Cost:** free to view individual cases in a browser.
- **Automation:** prohibited by terms; a CAPTCHA (added March 2022) blocks scraping; automated requests return HTTP 403.
- **Bulk access:** requires a formal Public Information Act (PIA) request to the Administrative Office of the Courts; no self-serve bulk export.
- **Key required:** no.
- **Content:** criminal and civil state court records (charges, hearings, dispositions, bail types, party information, judgment liens).
- **Home (browser only):** https://casesearch.courts.state.md.us/

## Access

Individual records are freely accessible by case number or party name through the browser interface. No account or key is needed for a single lookup.

Legitimate bulk records are available only through a formal Public Information Act (PIA) request directed to the Administrative Office of the Courts' PIA representative. The AOC controls what fields and date ranges are released and may impose fees for large extracts. The notice and terms are at https://www.mdcourts.gov/casesearch2/notice and the Case Search FAQ.

## Gotchas (the ones that bite pipelines)

- **CAPTCHA and HTTP 403 block all scraping.** A CAPTCHA (TuringTestPage) was added in March 2022 specifically to stop automated scraping; direct HTTP requests return 403 without reaching any data.
- **Terms restrict use, including for background checks.** The Judiciary's notice states the information should not be used to perform background checks on an individual, and the Judiciary assumes no responsibility for use of the data. Read the terms before building any application on this data.
- **Bulk access is through a formal PIA process, not a download.** There is no self-serve bulk export; you must contact the AOC, specify scope, and await approval and possible fee assessment. Lead time is not fixed.
- **Records are not stable over time.** Records can be expunged or sealed after extraction, so a panel assembled at two different dates will differ. Document the extraction date carefully.
- **Name-based search produces false matches.** Common names return multiple hits; case number is the reliable key for linking records.
- **Criminal and civil records are on the same system.** The same interface covers district court criminal cases, circuit court criminal cases, and civil cases (including judgment liens); be precise about which filing type you are extracting.

## Reference

| Field | Value |
|-------|-------|
| Host | https://casesearch.courts.state.md.us/ |
| Access | Free browser view, one case at a time |
| Automation | Prohibited; CAPTCHA-gated (March 2022 onward); HTTP 403 to bots |
| Bulk | Formal PIA request to the Administrative Office of the Courts |
| Key required | No |
| Content | Criminal and civil state court records, judgment liens |
| Data stability | Not stable: records may be expunged or sealed after extraction |

## Citation

Cite Maryland Judiciary Case Search by the case number(s) and retrieval date. If bulk data was obtained via a PIA request, note the request date, the responding office (AOC), and the date range and fields provided.
