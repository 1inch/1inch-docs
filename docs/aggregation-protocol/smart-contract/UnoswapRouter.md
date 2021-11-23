# UnoswapRouter






## Derives
- [Permitable](helpers/Permitable.md)
- [EthReceiver](helpers/EthReceiver.md)

## Functions
### unoswapWithPermit
```solidity
function unoswapWithPermit(
  contract IERC20 srcToken,
  uint256 amount,
  uint256 minReturn,
  bytes32[] pools,
  bytes permit
) external returns (uint256 returnAmount)
```
Same as `unoswap` but calls permit first,
allowing to approve token spending and make a swap in one transaction.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`srcToken` | contract IERC20 | Source token
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit
|`pools` | bytes32[] | Pools chain used for swaps. Pools src and dst tokens should match to make swap happen
|`permit` | bytes | Should contain valid permit that can be used in `IERC20Permit.permit` calls. See tests for examples


### unoswap
```solidity
function unoswap(
  contract IERC20 srcToken,
  uint256 amount,
  uint256 minReturn,
  bytes32[] pools
) public returns (uint256 returnAmount)
```
Performs swap using Uniswap exchange. Wraps and unwraps ETH if required.
Sending non-zero `msg.value` for anything but ETH swaps is prohibited


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`srcToken` | contract IERC20 | Source token
|`amount` | uint256 | Amount of source tokens to swap
|`minReturn` | uint256 | Minimal allowed returnAmount to make transaction commit
|`pools` | bytes32[] | Pools chain used for swaps. Pools src and dst tokens should match to make swap happen 

