var E=Object.defineProperty;var M=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(r,s,o)=>s in r?E(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,k=(r,s)=>{for(var o in s||(s={}))A.call(s,o)&&$(r,o,s[o]);if(M)for(var o of M(s))O.call(s,o)&&$(r,o,s[o]);return r};import{r as v,w as b,a as N,b as D,c as m,o as i,d as l,e as t,n as F,t as u,f,g as p,P as B,h as P,i as _,F as S,j as C,k as g,l as w,m as j}from"./vendor.dda642bf.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(n){if(n.ep)return;n.ep=!0;const d=o(n);fetch(n.href,d)}};L();var h=(r,s)=>{const o=r.__vccOpts||r;for(const[e,n]of s)o[e]=n;return o};const R={props:{moduleName:String,centerName:Boolean},setup(r){const s=v(!0);function o(){let e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("color-theme");return n===null?e:n==="dark"}return s.value=o(),s.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),b(()=>s.value,(e,n)=>{localStorage.setItem("color-theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{lazy:!1}),{darkMode:s}},components:{SunIcon:N,MoonIcon:D}},q={class:"p-2 flex items-baseline justify-between bg-neutral-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-700",style:{"font-family":"Red Hat Text",position:"relative"}},X={class:"flex flex-row items-baseline basis-10"},V=["src"],W={class:"text-2xl"},J=t("span",{class:"text-gray-800 dark:text-red-600"},"Drives",-1),U={key:0,class:"ml-5 text-red-800 dark:text-white text-2xl"};function z(r,s,o,e,n,d){const a=m("SunIcon"),c=m("MoonIcon");return i(),l("div",q,[t("div",X,[t("img",{class:"w-6 h-6 text-gray-50 mr-0.5 self-center",src:e.darkMode?"img/45d-fan-dark.svg":"img/45d-fan-light.svg"},null,8,V),t("h1",W,[t("span",{class:"text-red-800 dark:text-white font-bold",style:F({"font-family":"Source Sans Pro","font-size":"1.6rem"})},"45",4),J]),o.centerName?f("",!0):(i(),l("h1",U,u(o.moduleName),1))]),o.centerName?(i(),l("h1",{key:0,class:"text-red-800 dark:text-white text-2xl",style:F({position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"})},u(o.moduleName),5)):f("",!0),t("button",{onClick:s[0]||(s[0]=x=>e.darkMode=!e.darkMode),id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none rounded-lg text-sm p-2.5 justify-self-end w-10 h-10 basis-10"},[e.darkMode?(i(),p(a,{key:0})):(i(),p(c,{key:1}))])])}var T=h(R,[["render",z]]);const K={name:"P5Canvas",mounted(){const r=function(s){var o=2,e=35;s.setup=n=>{s.createCanvas(570,900).parent("p5-canvas")},s.draw=n=>{s.background(245);const d=s.frameCount*3,a=s.sin(s.radians(d))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=o,(e>s.width-35||e<35)&&(o*=-1)}};new B(r)}},Y={id:"p5-canvas",class:"mx-auto"};function G(r,s,o,e,n,d){return i(),l("div",Y)}var Q=h(K,[["render",G]]);const Z={components:{XCircleIcon:P},props:{errorMsg:Array,FixButton:Boolean,FixButtonHandler:Function},setup(r){const s=v(r.errorMsg),o=v(r.FixButtonHandler);return b(()=>r.FixButtonHandler,e=>{o.value=e}),{errorMsg:s,FixButtonHandler:o}}},ee={class:"flex items-center justify-evenly"},se={class:"rounded-md bg-red-50 p-4"},te={class:"flex"},re={class:"flex-shrink-0"},oe={class:"ml-3"},ne=t("h3",{class:"text-sm font-medium text-red-800"}," 45Drives Disks Encountered an Error ",-1),ae={class:"mt-2 text-sm text-red-700"},de={role:"list",class:"list-disc pl-5 space-y-1 whitespace-pre"};function ie(r,s,o,e,n,d){const a=m("XCircleIcon");return i(),l("div",ee,[t("div",se,[t("div",te,[t("div",re,[_(a,{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",oe,[ne,t("div",ae,[t("ul",de,[(i(!0),l(S,null,C(e.errorMsg,c=>(i(),l("li",null,u(c),1))),256))])])])])]),o.FixButton?(i(),l("button",{key:0,onClick:s[0]||(s[0]=(...c)=>e.FixButtonHandler&&e.FixButtonHandler(...c)),type:"button",class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"}," Fix ")):f("",!0)])}var H=h(Z,[["render",ie]]);function y(r=[],s={},o="out"){const e=g({loading:!1,status:0,stdout:"",stderr:""}),n=Boolean(s.promise);s.superuser||(s.superuser="require"),s.err=o==="out"?"out":"message";async function d(){e.loading=!0,e.status=0,e.stdout="",e.stderr="",cockpit.spawn(r,s).then((a,c)=>{e.stdout=a,e.stderr=c}).catch((a,c)=>{var x;e.stderr=c!=null?c:a.message,e.status=(x=a.exit_status)!=null?x:-1}).finally(()=>{e.loading=!1})}return d(),n?new Promise((a,c)=>{b(e,()=>{e.loading||(e.status!==0?c(k({},e)):a(k({},e)))})}):e}const le={setup(){const r=v(),s=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}}),o=v(),e=g({errorFlag:!1,errorMessage:[],showFixButton:!1,fixButtonHandler:()=>{console.log("Default handler was run for the fix button.")}});return console.log(s),console.log(e),{runServerInfo:async()=>{try{const a=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(a.stdout);console.log(c),r.value=a.stdout,s.errorFlag=!1,s.errorMessage.length=0,s.showFixButton=!1}catch(a){console.log(a),s.errorFlag=!0,s.errorMessage.length=0,s.errorMessage.push(a.stderr),s.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),s.showFixButton=!1}},runLsdev:async()=>{try{const a=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let c=JSON.parse(a.stdout);console.log(c),o.value=a.stdout,e.errorFlag=!1,e.errorMessage.length=0,e.showFixButton=!1}catch(a){console.log(a),e.errorFlag=!0,e.errorMessage.length=0,e.errorMessage.push(a.stderr),e.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),e.showFixButton=!1}},serverInfo:r,serverInfoError:s,lsdevInfo:o,lsdevError:e}},components:{RefreshIconOutline:w,ErrorMessage:H}},ce={class:"card m-3 grow"},ue=t("div",{class:"card-header p-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg leading-6 font-semibold"},"Debug Section")],-1),fe={class:"card-body dark:bg-stone-700"},me={class:"mt-3 sm:mt-0 sm:ml-4"},_e={key:0},he={class:"w-3/4 m-2"},ve={class:"whitespace-pre"},ge={key:1},xe={class:"mt-3 sm:mt-0 sm:ml-4"},pe={key:2,class:"mt-2 flex"},ye={class:"w-3/4 m-2"},ke={class:"whitespace-pre"},be={key:3};function we(r,s,o,e,n,d){const a=m("ErrorMessage");return i(),l("div",ce,[ue,t("div",fe,[t("div",me,[t("button",{type:"button",onClick:s[0]||(s[0]=c=>e.runServerInfo()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "server_info" ')]),e.serverInfoError.errorFlag?f("",!0):(i(),l("div",_e,[t("div",he,[t("div",ve,u(e.serverInfo),1)])])),e.serverInfoError.errorFlag?(i(),l("div",ge,[_(a,{errorMsg:e.serverInfoError.errorMessage,FixButton:e.serverInfoError.showFixButton,FixButtonHandler:e.serverInfoError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),t("div",xe,[t("button",{type:"button",onClick:s[1]||(s[1]=c=>e.runLsdev()),class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},' run "lsdev" ')]),e.lsdevError.errorFlag?f("",!0):(i(),l("div",pe,[t("div",ye,[t("div",ke,u(e.lsdevInfo),1)])])),e.lsdevError.errorFlag?(i(),l("div",be,[_(a,{errorMsg:e.lsdevError.errorMessage,FixButton:e.lsdevError.showFixButton,FixButtonHandler:e.lsdevError.fixButtonHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])}var Ie=h(le,[["render",we]]);const Me={props:{serverInfo:Object},setup(r){return{serverInfo:g(r.serverInfo)}}},$e={class:"card m-2 flex-auto flex flex-col"},Fe=t("div",{class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},[t("h3",{class:"text-lg py-1 leading-6 font-semibold"},"Server")],-1),Be={class:"card-body dark:bg-stone-700 grow flex"},Se={class:"grow flex flex-col items-stretch"},Ce={class:"mt-0"},He={class:"sm:divide-y sm:divide-gray-200"},Ee={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Ae=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),Oe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},Ne={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},De=t("dt",{class:"text-sm font-medium text-gray-500"},"Serial",-1),Pe={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},je={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Le=t("dt",{class:"text-sm font-medium text-gray-500"}," Operating System ",-1),Re={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},qe={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Xe=t("dt",{class:"text-sm font-medium text-gray-500"},"Motherboard",-1),Ve={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3"},We={class:"py-2 sm:py-2 sm:grid sm:grid-cols-4 sm:gap-4"},Je={class:"text-sm font-medium text-gray-500"},Ue=t("dt",{class:"text-sm font-medium text-gray-500"},"Model",-1),ze={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},Te=t("dt",{class:"text-sm font-medium text-gray-500"},"Controller ID",-1),Ke={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"},Ye=t("dt",{class:"text-sm font-medium text-gray-500"},"PCI Slot",-1),Ge={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"};function Qe(r,s,o,e,n,d){return i(),l("div",$e,[Fe,t("div",Be,[t("div",Se,[t("div",Ce,[t("dl",He,[t("div",Ee,[Ae,t("dd",Oe,u(e.serverInfo.Model),1)]),t("div",Ne,[De,t("dd",Pe,u(e.serverInfo.Serial),1)]),t("div",je,[Le,t("dd",Re,u(e.serverInfo["OS NAME"])+" - "+u(e.serverInfo["OS VERSION_ID"]),1)]),t("div",qe,[Xe,t("dd",Ve,u(e.serverInfo.Motherboard.Manufacturer)+" - "+u(e.serverInfo.Motherboard["Product Name"]),1)]),(i(!0),l(S,null,C(e.serverInfo.HBA,a=>(i(),l("div",We,[t("dt",Je,"HBA"+u(a.Ctl+1),1),t("div",null,[Ue,t("dd",ze,u(a.Model),1)]),t("div",null,[Te,t("dd",Ke,u(a.Ctl),1)]),t("div",null,[Ye,t("dd",Ge,u(a["PCI Slot"]),1)])]))),256))])])])])])}var Ze=h(Me,[["render",Qe]]);const es={components:{RefreshIconOutline:w},props:{diskInfo:Object},setup(r){const s=g(r.diskInfo),o=v("Click on a disk for more detail."),e=v(!0);return{diskInfo:s,wMsg:o,showWelcome:e}}},ss={class:"card m-2 flex-auto flex flex-col"},ts={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},rs=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Information",-1),os={class:"mt-3 sm:mt-0 sm:ml-4"},ns={type:"button",class:"card-refresh-btn"},as={class:"card-body dark:bg-stone-700 grow flex flex-col"},ds={key:0},is={key:1,class:"grow flex justify-center items-center"},ls={class:"p-5 bg-stone-100 dark:bg-stone-600 rounded-lg text-stone-500 dark:text-stone-300"};function cs(r,s,o,e,n,d){const a=m("RefreshIconOutline");return i(),l("div",ss,[t("div",ts,[rs,t("div",os,[t("button",ns,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",as,[e.showWelcome?f("",!0):(i(),l("div",ds," here is where the info goes.. and if it isn't there, it'll show the welcome. ")),e.showWelcome?(i(),l("div",is,[t("div",ls,u(e.wMsg),1)])):f("",!0)])])}var us=h(es,[["render",cs]]);const fs={name:"P5Stornado2U",mounted(){const r=function(s){var o=2,e=35;s.preload=n=>{},s.setup=n=>{s.createCanvas(1178,217).parent("p5-stornado2u")},s.draw=n=>{s.background(245);const d=s.frameCount*3,a=s.sin(s.radians(d))*50;s.push(),s.translate(0,s.height/2),s.fill(66,184,131),s.stroke(53,73,94),s.strokeWeight(5),s.ellipse(e,a,50,50),s.pop(),e+=o,(e>s.width-35||e<35)&&(o*=-1)}};new B(r)}},ms={id:"p5-stornado2u",class:"mx-auto"};function _s(r,s,o,e,n,d){return i(),l("div",ms)}var hs=h(fs,[["render",_s]]);const vs={components:{RefreshIconOutline:w,P5Stornado2U:hs}},gs={class:"card m-2 mx-auto"},xs={class:"card-header py-2 px-5 border-b border-stone-200 dark:border-stone-500 dark:bg-stone-700 sm:flex sm:items-center sm:justify-between"},ps=t("h3",{class:"text-lg leading-6 font-semibold"},"Disk Viewer",-1),ys={class:"mt-3 sm:mt-0 sm:ml-4"},ks={type:"button",class:"card-refresh-btn"},bs={class:"card-body dark:bg-stone-700 flex-auto flex flex-col items-center content-center p-0"};function ws(r,s,o,e,n,d){const a=m("RefreshIconOutline"),c=m("P5Stornado2U");return i(),l("div",gs,[t("div",xs,[ps,t("div",ys,[t("button",ks,[_(a,{class:"h-5 w-5","aria-hidden":"true"})])])]),t("div",bs,[_(c)])])}var Is=h(vs,[["render",ws]]);const Ms={name:"App",components:{P5Canvas:Q,FfdHeader:T,DebugBox:Ie,ServerSection:Ze,DiskSection:us,CanvasSection:Is,ErrorMessage:H},setup(){const r=g({serverInfo:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}},lsdev:{content:null,finished:!1,failed:!1,errorMessage:[],fixAvailable:!1,fixHandler:()=>{console.log("Default handler was run for the fix button.")}}}),s=async()=>{try{const e=await y(["/usr/share/cockpit/45drives-disks-vue/scripts/server_info"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),r.serverInfo.content=n,r.serverInfo.finished=!0,r.serverInfo.failed=!1,r.serverInfo.fixAvailable=!1}catch(e){console.log(e),r.serverInfo.content=null,r.serverInfo.finished=!1,r.serverInfo.failed=!0,r.serverInfo.fixAvailable=!1,r.serverInfo.errorMessage.length=0,r.serverInfo.errorMessage.push("An error occurred when trying to run /usr/share/cockpit/45drives-disks/scripts/server_info"),r.serverInfo.errorMessage.push(e.stderr)}},o=async()=>{try{const e=await y(["/opt/45drives/tools/lsdev","--json"],{err:"out",superuser:"require",promise:!0});let n=JSON.parse(e.stdout);console.log(n),r.lsdev.content=n,r.lsdev.finished=!0,r.lsdev.failed=!1,r.lsdev.fixAvailable=!1}catch(e){console.log(e),r.lsdev.content=null,r.lsdev.finished=!1,r.lsdev.failed=!0,r.lsdev.fixAvailable=!1,r.lsdev.errorMessage.length=0,r.lsdev.errorMessage.push("An error occurred when trying to run /opt/45drives/tools/lsdev"),r.lsdev.errorMessage.push(e.stderr)}};return s(),o(),{preloadChecks:r,runServerInfo:s,runLsdev:o}}},$s={id:"App"},Fs={class:"h-screen flex flex-col overflow-hidden"},Bs={class:"flex flex-wrap overflow-y-auto"},Ss={class:"flex-auto flex items-center justify-evenly mt-2 mx-2"},Cs={key:0,class:"p-2 m-2"},Hs={key:1,class:"p-2 m-2"};function Es(r,s,o,e,n,d){const a=m("FfdHeader"),c=m("CanvasSection"),x=m("DiskSection"),I=m("ErrorMessage");return i(),l("div",$s,[t("div",Fs,[_(a,{moduleName:"Disks",centerName:""}),t("div",Bs,[e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(i(),p(c,{key:0,serverInfo:e.preloadChecks.serverInfo.content,lsdev:e.preloadChecks.lsdev.content},null,8,["serverInfo","lsdev"])):f("",!0),e.preloadChecks.serverInfo.finished&&e.preloadChecks.lsdev.finished?(i(),p(x,{key:1,diskInfo:e.preloadChecks.lsdev.content},null,8,["diskInfo"])):f("",!0)]),t("div",Ss,[e.preloadChecks.serverInfo.failed?(i(),l("div",Cs,[_(I,{errorMsg:e.preloadChecks.serverInfo.errorMessage,FixButton:e.preloadChecks.serverInfo.fixAvailable,FixButtonHandler:e.preloadChecks.serverInfo.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0),e.preloadChecks.lsdev.failed?(i(),l("div",Hs,[_(I,{errorMsg:e.preloadChecks.lsdev.errorMessage,FixButton:e.preloadChecks.lsdev.fixAvailable,FixButtonHandler:e.preloadChecks.lsdev.fixHandler},null,8,["errorMsg","FixButton","FixButtonHandler"])])):f("",!0)])])])}var As=h(Ms,[["render",Es]]);j(As).mount("#app");