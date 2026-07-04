import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// v-reveal: fade + slide a single element up into view on scroll.
export const vReveal = {
  mounted(el) {
    if (prefersReduced()) return
    gsap.set(el, { opacity: 0, y: 40 })
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    })
  }
}

// v-reveal-group: fade + slide the direct children of a grid/list up into
// view with a stagger, e.g. service cards or pricing plans.
export const vRevealGroup = {
  mounted(el) {
    if (prefersReduced()) return
    const children = Array.from(el.children)
    if (!children.length) return
    gsap.set(children, { opacity: 0, y: 40 })
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    })
  }
}
