---
title: "CRSP Mutual Funds + Thomson holdings: the survivor-bias-free fund panel (licensed)"
description: >-
  The CRSP Survivor-Bias-Free Mutual Fund Database (returns, TNA, fees, CRSP
  holdings) and the Thomson Reuters Mutual Fund Holdings (s12), linked by
  MFLINKS, are the standard US open-end mutual-fund panel. Licensed via WRDS:
  this page documents the access path and the gotchas; the path was exercised
  through a licensed WRDS session.
sidebar:
  label: CRSP Mutual Funds
  order: 23
tags: [equities, mutual-funds, institutional-investors, panel-data, licensed, wrds, data:crsp-mutual-funds]
verified:
  date: 2026-06-24
  with: live crsp_q_mutualfunds (monthly_tna_ret_nav, holdings, fund_fees) + tr_mutualfunds.s12 + mfl.mflink1 queries through a licensed WRDS session
  access: licensed
---

:::note[Access confirmed via a licensed WRDS session]
The keystone queries against `crsp_q_mutualfunds.monthly_tna_ret_nav`,
`crsp_q_mutualfunds.holdings`, `crsp_q_mutualfunds.fund_fees`,
`tr_mutualfunds.s12`, and `mfl.mflink1` were run through a licensed WRDS
session on 2026-06-24 and returned real rows, so this page carries the amber
"Access confirmed (licensed)" badge. Reproducing it still requires the reader's
own WRDS account and the institution's CRSP and Thomson/Refinitiv entitlements
(licensed, not open).
:::

**The CRSP Survivor-Bias-Free Mutual Fund Database** (`crsp_q_mutualfunds` on
WRDS) is the standard US open-end mutual-fund panel: monthly and daily returns,
NAV, total net assets (TNA), expense ratios, style codes, flows, and
portfolio-level equity holdings. The **Thomson Reuters Mutual Fund Holdings**
database (`tr_mutualfunds`, the `s12` family) is the older holdings source.
**MFLINKS** (`mfl`) is the crosswalk that ties the two together. Together they
are the standard source for the mutual-fund performance, flow, and
active-management literature.

- **Cost:** licensed (via WRDS). No free cleaned tier.
- **Vendors:** CRSP (Center for Research in Security Prices) and Thomson
  Reuters / Refinitiv (LSEG); MFLINKS maintained by WRDS.
- **Coverage:** US open-end mutual funds; survivor-bias-free (dead funds
  retained). CRSP returns run from the 1960s; CRSP holdings begin in the early
  2000s; Thomson `s12` holdings cover the earlier period back to 1980.
- **Unit:** share class (`crsp_fundno`) for returns, fees, and TNA; portfolio
  (`crsp_portno`) for holdings.

## Access (when licensed)

- **Through WRDS.** Query the `crsp_q_mutualfunds`, `tr_mutualfunds`, and
  `mfl` libraries; see [WRDS / CRSP / Compustat](/wiki/commercial/wrds/) for the
  connection recipe and the persistent-server pattern that fires Duo 2FA once.

```python
from utils.wrds_client import wrds_query, wrds_start
wrds_start()                                   # no-op if already running
df = wrds_query("""
    SELECT crsp_fundno, caldt, mret, mtna, mnav
    FROM crsp_q_mutualfunds.monthly_tna_ret_nav
    WHERE caldt >= '2010-01-01'
    LIMIT 5
""")
```

- Credentials are required. Keep them in `.env` (`WRDS_USER`, `WRDS_PASS`),
  never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented.

- **Don't eager-load large local parquets.** The `crsp_q_mutualfunds.holdings`
  table is roughly 438M rows and the Thomson `s12` fund-holdings panel runs to
  ~150M+ rows; daily NAV/return is ~182M rows. After you cache a pull to local
  parquet, never reload it with a whole-file `pd.read_parquet(<file>)` -- it
  will OOM-kill the process. Stream it instead:
  `polars.scan_parquet(path).select([...]).filter(...).collect()`
  (column projection + predicate pushdown) so you filter before materializing
  and never hold the full table in RAM. Requires `polars` + `pyarrow`. The same
  rule applies at query time: always filter `holdings` by `crsp_portno` and a
  date range, never `SELECT *`.
