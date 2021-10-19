---
sidebar_position: 3
---

# Limit order structure

| Field            | Type     | Description                                                                                                                        |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `salt`           | `String` | some unique value. It is necessary to be able to create limit orders with the same parameters (so that they have a different hash) |
| `makerAsset`     | `String` | the address of the asset you want to sell (address of a token contract)                                                            |
| `takerAsset`     | `String` | the address of the asset you want to buy (address of a token contract)                                                             |
| `makerAssetData` | `String` | the technical info about a maker asset and its amount                                                                              |
| `takerAssetData` | `String` | the technical info about a taker asset and its amount                                                                              |
| `getMakerAmount` | `String` | technical information to get the amount of the maker asset                                                                         |
| `getTakerAmount` | `String` | technical information to get the amount of the taker asset                                                                         |
| `predicate`      | `String` | a predicate call data. See [Predicate docs](./predicate.md)                                                                        |
| `permit`         | `String` | a permit call data                                                                                                                 |
| `interaction`    | `String` | an interaction call data                                                                                                           |
