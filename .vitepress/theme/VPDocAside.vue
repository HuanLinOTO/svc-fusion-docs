<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import VPDocAsideCarbonAds from 'vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue'
import { go_uc_ad, go_aigate_ad, go_xunduyun_ad, go_xinghai_ad, SHOW_XINGHAI_AD, SHOW_AIGATE_AD } from '../../utils/ad'
import AIGateAD from '../../imgs/aigate_a10g.png'
import UCloudAD from '../../imgs/UCloud-AD.png'
import XunduyunAD from '../../imgs/d793fa7b2a698aa722a2fa361cf6c48a.png'
import XinghaiComputeAd from '../../imgs/星海官网图.jpg'

const { theme } = useData()

type SponsorCard = {
    id: string
    title: string
    image: string
    alt: string
    description: string
    action: () => void
    cardClass: string
}

const sponsors = ref<SponsorCard[]>([
    ...(SHOW_XINGHAI_AD ? [{
        id: 'xinghai-compute',
        title: '星海智算',
        image: XinghaiComputeAd,
        alt: '星海智算',
        description: '点击注册星海智算，无门槛立领30元支付券，充值再享5%额外优惠！',
        action: go_xinghai_ad,
        cardClass: 'sponsor-card-secondary'
    }] : []),
    ...(SHOW_AIGATE_AD ? [{
        id: 'aigate',
        title: '智算云扉',
        image: AIGateAD,
        alt: '智算云扉',
        description: '20元算力+16小时4090d免费用，充值再享8%额外优惠！',
        action: go_aigate_ad,
        cardClass: 'sponsor-card-secondary'
    }] : []),
    {
        id: 'ucloud',
        title: '优云智算',
        image: UCloudAD,
        alt: '优云智算',
        description: '10元算力金GPU免费用，高校/企业认证再得10元+额外享受95折！',
        action: go_uc_ad,
        cardClass: ''
    },
    {
        id: 'xunduyun',
        title: '讯度云计算',
        image: XunduyunAD,
        alt: '讯度云计算',
        description: '免费赞助服务器合作 | 快速赚米30%佣金返利合作 | 不超开独享大宽带服务器',
        action: go_xunduyun_ad,
        cardClass: 'sponsor-card-tertiary'
    }
])

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

onMounted(() => {
    sponsors.value = shuffleArray(sponsors.value)
})
</script>

<template>
    <div class="VPDocAside">
        <slot name="aside-top" />

        <slot name="aside-outline-before" />
        <VPDocAsideOutline />
        <slot name="aside-outline-after" />

        <div class="sponsors-grid">
            <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor-card" :class="sponsor.cardClass">
                <a @click="sponsor.action" class="sponsor-link">
                    <img :src="sponsor.image" :alt="sponsor.alt" class="sponsor-image">
                    <div class="sponsor-description">
                        {{ sponsor.description }}
                    </div>
                </a>
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

.sponsors-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
    margin-top: 24px;
}

.sponsor-card {
    background: var(--surface-page, #ffffff);
    border: 1px solid var(--border-default, rgba(50, 50, 93, 0.13));
    border-radius: 10px;
    padding: 0;
    transition: box-shadow 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(50, 50, 93, 0.04);
}

.sponsor-card-secondary,
.sponsor-card-tertiary {
    /* unified look — no more per-card color variants */
}

.sponsor-card:hover {
    transform: translateY(-2px);
    border-color: rgba(99, 91, 255, 0.3);
    box-shadow: 0 6px 16px rgba(50, 50, 93, 0.1), 0 2px 4px rgba(0, 0, 0, 0.04);
}

.sponsor-title {
    font-weight: 700;
    padding: 0 0 4px 0;
    font-size: 0.85rem;
    color: var(--text-primary, #0a2540);
    margin: 0;
    text-align: left;
    letter-spacing: -0.01em;
}

.sponsor-link {
    display: block;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition: opacity 0.15s ease;
}

.sponsor-link:hover {
    opacity: 0.92;
}

.sponsor-image {
    width: 100%;
    height: auto;
    display: block;
}

.sponsor-description {
    font-size: 0.72rem;
    line-height: 1.5;
    color: var(--text-secondary, #425466);
    text-align: left;
    font-weight: 500;
    padding: 12px 14px;
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

/* 目录导航样式优化 — Stripe clean */
.VPDocAside :deep(.VPDocAsideOutline) {
    background: var(--surface-subtle, #f6f9fc);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 16px;
    border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
}

.VPDocAside :deep(.VPDocAsideOutline .outline-title) {
    color: var(--text-primary, #0a2540);
    font-weight: 700;
    letter-spacing: -0.01em;
}

.VPDocAside :deep(.VPDocAsideOutline .outline-link) {
    border-radius: 6px;
    padding: 5px 10px;
    margin: 1px 0;
    transition: background-color 0.15s ease, color 0.15s ease;
    color: var(--text-secondary, #425466);
}

.VPDocAside :deep(.VPDocAsideOutline .outline-link:hover) {
    background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.08));
    color: var(--vp-c-brand-1, #635bff);
}

.VPDocAside :deep(.VPDocAsideOutline .outline-link.active) {
    background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.1));
    color: var(--vp-c-brand-1, #635bff);
    font-weight: 600;
}

/* 暗色模式支持 — Stripe dark */
.dark .sponsor-card {
    background: var(--surface-subtle, #1a1f36);
    border-color: var(--border-default, rgba(255, 255, 255, 0.13));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.dark .sponsor-card:hover {
    border-color: rgba(122, 115, 255, 0.4);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.dark .sponsor-title {
    color: var(--text-primary, #ffffff);
}

.dark .sponsor-description {
    color: var(--text-secondary, #c4cdda);
}

.dark .VPDocAside :deep(.VPDocAsideOutline) {
    background: var(--surface-subtle, #1a1f36);
    border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));
}

.dark .VPDocAside :deep(.VPDocAsideOutline .outline-title) {
    color: var(--text-primary, #ffffff);
}

.dark .VPDocAside :deep(.VPDocAsideOutline .outline-link) {
    color: var(--text-secondary, #c4cdda);
}

.dark .VPDocAside :deep(.VPDocAsideOutline .outline-link:hover) {
    background: var(--vp-c-brand-soft, rgba(122, 115, 255, 0.12));
    color: var(--vp-c-brand-2, #7a73ff);
}

.dark .VPDocAside :deep(.VPDocAsideOutline .outline-link.active) {
    background: var(--vp-c-brand-soft, rgba(122, 115, 255, 0.15));
    color: var(--vp-c-brand-2, #7a73ff);
}
</style>