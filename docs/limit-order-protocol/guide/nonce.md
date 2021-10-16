---
sidebar_position: 7
---

# Nonce

`LimitOrderProtocolFacade.nonce()` - returns the nonce of the current wallet address  
`LimitOrderProtocolFacade.advanceNonce(count: number)` - increases the nonce by the count  
`LimitOrderProtocolFacade.increaseNonce()` - increases the nonce by 1

**Nonce** - this is the so-called `series` of limit orders.  
The nonce is useful when you need to create a bunch of limit orders with the ability to cancel them all later.

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrderPredicateBuilder,
    Web3ProviderConnector
} from '@1inch/limit-order-protocol';

const walletAddress = '0xhhh...';
const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';
const chainId = 1;

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, connector);
const limitOrderPredicateBuilder = new LimitOrderPredicateBuilder(
    limitOrderProtocolFacade
);
const limitOrderBuilder = new LimitOrderBuilder(
    contractAddress,
    chainId,
    connector
);

// Get the current nonce
const nonce = await limitOrderProtocolFacade.nonce(contractAddress);

// Create a limit order with nonceEquals predicate
const predicate = limitOrderPredicateBuilder.nonceEquals(walletAddress, nonce);
const limitOrder = limitOrderBuilder.buildLimitOrder({
    ...,
    predicate
});

// Cancel all orders by advance nonce
const cancelAllOrdersCallData = limitOrderProtocolFacade.advanceNonce();
sendTransaction({
    from: walletAddress,
    gas: 210_000, // Set your gas limit
    gasPrice: 40000, // Set your gas price
    to: contractAddress,
    data: cancelAllOrdersCallData,
});
```
