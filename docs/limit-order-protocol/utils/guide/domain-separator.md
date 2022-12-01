---
sidebar_position: 12
---

# Domain separator

[Definition of domainSeparator](https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator)

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol-utils';

const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';
const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(
    contractAddress,
    chainId,
    connector,
);

const domainSeparator = await limitOrderProtocolFacade.domainSeparator();
```
