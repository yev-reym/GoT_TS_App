(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a(85),o=a(24),i=a(10),s=a(108),_=a.n(s),m=a(192),u=a(186),f=a(183),d=a(182),p=a(184),h=a(81),b=function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function c(e){try{i(n.next(e))}catch(e){r(e)}}function o(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,o)}i((n=n.apply(e,t||[])).next())}))};t.default=({location:e,match:t})=>{var a,s;const[y,v]=Object(n.useState)("None"),[E,g]=Object(n.useState)([]),[N,x]=Object(n.useState)(!1),[O,j]=Object(n.useState)(null),[k,w]=Object(n.useState)(null),A=Object(r.f)(),S=Object(n.useRef)(!0),{houseId:B}=t.params,M=!!(null==e?void 0:e.state),C=(e,t)=>"None"===t?e:"Male"===t||"Female"===t?e.filter(e=>e.gender===t):e.filter(e=>!!(null==e?void 0:e.books.find(e=>e[e.length-1]===t)));Object(n.useEffect)(()=>{if(M){const{state:{swornMembers:t}}=e;x(!0),g(t)}else b(void 0,void 0,void 0,(function*(){x(!0);try{const e=yield Object(i.b)("houses/"+B);if(e.data){const{swornMembers:t,name:a}=e.data;j(a),g(t)}}catch(e){w(e.message)}}))},[]),Object(n.useEffect)(()=>{Array.isArray(E)&&0!==E.length&&N&&S.current&&b(void 0,void 0,void 0,(function*(){const e=[];for(const t of E){const a=t.replace("https://www.anapioficeandfire.com/api/","");try{const t=yield Object(i.b)(""+a);t.data&&e.push(t.data)}catch(e){w(e.message)}}S.current=!1,g(e),x(!1)}))},[JSON.stringify(E)]),Object(n.useEffect)(()=>()=>S.current=!0,[]);const D=e=>e.map((e,t)=>l.a.createElement(c.a,{characterUrl:e.url,key:t,suppliedCharacterData:e}));return N||!E.length?l.a.createElement(o.a,null):l.a.createElement("section",{className:h.a.members_container},l.a.createElement("div",{className:h.a.section__top},l.a.createElement("span",{className:h.a.backbtn,onClick:()=>M?A.goBack():A.push("/houses/"+B)},l.a.createElement(_.a,null),"Back to Houses"),Array.isArray(E)&&0!==E.length&&l.a.createElement(d.a,{variant:"outlined"},l.a.createElement("span",{style:{marginBottom:"5px"}},"Filter By:"),l.a.createElement(m.a,{htmlFor:"members-filter"}),l.a.createElement(p.a,{defaultValue:"None",autoWidth:!0,id:"members-filter",onChange:e=>v(""+e.target.value)},l.a.createElement(u.a,{value:"None"},l.a.createElement("em",null,"None")),l.a.createElement(f.a,null,"Gender"),l.a.createElement(u.a,{value:"Male"},"Male"),l.a.createElement(u.a,{value:"Female"},"Female"),l.a.createElement(f.a,null,"Books"),l.a.createElement(u.a,{value:"1"},"Book 1"),l.a.createElement(u.a,{value:"2"},"Book 2"),l.a.createElement(u.a,{value:"3"},"Book 3"),l.a.createElement(u.a,{value:"4"},"Book 4"),l.a.createElement(u.a,{value:"5"},"Book 5"),l.a.createElement(u.a,{value:"6"},"Book 6"),l.a.createElement(u.a,{value:"7"},"Book 7"),l.a.createElement(u.a,{value:"8"},"Book 8"),l.a.createElement(u.a,{value:"9"},"Book 9"),l.a.createElement(u.a,{value:"10"},"Book 10"),l.a.createElement(u.a,{value:"11"},"Book 11"),l.a.createElement(u.a,{value:"12"},"Book 12")))),l.a.createElement("h2",null,null!==(s=null===(a=null==e?void 0:e.state)||void 0===a?void 0:a.houseName)&&void 0!==s?s:O),Array.isArray(E)&&0!==E.length?l.a.createElement("div",{className:h.a.members_container__grid},0===D(C(E,y)).length?l.a.createElement("div",{className:h.a["members_container--empty"]},"No Sworn Members Under Current Filter"):D(C(E,y))):l.a.createElement("div",{className:h.a["members_container--empty"]},"No Sworn Members Available"))}},73:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(0),l=a(10),r=function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function c(e){try{i(n.next(e))}catch(e){r(e)}}function o(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,o)}i((n=n.apply(e,t||[])).next())}))};const c=(e=!1)=>{const[t,a]=Object(n.useState)(e);return[t,{toggleTo:e=>a(null!=e?e:!t)}]},o=(e,t,a)=>{const c=Object(n.useRef)({}),o=Object(n.useRef)(!0),{fetchDispatchAction:i,successDispatchAction:s,failureDispatchAction:_}=t;Object(n.useEffect)(()=>()=>{o.current=!1},[]),Object(n.useEffect)(()=>{if(e&&""!==e){(()=>r(void 0,void 0,void 0,(function*(){if(i(a),c.current[e]){const t=c.current[e];o.current&&s(t)}else try{const t=o.current&&(yield Object(l.b)(e)),{data:a}=t;c.current[e]=a,o.current&&s(a)}catch(e){_(e.message)}})))()}},[e])}},81:function(e,t,a){"use strict";var n=a(11),l=a.n(n),r=a(87),c={injectType:"singletonStyleTag",insert:"head",singleton:!0};l()(r.a,c);t.a=r.a.locals||{}},85:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(24),c=a(10),o=a(103),i=a.n(o),s=a(73),_=a(107),m=a.n(_),u=a(81),f=function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function c(e){try{i(n.next(e))}catch(e){r(e)}}function o(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,o)}i((n=n.apply(e,t||[])).next())}))};const d=({characterUrl:e="",shouldRenderModal:t=!0,suppliedCharacterData:a=!1})=>{t&&i.a.setAppElement("#root");const[o,_]=Object(n.useState)({}),[p,h]=Object(n.useState)(!1),[b,y]=Object(n.useState)(null),[v,{toggleTo:E}]=Object(s.b)();if(Object(n.useEffect)(()=>{0===Object.keys(o).length&&e&&!a?f(void 0,void 0,void 0,(function*(){h(!0);try{const t=yield Object(c.b)((e=>e.replace("https://www.anapioficeandfire.com/api/",""))(e));t.data&&_(t.data)}catch(e){y(e.message)}})):_(a)},[e]),p&&!o)return l.a.createElement(r.a,null);const{name:g,gender:N,culture:x,born:O,died:j,titles:k,aliases:w,father:A,mother:S,spouse:B,books:M,tvSeries:C,playedBy:D}=o;return b?l.a.createElement("span",{style:{fontSize:"25px",color:"white",width:"100%",textAlign:"center",marginTop:"20px",display:"block",fontFamily:"Cinzel Decorative"}},"We are experiencing technical difficulties, we apologize!"):l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:u.a.charinfo_container},l.a.createElement("h3",null,g),t&&l.a.createElement(m.a,{style:{cursor:"pointer"},onClick:()=>E(!0)}),t&&l.a.createElement(i.a,{isOpen:v,onRequestClose:()=>E(!1),contentLabel:"Character Modal",className:u.a.modal__custom,overlayClassName:u.a.overlay_custom},l.a.createElement("h3",null,g),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Gender:"),l.a.createElement("span",null,Object(c.a)(N))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Culture:"),l.a.createElement("span",null,Object(c.a)(x))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Born:"),l.a.createElement("span",null,Object(c.a)(O))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Died:"),l.a.createElement("span",null,Object(c.a)(j))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Titles:"),l.a.createElement("span",null,"Not Available"!==Object(c.a)(k))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Aliases:"),l.a.createElement("span",null,Object(c.a)(w))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Father:"),l.a.createElement("span",null,"Not Available"!==Object(c.a)(A)?l.a.createElement(d,{characterUrl:A,shouldRenderModal:!1}):Object(c.a)(A))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Mother:"),l.a.createElement("span",null,"Not Available"!==Object(c.a)(S)?l.a.createElement(d,{characterUrl:S,shouldRenderModal:!1}):Object(c.a)(S))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Spouse:"),l.a.createElement("span",null,"Not Available"!==Object(c.a)(B)?l.a.createElement(d,{characterUrl:B,shouldRenderModal:!1}):Object(c.a)(B))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Books:"),l.a.createElement("span",null,Object(c.d)(M))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"T.V. Appearances:"),l.a.createElement("span",null,Object(c.a)(C))),l.a.createElement("div",{className:u.a.charinfo_container__list__field},l.a.createElement("strong",{className:u.a.charinfo_container__list__field__title},"Played By:"),l.a.createElement("span",null,Object(c.a)(D))))))};t.a=d},87:function(e,t,a){"use strict";var n=a(12),l=a.n(n),r=a(13),c=a.n(r),o=a(14),i=l()((function(e){return e[1]})),s=c()(o.a);i.push([e.i,'@font-face{font-family:"Cinzel Decorative";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/cinzeldecorative/v9/daaCSScvJGqLYhG8nNt8KPPswUAPni7TTMxpazyD.woff2) format("woff2")}@font-face{font-family:"HeaderFont";src:url('+s+') format("truetype");font-weight:normal;font-style:normal}.styles__charinfo_container___35x0m{display:flex;align-items:center}.styles__charinfo_container___35x0m h3{margin:0;font-size:15px !important}.styles__charinfo_container___35x0m svg{color:#010b13;font-size:20px;margin:0 5px}.styles__modal__custom___3nT3k{position:fixed;top:50%;left:50%;border:2px solid #e3b130;background:#010b13;overflow:auto;border-radius:4px;outline:none;padding:20px 40px;height:fit-content;transform:translate(-50%, -50%);color:ivory}.styles__modal__custom___3nT3k h3{margin:0;font-size:20px;font-family:"Cinzel Decorative",serif;text-align:center;margin:5px 0}.styles__modal__custom___3nT3k div{display:flex;flex-direction:column;margin:5px 0}.styles__modal__custom___3nT3k div span{margin-left:5px}.styles__overlay__custom___2hS45{position:fixed;top:0;left:0;right:0;bottom:0}.ReactModal__Overlay{opacity:0;transition:opacity 500ms ease-in-out}.ReactModal__Overlay--after-open{opacity:1;background-color:rgba(0,0,0,0.75) !important}.ReactModal__Overlay--before-close{opacity:0}.MuiSelect-outlined.MuiSelect-outlined{color:ivory;font-family:"Cinzel Decorative",serif}.MuiOutlinedInput-notchedOutline{border-color:#e3b130}.styles__members_container___2hl7b{color:ivory}.styles__members_container___2hl7b .styles__section__top___1OALT{display:flex;justify-content:space-between;align-items:flex-end}.styles__members_container--empty___W794o{text-align:center;font-family:"Cinzel Decorative",serif;margin-top:100px}.styles__members_container___2hl7b h2{margin:0;font-size:20px;font-family:"Cinzel Decorative",serif;text-align:center;margin:20px 0 15px}.styles__members_container___2hl7b svg{color:#e3b130}.styles__members_container__grid___2q0As{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-gap:30px;width:100%;padding:10px 20px 40px}.styles__members_container___2hl7b .styles__backbtn___3N99D{font-family:"Cinzel Decorative",serif;position:relative;cursor:pointer}.styles__members_container___2hl7b .styles__backbtn___3N99D>svg{position:absolute;top:-2px;left:-20px}\n',""]),i.locals={charinfo_container:"styles__charinfo_container___35x0m",modal__custom:"styles__modal__custom___3nT3k",overlay__custom:"styles__overlay__custom___2hS45",members_container:"styles__members_container___2hl7b",section__top:"styles__section__top___1OALT","members_container--empty":"styles__members_container--empty___W794o",members_container__grid:"styles__members_container__grid___2q0As",backbtn:"styles__backbtn___3N99D"},t.a=i}}]);