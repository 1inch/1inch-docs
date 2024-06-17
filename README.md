<div align="center">
    <img src="https://github.com/1inch/farming/blob/master/.github/1inch_github_w.svg#gh-light-mode-only">
    <img src="https://github.com/1inch/farming/blob/master/.github/1inch_github_b.svg#gh-dark-mode-only">
</div>

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
This repo contains submodules that you need to pull `git submodule update --recursive`

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Info about development
You can see `warning` in time `yarn install` - it's okey

File `docs\limit-order-protocol\smart-contract\_category_.json` changed after `yarn install`. Discard changes in this file before execute some other commands

Search doesn't work in `yarn start`.
For check working of the search you need:
- `yarn build`
- `yarn serve`

If you got some error check that you does all in accordiance with README.
After that remove `yarn.lock` (`package-lock.json`), `node_modules` and `build` (if there is one). And try again.
Also check node.js version. All correct worked with node version 16.17.1

## Domains
- Trading (Aggregation Protocol) (https://docs.1inch.io/api/)
    - Overview
        - Referral program & Spread Surplus & Governance
    - Smart Contract (markdown import)
        - Front contract (audited & secured)
        - Implementation (extendable)
    - API (markdown import + swagger)
    - Guide (using SDK/Utils)


- Limit Order Protocol (https://docs.1inch.io/limit-order-protocol/)
    - Overview
    - Smart Contract (markdown import)
    - API (markdown import + swagger)
    - Guide (using SDK/Utils)


- Liquidity Protocol
    - Overview
        - Whitepaper & changes
    - Smart Contract (markdown import)
    - API (markdown import + swagger)
    - Guide (using SDK/Utils)


- Opensource
    - Smart Contract
        - cumulative-merkle-drop
        - off-chain-oracle
        - ...
    - Web3
        - permit-signed-approvals-utils
        - multicall
        - ...



