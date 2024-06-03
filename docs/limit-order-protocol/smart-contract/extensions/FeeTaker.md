
## FeeTaker

### Functions list
- [constructor(limitOrderProtocol, weth, owner) public](#constructor)
- [receive() external](#receive)
- [postInteraction(order, , , , , takingAmount, , extraData) external](#postinteraction)
- [rescueFunds(token, amount) external](#rescuefunds)

### Errors list
- [OnlyLimitOrderProtocol() ](#onlylimitorderprotocol)
- [EthTransferFailed() ](#ethtransferfailed)

### Functions
### constructor

```solidity
constructor(address limitOrderProtocol, address weth, address owner) public
```
Initializes the contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| limitOrderProtocol | address | The limit order protocol contract. |
| weth | address |  |
| owner | address |  |

### receive

```solidity
receive() external payable
```
Fallback function to receive ETH.

### postInteraction

```solidity
function postInteraction(struct IOrderMixin.Order order, bytes, bytes32, address, uint256, uint256 takingAmount, uint256, bytes extraData) external
```
See {IPostInteraction-postInteraction}.

_Takes the fee in taking tokens and transfers the rest to the maker.
`extraData` consists of:
2 bytes — fee percentage (in 1e5)
20 bytes — fee recipient
20 bytes — receiver of taking tokens (optional, if not set, maker is used)_

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

### Errors
### OnlyLimitOrderProtocol

```solidity
error OnlyLimitOrderProtocol()
```

_The caller is not the limit order protocol contract._

### EthTransferFailed

```solidity
error EthTransferFailed()
```

_Eth transfer failed. The target fallback may have reverted._

