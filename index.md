---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---
<script setup lang="ts">
import MainPage from "./main_page.vue"
import * as naive from "naive-ui"
const { NMessageProvider } = naive
</script>
<NMessageProvider>
    <MainPage/>
</NMessageProvider>