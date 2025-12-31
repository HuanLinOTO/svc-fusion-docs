<template>
    <NModalProvider>
        <NewYearEffects />
        <Banner />
        <HeroSection @show-modal="showModal = true" />
        <ComparisonTable />
        <ModelsSection />
        <ToolsSection />
        <CommunityModal v-model:visible="showModal" />
    </NModalProvider>
</template>

<script lang="ts" setup>
import * as naive from "naive-ui"
const { NModalProvider } = naive
import { ref } from "vue"
import './index.css'

import NewYearEffects from './components/main_page/NewYearEffects.vue'
import Banner from './components/main_page/Banner.vue'
import HeroSection from './components/main_page/HeroSection.vue'
import ComparisonTable from './components/main_page/ComparisonTable.vue'
import CommunityModal from './components/main_page/CommunityModal.vue'
import ModelsSection from './components/main_page/ModelsSection.vue'
import ToolsSection from './components/main_page/ToolsSection.vue'

const showModal = ref(false)
</script>

<style lang="scss" scoped>
// 保留全局样式，组件特定样式已移至各组件文件</style>