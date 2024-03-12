"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[7918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(r),u=o,f=s["".concat(c,".").concat(u)]||s[u]||p[u]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:5},a="Cancel a limit order",l={unversionedId:"limit-order-protocol/utils/guide/cancel-limit-order",id:"limit-order-protocol/utils/guide/cancel-limit-order",title:"Cancel a limit order",description:"LimitOrderProtocolFacade.cancelLimitOrder()",source:"@site/docs/limit-order-protocol/utils/guide/cancel-limit-order.md",sourceDirName:"limit-order-protocol/utils/guide",slug:"/limit-order-protocol/utils/guide/cancel-limit-order",permalink:"/docs/limit-order-protocol/utils/guide/cancel-limit-order",draft:!1,editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/utils/guide/cancel-limit-order.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fill a limit order",permalink:"/docs/limit-order-protocol/utils/guide/fill-limit-order"},next:{title:"Cancel all limit orders",permalink:"/docs/limit-order-protocol/utils/guide/cancel-all-limit-orders"}},c={},d=[{value:"Parameters:",id:"parameters",level:2},{value:"Example:",id:"example",level:2}],m={toc:d},s="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cancel-a-limit-order"},"Cancel a limit order"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LimitOrderProtocolFacade.cancelLimitOrder()")),(0,o.kt)("h2",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"order")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LimitOrder")),(0,o.kt)("td",{parentName:"tr",align:null},"Structure of limit order. See ",(0,o.kt)("a",{parentName:"td",href:"./limit-order-structure"},"Limit order structure"))))),(0,o.kt)("h2",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import Web3 from 'web3';\nimport {\n    LimitOrderProtocolFacade,\n    LimitOrder,\n    Web3ProviderConnector\n} from '@1inch/limit-order-protocol-utils';\n\nconst walletAddress = '0xhhh...';\nconst contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';\n\nconst order: LimitOrder = {...};\n\nconst connector = new Web3ProviderConnector(new Web3('...'));\nconst limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, chainId, connector);\n\nconst callData = limitOrderProtocolFacade.cancelLimitOrder(order);\n\nsendTransaction({\n    from: walletAddress,\n    gas: 210_000, // Set your gas limit\n    gasPrice: 40000, // Set your gas price\n    to: contractAddress,\n    data: callData,\n});\n")))}p.isMDXComponent=!0}}]);