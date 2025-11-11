<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = [
  { label: 'Home ',      to: '/' },
  { label: 'Portfolio ', to: '/portfolio' },
  { label: 'Blog ',      to: '/blog/' },
  { label: 'About',     to: '/about' },
]

const i = ref(0)
const key = e => {
  if (['ArrowRight','ArrowDown'].includes(e.key)) i.value = (i.value+1)%items.length
  if (['ArrowLeft','ArrowUp'].includes(e.key))   i.value = (i.value-1+items.length)%items.length
  if (e.key === 'Enter') location.href = items[i.value].to
}
onMounted(()=> addEventListener('keydown', key))
onBeforeUnmount(()=> removeEventListener('keydown', key))
</script>

<template>
  <nav class="flex gap-3 flex-wrap">
    <a v-for="(it,idx) in items" :key="it.to" :href="it.to"
       class="px-4 py-2 rounded-2xl border transition"
       :class="idx===i ? 'bg-indigo-600 text-white shadow'
                       : 'bg-white/5 text-gray-800 border-gray-300'">
      {{ it.label }}
    </a>
  </nav>
</template>
