(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/nav-city-dropdown/nav-city-dropdown"],{"3fc3":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},5804:function(e,t,n){"use strict";n.r(t);var i=n("3fc3"),r=n("e9e6");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var a=n("2877"),u=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"5ffc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a7ee"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.e("components/mpvue-picker/mpvuePicker").then(n.bind(null,"a071"))},a={components:{mpvuePicker:o},data:function(){return{title:"nav-city-dropdown",pickerSingleArray:[{label:"中国",value:1},{label:"俄罗斯",value:2},{label:"美国",value:3},{label:"日本",value:4}],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[]}},onReady:function(){this.setStyle(0,"北京市")},methods:{onCancel:function(t){console.log(e(t," at pages\\template\\nav-city-dropdown\\nav-city-dropdown.vue:73"))},showSinglePicker:function(){this.pickerValueArray=i.default,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(t){console.log(e(t.label," at pages\\template\\nav-city-dropdown\\nav-city-dropdown.vue:84")),this.setStyle(0,t.label)},setStyle:function(e,t){var n=getCurrentPages(),i=n[n.length-1];t.length>3&&(t=t.substr(0,3)+"...");var r=i.$getAppWebview(),o=r.getStyle().titleNView;o.buttons[0].text=t,r.setStyle({titleNView:o})}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()},onNavigationBarButtonTap:function(e){0===e.index&&this.showSinglePicker()}};t.default=a}).call(this,n("0de9")["default"])},"8bc0":function(e,t,n){"use strict";(function(e){n("e826"),n("921b");i(n("66fd"));var t=i(n("5804"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e9e6:function(e,t,n){"use strict";n.r(t);var i=n("5ffc"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=r.a}},[["8bc0","common/runtime","common/vendor"]]]);