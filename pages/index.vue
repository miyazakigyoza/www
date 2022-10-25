<template>
  <main class="pt-12">

    <section class="relative h-screen w-screen">
      <transition name="fade">
        <div class="inset-0 relative w-screen h-screen overflow-hidden" v-show="n===null">
          <img
            src="~/assets/img/logo-h.svg"
            alt="宮崎餃子"
            class="w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </transition>
      <transition-group name="fade" tag="ul">
        <li
          v-for="(shop,i) in shops.items"
          :key="shop._id"
          class="block absolute w-screen inset-0 overflow-hidden"
          v-show="i===n">
          <img :src="shop.profileImage.src + '?w=1536&ar=16:9&fit=crop'" alt="" class="object-cover h-full w-full" />
          <p class="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 bg-white text-black p-4">
            {{ shop.name }}
          </p>
          <NuxtLink :to="`/shops/detail/${shop._id}/`" class="absolute inset-0">
            </NuxtLink>
        </li>
      </transition-group>
      <transition name="fade">
        <div class="absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-9/12 sm:w-auto" v-show="n!==null">
          <h1 class="p-8 bg-amber-400/70 border-2 border-solid border-amber-400 text-center text-xl sm:text-3xl leading-relaxed font-serif">
            太陽の恵みが<br />ぎゅっと詰まった<br />宮崎ぎょうざ
          </h1>
        </div>
      </transition>
    </section>

    <div class="mt-4 container mx-auto flex flex-col space-y-24">
      <section class="mt-8 w-full sm:w-9/12 mx-auto">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">News</p>
          <p class="font-serif text-xl">お知らせ</p>
        </h1>

        <div class="mt-8 h-24 border border-solid border-amber-400 rounded-xl overflow-y-scroll snap-y snap-mandatory" ref="news">
          <article
            v-for="note in note.contents"
            :key="note.id"
            class="snap-center relative h-24 p-4 flex flex-col justify-between">
              <p class="whitespace-nowrap text-xs">{{ note.publish_at }}</p>
              <p class="whitespace-nowrap truncate text-orange-600">{{ note.name }}</p>
              <p class="text-right text-xs">{{ note.user.name }}</p>
            <a
              :href="`https://note.com/${note.user.urlname}/n/${note.key}?magazine_key=${noteMagazineId}`"
              target="_blank"
              class="block absolute inset-0"></a>
          </article>
        </div>

        <div class="mt-4 text-center">
          <NuxtLink
            to="/news/"
            target="_blank"
            class="button bg-orange-500 text-white py-2 px-8">
            <font-awesome-icon icon="fa-solid fa-bullhorn" />
            お知らせ一覧
          </NuxtLink>
        </div>
      </section>

      <section class="">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">About</p>
          <p class="font-serif text-xl">宮崎県ひなた餃子連合会について</p>
        </h1>

        <div class="mt-8 text-center">
          <p>
          宮崎餃子の特色
          </p>
          <p>
            宮崎県ひなた餃子連合会 概要
          </p>
        </div>
        <div class="mt-4 text-center">
          <NuxtLink
            to="/about/"
            class="button bg-orange-500 text-white py-2 px-8">
            <font-awesome-icon icon="fa-solid fa-circle-info" />
            宮崎県ひなた餃子連合会について
          </NuxtLink>
        </div>

      </section>

      <section class="flex flex-col justify-center items-center space-y-4">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">Search</p>
          <p class="font-serif text-xl">
            <font-awesome-icon icon="fa-map-marker-alt" />
            店舗を検索する</p>
        </h1>
        <Areas :select="'all'"></Areas>
      </section>

      <section class="flex flex-col justify-center items-center">
        <p class="">
          <img src="/img/gyozaday-monthly.png" alt="毎月3日は餃子の日" />
        </p>
      </section>

      <section class="flex flex-col justify-center items-center">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">Contact</p>
          <p class="font-serif text-xl">宮崎餃子についてのお問い合わせ</p>
        </h1>
        <div class="mt-4 text-center">
          <NuxtLink
            to="/contact/"
            class="button bg-orange-500 text-white py-2 px-8">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            お問い合わせフォーム
          </NuxtLink>
        </div>
      </section>

    </div>
  </main>
</template>

<script>

export default {
  head() {
    return {
      title: '宮崎県ひなた餃子連合会',
      titleTemplate: '',
    }
  },
  data: () => ({
    areas: {},
    shops: {},
    note: [],
    n: null,
    newsIndex: 0,
    noteMagazineId: null,
  }),
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        select: ['_id', 'name', 'profileImage'].join(','),
        'feature': true,
      }
    })

    $axios.setToken(false)
    const note = await $axios.$get($config.NOTE_API, {params:{page:1}})
    const noteMagazineId = $config.NOTE_MAGAZINE_ID

    return {
      areas,
      shops,
      note: note.data.section,
      noteMagazineId,
    }
  },
  methods: {
    newsScroll() {
      if (this.newsIndex < this.$refs.news.children.length-1) {
        this.newsIndex++
      } else {
        this.newsIndex = 0
      }
      const top = this.newsIndex * 96
      this.$refs.news.scroll({top, behavior: 'smooth'})
    },
    timer() {
      setTimeout(()=>{
        this.n = Math.floor(Math.random() * this.shops.items.length)
        /*
        if (this.n < this.shops.items.length-1) {
          this.n++
        } else {
          this.n = 0
        }
        */
        if (this.$refs.news) {
          this.newsScroll()
        }
        this.timer()
      }, 5000)
    },
    shuffle(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
  mounted() {
    this.timer()
  },
}
</script>

<style scoped lang="postcss">
.button {
  @apply border border-solid border-amber-400 inline-block;
  @apply text-center;
}
.fade-enter-active,.fade-leave-active{ 
  transition: opacity 1500ms ease-in;
  @apply transition ease-out duration-[4000ms];
}

.fade-enter, .fade-leave-to {
  @apply opacity-0;
}
</style>