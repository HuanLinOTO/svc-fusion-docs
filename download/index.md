---
title: 下载中转页
---

# 下载中转页 {{ version }}

您需要查看下列的注意事项后才能跳转到网盘

其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包

:::warning 如果你显卡垃圾需要上云，以下是云端地址合集：
**1、优云智算（首推，注册送 20 算力，需实名，高校认证后送 10 ）**

SVC-Fusion：https://www.compshare.cn/images/compshareImage-1aly0zqh3gvc?referral_code=1ywd4VqDKknFWCEUZvOoWo

MSST：https://www.compshare.cn/images/compshareImage-19o9qlm9x5f6?referral_code=1ywd4VqDKknFWCEUZvOoWo

**2、AutoDL**

SVC-Fusion：https://www.codewithgpu.com/i/HuanLinOTO/SVCFusion/svc-fusion

MSST：https://www.codewithgpu.com/i/ZFTurbo/Music-Source-Separation-Training/MSST-webUI

或 https://www.codewithgpu.com/i/SUC-DriverOld/MSST-WebUI/MSST

**3、星海智算**

SVC-Fusion/MSST：https://gpu.spacehpc.com/user/register?inviteCode=21777196

**4、算力互联**

SVC-Fusion/MSST：https://console.casdao.com:9001/#/s-login?refer=236d58849beebe9e243149f256dc90092de32d6a552e46cbfc170118fd22f8a6
:::

:::danger
**如果启动器无法正常下载或者下载速度很慢，在你检查了你的网络测速没有问题的情况下，这边建议先直接打爆你的宽带运营商电话，质问他为什么屏蔽天翼云的服务**

:::

:::tip
:::details 新底模相关
SVC Fusion 整合包中

- DDSP 6.0 的 cvec768l12 底模是我自己炖的 非官方底模（截至发布也没有官方底模）
- Reflow VAE SVC 的 cvec768l12 底模来自 [bfloat16 的 hf 仓库](https://huggingface.co/OOPPEENN/pretrained_model)

:::

<comp :wait_time="wait_time" :link="link" :version="version"></comp>

<script lang="ts" setup>
import { parse, decode_string } from "../utils/url.ts"
import { ref } from "vue"


import comp from "./comp.vue"

const params = parse(typeof window === "undefined"?"http://localhost:5173/download/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href)

console.log(params)

if (!params.link) {
    // 回到首页
    // window.location.href = "/"
}
const link = decode_string(params.link)
const version = decode_string(params.version)




const wait_time = ref(10)

console.log(link)

const timer = setInterval(() => {
    wait_time.value --
    if (wait_time.value <= 0) {
        clearInterval(timer);
        // location.href = link
    }
}, 1000)

</script>
