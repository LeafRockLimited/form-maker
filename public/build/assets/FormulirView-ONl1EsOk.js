var C=Object.defineProperty;var H=(s,o,r)=>o in s?C(s,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[o]=r;var x=(s,o,r)=>(H(s,typeof o!="symbol"?o+"":o,r),r);import{i as A,Z as Q,d as b,e as v,o as a,c as l,a as y,b as t,t as c,F as _,r as w,x as M,w as U,h as F,g as h,v as g,f as u,k as N,l as S}from"./app-IyjCCclX.js";import{A as P}from"./AuthenticatedLayout-a6k-4YBz.js";import{P as L}from"./PhoneNumber-COSj-Tbp.js";import{_ as R}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-qLvYHbAH.js";import"./ResponsiveNavLink-k9mzvuMU.js";import"./Toast-0ytJGTRP.js";class j{constructor(){x(this,"validateForm",o=>o.filter(i=>{if(i.required==1&&i.answer==null)return i}))}}const B={components:{Link:A,Head:Q,AuthenticatedLayout:P},props:{formulir:Array},data(){return{Question:Array,errorResponse:String,backgroundStyle:{background:`url(${this.formulir.image_background})`,"background-size":"cover"}}},mounted(){this.Question=this.formulir},methods:{changePhoneValueHandler(s,o){var r=s.target;const i=new L().formatPhoneNumber(r.value);this.Question.content[o].answer=i},inputFileHandler(s,o){this.Question.content[o].answer=s.target.files[0]},formValidation(s){const r=new j().validateForm(s);if(r.length>0){var s=r.map(d=>d.kolom);return s.join(","),s.join(", ")+" belum diisi"}else return!0},async postAnswerHandler(){const s=this.formValidation(this.Question.content);if(s==!0){if((await b.post(route("guest.post_formulir"),{formulir_id:this.Question.id,content:this.Question.content},{headers:{"Content-Type":"multipart/form-data"}})).status==200){successModal.showModal();const i=this.Question.content.filter(d=>d.tipe=="phone");var o=!0;if(i.length>0){let d=i[0].answer;o=await this.sendResponseWaHandler(d)}o!=!1&&setTimeout(()=>{window.location.href=route("guest.responsePage",{form_id:this.Question.uuid})},3e3)}}else this.errorResponse=s,errorModal.showModal()},async sendResponseWaHandler(s){try{return await b.post(route("guest.sendMessage",{form_id:this.Question.id}),{phone:s}).then(r=>!0).catch(r=>!1)}catch{return!1}}}},T={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 gap-6"},z={class:"bg-white border card overflow-hidden p-4 grid grid-cols-1 gap-6 shadow-lg"},D={class:"text-xl font-bold"},E={class:"font-thin"},G=t("div",{class:"divider"},null,-1),I={class:"container form-group space-y-1"},W={key:0},Z=["name","onUpdate:modelValue","placeholder"],J={key:1},K=["onInput","name","onUpdate:modelValue"],X={key:2},Y=["name","required","onUpdate:modelValue"],O=["value"],$=["required","name","onUpdate:modelValue","value","id"],ee=["for"],te={key:4},oe=["required","name","onUpdate:modelValue"],se={key:5},re=["required","name","onChange"],ne={key:6,class:"text-sm italic text-red-500"},ae=t("dialog",{id:"successModal",class:"modal"},[t("div",{class:"modal-box"},[t("h3",{class:"font-bold text-lg"},"Success!"),t("p",{class:"py-4"},"Berhasil menyimpan jawaban"),t("div",{class:"modal-action"},[t("form",{method:"dialog"},[t("button",{class:"btn",onClick:()=>{}},"Oke")])])])],-1),le={id:"errorModal",class:"modal"},ie={class:"modal-box"},de=t("h3",{class:"font-bold text-lg"},"Error!",-1),ue=t("p",{class:"py-4"},"Gagal mennyimpan jawaban",-1),ce=t("div",{class:"modal-action"},[t("form",{method:"dialog"},[t("button",{class:"btn"},"Close")])],-1);function pe(s,o,r,i,d,m){const k=v("Head"),V=v("Label");return a(),l(_,null,[y(k,{title:r.formulir.title},null,8,["title"]),t("div",{style:M(d.backgroundStyle),class:"py-12 min-h-screen"},[t("div",T,[t("div",z,[t("p",D,c(r.formulir.title),1),t("p",E,c(r.formulir.description),1),G,(a(!0),l(_,null,w(d.Question.content,(e,f)=>(a(),l("div",{class:"mt-2",key:f},[t("div",I,[y(V,null,{default:U(()=>[F(c(e.kolom),1)]),_:2},1024),e.tipe=="text"?(a(),l("div",W,[h(t("input",{type:"text",name:e.kolom,"onUpdate:modelValue":n=>e.answer=n,class:"input input-bordered w-full",placeholder:e.kolom},null,8,Z),[[g,e.answer]])])):u("",!0),e.tipe=="phone"?(a(),l("div",J,[h(t("input",{type:"text",onInput:n=>m.changePhoneValueHandler(n,f),name:e.kolom,"onUpdate:modelValue":n=>e.answer=n,class:"input input-bordered w-full",placeholder:"8xx-xxxx-xxxx"},null,40,K),[[g,e.answer]])])):u("",!0),e.tipe=="option"?(a(),l("div",X,[h(t("select",{name:e.kolom,required:e.required=="1","onUpdate:modelValue":n=>e.answer=n,class:"select select-bordered w-full",id:""},[(a(!0),l(_,null,w(e.opsi,(n,p)=>(a(),l("option",{value:n.text,key:p},c(n.text),9,O))),128))],8,Y),[[N,e.answer]])])):u("",!0),e.tipe=="multiple"?(a(!0),l(_,{key:3},w(e.opsi,(n,p)=>(a(),l("div",{class:"flex flex-row items-center space-x-2",key:p},[h(t("input",{class:"checkbox",required:e.required=="1",name:e.kolom,"onUpdate:modelValue":q=>e.answer=q,"true-value":[],value:n.text,type:"checkbox",id:p},null,8,$),[[S,e.answer]]),t("label",{for:p},c(n.text),9,ee)]))),128)):u("",!0),e.tipe=="email"?(a(),l("div",te,[h(t("input",{type:"email",required:e.required=="1",name:e.kolom,"onUpdate:modelValue":n=>e.answer=n,class:"input input-bordered w-full"},null,8,oe),[[g,e.answer]])])):u("",!0),e.tipe=="file"?(a(),l("div",se,[t("input",{type:"file",required:e.required=="1",name:e.kolom,onChange:n=>m.inputFileHandler(n,f),class:"input input-bordered w-full"},null,40,re)])):u("",!0),e.required=="1"?(a(),l("span",ne,"*data harus diisi")):u("",!0)])]))),128)),t("button",{onClick:o[0]||(o[0]=(...e)=>m.postAnswerHandler&&m.postAnswerHandler(...e)),class:"btn btn-primary"},"Simpan")])])],4),ae,t("dialog",le,[t("div",ie,[de,ue,t("span",null,c(d.errorResponse),1),ce])])],64)}const ve=R(B,[["render",pe]]);export{ve as default};