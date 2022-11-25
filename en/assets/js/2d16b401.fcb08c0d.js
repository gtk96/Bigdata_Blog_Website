"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[8001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,g=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},i="Hbase and ClickHouse application scenarios",l={permalink:"/Bigdata_Blog_Website/en/blog/Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f",source:"@site/i18n/en/docusaurus-plugin-content-blog/Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f.md",title:"Hbase and ClickHouse application scenarios",description:"Hbase \u5b58\u50a8\u548c\u67e5\u8be2\u7ef4\u5ea6\u6570\u636e",date:"2022-11-25T23:48:11.000Z",formattedDate:"November 25, 2022",tags:[{label:"data warehouse",permalink:"/Bigdata_Blog_Website/en/blog/tags/data-warehouse"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},prevItem:{title:"Comparison between Flink OLAP and Trino TPC-DS",permalink:"/Bigdata_Blog_Website/en/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4"},nextItem:{title:"IDEA CheckStyle to configure",permalink:"/Bigdata_Blog_Website/en/blog/IDEA CheckStyle \u914d\u7f6e"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hbase \u5b58\u50a8\u548c\u67e5\u8be2\u7ef4\u5ea6\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hbase \u6570\u636e\u5206\u6790\u6548\u7387\u4f4e \u5206\u6790\u51fd\u6570\u5c11\uff0cHbase\u6570\u636e\u5206\u6790\u6d89\u53ca\u78c1\u76d8\u8bfb\u53d6\u6570\u636e\uff0c\u6bd4\u8f83\u7248\u672c\uff0c\u805a\u5408\u5bfc\u81f4\u6548\u7387\u4f4e\u4e0b")),(0,a.kt)("p",null,"ClickHouse \u5b58\u50a8\u548c\u67e5\u8be2\u5bbd\u8868\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u64c5\u957f\u6570\u636e\u5206\u6790\u800c\u4e0d\u662f\u67e5\u8be2\u660e\u7ec6\uff0c\u7ef4\u5ea6\u6570\u636e\u4e0d\u5b9c\u5b58\u653e ClickHouse")))}p.isMDXComponent=!0}}]);