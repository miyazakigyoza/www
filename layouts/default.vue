<template>
  <div>

    <Nuxt></Nuxt>

    <footer class="mt-20 border-t border-solid">
      <p class="container mx-auto p-4 flex justify-center">
        <img src="~/assets/img/logo-h.svg" alt="宮崎餃子" class="h-20" />
      </p>
      <div class="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
        <section v-for="area in areas.items" :key="area._id" class="m-2 p-4 pt-2 border border-solid border-amber-500 rounded-xl">
          <h1 class="text-lg py-2">
            <NuxtLink :to="`/shops/${area.slug}`">
              <font-awesome-icon icon="fa-map-marker-alt" />
              {{ area.name }} エリア
            </NuxtLink>
          </h1>
          <ul class="text-sm flex flex-col gap-y-1">
            <li v-for="shop in shops.items.filter(s=>s.area._id===area._id)" :key="shop._id">
              <NuxtLink :to="`/shops/detail/${shop._id}`" class="flex items-center gap-x-2">
                <font-awesome-icon icon="fa-caret-right" />
                {{ shop.name }}
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>

      <div class="mt-8 bg-amber-400">
        <ul class="pt-8 flex flex-row justify-center gap-4 text-sm">
          <li>
            <NuxtLink to="/contact/">お問い合わせ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="">プライバシーポリシー</NuxtLink>
          </li>
        </ul>
        <p class="container mx-auto py-4 text-center text-sm">
          &copy; <NuxtLink to="/">宮崎県ひなた餃子連合会</NuxtLink> All Rights Reserved.
        </p>
      </div>
    </footer>

    <header
      class="z-50 fixed top-0 w-full flex flex-row backdrop-blur-sm bg-white/95 text-black"
    >
      <div
        class="
          container
          mx-auto
          h-12
          flex flex-row
          justify-between
          items-center
          sm:space-x-4
        "
        :class="{open}"
      >
        <NuxtLink to="/" class="h-8 z-10">
          <img src="~/assets/img/logo-h.svg" alt="宮崎餃子" class="h-full" />
        </NuxtLink>

        <nav class="nav">
          <ul
            class="
              p-4
              pt-20 sm:pt-4
              w-full
              grid grid-cols-1 sm:grid-cols-4
              gap-y-4
              sm:divide-x sm:divide-solid sm:divide-amber-400
              text-xl sm:text-sm
            "
          >
            <li class="w-full sm:text-center">
              <NuxtLink to="/shops/" @click.native="close" class="flex items-center sm:justify-center gap-2">
                <span class="w-6 text-center">
                  <font-awesome-icon icon="fa-map-marker-alt" />
                </span>
                <span>会員店舗一覧</span>
              </NuxtLink>
            </li>
            <li class="w-full sm:text-center">
              <NuxtLink to="/news/" @click.native="close" class="flex items-center sm:justify-center gap-2">
                <span class="w-6 text-center">
                  <font-awesome-icon icon="fa-solid fa-bullhorn" />
                </span>
                <span>お知らせ</span>
              </NuxtLink>
            </li>
            <li class="w-full sm:text-center">
              <NuxtLink to="/about/" @click.native="close" class="flex items-center sm:justify-center gap-2">
                <span class="w-6 text-center">
                  <font-awesome-icon icon="fa-info-circle" />
                </span>
                <span>宮崎餃子とは</span>
              </NuxtLink>
            </li>
            <li class="w-full sm:text-center">
              <NuxtLink to="/contact/" @click.native="close" class="flex items-center sm:justify-center gap-2">
                <span class="w-6 text-center">
                  <font-awesome-icon icon="fa-regular fa-paper-plane" />
                </span>
                <span>お問い合わせ</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <button class="block sm:hidden z-10" @click="toggle">
          <svg viewBox="0 0 100 100" class="h-8 w-8" id="hamburger">
            <rect class="w-full h-4" rx="10" y="0"></rect>
            <rect class="w-full h-4" rx="10" y="30"></rect>
            <rect class="w-full h-4" rx="10" y="60"></rect>
          </svg>
        </button>
      </div>
    </header>

</div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          id: 'hs-script-loader',
          src: `//js-na1.hs-scripts.com/${this.$config.HUBSPOT_PORTALID}.js`,
          defer: true,
          async: true,
        }
      ],
    }
  },
  data: () => ({
    open: false,
    areas: [],
    shops: [],
  }),
  methods: {
    toggle() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
  },
  async fetch() {
    this.$axios.setToken(this.$config.TOKEN, 'Bearer')
    this.areas = await this.$axios.$get(this.$config.API + '/members/areas', {
      params: {
          select: '_id,slug,name',
          order: 'order'
        }
    })
    this.shops = await this.$axios.$get(this.$config.API + '/members/shops', {
      params: {
          select: '_id,name,area',
          order: 'furigana'
        }
    })
  }
}
</script>


<style scoped lang="postcss">
#hamburger > rect {
  @apply transition duration-300;
}
.open #hamburger > rect:nth-child(1) {
  @apply origin-top-left rotate-45 translate-x-4 -translate-y-0;
}
.open #hamburger > rect:nth-child(2) {
  @apply opacity-0;
}
.open #hamburger > rect:nth-child(3) {
  @apply origin-bottom-left -rotate-45 translate-x-8;
}

.nav {
  @apply z-0 flex-1 flex items-start sm:items-center;
  @apply absolute sm:relative inset-0 h-screen sm:h-12;
  @apply bg-white/90 sm:bg-transparent;
  @apply transition duration-500 ease-out;
  @apply -translate-y-full sm:translate-y-0;
}
.open .nav {
  @apply translate-y-0;
}
</style>