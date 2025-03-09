import{d as u,r as m,w as y,c as d,e as x,f as k,t as f,v as C,a as c,o as l,_ as V,g as A,$ as N,b as r,I as B,u as _,B as M,F as h,h as b,i as w,M as F,j as g,k as U,l as I,m as S}from"./index-Bj9QNoj8.js";const L={class:"input-container text-small"},T={key:0,class:"input-label"},j=["placeholder"],D={key:1,class:"input-error"},E=u({__name:"TextField",props:{placeholder:{},type:{},modelValue:{},label:{},error:{}},emits:["update:modelValue"],setup(s,{emit:e}){const o=s,a=e,t=m(o.modelValue);return y(t,n=>{a("update:modelValue",n)}),y(()=>o.modelValue,n=>{t.value=n}),(n,p)=>(l(),d("div",L,[n.label?(l(),d("span",T,f(n.label),1)):x("",!0),k(c("textarea",{"onUpdate:modelValue":p[0]||(p[0]=i=>t.value=i),placeholder:n.placeholder,class:"input-field text-small"},"    ",8,j),[[C,t.value]]),n.error?(l(),d("span",D,f(n.error),1)):x("",!0)]))}}),q=V(E,[["__scopeId","data-v-86508bc6"]]),$=A("notes",()=>{const s=m([]);async function e(){return N.notes.getNotes().then(({data:t})=>{s.value=t})}function o(t){return N.notes.addNote(t).then(()=>{e()})}function a(t){return N.notes.deleteNote(t).then(()=>{e()})}return{notes:s,getNotes:e,addNote:o,deleteNote:a}}),z=()=>{const s=$(),e=m({title:"",content:""});return{form:e,addNote:async()=>{!e.value.title||!e.value.content||(await s.addNote(e.value),e.value.title="",e.value.content="")}}},G={class:"mt-10 d-flex flex-column gap-6"},H={class:"d-flex align-center justify-end mt-10"},J=u({__name:"AddNoteForm",emits:["closeModal"],setup(s,{emit:e}){const{form:o,addNote:a}=z(),t=e,n=()=>{try{a(),t("closeModal")}catch(p){console.log(p)}};return(p,i)=>(l(),d(h,null,[i[2]||(i[2]=c("h2",{class:"h2"},"Добавление заметки",-1)),c("div",G,[r(B,{modelValue:_(o).title,"onUpdate:modelValue":i[0]||(i[0]=v=>_(o).title=v),placeholder:"Введите название",label:"Название заметки",type:"text"},null,8,["modelValue"]),r(q,{modelValue:_(o).content,"onUpdate:modelValue":i[1]||(i[1]=v=>_(o).content=v),placeholder:"Введите текст",label:"Текст заметки",type:"password"},null,8,["modelValue"])]),c("div",H,[r(M,{text:"Добавить",onClick:n})])],64))}}),K=u({__name:"AddNoteModal",props:{isModal:{type:Boolean}},emits:["closeModal"],setup(s,{emit:e}){const o=e;return(a,t)=>(l(),b(F,{"is-open":a.isModal,onCloseModal:t[1]||(t[1]=n=>o("closeModal"))},{default:w(()=>[r(J,{onCloseModal:t[0]||(t[0]=n=>o("closeModal"))})]),_:1},8,["is-open"]))}}),O=u({__name:"AddNoteButton",setup(s){const e=m(!1),o=()=>{e.value=!0},a=()=>{e.value=!1};return(t,n)=>(l(),d(h,null,[r(M,{"class-name":"add-note-btn",icon:"Add",onClick:o}),r(K,{"is-modal":e.value,onCloseModal:a},null,8,["is-modal"])],64))}}),P=()=>{const s=$(),e=m();return g(async()=>{await s.getNotes(),e.value=s.notes}),{notes:U(()=>s.notes)}},Q={class:"note"},R={class:"note__header"},W={class:"h4"},X={class:"note__body"},Y={class:"text-normal text-normal-mob"},Z={class:"note__footer"},ee=u({__name:"Note",props:{id:{},title:{},text:{}},setup(s){const e=s,o=$(),a=()=>{o.deleteNote(e.id)};return(t,n)=>(l(),d("div",Q,[c("div",R,[c("h4",W,f(t.title),1)]),c("div",X,[c("p",Y,f(t.text),1)]),c("div",Z,[r(M,{onClick:a,icon:"Close",text:"Удалить",class:"btn-delete text-normal",variant:"text"})])]))}}),te=V(ee,[["__scopeId","data-v-2857a786"]]),oe={key:0,class:"notes"},se=u({__name:"NotesList",setup(s){const{notes:e}=P();return(o,a)=>_(e)?(l(),d("div",oe,[(l(!0),d(h,null,I(_(e),t=>(l(),b(te,{key:t.id,id:t.id,title:t.title,text:t.content},null,8,["id","title","text"]))),128))])):x("",!0)}}),ne=u({__name:"NotesManagement",setup(s){return(e,o)=>(l(),d(h,null,[r(O),r(se)],64))}}),ae={class:"page"},de=u({__name:"index",setup(s){const e=S();return g(()=>{try{e.getUser()}catch{}}),(o,a)=>(l(),d("div",ae,[r(ne)]))}});export{de as default};
