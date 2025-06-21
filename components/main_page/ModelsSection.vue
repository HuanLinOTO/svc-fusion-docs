<template>
    <div class="models-section" ref="modelsSection" :class="{ 'animate': isVisible }">
        <div class="section-header">
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
                        <span v-if="model.isWIP" class="status-badge wip">开发中</span>
                        <span v-else class="status-badge ready">已支持</span>
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
        versions: '',
        isWIP: true
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
        fill: 'currentColor',
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
                threshold: 0.2,
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
    padding: 80px 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="10" cy="10" r="1"/></g></svg>') repeat;
        pointer-events: none;
    }

    .section-header {
        text-align: center;
        margin-bottom: 60px;
        position: relative;
        z-index: 1;

        .section-title {
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin: 0 0 16px 0;
            line-height: 1.2;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            animation: none;
            opacity: 0;
            transform: translateY(30px);
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            margin: 0;
            max-width: 600px;
            margin: 0 auto;
            animation: none;
            opacity: 0;
            transform: translateY(20px);
        }
    }

    .models-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        position: relative;
        z-index: 1;
    }

    .model-card {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 32px 24px;
        text-align: center;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
        animation: none;
        opacity: 0;
        transform: translateY(40px);

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
        }

        &.wip {
            opacity: 0.8;

            .model-icon {
                opacity: 0.6;
            }

            .model-name {
                color: #64748b;
            }
        }

        .model-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            color: white;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
            animation: none;

            .icon {
                width: 40px;
                height: 40px;
            }
        }

        .model-content {
            .model-name {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1a202c;
                margin: 0 0 8px 0;
                line-height: 1.3;
            }

            .model-version {
                font-size: 1rem;
                color: #667eea;
                font-weight: 600;
                margin: 0 0 16px 0;
                min-height: 24px;
            }

            .model-status {
                .status-badge {
                    display: inline-block;
                    padding: 6px 16px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;

                    &.ready {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        color: white;
                        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                    }

                    &.wip {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        color: white;
                        box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
                    }
                }
            }
        }

        .wip-overlay {
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(135deg, rgba(245, 158, 11, 0.9) 0%, rgba(217, 119, 6, 0.9) 100%);
            color: white;
            padding: 8px 20px;
            border-radius: 0 20px 0 20px;
            font-size: 0.8rem;
            font-weight: 600;
            transform: translateX(30%) translateY(-10%) rotate(40deg);
            transform-origin: center;
            min-width: 100px;
            text-align: center;

            .wip-text {
                transform: rotate(-45deg);
            }
        }

        &:hover .model-icon {
            transform: scale(1.05);
            box-shadow: 0 12px 24px rgba(102, 126, 234, 0.4);
        }
    }

    .section-footer {
        text-align: center;
        margin-top: 60px;
        position: relative;
        z-index: 1;

        .footer-text {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.9);
            font-style: italic;
            margin: 0;
        }
    }

    // 当组件可见时开始动画
    &.animate {
        .section-header {
            .section-title {
                animation: titleSlideIn 1s ease-out forwards;
            }

            .section-subtitle {
                animation: subtitleSlideIn 1s ease-out 0.3s forwards;
            }
        }

        .model-card {
            animation: modelCardSlideIn 0.8s ease-out forwards;

            &:nth-child(1) {
                animation-delay: 0.1s;
            }

            &:nth-child(2) {
                animation-delay: 0.2s;
            }

            &:nth-child(3) {
                animation-delay: 0.3s;
            }

            &:nth-child(4) {
                animation-delay: 0.4s;
            }

            &:nth-child(5) {
                animation-delay: 0.5s;
            }

            .model-icon {
                animation: iconPulse 2s ease-in-out infinite;
            }
        }
    }
}

@keyframes titleSlideIn {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes subtitleSlideIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes modelCardSlideIn {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes iconPulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

@media (max-width: 768px) {
    .models-section {
        padding: 60px 20px;

        .section-header .section-title {
            font-size: 2.5rem;
        }

        .models-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px;
        }

        .model-card {
            padding: 24px 20px;

            .model-icon {
                width: 60px;
                height: 60px;
                margin-bottom: 16px;

                .icon {
                    width: 30px;
                    height: 30px;
                }
            }

            .model-content .model-name {
                font-size: 1.3rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .models-section {
        .section-header .section-title {
            font-size: 2rem;
        }

        .model-card {
            padding: 20px 16px;

            .model-icon {
                width: 50px;
                height: 50px;

                .icon {
                    width: 25px;
                    height: 25px;
                }
            }

            .model-content .model-name {
                font-size: 1.2rem;
            }

            .wip-overlay {
                padding: 6px 12px;
                font-size: 0.7rem;
                min-width: 80px;
            }
        }
    }
}

// Dark mode support
.dark {
    .models-section {
        .model-card {
            background: rgba(30, 41, 59, 0.95);
            border-color: rgba(148, 163, 184, 0.2);

            &:hover {
                border-color: rgba(148, 163, 184, 0.4);
            }

            .model-content .model-name {
                color: #e2e8f0;
            }

            &.wip .model-content .model-name {
                color: #94a3b8;
            }
        }
    }
}
</style>