---
sidebar_position: 4
---

# Fill a limit order

`LimitOrderProtocolFacade.fillLimitOrder()`

## Parameters:

| Field             | Type                  | Description                                                                      |
| ----------------- | --------------------- | -------------------------------------------------------------------------------- |
| `order`           | `LimitOrder`          | a limit order structure. See [Limit order structure](./limit-order-structure) |
| `signature`       | `LimitOrderSignature` | signature of a limit order                                                       |
| `makingAmount`    | `string`              | amount of maker asset (in token units)                                           |
| `takingAmount`    | `string`              | amount of taker asset (in token units)                                           |
| `thresholdAmount` | `string`              | the threshold for the amount of received asset (in received asset units)         |
| `skipPermit`      | `boolean`             | Should makers permit be skipped during fill evaluation. See below.               |

> Note: to fill a limit order, only one of the amounts must be specified, `makingAmount` or `takingAmount`.
>
> The second one must be set to `0`



## Note on `skipPermit`
Since v3 multiple valid orders may exist with same maker permit, while only first fill should evaluate maker's permit.

To manage this `skipPermit` option was added.


> **Tip:**
>
> You can just check if allowance exists and then set `skipPermit` to `true`.
>
> You can also estimate order with  `skipPermit: true` and fallback to estimation with `skipPermit: false` as well.


## Example

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrder,
    LimitOrderSignature,
    Web3ProviderConnector
} from '@1inch/limit-order-protocol-utils';

const walletAddress = '0xhhh...';
const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';

const order: LimitOrder = {...};
const signature: LimitOrderSignature = '...';

const makerAmount = '400000000';
const takerAmount = '0';
const thresholdAmount = '600000000';

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, chainId, connector);

const callData = limitOrderProtocolFacade.fillLimitOrder({
    order,
    signature,
    makingAmount,
    takingAmount,
    thresholdAmount,

    // interaction = ZX,
    // skipPermit = false,
});

sendTransaction({
    from: walletAddress,
    gas: 210_000, // Set your gas limit
    gasPrice: 40000, // Set your gas price
    to: contractAddress,
    data: callData,
});
```