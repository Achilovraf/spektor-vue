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
  insta: '',
  tools: [],
  budget: '',
  sales: '',
  salesCount: '',
  service: [],
  role: ''
})

const submitted = ref(false)

const toolOptions = ['Facebook Ads', 'Google Ads', 'SMM', 'Banner reklama']
const serviceOptions = ['SMM', 'Target reklamasi', 'Kompleks marketing', 'Avtomatizatsiya', 'Branding', 'IT xizmatlar']
const serviceLabelKeys = ['qSv1', 'qSv2', 'qSv3', 'qSv4', 'qSv5', 'qSv6']
const toolLabelKeys = ['qTool1', 'qTool2', 'qTool3', 'qTool4']

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

function handleSubmit() {
  if (!form.name.trim() || !form.phone.trim()) return
  submitted.value = true
  setTimeout(() => {
    closeModal()
  }, 1400)
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
        <input v-model="form.insta" type="text" :placeholder="tr.qInstaPh" />

        <div class="qgroup">
          <div class="qgroup-title">{{ tr.qTools }}</div>
          <div class="qoptions">
            <label v-for="(opt, i) in toolOptions" :key="opt" class="qopt">
              <input v-model="form.tools" type="checkbox" :value="opt" />
              <span>{{ tr[toolLabelKeys[i]] }}</span>
            </label>
          </div>
        </div>

        <div class="qgroup">
          <div class="qgroup-title">{{ tr.qBudget }}</div>
          <div class="qoptions">
            <label class="qopt">
              <input v-model="form.budget" type="radio" value="Ha" name="budget" />
              <span>{{ tr.yesLabel }}</span>
            </label>
            <label class="qopt">
              <input v-model="form.budget" type="radio" value="Yo'q" name="budget" />
              <span>{{ tr.noLabel }}</span>
            </label>
          </div>
        </div>

        <div class="qgroup">
          <div class="qgroup-title">{{ tr.qSales }}</div>
          <div class="qoptions">
            <label class="qopt">
              <input v-model="form.sales" type="radio" value="Mavjud emas" name="sales" />
              <span>{{ tr.qSalesNo }}</span>
            </label>
            <label class="qopt has-input">
              <input v-model="form.sales" type="radio" value="Mavjud" name="sales" />
              <span>{{ tr.qSalesYes }}</span>
              <input v-model="form.salesCount" type="text" class="mini-input" placeholder="son" />
            </label>
          </div>
        </div>

        <div class="qgroup">
          <div class="qgroup-title">{{ tr.qService }}</div>
          <div class="qoptions">
            <label v-for="(opt, i) in serviceOptions" :key="opt" class="qopt">
              <input v-model="form.service" type="checkbox" :value="opt" />
              <span>{{ tr[serviceLabelKeys[i]] }}</span>
            </label>
          </div>
        </div>

        <div class="qgroup">
          <div class="qgroup-title">{{ tr.qRole }}</div>
          <div class="qoptions">
            <label class="qopt">
              <input v-model="form.role" type="radio" value="Asoschi" name="role" />
              <span>{{ tr.qRole1 }}</span>
            </label>
            <label class="qopt">
              <input v-model="form.role" type="radio" value="Boshqaruvchi" name="role" />
              <span>{{ tr.qRole2 }}</span>
            </label>
            <label class="qopt">
              <input v-model="form.role" type="radio" value="Marketolog" name="role" />
              <span>{{ tr.qRole3 }}</span>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary qsubmit" :disabled="submitted">
          {{ submitted ? (currentLang === 'ru' ? 'Заявка отправлена ✓' : 'Ariza yuborildi ✓') : tr.qSubmit }}
        </button>
        <a href="tel:+998918118181" class="call-link" v-html="tr.qCall"></a>
      </form>
    </div>
  </div>
</template>
