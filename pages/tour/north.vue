<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Gyoza Tour</p>
        <p class="font-serif text-xl">宮崎県内ぐるっと餃子食べつくしMAP</p>
      </h1>
    </header>

    <h1 class="mt-8 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">
      県北ドライブコース
    </h1>
    <section class="mt-8 container mx-auto">

      <Spot :spot="spots[0]" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 20分
      </div>

      <Spot :spot="shop('shanghaigarden')" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 15分
      </div>

      <Spot :spot="spots[1]" :zoom="14"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 10分
      </div>

      <Spot :spot="shop('gyozanosato')" :zoom="14"></Spot>

    </section>

    <h1 class="mt-32 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">その他のおすすめスポット</h1>

    <section class="mt-8 container mx-auto flex flex-col gap-12">
      <Spot :spot="spots[2]" :zoom="14"></Spot>
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
          to="/tour/west/"
          class="button">
          県西ドライブコース
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
        name: '美々津伝統的建造物群 保存地区',
        description: '日向灘に面した美々津地区は、国の重要伝統的建 造物群保存地区に指定。江戸時代末期から昭和初 期にかけて建てられた情緒ある家屋が並んでいます。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/hyuga/kanko/images/mimitsu1.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/hyuga/kanko/10754.html',
        address: {
          prefecture: '宮崎県',
          city: '日向市',
          street: '美々津町中町3244',
        },
        position: {
          lat: 32.337194,
          lng: 131.6103902,
        }
      },
      {
        name: '日向岬・馬ケ背・クルスの海',
        description: '断崖絶壁の景色が楽しめる、日向随一の絶景のポイント。近隣にある願いが叶うクルスの海では、「叶」という字に見える岩場にお祈りをすると願いが叶うと言い伝えがあります。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/hyuga/kanko/images/kurusu3.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/hyuga/kanko/10755.html',
        address: {
          prefecture: '宮崎県',
          city: '日向市',
          street: '細島',
        },
        position: {
          lat: 32.424212,
          lng: 131.687026,
        }
      },
      {
        name: '道の駅 日向',
        description: '日豊海岸国定公園内に位置し、すぐ横には大平洋が広がっています。近隣には昨年完成した大型遊具施設、ドッグランをはじめ、オートキャンプ場、テニスコート、海岸遊歩道が整備されており、心と体のリフレッシュができます。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/hyuga/kanko/images/michi_hyuga.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/hyuga/kanko/10750.html',
        address: {
          prefecture: '宮崎県',
          city: '日向市',
          street: '大字幸脇241-7',
        },
        position: {
          lat: 32.343361,
          lng: 131.624044,
        }
      },
    ]
  }),
  async asyncData({$axios, $config, params}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        'slug[in]': 'shanghaigarden,gyozanosato'
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