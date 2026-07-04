import { ref, watchEffect } from 'vue'

const theme = ref('dark')

function readSaved() {
  try {
    return localStorage.getItem('spektor-theme')
  } catch (e) {
    return null
  }
}

function persist(value) {
  try {
    localStorage.setItem('spektor-theme', value)
  } catch (e) {
    /* ignore (e.g. private mode) */
  }
}

export function useTheme() {
  const saved = readSaved()
  theme.value = saved === 'light' ? 'light' : 'dark'

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    persist(theme.value)
  }

  return { theme, toggleTheme }
}
