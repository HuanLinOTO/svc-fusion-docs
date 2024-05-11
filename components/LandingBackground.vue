<!-- Copy from Nitro Docs -->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import '../index.css'

const points = ref(new Array(15).fill(0).map(() => [Math.random(), Math.random()]))

const poly = computed(() => points.value.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(', '))

function jumpVal(val: number) {
  return Math.random() > 0.5 ? val + (Math.random() - 0.5) / 2 : Math.random()
}

let timeout
function jumpPoints() {
  for (let i = 0; i < points.value.length; i++) {
    points.value[i] = [jumpVal(points.value[i][0]), jumpVal(points.value[i][1])]
  }
  timeout = setTimeout(jumpPoints, 2000 + Math.random() * 1000)
}

onMounted(() => {
  jumpPoints()
  onUnmounted(() => clearTimeout(timeout))
})
</script>

<template>
  <div class="bg" aria-hidden="true">
    <div
      class="aspect-[1.7] h-full w-full bg-canvas"
      :style="{ 'clip-path': `polygon(${poly})` }"
    />
  </div>
</template>

<style scoped>
.bg > div {
  clip-path: circle(75%);
  transition: clip-path 3s;
  padding: 64px;
  height: 100%;
  width: 100%;
}

.bg-canvas {
  background: linear-gradient(90deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  opacity: 0.5 !important;
}

.light .bg > div {
  opacity: 1 !important;
}

.bg {
  z-index: -999;
  filter: blur(5rem);
  height: 100%;
  width: 100%;
  position: absolute;
}

</style>
