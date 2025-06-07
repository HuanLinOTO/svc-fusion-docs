<template>
    <!-- Enhanced Banner Start -->
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
    <!-- Enhanced Banner End -->

    <NModalProvider>
        <div>

        </div>
        <div class="hero-section">
            <div class="animated-background"></div>
            <div class="hero-content">
                <div class="hero-left">
                    <div class="title-group">
                        <h1 class="main-title">SVC Fusion</h1>
                        <div class="title-underline"></div>
                        <p class="subtitle">开箱即用的 AI 翻唱音频工具箱</p>
                        <div class="features-list">
                            <div class="feature-item">
                                <span class="feature-icon">✨</span>
                                <span>易于使用</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">⚡</span>
                                <span>可用 CPU 训练</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">🎯</span>
                                <span>面向小白</span>
                            </div>
                        </div>

                        <!-- 按钮区域移动到这里 -->
                        <div class="hero-actions">
                            <div class="button-group">
                                <button class="action-btn primary-btn" @click="goto('/start/')">
                                    <RocketLaunchRound class="btn-icon"></RocketLaunchRound>
                                    马上开始
                                </button>

                                <button class="action-btn secondary-btn" @click="() => showModal = true">
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
                    </div>
                </div>
                <div class="hero-right">
                    <div class="hero-visual">
                        <div class="floating-card card-1">
                            <div class="card-content">
                                <div class="card-icon">🎵</div>
                                <div class="card-text">音频处理</div>
                            </div>
                        </div>
                        <div class="floating-card card-2">
                            <div class="card-content">
                                <div class="card-icon">🤖</div>
                                <div class="card-text">AI 训练</div>
                            </div>
                        </div>
                        <div class="floating-card card-3">
                            <div class="card-content">
                                <div class="card-icon">⚡</div>
                                <div class="card-text">快速转换</div>
                            </div>
                        </div>
                        <div class="center-logo">
                            <div class="logo-ring"></div>
                            <div class="logo-core">
                                <img src="/favicon.ico" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Enhanced Modal -->
        <div v-if="showModal" class="modal-overlay" @click="showModal = false">
            <div class="modal-container" @click.stop>
                <div class="modal-header">
                    <h3>加入社区交流</h3>
                    <p class="modal-subtitle">与开发者和用户一起探讨 SVC Fusion</p>
                    <button class="close-btn" @click="showModal = false">
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
    </NModalProvider>
</template>

<script lang="ts" setup>
import LandingBackground from './components/LandingBackground.vue';
import * as naive from "naive-ui"
const { NButton, NSpace, NFlex, NModal, NModalProvider, NAvatar, NBadge, NCard, useMessage } = naive
import { RocketLaunchRound, ChatBubbleFilled, FileDownloadFilled } from '@vicons/material';
import { onMounted, ref } from "vue"
// import Button from './components/Button.vue';
import './index.css'
import { go_uc_ad } from './utils/ad'

const goto = (url: string) => {
    // console.log("goto", url);
    // if (!url.startsWith('http') && !url.startsWith('https'))
    //     url = `http://${window.location.origin}${url}`
    if (typeof window !== 'undefined') {
        window.open(url, "_blank")
    }
    showModal.value = false
}

const showModal = ref(false)

const message = useMessage();
// onMounted(() => {
//     message.info("www.svcfusion.com 为新整合包,")
//     console.log("mounted");

// })
</script>

<style lang="scss" scoped>
// Enhanced Banner Styles
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

// Hero Section Styles
.hero-section {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.animated-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
    // animation: backgroundMove 20s ease-in-out infinite;
}

@keyframes backgroundMove {

    0%,
    100% {
        transform: translateX(0) translateY(0);
    }

    50% {
        transform: translateX(-20px) translateY(-20px);
    }
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-left {
    .title-group {
        .main-title {
            font-size: 4.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 16px 0;
            line-height: 1.1;
            animation: titleFadeIn 1s ease-out;
        }

        .title-underline {
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
            margin-bottom: 24px;
            animation: underlineExpand 1s ease-out 0.3s both;
        }

        .subtitle {
            font-size: 1.5rem;
            color: #64748b;
            font-weight: 500;
            margin: 0 0 32px 0;
            animation: subtitleFadeIn 1s ease-out 0.5s both;
        }

        .features-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 40px;

            .feature-item {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 1.1rem;
                color: #475569;
                font-weight: 500;
                animation: featureFadeIn 1s ease-out calc(0.7s + var(--delay, 0s)) both;
                padding: 12px 16px;
                border-radius: 12px;
                transition: all 0.3s ease;
                cursor: pointer;
                position: relative;
                overflow: hidden;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
                    transition: left 0.5s ease;
                }

                &:hover {
                    background: rgba(102, 126, 234, 0.05);
                    transform: translateX(8px);
                    color: #667eea;

                    &::before {
                        left: 100%;
                    }

                    .feature-icon {
                        background: rgba(102, 126, 234, 0.2);
                        transform: scale(1.1) rotate(5deg);
                    }
                }

                &:active {
                    transform: translateX(8px) scale(0.98);
                    background: rgba(102, 126, 234, 0.1);
                }

                &:nth-child(1) {
                    --delay: 0s;
                }

                &:nth-child(2) {
                    --delay: 0.1s;
                }

                &:nth-child(3) {
                    --delay: 0.2s;
                }

                .feature-icon {
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: rgba(102, 126, 234, 0.1);
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                span:not(.feature-icon) {
                    transition: all 0.3s ease;
                }
            }
        }

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
    }
}

