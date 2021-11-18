# LimitOrderProtocolRFQ






## Derives
- [Permitable](helpers/Permitable.md)
- [EIP712](https://docs.openzeppelin.com/contracts/3.x/api/drafts#EIP712)
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


### DOMAIN_SEPARATOR
```solidity
function DOMAIN_SEPARATOR(
) external returns (bytes32)
```




### invalidatorForOrderRFQ
```solidity
function invalidatorForOrderRFQ(
  address maker,
  uint256 slot
) external returns (uint256)
```
Returns bitmask for double-spend invalidators based on lowest byte of order.info and filled quotes


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maker` | address |
|`slot` | uint256 |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Result`| uint256 | Each bit represents whenever corresponding quote was filled

### cancelOrderRFQ
```solidity
function cancelOrderRFQ(
  uint256 orderInfo
) external
```
Cancels order's quote

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderInfo` | uint256 |


### fillOrderRFQ
```solidity
function fillOrderRFQ(
  struct LimitOrderProtocolRFQ.OrderRFQ order,
  bytes signature,
  uint256 makingAmount,
  uint256 takingAmount
) external returns (uint256, uint256)
```
Fills order's quote, fully or partially (whichever is possible)


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`order` | struct LimitOrderProtocolRFQ.OrderRFQ | Order quote to fill
|`signature` | bytes | Signature to confirm quote ownership
|`makingAmount` | uint256 | Making amount
|`takingAmount` | uint256 | Taking amount


### fillOrderRFQToWithPermit
```solidity
function fillOrderRFQToWithPermit(
  struct LimitOrderProtocolRFQ.OrderRFQ order,
  bytes signature,
  uint256 makingAmount,
  uint256 takingAmount,
  address payable target,
  bytes permit
) external returns (uint256, uint256)
```
Fills Same as `fillOrderRFQ` but calls permit first,
allowing to approve token spending and make a swap in one transaction.
Also allows to specify funds destination instead of `msg.sender`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`order` | struct LimitOrderProtocolRFQ.OrderRFQ | Order quote to fill
|`signature` | bytes | Signature to confirm quote ownership
|`makingAmount` | uint256 | Making amount
|`takingAmount` | uint256 | Taking amount
|`target` | address payable | Address that will receive swap funds
|`permit` | bytes | Should consist of abiencoded token address and encoded `IERC20Permit.permit` call. See tests for examples


### fillOrderRFQTo
```solidity
function fillOrderRFQTo(
  struct LimitOrderProtocolRFQ.OrderRFQ order,
  bytes signature,
  uint256 makingAmount,
  uint256 takingAmount,
  address payable target
) public returns (uint256, uint256)
```
Same as `fillOrderRFQ` but allows to specify funds destination instead of `msg.sender`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`order` | struct LimitOrderProtocolRFQ.OrderRFQ | Order quote to fill
|`signature` | bytes | Signature to confirm quote ownership
|`makingAmount` | uint256 | Making amount
|`takingAmount` | uint256 | Taking amount
|`target` | address payable | Address that will receive swap funds


## Events
### OrderFilledRFQ
```solidity
event OrderFilledRFQ(
  bytes32 orderHash,
  uint256 makingAmount
)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderHash` | bytes32 |
|`makingAmount` | uint256 | 
