---
title: "Uniswap on-chain data (Ethereum)"
description: >-
  Swap, Mint, and Burn event logs for Uniswap V2/V3 liquidity pools on
  Ethereum mainnet, pulled directly from the public blockchain via no-key
  JSON-RPC eth_getLogs; the key operational question is which public RPC
  endpoints actually serve getLogs on archive blocks without a token. Uniswap
  V1, used in early studies, has a different architecture and is noted here too.
sidebar:
  label: Uniswap on-chain
  order: 63
tags: [defi, blockchain, crypto, market-microstructure, event-data, free, no-api-key, data:uniswap-blockchain]
verified:
  level: fetched
  date: 2026-06-22
  with: no-key eth_getLogs via https://eth.drpc.org returning 32 Uniswap V3 USDC/ETH 0.05% Swap events (pool 0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640, first tx 0xd62b5f0ab66c8520683c29a22aa3e275fe3af6cab3dbe342e96feacaf14cb7ae) plus a live eth_blockNumber; V2/V3 Swap topic0 signatures cross-checked
  access: free
---

**Uniswap on-chain data** is the set of Swap, Mint (liquidity added), and Burn
(liquidity removed) events for every Uniswap V2 and V3 pool on Ethereum mainnet,
stored permanently in the public Ethereum blockchain as contract event logs. The
data is retrieved by querying a JSON-RPC endpoint with `eth_getLogs`, filtered
by pool contract address and event topic0 signature. No account and no API key
are required: the chain state is public. Pools are discovered from the Uniswap
factory contracts via their `PairCreated` (V2) or `PoolCreated` (V3) events.
Used in, for example,
[Lehar & Parlour (2025)](/wiki/papers/jf/2025/lehar-decentralized-exchange-uniswap-automated-2025/),
where 95.8 million interactions across 105,098 pools from November 2018 to
December 2022 form the primary dataset.

- **Cost:** free. The Ethereum blockchain is public state.
- **API key:** none required for the working public endpoints listed below;
  several commonly cited endpoints now require a key or block archive requests.
- **Coverage:** Uniswap V2 (launched May 2020, block ~10,000,835) and V3
  (launched May 2021, block ~12,369,621); all pools on Ethereum mainnet.
  Uniswap V1 (launched November 2018) is the earliest version and has a
  different design (see Gotchas); studies of the early period, including Lehar
  & Parlour, cover V1 and V2. Historical pulls require an archive node.
- **V1 factory:** `0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95`
- **V2 factory:** `0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f`
- **V3 factory:** `0x1F98431c8aD98523631AE4a59f267346ea31F984`
- **Home:** <https://uniswap.org>

## Access

Query any JSON-RPC endpoint with `eth_getLogs`, specifying the pool contract
address and the event topic0 hash. The public endpoint `https://eth.drpc.org`
serves archive getLogs with no key (confirmed 2026-06-22). Use small block
windows (20-100 blocks for active pools; see Gotchas).

```bash
# Fetch V3 Swap events for the USDC/ETH 0.05% pool over 100 blocks (drpc, no key)
# Pool: 0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640
# V3 Swap topic0: 0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67
curl -s https://eth.drpc.org \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method":  "eth_getLogs",
    "params": [{
      "fromBlock": "0xF42400",
      "toBlock":   "0xF42464",
      "address":   "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640",
      "topics":    ["0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67"]
    }],
    "id": 1
  }'
```

Pool addresses are not known in advance; discover them from the factory. To
enumerate all V3 pools, query the V3 factory for `PoolCreated` events using
the same `eth_getLogs` method with the factory address and the `PoolCreated`
topic0. V2 pools are discovered via `PairCreated` on the V2 factory.

### Endpoint status (tested 2026-06-22)

| Endpoint | eth_blockNumber | eth_getLogs (archive) | Notes |
|----------|----------------|----------------------|-------|
| `https://eth.drpc.org` | OK | OK | No key. 10,000-block hard cap; data-volume timeout on busy pools around 200 blocks; 20-100 block windows safe. Recommended primary. |
| `https://1rpc.io/eth` | OK | OK | No key. Returns identical logs. Good failover. |
| `https://ethereum-rpc.publicnode.com` | OK | Blocked | Returns "Archive requests require a personal token" on getLogs. |
| `https://eth-mainnet.public.blastapi.io` | OK | Severely capped | 10-block range cap; impractical for backfill. |
| `https://rpc.ankr.com/eth` | Requires key | Requires key | Key required as of 2026-06. |
| `https://cloudflare-eth.com` | Dead | Dead | Returns -32046. |
| `https://eth.llamarpc.com` | Down | Down | HTTP 521. |

## Gotchas (the ones that bite pipelines)

- **Most well-known public RPCs do not serve archive getLogs.** Several
  endpoints that appear in tutorials return `eth_blockNumber` fine but reject
  `eth_getLogs` on archive blocks with "archive request requires token" or
  fail silently (cloudflare: -32046; llamarpc: 521; ankr: requires key). Test
  the actual getLogs call against a known old block, not just connectivity.
  Hard-code drpc plus 1rpc as the working pair and implement failover.
- **Block-range limits are twofold.** There is a hard block-count cap (drpc:
  10,000 blocks; blastapi: 10 blocks) and a separate data-volume timeout (on
  drpc, a high-activity pool like USDC/ETH 0.05% times out around 200 blocks;
  20-100 blocks is safe). Page in small windows and implement exponential
  back-off on timeouts. A chunker that iterates across windows is required for
  any historical backfill.
