(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/pull-down-refresh/pull-down-refresh"],{"52cc":function(t,a,n){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c},e=[];n.d(a,"a",function(){return o}),n.d(a,"b",function(){return e})},"5feb":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout(function(){t.setDate()},300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var a=this;setTimeout(function(){a.max=0,a.data=[];var n=[];a.max+=10;for(var o=a.max-9;o<a.max+1;o++)n.push(o);a.data=a.data.concat(n),t.stopPullDownRefresh()},300)},setDate:function(){var t=[];this.max+=10;for(var a=this.max-9;a<this.max+1;a++)t.push(a);this.data=this.data.concat(t)}}};a.default=n}).call(this,n("543d")["default"])},"8b00":function(t,a,n){"use strict";(function(t){n("e826"),n("921b");o(n("66fd"));var a=o(n("f802"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])},a6f8:function(t,a,n){"use strict";n.r(a);var o=n("5feb"),e=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(a,t,function(){return o[t]})}(i);a["default"]=e.a},a72d:function(t,a,n){},f225:function(t,a,n){"use strict";var o=n("a72d"),e=n.n(o);e.a},f802:function(t,a,n){"use strict";n.r(a);var o=n("52cc"),e=n("a6f8");for(var i in e)"default"!==i&&function(t){n.d(a,t,function(){return e[t]})}(i);n("f225");var u=n("2877"),r=Object(u["a"])(e["default"],o["a"],o["b"],!1,null,null,null);a["default"]=r.exports}},[["8b00","common/runtime","common/vendor"]]]);