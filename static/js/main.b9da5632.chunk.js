(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={filterLabel:"FilterForm_filterLabel__1oMaH",filterInput:"FilterForm_filterInput__3GQCi"}},22:function(e,t,n){e.exports={container:"Container_container__3Kpt5"}},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),o=n.n(r),i=n(3),s=n(21),b=n(22),l=n.n(b),u=n(1),j=function(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})},m=n(20),d=n(10),O=n.n(d),h=n(4),f=Object(h.b)("phonebook/add",(function(e){var t=e.name,n=e.number;return{payload:{id:O.a.generate(),name:t,number:n}}})),p=Object(h.b)("phonebook/delete"),x=Object(h.b)("phonebook/changeFilter"),_=function(e){return e.phonebook.items},N=function(e){return e.phonebook.filter},v=function(e){var t=_(e),n=N(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},g=n(6),C=n.n(g),k=n(11);function y(){var e=Object(i.c)(_),t=Object(i.b)(),n=Object(a.useState)(""),c=Object(m.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),b=Object(m.a)(s,2),l=b[0],j=b[1],d=Object(a.useRef)(O.a.generate()),h=Object(a.useRef)(O.a.generate()),p=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"number":j(e.target.value);break;default:return}};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:C.a.form,onSubmit:function(n){n.preventDefault(),e.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?Object(k.b)("'".concat(r,"' is alresdy in contacts"),{icon:"\ud83d\udcde",style:{borderRadius:"10px",background:"#666",color:"#fff"}}):e.find((function(e){return e.number===l}))?Object(k.b)("'".concat(l,"' is alresdy in contacts")):(t(f({name:r,number:l})),o(""),j(""))},children:[Object(u.jsxs)("label",{className:C.a.label,htmlFor:d.current,children:["Name",Object(u.jsx)("input",{className:C.a.inputName,type:"text",name:"name",value:r,onChange:p,placeholder:" John Smith"})]}),Object(u.jsxs)("label",{className:C.a.label,htmlFor:h.current,children:["Number",Object(u.jsx)("input",{className:C.a.inputNumber,type:"tel",name:"number",value:l,onChange:p,placeholder:" 111-11-11"})]}),Object(u.jsx)("button",{className:C.a.button,type:"submit",children:"Add contact"})]})})}var F=n(8),L=n.n(F);function w(){var e=Object(i.b)(),t=Object(i.c)(v);return Object(u.jsx)("ul",{className:L.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(u.jsxs)("li",{className:L.a.listItem,children:[Object(u.jsxs)("span",{className:L.a.listItemText,children:[a,":"]}),Object(u.jsx)("span",{className:L.a.listItemText,children:c}),Object(u.jsx)("button",{className:L.a.button,type:"button",onClick:function(){return function(t){return e(p(t))}(n)},children:"Delete"})]},n)}))})}var I=n(19),S=n.n(I);function A(){var e=Object(i.b)(),t=Object(i.c)(N);return Object(u.jsxs)("label",{className:S.a.filterLabel,children:["Find contacts by name",Object(u.jsx)("input",{className:S.a.filterInput,type:"text",value:t,onChange:function(t){return e(x(t.target.value))},placeholder:"Enter contact's name"})]})}function D(){var e=Object(i.c)(_);return Object(u.jsxs)(j,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(y,{}),Object(u.jsx)("h2",{children:"Contacts"}),0!==e.length?Object(u.jsx)(A,{}):Object(u.jsx)("h3",{children:"Your contacts list is empty"}),Object(u.jsx)(w,{}),Object(u.jsx)(k.a,{position:"top-right"})]})}var E,J=n(15),M=n(2),R=n(23),T=n.n(R),P=n(5),Q=n(24),q=n.n(Q),z=n(7),B=Object(h.c)([],(E={},Object(z.a)(E,f,(function(e,t){var n=t.payload;return[].concat(Object(J.a)(e),[n])})),Object(z.a)(E,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),E)),G=Object(h.c)("",Object(z.a)({},x,(function(e,t){return t.payload}))),H=Object(M.b)({items:B,filter:G}),K=[].concat(Object(J.a)(Object(h.d)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),[T.a]),V={key:"contacts",storage:q.a,blacklist:["filter"]},W=Object(M.b)({phonebook:Object(P.g)(V,H)}),Y=Object(h.a)({reducer:W,middleware:K,devTools:!1}),U=Object(P.h)(Y);n(45);o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(i.a,{store:Y,children:Object(u.jsx)(s.a,{loading:null,persistor:U,children:Object(u.jsx)(D,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__1A52l",inputName:"ContactForm_inputName__1Sa_Q",label:"ContactForm_label__19MWL",inputNumber:"ContactForm_inputNumber__2aAaN",button:"ContactForm_button__hnEPI"}},8:function(e,t,n){e.exports={listItem:"ContactList_listItem__NLxo9",button:"ContactList_button__3qVDL"}}},[[46,1,2]]]);
//# sourceMappingURL=main.b9da5632.chunk.js.map