(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/image/image"],{"158b":function(e,t,n){"use strict";(function(e){n("e826"),n("921b");i(n("66fd"));var t=i(n("773a"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"68fe":function(e,t,n){"use strict";var i=n("9740"),u=n.n(i);u.a},"773a":function(e,t,n){"use strict";n.r(t);var i=n("ba86"),u=n("e802");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("68fe");var r=n("2877"),s=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},9740:function(e,t,n){},a77d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,u,a,r){try{var s=e[a](r),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(i,u)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(i,u){var r=e.apply(t,n);function s(e){a(r,i,u,s,o,"next",e)}function o(e){a(r,i,u,s,o,"throw",e)}s(void 0)})}}var s=[["camera"],["album"],["camera","album"]],o=[["compressed"],["original"],["compressed","original"]],c={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},sizeTypeChange:function(e){this.sizeTypeIndex=e.target.value},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var t=r(i.default.mark(function t(){var n,u=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(n=t.sent,console.log("是否继续?",n),n){t.next=7;break}return t.abrupt("return");case 7:e.chooseImage({sourceType:s[this.sourceTypeIndex],sizeType:o[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){u.imageList=u.imageList.concat(e.tempFilePaths)}});case 8:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),isFullImg:function(){var t=this;return new Promise(function(n){e.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(e){e.confirm?(t.imageList=[],n(!0)):n(!1)},fail:function(){n(!1)}})})},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:this.imageList})}}};t.default=c}).call(this,n("543d")["default"])},ba86:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u})},e802:function(e,t,n){"use strict";n.r(t);var i=n("a77d"),u=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=u.a}},[["158b","common/runtime","common/vendor"]]]);