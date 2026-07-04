import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// v-countup="180": counts up from 0 to the bound value once the element
// scrolls into view.
export const vCountup = {
  mounted(el, binding) {
    const target = Number(binding.value) || 0
    if (prefersReduced()) {
      el.textContent = target
      return
    }
    el.textContent = '0'
    const counter = { value: 0 }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: 'power1.out',
          snap: { value: 1 },
          onUpdate: () => {
            el.textContent = Math.floor(counter.value)
          }
        })
      }
    })
  }
}
