import{n as V}from"./chunks/index.Da_DU5FM.js";import{d as F,h as d,b as D,w as s,E as j,o as r,J as n,c as k,G as M,F as S,p as t,m as h,t as g,a as b,V as G}from"./chunks/framework.BpLZpJbo.js";const O="/assets/DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B_.DUIR8b_p.png",$=i=>atob(i);function P(i){return[...new URL(i).searchParams].reduce((a,[l,c])=>(a[l]=c,a),{})}const I=[{link:"https://www.123pan.com/s/BEzKjv-R46qv.html",date:"2024/5/11",version:"1.0.0",changes:["从 DDSP 6.0 整合包迁移, 支持 ReflowVAESVC"],env:"v1"}],R="https://www.123pan.com/s/BEzKjv-O46qv.html",A={v1:R},T={class:"tip custom-block"},U={class:"custom-block-title"},H=["innerHTML"],J=F({__name:"comp",props:{wait_time:{},link:{},version:{}},setup(i){const{NButton:a,NSpace:l,NModalProvider:c,NCard:p,NModal:y,NCheckbox:x}=V,u=i,_=d([]),f=d([]),v=d([]),q=()=>{console.log(v.value),v.value.every(o=>o)&&v.value.length===f.value.length&&window.open(C.value,"_blank")},N=d(!1),C=d(""),e=I.find(o=>o.version===u.version);console.log(e),e!=null&&e.patch&&(_.value.push(`
该版本需要安装补丁才可使用，补丁 <a href="${e==null?void 0:e.patch}" target="_blank">点击下载</a>

使用方法：

将补丁内文件覆盖到整合包根目录
    `.split(`
`).map(o=>`<p>${o}</p>`).join("")),f.value.push("我已知晓该版本需要安装补丁")),e!=null&&e.env&&(_.value.push(`
该版本需要搭配环境包才可使用

环境版本 ${e==null?void 0:e.env}，如果您已安装过该环境包，可直接下载整合包

<a href="${A[e==null?void 0:e.env]}" target="_blank">点击下载</a>

将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可
    `.split(`
`).map(o=>`<p>${o}</p>`).join("")),f.value.push("我已知晓该版本需要安装环境包，并且知道如何安装环境（不知道的看版本额外说明）")),((e==null?void 0:e.env)=="v1"||(e==null?void 0:e.env)=="v2")&&_.value.push(`
从 1.0.0 rc11 开始到 v3 环境包(也就是 v1.1.2 本体)，包内不再自带 uvr 模型，需要自行下载

下载链接： <a href="https://www.123pan.com/s/BEzKjv-h7qqv.html">uvr 模型</a>

下载后解压至整合包根目录 完成操作后你应该能 <code>other_weights</code> 文件夹
    `.split(`
`).map(o=>`<p>${o}</p>`).join(""));const z=()=>{u.wait_time>0||(C.value=u.link,N.value=!0)};return(o,B)=>{const E=j("ClientOnly");return r(),D(E,null,{default:s(()=>[n(t(c),null,{default:s(()=>[(r(!0),k(S,null,M(_.value,(m,w)=>(r(),k("div",T,[h("p",U,"版本额外说明 "+g(w+1),1),h("div",{innerHTML:m},null,8,H)]))),256)),n(t(l),{vertical:""},{default:s(()=>[h("div",null," 等待 "+g(u.wait_time)+"s 后，方可点击跳转按钮 ",1),n(t(a),{onClick:z,style:{width:"100%"}},{default:s(()=>[b("跳转到 123 云盘")]),_:1})]),_:1}),n(t(y),{show:N.value,"onUpdate:show":B[0]||(B[0]=m=>N.value=m)},{default:s(()=>[n(t(p),{style:{width:"600px"},title:"请确认",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:s(()=>[n(t(l),{vertical:""},{default:s(()=>[(r(!0),k(S,null,M(f.value,(m,w)=>(r(),D(t(x),{checked:v.value[w],"onUpdate:checked":L=>v.value[w]=L},{default:s(()=>[b(g(m),1)]),_:2},1032,["checked","onUpdate:checked"]))),256)),n(t(a),{style:{width:"100%"},type:"info",onClick:q},{default:s(()=>[b("GOGOGO")]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})}}}),K={id:"下载中转页-version",tabindex:"-1"},Q=h("a",{class:"header-anchor",href:"#下载中转页-version","aria-label":'Permalink to "下载中转页 {{ version }}"'},"​",-1),W=G('<p>您需要查看下列的注意事项后才能跳转到网盘</p><p>其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><details class="details custom-block"><summary>新底模相关</summary><p>SVC Fusion整合包中的底模是我自己炖的 非官方底模（截至发布也没有官方底模）</p></details></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>再次说明，请使用 <strong>bandizip（最新版本）</strong> 或者 <strong>7zip</strong> 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。</p><details class="details custom-block"><summary>图片</summary><img src="'+O+'"></details></div>',4),ee=JSON.parse('{"title":"下载中转页 {{ version }}","description":"","frontmatter":{},"headers":[],"relativePath":"download/index.md","filePath":"download/index.md"}'),X={name:"download/index.md"},te=F({...X,setup(i){const a=P(typeof window>"u"?"http://localhost:5173/download/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href);console.log(a),a.link;const l=$(a.link),c=$(a.version),p=d(15);console.log(l);const y=setInterval(()=>{p.value--,p.value<=0&&clearInterval(y)},1e3);return(x,u)=>(r(),k("div",null,[h("h1",K,[b("下载中转页 "+g(t(c))+" ",1),Q]),W,n(J,{wait_time:p.value,link:t(l),version:t(c)},null,8,["wait_time","link","version"])]))}});export{ee as __pageData,te as default};
