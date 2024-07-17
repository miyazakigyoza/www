<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Gyoza Tour</p>
        <p class="font-serif text-xl">宮崎県内ぐるっと餃子食べつくしMAP</p>
      </h1>
    </header>

    <h1 class="mt-8 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">
      宮崎市食べ歩きコース
    </h1>
    <section class="mt-8 container mx-auto">

      <Spot :spot="shop('ryo')" :zoom="17"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 3分
      </div>

      <Spot :spot="spots[0]" :zoom="17"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 5分
      </div>

      <Spot :spot="shop('yodogawa')" :zoom="17"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-car-side" /> 5分
      </div>

      <Spot :spot="shop('kurobee')" :zoom="17"></Spot>

      <div class="drive">
        <font-awesome-icon icon="fa-solid fa-person-walking" /> 2分
      </div>

      <Spot :spot="shop('daimyojin')" :zoom="17"></Spot>

    </section>

    <h1 class="mt-32 container mx-auto text-2xl sm:text-4xl pb-2 border-b border-solid border-amber-400 text-center font-serif font-black">その他のおすすめスポット</h1>

    <section class="mt-8 container mx-auto flex flex-col gap-12">
      <Spot :spot="spots[1]" :zoom="13"></Spot>
      <Spot :spot="spots[2]" :zoom="13"></Spot>
    </section>

    <section class="mt-20 container mx-auto">
      <div class="text-center">
        <p class="container mx-auto text-xl sm:text-2xl pb-2 border-b border-solid text-center font-serif font-black">
          その他の餃子食べ歩きコース
        </p>
      </div>
      <div class="mt-4 text-center flex flex-col sm:flex-row justify-between gap-4">
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

  </main>
</template>

<script>
export default {
  head() {
    return {
      title: '宮崎市食べ歩きコース',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '宮崎市食べ歩きコース' },
        { hid: 'description', name: 'description', content: '宮崎市の餃子を満喫できるモデルコースをご紹介します' },
        { hid: 'og:description', property: 'og:description', content: '宮崎の餃子を満喫できるモデルコースをご紹介します' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/tour/miyazaki/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  data: () => ({
    shops: [],
    spots: [
      {
        name: '宮崎県庁',
        description: '明治6年に建設され、現在の建物は昭和7年に建てられた2代目。近世ゴシック様式の重厚な外観と装飾が印象的な宮崎県庁。平成29年には国の登録有形文化財 に登録されました。無料の団体向け県庁ツアーも行っています ( 要予約 )。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/miyazaki/images/kentyohonkan.jpg'
        },
        address: {
          prefecture: '宮崎県',
          city: '宮崎市',
          street: '橘通東２丁目１０−１',
        },
        position: {
          lat: 31.91096285443753,
          lng: 131.4238952881903,
        }
      },
      {
        name: '堀切峠',
        description: '宮崎市の風景の代表ともいえる景観。南国ムード漂うフェニックス並木、青い海と青い空の絶景です。近くには「道の駅フェニックス」があり、絶景を見ながらソフトクリームや地元グルメを味わうことができるため、宮崎でも屈指のドライブコースとなっています。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/miyazaki/kanko/images/img_2527.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/miyazaki/kanko/13566.html',
        address: {
          prefecture: '宮崎県',
          city: '宮崎市',
          street: '内海９８４',
        },
        position: {
          lat: 31.776859154632596,
          lng: 131.4826968626458,
        }
      },
      {
        name: '宮崎神宮',
        description: '日本の初代天皇「神武天皇」を祀る神社。家内安全や夫婦和合、安産・子宝、必勝・合格祈願にご利益がるとされます。灯篭が灯る参道は神秘的な雰囲気が漂い、歩くだけで心身が浄化されたような気分になります。',
        profileImage: {
          src: 'https://www.kanko-miyazaki.jp/miyazaki/kanko/images/miyazaki_jingu.jpg'
        },
        url: 'https://www.kanko-miyazaki.jp/miyazaki/kanko/13084.html',
        address: {
          prefecture: '宮崎県',
          city: '宮崎市',
          street: '神宮2丁目4番1号',
        },
        position: {
          lat: 31.938699867840523,
          lng: 131.4236196116361,
        }
      },
    ]
  }),
  async asyncData({$axios, $config, params}){
    $axios.setToken($config.TOKEN, 'Bearer')
    const shops = await $axios.$get($config.API + '/members/shops', {
      params: {
        'slug[in]': 'ryo,yodogawa,kurobee,daimyojin'
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