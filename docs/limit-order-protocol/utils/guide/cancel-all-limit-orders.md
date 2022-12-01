---
sidebar_position: 6
---

# Cancel all limit orders

`LimitOrderProtocolFacade.advanceNonce(count)`  
or  
`LimitOrderProtocolFacade.increaseNonce()`

## First of all, read about [Nonce](#nonce)

`advanceNonce(count) or increaseNonce()` increments the nonce and all limit orders with a predicate to the previous nonce value become invalid

> **Warning!**  
> The approach only works when all orders have the `nonceEquals` predicate

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol-utils';

const walletAddress = '0xhhh...';
const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(
    contractAddress,
    chainId,
    connector
);

const callData = limitOrderProtocolFacade.increaseNonce();

sendTransaction({
    from: walletAddress,
    gas: 210_000, // Set your gas limit
    gasPrice: 40000, // Set your gas price
    to: contractAddress,
    data: callData,
});
```
