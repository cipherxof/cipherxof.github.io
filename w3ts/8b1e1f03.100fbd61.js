(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),O=d(a),j=b,m=O["".concat(c,".").concat(j)]||O[j]||i[j]||r;return a?n.a.createElement(m,l(l({ref:t},s),{},{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var b=a(3),n=(a(0),a(119));const r={id:"destructable",title:"Class: Destructable",sidebar_label:"Destructable",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/destructable",id:"api/classes/destructable",isDocsHomePage:!1,title:"Class: Destructable",description:"Class: Destructable",source:"@site/docs\\api\\classes\\destructable.md",slug:"/api/classes/destructable",permalink:"/w3ts/docs/api/classes/destructable",editUrl:null,version:"current",sidebar_label:"Destructable",sidebar:"sidebar",previous:{title:"Class: Color",permalink:"/w3ts/docs/api/classes/color"},next:{title:"Class: Dialog",permalink:"/w3ts/docs/api/classes/dialog"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"handle",id:"handle",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"id",id:"id",children:[]},{value:"invulnerable",id:"invulnerable",children:[]},{value:"life",id:"life",children:[]},{value:"maxLife",id:"maxlife",children:[]},{value:"name",id:"name",children:[]},{value:"occluderHeight",id:"occluderheight",children:[]},{value:"typeId",id:"typeid",children:[]},{value:"x",id:"x",children:[]},{value:"y",id:"y",children:[]}]},{value:"Methods",id:"methods",children:[{value:"destroy",id:"destroy",children:[]},{value:"heal",id:"heal",children:[]},{value:"kill",id:"kill",children:[]},{value:"queueAnim",id:"queueanim",children:[]},{value:"setAnim",id:"setanim",children:[]},{value:"setAnimSpeed",id:"setanimspeed",children:[]},{value:"show",id:"show",children:[]},{value:"fromEvent",id:"fromevent",children:[]},{value:"fromHandle",id:"fromhandle",children:[]}]}],p={toc:l};function s({components:e,...t}){return Object(n.b)("wrapper",Object(b.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-destructable"},"Class: Destructable"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget"}),Object(n.b)("em",{parentName:"a"},"Widget"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"Destructable")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"new Destructable(objectId: number, x: number, y: number, z: number, face: number, scale: number, varation: number): Destructable\n")),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"objectId")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"x")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"y")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"z")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"face")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"scale")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"varation")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/destructable"}),Object(n.b)("em",{parentName:"a"},"Destructable"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L8"}),"handles/destructable.ts:8")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"handle"},"handle"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"handle"),": ",Object(n.b)("em",{parentName:"p"},"destructable")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget"}),"Widget"),".",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget#handle"}),"handle")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L8"}),"handles/destructable.ts:8")),Object(n.b)("h2",{id:"accessors"},"Accessors"),Object(n.b)("h3",{id:"id"},"id"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"id(): number\n")),Object(n.b)("p",null,"Get the unique ID of the handle. The ID is recycled once you destroy the object."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The unique ID of a handle object."),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L18"}),"handles/handle.ts:18")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"invulnerable"},"invulnerable"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"invulnerable(): boolean\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L22"}),"handles/destructable.ts:22")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"invulnerable(flag: boolean): void\n")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"flag")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L18"}),"handles/destructable.ts:18")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"life"},"life"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"life(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L26"}),"handles/destructable.ts:26")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"life(value: number): void\n")),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L30"}),"handles/destructable.ts:30")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"maxlife"},"maxLife"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"maxLife(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L34"}),"handles/destructable.ts:34")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"maxLife(value: number): void\n")),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L38"}),"handles/destructable.ts:38")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"name"},"name"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"name(): string\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L42"}),"handles/destructable.ts:42")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"occluderheight"},"occluderHeight"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"occluderHeight(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L46"}),"handles/destructable.ts:46")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"occluderHeight(value: number): void\n")),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L50"}),"handles/destructable.ts:50")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"typeid"},"typeId"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"typeId(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L54"}),"handles/destructable.ts:54")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"x"},"x"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"x(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L58"}),"handles/destructable.ts:58")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"y"},"y"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"y(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L62"}),"handles/destructable.ts:62")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"destroy"},"destroy"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"destroy(): void\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L66"}),"handles/destructable.ts:66")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"heal"},"heal"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"heal(life: number, birth: boolean): void\n")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"life")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"birth")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L70"}),"handles/destructable.ts:70")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"kill"},"kill"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"kill(): void\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L74"}),"handles/destructable.ts:74")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"queueanim"},"queueAnim"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"queueAnim(whichAnimation: string): void\n")),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"whichAnimation")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L78"}),"handles/destructable.ts:78")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setanim"},"setAnim"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"setAnim(whichAnimation: string): void\n")),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"whichAnimation")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L82"}),"handles/destructable.ts:82")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setanimspeed"},"setAnimSpeed"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"setAnimSpeed(speedFactor: number): void\n")),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"speedFactor")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L86"}),"handles/destructable.ts:86")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"show"},"show"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"show(flag: boolean): void\n")),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"flag")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L90"}),"handles/destructable.ts:90")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fromevent"},"fromEvent"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"static fromEvent(): Destructable\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/destructable"}),Object(n.b)("em",{parentName:"a"},"Destructable"))),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget"}),"Widget")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L94"}),"handles/destructable.ts:94")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fromhandle"},"fromHandle"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"static fromHandle(handle: destructable): Destructable\n")),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"handle")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"destructable"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/destructable"}),Object(n.b)("em",{parentName:"a"},"Destructable"))),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget"}),"Widget")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/destructable.ts#L98"}),"handles/destructable.ts:98")))}s.isMDXComponent=!0}}]);