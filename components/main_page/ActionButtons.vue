<template>
    <div class="hero-actions">
        <div class="button-group">
            <button class="action-btn primary-btn" @click="goto('/start/')">
                <RocketLaunchRound class="btn-icon"></RocketLaunchRound>
                马上开始
            </button>

            <button class="action-btn secondary-btn" @click="$emit('showModal')">
                <ChatBubbleFilled class="btn-icon"></ChatBubbleFilled>
                加入群聊
            </button>

            <div class="download-btn-wrapper"
                v-if="new Date('|| ReleaseTime ||').getTime() > Date.now() - (3 * 24 * 60 * 60 * 1000)">
                <div class="new-badge">新</div>
                <button class="action-btn download-btn"
                    @click="goto('/download/?link=|| LatestVersionLinkPlaceHolder ||&version=|| LatestVersionPlaceHolderEncoded ||')">
                    <FileDownloadFilled class="btn-icon"></FileDownloadFilled>
                    下载最新版本 || LatestVersionPlaceHolder ||
                </button>
            </div>
            <div v-else>
                <button class="action-btn download-btn"
                    @click="goto('/download/?link=|| LatestVersionLinkPlaceHolder ||&version=|| LatestVersionPlaceHolderEncoded ||')">
                    <FileDownloadFilled class="btn-icon"></FileDownloadFilled>
                    下载最新版本 || LatestVersionPlaceHolder ||
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RocketLaunchRound, ChatBubbleFilled, FileDownloadFilled } from '@vicons/material';

defineEmits<{
    showModal: []
}>()

const goto = (url: string) => {
    if (typeof window !== 'undefined') {
        window.open(url, "_blank")
    }
}
</script>

<style lang="scss" scoped>
.hero-actions {
    animation: featureFadeIn 1s ease-out 1s both;

    .button-group {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;

        .action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 52px;
            padding: 0 28px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: none !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            font-family: inherit;
            white-space: nowrap;

            .btn-icon {
                width: 18px;
                height: 18px;
                fill: currentColor;
            }

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            }

            &:active {
                transform: translateY(0px);
            }

            &.primary-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;

                &:hover {
                    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
                }
            }

            &.secondary-btn {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                color: white;

                &:hover {
                    background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
                }
            }

            &.download-btn {
                background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                color: white;

                &:hover {
                    background: linear-gradient(135deg, #f43f5e 0%, #eab308 100%);
                }
            }
        }

        .download-btn-wrapper {
            position: relative;

            .new-badge {
                position: absolute;
                top: -8px;
                right: -8px;
                background: #ff4757;
                color: white;
                font-size: 0.7rem;
                font-weight: 600;
                padding: 3px 6px;
                border-radius: 10px;
                z-index: 10;
                box-shadow: 0 2px 8px rgba(255, 71, 87, 0.3);
            }
        }
    }
}

@keyframes featureFadeIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 1024px) {
    .hero-actions .button-group {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .hero-actions .button-group {
        flex-direction: column;
        align-items: center;
        gap: 12px;

        .action-btn {
            width: 100%;
            max-width: 280px;
            height: 48px;
            font-size: 0.95rem;
        }

        .download-btn-wrapper {
            width: 100%;
            max-width: 280px;

            .action-btn {
                width: 100%;
            }
        }
    }

    // 移动端等宽按钮样式
    :global(.is-mobile) {

        .action-btn,
        .download-btn-wrapper {
            width: 100%;
            max-width: 280px;
        }

        .download-btn-wrapper .action-btn {
            width: 100%;
        }
    }
}

@media (max-width: 480px) {
    .hero-actions .button-group {
        .action-btn {
            max-width: 260px;
            padding: 0 20px;
        }
    }
}
</style>
