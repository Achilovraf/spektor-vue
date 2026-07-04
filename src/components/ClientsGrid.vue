<script setup>
import { tr } from '../i18n.js'

const clients = [
  { name: 'Anhor Milliy Taomlar', logo: '/clients/Anhor.jpg' },
  { name: 'Alskom', logo: '/clients/Aslkom.png' },
  { name: 'Rapid Generators', logo: '/clients/Rapid.png' },
  { name: "Startup Yo'li", logo: '/clients/Startup.png' },
  { name: 'Taomdor', logo: '/clients/Taomdor.png' },
  { name: 'Totli Taom', logo: '/clients/Totli-Taom.png' }
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
