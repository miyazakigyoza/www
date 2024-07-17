<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Map</p>
        <p class="font-serif text-xl">宮崎県ひなた餃子連合会 店舗マップ</p>
      </h1>
    </header>

    <section class="mt-4 container mx-auto max-w-3xl text-center">
      <a class="button" href="https://www.google.com/maps/d/viewer?mid=1upVtF9JC5eGLh8YuKEDVRAzMmjr7CJc&hl=ja&usp=sharing" target="_blank">Google Mapで開く</a>
    </section>

    <section class="mt-4 mx-auto max-w-3xl">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1upVtF9JC5eGLh8YuKEDVRAzMmjr7CJc&hl=ja&ehbc=2E312F"
        class="w-full aspect-square"
      ></iframe>
    </section>

    <!--
    <section class="mt-4 container mx-auto">
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
    -->

</main>
</template>

<script>
export default {
  head() {
    return {
      title: '宮崎県ひなた餃子連合会 会員マップ',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '宮崎県ひなた餃子連合会 会員マップ' },
        { hid: 'description', name: 'description', content: '宮崎県ひなた餃子連合会の会員店舗と、宮崎県内の観光地を掲載しています。' },
        { hid: 'og:description', property: 'og:description', content: '宮崎県ひなた餃子連合会の会員店舗と、宮崎県内の観光地を掲載しています。' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/map/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>

<style scoped lang="postcss">
.button {
  @apply relative inline-block w-full max-w-xs py-2 bg-orange-500 text-white text-center no-underline;
}
</style>