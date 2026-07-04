<script setup>
import AppHeader from './components/AppHeader.vue'
import Hero from './components/Hero.vue'
import AboutUs from './components/AboutUs.vue'
import IndustriesCarousel from './components/IndustriesCarousel.vue'
import Services from './components/Services.vue'
import ClientsGrid from './components/ClientsGrid.vue'
import WarnCta from './components/WarnCta.vue'
import ProcessSteps from './components/ProcessSteps.vue'
import Faq from './components/Faq.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <Hero />
  <AboutUs />
  <IndustriesCarousel />
  <Services />
  <ClientsGrid />
  <WarnCta section-id="audit" />
  <ProcessSteps />
  <Faq />
  <WarnCta />
  <AppFooter />
</template>
