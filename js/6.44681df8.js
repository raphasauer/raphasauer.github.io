(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{f6b3:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("h4",[a._v("Cadastrar novo usuário:")]),e("body",[e("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[e("q-form",{staticClass:"q-gutter-md",on:{submit:a.onSubmit,reset:a.onReset}},[e("q-input",{attrs:{filled:"",label:"Nome *","lazy-rules":"",outlined:"",rules:[function(a){return a&&a.length>0||"Preencha um nome"}]},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}),e("q-input",{attrs:{filled:"",label:"Email *","lazy-rules":"",outlined:"",rules:[function(a){return a&&a.length>0||"Preencha um email"}]},model:{value:a.job,callback:function(t){a.job=t},expression:"job"}}),e("q-input",{attrs:{filled:"",label:"Avatar *",hitn:"URL para o avatar","lazy-rules":"",outlined:"",rules:[function(a){return a&&a.length>0||"Preencha um URL"}]},model:{value:a.avatar,callback:function(t){a.avatar=t},expression:"avatar"}}),e("div",{attrs:{id:"btn"}},[e("q-btn",{attrs:{label:"Enviar",type:"submit",color:"primary"}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Limpar",type:"reset",color:"primary",flat:""}})],1)],1)],1)])])},n=[],r=e("2b0e"),s=e("7338"),o=e.n(s);r["a"].prototype.$axios=o.a;var i={data(){return{name:null,job:null,avatar:null}},created(){localStorage.setItem("listDisplay","0")},methods:{onSubmit(){o.a.post("https://reqres.in/api/users",{first_name:this.name,job:this.job,avatar:this.avatar}).then((function(a){var t=localStorage.length-1;console.log(a),localStorage.setItem(t,a.data.first_name),t++,localStorage.setItem(t,a.data.job),t++,localStorage.setItem(t,a.data.avatar),t++,localStorage.setItem(t,a.data.id)})),this.$q.notify({message:"Usuário cadastrado com sucesso"})},onReset(){this.name=null,this.job=null,this.avatar=null}}},u=i,c=e("2877"),m=e("9989"),d=e("0378"),b=e("27f9"),p=e("9c40"),h=e("eebe"),v=e.n(h),f=Object(c["a"])(u,l,n,!1,null,null,null);t["default"]=f.exports;v()(f,"components",{QPage:m["a"],QForm:d["a"],QInput:b["a"],QBtn:p["a"]})}}]);