---
sidebar_position: 5
---

# Cancel a limit order

`LimitOrderProtocolFacade.cancelLimitOrder()`

## Parameters:

| Parameter | Type         | Description                                                                       |
| --------- | ------------ | --------------------------------------------------------------------------------- |
| `order`   | `LimitOrder` | Structure of limit order. See [Limit order structure](./limit-order-structure) |

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrder,
    Web3ProviderConnector
} from '@1inch/limit-order-protocol-utils';

const walletAddress = '0xhhh...';
const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';

const order: LimitOrder = {...};

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, cainId, connector);

const callData = limitOrderProtocolFacade.cancelLimitOrder(order);

sendTransaction({
    from: walletAddress,
    gas: 210_000, // Set your gas limit
    gasPrice: 40000, // Set your gas price
    to: contractAddress,
    data: callData,
});
```
