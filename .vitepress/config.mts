import { defineConfig } from "vitepress";
import afd_svg from "./afd_svg";



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SVC Fusion整合包文档",
  description: "SVC Fusion 的官方文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",

    nav: [
      { text: "Home", link: "/" },
      { text: "全流程教程", link: "/start/index" },
      { text: "常见问题", link: "/faq/index" },
      { text: "二次贩卖授权", link: "/daomai" },
    ],

    sidebar: [
      {
        text: "全流程教程",
        items: [
          { text: "更新日志", link: "/start/changelog" },
          { text: "下载与安装", link: "/start/download" },
          { text: "必看基础知识", link: "/start/base_knowledge" },
          { text: "正式使用", link: "/start/launch" },
          { text: "关于Linux", link: "/start/linux" },
          { text: "其他设备", link: "/start/other_equimpment" },
        ],
      },
      {
        text: "常见问题",
        items: [{ text: "常见问题-首页", link: "/faq/index" }],
      },
      {
        text: "特殊版块",
        items: [{ text: "傻逼倒钩", link: "/start/sbdaogou" }],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/huanlinoto/svc-fusion-docs" },
      { icon: { svg: afd_svg }, link: "https://afdian.com/a/dwhlqwq" },
    ],
    footer: {
      message:
        '<a href="http://beian.miit.gov.cn/?spm=a2c4g.11174386.n2.3.41d561dbuHrgEv">备案 苏ICP备2024094491号-3</a> <br> 🚀 <a href="https://github.com/HuanLinOTO/svc-fusion-docs/commit/|| CommitHash ||">|| CommitHashShort ||</a>',
      copyright: "Copyright © 2023-2025 多玩幻灵qwq | 爱过留过",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ]
});