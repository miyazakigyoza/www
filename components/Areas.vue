<template>
  <ul class="flex flex-col sm:flex-row gap-4">
    <li class="w-32 text-center border border-solid">
      <NuxtLink to="/shops/" class="block p-4">All</NuxtLink>
    </li>
    <li
      v-for="area in areas.items"
      :key="area._id"
      class="w-32 text-center border border-solid">
      <NuxtLink :to="{path: `/shops/${area.slug}/`}" class="block p-4">{{ area.name }}</NuxtLink>
    </li>
  </ul>
  </template>

  <<script>
  export default {
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
  