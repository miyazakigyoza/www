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