(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussxitonggonggao/detail"],{"18e4":function(t,e,n){},"3ea8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,s,a,r,o){try{var i=t[r](o),u=i.value}catch(c){return void n(c)}i.done?e(u):Promise.resolve(u).then(s,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(s,a){var o=t.apply(e,n);function i(t){r(o,s,a,i,u,"next",t)}function u(t){r(o,s,a,i,u,"throw",t)}i(void 0)}))}}var i={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return o(s.default.mark((function n(){return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id,t.userid&&(e.userid=t.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return o(s.default.mark((function e(){var a,r,o;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),a=t.getStorageSync("nowTable"),e.next=4,n.$api.session(a);case 4:r=e.sent,n.user=r.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),o=t.getStorageSync("discussdiscussxitonggonggaoCleanType"),o&&(t.removeStorageSync("discussdiscussxitonggonggaoCleanType"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","discussxitonggonggao"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(e,n,s,a,r){if(t.setStorageSync("crossTable","discussxitonggonggao"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",s),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",a),""!=s&&!s.startsWith("[")){var o=t.getStorageSync("crossObj");for(var i in o)if(i==s&&o[i]==r)return void this.$utils.msg(a)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=this;return o(s.default.mark((function e(){var n;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("discussxitonggonggao",t.id);case 2:n=e.sent,t.detail=n.data;case 4:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return o(s.default.mark((function n(){var a;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("discussdiscussxitonggonggao",{page:t.num,limit:10,refid:e.id});case 2:a=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return o(s.default.mark((function e(){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../discussdiscussxitonggonggao/add-or-update?refid=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return o(s.default.mark((function e(){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("discussxitonggonggao",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=i}).call(this,n("543d")["default"])},"4aa2":function(t,e,n){"use strict";(function(t){n("c3c6");s(n("66fd"));var e=s(n("90b5"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"57ae":function(t,e,n){"use strict";n.r(e);var s=n("3ea8"),a=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);e["default"]=a.a},"90b5":function(t,e,n){"use strict";n.r(e);var s=n("eec4"),a=n("57ae");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d28d");var o,i=n("f0c5"),u=Object(i["a"])(a["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);e["default"]=u.exports},d28d:function(t,e,n){"use strict";var s=n("18e4"),a=n.n(s);a.a},eec4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return s}));var s={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"2401"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"f1bf"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]}},[["4aa2","common/runtime","common/vendor"]]]);