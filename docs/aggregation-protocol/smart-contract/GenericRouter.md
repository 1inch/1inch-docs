# GenericRouter


Router that allows to use `IAggregationExecutor` for swaps



## Derives
- [EthReceiver](helpers/EthReceiver.md)

## Functions
### swap
```solidity
function swap(
    contract IAggregationExecutor executor,
    contract SwapDescription calldata desc,
    bytes calldata permit,
    bytes calldata data
) external payable returns (uint256 returnAmount, uint256 spentAmount)
```
Performs a swap, delegating all calls encoded in `data` to `executor`. See tests for usage examples


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`executor` | contract IAggregationExecutore | Aggregation executor that executes calls described in `data`
|`desc` | contract SwapDescription | Swap description
|`permit` | bytes | Should contain valid permit that can be used in `IERC20Permit.permit` calls
|`data` | bytes | Encoded calls that `caller` should execute in between of swaps


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 | Resulting token amount
|`spentAmount` | uint256 | Source token amount
