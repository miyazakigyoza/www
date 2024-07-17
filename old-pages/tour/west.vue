<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Gyoza Tour</p>
        <p class="font-serif text-xl">宮崎県内ぐるっと餃子食べつくしMAP</p>
      </h1>
    </header>

    <h1 class="mt-8 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">
      県西ドライブコース
    </h1>
    <section class="mt-8 container mx-auto">

      <Spot :spot="shop('yataibone')" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 20分
      </div>

      <Spot :spot="spots[0]" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 50分
      </div>

      <Spot :spot="shop('831')" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 45分
      </div>

      <Spot :spot="spots[1]" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 25分
      </div>

      <Spot :spot="spots[2]" :zoom="14"></Spot>

    </section>

    <h1 class="mt-32 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">その他のおすすめスポット</h1>

    <section class="mt-8 container mx-auto flex flex-col gap-12">
      <Spot :spot="spots[3]" :zoom="14"></Spot>
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
          to="/tour/takanabe/"
          class="button">
          餃子のまち高鍋コース
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
        { hid: 'og:title', property: 'og:title', content: '県西ドライブコース' },
        { hid: 'description', name: 'description', content: '宮崎県西部の餃子を満喫できるドライブコースをご紹介します' },
        { hid: 'og:description', property: 'og:description', content: '宮崎県西部の餃子を満喫できるドライブコースをご紹介します' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/tour/west/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  data: () => ({
    shops: [],
    spots: [
      {
        name: '青島周辺',
        description: '宮崎に来たらやっぱり青島♪縁結びにご利益があると言われる「青島神社」のほか、全国的にも有名な「鬼の洗濯板」のほか、青島ビーチパークなど、オシャレスポットも満載!',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/miyazaki/kanko/images/aoshima.jpeg'
        },
        url: 'https://www.kanko-miyazaki.jp/miyazaki/kanko/aoshima.html',
        address: {
          prefecture: '宮崎県',
          city: '宮崎市',
          street: '青島',
        },
        position: {
          lat: 31.805055,
          lng: 131.476145,
        }
      },
      {
        name: '花の駅生駒高原',
        description: '季節によって常に花が楽しめるスポット。春はポピー、秋にはコスモスが多く咲き誇り、県内外客 で賑わいます。広場から見える壮大な景色は心を癒してくれます。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/kobayashi/kanko/images/img_2207c.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/kobayashi/kanko/10572.html',
        address: {
          prefecture: '宮崎県',
          city: '小林市',
          street: '南西方8565',
        },
        position: {
          lat: 31.979824,
          lng: 130.906478,
        }
      },
      {
        name: '道の駅 えびの',
        description: '霧島連山が眺望できる、熊本県・鹿児島県との県境にある道の駅。地元で穫れたみ ずみずしい野菜やフルーツ、宮崎牛の販売もあり、えびのの農産物を満喫できるバ イキングもオススメです。山之口畜産の「やまちく餃子」が購入できます♪',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/ebino/kanko/images/michi_ebino.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/ebino/kanko/michinoekiebino.html',
        address: {
          prefecture: '宮崎県',
          city: '小林市',
          street: '南西方8565',
        },
        position: {
          lat: 32.049959,
          lng: 130.805187,
        }
      },
      {
        name: 'のじりこぴあ',
        description: 'カエルのモニュメントが印象的な、野尻湖湖畔にある子供から大人まで楽しめる自然いっぱいの総合レジャーランド。夏にはウォータースライダーを備えたプールで楽しめます。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/kobayashi/kanko/images/nojirikopia.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/kobayashi/kanko/10578.html',
        address: {
          prefecture: '宮崎県',
          city: '小林市',
          street: '野尻町東麓5160',
        },
        position: {
          lat: 31.9569225,
          lng: 131.1234263,
        }
      },
    ]
  }),
  async asyncData({$axios, $config, params}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        'slug[in]': 'yataibone,831'
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
  @apply relative inline-block w-full max-w-xs py-2 bg-amber-400 text-black text-center no-underline;
}

</style>