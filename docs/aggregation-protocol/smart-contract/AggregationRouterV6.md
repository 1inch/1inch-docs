# AggregationRouterV6






## Derives
- [GenericRouter](GenericRouter.md)
- [ClipperRouter](ClipperRouter.md)
- [UnoswapRouter](UnoswapRouter.md)
- [LimitOrderProtocolRFQ](LimitOrderProtocolRFQ.md)
- [IUniswapV3SwapCallback](interfaces/IUniswapV3SwapCallback.md)
- [Permitable](helpers/Permitable.md)
- [EIP712](https://docs.openzeppelin.com/contracts/3.x/api/drafts#EIP712)
- [EthReceiver](helpers/EthReceiver.md)
- [Ownable](https://docs.openzeppelin.com/contracts/3.x/api/access#Ownable)

## Functions
### constructor
```solidity
function constructor(
    contract IWETH weth
)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth` | contract IWETH |


### rescueFunds
```solidity
function rescueFunds(
  contract IERC20 token,
  uint256 amount
) external
```
Retrieves funds accidently sent directly to the contract address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | contract IERC20 | ERC20 token to retrieve
|`amount` | uint256 | amount to retrieve


### destroy
```solidity
function destroy(
) external
```
Destroys the contract and sends eth to sender. Use with caution. The only case when the use of the method is justified is if there is an exploit found. And the damage from the exploit is greater than from just an urgent contract change.



## Events
### Swapped
```solidity
event Swapped(
  address sender,
  contract IERC20 srcToken,
  contract IERC20 dstToken,
  address dstReceiver,
  uint256 spentAmount,
  uint256 returnAmount
)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`sender` | address |
|`srcToken` | contract IERC20 |
|`dstToken` | contract IERC20 |
|`dstReceiver` | address |
|`spentAmount` | uint256 |
|`returnAmount` | uint256 | 
