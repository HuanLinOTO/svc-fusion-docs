<template>
    <div class="new-year-effects" v-if="isNewYearPeriod">
        <!-- 烟花 Canvas -->
        <canvas ref="fireworksCanvas" class="fireworks-canvas"></canvas>
        <!-- 红包/福字飘落容器 -->
        <div class="falling-items" aria-hidden="true">
            <div class="falling-item" v-for="i in 15" :key="i">
                <div class="inner" v-html="fallingIcons[i % 5]"></div>
            </div>
        </div>
        <!-- 新年横幅 -->
        <Transition name="banner-fade">
            <div class="new-year-banner" v-if="showBanner" @click="closeBanner">
                <div class="banner-sub">↓点击关闭↓</div>
                <div class="banner-content chinese-style">
                    <span class="text">SVCFusion 开发团队祝各位新年快乐，万事如意！</span>
                </div>
            </div>
        </Transition>
        <!-- 角落装饰 -->
        <div class="corner-decoration top-left" v-html="lanternSvg"></div>
        <div class="corner-decoration top-right" v-html="lanternSvg"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const fireworksCanvas = ref<HTMLCanvasElement | null>(null)
const showBanner = ref(true)
let animationId: number | null = null

// 判断是否在新年期间（12月28日 - 次年3月1日）
const isNewYearPeriod = computed(() => {
    const now = new Date()
    const month = now.getMonth() + 1 // getMonth() 返回 0-11
    const day = now.getDate()

    // 12月28日及之后 或 1月、2月全月 或 3月1日
    if (month === 12 && day >= 28) return true
    if (month === 1 || month === 2) return true
    if (month === 3 && day === 1) return true

    return false
})

// SVG 图标定义
const redEnvelopeSvg = `<svg viewBox="0 0 64 64" width="1em" height="1em">
  <rect x="8" y="4" width="48" height="56" rx="4" fill="#e53935"/>
  <rect x="8" y="4" width="48" height="20" rx="4" fill="#c62828"/>
  <circle cx="32" cy="24" r="10" fill="#ffd54f"/>
  <text x="32" y="29" text-anchor="middle" fill="#c62828" font-size="12" font-weight="bold">福</text>
  <rect x="28" y="34" width="8" height="16" fill="#ffd54f"/>
</svg>`

const fuSvg = `<svg viewBox="0 0 64 64" width="1em" height="1em">
  <rect x="4" y="4" width="56" height="56" rx="4" fill="#e53935"/>
  <rect x="8" y="8" width="48" height="48" rx="2" fill="#c62828" stroke="#ffd54f" stroke-width="2"/>
  <text x="32" y="45" text-anchor="middle" fill="#ffd54f" font-size="36" font-weight="bold" font-family="serif">福</text>
</svg>`

const lanternSvg = `<svg viewBox="0 0 64 80" width="1em" height="1em">
  <rect x="24" y="0" width="16" height="8" fill="#ffd54f"/>
  <line x1="32" y1="8" x2="32" y2="14" stroke="#c62828" stroke-width="2"/>
  <ellipse cx="32" cy="40" rx="24" ry="28" fill="#e53935"/>
  <ellipse cx="32" cy="40" rx="20" ry="24" fill="#ff5722"/>
  <ellipse cx="32" cy="40" rx="16" ry="20" fill="#ff7043"/>
  <rect x="8" y="36" width="48" height="8" fill="#ffd54f" opacity="0.6"/>
  <text x="32" y="45" text-anchor="middle" fill="#ffd54f" font-size="16" font-weight="bold">春</text>
  <rect x="24" y="66" width="16" height="6" fill="#ffd54f"/>
  <line x1="28" y1="72" x2="28" y2="80" stroke="#e53935" stroke-width="2"/>
  <line x1="32" y1="72" x2="32" y2="82" stroke="#e53935" stroke-width="2"/>
  <line x1="36" y1="72" x2="36" y2="80" stroke="#e53935" stroke-width="2"/>
</svg>`

