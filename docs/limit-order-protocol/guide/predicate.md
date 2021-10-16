---
sidebar_position: 8
---

# Predicate

`LimitOrderPredicateBuilder`

A limit order can contain one or more predicates that indicate the logic of its validity.  
**There are two types of predicate operators:**

## Conditional operators:

| Name    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| **and** | combine several predicates, return `true` when all predicates are valid   |
| **or**  | combine several predicates, return `true` when one of predicates is valid |

## Comparative operators:

> All comparative operators have three arguments:  
> (**value**: string, **address**: string, **callData**: string)

> **How the operators works:**  
> On an operator call, the contract execute the `callData` for the `address` and compare _**a result**_ with the `value`

| Name   | Description                                     |
| ------ | ----------------------------------------------- |
| **eq** | _**a result**_ must be equal to the `value`     |
| **lt** | _**a result**_ must be less than the `value`    |
| **gt** | _**a result**_ must be greater than the `value` |

## Built-in operators:

> `nonceEquals(makerAddress: string, makerNonce: number)`

The predicate checks that the `makerNonce` is equal to the nonce of `makerAddress`

---

> `timestampBelow(timestamp: number)`

The predicate checks that `timestamp` is greater than the current time

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderProtocolFacade,
    LimitOrderPredicateBuilder,
    LimitOrderPredicateCallData,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol';

const makerAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';
const tokenAddress = '0xcc83bc1050244c98ac562f9faff408f069a137d7';
const balanceOfCallData = '0x000...000';
const contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';

const connector = new Web3ProviderConnector(new Web3('...'));
const limitOrderProtocolFacade = new LimitOrderProtocolFacade(
    contractAddress,
    connector
);
const limitOrderPredicateBuilder = new LimitOrderPredicateBuilder(
    limitOrderProtocolFacade
);

const {
    or,
    and,
    timestampBelow,
    nonceEquals,
    gt,
    lt,
    eq,
} = limitOrderPredicateBuilder;

const simplePredicate: LimitOrderPredicateCallData = and(
    timestampBelow(Math.round(Date.now() / 1000) + 60_000), // a limit order is valid only for 1 minute
    nonceEquals(makerAddress, 4) // a limit order is valid until the nonce of makerAddress is equal to 4
);

const complexPredicate: LimitOrderPredicateCallData = or(
    and(
        timestampBelow(Math.round(Date.now() / 1000) + 60_000),
        nonceEquals(makerAddress, 4),
        gt('10', tokenAddress, balanceOfCallData)
    ),
    or(timestampBelow(5444440000), lt('20', tokenAddress, balanceOfCallData)),
    eq('30', tokenAddress, balanceOfCallData)
);
```
