<template>
    <div class="dlc-item">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <div class="dlc-links">
            <a v-if="netdiskLink" :href="netdiskLink" target="_blank" class="download-btn netdisk">
                💾 网盘下载
            </a>
            <a :href="primaryLink" target="_blank" class="download-btn primary">
                📥 HuggingFace 下载
            </a>
            <a :href="mirrorLink" target="_blank" class="download-btn secondary">
                🌐 镜像下载
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DlcItem',
    props: {
        icon: {
            type: String,
            default: '🤖'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        primaryLink: {
            type: String,
            required: true
        },
        mirrorLink: {
            type: String,
            required: true
        },
        netdiskLink: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.dlc-item {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.dlc-item:hover {
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
    border-color: rgba(102, 126, 234, 0.2);
}

.dlc-item h4 {
    margin-top: 0;
    color: rgba(44, 62, 80, 0);
    font-size: 1.2em;
    font-weight: 600;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.dlc-item p {
    color: #6c757d;
    margin: 10px 0 15px 0;
    line-height: 1.6;
}

.dlc-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.download-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9em;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
}

.download-btn.primary {
    background: var(--gradient-primary);
    color: white;
    border-color: transparent;
}

.download-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    color: white;
    text-decoration: none;
}

.download-btn.secondary {
    background: rgba(108, 117, 125, 0.1);
    color: #6c757d;
    border-color: #6c757d;
}

.download-btn.secondary:hover {
    background: #6c757d;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
    text-decoration: none;
}

.download-btn.netdisk {
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    color: white;
    border-color: transparent;
}

.download-btn.netdisk:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
    color: white;
    text-decoration: none;
}

/* 黑暗主题适配 */
.dark .dlc-item {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(148, 163, 184, 0.2);
    color: #e2e8f0;
}

.dark .dlc-item:hover {
    background: rgba(30, 41, 59, 0.95);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.25);
}

.dark .dlc-item h4 {
    color: #e2e8f0;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.dark .dlc-item p {
    color: #94a3b8;
}

.dark .download-btn.primary {
    background: var(--gradient-primary);
    color: white;
}

.dark .download-btn.primary:hover {
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.dark .download-btn.secondary {
    background: rgba(148, 163, 184, 0.1);
    color: #94a3b8;
    border-color: rgba(148, 163, 184, 0.3);
}

.dark .download-btn.secondary:hover {
    background: rgba(148, 163, 184, 0.2);
    color: #e2e8f0;
    border-color: rgba(148, 163, 184, 0.5);
    box-shadow: 0 4px 12px rgba(148, 163, 184, 0.3);
}

.dark .download-btn.netdisk {
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    color: white;
}

.dark .download-btn.netdisk:hover {
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
}

@media (max-width: 768px) {
    .dlc-item {
        margin: 15px 0;
        padding: 16px;
    }

    .dlc-links {
        flex-direction: column;
    }

    .download-btn {
        text-align: center;
        justify-content: center;
    }
}
</style>