const fireworkSvg = `<svg viewBox="0 0 64 64" width="1em" height="1em">
  <circle cx="32" cy="32" r="6" fill="#ffd54f"/>
  <g stroke="#ff5722" stroke-width="2">
    <line x1="32" y1="8" x2="32" y2="20"/>
    <line x1="32" y1="44" x2="32" y2="56"/>
    <line x1="8" y1="32" x2="20" y2="32"/>
    <line x1="44" y1="32" x2="56" y2="32"/>
    <line x1="15" y1="15" x2="23" y2="23"/>
    <line x1="41" y1="41" x2="49" y2="49"/>
    <line x1="49" y1="15" x2="41" y2="23"/>
    <line x1="23" y1="41" x2="15" y2="49"/>
  </g>
  <circle cx="32" cy="8" r="3" fill="#e53935"/>
  <circle cx="32" cy="56" r="3" fill="#e53935"/>
  <circle cx="8" cy="32" r="3" fill="#ffd54f"/>
  <circle cx="56" cy="32" r="3" fill="#ffd54f"/>
  <circle cx="15" cy="15" r="2" fill="#ff9800"/>
  <circle cx="49" cy="49" r="2" fill="#ff9800"/>
  <circle cx="49" cy="15" r="2" fill="#ff9800"/>
  <circle cx="15" cy="49" r="2" fill="#ff9800"/>
</svg>`

const sparklesSvg = `<svg viewBox="0 0 64 64" width="1em" height="1em">
  <polygon points="32,4 36,24 56,24 40,36 46,56 32,44 18,56 24,36 8,24 28,24" fill="#ffd54f"/>
  <polygon points="32,12 34,24 46,24 36,32 40,44 32,36 24,44 28,32 18,24 30,24" fill="#ffeb3b"/>
  <circle cx="32" cy="28" r="4" fill="#fff"/>
</svg>`

const fallingIcons = [redEnvelopeSvg, fuSvg, lanternSvg, fireworkSvg, sparklesSvg]

const closeBanner = () => {
    showBanner.value = false
}

