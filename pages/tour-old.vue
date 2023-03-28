<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Gyoza Tour</p>
        <p class="font-serif text-xl">宮崎の餃子巡り モデルコース</p>
      </h1>
    </header>

    <section>
      <div class="container mx-auto sm:col-span-2">
        <Tour v-for="(spot, i) in spots" :key="i" :spot="spot"></Tour>
      </div>
    </section>

</main>
</template>

<script>
export default {
  head() {
    return {
      title: '宮崎県ひなた餃子連合会 会員マップ',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '宮崎の餃子巡り モデルコース' },
        { hid: 'description', name: 'description', content: '宮崎の餃子を満喫できるモデルコースをご紹介します' },
        { hid: 'og:description', property: 'og:description', content: '宮崎の餃子を満喫できるモデルコースをご紹介します' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/tour/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  data: () => ({
    spots: [
      {
        start: '9:50',
        end: '11:50',
        title: '羽田空港〜宮崎ブーゲンビリア空港',
        pos: { lat: 31.872470397376897, lng: 131.44130972070872 },
        zoom: 14,
      },
      {
        title: '車移動',
        start: '12:00',
        end: '12:25',
      },
      {
        start: '12:30',
        end: '13:00',
        title: '屋台骨',
        pos: { lat: 31.920504807072042, lng: 131.45544915055746 },
        zoom: 15,
        url: '/shop/yataibone/',
      },
      {
        title: '車移動',
        start: '13:10',
        end: '13:20',
      },
      {
        start: '13:25',
        end: '14:00',
        title: '鶏餃子専門店 802GYOZA',
        pos: { lat: 31.950791592885565, lng: 131.45996316397367 },
        zoom: 14,
      },
      {
        title: '車移動',
        start: '14:05',
        end: '14:15',
      },
      {
        start: '14:20',
        end: '15:30',
        title: '江田神社・みそぎ池',
        pos: { lat: 31.960642211371745, lng: 131.46519462310852 },
        zoom: 15,
      },
      {
        title: '車移動',
        start: '15:35',
        end: '16:05',
      },
      {
        start: '16:10',
        end: '17:10',
        title: 'やおやの餃子 りょうガーデン',
        pos: { lat: 31.915194457629205, lng: 131.42858655090285 },
        zoom: 17,
      },
      {
        title: '車移動',
        start: '17:15',
        end: '17:25',
      },
      {
        start: '17:30',
        end: '18:00',
        title: '餃子のよどがわ',
        pos: { lat: 31.918742891712256, lng: 131.4209370935307 },
        zoom: 17,
      },
      {
        title: '徒歩移動',
        start: '18:05',
        end: '18:15',
      },
      {
        start: '18:20',
        end: '18:40',
        title: 'ギョーザ専門店 黒兵衛',
        pos: { lat: 31.915230778867354, lng: 131.4203253634629 },
        zoom: 18,
      },
      {
        title: '徒歩移動',
        start: '18:45',
        end: '18:50',
      },
      {
        start: '18:55',
        end: '19:25',
        title: '丸鐡餃子',
        pos: { lat: 31.91363921961474, lng: 131.42107361791736 },
        zoom: 18,
      },
      {
        title: '車移動',
        start: '19:30',
        end: '19:50',
      },
      {
        start: '20:25',
        end: '22:00',
        title: '宮崎ブーゲンビリア空港〜羽田空港',
        pos: { lat: 31.872470397376897, lng: 131.44130972070872 },
        zoom: 14,
      },
    ]
  }),
  methods: {
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
    },    
  }
}
</script>

<style scoped lang="postcss">
</style>