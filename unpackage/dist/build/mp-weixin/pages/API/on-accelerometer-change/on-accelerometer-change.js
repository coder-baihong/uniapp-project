(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/on-accelerometer-change/on-accelerometer-change"],{"11ba":function(e,t,n){"use strict";(function(e){n("e826"),n("921b");c(n("66fd"));var t=c(n("6167"));function c(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},1727:function(e,t,n){},"1a54":function(e,t,n){"use strict";var c=n("1727"),o=n.n(c);o.a},6167:function(e,t,n){"use strict";n.r(t);var c=n("8524"),o=n("9cf2");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("1a54");var a=n("2877"),r=Object(a["a"])(o["default"],c["a"],c["b"],!1,null,null,null);t["default"]=r.exports},8524:function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o})},"9cf2":function(e,t,n){"use strict";n.r(t);var c=n("e3e2"),o=n.n(c);for(var u in c)"default"!==u&&function(e){n.d(t,e,function(){return c[e]})}(u);t["default"]=o.a},e3e2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"onAccelerometerChange",value:""}},onUnload:function(){e.stopAccelerometer()},methods:{watchAcce:function(){var t=this;e.onAccelerometerChange(function(e){t.value="监听设备的加速度变化:\nX轴："+e.x.toFixed(2)+"\nY轴："+e.y.toFixed(2)+"\nZ轴："+e.z.toFixed(2)})},stopAcce:function(){e.stopAccelerometer()}}};t.default=n}).call(this,n("543d")["default"])}},[["11ba","common/runtime","common/vendor"]]]);