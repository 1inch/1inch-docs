# AggregationRouterV5






## Derives
- [ClipperRouter](ClipperRouter.md)
- [LimitOrderProtocolRFQ](LimitOrderProtocolRFQ.md)
- [UnoswapV3Router](UnoswapV3Router.md)
- [IUniswapV3SwapCallback](interfaces/IUniswapV3SwapCallback.md)
- [UnoswapRouter](UnoswapRouter.md)
- [Permitable](helpers/Permitable.md)
- [EIP712](https://docs.openzeppelin.com/contracts/3.x/api/drafts#EIP712)
- [EthReceiver](helpers/EthReceiver.md)
- [Ownable](https://docs.openzeppelin.com/contracts/3.x/api/access#Ownable)
- [Context](https://docs.openzeppelin.com/contracts/3.x/api/utils#Context)

## Functions
### constructor
```solidity
function constructor(
  address weth,
  contract IClipperExchangeInterface _clipperExchange
) public
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth` | address |
|`_clipperExchange` | contract IClipperExchangeInterface |


### swap
```solidity
function swap(
  contract IAggregationExecutor caller,
  struct AggregationRouterV4.SwapDescription desc,
  bytes data
) external returns (uint256 returnAmount, uint256 gasLeft)
```
Performs a swap, delegating all calls encoded in `data` to `caller`. See tests for usage examples


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`caller` | contract IAggregationExecutor | Aggregation executor that executes calls described in `data`
|`desc` | struct AggregationRouterV4.SwapDescription | Swap description
|`data` | bytes | Encoded calls that `caller` should execute in between of swaps

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`returnAmount`| uint256 | Resulting token amount
|`gasLeft`| uint256 | Gas left

### rescueFunds
```solidity
function rescueFunds(
  contract IERC20 token,
  uint256 amount
) external
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | contract IERC20 |
|`amount` | uint256 |


### destroy
```solidity
function destroy(
) external
```




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
