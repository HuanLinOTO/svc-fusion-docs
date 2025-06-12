<template>
    <div v-if="visible" class="modal-overlay" @click="$emit('update:visible', false)">
        <div class="modal-container" @click.stop>
            <div class="modal-header">
                <h3>加入社区交流</h3>
                <p class="modal-subtitle">与开发者和用户一起探讨 SVC Fusion</p>
                <button class="close-btn" @click="$emit('update:visible', false)">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
            </div>

            <div class="modal-content">
                <div class="sponsor-notice">
                    <div class="notice-content">
                        <span class="notice-icon">💝</span>
                        <span class="notice-text">维护社区需要成本，欢迎赞助支持我们</span>
                    </div>
                </div>

                <div class="groups-grid">
                    <div class="group-item active"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=igP4OFTLm_-8QFpXb5l6qXrunFYJDMDt&jump_from=webapi&authKey=KlzIXtfCZmCm7mv+gFS7GXnUm+cL1DQ2OVoqaY8IOUxxREnIoAnIDHcJOHbQLTo0')">
                        <div class="group-header">
                            <div class="avatar-container">
                                <img class="group-avatar" src="https://p.qlogo.cn/gh/172701496/172701496/40"
                                    alt="群头像" />
                                <div class="status-dot online"></div>
                            </div>
                            <div class="group-info">
                                <h4 class="group-name">幻灵的炼丹工坊一群</h4>
                                <p class="group-desc">主群 · 技术交流 · 问题解答</p>
                            </div>
                        </div>
                        <div class="group-footer">
                            <span class="member-count">1000+ 成员</span>
                            <span class="join-btn">立即加入</span>
                        </div>
                    </div>

                    <div class="group-item active"
                        @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=Z93WMbn5a8v6MXDiBzcywyEFcIdhi_ls&jump_from=webapi&authKey=tCNl9eJLLVY2TNgf2KyT2cWylxNMAlWxScUHIVqc2bz0xbSf05ZMLR4ooq0yGcim')">
                        <div class="new-tag">新群</div>
                        <div class="group-header">
                            <div class="avatar-container">
                                <img class="group-avatar" src="https://p.qlogo.cn/gh/894118597/894118597/40"
                                    alt="群头像" />
                                <div class="status-dot online"></div>
                            </div>
                            <div class="group-info">
                                <h4 class="group-name">幻灵的炼丹工坊二群</h4>
                                <p class="group-desc">新群 · 欢迎新人 · 活跃讨论</p>
                            </div>
                        </div>
                        <div class="group-footer">
                            <span class="member-count">500+ 成员</span>
                            <span class="join-btn">立即加入</span>
                        </div>
                    </div>

                    <div class="group-item disabled">
                        <div class="group-header">
                            <div class="avatar-container">
                                <img class="group-avatar" src="https://p.qlogo.cn/gh/172701496/172701496/40"
                                    alt="群头像" />
                                <div class="status-dot offline"></div>
                                <div class="disabled-overlay"></div>
                            </div>
                            <div class="group-info">
                                <h4 class="group-name">幻灵的炼丹工坊三群</h4>
                                <p class="group-desc">即将开放 · 敬请期待</p>
                            </div>
                        </div>
                        <div class="group-footer">
                            <span class="member-count">0 成员</span>
                            <span class="join-btn disabled">暂未开放</span>
                        </div>
                    </div>
                </div>

                <div class="modal-tips">
                    <div class="tip-item">
                        <span class="tip-icon">🔥</span>
                        <span>分享使用技巧和经验</span>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">❓</span>
                        <span>获取技术支持和帮助</span>
                    </div>
                    <div class="tip-item">
                        <span class="tip-icon">🚀</span>
                        <span>第一时间了解更新动态</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    visible: boolean
}>()

defineEmits<{
    'update:visible': [value: boolean]
}>()

