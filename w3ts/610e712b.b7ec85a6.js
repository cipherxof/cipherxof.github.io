(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(119));const o={title:"World Editor"},i={unversionedId:"editor-support",id:"editor-support",isDocsHomePage:!1,title:"World Editor",description:"You can work on your map in the World Editor while coding in TypeScript with an external editor at the same time. The way this works is with a new feature that was introduced in patch 1.31.0 which allows you to save a map as a folder instead of an archive.",source:"@site/docs\\editor-support.md",slug:"/editor-support",permalink:"/docs/editor-support",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/editor-support.md",version:"current",sidebar:"sidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"w3ts - v2.2.1",permalink:"/docs/api"}},p=[{value:"Opening map",id:"opening-map",children:[]},{value:"Generate globals",id:"generate-globals",children:[]},{value:"Replace the default map",id:"replace-the-default-map",children:[]}],c={toc:p};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can work on your map in the World Editor while coding in TypeScript with an external editor at the same time. The way this works is with a new feature that was introduced in patch 1.31.0 which allows you to save a map as a folder instead of an archive."),Object(a.b)("h2",{id:"opening-map"},"Opening map"),Object(a.b)("p",null,"The easiest way to open your map in the editor is by dragging the map folder (",Object(a.b)("inlineCode",{parentName:"p"},"map.w3x"),") onto the World Editor window. Once it's open you are free to make any changes. The only difference is you don't use the Test Map button to test your map, instead we type ",Object(a.b)("inlineCode",{parentName:"p"},"npm run test")," in the terminal. Any triggers you write in GUI can be accessed from TypeScript by running the watch script described in the next section."),Object(a.b)("h2",{id:"generate-globals"},"Generate globals"),Object(a.b)("p",null,"Before we do any editing with the World Editor we will want to run a watch script that will automatically create definitions for globals that the editor generates, such as regions, cameras, or preplaced units. To do this, it's very simple."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),Object(a.b)("p",null,"Once you run that command you should see some output like the text below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"[build:defs] [nodemon] clean exit - waiting for changes before restart\n")),Object(a.b)("p",null,"This means the watcher is running successfully and will generate the definitions for you."),Object(a.b)("h2",{id:"replace-the-default-map"},"Replace the default map"),Object(a.b)("p",null,"If you wish to use your own map you can delete the one that the template comes with by default (",Object(a.b)("inlineCode",{parentName:"p"},"maps/map.w3x"),"). Delete the entire ",Object(a.b)("inlineCode",{parentName:"p"},"map.w3x")," folder."),Object(a.b)("p",null,"Now, open the map you want to edit in the latest World Editor. Once open you will want to go to ",Object(a.b)("inlineCode",{parentName:"p"},"File > Save Map As..."),", then change the file type to ",Object(a.b)("inlineCode",{parentName:"p"},"Warcraft III Scenario Folder - Expansion"),"."),Object(a.b)("p",null,"Finally, save the map as ",Object(a.b)("inlineCode",{parentName:"p"},"map.w3x")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"maps")," folder where the old map used to be. If you wish to use a different path than ",Object(a.b)("inlineCode",{parentName:"p"},"map.w3x")," you must edit ",Object(a.b)("inlineCode",{parentName:"p"},"config.json"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"mapFolder")," option."),Object(a.b)("p",null,"Note that your map's scripting language must be set to Lua."))}l.isMDXComponent=!0}}]);