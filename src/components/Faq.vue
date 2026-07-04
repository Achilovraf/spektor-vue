<script setup>
import { tr } from '../i18n.js'

const items = [1, 2, 3, 4, 5]
</script>

<template>
  <section id="faq">
    <div class="wrap">
      <div class="section-head center" v-reveal>
        <div class="eyebrow"><span class="dot"></span><span>{{ tr.faqEyebrow }}</span></div>
        <h2>{{ tr.faqH2 }}</h2>
      </div>
      <div class="faq" v-reveal>
        <details v-for="(n, idx) in items" :key="n" class="faq-item" :open="idx === 0">
          <summary>{{ tr[`faq${n}q`] }}</summary>
          <p>{{ tr[`faq${n}a`] }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
