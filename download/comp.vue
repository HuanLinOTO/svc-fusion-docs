<template>
    <ClientOnly>
        <NModalProvider>
            <template v-for="(item, index) in extra_info">
                <div class="tip custom-block">
                    <p class="custom-block-title">版本额外说明 {{ index + 1 }}</p>
                    <div v-html="item"></div>
                </div>
            </template>
            <n-space vertical>
                <div>
                    等待 {{ props.wait_time }}s 后，方可点击跳转按钮
                </div>
                <NButton @click="gogogo" style="width: 100%">跳转到 123 云盘</NButton>
            </n-space>
            <n-modal v-model:show="showModal">
                <n-card style="width: 600px" title="请确认" :bordered="false" size="huge" role="dialog" aria-modal="true">
                    <!-- //p.qlogo.cn/gh/172701496/172701496/40 -->
                    <n-space vertical>
                        <template v-for="(question, index) in questions">
                            <n-checkbox v-model:checked="question_values[index]">
                                {{ question }}
                            </n-checkbox>
                        </template>
                        <n-button style="width: 100%;" type="info" @click="check_question">GOGOGO</n-button>
                    </n-space>
                </n-card>
            </n-modal>
        </NModalProvider>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import * as naive from "naive-ui"
const { NButton, NSpace, NModalProvider, NCard, NModal, NCheckbox } = naive

import versions from "../version.json"
import env_versions from "../env_version.json"

const props = defineProps<{
    wait_time: number,
    link: string,
    version: string
}>();


const extra_info = ref<string[]>([])

const questions = ref<string[]>([])

const question_values = ref<boolean[]>([])

const check_question = () => {
    console.log(question_values.value);

    // 检查是不是都选了
    if (question_values.value.every(v => v) && question_values.value.length === questions.value.length) {
        window.open(go_link.value, "_blank")
    }
}

const showModal = ref(false)
const go_link = ref("")

const cur_version = versions.find(v => v.version === props.version)
console.log(cur_version)

if (cur_version?.patch) {
    extra_info.value.push(`
该版本需要安装补丁才可使用，补丁 <a href="${cur_version?.patch}" target="_blank">点击下载</a>

使用方法：

将补丁内文件覆盖到整合包根目录
    `.split("\n").map(l => `<p>${l}</p>`).join(""))
    questions.value.push("我已知晓该版本需要安装补丁")
}

if (cur_version?.env) {
    extra_info.value.push(`
该版本需要搭配环境包才可使用

环境版本 ${cur_version?.env}，如果您已安装过该环境包，可直接下载整合包

<a href="${env_versions[cur_version?.env]}" target="_blank">点击下载</a>

将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可
    `.split("\n").map(l => `<p>${l}</p>`).join(""))
    questions.value.push("我已知晓该版本需要安装环境包，并且知道如何安装环境（不知道的看版本额外说明）")
}

if (cur_version?.env == "v1" || cur_version?.env == "v2") {
    extra_info.value.push(`
从 1.0.0 rc11 开始到 v3 环境包(也就是 v1.1.2 本体)，包内不再自带 uvr 模型，需要自行下载

下载链接： <a href="https://www.123pan.com/s/BEzKjv-h7qqv.html">uvr 模型</a>

下载后解压至整合包根目录 完成操作后你应该能 <code>other_weights</code> 文件夹
    `.split("\n").map(l => `<p>${l}</p>`).join(""))
}

const gogogo = () => {
    if (props.wait_time > 0) {
        return
    }
    // window.open(props.link, "_blank")
    go_link.value = props.link
    showModal.value = true
}   

</script>

<style lang="less" scoped></style>