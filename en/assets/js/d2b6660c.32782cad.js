"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[7412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,v=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(v,r(r({ref:t},d),{},{components:n})):a.createElement(v,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r=void 0,l={unversionedId:"\u6570\u636e\u96c6\u6210/Flink_CDC/MySQL_CDC_FAQ/MySQL_CDC_FAQ",id:"version-1.0/\u6570\u636e\u96c6\u6210/Flink_CDC/MySQL_CDC_FAQ/MySQL_CDC_FAQ",title:"MySQL_CDC_FAQ",description:"MySQL CDC FAQ \u53c2\u8003 \u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406",source:"@site/versioned_docs/version-1.0/\u6570\u636e\u96c6\u6210/Flink_CDC/MySQL_CDC_FAQ/MySQL_CDC_FAQ.md",sourceDirName:"\u6570\u636e\u96c6\u6210/Flink_CDC/MySQL_CDC_FAQ",slug:"/\u6570\u636e\u96c6\u6210/Flink_CDC/MySQL_CDC_FAQ/",permalink:"/Bigdata_Blog_Website/en/docs/\u6570\u636e\u96c6\u6210/Flink_CDC/MySQL_CDC_FAQ/",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"skylines",lastUpdatedAt:1669430488,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB_CDC_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/\u6570\u636e\u96c6\u6210/Flink_CDC/MongoDB_CDC_FAQ/"},next:{title:"Postgres_CDC_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/\u6570\u636e\u96c6\u6210/Flink_CDC/Postgres_CDC_FAQ/"}},s={},c=[{value:"MySQL CDC FAQ \u53c2\u8003 \u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406",id:"mysql-cdc-faq-\u53c2\u8003-\u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406",level:2},{value:"Q1: \u4f7f\u7528CDC 2.x\u7248\u672c\uff0c\u53ea\u80fd\u8bfb\u53d6\u5168\u91cf\u6570\u636e\uff0c\u65e0\u6cd5\u8bfb\u53d6\u589e\u91cf\uff08binlog\uff09 \u6570\u636e\uff0c\u600e\u4e48\u56de\u4e8b\uff1f",id:"q1-\u4f7f\u7528cdc-2x\u7248\u672c\u53ea\u80fd\u8bfb\u53d6\u5168\u91cf\u6570\u636e\u65e0\u6cd5\u8bfb\u53d6\u589e\u91cfbinlog-\u6570\u636e\u600e\u4e48\u56de\u4e8b",level:2},{value:"Q2: \u4f7f\u7528 MySQL CDC\uff0c\u589e\u91cf\u9636\u6bb5\u8bfb\u53d6\u51fa\u6765\u7684 timestamp \u5b57\u6bb5\u65f6\u533a\u76f8\u5dee8\u5c0f\u65f6\uff0c\u600e\u4e48\u56de\u4e8b\u5462\uff1f",id:"q2-\u4f7f\u7528-mysql-cdc\u589e\u91cf\u9636\u6bb5\u8bfb\u53d6\u51fa\u6765\u7684-timestamp-\u5b57\u6bb5\u65f6\u533a\u76f8\u5dee8\u5c0f\u65f6\u600e\u4e48\u56de\u4e8b\u5462",level:2},{value:"Q3: mysql cdc\u652f\u6301\u76d1\u542c\u4ece\u5e93\u5417\uff1f\u4ece\u5e93\u9700\u8981\u5982\u4f55\u914d\u7f6e\uff1f",id:"q3-mysql-cdc\u652f\u6301\u76d1\u542c\u4ece\u5e93\u5417\u4ece\u5e93\u9700\u8981\u5982\u4f55\u914d\u7f6e",level:2},{value:"Q4: \u6211\u60f3\u540c\u6b65\u5206\u5e93\u5206\u8868\uff0c\u5e94\u8be5\u5982\u4f55\u914d\u7f6e\uff1f",id:"q4-\u6211\u60f3\u540c\u6b65\u5206\u5e93\u5206\u8868\u5e94\u8be5\u5982\u4f55\u914d\u7f6e",level:2},{value:"Q5: \u6211\u60f3\u8df3\u8fc7\u5b58\u91cf\u8bfb\u53d6\u9636\u6bb5\uff0c\u53ea\u8bfb\u53d6 binlog \u6570\u636e\uff0c\u600e\u4e48\u914d\u7f6e\uff1f",id:"q5-\u6211\u60f3\u8df3\u8fc7\u5b58\u91cf\u8bfb\u53d6\u9636\u6bb5\u53ea\u8bfb\u53d6-binlog-\u6570\u636e\u600e\u4e48\u914d\u7f6e",level:2},{value:"Q6: \u6211\u60f3\u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u7684 DDL\u4e8b\u4ef6\uff0c\u600e\u4e48\u529e\uff0c\u6709demo\u5417\uff1f",id:"q6-\u6211\u60f3\u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u7684-ddl\u4e8b\u4ef6\u600e\u4e48\u529e\u6709demo\u5417",level:2},{value:"Q7: MySQL \u6574\u5e93\u540c\u6b65\u600e\u4e48\u505a, Flink CDC \u652f\u6301\u5417\uff1f",id:"q7-mysql-\u6574\u5e93\u540c\u6b65\u600e\u4e48\u505a-flink-cdc-\u652f\u6301\u5417",level:2},{value:"Q8: \u540c\u4e00\u4e2a\u5b9e\u4f8b\u4e0b\uff0c\u67d0\u4e2a\u5e93\u7684\u8868\u65e0\u6cd5\u540c\u6b65\u589e\u91cf\u6570\u636e\uff0c\u5176\u4ed6\u5e93\u90fd\u53ef\u4ee5\uff0c\u8fd9\u662f\u4e3a\u5565\uff1f",id:"q8-\u540c\u4e00\u4e2a\u5b9e\u4f8b\u4e0b\u67d0\u4e2a\u5e93\u7684\u8868\u65e0\u6cd5\u540c\u6b65\u589e\u91cf\u6570\u636e\u5176\u4ed6\u5e93\u90fd\u53ef\u4ee5\u8fd9\u662f\u4e3a\u5565",level:2},{value:"Q9: \u4f5c\u4e1a\u62a5\u9519 The connector is trying to read binlog starting at GTIDs xxx and binlog file &#39;binlog.000064&#39;, pos=89887992, skipping 4 events plus 1 rows, but this is no longer available on the server. Reconfigure the connector to use a snapshot when needed\uff0c\u600e\u4e48\u529e\u5462\uff1f",id:"q9-\u4f5c\u4e1a\u62a5\u9519-the-connector-is-trying-to-read-binlog-starting-at-gtids-xxx-and-binlog-file-binlog000064-pos89887992-skipping-4-events-plus-1-rows-but-this-is-no-longer-available-on-the-server-reconfigure-the-connector-to-use-a-snapshot-when-needed\u600e\u4e48\u529e\u5462",level:2},{value:"Q10: \u4f5c\u4e1a\u62a5\u9519 ConnectException: A slave with the same server_uuid/server_id as this slave has connected to the master\uff0c\u600e\u4e48\u529e\u5462\uff1f",id:"q10-\u4f5c\u4e1a\u62a5\u9519-connectexception-a-slave-with-the-same-server_uuidserver_id-as-this-slave-has-connected-to-the-master\u600e\u4e48\u529e\u5462",level:2},{value:"Q11: \u4f5c\u4e1a\u62a5\u9519 ConnectException: Received DML \u2018\u2026\u2019 for processing, binlog probably contains events generated with statement or mixed based replication format\uff0c\u600e\u4e48\u529e\u5462\uff1f",id:"q11-\u4f5c\u4e1a\u62a5\u9519-connectexception-received-dml--for-processing-binlog-probably-contains-events-generated-with-statement-or-mixed-based-replication-format\u600e\u4e48\u529e\u5462",level:2},{value:"Q12: \u4f5c\u4e1a\u62a5\u9519 Mysql8.0 Public Key Retrieval is not allowed\uff0c \u600e\u4e48\u529e\u5462 ?",id:"q12-\u4f5c\u4e1a\u62a5\u9519-mysql80-public-key-retrieval-is-not-allowed-\u600e\u4e48\u529e\u5462-",level:2},{value:"Q13: \u4f5c\u4e1a\u62a5\u9519 EventDataDeserializationException: Failed to deserialize data of EventHeaderV4 .... Caused by: java.net.SocketException: Connection reset\uff0c \u600e\u4e48\u529e\u5462 ?",id:"q13-\u4f5c\u4e1a\u62a5\u9519-eventdatadeserializationexception-failed-to-deserialize-data-of-eventheaderv4--caused-by-javanetsocketexception-connection-reset-\u600e\u4e48\u529e\u5462-",level:2},{value:"Q14: \u4f5c\u4e1a\u62a5\u9519 The slave is connecting using CHANGE MASTER TO MASTER_AUTO_POSITION = 1, but the master has purged binary logs containing GTIDs that the slave requires. \u600e\u4e48\u529e\u5462 ?",id:"q14-\u4f5c\u4e1a\u62a5\u9519-the-slave-is-connecting-using-change-master-to-master_auto_position--1-but-the-master-has-purged-binary-logs-containing-gtids-that-the-slave-requires-\u600e\u4e48\u529e\u5462-",level:2},{value:"Q15: \u5728 DataStream API\u4e2d\u6784\u5efaMySQL CDC\u6e90\u65f6\u5982\u4f55\u914d\u7f6etableList\u9009\u9879\uff1f",id:"q15-\u5728-datastream-api\u4e2d\u6784\u5efamysql-cdc\u6e90\u65f6\u5982\u4f55\u914d\u7f6etablelist\u9009\u9879",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mysql-cdc-faq-\u53c2\u8003-\u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406"},"MySQL CDC FAQ \u53c2\u8003 \u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ververica/flink-cdc-connectors/wiki/FAQ(ZH)"},"https://github.com/ververica/flink-cdc-connectors/wiki/FAQ(ZH)")),(0,i.kt)("h2",{id:"q1-\u4f7f\u7528cdc-2x\u7248\u672c\u53ea\u80fd\u8bfb\u53d6\u5168\u91cf\u6570\u636e\u65e0\u6cd5\u8bfb\u53d6\u589e\u91cfbinlog-\u6570\u636e\u600e\u4e48\u56de\u4e8b"},"Q1: \u4f7f\u7528CDC 2.x\u7248\u672c\uff0c\u53ea\u80fd\u8bfb\u53d6\u5168\u91cf\u6570\u636e\uff0c\u65e0\u6cd5\u8bfb\u53d6\u589e\u91cf\uff08binlog\uff09 \u6570\u636e\uff0c\u600e\u4e48\u56de\u4e8b\uff1f"),(0,i.kt)("p",null,"CDC 2.0 \u652f\u6301\u4e86\u65e0\u9501\u7b97\u6cd5\uff0c\u652f\u6301\u5e76\u53d1\u8bfb\u53d6\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5168\u91cf\u6570\u636e + \u589e\u91cf\u6570\u636e\u7684\u987a\u5e8f\u6027\uff0c\u4f9d\u8d56Flink \u7684 checkpoint\u673a\u5236\uff0c\u6240\u4ee5\u4f5c\u4e1a\u9700\u8981\u914d\u7f6e checkpoint\u3002 SQL \u4f5c\u4e1a\u4e2d\u914d\u7f6e\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Flink SQL> SET 'execution.checkpointing.interval' = '3s';    \n")),(0,i.kt)("p",null,"DataStream \u4f5c\u4e1a\u914d\u7f6e\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\nenv.enableCheckpointing(3000);  \n")),(0,i.kt)("h2",{id:"q2-\u4f7f\u7528-mysql-cdc\u589e\u91cf\u9636\u6bb5\u8bfb\u53d6\u51fa\u6765\u7684-timestamp-\u5b57\u6bb5\u65f6\u533a\u76f8\u5dee8\u5c0f\u65f6\u600e\u4e48\u56de\u4e8b\u5462"},"Q2: \u4f7f\u7528 MySQL CDC\uff0c\u589e\u91cf\u9636\u6bb5\u8bfb\u53d6\u51fa\u6765\u7684 timestamp \u5b57\u6bb5\u65f6\u533a\u76f8\u5dee8\u5c0f\u65f6\uff0c\u600e\u4e48\u56de\u4e8b\u5462\uff1f"),(0,i.kt)("p",null,"\u5728\u89e3\u6790binlog\u6570\u636e\u4e2d\u7684timestamp\u5b57\u6bb5\u65f6\uff0ccdc \u4f1a\u4f7f\u7528\u5230\u4f5c\u4e1a\u91cc\u914d\u7f6e\u7684server-time-zone\u4fe1\u606f\uff0c\u4e5f\u5c31\u662fMySQL\u670d\u52a1\u5668\u7684\u65f6\u533a\uff0c\u5982\u679c\u8fd9\u4e2a\u65f6\u533a\u6ca1\u6709\u548c\u4f60\u7684MySQL\u670d\u52a1\u5668\u65f6\u533a\u4e00\u81f4\uff0c\u5c31\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u662f\u5728DataStream\u4f5c\u4e1a\u4e2d\u81ea\u5b9a\u4e49\u5217\u5316\u5668\u5982 MyDeserializer implements DebeziumDeserializationSchema, \u81ea\u5b9a\u4e49\u7684\u5e8f\u5217\u5316\u5668\u5728\u89e3\u6790 timestamp \u7c7b\u578b\u6570\u636e\u65f6\uff0c\u9700\u8981\u53c2\u8003\u4e0b RowDataDebeziumDeserializeSchema \u4e2d\u5bf9 timestamp \u7c7b\u578b\u7684\u89e3\u6790\uff0c\u7528\u65f6\u7ed9\u5b9a\u7684\u65f6\u533a\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private TimestampData convertToTimestamp(Object dbzObj, Schema schema) {\n        if (dbzObj instanceof Long) {\n            switch (schema.name()) {\n                case Timestamp.SCHEMA_NAME:\n                    return TimestampData.fromEpochMillis((Long) dbzObj);\n                case MicroTimestamp.SCHEMA_NAME:\n                    long micro = (long) dbzObj;\n                    return TimestampData.fromEpochMillis(micro / 1000, (int) (micro % 1000 * 1000));\n                case NanoTimestamp.SCHEMA_NAME:\n                    long nano = (long) dbzObj;\n                    return TimestampData.fromEpochMillis(nano / 1000_000, (int) (nano % 1000_000));\n            }\n        }\n        LocalDateTime localDateTime = TemporalConversions.toLocalDateTime(dbzObj, serverTimeZone);\n        return TimestampData.fromLocalDateTime(localDateTime);\n    }\n")),(0,i.kt)("h2",{id:"q3-mysql-cdc\u652f\u6301\u76d1\u542c\u4ece\u5e93\u5417\u4ece\u5e93\u9700\u8981\u5982\u4f55\u914d\u7f6e"},"Q3: mysql cdc\u652f\u6301\u76d1\u542c\u4ece\u5e93\u5417\uff1f\u4ece\u5e93\u9700\u8981\u5982\u4f55\u914d\u7f6e\uff1f"),(0,i.kt)("p",null," \u652f\u6301\u7684\uff0c\u4ece\u5e93\u9700\u8981\u914d\u7f6e log-slave-updates = 1 \u4f7f\u4ece\u5b9e\u4f8b\u4e5f\u80fd\u5c06\u4ece\u4e3b\u5b9e\u4f8b\u540c\u6b65\u7684\u6570\u636e\u5199\u5165\u4ece\u5e93\u7684 binlog \u6587\u4ef6\u4e2d\uff0c\u5982\u679c\u4e3b\u5e93\u5f00\u542f\u4e86gtid mode\uff0c\u4ece\u5e93\u4e5f\u9700\u8981\u5f00\u542f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"log-slave-updates = 1\ngtid_mode = on \nenforce_gtid_consistency = on \n")),(0,i.kt)("h2",{id:"q4-\u6211\u60f3\u540c\u6b65\u5206\u5e93\u5206\u8868\u5e94\u8be5\u5982\u4f55\u914d\u7f6e"},"Q4: \u6211\u60f3\u540c\u6b65\u5206\u5e93\u5206\u8868\uff0c\u5e94\u8be5\u5982\u4f55\u914d\u7f6e\uff1f"),(0,i.kt)("p",null,"\u901a\u8fc7 mysql cdc \u8868\u7684with\u53c2\u6570\u4e2d\uff0c\u8868\u540d\u548c\u5e93\u540d\u5747\u652f\u6301\u6b63\u5219\u914d\u7f6e\uff0c\u6bd4\u5982 'table-name' ='user_.' \u53ef\u4ee5\u5339\u914d\u8868\u540d user_1, user_2,user_a\u8868\uff0c\u6ce8\u610f\u6b63\u5219\u5339\u914d\u4efb\u610f\u5b57\u7b26\u662f'.' \u800c\u4e0d\u662f '*', \u5176\u4e2d\u70b9\u53f7\u8868\u793a\u4efb\u610f\u5b57\u7b26\uff0c\u661f\u53f7\u8868\u793a0\u4e2a\u6216\u591a\u4e2a\uff0cdatabase-name\u4e5f\u5982\u6b64\u3002"),(0,i.kt)("h2",{id:"q5-\u6211\u60f3\u8df3\u8fc7\u5b58\u91cf\u8bfb\u53d6\u9636\u6bb5\u53ea\u8bfb\u53d6-binlog-\u6570\u636e\u600e\u4e48\u914d\u7f6e"},"Q5: \u6211\u60f3\u8df3\u8fc7\u5b58\u91cf\u8bfb\u53d6\u9636\u6bb5\uff0c\u53ea\u8bfb\u53d6 binlog \u6570\u636e\uff0c\u600e\u4e48\u914d\u7f6e\uff1f"),(0,i.kt)("p",null,"\u5728 mysql cdc \u8868\u7684 with \u53c2\u6570\u4e2d\u6307\u5b9a 'scan.startup.mode' = 'latest-offset' \u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"q6-\u6211\u60f3\u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u7684-ddl\u4e8b\u4ef6\u600e\u4e48\u529e\u6709demo\u5417"},"Q6: \u6211\u60f3\u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u7684 DDL\u4e8b\u4ef6\uff0c\u600e\u4e48\u529e\uff0c\u6709demo\u5417\uff1f"),(0,i.kt)("p",null,"CDC 2.1 \u7248\u672c\u63d0\u4f9b\u4e86 DataStream API\uff1a MysqlSource\uff0c \u7528\u6237\u53ef\u4ee5\u914d\u7f6e includeSchemaChanges \u8868\u793a\u662f\u5426\u9700\u8981DDL \u4e8b\u4ef6\uff0c\u83b7\u53d6\u5230 DDL \u4e8b\u4ef6\u540e\u81ea\u5df1\u5199\u4ee3\u7801\u5904\u7406\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' public void consumingAllEvents() throws Exception {\n        inventoryDatabase.createAndInitialize();\n        MySqlSource<String> mySqlSource =\n                MySqlSource.<String>builder()\n                        .hostname(MYSQL_CONTAINER.getHost())\n                        .port(MYSQL_CONTAINER.getDatabasePort())\n                        .databaseList(inventoryDatabase.getDatabaseName())\n                        .tableList(inventoryDatabase.getDatabaseName() + ".products")\n                        .username(inventoryDatabase.getUsername())\n                        .password(inventoryDatabase.getPassword())\n                        .serverId("5401-5404")\n                        .deserializer(new JsonDebeziumDeserializationSchema())\n                        .includeSchemaChanges(true) // \u8fd9\u91cc\u914d\u7f6e\uff0c\u8f93\u51faDDL\u4e8b\u4ef6\n                        .build();\n                ... // \u5176\u4ed6\u5904\u7406\u903b\u8f91                        \n    }\n')),(0,i.kt)("h2",{id:"q7-mysql-\u6574\u5e93\u540c\u6b65\u600e\u4e48\u505a-flink-cdc-\u652f\u6301\u5417"},"Q7: MySQL \u6574\u5e93\u540c\u6b65\u600e\u4e48\u505a, Flink CDC \u652f\u6301\u5417\uff1f"),(0,i.kt)("p",null,"Flink CDC \u652f\u6301\u7684\uff0cQ6 \u4e2d \u63d0\u4f9b\u7684 DataStream API \u5df2\u7ecf\u53ef\u4ee5\u8ba9\u7528\u6237\u83b7\u53d6 DDL \u53d8\u66f4\u4e8b\u4ef6\u548c\u6570\u636e\u53d8\u66f4\u4e8b\u4ef6\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u4e0b\u6e38\u5b58\u50a8\u8fdb\u884c DataStream \u4f5c\u4e1a\u5f00\u53d1\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h2",{parentName:"li",id:"note"},"note:"),(0,i.kt)("p",{parentName:"li"},"\u5728 FFA2021 \u5927\u4f1a\u4e0a\u4e91\u90aa\u8001\u5e08\u5c55\u793a\u4e86\u56e2\u961f\u89e3\u51b3 schema \u53d8\u66f4\u7b49\u95ee\u9898\uff0c\u672a\u6765\u6709\u8ba1\u5212\u5f00\u6e90\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/special/ffa2021/live?spm=a2c6h.12873639.0.0.617e57999nfFsw#"},"https://developer.aliyun.com/special/ffa2021/live?spm=a2c6h.12873639.0.0.617e57999nfFsw#"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1tT4y1m7zG?p=2"},"https://www.bilibili.com/video/BV1tT4y1m7zG?p=2")))),(0,i.kt)("h2",{id:"q8-\u540c\u4e00\u4e2a\u5b9e\u4f8b\u4e0b\u67d0\u4e2a\u5e93\u7684\u8868\u65e0\u6cd5\u540c\u6b65\u589e\u91cf\u6570\u636e\u5176\u4ed6\u5e93\u90fd\u53ef\u4ee5\u8fd9\u662f\u4e3a\u5565"},"Q8: \u540c\u4e00\u4e2a\u5b9e\u4f8b\u4e0b\uff0c\u67d0\u4e2a\u5e93\u7684\u8868\u65e0\u6cd5\u540c\u6b65\u589e\u91cf\u6570\u636e\uff0c\u5176\u4ed6\u5e93\u90fd\u53ef\u4ee5\uff0c\u8fd9\u662f\u4e3a\u5565\uff1f"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u662f\u56e0\u4e3a mysql \u670d\u52a1\u5668 \u53ef\u4ee5\u914d\u7f6e binlog \u8fc7\u6ee4\u5668\uff0c\u5ffd\u7565\u4e86\u67d0\u4e9b\u5e93\u7684 binlog\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 show master status \u547d\u4ee4\u67e5\u770b Binlog_Ignore_DB \u548c Binlog_Do_DB\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> show master status;\n+------------------+----------+--------------+------------------+----------------------+\n| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set    |\n+------------------+----------+--------------+------------------+----------------------+\n| mysql-bin.000006 |     4594 |              |                  | xxx:1-15             |\n+------------------+----------+--------------+------------------+----------------------+\n")),(0,i.kt)("h2",{id:"q9-\u4f5c\u4e1a\u62a5\u9519-the-connector-is-trying-to-read-binlog-starting-at-gtids-xxx-and-binlog-file-binlog000064-pos89887992-skipping-4-events-plus-1-rows-but-this-is-no-longer-available-on-the-server-reconfigure-the-connector-to-use-a-snapshot-when-needed\u600e\u4e48\u529e\u5462"},"Q9: \u4f5c\u4e1a\u62a5\u9519 The connector is trying to read binlog starting at GTIDs xxx and binlog file 'binlog.000064', pos=89887992, skipping 4 events plus 1 rows, but this is no longer available on the server. Reconfigure the connector to use a snapshot when needed\uff0c\u600e\u4e48\u529e\u5462\uff1f"),(0,i.kt)("p",null,"\u51fa\u73b0\u8fd9\u79cd\u9519\u8bef\u662f \u4f5c\u4e1a\u6b63\u5728\u8bfb\u53d6\u7684binlog\u6587\u4ef6\u5728 MySQL \u670d\u52a1\u5668\u5df2\u7ecf\u88ab\u6e05\u7406\u6389\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e00\u822c\u662f MySQL \u670d\u52a1\u5668\u4e0a\u4fdd\u7559\u7684 binlog \u6587\u4ef6\u8fc7\u671f\u65f6\u95f4\u592a\u77ed\uff0c\u53ef\u4ee5\u5c06\u8be5\u503c\u8bbe\u7f6e\u5927\u4e00\u70b9\uff0c\u6bd4\u59827\u5929\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> show variables like 'expire_logs_days';\nmysql> set global expire_logs_days=7;\n")),(0,i.kt)("p",null,"\u8fd8\u6709\u79cd\u60c5\u51b5\u662f flink cdc \u4f5c\u4e1a\u6d88\u8d39binlog \u592a\u6162\uff0c\u8fd9\u79cd\u4e00\u822c\u5206\u914d\u8db3\u591f\u7684\u8d44\u6e90\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"q10-\u4f5c\u4e1a\u62a5\u9519-connectexception-a-slave-with-the-same-server_uuidserver_id-as-this-slave-has-connected-to-the-master\u600e\u4e48\u529e\u5462"},"Q10: \u4f5c\u4e1a\u62a5\u9519 ConnectException: A slave with the same server_uuid/server_id as this slave has connected to the master\uff0c\u600e\u4e48\u529e\u5462\uff1f"),(0,i.kt)("p",null,"\u51fa\u73b0\u8fd9\u79cd\u9519\u8bef\u662f \u4f5c\u4e1a\u91cc\u4f7f\u7528\u7684 server id \u548c\u5176\u4ed6\u4f5c\u4e1a\u6216\u5176\u4ed6\u540c\u6b65\u5de5\u5177\u4f7f\u7528\u7684server id \u51b2\u7a81\u4e86\uff0cserver id \u9700\u8981\u5168\u5c40\u552f\u4e00\uff0cserver id \u662f\u4e00\u4e2aint\u7c7b\u578b\u6574\u6570\u3002 \u5728 CDC 2.x \u7248\u672c\u4e2d\uff0csource \u7684\u6bcf\u4e2a\u5e76\u53d1\u90fd\u9700\u8981\u4e00\u4e2aserver id\uff0c\u5efa\u8bae\u5408\u7406\u89c4\u5212\u597dserver id\uff0c\u6bd4\u5982\u4f5c\u4e1a\u7684 source \u8bbe\u7f6e\u6210\u4e86\u56db\u4e2a\u5e76\u53d1\uff0c\u53ef\u4ee5\u914d\u7f6e 'server-id' = '5001-5004', \u8fd9\u6837\u6bcf\u4e2a source task \u5c31\u4e0d\u4f1a\u51b2\u7a81\u4e86\u3002"),(0,i.kt)("h2",{id:"q11-\u4f5c\u4e1a\u62a5\u9519-connectexception-received-dml--for-processing-binlog-probably-contains-events-generated-with-statement-or-mixed-based-replication-format\u600e\u4e48\u529e\u5462"},"Q11: \u4f5c\u4e1a\u62a5\u9519 ConnectException: Received DML \u2018\u2026\u2019 for processing, binlog probably contains events generated with statement or mixed based replication format\uff0c\u600e\u4e48\u529e\u5462\uff1f"),(0,i.kt)("p",null,"\u51fa\u73b0\u8fd9\u79cd\u9519\u8bef\u662f MySQL \u670d\u52a1\u5668\u914d\u7f6e\u4e0d\u5bf9\uff0c\u9700\u8981\u68c0\u67e5\u4e0b binlog_format \u662f\u4e0d\u662f ROW? \u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> show variables like '%binlog_format%'; \n")),(0,i.kt)("h2",{id:"q12-\u4f5c\u4e1a\u62a5\u9519-mysql80-public-key-retrieval-is-not-allowed-\u600e\u4e48\u529e\u5462-"},"Q12: \u4f5c\u4e1a\u62a5\u9519 Mysql8.0 Public Key Retrieval is not allowed\uff0c \u600e\u4e48\u529e\u5462 ?"),(0,i.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u7528\u6237\u914d\u7f6e\u7684 MySQL \u7528\u6237 \u4f7f\u7528\u7684\u662f sha256 \u5bc6\u7801\u8ba4\u8bc1\uff0c\u9700\u8981 TLS \u7b49\u534f\u8bae\u4f20\u8f93\u5bc6\u7801\u3002\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u5141\u8bb8 MySQL\u7528\u6237 \u652f\u6301\u539f\u59cb\u5bc6\u7801\u65b9\u5f0f\u8bbf\u95ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';\nmysql> FLUSH PRIVILEGES; \n")),(0,i.kt)("h2",{id:"q13-\u4f5c\u4e1a\u62a5\u9519-eventdatadeserializationexception-failed-to-deserialize-data-of-eventheaderv4--caused-by-javanetsocketexception-connection-reset-\u600e\u4e48\u529e\u5462-"},"Q13: \u4f5c\u4e1a\u62a5\u9519 EventDataDeserializationException: Failed to deserialize data of EventHeaderV4 .... Caused by: java.net.SocketException: Connection reset\uff0c \u600e\u4e48\u529e\u5462 ?"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u4e00\u822c\u662f\u7f51\u7edc\u539f\u56e0\u5f15\u8d77\uff0c\u9996\u5148\u6392\u67e5flink \u96c6\u7fa4 \u5230 \u6570\u636e\u5e93\u4e4b\u95f4\u7684\u7f51\u7edc\u60c5\u51b5\uff0c\u5176\u6b21\u53ef\u4ee5\u8c03\u5927 MySQL \u670d\u52a1\u5668\u7684\u7f51\u7edc\u53c2\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> set global slave_net_timeout = 120; \nmysql> set global thread_pool_idle_timeout = 120;\n")),(0,i.kt)("h2",{id:"q14-\u4f5c\u4e1a\u62a5\u9519-the-slave-is-connecting-using-change-master-to-master_auto_position--1-but-the-master-has-purged-binary-logs-containing-gtids-that-the-slave-requires-\u600e\u4e48\u529e\u5462-"},"Q14: \u4f5c\u4e1a\u62a5\u9519 The slave is connecting using CHANGE MASTER TO MASTER_AUTO_POSITION = 1, but the master has purged binary logs containing GTIDs that the slave requires. \u600e\u4e48\u529e\u5462 ?"),(0,i.kt)("p",null,"\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u7684\u4f5c\u4e1a\u5168\u91cf\u9636\u6bb5\u8bfb\u53d6\u592a\u6162\uff0c\u5728\u5168\u91cf\u9636\u6bb5\u8bfb\u5b8c\u540e\uff0c\u4e4b\u524d\u8bb0\u5f55\u7684\u5168\u91cf\u9636\u6bb5\u5f00\u59cb\u65f6\u7684 gtid \u4f4d\u70b9\u5df2\u7ecf\u88ab mysql \u6e05\u7406\u6389\u4e86\u3002\u8fd9\u79cd\u53ef\u4ee5\u589e\u5927 mysql \u670d\u52a1\u5668\u4e0a binlog \u6587\u4ef6\u7684\u4fdd\u5b58\u65f6\u95f4\uff0c\u4e5f\u53ef\u4ee5\u8c03\u5927 source \u7684\u5e76\u53d1\uff0c\u8ba9\u5168\u91cf\u9636\u6bb5\u8bfb\u53d6\u66f4\u5feb\u3002"),(0,i.kt)("h2",{id:"q15-\u5728-datastream-api\u4e2d\u6784\u5efamysql-cdc\u6e90\u65f6\u5982\u4f55\u914d\u7f6etablelist\u9009\u9879"},"Q15: \u5728 DataStream API\u4e2d\u6784\u5efaMySQL CDC\u6e90\u65f6\u5982\u4f55\u914d\u7f6etableList\u9009\u9879\uff1f"),(0,i.kt)("p",null,"tableList\u9009\u9879\u8981\u6c42\u8868\u540d\u4f7f\u7528\u6570\u636e\u5e93\u540d\uff0c\u800c\u4e0d\u662fDataStream API\u4e2d\u7684\u8868\u540d\u3002\u5bf9\u4e8eMySQL CDC\u6e90\u4ee3\u7801\uff0ctableList\u9009\u9879\u503c\u5e94\u8be5\u7c7b\u4f3c\u4e8e\u2018my_db.my_table\u2019\u3002"))}p.isMDXComponent=!0}}]);