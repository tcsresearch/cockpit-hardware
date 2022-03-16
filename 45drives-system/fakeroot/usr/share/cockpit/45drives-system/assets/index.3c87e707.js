var F=Object.defineProperty;var M=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var O=(n,s,o)=>s in n?F(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,w=(n,s)=>{for(var o in s||(s={}))L.call(s,o)&&O(n,o,s[o]);if(M)for(var o of M(s))E.call(s,o)&&O(n,o,s[o]);return n};import{r as _,w as S,a as C,b as P,o as d,c as m,d as e,n as B,t as x,e as b,f as j,g as f,h as H,i as A,j as l,k as y,l as V}from"./vendor.ccb89afd.js";const T=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};T();var v=(n,s)=>{const o=n.__vccOpts||n;for(const[t,r]of s)o[t]=r;return o};const X={props:{moduleName:String,centerName:Boolean},setup(n){const s=_(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?t:r==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),S(()=>s.value,(t,r)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:C,MoonIcon:P}},D={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},z={class:"flex flex-row items-baseline basis-10"},Q=["src"],q={class:"text-2xl"},U=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),J={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function Y(n,s,o,t,r,c){const a=f("SunIcon"),i=f("MoonIcon");return d(),m("div",D,[e("div",z,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,Q),e("h1",q,[e("span",{class:"text-red-800 dark:text-white font-bold",style:B({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),U]),o.centerName?b("",!0):(d(),m("h1",J,x(o.moduleName),1))]),o.centerName?(d(),m("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:B({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},x(o.moduleName),5)):b("",!0),e("button",{onClick:s[0]||(s[0]=g=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(d(),j(a,{key:0})):(d(),j(i,{key:1}))])])}var K=v(X,[["render",Y]]);function N(n=[],s={},o="out"){const t=H({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function c(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(n,s).then((a,i)=>{t.stdout=a,t.stderr=i}).catch((a,i)=>{var g;t.stderr=i!=null?i:a.message,t.status=(g=a.exit_status)!=null?g:-1}).finally(()=>{t.loading=!1})}return c(),r?new Promise((a,i)=>{S(t,()=>{t.loading||(t.status!==0?i(w({},t)):a(w({},t)))})}):t}const G={components:{XCircleIcon:A},props:{errorMsg:String,FixButton:Boolean,FixButtonHandler:Function},setup(n){const s=_(n.errorMsg),o=_(n.FixButton),t=_(n.FixButtonHandler);return S(()=>n.FixButtonHandler,r=>{t.value=r}),{errorMsg:s,FixButton:o,FixButtonHandler:t}}},W={class:"flex items-center justify-evenly"},Z={class:"rounded-md bg-red-50 p-4"},ee={class:"flex"},te={class:"flex-shrink-0"},se={class:"ml-3"},oe=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),re={class:"mt-2 text-sm text-red-700"},ne={role:"list",class:"list-disc pl-5 space-y-1"};function ae(n,s,o,t,r,c){const a=f("XCircleIcon");return d(),m("div",W,[e("div",Z,[e("div",ee,[e("div",te,[l(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",se,[oe,e("div",re,[e("ul",ne,[e("li",null,x(t.errorMsg),1)])])])])]),t.FixButton?(d(),m("button",{key:0,onClick:s[0]||(s[0]=(...i)=>t.FixButtonHandler&&t.FixButtonHandler(...i)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):b("",!0)])}var ce=v(G,[["render",ae]]);const ie={components:{RefreshIconOutline:y,ErrorMessage:ce},setup(){const n=_(""),s=_(""),o=_(""),t=_(""),r=_(""),c=_("img/45dlogo.png"),a=_(!1),i=_(""),g=_(!1),I=_(()=>{console.log("Default handler was run for the fix button.")}),k=p=>{if(p==""||p=="?")return"img/storinatorQ30.jpg";const u=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,h=p.match(u),R={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return!h[1]||!h[2]?"img/storinatorQ30.jpg":R[h[1]][h[2]]},$=async()=>{n.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",r.value="Loading...",c.value="img/45dlogo.png";try{const p=await N(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let u=JSON.parse(p.stdout);console.log("SYSINFO:",p),n.value=u.Model,s.value=u["Chassis Size"],o.value=u.Serial,t.value=u.Motherboard.Manufacturer+" "+u.Motherboard["Product Name"],r.value=u.Motherboard["Serial Number"],c.value=k(u.Model)}catch(p){try{let u=JSON.parse(p.stderr);console.log("HERE:",p),i.value=u.error_msg,a.value=!0,u.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(g.value=!0,I.value=async()=>{try{const h=await N(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});console.log(h),a.value=!1,i.value=h.stderr,g.value=!1,$()}catch(h){console.log(h),a.value=!0,i.value=h.stderr,g.value=!1}})}catch(u){a.value=!0,i.value=u}}};return $(),{sysModel:n,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:r,serverImgPath:c,getSystemInfo:$,getSystemImgPath:k,fatalError:a,fatalErrorMsg:i,showFixButton:g,fixButtonHandler:I}}},de={class:"card"},le={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},me=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),ue={class:"mt-3 sm:mt-0 sm:ml-4"},_e={class:"card-body"},he={key:0,class:"flex flex-row justify-evenly"},fe={class:"bg-white shadow overflow-hidden sm:rounded-lg"},ge={class:"border-b border-gray-200"},pe={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},xe=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),ve={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ye={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},be=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),$e={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},we={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Se=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Ie={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ke={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Me=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Oe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Be={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},je=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Ne={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Re=["src"],Fe={key:1};function Le(n,s,o,t,r,c){const a=f("RefreshIconOutline"),i=f("ErrorMessage");return d(),m("div",de,[e("div",le,[me,e("div",ue,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=g=>t.getSystemInfo())},[l(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",_e,[t.fatalError?b("",!0):(d(),m("div",he,[e("div",fe,[e("div",ge,[e("dl",null,[e("div",pe,[xe,e("dd",ve,x(t.sysModel),1)]),e("div",ye,[be,e("dd",$e,x(t.sysChassis),1)]),e("div",we,[Se,e("dd",Ie,x(t.sysSerial),1)]),e("div",ke,[Me,e("dd",Oe,x(t.moboModel),1)]),e("div",Be,[je,e("dd",Ne,x(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,Re)])),t.fatalError?(d(),m("div",Fe,[l(i,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):b("",!0)])])}var Ee=v(ie,[["render",Le]]);const Ce={components:{RefreshIconOutline:y}},Pe={class:"card"},He={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Ae=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),Ve={class:"mt-3 sm:mt-0 sm:ml-4"},Te={type:"button",class:"card-refresh-btn"},Xe=e("div",{class:"card-body"}," This is a test... ",-1);function De(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),m("div",Pe,[e("div",He,[Ae,e("div",Ve,[e("button",Te,[l(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Xe])}var ze=v(Ce,[["render",De]]);const Qe={components:{RefreshIconOutline:y}},qe={class:"card"},Ue={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Je=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),Ye={class:"mt-3 sm:mt-0 sm:ml-4"},Ke={type:"button",class:"card-refresh-btn"},Ge=e("div",{class:"card-body"}," This is a test... ",-1);function We(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),m("div",qe,[e("div",Ue,[Je,e("div",Ye,[e("button",Ke,[l(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Ge])}var Ze=v(Qe,[["render",We]]);const et={components:{RefreshIconOutline:y}},tt={class:"card"},st={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},ot=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),rt={class:"mt-3 sm:mt-0 sm:ml-4"},nt={type:"button",class:"card-refresh-btn"},at=e("div",{class:"card-body"}," This is a test... ",-1);function ct(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),m("div",tt,[e("div",st,[ot,e("div",rt,[e("button",nt,[l(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),at])}var it=v(et,[["render",ct]]);const dt={components:{RefreshIconOutline:y}},lt={class:"card"},mt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},ut=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),_t={class:"mt-3 sm:mt-0 sm:ml-4"},ht={type:"button",class:"card-refresh-btn"},ft=e("div",{class:"card-body"}," This is a test... ",-1);function gt(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),m("div",lt,[e("div",mt,[ut,e("div",_t,[e("button",ht,[l(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),ft])}var pt=v(dt,[["render",gt]]);const xt={components:{RefreshIconOutline:y}},vt={class:"card"},yt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},bt=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),$t={class:"mt-3 sm:mt-0 sm:ml-4"},wt={type:"button",class:"card-refresh-btn"},St=e("div",{class:"card-body"}," This is a test... ",-1);function It(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),m("div",vt,[e("div",yt,[bt,e("div",$t,[e("button",wt,[l(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),St])}var kt=v(xt,[["render",It]]);const Mt={class:"h-full w-full overflow-y-scroll"},Ot={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},Bt={setup(n){return(s,o)=>(d(),m("div",Mt,[e("div",Ot,[l(Ee),l(ze),l(Ze),l(it),l(pt),l(kt)])]))}};const jt={class:"h-full flex flex-col overflow-hidden"},Nt={setup(n){return(s,o)=>(d(),m("div",jt,[l(K,{moduleName:"System",centerName:""}),l(Bt)]))}};V(Nt).mount("#app");