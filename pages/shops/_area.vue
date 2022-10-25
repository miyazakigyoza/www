<template>
  <main class="pt-20 container mx-auto">

    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Shop List</p>
        <p class="font-serif text-xl">会員店舗一覧</p>
      </h1>
    </header>

    <div class="mt-8">
      <Areas :select="slug"></Areas>
    </div>

    <ul class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        v-for="shop in shops.items"
        :key="shop._id">
        <Card :shop="shop"></Card>
      </li>
    </ul>

    <section class="my-12">
      <img src="/img/gyozaday-monthly.png" alt="毎月3日は餃子の日" />
    </section>

</main>
</template>

<script>
export default {
  head() {
    return {
      title: this.area.name + 'エリア | 会員店舗一覧',
    }
  },
  data: () => ({
    shops: [],
    slug: null,
    area: null,
  }),
  async asyncData({$axios, $config, params}){
    const order = 'furigana'
    const slug = params.area

    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas', {
      params: {
        select: ['_id', 'slug', 'name'].join(','),
      }
    })
    const area = areas.items.find(item => item.slug === slug)
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        select: ['_id', 'name', 'area', 'address', 'profileImage'].join(','),
        order,
        area: area._id,
      }
    })
    return {
      shops,
      slug,
      area,
    }
  },
}
</script>
