(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swiper-dot/swiper-dot"],{"193f":function(e,t,n){"use strict";var o=n("e246"),r=n.n(o);r.a},"29df":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"438d":function(e,t,n){"use strict";n.r(t);var o=n("29df"),r=n("59a6");for(var d in r)"default"!==d&&function(e){n.d(t,e,function(){return r[e]})}(d);n("193f");var u=n("2877"),i=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},"59a6":function(e,t,n){"use strict";n.r(t);var o=n("fdbc"),r=n.n(o);for(var d in o)"default"!==d&&function(e){n.d(t,e,function(){return o[e]})}(d);t["default"]=r.a},"9a98":function(e,t,n){"use strict";(function(e){n("e826"),n("921b");o(n("66fd"));var t=o(n("438d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e246:function(e,t,n){},fdbc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"51f2"))},r={components:{uniSwiperDot:o},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(e){this.current=e.detail.current},selectStyle:function(e){this.dotsStyles=this.dotStyle[e],this.styleIndex=e},selectMode:function(e,t){this.mode=e,this.modeIndex=t,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};t.default=r}},[["9a98","common/runtime","common/vendor"]]]);