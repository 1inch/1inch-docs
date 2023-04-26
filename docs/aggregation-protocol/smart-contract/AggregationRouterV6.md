# Solidity API

## AggregationRouterV6

Main contract incorporates a number of routers to perform swaps and limit orders protocol to fill limit orders

### ZeroAddress

```solidity
error ZeroAddress()
```

### constructor

```solidity
constructor(contract IWETH weth) public
```

_Sets the wrapped eth token and clipper exhange interface
Both values are immutable: they can only be set once during
construction._

### rescueFunds

```solidity
function rescueFunds(contract IERC20 token, uint256 amount) external
```

Retrieves funds accidently sent directly to the contract address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | ERC20 token to retrieve |
| amount | uint256 | amount to retrieve |

### destroy

```solidity
function destroy() external
```

Destroys the contract and sends eth to sender. Use with caution.
The only case when the use of the method is justified is if there is an exploit found.
And the damage from the exploit is greater than from just an urgent contract change.

### _receive

```solidity
function _receive() internal
```

