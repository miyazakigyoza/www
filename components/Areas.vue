<template>
  <ul class="grid grid-cols-3 sm:grid-cols-5 gap-4 text-xs">
    <li class="border border-solid row-span-2 sm:row-span-1 flex justify-center items-center" :class="{select:select===null}">
      <NuxtLink to="/shop/area/" class="block p-4 w-full inset-0">All</NuxtLink>
    </li>
    <li
      v-for="area in areas.items"
      :key="area._id"
      class="text-center border border-solid flex justify-center items-center"
      :class="{select:area.slug===select}">
      <NuxtLink :to="{path: `/shop/area/${area.slug}/`}" class="block p-4 w-full inset-0">{{ area ? area.name : 'All' }}</NuxtLink>
    </li>
  </ul>
  </template>

<script>
  export default {
    props: ['select'],
    data: () =>({
      areas: [],
    }),
    async fetch(){
      this.$axios.setToken(this.$config.TOKEN, 'Bearer')
      const areas = await this.$axios.$get(this.$config.API + '/members/areas', {
        params: {
          select: '_id,slug,name',
          order: 'order'
        }
      })
      this.areas = areas
    },
  }
</script>
  
<style scoped lang="postcss">
.select {
  @apply bg-orange-500 text-white;
}
</style>