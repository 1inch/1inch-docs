"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),f=i,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},42758:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=a(87462),i=(a(67294),a(3905));const r={},o="What are gas fees?",s={unversionedId:"educational-resources/beginner/what-are-gas-fees",id:"educational-resources/beginner/what-are-gas-fees",title:"What are gas fees?",description:"Topics covered:",source:"@site/docs/educational-resources/beginner/what-are-gas-fees.mdx",sourceDirName:"educational-resources/beginner",slug:"/educational-resources/beginner/what-are-gas-fees",permalink:"/docs/educational-resources/beginner/what-are-gas-fees",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/educational-resources/beginner/what-are-gas-fees.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Price impact vs. slippage",permalink:"/docs/educational-resources/beginner/price-impact-vs-slippage-in-defi"},next:{title:"Wrapped tokens 101",permalink:"/docs/educational-resources/beginner/what-are-wrapped-tokens"}},l={},h=[{value:"Topics covered:",id:"topics-covered",level:2},{value:"What is gas?",id:"what-is-gas",level:2},{value:"Why can&#39;t I pay for gas with the tokens I&#39;m swapping?",id:"why-cant-i-pay-for-gas-with-the-tokens-im-swapping",level:2},{value:"Why don&#39;t I have to pay gas fees (and wait for confirmations) when trading on a centralized exchange, like Binance or Coinbase?",id:"why-dont-i-have-to-pay-gas-fees-when-trading-on-a-centralized-exchange",level:2},{value:"What is the gas limit?",id:"what-is-the-gas-limit",level:2},{value:"How gas fees changed with EIP 1559",id:"how-gas-fees-changed-with-eip-1559",level:2},{value:"Options for reducing swap gas costs",id:"options-for-reducing-swap-gas-costs",level:2}],c={toc:h},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-are-gas-fees"},"What are gas fees?"),(0,i.kt)("h2",{id:"topics-covered"},"Topics covered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-gas"},"What is gas?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-cant-i-pay-for-gas-with-the-tokens-im-swapping"},"Why can't I pay for gas with the tokens I'm swapping?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-dont-i-have-to-pay-gas-fees-when-trading-on-a-centralized-exchange"},"Why don't I have to pay gas fees when trading on a centralized exchange?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-the-gas-limit"},"What is the gas limit?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-gas-fees-changed-with-eip-1559"},"How gas fees changed with EIP 1559")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#options-for-reducing-swap-gas-costs"},"Options for reducing swap gas costs"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-gas"},"What is gas?"),(0,i.kt)("p",null,"Gas is the lifeblood of any EVM compatible blockchain network. It is a monetary fee that compensates miners/validators of a blockchain in exchange for their computational effort of mining blocks. Depending on the consensus mechanism, this computational effort can be realized to the miner/validator as an electricity cost (Proof of Work) or financial stake (Proof of Stake). "),(0,i.kt)("p",null,"Like gasoline for a car, blockchain gas fees are what allow a blockchain (ledger) to move forward in time. "),(0,i.kt)("p",null,"***Please note: 1inch Network does not receive any portion of gas fees. 100% of the fee goes to the miner/validator of the blockchain. Also, gas costs for legacy mode swaps cannot be refunded."),(0,i.kt)("p",null,"Gas fees are always paid in the native token of the network that the transaction is taking place on. 1inch has integrated with 7 different networks, each of which have their own native token. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arbitrum: ETH (Arbitrum version)"),(0,i.kt)("li",{parentName:"ul"},"Aurora: ETH (Near version)"),(0,i.kt)("li",{parentName:"ul"},"Avalanche: AVAX"),(0,i.kt)("li",{parentName:"ul"},"BNB Chain: BNB"),(0,i.kt)("li",{parentName:"ul"},"Ethereum: ETH"),(0,i.kt)("li",{parentName:"ul"},"Fantom: FTM"),(0,i.kt)("li",{parentName:"ul"},"Gnosis Chain: xDAI"),(0,i.kt)("li",{parentName:"ul"},"Klaytn: KLAY"),(0,i.kt)("li",{parentName:"ul"},"Optimistic Ethereum: ETH (optimistic version)"),(0,i.kt)("li",{parentName:"ul"},"Polygon: MATIC"),(0,i.kt)("li",{parentName:"ul"},"ZK Sync Era: ETH (ZK Sync version)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To ensure a successful swap, it is recommended to have an approximate amount of these tokens for gas (depending on which network you are using):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".01 Arbitrum ETH"),(0,i.kt)("li",{parentName:"ul"},".001 Aurora ETH"),(0,i.kt)("li",{parentName:"ul"},".01 AVAX"),(0,i.kt)("li",{parentName:"ul"},".03 BNB"),(0,i.kt)("li",{parentName:"ul"},".04 ETH (Ethereum mainnet)"),(0,i.kt)("li",{parentName:"ul"},".01 FTM"),(0,i.kt)("li",{parentName:"ul"},".01 xDAI"),(0,i.kt)("li",{parentName:"ul"},".01 KLAY"),(0,i.kt)("li",{parentName:"ul"},".01 Optimistic ETH "),(0,i.kt)("li",{parentName:"ul"},".02 MATIC  "),(0,i.kt)("li",{parentName:"ul"},".01 ETH (ZK Sync Era)")),(0,i.kt)("p",null,"If you don't have enough, check out ",(0,i.kt)("a",{parentName:"p",href:"https://help.1inch.io/en/articles/4585055-how-can-i-buy-native-assets-to-pay-for-blockchain-gas-fees"},"this guide")," on topping up your balance."),(0,i.kt)("h2",{id:"why-cant-i-pay-for-gas-with-the-tokens-im-swapping"},"Why can't I pay for gas with the tokens I'm swapping?"),(0,i.kt)("p",null,"When swapping through 1inch Legacy mode, all transactions require a gas fee. These operations carry significant costs (of both electricity, equipment, or capital) for the miners/stakers, who rely upon the gas fees to continue validating blocks. Since the miners/stakers are providing this service at a cost, they require payment in the native currency of the network that they are putting time, energy, and capital into supporting."),(0,i.kt)("p",null,'The size of this gas fee is proportional to the amount of computation required to execute an operation (not the amount of tokens swapped). The more complex the operation is, the more gas it requires to execute. Therefore, it is impossible to calculate the exact amount of gas needed before the transaction has been executed. Thankfully, 1inch provides an "Estimated Fee" to help you have an idea of how much gas you will need to pay for.'),(0,i.kt)("p",null,"For example, as the Ethereum network and its market value grows in size, so do the gas fees required for transactions. At times, Ethereum fees can very high and significantly impact the profitability of trades/swaps. These high Ethereum gas costs have led to the evolution of newer, cheaper blockchains, such as BNB Chain, and Polygon."),(0,i.kt)("p",null,"***You can view current Ethereum gas prices ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/gastracker#"},"here"),"."),(0,i.kt)("h2",{id:"why-dont-i-have-to-pay-gas-fees-when-trading-on-a-centralized-exchange"},"Why don't I have to pay gas fees (and wait for confirmations) when trading on a centralized exchange, like Binance or Coinbase?"),(0,i.kt)("p",null,'Centralized exchanges use "off-chain" order books to facilitate trades, and therefore do not have to rely upon miners of a blockchain to validate transactions. It is essentially an "IOU" system where the user gives the exchange full custody of their funds. Instead of paying a gas fee to trade, the user instead pays a trading fee, which goes to the exchange\'s wallet as profit. Unfortunately the user then also has to pay a "Withdrawal fee" for moving any funds on the centralized exchange into their own possession. '),(0,i.kt)("h2",{id:"what-is-the-gas-limit"},"What is the gas limit?"),(0,i.kt)("p",null,"The gas limit refers to the maximum amount of gas (in gwei) that you are willing to pay for an individual transaction. Most Ethereum transfers require a gas amount of 21,000 gwei; however, swaps (and other interactions with smart contracts such as the 1inch liquidity or staking protocols) can consume significantly higher amounts. "),(0,i.kt)("p",null,'For reference, the gas limit can be seen as: "the distance you are willing to drive a car vs. the distance to your destination". '),(0,i.kt)("p",null,"If the gas amount needed is 21k, and your limit is 22k, the Ethereum Virtual Machine (EVM) will use what is needed and send the excess gas back to your wallet. However, if you set the gas limit at 20k, the EVM will attempt to complete the transaction, but ultimately fail at the point of reaching 20k."),(0,i.kt)("p",null,"Most wallets will set the gas limit automatically, so the user does not have to think about it; however, the 1inch iOS Wallet allows for full gas limit customization. "),(0,i.kt)("h2",{id:"how-gas-fees-changed-with-eip-1559"},"How gas fees changed with EIP 1559"),(0,i.kt)("p",null,'Since Ethereum "London" Hardfork event (EIP 1559), the entire structure of gas fees on Ethereum has changed substantially. Now, gas fees are broken down into a base fee, and a priority fee (miner tip). The base fee only changes incrementally based off of network demand, and the priority fee is a crucial incentive for miners to remain profitable for including transactions into blocks. The base fee and the priority tip combined together create the "Max fee", as seen in the 1inch user interface and mobile wallets. '),(0,i.kt)("p",null,"You can find more details on EIP1559 and how it works ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"here"),"."),(0,i.kt)("h2",{id:"options-for-reducing-swap-gas-costs"},"Options for reducing swap gas costs"),(0,i.kt)("p",null,"To reduce gas costs, there are several options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.1inch.io/en/articles/6796085-what-is-1inch-fusion-and-how-does-it-work"},"1inch Fusion"),": For 1inch Fusion swaps, the resolver pays for 100% of the gas fees when taking your swap order."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.1inch.io/en/articles/4656415-how-to-place-a-limit-order-on-1inch"},"Limit orders"),': For these types of swaps, the "taker" pays for 100% of the gas fees, allowing the "maker" to place and order and have it execute with zero outstanding cost.')),(0,i.kt)("p",null,"Wait for the gas prices to decrease, typically during slower periods on the Ethereum Network. "),(0,i.kt)("p",null,"Questions, comments, concerns? Feel free to reach out to us in the live support chat!"))}u.isMDXComponent=!0}}]);