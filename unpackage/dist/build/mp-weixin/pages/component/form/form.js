(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form/form"],{"4ac8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"form",pickerHidden:!0,chosen:""}},methods:{pickerConfirm:function(e){this.pickerHidden=!0,this.chosen=e.target.value},pickerCancel:function(e){this.pickerHidden=!0},pickerShow:function(e){this.pickerHidden=!1},formSubmit:function(e){console.log("form发生了submit事件，携带数据为："+JSON.stringify(e.detail.value))},formReset:function(e){console.log("清空数据"),this.chosen=""}}};n.default=i},"5b4e":function(e,n,t){"use strict";t.r(n);var i=t("4ac8"),o=t.n(i);for(var c in i)"default"!==c&&function(e){t.d(n,e,function(){return i[e]})}(c);n["default"]=o.a},"7ed8":function(e,n,t){"use strict";(function(e){t("e826"),t("921b");i(t("66fd"));var n=i(t("e2eb"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"89e1":function(e,n,t){},9785:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o})},c848:function(e,n,t){"use strict";var i=t("89e1"),o=t.n(i);o.a},e2eb:function(e,n,t){"use strict";t.r(n);var i=t("9785"),o=t("5b4e");for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);t("c848");var r=t("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports}},[["7ed8","common/runtime","common/vendor"]]]);