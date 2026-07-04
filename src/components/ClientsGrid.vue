<script setup>
import { tr } from '../i18n.js'

const clients = [
  { name: 'Elite Dairy', logo: '/clients/693452648_17908601016400870_2068065229041156730_n.jpg' },
  { name: 'Alskom', logo: '/clients/adsft.png' },
  { name: 'Bahor Oromgohi', logo: '/clients/IMG_20251214_215128_438.jpg' },
  { name: 'Logo2', logo: '/clients/Logo2.jpg' },
  { name: 'Taomdor', logo: '/clients/Taomdor.jpg' },
  { name: 'Totli Taom', logo: '/clients/Totli.jpg' },
  { name: 'Anhor Milliy Taomlar', logo: '/clients/Anhor.jpg' },
  { name: "Startup Yo'li", logo: '/clients/avatarka-rangli.jpg' }
]
</script>

<template>
  <section id="clients" class="proof-strip">
    <div class="wrap">
      <div class="section-head center" v-reveal>
        <div class="eyebrow"><span class="dot"></span><span>{{ tr.clientsEyebrow }}</span></div>
        <h2>{{ tr.clientsH2 }}</h2>
        <p>{{ tr.clientsP }}</p>
      </div>
      <div class="clients-grid" v-reveal-group>
        <div v-for="client in clients" :key="client.name" class="client-tile">
          <img :src="client.logo" :alt="client.name" />
        </div>
      </div>
    </div>
  </section>
</template>
