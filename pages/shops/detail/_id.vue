<template>
  <main class="pt-8">
    <p class="py-4" v-if="shop.profileImage">
      <img :src="`${shop.profileImage.src}?w=1200&ar=1200:630&fit=crop`" :alt="shop.name" class="w-full" />
    </p>

    <article class="container mx-auto">

      <h1 class="mt-8 border-b border-solid border-amber-400 pb-2 font-serif text-2xl sm:text-4xl">{{ shop.name }}</h1>
      <div v-html="shop.description" class="mt-4 description"></div>


      <div v-if="products.items.length > 0" class="mt-8">
        <div class="grid sm:grid-cols-4 gap-4">
          <section  v-for="product in products.items" :key="product._id" class="product relative w-full h-full">
            <p v-if="product.image" class="overflow-hidden rounded-full">
              <img :src="product.image.src+'?w=600&ar=1:1&fit=crop'" :alt="product.name" class="image" />
            </p>
            <h3 class="text-center text-lg border-b border-dashed border-amber-400 mb-2 pb-2">
              {{ product.name }}
            </h3>
            <p v-if="product.quantity" class="text-center text-sm">{{ product.quantity }}</p>
            <p v-if="product.price" class="text-center text-sm">{{ product.price.toLocaleString() }}円（税込）</p>
            <p v-if="product.remark" class="text-center text-sm text-gray-500">{{ product.remark }}</p>
            <div class="mt-2 flex flex-col gap-2">
              <Range v-if="product.thickness" :n="product.thickness" :min="'薄'" :max="'厚'" :title="'皮の厚さ'"></Range>
              <Range v-if="product.size" :n="product.size" :min="'小'" :max="'大'" :title="'大きさ'"></Range>
              <Range v-if="product.garlic" :n="product.garlic" :min="'無'" :max="'多'" :title="'ニンニク量'"></Range>
            </div>
            <a v-if="product.url" :href="product.url" target="_blank" class="absolute inset-0"></a>
          </section>
        </div>
      </div>
      <div class="mt-8 grid sm:grid-cols-2 gap-8">
        <section class="flex flex-col gap-2">
          <h2 class="text-xl">店舗情報</h2>
          <dl v-if="shop.address">
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
            <dd><p><a :href="`tel:${shop.tel}`">{{ shop.tel }}</a></p></dd>
          </dl>
          <dl v-if="shop.hours.length">
            <dt>営業時間</dt>
            <dd>
              <p v-for="hour in shop.hours" :key="hour._id">{{ hour.data }}</p>
            </dd>
          </dl>
          <dl v-if="shop.closed.length > 0">
            <dt>定休日</dt>
            <dd class="flex flex-row gap-2">
              <p v-for="(day,i) in shop.closed" :key="i">{{day.data}}</p>
            </dd>
          </dl>
          <div v-if="shop.remarks" class="flex flex-col gap-4">
            <dl v-for="remark in shop.remarks" :key="remark._id">
              <dt>{{ remark.name }}</dt>
              <dd v-html="remark.text"></dd>
            </dl>
          </div>
          <div v-if="shop.links.length > 0" class="mt-8">
            <h3 class="text-xl">リンク</h3>
            <ul class="mt-2 list-disc list-inside space-y-2">
              <li v-for="link in shop.links" :key="link._id">
                <a :href="link.data.URL" target="_blank">{{ link.data.label }}</a>
              </li>
            </ul>
          </div>
        </section>
        <section v-if="map" class="sm:row-span-full">
          <iframe
            class="w-full h-full aspect-square"
            referrerpolicy="no-referrer-when-downgrade"
            :src="map"
            allowfullscreen>
          </iframe>
        </section>
        <section v-if="shop.company" class="flex flex-col gap-2">
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
          <div v-show="shop.company.links.length > 0" class="mt-8">
            <h3 class="text-xl">リンク</h3>
            <ul class="mt-2 list-disc list-inside space-y-2">
              <li v-for="link in shop.company.links" :key="link._id">
                <a :href="link.url" target="_blank">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section v-if="(relateds.items.length > 0)" class="mt-8">
        <h2 class="text-xl">関連店舗</h2>
        <ul class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
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
  head() {
    return {
      title: this.shop.name,
    }
  },
  data: () => ({
    shops: null,
    relateds: [],
    products: [],
  }),
  computed: {
    map() {
      const shop = this.shop
      const address = shop.address
      if (address && address.prefecture && address.city && address.street) {
        return 'https://www.google.com/maps/embed/v1/place?key='
          + this.$config.GOOGLE_MAP
          + '&q='
          + shop.name
          + ','
          + address.prefecture
          + address.city
          + address.street
      } else {
        return null
      }

    },
  },
  async asyncData({$axios, $config, params}){
    const id = params.id

    $axios.setToken($config.TOKEN, 'Bearer')
    const shop = await $axios.$get($config.API + '/members/shops/' + id, {
      params: {
        depth: 2,
      }
    })

    const relateds = shop.company
      ? await $axios.$get($config.API + '/members/shops', {
          params: {
            depth: 1,
            '_id[ne]': shop._id,
            'company': shop.company._id
          }
        })
      : {items: []};

      const products = shop.company
      ? await $axios.$get($config.API + '/members/products', {
          params: {
            depth: 1,
            'company': shop.company._id
          }
        })
      : {items:[]};

    return {
      shop,
      relateds,
      products,
    }
  },
}
</script>

<style scoped lang="postcss">
dl {
  @apply flex flex-col sm:flex-row gap-4;
}
dt {
  @apply w-24;
}
a {
  @apply underline decoration-dotted underline-offset-4;
}

.product .image {
  @apply transition-transform duration-300;
}
.product:hover .image {
  @apply scale-125;
}
.description >>> p {
  @apply mt-4;
}
</style>