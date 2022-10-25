<template>
  <main class="pt-20 container mx-auto">

    <Areas :select="'all'"></Areas>

    <ul class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        v-for="shop in shops.items"
        :key="shop._id">
        <Card :shop="shop"></Card>
      </li>
    </ul>

    <section class="h-screen flex flex-col justify-center items-center">
      <p class="">
        <img src="/img/gyozaday-monthly.png" alt="毎月3日は餃子の日" />
      </p>
    </section>

</main>
</template>

<script>
export default {
  head() {
    return {
      title: '会員店舗一覧',
    }
  },
  data: () => ({
    shops: [],
  }),
  async asyncData({$axios, $config}){
    const order = 'furigana'
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        select: ['_id', 'name', 'area', 'address', 'profileImage'].join(','),
        order
      }
    })
    return {
      shops,
    }
  },
}
</script>
