// 复制 version.json env_version.json 到 .vitepress/dist
const fs = require('fs');
fs.copyFileSync("version.json", ".vitepress/dist/version.json");
fs.copyFileSync("env_version.json", ".vitepress/dist/env_version.json");
fs.copyFileSync("favicon.ico", ".vitepress/dist/favicon.ico");