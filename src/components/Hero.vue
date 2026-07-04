<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { tr } from '../i18n.js'

const heroEl = ref(null)
const glowEl = ref(null)

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// target = where the mouse actually is; current = where the glow is drawn.
// Easing current toward target every frame gives the soft "chasing" feel.
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let rafId = null
let hasPosition = false

function onMouseMove(e) {
  const rect = heroEl.value.getBoundingClientRect()
  targetX = e.clientX - rect.left
  targetY = e.clientY - rect.top
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
  const rect = heroEl.value.getBoundingClientRect()
  targetX = currentX = rect.width / 2
  targetY = currentY = rect.height * 0.6
  hasPosition = true
  heroEl.value.addEventListener('mousemove', onMouseMove)
  tick()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  heroEl.value?.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <section class="hero" ref="heroEl">
    <div class="cursor-glow" ref="glowEl" aria-hidden="true"></div>

    <div class="wrap">
      <div class="hero-inner">
        <h1 v-reveal v-html="tr.heroH1"></h1>
        <p class="lede" v-reveal>{{ tr.heroLede }}</p>
        <div class="hero-actions" v-reveal>
          <a href="#audit" class="btn btn-primary">{{ tr.heroBtn1 }}</a>
          <a href="#clients" class="btn btn-ghost"><span>{{ tr.heroBtn2 }}</span> <span class="arrow">→</span></a>
        </div>
      </div>
    </div>

    <div class="hero-proofs-wrap">
      <div class="hero-proofs">
        <div class="proof-badge glass" v-reveal>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <span>{{ tr.proof1 }}</span>
        </div>
        <div class="proof-badge glass" v-reveal>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5Z"/></svg>
          <span>{{ tr.proof2 }}</span>
        </div>
        <div class="proof-badge glass" v-reveal>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          <span>{{ tr.proof3 }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
