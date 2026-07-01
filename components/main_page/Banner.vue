<template>
    <div class="banner" :class="`banner--${current.key}`" @click="onClick">
        <!-- 内容层 -->
        <transition name="banner" mode="out-in">
            <div class="banner-content" :key="index">
                <div class="banner-icon-wrapper">
                    <img class="banner-icon" :src="current.icon" :alt="current.alt" />
                </div>
                <div class="banner-text-wrapper">
                    <span class="banner-text">{{ current.text }}</span>
                </div>
                <div class="banner-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AIGateLogo from '../../imgs/AIGate-Logo.png'
import XinghaiComputeAd from '../../imgs/星海智算logo .png'
import { go_uc_ad, go_aigate_ad, go_xinghai_ad, SHOW_XINGHAI_AD, SHOW_AIGATE_AD } from '../../utils/ad'

type Sponsor = {
    key: string
    icon: string
    alt: string
    text: string
    bg: string
    action: () => void
}

const sponsors = ref<Sponsor[]>([
    ...(SHOW_XINGHAI_AD ? [{
        key: 'xinghai',
        icon: XinghaiComputeAd,
        alt: '星海智算',
        text: '点击注册星海智算，无门槛立领30元支付券，充值再享5%额外优惠！',
        bg: '',
        action: go_xinghai_ad
    }] : []),
    ...(SHOW_AIGATE_AD ? [{
        key: 'aigate',
        icon: AIGateLogo,
        alt: '智算云扉',
        text: '点击此处注册智算云扉，实名送20算力和8小时4090D算力券，微信公众号回复再得8小时4090D算力券，充值再享8%额外优惠',
        bg: '',
        action: go_aigate_ad
    }] : []),
    {
        key: 'ucloud',
        icon: 'https://cdn.udelivrs.com/2024/11/437c3c1914197056212918f3d2cb53c1_1730962202072.png',
        alt: '优云智算',
        text: '点击注册优云智算领10元算力金GPU免费用，高校/企业认证再得10元额外享受算力购买95折！',
        bg: '',
        action: go_uc_ad
    }
])

const index = ref(0)
const current = computed(() => sponsors.value[index.value])

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    const do_in_timer = () => {
        index.value = (index.value + 1) % sponsors.value.length
        console.log('timer tick, index:', index.value, new Date().toISOString())
    }

    const startTimer = () => {
        if (timer) return
        timer = setInterval(do_in_timer, 5000)
        console.log('timer started', new Date().toISOString())
    }

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer)
            timer = null
            console.log('timer stopped', new Date().toISOString())
        }
    }

    const handleVisibilityChange = () => {
        if (document.hidden) {
            stopTimer()
        } else {
            startTimer()
        }
    }

    // start only when page is visible
    if (!document.hidden) startTimer()

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // ensure cleanup of listener when component unmounts
    onUnmounted(() => {
        stopTimer()
        document.removeEventListener('visibilitychange', handleVisibilityChange)
    })
})

onUnmounted(() => {
    // fallback: ensure timer cleared (no-op if already cleared)
    if (timer) clearInterval(timer)
})

function onClick() {
    const act = current.value.action
    if (typeof act === 'function') act()
}
</script>

<style lang="scss" scoped>
.banner {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background: var(--vp-c-brand-1, #635bff);

    // Stripe subtle gradient overlay using brand colors
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background:
            radial-gradient(ellipse 50% 100% at 0% 50%, rgba(122, 115, 255, 0.4) 0%, transparent 65%),
            radial-gradient(ellipse 50% 100% at 100% 50%, rgba(59, 47, 201, 0.3) 0%, transparent 65%);
        z-index: 1;
        pointer-events: none;
    }

    // Shimmer effect — Stripe subtle
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
        transition: left 0.8s ease;
        z-index: 2;
        pointer-events: none;
    }

    &:hover::before {
        left: 150%;
    }

    &-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 9px 32px;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
    }

    &-icon-wrapper {
        margin-right: 14px;
        flex-shrink: 0;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 6px;
        padding: 4px 6px;
        line-height: 0;
    }

    &-icon {
        height: 24px;
        display: block;
        border-radius: 3px;
    }

    &-text-wrapper {
        flex: 1;
        text-align: center;
    }

    &-text {
        font-size: 0.85em;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 500;
        letter-spacing: -0.01em;
    }

    &-arrow {
        margin-left: 14px;
        width: 18px;
        height: 18px;
        color: rgba(255, 255, 255, 0.8);
        transition: transform 0.15s ease, color 0.15s ease;
        flex-shrink: 0;
    }

    &:hover &-arrow {
        transform: translateX(3px);
        color: white;
    }
}

/* 切换过渡 */
.banner-enter-active,
.banner-leave-active {
    transition: opacity 0.35s ease, transform 0.35s ease;
}

.banner-enter-from,
.banner-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}

.banner-enter-to,
.banner-leave-from {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .banner {
        &-content {
            padding: 8px 20px;
            flex-direction: column;
            gap: 8px;
        }

        &-icon {
            height: 20px;
        }

        &-text {
            font-size: 0.78em;
        }
    }
}

// Dark mode — tone down the banner so it's not glaring
.dark .banner {
    background: #1a1f36;

    &::after {
        background:
            radial-gradient(ellipse 50% 100% at 0% 50%, rgba(99, 91, 255, 0.28) 0%, transparent 65%),
            radial-gradient(ellipse 50% 100% at 100% 50%, rgba(59, 47, 201, 0.22) 0%, transparent 65%);
    }

    &-icon-wrapper {
        background: rgba(255, 255, 255, 0.92);
    }

    &-text {
        color: rgba(255, 255, 255, 0.88);
    }

    &-arrow {
        color: rgba(255, 255, 255, 0.65);
    }

    &:hover &-arrow {
        color: rgba(255, 255, 255, 0.95);
    }
}
</style>
