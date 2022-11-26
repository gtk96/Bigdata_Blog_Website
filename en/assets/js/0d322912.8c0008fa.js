"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),d=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||a;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const a={},i=void 0,o={unversionedId:"\u6570\u636e\u5e93/Hive/Hive_operation",id:"version-1.0/\u6570\u636e\u5e93/Hive/Hive_operation",title:"Hive_operation",description:"DML \u64cd\u4f5c",source:"@site/versioned_docs/version-1.0/\u6570\u636e\u5e93/Hive/Hive_operation.md",sourceDirName:"\u6570\u636e\u5e93/Hive",slug:"/\u6570\u636e\u5e93/Hive/Hive_operation",permalink:"/Bigdata_Blog_Website/en/docs/\u6570\u636e\u5e93/Hive/Hive_operation",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"skylines",lastUpdatedAt:1669430488,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hive_Study",permalink:"/Bigdata_Blog_Website/en/docs/\u6570\u636e\u5e93/Hive/Hive_Study"},next:{title:"Hudi \u535a\u6587\u63a8\u8350",permalink:"/Bigdata_Blog_Website/en/docs/\u6570\u636e\u5e93/Hudi/Hudi \u535a\u6587\u63a8\u8350"}},p={},d=[{value:"DML \u64cd\u4f5c",id:"dml-\u64cd\u4f5c",level:2},{value:"\u6570\u636e\u5bfc\u5165",id:"\u6570\u636e\u5bfc\u5165",level:3},{value:"\u5411\u8868\u4e2d\u88c5\u8f7d\u6570\u636e",id:"\u5411\u8868\u4e2d\u88c5\u8f7d\u6570\u636e",level:4},{value:"\u901a\u8fc7\u67e5\u8be2\u8bed\u53e5\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff08Insert\uff09",id:"\u901a\u8fc7\u67e5\u8be2\u8bed\u53e5\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636einsert",level:4},{value:"\u67e5\u8be2\u8bed\u53e5\u4e2d\u521b\u5efa\u8868\u5e76\u52a0\u8f7d\u6570\u636e\uff08As Select\uff09",id:"\u67e5\u8be2\u8bed\u53e5\u4e2d\u521b\u5efa\u8868\u5e76\u52a0\u8f7d\u6570\u636eas-select",level:4},{value:"\u521b\u5efa\u8868\u65f6\u901a\u8fc7 Location \u6307\u5b9a\u52a0\u8f7d\u6570\u636e\u8def\u5f84",id:"\u521b\u5efa\u8868\u65f6\u901a\u8fc7-location-\u6307\u5b9a\u52a0\u8f7d\u6570\u636e\u8def\u5f84",level:4},{value:"Import \u6570\u636e\u5230\u6307\u5b9a  Hive \u8868\u4e2d",id:"import-\u6570\u636e\u5230\u6307\u5b9a--hive-\u8868\u4e2d",level:4},{value:"\u6570\u636e\u5bfc\u51fa",id:"\u6570\u636e\u5bfc\u51fa",level:3},{value:"Insert \u5bfc\u51fa",id:"insert-\u5bfc\u51fa",level:4},{value:"Hadoop \u547d\u4ee4\u5bfc\u51fa\u5230\u672c\u5730",id:"hadoop-\u547d\u4ee4\u5bfc\u51fa\u5230\u672c\u5730",level:4},{value:"Hive Shell  \u547d\u4ee4\u5bfc\u51fa",id:"hive-shell--\u547d\u4ee4\u5bfc\u51fa",level:4},{value:"Export \u5bfc\u51fa\u5230  HDFS \u4e0a",id:"export-\u5bfc\u51fa\u5230--hdfs-\u4e0a",level:4},{value:"Sqoop \u5bfc\u51fa",id:"sqoop-\u5bfc\u51fa",level:4},{value:"\u6e05\u9664\u8868\u4e2d\u6570\u636e\uff08Truncate\uff09",id:"\u6e05\u9664\u8868\u4e2d\u6570\u636etruncate",level:4},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u57fa\u672c\u67e5\u8be2\uff08Select\u2026From\uff09",id:"\u57fa\u672c\u67e5\u8be2selectfrom",level:3},{value:"\u5168\u8868\u548c\u7279\u5b9a\u5217\u67e5\u8be2",id:"\u5168\u8868\u548c\u7279\u5b9a\u5217\u67e5\u8be2",level:4},{value:"\u5217\u522b\u540d",id:"\u5217\u522b\u540d",level:4}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dml-\u64cd\u4f5c"},"DML \u64cd\u4f5c"),(0,r.kt)("h3",{id:"\u6570\u636e\u5bfc\u5165"},"\u6570\u636e\u5bfc\u5165"),(0,r.kt)("h4",{id:"\u5411\u8868\u4e2d\u88c5\u8f7d\u6570\u636e"},"\u5411\u8868\u4e2d\u88c5\u8f7d\u6570\u636e"),(0,r.kt)("p",null,"1\uff09\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> drop table dept;\nhive> load data [local] inpath '\u6570\u636e\u7684  path' [overwrite] into table \nstudent [partition (partcol1=val1,\u2026)];\n")),(0,r.kt)("p",null,"\uff081\uff09load data:\u8868\u793a\u52a0\u8f7d\u6570\u636e"),(0,r.kt)("p",null,"\uff082\uff09local:\u8868\u793a\u4ece\u672c\u5730\u52a0\u8f7d\u6570\u636e\u5230 hive \u8868\uff1b\u5426\u5219\u4ece HDFS \u52a0\u8f7d\u6570\u636e\u5230 hive \u8868"),(0,r.kt)("p",null,"\uff083\uff09inpath:\u8868\u793a\u52a0\u8f7d\u6570\u636e\u7684\u8def\u5f84"),(0,r.kt)("p",null,"\uff084\uff09overwrite:\u8868\u793a\u8986\u76d6\u8868\u4e2d\u5df2\u6709\u6570\u636e\uff0c\u5426\u5219\u8868\u793a\u8ffd\u52a0"),(0,r.kt)("p",null,"\uff085\uff09into table:\u8868\u793a\u52a0\u8f7d\u5230\u54ea\u5f20\u8868"),(0,r.kt)("p",null,"\uff086\uff09student:\u8868\u793a\u5177\u4f53\u7684\u8868"),(0,r.kt)("p",null,"\uff087\uff09partition:\u8868\u793a\u4e0a\u4f20\u5230\u6307\u5b9a\u5206\u533a"),(0,r.kt)("p",null,"2\uff09\u5b9e\u64cd\u6848\u4f8b"),(0,r.kt)("p",null,"\uff080\uff09\u521b\u5efa\u4e00\u5f20\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> create table student(id string, name string) row format \ndelimited fields terminated by '\\t';\n")),(0,r.kt)("p",null,"\uff081\uff09\u52a0\u8f7d\u672c\u5730\u6587\u4ef6\u5230  hive"),(0,r.kt)("p",null,"\uff082\uff09\u52a0\u8f7d  HDFS \u6587\u4ef6\u5230  hive \u4e2d "),(0,r.kt)("p",null,"\u4e0a\u4f20\u6587\u4ef6\u5230 HDFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> load data local inpath\n'/opt/module/hive/datas/student.txt' into table default.student;\n")),(0,r.kt)("p",null,"\u52a0\u8f7d HDFS \u4e0a\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> dfs -put /opt/module/hive/data/student.txt \n/user/atguigu/hive;\nhive (default)> load data inpath '/user/atguigu/hive/student.txt' into \ntable default.student;\n")),(0,r.kt)("p",null,"\uff083\uff09\u52a0\u8f7d\u6570\u636e\u8986\u76d6\u8868\u4e2d\u5df2\u6709\u7684\u6570\u636e "),(0,r.kt)("p",null,"\u4e0a\u4f20\u6587\u4ef6\u5230 HDFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> dfs -put /opt/module/data/student.txt /user/atguigu/hive;\n")),(0,r.kt)("p",null,"\u52a0\u8f7d\u6570\u636e\u8986\u76d6\u8868\u4e2d\u5df2\u6709\u7684\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> load data inpath '/user/atguigu/hive/student.txt' \noverwrite into table default.student;\n")),(0,r.kt)("h4",{id:"\u901a\u8fc7\u67e5\u8be2\u8bed\u53e5\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636einsert"},"\u901a\u8fc7\u67e5\u8be2\u8bed\u53e5\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff08Insert\uff09"),(0,r.kt)("p",null,"1\uff09\u521b\u5efa\u4e00\u5f20\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> create table student_par(id int, name string) row format \ndelimited fields terminated by '\\t';\n")),(0,r.kt)("p",null,"2\uff09\u57fa\u672c\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> insert into table  student_par \nvalues(1,'wangwu'),(2,'zhaoliu');\nhive (default)> insert overwrite table student_par\nselect id, name from student where month='201709';\n")),(0,r.kt)("p",null,"3\uff09\u57fa\u672c\u6a21\u5f0f\u63d2\u5165\uff08\u6839\u636e\u5355\u5f20\u8868\u67e5\u8be2\u7ed3\u679c\uff09"),(0,r.kt)("p",null,"insert into\uff1a\u4ee5\u8ffd\u52a0\u6570\u636e\u7684\u65b9\u5f0f\u63d2\u5165\u5230\u8868\u6216\u5206\u533a\uff0c\u539f\u6709\u6570\u636e\u4e0d\u4f1a\u5220\u9664 "),(0,r.kt)("p",null,"insert overwrite\uff1a\u4f1a\u8986\u76d6\u8868\u4e2d\u5df2\u5b58\u5728\u7684\u6570\u636e"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1ainsert \u4e0d\u652f\u6301\u63d2\u5165\u90e8\u5206\u5b57\u6bb5"),(0,r.kt)("p",null,"4\uff09\u591a\u8868\uff08\u591a\u5206\u533a\uff09\u63d2\u5165\u6a21\u5f0f\uff08\u6839\u636e\u591a\u5f20\u8868\u67e5\u8be2\u7ed3\u679c\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> from student\ninsert overwrite table student partition(month='201707') \nselect id, name where month='201709'\ninsert overwrite table student partition(month='201706') \nselect id, name where month='201709';\n")),(0,r.kt)("h4",{id:"\u67e5\u8be2\u8bed\u53e5\u4e2d\u521b\u5efa\u8868\u5e76\u52a0\u8f7d\u6570\u636eas-select"},"\u67e5\u8be2\u8bed\u53e5\u4e2d\u521b\u5efa\u8868\u5e76\u52a0\u8f7d\u6570\u636e\uff08As Select\uff09"),(0,r.kt)("p",null,"\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u521b\u5efa\u8868\uff08\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u6dfb\u52a0\u5230\u65b0\u521b\u5efa\u7684\u8868\u4e2d\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create table if not exists student3 \nas select id, name from student;\n")),(0,r.kt)("h4",{id:"\u521b\u5efa\u8868\u65f6\u901a\u8fc7-location-\u6307\u5b9a\u52a0\u8f7d\u6570\u636e\u8def\u5f84"},"\u521b\u5efa\u8868\u65f6\u901a\u8fc7 Location \u6307\u5b9a\u52a0\u8f7d\u6570\u636e\u8def\u5f84"),(0,r.kt)("p",null,"1\uff09\u4e0a\u4f20\u6570\u636e\u5230 hdfs \u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> dfs -mkdir /student;\nhive (default)> dfs -put /opt/module/datas/student.txt /student;\n")),(0,r.kt)("p",null,"2\uff09\u521b\u5efa\u8868\uff0c\u5e76\u6307\u5b9a\u5728 hdfs \u4e0a\u7684\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> create external table if not exists student5(\nid int, name string \n)\nrow format delimited fields terminated by '\\t' \nlocation '/student;\n")),(0,r.kt)("p",null,"3\uff09\u67e5\u8be2\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> select * from student5;\n")),(0,r.kt)("h4",{id:"import-\u6570\u636e\u5230\u6307\u5b9a--hive-\u8868\u4e2d"},"Import \u6570\u636e\u5230\u6307\u5b9a  Hive \u8868\u4e2d"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5148\u7528  export \u5bfc\u51fa\u540e\uff0c\u518d\u5c06\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> import table student2 \nfrom '/user/hive/warehouse/export/student';\n")),(0,r.kt)("h3",{id:"\u6570\u636e\u5bfc\u51fa"},"\u6570\u636e\u5bfc\u51fa"),(0,r.kt)("h4",{id:"insert-\u5bfc\u51fa"},"Insert \u5bfc\u51fa"),(0,r.kt)("p",null,"1\uff09\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u5bfc\u51fa\u5230\u672c\u5730"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> insert overwrite local directory \n'/opt/module/hive/data/export/student'\nselect * from student;\n")),(0,r.kt)("p",null,"2\uff09\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u683c\u5f0f\u5316\u5bfc\u51fa\u5230\u672c\u5730"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive(default)>insert overwrite local directory \n'/opt/module/hive/data/export/student1'\nROW FORMAT DELIMITED FIELDS TERMINATED BY '\\t' \nselect * from student;\n")),(0,r.kt)("p",null,"3\uff09\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u5bfc\u51fa\u5230  HDFS \u4e0a(\u6ca1\u6709  local)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> insert overwrite directory '/user/atguigu/student2'\nROW FORMAT DELIMITED FIELDS TERMINATED BY '\\t' \nselect * from student;\n")),(0,r.kt)("h4",{id:"hadoop-\u547d\u4ee4\u5bfc\u51fa\u5230\u672c\u5730"},"Hadoop \u547d\u4ee4\u5bfc\u51fa\u5230\u672c\u5730"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> dfs -get /user/hive/warehouse/student/student.txt \n/opt/module/data/export/student3.txt;\n\n")),(0,r.kt)("h4",{id:"hive-shell--\u547d\u4ee4\u5bfc\u51fa"},"Hive Shell  \u547d\u4ee4\u5bfc\u51fa"),(0,r.kt)("p",null,"\u57fa\u672c\u8bed\u6cd5\uff1a\uff08hive -f/-e  \u6267\u884c\u8bed\u53e5\u6216\u8005\u811a\u672c   > file\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[xxx@hadoop102 hive]$ bin/hive -e 'select * from default.student;' > \n/opt/module/hive/data/export/student4.txt;\n")),(0,r.kt)("h4",{id:"export-\u5bfc\u51fa\u5230--hdfs-\u4e0a"},"Export \u5bfc\u51fa\u5230  HDFS \u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(defahiveult)> export table default.student \nto '/user/hive/warehouse/export/student';\n")),(0,r.kt)("p",null,"{{export \u548c import \u4e3b\u8981\u7528\u4e8e\u4e24\u4e2a Hadoop \u5e73\u53f0\u96c6\u7fa4\u4e4b\u95f4  Hive \u8868\u8fc1\u79fb\u3002}}"),(0,r.kt)("h4",{id:"sqoop-\u5bfc\u51fa"},"Sqoop \u5bfc\u51fa"),(0,r.kt)("p",null,"\u53c2\u7167 sqoop \u6587\u6863"),(0,r.kt)("h4",{id:"\u6e05\u9664\u8868\u4e2d\u6570\u636etruncate"},"\u6e05\u9664\u8868\u4e2d\u6570\u636e\uff08Truncate\uff09"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aTruncate \u53ea\u80fd\u5220\u9664\u7ba1\u7406\u8868\uff0c\u4e0d\u80fd\u5220\u9664\u5916\u90e8\u8868\u4e2d\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> truncate table student;\n")),(0,r.kt)("h2",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Select"},"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Select")),(0,r.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT [ALL | DISTINCT] select_expr, select_expr, ... \nFROM table_reference\n[WHERE where_condition] \n[GROUP BY col_list] \n[ORDER BY col_list] \n[CLUSTER BY col_list\n| [DISTRIBUTE BY col_list] [SORT BY col_list] \n]\n[LIMIT number]\n")),(0,r.kt)("h3",{id:"\u57fa\u672c\u67e5\u8be2selectfrom"},"\u57fa\u672c\u67e5\u8be2\uff08Select\u2026From\uff09"),(0,r.kt)("h4",{id:"\u5168\u8868\u548c\u7279\u5b9a\u5217\u67e5\u8be2"},"\u5168\u8868\u548c\u7279\u5b9a\u5217\u67e5\u8be2"),(0,r.kt)("p",null,"0\uff09\u6570\u636e\u51c6\u5907"),(0,r.kt)("p",null,"\uff080\uff09\u539f\u59cb\u6570\u636e "),(0,r.kt)("p",null,"dept:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"10 ACCOUNTING 1700\n20 RESEARCH 1800\n30 SALES  1900\n40 OPERATIONS 1700\n")),(0,r.kt)("p",null,"emp\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"7369  SMITH  CLERK  7902   1980-12-17 800.00     20\n7499   ALLEN  SALESMAN  7698  1981-2-20  1600.00   300.00   30\n7521   WARD   SALESMAN  7698  1981-2-22   1250.00   500.00   30\n7566   JONES  MANAGER     7839   1981-4-2  2975.00    20\n7521   MARTIN SALESMAN   7698   1981-9-28  1250.00 1400.00 30\n7698 BLAKE MANAGER 7839 1981-5-1  2850.00  30\n7782 CLARK MANAGER 7839 1981-6-9  2450.00 10 \n7788   SCOTT  ANALYST 7566   1987-4-19  3000.00    20\n7839 KING  PRESIDENT    1981-11-17 5000.00    10\n7844 TURNER SALESMAN  7698   1981-9-8   1500.00 0.00   30\n7876  ADAMS  CLERK  7788  1987-5-23 1100.00 20\n7900  JAMES   CLERK  7698  1981-12-3 950.00 30\n7902   FORD  ANALYST  7566  1981-12-3  3000.00    20\n7934   MILLER  CLERK  7782  1982-1-23  1300.00    10\n\n")),(0,r.kt)("p",null,"\uff081\uff09\u521b\u5efa\u90e8\u95e8\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create table if not exists dept( \ndeptno int,\ndname string, \nloc int\n)\nrow format delimited fields terminated by '\\t';\n")),(0,r.kt)("p",null,"\uff082\uff09\u521b\u5efa\u5458\u5de5\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create table if not exists emp( \nempno int,\nename string, \njob string,\nmgr int, \nhiredate string, \nsal double, \ncomm double, \ndeptno int)\nrow format delimited fields terminated by '\\t';\n")),(0,r.kt)("p",null,"\uff083\uff09\u5bfc\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"load data local inpath '/opt/module/datas/dept.txt' into table \ndept;\nload data local inpath '/opt/module/datas/emp.txt' into table emp;\n")),(0,r.kt)("p",null,"1\uff09\u5168\u8868\u67e5\u8be2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> select * from emp;\nhive (default)> select empno,ename,job,mgr,hiredate,sal,comm,deptno from \nemp ;\n")),(0,r.kt)("p",null,"2\uff09\u9009\u62e9\u7279\u5b9a\u5217\u67e5\u8be2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> select empno, ename from emp;\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\n\uff081\uff09SQL  \u8bed\u8a00\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u3002"),(0,r.kt)("p",null,"\uff082\uff09SQL  \u53ef\u4ee5\u5199\u5728\u4e00\u884c\u6216\u8005\u591a\u884c\u3002"),(0,r.kt)("p",null,"\uff083\uff09\u5173\u952e\u5b57\u4e0d\u80fd\u88ab\u7f29\u5199\u4e5f\u4e0d\u80fd\u5206\u884c\u3002"),(0,r.kt)("p",null,"\uff084\uff09\u5404\u5b50\u53e5\u4e00\u822c\u8981\u5206\u884c\u5199\u3002"),(0,r.kt)("p",null,"\uff085\uff09\u4f7f\u7528\u7f29\u8fdb\u63d0\u9ad8\u8bed\u53e5\u7684\u53ef\u8bfb\u6027\u3002"),(0,r.kt)("h4",{id:"\u5217\u522b\u540d"},"\u5217\u522b\u540d"),(0,r.kt)("p",null,"1\uff09\u91cd\u547d\u540d\u4e00\u4e2a\u5217"),(0,r.kt)("p",null,"2\uff09\u4fbf\u4e8e\u8ba1\u7b97"),(0,r.kt)("p",null,"3\uff09\u7d27\u8ddf\u5217\u540d\uff0c\u4e5f\u53ef\u4ee5\u5728\u5217\u540d\u548c\u522b\u540d\u4e4b\u95f4\u52a0\u5165\u5173\u952e\u5b57\u2018AS\u2019"),(0,r.kt)("p",null,"4\uff09\u6848\u4f8b\u5b9e\u64cd"),(0,r.kt)("p",null,"\u67e5\u8be2\u540d\u79f0\u548c\u90e8\u95e8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive (default)> select ename AS name, deptno dn from emp;\n")))}s.isMDXComponent=!0}}]);