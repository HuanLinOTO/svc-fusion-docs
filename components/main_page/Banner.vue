<template>
    <div class="banner" :class="`banner--${current.key}`" @click="onClick">
        <!-- 背景渐变层 -->
        <div class="banner-bg banner-bg--xinghai"></div>
        <div class="banner-bg banner-bg--aigate"></div>
        <div class="banner-bg banner-bg--ucloud"></div>

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
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
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
import { go_uc_ad, go_aigate_ad, go_xinghai_ad, SHOW_XINGHAI_AD } from '../../utils/ad'

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
        text: '🚀 点击注册星海智算，无门槛立领30元支付券，充值再享5%额外优惠！',
        bg: 'linear-gradient(135deg, #0c1530 0%, #1f4fff 55%, #42c2ff 100%)',
        action: go_xinghai_ad
    }] : []),
    {
        key: 'aigate',
        icon: AIGateLogo,
        alt: '智算云扉',
        text: '🚀 点击此处注册智算云扉，实名送20算力和8小时4090D算力券，微信公众号回复再得8小时4090D算力券，充值再享8%额外优惠',
        bg: 'linear-gradient(135deg, #39c5bb 0%, #4facfe 100%)',
        action: go_aigate_ad
    },
    {
        key: 'ucloud',
        icon: 'https://cdn.udelivrs.com/2024/11/437c3c1914197056212918f3d2cb53c1_1730962202072.png',
        alt: '优云智算',
        text: '🚀 点击注册优云智算领10元算力金GPU免费用，高校/企业认证再得10元额外享受算力购买95折！',
        bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;

    // 背景渐变层
    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.8s ease;
        z-index: 1;

        &--aigate {
            background: linear-gradient(135deg, #39c5bb 0%, #4facfe 100%);
        }

        &--xinghai {
            background: linear-gradient(135deg, #0c1530 0%, #1f4fff 55%, #42c2ff 100%);
        }

        &--ucloud {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    }

    // 控制显示哪个背景
    &--xinghai &-bg--xinghai,
    &--aigate &-bg--aigate,
    &--ucloud &-bg--ucloud {
        opacity: 1;
    }

    // 高光效果层
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
        z-index: 2;
    }

    &:hover::before {
        left: 100%;
    }

    &-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 32px;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
    }

    &-icon-wrapper {
        margin-right: 16px;
    }

    &-icon {
        height: 48px;
        display: block;
        border-radius: 10px;
    }


    &-text-wrapper {
        flex: 1;
        text-align: center;
    }

    &-text {
        font-size: 0.9em;
        color: white;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    &-arrow {
        margin-left: 16px;
        width: 24px;
        height: 24px;
        color: white;
        opacity: 0.8;
        transition: transform 0.3s ease;
    }

    &:hover &-arrow {
        transform: translateX(4px);
    }
}

/* 切换过渡 */
.banner-enter-active,
.banner-leave-active {
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.banner-enter-from,
.banner-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

.banner-enter-to,
.banner-leave-from {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .banner {
        &-content {
            padding: 10px 20px;
            flex-direction: column;
            gap: 12px;
        }

        &-text {
            font-size: 0.8em;
        }
    }
}
</style>
