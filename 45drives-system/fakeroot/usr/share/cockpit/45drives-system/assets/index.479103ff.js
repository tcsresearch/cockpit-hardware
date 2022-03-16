var N=Object.defineProperty;var M=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var B=(n,s,o)=>s in n?N(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,S=(n,s)=>{for(var o in s||(s={}))R.call(s,o)&&B(n,o,s[o]);if(M)for(var o of M(s))C.call(s,o)&&B(n,o,s[o]);return n};import{r as _,w as $,a as E,b as P,o as d,c as l,d as e,n as O,t as p,e as b,f as F,g as f,h as A,i as H,j as u,F as V,k as T,l as y,m as X}from"./vendor.52c3377c.js";const z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};z();var v=(n,s)=>{const o=n.__vccOpts||n;for(const[t,r]of s)o[t]=r;return o};const D={props:{moduleName:String,centerName:Boolean},setup(n){const s=_(!0);function o(){let t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("color-theme");return r===null?t:r==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),$(()=>s.value,(t,r)=>{localStorage.setItem("color-theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:E,MoonIcon:P}},q={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},U={class:"flex flex-row items-baseline basis-10"},J=["src"],Q={class:"text-2xl"},K=e("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),Y={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function G(n,s,o,t,r,c){const a=f("SunIcon"),i=f("MoonIcon");return d(),l("div",q,[e("div",U,[e("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:t.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,J),e("h1",Q,[e("span",{class:"text-red-800 dark:text-white font-bold",style:O({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),K]),o.centerName?b("",!0):(d(),l("h1",Y,p(o.moduleName),1))]),o.centerName?(d(),l("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:O({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},p(o.moduleName),5)):b("",!0),e("button",{onClick:s[0]||(s[0]=h=>t.darkMode=!t.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[t.darkMode?(d(),F(a,{key:0})):(d(),F(i,{key:1}))])])}var W=v(D,[["render",G]]);function j(n=[],s={},o="out"){const t=A({loading:!1,status:0,stdout:"",stderr:""}),r=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function c(){t.loading=!0,t.status=0,t.stdout="",t.stderr="",cockpit.spawn(n,s).then((a,i)=>{t.stdout=a,t.stderr=i}).catch((a,i)=>{var h;t.stderr=i!=null?i:a.message,t.status=(h=a.exit_status)!=null?h:-1}).finally(()=>{t.loading=!1})}return c(),r?new Promise((a,i)=>{$(t,()=>{t.loading||(t.status!==0?i(S({},t)):a(S({},t)))})}):t}const Z={components:{XCircleIcon:H},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(n){const s=_(n.errorMsg),o=_(n.FixButton),t=_(n.FixButtonHandler);return $(()=>n.FixButtonHandler,r=>{t.value=r}),$(()=>n.FixButton.value,(r,c)=>{o.value=r},{lazy:!1}),{errorMsg:s,FixButton:o,FixButtonHandler:t}}},ee={class:"flex items-center justify-evenly"},te={class:"rounded-md bg-red-50 p-4"},se={class:"flex"},oe={class:"flex-shrink-0"},re={class:"ml-3"},ne=e("h3",{class:"text-sm font-medium text-red-800"}," 45Drives System Encountered an Error ",-1),ae={class:"mt-2 text-sm text-red-700"},ce={role:"list",class:"list-disc pl-5 space-y-1"};function ie(n,s,o,t,r,c){const a=f("XCircleIcon");return d(),l("div",ee,[e("div",te,[e("div",se,[e("div",oe,[u(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",re,[ne,e("div",ae,[e("ul",ce,[(d(!0),l(V,null,T(t.errorMsg,i=>(d(),l("li",null,p(i),1))),256))])])])])]),t.FixButton?(d(),l("button",{key:0,onClick:s[0]||(s[0]=(...i)=>t.FixButtonHandler&&t.FixButtonHandler(...i)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):b("",!0)])}var de=v(Z,[["render",ie]]);const le={components:{RefreshIconOutline:y,ErrorMessage:de},setup(){const n=_(""),s=_(""),o=_(""),t=_(""),r=_(""),c=_("img/45dlogo.png"),a=_(!1),i=_([]),h=_(!1),k=_(()=>{console.log("Default handler was run for the fix button.")}),I=g=>{if(g==""||g=="?")return"img/45dlogo.png";const m=/(Storinator|Stornado).*(AV15|Q30|S45|XL60|2U|C8|MI4).*/,x=g.match(m),L={Storinator:{AV15:"img/storinatorAV15.jpg",Q30:"img/storinatorQ30.jpg",S45:"img/storinatorS45.jpg",XL60:"img/storinatorXL60.jpg",C8:"img/storinatorC8.jpg",MI4:"img/storinatorMI4.jpg"},Stornado:{"2U":"img/stornado2U.jpg",AV15:"img/stornadoAV15.jpg"}};return x?L[x[1]][x[2]]:"img/45dlogo.png"},w=async()=>{n.value="Loading...",s.value="Loading...",o.value="Loading...",t.value="Loading...",r.value="Loading...",c.value="img/45dlogo.png";try{const g=await j(["/usr/share/cockpit/45drives-system-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let m=JSON.parse(g.stdout);n.value=m.Model,s.value=m["Chassis Size"],o.value=m.Serial,t.value=m.Motherboard.Manufacturer+" "+m.Motherboard["Product Name"],r.value=m.Motherboard["Serial Number"],c.value=I(m.Model)}catch(g){console.log(g);try{let m=JSON.parse(g.stderr);i.value=[m.error_msg,'Click "Fix" to run /opt/45drives/tools/server_identifier'],a.value=!0,m.error_msg=="/etc/45drives/server_info/server_info.json does not exist"&&(h.value=!0,k.value=async()=>{try{const x=await j(["/opt/45drives/tools/server_identifier"],{err:"out",superuser:"require",promise:!0});a.value=!1,i.value="",h.value=!1,w()}catch(x){console.log(x),a.value=!0,i.value.length=0,i.value.push(x.stderr),i.value.push("An error occurred when running /opt/45drives/tools/server_identifier"),h.value=!1}})}catch(m){console.log(m),a.value=!0,i.value.length=0,i.value.push(m.stderr),i.value.push("An error occurred when trying to run /usr/share/cockpit/45drives-system/scripts/server_info"),h.value=!1}}};return w(),{sysModel:n,sysChassis:s,sysSerial:o,moboModel:t,moboSerial:r,serverImgPath:c,getSystemInfo:w,getSystemImgPath:I,fatalError:a,fatalErrorMsg:i,showFixButton:h,fixButtonHandler:k}}},ue={class:"card"},me={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},_e=e("h3",{class:"text-lg leading-6 font-semibold"},"System",-1),he={class:"mt-3 sm:mt-0 sm:ml-4"},fe={class:"card-body"},ge={key:0,class:"flex flex-row justify-evenly"},pe={class:"bg-white shadow overflow-hidden sm:rounded-lg"},ve={class:"border-b border-gray-200"},xe={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ye=e("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),be={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},$e={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},we=e("dt",{class:"text-sm font-medium text-gray-500"},"Chassis Size",-1),Se={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ke={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ie=e("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Me={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Be={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Oe=e("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Fe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},je={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Le=e("dt",{class:"text-sm font-medium text-gray-500"}," Motherboard Serial ",-1),Ne={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Re=["src"],Ce={key:1};function Ee(n,s,o,t,r,c){const a=f("RefreshIconOutline"),i=f("ErrorMessage");return d(),l("div",ue,[e("div",me,[_e,e("div",he,[e("button",{type:"button",class:"card-refresh-btn",onClick:s[0]||(s[0]=h=>t.getSystemInfo())},[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),e("div",fe,[t.fatalError?b("",!0):(d(),l("div",ge,[e("div",pe,[e("div",ve,[e("dl",null,[e("div",xe,[ye,e("dd",be,p(t.sysModel),1)]),e("div",$e,[we,e("dd",Se,p(t.sysChassis),1)]),e("div",ke,[Ie,e("dd",Me,p(t.sysSerial),1)]),e("div",Be,[Oe,e("dd",Fe,p(t.moboModel),1)]),e("div",je,[Le,e("dd",Ne,p(t.moboSerial),1)])])])]),e("img",{src:t.serverImgPath,class:"object-contain h-72 rounded-none justify-self-center"},null,8,Re)])),t.fatalError?(d(),l("div",Ce,[u(i,{errorMsg:t.fatalErrorMsg,FixButton:t.showFixButton,FixButtonHandler:t.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):b("",!0)])])}var Pe=v(le,[["render",Ee]]);const Ae={components:{RefreshIconOutline:y}},He={class:"card"},Ve={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Te=e("h3",{class:"text-lg leading-6 font-semibold"},"CPU",-1),Xe={class:"mt-3 sm:mt-0 sm:ml-4"},ze={type:"button",class:"card-refresh-btn"},De=e("div",{class:"card-body"}," This is a test... ",-1);function qe(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),l("div",He,[e("div",Ve,[Te,e("div",Xe,[e("button",ze,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),De])}var Ue=v(Ae,[["render",qe]]);const Je={components:{RefreshIconOutline:y}},Qe={class:"card"},Ke={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},Ye=e("h3",{class:"text-lg leading-6 font-semibold"},"PCI",-1),Ge={class:"mt-3 sm:mt-0 sm:ml-4"},We={type:"button",class:"card-refresh-btn"},Ze=e("div",{class:"card-body"}," This is a test... ",-1);function et(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),l("div",Qe,[e("div",Ke,[Ye,e("div",Ge,[e("button",We,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),Ze])}var tt=v(Je,[["render",et]]);const st={components:{RefreshIconOutline:y}},ot={class:"card"},rt={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},nt=e("h3",{class:"text-lg leading-6 font-semibold"},"RAM",-1),at={class:"mt-3 sm:mt-0 sm:ml-4"},ct={type:"button",class:"card-refresh-btn"},it=e("div",{class:"card-body"}," This is a test... ",-1);function dt(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),l("div",ot,[e("div",rt,[nt,e("div",at,[e("button",ct,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),it])}var lt=v(st,[["render",dt]]);const ut={components:{RefreshIconOutline:y}},mt={class:"card"},_t={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},ht=e("h3",{class:"text-lg leading-6 font-semibold"},"Network",-1),ft={class:"mt-3 sm:mt-0 sm:ml-4"},gt={type:"button",class:"card-refresh-btn"},pt=e("div",{class:"card-body"}," This is a test... ",-1);function vt(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),l("div",mt,[e("div",_t,[ht,e("div",ft,[e("button",gt,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),pt])}var xt=v(ut,[["render",vt]]);const yt={components:{RefreshIconOutline:y}},bt={class:"card"},$t={class:"card-header p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"},wt=e("h3",{class:"text-lg leading-6 font-semibold"},"IPMI LAN",-1),St={class:"mt-3 sm:mt-0 sm:ml-4"},kt={type:"button",class:"card-refresh-btn"},It=e("div",{class:"card-body"}," This is a test... ",-1);function Mt(n,s,o,t,r,c){const a=f("RefreshIconOutline");return d(),l("div",bt,[e("div",$t,[wt,e("div",St,[e("button",kt,[u(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),It])}var Bt=v(yt,[["render",Mt]]);const Ot={class:"h-full w-full overflow-y-scroll"},Ft={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 grow"},jt={setup(n){return(s,o)=>(d(),l("div",Ot,[e("div",Ft,[u(Pe),u(Ue),u(tt),u(lt),u(xt),u(Bt)])]))}};const Lt={class:"h-full flex flex-col overflow-hidden"},Nt={setup(n){return(s,o)=>(d(),l("div",Lt,[u(W,{moduleName:"System",centerName:""}),u(jt)]))}};X(Nt).mount("#app");
