# UnoswapV3Router






## Derives
- [IUniswapV3SwapCallback](interfaces/IUniswapV3SwapCallback.md)
- [Permitable](helpers/Permitable.md)
- [EthReceiver](helpers/EthReceiver.md)

## Functions
### constructor
```solidity
function constructor(
  address weth
) public
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth` | address |


### uniswapV3SwapToWithPermit
```solidity
function uniswapV3SwapToWithPermit(
  address payable recipient,
  contract IERC20 srcToken,
  uint256 amount,
  uint256 minReturn,
  uint256[] pools,
  bytes permit
) external returns (uint256 returnAmount)
```
Same as `uniswapV3SwapTo` but calls permit first,
allowing to approve token spending and make a swap in one transaction.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address payable | Address that will receive swap funds
|`srcToken` | contract IERC20 | Source token
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit
|`pools` | uint256[] | Pools chain used for swaps. Pools src and dst tokens should match to make swap happen
|`permit` | bytes | Should contain valid permit that can be used in `IERC20Permit.permit` calls. See tests for examples


### uniswapV3Swap
```solidity
function uniswapV3Swap(
  uint256 amount,
  uint256 minReturn,
  uint256[] pools
) external returns (uint256 returnAmount)
```
Same as `uniswapV3SwapTo` but uses `msg.sender` as recipient


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit
|`pools` | uint256[] | Pools chain used for swaps. Pools src and dst tokens should match to make swap happen


### uniswapV3SwapTo
```solidity
function uniswapV3SwapTo(
  address payable recipient,
  uint256 amount,
  uint256 minReturn,
  uint256[] pools
) public returns (uint256 returnAmount)
```
Performs swap using Uniswap V3 exchange. Wraps and unwraps ETH if required.
Sending non-zero `msg.value` for anything but ETH swaps is prohibited


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address payable | Address that will receive swap funds
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit
|`pools` | uint256[] | Pools chain used for swaps. Pools src and dst tokens should match to make swap happen


### uniswapV3SwapCallback
```solidity
function uniswapV3SwapCallback(
  int256 amount0Delta,
  int256 amount1Delta,
  bytes 
) external
```
Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.

In the implementation you must pay the pool tokens owed for the swap.
The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.
amount0Delta and amount1Delta can both be 0 if no tokens were swapped.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount0Delta` | int256 | The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.
|`amount1Delta` | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool.
|`` | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call 

