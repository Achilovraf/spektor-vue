<script setup>
import { reactive, ref, watch, onBeforeUnmount } from 'vue'
import { tr, currentLang } from '../i18n.js'

const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

const form = reactive({
  name: '',
  phone: '',
  bizType: '',
  budget: ''
})

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref(false)

function closeModal() {
  emit('close')
}

function onOverlayClick(e) {
  if (e.target === e.currentTarget) closeModal()
}

function onKeydown(e) {
  if (e.key === 'Escape' && props.open) closeModal()
}

watch(
  () => props.open,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  }
)

window.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

async function handleSubmit() {
  if (!form.name.trim() || !form.phone.trim()) return
  submitting.value = true
  submitError.value = false

  try {
    const res = await fetch('/.netlify/functions/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form })
    })
    if (!res.ok) throw new Error('request failed')
  } catch (err) {
    console.error('Ariza yuborishda xatolik:', err)
    submitError.value = true
  }

  submitting.value = false
  submitted.value = true
  setTimeout(() => {
    closeModal()
  }, 1600)
}
</script>

<template>
  <div class="modal-overlay" :class="{ open: open }" @click="onOverlayClick">
    <div class="modal-panel">
      <button type="button" class="modal-close" aria-label="Close" @click="closeModal">✕</button>
      <h3>{{ tr.modalH3 }}</h3>
      <ul class="pain-list">
        <li>{{ tr.pain1 }}</li>
        <li>{{ tr.pain2 }}</li>
        <li>{{ tr.pain3 }}</li>
        <li>{{ tr.pain4 }}</li>
      </ul>
      <p class="pain-note">{{ tr.painNote }}</p>

      <form class="qform" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" :placeholder="tr.qNamePh" required />
        <input v-model="form.phone" type="tel" placeholder="+998 91 234 45 67" required />
        <input v-model="form.bizType" type="text" :placeholder="tr.qBizTypePh" required />

        <div class="qgroup">
          <div class="qgroup-title">{{ tr.qBudget }}</div>
          <div class="qoptions">
            <label class="qopt">
              <input v-model="form.budget" type="radio" value="500$" name="budget" />
              <span>500$</span>
            </label>
            <label class="qopt">
              <input v-model="form.budget" type="radio" value="1000$" name="budget" />
              <span>1000$</span>
            </label>
            <label class="qopt">
              <input v-model="form.budget" type="radio" value="1500$" name="budget" />
              <span>1500$</span>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary qsubmit" :disabled="submitted || submitting">
          <template v-if="submitted">{{ submitError ? (currentLang === 'ru' ? 'Отправлено (проверьте связь) ✓' : 'Yuborildi (aloqani tekshiring) ✓') : (currentLang === 'ru' ? 'Заявка отправлена ✓' : 'Ariza yuborildi ✓') }}</template>
          <template v-else-if="submitting">{{ currentLang === 'ru' ? 'Отправка...' : 'Yuborilmoqda...' }}</template>
          <template v-else>{{ tr.qSubmit }}</template>
        </button>
        <a href="tel:+998918118181" class="call-link" v-html="tr.qCall"></a>
      </form>
    </div>
  </div>
</template>
