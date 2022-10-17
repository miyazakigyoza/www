<template>
  <main class="pt-20 container mx-auto">

    <Areas></Areas>

    <ul class="mt-8 grid sm:grid-cols-4 gap-4">
      <li
        v-for="shop in shops.items"
        :key="shop._id">
        <Card :shop="shop"></Card>
      </li>
    </ul>

</main>
</template>

<script>
export default {
  data: () => ({
    shops: [],
  }),
  async asyncData({$axios, $config}){
    const order = 'furigana'
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        select: ['_id', 'name', 'area', 'profileImage'].join(','),
        order
      }
    })
    return {
      shops,
    }
  },
}
</script>
