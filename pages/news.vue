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
        v-for="entry in note"
        :key="entry.id"
        class="card">
          <p class="col-span-1 overflow-hidden flex flex-col justify-center">
            <img :src="entry.eyecatch" alt="" class="image object-cover h-full" />
          </p>
          <div class="col-span-2 flex flex-col justify-between gap-2">
            <p class="text-xs">{{ entry.publish_at }}</p>
            <p class="">{{ entry.name }}</p>
            <p class="text-right text-xs">{{ entry.user.name }}</p>
          </div>
        <a
          :href="`https://note.com/${entry.user.urlname}/n/${entry.key}?magazine_key=${$config.NOTE_MAGAZINE_ID}`"
          target="_blank"
          class="block absolute inset-0"></a>
      </li>
    </ul>

    <div class="mt-8">
        <a
          href="https://note.com/miyazakigyoza/m/mb1f3f7f5c14d"
          target="_blank"
          class="w-40 p-4 mx-auto text-lg flex flex-col justify-center items-center gap-2">
          <span>お知らせ一覧</span>
          <img src="/img/note.png" class="" />
        </a>
    </div>

</main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'お知らせ',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '宮崎県ひなた餃子連合会' },
        { hid: 'description', name: 'description', content: '宮崎県ひなた餃子連合会のお知らせ、イベント情報等' },
        { hid: 'og:description', property: 'og:description', content: '宮崎県ひなた餃子連合会のお知らせ、イベント情報等' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miyazakigyoza.jp/news/' },
        { hid: 'og:image', property: 'og:image', content: 'https://miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      note: 'note/contents',
    })
  },
  mounted() {
    this.$store.dispatch('note/fetchContents')
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

</style>