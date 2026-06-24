---
title: "WRDS / CRSP / Compustat: the paywalled core (academic access)"
description: >-
  WRDS (CRSP, Compustat, IBES, OptionMetrics…) is not free, but most
  universities license it. How affiliated researchers get access, and what
  the free sources here can and cannot substitute for it.
sidebar:
  label: WRDS / CRSP / Compustat
  order: 1
tags: [equities, fundamentals, panel-data, licensed, wrds, data:wrds]
verified:
  date: 2026-05-16
  with: live CRSP (crsp.msf) + Compustat (comp.funda) query through a licensed WRDS session
  access: licensed
---

:::caution[Licensed, not free]
**WRDS is subscription-gated.** The badge above reads **"Access confirmed (licensed)"**,
deliberately *not* the green "Verified" used on free pages: the access path
was exercised in-session against a real institutional WRDS account (live
`crsp.msf` and `comp.funda` rows returned), but the data itself is **not
free**. Without a subscription you cannot reproduce this; see the
free-substitute map below for what you can.
:::

**WRDS** (Wharton Research Data Services) is the standard delivery layer for
the paid datasets that most empirical finance still runs on: **CRSP** (the
canonical US return history), **Compustat** (fundamentals), **IBES**
(analyst forecasts), **OptionMetrics**, **Thomson/Refinitiv**, **ExecuComp**,
**BoardEx**, and more. The [ZeroPaper](https://github.com/alejandroll10/zeropaper)
pipeline uses it when a license is present; when one isn't, the free sources
in this section cover a large share of the same ground.

## Who can get it (academic access)

- **Most universities already license WRDS.** If you are faculty, a PhD
  student, or a research staff member at a subscribing institution, you can
  request a personal WRDS account through your library or finance department
  at no cost to you; the institution pays the subscription.
- Accounts use a username/password plus (typically) Duo 2FA. Keep credentials
  in `.env` (`WRDS_USER`, `WRDS_PASS`); never hard-coded.
- No institutional subscription → no WRDS. There is no individual free tier.
  Use the free substitutes below.

## How the pipeline uses it (when licensed)

A persistent local WRDS server is started once per session so Duo 2FA fires a
single time; scripts then call a thin client rather than reconnecting:

```python
import sys; sys.path.insert(0, "code")
from utils.wrds_client import wrds_query, wrds_start
wrds_start()                                  # no-op if already running
df = wrds_query("SELECT permno, date, ret FROM crsp.msf "
                "WHERE date >= '2000-01-01' AND shrcd IN (10,11) LIMIT 100")
```

Direct `wrds.Connection()` works too, but Duo fires on **every** connection;
open one per script and reuse it.

## Gotchas (the ones that bite pipelines)

- **Don't eager-load large local parquets.** After you cache a large WRDS pull
  to local parquet (CRSP daily ~100M rows, TAQ, 13F/`s34` institutional
  holdings), never reload it with a whole-file `pd.read_parquet(<file>)` -- it
  will OOM-kill the process. Stream it instead:
  `polars.scan_parquet(path).select([...]).filter(...).collect()`
  (column projection + predicate pushdown) so you filter before materializing
  and never hold the full table in RAM. Requires `polars` + `pyarrow`. The same
  filter-first discipline applies at query time (never `SELECT *` on the big
  tables). For the mutual-fund holdings tables, see
  [CRSP Mutual Funds](/wiki/commercial/crsp-mutual-funds/).

## What the free sources here substitute for

| Need | Paid (WRDS) | Free substitute on this wiki |
|---|---|---|
| Asset-pricing factors / test assets | CRSP + own sorts | [Ken French](/wiki/datasets/ken-french/) |
| Cross-sectional anomaly signals | CRSP/Compustat merge | [Open Source Asset Pricing](/wiki/datasets/open-source-asset-pricing/) |
| Data-mining benchmark | Compustat ratios | [Flexible data-mining](/wiki/datasets/flex-mining/) |
| Fundamentals / disclosure | Compustat | [SEC EDGAR](/wiki/datasets/edgar/) (XBRL) |
| Macro calibration | n/a | [FRED](/wiki/datasets/fred/) |
| Retirement / pension assets | n/a | [DOL Form 5500](/wiki/datasets/form-5500/) |

What the free set does **not** replace: survivorship-bias-free long CRSP daily
returns, full Compustat history with point-in-time discipline, IBES detail,
and OptionMetrics. For those, an institutional WRDS license remains necessary.

## Key WRDS libraries (reference)

`crsp` (`msf`, `dsf`, `msenames`, `ccmxpf_linktable`), `comp` (`funda`,
`fundq`, `company`), `ibes` (`statsum_epsus`, `det_epsus`), `optionm`,
`tfn`, `ff`, `execcomp`, `boardex`. Always filter on date and share/exchange
codes; never `SELECT *` on CRSP daily (~100M rows).

## Citation

Cite the underlying provider, not WRDS itself, e.g.: *CRSP, Center for
Research in Security Prices, LLC, accessed via WRDS, YYYY-MM-DD*; *S&P Global
Market Intelligence Compustat, accessed via WRDS, YYYY-MM-DD.*
