<template>
    <div class="models-section" ref="modelsSection" :class="{ 'animate': isVisible }">
        <div class="section-header">
            <div class="section-eyebrow">支持矩阵</div>
            <h2 class="section-title">支持的模型</h2>
            <p class="section-subtitle">SVC Fusion 支持多种主流 SVC 模型，满足不同用户的需求</p>
        </div>

        <div class="models-grid">
            <div v-for="(model, index) in models" :key="index" class="model-card" :class="{ 'wip': model.isWIP }">
                <div class="model-icon">
                    <component :is="getModelIcon(model.name)" class="icon" />
                </div>
                <div class="model-content">
                    <h3 class="model-name">{{ model.name }}</h3>
                    <p class="model-version" v-if="model.versions">{{ model.versions }}</p>
                    <div class="model-status">
                        <span v-if="model.isWIP" class="status-badge wip">
                            <span class="status-dot"></span>
                            开发中
                        </span>
                        <span v-else class="status-badge ready">
                            <span class="status-dot"></span>
                            已支持
                        </span>
                    </div>
                </div>
                <div v-if="model.isWIP" class="wip-overlay">
                    <div class="wip-text">WIP</div>
                </div>
            </div>
        </div>

        <div class="section-footer">
            <p class="footer-text">更多模型支持正在开发中，敬请期待！</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { h, ref, onMounted, onUnmounted } from 'vue'

const modelsSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const models = [
    {
        name: 'DDSP-SVC',
        versions: '6.3 / 6.1 / 6.0',
        isWIP: false
    },
    {
        name: 'So-VITS-SVC',
        versions: '4.1',
        isWIP: false
    },
    {
        name: 'Reflow-VAE-SVC',
        versions: 'Latest',
        isWIP: false
    },
    {
        name: 'RVC',
        versions: 'v2',
        isWIP: false
    },
    {
        name: 'RIFT-SVC',
        versions: '',
        isWIP: true
    }
]

