<template>
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
</template>

<style lang="scss" scoped>
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

@media (max-width: 1024px) {
    .hero-visual {
        width: 300px;
        height: 300px;
    }
}

@media (max-width: 768px) {
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
}

// Dark mode support
.dark {
    .floating-card {
        background: #334155 !important;
        color: white;

        .card-text {
            color: #cbd5e1 !important;
        }
    }
}
</style>
