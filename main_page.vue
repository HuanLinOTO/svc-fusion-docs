<template>
    <NModalProvider>
        <Banner />
        <HeroSection @show-modal="showModal = true" />
        <CommunityModal v-model:visible="showModal" />
    </NModalProvider>
</template>

<script lang="ts" setup>
import * as naive from "naive-ui"
const { NModalProvider } = naive
import { ref } from "vue"
import './index.css'

import Banner from './components/main_page/Banner.vue'
import HeroSection from './components/main_page/HeroSection.vue'
import CommunityModal from './components/main_page/CommunityModal.vue'

const showModal = ref(false)
</script>

<style lang="scss" scoped>
// 保留全局样式，组件特定样式已移至各组件文件</style>