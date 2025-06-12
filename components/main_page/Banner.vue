<template>
    <div class="banner" @click="go_uc_ad">
        <div class="banner-content">
            <div class="banner-icon-wrapper">
                <img class="banner-icon"
                    src="https://cdn.udelivrs.com/2024/11/437c3c1914197056212918f3d2cb53c1_1730962202072.png"
                    alt="优云智算" />
            </div>
            <div class="banner-text-wrapper">
                <span class="banner-text">
                    🚀 点击注册优云智算领10元算力金GPU免费用，高校/企业认证再得10元额外享受算力购买95折！
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
import { go_uc_ad } from '../../utils/ad'
</script>

<style lang="scss" scoped>
.banner {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
