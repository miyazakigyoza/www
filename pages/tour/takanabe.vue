<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Gyoza Tour</p>
        <p class="font-serif text-xl">宮崎県内ぐるっと餃子食べつくしMAP</p>
      </h1>
    </header>

    <h1 class="mt-8 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">
      餃子のまち高鍋コース
    </h1>
    <section class="mt-8 container mx-auto">

      <Spot :spot="shop('kiki')" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 5分
      </div>

      <Spot :spot="spots[0]" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 5分
      </div>

      <Spot :spot="spots[1]" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 5分
      </div>

      <Spot :spot="shop('takanabegyoza')" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 3分
      </div>

      <Spot :spot="shop('mawatari')" :zoom="14"></Spot>


    </section>

    <h1 class="mt-32 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">その他のおすすめスポット</h1>

    <section class="mt-8 container mx-auto flex flex-col gap-12">
      <Spot :spot="shop('fujiwarafarm')" :zoom="14"></Spot>
      <Spot :spot="shop('ippongi')" :zoom="14"></Spot>
    </section>


    <section class="mt-20 container mx-auto">
      <div class="text-center">
        <p class="container mx-auto text-xl sm:text-2xl pb-2 border-b border-solid text-center font-serif font-black">
          その他の餃子食べ歩きコース
        </p>
      </div>
      <div class="mt-4 text-center flex flex-col sm:flex-row justify-between gap-4">
        <NuxtLink
          to="/tour/miyazaki/"
          class="button">
          宮崎市食べ歩きマップ
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

  </main>
</template>

<script>
export default {
  head() {
    return {
      title: '宮崎市食べ歩きコース',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '餃子のまち高鍋コース' },
        { hid: 'description', name: 'description', content: '高鍋町の餃子を満喫できるモデルコースをご紹介します' },
        { hid: 'og:description', property: 'og:description', content: '高鍋町の餃子を満喫できるモデルコースをご紹介します' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/tour/takanabe/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  data: () => ({
    shops: [],
    spots: [
      {
        name: '高鍋大師',
        description: '四国八十八ヶ所を模した石像や6メート ルを超える石像など、約 700 体の石像 が立ち並ぶ石像郡。町北部の丘陵地に位置し、日向灘も一望できる 絶景地。見学は自由です。',
        profileImage: {
          src: 'https://miyazakigyoza.imgix.net/tour/takanabedaishi_03.jpg?w=960&ar=16:9&fit=crop'
        },
        address: {
          prefecture: '宮崎県',
          city: '児湯郡高鍋町',
          street: '持田',
        },
        position: {
          lat: 32.14461732094453,
          lng: 131.52061113601866,
        }
      },
      {
        name: '舞鶴公園',
        description: 'その地形が、鶴の羽ばたく姿に似ていた ことから、舞鶴城とも呼ばれた高鍋城の 史跡公園。「桜まつり」や「灯籠まつり」など、四季を通じ人々の憩いの場として 親しまれています。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/takanabe/kanko/images/maizurukouensakura20140203-111558.png'
        },
        url: 'https://www.kanko-miyazaki.jp/takanabe/kanko/11668.html',
        address: {
          prefecture: '宮崎県',
          city: '高鍋町大字南高鍋',
          street: '字旧城内',
        },
        position: {
          lat: 32.12328701341851,
          lng: 131.50190532893288,
        }
      },
    ]
  }),
  async asyncData({$axios, $config, params}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        'slug[in]': 'kiki,takanabegyoza,mawatari,fujiwarafarm,ippongi'
      }
    })
    return {
      shops: shops.items,
    }
  },
  methods: {
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
    },
    shop(slug) {
      return this.shops.find(shop => shop.slug === slug)
    },
  },
}
</script>

<style scoped lang="postcss">
.drive {
  @apply bg-gray-300 my-16 py-16 sm:py-12 text-center text-xl;
}

.button {
  @apply relative inline-block w-full max-w-xs py-2 bg-orange-500 text-white text-center no-underline;
}

</style>