const goto = (url: string) => {
    if (typeof window !== 'undefined') {
        window.open(url, "_blank")
    }
}
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: modalFadeIn 0.3s ease-out;
    padding: 20px;
}

.modal-container {
    background: white;
    border-radius: 24px;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow: hidden;
    animation: modalSlideIn 0.3s ease-out;
    position: relative;
}

.modal-header {
    padding: 32px 32px 24px;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin: 0 0 8px 0;
    }

    .modal-subtitle {
        font-size: 1rem;
        opacity: 0.9;
        margin: 0;
        font-weight: 400;
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        svg {
            width: 18px;
            height: 18px;
        }
    }
}

.modal-content {
    padding: 32px;
}

.sponsor-notice {
    background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
    border: 1px solid #fb923c;
    border-radius: 16px;
    padding: 16px 20px;
    margin-bottom: 32px;

    .notice-content {
        display: flex;
        align-items: center;
        gap: 12px;

        .notice-icon {
            font-size: 1.2rem;
        }

        .notice-text {
            color: #c2410c;
            font-weight: 500;
            font-size: 0.9rem;
        }
    }
}

.groups-grid {
    display: grid;
    gap: 20px;
    margin-bottom: 32px;

    .group-item {
        border: 2px solid #e5e7eb;
        border-radius: 20px;
        padding: 24px;
        transition: all 0.3s ease;
        background: #fafafa;
        position: relative;
        overflow: hidden;

        &.active {
            cursor: pointer;

            &:hover {
                border-color: #667eea;
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                transform: translateY(-4px);
                box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);

                .join-btn {
                    background: #667eea;
                    color: white;
                }
            }
        }

        &.disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .new-tag {
            position: absolute;
            top: 16px;
            right: 16px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .group-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;

            .avatar-container {
                position: relative;
                flex-shrink: 0;

                .group-avatar {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    border: 3px solid #e5e7eb;
                }

                .status-dot {
                    position: absolute;
                    bottom: 2px;
                    right: 2px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    border: 3px solid white;

                    &.online {
                        background: #10b981;
                    }

                    &.offline {
                        background: #6b7280;
                    }
                }

                .disabled-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                }
            }

            .group-info {
                flex: 1;

                .group-name {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0 0 4px 0;
                }

                .group-desc {
                    font-size: 0.9rem;
                    color: #6b7280;
                    margin: 0;
                    line-height: 1.4;
                }
            }
        }

        .group-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .member-count {
                font-size: 0.85rem;
                color: #6b7280;
                font-weight: 500;
            }

            .join-btn {
                background: #f3f4f6;
                color: #374151;
                font-size: 0.85rem;
                font-weight: 600;
                padding: 8px 16px;
                border-radius: 12px;
                transition: all 0.3s ease;

                &.disabled {
                    opacity: 0.5;
                }
            }
        }
    }
}

.modal-tips {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 1px solid #0ea5e9;
    border-radius: 16px;
    padding: 20px;

    .tip-item {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 0.9rem;
        color: #0c4a6e;

        &:last-child {
            margin-bottom: 0;
        }

        .tip-icon {
            font-size: 1.1rem;
        }
    }
}

// Modal Animations
@keyframes modalFadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (max-width: 768px) {
    .modal-container {
        margin: 20px;
        border-radius: 20px;
    }

    .modal-header {
        padding: 24px 20px 20px;

        h3 {
            font-size: 1.5rem;
        }
    }

    .modal-content {
        padding: 24px 20px;
    }

    .groups-grid .group-item {
        padding: 20px;

        .group-header {
            gap: 12px;

            .avatar-container .group-avatar {
                width: 48px;
                height: 48px;
            }

            .group-info .group-name {
                font-size: 1.1rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .modal-overlay {
        padding: 10px;
    }

    .groups-grid .group-item .group-header {
        flex-direction: column;
        text-align: center;
        gap: 16px;

        .group-info {
            text-align: center;
        }
    }
}
</style>
