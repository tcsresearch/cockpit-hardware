var R=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var I=(n,s,o)=>s in n?R(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,b=(n,s)=>{for(var o in s||(s={}))L.call(s,o)&&I(n,o,s[o]);if(k)for(var o of k(s))N.call(s,o)&&I(n,o,s[o]);return n};import{r as u,w as j,a as C,b as E,o as i,c as m,d as e,n as M,t as g,e as x,f as O,g as h,h as P,i as B,j as d,k as y,l as A}from"./vendor.ccb89afd.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};F();var p=(n,s)=>{const o=n.__vccOpts||n;for(const[t,r]of s)o[t]=r;return o};const V={props:{moduleName:String,centerName:Boolean},setup(n){const s=u(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?t:r==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),j(()=>s.value,(t,r)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:C,MoonIcon:E}},T={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},X={class:"flex flex-row items-baseline basis-10"},z=["src"],D={class:"text-2xl"},Q=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),U={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function q(n,s,o,t,r,c){const a=h("SunIcon"),l=h("MoonIcon");return i(),m("div",T,[e("div",X,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,z),e("h1",D,[e("span",{class:"text-red-800 dark:text-white font-bold",style:M({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),Q]),o.centerName?x("",!0):(i(),m("h1",U,g(o.moduleName),1))]),o.centerName?(i(),m("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:M({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},g(o.moduleName),5)):x("",!0),e("button",{onClick:s[0]||(s[0]=v=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(i(),O(a,{key:0})):(i(),O(l,{key:1}))])])}var J=p(V,[["render",q]]);function H(n=[],s={},o="out"){const t=P({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function c(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(n,s).then((a,l)=>{t.stdout=a,t.stderr=l}).catch((a,l)=>{var v;t.stderr=l!=null?l:a.message,t.status=(v=a.exit_status)!=null?v:-1}).finally(()=>{t.loading=!1})}return c(),r?new Promise((a,l)=>{j(t,()=>{t.loading||(t.status!==0?l(b({},t)):a(b({},t)))})}):t}const K={components:{XCircleIcon:B},props:{errorMsg:String,FixButton:Boolean},setup(n){const s=u(n.errorMsg),o=u(n.FixButton);return{errorMsg:s,FixButton:o}}},Y={class:"flex"},G={class:"rounded-md bg-red-50 p-4"},W={class:"flex"},Z={class:"flex-shrink-0"},ee={class:"ml-3"},te=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),se={class:"mt-2 text-sm text-red-700"},oe={role:"list",class:"list-disc pl-5 space-y-1"},re={key:0,type:"button",class:"grow-0 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"};function ne(n,s,o,t,r,c){const a=h("XCircleIcon");return i(),m("div",Y,[e("div",G,[e("div",W,[e("div",Z,[d(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",ee,[te,e("div",se,[e("ul",oe,[e("li",null,g(t.errorMsg),1)])])])])]),t.FixButton?(i(),m("button",re," Resolve ")):x("",!0)])}var ae=p(K,[["render",ne]]);const ce={components:{RefreshIconOutline:y,ErrorMessage:ae},setup(){const n=u(""),s=u(""),o=u(""),t=u(""),r=u(""),c=u("img/45dlogo.png"),a=u(!1),l=u(""),v=u(!1),$=f=>{if(f==""||f=="?")return"img/storinatorQ30.jpg";const _=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,S=f.match(_);return{Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}}[S[1]][S[2]]},w=async()=>{n.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",r.value="Loading...",c.value="img/45dlogo.png";try{const f=await H(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let _=JSON.parse(f.stdout);n.value=_.Model,s.value=_["Chassis Size"],o.value=_.Serial,t.value=_.Motherboard.Manufacturer+" "+_.Motherboard["Product Name"],r.value=_.Motherboard["Serial Number"],c.value=$(_.Model)}catch(f){console.log(f);try{let _=JSON.parse(f.stderr);l.value=_.error_msg,a.value=!0,_.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(v.value=!0)}catch{a.value=!0,l.value=f.stderr}}};return w(),{sysModel:n,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:r,serverImgPath:c,getSystemInfo:w,getSystemImgPath:$,fatalError:a,fatalErrorMsg:l,showFixButton:v}}},ie={class:"card"},de={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},le=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),me={class:"mt-3 sm:mt-0 sm:ml-4"},_e={class:"card-body"},ue={key:0,class:"flex flex-row justify-evenly"},he={class:"bg-white shadow overflow-hidden sm:rounded-lg"},fe={class:"border-b border-gray-200"},ge={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},pe=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),ve={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ye={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},xe=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),be={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},$e={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},we=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Se={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ke={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ie=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Me={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Oe={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},je=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Re={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Le=["src"],Ne={key:1};function Ce(n,s,o,t,r,c){const a=h("RefreshIconOutline"),l=h("ErrorMessage");return i(),m("div",ie,[e("div",de,[le,e("div",me,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=v=>t.getSystemInfo())},[d(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",_e,[t.fatalError?x("",!0):(i(),m("div",ue,[e("div",he,[e("div",fe,[e("dl",null,[e("div",ge,[pe,e("dd",ve,g(t.sysModel),1)]),e("div",ye,[xe,e("dd",be,g(t.sysChassis),1)]),e("div",$e,[we,e("dd",Se,g(t.sysSerial),1)]),e("div",ke,[Ie,e("dd",Me,g(t.moboModel),1)]),e("div",Oe,[je,e("dd",Re,g(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,Le)])),t.fatalError?(i(),m("div",Ne,[d(l,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton},null,8,["errorMsg","FixButton"])])):x("",!0)])])}var Ee=p(ce,[["render",Ce]]);const Pe={components:{RefreshIconOutline:y}},Be={class:"card"},Ae={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Fe=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),Ve={class:"mt-3 sm:mt-0 sm:ml-4"},Te={type:"button",class:"card-refresh-btn"},Xe=e("div",{class:"card-body"}," This is a test... ",-1);function ze(n,s,o,t,r,c){const a=h("RefreshIconOutline");return i(),m("div",Be,[e("div",Ae,[Fe,e("div",Ve,[e("button",Te,[d(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Xe])}var De=p(Pe,[["render",ze]]);const Qe={components:{RefreshIconOutline:y}},Ue={class:"card"},qe={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Je=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),He={class:"mt-3 sm:mt-0 sm:ml-4"},Ke={type:"button",class:"card-refresh-btn"},Ye=e("div",{class:"card-body"}," This is a test... ",-1);function Ge(n,s,o,t,r,c){const a=h("RefreshIconOutline");return i(),m("div",Ue,[e("div",qe,[Je,e("div",He,[e("button",Ke,[d(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Ye])}var We=p(Qe,[["render",Ge]]);const Ze={components:{RefreshIconOutline:y}},et={class:"card"},tt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},st=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),ot={class:"mt-3 sm:mt-0 sm:ml-4"},rt={type:"button",class:"card-refresh-btn"},nt=e("div",{class:"card-body"}," This is a test... ",-1);function at(n,s,o,t,r,c){const a=h("RefreshIconOutline");return i(),m("div",et,[e("div",tt,[st,e("div",ot,[e("button",rt,[d(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),nt])}var ct=p(Ze,[["render",at]]);const it={components:{RefreshIconOutline:y}},dt={class:"card"},lt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},mt=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),_t={class:"mt-3 sm:mt-0 sm:ml-4"},ut={type:"button",class:"card-refresh-btn"},ht=e("div",{class:"card-body"}," This is a test... ",-1);function ft(n,s,o,t,r,c){const a=h("RefreshIconOutline");return i(),m("div",dt,[e("div",lt,[mt,e("div",_t,[e("button",ut,[d(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),ht])}var gt=p(it,[["render",ft]]);const pt={components:{RefreshIconOutline:y}},vt={class:"card"},yt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},xt=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),bt={class:"mt-3 sm:mt-0 sm:ml-4"},$t={type:"button",class:"card-refresh-btn"},wt=e("div",{class:"card-body"}," This is a test... ",-1);function St(n,s,o,t,r,c){const a=h("RefreshIconOutline");return i(),m("div",vt,[e("div",yt,[xt,e("div",bt,[e("button",$t,[d(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),wt])}var kt=p(pt,[["render",St]]);const It={class:"h-full w-full overflow-y-scroll"},Mt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Ot={setup(n){return(s,o)=>(i(),m("div",It,[e("div",Mt,[d(Ee),d(De),d(We),d(ct),d(gt),d(kt)])]))}};const jt={class:"h-full flex flex-col overflow-hidden"},Rt={setup(n){return(s,o)=>(i(),m("div",jt,[d(J,{moduleName:"System",centerName:""}),d(Ot)]))}};A(Rt).mount("#app");
