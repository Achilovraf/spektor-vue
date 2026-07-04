import * as THREE from 'three'

// Initializes the rotating wireframe orb inside the given canvas element.
// Returns a cleanup function that disposes the renderer and listeners.
export function initOrb(canvas) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const wrap = canvas.parentElement
  if (!wrap || prefersReduced) return () => {}

  let w = wrap.clientWidth
  let h = wrap.clientHeight
  if (w === 0 || h === 0) return () => {}

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
  camera.position.set(0, 0, 7)

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const group = new THREE.Group()
  scene.add(group)

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.7, 1),
    new THREE.MeshBasicMaterial({ color: 0xff6b1a, wireframe: true, transparent: true, opacity: 0.55 })
  )
  group.add(core)

  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 2),
    new THREE.MeshBasicMaterial({ color: 0xff8c3d, wireframe: true, transparent: true, opacity: 0.35 })
  )
  group.add(inner)

  const outer = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.25, 0),
    new THREE.MeshBasicMaterial({ color: 0x4a5eff, wireframe: true, transparent: true, opacity: 0.12 })
  )
  group.add(outer)

  let mouseX = 0
  let mouseY = 0
  function onMouseMove(e) {
    mouseX = e.clientX / window.innerWidth - 0.5
    mouseY = e.clientY / window.innerHeight - 0.5
  }
  window.addEventListener('mousemove', onMouseMove)

  function resize() {
    w = wrap.clientWidth
    h = wrap.clientHeight
    if (w === 0 || h === 0) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', resize)

  let rafId
  function animate() {
    rafId = requestAnimationFrame(animate)
    core.rotation.y += 0.0016
    core.rotation.x += 0.0007
    inner.rotation.y -= 0.0022
    inner.rotation.x += 0.0011
    outer.rotation.y += 0.0009
    group.rotation.y += (mouseX * 0.4 - group.rotation.y) * 0.03
    group.rotation.x += (mouseY * 0.25 - group.rotation.x) * 0.03
    renderer.render(scene, camera)
  }
  animate()

  return function cleanup() {
    cancelAnimationFrame(rafId)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', resize)
    core.geometry.dispose()
    core.material.dispose()
    inner.geometry.dispose()
    inner.material.dispose()
    outer.geometry.dispose()
    outer.material.dispose()
    renderer.dispose()
  }
}
