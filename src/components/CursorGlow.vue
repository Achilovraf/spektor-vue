<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const glowEl = ref(null)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let rafId = null
let hasPosition = false

function onMouseMove(e) {
  targetX = e.clientX
  targetY = e.clientY
  if (!hasPosition) {
    currentX = targetX
    currentY = targetY
    hasPosition = true
  }
}

function tick() {
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08
  if (glowEl.value) {
    glowEl.value.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (prefersReduced) return
  targetX = currentX = window.innerWidth / 2
  targetY = currentY = window.innerHeight * 0.4
  hasPosition = true
  window.addEventListener('mousemove', onMouseMove)
  tick()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <div class="cursor-glow" ref="glowEl" aria-hidden="true"></div>
</template>
