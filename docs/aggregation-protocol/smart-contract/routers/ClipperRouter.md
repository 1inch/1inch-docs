# Solidity API

## ClipperRouter

Clipper router that allows to use `ClipperExchangeInterface` for swaps.

### constructor

```solidity
constructor(contract IWETH weth) public
```

### clipperSwapToWithPermit

```solidity
function clipperSwapToWithPermit(contract IClipperExchangeInterface clipperExchange, address payable recipient, Address srcToken, contract IERC20 dstToken, uint256 inputAmount, uint256 outputAmount, uint256 goodUntil, bytes32 r, bytes32 vs, bytes permit) external returns (uint256 returnAmount)
```

Same as `clipperSwapTo` but calls permit first,
        allowing to approve token spending and make a swap in one transaction.

_See tests for examples._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| clipperExchange | contract IClipperExchangeInterface | Clipper pool address. |
| recipient | address payable | Address that will receive swap funds. |
| srcToken | Address | Source token and flags. |
| dstToken | contract IERC20 | Destination token. |
| inputAmount | uint256 | Amount of source tokens to swap. |
| outputAmount | uint256 | Amount of destination tokens to receive. |
| goodUntil | uint256 | Clipper parameter. |
| r | bytes32 | Clipper order signature (r part). |
| vs | bytes32 | Clipper order signature (vs part). |
| permit | bytes | Should contain valid permit that can be used in `IERC20Permit.permit` calls. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| returnAmount | uint256 | Amount of destination tokens received. |

### clipperSwap

```solidity
function clipperSwap(contract IClipperExchangeInterface clipperExchange, Address srcToken, contract IERC20 dstToken, uint256 inputAmount, uint256 outputAmount, uint256 goodUntil, bytes32 r, bytes32 vs) external payable returns (uint256 returnAmount)
```

Same as `clipperSwapTo` but uses `msg.sender` as recipient.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| clipperExchange | contract IClipperExchangeInterface | Clipper pool address. |
| srcToken | Address | Source token and flags. |
| dstToken | contract IERC20 | Destination token. |
| inputAmount | uint256 | Amount of source tokens to swap. |
| outputAmount | uint256 | Amount of destination tokens to receive. |
| goodUntil | uint256 | Clipper parameter. |
| r | bytes32 | Clipper order signature (r part). |
| vs | bytes32 | Clipper order signature (vs part). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| returnAmount | uint256 | Amount of destination tokens received. |

### clipperSwapTo

```solidity
function clipperSwapTo(contract IClipperExchangeInterface clipperExchange, address payable recipient, Address srcToken, contract IERC20 dstToken, uint256 inputAmount, uint256 outputAmount, uint256 goodUntil, bytes32 r, bytes32 vs) public payable returns (uint256 returnAmount)
```

Performs swap using Clipper exchange. Wraps and unwraps ETH if required.
        Sending non-zero `msg.value` for anything but ETH swaps is prohibited.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| clipperExchange | contract IClipperExchangeInterface | Clipper pool address. |
| recipient | address payable | Address that will receive swap funds. |
| srcToken | Address | Source token and flags. |
| dstToken | contract IERC20 | Destination token. |
| inputAmount | uint256 | Amount of source tokens to swap. |
| outputAmount | uint256 | Amount of destination tokens to receive. |
| goodUntil | uint256 | Clipper parameter. |
| r | bytes32 | Clipper order signature (r part). |
| vs | bytes32 | Clipper order signature (vs part). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| returnAmount | uint256 | Amount of destination tokens received. |

