# SeriesEpochManager


A helper contract to manage nonce with the series



## Functions
### epoch
```solidity
function epoch(
    address maker, 
    uint96 series
) public view returns(uint256)
```
Returns nonce for `maker` and `series`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maker` | address | 
| `series` | uint96 | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| uint256 | Nonce for `maker` and `series`


### increaseEpoch
```solidity
function increaseEpoch(
    uint96 series
) external
```
Advances nonce by one


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`series` | uint96 | 


### advanceEpoch
```solidity
function advanceEpoch(
    uint96 series, 
    uint256 amount
) public
```
Advances nonce by specified amount


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`series` | uint96 | 
|`amount` | uint256 | 


### epochEquals
```solidity
function epochEquals(
    address maker,
    uint256 series,
    uint256 makerNonce
) public view returns(bool)
```
Checks if `maker` has specified `makerNonce` for `series`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maker` | address | 
|`series` | uint256 | 
|`makerNonce` | uint256 | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if `maker` has specified nonce. Otherwise, false


## Events
### EpochIncreased
```solidity
event EpochIncreased(
    address indexed maker, 
    uint256 series, 
    uint256 newNonce
);
```
Emitted when epoch increased

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maker` | address | 
|`series` | uint256 | 
|`newNonce` | uint256 | 
