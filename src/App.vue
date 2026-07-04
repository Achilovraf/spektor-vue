<script setup>
import CursorGlow from './components/CursorGlow.vue'
import AppHeader from './components/AppHeader.vue'
import Hero from './components/Hero.vue'
import AboutUs from './components/AboutUs.vue'
import IndustriesCarousel from './components/IndustriesCarousel.vue'
import Services from './components/Services.vue'
import ClientsGrid from './components/ClientsGrid.vue'
import Projects from './components/Projects.vue'
import WarnCta from './components/WarnCta.vue'
import ProcessSteps from './components/ProcessSteps.vue'
import Faq from './components/Faq.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <CursorGlow />
  <AppHeader />
  <Hero />
  <AboutUs />
  <IndustriesCarousel />
  <Services />
  <ClientsGrid />
  <Projects />
  <WarnCta section-id="audit" />
  <ProcessSteps />
  <Faq />
  <WarnCta />
  <AppFooter />
</template>
