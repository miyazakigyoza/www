<template>
  <article>
    <h1 class="col-span-full text-xl sm:text-3xl pb-2 border-b border-solid border-amber-400">
      <NuxtLink v-if="spot.slug" :to="`/shop/${spot.slug}/`">{{ spot.name }}</NuxtLink>
      <a v-else-if="spot.url" :href="spot.url" target="_blank">{{ spot.name }}</a>
      <span v-else>{{ spot.name }}</span>
    </h1>
    <div class="mt-4 sm:grid sm:grid-rows-1 sm:grid-flow-col sm:grid-cols-3 gap-4">
      <div class="col-span-2">
        <img :src="`${spot.profileImage.src}?w=960&ar=16:9&fit=crop`" class="w-full" />
        <p class="mt-4" v-html="spot.description"></p>
        <div v-if="spot.exterior" class="mt-4">
          <img :src="`${spot.exterior.src}?w=960&ar=1:1&fit=crop`" class="w-1/2" />
        </div>
      </div>

      <div class="col-span-1 flex flex-col justify-between text-sm">
        <div class="flex flex-col gap-2">
          <dl v-if="spot.address">
            <dt>住所</dt>
            <dd>
              <p v-show="spot.address.postcode">〒{{ spot.address.postcode }}</p>
              <p>
                {{ spot.address.prefecture }}
                {{ spot.address.city }}<br class="inline lg:hidden" />
                {{ spot.address.street }}
                {{ spot.address.building }}
              </p>
            </dd>
          </dl>
          <dl v-show="spot.tel">
            <dt>TEL</dt>
            <dd><p><a :href="`tel:${spot.tel}`">{{ spot.tel }}</a></p></dd>
          </dl>
          <dl v-if="spot.hours && spot.hours.length">
            <dt>営業時間</dt>
            <dd>
              <p v-for="hour in spot.hours" :key="hour._id">{{ hour.data }}</p>
            </dd>
          </dl>
          <dl v-if="spot.closed && spot.closed.length > 0">
            <dt>定休日</dt>
            <dd>
              <p v-for="(day,i) in spot.closed" :key="i">{{day.data}}</p>
            </dd>
          </dl>
        </div>
        <Map :position="spot.position" :zoom="zoom" class="mt-4 w-full aspect-square sm:aspect-auto sm:h-full"></Map>
      </div>

    </div>
      
  </article>
</template>

<script>

export default {
  props: ['spot', 'zoom'],
}
</script>

<style scoped lang="postcss">
dl {
  @apply flex justify-start flex-row gap-y-1 gap-x-4;
}
dt {
  @apply w-16;
}
dd {
  @apply flex-1;
}
</style>