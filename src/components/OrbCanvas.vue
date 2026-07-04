<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { initOrb } from '../three/orb.js'

const canvasEl = ref(null)
let cleanup = () => {}

onMounted(() => {
  cleanup = initOrb(canvasEl.value)
})
onBeforeUnmount(() => {
  cleanup()
})
</script>

<template>
  <div class="orb-canvas-wrap">
    <canvas ref="canvasEl"></canvas>
  </div>
</template>
