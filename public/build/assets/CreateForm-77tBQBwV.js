import{o as n,c as i,b as e,g as a,v as d,f as h,F as _,r as v,h as b,y as m,t as f,k,l as y}from"./app-MfvSOTyN.js";import{_ as C}from"./_plugin-vue_export-helper-x3n3nnut.js";const V={props:{},data(){return{content:[]}},watch:{content:{handler:function(o){this.changeContentValHandler(o)},deep:!0}},methods:{pushContentHandler(){this.content.push({kolom:"nama kolom",tipe:"text",required:!1,opsi:[]})},removeFormItem(o){o>=0&&o<this.content.length?this.content.splice(o,1):console.log("Invalid index")},imageChangeHandler(o){const l=o.target.files[0];this.imageFile=l;const p=new FileReader;var g=this.backgroundStyle;p.onload=function(r){g.background=`url(${r.target.result})`},p.readAsDataURL(l)},changeContentValHandler(o){this.$emit("content-change",o)}}},M={class:"space-y-6"},H=m('<label for="bacgroundInput" class="btn w-fit btn-outline btn-primary text-white"><svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="13" r="3"></circle><path stroke-linecap="round" d="M2 13.364c0-3.065 0-4.597.749-5.697a4.38 4.38 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697c0 3.064 0 4.596-.749 5.697a4.408 4.408 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.406 4.406 0 0 1 2.75 19.06A3.43 3.43 0 0 1 2.277 18M19 10h-1"></path></g></svg> Ganti background </label>',1),U={class:"space-y-2"},B={class:"container form-group grid grid-cols-1 gap-2"},F=e("label",{for:"deskripsi",class:"text-sm font-semibold"},"Deskripsi",-1),j={class:"container form-group grid grid-cols-1 gap-2"},I=e("label",{for:"judul",class:"text-sm font-semibold"},"Judul",-1),T=e("p",{class:"text-xl font-bold"},"Isi formulir",-1),A=e("div",null,null,-1),N={key:0},S=e("p",{class:"font-thin"},"Tambah kolom untuk data dengan tombol tambah kolom.",-1),z=[S],D={class:"container formulir-body grid grid-cols-1 border-b py-3"},q={class:"grid grid-flow-row lg:grid-cols-3 gap-4"},E={class:"form-group inline-flex space-x-6 items-center w-full"},K={class:"font-semibold"},L=["onUpdate:modelValue"],R=["onUpdate:modelValue"],G=m('<option selected value="text">Text</option><option value="option">Option</option><option value="multiple">Multiple</option><option value="file">File</option><option value="email">Email</option><option value="phone">Phone Number</option>',6),J=[G],O={class:"inline-flex space-x-2"},P={class:"btn btn-circle text-rose-500"},$=["onClick"],Q=e("path",{fill:"currentColor",d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"},null,-1),W=[Q],X=e("div",{class:"divider divider-vertical"},null,-1),Y={class:"label space-x-4 cursor-pointer border px-4 rounded bg-neutral-100"},Z=["onUpdate:modelValue"],ee=e("span",{class:"label-text w-fit"},"Kolom wajib diisi",-1),te={key:0,class:"p-6 col-span-3 space-y-2 border my-4"},oe=m('<p class="text-sm font-semibold inline-flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40"><g fill="currentColor"><path d="M23.112 9.315a3.113 3.113 0 1 1-6.226.002a3.113 3.113 0 0 1 6.226-.002"></path><circle cx="20" cy="19.999" r="3.112"></circle><circle cx="20" cy="30.685" r="3.112"></circle></g></svg><span>Opsi jawaban</span></p>',1),le={class:"grid grid-cols-1 gap-2"},se=["onUpdate:modelValue"],ne=["onClick"],ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("g",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"},[e("path",{d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"}),e("path",{d:"M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"})])],-1),ae={class:"container inline-flex py-2 justify-between"},re=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 21 21"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",d:"M17 4a2.121 2.121 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zM9.5 17.5h8m-2-11l1 1"})],-1);function ce(o,l,p,g,r,c){return n(),i("div",M,[H,e("input",{type:"file",onChange:l[0]||(l[0]=t=>{c.imageChangeHandler(t)}),id:"bacgroundInput",class:"hidden"},null,32),e("div",U,[e("div",B,[F,a(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=t=>o.description=t),class:"textarea text-black textarea-bordered min-h-5 max-h-24 max-w-xs",placeholder:"Ketik deskripsi Anda di sini"},null,512),[[d,o.description]])]),e("div",j,[I,a(e("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=t=>o.title=t),class:"input input-bordered w-full max-w-xs",placeholder:"judul formulir"},null,512),[[d,o.title]])])]),e("div",null,[T,A,r.content.length<1?(n(),i("div",N,z)):h("",!0),(n(!0),i(_,null,v(r.content,(t,u)=>(n(),i("div",{key:u},[e("div",D,[e("div",q,[e("div",E,[e("span",K,f(u+1)+".",1),a(e("input",{"onUpdate:modelValue":s=>t.kolom=s,type:"text",class:"input input-bordered w-full lg:w-3/4 md:w-1/2",placeholder:"nama kolom"},null,8,L),[[d,t.kolom]])]),a(e("select",{"onUpdate:modelValue":s=>t.tipe=s,class:"select select-bordered w-1/2 lg:w-full ml-9 lg:ml-0"},J,8,R),[[k,t.tipe]]),e("div",O,[e("button",P,[(n(),i("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:s=>c.removeFormItem(u),class:"w-6",viewBox:"0 0 24 24"},W,8,$))]),X,e("label",Y,[a(e("input",{type:"checkbox","onUpdate:modelValue":s=>t.required=s,class:"checkbox checkbox-primary"},null,8,Z),[[y,t.required]]),ee])]),t.tipe=="option"||t.tipe=="multiple"?(n(),i("div",te,[oe,e("div",le,[(n(!0),i(_,null,v(t.opsi,(s,w)=>a((n(),i("input",{type:"text",key:w,"onUpdate:modelValue":x=>s.text=x,class:"input input-bordered max-w-xs",placeholder:"opsi"},null,8,se)),[[d,s.text]])),128))])])):h("",!0),t.tipe=="option"||t.tipe=="multiple"?(n(),i("button",{key:1,onClick:()=>{t.opsi.push({text:""})},class:"bt w-fit text-blue-500"},[ie,b(" Tambah opsi jawaban ")],8,ne)):h("",!0)])])]))),128))]),e("div",ae,[e("button",{class:"btn bg-emerald-500 text-white",onClick:l[3]||(l[3]=(...t)=>c.pushContentHandler&&c.pushContentHandler(...t))},[re,b(" Tambah kolom ")])])])}const ue=C(V,[["render",ce]]);export{ue as default};