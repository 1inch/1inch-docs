---
sidebar_position: 10
---

# Limit order remaining

`LimitOrderProtocolFacade.remaining()`

By default, a limit order is created unfilled.  
Until the first fill the `remaining` method will throw an error `LOP: Unknown order`.  
After the first fill, the method will return the remaining amount.

> Note: a limit order can be partially filled

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrderHash,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol-utils';
import {BigNumber} from 'ethers/utils';

const orderMakerAmount = '400000000000'; // initial amount of the limit order
const orderHash: LimitOrderHash = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';
const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(
    contractAddress,
    chainId,
    connector,
);

const remaining = await getRemaining(orderHash);

async function getRemaining(orderHash: string): string {
    try {
        const remaining: BigNumber = limitOrderProtocolFacade.remaining(
            orderHash
        );

        return remaining.tostring();
    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : error.message;

        if (errorMessage.includes('LOP: Unknown order')) {
            return orderMakerAmount;
        }

        throw error;
    }
}
```
