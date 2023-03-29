<template>
  <main>

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
          <NuxtLink :to="`/shop/${shop.slug}/`" class="absolute inset-0">
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

        <div v-if="note.length" class="mt-8 h-72 border border-solid border-amber-400 rounded-xl overflow-y-scroll snap-y snap-mandatory" ref="news">
          <article
            v-for="entry in note"
            :key="entry.id"
            class="snap-center relative h-24 p-4 flex flex-col justify-between">
              <p class="whitespace-nowrap text-xs">{{ entry.publish_at }}</p>
              <p class="whitespace-nowrap truncate text-orange-600">{{ entry.name }}</p>
              <p class="text-right text-xs">{{ entry.user.name }}</p>
            <a
              :href="`https://note.com/${entry.user.urlname}/n/${entry.key}?magazine_key=${$config.NOTE_MAGAZINE_ID}`"
              target="_blank"
              class="block absolute inset-0"></a>
          </article>
        </div>

        <div class="mt-4 text-center">
          <NuxtLink
            to="/news/"
            target="_blank"
            class="button">
            <font-awesome-icon icon="fa-solid fa-bullhorn" />
            お知らせ一覧
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
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
            class="button">
            <font-awesome-icon icon="fa-solid fa-circle-info" />
            宮崎県ひなた餃子連合会について
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
        </div>

      </section>

      <section class="">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">Gyoza Tour</p>
          <p class="font-serif text-xl">宮崎餃子を巡る</p>
        </h1>

        <div class="mt-8 text-center">
          <p>
            地図で宮崎餃子と観光地を調べる
          </p>
        </div>
        <div class="mt-4 text-center">
          <NuxtLink
            to="/map/"
            class="button">
            <font-awesome-icon icon="fa-solid fa-map" />
            宮崎餃子マップ
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
        </div>

        <div class="mt-8 text-center">
          <p>
            宮崎県内ぐるっと餃子 食べつくしマップ
          </p>
        </div>
        <div class="mt-4 text-center flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/tour/miyazaki/"
            class="button">
            宮崎市食べ歩きマップ
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
          <NuxtLink
            to="/tour/takanabe/"
            class="button">
            餃子のまち高鍋コース
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
          <NuxtLink
            to="/tour/west/"
            class="button">
            県西ドライブコース
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
          <NuxtLink
            to="/tour/north/"
            class="button">
            県北ドライブコース
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
        </div>

      </section>

      <section class="flex flex-col justify-center items-center space-y-4">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">Shop List</p>
          <p class="font-serif text-xl">
            <font-awesome-icon icon="fa-map-marker-alt" />
            会員店舗一覧</p>
        </h1>
        <Areas :select="null"></Areas>
      </section>

      <section class="my-12">
        <img src="/img/gyozaday-monthly.png" alt="毎月3日は餃子の日" class="mx-auto w-full sm:w-1/2" />
      </section>

      <section class="">
        <h1 class="text-center">
          <p class="font-enTitle text-6xl">Contact</p>
          <p class="font-serif text-xl">宮崎餃子についてのお問い合わせ</p>
        </h1>
        <div class="mt-4 text-center">
          <NuxtLink to="/contact/" class="button">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            お問い合わせフォーム
            <font-awesome-icon icon="fa-solid fa-angle-right" class="absolute right-4 top-1/2 -translate-y-1/2" />
          </NuxtLink>
        </div>
      </section>

    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

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
    n: null,
    newsIndex: 0,
  }),
  computed: {
    ...mapGetters({
      note: 'note/contents',
    })
  },
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        select: ['_id', 'slug', 'name', 'profileImage', 'slug'].join(','),
        'feature': true,
      }
    })

    return {
      areas,
      shops,
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
    this.$store.dispatch('note/fetchContents')
    this.timer()
  },
}
</script>

<style scoped lang="postcss">
.button {
  @apply relative inline-block w-full max-w-xs py-2 bg-orange-500 text-white text-center no-underline;
}
.fade-enter-active,.fade-leave-active{ 
  transition: opacity 1500ms ease-in;
  @apply transition ease-out duration-[4000ms];
}

.fade-enter, .fade-leave-to {
  @apply opacity-0;
}
</style>