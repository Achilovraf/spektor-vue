<script setup>
import { ref } from 'vue'
import { currentLang, setLang, tr } from '../i18n.js'
import { useTheme } from '../composables/useTheme.js'

const { toggleTheme } = useTheme()
const mobileOpen = ref(false)

const navLinks = [
  { href: '#about', key: 'navAbout' },
  { href: '#services', key: 'nav1' },
  { href: '#process', key: 'nav3' },
  { href: '#faq', key: 'nav6' }
]

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header>
    <div class="navbar">
      <div class="wrap nav">
        <div class="logo">SPEKTOR<span class="dot-accent">.</span></div>
        <nav class="nav-links">
          <a v-for="link in navLinks" :key="link.key" :href="link.href">{{ tr[link.key] }}</a>
        </nav>
        <div class="nav-cta">
          <button type="button" class="theme-toggle" aria-label="Тема" @click="toggleTheme">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
            </svg>
          </button>
          <div class="lang-toggle">
            <button :class="{ active: currentLang === 'ru' }" @click="setLang('ru')">RU</button>
            <button :class="{ active: currentLang === 'uz' }" @click="setLang('uz')">UZ</button>
          </div>
          <a href="#audit" class="btn btn-primary">{{ tr.navCta }}</a>
          <button class="burger" aria-label="Меню" @click="mobileOpen = !mobileOpen">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="wrap mobile-menu" :class="{ open: mobileOpen }">
        <a v-for="link in navLinks" :key="link.key" :href="link.href" @click="closeMobile">{{ tr[link.key] }}</a>
        <a href="#audit" @click="closeMobile">{{ tr.navCta }}</a>
      </div>
    </div>
  </header>
</template>
