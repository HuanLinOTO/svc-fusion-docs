<script setup lang="ts">
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import VPDocAsideCarbonAds from 'vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue'


const { theme } = useData()
</script>

<template>
    <div class="VPDocAside">
        <slot name="aside-top" />

        <slot name="aside-outline-before" />
        <VPDocAsideOutline />
        <slot name="aside-outline-after" />
        <div style="background-color: var(--vp-c-bg-soft); padding: 16px; border-radius: 8px; margin-top: 16px  ">
            <p style="font-weight: bold; padding: 4px 0; font-size: 12px;">赞助商广告</p>
            <a href="https://www.compshare.cn/images/compshareImage-1aly0zqh3gvc?referral_code=1ywd4VqDKknFWCEUZvOoWo&ytag=GPU_aiguoliuguo_SF"
                target="_blank">
                <img src="/imgs/UCloud-AD.png" alt="">
            </a>
            <div style="font-size: 8px; font-weight: 200; line-height: normal;">
                点击注册领10元算力金GPU免费用，高校/企业认证再得10元额外享受算力购买95折！
            </div>
        </div>
        <div class="spacer" />
        <slot name="aside-ads-before" />
        <VPDocAsideCarbonAds v-if="theme.carbonAds" :carbon-ads="theme.carbonAds" />
        <slot name="aside-ads-after" />

        <slot name="aside-bottom" />
    </div>
</template>

<style scoped>
.VPDocAside {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.spacer {
    flex-grow: 1;
}

.VPDocAside :deep(.spacer + .VPDocAsideSponsors),
.VPDocAside :deep(.spacer + .VPDocAsideCarbonAds) {
    margin-top: 24px;
}

.VPDocAside :deep(.VPDocAsideSponsors + .VPDocAsideCarbonAds) {
    margin-top: 16px;
}
</style>