webpackJsonp([2,0],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(227),o=a(s),r=n(4),i=a(r),u=n(204),l=a(u),c=n(136),d=a(c),f=n(199),m=a(f),p=n(11),v=a(p),_=n(12),j=a(_),h=n(205),b=a(h),g=n(143),y=a(g);o.default.use(l.default),o.default.use(d.default),o.default.use(i.default),m.default.attach(document.body);var M=new i.default.Store(y.default);j.default.beforeEach(function(e,t,n){console.log("beforeEach",M.state.user.data.name),e.matched.some(function(e){return e.meta.requiresAuth})?M.state.user.data.name?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}),j.default.afterEach(function(){}),new o.default({router:j.default,store:M,i18n:new l.default(v.default),template:"<App/>",components:{App:b.default}}).$mount("#app")},,,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Languages=void 0;var s=n(138),o=a(s),r=n(137),i=a(r),u=new i.default;t.Languages=[{id:"en-us",label:"English"},{id:"my-ms",label:"Malay"},{id:"zh-cn",label:"Chinese Traditional"},{id:"de",label:"German"}];t.default={locale:"en-us",messages:o.default,formatter:u}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var s=n(136),o=a(s),r=n(213),i=a(r),u=n(214),l=a(u),c=n(215),d=a(c),f=t.routes=[{name:"index",path:"/",redirect:"/home",meta:{requiresAuth:!1}},{name:"admin",path:"/admin",component:i.default,meta:{requiresAuth:!1}},{name:"contact",path:"/contact",component:l.default},{name:"home",path:"/home",component:d.default}];t.default=new o.default({mode:"history",routes:f})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(159),o=a(s),r=n(160),i=a(r),u=n(1),l=a(u),c=function(){function e(){(0,o.default)(this,e)}return(0,i.default)(e,[{key:"format",value:function e(t){var n=arguments.length<=1?void 0:arguments[1];switch(t){case"moment":var a=n.value,e=n.format;return"relative"===e?(0,l.default)(a).calendar():(0,l.default)(a).format(e)}}}]),e}();t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(13),o=a(s),r=n(140),i=a(r),u=n(141),l=a(u),c=n(139),d=a(c),f=n(142),m=a(f),p={"en-us":{message:(0,o.default)({},i.default),formatter:{moment:"moment"}},"my-ms":{message:(0,o.default)({},l.default),formatter:{moment:"moment"}},de:{message:(0,o.default)({},d.default),formatter:{moment:"moment"}},"zh-cn":{message:(0,o.default)({},m.default),formatter:{moment:"moment"}}};t.default=p},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={greet:"Hallo Welt"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={greet:"Hello world"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={greet:"Hello dunia"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={greet:"你好，世界"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=a(s),r=n(146),i=a(r),u=n(147),l=a(u),c=n(144),d=a(c),f=n(145),m=a(f),p="none",v={data:{}},_={all:function(e,t){e.dispatch,e.commit,e.state,t.expenses}},j=(0,o.default)({},p,function(e,t){}),h={data:function(e,t){return e.data},user:function(e,t){}};t.default={state:v,getters:h,actions:_,mutations:j,modules:{notification:i.default,user:l.default,loader:d.default,locale:m.default}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=a(s),r="TOGGLE",i={isVisible:!1},u={show:function(e){var t=e.commit;t(r,!0)},hide:function(e){var t=e.commit;t(r,!1)}},l=(0,o.default)({},r,function(e,t){e.isVisible=t}),c={isVisible:function(e,t){return e.isVisible}};t.default={namespaced:!0,state:i,actions:u,mutations:l,getters:c}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=a(s),r=n(1),i=a(r),u=n(11),l="SET_LOCALE";console.log(u.Languages);var c={locale:"en-us",languages:u.Languages},d={setLocale:function(e,t){var n=e.commit;n(l,t)}},f=(0,o.default)({},l,function(e,t){i.default.locale(t),e.locale=t}),m={locale:function(e,t){return e.locale},languages:function(e,t){return e.languages}};t.default={namespaced:!0,state:c,actions:d,mutations:f,getters:m}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s,o=n(3),r=a(o),i=n(203),u=a(i),l="SHOW",c="START",d="PAUSE",f="REMOVE",m={data:[],timer:{}},p={show:function(e,t){var n=e.commit,a=e.dispatch,s=t.title,o=t.description,r=(0,u.default)(),i=Date.now();n(l,{id:r,title:s,description:o,timestamp:i}),a("start",r)},start:function(e,t){var n=e.commit;n(c,t)},pause:function(e,t){var n=e.commit;n(d,t)},remove:function(e,t){var n=e.commit;n(f,t)}},v=(s={},(0,r.default)(s,l,function(e,t){var n=t.id,a=t.title,s=t.description;e.data.push({id:n,title:a,description:s})}),(0,r.default)(s,c,function(e,t){e.timer[t]=window.setTimeout(function(){e.data=e.data.filter(function(e){return e.id!==t})},4e3)}),(0,r.default)(s,d,function(e,t){window.clearTimeout(e.timer[t])}),(0,r.default)(s,f,function(e,t){e.data=e.data.filter(function(e){return e.id!==t})}),s),_={data:function(e,t,n,a){return e.data}};t.default={namespaced:!0,state:m,actions:p,getters:_,mutations:v}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),o=a(s),r="SET_USER",i={data:{}},u={set_user:function(e,t){var n=e.commit;e.dispatch;n(r,t)}},l=(0,o.default)({},r,function(e,t){e.user=t}),c={user:function(e,t,n,a){return e.user}};t.default={namespaced:!0,state:i,actions:u,getters:c,mutations:l}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(208),o=a(s),r=n(209),i=a(r),u=n(211),l=a(u),c=n(206),d=a(c),f=n(207),m=a(f),p=n(212),v=a(p),_=n(210),j=a(_);t.default={name:"app",components:{AppHeader:o.default,AppNavbar:l.default,AppBody:d.default,AppFooter:m.default,AppJumbotron:i.default,AppNotification:v.default,AppLoading:j.default},data:function(){return{transitionName:"slideLeft",transitionMode:"out-in",name:this.name}},watch:{$route:function(e,t){this.name=this.$route.name;var n=e.path.split("/").length,a=t.path.split("/").length;this.transitionName=n<a?"slideRight":"slideLeft"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-body"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),o=a(s),r=n(4);t.default={name:"app-footer",computed:(0,o.default)({},(0,r.mapGetters)("locale",["locale","languages"])),methods:(0,o.default)({},(0,r.mapActions)("locale",["setLocale"]),{selectLanguage:function(e){this.setLocale(e.currentTarget.value)}})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-header"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-jumbotron"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),o=a(s),r=n(4);t.default={name:"app-loading",computed:(0,o.default)({},(0,r.mapGetters)("loader",["isVisible"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),s=a.routes.filter(function(e){return"index"!==e.name});t.default={name:"app-navbar",data:function(){return{routes:s}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),o=a(s),r=n(4);t.default={name:"app-notification",props:["collection"],beforeCreate:function(){this.timer={}},beforeMount:function(){var e=this;this.data.map(function(t){e.start(t.id)})},computed:(0,o.default)({},(0,r.mapGetters)("notification",["data"])),methods:(0,o.default)({},(0,r.mapActions)("notification",["remove","start","pause"]))}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),o=a(s),r=n(4);t.default={name:"page-admin",computed:(0,o.default)({},(0,r.mapGetters)("locale",["locale"])),methods:(0,o.default)({},(0,r.mapActions)("notification",{showNotification:"show"}),{toastNotification:function(){this.showNotification({title:"Hello World",description:"This is an example notification"})}})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"page-contact"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"page-home"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,n){function a(e){return n(s(e))}function s(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./af":21,"./af.js":21,"./ar":28,"./ar-dz":22,"./ar-dz.js":22,"./ar-kw":23,"./ar-kw.js":23,"./ar-ly":24,"./ar-ly.js":24,"./ar-ma":25,"./ar-ma.js":25,"./ar-sa":26,"./ar-sa.js":26,"./ar-tn":27,"./ar-tn.js":27,"./ar.js":28,"./az":29,"./az.js":29,"./be":30,"./be.js":30,"./bg":31,"./bg.js":31,"./bn":32,"./bn.js":32,"./bo":33,"./bo.js":33,"./br":34,"./br.js":34,"./bs":35,"./bs.js":35,"./ca":36,"./ca.js":36,"./cs":37,"./cs.js":37,"./cv":38,"./cv.js":38,"./cy":39,"./cy.js":39,"./da":40,"./da.js":40,"./de":43,"./de-at":41,"./de-at.js":41,"./de-ch":42,"./de-ch.js":42,"./de.js":43,"./dv":44,"./dv.js":44,"./el":45,"./el.js":45,"./en-au":46,"./en-au.js":46,"./en-ca":47,"./en-ca.js":47,"./en-gb":48,"./en-gb.js":48,"./en-ie":49,"./en-ie.js":49,"./en-nz":50,"./en-nz.js":50,"./eo":51,"./eo.js":51,"./es":53,"./es-do":52,"./es-do.js":52,"./es.js":53,"./et":54,"./et.js":54,"./eu":55,"./eu.js":55,"./fa":56,"./fa.js":56,"./fi":57,"./fi.js":57,"./fo":58,"./fo.js":58,"./fr":61,"./fr-ca":59,"./fr-ca.js":59,"./fr-ch":60,"./fr-ch.js":60,"./fr.js":61,"./fy":62,"./fy.js":62,"./gd":63,"./gd.js":63,"./gl":64,"./gl.js":64,"./gom-latn":65,"./gom-latn.js":65,"./he":66,"./he.js":66,"./hi":67,"./hi.js":67,"./hr":68,"./hr.js":68,"./hu":69,"./hu.js":69,"./hy-am":70,"./hy-am.js":70,"./id":71,"./id.js":71,"./is":72,"./is.js":72,"./it":73,"./it.js":73,"./ja":74,"./ja.js":74,"./jv":75,"./jv.js":75,"./ka":76,"./ka.js":76,"./kk":77,"./kk.js":77,"./km":78,"./km.js":78,"./kn":79,"./kn.js":79,"./ko":80,"./ko.js":80,"./ky":81,"./ky.js":81,"./lb":82,"./lb.js":82,"./lo":83,"./lo.js":83,"./lt":84,"./lt.js":84,"./lv":85,"./lv.js":85,"./me":86,"./me.js":86,"./mi":87,"./mi.js":87,"./mk":88,"./mk.js":88,"./ml":89,"./ml.js":89,"./mr":90,"./mr.js":90,"./ms":92,"./ms-my":91,"./ms-my.js":91,"./ms.js":92,"./my":93,"./my.js":93,"./nb":94,"./nb.js":94,"./ne":95,"./ne.js":95,"./nl":97,"./nl-be":96,"./nl-be.js":96,"./nl.js":97,"./nn":98,"./nn.js":98,"./pa-in":99,"./pa-in.js":99,"./pl":100,"./pl.js":100,"./pt":102,"./pt-br":101,"./pt-br.js":101,"./pt.js":102,"./ro":103,"./ro.js":103,"./ru":104,"./ru.js":104,"./sd":105,"./sd.js":105,"./se":106,"./se.js":106,"./si":107,"./si.js":107,"./sk":108,"./sk.js":108,"./sl":109,"./sl.js":109,"./sq":110,"./sq.js":110,"./sr":112,"./sr-cyrl":111,"./sr-cyrl.js":111,"./sr.js":112,"./ss":113,"./ss.js":113,"./sv":114,"./sv.js":114,"./sw":115,"./sw.js":115,"./ta":116,"./ta.js":116,"./te":117,"./te.js":117,"./tet":118,"./tet.js":118,"./th":119,"./th.js":119,"./tl-ph":120,"./tl-ph.js":120,"./tlh":121,"./tlh.js":121,"./tr":122,"./tr.js":122,"./tzl":123,"./tzl.js":123,"./tzm":125,"./tzm-latn":124,"./tzm-latn.js":124,"./tzm.js":125,"./uk":126,"./uk.js":126,"./ur":127,"./ur.js":127,"./uz":129,"./uz-latn":128,"./uz-latn.js":128,"./uz.js":129,"./vi":130,"./vi.js":130,"./x-pseudo":131,"./x-pseudo.js":131,"./yo":132,"./yo.js":132,"./zh-cn":133,"./zh-cn.js":133,"./zh-hk":134,"./zh-hk.js":134,"./zh-tw":135,"./zh-tw.js":135};a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id=200},,,,,function(e,t,n){n(198);var a=n(2)(n(148),n(226),null,null);e.exports=a.exports},function(e,t,n){n(196);var a=n(2)(n(149),n(224),"data-v-7a3633a2",null);e.exports=a.exports},function(e,t,n){n(190);var a=n(2)(n(150),n(218),"data-v-3a19d468",null);e.exports=a.exports},function(e,t,n){n(194);var a=n(2)(n(151),n(222),"data-v-5b4c385a",null);e.exports=a.exports},function(e,t,n){n(195);var a=n(2)(n(152),n(223),"data-v-7042386f",null);e.exports=a.exports},function(e,t,n){n(197);var a=n(2)(n(153),n(225),"data-v-8717ca82",null);e.exports=a.exports},function(e,t,n){n(193);var a=n(2)(n(154),n(221),"data-v-4e680f46",null);e.exports=a.exports},function(e,t,n){n(192);var a=n(2)(n(155),n(220),"data-v-44baa3f8",null);e.exports=a.exports},function(e,t,n){n(191);var a=n(2)(n(156),n(219),"data-v-42c5a9fc",null);e.exports=a.exports},function(e,t,n){n(188);var a=n(2)(n(157),n(216),"data-v-0669690d",null);e.exports=a.exports},function(e,t,n){n(189);var a=n(2)(n(158),n(217),"data-v-0e5ba5c2",null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-contact"},[e._v("\nContact page\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-home"},[e._v("\nHome page\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("span",[e._v("Language:")]),e._v(" "),n("select",{on:{change:e.selectLanguage}},e._l(e.languages,function(t){return n("option",{staticClass:"footer-item",domProps:{value:t.id}},[e._v(e._s(t.label))])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-admin"},[e._v("\n  "+e._s(e.locale)+"\n  "+e._s(e.$t("message.greet",e.locale))+"\n  "+e._s(e.$t("formatter.moment",{date:new Date,format:"YYYY MMM DD"}))+"\n  "),n("button",{on:{click:e.toastNotification}},[e._v("Show notification")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition-group",{attrs:{name:"app-notification",tag:"div"}},e._l(e.data,function(t,a){return n("div",{key:t.id,staticClass:"notification",style:{top:10+70*a+"px"},on:{mouseenter:function(n){e.pause(t.id)},mouseleave:function(n){e.start(t.id)},click:function(n){e.remove(t.id)}}},[n("div",{staticClass:"title text-bold h4"},[n("i",{staticClass:"fa fa-fw fa-check-circle-o"}),e._v(" "+e._s(t.title)+" ")]),e._v(" "),n("div",{staticClass:"description h5",domProps:{innerHTML:e._s(t.description)}})])}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-navbar"},e._l(e.routes,function(t){return n("router-link",{staticClass:"nav-item",class:{"is-selected":e.$route.name===t.name},attrs:{to:t.path}},[e._v(e._s(t.name)+" ")])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header"},[n("router-link",{staticClass:"header-icon",attrs:{to:"/"}},[e._t("icon")],2),e._v(" "),n("h2",{staticClass:"header-title"},[e._v("Engineers.my")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-jumbotron"},[n("div",{staticClass:"app-jumbotron-title"},[n("br"),e._v(" "),n("div",[n("h1",{staticClass:"app-jumbotron-heading"},[e._v("Engineers.my")]),e._v(" "),n("br"),e._v(" "),n("p",{staticClass:"app-jumbotron-subheading"},[e._v("An open source community for developers to share, collaborate and improve the tech community in Malaysia.")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("p",{staticClass:"slack-invite-heading"},[e._v("Join engineers.my Slack Community")]),e._v(" "),n("br"),e._v(" "),n("a",{staticClass:"button-slack-wrapper",attrs:{href:"https://engineersmy.herokuapp.com/",title:"Join engineers.my slack group here"}},[n("img",{staticClass:"button-slack",attrs:{src:"/static/slack.png",alt:"slack.png"}})])]),e._v(" "),n("br")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-body"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isVisible?n("div",[n("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-3x fa-spin"})]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"sticky-footer"}},[n("app-loading"),e._v(" "),n("app-notification"),e._v(" "),n("app-header"),e._v(" "),n("app-jumbotron"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),e._m(0)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"announcement"},[n("b",[e._v("Announcement:")]),e._v(" Our website is still work in progress. If you wish to contribute/suggest ideas that can help us enhance our website, visit our "),n("a",{attrs:{href:"https://github.com/engineersmy"}},[e._v("Github")]),e._v(" and start contributing.")])}]}}]);
//# sourceMappingURL=app.6ef91c8e5312e77aa836.js.map