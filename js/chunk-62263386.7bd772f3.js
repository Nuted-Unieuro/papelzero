(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62263386"],{"73f5":function(e,t,a){"use strict";a("c2c9")},aaf8:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"auth-wrapper auth-v1"},[s("div",{staticClass:"auth-inner"},[s("v-card",{staticClass:"auth-card"},[s("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[s("router-link",{staticClass:"d-flex align-center",attrs:{to:"/"}},[s("v-img",{staticClass:"me-3 ",attrs:{src:a("f980"),"max-height":"30px","max-width":"30px",alt:"logo",contain:""}}),s("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" ZeroPapel ")])],1)],1),s("v-card-text",[s("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" Seja bem vindo! 🚀 ")]),s("p",{staticClass:"mb-2"},[e._v(" Faça seu cadastrado aqui. ")])]),s("v-card-text",[s("v-form",{on:{submit:function(t){return t.preventDefault(),e.handleRegister.apply(null,arguments)}}},[s("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Nome Completo",placeholder:"Seu nome","hide-details":""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),s("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Email",placeholder:"email@unieuro.edu.br","hide-details":""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"CPF",placeholder:"111.222.333-44","hide-details":""},model:{value:e.user.cpf,callback:function(t){e.$set(e.user,"cpf",t)},expression:"user.cpf"}}),s("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Matricula",placeholder:"1234","hide-details":""},model:{value:e.user.matricula,callback:function(t){e.$set(e.user,"matricula",t)},expression:"user.matricula"}}),s("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Senha",placeholder:"············","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,"hide-details":""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("v-btn",{staticClass:"mt-6",attrs:{block:"",color:"primary",type:"submit","native-type":"submit"}},[e._v(" Registrar ")])],1)],1),s("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[s("span",{staticClass:"me-2"},[e._v(" Você já tem uma conta? ")]),s("router-link",{attrs:{to:{name:"pages-login"}}},[e._v(" Entre aqui ")])],1)],1)],1),s("img",{staticClass:"auth-mask-bg",attrs:{height:"190",src:a("89a6")("./mask-"+(e.$vuetify.theme.dark?"dark":"light")+".png")}}),s("v-img",{staticClass:"auth-tree",attrs:{width:"247",height:"185",src:a("e28d")}}),s("v-img",{staticClass:"auth-tree-3",attrs:{width:"377",height:"289",src:a("0670")}})],1)},i=[],l=a("94ed"),r=a("ed09"),n={setup:function(){var e=Object(r["e"])(!1),t=Object(r["e"])(""),a=Object(r["e"])(""),s=Object(r["e"])(""),i=Object(r["e"])(!1),n={cargo:null,cpf:null,email:null,matricula:null,name:null,tipo_acesso:null,password:null},o=[{icon:l["qb"],color:"#4267b2",colorInDark:"#4267b2"},{icon:l["Ub"],color:"#1da1f2",colorInDark:"#1da1f2"},{icon:l["xb"],color:"#272727",colorInDark:"#fff"},{icon:l["yb"],color:"#db4437",colorInDark:"#db4437"}];return{isPasswordVisible:e,username:t,email:a,password:s,socialLink:o,user:n,isLoading:i,icons:{mdiEyeOutline:l["pb"],mdiEyeOffOutline:l["ob"]}}},methods:{handleRegister:function(){var e=this;this.isLoading=!0,console.log(this),this.$store.dispatch("auth/register",this.user).then((function(){e.$router.push("/pages/login")}),(function(t){e.isLoading=!1,e.showCustomError("Não autorizado!")}))}}},o=n,c=(a("73f5"),a("2877")),u=a("6544"),d=a.n(u),m=a("8336"),p=a("b0af"),b=a("99d9"),f=a("4bd4"),h=a("adda"),v=a("8654"),g=Object(c["a"])(o,s,i,!1,null,null,null);t["default"]=g.exports;d()(g,{VBtn:m["a"],VCard:p["a"],VCardText:b["c"],VCardTitle:b["d"],VForm:f["a"],VImg:h["a"],VTextField:v["a"]})},c2c9:function(e,t,a){}}]);
//# sourceMappingURL=chunk-62263386.7bd772f3.js.map