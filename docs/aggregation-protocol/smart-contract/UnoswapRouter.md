# UnoswapRouter


A router contract for executing token swaps on Unoswap-compatible decentralized exchanges: `UniswapV3`, `UniswapV2`, `Curve`.



## Derives
- [EthReceiver](helpers/EthReceiver.md)
- [IUniswapV3SwapCallback](interfaces/IUniswapV3SwapCallback.md)

## Functions
### unoswapToWithPermit
```solidity
function unoswapToWithPermit(
    Address to, 
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex, 
    bytes calldata permit
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using Unoswap-compatible exchange's pool, with a minimum return specified by `minReturn` and permit-based approval.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the Unoswap-compatible exchange's pool
|`permit` | bytes | A signed permit message for `token` approval


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 | The actual amount of tokens received after the swap


### unoswap
```solidity
function unoswap(
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using an Unoswap-compatible exchange's pool, with a minimum return specified by `minReturn`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 | The actual amount of tokens received after the swap


### unoswapTo
```solidity
function unoswapTo(
    Address to, 
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using an Unoswap-compatible exchange's pool, sending the resulting tokens to the `to` address, with a minimum return specified by `minReturn`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 | The actual amount of tokens received after the swap


### ethUnoswap
```solidity
function ethUnoswap(
    uint256 minReturn, 
    Address dex
) external payable returns(uint256 returnAmount)
```
Swaps ETH for another token using an Unoswap-compatible exchange's pool, with a minimum return specified by `minReturn`.
The function is payable and requires the sender to attach ETH.
It is necessary to check if it's cheaper to use `_WETH_NOT_WRAP_FLAG` in `dex` Address (for example: for Curve pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 | The actual amount of tokens received after the swap


### ethUnoswapTo
```solidity
function ethUnoswapTo(
    Address to, 
    uint256 minReturn, 
    Address dex
) external payable returns(uint256 returnAmount) {
```
Swaps ETH for another token using an Unoswap-compatible exchange's pool, sending the resulting tokens to the `to` address, with a minimum return specified by `minReturn`. The function is payable and requires the sender to attach ETH.
It is necessary to check if it's cheaper to use _WETH_NOT_WRAP_FLAG in `dex` Address (for example: for Curve pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 | The actual amount of tokens received after the swap


### unoswapToWithPermit2
```solidity
function unoswapToWithPermit2(
    Address to, 
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex, 
    Address dex2, 
    bytes calldata permit
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using two Unoswap-compatible exchange pools (`dex` and `dex2`) sequentially, with a minimum return specified by `minReturn` and permit-based approval.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool
|`permit` | bytes | A signed permit message for `token` approval


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through both pools


### unoswap2
```solidity
function unoswap2(
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex,
    Address dex2
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using two Unoswap-compatible exchange pools (`dex` and `dex2`) sequentially, with a minimum return specified by `minReturn`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through both pools


### unoswapTo2
```solidity
function unoswapTo2(
    Address to, 
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex,
    Address dex2
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using two Unoswap-compatible exchange pools (`dex` and `dex2`) sequentially, sending the resulting tokens to the `to` address, with a minimum return specified by `minReturn`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through both pools


### ethUnoswap2
```solidity
function ethUnoswap2(
    uint256 minReturn, 
    Address dex,
    Address dex2
) external payable returns(uint256 returnAmount)
```
Swaps ETH for another token using two Unoswap-compatible exchange pools (`dex` and `dex2`) sequentially, with a minimum return specified by `minReturn`. The function is payable and requires the sender to attach ETH.
It is necessary to check if it's cheaper to use _WETH_NOT_WRAP_FLAG in `dex` Address (for example: for Curve pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through both pools


### ethUnoswapTo2
```solidity
function ethUnoswapTo2(
    Address to, 
    uint256 minReturn, 
    Address dex,
    Address dex2
) external payable returns(uint256 returnAmount) {
```
Swaps ETH for another token using two Unoswap-compatible exchange pools (`dex` and `dex2`) sequentially, sending the resulting tokens to the `to` address, with a minimum return specified by `minReturn`.
The function is payable and requires the sender to attach ETH.
It is necessary to check if it's cheaper to use _WETH_NOT_WRAP_FLAG in `dex` Address (for example: for Curve pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through both pools


### unoswapToWithPermit3
```solidity
function unoswapToWithPermit3(
    Address to, 
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex, 
    Address dex2, 
    Address dex3, 
    bytes calldata permit
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using three Unoswap-compatible exchange pools (`dex`, `dex2`, and `dex3`) sequentially, with a minimum return specified by `minReturn` and permit-based approval.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool
|`dex3` | [Address](helpers/AddressLib.md) | The address of the third Unoswap-compatible exchange's pool
|`permit` | bytes | A signed permit message for `token` approval


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through all three pools


### unoswap3
```solidity
function unoswap3(
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex,
    Address dex2,
    Address dex3
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using three Unoswap-compatible exchange pools (`dex`, `dex2`, and `dex3`) sequentially, with a minimum return specified by `minReturn`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool
|`dex3` | [Address](helpers/AddressLib.md) | The address of the third Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through all three pools


### unoswapTo3
```solidity
function unoswapTo3(
    Address to, 
    Address token, 
    uint256 amount, 
    uint256 minReturn, 
    Address dex,
    Address dex2,
    Address dex3
) external returns(uint256 returnAmount)
```
Swaps `amount` of the specified `token` for another token using three Unoswap-compatible exchange pools (`dex`, `dex2`, and `dex3`) sequentially, sending the resulting tokens to the `to` address, with a minimum return specified by `minReturn`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`token` | [Address](helpers/AddressLib.md) | The address of the token to be swapped
|`amount` | uint256 | The amount of tokens to be swapped
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool
|`dex3` | [Address](helpers/AddressLib.md) | The address of the third Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through all three pools


### ethUnoswap3
```solidity
function ethUnoswap3(
    uint256 minReturn, 
    Address dex,
    Address dex2,
    Address dex3
) external payable returns(uint256 returnAmount)
```
Swaps ETH for another token using three Unoswap-compatible exchange pools (`dex`, `dex2`, and `dex3`) sequentially, with a minimum return specified by `minReturn`. The function is payable and requires the sender to attach ETH.
It is necessary to check if it's cheaper to use _WETH_NOT_WRAP_FLAG in `dex` Address (for example: for Curve pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool
|`dex3` | [Address](helpers/AddressLib.md) | The address of the third Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through all three pools


### ethUnoswapTo3
```solidity
function ethUnoswapTo3(
    Address to, 
    uint256 minReturn, 
    Address dex,
    Address dex2,
    Address dex3
) external payable returns(uint256 returnAmount) {
```
Swaps ETH for another token using three Unoswap-compatible exchange pools (`dex`, `dex2`, and `dex3`) sequentially, sending the resulting tokens to the `to` address, with a minimum return specified by `minReturn`.
The function is payable and requires the sender to attach ETH.
It is necessary to check if it's cheaper to use _WETH_NOT_WRAP_FLAG in `dex` Address (for example: for Curve pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | [Address](helpers/AddressLib.md) | The address to receive the swapped tokens
|`minReturn` | uint256 | The minimum amount of tokens to be received after the swap
|`dex` | [Address](helpers/AddressLib.md) | The address of the first Unoswap-compatible exchange's pool
|`dex2` | [Address](helpers/AddressLib.md) | The address of the second Unoswap-compatible exchange's pool
|`dex3` | [Address](helpers/AddressLib.md) | The address of the third Unoswap-compatible exchange's pool


#### Return values
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`returnAmount` | uint256 |  The actual amount of tokens received after the swap through all three pools


### uniswapV3SwapCallback
```solidity
function uniswapV3SwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes 
) external
```
See {IUniswapV3SwapCallback-uniswapV3SwapCallback} 
Called by UniswapV3 pool during the swap operation initiated by UnoswapRouter's methods with UniswapV3. This callback function ensures the proper transfer of tokens based on the swap's configuration. It handles the transfer of tokens by either directly transferring the tokens from the payer to the recipient, or by using a secondary permit contract to transfer the tokens if required by the pool. It verifies the correct pool is calling the function and uses inline assembly for efficient execution and to access low-level EVM features.


