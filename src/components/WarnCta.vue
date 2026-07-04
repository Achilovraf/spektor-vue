<script setup>
import { ref } from 'vue'
import { tr } from '../i18n.js'
import QualifyModal from './QualifyModal.vue'

defineProps({
  sectionId: { type: String, default: null }
})

const isOpen = ref(false)
function open() { isOpen.value = true }
function close() { isOpen.value = false }
</script>

<template>
  <section :id="sectionId">
    <div class="wrap">
      <div class="warn-cta glass" v-reveal>
        <h2>{{ tr.warnH2 }}</h2>
        <p class="warn-sub">{{ tr.warnP }}</p>
        <button type="button" class="warn-btn" @click="open">{{ tr.warnBtn }}</button>
      </div>
    </div>
  </section>

  <QualifyModal :open="isOpen" @close="close" />
</template>
