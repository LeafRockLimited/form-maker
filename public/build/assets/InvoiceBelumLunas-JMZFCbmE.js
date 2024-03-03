import{Z as M,i as C,d as h,e as p,o as r,c,b as e,a as g,w as _,g as v,k as x,F as f,r as m,f as k,v as B,t as o,h as y,l as H,j,n as S}from"./app-IyjCCclX.js";import{T as V}from"./Table-zmA-516z.js";import{h as L}from"./moment-WSJ9un1t.js";import{T as z}from"./Toast-0ytJGTRP.js";import{B as O}from"./ButtonSendMail-aX4oaC75.js";import{_ as P}from"./_plugin-vue_export-helper-x3n3nnut.js";const G={components:{TableVue:V,Head:M,Link:C,Toast:z,ButtonSendMail:O},props:{userId:Number,level:String},data(){return{invoiceData:[],length:10,selectedInvoice:[],search:null,selectedStatus:null,status:"idle"}},mounted(){this.fetchInvoice()},watch:{length(){this.fetchInvoice()},search(a){a!=null&&a!=""&&this.fetchInvoice()}},methods:{changePageHandler(a){let t=new URL(a);t.searchParams.set("length",this.length),t.searchParams.set("user_id",this.userId),this.fetchInvoice(t.href)},async fetchInvoice(a){let t;a?t=a:t=route("panel.invoice.fetchInvoice",{_query:{status:"belum_bayar",length:this.length,search:this.search,user_id:this.userId}});try{const d=await h.get(t).then(l=>l).catch(l=>{console.log(l)});d.status==200&&(this.invoiceData=d.data,this.invoiceData.data=this.invoiceData.data.map(l=>(l.total=parseFloat(l.total).toLocaleString("id-ID",{style:"currency",currency:"IDR"}),l.tanggal_invoice=L(l.created_at).format("DD-MM-YYYY"),console.log(l),l)))}catch{}},async massDeleteHandler(){try{(await h.post(route("panel.invoice.destroy"),{list:this.selectedInvoice}).catch(t=>{console.log(t)})).status==200&&(this.fetchInvoice(),this.selectedInvoice=[],this.$refs.toast.show("success","Behasil menghapus faktur yang dipilih",""),setTimeout(()=>{this.$refs.toast.hide()},5e3))}catch{this.$refs.toast.show("error","Gagal menghapus faktur yang dipilih",""),setTimeout(()=>{this.$refs.toast.hide()},5e3)}},async updateStatusHandler(){try{(await h.post(route("panel.invoice.update"),{listId:this.selectedInvoice,status:this.selectedStatus})).status==200?(this.selectedInvoice=[],this.fetchInvoice(),this.$refs.toast.show("success","Behasil mengubah status faktur","buka tab status"),setTimeout(()=>{this.$refs.toast.hide()},5e3)):(this.$refs.toast.show("error","Gagal mengubah status faktur","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide()},5e3))}catch{this.$refs.toast.show("error","Gagal mengubah status faktur","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide()},5e3)}},async sendWhastappMedia(a){try{this.$emit("sending",{isOpen:!0,status:"loading",message:"Mengirim pesan ke tujuan"}),await h.get(route("panel.invoice.sendMedia",{id:a.id,number:a.d_phone_number})).then(t=>{this.$emit("sending",{isOpen:!1}),this.$refs.toast.show("success","Behasil mengirim faktur ke wa tujuan","konfirmasi pada nomor tujuan bahwa faktur telah dikirimkan"),setTimeout(()=>{this.$refs.toast.hide()},5e3)}).catch(t=>{this.$emit("sending",{isOpen:!0,status:"error",message:"Gagal mengirim pesan ke tujuan"}),this.$refs.toast.show("error","Gagal mengirim faktur ke wa tujuan","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide(),this.$emit("sending",{isOpen:!1})},5e3)})}catch{this.$emit("sending",{isOpen:!0,status:"error",message:"Gagal mengirim pesan ke tujuan"}),this.$refs.toast.show("error","Gagal mengirim faktur ke wa tujuan","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide(),this.$emit("sending",{isOpen:!1})},5e3)}},async sendMailMedia(a){this.$emit("sending",{isOpen:!0,status:"loading",message:"Mengirim email ke tujuan"});try{(await h.post(route("panel.mail.sendInvoice"),{id:a.id,from_name:a.s_company_name,from_email:a.s_email,recipient:a.d_email,subject:"noreply",content:"Lampiran Faktur"})).status=="200"&&setTimeout(()=>{this.$emit("sending",{isOpen:!0,status:"success",message:"Berhasil mengirim email ke tujuan"},1e3)})}catch{setTimeout(()=>{this.$emit("sending",{isOpen:!0,status:"error",message:"Gagal mengirim email ke tujuan"})},1e3)}setTimeout(()=>{this.$emit("sending",{isOpen:!1})},5e3)}}},N={class:"grid grid-cols-1 w-full gap-6 col-span-3"},U={class:"card bg-white p-6 grid grid-cols-1 gap-6"},$=e("p",{class:"font-semibold"},"Belum bayar",-1),q={class:"container"},F=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"})],-1),Y={class:"container filter-container flex flex-row justify-between"},A={class:"inline-flex space-x-1"},W=e("option",{value:"10"},"10",-1),R=["value","hidden"],E={key:0,class:"w-full inline-flex px-2 space-x-4"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"})],-1),K=[J],Z=e("div",{class:"divider divider-horizontal"},null,-1),Q={class:"inline-flex space-x-2"},X=e("option",{value:"dp",selected:""},"DP",-1),ee=e("option",{value:"lunas"},"Lunas",-1),se=[X,ee],te={class:"inline-flex space-x-2"},ae={class:"container grid grid-cols-1 gap-6"},ne=e("thead",null,[e("tr",null,[e("th"),e("th",null,"No."),e("th",null,"Nomor Invoice"),e("th"),e("th",null,"Dari"),e("th"),e("th",null,"Kepada"),e("th",null,"Tanggal Dibuat"),e("th",null,"Jumlah Item"),e("th",null,"Total Harus Dibayar"),e("th")])],-1),oe=["value"],le={class:"inline-flex space-x-2"},ie=["onClick"],re=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-primary",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"})],-1),ce=[re],ue=e("div",{class:"divider divider-horizontal"},null,-1),de=["href"],he=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-orange-400",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"})],-1),pe=[he],ge=["href"],_e=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-orange-600",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"})],-1),ve=[_e],fe={class:"flex flex-col"},me={class:"font-semibold"},we={class:"text-gray-500"},be=e("td",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6",viewBox:"0 0 50 50"},[e("path",{fill:"currentColor",d:"M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"}),e("path",{fill:"currentColor",d:"m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"}),e("path",{fill:"currentColor",d:"M16 24h17v2H16z"})])],-1),xe={class:"flex flex-col"},ke={class:"font-semibold text-blue-600"},ye={class:"text-gray-500"},Ie={class:"w-full sm:flex sm:flex-row sm:justify-between grid grid-cols-1 gap-4"},Te={class:"max-sm:hidden join w-fit"},De=["onClick","innerHTML"],Me={class:"w-full join sm:hidden justify-center"};function Ce(a,t,d,l,n,i){const w=p("Link"),I=p("ButtonSendMail"),T=p("TableVue"),D=p("Toast");return r(),c(f,null,[e("div",N,[e("div",U,[$,e("div",q,[g(w,{href:a.route("panel.invoice.create",{_query:{status:"belum_bayar"}}),class:"btn btn-md btn-primary float-end"},{default:_(()=>[F,y(" Buat Invoice ")]),_:1},8,["href"])]),e("div",Y,[e("div",A,[v(e("select",{class:"select select-bordered w-fit max-w-xs","onUpdate:modelValue":t[0]||(t[0]=s=>n.length=s)},[W,(r(),c(f,null,m(100,(s,u)=>e("option",{value:s,hidden:s%25!=0,key:u},o(s),9,R)),64))],512),[[x,n.length]])]),n.selectedInvoice.length>0?(r(),c("div",E,[e("button",{class:"btn tooltip",onClick:t[1]||(t[1]=(...s)=>i.massDeleteHandler&&i.massDeleteHandler(...s)),"data-tip":"hapus data"},K),Z,e("div",Q,[v(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>n.selectedStatus=s),class:"select select-bordered w-full max-w-xs"},se,512),[[x,n.selectedStatus]]),e("button",{onClick:t[3]||(t[3]=(...s)=>i.updateStatusHandler&&i.updateStatusHandler(...s)),class:"btn bg-emerald-500 text-white"},"Ubah status")])])):k("",!0),e("div",te,[v(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>n.search=s),type:"text",name:"",class:"input input-bordered input-md w-full max-w-xs",placeholder:"Search..."},null,512),[[B,n.search]])])]),e("div",ae,[g(T,null,{header:_(()=>[ne]),body:_(()=>[e("tbody",null,[(r(!0),c(f,null,m(n.invoiceData.data,(s,u)=>(r(),c("tr",{class:"whitespace-nowrap",key:u},[e("td",null,[v(e("input",{"onUpdate:modelValue":t[5]||(t[5]=b=>n.selectedInvoice=b),value:s.id,type:"checkbox",class:"checkbox checkbox-primary"},null,8,oe),[[H,n.selectedInvoice]])]),e("td",null,o(n.invoiceData.from+u),1),e("td",null,o(s==null?void 0:s.no_invoice),1),e("td",null,[e("div",le,[e("button",{onClick:b=>i.sendWhastappMedia(s),class:"tooltip","data-tip":"Bagikan Whatsapp"},ce,8,ie),g(I,{"user-level":d.level,"data-id":s.id},null,8,["user-level","data-id"]),ue,e("a",{href:a.route("panel.invoice.preview",s.id),target:"_blank"},pe,8,de),e("a",{href:a.route("panel.invoice.download",s.id),class:"tooltip","data-tip":"Unduh"},ve,8,ge)])]),e("td",null,[e("div",fe,[e("span",me,o(s==null?void 0:s.s_company_name),1),e("span",we,o((s==null?void 0:s.s_company_address)+" - "+(s==null?void 0:s.s_phone_number)),1)])]),be,e("td",null,[e("div",xe,[e("span",ke,o(s==null?void 0:s.d_company_name),1),e("span",ye,o((s==null?void 0:s.d_company_address)+" - "+(s==null?void 0:s.d_phone_number)),1)])]),e("td",null,o(s==null?void 0:s.tanggal_invoice),1),e("td",null,o(s==null?void 0:s.item.length),1),e("td",null,o(s==null?void 0:s.total),1),e("td",null,[s.status=="Inactive"?(r(),j(w,{key:0,href:a.route("panel.user.userActivation",{id:s.id}),class:"btn btn-sm text-white bg-blue-500"},{default:_(()=>[y("Activate")]),_:2},1032,["href"])):k("",!0)])]))),128))])]),_:1}),e("div",Ie,[e("p",null," Show "+o(n.invoiceData.from)+" - "+o(n.invoiceData.to)+" form total "+o(n.invoiceData.total)+" data ",1),e("div",Te,[(r(!0),c(f,null,m(n.invoiceData.links,(s,u)=>(r(),c("div",{key:u},[e("button",{onClick:()=>{i.changePageHandler(s.url)},class:S(["join-item btn btn-sm",{"bg-primary text-white":s.active}]),innerHTML:s.label},null,10,De)]))),128))]),e("div",Me,[e("button",{class:"join-item btn",onClick:t[6]||(t[6]=s=>i.changePageHandler(n.invoiceData.prev_page_url))},"Prev Page"),e("button",{class:"join-item btn",onClick:t[7]||(t[7]=s=>i.changePageHandler(n.invoiceData.next_page_url))},"Next Page")])])])])]),g(D,{ref:"toast"},null,512)],64)}const ze=P(G,[["render",Ce]]);export{ze as default};