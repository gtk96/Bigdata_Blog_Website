"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[2810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"\u6570\u636e\u96c6\u6210/Flume/Flume \u535a\u6587\u63a8\u8350",id:"version-1.0/\u6570\u636e\u96c6\u6210/Flume/Flume \u535a\u6587\u63a8\u8350",title:"Flume \u535a\u6587\u63a8\u8350",description:"flume\u7684TaildirSource\u4ecb\u7ecd\u53ca\u5347\u7ea7\u6539\u9020",source:"@site/versioned_docs/version-1.0/\u6570\u636e\u96c6\u6210/Flume/Flume \u535a\u6587\u63a8\u8350.md",sourceDirName:"\u6570\u636e\u96c6\u6210/Flume",slug:"/\u6570\u636e\u96c6\u6210/Flume/Flume \u535a\u6587\u63a8\u8350",permalink:"/Bigdata_Blog_Website/docs/\u6570\u636e\u96c6\u6210/Flume/Flume \u535a\u6587\u63a8\u8350",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"skylines",lastUpdatedAt:1669430488,formattedLastUpdatedAt:"2022\u5e7411\u670826\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres_CDC_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u6570\u636e\u96c6\u6210/Flink_CDC/Postgres_CDC_FAQ/"},next:{title:"Flume_Study",permalink:"/Bigdata_Blog_Website/docs/\u6570\u636e\u96c6\u6210/Flume/Flume_Study"}},p={},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/m0_37739193/article/details/72962192"},"flume\u7684TaildirSource\u4ecb\u7ecd\u53ca\u5347\u7ea7\u6539\u9020")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1032848"},"\u91cd\u78c5\uff1aFlume1-7\u7ed3\u5408kafka\u8bb2\u89e3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/xiaoji88326518/article/details/76850901"},"Flume\u4f7f\u7528\u5927\u5168\u4e4bkafka source-kafka channel-hdfs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://jackalope.cn/2016/10/14/flume-trouble-shooting/"},"flume-trouble-shooting")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/e64f58c9ad6c"},"flume \u4e2dETL\u62e6\u622a\u5668\u3001\u65e5\u5fd7\u7c7b\u578b\u533a\u5206\u62e6\u622a\u5668\u7684\u5b9e\u73b0\u65b9\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/shujuelin/article/details/89020156?utm_medium=distribute.wap_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1&depth_1-utm_source=distribute.wap_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1"},"Flume\u9762\u8bd5\u9898")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zhqin/p/12231632.html"},"flume\u5230\u5e95\u4f1a\u4e22\u6570\u636e\u5417\uff1f\u5176\u53ef\u9760\u6027\u5982\u4f55\uff1f\u2014\u2014\u8f7b\u677e\u641e\u61c2Flume\u4e8b\u52a1\u673a\u5236 ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/52727889"},"Flume\u9762\u8bd5\u9898\uff08\u4e00\uff09")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_26803795/article/details/105288658?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3"},"\u5927\u6570\u636e\u9762\u8bd5\u9898\u77e5\u8bc6\u70b9\u5206\u6790\uff08\u5341\u4e00\uff09\u4e4bFlume\u9762\u8bd5\u771f\u9898\u53ca\u7b54\u6848")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/huangxiufen/p/12370044.html"},"Flume \u81ea\u5b9a\u4e49\u62e6\u622a\u5668 \u591a\u884c\u8bfb\u53d6\u65e5\u5fd7+\u622a\u65ad")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u012443641/article/details/80757229"},"\u5b9a\u4e49flume\u62e6\u622a\u5668-\u5b9e\u73b0\u4e86\u591a\u79cd\u529f\u80fd")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzA5NDYyMTU1NQ==&mid=2247483792&idx=1&sn=c62dd8b55d93f8ca719b3f5c5a703dd4&chksm=904a9b8ca73d129a9aafc350a16a8aa3e503a0e3d7d83cf12157584d3dd54987c5da8e23ffdc&mpshare=1&scene=2&srcid=&sharer_sharetime=1589357530719&sharer_shareid=fc2ac64b539199b1ffd7d5942fb8d736&from=timeline#rd"},"zabbix\u90e8\u7f72\u76d1\u63a7\u96c6\u7fa4\uff0c\u81ea\u5b9a\u4e49\u76d1\u63a7Flume\uff08\u56fe\u7247\u591a\uff0c\u6b65\u9aa4\u8be6\u7ec6\uff09")))}m.isMDXComponent=!0}}]);