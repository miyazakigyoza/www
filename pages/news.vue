<template>
  <main class="pt-16 relative">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">News</p>
        <p class="font-serif text-xl">お知らせ</p>
      </h1>
    </header>

    <ul class="mt-8 container mx-auto grid lg:grid-cols-2 gap-4">
      <li
        v-for="note in note.contents"
        :key="note.id"
        class="card">
          <p class="col-span-1 overflow-hidden flex flex-col justify-center">
            <img :src="note.eyecatch" alt="" class="image object-cover h-full" />
          </p>
          <div class="col-span-2 flex flex-col justify-between gap-2">
            <p class="text-xs">{{ note.publish_at }}</p>
            <p class="">{{ note.name }}</p>
            <p class="text-right text-xs">{{ note.user.name }}</p>
          </div>
        <a
          :href="`https://note.com/${note.user.urlname}/n/${note.key}?magazine_key=${noteMagazineId}`"
          target="_blank"
          class="block absolute inset-0"></a>
      </li>
    </ul>

    <div class="fixed top-1/2 right-0 -translate-y-1/2">
      <div class="">
        <a
        href="https://note.com/yaki_gyoza/m/m6c8cc8ac407b"
        target="_blank"
        class="tategaki block w-10 py-8 px-2 bg-orange-500 text-white text-center shadow-sm">
        <font-awesome-icon icon="fa-info-circle" />
        お知らせ一覧
      </a>

      </div>
    </div>

</main>
</template>

<script>
export default {
  data: () => ({
    note: [],
    noteMagazineId: null,
  }),
  async asyncData({$axios, $config}){
    const note = await $axios.$get($config.NOTE_API, {params:{page:1}})
    const noteMagazineId = $config.NOTE_MAGAZINE_ID

    return {
      note: note.data.section,
      noteMagazineId,
    }
  },
}
</script>

<style scoped lang="postcss">
.card {
  @apply relative grid grid-cols-3 gap-4;
  @apply border-2 border-solid p-2;
}
.card:hover {
  @apply border-amber-400 border-2;
}
.card .image {
  @apply transition duration-500 ease-out;
  @apply scale-100;
}
.card:hover .image {
  @apply scale-125;
}

.tategaki {
  writing-mode: vertical-rl;
}

</style>