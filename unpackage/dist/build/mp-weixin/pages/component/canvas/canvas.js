(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/canvas/canvas"],{"2aa9":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=null,i=null,s={data:function(){return{title:"canvas",screenWidth:t.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){n=t.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),i=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(i),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function a(t,a){n.beginPath(0),n.arc(t,a,5,0,2*Math.PI),n.setFillStyle("#1aad19"),n.setStrokeStyle("rgba(1,1,1,0)"),n.fill(),n.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),a(t.x,this.canvasWidth/2),a(this.canvasWidth/2,t.y),a(this.canvasWidth-t.x,this.canvasWidth/2),a(this.canvasWidth/2,this.canvasWidth-t.y),a(t.x,t.y),a(this.canvasWidth-t.x,this.canvasWidth-t.y),a(t.x,this.canvasWidth-t.y),a(this.canvasWidth-t.x,t.y),n.draw()}}};a.default=s}).call(this,n("543d")["default"])},"7e60":function(t,a,n){"use strict";n.r(a);var i=n("2aa9"),s=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);a["default"]=s.a},"90ea":function(t,a,n){},a899:function(t,a,n){"use strict";var i=n("90ea"),s=n.n(i);s.a},abab:function(t,a,n){"use strict";n.r(a);var i=n("bb74"),s=n("7e60");for(var e in s)"default"!==e&&function(t){n.d(a,t,function(){return s[t]})}(e);n("a899");var c=n("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=o.exports},bb74:function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},s=[];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return s})},c7f7:function(t,a,n){"use strict";(function(t){n("e826"),n("921b");i(n("66fd"));var a=i(n("abab"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])}},[["c7f7","common/runtime","common/vendor"]]]);