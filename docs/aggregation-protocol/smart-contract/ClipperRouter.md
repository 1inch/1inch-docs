# ClipperRouter


Clipper router that allows to use `ClipperExchangeInterface` for swaps



## Derives
- [Permitable](helpers/Permitable.md)
- [EthReceiver](helpers/EthReceiver.md)

## Functions
### constructor
```solidity
function constructor(
  address weth,
  contract IClipperExchangeInterface clipperExchange
) public
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth` | address |
|`clipperExchange` | contract IClipperExchangeInterface |


### clipperSwapToWithPermit
```solidity
function clipperSwapToWithPermit(
  address payable recipient,
  contract IERC20 srcToken,
  contract IERC20 dstToken,
  uint256 amount,
  uint256 minReturn,
  bytes permit
) external returns (uint256 returnAmount)
```
Same as `clipperSwapTo` but calls permit first,
allowing to approve token spending and make a swap in one transaction.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address payable | Address that will receive swap funds
|`srcToken` | contract IERC20 | Source token
|`dstToken` | contract IERC20 | Destination token
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit
|`permit` | bytes | Should contain valid permit that can be used in `IERC20Permit.permit` calls. See tests for examples


### clipperSwap
```solidity
function clipperSwap(
  contract IERC20 srcToken,
  contract IERC20 dstToken,
  uint256 amount,
  uint256 minReturn
) external returns (uint256 returnAmount)
```
Same as `clipperSwapTo` but uses `msg.sender` as recipient


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`srcToken` | contract IERC20 | Source token
|`dstToken` | contract IERC20 | Destination token
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit


### clipperSwapTo
```solidity
function clipperSwapTo(
  address payable recipient,
  contract IERC20 srcToken,
  contract IERC20 dstToken,
  uint256 amount,
  uint256 minReturn
) public returns (uint256 returnAmount)
```
Performs swap using Clipper exchange. Wraps and unwraps ETH if required.
Sending non-zero `msg.value` for anything but ETH swaps is prohibited


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address payable | Address that will receive swap funds
|`srcToken` | contract IERC20 | Source token
|`dstToken` | contract IERC20 | Destination token
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit 

