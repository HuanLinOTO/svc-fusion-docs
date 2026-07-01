<template>
    <div class="tools-section" ref="toolsSection" :class="{ 'animate': isVisible }">
        <div class="section-header">
            <div class="section-eyebrow">工具集</div>
            <h2 class="section-title">丰富的小工具</h2>
            <p class="section-subtitle">一站式音频处理工具集，让你的工作流程更加高效</p>
        </div>

        <div class="tools-container">
            <div class="tools-grid">
                <div v-for="(tool, index) in tools" :key="index" class="tool-card"
                    :style="{ animationDelay: `${index * 0.08}s` }" @mouseenter="handleMouseEnter(index)"
                    @mouseleave="handleMouseLeave(index)">
                    <div class="tool-icon-wrapper">
                        <div class="tool-icon" :class="`icon-${tool.type}`">
                            <component :is="getToolIcon(tool.type)" class="icon" />
                        </div>
                    </div>
                    <div class="tool-content">
                        <h3 class="tool-name">{{ tool.name }}</h3>
                        <p class="tool-description">{{ tool.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { h, ref, onMounted, onUnmounted } from 'vue'

const hoveredIndex = ref(-1)
const toolsSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const tools = [
    {
        name: 'CUDA 性能基准测试',
        description: '测试你的显卡性能，优化推理配置',
        type: 'benchmark'
    },
    {
        name: '音频切割',
        description: '精确切割音频文件，支持多种格式',
        type: 'cut'
    },
    {
        name: '重采样',
        description: '改变音频采样率，匹配模型要求',
        type: 'resample'
    },
    {
        name: '批量转WAV',
        description: '批量转换音频格式为WAV',
        type: 'convert'
    },
    {
        name: '人声分离',
        description: '智能分离人声和伴奏',
        type: 'separate'
    },
    {
        name: '声码器变调',
        description: '使用声码器进行音调变换',
        type: 'pitch'
    },
    {
        name: '实时变声器',
        description: '实时语音转换，即时体验',
        type: 'realtime'
    }
]

const handleMouseEnter = (index: number) => {
    hoveredIndex.value = index
}

const handleMouseLeave = (index: number) => {
    hoveredIndex.value = -1
}

const getToolIcon = (type: string) => {
    const iconProps = {
        class: 'w-8 h-8',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        viewBox: '0 0 24 24'
    }

    switch (type) {
        case 'benchmark':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.5-1.5V4.5L15.5 9H11v9.5l5.5-4.75z' })
            ])
        case 'cut':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z' })
            ])
        case 'resample':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 6v6m6-3l-6 6-6-6M7 17h10' })
            ])
        case 'convert':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z' })
            ])
        case 'separate':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z' })
            ])
        case 'pitch':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' })
            ])
        case 'realtime':
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M11.5 14C8.46 14 6 11.54 6 8.5S8.46 3 11.5 3s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5zm6.5 6L16 18l-2 2-2-2-2 2v-4l2-2 2 2 2-2v4z' })
            ])
        default:
            return h('svg', { ...iconProps }, [
                h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
            ])
    }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
    if (toolsSection.value) {
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
                rootMargin: '0px 0px -80px 0px'
            }
        )
        observer.observe(toolsSection.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style lang="scss" scoped>
.tools-section {
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
        background: radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99, 91, 255, 0.05) 0%, transparent 60%);
        pointer-events: none;
    }

    .section-header {
        text-align: center;
        margin-bottom: 64px;
        position: relative;
        z-index: 2;
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

    .tools-container {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 40px;
        z-index: 2;
    }

    .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        position: relative;
    }

    .tool-card {
        background: var(--surface-page, #ffffff);
        border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
        border-radius: 12px;
        padding: 28px;
        position: relative;
        transition: all 0.2s ease;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px);
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.04);

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(50, 50, 93, 0.08), 0 4px 8px rgba(0, 0, 0, 0.03);
            border-color: rgba(99, 91, 255, 0.2);
        }

        .tool-icon-wrapper {
            position: relative;
            margin-bottom: 20px;
            display: inline-block;

            .tool-icon {
                width: 48px;
                height: 48px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                transition: all 0.2s ease;
                position: relative;

                &.icon-benchmark {
                    background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
                }

                &.icon-cut {
                    background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
                }

                &.icon-resample {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                }

                &.icon-convert {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                }

                &.icon-separate {
                    background: linear-gradient(135deg, #635bff 0%, #5b3fd6 100%);
                }

                &.icon-pitch {
                    background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
                }

                &.icon-realtime {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }

                .icon {
                    width: 24px;
                    height: 24px;
                }
            }
        }

        &:hover .tool-icon {
            transform: scale(1.05);
        }

        .tool-content {
            .tool-name {
                font-size: 1.15rem;
                font-weight: 700;
                color: var(--text-primary, #0a2540);
                margin: 0 0 8px 0;
                line-height: 1.3;
                letter-spacing: -0.02em;
            }

            .tool-description {
                font-size: 0.95rem;
                color: var(--text-secondary, #425466);
                margin: 0;
                line-height: 1.5;
            }
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

        .tool-card {
            animation: cardSlideIn 0.5s ease-out forwards;
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
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .tools-section {
        padding: 64px 0;

        .section-header .section-title {
            font-size: 2rem;
        }

        .tools-grid {
            grid-template-columns: 1fr;
            gap: 16px;
        }

        .tool-card {
            padding: 24px 20px;

            .tool-icon-wrapper .tool-icon {
                width: 44px;
                height: 44px;

                .icon {
                    width: 22px;
                    height: 22px;
                }
            }

            .tool-content .tool-name {
                font-size: 1.1rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .tools-section {
        .section-header .section-title {
            font-size: 1.75rem;
        }

        .tool-card {
            padding: 20px 16px;

            .tool-icon-wrapper .tool-icon {
                width: 40px;
                height: 40px;

                .icon {
                    width: 20px;
                    height: 20px;
                }
            }

            .tool-content .tool-name {
                font-size: 1.05rem;
            }
        }
    }
}

// Dark mode support
.dark {
    .tools-section {
        background: var(--surface-page, #0a2540);

        &::before {
            background: radial-gradient(ellipse 70% 50% at 50% 100%, rgba(122, 115, 255, 0.06) 0%, transparent 60%);
        }

        .section-header {
            .section-title {
                color: var(--text-primary, #ffffff);
            }

            .section-subtitle {
                color: var(--text-secondary, #c4cdda);
            }
        }

        .tool-card {
            background: var(--surface-page, #0a2540);
            border-color: var(--border-subtle, rgba(255, 255, 255, 0.08));

            &:hover {
                border-color: rgba(122, 115, 255, 0.3);
            }

            .tool-content {
                .tool-name {
                    color: var(--text-primary, #ffffff);
                }

                .tool-description {
                    color: var(--text-secondary, #c4cdda);
                }
            }
        }
    }
}
</style>
