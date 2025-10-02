<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import VPDocAsideCarbonAds from 'vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue'
import { go_uc_ad, go_aigate_ad, go_xunduyun_ad } from '../../utils/ad'

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
    {
        id: 'aigate',
        title: '智算云扉',
        image: '/imgs/AIGate-AD.jpg',
        alt: '智算云扉',
        description: '20元算力点+16小时4090d免费用，充值再享百分之8额外优惠！',
        action: go_aigate_ad,
        cardClass: 'sponsor-card-secondary'
    },
    {
        id: 'ucloud',
        title: '优云智算',
        image: '/imgs/UCloud-AD.png',
        alt: '优云智算',
        description: '10元算力金GPU免费用，高校/企业认证再得10元+额外享受95折！',
        action: go_uc_ad,
        cardClass: ''
    },
    {
        id: 'xunduyun',
        title: '讯度云计算',
        image: '/imgs/d793fa7b2a698aa722a2fa361cf6c48a.png',
        alt: '讯度云计算',
        description: '免费赞助服务器合作 | 快速赚米30%佣金返利合作 | 不超开独享大宽带服务器',
        action: go_xunduyun_ad,
        cardClass: 'sponsor-card-tertiary'
    }
])

// 随机打乱数组
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
                <!-- <p class="sponsor-title">{{ sponsor.title }}</p> -->
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
    gap: 16px;
    margin-top: 24px;
}

.sponsor-card {
    background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
    border: 2px solid #fb923c;
    border-radius: 16px;
    padding: 16px;
    transition: all 0.3s ease;
}

.sponsor-card-secondary {
    background: linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%);
    border: 2px solid #0ea5e9;
}

.sponsor-card-tertiary {
    background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%);
    border: 2px solid #22c55e;
}

.sponsor-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(251, 146, 60, 0.15);
}

.sponsor-card-secondary:hover {
    box-shadow: 0 12px 32px rgba(14, 165, 233, 0.15);
}

.sponsor-card-tertiary:hover {
    box-shadow: 0 12px 32px rgba(34, 197, 94, 0.15);
}

.sponsor-title {
    font-weight: bold;
    padding: 0 0 8px 0;
    font-size: 0.9rem;
    color: #c2410c;
    margin: 0;
    text-align: center;
}

.sponsor-card-secondary .sponsor-title,
.sponsor-card-secondary .sponsor-description {
    color: #0c4a6e;
}

.sponsor-card-tertiary .sponsor-title,
.sponsor-card-tertiary .sponsor-description {
    color: #14532d;
}

.sponsor-link {
    display: block;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.sponsor-link:hover {
    transform: scale(1.02);
}

.sponsor-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
}

.sponsor-description {
    font-size: 0.75rem;
    line-height: 1.4;
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
    color: #00000000;
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

.dark .sponsor-card-secondary {
    background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
    border-color: #0284c7;
}

.dark .sponsor-card-tertiary {
    background: linear-gradient(135deg, #14532d 0%, #15803d 100%);
    border-color: #16a34a;
}

.dark .sponsor-title,
.dark .sponsor-description {
    color: #fed7aa;
}

.dark .sponsor-card-secondary .sponsor-title,
.dark .sponsor-card-secondary .sponsor-description {
    color: #bae6fd;
}

.dark .sponsor-card-tertiary .sponsor-title,
.dark .sponsor-card-tertiary .sponsor-description {
    color: #bbf7d0;
}

.dark .VPDocAside :deep(.VPDocAsideOutline) {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(102, 126, 234, 0.2);
}
</style>