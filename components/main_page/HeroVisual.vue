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
        <img class="logo-img" src="/imgs/hero-logo.png" alt="SVC Fusion" draggable="false" />
    </div>
</template>

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

/* logo — 大占比,无动画 */
.logo-img {
    position: relative;
    width: 440px;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    aspect-ratio: 1018 / 950;
    object-fit: contain;
    filter: drop-shadow(0 16px 40px rgba(99, 91, 255, 0.3));
    z-index: 2;
}

@media (max-width: 1024px) {
    .hero-visual {
        width: 420px;
        height: 420px;
    }

    .logo-img {
        width: 360px;
    }
}

@media (max-width: 768px) {
    .hero-visual {
        width: 340px;
        height: 340px;
    }

    .logo-img {
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

    .logo-img {
        filter: drop-shadow(0 16px 44px rgba(122, 115, 255, 0.42));
    }
}
</style>
