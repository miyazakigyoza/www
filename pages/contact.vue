<template>
  <main class="pt-20">
    <header>
      <h1 class="text-center">
        <p class="font-enTitle text-6xl">Contact</p>
        <p class="font-serif text-xl">お問い合わせ</p>
      </h1>
    </header>

    <section class="mt-8 container mx-auto max-w-5xl">
      <p>
        当サイトについてのお問い合わせ、取材お申し込み、当連合会への加入お申し込み、賛助会員お申し込みなどご用件もご記入ください。<br />
        ご要望、ご質問事項の内容に応じて担当の者より ご連絡させていただきます。
      </p>
      <p>
        ※このページをご利用の際は当サイトのプライバシーポリシーが適用されます。
      </p>

      <div id="form" v-once class="mt-8 border borde-solid border-amber-400 p-4">
        <div class="p-4 flex flex-col justify-center items-center gap-4">
          <p class="text-6xl">
            <font-awesome-icon icon="fa-solid fa-spinner" class="loading" />
          </p>
          <p>フォーム読み込み中</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'お問い合わせ',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '宮崎県ひなた餃子連合会へのお問い合わせ' },
        { hid: 'description', name: 'description', content: '宮崎県ひなた餃子連合会へのお問い合わせはフォームからお送りください。' },
        { hid: 'og:description', property: 'og:description', content: '宮崎県ひなた餃子連合会へのお問い合わせフォームからお送りください。' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.miyazakigyoza.jp/contact/' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.miyazakigyoza.jp/img/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      script: [
        {
          hid: 'hubspot',
          src: 'https://js.hsforms.net/forms/embed/v2.js',
          defer: true,
          callback: () => { this.onLoadHubspot() }
        },
        {
          id: 'hs-script-loader',
          src: `//js-na1.hs-scripts.com/${this.$config.HUBSPOT_PORTALID}.js`,
          defer: true,
          async: true,
        }
      ],
    }
  },
  methods: {
    onLoadHubspot() {
      hbspt.forms.create({
        region: 'na1',
        portalId: this.$config.HUBSPOT_PORTALID,
        formId: this.$config.HUBSPOT_FORMID,
        target: '#form'
      });
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="postcss">
@keyframes rotation{
  0%{ transform:rotate(0);}
  100%{ transform:rotate(360deg); }
}

.loading {
  animation: rotation 1000ms linear;
}
</style>