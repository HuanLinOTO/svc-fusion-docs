import{n as z}from"./chunks/index.Da_DU5FM.js";import{d as O,h as r,k as D,b as I,w as o,E as H,o as c,J as s,c as w,G as F,F as L,p as t,m as u,t as M,a as d,e as N,_ as K,V as W}from"./chunks/framework.BpLZpJbo.js";const P=g=>atob(g);function A(g){return[...new URL(g).searchParams].reduce((n,[i,h])=>(n[i]=h,n),{})}const G=[{link:"https://www.123pan.com/s/PMNsjv-zw4l.html",date:"2024/8/20",version:"1.2.0",changes:["更新了6.1 的模型训练","修复了sovits 打包问题","新增了DLC 功能","DDSP6.1 实时功能"],env:null},{link:"https://www.123pan.com/s/PMNsjv-zw4l.html",date:"2024/8/20",version:"1.1.0",changes:["更新了人声分离（Kim 的 Vocals）模型","新增去除和声（Karaoke）模型","新增批量人声分离","新增移动到 models文件夹功能","优化打包后的文件名称","支持算力平台","DDSP 实时功能","加了一堆防止眼瞎的按钮高亮","加了部分因为历史遗留问题导致的按钮没名字/不明确的问题","整理小工具","移除了夸克网盘（帮推广没给钱啊）"],env:null},{link:"https://www.123pan.com/s/PMNsjv-zw4l.html",date:"2024/8/2",version:"1.0.0",changes:["正式版发布"],env:null,linux:"https://www.123pan.com/s/BEzKjv-3JVqv.html"},{link:"https://www.123pan.cn/s/PMNsjv-W14l.html",date:"2024/7/22",version:"1.0.0 beta 7",changes:["全新的整合包"],env:null},{link:"https://www.123pan.cn/s/BEzKjv-a06qv.html",date:"2024/6/1",version:"0.0.1",changes:["修复了很多 bug","很忙，之前一直在群里发的，如果你更新了群里的就没必要更新这个了"],env:"v1"},{link:"https://www.123pan.cn/s/BEzKjv-K46qv.html",date:"2024/5/11",version:"0.0.0",changes:["从 DDSP 6.0 整合包迁移, 支持 ReflowVAESVC","**仅供尝鲜，目前没有进行过全量测试，有bug麻烦群内私聊发我**"],env:"v1"}],Z="https://www.123pan.cn/s/BEzKjv-O46qv.html",R={v1:Z},J={class:"tip custom-block"},X={class:"custom-block-title"},Y=["innerHTML"],ee={key:0,class:"disclaimer"},te=["innerHTML"],oe={key:1,class:"disclaimer"},ne=["innerHTML"],se=O({__name:"comp",props:{wait_time:{},link:{},version:{}},setup(g){const{NButton:n,NSpace:i,NModalProvider:h,NCard:f,NModal:y,NCheckbox:V}=z,_=g,b=r([]),S=r([]),k=r([]),T=r(!1),v=r(!0),m=r(!1),B=D(()=>`
    <p>尊敬的用户：</p>
    <p>
      感谢您使用 SVC Fusion 整合包（以下简称“本整合包”）。在使用本整合包之前，请您务必仔细阅读并充分理解本免责声明的全部内容。如果您开始使用本整合包，或者进行二次售卖，即表示您已完全理解并同意本声明的全部内容。
    </p>
    <p><strong>一、关于本整合包</strong></p>
    <ol>
      <li><strong>所有权：</strong> 本整合包的所有权及相关知识产权均归属于原作者“HuanLin”（B站@多玩幻灵qwq）所有。任何未经授权的复制、修改、反向工程、出售本整合包的全部或部分内容的行为均属侵权。</li>
      <li><strong>免费使用：</strong> 本整合包目前仅供个人娱乐和非商业用途免费使用。严禁任何形式的售卖行为，包括但不限于收费教学、VIP课程等。如需商业用途，请务必联系原作者获取正式的商业授权。</li>
      <li><strong>内容限制：</strong> 禁止将本整合包用于制作任何血腥、暴力、性相关、政治相关或其他违反法律法规、社会公德的内容。</li>
    </ol>
     <p><strong>二、关于二次售卖</strong></p>
    <ol>
        <li><strong>授权与限制: </strong>原作者允许用户对本整合包进行二次售卖，但必须严格遵守原作者发布的《关于二次贩卖本整合包的授权说明》中的所有条款，包括但不限于收入分配、版权声明、传播方式等。</li>
        <li><strong>风险自担: </strong>二次售卖者需自行承担因二次售卖行为产生的一切风险和法律责任，包括但不限于用户纠纷、内容侵权、税务问题等。原作者对二次售卖行为不承担任何连带责任。</li>
        <li><strong>用户内容: </strong>二次售卖者有义务确保其用户使用本整合包产出的内容合法合规，并对用户行为导致的任何法律责任承担全部责任。</li>
        <li><strong>协议遵守: </strong>进行二次售卖即视为同意《关于二次贩卖本整合包的授权说明》，二次售卖者有义务定期查看并遵守该授权说明的最新版本。</li>
    </ol>
     <p><strong>三、版权与软件著作权声明</strong></p>
    <ol>
        <li><strong>整合包版权：</strong>本整合包所有权及相关知识产权归属于原作者“HuanLin”（B站@多玩幻灵qwq）所有。</li>
        <li><strong>启动器版权：</strong>本整合包启动器版权归属于“爱过留过”和“南京睿思澳科技有限公司”。</li>
        <li><strong>产品所有权及限制：</strong>启动器所有权归南京睿思澳电子科技有限公司所有，未经公司书面许可，严禁进行任何形式的商用、转售、分发、修改或复制。本产品及其相关内容受版权法保护，任何未经授权的使用行为将追究法律责任。</li>
        <li><strong>软件著作权：</strong>本产品暂未拥有软件著作权保护。（正在申请）</li>
    </ol>
    <p><strong>四、免责场景</strong></p>
    <ol>
      <li><strong>模型训练数据：</strong> 本整合包中使用的 AI 模型可能基于公开数据集或其他来源进行训练。我们无法保证训练数据的绝对准确性和完整性，模型输出的结果可能存在偏差或不确定性。</li>
      <li><strong>第三方内容：</strong> 本整合包可能包含来自第三方的模型、插件、脚本或其他内容。这些内容的版权归其各自所有者所有，我们不对其内容、准确性或安全性承担任何责任。</li>
      <li><strong>用户生成内容：</strong> 用户需对自己使用本整合包生成的任何内容负责。禁止生成任何违反法律法规、社会公德、侵犯他人权益（包括但不限于版权、肖像权、名誉权等）的内容。</li>
    </ol>
     <p><strong>五、其他</strong></p>
    <ol>
        <li><strong>免责范围: </strong>原作者及版权所有方不对因使用本整合包（包括但不限于二次售卖）产生的任何直接或间接损失承担责任，包括但不限于数据丢失、设备损坏、利润损失、名誉损害等。</li>
        <li><strong>适用法律: </strong>本免责声明适用中华人民共和国法律。如有任何争议，应首先通过友好协商解决；协商不成的，任何一方均有权向原作者所在地有管辖权的人民法院提起诉讼。</li>
        <li><strong>解释权: </strong>本免责声明的最终解释权归原作者所有。原作者保留随时修改本声明的权利。</li>
         <li><strong>更新通知：</strong> 本免责声明的更新将在原作者发布渠道（如B站、爱发电等）公布，建议您定期查看。</li>
    </ol>
    <p><strong>联系方式</strong></p>
     <ul>
        <li>B站：@多玩幻灵qwq</li>
        <li>QQ群：172701496</li>
     </ul>
  `),E=D(()=>`
    <p>尊敬的用户：</p>
    <p>
      本隐私说明旨在向您说明在使用 SVC Fusion 整合包（以下简称“本整合包”）时，我们如何处理您的个人信息。请您在使用本整合包之前，务必仔细阅读并充分理解本隐私说明的全部内容。
    </p>
    <p><strong>一、信息收集与使用</strong></p>
    <ol>
      <li><strong>不主动收集：</strong> 本整合包本身不会主动收集您的任何个人信息，如姓名、联系方式、设备信息、地理位置等。</li>
      <li><strong>二次售卖者责任：</strong> 如果您通过二次售卖者购买或获取本整合包，二次售卖者可能会根据其自身业务需要收集您的个人信息。请您务必仔细阅读二次售卖者的隐私政策，了解其信息收集和使用 practices。原作者不对二次售卖者的隐私行为承担任何责任。</li>
      <li><strong>授权确认：</strong> 如果您进行二次售卖，按照《关于二次贩卖本整合包的授权说明》，您需要打印、签名并将签名后的页面发送至原作者QQ。这将涉及您主动提供个人信息（QQ号）。原作者仅将此信息用于确认您已同意授权协议，不会用于其他任何目的。原作者会妥善保管您的个人信息，防止泄露、丢失或滥用。</li>
    </ol>
     <p><strong>二、信息共享与披露</strong></p>
    <ol>
        <li><strong>不共享: </strong>原作者不会将因授权确认收集到的个人信息（QQ号）共享给任何第三方。</li>
        <li><strong>法律要求: </strong>除非根据法律法规的强制性规定，或配合政府部门、司法机关的调查，否则原作者不会披露您的个人信息。</li>
    </ol>
     <p><strong>三、信息安全</strong></p>
     <p>原作者采取合理的安全措施保护您的个人信息，防止未经授权的访问、使用、披露、修改或破坏。具体措施包括但不限于：加密存储、访问控制、安全审计等。</p>
      <p><strong>四、未成年人保护</strong></p>
     <p>本整合包主要面向成年人用户。如果您是未成年人，请在您的监护人同意并指导下使用本整合包。</p>
 <p><strong>五、隐私说明的更新</strong></p>
     <p>原作者保留随时更新本隐私说明的权利。更新后的隐私说明将在原作者发布渠道（如B站、爱发电等）公布。</p>
      <p><strong>六、联系我们</strong></p>
     <p>如果您对本隐私说明有任何疑问或建议，请通过以下方式联系原作者：</p>
     <ul>
        <li>B站：@多玩幻灵qwq</li>
        <li>QQ群：172701496</li>
     </ul>
      <p><strong>七、 适用范围</strong></p>
     <p>本隐私协议仅适用于原作者提供的SVC Fusion整合包，不适用于任何第三方通过本整合包提供的服务。</p>

    <p><strong>八、您的权利</strong></p>
    <p>您对您的个人信息拥有以下权利：</p>
    <ul>
        <li><strong>查询权：</strong> 您有权查询我们是否持有您的个人信息，以及持有哪些信息。</li>
        <li><strong>更正权：</strong> 如果您发现您的个人信息不准确或不完整，您有权要求我们更正。</li>
        <li><strong>删除权：</strong> 在特定情况下，您有权要求我们删除您的个人信息。</li>
        <li><strong>撤回同意权：</strong> 您有权随时撤回您对我们处理您个人信息的同意。</li>
        <li><strong>限制处理权：</strong> 在特定情况下，您有权要求我们限制处理您的个人信息。</li>
    </ul>
    <p>如果您希望行使上述任何权利，请通过“六、联系我们”中提供的方式与我们联系。</p>

    <p><strong>九、 数据保留</strong></p>
    <p>我们仅在为实现本隐私说明所述目的所必需的期限内保留您的个人信息（QQ号）。授权确认信息将在授权关系终止后一年内删除，除非法律法规另有规定。</p>
  `),U=()=>{console.log(k.value),k.value.every(l=>l)&&k.value.length===S.value.length&&T.value&&window.open(q.value,"_blank")},x=r(!1),q=r(""),e=G.find(l=>l.version===_.version);console.log(e),e!=null&&e.patch&&(b.value.push(`该版本需要安装补丁才可使用，补丁 <a href="${e==null?void 0:e.patch}" target="_blank">点击下载</a>
使用方法：
将补丁内文件覆盖到整合包根目录`.split(`
`).map(l=>`<p>${l}</p>`).join("")),S.value.push("我已知晓该版本需要安装补丁")),e!=null&&e.linux&&b.value.push(`该版本有 Linux 补丁可用
Linux 用户可在下载完整包后，下载 <a href="${e==null?void 0:e.linux}" target="_blank">补丁</a> 覆盖到整合包根目录以使用
环境请自行解决
详细请看：<a href="/start/linux.html" target="_blank">Linux 补丁使用说明</a>`.split(`
`).map(l=>`<p>${l}</p>`).join("")),e!=null&&e.env&&(b.value.push(`该版本需要搭配环境包才可使用
环境版本 ${e==null?void 0:e.env}，如果您已安装过该环境包，可直接下载整合包
<a href="${R[e==null?void 0:e.env]}" target="_blank">点击下载</a>
将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可`.split(`
`).map(l=>`<p>${l}</p>`).join("")),S.value.push("我已知晓该版本需要安装环境包，并且知道如何安装环境（不知道的看版本额外说明）"));const j=()=>{_.wait_time>0||(q.value=_.link,x.value=!0)};return(l,p)=>{const Q=H("ClientOnly");return c(),I(Q,null,{default:o(()=>[s(t(h),null,{default:o(()=>[(c(!0),w(L,null,F(b.value,(a,C)=>(c(),w("div",J,[u("p",X,"版本额外说明 "+M(C+1),1),u("div",{innerHTML:a},null,8,Y)]))),256)),s(t(i),{vertical:""},{default:o(()=>[u("div",null,"等待 "+M(_.wait_time)+"s 后，方可点击跳转按钮",1),s(t(n),{onClick:j,style:{width:"100%"}},{default:o(()=>[d("跳转到 123 云盘")]),_:1})]),_:1}),s(t(y),{show:x.value,"onUpdate:show":p[3]||(p[3]=a=>x.value=a)},{default:o(()=>[s(t(f),{style:{width:"600px"},title:"请确认",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:o(()=>[s(t(i),null,{default:o(()=>[s(t(n),{type:v.value?"primary":"default",autofocus:v.value,disabled:v.value,onClick:p[0]||(p[0]=a=>{v.value=!0,m.value=!1})},{default:o(()=>[d(" 免责声明 ")]),_:1},8,["type","autofocus","disabled"]),s(t(n),{type:m.value?"primary":"default",autofocus:m.value,disabled:m.value,onClick:p[1]||(p[1]=a=>{m.value=!0,v.value=!1})},{default:o(()=>[d(" 隐私说明 ")]),_:1},8,["type","autofocus","disabled"])]),_:1}),v.value?(c(),w("div",ee,[u("div",{innerHTML:B.value},null,8,te)])):N("",!0),m.value?(c(),w("div",oe,[u("div",{innerHTML:E.value},null,8,ne)])):N("",!0),s(t(i),{vertical:""},{default:o(()=>[(c(!0),w(L,null,F(S.value,(a,C)=>(c(),I(t(V),{checked:k.value[C],"onUpdate:checked":$=>k.value[C]=$},{default:o(()=>[d(M(a),1)]),_:2},1032,["checked","onUpdate:checked"]))),256)),s(t(V),{checked:T.value,"onUpdate:checked":p[2]||(p[2]=a=>T.value=a)},{default:o(()=>[d(" 我同意以上条款 ")]),_:1},8,["checked"]),s(t(n),{style:{width:"100%"},type:"info",onClick:U},{default:o(()=>[d("GOGOGO")]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})}}}),le=K(se,[["__scopeId","data-v-e2aad0a9"]]),ae={id:"下载中转页-version",tabindex:"-1"},re=u("a",{class:"header-anchor",href:"#下载中转页-version","aria-label":'Permalink to "下载中转页 {{ version }}"'},"​",-1),ie=W('<p>您需要查看下列的注意事项后才能跳转到网盘</p><p>其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包</p><div class="warning custom-block"><p class="custom-block-title">如果你显卡垃圾需要上云，以下是云端地址合集：</p><p><strong>1、优云智算（首推，注册送50算力，需实名，高校认证后送10）</strong></p><p>SVC-Fusion：<a href="https://www.compshare.cn/images-detail?ImageID=compshareImage-182yc3qjpr8z&amp;referral_code=1ywd4VqDKknFWCEUZvOoWo" target="_blank" rel="noreferrer">https://www.compshare.cn/images-detail?ImageID=compshareImage-182yc3qjpr8z&amp;referral_code=1ywd4VqDKknFWCEUZvOoWo</a></p><p>MSST：<a href="https://www.compshare.cn/images-detail?ImageID=compshareImage-182xc7pifxqb&amp;referral_code=1ywd4VqDKknFWCEUZvOoWo" target="_blank" rel="noreferrer">https://www.compshare.cn/images-detail?ImageID=compshareImage-182xc7pifxqb&amp;referral_code=1ywd4VqDKknFWCEUZvOoWo</a></p><p><strong>2、AutoDL</strong></p><p>SVC-Fusion：<a href="https://www.codewithgpu.com/i/HuanLinOTO/SVCFusion/svc-fusion" target="_blank" rel="noreferrer">https://www.codewithgpu.com/i/HuanLinOTO/SVCFusion/svc-fusion</a></p><p>MSST：<a href="https://www.codewithgpu.com/i/ZFTurbo/Music-Source-Separation-Training/MSST-webUI" target="_blank" rel="noreferrer">https://www.codewithgpu.com/i/ZFTurbo/Music-Source-Separation-Training/MSST-webUI</a></p><p>或 <a href="https://www.codewithgpu.com/i/SUC-DriverOld/MSST-WebUI/MSST" target="_blank" rel="noreferrer">https://www.codewithgpu.com/i/SUC-DriverOld/MSST-WebUI/MSST</a></p><p><strong>3、星海智算</strong></p><p>SVC-Fusion/MSST：<a href="https://gpu.spacehpc.com/user/register?inviteCode=21777196" target="_blank" rel="noreferrer">https://gpu.spacehpc.com/user/register?inviteCode=21777196</a></p><p><strong>4、算力互联</strong></p><p>SVC-Fusion/MSST：<a href="https://console.casdao.com:9001/#/s-login?refer=236d58849beebe9e243149f256dc90092de32d6a552e46cbfc170118fd22f8a6" target="_blank" rel="noreferrer">https://console.casdao.com:9001/#/s-login?refer=236d58849beebe9e243149f256dc90092de32d6a552e46cbfc170118fd22f8a6</a></p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>如果启动器无法正常下载或者下载速度很慢，在你检查了你的网络测速没有问题的情况下，这边建议先直接打爆你的宽带运营商电话，质问他为什么屏蔽天翼云的服务</strong></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><details class="details custom-block"><summary>新底模相关</summary><p>SVC Fusion 整合包中</p><ul><li>DDSP 6.0 的 cvec768l12 底模是我自己炖的 非官方底模（截至发布也没有官方底模）</li><li>Reflow VAE SVC 的 cvec768l12 底模来自 <a href="https://huggingface.co/OOPPEENN/pretrained_model" target="_blank" rel="noreferrer">bfloat16 的 hf 仓库</a></li></ul></details></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>123Pan 链接已更换到 <code>.cn</code> 备用域名，如果无法访问请尝试使用代理</p><p>那群恶意举报的不得好死</p></div>',6),ue=JSON.parse('{"title":"下载中转页","description":"","frontmatter":{"title":"下载中转页"},"headers":[],"relativePath":"download/index.md","filePath":"download/index.md"}'),pe={name:"download/index.md"},ge=O({...pe,setup(g){const n=A(typeof window>"u"?"http://localhost:5173/download/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href);console.log(n),n.link;const i=P(n.link),h=P(n.version),f=r(10);console.log(i);const y=setInterval(()=>{f.value--,f.value<=0&&clearInterval(y)},1e3);return(V,_)=>(c(),w("div",null,[u("h1",ae,[d("下载中转页 "+M(t(h))+" ",1),re]),ie,s(le,{wait_time:f.value,link:t(i),version:t(h)},null,8,["wait_time","link","version"])]))}});export{ue as __pageData,ge as default};
