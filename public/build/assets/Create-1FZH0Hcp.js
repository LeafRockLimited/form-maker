import{Z as U,d as A,e as g,o as r,c as u,a as _,w,F as b,b as e,f as y,g as o,v as a,r as k,t as c,h as D}from"./app-SZU4BLs6.js";import{A as C}from"./AuthenticatedLayout-rLLxBOIS.js";import{h}from"./moment-WSJ9un1t.js";import{T as I}from"./Toast-YEa9XZVH.js";import{_ as R}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-cSvSLZ1d.js";import"./ResponsiveNavLink-8D2pvSiE.js";const L={components:{AuthenticatedLayout:C,Head:U,Toast:I},props:{status:String,no_invoice:String},data(){return{url_file_path:null,file:null,no_invoice:this.no_invoice,transaksiDate:h(),dueDate:h().add(3,"day"),s_company_name:null,s_company_address:null,s_phone_number:null,s_email:null,d_company_name:null,d_company_address:null,d_phone_number:null,d_email:null,note:null,columns:["No","Produk","Deskripsi","Qty","Unit","Harga per unit","Diskon","Pajak","Total"],rows:[{description:"",quantity:0,unit:null,price:0,discount:0,tax:0}]}},methods:{onFileChange(n){try{const t=n.target.files[0];this.file=t,console.log(this.file);const p=new FileReader;p.onload=x=>{this.fileData=x.target.result},p.readAsDataURL(t),this.url_file_path=URL.createObjectURL(t)}catch(t){console.log(t)}},clearUrl(){this.url_file_path=null;const n=document.getElementById("dropzone-file");n.value=""},formatDate(){this.transaksiDate=h(this.transaksiDate).format("YYYY-MM-DD"),this.dueDate=h(this.dueDate).format("YYYY-MM-DD")},addRow(){this.rows.push({description:null,quantity:0,unit:null,price:0,discount:0,tax:0})},deleteRow(n){this.rows.length>1&&this.rows.splice(n,1)},async createHandler(){try{const n={status:this.status.value,file:this.file,no_invoice:this.no_invoice,transaksiDate:this.transaksiDate,dueDate:this.dueDate,s_company_name:this.s_company_name,s_company_address:this.s_company_address,s_phone_number:this.s_phone_number,s_email:this.s_email,d_company_name:this.d_company_name,d_company_address:this.d_company_address,d_phone_number:this.d_phone_number,d_email:this.d_email,note:this.note,rows:this.rows,subtotal:this.grandTotal,discount:this.grandTotalDisc,tax:this.grandTotalTax,total:this.grandTotalAll},t=await A.post(route("client.invoice.store"),n,{headers:{"Content-Type":"multipart/form-data"}}).then(p=>p);this.$refs.toast.show("success","Berhasil membuat faktur!","Data yang anda telah disimpan"),window.location.href=route("client.invoice.clientIndex"),setTimeout(()=>{this.$refs.toast.hide()},3e3);return}catch(n){console.log(n),this.$refs.toast.show("error","Gagal membuat faktur!","Terjadi kesalahan membuat faktur"),setTimeout(()=>{this.$refs.toast.hide()},3e3)}}},computed:{grandTotal(){return this.rows.reduce((n,t)=>n+t.quantity*t.price,0)},grandTotalDisc(){return this.rows.reduce((n,t)=>n+t.quantity*t.price*(t.discount/100),0)},grandTotalTax(){return this.rows.reduce((n,t)=>n+t.quantity*t.price*(t.tax/100),0)},grandTotalAll(){return this.grandTotal-this.grandTotalDisc+this.grandTotalTax}},mounted(){this.formatDate()},watch:{rows:{deep:!0,handler(n){for(let t of n)t.total=t.quantity*t.price-t.price*(t.discount/100)+t.price*(t.tax/100)}}}},N=e("head",{title:"Invoice"},null,-1),S=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Invoice",-1),j={class:"relative py-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 gap-6"},P={class:"card bg-white p-4 shadow grid grid-cols-1 gap-6"},Y={class:"grid lg:grid-cols-2 gap-4"},B={class:"w-full"},H={key:0,for:"dropzone-file",class:"lg:order-first sm:order-last cursor-pointer flex flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white py-5 text-center min-h-40"},M=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",fill:"none",viewBox:"0 0 448 512",stroke:"blue","stroke-width":"6"},[e("path",{d:"M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"})],-1),F=e("p",{class:"mt-5 text-gray-500 tracking-wide"},[D("Upload logo Anda di sini "),e("br"),D(" (format jpg, jpeg, png, svg)")],-1),z={id:"preview",class:"flex gap-4"},E=["src"],K={class:"grid lg:grid-cols-2 lg:grid-flow-col-dense gap-4"},G={class:"lg:flex"},J=e("p",{class:"lg:w-1/4 pt-3"},"Dari",-1),O={class:"lg:w-3/4"},Q={class:"grid lg:grid-cols-2 gap-2 lg:grid-rows-4"},Z=e("p",{class:"my-auto"},"No Invoice",-1),W=e("p",{class:"my-auto"},"Tanggal Transaksi",-1),X=e("p",{class:"my-auto"},"Tanggal Jatuh Tempo",-1),$=e("hr",null,null,-1),ee={class:"grid lg:grid-cols-2 lg:grid-flow-col-dense sm:gap-2 lg:gap-4"},te={class:"lg:flex"},le=e("p",{class:"lg:w-1/4 pt-3"},"Kepada",-1),se={class:"lg:w-3/4"},ne={class:"lg:w-3/4 lg:justify-self-end grid lg:grid-rows-2 lg:grid-flow-row-dense gap-2"},oe={class:"overflow-x-auto border p-2 rounded"},ae={class:"border-separate border-spacing-2"},de=["onUpdate:modelValue"],ie=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],ce={class:"flex"},pe=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-l-lg my-auto"},"Rp ",-1),me=["onUpdate:modelValue"],_e={class:"flex"},he=["onUpdate:modelValue"],ge=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-r-lg my-auto"},"%",-1),be={class:"flex pt-3"},ye={class:"flex"},xe=["onUpdate:modelValue"],fe=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-r-lg my-auto"},"%",-1),ve={class:"flex"},we=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-l-lg my-auto"},"Rp ",-1),ke=["onUpdate:modelValue"],De=["onClick"],Ve=e("span",null,"-",-1),Te=[Ve],Ue={class:"grid lg:grid-cols-2 gap-2"},Ae=e("b",null,"Catatan :",-1),Ce=e("br",null,null,-1),Ie={class:"grid grid-rows"},Re={class:"grid grid-cols-2 pr-3"},Le=e("b",null,"Subtotal",-1),Ne={class:"text-right font-bold"},Se=e("p",null,"Diskon",-1),je={class:"text-right"},qe=e("p",null,"Pajak",-1),Pe={class:"text-right"},Ye=e("hr",null,null,-1),Be={class:"grid grid-cols-2 mt-2"},He=e("b",null,"Total",-1),Me={class:"text-right"},Fe=e("hr",null,null,-1),ze={class:"flex justify-end gap-4"};function Ee(n,t,p,x,s,i){const f=g("vue-date-picker"),V=g("Toast"),T=g("AuthenticatedLayout");return r(),u(b,null,[N,_(T,null,{header:w(()=>[S]),default:w(()=>{var v;return[e("div",j,[e("div",q,[e("div",P,[e("div",Y,[e("div",B,[s.url_file_path?y("",!0):(r(),u("label",H,[M,F,e("input",{id:"dropzone-file",type:"file",class:"hidden",onChange:t[0]||(t[0]=(...l)=>i.onFileChange&&i.onFileChange(...l))},null,32)])),e("div",z,[s.url_file_path?(r(),u("img",{key:0,class:"max-h-40",src:s.url_file_path},null,8,E)):y("",!0),s.url_file_path?(r(),u("button",{key:1,class:"rounded-lg btn btn-outline btn-error",onClick:t[1]||(t[1]=(...l)=>i.clearUrl&&i.clearUrl(...l))},"x")):y("",!0)])])]),e("div",K,[e("div",G,[J,e("div",O,[o(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>s.s_company_name=l),placeholder:"Nama Perusahaan Anda *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_company_name]]),o(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>s.s_company_address=l),placeholder:"Alamat Perusahaan Anda *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_company_address]]),o(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=l=>s.s_phone_number=l),placeholder:"No telepon *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_phone_number]]),o(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=l=>s.s_email=l),placeholder:"Alamat Email *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_email]])])]),e("div",Q,[Z,o(e("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=l=>s.no_invoice=l),placeholder:"001/INV/01/2021",class:"input input-bordered"},null,512),[[a,s.no_invoice]]),W,_(f,{id:"date",modelValue:s.transaksiDate,"onUpdate:modelValue":t[7]||(t[7]=l=>s.transaksiDate=l),placeholder:"dd/mm/yyyy"},null,8,["modelValue"]),X,_(f,{id:"date",modelValue:s.dueDate,"onUpdate:modelValue":t[8]||(t[8]=l=>s.dueDate=l),placeholder:"dd/mm/yyyy"},null,8,["modelValue"])])]),$,e("div",ee,[e("div",te,[le,e("div",se,[o(e("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=l=>s.d_company_name=l),placeholder:"Nama Perusahaan *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.d_company_name]]),o(e("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=l=>s.d_company_address=l),placeholder:"Alamat Perusahaan *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.d_company_address]])])]),e("div",ne,[o(e("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=l=>s.d_phone_number=l),placeholder:"No Telepon *",class:"input input-bordered"},null,512),[[a,s.d_phone_number]]),o(e("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=l=>s.d_email=l),placeholder:"Alamat Email *",class:"input input-bordered"},null,512),[[a,s.d_email]])])]),e("div",oe,[e("table",ae,[e("thead",null,[e("tr",null,[(r(!0),u(b,null,k(s.columns,(l,m)=>(r(),u("th",{key:m},c(l),1))),128))])]),e("tbody",null,[(r(!0),u(b,null,k(s.rows,(l,m)=>(r(),u("tr",{key:m,class:"divide-y"},[e("td",null,c(m+1),1),e("td",null,[o(e("textarea",{class:"textarea textarea-bordered rounded-lg max-h-5 mt-2","onUpdate:modelValue":d=>l.produk=d,placeholder:"Ketik produk di sini"},null,8,de),[[a,l.produk]])]),e("td",null,[o(e("textarea",{class:"textarea textarea-bordered rounded-lg max-h-5 mt-2","onUpdate:modelValue":d=>l.description=d,placeholder:"Ketik deskripsi di sini"},null,8,ie),[[a,l.description]])]),e("td",null,[o(e("input",{class:"max-w-24 rounded-lg text-center border-inherit",type:"number","onUpdate:modelValue":d=>l.quantity=d,placeholder:"0"},null,8,re),[[a,l.quantity,void 0,{number:!0}]])]),e("td",null,[o(e("input",{class:"max-w-24 rounded-lg text-center border-inherit",type:"text","onUpdate:modelValue":d=>l.unit=d,placeholder:"pcs"},null,8,ue),[[a,l.unit]])]),e("td",null,[e("div",ce,[pe,o(e("input",{type:"number",class:"max-w-40 border-inherit rounded-r-lg text-end","onUpdate:modelValue":d=>l.price=d,placeholder:"0"},null,8,me),[[a,l.price,void 0,{number:!0}]])])]),e("td",null,[e("div",_e,[o(e("input",{class:"max-w-24 border-inherit rounded-l-lg text-end",type:"number","onUpdate:modelValue":d=>l.discount=d,placeholder:"0"},null,8,he),[[a,l.discount]]),ge])]),e("td",be,[e("div",ye,[o(e("input",{class:"max-w-24 border-inherit rounded-l-lg text-end",type:"number","onUpdate:modelValue":d=>l.tax=d,placeholder:"0"},null,8,xe),[[a,l.tax,void 0,{number:!0}]]),fe])]),e("td",null,[e("div",ve,[we,o(e("input",{type:"number",class:"max-w-40 border-inherit rounded-r-lg text-end","onUpdate:modelValue":d=>l.total=d,placeholder:"0",disabled:""},null,8,ke),[[a,l.total,void 0,{number:!0}]])])]),e("td",null,[e("button",{onClick:d=>i.deleteRow(m),class:"rounded-full btn btn-outline min-w-4 max-w-4 min-h-1 max-h-7"},Te,8,De)])]))),128))])])]),e("button",{onClick:t[13]||(t[13]=(...l)=>i.addRow&&i.addRow(...l)),class:"btn btn-outline btn-primary lg:w-1/6"},"+ Tambah Baris"),e("div",Ue,[e("div",null,[Ae,Ce,o(e("textarea",{"onUpdate:modelValue":t[14]||(t[14]=l=>s.note=l),class:"textarea text-black textarea-bordered min-h-5 max-h-24 w-full",placeholder:"Ketik catatan Anda di sini"},null,512),[[a,s.note]])]),e("div",Ie,[e("div",Re,[Le,e("span",Ne,c(i.grandTotal.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1),Se,e("span",je,"( "+c(i.grandTotalDisc.toLocaleString("id-ID",{style:"currency",currency:"IDR"}))+" )",1),qe,e("span",Pe,c(i.grandTotalTax.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)]),Ye,e("div",Be,[He,e("span",Me,[e("b",null,c(i.grandTotalAll.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)])])])]),Fe,e("div",ze,[e("button",{type:"button",class:"btn btn-primary",onClick:t[15]||(t[15]=(...l)=>i.createHandler&&i.createHandler(...l))},"Simpan")])])]),_(V,{class:"bottom-0",ref:"toast",status:"error",title:"Tidak ada layanan!",message:((v=n.errors)==null?void 0:v.message)??null},null,8,["message"])])]}),_:1})],64)}const Xe=R(L,[["render",Ee]]);export{Xe as default};
