<template>
    <div class="hero-visual" aria-hidden="true">
        <!-- 多层渐变艺术 blob -->
        <div class="gradient-canvas">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="blob blob-4"></div>
        </div>
        <!-- Stripe 招牌细网格 -->
        <div class="grid-overlay"></div>
        <!-- logo -->
        <div class="logo-stage" :class="{ 'is-loaded': logoLoaded, 'is-animating': logoAnimating }">
            <img class="logo-img logo-img-base" src="/imgs/hero-logo.webp" alt="SVC Fusion" draggable="false"
                @load="handleLogoLoad" @error="handleLogoError" />
            <img class="logo-img logo-img-blur" src="/imgs/hero-logo.webp" alt="" draggable="false" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const logoLoaded = ref(false)
const logoAnimating = ref(false)

const markLogoLoaded = () => {
    if (logoLoaded.value) return

    logoLoaded.value = true

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            logoAnimating.value = true
        })
    })
}

const handleLogoLoad = (event: Event) => {
    const image = event.target as HTMLImageElement

    if (image.decode) {
        image.decode().catch(() => undefined).finally(markLogoLoaded)
        return
    }

    markLogoLoaded()
}

const handleLogoError = () => {
    markLogoLoaded()
}
</script>

<style lang="scss" scoped>
@media (max-width: 480px) {
    .hero-visual {
        display: none;
    }
}

.use-mobile {
    .hero-visual {
        display: none;
    }
}

.hero-visual {
    position: relative;
    width: 520px;
    height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 渐变艺术画布 */
.gradient-canvas {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: 32px;
    filter: saturate(140%);
}

.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(56px);
    opacity: 0.7;
}

.blob-1 {
    width: 320px;
    height: 320px;
    top: -40px;
    left: -40px;
    background: radial-gradient(circle at 30% 30%, #635bff 0%, rgba(99, 91, 255, 0) 70%);
}

.blob-2 {
    width: 300px;
    height: 300px;
    top: 40px;
    right: -60px;
    background: radial-gradient(circle at 60% 40%, #9b6dff 0%, rgba(155, 109, 255, 0) 70%);
}

.blob-3 {
    width: 280px;
    height: 280px;
    bottom: -50px;
    left: 30px;
    background: radial-gradient(circle at 50% 50%, #2bd4a8 0%, rgba(43, 212, 168, 0) 70%);
    opacity: 0.45;
}

.blob-4 {
    width: 260px;
    height: 260px;
    bottom: 0;
    right: 20px;
    background: radial-gradient(circle at 50% 50%, #ff8ac8 0%, rgba(255, 138, 200, 0) 70%);
    opacity: 0.4;
}

/* Stripe 细网格叠加 */
.grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(to right, rgba(99, 91, 255, 0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(99, 91, 255, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 0%, transparent 75%);
    pointer-events: none;
}

.logo-stage {
    position: relative;
    width: 440px;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    aspect-ratio: 1018 / 950;
    z-index: 2;
    filter: drop-shadow(0 16px 40px rgba(99, 91, 255, 0.3));

    &.is-loaded {
        .logo-img-base {
            opacity: 1;
        }

        .logo-img-blur {
            opacity: 1;
            filter: blur(20px);
        }
    }

    &.is-animating {
        .logo-img-blur {
            animation: logoBlurOut 1.1s ease-out forwards;
        }
    }
}

/* logo — 大占比,加载完成后再显示 */
.logo-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    user-select: none;
}

.logo-img-base {
    opacity: 0;
}

.logo-img-blur {
    position: absolute;
    inset: 0;
    opacity: 0;
    filter: blur(20px);
    pointer-events: none;
}

@keyframes logoBlurOut {
    from {
        opacity: 1;
        filter: blur(20px);
    }

    to {
        opacity: 0;
        filter: blur(0);
    }
}

@media (max-width: 1024px) {
    .hero-visual {
        width: 420px;
        height: 420px;
    }

    .logo-stage {
        width: 360px;
    }
}

@media (max-width: 768px) {
    .hero-visual {
        width: 340px;
        height: 340px;
    }

    .logo-stage {
        width: 280px;
    }

    .blob {
        filter: blur(40px);
    }
}

/* Dark mode — 增强发光 */
.dark {
    .blob {
        opacity: 0.85;
    }

    .blob-3 {
        opacity: 0.55;
    }

    .blob-4 {
        opacity: 0.5;
    }

    .grid-overlay {
        background-image:
            linear-gradient(to right, rgba(122, 115, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(122, 115, 255, 0.08) 1px, transparent 1px);
    }

    .logo-stage {
        filter: drop-shadow(0 16px 44px rgba(122, 115, 255, 0.42));
    }
}

@media (prefers-reduced-motion: reduce) {
    .logo-img-blur {
        animation: none;
        opacity: 0;
        filter: blur(0);
    }
}
</style>
