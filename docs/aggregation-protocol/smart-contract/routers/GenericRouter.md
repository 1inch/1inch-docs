# Solidity API

## GenericRouter

Router that allows to use `IAggregationExecutor` for swaps.

### ZeroMinReturn

```solidity
error ZeroMinReturn()
```

### ZeroReturnAmount

```solidity
error ZeroReturnAmount()
```

### SwapDescription

```solidity
struct SwapDescription {
  contract IERC20 srcToken;
  contract IERC20 dstToken;
  address payable srcReceiver;
  address payable dstReceiver;
  uint256 amount;
  uint256 minReturnAmount;
  uint256 flags;
}
```

### swap

```solidity
function swap(contract IAggregationExecutor executor, struct GenericRouter.SwapDescription desc, bytes permit, bytes data) external payable returns (uint256 returnAmount, uint256 spentAmount)
```

Performs a swap, delegating all calls encoded in `data` to `executor`. See tests for usage examples.

_Router keeps 1 wei of every token on the contract balance for gas optimisations reasons.
     This affects first swap of every token by leaving 1 wei on the contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| executor | contract IAggregationExecutor | Aggregation executor that executes calls described in `data`. |
| desc | struct GenericRouter.SwapDescription | Swap description. |
| permit | bytes | Should contain valid permit that can be used in `IERC20Permit.permit` calls. |
| data | bytes | Encoded calls that `caller` should execute in between of swaps. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| returnAmount | uint256 | Resulting token amount. |
| spentAmount | uint256 | Source token amount. |

