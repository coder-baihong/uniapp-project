(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/animation/animation"],{4303:function(t,a,n){"use strict";(function(t){n("e826"),n("921b");i(n("66fd"));var a=i(n("5b1c"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])},4766:function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},o=[];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return o})},"4a87":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"createAnimation",animationData:""}},onUnload:function(){this.animationData=""},onLoad:function(){this.animation=t.createAnimation()},methods:{rotate:function(){this.animation.rotate(720*Math.random()-360).step(),this.animationData=this.animation.export()},scale:function(){this.animation.scale(2*Math.random()).step(),this.animationData=this.animation.export()},translate:function(){this.animation.translate(100*Math.random()-50,100*Math.random()-50).step(),this.animationData=this.animation.export()},skew:function(){this.animation.skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},rotateAndScale:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).step(),this.animationData=this.animation.export()},rotateThenScale:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step(),this.animationData=this.animation.export()},all:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).translate(100*Math.random()-50,100*Math.random()-50).skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},allInQueue:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step().translate(100*Math.random()-50,100*Math.random()-50).step().skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},reset:function(){this.animation.rotate(0,0).scale(1).translate(0,0).skew(0,0).step({duration:0}),this.animationData=this.animation.export()}}};a.default=n}).call(this,n("6e42")["default"])},"4e0d":function(t,a,n){},"5b1c":function(t,a,n){"use strict";n.r(a);var i=n("4766"),o=n("ab05");for(var e in o)"default"!==e&&function(t){n.d(a,t,function(){return o[t]})}(e);n("933a");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);a["default"]=s.exports},"933a":function(t,a,n){"use strict";var i=n("4e0d"),o=n.n(i);o.a},ab05:function(t,a,n){"use strict";n.r(a);var i=n("4a87"),o=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);a["default"]=o.a}},[["4303","common/runtime","common/vendor"]]]);