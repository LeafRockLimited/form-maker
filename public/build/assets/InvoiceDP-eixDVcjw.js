import{Z as C,i as H,d as p,e as _,o as i,c,b as t,a as g,w as f,g as d,k as m,F as v,r as w,f as y,v as M,t as l,h as k,l as V,m as I,j as B,n as S}from"./app-wwOcRcL7.js";import{T as z}from"./Table-B9D1zAuX.js";import{h as L}from"./moment-WSJ9un1t.js";import{T as j}from"./Toast-ELye1fFR.js";import{_ as N}from"./_plugin-vue_export-helper-x3n3nnut.js";const U={components:{TableVue:z,Head:C,Link:H,Toast:j},data(){return{invoiceData:[],length:10,selectedInvoice:[],search:null,selectedStatus:null,status:{itemId:null,type:"idle"}}},mounted(){this.fetchInvoice()},watch:{length(){this.fetchInvoice()},search(a){a!=null&&a!=""&&this.fetchInvoice()}},methods:{changePageHandler(a){let e=new URL(a);e.searchParams.set("length",this.length),this.fetchInvoice(e.href)},async fetchInvoice(a){let e;a?e=a:e=route("panel.invoice.fetchInvoice",{_query:{status:"dp",length:this.length,search:this.search}});try{const u=await p.get(e).then(n=>n).catch(n=>{console.log(n)});u.status==200&&(this.invoiceData=u.data,this.invoiceData.data=this.invoiceData.data.map(n=>(n.total=parseFloat(n.total).toLocaleString("id-ID",{style:"currency",currency:"IDR"}),n.tanggal_invoice=L(n.created_at).format("DD-MM-YYYY"),console.log(n),n)))}catch{}},async massDeleteHandler(){try{(await p.post(route("panel.invoice.destroy"),{list:this.selectedInvoice}).catch(e=>{console.log(e)})).status==200&&(this.fetchInvoice(),this.selectedInvoice=[],this.$refs.toast.show("success","Behasil menghapus faktur yang dipilih",""),setTimeout(()=>{this.$refs.toast.hide()},5e3))}catch{this.$refs.toast.show("error","Gagal menghapus faktur yang dipilih",""),setTimeout(()=>{this.$refs.toast.hide()},5e3)}},async updateStatusHandler(){try{(await p.post(route("panel.invoice.update"),{listId:this.selectedInvoice,status:this.selectedStatus})).status==200?(this.selectedInvoice=[],this.fetchInvoice(),this.$refs.toast.show("success","Behasil mengubah status faktur","buka tab status"),setTimeout(()=>{this.$refs.toast.hide()},5e3)):(this.$refs.toast.show("error","Gagal mengubah status faktur","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide()},5e3))}catch{this.$refs.toast.show("error","Gagal mengubah status faktur","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide()},5e3)}},async sendWhastappMedia(a){try{this.status={itemId:a.id,type:"loading"},await p.get(route("panel.invoice.sendMedia",{id:a.id,number:a.d_phone_number})).then(e=>{console.log(e),this.status={itemId:null,type:"idle"},this.$refs.toast.show("success","Behasil mengirim faktur ke wa tujuan","konfirmasi pada nomor tujuan bahwa faktur telah dikirimkan"),setTimeout(()=>{this.$refs.toast.hide()},5e3)}).catch(e=>{console.log(e),this.status={itemId:null,type:"idle"},this.$refs.toast.show("error","Gagal mengirim faktur ke wa tujuan","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide()},5e3)})}catch{this.$refs.toast.show("error","Gagal mengirim faktur ke wa tujuan","coba beberapa saat lagi atau hubungi cs"),setTimeout(()=>{this.$refs.toast.hide()},5e3)}}}},G={class:"grid grid-cols-1 w-full gap-6 col-span-3"},q={class:"card bg-white p-6 grid grid-cols-1 gap-6"},P=t("p",{class:"font-semibold"},"DP",-1),Y={class:"container"},A=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"})],-1),F={class:"container filter-container flex flex-row justify-between"},W={class:"inline-flex space-x-1"},E=t("option",{value:"10"},"10",-1),R=["value","hidden"],J={key:0,class:"w-full inline-flex px-2 space-x-4"},K=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"})],-1),Z=[K],O=t("div",{class:"divider divider-horizontal"},null,-1),Q={class:"inline-flex space-x-2"},X=t("option",{value:"lunas"},"Lunas",-1),$=[X],tt={class:"inline-flex space-x-2"},st={class:"container grid grid-cols-1 gap-6"},et=t("thead",null,[t("tr",null,[t("th"),t("th",null,"No."),t("th",null,"Nomor Invoice"),t("th"),t("th",null,"Dari"),t("th"),t("th",null,"Kepada"),t("th",null,"Tanggal Dibuat"),t("th",null,"Jumlah Item"),t("th",null,"Total Harus Dibayar"),t("th")])],-1),at=["value"],ot={class:"inline-flex space-x-2"},lt=["onClick"],nt={xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-primary",viewBox:"0 0 24 24"},it=t("path",{fill:"none",stroke:"currentColor","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[t("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),t("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})],-1),ct=[it],rt={xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-primary",viewBox:"0 0 24 24"},ht=t("path",{fill:"currentColor",d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"},null,-1),dt=[ht],ut=t("button",{class:"tooltip","data-tip":"Bagikan Email"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-primary",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"})])],-1),pt=["href"],ft=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 text-primary",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"})],-1),vt=[ft],_t={class:"flex flex-col"},gt={class:"font-semibold"},wt={class:"text-gray-500"},bt=t("td",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6",viewBox:"0 0 50 50"},[t("path",{fill:"currentColor",d:"M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"}),t("path",{fill:"currentColor",d:"m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"}),t("path",{fill:"currentColor",d:"M16 24h17v2H16z"})])],-1),xt={class:"flex flex-col"},mt={class:"font-semibold text-blue-600"},yt={class:"text-gray-500"},kt={class:"w-full flex flex-row justify-between"},It={class:"join"},Tt=["onClick","innerHTML"];function Dt(a,e,u,n,o,r){const b=_("Link"),T=_("TableVue"),D=_("Toast");return i(),c(v,null,[t("div",G,[t("div",q,[P,t("div",Y,[g(b,{href:a.route("panel.invoice.create",{_query:{status:"dp"}}),class:"btn btn-md btn-primary float-end"},{default:f(()=>[A,k(" Buat Invoice ")]),_:1},8,["href"])]),t("div",F,[t("div",W,[d(t("select",{class:"select select-bordered w-fit max-w-xs","onUpdate:modelValue":e[0]||(e[0]=s=>o.length=s)},[E,(i(),c(v,null,w(100,(s,h)=>t("option",{value:s,hidden:s%25!=0,key:h},l(s),9,R)),64))],512),[[m,o.length]])]),o.selectedInvoice.length>0?(i(),c("div",J,[t("button",{class:"btn tooltip",onClick:e[1]||(e[1]=(...s)=>r.massDeleteHandler&&r.massDeleteHandler(...s)),"data-tip":"hapus data"},Z),O,t("div",Q,[d(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.selectedStatus=s),class:"select select-bordered w-full max-w-xs"},$,512),[[m,o.selectedStatus]]),t("button",{onClick:e[3]||(e[3]=(...s)=>r.updateStatusHandler&&r.updateStatusHandler(...s)),class:"btn bg-emerald-500 text-white"},"Ubah status")])])):y("",!0),t("div",tt,[d(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.search=s),type:"text",name:"",class:"input input-bordered input-md w-full max-w-xs",placeholder:"Search..."},null,512),[[M,o.search]])])]),t("div",st,[g(T,null,{header:f(()=>[et]),body:f(()=>[t("tbody",null,[(i(!0),c(v,null,w(o.invoiceData.data,(s,h)=>(i(),c("tr",{class:"whitespace-nowrap",key:h},[t("td",null,[d(t("input",{"onUpdate:modelValue":e[5]||(e[5]=x=>o.selectedInvoice=x),value:s.id,type:"checkbox",class:"checkbox checkbox-primary"},null,8,at),[[V,o.selectedInvoice]])]),t("td",null,l(o.invoiceData.from+h),1),t("td",null,l(s==null?void 0:s.no_invoice),1),t("td",null,[t("div",ot,[t("button",{onClick:x=>r.sendWhastappMedia(s),class:"tooltip","data-tip":"Bagikan Whatsapp"},[d((i(),c("svg",nt,ct,512)),[[I,o.status.type=="loading"&&o.status.itemId==s.id]]),d((i(),c("svg",rt,dt,512)),[[I,o.status.type=="idle"]])],8,lt),ut,t("a",{href:a.route("panel.invoice.download",s.id),class:"tooltip","data-tip":"Unduh"},vt,8,pt)])]),t("td",null,[t("div",_t,[t("span",gt,l(s==null?void 0:s.s_company_name),1),t("span",wt,l((s==null?void 0:s.s_company_address)+" - "+(s==null?void 0:s.s_phone_number)),1)])]),bt,t("td",null,[t("div",xt,[t("span",mt,l(s==null?void 0:s.d_company_name),1),t("span",yt,l((s==null?void 0:s.d_company_address)+" - "+(s==null?void 0:s.d_phone_number)),1)])]),t("td",null,l(s==null?void 0:s.tanggal_invoice),1),t("td",null,l(s==null?void 0:s.item.length),1),t("td",null,l(s==null?void 0:s.total),1),t("td",null,[s.status=="Inactive"?(i(),B(b,{key:0,href:a.route("panel.user.userActivation",{id:s.id}),class:"btn btn-sm text-white bg-blue-500"},{default:f(()=>[k("Activate")]),_:2},1032,["href"])):y("",!0)])]))),128))])]),_:1}),t("div",kt,[t("p",null," Show "+l(o.invoiceData.from)+" - "+l(o.invoiceData.to)+" form total "+l(o.invoiceData.total)+" data ",1),t("div",It,[(i(!0),c(v,null,w(o.invoiceData.links,(s,h)=>(i(),c("div",{key:h},[t("button",{onClick:()=>{r.changePageHandler(s.url)},class:S(["join-item btn btn-sm",{"bg-primary text-white":s.active}]),innerHTML:s.label},null,10,Tt)]))),128))])])])])]),g(D,{ref:"toast"},null,512)],64)}const St=N(U,[["render",Dt]]);export{St as default};