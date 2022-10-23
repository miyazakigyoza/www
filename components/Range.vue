<template>
  <div class="relative flex justify-between items-center">
    <p class="w-6 text-center">薄</p>
    <p class="w-full h-2 relative bg-gray-400 flex items-center">
      <span class="absolute text-xl text-amber-400" :style="{left: left}">●</span>
    </p>
    <p class="w-6 text-center">厚</p>
  </div>
</template>

<script>
export default {
  props: ['n'],
  computed: {
    left() {
      return (this.n-1) / 7 * 100 + '%'
    }
  }
}
</script>
