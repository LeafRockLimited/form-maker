import{Z as b,i as L,d as g,e as o,o as r,c as I,a as u,w as l,F as k,b as n,n as p,h as c,j as d,f as m,t as P}from"./app-SZU4BLs6.js";import{A as T}from"./AuthenticatedLayout-rLLxBOIS.js";import B from"./InvoiceBelumLunas-D4fjWL9T.js";import U from"./InvoiceDP-92RL7Nuw.js";import M from"./InvoiceLunas-SUyVSpYh.js";import{h as v}from"./moment-WSJ9un1t.js";import{B as H}from"./BottomPopUp-NvXAiL7u.js";import{_ as q}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-cSvSLZ1d.js";import"./ResponsiveNavLink-8D2pvSiE.js";import"./Toast-YEa9XZVH.js";import"./Table-q1WMMtj_.js";import"./ButtonSendMail-cGhDUV0S.js";const z={components:{AuthenticatedLayout:T,Head:b,Link:L,InvoiceBelumLunas:B,InvoiceDP:U,InvoiceLunas:M,BottomPopUp:H},props:{status:String,userId:Number,level:String},data(){return{url_file_path:null,file:null,transaksiDate:new Date,dueDate:new Date,no_invoice:null,s_company_address:null,s_phone_number:null,s_email:null,d_company_address:null,d_phone_number:null,d_email:null,columns:["No","Deskripsi","Qty","Unit","Harga per unit","Diskon","Pajak","Total"],rows:[{description:"",quantity:null,unit:"pcs",price:null,discount:null,tax:null}],statusPopUp:{isOpen:!1,status:"idle",message:null}}},methods:{onFileChange(t){try{const e=t.target.files[0];this.file=e,console.log(this.file);const s=new FileReader;s.onload=_=>{this.fileData=_.target.result},s.readAsDataURL(e),this.url_file_path=URL.createObjectURL(e)}catch(e){console.log(e)}},clearUrl(){this.url=null;const t=document.getElementById("dropzone-file");t.value=""},formatDate(){this.transaksiDate=v(this.transaksiDate).format("YYYY-MM-DD"),this.dueDate=v(this.dueDate).format("YYYY-MM-DD")},addRow(){this.rows.push({description:"",quantity:0,unit:"pcs",price:0,discount:0,tax:0})},deleteRow(t){this.rows.length>1&&this.rows.splice(t,1)},async createHandler(){try{const t={no_invoice:this.no_invoice,transaction_date:this.transaksiDate,due_date:this.dueDate,file:this.file,invoice_name:this.invoice_name,s_company_name:this.s_company_name,s_company_address:this.s_company_address,s_phone_number:this.s_phone_number,s_email:this.s_email,d_company_name:this.d_company_name,d_company_address:this.d_company_address,d_phone_number:this.d_phone_number,d_email:this.d_email,note:this.note,subtotal:this.grandTotal,discount:this.grandTotalDisc,tax:this.grandTotalTax,total:this.grandTotalAll},e=await g.post(route("client.invoice.create"),t,{headers:{"Content-Type":"multipart/form-data"}});console.log(e)}catch(t){console.log(t)}},generatePdf(){try{const t=g.get(route("client.invoice.stream",{}));if(t.status==200){const e=t.data.link;window.open(e,"_blank")}else console.error("Failed to generate PDF")}catch{console.error("Failed to generate PDF")}}},computed:{grandTotal(){return this.rows.reduce((t,e)=>t+e.quantity*e.price,0)},grandTotalDisc(){return this.rows.reduce((t,e)=>t+e.quantity*e.price*(e.discount/100),0)},grandTotalTax(){return this.rows.reduce((t,e)=>t+e.quantity*e.price*(e.tax/100),0)},grandTotalAll(){return this.grandTotal-this.grandTotalDisc+this.grandTotalTax}},mounted(){this.formatDate()},watch:{rows:{deep:!0,handler(t){for(let e of t)e.total=e.quantity*e.price-e.price*(e.discount/100)}}}},A=n("head",{title:"Invoice"},null,-1),C=n("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Invoice",-1),F={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 pt-12 pb-24 sm:py-12"},V=n("p",{class:"font-semibold text-lg"},"Manajemen Faktur",-1),Y={class:"grid grid-flow-row grid-cols-1 gap-6"},N={class:"max-sm:hidden menu space-x-4 menu-horizontal rounded-md"},R=n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 16 16"},[n("path",{fill:"currentColor",d:"m8.746 8l3.1-3.1a.527.527 0 1 0-.746-.746L8 7.254l-3.1-3.1a.527.527 0 1 0-.746.746l3.1 3.1l-3.1 3.1a.527.527 0 1 0 .746.746l3.1-3.1l3.1 3.1a.527.527 0 1 0 .746-.746zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16"})],-1),S=n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 24 24"},[n("path",{fill:"currentColor",d:"M15 16.69V13h1.5v2.82l2.44 1.41l-.75 1.3zM19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.58-1.58c.14.19.3.36.47.53A7.001 7.001 0 0 0 21 11.1V2zM11.1 11c-.6.57-1.07 1.25-1.43 2H6v-2zm-2.03 4c-.07.33-.07.66-.07 1c0 .34 0 .67.07 1H6v-2zM18 9H6V7h12zm2.85 7c0 .64-.12 1.27-.35 1.86c-.26.58-.62 1.14-1.07 1.57c-.43.45-.99.81-1.57 1.07c-.59.23-1.22.35-1.86.35c-2.68 0-4.85-2.17-4.85-4.85c0-1.29.51-2.5 1.42-3.43c.93-.91 2.14-1.42 3.43-1.42c2.67 0 4.85 2.17 4.85 4.85"})],-1),j=n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 24 24"},[n("path",{fill:"currentColor","fill-rule":"evenodd",d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m9.7 2.12l-3.17 3.17c-.39.39-1.03.39-1.42 0l-1.41-1.42a.996.996 0 1 1 1.41-1.41l.71.71l2.47-2.47a.996.996 0 0 1 1.41 0l.01.01c.38.39.38 1.03-.01 1.41"})],-1);function O(t,e,s,_,a,E){const h=o("Link"),f=o("InvoiceBelumLunas"),w=o("InvoiceDP"),y=o("InvoiceLunas"),x=o("BottomPopUp"),D=o("AuthenticatedLayout");return r(),I(k,null,[A,u(D,null,{header:l(()=>[C]),default:l(()=>[n("div",F,[V,n("div",Y,[n("ul",N,[n("li",{class:p(["rounded-md text-neutral-900 bg-white shadow",{"!bg-blue-600 !text-white":s.status.value=="belum_bayar"}])},[u(h,{href:t.route("client.invoice.clientIndex",{_query:{status:"belum_bayar"}})},{default:l(()=>[R,c(" Invoice Belum Dibayar ")]),_:1},8,["href"])],2),n("li",{class:p(["rounded-md text-neutral-900 bg-white shadow",{"!bg-blue-600 !text-white":s.status.value=="dp"}])},[u(h,{href:t.route("client.invoice.clientIndex",{_query:{status:"dp"}})},{default:l(()=>[S,c(" Invoice DP ")]),_:1},8,["href"])],2),n("li",{class:p(["rounded-md text-neutral-900 bg-white shadow",{"!bg-blue-600 !text-white":s.status.value=="lunas"}])},[u(h,{href:t.route("client.invoice.clientIndex",{_query:{status:"lunas"}})},{default:l(()=>[j,c(" Invoice Lunas ")]),_:1},8,["href"])],2)]),s.status.value=="belum_bayar"?(r(),d(f,{key:0,onSending:e[0]||(e[0]=i=>{a.statusPopUp=i}),"user-id":s.userId,level:s.level},null,8,["user-id","level"])):m("",!0),s.status.value=="dp"?(r(),d(w,{key:1,onSending:e[1]||(e[1]=i=>{a.statusPopUp=i}),"user-id":s.userId,level:s.level},null,8,["user-id","level"])):m("",!0),s.status.value=="lunas"?(r(),d(y,{key:2,onSending:e[2]||(e[2]=i=>{a.statusPopUp=i}),"user-id":s.userId,level:s.level},null,8,["user-id","level"])):m("",!0)])]),a.statusPopUp.isOpen?(r(),d(x,{key:0,status:a.statusPopUp.status},{default:l(()=>[c(P(a.statusPopUp.message),1)]),_:1},8,["status"])):m("",!0)]),_:1})],64)}const oe=q(z,[["render",O]]);export{oe as default};
