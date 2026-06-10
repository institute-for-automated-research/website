---
title: "EPA Supply Chain GHG Emission Factors"
description: >-
  How to pull the EPA's NAICS-level supply-chain greenhouse-gas emission
  factors from the no-key CSV, the with-margins vs without-margins distinction,
  and the gotchas that bite pipelines (NAICS vintage, USD year, version).
sidebar:
  label: EPA Supply Chain GHG
  order: 41
tags: [esg, emissions, environmental, cross-section, free, no-api-key, data:us-epa-supply-chain]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key download of EPA Supply Chain GHG Emission Factors v1.3 (SupplyChainGHGEmissionFactors_v1.3.0_NAICS_CO2e_USD2022.csv, 1,016 NAICS codes)
  access: free
---

**The EPA Supply Chain Greenhouse Gas Emission Factors** map each US industry
or commodity (by six-digit NAICS code) to the greenhouse-gas emissions
generated per dollar of its output, expressed as kilograms of carbon-dioxide
equivalent per US dollar. They let you attach an emissions intensity to spending
or revenue by industry without firm-level emissions data. The factors are built
by the Environmental Protection Agency from the USEEIO environmentally-extended
input-output model and are free and public. Used in, for example,
[Allcott, Montanari, Ozaltun & Tan](/wiki/papers/jf/2026/allcott-corporate-social-impact-2026/),
in the corporate-social-impact analysis.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** roughly 1,000 commodities at six-digit NAICS; one factor set
  per release (v1.3 uses 2017 NAICS, 2022 USD, AR5 100-year GWP).
- **Home:** <https://www.epa.gov/climateleadership/supply-chain-greenhouse-gas-emission-factors>

## Access

The factor table is a single CSV, no authentication. The CO2e file gives all
gases combined; a by-GHG file breaks them out by gas:

```bash
# Supply Chain GHG factors v1.3, all GHGs combined (CO2e), 2022 USD, no key
curl -sL -o SupplyChainGHGEmissionFactors_v1.3.0_NAICS_CO2e_USD2022.csv \
  "https://pasteur.epa.gov/uploads/10.23719/1531143/SupplyChainGHGEmissionFactors_v1.3.0_NAICS_CO2e_USD2022.csv"
# By individual greenhouse gas:
curl -sL -o SupplyChainGHGEmissionFactors_v1.3.0_NAICS_byGHG_USD2022.csv \
  "https://pasteur.epa.gov/uploads/10.23719/1531143/SupplyChainGHGEmissionFactors_v1.3.0_NAICS_byGHG_USD2022.csv"
```

The CO2e file has one row per six-digit NAICS code with columns: `2017 NAICS
Code`, `2017 NAICS Title`, `GHG`, `Unit`, `Supply Chain Emission Factors without
Margins`, `Margins of Supply Chain Emission Factors`, `Supply Chain Emission
Factors with Margins`, and `Reference USEEIO Code`. The unit is kg CO2e per 2022
USD at purchaser price.

### Load in Python

```python
import pandas as pd

df = pd.read_csv(
    "SupplyChainGHGEmissionFactors_v1.3.0_NAICS_CO2e_USD2022.csv",
    dtype={"2017 NAICS Code": str},
)
# Attach intensity to spend: emissions_kgCO2e = spend_usd * factor_with_margins
factor = df.set_index("2017 NAICS Code")["Supply Chain Emission Factors with Margins"]
```

## Gotchas (the ones that bite pipelines)

- **With-margins versus without-margins are different numbers.** "Without
  margins" is the production emissions per producer-price dollar; "with margins"
  adds the transport, wholesale, and retail margins so the factor applies to a
  **purchaser-price** dollar (what a buyer actually pays). Multiply spend at
  purchaser prices by the with-margins factor; mixing the two double-counts or
  undercounts.
- **The factor's USD year is fixed; deflate your spend to match.** v1.3 factors
  are per **2022** dollar. Spending in another year's dollars must be deflated to
  the factor's USD year before multiplying, or the intensity is off by inflation.
- **NAICS vintage matters for the join.** v1.3 keys on **2017** NAICS codes.
  Firm or transaction data coded to a different NAICS vintage (2012, 2022) needs
  a concordance first; a code can shift industries across vintages.
- **Versions change methodology, not just numbers.** v1.2 (2021 USD) and v1.3
  (2022 GHG data, 2022 USD) differ in the emissions-data year, USD year, and
  minor method. Pin one version across a project and cite it.
- **A few sectors are excluded.** Electricity, government, and households are
  not given factors at the six-digit level. Spend mapped to those NAICS has no
  factor; handle it explicitly rather than letting it drop to zero.
- **It is a spend-based average, not a firm measurement.** The factor is the
  industry-average emissions per dollar from an input-output model, not any one
  firm's footprint. Two firms in the same NAICS get the same intensity per
  dollar regardless of their actual technology.

## Factor columns

| Column | Meaning |
|--------|---------|
| Supply Chain Emission Factors without Margins | kg CO2e per producer-price USD |
| Margins of Supply Chain Emission Factors | the transport/wholesale/retail margin component |
| Supply Chain Emission Factors with Margins | kg CO2e per purchaser-price USD (without + margins) |
| Reference USEEIO Code | the USEEIO model commodity the factor maps to |

## Citation

Cite the EPA, the dataset and version, the NAICS and USD year, the URL, and the
access date, for example: *U.S. Environmental Protection Agency, Supply Chain
Greenhouse Gas Emission Factors v1.3 (2017 NAICS, 2022 USD), retrieved from
https://www.epa.gov/climateleadership/supply-chain-greenhouse-gas-emission-factors,
accessed YYYY-MM-DD.* Record the version, the with/without-margins choice, and
the USD year so the calculation is reproducible.
