<script setup>
import { tr } from '../i18n.js'

const projects = [
  {
    logo: '/clients/Aslkom.png',
    nameKey: 'proj2Name',
    tagKey: 'proj2Tag',
    durationKey: 'proj2Duration',
    descKey: 'proj2Desc'
  },
  {
    logo: '/clients/Startup.png',
    nameKey: 'proj3Name',
    tagKey: 'proj3Tag',
    durationKey: 'proj3Duration',
    descKey: 'proj3Desc'
  },
  {
    logo: '/clients/Rapid.png',
    nameKey: 'proj4Name',
    tagKey: 'proj4Tag',
    durationKey: 'proj4Duration',
    descKey: 'proj4Desc'
  }
]
</script>

<template>
  <section id="projects">
    <div class="wrap">
      <div class="section-head center" v-reveal>
        <div class="eyebrow"><span class="dot"></span><span>{{ tr.projEyebrow }}</span></div>
        <h2>{{ tr.projH2 }}</h2>
        <p>{{ tr.projP }}</p>
      </div>

      <div class="projects-list">
        <div v-for="(p, i) in projects" :key="i" class="project-item glass" :class="{ reverse: i % 2 === 1 }" v-reveal>
          <div class="project-visual">
            <img :src="p.logo" :alt="tr[p.nameKey]" />
            <div class="project-duration-badge">{{ tr[p.durationKey] }}</div>
          </div>
          <div class="project-text">
            <span class="case-tag">{{ tr[p.tagKey] }}</span>
            <h3>{{ tr[p.nameKey] }}</h3>
            <p>{{ tr[p.descKey] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
