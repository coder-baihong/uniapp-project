(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/clipboard/clipboard"],{"2c7b":function(t,a,n){"use strict";n.r(a);var e=n("c5da"),o=n("dec0");for(var c in o)"default"!==c&&function(t){n.d(a,t,function(){return o[t]})}(c);var u=n("2877"),l=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,null,null);a["default"]=l.exports},"7f1c":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(t){this.data=t.target.value},getClipboard:function(){t.getClipboardData({success:function(a){console.log(a.data);var n=a.data?"剪贴板内容为:"+a.data:"剪贴板暂无内容";t.showModal({content:n,title:"读取剪贴板",showCancel:!1})},fail:function(){t.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var a=this.data;0===a.length?t.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):t.setClipboardData({data:a,success:function(){},fail:function(){}})}}};a.default=n}).call(this,n("543d")["default"])},8063:function(t,a,n){"use strict";(function(t){n("e826"),n("921b");e(n("66fd"));var a=e(n("2c7b"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])},c5da:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c},o=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o})},dec0:function(t,a,n){"use strict";n.r(a);var e=n("7f1c"),o=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,function(){return e[t]})}(c);a["default"]=o.a}},[["8063","common/runtime","common/vendor"]]]);