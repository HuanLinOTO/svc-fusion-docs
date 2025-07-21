<script setup lang="ts">
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar.js'

// 友链数据类型定义
interface FriendLink {
    link: string
    title: string
    description: string
}

const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()

// 友链数据
const friendLinks: FriendLink[] = [
    {
        link: 'https://mewbaka.cn/',
        title: 'MewBaka',
        description: '一个简单又笨蛋的视觉小说开发团队'
    },
    {
        link: 'https://www.openfrp.net/',
        title: 'OpenFrp',
        description: '免费内网穿透，支持映射MC多人游戏、泰拉瑞亚多人联机'
    }
]
</script>

<template>
    <footer v-if="theme.footer && frontmatter.footer !== false" class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
        <div class="container">

            <!-- 友链区域 -->
            <div v-if="friendLinks.length > 0" class="friend-links">
                <h4 class="friend-links-title">友情链接</h4>
                <div class="friend-links-grid">
                    <a v-for="link in friendLinks" :key="link.link" :href="link.link" target="_blank"
                        rel="noopener noreferrer" class="friend-link-item">
                        <div class="friend-link-title">{{ link.title }}</div>
                        <div class="friend-link-description">{{ link.description }}</div>
                    </a>
                </div>
            </div>

            <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
            <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
        </div>
    </footer>
</template>

<style scoped>
.VPFooter {
    position: relative;
    z-index: var(--vp-z-index-footer);
    border-top: 1px solid var(--vp-c-gutter);
    padding: 32px 24px;
    background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
    display: none;
}

.VPFooter :deep(a) {
    /* text-decoration-line: underline; */
    text-underline-offset: 2px;
    transition: all 0.25s;
}

.VPFooter :deep(a:hover) {
    color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
    .VPFooter {
        padding: 32px;
    }
}

.container {
    margin: 0 auto;
    max-width: var(--vp-layout-max-width);
    text-align: center;
}

/* 友链样式 */
.friend-links {
    margin: 24px 0;
}

.friend-links-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin-bottom: 16px;
}

.friend-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    margin-bottom: 16px;
}

.friend-link-item {
    display: block;
    padding: 16px 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.friend-link-item:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.friend-link-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin-bottom: 6px;
}

.friend-link-description {
    font-size: 13px;
    color: var(--vp-c-text-2);
    line-height: 1.5;
    opacity: 0.8;
}

@media (max-width: 768px) {
    .friend-links-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .friend-link-item {
        padding: 14px 16px;
    }
}

.message,
.copyright {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
</style>
