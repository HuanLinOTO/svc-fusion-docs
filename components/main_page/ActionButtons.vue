<template>
    <div class="hero-actions">
        <div class="button-group">
            <button class="action-btn primary-btn" @click="goto('/start/')">
                <RocketLaunchRound class="btn-icon"></RocketLaunchRound>
                马上开始
                <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
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
    animation: actionsFadeIn 0.7s ease-out 0.5s both;

    .button-group {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;

        .action-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 40px;
            padding: 0 18px;
            font-size: 0.92rem;
            font-weight: 600;
            border-radius: 6px;
            transition: box-shadow 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
            border: 1px solid transparent;
            cursor: pointer;
            font-family: inherit;
            white-space: nowrap;
            letter-spacing: -0.01em;
            line-height: 1;

            .btn-icon {
                width: 17px;
                height: 17px;
                fill: currentColor;
            }

            .btn-arrow {
                width: 15px;
                height: 15px;
                transition: transform 0.15s ease;
            }

            &:active {
                transform: translateY(0);
            }

            &.primary-btn {
                background: #635bff;
                color: white;
                box-shadow: 0 4px 6px rgba(99, 91, 255, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);

                &:hover {
                    background: #5851ee;
                    box-shadow: 0 6px 12px rgba(99, 91, 255, 0.28), 0 2px 4px rgba(0, 0, 0, 0.06);

                    .btn-arrow {
                        transform: translateX(2px);
                    }
                }

                &:active {
                    background: #4f46e5;
                    box-shadow: 0 2px 4px rgba(99, 91, 255, 0.15);
                }
            }

            &.secondary-btn {
                background: transparent;
                color: var(--vp-c-brand-1, #635bff);
                border-color: transparent;
                box-shadow: none;
                padding: 0 12px;

                &:hover {
                    background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.08));
                    color: var(--vp-c-brand-3, #3b2fc9);
                }
            }

            &.download-btn {
                background: var(--surface-page, #ffffff);
                color: var(--text-primary, #0a2540);
                border-color: var(--border-default, rgba(50, 50, 93, 0.13));
                box-shadow: 0 1px 2px rgba(50, 50, 93, 0.05);

                &:hover {
                    border-color: var(--text-primary, #0a2540);
                    box-shadow: 0 2px 6px rgba(50, 50, 93, 0.1);
                }
            }
        }

        .download-btn-wrapper {
            position: relative;

            .new-badge {
                position: absolute;
                top: -6px;
                right: -6px;
                background: #635bff;
                color: white;
                font-size: 0.65rem;
                font-weight: 700;
                padding: 2px 6px;
                border-radius: 10px;
                z-index: 10;
                box-shadow: 0 2px 6px rgba(99, 91, 255, 0.35);
                letter-spacing: 0;
            }
        }
    }
}

@keyframes actionsFadeIn {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
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
        align-items: stretch;
        gap: 8px;

        .action-btn {
            width: 100%;
            max-width: 320px;
            height: 40px;
            font-size: 0.92rem;
            margin: 0 auto;

            &.secondary-btn {
                padding: 0 18px;
            }
        }

        .download-btn-wrapper {
            width: 100%;
            max-width: 320px;
            margin: 0 auto;

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
            max-width: 320px;
        }

        .download-btn-wrapper .action-btn {
            width: 100%;
        }
    }
}

@media (max-width: 480px) {
    .hero-actions .button-group {
        .action-btn {
            max-width: 100%;
            padding: 0 16px;
        }
    }
}

// Dark mode support
.dark {
    .hero-actions .button-group {
        .action-btn {
            &.secondary-btn {
                background: transparent;
                color: var(--vp-c-brand-2, #7a73ff);
                border-color: transparent;

                &:hover {
                    background: var(--vp-c-brand-soft, rgba(122, 115, 255, 0.12));
                    color: var(--vp-c-brand-3, #9b6dff);
                }
            }

            &.download-btn {
                background: var(--surface-subtle, #1a1f36);
                color: var(--text-primary, #ffffff);
                border-color: var(--border-default, rgba(255, 255, 255, 0.13));

                &:hover {
                    border-color: var(--text-primary, #ffffff);
                }
            }
        }
    }
}
</style>
