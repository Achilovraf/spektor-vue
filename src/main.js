import { createApp } from 'vue'
import App from './App.vue'
import { vReveal, vRevealGroup } from './directives/reveal.js'
import { vCountup } from './directives/countup.js'
import './style.css'

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('reveal-group', vRevealGroup)
app.directive('countup', vCountup)
app.mount('#app')
