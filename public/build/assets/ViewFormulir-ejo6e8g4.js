import{i as k,Z as v,e as d,o,c as l,a as u,w as h,F as c,b as t,t as r,r as p,h as w,g,v as b,f as n}from"./app-iyDdm6PS.js";import{A as V}from"./AuthenticatedLayout-Ra-BC9ZO.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-knvH4i0C.js";import"./ResponsiveNavLink-xZf5GoyC.js";import"./Toast-krnLCDzC.js";const A={components:{Link:k,Head:v,AuthenticatedLayout:V},props:{formulir:Array}},H={class:"py-12"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 gap-6"},B={class:"bg-white card overflow-hidden p-4 grid grid-cols-1 gap-6"},C=t("hr",null,null,-1),F={class:"container form-group space-y-1"},D={key:0},I=["onInput","name","onUpdate:modelValue","placeholder"],T={key:1},U=["placeholder"],q={key:2},E={name:"",class:"select select-bordered w-full",id:""},M=["value"],P=["id"],S=["for"],Z={key:4},j=t("input",{type:"email",class:"input input-bordered w-full"},null,-1),z=[j],G={key:5,class:"text-sm italic text-blue-500"};function J(m,K,i,Q,R,W){const f=d("Head"),x=d("Label"),y=d("AuthenticatedLayout");return o(),l(c,null,[u(f,{title:i.formulir.title},null,8,["title"]),u(y,null,{default:h(()=>[t("div",H,[t("div",N,[t("div",B,[t("p",null,r(i.formulir.title),1),C,t("div",null,[t("p",null,r(i.formulir.description),1)]),(o(!0),l(c,null,p(i.formulir.content,(e,_)=>(o(),l("div",{class:"mt-2",key:_},[t("div",F,[u(x,null,{default:h(()=>[w(r(e.kolom),1)]),_:2},1024),e.tipe=="phone"?(o(),l("div",D,[g(t("input",{type:"text",onInput:s=>m.changePhoneValueHandler(s,_),name:e.kolom,"onUpdate:modelValue":s=>e.answer=s,class:"input input-bordered w-full",placeholder:e.kolom},null,40,I),[[b,e.answer]])])):n("",!0),e.tipe=="text"?(o(),l("div",T,[t("input",{type:"text",class:"input input-bordered w-full",placeholder:e.kolom},null,8,U)])):n("",!0),e.tipe=="option"?(o(),l("div",q,[t("select",E,[(o(!0),l(c,null,p(e.opsi,(s,a)=>(o(),l("option",{value:s.text,key:a},r(s.text),9,M))),128))])])):n("",!0),e.tipe=="multiple"?(o(!0),l(c,{key:3},p(e.opsi,(s,a)=>(o(),l("div",{class:"flex flex-row items-center space-x-2",key:a},[t("input",{class:"checkbox",type:"checkbox",name:"",id:a},null,8,P),t("label",{for:a},r(s.text),9,S)]))),128)):n("",!0),e.tipe=="email"?(o(),l("div",Z,z)):n("",!0),e.required=="1"?(o(),l("span",G,"*data harus diisi")):n("",!0)])]))),128))])])])]),_:1})],64)}const oe=L(A,[["render",J]]);export{oe as default};