- **Share class vs portfolio: aggregate or you double-count.** A fund's Class A
  and Class I are separate `crsp_fundno` rows with identical underlying assets
  but different fees, TNA, and investor types. Returns, fees, and TNA live at
  the share-class level; holdings live at the portfolio level (`crsp_portno`).
  For most analyses aggregate share classes to the portfolio (TNA-weighted
  returns, summed TNA and flows) using `crsp_q_mutualfunds.portnomap`. Forgetting
  this overweights funds with many share classes.
- **Linking CRSP to Thomson needs MFLINKS, and the keys differ.** CRSP uses
  `crsp_fundno`; Thomson uses its own `fundno`. The bridge is `wficn` (the
  Thomson/Wharton fund identifier) via `mfl.mflink1` (`crsp_fundno` -> `wficn`)
  and `mfl.mflink2` (`wficn` -> Thomson `fundno`). Do not try to match on names
  or tickers. MFLINKS coverage is incomplete and stops being updated at its last
  vintage, so newer funds can be unlinkable.
- **Two holdings sources with different vintages.** CRSP holdings
  (`crsp_q_mutualfunds.holdings`) are already matched to CRSP `permno` and are
  the more recent series; Thomson `s12` is legacy, CUSIP-keyed, and needed for
  the earlier sample. Mixing them without reconciling identifiers and report
  dates produces gaps and duplicates.
- **TNA is missing in spots and flows are implied, not reported.** `mtna` has
  gaps (it is NaN for some months); standard fund flows are computed, not given:
  `flow_t = (TNA_t - TNA_{t-1} * (1 + ret_t)) / TNA_{t-1}` (Sirri and Tufano,
  1998). Decide how to treat missing TNA before computing flows or returns
  divide by a missing base.
- **Filter for fund type and survivorship explicitly.** The database mixes
  equity, bond, balanced, index, and exchange-traded products. Use `crsp_obj_cd`
  or `lipper_class` to isolate the fund type, `et_flag = 'N'` to drop ETFs, and
  the index-fund flag to drop index funds. Because the panel is
  survivor-bias-free, performance studies must **include** dead funds
  (`dead_flag = 'Y'`); excluding them reintroduces the very bias the database
  removes.

## Key tables (reference)

### Returns, NAV, TNA (share-class level)

| Table | Description | Frequency | Key columns |
|---|---|---|---|
| `crsp_q_mutualfunds.monthly_tna_ret_nav` | Monthly returns, TNA, NAV | Monthly | `crsp_fundno`, `caldt`, `mret`, `mtna`, `mnav` |
| `crsp_q_mutualfunds.daily_nav_ret` | Daily returns and NAV | Daily | `crsp_fundno`, `caldt`, `dret`, `dnav` |
| `crsp_q_mutualfunds.monthly_returns` | Monthly returns only | Monthly | `crsp_fundno`, `caldt`, `mret` |

### Characteristics and fees

| Table | Description | Key columns |
|---|---|---|
| `crsp_q_mutualfunds.fund_hdr` | Fund header (name, ticker, CUSIP, dates, flags) | `crsp_fundno`, `fund_name`, `ticker`, `first_offer_dt`, `dead_flag`, `et_flag`, `index_fund_flag` |
| `crsp_q_mutualfunds.fund_style` | Style/objective codes over time | `crsp_fundno`, `begdt`, `enddt`, `crsp_obj_cd`, `lipper_class` |
| `crsp_q_mutualfunds.fund_fees` | Expense ratios, management fees, turnover | `crsp_fundno`, `begdt`, `enddt`, `exp_ratio`, `mgmt_fee`, `turn_ratio`, `actual_12b1` |
| `crsp_q_mutualfunds.fund_flows` | Sales and redemptions (portfolio level) | `crsp_portno`, `report_dt`, `new_sls`, `rein_sls`, `redemp` |

### Holdings and links

