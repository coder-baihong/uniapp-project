(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/intersection-observer/intersection-observer"],{"144e":function(e,t,n){},"3cea":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,r={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var t=this;n=e.createIntersectionObserver(this),n.relativeTo(".scroll-view").observe(".ball",function(e){e.intersectionRatio>0&&!t.appear?t.appear=!0:!e.intersectionRatio>0&&t.appear&&(t.appear=!1)})},onUnload:function(){n&&n.disconnect()}};t.default=r}).call(this,n("6e42")["default"])},"7bf8":function(e,t,n){"use strict";n.r(t);var r=n("3cea"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a},8850:function(e,t,n){"use strict";(function(e){n("e826"),n("921b");r(n("66fd"));var t=r(n("a7ca"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a7ca:function(e,t,n){"use strict";n.r(t);var r=n("e4d2"),a=n("7bf8");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("d968");var o=n("2877"),c=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},d968:function(e,t,n){"use strict";var r=n("144e"),a=n.n(r);a.a},e4d2:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})}},[["8850","common/runtime","common/vendor"]]]);