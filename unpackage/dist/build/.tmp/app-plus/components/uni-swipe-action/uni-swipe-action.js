(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-swipe-action/uni-swipe-action"],{3966:function(t,i,n){"use strict";n.r(i);var s=n("8c61"),e=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(i,t,function(){return s[t]})}(o);i["default"]=e.a},5943:function(t,i,n){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},e=[];n.d(i,"a",function(){return s}),n.d(i,"b",function(){return e})},"6b378":function(t,i,n){"use strict";var s=n("83d4"),e=n.n(s);e.a},"83d4":function(t,i,n){},"8c61":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniSwipeAction",props:{isDrag:{type:Boolean,default:!1},isOpened:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},options:{type:Array,default:function(){return[]}}},data:function(){var t=this.__call_hook?"uni_swipe_action":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,isShowBtn:!1,transformX:"translateX(0px)"}},watch:{isOpened:function(t,i){this.isShowBtn=!!t,this.endMove()}},created:function(){this.direction="",this.startX=0,this.startY=0,this.btnGroupWidth=0,this.isMoving=!1,this.startTime=0},onReady:function(){this.getSize()},methods:{getSize:function(){var i=this;t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){i.btnGroupWidth=t[0].width}),this.isOpened&&(this.isShowBtn=!0,this.endMove())},bindClickBtn:function(t,i){this.$emit("click",{text:t.text,style:t.style,index:i})},bindClickCont:function(t){this.isShowBtn&&this.autoClose&&(this.isShowBtn=!1,this.endMove())},touchStart:function(t){this.startTime=t.timeStamp,this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY},touchMove:function(t){if("Y"!==this.direction&&!this.disabled){var i=t.touches[0].pageY-this.startY,n=t.touches[0].pageX-this.startX;if(!this.isMoving&&Math.abs(i)>Math.abs(n))this.direction="Y";else if(this.direction=n>0?"right":"left",this.isMoving=!0,this.isDrag){var s=this.isShowBtn?-this.btnGroupWidth:0;if(s+n>=0)return void(this.transformX="translateX(0px)");if(-s-n>=this.btnGroupWidth)return void(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"));s-n>0?this.transformX="translateX(".concat(n,"px)"):n>=-this.btnGroupWidth&&(this.transformX="translateX(".concat(n-this.btnGroupWidth,"px)"))}}},touchEnd:function(t){if(this.isMoving=!1,"right"===this.direction||"left"===this.direction){if(this.isDrag){var i=Math.abs(Number(this.transformX.slice(11,-3))),n=t.timeStamp-this.startTime;this.isShowBtn=i>=this.btnGroupWidth/2,n>50&&n<300&&i>20&&("right"===this.direction?this.isShowBtn=!1:this.isShowBtn=!0)}else"right"===this.direction?this.isShowBtn=!1:this.isShowBtn=!0;this.endMove()}else this.direction=""},endMove:function(){"Y"===this.direction||this.disabled?this.direction="":(this.isShowBtn?(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"),this.$emit("opened")):(this.transformX="translateX(0px)",this.$emit("closed")),this.direction="")},close:function(){this.isShowBtn=!1,this.endMove()}}};i.default=n}).call(this,n("6e42")["default"])},bdc0:function(t,i,n){"use strict";n.r(i);var s=n("5943"),e=n("3966");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("6b378");var a=n("2877"),h=Object(a["a"])(e["default"],s["a"],s["b"],!1,null,null,null);i["default"]=h.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-swipe-action/uni-swipe-action-create-component',
    {
        'components/uni-swipe-action/uni-swipe-action-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("bdc0"))
        })
    },
    [['components/uni-swipe-action/uni-swipe-action-create-component']]
]);                
