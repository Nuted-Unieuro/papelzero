(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-216bad50"],{"0c97":function(t,s,e){},"8b48":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"auth-wrapper auth-v1"},[a("div",{staticClass:"auth-inner"},[a("v-card",{staticClass:"auth-card"},[a("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[a("router-link",{staticClass:"d-flex align-center",attrs:{to:"/"}},[a("v-img",{staticClass:"me-3 ",attrs:{src:e("f980"),"max-height":"30px","max-width":"30px",alt:"logo",contain:""}}),a("h2",{staticClass:"text-2xl font-weight-semibold"},[t._v(" ZeroPapel ")])],1)],1),a("v-card-text",[a("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[t._v(" Seja bem-vindo! 👋🏻 ")]),a("p",{staticClass:"mb-2"},[t._v(" Por favor, entre com suas credenciais. ")])]),a("v-card-text",[a("v-form",{on:{submit:function(s){return s.preventDefault(),t.handleLogin.apply(null,arguments)}}},[a("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Email",placeholder:"email@unieuro.edu.br","hide-details":""},model:{value:t.user.email,callback:function(s){t.$set(t.user,"email",s)},expression:"user.email"}}),a("v-text-field",{attrs:{outlined:"",type:t.isPasswordVisible?"text":"password",label:"Password",placeholder:"············","append-icon":t.isPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,"hide-details":""},on:{"click:append":function(s){t.isPasswordVisible=!t.isPasswordVisible}},model:{value:t.user.password,callback:function(s){t.$set(t.user,"password",s)},expression:"user.password"}}),a("div",{staticClass:"d-flex align-center justify-space-between flex-wrap"}),a("v-btn",{staticClass:"mt-6",attrs:{block:"",color:"primary",type:"submit",loading:t.isLoading,"native-type":"submit"}},[t._v(" Entrar ")])],1)],1),a("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[a("span",{staticClass:"me-2"},[t._v(" Validação de Processos? ")]),a("router-link",{attrs:{to:{name:"validar"}}},[t._v(" Clique Aqui! ")])],1)],1)],1),a("img",{staticClass:"auth-mask-bg",attrs:{height:"173",src:e("89a6")("./mask-"+(t.$vuetify.theme.dark?"dark":"light")+".png")}}),a("v-img",{staticClass:"auth-tree",attrs:{width:"247",height:"185",src:e("e28d")}}),a("v-img",{staticClass:"auth-tree-3",attrs:{width:"377",height:"289",src:e("0670")}})],1)},i=[],r=e("94ed"),n=e("ed09"),l=e("d4ec"),o=function t(s,e,a){Object(l["a"])(this,t),this.username=s,this.email=e,this.password=a},d={data:function(){var t=Object(n["e"])(!1),s=Object(n["e"])(""),e=Object(n["e"])("");return{isPasswordVisible:t,email:s,password:e,user:new o("",""),isLoading:!1,icons:{mdiEyeOutline:r["pb"],mdiEyeOffOutline:r["ob"]}}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/")},methods:{handleLogin:function(){var t=this;this.isLoading=!0,console.log(this),this.$store.dispatch("auth/login",this.user).then((function(){t.$router.push("/")}),(function(s){t.isLoading=!1,t.showCustomError("Não autorizado!")}))},resetPassword:function(){this.$router.push("/reset-password")},changePassword:function(){this.$router.push("/changepassword")}}},c=d,u=(e("f499"),e("2877")),h=e("6544"),p=e.n(h),m=e("8336"),f=e("b0af"),b=e("99d9"),g=e("4bd4"),v=e("adda"),w=e("8654"),x=Object(u["a"])(c,a,i,!1,null,null,null);s["default"]=x.exports;p()(x,{VBtn:m["a"],VCard:f["a"],VCardText:b["c"],VCardTitle:b["d"],VForm:g["a"],VImg:v["a"],VTextField:w["a"]})},f499:function(t,s,e){"use strict";e("0c97")}}]);
//# sourceMappingURL=chunk-216bad50.8420936d.js.map