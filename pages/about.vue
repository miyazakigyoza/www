<template>
  <main class="pt-16">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">About</p>
        <p class="font-serif text-xl">宮崎県ひなた餃子連合会について</p>
      </h1>
    </header>

    <section id="feature" class="container mx-auto mt-20 flex flex-col items-start sm:items-center gap-y-4">
      <h2 class="text-2xl border-b border-solid border-amber-400 pb-2">宮崎餃子の特色</h2>
      <p>
        宮崎県は、日照時間、快晴日数・平均気温が全国トップクラスで、燦々と降り注ぐ太陽の恵みにより、食料自給率や土地生産性が全国１位と、農畜産業が盛んです。
        そんな宮崎県では、餃子の原料もとても高品質。
        餃子には欠かせない「豚」の飼育頭数は全国トップクラス。エサや飼育方法にこだわった「宮崎ブランドポーク」も多様で、自然豊かな環境で育てられた豚は、やわらかで豊かな風味を持ち全国的にも人気。
      </p>
      <p>
        <img src="ingredients.jpg" alt="食材イメージ" class="w-96 mx-auto" />
      </p>
      <p>
        総務省が今年2月に発表した家計調査によると、2021年における宮崎市の餃子（ぎょうざ）1世帯（2人以上）当たりの支出金額が4,184円となり、浜松市、宇都宮市以外の都市として初めて全国1位となりました。<br />
        餃子専門店や持ち帰り専門店があり、スーパーでもさまざまな餃子が気軽に購入でき、餃子のお持ち帰り文化が宮崎に根付いていることがその理由だと考えられます。
      </p>
      <p>
        <img src="miya1.jpg" alt="＜祝　日本一！＞" class="w-96 mx-auto" />
      </p>
      <p>
        宮崎県内ではキャベツの名産地としても知られる「餃子のまち高鍋」という一大拠点があり、宮崎市だけでなく県全域に餃子をよく食べるという文化が広がっています。
      </p>

      <p>
        宮崎県ひなた餃子連合会では、毎月3日を「ぎょうざの日」としてPR活動に取り組むほか、宮崎県産原料を使った「宮崎餃子」の認定基準を策定し、将来的なブランド化を目指しています。
      </p>
      <p>
        <img src="/img/gyozaday-monthly.png" alt="" class="w-96 mx-auto" />
      </p>
    </section>

    <section id="organization" class="container mx-auto mt-20 flex flex-col items-start sm:items-center gap-y-2">
      <h2 class="text-2xl border-b border-solid border-amber-400 pb-2">宮崎県ひなた餃子連合会</h2>
      <p>
        <img src="/img/logo-1200s.jpg" alt="" class="w-48" />
      </p>
      <h3 class="mt-8 text-xl">組織概要</h3>
      <dl class="mt-4">
        <dt>名称</dt>
        <dd>宮崎県ひなた餃子連合会</dd>
      </dl>
      <dl>
        <dt>設立</dt>
        <dd>2022年1月</dd>
      </dl>
      <dl>
        <dt>代表者</dt>
        <dd>武末哲治</dd>
      </dl>
      <dl>
        <dt>事務局</dt>
        <dd>武末哲治</dd>
      </dl>

      <h3 class="mt-8 text-xl">支部</h3>

      <dl class="mt-4">
        <dt>県央支部</dt>
        <dd>
          <p>支部長： 馬渡陽一郎</p>
          <p>広報部長：</p>
        </dd>
      </dl>
      <dl>
        <dt>宮崎市支部</dt>
        <dd>
          <p>支部長：渡辺愛香</p>
          <p>広報部長：</p>
        </dd>
      </dl>
      <dl>
        <dt>県北支部</dt>
        <dd>
          <p>支部長：</p>
          <p>広報部長：</p>
        </dd>
      </dl>
      <dl>
        <dt>県西・県南支部</dt>
        <dd>
          <p>支部長：</p>
          <p>広報部長：</p>
        </dd>
      </dl>

    </section>

    <section id="history" class="container mx-auto flex flex-col items-start sm:items-center">
      <h3 class="mt-8 text-xl">沿革</h3>
      <dl class="mt-4">
        <dt>2022年<br />（令和4年）</dt>
        <dd>
          <dl>
            <dt>1月</dt>
            <dd>
              <p>宮崎県ひなた餃子連合会 設立</p>
            </dd>
          </dl>
        </dd>        
      </dl>
    </section>
</main>
</template>

<style scoped lang="postcss">
#feature p {
  @apply w-full sm:w-5/6;
}
#organization dl {
  @apply flex flex-col sm:flex-row flex-wrap gap-y-1;
  @apply border-b border-solid;
}
#organization dt,
#organization dd {
  @apply w-full;
}
#organization dt {
  @apply sm:w-32 pb-1 sm:pb-2 text-sm;
}
#organization dd {
  @apply sm:w-48 pb-2;
}

#history dl {
  @apply grid grid-cols-12;
  @apply divide-x;
  @apply text-sm;
}
#history dt {
  @apply col-span-3 lg:col-span-2;
  @apply p-1 text-right;
}
#history dt br {
  @apply inline sm:hidden;
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
</style>