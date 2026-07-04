<script setup>
import { tr } from '../i18n.js'
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="logo" style="margin-bottom:14px;">SPEKTOR<span class="dot-accent">.</span></div>
          <p style="color:var(--text-lo); font-size:14px; max-width:260px;">{{ tr.footAbout }}</p>
        </div>
        <div>
          <h4>{{ tr.footServices }}</h4>
          <ul>
            <li><a href="#services">{{ tr.s1h }}</a></li>
            <li><a href="#services">{{ tr.s3h }}</a></li>
            <li><a href="#services">{{ tr.s5h }}</a></li>
            <li><a href="#services">{{ tr.s7h }}</a></li>
          </ul>
        </div>
        <div>
          <h4>{{ tr.footCompany }}</h4>
          <ul>
            <li><a href="#about">{{ tr.navAbout }}</a></li>
            <li><a href="#process">{{ tr.nav3 }}</a></li>
            <li><a href="#faq">{{ tr.nav6 }}</a></li>
          </ul>
        </div>
        <div>
          <h4>{{ tr.footContacts }}</h4>
          <ul>
            <li class="mono">+998 77 100-20-30</li>
            <li class="mono">+998 55 200-10-40</li>
            <li>hello@spektor.agency</li>
            <li>{{ tr.footAddr }}</li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>{{ tr.footCopy }}</span>
        <span>{{ tr.footPolicy }}</span>
      </div>
    </div>
  </footer>
</template>
