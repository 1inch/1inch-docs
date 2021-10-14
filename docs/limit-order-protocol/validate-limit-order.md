---
sidebar_position: 10
---

# Validate a limit order

`LimitOrderProtocolFacade.simulateCalls()`

There is the possibility to check limit order validity.  
For example, you can check that a limit order is valid by predicates.

> **Under the hood:**  
> On a `simulateCalls()` call, the contract returns the string like `CALL_RESULTS_01101`  
> If that string contains at least one `0` symbol, then a limit order is invalid, otherwise - valid

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrder,
    Web3ProviderConnector
} from '@1inch/limit-order-protocol';

const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';
const order: LimitOrder = {...};

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, connector);

const addresses = [contractAddress];
const callDatas = [order.predicate];

try {
    const result: boolean = await limitOrderProtocolFacade.simulateCalls(addresses, callDatas);

    console.log('Order validity: ', result);
} catch (error) {
    console.error(error);
}
```
