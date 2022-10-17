<template>
  <main class="container mx-auto flex flex-col space-y-4">

    <section>
      <p class="h-screen flex justify-center items-center">
        太陽の恵みがぎゅっと詰まった宮崎餃子
      </p>
    </section>

    <section>
      <p class="bg-slate-300 p-4 text-left">
        お知らせ
      </p>
    </section>

    <section>
      <p class="h-screen flex justify-center items-center">
        宮崎の餃子について
      </p>
    </section>

    <section class="flex flex-col items-center space-y-4 min-h-screen">
      <h1 class="text-xl">
        <NuxtLink to="/shops/">店舗一覧</NuxtLink>
      </h1>
      <ul class="flex flex-col sm:flex-row gap-4">
        <li
          v-for="area in areas.items"
          :key="area._id"
          class="w-32 text-center border border-solid">
          <NuxtLink :to="`shops/${area.slug}/`" class="block p-4">{{ area.name }}</NuxtLink>
        </li>
      </ul>
    </section>

    <section>
      <p class="flex justify-center">
        <img src="/img/gyozaday-monthly.png" alt="毎月3日は餃子の日" />
      </p>
    </section>

    <section>
      <p class="h-screen flex justify-center items-center">
        協賛バナー
      </p>
    </section>

    <section>
      <p class="h-screen flex justify-center items-center">
        お問い合わせ先
      </p>
    </section>

    <section>
      <p class="h-screen flex justify-center items-center">
        サイトマップ
      </p>
    </section>

</main>
</template>

<script>
export default {
  data: () => ({
    areas: [],
  }),
  async asyncData({$axios, $config}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    return {
      areas,
    }
  },
}
</script>
