<script setup>
import { tr } from '../i18n.js'

const steps = [
  { num: '01', h: 'p1h', p: 'p1p', highlight: false },
  { num: '02', h: 'p2h', p: 'p2p', highlight: true },
  { num: '03', h: 'p3h', p: 'p3p', highlight: false }
]
</script>

<template>
  <section id="process">
    <div class="wrap">
      <div class="section-head center" v-reveal>
        <div class="eyebrow"><span class="dot"></span><span>{{ tr.procEyebrow }}</span></div>
        <h2>{{ tr.procH2 }}</h2>
        <p>{{ tr.procP }}</p>
      </div>
      <div class="process" v-reveal-group>
        <div
          v-for="s in steps"
          :key="s.num"
          class="step glass"
          :class="{ highlight: s.highlight }"
        >
          <span class="step-num">{{ s.num }}</span>
          <h3>{{ tr[s.h] }}</h3>
          <p>{{ tr[s.p] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
