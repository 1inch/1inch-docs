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



