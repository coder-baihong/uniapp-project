!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=48)}([function(t,e){t.exports={}},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,i="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],i=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},o=function(e){return function(){for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(o.success)||t(o.fail)||t(o.complete)?e.apply(void 0,[o].concat(i)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},o,{success:t,fail:n})].concat(i)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=a.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function p(t){t.$processed=!0;var e=a.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,i=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:i}):S({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var o=t.__uniapp_mask,u=a.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,p=t.hide,f=t.close,d=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:o});for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return c.apply(t,n)},t.hide=function(){d();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return p.apply(t,n)},t.close=function(){d();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return f.apply(t,n)}}}function f(t){var e=a.webview.getWebviewById(t);return e&&!e.$processed&&p(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var d=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},_="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?y(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof k&&k(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof x&&x(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof T&&T(t.data.data)});var y=function(t,e){var n=v[t];n?(n(e),n.keepAlive||delete v[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,i,a=e.id,o=e.type,r=e.params;v[a]=(i=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(i.keepAlive=!0),i),d.postMessage({id:a,type:o,params:r},_)};function S(t){d.postMessage(t,_)}var b=function(t){return function(e){m({id:h++,type:t,params:e})}},w=void 0,k=void 0,x=void 0,T=void 0;function D(t){w=t}function C(t){k=t}function I(t){x=t}function N(t){T=t}function P(t){return weex.requireModule(t)}var R=weex.requireModule("dom"),q=weex.requireModule("globalEvent"),B=[];function $(t){"function"==typeof t&&(this.isUniAppReady?t():B.push(t))}q.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&($.isUniAppReady=!0,B.length&&(B.forEach(function(t){return t()}),B=[]))});var O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j=weex.requireModule("stream"),M="GET",A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":O(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},E=weex.requireModule("plusstorage"),V="__TYPE",L=weex.requireModule("clipboard"),U=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function F(t,e,n){return t[e].apply(t,n)}var H=Object.freeze({loadFontFace:function(e){var n=e.family,i=e.source,a=(e.desc,e.success),o=(e.fail,e.complete);R.addRule("fontFace",{fontFamily:n,src:i.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(a)&&a(r),t(o)&&o(r)},ready:$,request:function(e){var n=e.url,i=e.data,a=e.header,o=e.method,r=void 0===o?"GET":o,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,p=e.complete,f=!1,d=!1,g={};if(a)for(var h in a)d||"content-type"!==h.toLowerCase()?g[h]=a[h]:(d=!0,g["Content-Type"]=a[h]);return r===M&&i&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+A(i)),j.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==M?A(i,r,g["Content-Type"]):""},function(e){var n=e.status,i=(e.ok,e.statusText,e.data),a=e.headers,o={};!n||-1===n||f?(o.errMsg="request:fail",t(l)&&l(o)):(o.data=i,o.statusCode=n,o.header=a,t(c)&&c(o)),t(p)&&p(o)}),{abort:function(){f=!0}}},getStorage:function(e){var n=e.key,i=(e.data,e.success),a=e.fail,o=e.complete;E.getItem(n+V,function(e){if("success"===e.result){var r=e.data;E.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(i)&&i({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(a)&&a(e))}else e.errMsg="setStorage:fail",t(a)&&a(e);t(o)&&o(e)})}else e.errMsg="setStorage:fail",t(a)&&a(e),t(o)&&o(e)})},setStorage:function(e){var n=e.key,i=e.data,a=e.success,o=e.fail,r=e.complete,s="String";"object"===(void 0===i?"undefined":O(i))&&(s="Object",i=JSON.stringify(i)),E.setItem(n,i,function(e){"success"===e.result?E.setItem(n+V,s,function(e){"success"===e.result?t(a)&&a({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(o)&&o(e))}):(e.errMsg="setStorage:fail",t(o)&&o(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,i=(e.data,e.success),a=e.fail,o=e.complete;E.removeItem(n,function(e){"success"===e.result?t(i)&&i({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(a)&&a(e)),t(o)&&o(e)}),E.removeItem(n+V)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,i=(e.fail,e.complete);L.getString(function(e){var a={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(a),t(i)&&i(a)})},setClipboardData:function(e){var n=e.data,i=e.success,a=(e.fail,e.complete),o={errMsg:"setClipboardData:ok"};L.setString(n),t(i)&&i(o),t(a)&&a(o)},onSubNVueMessage:u,getSubNVueById:f,getCurrentSubNVue:function(){return f(a.webview.currentWebview().id)},$on:function(){return F(U(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return F(U(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return F(U(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return F(U(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),J={os:{nvue:!0}},W={};return"undefined"!=typeof Proxy?W=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return S;if("requireNativePlugin"===e)return P;if("onNavigationBarButtonTap"===e)return D;if("onNavigationBarSearchInputChanged"===e)return C;if("onNavigationBarSearchInputConfirmed"===e)return I;if("onNavigationBarSearchInputClicked"===e)return N;var n=H[e];return n||(n=b(e)),i(e)?o(n):n}}):(Object.keys(J).forEach(function(t){W[t]=J[t]}),W.postMessage=S,W.requireNativePlugin=P,W.onNavigationBarButtonTap=D,W.onNavigationBarSearchInputChanged=C,W.onNavigationBarSearchInputConfirmed=I,W.onNavigationBarSearchInputClicked=N,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=H[t];e||(e=b(t)),i(t)?W[t]=o(e):W[t]=e})),W};var a=new WeexPlus(weex);e.weexPlus=a;var o=i(weex,a,BroadcastChannel);e.default=o},function(t,e,n){"use strict";function i(t,e,n,i,a,o,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),e.default={appid:""}},function(t,e,n){"use strict";(function(t,e){function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(5).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var n="";if("n"===h()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=p}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,p)}}return n}var d,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var t="";return"wx"!==h()&&"qq"!==h()||(t=e.getAccountInfoSync().miniProgram.appId||""),t},_=function(){return"n"===h()?t.runtime.version:""},y=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},m=0,S=0,b=function(){return m=g(),"n"===h()&&e.setStorageSync("__page__residence__time",g()),m},w=0,k=0,x=function(){var t=(new Date).getTime();return w=t,k=0,t},T=function(){var t=(new Date).getTime();return k=t,t},D=function(t){var e=0;return 0!==w&&(e=k-w),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},C=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},I=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},N=n(6).default,P=n(3).default||n(3),R=e.getSystemInfoSync(),q=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:h(),mpn:v(),ak:P.appid,usv:c,v:_(),ch:y(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===R.platform?"a":"i",brand:R.brand||"",md:R.model,sv:R.system.replace(/(Android|iOS)\s/,""),mpsdk:R.SDKVersion||"",mpv:R.version||"",lang:R.language,pr:R.pixelRatio,ww:R.windowWidth,wh:R.windowHeight,sw:R.screenWidth,sh:R.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(T(),D("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,T();var n=D();x();var i=C(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=C(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=N&&N.pages[i]&&N.pages[i].titleNView&&N.pages[i].titleNView.titleText||N&&N.pages[i]&&N.pages[i].navigationBarTitleText||"",this.__licationShow)return x(),this.__licationShow=!1,void(this._lastPageRoute=n);if(T(),this._lastPageRoute=n,D("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}x()}},{key:"_pageHide",value:function(){if(!this.__licationHide){T();var t=D("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,i,a=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+a||"",this.statData.t=g(),this.statData.sc=function(t){var n=h(),i="";return t||("wx"===n&&(i=e.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),i=0,n?i=n:(i=g(),e.setStorageSync("First__Visit__Time",i),e.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,o=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;P.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var i=this,a=g(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var r=this._reportingRequestData;if("n"===h()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",r),S=g(),"n"===h()&&(m=e.getStorageSync("__page__residence__time")),!(S-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),b();var u=[],l=[],p=[],f=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?p.push(n):l.push(n)})};for(var d in s)f(d);u.push.apply(u,l.concat(p));var v={usv:c,t:a,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){i._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var a in e)n[e[a]]=t[e[a]],i+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),B=function(t){function n(){var t;return r(this,n),(t=i(this,a(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,q),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,b(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,I(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,I(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),$=!1,O={onLaunch:function(t){B.report(t,this)},onReady:function(){B.ready(this)},onLoad:function(t){if(B.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return B.interceptShare(!1),e.call(this,t)}}},onShow:function(){$=!1,B.show(this)},onHide:function(){$=!0,B.hide(this)},onUnload:function(){$?$=!1:B.hide(this)},onError:function(t){B.error(t)}};((d=n(7)).default||d).mixin(O),e.report=function(t,e){B.sendEvent(t,e)}}).call(this,n(1).weexPlus,n(1).default)},function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},function(t,e){t.exports=Vue},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a},,,function(t,e,n){"use strict";var i=n(35),a=n(24),o=n(2);var r=Object(o.a)(a.default,i.a,i.b,!1,null,null,"3920f714");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(42).default,this.options.style):Object.assign(this.options.style,n(42).default)}).call(r),e.default=r.exports},,,,,,,,,,,,function(t,e,n){"use strict";var i=n(25),a=n.n(i);e.default=a.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"",content:"",lists:[]}},created:function(){for(var e=this,n=1;n<20;n++)this.lists.push("item"+n);t.$on("page-popup",function(t){e.title=t.title,e.content=t.content})},beforeDestroy:function(){t.$off("drawer-page")},methods:{sendMessage:function(){t.getCurrentSubNVue();t.$emit("popup-page",{title:"已读完!"})},handle:function(e,n){t.getCurrentSubNVue();t.$emit("popup-page",{type:"interactive",info:e+" 该元素被点击了!"})}}};e.default=n}).call(this,n(1).default)},function(t,e){t.exports={wrapper:{flexDirection:"column",justifyContent:"space-between",paddingTop:"10rpx",paddingRight:"15rpx",paddingBottom:"10rpx",paddingLeft:"15rpx",backgroundColor:"#F4F5F6",borderRadius:"4rpx"},title:{height:"100rpx",lineHeight:"100rpx",borderBottomStyle:"solid",borderBottomWidth:"1rpx",borderBottomColor:"#CBCBCB",flex:0,fontSize:"30rpx"},scroller:{height:"400rpx",paddingTop:"8rpx",paddingRight:"15rpx",paddingBottom:"8rpx",paddingLeft:"15rpx"},content:{color:"#555555",fontSize:"32rpx"},"message-wrapper":{flex:0,borderTopStyle:"solid",borderTopWidth:"1rpx",borderTopColor:"#CBCBCB",height:"80rpx",alignItems:"flex-end"},"send-message":{fontSize:"30rpx",lineHeight:"80rpx",color:"#00CE47",marginLeft:"20rpx"},cell:{marginTop:"10rpx",marginRight:"10rpx",marginBottom:"10rpx",marginLeft:"10rpx",paddingTop:"20rpx",paddingRight:0,paddingBottom:"20rpx",paddingLeft:0,top:"10rpx",alignItems:"center",justifyContent:"center",borderRadius:"10rpx",backgroundColor:"#5989B9"},text:{fontSize:"30rpx",textAlign:"center",color:"#FFFFFF"}}},,,,,,,,,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("div",{staticClass:["wrapper"]},[n("u-text",{staticClass:["title"]},[t._v(t._s(t.title))]),n("scroller",{staticClass:["scroller"]},[n("div",[n("u-text",{staticClass:["content"]},[t._v(t._s(t.content))])]),n("div",[n("u-text",{staticStyle:{color:"red",fontSize:"30upx"}},[t._v("以下为 Popup 内部滚动示例：")])]),t._l(t.lists,function(e,i){return n("div",{key:i,staticClass:["cell"],on:{click:function(n){t.handle(e)}}},[n("u-text",{staticClass:["text"]},[t._v(t._s(e))])])})],2),n("div",{staticClass:["message-wrapper"]},[n("u-text",{staticClass:["send-message"],on:{click:t.sendMessage}},[t._v("向页面发送消息")])])])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},,,,,,,function(t,e,n){"use strict";n.r(e);var i=n(26),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a},,,,,,function(t,e,n){"use strict";n.r(e);n(4),n(8);var i=n(12);i.default.mpType="page",i.default.route="pages/API/subnvue/subnvue/popup",i.default.el="#root",new Vue(i.default)}]);