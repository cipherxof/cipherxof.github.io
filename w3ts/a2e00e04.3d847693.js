(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),O=b,j=d["".concat(l,".").concat(O)]||d[O]||o[O]||r;return a?n.a.createElement(j,c(c({ref:t},p),{},{components:a})):n.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,l=new Array(r);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var p=2;p<r;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var b=a(3),n=(a(0),a(119));const r={id:"dialog",title:"Class: Dialog",sidebar_label:"Dialog",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/dialog",id:"api/classes/dialog",isDocsHomePage:!1,title:"Class: Dialog",description:"Class: Dialog",source:"@site/docs\\api\\classes\\dialog.md",slug:"/api/classes/dialog",permalink:"/w3ts/docs/api/classes/dialog",editUrl:null,version:"current",sidebar_label:"Dialog",sidebar:"sidebar",previous:{title:"Class: Destructable",permalink:"/w3ts/docs/api/classes/destructable"},next:{title:"Class: DialogButton",permalink:"/w3ts/docs/api/classes/dialogbutton"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"handle",id:"handle",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"id",id:"id",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addButton",id:"addbutton",children:[]},{value:"clear",id:"clear",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"display",id:"display",children:[]},{value:"setMessage",id:"setmessage",children:[]},{value:"fromHandle",id:"fromhandle",children:[]}]}],i={toc:c};function p({components:e,...t}){return Object(n.b)("wrapper",Object(b.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-dialog"},"Class: Dialog"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/handle"}),Object(n.b)("em",{parentName:"a"},"Handle")),"<dialog",">"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"Dialog")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"new Dialog(): Dialog\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/dialog"}),Object(n.b)("em",{parentName:"a"},"Dialog"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L23"}),"handles/dialog.ts:23")))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"handle"},"handle"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"handle"),": ",Object(n.b)("em",{parentName:"p"},"dialog")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"/w3ts/docs/api/classes/handle"}),"Handle"),".",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"/w3ts/docs/api/classes/handle#handle"}),"handle"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L6"}),"handles/handle.ts:6")))),Object(n.b)("h2",{id:"accessors"},"Accessors"),Object(n.b)("h3",{id:"id"},"id"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"id(): number\n")),Object(n.b)("p",null,"Get the unique ID of the handle. The ID is recycled once you destroy the object."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The unique ID of a handle object."),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L18"}),"handles/handle.ts:18")))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"addbutton"},"addButton"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"addButton(text: string, hotkey?: number, quit?: boolean, score?: boolean): DialogButton\n")),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"text")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"hotkey")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"quit")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"score")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/dialogbutton"}),Object(n.b)("em",{parentName:"a"},"DialogButton"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L29"}),"handles/dialog.ts:29")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"clear"},"clear"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"clear(): void\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L33"}),"handles/dialog.ts:33")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"destroy"},"destroy"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"destroy(): void\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L37"}),"handles/dialog.ts:37")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"display"},"display"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"display(whichPlayer: MapPlayer, flag: boolean): void\n")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"whichPlayer")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/w3ts/docs/api/classes/mapplayer"}),Object(n.b)("em",{parentName:"a"},"MapPlayer")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"flag")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L41"}),"handles/dialog.ts:41")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setmessage"},"setMessage"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"setMessage(whichMessage: string): void\n")),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"whichMessage")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L45"}),"handles/dialog.ts:45")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fromhandle"},"fromHandle"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"static fromHandle(handle: dialog): Dialog\n")),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"handle")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"dialog"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/dialog"}),Object(n.b)("em",{parentName:"a"},"Dialog"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L49"}),"handles/dialog.ts:49")))))}p.isMDXComponent=!0}}]);