.hero-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-visual {
    position: relative;
    width: 400px;
    height: 400px;

    .floating-card {
        z-index: 999;
        position: absolute;
        background: white;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        animation: float 3s ease-in-out infinite;

        &.card-1 {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        &.card-2 {
            top: 10%;
            right: 20%;
            animation-delay: 1s;
        }

        &.card-3 {
            bottom: 20%;
            left: 20%;
            animation-delay: 2s;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;

            .card-icon {
                font-size: 2rem;
            }

            .card-text {
                font-size: 0.9rem;
                font-weight: 600;
                color: #475569;
            }
        }
    }

    .center-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;

        .logo-ring {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 3px solid transparent;
            border-radius: 50%;
            animation: rotate 2s linear infinite;
        }

        .logo-core {
            font-size: 2rem;
            font-weight: 800;
            color: #667eea;
            z-index: 1;

            img {
                box-shadow: 0 4px 20px 20px rgba(0, 0, 0, 0.1);
                width: 120px;
                height: 120px;
            }
        }
    }
}

// Action Section Styles
.action-section {
    padding: 60px 40px;
    background: rgba(255, 255, 255, 0.8);

    .button-group {
        display: flex;
        justify-content: center;
        gap: 24px;
        flex-wrap: wrap;

        .action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 56px;
            padding: 0 32px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: none !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            font-family: inherit;
            white-space: nowrap;

            .btn-icon {
                width: 20px;
                height: 20px;
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
                font-size: 0.75rem;
                font-weight: 600;
                padding: 4px 8px;
                border-radius: 12px;
                z-index: 10;
                box-shadow: 0 2px 8px rgba(255, 71, 87, 0.3);
            }
        }
    }
}

// Enhanced Modal Styles
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

// Animations
@keyframes titleFadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes subtitleFadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
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

@keyframes underlineExpand {
    from {
        width: 0;
    }

    to {
        width: 80px;
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
        border-top-color: #667eea;

    }

    to {
        transform: rotate(360deg);
        border-top-color: #764ba2;
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

// Responsive Design
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }

    .hero-visual {
        width: 300px;
        height: 300px;
    }

    .hero-left .title-group .hero-actions .button-group {
        justify-content: center;
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

    .hero-section {
        min-height: 60vh;
    }

    .hero-content {
        padding: 0 20px;
        gap: 40px;
    }

    .hero-left .title-group {
        .main-title {
            font-size: 3rem;
        }

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
    }

    .hero-visual {
        width: 250px;
        height: 250px;

        .floating-card {
            padding: 15px;

            .card-content .card-icon {
                font-size: 1.5rem;
            }
        }
    }

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
    .hero-left .title-group {
        .main-title {
            font-size: 2.5rem;
        }

        .hero-actions .button-group {
            .action-btn {
                max-width: 260px;
                padding: 0 20px;
            }
        }
    }

    .groups-container .group-card {
        flex-direction: column;
        text-align: center;
        gap: 16px;

        .group-avatar {
            margin-right: 0;
        }
    }

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

// Dark mode support
.dark {
    .hero-section {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    }

    .hero-left .title-group {
        .main-title {
            text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
        }

        .subtitle {
            color: #94a3b8;
        }

        .features-list .feature-item {
            color: #cbd5e1;

            &:hover {
                background: rgba(102, 126, 234, 0.1);
                color: #8b5cf6;
            }

            &:active {
                background: rgba(102, 126, 234, 0.15);
            }

            .feature-icon {
                background: rgba(102, 126, 234, 0.2);

                &:hover {
                    background: rgba(102, 126, 234, 0.3);
                }
            }
        }
    }

    .action-section {
        background: rgba(30, 41, 59, 0.8);
    }

    .floating-card {
        background: #334155 !important;
        color: white;

        .card-text {
            color: #cbd5e1 !important;
        }
    }

    .group-modal .modal-card {
        background: #334155;
        border-color: #475569;

        .modal-header h3 {
            color: white;
        }

        .modal-header .modal-subtitle {
            color: #94a3b8;
        }

        .groups-container .group-card {
            background: #475569;
            border-color: #64748b;

            &.active:hover {
                background: linear-gradient(135deg, #475569 0%, #64748b 100%);
            }

            .group-info h4 {
                color: white;
            }

            .group-info p {
                color: #94a3b8;
            }
        }
    }

    .sponsor-notice .notice-content .notice-text {
        color: #ea580c;
    }

    .modal-tips .tip-item {
        color: #0369a1;
    }
}
</style>