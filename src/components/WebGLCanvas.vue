<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
let renderer, scene, camera, anim
const canvas = ref(null)
onMounted(async () => {
  const THREE = await import('three')
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  const w = 640, h = 360
  renderer.setSize(w, h)
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, w/h, 0.1, 100)
  camera.position.z = 3
  const geo = new THREE.TorusKnotGeometry(1, 0.3, 128, 16)
  const mat = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geo, mat)
  scene.add(mesh)
  const loop = () => { mesh.rotation.x += 0.01; mesh.rotation.y += 0.01; renderer.render(scene, camera); anim = requestAnimationFrame(loop) }
  loop()
})
onBeforeUnmount(()=> cancelAnimationFrame(anim))
</script>
<template>
  <canvas ref="canvas" class="rounded-xl border w-full h-auto"></canvas>
</template>
