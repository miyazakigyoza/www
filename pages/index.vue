<template>
  <main>

    <section class="relative h-screen w-screen flex justify-center items-center">
      <HomePanel :shop="randamShop()" class="absolute inset-0"></HomePanel>
      <p class="z-10 bg-amber-400/70 text-center text-3xl leading-relaxed p-8">
        太陽の恵みが<br />ぎゅっと詰まった<br />宮崎餃子
      </p>
    </section>

    <div class="mt-4 container mx-auto flex flex-col space-y-4">
      <section>
        <p class="bg-slate-300 p-4 text-left text-sm">
          お知らせ
        </p>
      </section>

      <section class="border border-solid">
        <p class="h-screen flex justify-center items-center">
          宮崎の餃子について
        </p>
      </section>

      <section class="flex flex-col justify-center items-center space-y-4 min-h-screen">
        <p>
          <img src="/img/logo-1200s.jpg" alt="" class="w-1/2 mx-auto" />
        </p>
        <h1 class="text-xl">
          店舗一覧
        </h1>
        <Areas :select="'all'"></Areas>
      </section>

      <section class="flex flex-col justify-center items-center">
        <p class="">
          <img src="/img/gyozaday-monthly.png" alt="毎月3日は餃子の日" />
        </p>
      </section>

      <section class="border border-solid flex flex-col justify-center items-center">
        <p class="h-screen flex justify-center items-center">
          協賛バナー
        </p>
      </section>

      <section class="border border-solid flex flex-col justify-center items-center">
        <p class="h-screen flex justify-center items-center">
          お問い合わせ先
        </p>
      </section>

      <section class="border border-solid flex flex-col justify-center items-center">
        <p class="h-screen flex justify-center items-center">
          サイトマップ
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    areas: [],
    shops: [],
    shop: null,
  }),
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    let shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        depth: 2,
        select: ['_id', 'name', 'profileImage'].join(','),
        'profileImage[exists]': true,
      }
    })
    const n = shops.items.length
    const r = Math.floor(Math.random() * n)
    const shop = n > 0 ? shops.items[r] : null

    return {
      areas,
      shops,
      shop,
    }
  },
  methods: {
    randamShop() {
      const n = this.shops.items.length
      if (n === 0) {
        return null
      }
      const r = Math.floor(Math.random() * n)
      return this.shops.items[r]
    },
  },
}
</script>

<style scoped lang="postcss">
.button {
  @apply border border-solid inline-block;
  @apply text-center;
}
</style>