<template>
  <div>

    <Nuxt></Nuxt>

    <footer class="bg-amber-400">
      <p class="container mx-auto mt-8 py-4 text-center">
        Copyright &copy; 宮崎県ひなた餃子連合会 2022
      </p>
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
          <img src="~/assets/img/logo-h.svg" alt="" class="h-full" />
        </NuxtLink>

        <nav class="nav">
          <ul
            class="
              p-4
              pt-20 sm:pt-4
              w-full
              grid grid-cols-1 sm:grid-cols-4
              place-items-center
              sm:divide-x sm:divide-solid sm:divide-amber-400
              text-sm
            "
          >
            <li class="w-full sm:text-center">
              <NuxtLink to="/shops/" @click.native="close">店舗一覧</NuxtLink>
            </li>
            <li class="w-full sm:text-center">
              <NuxtLink to="/" @click.native="close">お知らせ</NuxtLink>
            </li>
            <li class="w-full sm:text-center">
              <NuxtLink to="/" @click.native="close">宮崎餃子とは</NuxtLink>
            </li>
            <li class="w-full sm:text-center">
              <NuxtLink to="/" @click.native="close">お問い合わせ</NuxtLink>
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
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    const shops = await $axios.$get($config.API + '/members/shops')
    return {
      areas,
      shops,
    }
  },
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