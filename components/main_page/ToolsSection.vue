<template>
    <div class="tools-section" ref="toolsSection" :class="{ 'animate': isVisible }">
        <div class="section-header">
            <h2 class="section-title">丰富的小工具</h2>
            <p class="section-subtitle">一站式音频处理工具集，让你的工作流程更加高效</p>
        </div>

        <div class="tools-container">
            <div class="tools-grid">
                <div v-for="(tool, index) in tools" :key="index" class="tool-card"
                    :style="{ animationDelay: `${index * 0.1}s` }" @mouseenter="handleMouseEnter(index)"
                    @mouseleave="handleMouseLeave(index)">
                    <div class="tool-icon-wrapper">
                        <div class="tool-icon" :class="`icon-${tool.type}`">
                            <component :is="getToolIcon(tool.type)" class="icon" />
                        </div>
                        <div class="icon-ripple" :class="{ active: hoveredIndex === index }"></div>
                    </div>
                    <div class="tool-content">
                        <h3 class="tool-name">{{ tool.name }}</h3>
                        <p class="tool-description">{{ tool.description }}</p>
                    </div>
                    <div class="tool-animation-bg" :class="{ active: hoveredIndex === index }"></div>
                </div>
            </div>

            <!-- 浮动动画元素 -->
            <div class="floating-elements">
                <div class="floating-circle" style="top: 10%; left: 15%;"></div>
                <div class="floating-square" style="top: 60%; right: 20%;"></div>
                <div class="floating-triangle" style="bottom: 20%; left: 10%;"></div>
                <div class="floating-diamond" style="top: 30%; right: 10%;"></div>
                <div class="floating-circle" style="bottom: 10%; right: 30%;"></div>
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
        fill: 'currentColor',
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
                        // 一旦开始动画就停止观察
                        observer?.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.2, // 当20%的元素可见时触发
                rootMargin: '0px 0px -100px 0px' // 提前100px触发
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
    padding: 100px 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }

    .section-header {
        text-align: center;
        margin-bottom: 80px;
        position: relative;
        z-index: 2;

        .section-title {
            font-size: 3.5rem;
            font-weight: 900;
            color: white;
            margin: 0 0 20px 0;
            line-height: 1.1;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            animation: none; // 默认不播放动画
        }

        .section-subtitle {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            margin: 0;
            max-width: 700px;
            margin: 0 auto;
            animation: none; // 默认不播放动画
            opacity: 0;
            transform: translateY(20px);
        }
    }

    .tools-container {
        position: relative;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px;
        z-index: 2;
    }

    .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
        position: relative;
    }

    .tool-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 24px;
        padding: 32px;
        position: relative;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        animation: none; // 默认不播放动画
        opacity: 0;
        transform: translateY(30px);

        &:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 255, 255, 0.4);
        }

        .tool-icon-wrapper {
            position: relative;
            margin-bottom: 24px;
            display: inline-block;

            .tool-icon {
                width: 80px;
                height: 80px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                transition: all 0.4s ease;
                position: relative;
                z-index: 2;

                &.icon-benchmark {
                    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
                }

                &.icon-cut {
                    background: linear-gradient(135deg, #4ecdc4, #44a08d);
                }

                &.icon-resample {
                    background: linear-gradient(135deg, #45b7d1, #96c93d);
                }

                &.icon-convert {
                    background: linear-gradient(135deg, #f9ca24, #f0932b);
                }

                &.icon-separate {
                    background: linear-gradient(135deg, #6c5ce7, #a29bfe);
                }

                &.icon-pitch {
                    background: linear-gradient(135deg, #fd79a8, #fdcb6e);
                }

                &.icon-realtime {
                    background: linear-gradient(135deg, #00b894, #00cec9);
                }

                .icon {
                    width: 40px;
                    height: 40px;
                    animation: none; // 默认不播放动画
                }
            }
        }

        .tool-content {
            .tool-name {
                font-size: 1.5rem;
                font-weight: 700;
                color: white;
                margin: 0 0 12px 0;
                line-height: 1.3;
            }

            .tool-description {
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.8);
                margin: 0;
                line-height: 1.5;
            }
        }

        .tool-animation-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: translateX(-100%);
            transition: transform 0.8s ease;

            &.active {
                transform: translateX(100%);
            }
        }
    }

    .floating-elements {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 1;

        .floating-circle,
        .floating-square,
        .floating-triangle,
        .floating-diamond {
            position: absolute;
            animation: none; // 默认不播放动画
            opacity: 0;
        }

        .floating-circle {
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 50%;
            animation-delay: -2s;
        }

        .floating-square {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 8px;
            animation-delay: -4s;
        }

        .floating-triangle {
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 43px solid white;
            animation-delay: -1s;
        }

        .floating-diamond {
            width: 35px;
            height: 35px;
            background: white;
            transform: rotate(45deg);
            animation-delay: -3s;
        }
    }

    // 当组件可见时开始动画
    &.animate {
        .section-header {
            .section-title {
                animation: titleFloat 3s ease-in-out infinite;
            }

            .section-subtitle {
                animation: subtitleFade 2s ease-in-out forwards;
            }
        }

        .tool-card {
            animation: cardSlideIn 0.8s ease-out forwards;

            .tool-icon-wrapper .tool-icon .icon {
                animation: iconFloat 2s ease-in-out infinite;
            }
        }

        .floating-elements {

            .floating-circle,
            .floating-square,
            .floating-triangle,
            .floating-diamond {
                animation: float 6s ease-in-out infinite;
                opacity: 0.1;
            }

            .floating-circle {
                animation-delay: -2s;
            }

            .floating-square {
                animation-delay: -4s;
            }

            .floating-triangle {
                animation-delay: -1s;
            }

            .floating-diamond {
                animation-delay: -3s;
            }
        }
    }
}

@keyframes gradientShift {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes titleFloat {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes subtitleFade {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardSlideIn {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes iconFloat {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-5px) rotate(5deg);
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

@media (max-width: 768px) {
    .tools-section {
        padding: 80px 20px;

        .section-header .section-title {
            font-size: 2.5rem;
        }

        .tools-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .tool-card {
            padding: 24px;

            .tool-icon-wrapper .tool-icon {
                width: 60px;
                height: 60px;

                .icon {
                    width: 30px;
                    height: 30px;
                }
            }

            .tool-content .tool-name {
                font-size: 1.3rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .tools-section {
        .section-header .section-title {
            font-size: 2rem;
        }

        .tool-card {
            padding: 20px;

            .tool-icon-wrapper .tool-icon {
                width: 50px;
                height: 50px;

                .icon {
                    width: 25px;
                    height: 25px;
                }
            }

            .tool-content .tool-name {
                font-size: 1.2rem;
            }
        }
    }
}

// Dark mode support
.dark {
    .tools-section {
        .tool-card {
            background: rgba(30, 41, 59, 0.8);
            border-color: rgba(148, 163, 184, 0.3);

            &:hover {
                border-color: rgba(148, 163, 184, 0.5);
            }
        }
    }
}
</style>