<script setup>
import { tr } from '../i18n.js'

const services = [
  { num: '01', h: 's1h', p: 's1p', icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>' },
  { num: '02', h: 's2h', p: 's2p', icon: '<path d="M4 4h16v12H9l-4 4Z"/>' },
  { num: '03', h: 's3h', p: 's3p', icon: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>' },
  { num: '04', h: 's4h', p: 's4p', icon: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>' },
  { num: '05', h: 's5h', p: 's5p', icon: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>' },
  { num: '06', h: 's6h', p: 's6p', icon: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="1" y="14" width="6" height="7" rx="2"/><rect x="17" y="14" width="6" height="7" rx="2"/>' },
  { num: '07', h: 's7h', p: 's7p', icon: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/>' }
]
</script>

<template>
  <section id="services">
    <div class="wrap">
      <div class="section-head center" v-reveal>
        <div class="eyebrow"><span class="dot"></span><span>{{ tr.svcEyebrow }}</span></div>
        <h2>{{ tr.svcH2 }}</h2>
        <p>{{ tr.svcP }}</p>
      </div>
      <div class="services" v-reveal-group>
        <div v-for="s in services" :key="s.num" class="service glass">
          <div class="ring"></div>
          <span class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" v-html="s.icon"></svg>
          </span>
          <div>
            <span class="num">{{ s.num }}</span>
            <h3>{{ tr[s.h] }}</h3>
            <p>{{ tr[s.p] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
