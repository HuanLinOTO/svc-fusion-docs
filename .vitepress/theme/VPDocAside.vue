<script setup lang="ts">
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import VPDocAsideCarbonAds from 'vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue'
import { go_uc_ad } from '../../utils/ad'

const { theme } = useData()
</script>

<template>
    <div class="VPDocAside">
        <slot name="aside-top" />

        <slot name="aside-outline-before" />
        <VPDocAsideOutline />
        <slot name="aside-outline-after" />

        <div class="sponsor-card">
            <p class="sponsor-title">赞助商广告</p>
            <a @click="go_uc_ad" class="sponsor-link">
                <img src="/imgs/UCloud-AD.png" alt="" class="sponsor-image">
            </a>
            <div class="sponsor-description">
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
    padding: 0 16px;
}

.sponsor-card {
    background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
    border: 2px solid #fb923c;
    border-radius: 16px;
    padding: 20px;
    margin-top: 24px;
    transition: all 0.3s ease;
}

.sponsor-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(251, 146, 60, 0.15);
}

.sponsor-title {
    font-weight: bold;
    padding: 0 0 12px 0;
    font-size: 1rem;
    color: #c2410c;
    margin: 0;
    text-align: center;
}

.sponsor-link {
    display: block;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
    transition: all 0.3s ease;
}

.sponsor-link:hover {
    transform: scale(1.02);
}

.sponsor-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
}

.sponsor-description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #c2410c;
    text-align: center;
    font-weight: 500;
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

/* 目录导航样式优化 */
.VPDocAside :deep(.VPDocAsideOutline) {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    border: 1px solid rgba(102, 126, 234, 0.1);
}

.VPDocAside :deep(.VPDocAsideOutline .outline-title) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
}

.VPDocAside :deep(.VPDocAsideOutline .outline-link) {
    border-radius: 8px;
    padding: 6px 12px;
    margin: 2px 0;
    transition: all 0.3s ease;
}

.VPDocAside :deep(.VPDocAsideOutline .outline-link:hover) {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    transform: translateX(4px);
}

.VPDocAside :deep(.VPDocAsideOutline .outline-link.active) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 600;
}

/* 暗色模式支持 */
.dark .sponsor-card {
    background: linear-gradient(135deg, #451a03 0%, #92400e 100%);
    border-color: #d97706;
}

.dark .sponsor-title,
.dark .sponsor-description {
    color: #fed7aa;
}

.dark .VPDocAside :deep(.VPDocAsideOutline) {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(102, 126, 234, 0.2);
}
</style>