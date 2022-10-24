<template>
  <div>
    <p class="text-center">{{ title }}</p>
    <div class="relative flex justify-between items-center gap-2">
      <p class="w-9 h-9 bg-amber-400 p-2 rounded-full text-center text-sm">{{ min }}</p>
      <div class="relative flex-1 w-full flex justify-between items-center">
        <div class="z-0 absolute left-1/2 h-9 w-px bg-gray-400 -translate-x-1/2"></div>
        <div class="z-0 absolute top-1/2 left-1/2 h-px w-full bg-gray-400 -translate-y-1/2 -translate-x-1/2"></div>
        <span v-for="o in 7" :key="o" class="z-10 dot" :class="{pin:o===n}"></span>
      </div>
      <p class="w-9 h-9 bg-amber-400 p-2 rounded-full text-center text-sm">{{ max }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['n', 'min', 'max', 'title'],
}
</script>

<style scoped lang="postcss">
.dot {
  @apply bg-gray-200 w-4 h-4 rounded-full;
}
.dot.pin {
  @apply bg-amber-400 w-4 h-4;
  @apply scale-150;
}
</style>