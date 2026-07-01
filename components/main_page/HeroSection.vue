<template>
    <div class="hero-section">
        <div class="hero-grid-bg"></div>
        <div class="hero-glow"></div>
        <div class="hero-content">
            <div class="hero-left">
                <div class="title-group">
                    <div class="hero-badge">
                        <span class="badge-dot"></span>
                        开箱即用的 AI 翻唱工具箱
                    </div>
                    <h1 class="main-title">SVC Fusion</h1>
                    <p class="subtitle">面向小白的 AI 翻唱音频工具箱，可用 CPU 训练，一键完成从分离到混音的全流程</p>
                    <div class="features-list">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>易于使用</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <span>可用 CPU 训练</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
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
    min-height: 88vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: var(--surface-page, #ffffff);
    isolation: isolate;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: -22%;
    right: -20%;
    width: 72%;
    height: 72%;
    background:
        radial-gradient(ellipse 58% 48% at 68% 28%, rgba(99, 91, 255, 0.14) 0%, rgba(99, 91, 255, 0.08) 36%, transparent 72%),
        radial-gradient(ellipse 48% 42% at 36% 68%, rgba(43, 212, 168, 0.08) 0%, transparent 68%),
        linear-gradient(135deg, transparent 0%, rgba(122, 115, 255, 0.07) 42%, transparent 76%);
    border-radius: 42% 0 0 58%;
    filter: blur(18px);
    transform: rotate(-10deg);
    z-index: 0;
    pointer-events: none;
}

.hero-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 18% 24%, rgba(10, 37, 64, 0.06) 0 1px, transparent 1px),
        radial-gradient(circle at 72% 44%, rgba(10, 37, 64, 0.045) 0 1px, transparent 1px),
        radial-gradient(circle at 42% 78%, rgba(10, 37, 64, 0.035) 0 1px, transparent 1px);
    background-size: 96px 96px, 132px 132px, 164px 164px;
    opacity: 0.32;
    mix-blend-mode: multiply;
    z-index: 3;
    pointer-events: none;
}

/* Stripe signature gradient mesh — soft multi-color ambient blobs */
.hero-grid-bg {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse 50% 40% at 15% 20%, rgba(99, 91, 255, 0.10) 0%, transparent 60%),
        radial-gradient(ellipse 45% 50% at 85% 15%, rgba(43, 212, 168, 0.08) 0%, transparent 55%),
        radial-gradient(ellipse 55% 45% at 75% 85%, rgba(255, 138, 200, 0.07) 0%, transparent 55%),
        radial-gradient(ellipse 42% 34% at 6% 94%, rgba(99, 91, 255, 0.08) 0%, transparent 62%),
        radial-gradient(ellipse 30% 24% at 20% 88%, rgba(43, 212, 168, 0.06) 0%, transparent 58%),
        radial-gradient(ellipse 40% 35% at 25% 80%, rgba(255, 200, 120, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse 60% 50% at 50% 50%, rgba(122, 115, 255, 0.05) 0%, transparent 60%);
    z-index: 1;
    pointer-events: none;
}

