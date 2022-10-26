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
      title: (this.area ? this.area.name + 'エリア | ' : '') + '会員店舗一覧',
      meta: [
        { hid: 'og:title', property: 'og:title', content: (this.area ? this.area.name + 'エリア | ' : '') + '会員店舗一覧 | 宮崎県ひなた餃子連合会' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/shop/area/' + (this.slug ? this.slug + '/' : '') },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  data: () => ({
    shops: [],
    slug: null,
    area: null,
  }),
  async asyncData({$axios, $config, params}){
    const order = 'furigana'
    const slug = params.area || null

    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas', {
      params: {
        select: ['_id', 'slug', 'name'].join(','),
      }
    })
    const area = slug ? areas.items.find(item => item.slug === slug) : null

    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        select: ['_id','slug', 'name', 'area', 'address', 'profileImage'].join(','),
        order,
        area: area ? area._id : null,
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
