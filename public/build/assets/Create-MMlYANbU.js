import{Z as U,d as A,e as g,o as r,c as u,a as _,w,F as b,b as e,f as y,t as c,g as o,v as a,r as k,h as D}from"./app-wwOcRcL7.js";import{_ as C}from"./AuthenticatedLayoutAdmin-Aqb9XpU8.js";import{h}from"./moment-WSJ9un1t.js";import{T as R}from"./Toast-ELye1fFR.js";import{_ as I}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ResponsiveNavLink-B53qf5FI.js";const L={components:{AuthenticatedLayoutAdmin:C,Head:U,Toast:R},props:{status:String,no_invoice:String},data(){return{url_file_path:null,file:null,no_invoice:this.no_invoice,transaksiDate:h(),dueDate:h().add(3,"day"),s_company_name:null,s_company_address:null,s_phone_number:null,s_email:null,d_company_name:null,d_company_address:null,d_phone_number:null,d_email:null,note:null,columns:["No","Produk","Deskripsi","Qty","Unit","Harga per unit","Diskon","Pajak","Total"],rows:[{description:"",quantity:0,unit:null,price:0,discount:0,tax:0}]}},methods:{onFileChange(n){try{const t=n.target.files[0];this.file=t,console.log(this.file);const p=new FileReader;p.onload=x=>{this.fileData=x.target.result},p.readAsDataURL(t),this.url_file_path=URL.createObjectURL(t)}catch(t){console.log(t)}},clearUrl(){this.url=null;const n=document.getElementById("dropzone-file");n.value=""},formatDate(){this.transaksiDate=h(this.transaksiDate).format("YYYY-MM-DD"),this.dueDate=h(this.dueDate).format("YYYY-MM-DD")},addRow(){this.rows.push({description:null,quantity:0,unit:null,price:0,discount:0,tax:0})},deleteRow(n){this.rows.length>1&&this.rows.splice(n,1)},async createHandler(){try{const n={status:this.status.value,file:this.file,no_invoice:this.no_invoice,transaksiDate:this.transaksiDate,dueDate:this.dueDate,s_company_name:this.s_company_name,s_company_address:this.s_company_address,s_phone_number:this.s_phone_number,s_email:this.s_email,d_company_name:this.d_company_name,d_company_address:this.d_company_address,d_phone_number:this.d_phone_number,d_email:this.d_email,note:this.note,rows:this.rows,subtotal:this.grandTotal,discount:this.grandTotalDisc,tax:this.grandTotalTax,total:this.grandTotalAll},t=await A.post(route("panel.invoice.store"),n,{headers:{"Content-Type":"multipart/form-data"}}).then(p=>p);if(console.log(t.status),t.status==200){this.$refs.toast.show("success","Berhasil membuat faktur!","Data yang anda telah disimpan"),window.location.href=route("panel.invoice.index");return}else this.$refs.toast.show("error","Gagal membuat faktur!","Terjadi kesalahan membuat faktur");setTimeout(()=>{this.$refs.toast.hide()},3e3);return}catch{this.$refs.toast.show("error","Gagal membuat faktur!","Terjadi kesalahan membuat faktur"),setTimeout(()=>{this.$refs.toast.hide()},3e3)}}},computed:{grandTotal(){return this.rows.reduce((n,t)=>n+t.quantity*t.price,0)},grandTotalDisc(){return this.rows.reduce((n,t)=>n+t.quantity*t.price*(t.discount/100),0)},grandTotalTax(){return this.rows.reduce((n,t)=>n+t.quantity*t.price*(t.tax/100),0)},grandTotalAll(){return this.grandTotal-this.grandTotalDisc+this.grandTotalTax}},mounted(){this.formatDate()},watch:{rows:{deep:!0,handler(n){for(let t of n)t.total=t.quantity*t.price-t.price*(t.discount/100)+t.price*(t.tax/100)}}}},N=e("head",{title:"Invoice"},null,-1),j=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Invoice",-1),S={class:"relative py-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 gap-6"},P={class:"card bg-white p-4 shadow grid grid-cols-1 gap-6"},Y={class:"grid grid-cols-2 gap-4"},B={key:0,for:"dropzone-file",class:"cursor-pointer flex flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white py-5 text-center min-h-40"},H=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",fill:"none",viewBox:"0 0 448 512",stroke:"blue","stroke-width":"6"},[e("path",{d:"M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"})],-1),M=e("p",{class:"mt-5 text-gray-500 tracking-wide"},[D("Upload logo Anda di sini "),e("br"),D(" (format jpg, jpeg, png, svg)")],-1),F={id:"preview",class:"flex gap-4"},z=["src"],E={class:"w-full flex flex-col justify-start items-end space-y-2"},K={class:"text-3xl font-semibold"},G={class:"grid grid-cols-2 grid-flow-col-dense gap-4"},J={class:"flex"},O=e("p",{class:"w-1/4 pt-3"},"Dari",-1),Q={class:"w-3/4"},Z={class:"grid grid-cols-2 gap-2 grid-rows-4"},W=e("p",{class:"my-auto"},"No Invoice",-1),X=e("p",{class:"my-auto"},"Tanggal Transaksi",-1),$=e("p",{class:"my-auto"},"Tanggal Jatuh Tempo",-1),ee=e("hr",null,null,-1),te={class:"grid grid-cols-2 grid-flow-col-dense gap-4"},le={class:"flex"},se=e("p",{class:"w-1/4 pt-3"},"Kepada",-1),ne={class:"w-3/4"},oe={class:"w-3/4 justify-self-end grid grid-rows-2 grid-flow-row-dense"},ae={class:"overflow-x-auto border p-2 rounded"},de={class:"border-separate border-spacing-2"},ie=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],pe={class:"flex"},me=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-l-lg my-auto"},"Rp ",-1),_e=["onUpdate:modelValue"],he={class:"flex"},ge=["onUpdate:modelValue"],be=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-r-lg my-auto"},"%",-1),ye={class:"flex pt-3"},xe={class:"flex"},fe=["onUpdate:modelValue"],ve=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-r-lg my-auto"},"%",-1),we={class:"flex"},ke=e("label",{class:"min-w-10 p-2 min-h-15 text-black border rounded-l-lg my-auto"},"Rp ",-1),De=["onUpdate:modelValue"],Ve=["onClick"],Te=e("span",null,"-",-1),Ue=[Te],Ae={class:"grid grid-cols-2 gap-2"},Ce=e("b",null,"Catatan :",-1),Re=e("br",null,null,-1),Ie={class:"grid grid-rows"},Le={class:"grid grid-cols-2 pr-3"},Ne=e("b",null,"Subtotal",-1),je={class:"text-right font-bold"},Se=e("p",null,"Diskon",-1),qe={class:"text-right"},Pe=e("p",null,"Pajak",-1),Ye={class:"text-right"},Be=e("hr",null,null,-1),He={class:"grid grid-cols-2 mt-2"},Me=e("b",null,"Total",-1),Fe={class:"text-right"},ze=e("hr",null,null,-1),Ee={class:"flex justify-end gap-4"};function Ke(n,t,p,x,s,i){const f=g("vue-date-picker"),V=g("Toast"),T=g("AuthenticatedLayoutAdmin");return r(),u(b,null,[N,_(T,null,{header:w(()=>[j]),default:w(()=>{var v;return[e("div",S,[e("div",q,[e("div",P,[e("div",Y,[e("div",null,[s.url_file_path?y("",!0):(r(),u("label",B,[H,M,e("input",{id:"dropzone-file",type:"file",class:"hidden",onChange:t[0]||(t[0]=(...l)=>i.onFileChange&&i.onFileChange(...l))},null,32)])),e("div",F,[s.url_file_path?(r(),u("img",{key:0,class:"max-h-40",src:s.url_file_path},null,8,z)):y("",!0),s.url_file_path?(r(),u("button",{key:1,class:"rounded-lg btn btn-outline btn-error",onClick:t[1]||(t[1]=(...l)=>i.clearUrl&&i.clearUrl(...l))},"x")):y("",!0)])]),e("div",E,[e("p",K,c(p.status.text),1)])]),e("div",G,[e("div",J,[O,e("div",Q,[o(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>s.s_company_name=l),placeholder:"Nama Perusahaan Anda *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_company_name]]),o(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>s.s_company_address=l),placeholder:"Alamat Perusahaan Anda *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_company_address]]),o(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=l=>s.s_phone_number=l),placeholder:"No telepon *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_phone_number]]),o(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=l=>s.s_email=l),placeholder:"Alamat Email *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.s_email]])])]),e("div",Z,[W,o(e("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=l=>s.no_invoice=l),placeholder:"001/INV/01/2021",class:"input input-bordered"},null,512),[[a,s.no_invoice]]),X,_(f,{id:"date",modelValue:s.transaksiDate,"onUpdate:modelValue":t[7]||(t[7]=l=>s.transaksiDate=l),placeholder:"dd/mm/yyyy"},null,8,["modelValue"]),$,_(f,{id:"date",modelValue:s.dueDate,"onUpdate:modelValue":t[8]||(t[8]=l=>s.dueDate=l),placeholder:"dd/mm/yyyy"},null,8,["modelValue"])])]),ee,e("div",te,[e("div",le,[se,e("div",ne,[o(e("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=l=>s.d_company_name=l),placeholder:"Nama Perusahaan *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.d_company_name]]),o(e("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=l=>s.d_company_address=l),placeholder:"Alamat Perusahaan *",class:"input input-bordered w-full mb-2"},null,512),[[a,s.d_company_address]])])]),e("div",oe,[o(e("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=l=>s.d_phone_number=l),placeholder:"No Telepon *",class:"input input-bordered"},null,512),[[a,s.d_phone_number]]),o(e("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=l=>s.d_email=l),placeholder:"Alamat Email *",class:"input input-bordered"},null,512),[[a,s.d_email]])])]),e("div",ae,[e("table",de,[e("thead",null,[e("tr",null,[(r(!0),u(b,null,k(s.columns,(l,m)=>(r(),u("th",{key:m},c(l),1))),128))])]),e("tbody",null,[(r(!0),u(b,null,k(s.rows,(l,m)=>(r(),u("tr",{key:m,class:"divide-y"},[e("td",null,c(m+1),1),e("td",null,[o(e("textarea",{class:"textarea textarea-bordered rounded-lg max-h-5 mt-2","onUpdate:modelValue":d=>l.produk=d,placeholder:"Ketik produk di sini"},null,8,ie),[[a,l.produk]])]),e("td",null,[o(e("textarea",{class:"textarea textarea-bordered rounded-lg max-h-5 mt-2","onUpdate:modelValue":d=>l.description=d,placeholder:"Ketik deskripsi di sini"},null,8,re),[[a,l.description]])]),e("td",null,[o(e("input",{class:"max-w-24 rounded-lg text-center border-inherit",type:"number","onUpdate:modelValue":d=>l.quantity=d,placeholder:"0"},null,8,ue),[[a,l.quantity,void 0,{number:!0}]])]),e("td",null,[o(e("input",{class:"max-w-24 rounded-lg text-center border-inherit",type:"text","onUpdate:modelValue":d=>l.unit=d,placeholder:"pcs"},null,8,ce),[[a,l.unit]])]),e("td",null,[e("div",pe,[me,o(e("input",{type:"number",class:"max-w-40 border-inherit rounded-r-lg text-end","onUpdate:modelValue":d=>l.price=d,placeholder:"0"},null,8,_e),[[a,l.price,void 0,{number:!0}]])])]),e("td",null,[e("div",he,[o(e("input",{class:"max-w-24 border-inherit rounded-l-lg text-end",type:"number","onUpdate:modelValue":d=>l.discount=d,placeholder:"0"},null,8,ge),[[a,l.discount]]),be])]),e("td",ye,[e("div",xe,[o(e("input",{class:"max-w-24 border-inherit rounded-l-lg text-end",type:"number","onUpdate:modelValue":d=>l.tax=d,placeholder:"0"},null,8,fe),[[a,l.tax,void 0,{number:!0}]]),ve])]),e("td",null,[e("div",we,[ke,o(e("input",{type:"number",class:"max-w-40 border-inherit rounded-r-lg text-end","onUpdate:modelValue":d=>l.total=d,placeholder:"0",disabled:""},null,8,De),[[a,l.total,void 0,{number:!0}]])])]),e("td",null,[e("button",{onClick:d=>i.deleteRow(m),class:"rounded-full btn btn-outline min-w-4 max-w-4 min-h-1 max-h-7"},Ue,8,Ve)])]))),128))])])]),e("button",{onClick:t[13]||(t[13]=(...l)=>i.addRow&&i.addRow(...l)),class:"btn btn-outline btn-primary w-1/6"},"+ Tambah Baris"),e("div",Ae,[e("div",null,[Ce,Re,o(e("textarea",{"onUpdate:modelValue":t[14]||(t[14]=l=>s.note=l),class:"textarea text-black textarea-bordered min-h-5 max-h-24 w-full",placeholder:"Ketik catatan Anda di sini"},null,512),[[a,s.note]])]),e("div",Ie,[e("div",Le,[Ne,e("span",je,c(i.grandTotal.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1),Se,e("span",qe,"( "+c(i.grandTotalDisc.toLocaleString("id-ID",{style:"currency",currency:"IDR"}))+" )",1),Pe,e("span",Ye,c(i.grandTotalTax.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)]),Be,e("div",He,[Me,e("span",Fe,[e("b",null,c(i.grandTotalAll.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)])])])]),ze,e("div",Ee,[e("button",{type:"button",class:"btn btn-primary",onClick:t[15]||(t[15]=(...l)=>i.createHandler&&i.createHandler(...l))},"Simpan")])])]),_(V,{class:"bottom-0",ref:"toast",status:"error",title:"Tidak ada layanan!",message:((v=n.errors)==null?void 0:v.message)??null},null,8,["message"])])]}),_:1})],64)}const Xe=I(L,[["render",Ke]]);export{Xe as default};