"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[4851],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,b=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return t?n.createElement(b,l(l({ref:r},s),{},{components:t})):n.createElement(b,l({ref:r},s))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},l="Dolphinscheduler_FAQ",a={unversionedId:"\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",id:"version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",title:"Dolphinscheduler_FAQ",description:"Q1: Dolphinscheduler 2.0  MySQL Jdbc \u7f3a\u5931\u95ee\u9898",source:"@site/versioned_docs/version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ.md",sourceDirName:"\u5927\u6570\u636e\u6846\u67b6_FAQ",slug:"/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"rookiegao",lastUpdatedAt:1670681820,formattedLastUpdatedAt:"2022\u5e7412\u670810\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Debezium_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Debezium_FAQ"},next:{title:"Flink_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/FLINK_FAQ"}},c={},p=[{value:"Q1: Dolphinscheduler 2.0  MySQL Jdbc \u7f3a\u5931\u95ee\u9898",id:"q1-dolphinscheduler-20--mysql-jdbc-\u7f3a\u5931\u95ee\u9898",level:2},{value:"Q2: Dolphinscheduler \u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a bug \u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25",id:"q2-dolphinscheduler-\u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a-bug-\u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25",level:2}],s={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dolphinscheduler_faq"},"Dolphinscheduler_FAQ"),(0,o.kt)("h2",{id:"q1-dolphinscheduler-20--mysql-jdbc-\u7f3a\u5931\u95ee\u9898"},"Q1: Dolphinscheduler 2.0  MySQL Jdbc \u7f3a\u5931\u95ee\u9898"),(0,o.kt)("p",null,"\u5728 Dolphinscheduler/lib/plugin/task/sql \u76ee\u5f55\u4e0b\u6dfb\u52a0 Jdbc jar \u5305  Dolphinscheduler 2.0 \u4e4b\u540e\u9ed8\u8ba4\u4e0d\u542b\u76f8\u5173 jar."),(0,o.kt)("h2",{id:"q2-dolphinscheduler-\u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a-bug-\u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25"},"Q2: Dolphinscheduler \u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a bug \u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1X44y1u7P2?spm_id_from=333.999.0.0"},"Apache DolphinScheduler 22\u5e745\u6708\u7b2c\u4e00\u6b21\u5468\u4f1a")))}d.isMDXComponent=!0}}]);