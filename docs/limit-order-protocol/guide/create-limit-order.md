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
| `takerAddress`      | `String?` | by default contains a zero address, which means that a limit order is available for everyone to fill. If you set a value, then the limit order will be available for execution only for the specified address (private limit order) |
| `reciever`          | `String?` | by default contains a zero address, which means that taker asset will be sent to the address of the creator of the limit order. If you set a value, then taker asset will be sent to the specified address |
| `makerAmount`       | `String`  | the number of maker asset tokens that you want to sell (in token units). For example: 5 DAI = 5000000000000000000 units                                                                        |
| `takerAmount`       | `String`  | the number of taker asset tokens that you want to receive for selling the maker asset (in token units). For example: 5 DAI = 5000000000000000000 units                                         |
| `predicate`         | `String?` | a predicate call data. Default: `0x`. See [Predicate docs](./predicate.md)                                                                                                                     |
| `permit`            | `String?` | a permit (`EIP-2612`) call data. Could be built using [utility library](https://github.com/1inch/permit-signed-approvals-utils). Default: `0x`                                                                                                                                                              |
| `interaction`       | `String?` | a call data for InteractiveNotificationReceiver. See more [Interaction receiver docs](./interactive-receiver.md). Default: `0x`                                                                                                                                                        |

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
    "maker": "0xfb3c7ebccccAA12B5A884d612393969Adddddddd",
    "receiver": "0x0000000000000000000000000000000000000000",
    "allowedSender": "0x0000000000000000000000000000000000000000",
    "makingAmount": "100",
    "takingAmount": "200",
    "makerAssetData": "0x",
    "takerAssetData": "0x",
    "getMakerAmount": "0xf4a215c300000...0000",
    "getTakerAmount": "0x296637bf00000...0000",
    "predicate": "0x",
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


## Python Example

To place a limit order in python requires more work since there's no library

In this example we'll place a limit order on ETH mainnet for 100 USDC to 100 USDT

In this example the predicate only uses the timestamp to determine when the order should expire but there are many more functions that can be used for the predicate including and, arbitraryStaticCall, eq, gt, it, or, and nonceEquals. An important note is that the increase nonce function in the limit order contract is how a user can cancel all orders if the nonceEquals function is in the predicate. timestampBelow and nonceEquals checks can be combined with the and function.

```python
from eth_account.messages import encode_structured_data
from web3 import Web3
import requests
import time
w3 = Web3(Web3.HTTPProvider("https://cloudflare-eth.com"))  # you can customize the RPC
wallet_key = "0x0000000000000000000000000000000000000000" # Your wallet private key
wallet_address = "0x0000000000000000000000000000000000000000" # Your wallet address
limit_order_contract = "0x119c71D3BbAC22029622cbaEc24854d3D32D2828" # the limit order contract
ETHERSCAN_API_KEY = "yourapikeytoken" # Etherscan API key, this may not be required or should be changed if the ABIs are changed to literals or a different blockchain API is used like api.bscscan.com or api.polygonscan.com

# create the limit order contract object
limit_order_contract_abi_response = (requests.get('https://api.etherscan.io/api?module=contract&action=getabi&address=' + limit_order_contract +'&apikey=' + ETHERSCAN_API_KEY))
limit_order_contract_abi = limit_order_contract_abi_response.json()['result']
contract = w3.eth.contract(address=limit_order_contract, abi=limit_order_contract_abi)

# wait for 5 second to avoid rate limiting, this can be removed if the API key is specified and not the free api key
time.sleep(5)

# the ERC20 abi is used for getting information from the maker asset and taker asset
erc20_abi_response = (requests.get('https://api.etherscan.io/api?module=contract&action=getabi&address=0x6b175474e89094c44da98b954eedeac495271d0f&apikey=' + ETHERSCAN_API_KEY)) #DAI ABI since it's ERC20 standard
erc20_abi = erc20_abi_response.json()["result"]

# here we define the parameters of the limit order
makerAddress = Web3.toChecksumAddress(wallet_address)
takerAddress = "0x0000000000000000000000000000000000000000" # if specified only this address can be a taker
makerAsset = Web3.toChecksumAddress("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
takerAsset = Web3.toChecksumAddress("0xdac17f958d2ee523a2206206994597c13d831ec7")
makingAmount = "100000000"
takingAmount = "100000000"

makerAssetContract = w3.eth.contract(address=makerAsset, abi=erc20_abi)
takerAssetContract = w3.eth.contract(address=takerAsset, abi=erc20_abi)

# this is required information for the order to be valid
makerAssetData = makerAssetContract.encodeABI(fn_name="transferFrom", args=[makerAddress, takerAddress, int(makingAmount)])
takerAssetData = takerAssetContract.encodeABI(fn_name="transferFrom", args=[takerAddress, makerAddress, int(takingAmount)])
getMakerAmount = contract.encodeABI(fn_name="getMakerAmount", args=[int(makingAmount), int(takingAmount), 0])
getMakerAmount = getMakerAmount[:-64] # [:-64] removes the last parameter to match the javascript library's output for getMakerAmount
getTakerAmount = contract.encodeABI(fn_name="getTakerAmount", args=[int(makingAmount), int(takingAmount), 0])
getTakerAmount = getTakerAmount[:-64] # [:-64] removes the last parameter to match the javascript library's output for getTakerAmount

# lets build the predicate
# contract encode abi with the timestamp below function and the current time + 180 seconds
predicate = contract.encodeABI(fn_name="timestampBelow", args=[w3.eth.getBlock('latest').timestamp + 180])

# lets build the order data
order_data = {
    "makerAsset": makerAsset,
    "takerAsset": takerAsset,
    "maker": makerAddress,
    "allowedSender": "0x0000000000000000000000000000000000000000",
    "receiver": "0x0000000000000000000000000000000000000000",
    "makingAmount": makingAmount,
    "takingAmount": takingAmount,
    "makerAssetData": "0x",
    "takerAssetData": "0x",
    "getMakerAmount": getMakerAmount,
    "getTakerAmount": getTakerAmount,
    "predicate": predicate,
    "permit": "0x",
    "interaction": "0x",
    "salt": "1", # random number to make the order unique, please do not leave it as 1
}
```

a limit order can't be signed properly if all the types are strings here we define what each field is and the type it should be

```python

order_types = [
    {"name": "salt", "type": "uint256"},
    {"name": "makerAsset", "type": "address"},
    {"name": "takerAsset", "type": "address"},
    {"name": "maker", "type": "address"},
    {"name": "receiver", "type": "address"},
    {"name": "allowedSender", "type": "address"},
    {"name": "makingAmount", "type": "uint256"},
    {"name": "takingAmount", "type": "uint256"},
    {"name": "makerAssetData", "type": "bytes"},
    {"name": "takerAssetData", "type": "bytes"},
    {"name": "getMakerAmount", "type": "bytes"},
    {"name": "getTakerAmount", "type": "bytes"},
    {"name": "predicate", "type": "bytes"},
    {"name": "permit", "type": "bytes"},
    {"name": "interaction", "type": "bytes"},
]

# this function will fix the order_data to be a typed object instead of only strings
def fix_data_types(data, types):
    """
    Order data values are all strings as this is what the API expects. This function fixes their types for
    encoding purposes.
    """
    fixed_data = {}
    for dictionary in types:
        if "bytes" in dictionary["type"]:
            fixed_data[dictionary["name"]] = (Web3.toBytes(hexstr=data[dictionary["name"]]))
        elif "int" in dictionary["type"]:
            fixed_data[dictionary["name"]] = int(data[dictionary["name"]])
        else:
            fixed_data[dictionary["name"]] = data[dictionary["name"]]
    return fixed_data

# this is a typed data that the private key will be signing, it conforms to the EIP 712 standard
eip712_data = {
    "primaryType": "Order",
    "types": {
        "EIP712Domain": [
            {"name": "name", "type": "string"},
            {"name": "version", "type": "string"},
            {"name": "chainId", "type": "uint256"},
            {"name": "verifyingContract", "type": "address"},
        ],
        "Order": order_types
    },
    "domain": {
        "name": "1inch Limit Order Protocol",
        "version": "2",
        "chainId": 1,
        "verifyingContract": "0x119c71D3BbAC22029622cbaEc24854d3D32D2828",
    },
    "message": fix_data_types(order_data, order_types),
}
```

Finally the private key will be used to sign the encoded data and broadcast to the API

If you are having problems signing please run the following commands:
``pip install web3 --upgrade; pip install eth-account==0.6.1``

```python
encoded_message = encode_structured_data(eip712_data)
signed_message = w3.eth.account.sign_message(encoded_message, wallet_key)
# this is the limit order that will be broadcast to the limit order API
limit_order = {
    "orderHash": signed_message.messageHash.hex(),
    "signature": signed_message.signature.hex(),
    "data": order_data,
}

limit_order_url = "https://limit-orders.1inch.io/v2.0/1/limit-order" # make sure to change the endpoint if you are not using ETH mainnet
response = requests.post(url=limit_order_url,headers={"accept": "application/json, text/plain, */*", "content-type": "application/json"}, json=limit_order)
# print the full response
print(response.text)
```