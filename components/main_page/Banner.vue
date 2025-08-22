<template>
    <div class="banner" @click="go_aigate_ad">
        <div class="banner-content">
            <div class="banner-icon-wrapper">
                <img class="banner-icon"
                    src="/imgs/AIGate-Logo.png"
                    alt="智算云扉" />
            </div>
            <div class="banner-text-wrapper">
                <span class="banner-text">
                    🚀 点击此处注册智算云扉，实名送20算力点和8小时4090D算力券，微信公众号回复再得8小时4090D算力券，充值再享百分之8额外优惠
                </span>
            </div>
            <div class="banner-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { go_aigate_ad } from '../../utils/ad'
</script>

<style lang="scss" scoped>
.banner {
    background: linear-gradient(135deg, #39c5bb 0%, #4facfe 100%);
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
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
    }

    &-icon-wrapper {
        margin-right: 16px;
    }

    &-icon {
        height: 40px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.9);
        padding: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
