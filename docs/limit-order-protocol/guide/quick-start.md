---
sidebar_position: 2
---

# Quick start

Example, how to create and fill a limit order:

```typescript
import Web3 from 'web3';
import {
    LimitOrderBuilder,
    LimitOrderProtocolFacade,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol';

const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';
const walletAddress = '0x4758822de63992df27cacf1ba11417bbacace033';
const chainId = 1;

const web3 = new Web3('...');
// You can create and use a custom provider connector (for example: ethers)
const connector = new Web3ProviderConnector(web3);

const limitOrderBuilder = new LimitOrderBuilder(
    contractAddress,
    chainId,
    connector
);

const limitOrderProtocolFacade = new LimitOrderProtocolFacade(
    contractAddress,
    connector
);

// Create a limit order and it's signature
const limitOrder = limitOrderBuilder.buildLimitOrder({
    makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
    makerAddress: walletAddress,
    makerAmount: '100',
    takerAmount: '200',
    predicate: '0x0',
    permit: '0x0',
    interaction: '0x0',
});
const limitOrderTypedData = limitOrderBuilder.buildLimitOrderTypedData(
    limitOrder
);
const limitOrderSignature = limitOrderBuilder.buildOrderSignature(
    walletAddress,
    limitOrderTypedData
);

// Create a call data for fill the limit order
const callData = limitOrderProtocolFacade.fillLimitOrder(
    limitOrder,
    limitOrderSignature,
    '100',
    '0',
    '50'
);

// Send transaction for the order filling
// Must be implemented
sendTransaction({
    from: walletAddress,
    gas: 210_000, // Set your gas limit
    gasPrice: 40000, // Set your gas price
    to: contractAddress,
    data: callData,
});
```

**Note:** you can use any implementation for the provider.  
Just implement the `ProviderConnector` interface:

```typescript
class MyProviderConnector implements ProviderConnector {
    //...
}
```
