import{n as z}from"./chunks/index.Da_DU5FM.js";import{d as S,h as d,b as B,w as l,E as F,o as r,J as s,c as k,G as D,F as E,p as t,m as _,t as g,a as b,V as O}from"./chunks/framework.BpLZpJbo.js";const q="/assets/DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B_.DUIR8b_p.png",M=i=>atob(i);function G(i){return[...new URL(i).searchParams].reduce((a,[o,c])=>(a[o]=c,a),{})}const I=[{link:"https://www.123pan.com/s/PMNsjv-6a4l.html",date:"2024/8/2",version:"1.0.0",changes:["正式版发布"],env:null,linux:"https://www.123pan.com/s/BEzKjv-3JVqv.html"},{link:"https://www.123pan.cn/s/PMNsjv-W14l.html",date:"2024/7/22",version:"1.0.0 beta 7",changes:["全新的整合包"],env:null},{link:"https://www.123pan.cn/s/BEzKjv-a06qv.html",date:"2024/6/1",version:"0.0.1",changes:["修复了很多 bug","很忙，之前一直在群里发的，如果你更新了群里的就没必要更新这个了"],env:"v1"},{link:"https://www.123pan.cn/s/BEzKjv-K46qv.html",date:"2024/5/11",version:"0.0.0",changes:["从 DDSP 6.0 整合包迁移, 支持 ReflowVAESVC","**仅供尝鲜，目前没有进行过全量测试，有bug麻烦群内私聊发我**"],env:"v1"}],A="https://www.123pan.cn/s/BEzKjv-O46qv.html",R={v1:A},T={class:"tip custom-block"},K={class:"custom-block-title"},U=["innerHTML"],H=S({__name:"comp",props:{wait_time:{},link:{},version:{}},setup(i){const{NButton:a,NSpace:o,NModalProvider:c,NCard:p,NModal:x,NCheckbox:y}=z,u=i,f=d([]),v=d([]),h=d([]),L=()=>{console.log(h.value),h.value.every(n=>n)&&h.value.length===v.value.length&&window.open(C.value,"_blank")},N=d(!1),C=d(""),e=I.find(n=>n.version===u.version);console.log(e),e!=null&&e.patch&&(f.value.push(`
该版本需要安装补丁才可使用，补丁 <a href="${e==null?void 0:e.patch}" target="_blank">点击下载</a>

使用方法：

将补丁内文件覆盖到整合包根目录
    `.split(`
`).map(n=>`<p>${n}</p>`).join("")),v.value.push("我已知晓该版本需要安装补丁")),e!=null&&e.linux&&(f.value.push(`
该版本有 Linux 补丁可用

Linux 用户可在下载完整包后，下载 <a href="${e==null?void 0:e.linux}" target="_blank">补丁</a> 覆盖到整合包根目录以使用

环境请自行解决

详细请看：<a href="/start/linux.html" target="_blank">Linux 补丁使用说明</a>
    `.split(`
`).map(n=>`<p>${n}</p>`).join("")),v.value.push("我已知晓该版本需要安装补丁")),e!=null&&e.env&&(f.value.push(`
该版本需要搭配环境包才可使用

环境版本 ${e==null?void 0:e.env}，如果您已安装过该环境包，可直接下载整合包

<a href="${R[e==null?void 0:e.env]}" target="_blank">点击下载</a>

将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可
    `.split(`
`).map(n=>`<p>${n}</p>`).join("")),v.value.push("我已知晓该版本需要安装环境包，并且知道如何安装环境（不知道的看版本额外说明）"));const V=()=>{u.wait_time>0||(C.value=u.link,N.value=!0)};return(n,P)=>{const $=F("ClientOnly");return r(),B($,null,{default:l(()=>[s(t(c),null,{default:l(()=>[(r(!0),k(E,null,D(f.value,(m,w)=>(r(),k("div",T,[_("p",K,"版本额外说明 "+g(w+1),1),_("div",{innerHTML:m},null,8,U)]))),256)),s(t(o),{vertical:""},{default:l(()=>[_("div",null,"等待 "+g(u.wait_time)+"s 后，方可点击跳转按钮",1),s(t(a),{onClick:V,style:{width:"100%"}},{default:l(()=>[b("跳转到 123 云盘")]),_:1})]),_:1}),s(t(x),{show:N.value,"onUpdate:show":P[0]||(P[0]=m=>N.value=m)},{default:l(()=>[s(t(p),{style:{width:"600px"},title:"请确认",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:l(()=>[s(t(o),{vertical:""},{default:l(()=>[(r(!0),k(E,null,D(v.value,(m,w)=>(r(),B(t(y),{checked:h.value[w],"onUpdate:checked":j=>h.value[w]=j},{default:l(()=>[b(g(m),1)]),_:2},1032,["checked","onUpdate:checked"]))),256)),s(t(a),{style:{width:"100%"},type:"info",onClick:L},{default:l(()=>[b("GOGOGO")]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})}}}),J={id:"下载中转页-version",tabindex:"-1"},W=_("a",{class:"header-anchor",href:"#下载中转页-version","aria-label":'Permalink to "下载中转页 {{ version }}"'},"​",-1),Q=O('<p>您需要查看下列的注意事项后才能跳转到网盘</p><p>其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><details class="details custom-block"><summary>新底模相关</summary><p>SVC Fusion 整合包中</p><ul><li>DDSP 6.0 的 cvec768l12 底模是我自己炖的 非官方底模（截至发布也没有官方底模）</li><li>Reflow VAE SVC 的 cvec768l12 底模来自 <a href="https://huggingface.co/OOPPEENN/pretrained_model" target="_blank" rel="noreferrer">bfloat16 的 hf 仓库</a></li></ul></details></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>123Pan 链接已更换到 <code>.cn</code> 备用域名，如果无法访问请尝试使用代理</p><p>那群恶意举报的不得好死</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>再次说明，请使用 <strong>bandizip（最新版本）</strong> 或者 <strong>7zip</strong> 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。</p><details class="details custom-block"><summary>图片</summary><img src="'+q+'"></details></div>',5),ee=JSON.parse('{"title":"下载中转页 {{ version }}","description":"","frontmatter":{},"headers":[],"relativePath":"download/index.md","filePath":"download/index.md"}'),X={name:"download/index.md"},te=S({...X,setup(i){const a=G(typeof window>"u"?"http://localhost:5173/download/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href);console.log(a),a.link;const o=M(a.link),c=M(a.version),p=d(15);console.log(o);const x=setInterval(()=>{p.value--,p.value<=0&&clearInterval(x)},1e3);return(y,u)=>(r(),k("div",null,[_("h1",J,[b("下载中转页 "+g(t(c))+" ",1),W]),Q,s(H,{wait_time:p.value,link:t(o),version:t(c)},null,8,["wait_time","link","version"])]))}});export{ee as __pageData,te as default};