const getModelIcon = (modelName: string) => {
    const iconProps = {
        class: 'w-8 h-8',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        viewBox: '0 0 24 24'
    }

    switch (modelName) {
        case 'DDSP-SVC':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-10-5z' })
            ])
        case 'So-VITS-SVC':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
            ])
        case 'Reflow-VAE-SVC':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19l-2 3.5-1-1.5L14.5 2H12v2c-3.85.48-7 3.85-7 8 0 .55.45 1 1 1s1-.45 1-1c0-3.31 2.69-6 6-6s6 2.69 6 6c0 .55.45 1 1 1s1-.45 1-1c0-4.15-3.15-7.52-7-8V2h-2.5z' })
            ])
        case 'RVC':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
            ])
        case 'RIFT-SVC':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 10 2 7.79 2 6 3.79 6 6s1.79 4 4 4h10c1.1 0 2-.9 2-2s-.9-2-2-2zM19.35 10.04C18.67 12.62 16.53 14.5 14 14.5s-4.67-1.88-5.35-4.46C6.85 10.04 5.9 10 5 10c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v4h6v-4h6c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.9 0-1.85.04-2.65.04z' })
            ])
        default:
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' })
            ])
    }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
    if (modelsSection.value) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisible.value = true
                        observer?.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            }
        )
        observer.observe(modelsSection.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style lang="scss" scoped>
.models-section {
    padding: 96px 0;
    background: var(--surface-page, #ffffff);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 91, 255, 0.04) 0%, transparent 60%);
        pointer-events: none;
    }

    .section-header {
        text-align: center;
        margin-bottom: 64px;
        position: relative;
        z-index: 1;
        padding: 0 20px;

        .section-eyebrow {
            display: inline-block;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--vp-c-brand-1, #635bff);
            margin-bottom: 16px;
        }

        .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            color: var(--text-primary, #0a2540);
            margin: 0 0 16px 0;
            line-height: 1.15;
            letter-spacing: -0.03em;
            opacity: 0;
            transform: translateY(20px);
        }

        .section-subtitle {
            font-size: 1.15rem;
            color: var(--text-secondary, #425466);
            font-weight: 400;
            margin: 0 auto;
            max-width: 560px;
            line-height: 1.6;
            opacity: 0;
            transform: translateY(20px);
        }
    }

    .models-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 40px;
        position: relative;
        z-index: 1;
    }

    .model-card {
        background: var(--surface-page, #ffffff);
        border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
        border-radius: 12px;
        padding: 32px 24px;
        text-align: center;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
        opacity: 0;
        transform: translateY(24px);
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.05);

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(50, 50, 93, 0.08), 0 4px 8px rgba(0, 0, 0, 0.03);
            border-color: rgba(99, 91, 255, 0.2);
        }

        &.wip {
            opacity: 0.85;

            .model-icon {
                opacity: 0.6;
            }

            .model-name {
                color: var(--text-muted, #8392ab);
            }
        }

        .model-icon {
            width: 56px;
            height: 56px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--vp-c-brand-soft, rgba(99, 91, 255, 0.1));
            border-radius: 12px;
            color: var(--vp-c-brand-1, #635bff);
            transition: all 0.2s ease;

            .icon {
                width: 28px;
                height: 28px;
            }
        }

        &:hover .model-icon {
            transform: scale(1.05);
            background: var(--gradient-stripe, linear-gradient(135deg, #635bff 0%, #7a73ff 100%));
            color: white;
        }

        .model-content {
            .model-name {
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--text-primary, #0a2540);
                margin: 0 0 8px 0;
                line-height: 1.3;
                letter-spacing: -0.02em;
            }

            .model-version {
                font-size: 0.9rem;
                color: var(--vp-c-brand-1, #635bff);
                font-weight: 600;
                margin: 0 0 16px 0;
                min-height: 22px;
            }

            .model-status {
                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 12px;
                    border-radius: 100px;
                    font-size: 0.8rem;
                    font-weight: 600;

                    .status-dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                    }

                    &.ready {
                        background: rgba(16, 185, 129, 0.1);
                        color: #059669;

                        .status-dot {
                            background: #10b981;
                        }
                    }

                    &.wip {
                        background: rgba(245, 158, 11, 0.1);
                        color: #d97706;

                        .status-dot {
                            background: #f59e0b;
                        }
                    }
                }
            }
        }

        .wip-overlay {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(245, 158, 11, 0.1);
            color: #d97706;
            padding: 4px 10px;
            border-radius: 100px;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }

    .section-footer {
        text-align: center;
        margin-top: 48px;
        position: relative;
        z-index: 1;

        .footer-text {
            font-size: 1rem;
            color: var(--text-muted, #8392ab);
            font-style: normal;
            margin: 0;
        }
    }

    // 当组件可见时开始动画
    &.animate {
        .section-header {
            .section-title {
                animation: slideIn 0.6s ease-out forwards;
            }

            .section-subtitle {
                animation: slideIn 0.6s ease-out 0.15s forwards;
            }
        }

        .model-card {
            animation: cardSlideIn 0.5s ease-out forwards;

            &:nth-child(1) {
                animation-delay: 0.1s;
            }

            &:nth-child(2) {
                animation-delay: 0.18s;
            }

            &:nth-child(3) {
                animation-delay: 0.26s;
            }

            &:nth-child(4) {
                animation-delay: 0.34s;
            }

            &:nth-child(5) {
                animation-delay: 0.42s;
            }
        }
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardSlideIn {
    from {
        opacity: 0;
        transform: translateY(24px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .models-section {
        padding: 64px 0;

        .section-header .section-title {
            font-size: 2rem;
        }

        .models-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 0 20px;
        }

        .model-card {
            padding: 24px 20px;

            .model-icon {
                width: 48px;
                height: 48px;
                margin-bottom: 16px;

                .icon {
                    width: 24px;
                    height: 24px;
                }
            }

            .model-content .model-name {
                font-size: 1.2rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .models-section {
        .section-header .section-title {
            font-size: 1.75rem;
        }

        .model-card {
            padding: 20px 16px;

            .model-icon {
                width: 44px;
                height: 44px;

                .icon {
                    width: 22px;
                    height: 22px;
                }
            }

            .model-content .model-name {
                font-size: 1.1rem;
            }
        }
    }
}

// Dark mode support
.dark {
    .models-section {
        background: var(--surface-page, #0a2540);

        &::before {
            background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(122, 115, 255, 0.06) 0%, transparent 60%);
        }

        .section-header {
            .section-title {
                color: var(--text-primary, #ffffff);
            }

            .section-subtitle {
                color: var(--text-secondary, #c4cdda);
            }
        }

        .model-card {
            background: var(--surface-subtle, #1a1f36);
            border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));

            &:hover {
                border-color: rgba(122, 115, 255, 0.3);
            }

            .model-content .model-name {
                color: var(--text-primary, #ffffff);
            }

            &.wip .model-content .model-name {
                color: var(--text-muted, #8b9bb4);
            }
        }

        .section-footer .footer-text {
            color: var(--text-muted, #8b9bb4);
        }
    }
}
</style>
