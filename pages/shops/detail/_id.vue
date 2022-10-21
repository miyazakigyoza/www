<template>
  <main class="pt-20">
    <article class="container mx-auto">
      <p class="py-4">
        <img v-if="shop.profileImage" :src="`${shop.profileImage.src}?w=1200&ar=1200:630&fit=crop`" />
      </p>

      <h1 class="mt-8 text-3xl border-b border-solid border-amber-400 pb-2">{{ shop.name }}</h1>
      <div v-html="shop.description" class="mt-4"></div>

      <div class="mt-8 flex flex-col gap-4">
        <h2 class="text-xl">店舗情報</h2>

        <dl>
          <dt>住所</dt>
          <dd>
            <p v-show="shop.address.postcode">〒{{ shop.address.postcode }}</p>
            <p>
              {{ shop.address.prefecture }}
              {{ shop.address.city }}<br class="inline lg:hidden" />
              {{ shop.address.street }}
              {{ shop.address.building }}
            </p>
          </dd>
        </dl>

        <dl v-show="shop.tel">
          <dt>TEL</dt>
          <dd><p>{{ shop.tel }}</p></dd>
        </dl>

        <dl>
          <dt>営業時間</dt>
          <dd>
            <p v-for="hour in shop.hours" :key="hour._id">{{ hour.data }}</p>
          </dd>
        </dl>

        <dl>
          <dt>定休日</dt>
          <dd>
            <p v-for="(day,i) in shop.holiday" :key="i">{{day}}</p>
          </dd>
        </dl>

        <div v-if="shop.remarks" class="flex flex-col gap-4">
          <dl v-for="remark in shop.remarks" :key="remark._id">
            <dt>{{ remark.name }}</dt>
            <dd v-html="remark.text"></dd>
          </dl>
        </div>

      </div>

      <div v-show="shop.company" class="mt-8 flex flex-col gap-4">
        <h2 class="text-xl">会社情報</h2>

        <dl v-show="shop.company.name">
          <dt>会社名</dt>
          <dd>
            <p>{{ shop.company.name }}</p>
          </dd>
        </dl>

        <dl v-show="shop.company.CEO">
          <dt>代表者</dt>
          <dd><p>{{ shop.company.CEO }}</p></dd>
        </dl>

        <dl v-show="shop.company.url">
          <dt>会社情報</dt>
          <dd>
            <p>
              <a :href="shop.company.url" target="_blank">{{ shop.company.url }}</a>
            </p>
          </dd>
        </dl>

      </div>

      <section v-if="relateds && relateds.items.length > 0" class="mt-8">
        <h2 class="text-xl">関連店舗</h2>
        <ul class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li
            v-for="related in relateds.items"
            :key="related._id">
            <Card :shop="related"></Card>
          </li>
        </ul>
      </section>

      <section class="mt-8 flex flex-col gap-4" v-show="shop.links.length">
        <h2 class="text-xl">リンク</h2>

        <ul class="list-disc list-inside space-y-2">
          <li v-for="link in shop.links" :key="link._id">
            <a :href="link.data.URL" target="_blank">{{ link.data.label }}</a>
          </li>
        </ul>


      </section>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.shop.name,
    }
  },
  data: () => ({
    areas: [],
    shops: null,
    relateds: [],
  }),
  async asyncData({$axios, $config, params}){
    const id = params.id

    $axios.setToken($config.TOKEN, 'Bearer')
    const areas = await $axios.$get($config.API + '/members/areas')
    const shop = await $axios.$get($config.API + '/members/shops/' + id)
    const relateds = shop.company
      ? await $axios.$get($config.API + '/members/shops', {
          params: {
            depth: 1,
            '_id[ne]': shop._id,
            'company': shop.company._id
          }
        })
      : null
      console.log(relateds)

    return {
      areas,
      shop,
      relateds,
    }
  },
}
</script>

<style scoped lang="postcss">
dl {
  @apply flex flex-col sm:flex-row;
}
dt {
  @apply w-24;
}
a {
  @apply underline decoration-dotted underline-offset-4;
}
</style>