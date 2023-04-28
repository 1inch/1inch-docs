# MakerTraitsLib



`type MakerTraits is uint256;`

## Functions
### hasExtension
```solidity
function hasExtension(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### isAllowedSender
```solidity
function isAllowedSender(
    MakerTraits makerTraits, 
    address sender
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 
| `sender` | address | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### isExpired
```solidity
function isExpired(
    MakerTraits makerTraits
) internal view returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### nonceOrEpoch
```solidity
function nonceOrEpoch(
    MakerTraits makerTraits
) internal pure returns (uint256)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| uint256 | 


### series
```solidity
function series(
    MakerTraits makerTraits
) internal pure returns (uint256)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| uint256 | 


### allowPartialFills
```solidity
function allowPartialFills(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### allowImproveRateViaInteraction
```solidity
function allowImproveRateViaInteraction(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### needPreInteractionCall
```solidity
function needPreInteractionCall(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### needPostInteractionCall
```solidity
function needPostInteractionCall(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### allowMultipleFills
```solidity
function allowMultipleFills(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### useBitInvalidator
```solidity
function useBitInvalidator(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### needCheckEpochManager
```solidity
function needCheckEpochManager(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### usePermit2
```solidity
function usePermit2(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 


### unwrapWeth
```solidity
function unwrapWeth(
    MakerTraits makerTraits
) internal pure returns (bool)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `makerTraits` | MakerTraits | 


#### Return values
| Type | Description                                                          |
| :--- | :------------------------------------------------------------------- |
| bool | 