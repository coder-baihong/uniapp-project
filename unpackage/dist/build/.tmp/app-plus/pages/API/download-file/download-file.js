(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/download-file/download-file"],{"0872":function(n,e,t){"use strict";t.r(e);var o=t("830c"),a=t("90fe");for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);t("f50f");var l=t("2877"),u=Object(l["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"38d5":function(n,e,t){},"830c":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},"90fe":function(n,e,t){"use strict";t.r(e);var o=t("dc3a"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e["default"]=a.a},d181:function(n,e,t){"use strict";(function(n){t("e826"),t("921b");o(t("66fd"));var e=o(t("0872"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},dc3a:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){n.showLoading({title:"下载中"});var e=this;n.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(o){console.log(t("downloadFile success, res is",o," at pages\\API\\download-file\\download-file.vue:37")),e.imageSrc=o.tempFilePath,n.hideLoading()},fail:function(n){console.log(t("downloadFile fail, err is:",n," at pages\\API\\download-file\\download-file.vue:42"))}})}}};e.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},f50f:function(n,e,t){"use strict";var o=t("38d5"),a=t.n(o);a.a}},[["d181","common/runtime","common/vendor"]]]);