# 下载中转页 {{ version }}

您需要查看下列的注意事项后才能跳转到网盘

其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包

:::tip 
:::details 新底模相关 
SVC Fusion整合包中的底模是我自己炖的 非官方底模（截至发布也没有官方底模）
:::

:::warning
再次说明，请使用 **bandizip（最新版本）** 或者 **7zip** 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。
:::details 图片
<img src="/imgs/{DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B}.png"/>
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




const wait_time = ref(15)

console.log(link)

const timer = setInterval(() => {
    wait_time.value --
    if (wait_time.value <= 0) {
        clearInterval(timer);
        // location.href = link
    }
}, 1000)

</script>