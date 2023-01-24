<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Map</p>
        <p class="font-serif text-xl">宮崎県ひなた餃子連合会 店舗マップ</p>
      </h1>
    </header>

    <section class="mx-4">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1upVtF9JC5eGLh8YuKEDVRAzMmjr7CJc&hl=ja&ehbc=2E312F"
        class="w-full aspect-square md:aspect-video"
      ></iframe>
    </section>

</main>
</template>

<script>
export default {
  head() {
    return {
      title: '宮崎餃子の特色と宮崎県ひなた餃子連合会について',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '宮崎餃子の特色と宮崎県ひなた餃子連合会について' },
        { hid: 'description', name: 'description', content: '宮崎県ひなた餃子連合会は、宮崎県産の多種多様で高品質な食材が包まれた宮崎餃子のブランド化を目指しています。' },
        { hid: 'og:description', property: 'og:description', content: '宮崎県ひなた餃子連合会は、宮崎県産の多種多様で高品質な食材が包まれた宮崎餃子のブランド化を目指しています。' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/about/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  methods: {
    mail(name) {
      return name + '@miyazakigyoza.jp'
    },
  },
}
</script>

<style scoped lang="postcss">
#feature p,
#feature img {
  @apply mt-4;
}

#organization dl {
  @apply flex flex-col sm:flex-row flex-wrap gap-y-1;
  @apply border-t border-solid pt-2;
}
#organization dt,
#organization dd {
  @apply w-full;
}
#organization dt {
  @apply sm:w-20 pb-1 sm:pb-2 text-sm align-text-top;
}
#organization dd {
  @apply w-auto pb-2;
}
#organization dd p {
  @apply flex flex-col sm:flex-row justify-start items-start sm:items-center;
}
#organization span {
  @apply inline-block;
}

#history dl {
  @apply grid grid-cols-12;
  @apply divide-x;
  @apply text-sm;
}
#history dt {
  @apply col-span-3 lg:col-span-2;
  @apply p-1;
}
#history dd {
  @apply col-span-9 lg:col-span-10;
  @apply p-1;
}
#history dd dl {
  @apply divide-x-0;
}
#history dd dt {
  @apply col-span-2 sm:col-span-1;
}
#history dd dd {
  @apply col-span-10 sm:col-span-11;
}

.button {
  @apply relative inline-block w-full max-w-xs py-2 bg-orange-500 text-white text-center no-underline;
}
</style>