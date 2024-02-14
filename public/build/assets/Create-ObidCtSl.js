import{Z as w,i as k,d as y,e as _,o as s,c as l,a as m,w as V,F as d,b as t,g as a,v as p,r as h,k as C,m as U,f as x}from"./app-JMOyERXo.js";import{A as F}from"./AuthenticatedLayout-A9kfyazK.js";import{_ as H}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-lgY6ghtR.js";import"./ResponsiveNavLink-ytPyhi-K.js";import"./Toast-lMWHbh4U.js";const j={components:{AuthenticatedLayout:F,Head:w,Link:k},data(){return{title:"Draf Formulir",content:[]}},methods:{async simpanHandler(){try{(await y.post(route("client.form.create",{title:this.title,content:this.content}))).status==200&&(window.location.href=route("client.form.index"))}catch(n){console.log(n)}},removeFormItem(n){n>=0&&n<this.content.length?this.content.splice(n,1):console.log("Invalid index")}}},M={class:"py-12"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 gap-6"},L={class:"bg-white card overflow-hidden p-6 grid grid-cols-1 gap-2"},T={class:"container form-group grid grid-cols-1 gap-2"},A=t("label",{for:"judul",class:"text-sm"},"Judul Formulir",-1),I=t("p",null,"Isi formulir",-1),N={class:"container formulir-body grid grid-cols-1 gap-2 py-2"},q={class:"grid grid-flow-row grid-cols-3"},z=["onUpdate:modelValue"],D=["onUpdate:modelValue"],E=t("option",{selected:"",value:"text"},"Text",-1),S=t("option",{value:"option"},"Option",-1),J=t("option",{value:"multiple"},"Multiple",-1),O=t("option",{value:"file"},"File",-1),P=t("option",{value:"email"},"Email",-1),W=t("option",{value:"phone"},"Phone Number",-1),Z=[E,S,J,O,P,W],G={class:"inline-flex space-x-2"},K={class:"label space-x-4 cursor-pointer"},Q=["onUpdate:modelValue"],R=t("span",{class:"label-text w-fit"},"Wajib diisi",-1),X={class:"btn btn-circle text-rose-500"},Y=["onClick"],$=t("path",{fill:"currentColor",d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"},null,-1),tt=[$],et={key:0,class:"py-2 col-span-3 space-y-2"},ot=t("p",{class:"text-sm"},"Opsi jawaban",-1),st={class:"grid grid-cols-1 gap-2"},lt=["onUpdate:modelValue"],nt=["onClick"],it={class:"container inline-flex justify-between"};function at(n,i,ct,rt,c,r){const f=_("Head"),v=_("AuthenticatedLayout");return s(),l(d,null,[m(f,{title:"Buat Form"}),m(v,null,{default:V(()=>[t("div",M,[t("div",B,[t("div",L,[t("div",T,[A,a(t("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=e=>c.title=e),class:"input input-bordered w-full max-w-xs",placeholder:"judul formulir"},null,512),[[p,c.title]])]),I,(s(!0),l(d,null,h(c.content,(e,u)=>(s(),l("div",{key:u},[t("div",N,[t("div",q,[a(t("input",{"onUpdate:modelValue":o=>e.kolom=o,type:"text",class:"input input-bordered max-w-xs",placeholder:"nama kolom"},null,8,z),[[p,e.kolom]]),a(t("select",{"onUpdate:modelValue":o=>e.tipe=o,class:"select select-bordered w-full max-w-xs"},Z,8,D),[[C,e.tipe]]),t("div",G,[t("label",K,[a(t("input",{type:"checkbox","onUpdate:modelValue":o=>e.required=o,class:"checkbox"},null,8,Q),[[U,e.required]]),R]),t("button",X,[(s(),l("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:o=>r.removeFormItem(u),class:"w-6",viewBox:"0 0 24 24"},tt,8,Y))])]),e.tipe=="option"||e.tipe=="multiple"?(s(),l("div",et,[ot,t("div",st,[(s(!0),l(d,null,h(e.opsi,(o,b)=>a((s(),l("input",{type:"text",key:b,"onUpdate:modelValue":g=>o.text=g,class:"input input-bordered max-w-xs",placeholder:"opsi"},null,8,lt)),[[p,o.text]])),128))])])):x("",!0),e.tipe=="option"||e.tipe=="multiple"?(s(),l("button",{key:1,onClick:()=>{e.opsi.push({text:""})},class:"w-fit py-2 text-blue-500"}," Tambah opsi jawaban ",8,nt)):x("",!0)])])]))),128)),t("div",it,[t("button",{class:"btn",onClick:i[1]||(i[1]=()=>{c.content.push({kolom:"nama kolom",tipe:"Text",required:!1,opsi:[]})})}," Tambah kolom"),t("button",{class:"btn btn-primary",onClick:i[2]||(i[2]=(...e)=>r.simpanHandler&&r.simpanHandler(...e))},"Simpan")])])])])]),_:1})],64)}const xt=H(j,[["render",at]]);export{xt as default};