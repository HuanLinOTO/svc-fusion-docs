<template>
    <NModalProvider>
        <div class="title-box">
            <!-- <div class="title-bg"></div> -->
            <!-- <LandingBackground></LandingBackground> -->
            <div class="left">
                <div class="title">SVC Fusion</div>
                <div class="sub-sub-title">易于使用 | 可用 CPU 训练 | 面向小白</div>
            </div>
            <div class="title-bg"></div>
        </div>
        <n-flex justify="center">
            <n-button type="primary" size="large" @click="goto('/start/')">
                <template #icon>
                    <RocketLaunchRound></RocketLaunchRound>
                </template>
                马上开始
            </n-button>
            <!-- <n-button type="info" size="large"
                @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=igP4OFTLm_-8QFpXb5l6qXrunFYJDMDt&jump_from=webapi&authKey=KlzIXtfCZmCm7mv+gFS7GXnUm+cL1DQ2OVoqaY8IOUxxREnIoAnIDHcJOHbQLTo0')"> -->
            <n-button type="info" size="large" @click="() => showModal = true">
                <template #icon>
                    <ChatBubbleFilled></ChatBubbleFilled>
                </template>
                加入群聊
            </n-button>
            <!-- @vue-ignore -->
            <n-badge value="新" v-if="new Date('|| ReleaseTime ||') > Date.now() - (3 * 24 * 60 * 60 * 1000)">
                <n-button type="info" size="large"
                    @click="goto('/download/?link=|| LatestVersionLinkPlaceHolder ||&version=|| LatestVersionPlaceHolderEncoded ||')">
                    <template #icon>
                        <FileDownloadFilled></FileDownloadFilled>
                    </template>
                    下载最新版本 || LatestVersionPlaceHolder ||
                </n-button>
            </n-badge>
            <div v-else>
                <n-button type="info" size="large"
                    @click="goto('/download/?link=|| LatestVersionLinkPlaceHolder ||&version=|| LatestVersionPlaceHolderEncoded ||')">
                    <template #icon>
                        <FileDownloadFilled></FileDownloadFilled>
                    </template>
                    下载最新版本 || LatestVersionPlaceHolder ||
                </n-button>
            </div>
        </n-flex>
        <n-modal v-model:show="showModal">
            <n-card style="width: 600px" title="请选择" :bordered="false" size="huge" role="dialog" aria-modal="true">
                <!-- //p.qlogo.cn/gh/172701496/172701496/40 -->
                PS: 开群费用有点贵，欢迎赞助（
                <n-space vertical>
                    <n-space class="group-item"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=igP4OFTLm_-8QFpXb5l6qXrunFYJDMDt&jump_from=webapi&authKey=KlzIXtfCZmCm7mv+gFS7GXnUm+cL1DQ2OVoqaY8IOUxxREnIoAnIDHcJOHbQLTo0')">
                        <n-avatar :size="48" src="https://p.qlogo.cn/gh/172701496/172701496/40" />
                        幻灵的炼丹工坊一群
                    </n-space>
                </n-space>
                <n-space vertical>
                    <n-space class="group-item"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=Z93WMbn5a8v6MXDiBzcywyEFcIdhi_ls&jump_from=webapi&authKey=tCNl9eJLLVY2TNgf2KyT2cWylxNMAlWxScUHIVqc2bz0xbSf05ZMLR4ooq0yGcim')">
                        <n-badge value="新群">
                            <n-avatar :size="48" src="https://p.qlogo.cn/gh/894118597/894118597/40" />
                        </n-badge>
                        幻灵的炼丹工坊二群
                    </n-space>
                </n-space>
                <n-space vertical>
                    <!-- @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=Z93WMbn5a8v6MXDiBzcywyEFcIdhi_ls&jump_from=webapi&authKey=tCNl9eJLLVY2TNgf2KyT2cWylxNMAlWxScUHIVqc2bz0xbSf05ZMLR4ooq0yGcim')"> -->
                    <n-space class="group-item disable">
                        <n-badge value="暂未开放">
                            <n-avatar :size="48" src="https://p.qlogo.cn/gh/172701496/172701496/40" />
                        </n-badge>
                        幻灵的炼丹工坊三群
                    </n-space>
                </n-space>
            </n-card>
        </n-modal>
    </NModalProvider>
</template>

<script lang="ts" setup>
import LandingBackground from './components/LandingBackground.vue';
import * as naive from "naive-ui"
const { NButton, NSpace, NFlex, NModal, NModalProvider, NAvatar, NBadge, NCard, useMessage } = naive
import { RocketLaunchRound, ChatBubbleFilled, FileDownloadFilled } from '@vicons/material';
import { onMounted, ref } from "vue"
// import Button from './components/Button.vue';
import './index.css'

const goto = (url: string) => {
    // console.log("goto", url);
    // if (!url.startsWith('http') && !url.startsWith('https'))
    //     url = `http://${window.location.origin}${url}`
    if (typeof window !== 'undefined') {
        window.open(url, "_blank")
    }
    showModal.value = false
}

const showModal = ref(false)

const message = useMessage();
// onMounted(() => {
//     message.info("www.svcfusion.com 为新整合包,")
//     console.log("mounted");

// })
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
    .title-bg {
        display: none;
    }

    .title-box {
        display: block;
        text-align: center;
    }

    .left {
        padding: 0 !important;

        .title {
            font-size: 2.5em;
        }

        .sub-title {
            font-size: 1.5em;
        }

        .sub-sub-title {
            font-size: 1em;
        }

    }
}

.group-item {
    display: flex;
    align-items: center;
    padding: 5px;
    height: 60px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s !important;
    background-color: #fff;

    &:hover {
        background-color: #e0e0e0;
    }

    div {
        display: flex;
        max-width: 100%;
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    &.disable .n-avatar {
        filter: brightness(0.3);
    }
}

.title-box {
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;

    // 当屏幕宽度小于 768px ， display none
    .title-bg {
        z-index: -1;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: no-repeat url(./imgs/yxlllc.jpg) 50% 50%;
        box-shadow:
            inset 0 0 50px #ffffff9f,
            inset 20px 0 80px #ff00ff9f,
            inset -20px 0 80px #00ffff9f,
            inset 20px 0 300px #ff00ff9f,
            inset -20px 0 300px #00ffff9f,
            0 0 50px #ffffff9f,
            -10px 0 80px #ff00ff9f,
            10px 0 80px #00ffff9f;
    }

    .left {
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
            font-size: 4em;
            font-weight: bold;
            padding-bottom: 30px;
            color: #f87171;
        }

        .sub-title {
            font-size: 3em;
            font-weight: 500;
            font-weight: bold;
            font-family: var(--vp-font-family-base);
            padding-bottom: 24px;
        }

        .sub-sub-title {
            font-size: 1.25em;
            font-weight: 500;
            font-weight: bold;
            color: #585858;
            font-family: var(--vp-font-family-base);
        }
    }
}

.dark {
    .title-box {
        .title {
            text-shadow: 0px 0px 30px #f87171;
        }
    }
}
</style>