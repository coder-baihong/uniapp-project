(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/im-chat/im-chat"],{"17c7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"2f14"))},c=function(){return n.e("components/im-chat/messageshow").then(n.bind(null,"b6f9"))},i={data:function(){return{name:"xcecd@qq.com",style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0,messages:[{user:"home",type:"head",content:"你好!"}]}},components:{chatInput:o,messageShow:c},onLoad:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100},methods:{getInputMessage:function(t){this.addMessage("customer",t.content,!1),this.toRobot(t.content)},addMessage:function(t,e,n,o){var c=this;c.messages.push({user:t,content:e,hasSub:n,subcontent:o})},scrollToBottom:function(){var e=this,n=t.createSelectorQuery();n.selectAll(".m-item").boundingClientRect(),n.select("#scrollview").boundingClientRect(),n.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){e.style.mitemHeight=e.style.mitemHeight+t.height+20}),e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight)})},toRobot:function(e){var n=this,o="http://www.tuling123.com/openapi/api";t.request({url:o,data:{key:"acfbca724ea1b5db96d2eef88ce677dc",info:e,userid:"uni-test"},success:function(t){console.log("s",t),n.addMessage("home",t.data.text,!1),n.scrollToBottom(),console.log("request success:"+t.data.text)},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})}})}}};e.default=i}).call(this,n("543d")["default"])},"39bf":function(t,e,n){"use strict";n.r(e);var o=n("7284"),c=n("e6c7");for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);n("3a8c");var s=n("2877"),a=Object(s["a"])(c["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"3a8c":function(t,e,n){"use strict";var o=n("7619"),c=n.n(o);c.a},7284:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c})},7619:function(t,e,n){},e6c7:function(t,e,n){"use strict";n.r(e);var o=n("17c7"),c=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=c.a},f3b1:function(t,e,n){"use strict";(function(t){n("e826"),n("921b");o(n("66fd"));var e=o(n("39bf"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f3b1","common/runtime","common/vendor"]]]);