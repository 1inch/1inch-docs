---
sidebar_position: 10
---

# Validate a limit order

There is the possibility to check limit order validity.  
For example, you can check that a limit order is valid by predicates.

## `LimitOrderProtocolFacade.simulate`
```ts
LimitOrderProtocolFacade.simulate(
    targetAddress: string,
    calldata: string
)
```

> **Under the hood:**  
> On a `simulate()` call, the contract reverts with `error SimulationResults(bool success, bytes res)`
>
> Where `success` indicates that call doesn't revers, and `res` is a function call result.

## `LimitOrderProtocolFacade.checkPredicate`
```ts
LimitOrderProtocolFacade.checkPredicate(
    order: LimitOrder
)
```

More lightweight version, only `predicate` field is required in order structure.

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrder,
    Web3ProviderConnector
} from '@1inch/limit-order-protocol-utils';

const contractAddress = limirOrderProtocolAdresses[chainId];
const order: LimitOrder = {...};

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, chainId, connector);

const {
    success: boolean,
    rawResult: string,
} = await limitOrderProtocolFacade.simulate(contractAddress, order.predicate);
console.log('Order validity: ', success);

const predicateValidity: boolean = limitOrderProtocolFacade.checkPredicate(order);
console.log('Predicate validity: ', predicateValidity);

```
