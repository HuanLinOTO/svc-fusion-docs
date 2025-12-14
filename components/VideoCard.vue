<template>
    <div class="video-card" @click="openModal">
        <div class="card-thumbnail">
            <img :src="thumbnailUrl" :alt="title" class="thumbnail-img" />
            <div class="play-overlay">
                <!-- <div class="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div> -->
            </div>
            <span class="card-icon-badge">{{ icon }}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">{{ title }}</h3>
            <p v-if="description" class="card-description">{{ description }}</p>
            <a :href="authorLink" target="_blank" class="author-link" @click.stop>
                <span class="author-avatar">{{ authorIcon }}</span> {{ author }}
            </a>
        </div>
        <div class="click-hint">
            <span>👆 点击观看</span>
        </div>
    </div>

    <!-- 视频弹窗 -->
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isModalOpen" class="video-modal-overlay" @click="closeModal">
                <div class="video-modal" @click.stop>
                    <button class="modal-close" @click="closeModal">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                    <div class="modal-header">
                        <span class="modal-icon">{{ icon }}</span>
                        <div class="modal-title-section">
                            <h3>{{ title }}</h3>
                            <a :href="authorLink" target="_blank" class="modal-author">
                                {{ authorIcon }} {{ author }}
                            </a>
                        </div>
                    </div>
                    <div class="modal-video-container">
                        <iframe v-if="isModalOpen" :src="videoSrc" scrolling="no" border="0" frameborder="no"
                            framespacing="0" allowfullscreen="true"></iframe>
                    </div>
                    <p v-if="description" class="modal-description">{{ description }}</p>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
    icon?: string
    title: string
    author: string
    authorLink: string
    authorIcon?: string
    description?: string
    bvid: string
    aid?: string
    cid?: string
}

const props = withDefaults(defineProps<Props>(), {
    icon: '🎬',
    authorIcon: '👤',
    description: '',
    aid: '',
    cid: ''
})

const isModalOpen = ref(false)

const thumbnailUrl = computed(() => {
    return `https://api.bilibili.com/x/web-interface/view?bvid=${props.bvid}`
})

// 使用B站封面图
const thumbnailImg = computed(() => {
    return `https://i0.hdslb.com/bfs/archive/${props.bvid}.jpg`
})

const videoSrc = computed(() => {
    let url = `//player.bilibili.com/player.html?isOutside=true&bvid=${props.bvid}&p=1&autoplay=1`
    if (props.aid) url += `&aid=${props.aid}`
    if (props.cid) url += `&cid=${props.cid}`
    return url
})

const openModal = () => {
    isModalOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    isModalOpen.value = false
    document.body.style.overflow = ''
}
</script>

<style scoped>
.video-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.video-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.4);
}

.video-card:hover .play-overlay {
    opacity: 1;
}

.video-card:hover .play-button {
    transform: scale(1.1);
}

.video-card:hover .click-hint {
    opacity: 1;
    transform: translateY(0);
}

.card-thumbnail {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow: hidden;
}

.thumbnail-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
}

.play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.play-button {
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.play-button svg {
    width: 28px;
    height: 28px;
    color: #667eea;
    margin-left: 4px;
}

.card-icon-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 1.5em;
    background: rgba(255, 255, 255, 0.95);
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    line-height: 1;
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    margin: 0 0 8px 0;
    font-size: 1.1em;
    font-weight: 600;
    color: #2d3748;
    border: none !important;
    padding: 0 !important;
    line-height: 1.4;
}

.card-description {
    margin: 0 0 12px 0;
    font-size: 0.85em;
    color: #718096;
    line-height: 1.5;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.author-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8em;
    color: #667eea;
    text-decoration: none;
    transition: color 0.2s;
    margin-top: auto;
}

.author-link:hover {
    color: #764ba2;
}

.click-hint {
    padding: 12px 20px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
    border-top: 1px solid rgba(102, 126, 234, 0.1);
    text-align: center;
    font-size: 0.85em;
    color: #667eea;
    opacity: 0.6;
    transform: translateY(4px);
    transition: all 0.3s ease;
}

/* Modal 样式 */
.video-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
    backdrop-filter: blur(8px);
}

.video-modal {
    background: white;
    border-radius: 20px;
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    overflow: hidden;
    position: relative;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
}

.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 10;
}

.modal-close:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: rotate(90deg);
}

.modal-close svg {
    width: 20px;
    height: 20px;
    color: #4a5568;
}

.modal-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px 24px 16px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.modal-icon {
    font-size: 2.5em;
    line-height: 1;
}

.modal-title-section h3 {
    margin: 0 0 6px 0;
    font-size: 1.3em;
    font-weight: 600;
    color: #2d3748;
    border: none !important;
    padding: 0 !important;
}

.modal-author {
    font-size: 0.9em;
    color: #667eea;
    text-decoration: none;
}

.modal-author:hover {
    color: #764ba2;
}

.modal-video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background: #000;
}

.modal-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.modal-description {
    padding: 16px 24px 24px;
    margin: 0;
    font-size: 0.95em;
    color: #4a5568;
    line-height: 1.6;
    background: #f8fafc;
}

/* Modal 动画 */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .video-modal,
.modal-leave-to .video-modal {
    transform: scale(0.9) translateY(20px);
}

/* 深色模式适配 */
.dark .video-card {
    background: #1a202c;
    border-color: rgba(102, 126, 234, 0.2);
}

.dark .video-card:hover {
    border-color: rgba(102, 126, 234, 0.4);
}

.dark .card-title {
    color: #e2e8f0;
}

.dark .card-description {
    color: #a0aec0;
}

.dark .click-hint {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
    border-top-color: rgba(102, 126, 234, 0.2);
}

.dark .video-modal {
    background: #1a202c;
}

.dark .modal-header {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.dark .modal-title-section h3 {
    color: #e2e8f0;
}

.dark .modal-close {
    background: rgba(255, 255, 255, 0.1);
}

.dark .modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
}

.dark .modal-close svg {
    color: #e2e8f0;
}

.dark .modal-description {
    background: #2d3748;
    color: #a0aec0;
}
</style>
