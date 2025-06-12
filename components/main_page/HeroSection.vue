<template>
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

                    <ActionButtons @show-modal="$emit('showModal')" />
                </div>
            </div>
            <div class="hero-right">
                <HeroVisual />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ActionButtons from './ActionButtons.vue'
import HeroVisual from './HeroVisual.vue'

defineEmits<{
    showModal: []
}>()
</script>

<style lang="scss" scoped>
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
    }
}

.hero-right {
    display: flex;
    justify-content: center;
    align-items: center;
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

// Responsive Design
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }
}

@media (max-width: 768px) {
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
    }
}

@media (max-width: 480px) {
    .hero-left .title-group {
        .main-title {
            font-size: 2.5rem;
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
}
</style>
