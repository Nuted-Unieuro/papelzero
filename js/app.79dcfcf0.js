(function(e){function t(t){for(var n,r,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==c[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},c={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-07709945":"b354a7ef","chunk-08c9cbc2":"561a268d","chunk-216bad50":"8420936d","chunk-62263386":"7bd772f3","chunk-10260010":"63491744","chunk-1ceb5fc5":"2423fe66","chunk-6b86905e":"2e5c4876","chunk-0b3f0b9e":"11e8d7ee","chunk-f507bbd0":"2bec163e","chunk-28dfe438":"52612406","chunk-5bea9448":"94e73785","chunk-720a6f4f":"2a27960a","chunk-1dd52eea":"6ff2acce","chunk-2db69634":"af22de6b","chunk-4679e9e0":"2b185ee0","chunk-4cfbc755":"48c67299","chunk-0fe1828a":"7e161d94","chunk-ba11dd5e":"7e32754f","chunk-8e9caf7e":"c3ac874f","chunk-164ff40b":"ecadba58","chunk-1b42c010":"977c4120"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-07709945":1,"chunk-08c9cbc2":1,"chunk-216bad50":1,"chunk-62263386":1,"chunk-10260010":1,"chunk-1ceb5fc5":1,"chunk-6b86905e":1,"chunk-0b3f0b9e":1,"chunk-f507bbd0":1,"chunk-28dfe438":1,"chunk-5bea9448":1,"chunk-720a6f4f":1,"chunk-1dd52eea":1,"chunk-2db69634":1,"chunk-4679e9e0":1,"chunk-4cfbc755":1,"chunk-0fe1828a":1,"chunk-ba11dd5e":1,"chunk-164ff40b":1,"chunk-1b42c010":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-07709945":"6dea98f5","chunk-08c9cbc2":"3ff27930","chunk-216bad50":"9a05ac9e","chunk-62263386":"9a05ac9e","chunk-10260010":"63482870","chunk-1ceb5fc5":"d5c9d50a","chunk-6b86905e":"ad57e8ef","chunk-0b3f0b9e":"5477e1ac","chunk-f507bbd0":"955d99cd","chunk-28dfe438":"c86b6a04","chunk-5bea9448":"6e5afb86","chunk-720a6f4f":"e2c675a8","chunk-1dd52eea":"c5e5a5d8","chunk-2db69634":"4a555122","chunk-4679e9e0":"52196225","chunk-4cfbc755":"15bfb667","chunk-0fe1828a":"a4e5e3fb","chunk-ba11dd5e":"b943bab1","chunk-8e9caf7e":"31d6cfe0","chunk-164ff40b":"1bcccc27","chunk-1b42c010":"ff3d539c"}[e]+".css",c=i.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],f.parentNode.removeChild(f),a(s)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/papelzero/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1510:function(e,t,a){},1698:function(e,t,a){"use strict";a("1510")},"1fcb":function(e,t,a){"use strict";var n=a("d4ec"),r=a("bee2"),c=(a("99af"),a("bc3a")),s=a.n(c),o=a("2a47"),i=Object(o["a"])(),u="".concat(i,"api"),l=function(){function e(){Object(n["a"])(this,e)}return Object(r["a"])(e,[{key:"findAll",value:function(e){return s.a.get("".concat(u,"/processos?page=").concat(e.page))}},{key:"processoByUsuario",value:function(e,t){return console.log("processoByUsuario",e),s.a.get("".concat(u,"/processobyusuario/").concat(t,"?page=").concat(e.page,"&filter=").concat(e.filters.titulo,"&usuario=").concat(e.filters.usuario,"&cod_status=").concat(e.filters.cod_status,"&nome_departamento=").concat(e.filters.nome_departamento))}},{key:"processospendentesusuario",value:function(e){return s.a.get("".concat(u,"/processospendentesusuario/").concat(e))}},{key:"processoByReferencia",value:function(e){return s.a.get("".concat(u,"/processobyreferencia/").concat(e))}},{key:"findAllByConnectedUser",value:function(){return s.a.get("".concat(u,"/find-by-user"),{headers:authHeader()})}},{key:"findById",value:function(e){return s.a.get("".concat(u,"/").concat(e),{headers:authHeader()})}},{key:"findByActivityId",value:function(e){return s.a.get("".concat(u,"/find-by-activity/").concat(e,"?id=").concat(e),{headers:authHeader()})}},{key:"getFacePictureById",value:function(e){return s.a.get("".concat(u,"/face-picture/").concat(e),{headers:authHeader()})}},{key:"approveRecognitionById",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.a.put("".concat(u,"/approve/").concat(e),t,{headers:authHeader()})}},{key:"disapproveRecognitionById",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.a.put("".concat(u,"/disapprove/").concat(e),t,{headers:authHeader()})}},{key:"save",value:function(e,t){return t?this.update(e,t):this.create(e)}},{key:"create",value:function(e){return s.a.post("".concat(u,"/processos"),e)}},{key:"update",value:function(e,t){return s.a.put("".concat(u,"/assinarProcesso/").concat(t),e)}},{key:"deleteById",value:function(e){return s.a.delete("".concat(u,"/").concat(e),{headers:authHeader()})}}]),e}();t["a"]=new l},"2a47":function(e,t,a){"use strict";function n(){return"https://zero-papel-back.herokuapp.com/"}a.d(t,"a",(function(){return n}))},"3c61":function(e,t,a){},"40db":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="4678"},4951:function(e,t,a){"use strict";a("6732")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("ade3"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("5319"),a("ed09")),c=a("2b0e");c["a"].use(r["b"]);a("3c61");var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.resolveLayout,{tag:"component"},[a("router-view")],1)},o=[],i=(a("b0c0"),a("5530")),u=function(){var e=Object(r["c"])().proxy,t=Object(r["d"])({route:e.$route});return Object(r["g"])((function(){return e.$route}),(function(e){t.route=e})),Object(i["a"])(Object(i["a"])({},Object(r["f"])(t)),{},{router:e.$router})},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("router-view")],1)],1)},d=[],f={},p=f,m=a("2877"),b=a("6544"),h=a.n(b),v=a("7496"),g=a("f6c4"),k=Object(m["a"])(p,l,d,!1,null,null,null),j=k.exports;h()(k,{VApp:v["a"],VMain:g["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("vertical-nav-menu",{attrs:{"is-drawer-open":e.isDrawerOpen},on:{"update:isDrawerOpen":function(t){e.isDrawerOpen=t},"update:is-drawer-open":function(t){e.isDrawerOpen=t}}}),a("v-app-bar",{attrs:{app:"",flat:"",absolute:"",color:"transparent"}},[a("div",{staticClass:"boxed-container w-full"},[a("div",{staticClass:"d-flex align-center mx-6"},[a("v-app-bar-nav-icon",{staticClass:"d-block d-lg-none me-2",on:{click:function(t){e.isDrawerOpen=!e.isDrawerOpen}}}),a("v-spacer"),a("theme-switcher"),a("v-btn",{staticClass:"ms-3",attrs:{icon:"",small:""}},[e.notification>0?a("v-badge",{attrs:{content:e.notification}},[a("v-icon",[e._v(" "+e._s(e.icons.mdiBellOutline)+" ")])],1):e._e(),0==e.notification?a("v-icon",[e._v(" "+e._s(e.icons.mdiBellOutline)+" ")]):e._e()],1),a("app-bar-user-menu")],1)])]),a("v-main",[a("div",{staticClass:"app-content-container boxed-container pa-6"},[e._t("default")],2)]),a("v-footer",{staticClass:"px-0",attrs:{app:"",inset:"",color:"transparent",absolute:"",height:"56"}},[a("div",{staticClass:"boxed-container w-full"},[a("div",{staticClass:"mx-6 d-flex justify-space-between"},[a("span",[e._v(" © 2022 "),a("a",{staticClass:"text-decoration-none",attrs:{href:"mailto:michel.rosa@unieuro.edu.br",target:"_blank"}},[e._v("Nuted Unieuro")])])])])])],1)},_=[],O=(a("d3b7"),a("4e827"),a("fb6a"),a("94ed")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"app-navigation-menu",attrs:{value:e.isDrawerOpen,app:"",floating:"",width:"260",right:e.$vuetify.rtl},on:{input:function(t){return e.$emit("update:is-drawer-open",t)}}},[n("div",{staticClass:"vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2"},[n("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:"/"}},[n("v-img",{staticClass:"app-logo me-3",attrs:{src:a("f980"),"max-height":"30px","max-width":"30px",alt:"logo",contain:"",eager:""}}),n("v-slide-x-transition",[n("h2",{staticClass:"app-title text--primary"},[e._v(" ZeroPapel ")])])],1)],1),n("v-list",{staticClass:"vertical-nav-menu-items pr-5",attrs:{expand:"",shaped:""}},[0==this.$store.state.auth.user.tipo_acesso?n("nav-menu-link",{attrs:{title:"Administração",to:{name:"administracao"},icon:e.icons.mdiConsole}}):e._e(),n("nav-menu-link",{attrs:{title:"Criar Processo",to:{name:"processo"},icon:e.icons.mdiFileDocument}}),n("nav-menu-link",{attrs:{title:"Processos",to:{name:"processos"},icon:e.icons.mdiFileDocumentMultiple}}),0==this.$store.state.auth.user.tipo_acesso||2==this.$store.state.auth.user.tipo_acesso?n("nav-menu-link",{attrs:{title:"Templates",to:{name:"templates"},icon:e.icons.mdiTableEdit}}):e._e(),n("nav-menu-link",{attrs:{title:"Validar Processo",to:{name:"validar"},icon:e.icons.mdiCheckDecagram}})],1)],1)},x=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-subheader",[a("span",{staticClass:"title-wrapper"},[a("span",[e._v(e._s(e.title))])])])},C=[],z={props:{title:{type:String,required:!0}}},I=z,E=(a("c409"),a("e0c7")),P=Object(m["a"])(I,S,C,!1,null,"2fbbbcd0",null),V=P.exports;h()(P,{VSubheader:E["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-group",{ref:"refVListGroup",staticClass:"vertical-nav-menu-group text--primary",scopedSlots:e._u([{key:"prependIcon",fn:function(){return[a("v-icon",{class:{"alternate-icon-small":!e.icon}},[e._v(" "+e._s(e.icon)+" ")])]},proxy:!0},{key:"activator",fn:function(){return[a("v-list-item-title",[e._v(" "+e._s(e.title)+" ")])]},proxy:!0}])},[e._t("default")],2)},D=[],L={props:{title:{type:String,required:!0},icon:{type:String,required:!0}},setup:function(){return{}}},M=L,T=(a("4951"),a("132d")),A=a("56b0"),R=a("5d23"),N=Object(m["a"])(M,B,D,!1,null,null,null),F=N.exports;h()(N,{VIcon:T["a"],VListGroup:A["a"],VListItemTitle:R["c"]});var $=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-item",e._b({staticClass:"vertical-nav-menu-link",attrs:{"active-class":"bg-gradient-primary white--text"}},"v-list-item",e.$attrs,!1),[a("v-list-item-icon",[a("v-icon",{staticClass:"mx-auto",class:{"alternate-icon-small":!e.icon}},[e._v(" "+e._s(e.icon||e.alternateIcon)+" ")])],1),a("v-list-item-title",[e._v(" "+e._s(e.title)+" ")])],1)},H=[],U={props:{title:{type:String,required:!0},icon:{type:String,default:void 0}},setup:function(){return{alternateIcon:O["R"]}}},J=U,G=(a("1698"),a("da13")),q=a("34c3"),W=Object(m["a"])(J,$,H,!1,null,"aafed2c8",null),K=W.exports;h()(W,{VIcon:T["a"],VListItem:G["a"],VListItemIcon:q["a"],VListItemTitle:R["c"]});var X={components:{NavMenuSectionTitle:V,NavMenuGroup:F,NavMenuLink:K},props:{isDrawerOpen:{type:Boolean,default:null}},data:function(){return{icons:{mdiHomeOutline:O["Bb"],mdiAlphaTBoxOutline:O["K"],mdiEyeOutline:O["pb"],mdiCreditCardOutline:O["fb"],mdiTable:O["Rb"],mdiFileOutline:O["ub"],mdiFormSelect:O["wb"],mdiAccountCogOutline:O["z"],mdiFileDocumentMultiple:O["sb"],mdiFileDocument:O["rb"],mdiConsole:O["db"],mdiTableEdit:O["Sb"],mdiCheckDecagram:O["P"]}}}},Y=X,Z=(a("a91a"),a("adda")),Q=a("8860"),ee=a("f774"),te=a("0789"),ae=Object(m["a"])(Y,w,x,!1,null,"624cc09f",null),ne=ae.exports;h()(ae,{VImg:Z["a"],VList:Q["a"],VNavigationDrawer:ee["a"],VSlideXTransition:te["e"]});var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-fade-transition",{attrs:{mode:"out-in"}},[a("v-icon",{key:e.$vuetify.theme.dark,on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[e._v(" "+e._s(e.$vuetify.theme.dark?e.icons.mdiWeatherSunny:e.icons.mdiWeatherNight)+" ")])],1)},ce=[],se={setup:function(){return{icons:{mdiWeatherNight:O["Vb"],mdiWeatherSunny:O["Wb"]}}}},oe=se,ie=Object(m["a"])(oe,re,ce,!1,null,null,null),ue=ie.exports;h()(ie,{VFadeTransition:te["d"],VIcon:T["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"offset-y":"",left:"","nudge-bottom":"14","min-width":"230","content-class":"user-profile-menu-content"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[n("v-badge",{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[n("v-avatar",e._g(e._b({attrs:{size:"40px"}},"v-avatar",c,!1),r),[n("v-img",{attrs:{src:a("f7d6")}})],1)],1)]}}])},[n("v-list",[n("div",{staticClass:"pb-3 pt-2"},[n("v-badge",{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[n("v-avatar",{attrs:{size:"40px"}},[n("v-img",{attrs:{src:a("f7d6")}})],1)],1),n("div",{staticClass:"d-inline-flex flex-column justify-center ms-3",staticStyle:{"vertical-align":"middle"}},[n("span",{staticClass:"text--primary font-weight-semibold mb-n1"},[e._v(" "+e._s(e.userName)+" ")]),n("small",{staticClass:"text--disabled text-capitalize"},[e._v(e._s(e.userMatricula))])])],1),n("v-divider",{staticClass:"my-2"}),n("v-list-item",{attrs:{link:""},on:{click:e.logout}},[n("v-list-item-icon",{staticClass:"me-2"},[n("v-icon",{attrs:{size:"22"}},[e._v(" "+e._s(e.icons.mdiLogoutVariant)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Sair")])],1)],1)],1)],1)},de=[],fe={data:function(){return{userName:this.$store.state.auth.user.name,userMatricula:this.$store.state.auth.user.matricula,icons:{mdiAccountOutline:O["B"],mdiEmailOutline:O["mb"],mdiCheckboxMarkedOutline:O["S"],mdiChatOutline:O["O"],mdiCogOutline:O["bb"],mdiCurrencyUsd:O["hb"],mdiHelpCircleOutline:O["Ab"],mdiLogoutVariant:O["Jb"]}}},methods:{logout:function(){this.$store.dispatch("auth/logout"),this.$router.push("/pages/login")}}},pe=fe,me=(a("cf72"),a("8212")),be=a("4ca6"),he=a("ce7e"),ve=a("e449"),ge=Object(m["a"])(pe,le,de,!1,null,null,null),ke=ge.exports;h()(ge,{VAvatar:me["a"],VBadge:be["a"],VDivider:he["a"],VIcon:T["a"],VImg:Z["a"],VList:Q["a"],VListItem:G["a"],VListItemContent:R["a"],VListItemIcon:q["a"],VListItemTitle:R["c"],VMenu:ve["a"]});var je=a("1fcb"),ye={components:{VerticalNavMenu:ne,ThemeSwitcher:ue,AppBarUserMenu:ke,processosService:je["a"]},data:function(){var e=Object(r["e"])(null);return{isDrawerOpen:e,notification:0,arrayOld:[],arrayNew:[],icons:{mdiMagnify:O["Kb"],mdiBellOutline:O["L"],mdiGithub:O["xb"]}}},methods:{getNotification:function(){var e=this;je["a"].processospendentesusuario(this.$store.state.auth.user.id).then((function(t){if(t.data){if(0===e.arrayOld.length)e.arrayOld=t.data.data,e.arrayNew=t.data.data;else{var a=e.arrayOld.slice().sort(),n=t.data.data.length===e.arrayOld.length&&t.data.data.slice().sort().every((function(e,t){return e===a[t]}));n||(e.arrayOld=t.data.data)}e.notification=t.data.data.length}})).catch((function(e){console.log(e)})).finally((function(){e.isLoading=!1}))},intervalFetchData:function(){var e=this;setInterval((function(){e.getNotification()}),3e4)}},mounted:function(){this.intervalFetchData()},created:function(){this.getNotification()}},_e=ye,Oe=(a("dadd"),a("40dc")),we=a("5bc1"),xe=a("8336"),Se=a("553a"),Ce=a("2fa4"),ze=Object(m["a"])(_e,y,_,!1,null,"7b6df956",null),Ie=ze.exports;h()(ze,{VApp:v["a"],VAppBar:Oe["a"],VAppBarNavIcon:we["a"],VBadge:be["a"],VBtn:xe["a"],VFooter:Se["a"],VIcon:T["a"],VMain:g["a"],VSpacer:Ce["a"]});var Ee={components:{LayoutBlank:j,LayoutContent:Ie},setup:function(){var e=u(),t=e.route,a=Object(r["a"])((function(){return null===t.value.name?null:"blank"===t.value.meta.layout?"layout-blank":"layout-content"}));return{resolveLayout:a}}},Pe=Ee,Ve=Object(m["a"])(Pe,s,o,!1,null,null,null),Be=Ve.exports,De=a("f309");a("67de");var Le={theme:{themes:{light:{primary:"#9155FD",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"},dark:{primary:"#9155FD",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"}}}};a("5363");c["a"].use(De["a"]);var Me=new De["a"]({preset:Le,icons:{iconfont:"mdiSvg"},theme:{options:{customProperties:!0,variations:!1}}}),Te=(a("3ca3"),a("ddb0"),a("caad"),a("8c4f"));c["a"].use(Te["a"]);var Ae=[{path:"/",redirect:"processos"},{path:"/validar",name:"validar",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-6b86905e"),a.e("chunk-0b3f0b9e")]).then(a.bind(null,"ec62"))},meta:{layout:"blank"}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-f507bbd0"),a.e("chunk-28dfe438")]).then(a.bind(null,"5c3a8"))}},{path:"/novo-processo",name:"processo",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-f507bbd0"),a.e("chunk-6b86905e"),a.e("chunk-4cfbc755")]).then(a.bind(null,"d471"))}},{path:"/processos",name:"processos",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-f507bbd0"),a.e("chunk-6b86905e"),a.e("chunk-4679e9e0")]).then(a.bind(null,"54e6"))}},{path:"/templates",name:"templates",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-f507bbd0"),a.e("chunk-6b86905e"),a.e("chunk-1dd52eea")]).then(a.bind(null,"d84d"))}},{path:"/administracao",name:"administracao",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-f507bbd0"),a.e("chunk-6b86905e"),a.e("chunk-2db69634")]).then(a.bind(null,"f751"))}},{path:"/typography",name:"typography",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-8e9caf7e")]).then(a.bind(null,"9699"))}},{path:"/icons",name:"icons",component:function(){return a.e("chunk-164ff40b").then(a.bind(null,"af46"))}},{path:"/cards",name:"cards",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-5bea9448"),a.e("chunk-ba11dd5e")]).then(a.bind(null,"85ca"))}},{path:"/simple-table",name:"simple-table",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-0fe1828a")]).then(a.bind(null,"26b2"))}},{path:"/form-layouts",name:"form-layouts",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-1ceb5fc5")]).then(a.bind(null,"0a6d"))}},{path:"/pages/account-settings",name:"pages-account-settings",component:function(){return Promise.all([a.e("chunk-10260010"),a.e("chunk-07709945"),a.e("chunk-f507bbd0"),a.e("chunk-5bea9448"),a.e("chunk-720a6f4f")]).then(a.bind(null,"d250"))}},{path:"/pages/login",name:"pages-login",component:function(){return Promise.all([a.e("chunk-07709945"),a.e("chunk-08c9cbc2"),a.e("chunk-216bad50")]).then(a.bind(null,"8b48"))},meta:{layout:"blank"}},{path:"/pages/register",name:"pages-register",component:function(){return Promise.all([a.e("chunk-07709945"),a.e("chunk-08c9cbc2"),a.e("chunk-62263386")]).then(a.bind(null,"aaf8"))},meta:{layout:"blank"}},{path:"/error-404",name:"error-404",component:function(){return a.e("chunk-1b42c010").then(a.bind(null,"dda8"))},meta:{layout:"blank"}},{path:"*",redirect:"error-404"}],Re=new Te["a"]({mode:"history",base:"/papelzero/",routes:Ae});Re.beforeEach((function(e,t,a){var n=["/pages/login","/error-404","/pages/register","/validar"],r=!n.includes(e.path),c=localStorage.getItem("user");r&&!c?a("/pages/login"):a()}));var Ne=Re,Fe=a("2f62"),$e=a("d4ec"),He=a("bee2"),Ue=a("bc3a"),Je=a.n(Ue),Ge=a("2a47"),qe=Object(Ge["a"])(),We=function(){function e(){Object($e["a"])(this,e)}return Object(He["a"])(e,[{key:"login",value:function(e){return Je.a.post(qe+"api/login",{email:e.email,password:e.password}).then((function(e){return e.data&&(localStorage.setItem("user",JSON.stringify(e.data.user)),Qe.commit("user",{cargo:e.data.user.cargo,id:e.data.user.id,cpf:e.data.user.cpf,created_at:e.data.user.created_at,email:e.data.user.email,email_verified_at:e.data.user.email_verified_at,matricula:e.data.user.matricula,name:e.data.user.name,tipo_acesso:e.data.user.tipo_acesso,updated_at:e.data.user.updated_at})),e.data.user}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return Je.a.post(qe+"api/register",Object(i["a"])({},e)).then((function(e){return e.data&&(localStorage.setItem("user",JSON.stringify(e.data)),Qe.commit("user",{cargo:e.data.cargo,cpf:e.data.cpf,created_at:e.data.created_at,email:e.data.email,email_verified_at:e.data.email_verified_at,matricula:e.data.matricula,name:e.data.name,tipo_acesso:e.data.tipo_acesso,updated_at:e.data.updated_at})),e.data}))}}]),e}(),Ke=new We,Xe=JSON.parse(localStorage.getItem("user")),Ye=Xe?{status:{loggedIn:!0},user:Xe}:{status:{loggedIn:!1},user:null},Ze={namespaced:!0,state:Ye,actions:{login:function(e,t){var a=e.commit;return Ke.login(t).then((function(e){return a("loginSuccess",e),Promise.resolve(e)}),(function(e){return a("loginFailure"),Promise.reject(e)}))},register:function(e,t){var a=e.commit;return Ke.register(t).then((function(e){return a("registerSuccess",e),Promise.resolve(e)}),(function(e){return a("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;Ke.logout(),t("logout")}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},registerSuccess:function(e,t){t.access_token&&(e.status.loggedIn=!0,e.user=t)},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null}}};c["a"].use(Fe["a"]);var Qe=new Fe["a"].Store({modules:{auth:Ze},state:{id:null,cargo:null,cpf:null,created_at:null,email:null,email_verified_at:null,matricula:null,name:null,tipo_acesso:null,updated_at:null,notification:0},mutations:{basic:function(e,t){e[t.key]=t.value},user:function(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar),t.roles&&(e.userRoles=t.roles),t.token&&(e.userToken=t.token),t.userId&&(e.userId=t.userId),t.roles&&(e.role=t.roles.indexOf("ROLE_MANAGER")>=0||t.roles.indexOf("ROLE_ADMIN")>=0||t.roles.indexOf("ROLE_SUPERVISOR")>=0||t.roles.indexOf("ROLE_USER")>=0),t.roles&&(e.roleSupervisor=t.roles.indexOf("ROLE_SUPERVISOR")>=0),t.roles&&(e.roleAdmin=t.roles.indexOf("ROLE_ADMIN")>=0),t.roles&&(e.roleManager=t.roles.indexOf("ROLE_MANAGER")>=0),t.roles&&(e.roleUser=t.roles.indexOf("ROLE_USER")>=0)}},actions:{}}),et=a("c1df"),tt=a.n(et);window._=a("2ef0"),c["a"].prototype.moment=tt.a,c["a"].config.productionTip=!1,c["a"].mixin({data:function(){return{get HTTP_OK(){return 200},get HTTP_ACCEPTED(){return 202},get HTTP_CREATED(){return 201},get HTTP_UNAUTHORIZED(){return 401},get HTTP_FORBIDDEN(){return 403}}},methods:{replaceSpecialChars:function(e){return e?(e=e.replace(/[ÀÁÂÃÄÅ]/,"A"),e=e.replace(/[àáâãäå]/,"a"),e=e.replace(/[ÈÉÊË]/,"E"),e=e.replace(/[èéê]/,"e"),e=e.replace(/[ÍÍÎ]/,"I"),e=e.replace(/[ìíî]/,"i"),e=e.replace(/[òóôõ]/,"o"),e=e.replace(/[ÒÓÔÕ]/,"O"),e=e.replace(/[ùúû]/,"u"),e=e.replace(/[ÙÚÛ]/,"U"),e=e.replace(/[Ç]/,"C"),e=e.replace(/[ç]/,"c"),e.toLowerCase()):e},stripHtml:function(e){return e.replace(/(<([^>]+)>)/gi,"")},getDefaultJoditConfig:function(){var e,t="pt_br";return e={language:t,width:"auto",height:"auto",theme:"summer",zIndex:9999,toolbarButtonSize:"small",indentMargin:20,allowResizeX:!1,activeButtonsInReadOnly:["fullsize","print","preview"],allowResizeY:!0,ignoreEmptyParagraph:!0,saveHeightInStorage:!1,saveModeInStorage:!1,sizeLG:900,sizeMD:700,sizeSM:400},Object(n["a"])(e,"sizeSM",400),Object(n["a"])(e,"spellcheck",!0),Object(n["a"])(e,"readonly",!1),e},getDefaultJoditConfigViewProcesso:function(){var e,t="pt_br";return e={language:t,width:"auto",height:"auto",theme:"summer",zIndex:9999,toolbarButtonSize:"small",indentMargin:20,allowResizeX:!1,activeButtonsInReadOnly:["fullsize","print","preview"],allowResizeY:!0,ignoreEmptyParagraph:!0,saveHeightInStorage:!1,saveModeInStorage:!1,sizeLG:900,sizeMD:700,sizeSM:400},Object(n["a"])(e,"sizeSM",400),Object(n["a"])(e,"spellcheck",!0),Object(n["a"])(e,"readonly",!0),e},getDefaultJoditConfigTemplate:function(){var e,t="pt_br";return e={language:t,width:"auto",height:"400",theme:"summer",zIndex:9999,toolbarButtonSize:"small",indentMargin:20,allowResizeX:!1,activeButtonsInReadOnly:["fullsize","print","preview"],allowResizeY:!0,ignoreEmptyParagraph:!0,saveHeightInStorage:!1,saveModeInStorage:!1,sizeLG:900,sizeMD:700,sizeSM:400},Object(n["a"])(e,"sizeSM",400),Object(n["a"])(e,"spellcheck",!0),Object(n["a"])(e,"readonly",!1),Object(n["a"])(e,"askBeforePasteFromWord",!1),Object(n["a"])(e,"askBeforePasteHTML",!1),e},getDefaultJoditButtons:function(){return["bold","italic","underline","strikethrough","|","align","outdent","indent","|","ul","ol","|","font","fontsize","brush","paragraph","|","image","table","link","|","hr","eraser","copyformat","source","\n","undo","redo","|","selectall","fullsize","print","preview"]},getDefaultJoditButtonsPush:function(){return["undo","redo","|","selectall","print"]}}}),new c["a"]({router:Ne,store:Qe,vuetify:Me,render:function(e){return e(Be)}}).$mount("#app")},"5eff":function(e,t,a){},6732:function(e,t,a){},"67de":function(e,t,a){},9711:function(e,t,a){},a91a:function(e,t,a){"use strict";a("40db")},b68c:function(e,t,a){},c409:function(e,t,a){"use strict";a("b68c")},cf72:function(e,t,a){"use strict";a("9711")},dadd:function(e,t,a){"use strict";a("5eff")},f7d6:function(e,t,a){e.exports=a.p+"img/1.e2938115.png"},f980:function(e,t,a){e.exports=a.p+"img/logo-zero.e0dd2c8f.png"}});
//# sourceMappingURL=app.79dcfcf0.js.map