/* Stripe subtle grid overlay */
.hero-glow {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(to right, rgba(99, 91, 255, 0.025) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(99, 91, 255, 0.025) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse 75% 65% at 50% 35%, #000 0%, transparent 85%);
    -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 35%, #000 0%, transparent 85%);
    z-index: 2;
    pointer-events: none;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 4;
    width: 100%;
}

.hero-left {
    .title-group {
        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 14px;
            background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.1));
            border: 1px solid rgba(99, 91, 255, 0.2);
            border-radius: 100px;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--vp-c-brand-1, #635bff);
            margin-bottom: 28px;
            animation: badgeFadeIn 0.6s ease-out both;

            .badge-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: var(--vp-c-brand-1, #635bff);
                box-shadow: 0 0 0 3px rgba(99, 91, 255, 0.2);
                animation: pulse 2s ease-in-out infinite;
            }
        }

        .main-title {
            color: #635bff;
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 800;
            background: linear-gradient(135deg, #635bff 0%, #7a73ff 40%, #9b6dff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 20px 0;
            line-height: 1.05;
            letter-spacing: -0.04em;
            animation: titleFadeIn 0.7s ease-out 0.1s both;
        }

        .subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary, #425466);
            font-weight: 400;
            margin: 0 0 36px 0;
            line-height: 1.6;
            max-width: 520px;
            animation: subtitleFadeIn 0.7s ease-out 0.25s both;
        }

        .features-list {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 40px;
            animation: subtitleFadeIn 0.7s ease-out 0.4s both;

            .feature-item {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.95rem;
                color: var(--text-secondary, #425466);
                font-weight: 500;
                padding: 10px 16px;
                background: var(--surface-subtle, #f6f9fc);
                border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
                border-radius: 8px;
                transition: all 0.2s ease;
                cursor: default;

                &:hover {
                    border-color: rgba(99, 91, 255, 0.3);
                    background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.04));
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(99, 91, 255, 0.08);
                }

                .feature-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    color: var(--vp-c-brand-1, #635bff);
                    flex-shrink: 0;

                    svg {
                        width: 16px;
                        height: 16px;
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
    animation: visualFadeIn 0.8s ease-out 0.3s both;
}

// Animations — Stripe subtle & professional
@keyframes titleFadeIn {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes subtitleFadeIn {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes badgeFadeIn {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes visualFadeIn {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes pulse {

    0%,
    100% {
        box-shadow: 0 0 0 3px rgba(99, 91, 255, 0.2);
    }

    50% {
        box-shadow: 0 0 0 6px rgba(99, 91, 255, 0.08);
    }
}

// Responsive Design
@media (max-width: 1024px) {
    .hero-section::before {
        top: -16%;
        right: -38%;
        width: 88%;
        height: 54%;
        opacity: 0.66;
    }

    .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
    }

    .hero-left .title-group {
        .features-list {
            justify-content: center;
        }

        .subtitle {
            margin-left: auto;
            margin-right: auto;
        }
    }
}

@media (max-width: 768px) {
    .hero-section {
        min-height: auto;
        padding: 60px 0;
    }

    .hero-section::before {
        top: -10%;
        right: -58%;
        width: 108%;
        height: 38%;
        opacity: 0.42;
    }

    .hero-section::after {
        opacity: 0.2;
    }

    .hero-content {
        padding: 0 20px;
        gap: 40px;
    }

    .hero-left .title-group {
        .main-title {
            font-size: 2.75rem;
        }

        .subtitle {
            font-size: 1.1rem;
        }
    }
}

@media (max-width: 480px) {
    .hero-left .title-group {
        .main-title {
            font-size: 2.25rem;
        }

        .features-list {
            flex-direction: column;
            align-items: stretch;
        }
    }
}

// Dark mode support — Stripe dark
.dark {
    .hero-section {
        background: var(--surface-page, #0a2540);

        &::before {
            background:
                radial-gradient(ellipse 58% 48% at 68% 28%, rgba(122, 115, 255, 0.18) 0%, rgba(99, 91, 255, 0.1) 36%, transparent 72%),
                radial-gradient(ellipse 48% 42% at 36% 68%, rgba(43, 212, 168, 0.08) 0%, transparent 68%),
                linear-gradient(135deg, transparent 0%, rgba(155, 109, 255, 0.08) 42%, transparent 76%);
            opacity: 0.68;
        }

        &::after {
            background-image:
                radial-gradient(circle at 18% 24%, rgba(255, 255, 255, 0.07) 0 1px, transparent 1px),
                radial-gradient(circle at 72% 44%, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px),
                radial-gradient(circle at 42% 78%, rgba(255, 255, 255, 0.04) 0 1px, transparent 1px);
            mix-blend-mode: screen;
            opacity: 0.22;
        }
    }

    .hero-grid-bg {
        background:
            radial-gradient(ellipse 50% 40% at 15% 20%, rgba(122, 115, 255, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 45% 50% at 85% 15%, rgba(43, 212, 168, 0.10) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 75% 85%, rgba(255, 138, 200, 0.08) 0%, transparent 55%),
            radial-gradient(ellipse 42% 34% at 6% 94%, rgba(122, 115, 255, 0.12) 0%, transparent 62%),
            radial-gradient(ellipse 30% 24% at 20% 88%, rgba(43, 212, 168, 0.08) 0%, transparent 58%),
            radial-gradient(ellipse 40% 35% at 25% 80%, rgba(255, 200, 120, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(122, 115, 255, 0.06) 0%, transparent 60%);
    }

    .hero-glow {
        background-image:
            linear-gradient(to right, rgba(122, 115, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(122, 115, 255, 0.04) 1px, transparent 1px);
    }

    .hero-left .title-group {
        .subtitle {
            color: var(--text-secondary, #c4cdda);
        }

        .features-list .feature-item {
            color: var(--text-secondary, #c4cdda);
            background: var(--surface-subtle, #1a1f36);
            border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));

            &:hover {
                background: var(--vp-c-brand-soft, rgba(122, 115, 255, 0.12));
                border-color: rgba(122, 115, 255, 0.3);
            }
        }
    }
}
</style>
