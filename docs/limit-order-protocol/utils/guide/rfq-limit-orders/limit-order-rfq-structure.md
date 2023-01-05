---
sidebar_position: 1
---

# RFQ order structure

| Field            | Type     | Inner Solidity type | Description                                                                         |
| ---------------- | -------- | ------------------- | ----------------------------------------------------------------------------------- |
| `info`           | `string` | `uint256`           | information about a limit order RFQ is encoded as a decimal number. Read more below |
| `makerAsset`     | `string` | `address`           | the address of the asset you want to sell (address of a token contract)             |
| `takerAsset`     | `string` | `address`           | the address of the asset you want to buy (address of a token contract)              |
| `maker`          | `string` | `address`           | the address of the limit order creator                                              |
| `allowedSender`  | `string` | `address`           | by default contains a zero address, which means that a limit order is available for everyone to fill. If you set a value, then the limit order will be available for execution only for the specified address (private limit order or P2P)      |
| `makingAmount`   | `string` | `uint256`           | amount of maker                                                                     |
| `takingAmount`   | `string` | `uint256`           | amount of taker                                                                     |


## `info` - a composite key
It consists of:

-   the id of the limit order
-   the timestamp of its expiration

Example of generating a limit order RFQ info:

```javascript
const id = 1n;
const expiresInTimestamp = 1623166102n;
const info = (
    (expiresInTimestamp << 64n) | id
).tostring(10);
```
