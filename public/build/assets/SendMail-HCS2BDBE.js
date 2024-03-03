import{d as g,e as d,o as u,j as p,w as m,b as t,h as c,g as n,v as i,f as w}from"./app-IyjCCclX.js";import _ from"./Layout-ZdtwkYZF.js";import{B as v}from"./BottomPopUp-M5NHWYGV.js";import{_ as b}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./AuthenticatedLayoutAdmin-DkFPJx0z.js";import"./ResponsiveNavLink-k9mzvuMU.js";import"./AuthenticatedLayout-a6k-4YBz.js";import"./ApplicationLogo-qLvYHbAH.js";import"./Toast-0ytJGTRP.js";const k={components:{LayoutMailVue:_,BottomPopUp:v},props:{data:Array,file_path:String,userRole:String},data(){return{emailTo:"",subject:"",content:"",state:"init",statusMessage:""}},watch:{state(o){o=="loading"?this.statusMessage='<svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-blue-500" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"/></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"/></path></g></svg>Loading':o=="error"?this.statusMessage=`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
                Error, Gagal mengirim email`:this.statusMessage=null}},methods:{async postMailHandler(){let o;switch(this.userRole){case"admin":o=route("panel.mail.sendInvoice");break;case"client":o=route("client.mail.sendInvoice");break}const e=new FormData;e.append("id",this.data.id),e.append("from_name",this.data.s_company_name),e.append("from_email",this.data.s_email),e.append("recipient",this.emailTo),e.append("subject",this.subject),e.append("content",this.content);try{let r;r=await g.post(o,e),this.state="loading",setTimeout(()=>{window.location.href=route(this.userRole=="admin"?"panel.invoice.index":"client.invoice.clientIndex")},3e3)}catch(r){this.statusMessage=r.response.data.message,console.log(this.statusMessage),this.state="error",setTimeout(()=>{this.state="init"},3e3)}}}},M={class:"grid grid-cols-1 gap-6 bg-white card p-6 m-6"},x=t("span",null,"Kirim Email",-1),T=t("hr",null,null,-1),y={class:"input input-bordered flex items-center gap-2 max-w-sm"},q={class:"form-group w-full"},C={class:"form-group w-full"},B={class:"button-container"},V=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"})],-1),j=["innerHTML"];function L(o,e,r,N,s,l){const h=d("BottomPopUp"),f=d("LayoutMailVue");return u(),p(f,{"user-role":r.userRole},{default:m(()=>[t("div",M,[x,T,t("label",y,[c(" Kepada "),n(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.emailTo=a),type:"text",class:"grow outline-none border-none focus:border-none focus:outline-none",placeholder:"daisy@site.com"},null,512),[[i,s.emailTo]])]),t("div",q,[n(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.subject=a),type:"text",class:"input input-bordered w-full",placeholder:"Subjek"},null,512),[[i,s.subject]])]),t("div",C,[n(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.content=a),class:"textarea w-full bg-neutral-50",id:"",cols:"30",rows:"10",placeholder:"Konten"},null,512),[[i,s.content]])]),t("div",B,[t("button",{onClick:e[3]||(e[3]=(...a)=>l.postMailHandler&&l.postMailHandler(...a)),class:"btn btn-primary"},[V,c(" Kirim ")])])]),s.state!="init"?(u(),p(h,{key:0},{default:m(()=>[t("div",{innerHTML:s.statusMessage},null,8,j)]),_:1})):w("",!0)]),_:1},8,["user-role"])}const E=b(k,[["render",L]]);export{E as default};
