(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/action-sheet/action-sheet"],{"87be":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"action-sheet"}},methods:{actionSheetTap:function(){t.showActionSheet({title:"标题",itemList:["item1","item2","item3","item4"],success:function(e){console.log(e.tapIndex),t.showToast({title:"点击了第"+e.tapIndex+"个选项",icon:"none"})}})}}};e.default=n}).call(this,n("543d")["default"])},"8fe5":function(t,e,n){"use strict";n.r(e);var o=n("87be"),u=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=u.a},"93d4":function(t,e,n){"use strict";n.r(e);var o=n("fb9f"),u=n("8fe5");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);var c=n("2877"),a=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"9cf1":function(t,e,n){"use strict";(function(t){n("e826"),n("921b");o(n("66fd"));var e=o(n("93d4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fb9f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})}},[["9cf1","common/runtime","common/vendor"]]]);