// 烟花效果类
class Firework {
    x: number
    y: number
    targetY: number
    speed: number
    particles: Particle[] = []
    exploded: boolean = false
    hue: number

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = canvasHeight
        this.targetY = Math.random() * (canvasHeight * 0.5) + 50
        this.speed = 3 + Math.random() * 2
        this.hue = Math.random() * 360
    }

    update() {
        if (!this.exploded) {
            this.y -= this.speed
            if (this.y <= this.targetY) {
                this.explode()
            }
        }
        this.particles = this.particles.filter(p => p.alpha > 0)
        this.particles.forEach(p => p.update())
    }

    explode() {
        this.exploded = true
        const particleCount = 80 + Math.floor(Math.random() * 40)
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(this.x, this.y, this.hue))
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!this.exploded) {
            ctx.beginPath()
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`
            ctx.fill()

            // 尾迹
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x, this.y + 15)
            ctx.strokeStyle = `hsla(${this.hue}, 100%, 70%, 0.5)`
            ctx.lineWidth = 2
            ctx.stroke()
        }
        this.particles.forEach(p => p.draw(ctx))
    }

    isDead() {
        return this.exploded && this.particles.length === 0
    }
}

class Particle {
    x: number
    y: number
    vx: number
    vy: number
    alpha: number
    hue: number
    decay: number
    gravity: number
    trail: { x: number; y: number; alpha: number }[] = []
    trailLength: number = 5

    constructor(x: number, y: number, hue: number) {
        this.x = x
        this.y = y
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 6 + 2
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.alpha = 1
        this.hue = hue + Math.random() * 30 - 15
        this.decay = 0.02 + Math.random() * 0.015
        this.gravity = 0.05
    }

    update() {
        // 保存轨迹点
        this.trail.push({ x: this.x, y: this.y, alpha: this.alpha })
        if (this.trail.length > this.trailLength) {
            this.trail.shift()
        }

        this.x += this.vx
        this.y += this.vy
        this.vy += this.gravity
        this.vx *= 0.99
        this.alpha -= this.decay
    }

    draw(ctx: CanvasRenderingContext2D) {
        // 绘制轨迹
        for (let i = 0; i < this.trail.length; i++) {
            const t = this.trail[i]
            const trailAlpha = (i / this.trail.length) * t.alpha * 0.5
            ctx.save()
            ctx.globalAlpha = trailAlpha
            ctx.beginPath()
            ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`
            ctx.fill()
            ctx.restore()
        }

        // 绘制主粒子
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`
        ctx.fill()
        ctx.restore()
    }
}

onMounted(() => {
    // 如果不在新年期间，不启动动画
    if (!isNewYearPeriod.value) return

    const canvas = fireworksCanvas.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置 canvas 尺寸
    const resize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fireworks: Firework[] = []
    let frameCount = 0

    const animate = () => {
        // 使用 clearRect 清除画布，保持透明背景
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        frameCount++
        // 每隔一段时间随机发射烟花
        if (frameCount % 60 === 0 || (Math.random() < 0.02 && fireworks.length < 5)) {
            fireworks.push(new Firework(canvas.width, canvas.height))
        }

        // 更新和绘制所有烟花
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update()
            fireworks[i].draw(ctx)
            if (fireworks[i].isDead()) {
                fireworks.splice(i, 1)
            }
        }

        animationId = requestAnimationFrame(animate)
    }

    animate()

    onUnmounted(() => {
        if (animationId) {
            cancelAnimationFrame(animationId)
        }
        window.removeEventListener('resize', resize)
    })
})
</script>

<style scoped>
.new-year-effects {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
}

.fireworks-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* 横幅关闭动画 */
.banner-fade-enter-active {
    animation: banner-bounce-in 0.5s ease;
}

.banner-fade-leave-active {
    animation: banner-fly-away 0.6s ease forwards;
}

@keyframes banner-bounce-in {
    0% {
        opacity: 0;
        transform: translateX(-50%) translateY(50px) scale(0.5);
    }

    50% {
        transform: translateX(-50%) translateY(-10px) scale(1.05);
    }

    100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
    }
}

@keyframes banner-fly-away {
    0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1) rotate(0deg);
    }

    30% {
        opacity: 1;
        transform: translateX(-50%) translateY(-20px) scale(1.1) rotate(-5deg);
    }

    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(-100px) scale(0.3) rotate(15deg);
    }
}

/* 新年横幅 - 中国风 */
.new-year-banner {
    position: fixed;
    bottom: 0px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    pointer-events: auto;
    cursor: pointer;
    z-index: 10000;
    text-align: center;
    opacity: 0.90;
}

.banner-content.chinese-style {
    background: linear-gradient(135deg, #c41e3a 0%, #ff4757 30%, #c41e3a 50%, #8b0000 100%);
    background-size: 200% 200%;
    animation: chinese-gradient 3s ease infinite;
    padding: 10px 32px;
    /* border-radius: 8px; */
    display: flex;
    align-items: center;
    /* gap: 12px; */
    box-shadow:
        0 4px 20px rgba(196, 30, 58, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 0 30px rgba(255, 215, 0, 0.3);
    /* border: 3px solid #ffd700; */
    position: relative;
}

.banner-content.chinese-style::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ffd700, #ff6b35, #ffd700);
    border-radius: 10px;
    z-index: -1;
    animation: border-glow 2s ease infinite;
}

@keyframes border-glow {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

.banner-content .text {
    font-size: 20px;
    font-weight: bold;
    color: #ffd700;
    text-shadow:
        0 2px 4px rgba(0, 0, 0, 0.5),
        0 0 10px rgba(255, 215, 0, 0.5);
    font-family: "Microsoft YaHei", "SimHei", sans-serif;
}

.banner-content .lantern {
    font-size: 28px;
    animation: lantern-swing 2s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(255, 100, 0, 0.8));
}

@keyframes lantern-swing {

    0%,
    100% {
        transform: rotate(-5deg);
    }

    50% {
        transform: rotate(5deg);
    }
}

@keyframes chinese-gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.banner-sub {
    font-size: 12px;
    color: rgba(252, 80, 0, 0.7);
    margin-top: 6px;
}

/* 角落装饰 */
.corner-decoration {
    position: fixed;
    font-size: 48px;
    animation: corner-swing 3s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(255, 100, 0, 0.6));
}

.corner-decoration :deep(svg) {
    width: 1em;
    height: 1.2em;
}

.corner-decoration.top-left {
    top: 10px;
    left: 10px;
}

.corner-decoration.top-right {
    top: 10px;
    right: 10px;
    animation-delay: 0.5s;
}

@keyframes corner-swing {

    0%,
    100% {
        transform: rotate(-10deg) scale(1);
    }

    50% {
        transform: rotate(10deg) scale(1.1);
    }
}

/* 红包/福字飘落样式 */
.falling-items {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.falling-item {
    font-size: 2em;
    position: absolute;
    top: -10%;
    animation: fall-down linear infinite;
}

.falling-item .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: item-spin 4s linear infinite;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.falling-item .inner :deep(svg) {
    width: 1em;
    height: 1em;
}

@keyframes fall-down {
    0% {
        transform: translateY(0vh) translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateY(115vh) translateX(30px);
        opacity: 0.6;
    }
}

@keyframes item-spin {
    0% {
        transform: rotate(0deg) scale(1);
    }

    25% {
        transform: rotate(15deg) scale(1.1);
    }

    50% {
        transform: rotate(0deg) scale(1);
    }

    75% {
        transform: rotate(-15deg) scale(1.1);
    }

    100% {
        transform: rotate(0deg) scale(1);
    }
}

/* 为每个飘落元素设置不同的位置、大小、动画时长 */
.falling-item:nth-child(1) {
    left: 3%;
    animation-duration: 12s;
    animation-delay: 0s;
    font-size: 1.8em;
}

.falling-item:nth-child(2) {
    left: 10%;
    animation-duration: 15s;
    animation-delay: 1s;
    font-size: 1.2em;
}

.falling-item:nth-child(3) {
    left: 18%;
    animation-duration: 10s;
    animation-delay: 2s;
    font-size: 2em;
}

.falling-item:nth-child(4) {
    left: 28%;
    animation-duration: 18s;
    animation-delay: 0.5s;
    font-size: 1.5em;
}

.falling-item:nth-child(5) {
    left: 38%;
    animation-duration: 11s;
    animation-delay: 3s;
    font-size: 1.8em;
}

.falling-item:nth-child(6) {
    left: 48%;
    animation-duration: 14s;
    animation-delay: 1.5s;
    font-size: 1.3em;
}

.falling-item:nth-child(7) {
    left: 58%;
    animation-duration: 16s;
    animation-delay: 2.5s;
    font-size: 1.6em;
}

.falling-item:nth-child(8) {
    left: 68%;
    animation-duration: 9s;
    animation-delay: 0s;
    font-size: 2.2em;
}

.falling-item:nth-child(9) {
    left: 78%;
    animation-duration: 19s;
    animation-delay: 4s;
    font-size: 1em;
}

.falling-item:nth-child(10) {
    left: 88%;
    animation-duration: 13s;
    animation-delay: 2s;
    font-size: 1.7em;
}

.falling-item:nth-child(11) {
    left: 95%;
    animation-duration: 14s;
    animation-delay: 3.5s;
    font-size: 1.4em;
}

.falling-item:nth-child(12) {
    left: 22%;
    animation-duration: 11s;
    animation-delay: 1s;
    font-size: 1.9em;
}

.falling-item:nth-child(13) {
    left: 42%;
    animation-duration: 17s;
    animation-delay: 2.8s;
    font-size: 1.1em;
}

.falling-item:nth-child(14) {
    left: 62%;
    animation-duration: 12s;
    animation-delay: 0.8s;
    font-size: 1.6em;
}

.falling-item:nth-child(15) {
    left: 82%;
    animation-duration: 15s;
    animation-delay: 3.2s;
    font-size: 1.3em;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .banner-content.chinese-style {
        padding: 12px 20px;
    }

    .banner-content .text {
        font-size: 16px;
    }

    .banner-content .lantern {
        font-size: 22px;
    }

    .corner-decoration {
        font-size: 28px;
    }
}
</style>
