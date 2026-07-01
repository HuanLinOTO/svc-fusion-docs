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
    },
    {
        link: 'https://www.locyan.cn/',
        title: '乐青团队',
        description: '灵感无界，执笔未来'
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
    overflow: hidden;
    border-top: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
    padding: 48px 24px 40px;
    background: var(--surface-page, #ffffff);
}

.VPFooter::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 70% at 50% 0%, rgba(99, 91, 255, 0.045) 0%, transparent 62%);
    pointer-events: none;
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
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: var(--vp-layout-max-width);
    text-align: center;
}

/* 友链样式 */
.friend-links {
    margin: 24px 0;
}

.friend-links-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--text-primary, #0a2540);
    margin-bottom: 16px;
    letter-spacing: -0.01em;
}

.friend-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 12px;
    margin-bottom: 16px;
}

.friend-link-item {
    display: block;
    padding: 14px 18px;
    background-color: var(--surface-subtle, #f6f9fc);
    border-radius: 8px;
    text-decoration: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
    border: 1px solid var(--border-subtle, rgba(50, 50, 93, 0.08));
}

.friend-link-item:hover {
    border-color: rgba(99, 91, 255, 0.3);
    box-shadow: 0 4px 12px rgba(50, 50, 93, 0.06);
    transform: translateY(-2px);
}

.friend-link-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary, #0a2540);
    margin-bottom: 4px;
    letter-spacing: -0.01em;
}

.friend-link-description {
    font-size: 0.78rem;
    color: var(--text-secondary, #425466);
    line-height: 1.5;
}

@media (max-width: 768px) {
    .friend-links-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .friend-link-item {
        padding: 12px 16px;
    }
}

.message,
.copyright {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted, #8392ab);
}

/* Dark mode */
.dark .VPFooter {
    background: linear-gradient(to bottom, var(--surface-page, #0a2540) 0%, #071d33 100%);
    border-top-color: rgba(255, 255, 255, 0.06);
}

.dark .VPFooter::before {
    background:
        radial-gradient(ellipse 70% 72% at 50% 0%, rgba(122, 115, 255, 0.09) 0%, transparent 62%),
        radial-gradient(ellipse 42% 48% at 12% 20%, rgba(43, 212, 168, 0.045) 0%, transparent 66%);
}

.dark .friend-links-title {
    color: var(--text-primary, #ffffff);
}

.dark .friend-link-item {
    background-color: rgba(255, 255, 255, 0.035);
    border-color: rgba(255, 255, 255, 0.075);
}

.dark .friend-link-item:hover {
    background-color: rgba(255, 255, 255, 0.055);
    border-color: rgba(122, 115, 255, 0.32);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.22);
}

.dark .friend-link-title {
    color: var(--text-primary, #ffffff);
}

.dark .friend-link-description {
    color: var(--text-secondary, #c4cdda);
}
</style>
