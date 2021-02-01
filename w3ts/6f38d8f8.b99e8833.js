(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||b;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return i}));var n=a(3),r=(a(0),a(119));const b={id:"dialogbutton",title:"Class: DialogButton",sidebar_label:"DialogButton",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/dialogbutton",id:"api/classes/dialogbutton",isDocsHomePage:!1,title:"Class: DialogButton",description:"Class: DialogButton",source:"@site/docs\\api\\classes\\dialogbutton.md",slug:"/api/classes/dialogbutton",permalink:"/docs/api/classes/dialogbutton",editUrl:null,version:"current",sidebar_label:"DialogButton",sidebar:"sidebar",previous:{title:"Class: Dialog",permalink:"/docs/api/classes/dialog"},next:{title:"Class: Effect",permalink:"/docs/api/classes/effect"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"handle",id:"handle",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"id",id:"id",children:[]}]},{value:"Methods",id:"methods",children:[{value:"fromHandle",id:"fromhandle",children:[]}]}],o={toc:c};function i({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-dialogbutton"},"Class: DialogButton"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/handle"}),Object(r.b)("em",{parentName:"a"},"Handle")),"<button",">"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"DialogButton")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"new DialogButton(whichDialog: Dialog, text: string, hotkey?: number, quit?: boolean, score?: boolean): DialogButton\n")),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"whichDialog")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/dialog"}),Object(r.b)("em",{parentName:"a"},"Dialog"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"hotkey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"quit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"score")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/dialogbutton"}),Object(r.b)("em",{parentName:"a"},"DialogButton"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L6"}),"handles/dialog.ts:6")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"handle"},"handle"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"handle"),": ",Object(r.b)("em",{parentName:"p"},"button")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/handle"}),"Handle"),".",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/handle#handle"}),"handle")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L6"}),"handles/handle.ts:6")),Object(r.b)("h2",{id:"accessors"},"Accessors"),Object(r.b)("h3",{id:"id"},"id"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"id(): number\n")),Object(r.b)("p",null,"Get the unique ID of the handle. The ID is recycled once you destroy the object."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"The unique ID of a handle object."),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/handle.ts#L18"}),"handles/handle.ts:18")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"fromhandle"},"fromHandle"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"static fromHandle(handle: button): DialogButton\n")),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"handle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"button"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/dialogbutton"}),Object(r.b)("em",{parentName:"a"},"DialogButton"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cipherxof/w3ts/blob/af028de/handles/dialog.ts#L18"}),"handles/dialog.ts:18")))}i.isMDXComponent=!0}}]);