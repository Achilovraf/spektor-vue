<script setup>
import { tr } from '../i18n.js'

// Rasmlarni public/industries/ papkasiga aynan shu nomlar bilan joylashtiring:
// wholesale.jpg, manufacturing.jpg, logistics.jpg, realestate.jpg, retail.jpg, b2b.jpg
// (.jpg o'rniga .png yoki .webp ishlatmoqchi bo'lsangiz, shu yerdagi nomlarni ham o'zgartiring)
const industries = [
  { image: '/industries/wholesale.jpg', nameKey: 'ind1Name', descKey: 'ind1Desc' },
  { image: '/industries/manufacturing.jpeg', nameKey: 'ind2Name', descKey: 'ind2Desc' },
  { image: '/industries/logistics.png', nameKey: 'ind3Name', descKey: 'ind3Desc' },
  { image: '/industries/realestate.jpg', nameKey: 'ind4Name', descKey: 'ind4Desc' },
  { image: '/industries/retail.jpg', nameKey: 'ind5Name', descKey: 'ind5Desc' },
  { image: '/industries/b2b.jpg', nameKey: 'ind6Name', descKey: 'ind6Desc' }
]
// duplicated for a seamless infinite loop (track scrolls exactly -50%)
const loopedIndustries = [...industries, ...industries]

function bg(image) {
  return { backgroundImage: `url(${image})` }
}
</script>

<template>
  <section class="proof-strip">
    <div class="wrap">
      <div class="lbl" v-reveal>{{ tr.proofLbl }}</div>
    </div>
    <div class="industries-wrap" v-reveal>
      <div class="industries-track">
        <div
          v-for="(ind, i) in loopedIndustries"
          :key="i"
          class="industry-card"
          :style="bg(ind.image)"
        >
          <div class="industry-overlay">
            <h4>{{ tr[ind.nameKey] }}</h4>
            <p>{{ tr[ind.descKey] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
