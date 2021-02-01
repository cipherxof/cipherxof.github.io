(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),O=n,j=d["".concat(c,".").concat(O)]||d[O]||o[O]||b;return a?r.a.createElement(j,l(l({ref:t},p),{},{components:a})):r.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=(a(0),a(119));const b={id:"widget",title:"Class: Widget",sidebar_label:"Widget",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/widget",id:"api/classes/widget",isDocsHomePage:!1,title:"Class: Widget",description:"Class: Widget",source:"@site/docs\\api\\classes\\widget.md",slug:"/api/classes/widget",permalink:"/w3ts/docs/api/classes/widget",editUrl:null,version:"current",sidebar_label:"Widget",sidebar:"sidebar",previous:{title:"Class: Unit",permalink:"/w3ts/docs/api/classes/unit"},next:{title:"Class: BinaryReader",permalink:"/w3ts/docs/api/classes/binaryreader"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"handle",id:"handle",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"id",id:"id",children:[]},{value:"life",id:"life",children:[]},{value:"x",id:"x",children:[]},{value:"y",id:"y",children:[]}]},{value:"Methods",id:"methods",children:[{value:"fromEvent",id:"fromevent",children:[]},{value:"fromHandle",id:"fromhandle",children:[]}]}],i={toc:l};function p({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-widget"},"Class: Widget"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/handle"}),Object(r.b)("em",{parentName:"a"},"Handle")),"<widget",">"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"Widget")),Object(r.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/destructable"}),Object(r.b)("em",{parentName:"a"},"Destructable"))),Object(r.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/item"}),Object(r.b)("em",{parentName:"a"},"Item"))),Object(r.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/unit"}),Object(r.b)("em",{parentName:"a"},"Unit"))))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"handle"},"handle"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"handle"),": ",Object(r.b)("em",{parentName:"p"},"widget")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/handle"}),"Handle"),".",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/handle#handle"}),"handle")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L6"}),"handles/handle.ts:6")),Object(r.b)("h2",{id:"accessors"},"Accessors"),Object(r.b)("h3",{id:"id"},"id"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"id(): number\n")),Object(r.b)("p",null,"Get the unique ID of the handle. The ID is recycled once you destroy the object."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"The unique ID of a handle object."),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L18"}),"handles/handle.ts:18")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"life"},"life"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"life(): number\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/widget.ts#L7"}),"handles/widget.ts:7")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"life(value: number): void\n")),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"number"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/widget.ts#L11"}),"handles/widget.ts:11")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"x"},"x"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"x(): number\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/widget.ts#L15"}),"handles/widget.ts:15")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"y"},"y"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"y(): number\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/widget.ts#L19"}),"handles/widget.ts:19")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"fromevent"},"fromEvent"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"static fromEvent(): Widget\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget"}),Object(r.b)("em",{parentName:"a"},"Widget"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/widget.ts#L23"}),"handles/widget.ts:23")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"fromhandle"},"fromHandle"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"static fromHandle(handle: widget): Widget\n")),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"handle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"widget"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/w3ts/docs/api/classes/widget"}),Object(r.b)("em",{parentName:"a"},"Widget"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/widget.ts#L27"}),"handles/widget.ts:27")))}p.isMDXComponent=!0}}]);