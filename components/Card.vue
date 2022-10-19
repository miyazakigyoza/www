<template>
  <article
    class="relative aspect-[3/4] border border-solid overflow-hidden bg-amber-400 card">
    <p class="absolute inset-0">
      <img v-if="shop.profileImage" :src="shop.profileImage.src+'?w=640&ar=3:4&fit=crop'" alt="" class="image" />
    </p>
    <h1 class="tategaki text-2xl absolute top-2 left-2 bg-white/80 p-4">{{ shop.name }}</h1>
    <p class="absolute right-2 bottom-2 bg-black/60 text-white p-4">{{ shop.address.prefecture }} {{ shop.address.city }}</p>
    <NuxtLink :to="{path: `/shops/detail/${shop._id}/`}" class="absolute inset-0"></NuxtLink>
  </article>
</template>

<script>
export default {
  props: ['shop'],
}
</script>

<style scoped lang="postcss">
.tategaki {
  writing-mode: vertical-rl;
  @apply font-serif font-black;
}
.card .image {
  @apply transition ease-out duration-1000;
  @apply scale-100;
}
.card:hover .image {
  @apply scale-125;
}
</style>