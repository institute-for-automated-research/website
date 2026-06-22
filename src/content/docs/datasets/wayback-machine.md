---
title: "Internet Archive Wayback Machine"
description: >-
  How to query the Internet Archive Wayback Machine for historical web-page
  snapshots from the no-key Availability and CDX APIs, and the gotchas that bite
  pipelines (coverage is not continuous, a snapshot is a crawl not the live
  page, rate limits, capture != content change).
sidebar:
  label: Wayback Machine
  order: 45
tags: [web-archive, alternative-data, text, free, no-api-key, data:wayback-machine]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-key pull of the Wayback Availability API (archive.org/wayback/available for sec.gov, returned the closest 2010 snapshot)
  access: free
---

**The Internet Archive Wayback Machine** is a public archive of historical
snapshots of web pages, captured by crawlers since 1996. For research it is the
standard way to observe a website *as it was* at a past date: page content,
update frequency, whether a site existed, and how it changed over time. The data
is free and public. Used in, for example,
[Hu & Ma](/wiki/papers/jf/2025/hu-persuading-investors-video-based-2025/), where
website update frequency over the three years after a pitch is built from
Wayback Machine captures as a startup-survival measure.

- **Cost:** free, public.
- **API key:** none required (a descriptive `User-Agent` is courteous; the APIs
  are rate-limited).
- **Coverage:** snapshots from 1996 onward; depth varies enormously by site
  (popular sites captured many times a day, obscure ones rarely).
- **Home:** <https://web.archive.org/>

## Access

Two no-key JSON APIs serve the archive programmatically.

**Availability API** answers "is there a snapshot of this URL near this date?":

```bash
# Closest snapshot of sec.gov to 1 Jan 2010
curl -sL "https://archive.org/wayback/available?url=sec.gov&timestamp=20100101"
# -> {"archived_snapshots":{"closest":{"available":true,
#     "url":"http://web.archive.org/web/20100102140201/http://www.sec.gov/", ...}}}
```

**CDX API** lists the full capture history, one row per snapshot, and is what you
want for update-frequency or change-over-time measures:

```bash
# All captures of a URL in 2009, deduplicated to one per day
curl -sL "https://web.archive.org/cdx/search/cdx?url=example.com\
&from=20090101&to=20091231&output=json&collapse=timestamp:8"
```

CDX returns `[urlkey, timestamp, original, mimetype, statuscode, digest,
length]` per capture. The `digest` is a content hash: two consecutive captures
with the same `digest` are byte-identical, which is how you separate a *recrawl*
from an actual *content change*. To fetch the archived page itself, request
`https://web.archive.org/web/<timestamp>/<original-url>` (append `id_` to the
timestamp, e.g. `20100102140201id_`, for the raw capture without the Wayback
toolbar).

### Load in Python

```python
import requests

def captures(url, year):
    cdx = ("https://web.archive.org/cdx/search/cdx?url=" + url +
           f"&from={year}0101&to={year}1231&output=json&collapse=digest")
    rows = requests.get(cdx, timeout=60,
                        headers={"User-Agent": "research (contact@example.org)"}).json()
    return rows[1:]  # first row is the column header
# len(captures(...)) after collapse=digest = number of distinct content versions
```

## Gotchas (the ones that bite pipelines)

- **Coverage is not continuous, and absence is not proof.** Snapshot density
  depends on crawl priority, robots directives, and luck. A gap in captures does
  **not** mean the page did not change or did not exist; it means it was not
  crawled. Treat the archive as an irregular, selection-biased sample, not a
  complete log. Update-frequency measures should be normalized by crawl
  frequency or restricted to well-crawled sites.
- **A capture is a crawl, not a content change.** The raw capture count
  overstates how often a page changed: the same content is recrawled repeatedly.
  Use `collapse=digest` (content hash) or compare the `digest` field across rows
  to count *distinct* versions; counting raw timestamps inflates "activity".
- **Rate limits are real and the APIs return 429.** The CDX endpoint in
  particular throttles aggressively; sustained scraping returns
  `429 Too Many Requests`. Throttle to a few requests per second, back off on
  429, and cache responses. For large jobs the Internet Archive publishes bulk
  CDX/WARC access paths rather than hammering the live API.
- **The snapshot is what the crawler saw, not the live page.** JavaScript-heavy
  pages, lazy-loaded content, and resources blocked at crawl time may be missing
  or rendered differently from the original. The archived HTML can also embed
  the Wayback toolbar; use the `id_` modifier on the timestamp to get the raw
  capture.
- **Timestamps are UTC and 14 digits.** The capture timestamp is
  `YYYYMMDDhhmmss` in UTC. The Availability API's `closest` match can be on
  either side of your target date and arbitrarily far away if coverage is thin;
  always check how far `timestamp` is from what you asked for.
- **`statuscode` matters.** CDX rows include captures of redirects (3xx) and
  errors (4xx/5xx). Filter to `statuscode=200` (and the right `mimetype`) before
  treating a row as a real page view, or `filter=statuscode:200` in the query.

## Endpoints

| Endpoint | Use |
|---|---|
| `archive.org/wayback/available?url=&timestamp=` | Nearest single snapshot to a date (existence check) |
| `web.archive.org/cdx/search/cdx?url=` | Full capture history; `output=json`, `collapse=`, `filter=` |
| `web.archive.org/web/<ts>/<url>` | The archived page itself (`<ts>id_` for the raw capture) |

## Citation

Cite the Internet Archive, the Wayback Machine, the archived URL and capture
timestamp, and the access date, for example: *Internet Archive, Wayback Machine,
snapshot of http://www.sec.gov/ captured 2010-01-02 (https://web.archive.org/web/20100102140201/http://www.sec.gov/),
accessed YYYY-MM-DD.* Record the exact capture timestamp so the snapshot is
reproducible, since the live site will have changed.
