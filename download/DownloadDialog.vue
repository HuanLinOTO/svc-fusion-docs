<template>
    <div>

        <n-modal v-model:show="props.showModal">
            <n-card style="width: 600px" title="请选择下载渠道" :bordered="false" size="huge" role="dialog" aria-modal="true">
                <n-space vertical>
                    <n-space class="group-item">
                        <n-avatar :size="48" src="https://statics.123957.com/static/favicon.ico" />
                        <span>
                            <!-- <p class="title"> -->
                            <p class="title">
                                123 云盘
                            </p>
                            <p>
                                123 VIP 用户首选，非 VIP 需要付费下载
                            </p>
                        </span>
                    </n-space>
                    <n-space class="group-item">
                        <n-avatar :size="48" src="https://openi.pcl.ac.cn/img/favicon.png" />
                        <span>
                            <!-- <p class="title"> -->
                            <p class="title">
                                启智 OpenI
                            </p>
                            <p>
                                中国大陆用户首选，下载速度快
                            </p>
                        </span>
                    </n-space>
                    <n-space class="group-item">
                        <n-avatar :size="48" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" />
                        <span>
                            <!-- <p class="title"> -->
                            <p class="title">
                                HuggingFace
                            </p>
                            <p>
                                非中国大陆用户可用，下载速度快
                            </p>
                        </span>
                    </n-space>
                    <n-space class="group-item">
                        <n-avatar :size="48" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" />
                        <span>
                            <!-- <p class="title"> -->
                            <p class="title">
                                HuggingFace Mirror
                            </p>
                            <p>
                                中国大陆用户可用 HF 镜像，下载速度也许快
                            </p>
                        </span>
                    </n-space>
                    <n-space class="group-item">
                        <n-avatar :size="48"
                            src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" />
                        <span>
                            <!-- <p class="title"> -->
                            <p class="title">
                                Google Drive
                            </p>
                            <p>
                                非中国大陆用户可用，下载速度快
                            </p>
                        </span>
                    </n-space>
                </n-space>
            </n-card>
        </n-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NButton, NSpace, NModalProvider, NCard, NModal, NCheckbox, NAvatar } from 'naive-ui';
const props = defineProps<{
    showModal: boolean;
}>();
</script>

<style lang="less" scoped>
.group-item {
    display: flex;
    align-items: center;
    padding: 5px;
    height: 60px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s !important;
    background-color: #fff;
    user-select: none;

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

    .title {
        font-size: 20px;
        font-weight: bold;
    }

    &.disable .n-avatar {
        filter: brightness(0.3);
    }
}
</style>