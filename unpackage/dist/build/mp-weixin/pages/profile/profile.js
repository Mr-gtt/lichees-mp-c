(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{"02fc":function(t,n,a){"use strict";var e=a("5817"),o=a.n(e);o.a},"2c3c":function(t,n,a){"use strict";a.r(n);var e=a("d52a"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},5817:function(t,n,a){},"91a1":function(t,n,a){"use strict";a.r(n);var e=a("a70f"),o=a("2c3c");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("02fc");var r,c=a("f0c5"),s=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=s.exports},a70f:function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var e={robbyTags:function(){return a.e("components/robby-tags/robby-tags").then(a.bind(null,"2f40"))}},o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},d52a:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o(a("6bed"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){a.e("components/robby-tags/robby-tags").then(function(){return resolve(a("2f40"))}.bind(null,a)).catch(a.oe)},r=function(){a.e("components/t-navbar4").then(function(){return resolve(a("7654"))}.bind(null,a)).catch(a.oe)},c=function(){a.e("components/t-dialog").then(function(){return resolve(a("4b8a"))}.bind(null,a)).catch(a.oe)},s={components:{robbyTags:i,tNavbar4:r,tDialog:c},onShow:function(){var n=t.getStorageSync("userInfo");n&&(this.hadLogin=!0,this.avatarUrl=n.avatarUrl,this.nickName=n.nickName,this.backgroundImage=n.avatarUrl)},data:function(){return{statusBarHeight:getApp().globalData.statusBarHeight,page:2,tagList:["♂","斋区人民"],startTime:0,startPosition:0,endPosition:0,scaleImage:35,oldClientY:0,avatarUrl:"../../static/profile/avatar.jpg",nickName:"",hadLogin:!1,backgroundImage:"../../static/profile/avatar.jpg",ownerOpenid:"",ownerUserInfo:"",dialogShow:!1}},computed:{},methods:{navTo:function(n){t.navigateTo({url:n})},touchStart:function(t){this.startTime=Date.now(),this.startPosition=t.changedTouches[0].clientY,this.oldClientY=t.changedTouches[0].clientY,this.trans=""},touchMove:function(t){this.trans="";var n=t.changedTouches[0].clientY-this.oldClientY;this.oldClientY=t.changedTouches[0].clientY,this.scaleImage>85||this.scaleImage<35||(n>0&&Math.abs(n)>5?this.scaleImage+=Math.sqrt(.005*n):n<0&&Math.abs(n)>5&&(this.scaleImage-=.005*-n))},touchEnd:function(t){this.oldClientY=t.changedTouches[0].clientY,this.scaleImage=35},login:function(){var n=this;t.showLoading({title:"登陆中.."});try{var a=t.getStorageSync("userInfo");a?(t.hideLoading(),n.hadLogin=!0,this.avatarUrl=a.avatarUrl,this.nickName=a.nickName,this.backgroundImage=a.avatarUrl):wx.login({success:function(a){e.default.getCloud("/wxuser/code/"+a.code).then((function(a){var e=a.data;if("101"==e.code){var o=e.userInfo,i=e.openid;n.avatarUrl=o.avatarUrl,n.nickName=o.nickName,n.backgroundImage=o.avatarUrl,t.hideLoading(),n.hadLogin=!0;try{t.setStorageSync("userInfo",o),t.setStorageSync("openid",i)}catch(c){}}else if("-101"==e.code){var r=e.openid;t.setStorageSync("openid",r),t.hideLoading(),n.dialogShow=!0}})).catch((function(t){}))}})}catch(o){}},askUserInfo:function(){var n=this,a=this;wx.getUserProfile({desc:"用于发布信息",success:function(o){var i=o.userInfo;a.avatarUrl=i.avatarUrl,a.nickName=i.nickName,a.backgroundImage=i.avatarUrl,n.hadLogin=!0,t.setStorage({key:"userInfo",data:o.rawData,success:function(){var n=t.getStorageSync("openid");n&&e.default.postCloud("/wxuser/openid/"+n,o.userInfo).then((function(n){t.showToast({title:"登陆成功",duration:2e3,position:"bottom",icon:"none"})}))}})},fail:function(t){}})},dialogCancel:function(){this.dialogShow=!1},confirmLogin:function(){this.dialogShow=!1,this.askUserInfo()}}};n.default=s}).call(this,a("543d")["default"])},f531:function(t,n,a){"use strict";(function(t){a("6f72");e(a("66fd"));var n=e(a("91a1"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])}},[["f531","common/runtime","common/vendor"]]]);