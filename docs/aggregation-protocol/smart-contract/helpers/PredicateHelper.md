# PredicateHelper


A helper contract for executing boolean functions on arbitrary target call results



## Functions
### or
```solidity
function or(
    uint256 offsets, 
    bytes calldata data
) public view returns(bool)
```
Calls every target with corresponding data


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `offsets` | uint256 | 
| `data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if call to any target returned True. Otherwise, false


### and
```solidity
function and(
    uint256 offsets, 
    bytes calldata data
) public view returns(bool)
```
Checks if a given flag is set for the provided address


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offsets` | uint256 | 
|`data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if calls to all targets returned True. Otherwise, false


### not
```solidity
function not(
    bytes calldata data
) public view returns(bool)
```
Calls target with specified data and tests if it's equal to 0


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if call to target returns 0. Otherwise, false


### eq
```solidity
function eq(
    uint256 value, 
    bytes calldata data
) public view returns(bool) 
```
Calls target with specified data and tests if it's equal to the value


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`value` | uint256 | Value to test
|`data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if call to target returns the same value as `value`. Otherwise, false

### lt
```solidity
function lt(
    uint256 value, 
    bytes calldata data
) public view returns(bool)
```
Calls target with specified data and tests if it's lower than value


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`value` | uint256 | Value to test
|`data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if call to target returns value which is lower than `value`. Otherwise, false

### gt
```solidity
function gt(
    uint256 value, 
    bytes calldata data
) public view returns(bool)
```
Calls target with specified data and tests if it's bigger than value


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`value` | uint256 | Value to test
|`data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | True if call to target returns value which is bigger than `value`. Otherwise, false

### arbitraryStaticCall
```solidity
function arbitraryStaticCall(
    address target, 
    bytes calldata data
) public view returns(uint256)
```
Performs an arbitrary call to target with data


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`target` | address | Value to test
|`data` | bytes | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| uint256 | Bytes transmuted to uint256