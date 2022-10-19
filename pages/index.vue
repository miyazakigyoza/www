<template>
  <main class="pt-20">

    <section class="relative h-screen w-screen">
      <transition-group name="fade" tag="ul">
        <li
          v-for="(shop,i) in shops.items"
          :key="shop._id"
          class="block absolute w-screen inset-0"
          v-show="i===n">
          <img :src="shop.profileImage.src + '?w=1536&ar=16:9&fit=crop'" alt="" class="object-cover h-full w-full" />
          <p class="absolute right-1 bottom-1 bg-white text-black p-4">
            {{ shop.name }}
          </p>
          <NuxtLink :to="`/shops/detail/${shop._id}/`" class="absolute inset-0">
            </NuxtLink>
        </li>
      </transition-group>
      <div class="absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-9/12 sm:w-auto">
        <p class="p-8 bg-amber-400/70 text-center text-xl sm:text-3xl leading-relaxed font-serif">
          太陽の恵みが<br />ぎゅっと詰まった<br />宮崎餃子
        </p>
      </div>
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
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">Search</p>
          <p class="font-serif text-xl">店舗を検索する</p>
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
    n: 0,
  }),
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        depth: 2,
        select: ['_id', 'name', 'profileImage'].join(','),
        'profileImage[exists]': true,
      }
    })
    return {
      areas,
      shops,
    }
  },
  methods: {
    timer() {
      setTimeout(()=>{
        if (this.n < this.shops.items.length-1) {
          this.n++
        } else {
          this.n = 0
        }
        this.timer()
      }, 5000)
    }
  },
  mounted() {
    this.timer()
  }
}
</script>

<style scoped lang="postcss">
.button {
  @apply border border-solid inline-block;
  @apply text-center;
}
.fade-enter-active,.fade-leave-active{ 
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>