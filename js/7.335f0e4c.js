(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0848":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("h4",[e._v("Editar usuário:")]),a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[a("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[a("q-input",{attrs:{filled:"",type:"number",label:"ID *",hint:"ID do usuário a ser editado",outlined:"","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type your age"}]},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),a("q-input",{attrs:{filled:"",label:"Nome *",hint:"Novo nome do usuário ou - para manter o mesmo nome","lazy-rules":"",outlined:"",rules:[function(e){return e&&e.length>0||"Não pode ser vazio"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{filled:"",label:"Função *",hint:"Nova função do usuário ou - para manter a mesma função",outlined:"","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type your age"}]},model:{value:e.job,callback:function(t){e.job=t},expression:"job"}}),a("div",[a("q-btn",{attrs:{label:"Enviar",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Limpar",type:"reset",color:"primary",flat:""}})],1)],1)],1)])},n=[],o=a("2b0e"),s=a("7338"),r=a.n(s);o["a"].prototype.$axios=r.a;var i={data(){return{name:null,job:null,id:null}},created(){localStorage.setItem("listDisplay","0")},methods:{onSubmit(){const e=this.id;r.a.put("https://reqres.in/api/users",{first_name:this.name,job:this.job}).then((function(t){for(var a=0;a<localStorage.length-1;a++)if(localStorage.getItem(a)===e){a--,"-"!==t.data.job&&localStorage.setItem(a,t.data.job),a--,"-"!==t.data.first_name&&localStorage.setItem(a,t.data.first_name);break}})),this.$q.notify({message:"Operação concluída"})},onReset(){this.name=null,this.job=null,this.id=null,this.accept=!1}}},u=i,m=a("2877"),c=a("9989"),d=a("0378"),p=a("27f9"),b=a("9c40"),f=a("eebe"),h=a.n(f),y=Object(m["a"])(u,l,n,!1,null,null,null);t["default"]=y.exports;h()(y,"components",{QPage:c["a"],QForm:d["a"],QInput:p["a"],QBtn:b["a"]})}}]);