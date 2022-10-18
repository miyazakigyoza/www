<template>
  <main class="pt-20">
    <article class="container mx-auto">
      <h1 class="text-3xl">{{ shop.name }}</h1>
      <p class="py-4">
        <img v-if="shop.profileImage" :src="`${shop.profileImage.src}?w=1200&ar=1200:630&fit=crop`" />
      </p>

      <section class="flex flex-col sm:flex-row sm:justify-around">

        <div class="flex flex-col gap-4">

          <dl>
            <dt>営業時間</dt>
            <dd v-html="shop.hours"></dd>
          </dl>

          <dl>
            <dt>定休日</dt>
            <dd>
              <p v-for="(day,i) in shop.holiday" :key="i">{{day}}</p>
            </dd>
          </dl>

          <dl>
            <dt>住所</dt>
            <dd>
              <p>〒{{ shop.address.postcode }}</p>
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

          <dl v-show="shop.parking">
            <dt>駐車場</dt>
            <dd v-html="shop.parking"></dd>
          </dl>

          <dl v-show="shop.seats">
            <dt>座席数</dt>
            <dd v-html="shop.seats"></dd>
          </dl>

          <dl v-show="shop.smoking.length>0">
            <dt>禁煙・喫煙</dt>
            <dd>
              <p v-for="(smoking,i) in shop.smoking" :key="i">{{smoking}}</p>
            </dd>
          </dl>

          <dl v-show="shop.facility.length>0">
            <dt>設備</dt>
            <dd>
              <p v-for="(facility,i) in shop.facility" :key="i">{{facility}}</p>
            </dd>
          </dl>

        </div>

        <div class="flex flex-col gap-4">

          <dl v-if="shop.company">
            <dt>会社名</dt>
            <dd>
              <p>{{ shop.company.name }}</p>
            </dd>
          </dl>

          <dl v-if="shop.company">
            <dt>代表者</dt>
            <dd><p>{{ shop.company.CEO }}</p></dd>
          </dl>

          <dl>
            <dt>リンク</dt>
            <dd class="flex flex-col gap-2">
              <p v-for="link in shop.links" :key="link._id">
                <a :href="link.data.URL" target="_blank">{{ link.data.label }}</a>
              </p>
            </dd>
          </dl>

        </div>
      </section>

      <section v-if="relateds && relateds.items.length > 0">
        <h2>関連店舗</h2>
        <ul class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li
            v-for="related in relateds.items"
            :key="related._id">
            <Card :shop="related"></Card>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>

<script>
export default {
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
            'company._id': shop.company._id
          }
        })
      : null
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