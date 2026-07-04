<script setup>
import { tr } from '../i18n.js'
</script>

<template>
  <section class="hero">
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
