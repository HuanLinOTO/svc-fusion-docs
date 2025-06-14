import "../../index.css";
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // 可以在这里添加插槽内容
        })
    },
    enhanceApp({ app, router, siteData }) {
        if (typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
            // html 插入 class use-mobile
            document.documentElement.classList.add('use-mobile');
        }

        // 可以在这里注册全局组件或添加其他配置
    }
}