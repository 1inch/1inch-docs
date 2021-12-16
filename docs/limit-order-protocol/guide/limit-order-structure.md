---
sidebar_position: 3
---

# Limit order structure

| Field            | Type     | Description                                                                                                                        |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `salt`           | `String` | some unique value. It is necessary to be able to create limit orders with the same parameters (so that they have a different hash) |
| `makerAsset`     | `String` | the address of the asset you want to sell (address of a token contract)                                                            |
| `takerAsset`     | `String` | the address of the asset you want to buy (address of a token contract)                                                             |
| `maker`          | `String` | the address of the limit order creator     |
| `receiver`       | `String` | by default contains a zero address, which means that taker asset will be sent to the address of the creator of the limit order. If you set a value, then taker asset will be sent to the specified address   |
| `allowedSender`  | `String` | by default contains a zero address, which means that a limit order is available for everyone to fill. If you set a value, then the limit order will be available for execution only for the specified address (private limit order)     |
| `makingAmount`   | `String` | amount of maker asset     |
| `takingAmount`   | `String` | amount of taker asset     |
| `makerAssetData` | `String` | the technical info about a maker asset and its amount                                                                              |
| `takerAssetData` | `String` | the technical info about a taker asset and its amount                                                                              |
| `getMakerAmount` | `String` | technical information to get the amount of the maker asset                                                                         |
| `getTakerAmount` | `String` | technical information to get the amount of the taker asset                                                                         |
| `predicate`      | `String` | a predicate call data. See more [Predicate docs](./predicate.md)                                                                        |
| `permit`         | `String` | a permit (`EIP-2612`) call data. Could be built using [utility library](https://github.com/1inch/permit-signed-approvals-utils)                                                                                                                 |
| `interaction`    | `String` | a call data for InteractiveNotificationReceiver. See more [Interaction receiver docs](./interactive-receiver.md)                                                                                                          |