| Table | Description | Key columns |
|---|---|---|
| `crsp_q_mutualfunds.holdings` | Portfolio equity holdings (CRSP, ~438M rows) | `crsp_portno`, `report_dt`, `permno`, `percent_tna`, `nbr_shares`, `market_val` |
| `tr_mutualfunds.s12` | Thomson quarterly mutual-fund holdings (~150M+ rows) | `fundno`, `fdate`, `rdate`, `cusip`, `shares`, `change` |
| `tr_mutualfunds.s12type1` | Thomson Type 1 holdings (complete reports) | `fundno`, `fdate`, `cusip`, `shares` |
| `mfl.mflink1` | `crsp_fundno` -> `wficn` | `crsp_fundno`, `wficn` |
| `mfl.mflink2` | `wficn` -> Thomson `fundno` | `wficn`, `fundno` |
| `crsp_q_mutualfunds.portnomap` | `crsp_fundno` -> `crsp_portno` | `crsp_fundno`, `crsp_portno` |

### Common CRSP objective codes

| Code | Description |
|---|---|
| `EDCI` | Equity domestic, capital appreciation |
| `EDYB` | Equity domestic, equity income |
| `EDYM` | Equity domestic, income and growth |
| `IC` / `I` | International (core / general) |
| `M` | Mixed / balanced |
| `OB` | Bond, general |

Use `crsp_obj_cd LIKE 'ED%'` for all domestic-equity funds.

## Standard operations

### Equity-fund monthly returns with style

```python
funds = wrds_query("""
    SELECT a.crsp_fundno, a.caldt, a.mret, a.mtna,
           b.crsp_obj_cd, b.lipper_class
    FROM crsp_q_mutualfunds.monthly_tna_ret_nav AS a
    LEFT JOIN crsp_q_mutualfunds.fund_style AS b
      ON a.crsp_fundno = b.crsp_fundno
      AND a.caldt BETWEEN b.begdt AND b.enddt
    WHERE a.caldt >= '1990-01-01'
      AND b.crsp_obj_cd LIKE 'ED%'      -- domestic equity
""")
```

### Aggregate share classes to the portfolio

```python
portmap = wrds_query("SELECT crsp_fundno, crsp_portno FROM crsp_q_mutualfunds.portnomap")
import pandas as pd
merged = funds.merge(portmap, on='crsp_fundno')
portfolio = (merged.groupby(['crsp_portno', 'caldt'])
    .apply(lambda g: pd.Series({
        'wret': (g['mret'] * g['mtna']).sum() / g['mtna'].sum() if g['mtna'].sum() > 0 else None,
        'tna': g['mtna'].sum()})).reset_index())
```

### Link CRSP funds to Thomson holdings

```python
link = wrds_query("""
    SELECT l1.crsp_fundno, l1.wficn, l2.fundno
    FROM mfl.mflink1 AS l1
    JOIN mfl.mflink2 AS l2 ON l1.wficn = l2.wficn
    WHERE l1.wficn IS NOT NULL
""")
holdings = wrds_query("""
    SELECT fundno, fdate, cusip, shares
    FROM tr_mutualfunds.s12type1
    WHERE fdate >= '2000-01-01'
""")
```

### Stream a cached holdings parquet (don't eager-load)

```python
import polars as pl
sub = (pl.scan_parquet("data/mutual_funds/holdings.parquet")
         .select(["crsp_portno", "report_dt", "permno", "percent_tna"])
         .filter((pl.col("crsp_portno") == 1000001) &
                 (pl.col("report_dt") >= pl.date(2015, 1, 1)))
         .collect())
```

## Citation

Cite each underlying provider, not WRDS itself, e.g.: *CRSP Survivor-Bias-Free
US Mutual Fund Database, Center for Research in Security Prices, LLC, accessed
via WRDS, YYYY-MM-DD*; *Thomson Reuters Mutual Fund Holdings (s12), accessed via
WRDS, YYYY-MM-DD*; and MFLINKS where used. State the date range, the fund-type
filter, whether dead funds are included, whether figures are at the share-class
or portfolio level, and how missing TNA and implied flows were handled.
