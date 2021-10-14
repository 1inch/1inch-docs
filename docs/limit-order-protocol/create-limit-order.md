---
sidebar_position: 3
---

# Create a limit order

`LimitOrderBuilder.buildLimitOrder()`

## Parameters:

| Field               | Type      | Description                                                                                                                                                                                    |
| ------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `makerAssetAddress` | `String`  | the address of the asset you want to sell (address of a token contract)                                                                                                                        |
| `takerAssetAddress` | `String`  | the address of the asset you want to buy (address of a token contract)                                                                                                                         |
| `makerAddress`      | `String`  | an address of the maker (wallet address)                                                                                                                                                       |
| `takerAddress`      | `String?` | the address of the taker for whom the limit order is being created. _This is an optional parameter_, if it is not specified, then the limit order will be available for execution for everyone |
| `makerAmount`       | `String`  | the number of maker asset tokens that you want to sell (in token units). For example: 5 DAI = 5000000000000000000 units                                                                        |
| `takerAmount`       | `String`  | the number of taker asset tokens that you want to receive for selling the maker asset (in token units). For example: 5 DAI = 5000000000000000000 units                                         |
| `predicate`         | `String?` | a predicate call data. Default: `0x`. See [Predicate docs](./predicate.md)                                                                                                                     |
| `permit`            | `String?` | a permit call data. Default: `0x`                                                                                                                                                              |
| `interaction`       | `String?` | an interaction call data. Default: `0x`                                                                                                                                                        |

## Example:

```typescript
import Web3 from 'web3';
import {
    LimitOrderBuilder,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol';

const contractAddress = '0x7643b8c2457c1f36dc6e3b8f8e112fdf6da7698a';
const walletAddress = '0xd337163ef588f2ee7cdd30a3387660019be415c9';
const chainId = 1;

const web3 = new Web3('...');
// You can create and use a custom provider connector (for example: ethers)
const connector = new Web3ProviderConnector(web3);

const limitOrderBuilder = new LimitOrderBuilder(
    contractAddress,
    chainId,
    connector
);

// ...

const limitOrder = limitOrderBuilder.buildLimitOrder({
    makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
    makerAddress: '0xfb3c7ebccccAA12B5A884d612393969Adddddddd',
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
const limitOrderHash = limitOrderBuilder.buildLimitOrderHash(
    limitOrderTypedData
);
```

As result you will receive a structure of [limit order](./limit-order-structure.md). Example:

```json
{
    "salt": "1",
    "makerAsset": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "takerAsset": "0x6b175474e89094c44da98b954eedeac495271d0f",
    "getMakerAmount": "0xf4a215c300000...0000",
    "getTakerAmount": "0x296637bf00000...0000",
    "makerAssetData": "0x23b872dd00000...0000",
    "takerAssetData": "0x23b872dd00000...0000",
    "predicate": "0x961d5b1e0000000000...0000",
    "permit": "0x",
    "interaction": "0x"
}
```

## Limit order signature

To fill a limit order, you need a typed data structure signature.  
You can create a signature following the example above.

But the example uses `Web3ProviderConnector` which is designed to work with a wallet.  
If you need to get the signature on the server side, you can use the `PrivateKeyProviderConnector` and get the signature using the private key.

```typescript
const walletAddress = '0xd337163ef588f2ee7cdd30a3387660019be415c9';

const privateKey =
    'd8d1f95deb28949ea0ecc4e9a0decf89e98422c2d76ab6e5f736792a388c56c7';
const limitOrderTypedData: EIP712TypedData = {
    // ...
};

const web3Provider = new Web3('...');
const privateKeyProviderConnector = new PrivateKeyProviderConnector(
    privateKey,
    web3Provider
);

const signature = await privateKeyProviderConnector.signTypedData(
    walletAddress,
    limitOrderTypedData
);
```
