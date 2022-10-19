<template>
  <div>
    <img
      :src="`${shop.profileImage.src}?w=1536&ar=16:9&fit=crop`"
      class="object-cover h-full w-full" />
      <p class="absolute right-1 bottom-1">
        <NuxtLink :to="`/shops/detail/${shop._id}/`" class="block bg-white text-black p-4">
          {{ shop.name }}
        </NuxtLink>
      </p>
  </div>
</template>

<script>
export default {
  props: ['shop'],
}
</script>
