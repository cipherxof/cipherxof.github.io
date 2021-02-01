(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),O=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=O(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),j=O(a),s=b,d=j["".concat(c,".").concat(s)]||j[s]||i[s]||r;return a?n.a.createElement(d,l(l({ref:t},m),{},{components:a})):n.a.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var m=2;m<r;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var b=a(3),n=(a(0),a(119));const r={id:"rectangle",title:"Class: Rectangle",sidebar_label:"Rectangle",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/rectangle",id:"api/classes/rectangle",isDocsHomePage:!1,title:"Class: Rectangle",description:"Class: Rectangle",source:"@site/docs\\api\\classes\\rectangle.md",slug:"/api/classes/rectangle",permalink:"/w3ts/docs/api/classes/rectangle",editUrl:null,version:"current",sidebar_label:"Rectangle",sidebar:"sidebar",previous:{title:"Class: QuestItem",permalink:"/w3ts/docs/api/classes/questitem"},next:{title:"Class: Region",permalink:"/w3ts/docs/api/classes/region"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"handle",id:"handle",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"centerX",id:"centerx",children:[]},{value:"centerY",id:"centery",children:[]},{value:"id",id:"id",children:[]},{value:"maxX",id:"maxx",children:[]},{value:"maxY",id:"maxy",children:[]},{value:"minX",id:"minx",children:[]},{value:"minY",id:"miny",children:[]}]},{value:"Methods",id:"methods",children:[{value:"destroy",id:"destroy",children:[]},{value:"enumDestructables",id:"enumdestructables",children:[]},{value:"enumItems",id:"enumitems",children:[]},{value:"move",id:"move",children:[]},{value:"movePoint",id:"movepoint",children:[]},{value:"setRect",id:"setrect",children:[]},{value:"setRectFromPoint",id:"setrectfrompoint",children:[]},{value:"fromHandle",id:"fromhandle",children:[]},{value:"fromPoint",id:"frompoint",children:[]},{value:"getWorldBounds",id:"getworldbounds",children:[]}]}],p={toc:l};function m({components:e,...t}){return Object(n.b)("wrapper",Object(b.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-rectangle"},"Class: Rectangle"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/handle"}),Object(n.b)("em",{parentName:"a"},"Handle")),"<rect",">"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"Rectangle")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"new Rectangle(minX: number, minY: number, maxX: number, maxY: number): Rectangle\n")),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"minX")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"minY")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"maxX")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"maxY")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/rectangle"}),Object(n.b)("em",{parentName:"a"},"Rectangle"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L6"}),"handles/rect.ts:6")))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"handle"},"handle"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"handle"),": ",Object(n.b)("em",{parentName:"p"},"rect")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"/w3ts/docs/api/classes/handle"}),"Handle"),".",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"/w3ts/docs/api/classes/handle#handle"}),"handle"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L6"}),"handles/handle.ts:6")))),Object(n.b)("h2",{id:"accessors"},"Accessors"),Object(n.b)("h3",{id:"centerx"},"centerX"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"centerX(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L16"}),"handles/rect.ts:16")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"centery"},"centerY"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"centerY(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L20"}),"handles/rect.ts:20")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"id"},"id"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"id(): number\n")),Object(n.b)("p",null,"Get the unique ID of the handle. The ID is recycled once you destroy the object."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The unique ID of a handle object."),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L18"}),"handles/handle.ts:18")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"maxx"},"maxX"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"maxX(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L24"}),"handles/rect.ts:24")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"maxy"},"maxY"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"maxY(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L28"}),"handles/rect.ts:28")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"minx"},"minX"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"minX(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L32"}),"handles/rect.ts:32")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"miny"},"minY"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"minY(): number\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L36"}),"handles/rect.ts:36")))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"destroy"},"destroy"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"destroy(): void\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L40"}),"handles/rect.ts:40")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"enumdestructables"},"enumDestructables"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"enumDestructables(filter: boolexpr | function, actionFunc: function): void\n")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolexpr")," ","|"," () => ",Object(n.b)("em",{parentName:"td"},"boolean"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"actionFunc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"() => ",Object(n.b)("em",{parentName:"td"},"void"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L44"}),"handles/rect.ts:44")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"enumitems"},"enumItems"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"enumItems(filter: boolexpr | function, actionFunc: function): void\n")),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolexpr")," ","|"," () => ",Object(n.b)("em",{parentName:"td"},"boolean"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"actionFunc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"() => ",Object(n.b)("em",{parentName:"td"},"void"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L48"}),"handles/rect.ts:48")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"move"},"move"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"move(newCenterX: number, newCenterY: number): void\n")),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newCenterX")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newCenterY")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L52"}),"handles/rect.ts:52")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"movepoint"},"movePoint"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"movePoint(newCenterPoint: Point): void\n")),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newCenterPoint")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/w3ts/docs/api/classes/point"}),Object(n.b)("em",{parentName:"a"},"Point")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L56"}),"handles/rect.ts:56")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setrect"},"setRect"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"setRect(minX: number, minY: number, maxX: number, maxY: number): void\n")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"minX")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"minY")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"maxX")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"maxY")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"number"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L60"}),"handles/rect.ts:60")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setrectfrompoint"},"setRectFromPoint"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"setRectFromPoint(min: Point, max: Point): void\n")),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"min")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/w3ts/docs/api/classes/point"}),Object(n.b)("em",{parentName:"a"},"Point")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"max")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/w3ts/docs/api/classes/point"}),Object(n.b)("em",{parentName:"a"},"Point")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L64"}),"handles/rect.ts:64")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fromhandle"},"fromHandle"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"static fromHandle(handle: rect): Rectangle\n")),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"handle")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"rect"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/rectangle"}),Object(n.b)("em",{parentName:"a"},"Rectangle"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L68"}),"handles/rect.ts:68")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"frompoint"},"fromPoint"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"static fromPoint(min: Point, max: Point): Rectangle\n")),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"min")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/w3ts/docs/api/classes/point"}),Object(n.b)("em",{parentName:"a"},"Point")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"max")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/w3ts/docs/api/classes/point"}),Object(n.b)("em",{parentName:"a"},"Point")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/rectangle"}),Object(n.b)("em",{parentName:"a"},"Rectangle"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L72"}),"handles/rect.ts:72")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getworldbounds"},"getWorldBounds"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-typescript"}),"static getWorldBounds(): Rectangle\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/rectangle"}),Object(n.b)("em",{parentName:"a"},"Rectangle"))),Object(n.b)("sub",null,Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in: ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/rect.ts#L77"}),"handles/rect.ts:77")))))}m.isMDXComponent=!0}}]);