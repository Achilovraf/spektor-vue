<script setup>
import { tr } from '../i18n.js'
</script>

<template>
  <section id="about">
    <div class="wrap">
      <div class="about-grid">
        <div v-reveal>
          <div class="eyebrow"><span class="dot"></span><span>{{ tr.aboutEyebrow }}</span></div>
          <h2>{{ tr.aboutH2 }}</h2>
          <p>{{ tr.aboutP1 }}</p>
          <p>{{ tr.aboutP2 }}</p>

          <div class="about-team-title">{{ tr.aboutTeamTitle }}</div>
          <ul class="about-team-list">
            <li>3 специалиста по Facebook Ads — настройка и оптимизация таргетированной рекламы</li>
            <li>2 видеографа — создание качественного и живого видеоконтента</li>
            <li>2 контент-менеджера — креативная и эффективная контент-стратегия</li>
            <li>1 РОП — контроль процессов и повышение эффективности отдела продаж</li>
            <li>2 IT-специалиста — технические решения и цифровая инфраструктура</li>
          </ul>

          <p class="about-tagline">{{ tr.aboutTagline }}</p>
        </div>

        <div class="about-stats" v-reveal>
          <div class="about-stat glass">
            <div class="num">{{ tr.aboutStat1Num }}</div>
            <div class="lbl">{{ tr.aboutStat1Lbl }}</div>
          </div>
          <div class="about-stat glass">
            <div class="num">{{ tr.aboutStat2Num }}</div>
            <div class="lbl">{{ tr.aboutStat2Lbl }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