- **Uniswap V1 is not V2 or V3, and this page's topic0 hashes and decoding are
  V2/V3 only.** The Lehar & Parlour sample begins at V1 launch (November 2018);
  V1 predates the factory-of-pairs design. Each ERC-20 token has its own Vyper
  exchange contract, discovered from the V1 factory
  (`0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95`) via its `NewExchange` event.
  V1 trades emit `TokenPurchase` and `EthPurchase` (not `Swap`) and liquidity
  events `AddLiquidity` and `RemoveLiquidity` (not `Mint` / `Burn`). Read the
  event ABI from a V1 exchange contract before decoding; do not reuse the V2/V3
  signatures below for V1 logs.
- **V2 and V3 ABI schemas differ substantially; do not share a decoder.** V2
  Swap has four unsigned amounts (`amount0In`, `amount1In`, `amount0Out`,
  `amount1Out`); price is inferred from the reserve state via the `Sync` event.
  V3 Swap has signed `amount0` and `amount1` (negative = flowing out of the
  pool) plus `sqrtPriceX96`, `liquidity`, and `tick`; price is
  `(sqrtPriceX96 / 2**96)**2` adjusted for the decimal difference between the
  two tokens. V3 Mint and Burn carry `tickLower` and `tickUpper` for the
  concentrated-liquidity range, which V2 does not have. Indexed event parameters
  (sender, owner, recipient) come from `topics[1]` and `topics[2]`, not from
  the `data` field.
- **Historical backfill requires archive access.** V2 launched at block
  ~10,000,835 (May 2020) and V3 at block ~12,369,621 (May 2021). Fetching
  those early blocks requires an archive node. drpc serves archive getLogs
  without a key (confirmed at block 12,380,000). A full backfill across all
  pools is large; discover pools from the factory first, then run per-pool
  windowed scans.
- **Reorgs near the chain tip.** Do not treat the most recent blocks as final.
  Lag at least 64 blocks from the tip, or wait for the finalized tag. Tag each
  event with `blockNumber`, `transactionHash`, and `logIndex` as a composite
  key, and re-fetch the trailing window after each run to self-heal rows from
  reorged blocks.
- **Token amounts are raw integers.** Divide by `10**decimals` per token before
  using values: USDC uses 6 decimals, WETH uses 18. Fetch decimals from the
  token contract's `decimals()` view function or from a maintained token list.
  Always confirm a pool address came from the correct factory (V2 vs V3) before
  trusting its events.

## Reference

### Factory contracts

| Protocol | Factory address | Pool discovery event |
|----------|----------------|----------------------|
| Uniswap V1 | `0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95` | `NewExchange(address,address)` (per-token Vyper exchange; V1 ABI differs, see Gotchas) |
| Uniswap V2 | `0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f` | `PairCreated(address,address,address,uint256)` |
| Uniswap V3 | `0x1F98431c8aD98523631AE4a59f267346ea31F984` | `PoolCreated(address,address,uint24,int24,address)` |

### Event topic0 signatures (keccak256 of the event signature string)

| Protocol | Event | topic0 |
|----------|-------|--------|
| V2 | `Swap(address,uint256,uint256,uint256,uint256,address)` | `0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822` |
| V2 | `Mint(address,uint256,uint256)` | `0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f` |
| V2 | `Burn(address,uint256,uint256,address)` | `0xdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496` |
| V3 | `Swap(address,address,int256,int256,uint160,uint128,int24)` | `0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67` |
| V3 | `Mint(address,address,int24,int24,uint128,uint256,uint256)` | `0x7a53080ba414158be7ec69b987b5fb7d07dee101fe85488f0853ae16239d0bde` |
| V3 | `Burn(address,int24,int24,uint128,uint256,uint256)` | `0x0c396cd989a39f4459b5fa1aed6a9a8dcdbc45908acfd67e028cd568da98982c` |

### V2 vs V3 decoding summary

| Aspect | V2 | V3 |
|--------|----|----|
| Swap amount fields | Unsigned: `amount0In`, `amount1In`, `amount0Out`, `amount1Out` | Signed: `amount0`, `amount1` (negative = out of pool) |
| Price in Swap | Not present; infer from `Sync(reserve0,reserve1)` | `sqrtPriceX96`; price = `(sqrtPriceX96/2^96)^2` x decimal adjustment |
| Liquidity range | Full range only | Concentrated: `tickLower`, `tickUpper` in Mint/Burn |
| Indexed params in topics | `sender` (Swap, Mint/Burn) | `sender` + `recipient` (Swap); `owner` + ticks (Mint/Burn) |
| Key required | No | No |

## Citation

Cite the Ethereum blockchain as the primary source, specifying the Uniswap
V2 or V3 core contracts (with factory address), the pool address(es) queried
(with token pair and fee tier for V3), the block range covered, the RPC
endpoint used, and the retrieval date. If data were obtained via a derived or
aggregated product (such as The Graph subgraph or Dune Analytics), cite that
layer separately and note the underlying source. Example for a V3 pull:

> Uniswap V3 core contracts (factory `0x1F98431c8aD98523631AE4a59f267346ea31F984`),
> Ethereum mainnet. Swap events fetched via `eth_getLogs` from
> `https://eth.drpc.org`, blocks [from]-[to], retrieved [date].
> Pool: USDC/WETH 0.05% (`0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640`).
